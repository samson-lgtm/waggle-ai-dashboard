var tk=Object.defineProperty;var nk=(e,t,n)=>t in e?tk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ve=(e,t,n)=>nk(e,typeof t!="symbol"?t+"":t,n);function rk(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var lp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var df={exports:{}},Du={},hf={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rI;function ak(){if(rI)return Le;rI=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),d=Symbol.iterator;function v(H){return H===null||typeof H!="object"?null:(H=d&&H[d]||H["@@iterator"],typeof H=="function"?H:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,I={};function b(H,F,J){this.props=H,this.context=F,this.refs=I,this.updater=J||y}b.prototype.isReactComponent={},b.prototype.setState=function(H,F){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,F,"setState")},b.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function S(){}S.prototype=b.prototype;function W(H,F,J){this.props=H,this.context=F,this.refs=I,this.updater=J||y}var A=W.prototype=new S;A.constructor=W,x(A,b.prototype),A.isPureReactComponent=!0;var O=Array.isArray,w=Object.prototype.hasOwnProperty,_={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function P(H,F,J){var ue,he={},ge=null,ye=null;if(F!=null)for(ue in F.ref!==void 0&&(ye=F.ref),F.key!==void 0&&(ge=""+F.key),F)w.call(F,ue)&&!N.hasOwnProperty(ue)&&(he[ue]=F[ue]);var fe=arguments.length-2;if(fe===1)he.children=J;else if(1<fe){for(var ne=Array(fe),de=0;de<fe;de++)ne[de]=arguments[de+2];he.children=ne}if(H&&H.defaultProps)for(ue in fe=H.defaultProps,fe)he[ue]===void 0&&(he[ue]=fe[ue]);return{$$typeof:e,type:H,key:ge,ref:ye,props:he,_owner:_.current}}function C(H,F){return{$$typeof:e,type:H.type,key:F,ref:H.ref,props:H.props,_owner:H._owner}}function T(H){return typeof H=="object"&&H!==null&&H.$$typeof===e}function j(H){var F={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(J){return F[J]})}var E=/\/+/g;function $(H,F){return typeof H=="object"&&H!==null&&H.key!=null?j(""+H.key):F.toString(36)}function V(H,F,J,ue,he){var ge=typeof H;(ge==="undefined"||ge==="boolean")&&(H=null);var ye=!1;if(H===null)ye=!0;else switch(ge){case"string":case"number":ye=!0;break;case"object":switch(H.$$typeof){case e:case t:ye=!0}}if(ye)return ye=H,he=he(ye),H=ue===""?"."+$(ye,0):ue,O(he)?(J="",H!=null&&(J=H.replace(E,"$&/")+"/"),V(he,F,J,"",function(de){return de})):he!=null&&(T(he)&&(he=C(he,J+(!he.key||ye&&ye.key===he.key?"":(""+he.key).replace(E,"$&/")+"/")+H)),F.push(he)),1;if(ye=0,ue=ue===""?".":ue+":",O(H))for(var fe=0;fe<H.length;fe++){ge=H[fe];var ne=ue+$(ge,fe);ye+=V(ge,F,J,ne,he)}else if(ne=v(H),typeof ne=="function")for(H=ne.call(H),fe=0;!(ge=H.next()).done;)ge=ge.value,ne=ue+$(ge,fe++),ye+=V(ge,F,J,ne,he);else if(ge==="object")throw F=String(H),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return ye}function G(H,F,J){if(H==null)return H;var ue=[],he=0;return V(H,ue,"","",function(ge){return F.call(J,ge,he++)}),ue}function z(H){if(H._status===-1){var F=H._result;F=F(),F.then(function(J){(H._status===0||H._status===-1)&&(H._status=1,H._result=J)},function(J){(H._status===0||H._status===-1)&&(H._status=2,H._result=J)}),H._status===-1&&(H._status=0,H._result=F)}if(H._status===1)return H._result.default;throw H._result}var Q={current:null},L={transition:null},K={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:L,ReactCurrentOwner:_};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:G,forEach:function(H,F,J){G(H,function(){F.apply(this,arguments)},J)},count:function(H){var F=0;return G(H,function(){F++}),F},toArray:function(H){return G(H,function(F){return F})||[]},only:function(H){if(!T(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},Le.Component=b,Le.Fragment=n,Le.Profiler=a,Le.PureComponent=W,Le.StrictMode=r,Le.Suspense=c,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Le.act=Y,Le.cloneElement=function(H,F,J){if(H==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+H+".");var ue=x({},H.props),he=H.key,ge=H.ref,ye=H._owner;if(F!=null){if(F.ref!==void 0&&(ge=F.ref,ye=_.current),F.key!==void 0&&(he=""+F.key),H.type&&H.type.defaultProps)var fe=H.type.defaultProps;for(ne in F)w.call(F,ne)&&!N.hasOwnProperty(ne)&&(ue[ne]=F[ne]===void 0&&fe!==void 0?fe[ne]:F[ne])}var ne=arguments.length-2;if(ne===1)ue.children=J;else if(1<ne){fe=Array(ne);for(var de=0;de<ne;de++)fe[de]=arguments[de+2];ue.children=fe}return{$$typeof:e,type:H.type,key:he,ref:ge,props:ue,_owner:ye}},Le.createContext=function(H){return H={$$typeof:s,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},H.Provider={$$typeof:i,_context:H},H.Consumer=H},Le.createElement=P,Le.createFactory=function(H){var F=P.bind(null,H);return F.type=H,F},Le.createRef=function(){return{current:null}},Le.forwardRef=function(H){return{$$typeof:l,render:H}},Le.isValidElement=T,Le.lazy=function(H){return{$$typeof:h,_payload:{_status:-1,_result:H},_init:z}},Le.memo=function(H,F){return{$$typeof:f,type:H,compare:F===void 0?null:F}},Le.startTransition=function(H){var F=L.transition;L.transition={};try{H()}finally{L.transition=F}},Le.unstable_act=Y,Le.useCallback=function(H,F){return Q.current.useCallback(H,F)},Le.useContext=function(H){return Q.current.useContext(H)},Le.useDebugValue=function(){},Le.useDeferredValue=function(H){return Q.current.useDeferredValue(H)},Le.useEffect=function(H,F){return Q.current.useEffect(H,F)},Le.useId=function(){return Q.current.useId()},Le.useImperativeHandle=function(H,F,J){return Q.current.useImperativeHandle(H,F,J)},Le.useInsertionEffect=function(H,F){return Q.current.useInsertionEffect(H,F)},Le.useLayoutEffect=function(H,F){return Q.current.useLayoutEffect(H,F)},Le.useMemo=function(H,F){return Q.current.useMemo(H,F)},Le.useReducer=function(H,F,J){return Q.current.useReducer(H,F,J)},Le.useRef=function(H){return Q.current.useRef(H)},Le.useState=function(H){return Q.current.useState(H)},Le.useSyncExternalStore=function(H,F,J){return Q.current.useSyncExternalStore(H,F,J)},Le.useTransition=function(){return Q.current.useTransition()},Le.version="18.3.1",Le}var aI;function uy(){return aI||(aI=1,hf.exports=ak()),hf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oI;function ok(){if(oI)return Du;oI=1;var e=uy(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(l,c,f){var h,d={},v=null,y=null;f!==void 0&&(v=""+f),c.key!==void 0&&(v=""+c.key),c.ref!==void 0&&(y=c.ref);for(h in c)r.call(c,h)&&!i.hasOwnProperty(h)&&(d[h]=c[h]);if(l&&l.defaultProps)for(h in c=l.defaultProps,c)d[h]===void 0&&(d[h]=c[h]);return{$$typeof:t,type:l,key:v,ref:y,props:d,_owner:a.current}}return Du.Fragment=n,Du.jsx=s,Du.jsxs=s,Du}var iI;function ik(){return iI||(iI=1,df.exports=ok()),df.exports}var M=ik(),pp={},mf={exports:{}},vn={},vf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uI;function uk(){return uI||(uI=1,(function(e){function t(L,K){var Y=L.length;L.push(K);e:for(;0<Y;){var H=Y-1>>>1,F=L[H];if(0<a(F,K))L[H]=K,L[Y]=F,Y=H;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var K=L[0],Y=L.pop();if(Y!==K){L[0]=Y;e:for(var H=0,F=L.length,J=F>>>1;H<J;){var ue=2*(H+1)-1,he=L[ue],ge=ue+1,ye=L[ge];if(0>a(he,Y))ge<F&&0>a(ye,he)?(L[H]=ye,L[ge]=Y,H=ge):(L[H]=he,L[ue]=Y,H=ue);else if(ge<F&&0>a(ye,Y))L[H]=ye,L[ge]=Y,H=ge;else break e}}return K}function a(L,K){var Y=L.sortIndex-K.sortIndex;return Y!==0?Y:L.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],f=[],h=1,d=null,v=3,y=!1,x=!1,I=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(L){for(var K=n(f);K!==null;){if(K.callback===null)r(f);else if(K.startTime<=L)r(f),K.sortIndex=K.expirationTime,t(c,K);else break;K=n(f)}}function O(L){if(I=!1,A(L),!x)if(n(c)!==null)x=!0,z(w);else{var K=n(f);K!==null&&Q(O,K.startTime-L)}}function w(L,K){x=!1,I&&(I=!1,S(P),P=-1),y=!0;var Y=v;try{for(A(K),d=n(c);d!==null&&(!(d.expirationTime>K)||L&&!j());){var H=d.callback;if(typeof H=="function"){d.callback=null,v=d.priorityLevel;var F=H(d.expirationTime<=K);K=e.unstable_now(),typeof F=="function"?d.callback=F:d===n(c)&&r(c),A(K)}else r(c);d=n(c)}if(d!==null)var J=!0;else{var ue=n(f);ue!==null&&Q(O,ue.startTime-K),J=!1}return J}finally{d=null,v=Y,y=!1}}var _=!1,N=null,P=-1,C=5,T=-1;function j(){return!(e.unstable_now()-T<C)}function E(){if(N!==null){var L=e.unstable_now();T=L;var K=!0;try{K=N(!0,L)}finally{K?$():(_=!1,N=null)}}else _=!1}var $;if(typeof W=="function")$=function(){W(E)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,G=V.port2;V.port1.onmessage=E,$=function(){G.postMessage(null)}}else $=function(){b(E,0)};function z(L){N=L,_||(_=!0,$())}function Q(L,K){P=b(function(){L(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,z(w))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var Y=v;v=K;try{return L()}finally{v=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=v;v=L;try{return K()}finally{v=Y}},e.unstable_scheduleCallback=function(L,K,Y){var H=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?H+Y:H):Y=H,L){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Y+F,L={id:h++,callback:K,priorityLevel:L,startTime:Y,expirationTime:F,sortIndex:-1},Y>H?(L.sortIndex=Y,t(f,L),n(c)===null&&L===n(f)&&(I?(S(P),P=-1):I=!0,Q(O,Y-H))):(L.sortIndex=F,t(c,L),x||y||(x=!0,z(w))),L},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(L){var K=v;return function(){var Y=v;v=K;try{return L.apply(this,arguments)}finally{v=Y}}}})(gf)),gf}var sI;function sk(){return sI||(sI=1,vf.exports=uk()),vf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lI;function lk(){if(lI)return vn;lI=1;var e=uy(),t=sk();function n(o){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+o,p=1;p<arguments.length;p++)u+="&args[]="+encodeURIComponent(arguments[p]);return"Minified React error #"+o+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function i(o,u){s(o,u),s(o+"Capture",u)}function s(o,u){for(a[o]=u,o=0;o<u.length;o++)r.add(u[o])}var l=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},d={};function v(o){return c.call(d,o)?!0:c.call(h,o)?!1:f.test(o)?d[o]=!0:(h[o]=!0,!1)}function y(o,u,p,m){if(p!==null&&p.type===0)return!1;switch(typeof u){case"function":case"symbol":return!0;case"boolean":return m?!1:p!==null?!p.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function x(o,u,p,m){if(u===null||typeof u>"u"||y(o,u,p,m))return!0;if(m)return!1;if(p!==null)switch(p.type){case 3:return!u;case 4:return u===!1;case 5:return isNaN(u);case 6:return isNaN(u)||1>u}return!1}function I(o,u,p,m,g,B,k){this.acceptsBooleans=u===2||u===3||u===4,this.attributeName=m,this.attributeNamespace=g,this.mustUseProperty=p,this.propertyName=o,this.type=u,this.sanitizeURL=B,this.removeEmptyString=k}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){b[o]=new I(o,0,!1,o,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var u=o[0];b[u]=new I(u,1,!1,o[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(o){b[o]=new I(o,2,!1,o.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){b[o]=new I(o,2,!1,o,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){b[o]=new I(o,3,!1,o.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(o){b[o]=new I(o,3,!0,o,null,!1,!1)}),["capture","download"].forEach(function(o){b[o]=new I(o,4,!1,o,null,!1,!1)}),["cols","rows","size","span"].forEach(function(o){b[o]=new I(o,6,!1,o,null,!1,!1)}),["rowSpan","start"].forEach(function(o){b[o]=new I(o,5,!1,o.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function W(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var u=o.replace(S,W);b[u]=new I(u,1,!1,o,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var u=o.replace(S,W);b[u]=new I(u,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(o){var u=o.replace(S,W);b[u]=new I(u,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!1,!1)}),b.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!0,!0)});function A(o,u,p,m){var g=b.hasOwnProperty(u)?b[u]:null;(g!==null?g.type!==0:m||!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(x(u,p,g,m)&&(p=null),m||g===null?v(u)&&(p===null?o.removeAttribute(u):o.setAttribute(u,""+p)):g.mustUseProperty?o[g.propertyName]=p===null?g.type===3?!1:"":p:(u=g.attributeName,m=g.attributeNamespace,p===null?o.removeAttribute(u):(g=g.type,p=g===3||g===4&&p===!0?"":""+p,m?o.setAttributeNS(m,u,p):o.setAttribute(u,p))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),_=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),j=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),L=Symbol.iterator;function K(o){return o===null||typeof o!="object"?null:(o=L&&o[L]||o["@@iterator"],typeof o=="function"?o:null)}var Y=Object.assign,H;function F(o){if(H===void 0)try{throw Error()}catch(p){var u=p.stack.trim().match(/\n( *(at )?)/);H=u&&u[1]||""}return`
`+H+o}var J=!1;function ue(o,u){if(!o||J)return"";J=!0;var p=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(u)if(u=function(){throw Error()},Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(te){var m=te}Reflect.construct(o,[],u)}else{try{u.call()}catch(te){m=te}o.call(u.prototype)}else{try{throw Error()}catch(te){m=te}o()}}catch(te){if(te&&m&&typeof te.stack=="string"){for(var g=te.stack.split(`
`),B=m.stack.split(`
`),k=g.length-1,D=B.length-1;1<=k&&0<=D&&g[k]!==B[D];)D--;for(;1<=k&&0<=D;k--,D--)if(g[k]!==B[D]){if(k!==1||D!==1)do if(k--,D--,0>D||g[k]!==B[D]){var q=`
`+g[k].replace(" at new "," at ");return o.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",o.displayName)),q}while(1<=k&&0<=D);break}}}finally{J=!1,Error.prepareStackTrace=p}return(o=o?o.displayName||o.name:"")?F(o):""}function he(o){switch(o.tag){case 5:return F(o.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return o=ue(o.type,!1),o;case 11:return o=ue(o.type.render,!1),o;case 1:return o=ue(o.type,!0),o;default:return""}}function ge(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case N:return"Fragment";case _:return"Portal";case C:return"Profiler";case P:return"StrictMode";case $:return"Suspense";case V:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case j:return(o.displayName||"Context")+".Consumer";case T:return(o._context.displayName||"Context")+".Provider";case E:var u=o.render;return o=o.displayName,o||(o=u.displayName||u.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case G:return u=o.displayName||null,u!==null?u:ge(o.type)||"Memo";case z:u=o._payload,o=o._init;try{return ge(o(u))}catch{}}return null}function ye(o){var u=o.type;switch(o.tag){case 24:return"Cache";case 9:return(u.displayName||"Context")+".Consumer";case 10:return(u._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=u.render,o=o.displayName||o.name||"",u.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return u;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(u);case 8:return u===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u}return null}function fe(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function ne(o){var u=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(u==="checkbox"||u==="radio")}function de(o){var u=ne(o)?"checked":"value",p=Object.getOwnPropertyDescriptor(o.constructor.prototype,u),m=""+o[u];if(!o.hasOwnProperty(u)&&typeof p<"u"&&typeof p.get=="function"&&typeof p.set=="function"){var g=p.get,B=p.set;return Object.defineProperty(o,u,{configurable:!0,get:function(){return g.call(this)},set:function(k){m=""+k,B.call(this,k)}}),Object.defineProperty(o,u,{enumerable:p.enumerable}),{getValue:function(){return m},setValue:function(k){m=""+k},stopTracking:function(){o._valueTracker=null,delete o[u]}}}}function ce(o){o._valueTracker||(o._valueTracker=de(o))}function re(o){if(!o)return!1;var u=o._valueTracker;if(!u)return!0;var p=u.getValue(),m="";return o&&(m=ne(o)?o.checked?"true":"false":o.value),o=m,o!==p?(u.setValue(o),!0):!1}function Re(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function Pe(o,u){var p=u.checked;return Y({},u,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:p??o._wrapperState.initialChecked})}function Ce(o,u){var p=u.defaultValue==null?"":u.defaultValue,m=u.checked!=null?u.checked:u.defaultChecked;p=fe(u.value!=null?u.value:p),o._wrapperState={initialChecked:m,initialValue:p,controlled:u.type==="checkbox"||u.type==="radio"?u.checked!=null:u.value!=null}}function Ae(o,u){u=u.checked,u!=null&&A(o,"checked",u,!1)}function Fe(o,u){Ae(o,u);var p=fe(u.value),m=u.type;if(p!=null)m==="number"?(p===0&&o.value===""||o.value!=p)&&(o.value=""+p):o.value!==""+p&&(o.value=""+p);else if(m==="submit"||m==="reset"){o.removeAttribute("value");return}u.hasOwnProperty("value")?qe(o,u.type,p):u.hasOwnProperty("defaultValue")&&qe(o,u.type,fe(u.defaultValue)),u.checked==null&&u.defaultChecked!=null&&(o.defaultChecked=!!u.defaultChecked)}function je(o,u,p){if(u.hasOwnProperty("value")||u.hasOwnProperty("defaultValue")){var m=u.type;if(!(m!=="submit"&&m!=="reset"||u.value!==void 0&&u.value!==null))return;u=""+o._wrapperState.initialValue,p||u===o.value||(o.value=u),o.defaultValue=u}p=o.name,p!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,p!==""&&(o.name=p)}function qe(o,u,p){(u!=="number"||Re(o.ownerDocument)!==o)&&(p==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+p&&(o.defaultValue=""+p))}var Ke=Array.isArray;function Bt(o,u,p,m){if(o=o.options,u){u={};for(var g=0;g<p.length;g++)u["$"+p[g]]=!0;for(p=0;p<o.length;p++)g=u.hasOwnProperty("$"+o[p].value),o[p].selected!==g&&(o[p].selected=g),g&&m&&(o[p].defaultSelected=!0)}else{for(p=""+fe(p),u=null,g=0;g<o.length;g++){if(o[g].value===p){o[g].selected=!0,m&&(o[g].defaultSelected=!0);return}u!==null||o[g].disabled||(u=o[g])}u!==null&&(u.selected=!0)}}function vt(o,u){if(u.dangerouslySetInnerHTML!=null)throw Error(n(91));return Y({},u,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function On(o,u){var p=u.value;if(p==null){if(p=u.children,u=u.defaultValue,p!=null){if(u!=null)throw Error(n(92));if(Ke(p)){if(1<p.length)throw Error(n(93));p=p[0]}u=p}u==null&&(u=""),p=u}o._wrapperState={initialValue:fe(p)}}function gt(o,u){var p=fe(u.value),m=fe(u.defaultValue);p!=null&&(p=""+p,p!==o.value&&(o.value=p),u.defaultValue==null&&o.defaultValue!==p&&(o.defaultValue=p)),m!=null&&(o.defaultValue=""+m)}function Kt(o){var u=o.textContent;u===o._wrapperState.initialValue&&u!==""&&u!==null&&(o.value=u)}function xt(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jt(o,u){return o==null||o==="http://www.w3.org/1999/xhtml"?xt(u):o==="http://www.w3.org/2000/svg"&&u==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var pn,Wo=(function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(u,p,m,g){MSApp.execUnsafeLocalFunction(function(){return o(u,p,m,g)})}:o})(function(o,u){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=u;else{for(pn=pn||document.createElement("div"),pn.innerHTML="<svg>"+u.valueOf().toString()+"</svg>",u=pn.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;u.firstChild;)o.appendChild(u.firstChild)}});function ta(o,u){if(u){var p=o.firstChild;if(p&&p===o.lastChild&&p.nodeType===3){p.nodeValue=u;return}}o.textContent=u}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kn=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(o){kn.forEach(function(u){u=u+o.charAt(0).toUpperCase()+o.substring(1),Cn[u]=Cn[o]})});function na(o,u,p){return u==null||typeof u=="boolean"||u===""?"":p||typeof u!="number"||u===0||Cn.hasOwnProperty(o)&&Cn[o]?(""+u).trim():u+"px"}function nu(o,u){o=o.style;for(var p in u)if(u.hasOwnProperty(p)){var m=p.indexOf("--")===0,g=na(p,u[p],m);p==="float"&&(p="cssFloat"),m?o.setProperty(p,g):o[p]=g}}var iO=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function P0(o,u){if(u){if(iO[o]&&(u.children!=null||u.dangerouslySetInnerHTML!=null))throw Error(n(137,o));if(u.dangerouslySetInnerHTML!=null){if(u.children!=null)throw Error(n(60));if(typeof u.dangerouslySetInnerHTML!="object"||!("__html"in u.dangerouslySetInnerHTML))throw Error(n(61))}if(u.style!=null&&typeof u.style!="object")throw Error(n(62))}}function S0(o,u){if(o.indexOf("-")===-1)return typeof u.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W0=null;function A0(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var _0=null,Ao=null,_o=null;function Ib(o){if(o=Pu(o)){if(typeof _0!="function")throw Error(n(280));var u=o.stateNode;u&&(u=Pl(u),_0(o.stateNode,o.type,u))}}function Bb(o){Ao?_o?_o.push(o):_o=[o]:Ao=o}function xb(){if(Ao){var o=Ao,u=_o;if(_o=Ao=null,Ib(o),u)for(o=0;o<u.length;o++)Ib(u[o])}}function wb(o,u){return o(u)}function Pb(){}var M0=!1;function Sb(o,u,p){if(M0)return o(u,p);M0=!0;try{return wb(o,u,p)}finally{M0=!1,(Ao!==null||_o!==null)&&(Pb(),xb())}}function ru(o,u){var p=o.stateNode;if(p===null)return null;var m=Pl(p);if(m===null)return null;p=m[u];e:switch(u){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(m=!m.disabled)||(o=o.type,m=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!m;break e;default:o=!1}if(o)return null;if(p&&typeof p!="function")throw Error(n(231,u,typeof p));return p}var O0=!1;if(l)try{var au={};Object.defineProperty(au,"passive",{get:function(){O0=!0}}),window.addEventListener("test",au,au),window.removeEventListener("test",au,au)}catch{O0=!1}function uO(o,u,p,m,g,B,k,D,q){var te=Array.prototype.slice.call(arguments,3);try{u.apply(p,te)}catch(ie){this.onError(ie)}}var ou=!1,nl=null,rl=!1,C0=null,sO={onError:function(o){ou=!0,nl=o}};function lO(o,u,p,m,g,B,k,D,q){ou=!1,nl=null,uO.apply(sO,arguments)}function pO(o,u,p,m,g,B,k,D,q){if(lO.apply(this,arguments),ou){if(ou){var te=nl;ou=!1,nl=null}else throw Error(n(198));rl||(rl=!0,C0=te)}}function Fa(o){var u=o,p=o;if(o.alternate)for(;u.return;)u=u.return;else{o=u;do u=o,(u.flags&4098)!==0&&(p=u.return),o=u.return;while(o)}return u.tag===3?p:null}function Wb(o){if(o.tag===13){var u=o.memoizedState;if(u===null&&(o=o.alternate,o!==null&&(u=o.memoizedState)),u!==null)return u.dehydrated}return null}function Ab(o){if(Fa(o)!==o)throw Error(n(188))}function cO(o){var u=o.alternate;if(!u){if(u=Fa(o),u===null)throw Error(n(188));return u!==o?null:o}for(var p=o,m=u;;){var g=p.return;if(g===null)break;var B=g.alternate;if(B===null){if(m=g.return,m!==null){p=m;continue}break}if(g.child===B.child){for(B=g.child;B;){if(B===p)return Ab(g),o;if(B===m)return Ab(g),u;B=B.sibling}throw Error(n(188))}if(p.return!==m.return)p=g,m=B;else{for(var k=!1,D=g.child;D;){if(D===p){k=!0,p=g,m=B;break}if(D===m){k=!0,m=g,p=B;break}D=D.sibling}if(!k){for(D=B.child;D;){if(D===p){k=!0,p=B,m=g;break}if(D===m){k=!0,m=B,p=g;break}D=D.sibling}if(!k)throw Error(n(189))}}if(p.alternate!==m)throw Error(n(190))}if(p.tag!==3)throw Error(n(188));return p.stateNode.current===p?o:u}function _b(o){return o=cO(o),o!==null?Mb(o):null}function Mb(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var u=Mb(o);if(u!==null)return u;o=o.sibling}return null}var Ob=t.unstable_scheduleCallback,Cb=t.unstable_cancelCallback,fO=t.unstable_shouldYield,dO=t.unstable_requestPaint,wt=t.unstable_now,hO=t.unstable_getCurrentPriorityLevel,k0=t.unstable_ImmediatePriority,kb=t.unstable_UserBlockingPriority,al=t.unstable_NormalPriority,mO=t.unstable_LowPriority,Nb=t.unstable_IdlePriority,ol=null,fr=null;function vO(o){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(ol,o,void 0,(o.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:bO,gO=Math.log,yO=Math.LN2;function bO(o){return o>>>=0,o===0?32:31-(gO(o)/yO|0)|0}var il=64,ul=4194304;function iu(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function sl(o,u){var p=o.pendingLanes;if(p===0)return 0;var m=0,g=o.suspendedLanes,B=o.pingedLanes,k=p&268435455;if(k!==0){var D=k&~g;D!==0?m=iu(D):(B&=k,B!==0&&(m=iu(B)))}else k=p&~g,k!==0?m=iu(k):B!==0&&(m=iu(B));if(m===0)return 0;if(u!==0&&u!==m&&(u&g)===0&&(g=m&-m,B=u&-u,g>=B||g===16&&(B&4194240)!==0))return u;if((m&4)!==0&&(m|=p&16),u=o.entangledLanes,u!==0)for(o=o.entanglements,u&=m;0<u;)p=31-Yn(u),g=1<<p,m|=o[p],u&=~g;return m}function IO(o,u){switch(o){case 1:case 2:case 4:return u+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BO(o,u){for(var p=o.suspendedLanes,m=o.pingedLanes,g=o.expirationTimes,B=o.pendingLanes;0<B;){var k=31-Yn(B),D=1<<k,q=g[k];q===-1?((D&p)===0||(D&m)!==0)&&(g[k]=IO(D,u)):q<=u&&(o.expiredLanes|=D),B&=~D}}function N0(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Eb(){var o=il;return il<<=1,(il&4194240)===0&&(il=64),o}function E0(o){for(var u=[],p=0;31>p;p++)u.push(o);return u}function uu(o,u,p){o.pendingLanes|=u,u!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,u=31-Yn(u),o[u]=p}function xO(o,u){var p=o.pendingLanes&~u;o.pendingLanes=u,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=u,o.mutableReadLanes&=u,o.entangledLanes&=u,u=o.entanglements;var m=o.eventTimes;for(o=o.expirationTimes;0<p;){var g=31-Yn(p),B=1<<g;u[g]=0,m[g]=-1,o[g]=-1,p&=~B}}function T0(o,u){var p=o.entangledLanes|=u;for(o=o.entanglements;p;){var m=31-Yn(p),g=1<<m;g&u|o[m]&u&&(o[m]|=u),p&=~g}}var Ze=0;function Tb(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var Rb,R0,Hb,jb,Db,H0=!1,ll=[],ra=null,aa=null,oa=null,su=new Map,lu=new Map,ia=[],wO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $b(o,u){switch(o){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":su.delete(u.pointerId);break;case"gotpointercapture":case"lostpointercapture":lu.delete(u.pointerId)}}function pu(o,u,p,m,g,B){return o===null||o.nativeEvent!==B?(o={blockedOn:u,domEventName:p,eventSystemFlags:m,nativeEvent:B,targetContainers:[g]},u!==null&&(u=Pu(u),u!==null&&R0(u)),o):(o.eventSystemFlags|=m,u=o.targetContainers,g!==null&&u.indexOf(g)===-1&&u.push(g),o)}function PO(o,u,p,m,g){switch(u){case"focusin":return ra=pu(ra,o,u,p,m,g),!0;case"dragenter":return aa=pu(aa,o,u,p,m,g),!0;case"mouseover":return oa=pu(oa,o,u,p,m,g),!0;case"pointerover":var B=g.pointerId;return su.set(B,pu(su.get(B)||null,o,u,p,m,g)),!0;case"gotpointercapture":return B=g.pointerId,lu.set(B,pu(lu.get(B)||null,o,u,p,m,g)),!0}return!1}function Lb(o){var u=qa(o.target);if(u!==null){var p=Fa(u);if(p!==null){if(u=p.tag,u===13){if(u=Wb(p),u!==null){o.blockedOn=u,Db(o.priority,function(){Hb(p)});return}}else if(u===3&&p.stateNode.current.memoizedState.isDehydrated){o.blockedOn=p.tag===3?p.stateNode.containerInfo:null;return}}}o.blockedOn=null}function pl(o){if(o.blockedOn!==null)return!1;for(var u=o.targetContainers;0<u.length;){var p=D0(o.domEventName,o.eventSystemFlags,u[0],o.nativeEvent);if(p===null){p=o.nativeEvent;var m=new p.constructor(p.type,p);W0=m,p.target.dispatchEvent(m),W0=null}else return u=Pu(p),u!==null&&R0(u),o.blockedOn=p,!1;u.shift()}return!0}function Fb(o,u,p){pl(o)&&p.delete(u)}function SO(){H0=!1,ra!==null&&pl(ra)&&(ra=null),aa!==null&&pl(aa)&&(aa=null),oa!==null&&pl(oa)&&(oa=null),su.forEach(Fb),lu.forEach(Fb)}function cu(o,u){o.blockedOn===u&&(o.blockedOn=null,H0||(H0=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,SO)))}function fu(o){function u(g){return cu(g,o)}if(0<ll.length){cu(ll[0],o);for(var p=1;p<ll.length;p++){var m=ll[p];m.blockedOn===o&&(m.blockedOn=null)}}for(ra!==null&&cu(ra,o),aa!==null&&cu(aa,o),oa!==null&&cu(oa,o),su.forEach(u),lu.forEach(u),p=0;p<ia.length;p++)m=ia[p],m.blockedOn===o&&(m.blockedOn=null);for(;0<ia.length&&(p=ia[0],p.blockedOn===null);)Lb(p),p.blockedOn===null&&ia.shift()}var Mo=O.ReactCurrentBatchConfig,cl=!0;function WO(o,u,p,m){var g=Ze,B=Mo.transition;Mo.transition=null;try{Ze=1,j0(o,u,p,m)}finally{Ze=g,Mo.transition=B}}function AO(o,u,p,m){var g=Ze,B=Mo.transition;Mo.transition=null;try{Ze=4,j0(o,u,p,m)}finally{Ze=g,Mo.transition=B}}function j0(o,u,p,m){if(cl){var g=D0(o,u,p,m);if(g===null)n2(o,u,m,fl,p),$b(o,m);else if(PO(g,o,u,p,m))m.stopPropagation();else if($b(o,m),u&4&&-1<wO.indexOf(o)){for(;g!==null;){var B=Pu(g);if(B!==null&&Rb(B),B=D0(o,u,p,m),B===null&&n2(o,u,m,fl,p),B===g)break;g=B}g!==null&&m.stopPropagation()}else n2(o,u,m,null,p)}}var fl=null;function D0(o,u,p,m){if(fl=null,o=A0(m),o=qa(o),o!==null)if(u=Fa(o),u===null)o=null;else if(p=u.tag,p===13){if(o=Wb(u),o!==null)return o;o=null}else if(p===3){if(u.stateNode.current.memoizedState.isDehydrated)return u.tag===3?u.stateNode.containerInfo:null;o=null}else u!==o&&(o=null);return fl=o,null}function qb(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hO()){case k0:return 1;case kb:return 4;case al:case mO:return 16;case Nb:return 536870912;default:return 16}default:return 16}}var ua=null,$0=null,dl=null;function zb(){if(dl)return dl;var o,u=$0,p=u.length,m,g="value"in ua?ua.value:ua.textContent,B=g.length;for(o=0;o<p&&u[o]===g[o];o++);var k=p-o;for(m=1;m<=k&&u[p-m]===g[B-m];m++);return dl=g.slice(o,1<m?1-m:void 0)}function hl(o){var u=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&u===13&&(o=13)):o=u,o===10&&(o=13),32<=o||o===13?o:0}function ml(){return!0}function Ub(){return!1}function bn(o){function u(p,m,g,B,k){this._reactName=p,this._targetInst=g,this.type=m,this.nativeEvent=B,this.target=k,this.currentTarget=null;for(var D in o)o.hasOwnProperty(D)&&(p=o[D],this[D]=p?p(B):B[D]);return this.isDefaultPrevented=(B.defaultPrevented!=null?B.defaultPrevented:B.returnValue===!1)?ml:Ub,this.isPropagationStopped=Ub,this}return Y(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var p=this.nativeEvent;p&&(p.preventDefault?p.preventDefault():typeof p.returnValue!="unknown"&&(p.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var p=this.nativeEvent;p&&(p.stopPropagation?p.stopPropagation():typeof p.cancelBubble!="unknown"&&(p.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),u}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},L0=bn(Oo),du=Y({},Oo,{view:0,detail:0}),_O=bn(du),F0,q0,hu,vl=Y({},du,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:U0,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==hu&&(hu&&o.type==="mousemove"?(F0=o.screenX-hu.screenX,q0=o.screenY-hu.screenY):q0=F0=0,hu=o),F0)},movementY:function(o){return"movementY"in o?o.movementY:q0}}),Vb=bn(vl),MO=Y({},vl,{dataTransfer:0}),OO=bn(MO),CO=Y({},du,{relatedTarget:0}),z0=bn(CO),kO=Y({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),NO=bn(kO),EO=Y({},Oo,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),TO=bn(EO),RO=Y({},Oo,{data:0}),Gb=bn(RO),HO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $O(o){var u=this.nativeEvent;return u.getModifierState?u.getModifierState(o):(o=DO[o])?!!u[o]:!1}function U0(){return $O}var LO=Y({},du,{key:function(o){if(o.key){var u=HO[o.key]||o.key;if(u!=="Unidentified")return u}return o.type==="keypress"?(o=hl(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?jO[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:U0,charCode:function(o){return o.type==="keypress"?hl(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?hl(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),FO=bn(LO),qO=Y({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kb=bn(qO),zO=Y({},du,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:U0}),UO=bn(zO),VO=Y({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),GO=bn(VO),KO=Y({},vl,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),QO=bn(KO),YO=[9,13,27,32],V0=l&&"CompositionEvent"in window,mu=null;l&&"documentMode"in document&&(mu=document.documentMode);var XO=l&&"TextEvent"in window&&!mu,Qb=l&&(!V0||mu&&8<mu&&11>=mu),Yb=" ",Xb=!1;function Zb(o,u){switch(o){case"keyup":return YO.indexOf(u.keyCode)!==-1;case"keydown":return u.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jb(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var Co=!1;function ZO(o,u){switch(o){case"compositionend":return Jb(u);case"keypress":return u.which!==32?null:(Xb=!0,Yb);case"textInput":return o=u.data,o===Yb&&Xb?null:o;default:return null}}function JO(o,u){if(Co)return o==="compositionend"||!V0&&Zb(o,u)?(o=zb(),dl=$0=ua=null,Co=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(u.ctrlKey||u.altKey||u.metaKey)||u.ctrlKey&&u.altKey){if(u.char&&1<u.char.length)return u.char;if(u.which)return String.fromCharCode(u.which)}return null;case"compositionend":return Qb&&u.locale!=="ko"?null:u.data;default:return null}}var eC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e1(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u==="input"?!!eC[o.type]:u==="textarea"}function t1(o,u,p,m){Bb(m),u=Bl(u,"onChange"),0<u.length&&(p=new L0("onChange","change",null,p,m),o.push({event:p,listeners:u}))}var vu=null,gu=null;function tC(o){b1(o,0)}function gl(o){var u=Ro(o);if(re(u))return o}function nC(o,u){if(o==="change")return u}var n1=!1;if(l){var G0;if(l){var K0="oninput"in document;if(!K0){var r1=document.createElement("div");r1.setAttribute("oninput","return;"),K0=typeof r1.oninput=="function"}G0=K0}else G0=!1;n1=G0&&(!document.documentMode||9<document.documentMode)}function a1(){vu&&(vu.detachEvent("onpropertychange",o1),gu=vu=null)}function o1(o){if(o.propertyName==="value"&&gl(gu)){var u=[];t1(u,gu,o,A0(o)),Sb(tC,u)}}function rC(o,u,p){o==="focusin"?(a1(),vu=u,gu=p,vu.attachEvent("onpropertychange",o1)):o==="focusout"&&a1()}function aC(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return gl(gu)}function oC(o,u){if(o==="click")return gl(u)}function iC(o,u){if(o==="input"||o==="change")return gl(u)}function uC(o,u){return o===u&&(o!==0||1/o===1/u)||o!==o&&u!==u}var Xn=typeof Object.is=="function"?Object.is:uC;function yu(o,u){if(Xn(o,u))return!0;if(typeof o!="object"||o===null||typeof u!="object"||u===null)return!1;var p=Object.keys(o),m=Object.keys(u);if(p.length!==m.length)return!1;for(m=0;m<p.length;m++){var g=p[m];if(!c.call(u,g)||!Xn(o[g],u[g]))return!1}return!0}function i1(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function u1(o,u){var p=i1(o);o=0;for(var m;p;){if(p.nodeType===3){if(m=o+p.textContent.length,o<=u&&m>=u)return{node:p,offset:u-o};o=m}e:{for(;p;){if(p.nextSibling){p=p.nextSibling;break e}p=p.parentNode}p=void 0}p=i1(p)}}function s1(o,u){return o&&u?o===u?!0:o&&o.nodeType===3?!1:u&&u.nodeType===3?s1(o,u.parentNode):"contains"in o?o.contains(u):o.compareDocumentPosition?!!(o.compareDocumentPosition(u)&16):!1:!1}function l1(){for(var o=window,u=Re();u instanceof o.HTMLIFrameElement;){try{var p=typeof u.contentWindow.location.href=="string"}catch{p=!1}if(p)o=u.contentWindow;else break;u=Re(o.document)}return u}function Q0(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u&&(u==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||u==="textarea"||o.contentEditable==="true")}function sC(o){var u=l1(),p=o.focusedElem,m=o.selectionRange;if(u!==p&&p&&p.ownerDocument&&s1(p.ownerDocument.documentElement,p)){if(m!==null&&Q0(p)){if(u=m.start,o=m.end,o===void 0&&(o=u),"selectionStart"in p)p.selectionStart=u,p.selectionEnd=Math.min(o,p.value.length);else if(o=(u=p.ownerDocument||document)&&u.defaultView||window,o.getSelection){o=o.getSelection();var g=p.textContent.length,B=Math.min(m.start,g);m=m.end===void 0?B:Math.min(m.end,g),!o.extend&&B>m&&(g=m,m=B,B=g),g=u1(p,B);var k=u1(p,m);g&&k&&(o.rangeCount!==1||o.anchorNode!==g.node||o.anchorOffset!==g.offset||o.focusNode!==k.node||o.focusOffset!==k.offset)&&(u=u.createRange(),u.setStart(g.node,g.offset),o.removeAllRanges(),B>m?(o.addRange(u),o.extend(k.node,k.offset)):(u.setEnd(k.node,k.offset),o.addRange(u)))}}for(u=[],o=p;o=o.parentNode;)o.nodeType===1&&u.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<u.length;p++)o=u[p],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var lC=l&&"documentMode"in document&&11>=document.documentMode,ko=null,Y0=null,bu=null,X0=!1;function p1(o,u,p){var m=p.window===p?p.document:p.nodeType===9?p:p.ownerDocument;X0||ko==null||ko!==Re(m)||(m=ko,"selectionStart"in m&&Q0(m)?m={start:m.selectionStart,end:m.selectionEnd}:(m=(m.ownerDocument&&m.ownerDocument.defaultView||window).getSelection(),m={anchorNode:m.anchorNode,anchorOffset:m.anchorOffset,focusNode:m.focusNode,focusOffset:m.focusOffset}),bu&&yu(bu,m)||(bu=m,m=Bl(Y0,"onSelect"),0<m.length&&(u=new L0("onSelect","select",null,u,p),o.push({event:u,listeners:m}),u.target=ko)))}function yl(o,u){var p={};return p[o.toLowerCase()]=u.toLowerCase(),p["Webkit"+o]="webkit"+u,p["Moz"+o]="moz"+u,p}var No={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Z0={},c1={};l&&(c1=document.createElement("div").style,"AnimationEvent"in window||(delete No.animationend.animation,delete No.animationiteration.animation,delete No.animationstart.animation),"TransitionEvent"in window||delete No.transitionend.transition);function bl(o){if(Z0[o])return Z0[o];if(!No[o])return o;var u=No[o],p;for(p in u)if(u.hasOwnProperty(p)&&p in c1)return Z0[o]=u[p];return o}var f1=bl("animationend"),d1=bl("animationiteration"),h1=bl("animationstart"),m1=bl("transitionend"),v1=new Map,g1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sa(o,u){v1.set(o,u),i(u,[o])}for(var J0=0;J0<g1.length;J0++){var e2=g1[J0],pC=e2.toLowerCase(),cC=e2[0].toUpperCase()+e2.slice(1);sa(pC,"on"+cC)}sa(f1,"onAnimationEnd"),sa(d1,"onAnimationIteration"),sa(h1,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa(m1,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Iu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Iu));function y1(o,u,p){var m=o.type||"unknown-event";o.currentTarget=p,pO(m,u,void 0,o),o.currentTarget=null}function b1(o,u){u=(u&4)!==0;for(var p=0;p<o.length;p++){var m=o[p],g=m.event;m=m.listeners;e:{var B=void 0;if(u)for(var k=m.length-1;0<=k;k--){var D=m[k],q=D.instance,te=D.currentTarget;if(D=D.listener,q!==B&&g.isPropagationStopped())break e;y1(g,D,te),B=q}else for(k=0;k<m.length;k++){if(D=m[k],q=D.instance,te=D.currentTarget,D=D.listener,q!==B&&g.isPropagationStopped())break e;y1(g,D,te),B=q}}}if(rl)throw o=C0,rl=!1,C0=null,o}function it(o,u){var p=u[s2];p===void 0&&(p=u[s2]=new Set);var m=o+"__bubble";p.has(m)||(I1(u,o,2,!1),p.add(m))}function t2(o,u,p){var m=0;u&&(m|=4),I1(p,o,m,u)}var Il="_reactListening"+Math.random().toString(36).slice(2);function Bu(o){if(!o[Il]){o[Il]=!0,r.forEach(function(p){p!=="selectionchange"&&(fC.has(p)||t2(p,!1,o),t2(p,!0,o))});var u=o.nodeType===9?o:o.ownerDocument;u===null||u[Il]||(u[Il]=!0,t2("selectionchange",!1,u))}}function I1(o,u,p,m){switch(qb(u)){case 1:var g=WO;break;case 4:g=AO;break;default:g=j0}p=g.bind(null,u,p,o),g=void 0,!O0||u!=="touchstart"&&u!=="touchmove"&&u!=="wheel"||(g=!0),m?g!==void 0?o.addEventListener(u,p,{capture:!0,passive:g}):o.addEventListener(u,p,!0):g!==void 0?o.addEventListener(u,p,{passive:g}):o.addEventListener(u,p,!1)}function n2(o,u,p,m,g){var B=m;if((u&1)===0&&(u&2)===0&&m!==null)e:for(;;){if(m===null)return;var k=m.tag;if(k===3||k===4){var D=m.stateNode.containerInfo;if(D===g||D.nodeType===8&&D.parentNode===g)break;if(k===4)for(k=m.return;k!==null;){var q=k.tag;if((q===3||q===4)&&(q=k.stateNode.containerInfo,q===g||q.nodeType===8&&q.parentNode===g))return;k=k.return}for(;D!==null;){if(k=qa(D),k===null)return;if(q=k.tag,q===5||q===6){m=B=k;continue e}D=D.parentNode}}m=m.return}Sb(function(){var te=B,ie=A0(p),se=[];e:{var oe=v1.get(o);if(oe!==void 0){var me=L0,Be=o;switch(o){case"keypress":if(hl(p)===0)break e;case"keydown":case"keyup":me=FO;break;case"focusin":Be="focus",me=z0;break;case"focusout":Be="blur",me=z0;break;case"beforeblur":case"afterblur":me=z0;break;case"click":if(p.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Vb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=OO;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=UO;break;case f1:case d1:case h1:me=NO;break;case m1:me=GO;break;case"scroll":me=_O;break;case"wheel":me=QO;break;case"copy":case"cut":case"paste":me=TO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Kb}var Se=(u&4)!==0,Pt=!Se&&o==="scroll",Z=Se?oe!==null?oe+"Capture":null:oe;Se=[];for(var U=te,ee;U!==null;){ee=U;var pe=ee.stateNode;if(ee.tag===5&&pe!==null&&(ee=pe,Z!==null&&(pe=ru(U,Z),pe!=null&&Se.push(xu(U,pe,ee)))),Pt)break;U=U.return}0<Se.length&&(oe=new me(oe,Be,null,p,ie),se.push({event:oe,listeners:Se}))}}if((u&7)===0){e:{if(oe=o==="mouseover"||o==="pointerover",me=o==="mouseout"||o==="pointerout",oe&&p!==W0&&(Be=p.relatedTarget||p.fromElement)&&(qa(Be)||Be[_r]))break e;if((me||oe)&&(oe=ie.window===ie?ie:(oe=ie.ownerDocument)?oe.defaultView||oe.parentWindow:window,me?(Be=p.relatedTarget||p.toElement,me=te,Be=Be?qa(Be):null,Be!==null&&(Pt=Fa(Be),Be!==Pt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(me=null,Be=te),me!==Be)){if(Se=Vb,pe="onMouseLeave",Z="onMouseEnter",U="mouse",(o==="pointerout"||o==="pointerover")&&(Se=Kb,pe="onPointerLeave",Z="onPointerEnter",U="pointer"),Pt=me==null?oe:Ro(me),ee=Be==null?oe:Ro(Be),oe=new Se(pe,U+"leave",me,p,ie),oe.target=Pt,oe.relatedTarget=ee,pe=null,qa(ie)===te&&(Se=new Se(Z,U+"enter",Be,p,ie),Se.target=ee,Se.relatedTarget=Pt,pe=Se),Pt=pe,me&&Be)t:{for(Se=me,Z=Be,U=0,ee=Se;ee;ee=Eo(ee))U++;for(ee=0,pe=Z;pe;pe=Eo(pe))ee++;for(;0<U-ee;)Se=Eo(Se),U--;for(;0<ee-U;)Z=Eo(Z),ee--;for(;U--;){if(Se===Z||Z!==null&&Se===Z.alternate)break t;Se=Eo(Se),Z=Eo(Z)}Se=null}else Se=null;me!==null&&B1(se,oe,me,Se,!1),Be!==null&&Pt!==null&&B1(se,Pt,Be,Se,!0)}}e:{if(oe=te?Ro(te):window,me=oe.nodeName&&oe.nodeName.toLowerCase(),me==="select"||me==="input"&&oe.type==="file")var _e=nC;else if(e1(oe))if(n1)_e=iC;else{_e=aC;var Me=rC}else(me=oe.nodeName)&&me.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(_e=oC);if(_e&&(_e=_e(o,te))){t1(se,_e,p,ie);break e}Me&&Me(o,oe,te),o==="focusout"&&(Me=oe._wrapperState)&&Me.controlled&&oe.type==="number"&&qe(oe,"number",oe.value)}switch(Me=te?Ro(te):window,o){case"focusin":(e1(Me)||Me.contentEditable==="true")&&(ko=Me,Y0=te,bu=null);break;case"focusout":bu=Y0=ko=null;break;case"mousedown":X0=!0;break;case"contextmenu":case"mouseup":case"dragend":X0=!1,p1(se,p,ie);break;case"selectionchange":if(lC)break;case"keydown":case"keyup":p1(se,p,ie)}var Oe;if(V0)e:{switch(o){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Co?Zb(o,p)&&(Te="onCompositionEnd"):o==="keydown"&&p.keyCode===229&&(Te="onCompositionStart");Te&&(Qb&&p.locale!=="ko"&&(Co||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Co&&(Oe=zb()):(ua=ie,$0="value"in ua?ua.value:ua.textContent,Co=!0)),Me=Bl(te,Te),0<Me.length&&(Te=new Gb(Te,o,null,p,ie),se.push({event:Te,listeners:Me}),Oe?Te.data=Oe:(Oe=Jb(p),Oe!==null&&(Te.data=Oe)))),(Oe=XO?ZO(o,p):JO(o,p))&&(te=Bl(te,"onBeforeInput"),0<te.length&&(ie=new Gb("onBeforeInput","beforeinput",null,p,ie),se.push({event:ie,listeners:te}),ie.data=Oe))}b1(se,u)})}function xu(o,u,p){return{instance:o,listener:u,currentTarget:p}}function Bl(o,u){for(var p=u+"Capture",m=[];o!==null;){var g=o,B=g.stateNode;g.tag===5&&B!==null&&(g=B,B=ru(o,p),B!=null&&m.unshift(xu(o,B,g)),B=ru(o,u),B!=null&&m.push(xu(o,B,g))),o=o.return}return m}function Eo(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function B1(o,u,p,m,g){for(var B=u._reactName,k=[];p!==null&&p!==m;){var D=p,q=D.alternate,te=D.stateNode;if(q!==null&&q===m)break;D.tag===5&&te!==null&&(D=te,g?(q=ru(p,B),q!=null&&k.unshift(xu(p,q,D))):g||(q=ru(p,B),q!=null&&k.push(xu(p,q,D)))),p=p.return}k.length!==0&&o.push({event:u,listeners:k})}var dC=/\r\n?/g,hC=/\u0000|\uFFFD/g;function x1(o){return(typeof o=="string"?o:""+o).replace(dC,`
`).replace(hC,"")}function xl(o,u,p){if(u=x1(u),x1(o)!==u&&p)throw Error(n(425))}function wl(){}var r2=null,a2=null;function o2(o,u){return o==="textarea"||o==="noscript"||typeof u.children=="string"||typeof u.children=="number"||typeof u.dangerouslySetInnerHTML=="object"&&u.dangerouslySetInnerHTML!==null&&u.dangerouslySetInnerHTML.__html!=null}var i2=typeof setTimeout=="function"?setTimeout:void 0,mC=typeof clearTimeout=="function"?clearTimeout:void 0,w1=typeof Promise=="function"?Promise:void 0,vC=typeof queueMicrotask=="function"?queueMicrotask:typeof w1<"u"?function(o){return w1.resolve(null).then(o).catch(gC)}:i2;function gC(o){setTimeout(function(){throw o})}function u2(o,u){var p=u,m=0;do{var g=p.nextSibling;if(o.removeChild(p),g&&g.nodeType===8)if(p=g.data,p==="/$"){if(m===0){o.removeChild(g),fu(u);return}m--}else p!=="$"&&p!=="$?"&&p!=="$!"||m++;p=g}while(p);fu(u)}function la(o){for(;o!=null;o=o.nextSibling){var u=o.nodeType;if(u===1||u===3)break;if(u===8){if(u=o.data,u==="$"||u==="$!"||u==="$?")break;if(u==="/$")return null}}return o}function P1(o){o=o.previousSibling;for(var u=0;o;){if(o.nodeType===8){var p=o.data;if(p==="$"||p==="$!"||p==="$?"){if(u===0)return o;u--}else p==="/$"&&u++}o=o.previousSibling}return null}var To=Math.random().toString(36).slice(2),dr="__reactFiber$"+To,wu="__reactProps$"+To,_r="__reactContainer$"+To,s2="__reactEvents$"+To,yC="__reactListeners$"+To,bC="__reactHandles$"+To;function qa(o){var u=o[dr];if(u)return u;for(var p=o.parentNode;p;){if(u=p[_r]||p[dr]){if(p=u.alternate,u.child!==null||p!==null&&p.child!==null)for(o=P1(o);o!==null;){if(p=o[dr])return p;o=P1(o)}return u}o=p,p=o.parentNode}return null}function Pu(o){return o=o[dr]||o[_r],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function Ro(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(n(33))}function Pl(o){return o[wu]||null}var l2=[],Ho=-1;function pa(o){return{current:o}}function ut(o){0>Ho||(o.current=l2[Ho],l2[Ho]=null,Ho--)}function nt(o,u){Ho++,l2[Ho]=o.current,o.current=u}var ca={},Qt=pa(ca),cn=pa(!1),za=ca;function jo(o,u){var p=o.type.contextTypes;if(!p)return ca;var m=o.stateNode;if(m&&m.__reactInternalMemoizedUnmaskedChildContext===u)return m.__reactInternalMemoizedMaskedChildContext;var g={},B;for(B in p)g[B]=u[B];return m&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=u,o.__reactInternalMemoizedMaskedChildContext=g),g}function fn(o){return o=o.childContextTypes,o!=null}function Sl(){ut(cn),ut(Qt)}function S1(o,u,p){if(Qt.current!==ca)throw Error(n(168));nt(Qt,u),nt(cn,p)}function W1(o,u,p){var m=o.stateNode;if(u=u.childContextTypes,typeof m.getChildContext!="function")return p;m=m.getChildContext();for(var g in m)if(!(g in u))throw Error(n(108,ye(o)||"Unknown",g));return Y({},p,m)}function Wl(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||ca,za=Qt.current,nt(Qt,o),nt(cn,cn.current),!0}function A1(o,u,p){var m=o.stateNode;if(!m)throw Error(n(169));p?(o=W1(o,u,za),m.__reactInternalMemoizedMergedChildContext=o,ut(cn),ut(Qt),nt(Qt,o)):ut(cn),nt(cn,p)}var Mr=null,Al=!1,p2=!1;function _1(o){Mr===null?Mr=[o]:Mr.push(o)}function IC(o){Al=!0,_1(o)}function fa(){if(!p2&&Mr!==null){p2=!0;var o=0,u=Ze;try{var p=Mr;for(Ze=1;o<p.length;o++){var m=p[o];do m=m(!0);while(m!==null)}Mr=null,Al=!1}catch(g){throw Mr!==null&&(Mr=Mr.slice(o+1)),Ob(k0,fa),g}finally{Ze=u,p2=!1}}return null}var Do=[],$o=0,_l=null,Ml=0,Nn=[],En=0,Ua=null,Or=1,Cr="";function Va(o,u){Do[$o++]=Ml,Do[$o++]=_l,_l=o,Ml=u}function M1(o,u,p){Nn[En++]=Or,Nn[En++]=Cr,Nn[En++]=Ua,Ua=o;var m=Or;o=Cr;var g=32-Yn(m)-1;m&=~(1<<g),p+=1;var B=32-Yn(u)+g;if(30<B){var k=g-g%5;B=(m&(1<<k)-1).toString(32),m>>=k,g-=k,Or=1<<32-Yn(u)+g|p<<g|m,Cr=B+o}else Or=1<<B|p<<g|m,Cr=o}function c2(o){o.return!==null&&(Va(o,1),M1(o,1,0))}function f2(o){for(;o===_l;)_l=Do[--$o],Do[$o]=null,Ml=Do[--$o],Do[$o]=null;for(;o===Ua;)Ua=Nn[--En],Nn[En]=null,Cr=Nn[--En],Nn[En]=null,Or=Nn[--En],Nn[En]=null}var In=null,Bn=null,pt=!1,Zn=null;function O1(o,u){var p=jn(5,null,null,0);p.elementType="DELETED",p.stateNode=u,p.return=o,u=o.deletions,u===null?(o.deletions=[p],o.flags|=16):u.push(p)}function C1(o,u){switch(o.tag){case 5:var p=o.type;return u=u.nodeType!==1||p.toLowerCase()!==u.nodeName.toLowerCase()?null:u,u!==null?(o.stateNode=u,In=o,Bn=la(u.firstChild),!0):!1;case 6:return u=o.pendingProps===""||u.nodeType!==3?null:u,u!==null?(o.stateNode=u,In=o,Bn=null,!0):!1;case 13:return u=u.nodeType!==8?null:u,u!==null?(p=Ua!==null?{id:Or,overflow:Cr}:null,o.memoizedState={dehydrated:u,treeContext:p,retryLane:1073741824},p=jn(18,null,null,0),p.stateNode=u,p.return=o,o.child=p,In=o,Bn=null,!0):!1;default:return!1}}function d2(o){return(o.mode&1)!==0&&(o.flags&128)===0}function h2(o){if(pt){var u=Bn;if(u){var p=u;if(!C1(o,u)){if(d2(o))throw Error(n(418));u=la(p.nextSibling);var m=In;u&&C1(o,u)?O1(m,p):(o.flags=o.flags&-4097|2,pt=!1,In=o)}}else{if(d2(o))throw Error(n(418));o.flags=o.flags&-4097|2,pt=!1,In=o}}}function k1(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;In=o}function Ol(o){if(o!==In)return!1;if(!pt)return k1(o),pt=!0,!1;var u;if((u=o.tag!==3)&&!(u=o.tag!==5)&&(u=o.type,u=u!=="head"&&u!=="body"&&!o2(o.type,o.memoizedProps)),u&&(u=Bn)){if(d2(o))throw N1(),Error(n(418));for(;u;)O1(o,u),u=la(u.nextSibling)}if(k1(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(n(317));e:{for(o=o.nextSibling,u=0;o;){if(o.nodeType===8){var p=o.data;if(p==="/$"){if(u===0){Bn=la(o.nextSibling);break e}u--}else p!=="$"&&p!=="$!"&&p!=="$?"||u++}o=o.nextSibling}Bn=null}}else Bn=In?la(o.stateNode.nextSibling):null;return!0}function N1(){for(var o=Bn;o;)o=la(o.nextSibling)}function Lo(){Bn=In=null,pt=!1}function m2(o){Zn===null?Zn=[o]:Zn.push(o)}var BC=O.ReactCurrentBatchConfig;function Su(o,u,p){if(o=p.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(p._owner){if(p=p._owner,p){if(p.tag!==1)throw Error(n(309));var m=p.stateNode}if(!m)throw Error(n(147,o));var g=m,B=""+o;return u!==null&&u.ref!==null&&typeof u.ref=="function"&&u.ref._stringRef===B?u.ref:(u=function(k){var D=g.refs;k===null?delete D[B]:D[B]=k},u._stringRef=B,u)}if(typeof o!="string")throw Error(n(284));if(!p._owner)throw Error(n(290,o))}return o}function Cl(o,u){throw o=Object.prototype.toString.call(u),Error(n(31,o==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":o))}function E1(o){var u=o._init;return u(o._payload)}function T1(o){function u(Z,U){if(o){var ee=Z.deletions;ee===null?(Z.deletions=[U],Z.flags|=16):ee.push(U)}}function p(Z,U){if(!o)return null;for(;U!==null;)u(Z,U),U=U.sibling;return null}function m(Z,U){for(Z=new Map;U!==null;)U.key!==null?Z.set(U.key,U):Z.set(U.index,U),U=U.sibling;return Z}function g(Z,U){return Z=Ia(Z,U),Z.index=0,Z.sibling=null,Z}function B(Z,U,ee){return Z.index=ee,o?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<U?(Z.flags|=2,U):ee):(Z.flags|=2,U)):(Z.flags|=1048576,U)}function k(Z){return o&&Z.alternate===null&&(Z.flags|=2),Z}function D(Z,U,ee,pe){return U===null||U.tag!==6?(U=uf(ee,Z.mode,pe),U.return=Z,U):(U=g(U,ee),U.return=Z,U)}function q(Z,U,ee,pe){var _e=ee.type;return _e===N?ie(Z,U,ee.props.children,pe,ee.key):U!==null&&(U.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===z&&E1(_e)===U.type)?(pe=g(U,ee.props),pe.ref=Su(Z,U,ee),pe.return=Z,pe):(pe=tp(ee.type,ee.key,ee.props,null,Z.mode,pe),pe.ref=Su(Z,U,ee),pe.return=Z,pe)}function te(Z,U,ee,pe){return U===null||U.tag!==4||U.stateNode.containerInfo!==ee.containerInfo||U.stateNode.implementation!==ee.implementation?(U=sf(ee,Z.mode,pe),U.return=Z,U):(U=g(U,ee.children||[]),U.return=Z,U)}function ie(Z,U,ee,pe,_e){return U===null||U.tag!==7?(U=eo(ee,Z.mode,pe,_e),U.return=Z,U):(U=g(U,ee),U.return=Z,U)}function se(Z,U,ee){if(typeof U=="string"&&U!==""||typeof U=="number")return U=uf(""+U,Z.mode,ee),U.return=Z,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case w:return ee=tp(U.type,U.key,U.props,null,Z.mode,ee),ee.ref=Su(Z,null,U),ee.return=Z,ee;case _:return U=sf(U,Z.mode,ee),U.return=Z,U;case z:var pe=U._init;return se(Z,pe(U._payload),ee)}if(Ke(U)||K(U))return U=eo(U,Z.mode,ee,null),U.return=Z,U;Cl(Z,U)}return null}function oe(Z,U,ee,pe){var _e=U!==null?U.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return _e!==null?null:D(Z,U,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return ee.key===_e?q(Z,U,ee,pe):null;case _:return ee.key===_e?te(Z,U,ee,pe):null;case z:return _e=ee._init,oe(Z,U,_e(ee._payload),pe)}if(Ke(ee)||K(ee))return _e!==null?null:ie(Z,U,ee,pe,null);Cl(Z,ee)}return null}function me(Z,U,ee,pe,_e){if(typeof pe=="string"&&pe!==""||typeof pe=="number")return Z=Z.get(ee)||null,D(U,Z,""+pe,_e);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case w:return Z=Z.get(pe.key===null?ee:pe.key)||null,q(U,Z,pe,_e);case _:return Z=Z.get(pe.key===null?ee:pe.key)||null,te(U,Z,pe,_e);case z:var Me=pe._init;return me(Z,U,ee,Me(pe._payload),_e)}if(Ke(pe)||K(pe))return Z=Z.get(ee)||null,ie(U,Z,pe,_e,null);Cl(U,pe)}return null}function Be(Z,U,ee,pe){for(var _e=null,Me=null,Oe=U,Te=U=0,Lt=null;Oe!==null&&Te<ee.length;Te++){Oe.index>Te?(Lt=Oe,Oe=null):Lt=Oe.sibling;var Ue=oe(Z,Oe,ee[Te],pe);if(Ue===null){Oe===null&&(Oe=Lt);break}o&&Oe&&Ue.alternate===null&&u(Z,Oe),U=B(Ue,U,Te),Me===null?_e=Ue:Me.sibling=Ue,Me=Ue,Oe=Lt}if(Te===ee.length)return p(Z,Oe),pt&&Va(Z,Te),_e;if(Oe===null){for(;Te<ee.length;Te++)Oe=se(Z,ee[Te],pe),Oe!==null&&(U=B(Oe,U,Te),Me===null?_e=Oe:Me.sibling=Oe,Me=Oe);return pt&&Va(Z,Te),_e}for(Oe=m(Z,Oe);Te<ee.length;Te++)Lt=me(Oe,Z,Te,ee[Te],pe),Lt!==null&&(o&&Lt.alternate!==null&&Oe.delete(Lt.key===null?Te:Lt.key),U=B(Lt,U,Te),Me===null?_e=Lt:Me.sibling=Lt,Me=Lt);return o&&Oe.forEach(function(Ba){return u(Z,Ba)}),pt&&Va(Z,Te),_e}function Se(Z,U,ee,pe){var _e=K(ee);if(typeof _e!="function")throw Error(n(150));if(ee=_e.call(ee),ee==null)throw Error(n(151));for(var Me=_e=null,Oe=U,Te=U=0,Lt=null,Ue=ee.next();Oe!==null&&!Ue.done;Te++,Ue=ee.next()){Oe.index>Te?(Lt=Oe,Oe=null):Lt=Oe.sibling;var Ba=oe(Z,Oe,Ue.value,pe);if(Ba===null){Oe===null&&(Oe=Lt);break}o&&Oe&&Ba.alternate===null&&u(Z,Oe),U=B(Ba,U,Te),Me===null?_e=Ba:Me.sibling=Ba,Me=Ba,Oe=Lt}if(Ue.done)return p(Z,Oe),pt&&Va(Z,Te),_e;if(Oe===null){for(;!Ue.done;Te++,Ue=ee.next())Ue=se(Z,Ue.value,pe),Ue!==null&&(U=B(Ue,U,Te),Me===null?_e=Ue:Me.sibling=Ue,Me=Ue);return pt&&Va(Z,Te),_e}for(Oe=m(Z,Oe);!Ue.done;Te++,Ue=ee.next())Ue=me(Oe,Z,Te,Ue.value,pe),Ue!==null&&(o&&Ue.alternate!==null&&Oe.delete(Ue.key===null?Te:Ue.key),U=B(Ue,U,Te),Me===null?_e=Ue:Me.sibling=Ue,Me=Ue);return o&&Oe.forEach(function(ek){return u(Z,ek)}),pt&&Va(Z,Te),_e}function Pt(Z,U,ee,pe){if(typeof ee=="object"&&ee!==null&&ee.type===N&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:e:{for(var _e=ee.key,Me=U;Me!==null;){if(Me.key===_e){if(_e=ee.type,_e===N){if(Me.tag===7){p(Z,Me.sibling),U=g(Me,ee.props.children),U.return=Z,Z=U;break e}}else if(Me.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===z&&E1(_e)===Me.type){p(Z,Me.sibling),U=g(Me,ee.props),U.ref=Su(Z,Me,ee),U.return=Z,Z=U;break e}p(Z,Me);break}else u(Z,Me);Me=Me.sibling}ee.type===N?(U=eo(ee.props.children,Z.mode,pe,ee.key),U.return=Z,Z=U):(pe=tp(ee.type,ee.key,ee.props,null,Z.mode,pe),pe.ref=Su(Z,U,ee),pe.return=Z,Z=pe)}return k(Z);case _:e:{for(Me=ee.key;U!==null;){if(U.key===Me)if(U.tag===4&&U.stateNode.containerInfo===ee.containerInfo&&U.stateNode.implementation===ee.implementation){p(Z,U.sibling),U=g(U,ee.children||[]),U.return=Z,Z=U;break e}else{p(Z,U);break}else u(Z,U);U=U.sibling}U=sf(ee,Z.mode,pe),U.return=Z,Z=U}return k(Z);case z:return Me=ee._init,Pt(Z,U,Me(ee._payload),pe)}if(Ke(ee))return Be(Z,U,ee,pe);if(K(ee))return Se(Z,U,ee,pe);Cl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,U!==null&&U.tag===6?(p(Z,U.sibling),U=g(U,ee),U.return=Z,Z=U):(p(Z,U),U=uf(ee,Z.mode,pe),U.return=Z,Z=U),k(Z)):p(Z,U)}return Pt}var Fo=T1(!0),R1=T1(!1),kl=pa(null),Nl=null,qo=null,v2=null;function g2(){v2=qo=Nl=null}function y2(o){var u=kl.current;ut(kl),o._currentValue=u}function b2(o,u,p){for(;o!==null;){var m=o.alternate;if((o.childLanes&u)!==u?(o.childLanes|=u,m!==null&&(m.childLanes|=u)):m!==null&&(m.childLanes&u)!==u&&(m.childLanes|=u),o===p)break;o=o.return}}function zo(o,u){Nl=o,v2=qo=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&u)!==0&&(dn=!0),o.firstContext=null)}function Tn(o){var u=o._currentValue;if(v2!==o)if(o={context:o,memoizedValue:u,next:null},qo===null){if(Nl===null)throw Error(n(308));qo=o,Nl.dependencies={lanes:0,firstContext:o}}else qo=qo.next=o;return u}var Ga=null;function I2(o){Ga===null?Ga=[o]:Ga.push(o)}function H1(o,u,p,m){var g=u.interleaved;return g===null?(p.next=p,I2(u)):(p.next=g.next,g.next=p),u.interleaved=p,kr(o,m)}function kr(o,u){o.lanes|=u;var p=o.alternate;for(p!==null&&(p.lanes|=u),p=o,o=o.return;o!==null;)o.childLanes|=u,p=o.alternate,p!==null&&(p.childLanes|=u),p=o,o=o.return;return p.tag===3?p.stateNode:null}var da=!1;function B2(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j1(o,u){o=o.updateQueue,u.updateQueue===o&&(u.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Nr(o,u){return{eventTime:o,lane:u,tag:0,payload:null,callback:null,next:null}}function ha(o,u,p){var m=o.updateQueue;if(m===null)return null;if(m=m.shared,(ze&2)!==0){var g=m.pending;return g===null?u.next=u:(u.next=g.next,g.next=u),m.pending=u,kr(o,p)}return g=m.interleaved,g===null?(u.next=u,I2(m)):(u.next=g.next,g.next=u),m.interleaved=u,kr(o,p)}function El(o,u,p){if(u=u.updateQueue,u!==null&&(u=u.shared,(p&4194240)!==0)){var m=u.lanes;m&=o.pendingLanes,p|=m,u.lanes=p,T0(o,p)}}function D1(o,u){var p=o.updateQueue,m=o.alternate;if(m!==null&&(m=m.updateQueue,p===m)){var g=null,B=null;if(p=p.firstBaseUpdate,p!==null){do{var k={eventTime:p.eventTime,lane:p.lane,tag:p.tag,payload:p.payload,callback:p.callback,next:null};B===null?g=B=k:B=B.next=k,p=p.next}while(p!==null);B===null?g=B=u:B=B.next=u}else g=B=u;p={baseState:m.baseState,firstBaseUpdate:g,lastBaseUpdate:B,shared:m.shared,effects:m.effects},o.updateQueue=p;return}o=p.lastBaseUpdate,o===null?p.firstBaseUpdate=u:o.next=u,p.lastBaseUpdate=u}function Tl(o,u,p,m){var g=o.updateQueue;da=!1;var B=g.firstBaseUpdate,k=g.lastBaseUpdate,D=g.shared.pending;if(D!==null){g.shared.pending=null;var q=D,te=q.next;q.next=null,k===null?B=te:k.next=te,k=q;var ie=o.alternate;ie!==null&&(ie=ie.updateQueue,D=ie.lastBaseUpdate,D!==k&&(D===null?ie.firstBaseUpdate=te:D.next=te,ie.lastBaseUpdate=q))}if(B!==null){var se=g.baseState;k=0,ie=te=q=null,D=B;do{var oe=D.lane,me=D.eventTime;if((m&oe)===oe){ie!==null&&(ie=ie.next={eventTime:me,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Be=o,Se=D;switch(oe=u,me=p,Se.tag){case 1:if(Be=Se.payload,typeof Be=="function"){se=Be.call(me,se,oe);break e}se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Se.payload,oe=typeof Be=="function"?Be.call(me,se,oe):Be,oe==null)break e;se=Y({},se,oe);break e;case 2:da=!0}}D.callback!==null&&D.lane!==0&&(o.flags|=64,oe=g.effects,oe===null?g.effects=[D]:oe.push(D))}else me={eventTime:me,lane:oe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ie===null?(te=ie=me,q=se):ie=ie.next=me,k|=oe;if(D=D.next,D===null){if(D=g.shared.pending,D===null)break;oe=D,D=oe.next,oe.next=null,g.lastBaseUpdate=oe,g.shared.pending=null}}while(!0);if(ie===null&&(q=se),g.baseState=q,g.firstBaseUpdate=te,g.lastBaseUpdate=ie,u=g.shared.interleaved,u!==null){g=u;do k|=g.lane,g=g.next;while(g!==u)}else B===null&&(g.shared.lanes=0);Ya|=k,o.lanes=k,o.memoizedState=se}}function $1(o,u,p){if(o=u.effects,u.effects=null,o!==null)for(u=0;u<o.length;u++){var m=o[u],g=m.callback;if(g!==null){if(m.callback=null,m=p,typeof g!="function")throw Error(n(191,g));g.call(m)}}}var Wu={},hr=pa(Wu),Au=pa(Wu),_u=pa(Wu);function Ka(o){if(o===Wu)throw Error(n(174));return o}function x2(o,u){switch(nt(_u,u),nt(Au,o),nt(hr,Wu),o=u.nodeType,o){case 9:case 11:u=(u=u.documentElement)?u.namespaceURI:jt(null,"");break;default:o=o===8?u.parentNode:u,u=o.namespaceURI||null,o=o.tagName,u=jt(u,o)}ut(hr),nt(hr,u)}function Uo(){ut(hr),ut(Au),ut(_u)}function L1(o){Ka(_u.current);var u=Ka(hr.current),p=jt(u,o.type);u!==p&&(nt(Au,o),nt(hr,p))}function w2(o){Au.current===o&&(ut(hr),ut(Au))}var ft=pa(0);function Rl(o){for(var u=o;u!==null;){if(u.tag===13){var p=u.memoizedState;if(p!==null&&(p=p.dehydrated,p===null||p.data==="$?"||p.data==="$!"))return u}else if(u.tag===19&&u.memoizedProps.revealOrder!==void 0){if((u.flags&128)!==0)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var P2=[];function S2(){for(var o=0;o<P2.length;o++)P2[o]._workInProgressVersionPrimary=null;P2.length=0}var Hl=O.ReactCurrentDispatcher,W2=O.ReactCurrentBatchConfig,Qa=0,dt=null,kt=null,Dt=null,jl=!1,Mu=!1,Ou=0,xC=0;function Yt(){throw Error(n(321))}function A2(o,u){if(u===null)return!1;for(var p=0;p<u.length&&p<o.length;p++)if(!Xn(o[p],u[p]))return!1;return!0}function _2(o,u,p,m,g,B){if(Qa=B,dt=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,Hl.current=o===null||o.memoizedState===null?WC:AC,o=p(m,g),Mu){B=0;do{if(Mu=!1,Ou=0,25<=B)throw Error(n(301));B+=1,Dt=kt=null,u.updateQueue=null,Hl.current=_C,o=p(m,g)}while(Mu)}if(Hl.current=Ll,u=kt!==null&&kt.next!==null,Qa=0,Dt=kt=dt=null,jl=!1,u)throw Error(n(300));return o}function M2(){var o=Ou!==0;return Ou=0,o}function mr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?dt.memoizedState=Dt=o:Dt=Dt.next=o,Dt}function Rn(){if(kt===null){var o=dt.alternate;o=o!==null?o.memoizedState:null}else o=kt.next;var u=Dt===null?dt.memoizedState:Dt.next;if(u!==null)Dt=u,kt=o;else{if(o===null)throw Error(n(310));kt=o,o={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Dt===null?dt.memoizedState=Dt=o:Dt=Dt.next=o}return Dt}function Cu(o,u){return typeof u=="function"?u(o):u}function O2(o){var u=Rn(),p=u.queue;if(p===null)throw Error(n(311));p.lastRenderedReducer=o;var m=kt,g=m.baseQueue,B=p.pending;if(B!==null){if(g!==null){var k=g.next;g.next=B.next,B.next=k}m.baseQueue=g=B,p.pending=null}if(g!==null){B=g.next,m=m.baseState;var D=k=null,q=null,te=B;do{var ie=te.lane;if((Qa&ie)===ie)q!==null&&(q=q.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),m=te.hasEagerState?te.eagerState:o(m,te.action);else{var se={lane:ie,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};q===null?(D=q=se,k=m):q=q.next=se,dt.lanes|=ie,Ya|=ie}te=te.next}while(te!==null&&te!==B);q===null?k=m:q.next=D,Xn(m,u.memoizedState)||(dn=!0),u.memoizedState=m,u.baseState=k,u.baseQueue=q,p.lastRenderedState=m}if(o=p.interleaved,o!==null){g=o;do B=g.lane,dt.lanes|=B,Ya|=B,g=g.next;while(g!==o)}else g===null&&(p.lanes=0);return[u.memoizedState,p.dispatch]}function C2(o){var u=Rn(),p=u.queue;if(p===null)throw Error(n(311));p.lastRenderedReducer=o;var m=p.dispatch,g=p.pending,B=u.memoizedState;if(g!==null){p.pending=null;var k=g=g.next;do B=o(B,k.action),k=k.next;while(k!==g);Xn(B,u.memoizedState)||(dn=!0),u.memoizedState=B,u.baseQueue===null&&(u.baseState=B),p.lastRenderedState=B}return[B,m]}function F1(){}function q1(o,u){var p=dt,m=Rn(),g=u(),B=!Xn(m.memoizedState,g);if(B&&(m.memoizedState=g,dn=!0),m=m.queue,k2(V1.bind(null,p,m,o),[o]),m.getSnapshot!==u||B||Dt!==null&&Dt.memoizedState.tag&1){if(p.flags|=2048,ku(9,U1.bind(null,p,m,g,u),void 0,null),$t===null)throw Error(n(349));(Qa&30)!==0||z1(p,u,g)}return g}function z1(o,u,p){o.flags|=16384,o={getSnapshot:u,value:p},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.stores=[o]):(p=u.stores,p===null?u.stores=[o]:p.push(o))}function U1(o,u,p,m){u.value=p,u.getSnapshot=m,G1(u)&&K1(o)}function V1(o,u,p){return p(function(){G1(u)&&K1(o)})}function G1(o){var u=o.getSnapshot;o=o.value;try{var p=u();return!Xn(o,p)}catch{return!0}}function K1(o){var u=kr(o,1);u!==null&&nr(u,o,1,-1)}function Q1(o){var u=mr();return typeof o=="function"&&(o=o()),u.memoizedState=u.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cu,lastRenderedState:o},u.queue=o,o=o.dispatch=SC.bind(null,dt,o),[u.memoizedState,o]}function ku(o,u,p,m){return o={tag:o,create:u,destroy:p,deps:m,next:null},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.lastEffect=o.next=o):(p=u.lastEffect,p===null?u.lastEffect=o.next=o:(m=p.next,p.next=o,o.next=m,u.lastEffect=o)),o}function Y1(){return Rn().memoizedState}function Dl(o,u,p,m){var g=mr();dt.flags|=o,g.memoizedState=ku(1|u,p,void 0,m===void 0?null:m)}function $l(o,u,p,m){var g=Rn();m=m===void 0?null:m;var B=void 0;if(kt!==null){var k=kt.memoizedState;if(B=k.destroy,m!==null&&A2(m,k.deps)){g.memoizedState=ku(u,p,B,m);return}}dt.flags|=o,g.memoizedState=ku(1|u,p,B,m)}function X1(o,u){return Dl(8390656,8,o,u)}function k2(o,u){return $l(2048,8,o,u)}function Z1(o,u){return $l(4,2,o,u)}function J1(o,u){return $l(4,4,o,u)}function e6(o,u){if(typeof u=="function")return o=o(),u(o),function(){u(null)};if(u!=null)return o=o(),u.current=o,function(){u.current=null}}function t6(o,u,p){return p=p!=null?p.concat([o]):null,$l(4,4,e6.bind(null,u,o),p)}function N2(){}function n6(o,u){var p=Rn();u=u===void 0?null:u;var m=p.memoizedState;return m!==null&&u!==null&&A2(u,m[1])?m[0]:(p.memoizedState=[o,u],o)}function r6(o,u){var p=Rn();u=u===void 0?null:u;var m=p.memoizedState;return m!==null&&u!==null&&A2(u,m[1])?m[0]:(o=o(),p.memoizedState=[o,u],o)}function a6(o,u,p){return(Qa&21)===0?(o.baseState&&(o.baseState=!1,dn=!0),o.memoizedState=p):(Xn(p,u)||(p=Eb(),dt.lanes|=p,Ya|=p,o.baseState=!0),u)}function wC(o,u){var p=Ze;Ze=p!==0&&4>p?p:4,o(!0);var m=W2.transition;W2.transition={};try{o(!1),u()}finally{Ze=p,W2.transition=m}}function o6(){return Rn().memoizedState}function PC(o,u,p){var m=ya(o);if(p={lane:m,action:p,hasEagerState:!1,eagerState:null,next:null},i6(o))u6(u,p);else if(p=H1(o,u,p,m),p!==null){var g=nn();nr(p,o,m,g),s6(p,u,m)}}function SC(o,u,p){var m=ya(o),g={lane:m,action:p,hasEagerState:!1,eagerState:null,next:null};if(i6(o))u6(u,g);else{var B=o.alternate;if(o.lanes===0&&(B===null||B.lanes===0)&&(B=u.lastRenderedReducer,B!==null))try{var k=u.lastRenderedState,D=B(k,p);if(g.hasEagerState=!0,g.eagerState=D,Xn(D,k)){var q=u.interleaved;q===null?(g.next=g,I2(u)):(g.next=q.next,q.next=g),u.interleaved=g;return}}catch{}finally{}p=H1(o,u,g,m),p!==null&&(g=nn(),nr(p,o,m,g),s6(p,u,m))}}function i6(o){var u=o.alternate;return o===dt||u!==null&&u===dt}function u6(o,u){Mu=jl=!0;var p=o.pending;p===null?u.next=u:(u.next=p.next,p.next=u),o.pending=u}function s6(o,u,p){if((p&4194240)!==0){var m=u.lanes;m&=o.pendingLanes,p|=m,u.lanes=p,T0(o,p)}}var Ll={readContext:Tn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},WC={readContext:Tn,useCallback:function(o,u){return mr().memoizedState=[o,u===void 0?null:u],o},useContext:Tn,useEffect:X1,useImperativeHandle:function(o,u,p){return p=p!=null?p.concat([o]):null,Dl(4194308,4,e6.bind(null,u,o),p)},useLayoutEffect:function(o,u){return Dl(4194308,4,o,u)},useInsertionEffect:function(o,u){return Dl(4,2,o,u)},useMemo:function(o,u){var p=mr();return u=u===void 0?null:u,o=o(),p.memoizedState=[o,u],o},useReducer:function(o,u,p){var m=mr();return u=p!==void 0?p(u):u,m.memoizedState=m.baseState=u,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:u},m.queue=o,o=o.dispatch=PC.bind(null,dt,o),[m.memoizedState,o]},useRef:function(o){var u=mr();return o={current:o},u.memoizedState=o},useState:Q1,useDebugValue:N2,useDeferredValue:function(o){return mr().memoizedState=o},useTransition:function(){var o=Q1(!1),u=o[0];return o=wC.bind(null,o[1]),mr().memoizedState=o,[u,o]},useMutableSource:function(){},useSyncExternalStore:function(o,u,p){var m=dt,g=mr();if(pt){if(p===void 0)throw Error(n(407));p=p()}else{if(p=u(),$t===null)throw Error(n(349));(Qa&30)!==0||z1(m,u,p)}g.memoizedState=p;var B={value:p,getSnapshot:u};return g.queue=B,X1(V1.bind(null,m,B,o),[o]),m.flags|=2048,ku(9,U1.bind(null,m,B,p,u),void 0,null),p},useId:function(){var o=mr(),u=$t.identifierPrefix;if(pt){var p=Cr,m=Or;p=(m&~(1<<32-Yn(m)-1)).toString(32)+p,u=":"+u+"R"+p,p=Ou++,0<p&&(u+="H"+p.toString(32)),u+=":"}else p=xC++,u=":"+u+"r"+p.toString(32)+":";return o.memoizedState=u},unstable_isNewReconciler:!1},AC={readContext:Tn,useCallback:n6,useContext:Tn,useEffect:k2,useImperativeHandle:t6,useInsertionEffect:Z1,useLayoutEffect:J1,useMemo:r6,useReducer:O2,useRef:Y1,useState:function(){return O2(Cu)},useDebugValue:N2,useDeferredValue:function(o){var u=Rn();return a6(u,kt.memoizedState,o)},useTransition:function(){var o=O2(Cu)[0],u=Rn().memoizedState;return[o,u]},useMutableSource:F1,useSyncExternalStore:q1,useId:o6,unstable_isNewReconciler:!1},_C={readContext:Tn,useCallback:n6,useContext:Tn,useEffect:k2,useImperativeHandle:t6,useInsertionEffect:Z1,useLayoutEffect:J1,useMemo:r6,useReducer:C2,useRef:Y1,useState:function(){return C2(Cu)},useDebugValue:N2,useDeferredValue:function(o){var u=Rn();return kt===null?u.memoizedState=o:a6(u,kt.memoizedState,o)},useTransition:function(){var o=C2(Cu)[0],u=Rn().memoizedState;return[o,u]},useMutableSource:F1,useSyncExternalStore:q1,useId:o6,unstable_isNewReconciler:!1};function Jn(o,u){if(o&&o.defaultProps){u=Y({},u),o=o.defaultProps;for(var p in o)u[p]===void 0&&(u[p]=o[p]);return u}return u}function E2(o,u,p,m){u=o.memoizedState,p=p(m,u),p=p==null?u:Y({},u,p),o.memoizedState=p,o.lanes===0&&(o.updateQueue.baseState=p)}var Fl={isMounted:function(o){return(o=o._reactInternals)?Fa(o)===o:!1},enqueueSetState:function(o,u,p){o=o._reactInternals;var m=nn(),g=ya(o),B=Nr(m,g);B.payload=u,p!=null&&(B.callback=p),u=ha(o,B,g),u!==null&&(nr(u,o,g,m),El(u,o,g))},enqueueReplaceState:function(o,u,p){o=o._reactInternals;var m=nn(),g=ya(o),B=Nr(m,g);B.tag=1,B.payload=u,p!=null&&(B.callback=p),u=ha(o,B,g),u!==null&&(nr(u,o,g,m),El(u,o,g))},enqueueForceUpdate:function(o,u){o=o._reactInternals;var p=nn(),m=ya(o),g=Nr(p,m);g.tag=2,u!=null&&(g.callback=u),u=ha(o,g,m),u!==null&&(nr(u,o,m,p),El(u,o,m))}};function l6(o,u,p,m,g,B,k){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(m,B,k):u.prototype&&u.prototype.isPureReactComponent?!yu(p,m)||!yu(g,B):!0}function p6(o,u,p){var m=!1,g=ca,B=u.contextType;return typeof B=="object"&&B!==null?B=Tn(B):(g=fn(u)?za:Qt.current,m=u.contextTypes,B=(m=m!=null)?jo(o,g):ca),u=new u(p,B),o.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Fl,o.stateNode=u,u._reactInternals=o,m&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=g,o.__reactInternalMemoizedMaskedChildContext=B),u}function c6(o,u,p,m){o=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(p,m),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(p,m),u.state!==o&&Fl.enqueueReplaceState(u,u.state,null)}function T2(o,u,p,m){var g=o.stateNode;g.props=p,g.state=o.memoizedState,g.refs={},B2(o);var B=u.contextType;typeof B=="object"&&B!==null?g.context=Tn(B):(B=fn(u)?za:Qt.current,g.context=jo(o,B)),g.state=o.memoizedState,B=u.getDerivedStateFromProps,typeof B=="function"&&(E2(o,u,B,p),g.state=o.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(u=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),u!==g.state&&Fl.enqueueReplaceState(g,g.state,null),Tl(o,p,g,m),g.state=o.memoizedState),typeof g.componentDidMount=="function"&&(o.flags|=4194308)}function Vo(o,u){try{var p="",m=u;do p+=he(m),m=m.return;while(m);var g=p}catch(B){g=`
Error generating stack: `+B.message+`
`+B.stack}return{value:o,source:u,stack:g,digest:null}}function R2(o,u,p){return{value:o,source:null,stack:p??null,digest:u??null}}function H2(o,u){try{console.error(u.value)}catch(p){setTimeout(function(){throw p})}}var MC=typeof WeakMap=="function"?WeakMap:Map;function f6(o,u,p){p=Nr(-1,p),p.tag=3,p.payload={element:null};var m=u.value;return p.callback=function(){Ql||(Ql=!0,Z2=m),H2(o,u)},p}function d6(o,u,p){p=Nr(-1,p),p.tag=3;var m=o.type.getDerivedStateFromError;if(typeof m=="function"){var g=u.value;p.payload=function(){return m(g)},p.callback=function(){H2(o,u)}}var B=o.stateNode;return B!==null&&typeof B.componentDidCatch=="function"&&(p.callback=function(){H2(o,u),typeof m!="function"&&(va===null?va=new Set([this]):va.add(this));var k=u.stack;this.componentDidCatch(u.value,{componentStack:k!==null?k:""})}),p}function h6(o,u,p){var m=o.pingCache;if(m===null){m=o.pingCache=new MC;var g=new Set;m.set(u,g)}else g=m.get(u),g===void 0&&(g=new Set,m.set(u,g));g.has(p)||(g.add(p),o=qC.bind(null,o,u,p),u.then(o,o))}function m6(o){do{var u;if((u=o.tag===13)&&(u=o.memoizedState,u=u!==null?u.dehydrated!==null:!0),u)return o;o=o.return}while(o!==null);return null}function v6(o,u,p,m,g){return(o.mode&1)===0?(o===u?o.flags|=65536:(o.flags|=128,p.flags|=131072,p.flags&=-52805,p.tag===1&&(p.alternate===null?p.tag=17:(u=Nr(-1,1),u.tag=2,ha(p,u,1))),p.lanes|=1),o):(o.flags|=65536,o.lanes=g,o)}var OC=O.ReactCurrentOwner,dn=!1;function tn(o,u,p,m){u.child=o===null?R1(u,null,p,m):Fo(u,o.child,p,m)}function g6(o,u,p,m,g){p=p.render;var B=u.ref;return zo(u,g),m=_2(o,u,p,m,B,g),p=M2(),o!==null&&!dn?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Er(o,u,g)):(pt&&p&&c2(u),u.flags|=1,tn(o,u,m,g),u.child)}function y6(o,u,p,m,g){if(o===null){var B=p.type;return typeof B=="function"&&!of(B)&&B.defaultProps===void 0&&p.compare===null&&p.defaultProps===void 0?(u.tag=15,u.type=B,b6(o,u,B,m,g)):(o=tp(p.type,null,m,u,u.mode,g),o.ref=u.ref,o.return=u,u.child=o)}if(B=o.child,(o.lanes&g)===0){var k=B.memoizedProps;if(p=p.compare,p=p!==null?p:yu,p(k,m)&&o.ref===u.ref)return Er(o,u,g)}return u.flags|=1,o=Ia(B,m),o.ref=u.ref,o.return=u,u.child=o}function b6(o,u,p,m,g){if(o!==null){var B=o.memoizedProps;if(yu(B,m)&&o.ref===u.ref)if(dn=!1,u.pendingProps=m=B,(o.lanes&g)!==0)(o.flags&131072)!==0&&(dn=!0);else return u.lanes=o.lanes,Er(o,u,g)}return j2(o,u,p,m,g)}function I6(o,u,p){var m=u.pendingProps,g=m.children,B=o!==null?o.memoizedState:null;if(m.mode==="hidden")if((u.mode&1)===0)u.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Ko,xn),xn|=p;else{if((p&1073741824)===0)return o=B!==null?B.baseLanes|p:p,u.lanes=u.childLanes=1073741824,u.memoizedState={baseLanes:o,cachePool:null,transitions:null},u.updateQueue=null,nt(Ko,xn),xn|=o,null;u.memoizedState={baseLanes:0,cachePool:null,transitions:null},m=B!==null?B.baseLanes:p,nt(Ko,xn),xn|=m}else B!==null?(m=B.baseLanes|p,u.memoizedState=null):m=p,nt(Ko,xn),xn|=m;return tn(o,u,g,p),u.child}function B6(o,u){var p=u.ref;(o===null&&p!==null||o!==null&&o.ref!==p)&&(u.flags|=512,u.flags|=2097152)}function j2(o,u,p,m,g){var B=fn(p)?za:Qt.current;return B=jo(u,B),zo(u,g),p=_2(o,u,p,m,B,g),m=M2(),o!==null&&!dn?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Er(o,u,g)):(pt&&m&&c2(u),u.flags|=1,tn(o,u,p,g),u.child)}function x6(o,u,p,m,g){if(fn(p)){var B=!0;Wl(u)}else B=!1;if(zo(u,g),u.stateNode===null)zl(o,u),p6(u,p,m),T2(u,p,m,g),m=!0;else if(o===null){var k=u.stateNode,D=u.memoizedProps;k.props=D;var q=k.context,te=p.contextType;typeof te=="object"&&te!==null?te=Tn(te):(te=fn(p)?za:Qt.current,te=jo(u,te));var ie=p.getDerivedStateFromProps,se=typeof ie=="function"||typeof k.getSnapshotBeforeUpdate=="function";se||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(D!==m||q!==te)&&c6(u,k,m,te),da=!1;var oe=u.memoizedState;k.state=oe,Tl(u,m,k,g),q=u.memoizedState,D!==m||oe!==q||cn.current||da?(typeof ie=="function"&&(E2(u,p,ie,m),q=u.memoizedState),(D=da||l6(u,p,D,m,oe,q,te))?(se||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(u.flags|=4194308)):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=m,u.memoizedState=q),k.props=m,k.state=q,k.context=te,m=D):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),m=!1)}else{k=u.stateNode,j1(o,u),D=u.memoizedProps,te=u.type===u.elementType?D:Jn(u.type,D),k.props=te,se=u.pendingProps,oe=k.context,q=p.contextType,typeof q=="object"&&q!==null?q=Tn(q):(q=fn(p)?za:Qt.current,q=jo(u,q));var me=p.getDerivedStateFromProps;(ie=typeof me=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(D!==se||oe!==q)&&c6(u,k,m,q),da=!1,oe=u.memoizedState,k.state=oe,Tl(u,m,k,g);var Be=u.memoizedState;D!==se||oe!==Be||cn.current||da?(typeof me=="function"&&(E2(u,p,me,m),Be=u.memoizedState),(te=da||l6(u,p,te,m,oe,Be,q)||!1)?(ie||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(m,Be,q),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(m,Be,q)),typeof k.componentDidUpdate=="function"&&(u.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof k.componentDidUpdate!="function"||D===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||D===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),u.memoizedProps=m,u.memoizedState=Be),k.props=m,k.state=Be,k.context=q,m=te):(typeof k.componentDidUpdate!="function"||D===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||D===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),m=!1)}return D2(o,u,p,m,B,g)}function D2(o,u,p,m,g,B){B6(o,u);var k=(u.flags&128)!==0;if(!m&&!k)return g&&A1(u,p,!1),Er(o,u,B);m=u.stateNode,OC.current=u;var D=k&&typeof p.getDerivedStateFromError!="function"?null:m.render();return u.flags|=1,o!==null&&k?(u.child=Fo(u,o.child,null,B),u.child=Fo(u,null,D,B)):tn(o,u,D,B),u.memoizedState=m.state,g&&A1(u,p,!0),u.child}function w6(o){var u=o.stateNode;u.pendingContext?S1(o,u.pendingContext,u.pendingContext!==u.context):u.context&&S1(o,u.context,!1),x2(o,u.containerInfo)}function P6(o,u,p,m,g){return Lo(),m2(g),u.flags|=256,tn(o,u,p,m),u.child}var $2={dehydrated:null,treeContext:null,retryLane:0};function L2(o){return{baseLanes:o,cachePool:null,transitions:null}}function S6(o,u,p){var m=u.pendingProps,g=ft.current,B=!1,k=(u.flags&128)!==0,D;if((D=k)||(D=o!==null&&o.memoizedState===null?!1:(g&2)!==0),D?(B=!0,u.flags&=-129):(o===null||o.memoizedState!==null)&&(g|=1),nt(ft,g&1),o===null)return h2(u),o=u.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((u.mode&1)===0?u.lanes=1:o.data==="$!"?u.lanes=8:u.lanes=1073741824,null):(k=m.children,o=m.fallback,B?(m=u.mode,B=u.child,k={mode:"hidden",children:k},(m&1)===0&&B!==null?(B.childLanes=0,B.pendingProps=k):B=np(k,m,0,null),o=eo(o,m,p,null),B.return=u,o.return=u,B.sibling=o,u.child=B,u.child.memoizedState=L2(p),u.memoizedState=$2,o):F2(u,k));if(g=o.memoizedState,g!==null&&(D=g.dehydrated,D!==null))return CC(o,u,k,m,D,g,p);if(B){B=m.fallback,k=u.mode,g=o.child,D=g.sibling;var q={mode:"hidden",children:m.children};return(k&1)===0&&u.child!==g?(m=u.child,m.childLanes=0,m.pendingProps=q,u.deletions=null):(m=Ia(g,q),m.subtreeFlags=g.subtreeFlags&14680064),D!==null?B=Ia(D,B):(B=eo(B,k,p,null),B.flags|=2),B.return=u,m.return=u,m.sibling=B,u.child=m,m=B,B=u.child,k=o.child.memoizedState,k=k===null?L2(p):{baseLanes:k.baseLanes|p,cachePool:null,transitions:k.transitions},B.memoizedState=k,B.childLanes=o.childLanes&~p,u.memoizedState=$2,m}return B=o.child,o=B.sibling,m=Ia(B,{mode:"visible",children:m.children}),(u.mode&1)===0&&(m.lanes=p),m.return=u,m.sibling=null,o!==null&&(p=u.deletions,p===null?(u.deletions=[o],u.flags|=16):p.push(o)),u.child=m,u.memoizedState=null,m}function F2(o,u){return u=np({mode:"visible",children:u},o.mode,0,null),u.return=o,o.child=u}function ql(o,u,p,m){return m!==null&&m2(m),Fo(u,o.child,null,p),o=F2(u,u.pendingProps.children),o.flags|=2,u.memoizedState=null,o}function CC(o,u,p,m,g,B,k){if(p)return u.flags&256?(u.flags&=-257,m=R2(Error(n(422))),ql(o,u,k,m)):u.memoizedState!==null?(u.child=o.child,u.flags|=128,null):(B=m.fallback,g=u.mode,m=np({mode:"visible",children:m.children},g,0,null),B=eo(B,g,k,null),B.flags|=2,m.return=u,B.return=u,m.sibling=B,u.child=m,(u.mode&1)!==0&&Fo(u,o.child,null,k),u.child.memoizedState=L2(k),u.memoizedState=$2,B);if((u.mode&1)===0)return ql(o,u,k,null);if(g.data==="$!"){if(m=g.nextSibling&&g.nextSibling.dataset,m)var D=m.dgst;return m=D,B=Error(n(419)),m=R2(B,m,void 0),ql(o,u,k,m)}if(D=(k&o.childLanes)!==0,dn||D){if(m=$t,m!==null){switch(k&-k){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(m.suspendedLanes|k))!==0?0:g,g!==0&&g!==B.retryLane&&(B.retryLane=g,kr(o,g),nr(m,o,g,-1))}return af(),m=R2(Error(n(421))),ql(o,u,k,m)}return g.data==="$?"?(u.flags|=128,u.child=o.child,u=zC.bind(null,o),g._reactRetry=u,null):(o=B.treeContext,Bn=la(g.nextSibling),In=u,pt=!0,Zn=null,o!==null&&(Nn[En++]=Or,Nn[En++]=Cr,Nn[En++]=Ua,Or=o.id,Cr=o.overflow,Ua=u),u=F2(u,m.children),u.flags|=4096,u)}function W6(o,u,p){o.lanes|=u;var m=o.alternate;m!==null&&(m.lanes|=u),b2(o.return,u,p)}function q2(o,u,p,m,g){var B=o.memoizedState;B===null?o.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:m,tail:p,tailMode:g}:(B.isBackwards=u,B.rendering=null,B.renderingStartTime=0,B.last=m,B.tail=p,B.tailMode=g)}function A6(o,u,p){var m=u.pendingProps,g=m.revealOrder,B=m.tail;if(tn(o,u,m.children,p),m=ft.current,(m&2)!==0)m=m&1|2,u.flags|=128;else{if(o!==null&&(o.flags&128)!==0)e:for(o=u.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&W6(o,p,u);else if(o.tag===19)W6(o,p,u);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===u)break e;for(;o.sibling===null;){if(o.return===null||o.return===u)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}m&=1}if(nt(ft,m),(u.mode&1)===0)u.memoizedState=null;else switch(g){case"forwards":for(p=u.child,g=null;p!==null;)o=p.alternate,o!==null&&Rl(o)===null&&(g=p),p=p.sibling;p=g,p===null?(g=u.child,u.child=null):(g=p.sibling,p.sibling=null),q2(u,!1,g,p,B);break;case"backwards":for(p=null,g=u.child,u.child=null;g!==null;){if(o=g.alternate,o!==null&&Rl(o)===null){u.child=g;break}o=g.sibling,g.sibling=p,p=g,g=o}q2(u,!0,p,null,B);break;case"together":q2(u,!1,null,null,void 0);break;default:u.memoizedState=null}return u.child}function zl(o,u){(u.mode&1)===0&&o!==null&&(o.alternate=null,u.alternate=null,u.flags|=2)}function Er(o,u,p){if(o!==null&&(u.dependencies=o.dependencies),Ya|=u.lanes,(p&u.childLanes)===0)return null;if(o!==null&&u.child!==o.child)throw Error(n(153));if(u.child!==null){for(o=u.child,p=Ia(o,o.pendingProps),u.child=p,p.return=u;o.sibling!==null;)o=o.sibling,p=p.sibling=Ia(o,o.pendingProps),p.return=u;p.sibling=null}return u.child}function kC(o,u,p){switch(u.tag){case 3:w6(u),Lo();break;case 5:L1(u);break;case 1:fn(u.type)&&Wl(u);break;case 4:x2(u,u.stateNode.containerInfo);break;case 10:var m=u.type._context,g=u.memoizedProps.value;nt(kl,m._currentValue),m._currentValue=g;break;case 13:if(m=u.memoizedState,m!==null)return m.dehydrated!==null?(nt(ft,ft.current&1),u.flags|=128,null):(p&u.child.childLanes)!==0?S6(o,u,p):(nt(ft,ft.current&1),o=Er(o,u,p),o!==null?o.sibling:null);nt(ft,ft.current&1);break;case 19:if(m=(p&u.childLanes)!==0,(o.flags&128)!==0){if(m)return A6(o,u,p);u.flags|=128}if(g=u.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),nt(ft,ft.current),m)break;return null;case 22:case 23:return u.lanes=0,I6(o,u,p)}return Er(o,u,p)}var _6,z2,M6,O6;_6=function(o,u){for(var p=u.child;p!==null;){if(p.tag===5||p.tag===6)o.appendChild(p.stateNode);else if(p.tag!==4&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===u)break;for(;p.sibling===null;){if(p.return===null||p.return===u)return;p=p.return}p.sibling.return=p.return,p=p.sibling}},z2=function(){},M6=function(o,u,p,m){var g=o.memoizedProps;if(g!==m){o=u.stateNode,Ka(hr.current);var B=null;switch(p){case"input":g=Pe(o,g),m=Pe(o,m),B=[];break;case"select":g=Y({},g,{value:void 0}),m=Y({},m,{value:void 0}),B=[];break;case"textarea":g=vt(o,g),m=vt(o,m),B=[];break;default:typeof g.onClick!="function"&&typeof m.onClick=="function"&&(o.onclick=wl)}P0(p,m);var k;p=null;for(te in g)if(!m.hasOwnProperty(te)&&g.hasOwnProperty(te)&&g[te]!=null)if(te==="style"){var D=g[te];for(k in D)D.hasOwnProperty(k)&&(p||(p={}),p[k]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?B||(B=[]):(B=B||[]).push(te,null));for(te in m){var q=m[te];if(D=g!=null?g[te]:void 0,m.hasOwnProperty(te)&&q!==D&&(q!=null||D!=null))if(te==="style")if(D){for(k in D)!D.hasOwnProperty(k)||q&&q.hasOwnProperty(k)||(p||(p={}),p[k]="");for(k in q)q.hasOwnProperty(k)&&D[k]!==q[k]&&(p||(p={}),p[k]=q[k])}else p||(B||(B=[]),B.push(te,p)),p=q;else te==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,D=D?D.__html:void 0,q!=null&&D!==q&&(B=B||[]).push(te,q)):te==="children"?typeof q!="string"&&typeof q!="number"||(B=B||[]).push(te,""+q):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(q!=null&&te==="onScroll"&&it("scroll",o),B||D===q||(B=[])):(B=B||[]).push(te,q))}p&&(B=B||[]).push("style",p);var te=B;(u.updateQueue=te)&&(u.flags|=4)}},O6=function(o,u,p,m){p!==m&&(u.flags|=4)};function Nu(o,u){if(!pt)switch(o.tailMode){case"hidden":u=o.tail;for(var p=null;u!==null;)u.alternate!==null&&(p=u),u=u.sibling;p===null?o.tail=null:p.sibling=null;break;case"collapsed":p=o.tail;for(var m=null;p!==null;)p.alternate!==null&&(m=p),p=p.sibling;m===null?u||o.tail===null?o.tail=null:o.tail.sibling=null:m.sibling=null}}function Xt(o){var u=o.alternate!==null&&o.alternate.child===o.child,p=0,m=0;if(u)for(var g=o.child;g!==null;)p|=g.lanes|g.childLanes,m|=g.subtreeFlags&14680064,m|=g.flags&14680064,g.return=o,g=g.sibling;else for(g=o.child;g!==null;)p|=g.lanes|g.childLanes,m|=g.subtreeFlags,m|=g.flags,g.return=o,g=g.sibling;return o.subtreeFlags|=m,o.childLanes=p,u}function NC(o,u,p){var m=u.pendingProps;switch(f2(u),u.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(u),null;case 1:return fn(u.type)&&Sl(),Xt(u),null;case 3:return m=u.stateNode,Uo(),ut(cn),ut(Qt),S2(),m.pendingContext&&(m.context=m.pendingContext,m.pendingContext=null),(o===null||o.child===null)&&(Ol(u)?u.flags|=4:o===null||o.memoizedState.isDehydrated&&(u.flags&256)===0||(u.flags|=1024,Zn!==null&&(tf(Zn),Zn=null))),z2(o,u),Xt(u),null;case 5:w2(u);var g=Ka(_u.current);if(p=u.type,o!==null&&u.stateNode!=null)M6(o,u,p,m,g),o.ref!==u.ref&&(u.flags|=512,u.flags|=2097152);else{if(!m){if(u.stateNode===null)throw Error(n(166));return Xt(u),null}if(o=Ka(hr.current),Ol(u)){m=u.stateNode,p=u.type;var B=u.memoizedProps;switch(m[dr]=u,m[wu]=B,o=(u.mode&1)!==0,p){case"dialog":it("cancel",m),it("close",m);break;case"iframe":case"object":case"embed":it("load",m);break;case"video":case"audio":for(g=0;g<Iu.length;g++)it(Iu[g],m);break;case"source":it("error",m);break;case"img":case"image":case"link":it("error",m),it("load",m);break;case"details":it("toggle",m);break;case"input":Ce(m,B),it("invalid",m);break;case"select":m._wrapperState={wasMultiple:!!B.multiple},it("invalid",m);break;case"textarea":On(m,B),it("invalid",m)}P0(p,B),g=null;for(var k in B)if(B.hasOwnProperty(k)){var D=B[k];k==="children"?typeof D=="string"?m.textContent!==D&&(B.suppressHydrationWarning!==!0&&xl(m.textContent,D,o),g=["children",D]):typeof D=="number"&&m.textContent!==""+D&&(B.suppressHydrationWarning!==!0&&xl(m.textContent,D,o),g=["children",""+D]):a.hasOwnProperty(k)&&D!=null&&k==="onScroll"&&it("scroll",m)}switch(p){case"input":ce(m),je(m,B,!0);break;case"textarea":ce(m),Kt(m);break;case"select":case"option":break;default:typeof B.onClick=="function"&&(m.onclick=wl)}m=g,u.updateQueue=m,m!==null&&(u.flags|=4)}else{k=g.nodeType===9?g:g.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=xt(p)),o==="http://www.w3.org/1999/xhtml"?p==="script"?(o=k.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof m.is=="string"?o=k.createElement(p,{is:m.is}):(o=k.createElement(p),p==="select"&&(k=o,m.multiple?k.multiple=!0:m.size&&(k.size=m.size))):o=k.createElementNS(o,p),o[dr]=u,o[wu]=m,_6(o,u,!1,!1),u.stateNode=o;e:{switch(k=S0(p,m),p){case"dialog":it("cancel",o),it("close",o),g=m;break;case"iframe":case"object":case"embed":it("load",o),g=m;break;case"video":case"audio":for(g=0;g<Iu.length;g++)it(Iu[g],o);g=m;break;case"source":it("error",o),g=m;break;case"img":case"image":case"link":it("error",o),it("load",o),g=m;break;case"details":it("toggle",o),g=m;break;case"input":Ce(o,m),g=Pe(o,m),it("invalid",o);break;case"option":g=m;break;case"select":o._wrapperState={wasMultiple:!!m.multiple},g=Y({},m,{value:void 0}),it("invalid",o);break;case"textarea":On(o,m),g=vt(o,m),it("invalid",o);break;default:g=m}P0(p,g),D=g;for(B in D)if(D.hasOwnProperty(B)){var q=D[B];B==="style"?nu(o,q):B==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&Wo(o,q)):B==="children"?typeof q=="string"?(p!=="textarea"||q!=="")&&ta(o,q):typeof q=="number"&&ta(o,""+q):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(a.hasOwnProperty(B)?q!=null&&B==="onScroll"&&it("scroll",o):q!=null&&A(o,B,q,k))}switch(p){case"input":ce(o),je(o,m,!1);break;case"textarea":ce(o),Kt(o);break;case"option":m.value!=null&&o.setAttribute("value",""+fe(m.value));break;case"select":o.multiple=!!m.multiple,B=m.value,B!=null?Bt(o,!!m.multiple,B,!1):m.defaultValue!=null&&Bt(o,!!m.multiple,m.defaultValue,!0);break;default:typeof g.onClick=="function"&&(o.onclick=wl)}switch(p){case"button":case"input":case"select":case"textarea":m=!!m.autoFocus;break e;case"img":m=!0;break e;default:m=!1}}m&&(u.flags|=4)}u.ref!==null&&(u.flags|=512,u.flags|=2097152)}return Xt(u),null;case 6:if(o&&u.stateNode!=null)O6(o,u,o.memoizedProps,m);else{if(typeof m!="string"&&u.stateNode===null)throw Error(n(166));if(p=Ka(_u.current),Ka(hr.current),Ol(u)){if(m=u.stateNode,p=u.memoizedProps,m[dr]=u,(B=m.nodeValue!==p)&&(o=In,o!==null))switch(o.tag){case 3:xl(m.nodeValue,p,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&xl(m.nodeValue,p,(o.mode&1)!==0)}B&&(u.flags|=4)}else m=(p.nodeType===9?p:p.ownerDocument).createTextNode(m),m[dr]=u,u.stateNode=m}return Xt(u),null;case 13:if(ut(ft),m=u.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(pt&&Bn!==null&&(u.mode&1)!==0&&(u.flags&128)===0)N1(),Lo(),u.flags|=98560,B=!1;else if(B=Ol(u),m!==null&&m.dehydrated!==null){if(o===null){if(!B)throw Error(n(318));if(B=u.memoizedState,B=B!==null?B.dehydrated:null,!B)throw Error(n(317));B[dr]=u}else Lo(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;Xt(u),B=!1}else Zn!==null&&(tf(Zn),Zn=null),B=!0;if(!B)return u.flags&65536?u:null}return(u.flags&128)!==0?(u.lanes=p,u):(m=m!==null,m!==(o!==null&&o.memoizedState!==null)&&m&&(u.child.flags|=8192,(u.mode&1)!==0&&(o===null||(ft.current&1)!==0?Nt===0&&(Nt=3):af())),u.updateQueue!==null&&(u.flags|=4),Xt(u),null);case 4:return Uo(),z2(o,u),o===null&&Bu(u.stateNode.containerInfo),Xt(u),null;case 10:return y2(u.type._context),Xt(u),null;case 17:return fn(u.type)&&Sl(),Xt(u),null;case 19:if(ut(ft),B=u.memoizedState,B===null)return Xt(u),null;if(m=(u.flags&128)!==0,k=B.rendering,k===null)if(m)Nu(B,!1);else{if(Nt!==0||o!==null&&(o.flags&128)!==0)for(o=u.child;o!==null;){if(k=Rl(o),k!==null){for(u.flags|=128,Nu(B,!1),m=k.updateQueue,m!==null&&(u.updateQueue=m,u.flags|=4),u.subtreeFlags=0,m=p,p=u.child;p!==null;)B=p,o=m,B.flags&=14680066,k=B.alternate,k===null?(B.childLanes=0,B.lanes=o,B.child=null,B.subtreeFlags=0,B.memoizedProps=null,B.memoizedState=null,B.updateQueue=null,B.dependencies=null,B.stateNode=null):(B.childLanes=k.childLanes,B.lanes=k.lanes,B.child=k.child,B.subtreeFlags=0,B.deletions=null,B.memoizedProps=k.memoizedProps,B.memoizedState=k.memoizedState,B.updateQueue=k.updateQueue,B.type=k.type,o=k.dependencies,B.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),p=p.sibling;return nt(ft,ft.current&1|2),u.child}o=o.sibling}B.tail!==null&&wt()>Qo&&(u.flags|=128,m=!0,Nu(B,!1),u.lanes=4194304)}else{if(!m)if(o=Rl(k),o!==null){if(u.flags|=128,m=!0,p=o.updateQueue,p!==null&&(u.updateQueue=p,u.flags|=4),Nu(B,!0),B.tail===null&&B.tailMode==="hidden"&&!k.alternate&&!pt)return Xt(u),null}else 2*wt()-B.renderingStartTime>Qo&&p!==1073741824&&(u.flags|=128,m=!0,Nu(B,!1),u.lanes=4194304);B.isBackwards?(k.sibling=u.child,u.child=k):(p=B.last,p!==null?p.sibling=k:u.child=k,B.last=k)}return B.tail!==null?(u=B.tail,B.rendering=u,B.tail=u.sibling,B.renderingStartTime=wt(),u.sibling=null,p=ft.current,nt(ft,m?p&1|2:p&1),u):(Xt(u),null);case 22:case 23:return rf(),m=u.memoizedState!==null,o!==null&&o.memoizedState!==null!==m&&(u.flags|=8192),m&&(u.mode&1)!==0?(xn&1073741824)!==0&&(Xt(u),u.subtreeFlags&6&&(u.flags|=8192)):Xt(u),null;case 24:return null;case 25:return null}throw Error(n(156,u.tag))}function EC(o,u){switch(f2(u),u.tag){case 1:return fn(u.type)&&Sl(),o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 3:return Uo(),ut(cn),ut(Qt),S2(),o=u.flags,(o&65536)!==0&&(o&128)===0?(u.flags=o&-65537|128,u):null;case 5:return w2(u),null;case 13:if(ut(ft),o=u.memoizedState,o!==null&&o.dehydrated!==null){if(u.alternate===null)throw Error(n(340));Lo()}return o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 19:return ut(ft),null;case 4:return Uo(),null;case 10:return y2(u.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var Ul=!1,Zt=!1,TC=typeof WeakSet=="function"?WeakSet:Set,be=null;function Go(o,u){var p=o.ref;if(p!==null)if(typeof p=="function")try{p(null)}catch(m){yt(o,u,m)}else p.current=null}function U2(o,u,p){try{p()}catch(m){yt(o,u,m)}}var C6=!1;function RC(o,u){if(r2=cl,o=l1(),Q0(o)){if("selectionStart"in o)var p={start:o.selectionStart,end:o.selectionEnd};else e:{p=(p=o.ownerDocument)&&p.defaultView||window;var m=p.getSelection&&p.getSelection();if(m&&m.rangeCount!==0){p=m.anchorNode;var g=m.anchorOffset,B=m.focusNode;m=m.focusOffset;try{p.nodeType,B.nodeType}catch{p=null;break e}var k=0,D=-1,q=-1,te=0,ie=0,se=o,oe=null;t:for(;;){for(var me;se!==p||g!==0&&se.nodeType!==3||(D=k+g),se!==B||m!==0&&se.nodeType!==3||(q=k+m),se.nodeType===3&&(k+=se.nodeValue.length),(me=se.firstChild)!==null;)oe=se,se=me;for(;;){if(se===o)break t;if(oe===p&&++te===g&&(D=k),oe===B&&++ie===m&&(q=k),(me=se.nextSibling)!==null)break;se=oe,oe=se.parentNode}se=me}p=D===-1||q===-1?null:{start:D,end:q}}else p=null}p=p||{start:0,end:0}}else p=null;for(a2={focusedElem:o,selectionRange:p},cl=!1,be=u;be!==null;)if(u=be,o=u.child,(u.subtreeFlags&1028)!==0&&o!==null)o.return=u,be=o;else for(;be!==null;){u=be;try{var Be=u.alternate;if((u.flags&1024)!==0)switch(u.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Se=Be.memoizedProps,Pt=Be.memoizedState,Z=u.stateNode,U=Z.getSnapshotBeforeUpdate(u.elementType===u.type?Se:Jn(u.type,Se),Pt);Z.__reactInternalSnapshotBeforeUpdate=U}break;case 3:var ee=u.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(pe){yt(u,u.return,pe)}if(o=u.sibling,o!==null){o.return=u.return,be=o;break}be=u.return}return Be=C6,C6=!1,Be}function Eu(o,u,p){var m=u.updateQueue;if(m=m!==null?m.lastEffect:null,m!==null){var g=m=m.next;do{if((g.tag&o)===o){var B=g.destroy;g.destroy=void 0,B!==void 0&&U2(u,p,B)}g=g.next}while(g!==m)}}function Vl(o,u){if(u=u.updateQueue,u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&o)===o){var m=p.create;p.destroy=m()}p=p.next}while(p!==u)}}function V2(o){var u=o.ref;if(u!==null){var p=o.stateNode;switch(o.tag){case 5:o=p;break;default:o=p}typeof u=="function"?u(o):u.current=o}}function k6(o){var u=o.alternate;u!==null&&(o.alternate=null,k6(u)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(u=o.stateNode,u!==null&&(delete u[dr],delete u[wu],delete u[s2],delete u[yC],delete u[bC])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function N6(o){return o.tag===5||o.tag===3||o.tag===4}function E6(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||N6(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function G2(o,u,p){var m=o.tag;if(m===5||m===6)o=o.stateNode,u?p.nodeType===8?p.parentNode.insertBefore(o,u):p.insertBefore(o,u):(p.nodeType===8?(u=p.parentNode,u.insertBefore(o,p)):(u=p,u.appendChild(o)),p=p._reactRootContainer,p!=null||u.onclick!==null||(u.onclick=wl));else if(m!==4&&(o=o.child,o!==null))for(G2(o,u,p),o=o.sibling;o!==null;)G2(o,u,p),o=o.sibling}function K2(o,u,p){var m=o.tag;if(m===5||m===6)o=o.stateNode,u?p.insertBefore(o,u):p.appendChild(o);else if(m!==4&&(o=o.child,o!==null))for(K2(o,u,p),o=o.sibling;o!==null;)K2(o,u,p),o=o.sibling}var Ut=null,er=!1;function ma(o,u,p){for(p=p.child;p!==null;)T6(o,u,p),p=p.sibling}function T6(o,u,p){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(ol,p)}catch{}switch(p.tag){case 5:Zt||Go(p,u);case 6:var m=Ut,g=er;Ut=null,ma(o,u,p),Ut=m,er=g,Ut!==null&&(er?(o=Ut,p=p.stateNode,o.nodeType===8?o.parentNode.removeChild(p):o.removeChild(p)):Ut.removeChild(p.stateNode));break;case 18:Ut!==null&&(er?(o=Ut,p=p.stateNode,o.nodeType===8?u2(o.parentNode,p):o.nodeType===1&&u2(o,p),fu(o)):u2(Ut,p.stateNode));break;case 4:m=Ut,g=er,Ut=p.stateNode.containerInfo,er=!0,ma(o,u,p),Ut=m,er=g;break;case 0:case 11:case 14:case 15:if(!Zt&&(m=p.updateQueue,m!==null&&(m=m.lastEffect,m!==null))){g=m=m.next;do{var B=g,k=B.destroy;B=B.tag,k!==void 0&&((B&2)!==0||(B&4)!==0)&&U2(p,u,k),g=g.next}while(g!==m)}ma(o,u,p);break;case 1:if(!Zt&&(Go(p,u),m=p.stateNode,typeof m.componentWillUnmount=="function"))try{m.props=p.memoizedProps,m.state=p.memoizedState,m.componentWillUnmount()}catch(D){yt(p,u,D)}ma(o,u,p);break;case 21:ma(o,u,p);break;case 22:p.mode&1?(Zt=(m=Zt)||p.memoizedState!==null,ma(o,u,p),Zt=m):ma(o,u,p);break;default:ma(o,u,p)}}function R6(o){var u=o.updateQueue;if(u!==null){o.updateQueue=null;var p=o.stateNode;p===null&&(p=o.stateNode=new TC),u.forEach(function(m){var g=UC.bind(null,o,m);p.has(m)||(p.add(m),m.then(g,g))})}}function tr(o,u){var p=u.deletions;if(p!==null)for(var m=0;m<p.length;m++){var g=p[m];try{var B=o,k=u,D=k;e:for(;D!==null;){switch(D.tag){case 5:Ut=D.stateNode,er=!1;break e;case 3:Ut=D.stateNode.containerInfo,er=!0;break e;case 4:Ut=D.stateNode.containerInfo,er=!0;break e}D=D.return}if(Ut===null)throw Error(n(160));T6(B,k,g),Ut=null,er=!1;var q=g.alternate;q!==null&&(q.return=null),g.return=null}catch(te){yt(g,u,te)}}if(u.subtreeFlags&12854)for(u=u.child;u!==null;)H6(u,o),u=u.sibling}function H6(o,u){var p=o.alternate,m=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(tr(u,o),vr(o),m&4){try{Eu(3,o,o.return),Vl(3,o)}catch(Se){yt(o,o.return,Se)}try{Eu(5,o,o.return)}catch(Se){yt(o,o.return,Se)}}break;case 1:tr(u,o),vr(o),m&512&&p!==null&&Go(p,p.return);break;case 5:if(tr(u,o),vr(o),m&512&&p!==null&&Go(p,p.return),o.flags&32){var g=o.stateNode;try{ta(g,"")}catch(Se){yt(o,o.return,Se)}}if(m&4&&(g=o.stateNode,g!=null)){var B=o.memoizedProps,k=p!==null?p.memoizedProps:B,D=o.type,q=o.updateQueue;if(o.updateQueue=null,q!==null)try{D==="input"&&B.type==="radio"&&B.name!=null&&Ae(g,B),S0(D,k);var te=S0(D,B);for(k=0;k<q.length;k+=2){var ie=q[k],se=q[k+1];ie==="style"?nu(g,se):ie==="dangerouslySetInnerHTML"?Wo(g,se):ie==="children"?ta(g,se):A(g,ie,se,te)}switch(D){case"input":Fe(g,B);break;case"textarea":gt(g,B);break;case"select":var oe=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!B.multiple;var me=B.value;me!=null?Bt(g,!!B.multiple,me,!1):oe!==!!B.multiple&&(B.defaultValue!=null?Bt(g,!!B.multiple,B.defaultValue,!0):Bt(g,!!B.multiple,B.multiple?[]:"",!1))}g[wu]=B}catch(Se){yt(o,o.return,Se)}}break;case 6:if(tr(u,o),vr(o),m&4){if(o.stateNode===null)throw Error(n(162));g=o.stateNode,B=o.memoizedProps;try{g.nodeValue=B}catch(Se){yt(o,o.return,Se)}}break;case 3:if(tr(u,o),vr(o),m&4&&p!==null&&p.memoizedState.isDehydrated)try{fu(u.containerInfo)}catch(Se){yt(o,o.return,Se)}break;case 4:tr(u,o),vr(o);break;case 13:tr(u,o),vr(o),g=o.child,g.flags&8192&&(B=g.memoizedState!==null,g.stateNode.isHidden=B,!B||g.alternate!==null&&g.alternate.memoizedState!==null||(X2=wt())),m&4&&R6(o);break;case 22:if(ie=p!==null&&p.memoizedState!==null,o.mode&1?(Zt=(te=Zt)||ie,tr(u,o),Zt=te):tr(u,o),vr(o),m&8192){if(te=o.memoizedState!==null,(o.stateNode.isHidden=te)&&!ie&&(o.mode&1)!==0)for(be=o,ie=o.child;ie!==null;){for(se=be=ie;be!==null;){switch(oe=be,me=oe.child,oe.tag){case 0:case 11:case 14:case 15:Eu(4,oe,oe.return);break;case 1:Go(oe,oe.return);var Be=oe.stateNode;if(typeof Be.componentWillUnmount=="function"){m=oe,p=oe.return;try{u=m,Be.props=u.memoizedProps,Be.state=u.memoizedState,Be.componentWillUnmount()}catch(Se){yt(m,p,Se)}}break;case 5:Go(oe,oe.return);break;case 22:if(oe.memoizedState!==null){$6(se);continue}}me!==null?(me.return=oe,be=me):$6(se)}ie=ie.sibling}e:for(ie=null,se=o;;){if(se.tag===5){if(ie===null){ie=se;try{g=se.stateNode,te?(B=g.style,typeof B.setProperty=="function"?B.setProperty("display","none","important"):B.display="none"):(D=se.stateNode,q=se.memoizedProps.style,k=q!=null&&q.hasOwnProperty("display")?q.display:null,D.style.display=na("display",k))}catch(Se){yt(o,o.return,Se)}}}else if(se.tag===6){if(ie===null)try{se.stateNode.nodeValue=te?"":se.memoizedProps}catch(Se){yt(o,o.return,Se)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===o)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===o)break e;for(;se.sibling===null;){if(se.return===null||se.return===o)break e;ie===se&&(ie=null),se=se.return}ie===se&&(ie=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:tr(u,o),vr(o),m&4&&R6(o);break;case 21:break;default:tr(u,o),vr(o)}}function vr(o){var u=o.flags;if(u&2){try{e:{for(var p=o.return;p!==null;){if(N6(p)){var m=p;break e}p=p.return}throw Error(n(160))}switch(m.tag){case 5:var g=m.stateNode;m.flags&32&&(ta(g,""),m.flags&=-33);var B=E6(o);K2(o,B,g);break;case 3:case 4:var k=m.stateNode.containerInfo,D=E6(o);G2(o,D,k);break;default:throw Error(n(161))}}catch(q){yt(o,o.return,q)}o.flags&=-3}u&4096&&(o.flags&=-4097)}function HC(o,u,p){be=o,j6(o)}function j6(o,u,p){for(var m=(o.mode&1)!==0;be!==null;){var g=be,B=g.child;if(g.tag===22&&m){var k=g.memoizedState!==null||Ul;if(!k){var D=g.alternate,q=D!==null&&D.memoizedState!==null||Zt;D=Ul;var te=Zt;if(Ul=k,(Zt=q)&&!te)for(be=g;be!==null;)k=be,q=k.child,k.tag===22&&k.memoizedState!==null?L6(g):q!==null?(q.return=k,be=q):L6(g);for(;B!==null;)be=B,j6(B),B=B.sibling;be=g,Ul=D,Zt=te}D6(o)}else(g.subtreeFlags&8772)!==0&&B!==null?(B.return=g,be=B):D6(o)}}function D6(o){for(;be!==null;){var u=be;if((u.flags&8772)!==0){var p=u.alternate;try{if((u.flags&8772)!==0)switch(u.tag){case 0:case 11:case 15:Zt||Vl(5,u);break;case 1:var m=u.stateNode;if(u.flags&4&&!Zt)if(p===null)m.componentDidMount();else{var g=u.elementType===u.type?p.memoizedProps:Jn(u.type,p.memoizedProps);m.componentDidUpdate(g,p.memoizedState,m.__reactInternalSnapshotBeforeUpdate)}var B=u.updateQueue;B!==null&&$1(u,B,m);break;case 3:var k=u.updateQueue;if(k!==null){if(p=null,u.child!==null)switch(u.child.tag){case 5:p=u.child.stateNode;break;case 1:p=u.child.stateNode}$1(u,k,p)}break;case 5:var D=u.stateNode;if(p===null&&u.flags&4){p=D;var q=u.memoizedProps;switch(u.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&p.focus();break;case"img":q.src&&(p.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(u.memoizedState===null){var te=u.alternate;if(te!==null){var ie=te.memoizedState;if(ie!==null){var se=ie.dehydrated;se!==null&&fu(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Zt||u.flags&512&&V2(u)}catch(oe){yt(u,u.return,oe)}}if(u===o){be=null;break}if(p=u.sibling,p!==null){p.return=u.return,be=p;break}be=u.return}}function $6(o){for(;be!==null;){var u=be;if(u===o){be=null;break}var p=u.sibling;if(p!==null){p.return=u.return,be=p;break}be=u.return}}function L6(o){for(;be!==null;){var u=be;try{switch(u.tag){case 0:case 11:case 15:var p=u.return;try{Vl(4,u)}catch(q){yt(u,p,q)}break;case 1:var m=u.stateNode;if(typeof m.componentDidMount=="function"){var g=u.return;try{m.componentDidMount()}catch(q){yt(u,g,q)}}var B=u.return;try{V2(u)}catch(q){yt(u,B,q)}break;case 5:var k=u.return;try{V2(u)}catch(q){yt(u,k,q)}}}catch(q){yt(u,u.return,q)}if(u===o){be=null;break}var D=u.sibling;if(D!==null){D.return=u.return,be=D;break}be=u.return}}var jC=Math.ceil,Gl=O.ReactCurrentDispatcher,Q2=O.ReactCurrentOwner,Hn=O.ReactCurrentBatchConfig,ze=0,$t=null,_t=null,Vt=0,xn=0,Ko=pa(0),Nt=0,Tu=null,Ya=0,Kl=0,Y2=0,Ru=null,hn=null,X2=0,Qo=1/0,Tr=null,Ql=!1,Z2=null,va=null,Yl=!1,ga=null,Xl=0,Hu=0,J2=null,Zl=-1,Jl=0;function nn(){return(ze&6)!==0?wt():Zl!==-1?Zl:Zl=wt()}function ya(o){return(o.mode&1)===0?1:(ze&2)!==0&&Vt!==0?Vt&-Vt:BC.transition!==null?(Jl===0&&(Jl=Eb()),Jl):(o=Ze,o!==0||(o=window.event,o=o===void 0?16:qb(o.type)),o)}function nr(o,u,p,m){if(50<Hu)throw Hu=0,J2=null,Error(n(185));uu(o,p,m),((ze&2)===0||o!==$t)&&(o===$t&&((ze&2)===0&&(Kl|=p),Nt===4&&ba(o,Vt)),mn(o,m),p===1&&ze===0&&(u.mode&1)===0&&(Qo=wt()+500,Al&&fa()))}function mn(o,u){var p=o.callbackNode;BO(o,u);var m=sl(o,o===$t?Vt:0);if(m===0)p!==null&&Cb(p),o.callbackNode=null,o.callbackPriority=0;else if(u=m&-m,o.callbackPriority!==u){if(p!=null&&Cb(p),u===1)o.tag===0?IC(q6.bind(null,o)):_1(q6.bind(null,o)),vC(function(){(ze&6)===0&&fa()}),p=null;else{switch(Tb(m)){case 1:p=k0;break;case 4:p=kb;break;case 16:p=al;break;case 536870912:p=Nb;break;default:p=al}p=X6(p,F6.bind(null,o))}o.callbackPriority=u,o.callbackNode=p}}function F6(o,u){if(Zl=-1,Jl=0,(ze&6)!==0)throw Error(n(327));var p=o.callbackNode;if(Yo()&&o.callbackNode!==p)return null;var m=sl(o,o===$t?Vt:0);if(m===0)return null;if((m&30)!==0||(m&o.expiredLanes)!==0||u)u=ep(o,m);else{u=m;var g=ze;ze|=2;var B=U6();($t!==o||Vt!==u)&&(Tr=null,Qo=wt()+500,Za(o,u));do try{LC();break}catch(D){z6(o,D)}while(!0);g2(),Gl.current=B,ze=g,_t!==null?u=0:($t=null,Vt=0,u=Nt)}if(u!==0){if(u===2&&(g=N0(o),g!==0&&(m=g,u=ef(o,g))),u===1)throw p=Tu,Za(o,0),ba(o,m),mn(o,wt()),p;if(u===6)ba(o,m);else{if(g=o.current.alternate,(m&30)===0&&!DC(g)&&(u=ep(o,m),u===2&&(B=N0(o),B!==0&&(m=B,u=ef(o,B))),u===1))throw p=Tu,Za(o,0),ba(o,m),mn(o,wt()),p;switch(o.finishedWork=g,o.finishedLanes=m,u){case 0:case 1:throw Error(n(345));case 2:Ja(o,hn,Tr);break;case 3:if(ba(o,m),(m&130023424)===m&&(u=X2+500-wt(),10<u)){if(sl(o,0)!==0)break;if(g=o.suspendedLanes,(g&m)!==m){nn(),o.pingedLanes|=o.suspendedLanes&g;break}o.timeoutHandle=i2(Ja.bind(null,o,hn,Tr),u);break}Ja(o,hn,Tr);break;case 4:if(ba(o,m),(m&4194240)===m)break;for(u=o.eventTimes,g=-1;0<m;){var k=31-Yn(m);B=1<<k,k=u[k],k>g&&(g=k),m&=~B}if(m=g,m=wt()-m,m=(120>m?120:480>m?480:1080>m?1080:1920>m?1920:3e3>m?3e3:4320>m?4320:1960*jC(m/1960))-m,10<m){o.timeoutHandle=i2(Ja.bind(null,o,hn,Tr),m);break}Ja(o,hn,Tr);break;case 5:Ja(o,hn,Tr);break;default:throw Error(n(329))}}}return mn(o,wt()),o.callbackNode===p?F6.bind(null,o):null}function ef(o,u){var p=Ru;return o.current.memoizedState.isDehydrated&&(Za(o,u).flags|=256),o=ep(o,u),o!==2&&(u=hn,hn=p,u!==null&&tf(u)),o}function tf(o){hn===null?hn=o:hn.push.apply(hn,o)}function DC(o){for(var u=o;;){if(u.flags&16384){var p=u.updateQueue;if(p!==null&&(p=p.stores,p!==null))for(var m=0;m<p.length;m++){var g=p[m],B=g.getSnapshot;g=g.value;try{if(!Xn(B(),g))return!1}catch{return!1}}}if(p=u.child,u.subtreeFlags&16384&&p!==null)p.return=u,u=p;else{if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function ba(o,u){for(u&=~Y2,u&=~Kl,o.suspendedLanes|=u,o.pingedLanes&=~u,o=o.expirationTimes;0<u;){var p=31-Yn(u),m=1<<p;o[p]=-1,u&=~m}}function q6(o){if((ze&6)!==0)throw Error(n(327));Yo();var u=sl(o,0);if((u&1)===0)return mn(o,wt()),null;var p=ep(o,u);if(o.tag!==0&&p===2){var m=N0(o);m!==0&&(u=m,p=ef(o,m))}if(p===1)throw p=Tu,Za(o,0),ba(o,u),mn(o,wt()),p;if(p===6)throw Error(n(345));return o.finishedWork=o.current.alternate,o.finishedLanes=u,Ja(o,hn,Tr),mn(o,wt()),null}function nf(o,u){var p=ze;ze|=1;try{return o(u)}finally{ze=p,ze===0&&(Qo=wt()+500,Al&&fa())}}function Xa(o){ga!==null&&ga.tag===0&&(ze&6)===0&&Yo();var u=ze;ze|=1;var p=Hn.transition,m=Ze;try{if(Hn.transition=null,Ze=1,o)return o()}finally{Ze=m,Hn.transition=p,ze=u,(ze&6)===0&&fa()}}function rf(){xn=Ko.current,ut(Ko)}function Za(o,u){o.finishedWork=null,o.finishedLanes=0;var p=o.timeoutHandle;if(p!==-1&&(o.timeoutHandle=-1,mC(p)),_t!==null)for(p=_t.return;p!==null;){var m=p;switch(f2(m),m.tag){case 1:m=m.type.childContextTypes,m!=null&&Sl();break;case 3:Uo(),ut(cn),ut(Qt),S2();break;case 5:w2(m);break;case 4:Uo();break;case 13:ut(ft);break;case 19:ut(ft);break;case 10:y2(m.type._context);break;case 22:case 23:rf()}p=p.return}if($t=o,_t=o=Ia(o.current,null),Vt=xn=u,Nt=0,Tu=null,Y2=Kl=Ya=0,hn=Ru=null,Ga!==null){for(u=0;u<Ga.length;u++)if(p=Ga[u],m=p.interleaved,m!==null){p.interleaved=null;var g=m.next,B=p.pending;if(B!==null){var k=B.next;B.next=g,m.next=k}p.pending=m}Ga=null}return o}function z6(o,u){do{var p=_t;try{if(g2(),Hl.current=Ll,jl){for(var m=dt.memoizedState;m!==null;){var g=m.queue;g!==null&&(g.pending=null),m=m.next}jl=!1}if(Qa=0,Dt=kt=dt=null,Mu=!1,Ou=0,Q2.current=null,p===null||p.return===null){Nt=1,Tu=u,_t=null;break}e:{var B=o,k=p.return,D=p,q=u;if(u=Vt,D.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var te=q,ie=D,se=ie.tag;if((ie.mode&1)===0&&(se===0||se===11||se===15)){var oe=ie.alternate;oe?(ie.updateQueue=oe.updateQueue,ie.memoizedState=oe.memoizedState,ie.lanes=oe.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var me=m6(k);if(me!==null){me.flags&=-257,v6(me,k,D,B,u),me.mode&1&&h6(B,te,u),u=me,q=te;var Be=u.updateQueue;if(Be===null){var Se=new Set;Se.add(q),u.updateQueue=Se}else Be.add(q);break e}else{if((u&1)===0){h6(B,te,u),af();break e}q=Error(n(426))}}else if(pt&&D.mode&1){var Pt=m6(k);if(Pt!==null){(Pt.flags&65536)===0&&(Pt.flags|=256),v6(Pt,k,D,B,u),m2(Vo(q,D));break e}}B=q=Vo(q,D),Nt!==4&&(Nt=2),Ru===null?Ru=[B]:Ru.push(B),B=k;do{switch(B.tag){case 3:B.flags|=65536,u&=-u,B.lanes|=u;var Z=f6(B,q,u);D1(B,Z);break e;case 1:D=q;var U=B.type,ee=B.stateNode;if((B.flags&128)===0&&(typeof U.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(va===null||!va.has(ee)))){B.flags|=65536,u&=-u,B.lanes|=u;var pe=d6(B,D,u);D1(B,pe);break e}}B=B.return}while(B!==null)}G6(p)}catch(_e){u=_e,_t===p&&p!==null&&(_t=p=p.return);continue}break}while(!0)}function U6(){var o=Gl.current;return Gl.current=Ll,o===null?Ll:o}function af(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),$t===null||(Ya&268435455)===0&&(Kl&268435455)===0||ba($t,Vt)}function ep(o,u){var p=ze;ze|=2;var m=U6();($t!==o||Vt!==u)&&(Tr=null,Za(o,u));do try{$C();break}catch(g){z6(o,g)}while(!0);if(g2(),ze=p,Gl.current=m,_t!==null)throw Error(n(261));return $t=null,Vt=0,Nt}function $C(){for(;_t!==null;)V6(_t)}function LC(){for(;_t!==null&&!fO();)V6(_t)}function V6(o){var u=Y6(o.alternate,o,xn);o.memoizedProps=o.pendingProps,u===null?G6(o):_t=u,Q2.current=null}function G6(o){var u=o;do{var p=u.alternate;if(o=u.return,(u.flags&32768)===0){if(p=NC(p,u,xn),p!==null){_t=p;return}}else{if(p=EC(p,u),p!==null){p.flags&=32767,_t=p;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{Nt=6,_t=null;return}}if(u=u.sibling,u!==null){_t=u;return}_t=u=o}while(u!==null);Nt===0&&(Nt=5)}function Ja(o,u,p){var m=Ze,g=Hn.transition;try{Hn.transition=null,Ze=1,FC(o,u,p,m)}finally{Hn.transition=g,Ze=m}return null}function FC(o,u,p,m){do Yo();while(ga!==null);if((ze&6)!==0)throw Error(n(327));p=o.finishedWork;var g=o.finishedLanes;if(p===null)return null;if(o.finishedWork=null,o.finishedLanes=0,p===o.current)throw Error(n(177));o.callbackNode=null,o.callbackPriority=0;var B=p.lanes|p.childLanes;if(xO(o,B),o===$t&&(_t=$t=null,Vt=0),(p.subtreeFlags&2064)===0&&(p.flags&2064)===0||Yl||(Yl=!0,X6(al,function(){return Yo(),null})),B=(p.flags&15990)!==0,(p.subtreeFlags&15990)!==0||B){B=Hn.transition,Hn.transition=null;var k=Ze;Ze=1;var D=ze;ze|=4,Q2.current=null,RC(o,p),H6(p,o),sC(a2),cl=!!r2,a2=r2=null,o.current=p,HC(p),dO(),ze=D,Ze=k,Hn.transition=B}else o.current=p;if(Yl&&(Yl=!1,ga=o,Xl=g),B=o.pendingLanes,B===0&&(va=null),vO(p.stateNode),mn(o,wt()),u!==null)for(m=o.onRecoverableError,p=0;p<u.length;p++)g=u[p],m(g.value,{componentStack:g.stack,digest:g.digest});if(Ql)throw Ql=!1,o=Z2,Z2=null,o;return(Xl&1)!==0&&o.tag!==0&&Yo(),B=o.pendingLanes,(B&1)!==0?o===J2?Hu++:(Hu=0,J2=o):Hu=0,fa(),null}function Yo(){if(ga!==null){var o=Tb(Xl),u=Hn.transition,p=Ze;try{if(Hn.transition=null,Ze=16>o?16:o,ga===null)var m=!1;else{if(o=ga,ga=null,Xl=0,(ze&6)!==0)throw Error(n(331));var g=ze;for(ze|=4,be=o.current;be!==null;){var B=be,k=B.child;if((be.flags&16)!==0){var D=B.deletions;if(D!==null){for(var q=0;q<D.length;q++){var te=D[q];for(be=te;be!==null;){var ie=be;switch(ie.tag){case 0:case 11:case 15:Eu(8,ie,B)}var se=ie.child;if(se!==null)se.return=ie,be=se;else for(;be!==null;){ie=be;var oe=ie.sibling,me=ie.return;if(k6(ie),ie===te){be=null;break}if(oe!==null){oe.return=me,be=oe;break}be=me}}}var Be=B.alternate;if(Be!==null){var Se=Be.child;if(Se!==null){Be.child=null;do{var Pt=Se.sibling;Se.sibling=null,Se=Pt}while(Se!==null)}}be=B}}if((B.subtreeFlags&2064)!==0&&k!==null)k.return=B,be=k;else e:for(;be!==null;){if(B=be,(B.flags&2048)!==0)switch(B.tag){case 0:case 11:case 15:Eu(9,B,B.return)}var Z=B.sibling;if(Z!==null){Z.return=B.return,be=Z;break e}be=B.return}}var U=o.current;for(be=U;be!==null;){k=be;var ee=k.child;if((k.subtreeFlags&2064)!==0&&ee!==null)ee.return=k,be=ee;else e:for(k=U;be!==null;){if(D=be,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Vl(9,D)}}catch(_e){yt(D,D.return,_e)}if(D===k){be=null;break e}var pe=D.sibling;if(pe!==null){pe.return=D.return,be=pe;break e}be=D.return}}if(ze=g,fa(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(ol,o)}catch{}m=!0}return m}finally{Ze=p,Hn.transition=u}}return!1}function K6(o,u,p){u=Vo(p,u),u=f6(o,u,1),o=ha(o,u,1),u=nn(),o!==null&&(uu(o,1,u),mn(o,u))}function yt(o,u,p){if(o.tag===3)K6(o,o,p);else for(;u!==null;){if(u.tag===3){K6(u,o,p);break}else if(u.tag===1){var m=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof m.componentDidCatch=="function"&&(va===null||!va.has(m))){o=Vo(p,o),o=d6(u,o,1),u=ha(u,o,1),o=nn(),u!==null&&(uu(u,1,o),mn(u,o));break}}u=u.return}}function qC(o,u,p){var m=o.pingCache;m!==null&&m.delete(u),u=nn(),o.pingedLanes|=o.suspendedLanes&p,$t===o&&(Vt&p)===p&&(Nt===4||Nt===3&&(Vt&130023424)===Vt&&500>wt()-X2?Za(o,0):Y2|=p),mn(o,u)}function Q6(o,u){u===0&&((o.mode&1)===0?u=1:(u=ul,ul<<=1,(ul&130023424)===0&&(ul=4194304)));var p=nn();o=kr(o,u),o!==null&&(uu(o,u,p),mn(o,p))}function zC(o){var u=o.memoizedState,p=0;u!==null&&(p=u.retryLane),Q6(o,p)}function UC(o,u){var p=0;switch(o.tag){case 13:var m=o.stateNode,g=o.memoizedState;g!==null&&(p=g.retryLane);break;case 19:m=o.stateNode;break;default:throw Error(n(314))}m!==null&&m.delete(u),Q6(o,p)}var Y6;Y6=function(o,u,p){if(o!==null)if(o.memoizedProps!==u.pendingProps||cn.current)dn=!0;else{if((o.lanes&p)===0&&(u.flags&128)===0)return dn=!1,kC(o,u,p);dn=(o.flags&131072)!==0}else dn=!1,pt&&(u.flags&1048576)!==0&&M1(u,Ml,u.index);switch(u.lanes=0,u.tag){case 2:var m=u.type;zl(o,u),o=u.pendingProps;var g=jo(u,Qt.current);zo(u,p),g=_2(null,u,m,o,g,p);var B=M2();return u.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(u.tag=1,u.memoizedState=null,u.updateQueue=null,fn(m)?(B=!0,Wl(u)):B=!1,u.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,B2(u),g.updater=Fl,u.stateNode=g,g._reactInternals=u,T2(u,m,o,p),u=D2(null,u,m,!0,B,p)):(u.tag=0,pt&&B&&c2(u),tn(null,u,g,p),u=u.child),u;case 16:m=u.elementType;e:{switch(zl(o,u),o=u.pendingProps,g=m._init,m=g(m._payload),u.type=m,g=u.tag=GC(m),o=Jn(m,o),g){case 0:u=j2(null,u,m,o,p);break e;case 1:u=x6(null,u,m,o,p);break e;case 11:u=g6(null,u,m,o,p);break e;case 14:u=y6(null,u,m,Jn(m.type,o),p);break e}throw Error(n(306,m,""))}return u;case 0:return m=u.type,g=u.pendingProps,g=u.elementType===m?g:Jn(m,g),j2(o,u,m,g,p);case 1:return m=u.type,g=u.pendingProps,g=u.elementType===m?g:Jn(m,g),x6(o,u,m,g,p);case 3:e:{if(w6(u),o===null)throw Error(n(387));m=u.pendingProps,B=u.memoizedState,g=B.element,j1(o,u),Tl(u,m,null,p);var k=u.memoizedState;if(m=k.element,B.isDehydrated)if(B={element:m,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},u.updateQueue.baseState=B,u.memoizedState=B,u.flags&256){g=Vo(Error(n(423)),u),u=P6(o,u,m,p,g);break e}else if(m!==g){g=Vo(Error(n(424)),u),u=P6(o,u,m,p,g);break e}else for(Bn=la(u.stateNode.containerInfo.firstChild),In=u,pt=!0,Zn=null,p=R1(u,null,m,p),u.child=p;p;)p.flags=p.flags&-3|4096,p=p.sibling;else{if(Lo(),m===g){u=Er(o,u,p);break e}tn(o,u,m,p)}u=u.child}return u;case 5:return L1(u),o===null&&h2(u),m=u.type,g=u.pendingProps,B=o!==null?o.memoizedProps:null,k=g.children,o2(m,g)?k=null:B!==null&&o2(m,B)&&(u.flags|=32),B6(o,u),tn(o,u,k,p),u.child;case 6:return o===null&&h2(u),null;case 13:return S6(o,u,p);case 4:return x2(u,u.stateNode.containerInfo),m=u.pendingProps,o===null?u.child=Fo(u,null,m,p):tn(o,u,m,p),u.child;case 11:return m=u.type,g=u.pendingProps,g=u.elementType===m?g:Jn(m,g),g6(o,u,m,g,p);case 7:return tn(o,u,u.pendingProps,p),u.child;case 8:return tn(o,u,u.pendingProps.children,p),u.child;case 12:return tn(o,u,u.pendingProps.children,p),u.child;case 10:e:{if(m=u.type._context,g=u.pendingProps,B=u.memoizedProps,k=g.value,nt(kl,m._currentValue),m._currentValue=k,B!==null)if(Xn(B.value,k)){if(B.children===g.children&&!cn.current){u=Er(o,u,p);break e}}else for(B=u.child,B!==null&&(B.return=u);B!==null;){var D=B.dependencies;if(D!==null){k=B.child;for(var q=D.firstContext;q!==null;){if(q.context===m){if(B.tag===1){q=Nr(-1,p&-p),q.tag=2;var te=B.updateQueue;if(te!==null){te=te.shared;var ie=te.pending;ie===null?q.next=q:(q.next=ie.next,ie.next=q),te.pending=q}}B.lanes|=p,q=B.alternate,q!==null&&(q.lanes|=p),b2(B.return,p,u),D.lanes|=p;break}q=q.next}}else if(B.tag===10)k=B.type===u.type?null:B.child;else if(B.tag===18){if(k=B.return,k===null)throw Error(n(341));k.lanes|=p,D=k.alternate,D!==null&&(D.lanes|=p),b2(k,p,u),k=B.sibling}else k=B.child;if(k!==null)k.return=B;else for(k=B;k!==null;){if(k===u){k=null;break}if(B=k.sibling,B!==null){B.return=k.return,k=B;break}k=k.return}B=k}tn(o,u,g.children,p),u=u.child}return u;case 9:return g=u.type,m=u.pendingProps.children,zo(u,p),g=Tn(g),m=m(g),u.flags|=1,tn(o,u,m,p),u.child;case 14:return m=u.type,g=Jn(m,u.pendingProps),g=Jn(m.type,g),y6(o,u,m,g,p);case 15:return b6(o,u,u.type,u.pendingProps,p);case 17:return m=u.type,g=u.pendingProps,g=u.elementType===m?g:Jn(m,g),zl(o,u),u.tag=1,fn(m)?(o=!0,Wl(u)):o=!1,zo(u,p),p6(u,m,g),T2(u,m,g,p),D2(null,u,m,!0,o,p);case 19:return A6(o,u,p);case 22:return I6(o,u,p)}throw Error(n(156,u.tag))};function X6(o,u){return Ob(o,u)}function VC(o,u,p,m){this.tag=o,this.key=p,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=m,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(o,u,p,m){return new VC(o,u,p,m)}function of(o){return o=o.prototype,!(!o||!o.isReactComponent)}function GC(o){if(typeof o=="function")return of(o)?1:0;if(o!=null){if(o=o.$$typeof,o===E)return 11;if(o===G)return 14}return 2}function Ia(o,u){var p=o.alternate;return p===null?(p=jn(o.tag,u,o.key,o.mode),p.elementType=o.elementType,p.type=o.type,p.stateNode=o.stateNode,p.alternate=o,o.alternate=p):(p.pendingProps=u,p.type=o.type,p.flags=0,p.subtreeFlags=0,p.deletions=null),p.flags=o.flags&14680064,p.childLanes=o.childLanes,p.lanes=o.lanes,p.child=o.child,p.memoizedProps=o.memoizedProps,p.memoizedState=o.memoizedState,p.updateQueue=o.updateQueue,u=o.dependencies,p.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},p.sibling=o.sibling,p.index=o.index,p.ref=o.ref,p}function tp(o,u,p,m,g,B){var k=2;if(m=o,typeof o=="function")of(o)&&(k=1);else if(typeof o=="string")k=5;else e:switch(o){case N:return eo(p.children,g,B,u);case P:k=8,g|=8;break;case C:return o=jn(12,p,u,g|2),o.elementType=C,o.lanes=B,o;case $:return o=jn(13,p,u,g),o.elementType=$,o.lanes=B,o;case V:return o=jn(19,p,u,g),o.elementType=V,o.lanes=B,o;case Q:return np(p,g,B,u);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case T:k=10;break e;case j:k=9;break e;case E:k=11;break e;case G:k=14;break e;case z:k=16,m=null;break e}throw Error(n(130,o==null?o:typeof o,""))}return u=jn(k,p,u,g),u.elementType=o,u.type=m,u.lanes=B,u}function eo(o,u,p,m){return o=jn(7,o,m,u),o.lanes=p,o}function np(o,u,p,m){return o=jn(22,o,m,u),o.elementType=Q,o.lanes=p,o.stateNode={isHidden:!1},o}function uf(o,u,p){return o=jn(6,o,null,u),o.lanes=p,o}function sf(o,u,p){return u=jn(4,o.children!==null?o.children:[],o.key,u),u.lanes=p,u.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},u}function KC(o,u,p,m,g){this.tag=u,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=E0(0),this.expirationTimes=E0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=E0(0),this.identifierPrefix=m,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function lf(o,u,p,m,g,B,k,D,q){return o=new KC(o,u,p,D,q),u===1?(u=1,B===!0&&(u|=8)):u=0,B=jn(3,null,null,u),o.current=B,B.stateNode=o,B.memoizedState={element:m,isDehydrated:p,cache:null,transitions:null,pendingSuspenseBoundaries:null},B2(B),o}function QC(o,u,p){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:m==null?null:""+m,children:o,containerInfo:u,implementation:p}}function Z6(o){if(!o)return ca;o=o._reactInternals;e:{if(Fa(o)!==o||o.tag!==1)throw Error(n(170));var u=o;do{switch(u.tag){case 3:u=u.stateNode.context;break e;case 1:if(fn(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break e}}u=u.return}while(u!==null);throw Error(n(171))}if(o.tag===1){var p=o.type;if(fn(p))return W1(o,p,u)}return u}function J6(o,u,p,m,g,B,k,D,q){return o=lf(p,m,!0,o,g,B,k,D,q),o.context=Z6(null),p=o.current,m=nn(),g=ya(p),B=Nr(m,g),B.callback=u??null,ha(p,B,g),o.current.lanes=g,uu(o,g,m),mn(o,m),o}function rp(o,u,p,m){var g=u.current,B=nn(),k=ya(g);return p=Z6(p),u.context===null?u.context=p:u.pendingContext=p,u=Nr(B,k),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ha(g,u,k),o!==null&&(nr(o,g,k,B),El(o,g,k)),k}function ap(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function eI(o,u){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var p=o.retryLane;o.retryLane=p!==0&&p<u?p:u}}function pf(o,u){eI(o,u),(o=o.alternate)&&eI(o,u)}function YC(){return null}var tI=typeof reportError=="function"?reportError:function(o){console.error(o)};function cf(o){this._internalRoot=o}op.prototype.render=cf.prototype.render=function(o){var u=this._internalRoot;if(u===null)throw Error(n(409));rp(o,u,null,null)},op.prototype.unmount=cf.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var u=o.containerInfo;Xa(function(){rp(null,o,null,null)}),u[_r]=null}};function op(o){this._internalRoot=o}op.prototype.unstable_scheduleHydration=function(o){if(o){var u=jb();o={blockedOn:null,target:o,priority:u};for(var p=0;p<ia.length&&u!==0&&u<ia[p].priority;p++);ia.splice(p,0,o),p===0&&Lb(o)}};function ff(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function ip(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function nI(){}function XC(o,u,p,m,g){if(g){if(typeof m=="function"){var B=m;m=function(){var te=ap(k);B.call(te)}}var k=J6(u,m,o,0,null,!1,!1,"",nI);return o._reactRootContainer=k,o[_r]=k.current,Bu(o.nodeType===8?o.parentNode:o),Xa(),k}for(;g=o.lastChild;)o.removeChild(g);if(typeof m=="function"){var D=m;m=function(){var te=ap(q);D.call(te)}}var q=lf(o,0,!1,null,null,!1,!1,"",nI);return o._reactRootContainer=q,o[_r]=q.current,Bu(o.nodeType===8?o.parentNode:o),Xa(function(){rp(u,q,p,m)}),q}function up(o,u,p,m,g){var B=p._reactRootContainer;if(B){var k=B;if(typeof g=="function"){var D=g;g=function(){var q=ap(k);D.call(q)}}rp(u,k,o,g)}else k=XC(p,u,o,g,m);return ap(k)}Rb=function(o){switch(o.tag){case 3:var u=o.stateNode;if(u.current.memoizedState.isDehydrated){var p=iu(u.pendingLanes);p!==0&&(T0(u,p|1),mn(u,wt()),(ze&6)===0&&(Qo=wt()+500,fa()))}break;case 13:Xa(function(){var m=kr(o,1);if(m!==null){var g=nn();nr(m,o,1,g)}}),pf(o,1)}},R0=function(o){if(o.tag===13){var u=kr(o,134217728);if(u!==null){var p=nn();nr(u,o,134217728,p)}pf(o,134217728)}},Hb=function(o){if(o.tag===13){var u=ya(o),p=kr(o,u);if(p!==null){var m=nn();nr(p,o,u,m)}pf(o,u)}},jb=function(){return Ze},Db=function(o,u){var p=Ze;try{return Ze=o,u()}finally{Ze=p}},_0=function(o,u,p){switch(u){case"input":if(Fe(o,p),u=p.name,p.type==="radio"&&u!=null){for(p=o;p.parentNode;)p=p.parentNode;for(p=p.querySelectorAll("input[name="+JSON.stringify(""+u)+'][type="radio"]'),u=0;u<p.length;u++){var m=p[u];if(m!==o&&m.form===o.form){var g=Pl(m);if(!g)throw Error(n(90));re(m),Fe(m,g)}}}break;case"textarea":gt(o,p);break;case"select":u=p.value,u!=null&&Bt(o,!!p.multiple,u,!1)}},wb=nf,Pb=Xa;var ZC={usingClientEntryPoint:!1,Events:[Pu,Ro,Pl,Bb,xb,nf]},ju={findFiberByHostInstance:qa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JC={bundleType:ju.bundleType,version:ju.version,rendererPackageName:ju.rendererPackageName,rendererConfig:ju.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=_b(o),o===null?null:o.stateNode},findFiberByHostInstance:ju.findFiberByHostInstance||YC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sp.isDisabled&&sp.supportsFiber)try{ol=sp.inject(JC),fr=sp}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZC,vn.createPortal=function(o,u){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ff(u))throw Error(n(200));return QC(o,u,null,p)},vn.createRoot=function(o,u){if(!ff(o))throw Error(n(299));var p=!1,m="",g=tI;return u!=null&&(u.unstable_strictMode===!0&&(p=!0),u.identifierPrefix!==void 0&&(m=u.identifierPrefix),u.onRecoverableError!==void 0&&(g=u.onRecoverableError)),u=lf(o,1,!1,null,null,p,!1,m,g),o[_r]=u.current,Bu(o.nodeType===8?o.parentNode:o),new cf(u)},vn.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var u=o._reactInternals;if(u===void 0)throw typeof o.render=="function"?Error(n(188)):(o=Object.keys(o).join(","),Error(n(268,o)));return o=_b(u),o=o===null?null:o.stateNode,o},vn.flushSync=function(o){return Xa(o)},vn.hydrate=function(o,u,p){if(!ip(u))throw Error(n(200));return up(null,o,u,!0,p)},vn.hydrateRoot=function(o,u,p){if(!ff(o))throw Error(n(405));var m=p!=null&&p.hydratedSources||null,g=!1,B="",k=tI;if(p!=null&&(p.unstable_strictMode===!0&&(g=!0),p.identifierPrefix!==void 0&&(B=p.identifierPrefix),p.onRecoverableError!==void 0&&(k=p.onRecoverableError)),u=J6(u,null,o,1,p??null,g,!1,B,k),o[_r]=u.current,Bu(o),m)for(o=0;o<m.length;o++)p=m[o],g=p._getVersion,g=g(p._source),u.mutableSourceEagerHydrationData==null?u.mutableSourceEagerHydrationData=[p,g]:u.mutableSourceEagerHydrationData.push(p,g);return new op(u)},vn.render=function(o,u,p){if(!ip(u))throw Error(n(200));return up(null,o,u,!1,p)},vn.unmountComponentAtNode=function(o){if(!ip(o))throw Error(n(40));return o._reactRootContainer?(Xa(function(){up(null,null,o,!1,function(){o._reactRootContainer=null,o[_r]=null})}),!0):!1},vn.unstable_batchedUpdates=nf,vn.unstable_renderSubtreeIntoContainer=function(o,u,p,m){if(!ip(p))throw Error(n(200));if(o==null||o._reactInternals===void 0)throw Error(n(38));return up(o,u,p,!1,m)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var pI;function C3(){if(pI)return mf.exports;pI=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),mf.exports=lk(),mf.exports}var cI;function pk(){if(cI)return pp;cI=1;var e=C3();return pp.createRoot=e.createRoot,pp.hydrateRoot=e.hydrateRoot,pp}var ck=pk(),X=uy();const R=Xe(X),fk=rk({__proto__:null,default:R},[X]);var Ap={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var dk=Ap.exports,fI;function hk(){return fI||(fI=1,(function(e,t){((n,r)=>{e.exports=r()})(dk,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},a,i=!r.document&&!!r.postMessage,s=r.IS_PAPA_WORKER||!1,l={},c=0,f={};function h(P){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(C){var T=w(C);T.chunkSize=parseInt(T.chunkSize),C.step||C.chunk||(T.chunkSize=null),this._handle=new I(T),(this._handle.streamer=this)._config=T}).call(this,P),this.parseChunk=function(C,T){var j=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<j){let $=this._config.newline;$||(E=this._config.quoteChar||'"',$=this._handle.guessLineEndings(C,E)),C=[...C.split($).slice(j)].join($)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(E=this._config.beforeFirstChunk(C))!==void 0&&(C=E),this.isFirstChunk=!1,this._halted=!1;var j=this._partialLine+C,E=(this._partialLine="",this._handle.parse(j,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(C=E.meta.cursor,j=(this._finished||(this._partialLine=j.substring(C-this._baseIndex),this._baseIndex=C),E&&E.data&&(this._rowCount+=E.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),s)r.postMessage({results:E,workerId:f.WORKER_ID,finished:j});else if(N(this._config.chunk)&&!T){if(this._config.chunk(E,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=E=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(E.data),this._completeResults.errors=this._completeResults.errors.concat(E.errors),this._completeResults.meta=E.meta),this._completed||!j||!N(this._config.complete)||E&&E.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),j||E&&E.meta.paused||this._nextChunk(),E}this._halted=!0},this._sendError=function(C){N(this._config.error)?this._config.error(C):s&&this._config.error&&r.postMessage({workerId:f.WORKER_ID,error:C,finished:!1})}}function d(P){var C;(P=P||{}).chunkSize||(P.chunkSize=f.RemoteChunkSize),h.call(this,P),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(T){this._input=T,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(C=new XMLHttpRequest,this._config.withCredentials&&(C.withCredentials=this._config.withCredentials),i||(C.onload=_(this._chunkLoaded,this),C.onerror=_(this._chunkError,this)),C.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var T,j=this._config.downloadRequestHeaders;for(T in j)C.setRequestHeader(T,j[T])}var E;this._config.chunkSize&&(E=this._start+this._config.chunkSize-1,C.setRequestHeader("Range","bytes="+this._start+"-"+E));try{C.send(this._config.downloadRequestBody)}catch($){this._chunkError($.message)}i&&C.status===0&&this._chunkError()}},this._chunkLoaded=function(){C.readyState===4&&(C.status<200||400<=C.status?this._chunkError():(this._start+=this._config.chunkSize||C.responseText.length,this._finished=!this._config.chunkSize||this._start>=(T=>(T=T.getResponseHeader("Content-Range"))!==null?parseInt(T.substring(T.lastIndexOf("/")+1)):-1)(C),this.parseChunk(C.responseText)))},this._chunkError=function(T){T=C.statusText||T,this._sendError(new Error(T))}}function v(P){(P=P||{}).chunkSize||(P.chunkSize=f.LocalChunkSize),h.call(this,P);var C,T,j=typeof FileReader<"u";this.stream=function(E){this._input=E,T=E.slice||E.webkitSlice||E.mozSlice,j?((C=new FileReader).onload=_(this._chunkLoaded,this),C.onerror=_(this._chunkError,this)):C=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var E=this._input,$=(this._config.chunkSize&&($=Math.min(this._start+this._config.chunkSize,this._input.size),E=T.call(E,this._start,$)),C.readAsText(E,this._config.encoding));j||this._chunkLoaded({target:{result:$}})},this._chunkLoaded=function(E){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(E.target.result)},this._chunkError=function(){this._sendError(C.error)}}function y(P){var C;h.call(this,P=P||{}),this.stream=function(T){return C=T,this._nextChunk()},this._nextChunk=function(){var T,j;if(!this._finished)return T=this._config.chunkSize,C=T?(j=C.substring(0,T),C.substring(T)):(j=C,""),this._finished=!C,this.parseChunk(j)}}function x(P){h.call(this,P=P||{});var C=[],T=!0,j=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(E){this._input=E,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){j&&C.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),C.length?this.parseChunk(C.shift()):T=!0},this._streamData=_(function(E){try{C.push(typeof E=="string"?E:E.toString(this._config.encoding)),T&&(T=!1,this._checkIsFinished(),this.parseChunk(C.shift()))}catch($){this._streamError($)}},this),this._streamError=_(function(E){this._streamCleanUp(),this._sendError(E)},this),this._streamEnd=_(function(){this._streamCleanUp(),j=!0,this._streamData("")},this),this._streamCleanUp=_(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function I(P){var C,T,j,E,$=Math.pow(2,53),V=-$,G=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,z=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Q=this,L=0,K=0,Y=!1,H=!1,F=[],J={data:[],errors:[],meta:{}};function ue(fe){return P.skipEmptyLines==="greedy"?fe.join("").trim()==="":fe.length===1&&fe[0].length===0}function he(){if(J&&j&&(ye("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),j=!1),P.skipEmptyLines&&(J.data=J.data.filter(function(re){return!ue(re)})),ge()){let re=function(Re,Pe){N(P.transformHeader)&&(Re=P.transformHeader(Re,Pe)),F.push(Re)};var ce=re;if(J)if(Array.isArray(J.data[0])){for(var fe=0;ge()&&fe<J.data.length;fe++)J.data[fe].forEach(re);J.data.splice(0,1)}else J.data.forEach(re)}function ne(re,Re){for(var Pe=P.header?{}:[],Ce=0;Ce<re.length;Ce++){var Ae=Ce,Fe=re[Ce],Fe=((je,qe)=>(Ke=>(P.dynamicTypingFunction&&P.dynamicTyping[Ke]===void 0&&(P.dynamicTyping[Ke]=P.dynamicTypingFunction(Ke)),(P.dynamicTyping[Ke]||P.dynamicTyping)===!0))(je)?qe==="true"||qe==="TRUE"||qe!=="false"&&qe!=="FALSE"&&((Ke=>{if(G.test(Ke)&&(Ke=parseFloat(Ke),V<Ke&&Ke<$))return 1})(qe)?parseFloat(qe):z.test(qe)?new Date(qe):qe===""?null:qe):qe)(Ae=P.header?Ce>=F.length?"__parsed_extra":F[Ce]:Ae,Fe=P.transform?P.transform(Fe,Ae):Fe);Ae==="__parsed_extra"?(Pe[Ae]=Pe[Ae]||[],Pe[Ae].push(Fe)):Pe[Ae]=Fe}return P.header&&(Ce>F.length?ye("FieldMismatch","TooManyFields","Too many fields: expected "+F.length+" fields but parsed "+Ce,K+Re):Ce<F.length&&ye("FieldMismatch","TooFewFields","Too few fields: expected "+F.length+" fields but parsed "+Ce,K+Re)),Pe}var de;J&&(P.header||P.dynamicTyping||P.transform)&&(de=1,!J.data.length||Array.isArray(J.data[0])?(J.data=J.data.map(ne),de=J.data.length):J.data=ne(J.data,0),P.header&&J.meta&&(J.meta.fields=F),K+=de)}function ge(){return P.header&&F.length===0}function ye(fe,ne,de,ce){fe={type:fe,code:ne,message:de},ce!==void 0&&(fe.row=ce),J.errors.push(fe)}N(P.step)&&(E=P.step,P.step=function(fe){J=fe,ge()?he():(he(),J.data.length!==0&&(L+=fe.data.length,P.preview&&L>P.preview?T.abort():(J.data=J.data[0],E(J,Q))))}),this.parse=function(fe,ne,de){var ce=P.quoteChar||'"',ce=(P.newline||(P.newline=this.guessLineEndings(fe,ce)),j=!1,P.delimiter?N(P.delimiter)&&(P.delimiter=P.delimiter(fe),J.meta.delimiter=P.delimiter):((ce=((re,Re,Pe,Ce,Ae)=>{var Fe,je,qe,Ke;Ae=Ae||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var Bt=0;Bt<Ae.length;Bt++){for(var vt,On=Ae[Bt],gt=0,Kt=0,xt=0,jt=(qe=void 0,new S({comments:Ce,delimiter:On,newline:Re,preview:10}).parse(re)),pn=0;pn<jt.data.length;pn++)Pe&&ue(jt.data[pn])?xt++:(vt=jt.data[pn].length,Kt+=vt,qe===void 0?qe=vt:0<vt&&(gt+=Math.abs(vt-qe),qe=vt));0<jt.data.length&&(Kt/=jt.data.length-xt),(je===void 0||gt<=je)&&(Ke===void 0||Ke<Kt)&&1.99<Kt&&(je=gt,Fe=On,Ke=Kt)}return{successful:!!(P.delimiter=Fe),bestDelimiter:Fe}})(fe,P.newline,P.skipEmptyLines,P.comments,P.delimitersToGuess)).successful?P.delimiter=ce.bestDelimiter:(j=!0,P.delimiter=f.DefaultDelimiter),J.meta.delimiter=P.delimiter),w(P));return P.preview&&P.header&&ce.preview++,C=fe,T=new S(ce),J=T.parse(C,ne,de),he(),Y?{meta:{paused:!0}}:J||{meta:{paused:!1}}},this.paused=function(){return Y},this.pause=function(){Y=!0,T.abort(),C=N(P.chunk)?"":C.substring(T.getCharIndex())},this.resume=function(){Q.streamer._halted?(Y=!1,Q.streamer.parseChunk(C,!0)):setTimeout(Q.resume,3)},this.aborted=function(){return H},this.abort=function(){H=!0,T.abort(),J.meta.aborted=!0,N(P.complete)&&P.complete(J),C=""},this.guessLineEndings=function(re,ce){re=re.substring(0,1048576);var ce=new RegExp(b(ce)+"([^]*?)"+b(ce),"gm"),de=(re=re.replace(ce,"")).split("\r"),ce=re.split(`
`),re=1<ce.length&&ce[0].length<de[0].length;if(de.length===1||re)return`
`;for(var Re=0,Pe=0;Pe<de.length;Pe++)de[Pe][0]===`
`&&Re++;return Re>=de.length/2?`\r
`:"\r"}}function b(P){return P.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function S(P){var C=(P=P||{}).delimiter,T=P.newline,j=P.comments,E=P.step,$=P.preview,V=P.fastMode,G=null,z=!1,Q=P.quoteChar==null?'"':P.quoteChar,L=Q;if(P.escapeChar!==void 0&&(L=P.escapeChar),(typeof C!="string"||-1<f.BAD_DELIMITERS.indexOf(C))&&(C=","),j===C)throw new Error("Comment character same as delimiter");j===!0?j="#":(typeof j!="string"||-1<f.BAD_DELIMITERS.indexOf(j))&&(j=!1),T!==`
`&&T!=="\r"&&T!==`\r
`&&(T=`
`);var K=0,Y=!1;this.parse=function(H,F,J){if(typeof H!="string")throw new Error("Input must be a string");var ue=H.length,he=C.length,ge=T.length,ye=j.length,fe=N(E),ne=[],de=[],ce=[],re=K=0;if(!H)return gt();if(V||V!==!1&&H.indexOf(Q)===-1){for(var Re=H.split(T),Pe=0;Pe<Re.length;Pe++){if(ce=Re[Pe],K+=ce.length,Pe!==Re.length-1)K+=T.length;else if(J)return gt();if(!j||ce.substring(0,ye)!==j){if(fe){if(ne=[],Ke(ce.split(C)),Kt(),Y)return gt()}else Ke(ce.split(C));if($&&$<=Pe)return ne=ne.slice(0,$),gt(!0)}}return gt()}for(var Ce=H.indexOf(C,K),Ae=H.indexOf(T,K),Fe=new RegExp(b(L)+b(Q),"g"),je=H.indexOf(Q,K);;)if(H[K]===Q)for(je=K,K++;;){if((je=H.indexOf(Q,je+1))===-1)return J||de.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ne.length,index:K}),vt();if(je===ue-1)return vt(H.substring(K,je).replace(Fe,Q));if(Q===L&&H[je+1]===L)je++;else if(Q===L||je===0||H[je-1]!==L){Ce!==-1&&Ce<je+1&&(Ce=H.indexOf(C,je+1));var qe=Bt((Ae=Ae!==-1&&Ae<je+1?H.indexOf(T,je+1):Ae)===-1?Ce:Math.min(Ce,Ae));if(H.substr(je+1+qe,he)===C){ce.push(H.substring(K,je).replace(Fe,Q)),H[K=je+1+qe+he]!==Q&&(je=H.indexOf(Q,K)),Ce=H.indexOf(C,K),Ae=H.indexOf(T,K);break}if(qe=Bt(Ae),H.substring(je+1+qe,je+1+qe+ge)===T){if(ce.push(H.substring(K,je).replace(Fe,Q)),On(je+1+qe+ge),Ce=H.indexOf(C,K),je=H.indexOf(Q,K),fe&&(Kt(),Y))return gt();if($&&ne.length>=$)return gt(!0);break}de.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ne.length,index:K}),je++}}else if(j&&ce.length===0&&H.substring(K,K+ye)===j){if(Ae===-1)return gt();K=Ae+ge,Ae=H.indexOf(T,K),Ce=H.indexOf(C,K)}else if(Ce!==-1&&(Ce<Ae||Ae===-1))ce.push(H.substring(K,Ce)),K=Ce+he,Ce=H.indexOf(C,K);else{if(Ae===-1)break;if(ce.push(H.substring(K,Ae)),On(Ae+ge),fe&&(Kt(),Y))return gt();if($&&ne.length>=$)return gt(!0)}return vt();function Ke(xt){ne.push(xt),re=K}function Bt(xt){var jt=0;return jt=xt!==-1&&(xt=H.substring(je+1,xt))&&xt.trim()===""?xt.length:jt}function vt(xt){return J||(xt===void 0&&(xt=H.substring(K)),ce.push(xt),K=ue,Ke(ce),fe&&Kt()),gt()}function On(xt){K=xt,Ke(ce),ce=[],Ae=H.indexOf(T,K)}function gt(xt){if(P.header&&!F&&ne.length&&!z){var jt=ne[0],pn=Object.create(null),Wo=new Set(jt);let ta=!1;for(let Cn=0;Cn<jt.length;Cn++){let kn=jt[Cn];if(pn[kn=N(P.transformHeader)?P.transformHeader(kn,Cn):kn]){let na,nu=pn[kn];for(;na=kn+"_"+nu,nu++,Wo.has(na););Wo.add(na),jt[Cn]=na,pn[kn]++,ta=!0,(G=G===null?{}:G)[na]=kn}else pn[kn]=1,jt[Cn]=kn;Wo.add(kn)}ta&&console.warn("Duplicate headers found and renamed."),z=!0}return{data:ne,errors:de,meta:{delimiter:C,linebreak:T,aborted:Y,truncated:!!xt,cursor:re+(F||0),renamedHeaders:G}}}function Kt(){E(gt()),ne=[],de=[]}},this.abort=function(){Y=!0},this.getCharIndex=function(){return K}}function W(P){var C=P.data,T=l[C.workerId],j=!1;if(C.error)T.userError(C.error,C.file);else if(C.results&&C.results.data){var E={abort:function(){j=!0,A(C.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:O,resume:O};if(N(T.userStep)){for(var $=0;$<C.results.data.length&&(T.userStep({data:C.results.data[$],errors:C.results.errors,meta:C.results.meta},E),!j);$++);delete C.results}else N(T.userChunk)&&(T.userChunk(C.results,E,C.file),delete C.results)}C.finished&&!j&&A(C.workerId,C.results)}function A(P,C){var T=l[P];N(T.userComplete)&&T.userComplete(C),T.terminate(),delete l[P]}function O(){throw new Error("Not implemented.")}function w(P){if(typeof P!="object"||P===null)return P;var C,T=Array.isArray(P)?[]:{};for(C in P)T[C]=w(P[C]);return T}function _(P,C){return function(){P.apply(C,arguments)}}function N(P){return typeof P=="function"}return f.parse=function(P,C){var T=(C=C||{}).dynamicTyping||!1;if(N(T)&&(C.dynamicTypingFunction=T,T={}),C.dynamicTyping=T,C.transform=!!N(C.transform)&&C.transform,!C.worker||!f.WORKERS_SUPPORTED)return T=null,f.NODE_STREAM_INPUT,typeof P=="string"?(P=(j=>j.charCodeAt(0)!==65279?j:j.slice(1))(P),T=new(C.download?d:y)(C)):P.readable===!0&&N(P.read)&&N(P.on)?T=new x(C):(r.File&&P instanceof File||P instanceof Object)&&(T=new v(C)),T.stream(P);(T=(()=>{var j;return!!f.WORKERS_SUPPORTED&&(j=(()=>{var E=r.URL||r.webkitURL||null,$=n.toString();return f.BLOB_URL||(f.BLOB_URL=E.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",$,")();"],{type:"text/javascript"})))})(),(j=new r.Worker(j)).onmessage=W,j.id=c++,l[j.id]=j)})()).userStep=C.step,T.userChunk=C.chunk,T.userComplete=C.complete,T.userError=C.error,C.step=N(C.step),C.chunk=N(C.chunk),C.complete=N(C.complete),C.error=N(C.error),delete C.worker,T.postMessage({input:P,config:C,workerId:T.id})},f.unparse=function(P,C){var T=!1,j=!0,E=",",$=`\r
`,V='"',G=V+V,z=!1,Q=null,L=!1,K=((()=>{if(typeof C=="object"){if(typeof C.delimiter!="string"||f.BAD_DELIMITERS.filter(function(F){return C.delimiter.indexOf(F)!==-1}).length||(E=C.delimiter),typeof C.quotes!="boolean"&&typeof C.quotes!="function"&&!Array.isArray(C.quotes)||(T=C.quotes),typeof C.skipEmptyLines!="boolean"&&typeof C.skipEmptyLines!="string"||(z=C.skipEmptyLines),typeof C.newline=="string"&&($=C.newline),typeof C.quoteChar=="string"&&(V=C.quoteChar),typeof C.header=="boolean"&&(j=C.header),Array.isArray(C.columns)){if(C.columns.length===0)throw new Error("Option columns is empty");Q=C.columns}C.escapeChar!==void 0&&(G=C.escapeChar+V),C.escapeFormulae instanceof RegExp?L=C.escapeFormulae:typeof C.escapeFormulae=="boolean"&&C.escapeFormulae&&(L=/^[=+\-@\t\r].*$/)}})(),new RegExp(b(V),"g"));if(typeof P=="string"&&(P=JSON.parse(P)),Array.isArray(P)){if(!P.length||Array.isArray(P[0]))return Y(null,P,z);if(typeof P[0]=="object")return Y(Q||Object.keys(P[0]),P,z)}else if(typeof P=="object")return typeof P.data=="string"&&(P.data=JSON.parse(P.data)),Array.isArray(P.data)&&(P.fields||(P.fields=P.meta&&P.meta.fields||Q),P.fields||(P.fields=Array.isArray(P.data[0])?P.fields:typeof P.data[0]=="object"?Object.keys(P.data[0]):[]),Array.isArray(P.data[0])||typeof P.data[0]=="object"||(P.data=[P.data])),Y(P.fields||[],P.data||[],z);throw new Error("Unable to serialize unrecognized input");function Y(F,J,ue){var he="",ge=(typeof F=="string"&&(F=JSON.parse(F)),typeof J=="string"&&(J=JSON.parse(J)),Array.isArray(F)&&0<F.length),ye=!Array.isArray(J[0]);if(ge&&j){for(var fe=0;fe<F.length;fe++)0<fe&&(he+=E),he+=H(F[fe],fe);0<J.length&&(he+=$)}for(var ne=0;ne<J.length;ne++){var de=(ge?F:J[ne]).length,ce=!1,re=ge?Object.keys(J[ne]).length===0:J[ne].length===0;if(ue&&!ge&&(ce=ue==="greedy"?J[ne].join("").trim()==="":J[ne].length===1&&J[ne][0].length===0),ue==="greedy"&&ge){for(var Re=[],Pe=0;Pe<de;Pe++){var Ce=ye?F[Pe]:Pe;Re.push(J[ne][Ce])}ce=Re.join("").trim()===""}if(!ce){for(var Ae=0;Ae<de;Ae++){0<Ae&&!re&&(he+=E);var Fe=ge&&ye?F[Ae]:Ae;he+=H(J[ne][Fe],Ae)}ne<J.length-1&&(!ue||0<de&&!re)&&(he+=$)}}return he}function H(F,J){var ue,he;return F==null?"":F.constructor===Date?JSON.stringify(F).slice(1,25):(he=!1,L&&typeof F=="string"&&L.test(F)&&(F="'"+F,he=!0),ue=F.toString().replace(K,G),(he=he||T===!0||typeof T=="function"&&T(F,J)||Array.isArray(T)&&T[J]||((ge,ye)=>{for(var fe=0;fe<ye.length;fe++)if(-1<ge.indexOf(ye[fe]))return!0;return!1})(ue,f.BAD_DELIMITERS)||-1<ue.indexOf(E)||ue.charAt(0)===" "||ue.charAt(ue.length-1)===" ")?V+ue+V:ue)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!i&&!!r.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=S,f.ParserHandle=I,f.NetworkStreamer=d,f.FileStreamer=v,f.StringStreamer=y,f.ReadableStreamStreamer=x,r.jQuery&&((a=r.jQuery).fn.parse=function(P){var C=P.config||{},T=[];return this.each(function($){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var V=0;V<this.files.length;V++)T.push({file:this.files[V],inputElem:this,instanceConfig:a.extend({},C)})}),j(),this;function j(){if(T.length===0)N(P.complete)&&P.complete();else{var $,V,G,z,Q=T[0];if(N(P.before)){var L=P.before(Q.file,Q.inputElem);if(typeof L=="object"){if(L.action==="abort")return $="AbortError",V=Q.file,G=Q.inputElem,z=L.reason,void(N(P.error)&&P.error({name:$},V,G,z));if(L.action==="skip")return void E();typeof L.config=="object"&&(Q.instanceConfig=a.extend(Q.instanceConfig,L.config))}else if(L==="skip")return void E()}var K=Q.instanceConfig.complete;Q.instanceConfig.complete=function(Y){N(K)&&K(Y,Q.file,Q.inputElem),E()},f.parse(Q.file,Q.instanceConfig)}}function E(){T.splice(0,1),j()}}),s&&(r.onmessage=function(P){P=P.data,f.WORKER_ID===void 0&&P&&(f.WORKER_ID=P.workerId),typeof P.input=="string"?r.postMessage({workerId:f.WORKER_ID,results:f.parse(P.input,P.config),finished:!0}):(r.File&&P.input instanceof File||P.input instanceof Object)&&(P=f.parse(P.input,P.config))&&r.postMessage({workerId:f.WORKER_ID,results:P,finished:!0})}),(d.prototype=Object.create(h.prototype)).constructor=d,(v.prototype=Object.create(h.prototype)).constructor=v,(y.prototype=Object.create(y.prototype)).constructor=y,(x.prototype=Object.create(h.prototype)).constructor=x,f})})(Ap)),Ap.exports}var mk=hk();const dI=Xe(mk);function hI(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function k3(...e){return t=>{let n=!1;const r=e.map(a=>{const i=hI(a,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():hI(e[a],null)}}}}function Mp(...e){return X.useCallback(k3(...e),e)}var cs=X.forwardRef((e,t)=>{const{children:n,...r}=e,a=X.Children.toArray(n),i=a.find(gk);if(i){const s=i.props.children,l=a.map(c=>c===i?X.Children.count(s)>1?X.Children.only(null):X.isValidElement(s)?s.props.children:null:c);return M.jsx(Pv,{...r,ref:t,children:X.isValidElement(s)?X.cloneElement(s,void 0,l):null})}return M.jsx(Pv,{...r,ref:t,children:n})});cs.displayName="Slot";var Pv=X.forwardRef((e,t)=>{const{children:n,...r}=e;if(X.isValidElement(n)){const a=bk(n),i=yk(r,n.props);return n.type!==X.Fragment&&(i.ref=t?k3(t,a):a),X.cloneElement(n,i)}return X.Children.count(n)>1?X.Children.only(null):null});Pv.displayName="SlotClone";var vk=({children:e})=>M.jsx(M.Fragment,{children:e});function gk(e){return X.isValidElement(e)&&e.type===vk}function yk(e,t){const n={...t};for(const r in t){const a=e[r],i=t[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...l)=>{i(...l),a(...l)}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function bk(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function N3(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=N3(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function He(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=N3(e))&&(r&&(r+=" "),r+=t);return r}const mI=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,vI=He,Ik=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return vI(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:i}=t,s=Object.keys(a).map(f=>{const h=n==null?void 0:n[f],d=i==null?void 0:i[f];if(h===null)return null;const v=mI(h)||mI(d);return a[f][v]}),l=n&&Object.entries(n).reduce((f,h)=>{let[d,v]=h;return v===void 0||(f[d]=v),f},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((f,h)=>{let{class:d,className:v,...y}=h;return Object.entries(y).every(x=>{let[I,b]=x;return Array.isArray(b)?b.includes({...i,...l}[I]):{...i,...l}[I]===b})?[...f,d,v]:f},[]);return vI(e,s,c,n==null?void 0:n.class,n==null?void 0:n.className)},sy="-",Bk=e=>{const t=wk(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const l=s.split(sy);return l[0]===""&&l.length!==1&&l.shift(),E3(l,t)||xk(s)},getConflictingClassGroupIds:(s,l)=>{const c=n[s]||[];return l&&r[s]?[...c,...r[s]]:c}}},E3=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?E3(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const i=e.join(sy);return(s=t.validators.find(({validator:l})=>l(i)))==null?void 0:s.classGroupId},gI=/^\[(.+)\]$/,xk=e=>{if(gI.test(e)){const t=gI.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},wk=e=>{const{theme:t,classGroups:n}=e,r={nextPart:new Map,validators:[]};for(const a in n)Sv(n[a],r,a,t);return r},Sv=(e,t,n,r)=>{e.forEach(a=>{if(typeof a=="string"){const i=a===""?t:yI(t,a);i.classGroupId=n;return}if(typeof a=="function"){if(Pk(a)){Sv(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([i,s])=>{Sv(s,yI(t,i),n,r)})})},yI=(e,t)=>{let n=e;return t.split(sy).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Pk=e=>e.isThemeGetter,Sk=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const a=(i,s)=>{n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return a(i,s),s},set(i,s){n.has(i)?n.set(i,s):a(i,s)}}},Wv="!",Av=":",Wk=Av.length,Ak=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=a=>{const i=[];let s=0,l=0,c=0,f;for(let x=0;x<a.length;x++){let I=a[x];if(s===0&&l===0){if(I===Av){i.push(a.slice(c,x)),c=x+Wk;continue}if(I==="/"){f=x;continue}}I==="["?s++:I==="]"?s--:I==="("?l++:I===")"&&l--}const h=i.length===0?a:a.substring(c),d=_k(h),v=d!==h,y=f&&f>c?f-c:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:d,maybePostfixModifierPosition:y}};if(t){const a=t+Av,i=r;r=s=>s.startsWith(a)?i(s.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:s,maybePostfixModifierPosition:void 0}}if(n){const a=r;r=i=>n({className:i,parseClassName:a})}return r},_k=e=>e.endsWith(Wv)?e.substring(0,e.length-1):e.startsWith(Wv)?e.substring(1):e,Mk=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let i=[];return r.forEach(s=>{s[0]==="["||t[s]?(a.push(...i.sort(),s),i=[]):i.push(s)}),a.push(...i.sort()),a}},Ok=e=>({cache:Sk(e.cacheSize),parseClassName:Ak(e),sortModifiers:Mk(e),...Bk(e)}),Ck=/\s+/,kk=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=t,s=[],l=e.trim().split(Ck);let c="";for(let f=l.length-1;f>=0;f-=1){const h=l[f],{isExternal:d,modifiers:v,hasImportantModifier:y,baseClassName:x,maybePostfixModifierPosition:I}=n(h);if(d){c=h+(c.length>0?" "+c:c);continue}let b=!!I,S=r(b?x.substring(0,I):x);if(!S){if(!b){c=h+(c.length>0?" "+c:c);continue}if(S=r(x),!S){c=h+(c.length>0?" "+c:c);continue}b=!1}const W=i(v).join(":"),A=y?W+Wv:W,O=A+S;if(s.includes(O))continue;s.push(O);const w=a(S,b);for(let _=0;_<w.length;++_){const N=w[_];s.push(A+N)}c=h+(c.length>0?" "+c:c)}return c};function Nk(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=T3(t))&&(r&&(r+=" "),r+=n);return r}const T3=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=T3(e[r]))&&(n&&(n+=" "),n+=t);return n};function Ek(e,...t){let n,r,a,i=s;function s(c){const f=t.reduce((h,d)=>d(h),e());return n=Ok(f),r=n.cache.get,a=n.cache.set,i=l,l(c)}function l(c){const f=r(c);if(f)return f;const h=kk(c,n);return a(c,h),h}return function(){return i(Nk.apply(null,arguments))}}const Et=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},R3=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,H3=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Tk=/^\d+\/\d+$/,Rk=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Hk=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,jk=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Dk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$k=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xo=e=>Tk.test(e),$e=e=>!!e&&!Number.isNaN(Number(e)),xa=e=>!!e&&Number.isInteger(Number(e)),yf=e=>e.endsWith("%")&&$e(e.slice(0,-1)),Rr=e=>Rk.test(e),Lk=()=>!0,Fk=e=>Hk.test(e)&&!jk.test(e),j3=()=>!1,qk=e=>Dk.test(e),zk=e=>$k.test(e),Uk=e=>!xe(e)&&!we(e),Vk=e=>qi(e,L3,j3),xe=e=>R3.test(e),to=e=>qi(e,F3,Fk),bf=e=>qi(e,Xk,$e),bI=e=>qi(e,D3,j3),Gk=e=>qi(e,$3,zk),cp=e=>qi(e,q3,qk),we=e=>H3.test(e),$u=e=>zi(e,F3),Kk=e=>zi(e,Zk),II=e=>zi(e,D3),Qk=e=>zi(e,L3),Yk=e=>zi(e,$3),fp=e=>zi(e,q3,!0),qi=(e,t,n)=>{const r=R3.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},zi=(e,t,n=!1)=>{const r=H3.exec(e);return r?r[1]?t(r[1]):n:!1},D3=e=>e==="position"||e==="percentage",$3=e=>e==="image"||e==="url",L3=e=>e==="length"||e==="size"||e==="bg-size",F3=e=>e==="length",Xk=e=>e==="number",Zk=e=>e==="family-name",q3=e=>e==="shadow",Jk=()=>{const e=Et("color"),t=Et("font"),n=Et("text"),r=Et("font-weight"),a=Et("tracking"),i=Et("leading"),s=Et("breakpoint"),l=Et("container"),c=Et("spacing"),f=Et("radius"),h=Et("shadow"),d=Et("inset-shadow"),v=Et("text-shadow"),y=Et("drop-shadow"),x=Et("blur"),I=Et("perspective"),b=Et("aspect"),S=Et("ease"),W=Et("animate"),A=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...O(),we,xe],_=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto","contain","none"],P=()=>[we,xe,c],C=()=>[Xo,"full","auto",...P()],T=()=>[xa,"none","subgrid",we,xe],j=()=>["auto",{span:["full",xa,we,xe]},xa,we,xe],E=()=>[xa,"auto",we,xe],$=()=>["auto","min","max","fr",we,xe],V=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],G=()=>["start","end","center","stretch","center-safe","end-safe"],z=()=>["auto",...P()],Q=()=>[Xo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],L=()=>[e,we,xe],K=()=>[...O(),II,bI,{position:[we,xe]}],Y=()=>["no-repeat",{repeat:["","x","y","space","round"]}],H=()=>["auto","cover","contain",Qk,Vk,{size:[we,xe]}],F=()=>[yf,$u,to],J=()=>["","none","full",f,we,xe],ue=()=>["",$e,$u,to],he=()=>["solid","dashed","dotted","double"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ye=()=>[$e,yf,II,bI],fe=()=>["","none",x,we,xe],ne=()=>["none",$e,we,xe],de=()=>["none",$e,we,xe],ce=()=>[$e,we,xe],re=()=>[Xo,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Rr],breakpoint:[Rr],color:[Lk],container:[Rr],"drop-shadow":[Rr],ease:["in","out","in-out"],font:[Uk],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Rr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Rr],shadow:[Rr],spacing:["px",$e],text:[Rr],"text-shadow":[Rr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Xo,xe,we,b]}],container:["container"],columns:[{columns:[$e,xe,we,l]}],"break-after":[{"break-after":A()}],"break-before":[{"break-before":A()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[xa,"auto",we,xe]}],basis:[{basis:[Xo,"full","auto",l,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,Xo,"auto","initial","none",xe]}],grow:[{grow:["",$e,we,xe]}],shrink:[{shrink:["",$e,we,xe]}],order:[{order:[xa,"first","last","none",we,xe]}],"grid-cols":[{"grid-cols":T()}],"col-start-end":[{col:j()}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":T()}],"row-start-end":[{row:j()}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":$()}],"auto-rows":[{"auto-rows":$()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...V(),"normal"]}],"justify-items":[{"justify-items":[...G(),"normal"]}],"justify-self":[{"justify-self":["auto",...G()]}],"align-content":[{content:["normal",...V()]}],"align-items":[{items:[...G(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...G(),{baseline:["","last"]}]}],"place-content":[{"place-content":V()}],"place-items":[{"place-items":[...G(),"baseline"]}],"place-self":[{"place-self":["auto",...G()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:z()}],mx:[{mx:z()}],my:[{my:z()}],ms:[{ms:z()}],me:[{me:z()}],mt:[{mt:z()}],mr:[{mr:z()}],mb:[{mb:z()}],ml:[{ml:z()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],w:[{w:[l,"screen",...Q()]}],"min-w":[{"min-w":[l,"screen","none",...Q()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[s]},...Q()]}],h:[{h:["screen",...Q()]}],"min-h":[{"min-h":["screen","none",...Q()]}],"max-h":[{"max-h":["screen",...Q()]}],"font-size":[{text:["base",n,$u,to]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,we,bf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",yf,xe]}],"font-family":[{font:[Kk,xe,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,we,xe]}],"line-clamp":[{"line-clamp":[$e,"none",we,bf]}],leading:[{leading:[i,...P()]}],"list-image":[{"list-image":["none",we,xe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",we,xe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:L()}],"text-color":[{text:L()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",we,to]}],"text-decoration-color":[{decoration:L()}],"underline-offset":[{"underline-offset":[$e,"auto",we,xe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we,xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we,xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:K()}],"bg-repeat":[{bg:Y()}],"bg-size":[{bg:H()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xa,we,xe],radial:["",we,xe],conic:[xa,we,xe]},Yk,Gk]}],"bg-color":[{bg:L()}],"gradient-from-pos":[{from:F()}],"gradient-via-pos":[{via:F()}],"gradient-to-pos":[{to:F()}],"gradient-from":[{from:L()}],"gradient-via":[{via:L()}],"gradient-to":[{to:L()}],rounded:[{rounded:J()}],"rounded-s":[{"rounded-s":J()}],"rounded-e":[{"rounded-e":J()}],"rounded-t":[{"rounded-t":J()}],"rounded-r":[{"rounded-r":J()}],"rounded-b":[{"rounded-b":J()}],"rounded-l":[{"rounded-l":J()}],"rounded-ss":[{"rounded-ss":J()}],"rounded-se":[{"rounded-se":J()}],"rounded-ee":[{"rounded-ee":J()}],"rounded-es":[{"rounded-es":J()}],"rounded-tl":[{"rounded-tl":J()}],"rounded-tr":[{"rounded-tr":J()}],"rounded-br":[{"rounded-br":J()}],"rounded-bl":[{"rounded-bl":J()}],"border-w":[{border:ue()}],"border-w-x":[{"border-x":ue()}],"border-w-y":[{"border-y":ue()}],"border-w-s":[{"border-s":ue()}],"border-w-e":[{"border-e":ue()}],"border-w-t":[{"border-t":ue()}],"border-w-r":[{"border-r":ue()}],"border-w-b":[{"border-b":ue()}],"border-w-l":[{"border-l":ue()}],"divide-x":[{"divide-x":ue()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ue()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...he(),"hidden","none"]}],"divide-style":[{divide:[...he(),"hidden","none"]}],"border-color":[{border:L()}],"border-color-x":[{"border-x":L()}],"border-color-y":[{"border-y":L()}],"border-color-s":[{"border-s":L()}],"border-color-e":[{"border-e":L()}],"border-color-t":[{"border-t":L()}],"border-color-r":[{"border-r":L()}],"border-color-b":[{"border-b":L()}],"border-color-l":[{"border-l":L()}],"divide-color":[{divide:L()}],"outline-style":[{outline:[...he(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,we,xe]}],"outline-w":[{outline:["",$e,$u,to]}],"outline-color":[{outline:L()}],shadow:[{shadow:["","none",h,fp,cp]}],"shadow-color":[{shadow:L()}],"inset-shadow":[{"inset-shadow":["none",d,fp,cp]}],"inset-shadow-color":[{"inset-shadow":L()}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:L()}],"ring-offset-w":[{"ring-offset":[$e,to]}],"ring-offset-color":[{"ring-offset":L()}],"inset-ring-w":[{"inset-ring":ue()}],"inset-ring-color":[{"inset-ring":L()}],"text-shadow":[{"text-shadow":["none",v,fp,cp]}],"text-shadow-color":[{"text-shadow":L()}],opacity:[{opacity:[$e,we,xe]}],"mix-blend":[{"mix-blend":[...ge(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ge()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":ye()}],"mask-image-linear-to-pos":[{"mask-linear-to":ye()}],"mask-image-linear-from-color":[{"mask-linear-from":L()}],"mask-image-linear-to-color":[{"mask-linear-to":L()}],"mask-image-t-from-pos":[{"mask-t-from":ye()}],"mask-image-t-to-pos":[{"mask-t-to":ye()}],"mask-image-t-from-color":[{"mask-t-from":L()}],"mask-image-t-to-color":[{"mask-t-to":L()}],"mask-image-r-from-pos":[{"mask-r-from":ye()}],"mask-image-r-to-pos":[{"mask-r-to":ye()}],"mask-image-r-from-color":[{"mask-r-from":L()}],"mask-image-r-to-color":[{"mask-r-to":L()}],"mask-image-b-from-pos":[{"mask-b-from":ye()}],"mask-image-b-to-pos":[{"mask-b-to":ye()}],"mask-image-b-from-color":[{"mask-b-from":L()}],"mask-image-b-to-color":[{"mask-b-to":L()}],"mask-image-l-from-pos":[{"mask-l-from":ye()}],"mask-image-l-to-pos":[{"mask-l-to":ye()}],"mask-image-l-from-color":[{"mask-l-from":L()}],"mask-image-l-to-color":[{"mask-l-to":L()}],"mask-image-x-from-pos":[{"mask-x-from":ye()}],"mask-image-x-to-pos":[{"mask-x-to":ye()}],"mask-image-x-from-color":[{"mask-x-from":L()}],"mask-image-x-to-color":[{"mask-x-to":L()}],"mask-image-y-from-pos":[{"mask-y-from":ye()}],"mask-image-y-to-pos":[{"mask-y-to":ye()}],"mask-image-y-from-color":[{"mask-y-from":L()}],"mask-image-y-to-color":[{"mask-y-to":L()}],"mask-image-radial":[{"mask-radial":[we,xe]}],"mask-image-radial-from-pos":[{"mask-radial-from":ye()}],"mask-image-radial-to-pos":[{"mask-radial-to":ye()}],"mask-image-radial-from-color":[{"mask-radial-from":L()}],"mask-image-radial-to-color":[{"mask-radial-to":L()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":O()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":ye()}],"mask-image-conic-to-pos":[{"mask-conic-to":ye()}],"mask-image-conic-from-color":[{"mask-conic-from":L()}],"mask-image-conic-to-color":[{"mask-conic-to":L()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:K()}],"mask-repeat":[{mask:Y()}],"mask-size":[{mask:H()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",we,xe]}],filter:[{filter:["","none",we,xe]}],blur:[{blur:fe()}],brightness:[{brightness:[$e,we,xe]}],contrast:[{contrast:[$e,we,xe]}],"drop-shadow":[{"drop-shadow":["","none",y,fp,cp]}],"drop-shadow-color":[{"drop-shadow":L()}],grayscale:[{grayscale:["",$e,we,xe]}],"hue-rotate":[{"hue-rotate":[$e,we,xe]}],invert:[{invert:["",$e,we,xe]}],saturate:[{saturate:[$e,we,xe]}],sepia:[{sepia:["",$e,we,xe]}],"backdrop-filter":[{"backdrop-filter":["","none",we,xe]}],"backdrop-blur":[{"backdrop-blur":fe()}],"backdrop-brightness":[{"backdrop-brightness":[$e,we,xe]}],"backdrop-contrast":[{"backdrop-contrast":[$e,we,xe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,we,xe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,we,xe]}],"backdrop-invert":[{"backdrop-invert":["",$e,we,xe]}],"backdrop-opacity":[{"backdrop-opacity":[$e,we,xe]}],"backdrop-saturate":[{"backdrop-saturate":[$e,we,xe]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,we,xe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",we,xe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",we,xe]}],ease:[{ease:["linear","initial",S,we,xe]}],delay:[{delay:[$e,we,xe]}],animate:[{animate:["none",W,we,xe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,we,xe]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:ne()}],"rotate-x":[{"rotate-x":ne()}],"rotate-y":[{"rotate-y":ne()}],"rotate-z":[{"rotate-z":ne()}],scale:[{scale:de()}],"scale-x":[{"scale-x":de()}],"scale-y":[{"scale-y":de()}],"scale-z":[{"scale-z":de()}],"scale-3d":["scale-3d"],skew:[{skew:ce()}],"skew-x":[{"skew-x":ce()}],"skew-y":[{"skew-y":ce()}],transform:[{transform:[we,xe,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:re()}],"translate-x":[{"translate-x":re()}],"translate-y":[{"translate-y":re()}],"translate-z":[{"translate-z":re()}],"translate-none":["translate-none"],accent:[{accent:L()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:L()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we,xe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we,xe]}],fill:[{fill:["none",...L()]}],"stroke-w":[{stroke:[$e,$u,to,bf]}],stroke:[{stroke:["none",...L()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},eN=Ek(Jk);function ln(...e){return eN(He(e))}const tN=Ik("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function BI({className:e,variant:t,size:n,asChild:r=!1,...a}){const i=r?cs:"button";return M.jsx(i,{"data-slot":"button",className:ln(tN({variant:t,size:n,className:e})),...a})}function zn({className:e,...t}){return M.jsx("div",{"data-slot":"card",className:ln("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}function Hc({className:e,...t}){return M.jsx("div",{"data-slot":"card-header",className:ln("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function jc({className:e,...t}){return M.jsx("h4",{"data-slot":"card-title",className:ln("leading-none",e),...t})}function Un({className:e,...t}){return M.jsx("div",{"data-slot":"card-content",className:ln("px-6 [&:last-child]:pb-6",e),...t})}function zr(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function ly(e,t=[]){let n=[];function r(i,s){const l=X.createContext(s),c=n.length;n=[...n,s];const f=d=>{var S;const{scope:v,children:y,...x}=d,I=((S=v==null?void 0:v[e])==null?void 0:S[c])||l,b=X.useMemo(()=>x,Object.values(x));return M.jsx(I.Provider,{value:b,children:y})};f.displayName=i+"Provider";function h(d,v){var I;const y=((I=v==null?void 0:v[e])==null?void 0:I[c])||l,x=X.useContext(y);if(x)return x;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${i}\``)}return[f,h]}const a=()=>{const i=n.map(s=>X.createContext(s));return function(l){const c=(l==null?void 0:l[e])||i;return X.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return a.scopeName=e,[r,nN(a,...t)]}function nN(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const s=r.reduce((l,{useScope:c,scopeName:f})=>{const d=c(i)[`__scope${f}`];return{...l,...d}},{});return X.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function rN(e){const t=e+"CollectionProvider",[n,r]=ly(t),[a,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=y=>{const{scope:x,children:I}=y,b=R.useRef(null),S=R.useRef(new Map).current;return M.jsx(a,{scope:x,itemMap:S,collectionRef:b,children:I})};s.displayName=t;const l=e+"CollectionSlot",c=R.forwardRef((y,x)=>{const{scope:I,children:b}=y,S=i(l,I),W=Mp(x,S.collectionRef);return M.jsx(cs,{ref:W,children:b})});c.displayName=l;const f=e+"CollectionItemSlot",h="data-radix-collection-item",d=R.forwardRef((y,x)=>{const{scope:I,children:b,...S}=y,W=R.useRef(null),A=Mp(x,W),O=i(f,I);return R.useEffect(()=>(O.itemMap.set(W,{ref:W,...S}),()=>void O.itemMap.delete(W))),M.jsx(cs,{[h]:"",ref:A,children:b})});d.displayName=f;function v(y){const x=i(e+"CollectionConsumer",y);return R.useCallback(()=>{const b=x.collectionRef.current;if(!b)return[];const S=Array.from(b.querySelectorAll(`[${h}]`));return Array.from(x.itemMap.values()).sort((O,w)=>S.indexOf(O.ref.current)-S.indexOf(w.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:s,Slot:c,ItemSlot:d},v,r]}var _v=globalThis!=null&&globalThis.document?X.useLayoutEffect:()=>{},aN=fk.useId||(()=>{}),oN=0;function z3(e){const[t,n]=X.useState(aN());return _v(()=>{n(r=>r??String(oN++))},[e]),e||(t?`radix-${t}`:"")}C3();var iN=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Ui=iN.reduce((e,t)=>{const n=X.forwardRef((r,a)=>{const{asChild:i,...s}=r,l=i?cs:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),M.jsx(l,{...s,ref:a})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function py(e){const t=X.useRef(e);return X.useEffect(()=>{t.current=e}),X.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function U3({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,a]=uN({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:r,l=py(n),c=X.useCallback(f=>{if(i){const d=typeof f=="function"?f(e):f;d!==e&&l(d)}else a(f)},[i,e,a,l]);return[s,c]}function uN({defaultProp:e,onChange:t}){const n=X.useState(e),[r]=n,a=X.useRef(r),i=py(t);return X.useEffect(()=>{a.current!==r&&(i(r),a.current=r)},[r,a,i]),n}var sN=X.createContext(void 0);function V3(e){const t=X.useContext(sN);return e||t||"ltr"}var If="rovingFocusGroup.onEntryFocus",lN={bubbles:!1,cancelable:!0},Dc="RovingFocusGroup",[Mv,G3,pN]=rN(Dc),[cN,K3]=ly(Dc,[pN]),[fN,dN]=cN(Dc),Q3=X.forwardRef((e,t)=>M.jsx(Mv.Provider,{scope:e.__scopeRovingFocusGroup,children:M.jsx(Mv.Slot,{scope:e.__scopeRovingFocusGroup,children:M.jsx(hN,{...e,ref:t})})}));Q3.displayName=Dc;var hN=X.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:a=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:c,onEntryFocus:f,preventScrollOnEntryFocus:h=!1,...d}=e,v=X.useRef(null),y=Mp(t,v),x=V3(i),[I=null,b]=U3({prop:s,defaultProp:l,onChange:c}),[S,W]=X.useState(!1),A=py(f),O=G3(n),w=X.useRef(!1),[_,N]=X.useState(0);return X.useEffect(()=>{const P=v.current;if(P)return P.addEventListener(If,A),()=>P.removeEventListener(If,A)},[A]),M.jsx(fN,{scope:n,orientation:r,dir:x,loop:a,currentTabStopId:I,onItemFocus:X.useCallback(P=>b(P),[b]),onItemShiftTab:X.useCallback(()=>W(!0),[]),onFocusableItemAdd:X.useCallback(()=>N(P=>P+1),[]),onFocusableItemRemove:X.useCallback(()=>N(P=>P-1),[]),children:M.jsx(Ui.div,{tabIndex:S||_===0?-1:0,"data-orientation":r,...d,ref:y,style:{outline:"none",...e.style},onMouseDown:zr(e.onMouseDown,()=>{w.current=!0}),onFocus:zr(e.onFocus,P=>{const C=!w.current;if(P.target===P.currentTarget&&C&&!S){const T=new CustomEvent(If,lN);if(P.currentTarget.dispatchEvent(T),!T.defaultPrevented){const j=O().filter(z=>z.focusable),E=j.find(z=>z.active),$=j.find(z=>z.id===I),G=[E,$,...j].filter(Boolean).map(z=>z.ref.current);Z3(G,h)}}w.current=!1}),onBlur:zr(e.onBlur,()=>W(!1))})})}),Y3="RovingFocusGroupItem",X3=X.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:a=!1,tabStopId:i,...s}=e,l=z3(),c=i||l,f=dN(Y3,n),h=f.currentTabStopId===c,d=G3(n),{onFocusableItemAdd:v,onFocusableItemRemove:y}=f;return X.useEffect(()=>{if(r)return v(),()=>y()},[r,v,y]),M.jsx(Mv.ItemSlot,{scope:n,id:c,focusable:r,active:a,children:M.jsx(Ui.span,{tabIndex:h?0:-1,"data-orientation":f.orientation,...s,ref:t,onMouseDown:zr(e.onMouseDown,x=>{r?f.onItemFocus(c):x.preventDefault()}),onFocus:zr(e.onFocus,()=>f.onItemFocus(c)),onKeyDown:zr(e.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){f.onItemShiftTab();return}if(x.target!==x.currentTarget)return;const I=gN(x,f.orientation,f.dir);if(I!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let S=d().filter(W=>W.focusable).map(W=>W.ref.current);if(I==="last")S.reverse();else if(I==="prev"||I==="next"){I==="prev"&&S.reverse();const W=S.indexOf(x.currentTarget);S=f.loop?yN(S,W+1):S.slice(W+1)}setTimeout(()=>Z3(S))}})})})});X3.displayName=Y3;var mN={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function vN(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function gN(e,t,n){const r=vN(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return mN[r]}function Z3(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function yN(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var bN=Q3,IN=X3;function BN(e,t){return X.useReducer((n,r)=>t[n][r]??n,e)}var J3=e=>{const{present:t,children:n}=e,r=xN(t),a=typeof n=="function"?n({present:r.isPresent}):X.Children.only(n),i=Mp(r.ref,wN(a));return typeof n=="function"||r.isPresent?X.cloneElement(a,{ref:i}):null};J3.displayName="Presence";function xN(e){const[t,n]=X.useState(),r=X.useRef({}),a=X.useRef(e),i=X.useRef("none"),s=e?"mounted":"unmounted",[l,c]=BN(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return X.useEffect(()=>{const f=dp(r.current);i.current=l==="mounted"?f:"none"},[l]),_v(()=>{const f=r.current,h=a.current;if(h!==e){const v=i.current,y=dp(f);e?c("MOUNT"):y==="none"||(f==null?void 0:f.display)==="none"?c("UNMOUNT"):c(h&&v!==y?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,c]),_v(()=>{if(t){let f;const h=t.ownerDocument.defaultView??window,d=y=>{const I=dp(r.current).includes(y.animationName);if(y.target===t&&I&&(c("ANIMATION_END"),!a.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",f=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},v=y=>{y.target===t&&(i.current=dp(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{h.clearTimeout(f),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:X.useCallback(f=>{f&&(r.current=getComputedStyle(f)),n(f)},[])}}function dp(e){return(e==null?void 0:e.animationName)||"none"}function wN(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var cy="Tabs",[PN]=ly(cy,[K3]),eW=K3(),[SN,fy]=PN(cy),tW=X.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:a,defaultValue:i,orientation:s="horizontal",dir:l,activationMode:c="automatic",...f}=e,h=V3(l),[d,v]=U3({prop:r,onChange:a,defaultProp:i});return M.jsx(SN,{scope:n,baseId:z3(),value:d,onValueChange:v,orientation:s,dir:h,activationMode:c,children:M.jsx(Ui.div,{dir:h,"data-orientation":s,...f,ref:t})})});tW.displayName=cy;var nW="TabsList",rW=X.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...a}=e,i=fy(nW,n),s=eW(n);return M.jsx(bN,{asChild:!0,...s,orientation:i.orientation,dir:i.dir,loop:r,children:M.jsx(Ui.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:t})})});rW.displayName=nW;var aW="TabsTrigger",oW=X.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:a=!1,...i}=e,s=fy(aW,n),l=eW(n),c=sW(s.baseId,r),f=lW(s.baseId,r),h=r===s.value;return M.jsx(IN,{asChild:!0,...l,focusable:!a,active:h,children:M.jsx(Ui.button,{type:"button",role:"tab","aria-selected":h,"aria-controls":f,"data-state":h?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...i,ref:t,onMouseDown:zr(e.onMouseDown,d=>{!a&&d.button===0&&d.ctrlKey===!1?s.onValueChange(r):d.preventDefault()}),onKeyDown:zr(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&s.onValueChange(r)}),onFocus:zr(e.onFocus,()=>{const d=s.activationMode!=="manual";!h&&!a&&d&&s.onValueChange(r)})})})});oW.displayName=aW;var iW="TabsContent",uW=X.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:a,children:i,...s}=e,l=fy(iW,n),c=sW(l.baseId,r),f=lW(l.baseId,r),h=r===l.value,d=X.useRef(h);return X.useEffect(()=>{const v=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(v)},[]),M.jsx(J3,{present:a||h,children:({present:v})=>M.jsx(Ui.div,{"data-state":h?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":c,hidden:!v,id:f,tabIndex:0,...s,ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0},children:v&&i})})});uW.displayName=iW;function sW(e,t){return`${e}-trigger-${t}`}function lW(e,t){return`${e}-content-${t}`}var WN=tW,AN=rW,_N=oW,MN=uW;function ON({className:e,...t}){return M.jsx(WN,{"data-slot":"tabs",className:ln("flex flex-col gap-2",e),...t})}function CN({className:e,...t}){return M.jsx(AN,{"data-slot":"tabs-list",className:ln("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",e),...t})}function xI({className:e,...t}){return M.jsx(_N,{"data-slot":"tabs-trigger",className:ln("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function wI({className:e,...t}){return M.jsx(MN,{"data-slot":"tabs-content",className:ln("flex-1 outline-none",e),...t})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),NN=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),PI=e=>{const t=NN(e);return t.charAt(0).toUpperCase()+t.slice(1)},pW=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var EN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=X.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:s,...l},c)=>X.createElement("svg",{ref:c,...EN,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:pW("lucide",a),...l},[...s.map(([f,h])=>X.createElement(f,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=(e,t)=>{const n=X.forwardRef(({className:r,...a},i)=>X.createElement(TN,{ref:i,iconNode:t,className:pW(`lucide-${kN(PI(e))}`,`lucide-${e}`,r),...a}));return n.displayName=PI(e),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],HN=pr("arrow-up-down",RN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],DN=pr("bot",jN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],LN=pr("chevron-down",$N);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],SI=pr("chevron-left",FN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qN=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ov=pr("chevron-right",qN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],UN=pr("circle-plus",zN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],GN=pr("download",VN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],QN=pr("trending-up",KN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YN=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],XN=pr("triangle-alert",YN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZN=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],JN=pr("users",ZN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],tE=pr("x",eE);function Ct(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function St(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Op(e,t){const n=Ct(e);return isNaN(t)?St(e,NaN):(t&&n.setDate(n.getDate()+t),n)}const cW=6048e5,nE=864e5,rE=6e4,aE=36e5,oE=1e3;let iE={};function Vi(){return iE}function Na(e,t){var l,c,f,h;const n=Vi(),r=(t==null?void 0:t.weekStartsOn)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.weekStartsOn)??0,a=Ct(e),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function di(e){return Na(e,{weekStartsOn:1})}function fW(e){const t=Ct(e),n=t.getFullYear(),r=St(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=di(r),i=St(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=di(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function WI(e){const t=Ct(e);return t.setHours(0,0,0,0),t}function Cp(e){const t=Ct(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function uE(e,t){const n=WI(e),r=WI(t),a=+n-Cp(n),i=+r-Cp(r);return Math.round((a-i)/nE)}function sE(e){const t=fW(e),n=St(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),di(n)}function lE(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function pE(e){if(!lE(e)&&typeof e!="number")return!1;const t=Ct(e);return!isNaN(Number(t))}function cE(e){const t=Ct(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function fE(e){const t=Ct(e);return t.setDate(1),t.setHours(0,0,0,0),t}function dE(e){const t=Ct(e),n=St(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const hE={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},mE=(e,t,n)=>{let r;const a=hE[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Bf(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const vE={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},gE={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},yE={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},bE={date:Bf({formats:vE,defaultWidth:"full"}),time:Bf({formats:gE,defaultWidth:"full"}),dateTime:Bf({formats:yE,defaultWidth:"full"})},IE={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},BE=(e,t,n,r)=>IE[e];function Lu(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):s;a=e.formattingValues[l]||e.formattingValues[s]}else{const s=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[l]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}const xE={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},wE={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},PE={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},SE={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},WE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},AE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},_E=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ME={ordinalNumber:_E,era:Lu({values:xE,defaultWidth:"wide"}),quarter:Lu({values:wE,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Lu({values:PE,defaultWidth:"wide"}),day:Lu({values:SE,defaultWidth:"wide"}),dayPeriod:Lu({values:WE,defaultWidth:"wide",formattingValues:AE,defaultFormattingWidth:"wide"})};function Fu(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const s=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(l)?CE(l,d=>d.test(s)):OE(l,d=>d.test(s));let f;f=e.valueCallback?e.valueCallback(c):c,f=n.valueCallback?n.valueCallback(f):f;const h=t.slice(s.length);return{value:f,rest:h}}}function OE(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function CE(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function kE(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const l=t.slice(a.length);return{value:s,rest:l}}}const NE=/^(\d+)(th|st|nd|rd)?/i,EE=/\d+/i,TE={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},RE={any:[/^b/i,/^(a|c)/i]},HE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},jE={any:[/1/i,/2/i,/3/i,/4/i]},DE={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},$E={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},LE={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},FE={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},qE={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},zE={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},UE={ordinalNumber:kE({matchPattern:NE,parsePattern:EE,valueCallback:e=>parseInt(e,10)}),era:Fu({matchPatterns:TE,defaultMatchWidth:"wide",parsePatterns:RE,defaultParseWidth:"any"}),quarter:Fu({matchPatterns:HE,defaultMatchWidth:"wide",parsePatterns:jE,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Fu({matchPatterns:DE,defaultMatchWidth:"wide",parsePatterns:$E,defaultParseWidth:"any"}),day:Fu({matchPatterns:LE,defaultMatchWidth:"wide",parsePatterns:FE,defaultParseWidth:"any"}),dayPeriod:Fu({matchPatterns:qE,defaultMatchWidth:"any",parsePatterns:zE,defaultParseWidth:"any"})},dW={code:"en-US",formatDistance:mE,formatLong:bE,formatRelative:BE,localize:ME,match:UE,options:{weekStartsOn:0,firstWeekContainsDate:1}};function VE(e){const t=Ct(e);return uE(t,dE(t))+1}function hW(e){const t=Ct(e),n=+di(t)-+sE(t);return Math.round(n/cW)+1}function dy(e,t){var h,d,v,y;const n=Ct(e),r=n.getFullYear(),a=Vi(),i=(t==null?void 0:t.firstWeekContainsDate)??((d=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:d.firstWeekContainsDate)??a.firstWeekContainsDate??((y=(v=a.locale)==null?void 0:v.options)==null?void 0:y.firstWeekContainsDate)??1,s=St(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const l=Na(s,t),c=St(e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const f=Na(c,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function GE(e,t){var l,c,f,h;const n=Vi(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??1,a=dy(e,t),i=St(e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),Na(i,t)}function mW(e,t){const n=Ct(e),r=+Na(n,t)-+GE(n,t);return Math.round(r/cW)+1}function Je(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const wa={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return Je(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):Je(n+1,2)},d(e,t){return Je(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return Je(e.getHours()%12||12,t.length)},H(e,t){return Je(e.getHours(),t.length)},m(e,t){return Je(e.getMinutes(),t.length)},s(e,t){return Je(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return Je(a,t.length)}},Zo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},AI={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return wa.y(e,t)},Y:function(e,t,n,r){const a=dy(e,r),i=a>0?a:1-a;if(t==="YY"){const s=i%100;return Je(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):Je(i,t.length)},R:function(e,t){const n=fW(e);return Je(n,t.length)},u:function(e,t){const n=e.getFullYear();return Je(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return Je(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return Je(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return wa.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return Je(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=mW(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):Je(a,t.length)},I:function(e,t,n){const r=hW(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):Je(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):wa.d(e,t)},D:function(e,t,n){const r=VE(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):Je(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return Je(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return Je(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return Je(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=Zo.noon:r===0?a=Zo.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=Zo.evening:r>=12?a=Zo.afternoon:r>=4?a=Zo.morning:a=Zo.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return wa.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):wa.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):wa.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):wa.s(e,t)},S:function(e,t){return wa.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return MI(r);case"XXXX":case"XX":return oo(r);case"XXXXX":case"XXX":default:return oo(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return MI(r);case"xxxx":case"xx":return oo(r);case"xxxxx":case"xxx":default:return oo(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+_I(r,":");case"OOOO":default:return"GMT"+oo(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+_I(r,":");case"zzzz":default:return"GMT"+oo(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return Je(r,t.length)},T:function(e,t,n){const r=e.getTime();return Je(r,t.length)}};function _I(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+t+Je(i,2)}function MI(e,t){return e%60===0?(e>0?"-":"+")+Je(Math.abs(e)/60,2):oo(e,t)}function oo(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Je(Math.trunc(r/60),2),i=Je(r%60,2);return n+a+t+i}const OI=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},vW=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},KE=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return OI(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",OI(r,t)).replace("{{time}}",vW(a,t))},Cv={p:vW,P:KE},QE=/^D+$/,YE=/^Y+$/,XE=["D","DD","YY","YYYY"];function gW(e){return QE.test(e)}function yW(e){return YE.test(e)}function kv(e,t,n){const r=ZE(e,t,n);if(console.warn(r),XE.includes(e))throw new RangeError(r)}function ZE(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const JE=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,eT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tT=/^'([^]*?)'?$/,nT=/''/g,rT=/[a-zA-Z]/;function aT(e,t,n){var h,d,v,y;const r=Vi(),a=r.locale??dW,i=r.firstWeekContainsDate??((d=(h=r.locale)==null?void 0:h.options)==null?void 0:d.firstWeekContainsDate)??1,s=r.weekStartsOn??((y=(v=r.locale)==null?void 0:v.options)==null?void 0:y.weekStartsOn)??0,l=Ct(e);if(!pE(l))throw new RangeError("Invalid time value");let c=t.match(eT).map(x=>{const I=x[0];if(I==="p"||I==="P"){const b=Cv[I];return b(x,a.formatLong)}return x}).join("").match(JE).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const I=x[0];if(I==="'")return{isToken:!1,value:oT(x)};if(AI[I])return{isToken:!0,value:x};if(I.match(rT))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:x}});a.localize.preprocessor&&(c=a.localize.preprocessor(l,c));const f={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return c.map(x=>{if(!x.isToken)return x.value;const I=x.value;(yW(I)||gW(I))&&kv(I,t,String(e));const b=AI[I[0]];return b(l,I,a.localize,f)}).join("")}function oT(e){const t=e.match(tT);return t?t[1].replace(nT,"'"):e}function iT(){return Object.assign({},Vi())}function uT(e){let n=Ct(e).getDay();return n===0&&(n=7),n}function sT(e,t){const n=t instanceof Date?St(t,0):new t(0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}const lT=10;class bW{constructor(){ve(this,"subPriority",0)}validate(t,n){return!0}}class pT extends bW{constructor(t,n,r,a,i){super(),this.value=t,this.validateValue=n,this.setValue=r,this.priority=a,i&&(this.subPriority=i)}validate(t,n){return this.validateValue(t,this.value,n)}set(t,n,r){return this.setValue(t,n,this.value,r)}}class cT extends bW{constructor(){super(...arguments);ve(this,"priority",lT);ve(this,"subPriority",-1)}set(n,r){return r.timestampIsSet?n:St(n,sT(n,Date))}}class Ge{run(t,n,r,a){const i=this.parse(t,n,r,a);return i?{setter:new pT(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(t,n,r){return!0}}class fT extends Ge{constructor(){super(...arguments);ve(this,"priority",140);ve(this,"incompatibleTokens",["R","u","t","T"])}parse(n,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})||a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"})}}set(n,r,a){return r.era=a,n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}const Wt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},gr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function At(e,t){return e&&{value:t(e.value),rest:e.rest}}function mt(e,t){const n=t.match(e);return n?{value:parseInt(n[0],10),rest:t.slice(n[0].length)}:null}function yr(e,t){const n=t.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:t.slice(1)};const r=n[1]==="+"?1:-1,a=n[2]?parseInt(n[2],10):0,i=n[3]?parseInt(n[3],10):0,s=n[5]?parseInt(n[5],10):0;return{value:r*(a*aE+i*rE+s*oE),rest:t.slice(n[0].length)}}function IW(e){return mt(Wt.anyDigitsSigned,e)}function It(e,t){switch(e){case 1:return mt(Wt.singleDigit,t);case 2:return mt(Wt.twoDigits,t);case 3:return mt(Wt.threeDigits,t);case 4:return mt(Wt.fourDigits,t);default:return mt(new RegExp("^\\d{1,"+e+"}"),t)}}function kp(e,t){switch(e){case 1:return mt(Wt.singleDigitSigned,t);case 2:return mt(Wt.twoDigitsSigned,t);case 3:return mt(Wt.threeDigitsSigned,t);case 4:return mt(Wt.fourDigitsSigned,t);default:return mt(new RegExp("^-?\\d{1,"+e+"}"),t)}}function hy(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function BW(e,t){const n=t>0,r=n?t:1-t;let a;if(r<=50)a=e||100;else{const i=r+50,s=Math.trunc(i/100)*100,l=e>=i%100;a=e+s-(l?100:0)}return n?a:1-a}function xW(e){return e%400===0||e%4===0&&e%100!==0}class dT extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,r,a){const i=s=>({year:s,isTwoDigitYear:r==="yy"});switch(r){case"y":return At(It(4,n),i);case"yo":return At(a.ordinalNumber(n,{unit:"year"}),i);default:return At(It(r.length,n),i)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a){const i=n.getFullYear();if(a.isTwoDigitYear){const l=BW(a.year,i);return n.setFullYear(l,0,1),n.setHours(0,0,0,0),n}const s=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(s,0,1),n.setHours(0,0,0,0),n}}class hT extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,r,a){const i=s=>({year:s,isTwoDigitYear:r==="YY"});switch(r){case"Y":return At(It(4,n),i);case"Yo":return At(a.ordinalNumber(n,{unit:"year"}),i);default:return At(It(r.length,n),i)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a,i){const s=dy(n,i);if(a.isTwoDigitYear){const c=BW(a.year,s);return n.setFullYear(c,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Na(n,i)}const l=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(l,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Na(n,i)}}class mT extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,r){return kp(r==="R"?4:r.length,n)}set(n,r,a){const i=St(n,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),di(i)}}class vT extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,r){return kp(r==="u"?4:r.length,n)}set(n,r,a){return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}class gT extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"Q":case"QQ":return It(r.length,n);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})||a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class yT extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"q":case"qq":return It(r.length,n);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})||a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class bT extends Ge{constructor(){super(...arguments);ve(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);ve(this,"priority",110)}parse(n,r,a){const i=s=>s-1;switch(r){case"M":return At(mt(Wt.month,n),i);case"MM":return At(It(2,n),i);case"Mo":return At(a.ordinalNumber(n,{unit:"month"}),i);case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})||a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}class IT extends Ge{constructor(){super(...arguments);ve(this,"priority",110);ve(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,r,a){const i=s=>s-1;switch(r){case"L":return At(mt(Wt.month,n),i);case"LL":return At(It(2,n),i);case"Lo":return At(a.ordinalNumber(n,{unit:"month"}),i);case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})||a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}function BT(e,t,n){const r=Ct(e),a=mW(r,n)-t;return r.setDate(r.getDate()-a*7),r}class xT extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,r,a){switch(r){case"w":return mt(Wt.week,n);case"wo":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a,i){return Na(BT(n,a,i),i)}}function wT(e,t){const n=Ct(e),r=hW(n)-t;return n.setDate(n.getDate()-r*7),n}class PT extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,r,a){switch(r){case"I":return mt(Wt.week,n);case"Io":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a){return di(wT(n,a))}}const ST=[31,28,31,30,31,30,31,31,30,31,30,31],WT=[31,29,31,30,31,30,31,31,30,31,30,31];class AT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subPriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"d":return mt(Wt.date,n);case"do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear(),i=xW(a),s=n.getMonth();return i?r>=1&&r<=WT[s]:r>=1&&r<=ST[s]}set(n,r,a){return n.setDate(a),n.setHours(0,0,0,0),n}}class _T extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subpriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,r,a){switch(r){case"D":case"DD":return mt(Wt.dayOfYear,n);case"Do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear();return xW(a)?r>=1&&r<=366:r>=1&&r<=365}set(n,r,a){return n.setMonth(0,a),n.setHours(0,0,0,0),n}}function my(e,t,n){var d,v,y,x;const r=Vi(),a=(n==null?void 0:n.weekStartsOn)??((v=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((x=(y=r.locale)==null?void 0:y.options)==null?void 0:x.weekStartsOn)??0,i=Ct(e),s=i.getDay(),c=(t%7+7)%7,f=7-a,h=t<0||t>6?t-(s+f)%7:(c+f)%7-(s+f)%7;return Op(i,h)}class MT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=my(n,a,i),n.setHours(0,0,0,0),n}}class OT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,r,a,i){const s=l=>{const c=Math.floor((l-1)/7)*7;return(l+i.weekStartsOn+6)%7+c};switch(r){case"e":case"ee":return At(It(r.length,n),s);case"eo":return At(a.ordinalNumber(n,{unit:"day"}),s);case"eee":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=my(n,a,i),n.setHours(0,0,0,0),n}}class CT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,r,a,i){const s=l=>{const c=Math.floor((l-1)/7)*7;return(l+i.weekStartsOn+6)%7+c};switch(r){case"c":case"cc":return At(It(r.length,n),s);case"co":return At(a.ordinalNumber(n,{unit:"day"}),s);case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})||a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=my(n,a,i),n.setHours(0,0,0,0),n}}function kT(e,t){const n=Ct(e),r=uT(n),a=t-r;return Op(n,a)}class NT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,r,a){const i=s=>s===0?7:s;switch(r){case"i":case"ii":return It(r.length,n);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return At(a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiii":return At(a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiiii":return At(a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiii":default:return At(a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i)}}validate(n,r){return r>=1&&r<=7}set(n,r,a){return n=kT(n,a),n.setHours(0,0,0,0),n}}class ET extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(hy(a),0,0,0),n}}class TT extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(hy(a),0,0,0),n}}class RT extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","b","t","T"])}parse(n,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(hy(a),0,0,0),n}}class HT extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,r,a){switch(r){case"h":return mt(Wt.hour12h,n);case"ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=12}set(n,r,a){const i=n.getHours()>=12;return i&&a<12?n.setHours(a+12,0,0,0):!i&&a===12?n.setHours(0,0,0,0):n.setHours(a,0,0,0),n}}class jT extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,r,a){switch(r){case"H":return mt(Wt.hour23h,n);case"Ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=23}set(n,r,a){return n.setHours(a,0,0,0),n}}class DT extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,r,a){switch(r){case"K":return mt(Wt.hour11h,n);case"Ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.getHours()>=12&&a<12?n.setHours(a+12,0,0,0):n.setHours(a,0,0,0),n}}class $T extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,r,a){switch(r){case"k":return mt(Wt.hour24h,n);case"ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=24}set(n,r,a){const i=a<=24?a%24:a;return n.setHours(i,0,0,0),n}}class LT extends Ge{constructor(){super(...arguments);ve(this,"priority",60);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"m":return mt(Wt.minute,n);case"mo":return a.ordinalNumber(n,{unit:"minute"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setMinutes(a,0,0),n}}class FT extends Ge{constructor(){super(...arguments);ve(this,"priority",50);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"s":return mt(Wt.second,n);case"so":return a.ordinalNumber(n,{unit:"second"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setSeconds(a,0),n}}class qT extends Ge{constructor(){super(...arguments);ve(this,"priority",30);ve(this,"incompatibleTokens",["t","T"])}parse(n,r){const a=i=>Math.trunc(i*Math.pow(10,-r.length+3));return At(It(r.length,n),a)}set(n,r,a){return n.setMilliseconds(a),n}}class zT extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","x"])}parse(n,r){switch(r){case"X":return yr(gr.basicOptionalMinutes,n);case"XX":return yr(gr.basic,n);case"XXXX":return yr(gr.basicOptionalSeconds,n);case"XXXXX":return yr(gr.extendedOptionalSeconds,n);case"XXX":default:return yr(gr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-Cp(n)-a)}}class UT extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","X"])}parse(n,r){switch(r){case"x":return yr(gr.basicOptionalMinutes,n);case"xx":return yr(gr.basic,n);case"xxxx":return yr(gr.basicOptionalSeconds,n);case"xxxxx":return yr(gr.extendedOptionalSeconds,n);case"xxx":default:return yr(gr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-Cp(n)-a)}}class VT extends Ge{constructor(){super(...arguments);ve(this,"priority",40);ve(this,"incompatibleTokens","*")}parse(n){return IW(n)}set(n,r,a){return[St(n,a*1e3),{timestampIsSet:!0}]}}class GT extends Ge{constructor(){super(...arguments);ve(this,"priority",20);ve(this,"incompatibleTokens","*")}parse(n){return IW(n)}set(n,r,a){return[St(n,a),{timestampIsSet:!0}]}}const KT={G:new fT,y:new dT,Y:new hT,R:new mT,u:new vT,Q:new gT,q:new yT,M:new bT,L:new IT,w:new xT,I:new PT,d:new AT,D:new _T,E:new MT,e:new OT,c:new CT,i:new NT,a:new ET,b:new TT,B:new RT,h:new HT,H:new jT,K:new DT,k:new $T,m:new LT,s:new FT,S:new qT,X:new zT,x:new UT,t:new VT,T:new GT},QT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,YT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,XT=/^'([^]*?)'?$/,ZT=/''/g,JT=/\S/,eR=/[a-zA-Z]/;function tR(e,t,n,r){var I,b,S,W;const a=iT(),i=a.locale??dW,s=a.firstWeekContainsDate??((b=(I=a.locale)==null?void 0:I.options)==null?void 0:b.firstWeekContainsDate)??1,l=a.weekStartsOn??((W=(S=a.locale)==null?void 0:S.options)==null?void 0:W.weekStartsOn)??0,c={firstWeekContainsDate:s,weekStartsOn:l,locale:i},f=[new cT],h=t.match(YT).map(A=>{const O=A[0];if(O in Cv){const w=Cv[O];return w(A,i.formatLong)}return A}).join("").match(QT),d=[];for(let A of h){yW(A)&&kv(A,t,e),gW(A)&&kv(A,t,e);const O=A[0],w=KT[O];if(w){const{incompatibleTokens:_}=w;if(Array.isArray(_)){const P=d.find(C=>_.includes(C.token)||C.token===O);if(P)throw new RangeError(`The format string mustn't contain \`${P.fullToken}\` and \`${A}\` at the same time`)}else if(w.incompatibleTokens==="*"&&d.length>0)throw new RangeError(`The format string mustn't contain \`${A}\` and any other token at the same time`);d.push({token:O,fullToken:A});const N=w.run(e,A,i.match,c);if(!N)return St(n,NaN);f.push(N.setter),e=N.rest}else{if(O.match(eR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");if(A==="''"?A="'":O==="'"&&(A=nR(A)),e.indexOf(A)===0)e=e.slice(A.length);else return St(n,NaN)}}if(e.length>0&&JT.test(e))return St(n,NaN);const v=f.map(A=>A.priority).sort((A,O)=>O-A).filter((A,O,w)=>w.indexOf(A)===O).map(A=>f.filter(O=>O.priority===A).sort((O,w)=>w.subPriority-O.subPriority)).map(A=>A[0]);let y=Ct(n);if(isNaN(y.getTime()))return St(n,NaN);const x={};for(const A of v){if(!A.validate(y,c))return St(n,NaN);const O=A.set(y,x,c);Array.isArray(O)?(y=O[0],Object.assign(x,O[1])):y=O}return St(n,y)}function nR(e){return e.match(XT)[1].replace(ZT,"'")}const ir=e=>{if(!e)return new Date(NaN);const t=e.trim(),n=t.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(n){const[,a,i,s]=n;return new Date(parseInt(a),parseInt(i)-1,parseInt(s),12,0,0)}const r=t.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(r){const[,a,i,s]=r;return new Date(parseInt(s),parseInt(i)-1,parseInt(a),12,0,0)}return tR(e,"dd-MM-yyyy",new Date)},wW=["january","february","march","april","may","june","july","august","september","october","november","december"],PW=e=>{if(e==="all"||!e)return[];const[t,n]=e.split("-"),r=wW.indexOf(t.toLowerCase()),a=parseInt(n)||2026;if(r===-1)return[];const i=fE(new Date(a,r)),s=cE(new Date(a,r)),l=[];let c=i,f=1;for(;c<=s;){let h=Op(c,6);h>s&&(h=s),l.push({value:`${t}-week${f}`,label:`${t.charAt(0).toUpperCase()+t.slice(1,3)} ${c.getDate()}-${h.getDate()}`,startDate:c,endDate:h}),c=Op(h,1),f++}return l},SW=(e,t)=>{if(isNaN(e.getTime()))return!1;const n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0);return n>=t.startDate&&n<=t.endDate},Nv=(e,t)=>{if(t==="all")return!0;if(isNaN(e.getTime()))return!1;const[n,r]=t.split("-"),a=wW.indexOf(n.toLowerCase()),i=parseInt(r);return e.getMonth()===a&&e.getFullYear()===i},rR=e=>!e||isNaN(e.getTime())?"N/A":aT(e,"MMM dd, yyyy"),Ev=e=>{const t=e.length,n=e.filter(a=>a.handled==="Bot").length,r=e.filter(a=>a.handled==="Human").length;return{totalSessions:t,botHandled:n,humanHandled:r,botPercentage:t>0?n/t*100:0,humanPercentage:t>0?r/t*100:0,escalationRate:t>0?r/t*100:0}},Tv=e=>{const t=new Map;e.forEach(r=>{const a=r.channel==="Webchat"?"Webapp":r.channel,i=t.get(a)||0;t.set(a,i+1)});const n=e.length;return Array.from(t.entries()).map(([r,a])=>({channel:r,count:a,percentage:n>0?a/n*100:0})).sort((r,a)=>a.count-r.count)},WW=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.product&&r.product.trim()!==""){const a=n.get(r.product)||0;n.set(r.product,a+1)}}),Array.from(n.entries()).map(([r,a])=>({product:r,count:a})).sort((r,a)=>a.count-r.count)},Rv=(e,t=10)=>{const n=new Map;return e.forEach(r=>{if(r.issue&&r.issue.trim()!==""){const a=n.get(r.issue)||{bot:0,human:0};r.handled==="Bot"?a.bot++:a.human++,n.set(r.issue,a)}}),Array.from(n.entries()).map(([r,a])=>({issue:r,botCount:a.bot,humanCount:a.human,total:a.bot+a.human})).sort((r,a)=>a.humanCount-r.humanCount).slice(0,t)},aR=(e,t="february-2026")=>{if(t==="all"){const n=["january","february","march","april","may","june","july","august","september","october","november","december"],r=new Set;return e.forEach(i=>{try{const s=ir(i.createdAt);if(!isNaN(s.getTime())){const l=n[s.getMonth()],c=`${l.charAt(0).toUpperCase()}${l.slice(1,3)} ${s.getFullYear()}`;r.add(`${c}|${l}-${s.getFullYear()}`)}}catch{}}),Array.from(r).map(i=>{const[s,l]=i.split("|"),c=e.filter(v=>Nv(ir(v.createdAt),l)),f=c.length,h=c.filter(v=>v.handled==="Human").length,d=f>0?h/f*100:0;return{week:s,totalSessions:f,humanEscalations:h,escalationRate:d}}).sort((i,s)=>new Date(`1 ${i.week}`).getTime()-new Date(`1 ${s.week}`).getTime()).filter(i=>i.totalSessions>0)}else return PW(t).map(r=>{const a=e.filter(c=>{const f=ir(c.createdAt);return SW(f,r)}),i=a.length,s=a.filter(c=>c.handled==="Human").length,l=a.length>0?s/a.length*100:0;return{week:r.label,totalSessions:i,humanEscalations:s,escalationRate:l}})},oR=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.issue&&r.issue.trim()!==""){n.has(r.issue)||n.set(r.issue,new Map);const a=n.get(r.issue),i=r.subType&&r.subType.trim()!==""?r.subType:"Other";a.has(i)||a.set(i,new Map);const s=a.get(i),l=r.product&&r.product.trim()!==""?r.product:"Unknown";s.set(l,(s.get(l)||0)+1)}}),Array.from(n.entries()).map(([r,a])=>{const i=Array.from(a.entries()).map(([l,c])=>{const f=Array.from(c.entries()).map(([d,v])=>({product:d,count:v})).sort((d,v)=>v.count-d.count),h=f.reduce((d,v)=>d+v.count,0);return{subType:l,count:h,products:f}}).sort((l,c)=>c.count-l.count),s=i.reduce((l,c)=>l+c.count,0);return{issue:r,count:s,subIssues:i}}).sort((r,a)=>a.count-r.count)},iR=(e,t="analytics-export.csv")=>{const r=[["Channel","Created at","Product","Issue","Sub Type","Handled"].join(","),...e.map(l=>[l.channel,l.createdAt,l.product||"",l.issue||"",l.subType||"",l.handled].join(","))].join(`
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a"),s=URL.createObjectURL(a);i.setAttribute("href",s),i.setAttribute("download",t),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)};function uR({metrics:e}){const t=r=>r<20?"text-green-600":r<40?"text-yellow-600":"text-red-600",n=r=>r<20?"bg-green-50":r<40?"bg-yellow-50":"bg-red-50";return M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[M.jsx(zn,{children:M.jsx(Un,{className:"p-6",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sessions"}),M.jsx("p",{className:"text-3xl font-bold mt-2",children:e.totalSessions.toLocaleString()})]}),M.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:M.jsx(QN,{className:"w-6 h-6 text-blue-600"})})]})})}),M.jsx(zn,{children:M.jsx(Un,{className:"p-6",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Bot Handled Sessions"}),M.jsx("p",{className:"text-3xl font-bold mt-2",children:e.botHandled.toLocaleString()}),M.jsxs("p",{className:"text-sm text-blue-600 mt-1",children:[e.botPercentage.toFixed(1),"%"]})]}),M.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:M.jsx(DN,{className:"w-6 h-6 text-blue-600"})})]})})}),M.jsx(zn,{children:M.jsx(Un,{className:"p-6",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Human Handled Sessions"}),M.jsx("p",{className:"text-3xl font-bold mt-2",children:e.humanHandled.toLocaleString()}),M.jsxs("p",{className:"text-sm text-orange-600 mt-1",children:[e.humanPercentage.toFixed(1),"%"]})]}),M.jsx("div",{className:"p-3 bg-orange-50 rounded-full",children:M.jsx(JN,{className:"w-6 h-6 text-orange-600"})})]})})}),M.jsx(zn,{className:n(e.escalationRate),children:M.jsx(Un,{className:"p-6",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Escalation Rate"}),M.jsxs("p",{className:`text-3xl font-bold mt-2 ${t(e.escalationRate)}`,children:[e.escalationRate.toFixed(1),"%"]}),M.jsx("p",{className:"text-xs text-gray-500 mt-1",children:e.escalationRate<20?"Excellent":e.escalationRate<40?"Good":"Needs Attention"})]}),M.jsx("div",{className:`p-3 rounded-full ${t(e.escalationRate).replace("text","bg").replace("600","100")}`,children:M.jsx(XN,{className:`w-6 h-6 ${t(e.escalationRate)}`})})]})})})]})}var xf,CI;function yn(){if(CI)return xf;CI=1;var e=Array.isArray;return xf=e,xf}var wf,kI;function AW(){if(kI)return wf;kI=1;var e=typeof lp=="object"&&lp&&lp.Object===Object&&lp;return wf=e,wf}var Pf,NI;function Wr(){if(NI)return Pf;NI=1;var e=AW(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=e||t||Function("return this")();return Pf=n,Pf}var Sf,EI;function Gs(){if(EI)return Sf;EI=1;var e=Wr(),t=e.Symbol;return Sf=t,Sf}var Wf,TI;function sR(){if(TI)return Wf;TI=1;var e=Gs(),t=Object.prototype,n=t.hasOwnProperty,r=t.toString,a=e?e.toStringTag:void 0;function i(s){var l=n.call(s,a),c=s[a];try{s[a]=void 0;var f=!0}catch{}var h=r.call(s);return f&&(l?s[a]=c:delete s[a]),h}return Wf=i,Wf}var Af,RI;function lR(){if(RI)return Af;RI=1;var e=Object.prototype,t=e.toString;function n(r){return t.call(r)}return Af=n,Af}var _f,HI;function Yr(){if(HI)return _f;HI=1;var e=Gs(),t=sR(),n=lR(),r="[object Null]",a="[object Undefined]",i=e?e.toStringTag:void 0;function s(l){return l==null?l===void 0?a:r:i&&i in Object(l)?t(l):n(l)}return _f=s,_f}var Mf,jI;function Xr(){if(jI)return Mf;jI=1;function e(t){return t!=null&&typeof t=="object"}return Mf=e,Mf}var Of,DI;function Gi(){if(DI)return Of;DI=1;var e=Yr(),t=Xr(),n="[object Symbol]";function r(a){return typeof a=="symbol"||t(a)&&e(a)==n}return Of=r,Of}var Cf,$I;function vy(){if($I)return Cf;$I=1;var e=yn(),t=Gi(),n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,s){if(e(i))return!1;var l=typeof i;return l=="number"||l=="symbol"||l=="boolean"||i==null||t(i)?!0:r.test(i)||!n.test(i)||s!=null&&i in Object(s)}return Cf=a,Cf}var kf,LI;function Ha(){if(LI)return kf;LI=1;function e(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return kf=e,kf}var Nf,FI;function gy(){if(FI)return Nf;FI=1;var e=Yr(),t=Ha(),n="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",i="[object Proxy]";function s(l){if(!t(l))return!1;var c=e(l);return c==r||c==a||c==n||c==i}return Nf=s,Nf}var Ef,qI;function pR(){if(qI)return Ef;qI=1;var e=Wr(),t=e["__core-js_shared__"];return Ef=t,Ef}var Tf,zI;function cR(){if(zI)return Tf;zI=1;var e=pR(),t=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function n(r){return!!t&&t in r}return Tf=n,Tf}var Rf,UI;function _W(){if(UI)return Rf;UI=1;var e=Function.prototype,t=e.toString;function n(r){if(r!=null){try{return t.call(r)}catch{}try{return r+""}catch{}}return""}return Rf=n,Rf}var Hf,VI;function fR(){if(VI)return Hf;VI=1;var e=gy(),t=cR(),n=Ha(),r=_W(),a=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,s=Function.prototype,l=Object.prototype,c=s.toString,f=l.hasOwnProperty,h=RegExp("^"+c.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(v){if(!n(v)||t(v))return!1;var y=e(v)?h:i;return y.test(r(v))}return Hf=d,Hf}var jf,GI;function dR(){if(GI)return jf;GI=1;function e(t,n){return t==null?void 0:t[n]}return jf=e,jf}var Df,KI;function Bo(){if(KI)return Df;KI=1;var e=fR(),t=dR();function n(r,a){var i=t(r,a);return e(i)?i:void 0}return Df=n,Df}var $f,QI;function $c(){if(QI)return $f;QI=1;var e=Bo(),t=e(Object,"create");return $f=t,$f}var Lf,YI;function hR(){if(YI)return Lf;YI=1;var e=$c();function t(){this.__data__=e?e(null):{},this.size=0}return Lf=t,Lf}var Ff,XI;function mR(){if(XI)return Ff;XI=1;function e(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}return Ff=e,Ff}var qf,ZI;function vR(){if(ZI)return qf;ZI=1;var e=$c(),t="__lodash_hash_undefined__",n=Object.prototype,r=n.hasOwnProperty;function a(i){var s=this.__data__;if(e){var l=s[i];return l===t?void 0:l}return r.call(s,i)?s[i]:void 0}return qf=a,qf}var zf,JI;function gR(){if(JI)return zf;JI=1;var e=$c(),t=Object.prototype,n=t.hasOwnProperty;function r(a){var i=this.__data__;return e?i[a]!==void 0:n.call(i,a)}return zf=r,zf}var Uf,eB;function yR(){if(eB)return Uf;eB=1;var e=$c(),t="__lodash_hash_undefined__";function n(r,a){var i=this.__data__;return this.size+=this.has(r)?0:1,i[r]=e&&a===void 0?t:a,this}return Uf=n,Uf}var Vf,tB;function bR(){if(tB)return Vf;tB=1;var e=hR(),t=mR(),n=vR(),r=gR(),a=yR();function i(s){var l=-1,c=s==null?0:s.length;for(this.clear();++l<c;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,Vf=i,Vf}var Gf,nB;function IR(){if(nB)return Gf;nB=1;function e(){this.__data__=[],this.size=0}return Gf=e,Gf}var Kf,rB;function yy(){if(rB)return Kf;rB=1;function e(t,n){return t===n||t!==t&&n!==n}return Kf=e,Kf}var Qf,aB;function Lc(){if(aB)return Qf;aB=1;var e=yy();function t(n,r){for(var a=n.length;a--;)if(e(n[a][0],r))return a;return-1}return Qf=t,Qf}var Yf,oB;function BR(){if(oB)return Yf;oB=1;var e=Lc(),t=Array.prototype,n=t.splice;function r(a){var i=this.__data__,s=e(i,a);if(s<0)return!1;var l=i.length-1;return s==l?i.pop():n.call(i,s,1),--this.size,!0}return Yf=r,Yf}var Xf,iB;function xR(){if(iB)return Xf;iB=1;var e=Lc();function t(n){var r=this.__data__,a=e(r,n);return a<0?void 0:r[a][1]}return Xf=t,Xf}var Zf,uB;function wR(){if(uB)return Zf;uB=1;var e=Lc();function t(n){return e(this.__data__,n)>-1}return Zf=t,Zf}var Jf,sB;function PR(){if(sB)return Jf;sB=1;var e=Lc();function t(n,r){var a=this.__data__,i=e(a,n);return i<0?(++this.size,a.push([n,r])):a[i][1]=r,this}return Jf=t,Jf}var ed,lB;function Fc(){if(lB)return ed;lB=1;var e=IR(),t=BR(),n=xR(),r=wR(),a=PR();function i(s){var l=-1,c=s==null?0:s.length;for(this.clear();++l<c;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,ed=i,ed}var td,pB;function by(){if(pB)return td;pB=1;var e=Bo(),t=Wr(),n=e(t,"Map");return td=n,td}var nd,cB;function SR(){if(cB)return nd;cB=1;var e=bR(),t=Fc(),n=by();function r(){this.size=0,this.__data__={hash:new e,map:new(n||t),string:new e}}return nd=r,nd}var rd,fB;function WR(){if(fB)return rd;fB=1;function e(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}return rd=e,rd}var ad,dB;function qc(){if(dB)return ad;dB=1;var e=WR();function t(n,r){var a=n.__data__;return e(r)?a[typeof r=="string"?"string":"hash"]:a.map}return ad=t,ad}var od,hB;function AR(){if(hB)return od;hB=1;var e=qc();function t(n){var r=e(this,n).delete(n);return this.size-=r?1:0,r}return od=t,od}var id,mB;function _R(){if(mB)return id;mB=1;var e=qc();function t(n){return e(this,n).get(n)}return id=t,id}var ud,vB;function MR(){if(vB)return ud;vB=1;var e=qc();function t(n){return e(this,n).has(n)}return ud=t,ud}var sd,gB;function OR(){if(gB)return sd;gB=1;var e=qc();function t(n,r){var a=e(this,n),i=a.size;return a.set(n,r),this.size+=a.size==i?0:1,this}return sd=t,sd}var ld,yB;function Iy(){if(yB)return ld;yB=1;var e=SR(),t=AR(),n=_R(),r=MR(),a=OR();function i(s){var l=-1,c=s==null?0:s.length;for(this.clear();++l<c;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,ld=i,ld}var pd,bB;function MW(){if(bB)return pd;bB=1;var e=Iy(),t="Expected a function";function n(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(t);var i=function(){var s=arguments,l=a?a.apply(this,s):s[0],c=i.cache;if(c.has(l))return c.get(l);var f=r.apply(this,s);return i.cache=c.set(l,f)||c,f};return i.cache=new(n.Cache||e),i}return n.Cache=e,pd=n,pd}var cd,IB;function CR(){if(IB)return cd;IB=1;var e=MW(),t=500;function n(r){var a=e(r,function(s){return i.size===t&&i.clear(),s}),i=a.cache;return a}return cd=n,cd}var fd,BB;function kR(){if(BB)return fd;BB=1;var e=CR(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g,r=e(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(t,function(s,l,c,f){i.push(c?f.replace(n,"$1"):l||s)}),i});return fd=r,fd}var dd,xB;function By(){if(xB)return dd;xB=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,i=Array(a);++r<a;)i[r]=n(t[r],r,t);return i}return dd=e,dd}var hd,wB;function NR(){if(wB)return hd;wB=1;var e=Gs(),t=By(),n=yn(),r=Gi(),a=e?e.prototype:void 0,i=a?a.toString:void 0;function s(l){if(typeof l=="string")return l;if(n(l))return t(l,s)+"";if(r(l))return i?i.call(l):"";var c=l+"";return c=="0"&&1/l==-1/0?"-0":c}return hd=s,hd}var md,PB;function OW(){if(PB)return md;PB=1;var e=NR();function t(n){return n==null?"":e(n)}return md=t,md}var vd,SB;function CW(){if(SB)return vd;SB=1;var e=yn(),t=vy(),n=kR(),r=OW();function a(i,s){return e(i)?i:t(i,s)?[i]:n(r(i))}return vd=a,vd}var gd,WB;function zc(){if(WB)return gd;WB=1;var e=Gi();function t(n){if(typeof n=="string"||e(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}return gd=t,gd}var yd,AB;function xy(){if(AB)return yd;AB=1;var e=CW(),t=zc();function n(r,a){a=e(a,r);for(var i=0,s=a.length;r!=null&&i<s;)r=r[t(a[i++])];return i&&i==s?r:void 0}return yd=n,yd}var bd,_B;function kW(){if(_B)return bd;_B=1;var e=xy();function t(n,r,a){var i=n==null?void 0:e(n,r);return i===void 0?a:i}return bd=t,bd}var ER=kW();const Mn=Xe(ER);var Id,MB;function TR(){if(MB)return Id;MB=1;function e(t){return t==null}return Id=e,Id}var RR=TR();const Ne=Xe(RR);var Bd,OB;function HR(){if(OB)return Bd;OB=1;var e=Yr(),t=yn(),n=Xr(),r="[object String]";function a(i){return typeof i=="string"||!t(i)&&n(i)&&e(i)==r}return Bd=a,Bd}var jR=HR();const Ks=Xe(jR);var DR=gy();const ke=Xe(DR);var $R=Ha();const Ki=Xe($R);var xd={exports:{}},Qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CB;function LR(){if(CB)return Qe;CB=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function I(b){if(typeof b=="object"&&b!==null){var S=b.$$typeof;switch(S){case e:switch(b=b.type,b){case n:case a:case r:case f:case h:return b;default:switch(b=b&&b.$$typeof,b){case l:case s:case c:case v:case d:case i:return b;default:return S}}case t:return S}}}return Qe.ContextConsumer=s,Qe.ContextProvider=i,Qe.Element=e,Qe.ForwardRef=c,Qe.Fragment=n,Qe.Lazy=v,Qe.Memo=d,Qe.Portal=t,Qe.Profiler=a,Qe.StrictMode=r,Qe.Suspense=f,Qe.SuspenseList=h,Qe.isAsyncMode=function(){return!1},Qe.isConcurrentMode=function(){return!1},Qe.isContextConsumer=function(b){return I(b)===s},Qe.isContextProvider=function(b){return I(b)===i},Qe.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===e},Qe.isForwardRef=function(b){return I(b)===c},Qe.isFragment=function(b){return I(b)===n},Qe.isLazy=function(b){return I(b)===v},Qe.isMemo=function(b){return I(b)===d},Qe.isPortal=function(b){return I(b)===t},Qe.isProfiler=function(b){return I(b)===a},Qe.isStrictMode=function(b){return I(b)===r},Qe.isSuspense=function(b){return I(b)===f},Qe.isSuspenseList=function(b){return I(b)===h},Qe.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===n||b===a||b===r||b===f||b===h||b===y||typeof b=="object"&&b!==null&&(b.$$typeof===v||b.$$typeof===d||b.$$typeof===i||b.$$typeof===s||b.$$typeof===c||b.$$typeof===x||b.getModuleId!==void 0)},Qe.typeOf=I,Qe}var kB;function FR(){return kB||(kB=1,xd.exports=LR()),xd.exports}var qR=FR(),wd,NB;function NW(){if(NB)return wd;NB=1;var e=Yr(),t=Xr(),n="[object Number]";function r(a){return typeof a=="number"||t(a)&&e(a)==n}return wd=r,wd}var Pd,EB;function zR(){if(EB)return Pd;EB=1;var e=NW();function t(n){return e(n)&&n!=+n}return Pd=t,Pd}var UR=zR();const Qi=Xe(UR);var VR=NW();const GR=Xe(VR);var an=function(t){return t===0?0:t>0?1:-1},lo=function(t){return Ks(t)&&t.indexOf("%")===t.length-1},le=function(t){return GR(t)&&!Qi(t)},Rt=function(t){return le(t)||Ks(t)},KR=0,ja=function(t){var n=++KR;return"".concat(t||"").concat(n)},on=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!le(t)&&!Ks(t))return r;var i;if(lo(t)){var s=t.indexOf("%");i=n*parseFloat(t.slice(0,s))/100}else i=+t;return Qi(i)&&(i=r),a&&i>n&&(i=n),i},Wa=function(t){if(!t)return null;var n=Object.keys(t);return n&&n.length?t[n[0]]:null},QR=function(t){if(!Array.isArray(t))return!1;for(var n=t.length,r={},a=0;a<n;a++)if(!r[t[a]])r[t[a]]=!0;else return!0;return!1},ht=function(t,n){return le(t)&&le(n)?function(r){return t+r*(n-t)}:function(){return n}};function Np(e,t,n){return!e||!e.length?null:e.find(function(r){return r&&(typeof t=="function"?t(r):Mn(r,t))===n})}var YR=function(t){if(!t||!t.length)return null;for(var n=t.length,r=0,a=0,i=0,s=0,l=1/0,c=-1/0,f=0,h=0,d=0;d<n;d++)f=t[d].cx||0,h=t[d].cy||0,r+=f,a+=h,i+=f*h,s+=f*f,l=Math.min(l,f),c=Math.max(c,f);var v=n*s!==r*r?(n*i-r*a)/(n*s-r*r):0;return{xmin:l,xmax:c,a:v,b:(a-v*r)/n}};function li(e,t){for(var n in e)if({}.hasOwnProperty.call(e,n)&&(!{}.hasOwnProperty.call(t,n)||e[n]!==t[n]))return!1;for(var r in t)if({}.hasOwnProperty.call(t,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function Hv(e){"@babel/helpers - typeof";return Hv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hv(e)}var XR=["viewBox","children"],ZR=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],TB=["points","pathLength"],Sd={svg:XR,polygon:TB,polyline:TB},wy=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Ep=function(t,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var r=t;if(X.isValidElement(t)&&(r=t.props),!Ki(r))return null;var a={};return Object.keys(r).forEach(function(i){wy.includes(i)&&(a[i]=n||function(s){return r[i](r,s)})}),a},JR=function(t,n,r){return function(a){return t(n,r,a),null}},Ea=function(t,n,r){if(!Ki(t)||Hv(t)!=="object")return null;var a=null;return Object.keys(t).forEach(function(i){var s=t[i];wy.includes(i)&&typeof s=="function"&&(a||(a={}),a[i]=JR(s,n,r))}),a},eH=["children"],tH=["children"];function RB(e,t){if(e==null)return{};var n=nH(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function nH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function jv(e){"@babel/helpers - typeof";return jv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jv(e)}var HB={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},Ur=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},jB=null,Wd=null,Py=function e(t){if(t===jB&&Array.isArray(Wd))return Wd;var n=[];return X.Children.forEach(t,function(r){Ne(r)||(qR.isFragment(r)?n=n.concat(e(r.props.children)):n.push(r))}),Wd=n,jB=t,n};function sn(e,t){var n=[],r=[];return Array.isArray(t)?r=t.map(function(a){return Ur(a)}):r=[Ur(t)],Py(e).forEach(function(a){var i=Mn(a,"type.displayName")||Mn(a,"type.name");r.indexOf(i)!==-1&&n.push(a)}),n}function Sn(e,t){var n=sn(e,t);return n&&n[0]}var DB=function(t){if(!t||!t.props)return!1;var n=t.props,r=n.width,a=n.height;return!(!le(r)||r<=0||!le(a)||a<=0)},rH=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],aH=function(t){return t&&t.type&&Ks(t.type)&&rH.indexOf(t.type)>=0},EW=function(t){return t&&jv(t)==="object"&&"clipDot"in t},oH=function(t,n,r,a){var i,s=(i=Sd==null?void 0:Sd[a])!==null&&i!==void 0?i:[];return n.startsWith("data-")||!ke(t)&&(a&&s.includes(n)||ZR.includes(n))||r&&wy.includes(n)},We=function(t,n,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var a=t;if(X.isValidElement(t)&&(a=t.props),!Ki(a))return null;var i={};return Object.keys(a).forEach(function(s){var l;oH((l=a)===null||l===void 0?void 0:l[s],s,n,r)&&(i[s]=a[s])}),i},Dv=function e(t,n){if(t===n)return!0;var r=X.Children.count(t);if(r!==X.Children.count(n))return!1;if(r===0)return!0;if(r===1)return $B(Array.isArray(t)?t[0]:t,Array.isArray(n)?n[0]:n);for(var a=0;a<r;a++){var i=t[a],s=n[a];if(Array.isArray(i)||Array.isArray(s)){if(!e(i,s))return!1}else if(!$B(i,s))return!1}return!0},$B=function(t,n){if(Ne(t)&&Ne(n))return!0;if(!Ne(t)&&!Ne(n)){var r=t.props||{},a=r.children,i=RB(r,eH),s=n.props||{},l=s.children,c=RB(s,tH);return a&&l?li(i,c)&&Dv(a,l):!a&&!l?li(i,c):!1}return!1},LB=function(t,n){var r=[],a={};return Py(t).forEach(function(i,s){if(aH(i))r.push(i);else if(i){var l=Ur(i.type),c=n[l]||{},f=c.handler,h=c.once;if(f&&(!h||!a[l])){var d=f(i,l,s);r.push(d),a[l]=!0}}}),r},iH=function(t){var n=t&&t.type;return n&&HB[n]?HB[n]:null},uH=function(t,n){return Py(n).indexOf(t)},sH=["children","width","height","viewBox","className","style","title","desc"];function $v(){return $v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$v.apply(this,arguments)}function lH(e,t){if(e==null)return{};var n=pH(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Lv(e){var t=e.children,n=e.width,r=e.height,a=e.viewBox,i=e.className,s=e.style,l=e.title,c=e.desc,f=lH(e,sH),h=a||{width:n,height:r,x:0,y:0},d=He("recharts-surface",i);return R.createElement("svg",$v({},We(f,!0,"svg"),{className:d,width:n,height:r,style:s,viewBox:"".concat(h.x," ").concat(h.y," ").concat(h.width," ").concat(h.height)}),R.createElement("title",null,l),R.createElement("desc",null,c),t)}var cH=["children","className"];function Fv(){return Fv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fv.apply(this,arguments)}function fH(e,t){if(e==null)return{};var n=dH(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function dH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var De=R.forwardRef(function(e,t){var n=e.children,r=e.className,a=fH(e,cH),i=He("recharts-layer",r);return R.createElement("g",Fv({className:i},We(a,!0),{ref:t}),n)}),sr=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i]},Ad,FB;function hH(){if(FB)return Ad;FB=1;function e(t,n,r){var a=-1,i=t.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var s=Array(i);++a<i;)s[a]=t[a+n];return s}return Ad=e,Ad}var _d,qB;function mH(){if(qB)return _d;qB=1;var e=hH();function t(n,r,a){var i=n.length;return a=a===void 0?i:a,!r&&a>=i?n:e(n,r,a)}return _d=t,_d}var Md,zB;function TW(){if(zB)return Md;zB=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,i="\\ufe0e\\ufe0f",s="\\u200d",l=RegExp("["+s+e+a+i+"]");function c(f){return l.test(f)}return Md=c,Md}var Od,UB;function vH(){if(UB)return Od;UB=1;function e(t){return t.split("")}return Od=e,Od}var Cd,VB;function gH(){if(VB)return Cd;VB=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,i="\\ufe0e\\ufe0f",s="["+e+"]",l="["+a+"]",c="\\ud83c[\\udffb-\\udfff]",f="(?:"+l+"|"+c+")",h="[^"+e+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",y="\\u200d",x=f+"?",I="["+i+"]?",b="(?:"+y+"(?:"+[h,d,v].join("|")+")"+I+x+")*",S=I+x+b,W="(?:"+[h+l+"?",l,d,v,s].join("|")+")",A=RegExp(c+"(?="+c+")|"+W+S,"g");function O(w){return w.match(A)||[]}return Cd=O,Cd}var kd,GB;function yH(){if(GB)return kd;GB=1;var e=vH(),t=TW(),n=gH();function r(a){return t(a)?n(a):e(a)}return kd=r,kd}var Nd,KB;function bH(){if(KB)return Nd;KB=1;var e=mH(),t=TW(),n=yH(),r=OW();function a(i){return function(s){s=r(s);var l=t(s)?n(s):void 0,c=l?l[0]:s.charAt(0),f=l?e(l,1).join(""):s.slice(1);return c[i]()+f}}return Nd=a,Nd}var Ed,QB;function IH(){if(QB)return Ed;QB=1;var e=bH(),t=e("toUpperCase");return Ed=t,Ed}var BH=IH();const Uc=Xe(BH);function at(e){return function(){return e}}const RW=Math.cos,Tp=Math.sin,cr=Math.sqrt,Rp=Math.PI,Vc=2*Rp,qv=Math.PI,zv=2*qv,io=1e-6,xH=zv-io;function HW(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function wH(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return HW;const n=10**t;return function(r){this._+=r[0];for(let a=1,i=r.length;a<i;++a)this._+=Math.round(arguments[a]*n)/n+r[a]}}class PH{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?HW:wH(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,a){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(t,n,r,a,i,s){this._append`C${+t},${+n},${+r},${+a},${this._x1=+i},${this._y1=+s}`}arcTo(t,n,r,a,i){if(t=+t,n=+n,r=+r,a=+a,i=+i,i<0)throw new Error(`negative radius: ${i}`);let s=this._x1,l=this._y1,c=r-t,f=a-n,h=s-t,d=l-n,v=h*h+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(v>io)if(!(Math.abs(d*c-f*h)>io)||!i)this._append`L${this._x1=t},${this._y1=n}`;else{let y=r-s,x=a-l,I=c*c+f*f,b=y*y+x*x,S=Math.sqrt(I),W=Math.sqrt(v),A=i*Math.tan((qv-Math.acos((I+v-b)/(2*S*W)))/2),O=A/W,w=A/S;Math.abs(O-1)>io&&this._append`L${t+O*h},${n+O*d}`,this._append`A${i},${i},0,0,${+(d*y>h*x)},${this._x1=t+w*c},${this._y1=n+w*f}`}}arc(t,n,r,a,i,s){if(t=+t,n=+n,r=+r,s=!!s,r<0)throw new Error(`negative radius: ${r}`);let l=r*Math.cos(a),c=r*Math.sin(a),f=t+l,h=n+c,d=1^s,v=s?a-i:i-a;this._x1===null?this._append`M${f},${h}`:(Math.abs(this._x1-f)>io||Math.abs(this._y1-h)>io)&&this._append`L${f},${h}`,r&&(v<0&&(v=v%zv+zv),v>xH?this._append`A${r},${r},0,1,${d},${t-l},${n-c}A${r},${r},0,1,${d},${this._x1=f},${this._y1=h}`:v>io&&this._append`A${r},${r},0,${+(v>=qv)},${d},${this._x1=t+r*Math.cos(i)},${this._y1=n+r*Math.sin(i)}`)}rect(t,n,r,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function Sy(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new PH(t)}function Wy(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function jW(e){this._context=e}jW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function Gc(e){return new jW(e)}function DW(e){return e[0]}function $W(e){return e[1]}function LW(e,t){var n=at(!0),r=null,a=Gc,i=null,s=Sy(l);e=typeof e=="function"?e:e===void 0?DW:at(e),t=typeof t=="function"?t:t===void 0?$W:at(t);function l(c){var f,h=(c=Wy(c)).length,d,v=!1,y;for(r==null&&(i=a(y=s())),f=0;f<=h;++f)!(f<h&&n(d=c[f],f,c))===v&&((v=!v)?i.lineStart():i.lineEnd()),v&&i.point(+e(d,f,c),+t(d,f,c));if(y)return i=null,y+""||null}return l.x=function(c){return arguments.length?(e=typeof c=="function"?c:at(+c),l):e},l.y=function(c){return arguments.length?(t=typeof c=="function"?c:at(+c),l):t},l.defined=function(c){return arguments.length?(n=typeof c=="function"?c:at(!!c),l):n},l.curve=function(c){return arguments.length?(a=c,r!=null&&(i=a(r)),l):a},l.context=function(c){return arguments.length?(c==null?r=i=null:i=a(r=c),l):r},l}function hp(e,t,n){var r=null,a=at(!0),i=null,s=Gc,l=null,c=Sy(f);e=typeof e=="function"?e:e===void 0?DW:at(+e),t=typeof t=="function"?t:at(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?$W:at(+n);function f(d){var v,y,x,I=(d=Wy(d)).length,b,S=!1,W,A=new Array(I),O=new Array(I);for(i==null&&(l=s(W=c())),v=0;v<=I;++v){if(!(v<I&&a(b=d[v],v,d))===S)if(S=!S)y=v,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),x=v-1;x>=y;--x)l.point(A[x],O[x]);l.lineEnd(),l.areaEnd()}S&&(A[v]=+e(b,v,d),O[v]=+t(b,v,d),l.point(r?+r(b,v,d):A[v],n?+n(b,v,d):O[v]))}if(W)return l=null,W+""||null}function h(){return LW().defined(a).curve(s).context(i)}return f.x=function(d){return arguments.length?(e=typeof d=="function"?d:at(+d),r=null,f):e},f.x0=function(d){return arguments.length?(e=typeof d=="function"?d:at(+d),f):e},f.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:at(+d),f):r},f.y=function(d){return arguments.length?(t=typeof d=="function"?d:at(+d),n=null,f):t},f.y0=function(d){return arguments.length?(t=typeof d=="function"?d:at(+d),f):t},f.y1=function(d){return arguments.length?(n=d==null?null:typeof d=="function"?d:at(+d),f):n},f.lineX0=f.lineY0=function(){return h().x(e).y(t)},f.lineY1=function(){return h().x(e).y(n)},f.lineX1=function(){return h().x(r).y(t)},f.defined=function(d){return arguments.length?(a=typeof d=="function"?d:at(!!d),f):a},f.curve=function(d){return arguments.length?(s=d,i!=null&&(l=s(i)),f):s},f.context=function(d){return arguments.length?(d==null?i=l=null:l=s(i=d),f):i},f}class FW{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function SH(e){return new FW(e,!0)}function WH(e){return new FW(e,!1)}const Ay={draw(e,t){const n=cr(t/Rp);e.moveTo(n,0),e.arc(0,0,n,0,Vc)}},AH={draw(e,t){const n=cr(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},qW=cr(1/3),_H=qW*2,MH={draw(e,t){const n=cr(t/_H),r=n*qW;e.moveTo(0,-n),e.lineTo(r,0),e.lineTo(0,n),e.lineTo(-r,0),e.closePath()}},OH={draw(e,t){const n=cr(t),r=-n/2;e.rect(r,r,n,n)}},CH=.8908130915292852,zW=Tp(Rp/10)/Tp(7*Rp/10),kH=Tp(Vc/10)*zW,NH=-RW(Vc/10)*zW,EH={draw(e,t){const n=cr(t*CH),r=kH*n,a=NH*n;e.moveTo(0,-n),e.lineTo(r,a);for(let i=1;i<5;++i){const s=Vc*i/5,l=RW(s),c=Tp(s);e.lineTo(c*n,-l*n),e.lineTo(l*r-c*a,c*r+l*a)}e.closePath()}},Td=cr(3),TH={draw(e,t){const n=-cr(t/(Td*3));e.moveTo(0,n*2),e.lineTo(-Td*n,-n),e.lineTo(Td*n,-n),e.closePath()}},Dn=-.5,$n=cr(3)/2,Uv=1/cr(12),RH=(Uv/2+1)*3,HH={draw(e,t){const n=cr(t/RH),r=n/2,a=n*Uv,i=r,s=n*Uv+n,l=-i,c=s;e.moveTo(r,a),e.lineTo(i,s),e.lineTo(l,c),e.lineTo(Dn*r-$n*a,$n*r+Dn*a),e.lineTo(Dn*i-$n*s,$n*i+Dn*s),e.lineTo(Dn*l-$n*c,$n*l+Dn*c),e.lineTo(Dn*r+$n*a,Dn*a-$n*r),e.lineTo(Dn*i+$n*s,Dn*s-$n*i),e.lineTo(Dn*l+$n*c,Dn*c-$n*l),e.closePath()}};function jH(e,t){let n=null,r=Sy(a);e=typeof e=="function"?e:at(e||Ay),t=typeof t=="function"?t:at(t===void 0?64:+t);function a(){let i;if(n||(n=i=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),i)return n=null,i+""||null}return a.type=function(i){return arguments.length?(e=typeof i=="function"?i:at(i),a):e},a.size=function(i){return arguments.length?(t=typeof i=="function"?i:at(+i),a):t},a.context=function(i){return arguments.length?(n=i??null,a):n},a}function Hp(){}function jp(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function UW(e){this._context=e}UW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:jp(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:jp(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function DH(e){return new UW(e)}function VW(e){this._context=e}VW.prototype={areaStart:Hp,areaEnd:Hp,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:jp(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function $H(e){return new VW(e)}function GW(e){this._context=e}GW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:jp(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function LH(e){return new GW(e)}function KW(e){this._context=e}KW.prototype={areaStart:Hp,areaEnd:Hp,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function FH(e){return new KW(e)}function YB(e){return e<0?-1:1}function XB(e,t,n){var r=e._x1-e._x0,a=t-e._x1,i=(e._y1-e._y0)/(r||a<0&&-0),s=(n-e._y1)/(a||r<0&&-0),l=(i*a+s*r)/(r+a);return(YB(i)+YB(s))*Math.min(Math.abs(i),Math.abs(s),.5*Math.abs(l))||0}function ZB(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function Rd(e,t,n){var r=e._x0,a=e._y0,i=e._x1,s=e._y1,l=(i-r)/3;e._context.bezierCurveTo(r+l,a+l*t,i-l,s-l*n,i,s)}function Dp(e){this._context=e}Dp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Rd(this,this._t0,ZB(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Rd(this,ZB(this,n=XB(this,e,t)),n);break;default:Rd(this,this._t0,n=XB(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function QW(e){this._context=new YW(e)}(QW.prototype=Object.create(Dp.prototype)).point=function(e,t){Dp.prototype.point.call(this,t,e)};function YW(e){this._context=e}YW.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,a,i){this._context.bezierCurveTo(t,e,r,n,i,a)}};function qH(e){return new Dp(e)}function zH(e){return new QW(e)}function XW(e){this._context=e}XW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=JB(e),a=JB(t),i=0,s=1;s<n;++i,++s)this._context.bezierCurveTo(r[0][i],a[0][i],r[1][i],a[1][i],e[s],t[s]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function JB(e){var t,n=e.length-1,r,a=new Array(n),i=new Array(n),s=new Array(n);for(a[0]=0,i[0]=2,s[0]=e[0]+2*e[1],t=1;t<n-1;++t)a[t]=1,i[t]=4,s[t]=4*e[t]+2*e[t+1];for(a[n-1]=2,i[n-1]=7,s[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=a[t]/i[t-1],i[t]-=r,s[t]-=r*s[t-1];for(a[n-1]=s[n-1]/i[n-1],t=n-2;t>=0;--t)a[t]=(s[t]-a[t+1])/i[t];for(i[n-1]=(e[n]+a[n-1])/2,t=0;t<n-1;++t)i[t]=2*e[t+1]-a[t+1];return[a,i]}function UH(e){return new XW(e)}function Kc(e,t){this._context=e,this._t=t}Kc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function VH(e){return new Kc(e,.5)}function GH(e){return new Kc(e,0)}function KH(e){return new Kc(e,1)}function hi(e,t){if((s=e.length)>1)for(var n=1,r,a,i=e[t[0]],s,l=i.length;n<s;++n)for(a=i,i=e[t[n]],r=0;r<l;++r)i[r][1]+=i[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function Vv(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function QH(e,t){return e[t]}function YH(e){const t=[];return t.key=e,t}function XH(){var e=at([]),t=Vv,n=hi,r=QH;function a(i){var s=Array.from(e.apply(this,arguments),YH),l,c=s.length,f=-1,h;for(const d of i)for(l=0,++f;l<c;++l)(s[l][f]=[0,+r(d,s[l].key,f,i)]).data=d;for(l=0,h=Wy(t(s));l<c;++l)s[h[l]].index=l;return n(s,h),s}return a.keys=function(i){return arguments.length?(e=typeof i=="function"?i:at(Array.from(i)),a):e},a.value=function(i){return arguments.length?(r=typeof i=="function"?i:at(+i),a):r},a.order=function(i){return arguments.length?(t=i==null?Vv:typeof i=="function"?i:at(Array.from(i)),a):t},a.offset=function(i){return arguments.length?(n=i??hi,a):n},a}function ZH(e,t){if((r=e.length)>0){for(var n,r,a=0,i=e[0].length,s;a<i;++a){for(s=n=0;n<r;++n)s+=e[n][a][1]||0;if(s)for(n=0;n<r;++n)e[n][a][1]/=s}hi(e,t)}}function JH(e,t){if((a=e.length)>0){for(var n=0,r=e[t[0]],a,i=r.length;n<i;++n){for(var s=0,l=0;s<a;++s)l+=e[s][n][1]||0;r[n][1]+=r[n][0]=-l/2}hi(e,t)}}function ej(e,t){if(!(!((s=e.length)>0)||!((i=(a=e[t[0]]).length)>0))){for(var n=0,r=1,a,i,s;r<i;++r){for(var l=0,c=0,f=0;l<s;++l){for(var h=e[t[l]],d=h[r][1]||0,v=h[r-1][1]||0,y=(d-v)/2,x=0;x<l;++x){var I=e[t[x]],b=I[r][1]||0,S=I[r-1][1]||0;y+=b-S}c+=d,f+=y*d}a[r-1][1]+=a[r-1][0]=n,c&&(n-=f/c)}a[r-1][1]+=a[r-1][0]=n,hi(e,t)}}function fs(e){"@babel/helpers - typeof";return fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fs(e)}var tj=["type","size","sizeType"];function Gv(){return Gv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gv.apply(this,arguments)}function ex(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function tx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ex(Object(n),!0).forEach(function(r){nj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ex(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nj(e,t,n){return t=rj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rj(e){var t=aj(e,"string");return fs(t)=="symbol"?t:t+""}function aj(e,t){if(fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function oj(e,t){if(e==null)return{};var n=ij(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ij(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var ZW={symbolCircle:Ay,symbolCross:AH,symbolDiamond:MH,symbolSquare:OH,symbolStar:EH,symbolTriangle:TH,symbolWye:HH},uj=Math.PI/180,sj=function(t){var n="symbol".concat(Uc(t));return ZW[n]||Ay},lj=function(t,n,r){if(n==="area")return t;switch(r){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var a=18*uj;return 1.25*t*t*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},pj=function(t,n){ZW["symbol".concat(Uc(t))]=n},Qc=function(t){var n=t.type,r=n===void 0?"circle":n,a=t.size,i=a===void 0?64:a,s=t.sizeType,l=s===void 0?"area":s,c=oj(t,tj),f=tx(tx({},c),{},{type:r,size:i,sizeType:l}),h=function(){var b=sj(r),S=jH().type(b).size(lj(i,l,r));return S()},d=f.className,v=f.cx,y=f.cy,x=We(f,!0);return v===+v&&y===+y&&i===+i?R.createElement("path",Gv({},x,{className:He("recharts-symbols",d),transform:"translate(".concat(v,", ").concat(y,")"),d:h()})):null};Qc.registerSymbol=pj;function mi(e){"@babel/helpers - typeof";return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mi(e)}function Kv(){return Kv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kv.apply(this,arguments)}function nx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function cj(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nx(Object(n),!0).forEach(function(r){ds(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fj(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function dj(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,eA(r.key),r)}}function hj(e,t,n){return t&&dj(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function mj(e,t,n){return t=$p(t),vj(e,JW()?Reflect.construct(t,n||[],$p(e).constructor):t.apply(e,n))}function vj(e,t){if(t&&(mi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gj(e)}function gj(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function JW(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(JW=function(){return!!e})()}function $p(e){return $p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},$p(e)}function yj(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qv(e,t)}function Qv(e,t){return Qv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qv(e,t)}function ds(e,t,n){return t=eA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eA(e){var t=bj(e,"string");return mi(t)=="symbol"?t:t+""}function bj(e,t){if(mi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Ln=32,_y=(function(e){function t(){return fj(this,t),mj(this,t,arguments)}return yj(t,e),hj(t,[{key:"renderIcon",value:function(r){var a=this.props.inactiveColor,i=Ln/2,s=Ln/6,l=Ln/3,c=r.inactive?a:r.color;if(r.type==="plainline")return R.createElement("line",{strokeWidth:4,fill:"none",stroke:c,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:i,x2:Ln,y2:i,className:"recharts-legend-icon"});if(r.type==="line")return R.createElement("path",{strokeWidth:4,fill:"none",stroke:c,d:"M0,".concat(i,"h").concat(l,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(2*l,",").concat(i,`
            H`).concat(Ln,"M").concat(2*l,",").concat(i,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(l,",").concat(i),className:"recharts-legend-icon"});if(r.type==="rect")return R.createElement("path",{stroke:"none",fill:c,d:"M0,".concat(Ln/8,"h").concat(Ln,"v").concat(Ln*3/4,"h").concat(-Ln,"z"),className:"recharts-legend-icon"});if(R.isValidElement(r.legendIcon)){var f=cj({},r);return delete f.legendIcon,R.cloneElement(r.legendIcon,f)}return R.createElement(Qc,{fill:c,cx:i,cy:i,size:Ln,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,a=this.props,i=a.payload,s=a.iconSize,l=a.layout,c=a.formatter,f=a.inactiveColor,h={x:0,y:0,width:Ln,height:Ln},d={display:l==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return i.map(function(y,x){var I=y.formatter||c,b=He(ds(ds({"recharts-legend-item":!0},"legend-item-".concat(x),!0),"inactive",y.inactive));if(y.type==="none")return null;var S=ke(y.value)?null:y.value;sr(!ke(y.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var W=y.inactive?f:y.color;return R.createElement("li",Kv({className:b,style:d,key:"legend-item-".concat(x)},Ea(r.props,y,x)),R.createElement(Lv,{width:s,height:s,viewBox:h,style:v},r.renderIcon(y)),R.createElement("span",{className:"recharts-legend-item-text",style:{color:W}},I?I(S,y,x):S))})}},{key:"render",value:function(){var r=this.props,a=r.payload,i=r.layout,s=r.align;if(!a||!a.length)return null;var l={padding:0,margin:0,textAlign:i==="horizontal"?s:"left"};return R.createElement("ul",{className:"recharts-default-legend",style:l},this.renderItems())}}])})(X.PureComponent);ds(_y,"displayName","Legend");ds(_y,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var Hd,rx;function Ij(){if(rx)return Hd;rx=1;var e=Fc();function t(){this.__data__=new e,this.size=0}return Hd=t,Hd}var jd,ax;function Bj(){if(ax)return jd;ax=1;function e(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r}return jd=e,jd}var Dd,ox;function xj(){if(ox)return Dd;ox=1;function e(t){return this.__data__.get(t)}return Dd=e,Dd}var $d,ix;function wj(){if(ix)return $d;ix=1;function e(t){return this.__data__.has(t)}return $d=e,$d}var Ld,ux;function Pj(){if(ux)return Ld;ux=1;var e=Fc(),t=by(),n=Iy(),r=200;function a(i,s){var l=this.__data__;if(l instanceof e){var c=l.__data__;if(!t||c.length<r-1)return c.push([i,s]),this.size=++l.size,this;l=this.__data__=new n(c)}return l.set(i,s),this.size=l.size,this}return Ld=a,Ld}var Fd,sx;function tA(){if(sx)return Fd;sx=1;var e=Fc(),t=Ij(),n=Bj(),r=xj(),a=wj(),i=Pj();function s(l){var c=this.__data__=new e(l);this.size=c.size}return s.prototype.clear=t,s.prototype.delete=n,s.prototype.get=r,s.prototype.has=a,s.prototype.set=i,Fd=s,Fd}var qd,lx;function Sj(){if(lx)return qd;lx=1;var e="__lodash_hash_undefined__";function t(n){return this.__data__.set(n,e),this}return qd=t,qd}var zd,px;function Wj(){if(px)return zd;px=1;function e(t){return this.__data__.has(t)}return zd=e,zd}var Ud,cx;function nA(){if(cx)return Ud;cx=1;var e=Iy(),t=Sj(),n=Wj();function r(a){var i=-1,s=a==null?0:a.length;for(this.__data__=new e;++i<s;)this.add(a[i])}return r.prototype.add=r.prototype.push=t,r.prototype.has=n,Ud=r,Ud}var Vd,fx;function rA(){if(fx)return Vd;fx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(n(t[r],r,t))return!0;return!1}return Vd=e,Vd}var Gd,dx;function aA(){if(dx)return Gd;dx=1;function e(t,n){return t.has(n)}return Gd=e,Gd}var Kd,hx;function oA(){if(hx)return Kd;hx=1;var e=nA(),t=rA(),n=aA(),r=1,a=2;function i(s,l,c,f,h,d){var v=c&r,y=s.length,x=l.length;if(y!=x&&!(v&&x>y))return!1;var I=d.get(s),b=d.get(l);if(I&&b)return I==l&&b==s;var S=-1,W=!0,A=c&a?new e:void 0;for(d.set(s,l),d.set(l,s);++S<y;){var O=s[S],w=l[S];if(f)var _=v?f(w,O,S,l,s,d):f(O,w,S,s,l,d);if(_!==void 0){if(_)continue;W=!1;break}if(A){if(!t(l,function(N,P){if(!n(A,P)&&(O===N||h(O,N,c,f,d)))return A.push(P)})){W=!1;break}}else if(!(O===w||h(O,w,c,f,d))){W=!1;break}}return d.delete(s),d.delete(l),W}return Kd=i,Kd}var Qd,mx;function Aj(){if(mx)return Qd;mx=1;var e=Wr(),t=e.Uint8Array;return Qd=t,Qd}var Yd,vx;function _j(){if(vx)return Yd;vx=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a,i){r[++n]=[i,a]}),r}return Yd=e,Yd}var Xd,gx;function My(){if(gx)return Xd;gx=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a){r[++n]=a}),r}return Xd=e,Xd}var Zd,yx;function Mj(){if(yx)return Zd;yx=1;var e=Gs(),t=Aj(),n=yy(),r=oA(),a=_j(),i=My(),s=1,l=2,c="[object Boolean]",f="[object Date]",h="[object Error]",d="[object Map]",v="[object Number]",y="[object RegExp]",x="[object Set]",I="[object String]",b="[object Symbol]",S="[object ArrayBuffer]",W="[object DataView]",A=e?e.prototype:void 0,O=A?A.valueOf:void 0;function w(_,N,P,C,T,j,E){switch(P){case W:if(_.byteLength!=N.byteLength||_.byteOffset!=N.byteOffset)return!1;_=_.buffer,N=N.buffer;case S:return!(_.byteLength!=N.byteLength||!j(new t(_),new t(N)));case c:case f:case v:return n(+_,+N);case h:return _.name==N.name&&_.message==N.message;case y:case I:return _==N+"";case d:var $=a;case x:var V=C&s;if($||($=i),_.size!=N.size&&!V)return!1;var G=E.get(_);if(G)return G==N;C|=l,E.set(_,N);var z=r($(_),$(N),C,T,j,E);return E.delete(_),z;case b:if(O)return O.call(_)==O.call(N)}return!1}return Zd=w,Zd}var Jd,bx;function iA(){if(bx)return Jd;bx=1;function e(t,n){for(var r=-1,a=n.length,i=t.length;++r<a;)t[i+r]=n[r];return t}return Jd=e,Jd}var eh,Ix;function Oj(){if(Ix)return eh;Ix=1;var e=iA(),t=yn();function n(r,a,i){var s=a(r);return t(r)?s:e(s,i(r))}return eh=n,eh}var th,Bx;function Cj(){if(Bx)return th;Bx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,i=0,s=[];++r<a;){var l=t[r];n(l,r,t)&&(s[i++]=l)}return s}return th=e,th}var nh,xx;function kj(){if(xx)return nh;xx=1;function e(){return[]}return nh=e,nh}var rh,wx;function Nj(){if(wx)return rh;wx=1;var e=Cj(),t=kj(),n=Object.prototype,r=n.propertyIsEnumerable,a=Object.getOwnPropertySymbols,i=a?function(s){return s==null?[]:(s=Object(s),e(a(s),function(l){return r.call(s,l)}))}:t;return rh=i,rh}var ah,Px;function Ej(){if(Px)return ah;Px=1;function e(t,n){for(var r=-1,a=Array(t);++r<t;)a[r]=n(r);return a}return ah=e,ah}var oh,Sx;function Tj(){if(Sx)return oh;Sx=1;var e=Yr(),t=Xr(),n="[object Arguments]";function r(a){return t(a)&&e(a)==n}return oh=r,oh}var ih,Wx;function Oy(){if(Wx)return ih;Wx=1;var e=Tj(),t=Xr(),n=Object.prototype,r=n.hasOwnProperty,a=n.propertyIsEnumerable,i=e((function(){return arguments})())?e:function(s){return t(s)&&r.call(s,"callee")&&!a.call(s,"callee")};return ih=i,ih}var Ju={exports:{}},uh,Ax;function Rj(){if(Ax)return uh;Ax=1;function e(){return!1}return uh=e,uh}Ju.exports;var _x;function uA(){return _x||(_x=1,(function(e,t){var n=Wr(),r=Rj(),a=t&&!t.nodeType&&t,i=a&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===a,l=s?n.Buffer:void 0,c=l?l.isBuffer:void 0,f=c||r;e.exports=f})(Ju,Ju.exports)),Ju.exports}var sh,Mx;function Cy(){if(Mx)return sh;Mx=1;var e=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function n(r,a){var i=typeof r;return a=a??e,!!a&&(i=="number"||i!="symbol"&&t.test(r))&&r>-1&&r%1==0&&r<a}return sh=n,sh}var lh,Ox;function ky(){if(Ox)return lh;Ox=1;var e=9007199254740991;function t(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=e}return lh=t,lh}var ph,Cx;function Hj(){if(Cx)return ph;Cx=1;var e=Yr(),t=ky(),n=Xr(),r="[object Arguments]",a="[object Array]",i="[object Boolean]",s="[object Date]",l="[object Error]",c="[object Function]",f="[object Map]",h="[object Number]",d="[object Object]",v="[object RegExp]",y="[object Set]",x="[object String]",I="[object WeakMap]",b="[object ArrayBuffer]",S="[object DataView]",W="[object Float32Array]",A="[object Float64Array]",O="[object Int8Array]",w="[object Int16Array]",_="[object Int32Array]",N="[object Uint8Array]",P="[object Uint8ClampedArray]",C="[object Uint16Array]",T="[object Uint32Array]",j={};j[W]=j[A]=j[O]=j[w]=j[_]=j[N]=j[P]=j[C]=j[T]=!0,j[r]=j[a]=j[b]=j[i]=j[S]=j[s]=j[l]=j[c]=j[f]=j[h]=j[d]=j[v]=j[y]=j[x]=j[I]=!1;function E($){return n($)&&t($.length)&&!!j[e($)]}return ph=E,ph}var ch,kx;function sA(){if(kx)return ch;kx=1;function e(t){return function(n){return t(n)}}return ch=e,ch}var es={exports:{}};es.exports;var Nx;function jj(){return Nx||(Nx=1,(function(e,t){var n=AW(),r=t&&!t.nodeType&&t,a=r&&!0&&e&&!e.nodeType&&e,i=a&&a.exports===r,s=i&&n.process,l=(function(){try{var c=a&&a.require&&a.require("util").types;return c||s&&s.binding&&s.binding("util")}catch{}})();e.exports=l})(es,es.exports)),es.exports}var fh,Ex;function lA(){if(Ex)return fh;Ex=1;var e=Hj(),t=sA(),n=jj(),r=n&&n.isTypedArray,a=r?t(r):e;return fh=a,fh}var dh,Tx;function Dj(){if(Tx)return dh;Tx=1;var e=Ej(),t=Oy(),n=yn(),r=uA(),a=Cy(),i=lA(),s=Object.prototype,l=s.hasOwnProperty;function c(f,h){var d=n(f),v=!d&&t(f),y=!d&&!v&&r(f),x=!d&&!v&&!y&&i(f),I=d||v||y||x,b=I?e(f.length,String):[],S=b.length;for(var W in f)(h||l.call(f,W))&&!(I&&(W=="length"||y&&(W=="offset"||W=="parent")||x&&(W=="buffer"||W=="byteLength"||W=="byteOffset")||a(W,S)))&&b.push(W);return b}return dh=c,dh}var hh,Rx;function $j(){if(Rx)return hh;Rx=1;var e=Object.prototype;function t(n){var r=n&&n.constructor,a=typeof r=="function"&&r.prototype||e;return n===a}return hh=t,hh}var mh,Hx;function pA(){if(Hx)return mh;Hx=1;function e(t,n){return function(r){return t(n(r))}}return mh=e,mh}var vh,jx;function Lj(){if(jx)return vh;jx=1;var e=pA(),t=e(Object.keys,Object);return vh=t,vh}var gh,Dx;function Fj(){if(Dx)return gh;Dx=1;var e=$j(),t=Lj(),n=Object.prototype,r=n.hasOwnProperty;function a(i){if(!e(i))return t(i);var s=[];for(var l in Object(i))r.call(i,l)&&l!="constructor"&&s.push(l);return s}return gh=a,gh}var yh,$x;function Qs(){if($x)return yh;$x=1;var e=gy(),t=ky();function n(r){return r!=null&&t(r.length)&&!e(r)}return yh=n,yh}var bh,Lx;function Yc(){if(Lx)return bh;Lx=1;var e=Dj(),t=Fj(),n=Qs();function r(a){return n(a)?e(a):t(a)}return bh=r,bh}var Ih,Fx;function qj(){if(Fx)return Ih;Fx=1;var e=Oj(),t=Nj(),n=Yc();function r(a){return e(a,n,t)}return Ih=r,Ih}var Bh,qx;function zj(){if(qx)return Bh;qx=1;var e=qj(),t=1,n=Object.prototype,r=n.hasOwnProperty;function a(i,s,l,c,f,h){var d=l&t,v=e(i),y=v.length,x=e(s),I=x.length;if(y!=I&&!d)return!1;for(var b=y;b--;){var S=v[b];if(!(d?S in s:r.call(s,S)))return!1}var W=h.get(i),A=h.get(s);if(W&&A)return W==s&&A==i;var O=!0;h.set(i,s),h.set(s,i);for(var w=d;++b<y;){S=v[b];var _=i[S],N=s[S];if(c)var P=d?c(N,_,S,s,i,h):c(_,N,S,i,s,h);if(!(P===void 0?_===N||f(_,N,l,c,h):P)){O=!1;break}w||(w=S=="constructor")}if(O&&!w){var C=i.constructor,T=s.constructor;C!=T&&"constructor"in i&&"constructor"in s&&!(typeof C=="function"&&C instanceof C&&typeof T=="function"&&T instanceof T)&&(O=!1)}return h.delete(i),h.delete(s),O}return Bh=a,Bh}var xh,zx;function Uj(){if(zx)return xh;zx=1;var e=Bo(),t=Wr(),n=e(t,"DataView");return xh=n,xh}var wh,Ux;function Vj(){if(Ux)return wh;Ux=1;var e=Bo(),t=Wr(),n=e(t,"Promise");return wh=n,wh}var Ph,Vx;function cA(){if(Vx)return Ph;Vx=1;var e=Bo(),t=Wr(),n=e(t,"Set");return Ph=n,Ph}var Sh,Gx;function Gj(){if(Gx)return Sh;Gx=1;var e=Bo(),t=Wr(),n=e(t,"WeakMap");return Sh=n,Sh}var Wh,Kx;function Kj(){if(Kx)return Wh;Kx=1;var e=Uj(),t=by(),n=Vj(),r=cA(),a=Gj(),i=Yr(),s=_W(),l="[object Map]",c="[object Object]",f="[object Promise]",h="[object Set]",d="[object WeakMap]",v="[object DataView]",y=s(e),x=s(t),I=s(n),b=s(r),S=s(a),W=i;return(e&&W(new e(new ArrayBuffer(1)))!=v||t&&W(new t)!=l||n&&W(n.resolve())!=f||r&&W(new r)!=h||a&&W(new a)!=d)&&(W=function(A){var O=i(A),w=O==c?A.constructor:void 0,_=w?s(w):"";if(_)switch(_){case y:return v;case x:return l;case I:return f;case b:return h;case S:return d}return O}),Wh=W,Wh}var Ah,Qx;function Qj(){if(Qx)return Ah;Qx=1;var e=tA(),t=oA(),n=Mj(),r=zj(),a=Kj(),i=yn(),s=uA(),l=lA(),c=1,f="[object Arguments]",h="[object Array]",d="[object Object]",v=Object.prototype,y=v.hasOwnProperty;function x(I,b,S,W,A,O){var w=i(I),_=i(b),N=w?h:a(I),P=_?h:a(b);N=N==f?d:N,P=P==f?d:P;var C=N==d,T=P==d,j=N==P;if(j&&s(I)){if(!s(b))return!1;w=!0,C=!1}if(j&&!C)return O||(O=new e),w||l(I)?t(I,b,S,W,A,O):n(I,b,N,S,W,A,O);if(!(S&c)){var E=C&&y.call(I,"__wrapped__"),$=T&&y.call(b,"__wrapped__");if(E||$){var V=E?I.value():I,G=$?b.value():b;return O||(O=new e),A(V,G,S,W,O)}}return j?(O||(O=new e),r(I,b,S,W,A,O)):!1}return Ah=x,Ah}var _h,Yx;function Ny(){if(Yx)return _h;Yx=1;var e=Qj(),t=Xr();function n(r,a,i,s,l){return r===a?!0:r==null||a==null||!t(r)&&!t(a)?r!==r&&a!==a:e(r,a,i,s,n,l)}return _h=n,_h}var Mh,Xx;function Yj(){if(Xx)return Mh;Xx=1;var e=tA(),t=Ny(),n=1,r=2;function a(i,s,l,c){var f=l.length,h=f,d=!c;if(i==null)return!h;for(i=Object(i);f--;){var v=l[f];if(d&&v[2]?v[1]!==i[v[0]]:!(v[0]in i))return!1}for(;++f<h;){v=l[f];var y=v[0],x=i[y],I=v[1];if(d&&v[2]){if(x===void 0&&!(y in i))return!1}else{var b=new e;if(c)var S=c(x,I,y,i,s,b);if(!(S===void 0?t(I,x,n|r,c,b):S))return!1}}return!0}return Mh=a,Mh}var Oh,Zx;function fA(){if(Zx)return Oh;Zx=1;var e=Ha();function t(n){return n===n&&!e(n)}return Oh=t,Oh}var Ch,Jx;function Xj(){if(Jx)return Ch;Jx=1;var e=fA(),t=Yc();function n(r){for(var a=t(r),i=a.length;i--;){var s=a[i],l=r[s];a[i]=[s,l,e(l)]}return a}return Ch=n,Ch}var kh,ew;function dA(){if(ew)return kh;ew=1;function e(t,n){return function(r){return r==null?!1:r[t]===n&&(n!==void 0||t in Object(r))}}return kh=e,kh}var Nh,tw;function Zj(){if(tw)return Nh;tw=1;var e=Yj(),t=Xj(),n=dA();function r(a){var i=t(a);return i.length==1&&i[0][2]?n(i[0][0],i[0][1]):function(s){return s===a||e(s,a,i)}}return Nh=r,Nh}var Eh,nw;function Jj(){if(nw)return Eh;nw=1;function e(t,n){return t!=null&&n in Object(t)}return Eh=e,Eh}var Th,rw;function eD(){if(rw)return Th;rw=1;var e=CW(),t=Oy(),n=yn(),r=Cy(),a=ky(),i=zc();function s(l,c,f){c=e(c,l);for(var h=-1,d=c.length,v=!1;++h<d;){var y=i(c[h]);if(!(v=l!=null&&f(l,y)))break;l=l[y]}return v||++h!=d?v:(d=l==null?0:l.length,!!d&&a(d)&&r(y,d)&&(n(l)||t(l)))}return Th=s,Th}var Rh,aw;function tD(){if(aw)return Rh;aw=1;var e=Jj(),t=eD();function n(r,a){return r!=null&&t(r,a,e)}return Rh=n,Rh}var Hh,ow;function nD(){if(ow)return Hh;ow=1;var e=Ny(),t=kW(),n=tD(),r=vy(),a=fA(),i=dA(),s=zc(),l=1,c=2;function f(h,d){return r(h)&&a(d)?i(s(h),d):function(v){var y=t(v,h);return y===void 0&&y===d?n(v,h):e(d,y,l|c)}}return Hh=f,Hh}var jh,iw;function Yi(){if(iw)return jh;iw=1;function e(t){return t}return jh=e,jh}var Dh,uw;function rD(){if(uw)return Dh;uw=1;function e(t){return function(n){return n==null?void 0:n[t]}}return Dh=e,Dh}var $h,sw;function aD(){if(sw)return $h;sw=1;var e=xy();function t(n){return function(r){return e(r,n)}}return $h=t,$h}var Lh,lw;function oD(){if(lw)return Lh;lw=1;var e=rD(),t=aD(),n=vy(),r=zc();function a(i){return n(i)?e(r(i)):t(i)}return Lh=a,Lh}var Fh,pw;function Ar(){if(pw)return Fh;pw=1;var e=Zj(),t=nD(),n=Yi(),r=yn(),a=oD();function i(s){return typeof s=="function"?s:s==null?n:typeof s=="object"?r(s)?t(s[0],s[1]):e(s):a(s)}return Fh=i,Fh}var qh,cw;function hA(){if(cw)return qh;cw=1;function e(t,n,r,a){for(var i=t.length,s=r+(a?1:-1);a?s--:++s<i;)if(n(t[s],s,t))return s;return-1}return qh=e,qh}var zh,fw;function iD(){if(fw)return zh;fw=1;function e(t){return t!==t}return zh=e,zh}var Uh,dw;function uD(){if(dw)return Uh;dw=1;function e(t,n,r){for(var a=r-1,i=t.length;++a<i;)if(t[a]===n)return a;return-1}return Uh=e,Uh}var Vh,hw;function sD(){if(hw)return Vh;hw=1;var e=hA(),t=iD(),n=uD();function r(a,i,s){return i===i?n(a,i,s):e(a,t,s)}return Vh=r,Vh}var Gh,mw;function lD(){if(mw)return Gh;mw=1;var e=sD();function t(n,r){var a=n==null?0:n.length;return!!a&&e(n,r,0)>-1}return Gh=t,Gh}var Kh,vw;function pD(){if(vw)return Kh;vw=1;function e(t,n,r){for(var a=-1,i=t==null?0:t.length;++a<i;)if(r(n,t[a]))return!0;return!1}return Kh=e,Kh}var Qh,gw;function cD(){if(gw)return Qh;gw=1;function e(){}return Qh=e,Qh}var Yh,yw;function fD(){if(yw)return Yh;yw=1;var e=cA(),t=cD(),n=My(),r=1/0,a=e&&1/n(new e([,-0]))[1]==r?function(i){return new e(i)}:t;return Yh=a,Yh}var Xh,bw;function dD(){if(bw)return Xh;bw=1;var e=nA(),t=lD(),n=pD(),r=aA(),a=fD(),i=My(),s=200;function l(c,f,h){var d=-1,v=t,y=c.length,x=!0,I=[],b=I;if(h)x=!1,v=n;else if(y>=s){var S=f?null:a(c);if(S)return i(S);x=!1,v=r,b=new e}else b=f?[]:I;e:for(;++d<y;){var W=c[d],A=f?f(W):W;if(W=h||W!==0?W:0,x&&A===A){for(var O=b.length;O--;)if(b[O]===A)continue e;f&&b.push(A),I.push(W)}else v(b,A,h)||(b!==I&&b.push(A),I.push(W))}return I}return Xh=l,Xh}var Zh,Iw;function hD(){if(Iw)return Zh;Iw=1;var e=Ar(),t=dD();function n(r,a){return r&&r.length?t(r,e(a,2)):[]}return Zh=n,Zh}var mD=hD();const Bw=Xe(mD);function mA(e,t,n){return t===!0?Bw(e,n):ke(t)?Bw(e,t):e}function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(e)}var vD=["ref"];function xw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Hr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xw(Object(n),!0).forEach(function(r){Xc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gD(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ww(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,gA(r.key),r)}}function yD(e,t,n){return t&&ww(e.prototype,t),n&&ww(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function bD(e,t,n){return t=Lp(t),ID(e,vA()?Reflect.construct(t,n||[],Lp(e).constructor):t.apply(e,n))}function ID(e,t){if(t&&(vi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return BD(e)}function BD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(vA=function(){return!!e})()}function Lp(e){return Lp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Lp(e)}function xD(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yv(e,t)}function Yv(e,t){return Yv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yv(e,t)}function Xc(e,t,n){return t=gA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gA(e){var t=wD(e,"string");return vi(t)=="symbol"?t:t+""}function wD(e,t){if(vi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function PD(e,t){if(e==null)return{};var n=SD(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function SD(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function WD(e){return e.value}function AD(e,t){if(R.isValidElement(e))return R.cloneElement(e,t);if(typeof e=="function")return R.createElement(e,t);t.ref;var n=PD(t,vD);return R.createElement(_y,n)}var Pw=1,Oa=(function(e){function t(){var n;gD(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=bD(this,t,[].concat(a)),Xc(n,"lastBoundingBox",{width:-1,height:-1}),n}return xD(t,e),yD(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>Pw||Math.abs(a.height-this.lastBoundingBox.height)>Pw)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,r&&r(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?Hr({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var a=this.props,i=a.layout,s=a.align,l=a.verticalAlign,c=a.margin,f=a.chartWidth,h=a.chartHeight,d,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(s==="center"&&i==="vertical"){var y=this.getBBoxSnapshot();d={left:((f||0)-y.width)/2}}else d=s==="right"?{right:c&&c.right||0}:{left:c&&c.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(l==="middle"){var x=this.getBBoxSnapshot();v={top:((h||0)-x.height)/2}}else v=l==="bottom"?{bottom:c&&c.bottom||0}:{top:c&&c.top||0};return Hr(Hr({},d),v)}},{key:"render",value:function(){var r=this,a=this.props,i=a.content,s=a.width,l=a.height,c=a.wrapperStyle,f=a.payloadUniqBy,h=a.payload,d=Hr(Hr({position:"absolute",width:s||"auto",height:l||"auto"},this.getDefaultPosition(c)),c);return R.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(y){r.wrapperNode=y}},AD(i,Hr(Hr({},this.props),{},{payload:mA(h,f,WD)})))}}],[{key:"getWithHeight",value:function(r,a){var i=Hr(Hr({},this.defaultProps),r.props),s=i.layout;return s==="vertical"&&le(r.props.height)?{height:r.props.height}:s==="horizontal"?{width:r.props.width||a}:null}}])})(X.PureComponent);Xc(Oa,"displayName","Legend");Xc(Oa,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var Jh,Sw;function _D(){if(Sw)return Jh;Sw=1;var e=Gs(),t=Oy(),n=yn(),r=e?e.isConcatSpreadable:void 0;function a(i){return n(i)||t(i)||!!(r&&i&&i[r])}return Jh=a,Jh}var em,Ww;function yA(){if(Ww)return em;Ww=1;var e=iA(),t=_D();function n(r,a,i,s,l){var c=-1,f=r.length;for(i||(i=t),l||(l=[]);++c<f;){var h=r[c];a>0&&i(h)?a>1?n(h,a-1,i,s,l):e(l,h):s||(l[l.length]=h)}return l}return em=n,em}var tm,Aw;function MD(){if(Aw)return tm;Aw=1;function e(t){return function(n,r,a){for(var i=-1,s=Object(n),l=a(n),c=l.length;c--;){var f=l[t?c:++i];if(r(s[f],f,s)===!1)break}return n}}return tm=e,tm}var nm,_w;function OD(){if(_w)return nm;_w=1;var e=MD(),t=e();return nm=t,nm}var rm,Mw;function bA(){if(Mw)return rm;Mw=1;var e=OD(),t=Yc();function n(r,a){return r&&e(r,a,t)}return rm=n,rm}var am,Ow;function CD(){if(Ow)return am;Ow=1;var e=Qs();function t(n,r){return function(a,i){if(a==null)return a;if(!e(a))return n(a,i);for(var s=a.length,l=r?s:-1,c=Object(a);(r?l--:++l<s)&&i(c[l],l,c)!==!1;);return a}}return am=t,am}var om,Cw;function Ey(){if(Cw)return om;Cw=1;var e=bA(),t=CD(),n=t(e);return om=n,om}var im,kw;function IA(){if(kw)return im;kw=1;var e=Ey(),t=Qs();function n(r,a){var i=-1,s=t(r)?Array(r.length):[];return e(r,function(l,c,f){s[++i]=a(l,c,f)}),s}return im=n,im}var um,Nw;function kD(){if(Nw)return um;Nw=1;function e(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].value;return t}return um=e,um}var sm,Ew;function ND(){if(Ew)return sm;Ew=1;var e=Gi();function t(n,r){if(n!==r){var a=n!==void 0,i=n===null,s=n===n,l=e(n),c=r!==void 0,f=r===null,h=r===r,d=e(r);if(!f&&!d&&!l&&n>r||l&&c&&h&&!f&&!d||i&&c&&h||!a&&h||!s)return 1;if(!i&&!l&&!d&&n<r||d&&a&&s&&!i&&!l||f&&a&&s||!c&&s||!h)return-1}return 0}return sm=t,sm}var lm,Tw;function ED(){if(Tw)return lm;Tw=1;var e=ND();function t(n,r,a){for(var i=-1,s=n.criteria,l=r.criteria,c=s.length,f=a.length;++i<c;){var h=e(s[i],l[i]);if(h){if(i>=f)return h;var d=a[i];return h*(d=="desc"?-1:1)}}return n.index-r.index}return lm=t,lm}var pm,Rw;function TD(){if(Rw)return pm;Rw=1;var e=By(),t=xy(),n=Ar(),r=IA(),a=kD(),i=sA(),s=ED(),l=Yi(),c=yn();function f(h,d,v){d.length?d=e(d,function(I){return c(I)?function(b){return t(b,I.length===1?I[0]:I)}:I}):d=[l];var y=-1;d=e(d,i(n));var x=r(h,function(I,b,S){var W=e(d,function(A){return A(I)});return{criteria:W,index:++y,value:I}});return a(x,function(I,b){return s(I,b,v)})}return pm=f,pm}var cm,Hw;function RD(){if(Hw)return cm;Hw=1;function e(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}return cm=e,cm}var fm,jw;function HD(){if(jw)return fm;jw=1;var e=RD(),t=Math.max;function n(r,a,i){return a=t(a===void 0?r.length-1:a,0),function(){for(var s=arguments,l=-1,c=t(s.length-a,0),f=Array(c);++l<c;)f[l]=s[a+l];l=-1;for(var h=Array(a+1);++l<a;)h[l]=s[l];return h[a]=i(f),e(r,this,h)}}return fm=n,fm}var dm,Dw;function jD(){if(Dw)return dm;Dw=1;function e(t){return function(){return t}}return dm=e,dm}var hm,$w;function BA(){if($w)return hm;$w=1;var e=Bo(),t=(function(){try{var n=e(Object,"defineProperty");return n({},"",{}),n}catch{}})();return hm=t,hm}var mm,Lw;function DD(){if(Lw)return mm;Lw=1;var e=jD(),t=BA(),n=Yi(),r=t?function(a,i){return t(a,"toString",{configurable:!0,enumerable:!1,value:e(i),writable:!0})}:n;return mm=r,mm}var vm,Fw;function $D(){if(Fw)return vm;Fw=1;var e=800,t=16,n=Date.now;function r(a){var i=0,s=0;return function(){var l=n(),c=t-(l-s);if(s=l,c>0){if(++i>=e)return arguments[0]}else i=0;return a.apply(void 0,arguments)}}return vm=r,vm}var gm,qw;function LD(){if(qw)return gm;qw=1;var e=DD(),t=$D(),n=t(e);return gm=n,gm}var ym,zw;function FD(){if(zw)return ym;zw=1;var e=Yi(),t=HD(),n=LD();function r(a,i){return n(t(a,i,e),a+"")}return ym=r,ym}var bm,Uw;function Zc(){if(Uw)return bm;Uw=1;var e=yy(),t=Qs(),n=Cy(),r=Ha();function a(i,s,l){if(!r(l))return!1;var c=typeof s;return(c=="number"?t(l)&&n(s,l.length):c=="string"&&s in l)?e(l[s],i):!1}return bm=a,bm}var Im,Vw;function qD(){if(Vw)return Im;Vw=1;var e=yA(),t=TD(),n=FD(),r=Zc(),a=n(function(i,s){if(i==null)return[];var l=s.length;return l>1&&r(i,s[0],s[1])?s=[]:l>2&&r(s[0],s[1],s[2])&&(s=[s[0]]),t(i,e(s,1),[])});return Im=a,Im}var zD=qD();const Ty=Xe(zD);function hs(e){"@babel/helpers - typeof";return hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hs(e)}function Xv(){return Xv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xv.apply(this,arguments)}function UD(e,t){return QD(e)||KD(e,t)||GD(e,t)||VD()}function VD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GD(e,t){if(e){if(typeof e=="string")return Gw(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gw(e,t)}}function Gw(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function KD(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function QD(e){if(Array.isArray(e))return e}function Kw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Bm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kw(Object(n),!0).forEach(function(r){YD(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function YD(e,t,n){return t=XD(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XD(e){var t=ZD(e,"string");return hs(t)=="symbol"?t:t+""}function ZD(e,t){if(hs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(hs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function JD(e){return Array.isArray(e)&&Rt(e[0])&&Rt(e[1])?e.join(" ~ "):e}var e5=function(t){var n=t.separator,r=n===void 0?" : ":n,a=t.contentStyle,i=a===void 0?{}:a,s=t.itemStyle,l=s===void 0?{}:s,c=t.labelStyle,f=c===void 0?{}:c,h=t.payload,d=t.formatter,v=t.itemSorter,y=t.wrapperClassName,x=t.labelClassName,I=t.label,b=t.labelFormatter,S=t.accessibilityLayer,W=S===void 0?!1:S,A=function(){if(h&&h.length){var E={padding:0,margin:0},$=(v?Ty(h,v):h).map(function(V,G){if(V.type==="none")return null;var z=Bm({display:"block",paddingTop:4,paddingBottom:4,color:V.color||"#000"},l),Q=V.formatter||d||JD,L=V.value,K=V.name,Y=L,H=K;if(Q&&Y!=null&&H!=null){var F=Q(L,K,V,G,h);if(Array.isArray(F)){var J=UD(F,2);Y=J[0],H=J[1]}else Y=F}return R.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(G),style:z},Rt(H)?R.createElement("span",{className:"recharts-tooltip-item-name"},H):null,Rt(H)?R.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,R.createElement("span",{className:"recharts-tooltip-item-value"},Y),R.createElement("span",{className:"recharts-tooltip-item-unit"},V.unit||""))});return R.createElement("ul",{className:"recharts-tooltip-item-list",style:E},$)}return null},O=Bm({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},i),w=Bm({margin:0},f),_=!Ne(I),N=_?I:"",P=He("recharts-default-tooltip",y),C=He("recharts-tooltip-label",x);_&&b&&h!==void 0&&h!==null&&(N=b(I,h));var T=W?{role:"status","aria-live":"assertive"}:{};return R.createElement("div",Xv({className:P,style:O},T),R.createElement("p",{className:C,style:w},R.isValidElement(N)?N:"".concat(N)),A())};function ms(e){"@babel/helpers - typeof";return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ms(e)}function mp(e,t,n){return t=t5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t5(e){var t=n5(e,"string");return ms(t)=="symbol"?t:t+""}function n5(e,t){if(ms(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var qu="recharts-tooltip-wrapper",r5={visibility:"hidden"};function a5(e){var t=e.coordinate,n=e.translateX,r=e.translateY;return He(qu,mp(mp(mp(mp({},"".concat(qu,"-right"),le(n)&&t&&le(t.x)&&n>=t.x),"".concat(qu,"-left"),le(n)&&t&&le(t.x)&&n<t.x),"".concat(qu,"-bottom"),le(r)&&t&&le(t.y)&&r>=t.y),"".concat(qu,"-top"),le(r)&&t&&le(t.y)&&r<t.y))}function Qw(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.key,a=e.offsetTopLeft,i=e.position,s=e.reverseDirection,l=e.tooltipDimension,c=e.viewBox,f=e.viewBoxDimension;if(i&&le(i[r]))return i[r];var h=n[r]-l-a,d=n[r]+a;if(t[r])return s[r]?h:d;if(s[r]){var v=h,y=c[r];return v<y?Math.max(d,c[r]):Math.max(h,c[r])}var x=d+l,I=c[r]+f;return x>I?Math.max(h,c[r]):Math.max(d,c[r])}function o5(e){var t=e.translateX,n=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(t,"px, ").concat(n,"px, 0)"):"translate(".concat(t,"px, ").concat(n,"px)")}}function i5(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.offsetTopLeft,a=e.position,i=e.reverseDirection,s=e.tooltipBox,l=e.useTranslate3d,c=e.viewBox,f,h,d;return s.height>0&&s.width>0&&n?(h=Qw({allowEscapeViewBox:t,coordinate:n,key:"x",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.width,viewBox:c,viewBoxDimension:c.width}),d=Qw({allowEscapeViewBox:t,coordinate:n,key:"y",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.height,viewBox:c,viewBoxDimension:c.height}),f=o5({translateX:h,translateY:d,useTranslate3d:l})):f=r5,{cssProperties:f,cssClasses:a5({translateX:h,translateY:d,coordinate:n})}}function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gi(e)}function Yw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Xw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yw(Object(n),!0).forEach(function(r){Jv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function u5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,wA(r.key),r)}}function l5(e,t,n){return t&&s5(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function p5(e,t,n){return t=Fp(t),c5(e,xA()?Reflect.construct(t,n||[],Fp(e).constructor):t.apply(e,n))}function c5(e,t){if(t&&(gi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return f5(e)}function f5(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xA=function(){return!!e})()}function Fp(e){return Fp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Fp(e)}function d5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zv(e,t)}function Zv(e,t){return Zv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zv(e,t)}function Jv(e,t,n){return t=wA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wA(e){var t=h5(e,"string");return gi(t)=="symbol"?t:t+""}function h5(e,t){if(gi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Zw=1,m5=(function(e){function t(){var n;u5(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=p5(this,t,[].concat(a)),Jv(n,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),Jv(n,"handleKeyDown",function(s){if(s.key==="Escape"){var l,c,f,h;n.setState({dismissed:!0,dismissedAtCoordinate:{x:(l=(c=n.props.coordinate)===null||c===void 0?void 0:c.x)!==null&&l!==void 0?l:0,y:(f=(h=n.props.coordinate)===null||h===void 0?void 0:h.y)!==null&&f!==void 0?f:0}})}}),n}return d5(t,e),l5(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>Zw||Math.abs(r.height-this.state.lastBoundingBox.height)>Zw)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,c=a.animationEasing,f=a.children,h=a.coordinate,d=a.hasPayload,v=a.isAnimationActive,y=a.offset,x=a.position,I=a.reverseDirection,b=a.useTranslate3d,S=a.viewBox,W=a.wrapperStyle,A=i5({allowEscapeViewBox:s,coordinate:h,offsetTopLeft:y,position:x,reverseDirection:I,tooltipBox:this.state.lastBoundingBox,useTranslate3d:b,viewBox:S}),O=A.cssClasses,w=A.cssProperties,_=Xw(Xw({transition:v&&i?"transform ".concat(l,"ms ").concat(c):void 0},w),{},{pointerEvents:"none",visibility:!this.state.dismissed&&i&&d?"visible":"hidden",position:"absolute",top:0,left:0},W);return R.createElement("div",{tabIndex:-1,className:O,style:_,ref:function(P){r.wrapperNode=P}},f)}}])})(X.PureComponent),v5=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Zr={isSsr:v5()};function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(e)}function Jw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function eP(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jw(Object(n),!0).forEach(function(r){Ry(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function g5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,SA(r.key),r)}}function b5(e,t,n){return t&&y5(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function I5(e,t,n){return t=qp(t),B5(e,PA()?Reflect.construct(t,n||[],qp(e).constructor):t.apply(e,n))}function B5(e,t){if(t&&(yi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x5(e)}function x5(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function PA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(PA=function(){return!!e})()}function qp(e){return qp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},qp(e)}function w5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&eg(e,t)}function eg(e,t){return eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},eg(e,t)}function Ry(e,t,n){return t=SA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function SA(e){var t=P5(e,"string");return yi(t)=="symbol"?t:t+""}function P5(e,t){if(yi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function S5(e){return e.dataKey}function W5(e,t){return R.isValidElement(e)?R.cloneElement(e,t):typeof e=="function"?R.createElement(e,t):R.createElement(e5,t)}var Wn=(function(e){function t(){return g5(this,t),I5(this,t,arguments)}return w5(t,e),b5(t,[{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,c=a.animationEasing,f=a.content,h=a.coordinate,d=a.filterNull,v=a.isAnimationActive,y=a.offset,x=a.payload,I=a.payloadUniqBy,b=a.position,S=a.reverseDirection,W=a.useTranslate3d,A=a.viewBox,O=a.wrapperStyle,w=x??[];d&&w.length&&(w=mA(x.filter(function(N){return N.value!=null&&(N.hide!==!0||r.props.includeHidden)}),I,S5));var _=w.length>0;return R.createElement(m5,{allowEscapeViewBox:s,animationDuration:l,animationEasing:c,isAnimationActive:v,active:i,coordinate:h,hasPayload:_,offset:y,position:b,reverseDirection:S,useTranslate3d:W,viewBox:A,wrapperStyle:O},W5(f,eP(eP({},this.props),{},{payload:w})))}}])})(X.PureComponent);Ry(Wn,"displayName","Tooltip");Ry(Wn,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Zr.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var xm,tP;function A5(){if(tP)return xm;tP=1;var e=Wr(),t=function(){return e.Date.now()};return xm=t,xm}var wm,nP;function _5(){if(nP)return wm;nP=1;var e=/\s/;function t(n){for(var r=n.length;r--&&e.test(n.charAt(r)););return r}return wm=t,wm}var Pm,rP;function M5(){if(rP)return Pm;rP=1;var e=_5(),t=/^\s+/;function n(r){return r&&r.slice(0,e(r)+1).replace(t,"")}return Pm=n,Pm}var Sm,aP;function WA(){if(aP)return Sm;aP=1;var e=M5(),t=Ha(),n=Gi(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;function c(f){if(typeof f=="number")return f;if(n(f))return r;if(t(f)){var h=typeof f.valueOf=="function"?f.valueOf():f;f=t(h)?h+"":h}if(typeof f!="string")return f===0?f:+f;f=e(f);var d=i.test(f);return d||s.test(f)?l(f.slice(2),d?2:8):a.test(f)?r:+f}return Sm=c,Sm}var Wm,oP;function O5(){if(oP)return Wm;oP=1;var e=Ha(),t=A5(),n=WA(),r="Expected a function",a=Math.max,i=Math.min;function s(l,c,f){var h,d,v,y,x,I,b=0,S=!1,W=!1,A=!0;if(typeof l!="function")throw new TypeError(r);c=n(c)||0,e(f)&&(S=!!f.leading,W="maxWait"in f,v=W?a(n(f.maxWait)||0,c):v,A="trailing"in f?!!f.trailing:A);function O($){var V=h,G=d;return h=d=void 0,b=$,y=l.apply(G,V),y}function w($){return b=$,x=setTimeout(P,c),S?O($):y}function _($){var V=$-I,G=$-b,z=c-V;return W?i(z,v-G):z}function N($){var V=$-I,G=$-b;return I===void 0||V>=c||V<0||W&&G>=v}function P(){var $=t();if(N($))return C($);x=setTimeout(P,_($))}function C($){return x=void 0,A&&h?O($):(h=d=void 0,y)}function T(){x!==void 0&&clearTimeout(x),b=0,h=I=d=x=void 0}function j(){return x===void 0?y:C(t())}function E(){var $=t(),V=N($);if(h=arguments,d=this,I=$,V){if(x===void 0)return w(I);if(W)return clearTimeout(x),x=setTimeout(P,c),O(I)}return x===void 0&&(x=setTimeout(P,c)),y}return E.cancel=T,E.flush=j,E}return Wm=s,Wm}var Am,iP;function C5(){if(iP)return Am;iP=1;var e=O5(),t=Ha(),n="Expected a function";function r(a,i,s){var l=!0,c=!0;if(typeof a!="function")throw new TypeError(n);return t(s)&&(l="leading"in s?!!s.leading:l,c="trailing"in s?!!s.trailing:c),e(a,i,{leading:l,maxWait:i,trailing:c})}return Am=r,Am}var k5=C5();const AA=Xe(k5);function vs(e){"@babel/helpers - typeof";return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vs(e)}function uP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function vp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uP(Object(n),!0).forEach(function(r){N5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function N5(e,t,n){return t=E5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E5(e){var t=T5(e,"string");return vs(t)=="symbol"?t:t+""}function T5(e,t){if(vs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R5(e,t){return $5(e)||D5(e,t)||j5(e,t)||H5()}function H5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j5(e,t){if(e){if(typeof e=="string")return sP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sP(e,t)}}function sP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D5(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function $5(e){if(Array.isArray(e))return e}var Hy=X.forwardRef(function(e,t){var n=e.aspect,r=e.initialDimension,a=r===void 0?{width:-1,height:-1}:r,i=e.width,s=i===void 0?"100%":i,l=e.height,c=l===void 0?"100%":l,f=e.minWidth,h=f===void 0?0:f,d=e.minHeight,v=e.maxHeight,y=e.children,x=e.debounce,I=x===void 0?0:x,b=e.id,S=e.className,W=e.onResize,A=e.style,O=A===void 0?{}:A,w=X.useRef(null),_=X.useRef();_.current=W,X.useImperativeHandle(t,function(){return Object.defineProperty(w.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),w.current},configurable:!0})});var N=X.useState({containerWidth:a.width,containerHeight:a.height}),P=R5(N,2),C=P[0],T=P[1],j=X.useCallback(function($,V){T(function(G){var z=Math.round($),Q=Math.round(V);return G.containerWidth===z&&G.containerHeight===Q?G:{containerWidth:z,containerHeight:Q}})},[]);X.useEffect(function(){var $=function(K){var Y,H=K[0].contentRect,F=H.width,J=H.height;j(F,J),(Y=_.current)===null||Y===void 0||Y.call(_,F,J)};I>0&&($=AA($,I,{trailing:!0,leading:!1}));var V=new ResizeObserver($),G=w.current.getBoundingClientRect(),z=G.width,Q=G.height;return j(z,Q),V.observe(w.current),function(){V.disconnect()}},[j,I]);var E=X.useMemo(function(){var $=C.containerWidth,V=C.containerHeight;if($<0||V<0)return null;sr(lo(s)||lo(c),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,s,c),sr(!n||n>0,"The aspect(%s) must be greater than zero.",n);var G=lo(s)?$:s,z=lo(c)?V:c;n&&n>0&&(G?z=G/n:z&&(G=z*n),v&&z>v&&(z=v)),sr(G>0||z>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,G,z,s,c,h,d,n);var Q=!Array.isArray(y)&&Ur(y.type).endsWith("Chart");return R.Children.map(y,function(L){return R.isValidElement(L)?X.cloneElement(L,vp({width:G,height:z},Q?{style:vp({height:"100%",width:"100%",maxHeight:z,maxWidth:G},L.props.style)}:{})):L})},[n,y,c,v,d,h,C,s]);return R.createElement("div",{id:b?"".concat(b):void 0,className:He("recharts-responsive-container",S),style:vp(vp({},O),{},{width:s,height:c,minWidth:h,minHeight:d,maxHeight:v}),ref:w},E)}),Ys=function(t){return null};Ys.displayName="Cell";function gs(e){"@babel/helpers - typeof";return gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gs(e)}function lP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function tg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lP(Object(n),!0).forEach(function(r){L5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function L5(e,t,n){return t=F5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F5(e){var t=q5(e,"string");return gs(t)=="symbol"?t:t+""}function q5(e,t){if(gs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(gs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Jo={widthCache:{},cacheCount:0},z5=2e3,U5={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},pP="recharts_measurement_span";function V5(e){var t=tg({},e);return Object.keys(t).forEach(function(n){t[n]||delete t[n]}),t}var ns=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||Zr.isSsr)return{width:0,height:0};var r=V5(n),a=JSON.stringify({text:t,copyStyle:r});if(Jo.widthCache[a])return Jo.widthCache[a];try{var i=document.getElementById(pP);i||(i=document.createElement("span"),i.setAttribute("id",pP),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));var s=tg(tg({},U5),r);Object.assign(i.style,s),i.textContent="".concat(t);var l=i.getBoundingClientRect(),c={width:l.width,height:l.height};return Jo.widthCache[a]=c,++Jo.cacheCount>z5&&(Jo.cacheCount=0,Jo.widthCache={}),c}catch{return{width:0,height:0}}},G5=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function ys(e){"@babel/helpers - typeof";return ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ys(e)}function zp(e,t){return X5(e)||Y5(e,t)||Q5(e,t)||K5()}function K5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q5(e,t){if(e){if(typeof e=="string")return cP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cP(e,t)}}function cP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Y5(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function X5(e){if(Array.isArray(e))return e}function Z5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fP(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,e$(r.key),r)}}function J5(e,t,n){return t&&fP(e.prototype,t),n&&fP(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function e$(e){var t=t$(e,"string");return ys(t)=="symbol"?t:t+""}function t$(e,t){if(ys(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ys(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var dP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,hP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,n$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,r$=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,_A={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},a$=Object.keys(_A),ai="NaN";function o$(e,t){return e*_A[t]}var gp=(function(){function e(t,n){Z5(this,e),this.num=t,this.unit=n,this.num=t,this.unit=n,Number.isNaN(t)&&(this.unit=""),n!==""&&!n$.test(n)&&(this.num=NaN,this.unit=""),a$.includes(n)&&(this.num=o$(t,n),this.unit="px")}return J5(e,[{key:"add",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num+n.num,this.unit)}},{key:"subtract",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num-n.num,this.unit)}},{key:"multiply",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num*n.num,this.unit||n.unit)}},{key:"divide",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num/n.num,this.unit||n.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(n){var r,a=(r=r$.exec(n))!==null&&r!==void 0?r:[],i=zp(a,3),s=i[1],l=i[2];return new e(parseFloat(s),l??"")}}])})();function MA(e){if(e.includes(ai))return ai;for(var t=e;t.includes("*")||t.includes("/");){var n,r=(n=dP.exec(t))!==null&&n!==void 0?n:[],a=zp(r,4),i=a[1],s=a[2],l=a[3],c=gp.parse(i??""),f=gp.parse(l??""),h=s==="*"?c.multiply(f):c.divide(f);if(h.isNaN())return ai;t=t.replace(dP,h.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var d,v=(d=hP.exec(t))!==null&&d!==void 0?d:[],y=zp(v,4),x=y[1],I=y[2],b=y[3],S=gp.parse(x??""),W=gp.parse(b??""),A=I==="+"?S.add(W):S.subtract(W);if(A.isNaN())return ai;t=t.replace(hP,A.toString())}return t}var mP=/\(([^()]*)\)/;function i$(e){for(var t=e;t.includes("(");){var n=mP.exec(t),r=zp(n,2),a=r[1];t=t.replace(mP,MA(a))}return t}function u$(e){var t=e.replace(/\s+/g,"");return t=i$(t),t=MA(t),t}function s$(e){try{return u$(e)}catch{return ai}}function _m(e){var t=s$(e.slice(5,-1));return t===ai?"":t}var l$=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],p$=["dx","dy","angle","className","breakAll"];function ng(){return ng=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ng.apply(this,arguments)}function vP(e,t){if(e==null)return{};var n=c$(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function c$(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function gP(e,t){return m$(e)||h$(e,t)||d$(e,t)||f$()}function f$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d$(e,t){if(e){if(typeof e=="string")return yP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yP(e,t)}}function yP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function m$(e){if(Array.isArray(e))return e}var OA=/[ \f\n\r\t\v\u2028\u2029]+/,CA=function(t){var n=t.children,r=t.breakAll,a=t.style;try{var i=[];Ne(n)||(r?i=n.toString().split(""):i=n.toString().split(OA));var s=i.map(function(c){return{word:c,width:ns(c,a).width}}),l=r?0:ns(" ",a).width;return{wordsWithComputedWidth:s,spaceWidth:l}}catch{return null}},v$=function(t,n,r,a,i){var s=t.maxLines,l=t.children,c=t.style,f=t.breakAll,h=le(s),d=l,v=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G.reduce(function(z,Q){var L=Q.word,K=Q.width,Y=z[z.length-1];if(Y&&(a==null||i||Y.width+K+r<Number(a)))Y.words.push(L),Y.width+=K+r;else{var H={words:[L],width:K};z.push(H)}return z},[])},y=v(n),x=function(G){return G.reduce(function(z,Q){return z.width>Q.width?z:Q})};if(!h)return y;for(var I="…",b=function(G){var z=d.slice(0,G),Q=CA({breakAll:f,style:c,children:z+I}).wordsWithComputedWidth,L=v(Q),K=L.length>s||x(L).width>Number(a);return[K,L]},S=0,W=d.length-1,A=0,O;S<=W&&A<=d.length-1;){var w=Math.floor((S+W)/2),_=w-1,N=b(_),P=gP(N,2),C=P[0],T=P[1],j=b(w),E=gP(j,1),$=E[0];if(!C&&!$&&(S=w+1),C&&$&&(W=w-1),!C&&$){O=T;break}A++}return O||y},bP=function(t){var n=Ne(t)?[]:t.toString().split(OA);return[{words:n}]},g$=function(t){var n=t.width,r=t.scaleToFit,a=t.children,i=t.style,s=t.breakAll,l=t.maxLines;if((n||r)&&!Zr.isSsr){var c,f,h=CA({breakAll:s,children:a,style:i});if(h){var d=h.wordsWithComputedWidth,v=h.spaceWidth;c=d,f=v}else return bP(a);return v$({breakAll:s,children:a,maxLines:l,style:i},c,f,n,r)}return bP(a)},IP="#808080",go=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,i=a===void 0?0:a,s=t.lineHeight,l=s===void 0?"1em":s,c=t.capHeight,f=c===void 0?"0.71em":c,h=t.scaleToFit,d=h===void 0?!1:h,v=t.textAnchor,y=v===void 0?"start":v,x=t.verticalAnchor,I=x===void 0?"end":x,b=t.fill,S=b===void 0?IP:b,W=vP(t,l$),A=X.useMemo(function(){return g$({breakAll:W.breakAll,children:W.children,maxLines:W.maxLines,scaleToFit:d,style:W.style,width:W.width})},[W.breakAll,W.children,W.maxLines,d,W.style,W.width]),O=W.dx,w=W.dy,_=W.angle,N=W.className,P=W.breakAll,C=vP(W,p$);if(!Rt(r)||!Rt(i))return null;var T=r+(le(O)?O:0),j=i+(le(w)?w:0),E;switch(I){case"start":E=_m("calc(".concat(f,")"));break;case"middle":E=_m("calc(".concat((A.length-1)/2," * -").concat(l," + (").concat(f," / 2))"));break;default:E=_m("calc(".concat(A.length-1," * -").concat(l,")"));break}var $=[];if(d){var V=A[0].width,G=W.width;$.push("scale(".concat((le(G)?G/V:1)/V,")"))}return _&&$.push("rotate(".concat(_,", ").concat(T,", ").concat(j,")")),$.length&&(C.transform=$.join(" ")),R.createElement("text",ng({},We(C,!0),{x:T,y:j,className:He("recharts-text",N),textAnchor:y,fill:S.includes("url")?IP:S}),A.map(function(z,Q){var L=z.words.join(P?"":" ");return R.createElement("tspan",{x:T,dy:Q===0?E:l,key:"".concat(L,"-").concat(Q)},L)}))};function Ca(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function y$(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function jy(e){let t,n,r;e.length!==2?(t=Ca,n=(l,c)=>Ca(e(l),c),r=(l,c)=>e(l)-c):(t=e===Ca||e===y$?e:b$,n=e,r=e);function a(l,c,f=0,h=l.length){if(f<h){if(t(c,c)!==0)return h;do{const d=f+h>>>1;n(l[d],c)<0?f=d+1:h=d}while(f<h)}return f}function i(l,c,f=0,h=l.length){if(f<h){if(t(c,c)!==0)return h;do{const d=f+h>>>1;n(l[d],c)<=0?f=d+1:h=d}while(f<h)}return f}function s(l,c,f=0,h=l.length){const d=a(l,c,f,h-1);return d>f&&r(l[d-1],c)>-r(l[d],c)?d-1:d}return{left:a,center:s,right:i}}function b$(){return 0}function kA(e){return e===null?NaN:+e}function*I$(e,t){for(let n of e)n!=null&&(n=+n)>=n&&(yield n)}const B$=jy(Ca),Xs=B$.right;jy(kA).center;class BP extends Map{constructor(t,n=P$){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,a]of t)this.set(r,a)}get(t){return super.get(xP(this,t))}has(t){return super.has(xP(this,t))}set(t,n){return super.set(x$(this,t),n)}delete(t){return super.delete(w$(this,t))}}function xP({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function x$({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function w$({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function P$(e){return e!==null&&typeof e=="object"?e.valueOf():e}function S$(e=Ca){if(e===Ca)return NA;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function NA(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const W$=Math.sqrt(50),A$=Math.sqrt(10),_$=Math.sqrt(2);function Up(e,t,n){const r=(t-e)/Math.max(0,n),a=Math.floor(Math.log10(r)),i=r/Math.pow(10,a),s=i>=W$?10:i>=A$?5:i>=_$?2:1;let l,c,f;return a<0?(f=Math.pow(10,-a)/s,l=Math.round(e*f),c=Math.round(t*f),l/f<e&&++l,c/f>t&&--c,f=-f):(f=Math.pow(10,a)*s,l=Math.round(e/f),c=Math.round(t/f),l*f<e&&++l,c*f>t&&--c),c<l&&.5<=n&&n<2?Up(e,t,n*2):[l,c,f]}function rg(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[a,i,s]=r?Up(t,e,n):Up(e,t,n);if(!(i>=a))return[];const l=i-a+1,c=new Array(l);if(r)if(s<0)for(let f=0;f<l;++f)c[f]=(i-f)/-s;else for(let f=0;f<l;++f)c[f]=(i-f)*s;else if(s<0)for(let f=0;f<l;++f)c[f]=(a+f)/-s;else for(let f=0;f<l;++f)c[f]=(a+f)*s;return c}function ag(e,t,n){return t=+t,e=+e,n=+n,Up(e,t,n)[2]}function og(e,t,n){t=+t,e=+e,n=+n;const r=t<e,a=r?ag(t,e,n):ag(e,t,n);return(r?-1:1)*(a<0?1/-a:a)}function wP(e,t){let n;for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);return n}function PP(e,t){let n;for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);return n}function EA(e,t,n=0,r=1/0,a){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(a=a===void 0?NA:S$(a);r>n;){if(r-n>600){const c=r-n+1,f=t-n+1,h=Math.log(c),d=.5*Math.exp(2*h/3),v=.5*Math.sqrt(h*d*(c-d)/c)*(f-c/2<0?-1:1),y=Math.max(n,Math.floor(t-f*d/c+v)),x=Math.min(r,Math.floor(t+(c-f)*d/c+v));EA(e,t,y,x,a)}const i=e[t];let s=n,l=r;for(zu(e,n,t),a(e[r],i)>0&&zu(e,n,r);s<l;){for(zu(e,s,l),++s,--l;a(e[s],i)<0;)++s;for(;a(e[l],i)>0;)--l}a(e[n],i)===0?zu(e,n,l):(++l,zu(e,l,r)),l<=t&&(n=l+1),t<=l&&(r=l-1)}return e}function zu(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function M$(e,t,n){if(e=Float64Array.from(I$(e)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return PP(e);if(t>=1)return wP(e);var r,a=(r-1)*t,i=Math.floor(a),s=wP(EA(e,i).subarray(0,i+1)),l=PP(e.subarray(i+1));return s+(l-s)*(a-i)}}function O$(e,t,n=kA){if(!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,a=(r-1)*t,i=Math.floor(a),s=+n(e[i],i,e),l=+n(e[i+1],i+1,e);return s+(l-s)*(a-i)}}function C$(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(a);++r<a;)i[r]=e+r*n;return i}function Qn(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Jr(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const ig=Symbol("implicit");function Dy(){var e=new BP,t=[],n=[],r=ig;function a(i){let s=e.get(i);if(s===void 0){if(r!==ig)return r;e.set(i,s=t.push(i)-1)}return n[s%n.length]}return a.domain=function(i){if(!arguments.length)return t.slice();t=[],e=new BP;for(const s of i)e.has(s)||e.set(s,t.push(s)-1);return a},a.range=function(i){return arguments.length?(n=Array.from(i),a):n.slice()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return Dy(t,n).unknown(r)},Qn.apply(a,arguments),a}function bs(){var e=Dy().unknown(void 0),t=e.domain,n=e.range,r=0,a=1,i,s,l=!1,c=0,f=0,h=.5;delete e.unknown;function d(){var v=t().length,y=a<r,x=y?a:r,I=y?r:a;i=(I-x)/Math.max(1,v-c+f*2),l&&(i=Math.floor(i)),x+=(I-x-i*(v-c))*h,s=i*(1-c),l&&(x=Math.round(x),s=Math.round(s));var b=C$(v).map(function(S){return x+i*S});return n(y?b.reverse():b)}return e.domain=function(v){return arguments.length?(t(v),d()):t()},e.range=function(v){return arguments.length?([r,a]=v,r=+r,a=+a,d()):[r,a]},e.rangeRound=function(v){return[r,a]=v,r=+r,a=+a,l=!0,d()},e.bandwidth=function(){return s},e.step=function(){return i},e.round=function(v){return arguments.length?(l=!!v,d()):l},e.padding=function(v){return arguments.length?(c=Math.min(1,f=+v),d()):c},e.paddingInner=function(v){return arguments.length?(c=Math.min(1,v),d()):c},e.paddingOuter=function(v){return arguments.length?(f=+v,d()):f},e.align=function(v){return arguments.length?(h=Math.max(0,Math.min(1,v)),d()):h},e.copy=function(){return bs(t(),[r,a]).round(l).paddingInner(c).paddingOuter(f).align(h)},Qn.apply(d(),arguments)}function TA(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return TA(t())},e}function rs(){return TA(bs.apply(null,arguments).paddingInner(1))}function $y(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function RA(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Zs(){}var Is=.7,Vp=1/Is,pi="\\s*([+-]?\\d+)\\s*",Bs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",k$=/^#([0-9a-f]{3,8})$/,N$=new RegExp(`^rgb\\(${pi},${pi},${pi}\\)$`),E$=new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`),T$=new RegExp(`^rgba\\(${pi},${pi},${pi},${Bs}\\)$`),R$=new RegExp(`^rgba\\(${xr},${xr},${xr},${Bs}\\)$`),H$=new RegExp(`^hsl\\(${Bs},${xr},${xr}\\)$`),j$=new RegExp(`^hsla\\(${Bs},${xr},${xr},${Bs}\\)$`),SP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};$y(Zs,xs,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:WP,formatHex:WP,formatHex8:D$,formatHsl:$$,formatRgb:AP,toString:AP});function WP(){return this.rgb().formatHex()}function D$(){return this.rgb().formatHex8()}function $$(){return HA(this).formatHsl()}function AP(){return this.rgb().formatRgb()}function xs(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=k$.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?_P(t):n===3?new gn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?yp(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?yp(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=N$.exec(e))?new gn(t[1],t[2],t[3],1):(t=E$.exec(e))?new gn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=T$.exec(e))?yp(t[1],t[2],t[3],t[4]):(t=R$.exec(e))?yp(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=H$.exec(e))?CP(t[1],t[2]/100,t[3]/100,1):(t=j$.exec(e))?CP(t[1],t[2]/100,t[3]/100,t[4]):SP.hasOwnProperty(e)?_P(SP[e]):e==="transparent"?new gn(NaN,NaN,NaN,0):null}function _P(e){return new gn(e>>16&255,e>>8&255,e&255,1)}function yp(e,t,n,r){return r<=0&&(e=t=n=NaN),new gn(e,t,n,r)}function L$(e){return e instanceof Zs||(e=xs(e)),e?(e=e.rgb(),new gn(e.r,e.g,e.b,e.opacity)):new gn}function ug(e,t,n,r){return arguments.length===1?L$(e):new gn(e,t,n,r??1)}function gn(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}$y(gn,ug,RA(Zs,{brighter(e){return e=e==null?Vp:Math.pow(Vp,e),new gn(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Is:Math.pow(Is,e),new gn(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new gn(mo(this.r),mo(this.g),mo(this.b),Gp(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:MP,formatHex:MP,formatHex8:F$,formatRgb:OP,toString:OP}));function MP(){return`#${po(this.r)}${po(this.g)}${po(this.b)}`}function F$(){return`#${po(this.r)}${po(this.g)}${po(this.b)}${po((isNaN(this.opacity)?1:this.opacity)*255)}`}function OP(){const e=Gp(this.opacity);return`${e===1?"rgb(":"rgba("}${mo(this.r)}, ${mo(this.g)}, ${mo(this.b)}${e===1?")":`, ${e})`}`}function Gp(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function mo(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function po(e){return e=mo(e),(e<16?"0":"")+e.toString(16)}function CP(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ur(e,t,n,r)}function HA(e){if(e instanceof ur)return new ur(e.h,e.s,e.l,e.opacity);if(e instanceof Zs||(e=xs(e)),!e)return new ur;if(e instanceof ur)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,a=Math.min(t,n,r),i=Math.max(t,n,r),s=NaN,l=i-a,c=(i+a)/2;return l?(t===i?s=(n-r)/l+(n<r)*6:n===i?s=(r-t)/l+2:s=(t-n)/l+4,l/=c<.5?i+a:2-i-a,s*=60):l=c>0&&c<1?0:s,new ur(s,l,c,e.opacity)}function q$(e,t,n,r){return arguments.length===1?HA(e):new ur(e,t,n,r??1)}function ur(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}$y(ur,q$,RA(Zs,{brighter(e){return e=e==null?Vp:Math.pow(Vp,e),new ur(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Is:Math.pow(Is,e),new ur(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r;return new gn(Mm(e>=240?e-240:e+120,a,r),Mm(e,a,r),Mm(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new ur(kP(this.h),bp(this.s),bp(this.l),Gp(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Gp(this.opacity);return`${e===1?"hsl(":"hsla("}${kP(this.h)}, ${bp(this.s)*100}%, ${bp(this.l)*100}%${e===1?")":`, ${e})`}`}}));function kP(e){return e=(e||0)%360,e<0?e+360:e}function bp(e){return Math.max(0,Math.min(1,e||0))}function Mm(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Ly=e=>()=>e;function z$(e,t){return function(n){return e+n*t}}function U$(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function V$(e){return(e=+e)==1?jA:function(t,n){return n-t?U$(t,n,e):Ly(isNaN(t)?n:t)}}function jA(e,t){var n=t-e;return n?z$(e,n):Ly(isNaN(e)?t:e)}const NP=(function e(t){var n=V$(t);function r(a,i){var s=n((a=ug(a)).r,(i=ug(i)).r),l=n(a.g,i.g),c=n(a.b,i.b),f=jA(a.opacity,i.opacity);return function(h){return a.r=s(h),a.g=l(h),a.b=c(h),a.opacity=f(h),a+""}}return r.gamma=e,r})(1);function G$(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),a;return function(i){for(a=0;a<n;++a)r[a]=e[a]*(1-i)+t[a]*i;return r}}function K$(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Q$(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,a=new Array(r),i=new Array(n),s;for(s=0;s<r;++s)a[s]=Xi(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(l){for(s=0;s<r;++s)i[s]=a[s](l);return i}}function Y$(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Kp(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function X$(e,t){var n={},r={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?n[a]=Xi(e[a],t[a]):r[a]=t[a];return function(i){for(a in n)r[a]=n[a](i);return r}}var sg=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Om=new RegExp(sg.source,"g");function Z$(e){return function(){return e}}function J$(e){return function(t){return e(t)+""}}function eL(e,t){var n=sg.lastIndex=Om.lastIndex=0,r,a,i,s=-1,l=[],c=[];for(e=e+"",t=t+"";(r=sg.exec(e))&&(a=Om.exec(t));)(i=a.index)>n&&(i=t.slice(n,i),l[s]?l[s]+=i:l[++s]=i),(r=r[0])===(a=a[0])?l[s]?l[s]+=a:l[++s]=a:(l[++s]=null,c.push({i:s,x:Kp(r,a)})),n=Om.lastIndex;return n<t.length&&(i=t.slice(n),l[s]?l[s]+=i:l[++s]=i),l.length<2?c[0]?J$(c[0].x):Z$(t):(t=c.length,function(f){for(var h=0,d;h<t;++h)l[(d=c[h]).i]=d.x(f);return l.join("")})}function Xi(e,t){var n=typeof t,r;return t==null||n==="boolean"?Ly(t):(n==="number"?Kp:n==="string"?(r=xs(t))?(t=r,NP):eL:t instanceof xs?NP:t instanceof Date?Y$:K$(t)?G$:Array.isArray(t)?Q$:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?X$:Kp)(e,t)}function Fy(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function tL(e,t){t===void 0&&(t=e,e=Xi);for(var n=0,r=t.length-1,a=t[0],i=new Array(r<0?0:r);n<r;)i[n]=e(a,a=t[++n]);return function(s){var l=Math.max(0,Math.min(r-1,Math.floor(s*=r)));return i[l](s-l)}}function nL(e){return function(){return e}}function Qp(e){return+e}var EP=[0,1];function un(e){return e}function lg(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:nL(isNaN(t)?NaN:.5)}function rL(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function aL(e,t,n){var r=e[0],a=e[1],i=t[0],s=t[1];return a<r?(r=lg(a,r),i=n(s,i)):(r=lg(r,a),i=n(i,s)),function(l){return i(r(l))}}function oL(e,t,n){var r=Math.min(e.length,t.length)-1,a=new Array(r),i=new Array(r),s=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<r;)a[s]=lg(e[s],e[s+1]),i[s]=n(t[s],t[s+1]);return function(l){var c=Xs(e,l,1,r)-1;return i[c](a[c](l))}}function Js(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Jc(){var e=EP,t=EP,n=Xi,r,a,i,s=un,l,c,f;function h(){var v=Math.min(e.length,t.length);return s!==un&&(s=rL(e[0],e[v-1])),l=v>2?oL:aL,c=f=null,d}function d(v){return v==null||isNaN(v=+v)?i:(c||(c=l(e.map(r),t,n)))(r(s(v)))}return d.invert=function(v){return s(a((f||(f=l(t,e.map(r),Kp)))(v)))},d.domain=function(v){return arguments.length?(e=Array.from(v,Qp),h()):e.slice()},d.range=function(v){return arguments.length?(t=Array.from(v),h()):t.slice()},d.rangeRound=function(v){return t=Array.from(v),n=Fy,h()},d.clamp=function(v){return arguments.length?(s=v?!0:un,h()):s!==un},d.interpolate=function(v){return arguments.length?(n=v,h()):n},d.unknown=function(v){return arguments.length?(i=v,d):i},function(v,y){return r=v,a=y,h()}}function qy(){return Jc()(un,un)}function iL(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Yp(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function bi(e){return e=Yp(Math.abs(e)),e?e[1]:NaN}function uL(e,t){return function(n,r){for(var a=n.length,i=[],s=0,l=e[0],c=0;a>0&&l>0&&(c+l+1>r&&(l=Math.max(1,r-c)),i.push(n.substring(a-=l,a+l)),!((c+=l+1)>r));)l=e[s=(s+1)%e.length];return i.reverse().join(t)}}function sL(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var lL=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ws(e){if(!(t=lL.exec(e)))throw new Error("invalid format: "+e);var t;return new zy({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}ws.prototype=zy.prototype;function zy(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}zy.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function pL(e){e:for(var t=e.length,n=1,r=-1,a;n<t;++n)switch(e[n]){case".":r=a=n;break;case"0":r===0&&(r=n),a=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Xp;function cL(e,t){var n=Yp(e,t);if(!n)return Xp=void 0,e.toPrecision(t);var r=n[0],a=n[1],i=a-(Xp=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,s=r.length;return i===s?r:i>s?r+new Array(i-s+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Yp(e,Math.max(0,t+i-1))[0]}function TP(e,t){var n=Yp(e,t);if(!n)return e+"";var r=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const RP={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:iL,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>TP(e*100,t),r:TP,s:cL,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function HP(e){return e}var jP=Array.prototype.map,DP=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function fL(e){var t=e.grouping===void 0||e.thousands===void 0?HP:uL(jP.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?HP:sL(jP.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",c=e.nan===void 0?"NaN":e.nan+"";function f(d,v){d=ws(d);var y=d.fill,x=d.align,I=d.sign,b=d.symbol,S=d.zero,W=d.width,A=d.comma,O=d.precision,w=d.trim,_=d.type;_==="n"?(A=!0,_="g"):RP[_]||(O===void 0&&(O=12),w=!0,_="g"),(S||y==="0"&&x==="=")&&(S=!0,y="0",x="=");var N=(v&&v.prefix!==void 0?v.prefix:"")+(b==="$"?n:b==="#"&&/[boxX]/.test(_)?"0"+_.toLowerCase():""),P=(b==="$"?r:/[%p]/.test(_)?s:"")+(v&&v.suffix!==void 0?v.suffix:""),C=RP[_],T=/[defgprs%]/.test(_);O=O===void 0?6:/[gprs]/.test(_)?Math.max(1,Math.min(21,O)):Math.max(0,Math.min(20,O));function j(E){var $=N,V=P,G,z,Q;if(_==="c")V=C(E)+V,E="";else{E=+E;var L=E<0||1/E<0;if(E=isNaN(E)?c:C(Math.abs(E),O),w&&(E=pL(E)),L&&+E==0&&I!=="+"&&(L=!1),$=(L?I==="("?I:l:I==="-"||I==="("?"":I)+$,V=(_==="s"&&!isNaN(E)&&Xp!==void 0?DP[8+Xp/3]:"")+V+(L&&I==="("?")":""),T){for(G=-1,z=E.length;++G<z;)if(Q=E.charCodeAt(G),48>Q||Q>57){V=(Q===46?a+E.slice(G+1):E.slice(G))+V,E=E.slice(0,G);break}}}A&&!S&&(E=t(E,1/0));var K=$.length+E.length+V.length,Y=K<W?new Array(W-K+1).join(y):"";switch(A&&S&&(E=t(Y+E,Y.length?W-V.length:1/0),Y=""),x){case"<":E=$+E+V+Y;break;case"=":E=$+Y+E+V;break;case"^":E=Y.slice(0,K=Y.length>>1)+$+E+V+Y.slice(K);break;default:E=Y+$+E+V;break}return i(E)}return j.toString=function(){return d+""},j}function h(d,v){var y=Math.max(-8,Math.min(8,Math.floor(bi(v)/3)))*3,x=Math.pow(10,-y),I=f((d=ws(d),d.type="f",d),{suffix:DP[8+y/3]});return function(b){return I(x*b)}}return{format:f,formatPrefix:h}}var Ip,Uy,DA;dL({thousands:",",grouping:[3],currency:["$",""]});function dL(e){return Ip=fL(e),Uy=Ip.format,DA=Ip.formatPrefix,Ip}function hL(e){return Math.max(0,-bi(Math.abs(e)))}function mL(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(bi(t)/3)))*3-bi(Math.abs(e)))}function vL(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,bi(t)-bi(e))+1}function $A(e,t,n,r){var a=og(e,t,n),i;switch(r=ws(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(i=mL(a,s))&&(r.precision=i),DA(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=vL(a,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=hL(a))&&(r.precision=i-(r.type==="%")*2);break}}return Uy(r)}function Da(e){var t=e.domain;return e.ticks=function(n){var r=t();return rg(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var a=t();return $A(a[0],a[a.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),a=0,i=r.length-1,s=r[a],l=r[i],c,f,h=10;for(l<s&&(f=s,s=l,l=f,f=a,a=i,i=f);h-- >0;){if(f=ag(s,l,n),f===c)return r[a]=s,r[i]=l,t(r);if(f>0)s=Math.floor(s/f)*f,l=Math.ceil(l/f)*f;else if(f<0)s=Math.ceil(s*f)/f,l=Math.floor(l*f)/f;else break;c=f}return e},e}function Zp(){var e=qy();return e.copy=function(){return Js(e,Zp())},Qn.apply(e,arguments),Da(e)}function LA(e){var t;function n(r){return r==null||isNaN(r=+r)?t:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(e=Array.from(r,Qp),n):e.slice()},n.unknown=function(r){return arguments.length?(t=r,n):t},n.copy=function(){return LA(e).unknown(t)},e=arguments.length?Array.from(e,Qp):[0,1],Da(n)}function FA(e,t){e=e.slice();var n=0,r=e.length-1,a=e[n],i=e[r],s;return i<a&&(s=n,n=r,r=s,s=a,a=i,i=s),e[n]=t.floor(a),e[r]=t.ceil(i),e}function $P(e){return Math.log(e)}function LP(e){return Math.exp(e)}function gL(e){return-Math.log(-e)}function yL(e){return-Math.exp(-e)}function bL(e){return isFinite(e)?+("1e"+e):e<0?0:e}function IL(e){return e===10?bL:e===Math.E?Math.exp:t=>Math.pow(e,t)}function BL(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function FP(e){return(t,n)=>-e(-t,n)}function Vy(e){const t=e($P,LP),n=t.domain;let r=10,a,i;function s(){return a=BL(r),i=IL(r),n()[0]<0?(a=FP(a),i=FP(i),e(gL,yL)):e($P,LP),t}return t.base=function(l){return arguments.length?(r=+l,s()):r},t.domain=function(l){return arguments.length?(n(l),s()):n()},t.ticks=l=>{const c=n();let f=c[0],h=c[c.length-1];const d=h<f;d&&([f,h]=[h,f]);let v=a(f),y=a(h),x,I;const b=l==null?10:+l;let S=[];if(!(r%1)&&y-v<b){if(v=Math.floor(v),y=Math.ceil(y),f>0){for(;v<=y;++v)for(x=1;x<r;++x)if(I=v<0?x/i(-v):x*i(v),!(I<f)){if(I>h)break;S.push(I)}}else for(;v<=y;++v)for(x=r-1;x>=1;--x)if(I=v>0?x/i(-v):x*i(v),!(I<f)){if(I>h)break;S.push(I)}S.length*2<b&&(S=rg(f,h,b))}else S=rg(v,y,Math.min(y-v,b)).map(i);return d?S.reverse():S},t.tickFormat=(l,c)=>{if(l==null&&(l=10),c==null&&(c=r===10?"s":","),typeof c!="function"&&(!(r%1)&&(c=ws(c)).precision==null&&(c.trim=!0),c=Uy(c)),l===1/0)return c;const f=Math.max(1,r*l/t.ticks().length);return h=>{let d=h/i(Math.round(a(h)));return d*r<r-.5&&(d*=r),d<=f?c(h):""}},t.nice=()=>n(FA(n(),{floor:l=>i(Math.floor(a(l))),ceil:l=>i(Math.ceil(a(l)))})),t}function qA(){const e=Vy(Jc()).domain([1,10]);return e.copy=()=>Js(e,qA()).base(e.base()),Qn.apply(e,arguments),e}function qP(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function zP(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function Gy(e){var t=1,n=e(qP(t),zP(t));return n.constant=function(r){return arguments.length?e(qP(t=+r),zP(t)):t},Da(n)}function zA(){var e=Gy(Jc());return e.copy=function(){return Js(e,zA()).constant(e.constant())},Qn.apply(e,arguments)}function UP(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function xL(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function wL(e){return e<0?-e*e:e*e}function Ky(e){var t=e(un,un),n=1;function r(){return n===1?e(un,un):n===.5?e(xL,wL):e(UP(n),UP(1/n))}return t.exponent=function(a){return arguments.length?(n=+a,r()):n},Da(t)}function Qy(){var e=Ky(Jc());return e.copy=function(){return Js(e,Qy()).exponent(e.exponent())},Qn.apply(e,arguments),e}function PL(){return Qy.apply(null,arguments).exponent(.5)}function VP(e){return Math.sign(e)*e*e}function SL(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function UA(){var e=qy(),t=[0,1],n=!1,r;function a(i){var s=SL(e(i));return isNaN(s)?r:n?Math.round(s):s}return a.invert=function(i){return e.invert(VP(i))},a.domain=function(i){return arguments.length?(e.domain(i),a):e.domain()},a.range=function(i){return arguments.length?(e.range((t=Array.from(i,Qp)).map(VP)),a):t.slice()},a.rangeRound=function(i){return a.range(i).round(!0)},a.round=function(i){return arguments.length?(n=!!i,a):n},a.clamp=function(i){return arguments.length?(e.clamp(i),a):e.clamp()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return UA(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},Qn.apply(a,arguments),Da(a)}function VA(){var e=[],t=[],n=[],r;function a(){var s=0,l=Math.max(1,t.length);for(n=new Array(l-1);++s<l;)n[s-1]=O$(e,s/l);return i}function i(s){return s==null||isNaN(s=+s)?r:t[Xs(n,s)]}return i.invertExtent=function(s){var l=t.indexOf(s);return l<0?[NaN,NaN]:[l>0?n[l-1]:e[0],l<n.length?n[l]:e[e.length-1]]},i.domain=function(s){if(!arguments.length)return e.slice();e=[];for(let l of s)l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(Ca),a()},i.range=function(s){return arguments.length?(t=Array.from(s),a()):t.slice()},i.unknown=function(s){return arguments.length?(r=s,i):r},i.quantiles=function(){return n.slice()},i.copy=function(){return VA().domain(e).range(t).unknown(r)},Qn.apply(i,arguments)}function GA(){var e=0,t=1,n=1,r=[.5],a=[0,1],i;function s(c){return c!=null&&c<=c?a[Xs(r,c,0,n)]:i}function l(){var c=-1;for(r=new Array(n);++c<n;)r[c]=((c+1)*t-(c-n)*e)/(n+1);return s}return s.domain=function(c){return arguments.length?([e,t]=c,e=+e,t=+t,l()):[e,t]},s.range=function(c){return arguments.length?(n=(a=Array.from(c)).length-1,l()):a.slice()},s.invertExtent=function(c){var f=a.indexOf(c);return f<0?[NaN,NaN]:f<1?[e,r[0]]:f>=n?[r[n-1],t]:[r[f-1],r[f]]},s.unknown=function(c){return arguments.length&&(i=c),s},s.thresholds=function(){return r.slice()},s.copy=function(){return GA().domain([e,t]).range(a).unknown(i)},Qn.apply(Da(s),arguments)}function KA(){var e=[.5],t=[0,1],n,r=1;function a(i){return i!=null&&i<=i?t[Xs(e,i,0,r)]:n}return a.domain=function(i){return arguments.length?(e=Array.from(i),r=Math.min(e.length,t.length-1),a):e.slice()},a.range=function(i){return arguments.length?(t=Array.from(i),r=Math.min(e.length,t.length-1),a):t.slice()},a.invertExtent=function(i){var s=t.indexOf(i);return[e[s-1],e[s]]},a.unknown=function(i){return arguments.length?(n=i,a):n},a.copy=function(){return KA().domain(e).range(t).unknown(n)},Qn.apply(a,arguments)}const Cm=new Date,km=new Date;function Ht(e,t,n,r){function a(i){return e(i=arguments.length===0?new Date:new Date(+i)),i}return a.floor=i=>(e(i=new Date(+i)),i),a.ceil=i=>(e(i=new Date(i-1)),t(i,1),e(i),i),a.round=i=>{const s=a(i),l=a.ceil(i);return i-s<l-i?s:l},a.offset=(i,s)=>(t(i=new Date(+i),s==null?1:Math.floor(s)),i),a.range=(i,s,l)=>{const c=[];if(i=a.ceil(i),l=l==null?1:Math.floor(l),!(i<s)||!(l>0))return c;let f;do c.push(f=new Date(+i)),t(i,l),e(i);while(f<i&&i<s);return c},a.filter=i=>Ht(s=>{if(s>=s)for(;e(s),!i(s);)s.setTime(s-1)},(s,l)=>{if(s>=s)if(l<0)for(;++l<=0;)for(;t(s,-1),!i(s););else for(;--l>=0;)for(;t(s,1),!i(s););}),n&&(a.count=(i,s)=>(Cm.setTime(+i),km.setTime(+s),e(Cm),e(km),Math.floor(n(Cm,km))),a.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?a.filter(r?s=>r(s)%i===0:s=>a.count(0,s)%i===0):a)),a}const Jp=Ht(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Jp.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?Ht(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):Jp);Jp.range;const $r=1e3,Vn=$r*60,Lr=Vn*60,Gr=Lr*24,Yy=Gr*7,GP=Gr*30,Nm=Gr*365,co=Ht(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*$r)},(e,t)=>(t-e)/$r,e=>e.getUTCSeconds());co.range;const Xy=Ht(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r)},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getMinutes());Xy.range;const Zy=Ht(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getUTCMinutes());Zy.range;const Jy=Ht(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r-e.getMinutes()*Vn)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getHours());Jy.range;const eb=Ht(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getUTCHours());eb.range;const el=Ht(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Vn)/Gr,e=>e.getDate()-1);el.range;const e0=Ht(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gr,e=>e.getUTCDate()-1);e0.range;const QA=Ht(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gr,e=>Math.floor(e/Gr));QA.range;function xo(e){return Ht(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Vn)/Yy)}const t0=xo(0),ec=xo(1),WL=xo(2),AL=xo(3),Ii=xo(4),_L=xo(5),ML=xo(6);t0.range;ec.range;WL.range;AL.range;Ii.range;_L.range;ML.range;function wo(e){return Ht(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Yy)}const n0=wo(0),tc=wo(1),OL=wo(2),CL=wo(3),Bi=wo(4),kL=wo(5),NL=wo(6);n0.range;tc.range;OL.range;CL.range;Bi.range;kL.range;NL.range;const tb=Ht(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());tb.range;const nb=Ht(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());nb.range;const Kr=Ht(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Kr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Ht(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});Kr.range;const Qr=Ht(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Qr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Ht(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});Qr.range;function YA(e,t,n,r,a,i){const s=[[co,1,$r],[co,5,5*$r],[co,15,15*$r],[co,30,30*$r],[i,1,Vn],[i,5,5*Vn],[i,15,15*Vn],[i,30,30*Vn],[a,1,Lr],[a,3,3*Lr],[a,6,6*Lr],[a,12,12*Lr],[r,1,Gr],[r,2,2*Gr],[n,1,Yy],[t,1,GP],[t,3,3*GP],[e,1,Nm]];function l(f,h,d){const v=h<f;v&&([f,h]=[h,f]);const y=d&&typeof d.range=="function"?d:c(f,h,d),x=y?y.range(f,+h+1):[];return v?x.reverse():x}function c(f,h,d){const v=Math.abs(h-f)/d,y=jy(([,,b])=>b).right(s,v);if(y===s.length)return e.every(og(f/Nm,h/Nm,d));if(y===0)return Jp.every(Math.max(og(f,h,d),1));const[x,I]=s[v/s[y-1][2]<s[y][2]/v?y-1:y];return x.every(I)}return[l,c]}const[EL,TL]=YA(Qr,nb,n0,QA,eb,Zy),[RL,HL]=YA(Kr,tb,t0,el,Jy,Xy);function Em(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Tm(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Uu(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function jL(e){var t=e.dateTime,n=e.date,r=e.time,a=e.periods,i=e.days,s=e.shortDays,l=e.months,c=e.shortMonths,f=Vu(a),h=Gu(a),d=Vu(i),v=Gu(i),y=Vu(s),x=Gu(s),I=Vu(l),b=Gu(l),S=Vu(c),W=Gu(c),A={a:Q,A:L,b:K,B:Y,c:null,d:JP,e:JP,f:u8,g:g8,G:b8,H:a8,I:o8,j:i8,L:XA,m:s8,M:l8,p:H,q:F,Q:n4,s:r4,S:p8,u:c8,U:f8,V:d8,w:h8,W:m8,x:null,X:null,y:v8,Y:y8,Z:I8,"%":t4},O={a:J,A:ue,b:he,B:ge,c:null,d:e4,e:e4,f:P8,g:E8,G:R8,H:B8,I:x8,j:w8,L:JA,m:S8,M:W8,p:ye,q:fe,Q:n4,s:r4,S:A8,u:_8,U:M8,V:O8,w:C8,W:k8,x:null,X:null,y:N8,Y:T8,Z:H8,"%":t4},w={a:T,A:j,b:E,B:$,c:V,d:XP,e:XP,f:e8,g:YP,G:QP,H:ZP,I:ZP,j:YL,L:JL,m:QL,M:XL,p:C,q:KL,Q:n8,s:r8,S:ZL,u:qL,U:zL,V:UL,w:FL,W:VL,x:G,X:z,y:YP,Y:QP,Z:GL,"%":t8};A.x=_(n,A),A.X=_(r,A),A.c=_(t,A),O.x=_(n,O),O.X=_(r,O),O.c=_(t,O);function _(ne,de){return function(ce){var re=[],Re=-1,Pe=0,Ce=ne.length,Ae,Fe,je;for(ce instanceof Date||(ce=new Date(+ce));++Re<Ce;)ne.charCodeAt(Re)===37&&(re.push(ne.slice(Pe,Re)),(Fe=KP[Ae=ne.charAt(++Re)])!=null?Ae=ne.charAt(++Re):Fe=Ae==="e"?" ":"0",(je=de[Ae])&&(Ae=je(ce,Fe)),re.push(Ae),Pe=Re+1);return re.push(ne.slice(Pe,Re)),re.join("")}}function N(ne,de){return function(ce){var re=Uu(1900,void 0,1),Re=P(re,ne,ce+="",0),Pe,Ce;if(Re!=ce.length)return null;if("Q"in re)return new Date(re.Q);if("s"in re)return new Date(re.s*1e3+("L"in re?re.L:0));if(de&&!("Z"in re)&&(re.Z=0),"p"in re&&(re.H=re.H%12+re.p*12),re.m===void 0&&(re.m="q"in re?re.q:0),"V"in re){if(re.V<1||re.V>53)return null;"w"in re||(re.w=1),"Z"in re?(Pe=Tm(Uu(re.y,0,1)),Ce=Pe.getUTCDay(),Pe=Ce>4||Ce===0?tc.ceil(Pe):tc(Pe),Pe=e0.offset(Pe,(re.V-1)*7),re.y=Pe.getUTCFullYear(),re.m=Pe.getUTCMonth(),re.d=Pe.getUTCDate()+(re.w+6)%7):(Pe=Em(Uu(re.y,0,1)),Ce=Pe.getDay(),Pe=Ce>4||Ce===0?ec.ceil(Pe):ec(Pe),Pe=el.offset(Pe,(re.V-1)*7),re.y=Pe.getFullYear(),re.m=Pe.getMonth(),re.d=Pe.getDate()+(re.w+6)%7)}else("W"in re||"U"in re)&&("w"in re||(re.w="u"in re?re.u%7:"W"in re?1:0),Ce="Z"in re?Tm(Uu(re.y,0,1)).getUTCDay():Em(Uu(re.y,0,1)).getDay(),re.m=0,re.d="W"in re?(re.w+6)%7+re.W*7-(Ce+5)%7:re.w+re.U*7-(Ce+6)%7);return"Z"in re?(re.H+=re.Z/100|0,re.M+=re.Z%100,Tm(re)):Em(re)}}function P(ne,de,ce,re){for(var Re=0,Pe=de.length,Ce=ce.length,Ae,Fe;Re<Pe;){if(re>=Ce)return-1;if(Ae=de.charCodeAt(Re++),Ae===37){if(Ae=de.charAt(Re++),Fe=w[Ae in KP?de.charAt(Re++):Ae],!Fe||(re=Fe(ne,ce,re))<0)return-1}else if(Ae!=ce.charCodeAt(re++))return-1}return re}function C(ne,de,ce){var re=f.exec(de.slice(ce));return re?(ne.p=h.get(re[0].toLowerCase()),ce+re[0].length):-1}function T(ne,de,ce){var re=y.exec(de.slice(ce));return re?(ne.w=x.get(re[0].toLowerCase()),ce+re[0].length):-1}function j(ne,de,ce){var re=d.exec(de.slice(ce));return re?(ne.w=v.get(re[0].toLowerCase()),ce+re[0].length):-1}function E(ne,de,ce){var re=S.exec(de.slice(ce));return re?(ne.m=W.get(re[0].toLowerCase()),ce+re[0].length):-1}function $(ne,de,ce){var re=I.exec(de.slice(ce));return re?(ne.m=b.get(re[0].toLowerCase()),ce+re[0].length):-1}function V(ne,de,ce){return P(ne,t,de,ce)}function G(ne,de,ce){return P(ne,n,de,ce)}function z(ne,de,ce){return P(ne,r,de,ce)}function Q(ne){return s[ne.getDay()]}function L(ne){return i[ne.getDay()]}function K(ne){return c[ne.getMonth()]}function Y(ne){return l[ne.getMonth()]}function H(ne){return a[+(ne.getHours()>=12)]}function F(ne){return 1+~~(ne.getMonth()/3)}function J(ne){return s[ne.getUTCDay()]}function ue(ne){return i[ne.getUTCDay()]}function he(ne){return c[ne.getUTCMonth()]}function ge(ne){return l[ne.getUTCMonth()]}function ye(ne){return a[+(ne.getUTCHours()>=12)]}function fe(ne){return 1+~~(ne.getUTCMonth()/3)}return{format:function(ne){var de=_(ne+="",A);return de.toString=function(){return ne},de},parse:function(ne){var de=N(ne+="",!1);return de.toString=function(){return ne},de},utcFormat:function(ne){var de=_(ne+="",O);return de.toString=function(){return ne},de},utcParse:function(ne){var de=N(ne+="",!0);return de.toString=function(){return ne},de}}}var KP={"-":"",_:" ",0:"0"},zt=/^\s*\d+/,DL=/^%/,$L=/[\\^$*+?|[\]().{}]/g;function Ve(e,t,n){var r=e<0?"-":"",a=(r?-e:e)+"",i=a.length;return r+(i<n?new Array(n-i+1).join(t)+a:a)}function LL(e){return e.replace($L,"\\$&")}function Vu(e){return new RegExp("^(?:"+e.map(LL).join("|")+")","i")}function Gu(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function FL(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function qL(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function zL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function UL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function VL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function QP(e,t,n){var r=zt.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function YP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function GL(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function KL(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function QL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function XP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function YL(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function ZP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function XL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function ZL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function JL(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function e8(e,t,n){var r=zt.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function t8(e,t,n){var r=DL.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function n8(e,t,n){var r=zt.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function r8(e,t,n){var r=zt.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function JP(e,t){return Ve(e.getDate(),t,2)}function a8(e,t){return Ve(e.getHours(),t,2)}function o8(e,t){return Ve(e.getHours()%12||12,t,2)}function i8(e,t){return Ve(1+el.count(Kr(e),e),t,3)}function XA(e,t){return Ve(e.getMilliseconds(),t,3)}function u8(e,t){return XA(e,t)+"000"}function s8(e,t){return Ve(e.getMonth()+1,t,2)}function l8(e,t){return Ve(e.getMinutes(),t,2)}function p8(e,t){return Ve(e.getSeconds(),t,2)}function c8(e){var t=e.getDay();return t===0?7:t}function f8(e,t){return Ve(t0.count(Kr(e)-1,e),t,2)}function ZA(e){var t=e.getDay();return t>=4||t===0?Ii(e):Ii.ceil(e)}function d8(e,t){return e=ZA(e),Ve(Ii.count(Kr(e),e)+(Kr(e).getDay()===4),t,2)}function h8(e){return e.getDay()}function m8(e,t){return Ve(ec.count(Kr(e)-1,e),t,2)}function v8(e,t){return Ve(e.getFullYear()%100,t,2)}function g8(e,t){return e=ZA(e),Ve(e.getFullYear()%100,t,2)}function y8(e,t){return Ve(e.getFullYear()%1e4,t,4)}function b8(e,t){var n=e.getDay();return e=n>=4||n===0?Ii(e):Ii.ceil(e),Ve(e.getFullYear()%1e4,t,4)}function I8(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Ve(t/60|0,"0",2)+Ve(t%60,"0",2)}function e4(e,t){return Ve(e.getUTCDate(),t,2)}function B8(e,t){return Ve(e.getUTCHours(),t,2)}function x8(e,t){return Ve(e.getUTCHours()%12||12,t,2)}function w8(e,t){return Ve(1+e0.count(Qr(e),e),t,3)}function JA(e,t){return Ve(e.getUTCMilliseconds(),t,3)}function P8(e,t){return JA(e,t)+"000"}function S8(e,t){return Ve(e.getUTCMonth()+1,t,2)}function W8(e,t){return Ve(e.getUTCMinutes(),t,2)}function A8(e,t){return Ve(e.getUTCSeconds(),t,2)}function _8(e){var t=e.getUTCDay();return t===0?7:t}function M8(e,t){return Ve(n0.count(Qr(e)-1,e),t,2)}function e_(e){var t=e.getUTCDay();return t>=4||t===0?Bi(e):Bi.ceil(e)}function O8(e,t){return e=e_(e),Ve(Bi.count(Qr(e),e)+(Qr(e).getUTCDay()===4),t,2)}function C8(e){return e.getUTCDay()}function k8(e,t){return Ve(tc.count(Qr(e)-1,e),t,2)}function N8(e,t){return Ve(e.getUTCFullYear()%100,t,2)}function E8(e,t){return e=e_(e),Ve(e.getUTCFullYear()%100,t,2)}function T8(e,t){return Ve(e.getUTCFullYear()%1e4,t,4)}function R8(e,t){var n=e.getUTCDay();return e=n>=4||n===0?Bi(e):Bi.ceil(e),Ve(e.getUTCFullYear()%1e4,t,4)}function H8(){return"+0000"}function t4(){return"%"}function n4(e){return+e}function r4(e){return Math.floor(+e/1e3)}var ei,t_,n_;j8({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function j8(e){return ei=jL(e),t_=ei.format,ei.parse,n_=ei.utcFormat,ei.utcParse,ei}function D8(e){return new Date(e)}function $8(e){return e instanceof Date?+e:+new Date(+e)}function rb(e,t,n,r,a,i,s,l,c,f){var h=qy(),d=h.invert,v=h.domain,y=f(".%L"),x=f(":%S"),I=f("%I:%M"),b=f("%I %p"),S=f("%a %d"),W=f("%b %d"),A=f("%B"),O=f("%Y");function w(_){return(c(_)<_?y:l(_)<_?x:s(_)<_?I:i(_)<_?b:r(_)<_?a(_)<_?S:W:n(_)<_?A:O)(_)}return h.invert=function(_){return new Date(d(_))},h.domain=function(_){return arguments.length?v(Array.from(_,$8)):v().map(D8)},h.ticks=function(_){var N=v();return e(N[0],N[N.length-1],_??10)},h.tickFormat=function(_,N){return N==null?w:f(N)},h.nice=function(_){var N=v();return(!_||typeof _.range!="function")&&(_=t(N[0],N[N.length-1],_??10)),_?v(FA(N,_)):h},h.copy=function(){return Js(h,rb(e,t,n,r,a,i,s,l,c,f))},h}function L8(){return Qn.apply(rb(RL,HL,Kr,tb,t0,el,Jy,Xy,co,t_).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function F8(){return Qn.apply(rb(EL,TL,Qr,nb,n0,e0,eb,Zy,co,n_).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function r0(){var e=0,t=1,n,r,a,i,s=un,l=!1,c;function f(d){return d==null||isNaN(d=+d)?c:s(a===0?.5:(d=(i(d)-n)*a,l?Math.max(0,Math.min(1,d)):d))}f.domain=function(d){return arguments.length?([e,t]=d,n=i(e=+e),r=i(t=+t),a=n===r?0:1/(r-n),f):[e,t]},f.clamp=function(d){return arguments.length?(l=!!d,f):l},f.interpolator=function(d){return arguments.length?(s=d,f):s};function h(d){return function(v){var y,x;return arguments.length?([y,x]=v,s=d(y,x),f):[s(0),s(1)]}}return f.range=h(Xi),f.rangeRound=h(Fy),f.unknown=function(d){return arguments.length?(c=d,f):c},function(d){return i=d,n=d(e),r=d(t),a=n===r?0:1/(r-n),f}}function $a(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function r_(){var e=Da(r0()(un));return e.copy=function(){return $a(e,r_())},Jr.apply(e,arguments)}function a_(){var e=Vy(r0()).domain([1,10]);return e.copy=function(){return $a(e,a_()).base(e.base())},Jr.apply(e,arguments)}function o_(){var e=Gy(r0());return e.copy=function(){return $a(e,o_()).constant(e.constant())},Jr.apply(e,arguments)}function ab(){var e=Ky(r0());return e.copy=function(){return $a(e,ab()).exponent(e.exponent())},Jr.apply(e,arguments)}function q8(){return ab.apply(null,arguments).exponent(.5)}function i_(){var e=[],t=un;function n(r){if(r!=null&&!isNaN(r=+r))return t((Xs(e,r,1)-1)/(e.length-1))}return n.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Ca),n},n.interpolator=function(r){return arguments.length?(t=r,n):t},n.range=function(){return e.map((r,a)=>t(a/(e.length-1)))},n.quantiles=function(r){return Array.from({length:r+1},(a,i)=>M$(e,i/r))},n.copy=function(){return i_(t).domain(e)},Jr.apply(n,arguments)}function a0(){var e=0,t=.5,n=1,r=1,a,i,s,l,c,f=un,h,d=!1,v;function y(I){return isNaN(I=+I)?v:(I=.5+((I=+h(I))-i)*(r*I<r*i?l:c),f(d?Math.max(0,Math.min(1,I)):I))}y.domain=function(I){return arguments.length?([e,t,n]=I,a=h(e=+e),i=h(t=+t),s=h(n=+n),l=a===i?0:.5/(i-a),c=i===s?0:.5/(s-i),r=i<a?-1:1,y):[e,t,n]},y.clamp=function(I){return arguments.length?(d=!!I,y):d},y.interpolator=function(I){return arguments.length?(f=I,y):f};function x(I){return function(b){var S,W,A;return arguments.length?([S,W,A]=b,f=tL(I,[S,W,A]),y):[f(0),f(.5),f(1)]}}return y.range=x(Xi),y.rangeRound=x(Fy),y.unknown=function(I){return arguments.length?(v=I,y):v},function(I){return h=I,a=I(e),i=I(t),s=I(n),l=a===i?0:.5/(i-a),c=i===s?0:.5/(s-i),r=i<a?-1:1,y}}function u_(){var e=Da(a0()(un));return e.copy=function(){return $a(e,u_())},Jr.apply(e,arguments)}function s_(){var e=Vy(a0()).domain([.1,1,10]);return e.copy=function(){return $a(e,s_()).base(e.base())},Jr.apply(e,arguments)}function l_(){var e=Gy(a0());return e.copy=function(){return $a(e,l_()).constant(e.constant())},Jr.apply(e,arguments)}function ob(){var e=Ky(a0());return e.copy=function(){return $a(e,ob()).exponent(e.exponent())},Jr.apply(e,arguments)}function z8(){return ob.apply(null,arguments).exponent(.5)}const a4=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:bs,scaleDiverging:u_,scaleDivergingLog:s_,scaleDivergingPow:ob,scaleDivergingSqrt:z8,scaleDivergingSymlog:l_,scaleIdentity:LA,scaleImplicit:ig,scaleLinear:Zp,scaleLog:qA,scaleOrdinal:Dy,scalePoint:rs,scalePow:Qy,scaleQuantile:VA,scaleQuantize:GA,scaleRadial:UA,scaleSequential:r_,scaleSequentialLog:a_,scaleSequentialPow:ab,scaleSequentialQuantile:i_,scaleSequentialSqrt:q8,scaleSequentialSymlog:o_,scaleSqrt:PL,scaleSymlog:zA,scaleThreshold:KA,scaleTime:L8,scaleUtc:F8,tickFormat:$A},Symbol.toStringTag,{value:"Module"}));var Rm,o4;function o0(){if(o4)return Rm;o4=1;var e=Gi();function t(n,r,a){for(var i=-1,s=n.length;++i<s;){var l=n[i],c=r(l);if(c!=null&&(f===void 0?c===c&&!e(c):a(c,f)))var f=c,h=l}return h}return Rm=t,Rm}var Hm,i4;function p_(){if(i4)return Hm;i4=1;function e(t,n){return t>n}return Hm=e,Hm}var jm,u4;function U8(){if(u4)return jm;u4=1;var e=o0(),t=p_(),n=Yi();function r(a){return a&&a.length?e(a,n,t):void 0}return jm=r,jm}var V8=U8();const Aa=Xe(V8);var Dm,s4;function c_(){if(s4)return Dm;s4=1;function e(t,n){return t<n}return Dm=e,Dm}var $m,l4;function G8(){if(l4)return $m;l4=1;var e=o0(),t=c_(),n=Yi();function r(a){return a&&a.length?e(a,n,t):void 0}return $m=r,$m}var K8=G8();const i0=Xe(K8);var Lm,p4;function Q8(){if(p4)return Lm;p4=1;var e=By(),t=Ar(),n=IA(),r=yn();function a(i,s){var l=r(i)?e:n;return l(i,t(s,3))}return Lm=a,Lm}var Fm,c4;function Y8(){if(c4)return Fm;c4=1;var e=yA(),t=Q8();function n(r,a){return e(t(r,a),1)}return Fm=n,Fm}var X8=Y8();const Z8=Xe(X8);var qm,f4;function J8(){if(f4)return qm;f4=1;var e=Ny();function t(n,r){return e(n,r)}return qm=t,qm}var e7=J8();const Ta=Xe(e7);var Zi=1e9,t7={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},ub,ct=!0,Gn="[DecimalError] ",vo=Gn+"Invalid argument: ",ib=Gn+"Exponent out of range: ",Ji=Math.floor,uo=Math.pow,n7=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,_n,Ft=1e7,st=7,f_=9007199254740991,nc=Ji(f_/st),Ie={};Ie.absoluteValue=Ie.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};Ie.comparedTo=Ie.cmp=function(e){var t,n,r,a,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(r=i.d.length,a=e.d.length,t=0,n=r<a?r:a;t<n;++t)if(i.d[t]!==e.d[t])return i.d[t]>e.d[t]^i.s<0?1:-1;return r===a?0:r>a^i.s<0?1:-1};Ie.decimalPlaces=Ie.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*st;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n};Ie.dividedBy=Ie.div=function(e){return Vr(this,new this.constructor(e))};Ie.dividedToIntegerBy=Ie.idiv=function(e){var t=this,n=t.constructor;return tt(Vr(t,new n(e),0,1),n.precision)};Ie.equals=Ie.eq=function(e){return!this.cmp(e)};Ie.exponent=function(){return Ot(this)};Ie.greaterThan=Ie.gt=function(e){return this.cmp(e)>0};Ie.greaterThanOrEqualTo=Ie.gte=function(e){return this.cmp(e)>=0};Ie.isInteger=Ie.isint=function(){return this.e>this.d.length-2};Ie.isNegative=Ie.isneg=function(){return this.s<0};Ie.isPositive=Ie.ispos=function(){return this.s>0};Ie.isZero=function(){return this.s===0};Ie.lessThan=Ie.lt=function(e){return this.cmp(e)<0};Ie.lessThanOrEqualTo=Ie.lte=function(e){return this.cmp(e)<1};Ie.logarithm=Ie.log=function(e){var t,n=this,r=n.constructor,a=r.precision,i=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(_n))throw Error(Gn+"NaN");if(n.s<1)throw Error(Gn+(n.s?"NaN":"-Infinity"));return n.eq(_n)?new r(0):(ct=!1,t=Vr(Ps(n,i),Ps(e,i),i),ct=!0,tt(t,a))};Ie.minus=Ie.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?m_(t,e):d_(t,(e.s=-e.s,e))};Ie.modulo=Ie.mod=function(e){var t,n=this,r=n.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(Gn+"NaN");return n.s?(ct=!1,t=Vr(n,e,0,1).times(e),ct=!0,n.minus(t)):tt(new r(n),a)};Ie.naturalExponential=Ie.exp=function(){return h_(this)};Ie.naturalLogarithm=Ie.ln=function(){return Ps(this)};Ie.negated=Ie.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};Ie.plus=Ie.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?d_(t,e):m_(t,(e.s=-e.s,e))};Ie.precision=Ie.sd=function(e){var t,n,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(vo+e);if(t=Ot(a)+1,r=a.d.length-1,n=r*st+1,r=a.d[r],r){for(;r%10==0;r/=10)n--;for(r=a.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};Ie.squareRoot=Ie.sqrt=function(){var e,t,n,r,a,i,s,l=this,c=l.constructor;if(l.s<1){if(!l.s)return new c(0);throw Error(Gn+"NaN")}for(e=Ot(l),ct=!1,a=Math.sqrt(+l),a==0||a==1/0?(t=br(l.d),(t.length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=Ji((e+1)/2)-(e<0||e%2),a==1/0?t="5e"+e:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new c(t)):r=new c(a.toString()),n=c.precision,a=s=n+3;;)if(i=r,r=i.plus(Vr(l,i,s+2)).times(.5),br(i.d).slice(0,s)===(t=br(r.d)).slice(0,s)){if(t=t.slice(s-3,s+1),a==s&&t=="4999"){if(tt(i,n+1,0),i.times(i).eq(l)){r=i;break}}else if(t!="9999")break;s+=4}return ct=!0,tt(r,n)};Ie.times=Ie.mul=function(e){var t,n,r,a,i,s,l,c,f,h=this,d=h.constructor,v=h.d,y=(e=new d(e)).d;if(!h.s||!e.s)return new d(0);for(e.s*=h.s,n=h.e+e.e,c=v.length,f=y.length,c<f&&(i=v,v=y,y=i,s=c,c=f,f=s),i=[],s=c+f,r=s;r--;)i.push(0);for(r=f;--r>=0;){for(t=0,a=c+r;a>r;)l=i[a]+y[r]*v[a-r-1]+t,i[a--]=l%Ft|0,t=l/Ft|0;i[a]=(i[a]+t)%Ft|0}for(;!i[--s];)i.pop();return t?++n:i.shift(),e.d=i,e.e=n,ct?tt(e,d.precision):e};Ie.toDecimalPlaces=Ie.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(Pr(e,0,Zi),t===void 0?t=r.rounding:Pr(t,0,8),tt(n,e+Ot(n)+1,t))};Ie.toExponential=function(e,t){var n,r=this,a=r.constructor;return e===void 0?n=yo(r,!0):(Pr(e,0,Zi),t===void 0?t=a.rounding:Pr(t,0,8),r=tt(new a(r),e+1,t),n=yo(r,!0,e+1)),n};Ie.toFixed=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?yo(a):(Pr(e,0,Zi),t===void 0?t=i.rounding:Pr(t,0,8),r=tt(new i(a),e+Ot(a)+1,t),n=yo(r.abs(),!1,e+Ot(r)+1),a.isneg()&&!a.isZero()?"-"+n:n)};Ie.toInteger=Ie.toint=function(){var e=this,t=e.constructor;return tt(new t(e),Ot(e)+1,t.rounding)};Ie.toNumber=function(){return+this};Ie.toPower=Ie.pow=function(e){var t,n,r,a,i,s,l=this,c=l.constructor,f=12,h=+(e=new c(e));if(!e.s)return new c(_n);if(l=new c(l),!l.s){if(e.s<1)throw Error(Gn+"Infinity");return l}if(l.eq(_n))return l;if(r=c.precision,e.eq(_n))return tt(l,r);if(t=e.e,n=e.d.length-1,s=t>=n,i=l.s,s){if((n=h<0?-h:h)<=f_){for(a=new c(_n),t=Math.ceil(r/st+4),ct=!1;n%2&&(a=a.times(l),h4(a.d,t)),n=Ji(n/2),n!==0;)l=l.times(l),h4(l.d,t);return ct=!0,e.s<0?new c(_n).div(a):tt(a,r)}}else if(i<0)throw Error(Gn+"NaN");return i=i<0&&e.d[Math.max(t,n)]&1?-1:1,l.s=1,ct=!1,a=e.times(Ps(l,r+f)),ct=!0,a=h_(a),a.s=i,a};Ie.toPrecision=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?(n=Ot(a),r=yo(a,n<=i.toExpNeg||n>=i.toExpPos)):(Pr(e,1,Zi),t===void 0?t=i.rounding:Pr(t,0,8),a=tt(new i(a),e,t),n=Ot(a),r=yo(a,e<=n||n<=i.toExpNeg,e)),r};Ie.toSignificantDigits=Ie.tosd=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(Pr(e,1,Zi),t===void 0?t=r.rounding:Pr(t,0,8)),tt(new r(n),e,t)};Ie.toString=Ie.valueOf=Ie.val=Ie.toJSON=Ie[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=Ot(e),n=e.constructor;return yo(e,t<=n.toExpNeg||t>=n.toExpPos)};function d_(e,t){var n,r,a,i,s,l,c,f,h=e.constructor,d=h.precision;if(!e.s||!t.s)return t.s||(t=new h(e)),ct?tt(t,d):t;if(c=e.d,f=t.d,s=e.e,a=t.e,c=c.slice(),i=s-a,i){for(i<0?(r=c,i=-i,l=f.length):(r=f,a=s,l=c.length),s=Math.ceil(d/st),l=s>l?s+1:l+1,i>l&&(i=l,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(l=c.length,i=f.length,l-i<0&&(i=l,r=f,f=c,c=r),n=0;i;)n=(c[--i]=c[i]+f[i]+n)/Ft|0,c[i]%=Ft;for(n&&(c.unshift(n),++a),l=c.length;c[--l]==0;)c.pop();return t.d=c,t.e=a,ct?tt(t,d):t}function Pr(e,t,n){if(e!==~~e||e<t||e>n)throw Error(vo+e)}function br(e){var t,n,r,a=e.length-1,i="",s=e[0];if(a>0){for(i+=s,t=1;t<a;t++)r=e[t]+"",n=st-r.length,n&&(i+=Sa(n)),i+=r;s=e[t],r=s+"",n=st-r.length,n&&(i+=Sa(n))}else if(s===0)return"0";for(;s%10===0;)s/=10;return i+s}var Vr=(function(){function e(r,a){var i,s=0,l=r.length;for(r=r.slice();l--;)i=r[l]*a+s,r[l]=i%Ft|0,s=i/Ft|0;return s&&r.unshift(s),r}function t(r,a,i,s){var l,c;if(i!=s)c=i>s?1:-1;else for(l=c=0;l<i;l++)if(r[l]!=a[l]){c=r[l]>a[l]?1:-1;break}return c}function n(r,a,i){for(var s=0;i--;)r[i]-=s,s=r[i]<a[i]?1:0,r[i]=s*Ft+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,s){var l,c,f,h,d,v,y,x,I,b,S,W,A,O,w,_,N,P,C=r.constructor,T=r.s==a.s?1:-1,j=r.d,E=a.d;if(!r.s)return new C(r);if(!a.s)throw Error(Gn+"Division by zero");for(c=r.e-a.e,N=E.length,w=j.length,y=new C(T),x=y.d=[],f=0;E[f]==(j[f]||0);)++f;if(E[f]>(j[f]||0)&&--c,i==null?W=i=C.precision:s?W=i+(Ot(r)-Ot(a))+1:W=i,W<0)return new C(0);if(W=W/st+2|0,f=0,N==1)for(h=0,E=E[0],W++;(f<w||h)&&W--;f++)A=h*Ft+(j[f]||0),x[f]=A/E|0,h=A%E|0;else{for(h=Ft/(E[0]+1)|0,h>1&&(E=e(E,h),j=e(j,h),N=E.length,w=j.length),O=N,I=j.slice(0,N),b=I.length;b<N;)I[b++]=0;P=E.slice(),P.unshift(0),_=E[0],E[1]>=Ft/2&&++_;do h=0,l=t(E,I,N,b),l<0?(S=I[0],N!=b&&(S=S*Ft+(I[1]||0)),h=S/_|0,h>1?(h>=Ft&&(h=Ft-1),d=e(E,h),v=d.length,b=I.length,l=t(d,I,v,b),l==1&&(h--,n(d,N<v?P:E,v))):(h==0&&(l=h=1),d=E.slice()),v=d.length,v<b&&d.unshift(0),n(I,d,b),l==-1&&(b=I.length,l=t(E,I,N,b),l<1&&(h++,n(I,N<b?P:E,b))),b=I.length):l===0&&(h++,I=[0]),x[f++]=h,l&&I[0]?I[b++]=j[O]||0:(I=[j[O]],b=1);while((O++<w||I[0]!==void 0)&&W--)}return x[0]||x.shift(),y.e=c,tt(y,s?i+Ot(y)+1:i)}})();function h_(e,t){var n,r,a,i,s,l,c=0,f=0,h=e.constructor,d=h.precision;if(Ot(e)>16)throw Error(ib+Ot(e));if(!e.s)return new h(_n);for(ct=!1,l=d,s=new h(.03125);e.abs().gte(.1);)e=e.times(s),f+=5;for(r=Math.log(uo(2,f))/Math.LN10*2+5|0,l+=r,n=a=i=new h(_n),h.precision=l;;){if(a=tt(a.times(e),l),n=n.times(++c),s=i.plus(Vr(a,n,l)),br(s.d).slice(0,l)===br(i.d).slice(0,l)){for(;f--;)i=tt(i.times(i),l);return h.precision=d,t==null?(ct=!0,tt(i,d)):i}i=s}}function Ot(e){for(var t=e.e*st,n=e.d[0];n>=10;n/=10)t++;return t}function zm(e,t,n){if(t>e.LN10.sd())throw ct=!0,n&&(e.precision=n),Error(Gn+"LN10 precision limit exceeded");return tt(new e(e.LN10),t)}function Sa(e){for(var t="";e--;)t+="0";return t}function Ps(e,t){var n,r,a,i,s,l,c,f,h,d=1,v=10,y=e,x=y.d,I=y.constructor,b=I.precision;if(y.s<1)throw Error(Gn+(y.s?"NaN":"-Infinity"));if(y.eq(_n))return new I(0);if(t==null?(ct=!1,f=b):f=t,y.eq(10))return t==null&&(ct=!0),zm(I,f);if(f+=v,I.precision=f,n=br(x),r=n.charAt(0),i=Ot(y),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)y=y.times(e),n=br(y.d),r=n.charAt(0),d++;i=Ot(y),r>1?(y=new I("0."+n),i++):y=new I(r+"."+n.slice(1))}else return c=zm(I,f+2,b).times(i+""),y=Ps(new I(r+"."+n.slice(1)),f-v).plus(c),I.precision=b,t==null?(ct=!0,tt(y,b)):y;for(l=s=y=Vr(y.minus(_n),y.plus(_n),f),h=tt(y.times(y),f),a=3;;){if(s=tt(s.times(h),f),c=l.plus(Vr(s,new I(a),f)),br(c.d).slice(0,f)===br(l.d).slice(0,f))return l=l.times(2),i!==0&&(l=l.plus(zm(I,f+2,b).times(i+""))),l=Vr(l,new I(d),f),I.precision=b,t==null?(ct=!0,tt(l,b)):l;l=c,a+=2}}function d4(e,t){var n,r,a;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(r,a),t){if(a-=r,n=n-r-1,e.e=Ji(n/st),e.d=[],r=(n+1)%st,n<0&&(r+=st),r<a){for(r&&e.d.push(+t.slice(0,r)),a-=st;r<a;)e.d.push(+t.slice(r,r+=st));t=t.slice(r),r=st-t.length}else r-=a;for(;r--;)t+="0";if(e.d.push(+t),ct&&(e.e>nc||e.e<-nc))throw Error(ib+n)}else e.s=0,e.e=0,e.d=[0];return e}function tt(e,t,n){var r,a,i,s,l,c,f,h,d=e.d;for(s=1,i=d[0];i>=10;i/=10)s++;if(r=t-s,r<0)r+=st,a=t,f=d[h=0];else{if(h=Math.ceil((r+1)/st),i=d.length,h>=i)return e;for(f=i=d[h],s=1;i>=10;i/=10)s++;r%=st,a=r-st+s}if(n!==void 0&&(i=uo(10,s-a-1),l=f/i%10|0,c=t<0||d[h+1]!==void 0||f%i,c=n<4?(l||c)&&(n==0||n==(e.s<0?3:2)):l>5||l==5&&(n==4||c||n==6&&(r>0?a>0?f/uo(10,s-a):0:d[h-1])%10&1||n==(e.s<0?8:7))),t<1||!d[0])return c?(i=Ot(e),d.length=1,t=t-i-1,d[0]=uo(10,(st-t%st)%st),e.e=Ji(-t/st)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(r==0?(d.length=h,i=1,h--):(d.length=h+1,i=uo(10,st-r),d[h]=a>0?(f/uo(10,s-a)%uo(10,a)|0)*i:0),c)for(;;)if(h==0){(d[0]+=i)==Ft&&(d[0]=1,++e.e);break}else{if(d[h]+=i,d[h]!=Ft)break;d[h--]=0,i=1}for(r=d.length;d[--r]===0;)d.pop();if(ct&&(e.e>nc||e.e<-nc))throw Error(ib+Ot(e));return e}function m_(e,t){var n,r,a,i,s,l,c,f,h,d,v=e.constructor,y=v.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new v(e),ct?tt(t,y):t;if(c=e.d,d=t.d,r=t.e,f=e.e,c=c.slice(),s=f-r,s){for(h=s<0,h?(n=c,s=-s,l=d.length):(n=d,r=f,l=c.length),a=Math.max(Math.ceil(y/st),l)+2,s>a&&(s=a,n.length=1),n.reverse(),a=s;a--;)n.push(0);n.reverse()}else{for(a=c.length,l=d.length,h=a<l,h&&(l=a),a=0;a<l;a++)if(c[a]!=d[a]){h=c[a]<d[a];break}s=0}for(h&&(n=c,c=d,d=n,t.s=-t.s),l=c.length,a=d.length-l;a>0;--a)c[l++]=0;for(a=d.length;a>s;){if(c[--a]<d[a]){for(i=a;i&&c[--i]===0;)c[i]=Ft-1;--c[i],c[a]+=Ft}c[a]-=d[a]}for(;c[--l]===0;)c.pop();for(;c[0]===0;c.shift())--r;return c[0]?(t.d=c,t.e=r,ct?tt(t,y):t):new v(0)}function yo(e,t,n){var r,a=Ot(e),i=br(e.d),s=i.length;return t?(n&&(r=n-s)>0?i=i.charAt(0)+"."+i.slice(1)+Sa(r):s>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(a<0?"e":"e+")+a):a<0?(i="0."+Sa(-a-1)+i,n&&(r=n-s)>0&&(i+=Sa(r))):a>=s?(i+=Sa(a+1-s),n&&(r=n-a-1)>0&&(i=i+"."+Sa(r))):((r=a+1)<s&&(i=i.slice(0,r)+"."+i.slice(r)),n&&(r=n-s)>0&&(a+1===s&&(i+="."),i+=Sa(r))),e.s<0?"-"+i:i}function h4(e,t){if(e.length>t)return e.length=t,!0}function v_(e){var t,n,r;function a(i){var s=this;if(!(s instanceof a))return new a(i);if(s.constructor=a,i instanceof a){s.s=i.s,s.e=i.e,s.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(vo+i);if(i>0)s.s=1;else if(i<0)i=-i,s.s=-1;else{s.s=0,s.e=0,s.d=[0];return}if(i===~~i&&i<1e7){s.e=0,s.d=[i];return}return d4(s,i.toString())}else if(typeof i!="string")throw Error(vo+i);if(i.charCodeAt(0)===45?(i=i.slice(1),s.s=-1):s.s=1,n7.test(i))d4(s,i);else throw Error(vo+i)}if(a.prototype=Ie,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=v_,a.config=a.set=r7,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return a.config(e),a}function r7(e){if(!e||typeof e!="object")throw Error(Gn+"Object expected");var t,n,r,a=["precision",1,Zi,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if((r=e[n=a[t]])!==void 0)if(Ji(r)===r&&r>=a[t+1]&&r<=a[t+2])this[n]=r;else throw Error(vo+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(vo+n+": "+r);return this}var ub=v_(t7);_n=new ub(1);const et=ub;function a7(e){return s7(e)||u7(e)||i7(e)||o7()}function o7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i7(e,t){if(e){if(typeof e=="string")return pg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pg(e,t)}}function u7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function s7(e){if(Array.isArray(e))return pg(e)}function pg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l7=function(t){return t},g_={},y_=function(t){return t===g_},m4=function(t){return function n(){return arguments.length===0||arguments.length===1&&y_(arguments.length<=0?void 0:arguments[0])?n:t.apply(void 0,arguments)}},p7=function e(t,n){return t===1?n:m4(function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.filter(function(l){return l!==g_}).length;return s>=t?n.apply(void 0,a):e(t-s,m4(function(){for(var l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];var h=a.map(function(d){return y_(d)?c.shift():d});return n.apply(void 0,a7(h).concat(c))}))})},u0=function(t){return p7(t.length,t)},cg=function(t,n){for(var r=[],a=t;a<n;++a)r[a-t]=a;return r},c7=u0(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(n){return t[n]}).map(e)}),f7=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return l7;var a=n.reverse(),i=a[0],s=a.slice(1);return function(){return s.reduce(function(l,c){return c(l)},i.apply(void 0,arguments))}},fg=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},b_=function(t){var n=null,r=null;return function(){for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return n&&i.every(function(l,c){return l===n[c]})||(n=i,r=t.apply(void 0,i)),r}};function d7(e){var t;return e===0?t=1:t=Math.floor(new et(e).abs().log(10).toNumber())+1,t}function h7(e,t,n){for(var r=new et(e),a=0,i=[];r.lt(t)&&a<1e5;)i.push(r.toNumber()),r=r.add(n),a++;return i}var m7=u0(function(e,t,n){var r=+e,a=+t;return r+n*(a-r)}),v7=u0(function(e,t,n){var r=t-+e;return r=r||1/0,(n-e)/r}),g7=u0(function(e,t,n){var r=t-+e;return r=r||1/0,Math.max(0,Math.min(1,(n-e)/r))});const s0={rangeStep:h7,getDigitCount:d7,interpolateNumber:m7,uninterpolateNumber:v7,uninterpolateTruncation:g7};function dg(e){return I7(e)||b7(e)||I_(e)||y7()}function y7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function I7(e){if(Array.isArray(e))return hg(e)}function Ss(e,t){return w7(e)||x7(e,t)||I_(e,t)||B7()}function B7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I_(e,t){if(e){if(typeof e=="string")return hg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hg(e,t)}}function hg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x7(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,a=!1,i=void 0;try{for(var s=e[Symbol.iterator](),l;!(r=(l=s.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(c){a=!0,i=c}finally{try{!r&&s.return!=null&&s.return()}finally{if(a)throw i}}return n}}function w7(e){if(Array.isArray(e))return e}function B_(e){var t=Ss(e,2),n=t[0],r=t[1],a=n,i=r;return n>r&&(a=r,i=n),[a,i]}function x_(e,t,n){if(e.lte(0))return new et(0);var r=s0.getDigitCount(e.toNumber()),a=new et(10).pow(r),i=e.div(a),s=r!==1?.05:.1,l=new et(Math.ceil(i.div(s).toNumber())).add(n).mul(s),c=l.mul(a);return t?c:new et(Math.ceil(c))}function P7(e,t,n){var r=1,a=new et(e);if(!a.isint()&&n){var i=Math.abs(e);i<1?(r=new et(10).pow(s0.getDigitCount(e)-1),a=new et(Math.floor(a.div(r).toNumber())).mul(r)):i>1&&(a=new et(Math.floor(e)))}else e===0?a=new et(Math.floor((t-1)/2)):n||(a=new et(Math.floor(e)));var s=Math.floor((t-1)/2),l=f7(c7(function(c){return a.add(new et(c-s).mul(r)).toNumber()}),cg);return l(0,t)}function w_(e,t,n,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(n-1)))return{step:new et(0),tickMin:new et(0),tickMax:new et(0)};var i=x_(new et(t).sub(e).div(n-1),r,a),s;e<=0&&t>=0?s=new et(0):(s=new et(e).add(t).div(2),s=s.sub(new et(s).mod(i)));var l=Math.ceil(s.sub(e).div(i).toNumber()),c=Math.ceil(new et(t).sub(s).div(i).toNumber()),f=l+c+1;return f>n?w_(e,t,n,r,a+1):(f<n&&(c=t>0?c+(n-f):c,l=t>0?l:l+(n-f)),{step:i,tickMin:s.sub(new et(l).mul(i)),tickMax:s.add(new et(c).mul(i))})}function S7(e){var t=Ss(e,2),n=t[0],r=t[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(a,2),l=B_([n,r]),c=Ss(l,2),f=c[0],h=c[1];if(f===-1/0||h===1/0){var d=h===1/0?[f].concat(dg(cg(0,a-1).map(function(){return 1/0}))):[].concat(dg(cg(0,a-1).map(function(){return-1/0})),[h]);return n>r?fg(d):d}if(f===h)return P7(f,a,i);var v=w_(f,h,s,i),y=v.step,x=v.tickMin,I=v.tickMax,b=s0.rangeStep(x,I.add(new et(.1).mul(y)),y);return n>r?fg(b):b}function W7(e,t){var n=Ss(e,2),r=n[0],a=n[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=B_([r,a]),l=Ss(s,2),c=l[0],f=l[1];if(c===-1/0||f===1/0)return[r,a];if(c===f)return[c];var h=Math.max(t,2),d=x_(new et(f).sub(c).div(h-1),i,0),v=[].concat(dg(s0.rangeStep(new et(c),new et(f).sub(new et(.99).mul(d)),d)),[f]);return r>a?fg(v):v}var A7=b_(S7),_7=b_(W7),M7="Invariant failed";function bo(e,t){throw new Error(M7)}var O7=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function xi(e){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xi(e)}function rc(){return rc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rc.apply(this,arguments)}function C7(e,t){return T7(e)||E7(e,t)||N7(e,t)||k7()}function k7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N7(e,t){if(e){if(typeof e=="string")return v4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v4(e,t)}}function v4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E7(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function T7(e){if(Array.isArray(e))return e}function R7(e,t){if(e==null)return{};var n=H7(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function H7(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function j7(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D7(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,W_(r.key),r)}}function $7(e,t,n){return t&&D7(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function L7(e,t,n){return t=ac(t),F7(e,P_()?Reflect.construct(t,n||[],ac(e).constructor):t.apply(e,n))}function F7(e,t){if(t&&(xi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return q7(e)}function q7(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(P_=function(){return!!e})()}function ac(e){return ac=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ac(e)}function z7(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&mg(e,t)}function mg(e,t){return mg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},mg(e,t)}function S_(e,t,n){return t=W_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W_(e){var t=U7(e,"string");return xi(t)=="symbol"?t:t+""}function U7(e,t){if(xi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(xi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var eu=(function(e){function t(){return j7(this,t),L7(this,t,arguments)}return z7(t,e),$7(t,[{key:"render",value:function(){var r=this.props,a=r.offset,i=r.layout,s=r.width,l=r.dataKey,c=r.data,f=r.dataPointFormatter,h=r.xAxis,d=r.yAxis,v=R7(r,O7),y=We(v,!1);this.props.direction==="x"&&h.type!=="number"&&bo();var x=c.map(function(I){var b=f(I,l),S=b.x,W=b.y,A=b.value,O=b.errorVal;if(!O)return null;var w=[],_,N;if(Array.isArray(O)){var P=C7(O,2);_=P[0],N=P[1]}else _=N=O;if(i==="vertical"){var C=h.scale,T=W+a,j=T+s,E=T-s,$=C(A-_),V=C(A+N);w.push({x1:V,y1:j,x2:V,y2:E}),w.push({x1:$,y1:T,x2:V,y2:T}),w.push({x1:$,y1:j,x2:$,y2:E})}else if(i==="horizontal"){var G=d.scale,z=S+a,Q=z-s,L=z+s,K=G(A-_),Y=G(A+N);w.push({x1:Q,y1:Y,x2:L,y2:Y}),w.push({x1:z,y1:K,x2:z,y2:Y}),w.push({x1:Q,y1:K,x2:L,y2:K})}return R.createElement(De,rc({className:"recharts-errorBar",key:"bar-".concat(w.map(function(H){return"".concat(H.x1,"-").concat(H.x2,"-").concat(H.y1,"-").concat(H.y2)}))},y),w.map(function(H){return R.createElement("line",rc({},H,{key:"line-".concat(H.x1,"-").concat(H.x2,"-").concat(H.y1,"-").concat(H.y2)}))}))});return R.createElement(De,{className:"recharts-errorBars"},x)}}])})(R.Component);S_(eu,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});S_(eu,"displayName","ErrorBar");function Ws(e){"@babel/helpers - typeof";return Ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ws(e)}function g4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function no(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?g4(Object(n),!0).forEach(function(r){V7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function V7(e,t,n){return t=G7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G7(e){var t=K7(e,"string");return Ws(t)=="symbol"?t:t+""}function K7(e,t){if(Ws(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ws(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var A_=function(t){var n=t.children,r=t.formattedGraphicalItems,a=t.legendWidth,i=t.legendContent,s=Sn(n,Oa);if(!s)return null;var l=Oa.defaultProps,c=l!==void 0?no(no({},l),s.props):{},f;return s.props&&s.props.payload?f=s.props&&s.props.payload:i==="children"?f=(r||[]).reduce(function(h,d){var v=d.item,y=d.props,x=y.sectors||y.data||[];return h.concat(x.map(function(I){return{type:s.props.iconType||v.props.legendType,value:I.name,color:I.fill,payload:I}}))},[]):f=(r||[]).map(function(h){var d=h.item,v=d.type.defaultProps,y=v!==void 0?no(no({},v),d.props):{},x=y.dataKey,I=y.name,b=y.legendType,S=y.hide;return{inactive:S,dataKey:x,type:c.iconType||b||"square",color:sb(d),value:I||x,payload:y}}),no(no(no({},c),Oa.getWithHeight(s,a)),{},{payload:f,item:s})};function As(e){"@babel/helpers - typeof";return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},As(e)}function y4(e){return Z7(e)||X7(e)||Y7(e)||Q7()}function Q7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y7(e,t){if(e){if(typeof e=="string")return vg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vg(e,t)}}function X7(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Z7(e){if(Array.isArray(e))return vg(e)}function vg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b4(Object(n),!0).forEach(function(r){ci(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ci(e,t,n){return t=J7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J7(e){var t=e9(e,"string");return As(t)=="symbol"?t:t+""}function e9(e,t){if(As(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(As(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lt(e,t,n){return Ne(e)||Ne(t)?n:Rt(t)?Mn(e,t,n):ke(t)?t(e):n}function as(e,t,n,r){var a=Z8(e,function(l){return lt(l,t)});if(n==="number"){var i=a.filter(function(l){return le(l)||parseFloat(l)});return i.length?[i0(i),Aa(i)]:[1/0,-1/0]}var s=r?a.filter(function(l){return!Ne(l)}):a;return s.map(function(l){return Rt(l)||l instanceof Date?l:""})}var t9=function(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=-1,l=(n=r==null?void 0:r.length)!==null&&n!==void 0?n:0;if(l<=1)return 0;if(i&&i.axisType==="angleAxis"&&Math.abs(Math.abs(i.range[1]-i.range[0])-360)<=1e-6)for(var c=i.range,f=0;f<l;f++){var h=f>0?a[f-1].coordinate:a[l-1].coordinate,d=a[f].coordinate,v=f>=l-1?a[0].coordinate:a[f+1].coordinate,y=void 0;if(an(d-h)!==an(v-d)){var x=[];if(an(v-d)===an(c[1]-c[0])){y=v;var I=d+c[1]-c[0];x[0]=Math.min(I,(I+h)/2),x[1]=Math.max(I,(I+h)/2)}else{y=h;var b=v+c[1]-c[0];x[0]=Math.min(d,(b+d)/2),x[1]=Math.max(d,(b+d)/2)}var S=[Math.min(d,(y+d)/2),Math.max(d,(y+d)/2)];if(t>S[0]&&t<=S[1]||t>=x[0]&&t<=x[1]){s=a[f].index;break}}else{var W=Math.min(h,v),A=Math.max(h,v);if(t>(W+d)/2&&t<=(A+d)/2){s=a[f].index;break}}}else for(var O=0;O<l;O++)if(O===0&&t<=(r[O].coordinate+r[O+1].coordinate)/2||O>0&&O<l-1&&t>(r[O].coordinate+r[O-1].coordinate)/2&&t<=(r[O].coordinate+r[O+1].coordinate)/2||O===l-1&&t>(r[O].coordinate+r[O-1].coordinate)/2){s=r[O].index;break}return s},sb=function(t){var n,r=t,a=r.type.displayName,i=(n=t.type)!==null&&n!==void 0&&n.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,s=i.stroke,l=i.fill,c;switch(a){case"Line":c=s;break;case"Area":case"Radar":c=s&&s!=="none"?s:l;break;default:c=l;break}return c},n9=function(t){var n=t.barSize,r=t.totalSize,a=t.stackGroups,i=a===void 0?{}:a;if(!i)return{};for(var s={},l=Object.keys(i),c=0,f=l.length;c<f;c++)for(var h=i[l[c]].stackGroups,d=Object.keys(h),v=0,y=d.length;v<y;v++){var x=h[d[v]],I=x.items,b=x.cateAxisId,S=I.filter(function(N){return Ur(N.type).indexOf("Bar")>=0});if(S&&S.length){var W=S[0].type.defaultProps,A=W!==void 0?bt(bt({},W),S[0].props):S[0].props,O=A.barSize,w=A[b];s[w]||(s[w]=[]);var _=Ne(O)?n:O;s[w].push({item:S[0],stackList:S.slice(1),barSize:Ne(_)?void 0:on(_,r,0)})}}return s},r9=function(t){var n=t.barGap,r=t.barCategoryGap,a=t.bandSize,i=t.sizeList,s=i===void 0?[]:i,l=t.maxBarSize,c=s.length;if(c<1)return null;var f=on(n,a,0,!0),h,d=[];if(s[0].barSize===+s[0].barSize){var v=!1,y=a/c,x=s.reduce(function(O,w){return O+w.barSize||0},0);x+=(c-1)*f,x>=a&&(x-=(c-1)*f,f=0),x>=a&&y>0&&(v=!0,y*=.9,x=c*y);var I=(a-x)/2>>0,b={offset:I-f,size:0};h=s.reduce(function(O,w){var _={item:w.item,position:{offset:b.offset+b.size+f,size:v?y:w.barSize}},N=[].concat(y4(O),[_]);return b=N[N.length-1].position,w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){N.push({item:P,position:b})}),N},d)}else{var S=on(r,a,0,!0);a-2*S-(c-1)*f<=0&&(f=0);var W=(a-2*S-(c-1)*f)/c;W>1&&(W>>=0);var A=l===+l?Math.min(W,l):W;h=s.reduce(function(O,w,_){var N=[].concat(y4(O),[{item:w.item,position:{offset:S+(W+f)*_+(W-A)/2,size:A}}]);return w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){N.push({item:P,position:N[N.length-1].position})}),N},d)}return h},a9=function(t,n,r,a){var i=r.children,s=r.width,l=r.margin,c=s-(l.left||0)-(l.right||0),f=A_({children:i,legendWidth:c});if(f){var h=a||{},d=h.width,v=h.height,y=f.align,x=f.verticalAlign,I=f.layout;if((I==="vertical"||I==="horizontal"&&x==="middle")&&y!=="center"&&le(t[y]))return bt(bt({},t),{},ci({},y,t[y]+(d||0)));if((I==="horizontal"||I==="vertical"&&y==="center")&&x!=="middle"&&le(t[x]))return bt(bt({},t),{},ci({},x,t[x]+(v||0)))}return t},o9=function(t,n,r){return Ne(n)?!0:t==="horizontal"?n==="yAxis":t==="vertical"||r==="x"?n==="xAxis":r==="y"?n==="yAxis":!0},__=function(t,n,r,a,i){var s=n.props.children,l=sn(s,eu).filter(function(f){return o9(a,i,f.props.direction)});if(l&&l.length){var c=l.map(function(f){return f.props.dataKey});return t.reduce(function(f,h){var d=lt(h,r);if(Ne(d))return f;var v=Array.isArray(d)?[i0(d),Aa(d)]:[d,d],y=c.reduce(function(x,I){var b=lt(h,I,0),S=v[0]-Math.abs(Array.isArray(b)?b[0]:b),W=v[1]+Math.abs(Array.isArray(b)?b[1]:b);return[Math.min(S,x[0]),Math.max(W,x[1])]},[1/0,-1/0]);return[Math.min(y[0],f[0]),Math.max(y[1],f[1])]},[1/0,-1/0])}return null},i9=function(t,n,r,a,i){var s=n.map(function(l){return __(t,l,r,i,a)}).filter(function(l){return!Ne(l)});return s&&s.length?s.reduce(function(l,c){return[Math.min(l[0],c[0]),Math.max(l[1],c[1])]},[1/0,-1/0]):null},M_=function(t,n,r,a,i){var s=n.map(function(c){var f=c.props.dataKey;return r==="number"&&f&&__(t,c,f,a)||as(t,f,r,i)});if(r==="number")return s.reduce(function(c,f){return[Math.min(c[0],f[0]),Math.max(c[1],f[1])]},[1/0,-1/0]);var l={};return s.reduce(function(c,f){for(var h=0,d=f.length;h<d;h++)l[f[h]]||(l[f[h]]=!0,c.push(f[h]));return c},[])},O_=function(t,n){return t==="horizontal"&&n==="xAxis"||t==="vertical"&&n==="yAxis"||t==="centric"&&n==="angleAxis"||t==="radial"&&n==="radiusAxis"},C_=function(t,n,r,a){if(a)return t.map(function(c){return c.coordinate});var i,s,l=t.map(function(c){return c.coordinate===n&&(i=!0),c.coordinate===r&&(s=!0),c.coordinate});return i||l.push(n),s||l.push(r),l},Fr=function(t,n,r){if(!t)return null;var a=t.scale,i=t.duplicateDomain,s=t.type,l=t.range,c=t.realScaleType==="scaleBand"?a.bandwidth()/2:2,f=(n||r)&&s==="category"&&a.bandwidth?a.bandwidth()/c:0;if(f=t.axisType==="angleAxis"&&(l==null?void 0:l.length)>=2?an(l[0]-l[1])*2*f:f,n&&(t.ticks||t.niceTicks)){var h=(t.ticks||t.niceTicks).map(function(d){var v=i?i.indexOf(d):d;return{coordinate:a(v)+f,value:d,offset:f}});return h.filter(function(d){return!Qi(d.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(d,v){return{coordinate:a(d)+f,value:d,index:v,offset:f}}):a.ticks&&!r?a.ticks(t.tickCount).map(function(d){return{coordinate:a(d)+f,value:d,offset:f}}):a.domain().map(function(d,v){return{coordinate:a(d)+f,value:i?i[d]:d,index:v,offset:f}})},Um=new WeakMap,Bp=function(t,n){if(typeof n!="function")return t;Um.has(t)||Um.set(t,new WeakMap);var r=Um.get(t);if(r.has(n))return r.get(n);var a=function(){t.apply(void 0,arguments),n.apply(void 0,arguments)};return r.set(n,a),a},k_=function(t,n,r){var a=t.scale,i=t.type,s=t.layout,l=t.axisType;if(a==="auto")return s==="radial"&&l==="radiusAxis"?{scale:bs(),realScaleType:"band"}:s==="radial"&&l==="angleAxis"?{scale:Zp(),realScaleType:"linear"}:i==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0||n.indexOf("ComposedChart")>=0&&!r)?{scale:rs(),realScaleType:"point"}:i==="category"?{scale:bs(),realScaleType:"band"}:{scale:Zp(),realScaleType:"linear"};if(Ks(a)){var c="scale".concat(Uc(a));return{scale:(a4[c]||rs)(),realScaleType:a4[c]?c:"point"}}return ke(a)?{scale:a}:{scale:rs(),realScaleType:"point"}},I4=1e-4,N_=function(t){var n=t.domain();if(!(!n||n.length<=2)){var r=n.length,a=t.range(),i=Math.min(a[0],a[1])-I4,s=Math.max(a[0],a[1])+I4,l=t(n[0]),c=t(n[r-1]);(l<i||l>s||c<i||c>s)&&t.domain([n[0],n[r-1]])}},u9=function(t,n){if(!t)return null;for(var r=0,a=t.length;r<a;r++)if(t[r].item===n)return t[r].position;return null},s9=function(t,n){if(!n||n.length!==2||!le(n[0])||!le(n[1]))return t;var r=Math.min(n[0],n[1]),a=Math.max(n[0],n[1]),i=[t[0],t[1]];return(!le(t[0])||t[0]<r)&&(i[0]=r),(!le(t[1])||t[1]>a)&&(i[1]=a),i[0]>a&&(i[0]=a),i[1]<r&&(i[1]=r),i},l9=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var i=0,s=0,l=0;l<n;++l){var c=Qi(t[l][r][1])?t[l][r][0]:t[l][r][1];c>=0?(t[l][r][0]=i,t[l][r][1]=i+c,i=t[l][r][1]):(t[l][r][0]=s,t[l][r][1]=s+c,s=t[l][r][1])}},p9=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var i=0,s=0;s<n;++s){var l=Qi(t[s][r][1])?t[s][r][0]:t[s][r][1];l>=0?(t[s][r][0]=i,t[s][r][1]=i+l,i=t[s][r][1]):(t[s][r][0]=0,t[s][r][1]=0)}},c9={sign:l9,expand:ZH,none:hi,silhouette:JH,wiggle:ej,positive:p9},f9=function(t,n,r){var a=n.map(function(l){return l.props.dataKey}),i=c9[r],s=XH().keys(a).value(function(l,c){return+lt(l,c,0)}).order(Vv).offset(i);return s(t)},d9=function(t,n,r,a,i,s){if(!t)return null;var l=s?n.reverse():n,c={},f=l.reduce(function(d,v){var y,x=(y=v.type)!==null&&y!==void 0&&y.defaultProps?bt(bt({},v.type.defaultProps),v.props):v.props,I=x.stackId,b=x.hide;if(b)return d;var S=x[r],W=d[S]||{hasStack:!1,stackGroups:{}};if(Rt(I)){var A=W.stackGroups[I]||{numericAxisId:r,cateAxisId:a,items:[]};A.items.push(v),W.hasStack=!0,W.stackGroups[I]=A}else W.stackGroups[ja("_stackId_")]={numericAxisId:r,cateAxisId:a,items:[v]};return bt(bt({},d),{},ci({},S,W))},c),h={};return Object.keys(f).reduce(function(d,v){var y=f[v];if(y.hasStack){var x={};y.stackGroups=Object.keys(y.stackGroups).reduce(function(I,b){var S=y.stackGroups[b];return bt(bt({},I),{},ci({},b,{numericAxisId:r,cateAxisId:a,items:S.items,stackedData:f9(t,S.items,i)}))},x)}return bt(bt({},d),{},ci({},v,y))},h)},E_=function(t,n){var r=n.realScaleType,a=n.type,i=n.tickCount,s=n.originalDomain,l=n.allowDecimals,c=r||n.scale;if(c!=="auto"&&c!=="linear")return null;if(i&&a==="number"&&s&&(s[0]==="auto"||s[1]==="auto")){var f=t.domain();if(!f.length)return null;var h=A7(f,i,l);return t.domain([i0(h),Aa(h)]),{niceTicks:h}}if(i&&a==="number"){var d=t.domain(),v=_7(d,i,l);return{niceTicks:v}}return null};function wi(e){var t=e.axis,n=e.ticks,r=e.bandSize,a=e.entry,i=e.index,s=e.dataKey;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!Ne(a[t.dataKey])){var l=Np(n,"value",a[t.dataKey]);if(l)return l.coordinate+r/2}return n[i]?n[i].coordinate+r/2:null}var c=lt(a,Ne(s)?t.dataKey:s);return Ne(c)?null:t.scale(c)}var B4=function(t){var n=t.axis,r=t.ticks,a=t.offset,i=t.bandSize,s=t.entry,l=t.index;if(n.type==="category")return r[l]?r[l].coordinate+a:null;var c=lt(s,n.dataKey,n.domain[l]);return Ne(c)?null:n.scale(c)-i/2+a},h9=function(t){var n=t.numericAxis,r=n.scale.domain();if(n.type==="number"){var a=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]);return a<=0&&i>=0?0:i<0?i:a}return r[0]},m9=function(t,n){var r,a=(r=t.type)!==null&&r!==void 0&&r.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,i=a.stackId;if(Rt(i)){var s=n[i];if(s){var l=s.items.indexOf(t);return l>=0?s.stackedData[l]:null}}return null},v9=function(t){return t.reduce(function(n,r){return[i0(r.concat([n[0]]).filter(le)),Aa(r.concat([n[1]]).filter(le))]},[1/0,-1/0])},T_=function(t,n,r){return Object.keys(t).reduce(function(a,i){var s=t[i],l=s.stackedData,c=l.reduce(function(f,h){var d=v9(h.slice(n,r+1));return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);return[Math.min(c[0],a[0]),Math.max(c[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},x4=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,w4=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,gg=function(t,n,r){if(ke(t))return t(n,r);if(!Array.isArray(t))return n;var a=[];if(le(t[0]))a[0]=r?t[0]:Math.min(t[0],n[0]);else if(x4.test(t[0])){var i=+x4.exec(t[0])[1];a[0]=n[0]-i}else ke(t[0])?a[0]=t[0](n[0]):a[0]=n[0];if(le(t[1]))a[1]=r?t[1]:Math.max(t[1],n[1]);else if(w4.test(t[1])){var s=+w4.exec(t[1])[1];a[1]=n[1]+s}else ke(t[1])?a[1]=t[1](n[1]):a[1]=n[1];return a},oc=function(t,n,r){if(t&&t.scale&&t.scale.bandwidth){var a=t.scale.bandwidth();if(!r||a>0)return a}if(t&&n&&n.length>=2){for(var i=Ty(n,function(d){return d.coordinate}),s=1/0,l=1,c=i.length;l<c;l++){var f=i[l],h=i[l-1];s=Math.min((f.coordinate||0)-(h.coordinate||0),s)}return s===1/0?0:s}return r?void 0:0},P4=function(t,n,r){return!t||!t.length||Ta(t,Mn(r,"type.defaultProps.domain"))?n:t},R_=function(t,n){var r=t.type.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,a=r.dataKey,i=r.name,s=r.unit,l=r.formatter,c=r.tooltipType,f=r.chartType,h=r.hide;return bt(bt({},We(t,!1)),{},{dataKey:a,unit:s,formatter:l,name:i||a,color:sb(t),value:lt(n,a),type:c,payload:n,chartType:f,hide:h})};function _s(e){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_s(e)}function S4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function jr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?S4(Object(n),!0).forEach(function(r){H_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function H_(e,t,n){return t=g9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g9(e){var t=y9(e,"string");return _s(t)=="symbol"?t:t+""}function y9(e,t){if(_s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b9(e,t){return w9(e)||x9(e,t)||B9(e,t)||I9()}function I9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B9(e,t){if(e){if(typeof e=="string")return W4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W4(e,t)}}function W4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function w9(e){if(Array.isArray(e))return e}var ic=Math.PI/180,P9=function(t){return t*180/Math.PI},ot=function(t,n,r,a){return{x:t+Math.cos(-ic*a)*r,y:n+Math.sin(-ic*a)*r}},j_=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(t-(r.left||0)-(r.right||0)),Math.abs(n-(r.top||0)-(r.bottom||0)))/2},S9=function(t,n,r,a,i){var s=t.width,l=t.height,c=t.startAngle,f=t.endAngle,h=on(t.cx,s,s/2),d=on(t.cy,l,l/2),v=j_(s,l,r),y=on(t.innerRadius,v,0),x=on(t.outerRadius,v,v*.8),I=Object.keys(n);return I.reduce(function(b,S){var W=n[S],A=W.domain,O=W.reversed,w;if(Ne(W.range))a==="angleAxis"?w=[c,f]:a==="radiusAxis"&&(w=[y,x]),O&&(w=[w[1],w[0]]);else{w=W.range;var _=w,N=b9(_,2);c=N[0],f=N[1]}var P=k_(W,i),C=P.realScaleType,T=P.scale;T.domain(A).range(w),N_(T);var j=E_(T,jr(jr({},W),{},{realScaleType:C})),E=jr(jr(jr({},W),j),{},{range:w,radius:x,realScaleType:C,scale:T,cx:h,cy:d,innerRadius:y,outerRadius:x,startAngle:c,endAngle:f});return jr(jr({},b),{},H_({},S,E))},{})},W9=function(t,n){var r=t.x,a=t.y,i=n.x,s=n.y;return Math.sqrt(Math.pow(r-i,2)+Math.pow(a-s,2))},A9=function(t,n){var r=t.x,a=t.y,i=n.cx,s=n.cy,l=W9({x:r,y:a},{x:i,y:s});if(l<=0)return{radius:l};var c=(r-i)/l,f=Math.acos(c);return a>s&&(f=2*Math.PI-f),{radius:l,angle:P9(f),angleInRadian:f}},_9=function(t){var n=t.startAngle,r=t.endAngle,a=Math.floor(n/360),i=Math.floor(r/360),s=Math.min(a,i);return{startAngle:n-s*360,endAngle:r-s*360}},M9=function(t,n){var r=n.startAngle,a=n.endAngle,i=Math.floor(r/360),s=Math.floor(a/360),l=Math.min(i,s);return t+l*360},A4=function(t,n){var r=t.x,a=t.y,i=A9({x:r,y:a},n),s=i.radius,l=i.angle,c=n.innerRadius,f=n.outerRadius;if(s<c||s>f)return!1;if(s===0)return!0;var h=_9(n),d=h.startAngle,v=h.endAngle,y=l,x;if(d<=v){for(;y>v;)y-=360;for(;y<d;)y+=360;x=y>=d&&y<=v}else{for(;y>d;)y-=360;for(;y<v;)y+=360;x=y>=v&&y<=d}return x?jr(jr({},n),{},{radius:s,angle:M9(y,n)}):null},D_=function(t){return!X.isValidElement(t)&&!ke(t)&&typeof t!="boolean"?t.className:""};function Ms(e){"@babel/helpers - typeof";return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ms(e)}var O9=["offset"];function C9(e){return T9(e)||E9(e)||N9(e)||k9()}function k9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N9(e,t){if(e){if(typeof e=="string")return yg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yg(e,t)}}function E9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function T9(e){if(Array.isArray(e))return yg(e)}function yg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R9(e,t){if(e==null)return{};var n=H9(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function H9(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function _4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_4(Object(n),!0).forEach(function(r){j9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function j9(e,t,n){return t=D9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D9(e){var t=$9(e,"string");return Ms(t)=="symbol"?t:t+""}function $9(e,t){if(Ms(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Os.apply(this,arguments)}var L9=function(t){var n=t.value,r=t.formatter,a=Ne(t.children)?n:t.children;return ke(r)?r(a):a},F9=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),360);return r*a},q9=function(t,n,r){var a=t.position,i=t.viewBox,s=t.offset,l=t.className,c=i,f=c.cx,h=c.cy,d=c.innerRadius,v=c.outerRadius,y=c.startAngle,x=c.endAngle,I=c.clockWise,b=(d+v)/2,S=F9(y,x),W=S>=0?1:-1,A,O;a==="insideStart"?(A=y+W*s,O=I):a==="insideEnd"?(A=x-W*s,O=!I):a==="end"&&(A=x+W*s,O=I),O=S<=0?O:!O;var w=ot(f,h,b,A),_=ot(f,h,b,A+(O?1:-1)*359),N="M".concat(w.x,",").concat(w.y,`
    A`).concat(b,",").concat(b,",0,1,").concat(O?0:1,`,
    `).concat(_.x,",").concat(_.y),P=Ne(t.id)?ja("recharts-radial-line-"):t.id;return R.createElement("text",Os({},r,{dominantBaseline:"central",className:He("recharts-radial-bar-label",l)}),R.createElement("defs",null,R.createElement("path",{id:P,d:N})),R.createElement("textPath",{xlinkHref:"#".concat(P)},n))},z9=function(t){var n=t.viewBox,r=t.offset,a=t.position,i=n,s=i.cx,l=i.cy,c=i.innerRadius,f=i.outerRadius,h=i.startAngle,d=i.endAngle,v=(h+d)/2;if(a==="outside"){var y=ot(s,l,f+r,v),x=y.x,I=y.y;return{x,y:I,textAnchor:x>=s?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"end"};var b=(c+f)/2,S=ot(s,l,b,v),W=S.x,A=S.y;return{x:W,y:A,textAnchor:"middle",verticalAnchor:"middle"}},U9=function(t){var n=t.viewBox,r=t.parentViewBox,a=t.offset,i=t.position,s=n,l=s.x,c=s.y,f=s.width,h=s.height,d=h>=0?1:-1,v=d*a,y=d>0?"end":"start",x=d>0?"start":"end",I=f>=0?1:-1,b=I*a,S=I>0?"end":"start",W=I>0?"start":"end";if(i==="top"){var A={x:l+f/2,y:c-d*a,textAnchor:"middle",verticalAnchor:y};return Tt(Tt({},A),r?{height:Math.max(c-r.y,0),width:f}:{})}if(i==="bottom"){var O={x:l+f/2,y:c+h+v,textAnchor:"middle",verticalAnchor:x};return Tt(Tt({},O),r?{height:Math.max(r.y+r.height-(c+h),0),width:f}:{})}if(i==="left"){var w={x:l-b,y:c+h/2,textAnchor:S,verticalAnchor:"middle"};return Tt(Tt({},w),r?{width:Math.max(w.x-r.x,0),height:h}:{})}if(i==="right"){var _={x:l+f+b,y:c+h/2,textAnchor:W,verticalAnchor:"middle"};return Tt(Tt({},_),r?{width:Math.max(r.x+r.width-_.x,0),height:h}:{})}var N=r?{width:f,height:h}:{};return i==="insideLeft"?Tt({x:l+b,y:c+h/2,textAnchor:W,verticalAnchor:"middle"},N):i==="insideRight"?Tt({x:l+f-b,y:c+h/2,textAnchor:S,verticalAnchor:"middle"},N):i==="insideTop"?Tt({x:l+f/2,y:c+v,textAnchor:"middle",verticalAnchor:x},N):i==="insideBottom"?Tt({x:l+f/2,y:c+h-v,textAnchor:"middle",verticalAnchor:y},N):i==="insideTopLeft"?Tt({x:l+b,y:c+v,textAnchor:W,verticalAnchor:x},N):i==="insideTopRight"?Tt({x:l+f-b,y:c+v,textAnchor:S,verticalAnchor:x},N):i==="insideBottomLeft"?Tt({x:l+b,y:c+h-v,textAnchor:W,verticalAnchor:y},N):i==="insideBottomRight"?Tt({x:l+f-b,y:c+h-v,textAnchor:S,verticalAnchor:y},N):Ki(i)&&(le(i.x)||lo(i.x))&&(le(i.y)||lo(i.y))?Tt({x:l+on(i.x,f),y:c+on(i.y,h),textAnchor:"end",verticalAnchor:"end"},N):Tt({x:l+f/2,y:c+h/2,textAnchor:"middle",verticalAnchor:"middle"},N)},V9=function(t){return"cx"in t&&le(t.cx)};function qt(e){var t=e.offset,n=t===void 0?5:t,r=R9(e,O9),a=Tt({offset:n},r),i=a.viewBox,s=a.position,l=a.value,c=a.children,f=a.content,h=a.className,d=h===void 0?"":h,v=a.textBreakAll;if(!i||Ne(l)&&Ne(c)&&!X.isValidElement(f)&&!ke(f))return null;if(X.isValidElement(f))return X.cloneElement(f,a);var y;if(ke(f)){if(y=X.createElement(f,a),X.isValidElement(y))return y}else y=L9(a);var x=V9(i),I=We(a,!0);if(x&&(s==="insideStart"||s==="insideEnd"||s==="end"))return q9(a,y,I);var b=x?z9(a):U9(a);return R.createElement(go,Os({className:He("recharts-label",d)},I,b,{breakAll:v}),y)}qt.displayName="Label";var $_=function(t){var n=t.cx,r=t.cy,a=t.angle,i=t.startAngle,s=t.endAngle,l=t.r,c=t.radius,f=t.innerRadius,h=t.outerRadius,d=t.x,v=t.y,y=t.top,x=t.left,I=t.width,b=t.height,S=t.clockWise,W=t.labelViewBox;if(W)return W;if(le(I)&&le(b)){if(le(d)&&le(v))return{x:d,y:v,width:I,height:b};if(le(y)&&le(x))return{x:y,y:x,width:I,height:b}}return le(d)&&le(v)?{x:d,y:v,width:0,height:0}:le(n)&&le(r)?{cx:n,cy:r,startAngle:i||a||0,endAngle:s||a||0,innerRadius:f||0,outerRadius:h||c||l||0,clockWise:S}:t.viewBox?t.viewBox:{}},G9=function(t,n){return t?t===!0?R.createElement(qt,{key:"label-implicit",viewBox:n}):Rt(t)?R.createElement(qt,{key:"label-implicit",viewBox:n,value:t}):X.isValidElement(t)?t.type===qt?X.cloneElement(t,{key:"label-implicit",viewBox:n}):R.createElement(qt,{key:"label-implicit",content:t,viewBox:n}):ke(t)?R.createElement(qt,{key:"label-implicit",content:t,viewBox:n}):Ki(t)?R.createElement(qt,Os({viewBox:n},t,{key:"label-implicit"})):null:null},K9=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&r&&!t.label)return null;var a=t.children,i=$_(t),s=sn(a,qt).map(function(c,f){return X.cloneElement(c,{viewBox:n||i,key:"label-".concat(f)})});if(!r)return s;var l=G9(t.label,n||i);return[l].concat(C9(s))};qt.parseViewBox=$_;qt.renderCallByParent=K9;var Vm,M4;function Q9(){if(M4)return Vm;M4=1;function e(t){var n=t==null?0:t.length;return n?t[n-1]:void 0}return Vm=e,Vm}var Y9=Q9();const X9=Xe(Y9);function Cs(e){"@babel/helpers - typeof";return Cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cs(e)}var Z9=["valueAccessor"],J9=["data","dataKey","clockWise","id","textBreakAll"];function eF(e){return aF(e)||rF(e)||nF(e)||tF()}function tF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nF(e,t){if(e){if(typeof e=="string")return bg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bg(e,t)}}function rF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function aF(e){if(Array.isArray(e))return bg(e)}function bg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function uc(){return uc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uc.apply(this,arguments)}function O4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?O4(Object(n),!0).forEach(function(r){oF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oF(e,t,n){return t=iF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iF(e){var t=uF(e,"string");return Cs(t)=="symbol"?t:t+""}function uF(e,t){if(Cs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Cs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k4(e,t){if(e==null)return{};var n=sF(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sF(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var lF=function(t){return Array.isArray(t.value)?X9(t.value):t.value};function lr(e){var t=e.valueAccessor,n=t===void 0?lF:t,r=k4(e,Z9),a=r.data,i=r.dataKey,s=r.clockWise,l=r.id,c=r.textBreakAll,f=k4(r,J9);return!a||!a.length?null:R.createElement(De,{className:"recharts-label-list"},a.map(function(h,d){var v=Ne(i)?n(h,d):lt(h&&h.payload,i),y=Ne(l)?{}:{id:"".concat(l,"-").concat(d)};return R.createElement(qt,uc({},We(h,!0),f,y,{parentViewBox:h.parentViewBox,value:v,textBreakAll:c,viewBox:qt.parseViewBox(Ne(s)?h:C4(C4({},h),{},{clockWise:s})),key:"label-".concat(d),index:d}))}))}lr.displayName="LabelList";function pF(e,t){return e?e===!0?R.createElement(lr,{key:"labelList-implicit",data:t}):R.isValidElement(e)||ke(e)?R.createElement(lr,{key:"labelList-implicit",data:t,content:e}):Ki(e)?R.createElement(lr,uc({data:t},e,{key:"labelList-implicit"})):null:null}function cF(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&n&&!e.label)return null;var r=e.children,a=sn(r,lr).map(function(s,l){return X.cloneElement(s,{data:t,key:"labelList-".concat(l)})});if(!n)return a;var i=pF(e.label,t);return[i].concat(eF(a))}lr.renderCallByParent=cF;function ks(e){"@babel/helpers - typeof";return ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ks(e)}function Ig(){return Ig=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ig.apply(this,arguments)}function N4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N4(Object(n),!0).forEach(function(r){fF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fF(e,t,n){return t=dF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dF(e){var t=hF(e,"string");return ks(t)=="symbol"?t:t+""}function hF(e,t){if(ks(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ks(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var mF=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),359.999);return r*a},xp=function(t){var n=t.cx,r=t.cy,a=t.radius,i=t.angle,s=t.sign,l=t.isExternal,c=t.cornerRadius,f=t.cornerIsExternal,h=c*(l?1:-1)+a,d=Math.asin(c/h)/ic,v=f?i:i+s*d,y=ot(n,r,h,v),x=ot(n,r,a,v),I=f?i-s*d:i,b=ot(n,r,h*Math.cos(d*ic),I);return{center:y,circleTangency:x,lineTangency:b,theta:d}},L_=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,i=t.outerRadius,s=t.startAngle,l=t.endAngle,c=mF(s,l),f=s+c,h=ot(n,r,i,s),d=ot(n,r,i,f),v="M ".concat(h.x,",").concat(h.y,`
    A `).concat(i,",").concat(i,`,0,
    `).concat(+(Math.abs(c)>180),",").concat(+(s>f),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(a>0){var y=ot(n,r,a,s),x=ot(n,r,a,f);v+="L ".concat(x.x,",").concat(x.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(c)>180),",").concat(+(s<=f),`,
            `).concat(y.x,",").concat(y.y," Z")}else v+="L ".concat(n,",").concat(r," Z");return v},vF=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,i=t.outerRadius,s=t.cornerRadius,l=t.forceCornerRadius,c=t.cornerIsExternal,f=t.startAngle,h=t.endAngle,d=an(h-f),v=xp({cx:n,cy:r,radius:i,angle:f,sign:d,cornerRadius:s,cornerIsExternal:c}),y=v.circleTangency,x=v.lineTangency,I=v.theta,b=xp({cx:n,cy:r,radius:i,angle:h,sign:-d,cornerRadius:s,cornerIsExternal:c}),S=b.circleTangency,W=b.lineTangency,A=b.theta,O=c?Math.abs(f-h):Math.abs(f-h)-I-A;if(O<0)return l?"M ".concat(x.x,",").concat(x.y,`
        a`).concat(s,",").concat(s,",0,0,1,").concat(s*2,`,0
        a`).concat(s,",").concat(s,",0,0,1,").concat(-s*2,`,0
      `):L_({cx:n,cy:r,innerRadius:a,outerRadius:i,startAngle:f,endAngle:h});var w="M ".concat(x.x,",").concat(x.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(y.x,",").concat(y.y,`
    A`).concat(i,",").concat(i,",0,").concat(+(O>180),",").concat(+(d<0),",").concat(S.x,",").concat(S.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(W.x,",").concat(W.y,`
  `);if(a>0){var _=xp({cx:n,cy:r,radius:a,angle:f,sign:d,isExternal:!0,cornerRadius:s,cornerIsExternal:c}),N=_.circleTangency,P=_.lineTangency,C=_.theta,T=xp({cx:n,cy:r,radius:a,angle:h,sign:-d,isExternal:!0,cornerRadius:s,cornerIsExternal:c}),j=T.circleTangency,E=T.lineTangency,$=T.theta,V=c?Math.abs(f-h):Math.abs(f-h)-C-$;if(V<0&&s===0)return"".concat(w,"L").concat(n,",").concat(r,"Z");w+="L".concat(E.x,",").concat(E.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(j.x,",").concat(j.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(V>180),",").concat(+(d>0),",").concat(N.x,",").concat(N.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(P.x,",").concat(P.y,"Z")}else w+="L".concat(n,",").concat(r,"Z");return w},gF={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},F_=function(t){var n=E4(E4({},gF),t),r=n.cx,a=n.cy,i=n.innerRadius,s=n.outerRadius,l=n.cornerRadius,c=n.forceCornerRadius,f=n.cornerIsExternal,h=n.startAngle,d=n.endAngle,v=n.className;if(s<i||h===d)return null;var y=He("recharts-sector",v),x=s-i,I=on(l,x,0,!0),b;return I>0&&Math.abs(h-d)<360?b=vF({cx:r,cy:a,innerRadius:i,outerRadius:s,cornerRadius:Math.min(I,x/2),forceCornerRadius:c,cornerIsExternal:f,startAngle:h,endAngle:d}):b=L_({cx:r,cy:a,innerRadius:i,outerRadius:s,startAngle:h,endAngle:d}),R.createElement("path",Ig({},We(n,!0),{className:y,d:b,role:"img"}))};function Ns(e){"@babel/helpers - typeof";return Ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ns(e)}function Bg(){return Bg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bg.apply(this,arguments)}function T4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T4(Object(n),!0).forEach(function(r){yF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yF(e,t,n){return t=bF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bF(e){var t=IF(e,"string");return Ns(t)=="symbol"?t:t+""}function IF(e,t){if(Ns(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ns(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var H4={curveBasisClosed:$H,curveBasisOpen:LH,curveBasis:DH,curveBumpX:SH,curveBumpY:WH,curveLinearClosed:FH,curveLinear:Gc,curveMonotoneX:qH,curveMonotoneY:zH,curveNatural:UH,curveStep:VH,curveStepAfter:KH,curveStepBefore:GH},wp=function(t){return t.x===+t.x&&t.y===+t.y},Ku=function(t){return t.x},Qu=function(t){return t.y},BF=function(t,n){if(ke(t))return t;var r="curve".concat(Uc(t));return(r==="curveMonotone"||r==="curveBump")&&n?H4["".concat(r).concat(n==="vertical"?"Y":"X")]:H4[r]||Gc},xF=function(t){var n=t.type,r=n===void 0?"linear":n,a=t.points,i=a===void 0?[]:a,s=t.baseLine,l=t.layout,c=t.connectNulls,f=c===void 0?!1:c,h=BF(r,l),d=f?i.filter(function(I){return wp(I)}):i,v;if(Array.isArray(s)){var y=f?s.filter(function(I){return wp(I)}):s,x=d.map(function(I,b){return R4(R4({},I),{},{base:y[b]})});return l==="vertical"?v=hp().y(Qu).x1(Ku).x0(function(I){return I.base.x}):v=hp().x(Ku).y1(Qu).y0(function(I){return I.base.y}),v.defined(wp).curve(h),v(x)}return l==="vertical"&&le(s)?v=hp().y(Qu).x1(Ku).x0(s):le(s)?v=hp().x(Ku).y1(Qu).y0(s):v=LW().x(Ku).y(Qu),v.defined(wp).curve(h),v(d)},ka=function(t){var n=t.className,r=t.points,a=t.path,i=t.pathRef;if((!r||!r.length)&&!a)return null;var s=r&&r.length?xF(t):a;return R.createElement("path",Bg({},We(t,!1),Ep(t),{className:He("recharts-curve",n),d:s,ref:i}))},Gm={exports:{}},Km,j4;function wF(){if(j4)return Km;j4=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Km=e,Km}var Qm,D4;function PF(){if(D4)return Qm;D4=1;var e=wF();function t(){}function n(){}return n.resetWarningCache=t,Qm=function(){function r(s,l,c,f,h,d){if(d!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},Qm}var $4;function SF(){return $4||($4=1,Gm.exports=PF()()),Gm.exports}var WF=SF();const Ye=Xe(WF),{getOwnPropertyNames:AF,getOwnPropertySymbols:_F}=Object,{hasOwnProperty:MF}=Object.prototype;function Ym(e,t){return function(r,a,i){return e(r,a,i)&&t(r,a,i)}}function Pp(e){return function(n,r,a){if(!n||!r||typeof n!="object"||typeof r!="object")return e(n,r,a);const{cache:i}=a,s=i.get(n),l=i.get(r);if(s&&l)return s===r&&l===n;i.set(n,r),i.set(r,n);const c=e(n,r,a);return i.delete(n),i.delete(r),c}}function OF(e){return e!=null?e[Symbol.toStringTag]:void 0}function L4(e){return AF(e).concat(_F(e))}const CF=Object.hasOwn||((e,t)=>MF.call(e,t));function Po(e,t){return e===t||!e&&!t&&e!==e&&t!==t}const kF="__v",NF="__o",EF="_owner",{getOwnPropertyDescriptor:F4,keys:q4}=Object;function TF(e,t){return e.byteLength===t.byteLength&&sc(new Uint8Array(e),new Uint8Array(t))}function RF(e,t,n){let r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(!n.equals(e[r],t[r],r,r,e,t,n))return!1;return!0}function HF(e,t){return e.byteLength===t.byteLength&&sc(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}function jF(e,t){return Po(e.getTime(),t.getTime())}function DF(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function $F(e,t){return e===t}function z4(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),i=e.entries();let s,l,c=0;for(;(s=i.next())&&!s.done;){const f=t.entries();let h=!1,d=0;for(;(l=f.next())&&!l.done;){if(a[d]){d++;continue}const v=s.value,y=l.value;if(n.equals(v[0],y[0],c,d,e,t,n)&&n.equals(v[1],y[1],v[0],y[0],e,t,n)){h=a[d]=!0;break}d++}if(!h)return!1;c++}return!0}const LF=Po;function FF(e,t,n){const r=q4(e);let a=r.length;if(q4(t).length!==a)return!1;for(;a-- >0;)if(!q_(e,t,n,r[a]))return!1;return!0}function Yu(e,t,n){const r=L4(e);let a=r.length;if(L4(t).length!==a)return!1;let i,s,l;for(;a-- >0;)if(i=r[a],!q_(e,t,n,i)||(s=F4(e,i),l=F4(t,i),(s||l)&&(!s||!l||s.configurable!==l.configurable||s.enumerable!==l.enumerable||s.writable!==l.writable)))return!1;return!0}function qF(e,t){return Po(e.valueOf(),t.valueOf())}function zF(e,t){return e.source===t.source&&e.flags===t.flags}function U4(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),i=e.values();let s,l;for(;(s=i.next())&&!s.done;){const c=t.values();let f=!1,h=0;for(;(l=c.next())&&!l.done;){if(!a[h]&&n.equals(s.value,l.value,s.value,l.value,e,t,n)){f=a[h]=!0;break}h++}if(!f)return!1}return!0}function sc(e,t){let n=e.byteLength;if(t.byteLength!==n||e.byteOffset!==t.byteOffset)return!1;for(;n-- >0;)if(e[n]!==t[n])return!1;return!0}function UF(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function q_(e,t,n,r){return(r===EF||r===NF||r===kF)&&(e.$$typeof||t.$$typeof)?!0:CF(t,r)&&n.equals(e[r],t[r],r,r,e,t,n)}const VF="[object ArrayBuffer]",GF="[object Arguments]",KF="[object Boolean]",QF="[object DataView]",YF="[object Date]",XF="[object Error]",ZF="[object Map]",JF="[object Number]",eq="[object Object]",tq="[object RegExp]",nq="[object Set]",rq="[object String]",aq={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},oq="[object URL]",iq=Object.prototype.toString;function uq({areArrayBuffersEqual:e,areArraysEqual:t,areDataViewsEqual:n,areDatesEqual:r,areErrorsEqual:a,areFunctionsEqual:i,areMapsEqual:s,areNumbersEqual:l,areObjectsEqual:c,arePrimitiveWrappersEqual:f,areRegExpsEqual:h,areSetsEqual:d,areTypedArraysEqual:v,areUrlsEqual:y,unknownTagComparators:x}){return function(b,S,W){if(b===S)return!0;if(b==null||S==null)return!1;const A=typeof b;if(A!==typeof S)return!1;if(A!=="object")return A==="number"?l(b,S,W):A==="function"?i(b,S,W):!1;const O=b.constructor;if(O!==S.constructor)return!1;if(O===Object)return c(b,S,W);if(Array.isArray(b))return t(b,S,W);if(O===Date)return r(b,S,W);if(O===RegExp)return h(b,S,W);if(O===Map)return s(b,S,W);if(O===Set)return d(b,S,W);const w=iq.call(b);if(w===YF)return r(b,S,W);if(w===tq)return h(b,S,W);if(w===ZF)return s(b,S,W);if(w===nq)return d(b,S,W);if(w===eq)return typeof b.then!="function"&&typeof S.then!="function"&&c(b,S,W);if(w===oq)return y(b,S,W);if(w===XF)return a(b,S,W);if(w===GF)return c(b,S,W);if(aq[w])return v(b,S,W);if(w===VF)return e(b,S,W);if(w===QF)return n(b,S,W);if(w===KF||w===JF||w===rq)return f(b,S,W);if(x){let _=x[w];if(!_){const N=OF(b);N&&(_=x[N])}if(_)return _(b,S,W)}return!1}}function sq({circular:e,createCustomConfig:t,strict:n}){let r={areArrayBuffersEqual:TF,areArraysEqual:n?Yu:RF,areDataViewsEqual:HF,areDatesEqual:jF,areErrorsEqual:DF,areFunctionsEqual:$F,areMapsEqual:n?Ym(z4,Yu):z4,areNumbersEqual:LF,areObjectsEqual:n?Yu:FF,arePrimitiveWrappersEqual:qF,areRegExpsEqual:zF,areSetsEqual:n?Ym(U4,Yu):U4,areTypedArraysEqual:n?Ym(sc,Yu):sc,areUrlsEqual:UF,unknownTagComparators:void 0};if(t&&(r=Object.assign({},r,t(r))),e){const a=Pp(r.areArraysEqual),i=Pp(r.areMapsEqual),s=Pp(r.areObjectsEqual),l=Pp(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:a,areMapsEqual:i,areObjectsEqual:s,areSetsEqual:l})}return r}function lq(e){return function(t,n,r,a,i,s,l){return e(t,n,l)}}function pq({circular:e,comparator:t,createState:n,equals:r,strict:a}){if(n)return function(l,c){const{cache:f=e?new WeakMap:void 0,meta:h}=n();return t(l,c,{cache:f,equals:r,meta:h,strict:a})};if(e)return function(l,c){return t(l,c,{cache:new WeakMap,equals:r,meta:void 0,strict:a})};const i={cache:void 0,equals:r,meta:void 0,strict:a};return function(l,c){return t(l,c,i)}}const cq=La();La({strict:!0});La({circular:!0});La({circular:!0,strict:!0});La({createInternalComparator:()=>Po});La({strict:!0,createInternalComparator:()=>Po});La({circular:!0,createInternalComparator:()=>Po});La({circular:!0,createInternalComparator:()=>Po,strict:!0});function La(e={}){const{circular:t=!1,createInternalComparator:n,createState:r,strict:a=!1}=e,i=sq(e),s=uq(i),l=n?n(s):lq(s);return pq({circular:t,comparator:s,createState:r,equals:l,strict:a})}function fq(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function V4(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=-1,r=function a(i){n<0&&(n=i),i-n>t?(e(i),n=-1):fq(a)};requestAnimationFrame(r)}function xg(e){"@babel/helpers - typeof";return xg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xg(e)}function dq(e){return gq(e)||vq(e)||mq(e)||hq()}function hq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mq(e,t){if(e){if(typeof e=="string")return G4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G4(e,t)}}function G4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gq(e){if(Array.isArray(e))return e}function yq(){var e={},t=function(){return null},n=!1,r=function a(i){if(!n){if(Array.isArray(i)){if(!i.length)return;var s=i,l=dq(s),c=l[0],f=l.slice(1);if(typeof c=="number"){V4(a.bind(null,f),c);return}a(c),V4(a.bind(null,f));return}xg(i)==="object"&&(e=i,t(e)),typeof i=="function"&&i()}};return{stop:function(){n=!0},start:function(i){n=!1,r(i)},subscribe:function(i){return t=i,function(){t=function(){return null}}}}}function Es(e){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Es(e)}function K4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Q4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?K4(Object(n),!0).forEach(function(r){z_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function z_(e,t,n){return t=bq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bq(e){var t=Iq(e,"string");return Es(t)==="symbol"?t:String(t)}function Iq(e,t){if(Es(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Es(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Bq=function(t,n){return[Object.keys(t),Object.keys(n)].reduce(function(r,a){return r.filter(function(i){return a.includes(i)})})},xq=function(t){return t},wq=function(t){return t.replace(/([A-Z])/g,function(n){return"-".concat(n.toLowerCase())})},os=function(t,n){return Object.keys(n).reduce(function(r,a){return Q4(Q4({},r),{},z_({},a,t(a,n[a])))},{})},Y4=function(t,n,r){return t.map(function(a){return"".concat(wq(a)," ").concat(n,"ms ").concat(r)}).join(",")};function Pq(e,t){return Aq(e)||Wq(e,t)||U_(e,t)||Sq()}function Sq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wq(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function Aq(e){if(Array.isArray(e))return e}function _q(e){return Cq(e)||Oq(e)||U_(e)||Mq()}function Mq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U_(e,t){if(e){if(typeof e=="string")return wg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wg(e,t)}}function Oq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cq(e){if(Array.isArray(e))return wg(e)}function wg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var lc=1e-4,V_=function(t,n){return[0,3*t,3*n-6*t,3*t-3*n+1]},G_=function(t,n){return t.map(function(r,a){return r*Math.pow(n,a)}).reduce(function(r,a){return r+a})},X4=function(t,n){return function(r){var a=V_(t,n);return G_(a,r)}},kq=function(t,n){return function(r){var a=V_(t,n),i=[].concat(_q(a.map(function(s,l){return s*l}).slice(1)),[0]);return G_(i,r)}},Z4=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0],i=n[1],s=n[2],l=n[3];if(n.length===1)switch(n[0]){case"linear":a=0,i=0,s=1,l=1;break;case"ease":a=.25,i=.1,s=.25,l=1;break;case"ease-in":a=.42,i=0,s=1,l=1;break;case"ease-out":a=.42,i=0,s=.58,l=1;break;case"ease-in-out":a=0,i=0,s=.58,l=1;break;default:{var c=n[0].split("(");if(c[0]==="cubic-bezier"&&c[1].split(")")[0].split(",").length===4){var f=c[1].split(")")[0].split(",").map(function(b){return parseFloat(b)}),h=Pq(f,4);a=h[0],i=h[1],s=h[2],l=h[3]}}}var d=X4(a,s),v=X4(i,l),y=kq(a,s),x=function(S){return S>1?1:S<0?0:S},I=function(S){for(var W=S>1?1:S,A=W,O=0;O<8;++O){var w=d(A)-W,_=y(A);if(Math.abs(w-W)<lc||_<lc)return v(A);A=x(A-w/_)}return v(A)};return I.isStepper=!1,I},Nq=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.stiff,r=n===void 0?100:n,a=t.damping,i=a===void 0?8:a,s=t.dt,l=s===void 0?17:s,c=function(h,d,v){var y=-(h-d)*r,x=v*i,I=v+(y-x)*l/1e3,b=v*l/1e3+h;return Math.abs(b-d)<lc&&Math.abs(I)<lc?[d,0]:[b,I]};return c.isStepper=!0,c.dt=l,c},Eq=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return Z4(a);case"spring":return Nq();default:if(a.split("(")[0]==="cubic-bezier")return Z4(a)}return typeof a=="function"?a:null};function Ts(e){"@babel/helpers - typeof";return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ts(e)}function J4(e){return Hq(e)||Rq(e)||K_(e)||Tq()}function Tq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hq(e){if(Array.isArray(e))return Sg(e)}function eS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Gt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eS(Object(n),!0).forEach(function(r){Pg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pg(e,t,n){return t=jq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jq(e){var t=Dq(e,"string");return Ts(t)==="symbol"?t:String(t)}function Dq(e,t){if(Ts(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ts(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $q(e,t){return qq(e)||Fq(e,t)||K_(e,t)||Lq()}function Lq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K_(e,t){if(e){if(typeof e=="string")return Sg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sg(e,t)}}function Sg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fq(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function qq(e){if(Array.isArray(e))return e}var pc=function(t,n,r){return t+(n-t)*r},Wg=function(t){var n=t.from,r=t.to;return n!==r},zq=function e(t,n,r){var a=os(function(i,s){if(Wg(s)){var l=t(s.from,s.to,s.velocity),c=$q(l,2),f=c[0],h=c[1];return Gt(Gt({},s),{},{from:f,velocity:h})}return s},n);return r<1?os(function(i,s){return Wg(s)?Gt(Gt({},s),{},{velocity:pc(s.velocity,a[i].velocity,r),from:pc(s.from,a[i].from,r)}):s},n):e(t,a,r-1)};const Uq=(function(e,t,n,r,a){var i=Bq(e,t),s=i.reduce(function(b,S){return Gt(Gt({},b),{},Pg({},S,[e[S],t[S]]))},{}),l=i.reduce(function(b,S){return Gt(Gt({},b),{},Pg({},S,{from:e[S],velocity:0,to:t[S]}))},{}),c=-1,f,h,d=function(){return null},v=function(){return os(function(S,W){return W.from},l)},y=function(){return!Object.values(l).filter(Wg).length},x=function(S){f||(f=S);var W=S-f,A=W/n.dt;l=zq(n,l,A),a(Gt(Gt(Gt({},e),t),v())),f=S,y()||(c=requestAnimationFrame(d))},I=function(S){h||(h=S);var W=(S-h)/r,A=os(function(w,_){return pc.apply(void 0,J4(_).concat([n(W)]))},s);if(a(Gt(Gt(Gt({},e),t),A)),W<1)c=requestAnimationFrame(d);else{var O=os(function(w,_){return pc.apply(void 0,J4(_).concat([n(1)]))},s);a(Gt(Gt(Gt({},e),t),O))}};return d=n.isStepper?x:I,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(c)}}});function Pi(e){"@babel/helpers - typeof";return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pi(e)}var Vq=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function Gq(e,t){if(e==null)return{};var n=Kq(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Kq(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Xm(e){return Zq(e)||Xq(e)||Yq(e)||Qq()}function Qq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yq(e,t){if(e){if(typeof e=="string")return Ag(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ag(e,t)}}function Xq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zq(e){if(Array.isArray(e))return Ag(e)}function Ag(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tS(Object(n),!0).forEach(function(r){ts(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ts(e,t,n){return t=Q_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jq(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ez(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Q_(r.key),r)}}function tz(e,t,n){return t&&ez(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Q_(e){var t=nz(e,"string");return Pi(t)==="symbol"?t:String(t)}function nz(e,t){if(Pi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Pi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function rz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_g(e,t)}function _g(e,t){return _g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},_g(e,t)}function az(e){var t=oz();return function(){var r=cc(e),a;if(t){var i=cc(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Mg(this,a)}}function Mg(e,t){if(t&&(Pi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Og(e)}function Og(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cc(e){return cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},cc(e)}var Kn=(function(e){rz(n,e);var t=az(n);function n(r,a){var i;Jq(this,n),i=t.call(this,r,a);var s=i.props,l=s.isActive,c=s.attributeName,f=s.from,h=s.to,d=s.steps,v=s.children,y=s.duration;if(i.handleStyleChange=i.handleStyleChange.bind(Og(i)),i.changeStyle=i.changeStyle.bind(Og(i)),!l||y<=0)return i.state={style:{}},typeof v=="function"&&(i.state={style:h}),Mg(i);if(d&&d.length)i.state={style:d[0].style};else if(f){if(typeof v=="function")return i.state={style:f},Mg(i);i.state={style:c?ts({},c,f):f}}else i.state={style:{}};return i}return tz(n,[{key:"componentDidMount",value:function(){var a=this.props,i=a.isActive,s=a.canBegin;this.mounted=!0,!(!i||!s)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var i=this.props,s=i.isActive,l=i.canBegin,c=i.attributeName,f=i.shouldReAnimate,h=i.to,d=i.from,v=this.state.style;if(l){if(!s){var y={style:c?ts({},c,h):h};this.state&&v&&(c&&v[c]!==h||!c&&v!==h)&&this.setState(y);return}if(!(cq(a.to,h)&&a.canBegin&&a.isActive)){var x=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var I=x||f?d:a.to;if(this.state&&v){var b={style:c?ts({},c,I):I};(c&&v[c]!==I||!c&&v!==I)&&this.setState(b)}this.runAnimation(rr(rr({},this.props),{},{from:I,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var i=this,s=a.from,l=a.to,c=a.duration,f=a.easing,h=a.begin,d=a.onAnimationEnd,v=a.onAnimationStart,y=Uq(s,l,Eq(f),c,this.changeStyle),x=function(){i.stopJSAnimation=y()};this.manager.start([v,h,x,c,d])}},{key:"runStepAnimation",value:function(a){var i=this,s=a.steps,l=a.begin,c=a.onAnimationStart,f=s[0],h=f.style,d=f.duration,v=d===void 0?0:d,y=function(I,b,S){if(S===0)return I;var W=b.duration,A=b.easing,O=A===void 0?"ease":A,w=b.style,_=b.properties,N=b.onAnimationEnd,P=S>0?s[S-1]:b,C=_||Object.keys(w);if(typeof O=="function"||O==="spring")return[].concat(Xm(I),[i.runJSAnimation.bind(i,{from:P.style,to:w,duration:W,easing:O}),W]);var T=Y4(C,W,O),j=rr(rr(rr({},P.style),w),{},{transition:T});return[].concat(Xm(I),[j,W,N]).filter(xq)};return this.manager.start([c].concat(Xm(s.reduce(y,[h,Math.max(v,l)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=yq());var i=a.begin,s=a.duration,l=a.attributeName,c=a.to,f=a.easing,h=a.onAnimationStart,d=a.onAnimationEnd,v=a.steps,y=a.children,x=this.manager;if(this.unSubscribe=x.subscribe(this.handleStyleChange),typeof f=="function"||typeof y=="function"||f==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var I=l?ts({},l,c):c,b=Y4(Object.keys(I),s,f);x.start([h,i,rr(rr({},I),{},{transition:b}),s,d])}},{key:"render",value:function(){var a=this.props,i=a.children;a.begin;var s=a.duration;a.attributeName,a.easing;var l=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var c=Gq(a,Vq),f=X.Children.count(i),h=this.state.style;if(typeof i=="function")return i(h);if(!l||f===0||s<=0)return i;var d=function(y){var x=y.props,I=x.style,b=I===void 0?{}:I,S=x.className,W=X.cloneElement(y,rr(rr({},c),{},{style:rr(rr({},b),h),className:S}));return W};return f===1?d(X.Children.only(i)):R.createElement("div",null,X.Children.map(i,function(v){return d(v)}))}}]),n})(X.PureComponent);Kn.displayName="Animate";Kn.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Kn.propTypes={from:Ye.oneOfType([Ye.object,Ye.string]),to:Ye.oneOfType([Ye.object,Ye.string]),attributeName:Ye.string,duration:Ye.number,begin:Ye.number,easing:Ye.oneOfType([Ye.string,Ye.func]),steps:Ye.arrayOf(Ye.shape({duration:Ye.number.isRequired,style:Ye.object.isRequired,easing:Ye.oneOfType([Ye.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Ye.func]),properties:Ye.arrayOf("string"),onAnimationEnd:Ye.func})),children:Ye.oneOfType([Ye.node,Ye.func]),isActive:Ye.bool,canBegin:Ye.bool,onAnimationEnd:Ye.func,shouldReAnimate:Ye.bool,onAnimationStart:Ye.func,onAnimationReStart:Ye.func};function Rs(e){"@babel/helpers - typeof";return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rs(e)}function fc(){return fc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fc.apply(this,arguments)}function iz(e,t){return pz(e)||lz(e,t)||sz(e,t)||uz()}function uz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sz(e,t){if(e){if(typeof e=="string")return nS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nS(e,t)}}function nS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lz(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function pz(e){if(Array.isArray(e))return e}function rS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function aS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rS(Object(n),!0).forEach(function(r){cz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cz(e,t,n){return t=fz(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fz(e){var t=dz(e,"string");return Rs(t)=="symbol"?t:t+""}function dz(e,t){if(Rs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Rs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var oS=function(t,n,r,a,i){var s=Math.min(Math.abs(r)/2,Math.abs(a)/2),l=a>=0?1:-1,c=r>=0?1:-1,f=a>=0&&r>=0||a<0&&r<0?1:0,h;if(s>0&&i instanceof Array){for(var d=[0,0,0,0],v=0,y=4;v<y;v++)d[v]=i[v]>s?s:i[v];h="M".concat(t,",").concat(n+l*d[0]),d[0]>0&&(h+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(f,",").concat(t+c*d[0],",").concat(n)),h+="L ".concat(t+r-c*d[1],",").concat(n),d[1]>0&&(h+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(f,`,
        `).concat(t+r,",").concat(n+l*d[1])),h+="L ".concat(t+r,",").concat(n+a-l*d[2]),d[2]>0&&(h+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(f,`,
        `).concat(t+r-c*d[2],",").concat(n+a)),h+="L ".concat(t+c*d[3],",").concat(n+a),d[3]>0&&(h+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(f,`,
        `).concat(t,",").concat(n+a-l*d[3])),h+="Z"}else if(s>0&&i===+i&&i>0){var x=Math.min(s,i);h="M ".concat(t,",").concat(n+l*x,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+c*x,",").concat(n,`
            L `).concat(t+r-c*x,",").concat(n,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+r,",").concat(n+l*x,`
            L `).concat(t+r,",").concat(n+a-l*x,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t+r-c*x,",").concat(n+a,`
            L `).concat(t+c*x,",").concat(n+a,`
            A `).concat(x,",").concat(x,",0,0,").concat(f,",").concat(t,",").concat(n+a-l*x," Z")}else h="M ".concat(t,",").concat(n," h ").concat(r," v ").concat(a," h ").concat(-r," Z");return h},hz=function(t,n){if(!t||!n)return!1;var r=t.x,a=t.y,i=n.x,s=n.y,l=n.width,c=n.height;if(Math.abs(l)>0&&Math.abs(c)>0){var f=Math.min(i,i+l),h=Math.max(i,i+l),d=Math.min(s,s+c),v=Math.max(s,s+c);return r>=f&&r<=h&&a>=d&&a<=v}return!1},mz={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},lb=function(t){var n=aS(aS({},mz),t),r=X.useRef(),a=X.useState(-1),i=iz(a,2),s=i[0],l=i[1];X.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var O=r.current.getTotalLength();O&&l(O)}catch{}},[]);var c=n.x,f=n.y,h=n.width,d=n.height,v=n.radius,y=n.className,x=n.animationEasing,I=n.animationDuration,b=n.animationBegin,S=n.isAnimationActive,W=n.isUpdateAnimationActive;if(c!==+c||f!==+f||h!==+h||d!==+d||h===0||d===0)return null;var A=He("recharts-rectangle",y);return W?R.createElement(Kn,{canBegin:s>0,from:{width:h,height:d,x:c,y:f},to:{width:h,height:d,x:c,y:f},duration:I,animationEasing:x,isActive:W},function(O){var w=O.width,_=O.height,N=O.x,P=O.y;return R.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,isActive:S,easing:x},R.createElement("path",fc({},We(n,!0),{className:A,d:oS(N,P,w,_,v),ref:r})))}):R.createElement("path",fc({},We(n,!0),{className:A,d:oS(c,f,h,d,v)}))},vz=["points","className","baseLinePoints","connectNulls"];function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}function gz(e,t){if(e==null)return{};var n=yz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function iS(e){return xz(e)||Bz(e)||Iz(e)||bz()}function bz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iz(e,t){if(e){if(typeof e=="string")return Cg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cg(e,t)}}function Bz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xz(e){if(Array.isArray(e))return Cg(e)}function Cg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var uS=function(t){return t&&t.x===+t.x&&t.y===+t.y},wz=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=[[]];return t.forEach(function(r){uS(r)?n[n.length-1].push(r):n[n.length-1].length>0&&n.push([])}),uS(t[0])&&n[n.length-1].push(t[0]),n[n.length-1].length<=0&&(n=n.slice(0,-1)),n},is=function(t,n){var r=wz(t);n&&(r=[r.reduce(function(i,s){return[].concat(iS(i),iS(s))},[])]);var a=r.map(function(i){return i.reduce(function(s,l,c){return"".concat(s).concat(c===0?"M":"L").concat(l.x,",").concat(l.y)},"")}).join("");return r.length===1?"".concat(a,"Z"):a},Pz=function(t,n,r){var a=is(t,r);return"".concat(a.slice(-1)==="Z"?a.slice(0,-1):a,"L").concat(is(n.reverse(),r).slice(1))},Sz=function(t){var n=t.points,r=t.className,a=t.baseLinePoints,i=t.connectNulls,s=gz(t,vz);if(!n||!n.length)return null;var l=He("recharts-polygon",r);if(a&&a.length){var c=s.stroke&&s.stroke!=="none",f=Pz(n,a,i);return R.createElement("g",{className:l},R.createElement("path",oi({},We(s,!0),{fill:f.slice(-1)==="Z"?s.fill:"none",stroke:"none",d:f})),c?R.createElement("path",oi({},We(s,!0),{fill:"none",d:is(n,i)})):null,c?R.createElement("path",oi({},We(s,!0),{fill:"none",d:is(a,i)})):null)}var h=is(n,i);return R.createElement("path",oi({},We(s,!0),{fill:h.slice(-1)==="Z"?s.fill:"none",className:l,d:h}))};function kg(){return kg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kg.apply(this,arguments)}var tl=function(t){var n=t.cx,r=t.cy,a=t.r,i=t.className,s=He("recharts-dot",i);return n===+n&&r===+r&&a===+a?R.createElement("circle",kg({},We(t,!1),Ep(t),{className:s,cx:n,cy:r,r:a})):null};function Hs(e){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hs(e)}var Wz=["x","y","top","left","width","height","className"];function Ng(){return Ng=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ng.apply(this,arguments)}function sS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Az(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sS(Object(n),!0).forEach(function(r){_z(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _z(e,t,n){return t=Mz(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mz(e){var t=Oz(e,"string");return Hs(t)=="symbol"?t:t+""}function Oz(e,t){if(Hs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Cz(e,t){if(e==null)return{};var n=kz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function kz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Nz=function(t,n,r,a,i,s){return"M".concat(t,",").concat(i,"v").concat(a,"M").concat(s,",").concat(n,"h").concat(r)},Ez=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,i=a===void 0?0:a,s=t.top,l=s===void 0?0:s,c=t.left,f=c===void 0?0:c,h=t.width,d=h===void 0?0:h,v=t.height,y=v===void 0?0:v,x=t.className,I=Cz(t,Wz),b=Az({x:r,y:i,top:l,left:f,width:d,height:y},I);return!le(r)||!le(i)||!le(d)||!le(y)||!le(l)||!le(f)?null:R.createElement("path",Ng({},We(b,!0),{className:He("recharts-cross",x),d:Nz(r,i,d,y,l,f)}))},Zm,lS;function Tz(){if(lS)return Zm;lS=1;var e=o0(),t=p_(),n=Ar();function r(a,i){return a&&a.length?e(a,n(i,2),t):void 0}return Zm=r,Zm}var Rz=Tz();const Hz=Xe(Rz);var Jm,pS;function jz(){if(pS)return Jm;pS=1;var e=o0(),t=Ar(),n=c_();function r(a,i){return a&&a.length?e(a,t(i,2),n):void 0}return Jm=r,Jm}var Dz=jz();const $z=Xe(Dz);var Lz=["cx","cy","angle","ticks","axisLine"],Fz=["ticks","tick","angle","tickFormatter","stroke"];function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(e)}function us(){return us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},us.apply(this,arguments)}function cS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ro(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cS(Object(n),!0).forEach(function(r){l0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fS(e,t){if(e==null)return{};var n=qz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function qz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function zz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function dS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,X_(r.key),r)}}function Uz(e,t,n){return t&&dS(e.prototype,t),n&&dS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Vz(e,t,n){return t=dc(t),Gz(e,Y_()?Reflect.construct(t,n||[],dc(e).constructor):t.apply(e,n))}function Gz(e,t){if(t&&(Si(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Kz(e)}function Kz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Y_=function(){return!!e})()}function dc(e){return dc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},dc(e)}function Qz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Eg(e,t)}function Eg(e,t){return Eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Eg(e,t)}function l0(e,t,n){return t=X_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X_(e){var t=Yz(e,"string");return Si(t)=="symbol"?t:t+""}function Yz(e,t){if(Si(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Si(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var p0=(function(e){function t(){return zz(this,t),Vz(this,t,arguments)}return Qz(t,e),Uz(t,[{key:"getTickValueCoord",value:function(r){var a=r.coordinate,i=this.props,s=i.angle,l=i.cx,c=i.cy;return ot(l,c,a,s)}},{key:"getTickTextAnchor",value:function(){var r=this.props.orientation,a;switch(r){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,l=r.ticks,c=Hz(l,function(h){return h.coordinate||0}),f=$z(l,function(h){return h.coordinate||0});return{cx:a,cy:i,startAngle:s,endAngle:s,innerRadius:f.coordinate||0,outerRadius:c.coordinate||0}}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,l=r.ticks,c=r.axisLine,f=fS(r,Lz),h=l.reduce(function(x,I){return[Math.min(x[0],I.coordinate),Math.max(x[1],I.coordinate)]},[1/0,-1/0]),d=ot(a,i,h[0],s),v=ot(a,i,h[1],s),y=ro(ro(ro({},We(f,!1)),{},{fill:"none"},We(c,!1)),{},{x1:d.x,y1:d.y,x2:v.x,y2:v.y});return R.createElement("line",us({className:"recharts-polar-radius-axis-line"},y))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,l=a.angle,c=a.tickFormatter,f=a.stroke,h=fS(a,Fz),d=this.getTickTextAnchor(),v=We(h,!1),y=We(s,!1),x=i.map(function(I,b){var S=r.getTickValueCoord(I),W=ro(ro(ro(ro({textAnchor:d,transform:"rotate(".concat(90-l,", ").concat(S.x,", ").concat(S.y,")")},v),{},{stroke:"none",fill:f},y),{},{index:b},S),{},{payload:I});return R.createElement(De,us({className:He("recharts-polar-radius-axis-tick",D_(s)),key:"tick-".concat(I.coordinate)},Ea(r.props,I,b)),t.renderTickItem(s,W,c?c(I.value,b):I.value))});return R.createElement(De,{className:"recharts-polar-radius-axis-ticks"},x)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.axisLine,s=r.tick;return!a||!a.length?null:R.createElement(De,{className:He("recharts-polar-radius-axis",this.props.className)},i&&this.renderAxisLine(),s&&this.renderTicks(),qt.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return R.isValidElement(r)?s=R.cloneElement(r,a):ke(r)?s=r(a):s=R.createElement(go,us({},a,{className:"recharts-polar-radius-axis-tick-value"}),i),s}}])})(X.PureComponent);l0(p0,"displayName","PolarRadiusAxis");l0(p0,"axisType","radiusAxis");l0(p0,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Wi(e){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wi(e)}function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}function hS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ao(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hS(Object(n),!0).forEach(function(r){c0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,J_(r.key),r)}}function Zz(e,t,n){return t&&mS(e.prototype,t),n&&mS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Jz(e,t,n){return t=hc(t),eU(e,Z_()?Reflect.construct(t,n||[],hc(e).constructor):t.apply(e,n))}function eU(e,t){if(t&&(Wi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return tU(e)}function tU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Z_=function(){return!!e})()}function hc(e){return hc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},hc(e)}function nU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Tg(e,t)}function Tg(e,t){return Tg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Tg(e,t)}function c0(e,t,n){return t=J_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J_(e){var t=rU(e,"string");return Wi(t)=="symbol"?t:t+""}function rU(e,t){if(Wi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var aU=Math.PI/180,vS=1e-5,f0=(function(e){function t(){return Xz(this,t),Jz(this,t,arguments)}return nU(t,e),Zz(t,[{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.cx,s=a.cy,l=a.radius,c=a.orientation,f=a.tickSize,h=f||8,d=ot(i,s,l,r.coordinate),v=ot(i,s,l+(c==="inner"?-1:1)*h,r.coordinate);return{x1:d.x,y1:d.y,x2:v.x,y2:v.y}}},{key:"getTickTextAnchor",value:function(r){var a=this.props.orientation,i=Math.cos(-r.coordinate*aU),s;return i>vS?s=a==="outer"?"start":"end":i<-vS?s=a==="outer"?"end":"start":s="middle",s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.radius,l=r.axisLine,c=r.axisLineType,f=ao(ao({},We(this.props,!1)),{},{fill:"none"},We(l,!1));if(c==="circle")return R.createElement(tl,so({className:"recharts-polar-angle-axis-line"},f,{cx:a,cy:i,r:s}));var h=this.props.ticks,d=h.map(function(v){return ot(a,i,s,v.coordinate)});return R.createElement(Sz,so({className:"recharts-polar-angle-axis-line"},f,{points:d}))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,l=a.tickLine,c=a.tickFormatter,f=a.stroke,h=We(this.props,!1),d=We(s,!1),v=ao(ao({},h),{},{fill:"none"},We(l,!1)),y=i.map(function(x,I){var b=r.getTickLineCoord(x),S=r.getTickTextAnchor(x),W=ao(ao(ao({textAnchor:S},h),{},{stroke:"none",fill:f},d),{},{index:I,payload:x,x:b.x2,y:b.y2});return R.createElement(De,so({className:He("recharts-polar-angle-axis-tick",D_(s)),key:"tick-".concat(x.coordinate)},Ea(r.props,x,I)),l&&R.createElement("line",so({className:"recharts-polar-angle-axis-tick-line"},v,b)),s&&t.renderTickItem(s,W,c?c(x.value,I):x.value))});return R.createElement(De,{className:"recharts-polar-angle-axis-ticks"},y)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.radius,s=r.axisLine;return i<=0||!a||!a.length?null:R.createElement(De,{className:He("recharts-polar-angle-axis",this.props.className)},s&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(r,a,i){var s;return R.isValidElement(r)?s=R.cloneElement(r,a):ke(r)?s=r(a):s=R.createElement(go,so({},a,{className:"recharts-polar-angle-axis-tick-value"}),i),s}}])})(X.PureComponent);c0(f0,"displayName","PolarAngleAxis");c0(f0,"axisType","angleAxis");c0(f0,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var ev,gS;function oU(){if(gS)return ev;gS=1;var e=pA(),t=e(Object.getPrototypeOf,Object);return ev=t,ev}var tv,yS;function iU(){if(yS)return tv;yS=1;var e=Yr(),t=oU(),n=Xr(),r="[object Object]",a=Function.prototype,i=Object.prototype,s=a.toString,l=i.hasOwnProperty,c=s.call(Object);function f(h){if(!n(h)||e(h)!=r)return!1;var d=t(h);if(d===null)return!0;var v=l.call(d,"constructor")&&d.constructor;return typeof v=="function"&&v instanceof v&&s.call(v)==c}return tv=f,tv}var uU=iU();const sU=Xe(uU);var nv,bS;function lU(){if(bS)return nv;bS=1;var e=Yr(),t=Xr(),n="[object Boolean]";function r(a){return a===!0||a===!1||t(a)&&e(a)==n}return nv=r,nv}var pU=lU();const cU=Xe(pU);function js(e){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},js(e)}function mc(){return mc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mc.apply(this,arguments)}function fU(e,t){return vU(e)||mU(e,t)||hU(e,t)||dU()}function dU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hU(e,t){if(e){if(typeof e=="string")return IS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return IS(e,t)}}function IS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function mU(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function vU(e){if(Array.isArray(e))return e}function BS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?BS(Object(n),!0).forEach(function(r){gU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):BS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gU(e,t,n){return t=yU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yU(e){var t=bU(e,"string");return js(t)=="symbol"?t:t+""}function bU(e,t){if(js(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(js(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var wS=function(t,n,r,a,i){var s=r-a,l;return l="M ".concat(t,",").concat(n),l+="L ".concat(t+r,",").concat(n),l+="L ".concat(t+r-s/2,",").concat(n+i),l+="L ".concat(t+r-s/2-a,",").concat(n+i),l+="L ".concat(t,",").concat(n," Z"),l},IU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},BU=function(t){var n=xS(xS({},IU),t),r=X.useRef(),a=X.useState(-1),i=fU(a,2),s=i[0],l=i[1];X.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var A=r.current.getTotalLength();A&&l(A)}catch{}},[]);var c=n.x,f=n.y,h=n.upperWidth,d=n.lowerWidth,v=n.height,y=n.className,x=n.animationEasing,I=n.animationDuration,b=n.animationBegin,S=n.isUpdateAnimationActive;if(c!==+c||f!==+f||h!==+h||d!==+d||v!==+v||h===0&&d===0||v===0)return null;var W=He("recharts-trapezoid",y);return S?R.createElement(Kn,{canBegin:s>0,from:{upperWidth:0,lowerWidth:0,height:v,x:c,y:f},to:{upperWidth:h,lowerWidth:d,height:v,x:c,y:f},duration:I,animationEasing:x,isActive:S},function(A){var O=A.upperWidth,w=A.lowerWidth,_=A.height,N=A.x,P=A.y;return R.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,easing:x},R.createElement("path",mc({},We(n,!0),{className:W,d:wS(N,P,O,w,_),ref:r})))}):R.createElement("g",null,R.createElement("path",mc({},We(n,!0),{className:W,d:wS(c,f,h,d,v)})))},xU=["option","shapeType","propTransformer","activeClassName","isActive"];function Ds(e){"@babel/helpers - typeof";return Ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ds(e)}function wU(e,t){if(e==null)return{};var n=PU(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function PU(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function PS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function vc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?PS(Object(n),!0).forEach(function(r){SU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):PS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function SU(e,t,n){return t=WU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function WU(e){var t=AU(e,"string");return Ds(t)=="symbol"?t:t+""}function AU(e,t){if(Ds(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _U(e,t){return vc(vc({},t),e)}function MU(e,t){return e==="symbols"}function SS(e){var t=e.shapeType,n=e.elementProps;switch(t){case"rectangle":return R.createElement(lb,n);case"trapezoid":return R.createElement(BU,n);case"sector":return R.createElement(F_,n);case"symbols":if(MU(t))return R.createElement(Qc,n);break;default:return null}}function OU(e){return X.isValidElement(e)?e.props:e}function gc(e){var t=e.option,n=e.shapeType,r=e.propTransformer,a=r===void 0?_U:r,i=e.activeClassName,s=i===void 0?"recharts-active-shape":i,l=e.isActive,c=wU(e,xU),f;if(X.isValidElement(t))f=X.cloneElement(t,vc(vc({},c),OU(t)));else if(ke(t))f=t(c);else if(sU(t)&&!cU(t)){var h=a(t,c);f=R.createElement(SS,{shapeType:n,elementProps:h})}else{var d=c;f=R.createElement(SS,{shapeType:n,elementProps:d})}return l?R.createElement(De,{className:s},f):f}function d0(e,t){return t!=null&&"trapezoids"in e.props}function h0(e,t){return t!=null&&"sectors"in e.props}function $s(e,t){return t!=null&&"points"in e.props}function CU(e,t){var n,r,a=e.x===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.x)||e.x===t.x,i=e.y===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===t.y;return a&&i}function kU(e,t){var n=e.endAngle===t.endAngle,r=e.startAngle===t.startAngle;return n&&r}function NU(e,t){var n=e.x===t.x,r=e.y===t.y,a=e.z===t.z;return n&&r&&a}function EU(e,t){var n;return d0(e,t)?n=CU:h0(e,t)?n=kU:$s(e,t)&&(n=NU),n}function TU(e,t){var n;return d0(e,t)?n="trapezoids":h0(e,t)?n="sectors":$s(e,t)&&(n="points"),n}function RU(e,t){if(d0(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}if(h0(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return $s(e,t)?t.payload:{}}function HU(e){var t=e.activeTooltipItem,n=e.graphicalItem,r=e.itemData,a=TU(n,t),i=RU(n,t),s=r.filter(function(c,f){var h=Ta(i,c),d=n.props[a].filter(function(x){var I=EU(n,t);return I(x,t)}),v=n.props[a].indexOf(d[d.length-1]),y=f===v;return h&&y}),l=r.indexOf(s[s.length-1]);return l}var _p;function Ai(e){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ai(e)}function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}function WS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?WS(Object(n),!0).forEach(function(r){qn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):WS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function AS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,tM(r.key),r)}}function DU(e,t,n){return t&&AS(e.prototype,t),n&&AS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $U(e,t,n){return t=yc(t),LU(e,eM()?Reflect.construct(t,n||[],yc(e).constructor):t.apply(e,n))}function LU(e,t){if(t&&(Ai(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return FU(e)}function FU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(eM=function(){return!!e})()}function yc(e){return yc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},yc(e)}function qU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Rg(e,t)}function Rg(e,t){return Rg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Rg(e,t)}function qn(e,t,n){return t=tM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tM(e){var t=zU(e,"string");return Ai(t)=="symbol"?t:t+""}function zU(e,t){if(Ai(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ai(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ea=(function(e){function t(n){var r;return jU(this,t),r=$U(this,t,[n]),qn(r,"pieRef",null),qn(r,"sectorRefs",[]),qn(r,"id",ja("recharts-pie-")),qn(r,"handleAnimationEnd",function(){var a=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),ke(a)&&a()}),qn(r,"handleAnimationStart",function(){var a=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),ke(a)&&a()}),r.state={isAnimationFinished:!n.isAnimationActive,prevIsAnimationActive:n.isAnimationActive,prevAnimationId:n.animationId,sectorToFocus:0},r}return qU(t,e),DU(t,[{key:"isActiveIndex",value:function(r){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(r)!==-1:r===a}},{key:"hasActiveIndex",value:function(){var r=this.props.activeIndex;return Array.isArray(r)?r.length!==0:r||r===0}},{key:"renderLabels",value:function(r){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.label,l=i.labelLine,c=i.dataKey,f=i.valueKey,h=We(this.props,!1),d=We(s,!1),v=We(l,!1),y=s&&s.offsetRadius||20,x=r.map(function(I,b){var S=(I.startAngle+I.endAngle)/2,W=ot(I.cx,I.cy,I.outerRadius+y,S),A=rt(rt(rt(rt({},h),I),{},{stroke:"none"},d),{},{index:b,textAnchor:t.getTextAnchor(W.x,I.cx)},W),O=rt(rt(rt(rt({},h),I),{},{fill:"none",stroke:I.fill},v),{},{index:b,points:[ot(I.cx,I.cy,I.outerRadius,S),W]}),w=c;return Ne(c)&&Ne(f)?w="value":Ne(c)&&(w=f),R.createElement(De,{key:"label-".concat(I.startAngle,"-").concat(I.endAngle,"-").concat(I.midAngle,"-").concat(b)},l&&t.renderLabelLineItem(l,O,"line"),t.renderLabelItem(s,A,lt(I,w)))});return R.createElement(De,{className:"recharts-pie-labels"},x)}},{key:"renderSectorsStatically",value:function(r){var a=this,i=this.props,s=i.activeShape,l=i.blendStroke,c=i.inactiveShape;return r.map(function(f,h){if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&r.length!==1)return null;var d=a.isActiveIndex(h),v=c&&a.hasActiveIndex()?c:null,y=d?s:v,x=rt(rt({},f),{},{stroke:l?f.fill:f.stroke,tabIndex:-1});return R.createElement(De,ii({ref:function(b){b&&!a.sectorRefs.includes(b)&&a.sectorRefs.push(b)},tabIndex:-1,className:"recharts-pie-sector"},Ea(a.props,f,h),{key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(h)}),R.createElement(gc,ii({option:y,isActive:d,shapeType:"sector"},x)))})}},{key:"renderSectorsWithAnimation",value:function(){var r=this,a=this.props,i=a.sectors,s=a.isAnimationActive,l=a.animationBegin,c=a.animationDuration,f=a.animationEasing,h=a.animationId,d=this.state,v=d.prevSectors,y=d.prevIsAnimationActive;return R.createElement(Kn,{begin:l,duration:c,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(h,"-").concat(y),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(x){var I=x.t,b=[],S=i&&i[0],W=S.startAngle;return i.forEach(function(A,O){var w=v&&v[O],_=O>0?Mn(A,"paddingAngle",0):0;if(w){var N=ht(w.endAngle-w.startAngle,A.endAngle-A.startAngle),P=rt(rt({},A),{},{startAngle:W+_,endAngle:W+N(I)+_});b.push(P),W=P.endAngle}else{var C=A.endAngle,T=A.startAngle,j=ht(0,C-T),E=j(I),$=rt(rt({},A),{},{startAngle:W+_,endAngle:W+E+_});b.push($),W=$.endAngle}}),R.createElement(De,null,r.renderSectorsStatically(b))})}},{key:"attachKeyboardHandlers",value:function(r){var a=this;r.onkeydown=function(i){if(!i.altKey)switch(i.key){case"ArrowLeft":{var s=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[s].focus(),a.setState({sectorToFocus:s});break}case"ArrowRight":{var l=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[l].focus(),a.setState({sectorToFocus:l});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var r=this.props,a=r.sectors,i=r.isAnimationActive,s=this.state.prevSectors;return i&&a&&a.length&&(!s||!Ta(s,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var r=this,a=this.props,i=a.hide,s=a.sectors,l=a.className,c=a.label,f=a.cx,h=a.cy,d=a.innerRadius,v=a.outerRadius,y=a.isAnimationActive,x=this.state.isAnimationFinished;if(i||!s||!s.length||!le(f)||!le(h)||!le(d)||!le(v))return null;var I=He("recharts-pie",l);return R.createElement(De,{tabIndex:this.props.rootTabIndex,className:I,ref:function(S){r.pieRef=S}},this.renderSectors(),c&&this.renderLabels(s),qt.renderCallByParent(this.props,null,!1),(!y||x)&&lr.renderCallByParent(this.props,s,!1))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return a.prevIsAnimationActive!==r.isAnimationActive?{prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:[],isAnimationFinished:!0}:r.isAnimationActive&&r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:r.sectors!==a.curSectors?{curSectors:r.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(r,a){return r>a?"start":r<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(r,a,i){if(R.isValidElement(r))return R.cloneElement(r,a);if(ke(r))return r(a);var s=He("recharts-pie-label-line",typeof r!="boolean"?r.className:"");return R.createElement(ka,ii({},a,{key:i,type:"linear",className:s}))}},{key:"renderLabelItem",value:function(r,a,i){if(R.isValidElement(r))return R.cloneElement(r,a);var s=i;if(ke(r)&&(s=r(a),R.isValidElement(s)))return s;var l=He("recharts-pie-label-text",typeof r!="boolean"&&!ke(r)?r.className:"");return R.createElement(go,ii({},a,{alignmentBaseline:"middle",className:l}),s)}}])})(X.PureComponent);_p=ea;qn(ea,"displayName","Pie");qn(ea,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Zr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});qn(ea,"parseDeltaAngle",function(e,t){var n=an(t-e),r=Math.min(Math.abs(t-e),360);return n*r});qn(ea,"getRealPieData",function(e){var t=e.data,n=e.children,r=We(e,!1),a=sn(n,Ys);return t&&t.length?t.map(function(i,s){return rt(rt(rt({payload:i},r),i),a&&a[s]&&a[s].props)}):a&&a.length?a.map(function(i){return rt(rt({},r),i.props)}):[]});qn(ea,"parseCoordinateOfPie",function(e,t){var n=t.top,r=t.left,a=t.width,i=t.height,s=j_(a,i),l=r+on(e.cx,a,a/2),c=n+on(e.cy,i,i/2),f=on(e.innerRadius,s,0),h=on(e.outerRadius,s,s*.8),d=e.maxRadius||Math.sqrt(a*a+i*i)/2;return{cx:l,cy:c,innerRadius:f,outerRadius:h,maxRadius:d}});qn(ea,"getComposedData",function(e){var t=e.item,n=e.offset,r=t.type.defaultProps!==void 0?rt(rt({},t.type.defaultProps),t.props):t.props,a=_p.getRealPieData(r);if(!a||!a.length)return null;var i=r.cornerRadius,s=r.startAngle,l=r.endAngle,c=r.paddingAngle,f=r.dataKey,h=r.nameKey,d=r.valueKey,v=r.tooltipType,y=Math.abs(r.minAngle),x=_p.parseCoordinateOfPie(r,n),I=_p.parseDeltaAngle(s,l),b=Math.abs(I),S=f;Ne(f)&&Ne(d)?(sr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S="value"):Ne(f)&&(sr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S=d);var W=a.filter(function(P){return lt(P,S,0)!==0}).length,A=(b>=360?W:W-1)*c,O=b-W*y-A,w=a.reduce(function(P,C){var T=lt(C,S,0);return P+(le(T)?T:0)},0),_;if(w>0){var N;_=a.map(function(P,C){var T=lt(P,S,0),j=lt(P,h,C),E=(le(T)?T:0)/w,$;C?$=N.endAngle+an(I)*c*(T!==0?1:0):$=s;var V=$+an(I)*((T!==0?y:0)+E*O),G=($+V)/2,z=(x.innerRadius+x.outerRadius)/2,Q=[{name:j,value:T,payload:P,dataKey:S,type:v}],L=ot(x.cx,x.cy,z,G);return N=rt(rt(rt({percent:E,cornerRadius:i,name:j,tooltipPayload:Q,midAngle:G,middleRadius:z,tooltipPosition:L},P),x),{},{value:lt(P,S),startAngle:$,endAngle:V,payload:P,paddingAngle:an(I)*c}),N})}return rt(rt({},x),{},{sectors:_,data:a})});var rv,_S;function UU(){if(_S)return rv;_S=1;var e=Math.ceil,t=Math.max;function n(r,a,i,s){for(var l=-1,c=t(e((a-r)/(i||1)),0),f=Array(c);c--;)f[s?c:++l]=r,r+=i;return f}return rv=n,rv}var av,MS;function nM(){if(MS)return av;MS=1;var e=WA(),t=1/0,n=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=e(a),a===t||a===-t){var i=a<0?-1:1;return i*n}return a===a?a:0}return av=r,av}var ov,OS;function VU(){if(OS)return ov;OS=1;var e=UU(),t=Zc(),n=nM();function r(a){return function(i,s,l){return l&&typeof l!="number"&&t(i,s,l)&&(s=l=void 0),i=n(i),s===void 0?(s=i,i=0):s=n(s),l=l===void 0?i<s?1:-1:n(l),e(i,s,l,a)}}return ov=r,ov}var iv,CS;function GU(){if(CS)return iv;CS=1;var e=VU(),t=e();return iv=t,iv}var KU=GU();const bc=Xe(KU);function Ls(e){"@babel/helpers - typeof";return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ls(e)}function kS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function NS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kS(Object(n),!0).forEach(function(r){rM(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rM(e,t,n){return t=QU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QU(e){var t=YU(e,"string");return Ls(t)=="symbol"?t:t+""}function YU(e,t){if(Ls(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ls(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var XU=["Webkit","Moz","O","ms"],ZU=function(t,n){var r=t.replace(/(\w)/,function(i){return i.toUpperCase()}),a=XU.reduce(function(i,s){return NS(NS({},i),{},rM({},s+r,n))},{});return a[t]=n,a};function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(e)}function Ic(){return Ic=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ic.apply(this,arguments)}function ES(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function uv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ES(Object(n),!0).forEach(function(r){Pn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ES(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function TS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,oM(r.key),r)}}function eV(e,t,n){return t&&TS(e.prototype,t),n&&TS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function tV(e,t,n){return t=Bc(t),nV(e,aM()?Reflect.construct(t,n||[],Bc(e).constructor):t.apply(e,n))}function nV(e,t){if(t&&(_i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rV(e)}function rV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function aM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(aM=function(){return!!e})()}function Bc(e){return Bc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Bc(e)}function aV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Hg(e,t)}function Hg(e,t){return Hg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Hg(e,t)}function Pn(e,t,n){return t=oM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oM(e){var t=oV(e,"string");return _i(t)=="symbol"?t:t+""}function oV(e,t){if(_i(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var iV=function(t){var n=t.data,r=t.startIndex,a=t.endIndex,i=t.x,s=t.width,l=t.travellerWidth;if(!n||!n.length)return{};var c=n.length,f=rs().domain(bc(0,c)).range([i,i+s-l]),h=f.domain().map(function(d){return f(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(a),scale:f,scaleValues:h}},RS=function(t){return t.changedTouches&&!!t.changedTouches.length},Mi=(function(e){function t(n){var r;return JU(this,t),r=tV(this,t,[n]),Pn(r,"handleDrag",function(a){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(a):r.state.isSlideMoving&&r.handleSlideDrag(a)}),Pn(r,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&r.handleDrag(a.changedTouches[0])}),Pn(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=r.props,i=a.endIndex,s=a.onDragEnd,l=a.startIndex;s==null||s({endIndex:i,startIndex:l})}),r.detachDragEndListener()}),Pn(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),Pn(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),Pn(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),Pn(r,"handleSlideDragStart",function(a){var i=RS(a)?a.changedTouches[0]:a;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:i.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return aV(t,e),eV(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var a=r.startX,i=r.endX,s=this.state.scaleValues,l=this.props,c=l.gap,f=l.data,h=f.length-1,d=Math.min(a,i),v=Math.max(a,i),y=t.getIndexInRange(s,d),x=t.getIndexInRange(s,v);return{startIndex:y-y%c,endIndex:x===h?h:x-x%c}}},{key:"getTextOfTick",value:function(r){var a=this.props,i=a.data,s=a.tickFormatter,l=a.dataKey,c=lt(i[r],l,r);return ke(s)?s(c,r):c}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var a=this.state,i=a.slideMoveStartX,s=a.startX,l=a.endX,c=this.props,f=c.x,h=c.width,d=c.travellerWidth,v=c.startIndex,y=c.endIndex,x=c.onChange,I=r.pageX-i;I>0?I=Math.min(I,f+h-d-l,f+h-d-s):I<0&&(I=Math.max(I,f-s,f-l));var b=this.getIndex({startX:s+I,endX:l+I});(b.startIndex!==v||b.endIndex!==y)&&x&&x(b),this.setState({startX:s+I,endX:l+I,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,a){var i=RS(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:i.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var a=this.state,i=a.brushMoveStartX,s=a.movingTravellerId,l=a.endX,c=a.startX,f=this.state[s],h=this.props,d=h.x,v=h.width,y=h.travellerWidth,x=h.onChange,I=h.gap,b=h.data,S={startX:this.state.startX,endX:this.state.endX},W=r.pageX-i;W>0?W=Math.min(W,d+v-y-f):W<0&&(W=Math.max(W,d-f)),S[s]=f+W;var A=this.getIndex(S),O=A.startIndex,w=A.endIndex,_=function(){var P=b.length-1;return s==="startX"&&(l>c?O%I===0:w%I===0)||l<c&&w===P||s==="endX"&&(l>c?w%I===0:O%I===0)||l>c&&w===P};this.setState(Pn(Pn({},s,f+W),"brushMoveStartX",r.pageX),function(){x&&_()&&x(A)})}},{key:"handleTravellerMoveKeyboard",value:function(r,a){var i=this,s=this.state,l=s.scaleValues,c=s.startX,f=s.endX,h=this.state[a],d=l.indexOf(h);if(d!==-1){var v=d+r;if(!(v===-1||v>=l.length)){var y=l[v];a==="startX"&&y>=f||a==="endX"&&y<=c||this.setState(Pn({},a,y),function(){i.props.onChange(i.getIndex({startX:i.state.startX,endX:i.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,c=r.fill,f=r.stroke;return R.createElement("rect",{stroke:f,fill:c,x:a,y:i,width:s,height:l})}},{key:"renderPanorama",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,c=r.data,f=r.children,h=r.padding,d=X.Children.only(f);return d?R.cloneElement(d,{x:a,y:i,width:s,height:l,margin:h,compact:!0,data:c}):null}},{key:"renderTravellerLayer",value:function(r,a){var i,s,l=this,c=this.props,f=c.y,h=c.travellerWidth,d=c.height,v=c.traveller,y=c.ariaLabel,x=c.data,I=c.startIndex,b=c.endIndex,S=Math.max(r,this.props.x),W=uv(uv({},We(this.props,!1)),{},{x:S,y:f,width:h,height:d}),A=y||"Min value: ".concat((i=x[I])===null||i===void 0?void 0:i.name,", Max value: ").concat((s=x[b])===null||s===void 0?void 0:s.name);return R.createElement(De,{tabIndex:0,role:"slider","aria-label":A,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(w){["ArrowLeft","ArrowRight"].includes(w.key)&&(w.preventDefault(),w.stopPropagation(),l.handleTravellerMoveKeyboard(w.key==="ArrowRight"?1:-1,a))},onFocus:function(){l.setState({isTravellerFocused:!0})},onBlur:function(){l.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(v,W))}},{key:"renderSlide",value:function(r,a){var i=this.props,s=i.y,l=i.height,c=i.stroke,f=i.travellerWidth,h=Math.min(r,a)+f,d=Math.max(Math.abs(a-r)-f,0);return R.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:c,fillOpacity:.2,x:h,y:s,width:d,height:l})}},{key:"renderText",value:function(){var r=this.props,a=r.startIndex,i=r.endIndex,s=r.y,l=r.height,c=r.travellerWidth,f=r.stroke,h=this.state,d=h.startX,v=h.endX,y=5,x={pointerEvents:"none",fill:f};return R.createElement(De,{className:"recharts-brush-texts"},R.createElement(go,Ic({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,v)-y,y:s+l/2},x),this.getTextOfTick(a)),R.createElement(go,Ic({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,v)+c+y,y:s+l/2},x),this.getTextOfTick(i)))}},{key:"render",value:function(){var r=this.props,a=r.data,i=r.className,s=r.children,l=r.x,c=r.y,f=r.width,h=r.height,d=r.alwaysShowText,v=this.state,y=v.startX,x=v.endX,I=v.isTextActive,b=v.isSlideMoving,S=v.isTravellerMoving,W=v.isTravellerFocused;if(!a||!a.length||!le(l)||!le(c)||!le(f)||!le(h)||f<=0||h<=0)return null;var A=He("recharts-brush",i),O=R.Children.count(s)===1,w=ZU("userSelect","none");return R.createElement(De,{className:A,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:w},this.renderBackground(),O&&this.renderPanorama(),this.renderSlide(y,x),this.renderTravellerLayer(y,"startX"),this.renderTravellerLayer(x,"endX"),(I||b||S||W||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var a=r.x,i=r.y,s=r.width,l=r.height,c=r.stroke,f=Math.floor(i+l/2)-1;return R.createElement(R.Fragment,null,R.createElement("rect",{x:a,y:i,width:s,height:l,fill:c,stroke:"none"}),R.createElement("line",{x1:a+1,y1:f,x2:a+s-1,y2:f,fill:"none",stroke:"#fff"}),R.createElement("line",{x1:a+1,y1:f+2,x2:a+s-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,a){var i;return R.isValidElement(r)?i=R.cloneElement(r,a):ke(r)?i=r(a):i=t.renderDefaultTraveller(a),i}},{key:"getDerivedStateFromProps",value:function(r,a){var i=r.data,s=r.width,l=r.x,c=r.travellerWidth,f=r.updateId,h=r.startIndex,d=r.endIndex;if(i!==a.prevData||f!==a.prevUpdateId)return uv({prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:l,prevWidth:s},i&&i.length?iV({data:i,width:s,x:l,travellerWidth:c,startIndex:h,endIndex:d}):{scale:null,scaleValues:null});if(a.scale&&(s!==a.prevWidth||l!==a.prevX||c!==a.prevTravellerWidth)){a.scale.range([l,l+s-c]);var v=a.scale.domain().map(function(y){return a.scale(y)});return{prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:l,prevWidth:s,startX:a.scale(r.startIndex),endX:a.scale(r.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(r,a){for(var i=r.length,s=0,l=i-1;l-s>1;){var c=Math.floor((s+l)/2);r[c]>a?l=c:s=c}return a>=r[l]?l:s}}])})(X.PureComponent);Pn(Mi,"displayName","Brush");Pn(Mi,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var sv,HS;function uV(){if(HS)return sv;HS=1;var e=Ey();function t(n,r){var a;return e(n,function(i,s,l){return a=r(i,s,l),!a}),!!a}return sv=t,sv}var lv,jS;function sV(){if(jS)return lv;jS=1;var e=rA(),t=Ar(),n=uV(),r=yn(),a=Zc();function i(s,l,c){var f=r(s)?e:n;return c&&a(s,l,c)&&(l=void 0),f(s,t(l,3))}return lv=i,lv}var lV=sV();const pV=Xe(lV);var wr=function(t,n){var r=t.alwaysShow,a=t.ifOverflow;return r&&(a="extendDomain"),a===n},pv,DS;function cV(){if(DS)return pv;DS=1;var e=BA();function t(n,r,a){r=="__proto__"&&e?e(n,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[r]=a}return pv=t,pv}var cv,$S;function fV(){if($S)return cv;$S=1;var e=cV(),t=bA(),n=Ar();function r(a,i){var s={};return i=n(i,3),t(a,function(l,c,f){e(s,c,i(l,c,f))}),s}return cv=r,cv}var dV=fV();const hV=Xe(dV);var fv,LS;function mV(){if(LS)return fv;LS=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(!n(t[r],r,t))return!1;return!0}return fv=e,fv}var dv,FS;function vV(){if(FS)return dv;FS=1;var e=Ey();function t(n,r){var a=!0;return e(n,function(i,s,l){return a=!!r(i,s,l),a}),a}return dv=t,dv}var hv,qS;function gV(){if(qS)return hv;qS=1;var e=mV(),t=vV(),n=Ar(),r=yn(),a=Zc();function i(s,l,c){var f=r(s)?e:t;return c&&a(s,l,c)&&(l=void 0),f(s,n(l,3))}return hv=i,hv}var yV=gV();const iM=Xe(yV);var bV=["x","y"];function Fs(e){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fs(e)}function jg(){return jg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jg.apply(this,arguments)}function zS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Xu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zS(Object(n),!0).forEach(function(r){IV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function IV(e,t,n){return t=BV(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BV(e){var t=xV(e,"string");return Fs(t)=="symbol"?t:t+""}function xV(e,t){if(Fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wV(e,t){if(e==null)return{};var n=PV(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function PV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function SV(e,t){var n=e.x,r=e.y,a=wV(e,bV),i="".concat(n),s=parseInt(i,10),l="".concat(r),c=parseInt(l,10),f="".concat(t.height||a.height),h=parseInt(f,10),d="".concat(t.width||a.width),v=parseInt(d,10);return Xu(Xu(Xu(Xu(Xu({},t),a),s?{x:s}:{}),c?{y:c}:{}),{},{height:h,width:v,name:t.name,radius:t.radius})}function US(e){return R.createElement(gc,jg({shapeType:"rectangle",propTransformer:SV,activeClassName:"recharts-active-bar"},e))}var WV=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,a){if(typeof t=="number")return t;var i=typeof r=="number";return i?t(r,a):(i||bo(),n)}},AV=["value","background"],uM;function Oi(e){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oi(e)}function _V(e,t){if(e==null)return{};var n=MV(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function MV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function xc(){return xc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xc.apply(this,arguments)}function VS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?VS(Object(n),!0).forEach(function(r){_a(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):VS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function OV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function GS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,lM(r.key),r)}}function CV(e,t,n){return t&&GS(e.prototype,t),n&&GS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function kV(e,t,n){return t=wc(t),NV(e,sM()?Reflect.construct(t,n||[],wc(e).constructor):t.apply(e,n))}function NV(e,t){if(t&&(Oi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return EV(e)}function EV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(sM=function(){return!!e})()}function wc(e){return wc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},wc(e)}function TV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Dg(e,t)}function Dg(e,t){return Dg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Dg(e,t)}function _a(e,t,n){return t=lM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lM(e){var t=RV(e,"string");return Oi(t)=="symbol"?t:t+""}function RV(e,t){if(Oi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Oi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Sr=(function(e){function t(){var n;OV(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=kV(this,t,[].concat(a)),_a(n,"state",{isAnimationFinished:!1}),_a(n,"id",ja("recharts-bar-")),_a(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),s&&s()}),_a(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),s&&s()}),n}return TV(t,e),CV(t,[{key:"renderRectanglesStatically",value:function(r){var a=this,i=this.props,s=i.shape,l=i.dataKey,c=i.activeIndex,f=i.activeBar,h=We(this.props,!1);return r&&r.map(function(d,v){var y=v===c,x=y?f:s,I=Mt(Mt(Mt({},h),d),{},{isActive:y,option:x,index:v,dataKey:l,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return R.createElement(De,xc({className:"recharts-bar-rectangle"},Ea(a.props,d,v),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(v)}),R.createElement(US,I))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,a=this.props,i=a.data,s=a.layout,l=a.isAnimationActive,c=a.animationBegin,f=a.animationDuration,h=a.animationEasing,d=a.animationId,v=this.state.prevData;return R.createElement(Kn,{begin:c,duration:f,isActive:l,easing:h,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(y){var x=y.t,I=i.map(function(b,S){var W=v&&v[S];if(W){var A=ht(W.x,b.x),O=ht(W.y,b.y),w=ht(W.width,b.width),_=ht(W.height,b.height);return Mt(Mt({},b),{},{x:A(x),y:O(x),width:w(x),height:_(x)})}if(s==="horizontal"){var N=ht(0,b.height),P=N(x);return Mt(Mt({},b),{},{y:b.y+b.height-P,height:P})}var C=ht(0,b.width),T=C(x);return Mt(Mt({},b),{},{width:T})});return R.createElement(De,null,r.renderRectanglesStatically(I))})}},{key:"renderRectangles",value:function(){var r=this.props,a=r.data,i=r.isAnimationActive,s=this.state.prevData;return i&&a&&a.length&&(!s||!Ta(s,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var r=this,a=this.props,i=a.data,s=a.dataKey,l=a.activeIndex,c=We(this.props.background,!1);return i.map(function(f,h){f.value;var d=f.background,v=_V(f,AV);if(!d)return null;var y=Mt(Mt(Mt(Mt(Mt({},v),{},{fill:"#eee"},d),c),Ea(r.props,f,h)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:s,index:h,className:"recharts-bar-background-rectangle"});return R.createElement(US,xc({key:"background-bar-".concat(h),option:r.props.background,isActive:h===l},y))})}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.data,l=i.xAxis,c=i.yAxis,f=i.layout,h=i.children,d=sn(h,eu);if(!d)return null;var v=f==="vertical"?s[0].height/2:s[0].width/2,y=function(b,S){var W=Array.isArray(b.value)?b.value[1]:b.value;return{x:b.x,y:b.y,value:W,errorVal:lt(b,S)}},x={clipPath:r?"url(#clipPath-".concat(a,")"):null};return R.createElement(De,x,d.map(function(I){return R.cloneElement(I,{key:"error-bar-".concat(a,"-").concat(I.props.dataKey),data:s,xAxis:l,yAxis:c,layout:f,offset:v,dataPointFormatter:y})}))}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.data,s=r.className,l=r.xAxis,c=r.yAxis,f=r.left,h=r.top,d=r.width,v=r.height,y=r.isAnimationActive,x=r.background,I=r.id;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,S=He("recharts-bar",s),W=l&&l.allowDataOverflow,A=c&&c.allowDataOverflow,O=W||A,w=Ne(I)?this.id:I;return R.createElement(De,{className:S},W||A?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(w)},R.createElement("rect",{x:W?f:f-d/2,y:A?h:h-v/2,width:W?d:d*2,height:A?v:v*2}))):null,R.createElement(De,{className:"recharts-bar-rectangles",clipPath:O?"url(#clipPath-".concat(w,")"):null},x?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(O,w),(!y||b)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:a.curData}:r.data!==a.curData?{curData:r.data}:null}}])})(X.PureComponent);uM=Sr;_a(Sr,"displayName","Bar");_a(Sr,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});_a(Sr,"getComposedData",function(e){var t=e.props,n=e.item,r=e.barPosition,a=e.bandSize,i=e.xAxis,s=e.yAxis,l=e.xAxisTicks,c=e.yAxisTicks,f=e.stackedData,h=e.dataStartIndex,d=e.displayedData,v=e.offset,y=u9(r,n);if(!y)return null;var x=t.layout,I=n.type.defaultProps,b=I!==void 0?Mt(Mt({},I),n.props):n.props,S=b.dataKey,W=b.children,A=b.minPointSize,O=x==="horizontal"?s:i,w=f?O.scale.domain():null,_=h9({numericAxis:O}),N=sn(W,Ys),P=d.map(function(C,T){var j,E,$,V,G,z;f?j=s9(f[h+T],w):(j=lt(C,S),Array.isArray(j)||(j=[_,j]));var Q=WV(A,uM.defaultProps.minPointSize)(j[1],T);if(x==="horizontal"){var L,K=[s.scale(j[0]),s.scale(j[1])],Y=K[0],H=K[1];E=B4({axis:i,ticks:l,bandSize:a,offset:y.offset,entry:C,index:T}),$=(L=H??Y)!==null&&L!==void 0?L:void 0,V=y.size;var F=Y-H;if(G=Number.isNaN(F)?0:F,z={x:E,y:s.y,width:V,height:s.height},Math.abs(Q)>0&&Math.abs(G)<Math.abs(Q)){var J=an(G||Q)*(Math.abs(Q)-Math.abs(G));$-=J,G+=J}}else{var ue=[i.scale(j[0]),i.scale(j[1])],he=ue[0],ge=ue[1];if(E=he,$=B4({axis:s,ticks:c,bandSize:a,offset:y.offset,entry:C,index:T}),V=ge-he,G=y.size,z={x:i.x,y:$,width:i.width,height:G},Math.abs(Q)>0&&Math.abs(V)<Math.abs(Q)){var ye=an(V||Q)*(Math.abs(Q)-Math.abs(V));V+=ye}}return Mt(Mt(Mt({},C),{},{x:E,y:$,width:V,height:G,value:f?j:j[1],payload:C,background:z},N&&N[T]&&N[T].props),{},{tooltipPayload:[R_(n,C)],tooltipPosition:{x:E+V/2,y:$+G/2}})});return Mt({data:P,layout:x},v)});function qs(e){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qs(e)}function HV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function KS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,pM(r.key),r)}}function jV(e,t,n){return t&&KS(e.prototype,t),n&&KS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function QS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ar(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?QS(Object(n),!0).forEach(function(r){m0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):QS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function m0(e,t,n){return t=pM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pM(e){var t=DV(e,"string");return qs(t)=="symbol"?t:t+""}function DV(e,t){if(qs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(qs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var pb=function(t,n,r,a,i){var s=t.width,l=t.height,c=t.layout,f=t.children,h=Object.keys(n),d={left:r.left,leftMirror:r.left,right:s-r.right,rightMirror:s-r.right,top:r.top,topMirror:r.top,bottom:l-r.bottom,bottomMirror:l-r.bottom},v=!!Sn(f,Sr);return h.reduce(function(y,x){var I=n[x],b=I.orientation,S=I.domain,W=I.padding,A=W===void 0?{}:W,O=I.mirror,w=I.reversed,_="".concat(b).concat(O?"Mirror":""),N,P,C,T,j;if(I.type==="number"&&(I.padding==="gap"||I.padding==="no-gap")){var E=S[1]-S[0],$=1/0,V=I.categoricalDomain.sort();if(V.forEach(function(ue,he){he>0&&($=Math.min((ue||0)-(V[he-1]||0),$))}),Number.isFinite($)){var G=$/E,z=I.layout==="vertical"?r.height:r.width;if(I.padding==="gap"&&(N=G*z/2),I.padding==="no-gap"){var Q=on(t.barCategoryGap,G*z),L=G*z/2;N=L-Q-(L-Q)/z*Q}}}a==="xAxis"?P=[r.left+(A.left||0)+(N||0),r.left+r.width-(A.right||0)-(N||0)]:a==="yAxis"?P=c==="horizontal"?[r.top+r.height-(A.bottom||0),r.top+(A.top||0)]:[r.top+(A.top||0)+(N||0),r.top+r.height-(A.bottom||0)-(N||0)]:P=I.range,w&&(P=[P[1],P[0]]);var K=k_(I,i,v),Y=K.scale,H=K.realScaleType;Y.domain(S).range(P),N_(Y);var F=E_(Y,ar(ar({},I),{},{realScaleType:H}));a==="xAxis"?(j=b==="top"&&!O||b==="bottom"&&O,C=r.left,T=d[_]-j*I.height):a==="yAxis"&&(j=b==="left"&&!O||b==="right"&&O,C=d[_]-j*I.width,T=r.top);var J=ar(ar(ar({},I),F),{},{realScaleType:H,x:C,y:T,scale:Y,width:a==="xAxis"?r.width:I.width,height:a==="yAxis"?r.height:I.height});return J.bandSize=oc(J,F),!I.hide&&a==="xAxis"?d[_]+=(j?-1:1)*J.height:I.hide||(d[_]+=(j?-1:1)*J.width),ar(ar({},y),{},m0({},x,J))},{})},cM=function(t,n){var r=t.x,a=t.y,i=n.x,s=n.y;return{x:Math.min(r,i),y:Math.min(a,s),width:Math.abs(i-r),height:Math.abs(s-a)}},$V=function(t){var n=t.x1,r=t.y1,a=t.x2,i=t.y2;return cM({x:n,y:r},{x:a,y:i})},fM=(function(){function e(t){HV(this,e),this.scale=t}return jV(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.bandAware,i=r.position;if(n!==void 0){if(i)switch(i){case"start":return this.scale(n);case"middle":{var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+s}case"end":{var l=this.bandwidth?this.bandwidth():0;return this.scale(n)+l}default:return this.scale(n)}if(a){var c=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+c}return this.scale(n)}}},{key:"isInRange",value:function(n){var r=this.range(),a=r[0],i=r[r.length-1];return a<=i?n>=a&&n<=i:n>=i&&n<=a}}],[{key:"create",value:function(n){return new e(n)}}])})();m0(fM,"EPS",1e-4);var cb=function(t){var n=Object.keys(t).reduce(function(r,a){return ar(ar({},r),{},m0({},a,fM.create(t[a])))},{});return ar(ar({},n),{},{apply:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.bandAware,l=i.position;return hV(a,function(c,f){return n[f].apply(c,{bandAware:s,position:l})})},isInRange:function(a){return iM(a,function(i,s){return n[s].isInRange(i)})}})};function LV(e){return(e%180+180)%180}var FV=function(t){var n=t.width,r=t.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=LV(a),s=i*Math.PI/180,l=Math.atan(r/n),c=s>l&&s<Math.PI-l?r/Math.sin(s):n/Math.cos(s);return Math.abs(c)},mv,YS;function qV(){if(YS)return mv;YS=1;var e=Ar(),t=Qs(),n=Yc();function r(a){return function(i,s,l){var c=Object(i);if(!t(i)){var f=e(s,3);i=n(i),s=function(d){return f(c[d],d,c)}}var h=a(i,s,l);return h>-1?c[f?i[h]:h]:void 0}}return mv=r,mv}var vv,XS;function zV(){if(XS)return vv;XS=1;var e=nM();function t(n){var r=e(n),a=r%1;return r===r?a?r-a:r:0}return vv=t,vv}var gv,ZS;function UV(){if(ZS)return gv;ZS=1;var e=hA(),t=Ar(),n=zV(),r=Math.max;function a(i,s,l){var c=i==null?0:i.length;if(!c)return-1;var f=l==null?0:n(l);return f<0&&(f=r(c+f,0)),e(i,t(s,3),f)}return gv=a,gv}var yv,JS;function VV(){if(JS)return yv;JS=1;var e=qV(),t=UV(),n=e(t);return yv=n,yv}var GV=VV();const KV=Xe(GV);var QV=MW();const YV=Xe(QV);var XV=YV(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),fb=X.createContext(void 0),db=X.createContext(void 0),dM=X.createContext(void 0),hM=X.createContext({}),mM=X.createContext(void 0),vM=X.createContext(0),gM=X.createContext(0),e3=function(t){var n=t.state,r=n.xAxisMap,a=n.yAxisMap,i=n.offset,s=t.clipPathId,l=t.children,c=t.width,f=t.height,h=XV(i);return R.createElement(fb.Provider,{value:r},R.createElement(db.Provider,{value:a},R.createElement(hM.Provider,{value:i},R.createElement(dM.Provider,{value:h},R.createElement(mM.Provider,{value:s},R.createElement(vM.Provider,{value:f},R.createElement(gM.Provider,{value:c},l)))))))},ZV=function(){return X.useContext(mM)},yM=function(t){var n=X.useContext(fb);n==null&&bo();var r=n[t];return r==null&&bo(),r},JV=function(){var t=X.useContext(fb);return Wa(t)},eG=function(){var t=X.useContext(db),n=KV(t,function(r){return iM(r.domain,Number.isFinite)});return n||Wa(t)},bM=function(t){var n=X.useContext(db);n==null&&bo();var r=n[t];return r==null&&bo(),r},tG=function(){var t=X.useContext(dM);return t},nG=function(){return X.useContext(hM)},hb=function(){return X.useContext(gM)},mb=function(){return X.useContext(vM)};function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ci(e)}function rG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function aG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,BM(r.key),r)}}function oG(e,t,n){return t&&aG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function iG(e,t,n){return t=Pc(t),uG(e,IM()?Reflect.construct(t,n||[],Pc(e).constructor):t.apply(e,n))}function uG(e,t){if(t&&(Ci(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sG(e)}function sG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function IM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(IM=function(){return!!e})()}function Pc(e){return Pc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Pc(e)}function lG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$g(e,t)}function $g(e,t){return $g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},$g(e,t)}function t3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function n3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?t3(Object(n),!0).forEach(function(r){vb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vb(e,t,n){return t=BM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BM(e){var t=pG(e,"string");return Ci(t)=="symbol"?t:t+""}function pG(e,t){if(Ci(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ci(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function cG(e,t){return mG(e)||hG(e,t)||dG(e,t)||fG()}function fG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dG(e,t){if(e){if(typeof e=="string")return r3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r3(e,t)}}function r3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hG(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function mG(e){if(Array.isArray(e))return e}function Lg(){return Lg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lg.apply(this,arguments)}var vG=function(t,n){var r;return R.isValidElement(t)?r=R.cloneElement(t,n):ke(t)?r=t(n):r=R.createElement("line",Lg({},n,{className:"recharts-reference-line-line"})),r},gG=function(t,n,r,a,i,s,l,c,f){var h=i.x,d=i.y,v=i.width,y=i.height;if(r){var x=f.y,I=t.y.apply(x,{position:s});if(wr(f,"discard")&&!t.y.isInRange(I))return null;var b=[{x:h+v,y:I},{x:h,y:I}];return c==="left"?b.reverse():b}if(n){var S=f.x,W=t.x.apply(S,{position:s});if(wr(f,"discard")&&!t.x.isInRange(W))return null;var A=[{x:W,y:d+y},{x:W,y:d}];return l==="top"?A.reverse():A}if(a){var O=f.segment,w=O.map(function(_){return t.apply(_,{position:s})});return wr(f,"discard")&&pV(w,function(_){return!t.isInRange(_)})?null:w}return null};function yG(e){var t=e.x,n=e.y,r=e.segment,a=e.xAxisId,i=e.yAxisId,s=e.shape,l=e.className,c=e.alwaysShow,f=ZV(),h=yM(a),d=bM(i),v=tG();if(!f||!v)return null;sr(c===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var y=cb({x:h.scale,y:d.scale}),x=Rt(t),I=Rt(n),b=r&&r.length===2,S=gG(y,x,I,b,v,e.position,h.orientation,d.orientation,e);if(!S)return null;var W=cG(S,2),A=W[0],O=A.x,w=A.y,_=W[1],N=_.x,P=_.y,C=wr(e,"hidden")?"url(#".concat(f,")"):void 0,T=n3(n3({clipPath:C},We(e,!0)),{},{x1:O,y1:w,x2:N,y2:P});return R.createElement(De,{className:He("recharts-reference-line",l)},vG(s,T),qt.renderCallByParent(e,$V({x1:O,y1:w,x2:N,y2:P})))}var gb=(function(e){function t(){return rG(this,t),iG(this,t,arguments)}return lG(t,e),oG(t,[{key:"render",value:function(){return R.createElement(yG,this.props)}}])})(R.Component);vb(gb,"displayName","ReferenceLine");vb(gb,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function Fg(){return Fg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fg.apply(this,arguments)}function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(e)}function a3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function o3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?a3(Object(n),!0).forEach(function(r){v0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function IG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,wM(r.key),r)}}function BG(e,t,n){return t&&IG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function xG(e,t,n){return t=Sc(t),wG(e,xM()?Reflect.construct(t,n||[],Sc(e).constructor):t.apply(e,n))}function wG(e,t){if(t&&(ki(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return PG(e)}function PG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xM=function(){return!!e})()}function Sc(e){return Sc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Sc(e)}function SG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&qg(e,t)}function qg(e,t){return qg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},qg(e,t)}function v0(e,t,n){return t=wM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wM(e){var t=WG(e,"string");return ki(t)=="symbol"?t:t+""}function WG(e,t){if(ki(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var AG=function(t){var n=t.x,r=t.y,a=t.xAxis,i=t.yAxis,s=cb({x:a.scale,y:i.scale}),l=s.apply({x:n,y:r},{bandAware:!0});return wr(t,"discard")&&!s.isInRange(l)?null:l},g0=(function(e){function t(){return bG(this,t),xG(this,t,arguments)}return SG(t,e),BG(t,[{key:"render",value:function(){var r=this.props,a=r.x,i=r.y,s=r.r,l=r.alwaysShow,c=r.clipPathId,f=Rt(a),h=Rt(i);if(sr(l===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!h)return null;var d=AG(this.props);if(!d)return null;var v=d.x,y=d.y,x=this.props,I=x.shape,b=x.className,S=wr(this.props,"hidden")?"url(#".concat(c,")"):void 0,W=o3(o3({clipPath:S},We(this.props,!0)),{},{cx:v,cy:y});return R.createElement(De,{className:He("recharts-reference-dot",b)},t.renderDot(I,W),qt.renderCallByParent(this.props,{x:v-s,y:y-s,width:2*s,height:2*s}))}}])})(R.Component);v0(g0,"displayName","ReferenceDot");v0(g0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});v0(g0,"renderDot",function(e,t){var n;return R.isValidElement(e)?n=R.cloneElement(e,t):ke(e)?n=e(t):n=R.createElement(tl,Fg({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),n});function zg(){return zg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zg.apply(this,arguments)}function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ni(e)}function i3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function u3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?i3(Object(n),!0).forEach(function(r){y0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function MG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,SM(r.key),r)}}function OG(e,t,n){return t&&MG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function CG(e,t,n){return t=Wc(t),kG(e,PM()?Reflect.construct(t,n||[],Wc(e).constructor):t.apply(e,n))}function kG(e,t){if(t&&(Ni(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return NG(e)}function NG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function PM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(PM=function(){return!!e})()}function Wc(e){return Wc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Wc(e)}function EG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ug(e,t)}function Ug(e,t){return Ug=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ug(e,t)}function y0(e,t,n){return t=SM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function SM(e){var t=TG(e,"string");return Ni(t)=="symbol"?t:t+""}function TG(e,t){if(Ni(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var RG=function(t,n,r,a,i){var s=i.x1,l=i.x2,c=i.y1,f=i.y2,h=i.xAxis,d=i.yAxis;if(!h||!d)return null;var v=cb({x:h.scale,y:d.scale}),y={x:t?v.x.apply(s,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(c,{position:"start"}):v.y.rangeMin},x={x:n?v.x.apply(l,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(f,{position:"end"}):v.y.rangeMax};return wr(i,"discard")&&(!v.isInRange(y)||!v.isInRange(x))?null:cM(y,x)},b0=(function(e){function t(){return _G(this,t),CG(this,t,arguments)}return EG(t,e),OG(t,[{key:"render",value:function(){var r=this.props,a=r.x1,i=r.x2,s=r.y1,l=r.y2,c=r.className,f=r.alwaysShow,h=r.clipPathId;sr(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=Rt(a),v=Rt(i),y=Rt(s),x=Rt(l),I=this.props.shape;if(!d&&!v&&!y&&!x&&!I)return null;var b=RG(d,v,y,x,this.props);if(!b&&!I)return null;var S=wr(this.props,"hidden")?"url(#".concat(h,")"):void 0;return R.createElement(De,{className:He("recharts-reference-area",c)},t.renderRect(I,u3(u3({clipPath:S},We(this.props,!0)),b)),qt.renderCallByParent(this.props,b))}}])})(R.Component);y0(b0,"displayName","ReferenceArea");y0(b0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});y0(b0,"renderRect",function(e,t){var n;return R.isValidElement(e)?n=R.cloneElement(e,t):ke(e)?n=e(t):n=R.createElement(lb,zg({},t,{className:"recharts-reference-area-rect"})),n});function WM(e,t,n){if(t<1)return[];if(t===1&&n===void 0)return e;for(var r=[],a=0;a<e.length;a+=t)r.push(e[a]);return r}function HG(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return FV(r,n)}function jG(e,t,n){var r=n==="width",a=e.x,i=e.y,s=e.width,l=e.height;return t===1?{start:r?a:i,end:r?a+s:i+l}:{start:r?a+s:i+l,end:r?a:i}}function Ac(e,t,n,r,a){if(e*t<e*r||e*t>e*a)return!1;var i=n();return e*(t-e*i/2-r)>=0&&e*(t+e*i/2-a)<=0}function DG(e,t){return WM(e,t+1)}function $G(e,t,n,r,a){for(var i=(r||[]).slice(),s=t.start,l=t.end,c=0,f=1,h=s,d=function(){var x=r==null?void 0:r[c];if(x===void 0)return{v:WM(r,f)};var I=c,b,S=function(){return b===void 0&&(b=n(x,I)),b},W=x.coordinate,A=c===0||Ac(e,W,S,h,l);A||(c=0,h=s,f+=1),A&&(h=W+e*(S()/2+a),c+=f)},v;f<=i.length;)if(v=d(),v)return v.v;return[]}function zs(e){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zs(e)}function s3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s3(Object(n),!0).forEach(function(r){LG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function LG(e,t,n){return t=FG(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FG(e){var t=qG(e,"string");return zs(t)=="symbol"?t:t+""}function qG(e,t){if(zs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(zs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zG(e,t,n,r,a){for(var i=(r||[]).slice(),s=i.length,l=t.start,c=t.end,f=function(v){var y=i[v],x,I=function(){return x===void 0&&(x=n(y,v)),x};if(v===s-1){var b=e*(y.coordinate+e*I()/2-c);i[v]=y=Jt(Jt({},y),{},{tickCoord:b>0?y.coordinate-b*e:y.coordinate})}else i[v]=y=Jt(Jt({},y),{},{tickCoord:y.coordinate});var S=Ac(e,y.tickCoord,I,l,c);S&&(c=y.tickCoord-e*(I()/2+a),i[v]=Jt(Jt({},y),{},{isShow:!0}))},h=s-1;h>=0;h--)f(h);return i}function UG(e,t,n,r,a,i){var s=(r||[]).slice(),l=s.length,c=t.start,f=t.end;if(i){var h=r[l-1],d=n(h,l-1),v=e*(h.coordinate+e*d/2-f);s[l-1]=h=Jt(Jt({},h),{},{tickCoord:v>0?h.coordinate-v*e:h.coordinate});var y=Ac(e,h.tickCoord,function(){return d},c,f);y&&(f=h.tickCoord-e*(d/2+a),s[l-1]=Jt(Jt({},h),{},{isShow:!0}))}for(var x=i?l-1:l,I=function(W){var A=s[W],O,w=function(){return O===void 0&&(O=n(A,W)),O};if(W===0){var _=e*(A.coordinate-e*w()/2-c);s[W]=A=Jt(Jt({},A),{},{tickCoord:_<0?A.coordinate-_*e:A.coordinate})}else s[W]=A=Jt(Jt({},A),{},{tickCoord:A.coordinate});var N=Ac(e,A.tickCoord,w,c,f);N&&(c=A.tickCoord+e*(w()/2+a),s[W]=Jt(Jt({},A),{},{isShow:!0}))},b=0;b<x;b++)I(b);return s}function yb(e,t,n){var r=e.tick,a=e.ticks,i=e.viewBox,s=e.minTickGap,l=e.orientation,c=e.interval,f=e.tickFormatter,h=e.unit,d=e.angle;if(!a||!a.length||!r)return[];if(le(c)||Zr.isSsr)return DG(a,typeof c=="number"&&le(c)?c:0);var v=[],y=l==="top"||l==="bottom"?"width":"height",x=h&&y==="width"?ns(h,{fontSize:t,letterSpacing:n}):{width:0,height:0},I=function(A,O){var w=ke(f)?f(A.value,O):A.value;return y==="width"?HG(ns(w,{fontSize:t,letterSpacing:n}),x,d):ns(w,{fontSize:t,letterSpacing:n})[y]},b=a.length>=2?an(a[1].coordinate-a[0].coordinate):1,S=jG(i,b,y);return c==="equidistantPreserveStart"?$G(b,S,I,a,s):(c==="preserveStart"||c==="preserveStartEnd"?v=UG(b,S,I,a,s,c==="preserveStartEnd"):v=zG(b,S,I,a,s),v.filter(function(W){return W.isShow}))}var VG=["viewBox"],GG=["viewBox"],KG=["ticks"];function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(e)}function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ui.apply(this,arguments)}function l3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?l3(Object(n),!0).forEach(function(r){bb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bv(e,t){if(e==null)return{};var n=QG(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function QG(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function YG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_M(r.key),r)}}function XG(e,t,n){return t&&p3(e.prototype,t),n&&p3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ZG(e,t,n){return t=_c(t),JG(e,AM()?Reflect.construct(t,n||[],_c(e).constructor):t.apply(e,n))}function JG(e,t){if(t&&(Ei(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eK(e)}function eK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(AM=function(){return!!e})()}function _c(e){return _c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},_c(e)}function tK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Vg(e,t)}function Vg(e,t){return Vg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Vg(e,t)}function bb(e,t,n){return t=_M(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _M(e){var t=nK(e,"string");return Ei(t)=="symbol"?t:t+""}function nK(e,t){if(Ei(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var tu=(function(e){function t(n){var r;return YG(this,t),r=ZG(this,t,[n]),r.state={fontSize:"",letterSpacing:""},r}return tK(t,e),XG(t,[{key:"shouldComponentUpdate",value:function(r,a){var i=r.viewBox,s=bv(r,VG),l=this.props,c=l.viewBox,f=bv(l,GG);return!li(i,c)||!li(s,f)||!li(a,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var a=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.x,s=a.y,l=a.width,c=a.height,f=a.orientation,h=a.tickSize,d=a.mirror,v=a.tickMargin,y,x,I,b,S,W,A=d?-1:1,O=r.tickSize||h,w=le(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":y=x=r.coordinate,b=s+ +!d*c,I=b-A*O,W=I-A*v,S=w;break;case"left":I=b=r.coordinate,x=i+ +!d*l,y=x-A*O,S=y-A*v,W=w;break;case"right":I=b=r.coordinate,x=i+ +d*l,y=x+A*O,S=y+A*v,W=w;break;default:y=x=r.coordinate,b=s+ +d*c,I=b+A*O,W=I+A*v,S=w;break}return{line:{x1:y,y1:I,x2:x,y2:b},tick:{x:S,y:W}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s;switch(a){case"left":s=i?"start":"end";break;case"right":s=i?"end":"start";break;default:s="middle";break}return s}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s="end";switch(a){case"left":case"right":s="middle";break;case"top":s=i?"start":"end";break;default:s=i?"end":"start";break}return s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,c=r.orientation,f=r.mirror,h=r.axisLine,d=rn(rn(rn({},We(this.props,!1)),We(h,!1)),{},{fill:"none"});if(c==="top"||c==="bottom"){var v=+(c==="top"&&!f||c==="bottom"&&f);d=rn(rn({},d),{},{x1:a,y1:i+v*l,x2:a+s,y2:i+v*l})}else{var y=+(c==="left"&&!f||c==="right"&&f);d=rn(rn({},d),{},{x1:a+y*s,y1:i,x2:a+y*s,y2:i+l})}return R.createElement("line",ui({},d,{className:He("recharts-cartesian-axis-line",Mn(h,"className"))}))}},{key:"renderTicks",value:function(r,a,i){var s=this,l=this.props,c=l.tickLine,f=l.stroke,h=l.tick,d=l.tickFormatter,v=l.unit,y=yb(rn(rn({},this.props),{},{ticks:r}),a,i),x=this.getTickTextAnchor(),I=this.getTickVerticalAnchor(),b=We(this.props,!1),S=We(h,!1),W=rn(rn({},b),{},{fill:"none"},We(c,!1)),A=y.map(function(O,w){var _=s.getTickLineCoord(O),N=_.line,P=_.tick,C=rn(rn(rn(rn({textAnchor:x,verticalAnchor:I},b),{},{stroke:"none",fill:f},S),P),{},{index:w,payload:O,visibleTicksCount:y.length,tickFormatter:d});return R.createElement(De,ui({className:"recharts-cartesian-axis-tick",key:"tick-".concat(O.value,"-").concat(O.coordinate,"-").concat(O.tickCoord)},Ea(s.props,O,w)),c&&R.createElement("line",ui({},W,N,{className:He("recharts-cartesian-axis-tick-line",Mn(c,"className"))})),h&&t.renderTickItem(h,C,"".concat(ke(d)?d(O.value,w):O.value).concat(v||"")))});return R.createElement("g",{className:"recharts-cartesian-axis-ticks"},A)}},{key:"render",value:function(){var r=this,a=this.props,i=a.axisLine,s=a.width,l=a.height,c=a.ticksGenerator,f=a.className,h=a.hide;if(h)return null;var d=this.props,v=d.ticks,y=bv(d,KG),x=v;return ke(c)&&(x=v&&v.length>0?c(this.props):c(y)),s<=0||l<=0||!x||!x.length?null:R.createElement(De,{className:He("recharts-cartesian-axis",f),ref:function(b){r.layerReference=b}},i&&this.renderAxisLine(),this.renderTicks(x,this.state.fontSize,this.state.letterSpacing),qt.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return R.isValidElement(r)?s=R.cloneElement(r,a):ke(r)?s=r(a):s=R.createElement(go,ui({},a,{className:"recharts-cartesian-axis-tick-value"}),i),s}}])})(X.Component);bb(tu,"displayName","CartesianAxis");bb(tu,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var rK=["x1","y1","x2","y2","key"],aK=["offset"];function Io(e){"@babel/helpers - typeof";return Io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Io(e)}function c3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?c3(Object(n),!0).forEach(function(r){oK(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oK(e,t,n){return t=iK(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iK(e){var t=uK(e,"string");return Io(t)=="symbol"?t:t+""}function uK(e,t){if(Io(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Io(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(this,arguments)}function f3(e,t){if(e==null)return{};var n=sK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var lK=function(t){var n=t.fill;if(!n||n==="none")return null;var r=t.fillOpacity,a=t.x,i=t.y,s=t.width,l=t.height,c=t.ry;return R.createElement("rect",{x:a,y:i,ry:c,width:s,height:l,stroke:"none",fill:n,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function MM(e,t){var n;if(R.isValidElement(e))n=R.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=t.x1,a=t.y1,i=t.x2,s=t.y2,l=t.key,c=f3(t,rK),f=We(c,!1);f.offset;var h=f3(f,aK);n=R.createElement("line",fo({},h,{x1:r,y1:a,x2:i,y2:s,fill:"none",key:l}))}return n}function pK(e){var t=e.x,n=e.width,r=e.horizontal,a=r===void 0?!0:r,i=e.horizontalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(l,c){var f=en(en({},e),{},{x1:t,y1:l,x2:t+n,y2:l,key:"line-".concat(c),index:c});return MM(a,f)});return R.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function cK(e){var t=e.y,n=e.height,r=e.vertical,a=r===void 0?!0:r,i=e.verticalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(l,c){var f=en(en({},e),{},{x1:l,y1:t,x2:l,y2:t+n,key:"line-".concat(c),index:c});return MM(a,f)});return R.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function fK(e){var t=e.horizontalFill,n=e.fillOpacity,r=e.x,a=e.y,i=e.width,s=e.height,l=e.horizontalPoints,c=e.horizontal,f=c===void 0?!0:c;if(!f||!t||!t.length)return null;var h=l.map(function(v){return Math.round(v+a-a)}).sort(function(v,y){return v-y});a!==h[0]&&h.unshift(0);var d=h.map(function(v,y){var x=!h[y+1],I=x?a+s-v:h[y+1]-v;if(I<=0)return null;var b=y%t.length;return R.createElement("rect",{key:"react-".concat(y),y:v,x:r,height:I,width:i,stroke:"none",fill:t[b],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return R.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function dK(e){var t=e.vertical,n=t===void 0?!0:t,r=e.verticalFill,a=e.fillOpacity,i=e.x,s=e.y,l=e.width,c=e.height,f=e.verticalPoints;if(!n||!r||!r.length)return null;var h=f.map(function(v){return Math.round(v+i-i)}).sort(function(v,y){return v-y});i!==h[0]&&h.unshift(0);var d=h.map(function(v,y){var x=!h[y+1],I=x?i+l-v:h[y+1]-v;if(I<=0)return null;var b=y%r.length;return R.createElement("rect",{key:"react-".concat(y),x:v,y:s,width:I,height:c,stroke:"none",fill:r[b],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return R.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var hK=function(t,n){var r=t.xAxis,a=t.width,i=t.height,s=t.offset;return C_(yb(en(en(en({},tu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.left,s.left+s.width,n)},mK=function(t,n){var r=t.yAxis,a=t.width,i=t.height,s=t.offset;return C_(yb(en(en(en({},tu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.top,s.top+s.height,n)},ti={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function Mc(e){var t,n,r,a,i,s,l=hb(),c=mb(),f=nG(),h=en(en({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:ti.stroke,fill:(n=e.fill)!==null&&n!==void 0?n:ti.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:ti.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:ti.horizontalFill,vertical:(i=e.vertical)!==null&&i!==void 0?i:ti.vertical,verticalFill:(s=e.verticalFill)!==null&&s!==void 0?s:ti.verticalFill,x:le(e.x)?e.x:f.left,y:le(e.y)?e.y:f.top,width:le(e.width)?e.width:f.width,height:le(e.height)?e.height:f.height}),d=h.x,v=h.y,y=h.width,x=h.height,I=h.syncWithTicks,b=h.horizontalValues,S=h.verticalValues,W=JV(),A=eG();if(!le(y)||y<=0||!le(x)||x<=0||!le(d)||d!==+d||!le(v)||v!==+v)return null;var O=h.verticalCoordinatesGenerator||hK,w=h.horizontalCoordinatesGenerator||mK,_=h.horizontalPoints,N=h.verticalPoints;if((!_||!_.length)&&ke(w)){var P=b&&b.length,C=w({yAxis:A?en(en({},A),{},{ticks:P?b:A.ticks}):void 0,width:l,height:c,offset:f},P?!0:I);sr(Array.isArray(C),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Io(C),"]")),Array.isArray(C)&&(_=C)}if((!N||!N.length)&&ke(O)){var T=S&&S.length,j=O({xAxis:W?en(en({},W),{},{ticks:T?S:W.ticks}):void 0,width:l,height:c,offset:f},T?!0:I);sr(Array.isArray(j),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Io(j),"]")),Array.isArray(j)&&(N=j)}return R.createElement("g",{className:"recharts-cartesian-grid"},R.createElement(lK,{fill:h.fill,fillOpacity:h.fillOpacity,x:h.x,y:h.y,width:h.width,height:h.height,ry:h.ry}),R.createElement(pK,fo({},h,{offset:f,horizontalPoints:_,xAxis:W,yAxis:A})),R.createElement(cK,fo({},h,{offset:f,verticalPoints:N,xAxis:W,yAxis:A})),R.createElement(fK,fo({},h,{horizontalPoints:_})),R.createElement(dK,fo({},h,{verticalPoints:N})))}Mc.displayName="CartesianGrid";var vK=["type","layout","connectNulls","ref"],gK=["key"];function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ti(e)}function d3(e,t){if(e==null)return{};var n=yK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ss.apply(this,arguments)}function h3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?h3(Object(n),!0).forEach(function(r){or(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ni(e){return xK(e)||BK(e)||IK(e)||bK()}function bK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IK(e,t){if(e){if(typeof e=="string")return Gg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gg(e,t)}}function BK(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xK(e){if(Array.isArray(e))return Gg(e)}function Gg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,CM(r.key),r)}}function PK(e,t,n){return t&&m3(e.prototype,t),n&&m3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function SK(e,t,n){return t=Oc(t),WK(e,OM()?Reflect.construct(t,n||[],Oc(e).constructor):t.apply(e,n))}function WK(e,t){if(t&&(Ti(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return AK(e)}function AK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function OM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(OM=function(){return!!e})()}function Oc(e){return Oc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Oc(e)}function _K(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Kg(e,t)}function Kg(e,t){return Kg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Kg(e,t)}function or(e,t,n){return t=CM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function CM(e){var t=MK(e,"string");return Ti(t)=="symbol"?t:t+""}function MK(e,t){if(Ti(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var qr=(function(e){function t(){var n;wK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=SK(this,t,[].concat(a)),or(n,"state",{isAnimationFinished:!0,totalLength:0}),or(n,"generateSimpleStrokeDasharray",function(s,l){return"".concat(l,"px ").concat(s-l,"px")}),or(n,"getStrokeDasharray",function(s,l,c){var f=c.reduce(function(S,W){return S+W});if(!f)return n.generateSimpleStrokeDasharray(l,s);for(var h=Math.floor(s/f),d=s%f,v=l-s,y=[],x=0,I=0;x<c.length;I+=c[x],++x)if(I+c[x]>d){y=[].concat(ni(c.slice(0,x)),[d-I]);break}var b=y.length%2===0?[0,v]:[v];return[].concat(ni(t.repeat(c,h)),ni(y),b).map(function(S){return"".concat(S,"px")}).join(", ")}),or(n,"id",ja("recharts-line-")),or(n,"pathRef",function(s){n.mainCurve=s}),or(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0}),n.props.onAnimationEnd&&n.props.onAnimationEnd()}),or(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1}),n.props.onAnimationStart&&n.props.onAnimationStart()}),n}return _K(t,e),PK(t,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.points,l=i.xAxis,c=i.yAxis,f=i.layout,h=i.children,d=sn(h,eu);if(!d)return null;var v=function(I,b){return{x:I.x,y:I.y,value:I.value,errorVal:lt(I.payload,b)}},y={clipPath:r?"url(#clipPath-".concat(a,")"):null};return R.createElement(De,y,d.map(function(x){return R.cloneElement(x,{key:"bar-".concat(x.props.dataKey),data:s,xAxis:l,yAxis:c,layout:f,dataPointFormatter:v})}))}},{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var l=this.props,c=l.dot,f=l.points,h=l.dataKey,d=We(this.props,!1),v=We(c,!0),y=f.map(function(I,b){var S=wn(wn(wn({key:"dot-".concat(b),r:3},d),v),{},{index:b,cx:I.x,cy:I.y,value:I.value,dataKey:h,payload:I.payload,points:f});return t.renderDotItem(c,S)}),x={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return R.createElement(De,ss({className:"recharts-line-dots",key:"dots"},x),y)}},{key:"renderCurveStatically",value:function(r,a,i,s){var l=this.props,c=l.type,f=l.layout,h=l.connectNulls;l.ref;var d=d3(l,vK),v=wn(wn(wn({},We(d,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(i,")"):null,points:r},s),{},{type:c,layout:f,connectNulls:h});return R.createElement(ka,ss({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,a){var i=this,s=this.props,l=s.points,c=s.strokeDasharray,f=s.isAnimationActive,h=s.animationBegin,d=s.animationDuration,v=s.animationEasing,y=s.animationId,x=s.animateNewValues,I=s.width,b=s.height,S=this.state,W=S.prevPoints,A=S.totalLength;return R.createElement(Kn,{begin:h,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"line-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(O){var w=O.t;if(W){var _=W.length/l.length,N=l.map(function(E,$){var V=Math.floor($*_);if(W[V]){var G=W[V],z=ht(G.x,E.x),Q=ht(G.y,E.y);return wn(wn({},E),{},{x:z(w),y:Q(w)})}if(x){var L=ht(I*2,E.x),K=ht(b/2,E.y);return wn(wn({},E),{},{x:L(w),y:K(w)})}return wn(wn({},E),{},{x:E.x,y:E.y})});return i.renderCurveStatically(N,r,a)}var P=ht(0,A),C=P(w),T;if(c){var j="".concat(c).split(/[,\s]+/gim).map(function(E){return parseFloat(E)});T=i.getStrokeDasharray(C,A,j)}else T=i.generateSimpleStrokeDasharray(A,C);return i.renderCurveStatically(l,r,a,{strokeDasharray:T})})}},{key:"renderCurve",value:function(r,a){var i=this.props,s=i.points,l=i.isAnimationActive,c=this.state,f=c.prevPoints,h=c.totalLength;return l&&s&&s.length&&(!f&&h>0||!Ta(f,s))?this.renderCurveWithAnimation(r,a):this.renderCurveStatically(s,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,l=a.points,c=a.className,f=a.xAxis,h=a.yAxis,d=a.top,v=a.left,y=a.width,x=a.height,I=a.isAnimationActive,b=a.id;if(i||!l||!l.length)return null;var S=this.state.isAnimationFinished,W=l.length===1,A=He("recharts-line",c),O=f&&f.allowDataOverflow,w=h&&h.allowDataOverflow,_=O||w,N=Ne(b)?this.id:b,P=(r=We(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},C=P.r,T=C===void 0?3:C,j=P.strokeWidth,E=j===void 0?2:j,$=EW(s)?s:{},V=$.clipDot,G=V===void 0?!0:V,z=T*2+E;return R.createElement(De,{className:A},O||w?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(N)},R.createElement("rect",{x:O?v:v-y/2,y:w?d:d-x/2,width:O?y:y*2,height:w?x:x*2})),!G&&R.createElement("clipPath",{id:"clipPath-dots-".concat(N)},R.createElement("rect",{x:v-z/2,y:d-z/2,width:y+z,height:x+z}))):null,!W&&this.renderCurve(_,N),this.renderErrorBar(_,N),(W||s)&&this.renderDots(_,G,N),(!I||S)&&lr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,a){for(var i=r.length%2!==0?[].concat(ni(r),[0]):r,s=[],l=0;l<a;++l)s=[].concat(ni(s),ni(i));return s}},{key:"renderDotItem",value:function(r,a){var i;if(R.isValidElement(r))i=R.cloneElement(r,a);else if(ke(r))i=r(a);else{var s=a.key,l=d3(a,gK),c=He("recharts-line-dot",typeof r!="boolean"?r.className:"");i=R.createElement(tl,ss({key:s},l,{className:c}))}return i}}])})(X.PureComponent);or(qr,"displayName","Line");or(qr,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});or(qr,"getComposedData",function(e){var t=e.props,n=e.xAxis,r=e.yAxis,a=e.xAxisTicks,i=e.yAxisTicks,s=e.dataKey,l=e.bandSize,c=e.displayedData,f=e.offset,h=t.layout,d=c.map(function(v,y){var x=lt(v,s);return h==="horizontal"?{x:wi({axis:n,ticks:a,bandSize:l,entry:v,index:y}),y:Ne(x)?null:r.scale(x),value:x,payload:v}:{x:Ne(x)?null:n.scale(x),y:wi({axis:r,ticks:i,bandSize:l,entry:v,index:y}),value:x,payload:v}});return wn({points:d,layout:h},f)});var OK=["layout","type","stroke","connectNulls","isRange","ref"],CK=["key"],kM;function Ri(e){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ri(e)}function NM(e,t){if(e==null)return{};var n=kK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function kK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}function v3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v3(Object(n),!0).forEach(function(r){Ir(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function NK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,TM(r.key),r)}}function EK(e,t,n){return t&&g3(e.prototype,t),n&&g3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function TK(e,t,n){return t=Cc(t),RK(e,EM()?Reflect.construct(t,n||[],Cc(e).constructor):t.apply(e,n))}function RK(e,t){if(t&&(Ri(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return HK(e)}function HK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function EM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(EM=function(){return!!e})()}function Cc(e){return Cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Cc(e)}function jK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qg(e,t)}function Qg(e,t){return Qg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Qg(e,t)}function Ir(e,t,n){return t=TM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function TM(e){var t=DK(e,"string");return Ri(t)=="symbol"?t:t+""}function DK(e,t){if(Ri(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ri(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var So=(function(e){function t(){var n;NK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=TK(this,t,[].concat(a)),Ir(n,"state",{isAnimationFinished:!0}),Ir(n,"id",ja("recharts-area-")),Ir(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),ke(s)&&s()}),Ir(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),ke(s)&&s()}),n}return jK(t,e),EK(t,[{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive,l=this.state.isAnimationFinished;if(s&&!l)return null;var c=this.props,f=c.dot,h=c.points,d=c.dataKey,v=We(this.props,!1),y=We(f,!0),x=h.map(function(b,S){var W=Pa(Pa(Pa({key:"dot-".concat(S),r:3},v),y),{},{index:S,cx:b.x,cy:b.y,dataKey:d,value:b.value,payload:b.payload,points:h});return t.renderDotItem(f,W)}),I={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return R.createElement(De,ho({className:"recharts-area-dots"},I),x)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,l=a.strokeWidth,c=s[0].x,f=s[s.length-1].x,h=r*Math.abs(c-f),d=Aa(s.map(function(v){return v.y||0}));return le(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Aa(i.map(function(v){return v.y||0})),d)),le(d)?R.createElement("rect",{x:c<f?c:c-h,y:0,width:h,height:Math.floor(d+(l?parseInt("".concat(l),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,l=a.strokeWidth,c=s[0].y,f=s[s.length-1].y,h=r*Math.abs(c-f),d=Aa(s.map(function(v){return v.x||0}));return le(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Aa(i.map(function(v){return v.x||0})),d)),le(d)?R.createElement("rect",{x:0,y:c<f?c:c-h,width:d+(l?parseInt("".concat(l),10):1),height:Math.floor(h)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,i,s){var l=this.props,c=l.layout,f=l.type,h=l.stroke,d=l.connectNulls,v=l.isRange;l.ref;var y=NM(l,OK);return R.createElement(De,{clipPath:i?"url(#clipPath-".concat(s,")"):null},R.createElement(ka,ho({},We(y,!0),{points:r,connectNulls:d,type:f,baseLine:a,layout:c,stroke:"none",className:"recharts-area-area"})),h!=="none"&&R.createElement(ka,ho({},We(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:r})),h!=="none"&&v&&R.createElement(ka,ho({},We(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var i=this,s=this.props,l=s.points,c=s.baseLine,f=s.isAnimationActive,h=s.animationBegin,d=s.animationDuration,v=s.animationEasing,y=s.animationId,x=this.state,I=x.prevPoints,b=x.prevBaseLine;return R.createElement(Kn,{begin:h,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"area-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(S){var W=S.t;if(I){var A=I.length/l.length,O=l.map(function(P,C){var T=Math.floor(C*A);if(I[T]){var j=I[T],E=ht(j.x,P.x),$=ht(j.y,P.y);return Pa(Pa({},P),{},{x:E(W),y:$(W)})}return P}),w;if(le(c)&&typeof c=="number"){var _=ht(b,c);w=_(W)}else if(Ne(c)||Qi(c)){var N=ht(b,0);w=N(W)}else w=c.map(function(P,C){var T=Math.floor(C*A);if(b[T]){var j=b[T],E=ht(j.x,P.x),$=ht(j.y,P.y);return Pa(Pa({},P),{},{x:E(W),y:$(W)})}return P});return i.renderAreaStatically(O,w,r,a)}return R.createElement(De,null,R.createElement("defs",null,R.createElement("clipPath",{id:"animationClipPath-".concat(a)},i.renderClipRect(W))),R.createElement(De,{clipPath:"url(#animationClipPath-".concat(a,")")},i.renderAreaStatically(l,c,r,a)))})}},{key:"renderArea",value:function(r,a){var i=this.props,s=i.points,l=i.baseLine,c=i.isAnimationActive,f=this.state,h=f.prevPoints,d=f.prevBaseLine,v=f.totalLength;return c&&s&&s.length&&(!h&&v>0||!Ta(h,s)||!Ta(d,l))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(s,l,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,l=a.points,c=a.className,f=a.top,h=a.left,d=a.xAxis,v=a.yAxis,y=a.width,x=a.height,I=a.isAnimationActive,b=a.id;if(i||!l||!l.length)return null;var S=this.state.isAnimationFinished,W=l.length===1,A=He("recharts-area",c),O=d&&d.allowDataOverflow,w=v&&v.allowDataOverflow,_=O||w,N=Ne(b)?this.id:b,P=(r=We(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},C=P.r,T=C===void 0?3:C,j=P.strokeWidth,E=j===void 0?2:j,$=EW(s)?s:{},V=$.clipDot,G=V===void 0?!0:V,z=T*2+E;return R.createElement(De,{className:A},O||w?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(N)},R.createElement("rect",{x:O?h:h-y/2,y:w?f:f-x/2,width:O?y:y*2,height:w?x:x*2})),!G&&R.createElement("clipPath",{id:"clipPath-dots-".concat(N)},R.createElement("rect",{x:h-z/2,y:f-z/2,width:y+z,height:x+z}))):null,W?null:this.renderArea(_,N),(s||W)&&this.renderDots(_,G,N),(!I||S)&&lr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(X.PureComponent);kM=So;Ir(So,"displayName","Area");Ir(So,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});Ir(So,"getBaseValue",function(e,t,n,r){var a=e.layout,i=e.baseValue,s=t.props.baseValue,l=s??i;if(le(l)&&typeof l=="number")return l;var c=a==="horizontal"?r:n,f=c.scale.domain();if(c.type==="number"){var h=Math.max(f[0],f[1]),d=Math.min(f[0],f[1]);return l==="dataMin"?d:l==="dataMax"||h<0?h:Math.max(Math.min(f[0],f[1]),0)}return l==="dataMin"?f[0]:l==="dataMax"?f[1]:f[0]});Ir(So,"getComposedData",function(e){var t=e.props,n=e.item,r=e.xAxis,a=e.yAxis,i=e.xAxisTicks,s=e.yAxisTicks,l=e.bandSize,c=e.dataKey,f=e.stackedData,h=e.dataStartIndex,d=e.displayedData,v=e.offset,y=t.layout,x=f&&f.length,I=kM.getBaseValue(t,n,r,a),b=y==="horizontal",S=!1,W=d.map(function(O,w){var _;x?_=f[h+w]:(_=lt(O,c),Array.isArray(_)?S=!0:_=[I,_]);var N=_[1]==null||x&&lt(O,c)==null;return b?{x:wi({axis:r,ticks:i,bandSize:l,entry:O,index:w}),y:N?null:a.scale(_[1]),value:_,payload:O}:{x:N?null:r.scale(_[1]),y:wi({axis:a,ticks:s,bandSize:l,entry:O,index:w}),value:_,payload:O}}),A;return x||S?A=W.map(function(O){var w=Array.isArray(O.value)?O.value[0]:null;return b?{x:O.x,y:w!=null&&O.y!=null?a.scale(w):null}:{x:w!=null?r.scale(w):null,y:O.y}}):A=b?a.scale(I):r.scale(I),Pa({points:W,baseLine:A,layout:y,isRange:S},v)});Ir(So,"renderDotItem",function(e,t){var n;if(R.isValidElement(e))n=R.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=He("recharts-area-dot",typeof e!="boolean"?e.className:""),a=t.key,i=NM(t,CK);n=R.createElement(tl,ho({},i,{key:a,className:r}))}return n});function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hi(e)}function $K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function LK(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,jM(r.key),r)}}function FK(e,t,n){return t&&LK(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function qK(e,t,n){return t=kc(t),zK(e,RM()?Reflect.construct(t,n||[],kc(e).constructor):t.apply(e,n))}function zK(e,t){if(t&&(Hi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return UK(e)}function UK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function RM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(RM=function(){return!!e})()}function kc(e){return kc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},kc(e)}function VK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yg(e,t)}function Yg(e,t){return Yg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yg(e,t)}function HM(e,t,n){return t=jM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jM(e){var t=GK(e,"string");return Hi(t)=="symbol"?t:t+""}function GK(e,t){if(Hi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var I0=(function(e){function t(){return $K(this,t),qK(this,t,arguments)}return VK(t,e),FK(t,[{key:"render",value:function(){return null}}])})(R.Component);HM(I0,"displayName","ZAxis");HM(I0,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var KK=["option","isActive"];function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}function QK(e,t){if(e==null)return{};var n=YK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function YK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function XK(e){var t=e.option,n=e.isActive,r=QK(e,KK);return typeof t=="string"?R.createElement(gc,ls({option:R.createElement(Qc,ls({type:t},r)),isActive:n,shapeType:"symbols"},r)):R.createElement(gc,ls({option:t,isActive:n,shapeType:"symbols"},r))}function ji(e){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ji(e)}function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ps.apply(this,arguments)}function y3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y3(Object(n),!0).forEach(function(r){Ma(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$M(r.key),r)}}function JK(e,t,n){return t&&b3(e.prototype,t),n&&b3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function eQ(e,t,n){return t=Nc(t),tQ(e,DM()?Reflect.construct(t,n||[],Nc(e).constructor):t.apply(e,n))}function tQ(e,t){if(t&&(ji(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nQ(e)}function nQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function DM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(DM=function(){return!!e})()}function Nc(e){return Nc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Nc(e)}function rQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Xg(e,t)}function Xg(e,t){return Xg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xg(e,t)}function Ma(e,t,n){return t=$M(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $M(e){var t=aQ(e,"string");return ji(t)=="symbol"?t:t+""}function aQ(e,t){if(ji(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var B0=(function(e){function t(){var n;ZK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=eQ(this,t,[].concat(a)),Ma(n,"state",{isAnimationFinished:!1}),Ma(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0})}),Ma(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1})}),Ma(n,"id",ja("recharts-scatter-")),n}return rQ(t,e),JK(t,[{key:"renderSymbolsStatically",value:function(r){var a=this,i=this.props,s=i.shape,l=i.activeShape,c=i.activeIndex,f=We(this.props,!1);return r.map(function(h,d){var v=c===d,y=v?l:s,x=Fn(Fn({},f),h);return R.createElement(De,ps({className:"recharts-scatter-symbol",key:"symbol-".concat(h==null?void 0:h.cx,"-").concat(h==null?void 0:h.cy,"-").concat(h==null?void 0:h.size,"-").concat(d)},Ea(a.props,h,d),{role:"img"}),R.createElement(XK,ps({option:y,isActive:v,key:"symbol-".concat(d)},x)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,i=a.points,s=a.isAnimationActive,l=a.animationBegin,c=a.animationDuration,f=a.animationEasing,h=a.animationId,d=this.state.prevPoints;return R.createElement(Kn,{begin:l,duration:c,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(h),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var y=v.t,x=i.map(function(I,b){var S=d&&d[b];if(S){var W=ht(S.cx,I.cx),A=ht(S.cy,I.cy),O=ht(S.size,I.size);return Fn(Fn({},I),{},{cx:W(y),cy:A(y),size:O(y)})}var w=ht(0,I.size);return Fn(Fn({},I),{},{size:w(y)})});return R.createElement(De,null,r.renderSymbolsStatically(x))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,i=r.isAnimationActive,s=this.state.prevPoints;return i&&a&&a.length&&(!s||!Ta(s,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,i=a.points,s=a.xAxis,l=a.yAxis,c=a.children,f=sn(c,eu);return f?f.map(function(h,d){var v=h.props,y=v.direction,x=v.dataKey;return R.cloneElement(h,{key:"".concat(y,"-").concat(x,"-").concat(i[d]),data:i,xAxis:s,yAxis:l,layout:y==="x"?"vertical":"horizontal",dataPointFormatter:function(b,S){return{x:b.cx,y:b.cy,value:y==="x"?+b.node.x:+b.node.y,errorVal:lt(b,S)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,i=r.line,s=r.lineType,l=r.lineJointType,c=We(this.props,!1),f=We(i,!1),h,d;if(s==="joint")h=a.map(function(A){return{x:A.cx,y:A.cy}});else if(s==="fitting"){var v=YR(a),y=v.xmin,x=v.xmax,I=v.a,b=v.b,S=function(O){return I*O+b};h=[{x:y,y:S(y)},{x,y:S(x)}]}var W=Fn(Fn(Fn({},c),{},{fill:"none",stroke:c&&c.fill},f),{},{points:h});return R.isValidElement(i)?d=R.cloneElement(i,W):ke(i)?d=i(W):d=R.createElement(ka,ps({},W,{type:l})),R.createElement(De,{className:"recharts-scatter-line",key:"recharts-scatter-line"},d)}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.points,s=r.line,l=r.className,c=r.xAxis,f=r.yAxis,h=r.left,d=r.top,v=r.width,y=r.height,x=r.id,I=r.isAnimationActive;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,S=He("recharts-scatter",l),W=c&&c.allowDataOverflow,A=f&&f.allowDataOverflow,O=W||A,w=Ne(x)?this.id:x;return R.createElement(De,{className:S,clipPath:O?"url(#clipPath-".concat(w,")"):null},W||A?R.createElement("defs",null,R.createElement("clipPath",{id:"clipPath-".concat(w)},R.createElement("rect",{x:W?h:h-v/2,y:A?d:d-y/2,width:W?v:v*2,height:A?y:y*2}))):null,s&&this.renderLine(),this.renderErrorBar(),R.createElement(De,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!I||b)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}])})(X.PureComponent);Ma(B0,"displayName","Scatter");Ma(B0,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});Ma(B0,"getComposedData",function(e){var t=e.xAxis,n=e.yAxis,r=e.zAxis,a=e.item,i=e.displayedData,s=e.xAxisTicks,l=e.yAxisTicks,c=e.offset,f=a.props.tooltipType,h=sn(a.props.children,Ys),d=Ne(t.dataKey)?a.props.dataKey:t.dataKey,v=Ne(n.dataKey)?a.props.dataKey:n.dataKey,y=r&&r.dataKey,x=r?r.range:I0.defaultProps.range,I=x&&x[0],b=t.scale.bandwidth?t.scale.bandwidth():0,S=n.scale.bandwidth?n.scale.bandwidth():0,W=i.map(function(A,O){var w=lt(A,d),_=lt(A,v),N=!Ne(y)&&lt(A,y)||"-",P=[{name:Ne(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:w,payload:A,dataKey:d,type:f},{name:Ne(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:_,payload:A,dataKey:v,type:f}];N!=="-"&&P.push({name:r.name||r.dataKey,unit:r.unit||"",value:N,payload:A,dataKey:y,type:f});var C=wi({axis:t,ticks:s,bandSize:b,entry:A,index:O,dataKey:d}),T=wi({axis:n,ticks:l,bandSize:S,entry:A,index:O,dataKey:v}),j=N!=="-"?r.scale(N):I,E=Math.sqrt(Math.max(j,0)/Math.PI);return Fn(Fn({},A),{},{cx:C,cy:T,x:C-E,y:T-E,xAxis:t,yAxis:n,zAxis:r,width:2*E,height:2*E,size:j,node:{x:w,y:_,z:N},tooltipPayload:P,tooltipPosition:{x:C,y:T},payload:A},h&&h[O]&&h[O].props)});return Fn({points:W},c)});function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Di(e)}function oQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function iQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,qM(r.key),r)}}function uQ(e,t,n){return t&&iQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function sQ(e,t,n){return t=Ec(t),lQ(e,LM()?Reflect.construct(t,n||[],Ec(e).constructor):t.apply(e,n))}function lQ(e,t){if(t&&(Di(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pQ(e)}function pQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function LM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(LM=function(){return!!e})()}function Ec(e){return Ec=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ec(e)}function cQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zg(e,t)}function Zg(e,t){return Zg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zg(e,t)}function FM(e,t,n){return t=qM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qM(e){var t=fQ(e,"string");return Di(t)=="symbol"?t:t+""}function fQ(e,t){if(Di(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Jg(){return Jg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jg.apply(this,arguments)}function dQ(e){var t=e.xAxisId,n=hb(),r=mb(),a=yM(t);return a==null?null:R.createElement(tu,Jg({},a,{className:He("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:n,height:r},ticksGenerator:function(s){return Fr(s,!0)}}))}var Ra=(function(e){function t(){return oQ(this,t),sQ(this,t,arguments)}return cQ(t,e),uQ(t,[{key:"render",value:function(){return R.createElement(dQ,this.props)}}])})(R.Component);FM(Ra,"displayName","XAxis");FM(Ra,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function $i(e){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$i(e)}function hQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,VM(r.key),r)}}function vQ(e,t,n){return t&&mQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function gQ(e,t,n){return t=Tc(t),yQ(e,zM()?Reflect.construct(t,n||[],Tc(e).constructor):t.apply(e,n))}function yQ(e,t){if(t&&($i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return bQ(e)}function bQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function zM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(zM=function(){return!!e})()}function Tc(e){return Tc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Tc(e)}function IQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ey(e,t)}function ey(e,t){return ey=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ey(e,t)}function UM(e,t,n){return t=VM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function VM(e){var t=BQ(e,"string");return $i(t)=="symbol"?t:t+""}function BQ(e,t){if($i(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ty(){return ty=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ty.apply(this,arguments)}var xQ=function(t){var n=t.yAxisId,r=hb(),a=mb(),i=bM(n);return i==null?null:R.createElement(tu,ty({},i,{className:He("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:a},ticksGenerator:function(l){return Fr(l,!0)}}))},Br=(function(e){function t(){return hQ(this,t),gQ(this,t,arguments)}return IQ(t,e),vQ(t,[{key:"render",value:function(){return R.createElement(xQ,this.props)}}])})(R.Component);UM(Br,"displayName","YAxis");UM(Br,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function I3(e){return WQ(e)||SQ(e)||PQ(e)||wQ()}function wQ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PQ(e,t){if(e){if(typeof e=="string")return ny(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ny(e,t)}}function SQ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function WQ(e){if(Array.isArray(e))return ny(e)}function ny(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ry=function(t,n,r,a,i){var s=sn(t,gb),l=sn(t,g0),c=[].concat(I3(s),I3(l)),f=sn(t,b0),h="".concat(a,"Id"),d=a[0],v=n;if(c.length&&(v=c.reduce(function(I,b){if(b.props[h]===r&&wr(b.props,"extendDomain")&&le(b.props[d])){var S=b.props[d];return[Math.min(I[0],S),Math.max(I[1],S)]}return I},v)),f.length){var y="".concat(d,"1"),x="".concat(d,"2");v=f.reduce(function(I,b){if(b.props[h]===r&&wr(b.props,"extendDomain")&&le(b.props[y])&&le(b.props[x])){var S=b.props[y],W=b.props[x];return[Math.min(I[0],S,W),Math.max(I[1],S,W)]}return I},v)}return i&&i.length&&(v=i.reduce(function(I,b){return le(b)?[Math.min(I[0],b),Math.max(I[1],b)]:I},v)),v},Iv={exports:{}},B3;function AQ(){return B3||(B3=1,(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function a(c,f,h){this.fn=c,this.context=f,this.once=h||!1}function i(c,f,h,d,v){if(typeof h!="function")throw new TypeError("The listener must be a function");var y=new a(h,d||c,v),x=n?n+f:f;return c._events[x]?c._events[x].fn?c._events[x]=[c._events[x],y]:c._events[x].push(y):(c._events[x]=y,c._eventsCount++),c}function s(c,f){--c._eventsCount===0?c._events=new r:delete c._events[f]}function l(){this._events=new r,this._eventsCount=0}l.prototype.eventNames=function(){var f=[],h,d;if(this._eventsCount===0)return f;for(d in h=this._events)t.call(h,d)&&f.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(h)):f},l.prototype.listeners=function(f){var h=n?n+f:f,d=this._events[h];if(!d)return[];if(d.fn)return[d.fn];for(var v=0,y=d.length,x=new Array(y);v<y;v++)x[v]=d[v].fn;return x},l.prototype.listenerCount=function(f){var h=n?n+f:f,d=this._events[h];return d?d.fn?1:d.length:0},l.prototype.emit=function(f,h,d,v,y,x){var I=n?n+f:f;if(!this._events[I])return!1;var b=this._events[I],S=arguments.length,W,A;if(b.fn){switch(b.once&&this.removeListener(f,b.fn,void 0,!0),S){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,h),!0;case 3:return b.fn.call(b.context,h,d),!0;case 4:return b.fn.call(b.context,h,d,v),!0;case 5:return b.fn.call(b.context,h,d,v,y),!0;case 6:return b.fn.call(b.context,h,d,v,y,x),!0}for(A=1,W=new Array(S-1);A<S;A++)W[A-1]=arguments[A];b.fn.apply(b.context,W)}else{var O=b.length,w;for(A=0;A<O;A++)switch(b[A].once&&this.removeListener(f,b[A].fn,void 0,!0),S){case 1:b[A].fn.call(b[A].context);break;case 2:b[A].fn.call(b[A].context,h);break;case 3:b[A].fn.call(b[A].context,h,d);break;case 4:b[A].fn.call(b[A].context,h,d,v);break;default:if(!W)for(w=1,W=new Array(S-1);w<S;w++)W[w-1]=arguments[w];b[A].fn.apply(b[A].context,W)}}return!0},l.prototype.on=function(f,h,d){return i(this,f,h,d,!1)},l.prototype.once=function(f,h,d){return i(this,f,h,d,!0)},l.prototype.removeListener=function(f,h,d,v){var y=n?n+f:f;if(!this._events[y])return this;if(!h)return s(this,y),this;var x=this._events[y];if(x.fn)x.fn===h&&(!v||x.once)&&(!d||x.context===d)&&s(this,y);else{for(var I=0,b=[],S=x.length;I<S;I++)(x[I].fn!==h||v&&!x[I].once||d&&x[I].context!==d)&&b.push(x[I]);b.length?this._events[y]=b.length===1?b[0]:b:s(this,y)}return this},l.prototype.removeAllListeners=function(f){var h;return f?(h=n?n+f:f,this._events[h]&&s(this,h)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=n,l.EventEmitter=l,e.exports=l})(Iv)),Iv.exports}var _Q=AQ();const MQ=Xe(_Q);var Bv=new MQ,xv="recharts.syncMouseEvents";function Us(e){"@babel/helpers - typeof";return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Us(e)}function OQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function CQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,GM(r.key),r)}}function kQ(e,t,n){return t&&CQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function wv(e,t,n){return t=GM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function GM(e){var t=NQ(e,"string");return Us(t)=="symbol"?t:t+""}function NQ(e,t){if(Us(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Us(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var EQ=(function(){function e(){OQ(this,e),wv(this,"activeIndex",0),wv(this,"coordinateList",[]),wv(this,"layout","horizontal")}return kQ(e,[{key:"setDetails",value:function(n){var r,a=n.coordinateList,i=a===void 0?null:a,s=n.container,l=s===void 0?null:s,c=n.layout,f=c===void 0?null:c,h=n.offset,d=h===void 0?null:h,v=n.mouseHandlerCallback,y=v===void 0?null:v;this.coordinateList=(r=i??this.coordinateList)!==null&&r!==void 0?r:[],this.container=l??this.container,this.layout=f??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=y??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(n){if(this.coordinateList.length!==0)switch(n.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(n){this.activeIndex=n}},{key:"spoofMouse",value:function(){var n,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),i=a.x,s=a.y,l=a.height,c=this.coordinateList[this.activeIndex].coordinate,f=((n=window)===null||n===void 0?void 0:n.scrollX)||0,h=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=i+c+f,v=s+this.offset.top+l/2+h;this.mouseHandlerCallback({pageX:d,pageY:v})}}}])})();function TQ(e,t,n){if(n==="number"&&t===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],a=e==null?void 0:e[1];if(r&&a&&le(r)&&le(a))return!0}return!1}function RQ(e,t,n,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:n.left+.5,y:e==="horizontal"?n.top+.5:t.y-a,width:e==="horizontal"?r:n.width-1,height:e==="horizontal"?n.height-1:r}}function KM(e){var t=e.cx,n=e.cy,r=e.radius,a=e.startAngle,i=e.endAngle,s=ot(t,n,r,a),l=ot(t,n,r,i);return{points:[s,l],cx:t,cy:n,radius:r,startAngle:a,endAngle:i}}function HQ(e,t,n){var r,a,i,s;if(e==="horizontal")r=t.x,i=r,a=n.top,s=n.top+n.height;else if(e==="vertical")a=t.y,s=a,r=n.left,i=n.left+n.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var l=t.cx,c=t.cy,f=t.innerRadius,h=t.outerRadius,d=t.angle,v=ot(l,c,f,d),y=ot(l,c,h,d);r=v.x,a=v.y,i=y.x,s=y.y}else return KM(t);return[{x:r,y:a},{x:i,y:s}]}function Vs(e){"@babel/helpers - typeof";return Vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vs(e)}function x3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Sp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x3(Object(n),!0).forEach(function(r){jQ(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jQ(e,t,n){return t=DQ(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function DQ(e){var t=$Q(e,"string");return Vs(t)=="symbol"?t:t+""}function $Q(e,t){if(Vs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function LQ(e){var t,n,r=e.element,a=e.tooltipEventType,i=e.isActive,s=e.activeCoordinate,l=e.activePayload,c=e.offset,f=e.activeTooltipIndex,h=e.tooltipAxisBandSize,d=e.layout,v=e.chartName,y=(t=r.props.cursor)!==null&&t!==void 0?t:(n=r.type.defaultProps)===null||n===void 0?void 0:n.cursor;if(!r||!y||!i||!s||v!=="ScatterChart"&&a!=="axis")return null;var x,I=ka;if(v==="ScatterChart")x=s,I=Ez;else if(v==="BarChart")x=RQ(d,s,c,h),I=lb;else if(d==="radial"){var b=KM(s),S=b.cx,W=b.cy,A=b.radius,O=b.startAngle,w=b.endAngle;x={cx:S,cy:W,startAngle:O,endAngle:w,innerRadius:A,outerRadius:A},I=F_}else x={points:HQ(d,s,c)},I=ka;var _=Sp(Sp(Sp(Sp({stroke:"#ccc",pointerEvents:"none"},c),x),We(y,!1)),{},{payload:l,payloadIndex:f,className:He("recharts-tooltip-cursor",y.className)});return X.isValidElement(y)?X.cloneElement(y,_):X.createElement(I,_)}var FQ=["item"],qQ=["children","className","width","height","style","compact","title","desc"];function Li(e){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Li(e)}function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},si.apply(this,arguments)}function w3(e,t){return VQ(e)||UQ(e,t)||YM(e,t)||zQ()}function zQ(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UQ(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function VQ(e){if(Array.isArray(e))return e}function P3(e,t){if(e==null)return{};var n=GQ(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function GQ(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function KQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function QQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,XM(r.key),r)}}function YQ(e,t,n){return t&&QQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function XQ(e,t,n){return t=Rc(t),ZQ(e,QM()?Reflect.construct(t,n||[],Rc(e).constructor):t.apply(e,n))}function ZQ(e,t){if(t&&(Li(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return JQ(e)}function JQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function QM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(QM=function(){return!!e})()}function Rc(e){return Rc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Rc(e)}function eY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ay(e,t)}function ay(e,t){return ay=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ay(e,t)}function Fi(e){return rY(e)||nY(e)||YM(e)||tY()}function tY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function YM(e,t){if(e){if(typeof e=="string")return oy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oy(e,t)}}function nY(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rY(e){if(Array.isArray(e))return oy(e)}function oy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?S3(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ee(e,t,n){return t=XM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XM(e){var t=aY(e,"string");return Li(t)=="symbol"?t:t+""}function aY(e,t){if(Li(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Li(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var oY={xAxis:["bottom","top"],yAxis:["left","right"]},iY={width:"100%",height:"100%"},ZM={x:0,y:0};function Wp(e){return e}var uY=function(t,n){return n==="horizontal"?t.x:n==="vertical"?t.y:n==="centric"?t.angle:t.radius},sY=function(t,n,r,a){var i=n.find(function(h){return h&&h.index===r});if(i){if(t==="horizontal")return{x:i.coordinate,y:a.y};if(t==="vertical")return{x:a.x,y:i.coordinate};if(t==="centric"){var s=i.coordinate,l=a.radius;return ae(ae(ae({},a),ot(a.cx,a.cy,l,s)),{},{angle:s,radius:l})}var c=i.coordinate,f=a.angle;return ae(ae(ae({},a),ot(a.cx,a.cy,c,f)),{},{angle:f,radius:c})}return ZM},x0=function(t,n){var r=n.graphicalItems,a=n.dataStartIndex,i=n.dataEndIndex,s=(r??[]).reduce(function(l,c){var f=c.props.data;return f&&f.length?[].concat(Fi(l),Fi(f)):l},[]);return s.length>0?s:t&&t.length&&le(a)&&le(i)?t.slice(a,i+1):[]};function JM(e){return e==="number"?[0,"auto"]:void 0}var iy=function(t,n,r,a){var i=t.graphicalItems,s=t.tooltipAxis,l=x0(n,t);return r<0||!i||!i.length||r>=l.length?null:i.reduce(function(c,f){var h,d=(h=f.props.data)!==null&&h!==void 0?h:n;d&&t.dataStartIndex+t.dataEndIndex!==0&&t.dataEndIndex-t.dataStartIndex>=r&&(d=d.slice(t.dataStartIndex,t.dataEndIndex+1));var v;if(s.dataKey&&!s.allowDuplicatedCategory){var y=d===void 0?l:d;v=Np(y,s.dataKey,a)}else v=d&&d[r]||l[r];return v?[].concat(Fi(c),[R_(f,v)]):c},[])},W3=function(t,n,r,a){var i=a||{x:t.chartX,y:t.chartY},s=uY(i,r),l=t.orderedTooltipTicks,c=t.tooltipAxis,f=t.tooltipTicks,h=t9(s,l,f,c);if(h>=0&&f){var d=f[h]&&f[h].value,v=iy(t,n,h,d),y=sY(r,l,h,i);return{activeTooltipIndex:h,activeLabel:d,activePayload:v,activeCoordinate:y}}return null},lY=function(t,n){var r=n.axes,a=n.graphicalItems,i=n.axisType,s=n.axisIdKey,l=n.stackGroups,c=n.dataStartIndex,f=n.dataEndIndex,h=t.layout,d=t.children,v=t.stackOffset,y=O_(h,i);return r.reduce(function(x,I){var b,S=I.type.defaultProps!==void 0?ae(ae({},I.type.defaultProps),I.props):I.props,W=S.type,A=S.dataKey,O=S.allowDataOverflow,w=S.allowDuplicatedCategory,_=S.scale,N=S.ticks,P=S.includeHidden,C=S[s];if(x[C])return x;var T=x0(t.data,{graphicalItems:a.filter(function(F){var J,ue=s in F.props?F.props[s]:(J=F.type.defaultProps)===null||J===void 0?void 0:J[s];return ue===C}),dataStartIndex:c,dataEndIndex:f}),j=T.length,E,$,V;TQ(S.domain,O,W)&&(E=gg(S.domain,null,O),y&&(W==="number"||_!=="auto")&&(V=as(T,A,"category")));var G=JM(W);if(!E||E.length===0){var z,Q=(z=S.domain)!==null&&z!==void 0?z:G;if(A){if(E=as(T,A,W),W==="category"&&y){var L=QR(E);w&&L?($=E,E=bc(0,j)):w||(E=P4(Q,E,I).reduce(function(F,J){return F.indexOf(J)>=0?F:[].concat(Fi(F),[J])},[]))}else if(W==="category")w?E=E.filter(function(F){return F!==""&&!Ne(F)}):E=P4(Q,E,I).reduce(function(F,J){return F.indexOf(J)>=0||J===""||Ne(J)?F:[].concat(Fi(F),[J])},[]);else if(W==="number"){var K=i9(T,a.filter(function(F){var J,ue,he=s in F.props?F.props[s]:(J=F.type.defaultProps)===null||J===void 0?void 0:J[s],ge="hide"in F.props?F.props.hide:(ue=F.type.defaultProps)===null||ue===void 0?void 0:ue.hide;return he===C&&(P||!ge)}),A,i,h);K&&(E=K)}y&&(W==="number"||_!=="auto")&&(V=as(T,A,"category"))}else y?E=bc(0,j):l&&l[C]&&l[C].hasStack&&W==="number"?E=v==="expand"?[0,1]:T_(l[C].stackGroups,c,f):E=M_(T,a.filter(function(F){var J=s in F.props?F.props[s]:F.type.defaultProps[s],ue="hide"in F.props?F.props.hide:F.type.defaultProps.hide;return J===C&&(P||!ue)}),W,h,!0);if(W==="number")E=ry(d,E,C,i,N),Q&&(E=gg(Q,E,O));else if(W==="category"&&Q){var Y=Q,H=E.every(function(F){return Y.indexOf(F)>=0});H&&(E=Y)}}return ae(ae({},x),{},Ee({},C,ae(ae({},S),{},{axisType:i,domain:E,categoricalDomain:V,duplicateDomain:$,originalDomain:(b=S.domain)!==null&&b!==void 0?b:G,isCategorical:y,layout:h})))},{})},pY=function(t,n){var r=n.graphicalItems,a=n.Axis,i=n.axisType,s=n.axisIdKey,l=n.stackGroups,c=n.dataStartIndex,f=n.dataEndIndex,h=t.layout,d=t.children,v=x0(t.data,{graphicalItems:r,dataStartIndex:c,dataEndIndex:f}),y=v.length,x=O_(h,i),I=-1;return r.reduce(function(b,S){var W=S.type.defaultProps!==void 0?ae(ae({},S.type.defaultProps),S.props):S.props,A=W[s],O=JM("number");if(!b[A]){I++;var w;return x?w=bc(0,y):l&&l[A]&&l[A].hasStack?(w=T_(l[A].stackGroups,c,f),w=ry(d,w,A,i)):(w=gg(O,M_(v,r.filter(function(_){var N,P,C=s in _.props?_.props[s]:(N=_.type.defaultProps)===null||N===void 0?void 0:N[s],T="hide"in _.props?_.props.hide:(P=_.type.defaultProps)===null||P===void 0?void 0:P.hide;return C===A&&!T}),"number",h),a.defaultProps.allowDataOverflow),w=ry(d,w,A,i)),ae(ae({},b),{},Ee({},A,ae(ae({axisType:i},a.defaultProps),{},{hide:!0,orientation:Mn(oY,"".concat(i,".").concat(I%2),null),domain:w,originalDomain:O,isCategorical:x,layout:h})))}return b},{})},cY=function(t,n){var r=n.axisType,a=r===void 0?"xAxis":r,i=n.AxisComp,s=n.graphicalItems,l=n.stackGroups,c=n.dataStartIndex,f=n.dataEndIndex,h=t.children,d="".concat(a,"Id"),v=sn(h,i),y={};return v&&v.length?y=lY(t,{axes:v,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:l,dataStartIndex:c,dataEndIndex:f}):s&&s.length&&(y=pY(t,{Axis:i,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:l,dataStartIndex:c,dataEndIndex:f})),y},fY=function(t){var n=Wa(t),r=Fr(n,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:Ty(r,function(a){return a.coordinate}),tooltipAxis:n,tooltipAxisBandSize:oc(n,r)}},A3=function(t){var n=t.children,r=t.defaultShowTooltip,a=Sn(n,Mi),i=0,s=0;return t.data&&t.data.length!==0&&(s=t.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(i=a.props.startIndex),a.props.endIndex>=0&&(s=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:i,dataEndIndex:s,activeTooltipIndex:-1,isTooltipActive:!!r}},dY=function(t){return!t||!t.length?!1:t.some(function(n){var r=Ur(n&&n.type);return r&&r.indexOf("Bar")>=0})},_3=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},hY=function(t,n){var r=t.props,a=t.graphicalItems,i=t.xAxisMap,s=i===void 0?{}:i,l=t.yAxisMap,c=l===void 0?{}:l,f=r.width,h=r.height,d=r.children,v=r.margin||{},y=Sn(d,Mi),x=Sn(d,Oa),I=Object.keys(c).reduce(function(w,_){var N=c[_],P=N.orientation;return!N.mirror&&!N.hide?ae(ae({},w),{},Ee({},P,w[P]+N.width)):w},{left:v.left||0,right:v.right||0}),b=Object.keys(s).reduce(function(w,_){var N=s[_],P=N.orientation;return!N.mirror&&!N.hide?ae(ae({},w),{},Ee({},P,Mn(w,"".concat(P))+N.height)):w},{top:v.top||0,bottom:v.bottom||0}),S=ae(ae({},b),I),W=S.bottom;y&&(S.bottom+=y.props.height||Mi.defaultProps.height),x&&n&&(S=a9(S,a,r,n));var A=f-S.left-S.right,O=h-S.top-S.bottom;return ae(ae({brushBottom:W},S),{},{width:Math.max(A,0),height:Math.max(O,0)})},mY=function(t,n){if(n==="xAxis")return t[n].width;if(n==="yAxis")return t[n].height},w0=function(t){var n=t.chartName,r=t.GraphicalChild,a=t.defaultTooltipEventType,i=a===void 0?"axis":a,s=t.validateTooltipEventTypes,l=s===void 0?["axis"]:s,c=t.axisComponents,f=t.legendContent,h=t.formatAxisMap,d=t.defaultProps,v=function(S,W){var A=W.graphicalItems,O=W.stackGroups,w=W.offset,_=W.updateId,N=W.dataStartIndex,P=W.dataEndIndex,C=S.barSize,T=S.layout,j=S.barGap,E=S.barCategoryGap,$=S.maxBarSize,V=_3(T),G=V.numericAxisName,z=V.cateAxisName,Q=dY(A),L=[];return A.forEach(function(K,Y){var H=x0(S.data,{graphicalItems:[K],dataStartIndex:N,dataEndIndex:P}),F=K.type.defaultProps!==void 0?ae(ae({},K.type.defaultProps),K.props):K.props,J=F.dataKey,ue=F.maxBarSize,he=F["".concat(G,"Id")],ge=F["".concat(z,"Id")],ye={},fe=c.reduce(function(Bt,vt){var On=W["".concat(vt.axisType,"Map")],gt=F["".concat(vt.axisType,"Id")];On&&On[gt]||vt.axisType==="zAxis"||bo();var Kt=On[gt];return ae(ae({},Bt),{},Ee(Ee({},vt.axisType,Kt),"".concat(vt.axisType,"Ticks"),Fr(Kt)))},ye),ne=fe[z],de=fe["".concat(z,"Ticks")],ce=O&&O[he]&&O[he].hasStack&&m9(K,O[he].stackGroups),re=Ur(K.type).indexOf("Bar")>=0,Re=oc(ne,de),Pe=[],Ce=Q&&n9({barSize:C,stackGroups:O,totalSize:mY(fe,z)});if(re){var Ae,Fe,je=Ne(ue)?$:ue,qe=(Ae=(Fe=oc(ne,de,!0))!==null&&Fe!==void 0?Fe:je)!==null&&Ae!==void 0?Ae:0;Pe=r9({barGap:j,barCategoryGap:E,bandSize:qe!==Re?qe:Re,sizeList:Ce[ge],maxBarSize:je}),qe!==Re&&(Pe=Pe.map(function(Bt){return ae(ae({},Bt),{},{position:ae(ae({},Bt.position),{},{offset:Bt.position.offset-qe/2})})}))}var Ke=K&&K.type&&K.type.getComposedData;Ke&&L.push({props:ae(ae({},Ke(ae(ae({},fe),{},{displayedData:H,props:S,dataKey:J,item:K,bandSize:Re,barPosition:Pe,offset:w,stackedData:ce,layout:T,dataStartIndex:N,dataEndIndex:P}))),{},Ee(Ee(Ee({key:K.key||"item-".concat(Y)},G,fe[G]),z,fe[z]),"animationId",_)),childIndex:uH(K,S.children),item:K})}),L},y=function(S,W){var A=S.props,O=S.dataStartIndex,w=S.dataEndIndex,_=S.updateId;if(!DB({props:A}))return null;var N=A.children,P=A.layout,C=A.stackOffset,T=A.data,j=A.reverseStackOrder,E=_3(P),$=E.numericAxisName,V=E.cateAxisName,G=sn(N,r),z=d9(T,G,"".concat($,"Id"),"".concat(V,"Id"),C,j),Q=c.reduce(function(F,J){var ue="".concat(J.axisType,"Map");return ae(ae({},F),{},Ee({},ue,cY(A,ae(ae({},J),{},{graphicalItems:G,stackGroups:J.axisType===$&&z,dataStartIndex:O,dataEndIndex:w}))))},{}),L=hY(ae(ae({},Q),{},{props:A,graphicalItems:G}),W==null?void 0:W.legendBBox);Object.keys(Q).forEach(function(F){Q[F]=h(A,Q[F],L,F.replace("Map",""),n)});var K=Q["".concat(V,"Map")],Y=fY(K),H=v(A,ae(ae({},Q),{},{dataStartIndex:O,dataEndIndex:w,updateId:_,graphicalItems:G,stackGroups:z,offset:L}));return ae(ae({formattedGraphicalItems:H,graphicalItems:G,offset:L,stackGroups:z},Y),Q)},x=(function(b){function S(W){var A,O,w;return KQ(this,S),w=XQ(this,S,[W]),Ee(w,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Ee(w,"accessibilityManager",new EQ),Ee(w,"handleLegendBBoxUpdate",function(_){if(_){var N=w.state,P=N.dataStartIndex,C=N.dataEndIndex,T=N.updateId;w.setState(ae({legendBBox:_},y({props:w.props,dataStartIndex:P,dataEndIndex:C,updateId:T},ae(ae({},w.state),{},{legendBBox:_}))))}}),Ee(w,"handleReceiveSyncEvent",function(_,N,P){if(w.props.syncId===_){if(P===w.eventEmitterSymbol&&typeof w.props.syncMethod!="function")return;w.applySyncEvent(N)}}),Ee(w,"handleBrushChange",function(_){var N=_.startIndex,P=_.endIndex;if(N!==w.state.dataStartIndex||P!==w.state.dataEndIndex){var C=w.state.updateId;w.setState(function(){return ae({dataStartIndex:N,dataEndIndex:P},y({props:w.props,dataStartIndex:N,dataEndIndex:P,updateId:C},w.state))}),w.triggerSyncEvent({dataStartIndex:N,dataEndIndex:P})}}),Ee(w,"handleMouseEnter",function(_){var N=w.getMouseInfo(_);if(N){var P=ae(ae({},N),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var C=w.props.onMouseEnter;ke(C)&&C(P,_)}}),Ee(w,"triggeredAfterMouseMove",function(_){var N=w.getMouseInfo(_),P=N?ae(ae({},N),{},{isTooltipActive:!0}):{isTooltipActive:!1};w.setState(P),w.triggerSyncEvent(P);var C=w.props.onMouseMove;ke(C)&&C(P,_)}),Ee(w,"handleItemMouseEnter",function(_){w.setState(function(){return{isTooltipActive:!0,activeItem:_,activePayload:_.tooltipPayload,activeCoordinate:_.tooltipPosition||{x:_.cx,y:_.cy}}})}),Ee(w,"handleItemMouseLeave",function(){w.setState(function(){return{isTooltipActive:!1}})}),Ee(w,"handleMouseMove",function(_){_.persist(),w.throttleTriggeredAfterMouseMove(_)}),Ee(w,"handleMouseLeave",function(_){w.throttleTriggeredAfterMouseMove.cancel();var N={isTooltipActive:!1};w.setState(N),w.triggerSyncEvent(N);var P=w.props.onMouseLeave;ke(P)&&P(N,_)}),Ee(w,"handleOuterEvent",function(_){var N=iH(_),P=Mn(w.props,"".concat(N));if(N&&ke(P)){var C,T;/.*touch.*/i.test(N)?T=w.getMouseInfo(_.changedTouches[0]):T=w.getMouseInfo(_),P((C=T)!==null&&C!==void 0?C:{},_)}}),Ee(w,"handleClick",function(_){var N=w.getMouseInfo(_);if(N){var P=ae(ae({},N),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var C=w.props.onClick;ke(C)&&C(P,_)}}),Ee(w,"handleMouseDown",function(_){var N=w.props.onMouseDown;if(ke(N)){var P=w.getMouseInfo(_);N(P,_)}}),Ee(w,"handleMouseUp",function(_){var N=w.props.onMouseUp;if(ke(N)){var P=w.getMouseInfo(_);N(P,_)}}),Ee(w,"handleTouchMove",function(_){_.changedTouches!=null&&_.changedTouches.length>0&&w.throttleTriggeredAfterMouseMove(_.changedTouches[0])}),Ee(w,"handleTouchStart",function(_){_.changedTouches!=null&&_.changedTouches.length>0&&w.handleMouseDown(_.changedTouches[0])}),Ee(w,"handleTouchEnd",function(_){_.changedTouches!=null&&_.changedTouches.length>0&&w.handleMouseUp(_.changedTouches[0])}),Ee(w,"handleDoubleClick",function(_){var N=w.props.onDoubleClick;if(ke(N)){var P=w.getMouseInfo(_);N(P,_)}}),Ee(w,"handleContextMenu",function(_){var N=w.props.onContextMenu;if(ke(N)){var P=w.getMouseInfo(_);N(P,_)}}),Ee(w,"triggerSyncEvent",function(_){w.props.syncId!==void 0&&Bv.emit(xv,w.props.syncId,_,w.eventEmitterSymbol)}),Ee(w,"applySyncEvent",function(_){var N=w.props,P=N.layout,C=N.syncMethod,T=w.state.updateId,j=_.dataStartIndex,E=_.dataEndIndex;if(_.dataStartIndex!==void 0||_.dataEndIndex!==void 0)w.setState(ae({dataStartIndex:j,dataEndIndex:E},y({props:w.props,dataStartIndex:j,dataEndIndex:E,updateId:T},w.state)));else if(_.activeTooltipIndex!==void 0){var $=_.chartX,V=_.chartY,G=_.activeTooltipIndex,z=w.state,Q=z.offset,L=z.tooltipTicks;if(!Q)return;if(typeof C=="function")G=C(L,_);else if(C==="value"){G=-1;for(var K=0;K<L.length;K++)if(L[K].value===_.activeLabel){G=K;break}}var Y=ae(ae({},Q),{},{x:Q.left,y:Q.top}),H=Math.min($,Y.x+Y.width),F=Math.min(V,Y.y+Y.height),J=L[G]&&L[G].value,ue=iy(w.state,w.props.data,G),he=L[G]?{x:P==="horizontal"?L[G].coordinate:H,y:P==="horizontal"?F:L[G].coordinate}:ZM;w.setState(ae(ae({},_),{},{activeLabel:J,activeCoordinate:he,activePayload:ue,activeTooltipIndex:G}))}else w.setState(_)}),Ee(w,"renderCursor",function(_){var N,P=w.state,C=P.isTooltipActive,T=P.activeCoordinate,j=P.activePayload,E=P.offset,$=P.activeTooltipIndex,V=P.tooltipAxisBandSize,G=w.getTooltipEventType(),z=(N=_.props.active)!==null&&N!==void 0?N:C,Q=w.props.layout,L=_.key||"_recharts-cursor";return R.createElement(LQ,{key:L,activeCoordinate:T,activePayload:j,activeTooltipIndex:$,chartName:n,element:_,isActive:z,layout:Q,offset:E,tooltipAxisBandSize:V,tooltipEventType:G})}),Ee(w,"renderPolarAxis",function(_,N,P){var C=Mn(_,"type.axisType"),T=Mn(w.state,"".concat(C,"Map")),j=_.type.defaultProps,E=j!==void 0?ae(ae({},j),_.props):_.props,$=T&&T[E["".concat(C,"Id")]];return X.cloneElement(_,ae(ae({},$),{},{className:He(C,$.className),key:_.key||"".concat(N,"-").concat(P),ticks:Fr($,!0)}))}),Ee(w,"renderPolarGrid",function(_){var N=_.props,P=N.radialLines,C=N.polarAngles,T=N.polarRadius,j=w.state,E=j.radiusAxisMap,$=j.angleAxisMap,V=Wa(E),G=Wa($),z=G.cx,Q=G.cy,L=G.innerRadius,K=G.outerRadius;return X.cloneElement(_,{polarAngles:Array.isArray(C)?C:Fr(G,!0).map(function(Y){return Y.coordinate}),polarRadius:Array.isArray(T)?T:Fr(V,!0).map(function(Y){return Y.coordinate}),cx:z,cy:Q,innerRadius:L,outerRadius:K,key:_.key||"polar-grid",radialLines:P})}),Ee(w,"renderLegend",function(){var _=w.state.formattedGraphicalItems,N=w.props,P=N.children,C=N.width,T=N.height,j=w.props.margin||{},E=C-(j.left||0)-(j.right||0),$=A_({children:P,formattedGraphicalItems:_,legendWidth:E,legendContent:f});if(!$)return null;var V=$.item,G=P3($,FQ);return X.cloneElement(V,ae(ae({},G),{},{chartWidth:C,chartHeight:T,margin:j,onBBoxUpdate:w.handleLegendBBoxUpdate}))}),Ee(w,"renderTooltip",function(){var _,N=w.props,P=N.children,C=N.accessibilityLayer,T=Sn(P,Wn);if(!T)return null;var j=w.state,E=j.isTooltipActive,$=j.activeCoordinate,V=j.activePayload,G=j.activeLabel,z=j.offset,Q=(_=T.props.active)!==null&&_!==void 0?_:E;return X.cloneElement(T,{viewBox:ae(ae({},z),{},{x:z.left,y:z.top}),active:Q,label:G,payload:Q?V:[],coordinate:$,accessibilityLayer:C})}),Ee(w,"renderBrush",function(_){var N=w.props,P=N.margin,C=N.data,T=w.state,j=T.offset,E=T.dataStartIndex,$=T.dataEndIndex,V=T.updateId;return X.cloneElement(_,{key:_.key||"_recharts-brush",onChange:Bp(w.handleBrushChange,_.props.onChange),data:C,x:le(_.props.x)?_.props.x:j.left,y:le(_.props.y)?_.props.y:j.top+j.height+j.brushBottom-(P.bottom||0),width:le(_.props.width)?_.props.width:j.width,startIndex:E,endIndex:$,updateId:"brush-".concat(V)})}),Ee(w,"renderReferenceElement",function(_,N,P){if(!_)return null;var C=w,T=C.clipPathId,j=w.state,E=j.xAxisMap,$=j.yAxisMap,V=j.offset,G=_.type.defaultProps||{},z=_.props,Q=z.xAxisId,L=Q===void 0?G.xAxisId:Q,K=z.yAxisId,Y=K===void 0?G.yAxisId:K;return X.cloneElement(_,{key:_.key||"".concat(N,"-").concat(P),xAxis:E[L],yAxis:$[Y],viewBox:{x:V.left,y:V.top,width:V.width,height:V.height},clipPathId:T})}),Ee(w,"renderActivePoints",function(_){var N=_.item,P=_.activePoint,C=_.basePoint,T=_.childIndex,j=_.isRange,E=[],$=N.props.key,V=N.item.type.defaultProps!==void 0?ae(ae({},N.item.type.defaultProps),N.item.props):N.item.props,G=V.activeDot,z=V.dataKey,Q=ae(ae({index:T,dataKey:z,cx:P.x,cy:P.y,r:4,fill:sb(N.item),strokeWidth:2,stroke:"#fff",payload:P.payload,value:P.value},We(G,!1)),Ep(G));return E.push(S.renderActiveDot(G,Q,"".concat($,"-activePoint-").concat(T))),C?E.push(S.renderActiveDot(G,ae(ae({},Q),{},{cx:C.x,cy:C.y}),"".concat($,"-basePoint-").concat(T))):j&&E.push(null),E}),Ee(w,"renderGraphicChild",function(_,N,P){var C=w.filterFormatItem(_,N,P);if(!C)return null;var T=w.getTooltipEventType(),j=w.state,E=j.isTooltipActive,$=j.tooltipAxis,V=j.activeTooltipIndex,G=j.activeLabel,z=w.props.children,Q=Sn(z,Wn),L=C.props,K=L.points,Y=L.isRange,H=L.baseLine,F=C.item.type.defaultProps!==void 0?ae(ae({},C.item.type.defaultProps),C.item.props):C.item.props,J=F.activeDot,ue=F.hide,he=F.activeBar,ge=F.activeShape,ye=!!(!ue&&E&&Q&&(J||he||ge)),fe={};T!=="axis"&&Q&&Q.props.trigger==="click"?fe={onClick:Bp(w.handleItemMouseEnter,_.props.onClick)}:T!=="axis"&&(fe={onMouseLeave:Bp(w.handleItemMouseLeave,_.props.onMouseLeave),onMouseEnter:Bp(w.handleItemMouseEnter,_.props.onMouseEnter)});var ne=X.cloneElement(_,ae(ae({},C.props),fe));function de(vt){return typeof $.dataKey=="function"?$.dataKey(vt.payload):null}if(ye)if(V>=0){var ce,re;if($.dataKey&&!$.allowDuplicatedCategory){var Re=typeof $.dataKey=="function"?de:"payload.".concat($.dataKey.toString());ce=Np(K,Re,G),re=Y&&H&&Np(H,Re,G)}else ce=K==null?void 0:K[V],re=Y&&H&&H[V];if(ge||he){var Pe=_.props.activeIndex!==void 0?_.props.activeIndex:V;return[X.cloneElement(_,ae(ae(ae({},C.props),fe),{},{activeIndex:Pe})),null,null]}if(!Ne(ce))return[ne].concat(Fi(w.renderActivePoints({item:C,activePoint:ce,basePoint:re,childIndex:V,isRange:Y})))}else{var Ce,Ae=(Ce=w.getItemByXY(w.state.activeCoordinate))!==null&&Ce!==void 0?Ce:{graphicalItem:ne},Fe=Ae.graphicalItem,je=Fe.item,qe=je===void 0?_:je,Ke=Fe.childIndex,Bt=ae(ae(ae({},C.props),fe),{},{activeIndex:Ke});return[X.cloneElement(qe,Bt),null,null]}return Y?[ne,null,null]:[ne,null]}),Ee(w,"renderCustomized",function(_,N,P){return X.cloneElement(_,ae(ae({key:"recharts-customized-".concat(P)},w.props),w.state))}),Ee(w,"renderMap",{CartesianGrid:{handler:Wp,once:!0},ReferenceArea:{handler:w.renderReferenceElement},ReferenceLine:{handler:Wp},ReferenceDot:{handler:w.renderReferenceElement},XAxis:{handler:Wp},YAxis:{handler:Wp},Brush:{handler:w.renderBrush,once:!0},Bar:{handler:w.renderGraphicChild},Line:{handler:w.renderGraphicChild},Area:{handler:w.renderGraphicChild},Radar:{handler:w.renderGraphicChild},RadialBar:{handler:w.renderGraphicChild},Scatter:{handler:w.renderGraphicChild},Pie:{handler:w.renderGraphicChild},Funnel:{handler:w.renderGraphicChild},Tooltip:{handler:w.renderCursor,once:!0},PolarGrid:{handler:w.renderPolarGrid,once:!0},PolarAngleAxis:{handler:w.renderPolarAxis},PolarRadiusAxis:{handler:w.renderPolarAxis},Customized:{handler:w.renderCustomized}}),w.clipPathId="".concat((A=W.id)!==null&&A!==void 0?A:ja("recharts"),"-clip"),w.throttleTriggeredAfterMouseMove=AA(w.triggeredAfterMouseMove,(O=W.throttleDelay)!==null&&O!==void 0?O:1e3/60),w.state={},w}return eY(S,b),YQ(S,[{key:"componentDidMount",value:function(){var A,O;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(A=this.props.margin.left)!==null&&A!==void 0?A:0,top:(O=this.props.margin.top)!==null&&O!==void 0?O:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var A=this.props,O=A.children,w=A.data,_=A.height,N=A.layout,P=Sn(O,Wn);if(P){var C=P.props.defaultIndex;if(!(typeof C!="number"||C<0||C>this.state.tooltipTicks.length-1)){var T=this.state.tooltipTicks[C]&&this.state.tooltipTicks[C].value,j=iy(this.state,w,C,T),E=this.state.tooltipTicks[C].coordinate,$=(this.state.offset.top+_)/2,V=N==="horizontal",G=V?{x:E,y:$}:{y:E,x:$},z=this.state.formattedGraphicalItems.find(function(L){var K=L.item;return K.type.name==="Scatter"});z&&(G=ae(ae({},G),z.props.points[C].tooltipPosition),j=z.props.points[C].tooltipPayload);var Q={activeTooltipIndex:C,isTooltipActive:!0,activeLabel:T,activePayload:j,activeCoordinate:G};this.setState(Q),this.renderCursor(P),this.accessibilityManager.setIndex(C)}}}},{key:"getSnapshotBeforeUpdate",value:function(A,O){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==O.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==A.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==A.margin){var w,_;this.accessibilityManager.setDetails({offset:{left:(w=this.props.margin.left)!==null&&w!==void 0?w:0,top:(_=this.props.margin.top)!==null&&_!==void 0?_:0}})}return null}},{key:"componentDidUpdate",value:function(A){Dv([Sn(A.children,Wn)],[Sn(this.props.children,Wn)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var A=Sn(this.props.children,Wn);if(A&&typeof A.props.shared=="boolean"){var O=A.props.shared?"axis":"item";return l.indexOf(O)>=0?O:i}return i}},{key:"getMouseInfo",value:function(A){if(!this.container)return null;var O=this.container,w=O.getBoundingClientRect(),_=G5(w),N={chartX:Math.round(A.pageX-_.left),chartY:Math.round(A.pageY-_.top)},P=w.width/O.offsetWidth||1,C=this.inRange(N.chartX,N.chartY,P);if(!C)return null;var T=this.state,j=T.xAxisMap,E=T.yAxisMap,$=this.getTooltipEventType(),V=W3(this.state,this.props.data,this.props.layout,C);if($!=="axis"&&j&&E){var G=Wa(j).scale,z=Wa(E).scale,Q=G&&G.invert?G.invert(N.chartX):null,L=z&&z.invert?z.invert(N.chartY):null;return ae(ae({},N),{},{xValue:Q,yValue:L},V)}return V?ae(ae({},N),V):null}},{key:"inRange",value:function(A,O){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,_=this.props.layout,N=A/w,P=O/w;if(_==="horizontal"||_==="vertical"){var C=this.state.offset,T=N>=C.left&&N<=C.left+C.width&&P>=C.top&&P<=C.top+C.height;return T?{x:N,y:P}:null}var j=this.state,E=j.angleAxisMap,$=j.radiusAxisMap;if(E&&$){var V=Wa(E);return A4({x:N,y:P},V)}return null}},{key:"parseEventsOfWrapper",value:function(){var A=this.props.children,O=this.getTooltipEventType(),w=Sn(A,Wn),_={};w&&O==="axis"&&(w.props.trigger==="click"?_={onClick:this.handleClick}:_={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var N=Ep(this.props,this.handleOuterEvent);return ae(ae({},N),_)}},{key:"addListener",value:function(){Bv.on(xv,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){Bv.removeListener(xv,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(A,O,w){for(var _=this.state.formattedGraphicalItems,N=0,P=_.length;N<P;N++){var C=_[N];if(C.item===A||C.props.key===A.key||O===Ur(C.item.type)&&w===C.childIndex)return C}return null}},{key:"renderClipPath",value:function(){var A=this.clipPathId,O=this.state.offset,w=O.left,_=O.top,N=O.height,P=O.width;return R.createElement("defs",null,R.createElement("clipPath",{id:A},R.createElement("rect",{x:w,y:_,height:N,width:P})))}},{key:"getXScales",value:function(){var A=this.state.xAxisMap;return A?Object.entries(A).reduce(function(O,w){var _=w3(w,2),N=_[0],P=_[1];return ae(ae({},O),{},Ee({},N,P.scale))},{}):null}},{key:"getYScales",value:function(){var A=this.state.yAxisMap;return A?Object.entries(A).reduce(function(O,w){var _=w3(w,2),N=_[0],P=_[1];return ae(ae({},O),{},Ee({},N,P.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(A){var O;return(O=this.state.xAxisMap)===null||O===void 0||(O=O[A])===null||O===void 0?void 0:O.scale}},{key:"getYScaleByAxisId",value:function(A){var O;return(O=this.state.yAxisMap)===null||O===void 0||(O=O[A])===null||O===void 0?void 0:O.scale}},{key:"getItemByXY",value:function(A){var O=this.state,w=O.formattedGraphicalItems,_=O.activeItem;if(w&&w.length)for(var N=0,P=w.length;N<P;N++){var C=w[N],T=C.props,j=C.item,E=j.type.defaultProps!==void 0?ae(ae({},j.type.defaultProps),j.props):j.props,$=Ur(j.type);if($==="Bar"){var V=(T.data||[]).find(function(L){return hz(A,L)});if(V)return{graphicalItem:C,payload:V}}else if($==="RadialBar"){var G=(T.data||[]).find(function(L){return A4(A,L)});if(G)return{graphicalItem:C,payload:G}}else if(d0(C,_)||h0(C,_)||$s(C,_)){var z=HU({graphicalItem:C,activeTooltipItem:_,itemData:E.data}),Q=E.activeIndex===void 0?z:E.activeIndex;return{graphicalItem:ae(ae({},C),{},{childIndex:Q}),payload:$s(C,_)?E.data[z]:C.props.data[z]}}}return null}},{key:"render",value:function(){var A=this;if(!DB(this))return null;var O=this.props,w=O.children,_=O.className,N=O.width,P=O.height,C=O.style,T=O.compact,j=O.title,E=O.desc,$=P3(O,qQ),V=We($,!1);if(T)return R.createElement(e3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},R.createElement(Lv,si({},V,{width:N,height:P,title:j,desc:E}),this.renderClipPath(),LB(w,this.renderMap)));if(this.props.accessibilityLayer){var G,z;V.tabIndex=(G=this.props.tabIndex)!==null&&G!==void 0?G:0,V.role=(z=this.props.role)!==null&&z!==void 0?z:"application",V.onKeyDown=function(L){A.accessibilityManager.keyboardEvent(L)},V.onFocus=function(){A.accessibilityManager.focus()}}var Q=this.parseEventsOfWrapper();return R.createElement(e3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},R.createElement("div",si({className:He("recharts-wrapper",_),style:ae({position:"relative",cursor:"default",width:N,height:P},C)},Q,{ref:function(K){A.container=K}}),R.createElement(Lv,si({},V,{width:N,height:P,title:j,desc:E,style:iY}),this.renderClipPath(),LB(w,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(X.Component);Ee(x,"displayName",n),Ee(x,"defaultProps",ae({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Ee(x,"getDerivedStateFromProps",function(b,S){var W=b.dataKey,A=b.data,O=b.children,w=b.width,_=b.height,N=b.layout,P=b.stackOffset,C=b.margin,T=S.dataStartIndex,j=S.dataEndIndex;if(S.updateId===void 0){var E=A3(b);return ae(ae(ae({},E),{},{updateId:0},y(ae(ae({props:b},E),{},{updateId:0}),S)),{},{prevDataKey:W,prevData:A,prevWidth:w,prevHeight:_,prevLayout:N,prevStackOffset:P,prevMargin:C,prevChildren:O})}if(W!==S.prevDataKey||A!==S.prevData||w!==S.prevWidth||_!==S.prevHeight||N!==S.prevLayout||P!==S.prevStackOffset||!li(C,S.prevMargin)){var $=A3(b),V={chartX:S.chartX,chartY:S.chartY,isTooltipActive:S.isTooltipActive},G=ae(ae({},W3(S,A,N)),{},{updateId:S.updateId+1}),z=ae(ae(ae({},$),V),G);return ae(ae(ae({},z),y(ae({props:b},z),S)),{},{prevDataKey:W,prevData:A,prevWidth:w,prevHeight:_,prevLayout:N,prevStackOffset:P,prevMargin:C,prevChildren:O})}if(!Dv(O,S.prevChildren)){var Q,L,K,Y,H=Sn(O,Mi),F=H&&(Q=(L=H.props)===null||L===void 0?void 0:L.startIndex)!==null&&Q!==void 0?Q:T,J=H&&(K=(Y=H.props)===null||Y===void 0?void 0:Y.endIndex)!==null&&K!==void 0?K:j,ue=F!==T||J!==j,he=!Ne(A),ge=he&&!ue?S.updateId:S.updateId+1;return ae(ae({updateId:ge},y(ae(ae({props:b},S),{},{updateId:ge,dataStartIndex:F,dataEndIndex:J}),S)),{},{prevChildren:O,dataStartIndex:F,dataEndIndex:J})}return null}),Ee(x,"renderActiveDot",function(b,S,W){var A;return X.isValidElement(b)?A=X.cloneElement(b,S):ke(b)?A=b(S):A=R.createElement(tl,S),R.createElement(De,{className:"recharts-active-dot",key:W},A)});var I=X.forwardRef(function(S,W){return R.createElement(x,si({},S,{ref:W}))});return I.displayName=x.displayName,I},vY=w0({chartName:"LineChart",GraphicalChild:qr,axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:pb}),gY=w0({chartName:"BarChart",GraphicalChild:Sr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:pb}),yY=w0({chartName:"PieChart",GraphicalChild:ea,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:f0},{axisType:"radiusAxis",AxisComp:p0}],formatAxisMap:S9,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),bY=w0({chartName:"ComposedChart",GraphicalChild:[qr,So,Sr,B0],axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br},{axisType:"zAxis",AxisComp:I0}],formatAxisMap:pb});const M3=({active:e,payload:t,label:n})=>e&&t&&t.length?M.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-3 shadow-lg",children:[M.jsx("p",{className:"font-semibold text-gray-900 mb-2",children:n}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("p",{className:"text-sm",children:[M.jsx("span",{className:"text-blue-600 font-medium",children:"Total Sessions: "}),M.jsx("span",{className:"text-gray-900",children:t[0].payload.totalSessions.toLocaleString()})]}),M.jsxs("p",{className:"text-sm",children:[M.jsx("span",{className:"text-orange-600 font-medium",children:"Human Escalations: "}),M.jsx("span",{className:"text-gray-900",children:t[0].payload.humanEscalations.toLocaleString()})]}),M.jsxs("p",{className:"text-sm",children:[M.jsx("span",{className:"text-red-600 font-medium",children:"Escalation Rate: "}),M.jsxs("span",{className:"text-gray-900",children:[t[0].payload.escalationRate.toFixed(1),"%"]})]})]})]}):null;function eO({data:e,title:t,instanceId:n}){var y,x;const r=X.useId(),a=t||"Sessions & Escalation Trends",i=e.length<=3&&((x=(y=e[0])==null?void 0:y.week)==null?void 0:x.includes("2026")),s=n||r.replace(/:/g,"-"),l=`${t?t.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase():"escalation-chart"}-${s}`,c=`chart-${l}-${e.length}`,f=e.map((I,b)=>({...I,id:`${l}-${I.week.replace(/\s/g,"-")}-${b}`})),h=`colorSessions-${l}`,d=`colorEscalations-${l}`,v=`colorSessionsLine-${l}`;return M.jsxs(zn,{className:"shadow-xl border-0",children:[M.jsx(Hc,{className:"bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5",children:M.jsxs("div",{className:"flex items-start justify-between",children:[M.jsxs("div",{children:[M.jsx(jc,{className:"text-2xl font-black text-gray-900",children:a}),M.jsx("p",{className:"text-sm text-gray-600 mt-2 font-medium",children:"Comparing Total Sessions, Human Escalations, and Escalation Rate %"})]}),M.jsxs("div",{className:"flex gap-2",children:[M.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200",children:[M.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600"}),M.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Total Sessions"})]}),M.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200",children:[M.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-600"}),M.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Human Escalations"})]}),M.jsxs("div",{className:"flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200",children:[M.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600"}),M.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Escalation Rate %"})]})]})]})}),M.jsx(Un,{className:"p-6 bg-white",children:M.jsx(Hy,{width:"100%",height:400,children:i?M.jsxs(bY,{data:f,barGap:8,barCategoryGap:"20%",children:[M.jsxs("defs",{children:[M.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[M.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.9},`${h}-stop-1`),M.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.7},`${h}-stop-2`)]}),M.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"0",y2:"1",children:[M.jsx("stop",{offset:"5%",stopColor:"#f97316",stopOpacity:.9},`${d}-stop-1`),M.jsx("stop",{offset:"95%",stopColor:"#f97316",stopOpacity:.7},`${d}-stop-2`)]})]}),M.jsx(Mc,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),M.jsx(Ra,{dataKey:"week",tick:{fontSize:13,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),M.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),M.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),M.jsx(Wn,{content:M.jsx(M3,{})},`tooltip-${l}`),M.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"square",iconSize:14},`legend-${l}`),M.jsx(Sr,{yAxisId:"left",dataKey:"totalSessions",fill:`url(#${h})`,name:"Total Sessions",radius:[10,10,0,0],maxBarSize:80},`bar-total-${l}`),M.jsx(Sr,{yAxisId:"left",dataKey:"humanEscalations",fill:`url(#${d})`,name:"Human Escalations",radius:[10,10,0,0],maxBarSize:80},`bar-human-${l}`),M.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:4,dot:{fill:"#ef4444",r:6,strokeWidth:2,stroke:"#fff"},activeDot:{r:8,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},c):M.jsxs(vY,{data:f,children:[M.jsx("defs",{children:M.jsxs("linearGradient",{id:v,x1:"0",y1:"0",x2:"0",y2:"1",children:[M.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8},`${v}-stop-1`),M.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.1},`${v}-stop-2`)]})}),M.jsx(Mc,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),M.jsx(Ra,{dataKey:"week",tick:{fontSize:12,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),M.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),M.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),M.jsx(Wn,{content:M.jsx(M3,{})},`tooltip-${l}`),M.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"line",iconSize:20},`legend-${l}`),M.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"totalSessions",stroke:"#3b82f6",strokeWidth:3,dot:{fill:"#3b82f6",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Total Sessions"},`line-total-${l}`),M.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"humanEscalations",stroke:"#f97316",strokeWidth:3,dot:{fill:"#f97316",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Human Escalations"},`line-human-${l}`),M.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:3,strokeDasharray:"8 4",dot:{fill:"#ef4444",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},c)})})]})}const O3=["#3b82f6","#f97316","#10b981","#8b5cf6","#f59e0b"];function tO({data:e,title:t}){const n=e.reduce((s,l)=>s+l.count,0),r=t||"Channel Distribution",a=r.replace(/\s/g,"-").toLowerCase(),i=e.map((s,l)=>({...s,uniqueKey:`${a}-${s.channel.replace(/\s/g,"-")}-${s.count}-${l}`,id:`${a}-${l}`}));return M.jsxs(zn,{children:[M.jsxs(Hc,{children:[M.jsx(jc,{children:r}),M.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Total sessions: ",n.toLocaleString()]})]}),M.jsx(Un,{children:M.jsx(Hy,{width:"100%",height:300,children:M.jsxs(yY,{children:[M.jsx(ea,{data:i,cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",paddingAngle:2,dataKey:"count",label:({channel:s,percentage:l})=>`${s} (${l.toFixed(1)}%)`,children:i.map(s=>M.jsx(Ys,{fill:O3[i.indexOf(s)%O3.length]},s.uniqueKey))},`pie-${a}`),M.jsx(Wn,{formatter:(s,l,c)=>[`${s.toLocaleString()} sessions (${c.payload.percentage.toFixed(1)}%)`,c.payload.channel],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}})]},`piechart-${a}`)})})]})}function IY({data:e}){const t=e.reduce((a,i)=>{const s=a.find(l=>l.product===i.product);return s?s.count+=i.count:a.push({...i}),a},[]),n=t.slice(0,10),r=t.reduce((a,i)=>a+i.count,0);return M.jsxs(zn,{children:[M.jsxs(Hc,{children:[M.jsx(jc,{children:"Product Breakdown (Human Handled)"}),M.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Human escalations: ",r.toLocaleString()," ",n.length<t.length&&`(showing top ${n.length})`]})]}),M.jsx(Un,{children:M.jsx(Hy,{width:"100%",height:300,children:M.jsxs(gY,{data:n,children:[M.jsx(Mc,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),M.jsx(Ra,{dataKey:"product",tick:{fontSize:11},stroke:"#6b7280",angle:-45,textAnchor:"end",height:100}),M.jsx(Br,{tick:{fontSize:12},stroke:"#6b7280",label:{value:"Count",angle:-90,position:"insideLeft",style:{fontSize:12}}}),M.jsx(Wn,{formatter:a=>[`${a} escalations`,"Count"],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}}),M.jsx(Sr,{dataKey:"count",fill:"#f97316",radius:[4,4,0,0]})]})})})]})}function nO({className:e,...t}){return M.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:M.jsx("table",{"data-slot":"table",className:ln("w-full caption-bottom text-sm",e),...t})})}function rO({className:e,...t}){return M.jsx("thead",{"data-slot":"table-header",className:ln("[&_tr]:border-b",e),...t})}function aO({className:e,...t}){return M.jsx("tbody",{"data-slot":"table-body",className:ln("[&_tr:last-child]:border-0",e),...t})}function fi({className:e,...t}){return M.jsx("tr",{"data-slot":"table-row",className:ln("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...t})}function Dr({className:e,...t}){return M.jsx("th",{"data-slot":"table-head",className:ln("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function An({className:e,...t}){return M.jsx("td",{"data-slot":"table-cell",className:ln("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function BY({data:e}){const[t,n]=X.useState(new Set),r=a=>{const i=new Set(t);i.has(a)?i.delete(a):i.add(a),n(i)};return M.jsx("div",{className:"border rounded-lg overflow-hidden",children:M.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:M.jsxs(nO,{children:[M.jsx(rO,{className:"bg-gray-50 sticky top-0 z-10",children:M.jsxs(fi,{children:[M.jsx(Dr,{className:"w-12"}),M.jsx(Dr,{children:"Issue Type"}),M.jsx(Dr,{className:"text-right",children:"Count"})]})}),M.jsx(aO,{children:e.flatMap((a,i)=>{const s=t.has(a.issue),l=[M.jsxs(fi,{className:"cursor-pointer hover:bg-gray-50",onClick:()=>r(a.issue),children:[M.jsx(An,{children:s?M.jsx(LN,{className:"w-4 h-4"}):M.jsx(Ov,{className:"w-4 h-4"})}),M.jsx(An,{className:"font-medium",children:a.issue}),M.jsx(An,{className:"text-right font-semibold",children:a.count})]},`${a.issue}-${i}`)];return s&&a.subIssues.forEach((c,f)=>{l.push(M.jsxs(fi,{className:"bg-blue-50",children:[M.jsx(An,{}),M.jsx(An,{className:"pl-8",children:M.jsxs("div",{children:[M.jsx("div",{className:"font-medium text-sm text-gray-900",children:c.subType}),M.jsx("div",{className:"text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5",children:c.products.map((h,d)=>M.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700",children:[h.product," ",M.jsxs("span",{className:"ml-1 font-semibold",children:["(",h.count,")"]})]},`${a.issue}-${c.subType}-${h.product}-${d}`))})]})}),M.jsx(An,{className:"text-right",children:c.count})]},`${a.issue}-${c.subType}-${f}`))}),l})})]})})})}const Zu=50;function ri({field:e,currentField:t,direction:n,onSort:r,children:a}){return M.jsxs("button",{onClick:()=>r(e),className:"flex items-center gap-1 hover:text-gray-900 font-medium",children:[a,M.jsx(HN,{className:`w-4 h-4 ${t===e?"text-blue-600":"text-gray-400"}`})]})}function xY({data:e=[]}){const[t,n]=X.useState("createdAt"),[r,a]=X.useState("desc"),[i,s]=X.useState(0),l=X.useCallback(d=>{n(v=>v===d?(a(y=>y==="asc"?"desc":"asc"),d):(a("asc"),d)),s(0)},[]),c=X.useMemo(()=>[...e].sort((d,v)=>{let y,x;return t==="createdAt"?(y=ir(d.createdAt).getTime(),x=ir(v.createdAt).getTime(),isNaN(y)&&(y=-1/0),isNaN(x)&&(x=-1/0)):(y=(d[t]||"").toLowerCase(),x=(v[t]||"").toLowerCase()),r==="asc"?y>x?1:y<x?-1:0:y<x?1:y>x?-1:0}),[e,t,r]),f=Math.ceil(c.length/Zu),h=X.useMemo(()=>c.slice(i*Zu,(i+1)*Zu),[c,i]);return M.jsxs("div",{className:"space-y-3",children:[M.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 px-1",children:[M.jsxs("span",{children:["Showing ",M.jsxs("span",{className:"font-semibold text-gray-800",children:[i*Zu+1,"–",Math.min((i+1)*Zu,c.length)]})," of ",M.jsx("span",{className:"font-semibold text-gray-800",children:c.length.toLocaleString()})," sessions"]}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("button",{onClick:()=>s(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:M.jsx(SI,{className:"w-4 h-4"})}),M.jsxs("span",{className:"text-xs font-medium",children:["Page ",i+1," of ",f||1]}),M.jsx("button",{onClick:()=>s(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:M.jsx(Ov,{className:"w-4 h-4"})})]})]}),M.jsx("div",{className:"border rounded-lg overflow-hidden",children:M.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:M.jsxs(nO,{children:[M.jsx(rO,{className:"bg-gray-50 sticky top-0 z-10",children:M.jsxs(fi,{children:[M.jsx(Dr,{children:M.jsx(ri,{field:"createdAt",currentField:t,direction:r,onSort:l,children:"Date"})}),M.jsx(Dr,{children:M.jsx(ri,{field:"channel",currentField:t,direction:r,onSort:l,children:"Channel"})}),M.jsx(Dr,{children:M.jsx(ri,{field:"product",currentField:t,direction:r,onSort:l,children:"Product"})}),M.jsx(Dr,{children:M.jsx(ri,{field:"issue",currentField:t,direction:r,onSort:l,children:"Issue"})}),M.jsx(Dr,{children:M.jsx(ri,{field:"subType",currentField:t,direction:r,onSort:l,children:"Sub Type"})}),M.jsx(Dr,{children:M.jsx(ri,{field:"handled",currentField:t,direction:r,onSort:l,children:"Handled By"})})]})}),M.jsx(aO,{children:h.length===0?M.jsx(fi,{children:M.jsx(An,{colSpan:6,className:"text-center text-gray-400 py-12",children:"No sessions found."})}):h.map((d,v)=>M.jsxs(fi,{className:"hover:bg-blue-50/50 transition-colors",children:[M.jsx(An,{className:"whitespace-nowrap text-gray-700",children:rR(ir(d.createdAt))}),M.jsx(An,{children:M.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700",children:d.channel||"-"})}),M.jsx(An,{className:"text-gray-700",children:d.product||"-"}),M.jsx(An,{className:"text-gray-700",children:d.issue||"-"}),M.jsx(An,{className:"text-gray-500 text-xs",children:d.subType||"-"}),M.jsx(An,{children:M.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${d.handled==="Bot"?"bg-blue-100 text-blue-800":"bg-orange-100 text-orange-800"}`,children:d.handled||"-"})})]},`${i}-${v}`))})]})})}),f>1&&M.jsxs("div",{className:"flex items-center justify-center gap-2 pt-1",children:[M.jsx("button",{onClick:()=>s(0),disabled:i===0,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"First"}),M.jsx("button",{onClick:()=>s(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:M.jsx(SI,{className:"w-4 h-4"})}),Array.from({length:Math.min(5,f)},(d,v)=>{let y;return f<=5||i<3?y=v:i>f-4?y=f-5+v:y=i-2+v,M.jsx("button",{onClick:()=>s(y),className:`px-3 py-1.5 text-xs rounded-md border font-medium transition-colors ${y===i?"bg-blue-600 text-white border-blue-600":"border-gray-200 hover:bg-gray-100 text-gray-700"}`,children:y+1},y)}),M.jsx("button",{onClick:()=>s(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:M.jsx(Ov,{className:"w-4 h-4"})}),M.jsx("button",{onClick:()=>s(f-1),disabled:i>=f-1,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"Last"})]})]})}function oO({metrics:e,topChannel:t,top5Products:n,top5Issues:r,monthCount:a}){return M.jsxs(zn,{className:"border-0 shadow-xl overflow-hidden mt-6",children:[M.jsx("div",{className:"bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-6 py-4 border-b border-white/10",children:M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20",children:M.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-xl font-black tracking-tight",children:"Waggle AI Performance Summary"}),M.jsx("p",{className:"text-[10px] text-indigo-200 font-bold uppercase tracking-widest opacity-80",children:"Full Analytics Overview"})]})]})}),M.jsxs(Un,{className:"p-6 bg-gradient-to-br from-slate-50 to-white",children:[M.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[M.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[M.jsx("div",{className:"w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300",children:M.jsx("svg",{className:"w-4 h-4 text-blue-600 group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})})}),M.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Total Sessions"})]}),M.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:e.totalSessions.toLocaleString()}),M.jsxs("p",{className:"text-[10px] text-slate-400 font-medium italic",children:["Across ",a," ",a===1?"month":"months"]})]}),M.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[M.jsx("div",{className:"w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300",children:M.jsx("svg",{className:"w-4 h-4 text-emerald-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),M.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Bot Efficiency"})]}),M.jsxs("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:[e.botPercentage.toFixed(1),"%"]}),M.jsxs("p",{className:"text-[10px] text-emerald-600 font-bold",children:[e.botHandled.toLocaleString()," Handled"]})]}),M.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[M.jsx("div",{className:"w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300",children:M.jsx("svg",{className:"w-4 h-4 text-rose-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),M.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Avg Escalation"})]}),M.jsxs("p",{className:"text-2xl font-black text-rose-600 tracking-tight mb-0.5",children:[e.escalationRate.toFixed(1),"%"]}),M.jsx("p",{className:"text-[10px] text-rose-400 font-bold uppercase",children:"Human Assistance Needs"})]}),M.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[M.jsx("div",{className:"w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300",children:M.jsx("svg",{className:"w-4 h-4 text-indigo-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),M.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Main Channel"})]}),M.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:(t==null?void 0:t.channel)||"N/A"}),M.jsxs("p",{className:"text-[10px] text-indigo-500 font-bold uppercase",children:[((t==null?void 0:t.percentage)||0).toFixed(1),"% Share"]})]})]}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[M.jsxs("div",{className:"bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-slate-800",children:[M.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-5 pointer-events-none",children:M.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),M.jsxs("h4",{className:"flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),"Top 5 Products Escalated"]}),M.jsx("div",{className:"space-y-2 relative z-10",children:n.map((i,s)=>M.jsxs("div",{className:"flex justify-between items-center bg-white/5 rounded-xl p-2.5 border border-white/10 hover:bg-white/10 transition-colors",children:[M.jsxs("span",{className:"font-bold text-sm text-indigo-50 flex items-center gap-2",children:[M.jsxs("span",{className:"text-indigo-400 font-mono text-xs opacity-70",children:[s+1,"."]})," ",i.product||"N/A"]}),M.jsxs("span",{className:"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-bold ring-1 ring-indigo-500/50",children:[i.count.toLocaleString()," cases"]})]},s))})]}),M.jsxs("div",{className:"bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-indigo-500/30",children:[M.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-10 pointer-events-none",children:M.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),M.jsxs("h4",{className:"flex items-center gap-2 text-indigo-100 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-pulse"}),"Top 5 Issue Types"]}),M.jsx("div",{className:"space-y-2 relative z-10",children:r.map((i,s)=>M.jsxs("div",{className:"flex justify-between items-center bg-black/10 rounded-xl p-2.5 border border-white/10 hover:bg-black/20 transition-colors",children:[M.jsxs("span",{className:"font-bold text-sm text-purple-50 flex items-center gap-2",children:[M.jsxs("span",{className:"text-purple-300 font-mono text-xs opacity-70",children:[s+1,"."]})," ",i.issue||"N/A"]}),M.jsxs("span",{className:"px-2.5 py-0.5 bg-white/10 text-white rounded-full text-xs font-bold ring-1 ring-white/20",children:[i.humanCount.toLocaleString()," escapements"]})]},s))})]})]})]})]})}function wY({monthsData:e,weeklyEscalation:t}){e.flatMap(l=>l.data);const n=e.length>0?e[e.length-1].data:[],r=Ev(n),a=Tv(n)[0],i=WW(n).slice(0,5),s=Rv(n,5);return M.jsxs(M.Fragment,{children:[M.jsxs(zn,{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-xl overflow-hidden relative",children:[M.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"}),M.jsx(Un,{className:"p-5 relative z-10",children:M.jsxs("div",{className:"text-center text-white",children:[M.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-2 uppercase tracking-wider border border-white/30",children:[M.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Performance Analysis"]}),M.jsx("h2",{className:"text-2xl md:text-3xl font-black mb-1.5 tracking-tight drop-shadow-lg",children:"Dynamic Monthly Overview"}),M.jsx("p",{className:"text-base text-white/90 font-medium max-w-2xl mx-auto",children:"Comprehensive analysis across available months"})]})})]}),M.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(l=>{const c=Rv(l.data,3);return M.jsxs(zn,{className:`relative overflow-hidden shadow-lg border-0 bg-gradient-to-br ${l.colorFrom} ${l.colorTo} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group`,children:[M.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),M.jsx(Hc,{className:"text-white pb-3 pt-4 relative z-10",children:M.jsxs("div",{className:"text-center",children:[M.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-2 uppercase tracking-wider border border-white/30",children:[M.jsx("svg",{className:"w-2.5 h-2.5",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),l.shortName]}),M.jsx(jc,{className:"text-2xl font-black mb-3 drop-shadow",children:l.name}),M.jsxs("div",{className:"bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-md",children:[M.jsx("p",{className:"text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold",children:"Total Sessions"}),M.jsx("p",{className:"text-4xl font-black tracking-tight drop-shadow-md",children:l.data.length.toLocaleString()}),l.data.length<200&&M.jsx("p",{className:"text-[10px] text-white/80 mt-1 font-medium",children:"Partial data recorded"})]})]})}),M.jsxs(Un,{className:"p-4 bg-white/95 backdrop-blur-sm relative z-10",children:[M.jsxs("div",{className:"space-y-2 mb-4",children:[M.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm border border-green-200",children:[M.jsxs("div",{className:"flex justify-between items-center mb-1",children:[M.jsxs("div",{className:"flex items-center gap-1.5",children:[M.jsx("div",{className:"w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm",children:M.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),M.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Bot Handled"})]}),M.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-green-300",children:M.jsxs("p",{className:"text-sm font-black text-green-700",children:[l.metrics.botPercentage.toFixed(1),"%"]})})]}),M.jsx("p",{className:"text-xl font-black text-gray-900",children:l.metrics.botHandled.toLocaleString()})]}),M.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 shadow-sm border border-orange-200",children:[M.jsxs("div",{className:"flex justify-between items-center mb-1",children:[M.jsxs("div",{className:"flex items-center gap-1.5",children:[M.jsx("div",{className:"w-6 h-6 bg-orange-500 rounded flex items-center justify-center shadow-sm",children:M.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),M.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Human Escalated"})]}),M.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-orange-300",children:M.jsxs("p",{className:"text-sm font-black text-orange-700",children:[l.metrics.humanPercentage.toFixed(1),"%"]})})]}),M.jsx("p",{className:"text-xl font-black text-gray-900",children:l.metrics.humanHandled.toLocaleString()})]})]}),M.jsxs("div",{className:"border-t border-slate-100 pt-3",children:[M.jsxs("h5",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),"Top 3 Monthly Issues"]}),M.jsx("div",{className:"space-y-1.5",children:c.map((f,h)=>M.jsxs("div",{className:"flex justify-between items-center text-[11px] bg-slate-50 p-1.5 rounded-md border border-slate-100",children:[M.jsx("span",{className:"font-bold text-slate-700 truncate max-w-[120px]",children:f.issue}),M.jsx("span",{className:"font-black text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded",children:f.humanCount})]},h))})]})]})]},l.name)})}),M.jsx(eO,{data:t,title:"Sessions & Escalation Comparison",instanceId:"overview-comparison"}),M.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(l=>M.jsx(tO,{data:l.channels,title:`${l.name} - Channels`},l.name))}),M.jsx(oO,{metrics:r,topChannel:a,top5Products:i,top5Issues:s,monthCount:1})]})}const PY=`Channel,Created at,Product,Issue,Sub Type,Handled
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
Inapp,2026-05-10,,,,Bot`;function SY(){const[e,t]=X.useState([]),[n,r]=X.useState([]),[a,i]=X.useState("all"),[s,l]=X.useState("all"),[c,f]=X.useState([]),[h,d]=X.useState("overview"),[v,y]=X.useState(null),x=X.useRef(null),[I,b]=X.useState(null),S=X.useRef([]);X.useEffect(()=>{S.current=e},[e]);const W=$=>{if(!$)return $;const V=$.trim(),G=V.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(G){const[,Q,L,K]=G;return`${K.padStart(2,"0")}-${L.padStart(2,"0")}-${Q}`}const z=V.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(z){const[,Q,L,K]=z;return`${Q.padStart(2,"0")}-${L.padStart(2,"0")}-${K}`}return V};X.useEffect(()=>{let $=[];dI.parse(PY,{header:!0,skipEmptyLines:!0,complete:V=>{$=V.data.map(z=>({channel:z.Channel||z.channel||"",createdAt:W(z["Created at"]||z.createdAt||z["Created date"]||""),product:z.Product||z.product||"",issue:z.Issue||z.issue||"",subType:z["Sub Type"]||z.subType||"",handled:z.Handled||z.handled||""}));const G=localStorage.getItem("waggle_manual_data");if(G)try{const z=JSON.parse(G);Array.isArray(z)&&($=[...$,...z])}catch{}t($)}})},[]);const A=X.useMemo(()=>{const $=["january","february","march","april","may","june","july","august","september","october","november","december"],V=new Set;return e.forEach(G=>{try{const z=ir(G.createdAt);if(!isNaN(z.getTime())){const Q=$[z.getMonth()];V.add(`${Q}-${z.getFullYear()}`)}}catch{}}),Array.from(V).sort((G,z)=>{const[Q,L]=G.split("-"),[K,Y]=z.split("-");return L!==Y?parseInt(L)-parseInt(Y):$.indexOf(Q)-$.indexOf(K)})},[e]);X.useEffect(()=>{f(a&&a!=="all"?PW(a):[]),l("all")},[a]),X.useEffect(()=>{e.length>0&&w(a,s,h)},[s,a,e,h]);const O=$=>{var G;const V=(G=$.target.files)==null?void 0:G[0];V&&(dI.parse(V,{header:!0,skipEmptyLines:!0,complete:z=>{if(!z.data.length){b({type:"error",message:"The CSV file appears to be empty."});return}const Q=z.data.map(Y=>({channel:Y.Channel||Y.channel||"",createdAt:W(Y["Created at"]||Y.createdAt||""),product:Y.Product||Y.product||"",issue:Y.Issue||Y.issue||"",subType:Y["Sub Type"]||Y.subType||"",handled:Y.Handled||Y.handled||""})),L=new Set(S.current.map(Y=>`${Y.channel}|${Y.createdAt}|${Y.product}|${Y.issue}|${Y.subType}|${Y.handled}`)),K=Q.filter(Y=>!L.has(`${Y.channel}|${Y.createdAt}|${Y.product}|${Y.issue}|${Y.subType}|${Y.handled}`));if(K.length>0){const Y=[...JSON.parse(localStorage.getItem("waggle_manual_data")||"[]"),...K];localStorage.setItem("waggle_manual_data",JSON.stringify(Y)),t(H=>[...H,...K])}b({type:K.length>0?"success":"error",message:K.length>0?`Added ${K.length} rows.`:"No new rows found."}),setTimeout(()=>b(null),5e3)}}),$.target.value="")},w=($,V,G)=>{let z=e,Q=$;if($==="all"&&G==="detailed"&&A.length>0&&(Q=A[A.length-1]),Q!=="all"?z=e.filter(L=>{const K=ir(L.createdAt);return Nv(K,Q)}):z=e.filter(L=>!isNaN(ir(L.createdAt).getTime())),V!=="all"){const L=c.find(K=>K.value===V);L&&(z=z.filter(K=>SW(ir(K.createdAt),L)))}r(z)},_=Ev(n),N=Tv(n),P=WW(n),C=oR(n),T=aR(e,a),j=[{from:"from-blue-500",to:"to-cyan-500"},{from:"from-purple-500",to:"to-indigo-600"},{from:"from-pink-500",to:"to-rose-600"},{from:"from-emerald-500",to:"to-teal-600"},{from:"from-orange-500",to:"to-amber-500"}],E=(a==="all"?A:[a]).map(($,V)=>{const G=e.filter(K=>Nv(ir(K.createdAt),$)),[z,Q]=$.split("-"),L=j[V%j.length];return{name:`${z.charAt(0).toUpperCase()+z.slice(1)} ${Q}`,shortName:`Month ${V+1}`,data:G,metrics:Ev(G),channels:Tv(G),colorFrom:L.from,colorTo:L.to}});return M.jsx("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",children:M.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[M.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[M.jsxs("div",{children:[M.jsxs("h1",{className:"text-3xl font-bold",children:["Waggle AI Chatbot Dashboard ",M.jsx("span",{className:"text-xs font-normal text-gray-400 align-top",children:"v1.3"})]}),M.jsx("p",{className:"text-gray-600 mt-1",children:"Track and analyze customer support interactions"})]}),M.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[M.jsxs("select",{value:a,onChange:$=>i($.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",children:[M.jsx("option",{value:"all",children:"All Months"}),A.map($=>M.jsxs("option",{value:$,children:[$.split("-")[0].charAt(0).toUpperCase()+$.split("-")[0].slice(1)," ",$.split("-")[1]]},$))]}),M.jsxs("select",{value:s,onChange:$=>l($.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",disabled:a==="all",children:[M.jsx("option",{value:"all",children:"All Weeks"}),c.map($=>M.jsx("option",{value:$.value,children:$.label},$.value))]}),M.jsx("input",{ref:x,type:"file",accept:".csv",onChange:O,className:"hidden"}),M.jsxs(BI,{onClick:()=>{var $;return($=x.current)==null?void 0:$.click()},variant:"outline",className:"bg-white border-blue-300 text-blue-700",children:[M.jsx(UN,{className:"w-4 h-4 mr-2"})," Add Data"]}),M.jsxs(BI,{onClick:()=>iR(n),variant:"outline",className:"bg-white",children:[M.jsx(GN,{className:"w-4 h-4 mr-2"})," Export CSV"]})]})]}),I&&M.jsx(zn,{className:`border ${I.type==="success"?"bg-green-50":"bg-red-50"}`,children:M.jsxs(Un,{className:"p-4 flex items-center justify-between",children:[M.jsx("p",{className:"font-medium",children:I.message}),M.jsx("button",{onClick:()=>b(null),children:M.jsx(tE,{className:"w-4 h-4"})})]})}),a==="all"&&M.jsx("div",{className:"flex justify-center",children:M.jsxs("div",{className:"inline-flex rounded-lg border border-gray-200 bg-white p-1",children:[M.jsx("button",{onClick:()=>d("overview"),className:`px-6 py-2 rounded-md text-sm font-medium ${h==="overview"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Overview Comparison"}),M.jsx("button",{onClick:()=>d("detailed"),className:`px-6 py-2 rounded-md text-sm font-medium ${h==="detailed"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Detailed Analysis"})]})}),a==="all"&&h==="overview"?M.jsx(wY,{monthsData:E,weeklyEscalation:T}):M.jsxs(M.Fragment,{children:[M.jsx(uR,{metrics:_}),M.jsx(oO,{metrics:_,topChannel:N[0],top5Products:P.slice(0,5),top5Issues:Rv(n,5),monthCount:a==="all"?A.length:1}),M.jsx(eO,{data:T,instanceId:"detailed-analysis"}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[M.jsx(tO,{data:N}),M.jsx(IY,{data:P})]}),M.jsx(zn,{children:M.jsx(Un,{className:"p-6",children:M.jsxs(ON,{defaultValue:"issues",className:"w-full",children:[M.jsxs(CN,{className:"grid w-full grid-cols-2 max-w-md",children:[M.jsx(xI,{value:"issues",children:"Issue Analysis"}),M.jsx(xI,{value:"sessions",children:"Detailed Sessions"})]}),M.jsx(wI,{value:"issues",className:"mt-6",children:M.jsx(BY,{data:C})}),M.jsx(wI,{value:"sessions",className:"mt-6",children:M.jsx(xY,{data:n})})]})})})]})]})})}ck.createRoot(document.getElementById("root")).render(M.jsx(SY,{}));
