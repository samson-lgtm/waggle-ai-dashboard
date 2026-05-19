var ok=Object.defineProperty;var ik=(e,t,n)=>t in e?ok(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ve=(e,t,n)=>ik(e,typeof t!="symbol"?t+"":t,n);function uk(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hf={exports:{}},$u={},mf={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aI;function sk(){if(aI)return Le;aI=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),d=Symbol.iterator;function v(H){return H===null||typeof H!="object"?null:(H=d&&H[d]||H["@@iterator"],typeof H=="function"?H:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,I={};function b(H,F,J){this.props=H,this.context=F,this.refs=I,this.updater=J||y}b.prototype.isReactComponent={},b.prototype.setState=function(H,F){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,F,"setState")},b.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function S(){}S.prototype=b.prototype;function W(H,F,J){this.props=H,this.context=F,this.refs=I,this.updater=J||y}var A=W.prototype=new S;A.constructor=W,x(A,b.prototype),A.isPureReactComponent=!0;var O=Array.isArray,w=Object.prototype.hasOwnProperty,_={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function P(H,F,J){var ue,he={},ge=null,ye=null;if(F!=null)for(ue in F.ref!==void 0&&(ye=F.ref),F.key!==void 0&&(ge=""+F.key),F)w.call(F,ue)&&!E.hasOwnProperty(ue)&&(he[ue]=F[ue]);var fe=arguments.length-2;if(fe===1)he.children=J;else if(1<fe){for(var ne=Array(fe),de=0;de<fe;de++)ne[de]=arguments[de+2];he.children=ne}if(H&&H.defaultProps)for(ue in fe=H.defaultProps,fe)he[ue]===void 0&&(he[ue]=fe[ue]);return{$$typeof:e,type:H,key:ge,ref:ye,props:he,_owner:_.current}}function C(H,F){return{$$typeof:e,type:H.type,key:F,ref:H.ref,props:H.props,_owner:H._owner}}function T(H){return typeof H=="object"&&H!==null&&H.$$typeof===e}function j(H){var F={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(J){return F[J]})}var N=/\/+/g;function $(H,F){return typeof H=="object"&&H!==null&&H.key!=null?j(""+H.key):F.toString(36)}function V(H,F,J,ue,he){var ge=typeof H;(ge==="undefined"||ge==="boolean")&&(H=null);var ye=!1;if(H===null)ye=!0;else switch(ge){case"string":case"number":ye=!0;break;case"object":switch(H.$$typeof){case e:case t:ye=!0}}if(ye)return ye=H,he=he(ye),H=ue===""?"."+$(ye,0):ue,O(he)?(J="",H!=null&&(J=H.replace(N,"$&/")+"/"),V(he,F,J,"",function(de){return de})):he!=null&&(T(he)&&(he=C(he,J+(!he.key||ye&&ye.key===he.key?"":(""+he.key).replace(N,"$&/")+"/")+H)),F.push(he)),1;if(ye=0,ue=ue===""?".":ue+":",O(H))for(var fe=0;fe<H.length;fe++){ge=H[fe];var ne=ue+$(ge,fe);ye+=V(ge,F,J,ne,he)}else if(ne=v(H),typeof ne=="function")for(H=ne.call(H),fe=0;!(ge=H.next()).done;)ge=ge.value,ne=ue+$(ge,fe++),ye+=V(ge,F,J,ne,he);else if(ge==="object")throw F=String(H),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return ye}function q(H,F,J){if(H==null)return H;var ue=[],he=0;return V(H,ue,"","",function(ge){return F.call(J,ge,he++)}),ue}function G(H){if(H._status===-1){var F=H._result;F=F(),F.then(function(J){(H._status===0||H._status===-1)&&(H._status=1,H._result=J)},function(J){(H._status===0||H._status===-1)&&(H._status=2,H._result=J)}),H._status===-1&&(H._status=0,H._result=F)}if(H._status===1)return H._result.default;throw H._result}var K={current:null},L={transition:null},Y={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:L,ReactCurrentOwner:_};function Q(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:q,forEach:function(H,F,J){q(H,function(){F.apply(this,arguments)},J)},count:function(H){var F=0;return q(H,function(){F++}),F},toArray:function(H){return q(H,function(F){return F})||[]},only:function(H){if(!T(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},Le.Component=b,Le.Fragment=n,Le.Profiler=a,Le.PureComponent=W,Le.StrictMode=r,Le.Suspense=c,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,Le.act=Q,Le.cloneElement=function(H,F,J){if(H==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+H+".");var ue=x({},H.props),he=H.key,ge=H.ref,ye=H._owner;if(F!=null){if(F.ref!==void 0&&(ge=F.ref,ye=_.current),F.key!==void 0&&(he=""+F.key),H.type&&H.type.defaultProps)var fe=H.type.defaultProps;for(ne in F)w.call(F,ne)&&!E.hasOwnProperty(ne)&&(ue[ne]=F[ne]===void 0&&fe!==void 0?fe[ne]:F[ne])}var ne=arguments.length-2;if(ne===1)ue.children=J;else if(1<ne){fe=Array(ne);for(var de=0;de<ne;de++)fe[de]=arguments[de+2];ue.children=fe}return{$$typeof:e,type:H.type,key:he,ref:ge,props:ue,_owner:ye}},Le.createContext=function(H){return H={$$typeof:s,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},H.Provider={$$typeof:i,_context:H},H.Consumer=H},Le.createElement=P,Le.createFactory=function(H){var F=P.bind(null,H);return F.type=H,F},Le.createRef=function(){return{current:null}},Le.forwardRef=function(H){return{$$typeof:l,render:H}},Le.isValidElement=T,Le.lazy=function(H){return{$$typeof:h,_payload:{_status:-1,_result:H},_init:G}},Le.memo=function(H,F){return{$$typeof:f,type:H,compare:F===void 0?null:F}},Le.startTransition=function(H){var F=L.transition;L.transition={};try{H()}finally{L.transition=F}},Le.unstable_act=Q,Le.useCallback=function(H,F){return K.current.useCallback(H,F)},Le.useContext=function(H){return K.current.useContext(H)},Le.useDebugValue=function(){},Le.useDeferredValue=function(H){return K.current.useDeferredValue(H)},Le.useEffect=function(H,F){return K.current.useEffect(H,F)},Le.useId=function(){return K.current.useId()},Le.useImperativeHandle=function(H,F,J){return K.current.useImperativeHandle(H,F,J)},Le.useInsertionEffect=function(H,F){return K.current.useInsertionEffect(H,F)},Le.useLayoutEffect=function(H,F){return K.current.useLayoutEffect(H,F)},Le.useMemo=function(H,F){return K.current.useMemo(H,F)},Le.useReducer=function(H,F,J){return K.current.useReducer(H,F,J)},Le.useRef=function(H){return K.current.useRef(H)},Le.useState=function(H){return K.current.useState(H)},Le.useSyncExternalStore=function(H,F,J){return K.current.useSyncExternalStore(H,F,J)},Le.useTransition=function(){return K.current.useTransition()},Le.version="18.3.1",Le}var oI;function sy(){return oI||(oI=1,mf.exports=sk()),mf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iI;function lk(){if(iI)return $u;iI=1;var e=sy(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(l,c,f){var h,d={},v=null,y=null;f!==void 0&&(v=""+f),c.key!==void 0&&(v=""+c.key),c.ref!==void 0&&(y=c.ref);for(h in c)r.call(c,h)&&!i.hasOwnProperty(h)&&(d[h]=c[h]);if(l&&l.defaultProps)for(h in c=l.defaultProps,c)d[h]===void 0&&(d[h]=c[h]);return{$$typeof:t,type:l,key:v,ref:y,props:d,_owner:a.current}}return $u.Fragment=n,$u.jsx=s,$u.jsxs=s,$u}var uI;function pk(){return uI||(uI=1,hf.exports=lk()),hf.exports}var M=pk(),cp={},vf={exports:{}},vn={},gf={exports:{}},yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sI;function ck(){return sI||(sI=1,(function(e){function t(L,Y){var Q=L.length;L.push(Y);e:for(;0<Q;){var H=Q-1>>>1,F=L[H];if(0<a(F,Y))L[H]=Y,L[Q]=F,Q=H;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var Y=L[0],Q=L.pop();if(Q!==Y){L[0]=Q;e:for(var H=0,F=L.length,J=F>>>1;H<J;){var ue=2*(H+1)-1,he=L[ue],ge=ue+1,ye=L[ge];if(0>a(he,Q))ge<F&&0>a(ye,he)?(L[H]=ye,L[ge]=Q,H=ge):(L[H]=he,L[ue]=Q,H=ue);else if(ge<F&&0>a(ye,Q))L[H]=ye,L[ge]=Q,H=ge;else break e}}return Y}function a(L,Y){var Q=L.sortIndex-Y.sortIndex;return Q!==0?Q:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],f=[],h=1,d=null,v=3,y=!1,x=!1,I=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(L){for(var Y=n(f);Y!==null;){if(Y.callback===null)r(f);else if(Y.startTime<=L)r(f),Y.sortIndex=Y.expirationTime,t(c,Y);else break;Y=n(f)}}function O(L){if(I=!1,A(L),!x)if(n(c)!==null)x=!0,G(w);else{var Y=n(f);Y!==null&&K(O,Y.startTime-L)}}function w(L,Y){x=!1,I&&(I=!1,S(P),P=-1),y=!0;var Q=v;try{for(A(Y),d=n(c);d!==null&&(!(d.expirationTime>Y)||L&&!j());){var H=d.callback;if(typeof H=="function"){d.callback=null,v=d.priorityLevel;var F=H(d.expirationTime<=Y);Y=e.unstable_now(),typeof F=="function"?d.callback=F:d===n(c)&&r(c),A(Y)}else r(c);d=n(c)}if(d!==null)var J=!0;else{var ue=n(f);ue!==null&&K(O,ue.startTime-Y),J=!1}return J}finally{d=null,v=Q,y=!1}}var _=!1,E=null,P=-1,C=5,T=-1;function j(){return!(e.unstable_now()-T<C)}function N(){if(E!==null){var L=e.unstable_now();T=L;var Y=!0;try{Y=E(!0,L)}finally{Y?$():(_=!1,E=null)}}else _=!1}var $;if(typeof W=="function")$=function(){W(N)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,q=V.port2;V.port1.onmessage=N,$=function(){q.postMessage(null)}}else $=function(){b(N,0)};function G(L){E=L,_||(_=!0,$())}function K(L,Y){P=b(function(){L(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,G(w))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var Q=v;v=Y;try{return L()}finally{v=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=v;v=L;try{return Y()}finally{v=Q}},e.unstable_scheduleCallback=function(L,Y,Q){var H=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?H+Q:H):Q=H,L){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Q+F,L={id:h++,callback:Y,priorityLevel:L,startTime:Q,expirationTime:F,sortIndex:-1},Q>H?(L.sortIndex=Q,t(f,L),n(c)===null&&L===n(f)&&(I?(S(P),P=-1):I=!0,K(O,Q-H))):(L.sortIndex=F,t(c,L),x||y||(x=!0,G(w))),L},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(L){var Y=v;return function(){var Q=v;v=Y;try{return L.apply(this,arguments)}finally{v=Q}}}})(yf)),yf}var lI;function fk(){return lI||(lI=1,gf.exports=ck()),gf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pI;function dk(){if(pI)return vn;pI=1;var e=sy(),t=fk();function n(o){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+o,p=1;p<arguments.length;p++)u+="&args[]="+encodeURIComponent(arguments[p]);return"Minified React error #"+o+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function i(o,u){s(o,u),s(o+"Capture",u)}function s(o,u){for(a[o]=u,o=0;o<u.length;o++)r.add(u[o])}var l=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},d={};function v(o){return c.call(d,o)?!0:c.call(h,o)?!1:f.test(o)?d[o]=!0:(h[o]=!0,!1)}function y(o,u,p,m){if(p!==null&&p.type===0)return!1;switch(typeof u){case"function":case"symbol":return!0;case"boolean":return m?!1:p!==null?!p.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function x(o,u,p,m){if(u===null||typeof u>"u"||y(o,u,p,m))return!0;if(m)return!1;if(p!==null)switch(p.type){case 3:return!u;case 4:return u===!1;case 5:return isNaN(u);case 6:return isNaN(u)||1>u}return!1}function I(o,u,p,m,g,B,k){this.acceptsBooleans=u===2||u===3||u===4,this.attributeName=m,this.attributeNamespace=g,this.mustUseProperty=p,this.propertyName=o,this.type=u,this.sanitizeURL=B,this.removeEmptyString=k}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){b[o]=new I(o,0,!1,o,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var u=o[0];b[u]=new I(u,1,!1,o[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(o){b[o]=new I(o,2,!1,o.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){b[o]=new I(o,2,!1,o,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){b[o]=new I(o,3,!1,o.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(o){b[o]=new I(o,3,!0,o,null,!1,!1)}),["capture","download"].forEach(function(o){b[o]=new I(o,4,!1,o,null,!1,!1)}),["cols","rows","size","span"].forEach(function(o){b[o]=new I(o,6,!1,o,null,!1,!1)}),["rowSpan","start"].forEach(function(o){b[o]=new I(o,5,!1,o.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function W(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var u=o.replace(S,W);b[u]=new I(u,1,!1,o,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var u=o.replace(S,W);b[u]=new I(u,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(o){var u=o.replace(S,W);b[u]=new I(u,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!1,!1)}),b.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!0,!0)});function A(o,u,p,m){var g=b.hasOwnProperty(u)?b[u]:null;(g!==null?g.type!==0:m||!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(x(u,p,g,m)&&(p=null),m||g===null?v(u)&&(p===null?o.removeAttribute(u):o.setAttribute(u,""+p)):g.mustUseProperty?o[g.propertyName]=p===null?g.type===3?!1:"":p:(u=g.attributeName,m=g.attributeNamespace,p===null?o.removeAttribute(u):(g=g.type,p=g===3||g===4&&p===!0?"":""+p,m?o.setAttributeNS(m,u,p):o.setAttribute(u,p))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),_=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),j=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),L=Symbol.iterator;function Y(o){return o===null||typeof o!="object"?null:(o=L&&o[L]||o["@@iterator"],typeof o=="function"?o:null)}var Q=Object.assign,H;function F(o){if(H===void 0)try{throw Error()}catch(p){var u=p.stack.trim().match(/\n( *(at )?)/);H=u&&u[1]||""}return`
`+H+o}var J=!1;function ue(o,u){if(!o||J)return"";J=!0;var p=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(u)if(u=function(){throw Error()},Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(te){var m=te}Reflect.construct(o,[],u)}else{try{u.call()}catch(te){m=te}o.call(u.prototype)}else{try{throw Error()}catch(te){m=te}o()}}catch(te){if(te&&m&&typeof te.stack=="string"){for(var g=te.stack.split(`
`),B=m.stack.split(`
`),k=g.length-1,D=B.length-1;1<=k&&0<=D&&g[k]!==B[D];)D--;for(;1<=k&&0<=D;k--,D--)if(g[k]!==B[D]){if(k!==1||D!==1)do if(k--,D--,0>D||g[k]!==B[D]){var z=`
`+g[k].replace(" at new "," at ");return o.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",o.displayName)),z}while(1<=k&&0<=D);break}}}finally{J=!1,Error.prepareStackTrace=p}return(o=o?o.displayName||o.name:"")?F(o):""}function he(o){switch(o.tag){case 5:return F(o.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return o=ue(o.type,!1),o;case 11:return o=ue(o.type.render,!1),o;case 1:return o=ue(o.type,!0),o;default:return""}}function ge(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case E:return"Fragment";case _:return"Portal";case C:return"Profiler";case P:return"StrictMode";case $:return"Suspense";case V:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case j:return(o.displayName||"Context")+".Consumer";case T:return(o._context.displayName||"Context")+".Provider";case N:var u=o.render;return o=o.displayName,o||(o=u.displayName||u.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case q:return u=o.displayName||null,u!==null?u:ge(o.type)||"Memo";case G:u=o._payload,o=o._init;try{return ge(o(u))}catch{}}return null}function ye(o){var u=o.type;switch(o.tag){case 24:return"Cache";case 9:return(u.displayName||"Context")+".Consumer";case 10:return(u._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=u.render,o=o.displayName||o.name||"",u.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return u;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(u);case 8:return u===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u}return null}function fe(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function ne(o){var u=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(u==="checkbox"||u==="radio")}function de(o){var u=ne(o)?"checked":"value",p=Object.getOwnPropertyDescriptor(o.constructor.prototype,u),m=""+o[u];if(!o.hasOwnProperty(u)&&typeof p<"u"&&typeof p.get=="function"&&typeof p.set=="function"){var g=p.get,B=p.set;return Object.defineProperty(o,u,{configurable:!0,get:function(){return g.call(this)},set:function(k){m=""+k,B.call(this,k)}}),Object.defineProperty(o,u,{enumerable:p.enumerable}),{getValue:function(){return m},setValue:function(k){m=""+k},stopTracking:function(){o._valueTracker=null,delete o[u]}}}}function ce(o){o._valueTracker||(o._valueTracker=de(o))}function re(o){if(!o)return!1;var u=o._valueTracker;if(!u)return!0;var p=u.getValue(),m="";return o&&(m=ne(o)?o.checked?"true":"false":o.value),o=m,o!==p?(u.setValue(o),!0):!1}function Re(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function Pe(o,u){var p=u.checked;return Q({},u,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:p??o._wrapperState.initialChecked})}function Ce(o,u){var p=u.defaultValue==null?"":u.defaultValue,m=u.checked!=null?u.checked:u.defaultChecked;p=fe(u.value!=null?u.value:p),o._wrapperState={initialChecked:m,initialValue:p,controlled:u.type==="checkbox"||u.type==="radio"?u.checked!=null:u.value!=null}}function Ae(o,u){u=u.checked,u!=null&&A(o,"checked",u,!1)}function Fe(o,u){Ae(o,u);var p=fe(u.value),m=u.type;if(p!=null)m==="number"?(p===0&&o.value===""||o.value!=p)&&(o.value=""+p):o.value!==""+p&&(o.value=""+p);else if(m==="submit"||m==="reset"){o.removeAttribute("value");return}u.hasOwnProperty("value")?qe(o,u.type,p):u.hasOwnProperty("defaultValue")&&qe(o,u.type,fe(u.defaultValue)),u.checked==null&&u.defaultChecked!=null&&(o.defaultChecked=!!u.defaultChecked)}function je(o,u,p){if(u.hasOwnProperty("value")||u.hasOwnProperty("defaultValue")){var m=u.type;if(!(m!=="submit"&&m!=="reset"||u.value!==void 0&&u.value!==null))return;u=""+o._wrapperState.initialValue,p||u===o.value||(o.value=u),o.defaultValue=u}p=o.name,p!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,p!==""&&(o.name=p)}function qe(o,u,p){(u!=="number"||Re(o.ownerDocument)!==o)&&(p==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+p&&(o.defaultValue=""+p))}var Ke=Array.isArray;function Bt(o,u,p,m){if(o=o.options,u){u={};for(var g=0;g<p.length;g++)u["$"+p[g]]=!0;for(p=0;p<o.length;p++)g=u.hasOwnProperty("$"+o[p].value),o[p].selected!==g&&(o[p].selected=g),g&&m&&(o[p].defaultSelected=!0)}else{for(p=""+fe(p),u=null,g=0;g<o.length;g++){if(o[g].value===p){o[g].selected=!0,m&&(o[g].defaultSelected=!0);return}u!==null||o[g].disabled||(u=o[g])}u!==null&&(u.selected=!0)}}function vt(o,u){if(u.dangerouslySetInnerHTML!=null)throw Error(n(91));return Q({},u,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function On(o,u){var p=u.value;if(p==null){if(p=u.children,u=u.defaultValue,p!=null){if(u!=null)throw Error(n(92));if(Ke(p)){if(1<p.length)throw Error(n(93));p=p[0]}u=p}u==null&&(u=""),p=u}o._wrapperState={initialValue:fe(p)}}function gt(o,u){var p=fe(u.value),m=fe(u.defaultValue);p!=null&&(p=""+p,p!==o.value&&(o.value=p),u.defaultValue==null&&o.defaultValue!==p&&(o.defaultValue=p)),m!=null&&(o.defaultValue=""+m)}function Kt(o){var u=o.textContent;u===o._wrapperState.initialValue&&u!==""&&u!==null&&(o.value=u)}function xt(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jt(o,u){return o==null||o==="http://www.w3.org/1999/xhtml"?xt(u):o==="http://www.w3.org/2000/svg"&&u==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var pn,Wo=(function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(u,p,m,g){MSApp.execUnsafeLocalFunction(function(){return o(u,p,m,g)})}:o})(function(o,u){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=u;else{for(pn=pn||document.createElement("div"),pn.innerHTML="<svg>"+u.valueOf().toString()+"</svg>",u=pn.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;u.firstChild;)o.appendChild(u.firstChild)}});function ta(o,u){if(u){var p=o.firstChild;if(p&&p===o.lastChild&&p.nodeType===3){p.nodeValue=u;return}}o.textContent=u}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kn=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(o){kn.forEach(function(u){u=u+o.charAt(0).toUpperCase()+o.substring(1),Cn[u]=Cn[o]})});function na(o,u,p){return u==null||typeof u=="boolean"||u===""?"":p||typeof u!="number"||u===0||Cn.hasOwnProperty(o)&&Cn[o]?(""+u).trim():u+"px"}function ru(o,u){o=o.style;for(var p in u)if(u.hasOwnProperty(p)){var m=p.indexOf("--")===0,g=na(p,u[p],m);p==="float"&&(p="cssFloat"),m?o.setProperty(p,g):o[p]=g}}var pO=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function S0(o,u){if(u){if(pO[o]&&(u.children!=null||u.dangerouslySetInnerHTML!=null))throw Error(n(137,o));if(u.dangerouslySetInnerHTML!=null){if(u.children!=null)throw Error(n(60));if(typeof u.dangerouslySetInnerHTML!="object"||!("__html"in u.dangerouslySetInnerHTML))throw Error(n(61))}if(u.style!=null&&typeof u.style!="object")throw Error(n(62))}}function W0(o,u){if(o.indexOf("-")===-1)return typeof u.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A0=null;function _0(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var M0=null,Ao=null,_o=null;function Bb(o){if(o=Su(o)){if(typeof M0!="function")throw Error(n(280));var u=o.stateNode;u&&(u=Sl(u),M0(o.stateNode,o.type,u))}}function xb(o){Ao?_o?_o.push(o):_o=[o]:Ao=o}function wb(){if(Ao){var o=Ao,u=_o;if(_o=Ao=null,Bb(o),u)for(o=0;o<u.length;o++)Bb(u[o])}}function Pb(o,u){return o(u)}function Sb(){}var O0=!1;function Wb(o,u,p){if(O0)return o(u,p);O0=!0;try{return Pb(o,u,p)}finally{O0=!1,(Ao!==null||_o!==null)&&(Sb(),wb())}}function au(o,u){var p=o.stateNode;if(p===null)return null;var m=Sl(p);if(m===null)return null;p=m[u];e:switch(u){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(m=!m.disabled)||(o=o.type,m=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!m;break e;default:o=!1}if(o)return null;if(p&&typeof p!="function")throw Error(n(231,u,typeof p));return p}var C0=!1;if(l)try{var ou={};Object.defineProperty(ou,"passive",{get:function(){C0=!0}}),window.addEventListener("test",ou,ou),window.removeEventListener("test",ou,ou)}catch{C0=!1}function cO(o,u,p,m,g,B,k,D,z){var te=Array.prototype.slice.call(arguments,3);try{u.apply(p,te)}catch(ie){this.onError(ie)}}var iu=!1,rl=null,al=!1,k0=null,fO={onError:function(o){iu=!0,rl=o}};function dO(o,u,p,m,g,B,k,D,z){iu=!1,rl=null,cO.apply(fO,arguments)}function hO(o,u,p,m,g,B,k,D,z){if(dO.apply(this,arguments),iu){if(iu){var te=rl;iu=!1,rl=null}else throw Error(n(198));al||(al=!0,k0=te)}}function Fa(o){var u=o,p=o;if(o.alternate)for(;u.return;)u=u.return;else{o=u;do u=o,(u.flags&4098)!==0&&(p=u.return),o=u.return;while(o)}return u.tag===3?p:null}function Ab(o){if(o.tag===13){var u=o.memoizedState;if(u===null&&(o=o.alternate,o!==null&&(u=o.memoizedState)),u!==null)return u.dehydrated}return null}function _b(o){if(Fa(o)!==o)throw Error(n(188))}function mO(o){var u=o.alternate;if(!u){if(u=Fa(o),u===null)throw Error(n(188));return u!==o?null:o}for(var p=o,m=u;;){var g=p.return;if(g===null)break;var B=g.alternate;if(B===null){if(m=g.return,m!==null){p=m;continue}break}if(g.child===B.child){for(B=g.child;B;){if(B===p)return _b(g),o;if(B===m)return _b(g),u;B=B.sibling}throw Error(n(188))}if(p.return!==m.return)p=g,m=B;else{for(var k=!1,D=g.child;D;){if(D===p){k=!0,p=g,m=B;break}if(D===m){k=!0,m=g,p=B;break}D=D.sibling}if(!k){for(D=B.child;D;){if(D===p){k=!0,p=B,m=g;break}if(D===m){k=!0,m=B,p=g;break}D=D.sibling}if(!k)throw Error(n(189))}}if(p.alternate!==m)throw Error(n(190))}if(p.tag!==3)throw Error(n(188));return p.stateNode.current===p?o:u}function Mb(o){return o=mO(o),o!==null?Ob(o):null}function Ob(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var u=Ob(o);if(u!==null)return u;o=o.sibling}return null}var Cb=t.unstable_scheduleCallback,kb=t.unstable_cancelCallback,vO=t.unstable_shouldYield,gO=t.unstable_requestPaint,wt=t.unstable_now,yO=t.unstable_getCurrentPriorityLevel,E0=t.unstable_ImmediatePriority,Eb=t.unstable_UserBlockingPriority,ol=t.unstable_NormalPriority,bO=t.unstable_LowPriority,Nb=t.unstable_IdlePriority,il=null,fr=null;function IO(o){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(il,o,void 0,(o.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:wO,BO=Math.log,xO=Math.LN2;function wO(o){return o>>>=0,o===0?32:31-(BO(o)/xO|0)|0}var ul=64,sl=4194304;function uu(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function ll(o,u){var p=o.pendingLanes;if(p===0)return 0;var m=0,g=o.suspendedLanes,B=o.pingedLanes,k=p&268435455;if(k!==0){var D=k&~g;D!==0?m=uu(D):(B&=k,B!==0&&(m=uu(B)))}else k=p&~g,k!==0?m=uu(k):B!==0&&(m=uu(B));if(m===0)return 0;if(u!==0&&u!==m&&(u&g)===0&&(g=m&-m,B=u&-u,g>=B||g===16&&(B&4194240)!==0))return u;if((m&4)!==0&&(m|=p&16),u=o.entangledLanes,u!==0)for(o=o.entanglements,u&=m;0<u;)p=31-Yn(u),g=1<<p,m|=o[p],u&=~g;return m}function PO(o,u){switch(o){case 1:case 2:case 4:return u+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SO(o,u){for(var p=o.suspendedLanes,m=o.pingedLanes,g=o.expirationTimes,B=o.pendingLanes;0<B;){var k=31-Yn(B),D=1<<k,z=g[k];z===-1?((D&p)===0||(D&m)!==0)&&(g[k]=PO(D,u)):z<=u&&(o.expiredLanes|=D),B&=~D}}function N0(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Tb(){var o=ul;return ul<<=1,(ul&4194240)===0&&(ul=64),o}function T0(o){for(var u=[],p=0;31>p;p++)u.push(o);return u}function su(o,u,p){o.pendingLanes|=u,u!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,u=31-Yn(u),o[u]=p}function WO(o,u){var p=o.pendingLanes&~u;o.pendingLanes=u,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=u,o.mutableReadLanes&=u,o.entangledLanes&=u,u=o.entanglements;var m=o.eventTimes;for(o=o.expirationTimes;0<p;){var g=31-Yn(p),B=1<<g;u[g]=0,m[g]=-1,o[g]=-1,p&=~B}}function R0(o,u){var p=o.entangledLanes|=u;for(o=o.entanglements;p;){var m=31-Yn(p),g=1<<m;g&u|o[m]&u&&(o[m]|=u),p&=~g}}var Ze=0;function Rb(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var Hb,H0,jb,Db,$b,j0=!1,pl=[],ra=null,aa=null,oa=null,lu=new Map,pu=new Map,ia=[],AO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lb(o,u){switch(o){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":lu.delete(u.pointerId);break;case"gotpointercapture":case"lostpointercapture":pu.delete(u.pointerId)}}function cu(o,u,p,m,g,B){return o===null||o.nativeEvent!==B?(o={blockedOn:u,domEventName:p,eventSystemFlags:m,nativeEvent:B,targetContainers:[g]},u!==null&&(u=Su(u),u!==null&&H0(u)),o):(o.eventSystemFlags|=m,u=o.targetContainers,g!==null&&u.indexOf(g)===-1&&u.push(g),o)}function _O(o,u,p,m,g){switch(u){case"focusin":return ra=cu(ra,o,u,p,m,g),!0;case"dragenter":return aa=cu(aa,o,u,p,m,g),!0;case"mouseover":return oa=cu(oa,o,u,p,m,g),!0;case"pointerover":var B=g.pointerId;return lu.set(B,cu(lu.get(B)||null,o,u,p,m,g)),!0;case"gotpointercapture":return B=g.pointerId,pu.set(B,cu(pu.get(B)||null,o,u,p,m,g)),!0}return!1}function Fb(o){var u=qa(o.target);if(u!==null){var p=Fa(u);if(p!==null){if(u=p.tag,u===13){if(u=Ab(p),u!==null){o.blockedOn=u,$b(o.priority,function(){jb(p)});return}}else if(u===3&&p.stateNode.current.memoizedState.isDehydrated){o.blockedOn=p.tag===3?p.stateNode.containerInfo:null;return}}}o.blockedOn=null}function cl(o){if(o.blockedOn!==null)return!1;for(var u=o.targetContainers;0<u.length;){var p=$0(o.domEventName,o.eventSystemFlags,u[0],o.nativeEvent);if(p===null){p=o.nativeEvent;var m=new p.constructor(p.type,p);A0=m,p.target.dispatchEvent(m),A0=null}else return u=Su(p),u!==null&&H0(u),o.blockedOn=p,!1;u.shift()}return!0}function qb(o,u,p){cl(o)&&p.delete(u)}function MO(){j0=!1,ra!==null&&cl(ra)&&(ra=null),aa!==null&&cl(aa)&&(aa=null),oa!==null&&cl(oa)&&(oa=null),lu.forEach(qb),pu.forEach(qb)}function fu(o,u){o.blockedOn===u&&(o.blockedOn=null,j0||(j0=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,MO)))}function du(o){function u(g){return fu(g,o)}if(0<pl.length){fu(pl[0],o);for(var p=1;p<pl.length;p++){var m=pl[p];m.blockedOn===o&&(m.blockedOn=null)}}for(ra!==null&&fu(ra,o),aa!==null&&fu(aa,o),oa!==null&&fu(oa,o),lu.forEach(u),pu.forEach(u),p=0;p<ia.length;p++)m=ia[p],m.blockedOn===o&&(m.blockedOn=null);for(;0<ia.length&&(p=ia[0],p.blockedOn===null);)Fb(p),p.blockedOn===null&&ia.shift()}var Mo=O.ReactCurrentBatchConfig,fl=!0;function OO(o,u,p,m){var g=Ze,B=Mo.transition;Mo.transition=null;try{Ze=1,D0(o,u,p,m)}finally{Ze=g,Mo.transition=B}}function CO(o,u,p,m){var g=Ze,B=Mo.transition;Mo.transition=null;try{Ze=4,D0(o,u,p,m)}finally{Ze=g,Mo.transition=B}}function D0(o,u,p,m){if(fl){var g=$0(o,u,p,m);if(g===null)r2(o,u,m,dl,p),Lb(o,m);else if(_O(g,o,u,p,m))m.stopPropagation();else if(Lb(o,m),u&4&&-1<AO.indexOf(o)){for(;g!==null;){var B=Su(g);if(B!==null&&Hb(B),B=$0(o,u,p,m),B===null&&r2(o,u,m,dl,p),B===g)break;g=B}g!==null&&m.stopPropagation()}else r2(o,u,m,null,p)}}var dl=null;function $0(o,u,p,m){if(dl=null,o=_0(m),o=qa(o),o!==null)if(u=Fa(o),u===null)o=null;else if(p=u.tag,p===13){if(o=Ab(u),o!==null)return o;o=null}else if(p===3){if(u.stateNode.current.memoizedState.isDehydrated)return u.tag===3?u.stateNode.containerInfo:null;o=null}else u!==o&&(o=null);return dl=o,null}function zb(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yO()){case E0:return 1;case Eb:return 4;case ol:case bO:return 16;case Nb:return 536870912;default:return 16}default:return 16}}var ua=null,L0=null,hl=null;function Ub(){if(hl)return hl;var o,u=L0,p=u.length,m,g="value"in ua?ua.value:ua.textContent,B=g.length;for(o=0;o<p&&u[o]===g[o];o++);var k=p-o;for(m=1;m<=k&&u[p-m]===g[B-m];m++);return hl=g.slice(o,1<m?1-m:void 0)}function ml(o){var u=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&u===13&&(o=13)):o=u,o===10&&(o=13),32<=o||o===13?o:0}function vl(){return!0}function Vb(){return!1}function bn(o){function u(p,m,g,B,k){this._reactName=p,this._targetInst=g,this.type=m,this.nativeEvent=B,this.target=k,this.currentTarget=null;for(var D in o)o.hasOwnProperty(D)&&(p=o[D],this[D]=p?p(B):B[D]);return this.isDefaultPrevented=(B.defaultPrevented!=null?B.defaultPrevented:B.returnValue===!1)?vl:Vb,this.isPropagationStopped=Vb,this}return Q(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var p=this.nativeEvent;p&&(p.preventDefault?p.preventDefault():typeof p.returnValue!="unknown"&&(p.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var p=this.nativeEvent;p&&(p.stopPropagation?p.stopPropagation():typeof p.cancelBubble!="unknown"&&(p.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),u}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},F0=bn(Oo),hu=Q({},Oo,{view:0,detail:0}),kO=bn(hu),q0,z0,mu,gl=Q({},hu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:V0,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==mu&&(mu&&o.type==="mousemove"?(q0=o.screenX-mu.screenX,z0=o.screenY-mu.screenY):z0=q0=0,mu=o),q0)},movementY:function(o){return"movementY"in o?o.movementY:z0}}),Gb=bn(gl),EO=Q({},gl,{dataTransfer:0}),NO=bn(EO),TO=Q({},hu,{relatedTarget:0}),U0=bn(TO),RO=Q({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),HO=bn(RO),jO=Q({},Oo,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),DO=bn(jO),$O=Q({},Oo,{data:0}),Kb=bn($O),LO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zO(o){var u=this.nativeEvent;return u.getModifierState?u.getModifierState(o):(o=qO[o])?!!u[o]:!1}function V0(){return zO}var UO=Q({},hu,{key:function(o){if(o.key){var u=LO[o.key]||o.key;if(u!=="Unidentified")return u}return o.type==="keypress"?(o=ml(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?FO[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:V0,charCode:function(o){return o.type==="keypress"?ml(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?ml(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),VO=bn(UO),GO=Q({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qb=bn(GO),KO=Q({},hu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:V0}),QO=bn(KO),YO=Q({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),XO=bn(YO),ZO=Q({},gl,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),JO=bn(ZO),eC=[9,13,27,32],G0=l&&"CompositionEvent"in window,vu=null;l&&"documentMode"in document&&(vu=document.documentMode);var tC=l&&"TextEvent"in window&&!vu,Yb=l&&(!G0||vu&&8<vu&&11>=vu),Xb=" ",Zb=!1;function Jb(o,u){switch(o){case"keyup":return eC.indexOf(u.keyCode)!==-1;case"keydown":return u.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e1(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var Co=!1;function nC(o,u){switch(o){case"compositionend":return e1(u);case"keypress":return u.which!==32?null:(Zb=!0,Xb);case"textInput":return o=u.data,o===Xb&&Zb?null:o;default:return null}}function rC(o,u){if(Co)return o==="compositionend"||!G0&&Jb(o,u)?(o=Ub(),hl=L0=ua=null,Co=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(u.ctrlKey||u.altKey||u.metaKey)||u.ctrlKey&&u.altKey){if(u.char&&1<u.char.length)return u.char;if(u.which)return String.fromCharCode(u.which)}return null;case"compositionend":return Yb&&u.locale!=="ko"?null:u.data;default:return null}}var aC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t1(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u==="input"?!!aC[o.type]:u==="textarea"}function n1(o,u,p,m){xb(m),u=xl(u,"onChange"),0<u.length&&(p=new F0("onChange","change",null,p,m),o.push({event:p,listeners:u}))}var gu=null,yu=null;function oC(o){I1(o,0)}function yl(o){var u=Ro(o);if(re(u))return o}function iC(o,u){if(o==="change")return u}var r1=!1;if(l){var K0;if(l){var Q0="oninput"in document;if(!Q0){var a1=document.createElement("div");a1.setAttribute("oninput","return;"),Q0=typeof a1.oninput=="function"}K0=Q0}else K0=!1;r1=K0&&(!document.documentMode||9<document.documentMode)}function o1(){gu&&(gu.detachEvent("onpropertychange",i1),yu=gu=null)}function i1(o){if(o.propertyName==="value"&&yl(yu)){var u=[];n1(u,yu,o,_0(o)),Wb(oC,u)}}function uC(o,u,p){o==="focusin"?(o1(),gu=u,yu=p,gu.attachEvent("onpropertychange",i1)):o==="focusout"&&o1()}function sC(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return yl(yu)}function lC(o,u){if(o==="click")return yl(u)}function pC(o,u){if(o==="input"||o==="change")return yl(u)}function cC(o,u){return o===u&&(o!==0||1/o===1/u)||o!==o&&u!==u}var Xn=typeof Object.is=="function"?Object.is:cC;function bu(o,u){if(Xn(o,u))return!0;if(typeof o!="object"||o===null||typeof u!="object"||u===null)return!1;var p=Object.keys(o),m=Object.keys(u);if(p.length!==m.length)return!1;for(m=0;m<p.length;m++){var g=p[m];if(!c.call(u,g)||!Xn(o[g],u[g]))return!1}return!0}function u1(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function s1(o,u){var p=u1(o);o=0;for(var m;p;){if(p.nodeType===3){if(m=o+p.textContent.length,o<=u&&m>=u)return{node:p,offset:u-o};o=m}e:{for(;p;){if(p.nextSibling){p=p.nextSibling;break e}p=p.parentNode}p=void 0}p=u1(p)}}function l1(o,u){return o&&u?o===u?!0:o&&o.nodeType===3?!1:u&&u.nodeType===3?l1(o,u.parentNode):"contains"in o?o.contains(u):o.compareDocumentPosition?!!(o.compareDocumentPosition(u)&16):!1:!1}function p1(){for(var o=window,u=Re();u instanceof o.HTMLIFrameElement;){try{var p=typeof u.contentWindow.location.href=="string"}catch{p=!1}if(p)o=u.contentWindow;else break;u=Re(o.document)}return u}function Y0(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u&&(u==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||u==="textarea"||o.contentEditable==="true")}function fC(o){var u=p1(),p=o.focusedElem,m=o.selectionRange;if(u!==p&&p&&p.ownerDocument&&l1(p.ownerDocument.documentElement,p)){if(m!==null&&Y0(p)){if(u=m.start,o=m.end,o===void 0&&(o=u),"selectionStart"in p)p.selectionStart=u,p.selectionEnd=Math.min(o,p.value.length);else if(o=(u=p.ownerDocument||document)&&u.defaultView||window,o.getSelection){o=o.getSelection();var g=p.textContent.length,B=Math.min(m.start,g);m=m.end===void 0?B:Math.min(m.end,g),!o.extend&&B>m&&(g=m,m=B,B=g),g=s1(p,B);var k=s1(p,m);g&&k&&(o.rangeCount!==1||o.anchorNode!==g.node||o.anchorOffset!==g.offset||o.focusNode!==k.node||o.focusOffset!==k.offset)&&(u=u.createRange(),u.setStart(g.node,g.offset),o.removeAllRanges(),B>m?(o.addRange(u),o.extend(k.node,k.offset)):(u.setEnd(k.node,k.offset),o.addRange(u)))}}for(u=[],o=p;o=o.parentNode;)o.nodeType===1&&u.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<u.length;p++)o=u[p],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var dC=l&&"documentMode"in document&&11>=document.documentMode,ko=null,X0=null,Iu=null,Z0=!1;function c1(o,u,p){var m=p.window===p?p.document:p.nodeType===9?p:p.ownerDocument;Z0||ko==null||ko!==Re(m)||(m=ko,"selectionStart"in m&&Y0(m)?m={start:m.selectionStart,end:m.selectionEnd}:(m=(m.ownerDocument&&m.ownerDocument.defaultView||window).getSelection(),m={anchorNode:m.anchorNode,anchorOffset:m.anchorOffset,focusNode:m.focusNode,focusOffset:m.focusOffset}),Iu&&bu(Iu,m)||(Iu=m,m=xl(X0,"onSelect"),0<m.length&&(u=new F0("onSelect","select",null,u,p),o.push({event:u,listeners:m}),u.target=ko)))}function bl(o,u){var p={};return p[o.toLowerCase()]=u.toLowerCase(),p["Webkit"+o]="webkit"+u,p["Moz"+o]="moz"+u,p}var Eo={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},J0={},f1={};l&&(f1=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function Il(o){if(J0[o])return J0[o];if(!Eo[o])return o;var u=Eo[o],p;for(p in u)if(u.hasOwnProperty(p)&&p in f1)return J0[o]=u[p];return o}var d1=Il("animationend"),h1=Il("animationiteration"),m1=Il("animationstart"),v1=Il("transitionend"),g1=new Map,y1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sa(o,u){g1.set(o,u),i(u,[o])}for(var e2=0;e2<y1.length;e2++){var t2=y1[e2],hC=t2.toLowerCase(),mC=t2[0].toUpperCase()+t2.slice(1);sa(hC,"on"+mC)}sa(d1,"onAnimationEnd"),sa(h1,"onAnimationIteration"),sa(m1,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa(v1,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bu));function b1(o,u,p){var m=o.type||"unknown-event";o.currentTarget=p,hO(m,u,void 0,o),o.currentTarget=null}function I1(o,u){u=(u&4)!==0;for(var p=0;p<o.length;p++){var m=o[p],g=m.event;m=m.listeners;e:{var B=void 0;if(u)for(var k=m.length-1;0<=k;k--){var D=m[k],z=D.instance,te=D.currentTarget;if(D=D.listener,z!==B&&g.isPropagationStopped())break e;b1(g,D,te),B=z}else for(k=0;k<m.length;k++){if(D=m[k],z=D.instance,te=D.currentTarget,D=D.listener,z!==B&&g.isPropagationStopped())break e;b1(g,D,te),B=z}}}if(al)throw o=k0,al=!1,k0=null,o}function it(o,u){var p=u[l2];p===void 0&&(p=u[l2]=new Set);var m=o+"__bubble";p.has(m)||(B1(u,o,2,!1),p.add(m))}function n2(o,u,p){var m=0;u&&(m|=4),B1(p,o,m,u)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function xu(o){if(!o[Bl]){o[Bl]=!0,r.forEach(function(p){p!=="selectionchange"&&(vC.has(p)||n2(p,!1,o),n2(p,!0,o))});var u=o.nodeType===9?o:o.ownerDocument;u===null||u[Bl]||(u[Bl]=!0,n2("selectionchange",!1,u))}}function B1(o,u,p,m){switch(zb(u)){case 1:var g=OO;break;case 4:g=CO;break;default:g=D0}p=g.bind(null,u,p,o),g=void 0,!C0||u!=="touchstart"&&u!=="touchmove"&&u!=="wheel"||(g=!0),m?g!==void 0?o.addEventListener(u,p,{capture:!0,passive:g}):o.addEventListener(u,p,!0):g!==void 0?o.addEventListener(u,p,{passive:g}):o.addEventListener(u,p,!1)}function r2(o,u,p,m,g){var B=m;if((u&1)===0&&(u&2)===0&&m!==null)e:for(;;){if(m===null)return;var k=m.tag;if(k===3||k===4){var D=m.stateNode.containerInfo;if(D===g||D.nodeType===8&&D.parentNode===g)break;if(k===4)for(k=m.return;k!==null;){var z=k.tag;if((z===3||z===4)&&(z=k.stateNode.containerInfo,z===g||z.nodeType===8&&z.parentNode===g))return;k=k.return}for(;D!==null;){if(k=qa(D),k===null)return;if(z=k.tag,z===5||z===6){m=B=k;continue e}D=D.parentNode}}m=m.return}Wb(function(){var te=B,ie=_0(p),se=[];e:{var oe=g1.get(o);if(oe!==void 0){var me=F0,Be=o;switch(o){case"keypress":if(ml(p)===0)break e;case"keydown":case"keyup":me=VO;break;case"focusin":Be="focus",me=U0;break;case"focusout":Be="blur",me=U0;break;case"beforeblur":case"afterblur":me=U0;break;case"click":if(p.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Gb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=NO;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=QO;break;case d1:case h1:case m1:me=HO;break;case v1:me=XO;break;case"scroll":me=kO;break;case"wheel":me=JO;break;case"copy":case"cut":case"paste":me=DO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Qb}var Se=(u&4)!==0,Pt=!Se&&o==="scroll",Z=Se?oe!==null?oe+"Capture":null:oe;Se=[];for(var U=te,ee;U!==null;){ee=U;var pe=ee.stateNode;if(ee.tag===5&&pe!==null&&(ee=pe,Z!==null&&(pe=au(U,Z),pe!=null&&Se.push(wu(U,pe,ee)))),Pt)break;U=U.return}0<Se.length&&(oe=new me(oe,Be,null,p,ie),se.push({event:oe,listeners:Se}))}}if((u&7)===0){e:{if(oe=o==="mouseover"||o==="pointerover",me=o==="mouseout"||o==="pointerout",oe&&p!==A0&&(Be=p.relatedTarget||p.fromElement)&&(qa(Be)||Be[_r]))break e;if((me||oe)&&(oe=ie.window===ie?ie:(oe=ie.ownerDocument)?oe.defaultView||oe.parentWindow:window,me?(Be=p.relatedTarget||p.toElement,me=te,Be=Be?qa(Be):null,Be!==null&&(Pt=Fa(Be),Be!==Pt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(me=null,Be=te),me!==Be)){if(Se=Gb,pe="onMouseLeave",Z="onMouseEnter",U="mouse",(o==="pointerout"||o==="pointerover")&&(Se=Qb,pe="onPointerLeave",Z="onPointerEnter",U="pointer"),Pt=me==null?oe:Ro(me),ee=Be==null?oe:Ro(Be),oe=new Se(pe,U+"leave",me,p,ie),oe.target=Pt,oe.relatedTarget=ee,pe=null,qa(ie)===te&&(Se=new Se(Z,U+"enter",Be,p,ie),Se.target=ee,Se.relatedTarget=Pt,pe=Se),Pt=pe,me&&Be)t:{for(Se=me,Z=Be,U=0,ee=Se;ee;ee=No(ee))U++;for(ee=0,pe=Z;pe;pe=No(pe))ee++;for(;0<U-ee;)Se=No(Se),U--;for(;0<ee-U;)Z=No(Z),ee--;for(;U--;){if(Se===Z||Z!==null&&Se===Z.alternate)break t;Se=No(Se),Z=No(Z)}Se=null}else Se=null;me!==null&&x1(se,oe,me,Se,!1),Be!==null&&Pt!==null&&x1(se,Pt,Be,Se,!0)}}e:{if(oe=te?Ro(te):window,me=oe.nodeName&&oe.nodeName.toLowerCase(),me==="select"||me==="input"&&oe.type==="file")var _e=iC;else if(t1(oe))if(r1)_e=pC;else{_e=sC;var Me=uC}else(me=oe.nodeName)&&me.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(_e=lC);if(_e&&(_e=_e(o,te))){n1(se,_e,p,ie);break e}Me&&Me(o,oe,te),o==="focusout"&&(Me=oe._wrapperState)&&Me.controlled&&oe.type==="number"&&qe(oe,"number",oe.value)}switch(Me=te?Ro(te):window,o){case"focusin":(t1(Me)||Me.contentEditable==="true")&&(ko=Me,X0=te,Iu=null);break;case"focusout":Iu=X0=ko=null;break;case"mousedown":Z0=!0;break;case"contextmenu":case"mouseup":case"dragend":Z0=!1,c1(se,p,ie);break;case"selectionchange":if(dC)break;case"keydown":case"keyup":c1(se,p,ie)}var Oe;if(G0)e:{switch(o){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Co?Jb(o,p)&&(Te="onCompositionEnd"):o==="keydown"&&p.keyCode===229&&(Te="onCompositionStart");Te&&(Yb&&p.locale!=="ko"&&(Co||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Co&&(Oe=Ub()):(ua=ie,L0="value"in ua?ua.value:ua.textContent,Co=!0)),Me=xl(te,Te),0<Me.length&&(Te=new Kb(Te,o,null,p,ie),se.push({event:Te,listeners:Me}),Oe?Te.data=Oe:(Oe=e1(p),Oe!==null&&(Te.data=Oe)))),(Oe=tC?nC(o,p):rC(o,p))&&(te=xl(te,"onBeforeInput"),0<te.length&&(ie=new Kb("onBeforeInput","beforeinput",null,p,ie),se.push({event:ie,listeners:te}),ie.data=Oe))}I1(se,u)})}function wu(o,u,p){return{instance:o,listener:u,currentTarget:p}}function xl(o,u){for(var p=u+"Capture",m=[];o!==null;){var g=o,B=g.stateNode;g.tag===5&&B!==null&&(g=B,B=au(o,p),B!=null&&m.unshift(wu(o,B,g)),B=au(o,u),B!=null&&m.push(wu(o,B,g))),o=o.return}return m}function No(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function x1(o,u,p,m,g){for(var B=u._reactName,k=[];p!==null&&p!==m;){var D=p,z=D.alternate,te=D.stateNode;if(z!==null&&z===m)break;D.tag===5&&te!==null&&(D=te,g?(z=au(p,B),z!=null&&k.unshift(wu(p,z,D))):g||(z=au(p,B),z!=null&&k.push(wu(p,z,D)))),p=p.return}k.length!==0&&o.push({event:u,listeners:k})}var gC=/\r\n?/g,yC=/\u0000|\uFFFD/g;function w1(o){return(typeof o=="string"?o:""+o).replace(gC,`
`).replace(yC,"")}function wl(o,u,p){if(u=w1(u),w1(o)!==u&&p)throw Error(n(425))}function Pl(){}var a2=null,o2=null;function i2(o,u){return o==="textarea"||o==="noscript"||typeof u.children=="string"||typeof u.children=="number"||typeof u.dangerouslySetInnerHTML=="object"&&u.dangerouslySetInnerHTML!==null&&u.dangerouslySetInnerHTML.__html!=null}var u2=typeof setTimeout=="function"?setTimeout:void 0,bC=typeof clearTimeout=="function"?clearTimeout:void 0,P1=typeof Promise=="function"?Promise:void 0,IC=typeof queueMicrotask=="function"?queueMicrotask:typeof P1<"u"?function(o){return P1.resolve(null).then(o).catch(BC)}:u2;function BC(o){setTimeout(function(){throw o})}function s2(o,u){var p=u,m=0;do{var g=p.nextSibling;if(o.removeChild(p),g&&g.nodeType===8)if(p=g.data,p==="/$"){if(m===0){o.removeChild(g),du(u);return}m--}else p!=="$"&&p!=="$?"&&p!=="$!"||m++;p=g}while(p);du(u)}function la(o){for(;o!=null;o=o.nextSibling){var u=o.nodeType;if(u===1||u===3)break;if(u===8){if(u=o.data,u==="$"||u==="$!"||u==="$?")break;if(u==="/$")return null}}return o}function S1(o){o=o.previousSibling;for(var u=0;o;){if(o.nodeType===8){var p=o.data;if(p==="$"||p==="$!"||p==="$?"){if(u===0)return o;u--}else p==="/$"&&u++}o=o.previousSibling}return null}var To=Math.random().toString(36).slice(2),dr="__reactFiber$"+To,Pu="__reactProps$"+To,_r="__reactContainer$"+To,l2="__reactEvents$"+To,xC="__reactListeners$"+To,wC="__reactHandles$"+To;function qa(o){var u=o[dr];if(u)return u;for(var p=o.parentNode;p;){if(u=p[_r]||p[dr]){if(p=u.alternate,u.child!==null||p!==null&&p.child!==null)for(o=S1(o);o!==null;){if(p=o[dr])return p;o=S1(o)}return u}o=p,p=o.parentNode}return null}function Su(o){return o=o[dr]||o[_r],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function Ro(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(n(33))}function Sl(o){return o[Pu]||null}var p2=[],Ho=-1;function pa(o){return{current:o}}function ut(o){0>Ho||(o.current=p2[Ho],p2[Ho]=null,Ho--)}function nt(o,u){Ho++,p2[Ho]=o.current,o.current=u}var ca={},Qt=pa(ca),cn=pa(!1),za=ca;function jo(o,u){var p=o.type.contextTypes;if(!p)return ca;var m=o.stateNode;if(m&&m.__reactInternalMemoizedUnmaskedChildContext===u)return m.__reactInternalMemoizedMaskedChildContext;var g={},B;for(B in p)g[B]=u[B];return m&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=u,o.__reactInternalMemoizedMaskedChildContext=g),g}function fn(o){return o=o.childContextTypes,o!=null}function Wl(){ut(cn),ut(Qt)}function W1(o,u,p){if(Qt.current!==ca)throw Error(n(168));nt(Qt,u),nt(cn,p)}function A1(o,u,p){var m=o.stateNode;if(u=u.childContextTypes,typeof m.getChildContext!="function")return p;m=m.getChildContext();for(var g in m)if(!(g in u))throw Error(n(108,ye(o)||"Unknown",g));return Q({},p,m)}function Al(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||ca,za=Qt.current,nt(Qt,o),nt(cn,cn.current),!0}function _1(o,u,p){var m=o.stateNode;if(!m)throw Error(n(169));p?(o=A1(o,u,za),m.__reactInternalMemoizedMergedChildContext=o,ut(cn),ut(Qt),nt(Qt,o)):ut(cn),nt(cn,p)}var Mr=null,_l=!1,c2=!1;function M1(o){Mr===null?Mr=[o]:Mr.push(o)}function PC(o){_l=!0,M1(o)}function fa(){if(!c2&&Mr!==null){c2=!0;var o=0,u=Ze;try{var p=Mr;for(Ze=1;o<p.length;o++){var m=p[o];do m=m(!0);while(m!==null)}Mr=null,_l=!1}catch(g){throw Mr!==null&&(Mr=Mr.slice(o+1)),Cb(E0,fa),g}finally{Ze=u,c2=!1}}return null}var Do=[],$o=0,Ml=null,Ol=0,En=[],Nn=0,Ua=null,Or=1,Cr="";function Va(o,u){Do[$o++]=Ol,Do[$o++]=Ml,Ml=o,Ol=u}function O1(o,u,p){En[Nn++]=Or,En[Nn++]=Cr,En[Nn++]=Ua,Ua=o;var m=Or;o=Cr;var g=32-Yn(m)-1;m&=~(1<<g),p+=1;var B=32-Yn(u)+g;if(30<B){var k=g-g%5;B=(m&(1<<k)-1).toString(32),m>>=k,g-=k,Or=1<<32-Yn(u)+g|p<<g|m,Cr=B+o}else Or=1<<B|p<<g|m,Cr=o}function f2(o){o.return!==null&&(Va(o,1),O1(o,1,0))}function d2(o){for(;o===Ml;)Ml=Do[--$o],Do[$o]=null,Ol=Do[--$o],Do[$o]=null;for(;o===Ua;)Ua=En[--Nn],En[Nn]=null,Cr=En[--Nn],En[Nn]=null,Or=En[--Nn],En[Nn]=null}var In=null,Bn=null,pt=!1,Zn=null;function C1(o,u){var p=jn(5,null,null,0);p.elementType="DELETED",p.stateNode=u,p.return=o,u=o.deletions,u===null?(o.deletions=[p],o.flags|=16):u.push(p)}function k1(o,u){switch(o.tag){case 5:var p=o.type;return u=u.nodeType!==1||p.toLowerCase()!==u.nodeName.toLowerCase()?null:u,u!==null?(o.stateNode=u,In=o,Bn=la(u.firstChild),!0):!1;case 6:return u=o.pendingProps===""||u.nodeType!==3?null:u,u!==null?(o.stateNode=u,In=o,Bn=null,!0):!1;case 13:return u=u.nodeType!==8?null:u,u!==null?(p=Ua!==null?{id:Or,overflow:Cr}:null,o.memoizedState={dehydrated:u,treeContext:p,retryLane:1073741824},p=jn(18,null,null,0),p.stateNode=u,p.return=o,o.child=p,In=o,Bn=null,!0):!1;default:return!1}}function h2(o){return(o.mode&1)!==0&&(o.flags&128)===0}function m2(o){if(pt){var u=Bn;if(u){var p=u;if(!k1(o,u)){if(h2(o))throw Error(n(418));u=la(p.nextSibling);var m=In;u&&k1(o,u)?C1(m,p):(o.flags=o.flags&-4097|2,pt=!1,In=o)}}else{if(h2(o))throw Error(n(418));o.flags=o.flags&-4097|2,pt=!1,In=o}}}function E1(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;In=o}function Cl(o){if(o!==In)return!1;if(!pt)return E1(o),pt=!0,!1;var u;if((u=o.tag!==3)&&!(u=o.tag!==5)&&(u=o.type,u=u!=="head"&&u!=="body"&&!i2(o.type,o.memoizedProps)),u&&(u=Bn)){if(h2(o))throw N1(),Error(n(418));for(;u;)C1(o,u),u=la(u.nextSibling)}if(E1(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(n(317));e:{for(o=o.nextSibling,u=0;o;){if(o.nodeType===8){var p=o.data;if(p==="/$"){if(u===0){Bn=la(o.nextSibling);break e}u--}else p!=="$"&&p!=="$!"&&p!=="$?"||u++}o=o.nextSibling}Bn=null}}else Bn=In?la(o.stateNode.nextSibling):null;return!0}function N1(){for(var o=Bn;o;)o=la(o.nextSibling)}function Lo(){Bn=In=null,pt=!1}function v2(o){Zn===null?Zn=[o]:Zn.push(o)}var SC=O.ReactCurrentBatchConfig;function Wu(o,u,p){if(o=p.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(p._owner){if(p=p._owner,p){if(p.tag!==1)throw Error(n(309));var m=p.stateNode}if(!m)throw Error(n(147,o));var g=m,B=""+o;return u!==null&&u.ref!==null&&typeof u.ref=="function"&&u.ref._stringRef===B?u.ref:(u=function(k){var D=g.refs;k===null?delete D[B]:D[B]=k},u._stringRef=B,u)}if(typeof o!="string")throw Error(n(284));if(!p._owner)throw Error(n(290,o))}return o}function kl(o,u){throw o=Object.prototype.toString.call(u),Error(n(31,o==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":o))}function T1(o){var u=o._init;return u(o._payload)}function R1(o){function u(Z,U){if(o){var ee=Z.deletions;ee===null?(Z.deletions=[U],Z.flags|=16):ee.push(U)}}function p(Z,U){if(!o)return null;for(;U!==null;)u(Z,U),U=U.sibling;return null}function m(Z,U){for(Z=new Map;U!==null;)U.key!==null?Z.set(U.key,U):Z.set(U.index,U),U=U.sibling;return Z}function g(Z,U){return Z=Ia(Z,U),Z.index=0,Z.sibling=null,Z}function B(Z,U,ee){return Z.index=ee,o?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<U?(Z.flags|=2,U):ee):(Z.flags|=2,U)):(Z.flags|=1048576,U)}function k(Z){return o&&Z.alternate===null&&(Z.flags|=2),Z}function D(Z,U,ee,pe){return U===null||U.tag!==6?(U=sf(ee,Z.mode,pe),U.return=Z,U):(U=g(U,ee),U.return=Z,U)}function z(Z,U,ee,pe){var _e=ee.type;return _e===E?ie(Z,U,ee.props.children,pe,ee.key):U!==null&&(U.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===G&&T1(_e)===U.type)?(pe=g(U,ee.props),pe.ref=Wu(Z,U,ee),pe.return=Z,pe):(pe=np(ee.type,ee.key,ee.props,null,Z.mode,pe),pe.ref=Wu(Z,U,ee),pe.return=Z,pe)}function te(Z,U,ee,pe){return U===null||U.tag!==4||U.stateNode.containerInfo!==ee.containerInfo||U.stateNode.implementation!==ee.implementation?(U=lf(ee,Z.mode,pe),U.return=Z,U):(U=g(U,ee.children||[]),U.return=Z,U)}function ie(Z,U,ee,pe,_e){return U===null||U.tag!==7?(U=eo(ee,Z.mode,pe,_e),U.return=Z,U):(U=g(U,ee),U.return=Z,U)}function se(Z,U,ee){if(typeof U=="string"&&U!==""||typeof U=="number")return U=sf(""+U,Z.mode,ee),U.return=Z,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case w:return ee=np(U.type,U.key,U.props,null,Z.mode,ee),ee.ref=Wu(Z,null,U),ee.return=Z,ee;case _:return U=lf(U,Z.mode,ee),U.return=Z,U;case G:var pe=U._init;return se(Z,pe(U._payload),ee)}if(Ke(U)||Y(U))return U=eo(U,Z.mode,ee,null),U.return=Z,U;kl(Z,U)}return null}function oe(Z,U,ee,pe){var _e=U!==null?U.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return _e!==null?null:D(Z,U,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return ee.key===_e?z(Z,U,ee,pe):null;case _:return ee.key===_e?te(Z,U,ee,pe):null;case G:return _e=ee._init,oe(Z,U,_e(ee._payload),pe)}if(Ke(ee)||Y(ee))return _e!==null?null:ie(Z,U,ee,pe,null);kl(Z,ee)}return null}function me(Z,U,ee,pe,_e){if(typeof pe=="string"&&pe!==""||typeof pe=="number")return Z=Z.get(ee)||null,D(U,Z,""+pe,_e);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case w:return Z=Z.get(pe.key===null?ee:pe.key)||null,z(U,Z,pe,_e);case _:return Z=Z.get(pe.key===null?ee:pe.key)||null,te(U,Z,pe,_e);case G:var Me=pe._init;return me(Z,U,ee,Me(pe._payload),_e)}if(Ke(pe)||Y(pe))return Z=Z.get(ee)||null,ie(U,Z,pe,_e,null);kl(U,pe)}return null}function Be(Z,U,ee,pe){for(var _e=null,Me=null,Oe=U,Te=U=0,Lt=null;Oe!==null&&Te<ee.length;Te++){Oe.index>Te?(Lt=Oe,Oe=null):Lt=Oe.sibling;var Ue=oe(Z,Oe,ee[Te],pe);if(Ue===null){Oe===null&&(Oe=Lt);break}o&&Oe&&Ue.alternate===null&&u(Z,Oe),U=B(Ue,U,Te),Me===null?_e=Ue:Me.sibling=Ue,Me=Ue,Oe=Lt}if(Te===ee.length)return p(Z,Oe),pt&&Va(Z,Te),_e;if(Oe===null){for(;Te<ee.length;Te++)Oe=se(Z,ee[Te],pe),Oe!==null&&(U=B(Oe,U,Te),Me===null?_e=Oe:Me.sibling=Oe,Me=Oe);return pt&&Va(Z,Te),_e}for(Oe=m(Z,Oe);Te<ee.length;Te++)Lt=me(Oe,Z,Te,ee[Te],pe),Lt!==null&&(o&&Lt.alternate!==null&&Oe.delete(Lt.key===null?Te:Lt.key),U=B(Lt,U,Te),Me===null?_e=Lt:Me.sibling=Lt,Me=Lt);return o&&Oe.forEach(function(Ba){return u(Z,Ba)}),pt&&Va(Z,Te),_e}function Se(Z,U,ee,pe){var _e=Y(ee);if(typeof _e!="function")throw Error(n(150));if(ee=_e.call(ee),ee==null)throw Error(n(151));for(var Me=_e=null,Oe=U,Te=U=0,Lt=null,Ue=ee.next();Oe!==null&&!Ue.done;Te++,Ue=ee.next()){Oe.index>Te?(Lt=Oe,Oe=null):Lt=Oe.sibling;var Ba=oe(Z,Oe,Ue.value,pe);if(Ba===null){Oe===null&&(Oe=Lt);break}o&&Oe&&Ba.alternate===null&&u(Z,Oe),U=B(Ba,U,Te),Me===null?_e=Ba:Me.sibling=Ba,Me=Ba,Oe=Lt}if(Ue.done)return p(Z,Oe),pt&&Va(Z,Te),_e;if(Oe===null){for(;!Ue.done;Te++,Ue=ee.next())Ue=se(Z,Ue.value,pe),Ue!==null&&(U=B(Ue,U,Te),Me===null?_e=Ue:Me.sibling=Ue,Me=Ue);return pt&&Va(Z,Te),_e}for(Oe=m(Z,Oe);!Ue.done;Te++,Ue=ee.next())Ue=me(Oe,Z,Te,Ue.value,pe),Ue!==null&&(o&&Ue.alternate!==null&&Oe.delete(Ue.key===null?Te:Ue.key),U=B(Ue,U,Te),Me===null?_e=Ue:Me.sibling=Ue,Me=Ue);return o&&Oe.forEach(function(ak){return u(Z,ak)}),pt&&Va(Z,Te),_e}function Pt(Z,U,ee,pe){if(typeof ee=="object"&&ee!==null&&ee.type===E&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:e:{for(var _e=ee.key,Me=U;Me!==null;){if(Me.key===_e){if(_e=ee.type,_e===E){if(Me.tag===7){p(Z,Me.sibling),U=g(Me,ee.props.children),U.return=Z,Z=U;break e}}else if(Me.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===G&&T1(_e)===Me.type){p(Z,Me.sibling),U=g(Me,ee.props),U.ref=Wu(Z,Me,ee),U.return=Z,Z=U;break e}p(Z,Me);break}else u(Z,Me);Me=Me.sibling}ee.type===E?(U=eo(ee.props.children,Z.mode,pe,ee.key),U.return=Z,Z=U):(pe=np(ee.type,ee.key,ee.props,null,Z.mode,pe),pe.ref=Wu(Z,U,ee),pe.return=Z,Z=pe)}return k(Z);case _:e:{for(Me=ee.key;U!==null;){if(U.key===Me)if(U.tag===4&&U.stateNode.containerInfo===ee.containerInfo&&U.stateNode.implementation===ee.implementation){p(Z,U.sibling),U=g(U,ee.children||[]),U.return=Z,Z=U;break e}else{p(Z,U);break}else u(Z,U);U=U.sibling}U=lf(ee,Z.mode,pe),U.return=Z,Z=U}return k(Z);case G:return Me=ee._init,Pt(Z,U,Me(ee._payload),pe)}if(Ke(ee))return Be(Z,U,ee,pe);if(Y(ee))return Se(Z,U,ee,pe);kl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,U!==null&&U.tag===6?(p(Z,U.sibling),U=g(U,ee),U.return=Z,Z=U):(p(Z,U),U=sf(ee,Z.mode,pe),U.return=Z,Z=U),k(Z)):p(Z,U)}return Pt}var Fo=R1(!0),H1=R1(!1),El=pa(null),Nl=null,qo=null,g2=null;function y2(){g2=qo=Nl=null}function b2(o){var u=El.current;ut(El),o._currentValue=u}function I2(o,u,p){for(;o!==null;){var m=o.alternate;if((o.childLanes&u)!==u?(o.childLanes|=u,m!==null&&(m.childLanes|=u)):m!==null&&(m.childLanes&u)!==u&&(m.childLanes|=u),o===p)break;o=o.return}}function zo(o,u){Nl=o,g2=qo=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&u)!==0&&(dn=!0),o.firstContext=null)}function Tn(o){var u=o._currentValue;if(g2!==o)if(o={context:o,memoizedValue:u,next:null},qo===null){if(Nl===null)throw Error(n(308));qo=o,Nl.dependencies={lanes:0,firstContext:o}}else qo=qo.next=o;return u}var Ga=null;function B2(o){Ga===null?Ga=[o]:Ga.push(o)}function j1(o,u,p,m){var g=u.interleaved;return g===null?(p.next=p,B2(u)):(p.next=g.next,g.next=p),u.interleaved=p,kr(o,m)}function kr(o,u){o.lanes|=u;var p=o.alternate;for(p!==null&&(p.lanes|=u),p=o,o=o.return;o!==null;)o.childLanes|=u,p=o.alternate,p!==null&&(p.childLanes|=u),p=o,o=o.return;return p.tag===3?p.stateNode:null}var da=!1;function x2(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D1(o,u){o=o.updateQueue,u.updateQueue===o&&(u.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Er(o,u){return{eventTime:o,lane:u,tag:0,payload:null,callback:null,next:null}}function ha(o,u,p){var m=o.updateQueue;if(m===null)return null;if(m=m.shared,(ze&2)!==0){var g=m.pending;return g===null?u.next=u:(u.next=g.next,g.next=u),m.pending=u,kr(o,p)}return g=m.interleaved,g===null?(u.next=u,B2(m)):(u.next=g.next,g.next=u),m.interleaved=u,kr(o,p)}function Tl(o,u,p){if(u=u.updateQueue,u!==null&&(u=u.shared,(p&4194240)!==0)){var m=u.lanes;m&=o.pendingLanes,p|=m,u.lanes=p,R0(o,p)}}function $1(o,u){var p=o.updateQueue,m=o.alternate;if(m!==null&&(m=m.updateQueue,p===m)){var g=null,B=null;if(p=p.firstBaseUpdate,p!==null){do{var k={eventTime:p.eventTime,lane:p.lane,tag:p.tag,payload:p.payload,callback:p.callback,next:null};B===null?g=B=k:B=B.next=k,p=p.next}while(p!==null);B===null?g=B=u:B=B.next=u}else g=B=u;p={baseState:m.baseState,firstBaseUpdate:g,lastBaseUpdate:B,shared:m.shared,effects:m.effects},o.updateQueue=p;return}o=p.lastBaseUpdate,o===null?p.firstBaseUpdate=u:o.next=u,p.lastBaseUpdate=u}function Rl(o,u,p,m){var g=o.updateQueue;da=!1;var B=g.firstBaseUpdate,k=g.lastBaseUpdate,D=g.shared.pending;if(D!==null){g.shared.pending=null;var z=D,te=z.next;z.next=null,k===null?B=te:k.next=te,k=z;var ie=o.alternate;ie!==null&&(ie=ie.updateQueue,D=ie.lastBaseUpdate,D!==k&&(D===null?ie.firstBaseUpdate=te:D.next=te,ie.lastBaseUpdate=z))}if(B!==null){var se=g.baseState;k=0,ie=te=z=null,D=B;do{var oe=D.lane,me=D.eventTime;if((m&oe)===oe){ie!==null&&(ie=ie.next={eventTime:me,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Be=o,Se=D;switch(oe=u,me=p,Se.tag){case 1:if(Be=Se.payload,typeof Be=="function"){se=Be.call(me,se,oe);break e}se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Se.payload,oe=typeof Be=="function"?Be.call(me,se,oe):Be,oe==null)break e;se=Q({},se,oe);break e;case 2:da=!0}}D.callback!==null&&D.lane!==0&&(o.flags|=64,oe=g.effects,oe===null?g.effects=[D]:oe.push(D))}else me={eventTime:me,lane:oe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ie===null?(te=ie=me,z=se):ie=ie.next=me,k|=oe;if(D=D.next,D===null){if(D=g.shared.pending,D===null)break;oe=D,D=oe.next,oe.next=null,g.lastBaseUpdate=oe,g.shared.pending=null}}while(!0);if(ie===null&&(z=se),g.baseState=z,g.firstBaseUpdate=te,g.lastBaseUpdate=ie,u=g.shared.interleaved,u!==null){g=u;do k|=g.lane,g=g.next;while(g!==u)}else B===null&&(g.shared.lanes=0);Ya|=k,o.lanes=k,o.memoizedState=se}}function L1(o,u,p){if(o=u.effects,u.effects=null,o!==null)for(u=0;u<o.length;u++){var m=o[u],g=m.callback;if(g!==null){if(m.callback=null,m=p,typeof g!="function")throw Error(n(191,g));g.call(m)}}}var Au={},hr=pa(Au),_u=pa(Au),Mu=pa(Au);function Ka(o){if(o===Au)throw Error(n(174));return o}function w2(o,u){switch(nt(Mu,u),nt(_u,o),nt(hr,Au),o=u.nodeType,o){case 9:case 11:u=(u=u.documentElement)?u.namespaceURI:jt(null,"");break;default:o=o===8?u.parentNode:u,u=o.namespaceURI||null,o=o.tagName,u=jt(u,o)}ut(hr),nt(hr,u)}function Uo(){ut(hr),ut(_u),ut(Mu)}function F1(o){Ka(Mu.current);var u=Ka(hr.current),p=jt(u,o.type);u!==p&&(nt(_u,o),nt(hr,p))}function P2(o){_u.current===o&&(ut(hr),ut(_u))}var ft=pa(0);function Hl(o){for(var u=o;u!==null;){if(u.tag===13){var p=u.memoizedState;if(p!==null&&(p=p.dehydrated,p===null||p.data==="$?"||p.data==="$!"))return u}else if(u.tag===19&&u.memoizedProps.revealOrder!==void 0){if((u.flags&128)!==0)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var S2=[];function W2(){for(var o=0;o<S2.length;o++)S2[o]._workInProgressVersionPrimary=null;S2.length=0}var jl=O.ReactCurrentDispatcher,A2=O.ReactCurrentBatchConfig,Qa=0,dt=null,kt=null,Dt=null,Dl=!1,Ou=!1,Cu=0,WC=0;function Yt(){throw Error(n(321))}function _2(o,u){if(u===null)return!1;for(var p=0;p<u.length&&p<o.length;p++)if(!Xn(o[p],u[p]))return!1;return!0}function M2(o,u,p,m,g,B){if(Qa=B,dt=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,jl.current=o===null||o.memoizedState===null?OC:CC,o=p(m,g),Ou){B=0;do{if(Ou=!1,Cu=0,25<=B)throw Error(n(301));B+=1,Dt=kt=null,u.updateQueue=null,jl.current=kC,o=p(m,g)}while(Ou)}if(jl.current=Fl,u=kt!==null&&kt.next!==null,Qa=0,Dt=kt=dt=null,Dl=!1,u)throw Error(n(300));return o}function O2(){var o=Cu!==0;return Cu=0,o}function mr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?dt.memoizedState=Dt=o:Dt=Dt.next=o,Dt}function Rn(){if(kt===null){var o=dt.alternate;o=o!==null?o.memoizedState:null}else o=kt.next;var u=Dt===null?dt.memoizedState:Dt.next;if(u!==null)Dt=u,kt=o;else{if(o===null)throw Error(n(310));kt=o,o={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Dt===null?dt.memoizedState=Dt=o:Dt=Dt.next=o}return Dt}function ku(o,u){return typeof u=="function"?u(o):u}function C2(o){var u=Rn(),p=u.queue;if(p===null)throw Error(n(311));p.lastRenderedReducer=o;var m=kt,g=m.baseQueue,B=p.pending;if(B!==null){if(g!==null){var k=g.next;g.next=B.next,B.next=k}m.baseQueue=g=B,p.pending=null}if(g!==null){B=g.next,m=m.baseState;var D=k=null,z=null,te=B;do{var ie=te.lane;if((Qa&ie)===ie)z!==null&&(z=z.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),m=te.hasEagerState?te.eagerState:o(m,te.action);else{var se={lane:ie,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};z===null?(D=z=se,k=m):z=z.next=se,dt.lanes|=ie,Ya|=ie}te=te.next}while(te!==null&&te!==B);z===null?k=m:z.next=D,Xn(m,u.memoizedState)||(dn=!0),u.memoizedState=m,u.baseState=k,u.baseQueue=z,p.lastRenderedState=m}if(o=p.interleaved,o!==null){g=o;do B=g.lane,dt.lanes|=B,Ya|=B,g=g.next;while(g!==o)}else g===null&&(p.lanes=0);return[u.memoizedState,p.dispatch]}function k2(o){var u=Rn(),p=u.queue;if(p===null)throw Error(n(311));p.lastRenderedReducer=o;var m=p.dispatch,g=p.pending,B=u.memoizedState;if(g!==null){p.pending=null;var k=g=g.next;do B=o(B,k.action),k=k.next;while(k!==g);Xn(B,u.memoizedState)||(dn=!0),u.memoizedState=B,u.baseQueue===null&&(u.baseState=B),p.lastRenderedState=B}return[B,m]}function q1(){}function z1(o,u){var p=dt,m=Rn(),g=u(),B=!Xn(m.memoizedState,g);if(B&&(m.memoizedState=g,dn=!0),m=m.queue,E2(G1.bind(null,p,m,o),[o]),m.getSnapshot!==u||B||Dt!==null&&Dt.memoizedState.tag&1){if(p.flags|=2048,Eu(9,V1.bind(null,p,m,g,u),void 0,null),$t===null)throw Error(n(349));(Qa&30)!==0||U1(p,u,g)}return g}function U1(o,u,p){o.flags|=16384,o={getSnapshot:u,value:p},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.stores=[o]):(p=u.stores,p===null?u.stores=[o]:p.push(o))}function V1(o,u,p,m){u.value=p,u.getSnapshot=m,K1(u)&&Q1(o)}function G1(o,u,p){return p(function(){K1(u)&&Q1(o)})}function K1(o){var u=o.getSnapshot;o=o.value;try{var p=u();return!Xn(o,p)}catch{return!0}}function Q1(o){var u=kr(o,1);u!==null&&nr(u,o,1,-1)}function Y1(o){var u=mr();return typeof o=="function"&&(o=o()),u.memoizedState=u.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ku,lastRenderedState:o},u.queue=o,o=o.dispatch=MC.bind(null,dt,o),[u.memoizedState,o]}function Eu(o,u,p,m){return o={tag:o,create:u,destroy:p,deps:m,next:null},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.lastEffect=o.next=o):(p=u.lastEffect,p===null?u.lastEffect=o.next=o:(m=p.next,p.next=o,o.next=m,u.lastEffect=o)),o}function X1(){return Rn().memoizedState}function $l(o,u,p,m){var g=mr();dt.flags|=o,g.memoizedState=Eu(1|u,p,void 0,m===void 0?null:m)}function Ll(o,u,p,m){var g=Rn();m=m===void 0?null:m;var B=void 0;if(kt!==null){var k=kt.memoizedState;if(B=k.destroy,m!==null&&_2(m,k.deps)){g.memoizedState=Eu(u,p,B,m);return}}dt.flags|=o,g.memoizedState=Eu(1|u,p,B,m)}function Z1(o,u){return $l(8390656,8,o,u)}function E2(o,u){return Ll(2048,8,o,u)}function J1(o,u){return Ll(4,2,o,u)}function e6(o,u){return Ll(4,4,o,u)}function t6(o,u){if(typeof u=="function")return o=o(),u(o),function(){u(null)};if(u!=null)return o=o(),u.current=o,function(){u.current=null}}function n6(o,u,p){return p=p!=null?p.concat([o]):null,Ll(4,4,t6.bind(null,u,o),p)}function N2(){}function r6(o,u){var p=Rn();u=u===void 0?null:u;var m=p.memoizedState;return m!==null&&u!==null&&_2(u,m[1])?m[0]:(p.memoizedState=[o,u],o)}function a6(o,u){var p=Rn();u=u===void 0?null:u;var m=p.memoizedState;return m!==null&&u!==null&&_2(u,m[1])?m[0]:(o=o(),p.memoizedState=[o,u],o)}function o6(o,u,p){return(Qa&21)===0?(o.baseState&&(o.baseState=!1,dn=!0),o.memoizedState=p):(Xn(p,u)||(p=Tb(),dt.lanes|=p,Ya|=p,o.baseState=!0),u)}function AC(o,u){var p=Ze;Ze=p!==0&&4>p?p:4,o(!0);var m=A2.transition;A2.transition={};try{o(!1),u()}finally{Ze=p,A2.transition=m}}function i6(){return Rn().memoizedState}function _C(o,u,p){var m=ya(o);if(p={lane:m,action:p,hasEagerState:!1,eagerState:null,next:null},u6(o))s6(u,p);else if(p=j1(o,u,p,m),p!==null){var g=nn();nr(p,o,m,g),l6(p,u,m)}}function MC(o,u,p){var m=ya(o),g={lane:m,action:p,hasEagerState:!1,eagerState:null,next:null};if(u6(o))s6(u,g);else{var B=o.alternate;if(o.lanes===0&&(B===null||B.lanes===0)&&(B=u.lastRenderedReducer,B!==null))try{var k=u.lastRenderedState,D=B(k,p);if(g.hasEagerState=!0,g.eagerState=D,Xn(D,k)){var z=u.interleaved;z===null?(g.next=g,B2(u)):(g.next=z.next,z.next=g),u.interleaved=g;return}}catch{}finally{}p=j1(o,u,g,m),p!==null&&(g=nn(),nr(p,o,m,g),l6(p,u,m))}}function u6(o){var u=o.alternate;return o===dt||u!==null&&u===dt}function s6(o,u){Ou=Dl=!0;var p=o.pending;p===null?u.next=u:(u.next=p.next,p.next=u),o.pending=u}function l6(o,u,p){if((p&4194240)!==0){var m=u.lanes;m&=o.pendingLanes,p|=m,u.lanes=p,R0(o,p)}}var Fl={readContext:Tn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},OC={readContext:Tn,useCallback:function(o,u){return mr().memoizedState=[o,u===void 0?null:u],o},useContext:Tn,useEffect:Z1,useImperativeHandle:function(o,u,p){return p=p!=null?p.concat([o]):null,$l(4194308,4,t6.bind(null,u,o),p)},useLayoutEffect:function(o,u){return $l(4194308,4,o,u)},useInsertionEffect:function(o,u){return $l(4,2,o,u)},useMemo:function(o,u){var p=mr();return u=u===void 0?null:u,o=o(),p.memoizedState=[o,u],o},useReducer:function(o,u,p){var m=mr();return u=p!==void 0?p(u):u,m.memoizedState=m.baseState=u,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:u},m.queue=o,o=o.dispatch=_C.bind(null,dt,o),[m.memoizedState,o]},useRef:function(o){var u=mr();return o={current:o},u.memoizedState=o},useState:Y1,useDebugValue:N2,useDeferredValue:function(o){return mr().memoizedState=o},useTransition:function(){var o=Y1(!1),u=o[0];return o=AC.bind(null,o[1]),mr().memoizedState=o,[u,o]},useMutableSource:function(){},useSyncExternalStore:function(o,u,p){var m=dt,g=mr();if(pt){if(p===void 0)throw Error(n(407));p=p()}else{if(p=u(),$t===null)throw Error(n(349));(Qa&30)!==0||U1(m,u,p)}g.memoizedState=p;var B={value:p,getSnapshot:u};return g.queue=B,Z1(G1.bind(null,m,B,o),[o]),m.flags|=2048,Eu(9,V1.bind(null,m,B,p,u),void 0,null),p},useId:function(){var o=mr(),u=$t.identifierPrefix;if(pt){var p=Cr,m=Or;p=(m&~(1<<32-Yn(m)-1)).toString(32)+p,u=":"+u+"R"+p,p=Cu++,0<p&&(u+="H"+p.toString(32)),u+=":"}else p=WC++,u=":"+u+"r"+p.toString(32)+":";return o.memoizedState=u},unstable_isNewReconciler:!1},CC={readContext:Tn,useCallback:r6,useContext:Tn,useEffect:E2,useImperativeHandle:n6,useInsertionEffect:J1,useLayoutEffect:e6,useMemo:a6,useReducer:C2,useRef:X1,useState:function(){return C2(ku)},useDebugValue:N2,useDeferredValue:function(o){var u=Rn();return o6(u,kt.memoizedState,o)},useTransition:function(){var o=C2(ku)[0],u=Rn().memoizedState;return[o,u]},useMutableSource:q1,useSyncExternalStore:z1,useId:i6,unstable_isNewReconciler:!1},kC={readContext:Tn,useCallback:r6,useContext:Tn,useEffect:E2,useImperativeHandle:n6,useInsertionEffect:J1,useLayoutEffect:e6,useMemo:a6,useReducer:k2,useRef:X1,useState:function(){return k2(ku)},useDebugValue:N2,useDeferredValue:function(o){var u=Rn();return kt===null?u.memoizedState=o:o6(u,kt.memoizedState,o)},useTransition:function(){var o=k2(ku)[0],u=Rn().memoizedState;return[o,u]},useMutableSource:q1,useSyncExternalStore:z1,useId:i6,unstable_isNewReconciler:!1};function Jn(o,u){if(o&&o.defaultProps){u=Q({},u),o=o.defaultProps;for(var p in o)u[p]===void 0&&(u[p]=o[p]);return u}return u}function T2(o,u,p,m){u=o.memoizedState,p=p(m,u),p=p==null?u:Q({},u,p),o.memoizedState=p,o.lanes===0&&(o.updateQueue.baseState=p)}var ql={isMounted:function(o){return(o=o._reactInternals)?Fa(o)===o:!1},enqueueSetState:function(o,u,p){o=o._reactInternals;var m=nn(),g=ya(o),B=Er(m,g);B.payload=u,p!=null&&(B.callback=p),u=ha(o,B,g),u!==null&&(nr(u,o,g,m),Tl(u,o,g))},enqueueReplaceState:function(o,u,p){o=o._reactInternals;var m=nn(),g=ya(o),B=Er(m,g);B.tag=1,B.payload=u,p!=null&&(B.callback=p),u=ha(o,B,g),u!==null&&(nr(u,o,g,m),Tl(u,o,g))},enqueueForceUpdate:function(o,u){o=o._reactInternals;var p=nn(),m=ya(o),g=Er(p,m);g.tag=2,u!=null&&(g.callback=u),u=ha(o,g,m),u!==null&&(nr(u,o,m,p),Tl(u,o,m))}};function p6(o,u,p,m,g,B,k){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(m,B,k):u.prototype&&u.prototype.isPureReactComponent?!bu(p,m)||!bu(g,B):!0}function c6(o,u,p){var m=!1,g=ca,B=u.contextType;return typeof B=="object"&&B!==null?B=Tn(B):(g=fn(u)?za:Qt.current,m=u.contextTypes,B=(m=m!=null)?jo(o,g):ca),u=new u(p,B),o.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ql,o.stateNode=u,u._reactInternals=o,m&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=g,o.__reactInternalMemoizedMaskedChildContext=B),u}function f6(o,u,p,m){o=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(p,m),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(p,m),u.state!==o&&ql.enqueueReplaceState(u,u.state,null)}function R2(o,u,p,m){var g=o.stateNode;g.props=p,g.state=o.memoizedState,g.refs={},x2(o);var B=u.contextType;typeof B=="object"&&B!==null?g.context=Tn(B):(B=fn(u)?za:Qt.current,g.context=jo(o,B)),g.state=o.memoizedState,B=u.getDerivedStateFromProps,typeof B=="function"&&(T2(o,u,B,p),g.state=o.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(u=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),u!==g.state&&ql.enqueueReplaceState(g,g.state,null),Rl(o,p,g,m),g.state=o.memoizedState),typeof g.componentDidMount=="function"&&(o.flags|=4194308)}function Vo(o,u){try{var p="",m=u;do p+=he(m),m=m.return;while(m);var g=p}catch(B){g=`
Error generating stack: `+B.message+`
`+B.stack}return{value:o,source:u,stack:g,digest:null}}function H2(o,u,p){return{value:o,source:null,stack:p??null,digest:u??null}}function j2(o,u){try{console.error(u.value)}catch(p){setTimeout(function(){throw p})}}var EC=typeof WeakMap=="function"?WeakMap:Map;function d6(o,u,p){p=Er(-1,p),p.tag=3,p.payload={element:null};var m=u.value;return p.callback=function(){Yl||(Yl=!0,J2=m),j2(o,u)},p}function h6(o,u,p){p=Er(-1,p),p.tag=3;var m=o.type.getDerivedStateFromError;if(typeof m=="function"){var g=u.value;p.payload=function(){return m(g)},p.callback=function(){j2(o,u)}}var B=o.stateNode;return B!==null&&typeof B.componentDidCatch=="function"&&(p.callback=function(){j2(o,u),typeof m!="function"&&(va===null?va=new Set([this]):va.add(this));var k=u.stack;this.componentDidCatch(u.value,{componentStack:k!==null?k:""})}),p}function m6(o,u,p){var m=o.pingCache;if(m===null){m=o.pingCache=new EC;var g=new Set;m.set(u,g)}else g=m.get(u),g===void 0&&(g=new Set,m.set(u,g));g.has(p)||(g.add(p),o=GC.bind(null,o,u,p),u.then(o,o))}function v6(o){do{var u;if((u=o.tag===13)&&(u=o.memoizedState,u=u!==null?u.dehydrated!==null:!0),u)return o;o=o.return}while(o!==null);return null}function g6(o,u,p,m,g){return(o.mode&1)===0?(o===u?o.flags|=65536:(o.flags|=128,p.flags|=131072,p.flags&=-52805,p.tag===1&&(p.alternate===null?p.tag=17:(u=Er(-1,1),u.tag=2,ha(p,u,1))),p.lanes|=1),o):(o.flags|=65536,o.lanes=g,o)}var NC=O.ReactCurrentOwner,dn=!1;function tn(o,u,p,m){u.child=o===null?H1(u,null,p,m):Fo(u,o.child,p,m)}function y6(o,u,p,m,g){p=p.render;var B=u.ref;return zo(u,g),m=M2(o,u,p,m,B,g),p=O2(),o!==null&&!dn?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Nr(o,u,g)):(pt&&p&&f2(u),u.flags|=1,tn(o,u,m,g),u.child)}function b6(o,u,p,m,g){if(o===null){var B=p.type;return typeof B=="function"&&!uf(B)&&B.defaultProps===void 0&&p.compare===null&&p.defaultProps===void 0?(u.tag=15,u.type=B,I6(o,u,B,m,g)):(o=np(p.type,null,m,u,u.mode,g),o.ref=u.ref,o.return=u,u.child=o)}if(B=o.child,(o.lanes&g)===0){var k=B.memoizedProps;if(p=p.compare,p=p!==null?p:bu,p(k,m)&&o.ref===u.ref)return Nr(o,u,g)}return u.flags|=1,o=Ia(B,m),o.ref=u.ref,o.return=u,u.child=o}function I6(o,u,p,m,g){if(o!==null){var B=o.memoizedProps;if(bu(B,m)&&o.ref===u.ref)if(dn=!1,u.pendingProps=m=B,(o.lanes&g)!==0)(o.flags&131072)!==0&&(dn=!0);else return u.lanes=o.lanes,Nr(o,u,g)}return D2(o,u,p,m,g)}function B6(o,u,p){var m=u.pendingProps,g=m.children,B=o!==null?o.memoizedState:null;if(m.mode==="hidden")if((u.mode&1)===0)u.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Ko,xn),xn|=p;else{if((p&1073741824)===0)return o=B!==null?B.baseLanes|p:p,u.lanes=u.childLanes=1073741824,u.memoizedState={baseLanes:o,cachePool:null,transitions:null},u.updateQueue=null,nt(Ko,xn),xn|=o,null;u.memoizedState={baseLanes:0,cachePool:null,transitions:null},m=B!==null?B.baseLanes:p,nt(Ko,xn),xn|=m}else B!==null?(m=B.baseLanes|p,u.memoizedState=null):m=p,nt(Ko,xn),xn|=m;return tn(o,u,g,p),u.child}function x6(o,u){var p=u.ref;(o===null&&p!==null||o!==null&&o.ref!==p)&&(u.flags|=512,u.flags|=2097152)}function D2(o,u,p,m,g){var B=fn(p)?za:Qt.current;return B=jo(u,B),zo(u,g),p=M2(o,u,p,m,B,g),m=O2(),o!==null&&!dn?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Nr(o,u,g)):(pt&&m&&f2(u),u.flags|=1,tn(o,u,p,g),u.child)}function w6(o,u,p,m,g){if(fn(p)){var B=!0;Al(u)}else B=!1;if(zo(u,g),u.stateNode===null)Ul(o,u),c6(u,p,m),R2(u,p,m,g),m=!0;else if(o===null){var k=u.stateNode,D=u.memoizedProps;k.props=D;var z=k.context,te=p.contextType;typeof te=="object"&&te!==null?te=Tn(te):(te=fn(p)?za:Qt.current,te=jo(u,te));var ie=p.getDerivedStateFromProps,se=typeof ie=="function"||typeof k.getSnapshotBeforeUpdate=="function";se||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(D!==m||z!==te)&&f6(u,k,m,te),da=!1;var oe=u.memoizedState;k.state=oe,Rl(u,m,k,g),z=u.memoizedState,D!==m||oe!==z||cn.current||da?(typeof ie=="function"&&(T2(u,p,ie,m),z=u.memoizedState),(D=da||p6(u,p,D,m,oe,z,te))?(se||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(u.flags|=4194308)):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=m,u.memoizedState=z),k.props=m,k.state=z,k.context=te,m=D):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),m=!1)}else{k=u.stateNode,D1(o,u),D=u.memoizedProps,te=u.type===u.elementType?D:Jn(u.type,D),k.props=te,se=u.pendingProps,oe=k.context,z=p.contextType,typeof z=="object"&&z!==null?z=Tn(z):(z=fn(p)?za:Qt.current,z=jo(u,z));var me=p.getDerivedStateFromProps;(ie=typeof me=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(D!==se||oe!==z)&&f6(u,k,m,z),da=!1,oe=u.memoizedState,k.state=oe,Rl(u,m,k,g);var Be=u.memoizedState;D!==se||oe!==Be||cn.current||da?(typeof me=="function"&&(T2(u,p,me,m),Be=u.memoizedState),(te=da||p6(u,p,te,m,oe,Be,z)||!1)?(ie||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(m,Be,z),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(m,Be,z)),typeof k.componentDidUpdate=="function"&&(u.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof k.componentDidUpdate!="function"||D===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||D===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),u.memoizedProps=m,u.memoizedState=Be),k.props=m,k.state=Be,k.context=z,m=te):(typeof k.componentDidUpdate!="function"||D===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||D===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),m=!1)}return $2(o,u,p,m,B,g)}function $2(o,u,p,m,g,B){x6(o,u);var k=(u.flags&128)!==0;if(!m&&!k)return g&&_1(u,p,!1),Nr(o,u,B);m=u.stateNode,NC.current=u;var D=k&&typeof p.getDerivedStateFromError!="function"?null:m.render();return u.flags|=1,o!==null&&k?(u.child=Fo(u,o.child,null,B),u.child=Fo(u,null,D,B)):tn(o,u,D,B),u.memoizedState=m.state,g&&_1(u,p,!0),u.child}function P6(o){var u=o.stateNode;u.pendingContext?W1(o,u.pendingContext,u.pendingContext!==u.context):u.context&&W1(o,u.context,!1),w2(o,u.containerInfo)}function S6(o,u,p,m,g){return Lo(),v2(g),u.flags|=256,tn(o,u,p,m),u.child}var L2={dehydrated:null,treeContext:null,retryLane:0};function F2(o){return{baseLanes:o,cachePool:null,transitions:null}}function W6(o,u,p){var m=u.pendingProps,g=ft.current,B=!1,k=(u.flags&128)!==0,D;if((D=k)||(D=o!==null&&o.memoizedState===null?!1:(g&2)!==0),D?(B=!0,u.flags&=-129):(o===null||o.memoizedState!==null)&&(g|=1),nt(ft,g&1),o===null)return m2(u),o=u.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((u.mode&1)===0?u.lanes=1:o.data==="$!"?u.lanes=8:u.lanes=1073741824,null):(k=m.children,o=m.fallback,B?(m=u.mode,B=u.child,k={mode:"hidden",children:k},(m&1)===0&&B!==null?(B.childLanes=0,B.pendingProps=k):B=rp(k,m,0,null),o=eo(o,m,p,null),B.return=u,o.return=u,B.sibling=o,u.child=B,u.child.memoizedState=F2(p),u.memoizedState=L2,o):q2(u,k));if(g=o.memoizedState,g!==null&&(D=g.dehydrated,D!==null))return TC(o,u,k,m,D,g,p);if(B){B=m.fallback,k=u.mode,g=o.child,D=g.sibling;var z={mode:"hidden",children:m.children};return(k&1)===0&&u.child!==g?(m=u.child,m.childLanes=0,m.pendingProps=z,u.deletions=null):(m=Ia(g,z),m.subtreeFlags=g.subtreeFlags&14680064),D!==null?B=Ia(D,B):(B=eo(B,k,p,null),B.flags|=2),B.return=u,m.return=u,m.sibling=B,u.child=m,m=B,B=u.child,k=o.child.memoizedState,k=k===null?F2(p):{baseLanes:k.baseLanes|p,cachePool:null,transitions:k.transitions},B.memoizedState=k,B.childLanes=o.childLanes&~p,u.memoizedState=L2,m}return B=o.child,o=B.sibling,m=Ia(B,{mode:"visible",children:m.children}),(u.mode&1)===0&&(m.lanes=p),m.return=u,m.sibling=null,o!==null&&(p=u.deletions,p===null?(u.deletions=[o],u.flags|=16):p.push(o)),u.child=m,u.memoizedState=null,m}function q2(o,u){return u=rp({mode:"visible",children:u},o.mode,0,null),u.return=o,o.child=u}function zl(o,u,p,m){return m!==null&&v2(m),Fo(u,o.child,null,p),o=q2(u,u.pendingProps.children),o.flags|=2,u.memoizedState=null,o}function TC(o,u,p,m,g,B,k){if(p)return u.flags&256?(u.flags&=-257,m=H2(Error(n(422))),zl(o,u,k,m)):u.memoizedState!==null?(u.child=o.child,u.flags|=128,null):(B=m.fallback,g=u.mode,m=rp({mode:"visible",children:m.children},g,0,null),B=eo(B,g,k,null),B.flags|=2,m.return=u,B.return=u,m.sibling=B,u.child=m,(u.mode&1)!==0&&Fo(u,o.child,null,k),u.child.memoizedState=F2(k),u.memoizedState=L2,B);if((u.mode&1)===0)return zl(o,u,k,null);if(g.data==="$!"){if(m=g.nextSibling&&g.nextSibling.dataset,m)var D=m.dgst;return m=D,B=Error(n(419)),m=H2(B,m,void 0),zl(o,u,k,m)}if(D=(k&o.childLanes)!==0,dn||D){if(m=$t,m!==null){switch(k&-k){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(m.suspendedLanes|k))!==0?0:g,g!==0&&g!==B.retryLane&&(B.retryLane=g,kr(o,g),nr(m,o,g,-1))}return of(),m=H2(Error(n(421))),zl(o,u,k,m)}return g.data==="$?"?(u.flags|=128,u.child=o.child,u=KC.bind(null,o),g._reactRetry=u,null):(o=B.treeContext,Bn=la(g.nextSibling),In=u,pt=!0,Zn=null,o!==null&&(En[Nn++]=Or,En[Nn++]=Cr,En[Nn++]=Ua,Or=o.id,Cr=o.overflow,Ua=u),u=q2(u,m.children),u.flags|=4096,u)}function A6(o,u,p){o.lanes|=u;var m=o.alternate;m!==null&&(m.lanes|=u),I2(o.return,u,p)}function z2(o,u,p,m,g){var B=o.memoizedState;B===null?o.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:m,tail:p,tailMode:g}:(B.isBackwards=u,B.rendering=null,B.renderingStartTime=0,B.last=m,B.tail=p,B.tailMode=g)}function _6(o,u,p){var m=u.pendingProps,g=m.revealOrder,B=m.tail;if(tn(o,u,m.children,p),m=ft.current,(m&2)!==0)m=m&1|2,u.flags|=128;else{if(o!==null&&(o.flags&128)!==0)e:for(o=u.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&A6(o,p,u);else if(o.tag===19)A6(o,p,u);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===u)break e;for(;o.sibling===null;){if(o.return===null||o.return===u)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}m&=1}if(nt(ft,m),(u.mode&1)===0)u.memoizedState=null;else switch(g){case"forwards":for(p=u.child,g=null;p!==null;)o=p.alternate,o!==null&&Hl(o)===null&&(g=p),p=p.sibling;p=g,p===null?(g=u.child,u.child=null):(g=p.sibling,p.sibling=null),z2(u,!1,g,p,B);break;case"backwards":for(p=null,g=u.child,u.child=null;g!==null;){if(o=g.alternate,o!==null&&Hl(o)===null){u.child=g;break}o=g.sibling,g.sibling=p,p=g,g=o}z2(u,!0,p,null,B);break;case"together":z2(u,!1,null,null,void 0);break;default:u.memoizedState=null}return u.child}function Ul(o,u){(u.mode&1)===0&&o!==null&&(o.alternate=null,u.alternate=null,u.flags|=2)}function Nr(o,u,p){if(o!==null&&(u.dependencies=o.dependencies),Ya|=u.lanes,(p&u.childLanes)===0)return null;if(o!==null&&u.child!==o.child)throw Error(n(153));if(u.child!==null){for(o=u.child,p=Ia(o,o.pendingProps),u.child=p,p.return=u;o.sibling!==null;)o=o.sibling,p=p.sibling=Ia(o,o.pendingProps),p.return=u;p.sibling=null}return u.child}function RC(o,u,p){switch(u.tag){case 3:P6(u),Lo();break;case 5:F1(u);break;case 1:fn(u.type)&&Al(u);break;case 4:w2(u,u.stateNode.containerInfo);break;case 10:var m=u.type._context,g=u.memoizedProps.value;nt(El,m._currentValue),m._currentValue=g;break;case 13:if(m=u.memoizedState,m!==null)return m.dehydrated!==null?(nt(ft,ft.current&1),u.flags|=128,null):(p&u.child.childLanes)!==0?W6(o,u,p):(nt(ft,ft.current&1),o=Nr(o,u,p),o!==null?o.sibling:null);nt(ft,ft.current&1);break;case 19:if(m=(p&u.childLanes)!==0,(o.flags&128)!==0){if(m)return _6(o,u,p);u.flags|=128}if(g=u.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),nt(ft,ft.current),m)break;return null;case 22:case 23:return u.lanes=0,B6(o,u,p)}return Nr(o,u,p)}var M6,U2,O6,C6;M6=function(o,u){for(var p=u.child;p!==null;){if(p.tag===5||p.tag===6)o.appendChild(p.stateNode);else if(p.tag!==4&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===u)break;for(;p.sibling===null;){if(p.return===null||p.return===u)return;p=p.return}p.sibling.return=p.return,p=p.sibling}},U2=function(){},O6=function(o,u,p,m){var g=o.memoizedProps;if(g!==m){o=u.stateNode,Ka(hr.current);var B=null;switch(p){case"input":g=Pe(o,g),m=Pe(o,m),B=[];break;case"select":g=Q({},g,{value:void 0}),m=Q({},m,{value:void 0}),B=[];break;case"textarea":g=vt(o,g),m=vt(o,m),B=[];break;default:typeof g.onClick!="function"&&typeof m.onClick=="function"&&(o.onclick=Pl)}S0(p,m);var k;p=null;for(te in g)if(!m.hasOwnProperty(te)&&g.hasOwnProperty(te)&&g[te]!=null)if(te==="style"){var D=g[te];for(k in D)D.hasOwnProperty(k)&&(p||(p={}),p[k]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?B||(B=[]):(B=B||[]).push(te,null));for(te in m){var z=m[te];if(D=g!=null?g[te]:void 0,m.hasOwnProperty(te)&&z!==D&&(z!=null||D!=null))if(te==="style")if(D){for(k in D)!D.hasOwnProperty(k)||z&&z.hasOwnProperty(k)||(p||(p={}),p[k]="");for(k in z)z.hasOwnProperty(k)&&D[k]!==z[k]&&(p||(p={}),p[k]=z[k])}else p||(B||(B=[]),B.push(te,p)),p=z;else te==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,D=D?D.__html:void 0,z!=null&&D!==z&&(B=B||[]).push(te,z)):te==="children"?typeof z!="string"&&typeof z!="number"||(B=B||[]).push(te,""+z):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(z!=null&&te==="onScroll"&&it("scroll",o),B||D===z||(B=[])):(B=B||[]).push(te,z))}p&&(B=B||[]).push("style",p);var te=B;(u.updateQueue=te)&&(u.flags|=4)}},C6=function(o,u,p,m){p!==m&&(u.flags|=4)};function Nu(o,u){if(!pt)switch(o.tailMode){case"hidden":u=o.tail;for(var p=null;u!==null;)u.alternate!==null&&(p=u),u=u.sibling;p===null?o.tail=null:p.sibling=null;break;case"collapsed":p=o.tail;for(var m=null;p!==null;)p.alternate!==null&&(m=p),p=p.sibling;m===null?u||o.tail===null?o.tail=null:o.tail.sibling=null:m.sibling=null}}function Xt(o){var u=o.alternate!==null&&o.alternate.child===o.child,p=0,m=0;if(u)for(var g=o.child;g!==null;)p|=g.lanes|g.childLanes,m|=g.subtreeFlags&14680064,m|=g.flags&14680064,g.return=o,g=g.sibling;else for(g=o.child;g!==null;)p|=g.lanes|g.childLanes,m|=g.subtreeFlags,m|=g.flags,g.return=o,g=g.sibling;return o.subtreeFlags|=m,o.childLanes=p,u}function HC(o,u,p){var m=u.pendingProps;switch(d2(u),u.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(u),null;case 1:return fn(u.type)&&Wl(),Xt(u),null;case 3:return m=u.stateNode,Uo(),ut(cn),ut(Qt),W2(),m.pendingContext&&(m.context=m.pendingContext,m.pendingContext=null),(o===null||o.child===null)&&(Cl(u)?u.flags|=4:o===null||o.memoizedState.isDehydrated&&(u.flags&256)===0||(u.flags|=1024,Zn!==null&&(nf(Zn),Zn=null))),U2(o,u),Xt(u),null;case 5:P2(u);var g=Ka(Mu.current);if(p=u.type,o!==null&&u.stateNode!=null)O6(o,u,p,m,g),o.ref!==u.ref&&(u.flags|=512,u.flags|=2097152);else{if(!m){if(u.stateNode===null)throw Error(n(166));return Xt(u),null}if(o=Ka(hr.current),Cl(u)){m=u.stateNode,p=u.type;var B=u.memoizedProps;switch(m[dr]=u,m[Pu]=B,o=(u.mode&1)!==0,p){case"dialog":it("cancel",m),it("close",m);break;case"iframe":case"object":case"embed":it("load",m);break;case"video":case"audio":for(g=0;g<Bu.length;g++)it(Bu[g],m);break;case"source":it("error",m);break;case"img":case"image":case"link":it("error",m),it("load",m);break;case"details":it("toggle",m);break;case"input":Ce(m,B),it("invalid",m);break;case"select":m._wrapperState={wasMultiple:!!B.multiple},it("invalid",m);break;case"textarea":On(m,B),it("invalid",m)}S0(p,B),g=null;for(var k in B)if(B.hasOwnProperty(k)){var D=B[k];k==="children"?typeof D=="string"?m.textContent!==D&&(B.suppressHydrationWarning!==!0&&wl(m.textContent,D,o),g=["children",D]):typeof D=="number"&&m.textContent!==""+D&&(B.suppressHydrationWarning!==!0&&wl(m.textContent,D,o),g=["children",""+D]):a.hasOwnProperty(k)&&D!=null&&k==="onScroll"&&it("scroll",m)}switch(p){case"input":ce(m),je(m,B,!0);break;case"textarea":ce(m),Kt(m);break;case"select":case"option":break;default:typeof B.onClick=="function"&&(m.onclick=Pl)}m=g,u.updateQueue=m,m!==null&&(u.flags|=4)}else{k=g.nodeType===9?g:g.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=xt(p)),o==="http://www.w3.org/1999/xhtml"?p==="script"?(o=k.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof m.is=="string"?o=k.createElement(p,{is:m.is}):(o=k.createElement(p),p==="select"&&(k=o,m.multiple?k.multiple=!0:m.size&&(k.size=m.size))):o=k.createElementNS(o,p),o[dr]=u,o[Pu]=m,M6(o,u,!1,!1),u.stateNode=o;e:{switch(k=W0(p,m),p){case"dialog":it("cancel",o),it("close",o),g=m;break;case"iframe":case"object":case"embed":it("load",o),g=m;break;case"video":case"audio":for(g=0;g<Bu.length;g++)it(Bu[g],o);g=m;break;case"source":it("error",o),g=m;break;case"img":case"image":case"link":it("error",o),it("load",o),g=m;break;case"details":it("toggle",o),g=m;break;case"input":Ce(o,m),g=Pe(o,m),it("invalid",o);break;case"option":g=m;break;case"select":o._wrapperState={wasMultiple:!!m.multiple},g=Q({},m,{value:void 0}),it("invalid",o);break;case"textarea":On(o,m),g=vt(o,m),it("invalid",o);break;default:g=m}S0(p,g),D=g;for(B in D)if(D.hasOwnProperty(B)){var z=D[B];B==="style"?ru(o,z):B==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Wo(o,z)):B==="children"?typeof z=="string"?(p!=="textarea"||z!=="")&&ta(o,z):typeof z=="number"&&ta(o,""+z):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(a.hasOwnProperty(B)?z!=null&&B==="onScroll"&&it("scroll",o):z!=null&&A(o,B,z,k))}switch(p){case"input":ce(o),je(o,m,!1);break;case"textarea":ce(o),Kt(o);break;case"option":m.value!=null&&o.setAttribute("value",""+fe(m.value));break;case"select":o.multiple=!!m.multiple,B=m.value,B!=null?Bt(o,!!m.multiple,B,!1):m.defaultValue!=null&&Bt(o,!!m.multiple,m.defaultValue,!0);break;default:typeof g.onClick=="function"&&(o.onclick=Pl)}switch(p){case"button":case"input":case"select":case"textarea":m=!!m.autoFocus;break e;case"img":m=!0;break e;default:m=!1}}m&&(u.flags|=4)}u.ref!==null&&(u.flags|=512,u.flags|=2097152)}return Xt(u),null;case 6:if(o&&u.stateNode!=null)C6(o,u,o.memoizedProps,m);else{if(typeof m!="string"&&u.stateNode===null)throw Error(n(166));if(p=Ka(Mu.current),Ka(hr.current),Cl(u)){if(m=u.stateNode,p=u.memoizedProps,m[dr]=u,(B=m.nodeValue!==p)&&(o=In,o!==null))switch(o.tag){case 3:wl(m.nodeValue,p,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&wl(m.nodeValue,p,(o.mode&1)!==0)}B&&(u.flags|=4)}else m=(p.nodeType===9?p:p.ownerDocument).createTextNode(m),m[dr]=u,u.stateNode=m}return Xt(u),null;case 13:if(ut(ft),m=u.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(pt&&Bn!==null&&(u.mode&1)!==0&&(u.flags&128)===0)N1(),Lo(),u.flags|=98560,B=!1;else if(B=Cl(u),m!==null&&m.dehydrated!==null){if(o===null){if(!B)throw Error(n(318));if(B=u.memoizedState,B=B!==null?B.dehydrated:null,!B)throw Error(n(317));B[dr]=u}else Lo(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;Xt(u),B=!1}else Zn!==null&&(nf(Zn),Zn=null),B=!0;if(!B)return u.flags&65536?u:null}return(u.flags&128)!==0?(u.lanes=p,u):(m=m!==null,m!==(o!==null&&o.memoizedState!==null)&&m&&(u.child.flags|=8192,(u.mode&1)!==0&&(o===null||(ft.current&1)!==0?Et===0&&(Et=3):of())),u.updateQueue!==null&&(u.flags|=4),Xt(u),null);case 4:return Uo(),U2(o,u),o===null&&xu(u.stateNode.containerInfo),Xt(u),null;case 10:return b2(u.type._context),Xt(u),null;case 17:return fn(u.type)&&Wl(),Xt(u),null;case 19:if(ut(ft),B=u.memoizedState,B===null)return Xt(u),null;if(m=(u.flags&128)!==0,k=B.rendering,k===null)if(m)Nu(B,!1);else{if(Et!==0||o!==null&&(o.flags&128)!==0)for(o=u.child;o!==null;){if(k=Hl(o),k!==null){for(u.flags|=128,Nu(B,!1),m=k.updateQueue,m!==null&&(u.updateQueue=m,u.flags|=4),u.subtreeFlags=0,m=p,p=u.child;p!==null;)B=p,o=m,B.flags&=14680066,k=B.alternate,k===null?(B.childLanes=0,B.lanes=o,B.child=null,B.subtreeFlags=0,B.memoizedProps=null,B.memoizedState=null,B.updateQueue=null,B.dependencies=null,B.stateNode=null):(B.childLanes=k.childLanes,B.lanes=k.lanes,B.child=k.child,B.subtreeFlags=0,B.deletions=null,B.memoizedProps=k.memoizedProps,B.memoizedState=k.memoizedState,B.updateQueue=k.updateQueue,B.type=k.type,o=k.dependencies,B.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),p=p.sibling;return nt(ft,ft.current&1|2),u.child}o=o.sibling}B.tail!==null&&wt()>Qo&&(u.flags|=128,m=!0,Nu(B,!1),u.lanes=4194304)}else{if(!m)if(o=Hl(k),o!==null){if(u.flags|=128,m=!0,p=o.updateQueue,p!==null&&(u.updateQueue=p,u.flags|=4),Nu(B,!0),B.tail===null&&B.tailMode==="hidden"&&!k.alternate&&!pt)return Xt(u),null}else 2*wt()-B.renderingStartTime>Qo&&p!==1073741824&&(u.flags|=128,m=!0,Nu(B,!1),u.lanes=4194304);B.isBackwards?(k.sibling=u.child,u.child=k):(p=B.last,p!==null?p.sibling=k:u.child=k,B.last=k)}return B.tail!==null?(u=B.tail,B.rendering=u,B.tail=u.sibling,B.renderingStartTime=wt(),u.sibling=null,p=ft.current,nt(ft,m?p&1|2:p&1),u):(Xt(u),null);case 22:case 23:return af(),m=u.memoizedState!==null,o!==null&&o.memoizedState!==null!==m&&(u.flags|=8192),m&&(u.mode&1)!==0?(xn&1073741824)!==0&&(Xt(u),u.subtreeFlags&6&&(u.flags|=8192)):Xt(u),null;case 24:return null;case 25:return null}throw Error(n(156,u.tag))}function jC(o,u){switch(d2(u),u.tag){case 1:return fn(u.type)&&Wl(),o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 3:return Uo(),ut(cn),ut(Qt),W2(),o=u.flags,(o&65536)!==0&&(o&128)===0?(u.flags=o&-65537|128,u):null;case 5:return P2(u),null;case 13:if(ut(ft),o=u.memoizedState,o!==null&&o.dehydrated!==null){if(u.alternate===null)throw Error(n(340));Lo()}return o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 19:return ut(ft),null;case 4:return Uo(),null;case 10:return b2(u.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Vl=!1,Zt=!1,DC=typeof WeakSet=="function"?WeakSet:Set,be=null;function Go(o,u){var p=o.ref;if(p!==null)if(typeof p=="function")try{p(null)}catch(m){yt(o,u,m)}else p.current=null}function V2(o,u,p){try{p()}catch(m){yt(o,u,m)}}var k6=!1;function $C(o,u){if(a2=fl,o=p1(),Y0(o)){if("selectionStart"in o)var p={start:o.selectionStart,end:o.selectionEnd};else e:{p=(p=o.ownerDocument)&&p.defaultView||window;var m=p.getSelection&&p.getSelection();if(m&&m.rangeCount!==0){p=m.anchorNode;var g=m.anchorOffset,B=m.focusNode;m=m.focusOffset;try{p.nodeType,B.nodeType}catch{p=null;break e}var k=0,D=-1,z=-1,te=0,ie=0,se=o,oe=null;t:for(;;){for(var me;se!==p||g!==0&&se.nodeType!==3||(D=k+g),se!==B||m!==0&&se.nodeType!==3||(z=k+m),se.nodeType===3&&(k+=se.nodeValue.length),(me=se.firstChild)!==null;)oe=se,se=me;for(;;){if(se===o)break t;if(oe===p&&++te===g&&(D=k),oe===B&&++ie===m&&(z=k),(me=se.nextSibling)!==null)break;se=oe,oe=se.parentNode}se=me}p=D===-1||z===-1?null:{start:D,end:z}}else p=null}p=p||{start:0,end:0}}else p=null;for(o2={focusedElem:o,selectionRange:p},fl=!1,be=u;be!==null;)if(u=be,o=u.child,(u.subtreeFlags&1028)!==0&&o!==null)o.return=u,be=o;else for(;be!==null;){u=be;try{var Be=u.alternate;if((u.flags&1024)!==0)switch(u.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Se=Be.memoizedProps,Pt=Be.memoizedState,Z=u.stateNode,U=Z.getSnapshotBeforeUpdate(u.elementType===u.type?Se:Jn(u.type,Se),Pt);Z.__reactInternalSnapshotBeforeUpdate=U}break;case 3:var ee=u.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(pe){yt(u,u.return,pe)}if(o=u.sibling,o!==null){o.return=u.return,be=o;break}be=u.return}return Be=k6,k6=!1,Be}function Tu(o,u,p){var m=u.updateQueue;if(m=m!==null?m.lastEffect:null,m!==null){var g=m=m.next;do{if((g.tag&o)===o){var B=g.destroy;g.destroy=void 0,B!==void 0&&V2(u,p,B)}g=g.next}while(g!==m)}}function Gl(o,u){if(u=u.updateQueue,u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&o)===o){var m=p.create;p.destroy=m()}p=p.next}while(p!==u)}}function G2(o){var u=o.ref;if(u!==null){var p=o.stateNode;switch(o.tag){case 5:o=p;break;default:o=p}typeof u=="function"?u(o):u.current=o}}function E6(o){var u=o.alternate;u!==null&&(o.alternate=null,E6(u)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(u=o.stateNode,u!==null&&(delete u[dr],delete u[Pu],delete u[l2],delete u[xC],delete u[wC])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function N6(o){return o.tag===5||o.tag===3||o.tag===4}function T6(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||N6(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function K2(o,u,p){var m=o.tag;if(m===5||m===6)o=o.stateNode,u?p.nodeType===8?p.parentNode.insertBefore(o,u):p.insertBefore(o,u):(p.nodeType===8?(u=p.parentNode,u.insertBefore(o,p)):(u=p,u.appendChild(o)),p=p._reactRootContainer,p!=null||u.onclick!==null||(u.onclick=Pl));else if(m!==4&&(o=o.child,o!==null))for(K2(o,u,p),o=o.sibling;o!==null;)K2(o,u,p),o=o.sibling}function Q2(o,u,p){var m=o.tag;if(m===5||m===6)o=o.stateNode,u?p.insertBefore(o,u):p.appendChild(o);else if(m!==4&&(o=o.child,o!==null))for(Q2(o,u,p),o=o.sibling;o!==null;)Q2(o,u,p),o=o.sibling}var Ut=null,er=!1;function ma(o,u,p){for(p=p.child;p!==null;)R6(o,u,p),p=p.sibling}function R6(o,u,p){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(il,p)}catch{}switch(p.tag){case 5:Zt||Go(p,u);case 6:var m=Ut,g=er;Ut=null,ma(o,u,p),Ut=m,er=g,Ut!==null&&(er?(o=Ut,p=p.stateNode,o.nodeType===8?o.parentNode.removeChild(p):o.removeChild(p)):Ut.removeChild(p.stateNode));break;case 18:Ut!==null&&(er?(o=Ut,p=p.stateNode,o.nodeType===8?s2(o.parentNode,p):o.nodeType===1&&s2(o,p),du(o)):s2(Ut,p.stateNode));break;case 4:m=Ut,g=er,Ut=p.stateNode.containerInfo,er=!0,ma(o,u,p),Ut=m,er=g;break;case 0:case 11:case 14:case 15:if(!Zt&&(m=p.updateQueue,m!==null&&(m=m.lastEffect,m!==null))){g=m=m.next;do{var B=g,k=B.destroy;B=B.tag,k!==void 0&&((B&2)!==0||(B&4)!==0)&&V2(p,u,k),g=g.next}while(g!==m)}ma(o,u,p);break;case 1:if(!Zt&&(Go(p,u),m=p.stateNode,typeof m.componentWillUnmount=="function"))try{m.props=p.memoizedProps,m.state=p.memoizedState,m.componentWillUnmount()}catch(D){yt(p,u,D)}ma(o,u,p);break;case 21:ma(o,u,p);break;case 22:p.mode&1?(Zt=(m=Zt)||p.memoizedState!==null,ma(o,u,p),Zt=m):ma(o,u,p);break;default:ma(o,u,p)}}function H6(o){var u=o.updateQueue;if(u!==null){o.updateQueue=null;var p=o.stateNode;p===null&&(p=o.stateNode=new DC),u.forEach(function(m){var g=QC.bind(null,o,m);p.has(m)||(p.add(m),m.then(g,g))})}}function tr(o,u){var p=u.deletions;if(p!==null)for(var m=0;m<p.length;m++){var g=p[m];try{var B=o,k=u,D=k;e:for(;D!==null;){switch(D.tag){case 5:Ut=D.stateNode,er=!1;break e;case 3:Ut=D.stateNode.containerInfo,er=!0;break e;case 4:Ut=D.stateNode.containerInfo,er=!0;break e}D=D.return}if(Ut===null)throw Error(n(160));R6(B,k,g),Ut=null,er=!1;var z=g.alternate;z!==null&&(z.return=null),g.return=null}catch(te){yt(g,u,te)}}if(u.subtreeFlags&12854)for(u=u.child;u!==null;)j6(u,o),u=u.sibling}function j6(o,u){var p=o.alternate,m=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(tr(u,o),vr(o),m&4){try{Tu(3,o,o.return),Gl(3,o)}catch(Se){yt(o,o.return,Se)}try{Tu(5,o,o.return)}catch(Se){yt(o,o.return,Se)}}break;case 1:tr(u,o),vr(o),m&512&&p!==null&&Go(p,p.return);break;case 5:if(tr(u,o),vr(o),m&512&&p!==null&&Go(p,p.return),o.flags&32){var g=o.stateNode;try{ta(g,"")}catch(Se){yt(o,o.return,Se)}}if(m&4&&(g=o.stateNode,g!=null)){var B=o.memoizedProps,k=p!==null?p.memoizedProps:B,D=o.type,z=o.updateQueue;if(o.updateQueue=null,z!==null)try{D==="input"&&B.type==="radio"&&B.name!=null&&Ae(g,B),W0(D,k);var te=W0(D,B);for(k=0;k<z.length;k+=2){var ie=z[k],se=z[k+1];ie==="style"?ru(g,se):ie==="dangerouslySetInnerHTML"?Wo(g,se):ie==="children"?ta(g,se):A(g,ie,se,te)}switch(D){case"input":Fe(g,B);break;case"textarea":gt(g,B);break;case"select":var oe=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!B.multiple;var me=B.value;me!=null?Bt(g,!!B.multiple,me,!1):oe!==!!B.multiple&&(B.defaultValue!=null?Bt(g,!!B.multiple,B.defaultValue,!0):Bt(g,!!B.multiple,B.multiple?[]:"",!1))}g[Pu]=B}catch(Se){yt(o,o.return,Se)}}break;case 6:if(tr(u,o),vr(o),m&4){if(o.stateNode===null)throw Error(n(162));g=o.stateNode,B=o.memoizedProps;try{g.nodeValue=B}catch(Se){yt(o,o.return,Se)}}break;case 3:if(tr(u,o),vr(o),m&4&&p!==null&&p.memoizedState.isDehydrated)try{du(u.containerInfo)}catch(Se){yt(o,o.return,Se)}break;case 4:tr(u,o),vr(o);break;case 13:tr(u,o),vr(o),g=o.child,g.flags&8192&&(B=g.memoizedState!==null,g.stateNode.isHidden=B,!B||g.alternate!==null&&g.alternate.memoizedState!==null||(Z2=wt())),m&4&&H6(o);break;case 22:if(ie=p!==null&&p.memoizedState!==null,o.mode&1?(Zt=(te=Zt)||ie,tr(u,o),Zt=te):tr(u,o),vr(o),m&8192){if(te=o.memoizedState!==null,(o.stateNode.isHidden=te)&&!ie&&(o.mode&1)!==0)for(be=o,ie=o.child;ie!==null;){for(se=be=ie;be!==null;){switch(oe=be,me=oe.child,oe.tag){case 0:case 11:case 14:case 15:Tu(4,oe,oe.return);break;case 1:Go(oe,oe.return);var Be=oe.stateNode;if(typeof Be.componentWillUnmount=="function"){m=oe,p=oe.return;try{u=m,Be.props=u.memoizedProps,Be.state=u.memoizedState,Be.componentWillUnmount()}catch(Se){yt(m,p,Se)}}break;case 5:Go(oe,oe.return);break;case 22:if(oe.memoizedState!==null){L6(se);continue}}me!==null?(me.return=oe,be=me):L6(se)}ie=ie.sibling}e:for(ie=null,se=o;;){if(se.tag===5){if(ie===null){ie=se;try{g=se.stateNode,te?(B=g.style,typeof B.setProperty=="function"?B.setProperty("display","none","important"):B.display="none"):(D=se.stateNode,z=se.memoizedProps.style,k=z!=null&&z.hasOwnProperty("display")?z.display:null,D.style.display=na("display",k))}catch(Se){yt(o,o.return,Se)}}}else if(se.tag===6){if(ie===null)try{se.stateNode.nodeValue=te?"":se.memoizedProps}catch(Se){yt(o,o.return,Se)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===o)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===o)break e;for(;se.sibling===null;){if(se.return===null||se.return===o)break e;ie===se&&(ie=null),se=se.return}ie===se&&(ie=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:tr(u,o),vr(o),m&4&&H6(o);break;case 21:break;default:tr(u,o),vr(o)}}function vr(o){var u=o.flags;if(u&2){try{e:{for(var p=o.return;p!==null;){if(N6(p)){var m=p;break e}p=p.return}throw Error(n(160))}switch(m.tag){case 5:var g=m.stateNode;m.flags&32&&(ta(g,""),m.flags&=-33);var B=T6(o);Q2(o,B,g);break;case 3:case 4:var k=m.stateNode.containerInfo,D=T6(o);K2(o,D,k);break;default:throw Error(n(161))}}catch(z){yt(o,o.return,z)}o.flags&=-3}u&4096&&(o.flags&=-4097)}function LC(o,u,p){be=o,D6(o)}function D6(o,u,p){for(var m=(o.mode&1)!==0;be!==null;){var g=be,B=g.child;if(g.tag===22&&m){var k=g.memoizedState!==null||Vl;if(!k){var D=g.alternate,z=D!==null&&D.memoizedState!==null||Zt;D=Vl;var te=Zt;if(Vl=k,(Zt=z)&&!te)for(be=g;be!==null;)k=be,z=k.child,k.tag===22&&k.memoizedState!==null?F6(g):z!==null?(z.return=k,be=z):F6(g);for(;B!==null;)be=B,D6(B),B=B.sibling;be=g,Vl=D,Zt=te}$6(o)}else(g.subtreeFlags&8772)!==0&&B!==null?(B.return=g,be=B):$6(o)}}function $6(o){for(;be!==null;){var u=be;if((u.flags&8772)!==0){var p=u.alternate;try{if((u.flags&8772)!==0)switch(u.tag){case 0:case 11:case 15:Zt||Gl(5,u);break;case 1:var m=u.stateNode;if(u.flags&4&&!Zt)if(p===null)m.componentDidMount();else{var g=u.elementType===u.type?p.memoizedProps:Jn(u.type,p.memoizedProps);m.componentDidUpdate(g,p.memoizedState,m.__reactInternalSnapshotBeforeUpdate)}var B=u.updateQueue;B!==null&&L1(u,B,m);break;case 3:var k=u.updateQueue;if(k!==null){if(p=null,u.child!==null)switch(u.child.tag){case 5:p=u.child.stateNode;break;case 1:p=u.child.stateNode}L1(u,k,p)}break;case 5:var D=u.stateNode;if(p===null&&u.flags&4){p=D;var z=u.memoizedProps;switch(u.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&p.focus();break;case"img":z.src&&(p.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(u.memoizedState===null){var te=u.alternate;if(te!==null){var ie=te.memoizedState;if(ie!==null){var se=ie.dehydrated;se!==null&&du(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Zt||u.flags&512&&G2(u)}catch(oe){yt(u,u.return,oe)}}if(u===o){be=null;break}if(p=u.sibling,p!==null){p.return=u.return,be=p;break}be=u.return}}function L6(o){for(;be!==null;){var u=be;if(u===o){be=null;break}var p=u.sibling;if(p!==null){p.return=u.return,be=p;break}be=u.return}}function F6(o){for(;be!==null;){var u=be;try{switch(u.tag){case 0:case 11:case 15:var p=u.return;try{Gl(4,u)}catch(z){yt(u,p,z)}break;case 1:var m=u.stateNode;if(typeof m.componentDidMount=="function"){var g=u.return;try{m.componentDidMount()}catch(z){yt(u,g,z)}}var B=u.return;try{G2(u)}catch(z){yt(u,B,z)}break;case 5:var k=u.return;try{G2(u)}catch(z){yt(u,k,z)}}}catch(z){yt(u,u.return,z)}if(u===o){be=null;break}var D=u.sibling;if(D!==null){D.return=u.return,be=D;break}be=u.return}}var FC=Math.ceil,Kl=O.ReactCurrentDispatcher,Y2=O.ReactCurrentOwner,Hn=O.ReactCurrentBatchConfig,ze=0,$t=null,_t=null,Vt=0,xn=0,Ko=pa(0),Et=0,Ru=null,Ya=0,Ql=0,X2=0,Hu=null,hn=null,Z2=0,Qo=1/0,Tr=null,Yl=!1,J2=null,va=null,Xl=!1,ga=null,Zl=0,ju=0,ef=null,Jl=-1,ep=0;function nn(){return(ze&6)!==0?wt():Jl!==-1?Jl:Jl=wt()}function ya(o){return(o.mode&1)===0?1:(ze&2)!==0&&Vt!==0?Vt&-Vt:SC.transition!==null?(ep===0&&(ep=Tb()),ep):(o=Ze,o!==0||(o=window.event,o=o===void 0?16:zb(o.type)),o)}function nr(o,u,p,m){if(50<ju)throw ju=0,ef=null,Error(n(185));su(o,p,m),((ze&2)===0||o!==$t)&&(o===$t&&((ze&2)===0&&(Ql|=p),Et===4&&ba(o,Vt)),mn(o,m),p===1&&ze===0&&(u.mode&1)===0&&(Qo=wt()+500,_l&&fa()))}function mn(o,u){var p=o.callbackNode;SO(o,u);var m=ll(o,o===$t?Vt:0);if(m===0)p!==null&&kb(p),o.callbackNode=null,o.callbackPriority=0;else if(u=m&-m,o.callbackPriority!==u){if(p!=null&&kb(p),u===1)o.tag===0?PC(z6.bind(null,o)):M1(z6.bind(null,o)),IC(function(){(ze&6)===0&&fa()}),p=null;else{switch(Rb(m)){case 1:p=E0;break;case 4:p=Eb;break;case 16:p=ol;break;case 536870912:p=Nb;break;default:p=ol}p=Z6(p,q6.bind(null,o))}o.callbackPriority=u,o.callbackNode=p}}function q6(o,u){if(Jl=-1,ep=0,(ze&6)!==0)throw Error(n(327));var p=o.callbackNode;if(Yo()&&o.callbackNode!==p)return null;var m=ll(o,o===$t?Vt:0);if(m===0)return null;if((m&30)!==0||(m&o.expiredLanes)!==0||u)u=tp(o,m);else{u=m;var g=ze;ze|=2;var B=V6();($t!==o||Vt!==u)&&(Tr=null,Qo=wt()+500,Za(o,u));do try{UC();break}catch(D){U6(o,D)}while(!0);y2(),Kl.current=B,ze=g,_t!==null?u=0:($t=null,Vt=0,u=Et)}if(u!==0){if(u===2&&(g=N0(o),g!==0&&(m=g,u=tf(o,g))),u===1)throw p=Ru,Za(o,0),ba(o,m),mn(o,wt()),p;if(u===6)ba(o,m);else{if(g=o.current.alternate,(m&30)===0&&!qC(g)&&(u=tp(o,m),u===2&&(B=N0(o),B!==0&&(m=B,u=tf(o,B))),u===1))throw p=Ru,Za(o,0),ba(o,m),mn(o,wt()),p;switch(o.finishedWork=g,o.finishedLanes=m,u){case 0:case 1:throw Error(n(345));case 2:Ja(o,hn,Tr);break;case 3:if(ba(o,m),(m&130023424)===m&&(u=Z2+500-wt(),10<u)){if(ll(o,0)!==0)break;if(g=o.suspendedLanes,(g&m)!==m){nn(),o.pingedLanes|=o.suspendedLanes&g;break}o.timeoutHandle=u2(Ja.bind(null,o,hn,Tr),u);break}Ja(o,hn,Tr);break;case 4:if(ba(o,m),(m&4194240)===m)break;for(u=o.eventTimes,g=-1;0<m;){var k=31-Yn(m);B=1<<k,k=u[k],k>g&&(g=k),m&=~B}if(m=g,m=wt()-m,m=(120>m?120:480>m?480:1080>m?1080:1920>m?1920:3e3>m?3e3:4320>m?4320:1960*FC(m/1960))-m,10<m){o.timeoutHandle=u2(Ja.bind(null,o,hn,Tr),m);break}Ja(o,hn,Tr);break;case 5:Ja(o,hn,Tr);break;default:throw Error(n(329))}}}return mn(o,wt()),o.callbackNode===p?q6.bind(null,o):null}function tf(o,u){var p=Hu;return o.current.memoizedState.isDehydrated&&(Za(o,u).flags|=256),o=tp(o,u),o!==2&&(u=hn,hn=p,u!==null&&nf(u)),o}function nf(o){hn===null?hn=o:hn.push.apply(hn,o)}function qC(o){for(var u=o;;){if(u.flags&16384){var p=u.updateQueue;if(p!==null&&(p=p.stores,p!==null))for(var m=0;m<p.length;m++){var g=p[m],B=g.getSnapshot;g=g.value;try{if(!Xn(B(),g))return!1}catch{return!1}}}if(p=u.child,u.subtreeFlags&16384&&p!==null)p.return=u,u=p;else{if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function ba(o,u){for(u&=~X2,u&=~Ql,o.suspendedLanes|=u,o.pingedLanes&=~u,o=o.expirationTimes;0<u;){var p=31-Yn(u),m=1<<p;o[p]=-1,u&=~m}}function z6(o){if((ze&6)!==0)throw Error(n(327));Yo();var u=ll(o,0);if((u&1)===0)return mn(o,wt()),null;var p=tp(o,u);if(o.tag!==0&&p===2){var m=N0(o);m!==0&&(u=m,p=tf(o,m))}if(p===1)throw p=Ru,Za(o,0),ba(o,u),mn(o,wt()),p;if(p===6)throw Error(n(345));return o.finishedWork=o.current.alternate,o.finishedLanes=u,Ja(o,hn,Tr),mn(o,wt()),null}function rf(o,u){var p=ze;ze|=1;try{return o(u)}finally{ze=p,ze===0&&(Qo=wt()+500,_l&&fa())}}function Xa(o){ga!==null&&ga.tag===0&&(ze&6)===0&&Yo();var u=ze;ze|=1;var p=Hn.transition,m=Ze;try{if(Hn.transition=null,Ze=1,o)return o()}finally{Ze=m,Hn.transition=p,ze=u,(ze&6)===0&&fa()}}function af(){xn=Ko.current,ut(Ko)}function Za(o,u){o.finishedWork=null,o.finishedLanes=0;var p=o.timeoutHandle;if(p!==-1&&(o.timeoutHandle=-1,bC(p)),_t!==null)for(p=_t.return;p!==null;){var m=p;switch(d2(m),m.tag){case 1:m=m.type.childContextTypes,m!=null&&Wl();break;case 3:Uo(),ut(cn),ut(Qt),W2();break;case 5:P2(m);break;case 4:Uo();break;case 13:ut(ft);break;case 19:ut(ft);break;case 10:b2(m.type._context);break;case 22:case 23:af()}p=p.return}if($t=o,_t=o=Ia(o.current,null),Vt=xn=u,Et=0,Ru=null,X2=Ql=Ya=0,hn=Hu=null,Ga!==null){for(u=0;u<Ga.length;u++)if(p=Ga[u],m=p.interleaved,m!==null){p.interleaved=null;var g=m.next,B=p.pending;if(B!==null){var k=B.next;B.next=g,m.next=k}p.pending=m}Ga=null}return o}function U6(o,u){do{var p=_t;try{if(y2(),jl.current=Fl,Dl){for(var m=dt.memoizedState;m!==null;){var g=m.queue;g!==null&&(g.pending=null),m=m.next}Dl=!1}if(Qa=0,Dt=kt=dt=null,Ou=!1,Cu=0,Y2.current=null,p===null||p.return===null){Et=1,Ru=u,_t=null;break}e:{var B=o,k=p.return,D=p,z=u;if(u=Vt,D.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var te=z,ie=D,se=ie.tag;if((ie.mode&1)===0&&(se===0||se===11||se===15)){var oe=ie.alternate;oe?(ie.updateQueue=oe.updateQueue,ie.memoizedState=oe.memoizedState,ie.lanes=oe.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var me=v6(k);if(me!==null){me.flags&=-257,g6(me,k,D,B,u),me.mode&1&&m6(B,te,u),u=me,z=te;var Be=u.updateQueue;if(Be===null){var Se=new Set;Se.add(z),u.updateQueue=Se}else Be.add(z);break e}else{if((u&1)===0){m6(B,te,u),of();break e}z=Error(n(426))}}else if(pt&&D.mode&1){var Pt=v6(k);if(Pt!==null){(Pt.flags&65536)===0&&(Pt.flags|=256),g6(Pt,k,D,B,u),v2(Vo(z,D));break e}}B=z=Vo(z,D),Et!==4&&(Et=2),Hu===null?Hu=[B]:Hu.push(B),B=k;do{switch(B.tag){case 3:B.flags|=65536,u&=-u,B.lanes|=u;var Z=d6(B,z,u);$1(B,Z);break e;case 1:D=z;var U=B.type,ee=B.stateNode;if((B.flags&128)===0&&(typeof U.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(va===null||!va.has(ee)))){B.flags|=65536,u&=-u,B.lanes|=u;var pe=h6(B,D,u);$1(B,pe);break e}}B=B.return}while(B!==null)}K6(p)}catch(_e){u=_e,_t===p&&p!==null&&(_t=p=p.return);continue}break}while(!0)}function V6(){var o=Kl.current;return Kl.current=Fl,o===null?Fl:o}function of(){(Et===0||Et===3||Et===2)&&(Et=4),$t===null||(Ya&268435455)===0&&(Ql&268435455)===0||ba($t,Vt)}function tp(o,u){var p=ze;ze|=2;var m=V6();($t!==o||Vt!==u)&&(Tr=null,Za(o,u));do try{zC();break}catch(g){U6(o,g)}while(!0);if(y2(),ze=p,Kl.current=m,_t!==null)throw Error(n(261));return $t=null,Vt=0,Et}function zC(){for(;_t!==null;)G6(_t)}function UC(){for(;_t!==null&&!vO();)G6(_t)}function G6(o){var u=X6(o.alternate,o,xn);o.memoizedProps=o.pendingProps,u===null?K6(o):_t=u,Y2.current=null}function K6(o){var u=o;do{var p=u.alternate;if(o=u.return,(u.flags&32768)===0){if(p=HC(p,u,xn),p!==null){_t=p;return}}else{if(p=jC(p,u),p!==null){p.flags&=32767,_t=p;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{Et=6,_t=null;return}}if(u=u.sibling,u!==null){_t=u;return}_t=u=o}while(u!==null);Et===0&&(Et=5)}function Ja(o,u,p){var m=Ze,g=Hn.transition;try{Hn.transition=null,Ze=1,VC(o,u,p,m)}finally{Hn.transition=g,Ze=m}return null}function VC(o,u,p,m){do Yo();while(ga!==null);if((ze&6)!==0)throw Error(n(327));p=o.finishedWork;var g=o.finishedLanes;if(p===null)return null;if(o.finishedWork=null,o.finishedLanes=0,p===o.current)throw Error(n(177));o.callbackNode=null,o.callbackPriority=0;var B=p.lanes|p.childLanes;if(WO(o,B),o===$t&&(_t=$t=null,Vt=0),(p.subtreeFlags&2064)===0&&(p.flags&2064)===0||Xl||(Xl=!0,Z6(ol,function(){return Yo(),null})),B=(p.flags&15990)!==0,(p.subtreeFlags&15990)!==0||B){B=Hn.transition,Hn.transition=null;var k=Ze;Ze=1;var D=ze;ze|=4,Y2.current=null,$C(o,p),j6(p,o),fC(o2),fl=!!a2,o2=a2=null,o.current=p,LC(p),gO(),ze=D,Ze=k,Hn.transition=B}else o.current=p;if(Xl&&(Xl=!1,ga=o,Zl=g),B=o.pendingLanes,B===0&&(va=null),IO(p.stateNode),mn(o,wt()),u!==null)for(m=o.onRecoverableError,p=0;p<u.length;p++)g=u[p],m(g.value,{componentStack:g.stack,digest:g.digest});if(Yl)throw Yl=!1,o=J2,J2=null,o;return(Zl&1)!==0&&o.tag!==0&&Yo(),B=o.pendingLanes,(B&1)!==0?o===ef?ju++:(ju=0,ef=o):ju=0,fa(),null}function Yo(){if(ga!==null){var o=Rb(Zl),u=Hn.transition,p=Ze;try{if(Hn.transition=null,Ze=16>o?16:o,ga===null)var m=!1;else{if(o=ga,ga=null,Zl=0,(ze&6)!==0)throw Error(n(331));var g=ze;for(ze|=4,be=o.current;be!==null;){var B=be,k=B.child;if((be.flags&16)!==0){var D=B.deletions;if(D!==null){for(var z=0;z<D.length;z++){var te=D[z];for(be=te;be!==null;){var ie=be;switch(ie.tag){case 0:case 11:case 15:Tu(8,ie,B)}var se=ie.child;if(se!==null)se.return=ie,be=se;else for(;be!==null;){ie=be;var oe=ie.sibling,me=ie.return;if(E6(ie),ie===te){be=null;break}if(oe!==null){oe.return=me,be=oe;break}be=me}}}var Be=B.alternate;if(Be!==null){var Se=Be.child;if(Se!==null){Be.child=null;do{var Pt=Se.sibling;Se.sibling=null,Se=Pt}while(Se!==null)}}be=B}}if((B.subtreeFlags&2064)!==0&&k!==null)k.return=B,be=k;else e:for(;be!==null;){if(B=be,(B.flags&2048)!==0)switch(B.tag){case 0:case 11:case 15:Tu(9,B,B.return)}var Z=B.sibling;if(Z!==null){Z.return=B.return,be=Z;break e}be=B.return}}var U=o.current;for(be=U;be!==null;){k=be;var ee=k.child;if((k.subtreeFlags&2064)!==0&&ee!==null)ee.return=k,be=ee;else e:for(k=U;be!==null;){if(D=be,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Gl(9,D)}}catch(_e){yt(D,D.return,_e)}if(D===k){be=null;break e}var pe=D.sibling;if(pe!==null){pe.return=D.return,be=pe;break e}be=D.return}}if(ze=g,fa(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(il,o)}catch{}m=!0}return m}finally{Ze=p,Hn.transition=u}}return!1}function Q6(o,u,p){u=Vo(p,u),u=d6(o,u,1),o=ha(o,u,1),u=nn(),o!==null&&(su(o,1,u),mn(o,u))}function yt(o,u,p){if(o.tag===3)Q6(o,o,p);else for(;u!==null;){if(u.tag===3){Q6(u,o,p);break}else if(u.tag===1){var m=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof m.componentDidCatch=="function"&&(va===null||!va.has(m))){o=Vo(p,o),o=h6(u,o,1),u=ha(u,o,1),o=nn(),u!==null&&(su(u,1,o),mn(u,o));break}}u=u.return}}function GC(o,u,p){var m=o.pingCache;m!==null&&m.delete(u),u=nn(),o.pingedLanes|=o.suspendedLanes&p,$t===o&&(Vt&p)===p&&(Et===4||Et===3&&(Vt&130023424)===Vt&&500>wt()-Z2?Za(o,0):X2|=p),mn(o,u)}function Y6(o,u){u===0&&((o.mode&1)===0?u=1:(u=sl,sl<<=1,(sl&130023424)===0&&(sl=4194304)));var p=nn();o=kr(o,u),o!==null&&(su(o,u,p),mn(o,p))}function KC(o){var u=o.memoizedState,p=0;u!==null&&(p=u.retryLane),Y6(o,p)}function QC(o,u){var p=0;switch(o.tag){case 13:var m=o.stateNode,g=o.memoizedState;g!==null&&(p=g.retryLane);break;case 19:m=o.stateNode;break;default:throw Error(n(314))}m!==null&&m.delete(u),Y6(o,p)}var X6;X6=function(o,u,p){if(o!==null)if(o.memoizedProps!==u.pendingProps||cn.current)dn=!0;else{if((o.lanes&p)===0&&(u.flags&128)===0)return dn=!1,RC(o,u,p);dn=(o.flags&131072)!==0}else dn=!1,pt&&(u.flags&1048576)!==0&&O1(u,Ol,u.index);switch(u.lanes=0,u.tag){case 2:var m=u.type;Ul(o,u),o=u.pendingProps;var g=jo(u,Qt.current);zo(u,p),g=M2(null,u,m,o,g,p);var B=O2();return u.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(u.tag=1,u.memoizedState=null,u.updateQueue=null,fn(m)?(B=!0,Al(u)):B=!1,u.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,x2(u),g.updater=ql,u.stateNode=g,g._reactInternals=u,R2(u,m,o,p),u=$2(null,u,m,!0,B,p)):(u.tag=0,pt&&B&&f2(u),tn(null,u,g,p),u=u.child),u;case 16:m=u.elementType;e:{switch(Ul(o,u),o=u.pendingProps,g=m._init,m=g(m._payload),u.type=m,g=u.tag=XC(m),o=Jn(m,o),g){case 0:u=D2(null,u,m,o,p);break e;case 1:u=w6(null,u,m,o,p);break e;case 11:u=y6(null,u,m,o,p);break e;case 14:u=b6(null,u,m,Jn(m.type,o),p);break e}throw Error(n(306,m,""))}return u;case 0:return m=u.type,g=u.pendingProps,g=u.elementType===m?g:Jn(m,g),D2(o,u,m,g,p);case 1:return m=u.type,g=u.pendingProps,g=u.elementType===m?g:Jn(m,g),w6(o,u,m,g,p);case 3:e:{if(P6(u),o===null)throw Error(n(387));m=u.pendingProps,B=u.memoizedState,g=B.element,D1(o,u),Rl(u,m,null,p);var k=u.memoizedState;if(m=k.element,B.isDehydrated)if(B={element:m,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},u.updateQueue.baseState=B,u.memoizedState=B,u.flags&256){g=Vo(Error(n(423)),u),u=S6(o,u,m,p,g);break e}else if(m!==g){g=Vo(Error(n(424)),u),u=S6(o,u,m,p,g);break e}else for(Bn=la(u.stateNode.containerInfo.firstChild),In=u,pt=!0,Zn=null,p=H1(u,null,m,p),u.child=p;p;)p.flags=p.flags&-3|4096,p=p.sibling;else{if(Lo(),m===g){u=Nr(o,u,p);break e}tn(o,u,m,p)}u=u.child}return u;case 5:return F1(u),o===null&&m2(u),m=u.type,g=u.pendingProps,B=o!==null?o.memoizedProps:null,k=g.children,i2(m,g)?k=null:B!==null&&i2(m,B)&&(u.flags|=32),x6(o,u),tn(o,u,k,p),u.child;case 6:return o===null&&m2(u),null;case 13:return W6(o,u,p);case 4:return w2(u,u.stateNode.containerInfo),m=u.pendingProps,o===null?u.child=Fo(u,null,m,p):tn(o,u,m,p),u.child;case 11:return m=u.type,g=u.pendingProps,g=u.elementType===m?g:Jn(m,g),y6(o,u,m,g,p);case 7:return tn(o,u,u.pendingProps,p),u.child;case 8:return tn(o,u,u.pendingProps.children,p),u.child;case 12:return tn(o,u,u.pendingProps.children,p),u.child;case 10:e:{if(m=u.type._context,g=u.pendingProps,B=u.memoizedProps,k=g.value,nt(El,m._currentValue),m._currentValue=k,B!==null)if(Xn(B.value,k)){if(B.children===g.children&&!cn.current){u=Nr(o,u,p);break e}}else for(B=u.child,B!==null&&(B.return=u);B!==null;){var D=B.dependencies;if(D!==null){k=B.child;for(var z=D.firstContext;z!==null;){if(z.context===m){if(B.tag===1){z=Er(-1,p&-p),z.tag=2;var te=B.updateQueue;if(te!==null){te=te.shared;var ie=te.pending;ie===null?z.next=z:(z.next=ie.next,ie.next=z),te.pending=z}}B.lanes|=p,z=B.alternate,z!==null&&(z.lanes|=p),I2(B.return,p,u),D.lanes|=p;break}z=z.next}}else if(B.tag===10)k=B.type===u.type?null:B.child;else if(B.tag===18){if(k=B.return,k===null)throw Error(n(341));k.lanes|=p,D=k.alternate,D!==null&&(D.lanes|=p),I2(k,p,u),k=B.sibling}else k=B.child;if(k!==null)k.return=B;else for(k=B;k!==null;){if(k===u){k=null;break}if(B=k.sibling,B!==null){B.return=k.return,k=B;break}k=k.return}B=k}tn(o,u,g.children,p),u=u.child}return u;case 9:return g=u.type,m=u.pendingProps.children,zo(u,p),g=Tn(g),m=m(g),u.flags|=1,tn(o,u,m,p),u.child;case 14:return m=u.type,g=Jn(m,u.pendingProps),g=Jn(m.type,g),b6(o,u,m,g,p);case 15:return I6(o,u,u.type,u.pendingProps,p);case 17:return m=u.type,g=u.pendingProps,g=u.elementType===m?g:Jn(m,g),Ul(o,u),u.tag=1,fn(m)?(o=!0,Al(u)):o=!1,zo(u,p),c6(u,m,g),R2(u,m,g,p),$2(null,u,m,!0,o,p);case 19:return _6(o,u,p);case 22:return B6(o,u,p)}throw Error(n(156,u.tag))};function Z6(o,u){return Cb(o,u)}function YC(o,u,p,m){this.tag=o,this.key=p,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=m,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(o,u,p,m){return new YC(o,u,p,m)}function uf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function XC(o){if(typeof o=="function")return uf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===N)return 11;if(o===q)return 14}return 2}function Ia(o,u){var p=o.alternate;return p===null?(p=jn(o.tag,u,o.key,o.mode),p.elementType=o.elementType,p.type=o.type,p.stateNode=o.stateNode,p.alternate=o,o.alternate=p):(p.pendingProps=u,p.type=o.type,p.flags=0,p.subtreeFlags=0,p.deletions=null),p.flags=o.flags&14680064,p.childLanes=o.childLanes,p.lanes=o.lanes,p.child=o.child,p.memoizedProps=o.memoizedProps,p.memoizedState=o.memoizedState,p.updateQueue=o.updateQueue,u=o.dependencies,p.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},p.sibling=o.sibling,p.index=o.index,p.ref=o.ref,p}function np(o,u,p,m,g,B){var k=2;if(m=o,typeof o=="function")uf(o)&&(k=1);else if(typeof o=="string")k=5;else e:switch(o){case E:return eo(p.children,g,B,u);case P:k=8,g|=8;break;case C:return o=jn(12,p,u,g|2),o.elementType=C,o.lanes=B,o;case $:return o=jn(13,p,u,g),o.elementType=$,o.lanes=B,o;case V:return o=jn(19,p,u,g),o.elementType=V,o.lanes=B,o;case K:return rp(p,g,B,u);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case T:k=10;break e;case j:k=9;break e;case N:k=11;break e;case q:k=14;break e;case G:k=16,m=null;break e}throw Error(n(130,o==null?o:typeof o,""))}return u=jn(k,p,u,g),u.elementType=o,u.type=m,u.lanes=B,u}function eo(o,u,p,m){return o=jn(7,o,m,u),o.lanes=p,o}function rp(o,u,p,m){return o=jn(22,o,m,u),o.elementType=K,o.lanes=p,o.stateNode={isHidden:!1},o}function sf(o,u,p){return o=jn(6,o,null,u),o.lanes=p,o}function lf(o,u,p){return u=jn(4,o.children!==null?o.children:[],o.key,u),u.lanes=p,u.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},u}function ZC(o,u,p,m,g){this.tag=u,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=T0(0),this.expirationTimes=T0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=T0(0),this.identifierPrefix=m,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function pf(o,u,p,m,g,B,k,D,z){return o=new ZC(o,u,p,D,z),u===1?(u=1,B===!0&&(u|=8)):u=0,B=jn(3,null,null,u),o.current=B,B.stateNode=o,B.memoizedState={element:m,isDehydrated:p,cache:null,transitions:null,pendingSuspenseBoundaries:null},x2(B),o}function JC(o,u,p){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:m==null?null:""+m,children:o,containerInfo:u,implementation:p}}function J6(o){if(!o)return ca;o=o._reactInternals;e:{if(Fa(o)!==o||o.tag!==1)throw Error(n(170));var u=o;do{switch(u.tag){case 3:u=u.stateNode.context;break e;case 1:if(fn(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break e}}u=u.return}while(u!==null);throw Error(n(171))}if(o.tag===1){var p=o.type;if(fn(p))return A1(o,p,u)}return u}function eI(o,u,p,m,g,B,k,D,z){return o=pf(p,m,!0,o,g,B,k,D,z),o.context=J6(null),p=o.current,m=nn(),g=ya(p),B=Er(m,g),B.callback=u??null,ha(p,B,g),o.current.lanes=g,su(o,g,m),mn(o,m),o}function ap(o,u,p,m){var g=u.current,B=nn(),k=ya(g);return p=J6(p),u.context===null?u.context=p:u.pendingContext=p,u=Er(B,k),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ha(g,u,k),o!==null&&(nr(o,g,k,B),Tl(o,g,k)),k}function op(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function tI(o,u){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var p=o.retryLane;o.retryLane=p!==0&&p<u?p:u}}function cf(o,u){tI(o,u),(o=o.alternate)&&tI(o,u)}function ek(){return null}var nI=typeof reportError=="function"?reportError:function(o){console.error(o)};function ff(o){this._internalRoot=o}ip.prototype.render=ff.prototype.render=function(o){var u=this._internalRoot;if(u===null)throw Error(n(409));ap(o,u,null,null)},ip.prototype.unmount=ff.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var u=o.containerInfo;Xa(function(){ap(null,o,null,null)}),u[_r]=null}};function ip(o){this._internalRoot=o}ip.prototype.unstable_scheduleHydration=function(o){if(o){var u=Db();o={blockedOn:null,target:o,priority:u};for(var p=0;p<ia.length&&u!==0&&u<ia[p].priority;p++);ia.splice(p,0,o),p===0&&Fb(o)}};function df(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function up(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function rI(){}function tk(o,u,p,m,g){if(g){if(typeof m=="function"){var B=m;m=function(){var te=op(k);B.call(te)}}var k=eI(u,m,o,0,null,!1,!1,"",rI);return o._reactRootContainer=k,o[_r]=k.current,xu(o.nodeType===8?o.parentNode:o),Xa(),k}for(;g=o.lastChild;)o.removeChild(g);if(typeof m=="function"){var D=m;m=function(){var te=op(z);D.call(te)}}var z=pf(o,0,!1,null,null,!1,!1,"",rI);return o._reactRootContainer=z,o[_r]=z.current,xu(o.nodeType===8?o.parentNode:o),Xa(function(){ap(u,z,p,m)}),z}function sp(o,u,p,m,g){var B=p._reactRootContainer;if(B){var k=B;if(typeof g=="function"){var D=g;g=function(){var z=op(k);D.call(z)}}ap(u,k,o,g)}else k=tk(p,u,o,g,m);return op(k)}Hb=function(o){switch(o.tag){case 3:var u=o.stateNode;if(u.current.memoizedState.isDehydrated){var p=uu(u.pendingLanes);p!==0&&(R0(u,p|1),mn(u,wt()),(ze&6)===0&&(Qo=wt()+500,fa()))}break;case 13:Xa(function(){var m=kr(o,1);if(m!==null){var g=nn();nr(m,o,1,g)}}),cf(o,1)}},H0=function(o){if(o.tag===13){var u=kr(o,134217728);if(u!==null){var p=nn();nr(u,o,134217728,p)}cf(o,134217728)}},jb=function(o){if(o.tag===13){var u=ya(o),p=kr(o,u);if(p!==null){var m=nn();nr(p,o,u,m)}cf(o,u)}},Db=function(){return Ze},$b=function(o,u){var p=Ze;try{return Ze=o,u()}finally{Ze=p}},M0=function(o,u,p){switch(u){case"input":if(Fe(o,p),u=p.name,p.type==="radio"&&u!=null){for(p=o;p.parentNode;)p=p.parentNode;for(p=p.querySelectorAll("input[name="+JSON.stringify(""+u)+'][type="radio"]'),u=0;u<p.length;u++){var m=p[u];if(m!==o&&m.form===o.form){var g=Sl(m);if(!g)throw Error(n(90));re(m),Fe(m,g)}}}break;case"textarea":gt(o,p);break;case"select":u=p.value,u!=null&&Bt(o,!!p.multiple,u,!1)}},Pb=rf,Sb=Xa;var nk={usingClientEntryPoint:!1,Events:[Su,Ro,Sl,xb,wb,rf]},Du={findFiberByHostInstance:qa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rk={bundleType:Du.bundleType,version:Du.version,rendererPackageName:Du.rendererPackageName,rendererConfig:Du.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=Mb(o),o===null?null:o.stateNode},findFiberByHostInstance:Du.findFiberByHostInstance||ek,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lp.isDisabled&&lp.supportsFiber)try{il=lp.inject(rk),fr=lp}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nk,vn.createPortal=function(o,u){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(u))throw Error(n(200));return JC(o,u,null,p)},vn.createRoot=function(o,u){if(!df(o))throw Error(n(299));var p=!1,m="",g=nI;return u!=null&&(u.unstable_strictMode===!0&&(p=!0),u.identifierPrefix!==void 0&&(m=u.identifierPrefix),u.onRecoverableError!==void 0&&(g=u.onRecoverableError)),u=pf(o,1,!1,null,null,p,!1,m,g),o[_r]=u.current,xu(o.nodeType===8?o.parentNode:o),new ff(u)},vn.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var u=o._reactInternals;if(u===void 0)throw typeof o.render=="function"?Error(n(188)):(o=Object.keys(o).join(","),Error(n(268,o)));return o=Mb(u),o=o===null?null:o.stateNode,o},vn.flushSync=function(o){return Xa(o)},vn.hydrate=function(o,u,p){if(!up(u))throw Error(n(200));return sp(null,o,u,!0,p)},vn.hydrateRoot=function(o,u,p){if(!df(o))throw Error(n(405));var m=p!=null&&p.hydratedSources||null,g=!1,B="",k=nI;if(p!=null&&(p.unstable_strictMode===!0&&(g=!0),p.identifierPrefix!==void 0&&(B=p.identifierPrefix),p.onRecoverableError!==void 0&&(k=p.onRecoverableError)),u=eI(u,null,o,1,p??null,g,!1,B,k),o[_r]=u.current,xu(o),m)for(o=0;o<m.length;o++)p=m[o],g=p._getVersion,g=g(p._source),u.mutableSourceEagerHydrationData==null?u.mutableSourceEagerHydrationData=[p,g]:u.mutableSourceEagerHydrationData.push(p,g);return new ip(u)},vn.render=function(o,u,p){if(!up(u))throw Error(n(200));return sp(null,o,u,!1,p)},vn.unmountComponentAtNode=function(o){if(!up(o))throw Error(n(40));return o._reactRootContainer?(Xa(function(){sp(null,null,o,!1,function(){o._reactRootContainer=null,o[_r]=null})}),!0):!1},vn.unstable_batchedUpdates=rf,vn.unstable_renderSubtreeIntoContainer=function(o,u,p,m){if(!up(p))throw Error(n(200));if(o==null||o._reactInternals===void 0)throw Error(n(38));return sp(o,u,p,!1,m)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var cI;function N3(){if(cI)return vf.exports;cI=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),vf.exports=dk(),vf.exports}var fI;function hk(){if(fI)return cp;fI=1;var e=N3();return cp.createRoot=e.createRoot,cp.hydrateRoot=e.hydrateRoot,cp}var mk=hk(),X=sy();const R=Xe(X),vk=uk({__proto__:null,default:R},[X]);var _p={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var gk=_p.exports,dI;function yk(){return dI||(dI=1,(function(e,t){((n,r)=>{e.exports=r()})(gk,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},a,i=!r.document&&!!r.postMessage,s=r.IS_PAPA_WORKER||!1,l={},c=0,f={};function h(P){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(C){var T=w(C);T.chunkSize=parseInt(T.chunkSize),C.step||C.chunk||(T.chunkSize=null),this._handle=new I(T),(this._handle.streamer=this)._config=T}).call(this,P),this.parseChunk=function(C,T){var j=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<j){let $=this._config.newline;$||(N=this._config.quoteChar||'"',$=this._handle.guessLineEndings(C,N)),C=[...C.split($).slice(j)].join($)}this.isFirstChunk&&E(this._config.beforeFirstChunk)&&(N=this._config.beforeFirstChunk(C))!==void 0&&(C=N),this.isFirstChunk=!1,this._halted=!1;var j=this._partialLine+C,N=(this._partialLine="",this._handle.parse(j,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(C=N.meta.cursor,j=(this._finished||(this._partialLine=j.substring(C-this._baseIndex),this._baseIndex=C),N&&N.data&&(this._rowCount+=N.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),s)r.postMessage({results:N,workerId:f.WORKER_ID,finished:j});else if(E(this._config.chunk)&&!T){if(this._config.chunk(N,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=N=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(N.data),this._completeResults.errors=this._completeResults.errors.concat(N.errors),this._completeResults.meta=N.meta),this._completed||!j||!E(this._config.complete)||N&&N.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),j||N&&N.meta.paused||this._nextChunk(),N}this._halted=!0},this._sendError=function(C){E(this._config.error)?this._config.error(C):s&&this._config.error&&r.postMessage({workerId:f.WORKER_ID,error:C,finished:!1})}}function d(P){var C;(P=P||{}).chunkSize||(P.chunkSize=f.RemoteChunkSize),h.call(this,P),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(T){this._input=T,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(C=new XMLHttpRequest,this._config.withCredentials&&(C.withCredentials=this._config.withCredentials),i||(C.onload=_(this._chunkLoaded,this),C.onerror=_(this._chunkError,this)),C.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var T,j=this._config.downloadRequestHeaders;for(T in j)C.setRequestHeader(T,j[T])}var N;this._config.chunkSize&&(N=this._start+this._config.chunkSize-1,C.setRequestHeader("Range","bytes="+this._start+"-"+N));try{C.send(this._config.downloadRequestBody)}catch($){this._chunkError($.message)}i&&C.status===0&&this._chunkError()}},this._chunkLoaded=function(){C.readyState===4&&(C.status<200||400<=C.status?this._chunkError():(this._start+=this._config.chunkSize||C.responseText.length,this._finished=!this._config.chunkSize||this._start>=(T=>(T=T.getResponseHeader("Content-Range"))!==null?parseInt(T.substring(T.lastIndexOf("/")+1)):-1)(C),this.parseChunk(C.responseText)))},this._chunkError=function(T){T=C.statusText||T,this._sendError(new Error(T))}}function v(P){(P=P||{}).chunkSize||(P.chunkSize=f.LocalChunkSize),h.call(this,P);var C,T,j=typeof FileReader<"u";this.stream=function(N){this._input=N,T=N.slice||N.webkitSlice||N.mozSlice,j?((C=new FileReader).onload=_(this._chunkLoaded,this),C.onerror=_(this._chunkError,this)):C=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var N=this._input,$=(this._config.chunkSize&&($=Math.min(this._start+this._config.chunkSize,this._input.size),N=T.call(N,this._start,$)),C.readAsText(N,this._config.encoding));j||this._chunkLoaded({target:{result:$}})},this._chunkLoaded=function(N){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(N.target.result)},this._chunkError=function(){this._sendError(C.error)}}function y(P){var C;h.call(this,P=P||{}),this.stream=function(T){return C=T,this._nextChunk()},this._nextChunk=function(){var T,j;if(!this._finished)return T=this._config.chunkSize,C=T?(j=C.substring(0,T),C.substring(T)):(j=C,""),this._finished=!C,this.parseChunk(j)}}function x(P){h.call(this,P=P||{});var C=[],T=!0,j=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(N){this._input=N,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){j&&C.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),C.length?this.parseChunk(C.shift()):T=!0},this._streamData=_(function(N){try{C.push(typeof N=="string"?N:N.toString(this._config.encoding)),T&&(T=!1,this._checkIsFinished(),this.parseChunk(C.shift()))}catch($){this._streamError($)}},this),this._streamError=_(function(N){this._streamCleanUp(),this._sendError(N)},this),this._streamEnd=_(function(){this._streamCleanUp(),j=!0,this._streamData("")},this),this._streamCleanUp=_(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function I(P){var C,T,j,N,$=Math.pow(2,53),V=-$,q=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,G=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,K=this,L=0,Y=0,Q=!1,H=!1,F=[],J={data:[],errors:[],meta:{}};function ue(fe){return P.skipEmptyLines==="greedy"?fe.join("").trim()==="":fe.length===1&&fe[0].length===0}function he(){if(J&&j&&(ye("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),j=!1),P.skipEmptyLines&&(J.data=J.data.filter(function(re){return!ue(re)})),ge()){let re=function(Re,Pe){E(P.transformHeader)&&(Re=P.transformHeader(Re,Pe)),F.push(Re)};var ce=re;if(J)if(Array.isArray(J.data[0])){for(var fe=0;ge()&&fe<J.data.length;fe++)J.data[fe].forEach(re);J.data.splice(0,1)}else J.data.forEach(re)}function ne(re,Re){for(var Pe=P.header?{}:[],Ce=0;Ce<re.length;Ce++){var Ae=Ce,Fe=re[Ce],Fe=((je,qe)=>(Ke=>(P.dynamicTypingFunction&&P.dynamicTyping[Ke]===void 0&&(P.dynamicTyping[Ke]=P.dynamicTypingFunction(Ke)),(P.dynamicTyping[Ke]||P.dynamicTyping)===!0))(je)?qe==="true"||qe==="TRUE"||qe!=="false"&&qe!=="FALSE"&&((Ke=>{if(q.test(Ke)&&(Ke=parseFloat(Ke),V<Ke&&Ke<$))return 1})(qe)?parseFloat(qe):G.test(qe)?new Date(qe):qe===""?null:qe):qe)(Ae=P.header?Ce>=F.length?"__parsed_extra":F[Ce]:Ae,Fe=P.transform?P.transform(Fe,Ae):Fe);Ae==="__parsed_extra"?(Pe[Ae]=Pe[Ae]||[],Pe[Ae].push(Fe)):Pe[Ae]=Fe}return P.header&&(Ce>F.length?ye("FieldMismatch","TooManyFields","Too many fields: expected "+F.length+" fields but parsed "+Ce,Y+Re):Ce<F.length&&ye("FieldMismatch","TooFewFields","Too few fields: expected "+F.length+" fields but parsed "+Ce,Y+Re)),Pe}var de;J&&(P.header||P.dynamicTyping||P.transform)&&(de=1,!J.data.length||Array.isArray(J.data[0])?(J.data=J.data.map(ne),de=J.data.length):J.data=ne(J.data,0),P.header&&J.meta&&(J.meta.fields=F),Y+=de)}function ge(){return P.header&&F.length===0}function ye(fe,ne,de,ce){fe={type:fe,code:ne,message:de},ce!==void 0&&(fe.row=ce),J.errors.push(fe)}E(P.step)&&(N=P.step,P.step=function(fe){J=fe,ge()?he():(he(),J.data.length!==0&&(L+=fe.data.length,P.preview&&L>P.preview?T.abort():(J.data=J.data[0],N(J,K))))}),this.parse=function(fe,ne,de){var ce=P.quoteChar||'"',ce=(P.newline||(P.newline=this.guessLineEndings(fe,ce)),j=!1,P.delimiter?E(P.delimiter)&&(P.delimiter=P.delimiter(fe),J.meta.delimiter=P.delimiter):((ce=((re,Re,Pe,Ce,Ae)=>{var Fe,je,qe,Ke;Ae=Ae||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var Bt=0;Bt<Ae.length;Bt++){for(var vt,On=Ae[Bt],gt=0,Kt=0,xt=0,jt=(qe=void 0,new S({comments:Ce,delimiter:On,newline:Re,preview:10}).parse(re)),pn=0;pn<jt.data.length;pn++)Pe&&ue(jt.data[pn])?xt++:(vt=jt.data[pn].length,Kt+=vt,qe===void 0?qe=vt:0<vt&&(gt+=Math.abs(vt-qe),qe=vt));0<jt.data.length&&(Kt/=jt.data.length-xt),(je===void 0||gt<=je)&&(Ke===void 0||Ke<Kt)&&1.99<Kt&&(je=gt,Fe=On,Ke=Kt)}return{successful:!!(P.delimiter=Fe),bestDelimiter:Fe}})(fe,P.newline,P.skipEmptyLines,P.comments,P.delimitersToGuess)).successful?P.delimiter=ce.bestDelimiter:(j=!0,P.delimiter=f.DefaultDelimiter),J.meta.delimiter=P.delimiter),w(P));return P.preview&&P.header&&ce.preview++,C=fe,T=new S(ce),J=T.parse(C,ne,de),he(),Q?{meta:{paused:!0}}:J||{meta:{paused:!1}}},this.paused=function(){return Q},this.pause=function(){Q=!0,T.abort(),C=E(P.chunk)?"":C.substring(T.getCharIndex())},this.resume=function(){K.streamer._halted?(Q=!1,K.streamer.parseChunk(C,!0)):setTimeout(K.resume,3)},this.aborted=function(){return H},this.abort=function(){H=!0,T.abort(),J.meta.aborted=!0,E(P.complete)&&P.complete(J),C=""},this.guessLineEndings=function(re,ce){re=re.substring(0,1048576);var ce=new RegExp(b(ce)+"([^]*?)"+b(ce),"gm"),de=(re=re.replace(ce,"")).split("\r"),ce=re.split(`
`),re=1<ce.length&&ce[0].length<de[0].length;if(de.length===1||re)return`
`;for(var Re=0,Pe=0;Pe<de.length;Pe++)de[Pe][0]===`
`&&Re++;return Re>=de.length/2?`\r
`:"\r"}}function b(P){return P.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function S(P){var C=(P=P||{}).delimiter,T=P.newline,j=P.comments,N=P.step,$=P.preview,V=P.fastMode,q=null,G=!1,K=P.quoteChar==null?'"':P.quoteChar,L=K;if(P.escapeChar!==void 0&&(L=P.escapeChar),(typeof C!="string"||-1<f.BAD_DELIMITERS.indexOf(C))&&(C=","),j===C)throw new Error("Comment character same as delimiter");j===!0?j="#":(typeof j!="string"||-1<f.BAD_DELIMITERS.indexOf(j))&&(j=!1),T!==`
`&&T!=="\r"&&T!==`\r
`&&(T=`
`);var Y=0,Q=!1;this.parse=function(H,F,J){if(typeof H!="string")throw new Error("Input must be a string");var ue=H.length,he=C.length,ge=T.length,ye=j.length,fe=E(N),ne=[],de=[],ce=[],re=Y=0;if(!H)return gt();if(V||V!==!1&&H.indexOf(K)===-1){for(var Re=H.split(T),Pe=0;Pe<Re.length;Pe++){if(ce=Re[Pe],Y+=ce.length,Pe!==Re.length-1)Y+=T.length;else if(J)return gt();if(!j||ce.substring(0,ye)!==j){if(fe){if(ne=[],Ke(ce.split(C)),Kt(),Q)return gt()}else Ke(ce.split(C));if($&&$<=Pe)return ne=ne.slice(0,$),gt(!0)}}return gt()}for(var Ce=H.indexOf(C,Y),Ae=H.indexOf(T,Y),Fe=new RegExp(b(L)+b(K),"g"),je=H.indexOf(K,Y);;)if(H[Y]===K)for(je=Y,Y++;;){if((je=H.indexOf(K,je+1))===-1)return J||de.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ne.length,index:Y}),vt();if(je===ue-1)return vt(H.substring(Y,je).replace(Fe,K));if(K===L&&H[je+1]===L)je++;else if(K===L||je===0||H[je-1]!==L){Ce!==-1&&Ce<je+1&&(Ce=H.indexOf(C,je+1));var qe=Bt((Ae=Ae!==-1&&Ae<je+1?H.indexOf(T,je+1):Ae)===-1?Ce:Math.min(Ce,Ae));if(H.substr(je+1+qe,he)===C){ce.push(H.substring(Y,je).replace(Fe,K)),H[Y=je+1+qe+he]!==K&&(je=H.indexOf(K,Y)),Ce=H.indexOf(C,Y),Ae=H.indexOf(T,Y);break}if(qe=Bt(Ae),H.substring(je+1+qe,je+1+qe+ge)===T){if(ce.push(H.substring(Y,je).replace(Fe,K)),On(je+1+qe+ge),Ce=H.indexOf(C,Y),je=H.indexOf(K,Y),fe&&(Kt(),Q))return gt();if($&&ne.length>=$)return gt(!0);break}de.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ne.length,index:Y}),je++}}else if(j&&ce.length===0&&H.substring(Y,Y+ye)===j){if(Ae===-1)return gt();Y=Ae+ge,Ae=H.indexOf(T,Y),Ce=H.indexOf(C,Y)}else if(Ce!==-1&&(Ce<Ae||Ae===-1))ce.push(H.substring(Y,Ce)),Y=Ce+he,Ce=H.indexOf(C,Y);else{if(Ae===-1)break;if(ce.push(H.substring(Y,Ae)),On(Ae+ge),fe&&(Kt(),Q))return gt();if($&&ne.length>=$)return gt(!0)}return vt();function Ke(xt){ne.push(xt),re=Y}function Bt(xt){var jt=0;return jt=xt!==-1&&(xt=H.substring(je+1,xt))&&xt.trim()===""?xt.length:jt}function vt(xt){return J||(xt===void 0&&(xt=H.substring(Y)),ce.push(xt),Y=ue,Ke(ce),fe&&Kt()),gt()}function On(xt){Y=xt,Ke(ce),ce=[],Ae=H.indexOf(T,Y)}function gt(xt){if(P.header&&!F&&ne.length&&!G){var jt=ne[0],pn=Object.create(null),Wo=new Set(jt);let ta=!1;for(let Cn=0;Cn<jt.length;Cn++){let kn=jt[Cn];if(pn[kn=E(P.transformHeader)?P.transformHeader(kn,Cn):kn]){let na,ru=pn[kn];for(;na=kn+"_"+ru,ru++,Wo.has(na););Wo.add(na),jt[Cn]=na,pn[kn]++,ta=!0,(q=q===null?{}:q)[na]=kn}else pn[kn]=1,jt[Cn]=kn;Wo.add(kn)}ta&&console.warn("Duplicate headers found and renamed."),G=!0}return{data:ne,errors:de,meta:{delimiter:C,linebreak:T,aborted:Q,truncated:!!xt,cursor:re+(F||0),renamedHeaders:q}}}function Kt(){N(gt()),ne=[],de=[]}},this.abort=function(){Q=!0},this.getCharIndex=function(){return Y}}function W(P){var C=P.data,T=l[C.workerId],j=!1;if(C.error)T.userError(C.error,C.file);else if(C.results&&C.results.data){var N={abort:function(){j=!0,A(C.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:O,resume:O};if(E(T.userStep)){for(var $=0;$<C.results.data.length&&(T.userStep({data:C.results.data[$],errors:C.results.errors,meta:C.results.meta},N),!j);$++);delete C.results}else E(T.userChunk)&&(T.userChunk(C.results,N,C.file),delete C.results)}C.finished&&!j&&A(C.workerId,C.results)}function A(P,C){var T=l[P];E(T.userComplete)&&T.userComplete(C),T.terminate(),delete l[P]}function O(){throw new Error("Not implemented.")}function w(P){if(typeof P!="object"||P===null)return P;var C,T=Array.isArray(P)?[]:{};for(C in P)T[C]=w(P[C]);return T}function _(P,C){return function(){P.apply(C,arguments)}}function E(P){return typeof P=="function"}return f.parse=function(P,C){var T=(C=C||{}).dynamicTyping||!1;if(E(T)&&(C.dynamicTypingFunction=T,T={}),C.dynamicTyping=T,C.transform=!!E(C.transform)&&C.transform,!C.worker||!f.WORKERS_SUPPORTED)return T=null,f.NODE_STREAM_INPUT,typeof P=="string"?(P=(j=>j.charCodeAt(0)!==65279?j:j.slice(1))(P),T=new(C.download?d:y)(C)):P.readable===!0&&E(P.read)&&E(P.on)?T=new x(C):(r.File&&P instanceof File||P instanceof Object)&&(T=new v(C)),T.stream(P);(T=(()=>{var j;return!!f.WORKERS_SUPPORTED&&(j=(()=>{var N=r.URL||r.webkitURL||null,$=n.toString();return f.BLOB_URL||(f.BLOB_URL=N.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",$,")();"],{type:"text/javascript"})))})(),(j=new r.Worker(j)).onmessage=W,j.id=c++,l[j.id]=j)})()).userStep=C.step,T.userChunk=C.chunk,T.userComplete=C.complete,T.userError=C.error,C.step=E(C.step),C.chunk=E(C.chunk),C.complete=E(C.complete),C.error=E(C.error),delete C.worker,T.postMessage({input:P,config:C,workerId:T.id})},f.unparse=function(P,C){var T=!1,j=!0,N=",",$=`\r
`,V='"',q=V+V,G=!1,K=null,L=!1,Y=((()=>{if(typeof C=="object"){if(typeof C.delimiter!="string"||f.BAD_DELIMITERS.filter(function(F){return C.delimiter.indexOf(F)!==-1}).length||(N=C.delimiter),typeof C.quotes!="boolean"&&typeof C.quotes!="function"&&!Array.isArray(C.quotes)||(T=C.quotes),typeof C.skipEmptyLines!="boolean"&&typeof C.skipEmptyLines!="string"||(G=C.skipEmptyLines),typeof C.newline=="string"&&($=C.newline),typeof C.quoteChar=="string"&&(V=C.quoteChar),typeof C.header=="boolean"&&(j=C.header),Array.isArray(C.columns)){if(C.columns.length===0)throw new Error("Option columns is empty");K=C.columns}C.escapeChar!==void 0&&(q=C.escapeChar+V),C.escapeFormulae instanceof RegExp?L=C.escapeFormulae:typeof C.escapeFormulae=="boolean"&&C.escapeFormulae&&(L=/^[=+\-@\t\r].*$/)}})(),new RegExp(b(V),"g"));if(typeof P=="string"&&(P=JSON.parse(P)),Array.isArray(P)){if(!P.length||Array.isArray(P[0]))return Q(null,P,G);if(typeof P[0]=="object")return Q(K||Object.keys(P[0]),P,G)}else if(typeof P=="object")return typeof P.data=="string"&&(P.data=JSON.parse(P.data)),Array.isArray(P.data)&&(P.fields||(P.fields=P.meta&&P.meta.fields||K),P.fields||(P.fields=Array.isArray(P.data[0])?P.fields:typeof P.data[0]=="object"?Object.keys(P.data[0]):[]),Array.isArray(P.data[0])||typeof P.data[0]=="object"||(P.data=[P.data])),Q(P.fields||[],P.data||[],G);throw new Error("Unable to serialize unrecognized input");function Q(F,J,ue){var he="",ge=(typeof F=="string"&&(F=JSON.parse(F)),typeof J=="string"&&(J=JSON.parse(J)),Array.isArray(F)&&0<F.length),ye=!Array.isArray(J[0]);if(ge&&j){for(var fe=0;fe<F.length;fe++)0<fe&&(he+=N),he+=H(F[fe],fe);0<J.length&&(he+=$)}for(var ne=0;ne<J.length;ne++){var de=(ge?F:J[ne]).length,ce=!1,re=ge?Object.keys(J[ne]).length===0:J[ne].length===0;if(ue&&!ge&&(ce=ue==="greedy"?J[ne].join("").trim()==="":J[ne].length===1&&J[ne][0].length===0),ue==="greedy"&&ge){for(var Re=[],Pe=0;Pe<de;Pe++){var Ce=ye?F[Pe]:Pe;Re.push(J[ne][Ce])}ce=Re.join("").trim()===""}if(!ce){for(var Ae=0;Ae<de;Ae++){0<Ae&&!re&&(he+=N);var Fe=ge&&ye?F[Ae]:Ae;he+=H(J[ne][Fe],Ae)}ne<J.length-1&&(!ue||0<de&&!re)&&(he+=$)}}return he}function H(F,J){var ue,he;return F==null?"":F.constructor===Date?JSON.stringify(F).slice(1,25):(he=!1,L&&typeof F=="string"&&L.test(F)&&(F="'"+F,he=!0),ue=F.toString().replace(Y,q),(he=he||T===!0||typeof T=="function"&&T(F,J)||Array.isArray(T)&&T[J]||((ge,ye)=>{for(var fe=0;fe<ye.length;fe++)if(-1<ge.indexOf(ye[fe]))return!0;return!1})(ue,f.BAD_DELIMITERS)||-1<ue.indexOf(N)||ue.charAt(0)===" "||ue.charAt(ue.length-1)===" ")?V+ue+V:ue)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!i&&!!r.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=S,f.ParserHandle=I,f.NetworkStreamer=d,f.FileStreamer=v,f.StringStreamer=y,f.ReadableStreamStreamer=x,r.jQuery&&((a=r.jQuery).fn.parse=function(P){var C=P.config||{},T=[];return this.each(function($){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var V=0;V<this.files.length;V++)T.push({file:this.files[V],inputElem:this,instanceConfig:a.extend({},C)})}),j(),this;function j(){if(T.length===0)E(P.complete)&&P.complete();else{var $,V,q,G,K=T[0];if(E(P.before)){var L=P.before(K.file,K.inputElem);if(typeof L=="object"){if(L.action==="abort")return $="AbortError",V=K.file,q=K.inputElem,G=L.reason,void(E(P.error)&&P.error({name:$},V,q,G));if(L.action==="skip")return void N();typeof L.config=="object"&&(K.instanceConfig=a.extend(K.instanceConfig,L.config))}else if(L==="skip")return void N()}var Y=K.instanceConfig.complete;K.instanceConfig.complete=function(Q){E(Y)&&Y(Q,K.file,K.inputElem),N()},f.parse(K.file,K.instanceConfig)}}function N(){T.splice(0,1),j()}}),s&&(r.onmessage=function(P){P=P.data,f.WORKER_ID===void 0&&P&&(f.WORKER_ID=P.workerId),typeof P.input=="string"?r.postMessage({workerId:f.WORKER_ID,results:f.parse(P.input,P.config),finished:!0}):(r.File&&P.input instanceof File||P.input instanceof Object)&&(P=f.parse(P.input,P.config))&&r.postMessage({workerId:f.WORKER_ID,results:P,finished:!0})}),(d.prototype=Object.create(h.prototype)).constructor=d,(v.prototype=Object.create(h.prototype)).constructor=v,(y.prototype=Object.create(y.prototype)).constructor=y,(x.prototype=Object.create(h.prototype)).constructor=x,f})})(_p)),_p.exports}var bk=yk();const hI=Xe(bk);function mI(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function T3(...e){return t=>{let n=!1;const r=e.map(a=>{const i=mI(a,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():mI(e[a],null)}}}}function Op(...e){return X.useCallback(T3(...e),e)}var fs=X.forwardRef((e,t)=>{const{children:n,...r}=e,a=X.Children.toArray(n),i=a.find(Bk);if(i){const s=i.props.children,l=a.map(c=>c===i?X.Children.count(s)>1?X.Children.only(null):X.isValidElement(s)?s.props.children:null:c);return M.jsx(Sv,{...r,ref:t,children:X.isValidElement(s)?X.cloneElement(s,void 0,l):null})}return M.jsx(Sv,{...r,ref:t,children:n})});fs.displayName="Slot";var Sv=X.forwardRef((e,t)=>{const{children:n,...r}=e;if(X.isValidElement(n)){const a=wk(n),i=xk(r,n.props);return n.type!==X.Fragment&&(i.ref=t?T3(t,a):a),X.cloneElement(n,i)}return X.Children.count(n)>1?X.Children.only(null):null});Sv.displayName="SlotClone";var Ik=({children:e})=>M.jsx(M.Fragment,{children:e});function Bk(e){return X.isValidElement(e)&&e.type===Ik}function xk(e,t){const n={...t};for(const r in t){const a=e[r],i=t[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...l)=>{i(...l),a(...l)}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function wk(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function R3(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=R3(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function He(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=R3(e))&&(r&&(r+=" "),r+=t);return r}const vI=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,gI=He,Pk=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return gI(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:i}=t,s=Object.keys(a).map(f=>{const h=n==null?void 0:n[f],d=i==null?void 0:i[f];if(h===null)return null;const v=vI(h)||vI(d);return a[f][v]}),l=n&&Object.entries(n).reduce((f,h)=>{let[d,v]=h;return v===void 0||(f[d]=v),f},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((f,h)=>{let{class:d,className:v,...y}=h;return Object.entries(y).every(x=>{let[I,b]=x;return Array.isArray(b)?b.includes({...i,...l}[I]):{...i,...l}[I]===b})?[...f,d,v]:f},[]);return gI(e,s,c,n==null?void 0:n.class,n==null?void 0:n.className)},ly="-",Sk=e=>{const t=Ak(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const l=s.split(ly);return l[0]===""&&l.length!==1&&l.shift(),H3(l,t)||Wk(s)},getConflictingClassGroupIds:(s,l)=>{const c=n[s]||[];return l&&r[s]?[...c,...r[s]]:c}}},H3=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?H3(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const i=e.join(ly);return(s=t.validators.find(({validator:l})=>l(i)))==null?void 0:s.classGroupId},yI=/^\[(.+)\]$/,Wk=e=>{if(yI.test(e)){const t=yI.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Ak=e=>{const{theme:t,classGroups:n}=e,r={nextPart:new Map,validators:[]};for(const a in n)Wv(n[a],r,a,t);return r},Wv=(e,t,n,r)=>{e.forEach(a=>{if(typeof a=="string"){const i=a===""?t:bI(t,a);i.classGroupId=n;return}if(typeof a=="function"){if(_k(a)){Wv(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([i,s])=>{Wv(s,bI(t,i),n,r)})})},bI=(e,t)=>{let n=e;return t.split(ly).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},_k=e=>e.isThemeGetter,Mk=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const a=(i,s)=>{n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return a(i,s),s},set(i,s){n.has(i)?n.set(i,s):a(i,s)}}},Av="!",_v=":",Ok=_v.length,Ck=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=a=>{const i=[];let s=0,l=0,c=0,f;for(let x=0;x<a.length;x++){let I=a[x];if(s===0&&l===0){if(I===_v){i.push(a.slice(c,x)),c=x+Ok;continue}if(I==="/"){f=x;continue}}I==="["?s++:I==="]"?s--:I==="("?l++:I===")"&&l--}const h=i.length===0?a:a.substring(c),d=kk(h),v=d!==h,y=f&&f>c?f-c:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:d,maybePostfixModifierPosition:y}};if(t){const a=t+_v,i=r;r=s=>s.startsWith(a)?i(s.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:s,maybePostfixModifierPosition:void 0}}if(n){const a=r;r=i=>n({className:i,parseClassName:a})}return r},kk=e=>e.endsWith(Av)?e.substring(0,e.length-1):e.startsWith(Av)?e.substring(1):e,Ek=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let i=[];return r.forEach(s=>{s[0]==="["||t[s]?(a.push(...i.sort(),s),i=[]):i.push(s)}),a.push(...i.sort()),a}},Nk=e=>({cache:Mk(e.cacheSize),parseClassName:Ck(e),sortModifiers:Ek(e),...Sk(e)}),Tk=/\s+/,Rk=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=t,s=[],l=e.trim().split(Tk);let c="";for(let f=l.length-1;f>=0;f-=1){const h=l[f],{isExternal:d,modifiers:v,hasImportantModifier:y,baseClassName:x,maybePostfixModifierPosition:I}=n(h);if(d){c=h+(c.length>0?" "+c:c);continue}let b=!!I,S=r(b?x.substring(0,I):x);if(!S){if(!b){c=h+(c.length>0?" "+c:c);continue}if(S=r(x),!S){c=h+(c.length>0?" "+c:c);continue}b=!1}const W=i(v).join(":"),A=y?W+Av:W,O=A+S;if(s.includes(O))continue;s.push(O);const w=a(S,b);for(let _=0;_<w.length;++_){const E=w[_];s.push(A+E)}c=h+(c.length>0?" "+c:c)}return c};function Hk(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=j3(t))&&(r&&(r+=" "),r+=n);return r}const j3=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=j3(e[r]))&&(n&&(n+=" "),n+=t);return n};function jk(e,...t){let n,r,a,i=s;function s(c){const f=t.reduce((h,d)=>d(h),e());return n=Nk(f),r=n.cache.get,a=n.cache.set,i=l,l(c)}function l(c){const f=r(c);if(f)return f;const h=Rk(c,n);return a(c,h),h}return function(){return i(Hk.apply(null,arguments))}}const Nt=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},D3=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,$3=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Dk=/^\d+\/\d+$/,$k=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Lk=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Fk=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,qk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,zk=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xo=e=>Dk.test(e),$e=e=>!!e&&!Number.isNaN(Number(e)),xa=e=>!!e&&Number.isInteger(Number(e)),bf=e=>e.endsWith("%")&&$e(e.slice(0,-1)),Rr=e=>$k.test(e),Uk=()=>!0,Vk=e=>Lk.test(e)&&!Fk.test(e),L3=()=>!1,Gk=e=>qk.test(e),Kk=e=>zk.test(e),Qk=e=>!xe(e)&&!we(e),Yk=e=>zi(e,z3,L3),xe=e=>D3.test(e),to=e=>zi(e,U3,Vk),If=e=>zi(e,tE,$e),II=e=>zi(e,F3,L3),Xk=e=>zi(e,q3,Kk),fp=e=>zi(e,V3,Gk),we=e=>$3.test(e),Lu=e=>Ui(e,U3),Zk=e=>Ui(e,nE),BI=e=>Ui(e,F3),Jk=e=>Ui(e,z3),eE=e=>Ui(e,q3),dp=e=>Ui(e,V3,!0),zi=(e,t,n)=>{const r=D3.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Ui=(e,t,n=!1)=>{const r=$3.exec(e);return r?r[1]?t(r[1]):n:!1},F3=e=>e==="position"||e==="percentage",q3=e=>e==="image"||e==="url",z3=e=>e==="length"||e==="size"||e==="bg-size",U3=e=>e==="length",tE=e=>e==="number",nE=e=>e==="family-name",V3=e=>e==="shadow",rE=()=>{const e=Nt("color"),t=Nt("font"),n=Nt("text"),r=Nt("font-weight"),a=Nt("tracking"),i=Nt("leading"),s=Nt("breakpoint"),l=Nt("container"),c=Nt("spacing"),f=Nt("radius"),h=Nt("shadow"),d=Nt("inset-shadow"),v=Nt("text-shadow"),y=Nt("drop-shadow"),x=Nt("blur"),I=Nt("perspective"),b=Nt("aspect"),S=Nt("ease"),W=Nt("animate"),A=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...O(),we,xe],_=()=>["auto","hidden","clip","visible","scroll"],E=()=>["auto","contain","none"],P=()=>[we,xe,c],C=()=>[Xo,"full","auto",...P()],T=()=>[xa,"none","subgrid",we,xe],j=()=>["auto",{span:["full",xa,we,xe]},xa,we,xe],N=()=>[xa,"auto",we,xe],$=()=>["auto","min","max","fr",we,xe],V=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],q=()=>["start","end","center","stretch","center-safe","end-safe"],G=()=>["auto",...P()],K=()=>[Xo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],L=()=>[e,we,xe],Y=()=>[...O(),BI,II,{position:[we,xe]}],Q=()=>["no-repeat",{repeat:["","x","y","space","round"]}],H=()=>["auto","cover","contain",Jk,Yk,{size:[we,xe]}],F=()=>[bf,Lu,to],J=()=>["","none","full",f,we,xe],ue=()=>["",$e,Lu,to],he=()=>["solid","dashed","dotted","double"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ye=()=>[$e,bf,BI,II],fe=()=>["","none",x,we,xe],ne=()=>["none",$e,we,xe],de=()=>["none",$e,we,xe],ce=()=>[$e,we,xe],re=()=>[Xo,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Rr],breakpoint:[Rr],color:[Uk],container:[Rr],"drop-shadow":[Rr],ease:["in","out","in-out"],font:[Qk],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Rr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Rr],shadow:[Rr],spacing:["px",$e],text:[Rr],"text-shadow":[Rr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Xo,xe,we,b]}],container:["container"],columns:[{columns:[$e,xe,we,l]}],"break-after":[{"break-after":A()}],"break-before":[{"break-before":A()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[xa,"auto",we,xe]}],basis:[{basis:[Xo,"full","auto",l,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,Xo,"auto","initial","none",xe]}],grow:[{grow:["",$e,we,xe]}],shrink:[{shrink:["",$e,we,xe]}],order:[{order:[xa,"first","last","none",we,xe]}],"grid-cols":[{"grid-cols":T()}],"col-start-end":[{col:j()}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":T()}],"row-start-end":[{row:j()}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":$()}],"auto-rows":[{"auto-rows":$()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...V(),"normal"]}],"justify-items":[{"justify-items":[...q(),"normal"]}],"justify-self":[{"justify-self":["auto",...q()]}],"align-content":[{content:["normal",...V()]}],"align-items":[{items:[...q(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...q(),{baseline:["","last"]}]}],"place-content":[{"place-content":V()}],"place-items":[{"place-items":[...q(),"baseline"]}],"place-self":[{"place-self":["auto",...q()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:G()}],mx:[{mx:G()}],my:[{my:G()}],ms:[{ms:G()}],me:[{me:G()}],mt:[{mt:G()}],mr:[{mr:G()}],mb:[{mb:G()}],ml:[{ml:G()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:K()}],w:[{w:[l,"screen",...K()]}],"min-w":[{"min-w":[l,"screen","none",...K()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[s]},...K()]}],h:[{h:["screen",...K()]}],"min-h":[{"min-h":["screen","none",...K()]}],"max-h":[{"max-h":["screen",...K()]}],"font-size":[{text:["base",n,Lu,to]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,we,If]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",bf,xe]}],"font-family":[{font:[Zk,xe,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,we,xe]}],"line-clamp":[{"line-clamp":[$e,"none",we,If]}],leading:[{leading:[i,...P()]}],"list-image":[{"list-image":["none",we,xe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",we,xe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:L()}],"text-color":[{text:L()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",we,to]}],"text-decoration-color":[{decoration:L()}],"underline-offset":[{"underline-offset":[$e,"auto",we,xe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we,xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we,xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Y()}],"bg-repeat":[{bg:Q()}],"bg-size":[{bg:H()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xa,we,xe],radial:["",we,xe],conic:[xa,we,xe]},eE,Xk]}],"bg-color":[{bg:L()}],"gradient-from-pos":[{from:F()}],"gradient-via-pos":[{via:F()}],"gradient-to-pos":[{to:F()}],"gradient-from":[{from:L()}],"gradient-via":[{via:L()}],"gradient-to":[{to:L()}],rounded:[{rounded:J()}],"rounded-s":[{"rounded-s":J()}],"rounded-e":[{"rounded-e":J()}],"rounded-t":[{"rounded-t":J()}],"rounded-r":[{"rounded-r":J()}],"rounded-b":[{"rounded-b":J()}],"rounded-l":[{"rounded-l":J()}],"rounded-ss":[{"rounded-ss":J()}],"rounded-se":[{"rounded-se":J()}],"rounded-ee":[{"rounded-ee":J()}],"rounded-es":[{"rounded-es":J()}],"rounded-tl":[{"rounded-tl":J()}],"rounded-tr":[{"rounded-tr":J()}],"rounded-br":[{"rounded-br":J()}],"rounded-bl":[{"rounded-bl":J()}],"border-w":[{border:ue()}],"border-w-x":[{"border-x":ue()}],"border-w-y":[{"border-y":ue()}],"border-w-s":[{"border-s":ue()}],"border-w-e":[{"border-e":ue()}],"border-w-t":[{"border-t":ue()}],"border-w-r":[{"border-r":ue()}],"border-w-b":[{"border-b":ue()}],"border-w-l":[{"border-l":ue()}],"divide-x":[{"divide-x":ue()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ue()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...he(),"hidden","none"]}],"divide-style":[{divide:[...he(),"hidden","none"]}],"border-color":[{border:L()}],"border-color-x":[{"border-x":L()}],"border-color-y":[{"border-y":L()}],"border-color-s":[{"border-s":L()}],"border-color-e":[{"border-e":L()}],"border-color-t":[{"border-t":L()}],"border-color-r":[{"border-r":L()}],"border-color-b":[{"border-b":L()}],"border-color-l":[{"border-l":L()}],"divide-color":[{divide:L()}],"outline-style":[{outline:[...he(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,we,xe]}],"outline-w":[{outline:["",$e,Lu,to]}],"outline-color":[{outline:L()}],shadow:[{shadow:["","none",h,dp,fp]}],"shadow-color":[{shadow:L()}],"inset-shadow":[{"inset-shadow":["none",d,dp,fp]}],"inset-shadow-color":[{"inset-shadow":L()}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:L()}],"ring-offset-w":[{"ring-offset":[$e,to]}],"ring-offset-color":[{"ring-offset":L()}],"inset-ring-w":[{"inset-ring":ue()}],"inset-ring-color":[{"inset-ring":L()}],"text-shadow":[{"text-shadow":["none",v,dp,fp]}],"text-shadow-color":[{"text-shadow":L()}],opacity:[{opacity:[$e,we,xe]}],"mix-blend":[{"mix-blend":[...ge(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ge()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":ye()}],"mask-image-linear-to-pos":[{"mask-linear-to":ye()}],"mask-image-linear-from-color":[{"mask-linear-from":L()}],"mask-image-linear-to-color":[{"mask-linear-to":L()}],"mask-image-t-from-pos":[{"mask-t-from":ye()}],"mask-image-t-to-pos":[{"mask-t-to":ye()}],"mask-image-t-from-color":[{"mask-t-from":L()}],"mask-image-t-to-color":[{"mask-t-to":L()}],"mask-image-r-from-pos":[{"mask-r-from":ye()}],"mask-image-r-to-pos":[{"mask-r-to":ye()}],"mask-image-r-from-color":[{"mask-r-from":L()}],"mask-image-r-to-color":[{"mask-r-to":L()}],"mask-image-b-from-pos":[{"mask-b-from":ye()}],"mask-image-b-to-pos":[{"mask-b-to":ye()}],"mask-image-b-from-color":[{"mask-b-from":L()}],"mask-image-b-to-color":[{"mask-b-to":L()}],"mask-image-l-from-pos":[{"mask-l-from":ye()}],"mask-image-l-to-pos":[{"mask-l-to":ye()}],"mask-image-l-from-color":[{"mask-l-from":L()}],"mask-image-l-to-color":[{"mask-l-to":L()}],"mask-image-x-from-pos":[{"mask-x-from":ye()}],"mask-image-x-to-pos":[{"mask-x-to":ye()}],"mask-image-x-from-color":[{"mask-x-from":L()}],"mask-image-x-to-color":[{"mask-x-to":L()}],"mask-image-y-from-pos":[{"mask-y-from":ye()}],"mask-image-y-to-pos":[{"mask-y-to":ye()}],"mask-image-y-from-color":[{"mask-y-from":L()}],"mask-image-y-to-color":[{"mask-y-to":L()}],"mask-image-radial":[{"mask-radial":[we,xe]}],"mask-image-radial-from-pos":[{"mask-radial-from":ye()}],"mask-image-radial-to-pos":[{"mask-radial-to":ye()}],"mask-image-radial-from-color":[{"mask-radial-from":L()}],"mask-image-radial-to-color":[{"mask-radial-to":L()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":O()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":ye()}],"mask-image-conic-to-pos":[{"mask-conic-to":ye()}],"mask-image-conic-from-color":[{"mask-conic-from":L()}],"mask-image-conic-to-color":[{"mask-conic-to":L()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Y()}],"mask-repeat":[{mask:Q()}],"mask-size":[{mask:H()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",we,xe]}],filter:[{filter:["","none",we,xe]}],blur:[{blur:fe()}],brightness:[{brightness:[$e,we,xe]}],contrast:[{contrast:[$e,we,xe]}],"drop-shadow":[{"drop-shadow":["","none",y,dp,fp]}],"drop-shadow-color":[{"drop-shadow":L()}],grayscale:[{grayscale:["",$e,we,xe]}],"hue-rotate":[{"hue-rotate":[$e,we,xe]}],invert:[{invert:["",$e,we,xe]}],saturate:[{saturate:[$e,we,xe]}],sepia:[{sepia:["",$e,we,xe]}],"backdrop-filter":[{"backdrop-filter":["","none",we,xe]}],"backdrop-blur":[{"backdrop-blur":fe()}],"backdrop-brightness":[{"backdrop-brightness":[$e,we,xe]}],"backdrop-contrast":[{"backdrop-contrast":[$e,we,xe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,we,xe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,we,xe]}],"backdrop-invert":[{"backdrop-invert":["",$e,we,xe]}],"backdrop-opacity":[{"backdrop-opacity":[$e,we,xe]}],"backdrop-saturate":[{"backdrop-saturate":[$e,we,xe]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,we,xe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",we,xe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",we,xe]}],ease:[{ease:["linear","initial",S,we,xe]}],delay:[{delay:[$e,we,xe]}],animate:[{animate:["none",W,we,xe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,we,xe]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:ne()}],"rotate-x":[{"rotate-x":ne()}],"rotate-y":[{"rotate-y":ne()}],"rotate-z":[{"rotate-z":ne()}],scale:[{scale:de()}],"scale-x":[{"scale-x":de()}],"scale-y":[{"scale-y":de()}],"scale-z":[{"scale-z":de()}],"scale-3d":["scale-3d"],skew:[{skew:ce()}],"skew-x":[{"skew-x":ce()}],"skew-y":[{"skew-y":ce()}],transform:[{transform:[we,xe,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:re()}],"translate-x":[{"translate-x":re()}],"translate-y":[{"translate-y":re()}],"translate-z":[{"translate-z":re()}],"translate-none":["translate-none"],accent:[{accent:L()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:L()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we,xe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we,xe]}],fill:[{fill:["none",...L()]}],"stroke-w":[{stroke:[$e,Lu,to,If]}],stroke:[{stroke:["none",...L()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},aE=jk(rE);function ln(...e){return aE(He(e))}const oE=Pk("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function xI({className:e,variant:t,size:n,asChild:r=!1,...a}){const i=r?fs:"button";return M.jsx(i,{"data-slot":"button",className:ln(oE({variant:t,size:n,className:e})),...a})}function zn({className:e,...t}){return M.jsx("div",{"data-slot":"card",className:ln("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}function jc({className:e,...t}){return M.jsx("div",{"data-slot":"card-header",className:ln("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function Dc({className:e,...t}){return M.jsx("h4",{"data-slot":"card-title",className:ln("leading-none",e),...t})}function Un({className:e,...t}){return M.jsx("div",{"data-slot":"card-content",className:ln("px-6 [&:last-child]:pb-6",e),...t})}function zr(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function py(e,t=[]){let n=[];function r(i,s){const l=X.createContext(s),c=n.length;n=[...n,s];const f=d=>{var S;const{scope:v,children:y,...x}=d,I=((S=v==null?void 0:v[e])==null?void 0:S[c])||l,b=X.useMemo(()=>x,Object.values(x));return M.jsx(I.Provider,{value:b,children:y})};f.displayName=i+"Provider";function h(d,v){var I;const y=((I=v==null?void 0:v[e])==null?void 0:I[c])||l,x=X.useContext(y);if(x)return x;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${i}\``)}return[f,h]}const a=()=>{const i=n.map(s=>X.createContext(s));return function(l){const c=(l==null?void 0:l[e])||i;return X.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return a.scopeName=e,[r,iE(a,...t)]}function iE(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const s=r.reduce((l,{useScope:c,scopeName:f})=>{const d=c(i)[`__scope${f}`];return{...l,...d}},{});return X.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function uE(e){const t=e+"CollectionProvider",[n,r]=py(t),[a,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=y=>{const{scope:x,children:I}=y,b=R.useRef(null),S=R.useRef(new Map).current;return M.jsx(a,{scope:x,itemMap:S,collectionRef:b,children:I})};s.displayName=t;const l=e+"CollectionSlot",c=R.forwardRef((y,x)=>{const{scope:I,children:b}=y,S=i(l,I),W=Op(x,S.collectionRef);return M.jsx(fs,{ref:W,children:b})});c.displayName=l;const f=e+"CollectionItemSlot",h="data-radix-collection-item",d=R.forwardRef((y,x)=>{const{scope:I,children:b,...S}=y,W=R.useRef(null),A=Op(x,W),O=i(f,I);return R.useEffect(()=>(O.itemMap.set(W,{ref:W,...S}),()=>void O.itemMap.delete(W))),M.jsx(fs,{[h]:"",ref:A,children:b})});d.displayName=f;function v(y){const x=i(e+"CollectionConsumer",y);return R.useCallback(()=>{const b=x.collectionRef.current;if(!b)return[];const S=Array.from(b.querySelectorAll(`[${h}]`));return Array.from(x.itemMap.values()).sort((O,w)=>S.indexOf(O.ref.current)-S.indexOf(w.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:s,Slot:c,ItemSlot:d},v,r]}var Mv=globalThis!=null&&globalThis.document?X.useLayoutEffect:()=>{},sE=vk.useId||(()=>{}),lE=0;function G3(e){const[t,n]=X.useState(sE());return Mv(()=>{n(r=>r??String(lE++))},[e]),e||(t?`radix-${t}`:"")}N3();var pE=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Vi=pE.reduce((e,t)=>{const n=X.forwardRef((r,a)=>{const{asChild:i,...s}=r,l=i?fs:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),M.jsx(l,{...s,ref:a})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function cy(e){const t=X.useRef(e);return X.useEffect(()=>{t.current=e}),X.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function K3({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,a]=cE({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:r,l=cy(n),c=X.useCallback(f=>{if(i){const d=typeof f=="function"?f(e):f;d!==e&&l(d)}else a(f)},[i,e,a,l]);return[s,c]}function cE({defaultProp:e,onChange:t}){const n=X.useState(e),[r]=n,a=X.useRef(r),i=cy(t);return X.useEffect(()=>{a.current!==r&&(i(r),a.current=r)},[r,a,i]),n}var fE=X.createContext(void 0);function Q3(e){const t=X.useContext(fE);return e||t||"ltr"}var Bf="rovingFocusGroup.onEntryFocus",dE={bubbles:!1,cancelable:!0},$c="RovingFocusGroup",[Ov,Y3,hE]=uE($c),[mE,X3]=py($c,[hE]),[vE,gE]=mE($c),Z3=X.forwardRef((e,t)=>M.jsx(Ov.Provider,{scope:e.__scopeRovingFocusGroup,children:M.jsx(Ov.Slot,{scope:e.__scopeRovingFocusGroup,children:M.jsx(yE,{...e,ref:t})})}));Z3.displayName=$c;var yE=X.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:a=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:c,onEntryFocus:f,preventScrollOnEntryFocus:h=!1,...d}=e,v=X.useRef(null),y=Op(t,v),x=Q3(i),[I=null,b]=K3({prop:s,defaultProp:l,onChange:c}),[S,W]=X.useState(!1),A=cy(f),O=Y3(n),w=X.useRef(!1),[_,E]=X.useState(0);return X.useEffect(()=>{const P=v.current;if(P)return P.addEventListener(Bf,A),()=>P.removeEventListener(Bf,A)},[A]),M.jsx(vE,{scope:n,orientation:r,dir:x,loop:a,currentTabStopId:I,onItemFocus:X.useCallback(P=>b(P),[b]),onItemShiftTab:X.useCallback(()=>W(!0),[]),onFocusableItemAdd:X.useCallback(()=>E(P=>P+1),[]),onFocusableItemRemove:X.useCallback(()=>E(P=>P-1),[]),children:M.jsx(Vi.div,{tabIndex:S||_===0?-1:0,"data-orientation":r,...d,ref:y,style:{outline:"none",...e.style},onMouseDown:zr(e.onMouseDown,()=>{w.current=!0}),onFocus:zr(e.onFocus,P=>{const C=!w.current;if(P.target===P.currentTarget&&C&&!S){const T=new CustomEvent(Bf,dE);if(P.currentTarget.dispatchEvent(T),!T.defaultPrevented){const j=O().filter(G=>G.focusable),N=j.find(G=>G.active),$=j.find(G=>G.id===I),q=[N,$,...j].filter(Boolean).map(G=>G.ref.current);tW(q,h)}}w.current=!1}),onBlur:zr(e.onBlur,()=>W(!1))})})}),J3="RovingFocusGroupItem",eW=X.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:a=!1,tabStopId:i,...s}=e,l=G3(),c=i||l,f=gE(J3,n),h=f.currentTabStopId===c,d=Y3(n),{onFocusableItemAdd:v,onFocusableItemRemove:y}=f;return X.useEffect(()=>{if(r)return v(),()=>y()},[r,v,y]),M.jsx(Ov.ItemSlot,{scope:n,id:c,focusable:r,active:a,children:M.jsx(Vi.span,{tabIndex:h?0:-1,"data-orientation":f.orientation,...s,ref:t,onMouseDown:zr(e.onMouseDown,x=>{r?f.onItemFocus(c):x.preventDefault()}),onFocus:zr(e.onFocus,()=>f.onItemFocus(c)),onKeyDown:zr(e.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){f.onItemShiftTab();return}if(x.target!==x.currentTarget)return;const I=BE(x,f.orientation,f.dir);if(I!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let S=d().filter(W=>W.focusable).map(W=>W.ref.current);if(I==="last")S.reverse();else if(I==="prev"||I==="next"){I==="prev"&&S.reverse();const W=S.indexOf(x.currentTarget);S=f.loop?xE(S,W+1):S.slice(W+1)}setTimeout(()=>tW(S))}})})})});eW.displayName=J3;var bE={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function IE(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function BE(e,t,n){const r=IE(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return bE[r]}function tW(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function xE(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var wE=Z3,PE=eW;function SE(e,t){return X.useReducer((n,r)=>t[n][r]??n,e)}var nW=e=>{const{present:t,children:n}=e,r=WE(t),a=typeof n=="function"?n({present:r.isPresent}):X.Children.only(n),i=Op(r.ref,AE(a));return typeof n=="function"||r.isPresent?X.cloneElement(a,{ref:i}):null};nW.displayName="Presence";function WE(e){const[t,n]=X.useState(),r=X.useRef({}),a=X.useRef(e),i=X.useRef("none"),s=e?"mounted":"unmounted",[l,c]=SE(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return X.useEffect(()=>{const f=hp(r.current);i.current=l==="mounted"?f:"none"},[l]),Mv(()=>{const f=r.current,h=a.current;if(h!==e){const v=i.current,y=hp(f);e?c("MOUNT"):y==="none"||(f==null?void 0:f.display)==="none"?c("UNMOUNT"):c(h&&v!==y?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,c]),Mv(()=>{if(t){let f;const h=t.ownerDocument.defaultView??window,d=y=>{const I=hp(r.current).includes(y.animationName);if(y.target===t&&I&&(c("ANIMATION_END"),!a.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",f=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},v=y=>{y.target===t&&(i.current=hp(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{h.clearTimeout(f),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:X.useCallback(f=>{f&&(r.current=getComputedStyle(f)),n(f)},[])}}function hp(e){return(e==null?void 0:e.animationName)||"none"}function AE(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var fy="Tabs",[_E]=py(fy,[X3]),rW=X3(),[ME,dy]=_E(fy),aW=X.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:a,defaultValue:i,orientation:s="horizontal",dir:l,activationMode:c="automatic",...f}=e,h=Q3(l),[d,v]=K3({prop:r,onChange:a,defaultProp:i});return M.jsx(ME,{scope:n,baseId:G3(),value:d,onValueChange:v,orientation:s,dir:h,activationMode:c,children:M.jsx(Vi.div,{dir:h,"data-orientation":s,...f,ref:t})})});aW.displayName=fy;var oW="TabsList",iW=X.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...a}=e,i=dy(oW,n),s=rW(n);return M.jsx(wE,{asChild:!0,...s,orientation:i.orientation,dir:i.dir,loop:r,children:M.jsx(Vi.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:t})})});iW.displayName=oW;var uW="TabsTrigger",sW=X.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:a=!1,...i}=e,s=dy(uW,n),l=rW(n),c=cW(s.baseId,r),f=fW(s.baseId,r),h=r===s.value;return M.jsx(PE,{asChild:!0,...l,focusable:!a,active:h,children:M.jsx(Vi.button,{type:"button",role:"tab","aria-selected":h,"aria-controls":f,"data-state":h?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...i,ref:t,onMouseDown:zr(e.onMouseDown,d=>{!a&&d.button===0&&d.ctrlKey===!1?s.onValueChange(r):d.preventDefault()}),onKeyDown:zr(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&s.onValueChange(r)}),onFocus:zr(e.onFocus,()=>{const d=s.activationMode!=="manual";!h&&!a&&d&&s.onValueChange(r)})})})});sW.displayName=uW;var lW="TabsContent",pW=X.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:a,children:i,...s}=e,l=dy(lW,n),c=cW(l.baseId,r),f=fW(l.baseId,r),h=r===l.value,d=X.useRef(h);return X.useEffect(()=>{const v=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(v)},[]),M.jsx(nW,{present:a||h,children:({present:v})=>M.jsx(Vi.div,{"data-state":h?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":c,hidden:!v,id:f,tabIndex:0,...s,ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0},children:v&&i})})});pW.displayName=lW;function cW(e,t){return`${e}-trigger-${t}`}function fW(e,t){return`${e}-content-${t}`}var OE=aW,CE=iW,kE=sW,EE=pW;function NE({className:e,...t}){return M.jsx(OE,{"data-slot":"tabs",className:ln("flex flex-col gap-2",e),...t})}function TE({className:e,...t}){return M.jsx(CE,{"data-slot":"tabs-list",className:ln("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",e),...t})}function wI({className:e,...t}){return M.jsx(kE,{"data-slot":"tabs-trigger",className:ln("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function PI({className:e,...t}){return M.jsx(EE,{"data-slot":"tabs-content",className:ln("flex-1 outline-none",e),...t})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),HE=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),SI=e=>{const t=HE(e);return t.charAt(0).toUpperCase()+t.slice(1)},dW=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=X.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:s,...l},c)=>X.createElement("svg",{ref:c,...jE,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:dW("lucide",a),...l},[...s.map(([f,h])=>X.createElement(f,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=(e,t)=>{const n=X.forwardRef(({className:r,...a},i)=>X.createElement(DE,{ref:i,iconNode:t,className:dW(`lucide-${RE(SI(e))}`,`lucide-${e}`,r),...a}));return n.displayName=SI(e),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],LE=pr("arrow-up-down",$E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],qE=pr("bot",FE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],UE=pr("chevron-down",zE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],WI=pr("chevron-left",VE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Cv=pr("chevron-right",GE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],QE=pr("circle-plus",KE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],XE=pr("download",YE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],JE=pr("trending-up",ZE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],tN=pr("triangle-alert",eN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],rN=pr("users",nN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],oN=pr("x",aN);function Ct(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function St(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Cp(e,t){const n=Ct(e);return isNaN(t)?St(e,NaN):(t&&n.setDate(n.getDate()+t),n)}const hW=6048e5,iN=864e5,uN=6e4,sN=36e5,lN=1e3;let pN={};function Gi(){return pN}function Ea(e,t){var l,c,f,h;const n=Gi(),r=(t==null?void 0:t.weekStartsOn)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.weekStartsOn)??0,a=Ct(e),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function di(e){return Ea(e,{weekStartsOn:1})}function mW(e){const t=Ct(e),n=t.getFullYear(),r=St(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=di(r),i=St(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=di(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function AI(e){const t=Ct(e);return t.setHours(0,0,0,0),t}function kp(e){const t=Ct(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function cN(e,t){const n=AI(e),r=AI(t),a=+n-kp(n),i=+r-kp(r);return Math.round((a-i)/iN)}function fN(e){const t=mW(e),n=St(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),di(n)}function dN(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function hN(e){if(!dN(e)&&typeof e!="number")return!1;const t=Ct(e);return!isNaN(Number(t))}function mN(e){const t=Ct(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function vN(e){const t=Ct(e);return t.setDate(1),t.setHours(0,0,0,0),t}function gN(e){const t=Ct(e),n=St(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const yN={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},bN=(e,t,n)=>{let r;const a=yN[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function xf(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const IN={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},BN={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},xN={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},wN={date:xf({formats:IN,defaultWidth:"full"}),time:xf({formats:BN,defaultWidth:"full"}),dateTime:xf({formats:xN,defaultWidth:"full"})},PN={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},SN=(e,t,n,r)=>PN[e];function Fu(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):s;a=e.formattingValues[l]||e.formattingValues[s]}else{const s=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[l]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}const WN={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},AN={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},_N={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},MN={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ON={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},CN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},kN=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},EN={ordinalNumber:kN,era:Fu({values:WN,defaultWidth:"wide"}),quarter:Fu({values:AN,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Fu({values:_N,defaultWidth:"wide"}),day:Fu({values:MN,defaultWidth:"wide"}),dayPeriod:Fu({values:ON,defaultWidth:"wide",formattingValues:CN,defaultFormattingWidth:"wide"})};function qu(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const s=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(l)?TN(l,d=>d.test(s)):NN(l,d=>d.test(s));let f;f=e.valueCallback?e.valueCallback(c):c,f=n.valueCallback?n.valueCallback(f):f;const h=t.slice(s.length);return{value:f,rest:h}}}function NN(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function TN(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function RN(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const l=t.slice(a.length);return{value:s,rest:l}}}const HN=/^(\d+)(th|st|nd|rd)?/i,jN=/\d+/i,DN={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},$N={any:[/^b/i,/^(a|c)/i]},LN={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},FN={any:[/1/i,/2/i,/3/i,/4/i]},qN={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},zN={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},UN={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},VN={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},GN={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},KN={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},QN={ordinalNumber:RN({matchPattern:HN,parsePattern:jN,valueCallback:e=>parseInt(e,10)}),era:qu({matchPatterns:DN,defaultMatchWidth:"wide",parsePatterns:$N,defaultParseWidth:"any"}),quarter:qu({matchPatterns:LN,defaultMatchWidth:"wide",parsePatterns:FN,defaultParseWidth:"any",valueCallback:e=>e+1}),month:qu({matchPatterns:qN,defaultMatchWidth:"wide",parsePatterns:zN,defaultParseWidth:"any"}),day:qu({matchPatterns:UN,defaultMatchWidth:"wide",parsePatterns:VN,defaultParseWidth:"any"}),dayPeriod:qu({matchPatterns:GN,defaultMatchWidth:"any",parsePatterns:KN,defaultParseWidth:"any"})},vW={code:"en-US",formatDistance:bN,formatLong:wN,formatRelative:SN,localize:EN,match:QN,options:{weekStartsOn:0,firstWeekContainsDate:1}};function YN(e){const t=Ct(e);return cN(t,gN(t))+1}function gW(e){const t=Ct(e),n=+di(t)-+fN(t);return Math.round(n/hW)+1}function hy(e,t){var h,d,v,y;const n=Ct(e),r=n.getFullYear(),a=Gi(),i=(t==null?void 0:t.firstWeekContainsDate)??((d=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:d.firstWeekContainsDate)??a.firstWeekContainsDate??((y=(v=a.locale)==null?void 0:v.options)==null?void 0:y.firstWeekContainsDate)??1,s=St(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const l=Ea(s,t),c=St(e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const f=Ea(c,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function XN(e,t){var l,c,f,h;const n=Gi(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??1,a=hy(e,t),i=St(e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),Ea(i,t)}function yW(e,t){const n=Ct(e),r=+Ea(n,t)-+XN(n,t);return Math.round(r/hW)+1}function Je(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const wa={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return Je(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):Je(n+1,2)},d(e,t){return Je(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return Je(e.getHours()%12||12,t.length)},H(e,t){return Je(e.getHours(),t.length)},m(e,t){return Je(e.getMinutes(),t.length)},s(e,t){return Je(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return Je(a,t.length)}},Zo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},_I={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return wa.y(e,t)},Y:function(e,t,n,r){const a=hy(e,r),i=a>0?a:1-a;if(t==="YY"){const s=i%100;return Je(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):Je(i,t.length)},R:function(e,t){const n=mW(e);return Je(n,t.length)},u:function(e,t){const n=e.getFullYear();return Je(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return Je(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return Je(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return wa.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return Je(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=yW(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):Je(a,t.length)},I:function(e,t,n){const r=gW(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):Je(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):wa.d(e,t)},D:function(e,t,n){const r=YN(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):Je(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return Je(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return Je(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return Je(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=Zo.noon:r===0?a=Zo.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=Zo.evening:r>=12?a=Zo.afternoon:r>=4?a=Zo.morning:a=Zo.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return wa.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):wa.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):wa.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):wa.s(e,t)},S:function(e,t){return wa.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return OI(r);case"XXXX":case"XX":return oo(r);case"XXXXX":case"XXX":default:return oo(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return OI(r);case"xxxx":case"xx":return oo(r);case"xxxxx":case"xxx":default:return oo(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+MI(r,":");case"OOOO":default:return"GMT"+oo(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+MI(r,":");case"zzzz":default:return"GMT"+oo(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return Je(r,t.length)},T:function(e,t,n){const r=e.getTime();return Je(r,t.length)}};function MI(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+t+Je(i,2)}function OI(e,t){return e%60===0?(e>0?"-":"+")+Je(Math.abs(e)/60,2):oo(e,t)}function oo(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Je(Math.trunc(r/60),2),i=Je(r%60,2);return n+a+t+i}const CI=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},bW=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},ZN=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return CI(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",CI(r,t)).replace("{{time}}",bW(a,t))},kv={p:bW,P:ZN},JN=/^D+$/,eT=/^Y+$/,tT=["D","DD","YY","YYYY"];function IW(e){return JN.test(e)}function BW(e){return eT.test(e)}function Ev(e,t,n){const r=nT(e,t,n);if(console.warn(r),tT.includes(e))throw new RangeError(r)}function nT(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const rT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,aT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,oT=/^'([^]*?)'?$/,iT=/''/g,uT=/[a-zA-Z]/;function sT(e,t,n){var h,d,v,y;const r=Gi(),a=r.locale??vW,i=r.firstWeekContainsDate??((d=(h=r.locale)==null?void 0:h.options)==null?void 0:d.firstWeekContainsDate)??1,s=r.weekStartsOn??((y=(v=r.locale)==null?void 0:v.options)==null?void 0:y.weekStartsOn)??0,l=Ct(e);if(!hN(l))throw new RangeError("Invalid time value");let c=t.match(aT).map(x=>{const I=x[0];if(I==="p"||I==="P"){const b=kv[I];return b(x,a.formatLong)}return x}).join("").match(rT).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const I=x[0];if(I==="'")return{isToken:!1,value:lT(x)};if(_I[I])return{isToken:!0,value:x};if(I.match(uT))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:x}});a.localize.preprocessor&&(c=a.localize.preprocessor(l,c));const f={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return c.map(x=>{if(!x.isToken)return x.value;const I=x.value;(BW(I)||IW(I))&&Ev(I,t,String(e));const b=_I[I[0]];return b(l,I,a.localize,f)}).join("")}function lT(e){const t=e.match(oT);return t?t[1].replace(iT,"'"):e}function pT(){return Object.assign({},Gi())}function cT(e){let n=Ct(e).getDay();return n===0&&(n=7),n}function fT(e,t){const n=t instanceof Date?St(t,0):new t(0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}const dT=10;class xW{constructor(){ve(this,"subPriority",0)}validate(t,n){return!0}}class hT extends xW{constructor(t,n,r,a,i){super(),this.value=t,this.validateValue=n,this.setValue=r,this.priority=a,i&&(this.subPriority=i)}validate(t,n){return this.validateValue(t,this.value,n)}set(t,n,r){return this.setValue(t,n,this.value,r)}}class mT extends xW{constructor(){super(...arguments);ve(this,"priority",dT);ve(this,"subPriority",-1)}set(n,r){return r.timestampIsSet?n:St(n,fT(n,Date))}}class Ge{run(t,n,r,a){const i=this.parse(t,n,r,a);return i?{setter:new hT(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(t,n,r){return!0}}class vT extends Ge{constructor(){super(...arguments);ve(this,"priority",140);ve(this,"incompatibleTokens",["R","u","t","T"])}parse(n,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})||a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"})}}set(n,r,a){return r.era=a,n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}const Wt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},gr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function At(e,t){return e&&{value:t(e.value),rest:e.rest}}function mt(e,t){const n=t.match(e);return n?{value:parseInt(n[0],10),rest:t.slice(n[0].length)}:null}function yr(e,t){const n=t.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:t.slice(1)};const r=n[1]==="+"?1:-1,a=n[2]?parseInt(n[2],10):0,i=n[3]?parseInt(n[3],10):0,s=n[5]?parseInt(n[5],10):0;return{value:r*(a*sN+i*uN+s*lN),rest:t.slice(n[0].length)}}function wW(e){return mt(Wt.anyDigitsSigned,e)}function It(e,t){switch(e){case 1:return mt(Wt.singleDigit,t);case 2:return mt(Wt.twoDigits,t);case 3:return mt(Wt.threeDigits,t);case 4:return mt(Wt.fourDigits,t);default:return mt(new RegExp("^\\d{1,"+e+"}"),t)}}function Ep(e,t){switch(e){case 1:return mt(Wt.singleDigitSigned,t);case 2:return mt(Wt.twoDigitsSigned,t);case 3:return mt(Wt.threeDigitsSigned,t);case 4:return mt(Wt.fourDigitsSigned,t);default:return mt(new RegExp("^-?\\d{1,"+e+"}"),t)}}function my(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function PW(e,t){const n=t>0,r=n?t:1-t;let a;if(r<=50)a=e||100;else{const i=r+50,s=Math.trunc(i/100)*100,l=e>=i%100;a=e+s-(l?100:0)}return n?a:1-a}function SW(e){return e%400===0||e%4===0&&e%100!==0}class gT extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,r,a){const i=s=>({year:s,isTwoDigitYear:r==="yy"});switch(r){case"y":return At(It(4,n),i);case"yo":return At(a.ordinalNumber(n,{unit:"year"}),i);default:return At(It(r.length,n),i)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a){const i=n.getFullYear();if(a.isTwoDigitYear){const l=PW(a.year,i);return n.setFullYear(l,0,1),n.setHours(0,0,0,0),n}const s=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(s,0,1),n.setHours(0,0,0,0),n}}class yT extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,r,a){const i=s=>({year:s,isTwoDigitYear:r==="YY"});switch(r){case"Y":return At(It(4,n),i);case"Yo":return At(a.ordinalNumber(n,{unit:"year"}),i);default:return At(It(r.length,n),i)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a,i){const s=hy(n,i);if(a.isTwoDigitYear){const c=PW(a.year,s);return n.setFullYear(c,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Ea(n,i)}const l=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(l,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Ea(n,i)}}class bT extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,r){return Ep(r==="R"?4:r.length,n)}set(n,r,a){const i=St(n,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),di(i)}}class IT extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,r){return Ep(r==="u"?4:r.length,n)}set(n,r,a){return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}class BT extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"Q":case"QQ":return It(r.length,n);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})||a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class xT extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"q":case"qq":return It(r.length,n);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})||a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class wT extends Ge{constructor(){super(...arguments);ve(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);ve(this,"priority",110)}parse(n,r,a){const i=s=>s-1;switch(r){case"M":return At(mt(Wt.month,n),i);case"MM":return At(It(2,n),i);case"Mo":return At(a.ordinalNumber(n,{unit:"month"}),i);case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})||a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}class PT extends Ge{constructor(){super(...arguments);ve(this,"priority",110);ve(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,r,a){const i=s=>s-1;switch(r){case"L":return At(mt(Wt.month,n),i);case"LL":return At(It(2,n),i);case"Lo":return At(a.ordinalNumber(n,{unit:"month"}),i);case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})||a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}function ST(e,t,n){const r=Ct(e),a=yW(r,n)-t;return r.setDate(r.getDate()-a*7),r}class WT extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,r,a){switch(r){case"w":return mt(Wt.week,n);case"wo":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a,i){return Ea(ST(n,a,i),i)}}function AT(e,t){const n=Ct(e),r=gW(n)-t;return n.setDate(n.getDate()-r*7),n}class _T extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,r,a){switch(r){case"I":return mt(Wt.week,n);case"Io":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a){return di(AT(n,a))}}const MT=[31,28,31,30,31,30,31,31,30,31,30,31],OT=[31,29,31,30,31,30,31,31,30,31,30,31];class CT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subPriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"d":return mt(Wt.date,n);case"do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear(),i=SW(a),s=n.getMonth();return i?r>=1&&r<=OT[s]:r>=1&&r<=MT[s]}set(n,r,a){return n.setDate(a),n.setHours(0,0,0,0),n}}class kT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subpriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,r,a){switch(r){case"D":case"DD":return mt(Wt.dayOfYear,n);case"Do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear();return SW(a)?r>=1&&r<=366:r>=1&&r<=365}set(n,r,a){return n.setMonth(0,a),n.setHours(0,0,0,0),n}}function vy(e,t,n){var d,v,y,x;const r=Gi(),a=(n==null?void 0:n.weekStartsOn)??((v=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((x=(y=r.locale)==null?void 0:y.options)==null?void 0:x.weekStartsOn)??0,i=Ct(e),s=i.getDay(),c=(t%7+7)%7,f=7-a,h=t<0||t>6?t-(s+f)%7:(c+f)%7-(s+f)%7;return Cp(i,h)}class ET extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=vy(n,a,i),n.setHours(0,0,0,0),n}}class NT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,r,a,i){const s=l=>{const c=Math.floor((l-1)/7)*7;return(l+i.weekStartsOn+6)%7+c};switch(r){case"e":case"ee":return At(It(r.length,n),s);case"eo":return At(a.ordinalNumber(n,{unit:"day"}),s);case"eee":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=vy(n,a,i),n.setHours(0,0,0,0),n}}class TT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,r,a,i){const s=l=>{const c=Math.floor((l-1)/7)*7;return(l+i.weekStartsOn+6)%7+c};switch(r){case"c":case"cc":return At(It(r.length,n),s);case"co":return At(a.ordinalNumber(n,{unit:"day"}),s);case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})||a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=vy(n,a,i),n.setHours(0,0,0,0),n}}function RT(e,t){const n=Ct(e),r=cT(n),a=t-r;return Cp(n,a)}class HT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,r,a){const i=s=>s===0?7:s;switch(r){case"i":case"ii":return It(r.length,n);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return At(a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiii":return At(a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiiii":return At(a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiii":default:return At(a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i)}}validate(n,r){return r>=1&&r<=7}set(n,r,a){return n=RT(n,a),n.setHours(0,0,0,0),n}}class jT extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(my(a),0,0,0),n}}class DT extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(my(a),0,0,0),n}}class $T extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","b","t","T"])}parse(n,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(my(a),0,0,0),n}}class LT extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,r,a){switch(r){case"h":return mt(Wt.hour12h,n);case"ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=12}set(n,r,a){const i=n.getHours()>=12;return i&&a<12?n.setHours(a+12,0,0,0):!i&&a===12?n.setHours(0,0,0,0):n.setHours(a,0,0,0),n}}class FT extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,r,a){switch(r){case"H":return mt(Wt.hour23h,n);case"Ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=23}set(n,r,a){return n.setHours(a,0,0,0),n}}class qT extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,r,a){switch(r){case"K":return mt(Wt.hour11h,n);case"Ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.getHours()>=12&&a<12?n.setHours(a+12,0,0,0):n.setHours(a,0,0,0),n}}class zT extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,r,a){switch(r){case"k":return mt(Wt.hour24h,n);case"ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=24}set(n,r,a){const i=a<=24?a%24:a;return n.setHours(i,0,0,0),n}}class UT extends Ge{constructor(){super(...arguments);ve(this,"priority",60);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"m":return mt(Wt.minute,n);case"mo":return a.ordinalNumber(n,{unit:"minute"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setMinutes(a,0,0),n}}class VT extends Ge{constructor(){super(...arguments);ve(this,"priority",50);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"s":return mt(Wt.second,n);case"so":return a.ordinalNumber(n,{unit:"second"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setSeconds(a,0),n}}class GT extends Ge{constructor(){super(...arguments);ve(this,"priority",30);ve(this,"incompatibleTokens",["t","T"])}parse(n,r){const a=i=>Math.trunc(i*Math.pow(10,-r.length+3));return At(It(r.length,n),a)}set(n,r,a){return n.setMilliseconds(a),n}}class KT extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","x"])}parse(n,r){switch(r){case"X":return yr(gr.basicOptionalMinutes,n);case"XX":return yr(gr.basic,n);case"XXXX":return yr(gr.basicOptionalSeconds,n);case"XXXXX":return yr(gr.extendedOptionalSeconds,n);case"XXX":default:return yr(gr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-kp(n)-a)}}class QT extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","X"])}parse(n,r){switch(r){case"x":return yr(gr.basicOptionalMinutes,n);case"xx":return yr(gr.basic,n);case"xxxx":return yr(gr.basicOptionalSeconds,n);case"xxxxx":return yr(gr.extendedOptionalSeconds,n);case"xxx":default:return yr(gr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-kp(n)-a)}}class YT extends Ge{constructor(){super(...arguments);ve(this,"priority",40);ve(this,"incompatibleTokens","*")}parse(n){return wW(n)}set(n,r,a){return[St(n,a*1e3),{timestampIsSet:!0}]}}class XT extends Ge{constructor(){super(...arguments);ve(this,"priority",20);ve(this,"incompatibleTokens","*")}parse(n){return wW(n)}set(n,r,a){return[St(n,a),{timestampIsSet:!0}]}}const ZT={G:new vT,y:new gT,Y:new yT,R:new bT,u:new IT,Q:new BT,q:new xT,M:new wT,L:new PT,w:new WT,I:new _T,d:new CT,D:new kT,E:new ET,e:new NT,c:new TT,i:new HT,a:new jT,b:new DT,B:new $T,h:new LT,H:new FT,K:new qT,k:new zT,m:new UT,s:new VT,S:new GT,X:new KT,x:new QT,t:new YT,T:new XT},JT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,eR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tR=/^'([^]*?)'?$/,nR=/''/g,rR=/\S/,aR=/[a-zA-Z]/;function oR(e,t,n,r){var I,b,S,W;const a=pT(),i=a.locale??vW,s=a.firstWeekContainsDate??((b=(I=a.locale)==null?void 0:I.options)==null?void 0:b.firstWeekContainsDate)??1,l=a.weekStartsOn??((W=(S=a.locale)==null?void 0:S.options)==null?void 0:W.weekStartsOn)??0,c={firstWeekContainsDate:s,weekStartsOn:l,locale:i},f=[new mT],h=t.match(eR).map(A=>{const O=A[0];if(O in kv){const w=kv[O];return w(A,i.formatLong)}return A}).join("").match(JT),d=[];for(let A of h){BW(A)&&Ev(A,t,e),IW(A)&&Ev(A,t,e);const O=A[0],w=ZT[O];if(w){const{incompatibleTokens:_}=w;if(Array.isArray(_)){const P=d.find(C=>_.includes(C.token)||C.token===O);if(P)throw new RangeError(`The format string mustn't contain \`${P.fullToken}\` and \`${A}\` at the same time`)}else if(w.incompatibleTokens==="*"&&d.length>0)throw new RangeError(`The format string mustn't contain \`${A}\` and any other token at the same time`);d.push({token:O,fullToken:A});const E=w.run(e,A,i.match,c);if(!E)return St(n,NaN);f.push(E.setter),e=E.rest}else{if(O.match(aR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");if(A==="''"?A="'":O==="'"&&(A=iR(A)),e.indexOf(A)===0)e=e.slice(A.length);else return St(n,NaN)}}if(e.length>0&&rR.test(e))return St(n,NaN);const v=f.map(A=>A.priority).sort((A,O)=>O-A).filter((A,O,w)=>w.indexOf(A)===O).map(A=>f.filter(O=>O.priority===A).sort((O,w)=>w.subPriority-O.subPriority)).map(A=>A[0]);let y=Ct(n);if(isNaN(y.getTime()))return St(n,NaN);const x={};for(const A of v){if(!A.validate(y,c))return St(n,NaN);const O=A.set(y,x,c);Array.isArray(O)?(y=O[0],Object.assign(x,O[1])):y=O}return St(n,y)}function iR(e){return e.match(tR)[1].replace(nR,"'")}const ir=e=>{if(!e)return new Date(NaN);const t=e.trim(),n=t.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(n){const[,a,i,s]=n;return new Date(parseInt(a),parseInt(i)-1,parseInt(s),12,0,0)}const r=t.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(r){const[,a,i,s]=r;return new Date(parseInt(s),parseInt(i)-1,parseInt(a),12,0,0)}return oR(e,"dd-MM-yyyy",new Date)},WW=["january","february","march","april","may","june","july","august","september","october","november","december"],AW=e=>{if(e==="all"||!e)return[];const[t,n]=e.split("-"),r=WW.indexOf(t.toLowerCase()),a=parseInt(n)||2026;if(r===-1)return[];const i=vN(new Date(a,r)),s=mN(new Date(a,r)),l=[];let c=i,f=1;for(;c<=s;){let h=Cp(c,6);h>s&&(h=s),l.push({value:`${t}-week${f}`,label:`${t.charAt(0).toUpperCase()+t.slice(1,3)} ${c.getDate()}-${h.getDate()}`,startDate:c,endDate:h}),c=Cp(h,1),f++}return l},_W=(e,t)=>{if(isNaN(e.getTime()))return!1;const n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0);return n>=t.startDate&&n<=t.endDate},Nv=(e,t)=>{if(t==="all")return!0;if(isNaN(e.getTime()))return!1;const[n,r]=t.split("-"),a=WW.indexOf(n.toLowerCase()),i=parseInt(r);return e.getMonth()===a&&e.getFullYear()===i},uR=e=>!e||isNaN(e.getTime())?"N/A":sT(e,"MMM dd, yyyy"),Tv=e=>{const t=e.length,n=e.filter(a=>a.handled==="Bot").length,r=e.filter(a=>a.handled==="Human").length;return{totalSessions:t,botHandled:n,humanHandled:r,botPercentage:t>0?n/t*100:0,humanPercentage:t>0?r/t*100:0,escalationRate:t>0?r/t*100:0}},Rv=e=>{const t=new Map;e.forEach(r=>{const a=r.channel==="Webchat"?"Webapp":r.channel,i=t.get(a)||0;t.set(a,i+1)});const n=e.length;return Array.from(t.entries()).map(([r,a])=>({channel:r,count:a,percentage:n>0?a/n*100:0})).sort((r,a)=>a.count-r.count)},MW=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.product&&r.product.trim()!==""){const a=n.get(r.product)||0;n.set(r.product,a+1)}}),Array.from(n.entries()).map(([r,a])=>({product:r,count:a})).sort((r,a)=>a.count-r.count)},Hv=(e,t=10)=>{const n=new Map;return e.forEach(r=>{if(r.issue&&r.issue.trim()!==""){const a=n.get(r.issue)||{bot:0,human:0};r.handled==="Bot"?a.bot++:a.human++,n.set(r.issue,a)}}),Array.from(n.entries()).map(([r,a])=>({issue:r,botCount:a.bot,humanCount:a.human,total:a.bot+a.human})).sort((r,a)=>a.humanCount-r.humanCount).slice(0,t)},sR=(e,t="february-2026")=>{if(t==="all"){const n=["january","february","march","april","may","june","july","august","september","october","november","december"],r=new Set;return e.forEach(i=>{try{const s=ir(i.createdAt);if(!isNaN(s.getTime())){const l=n[s.getMonth()],c=`${l.charAt(0).toUpperCase()}${l.slice(1,3)} ${s.getFullYear()}`;r.add(`${c}|${l}-${s.getFullYear()}`)}}catch{}}),Array.from(r).map(i=>{const[s,l]=i.split("|"),c=e.filter(v=>Nv(ir(v.createdAt),l)),f=c.length,h=c.filter(v=>v.handled==="Human").length,d=f>0?h/f*100:0;return{week:s,totalSessions:f,humanEscalations:h,escalationRate:d}}).sort((i,s)=>new Date(`1 ${i.week}`).getTime()-new Date(`1 ${s.week}`).getTime()).filter(i=>i.totalSessions>0)}else return AW(t).map(r=>{const a=e.filter(c=>{const f=ir(c.createdAt);return _W(f,r)}),i=a.length,s=a.filter(c=>c.handled==="Human").length,l=a.length>0?s/a.length*100:0;return{week:r.label,totalSessions:i,humanEscalations:s,escalationRate:l}})},lR=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.issue&&r.issue.trim()!==""){n.has(r.issue)||n.set(r.issue,new Map);const a=n.get(r.issue),i=r.subType&&r.subType.trim()!==""?r.subType:"Other";a.has(i)||a.set(i,new Map);const s=a.get(i),l=r.product&&r.product.trim()!==""?r.product:"Unknown";s.set(l,(s.get(l)||0)+1)}}),Array.from(n.entries()).map(([r,a])=>{const i=Array.from(a.entries()).map(([l,c])=>{const f=Array.from(c.entries()).map(([d,v])=>({product:d,count:v})).sort((d,v)=>v.count-d.count),h=f.reduce((d,v)=>d+v.count,0);return{subType:l,count:h,products:f}}).sort((l,c)=>c.count-l.count),s=i.reduce((l,c)=>l+c.count,0);return{issue:r,count:s,subIssues:i}}).sort((r,a)=>a.count-r.count)},pR=(e,t="analytics-export.csv")=>{const r=[["Channel","Created at","Product","Issue","Sub Type","Handled"].join(","),...e.map(l=>[l.channel,l.createdAt,l.product||"",l.issue||"",l.subType||"",l.handled].join(","))].join(`
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a"),s=URL.createObjectURL(a);i.setAttribute("href",s),i.setAttribute("download",t),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)};function cR({metrics:e}){const t=r=>r<20?"text-green-600":r<40?"text-yellow-600":"text-red-600",n=r=>r<20?"bg-green-50":r<40?"bg-yellow-50":"bg-red-50";return M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[M.jsx(zn,{children:M.jsx(Un,{className:"p-6",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sessions"}),M.jsx("p",{className:"text-3xl font-bold mt-2",children:e.totalSessions.toLocaleString()})]}),M.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:M.jsx(JE,{className:"w-6 h-6 text-blue-600"})})]})})}),M.jsx(zn,{children:M.jsx(Un,{className:"p-6",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Bot Handled Sessions"}),M.jsx("p",{className:"text-3xl font-bold mt-2",children:e.botHandled.toLocaleString()}),M.jsxs("p",{className:"text-sm text-blue-600 mt-1",children:[e.botPercentage.toFixed(1),"%"]})]}),M.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:M.jsx(qE,{className:"w-6 h-6 text-blue-600"})})]})})}),M.jsx(zn,{children:M.jsx(Un,{className:"p-6",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Human Handled Sessions"}),M.jsx("p",{className:"text-3xl font-bold mt-2",children:e.humanHandled.toLocaleString()}),M.jsxs("p",{className:"text-sm text-orange-600 mt-1",children:[e.humanPercentage.toFixed(1),"%"]})]}),M.jsx("div",{className:"p-3 bg-orange-50 rounded-full",children:M.jsx(rN,{className:"w-6 h-6 text-orange-600"})})]})})}),M.jsx(zn,{className:n(e.escalationRate),children:M.jsx(Un,{className:"p-6",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Escalation Rate"}),M.jsxs("p",{className:`text-3xl font-bold mt-2 ${t(e.escalationRate)}`,children:[e.escalationRate.toFixed(1),"%"]}),M.jsx("p",{className:"text-xs text-gray-500 mt-1",children:e.escalationRate<20?"Excellent":e.escalationRate<40?"Good":"Needs Attention"})]}),M.jsx("div",{className:`p-3 rounded-full ${t(e.escalationRate).replace("text","bg").replace("600","100")}`,children:M.jsx(tN,{className:`w-6 h-6 ${t(e.escalationRate)}`})})]})})})]})}var wf,kI;function yn(){if(kI)return wf;kI=1;var e=Array.isArray;return wf=e,wf}var Pf,EI;function OW(){if(EI)return Pf;EI=1;var e=typeof pp=="object"&&pp&&pp.Object===Object&&pp;return Pf=e,Pf}var Sf,NI;function Wr(){if(NI)return Sf;NI=1;var e=OW(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=e||t||Function("return this")();return Sf=n,Sf}var Wf,TI;function Ks(){if(TI)return Wf;TI=1;var e=Wr(),t=e.Symbol;return Wf=t,Wf}var Af,RI;function fR(){if(RI)return Af;RI=1;var e=Ks(),t=Object.prototype,n=t.hasOwnProperty,r=t.toString,a=e?e.toStringTag:void 0;function i(s){var l=n.call(s,a),c=s[a];try{s[a]=void 0;var f=!0}catch{}var h=r.call(s);return f&&(l?s[a]=c:delete s[a]),h}return Af=i,Af}var _f,HI;function dR(){if(HI)return _f;HI=1;var e=Object.prototype,t=e.toString;function n(r){return t.call(r)}return _f=n,_f}var Mf,jI;function Yr(){if(jI)return Mf;jI=1;var e=Ks(),t=fR(),n=dR(),r="[object Null]",a="[object Undefined]",i=e?e.toStringTag:void 0;function s(l){return l==null?l===void 0?a:r:i&&i in Object(l)?t(l):n(l)}return Mf=s,Mf}var Of,DI;function Xr(){if(DI)return Of;DI=1;function e(t){return t!=null&&typeof t=="object"}return Of=e,Of}var Cf,$I;function Ki(){if($I)return Cf;$I=1;var e=Yr(),t=Xr(),n="[object Symbol]";function r(a){return typeof a=="symbol"||t(a)&&e(a)==n}return Cf=r,Cf}var kf,LI;function gy(){if(LI)return kf;LI=1;var e=yn(),t=Ki(),n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,s){if(e(i))return!1;var l=typeof i;return l=="number"||l=="symbol"||l=="boolean"||i==null||t(i)?!0:r.test(i)||!n.test(i)||s!=null&&i in Object(s)}return kf=a,kf}var Ef,FI;function Ha(){if(FI)return Ef;FI=1;function e(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return Ef=e,Ef}var Nf,qI;function yy(){if(qI)return Nf;qI=1;var e=Yr(),t=Ha(),n="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",i="[object Proxy]";function s(l){if(!t(l))return!1;var c=e(l);return c==r||c==a||c==n||c==i}return Nf=s,Nf}var Tf,zI;function hR(){if(zI)return Tf;zI=1;var e=Wr(),t=e["__core-js_shared__"];return Tf=t,Tf}var Rf,UI;function mR(){if(UI)return Rf;UI=1;var e=hR(),t=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function n(r){return!!t&&t in r}return Rf=n,Rf}var Hf,VI;function CW(){if(VI)return Hf;VI=1;var e=Function.prototype,t=e.toString;function n(r){if(r!=null){try{return t.call(r)}catch{}try{return r+""}catch{}}return""}return Hf=n,Hf}var jf,GI;function vR(){if(GI)return jf;GI=1;var e=yy(),t=mR(),n=Ha(),r=CW(),a=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,s=Function.prototype,l=Object.prototype,c=s.toString,f=l.hasOwnProperty,h=RegExp("^"+c.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(v){if(!n(v)||t(v))return!1;var y=e(v)?h:i;return y.test(r(v))}return jf=d,jf}var Df,KI;function gR(){if(KI)return Df;KI=1;function e(t,n){return t==null?void 0:t[n]}return Df=e,Df}var $f,QI;function Bo(){if(QI)return $f;QI=1;var e=vR(),t=gR();function n(r,a){var i=t(r,a);return e(i)?i:void 0}return $f=n,$f}var Lf,YI;function Lc(){if(YI)return Lf;YI=1;var e=Bo(),t=e(Object,"create");return Lf=t,Lf}var Ff,XI;function yR(){if(XI)return Ff;XI=1;var e=Lc();function t(){this.__data__=e?e(null):{},this.size=0}return Ff=t,Ff}var qf,ZI;function bR(){if(ZI)return qf;ZI=1;function e(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}return qf=e,qf}var zf,JI;function IR(){if(JI)return zf;JI=1;var e=Lc(),t="__lodash_hash_undefined__",n=Object.prototype,r=n.hasOwnProperty;function a(i){var s=this.__data__;if(e){var l=s[i];return l===t?void 0:l}return r.call(s,i)?s[i]:void 0}return zf=a,zf}var Uf,eB;function BR(){if(eB)return Uf;eB=1;var e=Lc(),t=Object.prototype,n=t.hasOwnProperty;function r(a){var i=this.__data__;return e?i[a]!==void 0:n.call(i,a)}return Uf=r,Uf}var Vf,tB;function xR(){if(tB)return Vf;tB=1;var e=Lc(),t="__lodash_hash_undefined__";function n(r,a){var i=this.__data__;return this.size+=this.has(r)?0:1,i[r]=e&&a===void 0?t:a,this}return Vf=n,Vf}var Gf,nB;function wR(){if(nB)return Gf;nB=1;var e=yR(),t=bR(),n=IR(),r=BR(),a=xR();function i(s){var l=-1,c=s==null?0:s.length;for(this.clear();++l<c;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,Gf=i,Gf}var Kf,rB;function PR(){if(rB)return Kf;rB=1;function e(){this.__data__=[],this.size=0}return Kf=e,Kf}var Qf,aB;function by(){if(aB)return Qf;aB=1;function e(t,n){return t===n||t!==t&&n!==n}return Qf=e,Qf}var Yf,oB;function Fc(){if(oB)return Yf;oB=1;var e=by();function t(n,r){for(var a=n.length;a--;)if(e(n[a][0],r))return a;return-1}return Yf=t,Yf}var Xf,iB;function SR(){if(iB)return Xf;iB=1;var e=Fc(),t=Array.prototype,n=t.splice;function r(a){var i=this.__data__,s=e(i,a);if(s<0)return!1;var l=i.length-1;return s==l?i.pop():n.call(i,s,1),--this.size,!0}return Xf=r,Xf}var Zf,uB;function WR(){if(uB)return Zf;uB=1;var e=Fc();function t(n){var r=this.__data__,a=e(r,n);return a<0?void 0:r[a][1]}return Zf=t,Zf}var Jf,sB;function AR(){if(sB)return Jf;sB=1;var e=Fc();function t(n){return e(this.__data__,n)>-1}return Jf=t,Jf}var ed,lB;function _R(){if(lB)return ed;lB=1;var e=Fc();function t(n,r){var a=this.__data__,i=e(a,n);return i<0?(++this.size,a.push([n,r])):a[i][1]=r,this}return ed=t,ed}var td,pB;function qc(){if(pB)return td;pB=1;var e=PR(),t=SR(),n=WR(),r=AR(),a=_R();function i(s){var l=-1,c=s==null?0:s.length;for(this.clear();++l<c;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,td=i,td}var nd,cB;function Iy(){if(cB)return nd;cB=1;var e=Bo(),t=Wr(),n=e(t,"Map");return nd=n,nd}var rd,fB;function MR(){if(fB)return rd;fB=1;var e=wR(),t=qc(),n=Iy();function r(){this.size=0,this.__data__={hash:new e,map:new(n||t),string:new e}}return rd=r,rd}var ad,dB;function OR(){if(dB)return ad;dB=1;function e(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}return ad=e,ad}var od,hB;function zc(){if(hB)return od;hB=1;var e=OR();function t(n,r){var a=n.__data__;return e(r)?a[typeof r=="string"?"string":"hash"]:a.map}return od=t,od}var id,mB;function CR(){if(mB)return id;mB=1;var e=zc();function t(n){var r=e(this,n).delete(n);return this.size-=r?1:0,r}return id=t,id}var ud,vB;function kR(){if(vB)return ud;vB=1;var e=zc();function t(n){return e(this,n).get(n)}return ud=t,ud}var sd,gB;function ER(){if(gB)return sd;gB=1;var e=zc();function t(n){return e(this,n).has(n)}return sd=t,sd}var ld,yB;function NR(){if(yB)return ld;yB=1;var e=zc();function t(n,r){var a=e(this,n),i=a.size;return a.set(n,r),this.size+=a.size==i?0:1,this}return ld=t,ld}var pd,bB;function By(){if(bB)return pd;bB=1;var e=MR(),t=CR(),n=kR(),r=ER(),a=NR();function i(s){var l=-1,c=s==null?0:s.length;for(this.clear();++l<c;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,pd=i,pd}var cd,IB;function kW(){if(IB)return cd;IB=1;var e=By(),t="Expected a function";function n(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(t);var i=function(){var s=arguments,l=a?a.apply(this,s):s[0],c=i.cache;if(c.has(l))return c.get(l);var f=r.apply(this,s);return i.cache=c.set(l,f)||c,f};return i.cache=new(n.Cache||e),i}return n.Cache=e,cd=n,cd}var fd,BB;function TR(){if(BB)return fd;BB=1;var e=kW(),t=500;function n(r){var a=e(r,function(s){return i.size===t&&i.clear(),s}),i=a.cache;return a}return fd=n,fd}var dd,xB;function RR(){if(xB)return dd;xB=1;var e=TR(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g,r=e(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(t,function(s,l,c,f){i.push(c?f.replace(n,"$1"):l||s)}),i});return dd=r,dd}var hd,wB;function xy(){if(wB)return hd;wB=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,i=Array(a);++r<a;)i[r]=n(t[r],r,t);return i}return hd=e,hd}var md,PB;function HR(){if(PB)return md;PB=1;var e=Ks(),t=xy(),n=yn(),r=Ki(),a=e?e.prototype:void 0,i=a?a.toString:void 0;function s(l){if(typeof l=="string")return l;if(n(l))return t(l,s)+"";if(r(l))return i?i.call(l):"";var c=l+"";return c=="0"&&1/l==-1/0?"-0":c}return md=s,md}var vd,SB;function EW(){if(SB)return vd;SB=1;var e=HR();function t(n){return n==null?"":e(n)}return vd=t,vd}var gd,WB;function NW(){if(WB)return gd;WB=1;var e=yn(),t=gy(),n=RR(),r=EW();function a(i,s){return e(i)?i:t(i,s)?[i]:n(r(i))}return gd=a,gd}var yd,AB;function Uc(){if(AB)return yd;AB=1;var e=Ki();function t(n){if(typeof n=="string"||e(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}return yd=t,yd}var bd,_B;function wy(){if(_B)return bd;_B=1;var e=NW(),t=Uc();function n(r,a){a=e(a,r);for(var i=0,s=a.length;r!=null&&i<s;)r=r[t(a[i++])];return i&&i==s?r:void 0}return bd=n,bd}var Id,MB;function TW(){if(MB)return Id;MB=1;var e=wy();function t(n,r,a){var i=n==null?void 0:e(n,r);return i===void 0?a:i}return Id=t,Id}var jR=TW();const Mn=Xe(jR);var Bd,OB;function DR(){if(OB)return Bd;OB=1;function e(t){return t==null}return Bd=e,Bd}var $R=DR();const Ee=Xe($R);var xd,CB;function LR(){if(CB)return xd;CB=1;var e=Yr(),t=yn(),n=Xr(),r="[object String]";function a(i){return typeof i=="string"||!t(i)&&n(i)&&e(i)==r}return xd=a,xd}var FR=LR();const Qs=Xe(FR);var qR=yy();const ke=Xe(qR);var zR=Ha();const Qi=Xe(zR);var wd={exports:{}},Qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kB;function UR(){if(kB)return Qe;kB=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function I(b){if(typeof b=="object"&&b!==null){var S=b.$$typeof;switch(S){case e:switch(b=b.type,b){case n:case a:case r:case f:case h:return b;default:switch(b=b&&b.$$typeof,b){case l:case s:case c:case v:case d:case i:return b;default:return S}}case t:return S}}}return Qe.ContextConsumer=s,Qe.ContextProvider=i,Qe.Element=e,Qe.ForwardRef=c,Qe.Fragment=n,Qe.Lazy=v,Qe.Memo=d,Qe.Portal=t,Qe.Profiler=a,Qe.StrictMode=r,Qe.Suspense=f,Qe.SuspenseList=h,Qe.isAsyncMode=function(){return!1},Qe.isConcurrentMode=function(){return!1},Qe.isContextConsumer=function(b){return I(b)===s},Qe.isContextProvider=function(b){return I(b)===i},Qe.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===e},Qe.isForwardRef=function(b){return I(b)===c},Qe.isFragment=function(b){return I(b)===n},Qe.isLazy=function(b){return I(b)===v},Qe.isMemo=function(b){return I(b)===d},Qe.isPortal=function(b){return I(b)===t},Qe.isProfiler=function(b){return I(b)===a},Qe.isStrictMode=function(b){return I(b)===r},Qe.isSuspense=function(b){return I(b)===f},Qe.isSuspenseList=function(b){return I(b)===h},Qe.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===n||b===a||b===r||b===f||b===h||b===y||typeof b=="object"&&b!==null&&(b.$$typeof===v||b.$$typeof===d||b.$$typeof===i||b.$$typeof===s||b.$$typeof===c||b.$$typeof===x||b.getModuleId!==void 0)},Qe.typeOf=I,Qe}var EB;function VR(){return EB||(EB=1,wd.exports=UR()),wd.exports}var GR=VR(),Pd,NB;function RW(){if(NB)return Pd;NB=1;var e=Yr(),t=Xr(),n="[object Number]";function r(a){return typeof a=="number"||t(a)&&e(a)==n}return Pd=r,Pd}var Sd,TB;function KR(){if(TB)return Sd;TB=1;var e=RW();function t(n){return e(n)&&n!=+n}return Sd=t,Sd}var QR=KR();const Yi=Xe(QR);var YR=RW();const XR=Xe(YR);var an=function(t){return t===0?0:t>0?1:-1},lo=function(t){return Qs(t)&&t.indexOf("%")===t.length-1},le=function(t){return XR(t)&&!Yi(t)},Rt=function(t){return le(t)||Qs(t)},ZR=0,ja=function(t){var n=++ZR;return"".concat(t||"").concat(n)},on=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!le(t)&&!Qs(t))return r;var i;if(lo(t)){var s=t.indexOf("%");i=n*parseFloat(t.slice(0,s))/100}else i=+t;return Yi(i)&&(i=r),a&&i>n&&(i=n),i},Wa=function(t){if(!t)return null;var n=Object.keys(t);return n&&n.length?t[n[0]]:null},JR=function(t){if(!Array.isArray(t))return!1;for(var n=t.length,r={},a=0;a<n;a++)if(!r[t[a]])r[t[a]]=!0;else return!0;return!1},ht=function(t,n){return le(t)&&le(n)?function(r){return t+r*(n-t)}:function(){return n}};function Np(e,t,n){return!e||!e.length?null:e.find(function(r){return r&&(typeof t=="function"?t(r):Mn(r,t))===n})}var eH=function(t){if(!t||!t.length)return null;for(var n=t.length,r=0,a=0,i=0,s=0,l=1/0,c=-1/0,f=0,h=0,d=0;d<n;d++)f=t[d].cx||0,h=t[d].cy||0,r+=f,a+=h,i+=f*h,s+=f*f,l=Math.min(l,f),c=Math.max(c,f);var v=n*s!==r*r?(n*i-r*a)/(n*s-r*r):0;return{xmin:l,xmax:c,a:v,b:(a-v*r)/n}};function li(e,t){for(var n in e)if({}.hasOwnProperty.call(e,n)&&(!{}.hasOwnProperty.call(t,n)||e[n]!==t[n]))return!1;for(var r in t)if({}.hasOwnProperty.call(t,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function jv(e){"@babel/helpers - typeof";return jv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jv(e)}var tH=["viewBox","children"],nH=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],RB=["points","pathLength"],Wd={svg:tH,polygon:RB,polyline:RB},Py=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Tp=function(t,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var r=t;if(X.isValidElement(t)&&(r=t.props),!Qi(r))return null;var a={};return Object.keys(r).forEach(function(i){Py.includes(i)&&(a[i]=n||function(s){return r[i](r,s)})}),a},rH=function(t,n,r){return function(a){return t(n,r,a),null}},Na=function(t,n,r){if(!Qi(t)||jv(t)!=="object")return null;var a=null;return Object.keys(t).forEach(function(i){var s=t[i];Py.includes(i)&&typeof s=="function"&&(a||(a={}),a[i]=rH(s,n,r))}),a},aH=["children"],oH=["children"];function HB(e,t){if(e==null)return{};var n=iH(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function iH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Dv(e){"@babel/helpers - typeof";return Dv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dv(e)}var jB={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},Ur=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},DB=null,Ad=null,Sy=function e(t){if(t===DB&&Array.isArray(Ad))return Ad;var n=[];return X.Children.forEach(t,function(r){Ee(r)||(GR.isFragment(r)?n=n.concat(e(r.props.children)):n.push(r))}),Ad=n,DB=t,n};function sn(e,t){var n=[],r=[];return Array.isArray(t)?r=t.map(function(a){return Ur(a)}):r=[Ur(t)],Sy(e).forEach(function(a){var i=Mn(a,"type.displayName")||Mn(a,"type.name");r.indexOf(i)!==-1&&n.push(a)}),n}function Sn(e,t){var n=sn(e,t);return n&&n[0]}var $B=function(t){if(!t||!t.props)return!1;var n=t.props,r=n.width,a=n.height;return!(!le(r)||r<=0||!le(a)||a<=0)},uH=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],sH=function(t){return t&&t.type&&Qs(t.type)&&uH.indexOf(t.type)>=0},HW=function(t){return t&&Dv(t)==="object"&&"clipDot"in t},lH=function(t,n,r,a){var i,s=(i=Wd==null?void 0:Wd[a])!==null&&i!==void 0?i:[];return n.startsWith("data-")||!ke(t)&&(a&&s.includes(n)||nH.includes(n))||r&&Py.includes(n)},We=function(t,n,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var a=t;if(X.isValidElement(t)&&(a=t.props),!Qi(a))return null;var i={};return Object.keys(a).forEach(function(s){var l;lH((l=a)===null||l===void 0?void 0:l[s],s,n,r)&&(i[s]=a[s])}),i},$v=function e(t,n){if(t===n)return!0;var r=X.Children.count(t);if(r!==X.Children.count(n))return!1;if(r===0)return!0;if(r===1)return LB(Array.isArray(t)?t[0]:t,Array.isArray(n)?n[0]:n);for(var a=0;a<r;a++){var i=t[a],s=n[a];if(Array.isArray(i)||Array.isArray(s)){if(!e(i,s))return!1}else if(!LB(i,s))return!1}return!0},LB=function(t,n){if(Ee(t)&&Ee(n))return!0;if(!Ee(t)&&!Ee(n)){var r=t.props||{},a=r.children,i=HB(r,aH),s=n.props||{},l=s.children,c=HB(s,oH);return a&&l?li(i,c)&&$v(a,l):!a&&!l?li(i,c):!1}return!1},FB=function(t,n){var r=[],a={};return Sy(t).forEach(function(i,s){if(sH(i))r.push(i);else if(i){var l=Ur(i.type),c=n[l]||{},f=c.handler,h=c.once;if(f&&(!h||!a[l])){var d=f(i,l,s);r.push(d),a[l]=!0}}}),r},pH=function(t){var n=t&&t.type;return n&&jB[n]?jB[n]:null},cH=function(t,n){return Sy(n).indexOf(t)},fH=["children","width","height","viewBox","className","style","title","desc"];function Lv(){return Lv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lv.apply(this,arguments)}function dH(e,t){if(e==null)return{};var n=hH(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function hH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Fv(e){var t=e.children,n=e.width,r=e.height,a=e.viewBox,i=e.className,s=e.style,l=e.title,c=e.desc,f=dH(e,fH),h=a||{width:n,height:r,x:0,y:0},d=He("recharts-surface",i);return R.createElement("svg",Lv({},We(f,!0,"svg"),{className:d,width:n,height:r,style:s,viewBox:"".concat(h.x," ").concat(h.y," ").concat(h.width," ").concat(h.height)}),R.createElement("title",null,l),R.createElement("desc",null,c),t)}var mH=["children","className"];function qv(){return qv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qv.apply(this,arguments)}function vH(e,t){if(e==null)return{};var n=gH(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function gH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var De=R.forwardRef(function(e,t){var n=e.children,r=e.className,a=vH(e,mH),i=He("recharts-layer",r);return R.createElement("g",qv({className:i},We(a,!0),{ref:t}),n)}),sr=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i]},_d,qB;function yH(){if(qB)return _d;qB=1;function e(t,n,r){var a=-1,i=t.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var s=Array(i);++a<i;)s[a]=t[a+n];return s}return _d=e,_d}var Md,zB;function bH(){if(zB)return Md;zB=1;var e=yH();function t(n,r,a){var i=n.length;return a=a===void 0?i:a,!r&&a>=i?n:e(n,r,a)}return Md=t,Md}var Od,UB;function jW(){if(UB)return Od;UB=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,i="\\ufe0e\\ufe0f",s="\\u200d",l=RegExp("["+s+e+a+i+"]");function c(f){return l.test(f)}return Od=c,Od}var Cd,VB;function IH(){if(VB)return Cd;VB=1;function e(t){return t.split("")}return Cd=e,Cd}var kd,GB;function BH(){if(GB)return kd;GB=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,i="\\ufe0e\\ufe0f",s="["+e+"]",l="["+a+"]",c="\\ud83c[\\udffb-\\udfff]",f="(?:"+l+"|"+c+")",h="[^"+e+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",y="\\u200d",x=f+"?",I="["+i+"]?",b="(?:"+y+"(?:"+[h,d,v].join("|")+")"+I+x+")*",S=I+x+b,W="(?:"+[h+l+"?",l,d,v,s].join("|")+")",A=RegExp(c+"(?="+c+")|"+W+S,"g");function O(w){return w.match(A)||[]}return kd=O,kd}var Ed,KB;function xH(){if(KB)return Ed;KB=1;var e=IH(),t=jW(),n=BH();function r(a){return t(a)?n(a):e(a)}return Ed=r,Ed}var Nd,QB;function wH(){if(QB)return Nd;QB=1;var e=bH(),t=jW(),n=xH(),r=EW();function a(i){return function(s){s=r(s);var l=t(s)?n(s):void 0,c=l?l[0]:s.charAt(0),f=l?e(l,1).join(""):s.slice(1);return c[i]()+f}}return Nd=a,Nd}var Td,YB;function PH(){if(YB)return Td;YB=1;var e=wH(),t=e("toUpperCase");return Td=t,Td}var SH=PH();const Vc=Xe(SH);function at(e){return function(){return e}}const DW=Math.cos,Rp=Math.sin,cr=Math.sqrt,Hp=Math.PI,Gc=2*Hp,zv=Math.PI,Uv=2*zv,io=1e-6,WH=Uv-io;function $W(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function AH(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return $W;const n=10**t;return function(r){this._+=r[0];for(let a=1,i=r.length;a<i;++a)this._+=Math.round(arguments[a]*n)/n+r[a]}}class _H{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?$W:AH(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,a){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(t,n,r,a,i,s){this._append`C${+t},${+n},${+r},${+a},${this._x1=+i},${this._y1=+s}`}arcTo(t,n,r,a,i){if(t=+t,n=+n,r=+r,a=+a,i=+i,i<0)throw new Error(`negative radius: ${i}`);let s=this._x1,l=this._y1,c=r-t,f=a-n,h=s-t,d=l-n,v=h*h+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(v>io)if(!(Math.abs(d*c-f*h)>io)||!i)this._append`L${this._x1=t},${this._y1=n}`;else{let y=r-s,x=a-l,I=c*c+f*f,b=y*y+x*x,S=Math.sqrt(I),W=Math.sqrt(v),A=i*Math.tan((zv-Math.acos((I+v-b)/(2*S*W)))/2),O=A/W,w=A/S;Math.abs(O-1)>io&&this._append`L${t+O*h},${n+O*d}`,this._append`A${i},${i},0,0,${+(d*y>h*x)},${this._x1=t+w*c},${this._y1=n+w*f}`}}arc(t,n,r,a,i,s){if(t=+t,n=+n,r=+r,s=!!s,r<0)throw new Error(`negative radius: ${r}`);let l=r*Math.cos(a),c=r*Math.sin(a),f=t+l,h=n+c,d=1^s,v=s?a-i:i-a;this._x1===null?this._append`M${f},${h}`:(Math.abs(this._x1-f)>io||Math.abs(this._y1-h)>io)&&this._append`L${f},${h}`,r&&(v<0&&(v=v%Uv+Uv),v>WH?this._append`A${r},${r},0,1,${d},${t-l},${n-c}A${r},${r},0,1,${d},${this._x1=f},${this._y1=h}`:v>io&&this._append`A${r},${r},0,${+(v>=zv)},${d},${this._x1=t+r*Math.cos(i)},${this._y1=n+r*Math.sin(i)}`)}rect(t,n,r,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function Wy(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new _H(t)}function Ay(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function LW(e){this._context=e}LW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function Kc(e){return new LW(e)}function FW(e){return e[0]}function qW(e){return e[1]}function zW(e,t){var n=at(!0),r=null,a=Kc,i=null,s=Wy(l);e=typeof e=="function"?e:e===void 0?FW:at(e),t=typeof t=="function"?t:t===void 0?qW:at(t);function l(c){var f,h=(c=Ay(c)).length,d,v=!1,y;for(r==null&&(i=a(y=s())),f=0;f<=h;++f)!(f<h&&n(d=c[f],f,c))===v&&((v=!v)?i.lineStart():i.lineEnd()),v&&i.point(+e(d,f,c),+t(d,f,c));if(y)return i=null,y+""||null}return l.x=function(c){return arguments.length?(e=typeof c=="function"?c:at(+c),l):e},l.y=function(c){return arguments.length?(t=typeof c=="function"?c:at(+c),l):t},l.defined=function(c){return arguments.length?(n=typeof c=="function"?c:at(!!c),l):n},l.curve=function(c){return arguments.length?(a=c,r!=null&&(i=a(r)),l):a},l.context=function(c){return arguments.length?(c==null?r=i=null:i=a(r=c),l):r},l}function mp(e,t,n){var r=null,a=at(!0),i=null,s=Kc,l=null,c=Wy(f);e=typeof e=="function"?e:e===void 0?FW:at(+e),t=typeof t=="function"?t:at(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?qW:at(+n);function f(d){var v,y,x,I=(d=Ay(d)).length,b,S=!1,W,A=new Array(I),O=new Array(I);for(i==null&&(l=s(W=c())),v=0;v<=I;++v){if(!(v<I&&a(b=d[v],v,d))===S)if(S=!S)y=v,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),x=v-1;x>=y;--x)l.point(A[x],O[x]);l.lineEnd(),l.areaEnd()}S&&(A[v]=+e(b,v,d),O[v]=+t(b,v,d),l.point(r?+r(b,v,d):A[v],n?+n(b,v,d):O[v]))}if(W)return l=null,W+""||null}function h(){return zW().defined(a).curve(s).context(i)}return f.x=function(d){return arguments.length?(e=typeof d=="function"?d:at(+d),r=null,f):e},f.x0=function(d){return arguments.length?(e=typeof d=="function"?d:at(+d),f):e},f.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:at(+d),f):r},f.y=function(d){return arguments.length?(t=typeof d=="function"?d:at(+d),n=null,f):t},f.y0=function(d){return arguments.length?(t=typeof d=="function"?d:at(+d),f):t},f.y1=function(d){return arguments.length?(n=d==null?null:typeof d=="function"?d:at(+d),f):n},f.lineX0=f.lineY0=function(){return h().x(e).y(t)},f.lineY1=function(){return h().x(e).y(n)},f.lineX1=function(){return h().x(r).y(t)},f.defined=function(d){return arguments.length?(a=typeof d=="function"?d:at(!!d),f):a},f.curve=function(d){return arguments.length?(s=d,i!=null&&(l=s(i)),f):s},f.context=function(d){return arguments.length?(d==null?i=l=null:l=s(i=d),f):i},f}class UW{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function MH(e){return new UW(e,!0)}function OH(e){return new UW(e,!1)}const _y={draw(e,t){const n=cr(t/Hp);e.moveTo(n,0),e.arc(0,0,n,0,Gc)}},CH={draw(e,t){const n=cr(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},VW=cr(1/3),kH=VW*2,EH={draw(e,t){const n=cr(t/kH),r=n*VW;e.moveTo(0,-n),e.lineTo(r,0),e.lineTo(0,n),e.lineTo(-r,0),e.closePath()}},NH={draw(e,t){const n=cr(t),r=-n/2;e.rect(r,r,n,n)}},TH=.8908130915292852,GW=Rp(Hp/10)/Rp(7*Hp/10),RH=Rp(Gc/10)*GW,HH=-DW(Gc/10)*GW,jH={draw(e,t){const n=cr(t*TH),r=RH*n,a=HH*n;e.moveTo(0,-n),e.lineTo(r,a);for(let i=1;i<5;++i){const s=Gc*i/5,l=DW(s),c=Rp(s);e.lineTo(c*n,-l*n),e.lineTo(l*r-c*a,c*r+l*a)}e.closePath()}},Rd=cr(3),DH={draw(e,t){const n=-cr(t/(Rd*3));e.moveTo(0,n*2),e.lineTo(-Rd*n,-n),e.lineTo(Rd*n,-n),e.closePath()}},Dn=-.5,$n=cr(3)/2,Vv=1/cr(12),$H=(Vv/2+1)*3,LH={draw(e,t){const n=cr(t/$H),r=n/2,a=n*Vv,i=r,s=n*Vv+n,l=-i,c=s;e.moveTo(r,a),e.lineTo(i,s),e.lineTo(l,c),e.lineTo(Dn*r-$n*a,$n*r+Dn*a),e.lineTo(Dn*i-$n*s,$n*i+Dn*s),e.lineTo(Dn*l-$n*c,$n*l+Dn*c),e.lineTo(Dn*r+$n*a,Dn*a-$n*r),e.lineTo(Dn*i+$n*s,Dn*s-$n*i),e.lineTo(Dn*l+$n*c,Dn*c-$n*l),e.closePath()}};function FH(e,t){let n=null,r=Wy(a);e=typeof e=="function"?e:at(e||_y),t=typeof t=="function"?t:at(t===void 0?64:+t);function a(){let i;if(n||(n=i=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),i)return n=null,i+""||null}return a.type=function(i){return arguments.length?(e=typeof i=="function"?i:at(i),a):e},a.size=function(i){return arguments.length?(t=typeof i=="function"?i:at(+i),a):t},a.context=function(i){return arguments.length?(n=i??null,a):n},a}function jp(){}function Dp(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function KW(e){this._context=e}KW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Dp(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Dp(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function qH(e){return new KW(e)}function QW(e){this._context=e}QW.prototype={areaStart:jp,areaEnd:jp,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Dp(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function zH(e){return new QW(e)}function YW(e){this._context=e}YW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:Dp(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function UH(e){return new YW(e)}function XW(e){this._context=e}XW.prototype={areaStart:jp,areaEnd:jp,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function VH(e){return new XW(e)}function XB(e){return e<0?-1:1}function ZB(e,t,n){var r=e._x1-e._x0,a=t-e._x1,i=(e._y1-e._y0)/(r||a<0&&-0),s=(n-e._y1)/(a||r<0&&-0),l=(i*a+s*r)/(r+a);return(XB(i)+XB(s))*Math.min(Math.abs(i),Math.abs(s),.5*Math.abs(l))||0}function JB(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function Hd(e,t,n){var r=e._x0,a=e._y0,i=e._x1,s=e._y1,l=(i-r)/3;e._context.bezierCurveTo(r+l,a+l*t,i-l,s-l*n,i,s)}function $p(e){this._context=e}$p.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Hd(this,this._t0,JB(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Hd(this,JB(this,n=ZB(this,e,t)),n);break;default:Hd(this,this._t0,n=ZB(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function ZW(e){this._context=new JW(e)}(ZW.prototype=Object.create($p.prototype)).point=function(e,t){$p.prototype.point.call(this,t,e)};function JW(e){this._context=e}JW.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,a,i){this._context.bezierCurveTo(t,e,r,n,i,a)}};function GH(e){return new $p(e)}function KH(e){return new ZW(e)}function eA(e){this._context=e}eA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=ex(e),a=ex(t),i=0,s=1;s<n;++i,++s)this._context.bezierCurveTo(r[0][i],a[0][i],r[1][i],a[1][i],e[s],t[s]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function ex(e){var t,n=e.length-1,r,a=new Array(n),i=new Array(n),s=new Array(n);for(a[0]=0,i[0]=2,s[0]=e[0]+2*e[1],t=1;t<n-1;++t)a[t]=1,i[t]=4,s[t]=4*e[t]+2*e[t+1];for(a[n-1]=2,i[n-1]=7,s[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=a[t]/i[t-1],i[t]-=r,s[t]-=r*s[t-1];for(a[n-1]=s[n-1]/i[n-1],t=n-2;t>=0;--t)a[t]=(s[t]-a[t+1])/i[t];for(i[n-1]=(e[n]+a[n-1])/2,t=0;t<n-1;++t)i[t]=2*e[t+1]-a[t+1];return[a,i]}function QH(e){return new eA(e)}function Qc(e,t){this._context=e,this._t=t}Qc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function YH(e){return new Qc(e,.5)}function XH(e){return new Qc(e,0)}function ZH(e){return new Qc(e,1)}function hi(e,t){if((s=e.length)>1)for(var n=1,r,a,i=e[t[0]],s,l=i.length;n<s;++n)for(a=i,i=e[t[n]],r=0;r<l;++r)i[r][1]+=i[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function Gv(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function JH(e,t){return e[t]}function ej(e){const t=[];return t.key=e,t}function tj(){var e=at([]),t=Gv,n=hi,r=JH;function a(i){var s=Array.from(e.apply(this,arguments),ej),l,c=s.length,f=-1,h;for(const d of i)for(l=0,++f;l<c;++l)(s[l][f]=[0,+r(d,s[l].key,f,i)]).data=d;for(l=0,h=Ay(t(s));l<c;++l)s[h[l]].index=l;return n(s,h),s}return a.keys=function(i){return arguments.length?(e=typeof i=="function"?i:at(Array.from(i)),a):e},a.value=function(i){return arguments.length?(r=typeof i=="function"?i:at(+i),a):r},a.order=function(i){return arguments.length?(t=i==null?Gv:typeof i=="function"?i:at(Array.from(i)),a):t},a.offset=function(i){return arguments.length?(n=i??hi,a):n},a}function nj(e,t){if((r=e.length)>0){for(var n,r,a=0,i=e[0].length,s;a<i;++a){for(s=n=0;n<r;++n)s+=e[n][a][1]||0;if(s)for(n=0;n<r;++n)e[n][a][1]/=s}hi(e,t)}}function rj(e,t){if((a=e.length)>0){for(var n=0,r=e[t[0]],a,i=r.length;n<i;++n){for(var s=0,l=0;s<a;++s)l+=e[s][n][1]||0;r[n][1]+=r[n][0]=-l/2}hi(e,t)}}function aj(e,t){if(!(!((s=e.length)>0)||!((i=(a=e[t[0]]).length)>0))){for(var n=0,r=1,a,i,s;r<i;++r){for(var l=0,c=0,f=0;l<s;++l){for(var h=e[t[l]],d=h[r][1]||0,v=h[r-1][1]||0,y=(d-v)/2,x=0;x<l;++x){var I=e[t[x]],b=I[r][1]||0,S=I[r-1][1]||0;y+=b-S}c+=d,f+=y*d}a[r-1][1]+=a[r-1][0]=n,c&&(n-=f/c)}a[r-1][1]+=a[r-1][0]=n,hi(e,t)}}function ds(e){"@babel/helpers - typeof";return ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ds(e)}var oj=["type","size","sizeType"];function Kv(){return Kv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kv.apply(this,arguments)}function tx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function nx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tx(Object(n),!0).forEach(function(r){ij(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ij(e,t,n){return t=uj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uj(e){var t=sj(e,"string");return ds(t)=="symbol"?t:t+""}function sj(e,t){if(ds(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lj(e,t){if(e==null)return{};var n=pj(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var tA={symbolCircle:_y,symbolCross:CH,symbolDiamond:EH,symbolSquare:NH,symbolStar:jH,symbolTriangle:DH,symbolWye:LH},cj=Math.PI/180,fj=function(t){var n="symbol".concat(Vc(t));return tA[n]||_y},dj=function(t,n,r){if(n==="area")return t;switch(r){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var a=18*cj;return 1.25*t*t*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},hj=function(t,n){tA["symbol".concat(Vc(t))]=n},Yc=function(t){var n=t.type,r=n===void 0?"circle":n,a=t.size,i=a===void 0?64:a,s=t.sizeType,l=s===void 0?"area":s,c=lj(t,oj),f=nx(nx({},c),{},{type:r,size:i,sizeType:l}),h=function(){var b=fj(r),S=FH().type(b).size(dj(i,l,r));return S()},d=f.className,v=f.cx,y=f.cy,x=We(f,!0);return v===+v&&y===+y&&i===+i?R.createElement("path",Kv({},x,{className:He("recharts-symbols",d),transform:"translate(".concat(v,", ").concat(y,")"),d:h()})):null};Yc.registerSymbol=hj;function mi(e){"@babel/helpers - typeof";return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mi(e)}function Qv(){return Qv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qv.apply(this,arguments)}function rx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function mj(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rx(Object(n),!0).forEach(function(r){hs(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vj(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gj(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,rA(r.key),r)}}function yj(e,t,n){return t&&gj(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function bj(e,t,n){return t=Lp(t),Ij(e,nA()?Reflect.construct(t,n||[],Lp(e).constructor):t.apply(e,n))}function Ij(e,t){if(t&&(mi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Bj(e)}function Bj(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(nA=function(){return!!e})()}function Lp(e){return Lp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Lp(e)}function xj(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yv(e,t)}function Yv(e,t){return Yv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yv(e,t)}function hs(e,t,n){return t=rA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rA(e){var t=wj(e,"string");return mi(t)=="symbol"?t:t+""}function wj(e,t){if(mi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Ln=32,My=(function(e){function t(){return vj(this,t),bj(this,t,arguments)}return xj(t,e),yj(t,[{key:"renderIcon",value:function(r){var a=this.props.inactiveColor,i=Ln/2,s=Ln/6,l=Ln/3,c=r.inactive?a:r.color;if(r.type==="plainline")return R.createElement("line",{strokeWidth:4,fill:"none",stroke:c,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:i,x2:Ln,y2:i,className:"recharts-legend-icon"});if(r.type==="line")return R.createElement("path",{strokeWidth:4,fill:"none",stroke:c,d:"M0,".concat(i,"h").concat(l,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(2*l,",").concat(i,`
            H`).concat(Ln,"M").concat(2*l,",").concat(i,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(l,",").concat(i),className:"recharts-legend-icon"});if(r.type==="rect")return R.createElement("path",{stroke:"none",fill:c,d:"M0,".concat(Ln/8,"h").concat(Ln,"v").concat(Ln*3/4,"h").concat(-Ln,"z"),className:"recharts-legend-icon"});if(R.isValidElement(r.legendIcon)){var f=mj({},r);return delete f.legendIcon,R.cloneElement(r.legendIcon,f)}return R.createElement(Yc,{fill:c,cx:i,cy:i,size:Ln,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,a=this.props,i=a.payload,s=a.iconSize,l=a.layout,c=a.formatter,f=a.inactiveColor,h={x:0,y:0,width:Ln,height:Ln},d={display:l==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return i.map(function(y,x){var I=y.formatter||c,b=He(hs(hs({"recharts-legend-item":!0},"legend-item-".concat(x),!0),"inactive",y.inactive));if(y.type==="none")return null;var S=ke(y.value)?null:y.value;sr(!ke(y.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var W=y.inactive?f:y.color;return R.createElement("li",Qv({className:b,style:d,key:"legend-item-".concat(x)},Na(r.props,y,x)),R.createElement(Fv,{width:s,height:s,viewBox:h,style:v},r.renderIcon(y)),R.createElement("span",{className:"recharts-legend-item-text",style:{color:W}},I?I(S,y,x):S))})}},{key:"render",value:function(){var r=this.props,a=r.payload,i=r.layout,s=r.align;if(!a||!a.length)return null;var l={padding:0,margin:0,textAlign:i==="horizontal"?s:"left"};return R.createElement("ul",{className:"recharts-default-legend",style:l},this.renderItems())}}])})(X.PureComponent);hs(My,"displayName","Legend");hs(My,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var jd,ax;function Pj(){if(ax)return jd;ax=1;var e=qc();function t(){this.__data__=new e,this.size=0}return jd=t,jd}var Dd,ox;function Sj(){if(ox)return Dd;ox=1;function e(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r}return Dd=e,Dd}var $d,ix;function Wj(){if(ix)return $d;ix=1;function e(t){return this.__data__.get(t)}return $d=e,$d}var Ld,ux;function Aj(){if(ux)return Ld;ux=1;function e(t){return this.__data__.has(t)}return Ld=e,Ld}var Fd,sx;function _j(){if(sx)return Fd;sx=1;var e=qc(),t=Iy(),n=By(),r=200;function a(i,s){var l=this.__data__;if(l instanceof e){var c=l.__data__;if(!t||c.length<r-1)return c.push([i,s]),this.size=++l.size,this;l=this.__data__=new n(c)}return l.set(i,s),this.size=l.size,this}return Fd=a,Fd}var qd,lx;function aA(){if(lx)return qd;lx=1;var e=qc(),t=Pj(),n=Sj(),r=Wj(),a=Aj(),i=_j();function s(l){var c=this.__data__=new e(l);this.size=c.size}return s.prototype.clear=t,s.prototype.delete=n,s.prototype.get=r,s.prototype.has=a,s.prototype.set=i,qd=s,qd}var zd,px;function Mj(){if(px)return zd;px=1;var e="__lodash_hash_undefined__";function t(n){return this.__data__.set(n,e),this}return zd=t,zd}var Ud,cx;function Oj(){if(cx)return Ud;cx=1;function e(t){return this.__data__.has(t)}return Ud=e,Ud}var Vd,fx;function oA(){if(fx)return Vd;fx=1;var e=By(),t=Mj(),n=Oj();function r(a){var i=-1,s=a==null?0:a.length;for(this.__data__=new e;++i<s;)this.add(a[i])}return r.prototype.add=r.prototype.push=t,r.prototype.has=n,Vd=r,Vd}var Gd,dx;function iA(){if(dx)return Gd;dx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(n(t[r],r,t))return!0;return!1}return Gd=e,Gd}var Kd,hx;function uA(){if(hx)return Kd;hx=1;function e(t,n){return t.has(n)}return Kd=e,Kd}var Qd,mx;function sA(){if(mx)return Qd;mx=1;var e=oA(),t=iA(),n=uA(),r=1,a=2;function i(s,l,c,f,h,d){var v=c&r,y=s.length,x=l.length;if(y!=x&&!(v&&x>y))return!1;var I=d.get(s),b=d.get(l);if(I&&b)return I==l&&b==s;var S=-1,W=!0,A=c&a?new e:void 0;for(d.set(s,l),d.set(l,s);++S<y;){var O=s[S],w=l[S];if(f)var _=v?f(w,O,S,l,s,d):f(O,w,S,s,l,d);if(_!==void 0){if(_)continue;W=!1;break}if(A){if(!t(l,function(E,P){if(!n(A,P)&&(O===E||h(O,E,c,f,d)))return A.push(P)})){W=!1;break}}else if(!(O===w||h(O,w,c,f,d))){W=!1;break}}return d.delete(s),d.delete(l),W}return Qd=i,Qd}var Yd,vx;function Cj(){if(vx)return Yd;vx=1;var e=Wr(),t=e.Uint8Array;return Yd=t,Yd}var Xd,gx;function kj(){if(gx)return Xd;gx=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a,i){r[++n]=[i,a]}),r}return Xd=e,Xd}var Zd,yx;function Oy(){if(yx)return Zd;yx=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a){r[++n]=a}),r}return Zd=e,Zd}var Jd,bx;function Ej(){if(bx)return Jd;bx=1;var e=Ks(),t=Cj(),n=by(),r=sA(),a=kj(),i=Oy(),s=1,l=2,c="[object Boolean]",f="[object Date]",h="[object Error]",d="[object Map]",v="[object Number]",y="[object RegExp]",x="[object Set]",I="[object String]",b="[object Symbol]",S="[object ArrayBuffer]",W="[object DataView]",A=e?e.prototype:void 0,O=A?A.valueOf:void 0;function w(_,E,P,C,T,j,N){switch(P){case W:if(_.byteLength!=E.byteLength||_.byteOffset!=E.byteOffset)return!1;_=_.buffer,E=E.buffer;case S:return!(_.byteLength!=E.byteLength||!j(new t(_),new t(E)));case c:case f:case v:return n(+_,+E);case h:return _.name==E.name&&_.message==E.message;case y:case I:return _==E+"";case d:var $=a;case x:var V=C&s;if($||($=i),_.size!=E.size&&!V)return!1;var q=N.get(_);if(q)return q==E;C|=l,N.set(_,E);var G=r($(_),$(E),C,T,j,N);return N.delete(_),G;case b:if(O)return O.call(_)==O.call(E)}return!1}return Jd=w,Jd}var eh,Ix;function lA(){if(Ix)return eh;Ix=1;function e(t,n){for(var r=-1,a=n.length,i=t.length;++r<a;)t[i+r]=n[r];return t}return eh=e,eh}var th,Bx;function Nj(){if(Bx)return th;Bx=1;var e=lA(),t=yn();function n(r,a,i){var s=a(r);return t(r)?s:e(s,i(r))}return th=n,th}var nh,xx;function Tj(){if(xx)return nh;xx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,i=0,s=[];++r<a;){var l=t[r];n(l,r,t)&&(s[i++]=l)}return s}return nh=e,nh}var rh,wx;function Rj(){if(wx)return rh;wx=1;function e(){return[]}return rh=e,rh}var ah,Px;function Hj(){if(Px)return ah;Px=1;var e=Tj(),t=Rj(),n=Object.prototype,r=n.propertyIsEnumerable,a=Object.getOwnPropertySymbols,i=a?function(s){return s==null?[]:(s=Object(s),e(a(s),function(l){return r.call(s,l)}))}:t;return ah=i,ah}var oh,Sx;function jj(){if(Sx)return oh;Sx=1;function e(t,n){for(var r=-1,a=Array(t);++r<t;)a[r]=n(r);return a}return oh=e,oh}var ih,Wx;function Dj(){if(Wx)return ih;Wx=1;var e=Yr(),t=Xr(),n="[object Arguments]";function r(a){return t(a)&&e(a)==n}return ih=r,ih}var uh,Ax;function Cy(){if(Ax)return uh;Ax=1;var e=Dj(),t=Xr(),n=Object.prototype,r=n.hasOwnProperty,a=n.propertyIsEnumerable,i=e((function(){return arguments})())?e:function(s){return t(s)&&r.call(s,"callee")&&!a.call(s,"callee")};return uh=i,uh}var es={exports:{}},sh,_x;function $j(){if(_x)return sh;_x=1;function e(){return!1}return sh=e,sh}es.exports;var Mx;function pA(){return Mx||(Mx=1,(function(e,t){var n=Wr(),r=$j(),a=t&&!t.nodeType&&t,i=a&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===a,l=s?n.Buffer:void 0,c=l?l.isBuffer:void 0,f=c||r;e.exports=f})(es,es.exports)),es.exports}var lh,Ox;function ky(){if(Ox)return lh;Ox=1;var e=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function n(r,a){var i=typeof r;return a=a??e,!!a&&(i=="number"||i!="symbol"&&t.test(r))&&r>-1&&r%1==0&&r<a}return lh=n,lh}var ph,Cx;function Ey(){if(Cx)return ph;Cx=1;var e=9007199254740991;function t(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=e}return ph=t,ph}var ch,kx;function Lj(){if(kx)return ch;kx=1;var e=Yr(),t=Ey(),n=Xr(),r="[object Arguments]",a="[object Array]",i="[object Boolean]",s="[object Date]",l="[object Error]",c="[object Function]",f="[object Map]",h="[object Number]",d="[object Object]",v="[object RegExp]",y="[object Set]",x="[object String]",I="[object WeakMap]",b="[object ArrayBuffer]",S="[object DataView]",W="[object Float32Array]",A="[object Float64Array]",O="[object Int8Array]",w="[object Int16Array]",_="[object Int32Array]",E="[object Uint8Array]",P="[object Uint8ClampedArray]",C="[object Uint16Array]",T="[object Uint32Array]",j={};j[W]=j[A]=j[O]=j[w]=j[_]=j[E]=j[P]=j[C]=j[T]=!0,j[r]=j[a]=j[b]=j[i]=j[S]=j[s]=j[l]=j[c]=j[f]=j[h]=j[d]=j[v]=j[y]=j[x]=j[I]=!1;function N($){return n($)&&t($.length)&&!!j[e($)]}return ch=N,ch}var fh,Ex;function cA(){if(Ex)return fh;Ex=1;function e(t){return function(n){return t(n)}}return fh=e,fh}var ts={exports:{}};ts.exports;var Nx;function Fj(){return Nx||(Nx=1,(function(e,t){var n=OW(),r=t&&!t.nodeType&&t,a=r&&!0&&e&&!e.nodeType&&e,i=a&&a.exports===r,s=i&&n.process,l=(function(){try{var c=a&&a.require&&a.require("util").types;return c||s&&s.binding&&s.binding("util")}catch{}})();e.exports=l})(ts,ts.exports)),ts.exports}var dh,Tx;function fA(){if(Tx)return dh;Tx=1;var e=Lj(),t=cA(),n=Fj(),r=n&&n.isTypedArray,a=r?t(r):e;return dh=a,dh}var hh,Rx;function qj(){if(Rx)return hh;Rx=1;var e=jj(),t=Cy(),n=yn(),r=pA(),a=ky(),i=fA(),s=Object.prototype,l=s.hasOwnProperty;function c(f,h){var d=n(f),v=!d&&t(f),y=!d&&!v&&r(f),x=!d&&!v&&!y&&i(f),I=d||v||y||x,b=I?e(f.length,String):[],S=b.length;for(var W in f)(h||l.call(f,W))&&!(I&&(W=="length"||y&&(W=="offset"||W=="parent")||x&&(W=="buffer"||W=="byteLength"||W=="byteOffset")||a(W,S)))&&b.push(W);return b}return hh=c,hh}var mh,Hx;function zj(){if(Hx)return mh;Hx=1;var e=Object.prototype;function t(n){var r=n&&n.constructor,a=typeof r=="function"&&r.prototype||e;return n===a}return mh=t,mh}var vh,jx;function dA(){if(jx)return vh;jx=1;function e(t,n){return function(r){return t(n(r))}}return vh=e,vh}var gh,Dx;function Uj(){if(Dx)return gh;Dx=1;var e=dA(),t=e(Object.keys,Object);return gh=t,gh}var yh,$x;function Vj(){if($x)return yh;$x=1;var e=zj(),t=Uj(),n=Object.prototype,r=n.hasOwnProperty;function a(i){if(!e(i))return t(i);var s=[];for(var l in Object(i))r.call(i,l)&&l!="constructor"&&s.push(l);return s}return yh=a,yh}var bh,Lx;function Ys(){if(Lx)return bh;Lx=1;var e=yy(),t=Ey();function n(r){return r!=null&&t(r.length)&&!e(r)}return bh=n,bh}var Ih,Fx;function Xc(){if(Fx)return Ih;Fx=1;var e=qj(),t=Vj(),n=Ys();function r(a){return n(a)?e(a):t(a)}return Ih=r,Ih}var Bh,qx;function Gj(){if(qx)return Bh;qx=1;var e=Nj(),t=Hj(),n=Xc();function r(a){return e(a,n,t)}return Bh=r,Bh}var xh,zx;function Kj(){if(zx)return xh;zx=1;var e=Gj(),t=1,n=Object.prototype,r=n.hasOwnProperty;function a(i,s,l,c,f,h){var d=l&t,v=e(i),y=v.length,x=e(s),I=x.length;if(y!=I&&!d)return!1;for(var b=y;b--;){var S=v[b];if(!(d?S in s:r.call(s,S)))return!1}var W=h.get(i),A=h.get(s);if(W&&A)return W==s&&A==i;var O=!0;h.set(i,s),h.set(s,i);for(var w=d;++b<y;){S=v[b];var _=i[S],E=s[S];if(c)var P=d?c(E,_,S,s,i,h):c(_,E,S,i,s,h);if(!(P===void 0?_===E||f(_,E,l,c,h):P)){O=!1;break}w||(w=S=="constructor")}if(O&&!w){var C=i.constructor,T=s.constructor;C!=T&&"constructor"in i&&"constructor"in s&&!(typeof C=="function"&&C instanceof C&&typeof T=="function"&&T instanceof T)&&(O=!1)}return h.delete(i),h.delete(s),O}return xh=a,xh}var wh,Ux;function Qj(){if(Ux)return wh;Ux=1;var e=Bo(),t=Wr(),n=e(t,"DataView");return wh=n,wh}var Ph,Vx;function Yj(){if(Vx)return Ph;Vx=1;var e=Bo(),t=Wr(),n=e(t,"Promise");return Ph=n,Ph}var Sh,Gx;function hA(){if(Gx)return Sh;Gx=1;var e=Bo(),t=Wr(),n=e(t,"Set");return Sh=n,Sh}var Wh,Kx;function Xj(){if(Kx)return Wh;Kx=1;var e=Bo(),t=Wr(),n=e(t,"WeakMap");return Wh=n,Wh}var Ah,Qx;function Zj(){if(Qx)return Ah;Qx=1;var e=Qj(),t=Iy(),n=Yj(),r=hA(),a=Xj(),i=Yr(),s=CW(),l="[object Map]",c="[object Object]",f="[object Promise]",h="[object Set]",d="[object WeakMap]",v="[object DataView]",y=s(e),x=s(t),I=s(n),b=s(r),S=s(a),W=i;return(e&&W(new e(new ArrayBuffer(1)))!=v||t&&W(new t)!=l||n&&W(n.resolve())!=f||r&&W(new r)!=h||a&&W(new a)!=d)&&(W=function(A){var O=i(A),w=O==c?A.constructor:void 0,_=w?s(w):"";if(_)switch(_){case y:return v;case x:return l;case I:return f;case b:return h;case S:return d}return O}),Ah=W,Ah}var _h,Yx;function Jj(){if(Yx)return _h;Yx=1;var e=aA(),t=sA(),n=Ej(),r=Kj(),a=Zj(),i=yn(),s=pA(),l=fA(),c=1,f="[object Arguments]",h="[object Array]",d="[object Object]",v=Object.prototype,y=v.hasOwnProperty;function x(I,b,S,W,A,O){var w=i(I),_=i(b),E=w?h:a(I),P=_?h:a(b);E=E==f?d:E,P=P==f?d:P;var C=E==d,T=P==d,j=E==P;if(j&&s(I)){if(!s(b))return!1;w=!0,C=!1}if(j&&!C)return O||(O=new e),w||l(I)?t(I,b,S,W,A,O):n(I,b,E,S,W,A,O);if(!(S&c)){var N=C&&y.call(I,"__wrapped__"),$=T&&y.call(b,"__wrapped__");if(N||$){var V=N?I.value():I,q=$?b.value():b;return O||(O=new e),A(V,q,S,W,O)}}return j?(O||(O=new e),r(I,b,S,W,A,O)):!1}return _h=x,_h}var Mh,Xx;function Ny(){if(Xx)return Mh;Xx=1;var e=Jj(),t=Xr();function n(r,a,i,s,l){return r===a?!0:r==null||a==null||!t(r)&&!t(a)?r!==r&&a!==a:e(r,a,i,s,n,l)}return Mh=n,Mh}var Oh,Zx;function eD(){if(Zx)return Oh;Zx=1;var e=aA(),t=Ny(),n=1,r=2;function a(i,s,l,c){var f=l.length,h=f,d=!c;if(i==null)return!h;for(i=Object(i);f--;){var v=l[f];if(d&&v[2]?v[1]!==i[v[0]]:!(v[0]in i))return!1}for(;++f<h;){v=l[f];var y=v[0],x=i[y],I=v[1];if(d&&v[2]){if(x===void 0&&!(y in i))return!1}else{var b=new e;if(c)var S=c(x,I,y,i,s,b);if(!(S===void 0?t(I,x,n|r,c,b):S))return!1}}return!0}return Oh=a,Oh}var Ch,Jx;function mA(){if(Jx)return Ch;Jx=1;var e=Ha();function t(n){return n===n&&!e(n)}return Ch=t,Ch}var kh,ew;function tD(){if(ew)return kh;ew=1;var e=mA(),t=Xc();function n(r){for(var a=t(r),i=a.length;i--;){var s=a[i],l=r[s];a[i]=[s,l,e(l)]}return a}return kh=n,kh}var Eh,tw;function vA(){if(tw)return Eh;tw=1;function e(t,n){return function(r){return r==null?!1:r[t]===n&&(n!==void 0||t in Object(r))}}return Eh=e,Eh}var Nh,nw;function nD(){if(nw)return Nh;nw=1;var e=eD(),t=tD(),n=vA();function r(a){var i=t(a);return i.length==1&&i[0][2]?n(i[0][0],i[0][1]):function(s){return s===a||e(s,a,i)}}return Nh=r,Nh}var Th,rw;function rD(){if(rw)return Th;rw=1;function e(t,n){return t!=null&&n in Object(t)}return Th=e,Th}var Rh,aw;function aD(){if(aw)return Rh;aw=1;var e=NW(),t=Cy(),n=yn(),r=ky(),a=Ey(),i=Uc();function s(l,c,f){c=e(c,l);for(var h=-1,d=c.length,v=!1;++h<d;){var y=i(c[h]);if(!(v=l!=null&&f(l,y)))break;l=l[y]}return v||++h!=d?v:(d=l==null?0:l.length,!!d&&a(d)&&r(y,d)&&(n(l)||t(l)))}return Rh=s,Rh}var Hh,ow;function oD(){if(ow)return Hh;ow=1;var e=rD(),t=aD();function n(r,a){return r!=null&&t(r,a,e)}return Hh=n,Hh}var jh,iw;function iD(){if(iw)return jh;iw=1;var e=Ny(),t=TW(),n=oD(),r=gy(),a=mA(),i=vA(),s=Uc(),l=1,c=2;function f(h,d){return r(h)&&a(d)?i(s(h),d):function(v){var y=t(v,h);return y===void 0&&y===d?n(v,h):e(d,y,l|c)}}return jh=f,jh}var Dh,uw;function Xi(){if(uw)return Dh;uw=1;function e(t){return t}return Dh=e,Dh}var $h,sw;function uD(){if(sw)return $h;sw=1;function e(t){return function(n){return n==null?void 0:n[t]}}return $h=e,$h}var Lh,lw;function sD(){if(lw)return Lh;lw=1;var e=wy();function t(n){return function(r){return e(r,n)}}return Lh=t,Lh}var Fh,pw;function lD(){if(pw)return Fh;pw=1;var e=uD(),t=sD(),n=gy(),r=Uc();function a(i){return n(i)?e(r(i)):t(i)}return Fh=a,Fh}var qh,cw;function Ar(){if(cw)return qh;cw=1;var e=nD(),t=iD(),n=Xi(),r=yn(),a=lD();function i(s){return typeof s=="function"?s:s==null?n:typeof s=="object"?r(s)?t(s[0],s[1]):e(s):a(s)}return qh=i,qh}var zh,fw;function gA(){if(fw)return zh;fw=1;function e(t,n,r,a){for(var i=t.length,s=r+(a?1:-1);a?s--:++s<i;)if(n(t[s],s,t))return s;return-1}return zh=e,zh}var Uh,dw;function pD(){if(dw)return Uh;dw=1;function e(t){return t!==t}return Uh=e,Uh}var Vh,hw;function cD(){if(hw)return Vh;hw=1;function e(t,n,r){for(var a=r-1,i=t.length;++a<i;)if(t[a]===n)return a;return-1}return Vh=e,Vh}var Gh,mw;function fD(){if(mw)return Gh;mw=1;var e=gA(),t=pD(),n=cD();function r(a,i,s){return i===i?n(a,i,s):e(a,t,s)}return Gh=r,Gh}var Kh,vw;function dD(){if(vw)return Kh;vw=1;var e=fD();function t(n,r){var a=n==null?0:n.length;return!!a&&e(n,r,0)>-1}return Kh=t,Kh}var Qh,gw;function hD(){if(gw)return Qh;gw=1;function e(t,n,r){for(var a=-1,i=t==null?0:t.length;++a<i;)if(r(n,t[a]))return!0;return!1}return Qh=e,Qh}var Yh,yw;function mD(){if(yw)return Yh;yw=1;function e(){}return Yh=e,Yh}var Xh,bw;function vD(){if(bw)return Xh;bw=1;var e=hA(),t=mD(),n=Oy(),r=1/0,a=e&&1/n(new e([,-0]))[1]==r?function(i){return new e(i)}:t;return Xh=a,Xh}var Zh,Iw;function gD(){if(Iw)return Zh;Iw=1;var e=oA(),t=dD(),n=hD(),r=uA(),a=vD(),i=Oy(),s=200;function l(c,f,h){var d=-1,v=t,y=c.length,x=!0,I=[],b=I;if(h)x=!1,v=n;else if(y>=s){var S=f?null:a(c);if(S)return i(S);x=!1,v=r,b=new e}else b=f?[]:I;e:for(;++d<y;){var W=c[d],A=f?f(W):W;if(W=h||W!==0?W:0,x&&A===A){for(var O=b.length;O--;)if(b[O]===A)continue e;f&&b.push(A),I.push(W)}else v(b,A,h)||(b!==I&&b.push(A),I.push(W))}return I}return Zh=l,Zh}var Jh,Bw;function yD(){if(Bw)return Jh;Bw=1;var e=Ar(),t=gD();function n(r,a){return r&&r.length?t(r,e(a,2)):[]}return Jh=n,Jh}var bD=yD();const xw=Xe(bD);function yA(e,t,n){return t===!0?xw(e,n):ke(t)?xw(e,t):e}function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(e)}var ID=["ref"];function ww(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Hr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ww(Object(n),!0).forEach(function(r){Zc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ww(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BD(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pw(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,IA(r.key),r)}}function xD(e,t,n){return t&&Pw(e.prototype,t),n&&Pw(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function wD(e,t,n){return t=Fp(t),PD(e,bA()?Reflect.construct(t,n||[],Fp(e).constructor):t.apply(e,n))}function PD(e,t){if(t&&(vi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return SD(e)}function SD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bA=function(){return!!e})()}function Fp(e){return Fp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Fp(e)}function WD(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Xv(e,t)}function Xv(e,t){return Xv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xv(e,t)}function Zc(e,t,n){return t=IA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function IA(e){var t=AD(e,"string");return vi(t)=="symbol"?t:t+""}function AD(e,t){if(vi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function _D(e,t){if(e==null)return{};var n=MD(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function MD(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function OD(e){return e.value}function CD(e,t){if(R.isValidElement(e))return R.cloneElement(e,t);if(typeof e=="function")return R.createElement(e,t);t.ref;var n=_D(t,ID);return R.createElement(My,n)}var Sw=1,Oa=(function(e){function t(){var n;BD(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=wD(this,t,[].concat(a)),Zc(n,"lastBoundingBox",{width:-1,height:-1}),n}return WD(t,e),xD(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>Sw||Math.abs(a.height-this.lastBoundingBox.height)>Sw)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,r&&r(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?Hr({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var a=this.props,i=a.layout,s=a.align,l=a.verticalAlign,c=a.margin,f=a.chartWidth,h=a.chartHeight,d,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(s==="center"&&i==="vertical"){var y=this.getBBoxSnapshot();d={left:((f||0)-y.width)/2}}else d=s==="right"?{right:c&&c.right||0}:{left:c&&c.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(l==="middle"){var x=this.getBBoxSnapshot();v={top:((h||0)-x.height)/2}}else v=l==="bottom"?{bottom:c&&c.bottom||0}:{top:c&&c.top||0};return Hr(Hr({},d),v)}},{key:"render",value:function(){var r=this,a=this.props,i=a.content,s=a.width,l=a.height,c=a.wrapperStyle,f=a.payloadUniqBy,h=a.payload,d=Hr(Hr({position:"absolute",width:s||"auto",height:l||"auto"},this.getDefaultPosition(c)),c);return R.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(y){r.wrapperNode=y}},CD(i,Hr(Hr({},this.props),{},{payload:yA(h,f,OD)})))}}],[{key:"getWithHeight",value:function(r,a){var i=Hr(Hr({},this.defaultProps),r.props),s=i.layout;return s==="vertical"&&le(r.props.height)?{height:r.props.height}:s==="horizontal"?{width:r.props.width||a}:null}}])})(X.PureComponent);Zc(Oa,"displayName","Legend");Zc(Oa,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var em,Ww;function kD(){if(Ww)return em;Ww=1;var e=Ks(),t=Cy(),n=yn(),r=e?e.isConcatSpreadable:void 0;function a(i){return n(i)||t(i)||!!(r&&i&&i[r])}return em=a,em}var tm,Aw;function BA(){if(Aw)return tm;Aw=1;var e=lA(),t=kD();function n(r,a,i,s,l){var c=-1,f=r.length;for(i||(i=t),l||(l=[]);++c<f;){var h=r[c];a>0&&i(h)?a>1?n(h,a-1,i,s,l):e(l,h):s||(l[l.length]=h)}return l}return tm=n,tm}var nm,_w;function ED(){if(_w)return nm;_w=1;function e(t){return function(n,r,a){for(var i=-1,s=Object(n),l=a(n),c=l.length;c--;){var f=l[t?c:++i];if(r(s[f],f,s)===!1)break}return n}}return nm=e,nm}var rm,Mw;function ND(){if(Mw)return rm;Mw=1;var e=ED(),t=e();return rm=t,rm}var am,Ow;function xA(){if(Ow)return am;Ow=1;var e=ND(),t=Xc();function n(r,a){return r&&e(r,a,t)}return am=n,am}var om,Cw;function TD(){if(Cw)return om;Cw=1;var e=Ys();function t(n,r){return function(a,i){if(a==null)return a;if(!e(a))return n(a,i);for(var s=a.length,l=r?s:-1,c=Object(a);(r?l--:++l<s)&&i(c[l],l,c)!==!1;);return a}}return om=t,om}var im,kw;function Ty(){if(kw)return im;kw=1;var e=xA(),t=TD(),n=t(e);return im=n,im}var um,Ew;function wA(){if(Ew)return um;Ew=1;var e=Ty(),t=Ys();function n(r,a){var i=-1,s=t(r)?Array(r.length):[];return e(r,function(l,c,f){s[++i]=a(l,c,f)}),s}return um=n,um}var sm,Nw;function RD(){if(Nw)return sm;Nw=1;function e(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].value;return t}return sm=e,sm}var lm,Tw;function HD(){if(Tw)return lm;Tw=1;var e=Ki();function t(n,r){if(n!==r){var a=n!==void 0,i=n===null,s=n===n,l=e(n),c=r!==void 0,f=r===null,h=r===r,d=e(r);if(!f&&!d&&!l&&n>r||l&&c&&h&&!f&&!d||i&&c&&h||!a&&h||!s)return 1;if(!i&&!l&&!d&&n<r||d&&a&&s&&!i&&!l||f&&a&&s||!c&&s||!h)return-1}return 0}return lm=t,lm}var pm,Rw;function jD(){if(Rw)return pm;Rw=1;var e=HD();function t(n,r,a){for(var i=-1,s=n.criteria,l=r.criteria,c=s.length,f=a.length;++i<c;){var h=e(s[i],l[i]);if(h){if(i>=f)return h;var d=a[i];return h*(d=="desc"?-1:1)}}return n.index-r.index}return pm=t,pm}var cm,Hw;function DD(){if(Hw)return cm;Hw=1;var e=xy(),t=wy(),n=Ar(),r=wA(),a=RD(),i=cA(),s=jD(),l=Xi(),c=yn();function f(h,d,v){d.length?d=e(d,function(I){return c(I)?function(b){return t(b,I.length===1?I[0]:I)}:I}):d=[l];var y=-1;d=e(d,i(n));var x=r(h,function(I,b,S){var W=e(d,function(A){return A(I)});return{criteria:W,index:++y,value:I}});return a(x,function(I,b){return s(I,b,v)})}return cm=f,cm}var fm,jw;function $D(){if(jw)return fm;jw=1;function e(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}return fm=e,fm}var dm,Dw;function LD(){if(Dw)return dm;Dw=1;var e=$D(),t=Math.max;function n(r,a,i){return a=t(a===void 0?r.length-1:a,0),function(){for(var s=arguments,l=-1,c=t(s.length-a,0),f=Array(c);++l<c;)f[l]=s[a+l];l=-1;for(var h=Array(a+1);++l<a;)h[l]=s[l];return h[a]=i(f),e(r,this,h)}}return dm=n,dm}var hm,$w;function FD(){if($w)return hm;$w=1;function e(t){return function(){return t}}return hm=e,hm}var mm,Lw;function PA(){if(Lw)return mm;Lw=1;var e=Bo(),t=(function(){try{var n=e(Object,"defineProperty");return n({},"",{}),n}catch{}})();return mm=t,mm}var vm,Fw;function qD(){if(Fw)return vm;Fw=1;var e=FD(),t=PA(),n=Xi(),r=t?function(a,i){return t(a,"toString",{configurable:!0,enumerable:!1,value:e(i),writable:!0})}:n;return vm=r,vm}var gm,qw;function zD(){if(qw)return gm;qw=1;var e=800,t=16,n=Date.now;function r(a){var i=0,s=0;return function(){var l=n(),c=t-(l-s);if(s=l,c>0){if(++i>=e)return arguments[0]}else i=0;return a.apply(void 0,arguments)}}return gm=r,gm}var ym,zw;function UD(){if(zw)return ym;zw=1;var e=qD(),t=zD(),n=t(e);return ym=n,ym}var bm,Uw;function VD(){if(Uw)return bm;Uw=1;var e=Xi(),t=LD(),n=UD();function r(a,i){return n(t(a,i,e),a+"")}return bm=r,bm}var Im,Vw;function Jc(){if(Vw)return Im;Vw=1;var e=by(),t=Ys(),n=ky(),r=Ha();function a(i,s,l){if(!r(l))return!1;var c=typeof s;return(c=="number"?t(l)&&n(s,l.length):c=="string"&&s in l)?e(l[s],i):!1}return Im=a,Im}var Bm,Gw;function GD(){if(Gw)return Bm;Gw=1;var e=BA(),t=DD(),n=VD(),r=Jc(),a=n(function(i,s){if(i==null)return[];var l=s.length;return l>1&&r(i,s[0],s[1])?s=[]:l>2&&r(s[0],s[1],s[2])&&(s=[s[0]]),t(i,e(s,1),[])});return Bm=a,Bm}var KD=GD();const Ry=Xe(KD);function ms(e){"@babel/helpers - typeof";return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ms(e)}function Zv(){return Zv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zv.apply(this,arguments)}function QD(e,t){return JD(e)||ZD(e,t)||XD(e,t)||YD()}function YD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XD(e,t){if(e){if(typeof e=="string")return Kw(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kw(e,t)}}function Kw(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ZD(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function JD(e){if(Array.isArray(e))return e}function Qw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qw(Object(n),!0).forEach(function(r){e5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function e5(e,t,n){return t=t5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t5(e){var t=n5(e,"string");return ms(t)=="symbol"?t:t+""}function n5(e,t){if(ms(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function r5(e){return Array.isArray(e)&&Rt(e[0])&&Rt(e[1])?e.join(" ~ "):e}var a5=function(t){var n=t.separator,r=n===void 0?" : ":n,a=t.contentStyle,i=a===void 0?{}:a,s=t.itemStyle,l=s===void 0?{}:s,c=t.labelStyle,f=c===void 0?{}:c,h=t.payload,d=t.formatter,v=t.itemSorter,y=t.wrapperClassName,x=t.labelClassName,I=t.label,b=t.labelFormatter,S=t.accessibilityLayer,W=S===void 0?!1:S,A=function(){if(h&&h.length){var N={padding:0,margin:0},$=(v?Ry(h,v):h).map(function(V,q){if(V.type==="none")return null;var G=xm({display:"block",paddingTop:4,paddingBottom:4,color:V.color||"#000"},l),K=V.formatter||d||r5,L=V.value,Y=V.name,Q=L,H=Y;if(K&&Q!=null&&H!=null){var F=K(L,Y,V,q,h);if(Array.isArray(F)){var J=QD(F,2);Q=J[0],H=J[1]}else Q=F}return R.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(q),style:G},Rt(H)?R.createElement("span",{className:"recharts-tooltip-item-name"},H):null,Rt(H)?R.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,R.createElement("span",{className:"recharts-tooltip-item-value"},Q),R.createElement("span",{className:"recharts-tooltip-item-unit"},V.unit||""))});return R.createElement("ul",{className:"recharts-tooltip-item-list",style:N},$)}return null},O=xm({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},i),w=xm({margin:0},f),_=!Ee(I),E=_?I:"",P=He("recharts-default-tooltip",y),C=He("recharts-tooltip-label",x);_&&b&&h!==void 0&&h!==null&&(E=b(I,h));var T=W?{role:"status","aria-live":"assertive"}:{};return R.createElement("div",Zv({className:P,style:O},T),R.createElement("p",{className:C,style:w},R.isValidElement(E)?E:"".concat(E)),A())};function vs(e){"@babel/helpers - typeof";return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vs(e)}function vp(e,t,n){return t=o5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o5(e){var t=i5(e,"string");return vs(t)=="symbol"?t:t+""}function i5(e,t){if(vs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var zu="recharts-tooltip-wrapper",u5={visibility:"hidden"};function s5(e){var t=e.coordinate,n=e.translateX,r=e.translateY;return He(zu,vp(vp(vp(vp({},"".concat(zu,"-right"),le(n)&&t&&le(t.x)&&n>=t.x),"".concat(zu,"-left"),le(n)&&t&&le(t.x)&&n<t.x),"".concat(zu,"-bottom"),le(r)&&t&&le(t.y)&&r>=t.y),"".concat(zu,"-top"),le(r)&&t&&le(t.y)&&r<t.y))}function Yw(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.key,a=e.offsetTopLeft,i=e.position,s=e.reverseDirection,l=e.tooltipDimension,c=e.viewBox,f=e.viewBoxDimension;if(i&&le(i[r]))return i[r];var h=n[r]-l-a,d=n[r]+a;if(t[r])return s[r]?h:d;if(s[r]){var v=h,y=c[r];return v<y?Math.max(d,c[r]):Math.max(h,c[r])}var x=d+l,I=c[r]+f;return x>I?Math.max(h,c[r]):Math.max(d,c[r])}function l5(e){var t=e.translateX,n=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(t,"px, ").concat(n,"px, 0)"):"translate(".concat(t,"px, ").concat(n,"px)")}}function p5(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.offsetTopLeft,a=e.position,i=e.reverseDirection,s=e.tooltipBox,l=e.useTranslate3d,c=e.viewBox,f,h,d;return s.height>0&&s.width>0&&n?(h=Yw({allowEscapeViewBox:t,coordinate:n,key:"x",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.width,viewBox:c,viewBoxDimension:c.width}),d=Yw({allowEscapeViewBox:t,coordinate:n,key:"y",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.height,viewBox:c,viewBoxDimension:c.height}),f=l5({translateX:h,translateY:d,useTranslate3d:l})):f=u5,{cssProperties:f,cssClasses:s5({translateX:h,translateY:d,coordinate:n})}}function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gi(e)}function Xw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Zw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xw(Object(n),!0).forEach(function(r){eg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function c5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,WA(r.key),r)}}function d5(e,t,n){return t&&f5(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function h5(e,t,n){return t=qp(t),m5(e,SA()?Reflect.construct(t,n||[],qp(e).constructor):t.apply(e,n))}function m5(e,t){if(t&&(gi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v5(e)}function v5(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function SA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SA=function(){return!!e})()}function qp(e){return qp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},qp(e)}function g5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Jv(e,t)}function Jv(e,t){return Jv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Jv(e,t)}function eg(e,t,n){return t=WA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function WA(e){var t=y5(e,"string");return gi(t)=="symbol"?t:t+""}function y5(e,t){if(gi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Jw=1,b5=(function(e){function t(){var n;c5(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=h5(this,t,[].concat(a)),eg(n,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),eg(n,"handleKeyDown",function(s){if(s.key==="Escape"){var l,c,f,h;n.setState({dismissed:!0,dismissedAtCoordinate:{x:(l=(c=n.props.coordinate)===null||c===void 0?void 0:c.x)!==null&&l!==void 0?l:0,y:(f=(h=n.props.coordinate)===null||h===void 0?void 0:h.y)!==null&&f!==void 0?f:0}})}}),n}return g5(t,e),d5(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>Jw||Math.abs(r.height-this.state.lastBoundingBox.height)>Jw)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,c=a.animationEasing,f=a.children,h=a.coordinate,d=a.hasPayload,v=a.isAnimationActive,y=a.offset,x=a.position,I=a.reverseDirection,b=a.useTranslate3d,S=a.viewBox,W=a.wrapperStyle,A=p5({allowEscapeViewBox:s,coordinate:h,offsetTopLeft:y,position:x,reverseDirection:I,tooltipBox:this.state.lastBoundingBox,useTranslate3d:b,viewBox:S}),O=A.cssClasses,w=A.cssProperties,_=Zw(Zw({transition:v&&i?"transform ".concat(l,"ms ").concat(c):void 0},w),{},{pointerEvents:"none",visibility:!this.state.dismissed&&i&&d?"visible":"hidden",position:"absolute",top:0,left:0},W);return R.createElement("div",{tabIndex:-1,className:O,style:_,ref:function(P){r.wrapperNode=P}},f)}}])})(X.PureComponent),I5=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Zr={isSsr:I5()};function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(e)}function eP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function tP(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eP(Object(n),!0).forEach(function(r){Hy(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function B5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_A(r.key),r)}}function w5(e,t,n){return t&&x5(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function P5(e,t,n){return t=zp(t),S5(e,AA()?Reflect.construct(t,n||[],zp(e).constructor):t.apply(e,n))}function S5(e,t){if(t&&(yi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W5(e)}function W5(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(AA=function(){return!!e})()}function zp(e){return zp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},zp(e)}function A5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&tg(e,t)}function tg(e,t){return tg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},tg(e,t)}function Hy(e,t,n){return t=_A(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _A(e){var t=_5(e,"string");return yi(t)=="symbol"?t:t+""}function _5(e,t){if(yi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function M5(e){return e.dataKey}function O5(e,t){return R.isValidElement(e)?R.cloneElement(e,t):typeof e=="function"?R.createElement(e,t):R.createElement(a5,t)}var Wn=(function(e){function t(){return B5(this,t),P5(this,t,arguments)}return A5(t,e),w5(t,[{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,c=a.animationEasing,f=a.content,h=a.coordinate,d=a.filterNull,v=a.isAnimationActive,y=a.offset,x=a.payload,I=a.payloadUniqBy,b=a.position,S=a.reverseDirection,W=a.useTranslate3d,A=a.viewBox,O=a.wrapperStyle,w=x??[];d&&w.length&&(w=yA(x.filter(function(E){return E.value!=null&&(E.hide!==!0||r.props.includeHidden)}),I,M5));var _=w.length>0;return R.createElement(b5,{allowEscapeViewBox:s,animationDuration:l,animationEasing:c,isAnimationActive:v,active:i,coordinate:h,hasPayload:_,offset:y,position:b,reverseDirection:S,useTranslate3d:W,viewBox:A,wrapperStyle:O},O5(f,tP(tP({},this.props),{},{payload:w})))}}])})(X.PureComponent);Hy(Wn,"displayName","Tooltip");Hy(Wn,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Zr.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var wm,nP;function C5(){if(nP)return wm;nP=1;var e=Wr(),t=function(){return e.Date.now()};return wm=t,wm}var Pm,rP;function k5(){if(rP)return Pm;rP=1;var e=/\s/;function t(n){for(var r=n.length;r--&&e.test(n.charAt(r)););return r}return Pm=t,Pm}var Sm,aP;function E5(){if(aP)return Sm;aP=1;var e=k5(),t=/^\s+/;function n(r){return r&&r.slice(0,e(r)+1).replace(t,"")}return Sm=n,Sm}var Wm,oP;function MA(){if(oP)return Wm;oP=1;var e=E5(),t=Ha(),n=Ki(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;function c(f){if(typeof f=="number")return f;if(n(f))return r;if(t(f)){var h=typeof f.valueOf=="function"?f.valueOf():f;f=t(h)?h+"":h}if(typeof f!="string")return f===0?f:+f;f=e(f);var d=i.test(f);return d||s.test(f)?l(f.slice(2),d?2:8):a.test(f)?r:+f}return Wm=c,Wm}var Am,iP;function N5(){if(iP)return Am;iP=1;var e=Ha(),t=C5(),n=MA(),r="Expected a function",a=Math.max,i=Math.min;function s(l,c,f){var h,d,v,y,x,I,b=0,S=!1,W=!1,A=!0;if(typeof l!="function")throw new TypeError(r);c=n(c)||0,e(f)&&(S=!!f.leading,W="maxWait"in f,v=W?a(n(f.maxWait)||0,c):v,A="trailing"in f?!!f.trailing:A);function O($){var V=h,q=d;return h=d=void 0,b=$,y=l.apply(q,V),y}function w($){return b=$,x=setTimeout(P,c),S?O($):y}function _($){var V=$-I,q=$-b,G=c-V;return W?i(G,v-q):G}function E($){var V=$-I,q=$-b;return I===void 0||V>=c||V<0||W&&q>=v}function P(){var $=t();if(E($))return C($);x=setTimeout(P,_($))}function C($){return x=void 0,A&&h?O($):(h=d=void 0,y)}function T(){x!==void 0&&clearTimeout(x),b=0,h=I=d=x=void 0}function j(){return x===void 0?y:C(t())}function N(){var $=t(),V=E($);if(h=arguments,d=this,I=$,V){if(x===void 0)return w(I);if(W)return clearTimeout(x),x=setTimeout(P,c),O(I)}return x===void 0&&(x=setTimeout(P,c)),y}return N.cancel=T,N.flush=j,N}return Am=s,Am}var _m,uP;function T5(){if(uP)return _m;uP=1;var e=N5(),t=Ha(),n="Expected a function";function r(a,i,s){var l=!0,c=!0;if(typeof a!="function")throw new TypeError(n);return t(s)&&(l="leading"in s?!!s.leading:l,c="trailing"in s?!!s.trailing:c),e(a,i,{leading:l,maxWait:i,trailing:c})}return _m=r,_m}var R5=T5();const OA=Xe(R5);function gs(e){"@babel/helpers - typeof";return gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gs(e)}function sP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function gp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sP(Object(n),!0).forEach(function(r){H5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function H5(e,t,n){return t=j5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j5(e){var t=D5(e,"string");return gs(t)=="symbol"?t:t+""}function D5(e,t){if(gs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(gs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $5(e,t){return z5(e)||q5(e,t)||F5(e,t)||L5()}function L5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F5(e,t){if(e){if(typeof e=="string")return lP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lP(e,t)}}function lP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q5(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function z5(e){if(Array.isArray(e))return e}var jy=X.forwardRef(function(e,t){var n=e.aspect,r=e.initialDimension,a=r===void 0?{width:-1,height:-1}:r,i=e.width,s=i===void 0?"100%":i,l=e.height,c=l===void 0?"100%":l,f=e.minWidth,h=f===void 0?0:f,d=e.minHeight,v=e.maxHeight,y=e.children,x=e.debounce,I=x===void 0?0:x,b=e.id,S=e.className,W=e.onResize,A=e.style,O=A===void 0?{}:A,w=X.useRef(null),_=X.useRef();_.current=W,X.useImperativeHandle(t,function(){return Object.defineProperty(w.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),w.current},configurable:!0})});var E=X.useState({containerWidth:a.width,containerHeight:a.height}),P=$5(E,2),C=P[0],T=P[1],j=X.useCallback(function($,V){T(function(q){var G=Math.round($),K=Math.round(V);return q.containerWidth===G&&q.containerHeight===K?q:{containerWidth:G,containerHeight:K}})},[]);X.useEffect(function(){var $=function(Y){var Q,H=Y[0].contentRect,F=H.width,J=H.height;j(F,J),(Q=_.current)===null||Q===void 0||Q.call(_,F,J)};I>0&&($=OA($,I,{trailing:!0,leading:!1}));var V=new ResizeObserver($),q=w.current.getBoundingClientRect(),G=q.width,K=q.height;return j(G,K),V.observe(w.current),function(){V.disconnect()}},[j,I]);var N=X.useMemo(function(){var $=C.containerWidth,V=C.containerHeight;if($<0||V<0)return null;sr(lo(s)||lo(c),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,s,c),sr(!n||n>0,"The aspect(%s) must be greater than zero.",n);var q=lo(s)?$:s,G=lo(c)?V:c;n&&n>0&&(q?G=q/n:G&&(q=G*n),v&&G>v&&(G=v)),sr(q>0||G>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,q,G,s,c,h,d,n);var K=!Array.isArray(y)&&Ur(y.type).endsWith("Chart");return R.Children.map(y,function(L){return R.isValidElement(L)?X.cloneElement(L,gp({width:q,height:G},K?{style:gp({height:"100%",width:"100%",maxHeight:G,maxWidth:q},L.props.style)}:{})):L})},[n,y,c,v,d,h,C,s]);return R.createElement("div",{id:b?"".concat(b):void 0,className:He("recharts-responsive-container",S),style:gp(gp({},O),{},{width:s,height:c,minWidth:h,minHeight:d,maxHeight:v}),ref:w},N)}),Xs=function(t){return null};Xs.displayName="Cell";function ys(e){"@babel/helpers - typeof";return ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ys(e)}function pP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ng(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pP(Object(n),!0).forEach(function(r){U5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function U5(e,t,n){return t=V5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V5(e){var t=G5(e,"string");return ys(t)=="symbol"?t:t+""}function G5(e,t){if(ys(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ys(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Jo={widthCache:{},cacheCount:0},K5=2e3,Q5={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},cP="recharts_measurement_span";function Y5(e){var t=ng({},e);return Object.keys(t).forEach(function(n){t[n]||delete t[n]}),t}var rs=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||Zr.isSsr)return{width:0,height:0};var r=Y5(n),a=JSON.stringify({text:t,copyStyle:r});if(Jo.widthCache[a])return Jo.widthCache[a];try{var i=document.getElementById(cP);i||(i=document.createElement("span"),i.setAttribute("id",cP),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));var s=ng(ng({},Q5),r);Object.assign(i.style,s),i.textContent="".concat(t);var l=i.getBoundingClientRect(),c={width:l.width,height:l.height};return Jo.widthCache[a]=c,++Jo.cacheCount>K5&&(Jo.cacheCount=0,Jo.widthCache={}),c}catch{return{width:0,height:0}}},X5=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function bs(e){"@babel/helpers - typeof";return bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bs(e)}function Up(e,t){return t$(e)||e$(e,t)||J5(e,t)||Z5()}function Z5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J5(e,t){if(e){if(typeof e=="string")return fP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fP(e,t)}}function fP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function e$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function t$(e){if(Array.isArray(e))return e}function n$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function dP(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a$(r.key),r)}}function r$(e,t,n){return t&&dP(e.prototype,t),n&&dP(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a$(e){var t=o$(e,"string");return bs(t)=="symbol"?t:t+""}function o$(e,t){if(bs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(bs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var hP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,mP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,i$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,u$=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,CA={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},s$=Object.keys(CA),ai="NaN";function l$(e,t){return e*CA[t]}var yp=(function(){function e(t,n){n$(this,e),this.num=t,this.unit=n,this.num=t,this.unit=n,Number.isNaN(t)&&(this.unit=""),n!==""&&!i$.test(n)&&(this.num=NaN,this.unit=""),s$.includes(n)&&(this.num=l$(t,n),this.unit="px")}return r$(e,[{key:"add",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num+n.num,this.unit)}},{key:"subtract",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num-n.num,this.unit)}},{key:"multiply",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num*n.num,this.unit||n.unit)}},{key:"divide",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num/n.num,this.unit||n.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(n){var r,a=(r=u$.exec(n))!==null&&r!==void 0?r:[],i=Up(a,3),s=i[1],l=i[2];return new e(parseFloat(s),l??"")}}])})();function kA(e){if(e.includes(ai))return ai;for(var t=e;t.includes("*")||t.includes("/");){var n,r=(n=hP.exec(t))!==null&&n!==void 0?n:[],a=Up(r,4),i=a[1],s=a[2],l=a[3],c=yp.parse(i??""),f=yp.parse(l??""),h=s==="*"?c.multiply(f):c.divide(f);if(h.isNaN())return ai;t=t.replace(hP,h.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var d,v=(d=mP.exec(t))!==null&&d!==void 0?d:[],y=Up(v,4),x=y[1],I=y[2],b=y[3],S=yp.parse(x??""),W=yp.parse(b??""),A=I==="+"?S.add(W):S.subtract(W);if(A.isNaN())return ai;t=t.replace(mP,A.toString())}return t}var vP=/\(([^()]*)\)/;function p$(e){for(var t=e;t.includes("(");){var n=vP.exec(t),r=Up(n,2),a=r[1];t=t.replace(vP,kA(a))}return t}function c$(e){var t=e.replace(/\s+/g,"");return t=p$(t),t=kA(t),t}function f$(e){try{return c$(e)}catch{return ai}}function Mm(e){var t=f$(e.slice(5,-1));return t===ai?"":t}var d$=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],h$=["dx","dy","angle","className","breakAll"];function rg(){return rg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rg.apply(this,arguments)}function gP(e,t){if(e==null)return{};var n=m$(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function m$(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function yP(e,t){return b$(e)||y$(e,t)||g$(e,t)||v$()}function v$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g$(e,t){if(e){if(typeof e=="string")return bP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bP(e,t)}}function bP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function b$(e){if(Array.isArray(e))return e}var EA=/[ \f\n\r\t\v\u2028\u2029]+/,NA=function(t){var n=t.children,r=t.breakAll,a=t.style;try{var i=[];Ee(n)||(r?i=n.toString().split(""):i=n.toString().split(EA));var s=i.map(function(c){return{word:c,width:rs(c,a).width}}),l=r?0:rs(" ",a).width;return{wordsWithComputedWidth:s,spaceWidth:l}}catch{return null}},I$=function(t,n,r,a,i){var s=t.maxLines,l=t.children,c=t.style,f=t.breakAll,h=le(s),d=l,v=function(){var q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return q.reduce(function(G,K){var L=K.word,Y=K.width,Q=G[G.length-1];if(Q&&(a==null||i||Q.width+Y+r<Number(a)))Q.words.push(L),Q.width+=Y+r;else{var H={words:[L],width:Y};G.push(H)}return G},[])},y=v(n),x=function(q){return q.reduce(function(G,K){return G.width>K.width?G:K})};if(!h)return y;for(var I="…",b=function(q){var G=d.slice(0,q),K=NA({breakAll:f,style:c,children:G+I}).wordsWithComputedWidth,L=v(K),Y=L.length>s||x(L).width>Number(a);return[Y,L]},S=0,W=d.length-1,A=0,O;S<=W&&A<=d.length-1;){var w=Math.floor((S+W)/2),_=w-1,E=b(_),P=yP(E,2),C=P[0],T=P[1],j=b(w),N=yP(j,1),$=N[0];if(!C&&!$&&(S=w+1),C&&$&&(W=w-1),!C&&$){O=T;break}A++}return O||y},IP=function(t){var n=Ee(t)?[]:t.toString().split(EA);return[{words:n}]},B$=function(t){var n=t.width,r=t.scaleToFit,a=t.children,i=t.style,s=t.breakAll,l=t.maxLines;if((n||r)&&!Zr.isSsr){var c,f,h=NA({breakAll:s,children:a,style:i});if(h){var d=h.wordsWithComputedWidth,v=h.spaceWidth;c=d,f=v}else return IP(a);return I$({breakAll:s,children:a,maxLines:l,style:i},c,f,n,r)}return IP(a)},BP="#808080",go=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,i=a===void 0?0:a,s=t.lineHeight,l=s===void 0?"1em":s,c=t.capHeight,f=c===void 0?"0.71em":c,h=t.scaleToFit,d=h===void 0?!1:h,v=t.textAnchor,y=v===void 0?"start":v,x=t.verticalAnchor,I=x===void 0?"end":x,b=t.fill,S=b===void 0?BP:b,W=gP(t,d$),A=X.useMemo(function(){return B$({breakAll:W.breakAll,children:W.children,maxLines:W.maxLines,scaleToFit:d,style:W.style,width:W.width})},[W.breakAll,W.children,W.maxLines,d,W.style,W.width]),O=W.dx,w=W.dy,_=W.angle,E=W.className,P=W.breakAll,C=gP(W,h$);if(!Rt(r)||!Rt(i))return null;var T=r+(le(O)?O:0),j=i+(le(w)?w:0),N;switch(I){case"start":N=Mm("calc(".concat(f,")"));break;case"middle":N=Mm("calc(".concat((A.length-1)/2," * -").concat(l," + (").concat(f," / 2))"));break;default:N=Mm("calc(".concat(A.length-1," * -").concat(l,")"));break}var $=[];if(d){var V=A[0].width,q=W.width;$.push("scale(".concat((le(q)?q/V:1)/V,")"))}return _&&$.push("rotate(".concat(_,", ").concat(T,", ").concat(j,")")),$.length&&(C.transform=$.join(" ")),R.createElement("text",rg({},We(C,!0),{x:T,y:j,className:He("recharts-text",E),textAnchor:y,fill:S.includes("url")?BP:S}),A.map(function(G,K){var L=G.words.join(P?"":" ");return R.createElement("tspan",{x:T,dy:K===0?N:l,key:"".concat(L,"-").concat(K)},L)}))};function Ca(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function x$(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Dy(e){let t,n,r;e.length!==2?(t=Ca,n=(l,c)=>Ca(e(l),c),r=(l,c)=>e(l)-c):(t=e===Ca||e===x$?e:w$,n=e,r=e);function a(l,c,f=0,h=l.length){if(f<h){if(t(c,c)!==0)return h;do{const d=f+h>>>1;n(l[d],c)<0?f=d+1:h=d}while(f<h)}return f}function i(l,c,f=0,h=l.length){if(f<h){if(t(c,c)!==0)return h;do{const d=f+h>>>1;n(l[d],c)<=0?f=d+1:h=d}while(f<h)}return f}function s(l,c,f=0,h=l.length){const d=a(l,c,f,h-1);return d>f&&r(l[d-1],c)>-r(l[d],c)?d-1:d}return{left:a,center:s,right:i}}function w$(){return 0}function TA(e){return e===null?NaN:+e}function*P$(e,t){for(let n of e)n!=null&&(n=+n)>=n&&(yield n)}const S$=Dy(Ca),Zs=S$.right;Dy(TA).center;class xP extends Map{constructor(t,n=_$){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,a]of t)this.set(r,a)}get(t){return super.get(wP(this,t))}has(t){return super.has(wP(this,t))}set(t,n){return super.set(W$(this,t),n)}delete(t){return super.delete(A$(this,t))}}function wP({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function W$({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function A$({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function _$(e){return e!==null&&typeof e=="object"?e.valueOf():e}function M$(e=Ca){if(e===Ca)return RA;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function RA(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const O$=Math.sqrt(50),C$=Math.sqrt(10),k$=Math.sqrt(2);function Vp(e,t,n){const r=(t-e)/Math.max(0,n),a=Math.floor(Math.log10(r)),i=r/Math.pow(10,a),s=i>=O$?10:i>=C$?5:i>=k$?2:1;let l,c,f;return a<0?(f=Math.pow(10,-a)/s,l=Math.round(e*f),c=Math.round(t*f),l/f<e&&++l,c/f>t&&--c,f=-f):(f=Math.pow(10,a)*s,l=Math.round(e/f),c=Math.round(t/f),l*f<e&&++l,c*f>t&&--c),c<l&&.5<=n&&n<2?Vp(e,t,n*2):[l,c,f]}function ag(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[a,i,s]=r?Vp(t,e,n):Vp(e,t,n);if(!(i>=a))return[];const l=i-a+1,c=new Array(l);if(r)if(s<0)for(let f=0;f<l;++f)c[f]=(i-f)/-s;else for(let f=0;f<l;++f)c[f]=(i-f)*s;else if(s<0)for(let f=0;f<l;++f)c[f]=(a+f)/-s;else for(let f=0;f<l;++f)c[f]=(a+f)*s;return c}function og(e,t,n){return t=+t,e=+e,n=+n,Vp(e,t,n)[2]}function ig(e,t,n){t=+t,e=+e,n=+n;const r=t<e,a=r?og(t,e,n):og(e,t,n);return(r?-1:1)*(a<0?1/-a:a)}function PP(e,t){let n;for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);return n}function SP(e,t){let n;for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);return n}function HA(e,t,n=0,r=1/0,a){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(a=a===void 0?RA:M$(a);r>n;){if(r-n>600){const c=r-n+1,f=t-n+1,h=Math.log(c),d=.5*Math.exp(2*h/3),v=.5*Math.sqrt(h*d*(c-d)/c)*(f-c/2<0?-1:1),y=Math.max(n,Math.floor(t-f*d/c+v)),x=Math.min(r,Math.floor(t+(c-f)*d/c+v));HA(e,t,y,x,a)}const i=e[t];let s=n,l=r;for(Uu(e,n,t),a(e[r],i)>0&&Uu(e,n,r);s<l;){for(Uu(e,s,l),++s,--l;a(e[s],i)<0;)++s;for(;a(e[l],i)>0;)--l}a(e[n],i)===0?Uu(e,n,l):(++l,Uu(e,l,r)),l<=t&&(n=l+1),t<=l&&(r=l-1)}return e}function Uu(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function E$(e,t,n){if(e=Float64Array.from(P$(e)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return SP(e);if(t>=1)return PP(e);var r,a=(r-1)*t,i=Math.floor(a),s=PP(HA(e,i).subarray(0,i+1)),l=SP(e.subarray(i+1));return s+(l-s)*(a-i)}}function N$(e,t,n=TA){if(!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,a=(r-1)*t,i=Math.floor(a),s=+n(e[i],i,e),l=+n(e[i+1],i+1,e);return s+(l-s)*(a-i)}}function T$(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(a);++r<a;)i[r]=e+r*n;return i}function Qn(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Jr(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const ug=Symbol("implicit");function $y(){var e=new xP,t=[],n=[],r=ug;function a(i){let s=e.get(i);if(s===void 0){if(r!==ug)return r;e.set(i,s=t.push(i)-1)}return n[s%n.length]}return a.domain=function(i){if(!arguments.length)return t.slice();t=[],e=new xP;for(const s of i)e.has(s)||e.set(s,t.push(s)-1);return a},a.range=function(i){return arguments.length?(n=Array.from(i),a):n.slice()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return $y(t,n).unknown(r)},Qn.apply(a,arguments),a}function Is(){var e=$y().unknown(void 0),t=e.domain,n=e.range,r=0,a=1,i,s,l=!1,c=0,f=0,h=.5;delete e.unknown;function d(){var v=t().length,y=a<r,x=y?a:r,I=y?r:a;i=(I-x)/Math.max(1,v-c+f*2),l&&(i=Math.floor(i)),x+=(I-x-i*(v-c))*h,s=i*(1-c),l&&(x=Math.round(x),s=Math.round(s));var b=T$(v).map(function(S){return x+i*S});return n(y?b.reverse():b)}return e.domain=function(v){return arguments.length?(t(v),d()):t()},e.range=function(v){return arguments.length?([r,a]=v,r=+r,a=+a,d()):[r,a]},e.rangeRound=function(v){return[r,a]=v,r=+r,a=+a,l=!0,d()},e.bandwidth=function(){return s},e.step=function(){return i},e.round=function(v){return arguments.length?(l=!!v,d()):l},e.padding=function(v){return arguments.length?(c=Math.min(1,f=+v),d()):c},e.paddingInner=function(v){return arguments.length?(c=Math.min(1,v),d()):c},e.paddingOuter=function(v){return arguments.length?(f=+v,d()):f},e.align=function(v){return arguments.length?(h=Math.max(0,Math.min(1,v)),d()):h},e.copy=function(){return Is(t(),[r,a]).round(l).paddingInner(c).paddingOuter(f).align(h)},Qn.apply(d(),arguments)}function jA(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return jA(t())},e}function as(){return jA(Is.apply(null,arguments).paddingInner(1))}function Ly(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function DA(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Js(){}var Bs=.7,Gp=1/Bs,pi="\\s*([+-]?\\d+)\\s*",xs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",R$=/^#([0-9a-f]{3,8})$/,H$=new RegExp(`^rgb\\(${pi},${pi},${pi}\\)$`),j$=new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`),D$=new RegExp(`^rgba\\(${pi},${pi},${pi},${xs}\\)$`),$$=new RegExp(`^rgba\\(${xr},${xr},${xr},${xs}\\)$`),L$=new RegExp(`^hsl\\(${xs},${xr},${xr}\\)$`),F$=new RegExp(`^hsla\\(${xs},${xr},${xr},${xs}\\)$`),WP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ly(Js,ws,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:AP,formatHex:AP,formatHex8:q$,formatHsl:z$,formatRgb:_P,toString:_P});function AP(){return this.rgb().formatHex()}function q$(){return this.rgb().formatHex8()}function z$(){return $A(this).formatHsl()}function _P(){return this.rgb().formatRgb()}function ws(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=R$.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?MP(t):n===3?new gn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?bp(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?bp(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=H$.exec(e))?new gn(t[1],t[2],t[3],1):(t=j$.exec(e))?new gn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=D$.exec(e))?bp(t[1],t[2],t[3],t[4]):(t=$$.exec(e))?bp(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=L$.exec(e))?kP(t[1],t[2]/100,t[3]/100,1):(t=F$.exec(e))?kP(t[1],t[2]/100,t[3]/100,t[4]):WP.hasOwnProperty(e)?MP(WP[e]):e==="transparent"?new gn(NaN,NaN,NaN,0):null}function MP(e){return new gn(e>>16&255,e>>8&255,e&255,1)}function bp(e,t,n,r){return r<=0&&(e=t=n=NaN),new gn(e,t,n,r)}function U$(e){return e instanceof Js||(e=ws(e)),e?(e=e.rgb(),new gn(e.r,e.g,e.b,e.opacity)):new gn}function sg(e,t,n,r){return arguments.length===1?U$(e):new gn(e,t,n,r??1)}function gn(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Ly(gn,sg,DA(Js,{brighter(e){return e=e==null?Gp:Math.pow(Gp,e),new gn(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Bs:Math.pow(Bs,e),new gn(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new gn(mo(this.r),mo(this.g),mo(this.b),Kp(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:OP,formatHex:OP,formatHex8:V$,formatRgb:CP,toString:CP}));function OP(){return`#${po(this.r)}${po(this.g)}${po(this.b)}`}function V$(){return`#${po(this.r)}${po(this.g)}${po(this.b)}${po((isNaN(this.opacity)?1:this.opacity)*255)}`}function CP(){const e=Kp(this.opacity);return`${e===1?"rgb(":"rgba("}${mo(this.r)}, ${mo(this.g)}, ${mo(this.b)}${e===1?")":`, ${e})`}`}function Kp(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function mo(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function po(e){return e=mo(e),(e<16?"0":"")+e.toString(16)}function kP(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ur(e,t,n,r)}function $A(e){if(e instanceof ur)return new ur(e.h,e.s,e.l,e.opacity);if(e instanceof Js||(e=ws(e)),!e)return new ur;if(e instanceof ur)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,a=Math.min(t,n,r),i=Math.max(t,n,r),s=NaN,l=i-a,c=(i+a)/2;return l?(t===i?s=(n-r)/l+(n<r)*6:n===i?s=(r-t)/l+2:s=(t-n)/l+4,l/=c<.5?i+a:2-i-a,s*=60):l=c>0&&c<1?0:s,new ur(s,l,c,e.opacity)}function G$(e,t,n,r){return arguments.length===1?$A(e):new ur(e,t,n,r??1)}function ur(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Ly(ur,G$,DA(Js,{brighter(e){return e=e==null?Gp:Math.pow(Gp,e),new ur(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Bs:Math.pow(Bs,e),new ur(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r;return new gn(Om(e>=240?e-240:e+120,a,r),Om(e,a,r),Om(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new ur(EP(this.h),Ip(this.s),Ip(this.l),Kp(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Kp(this.opacity);return`${e===1?"hsl(":"hsla("}${EP(this.h)}, ${Ip(this.s)*100}%, ${Ip(this.l)*100}%${e===1?")":`, ${e})`}`}}));function EP(e){return e=(e||0)%360,e<0?e+360:e}function Ip(e){return Math.max(0,Math.min(1,e||0))}function Om(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Fy=e=>()=>e;function K$(e,t){return function(n){return e+n*t}}function Q$(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function Y$(e){return(e=+e)==1?LA:function(t,n){return n-t?Q$(t,n,e):Fy(isNaN(t)?n:t)}}function LA(e,t){var n=t-e;return n?K$(e,n):Fy(isNaN(e)?t:e)}const NP=(function e(t){var n=Y$(t);function r(a,i){var s=n((a=sg(a)).r,(i=sg(i)).r),l=n(a.g,i.g),c=n(a.b,i.b),f=LA(a.opacity,i.opacity);return function(h){return a.r=s(h),a.g=l(h),a.b=c(h),a.opacity=f(h),a+""}}return r.gamma=e,r})(1);function X$(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),a;return function(i){for(a=0;a<n;++a)r[a]=e[a]*(1-i)+t[a]*i;return r}}function Z$(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function J$(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,a=new Array(r),i=new Array(n),s;for(s=0;s<r;++s)a[s]=Zi(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(l){for(s=0;s<r;++s)i[s]=a[s](l);return i}}function eL(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Qp(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function tL(e,t){var n={},r={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?n[a]=Zi(e[a],t[a]):r[a]=t[a];return function(i){for(a in n)r[a]=n[a](i);return r}}var lg=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Cm=new RegExp(lg.source,"g");function nL(e){return function(){return e}}function rL(e){return function(t){return e(t)+""}}function aL(e,t){var n=lg.lastIndex=Cm.lastIndex=0,r,a,i,s=-1,l=[],c=[];for(e=e+"",t=t+"";(r=lg.exec(e))&&(a=Cm.exec(t));)(i=a.index)>n&&(i=t.slice(n,i),l[s]?l[s]+=i:l[++s]=i),(r=r[0])===(a=a[0])?l[s]?l[s]+=a:l[++s]=a:(l[++s]=null,c.push({i:s,x:Qp(r,a)})),n=Cm.lastIndex;return n<t.length&&(i=t.slice(n),l[s]?l[s]+=i:l[++s]=i),l.length<2?c[0]?rL(c[0].x):nL(t):(t=c.length,function(f){for(var h=0,d;h<t;++h)l[(d=c[h]).i]=d.x(f);return l.join("")})}function Zi(e,t){var n=typeof t,r;return t==null||n==="boolean"?Fy(t):(n==="number"?Qp:n==="string"?(r=ws(t))?(t=r,NP):aL:t instanceof ws?NP:t instanceof Date?eL:Z$(t)?X$:Array.isArray(t)?J$:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?tL:Qp)(e,t)}function qy(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function oL(e,t){t===void 0&&(t=e,e=Zi);for(var n=0,r=t.length-1,a=t[0],i=new Array(r<0?0:r);n<r;)i[n]=e(a,a=t[++n]);return function(s){var l=Math.max(0,Math.min(r-1,Math.floor(s*=r)));return i[l](s-l)}}function iL(e){return function(){return e}}function Yp(e){return+e}var TP=[0,1];function un(e){return e}function pg(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:iL(isNaN(t)?NaN:.5)}function uL(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function sL(e,t,n){var r=e[0],a=e[1],i=t[0],s=t[1];return a<r?(r=pg(a,r),i=n(s,i)):(r=pg(r,a),i=n(i,s)),function(l){return i(r(l))}}function lL(e,t,n){var r=Math.min(e.length,t.length)-1,a=new Array(r),i=new Array(r),s=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<r;)a[s]=pg(e[s],e[s+1]),i[s]=n(t[s],t[s+1]);return function(l){var c=Zs(e,l,1,r)-1;return i[c](a[c](l))}}function el(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function e0(){var e=TP,t=TP,n=Zi,r,a,i,s=un,l,c,f;function h(){var v=Math.min(e.length,t.length);return s!==un&&(s=uL(e[0],e[v-1])),l=v>2?lL:sL,c=f=null,d}function d(v){return v==null||isNaN(v=+v)?i:(c||(c=l(e.map(r),t,n)))(r(s(v)))}return d.invert=function(v){return s(a((f||(f=l(t,e.map(r),Qp)))(v)))},d.domain=function(v){return arguments.length?(e=Array.from(v,Yp),h()):e.slice()},d.range=function(v){return arguments.length?(t=Array.from(v),h()):t.slice()},d.rangeRound=function(v){return t=Array.from(v),n=qy,h()},d.clamp=function(v){return arguments.length?(s=v?!0:un,h()):s!==un},d.interpolate=function(v){return arguments.length?(n=v,h()):n},d.unknown=function(v){return arguments.length?(i=v,d):i},function(v,y){return r=v,a=y,h()}}function zy(){return e0()(un,un)}function pL(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Xp(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function bi(e){return e=Xp(Math.abs(e)),e?e[1]:NaN}function cL(e,t){return function(n,r){for(var a=n.length,i=[],s=0,l=e[0],c=0;a>0&&l>0&&(c+l+1>r&&(l=Math.max(1,r-c)),i.push(n.substring(a-=l,a+l)),!((c+=l+1)>r));)l=e[s=(s+1)%e.length];return i.reverse().join(t)}}function fL(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var dL=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Ps(e){if(!(t=dL.exec(e)))throw new Error("invalid format: "+e);var t;return new Uy({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Ps.prototype=Uy.prototype;function Uy(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Uy.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function hL(e){e:for(var t=e.length,n=1,r=-1,a;n<t;++n)switch(e[n]){case".":r=a=n;break;case"0":r===0&&(r=n),a=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Zp;function mL(e,t){var n=Xp(e,t);if(!n)return Zp=void 0,e.toPrecision(t);var r=n[0],a=n[1],i=a-(Zp=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,s=r.length;return i===s?r:i>s?r+new Array(i-s+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Xp(e,Math.max(0,t+i-1))[0]}function RP(e,t){var n=Xp(e,t);if(!n)return e+"";var r=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const HP={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:pL,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>RP(e*100,t),r:RP,s:mL,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function jP(e){return e}var DP=Array.prototype.map,$P=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function vL(e){var t=e.grouping===void 0||e.thousands===void 0?jP:cL(DP.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?jP:fL(DP.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",c=e.nan===void 0?"NaN":e.nan+"";function f(d,v){d=Ps(d);var y=d.fill,x=d.align,I=d.sign,b=d.symbol,S=d.zero,W=d.width,A=d.comma,O=d.precision,w=d.trim,_=d.type;_==="n"?(A=!0,_="g"):HP[_]||(O===void 0&&(O=12),w=!0,_="g"),(S||y==="0"&&x==="=")&&(S=!0,y="0",x="=");var E=(v&&v.prefix!==void 0?v.prefix:"")+(b==="$"?n:b==="#"&&/[boxX]/.test(_)?"0"+_.toLowerCase():""),P=(b==="$"?r:/[%p]/.test(_)?s:"")+(v&&v.suffix!==void 0?v.suffix:""),C=HP[_],T=/[defgprs%]/.test(_);O=O===void 0?6:/[gprs]/.test(_)?Math.max(1,Math.min(21,O)):Math.max(0,Math.min(20,O));function j(N){var $=E,V=P,q,G,K;if(_==="c")V=C(N)+V,N="";else{N=+N;var L=N<0||1/N<0;if(N=isNaN(N)?c:C(Math.abs(N),O),w&&(N=hL(N)),L&&+N==0&&I!=="+"&&(L=!1),$=(L?I==="("?I:l:I==="-"||I==="("?"":I)+$,V=(_==="s"&&!isNaN(N)&&Zp!==void 0?$P[8+Zp/3]:"")+V+(L&&I==="("?")":""),T){for(q=-1,G=N.length;++q<G;)if(K=N.charCodeAt(q),48>K||K>57){V=(K===46?a+N.slice(q+1):N.slice(q))+V,N=N.slice(0,q);break}}}A&&!S&&(N=t(N,1/0));var Y=$.length+N.length+V.length,Q=Y<W?new Array(W-Y+1).join(y):"";switch(A&&S&&(N=t(Q+N,Q.length?W-V.length:1/0),Q=""),x){case"<":N=$+N+V+Q;break;case"=":N=$+Q+N+V;break;case"^":N=Q.slice(0,Y=Q.length>>1)+$+N+V+Q.slice(Y);break;default:N=Q+$+N+V;break}return i(N)}return j.toString=function(){return d+""},j}function h(d,v){var y=Math.max(-8,Math.min(8,Math.floor(bi(v)/3)))*3,x=Math.pow(10,-y),I=f((d=Ps(d),d.type="f",d),{suffix:$P[8+y/3]});return function(b){return I(x*b)}}return{format:f,formatPrefix:h}}var Bp,Vy,FA;gL({thousands:",",grouping:[3],currency:["$",""]});function gL(e){return Bp=vL(e),Vy=Bp.format,FA=Bp.formatPrefix,Bp}function yL(e){return Math.max(0,-bi(Math.abs(e)))}function bL(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(bi(t)/3)))*3-bi(Math.abs(e)))}function IL(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,bi(t)-bi(e))+1}function qA(e,t,n,r){var a=ig(e,t,n),i;switch(r=Ps(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(i=bL(a,s))&&(r.precision=i),FA(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=IL(a,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=yL(a))&&(r.precision=i-(r.type==="%")*2);break}}return Vy(r)}function Da(e){var t=e.domain;return e.ticks=function(n){var r=t();return ag(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var a=t();return qA(a[0],a[a.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),a=0,i=r.length-1,s=r[a],l=r[i],c,f,h=10;for(l<s&&(f=s,s=l,l=f,f=a,a=i,i=f);h-- >0;){if(f=og(s,l,n),f===c)return r[a]=s,r[i]=l,t(r);if(f>0)s=Math.floor(s/f)*f,l=Math.ceil(l/f)*f;else if(f<0)s=Math.ceil(s*f)/f,l=Math.floor(l*f)/f;else break;c=f}return e},e}function Jp(){var e=zy();return e.copy=function(){return el(e,Jp())},Qn.apply(e,arguments),Da(e)}function zA(e){var t;function n(r){return r==null||isNaN(r=+r)?t:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(e=Array.from(r,Yp),n):e.slice()},n.unknown=function(r){return arguments.length?(t=r,n):t},n.copy=function(){return zA(e).unknown(t)},e=arguments.length?Array.from(e,Yp):[0,1],Da(n)}function UA(e,t){e=e.slice();var n=0,r=e.length-1,a=e[n],i=e[r],s;return i<a&&(s=n,n=r,r=s,s=a,a=i,i=s),e[n]=t.floor(a),e[r]=t.ceil(i),e}function LP(e){return Math.log(e)}function FP(e){return Math.exp(e)}function BL(e){return-Math.log(-e)}function xL(e){return-Math.exp(-e)}function wL(e){return isFinite(e)?+("1e"+e):e<0?0:e}function PL(e){return e===10?wL:e===Math.E?Math.exp:t=>Math.pow(e,t)}function SL(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function qP(e){return(t,n)=>-e(-t,n)}function Gy(e){const t=e(LP,FP),n=t.domain;let r=10,a,i;function s(){return a=SL(r),i=PL(r),n()[0]<0?(a=qP(a),i=qP(i),e(BL,xL)):e(LP,FP),t}return t.base=function(l){return arguments.length?(r=+l,s()):r},t.domain=function(l){return arguments.length?(n(l),s()):n()},t.ticks=l=>{const c=n();let f=c[0],h=c[c.length-1];const d=h<f;d&&([f,h]=[h,f]);let v=a(f),y=a(h),x,I;const b=l==null?10:+l;let S=[];if(!(r%1)&&y-v<b){if(v=Math.floor(v),y=Math.ceil(y),f>0){for(;v<=y;++v)for(x=1;x<r;++x)if(I=v<0?x/i(-v):x*i(v),!(I<f)){if(I>h)break;S.push(I)}}else for(;v<=y;++v)for(x=r-1;x>=1;--x)if(I=v>0?x/i(-v):x*i(v),!(I<f)){if(I>h)break;S.push(I)}S.length*2<b&&(S=ag(f,h,b))}else S=ag(v,y,Math.min(y-v,b)).map(i);return d?S.reverse():S},t.tickFormat=(l,c)=>{if(l==null&&(l=10),c==null&&(c=r===10?"s":","),typeof c!="function"&&(!(r%1)&&(c=Ps(c)).precision==null&&(c.trim=!0),c=Vy(c)),l===1/0)return c;const f=Math.max(1,r*l/t.ticks().length);return h=>{let d=h/i(Math.round(a(h)));return d*r<r-.5&&(d*=r),d<=f?c(h):""}},t.nice=()=>n(UA(n(),{floor:l=>i(Math.floor(a(l))),ceil:l=>i(Math.ceil(a(l)))})),t}function VA(){const e=Gy(e0()).domain([1,10]);return e.copy=()=>el(e,VA()).base(e.base()),Qn.apply(e,arguments),e}function zP(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function UP(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function Ky(e){var t=1,n=e(zP(t),UP(t));return n.constant=function(r){return arguments.length?e(zP(t=+r),UP(t)):t},Da(n)}function GA(){var e=Ky(e0());return e.copy=function(){return el(e,GA()).constant(e.constant())},Qn.apply(e,arguments)}function VP(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function WL(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function AL(e){return e<0?-e*e:e*e}function Qy(e){var t=e(un,un),n=1;function r(){return n===1?e(un,un):n===.5?e(WL,AL):e(VP(n),VP(1/n))}return t.exponent=function(a){return arguments.length?(n=+a,r()):n},Da(t)}function Yy(){var e=Qy(e0());return e.copy=function(){return el(e,Yy()).exponent(e.exponent())},Qn.apply(e,arguments),e}function _L(){return Yy.apply(null,arguments).exponent(.5)}function GP(e){return Math.sign(e)*e*e}function ML(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function KA(){var e=zy(),t=[0,1],n=!1,r;function a(i){var s=ML(e(i));return isNaN(s)?r:n?Math.round(s):s}return a.invert=function(i){return e.invert(GP(i))},a.domain=function(i){return arguments.length?(e.domain(i),a):e.domain()},a.range=function(i){return arguments.length?(e.range((t=Array.from(i,Yp)).map(GP)),a):t.slice()},a.rangeRound=function(i){return a.range(i).round(!0)},a.round=function(i){return arguments.length?(n=!!i,a):n},a.clamp=function(i){return arguments.length?(e.clamp(i),a):e.clamp()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return KA(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},Qn.apply(a,arguments),Da(a)}function QA(){var e=[],t=[],n=[],r;function a(){var s=0,l=Math.max(1,t.length);for(n=new Array(l-1);++s<l;)n[s-1]=N$(e,s/l);return i}function i(s){return s==null||isNaN(s=+s)?r:t[Zs(n,s)]}return i.invertExtent=function(s){var l=t.indexOf(s);return l<0?[NaN,NaN]:[l>0?n[l-1]:e[0],l<n.length?n[l]:e[e.length-1]]},i.domain=function(s){if(!arguments.length)return e.slice();e=[];for(let l of s)l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(Ca),a()},i.range=function(s){return arguments.length?(t=Array.from(s),a()):t.slice()},i.unknown=function(s){return arguments.length?(r=s,i):r},i.quantiles=function(){return n.slice()},i.copy=function(){return QA().domain(e).range(t).unknown(r)},Qn.apply(i,arguments)}function YA(){var e=0,t=1,n=1,r=[.5],a=[0,1],i;function s(c){return c!=null&&c<=c?a[Zs(r,c,0,n)]:i}function l(){var c=-1;for(r=new Array(n);++c<n;)r[c]=((c+1)*t-(c-n)*e)/(n+1);return s}return s.domain=function(c){return arguments.length?([e,t]=c,e=+e,t=+t,l()):[e,t]},s.range=function(c){return arguments.length?(n=(a=Array.from(c)).length-1,l()):a.slice()},s.invertExtent=function(c){var f=a.indexOf(c);return f<0?[NaN,NaN]:f<1?[e,r[0]]:f>=n?[r[n-1],t]:[r[f-1],r[f]]},s.unknown=function(c){return arguments.length&&(i=c),s},s.thresholds=function(){return r.slice()},s.copy=function(){return YA().domain([e,t]).range(a).unknown(i)},Qn.apply(Da(s),arguments)}function XA(){var e=[.5],t=[0,1],n,r=1;function a(i){return i!=null&&i<=i?t[Zs(e,i,0,r)]:n}return a.domain=function(i){return arguments.length?(e=Array.from(i),r=Math.min(e.length,t.length-1),a):e.slice()},a.range=function(i){return arguments.length?(t=Array.from(i),r=Math.min(e.length,t.length-1),a):t.slice()},a.invertExtent=function(i){var s=t.indexOf(i);return[e[s-1],e[s]]},a.unknown=function(i){return arguments.length?(n=i,a):n},a.copy=function(){return XA().domain(e).range(t).unknown(n)},Qn.apply(a,arguments)}const km=new Date,Em=new Date;function Ht(e,t,n,r){function a(i){return e(i=arguments.length===0?new Date:new Date(+i)),i}return a.floor=i=>(e(i=new Date(+i)),i),a.ceil=i=>(e(i=new Date(i-1)),t(i,1),e(i),i),a.round=i=>{const s=a(i),l=a.ceil(i);return i-s<l-i?s:l},a.offset=(i,s)=>(t(i=new Date(+i),s==null?1:Math.floor(s)),i),a.range=(i,s,l)=>{const c=[];if(i=a.ceil(i),l=l==null?1:Math.floor(l),!(i<s)||!(l>0))return c;let f;do c.push(f=new Date(+i)),t(i,l),e(i);while(f<i&&i<s);return c},a.filter=i=>Ht(s=>{if(s>=s)for(;e(s),!i(s);)s.setTime(s-1)},(s,l)=>{if(s>=s)if(l<0)for(;++l<=0;)for(;t(s,-1),!i(s););else for(;--l>=0;)for(;t(s,1),!i(s););}),n&&(a.count=(i,s)=>(km.setTime(+i),Em.setTime(+s),e(km),e(Em),Math.floor(n(km,Em))),a.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?a.filter(r?s=>r(s)%i===0:s=>a.count(0,s)%i===0):a)),a}const ec=Ht(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);ec.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?Ht(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):ec);ec.range;const $r=1e3,Vn=$r*60,Lr=Vn*60,Gr=Lr*24,Xy=Gr*7,KP=Gr*30,Nm=Gr*365,co=Ht(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*$r)},(e,t)=>(t-e)/$r,e=>e.getUTCSeconds());co.range;const Zy=Ht(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r)},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getMinutes());Zy.range;const Jy=Ht(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getUTCMinutes());Jy.range;const eb=Ht(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r-e.getMinutes()*Vn)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getHours());eb.range;const tb=Ht(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getUTCHours());tb.range;const tl=Ht(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Vn)/Gr,e=>e.getDate()-1);tl.range;const t0=Ht(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gr,e=>e.getUTCDate()-1);t0.range;const ZA=Ht(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gr,e=>Math.floor(e/Gr));ZA.range;function xo(e){return Ht(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Vn)/Xy)}const n0=xo(0),tc=xo(1),OL=xo(2),CL=xo(3),Ii=xo(4),kL=xo(5),EL=xo(6);n0.range;tc.range;OL.range;CL.range;Ii.range;kL.range;EL.range;function wo(e){return Ht(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Xy)}const r0=wo(0),nc=wo(1),NL=wo(2),TL=wo(3),Bi=wo(4),RL=wo(5),HL=wo(6);r0.range;nc.range;NL.range;TL.range;Bi.range;RL.range;HL.range;const nb=Ht(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());nb.range;const rb=Ht(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());rb.range;const Kr=Ht(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Kr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Ht(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});Kr.range;const Qr=Ht(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Qr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Ht(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});Qr.range;function JA(e,t,n,r,a,i){const s=[[co,1,$r],[co,5,5*$r],[co,15,15*$r],[co,30,30*$r],[i,1,Vn],[i,5,5*Vn],[i,15,15*Vn],[i,30,30*Vn],[a,1,Lr],[a,3,3*Lr],[a,6,6*Lr],[a,12,12*Lr],[r,1,Gr],[r,2,2*Gr],[n,1,Xy],[t,1,KP],[t,3,3*KP],[e,1,Nm]];function l(f,h,d){const v=h<f;v&&([f,h]=[h,f]);const y=d&&typeof d.range=="function"?d:c(f,h,d),x=y?y.range(f,+h+1):[];return v?x.reverse():x}function c(f,h,d){const v=Math.abs(h-f)/d,y=Dy(([,,b])=>b).right(s,v);if(y===s.length)return e.every(ig(f/Nm,h/Nm,d));if(y===0)return ec.every(Math.max(ig(f,h,d),1));const[x,I]=s[v/s[y-1][2]<s[y][2]/v?y-1:y];return x.every(I)}return[l,c]}const[jL,DL]=JA(Qr,rb,r0,ZA,tb,Jy),[$L,LL]=JA(Kr,nb,n0,tl,eb,Zy);function Tm(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Rm(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Vu(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function FL(e){var t=e.dateTime,n=e.date,r=e.time,a=e.periods,i=e.days,s=e.shortDays,l=e.months,c=e.shortMonths,f=Gu(a),h=Ku(a),d=Gu(i),v=Ku(i),y=Gu(s),x=Ku(s),I=Gu(l),b=Ku(l),S=Gu(c),W=Ku(c),A={a:K,A:L,b:Y,B:Q,c:null,d:e4,e:e4,f:c8,g:B8,G:w8,H:s8,I:l8,j:p8,L:e_,m:f8,M:d8,p:H,q:F,Q:r4,s:a4,S:h8,u:m8,U:v8,V:g8,w:y8,W:b8,x:null,X:null,y:I8,Y:x8,Z:P8,"%":n4},O={a:J,A:ue,b:he,B:ge,c:null,d:t4,e:t4,f:_8,g:j8,G:$8,H:S8,I:W8,j:A8,L:n_,m:M8,M:O8,p:ye,q:fe,Q:r4,s:a4,S:C8,u:k8,U:E8,V:N8,w:T8,W:R8,x:null,X:null,y:H8,Y:D8,Z:L8,"%":n4},w={a:T,A:j,b:N,B:$,c:V,d:ZP,e:ZP,f:a8,g:XP,G:YP,H:JP,I:JP,j:e8,L:r8,m:JL,M:t8,p:C,q:ZL,Q:i8,s:u8,S:n8,u:GL,U:KL,V:QL,w:VL,W:YL,x:q,X:G,y:XP,Y:YP,Z:XL,"%":o8};A.x=_(n,A),A.X=_(r,A),A.c=_(t,A),O.x=_(n,O),O.X=_(r,O),O.c=_(t,O);function _(ne,de){return function(ce){var re=[],Re=-1,Pe=0,Ce=ne.length,Ae,Fe,je;for(ce instanceof Date||(ce=new Date(+ce));++Re<Ce;)ne.charCodeAt(Re)===37&&(re.push(ne.slice(Pe,Re)),(Fe=QP[Ae=ne.charAt(++Re)])!=null?Ae=ne.charAt(++Re):Fe=Ae==="e"?" ":"0",(je=de[Ae])&&(Ae=je(ce,Fe)),re.push(Ae),Pe=Re+1);return re.push(ne.slice(Pe,Re)),re.join("")}}function E(ne,de){return function(ce){var re=Vu(1900,void 0,1),Re=P(re,ne,ce+="",0),Pe,Ce;if(Re!=ce.length)return null;if("Q"in re)return new Date(re.Q);if("s"in re)return new Date(re.s*1e3+("L"in re?re.L:0));if(de&&!("Z"in re)&&(re.Z=0),"p"in re&&(re.H=re.H%12+re.p*12),re.m===void 0&&(re.m="q"in re?re.q:0),"V"in re){if(re.V<1||re.V>53)return null;"w"in re||(re.w=1),"Z"in re?(Pe=Rm(Vu(re.y,0,1)),Ce=Pe.getUTCDay(),Pe=Ce>4||Ce===0?nc.ceil(Pe):nc(Pe),Pe=t0.offset(Pe,(re.V-1)*7),re.y=Pe.getUTCFullYear(),re.m=Pe.getUTCMonth(),re.d=Pe.getUTCDate()+(re.w+6)%7):(Pe=Tm(Vu(re.y,0,1)),Ce=Pe.getDay(),Pe=Ce>4||Ce===0?tc.ceil(Pe):tc(Pe),Pe=tl.offset(Pe,(re.V-1)*7),re.y=Pe.getFullYear(),re.m=Pe.getMonth(),re.d=Pe.getDate()+(re.w+6)%7)}else("W"in re||"U"in re)&&("w"in re||(re.w="u"in re?re.u%7:"W"in re?1:0),Ce="Z"in re?Rm(Vu(re.y,0,1)).getUTCDay():Tm(Vu(re.y,0,1)).getDay(),re.m=0,re.d="W"in re?(re.w+6)%7+re.W*7-(Ce+5)%7:re.w+re.U*7-(Ce+6)%7);return"Z"in re?(re.H+=re.Z/100|0,re.M+=re.Z%100,Rm(re)):Tm(re)}}function P(ne,de,ce,re){for(var Re=0,Pe=de.length,Ce=ce.length,Ae,Fe;Re<Pe;){if(re>=Ce)return-1;if(Ae=de.charCodeAt(Re++),Ae===37){if(Ae=de.charAt(Re++),Fe=w[Ae in QP?de.charAt(Re++):Ae],!Fe||(re=Fe(ne,ce,re))<0)return-1}else if(Ae!=ce.charCodeAt(re++))return-1}return re}function C(ne,de,ce){var re=f.exec(de.slice(ce));return re?(ne.p=h.get(re[0].toLowerCase()),ce+re[0].length):-1}function T(ne,de,ce){var re=y.exec(de.slice(ce));return re?(ne.w=x.get(re[0].toLowerCase()),ce+re[0].length):-1}function j(ne,de,ce){var re=d.exec(de.slice(ce));return re?(ne.w=v.get(re[0].toLowerCase()),ce+re[0].length):-1}function N(ne,de,ce){var re=S.exec(de.slice(ce));return re?(ne.m=W.get(re[0].toLowerCase()),ce+re[0].length):-1}function $(ne,de,ce){var re=I.exec(de.slice(ce));return re?(ne.m=b.get(re[0].toLowerCase()),ce+re[0].length):-1}function V(ne,de,ce){return P(ne,t,de,ce)}function q(ne,de,ce){return P(ne,n,de,ce)}function G(ne,de,ce){return P(ne,r,de,ce)}function K(ne){return s[ne.getDay()]}function L(ne){return i[ne.getDay()]}function Y(ne){return c[ne.getMonth()]}function Q(ne){return l[ne.getMonth()]}function H(ne){return a[+(ne.getHours()>=12)]}function F(ne){return 1+~~(ne.getMonth()/3)}function J(ne){return s[ne.getUTCDay()]}function ue(ne){return i[ne.getUTCDay()]}function he(ne){return c[ne.getUTCMonth()]}function ge(ne){return l[ne.getUTCMonth()]}function ye(ne){return a[+(ne.getUTCHours()>=12)]}function fe(ne){return 1+~~(ne.getUTCMonth()/3)}return{format:function(ne){var de=_(ne+="",A);return de.toString=function(){return ne},de},parse:function(ne){var de=E(ne+="",!1);return de.toString=function(){return ne},de},utcFormat:function(ne){var de=_(ne+="",O);return de.toString=function(){return ne},de},utcParse:function(ne){var de=E(ne+="",!0);return de.toString=function(){return ne},de}}}var QP={"-":"",_:" ",0:"0"},zt=/^\s*\d+/,qL=/^%/,zL=/[\\^$*+?|[\]().{}]/g;function Ve(e,t,n){var r=e<0?"-":"",a=(r?-e:e)+"",i=a.length;return r+(i<n?new Array(n-i+1).join(t)+a:a)}function UL(e){return e.replace(zL,"\\$&")}function Gu(e){return new RegExp("^(?:"+e.map(UL).join("|")+")","i")}function Ku(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function VL(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function GL(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function KL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function QL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function YL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function YP(e,t,n){var r=zt.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function XP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function XL(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function ZL(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function JL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function ZP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function e8(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function JP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function t8(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function n8(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function r8(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function a8(e,t,n){var r=zt.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function o8(e,t,n){var r=qL.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function i8(e,t,n){var r=zt.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function u8(e,t,n){var r=zt.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function e4(e,t){return Ve(e.getDate(),t,2)}function s8(e,t){return Ve(e.getHours(),t,2)}function l8(e,t){return Ve(e.getHours()%12||12,t,2)}function p8(e,t){return Ve(1+tl.count(Kr(e),e),t,3)}function e_(e,t){return Ve(e.getMilliseconds(),t,3)}function c8(e,t){return e_(e,t)+"000"}function f8(e,t){return Ve(e.getMonth()+1,t,2)}function d8(e,t){return Ve(e.getMinutes(),t,2)}function h8(e,t){return Ve(e.getSeconds(),t,2)}function m8(e){var t=e.getDay();return t===0?7:t}function v8(e,t){return Ve(n0.count(Kr(e)-1,e),t,2)}function t_(e){var t=e.getDay();return t>=4||t===0?Ii(e):Ii.ceil(e)}function g8(e,t){return e=t_(e),Ve(Ii.count(Kr(e),e)+(Kr(e).getDay()===4),t,2)}function y8(e){return e.getDay()}function b8(e,t){return Ve(tc.count(Kr(e)-1,e),t,2)}function I8(e,t){return Ve(e.getFullYear()%100,t,2)}function B8(e,t){return e=t_(e),Ve(e.getFullYear()%100,t,2)}function x8(e,t){return Ve(e.getFullYear()%1e4,t,4)}function w8(e,t){var n=e.getDay();return e=n>=4||n===0?Ii(e):Ii.ceil(e),Ve(e.getFullYear()%1e4,t,4)}function P8(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Ve(t/60|0,"0",2)+Ve(t%60,"0",2)}function t4(e,t){return Ve(e.getUTCDate(),t,2)}function S8(e,t){return Ve(e.getUTCHours(),t,2)}function W8(e,t){return Ve(e.getUTCHours()%12||12,t,2)}function A8(e,t){return Ve(1+t0.count(Qr(e),e),t,3)}function n_(e,t){return Ve(e.getUTCMilliseconds(),t,3)}function _8(e,t){return n_(e,t)+"000"}function M8(e,t){return Ve(e.getUTCMonth()+1,t,2)}function O8(e,t){return Ve(e.getUTCMinutes(),t,2)}function C8(e,t){return Ve(e.getUTCSeconds(),t,2)}function k8(e){var t=e.getUTCDay();return t===0?7:t}function E8(e,t){return Ve(r0.count(Qr(e)-1,e),t,2)}function r_(e){var t=e.getUTCDay();return t>=4||t===0?Bi(e):Bi.ceil(e)}function N8(e,t){return e=r_(e),Ve(Bi.count(Qr(e),e)+(Qr(e).getUTCDay()===4),t,2)}function T8(e){return e.getUTCDay()}function R8(e,t){return Ve(nc.count(Qr(e)-1,e),t,2)}function H8(e,t){return Ve(e.getUTCFullYear()%100,t,2)}function j8(e,t){return e=r_(e),Ve(e.getUTCFullYear()%100,t,2)}function D8(e,t){return Ve(e.getUTCFullYear()%1e4,t,4)}function $8(e,t){var n=e.getUTCDay();return e=n>=4||n===0?Bi(e):Bi.ceil(e),Ve(e.getUTCFullYear()%1e4,t,4)}function L8(){return"+0000"}function n4(){return"%"}function r4(e){return+e}function a4(e){return Math.floor(+e/1e3)}var ei,a_,o_;F8({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function F8(e){return ei=FL(e),a_=ei.format,ei.parse,o_=ei.utcFormat,ei.utcParse,ei}function q8(e){return new Date(e)}function z8(e){return e instanceof Date?+e:+new Date(+e)}function ab(e,t,n,r,a,i,s,l,c,f){var h=zy(),d=h.invert,v=h.domain,y=f(".%L"),x=f(":%S"),I=f("%I:%M"),b=f("%I %p"),S=f("%a %d"),W=f("%b %d"),A=f("%B"),O=f("%Y");function w(_){return(c(_)<_?y:l(_)<_?x:s(_)<_?I:i(_)<_?b:r(_)<_?a(_)<_?S:W:n(_)<_?A:O)(_)}return h.invert=function(_){return new Date(d(_))},h.domain=function(_){return arguments.length?v(Array.from(_,z8)):v().map(q8)},h.ticks=function(_){var E=v();return e(E[0],E[E.length-1],_??10)},h.tickFormat=function(_,E){return E==null?w:f(E)},h.nice=function(_){var E=v();return(!_||typeof _.range!="function")&&(_=t(E[0],E[E.length-1],_??10)),_?v(UA(E,_)):h},h.copy=function(){return el(h,ab(e,t,n,r,a,i,s,l,c,f))},h}function U8(){return Qn.apply(ab($L,LL,Kr,nb,n0,tl,eb,Zy,co,a_).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function V8(){return Qn.apply(ab(jL,DL,Qr,rb,r0,t0,tb,Jy,co,o_).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function a0(){var e=0,t=1,n,r,a,i,s=un,l=!1,c;function f(d){return d==null||isNaN(d=+d)?c:s(a===0?.5:(d=(i(d)-n)*a,l?Math.max(0,Math.min(1,d)):d))}f.domain=function(d){return arguments.length?([e,t]=d,n=i(e=+e),r=i(t=+t),a=n===r?0:1/(r-n),f):[e,t]},f.clamp=function(d){return arguments.length?(l=!!d,f):l},f.interpolator=function(d){return arguments.length?(s=d,f):s};function h(d){return function(v){var y,x;return arguments.length?([y,x]=v,s=d(y,x),f):[s(0),s(1)]}}return f.range=h(Zi),f.rangeRound=h(qy),f.unknown=function(d){return arguments.length?(c=d,f):c},function(d){return i=d,n=d(e),r=d(t),a=n===r?0:1/(r-n),f}}function $a(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function i_(){var e=Da(a0()(un));return e.copy=function(){return $a(e,i_())},Jr.apply(e,arguments)}function u_(){var e=Gy(a0()).domain([1,10]);return e.copy=function(){return $a(e,u_()).base(e.base())},Jr.apply(e,arguments)}function s_(){var e=Ky(a0());return e.copy=function(){return $a(e,s_()).constant(e.constant())},Jr.apply(e,arguments)}function ob(){var e=Qy(a0());return e.copy=function(){return $a(e,ob()).exponent(e.exponent())},Jr.apply(e,arguments)}function G8(){return ob.apply(null,arguments).exponent(.5)}function l_(){var e=[],t=un;function n(r){if(r!=null&&!isNaN(r=+r))return t((Zs(e,r,1)-1)/(e.length-1))}return n.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Ca),n},n.interpolator=function(r){return arguments.length?(t=r,n):t},n.range=function(){return e.map((r,a)=>t(a/(e.length-1)))},n.quantiles=function(r){return Array.from({length:r+1},(a,i)=>E$(e,i/r))},n.copy=function(){return l_(t).domain(e)},Jr.apply(n,arguments)}function o0(){var e=0,t=.5,n=1,r=1,a,i,s,l,c,f=un,h,d=!1,v;function y(I){return isNaN(I=+I)?v:(I=.5+((I=+h(I))-i)*(r*I<r*i?l:c),f(d?Math.max(0,Math.min(1,I)):I))}y.domain=function(I){return arguments.length?([e,t,n]=I,a=h(e=+e),i=h(t=+t),s=h(n=+n),l=a===i?0:.5/(i-a),c=i===s?0:.5/(s-i),r=i<a?-1:1,y):[e,t,n]},y.clamp=function(I){return arguments.length?(d=!!I,y):d},y.interpolator=function(I){return arguments.length?(f=I,y):f};function x(I){return function(b){var S,W,A;return arguments.length?([S,W,A]=b,f=oL(I,[S,W,A]),y):[f(0),f(.5),f(1)]}}return y.range=x(Zi),y.rangeRound=x(qy),y.unknown=function(I){return arguments.length?(v=I,y):v},function(I){return h=I,a=I(e),i=I(t),s=I(n),l=a===i?0:.5/(i-a),c=i===s?0:.5/(s-i),r=i<a?-1:1,y}}function p_(){var e=Da(o0()(un));return e.copy=function(){return $a(e,p_())},Jr.apply(e,arguments)}function c_(){var e=Gy(o0()).domain([.1,1,10]);return e.copy=function(){return $a(e,c_()).base(e.base())},Jr.apply(e,arguments)}function f_(){var e=Ky(o0());return e.copy=function(){return $a(e,f_()).constant(e.constant())},Jr.apply(e,arguments)}function ib(){var e=Qy(o0());return e.copy=function(){return $a(e,ib()).exponent(e.exponent())},Jr.apply(e,arguments)}function K8(){return ib.apply(null,arguments).exponent(.5)}const o4=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:Is,scaleDiverging:p_,scaleDivergingLog:c_,scaleDivergingPow:ib,scaleDivergingSqrt:K8,scaleDivergingSymlog:f_,scaleIdentity:zA,scaleImplicit:ug,scaleLinear:Jp,scaleLog:VA,scaleOrdinal:$y,scalePoint:as,scalePow:Yy,scaleQuantile:QA,scaleQuantize:YA,scaleRadial:KA,scaleSequential:i_,scaleSequentialLog:u_,scaleSequentialPow:ob,scaleSequentialQuantile:l_,scaleSequentialSqrt:G8,scaleSequentialSymlog:s_,scaleSqrt:_L,scaleSymlog:GA,scaleThreshold:XA,scaleTime:U8,scaleUtc:V8,tickFormat:qA},Symbol.toStringTag,{value:"Module"}));var Hm,i4;function i0(){if(i4)return Hm;i4=1;var e=Ki();function t(n,r,a){for(var i=-1,s=n.length;++i<s;){var l=n[i],c=r(l);if(c!=null&&(f===void 0?c===c&&!e(c):a(c,f)))var f=c,h=l}return h}return Hm=t,Hm}var jm,u4;function d_(){if(u4)return jm;u4=1;function e(t,n){return t>n}return jm=e,jm}var Dm,s4;function Q8(){if(s4)return Dm;s4=1;var e=i0(),t=d_(),n=Xi();function r(a){return a&&a.length?e(a,n,t):void 0}return Dm=r,Dm}var Y8=Q8();const Aa=Xe(Y8);var $m,l4;function h_(){if(l4)return $m;l4=1;function e(t,n){return t<n}return $m=e,$m}var Lm,p4;function X8(){if(p4)return Lm;p4=1;var e=i0(),t=h_(),n=Xi();function r(a){return a&&a.length?e(a,n,t):void 0}return Lm=r,Lm}var Z8=X8();const u0=Xe(Z8);var Fm,c4;function J8(){if(c4)return Fm;c4=1;var e=xy(),t=Ar(),n=wA(),r=yn();function a(i,s){var l=r(i)?e:n;return l(i,t(s,3))}return Fm=a,Fm}var qm,f4;function e7(){if(f4)return qm;f4=1;var e=BA(),t=J8();function n(r,a){return e(t(r,a),1)}return qm=n,qm}var t7=e7();const n7=Xe(t7);var zm,d4;function r7(){if(d4)return zm;d4=1;var e=Ny();function t(n,r){return e(n,r)}return zm=t,zm}var a7=r7();const Ta=Xe(a7);var Ji=1e9,o7={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},sb,ct=!0,Gn="[DecimalError] ",vo=Gn+"Invalid argument: ",ub=Gn+"Exponent out of range: ",eu=Math.floor,uo=Math.pow,i7=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,_n,Ft=1e7,st=7,m_=9007199254740991,rc=eu(m_/st),Ie={};Ie.absoluteValue=Ie.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};Ie.comparedTo=Ie.cmp=function(e){var t,n,r,a,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(r=i.d.length,a=e.d.length,t=0,n=r<a?r:a;t<n;++t)if(i.d[t]!==e.d[t])return i.d[t]>e.d[t]^i.s<0?1:-1;return r===a?0:r>a^i.s<0?1:-1};Ie.decimalPlaces=Ie.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*st;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n};Ie.dividedBy=Ie.div=function(e){return Vr(this,new this.constructor(e))};Ie.dividedToIntegerBy=Ie.idiv=function(e){var t=this,n=t.constructor;return tt(Vr(t,new n(e),0,1),n.precision)};Ie.equals=Ie.eq=function(e){return!this.cmp(e)};Ie.exponent=function(){return Ot(this)};Ie.greaterThan=Ie.gt=function(e){return this.cmp(e)>0};Ie.greaterThanOrEqualTo=Ie.gte=function(e){return this.cmp(e)>=0};Ie.isInteger=Ie.isint=function(){return this.e>this.d.length-2};Ie.isNegative=Ie.isneg=function(){return this.s<0};Ie.isPositive=Ie.ispos=function(){return this.s>0};Ie.isZero=function(){return this.s===0};Ie.lessThan=Ie.lt=function(e){return this.cmp(e)<0};Ie.lessThanOrEqualTo=Ie.lte=function(e){return this.cmp(e)<1};Ie.logarithm=Ie.log=function(e){var t,n=this,r=n.constructor,a=r.precision,i=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(_n))throw Error(Gn+"NaN");if(n.s<1)throw Error(Gn+(n.s?"NaN":"-Infinity"));return n.eq(_n)?new r(0):(ct=!1,t=Vr(Ss(n,i),Ss(e,i),i),ct=!0,tt(t,a))};Ie.minus=Ie.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?y_(t,e):v_(t,(e.s=-e.s,e))};Ie.modulo=Ie.mod=function(e){var t,n=this,r=n.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(Gn+"NaN");return n.s?(ct=!1,t=Vr(n,e,0,1).times(e),ct=!0,n.minus(t)):tt(new r(n),a)};Ie.naturalExponential=Ie.exp=function(){return g_(this)};Ie.naturalLogarithm=Ie.ln=function(){return Ss(this)};Ie.negated=Ie.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};Ie.plus=Ie.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?v_(t,e):y_(t,(e.s=-e.s,e))};Ie.precision=Ie.sd=function(e){var t,n,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(vo+e);if(t=Ot(a)+1,r=a.d.length-1,n=r*st+1,r=a.d[r],r){for(;r%10==0;r/=10)n--;for(r=a.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};Ie.squareRoot=Ie.sqrt=function(){var e,t,n,r,a,i,s,l=this,c=l.constructor;if(l.s<1){if(!l.s)return new c(0);throw Error(Gn+"NaN")}for(e=Ot(l),ct=!1,a=Math.sqrt(+l),a==0||a==1/0?(t=br(l.d),(t.length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=eu((e+1)/2)-(e<0||e%2),a==1/0?t="5e"+e:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new c(t)):r=new c(a.toString()),n=c.precision,a=s=n+3;;)if(i=r,r=i.plus(Vr(l,i,s+2)).times(.5),br(i.d).slice(0,s)===(t=br(r.d)).slice(0,s)){if(t=t.slice(s-3,s+1),a==s&&t=="4999"){if(tt(i,n+1,0),i.times(i).eq(l)){r=i;break}}else if(t!="9999")break;s+=4}return ct=!0,tt(r,n)};Ie.times=Ie.mul=function(e){var t,n,r,a,i,s,l,c,f,h=this,d=h.constructor,v=h.d,y=(e=new d(e)).d;if(!h.s||!e.s)return new d(0);for(e.s*=h.s,n=h.e+e.e,c=v.length,f=y.length,c<f&&(i=v,v=y,y=i,s=c,c=f,f=s),i=[],s=c+f,r=s;r--;)i.push(0);for(r=f;--r>=0;){for(t=0,a=c+r;a>r;)l=i[a]+y[r]*v[a-r-1]+t,i[a--]=l%Ft|0,t=l/Ft|0;i[a]=(i[a]+t)%Ft|0}for(;!i[--s];)i.pop();return t?++n:i.shift(),e.d=i,e.e=n,ct?tt(e,d.precision):e};Ie.toDecimalPlaces=Ie.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(Pr(e,0,Ji),t===void 0?t=r.rounding:Pr(t,0,8),tt(n,e+Ot(n)+1,t))};Ie.toExponential=function(e,t){var n,r=this,a=r.constructor;return e===void 0?n=yo(r,!0):(Pr(e,0,Ji),t===void 0?t=a.rounding:Pr(t,0,8),r=tt(new a(r),e+1,t),n=yo(r,!0,e+1)),n};Ie.toFixed=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?yo(a):(Pr(e,0,Ji),t===void 0?t=i.rounding:Pr(t,0,8),r=tt(new i(a),e+Ot(a)+1,t),n=yo(r.abs(),!1,e+Ot(r)+1),a.isneg()&&!a.isZero()?"-"+n:n)};Ie.toInteger=Ie.toint=function(){var e=this,t=e.constructor;return tt(new t(e),Ot(e)+1,t.rounding)};Ie.toNumber=function(){return+this};Ie.toPower=Ie.pow=function(e){var t,n,r,a,i,s,l=this,c=l.constructor,f=12,h=+(e=new c(e));if(!e.s)return new c(_n);if(l=new c(l),!l.s){if(e.s<1)throw Error(Gn+"Infinity");return l}if(l.eq(_n))return l;if(r=c.precision,e.eq(_n))return tt(l,r);if(t=e.e,n=e.d.length-1,s=t>=n,i=l.s,s){if((n=h<0?-h:h)<=m_){for(a=new c(_n),t=Math.ceil(r/st+4),ct=!1;n%2&&(a=a.times(l),m4(a.d,t)),n=eu(n/2),n!==0;)l=l.times(l),m4(l.d,t);return ct=!0,e.s<0?new c(_n).div(a):tt(a,r)}}else if(i<0)throw Error(Gn+"NaN");return i=i<0&&e.d[Math.max(t,n)]&1?-1:1,l.s=1,ct=!1,a=e.times(Ss(l,r+f)),ct=!0,a=g_(a),a.s=i,a};Ie.toPrecision=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?(n=Ot(a),r=yo(a,n<=i.toExpNeg||n>=i.toExpPos)):(Pr(e,1,Ji),t===void 0?t=i.rounding:Pr(t,0,8),a=tt(new i(a),e,t),n=Ot(a),r=yo(a,e<=n||n<=i.toExpNeg,e)),r};Ie.toSignificantDigits=Ie.tosd=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(Pr(e,1,Ji),t===void 0?t=r.rounding:Pr(t,0,8)),tt(new r(n),e,t)};Ie.toString=Ie.valueOf=Ie.val=Ie.toJSON=Ie[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=Ot(e),n=e.constructor;return yo(e,t<=n.toExpNeg||t>=n.toExpPos)};function v_(e,t){var n,r,a,i,s,l,c,f,h=e.constructor,d=h.precision;if(!e.s||!t.s)return t.s||(t=new h(e)),ct?tt(t,d):t;if(c=e.d,f=t.d,s=e.e,a=t.e,c=c.slice(),i=s-a,i){for(i<0?(r=c,i=-i,l=f.length):(r=f,a=s,l=c.length),s=Math.ceil(d/st),l=s>l?s+1:l+1,i>l&&(i=l,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(l=c.length,i=f.length,l-i<0&&(i=l,r=f,f=c,c=r),n=0;i;)n=(c[--i]=c[i]+f[i]+n)/Ft|0,c[i]%=Ft;for(n&&(c.unshift(n),++a),l=c.length;c[--l]==0;)c.pop();return t.d=c,t.e=a,ct?tt(t,d):t}function Pr(e,t,n){if(e!==~~e||e<t||e>n)throw Error(vo+e)}function br(e){var t,n,r,a=e.length-1,i="",s=e[0];if(a>0){for(i+=s,t=1;t<a;t++)r=e[t]+"",n=st-r.length,n&&(i+=Sa(n)),i+=r;s=e[t],r=s+"",n=st-r.length,n&&(i+=Sa(n))}else if(s===0)return"0";for(;s%10===0;)s/=10;return i+s}var Vr=(function(){function e(r,a){var i,s=0,l=r.length;for(r=r.slice();l--;)i=r[l]*a+s,r[l]=i%Ft|0,s=i/Ft|0;return s&&r.unshift(s),r}function t(r,a,i,s){var l,c;if(i!=s)c=i>s?1:-1;else for(l=c=0;l<i;l++)if(r[l]!=a[l]){c=r[l]>a[l]?1:-1;break}return c}function n(r,a,i){for(var s=0;i--;)r[i]-=s,s=r[i]<a[i]?1:0,r[i]=s*Ft+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,s){var l,c,f,h,d,v,y,x,I,b,S,W,A,O,w,_,E,P,C=r.constructor,T=r.s==a.s?1:-1,j=r.d,N=a.d;if(!r.s)return new C(r);if(!a.s)throw Error(Gn+"Division by zero");for(c=r.e-a.e,E=N.length,w=j.length,y=new C(T),x=y.d=[],f=0;N[f]==(j[f]||0);)++f;if(N[f]>(j[f]||0)&&--c,i==null?W=i=C.precision:s?W=i+(Ot(r)-Ot(a))+1:W=i,W<0)return new C(0);if(W=W/st+2|0,f=0,E==1)for(h=0,N=N[0],W++;(f<w||h)&&W--;f++)A=h*Ft+(j[f]||0),x[f]=A/N|0,h=A%N|0;else{for(h=Ft/(N[0]+1)|0,h>1&&(N=e(N,h),j=e(j,h),E=N.length,w=j.length),O=E,I=j.slice(0,E),b=I.length;b<E;)I[b++]=0;P=N.slice(),P.unshift(0),_=N[0],N[1]>=Ft/2&&++_;do h=0,l=t(N,I,E,b),l<0?(S=I[0],E!=b&&(S=S*Ft+(I[1]||0)),h=S/_|0,h>1?(h>=Ft&&(h=Ft-1),d=e(N,h),v=d.length,b=I.length,l=t(d,I,v,b),l==1&&(h--,n(d,E<v?P:N,v))):(h==0&&(l=h=1),d=N.slice()),v=d.length,v<b&&d.unshift(0),n(I,d,b),l==-1&&(b=I.length,l=t(N,I,E,b),l<1&&(h++,n(I,E<b?P:N,b))),b=I.length):l===0&&(h++,I=[0]),x[f++]=h,l&&I[0]?I[b++]=j[O]||0:(I=[j[O]],b=1);while((O++<w||I[0]!==void 0)&&W--)}return x[0]||x.shift(),y.e=c,tt(y,s?i+Ot(y)+1:i)}})();function g_(e,t){var n,r,a,i,s,l,c=0,f=0,h=e.constructor,d=h.precision;if(Ot(e)>16)throw Error(ub+Ot(e));if(!e.s)return new h(_n);for(ct=!1,l=d,s=new h(.03125);e.abs().gte(.1);)e=e.times(s),f+=5;for(r=Math.log(uo(2,f))/Math.LN10*2+5|0,l+=r,n=a=i=new h(_n),h.precision=l;;){if(a=tt(a.times(e),l),n=n.times(++c),s=i.plus(Vr(a,n,l)),br(s.d).slice(0,l)===br(i.d).slice(0,l)){for(;f--;)i=tt(i.times(i),l);return h.precision=d,t==null?(ct=!0,tt(i,d)):i}i=s}}function Ot(e){for(var t=e.e*st,n=e.d[0];n>=10;n/=10)t++;return t}function Um(e,t,n){if(t>e.LN10.sd())throw ct=!0,n&&(e.precision=n),Error(Gn+"LN10 precision limit exceeded");return tt(new e(e.LN10),t)}function Sa(e){for(var t="";e--;)t+="0";return t}function Ss(e,t){var n,r,a,i,s,l,c,f,h,d=1,v=10,y=e,x=y.d,I=y.constructor,b=I.precision;if(y.s<1)throw Error(Gn+(y.s?"NaN":"-Infinity"));if(y.eq(_n))return new I(0);if(t==null?(ct=!1,f=b):f=t,y.eq(10))return t==null&&(ct=!0),Um(I,f);if(f+=v,I.precision=f,n=br(x),r=n.charAt(0),i=Ot(y),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)y=y.times(e),n=br(y.d),r=n.charAt(0),d++;i=Ot(y),r>1?(y=new I("0."+n),i++):y=new I(r+"."+n.slice(1))}else return c=Um(I,f+2,b).times(i+""),y=Ss(new I(r+"."+n.slice(1)),f-v).plus(c),I.precision=b,t==null?(ct=!0,tt(y,b)):y;for(l=s=y=Vr(y.minus(_n),y.plus(_n),f),h=tt(y.times(y),f),a=3;;){if(s=tt(s.times(h),f),c=l.plus(Vr(s,new I(a),f)),br(c.d).slice(0,f)===br(l.d).slice(0,f))return l=l.times(2),i!==0&&(l=l.plus(Um(I,f+2,b).times(i+""))),l=Vr(l,new I(d),f),I.precision=b,t==null?(ct=!0,tt(l,b)):l;l=c,a+=2}}function h4(e,t){var n,r,a;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(r,a),t){if(a-=r,n=n-r-1,e.e=eu(n/st),e.d=[],r=(n+1)%st,n<0&&(r+=st),r<a){for(r&&e.d.push(+t.slice(0,r)),a-=st;r<a;)e.d.push(+t.slice(r,r+=st));t=t.slice(r),r=st-t.length}else r-=a;for(;r--;)t+="0";if(e.d.push(+t),ct&&(e.e>rc||e.e<-rc))throw Error(ub+n)}else e.s=0,e.e=0,e.d=[0];return e}function tt(e,t,n){var r,a,i,s,l,c,f,h,d=e.d;for(s=1,i=d[0];i>=10;i/=10)s++;if(r=t-s,r<0)r+=st,a=t,f=d[h=0];else{if(h=Math.ceil((r+1)/st),i=d.length,h>=i)return e;for(f=i=d[h],s=1;i>=10;i/=10)s++;r%=st,a=r-st+s}if(n!==void 0&&(i=uo(10,s-a-1),l=f/i%10|0,c=t<0||d[h+1]!==void 0||f%i,c=n<4?(l||c)&&(n==0||n==(e.s<0?3:2)):l>5||l==5&&(n==4||c||n==6&&(r>0?a>0?f/uo(10,s-a):0:d[h-1])%10&1||n==(e.s<0?8:7))),t<1||!d[0])return c?(i=Ot(e),d.length=1,t=t-i-1,d[0]=uo(10,(st-t%st)%st),e.e=eu(-t/st)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(r==0?(d.length=h,i=1,h--):(d.length=h+1,i=uo(10,st-r),d[h]=a>0?(f/uo(10,s-a)%uo(10,a)|0)*i:0),c)for(;;)if(h==0){(d[0]+=i)==Ft&&(d[0]=1,++e.e);break}else{if(d[h]+=i,d[h]!=Ft)break;d[h--]=0,i=1}for(r=d.length;d[--r]===0;)d.pop();if(ct&&(e.e>rc||e.e<-rc))throw Error(ub+Ot(e));return e}function y_(e,t){var n,r,a,i,s,l,c,f,h,d,v=e.constructor,y=v.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new v(e),ct?tt(t,y):t;if(c=e.d,d=t.d,r=t.e,f=e.e,c=c.slice(),s=f-r,s){for(h=s<0,h?(n=c,s=-s,l=d.length):(n=d,r=f,l=c.length),a=Math.max(Math.ceil(y/st),l)+2,s>a&&(s=a,n.length=1),n.reverse(),a=s;a--;)n.push(0);n.reverse()}else{for(a=c.length,l=d.length,h=a<l,h&&(l=a),a=0;a<l;a++)if(c[a]!=d[a]){h=c[a]<d[a];break}s=0}for(h&&(n=c,c=d,d=n,t.s=-t.s),l=c.length,a=d.length-l;a>0;--a)c[l++]=0;for(a=d.length;a>s;){if(c[--a]<d[a]){for(i=a;i&&c[--i]===0;)c[i]=Ft-1;--c[i],c[a]+=Ft}c[a]-=d[a]}for(;c[--l]===0;)c.pop();for(;c[0]===0;c.shift())--r;return c[0]?(t.d=c,t.e=r,ct?tt(t,y):t):new v(0)}function yo(e,t,n){var r,a=Ot(e),i=br(e.d),s=i.length;return t?(n&&(r=n-s)>0?i=i.charAt(0)+"."+i.slice(1)+Sa(r):s>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(a<0?"e":"e+")+a):a<0?(i="0."+Sa(-a-1)+i,n&&(r=n-s)>0&&(i+=Sa(r))):a>=s?(i+=Sa(a+1-s),n&&(r=n-a-1)>0&&(i=i+"."+Sa(r))):((r=a+1)<s&&(i=i.slice(0,r)+"."+i.slice(r)),n&&(r=n-s)>0&&(a+1===s&&(i+="."),i+=Sa(r))),e.s<0?"-"+i:i}function m4(e,t){if(e.length>t)return e.length=t,!0}function b_(e){var t,n,r;function a(i){var s=this;if(!(s instanceof a))return new a(i);if(s.constructor=a,i instanceof a){s.s=i.s,s.e=i.e,s.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(vo+i);if(i>0)s.s=1;else if(i<0)i=-i,s.s=-1;else{s.s=0,s.e=0,s.d=[0];return}if(i===~~i&&i<1e7){s.e=0,s.d=[i];return}return h4(s,i.toString())}else if(typeof i!="string")throw Error(vo+i);if(i.charCodeAt(0)===45?(i=i.slice(1),s.s=-1):s.s=1,i7.test(i))h4(s,i);else throw Error(vo+i)}if(a.prototype=Ie,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=b_,a.config=a.set=u7,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return a.config(e),a}function u7(e){if(!e||typeof e!="object")throw Error(Gn+"Object expected");var t,n,r,a=["precision",1,Ji,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if((r=e[n=a[t]])!==void 0)if(eu(r)===r&&r>=a[t+1]&&r<=a[t+2])this[n]=r;else throw Error(vo+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(vo+n+": "+r);return this}var sb=b_(o7);_n=new sb(1);const et=sb;function s7(e){return f7(e)||c7(e)||p7(e)||l7()}function l7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p7(e,t){if(e){if(typeof e=="string")return cg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cg(e,t)}}function c7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function f7(e){if(Array.isArray(e))return cg(e)}function cg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d7=function(t){return t},I_={},B_=function(t){return t===I_},v4=function(t){return function n(){return arguments.length===0||arguments.length===1&&B_(arguments.length<=0?void 0:arguments[0])?n:t.apply(void 0,arguments)}},h7=function e(t,n){return t===1?n:v4(function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.filter(function(l){return l!==I_}).length;return s>=t?n.apply(void 0,a):e(t-s,v4(function(){for(var l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];var h=a.map(function(d){return B_(d)?c.shift():d});return n.apply(void 0,s7(h).concat(c))}))})},s0=function(t){return h7(t.length,t)},fg=function(t,n){for(var r=[],a=t;a<n;++a)r[a-t]=a;return r},m7=s0(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(n){return t[n]}).map(e)}),v7=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return d7;var a=n.reverse(),i=a[0],s=a.slice(1);return function(){return s.reduce(function(l,c){return c(l)},i.apply(void 0,arguments))}},dg=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},x_=function(t){var n=null,r=null;return function(){for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return n&&i.every(function(l,c){return l===n[c]})||(n=i,r=t.apply(void 0,i)),r}};function g7(e){var t;return e===0?t=1:t=Math.floor(new et(e).abs().log(10).toNumber())+1,t}function y7(e,t,n){for(var r=new et(e),a=0,i=[];r.lt(t)&&a<1e5;)i.push(r.toNumber()),r=r.add(n),a++;return i}var b7=s0(function(e,t,n){var r=+e,a=+t;return r+n*(a-r)}),I7=s0(function(e,t,n){var r=t-+e;return r=r||1/0,(n-e)/r}),B7=s0(function(e,t,n){var r=t-+e;return r=r||1/0,Math.max(0,Math.min(1,(n-e)/r))});const l0={rangeStep:y7,getDigitCount:g7,interpolateNumber:b7,uninterpolateNumber:I7,uninterpolateTruncation:B7};function hg(e){return P7(e)||w7(e)||w_(e)||x7()}function x7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function P7(e){if(Array.isArray(e))return mg(e)}function Ws(e,t){return A7(e)||W7(e,t)||w_(e,t)||S7()}function S7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w_(e,t){if(e){if(typeof e=="string")return mg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mg(e,t)}}function mg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W7(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,a=!1,i=void 0;try{for(var s=e[Symbol.iterator](),l;!(r=(l=s.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(c){a=!0,i=c}finally{try{!r&&s.return!=null&&s.return()}finally{if(a)throw i}}return n}}function A7(e){if(Array.isArray(e))return e}function P_(e){var t=Ws(e,2),n=t[0],r=t[1],a=n,i=r;return n>r&&(a=r,i=n),[a,i]}function S_(e,t,n){if(e.lte(0))return new et(0);var r=l0.getDigitCount(e.toNumber()),a=new et(10).pow(r),i=e.div(a),s=r!==1?.05:.1,l=new et(Math.ceil(i.div(s).toNumber())).add(n).mul(s),c=l.mul(a);return t?c:new et(Math.ceil(c))}function _7(e,t,n){var r=1,a=new et(e);if(!a.isint()&&n){var i=Math.abs(e);i<1?(r=new et(10).pow(l0.getDigitCount(e)-1),a=new et(Math.floor(a.div(r).toNumber())).mul(r)):i>1&&(a=new et(Math.floor(e)))}else e===0?a=new et(Math.floor((t-1)/2)):n||(a=new et(Math.floor(e)));var s=Math.floor((t-1)/2),l=v7(m7(function(c){return a.add(new et(c-s).mul(r)).toNumber()}),fg);return l(0,t)}function W_(e,t,n,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(n-1)))return{step:new et(0),tickMin:new et(0),tickMax:new et(0)};var i=S_(new et(t).sub(e).div(n-1),r,a),s;e<=0&&t>=0?s=new et(0):(s=new et(e).add(t).div(2),s=s.sub(new et(s).mod(i)));var l=Math.ceil(s.sub(e).div(i).toNumber()),c=Math.ceil(new et(t).sub(s).div(i).toNumber()),f=l+c+1;return f>n?W_(e,t,n,r,a+1):(f<n&&(c=t>0?c+(n-f):c,l=t>0?l:l+(n-f)),{step:i,tickMin:s.sub(new et(l).mul(i)),tickMax:s.add(new et(c).mul(i))})}function M7(e){var t=Ws(e,2),n=t[0],r=t[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(a,2),l=P_([n,r]),c=Ws(l,2),f=c[0],h=c[1];if(f===-1/0||h===1/0){var d=h===1/0?[f].concat(hg(fg(0,a-1).map(function(){return 1/0}))):[].concat(hg(fg(0,a-1).map(function(){return-1/0})),[h]);return n>r?dg(d):d}if(f===h)return _7(f,a,i);var v=W_(f,h,s,i),y=v.step,x=v.tickMin,I=v.tickMax,b=l0.rangeStep(x,I.add(new et(.1).mul(y)),y);return n>r?dg(b):b}function O7(e,t){var n=Ws(e,2),r=n[0],a=n[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=P_([r,a]),l=Ws(s,2),c=l[0],f=l[1];if(c===-1/0||f===1/0)return[r,a];if(c===f)return[c];var h=Math.max(t,2),d=S_(new et(f).sub(c).div(h-1),i,0),v=[].concat(hg(l0.rangeStep(new et(c),new et(f).sub(new et(.99).mul(d)),d)),[f]);return r>a?dg(v):v}var C7=x_(M7),k7=x_(O7),E7="Invariant failed";function bo(e,t){throw new Error(E7)}var N7=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function xi(e){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xi(e)}function ac(){return ac=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ac.apply(this,arguments)}function T7(e,t){return D7(e)||j7(e,t)||H7(e,t)||R7()}function R7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H7(e,t){if(e){if(typeof e=="string")return g4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g4(e,t)}}function g4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j7(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function D7(e){if(Array.isArray(e))return e}function $7(e,t){if(e==null)return{};var n=L7(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function L7(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function F7(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q7(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,M_(r.key),r)}}function z7(e,t,n){return t&&q7(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function U7(e,t,n){return t=oc(t),V7(e,A_()?Reflect.construct(t,n||[],oc(e).constructor):t.apply(e,n))}function V7(e,t){if(t&&(xi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return G7(e)}function G7(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(A_=function(){return!!e})()}function oc(e){return oc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},oc(e)}function K7(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&vg(e,t)}function vg(e,t){return vg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},vg(e,t)}function __(e,t,n){return t=M_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M_(e){var t=Q7(e,"string");return xi(t)=="symbol"?t:t+""}function Q7(e,t){if(xi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(xi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var tu=(function(e){function t(){return F7(this,t),U7(this,t,arguments)}return K7(t,e),z7(t,[{key:"render",value:function(){var r=this.props,a=r.offset,i=r.layout,s=r.width,l=r.dataKey,c=r.data,f=r.dataPointFormatter,h=r.xAxis,d=r.yAxis,v=$7(r,N7),y=We(v,!1);this.props.direction==="x"&&h.type!=="number"&&bo();var x=c.map(function(I){var b=f(I,l),S=b.x,W=b.y,A=b.value,O=b.errorVal;if(!O)return null;var w=[],_,E;if(Array.isArray(O)){var P=T7(O,2);_=P[0],E=P[1]}else _=E=O;if(i==="vertical"){var C=h.scale,T=W+a,j=T+s,N=T-s,$=C(A-_),V=C(A+E);w.push({x1:V,y1:j,x2:V,y2:N}),w.push({x1:$,y1:T,x2:V,y2:T}),w.push({x1:$,y1:j,x2:$,y2:N})}else if(i==="horizontal"){var q=d.scale,G=S+a,K=G-s,L=G+s,Y=q(A-_),Q=q(A+E);w.push({x1:K,y1:Q,x2:L,y2:Q}),w.push({x1:G,y1:Y,x2:G,y2:Q}),w.push({x1:K,y1:Y,x2:L,y2:Y})}return R.createElement(De,ac({className:"recharts-errorBar",key:"bar-".concat(w.map(function(H){return"".concat(H.x1,"-").concat(H.x2,"-").concat(H.y1,"-").concat(H.y2)}))},y),w.map(function(H){return R.createElement("line",ac({},H,{key:"line-".concat(H.x1,"-").concat(H.x2,"-").concat(H.y1,"-").concat(H.y2)}))}))});return R.createElement(De,{className:"recharts-errorBars"},x)}}])})(R.Component);__(tu,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});__(tu,"displayName","ErrorBar");function As(e){"@babel/helpers - typeof";return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},As(e)}function y4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function no(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y4(Object(n),!0).forEach(function(r){Y7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Y7(e,t,n){return t=X7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X7(e){var t=Z7(e,"string");return As(t)=="symbol"?t:t+""}function Z7(e,t){if(As(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(As(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var O_=function(t){var n=t.children,r=t.formattedGraphicalItems,a=t.legendWidth,i=t.legendContent,s=Sn(n,Oa);if(!s)return null;var l=Oa.defaultProps,c=l!==void 0?no(no({},l),s.props):{},f;return s.props&&s.props.payload?f=s.props&&s.props.payload:i==="children"?f=(r||[]).reduce(function(h,d){var v=d.item,y=d.props,x=y.sectors||y.data||[];return h.concat(x.map(function(I){return{type:s.props.iconType||v.props.legendType,value:I.name,color:I.fill,payload:I}}))},[]):f=(r||[]).map(function(h){var d=h.item,v=d.type.defaultProps,y=v!==void 0?no(no({},v),d.props):{},x=y.dataKey,I=y.name,b=y.legendType,S=y.hide;return{inactive:S,dataKey:x,type:c.iconType||b||"square",color:lb(d),value:I||x,payload:y}}),no(no(no({},c),Oa.getWithHeight(s,a)),{},{payload:f,item:s})};function _s(e){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_s(e)}function b4(e){return n9(e)||t9(e)||e9(e)||J7()}function J7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e9(e,t){if(e){if(typeof e=="string")return gg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gg(e,t)}}function t9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function n9(e){if(Array.isArray(e))return gg(e)}function gg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?I4(Object(n),!0).forEach(function(r){ci(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ci(e,t,n){return t=r9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r9(e){var t=a9(e,"string");return _s(t)=="symbol"?t:t+""}function a9(e,t){if(_s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lt(e,t,n){return Ee(e)||Ee(t)?n:Rt(t)?Mn(e,t,n):ke(t)?t(e):n}function os(e,t,n,r){var a=n7(e,function(l){return lt(l,t)});if(n==="number"){var i=a.filter(function(l){return le(l)||parseFloat(l)});return i.length?[u0(i),Aa(i)]:[1/0,-1/0]}var s=r?a.filter(function(l){return!Ee(l)}):a;return s.map(function(l){return Rt(l)||l instanceof Date?l:""})}var o9=function(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=-1,l=(n=r==null?void 0:r.length)!==null&&n!==void 0?n:0;if(l<=1)return 0;if(i&&i.axisType==="angleAxis"&&Math.abs(Math.abs(i.range[1]-i.range[0])-360)<=1e-6)for(var c=i.range,f=0;f<l;f++){var h=f>0?a[f-1].coordinate:a[l-1].coordinate,d=a[f].coordinate,v=f>=l-1?a[0].coordinate:a[f+1].coordinate,y=void 0;if(an(d-h)!==an(v-d)){var x=[];if(an(v-d)===an(c[1]-c[0])){y=v;var I=d+c[1]-c[0];x[0]=Math.min(I,(I+h)/2),x[1]=Math.max(I,(I+h)/2)}else{y=h;var b=v+c[1]-c[0];x[0]=Math.min(d,(b+d)/2),x[1]=Math.max(d,(b+d)/2)}var S=[Math.min(d,(y+d)/2),Math.max(d,(y+d)/2)];if(t>S[0]&&t<=S[1]||t>=x[0]&&t<=x[1]){s=a[f].index;break}}else{var W=Math.min(h,v),A=Math.max(h,v);if(t>(W+d)/2&&t<=(A+d)/2){s=a[f].index;break}}}else for(var O=0;O<l;O++)if(O===0&&t<=(r[O].coordinate+r[O+1].coordinate)/2||O>0&&O<l-1&&t>(r[O].coordinate+r[O-1].coordinate)/2&&t<=(r[O].coordinate+r[O+1].coordinate)/2||O===l-1&&t>(r[O].coordinate+r[O-1].coordinate)/2){s=r[O].index;break}return s},lb=function(t){var n,r=t,a=r.type.displayName,i=(n=t.type)!==null&&n!==void 0&&n.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,s=i.stroke,l=i.fill,c;switch(a){case"Line":c=s;break;case"Area":case"Radar":c=s&&s!=="none"?s:l;break;default:c=l;break}return c},i9=function(t){var n=t.barSize,r=t.totalSize,a=t.stackGroups,i=a===void 0?{}:a;if(!i)return{};for(var s={},l=Object.keys(i),c=0,f=l.length;c<f;c++)for(var h=i[l[c]].stackGroups,d=Object.keys(h),v=0,y=d.length;v<y;v++){var x=h[d[v]],I=x.items,b=x.cateAxisId,S=I.filter(function(E){return Ur(E.type).indexOf("Bar")>=0});if(S&&S.length){var W=S[0].type.defaultProps,A=W!==void 0?bt(bt({},W),S[0].props):S[0].props,O=A.barSize,w=A[b];s[w]||(s[w]=[]);var _=Ee(O)?n:O;s[w].push({item:S[0],stackList:S.slice(1),barSize:Ee(_)?void 0:on(_,r,0)})}}return s},u9=function(t){var n=t.barGap,r=t.barCategoryGap,a=t.bandSize,i=t.sizeList,s=i===void 0?[]:i,l=t.maxBarSize,c=s.length;if(c<1)return null;var f=on(n,a,0,!0),h,d=[];if(s[0].barSize===+s[0].barSize){var v=!1,y=a/c,x=s.reduce(function(O,w){return O+w.barSize||0},0);x+=(c-1)*f,x>=a&&(x-=(c-1)*f,f=0),x>=a&&y>0&&(v=!0,y*=.9,x=c*y);var I=(a-x)/2>>0,b={offset:I-f,size:0};h=s.reduce(function(O,w){var _={item:w.item,position:{offset:b.offset+b.size+f,size:v?y:w.barSize}},E=[].concat(b4(O),[_]);return b=E[E.length-1].position,w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){E.push({item:P,position:b})}),E},d)}else{var S=on(r,a,0,!0);a-2*S-(c-1)*f<=0&&(f=0);var W=(a-2*S-(c-1)*f)/c;W>1&&(W>>=0);var A=l===+l?Math.min(W,l):W;h=s.reduce(function(O,w,_){var E=[].concat(b4(O),[{item:w.item,position:{offset:S+(W+f)*_+(W-A)/2,size:A}}]);return w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){E.push({item:P,position:E[E.length-1].position})}),E},d)}return h},s9=function(t,n,r,a){var i=r.children,s=r.width,l=r.margin,c=s-(l.left||0)-(l.right||0),f=O_({children:i,legendWidth:c});if(f){var h=a||{},d=h.width,v=h.height,y=f.align,x=f.verticalAlign,I=f.layout;if((I==="vertical"||I==="horizontal"&&x==="middle")&&y!=="center"&&le(t[y]))return bt(bt({},t),{},ci({},y,t[y]+(d||0)));if((I==="horizontal"||I==="vertical"&&y==="center")&&x!=="middle"&&le(t[x]))return bt(bt({},t),{},ci({},x,t[x]+(v||0)))}return t},l9=function(t,n,r){return Ee(n)?!0:t==="horizontal"?n==="yAxis":t==="vertical"||r==="x"?n==="xAxis":r==="y"?n==="yAxis":!0},C_=function(t,n,r,a,i){var s=n.props.children,l=sn(s,tu).filter(function(f){return l9(a,i,f.props.direction)});if(l&&l.length){var c=l.map(function(f){return f.props.dataKey});return t.reduce(function(f,h){var d=lt(h,r);if(Ee(d))return f;var v=Array.isArray(d)?[u0(d),Aa(d)]:[d,d],y=c.reduce(function(x,I){var b=lt(h,I,0),S=v[0]-Math.abs(Array.isArray(b)?b[0]:b),W=v[1]+Math.abs(Array.isArray(b)?b[1]:b);return[Math.min(S,x[0]),Math.max(W,x[1])]},[1/0,-1/0]);return[Math.min(y[0],f[0]),Math.max(y[1],f[1])]},[1/0,-1/0])}return null},p9=function(t,n,r,a,i){var s=n.map(function(l){return C_(t,l,r,i,a)}).filter(function(l){return!Ee(l)});return s&&s.length?s.reduce(function(l,c){return[Math.min(l[0],c[0]),Math.max(l[1],c[1])]},[1/0,-1/0]):null},k_=function(t,n,r,a,i){var s=n.map(function(c){var f=c.props.dataKey;return r==="number"&&f&&C_(t,c,f,a)||os(t,f,r,i)});if(r==="number")return s.reduce(function(c,f){return[Math.min(c[0],f[0]),Math.max(c[1],f[1])]},[1/0,-1/0]);var l={};return s.reduce(function(c,f){for(var h=0,d=f.length;h<d;h++)l[f[h]]||(l[f[h]]=!0,c.push(f[h]));return c},[])},E_=function(t,n){return t==="horizontal"&&n==="xAxis"||t==="vertical"&&n==="yAxis"||t==="centric"&&n==="angleAxis"||t==="radial"&&n==="radiusAxis"},N_=function(t,n,r,a){if(a)return t.map(function(c){return c.coordinate});var i,s,l=t.map(function(c){return c.coordinate===n&&(i=!0),c.coordinate===r&&(s=!0),c.coordinate});return i||l.push(n),s||l.push(r),l},Fr=function(t,n,r){if(!t)return null;var a=t.scale,i=t.duplicateDomain,s=t.type,l=t.range,c=t.realScaleType==="scaleBand"?a.bandwidth()/2:2,f=(n||r)&&s==="category"&&a.bandwidth?a.bandwidth()/c:0;if(f=t.axisType==="angleAxis"&&(l==null?void 0:l.length)>=2?an(l[0]-l[1])*2*f:f,n&&(t.ticks||t.niceTicks)){var h=(t.ticks||t.niceTicks).map(function(d){var v=i?i.indexOf(d):d;return{coordinate:a(v)+f,value:d,offset:f}});return h.filter(function(d){return!Yi(d.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(d,v){return{coordinate:a(d)+f,value:d,index:v,offset:f}}):a.ticks&&!r?a.ticks(t.tickCount).map(function(d){return{coordinate:a(d)+f,value:d,offset:f}}):a.domain().map(function(d,v){return{coordinate:a(d)+f,value:i?i[d]:d,index:v,offset:f}})},Vm=new WeakMap,xp=function(t,n){if(typeof n!="function")return t;Vm.has(t)||Vm.set(t,new WeakMap);var r=Vm.get(t);if(r.has(n))return r.get(n);var a=function(){t.apply(void 0,arguments),n.apply(void 0,arguments)};return r.set(n,a),a},T_=function(t,n,r){var a=t.scale,i=t.type,s=t.layout,l=t.axisType;if(a==="auto")return s==="radial"&&l==="radiusAxis"?{scale:Is(),realScaleType:"band"}:s==="radial"&&l==="angleAxis"?{scale:Jp(),realScaleType:"linear"}:i==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0||n.indexOf("ComposedChart")>=0&&!r)?{scale:as(),realScaleType:"point"}:i==="category"?{scale:Is(),realScaleType:"band"}:{scale:Jp(),realScaleType:"linear"};if(Qs(a)){var c="scale".concat(Vc(a));return{scale:(o4[c]||as)(),realScaleType:o4[c]?c:"point"}}return ke(a)?{scale:a}:{scale:as(),realScaleType:"point"}},B4=1e-4,R_=function(t){var n=t.domain();if(!(!n||n.length<=2)){var r=n.length,a=t.range(),i=Math.min(a[0],a[1])-B4,s=Math.max(a[0],a[1])+B4,l=t(n[0]),c=t(n[r-1]);(l<i||l>s||c<i||c>s)&&t.domain([n[0],n[r-1]])}},c9=function(t,n){if(!t)return null;for(var r=0,a=t.length;r<a;r++)if(t[r].item===n)return t[r].position;return null},f9=function(t,n){if(!n||n.length!==2||!le(n[0])||!le(n[1]))return t;var r=Math.min(n[0],n[1]),a=Math.max(n[0],n[1]),i=[t[0],t[1]];return(!le(t[0])||t[0]<r)&&(i[0]=r),(!le(t[1])||t[1]>a)&&(i[1]=a),i[0]>a&&(i[0]=a),i[1]<r&&(i[1]=r),i},d9=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var i=0,s=0,l=0;l<n;++l){var c=Yi(t[l][r][1])?t[l][r][0]:t[l][r][1];c>=0?(t[l][r][0]=i,t[l][r][1]=i+c,i=t[l][r][1]):(t[l][r][0]=s,t[l][r][1]=s+c,s=t[l][r][1])}},h9=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var i=0,s=0;s<n;++s){var l=Yi(t[s][r][1])?t[s][r][0]:t[s][r][1];l>=0?(t[s][r][0]=i,t[s][r][1]=i+l,i=t[s][r][1]):(t[s][r][0]=0,t[s][r][1]=0)}},m9={sign:d9,expand:nj,none:hi,silhouette:rj,wiggle:aj,positive:h9},v9=function(t,n,r){var a=n.map(function(l){return l.props.dataKey}),i=m9[r],s=tj().keys(a).value(function(l,c){return+lt(l,c,0)}).order(Gv).offset(i);return s(t)},g9=function(t,n,r,a,i,s){if(!t)return null;var l=s?n.reverse():n,c={},f=l.reduce(function(d,v){var y,x=(y=v.type)!==null&&y!==void 0&&y.defaultProps?bt(bt({},v.type.defaultProps),v.props):v.props,I=x.stackId,b=x.hide;if(b)return d;var S=x[r],W=d[S]||{hasStack:!1,stackGroups:{}};if(Rt(I)){var A=W.stackGroups[I]||{numericAxisId:r,cateAxisId:a,items:[]};A.items.push(v),W.hasStack=!0,W.stackGroups[I]=A}else W.stackGroups[ja("_stackId_")]={numericAxisId:r,cateAxisId:a,items:[v]};return bt(bt({},d),{},ci({},S,W))},c),h={};return Object.keys(f).reduce(function(d,v){var y=f[v];if(y.hasStack){var x={};y.stackGroups=Object.keys(y.stackGroups).reduce(function(I,b){var S=y.stackGroups[b];return bt(bt({},I),{},ci({},b,{numericAxisId:r,cateAxisId:a,items:S.items,stackedData:v9(t,S.items,i)}))},x)}return bt(bt({},d),{},ci({},v,y))},h)},H_=function(t,n){var r=n.realScaleType,a=n.type,i=n.tickCount,s=n.originalDomain,l=n.allowDecimals,c=r||n.scale;if(c!=="auto"&&c!=="linear")return null;if(i&&a==="number"&&s&&(s[0]==="auto"||s[1]==="auto")){var f=t.domain();if(!f.length)return null;var h=C7(f,i,l);return t.domain([u0(h),Aa(h)]),{niceTicks:h}}if(i&&a==="number"){var d=t.domain(),v=k7(d,i,l);return{niceTicks:v}}return null};function wi(e){var t=e.axis,n=e.ticks,r=e.bandSize,a=e.entry,i=e.index,s=e.dataKey;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!Ee(a[t.dataKey])){var l=Np(n,"value",a[t.dataKey]);if(l)return l.coordinate+r/2}return n[i]?n[i].coordinate+r/2:null}var c=lt(a,Ee(s)?t.dataKey:s);return Ee(c)?null:t.scale(c)}var x4=function(t){var n=t.axis,r=t.ticks,a=t.offset,i=t.bandSize,s=t.entry,l=t.index;if(n.type==="category")return r[l]?r[l].coordinate+a:null;var c=lt(s,n.dataKey,n.domain[l]);return Ee(c)?null:n.scale(c)-i/2+a},y9=function(t){var n=t.numericAxis,r=n.scale.domain();if(n.type==="number"){var a=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]);return a<=0&&i>=0?0:i<0?i:a}return r[0]},b9=function(t,n){var r,a=(r=t.type)!==null&&r!==void 0&&r.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,i=a.stackId;if(Rt(i)){var s=n[i];if(s){var l=s.items.indexOf(t);return l>=0?s.stackedData[l]:null}}return null},I9=function(t){return t.reduce(function(n,r){return[u0(r.concat([n[0]]).filter(le)),Aa(r.concat([n[1]]).filter(le))]},[1/0,-1/0])},j_=function(t,n,r){return Object.keys(t).reduce(function(a,i){var s=t[i],l=s.stackedData,c=l.reduce(function(f,h){var d=I9(h.slice(n,r+1));return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);return[Math.min(c[0],a[0]),Math.max(c[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},w4=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,P4=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,yg=function(t,n,r){if(ke(t))return t(n,r);if(!Array.isArray(t))return n;var a=[];if(le(t[0]))a[0]=r?t[0]:Math.min(t[0],n[0]);else if(w4.test(t[0])){var i=+w4.exec(t[0])[1];a[0]=n[0]-i}else ke(t[0])?a[0]=t[0](n[0]):a[0]=n[0];if(le(t[1]))a[1]=r?t[1]:Math.max(t[1],n[1]);else if(P4.test(t[1])){var s=+P4.exec(t[1])[1];a[1]=n[1]+s}else ke(t[1])?a[1]=t[1](n[1]):a[1]=n[1];return a},ic=function(t,n,r){if(t&&t.scale&&t.scale.bandwidth){var a=t.scale.bandwidth();if(!r||a>0)return a}if(t&&n&&n.length>=2){for(var i=Ry(n,function(d){return d.coordinate}),s=1/0,l=1,c=i.length;l<c;l++){var f=i[l],h=i[l-1];s=Math.min((f.coordinate||0)-(h.coordinate||0),s)}return s===1/0?0:s}return r?void 0:0},S4=function(t,n,r){return!t||!t.length||Ta(t,Mn(r,"type.defaultProps.domain"))?n:t},D_=function(t,n){var r=t.type.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,a=r.dataKey,i=r.name,s=r.unit,l=r.formatter,c=r.tooltipType,f=r.chartType,h=r.hide;return bt(bt({},We(t,!1)),{},{dataKey:a,unit:s,formatter:l,name:i||a,color:lb(t),value:lt(n,a),type:c,payload:n,chartType:f,hide:h})};function Ms(e){"@babel/helpers - typeof";return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ms(e)}function W4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function jr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W4(Object(n),!0).forEach(function(r){$_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $_(e,t,n){return t=B9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B9(e){var t=x9(e,"string");return Ms(t)=="symbol"?t:t+""}function x9(e,t){if(Ms(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function w9(e,t){return A9(e)||W9(e,t)||S9(e,t)||P9()}function P9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S9(e,t){if(e){if(typeof e=="string")return A4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A4(e,t)}}function A4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function A9(e){if(Array.isArray(e))return e}var uc=Math.PI/180,_9=function(t){return t*180/Math.PI},ot=function(t,n,r,a){return{x:t+Math.cos(-uc*a)*r,y:n+Math.sin(-uc*a)*r}},L_=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(t-(r.left||0)-(r.right||0)),Math.abs(n-(r.top||0)-(r.bottom||0)))/2},M9=function(t,n,r,a,i){var s=t.width,l=t.height,c=t.startAngle,f=t.endAngle,h=on(t.cx,s,s/2),d=on(t.cy,l,l/2),v=L_(s,l,r),y=on(t.innerRadius,v,0),x=on(t.outerRadius,v,v*.8),I=Object.keys(n);return I.reduce(function(b,S){var W=n[S],A=W.domain,O=W.reversed,w;if(Ee(W.range))a==="angleAxis"?w=[c,f]:a==="radiusAxis"&&(w=[y,x]),O&&(w=[w[1],w[0]]);else{w=W.range;var _=w,E=w9(_,2);c=E[0],f=E[1]}var P=T_(W,i),C=P.realScaleType,T=P.scale;T.domain(A).range(w),R_(T);var j=H_(T,jr(jr({},W),{},{realScaleType:C})),N=jr(jr(jr({},W),j),{},{range:w,radius:x,realScaleType:C,scale:T,cx:h,cy:d,innerRadius:y,outerRadius:x,startAngle:c,endAngle:f});return jr(jr({},b),{},$_({},S,N))},{})},O9=function(t,n){var r=t.x,a=t.y,i=n.x,s=n.y;return Math.sqrt(Math.pow(r-i,2)+Math.pow(a-s,2))},C9=function(t,n){var r=t.x,a=t.y,i=n.cx,s=n.cy,l=O9({x:r,y:a},{x:i,y:s});if(l<=0)return{radius:l};var c=(r-i)/l,f=Math.acos(c);return a>s&&(f=2*Math.PI-f),{radius:l,angle:_9(f),angleInRadian:f}},k9=function(t){var n=t.startAngle,r=t.endAngle,a=Math.floor(n/360),i=Math.floor(r/360),s=Math.min(a,i);return{startAngle:n-s*360,endAngle:r-s*360}},E9=function(t,n){var r=n.startAngle,a=n.endAngle,i=Math.floor(r/360),s=Math.floor(a/360),l=Math.min(i,s);return t+l*360},_4=function(t,n){var r=t.x,a=t.y,i=C9({x:r,y:a},n),s=i.radius,l=i.angle,c=n.innerRadius,f=n.outerRadius;if(s<c||s>f)return!1;if(s===0)return!0;var h=k9(n),d=h.startAngle,v=h.endAngle,y=l,x;if(d<=v){for(;y>v;)y-=360;for(;y<d;)y+=360;x=y>=d&&y<=v}else{for(;y>d;)y-=360;for(;y<v;)y+=360;x=y>=v&&y<=d}return x?jr(jr({},n),{},{radius:s,angle:E9(y,n)}):null},F_=function(t){return!X.isValidElement(t)&&!ke(t)&&typeof t!="boolean"?t.className:""};function Os(e){"@babel/helpers - typeof";return Os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Os(e)}var N9=["offset"];function T9(e){return D9(e)||j9(e)||H9(e)||R9()}function R9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H9(e,t){if(e){if(typeof e=="string")return bg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bg(e,t)}}function j9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function D9(e){if(Array.isArray(e))return bg(e)}function bg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $9(e,t){if(e==null)return{};var n=L9(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function L9(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function M4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?M4(Object(n),!0).forEach(function(r){F9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F9(e,t,n){return t=q9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q9(e){var t=z9(e,"string");return Os(t)=="symbol"?t:t+""}function z9(e,t){if(Os(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Os(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cs.apply(this,arguments)}var U9=function(t){var n=t.value,r=t.formatter,a=Ee(t.children)?n:t.children;return ke(r)?r(a):a},V9=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),360);return r*a},G9=function(t,n,r){var a=t.position,i=t.viewBox,s=t.offset,l=t.className,c=i,f=c.cx,h=c.cy,d=c.innerRadius,v=c.outerRadius,y=c.startAngle,x=c.endAngle,I=c.clockWise,b=(d+v)/2,S=V9(y,x),W=S>=0?1:-1,A,O;a==="insideStart"?(A=y+W*s,O=I):a==="insideEnd"?(A=x-W*s,O=!I):a==="end"&&(A=x+W*s,O=I),O=S<=0?O:!O;var w=ot(f,h,b,A),_=ot(f,h,b,A+(O?1:-1)*359),E="M".concat(w.x,",").concat(w.y,`
    A`).concat(b,",").concat(b,",0,1,").concat(O?0:1,`,
    `).concat(_.x,",").concat(_.y),P=Ee(t.id)?ja("recharts-radial-line-"):t.id;return R.createElement("text",Cs({},r,{dominantBaseline:"central",className:He("recharts-radial-bar-label",l)}),R.createElement("defs",null,R.createElement("path",{id:P,d:E})),R.createElement("textPath",{xlinkHref:"#".concat(P)},n))},K9=function(t){var n=t.viewBox,r=t.offset,a=t.position,i=n,s=i.cx,l=i.cy,c=i.innerRadius,f=i.outerRadius,h=i.startAngle,d=i.endAngle,v=(h+d)/2;if(a==="outside"){var y=ot(s,l,f+r,v),x=y.x,I=y.y;return{x,y:I,textAnchor:x>=s?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"end"};var b=(c+f)/2,S=ot(s,l,b,v),W=S.x,A=S.y;return{x:W,y:A,textAnchor:"middle",verticalAnchor:"middle"}},Q9=function(t){var n=t.viewBox,r=t.parentViewBox,a=t.offset,i=t.position,s=n,l=s.x,c=s.y,f=s.width,h=s.height,d=h>=0?1:-1,v=d*a,y=d>0?"end":"start",x=d>0?"start":"end",I=f>=0?1:-1,b=I*a,S=I>0?"end":"start",W=I>0?"start":"end";if(i==="top"){var A={x:l+f/2,y:c-d*a,textAnchor:"middle",verticalAnchor:y};return Tt(Tt({},A),r?{height:Math.max(c-r.y,0),width:f}:{})}if(i==="bottom"){var O={x:l+f/2,y:c+h+v,textAnchor:"middle",verticalAnchor:x};return Tt(Tt({},O),r?{height:Math.max(r.y+r.height-(c+h),0),width:f}:{})}if(i==="left"){var w={x:l-b,y:c+h/2,textAnchor:S,verticalAnchor:"middle"};return Tt(Tt({},w),r?{width:Math.max(w.x-r.x,0),height:h}:{})}if(i==="right"){var _={x:l+f+b,y:c+h/2,textAnchor:W,verticalAnchor:"middle"};return Tt(Tt({},_),r?{width:Math.max(r.x+r.width-_.x,0),height:h}:{})}var E=r?{width:f,height:h}:{};return i==="insideLeft"?Tt({x:l+b,y:c+h/2,textAnchor:W,verticalAnchor:"middle"},E):i==="insideRight"?Tt({x:l+f-b,y:c+h/2,textAnchor:S,verticalAnchor:"middle"},E):i==="insideTop"?Tt({x:l+f/2,y:c+v,textAnchor:"middle",verticalAnchor:x},E):i==="insideBottom"?Tt({x:l+f/2,y:c+h-v,textAnchor:"middle",verticalAnchor:y},E):i==="insideTopLeft"?Tt({x:l+b,y:c+v,textAnchor:W,verticalAnchor:x},E):i==="insideTopRight"?Tt({x:l+f-b,y:c+v,textAnchor:S,verticalAnchor:x},E):i==="insideBottomLeft"?Tt({x:l+b,y:c+h-v,textAnchor:W,verticalAnchor:y},E):i==="insideBottomRight"?Tt({x:l+f-b,y:c+h-v,textAnchor:S,verticalAnchor:y},E):Qi(i)&&(le(i.x)||lo(i.x))&&(le(i.y)||lo(i.y))?Tt({x:l+on(i.x,f),y:c+on(i.y,h),textAnchor:"end",verticalAnchor:"end"},E):Tt({x:l+f/2,y:c+h/2,textAnchor:"middle",verticalAnchor:"middle"},E)},Y9=function(t){return"cx"in t&&le(t.cx)};function qt(e){var t=e.offset,n=t===void 0?5:t,r=$9(e,N9),a=Tt({offset:n},r),i=a.viewBox,s=a.position,l=a.value,c=a.children,f=a.content,h=a.className,d=h===void 0?"":h,v=a.textBreakAll;if(!i||Ee(l)&&Ee(c)&&!X.isValidElement(f)&&!ke(f))return null;if(X.isValidElement(f))return X.cloneElement(f,a);var y;if(ke(f)){if(y=X.createElement(f,a),X.isValidElement(y))return y}else y=U9(a);var x=Y9(i),I=We(a,!0);if(x&&(s==="insideStart"||s==="insideEnd"||s==="end"))return G9(a,y,I);var b=x?K9(a):Q9(a);return R.createElement(go,Cs({className:He("recharts-label",d)},I,b,{breakAll:v}),y)}qt.displayName="Label";var q_=function(t){var n=t.cx,r=t.cy,a=t.angle,i=t.startAngle,s=t.endAngle,l=t.r,c=t.radius,f=t.innerRadius,h=t.outerRadius,d=t.x,v=t.y,y=t.top,x=t.left,I=t.width,b=t.height,S=t.clockWise,W=t.labelViewBox;if(W)return W;if(le(I)&&le(b)){if(le(d)&&le(v))return{x:d,y:v,width:I,height:b};if(le(y)&&le(x))return{x:y,y:x,width:I,height:b}}return le(d)&&le(v)?{x:d,y:v,width:0,height:0}:le(n)&&le(r)?{cx:n,cy:r,startAngle:i||a||0,endAngle:s||a||0,innerRadius:f||0,outerRadius:h||c||l||0,clockWise:S}:t.viewBox?t.viewBox:{}},X9=function(t,n){return t?t===!0?R.createElement(qt,{key:"label-implicit",viewBox:n}):Rt(t)?R.createElement(qt,{key:"label-implicit",viewBox:n,value:t}):X.isValidElement(t)?t.type===qt?X.cloneElement(t,{key:"label-implicit",viewBox:n}):R.createElement(qt,{key:"label-implicit",content:t,viewBox:n}):ke(t)?R.createElement(qt,{key:"label-implicit",content:t,viewBox:n}):Qi(t)?R.createElement(qt,Cs({viewBox:n},t,{key:"label-implicit"})):null:null},Z9=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&r&&!t.label)return null;var a=t.children,i=q_(t),s=sn(a,qt).map(function(c,f){return X.cloneElement(c,{viewBox:n||i,key:"label-".concat(f)})});if(!r)return s;var l=X9(t.label,n||i);return[l].concat(T9(s))};qt.parseViewBox=q_;qt.renderCallByParent=Z9;var Gm,O4;function J9(){if(O4)return Gm;O4=1;function e(t){var n=t==null?0:t.length;return n?t[n-1]:void 0}return Gm=e,Gm}var eF=J9();const tF=Xe(eF);function ks(e){"@babel/helpers - typeof";return ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ks(e)}var nF=["valueAccessor"],rF=["data","dataKey","clockWise","id","textBreakAll"];function aF(e){return sF(e)||uF(e)||iF(e)||oF()}function oF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iF(e,t){if(e){if(typeof e=="string")return Ig(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ig(e,t)}}function uF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sF(e){if(Array.isArray(e))return Ig(e)}function Ig(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function sc(){return sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sc.apply(this,arguments)}function C4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function k4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C4(Object(n),!0).forEach(function(r){lF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lF(e,t,n){return t=pF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pF(e){var t=cF(e,"string");return ks(t)=="symbol"?t:t+""}function cF(e,t){if(ks(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ks(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function E4(e,t){if(e==null)return{};var n=fF(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fF(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var dF=function(t){return Array.isArray(t.value)?tF(t.value):t.value};function lr(e){var t=e.valueAccessor,n=t===void 0?dF:t,r=E4(e,nF),a=r.data,i=r.dataKey,s=r.clockWise,l=r.id,c=r.textBreakAll,f=E4(r,rF);return!a||!a.length?null:R.createElement(De,{className:"recharts-label-list"},a.map(function(h,d){var v=Ee(i)?n(h,d):lt(h&&h.payload,i),y=Ee(l)?{}:{id:"".concat(l,"-").concat(d)};return R.createElement(qt,sc({},We(h,!0),f,y,{parentViewBox:h.parentViewBox,value:v,textBreakAll:c,viewBox:qt.parseViewBox(Ee(s)?h:k4(k4({},h),{},{clockWise:s})),key:"label-".concat(d),index:d}))}))}lr.displayName="LabelList";function hF(e,t){return e?e===!0?R.createElement(lr,{key:"labelList-implicit",data:t}):R.isValidElement(e)||ke(e)?R.createElement(lr,{key:"labelList-implicit",data:t,content:e}):Qi(e)?R.createElement(lr,sc({data:t},e,{key:"labelList-implicit"})):null:null}function mF(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&n&&!e.label)return null;var r=e.children,a=sn(r,lr).map(function(s,l){return X.cloneElement(s,{data:t,key:"labelList-".concat(l)})});if(!n)return a;var i=hF(e.label,t);return[i].concat(aF(a))}lr.renderCallByParent=mF;function Es(e){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Es(e)}function Bg(){return Bg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bg.apply(this,arguments)}function N4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N4(Object(n),!0).forEach(function(r){vF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vF(e,t,n){return t=gF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gF(e){var t=yF(e,"string");return Es(t)=="symbol"?t:t+""}function yF(e,t){if(Es(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Es(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var bF=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),359.999);return r*a},wp=function(t){var n=t.cx,r=t.cy,a=t.radius,i=t.angle,s=t.sign,l=t.isExternal,c=t.cornerRadius,f=t.cornerIsExternal,h=c*(l?1:-1)+a,d=Math.asin(c/h)/uc,v=f?i:i+s*d,y=ot(n,r,h,v),x=ot(n,r,a,v),I=f?i-s*d:i,b=ot(n,r,h*Math.cos(d*uc),I);return{center:y,circleTangency:x,lineTangency:b,theta:d}},z_=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,i=t.outerRadius,s=t.startAngle,l=t.endAngle,c=bF(s,l),f=s+c,h=ot(n,r,i,s),d=ot(n,r,i,f),v="M ".concat(h.x,",").concat(h.y,`
    A `).concat(i,",").concat(i,`,0,
    `).concat(+(Math.abs(c)>180),",").concat(+(s>f),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(a>0){var y=ot(n,r,a,s),x=ot(n,r,a,f);v+="L ".concat(x.x,",").concat(x.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(c)>180),",").concat(+(s<=f),`,
            `).concat(y.x,",").concat(y.y," Z")}else v+="L ".concat(n,",").concat(r," Z");return v},IF=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,i=t.outerRadius,s=t.cornerRadius,l=t.forceCornerRadius,c=t.cornerIsExternal,f=t.startAngle,h=t.endAngle,d=an(h-f),v=wp({cx:n,cy:r,radius:i,angle:f,sign:d,cornerRadius:s,cornerIsExternal:c}),y=v.circleTangency,x=v.lineTangency,I=v.theta,b=wp({cx:n,cy:r,radius:i,angle:h,sign:-d,cornerRadius:s,cornerIsExternal:c}),S=b.circleTangency,W=b.lineTangency,A=b.theta,O=c?Math.abs(f-h):Math.abs(f-h)-I-A;if(O<0)return l?"M ".concat(x.x,",").concat(x.y,`
        a`).concat(s,",").concat(s,",0,0,1,").concat(s*2,`,0
        a`).concat(s,",").concat(s,",0,0,1,").concat(-s*2,`,0
      `):z_({cx:n,cy:r,innerRadius:a,outerRadius:i,startAngle:f,endAngle:h});var w="M ".concat(x.x,",").concat(x.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(y.x,",").concat(y.y,`
    A`).concat(i,",").concat(i,",0,").concat(+(O>180),",").concat(+(d<0),",").concat(S.x,",").concat(S.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(W.x,",").concat(W.y,`
  `);if(a>0){var _=wp({cx:n,cy:r,radius:a,angle:f,sign:d,isExternal:!0,cornerRadius:s,cornerIsExternal:c}),E=_.circleTangency,P=_.lineTangency,C=_.theta,T=wp({cx:n,cy:r,radius:a,angle:h,sign:-d,isExternal:!0,cornerRadius:s,cornerIsExternal:c}),j=T.circleTangency,N=T.lineTangency,$=T.theta,V=c?Math.abs(f-h):Math.abs(f-h)-C-$;if(V<0&&s===0)return"".concat(w,"L").concat(n,",").concat(r,"Z");w+="L".concat(N.x,",").concat(N.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(j.x,",").concat(j.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(V>180),",").concat(+(d>0),",").concat(E.x,",").concat(E.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(P.x,",").concat(P.y,"Z")}else w+="L".concat(n,",").concat(r,"Z");return w},BF={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},U_=function(t){var n=T4(T4({},BF),t),r=n.cx,a=n.cy,i=n.innerRadius,s=n.outerRadius,l=n.cornerRadius,c=n.forceCornerRadius,f=n.cornerIsExternal,h=n.startAngle,d=n.endAngle,v=n.className;if(s<i||h===d)return null;var y=He("recharts-sector",v),x=s-i,I=on(l,x,0,!0),b;return I>0&&Math.abs(h-d)<360?b=IF({cx:r,cy:a,innerRadius:i,outerRadius:s,cornerRadius:Math.min(I,x/2),forceCornerRadius:c,cornerIsExternal:f,startAngle:h,endAngle:d}):b=z_({cx:r,cy:a,innerRadius:i,outerRadius:s,startAngle:h,endAngle:d}),R.createElement("path",Bg({},We(n,!0),{className:y,d:b,role:"img"}))};function Ns(e){"@babel/helpers - typeof";return Ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ns(e)}function xg(){return xg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xg.apply(this,arguments)}function R4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function H4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?R4(Object(n),!0).forEach(function(r){xF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xF(e,t,n){return t=wF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wF(e){var t=PF(e,"string");return Ns(t)=="symbol"?t:t+""}function PF(e,t){if(Ns(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ns(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var j4={curveBasisClosed:zH,curveBasisOpen:UH,curveBasis:qH,curveBumpX:MH,curveBumpY:OH,curveLinearClosed:VH,curveLinear:Kc,curveMonotoneX:GH,curveMonotoneY:KH,curveNatural:QH,curveStep:YH,curveStepAfter:ZH,curveStepBefore:XH},Pp=function(t){return t.x===+t.x&&t.y===+t.y},Qu=function(t){return t.x},Yu=function(t){return t.y},SF=function(t,n){if(ke(t))return t;var r="curve".concat(Vc(t));return(r==="curveMonotone"||r==="curveBump")&&n?j4["".concat(r).concat(n==="vertical"?"Y":"X")]:j4[r]||Kc},WF=function(t){var n=t.type,r=n===void 0?"linear":n,a=t.points,i=a===void 0?[]:a,s=t.baseLine,l=t.layout,c=t.connectNulls,f=c===void 0?!1:c,h=SF(r,l),d=f?i.filter(function(I){return Pp(I)}):i,v;if(Array.isArray(s)){var y=f?s.filter(function(I){return Pp(I)}):s,x=d.map(function(I,b){return H4(H4({},I),{},{base:y[b]})});return l==="vertical"?v=mp().y(Yu).x1(Qu).x0(function(I){return I.base.x}):v=mp().x(Qu).y1(Yu).y0(function(I){return I.base.y}),v.defined(Pp).curve(h),v(x)}return l==="vertical"&&le(s)?v=mp().y(Yu).x1(Qu).x0(s):le(s)?v=mp().x(Qu).y1(Yu).y0(s):v=zW().x(Qu).y(Yu),v.defined(Pp).curve(h),v(d)},ka=function(t){var n=t.className,r=t.points,a=t.path,i=t.pathRef;if((!r||!r.length)&&!a)return null;var s=r&&r.length?WF(t):a;return R.createElement("path",xg({},We(t,!1),Tp(t),{className:He("recharts-curve",n),d:s,ref:i}))},Km={exports:{}},Qm,D4;function AF(){if(D4)return Qm;D4=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Qm=e,Qm}var Ym,$4;function _F(){if($4)return Ym;$4=1;var e=AF();function t(){}function n(){}return n.resetWarningCache=t,Ym=function(){function r(s,l,c,f,h,d){if(d!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},Ym}var L4;function MF(){return L4||(L4=1,Km.exports=_F()()),Km.exports}var OF=MF();const Ye=Xe(OF),{getOwnPropertyNames:CF,getOwnPropertySymbols:kF}=Object,{hasOwnProperty:EF}=Object.prototype;function Xm(e,t){return function(r,a,i){return e(r,a,i)&&t(r,a,i)}}function Sp(e){return function(n,r,a){if(!n||!r||typeof n!="object"||typeof r!="object")return e(n,r,a);const{cache:i}=a,s=i.get(n),l=i.get(r);if(s&&l)return s===r&&l===n;i.set(n,r),i.set(r,n);const c=e(n,r,a);return i.delete(n),i.delete(r),c}}function NF(e){return e!=null?e[Symbol.toStringTag]:void 0}function F4(e){return CF(e).concat(kF(e))}const TF=Object.hasOwn||((e,t)=>EF.call(e,t));function Po(e,t){return e===t||!e&&!t&&e!==e&&t!==t}const RF="__v",HF="__o",jF="_owner",{getOwnPropertyDescriptor:q4,keys:z4}=Object;function DF(e,t){return e.byteLength===t.byteLength&&lc(new Uint8Array(e),new Uint8Array(t))}function $F(e,t,n){let r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(!n.equals(e[r],t[r],r,r,e,t,n))return!1;return!0}function LF(e,t){return e.byteLength===t.byteLength&&lc(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}function FF(e,t){return Po(e.getTime(),t.getTime())}function qF(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function zF(e,t){return e===t}function U4(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),i=e.entries();let s,l,c=0;for(;(s=i.next())&&!s.done;){const f=t.entries();let h=!1,d=0;for(;(l=f.next())&&!l.done;){if(a[d]){d++;continue}const v=s.value,y=l.value;if(n.equals(v[0],y[0],c,d,e,t,n)&&n.equals(v[1],y[1],v[0],y[0],e,t,n)){h=a[d]=!0;break}d++}if(!h)return!1;c++}return!0}const UF=Po;function VF(e,t,n){const r=z4(e);let a=r.length;if(z4(t).length!==a)return!1;for(;a-- >0;)if(!V_(e,t,n,r[a]))return!1;return!0}function Xu(e,t,n){const r=F4(e);let a=r.length;if(F4(t).length!==a)return!1;let i,s,l;for(;a-- >0;)if(i=r[a],!V_(e,t,n,i)||(s=q4(e,i),l=q4(t,i),(s||l)&&(!s||!l||s.configurable!==l.configurable||s.enumerable!==l.enumerable||s.writable!==l.writable)))return!1;return!0}function GF(e,t){return Po(e.valueOf(),t.valueOf())}function KF(e,t){return e.source===t.source&&e.flags===t.flags}function V4(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),i=e.values();let s,l;for(;(s=i.next())&&!s.done;){const c=t.values();let f=!1,h=0;for(;(l=c.next())&&!l.done;){if(!a[h]&&n.equals(s.value,l.value,s.value,l.value,e,t,n)){f=a[h]=!0;break}h++}if(!f)return!1}return!0}function lc(e,t){let n=e.byteLength;if(t.byteLength!==n||e.byteOffset!==t.byteOffset)return!1;for(;n-- >0;)if(e[n]!==t[n])return!1;return!0}function QF(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function V_(e,t,n,r){return(r===jF||r===HF||r===RF)&&(e.$$typeof||t.$$typeof)?!0:TF(t,r)&&n.equals(e[r],t[r],r,r,e,t,n)}const YF="[object ArrayBuffer]",XF="[object Arguments]",ZF="[object Boolean]",JF="[object DataView]",eq="[object Date]",tq="[object Error]",nq="[object Map]",rq="[object Number]",aq="[object Object]",oq="[object RegExp]",iq="[object Set]",uq="[object String]",sq={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},lq="[object URL]",pq=Object.prototype.toString;function cq({areArrayBuffersEqual:e,areArraysEqual:t,areDataViewsEqual:n,areDatesEqual:r,areErrorsEqual:a,areFunctionsEqual:i,areMapsEqual:s,areNumbersEqual:l,areObjectsEqual:c,arePrimitiveWrappersEqual:f,areRegExpsEqual:h,areSetsEqual:d,areTypedArraysEqual:v,areUrlsEqual:y,unknownTagComparators:x}){return function(b,S,W){if(b===S)return!0;if(b==null||S==null)return!1;const A=typeof b;if(A!==typeof S)return!1;if(A!=="object")return A==="number"?l(b,S,W):A==="function"?i(b,S,W):!1;const O=b.constructor;if(O!==S.constructor)return!1;if(O===Object)return c(b,S,W);if(Array.isArray(b))return t(b,S,W);if(O===Date)return r(b,S,W);if(O===RegExp)return h(b,S,W);if(O===Map)return s(b,S,W);if(O===Set)return d(b,S,W);const w=pq.call(b);if(w===eq)return r(b,S,W);if(w===oq)return h(b,S,W);if(w===nq)return s(b,S,W);if(w===iq)return d(b,S,W);if(w===aq)return typeof b.then!="function"&&typeof S.then!="function"&&c(b,S,W);if(w===lq)return y(b,S,W);if(w===tq)return a(b,S,W);if(w===XF)return c(b,S,W);if(sq[w])return v(b,S,W);if(w===YF)return e(b,S,W);if(w===JF)return n(b,S,W);if(w===ZF||w===rq||w===uq)return f(b,S,W);if(x){let _=x[w];if(!_){const E=NF(b);E&&(_=x[E])}if(_)return _(b,S,W)}return!1}}function fq({circular:e,createCustomConfig:t,strict:n}){let r={areArrayBuffersEqual:DF,areArraysEqual:n?Xu:$F,areDataViewsEqual:LF,areDatesEqual:FF,areErrorsEqual:qF,areFunctionsEqual:zF,areMapsEqual:n?Xm(U4,Xu):U4,areNumbersEqual:UF,areObjectsEqual:n?Xu:VF,arePrimitiveWrappersEqual:GF,areRegExpsEqual:KF,areSetsEqual:n?Xm(V4,Xu):V4,areTypedArraysEqual:n?Xm(lc,Xu):lc,areUrlsEqual:QF,unknownTagComparators:void 0};if(t&&(r=Object.assign({},r,t(r))),e){const a=Sp(r.areArraysEqual),i=Sp(r.areMapsEqual),s=Sp(r.areObjectsEqual),l=Sp(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:a,areMapsEqual:i,areObjectsEqual:s,areSetsEqual:l})}return r}function dq(e){return function(t,n,r,a,i,s,l){return e(t,n,l)}}function hq({circular:e,comparator:t,createState:n,equals:r,strict:a}){if(n)return function(l,c){const{cache:f=e?new WeakMap:void 0,meta:h}=n();return t(l,c,{cache:f,equals:r,meta:h,strict:a})};if(e)return function(l,c){return t(l,c,{cache:new WeakMap,equals:r,meta:void 0,strict:a})};const i={cache:void 0,equals:r,meta:void 0,strict:a};return function(l,c){return t(l,c,i)}}const mq=La();La({strict:!0});La({circular:!0});La({circular:!0,strict:!0});La({createInternalComparator:()=>Po});La({strict:!0,createInternalComparator:()=>Po});La({circular:!0,createInternalComparator:()=>Po});La({circular:!0,createInternalComparator:()=>Po,strict:!0});function La(e={}){const{circular:t=!1,createInternalComparator:n,createState:r,strict:a=!1}=e,i=fq(e),s=cq(i),l=n?n(s):dq(s);return hq({circular:t,comparator:s,createState:r,equals:l,strict:a})}function vq(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function G4(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=-1,r=function a(i){n<0&&(n=i),i-n>t?(e(i),n=-1):vq(a)};requestAnimationFrame(r)}function wg(e){"@babel/helpers - typeof";return wg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wg(e)}function gq(e){return Bq(e)||Iq(e)||bq(e)||yq()}function yq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bq(e,t){if(e){if(typeof e=="string")return K4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K4(e,t)}}function K4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Iq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bq(e){if(Array.isArray(e))return e}function xq(){var e={},t=function(){return null},n=!1,r=function a(i){if(!n){if(Array.isArray(i)){if(!i.length)return;var s=i,l=gq(s),c=l[0],f=l.slice(1);if(typeof c=="number"){G4(a.bind(null,f),c);return}a(c),G4(a.bind(null,f));return}wg(i)==="object"&&(e=i,t(e)),typeof i=="function"&&i()}};return{stop:function(){n=!0},start:function(i){n=!1,r(i)},subscribe:function(i){return t=i,function(){t=function(){return null}}}}}function Ts(e){"@babel/helpers - typeof";return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ts(e)}function Q4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Y4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Q4(Object(n),!0).forEach(function(r){G_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function G_(e,t,n){return t=wq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wq(e){var t=Pq(e,"string");return Ts(t)==="symbol"?t:String(t)}function Pq(e,t){if(Ts(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ts(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Sq=function(t,n){return[Object.keys(t),Object.keys(n)].reduce(function(r,a){return r.filter(function(i){return a.includes(i)})})},Wq=function(t){return t},Aq=function(t){return t.replace(/([A-Z])/g,function(n){return"-".concat(n.toLowerCase())})},is=function(t,n){return Object.keys(n).reduce(function(r,a){return Y4(Y4({},r),{},G_({},a,t(a,n[a])))},{})},X4=function(t,n,r){return t.map(function(a){return"".concat(Aq(a)," ").concat(n,"ms ").concat(r)}).join(",")};function _q(e,t){return Cq(e)||Oq(e,t)||K_(e,t)||Mq()}function Mq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oq(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function Cq(e){if(Array.isArray(e))return e}function kq(e){return Tq(e)||Nq(e)||K_(e)||Eq()}function Eq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K_(e,t){if(e){if(typeof e=="string")return Pg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pg(e,t)}}function Nq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tq(e){if(Array.isArray(e))return Pg(e)}function Pg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var pc=1e-4,Q_=function(t,n){return[0,3*t,3*n-6*t,3*t-3*n+1]},Y_=function(t,n){return t.map(function(r,a){return r*Math.pow(n,a)}).reduce(function(r,a){return r+a})},Z4=function(t,n){return function(r){var a=Q_(t,n);return Y_(a,r)}},Rq=function(t,n){return function(r){var a=Q_(t,n),i=[].concat(kq(a.map(function(s,l){return s*l}).slice(1)),[0]);return Y_(i,r)}},J4=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0],i=n[1],s=n[2],l=n[3];if(n.length===1)switch(n[0]){case"linear":a=0,i=0,s=1,l=1;break;case"ease":a=.25,i=.1,s=.25,l=1;break;case"ease-in":a=.42,i=0,s=1,l=1;break;case"ease-out":a=.42,i=0,s=.58,l=1;break;case"ease-in-out":a=0,i=0,s=.58,l=1;break;default:{var c=n[0].split("(");if(c[0]==="cubic-bezier"&&c[1].split(")")[0].split(",").length===4){var f=c[1].split(")")[0].split(",").map(function(b){return parseFloat(b)}),h=_q(f,4);a=h[0],i=h[1],s=h[2],l=h[3]}}}var d=Z4(a,s),v=Z4(i,l),y=Rq(a,s),x=function(S){return S>1?1:S<0?0:S},I=function(S){for(var W=S>1?1:S,A=W,O=0;O<8;++O){var w=d(A)-W,_=y(A);if(Math.abs(w-W)<pc||_<pc)return v(A);A=x(A-w/_)}return v(A)};return I.isStepper=!1,I},Hq=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.stiff,r=n===void 0?100:n,a=t.damping,i=a===void 0?8:a,s=t.dt,l=s===void 0?17:s,c=function(h,d,v){var y=-(h-d)*r,x=v*i,I=v+(y-x)*l/1e3,b=v*l/1e3+h;return Math.abs(b-d)<pc&&Math.abs(I)<pc?[d,0]:[b,I]};return c.isStepper=!0,c.dt=l,c},jq=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return J4(a);case"spring":return Hq();default:if(a.split("(")[0]==="cubic-bezier")return J4(a)}return typeof a=="function"?a:null};function Rs(e){"@babel/helpers - typeof";return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rs(e)}function eS(e){return Lq(e)||$q(e)||X_(e)||Dq()}function Dq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $q(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lq(e){if(Array.isArray(e))return Wg(e)}function tS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Gt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tS(Object(n),!0).forEach(function(r){Sg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Sg(e,t,n){return t=Fq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fq(e){var t=qq(e,"string");return Rs(t)==="symbol"?t:String(t)}function qq(e,t){if(Rs(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Rs(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zq(e,t){return Gq(e)||Vq(e,t)||X_(e,t)||Uq()}function Uq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X_(e,t){if(e){if(typeof e=="string")return Wg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wg(e,t)}}function Wg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Vq(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function Gq(e){if(Array.isArray(e))return e}var cc=function(t,n,r){return t+(n-t)*r},Ag=function(t){var n=t.from,r=t.to;return n!==r},Kq=function e(t,n,r){var a=is(function(i,s){if(Ag(s)){var l=t(s.from,s.to,s.velocity),c=zq(l,2),f=c[0],h=c[1];return Gt(Gt({},s),{},{from:f,velocity:h})}return s},n);return r<1?is(function(i,s){return Ag(s)?Gt(Gt({},s),{},{velocity:cc(s.velocity,a[i].velocity,r),from:cc(s.from,a[i].from,r)}):s},n):e(t,a,r-1)};const Qq=(function(e,t,n,r,a){var i=Sq(e,t),s=i.reduce(function(b,S){return Gt(Gt({},b),{},Sg({},S,[e[S],t[S]]))},{}),l=i.reduce(function(b,S){return Gt(Gt({},b),{},Sg({},S,{from:e[S],velocity:0,to:t[S]}))},{}),c=-1,f,h,d=function(){return null},v=function(){return is(function(S,W){return W.from},l)},y=function(){return!Object.values(l).filter(Ag).length},x=function(S){f||(f=S);var W=S-f,A=W/n.dt;l=Kq(n,l,A),a(Gt(Gt(Gt({},e),t),v())),f=S,y()||(c=requestAnimationFrame(d))},I=function(S){h||(h=S);var W=(S-h)/r,A=is(function(w,_){return cc.apply(void 0,eS(_).concat([n(W)]))},s);if(a(Gt(Gt(Gt({},e),t),A)),W<1)c=requestAnimationFrame(d);else{var O=is(function(w,_){return cc.apply(void 0,eS(_).concat([n(1)]))},s);a(Gt(Gt(Gt({},e),t),O))}};return d=n.isStepper?x:I,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(c)}}});function Pi(e){"@babel/helpers - typeof";return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pi(e)}var Yq=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function Xq(e,t){if(e==null)return{};var n=Zq(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zq(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Zm(e){return nz(e)||tz(e)||ez(e)||Jq()}function Jq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ez(e,t){if(e){if(typeof e=="string")return _g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _g(e,t)}}function tz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nz(e){if(Array.isArray(e))return _g(e)}function _g(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nS(Object(n),!0).forEach(function(r){ns(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ns(e,t,n){return t=Z_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function az(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Z_(r.key),r)}}function oz(e,t,n){return t&&az(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Z_(e){var t=iz(e,"string");return Pi(t)==="symbol"?t:String(t)}function iz(e,t){if(Pi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Pi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function uz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Mg(e,t)}function Mg(e,t){return Mg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Mg(e,t)}function sz(e){var t=lz();return function(){var r=fc(e),a;if(t){var i=fc(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Og(this,a)}}function Og(e,t){if(t&&(Pi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Cg(e)}function Cg(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fc(e){return fc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},fc(e)}var Kn=(function(e){uz(n,e);var t=sz(n);function n(r,a){var i;rz(this,n),i=t.call(this,r,a);var s=i.props,l=s.isActive,c=s.attributeName,f=s.from,h=s.to,d=s.steps,v=s.children,y=s.duration;if(i.handleStyleChange=i.handleStyleChange.bind(Cg(i)),i.changeStyle=i.changeStyle.bind(Cg(i)),!l||y<=0)return i.state={style:{}},typeof v=="function"&&(i.state={style:h}),Og(i);if(d&&d.length)i.state={style:d[0].style};else if(f){if(typeof v=="function")return i.state={style:f},Og(i);i.state={style:c?ns({},c,f):f}}else i.state={style:{}};return i}return oz(n,[{key:"componentDidMount",value:function(){var a=this.props,i=a.isActive,s=a.canBegin;this.mounted=!0,!(!i||!s)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var i=this.props,s=i.isActive,l=i.canBegin,c=i.attributeName,f=i.shouldReAnimate,h=i.to,d=i.from,v=this.state.style;if(l){if(!s){var y={style:c?ns({},c,h):h};this.state&&v&&(c&&v[c]!==h||!c&&v!==h)&&this.setState(y);return}if(!(mq(a.to,h)&&a.canBegin&&a.isActive)){var x=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var I=x||f?d:a.to;if(this.state&&v){var b={style:c?ns({},c,I):I};(c&&v[c]!==I||!c&&v!==I)&&this.setState(b)}this.runAnimation(rr(rr({},this.props),{},{from:I,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var i=this,s=a.from,l=a.to,c=a.duration,f=a.easing,h=a.begin,d=a.onAnimationEnd,v=a.onAnimationStart,y=Qq(s,l,jq(f),c,this.changeStyle),x=function(){i.stopJSAnimation=y()};this.manager.start([v,h,x,c,d])}},{key:"runStepAnimation",value:function(a){var i=this,s=a.steps,l=a.begin,c=a.onAnimationStart,f=s[0],h=f.style,d=f.duration,v=d===void 0?0:d,y=function(I,b,S){if(S===0)return I;var W=b.duration,A=b.easing,O=A===void 0?"ease":A,w=b.style,_=b.properties,E=b.onAnimationEnd,P=S>0?s[S-1]:b,C=_||Object.keys(w);if(typeof O=="function"||O==="spring")return[].concat(Zm(I),[i.runJSAnimation.bind(i,{from:P.style,to:w,duration:W,easing:O}),W]);var T=X4(C,W,O),j=rr(rr(rr({},P.style),w),{},{transition:T});return[].concat(Zm(I),[j,W,E]).filter(Wq)};return this.manager.start([c].concat(Zm(s.reduce(y,[h,Math.max(v,l)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=xq());var i=a.begin,s=a.duration,l=a.attributeName,c=a.to,f=a.easing,h=a.onAnimationStart,d=a.onAnimationEnd,v=a.steps,y=a.children,x=this.manager;if(this.unSubscribe=x.subscribe(this.handleStyleChange),typeof f=="function"||typeof y=="function"||f==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var I=l?ns({},l,c):c,b=X4(Object.keys(I),s,f);x.start([h,i,rr(rr({},I),{},{transition:b}),s,d])}},{key:"render",value:function(){var a=this.props,i=a.children;a.begin;var s=a.duration;a.attributeName,a.easing;var l=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var c=Xq(a,Yq),f=X.Children.count(i),h=this.state.style;if(typeof i=="function")return i(h);if(!l||f===0||s<=0)return i;var d=function(y){var x=y.props,I=x.style,b=I===void 0?{}:I,S=x.className,W=X.cloneElement(y,rr(rr({},c),{},{style:rr(rr({},b),h),className:S}));return W};return f===1?d(X.Children.only(i)):R.createElement("div",null,X.Children.map(i,function(v){return d(v)}))}}]),n})(X.PureComponent);Kn.displayName="Animate";Kn.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Kn.propTypes={from:Ye.oneOfType([Ye.object,Ye.string]),to:Ye.oneOfType([Ye.object,Ye.string]),attributeName:Ye.string,duration:Ye.number,begin:Ye.number,easing:Ye.oneOfType([Ye.string,Ye.func]),steps:Ye.arrayOf(Ye.shape({duration:Ye.number.isRequired,style:Ye.object.isRequired,easing:Ye.oneOfType([Ye.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Ye.func]),properties:Ye.arrayOf("string"),onAnimationEnd:Ye.func})),children:Ye.oneOfType([Ye.node,Ye.func]),isActive:Ye.bool,canBegin:Ye.bool,onAnimationEnd:Ye.func,shouldReAnimate:Ye.bool,onAnimationStart:Ye.func,onAnimationReStart:Ye.func};function Hs(e){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hs(e)}function dc(){return dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dc.apply(this,arguments)}function pz(e,t){return hz(e)||dz(e,t)||fz(e,t)||cz()}function cz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fz(e,t){if(e){if(typeof e=="string")return rS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rS(e,t)}}function rS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dz(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function hz(e){if(Array.isArray(e))return e}function aS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function oS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?aS(Object(n),!0).forEach(function(r){mz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):aS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mz(e,t,n){return t=vz(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vz(e){var t=gz(e,"string");return Hs(t)=="symbol"?t:t+""}function gz(e,t){if(Hs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var iS=function(t,n,r,a,i){var s=Math.min(Math.abs(r)/2,Math.abs(a)/2),l=a>=0?1:-1,c=r>=0?1:-1,f=a>=0&&r>=0||a<0&&r<0?1:0,h;if(s>0&&i instanceof Array){for(var d=[0,0,0,0],v=0,y=4;v<y;v++)d[v]=i[v]>s?s:i[v];h="M".concat(t,",").concat(n+l*d[0]),d[0]>0&&(h+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(f,",").concat(t+c*d[0],",").concat(n)),h+="L ".concat(t+r-c*d[1],",").concat(n),d[1]>0&&(h+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(f,`,
        `).concat(t+r,",").concat(n+l*d[1])),h+="L ".concat(t+r,",").concat(n+a-l*d[2]),d[2]>0&&(h+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(f,`,
        `).concat(t+r-c*d[2],",").concat(n+a)),h+="L ".concat(t+c*d[3],",").concat(n+a),d[3]>0&&(h+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(f,`,
        `).concat(t,",").concat(n+a-l*d[3])),h+="Z"}else if(s>0&&i===+i&&i>0){var x=Math.min(s,i);h="M ".concat(t,",").concat(n+l*x,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+c*x,",").concat(n,`
            L `).concat(t+r-c*x,",").concat(n,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+r,",").concat(n+l*x,`
            L `).concat(t+r,",").concat(n+a-l*x,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+r-c*x,",").concat(n+a,`
            L `).concat(t+c*x,",").concat(n+a,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t,",").concat(n+a-l*x," Z")}else h="M ".concat(t,",").concat(n," h ").concat(r," v ").concat(a," h ").concat(-r," Z");return h},yz=function(t,n){if(!t||!n)return!1;var r=t.x,a=t.y,i=n.x,s=n.y,l=n.width,c=n.height;if(Math.abs(l)>0&&Math.abs(c)>0){var f=Math.min(i,i+l),h=Math.max(i,i+l),d=Math.min(s,s+c),v=Math.max(s,s+c);return r>=f&&r<=h&&a>=d&&a<=v}return!1},bz={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},pb=function(t){var n=oS(oS({},bz),t),r=X.useRef(),a=X.useState(-1),i=pz(a,2),s=i[0],l=i[1];X.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var O=r.current.getTotalLength();O&&l(O)}catch{}},[]);var c=n.x,f=n.y,h=n.width,d=n.height,v=n.radius,y=n.className,x=n.animationEasing,I=n.animationDuration,b=n.animationBegin,S=n.isAnimationActive,W=n.isUpdateAnimationActive;if(c!==+c||f!==+f||h!==+h||d!==+d||h===0||d===0)return null;var A=He("recharts-rectangle",y);return W?R.createElement(Kn,{canBegin:s>0,from:{width:h,height:d,x:c,y:f},to:{width:h,height:d,x:c,y:f},duration:I,animationEasing:x,isActive:W},function(O){var w=O.width,_=O.height,E=O.x,P=O.y;return R.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,isActive:S,easing:x},R.createElement("path",dc({},We(n,!0),{className:A,d:iS(E,P,w,_,v),ref:r})))}):R.createElement("path",dc({},We(n,!0),{className:A,d:iS(c,f,h,d,v)}))},Iz=["points","className","baseLinePoints","connectNulls"];function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}function Bz(e,t){if(e==null)return{};var n=xz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function xz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function uS(e){return Wz(e)||Sz(e)||Pz(e)||wz()}function wz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pz(e,t){if(e){if(typeof e=="string")return kg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kg(e,t)}}function Sz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wz(e){if(Array.isArray(e))return kg(e)}function kg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var sS=function(t){return t&&t.x===+t.x&&t.y===+t.y},Az=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=[[]];return t.forEach(function(r){sS(r)?n[n.length-1].push(r):n[n.length-1].length>0&&n.push([])}),sS(t[0])&&n[n.length-1].push(t[0]),n[n.length-1].length<=0&&(n=n.slice(0,-1)),n},us=function(t,n){var r=Az(t);n&&(r=[r.reduce(function(i,s){return[].concat(uS(i),uS(s))},[])]);var a=r.map(function(i){return i.reduce(function(s,l,c){return"".concat(s).concat(c===0?"M":"L").concat(l.x,",").concat(l.y)},"")}).join("");return r.length===1?"".concat(a,"Z"):a},_z=function(t,n,r){var a=us(t,r);return"".concat(a.slice(-1)==="Z"?a.slice(0,-1):a,"L").concat(us(n.reverse(),r).slice(1))},Mz=function(t){var n=t.points,r=t.className,a=t.baseLinePoints,i=t.connectNulls,s=Bz(t,Iz);if(!n||!n.length)return null;var l=He("recharts-polygon",r);if(a&&a.length){var c=s.stroke&&s.stroke!=="none",f=_z(n,a,i);return R.createElement("g",{className:l},R.createElement("path",oi({},We(s,!0),{fill:f.slice(-1)==="Z"?s.fill:"none",stroke:"none",d:f})),c?R.createElement("path",oi({},We(s,!0),{fill:"none",d:us(n,i)})):null,c?R.createElement("path",oi({},We(s,!0),{fill:"none",d:us(a,i)})):null)}var h=us(n,i);return R.createElement("path",oi({},We(s,!0),{fill:h.slice(-1)==="Z"?s.fill:"none",className:l,d:h}))};function Eg(){return Eg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eg.apply(this,arguments)}var nl=function(t){var n=t.cx,r=t.cy,a=t.r,i=t.className,s=He("recharts-dot",i);return n===+n&&r===+r&&a===+a?R.createElement("circle",Eg({},We(t,!1),Tp(t),{className:s,cx:n,cy:r,r:a})):null};function js(e){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},js(e)}var Oz=["x","y","top","left","width","height","className"];function Ng(){return Ng=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ng.apply(this,arguments)}function lS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Cz(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lS(Object(n),!0).forEach(function(r){kz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kz(e,t,n){return t=Ez(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ez(e){var t=Nz(e,"string");return js(t)=="symbol"?t:t+""}function Nz(e,t){if(js(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(js(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Tz(e,t){if(e==null)return{};var n=Rz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Rz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Hz=function(t,n,r,a,i,s){return"M".concat(t,",").concat(i,"v").concat(a,"M").concat(s,",").concat(n,"h").concat(r)},jz=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,i=a===void 0?0:a,s=t.top,l=s===void 0?0:s,c=t.left,f=c===void 0?0:c,h=t.width,d=h===void 0?0:h,v=t.height,y=v===void 0?0:v,x=t.className,I=Tz(t,Oz),b=Cz({x:r,y:i,top:l,left:f,width:d,height:y},I);return!le(r)||!le(i)||!le(d)||!le(y)||!le(l)||!le(f)?null:R.createElement("path",Ng({},We(b,!0),{className:He("recharts-cross",x),d:Hz(r,i,d,y,l,f)}))},Jm,pS;function Dz(){if(pS)return Jm;pS=1;var e=i0(),t=d_(),n=Ar();function r(a,i){return a&&a.length?e(a,n(i,2),t):void 0}return Jm=r,Jm}var $z=Dz();const Lz=Xe($z);var ev,cS;function Fz(){if(cS)return ev;cS=1;var e=i0(),t=Ar(),n=h_();function r(a,i){return a&&a.length?e(a,t(i,2),n):void 0}return ev=r,ev}var qz=Fz();const zz=Xe(qz);var Uz=["cx","cy","angle","ticks","axisLine"],Vz=["ticks","tick","angle","tickFormatter","stroke"];function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(e)}function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ss.apply(this,arguments)}function fS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ro(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fS(Object(n),!0).forEach(function(r){p0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dS(e,t){if(e==null)return{};var n=Gz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Gz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Kz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,eM(r.key),r)}}function Qz(e,t,n){return t&&hS(e.prototype,t),n&&hS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Yz(e,t,n){return t=hc(t),Xz(e,J_()?Reflect.construct(t,n||[],hc(e).constructor):t.apply(e,n))}function Xz(e,t){if(t&&(Si(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Zz(e)}function Zz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(J_=function(){return!!e})()}function hc(e){return hc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},hc(e)}function Jz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Tg(e,t)}function Tg(e,t){return Tg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Tg(e,t)}function p0(e,t,n){return t=eM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eM(e){var t=eU(e,"string");return Si(t)=="symbol"?t:t+""}function eU(e,t){if(Si(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Si(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var c0=(function(e){function t(){return Kz(this,t),Yz(this,t,arguments)}return Jz(t,e),Qz(t,[{key:"getTickValueCoord",value:function(r){var a=r.coordinate,i=this.props,s=i.angle,l=i.cx,c=i.cy;return ot(l,c,a,s)}},{key:"getTickTextAnchor",value:function(){var r=this.props.orientation,a;switch(r){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,l=r.ticks,c=Lz(l,function(h){return h.coordinate||0}),f=zz(l,function(h){return h.coordinate||0});return{cx:a,cy:i,startAngle:s,endAngle:s,innerRadius:f.coordinate||0,outerRadius:c.coordinate||0}}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,l=r.ticks,c=r.axisLine,f=dS(r,Uz),h=l.reduce(function(x,I){return[Math.min(x[0],I.coordinate),Math.max(x[1],I.coordinate)]},[1/0,-1/0]),d=ot(a,i,h[0],s),v=ot(a,i,h[1],s),y=ro(ro(ro({},We(f,!1)),{},{fill:"none"},We(c,!1)),{},{x1:d.x,y1:d.y,x2:v.x,y2:v.y});return R.createElement("line",ss({className:"recharts-polar-radius-axis-line"},y))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,l=a.angle,c=a.tickFormatter,f=a.stroke,h=dS(a,Vz),d=this.getTickTextAnchor(),v=We(h,!1),y=We(s,!1),x=i.map(function(I,b){var S=r.getTickValueCoord(I),W=ro(ro(ro(ro({textAnchor:d,transform:"rotate(".concat(90-l,", ").concat(S.x,", ").concat(S.y,")")},v),{},{stroke:"none",fill:f},y),{},{index:b},S),{},{payload:I});return R.createElement(De,ss({className:He("recharts-polar-radius-axis-tick",F_(s)),key:"tick-".concat(I.coordinate)},Na(r.props,I,b)),t.renderTickItem(s,W,c?c(I.value,b):I.value))});return R.createElement(De,{className:"recharts-polar-radius-axis-ticks"},x)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.axisLine,s=r.tick;return!a||!a.length?null:R.createElement(De,{className:He("recharts-polar-radius-axis",this.props.className)},i&&this.renderAxisLine(),s&&this.renderTicks(),qt.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return R.isValidElement(r)?s=R.cloneElement(r,a):ke(r)?s=r(a):s=R.createElement(go,ss({},a,{className:"recharts-polar-radius-axis-tick-value"}),i),s}}])})(X.PureComponent);p0(c0,"displayName","PolarRadiusAxis");p0(c0,"axisType","radiusAxis");p0(c0,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Wi(e){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wi(e)}function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}function mS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ao(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mS(Object(n),!0).forEach(function(r){f0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,nM(r.key),r)}}function nU(e,t,n){return t&&vS(e.prototype,t),n&&vS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rU(e,t,n){return t=mc(t),aU(e,tM()?Reflect.construct(t,n||[],mc(e).constructor):t.apply(e,n))}function aU(e,t){if(t&&(Wi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oU(e)}function oU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(tM=function(){return!!e})()}function mc(e){return mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},mc(e)}function iU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Rg(e,t)}function Rg(e,t){return Rg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Rg(e,t)}function f0(e,t,n){return t=nM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nM(e){var t=uU(e,"string");return Wi(t)=="symbol"?t:t+""}function uU(e,t){if(Wi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var sU=Math.PI/180,gS=1e-5,d0=(function(e){function t(){return tU(this,t),rU(this,t,arguments)}return iU(t,e),nU(t,[{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.cx,s=a.cy,l=a.radius,c=a.orientation,f=a.tickSize,h=f||8,d=ot(i,s,l,r.coordinate),v=ot(i,s,l+(c==="inner"?-1:1)*h,r.coordinate);return{x1:d.x,y1:d.y,x2:v.x,y2:v.y}}},{key:"getTickTextAnchor",value:function(r){var a=this.props.orientation,i=Math.cos(-r.coordinate*sU),s;return i>gS?s=a==="outer"?"start":"end":i<-gS?s=a==="outer"?"end":"start":s="middle",s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.radius,l=r.axisLine,c=r.axisLineType,f=ao(ao({},We(this.props,!1)),{},{fill:"none"},We(l,!1));if(c==="circle")return R.createElement(nl,so({className:"recharts-polar-angle-axis-line"},f,{cx:a,cy:i,r:s}));var h=this.props.ticks,d=h.map(function(v){return ot(a,i,s,v.coordinate)});return R.createElement(Mz,so({className:"recharts-polar-angle-axis-line"},f,{points:d}))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,l=a.tickLine,c=a.tickFormatter,f=a.stroke,h=We(this.props,!1),d=We(s,!1),v=ao(ao({},h),{},{fill:"none"},We(l,!1)),y=i.map(function(x,I){var b=r.getTickLineCoord(x),S=r.getTickTextAnchor(x),W=ao(ao(ao({textAnchor:S},h),{},{stroke:"none",fill:f},d),{},{index:I,payload:x,x:b.x2,y:b.y2});return R.createElement(De,so({className:He("recharts-polar-angle-axis-tick",F_(s)),key:"tick-".concat(x.coordinate)},Na(r.props,x,I)),l&&R.createElement("line",so({className:"recharts-polar-angle-axis-tick-line"},v,b)),s&&t.renderTickItem(s,W,c?c(x.value,I):x.value))});return R.createElement(De,{className:"recharts-polar-angle-axis-ticks"},y)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.radius,s=r.axisLine;return i<=0||!a||!a.length?null:R.createElement(De,{className:He("recharts-polar-angle-axis",this.props.className)},s&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(r,a,i){var s;return R.isValidElement(r)?s=R.cloneElement(r,a):ke(r)?s=r(a):s=R.createElement(go,so({},a,{className:"recharts-polar-angle-axis-tick-value"}),i),s}}])})(X.PureComponent);f0(d0,"displayName","PolarAngleAxis");f0(d0,"axisType","angleAxis");f0(d0,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var tv,yS;function lU(){if(yS)return tv;yS=1;var e=dA(),t=e(Object.getPrototypeOf,Object);return tv=t,tv}var nv,bS;function pU(){if(bS)return nv;bS=1;var e=Yr(),t=lU(),n=Xr(),r="[object Object]",a=Function.prototype,i=Object.prototype,s=a.toString,l=i.hasOwnProperty,c=s.call(Object);function f(h){if(!n(h)||e(h)!=r)return!1;var d=t(h);if(d===null)return!0;var v=l.call(d,"constructor")&&d.constructor;return typeof v=="function"&&v instanceof v&&s.call(v)==c}return nv=f,nv}var cU=pU();const fU=Xe(cU);var rv,IS;function dU(){if(IS)return rv;IS=1;var e=Yr(),t=Xr(),n="[object Boolean]";function r(a){return a===!0||a===!1||t(a)&&e(a)==n}return rv=r,rv}var hU=dU();const mU=Xe(hU);function Ds(e){"@babel/helpers - typeof";return Ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ds(e)}function vc(){return vc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vc.apply(this,arguments)}function vU(e,t){return IU(e)||bU(e,t)||yU(e,t)||gU()}function gU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yU(e,t){if(e){if(typeof e=="string")return BS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return BS(e,t)}}function BS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bU(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function IU(e){if(Array.isArray(e))return e}function xS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xS(Object(n),!0).forEach(function(r){BU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BU(e,t,n){return t=xU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xU(e){var t=wU(e,"string");return Ds(t)=="symbol"?t:t+""}function wU(e,t){if(Ds(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var PS=function(t,n,r,a,i){var s=r-a,l;return l="M ".concat(t,",").concat(n),l+="L ".concat(t+r,",").concat(n),l+="L ".concat(t+r-s/2,",").concat(n+i),l+="L ".concat(t+r-s/2-a,",").concat(n+i),l+="L ".concat(t,",").concat(n," Z"),l},PU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},SU=function(t){var n=wS(wS({},PU),t),r=X.useRef(),a=X.useState(-1),i=vU(a,2),s=i[0],l=i[1];X.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var A=r.current.getTotalLength();A&&l(A)}catch{}},[]);var c=n.x,f=n.y,h=n.upperWidth,d=n.lowerWidth,v=n.height,y=n.className,x=n.animationEasing,I=n.animationDuration,b=n.animationBegin,S=n.isUpdateAnimationActive;if(c!==+c||f!==+f||h!==+h||d!==+d||v!==+v||h===0&&d===0||v===0)return null;var W=He("recharts-trapezoid",y);return S?R.createElement(Kn,{canBegin:s>0,from:{upperWidth:0,lowerWidth:0,height:v,x:c,y:f},to:{upperWidth:h,lowerWidth:d,height:v,x:c,y:f},duration:I,animationEasing:x,isActive:S},function(A){var O=A.upperWidth,w=A.lowerWidth,_=A.height,E=A.x,P=A.y;return R.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,easing:x},R.createElement("path",vc({},We(n,!0),{className:W,d:PS(E,P,O,w,_),ref:r})))}):R.createElement("g",null,R.createElement("path",vc({},We(n,!0),{className:W,d:PS(c,f,h,d,v)})))},WU=["option","shapeType","propTransformer","activeClassName","isActive"];function $s(e){"@babel/helpers - typeof";return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$s(e)}function AU(e,t){if(e==null)return{};var n=_U(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _U(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function SS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function gc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?SS(Object(n),!0).forEach(function(r){MU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):SS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function MU(e,t,n){return t=OU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function OU(e){var t=CU(e,"string");return $s(t)=="symbol"?t:t+""}function CU(e,t){if($s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function kU(e,t){return gc(gc({},t),e)}function EU(e,t){return e==="symbols"}function WS(e){var t=e.shapeType,n=e.elementProps;switch(t){case"rectangle":return R.createElement(pb,n);case"trapezoid":return R.createElement(SU,n);case"sector":return R.createElement(U_,n);case"symbols":if(EU(t))return R.createElement(Yc,n);break;default:return null}}function NU(e){return X.isValidElement(e)?e.props:e}function yc(e){var t=e.option,n=e.shapeType,r=e.propTransformer,a=r===void 0?kU:r,i=e.activeClassName,s=i===void 0?"recharts-active-shape":i,l=e.isActive,c=AU(e,WU),f;if(X.isValidElement(t))f=X.cloneElement(t,gc(gc({},c),NU(t)));else if(ke(t))f=t(c);else if(fU(t)&&!mU(t)){var h=a(t,c);f=R.createElement(WS,{shapeType:n,elementProps:h})}else{var d=c;f=R.createElement(WS,{shapeType:n,elementProps:d})}return l?R.createElement(De,{className:s},f):f}function h0(e,t){return t!=null&&"trapezoids"in e.props}function m0(e,t){return t!=null&&"sectors"in e.props}function Ls(e,t){return t!=null&&"points"in e.props}function TU(e,t){var n,r,a=e.x===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.x)||e.x===t.x,i=e.y===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===t.y;return a&&i}function RU(e,t){var n=e.endAngle===t.endAngle,r=e.startAngle===t.startAngle;return n&&r}function HU(e,t){var n=e.x===t.x,r=e.y===t.y,a=e.z===t.z;return n&&r&&a}function jU(e,t){var n;return h0(e,t)?n=TU:m0(e,t)?n=RU:Ls(e,t)&&(n=HU),n}function DU(e,t){var n;return h0(e,t)?n="trapezoids":m0(e,t)?n="sectors":Ls(e,t)&&(n="points"),n}function $U(e,t){if(h0(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}if(m0(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return Ls(e,t)?t.payload:{}}function LU(e){var t=e.activeTooltipItem,n=e.graphicalItem,r=e.itemData,a=DU(n,t),i=$U(n,t),s=r.filter(function(c,f){var h=Ta(i,c),d=n.props[a].filter(function(x){var I=jU(n,t);return I(x,t)}),v=n.props[a].indexOf(d[d.length-1]),y=f===v;return h&&y}),l=r.indexOf(s[s.length-1]);return l}var Mp;function Ai(e){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ai(e)}function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}function AS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?AS(Object(n),!0).forEach(function(r){qn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):AS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function FU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,aM(r.key),r)}}function qU(e,t,n){return t&&_S(e.prototype,t),n&&_S(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function zU(e,t,n){return t=bc(t),UU(e,rM()?Reflect.construct(t,n||[],bc(e).constructor):t.apply(e,n))}function UU(e,t){if(t&&(Ai(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return VU(e)}function VU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rM=function(){return!!e})()}function bc(e){return bc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},bc(e)}function GU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Hg(e,t)}function Hg(e,t){return Hg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Hg(e,t)}function qn(e,t,n){return t=aM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aM(e){var t=KU(e,"string");return Ai(t)=="symbol"?t:t+""}function KU(e,t){if(Ai(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ai(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ea=(function(e){function t(n){var r;return FU(this,t),r=zU(this,t,[n]),qn(r,"pieRef",null),qn(r,"sectorRefs",[]),qn(r,"id",ja("recharts-pie-")),qn(r,"handleAnimationEnd",function(){var a=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),ke(a)&&a()}),qn(r,"handleAnimationStart",function(){var a=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),ke(a)&&a()}),r.state={isAnimationFinished:!n.isAnimationActive,prevIsAnimationActive:n.isAnimationActive,prevAnimationId:n.animationId,sectorToFocus:0},r}return GU(t,e),qU(t,[{key:"isActiveIndex",value:function(r){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(r)!==-1:r===a}},{key:"hasActiveIndex",value:function(){var r=this.props.activeIndex;return Array.isArray(r)?r.length!==0:r||r===0}},{key:"renderLabels",value:function(r){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.label,l=i.labelLine,c=i.dataKey,f=i.valueKey,h=We(this.props,!1),d=We(s,!1),v=We(l,!1),y=s&&s.offsetRadius||20,x=r.map(function(I,b){var S=(I.startAngle+I.endAngle)/2,W=ot(I.cx,I.cy,I.outerRadius+y,S),A=rt(rt(rt(rt({},h),I),{},{stroke:"none"},d),{},{index:b,textAnchor:t.getTextAnchor(W.x,I.cx)},W),O=rt(rt(rt(rt({},h),I),{},{fill:"none",stroke:I.fill},v),{},{index:b,points:[ot(I.cx,I.cy,I.outerRadius,S),W]}),w=c;return Ee(c)&&Ee(f)?w="value":Ee(c)&&(w=f),R.createElement(De,{key:"label-".concat(I.startAngle,"-").concat(I.endAngle,"-").concat(I.midAngle,"-").concat(b)},l&&t.renderLabelLineItem(l,O,"line"),t.renderLabelItem(s,A,lt(I,w)))});return R.createElement(De,{className:"recharts-pie-labels"},x)}},{key:"renderSectorsStatically",value:function(r){var a=this,i=this.props,s=i.activeShape,l=i.blendStroke,c=i.inactiveShape;return r.map(function(f,h){if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&r.length!==1)return null;var d=a.isActiveIndex(h),v=c&&a.hasActiveIndex()?c:null,y=d?s:v,x=rt(rt({},f),{},{stroke:l?f.fill:f.stroke,tabIndex:-1});return R.createElement(De,ii({ref:function(b){b&&!a.sectorRefs.includes(b)&&a.sectorRefs.push(b)},tabIndex:-1,className:"recharts-pie-sector"},Na(a.props,f,h),{key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(h)}),R.createElement(yc,ii({option:y,isActive:d,shapeType:"sector"},x)))})}},{key:"renderSectorsWithAnimation",value:function(){var r=this,a=this.props,i=a.sectors,s=a.isAnimationActive,l=a.animationBegin,c=a.animationDuration,f=a.animationEasing,h=a.animationId,d=this.state,v=d.prevSectors,y=d.prevIsAnimationActive;return R.createElement(Kn,{begin:l,duration:c,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(h,"-").concat(y),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(x){var I=x.t,b=[],S=i&&i[0],W=S.startAngle;return i.forEach(function(A,O){var w=v&&v[O],_=O>0?Mn(A,"paddingAngle",0):0;if(w){var E=ht(w.endAngle-w.startAngle,A.endAngle-A.startAngle),P=rt(rt({},A),{},{startAngle:W+_,endAngle:W+E(I)+_});b.push(P),W=P.endAngle}else{var C=A.endAngle,T=A.startAngle,j=ht(0,C-T),N=j(I),$=rt(rt({},A),{},{startAngle:W+_,endAngle:W+N+_});b.push($),W=$.endAngle}}),R.createElement(De,null,r.renderSectorsStatically(b))})}},{key:"attachKeyboardHandlers",value:function(r){var a=this;r.onkeydown=function(i){if(!i.altKey)switch(i.key){case"ArrowLeft":{var s=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[s].focus(),a.setState({sectorToFocus:s});break}case"ArrowRight":{var l=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[l].focus(),a.setState({sectorToFocus:l});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var r=this.props,a=r.sectors,i=r.isAnimationActive,s=this.state.prevSectors;return i&&a&&a.length&&(!s||!Ta(s,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var r=this,a=this.props,i=a.hide,s=a.sectors,l=a.className,c=a.label,f=a.cx,h=a.cy,d=a.innerRadius,v=a.outerRadius,y=a.isAnimationActive,x=this.state.isAnimationFinished;if(i||!s||!s.length||!le(f)||!le(h)||!le(d)||!le(v))return null;var I=He("recharts-pie",l);return R.createElement(De,{tabIndex:this.props.rootTabIndex,className:I,ref:function(S){r.pieRef=S}},this.renderSectors(),c&&this.renderLabels(s),qt.renderCallByParent(this.props,null,!1),(!y||x)&&lr.renderCallByParent(this.props,s,!1))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return a.prevIsAnimationActive!==r.isAnimationActive?{prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:[],isAnimationFinished:!0}:r.isAnimationActive&&r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:r.sectors!==a.curSectors?{curSectors:r.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(r,a){return r>a?"start":r<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(r,a,i){if(R.isValidElement(r))return R.cloneElement(r,a);if(ke(r))return r(a);var s=He("recharts-pie-label-line",typeof r!="boolean"?r.className:"");return R.createElement(ka,ii({},a,{key:i,type:"linear",className:s}))}},{key:"renderLabelItem",value:function(r,a,i){if(R.isValidElement(r))return R.cloneElement(r,a);var s=i;if(ke(r)&&(s=r(a),R.isValidElement(s)))return s;var l=He("recharts-pie-label-text",typeof r!="boolean"&&!ke(r)?r.className:"");return R.createElement(go,ii({},a,{alignmentBaseline:"middle",className:l}),s)}}])})(X.PureComponent);Mp=ea;qn(ea,"displayName","Pie");qn(ea,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Zr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});qn(ea,"parseDeltaAngle",function(e,t){var n=an(t-e),r=Math.min(Math.abs(t-e),360);return n*r});qn(ea,"getRealPieData",function(e){var t=e.data,n=e.children,r=We(e,!1),a=sn(n,Xs);return t&&t.length?t.map(function(i,s){return rt(rt(rt({payload:i},r),i),a&&a[s]&&a[s].props)}):a&&a.length?a.map(function(i){return rt(rt({},r),i.props)}):[]});qn(ea,"parseCoordinateOfPie",function(e,t){var n=t.top,r=t.left,a=t.width,i=t.height,s=L_(a,i),l=r+on(e.cx,a,a/2),c=n+on(e.cy,i,i/2),f=on(e.innerRadius,s,0),h=on(e.outerRadius,s,s*.8),d=e.maxRadius||Math.sqrt(a*a+i*i)/2;return{cx:l,cy:c,innerRadius:f,outerRadius:h,maxRadius:d}});qn(ea,"getComposedData",function(e){var t=e.item,n=e.offset,r=t.type.defaultProps!==void 0?rt(rt({},t.type.defaultProps),t.props):t.props,a=Mp.getRealPieData(r);if(!a||!a.length)return null;var i=r.cornerRadius,s=r.startAngle,l=r.endAngle,c=r.paddingAngle,f=r.dataKey,h=r.nameKey,d=r.valueKey,v=r.tooltipType,y=Math.abs(r.minAngle),x=Mp.parseCoordinateOfPie(r,n),I=Mp.parseDeltaAngle(s,l),b=Math.abs(I),S=f;Ee(f)&&Ee(d)?(sr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S="value"):Ee(f)&&(sr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S=d);var W=a.filter(function(P){return lt(P,S,0)!==0}).length,A=(b>=360?W:W-1)*c,O=b-W*y-A,w=a.reduce(function(P,C){var T=lt(C,S,0);return P+(le(T)?T:0)},0),_;if(w>0){var E;_=a.map(function(P,C){var T=lt(P,S,0),j=lt(P,h,C),N=(le(T)?T:0)/w,$;C?$=E.endAngle+an(I)*c*(T!==0?1:0):$=s;var V=$+an(I)*((T!==0?y:0)+N*O),q=($+V)/2,G=(x.innerRadius+x.outerRadius)/2,K=[{name:j,value:T,payload:P,dataKey:S,type:v}],L=ot(x.cx,x.cy,G,q);return E=rt(rt(rt({percent:N,cornerRadius:i,name:j,tooltipPayload:K,midAngle:q,middleRadius:G,tooltipPosition:L},P),x),{},{value:lt(P,S),startAngle:$,endAngle:V,payload:P,paddingAngle:an(I)*c}),E})}return rt(rt({},x),{},{sectors:_,data:a})});var av,MS;function QU(){if(MS)return av;MS=1;var e=Math.ceil,t=Math.max;function n(r,a,i,s){for(var l=-1,c=t(e((a-r)/(i||1)),0),f=Array(c);c--;)f[s?c:++l]=r,r+=i;return f}return av=n,av}var ov,OS;function oM(){if(OS)return ov;OS=1;var e=MA(),t=1/0,n=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=e(a),a===t||a===-t){var i=a<0?-1:1;return i*n}return a===a?a:0}return ov=r,ov}var iv,CS;function YU(){if(CS)return iv;CS=1;var e=QU(),t=Jc(),n=oM();function r(a){return function(i,s,l){return l&&typeof l!="number"&&t(i,s,l)&&(s=l=void 0),i=n(i),s===void 0?(s=i,i=0):s=n(s),l=l===void 0?i<s?1:-1:n(l),e(i,s,l,a)}}return iv=r,iv}var uv,kS;function XU(){if(kS)return uv;kS=1;var e=YU(),t=e();return uv=t,uv}var ZU=XU();const Ic=Xe(ZU);function Fs(e){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fs(e)}function ES(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function NS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ES(Object(n),!0).forEach(function(r){iM(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ES(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function iM(e,t,n){return t=JU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function JU(e){var t=eV(e,"string");return Fs(t)=="symbol"?t:t+""}function eV(e,t){if(Fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var tV=["Webkit","Moz","O","ms"],nV=function(t,n){var r=t.replace(/(\w)/,function(i){return i.toUpperCase()}),a=tV.reduce(function(i,s){return NS(NS({},i),{},iM({},s+r,n))},{});return a[t]=n,a};function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(e)}function Bc(){return Bc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bc.apply(this,arguments)}function TS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function sv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?TS(Object(n),!0).forEach(function(r){Pn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):TS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function RS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,sM(r.key),r)}}function aV(e,t,n){return t&&RS(e.prototype,t),n&&RS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oV(e,t,n){return t=xc(t),iV(e,uM()?Reflect.construct(t,n||[],xc(e).constructor):t.apply(e,n))}function iV(e,t){if(t&&(_i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uV(e)}function uV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function uM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(uM=function(){return!!e})()}function xc(e){return xc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},xc(e)}function sV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&jg(e,t)}function jg(e,t){return jg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},jg(e,t)}function Pn(e,t,n){return t=sM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sM(e){var t=lV(e,"string");return _i(t)=="symbol"?t:t+""}function lV(e,t){if(_i(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var pV=function(t){var n=t.data,r=t.startIndex,a=t.endIndex,i=t.x,s=t.width,l=t.travellerWidth;if(!n||!n.length)return{};var c=n.length,f=as().domain(Ic(0,c)).range([i,i+s-l]),h=f.domain().map(function(d){return f(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(a),scale:f,scaleValues:h}},HS=function(t){return t.changedTouches&&!!t.changedTouches.length},Mi=(function(e){function t(n){var r;return rV(this,t),r=oV(this,t,[n]),Pn(r,"handleDrag",function(a){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(a):r.state.isSlideMoving&&r.handleSlideDrag(a)}),Pn(r,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&r.handleDrag(a.changedTouches[0])}),Pn(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=r.props,i=a.endIndex,s=a.onDragEnd,l=a.startIndex;s==null||s({endIndex:i,startIndex:l})}),r.detachDragEndListener()}),Pn(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),Pn(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),Pn(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),Pn(r,"handleSlideDragStart",function(a){var i=HS(a)?a.changedTouches[0]:a;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:i.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return sV(t,e),aV(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var a=r.startX,i=r.endX,s=this.state.scaleValues,l=this.props,c=l.gap,f=l.data,h=f.length-1,d=Math.min(a,i),v=Math.max(a,i),y=t.getIndexInRange(s,d),x=t.getIndexInRange(s,v);return{startIndex:y-y%c,endIndex:x===h?h:x-x%c}}},{key:"getTextOfTick",value:function(r){var a=this.props,i=a.data,s=a.tickFormatter,l=a.dataKey,c=lt(i[r],l,r);return ke(s)?s(c,r):c}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var a=this.state,i=a.slideMoveStartX,s=a.startX,l=a.endX,c=this.props,f=c.x,h=c.width,d=c.travellerWidth,v=c.startIndex,y=c.endIndex,x=c.onChange,I=r.pageX-i;I>0?I=Math.min(I,f+h-d-l,f+h-d-s):I<0&&(I=Math.max(I,f-s,f-l));var b=this.getIndex({startX:s+I,endX:l+I});(b.startIndex!==v||b.endIndex!==y)&&x&&x(b),this.setState({startX:s+I,endX:l+I,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,a){var i=HS(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:i.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var a=this.state,i=a.brushMoveStartX,s=a.movingTravellerId,l=a.endX,c=a.startX,f=this.state[s],h=this.props,d=h.x,v=h.width,y=h.travellerWidth,x=h.onChange,I=h.gap,b=h.data,S={startX:this.state.startX,endX:this.state.endX},W=r.pageX-i;W>0?W=Math.min(W,d+v-y-f):W<0&&(W=Math.max(W,d-f)),S[s]=f+W;var A=this.getIndex(S),O=A.startIndex,w=A.endIndex,_=function(){var P=b.length-1;return s==="startX"&&(l>c?O%I===0:w%I===0)||l<c&&w===P||s==="endX"&&(l>c?w%I===0:O%I===0)||l>c&&w===P};this.setState(Pn(Pn({},s,f+W),"brushMoveStartX",r.pageX),function(){x&&_()&&x(A)})}},{key:"handleTravellerMoveKeyboard",value:function(r,a){var i=this,s=this.state,l=s.scaleValues,c=s.startX,f=s.endX,h=this.state[a],d=l.indexOf(h);if(d!==-1){var v=d+r;if(!(v===-1||v>=l.length)){var y=l[v];a==="startX"&&y>=f||a==="endX"&&y<=c||this.setState(Pn({},a,y),function(){i.props.onChange(i.getIndex({startX:i.state.startX,endX:i.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,c=r.fill,f=r.stroke;return R.createElement("rect",{stroke:f,fill:c,x:a,y:i,width:s,height:l})}},{key:"renderPanorama",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,c=r.data,f=r.children,h=r.padding,d=X.Children.only(f);return d?R.cloneElement(d,{x:a,y:i,width:s,height:l,margin:h,compact:!0,data:c}):null}},{key:"renderTravellerLayer",value:function(r,a){var i,s,l=this,c=this.props,f=c.y,h=c.travellerWidth,d=c.height,v=c.traveller,y=c.ariaLabel,x=c.data,I=c.startIndex,b=c.endIndex,S=Math.max(r,this.props.x),W=sv(sv({},We(this.props,!1)),{},{x:S,y:f,width:h,height:d}),A=y||"Min value: ".concat((i=x[I])===null||i===void 0?void 0:i.name,", Max value: ").concat((s=x[b])===null||s===void 0?void 0:s.name);return R.createElement(De,{tabIndex:0,role:"slider","aria-label":A,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(w){["ArrowLeft","ArrowRight"].includes(w.key)&&(w.preventDefault(),w.stopPropagation(),l.handleTravellerMoveKeyboard(w.key==="ArrowRight"?1:-1,a))},onFocus:function(){l.setState({isTravellerFocused:!0})},onBlur:function(){l.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(v,W))}},{key:"renderSlide",value:function(r,a){var i=this.props,s=i.y,l=i.height,c=i.stroke,f=i.travellerWidth,h=Math.min(r,a)+f,d=Math.max(Math.abs(a-r)-f,0);return R.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:c,fillOpacity:.2,x:h,y:s,width:d,height:l})}},{key:"renderText",value:function(){var r=this.props,a=r.startIndex,i=r.endIndex,s=r.y,l=r.height,c=r.travellerWidth,f=r.stroke,h=this.state,d=h.startX,v=h.endX,y=5,x={pointerEvents:"none",fill:f};return R.createElement(De,{className:"recharts-brush-texts"},R.createElement(go,Bc({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,v)-y,y:s+l/2},x),this.getTextOfTick(a)),R.createElement(go,Bc({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,v)+c+y,y:s+l/2},x),this.getTextOfTick(i)))}},{key:"render",value:function(){var r=this.props,a=r.data,i=r.className,s=r.children,l=r.x,c=r.y,f=r.width,h=r.height,d=r.alwaysShowText,v=this.state,y=v.startX,x=v.endX,I=v.isTextActive,b=v.isSlideMoving,S=v.isTravellerMoving,W=v.isTravellerFocused;if(!a||!a.length||!le(l)||!le(c)||!le(f)||!le(h)||f<=0||h<=0)return null;var A=He("recharts-brush",i),O=R.Children.count(s)===1,w=nV("userSelect","none");return R.createElement(De,{className:A,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:w},this.renderBackground(),O&&this.renderPanorama(),this.renderSlide(y,x),this.renderTravellerLayer(y,"startX"),this.renderTravellerLayer(x,"endX"),(I||b||S||W||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var a=r.x,i=r.y,s=r.width,l=r.height,c=r.stroke,f=Math.floor(i+l/2)-1;return R.createElement(R.Fragment,null,R.createElement("rect",{x:a,y:i,width:s,height:l,fill:c,stroke:"none"}),R.createElement("line",{x1:a+1,y1:f,x2:a+s-1,y2:f,fill:"none",stroke:"#fff"}),R.createElement("line",{x1:a+1,y1:f+2,x2:a+s-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,a){var i;return R.isValidElement(r)?i=R.cloneElement(r,a):ke(r)?i=r(a):i=t.renderDefaultTraveller(a),i}},{key:"getDerivedStateFromProps",value:function(r,a){var i=r.data,s=r.width,l=r.x,c=r.travellerWidth,f=r.updateId,h=r.startIndex,d=r.endIndex;if(i!==a.prevData||f!==a.prevUpdateId)return sv({prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:l,prevWidth:s},i&&i.length?pV({data:i,width:s,x:l,travellerWidth:c,startIndex:h,endIndex:d}):{scale:null,scaleValues:null});if(a.scale&&(s!==a.prevWidth||l!==a.prevX||c!==a.prevTravellerWidth)){a.scale.range([l,l+s-c]);var v=a.scale.domain().map(function(y){return a.scale(y)});return{prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:l,prevWidth:s,startX:a.scale(r.startIndex),endX:a.scale(r.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(r,a){for(var i=r.length,s=0,l=i-1;l-s>1;){var c=Math.floor((s+l)/2);r[c]>a?l=c:s=c}return a>=r[l]?l:s}}])})(X.PureComponent);Pn(Mi,"displayName","Brush");Pn(Mi,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var lv,jS;function cV(){if(jS)return lv;jS=1;var e=Ty();function t(n,r){var a;return e(n,function(i,s,l){return a=r(i,s,l),!a}),!!a}return lv=t,lv}var pv,DS;function fV(){if(DS)return pv;DS=1;var e=iA(),t=Ar(),n=cV(),r=yn(),a=Jc();function i(s,l,c){var f=r(s)?e:n;return c&&a(s,l,c)&&(l=void 0),f(s,t(l,3))}return pv=i,pv}var dV=fV();const hV=Xe(dV);var wr=function(t,n){var r=t.alwaysShow,a=t.ifOverflow;return r&&(a="extendDomain"),a===n},cv,$S;function mV(){if($S)return cv;$S=1;var e=PA();function t(n,r,a){r=="__proto__"&&e?e(n,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[r]=a}return cv=t,cv}var fv,LS;function vV(){if(LS)return fv;LS=1;var e=mV(),t=xA(),n=Ar();function r(a,i){var s={};return i=n(i,3),t(a,function(l,c,f){e(s,c,i(l,c,f))}),s}return fv=r,fv}var gV=vV();const yV=Xe(gV);var dv,FS;function bV(){if(FS)return dv;FS=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(!n(t[r],r,t))return!1;return!0}return dv=e,dv}var hv,qS;function IV(){if(qS)return hv;qS=1;var e=Ty();function t(n,r){var a=!0;return e(n,function(i,s,l){return a=!!r(i,s,l),a}),a}return hv=t,hv}var mv,zS;function BV(){if(zS)return mv;zS=1;var e=bV(),t=IV(),n=Ar(),r=yn(),a=Jc();function i(s,l,c){var f=r(s)?e:t;return c&&a(s,l,c)&&(l=void 0),f(s,n(l,3))}return mv=i,mv}var xV=BV();const lM=Xe(xV);var wV=["x","y"];function qs(e){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qs(e)}function Dg(){return Dg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dg.apply(this,arguments)}function US(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Zu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?US(Object(n),!0).forEach(function(r){PV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):US(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function PV(e,t,n){return t=SV(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function SV(e){var t=WV(e,"string");return qs(t)=="symbol"?t:t+""}function WV(e,t){if(qs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(qs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function AV(e,t){if(e==null)return{};var n=_V(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _V(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function MV(e,t){var n=e.x,r=e.y,a=AV(e,wV),i="".concat(n),s=parseInt(i,10),l="".concat(r),c=parseInt(l,10),f="".concat(t.height||a.height),h=parseInt(f,10),d="".concat(t.width||a.width),v=parseInt(d,10);return Zu(Zu(Zu(Zu(Zu({},t),a),s?{x:s}:{}),c?{y:c}:{}),{},{height:h,width:v,name:t.name,radius:t.radius})}function VS(e){return R.createElement(yc,Dg({shapeType:"rectangle",propTransformer:MV,activeClassName:"recharts-active-bar"},e))}var OV=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,a){if(typeof t=="number")return t;var i=typeof r=="number";return i?t(r,a):(i||bo(),n)}},CV=["value","background"],pM;function Oi(e){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oi(e)}function kV(e,t){if(e==null)return{};var n=EV(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function EV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function wc(){return wc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wc.apply(this,arguments)}function GS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?GS(Object(n),!0).forEach(function(r){_a(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):GS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function NV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function KS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,fM(r.key),r)}}function TV(e,t,n){return t&&KS(e.prototype,t),n&&KS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function RV(e,t,n){return t=Pc(t),HV(e,cM()?Reflect.construct(t,n||[],Pc(e).constructor):t.apply(e,n))}function HV(e,t){if(t&&(Oi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return jV(e)}function jV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(cM=function(){return!!e})()}function Pc(e){return Pc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Pc(e)}function DV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$g(e,t)}function $g(e,t){return $g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},$g(e,t)}function _a(e,t,n){return t=fM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fM(e){var t=$V(e,"string");return Oi(t)=="symbol"?t:t+""}function $V(e,t){if(Oi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Oi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Sr=(function(e){function t(){var n;NV(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=RV(this,t,[].concat(a)),_a(n,"state",{isAnimationFinished:!1}),_a(n,"id",ja("recharts-bar-")),_a(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),s&&s()}),_a(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),s&&s()}),n}return DV(t,e),TV(t,[{key:"renderRectanglesStatically",value:function(r){var a=this,i=this.props,s=i.shape,l=i.dataKey,c=i.activeIndex,f=i.activeBar,h=We(this.props,!1);return r&&r.map(function(d,v){var y=v===c,x=y?f:s,I=Mt(Mt(Mt({},h),d),{},{isActive:y,option:x,index:v,dataKey:l,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return R.createElement(De,wc({className:"recharts-bar-rectangle"},Na(a.props,d,v),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(v)}),R.createElement(VS,I))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,a=this.props,i=a.data,s=a.layout,l=a.isAnimationActive,c=a.animationBegin,f=a.animationDuration,h=a.animationEasing,d=a.animationId,v=this.state.prevData;return R.createElement(Kn,{begin:c,duration:f,isActive:l,easing:h,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(y){var x=y.t,I=i.map(function(b,S){var W=v&&v[S];if(W){var A=ht(W.x,b.x),O=ht(W.y,b.y),w=ht(W.width,b.width),_=ht(W.height,b.height);return Mt(Mt({},b),{},{x:A(x),y:O(x),width:w(x),height:_(x)})}if(s==="horizontal"){var E=ht(0,b.height),P=E(x);return Mt(Mt({},b),{},{y:b.y+b.height-P,height:P})}var C=ht(0,b.width),T=C(x);return Mt(Mt({},b),{},{width:T})});return R.createElement(De,null,r.renderRectanglesStatically(I))})}},{key:"renderRectangles",value:function(){var r=this.props,a=r.data,i=r.isAnimationActive,s=this.state.prevData;return i&&a&&a.length&&(!s||!Ta(s,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var r=this,a=this.props,i=a.data,s=a.dataKey,l=a.activeIndex,c=We(this.props.background,!1);return i.map(function(f,h){f.value;var d=f.background,v=kV(f,CV);if(!d)return null;var y=Mt(Mt(Mt(Mt(Mt({},v),{},{fill:"#eee"},d),c),Na(r.props,f,h)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:s,index:h,className:"recharts-bar-background-rectangle"});return R.createElement(VS,wc({key:"background-bar-".concat(h),option:r.props.background,isActive:h===l},y))})}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.data,l=i.xAxis,c=i.yAxis,f=i.layout,h=i.children,d=sn(h,tu);if(!d)return null;var v=f==="vertical"?s[0].height/2:s[0].width/2,y=function(b,S){var W=Array.isArray(b.value)?b.value[1]:b.value;return{x:b.x,y:b.y,value:W,errorVal:lt(b,S)}},x={clipPath:r?"url(#clipPath-".concat(a,")"):null};return R.createElement(De,x,d.map(function(I){return R.cloneElement(I,{key:"error-bar-".concat(a,"-").concat(I.props.dataKey),data:s,xAxis:l,yAxis:c,layout:f,offset:v,dataPointFormatter:y})}))}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.data,s=r.className,l=r.xAxis,c=r.yAxis,f=r.left,h=r.top,d=r.width,v=r.height,y=r.isAnimationActive,x=r.background,I=r.id;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,S=He("recharts-bar",s),W=l&&l.allowDataOverflow,A=c&&c.allowDataOverflow,O=W||A,w=Ee(I)?this.id:I;return R.createElement(De,{className:S},W||A?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(w)},R.createElement("rect",{x:W?f:f-d/2,y:A?h:h-v/2,width:W?d:d*2,height:A?v:v*2}))):null,R.createElement(De,{className:"recharts-bar-rectangles",clipPath:O?"url(#clipPath-".concat(w,")"):null},x?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(O,w),(!y||b)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:a.curData}:r.data!==a.curData?{curData:r.data}:null}}])})(X.PureComponent);pM=Sr;_a(Sr,"displayName","Bar");_a(Sr,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});_a(Sr,"getComposedData",function(e){var t=e.props,n=e.item,r=e.barPosition,a=e.bandSize,i=e.xAxis,s=e.yAxis,l=e.xAxisTicks,c=e.yAxisTicks,f=e.stackedData,h=e.dataStartIndex,d=e.displayedData,v=e.offset,y=c9(r,n);if(!y)return null;var x=t.layout,I=n.type.defaultProps,b=I!==void 0?Mt(Mt({},I),n.props):n.props,S=b.dataKey,W=b.children,A=b.minPointSize,O=x==="horizontal"?s:i,w=f?O.scale.domain():null,_=y9({numericAxis:O}),E=sn(W,Xs),P=d.map(function(C,T){var j,N,$,V,q,G;f?j=f9(f[h+T],w):(j=lt(C,S),Array.isArray(j)||(j=[_,j]));var K=OV(A,pM.defaultProps.minPointSize)(j[1],T);if(x==="horizontal"){var L,Y=[s.scale(j[0]),s.scale(j[1])],Q=Y[0],H=Y[1];N=x4({axis:i,ticks:l,bandSize:a,offset:y.offset,entry:C,index:T}),$=(L=H??Q)!==null&&L!==void 0?L:void 0,V=y.size;var F=Q-H;if(q=Number.isNaN(F)?0:F,G={x:N,y:s.y,width:V,height:s.height},Math.abs(K)>0&&Math.abs(q)<Math.abs(K)){var J=an(q||K)*(Math.abs(K)-Math.abs(q));$-=J,q+=J}}else{var ue=[i.scale(j[0]),i.scale(j[1])],he=ue[0],ge=ue[1];if(N=he,$=x4({axis:s,ticks:c,bandSize:a,offset:y.offset,entry:C,index:T}),V=ge-he,q=y.size,G={x:i.x,y:$,width:i.width,height:q},Math.abs(K)>0&&Math.abs(V)<Math.abs(K)){var ye=an(V||K)*(Math.abs(K)-Math.abs(V));V+=ye}}return Mt(Mt(Mt({},C),{},{x:N,y:$,width:V,height:q,value:f?j:j[1],payload:C,background:G},E&&E[T]&&E[T].props),{},{tooltipPayload:[D_(n,C)],tooltipPosition:{x:N+V/2,y:$+q/2}})});return Mt({data:P,layout:x},v)});function zs(e){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zs(e)}function LV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function QS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,dM(r.key),r)}}function FV(e,t,n){return t&&QS(e.prototype,t),n&&QS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function YS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ar(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?YS(Object(n),!0).forEach(function(r){v0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):YS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function v0(e,t,n){return t=dM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dM(e){var t=qV(e,"string");return zs(t)=="symbol"?t:t+""}function qV(e,t){if(zs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(zs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var cb=function(t,n,r,a,i){var s=t.width,l=t.height,c=t.layout,f=t.children,h=Object.keys(n),d={left:r.left,leftMirror:r.left,right:s-r.right,rightMirror:s-r.right,top:r.top,topMirror:r.top,bottom:l-r.bottom,bottomMirror:l-r.bottom},v=!!Sn(f,Sr);return h.reduce(function(y,x){var I=n[x],b=I.orientation,S=I.domain,W=I.padding,A=W===void 0?{}:W,O=I.mirror,w=I.reversed,_="".concat(b).concat(O?"Mirror":""),E,P,C,T,j;if(I.type==="number"&&(I.padding==="gap"||I.padding==="no-gap")){var N=S[1]-S[0],$=1/0,V=I.categoricalDomain.sort();if(V.forEach(function(ue,he){he>0&&($=Math.min((ue||0)-(V[he-1]||0),$))}),Number.isFinite($)){var q=$/N,G=I.layout==="vertical"?r.height:r.width;if(I.padding==="gap"&&(E=q*G/2),I.padding==="no-gap"){var K=on(t.barCategoryGap,q*G),L=q*G/2;E=L-K-(L-K)/G*K}}}a==="xAxis"?P=[r.left+(A.left||0)+(E||0),r.left+r.width-(A.right||0)-(E||0)]:a==="yAxis"?P=c==="horizontal"?[r.top+r.height-(A.bottom||0),r.top+(A.top||0)]:[r.top+(A.top||0)+(E||0),r.top+r.height-(A.bottom||0)-(E||0)]:P=I.range,w&&(P=[P[1],P[0]]);var Y=T_(I,i,v),Q=Y.scale,H=Y.realScaleType;Q.domain(S).range(P),R_(Q);var F=H_(Q,ar(ar({},I),{},{realScaleType:H}));a==="xAxis"?(j=b==="top"&&!O||b==="bottom"&&O,C=r.left,T=d[_]-j*I.height):a==="yAxis"&&(j=b==="left"&&!O||b==="right"&&O,C=d[_]-j*I.width,T=r.top);var J=ar(ar(ar({},I),F),{},{realScaleType:H,x:C,y:T,scale:Q,width:a==="xAxis"?r.width:I.width,height:a==="yAxis"?r.height:I.height});return J.bandSize=ic(J,F),!I.hide&&a==="xAxis"?d[_]+=(j?-1:1)*J.height:I.hide||(d[_]+=(j?-1:1)*J.width),ar(ar({},y),{},v0({},x,J))},{})},hM=function(t,n){var r=t.x,a=t.y,i=n.x,s=n.y;return{x:Math.min(r,i),y:Math.min(a,s),width:Math.abs(i-r),height:Math.abs(s-a)}},zV=function(t){var n=t.x1,r=t.y1,a=t.x2,i=t.y2;return hM({x:n,y:r},{x:a,y:i})},mM=(function(){function e(t){LV(this,e),this.scale=t}return FV(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.bandAware,i=r.position;if(n!==void 0){if(i)switch(i){case"start":return this.scale(n);case"middle":{var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+s}case"end":{var l=this.bandwidth?this.bandwidth():0;return this.scale(n)+l}default:return this.scale(n)}if(a){var c=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+c}return this.scale(n)}}},{key:"isInRange",value:function(n){var r=this.range(),a=r[0],i=r[r.length-1];return a<=i?n>=a&&n<=i:n>=i&&n<=a}}],[{key:"create",value:function(n){return new e(n)}}])})();v0(mM,"EPS",1e-4);var fb=function(t){var n=Object.keys(t).reduce(function(r,a){return ar(ar({},r),{},v0({},a,mM.create(t[a])))},{});return ar(ar({},n),{},{apply:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.bandAware,l=i.position;return yV(a,function(c,f){return n[f].apply(c,{bandAware:s,position:l})})},isInRange:function(a){return lM(a,function(i,s){return n[s].isInRange(i)})}})};function UV(e){return(e%180+180)%180}var VV=function(t){var n=t.width,r=t.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=UV(a),s=i*Math.PI/180,l=Math.atan(r/n),c=s>l&&s<Math.PI-l?r/Math.sin(s):n/Math.cos(s);return Math.abs(c)},vv,XS;function GV(){if(XS)return vv;XS=1;var e=Ar(),t=Ys(),n=Xc();function r(a){return function(i,s,l){var c=Object(i);if(!t(i)){var f=e(s,3);i=n(i),s=function(d){return f(c[d],d,c)}}var h=a(i,s,l);return h>-1?c[f?i[h]:h]:void 0}}return vv=r,vv}var gv,ZS;function KV(){if(ZS)return gv;ZS=1;var e=oM();function t(n){var r=e(n),a=r%1;return r===r?a?r-a:r:0}return gv=t,gv}var yv,JS;function QV(){if(JS)return yv;JS=1;var e=gA(),t=Ar(),n=KV(),r=Math.max;function a(i,s,l){var c=i==null?0:i.length;if(!c)return-1;var f=l==null?0:n(l);return f<0&&(f=r(c+f,0)),e(i,t(s,3),f)}return yv=a,yv}var bv,e3;function YV(){if(e3)return bv;e3=1;var e=GV(),t=QV(),n=e(t);return bv=n,bv}var XV=YV();const ZV=Xe(XV);var JV=kW();const eG=Xe(JV);var tG=eG(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),db=X.createContext(void 0),hb=X.createContext(void 0),vM=X.createContext(void 0),gM=X.createContext({}),yM=X.createContext(void 0),bM=X.createContext(0),IM=X.createContext(0),t3=function(t){var n=t.state,r=n.xAxisMap,a=n.yAxisMap,i=n.offset,s=t.clipPathId,l=t.children,c=t.width,f=t.height,h=tG(i);return R.createElement(db.Provider,{value:r},R.createElement(hb.Provider,{value:a},R.createElement(gM.Provider,{value:i},R.createElement(vM.Provider,{value:h},R.createElement(yM.Provider,{value:s},R.createElement(bM.Provider,{value:f},R.createElement(IM.Provider,{value:c},l)))))))},nG=function(){return X.useContext(yM)},BM=function(t){var n=X.useContext(db);n==null&&bo();var r=n[t];return r==null&&bo(),r},rG=function(){var t=X.useContext(db);return Wa(t)},aG=function(){var t=X.useContext(hb),n=ZV(t,function(r){return lM(r.domain,Number.isFinite)});return n||Wa(t)},xM=function(t){var n=X.useContext(hb);n==null&&bo();var r=n[t];return r==null&&bo(),r},oG=function(){var t=X.useContext(vM);return t},iG=function(){return X.useContext(gM)},mb=function(){return X.useContext(IM)},vb=function(){return X.useContext(bM)};function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ci(e)}function uG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,PM(r.key),r)}}function lG(e,t,n){return t&&sG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function pG(e,t,n){return t=Sc(t),cG(e,wM()?Reflect.construct(t,n||[],Sc(e).constructor):t.apply(e,n))}function cG(e,t){if(t&&(Ci(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return fG(e)}function fG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(wM=function(){return!!e})()}function Sc(e){return Sc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Sc(e)}function dG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Lg(e,t)}function Lg(e,t){return Lg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Lg(e,t)}function n3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function r3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?n3(Object(n),!0).forEach(function(r){gb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):n3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gb(e,t,n){return t=PM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function PM(e){var t=hG(e,"string");return Ci(t)=="symbol"?t:t+""}function hG(e,t){if(Ci(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ci(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function mG(e,t){return bG(e)||yG(e,t)||gG(e,t)||vG()}function vG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gG(e,t){if(e){if(typeof e=="string")return a3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a3(e,t)}}function a3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yG(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function bG(e){if(Array.isArray(e))return e}function Fg(){return Fg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fg.apply(this,arguments)}var IG=function(t,n){var r;return R.isValidElement(t)?r=R.cloneElement(t,n):ke(t)?r=t(n):r=R.createElement("line",Fg({},n,{className:"recharts-reference-line-line"})),r},BG=function(t,n,r,a,i,s,l,c,f){var h=i.x,d=i.y,v=i.width,y=i.height;if(r){var x=f.y,I=t.y.apply(x,{position:s});if(wr(f,"discard")&&!t.y.isInRange(I))return null;var b=[{x:h+v,y:I},{x:h,y:I}];return c==="left"?b.reverse():b}if(n){var S=f.x,W=t.x.apply(S,{position:s});if(wr(f,"discard")&&!t.x.isInRange(W))return null;var A=[{x:W,y:d+y},{x:W,y:d}];return l==="top"?A.reverse():A}if(a){var O=f.segment,w=O.map(function(_){return t.apply(_,{position:s})});return wr(f,"discard")&&hV(w,function(_){return!t.isInRange(_)})?null:w}return null};function xG(e){var t=e.x,n=e.y,r=e.segment,a=e.xAxisId,i=e.yAxisId,s=e.shape,l=e.className,c=e.alwaysShow,f=nG(),h=BM(a),d=xM(i),v=oG();if(!f||!v)return null;sr(c===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var y=fb({x:h.scale,y:d.scale}),x=Rt(t),I=Rt(n),b=r&&r.length===2,S=BG(y,x,I,b,v,e.position,h.orientation,d.orientation,e);if(!S)return null;var W=mG(S,2),A=W[0],O=A.x,w=A.y,_=W[1],E=_.x,P=_.y,C=wr(e,"hidden")?"url(#".concat(f,")"):void 0,T=r3(r3({clipPath:C},We(e,!0)),{},{x1:O,y1:w,x2:E,y2:P});return R.createElement(De,{className:He("recharts-reference-line",l)},IG(s,T),qt.renderCallByParent(e,zV({x1:O,y1:w,x2:E,y2:P})))}var yb=(function(e){function t(){return uG(this,t),pG(this,t,arguments)}return dG(t,e),lG(t,[{key:"render",value:function(){return R.createElement(xG,this.props)}}])})(R.Component);gb(yb,"displayName","ReferenceLine");gb(yb,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function qg(){return qg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qg.apply(this,arguments)}function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(e)}function o3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function i3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?o3(Object(n),!0).forEach(function(r){g0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function PG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,WM(r.key),r)}}function SG(e,t,n){return t&&PG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function WG(e,t,n){return t=Wc(t),AG(e,SM()?Reflect.construct(t,n||[],Wc(e).constructor):t.apply(e,n))}function AG(e,t){if(t&&(ki(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _G(e)}function _G(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function SM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SM=function(){return!!e})()}function Wc(e){return Wc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Wc(e)}function MG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&zg(e,t)}function zg(e,t){return zg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},zg(e,t)}function g0(e,t,n){return t=WM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function WM(e){var t=OG(e,"string");return ki(t)=="symbol"?t:t+""}function OG(e,t){if(ki(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var CG=function(t){var n=t.x,r=t.y,a=t.xAxis,i=t.yAxis,s=fb({x:a.scale,y:i.scale}),l=s.apply({x:n,y:r},{bandAware:!0});return wr(t,"discard")&&!s.isInRange(l)?null:l},y0=(function(e){function t(){return wG(this,t),WG(this,t,arguments)}return MG(t,e),SG(t,[{key:"render",value:function(){var r=this.props,a=r.x,i=r.y,s=r.r,l=r.alwaysShow,c=r.clipPathId,f=Rt(a),h=Rt(i);if(sr(l===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!h)return null;var d=CG(this.props);if(!d)return null;var v=d.x,y=d.y,x=this.props,I=x.shape,b=x.className,S=wr(this.props,"hidden")?"url(#".concat(c,")"):void 0,W=i3(i3({clipPath:S},We(this.props,!0)),{},{cx:v,cy:y});return R.createElement(De,{className:He("recharts-reference-dot",b)},t.renderDot(I,W),qt.renderCallByParent(this.props,{x:v-s,y:y-s,width:2*s,height:2*s}))}}])})(R.Component);g0(y0,"displayName","ReferenceDot");g0(y0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});g0(y0,"renderDot",function(e,t){var n;return R.isValidElement(e)?n=R.cloneElement(e,t):ke(e)?n=e(t):n=R.createElement(nl,qg({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),n});function Ug(){return Ug=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ug.apply(this,arguments)}function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(e)}function u3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function s3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?u3(Object(n),!0).forEach(function(r){b0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function EG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_M(r.key),r)}}function NG(e,t,n){return t&&EG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function TG(e,t,n){return t=Ac(t),RG(e,AM()?Reflect.construct(t,n||[],Ac(e).constructor):t.apply(e,n))}function RG(e,t){if(t&&(Ei(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return HG(e)}function HG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(AM=function(){return!!e})()}function Ac(e){return Ac=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ac(e)}function jG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Vg(e,t)}function Vg(e,t){return Vg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Vg(e,t)}function b0(e,t,n){return t=_M(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _M(e){var t=DG(e,"string");return Ei(t)=="symbol"?t:t+""}function DG(e,t){if(Ei(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var $G=function(t,n,r,a,i){var s=i.x1,l=i.x2,c=i.y1,f=i.y2,h=i.xAxis,d=i.yAxis;if(!h||!d)return null;var v=fb({x:h.scale,y:d.scale}),y={x:t?v.x.apply(s,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(c,{position:"start"}):v.y.rangeMin},x={x:n?v.x.apply(l,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(f,{position:"end"}):v.y.rangeMax};return wr(i,"discard")&&(!v.isInRange(y)||!v.isInRange(x))?null:hM(y,x)},I0=(function(e){function t(){return kG(this,t),TG(this,t,arguments)}return jG(t,e),NG(t,[{key:"render",value:function(){var r=this.props,a=r.x1,i=r.x2,s=r.y1,l=r.y2,c=r.className,f=r.alwaysShow,h=r.clipPathId;sr(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=Rt(a),v=Rt(i),y=Rt(s),x=Rt(l),I=this.props.shape;if(!d&&!v&&!y&&!x&&!I)return null;var b=$G(d,v,y,x,this.props);if(!b&&!I)return null;var S=wr(this.props,"hidden")?"url(#".concat(h,")"):void 0;return R.createElement(De,{className:He("recharts-reference-area",c)},t.renderRect(I,s3(s3({clipPath:S},We(this.props,!0)),b)),qt.renderCallByParent(this.props,b))}}])})(R.Component);b0(I0,"displayName","ReferenceArea");b0(I0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});b0(I0,"renderRect",function(e,t){var n;return R.isValidElement(e)?n=R.cloneElement(e,t):ke(e)?n=e(t):n=R.createElement(pb,Ug({},t,{className:"recharts-reference-area-rect"})),n});function MM(e,t,n){if(t<1)return[];if(t===1&&n===void 0)return e;for(var r=[],a=0;a<e.length;a+=t)r.push(e[a]);return r}function LG(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return VV(r,n)}function FG(e,t,n){var r=n==="width",a=e.x,i=e.y,s=e.width,l=e.height;return t===1?{start:r?a:i,end:r?a+s:i+l}:{start:r?a+s:i+l,end:r?a:i}}function _c(e,t,n,r,a){if(e*t<e*r||e*t>e*a)return!1;var i=n();return e*(t-e*i/2-r)>=0&&e*(t+e*i/2-a)<=0}function qG(e,t){return MM(e,t+1)}function zG(e,t,n,r,a){for(var i=(r||[]).slice(),s=t.start,l=t.end,c=0,f=1,h=s,d=function(){var x=r==null?void 0:r[c];if(x===void 0)return{v:MM(r,f)};var I=c,b,S=function(){return b===void 0&&(b=n(x,I)),b},W=x.coordinate,A=c===0||_c(e,W,S,h,l);A||(c=0,h=s,f+=1),A&&(h=W+e*(S()/2+a),c+=f)},v;f<=i.length;)if(v=d(),v)return v.v;return[]}function Us(e){"@babel/helpers - typeof";return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Us(e)}function l3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?l3(Object(n),!0).forEach(function(r){UG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function UG(e,t,n){return t=VG(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function VG(e){var t=GG(e,"string");return Us(t)=="symbol"?t:t+""}function GG(e,t){if(Us(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Us(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function KG(e,t,n,r,a){for(var i=(r||[]).slice(),s=i.length,l=t.start,c=t.end,f=function(v){var y=i[v],x,I=function(){return x===void 0&&(x=n(y,v)),x};if(v===s-1){var b=e*(y.coordinate+e*I()/2-c);i[v]=y=Jt(Jt({},y),{},{tickCoord:b>0?y.coordinate-b*e:y.coordinate})}else i[v]=y=Jt(Jt({},y),{},{tickCoord:y.coordinate});var S=_c(e,y.tickCoord,I,l,c);S&&(c=y.tickCoord-e*(I()/2+a),i[v]=Jt(Jt({},y),{},{isShow:!0}))},h=s-1;h>=0;h--)f(h);return i}function QG(e,t,n,r,a,i){var s=(r||[]).slice(),l=s.length,c=t.start,f=t.end;if(i){var h=r[l-1],d=n(h,l-1),v=e*(h.coordinate+e*d/2-f);s[l-1]=h=Jt(Jt({},h),{},{tickCoord:v>0?h.coordinate-v*e:h.coordinate});var y=_c(e,h.tickCoord,function(){return d},c,f);y&&(f=h.tickCoord-e*(d/2+a),s[l-1]=Jt(Jt({},h),{},{isShow:!0}))}for(var x=i?l-1:l,I=function(W){var A=s[W],O,w=function(){return O===void 0&&(O=n(A,W)),O};if(W===0){var _=e*(A.coordinate-e*w()/2-c);s[W]=A=Jt(Jt({},A),{},{tickCoord:_<0?A.coordinate-_*e:A.coordinate})}else s[W]=A=Jt(Jt({},A),{},{tickCoord:A.coordinate});var E=_c(e,A.tickCoord,w,c,f);E&&(c=A.tickCoord+e*(w()/2+a),s[W]=Jt(Jt({},A),{},{isShow:!0}))},b=0;b<x;b++)I(b);return s}function bb(e,t,n){var r=e.tick,a=e.ticks,i=e.viewBox,s=e.minTickGap,l=e.orientation,c=e.interval,f=e.tickFormatter,h=e.unit,d=e.angle;if(!a||!a.length||!r)return[];if(le(c)||Zr.isSsr)return qG(a,typeof c=="number"&&le(c)?c:0);var v=[],y=l==="top"||l==="bottom"?"width":"height",x=h&&y==="width"?rs(h,{fontSize:t,letterSpacing:n}):{width:0,height:0},I=function(A,O){var w=ke(f)?f(A.value,O):A.value;return y==="width"?LG(rs(w,{fontSize:t,letterSpacing:n}),x,d):rs(w,{fontSize:t,letterSpacing:n})[y]},b=a.length>=2?an(a[1].coordinate-a[0].coordinate):1,S=FG(i,b,y);return c==="equidistantPreserveStart"?zG(b,S,I,a,s):(c==="preserveStart"||c==="preserveStartEnd"?v=QG(b,S,I,a,s,c==="preserveStartEnd"):v=KG(b,S,I,a,s),v.filter(function(W){return W.isShow}))}var YG=["viewBox"],XG=["viewBox"],ZG=["ticks"];function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ni(e)}function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ui.apply(this,arguments)}function p3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p3(Object(n),!0).forEach(function(r){Ib(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Iv(e,t){if(e==null)return{};var n=JG(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function JG(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function eK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,CM(r.key),r)}}function tK(e,t,n){return t&&c3(e.prototype,t),n&&c3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function nK(e,t,n){return t=Mc(t),rK(e,OM()?Reflect.construct(t,n||[],Mc(e).constructor):t.apply(e,n))}function rK(e,t){if(t&&(Ni(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aK(e)}function aK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function OM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(OM=function(){return!!e})()}function Mc(e){return Mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Mc(e)}function oK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Gg(e,t)}function Gg(e,t){return Gg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Gg(e,t)}function Ib(e,t,n){return t=CM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function CM(e){var t=iK(e,"string");return Ni(t)=="symbol"?t:t+""}function iK(e,t){if(Ni(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var nu=(function(e){function t(n){var r;return eK(this,t),r=nK(this,t,[n]),r.state={fontSize:"",letterSpacing:""},r}return oK(t,e),tK(t,[{key:"shouldComponentUpdate",value:function(r,a){var i=r.viewBox,s=Iv(r,YG),l=this.props,c=l.viewBox,f=Iv(l,XG);return!li(i,c)||!li(s,f)||!li(a,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var a=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.x,s=a.y,l=a.width,c=a.height,f=a.orientation,h=a.tickSize,d=a.mirror,v=a.tickMargin,y,x,I,b,S,W,A=d?-1:1,O=r.tickSize||h,w=le(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":y=x=r.coordinate,b=s+ +!d*c,I=b-A*O,W=I-A*v,S=w;break;case"left":I=b=r.coordinate,x=i+ +!d*l,y=x-A*O,S=y-A*v,W=w;break;case"right":I=b=r.coordinate,x=i+ +d*l,y=x+A*O,S=y+A*v,W=w;break;default:y=x=r.coordinate,b=s+ +d*c,I=b+A*O,W=I+A*v,S=w;break}return{line:{x1:y,y1:I,x2:x,y2:b},tick:{x:S,y:W}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s;switch(a){case"left":s=i?"start":"end";break;case"right":s=i?"end":"start";break;default:s="middle";break}return s}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s="end";switch(a){case"left":case"right":s="middle";break;case"top":s=i?"start":"end";break;default:s=i?"end":"start";break}return s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,c=r.orientation,f=r.mirror,h=r.axisLine,d=rn(rn(rn({},We(this.props,!1)),We(h,!1)),{},{fill:"none"});if(c==="top"||c==="bottom"){var v=+(c==="top"&&!f||c==="bottom"&&f);d=rn(rn({},d),{},{x1:a,y1:i+v*l,x2:a+s,y2:i+v*l})}else{var y=+(c==="left"&&!f||c==="right"&&f);d=rn(rn({},d),{},{x1:a+y*s,y1:i,x2:a+y*s,y2:i+l})}return R.createElement("line",ui({},d,{className:He("recharts-cartesian-axis-line",Mn(h,"className"))}))}},{key:"renderTicks",value:function(r,a,i){var s=this,l=this.props,c=l.tickLine,f=l.stroke,h=l.tick,d=l.tickFormatter,v=l.unit,y=bb(rn(rn({},this.props),{},{ticks:r}),a,i),x=this.getTickTextAnchor(),I=this.getTickVerticalAnchor(),b=We(this.props,!1),S=We(h,!1),W=rn(rn({},b),{},{fill:"none"},We(c,!1)),A=y.map(function(O,w){var _=s.getTickLineCoord(O),E=_.line,P=_.tick,C=rn(rn(rn(rn({textAnchor:x,verticalAnchor:I},b),{},{stroke:"none",fill:f},S),P),{},{index:w,payload:O,visibleTicksCount:y.length,tickFormatter:d});return R.createElement(De,ui({className:"recharts-cartesian-axis-tick",key:"tick-".concat(O.value,"-").concat(O.coordinate,"-").concat(O.tickCoord)},Na(s.props,O,w)),c&&R.createElement("line",ui({},W,E,{className:He("recharts-cartesian-axis-tick-line",Mn(c,"className"))})),h&&t.renderTickItem(h,C,"".concat(ke(d)?d(O.value,w):O.value).concat(v||"")))});return R.createElement("g",{className:"recharts-cartesian-axis-ticks"},A)}},{key:"render",value:function(){var r=this,a=this.props,i=a.axisLine,s=a.width,l=a.height,c=a.ticksGenerator,f=a.className,h=a.hide;if(h)return null;var d=this.props,v=d.ticks,y=Iv(d,ZG),x=v;return ke(c)&&(x=v&&v.length>0?c(this.props):c(y)),s<=0||l<=0||!x||!x.length?null:R.createElement(De,{className:He("recharts-cartesian-axis",f),ref:function(b){r.layerReference=b}},i&&this.renderAxisLine(),this.renderTicks(x,this.state.fontSize,this.state.letterSpacing),qt.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return R.isValidElement(r)?s=R.cloneElement(r,a):ke(r)?s=r(a):s=R.createElement(go,ui({},a,{className:"recharts-cartesian-axis-tick-value"}),i),s}}])})(X.Component);Ib(nu,"displayName","CartesianAxis");Ib(nu,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var uK=["x1","y1","x2","y2","key"],sK=["offset"];function Io(e){"@babel/helpers - typeof";return Io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Io(e)}function f3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?f3(Object(n),!0).forEach(function(r){lK(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lK(e,t,n){return t=pK(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pK(e){var t=cK(e,"string");return Io(t)=="symbol"?t:t+""}function cK(e,t){if(Io(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Io(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(this,arguments)}function d3(e,t){if(e==null)return{};var n=fK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var dK=function(t){var n=t.fill;if(!n||n==="none")return null;var r=t.fillOpacity,a=t.x,i=t.y,s=t.width,l=t.height,c=t.ry;return R.createElement("rect",{x:a,y:i,ry:c,width:s,height:l,stroke:"none",fill:n,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function kM(e,t){var n;if(R.isValidElement(e))n=R.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=t.x1,a=t.y1,i=t.x2,s=t.y2,l=t.key,c=d3(t,uK),f=We(c,!1);f.offset;var h=d3(f,sK);n=R.createElement("line",fo({},h,{x1:r,y1:a,x2:i,y2:s,fill:"none",key:l}))}return n}function hK(e){var t=e.x,n=e.width,r=e.horizontal,a=r===void 0?!0:r,i=e.horizontalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(l,c){var f=en(en({},e),{},{x1:t,y1:l,x2:t+n,y2:l,key:"line-".concat(c),index:c});return kM(a,f)});return R.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function mK(e){var t=e.y,n=e.height,r=e.vertical,a=r===void 0?!0:r,i=e.verticalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(l,c){var f=en(en({},e),{},{x1:l,y1:t,x2:l,y2:t+n,key:"line-".concat(c),index:c});return kM(a,f)});return R.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function vK(e){var t=e.horizontalFill,n=e.fillOpacity,r=e.x,a=e.y,i=e.width,s=e.height,l=e.horizontalPoints,c=e.horizontal,f=c===void 0?!0:c;if(!f||!t||!t.length)return null;var h=l.map(function(v){return Math.round(v+a-a)}).sort(function(v,y){return v-y});a!==h[0]&&h.unshift(0);var d=h.map(function(v,y){var x=!h[y+1],I=x?a+s-v:h[y+1]-v;if(I<=0)return null;var b=y%t.length;return R.createElement("rect",{key:"react-".concat(y),y:v,x:r,height:I,width:i,stroke:"none",fill:t[b],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return R.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function gK(e){var t=e.vertical,n=t===void 0?!0:t,r=e.verticalFill,a=e.fillOpacity,i=e.x,s=e.y,l=e.width,c=e.height,f=e.verticalPoints;if(!n||!r||!r.length)return null;var h=f.map(function(v){return Math.round(v+i-i)}).sort(function(v,y){return v-y});i!==h[0]&&h.unshift(0);var d=h.map(function(v,y){var x=!h[y+1],I=x?i+l-v:h[y+1]-v;if(I<=0)return null;var b=y%r.length;return R.createElement("rect",{key:"react-".concat(y),x:v,y:s,width:I,height:c,stroke:"none",fill:r[b],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return R.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var yK=function(t,n){var r=t.xAxis,a=t.width,i=t.height,s=t.offset;return N_(bb(en(en(en({},nu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.left,s.left+s.width,n)},bK=function(t,n){var r=t.yAxis,a=t.width,i=t.height,s=t.offset;return N_(bb(en(en(en({},nu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.top,s.top+s.height,n)},ti={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function Oc(e){var t,n,r,a,i,s,l=mb(),c=vb(),f=iG(),h=en(en({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:ti.stroke,fill:(n=e.fill)!==null&&n!==void 0?n:ti.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:ti.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:ti.horizontalFill,vertical:(i=e.vertical)!==null&&i!==void 0?i:ti.vertical,verticalFill:(s=e.verticalFill)!==null&&s!==void 0?s:ti.verticalFill,x:le(e.x)?e.x:f.left,y:le(e.y)?e.y:f.top,width:le(e.width)?e.width:f.width,height:le(e.height)?e.height:f.height}),d=h.x,v=h.y,y=h.width,x=h.height,I=h.syncWithTicks,b=h.horizontalValues,S=h.verticalValues,W=rG(),A=aG();if(!le(y)||y<=0||!le(x)||x<=0||!le(d)||d!==+d||!le(v)||v!==+v)return null;var O=h.verticalCoordinatesGenerator||yK,w=h.horizontalCoordinatesGenerator||bK,_=h.horizontalPoints,E=h.verticalPoints;if((!_||!_.length)&&ke(w)){var P=b&&b.length,C=w({yAxis:A?en(en({},A),{},{ticks:P?b:A.ticks}):void 0,width:l,height:c,offset:f},P?!0:I);sr(Array.isArray(C),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Io(C),"]")),Array.isArray(C)&&(_=C)}if((!E||!E.length)&&ke(O)){var T=S&&S.length,j=O({xAxis:W?en(en({},W),{},{ticks:T?S:W.ticks}):void 0,width:l,height:c,offset:f},T?!0:I);sr(Array.isArray(j),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Io(j),"]")),Array.isArray(j)&&(E=j)}return R.createElement("g",{className:"recharts-cartesian-grid"},R.createElement(dK,{fill:h.fill,fillOpacity:h.fillOpacity,x:h.x,y:h.y,width:h.width,height:h.height,ry:h.ry}),R.createElement(hK,fo({},h,{offset:f,horizontalPoints:_,xAxis:W,yAxis:A})),R.createElement(mK,fo({},h,{offset:f,verticalPoints:E,xAxis:W,yAxis:A})),R.createElement(vK,fo({},h,{horizontalPoints:_})),R.createElement(gK,fo({},h,{verticalPoints:E})))}Oc.displayName="CartesianGrid";var IK=["type","layout","connectNulls","ref"],BK=["key"];function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ti(e)}function h3(e,t){if(e==null)return{};var n=xK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function xK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}function m3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?m3(Object(n),!0).forEach(function(r){or(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ni(e){return WK(e)||SK(e)||PK(e)||wK()}function wK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PK(e,t){if(e){if(typeof e=="string")return Kg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kg(e,t)}}function SK(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function WK(e){if(Array.isArray(e))return Kg(e)}function Kg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function AK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,NM(r.key),r)}}function _K(e,t,n){return t&&v3(e.prototype,t),n&&v3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function MK(e,t,n){return t=Cc(t),OK(e,EM()?Reflect.construct(t,n||[],Cc(e).constructor):t.apply(e,n))}function OK(e,t){if(t&&(Ti(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return CK(e)}function CK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function EM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(EM=function(){return!!e})()}function Cc(e){return Cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Cc(e)}function kK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qg(e,t)}function Qg(e,t){return Qg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qg(e,t)}function or(e,t,n){return t=NM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function NM(e){var t=EK(e,"string");return Ti(t)=="symbol"?t:t+""}function EK(e,t){if(Ti(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var qr=(function(e){function t(){var n;AK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=MK(this,t,[].concat(a)),or(n,"state",{isAnimationFinished:!0,totalLength:0}),or(n,"generateSimpleStrokeDasharray",function(s,l){return"".concat(l,"px ").concat(s-l,"px")}),or(n,"getStrokeDasharray",function(s,l,c){var f=c.reduce(function(S,W){return S+W});if(!f)return n.generateSimpleStrokeDasharray(l,s);for(var h=Math.floor(s/f),d=s%f,v=l-s,y=[],x=0,I=0;x<c.length;I+=c[x],++x)if(I+c[x]>d){y=[].concat(ni(c.slice(0,x)),[d-I]);break}var b=y.length%2===0?[0,v]:[v];return[].concat(ni(t.repeat(c,h)),ni(y),b).map(function(S){return"".concat(S,"px")}).join(", ")}),or(n,"id",ja("recharts-line-")),or(n,"pathRef",function(s){n.mainCurve=s}),or(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0}),n.props.onAnimationEnd&&n.props.onAnimationEnd()}),or(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1}),n.props.onAnimationStart&&n.props.onAnimationStart()}),n}return kK(t,e),_K(t,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.points,l=i.xAxis,c=i.yAxis,f=i.layout,h=i.children,d=sn(h,tu);if(!d)return null;var v=function(I,b){return{x:I.x,y:I.y,value:I.value,errorVal:lt(I.payload,b)}},y={clipPath:r?"url(#clipPath-".concat(a,")"):null};return R.createElement(De,y,d.map(function(x){return R.cloneElement(x,{key:"bar-".concat(x.props.dataKey),data:s,xAxis:l,yAxis:c,layout:f,dataPointFormatter:v})}))}},{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var l=this.props,c=l.dot,f=l.points,h=l.dataKey,d=We(this.props,!1),v=We(c,!0),y=f.map(function(I,b){var S=wn(wn(wn({key:"dot-".concat(b),r:3},d),v),{},{index:b,cx:I.x,cy:I.y,value:I.value,dataKey:h,payload:I.payload,points:f});return t.renderDotItem(c,S)}),x={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return R.createElement(De,ls({className:"recharts-line-dots",key:"dots"},x),y)}},{key:"renderCurveStatically",value:function(r,a,i,s){var l=this.props,c=l.type,f=l.layout,h=l.connectNulls;l.ref;var d=h3(l,IK),v=wn(wn(wn({},We(d,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(i,")"):null,points:r},s),{},{type:c,layout:f,connectNulls:h});return R.createElement(ka,ls({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,a){var i=this,s=this.props,l=s.points,c=s.strokeDasharray,f=s.isAnimationActive,h=s.animationBegin,d=s.animationDuration,v=s.animationEasing,y=s.animationId,x=s.animateNewValues,I=s.width,b=s.height,S=this.state,W=S.prevPoints,A=S.totalLength;return R.createElement(Kn,{begin:h,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"line-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(O){var w=O.t;if(W){var _=W.length/l.length,E=l.map(function(N,$){var V=Math.floor($*_);if(W[V]){var q=W[V],G=ht(q.x,N.x),K=ht(q.y,N.y);return wn(wn({},N),{},{x:G(w),y:K(w)})}if(x){var L=ht(I*2,N.x),Y=ht(b/2,N.y);return wn(wn({},N),{},{x:L(w),y:Y(w)})}return wn(wn({},N),{},{x:N.x,y:N.y})});return i.renderCurveStatically(E,r,a)}var P=ht(0,A),C=P(w),T;if(c){var j="".concat(c).split(/[,\s]+/gim).map(function(N){return parseFloat(N)});T=i.getStrokeDasharray(C,A,j)}else T=i.generateSimpleStrokeDasharray(A,C);return i.renderCurveStatically(l,r,a,{strokeDasharray:T})})}},{key:"renderCurve",value:function(r,a){var i=this.props,s=i.points,l=i.isAnimationActive,c=this.state,f=c.prevPoints,h=c.totalLength;return l&&s&&s.length&&(!f&&h>0||!Ta(f,s))?this.renderCurveWithAnimation(r,a):this.renderCurveStatically(s,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,l=a.points,c=a.className,f=a.xAxis,h=a.yAxis,d=a.top,v=a.left,y=a.width,x=a.height,I=a.isAnimationActive,b=a.id;if(i||!l||!l.length)return null;var S=this.state.isAnimationFinished,W=l.length===1,A=He("recharts-line",c),O=f&&f.allowDataOverflow,w=h&&h.allowDataOverflow,_=O||w,E=Ee(b)?this.id:b,P=(r=We(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},C=P.r,T=C===void 0?3:C,j=P.strokeWidth,N=j===void 0?2:j,$=HW(s)?s:{},V=$.clipDot,q=V===void 0?!0:V,G=T*2+N;return R.createElement(De,{className:A},O||w?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(E)},R.createElement("rect",{x:O?v:v-y/2,y:w?d:d-x/2,width:O?y:y*2,height:w?x:x*2})),!q&&R.createElement("clipPath",{id:"clipPath-dots-".concat(E)},R.createElement("rect",{x:v-G/2,y:d-G/2,width:y+G,height:x+G}))):null,!W&&this.renderCurve(_,E),this.renderErrorBar(_,E),(W||s)&&this.renderDots(_,q,E),(!I||S)&&lr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,a){for(var i=r.length%2!==0?[].concat(ni(r),[0]):r,s=[],l=0;l<a;++l)s=[].concat(ni(s),ni(i));return s}},{key:"renderDotItem",value:function(r,a){var i;if(R.isValidElement(r))i=R.cloneElement(r,a);else if(ke(r))i=r(a);else{var s=a.key,l=h3(a,BK),c=He("recharts-line-dot",typeof r!="boolean"?r.className:"");i=R.createElement(nl,ls({key:s},l,{className:c}))}return i}}])})(X.PureComponent);or(qr,"displayName","Line");or(qr,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});or(qr,"getComposedData",function(e){var t=e.props,n=e.xAxis,r=e.yAxis,a=e.xAxisTicks,i=e.yAxisTicks,s=e.dataKey,l=e.bandSize,c=e.displayedData,f=e.offset,h=t.layout,d=c.map(function(v,y){var x=lt(v,s);return h==="horizontal"?{x:wi({axis:n,ticks:a,bandSize:l,entry:v,index:y}),y:Ee(x)?null:r.scale(x),value:x,payload:v}:{x:Ee(x)?null:n.scale(x),y:wi({axis:r,ticks:i,bandSize:l,entry:v,index:y}),value:x,payload:v}});return wn({points:d,layout:h},f)});var NK=["layout","type","stroke","connectNulls","isRange","ref"],TK=["key"],TM;function Ri(e){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ri(e)}function RM(e,t){if(e==null)return{};var n=RK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function RK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}function g3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?g3(Object(n),!0).forEach(function(r){Ir(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function HK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,jM(r.key),r)}}function jK(e,t,n){return t&&y3(e.prototype,t),n&&y3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function DK(e,t,n){return t=kc(t),$K(e,HM()?Reflect.construct(t,n||[],kc(e).constructor):t.apply(e,n))}function $K(e,t){if(t&&(Ri(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return LK(e)}function LK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function HM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(HM=function(){return!!e})()}function kc(e){return kc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},kc(e)}function FK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yg(e,t)}function Yg(e,t){return Yg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yg(e,t)}function Ir(e,t,n){return t=jM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jM(e){var t=qK(e,"string");return Ri(t)=="symbol"?t:t+""}function qK(e,t){if(Ri(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ri(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var So=(function(e){function t(){var n;HK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=DK(this,t,[].concat(a)),Ir(n,"state",{isAnimationFinished:!0}),Ir(n,"id",ja("recharts-area-")),Ir(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),ke(s)&&s()}),Ir(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),ke(s)&&s()}),n}return FK(t,e),jK(t,[{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive,l=this.state.isAnimationFinished;if(s&&!l)return null;var c=this.props,f=c.dot,h=c.points,d=c.dataKey,v=We(this.props,!1),y=We(f,!0),x=h.map(function(b,S){var W=Pa(Pa(Pa({key:"dot-".concat(S),r:3},v),y),{},{index:S,cx:b.x,cy:b.y,dataKey:d,value:b.value,payload:b.payload,points:h});return t.renderDotItem(f,W)}),I={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return R.createElement(De,ho({className:"recharts-area-dots"},I),x)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,l=a.strokeWidth,c=s[0].x,f=s[s.length-1].x,h=r*Math.abs(c-f),d=Aa(s.map(function(v){return v.y||0}));return le(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Aa(i.map(function(v){return v.y||0})),d)),le(d)?R.createElement("rect",{x:c<f?c:c-h,y:0,width:h,height:Math.floor(d+(l?parseInt("".concat(l),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,l=a.strokeWidth,c=s[0].y,f=s[s.length-1].y,h=r*Math.abs(c-f),d=Aa(s.map(function(v){return v.x||0}));return le(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Aa(i.map(function(v){return v.x||0})),d)),le(d)?R.createElement("rect",{x:0,y:c<f?c:c-h,width:d+(l?parseInt("".concat(l),10):1),height:Math.floor(h)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,i,s){var l=this.props,c=l.layout,f=l.type,h=l.stroke,d=l.connectNulls,v=l.isRange;l.ref;var y=RM(l,NK);return R.createElement(De,{clipPath:i?"url(#clipPath-".concat(s,")"):null},R.createElement(ka,ho({},We(y,!0),{points:r,connectNulls:d,type:f,baseLine:a,layout:c,stroke:"none",className:"recharts-area-area"})),h!=="none"&&R.createElement(ka,ho({},We(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:r})),h!=="none"&&v&&R.createElement(ka,ho({},We(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var i=this,s=this.props,l=s.points,c=s.baseLine,f=s.isAnimationActive,h=s.animationBegin,d=s.animationDuration,v=s.animationEasing,y=s.animationId,x=this.state,I=x.prevPoints,b=x.prevBaseLine;return R.createElement(Kn,{begin:h,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"area-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(S){var W=S.t;if(I){var A=I.length/l.length,O=l.map(function(P,C){var T=Math.floor(C*A);if(I[T]){var j=I[T],N=ht(j.x,P.x),$=ht(j.y,P.y);return Pa(Pa({},P),{},{x:N(W),y:$(W)})}return P}),w;if(le(c)&&typeof c=="number"){var _=ht(b,c);w=_(W)}else if(Ee(c)||Yi(c)){var E=ht(b,0);w=E(W)}else w=c.map(function(P,C){var T=Math.floor(C*A);if(b[T]){var j=b[T],N=ht(j.x,P.x),$=ht(j.y,P.y);return Pa(Pa({},P),{},{x:N(W),y:$(W)})}return P});return i.renderAreaStatically(O,w,r,a)}return R.createElement(De,null,R.createElement("defs",null,R.createElement("clipPath",{id:"animationClipPath-".concat(a)},i.renderClipRect(W))),R.createElement(De,{clipPath:"url(#animationClipPath-".concat(a,")")},i.renderAreaStatically(l,c,r,a)))})}},{key:"renderArea",value:function(r,a){var i=this.props,s=i.points,l=i.baseLine,c=i.isAnimationActive,f=this.state,h=f.prevPoints,d=f.prevBaseLine,v=f.totalLength;return c&&s&&s.length&&(!h&&v>0||!Ta(h,s)||!Ta(d,l))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(s,l,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,l=a.points,c=a.className,f=a.top,h=a.left,d=a.xAxis,v=a.yAxis,y=a.width,x=a.height,I=a.isAnimationActive,b=a.id;if(i||!l||!l.length)return null;var S=this.state.isAnimationFinished,W=l.length===1,A=He("recharts-area",c),O=d&&d.allowDataOverflow,w=v&&v.allowDataOverflow,_=O||w,E=Ee(b)?this.id:b,P=(r=We(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},C=P.r,T=C===void 0?3:C,j=P.strokeWidth,N=j===void 0?2:j,$=HW(s)?s:{},V=$.clipDot,q=V===void 0?!0:V,G=T*2+N;return R.createElement(De,{className:A},O||w?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(E)},R.createElement("rect",{x:O?h:h-y/2,y:w?f:f-x/2,width:O?y:y*2,height:w?x:x*2})),!q&&R.createElement("clipPath",{id:"clipPath-dots-".concat(E)},R.createElement("rect",{x:h-G/2,y:f-G/2,width:y+G,height:x+G}))):null,W?null:this.renderArea(_,E),(s||W)&&this.renderDots(_,q,E),(!I||S)&&lr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(X.PureComponent);TM=So;Ir(So,"displayName","Area");Ir(So,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});Ir(So,"getBaseValue",function(e,t,n,r){var a=e.layout,i=e.baseValue,s=t.props.baseValue,l=s??i;if(le(l)&&typeof l=="number")return l;var c=a==="horizontal"?r:n,f=c.scale.domain();if(c.type==="number"){var h=Math.max(f[0],f[1]),d=Math.min(f[0],f[1]);return l==="dataMin"?d:l==="dataMax"||h<0?h:Math.max(Math.min(f[0],f[1]),0)}return l==="dataMin"?f[0]:l==="dataMax"?f[1]:f[0]});Ir(So,"getComposedData",function(e){var t=e.props,n=e.item,r=e.xAxis,a=e.yAxis,i=e.xAxisTicks,s=e.yAxisTicks,l=e.bandSize,c=e.dataKey,f=e.stackedData,h=e.dataStartIndex,d=e.displayedData,v=e.offset,y=t.layout,x=f&&f.length,I=TM.getBaseValue(t,n,r,a),b=y==="horizontal",S=!1,W=d.map(function(O,w){var _;x?_=f[h+w]:(_=lt(O,c),Array.isArray(_)?S=!0:_=[I,_]);var E=_[1]==null||x&&lt(O,c)==null;return b?{x:wi({axis:r,ticks:i,bandSize:l,entry:O,index:w}),y:E?null:a.scale(_[1]),value:_,payload:O}:{x:E?null:r.scale(_[1]),y:wi({axis:a,ticks:s,bandSize:l,entry:O,index:w}),value:_,payload:O}}),A;return x||S?A=W.map(function(O){var w=Array.isArray(O.value)?O.value[0]:null;return b?{x:O.x,y:w!=null&&O.y!=null?a.scale(w):null}:{x:w!=null?r.scale(w):null,y:O.y}}):A=b?a.scale(I):r.scale(I),Pa({points:W,baseLine:A,layout:y,isRange:S},v)});Ir(So,"renderDotItem",function(e,t){var n;if(R.isValidElement(e))n=R.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=He("recharts-area-dot",typeof e!="boolean"?e.className:""),a=t.key,i=RM(t,TK);n=R.createElement(nl,ho({},i,{key:a,className:r}))}return n});function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hi(e)}function zK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function UK(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,LM(r.key),r)}}function VK(e,t,n){return t&&UK(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function GK(e,t,n){return t=Ec(t),KK(e,DM()?Reflect.construct(t,n||[],Ec(e).constructor):t.apply(e,n))}function KK(e,t){if(t&&(Hi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return QK(e)}function QK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function DM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(DM=function(){return!!e})()}function Ec(e){return Ec=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ec(e)}function YK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Xg(e,t)}function Xg(e,t){return Xg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xg(e,t)}function $M(e,t,n){return t=LM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LM(e){var t=XK(e,"string");return Hi(t)=="symbol"?t:t+""}function XK(e,t){if(Hi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var B0=(function(e){function t(){return zK(this,t),GK(this,t,arguments)}return YK(t,e),VK(t,[{key:"render",value:function(){return null}}])})(R.Component);$M(B0,"displayName","ZAxis");$M(B0,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var ZK=["option","isActive"];function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ps.apply(this,arguments)}function JK(e,t){if(e==null)return{};var n=eQ(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function eQ(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function tQ(e){var t=e.option,n=e.isActive,r=JK(e,ZK);return typeof t=="string"?R.createElement(yc,ps({option:R.createElement(Yc,ps({type:t},r)),isActive:n,shapeType:"symbols"},r)):R.createElement(yc,ps({option:t,isActive:n,shapeType:"symbols"},r))}function ji(e){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ji(e)}function cs(){return cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cs.apply(this,arguments)}function b3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b3(Object(n),!0).forEach(function(r){Ma(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,qM(r.key),r)}}function rQ(e,t,n){return t&&I3(e.prototype,t),n&&I3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function aQ(e,t,n){return t=Nc(t),oQ(e,FM()?Reflect.construct(t,n||[],Nc(e).constructor):t.apply(e,n))}function oQ(e,t){if(t&&(ji(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return iQ(e)}function iQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function FM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(FM=function(){return!!e})()}function Nc(e){return Nc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Nc(e)}function uQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zg(e,t)}function Zg(e,t){return Zg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zg(e,t)}function Ma(e,t,n){return t=qM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qM(e){var t=sQ(e,"string");return ji(t)=="symbol"?t:t+""}function sQ(e,t){if(ji(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var x0=(function(e){function t(){var n;nQ(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=aQ(this,t,[].concat(a)),Ma(n,"state",{isAnimationFinished:!1}),Ma(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0})}),Ma(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1})}),Ma(n,"id",ja("recharts-scatter-")),n}return uQ(t,e),rQ(t,[{key:"renderSymbolsStatically",value:function(r){var a=this,i=this.props,s=i.shape,l=i.activeShape,c=i.activeIndex,f=We(this.props,!1);return r.map(function(h,d){var v=c===d,y=v?l:s,x=Fn(Fn({},f),h);return R.createElement(De,cs({className:"recharts-scatter-symbol",key:"symbol-".concat(h==null?void 0:h.cx,"-").concat(h==null?void 0:h.cy,"-").concat(h==null?void 0:h.size,"-").concat(d)},Na(a.props,h,d),{role:"img"}),R.createElement(tQ,cs({option:y,isActive:v,key:"symbol-".concat(d)},x)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,i=a.points,s=a.isAnimationActive,l=a.animationBegin,c=a.animationDuration,f=a.animationEasing,h=a.animationId,d=this.state.prevPoints;return R.createElement(Kn,{begin:l,duration:c,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(h),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var y=v.t,x=i.map(function(I,b){var S=d&&d[b];if(S){var W=ht(S.cx,I.cx),A=ht(S.cy,I.cy),O=ht(S.size,I.size);return Fn(Fn({},I),{},{cx:W(y),cy:A(y),size:O(y)})}var w=ht(0,I.size);return Fn(Fn({},I),{},{size:w(y)})});return R.createElement(De,null,r.renderSymbolsStatically(x))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,i=r.isAnimationActive,s=this.state.prevPoints;return i&&a&&a.length&&(!s||!Ta(s,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,i=a.points,s=a.xAxis,l=a.yAxis,c=a.children,f=sn(c,tu);return f?f.map(function(h,d){var v=h.props,y=v.direction,x=v.dataKey;return R.cloneElement(h,{key:"".concat(y,"-").concat(x,"-").concat(i[d]),data:i,xAxis:s,yAxis:l,layout:y==="x"?"vertical":"horizontal",dataPointFormatter:function(b,S){return{x:b.cx,y:b.cy,value:y==="x"?+b.node.x:+b.node.y,errorVal:lt(b,S)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,i=r.line,s=r.lineType,l=r.lineJointType,c=We(this.props,!1),f=We(i,!1),h,d;if(s==="joint")h=a.map(function(A){return{x:A.cx,y:A.cy}});else if(s==="fitting"){var v=eH(a),y=v.xmin,x=v.xmax,I=v.a,b=v.b,S=function(O){return I*O+b};h=[{x:y,y:S(y)},{x,y:S(x)}]}var W=Fn(Fn(Fn({},c),{},{fill:"none",stroke:c&&c.fill},f),{},{points:h});return R.isValidElement(i)?d=R.cloneElement(i,W):ke(i)?d=i(W):d=R.createElement(ka,cs({},W,{type:l})),R.createElement(De,{className:"recharts-scatter-line",key:"recharts-scatter-line"},d)}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.points,s=r.line,l=r.className,c=r.xAxis,f=r.yAxis,h=r.left,d=r.top,v=r.width,y=r.height,x=r.id,I=r.isAnimationActive;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,S=He("recharts-scatter",l),W=c&&c.allowDataOverflow,A=f&&f.allowDataOverflow,O=W||A,w=Ee(x)?this.id:x;return R.createElement(De,{className:S,clipPath:O?"url(#clipPath-".concat(w,")"):null},W||A?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(w)},R.createElement("rect",{x:W?h:h-v/2,y:A?d:d-y/2,width:W?v:v*2,height:A?y:y*2}))):null,s&&this.renderLine(),this.renderErrorBar(),R.createElement(De,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!I||b)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}])})(X.PureComponent);Ma(x0,"displayName","Scatter");Ma(x0,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});Ma(x0,"getComposedData",function(e){var t=e.xAxis,n=e.yAxis,r=e.zAxis,a=e.item,i=e.displayedData,s=e.xAxisTicks,l=e.yAxisTicks,c=e.offset,f=a.props.tooltipType,h=sn(a.props.children,Xs),d=Ee(t.dataKey)?a.props.dataKey:t.dataKey,v=Ee(n.dataKey)?a.props.dataKey:n.dataKey,y=r&&r.dataKey,x=r?r.range:B0.defaultProps.range,I=x&&x[0],b=t.scale.bandwidth?t.scale.bandwidth():0,S=n.scale.bandwidth?n.scale.bandwidth():0,W=i.map(function(A,O){var w=lt(A,d),_=lt(A,v),E=!Ee(y)&&lt(A,y)||"-",P=[{name:Ee(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:w,payload:A,dataKey:d,type:f},{name:Ee(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:_,payload:A,dataKey:v,type:f}];E!=="-"&&P.push({name:r.name||r.dataKey,unit:r.unit||"",value:E,payload:A,dataKey:y,type:f});var C=wi({axis:t,ticks:s,bandSize:b,entry:A,index:O,dataKey:d}),T=wi({axis:n,ticks:l,bandSize:S,entry:A,index:O,dataKey:v}),j=E!=="-"?r.scale(E):I,N=Math.sqrt(Math.max(j,0)/Math.PI);return Fn(Fn({},A),{},{cx:C,cy:T,x:C-N,y:T-N,xAxis:t,yAxis:n,zAxis:r,width:2*N,height:2*N,size:j,node:{x:w,y:_,z:E},tooltipPayload:P,tooltipPosition:{x:C,y:T},payload:A},h&&h[O]&&h[O].props)});return Fn({points:W},c)});function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Di(e)}function lQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,VM(r.key),r)}}function cQ(e,t,n){return t&&pQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function fQ(e,t,n){return t=Tc(t),dQ(e,zM()?Reflect.construct(t,n||[],Tc(e).constructor):t.apply(e,n))}function dQ(e,t){if(t&&(Di(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hQ(e)}function hQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function zM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(zM=function(){return!!e})()}function Tc(e){return Tc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Tc(e)}function mQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Jg(e,t)}function Jg(e,t){return Jg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Jg(e,t)}function UM(e,t,n){return t=VM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function VM(e){var t=vQ(e,"string");return Di(t)=="symbol"?t:t+""}function vQ(e,t){if(Di(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ey(){return ey=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ey.apply(this,arguments)}function gQ(e){var t=e.xAxisId,n=mb(),r=vb(),a=BM(t);return a==null?null:R.createElement(nu,ey({},a,{className:He("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:n,height:r},ticksGenerator:function(s){return Fr(s,!0)}}))}var Ra=(function(e){function t(){return lQ(this,t),fQ(this,t,arguments)}return mQ(t,e),cQ(t,[{key:"render",value:function(){return R.createElement(gQ,this.props)}}])})(R.Component);UM(Ra,"displayName","XAxis");UM(Ra,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function $i(e){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$i(e)}function yQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,QM(r.key),r)}}function IQ(e,t,n){return t&&bQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function BQ(e,t,n){return t=Rc(t),xQ(e,GM()?Reflect.construct(t,n||[],Rc(e).constructor):t.apply(e,n))}function xQ(e,t){if(t&&($i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wQ(e)}function wQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function GM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(GM=function(){return!!e})()}function Rc(e){return Rc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Rc(e)}function PQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ty(e,t)}function ty(e,t){return ty=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ty(e,t)}function KM(e,t,n){return t=QM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QM(e){var t=SQ(e,"string");return $i(t)=="symbol"?t:t+""}function SQ(e,t){if($i(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ny(){return ny=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ny.apply(this,arguments)}var WQ=function(t){var n=t.yAxisId,r=mb(),a=vb(),i=xM(n);return i==null?null:R.createElement(nu,ny({},i,{className:He("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:a},ticksGenerator:function(l){return Fr(l,!0)}}))},Br=(function(e){function t(){return yQ(this,t),BQ(this,t,arguments)}return PQ(t,e),IQ(t,[{key:"render",value:function(){return R.createElement(WQ,this.props)}}])})(R.Component);KM(Br,"displayName","YAxis");KM(Br,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function B3(e){return OQ(e)||MQ(e)||_Q(e)||AQ()}function AQ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _Q(e,t){if(e){if(typeof e=="string")return ry(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ry(e,t)}}function MQ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function OQ(e){if(Array.isArray(e))return ry(e)}function ry(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ay=function(t,n,r,a,i){var s=sn(t,yb),l=sn(t,y0),c=[].concat(B3(s),B3(l)),f=sn(t,I0),h="".concat(a,"Id"),d=a[0],v=n;if(c.length&&(v=c.reduce(function(I,b){if(b.props[h]===r&&wr(b.props,"extendDomain")&&le(b.props[d])){var S=b.props[d];return[Math.min(I[0],S),Math.max(I[1],S)]}return I},v)),f.length){var y="".concat(d,"1"),x="".concat(d,"2");v=f.reduce(function(I,b){if(b.props[h]===r&&wr(b.props,"extendDomain")&&le(b.props[y])&&le(b.props[x])){var S=b.props[y],W=b.props[x];return[Math.min(I[0],S,W),Math.max(I[1],S,W)]}return I},v)}return i&&i.length&&(v=i.reduce(function(I,b){return le(b)?[Math.min(I[0],b),Math.max(I[1],b)]:I},v)),v},Bv={exports:{}},x3;function CQ(){return x3||(x3=1,(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function a(c,f,h){this.fn=c,this.context=f,this.once=h||!1}function i(c,f,h,d,v){if(typeof h!="function")throw new TypeError("The listener must be a function");var y=new a(h,d||c,v),x=n?n+f:f;return c._events[x]?c._events[x].fn?c._events[x]=[c._events[x],y]:c._events[x].push(y):(c._events[x]=y,c._eventsCount++),c}function s(c,f){--c._eventsCount===0?c._events=new r:delete c._events[f]}function l(){this._events=new r,this._eventsCount=0}l.prototype.eventNames=function(){var f=[],h,d;if(this._eventsCount===0)return f;for(d in h=this._events)t.call(h,d)&&f.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(h)):f},l.prototype.listeners=function(f){var h=n?n+f:f,d=this._events[h];if(!d)return[];if(d.fn)return[d.fn];for(var v=0,y=d.length,x=new Array(y);v<y;v++)x[v]=d[v].fn;return x},l.prototype.listenerCount=function(f){var h=n?n+f:f,d=this._events[h];return d?d.fn?1:d.length:0},l.prototype.emit=function(f,h,d,v,y,x){var I=n?n+f:f;if(!this._events[I])return!1;var b=this._events[I],S=arguments.length,W,A;if(b.fn){switch(b.once&&this.removeListener(f,b.fn,void 0,!0),S){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,h),!0;case 3:return b.fn.call(b.context,h,d),!0;case 4:return b.fn.call(b.context,h,d,v),!0;case 5:return b.fn.call(b.context,h,d,v,y),!0;case 6:return b.fn.call(b.context,h,d,v,y,x),!0}for(A=1,W=new Array(S-1);A<S;A++)W[A-1]=arguments[A];b.fn.apply(b.context,W)}else{var O=b.length,w;for(A=0;A<O;A++)switch(b[A].once&&this.removeListener(f,b[A].fn,void 0,!0),S){case 1:b[A].fn.call(b[A].context);break;case 2:b[A].fn.call(b[A].context,h);break;case 3:b[A].fn.call(b[A].context,h,d);break;case 4:b[A].fn.call(b[A].context,h,d,v);break;default:if(!W)for(w=1,W=new Array(S-1);w<S;w++)W[w-1]=arguments[w];b[A].fn.apply(b[A].context,W)}}return!0},l.prototype.on=function(f,h,d){return i(this,f,h,d,!1)},l.prototype.once=function(f,h,d){return i(this,f,h,d,!0)},l.prototype.removeListener=function(f,h,d,v){var y=n?n+f:f;if(!this._events[y])return this;if(!h)return s(this,y),this;var x=this._events[y];if(x.fn)x.fn===h&&(!v||x.once)&&(!d||x.context===d)&&s(this,y);else{for(var I=0,b=[],S=x.length;I<S;I++)(x[I].fn!==h||v&&!x[I].once||d&&x[I].context!==d)&&b.push(x[I]);b.length?this._events[y]=b.length===1?b[0]:b:s(this,y)}return this},l.prototype.removeAllListeners=function(f){var h;return f?(h=n?n+f:f,this._events[h]&&s(this,h)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=n,l.EventEmitter=l,e.exports=l})(Bv)),Bv.exports}var kQ=CQ();const EQ=Xe(kQ);var xv=new EQ,wv="recharts.syncMouseEvents";function Vs(e){"@babel/helpers - typeof";return Vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vs(e)}function NQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function TQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,YM(r.key),r)}}function RQ(e,t,n){return t&&TQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Pv(e,t,n){return t=YM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YM(e){var t=HQ(e,"string");return Vs(t)=="symbol"?t:t+""}function HQ(e,t){if(Vs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var jQ=(function(){function e(){NQ(this,e),Pv(this,"activeIndex",0),Pv(this,"coordinateList",[]),Pv(this,"layout","horizontal")}return RQ(e,[{key:"setDetails",value:function(n){var r,a=n.coordinateList,i=a===void 0?null:a,s=n.container,l=s===void 0?null:s,c=n.layout,f=c===void 0?null:c,h=n.offset,d=h===void 0?null:h,v=n.mouseHandlerCallback,y=v===void 0?null:v;this.coordinateList=(r=i??this.coordinateList)!==null&&r!==void 0?r:[],this.container=l??this.container,this.layout=f??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=y??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(n){if(this.coordinateList.length!==0)switch(n.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(n){this.activeIndex=n}},{key:"spoofMouse",value:function(){var n,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),i=a.x,s=a.y,l=a.height,c=this.coordinateList[this.activeIndex].coordinate,f=((n=window)===null||n===void 0?void 0:n.scrollX)||0,h=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=i+c+f,v=s+this.offset.top+l/2+h;this.mouseHandlerCallback({pageX:d,pageY:v})}}}])})();function DQ(e,t,n){if(n==="number"&&t===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],a=e==null?void 0:e[1];if(r&&a&&le(r)&&le(a))return!0}return!1}function $Q(e,t,n,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:n.left+.5,y:e==="horizontal"?n.top+.5:t.y-a,width:e==="horizontal"?r:n.width-1,height:e==="horizontal"?n.height-1:r}}function XM(e){var t=e.cx,n=e.cy,r=e.radius,a=e.startAngle,i=e.endAngle,s=ot(t,n,r,a),l=ot(t,n,r,i);return{points:[s,l],cx:t,cy:n,radius:r,startAngle:a,endAngle:i}}function LQ(e,t,n){var r,a,i,s;if(e==="horizontal")r=t.x,i=r,a=n.top,s=n.top+n.height;else if(e==="vertical")a=t.y,s=a,r=n.left,i=n.left+n.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var l=t.cx,c=t.cy,f=t.innerRadius,h=t.outerRadius,d=t.angle,v=ot(l,c,f,d),y=ot(l,c,h,d);r=v.x,a=v.y,i=y.x,s=y.y}else return XM(t);return[{x:r,y:a},{x:i,y:s}]}function Gs(e){"@babel/helpers - typeof";return Gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gs(e)}function w3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Wp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w3(Object(n),!0).forEach(function(r){FQ(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function FQ(e,t,n){return t=qQ(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qQ(e){var t=zQ(e,"string");return Gs(t)=="symbol"?t:t+""}function zQ(e,t){if(Gs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Gs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function UQ(e){var t,n,r=e.element,a=e.tooltipEventType,i=e.isActive,s=e.activeCoordinate,l=e.activePayload,c=e.offset,f=e.activeTooltipIndex,h=e.tooltipAxisBandSize,d=e.layout,v=e.chartName,y=(t=r.props.cursor)!==null&&t!==void 0?t:(n=r.type.defaultProps)===null||n===void 0?void 0:n.cursor;if(!r||!y||!i||!s||v!=="ScatterChart"&&a!=="axis")return null;var x,I=ka;if(v==="ScatterChart")x=s,I=jz;else if(v==="BarChart")x=$Q(d,s,c,h),I=pb;else if(d==="radial"){var b=XM(s),S=b.cx,W=b.cy,A=b.radius,O=b.startAngle,w=b.endAngle;x={cx:S,cy:W,startAngle:O,endAngle:w,innerRadius:A,outerRadius:A},I=U_}else x={points:LQ(d,s,c)},I=ka;var _=Wp(Wp(Wp(Wp({stroke:"#ccc",pointerEvents:"none"},c),x),We(y,!1)),{},{payload:l,payloadIndex:f,className:He("recharts-tooltip-cursor",y.className)});return X.isValidElement(y)?X.cloneElement(y,_):X.createElement(I,_)}var VQ=["item"],GQ=["children","className","width","height","style","compact","title","desc"];function Li(e){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Li(e)}function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},si.apply(this,arguments)}function P3(e,t){return YQ(e)||QQ(e,t)||JM(e,t)||KQ()}function KQ(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QQ(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function YQ(e){if(Array.isArray(e))return e}function S3(e,t){if(e==null)return{};var n=XQ(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function XQ(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ZQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function JQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,eO(r.key),r)}}function eY(e,t,n){return t&&JQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function tY(e,t,n){return t=Hc(t),nY(e,ZM()?Reflect.construct(t,n||[],Hc(e).constructor):t.apply(e,n))}function nY(e,t){if(t&&(Li(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rY(e)}function rY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ZM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ZM=function(){return!!e})()}function Hc(e){return Hc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Hc(e)}function aY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&oy(e,t)}function oy(e,t){return oy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},oy(e,t)}function Fi(e){return uY(e)||iY(e)||JM(e)||oY()}function oY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JM(e,t){if(e){if(typeof e=="string")return iy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return iy(e,t)}}function iY(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uY(e){if(Array.isArray(e))return iy(e)}function iy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W3(Object(n),!0).forEach(function(r){Ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ne(e,t,n){return t=eO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eO(e){var t=sY(e,"string");return Li(t)=="symbol"?t:t+""}function sY(e,t){if(Li(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Li(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var lY={xAxis:["bottom","top"],yAxis:["left","right"]},pY={width:"100%",height:"100%"},tO={x:0,y:0};function Ap(e){return e}var cY=function(t,n){return n==="horizontal"?t.x:n==="vertical"?t.y:n==="centric"?t.angle:t.radius},fY=function(t,n,r,a){var i=n.find(function(h){return h&&h.index===r});if(i){if(t==="horizontal")return{x:i.coordinate,y:a.y};if(t==="vertical")return{x:a.x,y:i.coordinate};if(t==="centric"){var s=i.coordinate,l=a.radius;return ae(ae(ae({},a),ot(a.cx,a.cy,l,s)),{},{angle:s,radius:l})}var c=i.coordinate,f=a.angle;return ae(ae(ae({},a),ot(a.cx,a.cy,c,f)),{},{angle:f,radius:c})}return tO},w0=function(t,n){var r=n.graphicalItems,a=n.dataStartIndex,i=n.dataEndIndex,s=(r??[]).reduce(function(l,c){var f=c.props.data;return f&&f.length?[].concat(Fi(l),Fi(f)):l},[]);return s.length>0?s:t&&t.length&&le(a)&&le(i)?t.slice(a,i+1):[]};function nO(e){return e==="number"?[0,"auto"]:void 0}var uy=function(t,n,r,a){var i=t.graphicalItems,s=t.tooltipAxis,l=w0(n,t);return r<0||!i||!i.length||r>=l.length?null:i.reduce(function(c,f){var h,d=(h=f.props.data)!==null&&h!==void 0?h:n;d&&t.dataStartIndex+t.dataEndIndex!==0&&t.dataEndIndex-t.dataStartIndex>=r&&(d=d.slice(t.dataStartIndex,t.dataEndIndex+1));var v;if(s.dataKey&&!s.allowDuplicatedCategory){var y=d===void 0?l:d;v=Np(y,s.dataKey,a)}else v=d&&d[r]||l[r];return v?[].concat(Fi(c),[D_(f,v)]):c},[])},A3=function(t,n,r,a){var i=a||{x:t.chartX,y:t.chartY},s=cY(i,r),l=t.orderedTooltipTicks,c=t.tooltipAxis,f=t.tooltipTicks,h=o9(s,l,f,c);if(h>=0&&f){var d=f[h]&&f[h].value,v=uy(t,n,h,d),y=fY(r,l,h,i);return{activeTooltipIndex:h,activeLabel:d,activePayload:v,activeCoordinate:y}}return null},dY=function(t,n){var r=n.axes,a=n.graphicalItems,i=n.axisType,s=n.axisIdKey,l=n.stackGroups,c=n.dataStartIndex,f=n.dataEndIndex,h=t.layout,d=t.children,v=t.stackOffset,y=E_(h,i);return r.reduce(function(x,I){var b,S=I.type.defaultProps!==void 0?ae(ae({},I.type.defaultProps),I.props):I.props,W=S.type,A=S.dataKey,O=S.allowDataOverflow,w=S.allowDuplicatedCategory,_=S.scale,E=S.ticks,P=S.includeHidden,C=S[s];if(x[C])return x;var T=w0(t.data,{graphicalItems:a.filter(function(F){var J,ue=s in F.props?F.props[s]:(J=F.type.defaultProps)===null||J===void 0?void 0:J[s];return ue===C}),dataStartIndex:c,dataEndIndex:f}),j=T.length,N,$,V;DQ(S.domain,O,W)&&(N=yg(S.domain,null,O),y&&(W==="number"||_!=="auto")&&(V=os(T,A,"category")));var q=nO(W);if(!N||N.length===0){var G,K=(G=S.domain)!==null&&G!==void 0?G:q;if(A){if(N=os(T,A,W),W==="category"&&y){var L=JR(N);w&&L?($=N,N=Ic(0,j)):w||(N=S4(K,N,I).reduce(function(F,J){return F.indexOf(J)>=0?F:[].concat(Fi(F),[J])},[]))}else if(W==="category")w?N=N.filter(function(F){return F!==""&&!Ee(F)}):N=S4(K,N,I).reduce(function(F,J){return F.indexOf(J)>=0||J===""||Ee(J)?F:[].concat(Fi(F),[J])},[]);else if(W==="number"){var Y=p9(T,a.filter(function(F){var J,ue,he=s in F.props?F.props[s]:(J=F.type.defaultProps)===null||J===void 0?void 0:J[s],ge="hide"in F.props?F.props.hide:(ue=F.type.defaultProps)===null||ue===void 0?void 0:ue.hide;return he===C&&(P||!ge)}),A,i,h);Y&&(N=Y)}y&&(W==="number"||_!=="auto")&&(V=os(T,A,"category"))}else y?N=Ic(0,j):l&&l[C]&&l[C].hasStack&&W==="number"?N=v==="expand"?[0,1]:j_(l[C].stackGroups,c,f):N=k_(T,a.filter(function(F){var J=s in F.props?F.props[s]:F.type.defaultProps[s],ue="hide"in F.props?F.props.hide:F.type.defaultProps.hide;return J===C&&(P||!ue)}),W,h,!0);if(W==="number")N=ay(d,N,C,i,E),K&&(N=yg(K,N,O));else if(W==="category"&&K){var Q=K,H=N.every(function(F){return Q.indexOf(F)>=0});H&&(N=Q)}}return ae(ae({},x),{},Ne({},C,ae(ae({},S),{},{axisType:i,domain:N,categoricalDomain:V,duplicateDomain:$,originalDomain:(b=S.domain)!==null&&b!==void 0?b:q,isCategorical:y,layout:h})))},{})},hY=function(t,n){var r=n.graphicalItems,a=n.Axis,i=n.axisType,s=n.axisIdKey,l=n.stackGroups,c=n.dataStartIndex,f=n.dataEndIndex,h=t.layout,d=t.children,v=w0(t.data,{graphicalItems:r,dataStartIndex:c,dataEndIndex:f}),y=v.length,x=E_(h,i),I=-1;return r.reduce(function(b,S){var W=S.type.defaultProps!==void 0?ae(ae({},S.type.defaultProps),S.props):S.props,A=W[s],O=nO("number");if(!b[A]){I++;var w;return x?w=Ic(0,y):l&&l[A]&&l[A].hasStack?(w=j_(l[A].stackGroups,c,f),w=ay(d,w,A,i)):(w=yg(O,k_(v,r.filter(function(_){var E,P,C=s in _.props?_.props[s]:(E=_.type.defaultProps)===null||E===void 0?void 0:E[s],T="hide"in _.props?_.props.hide:(P=_.type.defaultProps)===null||P===void 0?void 0:P.hide;return C===A&&!T}),"number",h),a.defaultProps.allowDataOverflow),w=ay(d,w,A,i)),ae(ae({},b),{},Ne({},A,ae(ae({axisType:i},a.defaultProps),{},{hide:!0,orientation:Mn(lY,"".concat(i,".").concat(I%2),null),domain:w,originalDomain:O,isCategorical:x,layout:h})))}return b},{})},mY=function(t,n){var r=n.axisType,a=r===void 0?"xAxis":r,i=n.AxisComp,s=n.graphicalItems,l=n.stackGroups,c=n.dataStartIndex,f=n.dataEndIndex,h=t.children,d="".concat(a,"Id"),v=sn(h,i),y={};return v&&v.length?y=dY(t,{axes:v,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:l,dataStartIndex:c,dataEndIndex:f}):s&&s.length&&(y=hY(t,{Axis:i,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:l,dataStartIndex:c,dataEndIndex:f})),y},vY=function(t){var n=Wa(t),r=Fr(n,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:Ry(r,function(a){return a.coordinate}),tooltipAxis:n,tooltipAxisBandSize:ic(n,r)}},_3=function(t){var n=t.children,r=t.defaultShowTooltip,a=Sn(n,Mi),i=0,s=0;return t.data&&t.data.length!==0&&(s=t.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(i=a.props.startIndex),a.props.endIndex>=0&&(s=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:i,dataEndIndex:s,activeTooltipIndex:-1,isTooltipActive:!!r}},gY=function(t){return!t||!t.length?!1:t.some(function(n){var r=Ur(n&&n.type);return r&&r.indexOf("Bar")>=0})},M3=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},yY=function(t,n){var r=t.props,a=t.graphicalItems,i=t.xAxisMap,s=i===void 0?{}:i,l=t.yAxisMap,c=l===void 0?{}:l,f=r.width,h=r.height,d=r.children,v=r.margin||{},y=Sn(d,Mi),x=Sn(d,Oa),I=Object.keys(c).reduce(function(w,_){var E=c[_],P=E.orientation;return!E.mirror&&!E.hide?ae(ae({},w),{},Ne({},P,w[P]+E.width)):w},{left:v.left||0,right:v.right||0}),b=Object.keys(s).reduce(function(w,_){var E=s[_],P=E.orientation;return!E.mirror&&!E.hide?ae(ae({},w),{},Ne({},P,Mn(w,"".concat(P))+E.height)):w},{top:v.top||0,bottom:v.bottom||0}),S=ae(ae({},b),I),W=S.bottom;y&&(S.bottom+=y.props.height||Mi.defaultProps.height),x&&n&&(S=s9(S,a,r,n));var A=f-S.left-S.right,O=h-S.top-S.bottom;return ae(ae({brushBottom:W},S),{},{width:Math.max(A,0),height:Math.max(O,0)})},bY=function(t,n){if(n==="xAxis")return t[n].width;if(n==="yAxis")return t[n].height},P0=function(t){var n=t.chartName,r=t.GraphicalChild,a=t.defaultTooltipEventType,i=a===void 0?"axis":a,s=t.validateTooltipEventTypes,l=s===void 0?["axis"]:s,c=t.axisComponents,f=t.legendContent,h=t.formatAxisMap,d=t.defaultProps,v=function(S,W){var A=W.graphicalItems,O=W.stackGroups,w=W.offset,_=W.updateId,E=W.dataStartIndex,P=W.dataEndIndex,C=S.barSize,T=S.layout,j=S.barGap,N=S.barCategoryGap,$=S.maxBarSize,V=M3(T),q=V.numericAxisName,G=V.cateAxisName,K=gY(A),L=[];return A.forEach(function(Y,Q){var H=w0(S.data,{graphicalItems:[Y],dataStartIndex:E,dataEndIndex:P}),F=Y.type.defaultProps!==void 0?ae(ae({},Y.type.defaultProps),Y.props):Y.props,J=F.dataKey,ue=F.maxBarSize,he=F["".concat(q,"Id")],ge=F["".concat(G,"Id")],ye={},fe=c.reduce(function(Bt,vt){var On=W["".concat(vt.axisType,"Map")],gt=F["".concat(vt.axisType,"Id")];On&&On[gt]||vt.axisType==="zAxis"||bo();var Kt=On[gt];return ae(ae({},Bt),{},Ne(Ne({},vt.axisType,Kt),"".concat(vt.axisType,"Ticks"),Fr(Kt)))},ye),ne=fe[G],de=fe["".concat(G,"Ticks")],ce=O&&O[he]&&O[he].hasStack&&b9(Y,O[he].stackGroups),re=Ur(Y.type).indexOf("Bar")>=0,Re=ic(ne,de),Pe=[],Ce=K&&i9({barSize:C,stackGroups:O,totalSize:bY(fe,G)});if(re){var Ae,Fe,je=Ee(ue)?$:ue,qe=(Ae=(Fe=ic(ne,de,!0))!==null&&Fe!==void 0?Fe:je)!==null&&Ae!==void 0?Ae:0;Pe=u9({barGap:j,barCategoryGap:N,bandSize:qe!==Re?qe:Re,sizeList:Ce[ge],maxBarSize:je}),qe!==Re&&(Pe=Pe.map(function(Bt){return ae(ae({},Bt),{},{position:ae(ae({},Bt.position),{},{offset:Bt.position.offset-qe/2})})}))}var Ke=Y&&Y.type&&Y.type.getComposedData;Ke&&L.push({props:ae(ae({},Ke(ae(ae({},fe),{},{displayedData:H,props:S,dataKey:J,item:Y,bandSize:Re,barPosition:Pe,offset:w,stackedData:ce,layout:T,dataStartIndex:E,dataEndIndex:P}))),{},Ne(Ne(Ne({key:Y.key||"item-".concat(Q)},q,fe[q]),G,fe[G]),"animationId",_)),childIndex:cH(Y,S.children),item:Y})}),L},y=function(S,W){var A=S.props,O=S.dataStartIndex,w=S.dataEndIndex,_=S.updateId;if(!$B({props:A}))return null;var E=A.children,P=A.layout,C=A.stackOffset,T=A.data,j=A.reverseStackOrder,N=M3(P),$=N.numericAxisName,V=N.cateAxisName,q=sn(E,r),G=g9(T,q,"".concat($,"Id"),"".concat(V,"Id"),C,j),K=c.reduce(function(F,J){var ue="".concat(J.axisType,"Map");return ae(ae({},F),{},Ne({},ue,mY(A,ae(ae({},J),{},{graphicalItems:q,stackGroups:J.axisType===$&&G,dataStartIndex:O,dataEndIndex:w}))))},{}),L=yY(ae(ae({},K),{},{props:A,graphicalItems:q}),W==null?void 0:W.legendBBox);Object.keys(K).forEach(function(F){K[F]=h(A,K[F],L,F.replace("Map",""),n)});var Y=K["".concat(V,"Map")],Q=vY(Y),H=v(A,ae(ae({},K),{},{dataStartIndex:O,dataEndIndex:w,updateId:_,graphicalItems:q,stackGroups:G,offset:L}));return ae(ae({formattedGraphicalItems:H,graphicalItems:q,offset:L,stackGroups:G},Q),K)},x=(function(b){function S(W){var A,O,w;return ZQ(this,S),w=tY(this,S,[W]),Ne(w,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Ne(w,"accessibilityManager",new jQ),Ne(w,"handleLegendBBoxUpdate",function(_){if(_){var E=w.state,P=E.dataStartIndex,C=E.dataEndIndex,T=E.updateId;w.setState(ae({legendBBox:_},y({props:w.props,dataStartIndex:P,dataEndIndex:C,updateId:T},ae(ae({},w.state),{},{legendBBox:_}))))}}),Ne(w,"handleReceiveSyncEvent",function(_,E,P){if(w.props.syncId===_){if(P===w.eventEmitterSymbol&&typeof w.props.syncMethod!="function")return;w.applySyncEvent(E)}}),Ne(w,"handleBrushChange",function(_){var E=_.startIndex,P=_.endIndex;if(E!==w.state.dataStartIndex||P!==w.state.dataEndIndex){var C=w.state.updateId;w.setState(function(){return ae({dataStartIndex:E,dataEndIndex:P},y({props:w.props,dataStartIndex:E,dataEndIndex:P,updateId:C},w.state))}),w.triggerSyncEvent({dataStartIndex:E,dataEndIndex:P})}}),Ne(w,"handleMouseEnter",function(_){var E=w.getMouseInfo(_);if(E){var P=ae(ae({},E),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var C=w.props.onMouseEnter;ke(C)&&C(P,_)}}),Ne(w,"triggeredAfterMouseMove",function(_){var E=w.getMouseInfo(_),P=E?ae(ae({},E),{},{isTooltipActive:!0}):{isTooltipActive:!1};w.setState(P),w.triggerSyncEvent(P);var C=w.props.onMouseMove;ke(C)&&C(P,_)}),Ne(w,"handleItemMouseEnter",function(_){w.setState(function(){return{isTooltipActive:!0,activeItem:_,activePayload:_.tooltipPayload,activeCoordinate:_.tooltipPosition||{x:_.cx,y:_.cy}}})}),Ne(w,"handleItemMouseLeave",function(){w.setState(function(){return{isTooltipActive:!1}})}),Ne(w,"handleMouseMove",function(_){_.persist(),w.throttleTriggeredAfterMouseMove(_)}),Ne(w,"handleMouseLeave",function(_){w.throttleTriggeredAfterMouseMove.cancel();var E={isTooltipActive:!1};w.setState(E),w.triggerSyncEvent(E);var P=w.props.onMouseLeave;ke(P)&&P(E,_)}),Ne(w,"handleOuterEvent",function(_){var E=pH(_),P=Mn(w.props,"".concat(E));if(E&&ke(P)){var C,T;/.*touch.*/i.test(E)?T=w.getMouseInfo(_.changedTouches[0]):T=w.getMouseInfo(_),P((C=T)!==null&&C!==void 0?C:{},_)}}),Ne(w,"handleClick",function(_){var E=w.getMouseInfo(_);if(E){var P=ae(ae({},E),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var C=w.props.onClick;ke(C)&&C(P,_)}}),Ne(w,"handleMouseDown",function(_){var E=w.props.onMouseDown;if(ke(E)){var P=w.getMouseInfo(_);E(P,_)}}),Ne(w,"handleMouseUp",function(_){var E=w.props.onMouseUp;if(ke(E)){var P=w.getMouseInfo(_);E(P,_)}}),Ne(w,"handleTouchMove",function(_){_.changedTouches!=null&&_.changedTouches.length>0&&w.throttleTriggeredAfterMouseMove(_.changedTouches[0])}),Ne(w,"handleTouchStart",function(_){_.changedTouches!=null&&_.changedTouches.length>0&&w.handleMouseDown(_.changedTouches[0])}),Ne(w,"handleTouchEnd",function(_){_.changedTouches!=null&&_.changedTouches.length>0&&w.handleMouseUp(_.changedTouches[0])}),Ne(w,"handleDoubleClick",function(_){var E=w.props.onDoubleClick;if(ke(E)){var P=w.getMouseInfo(_);E(P,_)}}),Ne(w,"handleContextMenu",function(_){var E=w.props.onContextMenu;if(ke(E)){var P=w.getMouseInfo(_);E(P,_)}}),Ne(w,"triggerSyncEvent",function(_){w.props.syncId!==void 0&&xv.emit(wv,w.props.syncId,_,w.eventEmitterSymbol)}),Ne(w,"applySyncEvent",function(_){var E=w.props,P=E.layout,C=E.syncMethod,T=w.state.updateId,j=_.dataStartIndex,N=_.dataEndIndex;if(_.dataStartIndex!==void 0||_.dataEndIndex!==void 0)w.setState(ae({dataStartIndex:j,dataEndIndex:N},y({props:w.props,dataStartIndex:j,dataEndIndex:N,updateId:T},w.state)));else if(_.activeTooltipIndex!==void 0){var $=_.chartX,V=_.chartY,q=_.activeTooltipIndex,G=w.state,K=G.offset,L=G.tooltipTicks;if(!K)return;if(typeof C=="function")q=C(L,_);else if(C==="value"){q=-1;for(var Y=0;Y<L.length;Y++)if(L[Y].value===_.activeLabel){q=Y;break}}var Q=ae(ae({},K),{},{x:K.left,y:K.top}),H=Math.min($,Q.x+Q.width),F=Math.min(V,Q.y+Q.height),J=L[q]&&L[q].value,ue=uy(w.state,w.props.data,q),he=L[q]?{x:P==="horizontal"?L[q].coordinate:H,y:P==="horizontal"?F:L[q].coordinate}:tO;w.setState(ae(ae({},_),{},{activeLabel:J,activeCoordinate:he,activePayload:ue,activeTooltipIndex:q}))}else w.setState(_)}),Ne(w,"renderCursor",function(_){var E,P=w.state,C=P.isTooltipActive,T=P.activeCoordinate,j=P.activePayload,N=P.offset,$=P.activeTooltipIndex,V=P.tooltipAxisBandSize,q=w.getTooltipEventType(),G=(E=_.props.active)!==null&&E!==void 0?E:C,K=w.props.layout,L=_.key||"_recharts-cursor";return R.createElement(UQ,{key:L,activeCoordinate:T,activePayload:j,activeTooltipIndex:$,chartName:n,element:_,isActive:G,layout:K,offset:N,tooltipAxisBandSize:V,tooltipEventType:q})}),Ne(w,"renderPolarAxis",function(_,E,P){var C=Mn(_,"type.axisType"),T=Mn(w.state,"".concat(C,"Map")),j=_.type.defaultProps,N=j!==void 0?ae(ae({},j),_.props):_.props,$=T&&T[N["".concat(C,"Id")]];return X.cloneElement(_,ae(ae({},$),{},{className:He(C,$.className),key:_.key||"".concat(E,"-").concat(P),ticks:Fr($,!0)}))}),Ne(w,"renderPolarGrid",function(_){var E=_.props,P=E.radialLines,C=E.polarAngles,T=E.polarRadius,j=w.state,N=j.radiusAxisMap,$=j.angleAxisMap,V=Wa(N),q=Wa($),G=q.cx,K=q.cy,L=q.innerRadius,Y=q.outerRadius;return X.cloneElement(_,{polarAngles:Array.isArray(C)?C:Fr(q,!0).map(function(Q){return Q.coordinate}),polarRadius:Array.isArray(T)?T:Fr(V,!0).map(function(Q){return Q.coordinate}),cx:G,cy:K,innerRadius:L,outerRadius:Y,key:_.key||"polar-grid",radialLines:P})}),Ne(w,"renderLegend",function(){var _=w.state.formattedGraphicalItems,E=w.props,P=E.children,C=E.width,T=E.height,j=w.props.margin||{},N=C-(j.left||0)-(j.right||0),$=O_({children:P,formattedGraphicalItems:_,legendWidth:N,legendContent:f});if(!$)return null;var V=$.item,q=S3($,VQ);return X.cloneElement(V,ae(ae({},q),{},{chartWidth:C,chartHeight:T,margin:j,onBBoxUpdate:w.handleLegendBBoxUpdate}))}),Ne(w,"renderTooltip",function(){var _,E=w.props,P=E.children,C=E.accessibilityLayer,T=Sn(P,Wn);if(!T)return null;var j=w.state,N=j.isTooltipActive,$=j.activeCoordinate,V=j.activePayload,q=j.activeLabel,G=j.offset,K=(_=T.props.active)!==null&&_!==void 0?_:N;return X.cloneElement(T,{viewBox:ae(ae({},G),{},{x:G.left,y:G.top}),active:K,label:q,payload:K?V:[],coordinate:$,accessibilityLayer:C})}),Ne(w,"renderBrush",function(_){var E=w.props,P=E.margin,C=E.data,T=w.state,j=T.offset,N=T.dataStartIndex,$=T.dataEndIndex,V=T.updateId;return X.cloneElement(_,{key:_.key||"_recharts-brush",onChange:xp(w.handleBrushChange,_.props.onChange),data:C,x:le(_.props.x)?_.props.x:j.left,y:le(_.props.y)?_.props.y:j.top+j.height+j.brushBottom-(P.bottom||0),width:le(_.props.width)?_.props.width:j.width,startIndex:N,endIndex:$,updateId:"brush-".concat(V)})}),Ne(w,"renderReferenceElement",function(_,E,P){if(!_)return null;var C=w,T=C.clipPathId,j=w.state,N=j.xAxisMap,$=j.yAxisMap,V=j.offset,q=_.type.defaultProps||{},G=_.props,K=G.xAxisId,L=K===void 0?q.xAxisId:K,Y=G.yAxisId,Q=Y===void 0?q.yAxisId:Y;return X.cloneElement(_,{key:_.key||"".concat(E,"-").concat(P),xAxis:N[L],yAxis:$[Q],viewBox:{x:V.left,y:V.top,width:V.width,height:V.height},clipPathId:T})}),Ne(w,"renderActivePoints",function(_){var E=_.item,P=_.activePoint,C=_.basePoint,T=_.childIndex,j=_.isRange,N=[],$=E.props.key,V=E.item.type.defaultProps!==void 0?ae(ae({},E.item.type.defaultProps),E.item.props):E.item.props,q=V.activeDot,G=V.dataKey,K=ae(ae({index:T,dataKey:G,cx:P.x,cy:P.y,r:4,fill:lb(E.item),strokeWidth:2,stroke:"#fff",payload:P.payload,value:P.value},We(q,!1)),Tp(q));return N.push(S.renderActiveDot(q,K,"".concat($,"-activePoint-").concat(T))),C?N.push(S.renderActiveDot(q,ae(ae({},K),{},{cx:C.x,cy:C.y}),"".concat($,"-basePoint-").concat(T))):j&&N.push(null),N}),Ne(w,"renderGraphicChild",function(_,E,P){var C=w.filterFormatItem(_,E,P);if(!C)return null;var T=w.getTooltipEventType(),j=w.state,N=j.isTooltipActive,$=j.tooltipAxis,V=j.activeTooltipIndex,q=j.activeLabel,G=w.props.children,K=Sn(G,Wn),L=C.props,Y=L.points,Q=L.isRange,H=L.baseLine,F=C.item.type.defaultProps!==void 0?ae(ae({},C.item.type.defaultProps),C.item.props):C.item.props,J=F.activeDot,ue=F.hide,he=F.activeBar,ge=F.activeShape,ye=!!(!ue&&N&&K&&(J||he||ge)),fe={};T!=="axis"&&K&&K.props.trigger==="click"?fe={onClick:xp(w.handleItemMouseEnter,_.props.onClick)}:T!=="axis"&&(fe={onMouseLeave:xp(w.handleItemMouseLeave,_.props.onMouseLeave),onMouseEnter:xp(w.handleItemMouseEnter,_.props.onMouseEnter)});var ne=X.cloneElement(_,ae(ae({},C.props),fe));function de(vt){return typeof $.dataKey=="function"?$.dataKey(vt.payload):null}if(ye)if(V>=0){var ce,re;if($.dataKey&&!$.allowDuplicatedCategory){var Re=typeof $.dataKey=="function"?de:"payload.".concat($.dataKey.toString());ce=Np(Y,Re,q),re=Q&&H&&Np(H,Re,q)}else ce=Y==null?void 0:Y[V],re=Q&&H&&H[V];if(ge||he){var Pe=_.props.activeIndex!==void 0?_.props.activeIndex:V;return[X.cloneElement(_,ae(ae(ae({},C.props),fe),{},{activeIndex:Pe})),null,null]}if(!Ee(ce))return[ne].concat(Fi(w.renderActivePoints({item:C,activePoint:ce,basePoint:re,childIndex:V,isRange:Q})))}else{var Ce,Ae=(Ce=w.getItemByXY(w.state.activeCoordinate))!==null&&Ce!==void 0?Ce:{graphicalItem:ne},Fe=Ae.graphicalItem,je=Fe.item,qe=je===void 0?_:je,Ke=Fe.childIndex,Bt=ae(ae(ae({},C.props),fe),{},{activeIndex:Ke});return[X.cloneElement(qe,Bt),null,null]}return Q?[ne,null,null]:[ne,null]}),Ne(w,"renderCustomized",function(_,E,P){return X.cloneElement(_,ae(ae({key:"recharts-customized-".concat(P)},w.props),w.state))}),Ne(w,"renderMap",{CartesianGrid:{handler:Ap,once:!0},ReferenceArea:{handler:w.renderReferenceElement},ReferenceLine:{handler:Ap},ReferenceDot:{handler:w.renderReferenceElement},XAxis:{handler:Ap},YAxis:{handler:Ap},Brush:{handler:w.renderBrush,once:!0},Bar:{handler:w.renderGraphicChild},Line:{handler:w.renderGraphicChild},Area:{handler:w.renderGraphicChild},Radar:{handler:w.renderGraphicChild},RadialBar:{handler:w.renderGraphicChild},Scatter:{handler:w.renderGraphicChild},Pie:{handler:w.renderGraphicChild},Funnel:{handler:w.renderGraphicChild},Tooltip:{handler:w.renderCursor,once:!0},PolarGrid:{handler:w.renderPolarGrid,once:!0},PolarAngleAxis:{handler:w.renderPolarAxis},PolarRadiusAxis:{handler:w.renderPolarAxis},Customized:{handler:w.renderCustomized}}),w.clipPathId="".concat((A=W.id)!==null&&A!==void 0?A:ja("recharts"),"-clip"),w.throttleTriggeredAfterMouseMove=OA(w.triggeredAfterMouseMove,(O=W.throttleDelay)!==null&&O!==void 0?O:1e3/60),w.state={},w}return aY(S,b),eY(S,[{key:"componentDidMount",value:function(){var A,O;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(A=this.props.margin.left)!==null&&A!==void 0?A:0,top:(O=this.props.margin.top)!==null&&O!==void 0?O:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var A=this.props,O=A.children,w=A.data,_=A.height,E=A.layout,P=Sn(O,Wn);if(P){var C=P.props.defaultIndex;if(!(typeof C!="number"||C<0||C>this.state.tooltipTicks.length-1)){var T=this.state.tooltipTicks[C]&&this.state.tooltipTicks[C].value,j=uy(this.state,w,C,T),N=this.state.tooltipTicks[C].coordinate,$=(this.state.offset.top+_)/2,V=E==="horizontal",q=V?{x:N,y:$}:{y:N,x:$},G=this.state.formattedGraphicalItems.find(function(L){var Y=L.item;return Y.type.name==="Scatter"});G&&(q=ae(ae({},q),G.props.points[C].tooltipPosition),j=G.props.points[C].tooltipPayload);var K={activeTooltipIndex:C,isTooltipActive:!0,activeLabel:T,activePayload:j,activeCoordinate:q};this.setState(K),this.renderCursor(P),this.accessibilityManager.setIndex(C)}}}},{key:"getSnapshotBeforeUpdate",value:function(A,O){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==O.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==A.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==A.margin){var w,_;this.accessibilityManager.setDetails({offset:{left:(w=this.props.margin.left)!==null&&w!==void 0?w:0,top:(_=this.props.margin.top)!==null&&_!==void 0?_:0}})}return null}},{key:"componentDidUpdate",value:function(A){$v([Sn(A.children,Wn)],[Sn(this.props.children,Wn)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var A=Sn(this.props.children,Wn);if(A&&typeof A.props.shared=="boolean"){var O=A.props.shared?"axis":"item";return l.indexOf(O)>=0?O:i}return i}},{key:"getMouseInfo",value:function(A){if(!this.container)return null;var O=this.container,w=O.getBoundingClientRect(),_=X5(w),E={chartX:Math.round(A.pageX-_.left),chartY:Math.round(A.pageY-_.top)},P=w.width/O.offsetWidth||1,C=this.inRange(E.chartX,E.chartY,P);if(!C)return null;var T=this.state,j=T.xAxisMap,N=T.yAxisMap,$=this.getTooltipEventType(),V=A3(this.state,this.props.data,this.props.layout,C);if($!=="axis"&&j&&N){var q=Wa(j).scale,G=Wa(N).scale,K=q&&q.invert?q.invert(E.chartX):null,L=G&&G.invert?G.invert(E.chartY):null;return ae(ae({},E),{},{xValue:K,yValue:L},V)}return V?ae(ae({},E),V):null}},{key:"inRange",value:function(A,O){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,_=this.props.layout,E=A/w,P=O/w;if(_==="horizontal"||_==="vertical"){var C=this.state.offset,T=E>=C.left&&E<=C.left+C.width&&P>=C.top&&P<=C.top+C.height;return T?{x:E,y:P}:null}var j=this.state,N=j.angleAxisMap,$=j.radiusAxisMap;if(N&&$){var V=Wa(N);return _4({x:E,y:P},V)}return null}},{key:"parseEventsOfWrapper",value:function(){var A=this.props.children,O=this.getTooltipEventType(),w=Sn(A,Wn),_={};w&&O==="axis"&&(w.props.trigger==="click"?_={onClick:this.handleClick}:_={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var E=Tp(this.props,this.handleOuterEvent);return ae(ae({},E),_)}},{key:"addListener",value:function(){xv.on(wv,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){xv.removeListener(wv,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(A,O,w){for(var _=this.state.formattedGraphicalItems,E=0,P=_.length;E<P;E++){var C=_[E];if(C.item===A||C.props.key===A.key||O===Ur(C.item.type)&&w===C.childIndex)return C}return null}},{key:"renderClipPath",value:function(){var A=this.clipPathId,O=this.state.offset,w=O.left,_=O.top,E=O.height,P=O.width;return R.createElement("defs",null,R.createElement("clipPath",{id:A},R.createElement("rect",{x:w,y:_,height:E,width:P})))}},{key:"getXScales",value:function(){var A=this.state.xAxisMap;return A?Object.entries(A).reduce(function(O,w){var _=P3(w,2),E=_[0],P=_[1];return ae(ae({},O),{},Ne({},E,P.scale))},{}):null}},{key:"getYScales",value:function(){var A=this.state.yAxisMap;return A?Object.entries(A).reduce(function(O,w){var _=P3(w,2),E=_[0],P=_[1];return ae(ae({},O),{},Ne({},E,P.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(A){var O;return(O=this.state.xAxisMap)===null||O===void 0||(O=O[A])===null||O===void 0?void 0:O.scale}},{key:"getYScaleByAxisId",value:function(A){var O;return(O=this.state.yAxisMap)===null||O===void 0||(O=O[A])===null||O===void 0?void 0:O.scale}},{key:"getItemByXY",value:function(A){var O=this.state,w=O.formattedGraphicalItems,_=O.activeItem;if(w&&w.length)for(var E=0,P=w.length;E<P;E++){var C=w[E],T=C.props,j=C.item,N=j.type.defaultProps!==void 0?ae(ae({},j.type.defaultProps),j.props):j.props,$=Ur(j.type);if($==="Bar"){var V=(T.data||[]).find(function(L){return yz(A,L)});if(V)return{graphicalItem:C,payload:V}}else if($==="RadialBar"){var q=(T.data||[]).find(function(L){return _4(A,L)});if(q)return{graphicalItem:C,payload:q}}else if(h0(C,_)||m0(C,_)||Ls(C,_)){var G=LU({graphicalItem:C,activeTooltipItem:_,itemData:N.data}),K=N.activeIndex===void 0?G:N.activeIndex;return{graphicalItem:ae(ae({},C),{},{childIndex:K}),payload:Ls(C,_)?N.data[G]:C.props.data[G]}}}return null}},{key:"render",value:function(){var A=this;if(!$B(this))return null;var O=this.props,w=O.children,_=O.className,E=O.width,P=O.height,C=O.style,T=O.compact,j=O.title,N=O.desc,$=S3(O,GQ),V=We($,!1);if(T)return R.createElement(t3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},R.createElement(Fv,si({},V,{width:E,height:P,title:j,desc:N}),this.renderClipPath(),FB(w,this.renderMap)));if(this.props.accessibilityLayer){var q,G;V.tabIndex=(q=this.props.tabIndex)!==null&&q!==void 0?q:0,V.role=(G=this.props.role)!==null&&G!==void 0?G:"application",V.onKeyDown=function(L){A.accessibilityManager.keyboardEvent(L)},V.onFocus=function(){A.accessibilityManager.focus()}}var K=this.parseEventsOfWrapper();return R.createElement(t3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},R.createElement("div",si({className:He("recharts-wrapper",_),style:ae({position:"relative",cursor:"default",width:E,height:P},C)},K,{ref:function(Y){A.container=Y}}),R.createElement(Fv,si({},V,{width:E,height:P,title:j,desc:N,style:pY}),this.renderClipPath(),FB(w,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(X.Component);Ne(x,"displayName",n),Ne(x,"defaultProps",ae({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Ne(x,"getDerivedStateFromProps",function(b,S){var W=b.dataKey,A=b.data,O=b.children,w=b.width,_=b.height,E=b.layout,P=b.stackOffset,C=b.margin,T=S.dataStartIndex,j=S.dataEndIndex;if(S.updateId===void 0){var N=_3(b);return ae(ae(ae({},N),{},{updateId:0},y(ae(ae({props:b},N),{},{updateId:0}),S)),{},{prevDataKey:W,prevData:A,prevWidth:w,prevHeight:_,prevLayout:E,prevStackOffset:P,prevMargin:C,prevChildren:O})}if(W!==S.prevDataKey||A!==S.prevData||w!==S.prevWidth||_!==S.prevHeight||E!==S.prevLayout||P!==S.prevStackOffset||!li(C,S.prevMargin)){var $=_3(b),V={chartX:S.chartX,chartY:S.chartY,isTooltipActive:S.isTooltipActive},q=ae(ae({},A3(S,A,E)),{},{updateId:S.updateId+1}),G=ae(ae(ae({},$),V),q);return ae(ae(ae({},G),y(ae({props:b},G),S)),{},{prevDataKey:W,prevData:A,prevWidth:w,prevHeight:_,prevLayout:E,prevStackOffset:P,prevMargin:C,prevChildren:O})}if(!$v(O,S.prevChildren)){var K,L,Y,Q,H=Sn(O,Mi),F=H&&(K=(L=H.props)===null||L===void 0?void 0:L.startIndex)!==null&&K!==void 0?K:T,J=H&&(Y=(Q=H.props)===null||Q===void 0?void 0:Q.endIndex)!==null&&Y!==void 0?Y:j,ue=F!==T||J!==j,he=!Ee(A),ge=he&&!ue?S.updateId:S.updateId+1;return ae(ae({updateId:ge},y(ae(ae({props:b},S),{},{updateId:ge,dataStartIndex:F,dataEndIndex:J}),S)),{},{prevChildren:O,dataStartIndex:F,dataEndIndex:J})}return null}),Ne(x,"renderActiveDot",function(b,S,W){var A;return X.isValidElement(b)?A=X.cloneElement(b,S):ke(b)?A=b(S):A=R.createElement(nl,S),R.createElement(De,{className:"recharts-active-dot",key:W},A)});var I=X.forwardRef(function(S,W){return R.createElement(x,si({},S,{ref:W}))});return I.displayName=x.displayName,I},IY=P0({chartName:"LineChart",GraphicalChild:qr,axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:cb}),BY=P0({chartName:"BarChart",GraphicalChild:Sr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:cb}),xY=P0({chartName:"PieChart",GraphicalChild:ea,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:d0},{axisType:"radiusAxis",AxisComp:c0}],formatAxisMap:M9,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),wY=P0({chartName:"ComposedChart",GraphicalChild:[qr,So,Sr,x0],axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br},{axisType:"zAxis",AxisComp:B0}],formatAxisMap:cb});const O3=({active:e,payload:t,label:n})=>e&&t&&t.length?M.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-3 shadow-lg",children:[M.jsx("p",{className:"font-semibold text-gray-900 mb-2",children:n}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("p",{className:"text-sm",children:[M.jsx("span",{className:"text-blue-600 font-medium",children:"Total Sessions: "}),M.jsx("span",{className:"text-gray-900",children:t[0].payload.totalSessions.toLocaleString()})]}),M.jsxs("p",{className:"text-sm",children:[M.jsx("span",{className:"text-orange-600 font-medium",children:"Human Escalations: "}),M.jsx("span",{className:"text-gray-900",children:t[0].payload.humanEscalations.toLocaleString()})]}),M.jsxs("p",{className:"text-sm",children:[M.jsx("span",{className:"text-red-600 font-medium",children:"Escalation Rate: "}),M.jsxs("span",{className:"text-gray-900",children:[t[0].payload.escalationRate.toFixed(1),"%"]})]})]})]}):null;function rO({data:e,title:t,instanceId:n}){var y,x;const r=X.useId(),a=t||"Sessions & Escalation Trends",i=e.length<=3&&((x=(y=e[0])==null?void 0:y.week)==null?void 0:x.includes("2026")),s=n||r.replace(/:/g,"-"),l=`${t?t.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase():"escalation-chart"}-${s}`,c=`chart-${l}-${e.length}`,f=e.map((I,b)=>({...I,id:`${l}-${I.week.replace(/\s/g,"-")}-${b}`})),h=`colorSessions-${l}`,d=`colorEscalations-${l}`,v=`colorSessionsLine-${l}`;return M.jsxs(zn,{className:"shadow-xl border-0",children:[M.jsx(jc,{className:"bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5",children:M.jsxs("div",{className:"flex items-start justify-between",children:[M.jsxs("div",{children:[M.jsx(Dc,{className:"text-2xl font-black text-gray-900",children:a}),M.jsx("p",{className:"text-sm text-gray-600 mt-2 font-medium",children:"Comparing Total Sessions, Human Escalations, and Escalation Rate %"})]}),M.jsxs("div",{className:"flex gap-2",children:[M.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200",children:[M.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600"}),M.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Total Sessions"})]}),M.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200",children:[M.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-600"}),M.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Human Escalations"})]}),M.jsxs("div",{className:"flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200",children:[M.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600"}),M.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Escalation Rate %"})]})]})]})}),M.jsx(Un,{className:"p-6 bg-white",children:M.jsx(jy,{width:"100%",height:400,children:i?M.jsxs(wY,{data:f,barGap:8,barCategoryGap:"20%",children:[M.jsxs("defs",{children:[M.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[M.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.9},`${h}-stop-1`),M.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.7},`${h}-stop-2`)]}),M.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"0",y2:"1",children:[M.jsx("stop",{offset:"5%",stopColor:"#f97316",stopOpacity:.9},`${d}-stop-1`),M.jsx("stop",{offset:"95%",stopColor:"#f97316",stopOpacity:.7},`${d}-stop-2`)]})]}),M.jsx(Oc,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),M.jsx(Ra,{dataKey:"week",tick:{fontSize:13,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),M.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),M.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),M.jsx(Wn,{content:M.jsx(O3,{})},`tooltip-${l}`),M.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"square",iconSize:14},`legend-${l}`),M.jsx(Sr,{yAxisId:"left",dataKey:"totalSessions",fill:`url(#${h})`,name:"Total Sessions",radius:[10,10,0,0],maxBarSize:80},`bar-total-${l}`),M.jsx(Sr,{yAxisId:"left",dataKey:"humanEscalations",fill:`url(#${d})`,name:"Human Escalations",radius:[10,10,0,0],maxBarSize:80},`bar-human-${l}`),M.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:4,dot:{fill:"#ef4444",r:6,strokeWidth:2,stroke:"#fff"},activeDot:{r:8,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},c):M.jsxs(IY,{data:f,children:[M.jsx("defs",{children:M.jsxs("linearGradient",{id:v,x1:"0",y1:"0",x2:"0",y2:"1",children:[M.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8},`${v}-stop-1`),M.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.1},`${v}-stop-2`)]})}),M.jsx(Oc,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),M.jsx(Ra,{dataKey:"week",tick:{fontSize:12,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),M.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),M.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),M.jsx(Wn,{content:M.jsx(O3,{})},`tooltip-${l}`),M.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"line",iconSize:20},`legend-${l}`),M.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"totalSessions",stroke:"#3b82f6",strokeWidth:3,dot:{fill:"#3b82f6",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Total Sessions"},`line-total-${l}`),M.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"humanEscalations",stroke:"#f97316",strokeWidth:3,dot:{fill:"#f97316",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Human Escalations"},`line-human-${l}`),M.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:3,strokeDasharray:"8 4",dot:{fill:"#ef4444",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},c)})})]})}const C3=["#3b82f6","#f97316","#10b981","#8b5cf6","#f59e0b"];function aO({data:e,title:t}){const n=e.reduce((s,l)=>s+l.count,0),r=t||"Channel Distribution",a=r.replace(/\s/g,"-").toLowerCase(),i=e.map((s,l)=>({...s,uniqueKey:`${a}-${s.channel.replace(/\s/g,"-")}-${s.count}-${l}`,id:`${a}-${l}`}));return M.jsxs(zn,{children:[M.jsxs(jc,{children:[M.jsx(Dc,{children:r}),M.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Total sessions: ",n.toLocaleString()]})]}),M.jsx(Un,{children:M.jsx(jy,{width:"100%",height:300,children:M.jsxs(xY,{children:[M.jsx(ea,{data:i,cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",paddingAngle:2,dataKey:"count",label:({channel:s,percentage:l})=>`${s} (${l.toFixed(1)}%)`,children:i.map(s=>M.jsx(Xs,{fill:C3[i.indexOf(s)%C3.length]},s.uniqueKey))},`pie-${a}`),M.jsx(Wn,{formatter:(s,l,c)=>[`${s.toLocaleString()} sessions (${c.payload.percentage.toFixed(1)}%)`,c.payload.channel],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}})]},`piechart-${a}`)})})]})}function PY({data:e}){const t=e.reduce((a,i)=>{const s=a.find(l=>l.product===i.product);return s?s.count+=i.count:a.push({...i}),a},[]),n=t.slice(0,10),r=t.reduce((a,i)=>a+i.count,0);return M.jsxs(zn,{children:[M.jsxs(jc,{children:[M.jsx(Dc,{children:"Product Breakdown (Human Handled)"}),M.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Human escalations: ",r.toLocaleString()," ",n.length<t.length&&`(showing top ${n.length})`]})]}),M.jsx(Un,{children:M.jsx(jy,{width:"100%",height:300,children:M.jsxs(BY,{data:n,children:[M.jsx(Oc,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),M.jsx(Ra,{dataKey:"product",tick:{fontSize:11},stroke:"#6b7280",angle:-45,textAnchor:"end",height:100}),M.jsx(Br,{tick:{fontSize:12},stroke:"#6b7280",label:{value:"Count",angle:-90,position:"insideLeft",style:{fontSize:12}}}),M.jsx(Wn,{formatter:a=>[`${a} escalations`,"Count"],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}}),M.jsx(Sr,{dataKey:"count",fill:"#f97316",radius:[4,4,0,0]})]})})})]})}function oO({className:e,...t}){return M.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:M.jsx("table",{"data-slot":"table",className:ln("w-full caption-bottom text-sm",e),...t})})}function iO({className:e,...t}){return M.jsx("thead",{"data-slot":"table-header",className:ln("[&_tr]:border-b",e),...t})}function uO({className:e,...t}){return M.jsx("tbody",{"data-slot":"table-body",className:ln("[&_tr:last-child]:border-0",e),...t})}function fi({className:e,...t}){return M.jsx("tr",{"data-slot":"table-row",className:ln("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...t})}function Dr({className:e,...t}){return M.jsx("th",{"data-slot":"table-head",className:ln("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function An({className:e,...t}){return M.jsx("td",{"data-slot":"table-cell",className:ln("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function SY({data:e}){const[t,n]=X.useState(new Set),r=a=>{const i=new Set(t);i.has(a)?i.delete(a):i.add(a),n(i)};return M.jsx("div",{className:"border rounded-lg overflow-hidden",children:M.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:M.jsxs(oO,{children:[M.jsx(iO,{className:"bg-gray-50 sticky top-0 z-10",children:M.jsxs(fi,{children:[M.jsx(Dr,{className:"w-12"}),M.jsx(Dr,{children:"Issue Type"}),M.jsx(Dr,{className:"text-right",children:"Count"})]})}),M.jsx(uO,{children:e.flatMap((a,i)=>{const s=t.has(a.issue),l=[M.jsxs(fi,{className:"cursor-pointer hover:bg-gray-50",onClick:()=>r(a.issue),children:[M.jsx(An,{children:s?M.jsx(UE,{className:"w-4 h-4"}):M.jsx(Cv,{className:"w-4 h-4"})}),M.jsx(An,{className:"font-medium",children:a.issue}),M.jsx(An,{className:"text-right font-semibold",children:a.count})]},`${a.issue}-${i}`)];return s&&a.subIssues.forEach((c,f)=>{l.push(M.jsxs(fi,{className:"bg-blue-50",children:[M.jsx(An,{}),M.jsx(An,{className:"pl-8",children:M.jsxs("div",{children:[M.jsx("div",{className:"font-medium text-sm text-gray-900",children:c.subType}),M.jsx("div",{className:"text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5",children:c.products.map((h,d)=>M.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700",children:[h.product," ",M.jsxs("span",{className:"ml-1 font-semibold",children:["(",h.count,")"]})]},`${a.issue}-${c.subType}-${h.product}-${d}`))})]})}),M.jsx(An,{className:"text-right",children:c.count})]},`${a.issue}-${c.subType}-${f}`))}),l})})]})})})}const Ju=50;function ri({field:e,currentField:t,direction:n,onSort:r,children:a}){return M.jsxs("button",{onClick:()=>r(e),className:"flex items-center gap-1 hover:text-gray-900 font-medium",children:[a,M.jsx(LE,{className:`w-4 h-4 ${t===e?"text-blue-600":"text-gray-400"}`})]})}function WY({data:e=[]}){const[t,n]=X.useState("createdAt"),[r,a]=X.useState("desc"),[i,s]=X.useState(0),l=X.useCallback(d=>{n(v=>v===d?(a(y=>y==="asc"?"desc":"asc"),d):(a("asc"),d)),s(0)},[]),c=X.useMemo(()=>[...e].sort((d,v)=>{let y,x;return t==="createdAt"?(y=ir(d.createdAt).getTime(),x=ir(v.createdAt).getTime(),isNaN(y)&&(y=-1/0),isNaN(x)&&(x=-1/0)):(y=(d[t]||"").toLowerCase(),x=(v[t]||"").toLowerCase()),r==="asc"?y>x?1:y<x?-1:0:y<x?1:y>x?-1:0}),[e,t,r]),f=Math.ceil(c.length/Ju),h=X.useMemo(()=>c.slice(i*Ju,(i+1)*Ju),[c,i]);return M.jsxs("div",{className:"space-y-3",children:[M.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 px-1",children:[M.jsxs("span",{children:["Showing ",M.jsxs("span",{className:"font-semibold text-gray-800",children:[i*Ju+1,"–",Math.min((i+1)*Ju,c.length)]})," of ",M.jsx("span",{className:"font-semibold text-gray-800",children:c.length.toLocaleString()})," sessions"]}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("button",{onClick:()=>s(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:M.jsx(WI,{className:"w-4 h-4"})}),M.jsxs("span",{className:"text-xs font-medium",children:["Page ",i+1," of ",f||1]}),M.jsx("button",{onClick:()=>s(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:M.jsx(Cv,{className:"w-4 h-4"})})]})]}),M.jsx("div",{className:"border rounded-lg overflow-hidden",children:M.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:M.jsxs(oO,{children:[M.jsx(iO,{className:"bg-gray-50 sticky top-0 z-10",children:M.jsxs(fi,{children:[M.jsx(Dr,{children:M.jsx(ri,{field:"createdAt",currentField:t,direction:r,onSort:l,children:"Date"})}),M.jsx(Dr,{children:M.jsx(ri,{field:"channel",currentField:t,direction:r,onSort:l,children:"Channel"})}),M.jsx(Dr,{children:M.jsx(ri,{field:"product",currentField:t,direction:r,onSort:l,children:"Product"})}),M.jsx(Dr,{children:M.jsx(ri,{field:"issue",currentField:t,direction:r,onSort:l,children:"Issue"})}),M.jsx(Dr,{children:M.jsx(ri,{field:"subType",currentField:t,direction:r,onSort:l,children:"Sub Type"})}),M.jsx(Dr,{children:M.jsx(ri,{field:"handled",currentField:t,direction:r,onSort:l,children:"Handled By"})})]})}),M.jsx(uO,{children:h.length===0?M.jsx(fi,{children:M.jsx(An,{colSpan:6,className:"text-center text-gray-400 py-12",children:"No sessions found."})}):h.map((d,v)=>M.jsxs(fi,{className:"hover:bg-blue-50/50 transition-colors",children:[M.jsx(An,{className:"whitespace-nowrap text-gray-700",children:uR(ir(d.createdAt))}),M.jsx(An,{children:M.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700",children:d.channel||"-"})}),M.jsx(An,{className:"text-gray-700",children:d.product||"-"}),M.jsx(An,{className:"text-gray-700",children:d.issue||"-"}),M.jsx(An,{className:"text-gray-500 text-xs",children:d.subType||"-"}),M.jsx(An,{children:M.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${d.handled==="Bot"?"bg-blue-100 text-blue-800":"bg-orange-100 text-orange-800"}`,children:d.handled||"-"})})]},`${i}-${v}`))})]})})}),f>1&&M.jsxs("div",{className:"flex items-center justify-center gap-2 pt-1",children:[M.jsx("button",{onClick:()=>s(0),disabled:i===0,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"First"}),M.jsx("button",{onClick:()=>s(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:M.jsx(WI,{className:"w-4 h-4"})}),Array.from({length:Math.min(5,f)},(d,v)=>{let y;return f<=5||i<3?y=v:i>f-4?y=f-5+v:y=i-2+v,M.jsx("button",{onClick:()=>s(y),className:`px-3 py-1.5 text-xs rounded-md border font-medium transition-colors ${y===i?"bg-blue-600 text-white border-blue-600":"border-gray-200 hover:bg-gray-100 text-gray-700"}`,children:y+1},y)}),M.jsx("button",{onClick:()=>s(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:M.jsx(Cv,{className:"w-4 h-4"})}),M.jsx("button",{onClick:()=>s(f-1),disabled:i>=f-1,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"Last"})]})]})}function sO({metrics:e,topChannel:t,top5Products:n,top5Issues:r,monthCount:a}){return M.jsxs(zn,{className:"border-0 shadow-xl overflow-hidden mt-6",children:[M.jsx("div",{className:"bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-6 py-4 border-b border-white/10",children:M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20",children:M.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-xl font-black tracking-tight",children:"Waggle AI Performance Summary"}),M.jsx("p",{className:"text-[10px] text-indigo-200 font-bold uppercase tracking-widest opacity-80",children:"Full Analytics Overview"})]})]})}),M.jsxs(Un,{className:"p-6 bg-gradient-to-br from-slate-50 to-white",children:[M.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[M.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[M.jsx("div",{className:"w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300",children:M.jsx("svg",{className:"w-4 h-4 text-blue-600 group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})})}),M.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Total Sessions"})]}),M.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:e.totalSessions.toLocaleString()}),M.jsxs("p",{className:"text-[10px] text-slate-400 font-medium italic",children:["Across ",a," ",a===1?"month":"months"]})]}),M.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[M.jsx("div",{className:"w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300",children:M.jsx("svg",{className:"w-4 h-4 text-emerald-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),M.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Bot Efficiency"})]}),M.jsxs("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:[e.botPercentage.toFixed(1),"%"]}),M.jsxs("p",{className:"text-[10px] text-emerald-600 font-bold",children:[e.botHandled.toLocaleString()," Handled"]})]}),M.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[M.jsx("div",{className:"w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300",children:M.jsx("svg",{className:"w-4 h-4 text-rose-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),M.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Avg Escalation"})]}),M.jsxs("p",{className:"text-2xl font-black text-rose-600 tracking-tight mb-0.5",children:[e.escalationRate.toFixed(1),"%"]}),M.jsx("p",{className:"text-[10px] text-rose-400 font-bold uppercase",children:"Human Assistance Needs"})]}),M.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[M.jsx("div",{className:"w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300",children:M.jsx("svg",{className:"w-4 h-4 text-indigo-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),M.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Main Channel"})]}),M.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:(t==null?void 0:t.channel)||"N/A"}),M.jsxs("p",{className:"text-[10px] text-indigo-500 font-bold uppercase",children:[((t==null?void 0:t.percentage)||0).toFixed(1),"% Share"]})]})]}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[M.jsxs("div",{className:"bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-slate-800",children:[M.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-5 pointer-events-none",children:M.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),M.jsxs("h4",{className:"flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),"Top 5 Products Escalated"]}),M.jsx("div",{className:"space-y-2 relative z-10",children:n.map((i,s)=>M.jsxs("div",{className:"flex justify-between items-center bg-white/5 rounded-xl p-2.5 border border-white/10 hover:bg-white/10 transition-colors",children:[M.jsxs("span",{className:"font-bold text-sm text-indigo-50 flex items-center gap-2",children:[M.jsxs("span",{className:"text-indigo-400 font-mono text-xs opacity-70",children:[s+1,"."]})," ",i.product||"N/A"]}),M.jsxs("span",{className:"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-bold ring-1 ring-indigo-500/50",children:[i.count.toLocaleString()," cases"]})]},s))})]}),M.jsxs("div",{className:"bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-indigo-500/30",children:[M.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-10 pointer-events-none",children:M.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),M.jsxs("h4",{className:"flex items-center gap-2 text-indigo-100 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-pulse"}),"Top 5 Issue Types"]}),M.jsx("div",{className:"space-y-2 relative z-10",children:r.map((i,s)=>M.jsxs("div",{className:"flex justify-between items-center bg-black/10 rounded-xl p-2.5 border border-white/10 hover:bg-black/20 transition-colors",children:[M.jsxs("span",{className:"font-bold text-sm text-purple-50 flex items-center gap-2",children:[M.jsxs("span",{className:"text-purple-300 font-mono text-xs opacity-70",children:[s+1,"."]})," ",i.issue||"N/A"]}),M.jsxs("span",{className:"px-2.5 py-0.5 bg-white/10 text-white rounded-full text-xs font-bold ring-1 ring-white/20",children:[i.humanCount.toLocaleString()," escapements"]})]},s))})]})]})]})]})}function AY({monthsData:e,weeklyEscalation:t}){const n=e.flatMap(l=>l.data),r=Tv(n),a=Rv(n)[0],i=MW(n).slice(0,5),s=Hv(n,5);return M.jsxs(M.Fragment,{children:[M.jsxs(zn,{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-xl overflow-hidden relative",children:[M.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"}),M.jsx(Un,{className:"p-5 relative z-10",children:M.jsxs("div",{className:"text-center text-white",children:[M.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-2 uppercase tracking-wider border border-white/30",children:[M.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Performance Analysis"]}),M.jsx("h2",{className:"text-2xl md:text-3xl font-black mb-1.5 tracking-tight drop-shadow-lg",children:"Dynamic Monthly Overview"}),M.jsx("p",{className:"text-base text-white/90 font-medium max-w-2xl mx-auto",children:"Comprehensive analysis across available months"})]})})]}),M.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(l=>{const c=Hv(l.data,3);return M.jsxs(zn,{className:`relative overflow-hidden shadow-lg border-0 bg-gradient-to-br ${l.colorFrom} ${l.colorTo} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group`,children:[M.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),M.jsx(jc,{className:"text-white pb-3 pt-4 relative z-10",children:M.jsxs("div",{className:"text-center",children:[M.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-2 uppercase tracking-wider border border-white/30",children:[M.jsx("svg",{className:"w-2.5 h-2.5",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),l.shortName]}),M.jsx(Dc,{className:"text-2xl font-black mb-3 drop-shadow",children:l.name}),M.jsxs("div",{className:"bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-md",children:[M.jsx("p",{className:"text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold",children:"Total Sessions"}),M.jsx("p",{className:"text-4xl font-black tracking-tight drop-shadow-md",children:l.data.length.toLocaleString()}),l.data.length<200&&M.jsx("p",{className:"text-[10px] text-white/80 mt-1 font-medium",children:"Partial data recorded"})]})]})}),M.jsxs(Un,{className:"p-4 bg-white/95 backdrop-blur-sm relative z-10",children:[M.jsxs("div",{className:"space-y-2 mb-4",children:[M.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm border border-green-200",children:[M.jsxs("div",{className:"flex justify-between items-center mb-1",children:[M.jsxs("div",{className:"flex items-center gap-1.5",children:[M.jsx("div",{className:"w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm",children:M.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),M.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Bot Handled"})]}),M.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-green-300",children:M.jsxs("p",{className:"text-sm font-black text-green-700",children:[l.metrics.botPercentage.toFixed(1),"%"]})})]}),M.jsx("p",{className:"text-xl font-black text-gray-900",children:l.metrics.botHandled.toLocaleString()})]}),M.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 shadow-sm border border-orange-200",children:[M.jsxs("div",{className:"flex justify-between items-center mb-1",children:[M.jsxs("div",{className:"flex items-center gap-1.5",children:[M.jsx("div",{className:"w-6 h-6 bg-orange-500 rounded flex items-center justify-center shadow-sm",children:M.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),M.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Human Escalated"})]}),M.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-orange-300",children:M.jsxs("p",{className:"text-sm font-black text-orange-700",children:[l.metrics.humanPercentage.toFixed(1),"%"]})})]}),M.jsx("p",{className:"text-xl font-black text-gray-900",children:l.metrics.humanHandled.toLocaleString()})]})]}),M.jsxs("div",{className:"border-t border-slate-100 pt-3",children:[M.jsxs("h5",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),"Top 3 Monthly Issues"]}),M.jsx("div",{className:"space-y-1.5",children:c.map((f,h)=>M.jsxs("div",{className:"flex justify-between items-center text-[11px] bg-slate-50 p-1.5 rounded-md border border-slate-100",children:[M.jsx("span",{className:"font-bold text-slate-700 truncate max-w-[120px]",children:f.issue}),M.jsx("span",{className:"font-black text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded",children:f.humanCount})]},h))})]})]})]},l.name)})}),M.jsx(rO,{data:t,title:"Sessions & Escalation Comparison",instanceId:"overview-comparison"}),M.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(l=>M.jsx(aO,{data:l.channels,title:`${l.name} - Channels`},l.name))}),M.jsx(sO,{metrics:r,topChannel:a,top5Products:i,top5Issues:s,monthCount:e.length})]})}const _Y="WaggleAIDB",MY=1,qi="waggle_manual_data_store",lO=()=>new Promise((e,t)=>{const n=indexedDB.open(_Y,MY);n.onerror=()=>{console.error("Error opening db",n.error),t(n.error)},n.onsuccess=()=>{e(n.result)},n.onupgradeneeded=r=>{const a=r.target.result;a.objectStoreNames.contains(qi)||a.createObjectStore(qi,{keyPath:"id"})}}),k3=async e=>{const t=await lO();return new Promise((n,r)=>{const s=t.transaction(qi,"readwrite").objectStore(qi).put({id:"all_data",data:e});s.onsuccess=()=>n(),s.onerror=()=>r(s.error)})},E3=async()=>{const e=await lO();return new Promise((t,n)=>{const i=e.transaction(qi,"readonly").objectStore(qi).get("all_data");i.onsuccess=()=>{i.result?t(i.result.data):t([])},i.onerror=()=>n(i.error)})},OY=`Channel,Created at,Product,Issue,Sub Type,Handled
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
Inapp,2026-05-01,PM,DNR,Reset Button,Human
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,PM,DNR,,Human
Inapp,2026-05-01,PM,DNR,,Human
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
Webapp,2026-05-01,Waggle Cam Pro,Treat Tosser,Treat Size,Human
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
Inapp,2026-05-01,PM,App Navigation,Humidity Threshold,Human
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Webapp,2026-05-01,4g mini,Subs Activation,Price Inquiry,Human
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,PM,Accessories,Wall Mount Purchase (OOS),Human
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,PM,DNR,,Human
Inapp,2026-05-01,4g mini,Subs Mapping,,Human
Webapp,2026-05-01,,,,Bot
Webapp,2026-05-01,,,,Bot
Inapp,2026-05-01,,,,Bot
Inapp,2026-05-01,PM,DNR,,Human
Inapp,2026-05-02,PM,DNR,,Human
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
Inapp,2026-05-02,PM,Subs Cancellation,,Human
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-02,PM,DNR,,Human
Inapp,2026-05-02,RV Mini Cam,Subs Activation,Plan Query (2 Years),Human
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,PM,DNR,,Human
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,PM,False PLPB,,Human
Webapp,2026-05-02,,,,Bot
Webapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,PM,Device Query,Battery,Human
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,RV Mini Cam,Connection,,Human
Inapp,2026-05-02,PM,DNR,,Human
Inapp,2026-05-02,,,,Bot
Inapp,2026-05-02,RV Mini Cam,Presales,Plan Inquiry,Human
Inapp,2026-05-02,PM,DNR,,Human
Inapp,2026-05-03,,,,Bot
Webapp,2026-05-03,PM,Subs Query,Flexi Plan Confusion,Human
Webapp,2026-05-03,4g mini,Subs Query,Monthly - Pause and Resume,Human
Inapp,2026-05-03,,,,Bot
Webapp,2026-05-03,,,,Bot
Inapp,2026-05-03,RV Mini Cam,Device Query,TIme Format Change,Human
Inapp,2026-05-03,,,,Bot
Webapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,NA,NA,NA,Human
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,4g mini,Subs Activation,Combo Plan Query,Human
Inapp,2026-05-03,RV Mini Cam,Device Removal,,Human
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,PM,DNR,,Human
Inapp,2026-05-03,PM,DNR,,Human
Webapp,2026-05-03,,,,Bot
Inapp,2026-05-03,PM,False PLPB,,Human
Webapp,2026-05-03,PM,Subs Activation,Combo Plan Query,Human
Webapp,2026-05-03,4g camera,Accessories,Replacment Cord - OOS,Human
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Webapp,2026-05-03,PM,Device Removal,Device Transfer,Human
Inapp,2026-05-03,,,,Bot
Webapp,2026-05-03,4g mini,Subs Query,Price Inquiry,Human
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,4g mini,App Issue,Policy Update,Human
Inapp,2026-05-03,PM,DNR,,Human
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Inapp,2026-05-03,,,,Bot
Webapp,2026-05-04,PM,Order,Delivery Issue,Human
Inapp,2026-05-04,PM,Device Removal,Device Transfer,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,PM,DNR,,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,PM,Charging Issue,Not charging,Human
Webapp,2026-05-04,,,,Bot
Webapp,2026-05-04,Waggle App,App Issue,Update not Working,Human
Webapp,2026-05-04,Waggle App,App Issue,Update not Working,Human
Webapp,2026-05-04,Waggle App,App Issue,Update not Working,Human
Webapp,2026-05-04,Waggle App,App Issue,Update not Working,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,PM,DNR,,Human
Inapp,2026-05-04,4g mini,Alerts Related,Unique Alert Sounds,Human
Inapp,2026-05-04,,,,Bot
Webapp,2026-05-04,PM,DNR,,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,PM,False PLPB,,Human
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
Inapp,2026-05-04,PM,DNR,,Human
Inapp,2026-05-04,PM,DNR,,Human
Inapp,2026-05-04,,,,Bot
Webapp,2026-05-04,4g mini,Presales,Discount Request,Human
Inapp,2026-05-04,4g mini,Subs Activation,Discount Request,Human
Inapp,2026-05-04,4g mini,Subs Activation,Price Inquiry,Human
Inapp,2026-05-04,PM,Registration Issue,Wrong Email,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,PM,DNR,,Human
Inapp,2026-05-04,PM,Subs Cancellation,,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,PM,Device Query,LED Indicator,Human
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,,,,Bot
Inapp,2026-05-04,RV Mini Cam,Setup,,Human
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,PM,App Navigation,Temp Threshold,Human
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,4g mini,Registration Issue,,Human
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,PM,DNR,,Human
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,4g mini,Subs Activation,Combo Plan Query,Human
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Webapp,2026-05-05,PM,Presales,Functionalities,Human
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
Inapp,2026-05-05,PM,Return & Refund,Subs Expensive,Human
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,PM,DNR,,Human
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,PM,DNR,,Human
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,PM,DNR,,Human
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,PM,DNR,,Human
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-05,PM,Email ID Change,,Human
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Inapp,2026-05-05,,,,Bot
Webapp,2026-05-05,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-06,4g mini,Connection,,Human
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,4g mini,Connection,,Human
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
Inapp,2026-05-06,PM,DNR,,Human
Webapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,PM,DNR,,Human
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
Inapp,2026-05-06,PM,Subs Cancellation,,Human
Webapp,2026-05-06,4g mini,App Navigation,Turn Off Camera,Human
Inapp,2026-05-06,4g mini,Subs Activation,Combo Plan Query,Human
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-06,,,,Bot
Webapp,2026-05-06,4g mini,Connection,,Human
Inapp,2026-05-06,,,,Bot
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,PM,DNR,,Human
Webapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,4g mini,Subs Activation,Combo Plan Query,Human
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,PM,DNR,,Human
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,RV Mini Cam,Presales,Functionalities,Human
Inapp,2026-05-07,PM,DNR,,Human
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,RV Mini Cam,Return & Refund,,Human
Inapp,2026-05-07,4g camera,Return & Refund,,Human
Webapp,2026-05-07,4g camera,Return & Refund,,Human
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,PM,Setup,,Human
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Webapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Webapp,2026-05-07,4g mini,SIM Out of Service,,Human
Inapp,2026-05-07,PM,DNR,,Human
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-07,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,PM,Subs Cancellation,,Human
Inapp,2026-05-08,PM,Subs Activation,Combo Plan Query,Human
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,4g mini,Connection,,Human
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,PM,DNR,,Human
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,PM,DNR,,Human
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,PM,DNR,,Human
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-08,PM,DNR,,Human
Inapp,2026-05-08,PM,DNR,,Human
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Webapp,2026-05-08,,,,Bot
Inapp,2026-05-08,4g mini,Registration Issue,,Human
Inapp,2026-05-08,,,,Bot
Inapp,2026-05-09,PM,Error 121,,Human
Inapp,2026-05-09,PM,DNR,,Human
Inapp,2026-05-09,PM,DNR,,Human
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,PM,DNR,,Human
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Webapp,2026-05-09,PM,Order Related,NA,Human
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,PM,Subs Mapping,,Human
Webapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,RV Mini Cam,Connection,,Human
Webapp,2026-05-09,,,,Bot
Inapp,2026-05-09,4g mini,Device Query,Functionalities,Human
Inapp,2026-05-09,,,,Bot
Webapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Webapp,2026-05-09,PM,DNR,,Human
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
Inapp,2026-05-09,PM,Registration Issue,Device Transfer,Human
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-09,,,,Bot
Inapp,2026-05-10,PM,Subs Cancellation,,Human
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,Vet Chat,Subs Query,,Human
Inapp,2026-05-10,PM,DNR,,Human
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
Inapp,2026-05-10,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,PM,Presales,Canada Cellular Use,Human
Inapp,2026-05-10,PM,GPS,Query,Human
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,4g mini,Mounting Assistance,,Human
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,4g mini,Registration Issue,,Human
Inapp,2026-05-10,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,PM,DNR,,Human
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,PM,DNR,,Human
Inapp,2026-05-10,4g mini,Delete Videos,,Human
Webapp,2026-05-10,PM,Presales,Functionalities,Human
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,PM,DNR,,Human
Webapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,4g mini,Device Query,Shut Down,Human
Inapp,2026-05-10,4g mini,Subs Mapping,,Human
Inapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot
Webapp,2026-05-10,,,,Bot
Inapp,2026-05-10,,,,Bot`;function CY(){const[e,t]=X.useState([]),[n,r]=X.useState([]),[a,i]=X.useState("all"),[s,l]=X.useState("all"),[c,f]=X.useState([]),[h,d]=X.useState("overview"),[v,y]=X.useState(null),x=X.useRef(null),[I,b]=X.useState(null),S=X.useRef([]);X.useEffect(()=>{S.current=e},[e]);const W=$=>{if(!$)return $;const V=$.trim(),q=V.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(q){const[,K,L,Y]=q;return`${Y.padStart(2,"0")}-${L.padStart(2,"0")}-${K}`}const G=V.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(G){const[,K,L,Y]=G;return`${K.padStart(2,"0")}-${L.padStart(2,"0")}-${Y}`}return V};X.useEffect(()=>{let $=[];hI.parse(OY,{header:!0,skipEmptyLines:!0,complete:async V=>{$=V.data.map(q=>({channel:q.Channel||q.channel||"",createdAt:W(q["Created at"]||q.createdAt||q["Created date"]||q.Date||q.date||q["Created Date"]||""),product:q.Product||q.product||"",issue:q.Issue||q.issue||"",subType:q["Sub Type"]||q.subType||"",handled:q.Handled||q.handled||""}));try{const q=localStorage.getItem("waggle_manual_data");let G=await E3();if(q&&G.length===0)try{const K=JSON.parse(q);Array.isArray(K)&&(G=K,await k3(K))}catch{}Array.isArray(G)&&G.length>0&&($=[...$,...G])}catch(q){console.error("Error loading data from IndexedDB",q)}t($)}})},[]);const A=X.useMemo(()=>{const $=["january","february","march","april","may","june","july","august","september","october","november","december"],V=new Set;return e.forEach(q=>{try{const G=ir(q.createdAt);if(!isNaN(G.getTime())){const K=$[G.getMonth()];V.add(`${K}-${G.getFullYear()}`)}}catch{}}),Array.from(V).sort((q,G)=>{const[K,L]=q.split("-"),[Y,Q]=G.split("-");return L!==Q?parseInt(L)-parseInt(Q):$.indexOf(K)-$.indexOf(Y)})},[e]);X.useEffect(()=>{f(a&&a!=="all"?AW(a):[]),l("all")},[a]),X.useEffect(()=>{e.length>0&&w(a,s)},[s,a,e,h]);const O=$=>{var q;const V=(q=$.target.files)==null?void 0:q[0];V&&(hI.parse(V,{header:!0,skipEmptyLines:!0,complete:G=>{if(!G.data.length){b({type:"error",message:"The CSV file appears to be empty."});return}const K=G.data.map(Q=>({channel:Q.Channel||Q.channel||"",createdAt:W(Q["Created at"]||Q.createdAt||Q["Created date"]||Q.Date||Q.date||Q["Created Date"]||""),product:Q.Product||Q.product||"",issue:Q.Issue||Q.issue||"",subType:Q["Sub Type"]||Q.subType||"",handled:Q.Handled||Q.handled||""})),L=new Set(S.current.map(Q=>`${Q.channel}|${Q.createdAt}|${Q.product}|${Q.issue}|${Q.subType}|${Q.handled}`)),Y=K.filter(Q=>!L.has(`${Q.channel}|${Q.createdAt}|${Q.product}|${Q.issue}|${Q.subType}|${Q.handled}`));Y.length>0?E3().then(async Q=>{const H=[...Q,...Y];await k3(H);try{localStorage.setItem("waggle_manual_data",JSON.stringify(H))}catch{}t(F=>[...F,...Y]),b({type:"success",message:`Added ${Y.length} rows.`}),setTimeout(()=>b(null),5e3)}).catch(Q=>{console.error("Failed to save manual data",Q),b({type:"error",message:"Failed to save data. Try again."}),setTimeout(()=>b(null),5e3)}):(b({type:"error",message:"No new rows found."}),setTimeout(()=>b(null),5e3))}}),$.target.value="")},w=($,V,q)=>{let G=e;if($!=="all"?G=e.filter(K=>{const L=ir(K.createdAt);return Nv(L,$)}):G=e.filter(K=>!isNaN(ir(K.createdAt).getTime())),V!=="all"){const K=c.find(L=>L.value===V);K&&(G=G.filter(L=>_W(ir(L.createdAt),K)))}r(G)},_=Tv(n),E=Rv(n),P=MW(n),C=lR(n),T=sR(e,a),j=[{from:"from-blue-500",to:"to-cyan-500"},{from:"from-purple-500",to:"to-indigo-600"},{from:"from-pink-500",to:"to-rose-600"},{from:"from-emerald-500",to:"to-teal-600"},{from:"from-orange-500",to:"to-amber-500"}],N=(a==="all"?A:[a]).map(($,V)=>{const q=e.filter(Y=>Nv(ir(Y.createdAt),$)),[G,K]=$.split("-"),L=j[V%j.length];return{name:`${G.charAt(0).toUpperCase()+G.slice(1)} ${K}`,shortName:`Month ${V+1}`,data:q,metrics:Tv(q),channels:Rv(q),colorFrom:L.from,colorTo:L.to}});return M.jsx("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",children:M.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[M.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[M.jsxs("div",{children:[M.jsxs("h1",{className:"text-3xl font-bold",children:["Waggle AI Chatbot Dashboard ",M.jsx("span",{className:"text-xs font-normal text-gray-400 align-top",children:"v1.3"})]}),M.jsx("p",{className:"text-gray-600 mt-1",children:"Track and analyze customer support interactions"})]}),M.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[M.jsxs("select",{value:a,onChange:$=>i($.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",children:[M.jsx("option",{value:"all",children:"All Months"}),A.map($=>M.jsxs("option",{value:$,children:[$.split("-")[0].charAt(0).toUpperCase()+$.split("-")[0].slice(1)," ",$.split("-")[1]]},$))]}),M.jsxs("select",{value:s,onChange:$=>l($.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",disabled:a==="all",children:[M.jsx("option",{value:"all",children:"All Weeks"}),c.map($=>M.jsx("option",{value:$.value,children:$.label},$.value))]}),M.jsx("input",{ref:x,type:"file",accept:".csv",onChange:O,className:"hidden"}),M.jsxs(xI,{onClick:()=>{var $;return($=x.current)==null?void 0:$.click()},variant:"outline",className:"bg-white border-blue-300 text-blue-700",children:[M.jsx(QE,{className:"w-4 h-4 mr-2"})," Add Data"]}),M.jsxs(xI,{onClick:()=>pR(n),variant:"outline",className:"bg-white",children:[M.jsx(XE,{className:"w-4 h-4 mr-2"})," Export CSV"]})]})]}),I&&M.jsx(zn,{className:`border ${I.type==="success"?"bg-green-50":"bg-red-50"}`,children:M.jsxs(Un,{className:"p-4 flex items-center justify-between",children:[M.jsx("p",{className:"font-medium",children:I.message}),M.jsx("button",{onClick:()=>b(null),children:M.jsx(oN,{className:"w-4 h-4"})})]})}),a==="all"&&M.jsx("div",{className:"flex justify-center",children:M.jsxs("div",{className:"inline-flex rounded-lg border border-gray-200 bg-white p-1",children:[M.jsx("button",{onClick:()=>d("overview"),className:`px-6 py-2 rounded-md text-sm font-medium ${h==="overview"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Overview Comparison"}),M.jsx("button",{onClick:()=>d("detailed"),className:`px-6 py-2 rounded-md text-sm font-medium ${h==="detailed"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Detailed Analysis"})]})}),a==="all"&&h==="overview"?M.jsx(AY,{monthsData:N,weeklyEscalation:T}):M.jsxs(M.Fragment,{children:[M.jsx(cR,{metrics:_}),M.jsx(sO,{metrics:_,topChannel:E[0],top5Products:P.slice(0,5),top5Issues:Hv(n,5),monthCount:a==="all"?A.length:1}),M.jsx(rO,{data:T,instanceId:"detailed-analysis"}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[M.jsx(aO,{data:E}),M.jsx(PY,{data:P})]}),M.jsx(zn,{children:M.jsx(Un,{className:"p-6",children:M.jsxs(NE,{defaultValue:"issues",className:"w-full",children:[M.jsxs(TE,{className:"grid w-full grid-cols-2 max-w-md",children:[M.jsx(wI,{value:"issues",children:"Issue Analysis"}),M.jsx(wI,{value:"sessions",children:"Detailed Sessions"})]}),M.jsx(PI,{value:"issues",className:"mt-6",children:M.jsx(SY,{data:C})}),M.jsx(PI,{value:"sessions",className:"mt-6",children:M.jsx(WY,{data:n})})]})})})]})]})})}mk.createRoot(document.getElementById("root")).render(M.jsx(CY,{}));
