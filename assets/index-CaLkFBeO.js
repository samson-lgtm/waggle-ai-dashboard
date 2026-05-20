var o5=Object.defineProperty;var i5=(e,n,t)=>n in e?o5(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ve=(e,n,t)=>i5(e,typeof n!="symbol"?n+"":n,t);function u5(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mf={exports:{}},$u={},hf={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iI;function s5(){if(iI)return Le;iI=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),d=Symbol.iterator;function v(R){return R===null||typeof R!="object"?null:(R=d&&R[d]||R["@@iterator"],typeof R=="function"?R:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,I={};function b(R,F,J){this.props=R,this.context=F,this.refs=I,this.updater=J||y}b.prototype.isReactComponent={},b.prototype.setState=function(R,F){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,F,"setState")},b.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function S(){}S.prototype=b.prototype;function W(R,F,J){this.props=R,this.context=F,this.refs=I,this.updater=J||y}var M=W.prototype=new S;M.constructor=W,B(M,b.prototype),M.isPureReactComponent=!0;var O=Array.isArray,w=Object.prototype.hasOwnProperty,A={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function P(R,F,J){var ue,me={},ge=null,ye=null;if(F!=null)for(ue in F.ref!==void 0&&(ye=F.ref),F.key!==void 0&&(ge=""+F.key),F)w.call(F,ue)&&!N.hasOwnProperty(ue)&&(me[ue]=F[ue]);var fe=arguments.length-2;if(fe===1)me.children=J;else if(1<fe){for(var te=Array(fe),de=0;de<fe;de++)te[de]=arguments[de+2];me.children=te}if(R&&R.defaultProps)for(ue in fe=R.defaultProps,fe)me[ue]===void 0&&(me[ue]=fe[ue]);return{$$typeof:e,type:R,key:ge,ref:ye,props:me,_owner:A.current}}function C(R,F){return{$$typeof:e,type:R.type,key:F,ref:R.ref,props:R.props,_owner:R._owner}}function T(R){return typeof R=="object"&&R!==null&&R.$$typeof===e}function j(R){var F={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(J){return F[J]})}var H=/\/+/g;function q(R,F){return typeof R=="object"&&R!==null&&R.key!=null?j(""+R.key):F.toString(36)}function L(R,F,J,ue,me){var ge=typeof R;(ge==="undefined"||ge==="boolean")&&(R=null);var ye=!1;if(R===null)ye=!0;else switch(ge){case"string":case"number":ye=!0;break;case"object":switch(R.$$typeof){case e:case n:ye=!0}}if(ye)return ye=R,me=me(ye),R=ue===""?"."+q(ye,0):ue,O(me)?(J="",R!=null&&(J=R.replace(H,"$&/")+"/"),L(me,F,J,"",function(de){return de})):me!=null&&(T(me)&&(me=C(me,J+(!me.key||ye&&ye.key===me.key?"":(""+me.key).replace(H,"$&/")+"/")+R)),F.push(me)),1;if(ye=0,ue=ue===""?".":ue+":",O(R))for(var fe=0;fe<R.length;fe++){ge=R[fe];var te=ue+q(ge,fe);ye+=L(ge,F,J,te,me)}else if(te=v(R),typeof te=="function")for(R=te.call(R),fe=0;!(ge=R.next()).done;)ge=ge.value,te=ue+q(ge,fe++),ye+=L(ge,F,J,te,me);else if(ge==="object")throw F=String(R),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return ye}function K(R,F,J){if(R==null)return R;var ue=[],me=0;return L(R,ue,"","",function(ge){return F.call(J,ge,me++)}),ue}function U(R){if(R._status===-1){var F=R._result;F=F(),F.then(function(J){(R._status===0||R._status===-1)&&(R._status=1,R._result=J)},function(J){(R._status===0||R._status===-1)&&(R._status=2,R._result=J)}),R._status===-1&&(R._status=0,R._result=F)}if(R._status===1)return R._result.default;throw R._result}var V={current:null},D={transition:null},Q={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:D,ReactCurrentOwner:A};function X(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:K,forEach:function(R,F,J){K(R,function(){F.apply(this,arguments)},J)},count:function(R){var F=0;return K(R,function(){F++}),F},toArray:function(R){return K(R,function(F){return F})||[]},only:function(R){if(!T(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},Le.Component=b,Le.Fragment=t,Le.Profiler=a,Le.PureComponent=W,Le.StrictMode=r,Le.Suspense=c,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Le.act=X,Le.cloneElement=function(R,F,J){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var ue=B({},R.props),me=R.key,ge=R.ref,ye=R._owner;if(F!=null){if(F.ref!==void 0&&(ge=F.ref,ye=A.current),F.key!==void 0&&(me=""+F.key),R.type&&R.type.defaultProps)var fe=R.type.defaultProps;for(te in F)w.call(F,te)&&!N.hasOwnProperty(te)&&(ue[te]=F[te]===void 0&&fe!==void 0?fe[te]:F[te])}var te=arguments.length-2;if(te===1)ue.children=J;else if(1<te){fe=Array(te);for(var de=0;de<te;de++)fe[de]=arguments[de+2];ue.children=fe}return{$$typeof:e,type:R.type,key:me,ref:ge,props:ue,_owner:ye}},Le.createContext=function(R){return R={$$typeof:s,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:i,_context:R},R.Consumer=R},Le.createElement=P,Le.createFactory=function(R){var F=P.bind(null,R);return F.type=R,F},Le.createRef=function(){return{current:null}},Le.forwardRef=function(R){return{$$typeof:p,render:R}},Le.isValidElement=T,Le.lazy=function(R){return{$$typeof:m,_payload:{_status:-1,_result:R},_init:U}},Le.memo=function(R,F){return{$$typeof:f,type:R,compare:F===void 0?null:F}},Le.startTransition=function(R){var F=D.transition;D.transition={};try{R()}finally{D.transition=F}},Le.unstable_act=X,Le.useCallback=function(R,F){return V.current.useCallback(R,F)},Le.useContext=function(R){return V.current.useContext(R)},Le.useDebugValue=function(){},Le.useDeferredValue=function(R){return V.current.useDeferredValue(R)},Le.useEffect=function(R,F){return V.current.useEffect(R,F)},Le.useId=function(){return V.current.useId()},Le.useImperativeHandle=function(R,F,J){return V.current.useImperativeHandle(R,F,J)},Le.useInsertionEffect=function(R,F){return V.current.useInsertionEffect(R,F)},Le.useLayoutEffect=function(R,F){return V.current.useLayoutEffect(R,F)},Le.useMemo=function(R,F){return V.current.useMemo(R,F)},Le.useReducer=function(R,F,J){return V.current.useReducer(R,F,J)},Le.useRef=function(R){return V.current.useRef(R)},Le.useState=function(R){return V.current.useState(R)},Le.useSyncExternalStore=function(R,F,J){return V.current.useSyncExternalStore(R,F,J)},Le.useTransition=function(){return V.current.useTransition()},Le.version="18.3.1",Le}var uI;function py(){return uI||(uI=1,hf.exports=s5()),hf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sI;function p5(){if(sI)return $u;sI=1;var e=py(),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(p,c,f){var m,d={},v=null,y=null;f!==void 0&&(v=""+f),c.key!==void 0&&(v=""+c.key),c.ref!==void 0&&(y=c.ref);for(m in c)r.call(c,m)&&!i.hasOwnProperty(m)&&(d[m]=c[m]);if(p&&p.defaultProps)for(m in c=p.defaultProps,c)d[m]===void 0&&(d[m]=c[m]);return{$$typeof:n,type:p,key:v,ref:y,props:d,_owner:a.current}}return $u.Fragment=t,$u.jsx=s,$u.jsxs=s,$u}var pI;function l5(){return pI||(pI=1,mf.exports=p5()),mf.exports}var _=l5(),cl={},vf={exports:{}},vt={},gf={exports:{}},yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lI;function c5(){return lI||(lI=1,(function(e){function n(D,Q){var X=D.length;D.push(Q);e:for(;0<X;){var R=X-1>>>1,F=D[R];if(0<a(F,Q))D[R]=Q,D[X]=F,X=R;else break e}}function t(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var Q=D[0],X=D.pop();if(X!==Q){D[0]=X;e:for(var R=0,F=D.length,J=F>>>1;R<J;){var ue=2*(R+1)-1,me=D[ue],ge=ue+1,ye=D[ge];if(0>a(me,X))ge<F&&0>a(ye,me)?(D[R]=ye,D[ge]=X,R=ge):(D[R]=me,D[ue]=X,R=ue);else if(ge<F&&0>a(ye,X))D[R]=ye,D[ge]=X,R=ge;else break e}}return Q}function a(D,Q){var X=D.sortIndex-Q.sortIndex;return X!==0?X:D.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,p=s.now();e.unstable_now=function(){return s.now()-p}}var c=[],f=[],m=1,d=null,v=3,y=!1,B=!1,I=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(D){for(var Q=t(f);Q!==null;){if(Q.callback===null)r(f);else if(Q.startTime<=D)r(f),Q.sortIndex=Q.expirationTime,n(c,Q);else break;Q=t(f)}}function O(D){if(I=!1,M(D),!B)if(t(c)!==null)B=!0,U(w);else{var Q=t(f);Q!==null&&V(O,Q.startTime-D)}}function w(D,Q){B=!1,I&&(I=!1,S(P),P=-1),y=!0;var X=v;try{for(M(Q),d=t(c);d!==null&&(!(d.expirationTime>Q)||D&&!j());){var R=d.callback;if(typeof R=="function"){d.callback=null,v=d.priorityLevel;var F=R(d.expirationTime<=Q);Q=e.unstable_now(),typeof F=="function"?d.callback=F:d===t(c)&&r(c),M(Q)}else r(c);d=t(c)}if(d!==null)var J=!0;else{var ue=t(f);ue!==null&&V(O,ue.startTime-Q),J=!1}return J}finally{d=null,v=X,y=!1}}var A=!1,N=null,P=-1,C=5,T=-1;function j(){return!(e.unstable_now()-T<C)}function H(){if(N!==null){var D=e.unstable_now();T=D;var Q=!0;try{Q=N(!0,D)}finally{Q?q():(A=!1,N=null)}}else A=!1}var q;if(typeof W=="function")q=function(){W(H)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,K=L.port2;L.port1.onmessage=H,q=function(){K.postMessage(null)}}else q=function(){b(H,0)};function U(D){N=D,A||(A=!0,q())}function V(D,Q){P=b(function(){D(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){B||y||(B=!0,U(w))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(D){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var X=v;v=Q;try{return D()}finally{v=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var X=v;v=D;try{return Q()}finally{v=X}},e.unstable_scheduleCallback=function(D,Q,X){var R=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?R+X:R):X=R,D){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=X+F,D={id:m++,callback:Q,priorityLevel:D,startTime:X,expirationTime:F,sortIndex:-1},X>R?(D.sortIndex=X,n(f,D),t(c)===null&&D===t(f)&&(I?(S(P),P=-1):I=!0,V(O,X-R))):(D.sortIndex=F,n(c,D),B||y||(B=!0,U(w))),D},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(D){var Q=v;return function(){var X=v;v=Q;try{return D.apply(this,arguments)}finally{v=X}}}})(yf)),yf}var cI;function f5(){return cI||(cI=1,gf.exports=c5()),gf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fI;function d5(){if(fI)return vt;fI=1;var e=py(),n=f5();function t(o){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+o,l=1;l<arguments.length;l++)u+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+o+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function i(o,u){s(o,u),s(o+"Capture",u)}function s(o,u){for(a[o]=u,o=0;o<u.length;o++)r.add(u[o])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},d={};function v(o){return c.call(d,o)?!0:c.call(m,o)?!1:f.test(o)?d[o]=!0:(m[o]=!0,!1)}function y(o,u,l,h){if(l!==null&&l.type===0)return!1;switch(typeof u){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function B(o,u,l,h){if(u===null||typeof u>"u"||y(o,u,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!u;case 4:return u===!1;case 5:return isNaN(u);case 6:return isNaN(u)||1>u}return!1}function I(o,u,l,h,g,x,k){this.acceptsBooleans=u===2||u===3||u===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=o,this.type=u,this.sanitizeURL=x,this.removeEmptyString=k}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){b[o]=new I(o,0,!1,o,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var u=o[0];b[u]=new I(u,1,!1,o[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(o){b[o]=new I(o,2,!1,o.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){b[o]=new I(o,2,!1,o,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){b[o]=new I(o,3,!1,o.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(o){b[o]=new I(o,3,!0,o,null,!1,!1)}),["capture","download"].forEach(function(o){b[o]=new I(o,4,!1,o,null,!1,!1)}),["cols","rows","size","span"].forEach(function(o){b[o]=new I(o,6,!1,o,null,!1,!1)}),["rowSpan","start"].forEach(function(o){b[o]=new I(o,5,!1,o.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function W(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var u=o.replace(S,W);b[u]=new I(u,1,!1,o,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var u=o.replace(S,W);b[u]=new I(u,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(o){var u=o.replace(S,W);b[u]=new I(u,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!1,!1)}),b.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!0,!0)});function M(o,u,l,h){var g=b.hasOwnProperty(u)?b[u]:null;(g!==null?g.type!==0:h||!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(B(u,l,g,h)&&(l=null),h||g===null?v(u)&&(l===null?o.removeAttribute(u):o.setAttribute(u,""+l)):g.mustUseProperty?o[g.propertyName]=l===null?g.type===3?!1:"":l:(u=g.attributeName,h=g.attributeNamespace,l===null?o.removeAttribute(u):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,h?o.setAttributeNS(h,u,l):o.setAttribute(u,l))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),A=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),j=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),D=Symbol.iterator;function Q(o){return o===null||typeof o!="object"?null:(o=D&&o[D]||o["@@iterator"],typeof o=="function"?o:null)}var X=Object.assign,R;function F(o){if(R===void 0)try{throw Error()}catch(l){var u=l.stack.trim().match(/\n( *(at )?)/);R=u&&u[1]||""}return`
`+R+o}var J=!1;function ue(o,u){if(!o||J)return"";J=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(u)if(u=function(){throw Error()},Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(ne){var h=ne}Reflect.construct(o,[],u)}else{try{u.call()}catch(ne){h=ne}o.call(u.prototype)}else{try{throw Error()}catch(ne){h=ne}o()}}catch(ne){if(ne&&h&&typeof ne.stack=="string"){for(var g=ne.stack.split(`
`),x=h.stack.split(`
`),k=g.length-1,$=x.length-1;1<=k&&0<=$&&g[k]!==x[$];)$--;for(;1<=k&&0<=$;k--,$--)if(g[k]!==x[$]){if(k!==1||$!==1)do if(k--,$--,0>$||g[k]!==x[$]){var z=`
`+g[k].replace(" at new "," at ");return o.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",o.displayName)),z}while(1<=k&&0<=$);break}}}finally{J=!1,Error.prepareStackTrace=l}return(o=o?o.displayName||o.name:"")?F(o):""}function me(o){switch(o.tag){case 5:return F(o.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return o=ue(o.type,!1),o;case 11:return o=ue(o.type.render,!1),o;case 1:return o=ue(o.type,!0),o;default:return""}}function ge(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case N:return"Fragment";case A:return"Portal";case C:return"Profiler";case P:return"StrictMode";case q:return"Suspense";case L:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case j:return(o.displayName||"Context")+".Consumer";case T:return(o._context.displayName||"Context")+".Provider";case H:var u=o.render;return o=o.displayName,o||(o=u.displayName||u.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case K:return u=o.displayName||null,u!==null?u:ge(o.type)||"Memo";case U:u=o._payload,o=o._init;try{return ge(o(u))}catch{}}return null}function ye(o){var u=o.type;switch(o.tag){case 24:return"Cache";case 9:return(u.displayName||"Context")+".Consumer";case 10:return(u._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=u.render,o=o.displayName||o.name||"",u.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return u;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(u);case 8:return u===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u}return null}function fe(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function te(o){var u=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(u==="checkbox"||u==="radio")}function de(o){var u=te(o)?"checked":"value",l=Object.getOwnPropertyDescriptor(o.constructor.prototype,u),h=""+o[u];if(!o.hasOwnProperty(u)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,x=l.set;return Object.defineProperty(o,u,{configurable:!0,get:function(){return g.call(this)},set:function(k){h=""+k,x.call(this,k)}}),Object.defineProperty(o,u,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(k){h=""+k},stopTracking:function(){o._valueTracker=null,delete o[u]}}}}function ce(o){o._valueTracker||(o._valueTracker=de(o))}function re(o){if(!o)return!1;var u=o._valueTracker;if(!u)return!0;var l=u.getValue(),h="";return o&&(h=te(o)?o.checked?"true":"false":o.value),o=h,o!==l?(u.setValue(o),!0):!1}function Te(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function Pe(o,u){var l=u.checked;return X({},u,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??o._wrapperState.initialChecked})}function Ce(o,u){var l=u.defaultValue==null?"":u.defaultValue,h=u.checked!=null?u.checked:u.defaultChecked;l=fe(u.value!=null?u.value:l),o._wrapperState={initialChecked:h,initialValue:l,controlled:u.type==="checkbox"||u.type==="radio"?u.checked!=null:u.value!=null}}function Me(o,u){u=u.checked,u!=null&&M(o,"checked",u,!1)}function Fe(o,u){Me(o,u);var l=fe(u.value),h=u.type;if(l!=null)h==="number"?(l===0&&o.value===""||o.value!=l)&&(o.value=""+l):o.value!==""+l&&(o.value=""+l);else if(h==="submit"||h==="reset"){o.removeAttribute("value");return}u.hasOwnProperty("value")?qe(o,u.type,l):u.hasOwnProperty("defaultValue")&&qe(o,u.type,fe(u.defaultValue)),u.checked==null&&u.defaultChecked!=null&&(o.defaultChecked=!!u.defaultChecked)}function je(o,u,l){if(u.hasOwnProperty("value")||u.hasOwnProperty("defaultValue")){var h=u.type;if(!(h!=="submit"&&h!=="reset"||u.value!==void 0&&u.value!==null))return;u=""+o._wrapperState.initialValue,l||u===o.value||(o.value=u),o.defaultValue=u}l=o.name,l!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,l!==""&&(o.name=l)}function qe(o,u,l){(u!=="number"||Te(o.ownerDocument)!==o)&&(l==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+l&&(o.defaultValue=""+l))}var Ke=Array.isArray;function xn(o,u,l,h){if(o=o.options,u){u={};for(var g=0;g<l.length;g++)u["$"+l[g]]=!0;for(l=0;l<o.length;l++)g=u.hasOwnProperty("$"+o[l].value),o[l].selected!==g&&(o[l].selected=g),g&&h&&(o[l].defaultSelected=!0)}else{for(l=""+fe(l),u=null,g=0;g<o.length;g++){if(o[g].value===l){o[g].selected=!0,h&&(o[g].defaultSelected=!0);return}u!==null||o[g].disabled||(u=o[g])}u!==null&&(u.selected=!0)}}function gn(o,u){if(u.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},u,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function Ot(o,u){var l=u.value;if(l==null){if(l=u.children,u=u.defaultValue,l!=null){if(u!=null)throw Error(t(92));if(Ke(l)){if(1<l.length)throw Error(t(93));l=l[0]}u=l}u==null&&(u=""),l=u}o._wrapperState={initialValue:fe(l)}}function yn(o,u){var l=fe(u.value),h=fe(u.defaultValue);l!=null&&(l=""+l,l!==o.value&&(o.value=l),u.defaultValue==null&&o.defaultValue!==l&&(o.defaultValue=l)),h!=null&&(o.defaultValue=""+h)}function Qn(o){var u=o.textContent;u===o._wrapperState.initialValue&&u!==""&&u!==null&&(o.value=u)}function wn(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dn(o,u){return o==null||o==="http://www.w3.org/1999/xhtml"?wn(u):o==="http://www.w3.org/2000/svg"&&u==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var lt,Mo=(function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(u,l,h,g){MSApp.execUnsafeLocalFunction(function(){return o(u,l,h,g)})}:o})(function(o,u){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=u;else{for(lt=lt||document.createElement("div"),lt.innerHTML="<svg>"+u.valueOf().toString()+"</svg>",u=lt.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;u.firstChild;)o.appendChild(u.firstChild)}});function na(o,u){if(u){var l=o.firstChild;if(l&&l===o.lastChild&&l.nodeType===3){l.nodeValue=u;return}}o.textContent=u}var Ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kt=["Webkit","ms","Moz","O"];Object.keys(Ct).forEach(function(o){kt.forEach(function(u){u=u+o.charAt(0).toUpperCase()+o.substring(1),Ct[u]=Ct[o]})});function ta(o,u,l){return u==null||typeof u=="boolean"||u===""?"":l||typeof u!="number"||u===0||Ct.hasOwnProperty(o)&&Ct[o]?(""+u).trim():u+"px"}function ru(o,u){o=o.style;for(var l in u)if(u.hasOwnProperty(l)){var h=l.indexOf("--")===0,g=ta(l,u[l],h);l==="float"&&(l="cssFloat"),h?o.setProperty(l,g):o[l]=g}}var lO=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function S0(o,u){if(u){if(lO[o]&&(u.children!=null||u.dangerouslySetInnerHTML!=null))throw Error(t(137,o));if(u.dangerouslySetInnerHTML!=null){if(u.children!=null)throw Error(t(60));if(typeof u.dangerouslySetInnerHTML!="object"||!("__html"in u.dangerouslySetInnerHTML))throw Error(t(61))}if(u.style!=null&&typeof u.style!="object")throw Error(t(62))}}function W0(o,u){if(o.indexOf("-")===-1)return typeof u.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M0=null;function A0(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var _0=null,Ao=null,_o=null;function wb(o){if(o=Su(o)){if(typeof _0!="function")throw Error(t(280));var u=o.stateNode;u&&(u=Sp(u),_0(o.stateNode,o.type,u))}}function Pb(o){Ao?_o?_o.push(o):_o=[o]:Ao=o}function Sb(){if(Ao){var o=Ao,u=_o;if(_o=Ao=null,wb(o),u)for(o=0;o<u.length;o++)wb(u[o])}}function Wb(o,u){return o(u)}function Mb(){}var O0=!1;function Ab(o,u,l){if(O0)return o(u,l);O0=!0;try{return Wb(o,u,l)}finally{O0=!1,(Ao!==null||_o!==null)&&(Mb(),Sb())}}function au(o,u){var l=o.stateNode;if(l===null)return null;var h=Sp(l);if(h===null)return null;l=h[u];e:switch(u){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(o=o.type,h=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!h;break e;default:o=!1}if(o)return null;if(l&&typeof l!="function")throw Error(t(231,u,typeof l));return l}var C0=!1;if(p)try{var ou={};Object.defineProperty(ou,"passive",{get:function(){C0=!0}}),window.addEventListener("test",ou,ou),window.removeEventListener("test",ou,ou)}catch{C0=!1}function cO(o,u,l,h,g,x,k,$,z){var ne=Array.prototype.slice.call(arguments,3);try{u.apply(l,ne)}catch(ie){this.onError(ie)}}var iu=!1,rp=null,ap=!1,k0=null,fO={onError:function(o){iu=!0,rp=o}};function dO(o,u,l,h,g,x,k,$,z){iu=!1,rp=null,cO.apply(fO,arguments)}function mO(o,u,l,h,g,x,k,$,z){if(dO.apply(this,arguments),iu){if(iu){var ne=rp;iu=!1,rp=null}else throw Error(t(198));ap||(ap=!0,k0=ne)}}function qa(o){var u=o,l=o;if(o.alternate)for(;u.return;)u=u.return;else{o=u;do u=o,(u.flags&4098)!==0&&(l=u.return),o=u.return;while(o)}return u.tag===3?l:null}function _b(o){if(o.tag===13){var u=o.memoizedState;if(u===null&&(o=o.alternate,o!==null&&(u=o.memoizedState)),u!==null)return u.dehydrated}return null}function Ob(o){if(qa(o)!==o)throw Error(t(188))}function hO(o){var u=o.alternate;if(!u){if(u=qa(o),u===null)throw Error(t(188));return u!==o?null:o}for(var l=o,h=u;;){var g=l.return;if(g===null)break;var x=g.alternate;if(x===null){if(h=g.return,h!==null){l=h;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===l)return Ob(g),o;if(x===h)return Ob(g),u;x=x.sibling}throw Error(t(188))}if(l.return!==h.return)l=g,h=x;else{for(var k=!1,$=g.child;$;){if($===l){k=!0,l=g,h=x;break}if($===h){k=!0,h=g,l=x;break}$=$.sibling}if(!k){for($=x.child;$;){if($===l){k=!0,l=x,h=g;break}if($===h){k=!0,h=x,l=g;break}$=$.sibling}if(!k)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?o:u}function Cb(o){return o=hO(o),o!==null?kb(o):null}function kb(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var u=kb(o);if(u!==null)return u;o=o.sibling}return null}var Nb=n.unstable_scheduleCallback,Rb=n.unstable_cancelCallback,vO=n.unstable_shouldYield,gO=n.unstable_requestPaint,Pn=n.unstable_now,yO=n.unstable_getCurrentPriorityLevel,N0=n.unstable_ImmediatePriority,Hb=n.unstable_UserBlockingPriority,op=n.unstable_NormalPriority,bO=n.unstable_LowPriority,Tb=n.unstable_IdlePriority,ip=null,fr=null;function IO(o){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(ip,o,void 0,(o.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:wO,BO=Math.log,xO=Math.LN2;function wO(o){return o>>>=0,o===0?32:31-(BO(o)/xO|0)|0}var up=64,sp=4194304;function uu(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function pp(o,u){var l=o.pendingLanes;if(l===0)return 0;var h=0,g=o.suspendedLanes,x=o.pingedLanes,k=l&268435455;if(k!==0){var $=k&~g;$!==0?h=uu($):(x&=k,x!==0&&(h=uu(x)))}else k=l&~g,k!==0?h=uu(k):x!==0&&(h=uu(x));if(h===0)return 0;if(u!==0&&u!==h&&(u&g)===0&&(g=h&-h,x=u&-u,g>=x||g===16&&(x&4194240)!==0))return u;if((h&4)!==0&&(h|=l&16),u=o.entangledLanes,u!==0)for(o=o.entanglements,u&=h;0<u;)l=31-Xt(u),g=1<<l,h|=o[l],u&=~g;return h}function PO(o,u){switch(o){case 1:case 2:case 4:return u+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SO(o,u){for(var l=o.suspendedLanes,h=o.pingedLanes,g=o.expirationTimes,x=o.pendingLanes;0<x;){var k=31-Xt(x),$=1<<k,z=g[k];z===-1?(($&l)===0||($&h)!==0)&&(g[k]=PO($,u)):z<=u&&(o.expiredLanes|=$),x&=~$}}function R0(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Eb(){var o=up;return up<<=1,(up&4194240)===0&&(up=64),o}function H0(o){for(var u=[],l=0;31>l;l++)u.push(o);return u}function su(o,u,l){o.pendingLanes|=u,u!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,u=31-Xt(u),o[u]=l}function WO(o,u){var l=o.pendingLanes&~u;o.pendingLanes=u,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=u,o.mutableReadLanes&=u,o.entangledLanes&=u,u=o.entanglements;var h=o.eventTimes;for(o=o.expirationTimes;0<l;){var g=31-Xt(l),x=1<<g;u[g]=0,h[g]=-1,o[g]=-1,l&=~x}}function T0(o,u){var l=o.entangledLanes|=u;for(o=o.entanglements;l;){var h=31-Xt(l),g=1<<h;g&u|o[h]&u&&(o[h]|=u),l&=~g}}var Ze=0;function jb(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var Db,E0,$b,Lb,Fb,j0=!1,lp=[],ra=null,aa=null,oa=null,pu=new Map,lu=new Map,ia=[],MO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qb(o,u){switch(o){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":pu.delete(u.pointerId);break;case"gotpointercapture":case"lostpointercapture":lu.delete(u.pointerId)}}function cu(o,u,l,h,g,x){return o===null||o.nativeEvent!==x?(o={blockedOn:u,domEventName:l,eventSystemFlags:h,nativeEvent:x,targetContainers:[g]},u!==null&&(u=Su(u),u!==null&&E0(u)),o):(o.eventSystemFlags|=h,u=o.targetContainers,g!==null&&u.indexOf(g)===-1&&u.push(g),o)}function AO(o,u,l,h,g){switch(u){case"focusin":return ra=cu(ra,o,u,l,h,g),!0;case"dragenter":return aa=cu(aa,o,u,l,h,g),!0;case"mouseover":return oa=cu(oa,o,u,l,h,g),!0;case"pointerover":var x=g.pointerId;return pu.set(x,cu(pu.get(x)||null,o,u,l,h,g)),!0;case"gotpointercapture":return x=g.pointerId,lu.set(x,cu(lu.get(x)||null,o,u,l,h,g)),!0}return!1}function zb(o){var u=za(o.target);if(u!==null){var l=qa(u);if(l!==null){if(u=l.tag,u===13){if(u=_b(l),u!==null){o.blockedOn=u,Fb(o.priority,function(){$b(l)});return}}else if(u===3&&l.stateNode.current.memoizedState.isDehydrated){o.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}o.blockedOn=null}function cp(o){if(o.blockedOn!==null)return!1;for(var u=o.targetContainers;0<u.length;){var l=$0(o.domEventName,o.eventSystemFlags,u[0],o.nativeEvent);if(l===null){l=o.nativeEvent;var h=new l.constructor(l.type,l);M0=h,l.target.dispatchEvent(h),M0=null}else return u=Su(l),u!==null&&E0(u),o.blockedOn=l,!1;u.shift()}return!0}function Ub(o,u,l){cp(o)&&l.delete(u)}function _O(){j0=!1,ra!==null&&cp(ra)&&(ra=null),aa!==null&&cp(aa)&&(aa=null),oa!==null&&cp(oa)&&(oa=null),pu.forEach(Ub),lu.forEach(Ub)}function fu(o,u){o.blockedOn===u&&(o.blockedOn=null,j0||(j0=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,_O)))}function du(o){function u(g){return fu(g,o)}if(0<lp.length){fu(lp[0],o);for(var l=1;l<lp.length;l++){var h=lp[l];h.blockedOn===o&&(h.blockedOn=null)}}for(ra!==null&&fu(ra,o),aa!==null&&fu(aa,o),oa!==null&&fu(oa,o),pu.forEach(u),lu.forEach(u),l=0;l<ia.length;l++)h=ia[l],h.blockedOn===o&&(h.blockedOn=null);for(;0<ia.length&&(l=ia[0],l.blockedOn===null);)zb(l),l.blockedOn===null&&ia.shift()}var Oo=O.ReactCurrentBatchConfig,fp=!0;function OO(o,u,l,h){var g=Ze,x=Oo.transition;Oo.transition=null;try{Ze=1,D0(o,u,l,h)}finally{Ze=g,Oo.transition=x}}function CO(o,u,l,h){var g=Ze,x=Oo.transition;Oo.transition=null;try{Ze=4,D0(o,u,l,h)}finally{Ze=g,Oo.transition=x}}function D0(o,u,l,h){if(fp){var g=$0(o,u,l,h);if(g===null)r2(o,u,h,dp,l),qb(o,h);else if(AO(g,o,u,l,h))h.stopPropagation();else if(qb(o,h),u&4&&-1<MO.indexOf(o)){for(;g!==null;){var x=Su(g);if(x!==null&&Db(x),x=$0(o,u,l,h),x===null&&r2(o,u,h,dp,l),x===g)break;g=x}g!==null&&h.stopPropagation()}else r2(o,u,h,null,l)}}var dp=null;function $0(o,u,l,h){if(dp=null,o=A0(h),o=za(o),o!==null)if(u=qa(o),u===null)o=null;else if(l=u.tag,l===13){if(o=_b(u),o!==null)return o;o=null}else if(l===3){if(u.stateNode.current.memoizedState.isDehydrated)return u.tag===3?u.stateNode.containerInfo:null;o=null}else u!==o&&(o=null);return dp=o,null}function Vb(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yO()){case N0:return 1;case Hb:return 4;case op:case bO:return 16;case Tb:return 536870912;default:return 16}default:return 16}}var ua=null,L0=null,mp=null;function Gb(){if(mp)return mp;var o,u=L0,l=u.length,h,g="value"in ua?ua.value:ua.textContent,x=g.length;for(o=0;o<l&&u[o]===g[o];o++);var k=l-o;for(h=1;h<=k&&u[l-h]===g[x-h];h++);return mp=g.slice(o,1<h?1-h:void 0)}function hp(o){var u=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&u===13&&(o=13)):o=u,o===10&&(o=13),32<=o||o===13?o:0}function vp(){return!0}function Kb(){return!1}function bt(o){function u(l,h,g,x,k){this._reactName=l,this._targetInst=g,this.type=h,this.nativeEvent=x,this.target=k,this.currentTarget=null;for(var $ in o)o.hasOwnProperty($)&&(l=o[$],this[$]=l?l(x):x[$]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?vp:Kb,this.isPropagationStopped=Kb,this}return X(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=vp)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=vp)},persist:function(){},isPersistent:vp}),u}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},F0=bt(Co),mu=X({},Co,{view:0,detail:0}),kO=bt(mu),q0,z0,hu,gp=X({},mu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:V0,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==hu&&(hu&&o.type==="mousemove"?(q0=o.screenX-hu.screenX,z0=o.screenY-hu.screenY):z0=q0=0,hu=o),q0)},movementY:function(o){return"movementY"in o?o.movementY:z0}}),Qb=bt(gp),NO=X({},gp,{dataTransfer:0}),RO=bt(NO),HO=X({},mu,{relatedTarget:0}),U0=bt(HO),TO=X({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),EO=bt(TO),jO=X({},Co,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),DO=bt(jO),$O=X({},Co,{data:0}),Yb=bt($O),LO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zO(o){var u=this.nativeEvent;return u.getModifierState?u.getModifierState(o):(o=qO[o])?!!u[o]:!1}function V0(){return zO}var UO=X({},mu,{key:function(o){if(o.key){var u=LO[o.key]||o.key;if(u!=="Unidentified")return u}return o.type==="keypress"?(o=hp(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?FO[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:V0,charCode:function(o){return o.type==="keypress"?hp(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?hp(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),VO=bt(UO),GO=X({},gp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xb=bt(GO),KO=X({},mu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:V0}),QO=bt(KO),YO=X({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),XO=bt(YO),ZO=X({},gp,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),JO=bt(ZO),eC=[9,13,27,32],G0=p&&"CompositionEvent"in window,vu=null;p&&"documentMode"in document&&(vu=document.documentMode);var nC=p&&"TextEvent"in window&&!vu,Zb=p&&(!G0||vu&&8<vu&&11>=vu),Jb=" ",e1=!1;function n1(o,u){switch(o){case"keyup":return eC.indexOf(u.keyCode)!==-1;case"keydown":return u.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t1(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var ko=!1;function tC(o,u){switch(o){case"compositionend":return t1(u);case"keypress":return u.which!==32?null:(e1=!0,Jb);case"textInput":return o=u.data,o===Jb&&e1?null:o;default:return null}}function rC(o,u){if(ko)return o==="compositionend"||!G0&&n1(o,u)?(o=Gb(),mp=L0=ua=null,ko=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(u.ctrlKey||u.altKey||u.metaKey)||u.ctrlKey&&u.altKey){if(u.char&&1<u.char.length)return u.char;if(u.which)return String.fromCharCode(u.which)}return null;case"compositionend":return Zb&&u.locale!=="ko"?null:u.data;default:return null}}var aC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function r1(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u==="input"?!!aC[o.type]:u==="textarea"}function a1(o,u,l,h){Pb(h),u=xp(u,"onChange"),0<u.length&&(l=new F0("onChange","change",null,l,h),o.push({event:l,listeners:u}))}var gu=null,yu=null;function oC(o){x1(o,0)}function yp(o){var u=Eo(o);if(re(u))return o}function iC(o,u){if(o==="change")return u}var o1=!1;if(p){var K0;if(p){var Q0="oninput"in document;if(!Q0){var i1=document.createElement("div");i1.setAttribute("oninput","return;"),Q0=typeof i1.oninput=="function"}K0=Q0}else K0=!1;o1=K0&&(!document.documentMode||9<document.documentMode)}function u1(){gu&&(gu.detachEvent("onpropertychange",s1),yu=gu=null)}function s1(o){if(o.propertyName==="value"&&yp(yu)){var u=[];a1(u,yu,o,A0(o)),Ab(oC,u)}}function uC(o,u,l){o==="focusin"?(u1(),gu=u,yu=l,gu.attachEvent("onpropertychange",s1)):o==="focusout"&&u1()}function sC(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return yp(yu)}function pC(o,u){if(o==="click")return yp(u)}function lC(o,u){if(o==="input"||o==="change")return yp(u)}function cC(o,u){return o===u&&(o!==0||1/o===1/u)||o!==o&&u!==u}var Zt=typeof Object.is=="function"?Object.is:cC;function bu(o,u){if(Zt(o,u))return!0;if(typeof o!="object"||o===null||typeof u!="object"||u===null)return!1;var l=Object.keys(o),h=Object.keys(u);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var g=l[h];if(!c.call(u,g)||!Zt(o[g],u[g]))return!1}return!0}function p1(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function l1(o,u){var l=p1(o);o=0;for(var h;l;){if(l.nodeType===3){if(h=o+l.textContent.length,o<=u&&h>=u)return{node:l,offset:u-o};o=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=p1(l)}}function c1(o,u){return o&&u?o===u?!0:o&&o.nodeType===3?!1:u&&u.nodeType===3?c1(o,u.parentNode):"contains"in o?o.contains(u):o.compareDocumentPosition?!!(o.compareDocumentPosition(u)&16):!1:!1}function f1(){for(var o=window,u=Te();u instanceof o.HTMLIFrameElement;){try{var l=typeof u.contentWindow.location.href=="string"}catch{l=!1}if(l)o=u.contentWindow;else break;u=Te(o.document)}return u}function Y0(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u&&(u==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||u==="textarea"||o.contentEditable==="true")}function fC(o){var u=f1(),l=o.focusedElem,h=o.selectionRange;if(u!==l&&l&&l.ownerDocument&&c1(l.ownerDocument.documentElement,l)){if(h!==null&&Y0(l)){if(u=h.start,o=h.end,o===void 0&&(o=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(o,l.value.length);else if(o=(u=l.ownerDocument||document)&&u.defaultView||window,o.getSelection){o=o.getSelection();var g=l.textContent.length,x=Math.min(h.start,g);h=h.end===void 0?x:Math.min(h.end,g),!o.extend&&x>h&&(g=h,h=x,x=g),g=l1(l,x);var k=l1(l,h);g&&k&&(o.rangeCount!==1||o.anchorNode!==g.node||o.anchorOffset!==g.offset||o.focusNode!==k.node||o.focusOffset!==k.offset)&&(u=u.createRange(),u.setStart(g.node,g.offset),o.removeAllRanges(),x>h?(o.addRange(u),o.extend(k.node,k.offset)):(u.setEnd(k.node,k.offset),o.addRange(u)))}}for(u=[],o=l;o=o.parentNode;)o.nodeType===1&&u.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<u.length;l++)o=u[l],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var dC=p&&"documentMode"in document&&11>=document.documentMode,No=null,X0=null,Iu=null,Z0=!1;function d1(o,u,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Z0||No==null||No!==Te(h)||(h=No,"selectionStart"in h&&Y0(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Iu&&bu(Iu,h)||(Iu=h,h=xp(X0,"onSelect"),0<h.length&&(u=new F0("onSelect","select",null,u,l),o.push({event:u,listeners:h}),u.target=No)))}function bp(o,u){var l={};return l[o.toLowerCase()]=u.toLowerCase(),l["Webkit"+o]="webkit"+u,l["Moz"+o]="moz"+u,l}var Ro={animationend:bp("Animation","AnimationEnd"),animationiteration:bp("Animation","AnimationIteration"),animationstart:bp("Animation","AnimationStart"),transitionend:bp("Transition","TransitionEnd")},J0={},m1={};p&&(m1=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function Ip(o){if(J0[o])return J0[o];if(!Ro[o])return o;var u=Ro[o],l;for(l in u)if(u.hasOwnProperty(l)&&l in m1)return J0[o]=u[l];return o}var h1=Ip("animationend"),v1=Ip("animationiteration"),g1=Ip("animationstart"),y1=Ip("transitionend"),b1=new Map,I1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sa(o,u){b1.set(o,u),i(u,[o])}for(var e2=0;e2<I1.length;e2++){var n2=I1[e2],mC=n2.toLowerCase(),hC=n2[0].toUpperCase()+n2.slice(1);sa(mC,"on"+hC)}sa(h1,"onAnimationEnd"),sa(v1,"onAnimationIteration"),sa(g1,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa(y1,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bu));function B1(o,u,l){var h=o.type||"unknown-event";o.currentTarget=l,mO(h,u,void 0,o),o.currentTarget=null}function x1(o,u){u=(u&4)!==0;for(var l=0;l<o.length;l++){var h=o[l],g=h.event;h=h.listeners;e:{var x=void 0;if(u)for(var k=h.length-1;0<=k;k--){var $=h[k],z=$.instance,ne=$.currentTarget;if($=$.listener,z!==x&&g.isPropagationStopped())break e;B1(g,$,ne),x=z}else for(k=0;k<h.length;k++){if($=h[k],z=$.instance,ne=$.currentTarget,$=$.listener,z!==x&&g.isPropagationStopped())break e;B1(g,$,ne),x=z}}}if(ap)throw o=k0,ap=!1,k0=null,o}function un(o,u){var l=u[p2];l===void 0&&(l=u[p2]=new Set);var h=o+"__bubble";l.has(h)||(w1(u,o,2,!1),l.add(h))}function t2(o,u,l){var h=0;u&&(h|=4),w1(l,o,h,u)}var Bp="_reactListening"+Math.random().toString(36).slice(2);function xu(o){if(!o[Bp]){o[Bp]=!0,r.forEach(function(l){l!=="selectionchange"&&(vC.has(l)||t2(l,!1,o),t2(l,!0,o))});var u=o.nodeType===9?o:o.ownerDocument;u===null||u[Bp]||(u[Bp]=!0,t2("selectionchange",!1,u))}}function w1(o,u,l,h){switch(Vb(u)){case 1:var g=OO;break;case 4:g=CO;break;default:g=D0}l=g.bind(null,u,l,o),g=void 0,!C0||u!=="touchstart"&&u!=="touchmove"&&u!=="wheel"||(g=!0),h?g!==void 0?o.addEventListener(u,l,{capture:!0,passive:g}):o.addEventListener(u,l,!0):g!==void 0?o.addEventListener(u,l,{passive:g}):o.addEventListener(u,l,!1)}function r2(o,u,l,h,g){var x=h;if((u&1)===0&&(u&2)===0&&h!==null)e:for(;;){if(h===null)return;var k=h.tag;if(k===3||k===4){var $=h.stateNode.containerInfo;if($===g||$.nodeType===8&&$.parentNode===g)break;if(k===4)for(k=h.return;k!==null;){var z=k.tag;if((z===3||z===4)&&(z=k.stateNode.containerInfo,z===g||z.nodeType===8&&z.parentNode===g))return;k=k.return}for(;$!==null;){if(k=za($),k===null)return;if(z=k.tag,z===5||z===6){h=x=k;continue e}$=$.parentNode}}h=h.return}Ab(function(){var ne=x,ie=A0(l),se=[];e:{var oe=b1.get(o);if(oe!==void 0){var he=F0,Be=o;switch(o){case"keypress":if(hp(l)===0)break e;case"keydown":case"keyup":he=VO;break;case"focusin":Be="focus",he=U0;break;case"focusout":Be="blur",he=U0;break;case"beforeblur":case"afterblur":he=U0;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Qb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=RO;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=QO;break;case h1:case v1:case g1:he=EO;break;case y1:he=XO;break;case"scroll":he=kO;break;case"wheel":he=JO;break;case"copy":case"cut":case"paste":he=DO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Xb}var Se=(u&4)!==0,Sn=!Se&&o==="scroll",Z=Se?oe!==null?oe+"Capture":null:oe;Se=[];for(var G=ne,ee;G!==null;){ee=G;var le=ee.stateNode;if(ee.tag===5&&le!==null&&(ee=le,Z!==null&&(le=au(G,Z),le!=null&&Se.push(wu(G,le,ee)))),Sn)break;G=G.return}0<Se.length&&(oe=new he(oe,Be,null,l,ie),se.push({event:oe,listeners:Se}))}}if((u&7)===0){e:{if(oe=o==="mouseover"||o==="pointerover",he=o==="mouseout"||o==="pointerout",oe&&l!==M0&&(Be=l.relatedTarget||l.fromElement)&&(za(Be)||Be[Ar]))break e;if((he||oe)&&(oe=ie.window===ie?ie:(oe=ie.ownerDocument)?oe.defaultView||oe.parentWindow:window,he?(Be=l.relatedTarget||l.toElement,he=ne,Be=Be?za(Be):null,Be!==null&&(Sn=qa(Be),Be!==Sn||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(he=null,Be=ne),he!==Be)){if(Se=Qb,le="onMouseLeave",Z="onMouseEnter",G="mouse",(o==="pointerout"||o==="pointerover")&&(Se=Xb,le="onPointerLeave",Z="onPointerEnter",G="pointer"),Sn=he==null?oe:Eo(he),ee=Be==null?oe:Eo(Be),oe=new Se(le,G+"leave",he,l,ie),oe.target=Sn,oe.relatedTarget=ee,le=null,za(ie)===ne&&(Se=new Se(Z,G+"enter",Be,l,ie),Se.target=ee,Se.relatedTarget=Sn,le=Se),Sn=le,he&&Be)n:{for(Se=he,Z=Be,G=0,ee=Se;ee;ee=Ho(ee))G++;for(ee=0,le=Z;le;le=Ho(le))ee++;for(;0<G-ee;)Se=Ho(Se),G--;for(;0<ee-G;)Z=Ho(Z),ee--;for(;G--;){if(Se===Z||Z!==null&&Se===Z.alternate)break n;Se=Ho(Se),Z=Ho(Z)}Se=null}else Se=null;he!==null&&P1(se,oe,he,Se,!1),Be!==null&&Sn!==null&&P1(se,Sn,Be,Se,!0)}}e:{if(oe=ne?Eo(ne):window,he=oe.nodeName&&oe.nodeName.toLowerCase(),he==="select"||he==="input"&&oe.type==="file")var Ae=iC;else if(r1(oe))if(o1)Ae=lC;else{Ae=sC;var _e=uC}else(he=oe.nodeName)&&he.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(Ae=pC);if(Ae&&(Ae=Ae(o,ne))){a1(se,Ae,l,ie);break e}_e&&_e(o,oe,ne),o==="focusout"&&(_e=oe._wrapperState)&&_e.controlled&&oe.type==="number"&&qe(oe,"number",oe.value)}switch(_e=ne?Eo(ne):window,o){case"focusin":(r1(_e)||_e.contentEditable==="true")&&(No=_e,X0=ne,Iu=null);break;case"focusout":Iu=X0=No=null;break;case"mousedown":Z0=!0;break;case"contextmenu":case"mouseup":case"dragend":Z0=!1,d1(se,l,ie);break;case"selectionchange":if(dC)break;case"keydown":case"keyup":d1(se,l,ie)}var Oe;if(G0)e:{switch(o){case"compositionstart":var He="onCompositionStart";break e;case"compositionend":He="onCompositionEnd";break e;case"compositionupdate":He="onCompositionUpdate";break e}He=void 0}else ko?n1(o,l)&&(He="onCompositionEnd"):o==="keydown"&&l.keyCode===229&&(He="onCompositionStart");He&&(Zb&&l.locale!=="ko"&&(ko||He!=="onCompositionStart"?He==="onCompositionEnd"&&ko&&(Oe=Gb()):(ua=ie,L0="value"in ua?ua.value:ua.textContent,ko=!0)),_e=xp(ne,He),0<_e.length&&(He=new Yb(He,o,null,l,ie),se.push({event:He,listeners:_e}),Oe?He.data=Oe:(Oe=t1(l),Oe!==null&&(He.data=Oe)))),(Oe=nC?tC(o,l):rC(o,l))&&(ne=xp(ne,"onBeforeInput"),0<ne.length&&(ie=new Yb("onBeforeInput","beforeinput",null,l,ie),se.push({event:ie,listeners:ne}),ie.data=Oe))}x1(se,u)})}function wu(o,u,l){return{instance:o,listener:u,currentTarget:l}}function xp(o,u){for(var l=u+"Capture",h=[];o!==null;){var g=o,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=au(o,l),x!=null&&h.unshift(wu(o,x,g)),x=au(o,u),x!=null&&h.push(wu(o,x,g))),o=o.return}return h}function Ho(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function P1(o,u,l,h,g){for(var x=u._reactName,k=[];l!==null&&l!==h;){var $=l,z=$.alternate,ne=$.stateNode;if(z!==null&&z===h)break;$.tag===5&&ne!==null&&($=ne,g?(z=au(l,x),z!=null&&k.unshift(wu(l,z,$))):g||(z=au(l,x),z!=null&&k.push(wu(l,z,$)))),l=l.return}k.length!==0&&o.push({event:u,listeners:k})}var gC=/\r\n?/g,yC=/\u0000|\uFFFD/g;function S1(o){return(typeof o=="string"?o:""+o).replace(gC,`
`).replace(yC,"")}function wp(o,u,l){if(u=S1(u),S1(o)!==u&&l)throw Error(t(425))}function Pp(){}var a2=null,o2=null;function i2(o,u){return o==="textarea"||o==="noscript"||typeof u.children=="string"||typeof u.children=="number"||typeof u.dangerouslySetInnerHTML=="object"&&u.dangerouslySetInnerHTML!==null&&u.dangerouslySetInnerHTML.__html!=null}var u2=typeof setTimeout=="function"?setTimeout:void 0,bC=typeof clearTimeout=="function"?clearTimeout:void 0,W1=typeof Promise=="function"?Promise:void 0,IC=typeof queueMicrotask=="function"?queueMicrotask:typeof W1<"u"?function(o){return W1.resolve(null).then(o).catch(BC)}:u2;function BC(o){setTimeout(function(){throw o})}function s2(o,u){var l=u,h=0;do{var g=l.nextSibling;if(o.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(h===0){o.removeChild(g),du(u);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=g}while(l);du(u)}function pa(o){for(;o!=null;o=o.nextSibling){var u=o.nodeType;if(u===1||u===3)break;if(u===8){if(u=o.data,u==="$"||u==="$!"||u==="$?")break;if(u==="/$")return null}}return o}function M1(o){o=o.previousSibling;for(var u=0;o;){if(o.nodeType===8){var l=o.data;if(l==="$"||l==="$!"||l==="$?"){if(u===0)return o;u--}else l==="/$"&&u++}o=o.previousSibling}return null}var To=Math.random().toString(36).slice(2),dr="__reactFiber$"+To,Pu="__reactProps$"+To,Ar="__reactContainer$"+To,p2="__reactEvents$"+To,xC="__reactListeners$"+To,wC="__reactHandles$"+To;function za(o){var u=o[dr];if(u)return u;for(var l=o.parentNode;l;){if(u=l[Ar]||l[dr]){if(l=u.alternate,u.child!==null||l!==null&&l.child!==null)for(o=M1(o);o!==null;){if(l=o[dr])return l;o=M1(o)}return u}o=l,l=o.parentNode}return null}function Su(o){return o=o[dr]||o[Ar],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function Eo(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(t(33))}function Sp(o){return o[Pu]||null}var l2=[],jo=-1;function la(o){return{current:o}}function sn(o){0>jo||(o.current=l2[jo],l2[jo]=null,jo--)}function tn(o,u){jo++,l2[jo]=o.current,o.current=u}var ca={},Yn=la(ca),ct=la(!1),Ua=ca;function Do(o,u){var l=o.type.contextTypes;if(!l)return ca;var h=o.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===u)return h.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in l)g[x]=u[x];return h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=u,o.__reactInternalMemoizedMaskedChildContext=g),g}function ft(o){return o=o.childContextTypes,o!=null}function Wp(){sn(ct),sn(Yn)}function A1(o,u,l){if(Yn.current!==ca)throw Error(t(168));tn(Yn,u),tn(ct,l)}function _1(o,u,l){var h=o.stateNode;if(u=u.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var g in h)if(!(g in u))throw Error(t(108,ye(o)||"Unknown",g));return X({},l,h)}function Mp(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||ca,Ua=Yn.current,tn(Yn,o),tn(ct,ct.current),!0}function O1(o,u,l){var h=o.stateNode;if(!h)throw Error(t(169));l?(o=_1(o,u,Ua),h.__reactInternalMemoizedMergedChildContext=o,sn(ct),sn(Yn),tn(Yn,o)):sn(ct),tn(ct,l)}var _r=null,Ap=!1,c2=!1;function C1(o){_r===null?_r=[o]:_r.push(o)}function PC(o){Ap=!0,C1(o)}function fa(){if(!c2&&_r!==null){c2=!0;var o=0,u=Ze;try{var l=_r;for(Ze=1;o<l.length;o++){var h=l[o];do h=h(!0);while(h!==null)}_r=null,Ap=!1}catch(g){throw _r!==null&&(_r=_r.slice(o+1)),Nb(N0,fa),g}finally{Ze=u,c2=!1}}return null}var $o=[],Lo=0,_p=null,Op=0,Nt=[],Rt=0,Va=null,Or=1,Cr="";function Ga(o,u){$o[Lo++]=Op,$o[Lo++]=_p,_p=o,Op=u}function k1(o,u,l){Nt[Rt++]=Or,Nt[Rt++]=Cr,Nt[Rt++]=Va,Va=o;var h=Or;o=Cr;var g=32-Xt(h)-1;h&=~(1<<g),l+=1;var x=32-Xt(u)+g;if(30<x){var k=g-g%5;x=(h&(1<<k)-1).toString(32),h>>=k,g-=k,Or=1<<32-Xt(u)+g|l<<g|h,Cr=x+o}else Or=1<<x|l<<g|h,Cr=o}function f2(o){o.return!==null&&(Ga(o,1),k1(o,1,0))}function d2(o){for(;o===_p;)_p=$o[--Lo],$o[Lo]=null,Op=$o[--Lo],$o[Lo]=null;for(;o===Va;)Va=Nt[--Rt],Nt[Rt]=null,Cr=Nt[--Rt],Nt[Rt]=null,Or=Nt[--Rt],Nt[Rt]=null}var It=null,Bt=null,cn=!1,Jt=null;function N1(o,u){var l=jt(5,null,null,0);l.elementType="DELETED",l.stateNode=u,l.return=o,u=o.deletions,u===null?(o.deletions=[l],o.flags|=16):u.push(l)}function R1(o,u){switch(o.tag){case 5:var l=o.type;return u=u.nodeType!==1||l.toLowerCase()!==u.nodeName.toLowerCase()?null:u,u!==null?(o.stateNode=u,It=o,Bt=pa(u.firstChild),!0):!1;case 6:return u=o.pendingProps===""||u.nodeType!==3?null:u,u!==null?(o.stateNode=u,It=o,Bt=null,!0):!1;case 13:return u=u.nodeType!==8?null:u,u!==null?(l=Va!==null?{id:Or,overflow:Cr}:null,o.memoizedState={dehydrated:u,treeContext:l,retryLane:1073741824},l=jt(18,null,null,0),l.stateNode=u,l.return=o,o.child=l,It=o,Bt=null,!0):!1;default:return!1}}function m2(o){return(o.mode&1)!==0&&(o.flags&128)===0}function h2(o){if(cn){var u=Bt;if(u){var l=u;if(!R1(o,u)){if(m2(o))throw Error(t(418));u=pa(l.nextSibling);var h=It;u&&R1(o,u)?N1(h,l):(o.flags=o.flags&-4097|2,cn=!1,It=o)}}else{if(m2(o))throw Error(t(418));o.flags=o.flags&-4097|2,cn=!1,It=o}}}function H1(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;It=o}function Cp(o){if(o!==It)return!1;if(!cn)return H1(o),cn=!0,!1;var u;if((u=o.tag!==3)&&!(u=o.tag!==5)&&(u=o.type,u=u!=="head"&&u!=="body"&&!i2(o.type,o.memoizedProps)),u&&(u=Bt)){if(m2(o))throw T1(),Error(t(418));for(;u;)N1(o,u),u=pa(u.nextSibling)}if(H1(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(t(317));e:{for(o=o.nextSibling,u=0;o;){if(o.nodeType===8){var l=o.data;if(l==="/$"){if(u===0){Bt=pa(o.nextSibling);break e}u--}else l!=="$"&&l!=="$!"&&l!=="$?"||u++}o=o.nextSibling}Bt=null}}else Bt=It?pa(o.stateNode.nextSibling):null;return!0}function T1(){for(var o=Bt;o;)o=pa(o.nextSibling)}function Fo(){Bt=It=null,cn=!1}function v2(o){Jt===null?Jt=[o]:Jt.push(o)}var SC=O.ReactCurrentBatchConfig;function Wu(o,u,l){if(o=l.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,o));var g=h,x=""+o;return u!==null&&u.ref!==null&&typeof u.ref=="function"&&u.ref._stringRef===x?u.ref:(u=function(k){var $=g.refs;k===null?delete $[x]:$[x]=k},u._stringRef=x,u)}if(typeof o!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,o))}return o}function kp(o,u){throw o=Object.prototype.toString.call(u),Error(t(31,o==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":o))}function E1(o){var u=o._init;return u(o._payload)}function j1(o){function u(Z,G){if(o){var ee=Z.deletions;ee===null?(Z.deletions=[G],Z.flags|=16):ee.push(G)}}function l(Z,G){if(!o)return null;for(;G!==null;)u(Z,G),G=G.sibling;return null}function h(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function g(Z,G){return Z=Ia(Z,G),Z.index=0,Z.sibling=null,Z}function x(Z,G,ee){return Z.index=ee,o?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<G?(Z.flags|=2,G):ee):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function k(Z){return o&&Z.alternate===null&&(Z.flags|=2),Z}function $(Z,G,ee,le){return G===null||G.tag!==6?(G=sf(ee,Z.mode,le),G.return=Z,G):(G=g(G,ee),G.return=Z,G)}function z(Z,G,ee,le){var Ae=ee.type;return Ae===N?ie(Z,G,ee.props.children,le,ee.key):G!==null&&(G.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===U&&E1(Ae)===G.type)?(le=g(G,ee.props),le.ref=Wu(Z,G,ee),le.return=Z,le):(le=tl(ee.type,ee.key,ee.props,null,Z.mode,le),le.ref=Wu(Z,G,ee),le.return=Z,le)}function ne(Z,G,ee,le){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=pf(ee,Z.mode,le),G.return=Z,G):(G=g(G,ee.children||[]),G.return=Z,G)}function ie(Z,G,ee,le,Ae){return G===null||G.tag!==7?(G=no(ee,Z.mode,le,Ae),G.return=Z,G):(G=g(G,ee),G.return=Z,G)}function se(Z,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return G=sf(""+G,Z.mode,ee),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case w:return ee=tl(G.type,G.key,G.props,null,Z.mode,ee),ee.ref=Wu(Z,null,G),ee.return=Z,ee;case A:return G=pf(G,Z.mode,ee),G.return=Z,G;case U:var le=G._init;return se(Z,le(G._payload),ee)}if(Ke(G)||Q(G))return G=no(G,Z.mode,ee,null),G.return=Z,G;kp(Z,G)}return null}function oe(Z,G,ee,le){var Ae=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ae!==null?null:$(Z,G,""+ee,le);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return ee.key===Ae?z(Z,G,ee,le):null;case A:return ee.key===Ae?ne(Z,G,ee,le):null;case U:return Ae=ee._init,oe(Z,G,Ae(ee._payload),le)}if(Ke(ee)||Q(ee))return Ae!==null?null:ie(Z,G,ee,le,null);kp(Z,ee)}return null}function he(Z,G,ee,le,Ae){if(typeof le=="string"&&le!==""||typeof le=="number")return Z=Z.get(ee)||null,$(G,Z,""+le,Ae);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case w:return Z=Z.get(le.key===null?ee:le.key)||null,z(G,Z,le,Ae);case A:return Z=Z.get(le.key===null?ee:le.key)||null,ne(G,Z,le,Ae);case U:var _e=le._init;return he(Z,G,ee,_e(le._payload),Ae)}if(Ke(le)||Q(le))return Z=Z.get(ee)||null,ie(G,Z,le,Ae,null);kp(G,le)}return null}function Be(Z,G,ee,le){for(var Ae=null,_e=null,Oe=G,He=G=0,Fn=null;Oe!==null&&He<ee.length;He++){Oe.index>He?(Fn=Oe,Oe=null):Fn=Oe.sibling;var Ue=oe(Z,Oe,ee[He],le);if(Ue===null){Oe===null&&(Oe=Fn);break}o&&Oe&&Ue.alternate===null&&u(Z,Oe),G=x(Ue,G,He),_e===null?Ae=Ue:_e.sibling=Ue,_e=Ue,Oe=Fn}if(He===ee.length)return l(Z,Oe),cn&&Ga(Z,He),Ae;if(Oe===null){for(;He<ee.length;He++)Oe=se(Z,ee[He],le),Oe!==null&&(G=x(Oe,G,He),_e===null?Ae=Oe:_e.sibling=Oe,_e=Oe);return cn&&Ga(Z,He),Ae}for(Oe=h(Z,Oe);He<ee.length;He++)Fn=he(Oe,Z,He,ee[He],le),Fn!==null&&(o&&Fn.alternate!==null&&Oe.delete(Fn.key===null?He:Fn.key),G=x(Fn,G,He),_e===null?Ae=Fn:_e.sibling=Fn,_e=Fn);return o&&Oe.forEach(function(Ba){return u(Z,Ba)}),cn&&Ga(Z,He),Ae}function Se(Z,G,ee,le){var Ae=Q(ee);if(typeof Ae!="function")throw Error(t(150));if(ee=Ae.call(ee),ee==null)throw Error(t(151));for(var _e=Ae=null,Oe=G,He=G=0,Fn=null,Ue=ee.next();Oe!==null&&!Ue.done;He++,Ue=ee.next()){Oe.index>He?(Fn=Oe,Oe=null):Fn=Oe.sibling;var Ba=oe(Z,Oe,Ue.value,le);if(Ba===null){Oe===null&&(Oe=Fn);break}o&&Oe&&Ba.alternate===null&&u(Z,Oe),G=x(Ba,G,He),_e===null?Ae=Ba:_e.sibling=Ba,_e=Ba,Oe=Fn}if(Ue.done)return l(Z,Oe),cn&&Ga(Z,He),Ae;if(Oe===null){for(;!Ue.done;He++,Ue=ee.next())Ue=se(Z,Ue.value,le),Ue!==null&&(G=x(Ue,G,He),_e===null?Ae=Ue:_e.sibling=Ue,_e=Ue);return cn&&Ga(Z,He),Ae}for(Oe=h(Z,Oe);!Ue.done;He++,Ue=ee.next())Ue=he(Oe,Z,He,Ue.value,le),Ue!==null&&(o&&Ue.alternate!==null&&Oe.delete(Ue.key===null?He:Ue.key),G=x(Ue,G,He),_e===null?Ae=Ue:_e.sibling=Ue,_e=Ue);return o&&Oe.forEach(function(a5){return u(Z,a5)}),cn&&Ga(Z,He),Ae}function Sn(Z,G,ee,le){if(typeof ee=="object"&&ee!==null&&ee.type===N&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:e:{for(var Ae=ee.key,_e=G;_e!==null;){if(_e.key===Ae){if(Ae=ee.type,Ae===N){if(_e.tag===7){l(Z,_e.sibling),G=g(_e,ee.props.children),G.return=Z,Z=G;break e}}else if(_e.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===U&&E1(Ae)===_e.type){l(Z,_e.sibling),G=g(_e,ee.props),G.ref=Wu(Z,_e,ee),G.return=Z,Z=G;break e}l(Z,_e);break}else u(Z,_e);_e=_e.sibling}ee.type===N?(G=no(ee.props.children,Z.mode,le,ee.key),G.return=Z,Z=G):(le=tl(ee.type,ee.key,ee.props,null,Z.mode,le),le.ref=Wu(Z,G,ee),le.return=Z,Z=le)}return k(Z);case A:e:{for(_e=ee.key;G!==null;){if(G.key===_e)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){l(Z,G.sibling),G=g(G,ee.children||[]),G.return=Z,Z=G;break e}else{l(Z,G);break}else u(Z,G);G=G.sibling}G=pf(ee,Z.mode,le),G.return=Z,Z=G}return k(Z);case U:return _e=ee._init,Sn(Z,G,_e(ee._payload),le)}if(Ke(ee))return Be(Z,G,ee,le);if(Q(ee))return Se(Z,G,ee,le);kp(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,G!==null&&G.tag===6?(l(Z,G.sibling),G=g(G,ee),G.return=Z,Z=G):(l(Z,G),G=sf(ee,Z.mode,le),G.return=Z,Z=G),k(Z)):l(Z,G)}return Sn}var qo=j1(!0),D1=j1(!1),Np=la(null),Rp=null,zo=null,g2=null;function y2(){g2=zo=Rp=null}function b2(o){var u=Np.current;sn(Np),o._currentValue=u}function I2(o,u,l){for(;o!==null;){var h=o.alternate;if((o.childLanes&u)!==u?(o.childLanes|=u,h!==null&&(h.childLanes|=u)):h!==null&&(h.childLanes&u)!==u&&(h.childLanes|=u),o===l)break;o=o.return}}function Uo(o,u){Rp=o,g2=zo=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&u)!==0&&(dt=!0),o.firstContext=null)}function Ht(o){var u=o._currentValue;if(g2!==o)if(o={context:o,memoizedValue:u,next:null},zo===null){if(Rp===null)throw Error(t(308));zo=o,Rp.dependencies={lanes:0,firstContext:o}}else zo=zo.next=o;return u}var Ka=null;function B2(o){Ka===null?Ka=[o]:Ka.push(o)}function $1(o,u,l,h){var g=u.interleaved;return g===null?(l.next=l,B2(u)):(l.next=g.next,g.next=l),u.interleaved=l,kr(o,h)}function kr(o,u){o.lanes|=u;var l=o.alternate;for(l!==null&&(l.lanes|=u),l=o,o=o.return;o!==null;)o.childLanes|=u,l=o.alternate,l!==null&&(l.childLanes|=u),l=o,o=o.return;return l.tag===3?l.stateNode:null}var da=!1;function x2(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L1(o,u){o=o.updateQueue,u.updateQueue===o&&(u.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Nr(o,u){return{eventTime:o,lane:u,tag:0,payload:null,callback:null,next:null}}function ma(o,u,l){var h=o.updateQueue;if(h===null)return null;if(h=h.shared,(ze&2)!==0){var g=h.pending;return g===null?u.next=u:(u.next=g.next,g.next=u),h.pending=u,kr(o,l)}return g=h.interleaved,g===null?(u.next=u,B2(h)):(u.next=g.next,g.next=u),h.interleaved=u,kr(o,l)}function Hp(o,u,l){if(u=u.updateQueue,u!==null&&(u=u.shared,(l&4194240)!==0)){var h=u.lanes;h&=o.pendingLanes,l|=h,u.lanes=l,T0(o,l)}}function F1(o,u){var l=o.updateQueue,h=o.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var g=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var k={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?g=x=k:x=x.next=k,l=l.next}while(l!==null);x===null?g=x=u:x=x.next=u}else g=x=u;l={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:h.shared,effects:h.effects},o.updateQueue=l;return}o=l.lastBaseUpdate,o===null?l.firstBaseUpdate=u:o.next=u,l.lastBaseUpdate=u}function Tp(o,u,l,h){var g=o.updateQueue;da=!1;var x=g.firstBaseUpdate,k=g.lastBaseUpdate,$=g.shared.pending;if($!==null){g.shared.pending=null;var z=$,ne=z.next;z.next=null,k===null?x=ne:k.next=ne,k=z;var ie=o.alternate;ie!==null&&(ie=ie.updateQueue,$=ie.lastBaseUpdate,$!==k&&($===null?ie.firstBaseUpdate=ne:$.next=ne,ie.lastBaseUpdate=z))}if(x!==null){var se=g.baseState;k=0,ie=ne=z=null,$=x;do{var oe=$.lane,he=$.eventTime;if((h&oe)===oe){ie!==null&&(ie=ie.next={eventTime:he,lane:0,tag:$.tag,payload:$.payload,callback:$.callback,next:null});e:{var Be=o,Se=$;switch(oe=u,he=l,Se.tag){case 1:if(Be=Se.payload,typeof Be=="function"){se=Be.call(he,se,oe);break e}se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Se.payload,oe=typeof Be=="function"?Be.call(he,se,oe):Be,oe==null)break e;se=X({},se,oe);break e;case 2:da=!0}}$.callback!==null&&$.lane!==0&&(o.flags|=64,oe=g.effects,oe===null?g.effects=[$]:oe.push($))}else he={eventTime:he,lane:oe,tag:$.tag,payload:$.payload,callback:$.callback,next:null},ie===null?(ne=ie=he,z=se):ie=ie.next=he,k|=oe;if($=$.next,$===null){if($=g.shared.pending,$===null)break;oe=$,$=oe.next,oe.next=null,g.lastBaseUpdate=oe,g.shared.pending=null}}while(!0);if(ie===null&&(z=se),g.baseState=z,g.firstBaseUpdate=ne,g.lastBaseUpdate=ie,u=g.shared.interleaved,u!==null){g=u;do k|=g.lane,g=g.next;while(g!==u)}else x===null&&(g.shared.lanes=0);Xa|=k,o.lanes=k,o.memoizedState=se}}function q1(o,u,l){if(o=u.effects,u.effects=null,o!==null)for(u=0;u<o.length;u++){var h=o[u],g=h.callback;if(g!==null){if(h.callback=null,h=l,typeof g!="function")throw Error(t(191,g));g.call(h)}}}var Mu={},mr=la(Mu),Au=la(Mu),_u=la(Mu);function Qa(o){if(o===Mu)throw Error(t(174));return o}function w2(o,u){switch(tn(_u,u),tn(Au,o),tn(mr,Mu),o=u.nodeType,o){case 9:case 11:u=(u=u.documentElement)?u.namespaceURI:Dn(null,"");break;default:o=o===8?u.parentNode:u,u=o.namespaceURI||null,o=o.tagName,u=Dn(u,o)}sn(mr),tn(mr,u)}function Vo(){sn(mr),sn(Au),sn(_u)}function z1(o){Qa(_u.current);var u=Qa(mr.current),l=Dn(u,o.type);u!==l&&(tn(Au,o),tn(mr,l))}function P2(o){Au.current===o&&(sn(mr),sn(Au))}var dn=la(0);function Ep(o){for(var u=o;u!==null;){if(u.tag===13){var l=u.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return u}else if(u.tag===19&&u.memoizedProps.revealOrder!==void 0){if((u.flags&128)!==0)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var S2=[];function W2(){for(var o=0;o<S2.length;o++)S2[o]._workInProgressVersionPrimary=null;S2.length=0}var jp=O.ReactCurrentDispatcher,M2=O.ReactCurrentBatchConfig,Ya=0,mn=null,Nn=null,$n=null,Dp=!1,Ou=!1,Cu=0,WC=0;function Xn(){throw Error(t(321))}function A2(o,u){if(u===null)return!1;for(var l=0;l<u.length&&l<o.length;l++)if(!Zt(o[l],u[l]))return!1;return!0}function _2(o,u,l,h,g,x){if(Ya=x,mn=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,jp.current=o===null||o.memoizedState===null?OC:CC,o=l(h,g),Ou){x=0;do{if(Ou=!1,Cu=0,25<=x)throw Error(t(301));x+=1,$n=Nn=null,u.updateQueue=null,jp.current=kC,o=l(h,g)}while(Ou)}if(jp.current=Fp,u=Nn!==null&&Nn.next!==null,Ya=0,$n=Nn=mn=null,Dp=!1,u)throw Error(t(300));return o}function O2(){var o=Cu!==0;return Cu=0,o}function hr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $n===null?mn.memoizedState=$n=o:$n=$n.next=o,$n}function Tt(){if(Nn===null){var o=mn.alternate;o=o!==null?o.memoizedState:null}else o=Nn.next;var u=$n===null?mn.memoizedState:$n.next;if(u!==null)$n=u,Nn=o;else{if(o===null)throw Error(t(310));Nn=o,o={memoizedState:Nn.memoizedState,baseState:Nn.baseState,baseQueue:Nn.baseQueue,queue:Nn.queue,next:null},$n===null?mn.memoizedState=$n=o:$n=$n.next=o}return $n}function ku(o,u){return typeof u=="function"?u(o):u}function C2(o){var u=Tt(),l=u.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=o;var h=Nn,g=h.baseQueue,x=l.pending;if(x!==null){if(g!==null){var k=g.next;g.next=x.next,x.next=k}h.baseQueue=g=x,l.pending=null}if(g!==null){x=g.next,h=h.baseState;var $=k=null,z=null,ne=x;do{var ie=ne.lane;if((Ya&ie)===ie)z!==null&&(z=z.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),h=ne.hasEagerState?ne.eagerState:o(h,ne.action);else{var se={lane:ie,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};z===null?($=z=se,k=h):z=z.next=se,mn.lanes|=ie,Xa|=ie}ne=ne.next}while(ne!==null&&ne!==x);z===null?k=h:z.next=$,Zt(h,u.memoizedState)||(dt=!0),u.memoizedState=h,u.baseState=k,u.baseQueue=z,l.lastRenderedState=h}if(o=l.interleaved,o!==null){g=o;do x=g.lane,mn.lanes|=x,Xa|=x,g=g.next;while(g!==o)}else g===null&&(l.lanes=0);return[u.memoizedState,l.dispatch]}function k2(o){var u=Tt(),l=u.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=o;var h=l.dispatch,g=l.pending,x=u.memoizedState;if(g!==null){l.pending=null;var k=g=g.next;do x=o(x,k.action),k=k.next;while(k!==g);Zt(x,u.memoizedState)||(dt=!0),u.memoizedState=x,u.baseQueue===null&&(u.baseState=x),l.lastRenderedState=x}return[x,h]}function U1(){}function V1(o,u){var l=mn,h=Tt(),g=u(),x=!Zt(h.memoizedState,g);if(x&&(h.memoizedState=g,dt=!0),h=h.queue,N2(Q1.bind(null,l,h,o),[o]),h.getSnapshot!==u||x||$n!==null&&$n.memoizedState.tag&1){if(l.flags|=2048,Nu(9,K1.bind(null,l,h,g,u),void 0,null),Ln===null)throw Error(t(349));(Ya&30)!==0||G1(l,u,g)}return g}function G1(o,u,l){o.flags|=16384,o={getSnapshot:u,value:l},u=mn.updateQueue,u===null?(u={lastEffect:null,stores:null},mn.updateQueue=u,u.stores=[o]):(l=u.stores,l===null?u.stores=[o]:l.push(o))}function K1(o,u,l,h){u.value=l,u.getSnapshot=h,Y1(u)&&X1(o)}function Q1(o,u,l){return l(function(){Y1(u)&&X1(o)})}function Y1(o){var u=o.getSnapshot;o=o.value;try{var l=u();return!Zt(o,l)}catch{return!0}}function X1(o){var u=kr(o,1);u!==null&&rr(u,o,1,-1)}function Z1(o){var u=hr();return typeof o=="function"&&(o=o()),u.memoizedState=u.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ku,lastRenderedState:o},u.queue=o,o=o.dispatch=_C.bind(null,mn,o),[u.memoizedState,o]}function Nu(o,u,l,h){return o={tag:o,create:u,destroy:l,deps:h,next:null},u=mn.updateQueue,u===null?(u={lastEffect:null,stores:null},mn.updateQueue=u,u.lastEffect=o.next=o):(l=u.lastEffect,l===null?u.lastEffect=o.next=o:(h=l.next,l.next=o,o.next=h,u.lastEffect=o)),o}function J1(){return Tt().memoizedState}function $p(o,u,l,h){var g=hr();mn.flags|=o,g.memoizedState=Nu(1|u,l,void 0,h===void 0?null:h)}function Lp(o,u,l,h){var g=Tt();h=h===void 0?null:h;var x=void 0;if(Nn!==null){var k=Nn.memoizedState;if(x=k.destroy,h!==null&&A2(h,k.deps)){g.memoizedState=Nu(u,l,x,h);return}}mn.flags|=o,g.memoizedState=Nu(1|u,l,x,h)}function e6(o,u){return $p(8390656,8,o,u)}function N2(o,u){return Lp(2048,8,o,u)}function n6(o,u){return Lp(4,2,o,u)}function t6(o,u){return Lp(4,4,o,u)}function r6(o,u){if(typeof u=="function")return o=o(),u(o),function(){u(null)};if(u!=null)return o=o(),u.current=o,function(){u.current=null}}function a6(o,u,l){return l=l!=null?l.concat([o]):null,Lp(4,4,r6.bind(null,u,o),l)}function R2(){}function o6(o,u){var l=Tt();u=u===void 0?null:u;var h=l.memoizedState;return h!==null&&u!==null&&A2(u,h[1])?h[0]:(l.memoizedState=[o,u],o)}function i6(o,u){var l=Tt();u=u===void 0?null:u;var h=l.memoizedState;return h!==null&&u!==null&&A2(u,h[1])?h[0]:(o=o(),l.memoizedState=[o,u],o)}function u6(o,u,l){return(Ya&21)===0?(o.baseState&&(o.baseState=!1,dt=!0),o.memoizedState=l):(Zt(l,u)||(l=Eb(),mn.lanes|=l,Xa|=l,o.baseState=!0),u)}function MC(o,u){var l=Ze;Ze=l!==0&&4>l?l:4,o(!0);var h=M2.transition;M2.transition={};try{o(!1),u()}finally{Ze=l,M2.transition=h}}function s6(){return Tt().memoizedState}function AC(o,u,l){var h=ya(o);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},p6(o))l6(u,l);else if(l=$1(o,u,l,h),l!==null){var g=rt();rr(l,o,h,g),c6(l,u,h)}}function _C(o,u,l){var h=ya(o),g={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(p6(o))l6(u,g);else{var x=o.alternate;if(o.lanes===0&&(x===null||x.lanes===0)&&(x=u.lastRenderedReducer,x!==null))try{var k=u.lastRenderedState,$=x(k,l);if(g.hasEagerState=!0,g.eagerState=$,Zt($,k)){var z=u.interleaved;z===null?(g.next=g,B2(u)):(g.next=z.next,z.next=g),u.interleaved=g;return}}catch{}finally{}l=$1(o,u,g,h),l!==null&&(g=rt(),rr(l,o,h,g),c6(l,u,h))}}function p6(o){var u=o.alternate;return o===mn||u!==null&&u===mn}function l6(o,u){Ou=Dp=!0;var l=o.pending;l===null?u.next=u:(u.next=l.next,l.next=u),o.pending=u}function c6(o,u,l){if((l&4194240)!==0){var h=u.lanes;h&=o.pendingLanes,l|=h,u.lanes=l,T0(o,l)}}var Fp={readContext:Ht,useCallback:Xn,useContext:Xn,useEffect:Xn,useImperativeHandle:Xn,useInsertionEffect:Xn,useLayoutEffect:Xn,useMemo:Xn,useReducer:Xn,useRef:Xn,useState:Xn,useDebugValue:Xn,useDeferredValue:Xn,useTransition:Xn,useMutableSource:Xn,useSyncExternalStore:Xn,useId:Xn,unstable_isNewReconciler:!1},OC={readContext:Ht,useCallback:function(o,u){return hr().memoizedState=[o,u===void 0?null:u],o},useContext:Ht,useEffect:e6,useImperativeHandle:function(o,u,l){return l=l!=null?l.concat([o]):null,$p(4194308,4,r6.bind(null,u,o),l)},useLayoutEffect:function(o,u){return $p(4194308,4,o,u)},useInsertionEffect:function(o,u){return $p(4,2,o,u)},useMemo:function(o,u){var l=hr();return u=u===void 0?null:u,o=o(),l.memoizedState=[o,u],o},useReducer:function(o,u,l){var h=hr();return u=l!==void 0?l(u):u,h.memoizedState=h.baseState=u,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:u},h.queue=o,o=o.dispatch=AC.bind(null,mn,o),[h.memoizedState,o]},useRef:function(o){var u=hr();return o={current:o},u.memoizedState=o},useState:Z1,useDebugValue:R2,useDeferredValue:function(o){return hr().memoizedState=o},useTransition:function(){var o=Z1(!1),u=o[0];return o=MC.bind(null,o[1]),hr().memoizedState=o,[u,o]},useMutableSource:function(){},useSyncExternalStore:function(o,u,l){var h=mn,g=hr();if(cn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=u(),Ln===null)throw Error(t(349));(Ya&30)!==0||G1(h,u,l)}g.memoizedState=l;var x={value:l,getSnapshot:u};return g.queue=x,e6(Q1.bind(null,h,x,o),[o]),h.flags|=2048,Nu(9,K1.bind(null,h,x,l,u),void 0,null),l},useId:function(){var o=hr(),u=Ln.identifierPrefix;if(cn){var l=Cr,h=Or;l=(h&~(1<<32-Xt(h)-1)).toString(32)+l,u=":"+u+"R"+l,l=Cu++,0<l&&(u+="H"+l.toString(32)),u+=":"}else l=WC++,u=":"+u+"r"+l.toString(32)+":";return o.memoizedState=u},unstable_isNewReconciler:!1},CC={readContext:Ht,useCallback:o6,useContext:Ht,useEffect:N2,useImperativeHandle:a6,useInsertionEffect:n6,useLayoutEffect:t6,useMemo:i6,useReducer:C2,useRef:J1,useState:function(){return C2(ku)},useDebugValue:R2,useDeferredValue:function(o){var u=Tt();return u6(u,Nn.memoizedState,o)},useTransition:function(){var o=C2(ku)[0],u=Tt().memoizedState;return[o,u]},useMutableSource:U1,useSyncExternalStore:V1,useId:s6,unstable_isNewReconciler:!1},kC={readContext:Ht,useCallback:o6,useContext:Ht,useEffect:N2,useImperativeHandle:a6,useInsertionEffect:n6,useLayoutEffect:t6,useMemo:i6,useReducer:k2,useRef:J1,useState:function(){return k2(ku)},useDebugValue:R2,useDeferredValue:function(o){var u=Tt();return Nn===null?u.memoizedState=o:u6(u,Nn.memoizedState,o)},useTransition:function(){var o=k2(ku)[0],u=Tt().memoizedState;return[o,u]},useMutableSource:U1,useSyncExternalStore:V1,useId:s6,unstable_isNewReconciler:!1};function er(o,u){if(o&&o.defaultProps){u=X({},u),o=o.defaultProps;for(var l in o)u[l]===void 0&&(u[l]=o[l]);return u}return u}function H2(o,u,l,h){u=o.memoizedState,l=l(h,u),l=l==null?u:X({},u,l),o.memoizedState=l,o.lanes===0&&(o.updateQueue.baseState=l)}var qp={isMounted:function(o){return(o=o._reactInternals)?qa(o)===o:!1},enqueueSetState:function(o,u,l){o=o._reactInternals;var h=rt(),g=ya(o),x=Nr(h,g);x.payload=u,l!=null&&(x.callback=l),u=ma(o,x,g),u!==null&&(rr(u,o,g,h),Hp(u,o,g))},enqueueReplaceState:function(o,u,l){o=o._reactInternals;var h=rt(),g=ya(o),x=Nr(h,g);x.tag=1,x.payload=u,l!=null&&(x.callback=l),u=ma(o,x,g),u!==null&&(rr(u,o,g,h),Hp(u,o,g))},enqueueForceUpdate:function(o,u){o=o._reactInternals;var l=rt(),h=ya(o),g=Nr(l,h);g.tag=2,u!=null&&(g.callback=u),u=ma(o,g,h),u!==null&&(rr(u,o,h,l),Hp(u,o,h))}};function f6(o,u,l,h,g,x,k){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(h,x,k):u.prototype&&u.prototype.isPureReactComponent?!bu(l,h)||!bu(g,x):!0}function d6(o,u,l){var h=!1,g=ca,x=u.contextType;return typeof x=="object"&&x!==null?x=Ht(x):(g=ft(u)?Ua:Yn.current,h=u.contextTypes,x=(h=h!=null)?Do(o,g):ca),u=new u(l,x),o.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=qp,o.stateNode=u,u._reactInternals=o,h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=g,o.__reactInternalMemoizedMaskedChildContext=x),u}function m6(o,u,l,h){o=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(l,h),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(l,h),u.state!==o&&qp.enqueueReplaceState(u,u.state,null)}function T2(o,u,l,h){var g=o.stateNode;g.props=l,g.state=o.memoizedState,g.refs={},x2(o);var x=u.contextType;typeof x=="object"&&x!==null?g.context=Ht(x):(x=ft(u)?Ua:Yn.current,g.context=Do(o,x)),g.state=o.memoizedState,x=u.getDerivedStateFromProps,typeof x=="function"&&(H2(o,u,x,l),g.state=o.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(u=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),u!==g.state&&qp.enqueueReplaceState(g,g.state,null),Tp(o,l,g,h),g.state=o.memoizedState),typeof g.componentDidMount=="function"&&(o.flags|=4194308)}function Go(o,u){try{var l="",h=u;do l+=me(h),h=h.return;while(h);var g=l}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:o,source:u,stack:g,digest:null}}function E2(o,u,l){return{value:o,source:null,stack:l??null,digest:u??null}}function j2(o,u){try{console.error(u.value)}catch(l){setTimeout(function(){throw l})}}var NC=typeof WeakMap=="function"?WeakMap:Map;function h6(o,u,l){l=Nr(-1,l),l.tag=3,l.payload={element:null};var h=u.value;return l.callback=function(){Yp||(Yp=!0,J2=h),j2(o,u)},l}function v6(o,u,l){l=Nr(-1,l),l.tag=3;var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var g=u.value;l.payload=function(){return h(g)},l.callback=function(){j2(o,u)}}var x=o.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){j2(o,u),typeof h!="function"&&(va===null?va=new Set([this]):va.add(this));var k=u.stack;this.componentDidCatch(u.value,{componentStack:k!==null?k:""})}),l}function g6(o,u,l){var h=o.pingCache;if(h===null){h=o.pingCache=new NC;var g=new Set;h.set(u,g)}else g=h.get(u),g===void 0&&(g=new Set,h.set(u,g));g.has(l)||(g.add(l),o=GC.bind(null,o,u,l),u.then(o,o))}function y6(o){do{var u;if((u=o.tag===13)&&(u=o.memoizedState,u=u!==null?u.dehydrated!==null:!0),u)return o;o=o.return}while(o!==null);return null}function b6(o,u,l,h,g){return(o.mode&1)===0?(o===u?o.flags|=65536:(o.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(u=Nr(-1,1),u.tag=2,ma(l,u,1))),l.lanes|=1),o):(o.flags|=65536,o.lanes=g,o)}var RC=O.ReactCurrentOwner,dt=!1;function tt(o,u,l,h){u.child=o===null?D1(u,null,l,h):qo(u,o.child,l,h)}function I6(o,u,l,h,g){l=l.render;var x=u.ref;return Uo(u,g),h=_2(o,u,l,h,x,g),l=O2(),o!==null&&!dt?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Rr(o,u,g)):(cn&&l&&f2(u),u.flags|=1,tt(o,u,h,g),u.child)}function B6(o,u,l,h,g){if(o===null){var x=l.type;return typeof x=="function"&&!uf(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(u.tag=15,u.type=x,x6(o,u,x,h,g)):(o=tl(l.type,null,h,u,u.mode,g),o.ref=u.ref,o.return=u,u.child=o)}if(x=o.child,(o.lanes&g)===0){var k=x.memoizedProps;if(l=l.compare,l=l!==null?l:bu,l(k,h)&&o.ref===u.ref)return Rr(o,u,g)}return u.flags|=1,o=Ia(x,h),o.ref=u.ref,o.return=u,u.child=o}function x6(o,u,l,h,g){if(o!==null){var x=o.memoizedProps;if(bu(x,h)&&o.ref===u.ref)if(dt=!1,u.pendingProps=h=x,(o.lanes&g)!==0)(o.flags&131072)!==0&&(dt=!0);else return u.lanes=o.lanes,Rr(o,u,g)}return D2(o,u,l,h,g)}function w6(o,u,l){var h=u.pendingProps,g=h.children,x=o!==null?o.memoizedState:null;if(h.mode==="hidden")if((u.mode&1)===0)u.memoizedState={baseLanes:0,cachePool:null,transitions:null},tn(Qo,xt),xt|=l;else{if((l&1073741824)===0)return o=x!==null?x.baseLanes|l:l,u.lanes=u.childLanes=1073741824,u.memoizedState={baseLanes:o,cachePool:null,transitions:null},u.updateQueue=null,tn(Qo,xt),xt|=o,null;u.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=x!==null?x.baseLanes:l,tn(Qo,xt),xt|=h}else x!==null?(h=x.baseLanes|l,u.memoizedState=null):h=l,tn(Qo,xt),xt|=h;return tt(o,u,g,l),u.child}function P6(o,u){var l=u.ref;(o===null&&l!==null||o!==null&&o.ref!==l)&&(u.flags|=512,u.flags|=2097152)}function D2(o,u,l,h,g){var x=ft(l)?Ua:Yn.current;return x=Do(u,x),Uo(u,g),l=_2(o,u,l,h,x,g),h=O2(),o!==null&&!dt?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Rr(o,u,g)):(cn&&h&&f2(u),u.flags|=1,tt(o,u,l,g),u.child)}function S6(o,u,l,h,g){if(ft(l)){var x=!0;Mp(u)}else x=!1;if(Uo(u,g),u.stateNode===null)Up(o,u),d6(u,l,h),T2(u,l,h,g),h=!0;else if(o===null){var k=u.stateNode,$=u.memoizedProps;k.props=$;var z=k.context,ne=l.contextType;typeof ne=="object"&&ne!==null?ne=Ht(ne):(ne=ft(l)?Ua:Yn.current,ne=Do(u,ne));var ie=l.getDerivedStateFromProps,se=typeof ie=="function"||typeof k.getSnapshotBeforeUpdate=="function";se||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||($!==h||z!==ne)&&m6(u,k,h,ne),da=!1;var oe=u.memoizedState;k.state=oe,Tp(u,h,k,g),z=u.memoizedState,$!==h||oe!==z||ct.current||da?(typeof ie=="function"&&(H2(u,l,ie,h),z=u.memoizedState),($=da||f6(u,l,$,h,oe,z,ne))?(se||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(u.flags|=4194308)):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=h,u.memoizedState=z),k.props=h,k.state=z,k.context=ne,h=$):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),h=!1)}else{k=u.stateNode,L1(o,u),$=u.memoizedProps,ne=u.type===u.elementType?$:er(u.type,$),k.props=ne,se=u.pendingProps,oe=k.context,z=l.contextType,typeof z=="object"&&z!==null?z=Ht(z):(z=ft(l)?Ua:Yn.current,z=Do(u,z));var he=l.getDerivedStateFromProps;(ie=typeof he=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||($!==se||oe!==z)&&m6(u,k,h,z),da=!1,oe=u.memoizedState,k.state=oe,Tp(u,h,k,g);var Be=u.memoizedState;$!==se||oe!==Be||ct.current||da?(typeof he=="function"&&(H2(u,l,he,h),Be=u.memoizedState),(ne=da||f6(u,l,ne,h,oe,Be,z)||!1)?(ie||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(h,Be,z),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(h,Be,z)),typeof k.componentDidUpdate=="function"&&(u.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof k.componentDidUpdate!="function"||$===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||$===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),u.memoizedProps=h,u.memoizedState=Be),k.props=h,k.state=Be,k.context=z,h=ne):(typeof k.componentDidUpdate!="function"||$===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||$===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),h=!1)}return $2(o,u,l,h,x,g)}function $2(o,u,l,h,g,x){P6(o,u);var k=(u.flags&128)!==0;if(!h&&!k)return g&&O1(u,l,!1),Rr(o,u,x);h=u.stateNode,RC.current=u;var $=k&&typeof l.getDerivedStateFromError!="function"?null:h.render();return u.flags|=1,o!==null&&k?(u.child=qo(u,o.child,null,x),u.child=qo(u,null,$,x)):tt(o,u,$,x),u.memoizedState=h.state,g&&O1(u,l,!0),u.child}function W6(o){var u=o.stateNode;u.pendingContext?A1(o,u.pendingContext,u.pendingContext!==u.context):u.context&&A1(o,u.context,!1),w2(o,u.containerInfo)}function M6(o,u,l,h,g){return Fo(),v2(g),u.flags|=256,tt(o,u,l,h),u.child}var L2={dehydrated:null,treeContext:null,retryLane:0};function F2(o){return{baseLanes:o,cachePool:null,transitions:null}}function A6(o,u,l){var h=u.pendingProps,g=dn.current,x=!1,k=(u.flags&128)!==0,$;if(($=k)||($=o!==null&&o.memoizedState===null?!1:(g&2)!==0),$?(x=!0,u.flags&=-129):(o===null||o.memoizedState!==null)&&(g|=1),tn(dn,g&1),o===null)return h2(u),o=u.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((u.mode&1)===0?u.lanes=1:o.data==="$!"?u.lanes=8:u.lanes=1073741824,null):(k=h.children,o=h.fallback,x?(h=u.mode,x=u.child,k={mode:"hidden",children:k},(h&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=k):x=rl(k,h,0,null),o=no(o,h,l,null),x.return=u,o.return=u,x.sibling=o,u.child=x,u.child.memoizedState=F2(l),u.memoizedState=L2,o):q2(u,k));if(g=o.memoizedState,g!==null&&($=g.dehydrated,$!==null))return HC(o,u,k,h,$,g,l);if(x){x=h.fallback,k=u.mode,g=o.child,$=g.sibling;var z={mode:"hidden",children:h.children};return(k&1)===0&&u.child!==g?(h=u.child,h.childLanes=0,h.pendingProps=z,u.deletions=null):(h=Ia(g,z),h.subtreeFlags=g.subtreeFlags&14680064),$!==null?x=Ia($,x):(x=no(x,k,l,null),x.flags|=2),x.return=u,h.return=u,h.sibling=x,u.child=h,h=x,x=u.child,k=o.child.memoizedState,k=k===null?F2(l):{baseLanes:k.baseLanes|l,cachePool:null,transitions:k.transitions},x.memoizedState=k,x.childLanes=o.childLanes&~l,u.memoizedState=L2,h}return x=o.child,o=x.sibling,h=Ia(x,{mode:"visible",children:h.children}),(u.mode&1)===0&&(h.lanes=l),h.return=u,h.sibling=null,o!==null&&(l=u.deletions,l===null?(u.deletions=[o],u.flags|=16):l.push(o)),u.child=h,u.memoizedState=null,h}function q2(o,u){return u=rl({mode:"visible",children:u},o.mode,0,null),u.return=o,o.child=u}function zp(o,u,l,h){return h!==null&&v2(h),qo(u,o.child,null,l),o=q2(u,u.pendingProps.children),o.flags|=2,u.memoizedState=null,o}function HC(o,u,l,h,g,x,k){if(l)return u.flags&256?(u.flags&=-257,h=E2(Error(t(422))),zp(o,u,k,h)):u.memoizedState!==null?(u.child=o.child,u.flags|=128,null):(x=h.fallback,g=u.mode,h=rl({mode:"visible",children:h.children},g,0,null),x=no(x,g,k,null),x.flags|=2,h.return=u,x.return=u,h.sibling=x,u.child=h,(u.mode&1)!==0&&qo(u,o.child,null,k),u.child.memoizedState=F2(k),u.memoizedState=L2,x);if((u.mode&1)===0)return zp(o,u,k,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var $=h.dgst;return h=$,x=Error(t(419)),h=E2(x,h,void 0),zp(o,u,k,h)}if($=(k&o.childLanes)!==0,dt||$){if(h=Ln,h!==null){switch(k&-k){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|k))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,kr(o,g),rr(h,o,g,-1))}return of(),h=E2(Error(t(421))),zp(o,u,k,h)}return g.data==="$?"?(u.flags|=128,u.child=o.child,u=KC.bind(null,o),g._reactRetry=u,null):(o=x.treeContext,Bt=pa(g.nextSibling),It=u,cn=!0,Jt=null,o!==null&&(Nt[Rt++]=Or,Nt[Rt++]=Cr,Nt[Rt++]=Va,Or=o.id,Cr=o.overflow,Va=u),u=q2(u,h.children),u.flags|=4096,u)}function _6(o,u,l){o.lanes|=u;var h=o.alternate;h!==null&&(h.lanes|=u),I2(o.return,u,l)}function z2(o,u,l,h,g){var x=o.memoizedState;x===null?o.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:g}:(x.isBackwards=u,x.rendering=null,x.renderingStartTime=0,x.last=h,x.tail=l,x.tailMode=g)}function O6(o,u,l){var h=u.pendingProps,g=h.revealOrder,x=h.tail;if(tt(o,u,h.children,l),h=dn.current,(h&2)!==0)h=h&1|2,u.flags|=128;else{if(o!==null&&(o.flags&128)!==0)e:for(o=u.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&_6(o,l,u);else if(o.tag===19)_6(o,l,u);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===u)break e;for(;o.sibling===null;){if(o.return===null||o.return===u)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}h&=1}if(tn(dn,h),(u.mode&1)===0)u.memoizedState=null;else switch(g){case"forwards":for(l=u.child,g=null;l!==null;)o=l.alternate,o!==null&&Ep(o)===null&&(g=l),l=l.sibling;l=g,l===null?(g=u.child,u.child=null):(g=l.sibling,l.sibling=null),z2(u,!1,g,l,x);break;case"backwards":for(l=null,g=u.child,u.child=null;g!==null;){if(o=g.alternate,o!==null&&Ep(o)===null){u.child=g;break}o=g.sibling,g.sibling=l,l=g,g=o}z2(u,!0,l,null,x);break;case"together":z2(u,!1,null,null,void 0);break;default:u.memoizedState=null}return u.child}function Up(o,u){(u.mode&1)===0&&o!==null&&(o.alternate=null,u.alternate=null,u.flags|=2)}function Rr(o,u,l){if(o!==null&&(u.dependencies=o.dependencies),Xa|=u.lanes,(l&u.childLanes)===0)return null;if(o!==null&&u.child!==o.child)throw Error(t(153));if(u.child!==null){for(o=u.child,l=Ia(o,o.pendingProps),u.child=l,l.return=u;o.sibling!==null;)o=o.sibling,l=l.sibling=Ia(o,o.pendingProps),l.return=u;l.sibling=null}return u.child}function TC(o,u,l){switch(u.tag){case 3:W6(u),Fo();break;case 5:z1(u);break;case 1:ft(u.type)&&Mp(u);break;case 4:w2(u,u.stateNode.containerInfo);break;case 10:var h=u.type._context,g=u.memoizedProps.value;tn(Np,h._currentValue),h._currentValue=g;break;case 13:if(h=u.memoizedState,h!==null)return h.dehydrated!==null?(tn(dn,dn.current&1),u.flags|=128,null):(l&u.child.childLanes)!==0?A6(o,u,l):(tn(dn,dn.current&1),o=Rr(o,u,l),o!==null?o.sibling:null);tn(dn,dn.current&1);break;case 19:if(h=(l&u.childLanes)!==0,(o.flags&128)!==0){if(h)return O6(o,u,l);u.flags|=128}if(g=u.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),tn(dn,dn.current),h)break;return null;case 22:case 23:return u.lanes=0,w6(o,u,l)}return Rr(o,u,l)}var C6,U2,k6,N6;C6=function(o,u){for(var l=u.child;l!==null;){if(l.tag===5||l.tag===6)o.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===u)break;for(;l.sibling===null;){if(l.return===null||l.return===u)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},U2=function(){},k6=function(o,u,l,h){var g=o.memoizedProps;if(g!==h){o=u.stateNode,Qa(mr.current);var x=null;switch(l){case"input":g=Pe(o,g),h=Pe(o,h),x=[];break;case"select":g=X({},g,{value:void 0}),h=X({},h,{value:void 0}),x=[];break;case"textarea":g=gn(o,g),h=gn(o,h),x=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(o.onclick=Pp)}S0(l,h);var k;l=null;for(ne in g)if(!h.hasOwnProperty(ne)&&g.hasOwnProperty(ne)&&g[ne]!=null)if(ne==="style"){var $=g[ne];for(k in $)$.hasOwnProperty(k)&&(l||(l={}),l[k]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?x||(x=[]):(x=x||[]).push(ne,null));for(ne in h){var z=h[ne];if($=g!=null?g[ne]:void 0,h.hasOwnProperty(ne)&&z!==$&&(z!=null||$!=null))if(ne==="style")if($){for(k in $)!$.hasOwnProperty(k)||z&&z.hasOwnProperty(k)||(l||(l={}),l[k]="");for(k in z)z.hasOwnProperty(k)&&$[k]!==z[k]&&(l||(l={}),l[k]=z[k])}else l||(x||(x=[]),x.push(ne,l)),l=z;else ne==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,$=$?$.__html:void 0,z!=null&&$!==z&&(x=x||[]).push(ne,z)):ne==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(ne,""+z):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(z!=null&&ne==="onScroll"&&un("scroll",o),x||$===z||(x=[])):(x=x||[]).push(ne,z))}l&&(x=x||[]).push("style",l);var ne=x;(u.updateQueue=ne)&&(u.flags|=4)}},N6=function(o,u,l,h){l!==h&&(u.flags|=4)};function Ru(o,u){if(!cn)switch(o.tailMode){case"hidden":u=o.tail;for(var l=null;u!==null;)u.alternate!==null&&(l=u),u=u.sibling;l===null?o.tail=null:l.sibling=null;break;case"collapsed":l=o.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?u||o.tail===null?o.tail=null:o.tail.sibling=null:h.sibling=null}}function Zn(o){var u=o.alternate!==null&&o.alternate.child===o.child,l=0,h=0;if(u)for(var g=o.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=o,g=g.sibling;else for(g=o.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=o,g=g.sibling;return o.subtreeFlags|=h,o.childLanes=l,u}function EC(o,u,l){var h=u.pendingProps;switch(d2(u),u.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zn(u),null;case 1:return ft(u.type)&&Wp(),Zn(u),null;case 3:return h=u.stateNode,Vo(),sn(ct),sn(Yn),W2(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(o===null||o.child===null)&&(Cp(u)?u.flags|=4:o===null||o.memoizedState.isDehydrated&&(u.flags&256)===0||(u.flags|=1024,Jt!==null&&(tf(Jt),Jt=null))),U2(o,u),Zn(u),null;case 5:P2(u);var g=Qa(_u.current);if(l=u.type,o!==null&&u.stateNode!=null)k6(o,u,l,h,g),o.ref!==u.ref&&(u.flags|=512,u.flags|=2097152);else{if(!h){if(u.stateNode===null)throw Error(t(166));return Zn(u),null}if(o=Qa(mr.current),Cp(u)){h=u.stateNode,l=u.type;var x=u.memoizedProps;switch(h[dr]=u,h[Pu]=x,o=(u.mode&1)!==0,l){case"dialog":un("cancel",h),un("close",h);break;case"iframe":case"object":case"embed":un("load",h);break;case"video":case"audio":for(g=0;g<Bu.length;g++)un(Bu[g],h);break;case"source":un("error",h);break;case"img":case"image":case"link":un("error",h),un("load",h);break;case"details":un("toggle",h);break;case"input":Ce(h,x),un("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!x.multiple},un("invalid",h);break;case"textarea":Ot(h,x),un("invalid",h)}S0(l,x),g=null;for(var k in x)if(x.hasOwnProperty(k)){var $=x[k];k==="children"?typeof $=="string"?h.textContent!==$&&(x.suppressHydrationWarning!==!0&&wp(h.textContent,$,o),g=["children",$]):typeof $=="number"&&h.textContent!==""+$&&(x.suppressHydrationWarning!==!0&&wp(h.textContent,$,o),g=["children",""+$]):a.hasOwnProperty(k)&&$!=null&&k==="onScroll"&&un("scroll",h)}switch(l){case"input":ce(h),je(h,x,!0);break;case"textarea":ce(h),Qn(h);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(h.onclick=Pp)}h=g,u.updateQueue=h,h!==null&&(u.flags|=4)}else{k=g.nodeType===9?g:g.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=wn(l)),o==="http://www.w3.org/1999/xhtml"?l==="script"?(o=k.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof h.is=="string"?o=k.createElement(l,{is:h.is}):(o=k.createElement(l),l==="select"&&(k=o,h.multiple?k.multiple=!0:h.size&&(k.size=h.size))):o=k.createElementNS(o,l),o[dr]=u,o[Pu]=h,C6(o,u,!1,!1),u.stateNode=o;e:{switch(k=W0(l,h),l){case"dialog":un("cancel",o),un("close",o),g=h;break;case"iframe":case"object":case"embed":un("load",o),g=h;break;case"video":case"audio":for(g=0;g<Bu.length;g++)un(Bu[g],o);g=h;break;case"source":un("error",o),g=h;break;case"img":case"image":case"link":un("error",o),un("load",o),g=h;break;case"details":un("toggle",o),g=h;break;case"input":Ce(o,h),g=Pe(o,h),un("invalid",o);break;case"option":g=h;break;case"select":o._wrapperState={wasMultiple:!!h.multiple},g=X({},h,{value:void 0}),un("invalid",o);break;case"textarea":Ot(o,h),g=gn(o,h),un("invalid",o);break;default:g=h}S0(l,g),$=g;for(x in $)if($.hasOwnProperty(x)){var z=$[x];x==="style"?ru(o,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Mo(o,z)):x==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&na(o,z):typeof z=="number"&&na(o,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?z!=null&&x==="onScroll"&&un("scroll",o):z!=null&&M(o,x,z,k))}switch(l){case"input":ce(o),je(o,h,!1);break;case"textarea":ce(o),Qn(o);break;case"option":h.value!=null&&o.setAttribute("value",""+fe(h.value));break;case"select":o.multiple=!!h.multiple,x=h.value,x!=null?xn(o,!!h.multiple,x,!1):h.defaultValue!=null&&xn(o,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(o.onclick=Pp)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(u.flags|=4)}u.ref!==null&&(u.flags|=512,u.flags|=2097152)}return Zn(u),null;case 6:if(o&&u.stateNode!=null)N6(o,u,o.memoizedProps,h);else{if(typeof h!="string"&&u.stateNode===null)throw Error(t(166));if(l=Qa(_u.current),Qa(mr.current),Cp(u)){if(h=u.stateNode,l=u.memoizedProps,h[dr]=u,(x=h.nodeValue!==l)&&(o=It,o!==null))switch(o.tag){case 3:wp(h.nodeValue,l,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&wp(h.nodeValue,l,(o.mode&1)!==0)}x&&(u.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[dr]=u,u.stateNode=h}return Zn(u),null;case 13:if(sn(dn),h=u.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(cn&&Bt!==null&&(u.mode&1)!==0&&(u.flags&128)===0)T1(),Fo(),u.flags|=98560,x=!1;else if(x=Cp(u),h!==null&&h.dehydrated!==null){if(o===null){if(!x)throw Error(t(318));if(x=u.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[dr]=u}else Fo(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;Zn(u),x=!1}else Jt!==null&&(tf(Jt),Jt=null),x=!0;if(!x)return u.flags&65536?u:null}return(u.flags&128)!==0?(u.lanes=l,u):(h=h!==null,h!==(o!==null&&o.memoizedState!==null)&&h&&(u.child.flags|=8192,(u.mode&1)!==0&&(o===null||(dn.current&1)!==0?Rn===0&&(Rn=3):of())),u.updateQueue!==null&&(u.flags|=4),Zn(u),null);case 4:return Vo(),U2(o,u),o===null&&xu(u.stateNode.containerInfo),Zn(u),null;case 10:return b2(u.type._context),Zn(u),null;case 17:return ft(u.type)&&Wp(),Zn(u),null;case 19:if(sn(dn),x=u.memoizedState,x===null)return Zn(u),null;if(h=(u.flags&128)!==0,k=x.rendering,k===null)if(h)Ru(x,!1);else{if(Rn!==0||o!==null&&(o.flags&128)!==0)for(o=u.child;o!==null;){if(k=Ep(o),k!==null){for(u.flags|=128,Ru(x,!1),h=k.updateQueue,h!==null&&(u.updateQueue=h,u.flags|=4),u.subtreeFlags=0,h=l,l=u.child;l!==null;)x=l,o=h,x.flags&=14680066,k=x.alternate,k===null?(x.childLanes=0,x.lanes=o,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=k.childLanes,x.lanes=k.lanes,x.child=k.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=k.memoizedProps,x.memoizedState=k.memoizedState,x.updateQueue=k.updateQueue,x.type=k.type,o=k.dependencies,x.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),l=l.sibling;return tn(dn,dn.current&1|2),u.child}o=o.sibling}x.tail!==null&&Pn()>Yo&&(u.flags|=128,h=!0,Ru(x,!1),u.lanes=4194304)}else{if(!h)if(o=Ep(k),o!==null){if(u.flags|=128,h=!0,l=o.updateQueue,l!==null&&(u.updateQueue=l,u.flags|=4),Ru(x,!0),x.tail===null&&x.tailMode==="hidden"&&!k.alternate&&!cn)return Zn(u),null}else 2*Pn()-x.renderingStartTime>Yo&&l!==1073741824&&(u.flags|=128,h=!0,Ru(x,!1),u.lanes=4194304);x.isBackwards?(k.sibling=u.child,u.child=k):(l=x.last,l!==null?l.sibling=k:u.child=k,x.last=k)}return x.tail!==null?(u=x.tail,x.rendering=u,x.tail=u.sibling,x.renderingStartTime=Pn(),u.sibling=null,l=dn.current,tn(dn,h?l&1|2:l&1),u):(Zn(u),null);case 22:case 23:return af(),h=u.memoizedState!==null,o!==null&&o.memoizedState!==null!==h&&(u.flags|=8192),h&&(u.mode&1)!==0?(xt&1073741824)!==0&&(Zn(u),u.subtreeFlags&6&&(u.flags|=8192)):Zn(u),null;case 24:return null;case 25:return null}throw Error(t(156,u.tag))}function jC(o,u){switch(d2(u),u.tag){case 1:return ft(u.type)&&Wp(),o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 3:return Vo(),sn(ct),sn(Yn),W2(),o=u.flags,(o&65536)!==0&&(o&128)===0?(u.flags=o&-65537|128,u):null;case 5:return P2(u),null;case 13:if(sn(dn),o=u.memoizedState,o!==null&&o.dehydrated!==null){if(u.alternate===null)throw Error(t(340));Fo()}return o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 19:return sn(dn),null;case 4:return Vo(),null;case 10:return b2(u.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Vp=!1,Jn=!1,DC=typeof WeakSet=="function"?WeakSet:Set,be=null;function Ko(o,u){var l=o.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){bn(o,u,h)}else l.current=null}function V2(o,u,l){try{l()}catch(h){bn(o,u,h)}}var R6=!1;function $C(o,u){if(a2=fp,o=f1(),Y0(o)){if("selectionStart"in o)var l={start:o.selectionStart,end:o.selectionEnd};else e:{l=(l=o.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var g=h.anchorOffset,x=h.focusNode;h=h.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var k=0,$=-1,z=-1,ne=0,ie=0,se=o,oe=null;n:for(;;){for(var he;se!==l||g!==0&&se.nodeType!==3||($=k+g),se!==x||h!==0&&se.nodeType!==3||(z=k+h),se.nodeType===3&&(k+=se.nodeValue.length),(he=se.firstChild)!==null;)oe=se,se=he;for(;;){if(se===o)break n;if(oe===l&&++ne===g&&($=k),oe===x&&++ie===h&&(z=k),(he=se.nextSibling)!==null)break;se=oe,oe=se.parentNode}se=he}l=$===-1||z===-1?null:{start:$,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(o2={focusedElem:o,selectionRange:l},fp=!1,be=u;be!==null;)if(u=be,o=u.child,(u.subtreeFlags&1028)!==0&&o!==null)o.return=u,be=o;else for(;be!==null;){u=be;try{var Be=u.alternate;if((u.flags&1024)!==0)switch(u.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Se=Be.memoizedProps,Sn=Be.memoizedState,Z=u.stateNode,G=Z.getSnapshotBeforeUpdate(u.elementType===u.type?Se:er(u.type,Se),Sn);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ee=u.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(le){bn(u,u.return,le)}if(o=u.sibling,o!==null){o.return=u.return,be=o;break}be=u.return}return Be=R6,R6=!1,Be}function Hu(o,u,l){var h=u.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&o)===o){var x=g.destroy;g.destroy=void 0,x!==void 0&&V2(u,l,x)}g=g.next}while(g!==h)}}function Gp(o,u){if(u=u.updateQueue,u=u!==null?u.lastEffect:null,u!==null){var l=u=u.next;do{if((l.tag&o)===o){var h=l.create;l.destroy=h()}l=l.next}while(l!==u)}}function G2(o){var u=o.ref;if(u!==null){var l=o.stateNode;switch(o.tag){case 5:o=l;break;default:o=l}typeof u=="function"?u(o):u.current=o}}function H6(o){var u=o.alternate;u!==null&&(o.alternate=null,H6(u)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(u=o.stateNode,u!==null&&(delete u[dr],delete u[Pu],delete u[p2],delete u[xC],delete u[wC])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function T6(o){return o.tag===5||o.tag===3||o.tag===4}function E6(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||T6(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function K2(o,u,l){var h=o.tag;if(h===5||h===6)o=o.stateNode,u?l.nodeType===8?l.parentNode.insertBefore(o,u):l.insertBefore(o,u):(l.nodeType===8?(u=l.parentNode,u.insertBefore(o,l)):(u=l,u.appendChild(o)),l=l._reactRootContainer,l!=null||u.onclick!==null||(u.onclick=Pp));else if(h!==4&&(o=o.child,o!==null))for(K2(o,u,l),o=o.sibling;o!==null;)K2(o,u,l),o=o.sibling}function Q2(o,u,l){var h=o.tag;if(h===5||h===6)o=o.stateNode,u?l.insertBefore(o,u):l.appendChild(o);else if(h!==4&&(o=o.child,o!==null))for(Q2(o,u,l),o=o.sibling;o!==null;)Q2(o,u,l),o=o.sibling}var Vn=null,nr=!1;function ha(o,u,l){for(l=l.child;l!==null;)j6(o,u,l),l=l.sibling}function j6(o,u,l){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(ip,l)}catch{}switch(l.tag){case 5:Jn||Ko(l,u);case 6:var h=Vn,g=nr;Vn=null,ha(o,u,l),Vn=h,nr=g,Vn!==null&&(nr?(o=Vn,l=l.stateNode,o.nodeType===8?o.parentNode.removeChild(l):o.removeChild(l)):Vn.removeChild(l.stateNode));break;case 18:Vn!==null&&(nr?(o=Vn,l=l.stateNode,o.nodeType===8?s2(o.parentNode,l):o.nodeType===1&&s2(o,l),du(o)):s2(Vn,l.stateNode));break;case 4:h=Vn,g=nr,Vn=l.stateNode.containerInfo,nr=!0,ha(o,u,l),Vn=h,nr=g;break;case 0:case 11:case 14:case 15:if(!Jn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var x=g,k=x.destroy;x=x.tag,k!==void 0&&((x&2)!==0||(x&4)!==0)&&V2(l,u,k),g=g.next}while(g!==h)}ha(o,u,l);break;case 1:if(!Jn&&(Ko(l,u),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch($){bn(l,u,$)}ha(o,u,l);break;case 21:ha(o,u,l);break;case 22:l.mode&1?(Jn=(h=Jn)||l.memoizedState!==null,ha(o,u,l),Jn=h):ha(o,u,l);break;default:ha(o,u,l)}}function D6(o){var u=o.updateQueue;if(u!==null){o.updateQueue=null;var l=o.stateNode;l===null&&(l=o.stateNode=new DC),u.forEach(function(h){var g=QC.bind(null,o,h);l.has(h)||(l.add(h),h.then(g,g))})}}function tr(o,u){var l=u.deletions;if(l!==null)for(var h=0;h<l.length;h++){var g=l[h];try{var x=o,k=u,$=k;e:for(;$!==null;){switch($.tag){case 5:Vn=$.stateNode,nr=!1;break e;case 3:Vn=$.stateNode.containerInfo,nr=!0;break e;case 4:Vn=$.stateNode.containerInfo,nr=!0;break e}$=$.return}if(Vn===null)throw Error(t(160));j6(x,k,g),Vn=null,nr=!1;var z=g.alternate;z!==null&&(z.return=null),g.return=null}catch(ne){bn(g,u,ne)}}if(u.subtreeFlags&12854)for(u=u.child;u!==null;)$6(u,o),u=u.sibling}function $6(o,u){var l=o.alternate,h=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(tr(u,o),vr(o),h&4){try{Hu(3,o,o.return),Gp(3,o)}catch(Se){bn(o,o.return,Se)}try{Hu(5,o,o.return)}catch(Se){bn(o,o.return,Se)}}break;case 1:tr(u,o),vr(o),h&512&&l!==null&&Ko(l,l.return);break;case 5:if(tr(u,o),vr(o),h&512&&l!==null&&Ko(l,l.return),o.flags&32){var g=o.stateNode;try{na(g,"")}catch(Se){bn(o,o.return,Se)}}if(h&4&&(g=o.stateNode,g!=null)){var x=o.memoizedProps,k=l!==null?l.memoizedProps:x,$=o.type,z=o.updateQueue;if(o.updateQueue=null,z!==null)try{$==="input"&&x.type==="radio"&&x.name!=null&&Me(g,x),W0($,k);var ne=W0($,x);for(k=0;k<z.length;k+=2){var ie=z[k],se=z[k+1];ie==="style"?ru(g,se):ie==="dangerouslySetInnerHTML"?Mo(g,se):ie==="children"?na(g,se):M(g,ie,se,ne)}switch($){case"input":Fe(g,x);break;case"textarea":yn(g,x);break;case"select":var oe=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var he=x.value;he!=null?xn(g,!!x.multiple,he,!1):oe!==!!x.multiple&&(x.defaultValue!=null?xn(g,!!x.multiple,x.defaultValue,!0):xn(g,!!x.multiple,x.multiple?[]:"",!1))}g[Pu]=x}catch(Se){bn(o,o.return,Se)}}break;case 6:if(tr(u,o),vr(o),h&4){if(o.stateNode===null)throw Error(t(162));g=o.stateNode,x=o.memoizedProps;try{g.nodeValue=x}catch(Se){bn(o,o.return,Se)}}break;case 3:if(tr(u,o),vr(o),h&4&&l!==null&&l.memoizedState.isDehydrated)try{du(u.containerInfo)}catch(Se){bn(o,o.return,Se)}break;case 4:tr(u,o),vr(o);break;case 13:tr(u,o),vr(o),g=o.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(Z2=Pn())),h&4&&D6(o);break;case 22:if(ie=l!==null&&l.memoizedState!==null,o.mode&1?(Jn=(ne=Jn)||ie,tr(u,o),Jn=ne):tr(u,o),vr(o),h&8192){if(ne=o.memoizedState!==null,(o.stateNode.isHidden=ne)&&!ie&&(o.mode&1)!==0)for(be=o,ie=o.child;ie!==null;){for(se=be=ie;be!==null;){switch(oe=be,he=oe.child,oe.tag){case 0:case 11:case 14:case 15:Hu(4,oe,oe.return);break;case 1:Ko(oe,oe.return);var Be=oe.stateNode;if(typeof Be.componentWillUnmount=="function"){h=oe,l=oe.return;try{u=h,Be.props=u.memoizedProps,Be.state=u.memoizedState,Be.componentWillUnmount()}catch(Se){bn(h,l,Se)}}break;case 5:Ko(oe,oe.return);break;case 22:if(oe.memoizedState!==null){q6(se);continue}}he!==null?(he.return=oe,be=he):q6(se)}ie=ie.sibling}e:for(ie=null,se=o;;){if(se.tag===5){if(ie===null){ie=se;try{g=se.stateNode,ne?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):($=se.stateNode,z=se.memoizedProps.style,k=z!=null&&z.hasOwnProperty("display")?z.display:null,$.style.display=ta("display",k))}catch(Se){bn(o,o.return,Se)}}}else if(se.tag===6){if(ie===null)try{se.stateNode.nodeValue=ne?"":se.memoizedProps}catch(Se){bn(o,o.return,Se)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===o)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===o)break e;for(;se.sibling===null;){if(se.return===null||se.return===o)break e;ie===se&&(ie=null),se=se.return}ie===se&&(ie=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:tr(u,o),vr(o),h&4&&D6(o);break;case 21:break;default:tr(u,o),vr(o)}}function vr(o){var u=o.flags;if(u&2){try{e:{for(var l=o.return;l!==null;){if(T6(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(na(g,""),h.flags&=-33);var x=E6(o);Q2(o,x,g);break;case 3:case 4:var k=h.stateNode.containerInfo,$=E6(o);K2(o,$,k);break;default:throw Error(t(161))}}catch(z){bn(o,o.return,z)}o.flags&=-3}u&4096&&(o.flags&=-4097)}function LC(o,u,l){be=o,L6(o)}function L6(o,u,l){for(var h=(o.mode&1)!==0;be!==null;){var g=be,x=g.child;if(g.tag===22&&h){var k=g.memoizedState!==null||Vp;if(!k){var $=g.alternate,z=$!==null&&$.memoizedState!==null||Jn;$=Vp;var ne=Jn;if(Vp=k,(Jn=z)&&!ne)for(be=g;be!==null;)k=be,z=k.child,k.tag===22&&k.memoizedState!==null?z6(g):z!==null?(z.return=k,be=z):z6(g);for(;x!==null;)be=x,L6(x),x=x.sibling;be=g,Vp=$,Jn=ne}F6(o)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,be=x):F6(o)}}function F6(o){for(;be!==null;){var u=be;if((u.flags&8772)!==0){var l=u.alternate;try{if((u.flags&8772)!==0)switch(u.tag){case 0:case 11:case 15:Jn||Gp(5,u);break;case 1:var h=u.stateNode;if(u.flags&4&&!Jn)if(l===null)h.componentDidMount();else{var g=u.elementType===u.type?l.memoizedProps:er(u.type,l.memoizedProps);h.componentDidUpdate(g,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var x=u.updateQueue;x!==null&&q1(u,x,h);break;case 3:var k=u.updateQueue;if(k!==null){if(l=null,u.child!==null)switch(u.child.tag){case 5:l=u.child.stateNode;break;case 1:l=u.child.stateNode}q1(u,k,l)}break;case 5:var $=u.stateNode;if(l===null&&u.flags&4){l=$;var z=u.memoizedProps;switch(u.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(u.memoizedState===null){var ne=u.alternate;if(ne!==null){var ie=ne.memoizedState;if(ie!==null){var se=ie.dehydrated;se!==null&&du(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Jn||u.flags&512&&G2(u)}catch(oe){bn(u,u.return,oe)}}if(u===o){be=null;break}if(l=u.sibling,l!==null){l.return=u.return,be=l;break}be=u.return}}function q6(o){for(;be!==null;){var u=be;if(u===o){be=null;break}var l=u.sibling;if(l!==null){l.return=u.return,be=l;break}be=u.return}}function z6(o){for(;be!==null;){var u=be;try{switch(u.tag){case 0:case 11:case 15:var l=u.return;try{Gp(4,u)}catch(z){bn(u,l,z)}break;case 1:var h=u.stateNode;if(typeof h.componentDidMount=="function"){var g=u.return;try{h.componentDidMount()}catch(z){bn(u,g,z)}}var x=u.return;try{G2(u)}catch(z){bn(u,x,z)}break;case 5:var k=u.return;try{G2(u)}catch(z){bn(u,k,z)}}}catch(z){bn(u,u.return,z)}if(u===o){be=null;break}var $=u.sibling;if($!==null){$.return=u.return,be=$;break}be=u.return}}var FC=Math.ceil,Kp=O.ReactCurrentDispatcher,Y2=O.ReactCurrentOwner,Et=O.ReactCurrentBatchConfig,ze=0,Ln=null,_n=null,Gn=0,xt=0,Qo=la(0),Rn=0,Tu=null,Xa=0,Qp=0,X2=0,Eu=null,mt=null,Z2=0,Yo=1/0,Hr=null,Yp=!1,J2=null,va=null,Xp=!1,ga=null,Zp=0,ju=0,ef=null,Jp=-1,el=0;function rt(){return(ze&6)!==0?Pn():Jp!==-1?Jp:Jp=Pn()}function ya(o){return(o.mode&1)===0?1:(ze&2)!==0&&Gn!==0?Gn&-Gn:SC.transition!==null?(el===0&&(el=Eb()),el):(o=Ze,o!==0||(o=window.event,o=o===void 0?16:Vb(o.type)),o)}function rr(o,u,l,h){if(50<ju)throw ju=0,ef=null,Error(t(185));su(o,l,h),((ze&2)===0||o!==Ln)&&(o===Ln&&((ze&2)===0&&(Qp|=l),Rn===4&&ba(o,Gn)),ht(o,h),l===1&&ze===0&&(u.mode&1)===0&&(Yo=Pn()+500,Ap&&fa()))}function ht(o,u){var l=o.callbackNode;SO(o,u);var h=pp(o,o===Ln?Gn:0);if(h===0)l!==null&&Rb(l),o.callbackNode=null,o.callbackPriority=0;else if(u=h&-h,o.callbackPriority!==u){if(l!=null&&Rb(l),u===1)o.tag===0?PC(V6.bind(null,o)):C1(V6.bind(null,o)),IC(function(){(ze&6)===0&&fa()}),l=null;else{switch(jb(h)){case 1:l=N0;break;case 4:l=Hb;break;case 16:l=op;break;case 536870912:l=Tb;break;default:l=op}l=eI(l,U6.bind(null,o))}o.callbackPriority=u,o.callbackNode=l}}function U6(o,u){if(Jp=-1,el=0,(ze&6)!==0)throw Error(t(327));var l=o.callbackNode;if(Xo()&&o.callbackNode!==l)return null;var h=pp(o,o===Ln?Gn:0);if(h===0)return null;if((h&30)!==0||(h&o.expiredLanes)!==0||u)u=nl(o,h);else{u=h;var g=ze;ze|=2;var x=K6();(Ln!==o||Gn!==u)&&(Hr=null,Yo=Pn()+500,Ja(o,u));do try{UC();break}catch($){G6(o,$)}while(!0);y2(),Kp.current=x,ze=g,_n!==null?u=0:(Ln=null,Gn=0,u=Rn)}if(u!==0){if(u===2&&(g=R0(o),g!==0&&(h=g,u=nf(o,g))),u===1)throw l=Tu,Ja(o,0),ba(o,h),ht(o,Pn()),l;if(u===6)ba(o,h);else{if(g=o.current.alternate,(h&30)===0&&!qC(g)&&(u=nl(o,h),u===2&&(x=R0(o),x!==0&&(h=x,u=nf(o,x))),u===1))throw l=Tu,Ja(o,0),ba(o,h),ht(o,Pn()),l;switch(o.finishedWork=g,o.finishedLanes=h,u){case 0:case 1:throw Error(t(345));case 2:eo(o,mt,Hr);break;case 3:if(ba(o,h),(h&130023424)===h&&(u=Z2+500-Pn(),10<u)){if(pp(o,0)!==0)break;if(g=o.suspendedLanes,(g&h)!==h){rt(),o.pingedLanes|=o.suspendedLanes&g;break}o.timeoutHandle=u2(eo.bind(null,o,mt,Hr),u);break}eo(o,mt,Hr);break;case 4:if(ba(o,h),(h&4194240)===h)break;for(u=o.eventTimes,g=-1;0<h;){var k=31-Xt(h);x=1<<k,k=u[k],k>g&&(g=k),h&=~x}if(h=g,h=Pn()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*FC(h/1960))-h,10<h){o.timeoutHandle=u2(eo.bind(null,o,mt,Hr),h);break}eo(o,mt,Hr);break;case 5:eo(o,mt,Hr);break;default:throw Error(t(329))}}}return ht(o,Pn()),o.callbackNode===l?U6.bind(null,o):null}function nf(o,u){var l=Eu;return o.current.memoizedState.isDehydrated&&(Ja(o,u).flags|=256),o=nl(o,u),o!==2&&(u=mt,mt=l,u!==null&&tf(u)),o}function tf(o){mt===null?mt=o:mt.push.apply(mt,o)}function qC(o){for(var u=o;;){if(u.flags&16384){var l=u.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var g=l[h],x=g.getSnapshot;g=g.value;try{if(!Zt(x(),g))return!1}catch{return!1}}}if(l=u.child,u.subtreeFlags&16384&&l!==null)l.return=u,u=l;else{if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function ba(o,u){for(u&=~X2,u&=~Qp,o.suspendedLanes|=u,o.pingedLanes&=~u,o=o.expirationTimes;0<u;){var l=31-Xt(u),h=1<<l;o[l]=-1,u&=~h}}function V6(o){if((ze&6)!==0)throw Error(t(327));Xo();var u=pp(o,0);if((u&1)===0)return ht(o,Pn()),null;var l=nl(o,u);if(o.tag!==0&&l===2){var h=R0(o);h!==0&&(u=h,l=nf(o,h))}if(l===1)throw l=Tu,Ja(o,0),ba(o,u),ht(o,Pn()),l;if(l===6)throw Error(t(345));return o.finishedWork=o.current.alternate,o.finishedLanes=u,eo(o,mt,Hr),ht(o,Pn()),null}function rf(o,u){var l=ze;ze|=1;try{return o(u)}finally{ze=l,ze===0&&(Yo=Pn()+500,Ap&&fa())}}function Za(o){ga!==null&&ga.tag===0&&(ze&6)===0&&Xo();var u=ze;ze|=1;var l=Et.transition,h=Ze;try{if(Et.transition=null,Ze=1,o)return o()}finally{Ze=h,Et.transition=l,ze=u,(ze&6)===0&&fa()}}function af(){xt=Qo.current,sn(Qo)}function Ja(o,u){o.finishedWork=null,o.finishedLanes=0;var l=o.timeoutHandle;if(l!==-1&&(o.timeoutHandle=-1,bC(l)),_n!==null)for(l=_n.return;l!==null;){var h=l;switch(d2(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Wp();break;case 3:Vo(),sn(ct),sn(Yn),W2();break;case 5:P2(h);break;case 4:Vo();break;case 13:sn(dn);break;case 19:sn(dn);break;case 10:b2(h.type._context);break;case 22:case 23:af()}l=l.return}if(Ln=o,_n=o=Ia(o.current,null),Gn=xt=u,Rn=0,Tu=null,X2=Qp=Xa=0,mt=Eu=null,Ka!==null){for(u=0;u<Ka.length;u++)if(l=Ka[u],h=l.interleaved,h!==null){l.interleaved=null;var g=h.next,x=l.pending;if(x!==null){var k=x.next;x.next=g,h.next=k}l.pending=h}Ka=null}return o}function G6(o,u){do{var l=_n;try{if(y2(),jp.current=Fp,Dp){for(var h=mn.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}Dp=!1}if(Ya=0,$n=Nn=mn=null,Ou=!1,Cu=0,Y2.current=null,l===null||l.return===null){Rn=1,Tu=u,_n=null;break}e:{var x=o,k=l.return,$=l,z=u;if(u=Gn,$.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ne=z,ie=$,se=ie.tag;if((ie.mode&1)===0&&(se===0||se===11||se===15)){var oe=ie.alternate;oe?(ie.updateQueue=oe.updateQueue,ie.memoizedState=oe.memoizedState,ie.lanes=oe.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var he=y6(k);if(he!==null){he.flags&=-257,b6(he,k,$,x,u),he.mode&1&&g6(x,ne,u),u=he,z=ne;var Be=u.updateQueue;if(Be===null){var Se=new Set;Se.add(z),u.updateQueue=Se}else Be.add(z);break e}else{if((u&1)===0){g6(x,ne,u),of();break e}z=Error(t(426))}}else if(cn&&$.mode&1){var Sn=y6(k);if(Sn!==null){(Sn.flags&65536)===0&&(Sn.flags|=256),b6(Sn,k,$,x,u),v2(Go(z,$));break e}}x=z=Go(z,$),Rn!==4&&(Rn=2),Eu===null?Eu=[x]:Eu.push(x),x=k;do{switch(x.tag){case 3:x.flags|=65536,u&=-u,x.lanes|=u;var Z=h6(x,z,u);F1(x,Z);break e;case 1:$=z;var G=x.type,ee=x.stateNode;if((x.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(va===null||!va.has(ee)))){x.flags|=65536,u&=-u,x.lanes|=u;var le=v6(x,$,u);F1(x,le);break e}}x=x.return}while(x!==null)}Y6(l)}catch(Ae){u=Ae,_n===l&&l!==null&&(_n=l=l.return);continue}break}while(!0)}function K6(){var o=Kp.current;return Kp.current=Fp,o===null?Fp:o}function of(){(Rn===0||Rn===3||Rn===2)&&(Rn=4),Ln===null||(Xa&268435455)===0&&(Qp&268435455)===0||ba(Ln,Gn)}function nl(o,u){var l=ze;ze|=2;var h=K6();(Ln!==o||Gn!==u)&&(Hr=null,Ja(o,u));do try{zC();break}catch(g){G6(o,g)}while(!0);if(y2(),ze=l,Kp.current=h,_n!==null)throw Error(t(261));return Ln=null,Gn=0,Rn}function zC(){for(;_n!==null;)Q6(_n)}function UC(){for(;_n!==null&&!vO();)Q6(_n)}function Q6(o){var u=J6(o.alternate,o,xt);o.memoizedProps=o.pendingProps,u===null?Y6(o):_n=u,Y2.current=null}function Y6(o){var u=o;do{var l=u.alternate;if(o=u.return,(u.flags&32768)===0){if(l=EC(l,u,xt),l!==null){_n=l;return}}else{if(l=jC(l,u),l!==null){l.flags&=32767,_n=l;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{Rn=6,_n=null;return}}if(u=u.sibling,u!==null){_n=u;return}_n=u=o}while(u!==null);Rn===0&&(Rn=5)}function eo(o,u,l){var h=Ze,g=Et.transition;try{Et.transition=null,Ze=1,VC(o,u,l,h)}finally{Et.transition=g,Ze=h}return null}function VC(o,u,l,h){do Xo();while(ga!==null);if((ze&6)!==0)throw Error(t(327));l=o.finishedWork;var g=o.finishedLanes;if(l===null)return null;if(o.finishedWork=null,o.finishedLanes=0,l===o.current)throw Error(t(177));o.callbackNode=null,o.callbackPriority=0;var x=l.lanes|l.childLanes;if(WO(o,x),o===Ln&&(_n=Ln=null,Gn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Xp||(Xp=!0,eI(op,function(){return Xo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=Et.transition,Et.transition=null;var k=Ze;Ze=1;var $=ze;ze|=4,Y2.current=null,$C(o,l),$6(l,o),fC(o2),fp=!!a2,o2=a2=null,o.current=l,LC(l),gO(),ze=$,Ze=k,Et.transition=x}else o.current=l;if(Xp&&(Xp=!1,ga=o,Zp=g),x=o.pendingLanes,x===0&&(va=null),IO(l.stateNode),ht(o,Pn()),u!==null)for(h=o.onRecoverableError,l=0;l<u.length;l++)g=u[l],h(g.value,{componentStack:g.stack,digest:g.digest});if(Yp)throw Yp=!1,o=J2,J2=null,o;return(Zp&1)!==0&&o.tag!==0&&Xo(),x=o.pendingLanes,(x&1)!==0?o===ef?ju++:(ju=0,ef=o):ju=0,fa(),null}function Xo(){if(ga!==null){var o=jb(Zp),u=Et.transition,l=Ze;try{if(Et.transition=null,Ze=16>o?16:o,ga===null)var h=!1;else{if(o=ga,ga=null,Zp=0,(ze&6)!==0)throw Error(t(331));var g=ze;for(ze|=4,be=o.current;be!==null;){var x=be,k=x.child;if((be.flags&16)!==0){var $=x.deletions;if($!==null){for(var z=0;z<$.length;z++){var ne=$[z];for(be=ne;be!==null;){var ie=be;switch(ie.tag){case 0:case 11:case 15:Hu(8,ie,x)}var se=ie.child;if(se!==null)se.return=ie,be=se;else for(;be!==null;){ie=be;var oe=ie.sibling,he=ie.return;if(H6(ie),ie===ne){be=null;break}if(oe!==null){oe.return=he,be=oe;break}be=he}}}var Be=x.alternate;if(Be!==null){var Se=Be.child;if(Se!==null){Be.child=null;do{var Sn=Se.sibling;Se.sibling=null,Se=Sn}while(Se!==null)}}be=x}}if((x.subtreeFlags&2064)!==0&&k!==null)k.return=x,be=k;else e:for(;be!==null;){if(x=be,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Hu(9,x,x.return)}var Z=x.sibling;if(Z!==null){Z.return=x.return,be=Z;break e}be=x.return}}var G=o.current;for(be=G;be!==null;){k=be;var ee=k.child;if((k.subtreeFlags&2064)!==0&&ee!==null)ee.return=k,be=ee;else e:for(k=G;be!==null;){if($=be,($.flags&2048)!==0)try{switch($.tag){case 0:case 11:case 15:Gp(9,$)}}catch(Ae){bn($,$.return,Ae)}if($===k){be=null;break e}var le=$.sibling;if(le!==null){le.return=$.return,be=le;break e}be=$.return}}if(ze=g,fa(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(ip,o)}catch{}h=!0}return h}finally{Ze=l,Et.transition=u}}return!1}function X6(o,u,l){u=Go(l,u),u=h6(o,u,1),o=ma(o,u,1),u=rt(),o!==null&&(su(o,1,u),ht(o,u))}function bn(o,u,l){if(o.tag===3)X6(o,o,l);else for(;u!==null;){if(u.tag===3){X6(u,o,l);break}else if(u.tag===1){var h=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(va===null||!va.has(h))){o=Go(l,o),o=v6(u,o,1),u=ma(u,o,1),o=rt(),u!==null&&(su(u,1,o),ht(u,o));break}}u=u.return}}function GC(o,u,l){var h=o.pingCache;h!==null&&h.delete(u),u=rt(),o.pingedLanes|=o.suspendedLanes&l,Ln===o&&(Gn&l)===l&&(Rn===4||Rn===3&&(Gn&130023424)===Gn&&500>Pn()-Z2?Ja(o,0):X2|=l),ht(o,u)}function Z6(o,u){u===0&&((o.mode&1)===0?u=1:(u=sp,sp<<=1,(sp&130023424)===0&&(sp=4194304)));var l=rt();o=kr(o,u),o!==null&&(su(o,u,l),ht(o,l))}function KC(o){var u=o.memoizedState,l=0;u!==null&&(l=u.retryLane),Z6(o,l)}function QC(o,u){var l=0;switch(o.tag){case 13:var h=o.stateNode,g=o.memoizedState;g!==null&&(l=g.retryLane);break;case 19:h=o.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(u),Z6(o,l)}var J6;J6=function(o,u,l){if(o!==null)if(o.memoizedProps!==u.pendingProps||ct.current)dt=!0;else{if((o.lanes&l)===0&&(u.flags&128)===0)return dt=!1,TC(o,u,l);dt=(o.flags&131072)!==0}else dt=!1,cn&&(u.flags&1048576)!==0&&k1(u,Op,u.index);switch(u.lanes=0,u.tag){case 2:var h=u.type;Up(o,u),o=u.pendingProps;var g=Do(u,Yn.current);Uo(u,l),g=_2(null,u,h,o,g,l);var x=O2();return u.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(u.tag=1,u.memoizedState=null,u.updateQueue=null,ft(h)?(x=!0,Mp(u)):x=!1,u.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,x2(u),g.updater=qp,u.stateNode=g,g._reactInternals=u,T2(u,h,o,l),u=$2(null,u,h,!0,x,l)):(u.tag=0,cn&&x&&f2(u),tt(null,u,g,l),u=u.child),u;case 16:h=u.elementType;e:{switch(Up(o,u),o=u.pendingProps,g=h._init,h=g(h._payload),u.type=h,g=u.tag=XC(h),o=er(h,o),g){case 0:u=D2(null,u,h,o,l);break e;case 1:u=S6(null,u,h,o,l);break e;case 11:u=I6(null,u,h,o,l);break e;case 14:u=B6(null,u,h,er(h.type,o),l);break e}throw Error(t(306,h,""))}return u;case 0:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:er(h,g),D2(o,u,h,g,l);case 1:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:er(h,g),S6(o,u,h,g,l);case 3:e:{if(W6(u),o===null)throw Error(t(387));h=u.pendingProps,x=u.memoizedState,g=x.element,L1(o,u),Tp(u,h,null,l);var k=u.memoizedState;if(h=k.element,x.isDehydrated)if(x={element:h,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},u.updateQueue.baseState=x,u.memoizedState=x,u.flags&256){g=Go(Error(t(423)),u),u=M6(o,u,h,l,g);break e}else if(h!==g){g=Go(Error(t(424)),u),u=M6(o,u,h,l,g);break e}else for(Bt=pa(u.stateNode.containerInfo.firstChild),It=u,cn=!0,Jt=null,l=D1(u,null,h,l),u.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Fo(),h===g){u=Rr(o,u,l);break e}tt(o,u,h,l)}u=u.child}return u;case 5:return z1(u),o===null&&h2(u),h=u.type,g=u.pendingProps,x=o!==null?o.memoizedProps:null,k=g.children,i2(h,g)?k=null:x!==null&&i2(h,x)&&(u.flags|=32),P6(o,u),tt(o,u,k,l),u.child;case 6:return o===null&&h2(u),null;case 13:return A6(o,u,l);case 4:return w2(u,u.stateNode.containerInfo),h=u.pendingProps,o===null?u.child=qo(u,null,h,l):tt(o,u,h,l),u.child;case 11:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:er(h,g),I6(o,u,h,g,l);case 7:return tt(o,u,u.pendingProps,l),u.child;case 8:return tt(o,u,u.pendingProps.children,l),u.child;case 12:return tt(o,u,u.pendingProps.children,l),u.child;case 10:e:{if(h=u.type._context,g=u.pendingProps,x=u.memoizedProps,k=g.value,tn(Np,h._currentValue),h._currentValue=k,x!==null)if(Zt(x.value,k)){if(x.children===g.children&&!ct.current){u=Rr(o,u,l);break e}}else for(x=u.child,x!==null&&(x.return=u);x!==null;){var $=x.dependencies;if($!==null){k=x.child;for(var z=$.firstContext;z!==null;){if(z.context===h){if(x.tag===1){z=Nr(-1,l&-l),z.tag=2;var ne=x.updateQueue;if(ne!==null){ne=ne.shared;var ie=ne.pending;ie===null?z.next=z:(z.next=ie.next,ie.next=z),ne.pending=z}}x.lanes|=l,z=x.alternate,z!==null&&(z.lanes|=l),I2(x.return,l,u),$.lanes|=l;break}z=z.next}}else if(x.tag===10)k=x.type===u.type?null:x.child;else if(x.tag===18){if(k=x.return,k===null)throw Error(t(341));k.lanes|=l,$=k.alternate,$!==null&&($.lanes|=l),I2(k,l,u),k=x.sibling}else k=x.child;if(k!==null)k.return=x;else for(k=x;k!==null;){if(k===u){k=null;break}if(x=k.sibling,x!==null){x.return=k.return,k=x;break}k=k.return}x=k}tt(o,u,g.children,l),u=u.child}return u;case 9:return g=u.type,h=u.pendingProps.children,Uo(u,l),g=Ht(g),h=h(g),u.flags|=1,tt(o,u,h,l),u.child;case 14:return h=u.type,g=er(h,u.pendingProps),g=er(h.type,g),B6(o,u,h,g,l);case 15:return x6(o,u,u.type,u.pendingProps,l);case 17:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:er(h,g),Up(o,u),u.tag=1,ft(h)?(o=!0,Mp(u)):o=!1,Uo(u,l),d6(u,h,g),T2(u,h,g,l),$2(null,u,h,!0,o,l);case 19:return O6(o,u,l);case 22:return w6(o,u,l)}throw Error(t(156,u.tag))};function eI(o,u){return Nb(o,u)}function YC(o,u,l,h){this.tag=o,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(o,u,l,h){return new YC(o,u,l,h)}function uf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function XC(o){if(typeof o=="function")return uf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===H)return 11;if(o===K)return 14}return 2}function Ia(o,u){var l=o.alternate;return l===null?(l=jt(o.tag,u,o.key,o.mode),l.elementType=o.elementType,l.type=o.type,l.stateNode=o.stateNode,l.alternate=o,o.alternate=l):(l.pendingProps=u,l.type=o.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=o.flags&14680064,l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,u=o.dependencies,l.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},l.sibling=o.sibling,l.index=o.index,l.ref=o.ref,l}function tl(o,u,l,h,g,x){var k=2;if(h=o,typeof o=="function")uf(o)&&(k=1);else if(typeof o=="string")k=5;else e:switch(o){case N:return no(l.children,g,x,u);case P:k=8,g|=8;break;case C:return o=jt(12,l,u,g|2),o.elementType=C,o.lanes=x,o;case q:return o=jt(13,l,u,g),o.elementType=q,o.lanes=x,o;case L:return o=jt(19,l,u,g),o.elementType=L,o.lanes=x,o;case V:return rl(l,g,x,u);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case T:k=10;break e;case j:k=9;break e;case H:k=11;break e;case K:k=14;break e;case U:k=16,h=null;break e}throw Error(t(130,o==null?o:typeof o,""))}return u=jt(k,l,u,g),u.elementType=o,u.type=h,u.lanes=x,u}function no(o,u,l,h){return o=jt(7,o,h,u),o.lanes=l,o}function rl(o,u,l,h){return o=jt(22,o,h,u),o.elementType=V,o.lanes=l,o.stateNode={isHidden:!1},o}function sf(o,u,l){return o=jt(6,o,null,u),o.lanes=l,o}function pf(o,u,l){return u=jt(4,o.children!==null?o.children:[],o.key,u),u.lanes=l,u.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},u}function ZC(o,u,l,h,g){this.tag=u,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=H0(0),this.expirationTimes=H0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=H0(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function lf(o,u,l,h,g,x,k,$,z){return o=new ZC(o,u,l,$,z),u===1?(u=1,x===!0&&(u|=8)):u=0,x=jt(3,null,null,u),o.current=x,x.stateNode=o,x.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},x2(x),o}function JC(o,u,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:h==null?null:""+h,children:o,containerInfo:u,implementation:l}}function nI(o){if(!o)return ca;o=o._reactInternals;e:{if(qa(o)!==o||o.tag!==1)throw Error(t(170));var u=o;do{switch(u.tag){case 3:u=u.stateNode.context;break e;case 1:if(ft(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break e}}u=u.return}while(u!==null);throw Error(t(171))}if(o.tag===1){var l=o.type;if(ft(l))return _1(o,l,u)}return u}function tI(o,u,l,h,g,x,k,$,z){return o=lf(l,h,!0,o,g,x,k,$,z),o.context=nI(null),l=o.current,h=rt(),g=ya(l),x=Nr(h,g),x.callback=u??null,ma(l,x,g),o.current.lanes=g,su(o,g,h),ht(o,h),o}function al(o,u,l,h){var g=u.current,x=rt(),k=ya(g);return l=nI(l),u.context===null?u.context=l:u.pendingContext=l,u=Nr(x,k),u.payload={element:o},h=h===void 0?null:h,h!==null&&(u.callback=h),o=ma(g,u,k),o!==null&&(rr(o,g,k,x),Hp(o,g,k)),k}function ol(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function rI(o,u){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var l=o.retryLane;o.retryLane=l!==0&&l<u?l:u}}function cf(o,u){rI(o,u),(o=o.alternate)&&rI(o,u)}function e5(){return null}var aI=typeof reportError=="function"?reportError:function(o){console.error(o)};function ff(o){this._internalRoot=o}il.prototype.render=ff.prototype.render=function(o){var u=this._internalRoot;if(u===null)throw Error(t(409));al(o,u,null,null)},il.prototype.unmount=ff.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var u=o.containerInfo;Za(function(){al(null,o,null,null)}),u[Ar]=null}};function il(o){this._internalRoot=o}il.prototype.unstable_scheduleHydration=function(o){if(o){var u=Lb();o={blockedOn:null,target:o,priority:u};for(var l=0;l<ia.length&&u!==0&&u<ia[l].priority;l++);ia.splice(l,0,o),l===0&&zb(o)}};function df(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function ul(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function oI(){}function n5(o,u,l,h,g){if(g){if(typeof h=="function"){var x=h;h=function(){var ne=ol(k);x.call(ne)}}var k=tI(u,h,o,0,null,!1,!1,"",oI);return o._reactRootContainer=k,o[Ar]=k.current,xu(o.nodeType===8?o.parentNode:o),Za(),k}for(;g=o.lastChild;)o.removeChild(g);if(typeof h=="function"){var $=h;h=function(){var ne=ol(z);$.call(ne)}}var z=lf(o,0,!1,null,null,!1,!1,"",oI);return o._reactRootContainer=z,o[Ar]=z.current,xu(o.nodeType===8?o.parentNode:o),Za(function(){al(u,z,l,h)}),z}function sl(o,u,l,h,g){var x=l._reactRootContainer;if(x){var k=x;if(typeof g=="function"){var $=g;g=function(){var z=ol(k);$.call(z)}}al(u,k,o,g)}else k=n5(l,u,o,g,h);return ol(k)}Db=function(o){switch(o.tag){case 3:var u=o.stateNode;if(u.current.memoizedState.isDehydrated){var l=uu(u.pendingLanes);l!==0&&(T0(u,l|1),ht(u,Pn()),(ze&6)===0&&(Yo=Pn()+500,fa()))}break;case 13:Za(function(){var h=kr(o,1);if(h!==null){var g=rt();rr(h,o,1,g)}}),cf(o,1)}},E0=function(o){if(o.tag===13){var u=kr(o,134217728);if(u!==null){var l=rt();rr(u,o,134217728,l)}cf(o,134217728)}},$b=function(o){if(o.tag===13){var u=ya(o),l=kr(o,u);if(l!==null){var h=rt();rr(l,o,u,h)}cf(o,u)}},Lb=function(){return Ze},Fb=function(o,u){var l=Ze;try{return Ze=o,u()}finally{Ze=l}},_0=function(o,u,l){switch(u){case"input":if(Fe(o,l),u=l.name,l.type==="radio"&&u!=null){for(l=o;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+u)+'][type="radio"]'),u=0;u<l.length;u++){var h=l[u];if(h!==o&&h.form===o.form){var g=Sp(h);if(!g)throw Error(t(90));re(h),Fe(h,g)}}}break;case"textarea":yn(o,l);break;case"select":u=l.value,u!=null&&xn(o,!!l.multiple,u,!1)}},Wb=rf,Mb=Za;var t5={usingClientEntryPoint:!1,Events:[Su,Eo,Sp,Pb,Sb,rf]},Du={findFiberByHostInstance:za,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r5={bundleType:Du.bundleType,version:Du.version,rendererPackageName:Du.rendererPackageName,rendererConfig:Du.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=Cb(o),o===null?null:o.stateNode},findFiberByHostInstance:Du.findFiberByHostInstance||e5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{ip=pl.inject(r5),fr=pl}catch{}}return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t5,vt.createPortal=function(o,u){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(u))throw Error(t(200));return JC(o,u,null,l)},vt.createRoot=function(o,u){if(!df(o))throw Error(t(299));var l=!1,h="",g=aI;return u!=null&&(u.unstable_strictMode===!0&&(l=!0),u.identifierPrefix!==void 0&&(h=u.identifierPrefix),u.onRecoverableError!==void 0&&(g=u.onRecoverableError)),u=lf(o,1,!1,null,null,l,!1,h,g),o[Ar]=u.current,xu(o.nodeType===8?o.parentNode:o),new ff(u)},vt.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var u=o._reactInternals;if(u===void 0)throw typeof o.render=="function"?Error(t(188)):(o=Object.keys(o).join(","),Error(t(268,o)));return o=Cb(u),o=o===null?null:o.stateNode,o},vt.flushSync=function(o){return Za(o)},vt.hydrate=function(o,u,l){if(!ul(u))throw Error(t(200));return sl(null,o,u,!0,l)},vt.hydrateRoot=function(o,u,l){if(!df(o))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,g=!1,x="",k=aI;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(k=l.onRecoverableError)),u=tI(u,null,o,1,l??null,g,!1,x,k),o[Ar]=u.current,xu(o),h)for(o=0;o<h.length;o++)l=h[o],g=l._getVersion,g=g(l._source),u.mutableSourceEagerHydrationData==null?u.mutableSourceEagerHydrationData=[l,g]:u.mutableSourceEagerHydrationData.push(l,g);return new il(u)},vt.render=function(o,u,l){if(!ul(u))throw Error(t(200));return sl(null,o,u,!1,l)},vt.unmountComponentAtNode=function(o){if(!ul(o))throw Error(t(40));return o._reactRootContainer?(Za(function(){sl(null,null,o,!1,function(){o._reactRootContainer=null,o[Ar]=null})}),!0):!1},vt.unstable_batchedUpdates=rf,vt.unstable_renderSubtreeIntoContainer=function(o,u,l,h){if(!ul(l))throw Error(t(200));if(o==null||o._reactInternals===void 0)throw Error(t(38));return sl(o,u,l,!1,h)},vt.version="18.3.1-next-f1338f8080-20240426",vt}var dI;function H3(){if(dI)return vf.exports;dI=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),vf.exports=d5(),vf.exports}var mI;function m5(){if(mI)return cl;mI=1;var e=H3();return cl.createRoot=e.createRoot,cl.hydrateRoot=e.hydrateRoot,cl}var h5=m5(),Y=py();const E=Xe(Y),v5=u5({__proto__:null,default:E},[Y]);var Al={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var g5=Al.exports,hI;function y5(){return hI||(hI=1,(function(e,n){((t,r)=>{e.exports=r()})(g5,function t(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},a,i=!r.document&&!!r.postMessage,s=r.IS_PAPA_WORKER||!1,p={},c=0,f={};function m(P){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(C){var T=w(C);T.chunkSize=parseInt(T.chunkSize),C.step||C.chunk||(T.chunkSize=null),this._handle=new I(T),(this._handle.streamer=this)._config=T}).call(this,P),this.parseChunk=function(C,T){var j=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<j){let q=this._config.newline;q||(H=this._config.quoteChar||'"',q=this._handle.guessLineEndings(C,H)),C=[...C.split(q).slice(j)].join(q)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(H=this._config.beforeFirstChunk(C))!==void 0&&(C=H),this.isFirstChunk=!1,this._halted=!1;var j=this._partialLine+C,H=(this._partialLine="",this._handle.parse(j,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(C=H.meta.cursor,j=(this._finished||(this._partialLine=j.substring(C-this._baseIndex),this._baseIndex=C),H&&H.data&&(this._rowCount+=H.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),s)r.postMessage({results:H,workerId:f.WORKER_ID,finished:j});else if(N(this._config.chunk)&&!T){if(this._config.chunk(H,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=H=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(H.data),this._completeResults.errors=this._completeResults.errors.concat(H.errors),this._completeResults.meta=H.meta),this._completed||!j||!N(this._config.complete)||H&&H.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),j||H&&H.meta.paused||this._nextChunk(),H}this._halted=!0},this._sendError=function(C){N(this._config.error)?this._config.error(C):s&&this._config.error&&r.postMessage({workerId:f.WORKER_ID,error:C,finished:!1})}}function d(P){var C;(P=P||{}).chunkSize||(P.chunkSize=f.RemoteChunkSize),m.call(this,P),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(T){this._input=T,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(C=new XMLHttpRequest,this._config.withCredentials&&(C.withCredentials=this._config.withCredentials),i||(C.onload=A(this._chunkLoaded,this),C.onerror=A(this._chunkError,this)),C.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var T,j=this._config.downloadRequestHeaders;for(T in j)C.setRequestHeader(T,j[T])}var H;this._config.chunkSize&&(H=this._start+this._config.chunkSize-1,C.setRequestHeader("Range","bytes="+this._start+"-"+H));try{C.send(this._config.downloadRequestBody)}catch(q){this._chunkError(q.message)}i&&C.status===0&&this._chunkError()}},this._chunkLoaded=function(){C.readyState===4&&(C.status<200||400<=C.status?this._chunkError():(this._start+=this._config.chunkSize||C.responseText.length,this._finished=!this._config.chunkSize||this._start>=(T=>(T=T.getResponseHeader("Content-Range"))!==null?parseInt(T.substring(T.lastIndexOf("/")+1)):-1)(C),this.parseChunk(C.responseText)))},this._chunkError=function(T){T=C.statusText||T,this._sendError(new Error(T))}}function v(P){(P=P||{}).chunkSize||(P.chunkSize=f.LocalChunkSize),m.call(this,P);var C,T,j=typeof FileReader<"u";this.stream=function(H){this._input=H,T=H.slice||H.webkitSlice||H.mozSlice,j?((C=new FileReader).onload=A(this._chunkLoaded,this),C.onerror=A(this._chunkError,this)):C=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var H=this._input,q=(this._config.chunkSize&&(q=Math.min(this._start+this._config.chunkSize,this._input.size),H=T.call(H,this._start,q)),C.readAsText(H,this._config.encoding));j||this._chunkLoaded({target:{result:q}})},this._chunkLoaded=function(H){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(H.target.result)},this._chunkError=function(){this._sendError(C.error)}}function y(P){var C;m.call(this,P=P||{}),this.stream=function(T){return C=T,this._nextChunk()},this._nextChunk=function(){var T,j;if(!this._finished)return T=this._config.chunkSize,C=T?(j=C.substring(0,T),C.substring(T)):(j=C,""),this._finished=!C,this.parseChunk(j)}}function B(P){m.call(this,P=P||{});var C=[],T=!0,j=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(H){this._input=H,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){j&&C.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),C.length?this.parseChunk(C.shift()):T=!0},this._streamData=A(function(H){try{C.push(typeof H=="string"?H:H.toString(this._config.encoding)),T&&(T=!1,this._checkIsFinished(),this.parseChunk(C.shift()))}catch(q){this._streamError(q)}},this),this._streamError=A(function(H){this._streamCleanUp(),this._sendError(H)},this),this._streamEnd=A(function(){this._streamCleanUp(),j=!0,this._streamData("")},this),this._streamCleanUp=A(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function I(P){var C,T,j,H,q=Math.pow(2,53),L=-q,K=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,U=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,V=this,D=0,Q=0,X=!1,R=!1,F=[],J={data:[],errors:[],meta:{}};function ue(fe){return P.skipEmptyLines==="greedy"?fe.join("").trim()==="":fe.length===1&&fe[0].length===0}function me(){if(J&&j&&(ye("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),j=!1),P.skipEmptyLines&&(J.data=J.data.filter(function(re){return!ue(re)})),ge()){let re=function(Te,Pe){N(P.transformHeader)&&(Te=P.transformHeader(Te,Pe)),F.push(Te)};var ce=re;if(J)if(Array.isArray(J.data[0])){for(var fe=0;ge()&&fe<J.data.length;fe++)J.data[fe].forEach(re);J.data.splice(0,1)}else J.data.forEach(re)}function te(re,Te){for(var Pe=P.header?{}:[],Ce=0;Ce<re.length;Ce++){var Me=Ce,Fe=re[Ce],Fe=((je,qe)=>(Ke=>(P.dynamicTypingFunction&&P.dynamicTyping[Ke]===void 0&&(P.dynamicTyping[Ke]=P.dynamicTypingFunction(Ke)),(P.dynamicTyping[Ke]||P.dynamicTyping)===!0))(je)?qe==="true"||qe==="TRUE"||qe!=="false"&&qe!=="FALSE"&&((Ke=>{if(K.test(Ke)&&(Ke=parseFloat(Ke),L<Ke&&Ke<q))return 1})(qe)?parseFloat(qe):U.test(qe)?new Date(qe):qe===""?null:qe):qe)(Me=P.header?Ce>=F.length?"__parsed_extra":F[Ce]:Me,Fe=P.transform?P.transform(Fe,Me):Fe);Me==="__parsed_extra"?(Pe[Me]=Pe[Me]||[],Pe[Me].push(Fe)):Pe[Me]=Fe}return P.header&&(Ce>F.length?ye("FieldMismatch","TooManyFields","Too many fields: expected "+F.length+" fields but parsed "+Ce,Q+Te):Ce<F.length&&ye("FieldMismatch","TooFewFields","Too few fields: expected "+F.length+" fields but parsed "+Ce,Q+Te)),Pe}var de;J&&(P.header||P.dynamicTyping||P.transform)&&(de=1,!J.data.length||Array.isArray(J.data[0])?(J.data=J.data.map(te),de=J.data.length):J.data=te(J.data,0),P.header&&J.meta&&(J.meta.fields=F),Q+=de)}function ge(){return P.header&&F.length===0}function ye(fe,te,de,ce){fe={type:fe,code:te,message:de},ce!==void 0&&(fe.row=ce),J.errors.push(fe)}N(P.step)&&(H=P.step,P.step=function(fe){J=fe,ge()?me():(me(),J.data.length!==0&&(D+=fe.data.length,P.preview&&D>P.preview?T.abort():(J.data=J.data[0],H(J,V))))}),this.parse=function(fe,te,de){var ce=P.quoteChar||'"',ce=(P.newline||(P.newline=this.guessLineEndings(fe,ce)),j=!1,P.delimiter?N(P.delimiter)&&(P.delimiter=P.delimiter(fe),J.meta.delimiter=P.delimiter):((ce=((re,Te,Pe,Ce,Me)=>{var Fe,je,qe,Ke;Me=Me||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var xn=0;xn<Me.length;xn++){for(var gn,Ot=Me[xn],yn=0,Qn=0,wn=0,Dn=(qe=void 0,new S({comments:Ce,delimiter:Ot,newline:Te,preview:10}).parse(re)),lt=0;lt<Dn.data.length;lt++)Pe&&ue(Dn.data[lt])?wn++:(gn=Dn.data[lt].length,Qn+=gn,qe===void 0?qe=gn:0<gn&&(yn+=Math.abs(gn-qe),qe=gn));0<Dn.data.length&&(Qn/=Dn.data.length-wn),(je===void 0||yn<=je)&&(Ke===void 0||Ke<Qn)&&1.99<Qn&&(je=yn,Fe=Ot,Ke=Qn)}return{successful:!!(P.delimiter=Fe),bestDelimiter:Fe}})(fe,P.newline,P.skipEmptyLines,P.comments,P.delimitersToGuess)).successful?P.delimiter=ce.bestDelimiter:(j=!0,P.delimiter=f.DefaultDelimiter),J.meta.delimiter=P.delimiter),w(P));return P.preview&&P.header&&ce.preview++,C=fe,T=new S(ce),J=T.parse(C,te,de),me(),X?{meta:{paused:!0}}:J||{meta:{paused:!1}}},this.paused=function(){return X},this.pause=function(){X=!0,T.abort(),C=N(P.chunk)?"":C.substring(T.getCharIndex())},this.resume=function(){V.streamer._halted?(X=!1,V.streamer.parseChunk(C,!0)):setTimeout(V.resume,3)},this.aborted=function(){return R},this.abort=function(){R=!0,T.abort(),J.meta.aborted=!0,N(P.complete)&&P.complete(J),C=""},this.guessLineEndings=function(re,ce){re=re.substring(0,1048576);var ce=new RegExp(b(ce)+"([^]*?)"+b(ce),"gm"),de=(re=re.replace(ce,"")).split("\r"),ce=re.split(`
`),re=1<ce.length&&ce[0].length<de[0].length;if(de.length===1||re)return`
`;for(var Te=0,Pe=0;Pe<de.length;Pe++)de[Pe][0]===`
`&&Te++;return Te>=de.length/2?`\r
`:"\r"}}function b(P){return P.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function S(P){var C=(P=P||{}).delimiter,T=P.newline,j=P.comments,H=P.step,q=P.preview,L=P.fastMode,K=null,U=!1,V=P.quoteChar==null?'"':P.quoteChar,D=V;if(P.escapeChar!==void 0&&(D=P.escapeChar),(typeof C!="string"||-1<f.BAD_DELIMITERS.indexOf(C))&&(C=","),j===C)throw new Error("Comment character same as delimiter");j===!0?j="#":(typeof j!="string"||-1<f.BAD_DELIMITERS.indexOf(j))&&(j=!1),T!==`
`&&T!=="\r"&&T!==`\r
`&&(T=`
`);var Q=0,X=!1;this.parse=function(R,F,J){if(typeof R!="string")throw new Error("Input must be a string");var ue=R.length,me=C.length,ge=T.length,ye=j.length,fe=N(H),te=[],de=[],ce=[],re=Q=0;if(!R)return yn();if(L||L!==!1&&R.indexOf(V)===-1){for(var Te=R.split(T),Pe=0;Pe<Te.length;Pe++){if(ce=Te[Pe],Q+=ce.length,Pe!==Te.length-1)Q+=T.length;else if(J)return yn();if(!j||ce.substring(0,ye)!==j){if(fe){if(te=[],Ke(ce.split(C)),Qn(),X)return yn()}else Ke(ce.split(C));if(q&&q<=Pe)return te=te.slice(0,q),yn(!0)}}return yn()}for(var Ce=R.indexOf(C,Q),Me=R.indexOf(T,Q),Fe=new RegExp(b(D)+b(V),"g"),je=R.indexOf(V,Q);;)if(R[Q]===V)for(je=Q,Q++;;){if((je=R.indexOf(V,je+1))===-1)return J||de.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:te.length,index:Q}),gn();if(je===ue-1)return gn(R.substring(Q,je).replace(Fe,V));if(V===D&&R[je+1]===D)je++;else if(V===D||je===0||R[je-1]!==D){Ce!==-1&&Ce<je+1&&(Ce=R.indexOf(C,je+1));var qe=xn((Me=Me!==-1&&Me<je+1?R.indexOf(T,je+1):Me)===-1?Ce:Math.min(Ce,Me));if(R.substr(je+1+qe,me)===C){ce.push(R.substring(Q,je).replace(Fe,V)),R[Q=je+1+qe+me]!==V&&(je=R.indexOf(V,Q)),Ce=R.indexOf(C,Q),Me=R.indexOf(T,Q);break}if(qe=xn(Me),R.substring(je+1+qe,je+1+qe+ge)===T){if(ce.push(R.substring(Q,je).replace(Fe,V)),Ot(je+1+qe+ge),Ce=R.indexOf(C,Q),je=R.indexOf(V,Q),fe&&(Qn(),X))return yn();if(q&&te.length>=q)return yn(!0);break}de.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:te.length,index:Q}),je++}}else if(j&&ce.length===0&&R.substring(Q,Q+ye)===j){if(Me===-1)return yn();Q=Me+ge,Me=R.indexOf(T,Q),Ce=R.indexOf(C,Q)}else if(Ce!==-1&&(Ce<Me||Me===-1))ce.push(R.substring(Q,Ce)),Q=Ce+me,Ce=R.indexOf(C,Q);else{if(Me===-1)break;if(ce.push(R.substring(Q,Me)),Ot(Me+ge),fe&&(Qn(),X))return yn();if(q&&te.length>=q)return yn(!0)}return gn();function Ke(wn){te.push(wn),re=Q}function xn(wn){var Dn=0;return Dn=wn!==-1&&(wn=R.substring(je+1,wn))&&wn.trim()===""?wn.length:Dn}function gn(wn){return J||(wn===void 0&&(wn=R.substring(Q)),ce.push(wn),Q=ue,Ke(ce),fe&&Qn()),yn()}function Ot(wn){Q=wn,Ke(ce),ce=[],Me=R.indexOf(T,Q)}function yn(wn){if(P.header&&!F&&te.length&&!U){var Dn=te[0],lt=Object.create(null),Mo=new Set(Dn);let na=!1;for(let Ct=0;Ct<Dn.length;Ct++){let kt=Dn[Ct];if(lt[kt=N(P.transformHeader)?P.transformHeader(kt,Ct):kt]){let ta,ru=lt[kt];for(;ta=kt+"_"+ru,ru++,Mo.has(ta););Mo.add(ta),Dn[Ct]=ta,lt[kt]++,na=!0,(K=K===null?{}:K)[ta]=kt}else lt[kt]=1,Dn[Ct]=kt;Mo.add(kt)}na&&console.warn("Duplicate headers found and renamed."),U=!0}return{data:te,errors:de,meta:{delimiter:C,linebreak:T,aborted:X,truncated:!!wn,cursor:re+(F||0),renamedHeaders:K}}}function Qn(){H(yn()),te=[],de=[]}},this.abort=function(){X=!0},this.getCharIndex=function(){return Q}}function W(P){var C=P.data,T=p[C.workerId],j=!1;if(C.error)T.userError(C.error,C.file);else if(C.results&&C.results.data){var H={abort:function(){j=!0,M(C.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:O,resume:O};if(N(T.userStep)){for(var q=0;q<C.results.data.length&&(T.userStep({data:C.results.data[q],errors:C.results.errors,meta:C.results.meta},H),!j);q++);delete C.results}else N(T.userChunk)&&(T.userChunk(C.results,H,C.file),delete C.results)}C.finished&&!j&&M(C.workerId,C.results)}function M(P,C){var T=p[P];N(T.userComplete)&&T.userComplete(C),T.terminate(),delete p[P]}function O(){throw new Error("Not implemented.")}function w(P){if(typeof P!="object"||P===null)return P;var C,T=Array.isArray(P)?[]:{};for(C in P)T[C]=w(P[C]);return T}function A(P,C){return function(){P.apply(C,arguments)}}function N(P){return typeof P=="function"}return f.parse=function(P,C){var T=(C=C||{}).dynamicTyping||!1;if(N(T)&&(C.dynamicTypingFunction=T,T={}),C.dynamicTyping=T,C.transform=!!N(C.transform)&&C.transform,!C.worker||!f.WORKERS_SUPPORTED)return T=null,f.NODE_STREAM_INPUT,typeof P=="string"?(P=(j=>j.charCodeAt(0)!==65279?j:j.slice(1))(P),T=new(C.download?d:y)(C)):P.readable===!0&&N(P.read)&&N(P.on)?T=new B(C):(r.File&&P instanceof File||P instanceof Object)&&(T=new v(C)),T.stream(P);(T=(()=>{var j;return!!f.WORKERS_SUPPORTED&&(j=(()=>{var H=r.URL||r.webkitURL||null,q=t.toString();return f.BLOB_URL||(f.BLOB_URL=H.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",q,")();"],{type:"text/javascript"})))})(),(j=new r.Worker(j)).onmessage=W,j.id=c++,p[j.id]=j)})()).userStep=C.step,T.userChunk=C.chunk,T.userComplete=C.complete,T.userError=C.error,C.step=N(C.step),C.chunk=N(C.chunk),C.complete=N(C.complete),C.error=N(C.error),delete C.worker,T.postMessage({input:P,config:C,workerId:T.id})},f.unparse=function(P,C){var T=!1,j=!0,H=",",q=`\r
`,L='"',K=L+L,U=!1,V=null,D=!1,Q=((()=>{if(typeof C=="object"){if(typeof C.delimiter!="string"||f.BAD_DELIMITERS.filter(function(F){return C.delimiter.indexOf(F)!==-1}).length||(H=C.delimiter),typeof C.quotes!="boolean"&&typeof C.quotes!="function"&&!Array.isArray(C.quotes)||(T=C.quotes),typeof C.skipEmptyLines!="boolean"&&typeof C.skipEmptyLines!="string"||(U=C.skipEmptyLines),typeof C.newline=="string"&&(q=C.newline),typeof C.quoteChar=="string"&&(L=C.quoteChar),typeof C.header=="boolean"&&(j=C.header),Array.isArray(C.columns)){if(C.columns.length===0)throw new Error("Option columns is empty");V=C.columns}C.escapeChar!==void 0&&(K=C.escapeChar+L),C.escapeFormulae instanceof RegExp?D=C.escapeFormulae:typeof C.escapeFormulae=="boolean"&&C.escapeFormulae&&(D=/^[=+\-@\t\r].*$/)}})(),new RegExp(b(L),"g"));if(typeof P=="string"&&(P=JSON.parse(P)),Array.isArray(P)){if(!P.length||Array.isArray(P[0]))return X(null,P,U);if(typeof P[0]=="object")return X(V||Object.keys(P[0]),P,U)}else if(typeof P=="object")return typeof P.data=="string"&&(P.data=JSON.parse(P.data)),Array.isArray(P.data)&&(P.fields||(P.fields=P.meta&&P.meta.fields||V),P.fields||(P.fields=Array.isArray(P.data[0])?P.fields:typeof P.data[0]=="object"?Object.keys(P.data[0]):[]),Array.isArray(P.data[0])||typeof P.data[0]=="object"||(P.data=[P.data])),X(P.fields||[],P.data||[],U);throw new Error("Unable to serialize unrecognized input");function X(F,J,ue){var me="",ge=(typeof F=="string"&&(F=JSON.parse(F)),typeof J=="string"&&(J=JSON.parse(J)),Array.isArray(F)&&0<F.length),ye=!Array.isArray(J[0]);if(ge&&j){for(var fe=0;fe<F.length;fe++)0<fe&&(me+=H),me+=R(F[fe],fe);0<J.length&&(me+=q)}for(var te=0;te<J.length;te++){var de=(ge?F:J[te]).length,ce=!1,re=ge?Object.keys(J[te]).length===0:J[te].length===0;if(ue&&!ge&&(ce=ue==="greedy"?J[te].join("").trim()==="":J[te].length===1&&J[te][0].length===0),ue==="greedy"&&ge){for(var Te=[],Pe=0;Pe<de;Pe++){var Ce=ye?F[Pe]:Pe;Te.push(J[te][Ce])}ce=Te.join("").trim()===""}if(!ce){for(var Me=0;Me<de;Me++){0<Me&&!re&&(me+=H);var Fe=ge&&ye?F[Me]:Me;me+=R(J[te][Fe],Me)}te<J.length-1&&(!ue||0<de&&!re)&&(me+=q)}}return me}function R(F,J){var ue,me;return F==null?"":F.constructor===Date?JSON.stringify(F).slice(1,25):(me=!1,D&&typeof F=="string"&&D.test(F)&&(F="'"+F,me=!0),ue=F.toString().replace(Q,K),(me=me||T===!0||typeof T=="function"&&T(F,J)||Array.isArray(T)&&T[J]||((ge,ye)=>{for(var fe=0;fe<ye.length;fe++)if(-1<ge.indexOf(ye[fe]))return!0;return!1})(ue,f.BAD_DELIMITERS)||-1<ue.indexOf(H)||ue.charAt(0)===" "||ue.charAt(ue.length-1)===" ")?L+ue+L:ue)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!i&&!!r.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=S,f.ParserHandle=I,f.NetworkStreamer=d,f.FileStreamer=v,f.StringStreamer=y,f.ReadableStreamStreamer=B,r.jQuery&&((a=r.jQuery).fn.parse=function(P){var C=P.config||{},T=[];return this.each(function(q){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var L=0;L<this.files.length;L++)T.push({file:this.files[L],inputElem:this,instanceConfig:a.extend({},C)})}),j(),this;function j(){if(T.length===0)N(P.complete)&&P.complete();else{var q,L,K,U,V=T[0];if(N(P.before)){var D=P.before(V.file,V.inputElem);if(typeof D=="object"){if(D.action==="abort")return q="AbortError",L=V.file,K=V.inputElem,U=D.reason,void(N(P.error)&&P.error({name:q},L,K,U));if(D.action==="skip")return void H();typeof D.config=="object"&&(V.instanceConfig=a.extend(V.instanceConfig,D.config))}else if(D==="skip")return void H()}var Q=V.instanceConfig.complete;V.instanceConfig.complete=function(X){N(Q)&&Q(X,V.file,V.inputElem),H()},f.parse(V.file,V.instanceConfig)}}function H(){T.splice(0,1),j()}}),s&&(r.onmessage=function(P){P=P.data,f.WORKER_ID===void 0&&P&&(f.WORKER_ID=P.workerId),typeof P.input=="string"?r.postMessage({workerId:f.WORKER_ID,results:f.parse(P.input,P.config),finished:!0}):(r.File&&P.input instanceof File||P.input instanceof Object)&&(P=f.parse(P.input,P.config))&&r.postMessage({workerId:f.WORKER_ID,results:P,finished:!0})}),(d.prototype=Object.create(m.prototype)).constructor=d,(v.prototype=Object.create(m.prototype)).constructor=v,(y.prototype=Object.create(y.prototype)).constructor=y,(B.prototype=Object.create(m.prototype)).constructor=B,f})})(Al)),Al.exports}var b5=y5();const vI=Xe(b5);function gI(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function T3(...e){return n=>{let t=!1;const r=e.map(a=>{const i=gI(a,n);return!t&&typeof i=="function"&&(t=!0),i});if(t)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():gI(e[a],null)}}}}function Ol(...e){return Y.useCallback(T3(...e),e)}var fs=Y.forwardRef((e,n)=>{const{children:t,...r}=e,a=Y.Children.toArray(t),i=a.find(B5);if(i){const s=i.props.children,p=a.map(c=>c===i?Y.Children.count(s)>1?Y.Children.only(null):Y.isValidElement(s)?s.props.children:null:c);return _.jsx(Wv,{...r,ref:n,children:Y.isValidElement(s)?Y.cloneElement(s,void 0,p):null})}return _.jsx(Wv,{...r,ref:n,children:t})});fs.displayName="Slot";var Wv=Y.forwardRef((e,n)=>{const{children:t,...r}=e;if(Y.isValidElement(t)){const a=w5(t),i=x5(r,t.props);return t.type!==Y.Fragment&&(i.ref=n?T3(n,a):a),Y.cloneElement(t,i)}return Y.Children.count(t)>1?Y.Children.only(null):null});Wv.displayName="SlotClone";var I5=({children:e})=>_.jsx(_.Fragment,{children:e});function B5(e){return Y.isValidElement(e)&&e.type===I5}function x5(e,n){const t={...n};for(const r in n){const a=e[r],i=n[r];/^on[A-Z]/.test(r)?a&&i?t[r]=(...p)=>{i(...p),a(...p)}:a&&(t[r]=a):r==="style"?t[r]={...a,...i}:r==="className"&&(t[r]=[a,i].filter(Boolean).join(" "))}return{...e,...t}}function w5(e){var r,a;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function E3(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(t=E3(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Ee(){for(var e,n,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&(n=E3(e))&&(r&&(r+=" "),r+=n);return r}const yI=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,bI=Ee,P5=(e,n)=>t=>{var r;if((n==null?void 0:n.variants)==null)return bI(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:a,defaultVariants:i}=n,s=Object.keys(a).map(f=>{const m=t==null?void 0:t[f],d=i==null?void 0:i[f];if(m===null)return null;const v=yI(m)||yI(d);return a[f][v]}),p=t&&Object.entries(t).reduce((f,m)=>{let[d,v]=m;return v===void 0||(f[d]=v),f},{}),c=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((f,m)=>{let{class:d,className:v,...y}=m;return Object.entries(y).every(B=>{let[I,b]=B;return Array.isArray(b)?b.includes({...i,...p}[I]):{...i,...p}[I]===b})?[...f,d,v]:f},[]);return bI(e,s,c,t==null?void 0:t.class,t==null?void 0:t.className)},ly="-",S5=e=>{const n=M5(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const p=s.split(ly);return p[0]===""&&p.length!==1&&p.shift(),j3(p,n)||W5(s)},getConflictingClassGroupIds:(s,p)=>{const c=t[s]||[];return p&&r[s]?[...c,...r[s]]:c}}},j3=(e,n)=>{var s;if(e.length===0)return n.classGroupId;const t=e[0],r=n.nextPart.get(t),a=r?j3(e.slice(1),r):void 0;if(a)return a;if(n.validators.length===0)return;const i=e.join(ly);return(s=n.validators.find(({validator:p})=>p(i)))==null?void 0:s.classGroupId},II=/^\[(.+)\]$/,W5=e=>{if(II.test(e)){const n=II.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}},M5=e=>{const{theme:n,classGroups:t}=e,r={nextPart:new Map,validators:[]};for(const a in t)Mv(t[a],r,a,n);return r},Mv=(e,n,t,r)=>{e.forEach(a=>{if(typeof a=="string"){const i=a===""?n:BI(n,a);i.classGroupId=t;return}if(typeof a=="function"){if(A5(a)){Mv(a(r),n,t,r);return}n.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([i,s])=>{Mv(s,BI(n,i),t,r)})})},BI=(e,n)=>{let t=e;return n.split(ly).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},A5=e=>e.isThemeGetter,_5=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,r=new Map;const a=(i,s)=>{t.set(i,s),n++,n>e&&(n=0,r=t,t=new Map)};return{get(i){let s=t.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return a(i,s),s},set(i,s){t.has(i)?t.set(i,s):a(i,s)}}},Av="!",_v=":",O5=_v.length,C5=e=>{const{prefix:n,experimentalParseClassName:t}=e;let r=a=>{const i=[];let s=0,p=0,c=0,f;for(let B=0;B<a.length;B++){let I=a[B];if(s===0&&p===0){if(I===_v){i.push(a.slice(c,B)),c=B+O5;continue}if(I==="/"){f=B;continue}}I==="["?s++:I==="]"?s--:I==="("?p++:I===")"&&p--}const m=i.length===0?a:a.substring(c),d=k5(m),v=d!==m,y=f&&f>c?f-c:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:d,maybePostfixModifierPosition:y}};if(n){const a=n+_v,i=r;r=s=>s.startsWith(a)?i(s.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:s,maybePostfixModifierPosition:void 0}}if(t){const a=r;r=i=>t({className:i,parseClassName:a})}return r},k5=e=>e.endsWith(Av)?e.substring(0,e.length-1):e.startsWith(Av)?e.substring(1):e,N5=e=>{const n=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let i=[];return r.forEach(s=>{s[0]==="["||n[s]?(a.push(...i.sort(),s),i=[]):i.push(s)}),a.push(...i.sort()),a}},R5=e=>({cache:_5(e.cacheSize),parseClassName:C5(e),sortModifiers:N5(e),...S5(e)}),H5=/\s+/,T5=(e,n)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=n,s=[],p=e.trim().split(H5);let c="";for(let f=p.length-1;f>=0;f-=1){const m=p[f],{isExternal:d,modifiers:v,hasImportantModifier:y,baseClassName:B,maybePostfixModifierPosition:I}=t(m);if(d){c=m+(c.length>0?" "+c:c);continue}let b=!!I,S=r(b?B.substring(0,I):B);if(!S){if(!b){c=m+(c.length>0?" "+c:c);continue}if(S=r(B),!S){c=m+(c.length>0?" "+c:c);continue}b=!1}const W=i(v).join(":"),M=y?W+Av:W,O=M+S;if(s.includes(O))continue;s.push(O);const w=a(S,b);for(let A=0;A<w.length;++A){const N=w[A];s.push(M+N)}c=m+(c.length>0?" "+c:c)}return c};function E5(){let e=0,n,t,r="";for(;e<arguments.length;)(n=arguments[e++])&&(t=D3(n))&&(r&&(r+=" "),r+=t);return r}const D3=e=>{if(typeof e=="string")return e;let n,t="";for(let r=0;r<e.length;r++)e[r]&&(n=D3(e[r]))&&(t&&(t+=" "),t+=n);return t};function j5(e,...n){let t,r,a,i=s;function s(c){const f=n.reduce((m,d)=>d(m),e());return t=R5(f),r=t.cache.get,a=t.cache.set,i=p,p(c)}function p(c){const f=r(c);if(f)return f;const m=T5(c,t);return a(c,m),m}return function(){return i(E5.apply(null,arguments))}}const Hn=e=>{const n=t=>t[e]||[];return n.isThemeGetter=!0,n},$3=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,L3=/^\((?:(\w[\w-]*):)?(.+)\)$/i,D5=/^\d+\/\d+$/,$5=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,L5=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,F5=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,q5=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,z5=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Zo=e=>D5.test(e),$e=e=>!!e&&!Number.isNaN(Number(e)),xa=e=>!!e&&Number.isInteger(Number(e)),bf=e=>e.endsWith("%")&&$e(e.slice(0,-1)),Tr=e=>$5.test(e),U5=()=>!0,V5=e=>L5.test(e)&&!F5.test(e),F3=()=>!1,G5=e=>q5.test(e),K5=e=>z5.test(e),Q5=e=>!xe(e)&&!we(e),Y5=e=>zi(e,U3,F3),xe=e=>$3.test(e),to=e=>zi(e,V3,V5),If=e=>zi(e,nk,$e),xI=e=>zi(e,q3,F3),X5=e=>zi(e,z3,K5),fl=e=>zi(e,G3,G5),we=e=>L3.test(e),Lu=e=>Ui(e,V3),Z5=e=>Ui(e,tk),wI=e=>Ui(e,q3),J5=e=>Ui(e,U3),ek=e=>Ui(e,z3),dl=e=>Ui(e,G3,!0),zi=(e,n,t)=>{const r=$3.exec(e);return r?r[1]?n(r[1]):t(r[2]):!1},Ui=(e,n,t=!1)=>{const r=L3.exec(e);return r?r[1]?n(r[1]):t:!1},q3=e=>e==="position"||e==="percentage",z3=e=>e==="image"||e==="url",U3=e=>e==="length"||e==="size"||e==="bg-size",V3=e=>e==="length",nk=e=>e==="number",tk=e=>e==="family-name",G3=e=>e==="shadow",rk=()=>{const e=Hn("color"),n=Hn("font"),t=Hn("text"),r=Hn("font-weight"),a=Hn("tracking"),i=Hn("leading"),s=Hn("breakpoint"),p=Hn("container"),c=Hn("spacing"),f=Hn("radius"),m=Hn("shadow"),d=Hn("inset-shadow"),v=Hn("text-shadow"),y=Hn("drop-shadow"),B=Hn("blur"),I=Hn("perspective"),b=Hn("aspect"),S=Hn("ease"),W=Hn("animate"),M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...O(),we,xe],A=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto","contain","none"],P=()=>[we,xe,c],C=()=>[Zo,"full","auto",...P()],T=()=>[xa,"none","subgrid",we,xe],j=()=>["auto",{span:["full",xa,we,xe]},xa,we,xe],H=()=>[xa,"auto",we,xe],q=()=>["auto","min","max","fr",we,xe],L=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],K=()=>["start","end","center","stretch","center-safe","end-safe"],U=()=>["auto",...P()],V=()=>[Zo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],D=()=>[e,we,xe],Q=()=>[...O(),wI,xI,{position:[we,xe]}],X=()=>["no-repeat",{repeat:["","x","y","space","round"]}],R=()=>["auto","cover","contain",J5,Y5,{size:[we,xe]}],F=()=>[bf,Lu,to],J=()=>["","none","full",f,we,xe],ue=()=>["",$e,Lu,to],me=()=>["solid","dashed","dotted","double"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ye=()=>[$e,bf,wI,xI],fe=()=>["","none",B,we,xe],te=()=>["none",$e,we,xe],de=()=>["none",$e,we,xe],ce=()=>[$e,we,xe],re=()=>[Zo,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Tr],breakpoint:[Tr],color:[U5],container:[Tr],"drop-shadow":[Tr],ease:["in","out","in-out"],font:[Q5],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Tr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Tr],shadow:[Tr],spacing:["px",$e],text:[Tr],"text-shadow":[Tr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Zo,xe,we,b]}],container:["container"],columns:[{columns:[$e,xe,we,p]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[xa,"auto",we,xe]}],basis:[{basis:[Zo,"full","auto",p,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,Zo,"auto","initial","none",xe]}],grow:[{grow:["",$e,we,xe]}],shrink:[{shrink:["",$e,we,xe]}],order:[{order:[xa,"first","last","none",we,xe]}],"grid-cols":[{"grid-cols":T()}],"col-start-end":[{col:j()}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":T()}],"row-start-end":[{row:j()}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":q()}],"auto-rows":[{"auto-rows":q()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...L(),"normal"]}],"justify-items":[{"justify-items":[...K(),"normal"]}],"justify-self":[{"justify-self":["auto",...K()]}],"align-content":[{content:["normal",...L()]}],"align-items":[{items:[...K(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...K(),{baseline:["","last"]}]}],"place-content":[{"place-content":L()}],"place-items":[{"place-items":[...K(),"baseline"]}],"place-self":[{"place-self":["auto",...K()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:U()}],mx:[{mx:U()}],my:[{my:U()}],ms:[{ms:U()}],me:[{me:U()}],mt:[{mt:U()}],mr:[{mr:U()}],mb:[{mb:U()}],ml:[{ml:U()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:V()}],w:[{w:[p,"screen",...V()]}],"min-w":[{"min-w":[p,"screen","none",...V()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[s]},...V()]}],h:[{h:["screen",...V()]}],"min-h":[{"min-h":["screen","none",...V()]}],"max-h":[{"max-h":["screen",...V()]}],"font-size":[{text:["base",t,Lu,to]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,we,If]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",bf,xe]}],"font-family":[{font:[Z5,xe,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,we,xe]}],"line-clamp":[{"line-clamp":[$e,"none",we,If]}],leading:[{leading:[i,...P()]}],"list-image":[{"list-image":["none",we,xe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",we,xe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...me(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",we,to]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[$e,"auto",we,xe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we,xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we,xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Q()}],"bg-repeat":[{bg:X()}],"bg-size":[{bg:R()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xa,we,xe],radial:["",we,xe],conic:[xa,we,xe]},ek,X5]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:F()}],"gradient-via-pos":[{via:F()}],"gradient-to-pos":[{to:F()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:J()}],"rounded-s":[{"rounded-s":J()}],"rounded-e":[{"rounded-e":J()}],"rounded-t":[{"rounded-t":J()}],"rounded-r":[{"rounded-r":J()}],"rounded-b":[{"rounded-b":J()}],"rounded-l":[{"rounded-l":J()}],"rounded-ss":[{"rounded-ss":J()}],"rounded-se":[{"rounded-se":J()}],"rounded-ee":[{"rounded-ee":J()}],"rounded-es":[{"rounded-es":J()}],"rounded-tl":[{"rounded-tl":J()}],"rounded-tr":[{"rounded-tr":J()}],"rounded-br":[{"rounded-br":J()}],"rounded-bl":[{"rounded-bl":J()}],"border-w":[{border:ue()}],"border-w-x":[{"border-x":ue()}],"border-w-y":[{"border-y":ue()}],"border-w-s":[{"border-s":ue()}],"border-w-e":[{"border-e":ue()}],"border-w-t":[{"border-t":ue()}],"border-w-r":[{"border-r":ue()}],"border-w-b":[{"border-b":ue()}],"border-w-l":[{"border-l":ue()}],"divide-x":[{"divide-x":ue()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ue()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...me(),"hidden","none"]}],"divide-style":[{divide:[...me(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...me(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,we,xe]}],"outline-w":[{outline:["",$e,Lu,to]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",m,dl,fl]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",d,dl,fl]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[$e,to]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":ue()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",v,dl,fl]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[$e,we,xe]}],"mix-blend":[{"mix-blend":[...ge(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ge()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":ye()}],"mask-image-linear-to-pos":[{"mask-linear-to":ye()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":ye()}],"mask-image-t-to-pos":[{"mask-t-to":ye()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":ye()}],"mask-image-r-to-pos":[{"mask-r-to":ye()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":ye()}],"mask-image-b-to-pos":[{"mask-b-to":ye()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":ye()}],"mask-image-l-to-pos":[{"mask-l-to":ye()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":ye()}],"mask-image-x-to-pos":[{"mask-x-to":ye()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":ye()}],"mask-image-y-to-pos":[{"mask-y-to":ye()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[we,xe]}],"mask-image-radial-from-pos":[{"mask-radial-from":ye()}],"mask-image-radial-to-pos":[{"mask-radial-to":ye()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":O()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":ye()}],"mask-image-conic-to-pos":[{"mask-conic-to":ye()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Q()}],"mask-repeat":[{mask:X()}],"mask-size":[{mask:R()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",we,xe]}],filter:[{filter:["","none",we,xe]}],blur:[{blur:fe()}],brightness:[{brightness:[$e,we,xe]}],contrast:[{contrast:[$e,we,xe]}],"drop-shadow":[{"drop-shadow":["","none",y,dl,fl]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",$e,we,xe]}],"hue-rotate":[{"hue-rotate":[$e,we,xe]}],invert:[{invert:["",$e,we,xe]}],saturate:[{saturate:[$e,we,xe]}],sepia:[{sepia:["",$e,we,xe]}],"backdrop-filter":[{"backdrop-filter":["","none",we,xe]}],"backdrop-blur":[{"backdrop-blur":fe()}],"backdrop-brightness":[{"backdrop-brightness":[$e,we,xe]}],"backdrop-contrast":[{"backdrop-contrast":[$e,we,xe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,we,xe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,we,xe]}],"backdrop-invert":[{"backdrop-invert":["",$e,we,xe]}],"backdrop-opacity":[{"backdrop-opacity":[$e,we,xe]}],"backdrop-saturate":[{"backdrop-saturate":[$e,we,xe]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,we,xe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",we,xe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",we,xe]}],ease:[{ease:["linear","initial",S,we,xe]}],delay:[{delay:[$e,we,xe]}],animate:[{animate:["none",W,we,xe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,we,xe]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:te()}],"rotate-x":[{"rotate-x":te()}],"rotate-y":[{"rotate-y":te()}],"rotate-z":[{"rotate-z":te()}],scale:[{scale:de()}],"scale-x":[{"scale-x":de()}],"scale-y":[{"scale-y":de()}],"scale-z":[{"scale-z":de()}],"scale-3d":["scale-3d"],skew:[{skew:ce()}],"skew-x":[{"skew-x":ce()}],"skew-y":[{"skew-y":ce()}],transform:[{transform:[we,xe,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:re()}],"translate-x":[{"translate-x":re()}],"translate-y":[{"translate-y":re()}],"translate-z":[{"translate-z":re()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we,xe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we,xe]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[$e,Lu,to,If]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},ak=j5(rk);function pt(...e){return ak(Ee(e))}const ok=P5("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Bf({className:e,variant:n,size:t,asChild:r=!1,...a}){const i=r?fs:"button";return _.jsx(i,{"data-slot":"button",className:pt(ok({variant:n,size:t,className:e})),...a})}function zt({className:e,...n}){return _.jsx("div",{"data-slot":"card",className:pt("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...n})}function jc({className:e,...n}){return _.jsx("div",{"data-slot":"card-header",className:pt("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...n})}function Dc({className:e,...n}){return _.jsx("h4",{"data-slot":"card-title",className:pt("leading-none",e),...n})}function Ut({className:e,...n}){return _.jsx("div",{"data-slot":"card-content",className:pt("px-6 [&:last-child]:pb-6",e),...n})}function zr(e,n,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e==null||e(a),t===!1||!a.defaultPrevented)return n==null?void 0:n(a)}}function cy(e,n=[]){let t=[];function r(i,s){const p=Y.createContext(s),c=t.length;t=[...t,s];const f=d=>{var S;const{scope:v,children:y,...B}=d,I=((S=v==null?void 0:v[e])==null?void 0:S[c])||p,b=Y.useMemo(()=>B,Object.values(B));return _.jsx(I.Provider,{value:b,children:y})};f.displayName=i+"Provider";function m(d,v){var I;const y=((I=v==null?void 0:v[e])==null?void 0:I[c])||p,B=Y.useContext(y);if(B)return B;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${i}\``)}return[f,m]}const a=()=>{const i=t.map(s=>Y.createContext(s));return function(p){const c=(p==null?void 0:p[e])||i;return Y.useMemo(()=>({[`__scope${e}`]:{...p,[e]:c}}),[p,c])}};return a.scopeName=e,[r,ik(a,...n)]}function ik(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const s=r.reduce((p,{useScope:c,scopeName:f})=>{const d=c(i)[`__scope${f}`];return{...p,...d}},{});return Y.useMemo(()=>({[`__scope${n.scopeName}`]:s}),[s])}};return t.scopeName=n.scopeName,t}function uk(e){const n=e+"CollectionProvider",[t,r]=cy(n),[a,i]=t(n,{collectionRef:{current:null},itemMap:new Map}),s=y=>{const{scope:B,children:I}=y,b=E.useRef(null),S=E.useRef(new Map).current;return _.jsx(a,{scope:B,itemMap:S,collectionRef:b,children:I})};s.displayName=n;const p=e+"CollectionSlot",c=E.forwardRef((y,B)=>{const{scope:I,children:b}=y,S=i(p,I),W=Ol(B,S.collectionRef);return _.jsx(fs,{ref:W,children:b})});c.displayName=p;const f=e+"CollectionItemSlot",m="data-radix-collection-item",d=E.forwardRef((y,B)=>{const{scope:I,children:b,...S}=y,W=E.useRef(null),M=Ol(B,W),O=i(f,I);return E.useEffect(()=>(O.itemMap.set(W,{ref:W,...S}),()=>void O.itemMap.delete(W))),_.jsx(fs,{[m]:"",ref:M,children:b})});d.displayName=f;function v(y){const B=i(e+"CollectionConsumer",y);return E.useCallback(()=>{const b=B.collectionRef.current;if(!b)return[];const S=Array.from(b.querySelectorAll(`[${m}]`));return Array.from(B.itemMap.values()).sort((O,w)=>S.indexOf(O.ref.current)-S.indexOf(w.ref.current))},[B.collectionRef,B.itemMap])}return[{Provider:s,Slot:c,ItemSlot:d},v,r]}var Ov=globalThis!=null&&globalThis.document?Y.useLayoutEffect:()=>{},sk=v5.useId||(()=>{}),pk=0;function K3(e){const[n,t]=Y.useState(sk());return Ov(()=>{t(r=>r??String(pk++))},[e]),e||(n?`radix-${n}`:"")}H3();var lk=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Vi=lk.reduce((e,n)=>{const t=Y.forwardRef((r,a)=>{const{asChild:i,...s}=r,p=i?fs:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),_.jsx(p,{...s,ref:a})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function fy(e){const n=Y.useRef(e);return Y.useEffect(()=>{n.current=e}),Y.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}function Q3({prop:e,defaultProp:n,onChange:t=()=>{}}){const[r,a]=ck({defaultProp:n,onChange:t}),i=e!==void 0,s=i?e:r,p=fy(t),c=Y.useCallback(f=>{if(i){const d=typeof f=="function"?f(e):f;d!==e&&p(d)}else a(f)},[i,e,a,p]);return[s,c]}function ck({defaultProp:e,onChange:n}){const t=Y.useState(e),[r]=t,a=Y.useRef(r),i=fy(n);return Y.useEffect(()=>{a.current!==r&&(i(r),a.current=r)},[r,a,i]),t}var fk=Y.createContext(void 0);function Y3(e){const n=Y.useContext(fk);return e||n||"ltr"}var xf="rovingFocusGroup.onEntryFocus",dk={bubbles:!1,cancelable:!0},$c="RovingFocusGroup",[Cv,X3,mk]=uk($c),[hk,Z3]=cy($c,[mk]),[vk,gk]=hk($c),J3=Y.forwardRef((e,n)=>_.jsx(Cv.Provider,{scope:e.__scopeRovingFocusGroup,children:_.jsx(Cv.Slot,{scope:e.__scopeRovingFocusGroup,children:_.jsx(yk,{...e,ref:n})})}));J3.displayName=$c;var yk=Y.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,orientation:r,loop:a=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:c,onEntryFocus:f,preventScrollOnEntryFocus:m=!1,...d}=e,v=Y.useRef(null),y=Ol(n,v),B=Y3(i),[I=null,b]=Q3({prop:s,defaultProp:p,onChange:c}),[S,W]=Y.useState(!1),M=fy(f),O=X3(t),w=Y.useRef(!1),[A,N]=Y.useState(0);return Y.useEffect(()=>{const P=v.current;if(P)return P.addEventListener(xf,M),()=>P.removeEventListener(xf,M)},[M]),_.jsx(vk,{scope:t,orientation:r,dir:B,loop:a,currentTabStopId:I,onItemFocus:Y.useCallback(P=>b(P),[b]),onItemShiftTab:Y.useCallback(()=>W(!0),[]),onFocusableItemAdd:Y.useCallback(()=>N(P=>P+1),[]),onFocusableItemRemove:Y.useCallback(()=>N(P=>P-1),[]),children:_.jsx(Vi.div,{tabIndex:S||A===0?-1:0,"data-orientation":r,...d,ref:y,style:{outline:"none",...e.style},onMouseDown:zr(e.onMouseDown,()=>{w.current=!0}),onFocus:zr(e.onFocus,P=>{const C=!w.current;if(P.target===P.currentTarget&&C&&!S){const T=new CustomEvent(xf,dk);if(P.currentTarget.dispatchEvent(T),!T.defaultPrevented){const j=O().filter(U=>U.focusable),H=j.find(U=>U.active),q=j.find(U=>U.id===I),K=[H,q,...j].filter(Boolean).map(U=>U.ref.current);tW(K,m)}}w.current=!1}),onBlur:zr(e.onBlur,()=>W(!1))})})}),eW="RovingFocusGroupItem",nW=Y.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,focusable:r=!0,active:a=!1,tabStopId:i,...s}=e,p=K3(),c=i||p,f=gk(eW,t),m=f.currentTabStopId===c,d=X3(t),{onFocusableItemAdd:v,onFocusableItemRemove:y}=f;return Y.useEffect(()=>{if(r)return v(),()=>y()},[r,v,y]),_.jsx(Cv.ItemSlot,{scope:t,id:c,focusable:r,active:a,children:_.jsx(Vi.span,{tabIndex:m?0:-1,"data-orientation":f.orientation,...s,ref:n,onMouseDown:zr(e.onMouseDown,B=>{r?f.onItemFocus(c):B.preventDefault()}),onFocus:zr(e.onFocus,()=>f.onItemFocus(c)),onKeyDown:zr(e.onKeyDown,B=>{if(B.key==="Tab"&&B.shiftKey){f.onItemShiftTab();return}if(B.target!==B.currentTarget)return;const I=Bk(B,f.orientation,f.dir);if(I!==void 0){if(B.metaKey||B.ctrlKey||B.altKey||B.shiftKey)return;B.preventDefault();let S=d().filter(W=>W.focusable).map(W=>W.ref.current);if(I==="last")S.reverse();else if(I==="prev"||I==="next"){I==="prev"&&S.reverse();const W=S.indexOf(B.currentTarget);S=f.loop?xk(S,W+1):S.slice(W+1)}setTimeout(()=>tW(S))}})})})});nW.displayName=eW;var bk={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Ik(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Bk(e,n,t){const r=Ik(e.key,t);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return bk[r]}function tW(e,n=!1){const t=document.activeElement;for(const r of e)if(r===t||(r.focus({preventScroll:n}),document.activeElement!==t))return}function xk(e,n){return e.map((t,r)=>e[(n+r)%e.length])}var wk=J3,Pk=nW;function Sk(e,n){return Y.useReducer((t,r)=>n[t][r]??t,e)}var rW=e=>{const{present:n,children:t}=e,r=Wk(n),a=typeof t=="function"?t({present:r.isPresent}):Y.Children.only(t),i=Ol(r.ref,Mk(a));return typeof t=="function"||r.isPresent?Y.cloneElement(a,{ref:i}):null};rW.displayName="Presence";function Wk(e){const[n,t]=Y.useState(),r=Y.useRef({}),a=Y.useRef(e),i=Y.useRef("none"),s=e?"mounted":"unmounted",[p,c]=Sk(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Y.useEffect(()=>{const f=ml(r.current);i.current=p==="mounted"?f:"none"},[p]),Ov(()=>{const f=r.current,m=a.current;if(m!==e){const v=i.current,y=ml(f);e?c("MOUNT"):y==="none"||(f==null?void 0:f.display)==="none"?c("UNMOUNT"):c(m&&v!==y?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,c]),Ov(()=>{if(n){let f;const m=n.ownerDocument.defaultView??window,d=y=>{const I=ml(r.current).includes(y.animationName);if(y.target===n&&I&&(c("ANIMATION_END"),!a.current)){const b=n.style.animationFillMode;n.style.animationFillMode="forwards",f=m.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=b)})}},v=y=>{y.target===n&&(i.current=ml(r.current))};return n.addEventListener("animationstart",v),n.addEventListener("animationcancel",d),n.addEventListener("animationend",d),()=>{m.clearTimeout(f),n.removeEventListener("animationstart",v),n.removeEventListener("animationcancel",d),n.removeEventListener("animationend",d)}}else c("ANIMATION_END")},[n,c]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:Y.useCallback(f=>{f&&(r.current=getComputedStyle(f)),t(f)},[])}}function ml(e){return(e==null?void 0:e.animationName)||"none"}function Mk(e){var r,a;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}var dy="Tabs",[Ak]=cy(dy,[Z3]),aW=Z3(),[_k,my]=Ak(dy),oW=Y.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,onValueChange:a,defaultValue:i,orientation:s="horizontal",dir:p,activationMode:c="automatic",...f}=e,m=Y3(p),[d,v]=Q3({prop:r,onChange:a,defaultProp:i});return _.jsx(_k,{scope:t,baseId:K3(),value:d,onValueChange:v,orientation:s,dir:m,activationMode:c,children:_.jsx(Vi.div,{dir:m,"data-orientation":s,...f,ref:n})})});oW.displayName=dy;var iW="TabsList",uW=Y.forwardRef((e,n)=>{const{__scopeTabs:t,loop:r=!0,...a}=e,i=my(iW,t),s=aW(t);return _.jsx(wk,{asChild:!0,...s,orientation:i.orientation,dir:i.dir,loop:r,children:_.jsx(Vi.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:n})})});uW.displayName=iW;var sW="TabsTrigger",pW=Y.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,disabled:a=!1,...i}=e,s=my(sW,t),p=aW(t),c=fW(s.baseId,r),f=dW(s.baseId,r),m=r===s.value;return _.jsx(Pk,{asChild:!0,...p,focusable:!a,active:m,children:_.jsx(Vi.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":f,"data-state":m?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...i,ref:n,onMouseDown:zr(e.onMouseDown,d=>{!a&&d.button===0&&d.ctrlKey===!1?s.onValueChange(r):d.preventDefault()}),onKeyDown:zr(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&s.onValueChange(r)}),onFocus:zr(e.onFocus,()=>{const d=s.activationMode!=="manual";!m&&!a&&d&&s.onValueChange(r)})})})});pW.displayName=sW;var lW="TabsContent",cW=Y.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,forceMount:a,children:i,...s}=e,p=my(lW,t),c=fW(p.baseId,r),f=dW(p.baseId,r),m=r===p.value,d=Y.useRef(m);return Y.useEffect(()=>{const v=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(v)},[]),_.jsx(rW,{present:a||m,children:({present:v})=>_.jsx(Vi.div,{"data-state":m?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":c,hidden:!v,id:f,tabIndex:0,...s,ref:n,style:{...e.style,animationDuration:d.current?"0s":void 0},children:v&&i})})});cW.displayName=lW;function fW(e,n){return`${e}-trigger-${n}`}function dW(e,n){return`${e}-content-${n}`}var Ok=oW,Ck=uW,kk=pW,Nk=cW;function Rk({className:e,...n}){return _.jsx(Ok,{"data-slot":"tabs",className:pt("flex flex-col gap-2",e),...n})}function Hk({className:e,...n}){return _.jsx(Ck,{"data-slot":"tabs-list",className:pt("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",e),...n})}function PI({className:e,...n}){return _.jsx(kk,{"data-slot":"tabs-trigger",className:pt("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...n})}function SI({className:e,...n}){return _.jsx(Nk,{"data-slot":"tabs-content",className:pt("flex-1 outline-none",e),...n})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ek=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,t,r)=>r?r.toUpperCase():t.toLowerCase()),WI=e=>{const n=Ek(e);return n.charAt(0).toUpperCase()+n.slice(1)},mW=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=Y.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:s,...p},c)=>Y.createElement("svg",{ref:c,...jk,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:mW("lucide",a),...p},[...s.map(([f,m])=>Y.createElement(f,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=(e,n)=>{const t=Y.forwardRef(({className:r,...a},i)=>Y.createElement(Dk,{ref:i,iconNode:n,className:mW(`lucide-${Tk(WI(e))}`,`lucide-${e}`,r),...a}));return t.displayName=WI(e),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],Lk=Qt("arrow-up-down",$k);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],qk=Qt("bot",Fk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Uk=Qt("chevron-down",zk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],MI=Qt("chevron-left",Vk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],kv=Qt("chevron-right",Gk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Qk=Qt("circle-plus",Kk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Xk=Qt("download",Yk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Jk=Qt("trash-2",Zk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],nN=Qt("trending-up",eN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],rN=Qt("triangle-alert",tN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],oN=Qt("users",aN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],uN=Qt("x",iN);function kn(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function Wn(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}function Cl(e,n){const t=kn(e);return isNaN(n)?Wn(e,NaN):(n&&t.setDate(t.getDate()+n),t)}const hW=6048e5,sN=864e5,pN=6e4,lN=36e5,cN=1e3;let fN={};function Gi(){return fN}function Na(e,n){var p,c,f,m;const t=Gi(),r=(n==null?void 0:n.weekStartsOn)??((c=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((m=(f=t.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??0,a=kn(e),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function mi(e){return Na(e,{weekStartsOn:1})}function vW(e){const n=kn(e),t=n.getFullYear(),r=Wn(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const a=mi(r),i=Wn(e,0);i.setFullYear(t,0,4),i.setHours(0,0,0,0);const s=mi(i);return n.getTime()>=a.getTime()?t+1:n.getTime()>=s.getTime()?t:t-1}function AI(e){const n=kn(e);return n.setHours(0,0,0,0),n}function kl(e){const n=kn(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function dN(e,n){const t=AI(e),r=AI(n),a=+t-kl(t),i=+r-kl(r);return Math.round((a-i)/sN)}function mN(e){const n=vW(e),t=Wn(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),mi(t)}function hN(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function vN(e){if(!hN(e)&&typeof e!="number")return!1;const n=kn(e);return!isNaN(Number(n))}function gN(e){const n=kn(e),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function yN(e){const n=kn(e);return n.setDate(1),n.setHours(0,0,0,0),n}function bN(e){const n=kn(e),t=Wn(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const IN={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},BN=(e,n,t)=>{let r;const a=IN[e];return typeof a=="string"?r=a:n===1?r=a.one:r=a.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function wf(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const xN={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},wN={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},PN={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},SN={date:wf({formats:xN,defaultWidth:"full"}),time:wf({formats:wN,defaultWidth:"full"}),dateTime:wf({formats:PN,defaultWidth:"full"})},WN={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},MN=(e,n,t,r)=>WN[e];function Fu(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,p=t!=null&&t.width?String(t.width):s;a=e.formattingValues[p]||e.formattingValues[s]}else{const s=e.defaultWidth,p=t!=null&&t.width?String(t.width):e.defaultWidth;a=e.values[p]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(n):n;return a[i]}}const AN={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},_N={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ON={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},CN={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},kN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},NN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},RN=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},HN={ordinalNumber:RN,era:Fu({values:AN,defaultWidth:"wide"}),quarter:Fu({values:_N,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Fu({values:ON,defaultWidth:"wide"}),day:Fu({values:CN,defaultWidth:"wide"}),dayPeriod:Fu({values:kN,defaultWidth:"wide",formattingValues:NN,defaultFormattingWidth:"wide"})};function qu(e){return(n,t={})=>{const r=t.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=n.match(a);if(!i)return null;const s=i[0],p=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(p)?EN(p,d=>d.test(s)):TN(p,d=>d.test(s));let f;f=e.valueCallback?e.valueCallback(c):c,f=t.valueCallback?t.valueCallback(f):f;const m=n.slice(s.length);return{value:f,rest:m}}}function TN(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function EN(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function jN(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const a=r[0],i=n.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=t.valueCallback?t.valueCallback(s):s;const p=n.slice(a.length);return{value:s,rest:p}}}const DN=/^(\d+)(th|st|nd|rd)?/i,$N=/\d+/i,LN={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},FN={any:[/^b/i,/^(a|c)/i]},qN={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},zN={any:[/1/i,/2/i,/3/i,/4/i]},UN={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},VN={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},GN={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},KN={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},QN={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},YN={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},XN={ordinalNumber:jN({matchPattern:DN,parsePattern:$N,valueCallback:e=>parseInt(e,10)}),era:qu({matchPatterns:LN,defaultMatchWidth:"wide",parsePatterns:FN,defaultParseWidth:"any"}),quarter:qu({matchPatterns:qN,defaultMatchWidth:"wide",parsePatterns:zN,defaultParseWidth:"any",valueCallback:e=>e+1}),month:qu({matchPatterns:UN,defaultMatchWidth:"wide",parsePatterns:VN,defaultParseWidth:"any"}),day:qu({matchPatterns:GN,defaultMatchWidth:"wide",parsePatterns:KN,defaultParseWidth:"any"}),dayPeriod:qu({matchPatterns:QN,defaultMatchWidth:"any",parsePatterns:YN,defaultParseWidth:"any"})},gW={code:"en-US",formatDistance:BN,formatLong:SN,formatRelative:MN,localize:HN,match:XN,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ZN(e){const n=kn(e);return dN(n,bN(n))+1}function yW(e){const n=kn(e),t=+mi(n)-+mN(n);return Math.round(t/hW)+1}function hy(e,n){var m,d,v,y;const t=kn(e),r=t.getFullYear(),a=Gi(),i=(n==null?void 0:n.firstWeekContainsDate)??((d=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??a.firstWeekContainsDate??((y=(v=a.locale)==null?void 0:v.options)==null?void 0:y.firstWeekContainsDate)??1,s=Wn(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const p=Na(s,n),c=Wn(e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const f=Na(c,n);return t.getTime()>=p.getTime()?r+1:t.getTime()>=f.getTime()?r:r-1}function JN(e,n){var p,c,f,m;const t=Gi(),r=(n==null?void 0:n.firstWeekContainsDate)??((c=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:c.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(f=t.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,a=hy(e,n),i=Wn(e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),Na(i,n)}function bW(e,n){const t=kn(e),r=+Na(t,n)-+JN(t,n);return Math.round(r/hW)+1}function Je(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const wa={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return Je(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):Je(t+1,2)},d(e,n){return Je(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return Je(e.getHours()%12||12,n.length)},H(e,n){return Je(e.getHours(),n.length)},m(e,n){return Je(e.getMinutes(),n.length)},s(e,n){return Je(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,t-3));return Je(a,n.length)}},Jo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},_I={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return t.ordinalNumber(a,{unit:"year"})}return wa.y(e,n)},Y:function(e,n,t,r){const a=hy(e,r),i=a>0?a:1-a;if(n==="YY"){const s=i%100;return Je(s,2)}return n==="Yo"?t.ordinalNumber(i,{unit:"year"}):Je(i,n.length)},R:function(e,n){const t=vW(e);return Je(t,n.length)},u:function(e,n){const t=e.getFullYear();return Je(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return Je(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return Je(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return wa.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return Je(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const a=bW(e,r);return n==="wo"?t.ordinalNumber(a,{unit:"week"}):Je(a,n.length)},I:function(e,n,t){const r=yW(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):Je(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):wa.d(e,n)},D:function(e,n,t){const r=ZN(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):Je(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(i);case"ee":return Je(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(i);case"cc":return Je(i,n.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),a=r===0?7:r;switch(n){case"i":return String(a);case"ii":return Je(a,n.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const a=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let a;switch(r===12?a=Jo.noon:r===0?a=Jo.midnight:a=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let a;switch(r>=17?a=Jo.evening:r>=12?a=Jo.afternoon:r>=4?a=Jo.morning:a=Jo.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return wa.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):wa.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):Je(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):Je(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):wa.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):wa.s(e,n)},S:function(e,n){return wa.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return CI(r);case"XXXX":case"XX":return io(r);case"XXXXX":case"XXX":default:return io(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return CI(r);case"xxxx":case"xx":return io(r);case"xxxxx":case"xxx":default:return io(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+OI(r,":");case"OOOO":default:return"GMT"+io(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+OI(r,":");case"zzzz":default:return"GMT"+io(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return Je(r,n.length)},T:function(e,n,t){const r=e.getTime();return Je(r,n.length)}};function OI(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?t+String(a):t+String(a)+n+Je(i,2)}function CI(e,n){return e%60===0?(e>0?"-":"+")+Je(Math.abs(e)/60,2):io(e,n)}function io(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),a=Je(Math.trunc(r/60),2),i=Je(r%60,2);return t+a+n+i}const kI=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},IW=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},eR=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],a=t[2];if(!a)return kI(e,n);let i;switch(r){case"P":i=n.dateTime({width:"short"});break;case"PP":i=n.dateTime({width:"medium"});break;case"PPP":i=n.dateTime({width:"long"});break;case"PPPP":default:i=n.dateTime({width:"full"});break}return i.replace("{{date}}",kI(r,n)).replace("{{time}}",IW(a,n))},Nv={p:IW,P:eR},nR=/^D+$/,tR=/^Y+$/,rR=["D","DD","YY","YYYY"];function BW(e){return nR.test(e)}function xW(e){return tR.test(e)}function Rv(e,n,t){const r=aR(e,n,t);if(console.warn(r),rR.includes(e))throw new RangeError(r)}function aR(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const oR=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,iR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,uR=/^'([^]*?)'?$/,sR=/''/g,pR=/[a-zA-Z]/;function lR(e,n,t){var m,d,v,y;const r=Gi(),a=r.locale??gW,i=r.firstWeekContainsDate??((d=(m=r.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??1,s=r.weekStartsOn??((y=(v=r.locale)==null?void 0:v.options)==null?void 0:y.weekStartsOn)??0,p=kn(e);if(!vN(p))throw new RangeError("Invalid time value");let c=n.match(iR).map(B=>{const I=B[0];if(I==="p"||I==="P"){const b=Nv[I];return b(B,a.formatLong)}return B}).join("").match(oR).map(B=>{if(B==="''")return{isToken:!1,value:"'"};const I=B[0];if(I==="'")return{isToken:!1,value:cR(B)};if(_I[I])return{isToken:!0,value:B};if(I.match(pR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:B}});a.localize.preprocessor&&(c=a.localize.preprocessor(p,c));const f={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return c.map(B=>{if(!B.isToken)return B.value;const I=B.value;(xW(I)||BW(I))&&Rv(I,n,String(e));const b=_I[I[0]];return b(p,I,a.localize,f)}).join("")}function cR(e){const n=e.match(uR);return n?n[1].replace(sR,"'"):e}function fR(){return Object.assign({},Gi())}function dR(e){let t=kn(e).getDay();return t===0&&(t=7),t}function mR(e,n){const t=n instanceof Date?Wn(n,0):new n(0);return t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),t.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t}const hR=10;class wW{constructor(){ve(this,"subPriority",0)}validate(n,t){return!0}}class vR extends wW{constructor(n,t,r,a,i){super(),this.value=n,this.validateValue=t,this.setValue=r,this.priority=a,i&&(this.subPriority=i)}validate(n,t){return this.validateValue(n,this.value,t)}set(n,t,r){return this.setValue(n,t,this.value,r)}}class gR extends wW{constructor(){super(...arguments);ve(this,"priority",hR);ve(this,"subPriority",-1)}set(t,r){return r.timestampIsSet?t:Wn(t,mR(t,Date))}}class Ge{run(n,t,r,a){const i=this.parse(n,t,r,a);return i?{setter:new vR(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(n,t,r){return!0}}class yR extends Ge{constructor(){super(...arguments);ve(this,"priority",140);ve(this,"incompatibleTokens",["R","u","t","T"])}parse(t,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(t,{width:"abbreviated"})||a.era(t,{width:"narrow"});case"GGGGG":return a.era(t,{width:"narrow"});case"GGGG":default:return a.era(t,{width:"wide"})||a.era(t,{width:"abbreviated"})||a.era(t,{width:"narrow"})}}set(t,r,a){return r.era=a,t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}const Mn={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},gr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function An(e,n){return e&&{value:n(e.value),rest:e.rest}}function vn(e,n){const t=n.match(e);return t?{value:parseInt(t[0],10),rest:n.slice(t[0].length)}:null}function yr(e,n){const t=n.match(e);if(!t)return null;if(t[0]==="Z")return{value:0,rest:n.slice(1)};const r=t[1]==="+"?1:-1,a=t[2]?parseInt(t[2],10):0,i=t[3]?parseInt(t[3],10):0,s=t[5]?parseInt(t[5],10):0;return{value:r*(a*lN+i*pN+s*cN),rest:n.slice(t[0].length)}}function PW(e){return vn(Mn.anyDigitsSigned,e)}function Bn(e,n){switch(e){case 1:return vn(Mn.singleDigit,n);case 2:return vn(Mn.twoDigits,n);case 3:return vn(Mn.threeDigits,n);case 4:return vn(Mn.fourDigits,n);default:return vn(new RegExp("^\\d{1,"+e+"}"),n)}}function Nl(e,n){switch(e){case 1:return vn(Mn.singleDigitSigned,n);case 2:return vn(Mn.twoDigitsSigned,n);case 3:return vn(Mn.threeDigitsSigned,n);case 4:return vn(Mn.fourDigitsSigned,n);default:return vn(new RegExp("^-?\\d{1,"+e+"}"),n)}}function vy(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function SW(e,n){const t=n>0,r=t?n:1-n;let a;if(r<=50)a=e||100;else{const i=r+50,s=Math.trunc(i/100)*100,p=e>=i%100;a=e+s-(p?100:0)}return t?a:1-a}function WW(e){return e%400===0||e%4===0&&e%100!==0}class bR extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(t,r,a){const i=s=>({year:s,isTwoDigitYear:r==="yy"});switch(r){case"y":return An(Bn(4,t),i);case"yo":return An(a.ordinalNumber(t,{unit:"year"}),i);default:return An(Bn(r.length,t),i)}}validate(t,r){return r.isTwoDigitYear||r.year>0}set(t,r,a){const i=t.getFullYear();if(a.isTwoDigitYear){const p=SW(a.year,i);return t.setFullYear(p,0,1),t.setHours(0,0,0,0),t}const s=!("era"in r)||r.era===1?a.year:1-a.year;return t.setFullYear(s,0,1),t.setHours(0,0,0,0),t}}class IR extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(t,r,a){const i=s=>({year:s,isTwoDigitYear:r==="YY"});switch(r){case"Y":return An(Bn(4,t),i);case"Yo":return An(a.ordinalNumber(t,{unit:"year"}),i);default:return An(Bn(r.length,t),i)}}validate(t,r){return r.isTwoDigitYear||r.year>0}set(t,r,a,i){const s=hy(t,i);if(a.isTwoDigitYear){const c=SW(a.year,s);return t.setFullYear(c,0,i.firstWeekContainsDate),t.setHours(0,0,0,0),Na(t,i)}const p=!("era"in r)||r.era===1?a.year:1-a.year;return t.setFullYear(p,0,i.firstWeekContainsDate),t.setHours(0,0,0,0),Na(t,i)}}class BR extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(t,r){return Nl(r==="R"?4:r.length,t)}set(t,r,a){const i=Wn(t,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),mi(i)}}class xR extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(t,r){return Nl(r==="u"?4:r.length,t)}set(t,r,a){return t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}class wR extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"Q":case"QQ":return Bn(r.length,t);case"Qo":return a.ordinalNumber(t,{unit:"quarter"});case"QQQ":return a.quarter(t,{width:"abbreviated",context:"formatting"})||a.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(t,{width:"wide",context:"formatting"})||a.quarter(t,{width:"abbreviated",context:"formatting"})||a.quarter(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=1&&r<=4}set(t,r,a){return t.setMonth((a-1)*3,1),t.setHours(0,0,0,0),t}}class PR extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"q":case"qq":return Bn(r.length,t);case"qo":return a.ordinalNumber(t,{unit:"quarter"});case"qqq":return a.quarter(t,{width:"abbreviated",context:"standalone"})||a.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(t,{width:"wide",context:"standalone"})||a.quarter(t,{width:"abbreviated",context:"standalone"})||a.quarter(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=1&&r<=4}set(t,r,a){return t.setMonth((a-1)*3,1),t.setHours(0,0,0,0),t}}class SR extends Ge{constructor(){super(...arguments);ve(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);ve(this,"priority",110)}parse(t,r,a){const i=s=>s-1;switch(r){case"M":return An(vn(Mn.month,t),i);case"MM":return An(Bn(2,t),i);case"Mo":return An(a.ordinalNumber(t,{unit:"month"}),i);case"MMM":return a.month(t,{width:"abbreviated",context:"formatting"})||a.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(t,{width:"wide",context:"formatting"})||a.month(t,{width:"abbreviated",context:"formatting"})||a.month(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.setMonth(a,1),t.setHours(0,0,0,0),t}}class WR extends Ge{constructor(){super(...arguments);ve(this,"priority",110);ve(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(t,r,a){const i=s=>s-1;switch(r){case"L":return An(vn(Mn.month,t),i);case"LL":return An(Bn(2,t),i);case"Lo":return An(a.ordinalNumber(t,{unit:"month"}),i);case"LLL":return a.month(t,{width:"abbreviated",context:"standalone"})||a.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(t,{width:"wide",context:"standalone"})||a.month(t,{width:"abbreviated",context:"standalone"})||a.month(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.setMonth(a,1),t.setHours(0,0,0,0),t}}function MR(e,n,t){const r=kn(e),a=bW(r,t)-n;return r.setDate(r.getDate()-a*7),r}class AR extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(t,r,a){switch(r){case"w":return vn(Mn.week,t);case"wo":return a.ordinalNumber(t,{unit:"week"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=53}set(t,r,a,i){return Na(MR(t,a,i),i)}}function _R(e,n){const t=kn(e),r=yW(t)-n;return t.setDate(t.getDate()-r*7),t}class OR extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(t,r,a){switch(r){case"I":return vn(Mn.week,t);case"Io":return a.ordinalNumber(t,{unit:"week"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=53}set(t,r,a){return mi(_R(t,a))}}const CR=[31,28,31,30,31,30,31,31,30,31,30,31],kR=[31,29,31,30,31,30,31,31,30,31,30,31];class NR extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subPriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"d":return vn(Mn.date,t);case"do":return a.ordinalNumber(t,{unit:"date"});default:return Bn(r.length,t)}}validate(t,r){const a=t.getFullYear(),i=WW(a),s=t.getMonth();return i?r>=1&&r<=kR[s]:r>=1&&r<=CR[s]}set(t,r,a){return t.setDate(a),t.setHours(0,0,0,0),t}}class RR extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subpriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(t,r,a){switch(r){case"D":case"DD":return vn(Mn.dayOfYear,t);case"Do":return a.ordinalNumber(t,{unit:"date"});default:return Bn(r.length,t)}}validate(t,r){const a=t.getFullYear();return WW(a)?r>=1&&r<=366:r>=1&&r<=365}set(t,r,a){return t.setMonth(0,a),t.setHours(0,0,0,0),t}}function gy(e,n,t){var d,v,y,B;const r=Gi(),a=(t==null?void 0:t.weekStartsOn)??((v=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((B=(y=r.locale)==null?void 0:y.options)==null?void 0:B.weekStartsOn)??0,i=kn(e),s=i.getDay(),c=(n%7+7)%7,f=7-a,m=n<0||n>6?n-(s+f)%7:(c+f)%7-(s+f)%7;return Cl(i,m)}class HR extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=gy(t,a,i),t.setHours(0,0,0,0),t}}class TR extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(t,r,a,i){const s=p=>{const c=Math.floor((p-1)/7)*7;return(p+i.weekStartsOn+6)%7+c};switch(r){case"e":case"ee":return An(Bn(r.length,t),s);case"eo":return An(a.ordinalNumber(t,{unit:"day"}),s);case"eee":return a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"eeeee":return a.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=gy(t,a,i),t.setHours(0,0,0,0),t}}class ER extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(t,r,a,i){const s=p=>{const c=Math.floor((p-1)/7)*7;return(p+i.weekStartsOn+6)%7+c};switch(r){case"c":case"cc":return An(Bn(r.length,t),s);case"co":return An(a.ordinalNumber(t,{unit:"day"}),s);case"ccc":return a.day(t,{width:"abbreviated",context:"standalone"})||a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"});case"ccccc":return a.day(t,{width:"narrow",context:"standalone"});case"cccccc":return a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(t,{width:"wide",context:"standalone"})||a.day(t,{width:"abbreviated",context:"standalone"})||a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=gy(t,a,i),t.setHours(0,0,0,0),t}}function jR(e,n){const t=kn(e),r=dR(t),a=n-r;return Cl(t,a)}class DR extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(t,r,a){const i=s=>s===0?7:s;switch(r){case"i":case"ii":return Bn(r.length,t);case"io":return a.ordinalNumber(t,{unit:"day"});case"iii":return An(a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i);case"iiiii":return An(a.day(t,{width:"narrow",context:"formatting"}),i);case"iiiiii":return An(a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i);case"iiii":default:return An(a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i)}}validate(t,r){return r>=1&&r<=7}set(t,r,a){return t=jR(t,a),t.setHours(0,0,0,0),t}}class $R extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(t,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(vy(a),0,0,0),t}}class LR extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(t,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(vy(a),0,0,0),t}}class FR extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","b","t","T"])}parse(t,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(vy(a),0,0,0),t}}class qR extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["H","K","k","t","T"])}parse(t,r,a){switch(r){case"h":return vn(Mn.hour12h,t);case"ho":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=12}set(t,r,a){const i=t.getHours()>=12;return i&&a<12?t.setHours(a+12,0,0,0):!i&&a===12?t.setHours(0,0,0,0):t.setHours(a,0,0,0),t}}class zR extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(t,r,a){switch(r){case"H":return vn(Mn.hour23h,t);case"Ho":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=23}set(t,r,a){return t.setHours(a,0,0,0),t}}class UR extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["h","H","k","t","T"])}parse(t,r,a){switch(r){case"K":return vn(Mn.hour11h,t);case"Ko":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.getHours()>=12&&a<12?t.setHours(a+12,0,0,0):t.setHours(a,0,0,0),t}}class VR extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(t,r,a){switch(r){case"k":return vn(Mn.hour24h,t);case"ko":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=24}set(t,r,a){const i=a<=24?a%24:a;return t.setHours(i,0,0,0),t}}class GR extends Ge{constructor(){super(...arguments);ve(this,"priority",60);ve(this,"incompatibleTokens",["t","T"])}parse(t,r,a){switch(r){case"m":return vn(Mn.minute,t);case"mo":return a.ordinalNumber(t,{unit:"minute"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=59}set(t,r,a){return t.setMinutes(a,0,0),t}}class KR extends Ge{constructor(){super(...arguments);ve(this,"priority",50);ve(this,"incompatibleTokens",["t","T"])}parse(t,r,a){switch(r){case"s":return vn(Mn.second,t);case"so":return a.ordinalNumber(t,{unit:"second"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=59}set(t,r,a){return t.setSeconds(a,0),t}}class QR extends Ge{constructor(){super(...arguments);ve(this,"priority",30);ve(this,"incompatibleTokens",["t","T"])}parse(t,r){const a=i=>Math.trunc(i*Math.pow(10,-r.length+3));return An(Bn(r.length,t),a)}set(t,r,a){return t.setMilliseconds(a),t}}class YR extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","x"])}parse(t,r){switch(r){case"X":return yr(gr.basicOptionalMinutes,t);case"XX":return yr(gr.basic,t);case"XXXX":return yr(gr.basicOptionalSeconds,t);case"XXXXX":return yr(gr.extendedOptionalSeconds,t);case"XXX":default:return yr(gr.extended,t)}}set(t,r,a){return r.timestampIsSet?t:Wn(t,t.getTime()-kl(t)-a)}}class XR extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","X"])}parse(t,r){switch(r){case"x":return yr(gr.basicOptionalMinutes,t);case"xx":return yr(gr.basic,t);case"xxxx":return yr(gr.basicOptionalSeconds,t);case"xxxxx":return yr(gr.extendedOptionalSeconds,t);case"xxx":default:return yr(gr.extended,t)}}set(t,r,a){return r.timestampIsSet?t:Wn(t,t.getTime()-kl(t)-a)}}class ZR extends Ge{constructor(){super(...arguments);ve(this,"priority",40);ve(this,"incompatibleTokens","*")}parse(t){return PW(t)}set(t,r,a){return[Wn(t,a*1e3),{timestampIsSet:!0}]}}class JR extends Ge{constructor(){super(...arguments);ve(this,"priority",20);ve(this,"incompatibleTokens","*")}parse(t){return PW(t)}set(t,r,a){return[Wn(t,a),{timestampIsSet:!0}]}}const eH={G:new yR,y:new bR,Y:new IR,R:new BR,u:new xR,Q:new wR,q:new PR,M:new SR,L:new WR,w:new AR,I:new OR,d:new NR,D:new RR,E:new HR,e:new TR,c:new ER,i:new DR,a:new $R,b:new LR,B:new FR,h:new qR,H:new zR,K:new UR,k:new VR,m:new GR,s:new KR,S:new QR,X:new YR,x:new XR,t:new ZR,T:new JR},nH=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tH=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rH=/^'([^]*?)'?$/,aH=/''/g,oH=/\S/,iH=/[a-zA-Z]/;function uH(e,n,t,r){var I,b,S,W;const a=fR(),i=a.locale??gW,s=a.firstWeekContainsDate??((b=(I=a.locale)==null?void 0:I.options)==null?void 0:b.firstWeekContainsDate)??1,p=a.weekStartsOn??((W=(S=a.locale)==null?void 0:S.options)==null?void 0:W.weekStartsOn)??0,c={firstWeekContainsDate:s,weekStartsOn:p,locale:i},f=[new gR],m=n.match(tH).map(M=>{const O=M[0];if(O in Nv){const w=Nv[O];return w(M,i.formatLong)}return M}).join("").match(nH),d=[];for(let M of m){xW(M)&&Rv(M,n,e),BW(M)&&Rv(M,n,e);const O=M[0],w=eH[O];if(w){const{incompatibleTokens:A}=w;if(Array.isArray(A)){const P=d.find(C=>A.includes(C.token)||C.token===O);if(P)throw new RangeError(`The format string mustn't contain \`${P.fullToken}\` and \`${M}\` at the same time`)}else if(w.incompatibleTokens==="*"&&d.length>0)throw new RangeError(`The format string mustn't contain \`${M}\` and any other token at the same time`);d.push({token:O,fullToken:M});const N=w.run(e,M,i.match,c);if(!N)return Wn(t,NaN);f.push(N.setter),e=N.rest}else{if(O.match(iH))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");if(M==="''"?M="'":O==="'"&&(M=sH(M)),e.indexOf(M)===0)e=e.slice(M.length);else return Wn(t,NaN)}}if(e.length>0&&oH.test(e))return Wn(t,NaN);const v=f.map(M=>M.priority).sort((M,O)=>O-M).filter((M,O,w)=>w.indexOf(M)===O).map(M=>f.filter(O=>O.priority===M).sort((O,w)=>w.subPriority-O.subPriority)).map(M=>M[0]);let y=kn(t);if(isNaN(y.getTime()))return Wn(t,NaN);const B={};for(const M of v){if(!M.validate(y,c))return Wn(t,NaN);const O=M.set(y,B,c);Array.isArray(O)?(y=O[0],Object.assign(B,O[1])):y=O}return Wn(t,y)}function sH(e){return e.match(rH)[1].replace(aH,"'")}const ur=e=>{if(!e)return new Date(NaN);const n=e.trim(),t=n.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(t){const[,a,i,s]=t;return new Date(parseInt(a),parseInt(i)-1,parseInt(s),12,0,0)}const r=n.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(r){const[,a,i,s]=r;return new Date(parseInt(s),parseInt(i)-1,parseInt(a),12,0,0)}return uH(e,"dd-MM-yyyy",new Date)},MW=["january","february","march","april","may","june","july","august","september","october","november","december"],AW=e=>{if(e==="all"||!e)return[];const[n,t]=e.split("-"),r=MW.indexOf(n.toLowerCase()),a=parseInt(t)||2026;if(r===-1)return[];const i=yN(new Date(a,r)),s=gN(new Date(a,r)),p=[];let c=i,f=1;for(;c<=s;){let m=Cl(c,6);m>s&&(m=s),p.push({value:`${n}-week${f}`,label:`${n.charAt(0).toUpperCase()+n.slice(1,3)} ${c.getDate()}-${m.getDate()}`,startDate:c,endDate:m}),c=Cl(m,1),f++}return p},_W=(e,n)=>{if(isNaN(e.getTime()))return!1;const t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0);return t>=n.startDate&&t<=n.endDate},Hv=(e,n)=>{if(n==="all")return!0;if(isNaN(e.getTime()))return!1;const[t,r]=n.split("-"),a=MW.indexOf(t.toLowerCase()),i=parseInt(r);return e.getMonth()===a&&e.getFullYear()===i},pH=e=>!e||isNaN(e.getTime())?"N/A":lR(e,"MMM dd, yyyy"),Tv=e=>{const n=e.length,t=e.filter(a=>a.handled==="Bot").length,r=e.filter(a=>a.handled==="Human").length;return{totalSessions:n,botHandled:t,humanHandled:r,botPercentage:n>0?t/n*100:0,humanPercentage:n>0?r/n*100:0,escalationRate:n>0?r/n*100:0}},Ev=e=>{const n=new Map;e.forEach(r=>{const a=r.channel==="Webchat"?"Webapp":r.channel,i=n.get(a)||0;n.set(a,i+1)});const t=e.length;return Array.from(n.entries()).map(([r,a])=>({channel:r,count:a,percentage:t>0?a/t*100:0})).sort((r,a)=>a.count-r.count)},OW=e=>{const n=e.filter(r=>r.handled==="Human"),t=new Map;return n.forEach(r=>{if(r.product&&r.product.trim()!==""){const a=t.get(r.product)||0;t.set(r.product,a+1)}}),Array.from(t.entries()).map(([r,a])=>({product:r,count:a})).sort((r,a)=>a.count-r.count)},jv=(e,n=10)=>{const t=new Map;return e.forEach(r=>{if(r.issue&&r.issue.trim()!==""){const a=t.get(r.issue)||{bot:0,human:0};r.handled==="Bot"?a.bot++:a.human++,t.set(r.issue,a)}}),Array.from(t.entries()).map(([r,a])=>({issue:r,botCount:a.bot,humanCount:a.human,total:a.bot+a.human})).sort((r,a)=>a.humanCount-r.humanCount).slice(0,n)},lH=(e,n="february-2026")=>{if(n==="all"){const t=["january","february","march","april","may","june","july","august","september","october","november","december"],r=new Set;return e.forEach(i=>{try{const s=ur(i.createdAt);if(!isNaN(s.getTime())){const p=t[s.getMonth()],c=`${p.charAt(0).toUpperCase()}${p.slice(1,3)} ${s.getFullYear()}`;r.add(`${c}|${p}-${s.getFullYear()}`)}}catch{}}),Array.from(r).map(i=>{const[s,p]=i.split("|"),c=e.filter(v=>Hv(ur(v.createdAt),p)),f=c.length,m=c.filter(v=>v.handled==="Human").length,d=f>0?m/f*100:0;return{week:s,totalSessions:f,humanEscalations:m,escalationRate:d}}).sort((i,s)=>new Date(`1 ${i.week}`).getTime()-new Date(`1 ${s.week}`).getTime()).filter(i=>i.totalSessions>0)}else return AW(n).map(r=>{const a=e.filter(c=>{const f=ur(c.createdAt);return _W(f,r)}),i=a.length,s=a.filter(c=>c.handled==="Human").length,p=a.length>0?s/a.length*100:0;return{week:r.label,totalSessions:i,humanEscalations:s,escalationRate:p}})},cH=e=>{const n=e.filter(r=>r.handled==="Human"),t=new Map;return n.forEach(r=>{if(r.issue&&r.issue.trim()!==""){t.has(r.issue)||t.set(r.issue,new Map);const a=t.get(r.issue),i=r.subType&&r.subType.trim()!==""?r.subType:"Other";a.has(i)||a.set(i,new Map);const s=a.get(i),p=r.product&&r.product.trim()!==""?r.product:"Unknown";s.set(p,(s.get(p)||0)+1)}}),Array.from(t.entries()).map(([r,a])=>{const i=Array.from(a.entries()).map(([p,c])=>{const f=Array.from(c.entries()).map(([d,v])=>({product:d,count:v})).sort((d,v)=>v.count-d.count),m=f.reduce((d,v)=>d+v.count,0);return{subType:p,count:m,products:f}}).sort((p,c)=>c.count-p.count),s=i.reduce((p,c)=>p+c.count,0);return{issue:r,count:s,subIssues:i}}).sort((r,a)=>a.count-r.count)},fH=(e,n="analytics-export.csv")=>{const r=[["Channel","Created at","Product","Issue","Sub Type","Handled"].join(","),...e.map(p=>[p.channel,p.createdAt,p.product||"",p.issue||"",p.subType||"",p.handled].join(","))].join(`
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a"),s=URL.createObjectURL(a);i.setAttribute("href",s),i.setAttribute("download",n),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)};function dH({metrics:e}){const n=r=>r<20?"text-green-600":r<40?"text-yellow-600":"text-red-600",t=r=>r<20?"bg-green-50":r<40?"bg-yellow-50":"bg-red-50";return _.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[_.jsx(zt,{children:_.jsx(Ut,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:e.totalSessions.toLocaleString()})]}),_.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:_.jsx(nN,{className:"w-6 h-6 text-blue-600"})})]})})}),_.jsx(zt,{children:_.jsx(Ut,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Bot Handled Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:e.botHandled.toLocaleString()}),_.jsxs("p",{className:"text-sm text-blue-600 mt-1",children:[e.botPercentage.toFixed(1),"%"]})]}),_.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:_.jsx(qk,{className:"w-6 h-6 text-blue-600"})})]})})}),_.jsx(zt,{children:_.jsx(Ut,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Human Handled Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:e.humanHandled.toLocaleString()}),_.jsxs("p",{className:"text-sm text-orange-600 mt-1",children:[e.humanPercentage.toFixed(1),"%"]})]}),_.jsx("div",{className:"p-3 bg-orange-50 rounded-full",children:_.jsx(oN,{className:"w-6 h-6 text-orange-600"})})]})})}),_.jsx(zt,{className:t(e.escalationRate),children:_.jsx(Ut,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Escalation Rate"}),_.jsxs("p",{className:`text-3xl font-bold mt-2 ${n(e.escalationRate)}`,children:[e.escalationRate.toFixed(1),"%"]}),_.jsx("p",{className:"text-xs text-gray-500 mt-1",children:e.escalationRate<20?"Excellent":e.escalationRate<40?"Good":"Needs Attention"})]}),_.jsx("div",{className:`p-3 rounded-full ${n(e.escalationRate).replace("text","bg").replace("600","100")}`,children:_.jsx(rN,{className:`w-6 h-6 ${n(e.escalationRate)}`})})]})})})]})}var Pf,NI;function yt(){if(NI)return Pf;NI=1;var e=Array.isArray;return Pf=e,Pf}var Sf,RI;function CW(){if(RI)return Sf;RI=1;var e=typeof ll=="object"&&ll&&ll.Object===Object&&ll;return Sf=e,Sf}var Wf,HI;function Wr(){if(HI)return Wf;HI=1;var e=CW(),n=typeof self=="object"&&self&&self.Object===Object&&self,t=e||n||Function("return this")();return Wf=t,Wf}var Mf,TI;function Ks(){if(TI)return Mf;TI=1;var e=Wr(),n=e.Symbol;return Mf=n,Mf}var Af,EI;function mH(){if(EI)return Af;EI=1;var e=Ks(),n=Object.prototype,t=n.hasOwnProperty,r=n.toString,a=e?e.toStringTag:void 0;function i(s){var p=t.call(s,a),c=s[a];try{s[a]=void 0;var f=!0}catch{}var m=r.call(s);return f&&(p?s[a]=c:delete s[a]),m}return Af=i,Af}var _f,jI;function hH(){if(jI)return _f;jI=1;var e=Object.prototype,n=e.toString;function t(r){return n.call(r)}return _f=t,_f}var Of,DI;function Yr(){if(DI)return Of;DI=1;var e=Ks(),n=mH(),t=hH(),r="[object Null]",a="[object Undefined]",i=e?e.toStringTag:void 0;function s(p){return p==null?p===void 0?a:r:i&&i in Object(p)?n(p):t(p)}return Of=s,Of}var Cf,$I;function Xr(){if($I)return Cf;$I=1;function e(n){return n!=null&&typeof n=="object"}return Cf=e,Cf}var kf,LI;function Ki(){if(LI)return kf;LI=1;var e=Yr(),n=Xr(),t="[object Symbol]";function r(a){return typeof a=="symbol"||n(a)&&e(a)==t}return kf=r,kf}var Nf,FI;function yy(){if(FI)return Nf;FI=1;var e=yt(),n=Ki(),t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,s){if(e(i))return!1;var p=typeof i;return p=="number"||p=="symbol"||p=="boolean"||i==null||n(i)?!0:r.test(i)||!t.test(i)||s!=null&&i in Object(s)}return Nf=a,Nf}var Rf,qI;function ja(){if(qI)return Rf;qI=1;function e(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}return Rf=e,Rf}var Hf,zI;function by(){if(zI)return Hf;zI=1;var e=Yr(),n=ja(),t="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",i="[object Proxy]";function s(p){if(!n(p))return!1;var c=e(p);return c==r||c==a||c==t||c==i}return Hf=s,Hf}var Tf,UI;function vH(){if(UI)return Tf;UI=1;var e=Wr(),n=e["__core-js_shared__"];return Tf=n,Tf}var Ef,VI;function gH(){if(VI)return Ef;VI=1;var e=vH(),n=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function t(r){return!!n&&n in r}return Ef=t,Ef}var jf,GI;function kW(){if(GI)return jf;GI=1;var e=Function.prototype,n=e.toString;function t(r){if(r!=null){try{return n.call(r)}catch{}try{return r+""}catch{}}return""}return jf=t,jf}var Df,KI;function yH(){if(KI)return Df;KI=1;var e=by(),n=gH(),t=ja(),r=kW(),a=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,s=Function.prototype,p=Object.prototype,c=s.toString,f=p.hasOwnProperty,m=RegExp("^"+c.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(v){if(!t(v)||n(v))return!1;var y=e(v)?m:i;return y.test(r(v))}return Df=d,Df}var $f,QI;function bH(){if(QI)return $f;QI=1;function e(n,t){return n==null?void 0:n[t]}return $f=e,$f}var Lf,YI;function xo(){if(YI)return Lf;YI=1;var e=yH(),n=bH();function t(r,a){var i=n(r,a);return e(i)?i:void 0}return Lf=t,Lf}var Ff,XI;function Lc(){if(XI)return Ff;XI=1;var e=xo(),n=e(Object,"create");return Ff=n,Ff}var qf,ZI;function IH(){if(ZI)return qf;ZI=1;var e=Lc();function n(){this.__data__=e?e(null):{},this.size=0}return qf=n,qf}var zf,JI;function BH(){if(JI)return zf;JI=1;function e(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}return zf=e,zf}var Uf,eB;function xH(){if(eB)return Uf;eB=1;var e=Lc(),n="__lodash_hash_undefined__",t=Object.prototype,r=t.hasOwnProperty;function a(i){var s=this.__data__;if(e){var p=s[i];return p===n?void 0:p}return r.call(s,i)?s[i]:void 0}return Uf=a,Uf}var Vf,nB;function wH(){if(nB)return Vf;nB=1;var e=Lc(),n=Object.prototype,t=n.hasOwnProperty;function r(a){var i=this.__data__;return e?i[a]!==void 0:t.call(i,a)}return Vf=r,Vf}var Gf,tB;function PH(){if(tB)return Gf;tB=1;var e=Lc(),n="__lodash_hash_undefined__";function t(r,a){var i=this.__data__;return this.size+=this.has(r)?0:1,i[r]=e&&a===void 0?n:a,this}return Gf=t,Gf}var Kf,rB;function SH(){if(rB)return Kf;rB=1;var e=IH(),n=BH(),t=xH(),r=wH(),a=PH();function i(s){var p=-1,c=s==null?0:s.length;for(this.clear();++p<c;){var f=s[p];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=n,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,Kf=i,Kf}var Qf,aB;function WH(){if(aB)return Qf;aB=1;function e(){this.__data__=[],this.size=0}return Qf=e,Qf}var Yf,oB;function Iy(){if(oB)return Yf;oB=1;function e(n,t){return n===t||n!==n&&t!==t}return Yf=e,Yf}var Xf,iB;function Fc(){if(iB)return Xf;iB=1;var e=Iy();function n(t,r){for(var a=t.length;a--;)if(e(t[a][0],r))return a;return-1}return Xf=n,Xf}var Zf,uB;function MH(){if(uB)return Zf;uB=1;var e=Fc(),n=Array.prototype,t=n.splice;function r(a){var i=this.__data__,s=e(i,a);if(s<0)return!1;var p=i.length-1;return s==p?i.pop():t.call(i,s,1),--this.size,!0}return Zf=r,Zf}var Jf,sB;function AH(){if(sB)return Jf;sB=1;var e=Fc();function n(t){var r=this.__data__,a=e(r,t);return a<0?void 0:r[a][1]}return Jf=n,Jf}var ed,pB;function _H(){if(pB)return ed;pB=1;var e=Fc();function n(t){return e(this.__data__,t)>-1}return ed=n,ed}var nd,lB;function OH(){if(lB)return nd;lB=1;var e=Fc();function n(t,r){var a=this.__data__,i=e(a,t);return i<0?(++this.size,a.push([t,r])):a[i][1]=r,this}return nd=n,nd}var td,cB;function qc(){if(cB)return td;cB=1;var e=WH(),n=MH(),t=AH(),r=_H(),a=OH();function i(s){var p=-1,c=s==null?0:s.length;for(this.clear();++p<c;){var f=s[p];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=n,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,td=i,td}var rd,fB;function By(){if(fB)return rd;fB=1;var e=xo(),n=Wr(),t=e(n,"Map");return rd=t,rd}var ad,dB;function CH(){if(dB)return ad;dB=1;var e=SH(),n=qc(),t=By();function r(){this.size=0,this.__data__={hash:new e,map:new(t||n),string:new e}}return ad=r,ad}var od,mB;function kH(){if(mB)return od;mB=1;function e(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}return od=e,od}var id,hB;function zc(){if(hB)return id;hB=1;var e=kH();function n(t,r){var a=t.__data__;return e(r)?a[typeof r=="string"?"string":"hash"]:a.map}return id=n,id}var ud,vB;function NH(){if(vB)return ud;vB=1;var e=zc();function n(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}return ud=n,ud}var sd,gB;function RH(){if(gB)return sd;gB=1;var e=zc();function n(t){return e(this,t).get(t)}return sd=n,sd}var pd,yB;function HH(){if(yB)return pd;yB=1;var e=zc();function n(t){return e(this,t).has(t)}return pd=n,pd}var ld,bB;function TH(){if(bB)return ld;bB=1;var e=zc();function n(t,r){var a=e(this,t),i=a.size;return a.set(t,r),this.size+=a.size==i?0:1,this}return ld=n,ld}var cd,IB;function xy(){if(IB)return cd;IB=1;var e=CH(),n=NH(),t=RH(),r=HH(),a=TH();function i(s){var p=-1,c=s==null?0:s.length;for(this.clear();++p<c;){var f=s[p];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=n,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,cd=i,cd}var fd,BB;function NW(){if(BB)return fd;BB=1;var e=xy(),n="Expected a function";function t(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(n);var i=function(){var s=arguments,p=a?a.apply(this,s):s[0],c=i.cache;if(c.has(p))return c.get(p);var f=r.apply(this,s);return i.cache=c.set(p,f)||c,f};return i.cache=new(t.Cache||e),i}return t.Cache=e,fd=t,fd}var dd,xB;function EH(){if(xB)return dd;xB=1;var e=NW(),n=500;function t(r){var a=e(r,function(s){return i.size===n&&i.clear(),s}),i=a.cache;return a}return dd=t,dd}var md,wB;function jH(){if(wB)return md;wB=1;var e=EH(),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,t=/\\(\\)?/g,r=e(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(n,function(s,p,c,f){i.push(c?f.replace(t,"$1"):p||s)}),i});return md=r,md}var hd,PB;function wy(){if(PB)return hd;PB=1;function e(n,t){for(var r=-1,a=n==null?0:n.length,i=Array(a);++r<a;)i[r]=t(n[r],r,n);return i}return hd=e,hd}var vd,SB;function DH(){if(SB)return vd;SB=1;var e=Ks(),n=wy(),t=yt(),r=Ki(),a=e?e.prototype:void 0,i=a?a.toString:void 0;function s(p){if(typeof p=="string")return p;if(t(p))return n(p,s)+"";if(r(p))return i?i.call(p):"";var c=p+"";return c=="0"&&1/p==-1/0?"-0":c}return vd=s,vd}var gd,WB;function RW(){if(WB)return gd;WB=1;var e=DH();function n(t){return t==null?"":e(t)}return gd=n,gd}var yd,MB;function HW(){if(MB)return yd;MB=1;var e=yt(),n=yy(),t=jH(),r=RW();function a(i,s){return e(i)?i:n(i,s)?[i]:t(r(i))}return yd=a,yd}var bd,AB;function Uc(){if(AB)return bd;AB=1;var e=Ki();function n(t){if(typeof t=="string"||e(t))return t;var r=t+"";return r=="0"&&1/t==-1/0?"-0":r}return bd=n,bd}var Id,_B;function Py(){if(_B)return Id;_B=1;var e=HW(),n=Uc();function t(r,a){a=e(a,r);for(var i=0,s=a.length;r!=null&&i<s;)r=r[n(a[i++])];return i&&i==s?r:void 0}return Id=t,Id}var Bd,OB;function TW(){if(OB)return Bd;OB=1;var e=Py();function n(t,r,a){var i=t==null?void 0:e(t,r);return i===void 0?a:i}return Bd=n,Bd}var $H=TW();const _t=Xe($H);var xd,CB;function LH(){if(CB)return xd;CB=1;function e(n){return n==null}return xd=e,xd}var FH=LH();const Ne=Xe(FH);var wd,kB;function qH(){if(kB)return wd;kB=1;var e=Yr(),n=yt(),t=Xr(),r="[object String]";function a(i){return typeof i=="string"||!n(i)&&t(i)&&e(i)==r}return wd=a,wd}var zH=qH();const Qs=Xe(zH);var UH=by();const ke=Xe(UH);var VH=ja();const Qi=Xe(VH);var Pd={exports:{}},Qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NB;function GH(){if(NB)return Qe;NB=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),p=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),B;B=Symbol.for("react.module.reference");function I(b){if(typeof b=="object"&&b!==null){var S=b.$$typeof;switch(S){case e:switch(b=b.type,b){case t:case a:case r:case f:case m:return b;default:switch(b=b&&b.$$typeof,b){case p:case s:case c:case v:case d:case i:return b;default:return S}}case n:return S}}}return Qe.ContextConsumer=s,Qe.ContextProvider=i,Qe.Element=e,Qe.ForwardRef=c,Qe.Fragment=t,Qe.Lazy=v,Qe.Memo=d,Qe.Portal=n,Qe.Profiler=a,Qe.StrictMode=r,Qe.Suspense=f,Qe.SuspenseList=m,Qe.isAsyncMode=function(){return!1},Qe.isConcurrentMode=function(){return!1},Qe.isContextConsumer=function(b){return I(b)===s},Qe.isContextProvider=function(b){return I(b)===i},Qe.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===e},Qe.isForwardRef=function(b){return I(b)===c},Qe.isFragment=function(b){return I(b)===t},Qe.isLazy=function(b){return I(b)===v},Qe.isMemo=function(b){return I(b)===d},Qe.isPortal=function(b){return I(b)===n},Qe.isProfiler=function(b){return I(b)===a},Qe.isStrictMode=function(b){return I(b)===r},Qe.isSuspense=function(b){return I(b)===f},Qe.isSuspenseList=function(b){return I(b)===m},Qe.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===t||b===a||b===r||b===f||b===m||b===y||typeof b=="object"&&b!==null&&(b.$$typeof===v||b.$$typeof===d||b.$$typeof===i||b.$$typeof===s||b.$$typeof===c||b.$$typeof===B||b.getModuleId!==void 0)},Qe.typeOf=I,Qe}var RB;function KH(){return RB||(RB=1,Pd.exports=GH()),Pd.exports}var QH=KH(),Sd,HB;function EW(){if(HB)return Sd;HB=1;var e=Yr(),n=Xr(),t="[object Number]";function r(a){return typeof a=="number"||n(a)&&e(a)==t}return Sd=r,Sd}var Wd,TB;function YH(){if(TB)return Wd;TB=1;var e=EW();function n(t){return e(t)&&t!=+t}return Wd=n,Wd}var XH=YH();const Yi=Xe(XH);var ZH=EW();const JH=Xe(ZH);var ot=function(n){return n===0?0:n>0?1:-1},lo=function(n){return Qs(n)&&n.indexOf("%")===n.length-1},pe=function(n){return JH(n)&&!Yi(n)},En=function(n){return pe(n)||Qs(n)},eT=0,Da=function(n){var t=++eT;return"".concat(n||"").concat(t)},it=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!pe(n)&&!Qs(n))return r;var i;if(lo(n)){var s=n.indexOf("%");i=t*parseFloat(n.slice(0,s))/100}else i=+n;return Yi(i)&&(i=r),a&&i>t&&(i=t),i},Wa=function(n){if(!n)return null;var t=Object.keys(n);return t&&t.length?n[t[0]]:null},nT=function(n){if(!Array.isArray(n))return!1;for(var t=n.length,r={},a=0;a<t;a++)if(!r[n[a]])r[n[a]]=!0;else return!0;return!1},hn=function(n,t){return pe(n)&&pe(t)?function(r){return n+r*(t-n)}:function(){return t}};function Rl(e,n,t){return!e||!e.length?null:e.find(function(r){return r&&(typeof n=="function"?n(r):_t(r,n))===t})}var tT=function(n){if(!n||!n.length)return null;for(var t=n.length,r=0,a=0,i=0,s=0,p=1/0,c=-1/0,f=0,m=0,d=0;d<t;d++)f=n[d].cx||0,m=n[d].cy||0,r+=f,a+=m,i+=f*m,s+=f*f,p=Math.min(p,f),c=Math.max(c,f);var v=t*s!==r*r?(t*i-r*a)/(t*s-r*r):0;return{xmin:p,xmax:c,a:v,b:(a-v*r)/t}};function li(e,n){for(var t in e)if({}.hasOwnProperty.call(e,t)&&(!{}.hasOwnProperty.call(n,t)||e[t]!==n[t]))return!1;for(var r in n)if({}.hasOwnProperty.call(n,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function Dv(e){"@babel/helpers - typeof";return Dv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Dv(e)}var rT=["viewBox","children"],aT=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],EB=["points","pathLength"],Md={svg:rT,polygon:EB,polyline:EB},Sy=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Hl=function(n,t){if(!n||typeof n=="function"||typeof n=="boolean")return null;var r=n;if(Y.isValidElement(n)&&(r=n.props),!Qi(r))return null;var a={};return Object.keys(r).forEach(function(i){Sy.includes(i)&&(a[i]=t||function(s){return r[i](r,s)})}),a},oT=function(n,t,r){return function(a){return n(t,r,a),null}},Ra=function(n,t,r){if(!Qi(n)||Dv(n)!=="object")return null;var a=null;return Object.keys(n).forEach(function(i){var s=n[i];Sy.includes(i)&&typeof s=="function"&&(a||(a={}),a[i]=oT(s,t,r))}),a},iT=["children"],uT=["children"];function jB(e,n){if(e==null)return{};var t=sT(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function sT(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function $v(e){"@babel/helpers - typeof";return $v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$v(e)}var DB={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},Ur=function(n){return typeof n=="string"?n:n?n.displayName||n.name||"Component":""},$B=null,Ad=null,Wy=function e(n){if(n===$B&&Array.isArray(Ad))return Ad;var t=[];return Y.Children.forEach(n,function(r){Ne(r)||(QH.isFragment(r)?t=t.concat(e(r.props.children)):t.push(r))}),Ad=t,$B=n,t};function st(e,n){var t=[],r=[];return Array.isArray(n)?r=n.map(function(a){return Ur(a)}):r=[Ur(n)],Wy(e).forEach(function(a){var i=_t(a,"type.displayName")||_t(a,"type.name");r.indexOf(i)!==-1&&t.push(a)}),t}function St(e,n){var t=st(e,n);return t&&t[0]}var LB=function(n){if(!n||!n.props)return!1;var t=n.props,r=t.width,a=t.height;return!(!pe(r)||r<=0||!pe(a)||a<=0)},pT=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],lT=function(n){return n&&n.type&&Qs(n.type)&&pT.indexOf(n.type)>=0},jW=function(n){return n&&$v(n)==="object"&&"clipDot"in n},cT=function(n,t,r,a){var i,s=(i=Md==null?void 0:Md[a])!==null&&i!==void 0?i:[];return t.startsWith("data-")||!ke(n)&&(a&&s.includes(t)||aT.includes(t))||r&&Sy.includes(t)},We=function(n,t,r){if(!n||typeof n=="function"||typeof n=="boolean")return null;var a=n;if(Y.isValidElement(n)&&(a=n.props),!Qi(a))return null;var i={};return Object.keys(a).forEach(function(s){var p;cT((p=a)===null||p===void 0?void 0:p[s],s,t,r)&&(i[s]=a[s])}),i},Lv=function e(n,t){if(n===t)return!0;var r=Y.Children.count(n);if(r!==Y.Children.count(t))return!1;if(r===0)return!0;if(r===1)return FB(Array.isArray(n)?n[0]:n,Array.isArray(t)?t[0]:t);for(var a=0;a<r;a++){var i=n[a],s=t[a];if(Array.isArray(i)||Array.isArray(s)){if(!e(i,s))return!1}else if(!FB(i,s))return!1}return!0},FB=function(n,t){if(Ne(n)&&Ne(t))return!0;if(!Ne(n)&&!Ne(t)){var r=n.props||{},a=r.children,i=jB(r,iT),s=t.props||{},p=s.children,c=jB(s,uT);return a&&p?li(i,c)&&Lv(a,p):!a&&!p?li(i,c):!1}return!1},qB=function(n,t){var r=[],a={};return Wy(n).forEach(function(i,s){if(lT(i))r.push(i);else if(i){var p=Ur(i.type),c=t[p]||{},f=c.handler,m=c.once;if(f&&(!m||!a[p])){var d=f(i,p,s);r.push(d),a[p]=!0}}}),r},fT=function(n){var t=n&&n.type;return t&&DB[t]?DB[t]:null},dT=function(n,t){return Wy(t).indexOf(n)},mT=["children","width","height","viewBox","className","style","title","desc"];function Fv(){return Fv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Fv.apply(this,arguments)}function hT(e,n){if(e==null)return{};var t=vT(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function vT(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function qv(e){var n=e.children,t=e.width,r=e.height,a=e.viewBox,i=e.className,s=e.style,p=e.title,c=e.desc,f=hT(e,mT),m=a||{width:t,height:r,x:0,y:0},d=Ee("recharts-surface",i);return E.createElement("svg",Fv({},We(f,!0,"svg"),{className:d,width:t,height:r,style:s,viewBox:"".concat(m.x," ").concat(m.y," ").concat(m.width," ").concat(m.height)}),E.createElement("title",null,p),E.createElement("desc",null,c),n)}var gT=["children","className"];function zv(){return zv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},zv.apply(this,arguments)}function yT(e,n){if(e==null)return{};var t=bT(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function bT(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var De=E.forwardRef(function(e,n){var t=e.children,r=e.className,a=yT(e,gT),i=Ee("recharts-layer",r);return E.createElement("g",zv({className:i},We(a,!0),{ref:n}),t)}),pr=function(n,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i]},_d,zB;function IT(){if(zB)return _d;zB=1;function e(n,t,r){var a=-1,i=n.length;t<0&&(t=-t>i?0:i+t),r=r>i?i:r,r<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var s=Array(i);++a<i;)s[a]=n[a+t];return s}return _d=e,_d}var Od,UB;function BT(){if(UB)return Od;UB=1;var e=IT();function n(t,r,a){var i=t.length;return a=a===void 0?i:a,!r&&a>=i?t:e(t,r,a)}return Od=n,Od}var Cd,VB;function DW(){if(VB)return Cd;VB=1;var e="\\ud800-\\udfff",n="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=n+t+r,i="\\ufe0e\\ufe0f",s="\\u200d",p=RegExp("["+s+e+a+i+"]");function c(f){return p.test(f)}return Cd=c,Cd}var kd,GB;function xT(){if(GB)return kd;GB=1;function e(n){return n.split("")}return kd=e,kd}var Nd,KB;function wT(){if(KB)return Nd;KB=1;var e="\\ud800-\\udfff",n="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=n+t+r,i="\\ufe0e\\ufe0f",s="["+e+"]",p="["+a+"]",c="\\ud83c[\\udffb-\\udfff]",f="(?:"+p+"|"+c+")",m="[^"+e+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",y="\\u200d",B=f+"?",I="["+i+"]?",b="(?:"+y+"(?:"+[m,d,v].join("|")+")"+I+B+")*",S=I+B+b,W="(?:"+[m+p+"?",p,d,v,s].join("|")+")",M=RegExp(c+"(?="+c+")|"+W+S,"g");function O(w){return w.match(M)||[]}return Nd=O,Nd}var Rd,QB;function PT(){if(QB)return Rd;QB=1;var e=xT(),n=DW(),t=wT();function r(a){return n(a)?t(a):e(a)}return Rd=r,Rd}var Hd,YB;function ST(){if(YB)return Hd;YB=1;var e=BT(),n=DW(),t=PT(),r=RW();function a(i){return function(s){s=r(s);var p=n(s)?t(s):void 0,c=p?p[0]:s.charAt(0),f=p?e(p,1).join(""):s.slice(1);return c[i]()+f}}return Hd=a,Hd}var Td,XB;function WT(){if(XB)return Td;XB=1;var e=ST(),n=e("toUpperCase");return Td=n,Td}var MT=WT();const Vc=Xe(MT);function an(e){return function(){return e}}const $W=Math.cos,Tl=Math.sin,cr=Math.sqrt,El=Math.PI,Gc=2*El,Uv=Math.PI,Vv=2*Uv,uo=1e-6,AT=Vv-uo;function LW(e){this._+=e[0];for(let n=1,t=e.length;n<t;++n)this._+=arguments[n]+e[n]}function _T(e){let n=Math.floor(e);if(!(n>=0))throw new Error(`invalid digits: ${e}`);if(n>15)return LW;const t=10**n;return function(r){this._+=r[0];for(let a=1,i=r.length;a<i;++a)this._+=Math.round(arguments[a]*t)/t+r[a]}}class OT{constructor(n){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=n==null?LW:_T(n)}moveTo(n,t){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(n,t){this._append`L${this._x1=+n},${this._y1=+t}`}quadraticCurveTo(n,t,r,a){this._append`Q${+n},${+t},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(n,t,r,a,i,s){this._append`C${+n},${+t},${+r},${+a},${this._x1=+i},${this._y1=+s}`}arcTo(n,t,r,a,i){if(n=+n,t=+t,r=+r,a=+a,i=+i,i<0)throw new Error(`negative radius: ${i}`);let s=this._x1,p=this._y1,c=r-n,f=a-t,m=s-n,d=p-t,v=m*m+d*d;if(this._x1===null)this._append`M${this._x1=n},${this._y1=t}`;else if(v>uo)if(!(Math.abs(d*c-f*m)>uo)||!i)this._append`L${this._x1=n},${this._y1=t}`;else{let y=r-s,B=a-p,I=c*c+f*f,b=y*y+B*B,S=Math.sqrt(I),W=Math.sqrt(v),M=i*Math.tan((Uv-Math.acos((I+v-b)/(2*S*W)))/2),O=M/W,w=M/S;Math.abs(O-1)>uo&&this._append`L${n+O*m},${t+O*d}`,this._append`A${i},${i},0,0,${+(d*y>m*B)},${this._x1=n+w*c},${this._y1=t+w*f}`}}arc(n,t,r,a,i,s){if(n=+n,t=+t,r=+r,s=!!s,r<0)throw new Error(`negative radius: ${r}`);let p=r*Math.cos(a),c=r*Math.sin(a),f=n+p,m=t+c,d=1^s,v=s?a-i:i-a;this._x1===null?this._append`M${f},${m}`:(Math.abs(this._x1-f)>uo||Math.abs(this._y1-m)>uo)&&this._append`L${f},${m}`,r&&(v<0&&(v=v%Vv+Vv),v>AT?this._append`A${r},${r},0,1,${d},${n-p},${t-c}A${r},${r},0,1,${d},${this._x1=f},${this._y1=m}`:v>uo&&this._append`A${r},${r},0,${+(v>=Uv)},${d},${this._x1=n+r*Math.cos(i)},${this._y1=t+r*Math.sin(i)}`)}rect(n,t,r,a){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function My(e){let n=3;return e.digits=function(t){if(!arguments.length)return n;if(t==null)n=null;else{const r=Math.floor(t);if(!(r>=0))throw new RangeError(`invalid digits: ${t}`);n=r}return e},()=>new OT(n)}function Ay(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function FW(e){this._context=e}FW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:this._context.lineTo(e,n);break}}};function Kc(e){return new FW(e)}function qW(e){return e[0]}function zW(e){return e[1]}function UW(e,n){var t=an(!0),r=null,a=Kc,i=null,s=My(p);e=typeof e=="function"?e:e===void 0?qW:an(e),n=typeof n=="function"?n:n===void 0?zW:an(n);function p(c){var f,m=(c=Ay(c)).length,d,v=!1,y;for(r==null&&(i=a(y=s())),f=0;f<=m;++f)!(f<m&&t(d=c[f],f,c))===v&&((v=!v)?i.lineStart():i.lineEnd()),v&&i.point(+e(d,f,c),+n(d,f,c));if(y)return i=null,y+""||null}return p.x=function(c){return arguments.length?(e=typeof c=="function"?c:an(+c),p):e},p.y=function(c){return arguments.length?(n=typeof c=="function"?c:an(+c),p):n},p.defined=function(c){return arguments.length?(t=typeof c=="function"?c:an(!!c),p):t},p.curve=function(c){return arguments.length?(a=c,r!=null&&(i=a(r)),p):a},p.context=function(c){return arguments.length?(c==null?r=i=null:i=a(r=c),p):r},p}function hl(e,n,t){var r=null,a=an(!0),i=null,s=Kc,p=null,c=My(f);e=typeof e=="function"?e:e===void 0?qW:an(+e),n=typeof n=="function"?n:an(n===void 0?0:+n),t=typeof t=="function"?t:t===void 0?zW:an(+t);function f(d){var v,y,B,I=(d=Ay(d)).length,b,S=!1,W,M=new Array(I),O=new Array(I);for(i==null&&(p=s(W=c())),v=0;v<=I;++v){if(!(v<I&&a(b=d[v],v,d))===S)if(S=!S)y=v,p.areaStart(),p.lineStart();else{for(p.lineEnd(),p.lineStart(),B=v-1;B>=y;--B)p.point(M[B],O[B]);p.lineEnd(),p.areaEnd()}S&&(M[v]=+e(b,v,d),O[v]=+n(b,v,d),p.point(r?+r(b,v,d):M[v],t?+t(b,v,d):O[v]))}if(W)return p=null,W+""||null}function m(){return UW().defined(a).curve(s).context(i)}return f.x=function(d){return arguments.length?(e=typeof d=="function"?d:an(+d),r=null,f):e},f.x0=function(d){return arguments.length?(e=typeof d=="function"?d:an(+d),f):e},f.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:an(+d),f):r},f.y=function(d){return arguments.length?(n=typeof d=="function"?d:an(+d),t=null,f):n},f.y0=function(d){return arguments.length?(n=typeof d=="function"?d:an(+d),f):n},f.y1=function(d){return arguments.length?(t=d==null?null:typeof d=="function"?d:an(+d),f):t},f.lineX0=f.lineY0=function(){return m().x(e).y(n)},f.lineY1=function(){return m().x(e).y(t)},f.lineX1=function(){return m().x(r).y(n)},f.defined=function(d){return arguments.length?(a=typeof d=="function"?d:an(!!d),f):a},f.curve=function(d){return arguments.length?(s=d,i!=null&&(p=s(i)),f):s},f.context=function(d){return arguments.length?(d==null?i=p=null:p=s(i=d),f):i},f}class VW{constructor(n,t){this._context=n,this._x=t}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(n,t){switch(n=+n,t=+t,this._point){case 0:{this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+n)/2,this._y0,this._x0,t,n,t):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+t)/2,n,this._y0,n,t);break}}this._x0=n,this._y0=t}}function CT(e){return new VW(e,!0)}function kT(e){return new VW(e,!1)}const _y={draw(e,n){const t=cr(n/El);e.moveTo(t,0),e.arc(0,0,t,0,Gc)}},NT={draw(e,n){const t=cr(n/5)/2;e.moveTo(-3*t,-t),e.lineTo(-t,-t),e.lineTo(-t,-3*t),e.lineTo(t,-3*t),e.lineTo(t,-t),e.lineTo(3*t,-t),e.lineTo(3*t,t),e.lineTo(t,t),e.lineTo(t,3*t),e.lineTo(-t,3*t),e.lineTo(-t,t),e.lineTo(-3*t,t),e.closePath()}},GW=cr(1/3),RT=GW*2,HT={draw(e,n){const t=cr(n/RT),r=t*GW;e.moveTo(0,-t),e.lineTo(r,0),e.lineTo(0,t),e.lineTo(-r,0),e.closePath()}},TT={draw(e,n){const t=cr(n),r=-t/2;e.rect(r,r,t,t)}},ET=.8908130915292852,KW=Tl(El/10)/Tl(7*El/10),jT=Tl(Gc/10)*KW,DT=-$W(Gc/10)*KW,$T={draw(e,n){const t=cr(n*ET),r=jT*t,a=DT*t;e.moveTo(0,-t),e.lineTo(r,a);for(let i=1;i<5;++i){const s=Gc*i/5,p=$W(s),c=Tl(s);e.lineTo(c*t,-p*t),e.lineTo(p*r-c*a,c*r+p*a)}e.closePath()}},Ed=cr(3),LT={draw(e,n){const t=-cr(n/(Ed*3));e.moveTo(0,t*2),e.lineTo(-Ed*t,-t),e.lineTo(Ed*t,-t),e.closePath()}},Dt=-.5,$t=cr(3)/2,Gv=1/cr(12),FT=(Gv/2+1)*3,qT={draw(e,n){const t=cr(n/FT),r=t/2,a=t*Gv,i=r,s=t*Gv+t,p=-i,c=s;e.moveTo(r,a),e.lineTo(i,s),e.lineTo(p,c),e.lineTo(Dt*r-$t*a,$t*r+Dt*a),e.lineTo(Dt*i-$t*s,$t*i+Dt*s),e.lineTo(Dt*p-$t*c,$t*p+Dt*c),e.lineTo(Dt*r+$t*a,Dt*a-$t*r),e.lineTo(Dt*i+$t*s,Dt*s-$t*i),e.lineTo(Dt*p+$t*c,Dt*c-$t*p),e.closePath()}};function zT(e,n){let t=null,r=My(a);e=typeof e=="function"?e:an(e||_y),n=typeof n=="function"?n:an(n===void 0?64:+n);function a(){let i;if(t||(t=i=r()),e.apply(this,arguments).draw(t,+n.apply(this,arguments)),i)return t=null,i+""||null}return a.type=function(i){return arguments.length?(e=typeof i=="function"?i:an(i),a):e},a.size=function(i){return arguments.length?(n=typeof i=="function"?i:an(+i),a):n},a.context=function(i){return arguments.length?(t=i??null,a):t},a}function jl(){}function Dl(e,n,t){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+n)/6,(e._y0+4*e._y1+t)/6)}function QW(e){this._context=e}QW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Dl(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Dl(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function UT(e){return new QW(e)}function YW(e){this._context=e}YW.prototype={areaStart:jl,areaEnd:jl,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._x2=e,this._y2=n;break;case 1:this._point=2,this._x3=e,this._y3=n;break;case 2:this._point=3,this._x4=e,this._y4=n,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+n)/6);break;default:Dl(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function VT(e){return new YW(e)}function XW(e){this._context=e}XW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var t=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break;case 3:this._point=4;default:Dl(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function GT(e){return new XW(e)}function ZW(e){this._context=e}ZW.prototype={areaStart:jl,areaEnd:jl,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,n){e=+e,n=+n,this._point?this._context.lineTo(e,n):(this._point=1,this._context.moveTo(e,n))}};function KT(e){return new ZW(e)}function ZB(e){return e<0?-1:1}function JB(e,n,t){var r=e._x1-e._x0,a=n-e._x1,i=(e._y1-e._y0)/(r||a<0&&-0),s=(t-e._y1)/(a||r<0&&-0),p=(i*a+s*r)/(r+a);return(ZB(i)+ZB(s))*Math.min(Math.abs(i),Math.abs(s),.5*Math.abs(p))||0}function ex(e,n){var t=e._x1-e._x0;return t?(3*(e._y1-e._y0)/t-n)/2:n}function jd(e,n,t){var r=e._x0,a=e._y0,i=e._x1,s=e._y1,p=(i-r)/3;e._context.bezierCurveTo(r+p,a+p*n,i-p,s-p*t,i,s)}function $l(e){this._context=e}$l.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:jd(this,this._t0,ex(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){var t=NaN;if(e=+e,n=+n,!(e===this._x1&&n===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,jd(this,ex(this,t=JB(this,e,n)),t);break;default:jd(this,this._t0,t=JB(this,e,n));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n,this._t0=t}}};function JW(e){this._context=new eM(e)}(JW.prototype=Object.create($l.prototype)).point=function(e,n){$l.prototype.point.call(this,n,e)};function eM(e){this._context=e}eM.prototype={moveTo:function(e,n){this._context.moveTo(n,e)},closePath:function(){this._context.closePath()},lineTo:function(e,n){this._context.lineTo(n,e)},bezierCurveTo:function(e,n,t,r,a,i){this._context.bezierCurveTo(n,e,r,t,i,a)}};function QT(e){return new $l(e)}function YT(e){return new JW(e)}function nM(e){this._context=e}nM.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,n=this._y,t=e.length;if(t)if(this._line?this._context.lineTo(e[0],n[0]):this._context.moveTo(e[0],n[0]),t===2)this._context.lineTo(e[1],n[1]);else for(var r=nx(e),a=nx(n),i=0,s=1;s<t;++i,++s)this._context.bezierCurveTo(r[0][i],a[0][i],r[1][i],a[1][i],e[s],n[s]);(this._line||this._line!==0&&t===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,n){this._x.push(+e),this._y.push(+n)}};function nx(e){var n,t=e.length-1,r,a=new Array(t),i=new Array(t),s=new Array(t);for(a[0]=0,i[0]=2,s[0]=e[0]+2*e[1],n=1;n<t-1;++n)a[n]=1,i[n]=4,s[n]=4*e[n]+2*e[n+1];for(a[t-1]=2,i[t-1]=7,s[t-1]=8*e[t-1]+e[t],n=1;n<t;++n)r=a[n]/i[n-1],i[n]-=r,s[n]-=r*s[n-1];for(a[t-1]=s[t-1]/i[t-1],n=t-2;n>=0;--n)a[n]=(s[n]-a[n+1])/i[n];for(i[t-1]=(e[t]+a[t-1])/2,n=0;n<t-1;++n)i[n]=2*e[n+1]-a[n+1];return[a,i]}function XT(e){return new nM(e)}function Qc(e,n){this._context=e,this._t=n}Qc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(e,n);else{var t=this._x*(1-this._t)+e*this._t;this._context.lineTo(t,this._y),this._context.lineTo(t,n)}break}}this._x=e,this._y=n}};function ZT(e){return new Qc(e,.5)}function JT(e){return new Qc(e,0)}function eE(e){return new Qc(e,1)}function hi(e,n){if((s=e.length)>1)for(var t=1,r,a,i=e[n[0]],s,p=i.length;t<s;++t)for(a=i,i=e[n[t]],r=0;r<p;++r)i[r][1]+=i[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function Kv(e){for(var n=e.length,t=new Array(n);--n>=0;)t[n]=n;return t}function nE(e,n){return e[n]}function tE(e){const n=[];return n.key=e,n}function rE(){var e=an([]),n=Kv,t=hi,r=nE;function a(i){var s=Array.from(e.apply(this,arguments),tE),p,c=s.length,f=-1,m;for(const d of i)for(p=0,++f;p<c;++p)(s[p][f]=[0,+r(d,s[p].key,f,i)]).data=d;for(p=0,m=Ay(n(s));p<c;++p)s[m[p]].index=p;return t(s,m),s}return a.keys=function(i){return arguments.length?(e=typeof i=="function"?i:an(Array.from(i)),a):e},a.value=function(i){return arguments.length?(r=typeof i=="function"?i:an(+i),a):r},a.order=function(i){return arguments.length?(n=i==null?Kv:typeof i=="function"?i:an(Array.from(i)),a):n},a.offset=function(i){return arguments.length?(t=i??hi,a):t},a}function aE(e,n){if((r=e.length)>0){for(var t,r,a=0,i=e[0].length,s;a<i;++a){for(s=t=0;t<r;++t)s+=e[t][a][1]||0;if(s)for(t=0;t<r;++t)e[t][a][1]/=s}hi(e,n)}}function oE(e,n){if((a=e.length)>0){for(var t=0,r=e[n[0]],a,i=r.length;t<i;++t){for(var s=0,p=0;s<a;++s)p+=e[s][t][1]||0;r[t][1]+=r[t][0]=-p/2}hi(e,n)}}function iE(e,n){if(!(!((s=e.length)>0)||!((i=(a=e[n[0]]).length)>0))){for(var t=0,r=1,a,i,s;r<i;++r){for(var p=0,c=0,f=0;p<s;++p){for(var m=e[n[p]],d=m[r][1]||0,v=m[r-1][1]||0,y=(d-v)/2,B=0;B<p;++B){var I=e[n[B]],b=I[r][1]||0,S=I[r-1][1]||0;y+=b-S}c+=d,f+=y*d}a[r-1][1]+=a[r-1][0]=t,c&&(t-=f/c)}a[r-1][1]+=a[r-1][0]=t,hi(e,n)}}function ds(e){"@babel/helpers - typeof";return ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ds(e)}var uE=["type","size","sizeType"];function Qv(){return Qv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Qv.apply(this,arguments)}function tx(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function rx(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?tx(Object(t),!0).forEach(function(r){sE(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tx(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function sE(e,n,t){return n=pE(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function pE(e){var n=lE(e,"string");return ds(n)=="symbol"?n:n+""}function lE(e,n){if(ds(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function cE(e,n){if(e==null)return{};var t=fE(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function fE(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var tM={symbolCircle:_y,symbolCross:NT,symbolDiamond:HT,symbolSquare:TT,symbolStar:$T,symbolTriangle:LT,symbolWye:qT},dE=Math.PI/180,mE=function(n){var t="symbol".concat(Vc(n));return tM[t]||_y},hE=function(n,t,r){if(t==="area")return n;switch(r){case"cross":return 5*n*n/9;case"diamond":return .5*n*n/Math.sqrt(3);case"square":return n*n;case"star":{var a=18*dE;return 1.25*n*n*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*n*n/4;case"wye":return(21-10*Math.sqrt(3))*n*n/8;default:return Math.PI*n*n/4}},vE=function(n,t){tM["symbol".concat(Vc(n))]=t},Yc=function(n){var t=n.type,r=t===void 0?"circle":t,a=n.size,i=a===void 0?64:a,s=n.sizeType,p=s===void 0?"area":s,c=cE(n,uE),f=rx(rx({},c),{},{type:r,size:i,sizeType:p}),m=function(){var b=mE(r),S=zT().type(b).size(hE(i,p,r));return S()},d=f.className,v=f.cx,y=f.cy,B=We(f,!0);return v===+v&&y===+y&&i===+i?E.createElement("path",Qv({},B,{className:Ee("recharts-symbols",d),transform:"translate(".concat(v,", ").concat(y,")"),d:m()})):null};Yc.registerSymbol=vE;function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vi(e)}function Yv(){return Yv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Yv.apply(this,arguments)}function ax(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function gE(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ax(Object(t),!0).forEach(function(r){ms(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ax(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function yE(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function bE(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,aM(r.key),r)}}function IE(e,n,t){return n&&bE(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function BE(e,n,t){return n=Ll(n),xE(e,rM()?Reflect.construct(n,t||[],Ll(e).constructor):n.apply(e,t))}function xE(e,n){if(n&&(vi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wE(e)}function wE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rM=function(){return!!e})()}function Ll(e){return Ll=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ll(e)}function PE(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Xv(e,n)}function Xv(e,n){return Xv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xv(e,n)}function ms(e,n,t){return n=aM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function aM(e){var n=SE(e,"string");return vi(n)=="symbol"?n:n+""}function SE(e,n){if(vi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Lt=32,Oy=(function(e){function n(){return yE(this,n),BE(this,n,arguments)}return PE(n,e),IE(n,[{key:"renderIcon",value:function(r){var a=this.props.inactiveColor,i=Lt/2,s=Lt/6,p=Lt/3,c=r.inactive?a:r.color;if(r.type==="plainline")return E.createElement("line",{strokeWidth:4,fill:"none",stroke:c,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:i,x2:Lt,y2:i,className:"recharts-legend-icon"});if(r.type==="line")return E.createElement("path",{strokeWidth:4,fill:"none",stroke:c,d:"M0,".concat(i,"h").concat(p,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(2*p,",").concat(i,`
            H`).concat(Lt,"M").concat(2*p,",").concat(i,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(p,",").concat(i),className:"recharts-legend-icon"});if(r.type==="rect")return E.createElement("path",{stroke:"none",fill:c,d:"M0,".concat(Lt/8,"h").concat(Lt,"v").concat(Lt*3/4,"h").concat(-Lt,"z"),className:"recharts-legend-icon"});if(E.isValidElement(r.legendIcon)){var f=gE({},r);return delete f.legendIcon,E.cloneElement(r.legendIcon,f)}return E.createElement(Yc,{fill:c,cx:i,cy:i,size:Lt,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,a=this.props,i=a.payload,s=a.iconSize,p=a.layout,c=a.formatter,f=a.inactiveColor,m={x:0,y:0,width:Lt,height:Lt},d={display:p==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return i.map(function(y,B){var I=y.formatter||c,b=Ee(ms(ms({"recharts-legend-item":!0},"legend-item-".concat(B),!0),"inactive",y.inactive));if(y.type==="none")return null;var S=ke(y.value)?null:y.value;pr(!ke(y.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var W=y.inactive?f:y.color;return E.createElement("li",Yv({className:b,style:d,key:"legend-item-".concat(B)},Ra(r.props,y,B)),E.createElement(qv,{width:s,height:s,viewBox:m,style:v},r.renderIcon(y)),E.createElement("span",{className:"recharts-legend-item-text",style:{color:W}},I?I(S,y,B):S))})}},{key:"render",value:function(){var r=this.props,a=r.payload,i=r.layout,s=r.align;if(!a||!a.length)return null;var p={padding:0,margin:0,textAlign:i==="horizontal"?s:"left"};return E.createElement("ul",{className:"recharts-default-legend",style:p},this.renderItems())}}])})(Y.PureComponent);ms(Oy,"displayName","Legend");ms(Oy,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var Dd,ox;function WE(){if(ox)return Dd;ox=1;var e=qc();function n(){this.__data__=new e,this.size=0}return Dd=n,Dd}var $d,ix;function ME(){if(ix)return $d;ix=1;function e(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}return $d=e,$d}var Ld,ux;function AE(){if(ux)return Ld;ux=1;function e(n){return this.__data__.get(n)}return Ld=e,Ld}var Fd,sx;function _E(){if(sx)return Fd;sx=1;function e(n){return this.__data__.has(n)}return Fd=e,Fd}var qd,px;function OE(){if(px)return qd;px=1;var e=qc(),n=By(),t=xy(),r=200;function a(i,s){var p=this.__data__;if(p instanceof e){var c=p.__data__;if(!n||c.length<r-1)return c.push([i,s]),this.size=++p.size,this;p=this.__data__=new t(c)}return p.set(i,s),this.size=p.size,this}return qd=a,qd}var zd,lx;function oM(){if(lx)return zd;lx=1;var e=qc(),n=WE(),t=ME(),r=AE(),a=_E(),i=OE();function s(p){var c=this.__data__=new e(p);this.size=c.size}return s.prototype.clear=n,s.prototype.delete=t,s.prototype.get=r,s.prototype.has=a,s.prototype.set=i,zd=s,zd}var Ud,cx;function CE(){if(cx)return Ud;cx=1;var e="__lodash_hash_undefined__";function n(t){return this.__data__.set(t,e),this}return Ud=n,Ud}var Vd,fx;function kE(){if(fx)return Vd;fx=1;function e(n){return this.__data__.has(n)}return Vd=e,Vd}var Gd,dx;function iM(){if(dx)return Gd;dx=1;var e=xy(),n=CE(),t=kE();function r(a){var i=-1,s=a==null?0:a.length;for(this.__data__=new e;++i<s;)this.add(a[i])}return r.prototype.add=r.prototype.push=n,r.prototype.has=t,Gd=r,Gd}var Kd,mx;function uM(){if(mx)return Kd;mx=1;function e(n,t){for(var r=-1,a=n==null?0:n.length;++r<a;)if(t(n[r],r,n))return!0;return!1}return Kd=e,Kd}var Qd,hx;function sM(){if(hx)return Qd;hx=1;function e(n,t){return n.has(t)}return Qd=e,Qd}var Yd,vx;function pM(){if(vx)return Yd;vx=1;var e=iM(),n=uM(),t=sM(),r=1,a=2;function i(s,p,c,f,m,d){var v=c&r,y=s.length,B=p.length;if(y!=B&&!(v&&B>y))return!1;var I=d.get(s),b=d.get(p);if(I&&b)return I==p&&b==s;var S=-1,W=!0,M=c&a?new e:void 0;for(d.set(s,p),d.set(p,s);++S<y;){var O=s[S],w=p[S];if(f)var A=v?f(w,O,S,p,s,d):f(O,w,S,s,p,d);if(A!==void 0){if(A)continue;W=!1;break}if(M){if(!n(p,function(N,P){if(!t(M,P)&&(O===N||m(O,N,c,f,d)))return M.push(P)})){W=!1;break}}else if(!(O===w||m(O,w,c,f,d))){W=!1;break}}return d.delete(s),d.delete(p),W}return Yd=i,Yd}var Xd,gx;function NE(){if(gx)return Xd;gx=1;var e=Wr(),n=e.Uint8Array;return Xd=n,Xd}var Zd,yx;function RE(){if(yx)return Zd;yx=1;function e(n){var t=-1,r=Array(n.size);return n.forEach(function(a,i){r[++t]=[i,a]}),r}return Zd=e,Zd}var Jd,bx;function Cy(){if(bx)return Jd;bx=1;function e(n){var t=-1,r=Array(n.size);return n.forEach(function(a){r[++t]=a}),r}return Jd=e,Jd}var em,Ix;function HE(){if(Ix)return em;Ix=1;var e=Ks(),n=NE(),t=Iy(),r=pM(),a=RE(),i=Cy(),s=1,p=2,c="[object Boolean]",f="[object Date]",m="[object Error]",d="[object Map]",v="[object Number]",y="[object RegExp]",B="[object Set]",I="[object String]",b="[object Symbol]",S="[object ArrayBuffer]",W="[object DataView]",M=e?e.prototype:void 0,O=M?M.valueOf:void 0;function w(A,N,P,C,T,j,H){switch(P){case W:if(A.byteLength!=N.byteLength||A.byteOffset!=N.byteOffset)return!1;A=A.buffer,N=N.buffer;case S:return!(A.byteLength!=N.byteLength||!j(new n(A),new n(N)));case c:case f:case v:return t(+A,+N);case m:return A.name==N.name&&A.message==N.message;case y:case I:return A==N+"";case d:var q=a;case B:var L=C&s;if(q||(q=i),A.size!=N.size&&!L)return!1;var K=H.get(A);if(K)return K==N;C|=p,H.set(A,N);var U=r(q(A),q(N),C,T,j,H);return H.delete(A),U;case b:if(O)return O.call(A)==O.call(N)}return!1}return em=w,em}var nm,Bx;function lM(){if(Bx)return nm;Bx=1;function e(n,t){for(var r=-1,a=t.length,i=n.length;++r<a;)n[i+r]=t[r];return n}return nm=e,nm}var tm,xx;function TE(){if(xx)return tm;xx=1;var e=lM(),n=yt();function t(r,a,i){var s=a(r);return n(r)?s:e(s,i(r))}return tm=t,tm}var rm,wx;function EE(){if(wx)return rm;wx=1;function e(n,t){for(var r=-1,a=n==null?0:n.length,i=0,s=[];++r<a;){var p=n[r];t(p,r,n)&&(s[i++]=p)}return s}return rm=e,rm}var am,Px;function jE(){if(Px)return am;Px=1;function e(){return[]}return am=e,am}var om,Sx;function DE(){if(Sx)return om;Sx=1;var e=EE(),n=jE(),t=Object.prototype,r=t.propertyIsEnumerable,a=Object.getOwnPropertySymbols,i=a?function(s){return s==null?[]:(s=Object(s),e(a(s),function(p){return r.call(s,p)}))}:n;return om=i,om}var im,Wx;function $E(){if(Wx)return im;Wx=1;function e(n,t){for(var r=-1,a=Array(n);++r<n;)a[r]=t(r);return a}return im=e,im}var um,Mx;function LE(){if(Mx)return um;Mx=1;var e=Yr(),n=Xr(),t="[object Arguments]";function r(a){return n(a)&&e(a)==t}return um=r,um}var sm,Ax;function ky(){if(Ax)return sm;Ax=1;var e=LE(),n=Xr(),t=Object.prototype,r=t.hasOwnProperty,a=t.propertyIsEnumerable,i=e((function(){return arguments})())?e:function(s){return n(s)&&r.call(s,"callee")&&!a.call(s,"callee")};return sm=i,sm}var es={exports:{}},pm,_x;function FE(){if(_x)return pm;_x=1;function e(){return!1}return pm=e,pm}es.exports;var Ox;function cM(){return Ox||(Ox=1,(function(e,n){var t=Wr(),r=FE(),a=n&&!n.nodeType&&n,i=a&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===a,p=s?t.Buffer:void 0,c=p?p.isBuffer:void 0,f=c||r;e.exports=f})(es,es.exports)),es.exports}var lm,Cx;function Ny(){if(Cx)return lm;Cx=1;var e=9007199254740991,n=/^(?:0|[1-9]\d*)$/;function t(r,a){var i=typeof r;return a=a??e,!!a&&(i=="number"||i!="symbol"&&n.test(r))&&r>-1&&r%1==0&&r<a}return lm=t,lm}var cm,kx;function Ry(){if(kx)return cm;kx=1;var e=9007199254740991;function n(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=e}return cm=n,cm}var fm,Nx;function qE(){if(Nx)return fm;Nx=1;var e=Yr(),n=Ry(),t=Xr(),r="[object Arguments]",a="[object Array]",i="[object Boolean]",s="[object Date]",p="[object Error]",c="[object Function]",f="[object Map]",m="[object Number]",d="[object Object]",v="[object RegExp]",y="[object Set]",B="[object String]",I="[object WeakMap]",b="[object ArrayBuffer]",S="[object DataView]",W="[object Float32Array]",M="[object Float64Array]",O="[object Int8Array]",w="[object Int16Array]",A="[object Int32Array]",N="[object Uint8Array]",P="[object Uint8ClampedArray]",C="[object Uint16Array]",T="[object Uint32Array]",j={};j[W]=j[M]=j[O]=j[w]=j[A]=j[N]=j[P]=j[C]=j[T]=!0,j[r]=j[a]=j[b]=j[i]=j[S]=j[s]=j[p]=j[c]=j[f]=j[m]=j[d]=j[v]=j[y]=j[B]=j[I]=!1;function H(q){return t(q)&&n(q.length)&&!!j[e(q)]}return fm=H,fm}var dm,Rx;function fM(){if(Rx)return dm;Rx=1;function e(n){return function(t){return n(t)}}return dm=e,dm}var ns={exports:{}};ns.exports;var Hx;function zE(){return Hx||(Hx=1,(function(e,n){var t=CW(),r=n&&!n.nodeType&&n,a=r&&!0&&e&&!e.nodeType&&e,i=a&&a.exports===r,s=i&&t.process,p=(function(){try{var c=a&&a.require&&a.require("util").types;return c||s&&s.binding&&s.binding("util")}catch{}})();e.exports=p})(ns,ns.exports)),ns.exports}var mm,Tx;function dM(){if(Tx)return mm;Tx=1;var e=qE(),n=fM(),t=zE(),r=t&&t.isTypedArray,a=r?n(r):e;return mm=a,mm}var hm,Ex;function UE(){if(Ex)return hm;Ex=1;var e=$E(),n=ky(),t=yt(),r=cM(),a=Ny(),i=dM(),s=Object.prototype,p=s.hasOwnProperty;function c(f,m){var d=t(f),v=!d&&n(f),y=!d&&!v&&r(f),B=!d&&!v&&!y&&i(f),I=d||v||y||B,b=I?e(f.length,String):[],S=b.length;for(var W in f)(m||p.call(f,W))&&!(I&&(W=="length"||y&&(W=="offset"||W=="parent")||B&&(W=="buffer"||W=="byteLength"||W=="byteOffset")||a(W,S)))&&b.push(W);return b}return hm=c,hm}var vm,jx;function VE(){if(jx)return vm;jx=1;var e=Object.prototype;function n(t){var r=t&&t.constructor,a=typeof r=="function"&&r.prototype||e;return t===a}return vm=n,vm}var gm,Dx;function mM(){if(Dx)return gm;Dx=1;function e(n,t){return function(r){return n(t(r))}}return gm=e,gm}var ym,$x;function GE(){if($x)return ym;$x=1;var e=mM(),n=e(Object.keys,Object);return ym=n,ym}var bm,Lx;function KE(){if(Lx)return bm;Lx=1;var e=VE(),n=GE(),t=Object.prototype,r=t.hasOwnProperty;function a(i){if(!e(i))return n(i);var s=[];for(var p in Object(i))r.call(i,p)&&p!="constructor"&&s.push(p);return s}return bm=a,bm}var Im,Fx;function Ys(){if(Fx)return Im;Fx=1;var e=by(),n=Ry();function t(r){return r!=null&&n(r.length)&&!e(r)}return Im=t,Im}var Bm,qx;function Xc(){if(qx)return Bm;qx=1;var e=UE(),n=KE(),t=Ys();function r(a){return t(a)?e(a):n(a)}return Bm=r,Bm}var xm,zx;function QE(){if(zx)return xm;zx=1;var e=TE(),n=DE(),t=Xc();function r(a){return e(a,t,n)}return xm=r,xm}var wm,Ux;function YE(){if(Ux)return wm;Ux=1;var e=QE(),n=1,t=Object.prototype,r=t.hasOwnProperty;function a(i,s,p,c,f,m){var d=p&n,v=e(i),y=v.length,B=e(s),I=B.length;if(y!=I&&!d)return!1;for(var b=y;b--;){var S=v[b];if(!(d?S in s:r.call(s,S)))return!1}var W=m.get(i),M=m.get(s);if(W&&M)return W==s&&M==i;var O=!0;m.set(i,s),m.set(s,i);for(var w=d;++b<y;){S=v[b];var A=i[S],N=s[S];if(c)var P=d?c(N,A,S,s,i,m):c(A,N,S,i,s,m);if(!(P===void 0?A===N||f(A,N,p,c,m):P)){O=!1;break}w||(w=S=="constructor")}if(O&&!w){var C=i.constructor,T=s.constructor;C!=T&&"constructor"in i&&"constructor"in s&&!(typeof C=="function"&&C instanceof C&&typeof T=="function"&&T instanceof T)&&(O=!1)}return m.delete(i),m.delete(s),O}return wm=a,wm}var Pm,Vx;function XE(){if(Vx)return Pm;Vx=1;var e=xo(),n=Wr(),t=e(n,"DataView");return Pm=t,Pm}var Sm,Gx;function ZE(){if(Gx)return Sm;Gx=1;var e=xo(),n=Wr(),t=e(n,"Promise");return Sm=t,Sm}var Wm,Kx;function hM(){if(Kx)return Wm;Kx=1;var e=xo(),n=Wr(),t=e(n,"Set");return Wm=t,Wm}var Mm,Qx;function JE(){if(Qx)return Mm;Qx=1;var e=xo(),n=Wr(),t=e(n,"WeakMap");return Mm=t,Mm}var Am,Yx;function ej(){if(Yx)return Am;Yx=1;var e=XE(),n=By(),t=ZE(),r=hM(),a=JE(),i=Yr(),s=kW(),p="[object Map]",c="[object Object]",f="[object Promise]",m="[object Set]",d="[object WeakMap]",v="[object DataView]",y=s(e),B=s(n),I=s(t),b=s(r),S=s(a),W=i;return(e&&W(new e(new ArrayBuffer(1)))!=v||n&&W(new n)!=p||t&&W(t.resolve())!=f||r&&W(new r)!=m||a&&W(new a)!=d)&&(W=function(M){var O=i(M),w=O==c?M.constructor:void 0,A=w?s(w):"";if(A)switch(A){case y:return v;case B:return p;case I:return f;case b:return m;case S:return d}return O}),Am=W,Am}var _m,Xx;function nj(){if(Xx)return _m;Xx=1;var e=oM(),n=pM(),t=HE(),r=YE(),a=ej(),i=yt(),s=cM(),p=dM(),c=1,f="[object Arguments]",m="[object Array]",d="[object Object]",v=Object.prototype,y=v.hasOwnProperty;function B(I,b,S,W,M,O){var w=i(I),A=i(b),N=w?m:a(I),P=A?m:a(b);N=N==f?d:N,P=P==f?d:P;var C=N==d,T=P==d,j=N==P;if(j&&s(I)){if(!s(b))return!1;w=!0,C=!1}if(j&&!C)return O||(O=new e),w||p(I)?n(I,b,S,W,M,O):t(I,b,N,S,W,M,O);if(!(S&c)){var H=C&&y.call(I,"__wrapped__"),q=T&&y.call(b,"__wrapped__");if(H||q){var L=H?I.value():I,K=q?b.value():b;return O||(O=new e),M(L,K,S,W,O)}}return j?(O||(O=new e),r(I,b,S,W,M,O)):!1}return _m=B,_m}var Om,Zx;function Hy(){if(Zx)return Om;Zx=1;var e=nj(),n=Xr();function t(r,a,i,s,p){return r===a?!0:r==null||a==null||!n(r)&&!n(a)?r!==r&&a!==a:e(r,a,i,s,t,p)}return Om=t,Om}var Cm,Jx;function tj(){if(Jx)return Cm;Jx=1;var e=oM(),n=Hy(),t=1,r=2;function a(i,s,p,c){var f=p.length,m=f,d=!c;if(i==null)return!m;for(i=Object(i);f--;){var v=p[f];if(d&&v[2]?v[1]!==i[v[0]]:!(v[0]in i))return!1}for(;++f<m;){v=p[f];var y=v[0],B=i[y],I=v[1];if(d&&v[2]){if(B===void 0&&!(y in i))return!1}else{var b=new e;if(c)var S=c(B,I,y,i,s,b);if(!(S===void 0?n(I,B,t|r,c,b):S))return!1}}return!0}return Cm=a,Cm}var km,ew;function vM(){if(ew)return km;ew=1;var e=ja();function n(t){return t===t&&!e(t)}return km=n,km}var Nm,nw;function rj(){if(nw)return Nm;nw=1;var e=vM(),n=Xc();function t(r){for(var a=n(r),i=a.length;i--;){var s=a[i],p=r[s];a[i]=[s,p,e(p)]}return a}return Nm=t,Nm}var Rm,tw;function gM(){if(tw)return Rm;tw=1;function e(n,t){return function(r){return r==null?!1:r[n]===t&&(t!==void 0||n in Object(r))}}return Rm=e,Rm}var Hm,rw;function aj(){if(rw)return Hm;rw=1;var e=tj(),n=rj(),t=gM();function r(a){var i=n(a);return i.length==1&&i[0][2]?t(i[0][0],i[0][1]):function(s){return s===a||e(s,a,i)}}return Hm=r,Hm}var Tm,aw;function oj(){if(aw)return Tm;aw=1;function e(n,t){return n!=null&&t in Object(n)}return Tm=e,Tm}var Em,ow;function ij(){if(ow)return Em;ow=1;var e=HW(),n=ky(),t=yt(),r=Ny(),a=Ry(),i=Uc();function s(p,c,f){c=e(c,p);for(var m=-1,d=c.length,v=!1;++m<d;){var y=i(c[m]);if(!(v=p!=null&&f(p,y)))break;p=p[y]}return v||++m!=d?v:(d=p==null?0:p.length,!!d&&a(d)&&r(y,d)&&(t(p)||n(p)))}return Em=s,Em}var jm,iw;function uj(){if(iw)return jm;iw=1;var e=oj(),n=ij();function t(r,a){return r!=null&&n(r,a,e)}return jm=t,jm}var Dm,uw;function sj(){if(uw)return Dm;uw=1;var e=Hy(),n=TW(),t=uj(),r=yy(),a=vM(),i=gM(),s=Uc(),p=1,c=2;function f(m,d){return r(m)&&a(d)?i(s(m),d):function(v){var y=n(v,m);return y===void 0&&y===d?t(v,m):e(d,y,p|c)}}return Dm=f,Dm}var $m,sw;function Xi(){if(sw)return $m;sw=1;function e(n){return n}return $m=e,$m}var Lm,pw;function pj(){if(pw)return Lm;pw=1;function e(n){return function(t){return t==null?void 0:t[n]}}return Lm=e,Lm}var Fm,lw;function lj(){if(lw)return Fm;lw=1;var e=Py();function n(t){return function(r){return e(r,t)}}return Fm=n,Fm}var qm,cw;function cj(){if(cw)return qm;cw=1;var e=pj(),n=lj(),t=yy(),r=Uc();function a(i){return t(i)?e(r(i)):n(i)}return qm=a,qm}var zm,fw;function Mr(){if(fw)return zm;fw=1;var e=aj(),n=sj(),t=Xi(),r=yt(),a=cj();function i(s){return typeof s=="function"?s:s==null?t:typeof s=="object"?r(s)?n(s[0],s[1]):e(s):a(s)}return zm=i,zm}var Um,dw;function yM(){if(dw)return Um;dw=1;function e(n,t,r,a){for(var i=n.length,s=r+(a?1:-1);a?s--:++s<i;)if(t(n[s],s,n))return s;return-1}return Um=e,Um}var Vm,mw;function fj(){if(mw)return Vm;mw=1;function e(n){return n!==n}return Vm=e,Vm}var Gm,hw;function dj(){if(hw)return Gm;hw=1;function e(n,t,r){for(var a=r-1,i=n.length;++a<i;)if(n[a]===t)return a;return-1}return Gm=e,Gm}var Km,vw;function mj(){if(vw)return Km;vw=1;var e=yM(),n=fj(),t=dj();function r(a,i,s){return i===i?t(a,i,s):e(a,n,s)}return Km=r,Km}var Qm,gw;function hj(){if(gw)return Qm;gw=1;var e=mj();function n(t,r){var a=t==null?0:t.length;return!!a&&e(t,r,0)>-1}return Qm=n,Qm}var Ym,yw;function vj(){if(yw)return Ym;yw=1;function e(n,t,r){for(var a=-1,i=n==null?0:n.length;++a<i;)if(r(t,n[a]))return!0;return!1}return Ym=e,Ym}var Xm,bw;function gj(){if(bw)return Xm;bw=1;function e(){}return Xm=e,Xm}var Zm,Iw;function yj(){if(Iw)return Zm;Iw=1;var e=hM(),n=gj(),t=Cy(),r=1/0,a=e&&1/t(new e([,-0]))[1]==r?function(i){return new e(i)}:n;return Zm=a,Zm}var Jm,Bw;function bj(){if(Bw)return Jm;Bw=1;var e=iM(),n=hj(),t=vj(),r=sM(),a=yj(),i=Cy(),s=200;function p(c,f,m){var d=-1,v=n,y=c.length,B=!0,I=[],b=I;if(m)B=!1,v=t;else if(y>=s){var S=f?null:a(c);if(S)return i(S);B=!1,v=r,b=new e}else b=f?[]:I;e:for(;++d<y;){var W=c[d],M=f?f(W):W;if(W=m||W!==0?W:0,B&&M===M){for(var O=b.length;O--;)if(b[O]===M)continue e;f&&b.push(M),I.push(W)}else v(b,M,m)||(b!==I&&b.push(M),I.push(W))}return I}return Jm=p,Jm}var eh,xw;function Ij(){if(xw)return eh;xw=1;var e=Mr(),n=bj();function t(r,a){return r&&r.length?n(r,e(a,2)):[]}return eh=t,eh}var Bj=Ij();const ww=Xe(Bj);function bM(e,n,t){return n===!0?ww(e,t):ke(n)?ww(e,n):e}function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gi(e)}var xj=["ref"];function Pw(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Er(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Pw(Object(t),!0).forEach(function(r){Zc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Pw(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function wj(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Sw(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,BM(r.key),r)}}function Pj(e,n,t){return n&&Sw(e.prototype,n),t&&Sw(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Sj(e,n,t){return n=Fl(n),Wj(e,IM()?Reflect.construct(n,t||[],Fl(e).constructor):n.apply(e,t))}function Wj(e,n){if(n&&(gi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Mj(e)}function Mj(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function IM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(IM=function(){return!!e})()}function Fl(e){return Fl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Fl(e)}function Aj(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Zv(e,n)}function Zv(e,n){return Zv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zv(e,n)}function Zc(e,n,t){return n=BM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function BM(e){var n=_j(e,"string");return gi(n)=="symbol"?n:n+""}function _j(e,n){if(gi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Oj(e,n){if(e==null)return{};var t=Cj(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Cj(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function kj(e){return e.value}function Nj(e,n){if(E.isValidElement(e))return E.cloneElement(e,n);if(typeof e=="function")return E.createElement(e,n);n.ref;var t=Oj(n,xj);return E.createElement(Oy,t)}var Ww=1,Oa=(function(e){function n(){var t;wj(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=Sj(this,n,[].concat(a)),Zc(t,"lastBoundingBox",{width:-1,height:-1}),t}return Aj(n,e),Pj(n,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>Ww||Math.abs(a.height-this.lastBoundingBox.height)>Ww)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,r&&r(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?Er({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var a=this.props,i=a.layout,s=a.align,p=a.verticalAlign,c=a.margin,f=a.chartWidth,m=a.chartHeight,d,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(s==="center"&&i==="vertical"){var y=this.getBBoxSnapshot();d={left:((f||0)-y.width)/2}}else d=s==="right"?{right:c&&c.right||0}:{left:c&&c.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(p==="middle"){var B=this.getBBoxSnapshot();v={top:((m||0)-B.height)/2}}else v=p==="bottom"?{bottom:c&&c.bottom||0}:{top:c&&c.top||0};return Er(Er({},d),v)}},{key:"render",value:function(){var r=this,a=this.props,i=a.content,s=a.width,p=a.height,c=a.wrapperStyle,f=a.payloadUniqBy,m=a.payload,d=Er(Er({position:"absolute",width:s||"auto",height:p||"auto"},this.getDefaultPosition(c)),c);return E.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(y){r.wrapperNode=y}},Nj(i,Er(Er({},this.props),{},{payload:bM(m,f,kj)})))}}],[{key:"getWithHeight",value:function(r,a){var i=Er(Er({},this.defaultProps),r.props),s=i.layout;return s==="vertical"&&pe(r.props.height)?{height:r.props.height}:s==="horizontal"?{width:r.props.width||a}:null}}])})(Y.PureComponent);Zc(Oa,"displayName","Legend");Zc(Oa,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var nh,Mw;function Rj(){if(Mw)return nh;Mw=1;var e=Ks(),n=ky(),t=yt(),r=e?e.isConcatSpreadable:void 0;function a(i){return t(i)||n(i)||!!(r&&i&&i[r])}return nh=a,nh}var th,Aw;function xM(){if(Aw)return th;Aw=1;var e=lM(),n=Rj();function t(r,a,i,s,p){var c=-1,f=r.length;for(i||(i=n),p||(p=[]);++c<f;){var m=r[c];a>0&&i(m)?a>1?t(m,a-1,i,s,p):e(p,m):s||(p[p.length]=m)}return p}return th=t,th}var rh,_w;function Hj(){if(_w)return rh;_w=1;function e(n){return function(t,r,a){for(var i=-1,s=Object(t),p=a(t),c=p.length;c--;){var f=p[n?c:++i];if(r(s[f],f,s)===!1)break}return t}}return rh=e,rh}var ah,Ow;function Tj(){if(Ow)return ah;Ow=1;var e=Hj(),n=e();return ah=n,ah}var oh,Cw;function wM(){if(Cw)return oh;Cw=1;var e=Tj(),n=Xc();function t(r,a){return r&&e(r,a,n)}return oh=t,oh}var ih,kw;function Ej(){if(kw)return ih;kw=1;var e=Ys();function n(t,r){return function(a,i){if(a==null)return a;if(!e(a))return t(a,i);for(var s=a.length,p=r?s:-1,c=Object(a);(r?p--:++p<s)&&i(c[p],p,c)!==!1;);return a}}return ih=n,ih}var uh,Nw;function Ty(){if(Nw)return uh;Nw=1;var e=wM(),n=Ej(),t=n(e);return uh=t,uh}var sh,Rw;function PM(){if(Rw)return sh;Rw=1;var e=Ty(),n=Ys();function t(r,a){var i=-1,s=n(r)?Array(r.length):[];return e(r,function(p,c,f){s[++i]=a(p,c,f)}),s}return sh=t,sh}var ph,Hw;function jj(){if(Hw)return ph;Hw=1;function e(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}return ph=e,ph}var lh,Tw;function Dj(){if(Tw)return lh;Tw=1;var e=Ki();function n(t,r){if(t!==r){var a=t!==void 0,i=t===null,s=t===t,p=e(t),c=r!==void 0,f=r===null,m=r===r,d=e(r);if(!f&&!d&&!p&&t>r||p&&c&&m&&!f&&!d||i&&c&&m||!a&&m||!s)return 1;if(!i&&!p&&!d&&t<r||d&&a&&s&&!i&&!p||f&&a&&s||!c&&s||!m)return-1}return 0}return lh=n,lh}var ch,Ew;function $j(){if(Ew)return ch;Ew=1;var e=Dj();function n(t,r,a){for(var i=-1,s=t.criteria,p=r.criteria,c=s.length,f=a.length;++i<c;){var m=e(s[i],p[i]);if(m){if(i>=f)return m;var d=a[i];return m*(d=="desc"?-1:1)}}return t.index-r.index}return ch=n,ch}var fh,jw;function Lj(){if(jw)return fh;jw=1;var e=wy(),n=Py(),t=Mr(),r=PM(),a=jj(),i=fM(),s=$j(),p=Xi(),c=yt();function f(m,d,v){d.length?d=e(d,function(I){return c(I)?function(b){return n(b,I.length===1?I[0]:I)}:I}):d=[p];var y=-1;d=e(d,i(t));var B=r(m,function(I,b,S){var W=e(d,function(M){return M(I)});return{criteria:W,index:++y,value:I}});return a(B,function(I,b){return s(I,b,v)})}return fh=f,fh}var dh,Dw;function Fj(){if(Dw)return dh;Dw=1;function e(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}return dh=e,dh}var mh,$w;function qj(){if($w)return mh;$w=1;var e=Fj(),n=Math.max;function t(r,a,i){return a=n(a===void 0?r.length-1:a,0),function(){for(var s=arguments,p=-1,c=n(s.length-a,0),f=Array(c);++p<c;)f[p]=s[a+p];p=-1;for(var m=Array(a+1);++p<a;)m[p]=s[p];return m[a]=i(f),e(r,this,m)}}return mh=t,mh}var hh,Lw;function zj(){if(Lw)return hh;Lw=1;function e(n){return function(){return n}}return hh=e,hh}var vh,Fw;function SM(){if(Fw)return vh;Fw=1;var e=xo(),n=(function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch{}})();return vh=n,vh}var gh,qw;function Uj(){if(qw)return gh;qw=1;var e=zj(),n=SM(),t=Xi(),r=n?function(a,i){return n(a,"toString",{configurable:!0,enumerable:!1,value:e(i),writable:!0})}:t;return gh=r,gh}var yh,zw;function Vj(){if(zw)return yh;zw=1;var e=800,n=16,t=Date.now;function r(a){var i=0,s=0;return function(){var p=t(),c=n-(p-s);if(s=p,c>0){if(++i>=e)return arguments[0]}else i=0;return a.apply(void 0,arguments)}}return yh=r,yh}var bh,Uw;function Gj(){if(Uw)return bh;Uw=1;var e=Uj(),n=Vj(),t=n(e);return bh=t,bh}var Ih,Vw;function Kj(){if(Vw)return Ih;Vw=1;var e=Xi(),n=qj(),t=Gj();function r(a,i){return t(n(a,i,e),a+"")}return Ih=r,Ih}var Bh,Gw;function Jc(){if(Gw)return Bh;Gw=1;var e=Iy(),n=Ys(),t=Ny(),r=ja();function a(i,s,p){if(!r(p))return!1;var c=typeof s;return(c=="number"?n(p)&&t(s,p.length):c=="string"&&s in p)?e(p[s],i):!1}return Bh=a,Bh}var xh,Kw;function Qj(){if(Kw)return xh;Kw=1;var e=xM(),n=Lj(),t=Kj(),r=Jc(),a=t(function(i,s){if(i==null)return[];var p=s.length;return p>1&&r(i,s[0],s[1])?s=[]:p>2&&r(s[0],s[1],s[2])&&(s=[s[0]]),n(i,e(s,1),[])});return xh=a,xh}var Yj=Qj();const Ey=Xe(Yj);function hs(e){"@babel/helpers - typeof";return hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hs(e)}function Jv(){return Jv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Jv.apply(this,arguments)}function Xj(e,n){return nD(e)||eD(e,n)||Jj(e,n)||Zj()}function Zj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jj(e,n){if(e){if(typeof e=="string")return Qw(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Qw(e,n)}}function Qw(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function eD(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,s,p=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw a}}return p}}function nD(e){if(Array.isArray(e))return e}function Yw(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function wh(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Yw(Object(t),!0).forEach(function(r){tD(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Yw(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function tD(e,n,t){return n=rD(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function rD(e){var n=aD(e,"string");return hs(n)=="symbol"?n:n+""}function aD(e,n){if(hs(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(hs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function oD(e){return Array.isArray(e)&&En(e[0])&&En(e[1])?e.join(" ~ "):e}var iD=function(n){var t=n.separator,r=t===void 0?" : ":t,a=n.contentStyle,i=a===void 0?{}:a,s=n.itemStyle,p=s===void 0?{}:s,c=n.labelStyle,f=c===void 0?{}:c,m=n.payload,d=n.formatter,v=n.itemSorter,y=n.wrapperClassName,B=n.labelClassName,I=n.label,b=n.labelFormatter,S=n.accessibilityLayer,W=S===void 0?!1:S,M=function(){if(m&&m.length){var H={padding:0,margin:0},q=(v?Ey(m,v):m).map(function(L,K){if(L.type==="none")return null;var U=wh({display:"block",paddingTop:4,paddingBottom:4,color:L.color||"#000"},p),V=L.formatter||d||oD,D=L.value,Q=L.name,X=D,R=Q;if(V&&X!=null&&R!=null){var F=V(D,Q,L,K,m);if(Array.isArray(F)){var J=Xj(F,2);X=J[0],R=J[1]}else X=F}return E.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(K),style:U},En(R)?E.createElement("span",{className:"recharts-tooltip-item-name"},R):null,En(R)?E.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,E.createElement("span",{className:"recharts-tooltip-item-value"},X),E.createElement("span",{className:"recharts-tooltip-item-unit"},L.unit||""))});return E.createElement("ul",{className:"recharts-tooltip-item-list",style:H},q)}return null},O=wh({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},i),w=wh({margin:0},f),A=!Ne(I),N=A?I:"",P=Ee("recharts-default-tooltip",y),C=Ee("recharts-tooltip-label",B);A&&b&&m!==void 0&&m!==null&&(N=b(I,m));var T=W?{role:"status","aria-live":"assertive"}:{};return E.createElement("div",Jv({className:P,style:O},T),E.createElement("p",{className:C,style:w},E.isValidElement(N)?N:"".concat(N)),M())};function vs(e){"@babel/helpers - typeof";return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vs(e)}function vl(e,n,t){return n=uD(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function uD(e){var n=sD(e,"string");return vs(n)=="symbol"?n:n+""}function sD(e,n){if(vs(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var zu="recharts-tooltip-wrapper",pD={visibility:"hidden"};function lD(e){var n=e.coordinate,t=e.translateX,r=e.translateY;return Ee(zu,vl(vl(vl(vl({},"".concat(zu,"-right"),pe(t)&&n&&pe(n.x)&&t>=n.x),"".concat(zu,"-left"),pe(t)&&n&&pe(n.x)&&t<n.x),"".concat(zu,"-bottom"),pe(r)&&n&&pe(n.y)&&r>=n.y),"".concat(zu,"-top"),pe(r)&&n&&pe(n.y)&&r<n.y))}function Xw(e){var n=e.allowEscapeViewBox,t=e.coordinate,r=e.key,a=e.offsetTopLeft,i=e.position,s=e.reverseDirection,p=e.tooltipDimension,c=e.viewBox,f=e.viewBoxDimension;if(i&&pe(i[r]))return i[r];var m=t[r]-p-a,d=t[r]+a;if(n[r])return s[r]?m:d;if(s[r]){var v=m,y=c[r];return v<y?Math.max(d,c[r]):Math.max(m,c[r])}var B=d+p,I=c[r]+f;return B>I?Math.max(m,c[r]):Math.max(d,c[r])}function cD(e){var n=e.translateX,t=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(n,"px, ").concat(t,"px, 0)"):"translate(".concat(n,"px, ").concat(t,"px)")}}function fD(e){var n=e.allowEscapeViewBox,t=e.coordinate,r=e.offsetTopLeft,a=e.position,i=e.reverseDirection,s=e.tooltipBox,p=e.useTranslate3d,c=e.viewBox,f,m,d;return s.height>0&&s.width>0&&t?(m=Xw({allowEscapeViewBox:n,coordinate:t,key:"x",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.width,viewBox:c,viewBoxDimension:c.width}),d=Xw({allowEscapeViewBox:n,coordinate:t,key:"y",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.height,viewBox:c,viewBoxDimension:c.height}),f=cD({translateX:m,translateY:d,useTranslate3d:p})):f=pD,{cssProperties:f,cssClasses:lD({translateX:m,translateY:d,coordinate:t})}}function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yi(e)}function Zw(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Jw(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Zw(Object(t),!0).forEach(function(r){ng(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Zw(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function dD(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function mD(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,MM(r.key),r)}}function hD(e,n,t){return n&&mD(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function vD(e,n,t){return n=ql(n),gD(e,WM()?Reflect.construct(n,t||[],ql(e).constructor):n.apply(e,t))}function gD(e,n){if(n&&(yi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yD(e)}function yD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function WM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(WM=function(){return!!e})()}function ql(e){return ql=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ql(e)}function bD(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&eg(e,n)}function eg(e,n){return eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},eg(e,n)}function ng(e,n,t){return n=MM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function MM(e){var n=ID(e,"string");return yi(n)=="symbol"?n:n+""}function ID(e,n){if(yi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var eP=1,BD=(function(e){function n(){var t;dD(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=vD(this,n,[].concat(a)),ng(t,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),ng(t,"handleKeyDown",function(s){if(s.key==="Escape"){var p,c,f,m;t.setState({dismissed:!0,dismissedAtCoordinate:{x:(p=(c=t.props.coordinate)===null||c===void 0?void 0:c.x)!==null&&p!==void 0?p:0,y:(f=(m=t.props.coordinate)===null||m===void 0?void 0:m.y)!==null&&f!==void 0?f:0}})}}),t}return bD(n,e),hD(n,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>eP||Math.abs(r.height-this.state.lastBoundingBox.height)>eP)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,p=a.animationDuration,c=a.animationEasing,f=a.children,m=a.coordinate,d=a.hasPayload,v=a.isAnimationActive,y=a.offset,B=a.position,I=a.reverseDirection,b=a.useTranslate3d,S=a.viewBox,W=a.wrapperStyle,M=fD({allowEscapeViewBox:s,coordinate:m,offsetTopLeft:y,position:B,reverseDirection:I,tooltipBox:this.state.lastBoundingBox,useTranslate3d:b,viewBox:S}),O=M.cssClasses,w=M.cssProperties,A=Jw(Jw({transition:v&&i?"transform ".concat(p,"ms ").concat(c):void 0},w),{},{pointerEvents:"none",visibility:!this.state.dismissed&&i&&d?"visible":"hidden",position:"absolute",top:0,left:0},W);return E.createElement("div",{tabIndex:-1,className:O,style:A,ref:function(P){r.wrapperNode=P}},f)}}])})(Y.PureComponent),xD=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Zr={isSsr:xD()};function bi(e){"@babel/helpers - typeof";return bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bi(e)}function nP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function tP(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?nP(Object(t),!0).forEach(function(r){jy(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):nP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function wD(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function PD(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_M(r.key),r)}}function SD(e,n,t){return n&&PD(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function WD(e,n,t){return n=zl(n),MD(e,AM()?Reflect.construct(n,t||[],zl(e).constructor):n.apply(e,t))}function MD(e,n){if(n&&(bi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return AD(e)}function AD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(AM=function(){return!!e})()}function zl(e){return zl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},zl(e)}function _D(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&tg(e,n)}function tg(e,n){return tg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},tg(e,n)}function jy(e,n,t){return n=_M(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _M(e){var n=OD(e,"string");return bi(n)=="symbol"?n:n+""}function OD(e,n){if(bi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(bi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function CD(e){return e.dataKey}function kD(e,n){return E.isValidElement(e)?E.cloneElement(e,n):typeof e=="function"?E.createElement(e,n):E.createElement(iD,n)}var Wt=(function(e){function n(){return wD(this,n),WD(this,n,arguments)}return _D(n,e),SD(n,[{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,p=a.animationDuration,c=a.animationEasing,f=a.content,m=a.coordinate,d=a.filterNull,v=a.isAnimationActive,y=a.offset,B=a.payload,I=a.payloadUniqBy,b=a.position,S=a.reverseDirection,W=a.useTranslate3d,M=a.viewBox,O=a.wrapperStyle,w=B??[];d&&w.length&&(w=bM(B.filter(function(N){return N.value!=null&&(N.hide!==!0||r.props.includeHidden)}),I,CD));var A=w.length>0;return E.createElement(BD,{allowEscapeViewBox:s,animationDuration:p,animationEasing:c,isAnimationActive:v,active:i,coordinate:m,hasPayload:A,offset:y,position:b,reverseDirection:S,useTranslate3d:W,viewBox:M,wrapperStyle:O},kD(f,tP(tP({},this.props),{},{payload:w})))}}])})(Y.PureComponent);jy(Wt,"displayName","Tooltip");jy(Wt,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Zr.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var Ph,rP;function ND(){if(rP)return Ph;rP=1;var e=Wr(),n=function(){return e.Date.now()};return Ph=n,Ph}var Sh,aP;function RD(){if(aP)return Sh;aP=1;var e=/\s/;function n(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}return Sh=n,Sh}var Wh,oP;function HD(){if(oP)return Wh;oP=1;var e=RD(),n=/^\s+/;function t(r){return r&&r.slice(0,e(r)+1).replace(n,"")}return Wh=t,Wh}var Mh,iP;function OM(){if(iP)return Mh;iP=1;var e=HD(),n=ja(),t=Ki(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,p=parseInt;function c(f){if(typeof f=="number")return f;if(t(f))return r;if(n(f)){var m=typeof f.valueOf=="function"?f.valueOf():f;f=n(m)?m+"":m}if(typeof f!="string")return f===0?f:+f;f=e(f);var d=i.test(f);return d||s.test(f)?p(f.slice(2),d?2:8):a.test(f)?r:+f}return Mh=c,Mh}var Ah,uP;function TD(){if(uP)return Ah;uP=1;var e=ja(),n=ND(),t=OM(),r="Expected a function",a=Math.max,i=Math.min;function s(p,c,f){var m,d,v,y,B,I,b=0,S=!1,W=!1,M=!0;if(typeof p!="function")throw new TypeError(r);c=t(c)||0,e(f)&&(S=!!f.leading,W="maxWait"in f,v=W?a(t(f.maxWait)||0,c):v,M="trailing"in f?!!f.trailing:M);function O(q){var L=m,K=d;return m=d=void 0,b=q,y=p.apply(K,L),y}function w(q){return b=q,B=setTimeout(P,c),S?O(q):y}function A(q){var L=q-I,K=q-b,U=c-L;return W?i(U,v-K):U}function N(q){var L=q-I,K=q-b;return I===void 0||L>=c||L<0||W&&K>=v}function P(){var q=n();if(N(q))return C(q);B=setTimeout(P,A(q))}function C(q){return B=void 0,M&&m?O(q):(m=d=void 0,y)}function T(){B!==void 0&&clearTimeout(B),b=0,m=I=d=B=void 0}function j(){return B===void 0?y:C(n())}function H(){var q=n(),L=N(q);if(m=arguments,d=this,I=q,L){if(B===void 0)return w(I);if(W)return clearTimeout(B),B=setTimeout(P,c),O(I)}return B===void 0&&(B=setTimeout(P,c)),y}return H.cancel=T,H.flush=j,H}return Ah=s,Ah}var _h,sP;function ED(){if(sP)return _h;sP=1;var e=TD(),n=ja(),t="Expected a function";function r(a,i,s){var p=!0,c=!0;if(typeof a!="function")throw new TypeError(t);return n(s)&&(p="leading"in s?!!s.leading:p,c="trailing"in s?!!s.trailing:c),e(a,i,{leading:p,maxWait:i,trailing:c})}return _h=r,_h}var jD=ED();const CM=Xe(jD);function gs(e){"@babel/helpers - typeof";return gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gs(e)}function pP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function gl(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?pP(Object(t),!0).forEach(function(r){DD(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function DD(e,n,t){return n=$D(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function $D(e){var n=LD(e,"string");return gs(n)=="symbol"?n:n+""}function LD(e,n){if(gs(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(gs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function FD(e,n){return VD(e)||UD(e,n)||zD(e,n)||qD()}function qD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zD(e,n){if(e){if(typeof e=="string")return lP(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return lP(e,n)}}function lP(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function UD(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,s,p=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw a}}return p}}function VD(e){if(Array.isArray(e))return e}var Dy=Y.forwardRef(function(e,n){var t=e.aspect,r=e.initialDimension,a=r===void 0?{width:-1,height:-1}:r,i=e.width,s=i===void 0?"100%":i,p=e.height,c=p===void 0?"100%":p,f=e.minWidth,m=f===void 0?0:f,d=e.minHeight,v=e.maxHeight,y=e.children,B=e.debounce,I=B===void 0?0:B,b=e.id,S=e.className,W=e.onResize,M=e.style,O=M===void 0?{}:M,w=Y.useRef(null),A=Y.useRef();A.current=W,Y.useImperativeHandle(n,function(){return Object.defineProperty(w.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),w.current},configurable:!0})});var N=Y.useState({containerWidth:a.width,containerHeight:a.height}),P=FD(N,2),C=P[0],T=P[1],j=Y.useCallback(function(q,L){T(function(K){var U=Math.round(q),V=Math.round(L);return K.containerWidth===U&&K.containerHeight===V?K:{containerWidth:U,containerHeight:V}})},[]);Y.useEffect(function(){var q=function(Q){var X,R=Q[0].contentRect,F=R.width,J=R.height;j(F,J),(X=A.current)===null||X===void 0||X.call(A,F,J)};I>0&&(q=CM(q,I,{trailing:!0,leading:!1}));var L=new ResizeObserver(q),K=w.current.getBoundingClientRect(),U=K.width,V=K.height;return j(U,V),L.observe(w.current),function(){L.disconnect()}},[j,I]);var H=Y.useMemo(function(){var q=C.containerWidth,L=C.containerHeight;if(q<0||L<0)return null;pr(lo(s)||lo(c),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,s,c),pr(!t||t>0,"The aspect(%s) must be greater than zero.",t);var K=lo(s)?q:s,U=lo(c)?L:c;t&&t>0&&(K?U=K/t:U&&(K=U*t),v&&U>v&&(U=v)),pr(K>0||U>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,K,U,s,c,m,d,t);var V=!Array.isArray(y)&&Ur(y.type).endsWith("Chart");return E.Children.map(y,function(D){return E.isValidElement(D)?Y.cloneElement(D,gl({width:K,height:U},V?{style:gl({height:"100%",width:"100%",maxHeight:U,maxWidth:K},D.props.style)}:{})):D})},[t,y,c,v,d,m,C,s]);return E.createElement("div",{id:b?"".concat(b):void 0,className:Ee("recharts-responsive-container",S),style:gl(gl({},O),{},{width:s,height:c,minWidth:m,minHeight:d,maxHeight:v}),ref:w},H)}),Xs=function(n){return null};Xs.displayName="Cell";function ys(e){"@babel/helpers - typeof";return ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ys(e)}function cP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function rg(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?cP(Object(t),!0).forEach(function(r){GD(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):cP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function GD(e,n,t){return n=KD(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function KD(e){var n=QD(e,"string");return ys(n)=="symbol"?n:n+""}function QD(e,n){if(ys(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ys(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var ei={widthCache:{},cacheCount:0},YD=2e3,XD={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},fP="recharts_measurement_span";function ZD(e){var n=rg({},e);return Object.keys(n).forEach(function(t){n[t]||delete n[t]}),n}var rs=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(n==null||Zr.isSsr)return{width:0,height:0};var r=ZD(t),a=JSON.stringify({text:n,copyStyle:r});if(ei.widthCache[a])return ei.widthCache[a];try{var i=document.getElementById(fP);i||(i=document.createElement("span"),i.setAttribute("id",fP),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));var s=rg(rg({},XD),r);Object.assign(i.style,s),i.textContent="".concat(n);var p=i.getBoundingClientRect(),c={width:p.width,height:p.height};return ei.widthCache[a]=c,++ei.cacheCount>YD&&(ei.cacheCount=0,ei.widthCache={}),c}catch{return{width:0,height:0}}},JD=function(n){return{top:n.top+window.scrollY-document.documentElement.clientTop,left:n.left+window.scrollX-document.documentElement.clientLeft}};function bs(e){"@babel/helpers - typeof";return bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bs(e)}function Ul(e,n){return r$(e)||t$(e,n)||n$(e,n)||e$()}function e$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n$(e,n){if(e){if(typeof e=="string")return dP(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return dP(e,n)}}function dP(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function t$(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,s,p=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw a}}return p}}function r$(e){if(Array.isArray(e))return e}function a$(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function mP(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i$(r.key),r)}}function o$(e,n,t){return n&&mP(e.prototype,n),t&&mP(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function i$(e){var n=u$(e,"string");return bs(n)=="symbol"?n:n+""}function u$(e,n){if(bs(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(bs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var hP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,vP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,s$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,p$=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,kM={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},l$=Object.keys(kM),oi="NaN";function c$(e,n){return e*kM[n]}var yl=(function(){function e(n,t){a$(this,e),this.num=n,this.unit=t,this.num=n,this.unit=t,Number.isNaN(n)&&(this.unit=""),t!==""&&!s$.test(t)&&(this.num=NaN,this.unit=""),l$.includes(t)&&(this.num=c$(n,t),this.unit="px")}return o$(e,[{key:"add",value:function(t){return this.unit!==t.unit?new e(NaN,""):new e(this.num+t.num,this.unit)}},{key:"subtract",value:function(t){return this.unit!==t.unit?new e(NaN,""):new e(this.num-t.num,this.unit)}},{key:"multiply",value:function(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new e(NaN,""):new e(this.num*t.num,this.unit||t.unit)}},{key:"divide",value:function(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new e(NaN,""):new e(this.num/t.num,this.unit||t.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(t){var r,a=(r=p$.exec(t))!==null&&r!==void 0?r:[],i=Ul(a,3),s=i[1],p=i[2];return new e(parseFloat(s),p??"")}}])})();function NM(e){if(e.includes(oi))return oi;for(var n=e;n.includes("*")||n.includes("/");){var t,r=(t=hP.exec(n))!==null&&t!==void 0?t:[],a=Ul(r,4),i=a[1],s=a[2],p=a[3],c=yl.parse(i??""),f=yl.parse(p??""),m=s==="*"?c.multiply(f):c.divide(f);if(m.isNaN())return oi;n=n.replace(hP,m.toString())}for(;n.includes("+")||/.-\d+(?:\.\d+)?/.test(n);){var d,v=(d=vP.exec(n))!==null&&d!==void 0?d:[],y=Ul(v,4),B=y[1],I=y[2],b=y[3],S=yl.parse(B??""),W=yl.parse(b??""),M=I==="+"?S.add(W):S.subtract(W);if(M.isNaN())return oi;n=n.replace(vP,M.toString())}return n}var gP=/\(([^()]*)\)/;function f$(e){for(var n=e;n.includes("(");){var t=gP.exec(n),r=Ul(t,2),a=r[1];n=n.replace(gP,NM(a))}return n}function d$(e){var n=e.replace(/\s+/g,"");return n=f$(n),n=NM(n),n}function m$(e){try{return d$(e)}catch{return oi}}function Oh(e){var n=m$(e.slice(5,-1));return n===oi?"":n}var h$=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],v$=["dx","dy","angle","className","breakAll"];function ag(){return ag=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ag.apply(this,arguments)}function yP(e,n){if(e==null)return{};var t=g$(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function g$(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function bP(e,n){return B$(e)||I$(e,n)||b$(e,n)||y$()}function y$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b$(e,n){if(e){if(typeof e=="string")return IP(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return IP(e,n)}}function IP(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function I$(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,s,p=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw a}}return p}}function B$(e){if(Array.isArray(e))return e}var RM=/[ \f\n\r\t\v\u2028\u2029]+/,HM=function(n){var t=n.children,r=n.breakAll,a=n.style;try{var i=[];Ne(t)||(r?i=t.toString().split(""):i=t.toString().split(RM));var s=i.map(function(c){return{word:c,width:rs(c,a).width}}),p=r?0:rs(" ",a).width;return{wordsWithComputedWidth:s,spaceWidth:p}}catch{return null}},x$=function(n,t,r,a,i){var s=n.maxLines,p=n.children,c=n.style,f=n.breakAll,m=pe(s),d=p,v=function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return K.reduce(function(U,V){var D=V.word,Q=V.width,X=U[U.length-1];if(X&&(a==null||i||X.width+Q+r<Number(a)))X.words.push(D),X.width+=Q+r;else{var R={words:[D],width:Q};U.push(R)}return U},[])},y=v(t),B=function(K){return K.reduce(function(U,V){return U.width>V.width?U:V})};if(!m)return y;for(var I="…",b=function(K){var U=d.slice(0,K),V=HM({breakAll:f,style:c,children:U+I}).wordsWithComputedWidth,D=v(V),Q=D.length>s||B(D).width>Number(a);return[Q,D]},S=0,W=d.length-1,M=0,O;S<=W&&M<=d.length-1;){var w=Math.floor((S+W)/2),A=w-1,N=b(A),P=bP(N,2),C=P[0],T=P[1],j=b(w),H=bP(j,1),q=H[0];if(!C&&!q&&(S=w+1),C&&q&&(W=w-1),!C&&q){O=T;break}M++}return O||y},BP=function(n){var t=Ne(n)?[]:n.toString().split(RM);return[{words:t}]},w$=function(n){var t=n.width,r=n.scaleToFit,a=n.children,i=n.style,s=n.breakAll,p=n.maxLines;if((t||r)&&!Zr.isSsr){var c,f,m=HM({breakAll:s,children:a,style:i});if(m){var d=m.wordsWithComputedWidth,v=m.spaceWidth;c=d,f=v}else return BP(a);return x$({breakAll:s,children:a,maxLines:p,style:i},c,f,t,r)}return BP(a)},xP="#808080",yo=function(n){var t=n.x,r=t===void 0?0:t,a=n.y,i=a===void 0?0:a,s=n.lineHeight,p=s===void 0?"1em":s,c=n.capHeight,f=c===void 0?"0.71em":c,m=n.scaleToFit,d=m===void 0?!1:m,v=n.textAnchor,y=v===void 0?"start":v,B=n.verticalAnchor,I=B===void 0?"end":B,b=n.fill,S=b===void 0?xP:b,W=yP(n,h$),M=Y.useMemo(function(){return w$({breakAll:W.breakAll,children:W.children,maxLines:W.maxLines,scaleToFit:d,style:W.style,width:W.width})},[W.breakAll,W.children,W.maxLines,d,W.style,W.width]),O=W.dx,w=W.dy,A=W.angle,N=W.className,P=W.breakAll,C=yP(W,v$);if(!En(r)||!En(i))return null;var T=r+(pe(O)?O:0),j=i+(pe(w)?w:0),H;switch(I){case"start":H=Oh("calc(".concat(f,")"));break;case"middle":H=Oh("calc(".concat((M.length-1)/2," * -").concat(p," + (").concat(f," / 2))"));break;default:H=Oh("calc(".concat(M.length-1," * -").concat(p,")"));break}var q=[];if(d){var L=M[0].width,K=W.width;q.push("scale(".concat((pe(K)?K/L:1)/L,")"))}return A&&q.push("rotate(".concat(A,", ").concat(T,", ").concat(j,")")),q.length&&(C.transform=q.join(" ")),E.createElement("text",ag({},We(C,!0),{x:T,y:j,className:Ee("recharts-text",N),textAnchor:y,fill:S.includes("url")?xP:S}),M.map(function(U,V){var D=U.words.join(P?"":" ");return E.createElement("tspan",{x:T,dy:V===0?H:p,key:"".concat(D,"-").concat(V)},D)}))};function Ca(e,n){return e==null||n==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function P$(e,n){return e==null||n==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function $y(e){let n,t,r;e.length!==2?(n=Ca,t=(p,c)=>Ca(e(p),c),r=(p,c)=>e(p)-c):(n=e===Ca||e===P$?e:S$,t=e,r=e);function a(p,c,f=0,m=p.length){if(f<m){if(n(c,c)!==0)return m;do{const d=f+m>>>1;t(p[d],c)<0?f=d+1:m=d}while(f<m)}return f}function i(p,c,f=0,m=p.length){if(f<m){if(n(c,c)!==0)return m;do{const d=f+m>>>1;t(p[d],c)<=0?f=d+1:m=d}while(f<m)}return f}function s(p,c,f=0,m=p.length){const d=a(p,c,f,m-1);return d>f&&r(p[d-1],c)>-r(p[d],c)?d-1:d}return{left:a,center:s,right:i}}function S$(){return 0}function TM(e){return e===null?NaN:+e}function*W$(e,n){for(let t of e)t!=null&&(t=+t)>=t&&(yield t)}const M$=$y(Ca),Zs=M$.right;$y(TM).center;class wP extends Map{constructor(n,t=O$){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),n!=null)for(const[r,a]of n)this.set(r,a)}get(n){return super.get(PP(this,n))}has(n){return super.has(PP(this,n))}set(n,t){return super.set(A$(this,n),t)}delete(n){return super.delete(_$(this,n))}}function PP({_intern:e,_key:n},t){const r=n(t);return e.has(r)?e.get(r):t}function A$({_intern:e,_key:n},t){const r=n(t);return e.has(r)?e.get(r):(e.set(r,t),t)}function _$({_intern:e,_key:n},t){const r=n(t);return e.has(r)&&(t=e.get(r),e.delete(r)),t}function O$(e){return e!==null&&typeof e=="object"?e.valueOf():e}function C$(e=Ca){if(e===Ca)return EM;if(typeof e!="function")throw new TypeError("compare is not a function");return(n,t)=>{const r=e(n,t);return r||r===0?r:(e(t,t)===0)-(e(n,n)===0)}}function EM(e,n){return(e==null||!(e>=e))-(n==null||!(n>=n))||(e<n?-1:e>n?1:0)}const k$=Math.sqrt(50),N$=Math.sqrt(10),R$=Math.sqrt(2);function Vl(e,n,t){const r=(n-e)/Math.max(0,t),a=Math.floor(Math.log10(r)),i=r/Math.pow(10,a),s=i>=k$?10:i>=N$?5:i>=R$?2:1;let p,c,f;return a<0?(f=Math.pow(10,-a)/s,p=Math.round(e*f),c=Math.round(n*f),p/f<e&&++p,c/f>n&&--c,f=-f):(f=Math.pow(10,a)*s,p=Math.round(e/f),c=Math.round(n/f),p*f<e&&++p,c*f>n&&--c),c<p&&.5<=t&&t<2?Vl(e,n,t*2):[p,c,f]}function og(e,n,t){if(n=+n,e=+e,t=+t,!(t>0))return[];if(e===n)return[e];const r=n<e,[a,i,s]=r?Vl(n,e,t):Vl(e,n,t);if(!(i>=a))return[];const p=i-a+1,c=new Array(p);if(r)if(s<0)for(let f=0;f<p;++f)c[f]=(i-f)/-s;else for(let f=0;f<p;++f)c[f]=(i-f)*s;else if(s<0)for(let f=0;f<p;++f)c[f]=(a+f)/-s;else for(let f=0;f<p;++f)c[f]=(a+f)*s;return c}function ig(e,n,t){return n=+n,e=+e,t=+t,Vl(e,n,t)[2]}function ug(e,n,t){n=+n,e=+e,t=+t;const r=n<e,a=r?ig(n,e,t):ig(e,n,t);return(r?-1:1)*(a<0?1/-a:a)}function SP(e,n){let t;for(const r of e)r!=null&&(t<r||t===void 0&&r>=r)&&(t=r);return t}function WP(e,n){let t;for(const r of e)r!=null&&(t>r||t===void 0&&r>=r)&&(t=r);return t}function jM(e,n,t=0,r=1/0,a){if(n=Math.floor(n),t=Math.floor(Math.max(0,t)),r=Math.floor(Math.min(e.length-1,r)),!(t<=n&&n<=r))return e;for(a=a===void 0?EM:C$(a);r>t;){if(r-t>600){const c=r-t+1,f=n-t+1,m=Math.log(c),d=.5*Math.exp(2*m/3),v=.5*Math.sqrt(m*d*(c-d)/c)*(f-c/2<0?-1:1),y=Math.max(t,Math.floor(n-f*d/c+v)),B=Math.min(r,Math.floor(n+(c-f)*d/c+v));jM(e,n,y,B,a)}const i=e[n];let s=t,p=r;for(Uu(e,t,n),a(e[r],i)>0&&Uu(e,t,r);s<p;){for(Uu(e,s,p),++s,--p;a(e[s],i)<0;)++s;for(;a(e[p],i)>0;)--p}a(e[t],i)===0?Uu(e,t,p):(++p,Uu(e,p,r)),p<=n&&(t=p+1),n<=p&&(r=p-1)}return e}function Uu(e,n,t){const r=e[n];e[n]=e[t],e[t]=r}function H$(e,n,t){if(e=Float64Array.from(W$(e)),!(!(r=e.length)||isNaN(n=+n))){if(n<=0||r<2)return WP(e);if(n>=1)return SP(e);var r,a=(r-1)*n,i=Math.floor(a),s=SP(jM(e,i).subarray(0,i+1)),p=WP(e.subarray(i+1));return s+(p-s)*(a-i)}}function T$(e,n,t=TM){if(!(!(r=e.length)||isNaN(n=+n))){if(n<=0||r<2)return+t(e[0],0,e);if(n>=1)return+t(e[r-1],r-1,e);var r,a=(r-1)*n,i=Math.floor(a),s=+t(e[i],i,e),p=+t(e[i+1],i+1,e);return s+(p-s)*(a-i)}}function E$(e,n,t){e=+e,n=+n,t=(a=arguments.length)<2?(n=e,e=0,1):a<3?1:+t;for(var r=-1,a=Math.max(0,Math.ceil((n-e)/t))|0,i=new Array(a);++r<a;)i[r]=e+r*t;return i}function Yt(e,n){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(n).domain(e);break}return this}function Jr(e,n){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof n=="function"?this.interpolator(n):this.range(n);break}}return this}const sg=Symbol("implicit");function Ly(){var e=new wP,n=[],t=[],r=sg;function a(i){let s=e.get(i);if(s===void 0){if(r!==sg)return r;e.set(i,s=n.push(i)-1)}return t[s%t.length]}return a.domain=function(i){if(!arguments.length)return n.slice();n=[],e=new wP;for(const s of i)e.has(s)||e.set(s,n.push(s)-1);return a},a.range=function(i){return arguments.length?(t=Array.from(i),a):t.slice()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return Ly(n,t).unknown(r)},Yt.apply(a,arguments),a}function Is(){var e=Ly().unknown(void 0),n=e.domain,t=e.range,r=0,a=1,i,s,p=!1,c=0,f=0,m=.5;delete e.unknown;function d(){var v=n().length,y=a<r,B=y?a:r,I=y?r:a;i=(I-B)/Math.max(1,v-c+f*2),p&&(i=Math.floor(i)),B+=(I-B-i*(v-c))*m,s=i*(1-c),p&&(B=Math.round(B),s=Math.round(s));var b=E$(v).map(function(S){return B+i*S});return t(y?b.reverse():b)}return e.domain=function(v){return arguments.length?(n(v),d()):n()},e.range=function(v){return arguments.length?([r,a]=v,r=+r,a=+a,d()):[r,a]},e.rangeRound=function(v){return[r,a]=v,r=+r,a=+a,p=!0,d()},e.bandwidth=function(){return s},e.step=function(){return i},e.round=function(v){return arguments.length?(p=!!v,d()):p},e.padding=function(v){return arguments.length?(c=Math.min(1,f=+v),d()):c},e.paddingInner=function(v){return arguments.length?(c=Math.min(1,v),d()):c},e.paddingOuter=function(v){return arguments.length?(f=+v,d()):f},e.align=function(v){return arguments.length?(m=Math.max(0,Math.min(1,v)),d()):m},e.copy=function(){return Is(n(),[r,a]).round(p).paddingInner(c).paddingOuter(f).align(m)},Yt.apply(d(),arguments)}function DM(e){var n=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return DM(n())},e}function as(){return DM(Is.apply(null,arguments).paddingInner(1))}function Fy(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function $M(e,n){var t=Object.create(e.prototype);for(var r in n)t[r]=n[r];return t}function Js(){}var Bs=.7,Gl=1/Bs,ci="\\s*([+-]?\\d+)\\s*",xs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",j$=/^#([0-9a-f]{3,8})$/,D$=new RegExp(`^rgb\\(${ci},${ci},${ci}\\)$`),$$=new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`),L$=new RegExp(`^rgba\\(${ci},${ci},${ci},${xs}\\)$`),F$=new RegExp(`^rgba\\(${xr},${xr},${xr},${xs}\\)$`),q$=new RegExp(`^hsl\\(${xs},${xr},${xr}\\)$`),z$=new RegExp(`^hsla\\(${xs},${xr},${xr},${xs}\\)$`),MP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Fy(Js,ws,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:AP,formatHex:AP,formatHex8:U$,formatHsl:V$,formatRgb:_P,toString:_P});function AP(){return this.rgb().formatHex()}function U$(){return this.rgb().formatHex8()}function V$(){return LM(this).formatHsl()}function _P(){return this.rgb().formatRgb()}function ws(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=j$.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?OP(n):t===3?new gt(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?bl(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?bl(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=D$.exec(e))?new gt(n[1],n[2],n[3],1):(n=$$.exec(e))?new gt(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=L$.exec(e))?bl(n[1],n[2],n[3],n[4]):(n=F$.exec(e))?bl(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=q$.exec(e))?NP(n[1],n[2]/100,n[3]/100,1):(n=z$.exec(e))?NP(n[1],n[2]/100,n[3]/100,n[4]):MP.hasOwnProperty(e)?OP(MP[e]):e==="transparent"?new gt(NaN,NaN,NaN,0):null}function OP(e){return new gt(e>>16&255,e>>8&255,e&255,1)}function bl(e,n,t,r){return r<=0&&(e=n=t=NaN),new gt(e,n,t,r)}function G$(e){return e instanceof Js||(e=ws(e)),e?(e=e.rgb(),new gt(e.r,e.g,e.b,e.opacity)):new gt}function pg(e,n,t,r){return arguments.length===1?G$(e):new gt(e,n,t,r??1)}function gt(e,n,t,r){this.r=+e,this.g=+n,this.b=+t,this.opacity=+r}Fy(gt,pg,$M(Js,{brighter(e){return e=e==null?Gl:Math.pow(Gl,e),new gt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Bs:Math.pow(Bs,e),new gt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new gt(vo(this.r),vo(this.g),vo(this.b),Kl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:CP,formatHex:CP,formatHex8:K$,formatRgb:kP,toString:kP}));function CP(){return`#${co(this.r)}${co(this.g)}${co(this.b)}`}function K$(){return`#${co(this.r)}${co(this.g)}${co(this.b)}${co((isNaN(this.opacity)?1:this.opacity)*255)}`}function kP(){const e=Kl(this.opacity);return`${e===1?"rgb(":"rgba("}${vo(this.r)}, ${vo(this.g)}, ${vo(this.b)}${e===1?")":`, ${e})`}`}function Kl(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function vo(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function co(e){return e=vo(e),(e<16?"0":"")+e.toString(16)}function NP(e,n,t,r){return r<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new sr(e,n,t,r)}function LM(e){if(e instanceof sr)return new sr(e.h,e.s,e.l,e.opacity);if(e instanceof Js||(e=ws(e)),!e)return new sr;if(e instanceof sr)return e;e=e.rgb();var n=e.r/255,t=e.g/255,r=e.b/255,a=Math.min(n,t,r),i=Math.max(n,t,r),s=NaN,p=i-a,c=(i+a)/2;return p?(n===i?s=(t-r)/p+(t<r)*6:t===i?s=(r-n)/p+2:s=(n-t)/p+4,p/=c<.5?i+a:2-i-a,s*=60):p=c>0&&c<1?0:s,new sr(s,p,c,e.opacity)}function Q$(e,n,t,r){return arguments.length===1?LM(e):new sr(e,n,t,r??1)}function sr(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}Fy(sr,Q$,$M(Js,{brighter(e){return e=e==null?Gl:Math.pow(Gl,e),new sr(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Bs:Math.pow(Bs,e),new sr(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*n,a=2*t-r;return new gt(Ch(e>=240?e-240:e+120,a,r),Ch(e,a,r),Ch(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new sr(RP(this.h),Il(this.s),Il(this.l),Kl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Kl(this.opacity);return`${e===1?"hsl(":"hsla("}${RP(this.h)}, ${Il(this.s)*100}%, ${Il(this.l)*100}%${e===1?")":`, ${e})`}`}}));function RP(e){return e=(e||0)%360,e<0?e+360:e}function Il(e){return Math.max(0,Math.min(1,e||0))}function Ch(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const qy=e=>()=>e;function Y$(e,n){return function(t){return e+t*n}}function X$(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(r){return Math.pow(e+r*n,t)}}function Z$(e){return(e=+e)==1?FM:function(n,t){return t-n?X$(n,t,e):qy(isNaN(n)?t:n)}}function FM(e,n){var t=n-e;return t?Y$(e,t):qy(isNaN(e)?n:e)}const HP=(function e(n){var t=Z$(n);function r(a,i){var s=t((a=pg(a)).r,(i=pg(i)).r),p=t(a.g,i.g),c=t(a.b,i.b),f=FM(a.opacity,i.opacity);return function(m){return a.r=s(m),a.g=p(m),a.b=c(m),a.opacity=f(m),a+""}}return r.gamma=e,r})(1);function J$(e,n){n||(n=[]);var t=e?Math.min(n.length,e.length):0,r=n.slice(),a;return function(i){for(a=0;a<t;++a)r[a]=e[a]*(1-i)+n[a]*i;return r}}function eL(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function nL(e,n){var t=n?n.length:0,r=e?Math.min(t,e.length):0,a=new Array(r),i=new Array(t),s;for(s=0;s<r;++s)a[s]=Zi(e[s],n[s]);for(;s<t;++s)i[s]=n[s];return function(p){for(s=0;s<r;++s)i[s]=a[s](p);return i}}function tL(e,n){var t=new Date;return e=+e,n=+n,function(r){return t.setTime(e*(1-r)+n*r),t}}function Ql(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}function rL(e,n){var t={},r={},a;(e===null||typeof e!="object")&&(e={}),(n===null||typeof n!="object")&&(n={});for(a in n)a in e?t[a]=Zi(e[a],n[a]):r[a]=n[a];return function(i){for(a in t)r[a]=t[a](i);return r}}var lg=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,kh=new RegExp(lg.source,"g");function aL(e){return function(){return e}}function oL(e){return function(n){return e(n)+""}}function iL(e,n){var t=lg.lastIndex=kh.lastIndex=0,r,a,i,s=-1,p=[],c=[];for(e=e+"",n=n+"";(r=lg.exec(e))&&(a=kh.exec(n));)(i=a.index)>t&&(i=n.slice(t,i),p[s]?p[s]+=i:p[++s]=i),(r=r[0])===(a=a[0])?p[s]?p[s]+=a:p[++s]=a:(p[++s]=null,c.push({i:s,x:Ql(r,a)})),t=kh.lastIndex;return t<n.length&&(i=n.slice(t),p[s]?p[s]+=i:p[++s]=i),p.length<2?c[0]?oL(c[0].x):aL(n):(n=c.length,function(f){for(var m=0,d;m<n;++m)p[(d=c[m]).i]=d.x(f);return p.join("")})}function Zi(e,n){var t=typeof n,r;return n==null||t==="boolean"?qy(n):(t==="number"?Ql:t==="string"?(r=ws(n))?(n=r,HP):iL:n instanceof ws?HP:n instanceof Date?tL:eL(n)?J$:Array.isArray(n)?nL:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?rL:Ql)(e,n)}function zy(e,n){return e=+e,n=+n,function(t){return Math.round(e*(1-t)+n*t)}}function uL(e,n){n===void 0&&(n=e,e=Zi);for(var t=0,r=n.length-1,a=n[0],i=new Array(r<0?0:r);t<r;)i[t]=e(a,a=n[++t]);return function(s){var p=Math.max(0,Math.min(r-1,Math.floor(s*=r)));return i[p](s-p)}}function sL(e){return function(){return e}}function Yl(e){return+e}var TP=[0,1];function ut(e){return e}function cg(e,n){return(n-=e=+e)?function(t){return(t-e)/n}:sL(isNaN(n)?NaN:.5)}function pL(e,n){var t;return e>n&&(t=e,e=n,n=t),function(r){return Math.max(e,Math.min(n,r))}}function lL(e,n,t){var r=e[0],a=e[1],i=n[0],s=n[1];return a<r?(r=cg(a,r),i=t(s,i)):(r=cg(r,a),i=t(i,s)),function(p){return i(r(p))}}function cL(e,n,t){var r=Math.min(e.length,n.length)-1,a=new Array(r),i=new Array(r),s=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),n=n.slice().reverse());++s<r;)a[s]=cg(e[s],e[s+1]),i[s]=t(n[s],n[s+1]);return function(p){var c=Zs(e,p,1,r)-1;return i[c](a[c](p))}}function ep(e,n){return n.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function e0(){var e=TP,n=TP,t=Zi,r,a,i,s=ut,p,c,f;function m(){var v=Math.min(e.length,n.length);return s!==ut&&(s=pL(e[0],e[v-1])),p=v>2?cL:lL,c=f=null,d}function d(v){return v==null||isNaN(v=+v)?i:(c||(c=p(e.map(r),n,t)))(r(s(v)))}return d.invert=function(v){return s(a((f||(f=p(n,e.map(r),Ql)))(v)))},d.domain=function(v){return arguments.length?(e=Array.from(v,Yl),m()):e.slice()},d.range=function(v){return arguments.length?(n=Array.from(v),m()):n.slice()},d.rangeRound=function(v){return n=Array.from(v),t=zy,m()},d.clamp=function(v){return arguments.length?(s=v?!0:ut,m()):s!==ut},d.interpolate=function(v){return arguments.length?(t=v,m()):t},d.unknown=function(v){return arguments.length?(i=v,d):i},function(v,y){return r=v,a=y,m()}}function Uy(){return e0()(ut,ut)}function fL(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Xl(e,n){if(!isFinite(e)||e===0)return null;var t=(e=n?e.toExponential(n-1):e.toExponential()).indexOf("e"),r=e.slice(0,t);return[r.length>1?r[0]+r.slice(2):r,+e.slice(t+1)]}function Ii(e){return e=Xl(Math.abs(e)),e?e[1]:NaN}function dL(e,n){return function(t,r){for(var a=t.length,i=[],s=0,p=e[0],c=0;a>0&&p>0&&(c+p+1>r&&(p=Math.max(1,r-c)),i.push(t.substring(a-=p,a+p)),!((c+=p+1)>r));)p=e[s=(s+1)%e.length];return i.reverse().join(n)}}function mL(e){return function(n){return n.replace(/[0-9]/g,function(t){return e[+t]})}}var hL=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Ps(e){if(!(n=hL.exec(e)))throw new Error("invalid format: "+e);var n;return new Vy({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}Ps.prototype=Vy.prototype;function Vy(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Vy.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function vL(e){e:for(var n=e.length,t=1,r=-1,a;t<n;++t)switch(e[t]){case".":r=a=t;break;case"0":r===0&&(r=t),a=t;break;default:if(!+e[t])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Zl;function gL(e,n){var t=Xl(e,n);if(!t)return Zl=void 0,e.toPrecision(n);var r=t[0],a=t[1],i=a-(Zl=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,s=r.length;return i===s?r:i>s?r+new Array(i-s+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Xl(e,Math.max(0,n+i-1))[0]}function EP(e,n){var t=Xl(e,n);if(!t)return e+"";var r=t[0],a=t[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const jP={"%":(e,n)=>(e*100).toFixed(n),b:e=>Math.round(e).toString(2),c:e=>e+"",d:fL,e:(e,n)=>e.toExponential(n),f:(e,n)=>e.toFixed(n),g:(e,n)=>e.toPrecision(n),o:e=>Math.round(e).toString(8),p:(e,n)=>EP(e*100,n),r:EP,s:gL,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function DP(e){return e}var $P=Array.prototype.map,LP=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function yL(e){var n=e.grouping===void 0||e.thousands===void 0?DP:dL($P.call(e.grouping,Number),e.thousands+""),t=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?DP:mL($P.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",p=e.minus===void 0?"−":e.minus+"",c=e.nan===void 0?"NaN":e.nan+"";function f(d,v){d=Ps(d);var y=d.fill,B=d.align,I=d.sign,b=d.symbol,S=d.zero,W=d.width,M=d.comma,O=d.precision,w=d.trim,A=d.type;A==="n"?(M=!0,A="g"):jP[A]||(O===void 0&&(O=12),w=!0,A="g"),(S||y==="0"&&B==="=")&&(S=!0,y="0",B="=");var N=(v&&v.prefix!==void 0?v.prefix:"")+(b==="$"?t:b==="#"&&/[boxX]/.test(A)?"0"+A.toLowerCase():""),P=(b==="$"?r:/[%p]/.test(A)?s:"")+(v&&v.suffix!==void 0?v.suffix:""),C=jP[A],T=/[defgprs%]/.test(A);O=O===void 0?6:/[gprs]/.test(A)?Math.max(1,Math.min(21,O)):Math.max(0,Math.min(20,O));function j(H){var q=N,L=P,K,U,V;if(A==="c")L=C(H)+L,H="";else{H=+H;var D=H<0||1/H<0;if(H=isNaN(H)?c:C(Math.abs(H),O),w&&(H=vL(H)),D&&+H==0&&I!=="+"&&(D=!1),q=(D?I==="("?I:p:I==="-"||I==="("?"":I)+q,L=(A==="s"&&!isNaN(H)&&Zl!==void 0?LP[8+Zl/3]:"")+L+(D&&I==="("?")":""),T){for(K=-1,U=H.length;++K<U;)if(V=H.charCodeAt(K),48>V||V>57){L=(V===46?a+H.slice(K+1):H.slice(K))+L,H=H.slice(0,K);break}}}M&&!S&&(H=n(H,1/0));var Q=q.length+H.length+L.length,X=Q<W?new Array(W-Q+1).join(y):"";switch(M&&S&&(H=n(X+H,X.length?W-L.length:1/0),X=""),B){case"<":H=q+H+L+X;break;case"=":H=q+X+H+L;break;case"^":H=X.slice(0,Q=X.length>>1)+q+H+L+X.slice(Q);break;default:H=X+q+H+L;break}return i(H)}return j.toString=function(){return d+""},j}function m(d,v){var y=Math.max(-8,Math.min(8,Math.floor(Ii(v)/3)))*3,B=Math.pow(10,-y),I=f((d=Ps(d),d.type="f",d),{suffix:LP[8+y/3]});return function(b){return I(B*b)}}return{format:f,formatPrefix:m}}var Bl,Gy,qM;bL({thousands:",",grouping:[3],currency:["$",""]});function bL(e){return Bl=yL(e),Gy=Bl.format,qM=Bl.formatPrefix,Bl}function IL(e){return Math.max(0,-Ii(Math.abs(e)))}function BL(e,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Ii(n)/3)))*3-Ii(Math.abs(e)))}function xL(e,n){return e=Math.abs(e),n=Math.abs(n)-e,Math.max(0,Ii(n)-Ii(e))+1}function zM(e,n,t,r){var a=ug(e,n,t),i;switch(r=Ps(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(n));return r.precision==null&&!isNaN(i=BL(a,s))&&(r.precision=i),qM(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=xL(a,Math.max(Math.abs(e),Math.abs(n))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=IL(a))&&(r.precision=i-(r.type==="%")*2);break}}return Gy(r)}function $a(e){var n=e.domain;return e.ticks=function(t){var r=n();return og(r[0],r[r.length-1],t??10)},e.tickFormat=function(t,r){var a=n();return zM(a[0],a[a.length-1],t??10,r)},e.nice=function(t){t==null&&(t=10);var r=n(),a=0,i=r.length-1,s=r[a],p=r[i],c,f,m=10;for(p<s&&(f=s,s=p,p=f,f=a,a=i,i=f);m-- >0;){if(f=ig(s,p,t),f===c)return r[a]=s,r[i]=p,n(r);if(f>0)s=Math.floor(s/f)*f,p=Math.ceil(p/f)*f;else if(f<0)s=Math.ceil(s*f)/f,p=Math.floor(p*f)/f;else break;c=f}return e},e}function Jl(){var e=Uy();return e.copy=function(){return ep(e,Jl())},Yt.apply(e,arguments),$a(e)}function UM(e){var n;function t(r){return r==null||isNaN(r=+r)?n:r}return t.invert=t,t.domain=t.range=function(r){return arguments.length?(e=Array.from(r,Yl),t):e.slice()},t.unknown=function(r){return arguments.length?(n=r,t):n},t.copy=function(){return UM(e).unknown(n)},e=arguments.length?Array.from(e,Yl):[0,1],$a(t)}function VM(e,n){e=e.slice();var t=0,r=e.length-1,a=e[t],i=e[r],s;return i<a&&(s=t,t=r,r=s,s=a,a=i,i=s),e[t]=n.floor(a),e[r]=n.ceil(i),e}function FP(e){return Math.log(e)}function qP(e){return Math.exp(e)}function wL(e){return-Math.log(-e)}function PL(e){return-Math.exp(-e)}function SL(e){return isFinite(e)?+("1e"+e):e<0?0:e}function WL(e){return e===10?SL:e===Math.E?Math.exp:n=>Math.pow(e,n)}function ML(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),n=>Math.log(n)/e)}function zP(e){return(n,t)=>-e(-n,t)}function Ky(e){const n=e(FP,qP),t=n.domain;let r=10,a,i;function s(){return a=ML(r),i=WL(r),t()[0]<0?(a=zP(a),i=zP(i),e(wL,PL)):e(FP,qP),n}return n.base=function(p){return arguments.length?(r=+p,s()):r},n.domain=function(p){return arguments.length?(t(p),s()):t()},n.ticks=p=>{const c=t();let f=c[0],m=c[c.length-1];const d=m<f;d&&([f,m]=[m,f]);let v=a(f),y=a(m),B,I;const b=p==null?10:+p;let S=[];if(!(r%1)&&y-v<b){if(v=Math.floor(v),y=Math.ceil(y),f>0){for(;v<=y;++v)for(B=1;B<r;++B)if(I=v<0?B/i(-v):B*i(v),!(I<f)){if(I>m)break;S.push(I)}}else for(;v<=y;++v)for(B=r-1;B>=1;--B)if(I=v>0?B/i(-v):B*i(v),!(I<f)){if(I>m)break;S.push(I)}S.length*2<b&&(S=og(f,m,b))}else S=og(v,y,Math.min(y-v,b)).map(i);return d?S.reverse():S},n.tickFormat=(p,c)=>{if(p==null&&(p=10),c==null&&(c=r===10?"s":","),typeof c!="function"&&(!(r%1)&&(c=Ps(c)).precision==null&&(c.trim=!0),c=Gy(c)),p===1/0)return c;const f=Math.max(1,r*p/n.ticks().length);return m=>{let d=m/i(Math.round(a(m)));return d*r<r-.5&&(d*=r),d<=f?c(m):""}},n.nice=()=>t(VM(t(),{floor:p=>i(Math.floor(a(p))),ceil:p=>i(Math.ceil(a(p)))})),n}function GM(){const e=Ky(e0()).domain([1,10]);return e.copy=()=>ep(e,GM()).base(e.base()),Yt.apply(e,arguments),e}function UP(e){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/e))}}function VP(e){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*e}}function Qy(e){var n=1,t=e(UP(n),VP(n));return t.constant=function(r){return arguments.length?e(UP(n=+r),VP(n)):n},$a(t)}function KM(){var e=Qy(e0());return e.copy=function(){return ep(e,KM()).constant(e.constant())},Yt.apply(e,arguments)}function GP(e){return function(n){return n<0?-Math.pow(-n,e):Math.pow(n,e)}}function AL(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function _L(e){return e<0?-e*e:e*e}function Yy(e){var n=e(ut,ut),t=1;function r(){return t===1?e(ut,ut):t===.5?e(AL,_L):e(GP(t),GP(1/t))}return n.exponent=function(a){return arguments.length?(t=+a,r()):t},$a(n)}function Xy(){var e=Yy(e0());return e.copy=function(){return ep(e,Xy()).exponent(e.exponent())},Yt.apply(e,arguments),e}function OL(){return Xy.apply(null,arguments).exponent(.5)}function KP(e){return Math.sign(e)*e*e}function CL(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function QM(){var e=Uy(),n=[0,1],t=!1,r;function a(i){var s=CL(e(i));return isNaN(s)?r:t?Math.round(s):s}return a.invert=function(i){return e.invert(KP(i))},a.domain=function(i){return arguments.length?(e.domain(i),a):e.domain()},a.range=function(i){return arguments.length?(e.range((n=Array.from(i,Yl)).map(KP)),a):n.slice()},a.rangeRound=function(i){return a.range(i).round(!0)},a.round=function(i){return arguments.length?(t=!!i,a):t},a.clamp=function(i){return arguments.length?(e.clamp(i),a):e.clamp()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return QM(e.domain(),n).round(t).clamp(e.clamp()).unknown(r)},Yt.apply(a,arguments),$a(a)}function YM(){var e=[],n=[],t=[],r;function a(){var s=0,p=Math.max(1,n.length);for(t=new Array(p-1);++s<p;)t[s-1]=T$(e,s/p);return i}function i(s){return s==null||isNaN(s=+s)?r:n[Zs(t,s)]}return i.invertExtent=function(s){var p=n.indexOf(s);return p<0?[NaN,NaN]:[p>0?t[p-1]:e[0],p<t.length?t[p]:e[e.length-1]]},i.domain=function(s){if(!arguments.length)return e.slice();e=[];for(let p of s)p!=null&&!isNaN(p=+p)&&e.push(p);return e.sort(Ca),a()},i.range=function(s){return arguments.length?(n=Array.from(s),a()):n.slice()},i.unknown=function(s){return arguments.length?(r=s,i):r},i.quantiles=function(){return t.slice()},i.copy=function(){return YM().domain(e).range(n).unknown(r)},Yt.apply(i,arguments)}function XM(){var e=0,n=1,t=1,r=[.5],a=[0,1],i;function s(c){return c!=null&&c<=c?a[Zs(r,c,0,t)]:i}function p(){var c=-1;for(r=new Array(t);++c<t;)r[c]=((c+1)*n-(c-t)*e)/(t+1);return s}return s.domain=function(c){return arguments.length?([e,n]=c,e=+e,n=+n,p()):[e,n]},s.range=function(c){return arguments.length?(t=(a=Array.from(c)).length-1,p()):a.slice()},s.invertExtent=function(c){var f=a.indexOf(c);return f<0?[NaN,NaN]:f<1?[e,r[0]]:f>=t?[r[t-1],n]:[r[f-1],r[f]]},s.unknown=function(c){return arguments.length&&(i=c),s},s.thresholds=function(){return r.slice()},s.copy=function(){return XM().domain([e,n]).range(a).unknown(i)},Yt.apply($a(s),arguments)}function ZM(){var e=[.5],n=[0,1],t,r=1;function a(i){return i!=null&&i<=i?n[Zs(e,i,0,r)]:t}return a.domain=function(i){return arguments.length?(e=Array.from(i),r=Math.min(e.length,n.length-1),a):e.slice()},a.range=function(i){return arguments.length?(n=Array.from(i),r=Math.min(e.length,n.length-1),a):n.slice()},a.invertExtent=function(i){var s=n.indexOf(i);return[e[s-1],e[s]]},a.unknown=function(i){return arguments.length?(t=i,a):t},a.copy=function(){return ZM().domain(e).range(n).unknown(t)},Yt.apply(a,arguments)}const Nh=new Date,Rh=new Date;function jn(e,n,t,r){function a(i){return e(i=arguments.length===0?new Date:new Date(+i)),i}return a.floor=i=>(e(i=new Date(+i)),i),a.ceil=i=>(e(i=new Date(i-1)),n(i,1),e(i),i),a.round=i=>{const s=a(i),p=a.ceil(i);return i-s<p-i?s:p},a.offset=(i,s)=>(n(i=new Date(+i),s==null?1:Math.floor(s)),i),a.range=(i,s,p)=>{const c=[];if(i=a.ceil(i),p=p==null?1:Math.floor(p),!(i<s)||!(p>0))return c;let f;do c.push(f=new Date(+i)),n(i,p),e(i);while(f<i&&i<s);return c},a.filter=i=>jn(s=>{if(s>=s)for(;e(s),!i(s);)s.setTime(s-1)},(s,p)=>{if(s>=s)if(p<0)for(;++p<=0;)for(;n(s,-1),!i(s););else for(;--p>=0;)for(;n(s,1),!i(s););}),t&&(a.count=(i,s)=>(Nh.setTime(+i),Rh.setTime(+s),e(Nh),e(Rh),Math.floor(t(Nh,Rh))),a.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?a.filter(r?s=>r(s)%i===0:s=>a.count(0,s)%i===0):a)),a}const ec=jn(()=>{},(e,n)=>{e.setTime(+e+n)},(e,n)=>n-e);ec.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?jn(n=>{n.setTime(Math.floor(n/e)*e)},(n,t)=>{n.setTime(+n+t*e)},(n,t)=>(t-n)/e):ec);ec.range;const $r=1e3,Vt=$r*60,Lr=Vt*60,Gr=Lr*24,Zy=Gr*7,QP=Gr*30,Hh=Gr*365,fo=jn(e=>{e.setTime(e-e.getMilliseconds())},(e,n)=>{e.setTime(+e+n*$r)},(e,n)=>(n-e)/$r,e=>e.getUTCSeconds());fo.range;const Jy=jn(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r)},(e,n)=>{e.setTime(+e+n*Vt)},(e,n)=>(n-e)/Vt,e=>e.getMinutes());Jy.range;const eb=jn(e=>{e.setUTCSeconds(0,0)},(e,n)=>{e.setTime(+e+n*Vt)},(e,n)=>(n-e)/Vt,e=>e.getUTCMinutes());eb.range;const nb=jn(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r-e.getMinutes()*Vt)},(e,n)=>{e.setTime(+e+n*Lr)},(e,n)=>(n-e)/Lr,e=>e.getHours());nb.range;const tb=jn(e=>{e.setUTCMinutes(0,0,0)},(e,n)=>{e.setTime(+e+n*Lr)},(e,n)=>(n-e)/Lr,e=>e.getUTCHours());tb.range;const np=jn(e=>e.setHours(0,0,0,0),(e,n)=>e.setDate(e.getDate()+n),(e,n)=>(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*Vt)/Gr,e=>e.getDate()-1);np.range;const n0=jn(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/Gr,e=>e.getUTCDate()-1);n0.range;const JM=jn(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/Gr,e=>Math.floor(e/Gr));JM.range;function wo(e){return jn(n=>{n.setDate(n.getDate()-(n.getDay()+7-e)%7),n.setHours(0,0,0,0)},(n,t)=>{n.setDate(n.getDate()+t*7)},(n,t)=>(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*Vt)/Zy)}const t0=wo(0),nc=wo(1),kL=wo(2),NL=wo(3),Bi=wo(4),RL=wo(5),HL=wo(6);t0.range;nc.range;kL.range;NL.range;Bi.range;RL.range;HL.range;function Po(e){return jn(n=>{n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-e)%7),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCDate(n.getUTCDate()+t*7)},(n,t)=>(t-n)/Zy)}const r0=Po(0),tc=Po(1),TL=Po(2),EL=Po(3),xi=Po(4),jL=Po(5),DL=Po(6);r0.range;tc.range;TL.range;EL.range;xi.range;jL.range;DL.range;const rb=jn(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,n)=>{e.setMonth(e.getMonth()+n)},(e,n)=>n.getMonth()-e.getMonth()+(n.getFullYear()-e.getFullYear())*12,e=>e.getMonth());rb.range;const ab=jn(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCMonth(e.getUTCMonth()+n)},(e,n)=>n.getUTCMonth()-e.getUTCMonth()+(n.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());ab.range;const Kr=jn(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,n)=>{e.setFullYear(e.getFullYear()+n)},(e,n)=>n.getFullYear()-e.getFullYear(),e=>e.getFullYear());Kr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:jn(n=>{n.setFullYear(Math.floor(n.getFullYear()/e)*e),n.setMonth(0,1),n.setHours(0,0,0,0)},(n,t)=>{n.setFullYear(n.getFullYear()+t*e)});Kr.range;const Qr=jn(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCFullYear(e.getUTCFullYear()+n)},(e,n)=>n.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Qr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:jn(n=>{n.setUTCFullYear(Math.floor(n.getUTCFullYear()/e)*e),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCFullYear(n.getUTCFullYear()+t*e)});Qr.range;function eA(e,n,t,r,a,i){const s=[[fo,1,$r],[fo,5,5*$r],[fo,15,15*$r],[fo,30,30*$r],[i,1,Vt],[i,5,5*Vt],[i,15,15*Vt],[i,30,30*Vt],[a,1,Lr],[a,3,3*Lr],[a,6,6*Lr],[a,12,12*Lr],[r,1,Gr],[r,2,2*Gr],[t,1,Zy],[n,1,QP],[n,3,3*QP],[e,1,Hh]];function p(f,m,d){const v=m<f;v&&([f,m]=[m,f]);const y=d&&typeof d.range=="function"?d:c(f,m,d),B=y?y.range(f,+m+1):[];return v?B.reverse():B}function c(f,m,d){const v=Math.abs(m-f)/d,y=$y(([,,b])=>b).right(s,v);if(y===s.length)return e.every(ug(f/Hh,m/Hh,d));if(y===0)return ec.every(Math.max(ug(f,m,d),1));const[B,I]=s[v/s[y-1][2]<s[y][2]/v?y-1:y];return B.every(I)}return[p,c]}const[$L,LL]=eA(Qr,ab,r0,JM,tb,eb),[FL,qL]=eA(Kr,rb,t0,np,nb,Jy);function Th(e){if(0<=e.y&&e.y<100){var n=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return n.setFullYear(e.y),n}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Eh(e){if(0<=e.y&&e.y<100){var n=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return n.setUTCFullYear(e.y),n}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Vu(e,n,t){return{y:e,m:n,d:t,H:0,M:0,S:0,L:0}}function zL(e){var n=e.dateTime,t=e.date,r=e.time,a=e.periods,i=e.days,s=e.shortDays,p=e.months,c=e.shortMonths,f=Gu(a),m=Ku(a),d=Gu(i),v=Ku(i),y=Gu(s),B=Ku(s),I=Gu(p),b=Ku(p),S=Gu(c),W=Ku(c),M={a:V,A:D,b:Q,B:X,c:null,d:n4,e:n4,f:d8,g:w8,G:S8,H:l8,I:c8,j:f8,L:nA,m:m8,M:h8,p:R,q:F,Q:a4,s:o4,S:v8,u:g8,U:y8,V:b8,w:I8,W:B8,x:null,X:null,y:x8,Y:P8,Z:W8,"%":r4},O={a:J,A:ue,b:me,B:ge,c:null,d:t4,e:t4,f:O8,g:$8,G:F8,H:M8,I:A8,j:_8,L:rA,m:C8,M:k8,p:ye,q:fe,Q:a4,s:o4,S:N8,u:R8,U:H8,V:T8,w:E8,W:j8,x:null,X:null,y:D8,Y:L8,Z:q8,"%":r4},w={a:T,A:j,b:H,B:q,c:L,d:JP,e:JP,f:i8,g:ZP,G:XP,H:e4,I:e4,j:t8,L:o8,m:n8,M:r8,p:C,q:e8,Q:s8,s:p8,S:a8,u:QL,U:YL,V:XL,w:KL,W:ZL,x:K,X:U,y:ZP,Y:XP,Z:JL,"%":u8};M.x=A(t,M),M.X=A(r,M),M.c=A(n,M),O.x=A(t,O),O.X=A(r,O),O.c=A(n,O);function A(te,de){return function(ce){var re=[],Te=-1,Pe=0,Ce=te.length,Me,Fe,je;for(ce instanceof Date||(ce=new Date(+ce));++Te<Ce;)te.charCodeAt(Te)===37&&(re.push(te.slice(Pe,Te)),(Fe=YP[Me=te.charAt(++Te)])!=null?Me=te.charAt(++Te):Fe=Me==="e"?" ":"0",(je=de[Me])&&(Me=je(ce,Fe)),re.push(Me),Pe=Te+1);return re.push(te.slice(Pe,Te)),re.join("")}}function N(te,de){return function(ce){var re=Vu(1900,void 0,1),Te=P(re,te,ce+="",0),Pe,Ce;if(Te!=ce.length)return null;if("Q"in re)return new Date(re.Q);if("s"in re)return new Date(re.s*1e3+("L"in re?re.L:0));if(de&&!("Z"in re)&&(re.Z=0),"p"in re&&(re.H=re.H%12+re.p*12),re.m===void 0&&(re.m="q"in re?re.q:0),"V"in re){if(re.V<1||re.V>53)return null;"w"in re||(re.w=1),"Z"in re?(Pe=Eh(Vu(re.y,0,1)),Ce=Pe.getUTCDay(),Pe=Ce>4||Ce===0?tc.ceil(Pe):tc(Pe),Pe=n0.offset(Pe,(re.V-1)*7),re.y=Pe.getUTCFullYear(),re.m=Pe.getUTCMonth(),re.d=Pe.getUTCDate()+(re.w+6)%7):(Pe=Th(Vu(re.y,0,1)),Ce=Pe.getDay(),Pe=Ce>4||Ce===0?nc.ceil(Pe):nc(Pe),Pe=np.offset(Pe,(re.V-1)*7),re.y=Pe.getFullYear(),re.m=Pe.getMonth(),re.d=Pe.getDate()+(re.w+6)%7)}else("W"in re||"U"in re)&&("w"in re||(re.w="u"in re?re.u%7:"W"in re?1:0),Ce="Z"in re?Eh(Vu(re.y,0,1)).getUTCDay():Th(Vu(re.y,0,1)).getDay(),re.m=0,re.d="W"in re?(re.w+6)%7+re.W*7-(Ce+5)%7:re.w+re.U*7-(Ce+6)%7);return"Z"in re?(re.H+=re.Z/100|0,re.M+=re.Z%100,Eh(re)):Th(re)}}function P(te,de,ce,re){for(var Te=0,Pe=de.length,Ce=ce.length,Me,Fe;Te<Pe;){if(re>=Ce)return-1;if(Me=de.charCodeAt(Te++),Me===37){if(Me=de.charAt(Te++),Fe=w[Me in YP?de.charAt(Te++):Me],!Fe||(re=Fe(te,ce,re))<0)return-1}else if(Me!=ce.charCodeAt(re++))return-1}return re}function C(te,de,ce){var re=f.exec(de.slice(ce));return re?(te.p=m.get(re[0].toLowerCase()),ce+re[0].length):-1}function T(te,de,ce){var re=y.exec(de.slice(ce));return re?(te.w=B.get(re[0].toLowerCase()),ce+re[0].length):-1}function j(te,de,ce){var re=d.exec(de.slice(ce));return re?(te.w=v.get(re[0].toLowerCase()),ce+re[0].length):-1}function H(te,de,ce){var re=S.exec(de.slice(ce));return re?(te.m=W.get(re[0].toLowerCase()),ce+re[0].length):-1}function q(te,de,ce){var re=I.exec(de.slice(ce));return re?(te.m=b.get(re[0].toLowerCase()),ce+re[0].length):-1}function L(te,de,ce){return P(te,n,de,ce)}function K(te,de,ce){return P(te,t,de,ce)}function U(te,de,ce){return P(te,r,de,ce)}function V(te){return s[te.getDay()]}function D(te){return i[te.getDay()]}function Q(te){return c[te.getMonth()]}function X(te){return p[te.getMonth()]}function R(te){return a[+(te.getHours()>=12)]}function F(te){return 1+~~(te.getMonth()/3)}function J(te){return s[te.getUTCDay()]}function ue(te){return i[te.getUTCDay()]}function me(te){return c[te.getUTCMonth()]}function ge(te){return p[te.getUTCMonth()]}function ye(te){return a[+(te.getUTCHours()>=12)]}function fe(te){return 1+~~(te.getUTCMonth()/3)}return{format:function(te){var de=A(te+="",M);return de.toString=function(){return te},de},parse:function(te){var de=N(te+="",!1);return de.toString=function(){return te},de},utcFormat:function(te){var de=A(te+="",O);return de.toString=function(){return te},de},utcParse:function(te){var de=N(te+="",!0);return de.toString=function(){return te},de}}}var YP={"-":"",_:" ",0:"0"},Un=/^\s*\d+/,UL=/^%/,VL=/[\\^$*+?|[\]().{}]/g;function Ve(e,n,t){var r=e<0?"-":"",a=(r?-e:e)+"",i=a.length;return r+(i<t?new Array(t-i+1).join(n)+a:a)}function GL(e){return e.replace(VL,"\\$&")}function Gu(e){return new RegExp("^(?:"+e.map(GL).join("|")+")","i")}function Ku(e){return new Map(e.map((n,t)=>[n.toLowerCase(),t]))}function KL(e,n,t){var r=Un.exec(n.slice(t,t+1));return r?(e.w=+r[0],t+r[0].length):-1}function QL(e,n,t){var r=Un.exec(n.slice(t,t+1));return r?(e.u=+r[0],t+r[0].length):-1}function YL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.U=+r[0],t+r[0].length):-1}function XL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.V=+r[0],t+r[0].length):-1}function ZL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.W=+r[0],t+r[0].length):-1}function XP(e,n,t){var r=Un.exec(n.slice(t,t+4));return r?(e.y=+r[0],t+r[0].length):-1}function ZP(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),t+r[0].length):-1}function JL(e,n,t){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(t,t+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),t+r[0].length):-1}function e8(e,n,t){var r=Un.exec(n.slice(t,t+1));return r?(e.q=r[0]*3-3,t+r[0].length):-1}function n8(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.m=r[0]-1,t+r[0].length):-1}function JP(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.d=+r[0],t+r[0].length):-1}function t8(e,n,t){var r=Un.exec(n.slice(t,t+3));return r?(e.m=0,e.d=+r[0],t+r[0].length):-1}function e4(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.H=+r[0],t+r[0].length):-1}function r8(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.M=+r[0],t+r[0].length):-1}function a8(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.S=+r[0],t+r[0].length):-1}function o8(e,n,t){var r=Un.exec(n.slice(t,t+3));return r?(e.L=+r[0],t+r[0].length):-1}function i8(e,n,t){var r=Un.exec(n.slice(t,t+6));return r?(e.L=Math.floor(r[0]/1e3),t+r[0].length):-1}function u8(e,n,t){var r=UL.exec(n.slice(t,t+1));return r?t+r[0].length:-1}function s8(e,n,t){var r=Un.exec(n.slice(t));return r?(e.Q=+r[0],t+r[0].length):-1}function p8(e,n,t){var r=Un.exec(n.slice(t));return r?(e.s=+r[0],t+r[0].length):-1}function n4(e,n){return Ve(e.getDate(),n,2)}function l8(e,n){return Ve(e.getHours(),n,2)}function c8(e,n){return Ve(e.getHours()%12||12,n,2)}function f8(e,n){return Ve(1+np.count(Kr(e),e),n,3)}function nA(e,n){return Ve(e.getMilliseconds(),n,3)}function d8(e,n){return nA(e,n)+"000"}function m8(e,n){return Ve(e.getMonth()+1,n,2)}function h8(e,n){return Ve(e.getMinutes(),n,2)}function v8(e,n){return Ve(e.getSeconds(),n,2)}function g8(e){var n=e.getDay();return n===0?7:n}function y8(e,n){return Ve(t0.count(Kr(e)-1,e),n,2)}function tA(e){var n=e.getDay();return n>=4||n===0?Bi(e):Bi.ceil(e)}function b8(e,n){return e=tA(e),Ve(Bi.count(Kr(e),e)+(Kr(e).getDay()===4),n,2)}function I8(e){return e.getDay()}function B8(e,n){return Ve(nc.count(Kr(e)-1,e),n,2)}function x8(e,n){return Ve(e.getFullYear()%100,n,2)}function w8(e,n){return e=tA(e),Ve(e.getFullYear()%100,n,2)}function P8(e,n){return Ve(e.getFullYear()%1e4,n,4)}function S8(e,n){var t=e.getDay();return e=t>=4||t===0?Bi(e):Bi.ceil(e),Ve(e.getFullYear()%1e4,n,4)}function W8(e){var n=e.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Ve(n/60|0,"0",2)+Ve(n%60,"0",2)}function t4(e,n){return Ve(e.getUTCDate(),n,2)}function M8(e,n){return Ve(e.getUTCHours(),n,2)}function A8(e,n){return Ve(e.getUTCHours()%12||12,n,2)}function _8(e,n){return Ve(1+n0.count(Qr(e),e),n,3)}function rA(e,n){return Ve(e.getUTCMilliseconds(),n,3)}function O8(e,n){return rA(e,n)+"000"}function C8(e,n){return Ve(e.getUTCMonth()+1,n,2)}function k8(e,n){return Ve(e.getUTCMinutes(),n,2)}function N8(e,n){return Ve(e.getUTCSeconds(),n,2)}function R8(e){var n=e.getUTCDay();return n===0?7:n}function H8(e,n){return Ve(r0.count(Qr(e)-1,e),n,2)}function aA(e){var n=e.getUTCDay();return n>=4||n===0?xi(e):xi.ceil(e)}function T8(e,n){return e=aA(e),Ve(xi.count(Qr(e),e)+(Qr(e).getUTCDay()===4),n,2)}function E8(e){return e.getUTCDay()}function j8(e,n){return Ve(tc.count(Qr(e)-1,e),n,2)}function D8(e,n){return Ve(e.getUTCFullYear()%100,n,2)}function $8(e,n){return e=aA(e),Ve(e.getUTCFullYear()%100,n,2)}function L8(e,n){return Ve(e.getUTCFullYear()%1e4,n,4)}function F8(e,n){var t=e.getUTCDay();return e=t>=4||t===0?xi(e):xi.ceil(e),Ve(e.getUTCFullYear()%1e4,n,4)}function q8(){return"+0000"}function r4(){return"%"}function a4(e){return+e}function o4(e){return Math.floor(+e/1e3)}var ni,oA,iA;z8({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function z8(e){return ni=zL(e),oA=ni.format,ni.parse,iA=ni.utcFormat,ni.utcParse,ni}function U8(e){return new Date(e)}function V8(e){return e instanceof Date?+e:+new Date(+e)}function ob(e,n,t,r,a,i,s,p,c,f){var m=Uy(),d=m.invert,v=m.domain,y=f(".%L"),B=f(":%S"),I=f("%I:%M"),b=f("%I %p"),S=f("%a %d"),W=f("%b %d"),M=f("%B"),O=f("%Y");function w(A){return(c(A)<A?y:p(A)<A?B:s(A)<A?I:i(A)<A?b:r(A)<A?a(A)<A?S:W:t(A)<A?M:O)(A)}return m.invert=function(A){return new Date(d(A))},m.domain=function(A){return arguments.length?v(Array.from(A,V8)):v().map(U8)},m.ticks=function(A){var N=v();return e(N[0],N[N.length-1],A??10)},m.tickFormat=function(A,N){return N==null?w:f(N)},m.nice=function(A){var N=v();return(!A||typeof A.range!="function")&&(A=n(N[0],N[N.length-1],A??10)),A?v(VM(N,A)):m},m.copy=function(){return ep(m,ob(e,n,t,r,a,i,s,p,c,f))},m}function G8(){return Yt.apply(ob(FL,qL,Kr,rb,t0,np,nb,Jy,fo,oA).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function K8(){return Yt.apply(ob($L,LL,Qr,ab,r0,n0,tb,eb,fo,iA).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function a0(){var e=0,n=1,t,r,a,i,s=ut,p=!1,c;function f(d){return d==null||isNaN(d=+d)?c:s(a===0?.5:(d=(i(d)-t)*a,p?Math.max(0,Math.min(1,d)):d))}f.domain=function(d){return arguments.length?([e,n]=d,t=i(e=+e),r=i(n=+n),a=t===r?0:1/(r-t),f):[e,n]},f.clamp=function(d){return arguments.length?(p=!!d,f):p},f.interpolator=function(d){return arguments.length?(s=d,f):s};function m(d){return function(v){var y,B;return arguments.length?([y,B]=v,s=d(y,B),f):[s(0),s(1)]}}return f.range=m(Zi),f.rangeRound=m(zy),f.unknown=function(d){return arguments.length?(c=d,f):c},function(d){return i=d,t=d(e),r=d(n),a=t===r?0:1/(r-t),f}}function La(e,n){return n.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function uA(){var e=$a(a0()(ut));return e.copy=function(){return La(e,uA())},Jr.apply(e,arguments)}function sA(){var e=Ky(a0()).domain([1,10]);return e.copy=function(){return La(e,sA()).base(e.base())},Jr.apply(e,arguments)}function pA(){var e=Qy(a0());return e.copy=function(){return La(e,pA()).constant(e.constant())},Jr.apply(e,arguments)}function ib(){var e=Yy(a0());return e.copy=function(){return La(e,ib()).exponent(e.exponent())},Jr.apply(e,arguments)}function Q8(){return ib.apply(null,arguments).exponent(.5)}function lA(){var e=[],n=ut;function t(r){if(r!=null&&!isNaN(r=+r))return n((Zs(e,r,1)-1)/(e.length-1))}return t.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Ca),t},t.interpolator=function(r){return arguments.length?(n=r,t):n},t.range=function(){return e.map((r,a)=>n(a/(e.length-1)))},t.quantiles=function(r){return Array.from({length:r+1},(a,i)=>H$(e,i/r))},t.copy=function(){return lA(n).domain(e)},Jr.apply(t,arguments)}function o0(){var e=0,n=.5,t=1,r=1,a,i,s,p,c,f=ut,m,d=!1,v;function y(I){return isNaN(I=+I)?v:(I=.5+((I=+m(I))-i)*(r*I<r*i?p:c),f(d?Math.max(0,Math.min(1,I)):I))}y.domain=function(I){return arguments.length?([e,n,t]=I,a=m(e=+e),i=m(n=+n),s=m(t=+t),p=a===i?0:.5/(i-a),c=i===s?0:.5/(s-i),r=i<a?-1:1,y):[e,n,t]},y.clamp=function(I){return arguments.length?(d=!!I,y):d},y.interpolator=function(I){return arguments.length?(f=I,y):f};function B(I){return function(b){var S,W,M;return arguments.length?([S,W,M]=b,f=uL(I,[S,W,M]),y):[f(0),f(.5),f(1)]}}return y.range=B(Zi),y.rangeRound=B(zy),y.unknown=function(I){return arguments.length?(v=I,y):v},function(I){return m=I,a=I(e),i=I(n),s=I(t),p=a===i?0:.5/(i-a),c=i===s?0:.5/(s-i),r=i<a?-1:1,y}}function cA(){var e=$a(o0()(ut));return e.copy=function(){return La(e,cA())},Jr.apply(e,arguments)}function fA(){var e=Ky(o0()).domain([.1,1,10]);return e.copy=function(){return La(e,fA()).base(e.base())},Jr.apply(e,arguments)}function dA(){var e=Qy(o0());return e.copy=function(){return La(e,dA()).constant(e.constant())},Jr.apply(e,arguments)}function ub(){var e=Yy(o0());return e.copy=function(){return La(e,ub()).exponent(e.exponent())},Jr.apply(e,arguments)}function Y8(){return ub.apply(null,arguments).exponent(.5)}const i4=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:Is,scaleDiverging:cA,scaleDivergingLog:fA,scaleDivergingPow:ub,scaleDivergingSqrt:Y8,scaleDivergingSymlog:dA,scaleIdentity:UM,scaleImplicit:sg,scaleLinear:Jl,scaleLog:GM,scaleOrdinal:Ly,scalePoint:as,scalePow:Xy,scaleQuantile:YM,scaleQuantize:XM,scaleRadial:QM,scaleSequential:uA,scaleSequentialLog:sA,scaleSequentialPow:ib,scaleSequentialQuantile:lA,scaleSequentialSqrt:Q8,scaleSequentialSymlog:pA,scaleSqrt:OL,scaleSymlog:KM,scaleThreshold:ZM,scaleTime:G8,scaleUtc:K8,tickFormat:zM},Symbol.toStringTag,{value:"Module"}));var jh,u4;function i0(){if(u4)return jh;u4=1;var e=Ki();function n(t,r,a){for(var i=-1,s=t.length;++i<s;){var p=t[i],c=r(p);if(c!=null&&(f===void 0?c===c&&!e(c):a(c,f)))var f=c,m=p}return m}return jh=n,jh}var Dh,s4;function mA(){if(s4)return Dh;s4=1;function e(n,t){return n>t}return Dh=e,Dh}var $h,p4;function X8(){if(p4)return $h;p4=1;var e=i0(),n=mA(),t=Xi();function r(a){return a&&a.length?e(a,t,n):void 0}return $h=r,$h}var Z8=X8();const Ma=Xe(Z8);var Lh,l4;function hA(){if(l4)return Lh;l4=1;function e(n,t){return n<t}return Lh=e,Lh}var Fh,c4;function J8(){if(c4)return Fh;c4=1;var e=i0(),n=hA(),t=Xi();function r(a){return a&&a.length?e(a,t,n):void 0}return Fh=r,Fh}var e7=J8();const u0=Xe(e7);var qh,f4;function n7(){if(f4)return qh;f4=1;var e=wy(),n=Mr(),t=PM(),r=yt();function a(i,s){var p=r(i)?e:t;return p(i,n(s,3))}return qh=a,qh}var zh,d4;function t7(){if(d4)return zh;d4=1;var e=xM(),n=n7();function t(r,a){return e(n(r,a),1)}return zh=t,zh}var r7=t7();const a7=Xe(r7);var Uh,m4;function o7(){if(m4)return Uh;m4=1;var e=Hy();function n(t,r){return e(t,r)}return Uh=n,Uh}var i7=o7();const Ha=Xe(i7);var Ji=1e9,u7={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},pb,fn=!0,Gt="[DecimalError] ",go=Gt+"Invalid argument: ",sb=Gt+"Exponent out of range: ",eu=Math.floor,so=Math.pow,s7=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,At,qn=1e7,pn=7,vA=9007199254740991,rc=eu(vA/pn),Ie={};Ie.absoluteValue=Ie.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};Ie.comparedTo=Ie.cmp=function(e){var n,t,r,a,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(r=i.d.length,a=e.d.length,n=0,t=r<a?r:a;n<t;++n)if(i.d[n]!==e.d[n])return i.d[n]>e.d[n]^i.s<0?1:-1;return r===a?0:r>a^i.s<0?1:-1};Ie.decimalPlaces=Ie.dp=function(){var e=this,n=e.d.length-1,t=(n-e.e)*pn;if(n=e.d[n],n)for(;n%10==0;n/=10)t--;return t<0?0:t};Ie.dividedBy=Ie.div=function(e){return Vr(this,new this.constructor(e))};Ie.dividedToIntegerBy=Ie.idiv=function(e){var n=this,t=n.constructor;return nn(Vr(n,new t(e),0,1),t.precision)};Ie.equals=Ie.eq=function(e){return!this.cmp(e)};Ie.exponent=function(){return Cn(this)};Ie.greaterThan=Ie.gt=function(e){return this.cmp(e)>0};Ie.greaterThanOrEqualTo=Ie.gte=function(e){return this.cmp(e)>=0};Ie.isInteger=Ie.isint=function(){return this.e>this.d.length-2};Ie.isNegative=Ie.isneg=function(){return this.s<0};Ie.isPositive=Ie.ispos=function(){return this.s>0};Ie.isZero=function(){return this.s===0};Ie.lessThan=Ie.lt=function(e){return this.cmp(e)<0};Ie.lessThanOrEqualTo=Ie.lte=function(e){return this.cmp(e)<1};Ie.logarithm=Ie.log=function(e){var n,t=this,r=t.constructor,a=r.precision,i=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(At))throw Error(Gt+"NaN");if(t.s<1)throw Error(Gt+(t.s?"NaN":"-Infinity"));return t.eq(At)?new r(0):(fn=!1,n=Vr(Ss(t,i),Ss(e,i),i),fn=!0,nn(n,a))};Ie.minus=Ie.sub=function(e){var n=this;return e=new n.constructor(e),n.s==e.s?bA(n,e):gA(n,(e.s=-e.s,e))};Ie.modulo=Ie.mod=function(e){var n,t=this,r=t.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(Gt+"NaN");return t.s?(fn=!1,n=Vr(t,e,0,1).times(e),fn=!0,t.minus(n)):nn(new r(t),a)};Ie.naturalExponential=Ie.exp=function(){return yA(this)};Ie.naturalLogarithm=Ie.ln=function(){return Ss(this)};Ie.negated=Ie.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};Ie.plus=Ie.add=function(e){var n=this;return e=new n.constructor(e),n.s==e.s?gA(n,e):bA(n,(e.s=-e.s,e))};Ie.precision=Ie.sd=function(e){var n,t,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(go+e);if(n=Cn(a)+1,r=a.d.length-1,t=r*pn+1,r=a.d[r],r){for(;r%10==0;r/=10)t--;for(r=a.d[0];r>=10;r/=10)t++}return e&&n>t?n:t};Ie.squareRoot=Ie.sqrt=function(){var e,n,t,r,a,i,s,p=this,c=p.constructor;if(p.s<1){if(!p.s)return new c(0);throw Error(Gt+"NaN")}for(e=Cn(p),fn=!1,a=Math.sqrt(+p),a==0||a==1/0?(n=br(p.d),(n.length+e)%2==0&&(n+="0"),a=Math.sqrt(n),e=eu((e+1)/2)-(e<0||e%2),a==1/0?n="5e"+e:(n=a.toExponential(),n=n.slice(0,n.indexOf("e")+1)+e),r=new c(n)):r=new c(a.toString()),t=c.precision,a=s=t+3;;)if(i=r,r=i.plus(Vr(p,i,s+2)).times(.5),br(i.d).slice(0,s)===(n=br(r.d)).slice(0,s)){if(n=n.slice(s-3,s+1),a==s&&n=="4999"){if(nn(i,t+1,0),i.times(i).eq(p)){r=i;break}}else if(n!="9999")break;s+=4}return fn=!0,nn(r,t)};Ie.times=Ie.mul=function(e){var n,t,r,a,i,s,p,c,f,m=this,d=m.constructor,v=m.d,y=(e=new d(e)).d;if(!m.s||!e.s)return new d(0);for(e.s*=m.s,t=m.e+e.e,c=v.length,f=y.length,c<f&&(i=v,v=y,y=i,s=c,c=f,f=s),i=[],s=c+f,r=s;r--;)i.push(0);for(r=f;--r>=0;){for(n=0,a=c+r;a>r;)p=i[a]+y[r]*v[a-r-1]+n,i[a--]=p%qn|0,n=p/qn|0;i[a]=(i[a]+n)%qn|0}for(;!i[--s];)i.pop();return n?++t:i.shift(),e.d=i,e.e=t,fn?nn(e,d.precision):e};Ie.toDecimalPlaces=Ie.todp=function(e,n){var t=this,r=t.constructor;return t=new r(t),e===void 0?t:(Pr(e,0,Ji),n===void 0?n=r.rounding:Pr(n,0,8),nn(t,e+Cn(t)+1,n))};Ie.toExponential=function(e,n){var t,r=this,a=r.constructor;return e===void 0?t=bo(r,!0):(Pr(e,0,Ji),n===void 0?n=a.rounding:Pr(n,0,8),r=nn(new a(r),e+1,n),t=bo(r,!0,e+1)),t};Ie.toFixed=function(e,n){var t,r,a=this,i=a.constructor;return e===void 0?bo(a):(Pr(e,0,Ji),n===void 0?n=i.rounding:Pr(n,0,8),r=nn(new i(a),e+Cn(a)+1,n),t=bo(r.abs(),!1,e+Cn(r)+1),a.isneg()&&!a.isZero()?"-"+t:t)};Ie.toInteger=Ie.toint=function(){var e=this,n=e.constructor;return nn(new n(e),Cn(e)+1,n.rounding)};Ie.toNumber=function(){return+this};Ie.toPower=Ie.pow=function(e){var n,t,r,a,i,s,p=this,c=p.constructor,f=12,m=+(e=new c(e));if(!e.s)return new c(At);if(p=new c(p),!p.s){if(e.s<1)throw Error(Gt+"Infinity");return p}if(p.eq(At))return p;if(r=c.precision,e.eq(At))return nn(p,r);if(n=e.e,t=e.d.length-1,s=n>=t,i=p.s,s){if((t=m<0?-m:m)<=vA){for(a=new c(At),n=Math.ceil(r/pn+4),fn=!1;t%2&&(a=a.times(p),v4(a.d,n)),t=eu(t/2),t!==0;)p=p.times(p),v4(p.d,n);return fn=!0,e.s<0?new c(At).div(a):nn(a,r)}}else if(i<0)throw Error(Gt+"NaN");return i=i<0&&e.d[Math.max(n,t)]&1?-1:1,p.s=1,fn=!1,a=e.times(Ss(p,r+f)),fn=!0,a=yA(a),a.s=i,a};Ie.toPrecision=function(e,n){var t,r,a=this,i=a.constructor;return e===void 0?(t=Cn(a),r=bo(a,t<=i.toExpNeg||t>=i.toExpPos)):(Pr(e,1,Ji),n===void 0?n=i.rounding:Pr(n,0,8),a=nn(new i(a),e,n),t=Cn(a),r=bo(a,e<=t||t<=i.toExpNeg,e)),r};Ie.toSignificantDigits=Ie.tosd=function(e,n){var t=this,r=t.constructor;return e===void 0?(e=r.precision,n=r.rounding):(Pr(e,1,Ji),n===void 0?n=r.rounding:Pr(n,0,8)),nn(new r(t),e,n)};Ie.toString=Ie.valueOf=Ie.val=Ie.toJSON=Ie[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,n=Cn(e),t=e.constructor;return bo(e,n<=t.toExpNeg||n>=t.toExpPos)};function gA(e,n){var t,r,a,i,s,p,c,f,m=e.constructor,d=m.precision;if(!e.s||!n.s)return n.s||(n=new m(e)),fn?nn(n,d):n;if(c=e.d,f=n.d,s=e.e,a=n.e,c=c.slice(),i=s-a,i){for(i<0?(r=c,i=-i,p=f.length):(r=f,a=s,p=c.length),s=Math.ceil(d/pn),p=s>p?s+1:p+1,i>p&&(i=p,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(p=c.length,i=f.length,p-i<0&&(i=p,r=f,f=c,c=r),t=0;i;)t=(c[--i]=c[i]+f[i]+t)/qn|0,c[i]%=qn;for(t&&(c.unshift(t),++a),p=c.length;c[--p]==0;)c.pop();return n.d=c,n.e=a,fn?nn(n,d):n}function Pr(e,n,t){if(e!==~~e||e<n||e>t)throw Error(go+e)}function br(e){var n,t,r,a=e.length-1,i="",s=e[0];if(a>0){for(i+=s,n=1;n<a;n++)r=e[n]+"",t=pn-r.length,t&&(i+=Sa(t)),i+=r;s=e[n],r=s+"",t=pn-r.length,t&&(i+=Sa(t))}else if(s===0)return"0";for(;s%10===0;)s/=10;return i+s}var Vr=(function(){function e(r,a){var i,s=0,p=r.length;for(r=r.slice();p--;)i=r[p]*a+s,r[p]=i%qn|0,s=i/qn|0;return s&&r.unshift(s),r}function n(r,a,i,s){var p,c;if(i!=s)c=i>s?1:-1;else for(p=c=0;p<i;p++)if(r[p]!=a[p]){c=r[p]>a[p]?1:-1;break}return c}function t(r,a,i){for(var s=0;i--;)r[i]-=s,s=r[i]<a[i]?1:0,r[i]=s*qn+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,s){var p,c,f,m,d,v,y,B,I,b,S,W,M,O,w,A,N,P,C=r.constructor,T=r.s==a.s?1:-1,j=r.d,H=a.d;if(!r.s)return new C(r);if(!a.s)throw Error(Gt+"Division by zero");for(c=r.e-a.e,N=H.length,w=j.length,y=new C(T),B=y.d=[],f=0;H[f]==(j[f]||0);)++f;if(H[f]>(j[f]||0)&&--c,i==null?W=i=C.precision:s?W=i+(Cn(r)-Cn(a))+1:W=i,W<0)return new C(0);if(W=W/pn+2|0,f=0,N==1)for(m=0,H=H[0],W++;(f<w||m)&&W--;f++)M=m*qn+(j[f]||0),B[f]=M/H|0,m=M%H|0;else{for(m=qn/(H[0]+1)|0,m>1&&(H=e(H,m),j=e(j,m),N=H.length,w=j.length),O=N,I=j.slice(0,N),b=I.length;b<N;)I[b++]=0;P=H.slice(),P.unshift(0),A=H[0],H[1]>=qn/2&&++A;do m=0,p=n(H,I,N,b),p<0?(S=I[0],N!=b&&(S=S*qn+(I[1]||0)),m=S/A|0,m>1?(m>=qn&&(m=qn-1),d=e(H,m),v=d.length,b=I.length,p=n(d,I,v,b),p==1&&(m--,t(d,N<v?P:H,v))):(m==0&&(p=m=1),d=H.slice()),v=d.length,v<b&&d.unshift(0),t(I,d,b),p==-1&&(b=I.length,p=n(H,I,N,b),p<1&&(m++,t(I,N<b?P:H,b))),b=I.length):p===0&&(m++,I=[0]),B[f++]=m,p&&I[0]?I[b++]=j[O]||0:(I=[j[O]],b=1);while((O++<w||I[0]!==void 0)&&W--)}return B[0]||B.shift(),y.e=c,nn(y,s?i+Cn(y)+1:i)}})();function yA(e,n){var t,r,a,i,s,p,c=0,f=0,m=e.constructor,d=m.precision;if(Cn(e)>16)throw Error(sb+Cn(e));if(!e.s)return new m(At);for(fn=!1,p=d,s=new m(.03125);e.abs().gte(.1);)e=e.times(s),f+=5;for(r=Math.log(so(2,f))/Math.LN10*2+5|0,p+=r,t=a=i=new m(At),m.precision=p;;){if(a=nn(a.times(e),p),t=t.times(++c),s=i.plus(Vr(a,t,p)),br(s.d).slice(0,p)===br(i.d).slice(0,p)){for(;f--;)i=nn(i.times(i),p);return m.precision=d,n==null?(fn=!0,nn(i,d)):i}i=s}}function Cn(e){for(var n=e.e*pn,t=e.d[0];t>=10;t/=10)n++;return n}function Vh(e,n,t){if(n>e.LN10.sd())throw fn=!0,t&&(e.precision=t),Error(Gt+"LN10 precision limit exceeded");return nn(new e(e.LN10),n)}function Sa(e){for(var n="";e--;)n+="0";return n}function Ss(e,n){var t,r,a,i,s,p,c,f,m,d=1,v=10,y=e,B=y.d,I=y.constructor,b=I.precision;if(y.s<1)throw Error(Gt+(y.s?"NaN":"-Infinity"));if(y.eq(At))return new I(0);if(n==null?(fn=!1,f=b):f=n,y.eq(10))return n==null&&(fn=!0),Vh(I,f);if(f+=v,I.precision=f,t=br(B),r=t.charAt(0),i=Cn(y),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&t.charAt(1)>3;)y=y.times(e),t=br(y.d),r=t.charAt(0),d++;i=Cn(y),r>1?(y=new I("0."+t),i++):y=new I(r+"."+t.slice(1))}else return c=Vh(I,f+2,b).times(i+""),y=Ss(new I(r+"."+t.slice(1)),f-v).plus(c),I.precision=b,n==null?(fn=!0,nn(y,b)):y;for(p=s=y=Vr(y.minus(At),y.plus(At),f),m=nn(y.times(y),f),a=3;;){if(s=nn(s.times(m),f),c=p.plus(Vr(s,new I(a),f)),br(c.d).slice(0,f)===br(p.d).slice(0,f))return p=p.times(2),i!==0&&(p=p.plus(Vh(I,f+2,b).times(i+""))),p=Vr(p,new I(d),f),I.precision=b,n==null?(fn=!0,nn(p,b)):p;p=c,a+=2}}function h4(e,n){var t,r,a;for((t=n.indexOf("."))>-1&&(n=n.replace(".","")),(r=n.search(/e/i))>0?(t<0&&(t=r),t+=+n.slice(r+1),n=n.substring(0,r)):t<0&&(t=n.length),r=0;n.charCodeAt(r)===48;)++r;for(a=n.length;n.charCodeAt(a-1)===48;)--a;if(n=n.slice(r,a),n){if(a-=r,t=t-r-1,e.e=eu(t/pn),e.d=[],r=(t+1)%pn,t<0&&(r+=pn),r<a){for(r&&e.d.push(+n.slice(0,r)),a-=pn;r<a;)e.d.push(+n.slice(r,r+=pn));n=n.slice(r),r=pn-n.length}else r-=a;for(;r--;)n+="0";if(e.d.push(+n),fn&&(e.e>rc||e.e<-rc))throw Error(sb+t)}else e.s=0,e.e=0,e.d=[0];return e}function nn(e,n,t){var r,a,i,s,p,c,f,m,d=e.d;for(s=1,i=d[0];i>=10;i/=10)s++;if(r=n-s,r<0)r+=pn,a=n,f=d[m=0];else{if(m=Math.ceil((r+1)/pn),i=d.length,m>=i)return e;for(f=i=d[m],s=1;i>=10;i/=10)s++;r%=pn,a=r-pn+s}if(t!==void 0&&(i=so(10,s-a-1),p=f/i%10|0,c=n<0||d[m+1]!==void 0||f%i,c=t<4?(p||c)&&(t==0||t==(e.s<0?3:2)):p>5||p==5&&(t==4||c||t==6&&(r>0?a>0?f/so(10,s-a):0:d[m-1])%10&1||t==(e.s<0?8:7))),n<1||!d[0])return c?(i=Cn(e),d.length=1,n=n-i-1,d[0]=so(10,(pn-n%pn)%pn),e.e=eu(-n/pn)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(r==0?(d.length=m,i=1,m--):(d.length=m+1,i=so(10,pn-r),d[m]=a>0?(f/so(10,s-a)%so(10,a)|0)*i:0),c)for(;;)if(m==0){(d[0]+=i)==qn&&(d[0]=1,++e.e);break}else{if(d[m]+=i,d[m]!=qn)break;d[m--]=0,i=1}for(r=d.length;d[--r]===0;)d.pop();if(fn&&(e.e>rc||e.e<-rc))throw Error(sb+Cn(e));return e}function bA(e,n){var t,r,a,i,s,p,c,f,m,d,v=e.constructor,y=v.precision;if(!e.s||!n.s)return n.s?n.s=-n.s:n=new v(e),fn?nn(n,y):n;if(c=e.d,d=n.d,r=n.e,f=e.e,c=c.slice(),s=f-r,s){for(m=s<0,m?(t=c,s=-s,p=d.length):(t=d,r=f,p=c.length),a=Math.max(Math.ceil(y/pn),p)+2,s>a&&(s=a,t.length=1),t.reverse(),a=s;a--;)t.push(0);t.reverse()}else{for(a=c.length,p=d.length,m=a<p,m&&(p=a),a=0;a<p;a++)if(c[a]!=d[a]){m=c[a]<d[a];break}s=0}for(m&&(t=c,c=d,d=t,n.s=-n.s),p=c.length,a=d.length-p;a>0;--a)c[p++]=0;for(a=d.length;a>s;){if(c[--a]<d[a]){for(i=a;i&&c[--i]===0;)c[i]=qn-1;--c[i],c[a]+=qn}c[a]-=d[a]}for(;c[--p]===0;)c.pop();for(;c[0]===0;c.shift())--r;return c[0]?(n.d=c,n.e=r,fn?nn(n,y):n):new v(0)}function bo(e,n,t){var r,a=Cn(e),i=br(e.d),s=i.length;return n?(t&&(r=t-s)>0?i=i.charAt(0)+"."+i.slice(1)+Sa(r):s>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(a<0?"e":"e+")+a):a<0?(i="0."+Sa(-a-1)+i,t&&(r=t-s)>0&&(i+=Sa(r))):a>=s?(i+=Sa(a+1-s),t&&(r=t-a-1)>0&&(i=i+"."+Sa(r))):((r=a+1)<s&&(i=i.slice(0,r)+"."+i.slice(r)),t&&(r=t-s)>0&&(a+1===s&&(i+="."),i+=Sa(r))),e.s<0?"-"+i:i}function v4(e,n){if(e.length>n)return e.length=n,!0}function IA(e){var n,t,r;function a(i){var s=this;if(!(s instanceof a))return new a(i);if(s.constructor=a,i instanceof a){s.s=i.s,s.e=i.e,s.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(go+i);if(i>0)s.s=1;else if(i<0)i=-i,s.s=-1;else{s.s=0,s.e=0,s.d=[0];return}if(i===~~i&&i<1e7){s.e=0,s.d=[i];return}return h4(s,i.toString())}else if(typeof i!="string")throw Error(go+i);if(i.charCodeAt(0)===45?(i=i.slice(1),s.s=-1):s.s=1,s7.test(i))h4(s,i);else throw Error(go+i)}if(a.prototype=Ie,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=IA,a.config=a.set=p7,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],n=0;n<r.length;)e.hasOwnProperty(t=r[n++])||(e[t]=this[t]);return a.config(e),a}function p7(e){if(!e||typeof e!="object")throw Error(Gt+"Object expected");var n,t,r,a=["precision",1,Ji,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(n=0;n<a.length;n+=3)if((r=e[t=a[n]])!==void 0)if(eu(r)===r&&r>=a[n+1]&&r<=a[n+2])this[t]=r;else throw Error(go+t+": "+r);if((r=e[t="LN10"])!==void 0)if(r==Math.LN10)this[t]=new this(r);else throw Error(go+t+": "+r);return this}var pb=IA(u7);At=new pb(1);const en=pb;function l7(e){return m7(e)||d7(e)||f7(e)||c7()}function c7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f7(e,n){if(e){if(typeof e=="string")return fg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fg(e,n)}}function d7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function m7(e){if(Array.isArray(e))return fg(e)}function fg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var h7=function(n){return n},BA={},xA=function(n){return n===BA},g4=function(n){return function t(){return arguments.length===0||arguments.length===1&&xA(arguments.length<=0?void 0:arguments[0])?t:n.apply(void 0,arguments)}},v7=function e(n,t){return n===1?t:g4(function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.filter(function(p){return p!==BA}).length;return s>=n?t.apply(void 0,a):e(n-s,g4(function(){for(var p=arguments.length,c=new Array(p),f=0;f<p;f++)c[f]=arguments[f];var m=a.map(function(d){return xA(d)?c.shift():d});return t.apply(void 0,l7(m).concat(c))}))})},s0=function(n){return v7(n.length,n)},dg=function(n,t){for(var r=[],a=n;a<t;++a)r[a-n]=a;return r},g7=s0(function(e,n){return Array.isArray(n)?n.map(e):Object.keys(n).map(function(t){return n[t]}).map(e)}),y7=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];if(!t.length)return h7;var a=t.reverse(),i=a[0],s=a.slice(1);return function(){return s.reduce(function(p,c){return c(p)},i.apply(void 0,arguments))}},mg=function(n){return Array.isArray(n)?n.reverse():n.split("").reverse.join("")},wA=function(n){var t=null,r=null;return function(){for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return t&&i.every(function(p,c){return p===t[c]})||(t=i,r=n.apply(void 0,i)),r}};function b7(e){var n;return e===0?n=1:n=Math.floor(new en(e).abs().log(10).toNumber())+1,n}function I7(e,n,t){for(var r=new en(e),a=0,i=[];r.lt(n)&&a<1e5;)i.push(r.toNumber()),r=r.add(t),a++;return i}var B7=s0(function(e,n,t){var r=+e,a=+n;return r+t*(a-r)}),x7=s0(function(e,n,t){var r=n-+e;return r=r||1/0,(t-e)/r}),w7=s0(function(e,n,t){var r=n-+e;return r=r||1/0,Math.max(0,Math.min(1,(t-e)/r))});const p0={rangeStep:I7,getDigitCount:b7,interpolateNumber:B7,uninterpolateNumber:x7,uninterpolateTruncation:w7};function hg(e){return W7(e)||S7(e)||PA(e)||P7()}function P7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function W7(e){if(Array.isArray(e))return vg(e)}function Ws(e,n){return _7(e)||A7(e,n)||PA(e,n)||M7()}function M7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PA(e,n){if(e){if(typeof e=="string")return vg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return vg(e,n)}}function vg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function A7(e,n){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],r=!0,a=!1,i=void 0;try{for(var s=e[Symbol.iterator](),p;!(r=(p=s.next()).done)&&(t.push(p.value),!(n&&t.length===n));r=!0);}catch(c){a=!0,i=c}finally{try{!r&&s.return!=null&&s.return()}finally{if(a)throw i}}return t}}function _7(e){if(Array.isArray(e))return e}function SA(e){var n=Ws(e,2),t=n[0],r=n[1],a=t,i=r;return t>r&&(a=r,i=t),[a,i]}function WA(e,n,t){if(e.lte(0))return new en(0);var r=p0.getDigitCount(e.toNumber()),a=new en(10).pow(r),i=e.div(a),s=r!==1?.05:.1,p=new en(Math.ceil(i.div(s).toNumber())).add(t).mul(s),c=p.mul(a);return n?c:new en(Math.ceil(c))}function O7(e,n,t){var r=1,a=new en(e);if(!a.isint()&&t){var i=Math.abs(e);i<1?(r=new en(10).pow(p0.getDigitCount(e)-1),a=new en(Math.floor(a.div(r).toNumber())).mul(r)):i>1&&(a=new en(Math.floor(e)))}else e===0?a=new en(Math.floor((n-1)/2)):t||(a=new en(Math.floor(e)));var s=Math.floor((n-1)/2),p=y7(g7(function(c){return a.add(new en(c-s).mul(r)).toNumber()}),dg);return p(0,n)}function MA(e,n,t,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((n-e)/(t-1)))return{step:new en(0),tickMin:new en(0),tickMax:new en(0)};var i=WA(new en(n).sub(e).div(t-1),r,a),s;e<=0&&n>=0?s=new en(0):(s=new en(e).add(n).div(2),s=s.sub(new en(s).mod(i)));var p=Math.ceil(s.sub(e).div(i).toNumber()),c=Math.ceil(new en(n).sub(s).div(i).toNumber()),f=p+c+1;return f>t?MA(e,n,t,r,a+1):(f<t&&(c=n>0?c+(t-f):c,p=n>0?p:p+(t-f)),{step:i,tickMin:s.sub(new en(p).mul(i)),tickMax:s.add(new en(c).mul(i))})}function C7(e){var n=Ws(e,2),t=n[0],r=n[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(a,2),p=SA([t,r]),c=Ws(p,2),f=c[0],m=c[1];if(f===-1/0||m===1/0){var d=m===1/0?[f].concat(hg(dg(0,a-1).map(function(){return 1/0}))):[].concat(hg(dg(0,a-1).map(function(){return-1/0})),[m]);return t>r?mg(d):d}if(f===m)return O7(f,a,i);var v=MA(f,m,s,i),y=v.step,B=v.tickMin,I=v.tickMax,b=p0.rangeStep(B,I.add(new en(.1).mul(y)),y);return t>r?mg(b):b}function k7(e,n){var t=Ws(e,2),r=t[0],a=t[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=SA([r,a]),p=Ws(s,2),c=p[0],f=p[1];if(c===-1/0||f===1/0)return[r,a];if(c===f)return[c];var m=Math.max(n,2),d=WA(new en(f).sub(c).div(m-1),i,0),v=[].concat(hg(p0.rangeStep(new en(c),new en(f).sub(new en(.99).mul(d)),d)),[f]);return r>a?mg(v):v}var N7=wA(C7),R7=wA(k7),H7="Invariant failed";function Io(e,n){throw new Error(H7)}var T7=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function wi(e){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wi(e)}function ac(){return ac=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ac.apply(this,arguments)}function E7(e,n){return L7(e)||$7(e,n)||D7(e,n)||j7()}function j7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D7(e,n){if(e){if(typeof e=="string")return y4(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y4(e,n)}}function y4(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function $7(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,s,p=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw a}}return p}}function L7(e){if(Array.isArray(e))return e}function F7(e,n){if(e==null)return{};var t=q7(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function q7(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function z7(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function U7(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,OA(r.key),r)}}function V7(e,n,t){return n&&U7(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function G7(e,n,t){return n=oc(n),K7(e,AA()?Reflect.construct(n,t||[],oc(e).constructor):n.apply(e,t))}function K7(e,n){if(n&&(wi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Q7(e)}function Q7(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(AA=function(){return!!e})()}function oc(e){return oc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},oc(e)}function Y7(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&gg(e,n)}function gg(e,n){return gg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},gg(e,n)}function _A(e,n,t){return n=OA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function OA(e){var n=X7(e,"string");return wi(n)=="symbol"?n:n+""}function X7(e,n){if(wi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var nu=(function(e){function n(){return z7(this,n),G7(this,n,arguments)}return Y7(n,e),V7(n,[{key:"render",value:function(){var r=this.props,a=r.offset,i=r.layout,s=r.width,p=r.dataKey,c=r.data,f=r.dataPointFormatter,m=r.xAxis,d=r.yAxis,v=F7(r,T7),y=We(v,!1);this.props.direction==="x"&&m.type!=="number"&&Io();var B=c.map(function(I){var b=f(I,p),S=b.x,W=b.y,M=b.value,O=b.errorVal;if(!O)return null;var w=[],A,N;if(Array.isArray(O)){var P=E7(O,2);A=P[0],N=P[1]}else A=N=O;if(i==="vertical"){var C=m.scale,T=W+a,j=T+s,H=T-s,q=C(M-A),L=C(M+N);w.push({x1:L,y1:j,x2:L,y2:H}),w.push({x1:q,y1:T,x2:L,y2:T}),w.push({x1:q,y1:j,x2:q,y2:H})}else if(i==="horizontal"){var K=d.scale,U=S+a,V=U-s,D=U+s,Q=K(M-A),X=K(M+N);w.push({x1:V,y1:X,x2:D,y2:X}),w.push({x1:U,y1:Q,x2:U,y2:X}),w.push({x1:V,y1:Q,x2:D,y2:Q})}return E.createElement(De,ac({className:"recharts-errorBar",key:"bar-".concat(w.map(function(R){return"".concat(R.x1,"-").concat(R.x2,"-").concat(R.y1,"-").concat(R.y2)}))},y),w.map(function(R){return E.createElement("line",ac({},R,{key:"line-".concat(R.x1,"-").concat(R.x2,"-").concat(R.y1,"-").concat(R.y2)}))}))});return E.createElement(De,{className:"recharts-errorBars"},B)}}])})(E.Component);_A(nu,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});_A(nu,"displayName","ErrorBar");function Ms(e){"@babel/helpers - typeof";return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ms(e)}function b4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ro(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?b4(Object(t),!0).forEach(function(r){Z7(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Z7(e,n,t){return n=J7(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function J7(e){var n=e9(e,"string");return Ms(n)=="symbol"?n:n+""}function e9(e,n){if(Ms(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var CA=function(n){var t=n.children,r=n.formattedGraphicalItems,a=n.legendWidth,i=n.legendContent,s=St(t,Oa);if(!s)return null;var p=Oa.defaultProps,c=p!==void 0?ro(ro({},p),s.props):{},f;return s.props&&s.props.payload?f=s.props&&s.props.payload:i==="children"?f=(r||[]).reduce(function(m,d){var v=d.item,y=d.props,B=y.sectors||y.data||[];return m.concat(B.map(function(I){return{type:s.props.iconType||v.props.legendType,value:I.name,color:I.fill,payload:I}}))},[]):f=(r||[]).map(function(m){var d=m.item,v=d.type.defaultProps,y=v!==void 0?ro(ro({},v),d.props):{},B=y.dataKey,I=y.name,b=y.legendType,S=y.hide;return{inactive:S,dataKey:B,type:c.iconType||b||"square",color:lb(d),value:I||B,payload:y}}),ro(ro(ro({},c),Oa.getWithHeight(s,a)),{},{payload:f,item:s})};function As(e){"@babel/helpers - typeof";return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},As(e)}function I4(e){return a9(e)||r9(e)||t9(e)||n9()}function n9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t9(e,n){if(e){if(typeof e=="string")return yg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return yg(e,n)}}function r9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function a9(e){if(Array.isArray(e))return yg(e)}function yg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function B4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function In(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?B4(Object(t),!0).forEach(function(r){fi(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function fi(e,n,t){return n=o9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o9(e){var n=i9(e,"string");return As(n)=="symbol"?n:n+""}function i9(e,n){if(As(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(As(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function ln(e,n,t){return Ne(e)||Ne(n)?t:En(n)?_t(e,n,t):ke(n)?n(e):t}function os(e,n,t,r){var a=a7(e,function(p){return ln(p,n)});if(t==="number"){var i=a.filter(function(p){return pe(p)||parseFloat(p)});return i.length?[u0(i),Ma(i)]:[1/0,-1/0]}var s=r?a.filter(function(p){return!Ne(p)}):a;return s.map(function(p){return En(p)||p instanceof Date?p:""})}var u9=function(n){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=-1,p=(t=r==null?void 0:r.length)!==null&&t!==void 0?t:0;if(p<=1)return 0;if(i&&i.axisType==="angleAxis"&&Math.abs(Math.abs(i.range[1]-i.range[0])-360)<=1e-6)for(var c=i.range,f=0;f<p;f++){var m=f>0?a[f-1].coordinate:a[p-1].coordinate,d=a[f].coordinate,v=f>=p-1?a[0].coordinate:a[f+1].coordinate,y=void 0;if(ot(d-m)!==ot(v-d)){var B=[];if(ot(v-d)===ot(c[1]-c[0])){y=v;var I=d+c[1]-c[0];B[0]=Math.min(I,(I+m)/2),B[1]=Math.max(I,(I+m)/2)}else{y=m;var b=v+c[1]-c[0];B[0]=Math.min(d,(b+d)/2),B[1]=Math.max(d,(b+d)/2)}var S=[Math.min(d,(y+d)/2),Math.max(d,(y+d)/2)];if(n>S[0]&&n<=S[1]||n>=B[0]&&n<=B[1]){s=a[f].index;break}}else{var W=Math.min(m,v),M=Math.max(m,v);if(n>(W+d)/2&&n<=(M+d)/2){s=a[f].index;break}}}else for(var O=0;O<p;O++)if(O===0&&n<=(r[O].coordinate+r[O+1].coordinate)/2||O>0&&O<p-1&&n>(r[O].coordinate+r[O-1].coordinate)/2&&n<=(r[O].coordinate+r[O+1].coordinate)/2||O===p-1&&n>(r[O].coordinate+r[O-1].coordinate)/2){s=r[O].index;break}return s},lb=function(n){var t,r=n,a=r.type.displayName,i=(t=n.type)!==null&&t!==void 0&&t.defaultProps?In(In({},n.type.defaultProps),n.props):n.props,s=i.stroke,p=i.fill,c;switch(a){case"Line":c=s;break;case"Area":case"Radar":c=s&&s!=="none"?s:p;break;default:c=p;break}return c},s9=function(n){var t=n.barSize,r=n.totalSize,a=n.stackGroups,i=a===void 0?{}:a;if(!i)return{};for(var s={},p=Object.keys(i),c=0,f=p.length;c<f;c++)for(var m=i[p[c]].stackGroups,d=Object.keys(m),v=0,y=d.length;v<y;v++){var B=m[d[v]],I=B.items,b=B.cateAxisId,S=I.filter(function(N){return Ur(N.type).indexOf("Bar")>=0});if(S&&S.length){var W=S[0].type.defaultProps,M=W!==void 0?In(In({},W),S[0].props):S[0].props,O=M.barSize,w=M[b];s[w]||(s[w]=[]);var A=Ne(O)?t:O;s[w].push({item:S[0],stackList:S.slice(1),barSize:Ne(A)?void 0:it(A,r,0)})}}return s},p9=function(n){var t=n.barGap,r=n.barCategoryGap,a=n.bandSize,i=n.sizeList,s=i===void 0?[]:i,p=n.maxBarSize,c=s.length;if(c<1)return null;var f=it(t,a,0,!0),m,d=[];if(s[0].barSize===+s[0].barSize){var v=!1,y=a/c,B=s.reduce(function(O,w){return O+w.barSize||0},0);B+=(c-1)*f,B>=a&&(B-=(c-1)*f,f=0),B>=a&&y>0&&(v=!0,y*=.9,B=c*y);var I=(a-B)/2>>0,b={offset:I-f,size:0};m=s.reduce(function(O,w){var A={item:w.item,position:{offset:b.offset+b.size+f,size:v?y:w.barSize}},N=[].concat(I4(O),[A]);return b=N[N.length-1].position,w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){N.push({item:P,position:b})}),N},d)}else{var S=it(r,a,0,!0);a-2*S-(c-1)*f<=0&&(f=0);var W=(a-2*S-(c-1)*f)/c;W>1&&(W>>=0);var M=p===+p?Math.min(W,p):W;m=s.reduce(function(O,w,A){var N=[].concat(I4(O),[{item:w.item,position:{offset:S+(W+f)*A+(W-M)/2,size:M}}]);return w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){N.push({item:P,position:N[N.length-1].position})}),N},d)}return m},l9=function(n,t,r,a){var i=r.children,s=r.width,p=r.margin,c=s-(p.left||0)-(p.right||0),f=CA({children:i,legendWidth:c});if(f){var m=a||{},d=m.width,v=m.height,y=f.align,B=f.verticalAlign,I=f.layout;if((I==="vertical"||I==="horizontal"&&B==="middle")&&y!=="center"&&pe(n[y]))return In(In({},n),{},fi({},y,n[y]+(d||0)));if((I==="horizontal"||I==="vertical"&&y==="center")&&B!=="middle"&&pe(n[B]))return In(In({},n),{},fi({},B,n[B]+(v||0)))}return n},c9=function(n,t,r){return Ne(t)?!0:n==="horizontal"?t==="yAxis":n==="vertical"||r==="x"?t==="xAxis":r==="y"?t==="yAxis":!0},kA=function(n,t,r,a,i){var s=t.props.children,p=st(s,nu).filter(function(f){return c9(a,i,f.props.direction)});if(p&&p.length){var c=p.map(function(f){return f.props.dataKey});return n.reduce(function(f,m){var d=ln(m,r);if(Ne(d))return f;var v=Array.isArray(d)?[u0(d),Ma(d)]:[d,d],y=c.reduce(function(B,I){var b=ln(m,I,0),S=v[0]-Math.abs(Array.isArray(b)?b[0]:b),W=v[1]+Math.abs(Array.isArray(b)?b[1]:b);return[Math.min(S,B[0]),Math.max(W,B[1])]},[1/0,-1/0]);return[Math.min(y[0],f[0]),Math.max(y[1],f[1])]},[1/0,-1/0])}return null},f9=function(n,t,r,a,i){var s=t.map(function(p){return kA(n,p,r,i,a)}).filter(function(p){return!Ne(p)});return s&&s.length?s.reduce(function(p,c){return[Math.min(p[0],c[0]),Math.max(p[1],c[1])]},[1/0,-1/0]):null},NA=function(n,t,r,a,i){var s=t.map(function(c){var f=c.props.dataKey;return r==="number"&&f&&kA(n,c,f,a)||os(n,f,r,i)});if(r==="number")return s.reduce(function(c,f){return[Math.min(c[0],f[0]),Math.max(c[1],f[1])]},[1/0,-1/0]);var p={};return s.reduce(function(c,f){for(var m=0,d=f.length;m<d;m++)p[f[m]]||(p[f[m]]=!0,c.push(f[m]));return c},[])},RA=function(n,t){return n==="horizontal"&&t==="xAxis"||n==="vertical"&&t==="yAxis"||n==="centric"&&t==="angleAxis"||n==="radial"&&t==="radiusAxis"},HA=function(n,t,r,a){if(a)return n.map(function(c){return c.coordinate});var i,s,p=n.map(function(c){return c.coordinate===t&&(i=!0),c.coordinate===r&&(s=!0),c.coordinate});return i||p.push(t),s||p.push(r),p},Fr=function(n,t,r){if(!n)return null;var a=n.scale,i=n.duplicateDomain,s=n.type,p=n.range,c=n.realScaleType==="scaleBand"?a.bandwidth()/2:2,f=(t||r)&&s==="category"&&a.bandwidth?a.bandwidth()/c:0;if(f=n.axisType==="angleAxis"&&(p==null?void 0:p.length)>=2?ot(p[0]-p[1])*2*f:f,t&&(n.ticks||n.niceTicks)){var m=(n.ticks||n.niceTicks).map(function(d){var v=i?i.indexOf(d):d;return{coordinate:a(v)+f,value:d,offset:f}});return m.filter(function(d){return!Yi(d.coordinate)})}return n.isCategorical&&n.categoricalDomain?n.categoricalDomain.map(function(d,v){return{coordinate:a(d)+f,value:d,index:v,offset:f}}):a.ticks&&!r?a.ticks(n.tickCount).map(function(d){return{coordinate:a(d)+f,value:d,offset:f}}):a.domain().map(function(d,v){return{coordinate:a(d)+f,value:i?i[d]:d,index:v,offset:f}})},Gh=new WeakMap,xl=function(n,t){if(typeof t!="function")return n;Gh.has(n)||Gh.set(n,new WeakMap);var r=Gh.get(n);if(r.has(t))return r.get(t);var a=function(){n.apply(void 0,arguments),t.apply(void 0,arguments)};return r.set(t,a),a},TA=function(n,t,r){var a=n.scale,i=n.type,s=n.layout,p=n.axisType;if(a==="auto")return s==="radial"&&p==="radiusAxis"?{scale:Is(),realScaleType:"band"}:s==="radial"&&p==="angleAxis"?{scale:Jl(),realScaleType:"linear"}:i==="category"&&t&&(t.indexOf("LineChart")>=0||t.indexOf("AreaChart")>=0||t.indexOf("ComposedChart")>=0&&!r)?{scale:as(),realScaleType:"point"}:i==="category"?{scale:Is(),realScaleType:"band"}:{scale:Jl(),realScaleType:"linear"};if(Qs(a)){var c="scale".concat(Vc(a));return{scale:(i4[c]||as)(),realScaleType:i4[c]?c:"point"}}return ke(a)?{scale:a}:{scale:as(),realScaleType:"point"}},x4=1e-4,EA=function(n){var t=n.domain();if(!(!t||t.length<=2)){var r=t.length,a=n.range(),i=Math.min(a[0],a[1])-x4,s=Math.max(a[0],a[1])+x4,p=n(t[0]),c=n(t[r-1]);(p<i||p>s||c<i||c>s)&&n.domain([t[0],t[r-1]])}},d9=function(n,t){if(!n)return null;for(var r=0,a=n.length;r<a;r++)if(n[r].item===t)return n[r].position;return null},m9=function(n,t){if(!t||t.length!==2||!pe(t[0])||!pe(t[1]))return n;var r=Math.min(t[0],t[1]),a=Math.max(t[0],t[1]),i=[n[0],n[1]];return(!pe(n[0])||n[0]<r)&&(i[0]=r),(!pe(n[1])||n[1]>a)&&(i[1]=a),i[0]>a&&(i[0]=a),i[1]<r&&(i[1]=r),i},h9=function(n){var t=n.length;if(!(t<=0))for(var r=0,a=n[0].length;r<a;++r)for(var i=0,s=0,p=0;p<t;++p){var c=Yi(n[p][r][1])?n[p][r][0]:n[p][r][1];c>=0?(n[p][r][0]=i,n[p][r][1]=i+c,i=n[p][r][1]):(n[p][r][0]=s,n[p][r][1]=s+c,s=n[p][r][1])}},v9=function(n){var t=n.length;if(!(t<=0))for(var r=0,a=n[0].length;r<a;++r)for(var i=0,s=0;s<t;++s){var p=Yi(n[s][r][1])?n[s][r][0]:n[s][r][1];p>=0?(n[s][r][0]=i,n[s][r][1]=i+p,i=n[s][r][1]):(n[s][r][0]=0,n[s][r][1]=0)}},g9={sign:h9,expand:aE,none:hi,silhouette:oE,wiggle:iE,positive:v9},y9=function(n,t,r){var a=t.map(function(p){return p.props.dataKey}),i=g9[r],s=rE().keys(a).value(function(p,c){return+ln(p,c,0)}).order(Kv).offset(i);return s(n)},b9=function(n,t,r,a,i,s){if(!n)return null;var p=s?t.reverse():t,c={},f=p.reduce(function(d,v){var y,B=(y=v.type)!==null&&y!==void 0&&y.defaultProps?In(In({},v.type.defaultProps),v.props):v.props,I=B.stackId,b=B.hide;if(b)return d;var S=B[r],W=d[S]||{hasStack:!1,stackGroups:{}};if(En(I)){var M=W.stackGroups[I]||{numericAxisId:r,cateAxisId:a,items:[]};M.items.push(v),W.hasStack=!0,W.stackGroups[I]=M}else W.stackGroups[Da("_stackId_")]={numericAxisId:r,cateAxisId:a,items:[v]};return In(In({},d),{},fi({},S,W))},c),m={};return Object.keys(f).reduce(function(d,v){var y=f[v];if(y.hasStack){var B={};y.stackGroups=Object.keys(y.stackGroups).reduce(function(I,b){var S=y.stackGroups[b];return In(In({},I),{},fi({},b,{numericAxisId:r,cateAxisId:a,items:S.items,stackedData:y9(n,S.items,i)}))},B)}return In(In({},d),{},fi({},v,y))},m)},jA=function(n,t){var r=t.realScaleType,a=t.type,i=t.tickCount,s=t.originalDomain,p=t.allowDecimals,c=r||t.scale;if(c!=="auto"&&c!=="linear")return null;if(i&&a==="number"&&s&&(s[0]==="auto"||s[1]==="auto")){var f=n.domain();if(!f.length)return null;var m=N7(f,i,p);return n.domain([u0(m),Ma(m)]),{niceTicks:m}}if(i&&a==="number"){var d=n.domain(),v=R7(d,i,p);return{niceTicks:v}}return null};function Pi(e){var n=e.axis,t=e.ticks,r=e.bandSize,a=e.entry,i=e.index,s=e.dataKey;if(n.type==="category"){if(!n.allowDuplicatedCategory&&n.dataKey&&!Ne(a[n.dataKey])){var p=Rl(t,"value",a[n.dataKey]);if(p)return p.coordinate+r/2}return t[i]?t[i].coordinate+r/2:null}var c=ln(a,Ne(s)?n.dataKey:s);return Ne(c)?null:n.scale(c)}var w4=function(n){var t=n.axis,r=n.ticks,a=n.offset,i=n.bandSize,s=n.entry,p=n.index;if(t.type==="category")return r[p]?r[p].coordinate+a:null;var c=ln(s,t.dataKey,t.domain[p]);return Ne(c)?null:t.scale(c)-i/2+a},I9=function(n){var t=n.numericAxis,r=t.scale.domain();if(t.type==="number"){var a=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]);return a<=0&&i>=0?0:i<0?i:a}return r[0]},B9=function(n,t){var r,a=(r=n.type)!==null&&r!==void 0&&r.defaultProps?In(In({},n.type.defaultProps),n.props):n.props,i=a.stackId;if(En(i)){var s=t[i];if(s){var p=s.items.indexOf(n);return p>=0?s.stackedData[p]:null}}return null},x9=function(n){return n.reduce(function(t,r){return[u0(r.concat([t[0]]).filter(pe)),Ma(r.concat([t[1]]).filter(pe))]},[1/0,-1/0])},DA=function(n,t,r){return Object.keys(n).reduce(function(a,i){var s=n[i],p=s.stackedData,c=p.reduce(function(f,m){var d=x9(m.slice(t,r+1));return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);return[Math.min(c[0],a[0]),Math.max(c[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},P4=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,S4=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,bg=function(n,t,r){if(ke(n))return n(t,r);if(!Array.isArray(n))return t;var a=[];if(pe(n[0]))a[0]=r?n[0]:Math.min(n[0],t[0]);else if(P4.test(n[0])){var i=+P4.exec(n[0])[1];a[0]=t[0]-i}else ke(n[0])?a[0]=n[0](t[0]):a[0]=t[0];if(pe(n[1]))a[1]=r?n[1]:Math.max(n[1],t[1]);else if(S4.test(n[1])){var s=+S4.exec(n[1])[1];a[1]=t[1]+s}else ke(n[1])?a[1]=n[1](t[1]):a[1]=t[1];return a},ic=function(n,t,r){if(n&&n.scale&&n.scale.bandwidth){var a=n.scale.bandwidth();if(!r||a>0)return a}if(n&&t&&t.length>=2){for(var i=Ey(t,function(d){return d.coordinate}),s=1/0,p=1,c=i.length;p<c;p++){var f=i[p],m=i[p-1];s=Math.min((f.coordinate||0)-(m.coordinate||0),s)}return s===1/0?0:s}return r?void 0:0},W4=function(n,t,r){return!n||!n.length||Ha(n,_t(r,"type.defaultProps.domain"))?t:n},$A=function(n,t){var r=n.type.defaultProps?In(In({},n.type.defaultProps),n.props):n.props,a=r.dataKey,i=r.name,s=r.unit,p=r.formatter,c=r.tooltipType,f=r.chartType,m=r.hide;return In(In({},We(n,!1)),{},{dataKey:a,unit:s,formatter:p,name:i||a,color:lb(n),value:ln(t,a),type:c,payload:t,chartType:f,hide:m})};function _s(e){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_s(e)}function M4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function jr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?M4(Object(t),!0).forEach(function(r){LA(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function LA(e,n,t){return n=w9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w9(e){var n=P9(e,"string");return _s(n)=="symbol"?n:n+""}function P9(e,n){if(_s(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(_s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function S9(e,n){return _9(e)||A9(e,n)||M9(e,n)||W9()}function W9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M9(e,n){if(e){if(typeof e=="string")return A4(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A4(e,n)}}function A4(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function A9(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,s,p=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw a}}return p}}function _9(e){if(Array.isArray(e))return e}var uc=Math.PI/180,O9=function(n){return n*180/Math.PI},on=function(n,t,r,a){return{x:n+Math.cos(-uc*a)*r,y:t+Math.sin(-uc*a)*r}},FA=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(n-(r.left||0)-(r.right||0)),Math.abs(t-(r.top||0)-(r.bottom||0)))/2},C9=function(n,t,r,a,i){var s=n.width,p=n.height,c=n.startAngle,f=n.endAngle,m=it(n.cx,s,s/2),d=it(n.cy,p,p/2),v=FA(s,p,r),y=it(n.innerRadius,v,0),B=it(n.outerRadius,v,v*.8),I=Object.keys(t);return I.reduce(function(b,S){var W=t[S],M=W.domain,O=W.reversed,w;if(Ne(W.range))a==="angleAxis"?w=[c,f]:a==="radiusAxis"&&(w=[y,B]),O&&(w=[w[1],w[0]]);else{w=W.range;var A=w,N=S9(A,2);c=N[0],f=N[1]}var P=TA(W,i),C=P.realScaleType,T=P.scale;T.domain(M).range(w),EA(T);var j=jA(T,jr(jr({},W),{},{realScaleType:C})),H=jr(jr(jr({},W),j),{},{range:w,radius:B,realScaleType:C,scale:T,cx:m,cy:d,innerRadius:y,outerRadius:B,startAngle:c,endAngle:f});return jr(jr({},b),{},LA({},S,H))},{})},k9=function(n,t){var r=n.x,a=n.y,i=t.x,s=t.y;return Math.sqrt(Math.pow(r-i,2)+Math.pow(a-s,2))},N9=function(n,t){var r=n.x,a=n.y,i=t.cx,s=t.cy,p=k9({x:r,y:a},{x:i,y:s});if(p<=0)return{radius:p};var c=(r-i)/p,f=Math.acos(c);return a>s&&(f=2*Math.PI-f),{radius:p,angle:O9(f),angleInRadian:f}},R9=function(n){var t=n.startAngle,r=n.endAngle,a=Math.floor(t/360),i=Math.floor(r/360),s=Math.min(a,i);return{startAngle:t-s*360,endAngle:r-s*360}},H9=function(n,t){var r=t.startAngle,a=t.endAngle,i=Math.floor(r/360),s=Math.floor(a/360),p=Math.min(i,s);return n+p*360},_4=function(n,t){var r=n.x,a=n.y,i=N9({x:r,y:a},t),s=i.radius,p=i.angle,c=t.innerRadius,f=t.outerRadius;if(s<c||s>f)return!1;if(s===0)return!0;var m=R9(t),d=m.startAngle,v=m.endAngle,y=p,B;if(d<=v){for(;y>v;)y-=360;for(;y<d;)y+=360;B=y>=d&&y<=v}else{for(;y>d;)y-=360;for(;y<v;)y+=360;B=y>=v&&y<=d}return B?jr(jr({},t),{},{radius:s,angle:H9(y,t)}):null},qA=function(n){return!Y.isValidElement(n)&&!ke(n)&&typeof n!="boolean"?n.className:""};function Os(e){"@babel/helpers - typeof";return Os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Os(e)}var T9=["offset"];function E9(e){return L9(e)||$9(e)||D9(e)||j9()}function j9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D9(e,n){if(e){if(typeof e=="string")return Ig(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ig(e,n)}}function $9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function L9(e){if(Array.isArray(e))return Ig(e)}function Ig(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function F9(e,n){if(e==null)return{};var t=q9(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function q9(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function O4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Tn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?O4(Object(t),!0).forEach(function(r){z9(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function z9(e,n,t){return n=U9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function U9(e){var n=V9(e,"string");return Os(n)=="symbol"?n:n+""}function V9(e,n){if(Os(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Os(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Cs.apply(this,arguments)}var G9=function(n){var t=n.value,r=n.formatter,a=Ne(n.children)?t:n.children;return ke(r)?r(a):a},K9=function(n,t){var r=ot(t-n),a=Math.min(Math.abs(t-n),360);return r*a},Q9=function(n,t,r){var a=n.position,i=n.viewBox,s=n.offset,p=n.className,c=i,f=c.cx,m=c.cy,d=c.innerRadius,v=c.outerRadius,y=c.startAngle,B=c.endAngle,I=c.clockWise,b=(d+v)/2,S=K9(y,B),W=S>=0?1:-1,M,O;a==="insideStart"?(M=y+W*s,O=I):a==="insideEnd"?(M=B-W*s,O=!I):a==="end"&&(M=B+W*s,O=I),O=S<=0?O:!O;var w=on(f,m,b,M),A=on(f,m,b,M+(O?1:-1)*359),N="M".concat(w.x,",").concat(w.y,`
    A`).concat(b,",").concat(b,",0,1,").concat(O?0:1,`,
    `).concat(A.x,",").concat(A.y),P=Ne(n.id)?Da("recharts-radial-line-"):n.id;return E.createElement("text",Cs({},r,{dominantBaseline:"central",className:Ee("recharts-radial-bar-label",p)}),E.createElement("defs",null,E.createElement("path",{id:P,d:N})),E.createElement("textPath",{xlinkHref:"#".concat(P)},t))},Y9=function(n){var t=n.viewBox,r=n.offset,a=n.position,i=t,s=i.cx,p=i.cy,c=i.innerRadius,f=i.outerRadius,m=i.startAngle,d=i.endAngle,v=(m+d)/2;if(a==="outside"){var y=on(s,p,f+r,v),B=y.x,I=y.y;return{x:B,y:I,textAnchor:B>=s?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:s,y:p,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:s,y:p,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:s,y:p,textAnchor:"middle",verticalAnchor:"end"};var b=(c+f)/2,S=on(s,p,b,v),W=S.x,M=S.y;return{x:W,y:M,textAnchor:"middle",verticalAnchor:"middle"}},X9=function(n){var t=n.viewBox,r=n.parentViewBox,a=n.offset,i=n.position,s=t,p=s.x,c=s.y,f=s.width,m=s.height,d=m>=0?1:-1,v=d*a,y=d>0?"end":"start",B=d>0?"start":"end",I=f>=0?1:-1,b=I*a,S=I>0?"end":"start",W=I>0?"start":"end";if(i==="top"){var M={x:p+f/2,y:c-d*a,textAnchor:"middle",verticalAnchor:y};return Tn(Tn({},M),r?{height:Math.max(c-r.y,0),width:f}:{})}if(i==="bottom"){var O={x:p+f/2,y:c+m+v,textAnchor:"middle",verticalAnchor:B};return Tn(Tn({},O),r?{height:Math.max(r.y+r.height-(c+m),0),width:f}:{})}if(i==="left"){var w={x:p-b,y:c+m/2,textAnchor:S,verticalAnchor:"middle"};return Tn(Tn({},w),r?{width:Math.max(w.x-r.x,0),height:m}:{})}if(i==="right"){var A={x:p+f+b,y:c+m/2,textAnchor:W,verticalAnchor:"middle"};return Tn(Tn({},A),r?{width:Math.max(r.x+r.width-A.x,0),height:m}:{})}var N=r?{width:f,height:m}:{};return i==="insideLeft"?Tn({x:p+b,y:c+m/2,textAnchor:W,verticalAnchor:"middle"},N):i==="insideRight"?Tn({x:p+f-b,y:c+m/2,textAnchor:S,verticalAnchor:"middle"},N):i==="insideTop"?Tn({x:p+f/2,y:c+v,textAnchor:"middle",verticalAnchor:B},N):i==="insideBottom"?Tn({x:p+f/2,y:c+m-v,textAnchor:"middle",verticalAnchor:y},N):i==="insideTopLeft"?Tn({x:p+b,y:c+v,textAnchor:W,verticalAnchor:B},N):i==="insideTopRight"?Tn({x:p+f-b,y:c+v,textAnchor:S,verticalAnchor:B},N):i==="insideBottomLeft"?Tn({x:p+b,y:c+m-v,textAnchor:W,verticalAnchor:y},N):i==="insideBottomRight"?Tn({x:p+f-b,y:c+m-v,textAnchor:S,verticalAnchor:y},N):Qi(i)&&(pe(i.x)||lo(i.x))&&(pe(i.y)||lo(i.y))?Tn({x:p+it(i.x,f),y:c+it(i.y,m),textAnchor:"end",verticalAnchor:"end"},N):Tn({x:p+f/2,y:c+m/2,textAnchor:"middle",verticalAnchor:"middle"},N)},Z9=function(n){return"cx"in n&&pe(n.cx)};function zn(e){var n=e.offset,t=n===void 0?5:n,r=F9(e,T9),a=Tn({offset:t},r),i=a.viewBox,s=a.position,p=a.value,c=a.children,f=a.content,m=a.className,d=m===void 0?"":m,v=a.textBreakAll;if(!i||Ne(p)&&Ne(c)&&!Y.isValidElement(f)&&!ke(f))return null;if(Y.isValidElement(f))return Y.cloneElement(f,a);var y;if(ke(f)){if(y=Y.createElement(f,a),Y.isValidElement(y))return y}else y=G9(a);var B=Z9(i),I=We(a,!0);if(B&&(s==="insideStart"||s==="insideEnd"||s==="end"))return Q9(a,y,I);var b=B?Y9(a):X9(a);return E.createElement(yo,Cs({className:Ee("recharts-label",d)},I,b,{breakAll:v}),y)}zn.displayName="Label";var zA=function(n){var t=n.cx,r=n.cy,a=n.angle,i=n.startAngle,s=n.endAngle,p=n.r,c=n.radius,f=n.innerRadius,m=n.outerRadius,d=n.x,v=n.y,y=n.top,B=n.left,I=n.width,b=n.height,S=n.clockWise,W=n.labelViewBox;if(W)return W;if(pe(I)&&pe(b)){if(pe(d)&&pe(v))return{x:d,y:v,width:I,height:b};if(pe(y)&&pe(B))return{x:y,y:B,width:I,height:b}}return pe(d)&&pe(v)?{x:d,y:v,width:0,height:0}:pe(t)&&pe(r)?{cx:t,cy:r,startAngle:i||a||0,endAngle:s||a||0,innerRadius:f||0,outerRadius:m||c||p||0,clockWise:S}:n.viewBox?n.viewBox:{}},J9=function(n,t){return n?n===!0?E.createElement(zn,{key:"label-implicit",viewBox:t}):En(n)?E.createElement(zn,{key:"label-implicit",viewBox:t,value:n}):Y.isValidElement(n)?n.type===zn?Y.cloneElement(n,{key:"label-implicit",viewBox:t}):E.createElement(zn,{key:"label-implicit",content:n,viewBox:t}):ke(n)?E.createElement(zn,{key:"label-implicit",content:n,viewBox:t}):Qi(n)?E.createElement(zn,Cs({viewBox:t},n,{key:"label-implicit"})):null:null},eF=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!n||!n.children&&r&&!n.label)return null;var a=n.children,i=zA(n),s=st(a,zn).map(function(c,f){return Y.cloneElement(c,{viewBox:t||i,key:"label-".concat(f)})});if(!r)return s;var p=J9(n.label,t||i);return[p].concat(E9(s))};zn.parseViewBox=zA;zn.renderCallByParent=eF;var Kh,C4;function nF(){if(C4)return Kh;C4=1;function e(n){var t=n==null?0:n.length;return t?n[t-1]:void 0}return Kh=e,Kh}var tF=nF();const rF=Xe(tF);function ks(e){"@babel/helpers - typeof";return ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ks(e)}var aF=["valueAccessor"],oF=["data","dataKey","clockWise","id","textBreakAll"];function iF(e){return lF(e)||pF(e)||sF(e)||uF()}function uF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sF(e,n){if(e){if(typeof e=="string")return Bg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Bg(e,n)}}function pF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lF(e){if(Array.isArray(e))return Bg(e)}function Bg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function sc(){return sc=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},sc.apply(this,arguments)}function k4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function N4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?k4(Object(t),!0).forEach(function(r){cF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function cF(e,n,t){return n=fF(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fF(e){var n=dF(e,"string");return ks(n)=="symbol"?n:n+""}function dF(e,n){if(ks(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ks(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function R4(e,n){if(e==null)return{};var t=mF(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function mF(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var hF=function(n){return Array.isArray(n.value)?rF(n.value):n.value};function lr(e){var n=e.valueAccessor,t=n===void 0?hF:n,r=R4(e,aF),a=r.data,i=r.dataKey,s=r.clockWise,p=r.id,c=r.textBreakAll,f=R4(r,oF);return!a||!a.length?null:E.createElement(De,{className:"recharts-label-list"},a.map(function(m,d){var v=Ne(i)?t(m,d):ln(m&&m.payload,i),y=Ne(p)?{}:{id:"".concat(p,"-").concat(d)};return E.createElement(zn,sc({},We(m,!0),f,y,{parentViewBox:m.parentViewBox,value:v,textBreakAll:c,viewBox:zn.parseViewBox(Ne(s)?m:N4(N4({},m),{},{clockWise:s})),key:"label-".concat(d),index:d}))}))}lr.displayName="LabelList";function vF(e,n){return e?e===!0?E.createElement(lr,{key:"labelList-implicit",data:n}):E.isValidElement(e)||ke(e)?E.createElement(lr,{key:"labelList-implicit",data:n,content:e}):Qi(e)?E.createElement(lr,sc({data:n},e,{key:"labelList-implicit"})):null:null}function gF(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&t&&!e.label)return null;var r=e.children,a=st(r,lr).map(function(s,p){return Y.cloneElement(s,{data:n,key:"labelList-".concat(p)})});if(!t)return a;var i=vF(e.label,n);return[i].concat(iF(a))}lr.renderCallByParent=gF;function Ns(e){"@babel/helpers - typeof";return Ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ns(e)}function xg(){return xg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xg.apply(this,arguments)}function H4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function T4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?H4(Object(t),!0).forEach(function(r){yF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function yF(e,n,t){return n=bF(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function bF(e){var n=IF(e,"string");return Ns(n)=="symbol"?n:n+""}function IF(e,n){if(Ns(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ns(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var BF=function(n,t){var r=ot(t-n),a=Math.min(Math.abs(t-n),359.999);return r*a},wl=function(n){var t=n.cx,r=n.cy,a=n.radius,i=n.angle,s=n.sign,p=n.isExternal,c=n.cornerRadius,f=n.cornerIsExternal,m=c*(p?1:-1)+a,d=Math.asin(c/m)/uc,v=f?i:i+s*d,y=on(t,r,m,v),B=on(t,r,a,v),I=f?i-s*d:i,b=on(t,r,m*Math.cos(d*uc),I);return{center:y,circleTangency:B,lineTangency:b,theta:d}},UA=function(n){var t=n.cx,r=n.cy,a=n.innerRadius,i=n.outerRadius,s=n.startAngle,p=n.endAngle,c=BF(s,p),f=s+c,m=on(t,r,i,s),d=on(t,r,i,f),v="M ".concat(m.x,",").concat(m.y,`
    A `).concat(i,",").concat(i,`,0,
    `).concat(+(Math.abs(c)>180),",").concat(+(s>f),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(a>0){var y=on(t,r,a,s),B=on(t,r,a,f);v+="L ".concat(B.x,",").concat(B.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(c)>180),",").concat(+(s<=f),`,
            `).concat(y.x,",").concat(y.y," Z")}else v+="L ".concat(t,",").concat(r," Z");return v},xF=function(n){var t=n.cx,r=n.cy,a=n.innerRadius,i=n.outerRadius,s=n.cornerRadius,p=n.forceCornerRadius,c=n.cornerIsExternal,f=n.startAngle,m=n.endAngle,d=ot(m-f),v=wl({cx:t,cy:r,radius:i,angle:f,sign:d,cornerRadius:s,cornerIsExternal:c}),y=v.circleTangency,B=v.lineTangency,I=v.theta,b=wl({cx:t,cy:r,radius:i,angle:m,sign:-d,cornerRadius:s,cornerIsExternal:c}),S=b.circleTangency,W=b.lineTangency,M=b.theta,O=c?Math.abs(f-m):Math.abs(f-m)-I-M;if(O<0)return p?"M ".concat(B.x,",").concat(B.y,`
        a`).concat(s,",").concat(s,",0,0,1,").concat(s*2,`,0
        a`).concat(s,",").concat(s,",0,0,1,").concat(-s*2,`,0
      `):UA({cx:t,cy:r,innerRadius:a,outerRadius:i,startAngle:f,endAngle:m});var w="M ".concat(B.x,",").concat(B.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(y.x,",").concat(y.y,`
    A`).concat(i,",").concat(i,",0,").concat(+(O>180),",").concat(+(d<0),",").concat(S.x,",").concat(S.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(W.x,",").concat(W.y,`
  `);if(a>0){var A=wl({cx:t,cy:r,radius:a,angle:f,sign:d,isExternal:!0,cornerRadius:s,cornerIsExternal:c}),N=A.circleTangency,P=A.lineTangency,C=A.theta,T=wl({cx:t,cy:r,radius:a,angle:m,sign:-d,isExternal:!0,cornerRadius:s,cornerIsExternal:c}),j=T.circleTangency,H=T.lineTangency,q=T.theta,L=c?Math.abs(f-m):Math.abs(f-m)-C-q;if(L<0&&s===0)return"".concat(w,"L").concat(t,",").concat(r,"Z");w+="L".concat(H.x,",").concat(H.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(j.x,",").concat(j.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(L>180),",").concat(+(d>0),",").concat(N.x,",").concat(N.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(P.x,",").concat(P.y,"Z")}else w+="L".concat(t,",").concat(r,"Z");return w},wF={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},VA=function(n){var t=T4(T4({},wF),n),r=t.cx,a=t.cy,i=t.innerRadius,s=t.outerRadius,p=t.cornerRadius,c=t.forceCornerRadius,f=t.cornerIsExternal,m=t.startAngle,d=t.endAngle,v=t.className;if(s<i||m===d)return null;var y=Ee("recharts-sector",v),B=s-i,I=it(p,B,0,!0),b;return I>0&&Math.abs(m-d)<360?b=xF({cx:r,cy:a,innerRadius:i,outerRadius:s,cornerRadius:Math.min(I,B/2),forceCornerRadius:c,cornerIsExternal:f,startAngle:m,endAngle:d}):b=UA({cx:r,cy:a,innerRadius:i,outerRadius:s,startAngle:m,endAngle:d}),E.createElement("path",xg({},We(t,!0),{className:y,d:b,role:"img"}))};function Rs(e){"@babel/helpers - typeof";return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Rs(e)}function wg(){return wg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wg.apply(this,arguments)}function E4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function j4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?E4(Object(t),!0).forEach(function(r){PF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function PF(e,n,t){return n=SF(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function SF(e){var n=WF(e,"string");return Rs(n)=="symbol"?n:n+""}function WF(e,n){if(Rs(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Rs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var D4={curveBasisClosed:VT,curveBasisOpen:GT,curveBasis:UT,curveBumpX:CT,curveBumpY:kT,curveLinearClosed:KT,curveLinear:Kc,curveMonotoneX:QT,curveMonotoneY:YT,curveNatural:XT,curveStep:ZT,curveStepAfter:eE,curveStepBefore:JT},Pl=function(n){return n.x===+n.x&&n.y===+n.y},Qu=function(n){return n.x},Yu=function(n){return n.y},MF=function(n,t){if(ke(n))return n;var r="curve".concat(Vc(n));return(r==="curveMonotone"||r==="curveBump")&&t?D4["".concat(r).concat(t==="vertical"?"Y":"X")]:D4[r]||Kc},AF=function(n){var t=n.type,r=t===void 0?"linear":t,a=n.points,i=a===void 0?[]:a,s=n.baseLine,p=n.layout,c=n.connectNulls,f=c===void 0?!1:c,m=MF(r,p),d=f?i.filter(function(I){return Pl(I)}):i,v;if(Array.isArray(s)){var y=f?s.filter(function(I){return Pl(I)}):s,B=d.map(function(I,b){return j4(j4({},I),{},{base:y[b]})});return p==="vertical"?v=hl().y(Yu).x1(Qu).x0(function(I){return I.base.x}):v=hl().x(Qu).y1(Yu).y0(function(I){return I.base.y}),v.defined(Pl).curve(m),v(B)}return p==="vertical"&&pe(s)?v=hl().y(Yu).x1(Qu).x0(s):pe(s)?v=hl().x(Qu).y1(Yu).y0(s):v=UW().x(Qu).y(Yu),v.defined(Pl).curve(m),v(d)},ka=function(n){var t=n.className,r=n.points,a=n.path,i=n.pathRef;if((!r||!r.length)&&!a)return null;var s=r&&r.length?AF(n):a;return E.createElement("path",wg({},We(n,!1),Hl(n),{className:Ee("recharts-curve",t),d:s,ref:i}))},Qh={exports:{}},Yh,$4;function _F(){if($4)return Yh;$4=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Yh=e,Yh}var Xh,L4;function OF(){if(L4)return Xh;L4=1;var e=_F();function n(){}function t(){}return t.resetWarningCache=n,Xh=function(){function r(s,p,c,f,m,d){if(d!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:n};return i.PropTypes=i,i},Xh}var F4;function CF(){return F4||(F4=1,Qh.exports=OF()()),Qh.exports}var kF=CF();const Ye=Xe(kF),{getOwnPropertyNames:NF,getOwnPropertySymbols:RF}=Object,{hasOwnProperty:HF}=Object.prototype;function Zh(e,n){return function(r,a,i){return e(r,a,i)&&n(r,a,i)}}function Sl(e){return function(t,r,a){if(!t||!r||typeof t!="object"||typeof r!="object")return e(t,r,a);const{cache:i}=a,s=i.get(t),p=i.get(r);if(s&&p)return s===r&&p===t;i.set(t,r),i.set(r,t);const c=e(t,r,a);return i.delete(t),i.delete(r),c}}function TF(e){return e!=null?e[Symbol.toStringTag]:void 0}function q4(e){return NF(e).concat(RF(e))}const EF=Object.hasOwn||((e,n)=>HF.call(e,n));function So(e,n){return e===n||!e&&!n&&e!==e&&n!==n}const jF="__v",DF="__o",$F="_owner",{getOwnPropertyDescriptor:z4,keys:U4}=Object;function LF(e,n){return e.byteLength===n.byteLength&&pc(new Uint8Array(e),new Uint8Array(n))}function FF(e,n,t){let r=e.length;if(n.length!==r)return!1;for(;r-- >0;)if(!t.equals(e[r],n[r],r,r,e,n,t))return!1;return!0}function qF(e,n){return e.byteLength===n.byteLength&&pc(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}function zF(e,n){return So(e.getTime(),n.getTime())}function UF(e,n){return e.name===n.name&&e.message===n.message&&e.cause===n.cause&&e.stack===n.stack}function VF(e,n){return e===n}function V4(e,n,t){const r=e.size;if(r!==n.size)return!1;if(!r)return!0;const a=new Array(r),i=e.entries();let s,p,c=0;for(;(s=i.next())&&!s.done;){const f=n.entries();let m=!1,d=0;for(;(p=f.next())&&!p.done;){if(a[d]){d++;continue}const v=s.value,y=p.value;if(t.equals(v[0],y[0],c,d,e,n,t)&&t.equals(v[1],y[1],v[0],y[0],e,n,t)){m=a[d]=!0;break}d++}if(!m)return!1;c++}return!0}const GF=So;function KF(e,n,t){const r=U4(e);let a=r.length;if(U4(n).length!==a)return!1;for(;a-- >0;)if(!GA(e,n,t,r[a]))return!1;return!0}function Xu(e,n,t){const r=q4(e);let a=r.length;if(q4(n).length!==a)return!1;let i,s,p;for(;a-- >0;)if(i=r[a],!GA(e,n,t,i)||(s=z4(e,i),p=z4(n,i),(s||p)&&(!s||!p||s.configurable!==p.configurable||s.enumerable!==p.enumerable||s.writable!==p.writable)))return!1;return!0}function QF(e,n){return So(e.valueOf(),n.valueOf())}function YF(e,n){return e.source===n.source&&e.flags===n.flags}function G4(e,n,t){const r=e.size;if(r!==n.size)return!1;if(!r)return!0;const a=new Array(r),i=e.values();let s,p;for(;(s=i.next())&&!s.done;){const c=n.values();let f=!1,m=0;for(;(p=c.next())&&!p.done;){if(!a[m]&&t.equals(s.value,p.value,s.value,p.value,e,n,t)){f=a[m]=!0;break}m++}if(!f)return!1}return!0}function pc(e,n){let t=e.byteLength;if(n.byteLength!==t||e.byteOffset!==n.byteOffset)return!1;for(;t-- >0;)if(e[t]!==n[t])return!1;return!0}function XF(e,n){return e.hostname===n.hostname&&e.pathname===n.pathname&&e.protocol===n.protocol&&e.port===n.port&&e.hash===n.hash&&e.username===n.username&&e.password===n.password}function GA(e,n,t,r){return(r===$F||r===DF||r===jF)&&(e.$$typeof||n.$$typeof)?!0:EF(n,r)&&t.equals(e[r],n[r],r,r,e,n,t)}const ZF="[object ArrayBuffer]",JF="[object Arguments]",eq="[object Boolean]",nq="[object DataView]",tq="[object Date]",rq="[object Error]",aq="[object Map]",oq="[object Number]",iq="[object Object]",uq="[object RegExp]",sq="[object Set]",pq="[object String]",lq={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},cq="[object URL]",fq=Object.prototype.toString;function dq({areArrayBuffersEqual:e,areArraysEqual:n,areDataViewsEqual:t,areDatesEqual:r,areErrorsEqual:a,areFunctionsEqual:i,areMapsEqual:s,areNumbersEqual:p,areObjectsEqual:c,arePrimitiveWrappersEqual:f,areRegExpsEqual:m,areSetsEqual:d,areTypedArraysEqual:v,areUrlsEqual:y,unknownTagComparators:B}){return function(b,S,W){if(b===S)return!0;if(b==null||S==null)return!1;const M=typeof b;if(M!==typeof S)return!1;if(M!=="object")return M==="number"?p(b,S,W):M==="function"?i(b,S,W):!1;const O=b.constructor;if(O!==S.constructor)return!1;if(O===Object)return c(b,S,W);if(Array.isArray(b))return n(b,S,W);if(O===Date)return r(b,S,W);if(O===RegExp)return m(b,S,W);if(O===Map)return s(b,S,W);if(O===Set)return d(b,S,W);const w=fq.call(b);if(w===tq)return r(b,S,W);if(w===uq)return m(b,S,W);if(w===aq)return s(b,S,W);if(w===sq)return d(b,S,W);if(w===iq)return typeof b.then!="function"&&typeof S.then!="function"&&c(b,S,W);if(w===cq)return y(b,S,W);if(w===rq)return a(b,S,W);if(w===JF)return c(b,S,W);if(lq[w])return v(b,S,W);if(w===ZF)return e(b,S,W);if(w===nq)return t(b,S,W);if(w===eq||w===oq||w===pq)return f(b,S,W);if(B){let A=B[w];if(!A){const N=TF(b);N&&(A=B[N])}if(A)return A(b,S,W)}return!1}}function mq({circular:e,createCustomConfig:n,strict:t}){let r={areArrayBuffersEqual:LF,areArraysEqual:t?Xu:FF,areDataViewsEqual:qF,areDatesEqual:zF,areErrorsEqual:UF,areFunctionsEqual:VF,areMapsEqual:t?Zh(V4,Xu):V4,areNumbersEqual:GF,areObjectsEqual:t?Xu:KF,arePrimitiveWrappersEqual:QF,areRegExpsEqual:YF,areSetsEqual:t?Zh(G4,Xu):G4,areTypedArraysEqual:t?Zh(pc,Xu):pc,areUrlsEqual:XF,unknownTagComparators:void 0};if(n&&(r=Object.assign({},r,n(r))),e){const a=Sl(r.areArraysEqual),i=Sl(r.areMapsEqual),s=Sl(r.areObjectsEqual),p=Sl(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:a,areMapsEqual:i,areObjectsEqual:s,areSetsEqual:p})}return r}function hq(e){return function(n,t,r,a,i,s,p){return e(n,t,p)}}function vq({circular:e,comparator:n,createState:t,equals:r,strict:a}){if(t)return function(p,c){const{cache:f=e?new WeakMap:void 0,meta:m}=t();return n(p,c,{cache:f,equals:r,meta:m,strict:a})};if(e)return function(p,c){return n(p,c,{cache:new WeakMap,equals:r,meta:void 0,strict:a})};const i={cache:void 0,equals:r,meta:void 0,strict:a};return function(p,c){return n(p,c,i)}}const gq=Fa();Fa({strict:!0});Fa({circular:!0});Fa({circular:!0,strict:!0});Fa({createInternalComparator:()=>So});Fa({strict:!0,createInternalComparator:()=>So});Fa({circular:!0,createInternalComparator:()=>So});Fa({circular:!0,createInternalComparator:()=>So,strict:!0});function Fa(e={}){const{circular:n=!1,createInternalComparator:t,createState:r,strict:a=!1}=e,i=mq(e),s=dq(i),p=t?t(s):hq(s);return vq({circular:n,comparator:s,createState:r,equals:p,strict:a})}function yq(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function K4(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=-1,r=function a(i){t<0&&(t=i),i-t>n?(e(i),t=-1):yq(a)};requestAnimationFrame(r)}function Pg(e){"@babel/helpers - typeof";return Pg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pg(e)}function bq(e){return wq(e)||xq(e)||Bq(e)||Iq()}function Iq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bq(e,n){if(e){if(typeof e=="string")return Q4(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q4(e,n)}}function Q4(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function xq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wq(e){if(Array.isArray(e))return e}function Pq(){var e={},n=function(){return null},t=!1,r=function a(i){if(!t){if(Array.isArray(i)){if(!i.length)return;var s=i,p=bq(s),c=p[0],f=p.slice(1);if(typeof c=="number"){K4(a.bind(null,f),c);return}a(c),K4(a.bind(null,f));return}Pg(i)==="object"&&(e=i,n(e)),typeof i=="function"&&i()}};return{stop:function(){t=!0},start:function(i){t=!1,r(i)},subscribe:function(i){return n=i,function(){n=function(){return null}}}}}function Hs(e){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Hs(e)}function Y4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function X4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Y4(Object(t),!0).forEach(function(r){KA(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function KA(e,n,t){return n=Sq(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Sq(e){var n=Wq(e,"string");return Hs(n)==="symbol"?n:String(n)}function Wq(e,n){if(Hs(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Hs(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Mq=function(n,t){return[Object.keys(n),Object.keys(t)].reduce(function(r,a){return r.filter(function(i){return a.includes(i)})})},Aq=function(n){return n},_q=function(n){return n.replace(/([A-Z])/g,function(t){return"-".concat(t.toLowerCase())})},is=function(n,t){return Object.keys(t).reduce(function(r,a){return X4(X4({},r),{},KA({},a,n(a,t[a])))},{})},Z4=function(n,t,r){return n.map(function(a){return"".concat(_q(a)," ").concat(t,"ms ").concat(r)}).join(",")};function Oq(e,n){return Nq(e)||kq(e,n)||QA(e,n)||Cq()}function Cq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kq(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,s,p=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw a}}return p}}function Nq(e){if(Array.isArray(e))return e}function Rq(e){return Eq(e)||Tq(e)||QA(e)||Hq()}function Hq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QA(e,n){if(e){if(typeof e=="string")return Sg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Sg(e,n)}}function Tq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Eq(e){if(Array.isArray(e))return Sg(e)}function Sg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var lc=1e-4,YA=function(n,t){return[0,3*n,3*t-6*n,3*n-3*t+1]},XA=function(n,t){return n.map(function(r,a){return r*Math.pow(t,a)}).reduce(function(r,a){return r+a})},J4=function(n,t){return function(r){var a=YA(n,t);return XA(a,r)}},jq=function(n,t){return function(r){var a=YA(n,t),i=[].concat(Rq(a.map(function(s,p){return s*p}).slice(1)),[0]);return XA(i,r)}},eS=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var a=t[0],i=t[1],s=t[2],p=t[3];if(t.length===1)switch(t[0]){case"linear":a=0,i=0,s=1,p=1;break;case"ease":a=.25,i=.1,s=.25,p=1;break;case"ease-in":a=.42,i=0,s=1,p=1;break;case"ease-out":a=.42,i=0,s=.58,p=1;break;case"ease-in-out":a=0,i=0,s=.58,p=1;break;default:{var c=t[0].split("(");if(c[0]==="cubic-bezier"&&c[1].split(")")[0].split(",").length===4){var f=c[1].split(")")[0].split(",").map(function(b){return parseFloat(b)}),m=Oq(f,4);a=m[0],i=m[1],s=m[2],p=m[3]}}}var d=J4(a,s),v=J4(i,p),y=jq(a,s),B=function(S){return S>1?1:S<0?0:S},I=function(S){for(var W=S>1?1:S,M=W,O=0;O<8;++O){var w=d(M)-W,A=y(M);if(Math.abs(w-W)<lc||A<lc)return v(M);M=B(M-w/A)}return v(M)};return I.isStepper=!1,I},Dq=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.stiff,r=t===void 0?100:t,a=n.damping,i=a===void 0?8:a,s=n.dt,p=s===void 0?17:s,c=function(m,d,v){var y=-(m-d)*r,B=v*i,I=v+(y-B)*p/1e3,b=v*p/1e3+m;return Math.abs(b-d)<lc&&Math.abs(I)<lc?[d,0]:[b,I]};return c.isStepper=!0,c.dt=p,c},$q=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var a=t[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return eS(a);case"spring":return Dq();default:if(a.split("(")[0]==="cubic-bezier")return eS(a)}return typeof a=="function"?a:null};function Ts(e){"@babel/helpers - typeof";return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ts(e)}function nS(e){return qq(e)||Fq(e)||ZA(e)||Lq()}function Lq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qq(e){if(Array.isArray(e))return Mg(e)}function tS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Kn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?tS(Object(t),!0).forEach(function(r){Wg(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Wg(e,n,t){return n=zq(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function zq(e){var n=Uq(e,"string");return Ts(n)==="symbol"?n:String(n)}function Uq(e,n){if(Ts(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ts(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Vq(e,n){return Qq(e)||Kq(e,n)||ZA(e,n)||Gq()}function Gq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZA(e,n){if(e){if(typeof e=="string")return Mg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Mg(e,n)}}function Mg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Kq(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,s,p=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw a}}return p}}function Qq(e){if(Array.isArray(e))return e}var cc=function(n,t,r){return n+(t-n)*r},Ag=function(n){var t=n.from,r=n.to;return t!==r},Yq=function e(n,t,r){var a=is(function(i,s){if(Ag(s)){var p=n(s.from,s.to,s.velocity),c=Vq(p,2),f=c[0],m=c[1];return Kn(Kn({},s),{},{from:f,velocity:m})}return s},t);return r<1?is(function(i,s){return Ag(s)?Kn(Kn({},s),{},{velocity:cc(s.velocity,a[i].velocity,r),from:cc(s.from,a[i].from,r)}):s},t):e(n,a,r-1)};const Xq=(function(e,n,t,r,a){var i=Mq(e,n),s=i.reduce(function(b,S){return Kn(Kn({},b),{},Wg({},S,[e[S],n[S]]))},{}),p=i.reduce(function(b,S){return Kn(Kn({},b),{},Wg({},S,{from:e[S],velocity:0,to:n[S]}))},{}),c=-1,f,m,d=function(){return null},v=function(){return is(function(S,W){return W.from},p)},y=function(){return!Object.values(p).filter(Ag).length},B=function(S){f||(f=S);var W=S-f,M=W/t.dt;p=Yq(t,p,M),a(Kn(Kn(Kn({},e),n),v())),f=S,y()||(c=requestAnimationFrame(d))},I=function(S){m||(m=S);var W=(S-m)/r,M=is(function(w,A){return cc.apply(void 0,nS(A).concat([t(W)]))},s);if(a(Kn(Kn(Kn({},e),n),M)),W<1)c=requestAnimationFrame(d);else{var O=is(function(w,A){return cc.apply(void 0,nS(A).concat([t(1)]))},s);a(Kn(Kn(Kn({},e),n),O))}};return d=t.isStepper?B:I,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(c)}}});function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Si(e)}var Zq=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function Jq(e,n){if(e==null)return{};var t=ez(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function ez(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Jh(e){return az(e)||rz(e)||tz(e)||nz()}function nz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tz(e,n){if(e){if(typeof e=="string")return _g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _g(e,n)}}function rz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function az(e){if(Array.isArray(e))return _g(e)}function _g(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function rS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ar(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?rS(Object(t),!0).forEach(function(r){ts(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ts(e,n,t){return n=JA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function oz(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function iz(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,JA(r.key),r)}}function uz(e,n,t){return n&&iz(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function JA(e){var n=sz(e,"string");return Si(n)==="symbol"?n:String(n)}function sz(e,n){if(Si(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Si(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function pz(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Og(e,n)}function Og(e,n){return Og=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Og(e,n)}function lz(e){var n=cz();return function(){var r=fc(e),a;if(n){var i=fc(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Cg(this,a)}}function Cg(e,n){if(n&&(Si(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return kg(e)}function kg(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fc(e){return fc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},fc(e)}var Kt=(function(e){pz(t,e);var n=lz(t);function t(r,a){var i;oz(this,t),i=n.call(this,r,a);var s=i.props,p=s.isActive,c=s.attributeName,f=s.from,m=s.to,d=s.steps,v=s.children,y=s.duration;if(i.handleStyleChange=i.handleStyleChange.bind(kg(i)),i.changeStyle=i.changeStyle.bind(kg(i)),!p||y<=0)return i.state={style:{}},typeof v=="function"&&(i.state={style:m}),Cg(i);if(d&&d.length)i.state={style:d[0].style};else if(f){if(typeof v=="function")return i.state={style:f},Cg(i);i.state={style:c?ts({},c,f):f}}else i.state={style:{}};return i}return uz(t,[{key:"componentDidMount",value:function(){var a=this.props,i=a.isActive,s=a.canBegin;this.mounted=!0,!(!i||!s)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var i=this.props,s=i.isActive,p=i.canBegin,c=i.attributeName,f=i.shouldReAnimate,m=i.to,d=i.from,v=this.state.style;if(p){if(!s){var y={style:c?ts({},c,m):m};this.state&&v&&(c&&v[c]!==m||!c&&v!==m)&&this.setState(y);return}if(!(gq(a.to,m)&&a.canBegin&&a.isActive)){var B=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var I=B||f?d:a.to;if(this.state&&v){var b={style:c?ts({},c,I):I};(c&&v[c]!==I||!c&&v!==I)&&this.setState(b)}this.runAnimation(ar(ar({},this.props),{},{from:I,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var i=this,s=a.from,p=a.to,c=a.duration,f=a.easing,m=a.begin,d=a.onAnimationEnd,v=a.onAnimationStart,y=Xq(s,p,$q(f),c,this.changeStyle),B=function(){i.stopJSAnimation=y()};this.manager.start([v,m,B,c,d])}},{key:"runStepAnimation",value:function(a){var i=this,s=a.steps,p=a.begin,c=a.onAnimationStart,f=s[0],m=f.style,d=f.duration,v=d===void 0?0:d,y=function(I,b,S){if(S===0)return I;var W=b.duration,M=b.easing,O=M===void 0?"ease":M,w=b.style,A=b.properties,N=b.onAnimationEnd,P=S>0?s[S-1]:b,C=A||Object.keys(w);if(typeof O=="function"||O==="spring")return[].concat(Jh(I),[i.runJSAnimation.bind(i,{from:P.style,to:w,duration:W,easing:O}),W]);var T=Z4(C,W,O),j=ar(ar(ar({},P.style),w),{},{transition:T});return[].concat(Jh(I),[j,W,N]).filter(Aq)};return this.manager.start([c].concat(Jh(s.reduce(y,[m,Math.max(v,p)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=Pq());var i=a.begin,s=a.duration,p=a.attributeName,c=a.to,f=a.easing,m=a.onAnimationStart,d=a.onAnimationEnd,v=a.steps,y=a.children,B=this.manager;if(this.unSubscribe=B.subscribe(this.handleStyleChange),typeof f=="function"||typeof y=="function"||f==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var I=p?ts({},p,c):c,b=Z4(Object.keys(I),s,f);B.start([m,i,ar(ar({},I),{},{transition:b}),s,d])}},{key:"render",value:function(){var a=this.props,i=a.children;a.begin;var s=a.duration;a.attributeName,a.easing;var p=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var c=Jq(a,Zq),f=Y.Children.count(i),m=this.state.style;if(typeof i=="function")return i(m);if(!p||f===0||s<=0)return i;var d=function(y){var B=y.props,I=B.style,b=I===void 0?{}:I,S=B.className,W=Y.cloneElement(y,ar(ar({},c),{},{style:ar(ar({},b),m),className:S}));return W};return f===1?d(Y.Children.only(i)):E.createElement("div",null,Y.Children.map(i,function(v){return d(v)}))}}]),t})(Y.PureComponent);Kt.displayName="Animate";Kt.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Kt.propTypes={from:Ye.oneOfType([Ye.object,Ye.string]),to:Ye.oneOfType([Ye.object,Ye.string]),attributeName:Ye.string,duration:Ye.number,begin:Ye.number,easing:Ye.oneOfType([Ye.string,Ye.func]),steps:Ye.arrayOf(Ye.shape({duration:Ye.number.isRequired,style:Ye.object.isRequired,easing:Ye.oneOfType([Ye.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Ye.func]),properties:Ye.arrayOf("string"),onAnimationEnd:Ye.func})),children:Ye.oneOfType([Ye.node,Ye.func]),isActive:Ye.bool,canBegin:Ye.bool,onAnimationEnd:Ye.func,shouldReAnimate:Ye.bool,onAnimationStart:Ye.func,onAnimationReStart:Ye.func};function Es(e){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Es(e)}function dc(){return dc=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},dc.apply(this,arguments)}function fz(e,n){return vz(e)||hz(e,n)||mz(e,n)||dz()}function dz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mz(e,n){if(e){if(typeof e=="string")return aS(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return aS(e,n)}}function aS(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function hz(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,s,p=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw a}}return p}}function vz(e){if(Array.isArray(e))return e}function oS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function iS(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?oS(Object(t),!0).forEach(function(r){gz(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function gz(e,n,t){return n=yz(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function yz(e){var n=bz(e,"string");return Es(n)=="symbol"?n:n+""}function bz(e,n){if(Es(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Es(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var uS=function(n,t,r,a,i){var s=Math.min(Math.abs(r)/2,Math.abs(a)/2),p=a>=0?1:-1,c=r>=0?1:-1,f=a>=0&&r>=0||a<0&&r<0?1:0,m;if(s>0&&i instanceof Array){for(var d=[0,0,0,0],v=0,y=4;v<y;v++)d[v]=i[v]>s?s:i[v];m="M".concat(n,",").concat(t+p*d[0]),d[0]>0&&(m+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(f,",").concat(n+c*d[0],",").concat(t)),m+="L ".concat(n+r-c*d[1],",").concat(t),d[1]>0&&(m+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(f,`,
        `).concat(n+r,",").concat(t+p*d[1])),m+="L ".concat(n+r,",").concat(t+a-p*d[2]),d[2]>0&&(m+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(f,`,
        `).concat(n+r-c*d[2],",").concat(t+a)),m+="L ".concat(n+c*d[3],",").concat(t+a),d[3]>0&&(m+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(f,`,
        `).concat(n,",").concat(t+a-p*d[3])),m+="Z"}else if(s>0&&i===+i&&i>0){var B=Math.min(s,i);m="M ".concat(n,",").concat(t+p*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n+c*B,",").concat(t,`
            L `).concat(n+r-c*B,",").concat(t,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n+r,",").concat(t+p*B,`
            L `).concat(n+r,",").concat(t+a-p*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n+r-c*B,",").concat(t+a,`
            L `).concat(n+c*B,",").concat(t+a,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n,",").concat(t+a-p*B," Z")}else m="M ".concat(n,",").concat(t," h ").concat(r," v ").concat(a," h ").concat(-r," Z");return m},Iz=function(n,t){if(!n||!t)return!1;var r=n.x,a=n.y,i=t.x,s=t.y,p=t.width,c=t.height;if(Math.abs(p)>0&&Math.abs(c)>0){var f=Math.min(i,i+p),m=Math.max(i,i+p),d=Math.min(s,s+c),v=Math.max(s,s+c);return r>=f&&r<=m&&a>=d&&a<=v}return!1},Bz={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},cb=function(n){var t=iS(iS({},Bz),n),r=Y.useRef(),a=Y.useState(-1),i=fz(a,2),s=i[0],p=i[1];Y.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var O=r.current.getTotalLength();O&&p(O)}catch{}},[]);var c=t.x,f=t.y,m=t.width,d=t.height,v=t.radius,y=t.className,B=t.animationEasing,I=t.animationDuration,b=t.animationBegin,S=t.isAnimationActive,W=t.isUpdateAnimationActive;if(c!==+c||f!==+f||m!==+m||d!==+d||m===0||d===0)return null;var M=Ee("recharts-rectangle",y);return W?E.createElement(Kt,{canBegin:s>0,from:{width:m,height:d,x:c,y:f},to:{width:m,height:d,x:c,y:f},duration:I,animationEasing:B,isActive:W},function(O){var w=O.width,A=O.height,N=O.x,P=O.y;return E.createElement(Kt,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,isActive:S,easing:B},E.createElement("path",dc({},We(t,!0),{className:M,d:uS(N,P,w,A,v),ref:r})))}):E.createElement("path",dc({},We(t,!0),{className:M,d:uS(c,f,m,d,v)}))},xz=["points","className","baseLinePoints","connectNulls"];function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ii.apply(this,arguments)}function wz(e,n){if(e==null)return{};var t=Pz(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Pz(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function sS(e){return Az(e)||Mz(e)||Wz(e)||Sz()}function Sz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wz(e,n){if(e){if(typeof e=="string")return Ng(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ng(e,n)}}function Mz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Az(e){if(Array.isArray(e))return Ng(e)}function Ng(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var pS=function(n){return n&&n.x===+n.x&&n.y===+n.y},_z=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=[[]];return n.forEach(function(r){pS(r)?t[t.length-1].push(r):t[t.length-1].length>0&&t.push([])}),pS(n[0])&&t[t.length-1].push(n[0]),t[t.length-1].length<=0&&(t=t.slice(0,-1)),t},us=function(n,t){var r=_z(n);t&&(r=[r.reduce(function(i,s){return[].concat(sS(i),sS(s))},[])]);var a=r.map(function(i){return i.reduce(function(s,p,c){return"".concat(s).concat(c===0?"M":"L").concat(p.x,",").concat(p.y)},"")}).join("");return r.length===1?"".concat(a,"Z"):a},Oz=function(n,t,r){var a=us(n,r);return"".concat(a.slice(-1)==="Z"?a.slice(0,-1):a,"L").concat(us(t.reverse(),r).slice(1))},Cz=function(n){var t=n.points,r=n.className,a=n.baseLinePoints,i=n.connectNulls,s=wz(n,xz);if(!t||!t.length)return null;var p=Ee("recharts-polygon",r);if(a&&a.length){var c=s.stroke&&s.stroke!=="none",f=Oz(t,a,i);return E.createElement("g",{className:p},E.createElement("path",ii({},We(s,!0),{fill:f.slice(-1)==="Z"?s.fill:"none",stroke:"none",d:f})),c?E.createElement("path",ii({},We(s,!0),{fill:"none",d:us(t,i)})):null,c?E.createElement("path",ii({},We(s,!0),{fill:"none",d:us(a,i)})):null)}var m=us(t,i);return E.createElement("path",ii({},We(s,!0),{fill:m.slice(-1)==="Z"?s.fill:"none",className:p,d:m}))};function Rg(){return Rg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Rg.apply(this,arguments)}var tp=function(n){var t=n.cx,r=n.cy,a=n.r,i=n.className,s=Ee("recharts-dot",i);return t===+t&&r===+r&&a===+a?E.createElement("circle",Rg({},We(n,!1),Hl(n),{className:s,cx:t,cy:r,r:a})):null};function js(e){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},js(e)}var kz=["x","y","top","left","width","height","className"];function Hg(){return Hg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Hg.apply(this,arguments)}function lS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Nz(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?lS(Object(t),!0).forEach(function(r){Rz(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):lS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Rz(e,n,t){return n=Hz(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Hz(e){var n=Tz(e,"string");return js(n)=="symbol"?n:n+""}function Tz(e,n){if(js(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(js(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Ez(e,n){if(e==null)return{};var t=jz(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function jz(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var Dz=function(n,t,r,a,i,s){return"M".concat(n,",").concat(i,"v").concat(a,"M").concat(s,",").concat(t,"h").concat(r)},$z=function(n){var t=n.x,r=t===void 0?0:t,a=n.y,i=a===void 0?0:a,s=n.top,p=s===void 0?0:s,c=n.left,f=c===void 0?0:c,m=n.width,d=m===void 0?0:m,v=n.height,y=v===void 0?0:v,B=n.className,I=Ez(n,kz),b=Nz({x:r,y:i,top:p,left:f,width:d,height:y},I);return!pe(r)||!pe(i)||!pe(d)||!pe(y)||!pe(p)||!pe(f)?null:E.createElement("path",Hg({},We(b,!0),{className:Ee("recharts-cross",B),d:Dz(r,i,d,y,p,f)}))},ev,cS;function Lz(){if(cS)return ev;cS=1;var e=i0(),n=mA(),t=Mr();function r(a,i){return a&&a.length?e(a,t(i,2),n):void 0}return ev=r,ev}var Fz=Lz();const qz=Xe(Fz);var nv,fS;function zz(){if(fS)return nv;fS=1;var e=i0(),n=Mr(),t=hA();function r(a,i){return a&&a.length?e(a,n(i,2),t):void 0}return nv=r,nv}var Uz=zz();const Vz=Xe(Uz);var Gz=["cx","cy","angle","ticks","axisLine"],Kz=["ticks","tick","angle","tickFormatter","stroke"];function Wi(e){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Wi(e)}function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ss.apply(this,arguments)}function dS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ao(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?dS(Object(t),!0).forEach(function(r){l0(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function mS(e,n){if(e==null)return{};var t=Qz(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Qz(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function Yz(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function hS(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n_(r.key),r)}}function Xz(e,n,t){return n&&hS(e.prototype,n),t&&hS(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zz(e,n,t){return n=mc(n),Jz(e,e_()?Reflect.construct(n,t||[],mc(e).constructor):n.apply(e,t))}function Jz(e,n){if(n&&(Wi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eU(e)}function eU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function e_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(e_=function(){return!!e})()}function mc(e){return mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},mc(e)}function nU(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Tg(e,n)}function Tg(e,n){return Tg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Tg(e,n)}function l0(e,n,t){return n=n_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function n_(e){var n=tU(e,"string");return Wi(n)=="symbol"?n:n+""}function tU(e,n){if(Wi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var c0=(function(e){function n(){return Yz(this,n),Zz(this,n,arguments)}return nU(n,e),Xz(n,[{key:"getTickValueCoord",value:function(r){var a=r.coordinate,i=this.props,s=i.angle,p=i.cx,c=i.cy;return on(p,c,a,s)}},{key:"getTickTextAnchor",value:function(){var r=this.props.orientation,a;switch(r){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,p=r.ticks,c=qz(p,function(m){return m.coordinate||0}),f=Vz(p,function(m){return m.coordinate||0});return{cx:a,cy:i,startAngle:s,endAngle:s,innerRadius:f.coordinate||0,outerRadius:c.coordinate||0}}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,p=r.ticks,c=r.axisLine,f=mS(r,Gz),m=p.reduce(function(B,I){return[Math.min(B[0],I.coordinate),Math.max(B[1],I.coordinate)]},[1/0,-1/0]),d=on(a,i,m[0],s),v=on(a,i,m[1],s),y=ao(ao(ao({},We(f,!1)),{},{fill:"none"},We(c,!1)),{},{x1:d.x,y1:d.y,x2:v.x,y2:v.y});return E.createElement("line",ss({className:"recharts-polar-radius-axis-line"},y))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,p=a.angle,c=a.tickFormatter,f=a.stroke,m=mS(a,Kz),d=this.getTickTextAnchor(),v=We(m,!1),y=We(s,!1),B=i.map(function(I,b){var S=r.getTickValueCoord(I),W=ao(ao(ao(ao({textAnchor:d,transform:"rotate(".concat(90-p,", ").concat(S.x,", ").concat(S.y,")")},v),{},{stroke:"none",fill:f},y),{},{index:b},S),{},{payload:I});return E.createElement(De,ss({className:Ee("recharts-polar-radius-axis-tick",qA(s)),key:"tick-".concat(I.coordinate)},Ra(r.props,I,b)),n.renderTickItem(s,W,c?c(I.value,b):I.value))});return E.createElement(De,{className:"recharts-polar-radius-axis-ticks"},B)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.axisLine,s=r.tick;return!a||!a.length?null:E.createElement(De,{className:Ee("recharts-polar-radius-axis",this.props.className)},i&&this.renderAxisLine(),s&&this.renderTicks(),zn.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return E.isValidElement(r)?s=E.cloneElement(r,a):ke(r)?s=r(a):s=E.createElement(yo,ss({},a,{className:"recharts-polar-radius-axis-tick-value"}),i),s}}])})(Y.PureComponent);l0(c0,"displayName","PolarRadiusAxis");l0(c0,"axisType","radiusAxis");l0(c0,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Mi(e){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Mi(e)}function po(){return po=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},po.apply(this,arguments)}function vS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function oo(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?vS(Object(t),!0).forEach(function(r){f0(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):vS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function rU(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function gS(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r_(r.key),r)}}function aU(e,n,t){return n&&gS(e.prototype,n),t&&gS(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function oU(e,n,t){return n=hc(n),iU(e,t_()?Reflect.construct(n,t||[],hc(e).constructor):n.apply(e,t))}function iU(e,n){if(n&&(Mi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uU(e)}function uU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function t_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(t_=function(){return!!e})()}function hc(e){return hc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},hc(e)}function sU(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Eg(e,n)}function Eg(e,n){return Eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Eg(e,n)}function f0(e,n,t){return n=r_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r_(e){var n=pU(e,"string");return Mi(n)=="symbol"?n:n+""}function pU(e,n){if(Mi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var lU=Math.PI/180,yS=1e-5,d0=(function(e){function n(){return rU(this,n),oU(this,n,arguments)}return sU(n,e),aU(n,[{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.cx,s=a.cy,p=a.radius,c=a.orientation,f=a.tickSize,m=f||8,d=on(i,s,p,r.coordinate),v=on(i,s,p+(c==="inner"?-1:1)*m,r.coordinate);return{x1:d.x,y1:d.y,x2:v.x,y2:v.y}}},{key:"getTickTextAnchor",value:function(r){var a=this.props.orientation,i=Math.cos(-r.coordinate*lU),s;return i>yS?s=a==="outer"?"start":"end":i<-yS?s=a==="outer"?"end":"start":s="middle",s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.radius,p=r.axisLine,c=r.axisLineType,f=oo(oo({},We(this.props,!1)),{},{fill:"none"},We(p,!1));if(c==="circle")return E.createElement(tp,po({className:"recharts-polar-angle-axis-line"},f,{cx:a,cy:i,r:s}));var m=this.props.ticks,d=m.map(function(v){return on(a,i,s,v.coordinate)});return E.createElement(Cz,po({className:"recharts-polar-angle-axis-line"},f,{points:d}))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,p=a.tickLine,c=a.tickFormatter,f=a.stroke,m=We(this.props,!1),d=We(s,!1),v=oo(oo({},m),{},{fill:"none"},We(p,!1)),y=i.map(function(B,I){var b=r.getTickLineCoord(B),S=r.getTickTextAnchor(B),W=oo(oo(oo({textAnchor:S},m),{},{stroke:"none",fill:f},d),{},{index:I,payload:B,x:b.x2,y:b.y2});return E.createElement(De,po({className:Ee("recharts-polar-angle-axis-tick",qA(s)),key:"tick-".concat(B.coordinate)},Ra(r.props,B,I)),p&&E.createElement("line",po({className:"recharts-polar-angle-axis-tick-line"},v,b)),s&&n.renderTickItem(s,W,c?c(B.value,I):B.value))});return E.createElement(De,{className:"recharts-polar-angle-axis-ticks"},y)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.radius,s=r.axisLine;return i<=0||!a||!a.length?null:E.createElement(De,{className:Ee("recharts-polar-angle-axis",this.props.className)},s&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(r,a,i){var s;return E.isValidElement(r)?s=E.cloneElement(r,a):ke(r)?s=r(a):s=E.createElement(yo,po({},a,{className:"recharts-polar-angle-axis-tick-value"}),i),s}}])})(Y.PureComponent);f0(d0,"displayName","PolarAngleAxis");f0(d0,"axisType","angleAxis");f0(d0,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var tv,bS;function cU(){if(bS)return tv;bS=1;var e=mM(),n=e(Object.getPrototypeOf,Object);return tv=n,tv}var rv,IS;function fU(){if(IS)return rv;IS=1;var e=Yr(),n=cU(),t=Xr(),r="[object Object]",a=Function.prototype,i=Object.prototype,s=a.toString,p=i.hasOwnProperty,c=s.call(Object);function f(m){if(!t(m)||e(m)!=r)return!1;var d=n(m);if(d===null)return!0;var v=p.call(d,"constructor")&&d.constructor;return typeof v=="function"&&v instanceof v&&s.call(v)==c}return rv=f,rv}var dU=fU();const mU=Xe(dU);var av,BS;function hU(){if(BS)return av;BS=1;var e=Yr(),n=Xr(),t="[object Boolean]";function r(a){return a===!0||a===!1||n(a)&&e(a)==t}return av=r,av}var vU=hU();const gU=Xe(vU);function Ds(e){"@babel/helpers - typeof";return Ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ds(e)}function vc(){return vc=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},vc.apply(this,arguments)}function yU(e,n){return xU(e)||BU(e,n)||IU(e,n)||bU()}function bU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IU(e,n){if(e){if(typeof e=="string")return xS(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xS(e,n)}}function xS(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function BU(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,s,p=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw a}}return p}}function xU(e){if(Array.isArray(e))return e}function wS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function PS(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?wS(Object(t),!0).forEach(function(r){wU(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):wS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function wU(e,n,t){return n=PU(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function PU(e){var n=SU(e,"string");return Ds(n)=="symbol"?n:n+""}function SU(e,n){if(Ds(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var SS=function(n,t,r,a,i){var s=r-a,p;return p="M ".concat(n,",").concat(t),p+="L ".concat(n+r,",").concat(t),p+="L ".concat(n+r-s/2,",").concat(t+i),p+="L ".concat(n+r-s/2-a,",").concat(t+i),p+="L ".concat(n,",").concat(t," Z"),p},WU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},MU=function(n){var t=PS(PS({},WU),n),r=Y.useRef(),a=Y.useState(-1),i=yU(a,2),s=i[0],p=i[1];Y.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var M=r.current.getTotalLength();M&&p(M)}catch{}},[]);var c=t.x,f=t.y,m=t.upperWidth,d=t.lowerWidth,v=t.height,y=t.className,B=t.animationEasing,I=t.animationDuration,b=t.animationBegin,S=t.isUpdateAnimationActive;if(c!==+c||f!==+f||m!==+m||d!==+d||v!==+v||m===0&&d===0||v===0)return null;var W=Ee("recharts-trapezoid",y);return S?E.createElement(Kt,{canBegin:s>0,from:{upperWidth:0,lowerWidth:0,height:v,x:c,y:f},to:{upperWidth:m,lowerWidth:d,height:v,x:c,y:f},duration:I,animationEasing:B,isActive:S},function(M){var O=M.upperWidth,w=M.lowerWidth,A=M.height,N=M.x,P=M.y;return E.createElement(Kt,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,easing:B},E.createElement("path",vc({},We(t,!0),{className:W,d:SS(N,P,O,w,A),ref:r})))}):E.createElement("g",null,E.createElement("path",vc({},We(t,!0),{className:W,d:SS(c,f,m,d,v)})))},AU=["option","shapeType","propTransformer","activeClassName","isActive"];function $s(e){"@babel/helpers - typeof";return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$s(e)}function _U(e,n){if(e==null)return{};var t=OU(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function OU(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function WS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function gc(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?WS(Object(t),!0).forEach(function(r){CU(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):WS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function CU(e,n,t){return n=kU(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function kU(e){var n=NU(e,"string");return $s(n)=="symbol"?n:n+""}function NU(e,n){if($s(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if($s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function RU(e,n){return gc(gc({},n),e)}function HU(e,n){return e==="symbols"}function MS(e){var n=e.shapeType,t=e.elementProps;switch(n){case"rectangle":return E.createElement(cb,t);case"trapezoid":return E.createElement(MU,t);case"sector":return E.createElement(VA,t);case"symbols":if(HU(n))return E.createElement(Yc,t);break;default:return null}}function TU(e){return Y.isValidElement(e)?e.props:e}function yc(e){var n=e.option,t=e.shapeType,r=e.propTransformer,a=r===void 0?RU:r,i=e.activeClassName,s=i===void 0?"recharts-active-shape":i,p=e.isActive,c=_U(e,AU),f;if(Y.isValidElement(n))f=Y.cloneElement(n,gc(gc({},c),TU(n)));else if(ke(n))f=n(c);else if(mU(n)&&!gU(n)){var m=a(n,c);f=E.createElement(MS,{shapeType:t,elementProps:m})}else{var d=c;f=E.createElement(MS,{shapeType:t,elementProps:d})}return p?E.createElement(De,{className:s},f):f}function m0(e,n){return n!=null&&"trapezoids"in e.props}function h0(e,n){return n!=null&&"sectors"in e.props}function Ls(e,n){return n!=null&&"points"in e.props}function EU(e,n){var t,r,a=e.x===(n==null||(t=n.labelViewBox)===null||t===void 0?void 0:t.x)||e.x===n.x,i=e.y===(n==null||(r=n.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===n.y;return a&&i}function jU(e,n){var t=e.endAngle===n.endAngle,r=e.startAngle===n.startAngle;return t&&r}function DU(e,n){var t=e.x===n.x,r=e.y===n.y,a=e.z===n.z;return t&&r&&a}function $U(e,n){var t;return m0(e,n)?t=EU:h0(e,n)?t=jU:Ls(e,n)&&(t=DU),t}function LU(e,n){var t;return m0(e,n)?t="trapezoids":h0(e,n)?t="sectors":Ls(e,n)&&(t="points"),t}function FU(e,n){if(m0(e,n)){var t;return(t=n.tooltipPayload)===null||t===void 0||(t=t[0])===null||t===void 0||(t=t.payload)===null||t===void 0?void 0:t.payload}if(h0(e,n)){var r;return(r=n.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return Ls(e,n)?n.payload:{}}function qU(e){var n=e.activeTooltipItem,t=e.graphicalItem,r=e.itemData,a=LU(t,n),i=FU(t,n),s=r.filter(function(c,f){var m=Ha(i,c),d=t.props[a].filter(function(B){var I=$U(t,n);return I(B,n)}),v=t.props[a].indexOf(d[d.length-1]),y=f===v;return m&&y}),p=r.indexOf(s[s.length-1]);return p}var _l;function Ai(e){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ai(e)}function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ui.apply(this,arguments)}function AS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function rn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?AS(Object(t),!0).forEach(function(r){qt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):AS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function zU(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _S(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o_(r.key),r)}}function UU(e,n,t){return n&&_S(e.prototype,n),t&&_S(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function VU(e,n,t){return n=bc(n),GU(e,a_()?Reflect.construct(n,t||[],bc(e).constructor):n.apply(e,t))}function GU(e,n){if(n&&(Ai(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return KU(e)}function KU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(a_=function(){return!!e})()}function bc(e){return bc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},bc(e)}function QU(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&jg(e,n)}function jg(e,n){return jg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},jg(e,n)}function qt(e,n,t){return n=o_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o_(e){var n=YU(e,"string");return Ai(n)=="symbol"?n:n+""}function YU(e,n){if(Ai(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ai(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ea=(function(e){function n(t){var r;return zU(this,n),r=VU(this,n,[t]),qt(r,"pieRef",null),qt(r,"sectorRefs",[]),qt(r,"id",Da("recharts-pie-")),qt(r,"handleAnimationEnd",function(){var a=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),ke(a)&&a()}),qt(r,"handleAnimationStart",function(){var a=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),ke(a)&&a()}),r.state={isAnimationFinished:!t.isAnimationActive,prevIsAnimationActive:t.isAnimationActive,prevAnimationId:t.animationId,sectorToFocus:0},r}return QU(n,e),UU(n,[{key:"isActiveIndex",value:function(r){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(r)!==-1:r===a}},{key:"hasActiveIndex",value:function(){var r=this.props.activeIndex;return Array.isArray(r)?r.length!==0:r||r===0}},{key:"renderLabels",value:function(r){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.label,p=i.labelLine,c=i.dataKey,f=i.valueKey,m=We(this.props,!1),d=We(s,!1),v=We(p,!1),y=s&&s.offsetRadius||20,B=r.map(function(I,b){var S=(I.startAngle+I.endAngle)/2,W=on(I.cx,I.cy,I.outerRadius+y,S),M=rn(rn(rn(rn({},m),I),{},{stroke:"none"},d),{},{index:b,textAnchor:n.getTextAnchor(W.x,I.cx)},W),O=rn(rn(rn(rn({},m),I),{},{fill:"none",stroke:I.fill},v),{},{index:b,points:[on(I.cx,I.cy,I.outerRadius,S),W]}),w=c;return Ne(c)&&Ne(f)?w="value":Ne(c)&&(w=f),E.createElement(De,{key:"label-".concat(I.startAngle,"-").concat(I.endAngle,"-").concat(I.midAngle,"-").concat(b)},p&&n.renderLabelLineItem(p,O,"line"),n.renderLabelItem(s,M,ln(I,w)))});return E.createElement(De,{className:"recharts-pie-labels"},B)}},{key:"renderSectorsStatically",value:function(r){var a=this,i=this.props,s=i.activeShape,p=i.blendStroke,c=i.inactiveShape;return r.map(function(f,m){if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&r.length!==1)return null;var d=a.isActiveIndex(m),v=c&&a.hasActiveIndex()?c:null,y=d?s:v,B=rn(rn({},f),{},{stroke:p?f.fill:f.stroke,tabIndex:-1});return E.createElement(De,ui({ref:function(b){b&&!a.sectorRefs.includes(b)&&a.sectorRefs.push(b)},tabIndex:-1,className:"recharts-pie-sector"},Ra(a.props,f,m),{key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(m)}),E.createElement(yc,ui({option:y,isActive:d,shapeType:"sector"},B)))})}},{key:"renderSectorsWithAnimation",value:function(){var r=this,a=this.props,i=a.sectors,s=a.isAnimationActive,p=a.animationBegin,c=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state,v=d.prevSectors,y=d.prevIsAnimationActive;return E.createElement(Kt,{begin:p,duration:c,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m,"-").concat(y),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(B){var I=B.t,b=[],S=i&&i[0],W=S.startAngle;return i.forEach(function(M,O){var w=v&&v[O],A=O>0?_t(M,"paddingAngle",0):0;if(w){var N=hn(w.endAngle-w.startAngle,M.endAngle-M.startAngle),P=rn(rn({},M),{},{startAngle:W+A,endAngle:W+N(I)+A});b.push(P),W=P.endAngle}else{var C=M.endAngle,T=M.startAngle,j=hn(0,C-T),H=j(I),q=rn(rn({},M),{},{startAngle:W+A,endAngle:W+H+A});b.push(q),W=q.endAngle}}),E.createElement(De,null,r.renderSectorsStatically(b))})}},{key:"attachKeyboardHandlers",value:function(r){var a=this;r.onkeydown=function(i){if(!i.altKey)switch(i.key){case"ArrowLeft":{var s=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[s].focus(),a.setState({sectorToFocus:s});break}case"ArrowRight":{var p=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[p].focus(),a.setState({sectorToFocus:p});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var r=this.props,a=r.sectors,i=r.isAnimationActive,s=this.state.prevSectors;return i&&a&&a.length&&(!s||!Ha(s,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var r=this,a=this.props,i=a.hide,s=a.sectors,p=a.className,c=a.label,f=a.cx,m=a.cy,d=a.innerRadius,v=a.outerRadius,y=a.isAnimationActive,B=this.state.isAnimationFinished;if(i||!s||!s.length||!pe(f)||!pe(m)||!pe(d)||!pe(v))return null;var I=Ee("recharts-pie",p);return E.createElement(De,{tabIndex:this.props.rootTabIndex,className:I,ref:function(S){r.pieRef=S}},this.renderSectors(),c&&this.renderLabels(s),zn.renderCallByParent(this.props,null,!1),(!y||B)&&lr.renderCallByParent(this.props,s,!1))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return a.prevIsAnimationActive!==r.isAnimationActive?{prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:[],isAnimationFinished:!0}:r.isAnimationActive&&r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:r.sectors!==a.curSectors?{curSectors:r.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(r,a){return r>a?"start":r<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(r,a,i){if(E.isValidElement(r))return E.cloneElement(r,a);if(ke(r))return r(a);var s=Ee("recharts-pie-label-line",typeof r!="boolean"?r.className:"");return E.createElement(ka,ui({},a,{key:i,type:"linear",className:s}))}},{key:"renderLabelItem",value:function(r,a,i){if(E.isValidElement(r))return E.cloneElement(r,a);var s=i;if(ke(r)&&(s=r(a),E.isValidElement(s)))return s;var p=Ee("recharts-pie-label-text",typeof r!="boolean"&&!ke(r)?r.className:"");return E.createElement(yo,ui({},a,{alignmentBaseline:"middle",className:p}),s)}}])})(Y.PureComponent);_l=ea;qt(ea,"displayName","Pie");qt(ea,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Zr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});qt(ea,"parseDeltaAngle",function(e,n){var t=ot(n-e),r=Math.min(Math.abs(n-e),360);return t*r});qt(ea,"getRealPieData",function(e){var n=e.data,t=e.children,r=We(e,!1),a=st(t,Xs);return n&&n.length?n.map(function(i,s){return rn(rn(rn({payload:i},r),i),a&&a[s]&&a[s].props)}):a&&a.length?a.map(function(i){return rn(rn({},r),i.props)}):[]});qt(ea,"parseCoordinateOfPie",function(e,n){var t=n.top,r=n.left,a=n.width,i=n.height,s=FA(a,i),p=r+it(e.cx,a,a/2),c=t+it(e.cy,i,i/2),f=it(e.innerRadius,s,0),m=it(e.outerRadius,s,s*.8),d=e.maxRadius||Math.sqrt(a*a+i*i)/2;return{cx:p,cy:c,innerRadius:f,outerRadius:m,maxRadius:d}});qt(ea,"getComposedData",function(e){var n=e.item,t=e.offset,r=n.type.defaultProps!==void 0?rn(rn({},n.type.defaultProps),n.props):n.props,a=_l.getRealPieData(r);if(!a||!a.length)return null;var i=r.cornerRadius,s=r.startAngle,p=r.endAngle,c=r.paddingAngle,f=r.dataKey,m=r.nameKey,d=r.valueKey,v=r.tooltipType,y=Math.abs(r.minAngle),B=_l.parseCoordinateOfPie(r,t),I=_l.parseDeltaAngle(s,p),b=Math.abs(I),S=f;Ne(f)&&Ne(d)?(pr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S="value"):Ne(f)&&(pr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S=d);var W=a.filter(function(P){return ln(P,S,0)!==0}).length,M=(b>=360?W:W-1)*c,O=b-W*y-M,w=a.reduce(function(P,C){var T=ln(C,S,0);return P+(pe(T)?T:0)},0),A;if(w>0){var N;A=a.map(function(P,C){var T=ln(P,S,0),j=ln(P,m,C),H=(pe(T)?T:0)/w,q;C?q=N.endAngle+ot(I)*c*(T!==0?1:0):q=s;var L=q+ot(I)*((T!==0?y:0)+H*O),K=(q+L)/2,U=(B.innerRadius+B.outerRadius)/2,V=[{name:j,value:T,payload:P,dataKey:S,type:v}],D=on(B.cx,B.cy,U,K);return N=rn(rn(rn({percent:H,cornerRadius:i,name:j,tooltipPayload:V,midAngle:K,middleRadius:U,tooltipPosition:D},P),B),{},{value:ln(P,S),startAngle:q,endAngle:L,payload:P,paddingAngle:ot(I)*c}),N})}return rn(rn({},B),{},{sectors:A,data:a})});var ov,OS;function XU(){if(OS)return ov;OS=1;var e=Math.ceil,n=Math.max;function t(r,a,i,s){for(var p=-1,c=n(e((a-r)/(i||1)),0),f=Array(c);c--;)f[s?c:++p]=r,r+=i;return f}return ov=t,ov}var iv,CS;function i_(){if(CS)return iv;CS=1;var e=OM(),n=1/0,t=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=e(a),a===n||a===-n){var i=a<0?-1:1;return i*t}return a===a?a:0}return iv=r,iv}var uv,kS;function ZU(){if(kS)return uv;kS=1;var e=XU(),n=Jc(),t=i_();function r(a){return function(i,s,p){return p&&typeof p!="number"&&n(i,s,p)&&(s=p=void 0),i=t(i),s===void 0?(s=i,i=0):s=t(s),p=p===void 0?i<s?1:-1:t(p),e(i,s,p,a)}}return uv=r,uv}var sv,NS;function JU(){if(NS)return sv;NS=1;var e=ZU(),n=e();return sv=n,sv}var eV=JU();const Ic=Xe(eV);function Fs(e){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Fs(e)}function RS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function HS(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?RS(Object(t),!0).forEach(function(r){u_(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):RS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function u_(e,n,t){return n=nV(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function nV(e){var n=tV(e,"string");return Fs(n)=="symbol"?n:n+""}function tV(e,n){if(Fs(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var rV=["Webkit","Moz","O","ms"],aV=function(n,t){var r=n.replace(/(\w)/,function(i){return i.toUpperCase()}),a=rV.reduce(function(i,s){return HS(HS({},i),{},u_({},s+r,t))},{});return a[n]=t,a};function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_i(e)}function Bc(){return Bc=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Bc.apply(this,arguments)}function TS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function pv(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?TS(Object(t),!0).forEach(function(r){Pt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):TS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function oV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function ES(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p_(r.key),r)}}function iV(e,n,t){return n&&ES(e.prototype,n),t&&ES(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function uV(e,n,t){return n=xc(n),sV(e,s_()?Reflect.construct(n,t||[],xc(e).constructor):n.apply(e,t))}function sV(e,n){if(n&&(_i(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pV(e)}function pV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(s_=function(){return!!e})()}function xc(e){return xc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},xc(e)}function lV(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Dg(e,n)}function Dg(e,n){return Dg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Dg(e,n)}function Pt(e,n,t){return n=p_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p_(e){var n=cV(e,"string");return _i(n)=="symbol"?n:n+""}function cV(e,n){if(_i(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(_i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var fV=function(n){var t=n.data,r=n.startIndex,a=n.endIndex,i=n.x,s=n.width,p=n.travellerWidth;if(!t||!t.length)return{};var c=t.length,f=as().domain(Ic(0,c)).range([i,i+s-p]),m=f.domain().map(function(d){return f(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(a),scale:f,scaleValues:m}},jS=function(n){return n.changedTouches&&!!n.changedTouches.length},Oi=(function(e){function n(t){var r;return oV(this,n),r=uV(this,n,[t]),Pt(r,"handleDrag",function(a){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(a):r.state.isSlideMoving&&r.handleSlideDrag(a)}),Pt(r,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&r.handleDrag(a.changedTouches[0])}),Pt(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=r.props,i=a.endIndex,s=a.onDragEnd,p=a.startIndex;s==null||s({endIndex:i,startIndex:p})}),r.detachDragEndListener()}),Pt(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),Pt(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),Pt(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),Pt(r,"handleSlideDragStart",function(a){var i=jS(a)?a.changedTouches[0]:a;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:i.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return lV(n,e),iV(n,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var a=r.startX,i=r.endX,s=this.state.scaleValues,p=this.props,c=p.gap,f=p.data,m=f.length-1,d=Math.min(a,i),v=Math.max(a,i),y=n.getIndexInRange(s,d),B=n.getIndexInRange(s,v);return{startIndex:y-y%c,endIndex:B===m?m:B-B%c}}},{key:"getTextOfTick",value:function(r){var a=this.props,i=a.data,s=a.tickFormatter,p=a.dataKey,c=ln(i[r],p,r);return ke(s)?s(c,r):c}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var a=this.state,i=a.slideMoveStartX,s=a.startX,p=a.endX,c=this.props,f=c.x,m=c.width,d=c.travellerWidth,v=c.startIndex,y=c.endIndex,B=c.onChange,I=r.pageX-i;I>0?I=Math.min(I,f+m-d-p,f+m-d-s):I<0&&(I=Math.max(I,f-s,f-p));var b=this.getIndex({startX:s+I,endX:p+I});(b.startIndex!==v||b.endIndex!==y)&&B&&B(b),this.setState({startX:s+I,endX:p+I,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,a){var i=jS(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:i.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var a=this.state,i=a.brushMoveStartX,s=a.movingTravellerId,p=a.endX,c=a.startX,f=this.state[s],m=this.props,d=m.x,v=m.width,y=m.travellerWidth,B=m.onChange,I=m.gap,b=m.data,S={startX:this.state.startX,endX:this.state.endX},W=r.pageX-i;W>0?W=Math.min(W,d+v-y-f):W<0&&(W=Math.max(W,d-f)),S[s]=f+W;var M=this.getIndex(S),O=M.startIndex,w=M.endIndex,A=function(){var P=b.length-1;return s==="startX"&&(p>c?O%I===0:w%I===0)||p<c&&w===P||s==="endX"&&(p>c?w%I===0:O%I===0)||p>c&&w===P};this.setState(Pt(Pt({},s,f+W),"brushMoveStartX",r.pageX),function(){B&&A()&&B(M)})}},{key:"handleTravellerMoveKeyboard",value:function(r,a){var i=this,s=this.state,p=s.scaleValues,c=s.startX,f=s.endX,m=this.state[a],d=p.indexOf(m);if(d!==-1){var v=d+r;if(!(v===-1||v>=p.length)){var y=p[v];a==="startX"&&y>=f||a==="endX"&&y<=c||this.setState(Pt({},a,y),function(){i.props.onChange(i.getIndex({startX:i.state.startX,endX:i.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,p=r.height,c=r.fill,f=r.stroke;return E.createElement("rect",{stroke:f,fill:c,x:a,y:i,width:s,height:p})}},{key:"renderPanorama",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,p=r.height,c=r.data,f=r.children,m=r.padding,d=Y.Children.only(f);return d?E.cloneElement(d,{x:a,y:i,width:s,height:p,margin:m,compact:!0,data:c}):null}},{key:"renderTravellerLayer",value:function(r,a){var i,s,p=this,c=this.props,f=c.y,m=c.travellerWidth,d=c.height,v=c.traveller,y=c.ariaLabel,B=c.data,I=c.startIndex,b=c.endIndex,S=Math.max(r,this.props.x),W=pv(pv({},We(this.props,!1)),{},{x:S,y:f,width:m,height:d}),M=y||"Min value: ".concat((i=B[I])===null||i===void 0?void 0:i.name,", Max value: ").concat((s=B[b])===null||s===void 0?void 0:s.name);return E.createElement(De,{tabIndex:0,role:"slider","aria-label":M,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(w){["ArrowLeft","ArrowRight"].includes(w.key)&&(w.preventDefault(),w.stopPropagation(),p.handleTravellerMoveKeyboard(w.key==="ArrowRight"?1:-1,a))},onFocus:function(){p.setState({isTravellerFocused:!0})},onBlur:function(){p.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},n.renderTraveller(v,W))}},{key:"renderSlide",value:function(r,a){var i=this.props,s=i.y,p=i.height,c=i.stroke,f=i.travellerWidth,m=Math.min(r,a)+f,d=Math.max(Math.abs(a-r)-f,0);return E.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:c,fillOpacity:.2,x:m,y:s,width:d,height:p})}},{key:"renderText",value:function(){var r=this.props,a=r.startIndex,i=r.endIndex,s=r.y,p=r.height,c=r.travellerWidth,f=r.stroke,m=this.state,d=m.startX,v=m.endX,y=5,B={pointerEvents:"none",fill:f};return E.createElement(De,{className:"recharts-brush-texts"},E.createElement(yo,Bc({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,v)-y,y:s+p/2},B),this.getTextOfTick(a)),E.createElement(yo,Bc({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,v)+c+y,y:s+p/2},B),this.getTextOfTick(i)))}},{key:"render",value:function(){var r=this.props,a=r.data,i=r.className,s=r.children,p=r.x,c=r.y,f=r.width,m=r.height,d=r.alwaysShowText,v=this.state,y=v.startX,B=v.endX,I=v.isTextActive,b=v.isSlideMoving,S=v.isTravellerMoving,W=v.isTravellerFocused;if(!a||!a.length||!pe(p)||!pe(c)||!pe(f)||!pe(m)||f<=0||m<=0)return null;var M=Ee("recharts-brush",i),O=E.Children.count(s)===1,w=aV("userSelect","none");return E.createElement(De,{className:M,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:w},this.renderBackground(),O&&this.renderPanorama(),this.renderSlide(y,B),this.renderTravellerLayer(y,"startX"),this.renderTravellerLayer(B,"endX"),(I||b||S||W||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var a=r.x,i=r.y,s=r.width,p=r.height,c=r.stroke,f=Math.floor(i+p/2)-1;return E.createElement(E.Fragment,null,E.createElement("rect",{x:a,y:i,width:s,height:p,fill:c,stroke:"none"}),E.createElement("line",{x1:a+1,y1:f,x2:a+s-1,y2:f,fill:"none",stroke:"#fff"}),E.createElement("line",{x1:a+1,y1:f+2,x2:a+s-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,a){var i;return E.isValidElement(r)?i=E.cloneElement(r,a):ke(r)?i=r(a):i=n.renderDefaultTraveller(a),i}},{key:"getDerivedStateFromProps",value:function(r,a){var i=r.data,s=r.width,p=r.x,c=r.travellerWidth,f=r.updateId,m=r.startIndex,d=r.endIndex;if(i!==a.prevData||f!==a.prevUpdateId)return pv({prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:p,prevWidth:s},i&&i.length?fV({data:i,width:s,x:p,travellerWidth:c,startIndex:m,endIndex:d}):{scale:null,scaleValues:null});if(a.scale&&(s!==a.prevWidth||p!==a.prevX||c!==a.prevTravellerWidth)){a.scale.range([p,p+s-c]);var v=a.scale.domain().map(function(y){return a.scale(y)});return{prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:p,prevWidth:s,startX:a.scale(r.startIndex),endX:a.scale(r.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(r,a){for(var i=r.length,s=0,p=i-1;p-s>1;){var c=Math.floor((s+p)/2);r[c]>a?p=c:s=c}return a>=r[p]?p:s}}])})(Y.PureComponent);Pt(Oi,"displayName","Brush");Pt(Oi,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var lv,DS;function dV(){if(DS)return lv;DS=1;var e=Ty();function n(t,r){var a;return e(t,function(i,s,p){return a=r(i,s,p),!a}),!!a}return lv=n,lv}var cv,$S;function mV(){if($S)return cv;$S=1;var e=uM(),n=Mr(),t=dV(),r=yt(),a=Jc();function i(s,p,c){var f=r(s)?e:t;return c&&a(s,p,c)&&(p=void 0),f(s,n(p,3))}return cv=i,cv}var hV=mV();const vV=Xe(hV);var wr=function(n,t){var r=n.alwaysShow,a=n.ifOverflow;return r&&(a="extendDomain"),a===t},fv,LS;function gV(){if(LS)return fv;LS=1;var e=SM();function n(t,r,a){r=="__proto__"&&e?e(t,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):t[r]=a}return fv=n,fv}var dv,FS;function yV(){if(FS)return dv;FS=1;var e=gV(),n=wM(),t=Mr();function r(a,i){var s={};return i=t(i,3),n(a,function(p,c,f){e(s,c,i(p,c,f))}),s}return dv=r,dv}var bV=yV();const IV=Xe(bV);var mv,qS;function BV(){if(qS)return mv;qS=1;function e(n,t){for(var r=-1,a=n==null?0:n.length;++r<a;)if(!t(n[r],r,n))return!1;return!0}return mv=e,mv}var hv,zS;function xV(){if(zS)return hv;zS=1;var e=Ty();function n(t,r){var a=!0;return e(t,function(i,s,p){return a=!!r(i,s,p),a}),a}return hv=n,hv}var vv,US;function wV(){if(US)return vv;US=1;var e=BV(),n=xV(),t=Mr(),r=yt(),a=Jc();function i(s,p,c){var f=r(s)?e:n;return c&&a(s,p,c)&&(p=void 0),f(s,t(p,3))}return vv=i,vv}var PV=wV();const l_=Xe(PV);var SV=["x","y"];function qs(e){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qs(e)}function $g(){return $g=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},$g.apply(this,arguments)}function VS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Zu(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?VS(Object(t),!0).forEach(function(r){WV(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):VS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function WV(e,n,t){return n=MV(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function MV(e){var n=AV(e,"string");return qs(n)=="symbol"?n:n+""}function AV(e,n){if(qs(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(qs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function _V(e,n){if(e==null)return{};var t=OV(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function OV(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function CV(e,n){var t=e.x,r=e.y,a=_V(e,SV),i="".concat(t),s=parseInt(i,10),p="".concat(r),c=parseInt(p,10),f="".concat(n.height||a.height),m=parseInt(f,10),d="".concat(n.width||a.width),v=parseInt(d,10);return Zu(Zu(Zu(Zu(Zu({},n),a),s?{x:s}:{}),c?{y:c}:{}),{},{height:m,width:v,name:n.name,radius:n.radius})}function GS(e){return E.createElement(yc,$g({shapeType:"rectangle",propTransformer:CV,activeClassName:"recharts-active-bar"},e))}var kV=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,a){if(typeof n=="number")return n;var i=typeof r=="number";return i?n(r,a):(i||Io(),t)}},NV=["value","background"],c_;function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ci(e)}function RV(e,n){if(e==null)return{};var t=HV(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function HV(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function wc(){return wc=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wc.apply(this,arguments)}function KS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function On(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?KS(Object(t),!0).forEach(function(r){Aa(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):KS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function TV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function QS(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d_(r.key),r)}}function EV(e,n,t){return n&&QS(e.prototype,n),t&&QS(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function jV(e,n,t){return n=Pc(n),DV(e,f_()?Reflect.construct(n,t||[],Pc(e).constructor):n.apply(e,t))}function DV(e,n){if(n&&(Ci(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $V(e)}function $V(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(f_=function(){return!!e})()}function Pc(e){return Pc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Pc(e)}function LV(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Lg(e,n)}function Lg(e,n){return Lg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Lg(e,n)}function Aa(e,n,t){return n=d_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d_(e){var n=FV(e,"string");return Ci(n)=="symbol"?n:n+""}function FV(e,n){if(Ci(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ci(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Sr=(function(e){function n(){var t;TV(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=jV(this,n,[].concat(a)),Aa(t,"state",{isAnimationFinished:!1}),Aa(t,"id",Da("recharts-bar-")),Aa(t,"handleAnimationEnd",function(){var s=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),s&&s()}),Aa(t,"handleAnimationStart",function(){var s=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),s&&s()}),t}return LV(n,e),EV(n,[{key:"renderRectanglesStatically",value:function(r){var a=this,i=this.props,s=i.shape,p=i.dataKey,c=i.activeIndex,f=i.activeBar,m=We(this.props,!1);return r&&r.map(function(d,v){var y=v===c,B=y?f:s,I=On(On(On({},m),d),{},{isActive:y,option:B,index:v,dataKey:p,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return E.createElement(De,wc({className:"recharts-bar-rectangle"},Ra(a.props,d,v),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(v)}),E.createElement(GS,I))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,a=this.props,i=a.data,s=a.layout,p=a.isAnimationActive,c=a.animationBegin,f=a.animationDuration,m=a.animationEasing,d=a.animationId,v=this.state.prevData;return E.createElement(Kt,{begin:c,duration:f,isActive:p,easing:m,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(y){var B=y.t,I=i.map(function(b,S){var W=v&&v[S];if(W){var M=hn(W.x,b.x),O=hn(W.y,b.y),w=hn(W.width,b.width),A=hn(W.height,b.height);return On(On({},b),{},{x:M(B),y:O(B),width:w(B),height:A(B)})}if(s==="horizontal"){var N=hn(0,b.height),P=N(B);return On(On({},b),{},{y:b.y+b.height-P,height:P})}var C=hn(0,b.width),T=C(B);return On(On({},b),{},{width:T})});return E.createElement(De,null,r.renderRectanglesStatically(I))})}},{key:"renderRectangles",value:function(){var r=this.props,a=r.data,i=r.isAnimationActive,s=this.state.prevData;return i&&a&&a.length&&(!s||!Ha(s,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var r=this,a=this.props,i=a.data,s=a.dataKey,p=a.activeIndex,c=We(this.props.background,!1);return i.map(function(f,m){f.value;var d=f.background,v=RV(f,NV);if(!d)return null;var y=On(On(On(On(On({},v),{},{fill:"#eee"},d),c),Ra(r.props,f,m)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:s,index:m,className:"recharts-bar-background-rectangle"});return E.createElement(GS,wc({key:"background-bar-".concat(m),option:r.props.background,isActive:m===p},y))})}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.data,p=i.xAxis,c=i.yAxis,f=i.layout,m=i.children,d=st(m,nu);if(!d)return null;var v=f==="vertical"?s[0].height/2:s[0].width/2,y=function(b,S){var W=Array.isArray(b.value)?b.value[1]:b.value;return{x:b.x,y:b.y,value:W,errorVal:ln(b,S)}},B={clipPath:r?"url(#clipPath-".concat(a,")"):null};return E.createElement(De,B,d.map(function(I){return E.cloneElement(I,{key:"error-bar-".concat(a,"-").concat(I.props.dataKey),data:s,xAxis:p,yAxis:c,layout:f,offset:v,dataPointFormatter:y})}))}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.data,s=r.className,p=r.xAxis,c=r.yAxis,f=r.left,m=r.top,d=r.width,v=r.height,y=r.isAnimationActive,B=r.background,I=r.id;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,S=Ee("recharts-bar",s),W=p&&p.allowDataOverflow,M=c&&c.allowDataOverflow,O=W||M,w=Ne(I)?this.id:I;return E.createElement(De,{className:S},W||M?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(w)},E.createElement("rect",{x:W?f:f-d/2,y:M?m:m-v/2,width:W?d:d*2,height:M?v:v*2}))):null,E.createElement(De,{className:"recharts-bar-rectangles",clipPath:O?"url(#clipPath-".concat(w,")"):null},B?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(O,w),(!y||b)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:a.curData}:r.data!==a.curData?{curData:r.data}:null}}])})(Y.PureComponent);c_=Sr;Aa(Sr,"displayName","Bar");Aa(Sr,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});Aa(Sr,"getComposedData",function(e){var n=e.props,t=e.item,r=e.barPosition,a=e.bandSize,i=e.xAxis,s=e.yAxis,p=e.xAxisTicks,c=e.yAxisTicks,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,y=d9(r,t);if(!y)return null;var B=n.layout,I=t.type.defaultProps,b=I!==void 0?On(On({},I),t.props):t.props,S=b.dataKey,W=b.children,M=b.minPointSize,O=B==="horizontal"?s:i,w=f?O.scale.domain():null,A=I9({numericAxis:O}),N=st(W,Xs),P=d.map(function(C,T){var j,H,q,L,K,U;f?j=m9(f[m+T],w):(j=ln(C,S),Array.isArray(j)||(j=[A,j]));var V=kV(M,c_.defaultProps.minPointSize)(j[1],T);if(B==="horizontal"){var D,Q=[s.scale(j[0]),s.scale(j[1])],X=Q[0],R=Q[1];H=w4({axis:i,ticks:p,bandSize:a,offset:y.offset,entry:C,index:T}),q=(D=R??X)!==null&&D!==void 0?D:void 0,L=y.size;var F=X-R;if(K=Number.isNaN(F)?0:F,U={x:H,y:s.y,width:L,height:s.height},Math.abs(V)>0&&Math.abs(K)<Math.abs(V)){var J=ot(K||V)*(Math.abs(V)-Math.abs(K));q-=J,K+=J}}else{var ue=[i.scale(j[0]),i.scale(j[1])],me=ue[0],ge=ue[1];if(H=me,q=w4({axis:s,ticks:c,bandSize:a,offset:y.offset,entry:C,index:T}),L=ge-me,K=y.size,U={x:i.x,y:q,width:i.width,height:K},Math.abs(V)>0&&Math.abs(L)<Math.abs(V)){var ye=ot(L||V)*(Math.abs(V)-Math.abs(L));L+=ye}}return On(On(On({},C),{},{x:H,y:q,width:L,height:K,value:f?j:j[1],payload:C,background:U},N&&N[T]&&N[T].props),{},{tooltipPayload:[$A(t,C)],tooltipPosition:{x:H+L/2,y:q+K/2}})});return On({data:P,layout:B},v)});function zs(e){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},zs(e)}function qV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function YS(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m_(r.key),r)}}function zV(e,n,t){return n&&YS(e.prototype,n),t&&YS(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function XS(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function or(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?XS(Object(t),!0).forEach(function(r){v0(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):XS(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function v0(e,n,t){return n=m_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m_(e){var n=UV(e,"string");return zs(n)=="symbol"?n:n+""}function UV(e,n){if(zs(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(zs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var fb=function(n,t,r,a,i){var s=n.width,p=n.height,c=n.layout,f=n.children,m=Object.keys(t),d={left:r.left,leftMirror:r.left,right:s-r.right,rightMirror:s-r.right,top:r.top,topMirror:r.top,bottom:p-r.bottom,bottomMirror:p-r.bottom},v=!!St(f,Sr);return m.reduce(function(y,B){var I=t[B],b=I.orientation,S=I.domain,W=I.padding,M=W===void 0?{}:W,O=I.mirror,w=I.reversed,A="".concat(b).concat(O?"Mirror":""),N,P,C,T,j;if(I.type==="number"&&(I.padding==="gap"||I.padding==="no-gap")){var H=S[1]-S[0],q=1/0,L=I.categoricalDomain.sort();if(L.forEach(function(ue,me){me>0&&(q=Math.min((ue||0)-(L[me-1]||0),q))}),Number.isFinite(q)){var K=q/H,U=I.layout==="vertical"?r.height:r.width;if(I.padding==="gap"&&(N=K*U/2),I.padding==="no-gap"){var V=it(n.barCategoryGap,K*U),D=K*U/2;N=D-V-(D-V)/U*V}}}a==="xAxis"?P=[r.left+(M.left||0)+(N||0),r.left+r.width-(M.right||0)-(N||0)]:a==="yAxis"?P=c==="horizontal"?[r.top+r.height-(M.bottom||0),r.top+(M.top||0)]:[r.top+(M.top||0)+(N||0),r.top+r.height-(M.bottom||0)-(N||0)]:P=I.range,w&&(P=[P[1],P[0]]);var Q=TA(I,i,v),X=Q.scale,R=Q.realScaleType;X.domain(S).range(P),EA(X);var F=jA(X,or(or({},I),{},{realScaleType:R}));a==="xAxis"?(j=b==="top"&&!O||b==="bottom"&&O,C=r.left,T=d[A]-j*I.height):a==="yAxis"&&(j=b==="left"&&!O||b==="right"&&O,C=d[A]-j*I.width,T=r.top);var J=or(or(or({},I),F),{},{realScaleType:R,x:C,y:T,scale:X,width:a==="xAxis"?r.width:I.width,height:a==="yAxis"?r.height:I.height});return J.bandSize=ic(J,F),!I.hide&&a==="xAxis"?d[A]+=(j?-1:1)*J.height:I.hide||(d[A]+=(j?-1:1)*J.width),or(or({},y),{},v0({},B,J))},{})},h_=function(n,t){var r=n.x,a=n.y,i=t.x,s=t.y;return{x:Math.min(r,i),y:Math.min(a,s),width:Math.abs(i-r),height:Math.abs(s-a)}},VV=function(n){var t=n.x1,r=n.y1,a=n.x2,i=n.y2;return h_({x:t,y:r},{x:a,y:i})},v_=(function(){function e(n){qV(this,e),this.scale=n}return zV(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.bandAware,i=r.position;if(t!==void 0){if(i)switch(i){case"start":return this.scale(t);case"middle":{var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+s}case"end":{var p=this.bandwidth?this.bandwidth():0;return this.scale(t)+p}default:return this.scale(t)}if(a){var c=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+c}return this.scale(t)}}},{key:"isInRange",value:function(t){var r=this.range(),a=r[0],i=r[r.length-1];return a<=i?t>=a&&t<=i:t>=i&&t<=a}}],[{key:"create",value:function(t){return new e(t)}}])})();v0(v_,"EPS",1e-4);var db=function(n){var t=Object.keys(n).reduce(function(r,a){return or(or({},r),{},v0({},a,v_.create(n[a])))},{});return or(or({},t),{},{apply:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.bandAware,p=i.position;return IV(a,function(c,f){return t[f].apply(c,{bandAware:s,position:p})})},isInRange:function(a){return l_(a,function(i,s){return t[s].isInRange(i)})}})};function GV(e){return(e%180+180)%180}var KV=function(n){var t=n.width,r=n.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=GV(a),s=i*Math.PI/180,p=Math.atan(r/t),c=s>p&&s<Math.PI-p?r/Math.sin(s):t/Math.cos(s);return Math.abs(c)},gv,ZS;function QV(){if(ZS)return gv;ZS=1;var e=Mr(),n=Ys(),t=Xc();function r(a){return function(i,s,p){var c=Object(i);if(!n(i)){var f=e(s,3);i=t(i),s=function(d){return f(c[d],d,c)}}var m=a(i,s,p);return m>-1?c[f?i[m]:m]:void 0}}return gv=r,gv}var yv,JS;function YV(){if(JS)return yv;JS=1;var e=i_();function n(t){var r=e(t),a=r%1;return r===r?a?r-a:r:0}return yv=n,yv}var bv,e3;function XV(){if(e3)return bv;e3=1;var e=yM(),n=Mr(),t=YV(),r=Math.max;function a(i,s,p){var c=i==null?0:i.length;if(!c)return-1;var f=p==null?0:t(p);return f<0&&(f=r(c+f,0)),e(i,n(s,3),f)}return bv=a,bv}var Iv,n3;function ZV(){if(n3)return Iv;n3=1;var e=QV(),n=XV(),t=e(n);return Iv=t,Iv}var JV=ZV();const eG=Xe(JV);var nG=NW();const tG=Xe(nG);var rG=tG(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),mb=Y.createContext(void 0),hb=Y.createContext(void 0),g_=Y.createContext(void 0),y_=Y.createContext({}),b_=Y.createContext(void 0),I_=Y.createContext(0),B_=Y.createContext(0),t3=function(n){var t=n.state,r=t.xAxisMap,a=t.yAxisMap,i=t.offset,s=n.clipPathId,p=n.children,c=n.width,f=n.height,m=rG(i);return E.createElement(mb.Provider,{value:r},E.createElement(hb.Provider,{value:a},E.createElement(y_.Provider,{value:i},E.createElement(g_.Provider,{value:m},E.createElement(b_.Provider,{value:s},E.createElement(I_.Provider,{value:f},E.createElement(B_.Provider,{value:c},p)))))))},aG=function(){return Y.useContext(b_)},x_=function(n){var t=Y.useContext(mb);t==null&&Io();var r=t[n];return r==null&&Io(),r},oG=function(){var n=Y.useContext(mb);return Wa(n)},iG=function(){var n=Y.useContext(hb),t=eG(n,function(r){return l_(r.domain,Number.isFinite)});return t||Wa(n)},w_=function(n){var t=Y.useContext(hb);t==null&&Io();var r=t[n];return r==null&&Io(),r},uG=function(){var n=Y.useContext(g_);return n},sG=function(){return Y.useContext(y_)},vb=function(){return Y.useContext(B_)},gb=function(){return Y.useContext(I_)};function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ki(e)}function pG(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function lG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,S_(r.key),r)}}function cG(e,n,t){return n&&lG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fG(e,n,t){return n=Sc(n),dG(e,P_()?Reflect.construct(n,t||[],Sc(e).constructor):n.apply(e,t))}function dG(e,n){if(n&&(ki(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mG(e)}function mG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(P_=function(){return!!e})()}function Sc(e){return Sc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Sc(e)}function hG(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Fg(e,n)}function Fg(e,n){return Fg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Fg(e,n)}function r3(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function a3(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?r3(Object(t),!0).forEach(function(r){yb(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r3(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function yb(e,n,t){return n=S_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S_(e){var n=vG(e,"string");return ki(n)=="symbol"?n:n+""}function vG(e,n){if(ki(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function gG(e,n){return BG(e)||IG(e,n)||bG(e,n)||yG()}function yG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bG(e,n){if(e){if(typeof e=="string")return o3(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o3(e,n)}}function o3(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function IG(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,s,p=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw a}}return p}}function BG(e){if(Array.isArray(e))return e}function qg(){return qg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},qg.apply(this,arguments)}var xG=function(n,t){var r;return E.isValidElement(n)?r=E.cloneElement(n,t):ke(n)?r=n(t):r=E.createElement("line",qg({},t,{className:"recharts-reference-line-line"})),r},wG=function(n,t,r,a,i,s,p,c,f){var m=i.x,d=i.y,v=i.width,y=i.height;if(r){var B=f.y,I=n.y.apply(B,{position:s});if(wr(f,"discard")&&!n.y.isInRange(I))return null;var b=[{x:m+v,y:I},{x:m,y:I}];return c==="left"?b.reverse():b}if(t){var S=f.x,W=n.x.apply(S,{position:s});if(wr(f,"discard")&&!n.x.isInRange(W))return null;var M=[{x:W,y:d+y},{x:W,y:d}];return p==="top"?M.reverse():M}if(a){var O=f.segment,w=O.map(function(A){return n.apply(A,{position:s})});return wr(f,"discard")&&vV(w,function(A){return!n.isInRange(A)})?null:w}return null};function PG(e){var n=e.x,t=e.y,r=e.segment,a=e.xAxisId,i=e.yAxisId,s=e.shape,p=e.className,c=e.alwaysShow,f=aG(),m=x_(a),d=w_(i),v=uG();if(!f||!v)return null;pr(c===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var y=db({x:m.scale,y:d.scale}),B=En(n),I=En(t),b=r&&r.length===2,S=wG(y,B,I,b,v,e.position,m.orientation,d.orientation,e);if(!S)return null;var W=gG(S,2),M=W[0],O=M.x,w=M.y,A=W[1],N=A.x,P=A.y,C=wr(e,"hidden")?"url(#".concat(f,")"):void 0,T=a3(a3({clipPath:C},We(e,!0)),{},{x1:O,y1:w,x2:N,y2:P});return E.createElement(De,{className:Ee("recharts-reference-line",p)},xG(s,T),zn.renderCallByParent(e,VV({x1:O,y1:w,x2:N,y2:P})))}var bb=(function(e){function n(){return pG(this,n),fG(this,n,arguments)}return hG(n,e),cG(n,[{key:"render",value:function(){return E.createElement(PG,this.props)}}])})(E.Component);yb(bb,"displayName","ReferenceLine");yb(bb,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function zg(){return zg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},zg.apply(this,arguments)}function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ni(e)}function i3(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function u3(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i3(Object(t),!0).forEach(function(r){g0(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i3(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function SG(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function WG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,M_(r.key),r)}}function MG(e,n,t){return n&&WG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function AG(e,n,t){return n=Wc(n),_G(e,W_()?Reflect.construct(n,t||[],Wc(e).constructor):n.apply(e,t))}function _G(e,n){if(n&&(Ni(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return OG(e)}function OG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(W_=function(){return!!e})()}function Wc(e){return Wc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Wc(e)}function CG(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Ug(e,n)}function Ug(e,n){return Ug=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ug(e,n)}function g0(e,n,t){return n=M_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function M_(e){var n=kG(e,"string");return Ni(n)=="symbol"?n:n+""}function kG(e,n){if(Ni(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var NG=function(n){var t=n.x,r=n.y,a=n.xAxis,i=n.yAxis,s=db({x:a.scale,y:i.scale}),p=s.apply({x:t,y:r},{bandAware:!0});return wr(n,"discard")&&!s.isInRange(p)?null:p},y0=(function(e){function n(){return SG(this,n),AG(this,n,arguments)}return CG(n,e),MG(n,[{key:"render",value:function(){var r=this.props,a=r.x,i=r.y,s=r.r,p=r.alwaysShow,c=r.clipPathId,f=En(a),m=En(i);if(pr(p===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!m)return null;var d=NG(this.props);if(!d)return null;var v=d.x,y=d.y,B=this.props,I=B.shape,b=B.className,S=wr(this.props,"hidden")?"url(#".concat(c,")"):void 0,W=u3(u3({clipPath:S},We(this.props,!0)),{},{cx:v,cy:y});return E.createElement(De,{className:Ee("recharts-reference-dot",b)},n.renderDot(I,W),zn.renderCallByParent(this.props,{x:v-s,y:y-s,width:2*s,height:2*s}))}}])})(E.Component);g0(y0,"displayName","ReferenceDot");g0(y0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});g0(y0,"renderDot",function(e,n){var t;return E.isValidElement(e)?t=E.cloneElement(e,n):ke(e)?t=e(n):t=E.createElement(tp,zg({},n,{cx:n.cx,cy:n.cy,className:"recharts-reference-dot-dot"})),t});function Vg(){return Vg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Vg.apply(this,arguments)}function Ri(e){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ri(e)}function s3(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function p3(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s3(Object(t),!0).forEach(function(r){b0(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s3(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function RG(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function HG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,__(r.key),r)}}function TG(e,n,t){return n&&HG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function EG(e,n,t){return n=Mc(n),jG(e,A_()?Reflect.construct(n,t||[],Mc(e).constructor):n.apply(e,t))}function jG(e,n){if(n&&(Ri(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return DG(e)}function DG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(A_=function(){return!!e})()}function Mc(e){return Mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Mc(e)}function $G(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Gg(e,n)}function Gg(e,n){return Gg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Gg(e,n)}function b0(e,n,t){return n=__(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function __(e){var n=LG(e,"string");return Ri(n)=="symbol"?n:n+""}function LG(e,n){if(Ri(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ri(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var FG=function(n,t,r,a,i){var s=i.x1,p=i.x2,c=i.y1,f=i.y2,m=i.xAxis,d=i.yAxis;if(!m||!d)return null;var v=db({x:m.scale,y:d.scale}),y={x:n?v.x.apply(s,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(c,{position:"start"}):v.y.rangeMin},B={x:t?v.x.apply(p,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(f,{position:"end"}):v.y.rangeMax};return wr(i,"discard")&&(!v.isInRange(y)||!v.isInRange(B))?null:h_(y,B)},I0=(function(e){function n(){return RG(this,n),EG(this,n,arguments)}return $G(n,e),TG(n,[{key:"render",value:function(){var r=this.props,a=r.x1,i=r.x2,s=r.y1,p=r.y2,c=r.className,f=r.alwaysShow,m=r.clipPathId;pr(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=En(a),v=En(i),y=En(s),B=En(p),I=this.props.shape;if(!d&&!v&&!y&&!B&&!I)return null;var b=FG(d,v,y,B,this.props);if(!b&&!I)return null;var S=wr(this.props,"hidden")?"url(#".concat(m,")"):void 0;return E.createElement(De,{className:Ee("recharts-reference-area",c)},n.renderRect(I,p3(p3({clipPath:S},We(this.props,!0)),b)),zn.renderCallByParent(this.props,b))}}])})(E.Component);b0(I0,"displayName","ReferenceArea");b0(I0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});b0(I0,"renderRect",function(e,n){var t;return E.isValidElement(e)?t=E.cloneElement(e,n):ke(e)?t=e(n):t=E.createElement(cb,Vg({},n,{className:"recharts-reference-area-rect"})),t});function O_(e,n,t){if(n<1)return[];if(n===1&&t===void 0)return e;for(var r=[],a=0;a<e.length;a+=n)r.push(e[a]);return r}function qG(e,n,t){var r={width:e.width+n.width,height:e.height+n.height};return KV(r,t)}function zG(e,n,t){var r=t==="width",a=e.x,i=e.y,s=e.width,p=e.height;return n===1?{start:r?a:i,end:r?a+s:i+p}:{start:r?a+s:i+p,end:r?a:i}}function Ac(e,n,t,r,a){if(e*n<e*r||e*n>e*a)return!1;var i=t();return e*(n-e*i/2-r)>=0&&e*(n+e*i/2-a)<=0}function UG(e,n){return O_(e,n+1)}function VG(e,n,t,r,a){for(var i=(r||[]).slice(),s=n.start,p=n.end,c=0,f=1,m=s,d=function(){var B=r==null?void 0:r[c];if(B===void 0)return{v:O_(r,f)};var I=c,b,S=function(){return b===void 0&&(b=t(B,I)),b},W=B.coordinate,M=c===0||Ac(e,W,S,m,p);M||(c=0,m=s,f+=1),M&&(m=W+e*(S()/2+a),c+=f)},v;f<=i.length;)if(v=d(),v)return v.v;return[]}function Us(e){"@babel/helpers - typeof";return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Us(e)}function l3(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function et(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l3(Object(t),!0).forEach(function(r){GG(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l3(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function GG(e,n,t){return n=KG(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function KG(e){var n=QG(e,"string");return Us(n)=="symbol"?n:n+""}function QG(e,n){if(Us(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Us(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function YG(e,n,t,r,a){for(var i=(r||[]).slice(),s=i.length,p=n.start,c=n.end,f=function(v){var y=i[v],B,I=function(){return B===void 0&&(B=t(y,v)),B};if(v===s-1){var b=e*(y.coordinate+e*I()/2-c);i[v]=y=et(et({},y),{},{tickCoord:b>0?y.coordinate-b*e:y.coordinate})}else i[v]=y=et(et({},y),{},{tickCoord:y.coordinate});var S=Ac(e,y.tickCoord,I,p,c);S&&(c=y.tickCoord-e*(I()/2+a),i[v]=et(et({},y),{},{isShow:!0}))},m=s-1;m>=0;m--)f(m);return i}function XG(e,n,t,r,a,i){var s=(r||[]).slice(),p=s.length,c=n.start,f=n.end;if(i){var m=r[p-1],d=t(m,p-1),v=e*(m.coordinate+e*d/2-f);s[p-1]=m=et(et({},m),{},{tickCoord:v>0?m.coordinate-v*e:m.coordinate});var y=Ac(e,m.tickCoord,function(){return d},c,f);y&&(f=m.tickCoord-e*(d/2+a),s[p-1]=et(et({},m),{},{isShow:!0}))}for(var B=i?p-1:p,I=function(W){var M=s[W],O,w=function(){return O===void 0&&(O=t(M,W)),O};if(W===0){var A=e*(M.coordinate-e*w()/2-c);s[W]=M=et(et({},M),{},{tickCoord:A<0?M.coordinate-A*e:M.coordinate})}else s[W]=M=et(et({},M),{},{tickCoord:M.coordinate});var N=Ac(e,M.tickCoord,w,c,f);N&&(c=M.tickCoord+e*(w()/2+a),s[W]=et(et({},M),{},{isShow:!0}))},b=0;b<B;b++)I(b);return s}function Ib(e,n,t){var r=e.tick,a=e.ticks,i=e.viewBox,s=e.minTickGap,p=e.orientation,c=e.interval,f=e.tickFormatter,m=e.unit,d=e.angle;if(!a||!a.length||!r)return[];if(pe(c)||Zr.isSsr)return UG(a,typeof c=="number"&&pe(c)?c:0);var v=[],y=p==="top"||p==="bottom"?"width":"height",B=m&&y==="width"?rs(m,{fontSize:n,letterSpacing:t}):{width:0,height:0},I=function(M,O){var w=ke(f)?f(M.value,O):M.value;return y==="width"?qG(rs(w,{fontSize:n,letterSpacing:t}),B,d):rs(w,{fontSize:n,letterSpacing:t})[y]},b=a.length>=2?ot(a[1].coordinate-a[0].coordinate):1,S=zG(i,b,y);return c==="equidistantPreserveStart"?VG(b,S,I,a,s):(c==="preserveStart"||c==="preserveStartEnd"?v=XG(b,S,I,a,s,c==="preserveStartEnd"):v=YG(b,S,I,a,s),v.filter(function(W){return W.isShow}))}var ZG=["viewBox"],JG=["viewBox"],eK=["ticks"];function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Hi(e)}function si(){return si=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},si.apply(this,arguments)}function c3(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function at(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c3(Object(t),!0).forEach(function(r){Bb(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c3(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Bv(e,n){if(e==null)return{};var t=nK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function nK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function tK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f3(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,k_(r.key),r)}}function rK(e,n,t){return n&&f3(e.prototype,n),t&&f3(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function aK(e,n,t){return n=_c(n),oK(e,C_()?Reflect.construct(n,t||[],_c(e).constructor):n.apply(e,t))}function oK(e,n){if(n&&(Hi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return iK(e)}function iK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(C_=function(){return!!e})()}function _c(e){return _c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_c(e)}function uK(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Kg(e,n)}function Kg(e,n){return Kg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Kg(e,n)}function Bb(e,n,t){return n=k_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k_(e){var n=sK(e,"string");return Hi(n)=="symbol"?n:n+""}function sK(e,n){if(Hi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var tu=(function(e){function n(t){var r;return tK(this,n),r=aK(this,n,[t]),r.state={fontSize:"",letterSpacing:""},r}return uK(n,e),rK(n,[{key:"shouldComponentUpdate",value:function(r,a){var i=r.viewBox,s=Bv(r,ZG),p=this.props,c=p.viewBox,f=Bv(p,JG);return!li(i,c)||!li(s,f)||!li(a,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var a=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.x,s=a.y,p=a.width,c=a.height,f=a.orientation,m=a.tickSize,d=a.mirror,v=a.tickMargin,y,B,I,b,S,W,M=d?-1:1,O=r.tickSize||m,w=pe(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":y=B=r.coordinate,b=s+ +!d*c,I=b-M*O,W=I-M*v,S=w;break;case"left":I=b=r.coordinate,B=i+ +!d*p,y=B-M*O,S=y-M*v,W=w;break;case"right":I=b=r.coordinate,B=i+ +d*p,y=B+M*O,S=y+M*v,W=w;break;default:y=B=r.coordinate,b=s+ +d*c,I=b+M*O,W=I+M*v,S=w;break}return{line:{x1:y,y1:I,x2:B,y2:b},tick:{x:S,y:W}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s;switch(a){case"left":s=i?"start":"end";break;case"right":s=i?"end":"start";break;default:s="middle";break}return s}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s="end";switch(a){case"left":case"right":s="middle";break;case"top":s=i?"start":"end";break;default:s=i?"end":"start";break}return s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,p=r.height,c=r.orientation,f=r.mirror,m=r.axisLine,d=at(at(at({},We(this.props,!1)),We(m,!1)),{},{fill:"none"});if(c==="top"||c==="bottom"){var v=+(c==="top"&&!f||c==="bottom"&&f);d=at(at({},d),{},{x1:a,y1:i+v*p,x2:a+s,y2:i+v*p})}else{var y=+(c==="left"&&!f||c==="right"&&f);d=at(at({},d),{},{x1:a+y*s,y1:i,x2:a+y*s,y2:i+p})}return E.createElement("line",si({},d,{className:Ee("recharts-cartesian-axis-line",_t(m,"className"))}))}},{key:"renderTicks",value:function(r,a,i){var s=this,p=this.props,c=p.tickLine,f=p.stroke,m=p.tick,d=p.tickFormatter,v=p.unit,y=Ib(at(at({},this.props),{},{ticks:r}),a,i),B=this.getTickTextAnchor(),I=this.getTickVerticalAnchor(),b=We(this.props,!1),S=We(m,!1),W=at(at({},b),{},{fill:"none"},We(c,!1)),M=y.map(function(O,w){var A=s.getTickLineCoord(O),N=A.line,P=A.tick,C=at(at(at(at({textAnchor:B,verticalAnchor:I},b),{},{stroke:"none",fill:f},S),P),{},{index:w,payload:O,visibleTicksCount:y.length,tickFormatter:d});return E.createElement(De,si({className:"recharts-cartesian-axis-tick",key:"tick-".concat(O.value,"-").concat(O.coordinate,"-").concat(O.tickCoord)},Ra(s.props,O,w)),c&&E.createElement("line",si({},W,N,{className:Ee("recharts-cartesian-axis-tick-line",_t(c,"className"))})),m&&n.renderTickItem(m,C,"".concat(ke(d)?d(O.value,w):O.value).concat(v||"")))});return E.createElement("g",{className:"recharts-cartesian-axis-ticks"},M)}},{key:"render",value:function(){var r=this,a=this.props,i=a.axisLine,s=a.width,p=a.height,c=a.ticksGenerator,f=a.className,m=a.hide;if(m)return null;var d=this.props,v=d.ticks,y=Bv(d,eK),B=v;return ke(c)&&(B=v&&v.length>0?c(this.props):c(y)),s<=0||p<=0||!B||!B.length?null:E.createElement(De,{className:Ee("recharts-cartesian-axis",f),ref:function(b){r.layerReference=b}},i&&this.renderAxisLine(),this.renderTicks(B,this.state.fontSize,this.state.letterSpacing),zn.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return E.isValidElement(r)?s=E.cloneElement(r,a):ke(r)?s=r(a):s=E.createElement(yo,si({},a,{className:"recharts-cartesian-axis-tick-value"}),i),s}}])})(Y.Component);Bb(tu,"displayName","CartesianAxis");Bb(tu,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var pK=["x1","y1","x2","y2","key"],lK=["offset"];function Bo(e){"@babel/helpers - typeof";return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Bo(e)}function d3(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function nt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?d3(Object(t),!0).forEach(function(r){cK(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d3(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function cK(e,n,t){return n=fK(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fK(e){var n=dK(e,"string");return Bo(n)=="symbol"?n:n+""}function dK(e,n){if(Bo(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Bo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mo.apply(this,arguments)}function m3(e,n){if(e==null)return{};var t=mK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function mK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var hK=function(n){var t=n.fill;if(!t||t==="none")return null;var r=n.fillOpacity,a=n.x,i=n.y,s=n.width,p=n.height,c=n.ry;return E.createElement("rect",{x:a,y:i,ry:c,width:s,height:p,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function N_(e,n){var t;if(E.isValidElement(e))t=E.cloneElement(e,n);else if(ke(e))t=e(n);else{var r=n.x1,a=n.y1,i=n.x2,s=n.y2,p=n.key,c=m3(n,pK),f=We(c,!1);f.offset;var m=m3(f,lK);t=E.createElement("line",mo({},m,{x1:r,y1:a,x2:i,y2:s,fill:"none",key:p}))}return t}function vK(e){var n=e.x,t=e.width,r=e.horizontal,a=r===void 0?!0:r,i=e.horizontalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(p,c){var f=nt(nt({},e),{},{x1:n,y1:p,x2:n+t,y2:p,key:"line-".concat(c),index:c});return N_(a,f)});return E.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function gK(e){var n=e.y,t=e.height,r=e.vertical,a=r===void 0?!0:r,i=e.verticalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(p,c){var f=nt(nt({},e),{},{x1:p,y1:n,x2:p,y2:n+t,key:"line-".concat(c),index:c});return N_(a,f)});return E.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function yK(e){var n=e.horizontalFill,t=e.fillOpacity,r=e.x,a=e.y,i=e.width,s=e.height,p=e.horizontalPoints,c=e.horizontal,f=c===void 0?!0:c;if(!f||!n||!n.length)return null;var m=p.map(function(v){return Math.round(v+a-a)}).sort(function(v,y){return v-y});a!==m[0]&&m.unshift(0);var d=m.map(function(v,y){var B=!m[y+1],I=B?a+s-v:m[y+1]-v;if(I<=0)return null;var b=y%n.length;return E.createElement("rect",{key:"react-".concat(y),y:v,x:r,height:I,width:i,stroke:"none",fill:n[b],fillOpacity:t,className:"recharts-cartesian-grid-bg"})});return E.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function bK(e){var n=e.vertical,t=n===void 0?!0:n,r=e.verticalFill,a=e.fillOpacity,i=e.x,s=e.y,p=e.width,c=e.height,f=e.verticalPoints;if(!t||!r||!r.length)return null;var m=f.map(function(v){return Math.round(v+i-i)}).sort(function(v,y){return v-y});i!==m[0]&&m.unshift(0);var d=m.map(function(v,y){var B=!m[y+1],I=B?i+p-v:m[y+1]-v;if(I<=0)return null;var b=y%r.length;return E.createElement("rect",{key:"react-".concat(y),x:v,y:s,width:I,height:c,stroke:"none",fill:r[b],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return E.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var IK=function(n,t){var r=n.xAxis,a=n.width,i=n.height,s=n.offset;return HA(Ib(nt(nt(nt({},tu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.left,s.left+s.width,t)},BK=function(n,t){var r=n.yAxis,a=n.width,i=n.height,s=n.offset;return HA(Ib(nt(nt(nt({},tu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.top,s.top+s.height,t)},ti={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function Oc(e){var n,t,r,a,i,s,p=vb(),c=gb(),f=sG(),m=nt(nt({},e),{},{stroke:(n=e.stroke)!==null&&n!==void 0?n:ti.stroke,fill:(t=e.fill)!==null&&t!==void 0?t:ti.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:ti.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:ti.horizontalFill,vertical:(i=e.vertical)!==null&&i!==void 0?i:ti.vertical,verticalFill:(s=e.verticalFill)!==null&&s!==void 0?s:ti.verticalFill,x:pe(e.x)?e.x:f.left,y:pe(e.y)?e.y:f.top,width:pe(e.width)?e.width:f.width,height:pe(e.height)?e.height:f.height}),d=m.x,v=m.y,y=m.width,B=m.height,I=m.syncWithTicks,b=m.horizontalValues,S=m.verticalValues,W=oG(),M=iG();if(!pe(y)||y<=0||!pe(B)||B<=0||!pe(d)||d!==+d||!pe(v)||v!==+v)return null;var O=m.verticalCoordinatesGenerator||IK,w=m.horizontalCoordinatesGenerator||BK,A=m.horizontalPoints,N=m.verticalPoints;if((!A||!A.length)&&ke(w)){var P=b&&b.length,C=w({yAxis:M?nt(nt({},M),{},{ticks:P?b:M.ticks}):void 0,width:p,height:c,offset:f},P?!0:I);pr(Array.isArray(C),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Bo(C),"]")),Array.isArray(C)&&(A=C)}if((!N||!N.length)&&ke(O)){var T=S&&S.length,j=O({xAxis:W?nt(nt({},W),{},{ticks:T?S:W.ticks}):void 0,width:p,height:c,offset:f},T?!0:I);pr(Array.isArray(j),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Bo(j),"]")),Array.isArray(j)&&(N=j)}return E.createElement("g",{className:"recharts-cartesian-grid"},E.createElement(hK,{fill:m.fill,fillOpacity:m.fillOpacity,x:m.x,y:m.y,width:m.width,height:m.height,ry:m.ry}),E.createElement(vK,mo({},m,{offset:f,horizontalPoints:A,xAxis:W,yAxis:M})),E.createElement(gK,mo({},m,{offset:f,verticalPoints:N,xAxis:W,yAxis:M})),E.createElement(yK,mo({},m,{horizontalPoints:A})),E.createElement(bK,mo({},m,{verticalPoints:N})))}Oc.displayName="CartesianGrid";var xK=["type","layout","connectNulls","ref"],wK=["key"];function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ti(e)}function h3(e,n){if(e==null)return{};var t=PK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function PK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ps.apply(this,arguments)}function v3(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function wt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?v3(Object(t),!0).forEach(function(r){ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v3(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ri(e){return AK(e)||MK(e)||WK(e)||SK()}function SK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WK(e,n){if(e){if(typeof e=="string")return Qg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Qg(e,n)}}function MK(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function AK(e){if(Array.isArray(e))return Qg(e)}function Qg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _K(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function g3(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,H_(r.key),r)}}function OK(e,n,t){return n&&g3(e.prototype,n),t&&g3(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function CK(e,n,t){return n=Cc(n),kK(e,R_()?Reflect.construct(n,t||[],Cc(e).constructor):n.apply(e,t))}function kK(e,n){if(n&&(Ti(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return NK(e)}function NK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(R_=function(){return!!e})()}function Cc(e){return Cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Cc(e)}function RK(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Yg(e,n)}function Yg(e,n){return Yg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yg(e,n)}function ir(e,n,t){return n=H_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function H_(e){var n=HK(e,"string");return Ti(n)=="symbol"?n:n+""}function HK(e,n){if(Ti(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var qr=(function(e){function n(){var t;_K(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=CK(this,n,[].concat(a)),ir(t,"state",{isAnimationFinished:!0,totalLength:0}),ir(t,"generateSimpleStrokeDasharray",function(s,p){return"".concat(p,"px ").concat(s-p,"px")}),ir(t,"getStrokeDasharray",function(s,p,c){var f=c.reduce(function(S,W){return S+W});if(!f)return t.generateSimpleStrokeDasharray(p,s);for(var m=Math.floor(s/f),d=s%f,v=p-s,y=[],B=0,I=0;B<c.length;I+=c[B],++B)if(I+c[B]>d){y=[].concat(ri(c.slice(0,B)),[d-I]);break}var b=y.length%2===0?[0,v]:[v];return[].concat(ri(n.repeat(c,m)),ri(y),b).map(function(S){return"".concat(S,"px")}).join(", ")}),ir(t,"id",Da("recharts-line-")),ir(t,"pathRef",function(s){t.mainCurve=s}),ir(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0}),t.props.onAnimationEnd&&t.props.onAnimationEnd()}),ir(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1}),t.props.onAnimationStart&&t.props.onAnimationStart()}),t}return RK(n,e),OK(n,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.points,p=i.xAxis,c=i.yAxis,f=i.layout,m=i.children,d=st(m,nu);if(!d)return null;var v=function(I,b){return{x:I.x,y:I.y,value:I.value,errorVal:ln(I.payload,b)}},y={clipPath:r?"url(#clipPath-".concat(a,")"):null};return E.createElement(De,y,d.map(function(B){return E.cloneElement(B,{key:"bar-".concat(B.props.dataKey),data:s,xAxis:p,yAxis:c,layout:f,dataPointFormatter:v})}))}},{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var p=this.props,c=p.dot,f=p.points,m=p.dataKey,d=We(this.props,!1),v=We(c,!0),y=f.map(function(I,b){var S=wt(wt(wt({key:"dot-".concat(b),r:3},d),v),{},{index:b,cx:I.x,cy:I.y,value:I.value,dataKey:m,payload:I.payload,points:f});return n.renderDotItem(c,S)}),B={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return E.createElement(De,ps({className:"recharts-line-dots",key:"dots"},B),y)}},{key:"renderCurveStatically",value:function(r,a,i,s){var p=this.props,c=p.type,f=p.layout,m=p.connectNulls;p.ref;var d=h3(p,xK),v=wt(wt(wt({},We(d,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(i,")"):null,points:r},s),{},{type:c,layout:f,connectNulls:m});return E.createElement(ka,ps({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,a){var i=this,s=this.props,p=s.points,c=s.strokeDasharray,f=s.isAnimationActive,m=s.animationBegin,d=s.animationDuration,v=s.animationEasing,y=s.animationId,B=s.animateNewValues,I=s.width,b=s.height,S=this.state,W=S.prevPoints,M=S.totalLength;return E.createElement(Kt,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"line-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(O){var w=O.t;if(W){var A=W.length/p.length,N=p.map(function(H,q){var L=Math.floor(q*A);if(W[L]){var K=W[L],U=hn(K.x,H.x),V=hn(K.y,H.y);return wt(wt({},H),{},{x:U(w),y:V(w)})}if(B){var D=hn(I*2,H.x),Q=hn(b/2,H.y);return wt(wt({},H),{},{x:D(w),y:Q(w)})}return wt(wt({},H),{},{x:H.x,y:H.y})});return i.renderCurveStatically(N,r,a)}var P=hn(0,M),C=P(w),T;if(c){var j="".concat(c).split(/[,\s]+/gim).map(function(H){return parseFloat(H)});T=i.getStrokeDasharray(C,M,j)}else T=i.generateSimpleStrokeDasharray(M,C);return i.renderCurveStatically(p,r,a,{strokeDasharray:T})})}},{key:"renderCurve",value:function(r,a){var i=this.props,s=i.points,p=i.isAnimationActive,c=this.state,f=c.prevPoints,m=c.totalLength;return p&&s&&s.length&&(!f&&m>0||!Ha(f,s))?this.renderCurveWithAnimation(r,a):this.renderCurveStatically(s,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,p=a.points,c=a.className,f=a.xAxis,m=a.yAxis,d=a.top,v=a.left,y=a.width,B=a.height,I=a.isAnimationActive,b=a.id;if(i||!p||!p.length)return null;var S=this.state.isAnimationFinished,W=p.length===1,M=Ee("recharts-line",c),O=f&&f.allowDataOverflow,w=m&&m.allowDataOverflow,A=O||w,N=Ne(b)?this.id:b,P=(r=We(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},C=P.r,T=C===void 0?3:C,j=P.strokeWidth,H=j===void 0?2:j,q=jW(s)?s:{},L=q.clipDot,K=L===void 0?!0:L,U=T*2+H;return E.createElement(De,{className:M},O||w?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(N)},E.createElement("rect",{x:O?v:v-y/2,y:w?d:d-B/2,width:O?y:y*2,height:w?B:B*2})),!K&&E.createElement("clipPath",{id:"clipPath-dots-".concat(N)},E.createElement("rect",{x:v-U/2,y:d-U/2,width:y+U,height:B+U}))):null,!W&&this.renderCurve(A,N),this.renderErrorBar(A,N),(W||s)&&this.renderDots(A,K,N),(!I||S)&&lr.renderCallByParent(this.props,p))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,a){for(var i=r.length%2!==0?[].concat(ri(r),[0]):r,s=[],p=0;p<a;++p)s=[].concat(ri(s),ri(i));return s}},{key:"renderDotItem",value:function(r,a){var i;if(E.isValidElement(r))i=E.cloneElement(r,a);else if(ke(r))i=r(a);else{var s=a.key,p=h3(a,wK),c=Ee("recharts-line-dot",typeof r!="boolean"?r.className:"");i=E.createElement(tp,ps({key:s},p,{className:c}))}return i}}])})(Y.PureComponent);ir(qr,"displayName","Line");ir(qr,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});ir(qr,"getComposedData",function(e){var n=e.props,t=e.xAxis,r=e.yAxis,a=e.xAxisTicks,i=e.yAxisTicks,s=e.dataKey,p=e.bandSize,c=e.displayedData,f=e.offset,m=n.layout,d=c.map(function(v,y){var B=ln(v,s);return m==="horizontal"?{x:Pi({axis:t,ticks:a,bandSize:p,entry:v,index:y}),y:Ne(B)?null:r.scale(B),value:B,payload:v}:{x:Ne(B)?null:t.scale(B),y:Pi({axis:r,ticks:i,bandSize:p,entry:v,index:y}),value:B,payload:v}});return wt({points:d,layout:m},f)});var TK=["layout","type","stroke","connectNulls","isRange","ref"],EK=["key"],T_;function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ei(e)}function E_(e,n){if(e==null)return{};var t=jK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function jK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ho.apply(this,arguments)}function y3(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Pa(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?y3(Object(t),!0).forEach(function(r){Ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y3(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function DK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function b3(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,D_(r.key),r)}}function $K(e,n,t){return n&&b3(e.prototype,n),t&&b3(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function LK(e,n,t){return n=kc(n),FK(e,j_()?Reflect.construct(n,t||[],kc(e).constructor):n.apply(e,t))}function FK(e,n){if(n&&(Ei(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return qK(e)}function qK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(j_=function(){return!!e})()}function kc(e){return kc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},kc(e)}function zK(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Xg(e,n)}function Xg(e,n){return Xg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xg(e,n)}function Ir(e,n,t){return n=D_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function D_(e){var n=UK(e,"string");return Ei(n)=="symbol"?n:n+""}function UK(e,n){if(Ei(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Wo=(function(e){function n(){var t;DK(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=LK(this,n,[].concat(a)),Ir(t,"state",{isAnimationFinished:!0}),Ir(t,"id",Da("recharts-area-")),Ir(t,"handleAnimationEnd",function(){var s=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),ke(s)&&s()}),Ir(t,"handleAnimationStart",function(){var s=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),ke(s)&&s()}),t}return zK(n,e),$K(n,[{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive,p=this.state.isAnimationFinished;if(s&&!p)return null;var c=this.props,f=c.dot,m=c.points,d=c.dataKey,v=We(this.props,!1),y=We(f,!0),B=m.map(function(b,S){var W=Pa(Pa(Pa({key:"dot-".concat(S),r:3},v),y),{},{index:S,cx:b.x,cy:b.y,dataKey:d,value:b.value,payload:b.payload,points:m});return n.renderDotItem(f,W)}),I={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return E.createElement(De,ho({className:"recharts-area-dots"},I),B)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,p=a.strokeWidth,c=s[0].x,f=s[s.length-1].x,m=r*Math.abs(c-f),d=Ma(s.map(function(v){return v.y||0}));return pe(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Ma(i.map(function(v){return v.y||0})),d)),pe(d)?E.createElement("rect",{x:c<f?c:c-m,y:0,width:m,height:Math.floor(d+(p?parseInt("".concat(p),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,p=a.strokeWidth,c=s[0].y,f=s[s.length-1].y,m=r*Math.abs(c-f),d=Ma(s.map(function(v){return v.x||0}));return pe(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Ma(i.map(function(v){return v.x||0})),d)),pe(d)?E.createElement("rect",{x:0,y:c<f?c:c-m,width:d+(p?parseInt("".concat(p),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,i,s){var p=this.props,c=p.layout,f=p.type,m=p.stroke,d=p.connectNulls,v=p.isRange;p.ref;var y=E_(p,TK);return E.createElement(De,{clipPath:i?"url(#clipPath-".concat(s,")"):null},E.createElement(ka,ho({},We(y,!0),{points:r,connectNulls:d,type:f,baseLine:a,layout:c,stroke:"none",className:"recharts-area-area"})),m!=="none"&&E.createElement(ka,ho({},We(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:r})),m!=="none"&&v&&E.createElement(ka,ho({},We(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var i=this,s=this.props,p=s.points,c=s.baseLine,f=s.isAnimationActive,m=s.animationBegin,d=s.animationDuration,v=s.animationEasing,y=s.animationId,B=this.state,I=B.prevPoints,b=B.prevBaseLine;return E.createElement(Kt,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"area-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(S){var W=S.t;if(I){var M=I.length/p.length,O=p.map(function(P,C){var T=Math.floor(C*M);if(I[T]){var j=I[T],H=hn(j.x,P.x),q=hn(j.y,P.y);return Pa(Pa({},P),{},{x:H(W),y:q(W)})}return P}),w;if(pe(c)&&typeof c=="number"){var A=hn(b,c);w=A(W)}else if(Ne(c)||Yi(c)){var N=hn(b,0);w=N(W)}else w=c.map(function(P,C){var T=Math.floor(C*M);if(b[T]){var j=b[T],H=hn(j.x,P.x),q=hn(j.y,P.y);return Pa(Pa({},P),{},{x:H(W),y:q(W)})}return P});return i.renderAreaStatically(O,w,r,a)}return E.createElement(De,null,E.createElement("defs",null,E.createElement("clipPath",{id:"animationClipPath-".concat(a)},i.renderClipRect(W))),E.createElement(De,{clipPath:"url(#animationClipPath-".concat(a,")")},i.renderAreaStatically(p,c,r,a)))})}},{key:"renderArea",value:function(r,a){var i=this.props,s=i.points,p=i.baseLine,c=i.isAnimationActive,f=this.state,m=f.prevPoints,d=f.prevBaseLine,v=f.totalLength;return c&&s&&s.length&&(!m&&v>0||!Ha(m,s)||!Ha(d,p))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(s,p,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,p=a.points,c=a.className,f=a.top,m=a.left,d=a.xAxis,v=a.yAxis,y=a.width,B=a.height,I=a.isAnimationActive,b=a.id;if(i||!p||!p.length)return null;var S=this.state.isAnimationFinished,W=p.length===1,M=Ee("recharts-area",c),O=d&&d.allowDataOverflow,w=v&&v.allowDataOverflow,A=O||w,N=Ne(b)?this.id:b,P=(r=We(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},C=P.r,T=C===void 0?3:C,j=P.strokeWidth,H=j===void 0?2:j,q=jW(s)?s:{},L=q.clipDot,K=L===void 0?!0:L,U=T*2+H;return E.createElement(De,{className:M},O||w?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(N)},E.createElement("rect",{x:O?m:m-y/2,y:w?f:f-B/2,width:O?y:y*2,height:w?B:B*2})),!K&&E.createElement("clipPath",{id:"clipPath-dots-".concat(N)},E.createElement("rect",{x:m-U/2,y:f-U/2,width:y+U,height:B+U}))):null,W?null:this.renderArea(A,N),(s||W)&&this.renderDots(A,K,N),(!I||S)&&lr.renderCallByParent(this.props,p))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(Y.PureComponent);T_=Wo;Ir(Wo,"displayName","Area");Ir(Wo,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});Ir(Wo,"getBaseValue",function(e,n,t,r){var a=e.layout,i=e.baseValue,s=n.props.baseValue,p=s??i;if(pe(p)&&typeof p=="number")return p;var c=a==="horizontal"?r:t,f=c.scale.domain();if(c.type==="number"){var m=Math.max(f[0],f[1]),d=Math.min(f[0],f[1]);return p==="dataMin"?d:p==="dataMax"||m<0?m:Math.max(Math.min(f[0],f[1]),0)}return p==="dataMin"?f[0]:p==="dataMax"?f[1]:f[0]});Ir(Wo,"getComposedData",function(e){var n=e.props,t=e.item,r=e.xAxis,a=e.yAxis,i=e.xAxisTicks,s=e.yAxisTicks,p=e.bandSize,c=e.dataKey,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,y=n.layout,B=f&&f.length,I=T_.getBaseValue(n,t,r,a),b=y==="horizontal",S=!1,W=d.map(function(O,w){var A;B?A=f[m+w]:(A=ln(O,c),Array.isArray(A)?S=!0:A=[I,A]);var N=A[1]==null||B&&ln(O,c)==null;return b?{x:Pi({axis:r,ticks:i,bandSize:p,entry:O,index:w}),y:N?null:a.scale(A[1]),value:A,payload:O}:{x:N?null:r.scale(A[1]),y:Pi({axis:a,ticks:s,bandSize:p,entry:O,index:w}),value:A,payload:O}}),M;return B||S?M=W.map(function(O){var w=Array.isArray(O.value)?O.value[0]:null;return b?{x:O.x,y:w!=null&&O.y!=null?a.scale(w):null}:{x:w!=null?r.scale(w):null,y:O.y}}):M=b?a.scale(I):r.scale(I),Pa({points:W,baseLine:M,layout:y,isRange:S},v)});Ir(Wo,"renderDotItem",function(e,n){var t;if(E.isValidElement(e))t=E.cloneElement(e,n);else if(ke(e))t=e(n);else{var r=Ee("recharts-area-dot",typeof e!="boolean"?e.className:""),a=n.key,i=E_(n,EK);t=E.createElement(tp,ho({},i,{key:a,className:r}))}return t});function ji(e){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ji(e)}function VK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function GK(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,F_(r.key),r)}}function KK(e,n,t){return n&&GK(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function QK(e,n,t){return n=Nc(n),YK(e,$_()?Reflect.construct(n,t||[],Nc(e).constructor):n.apply(e,t))}function YK(e,n){if(n&&(ji(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return XK(e)}function XK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($_=function(){return!!e})()}function Nc(e){return Nc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Nc(e)}function ZK(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Zg(e,n)}function Zg(e,n){return Zg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zg(e,n)}function L_(e,n,t){return n=F_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function F_(e){var n=JK(e,"string");return ji(n)=="symbol"?n:n+""}function JK(e,n){if(ji(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var B0=(function(e){function n(){return VK(this,n),QK(this,n,arguments)}return ZK(n,e),KK(n,[{key:"render",value:function(){return null}}])})(E.Component);L_(B0,"displayName","ZAxis");L_(B0,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var eQ=["option","isActive"];function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ls.apply(this,arguments)}function nQ(e,n){if(e==null)return{};var t=tQ(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function tQ(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function rQ(e){var n=e.option,t=e.isActive,r=nQ(e,eQ);return typeof n=="string"?E.createElement(yc,ls({option:E.createElement(Yc,ls({type:n},r)),isActive:t,shapeType:"symbols"},r)):E.createElement(yc,ls({option:n,isActive:t,shapeType:"symbols"},r))}function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Di(e)}function cs(){return cs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},cs.apply(this,arguments)}function I3(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Ft(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?I3(Object(t),!0).forEach(function(r){_a(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I3(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function aQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function B3(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,z_(r.key),r)}}function oQ(e,n,t){return n&&B3(e.prototype,n),t&&B3(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function iQ(e,n,t){return n=Rc(n),uQ(e,q_()?Reflect.construct(n,t||[],Rc(e).constructor):n.apply(e,t))}function uQ(e,n){if(n&&(Di(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sQ(e)}function sQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(q_=function(){return!!e})()}function Rc(e){return Rc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Rc(e)}function pQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Jg(e,n)}function Jg(e,n){return Jg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Jg(e,n)}function _a(e,n,t){return n=z_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function z_(e){var n=lQ(e,"string");return Di(n)=="symbol"?n:n+""}function lQ(e,n){if(Di(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var x0=(function(e){function n(){var t;aQ(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=iQ(this,n,[].concat(a)),_a(t,"state",{isAnimationFinished:!1}),_a(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0})}),_a(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1})}),_a(t,"id",Da("recharts-scatter-")),t}return pQ(n,e),oQ(n,[{key:"renderSymbolsStatically",value:function(r){var a=this,i=this.props,s=i.shape,p=i.activeShape,c=i.activeIndex,f=We(this.props,!1);return r.map(function(m,d){var v=c===d,y=v?p:s,B=Ft(Ft({},f),m);return E.createElement(De,cs({className:"recharts-scatter-symbol",key:"symbol-".concat(m==null?void 0:m.cx,"-").concat(m==null?void 0:m.cy,"-").concat(m==null?void 0:m.size,"-").concat(d)},Ra(a.props,m,d),{role:"img"}),E.createElement(rQ,cs({option:y,isActive:v,key:"symbol-".concat(d)},B)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,i=a.points,s=a.isAnimationActive,p=a.animationBegin,c=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state.prevPoints;return E.createElement(Kt,{begin:p,duration:c,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var y=v.t,B=i.map(function(I,b){var S=d&&d[b];if(S){var W=hn(S.cx,I.cx),M=hn(S.cy,I.cy),O=hn(S.size,I.size);return Ft(Ft({},I),{},{cx:W(y),cy:M(y),size:O(y)})}var w=hn(0,I.size);return Ft(Ft({},I),{},{size:w(y)})});return E.createElement(De,null,r.renderSymbolsStatically(B))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,i=r.isAnimationActive,s=this.state.prevPoints;return i&&a&&a.length&&(!s||!Ha(s,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,i=a.points,s=a.xAxis,p=a.yAxis,c=a.children,f=st(c,nu);return f?f.map(function(m,d){var v=m.props,y=v.direction,B=v.dataKey;return E.cloneElement(m,{key:"".concat(y,"-").concat(B,"-").concat(i[d]),data:i,xAxis:s,yAxis:p,layout:y==="x"?"vertical":"horizontal",dataPointFormatter:function(b,S){return{x:b.cx,y:b.cy,value:y==="x"?+b.node.x:+b.node.y,errorVal:ln(b,S)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,i=r.line,s=r.lineType,p=r.lineJointType,c=We(this.props,!1),f=We(i,!1),m,d;if(s==="joint")m=a.map(function(M){return{x:M.cx,y:M.cy}});else if(s==="fitting"){var v=tT(a),y=v.xmin,B=v.xmax,I=v.a,b=v.b,S=function(O){return I*O+b};m=[{x:y,y:S(y)},{x:B,y:S(B)}]}var W=Ft(Ft(Ft({},c),{},{fill:"none",stroke:c&&c.fill},f),{},{points:m});return E.isValidElement(i)?d=E.cloneElement(i,W):ke(i)?d=i(W):d=E.createElement(ka,cs({},W,{type:p})),E.createElement(De,{className:"recharts-scatter-line",key:"recharts-scatter-line"},d)}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.points,s=r.line,p=r.className,c=r.xAxis,f=r.yAxis,m=r.left,d=r.top,v=r.width,y=r.height,B=r.id,I=r.isAnimationActive;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,S=Ee("recharts-scatter",p),W=c&&c.allowDataOverflow,M=f&&f.allowDataOverflow,O=W||M,w=Ne(B)?this.id:B;return E.createElement(De,{className:S,clipPath:O?"url(#clipPath-".concat(w,")"):null},W||M?E.createElement("defs",null,E.createElement("clipPath",{id:"clipPath-".concat(w)},E.createElement("rect",{x:W?m:m-v/2,y:M?d:d-y/2,width:W?v:v*2,height:M?y:y*2}))):null,s&&this.renderLine(),this.renderErrorBar(),E.createElement(De,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!I||b)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}])})(Y.PureComponent);_a(x0,"displayName","Scatter");_a(x0,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});_a(x0,"getComposedData",function(e){var n=e.xAxis,t=e.yAxis,r=e.zAxis,a=e.item,i=e.displayedData,s=e.xAxisTicks,p=e.yAxisTicks,c=e.offset,f=a.props.tooltipType,m=st(a.props.children,Xs),d=Ne(n.dataKey)?a.props.dataKey:n.dataKey,v=Ne(t.dataKey)?a.props.dataKey:t.dataKey,y=r&&r.dataKey,B=r?r.range:B0.defaultProps.range,I=B&&B[0],b=n.scale.bandwidth?n.scale.bandwidth():0,S=t.scale.bandwidth?t.scale.bandwidth():0,W=i.map(function(M,O){var w=ln(M,d),A=ln(M,v),N=!Ne(y)&&ln(M,y)||"-",P=[{name:Ne(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:w,payload:M,dataKey:d,type:f},{name:Ne(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:A,payload:M,dataKey:v,type:f}];N!=="-"&&P.push({name:r.name||r.dataKey,unit:r.unit||"",value:N,payload:M,dataKey:y,type:f});var C=Pi({axis:n,ticks:s,bandSize:b,entry:M,index:O,dataKey:d}),T=Pi({axis:t,ticks:p,bandSize:S,entry:M,index:O,dataKey:v}),j=N!=="-"?r.scale(N):I,H=Math.sqrt(Math.max(j,0)/Math.PI);return Ft(Ft({},M),{},{cx:C,cy:T,x:C-H,y:T-H,xAxis:n,yAxis:t,zAxis:r,width:2*H,height:2*H,size:j,node:{x:w,y:A,z:N},tooltipPayload:P,tooltipPosition:{x:C,y:T},payload:M},m&&m[O]&&m[O].props)});return Ft({points:W},c)});function $i(e){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$i(e)}function cQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function fQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,G_(r.key),r)}}function dQ(e,n,t){return n&&fQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function mQ(e,n,t){return n=Hc(n),hQ(e,U_()?Reflect.construct(n,t||[],Hc(e).constructor):n.apply(e,t))}function hQ(e,n){if(n&&($i(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vQ(e)}function vQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(U_=function(){return!!e})()}function Hc(e){return Hc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Hc(e)}function gQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&ey(e,n)}function ey(e,n){return ey=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ey(e,n)}function V_(e,n,t){return n=G_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function G_(e){var n=yQ(e,"string");return $i(n)=="symbol"?n:n+""}function yQ(e,n){if($i(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if($i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ny(){return ny=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ny.apply(this,arguments)}function bQ(e){var n=e.xAxisId,t=vb(),r=gb(),a=x_(n);return a==null?null:E.createElement(tu,ny({},a,{className:Ee("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:t,height:r},ticksGenerator:function(s){return Fr(s,!0)}}))}var Ta=(function(e){function n(){return cQ(this,n),mQ(this,n,arguments)}return gQ(n,e),dQ(n,[{key:"render",value:function(){return E.createElement(bQ,this.props)}}])})(E.Component);V_(Ta,"displayName","XAxis");V_(Ta,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function Li(e){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Li(e)}function IQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function BQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Y_(r.key),r)}}function xQ(e,n,t){return n&&BQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function wQ(e,n,t){return n=Tc(n),PQ(e,K_()?Reflect.construct(n,t||[],Tc(e).constructor):n.apply(e,t))}function PQ(e,n){if(n&&(Li(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return SQ(e)}function SQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(K_=function(){return!!e})()}function Tc(e){return Tc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Tc(e)}function WQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&ty(e,n)}function ty(e,n){return ty=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ty(e,n)}function Q_(e,n,t){return n=Y_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Y_(e){var n=MQ(e,"string");return Li(n)=="symbol"?n:n+""}function MQ(e,n){if(Li(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Li(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ry(){return ry=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ry.apply(this,arguments)}var AQ=function(n){var t=n.yAxisId,r=vb(),a=gb(),i=w_(t);return i==null?null:E.createElement(tu,ry({},i,{className:Ee("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:a},ticksGenerator:function(p){return Fr(p,!0)}}))},Br=(function(e){function n(){return IQ(this,n),wQ(this,n,arguments)}return WQ(n,e),xQ(n,[{key:"render",value:function(){return E.createElement(AQ,this.props)}}])})(E.Component);Q_(Br,"displayName","YAxis");Q_(Br,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function x3(e){return kQ(e)||CQ(e)||OQ(e)||_Q()}function _Q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OQ(e,n){if(e){if(typeof e=="string")return ay(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ay(e,n)}}function CQ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kQ(e){if(Array.isArray(e))return ay(e)}function ay(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var oy=function(n,t,r,a,i){var s=st(n,bb),p=st(n,y0),c=[].concat(x3(s),x3(p)),f=st(n,I0),m="".concat(a,"Id"),d=a[0],v=t;if(c.length&&(v=c.reduce(function(I,b){if(b.props[m]===r&&wr(b.props,"extendDomain")&&pe(b.props[d])){var S=b.props[d];return[Math.min(I[0],S),Math.max(I[1],S)]}return I},v)),f.length){var y="".concat(d,"1"),B="".concat(d,"2");v=f.reduce(function(I,b){if(b.props[m]===r&&wr(b.props,"extendDomain")&&pe(b.props[y])&&pe(b.props[B])){var S=b.props[y],W=b.props[B];return[Math.min(I[0],S,W),Math.max(I[1],S,W)]}return I},v)}return i&&i.length&&(v=i.reduce(function(I,b){return pe(b)?[Math.min(I[0],b),Math.max(I[1],b)]:I},v)),v},xv={exports:{}},w3;function NQ(){return w3||(w3=1,(function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function a(c,f,m){this.fn=c,this.context=f,this.once=m||!1}function i(c,f,m,d,v){if(typeof m!="function")throw new TypeError("The listener must be a function");var y=new a(m,d||c,v),B=t?t+f:f;return c._events[B]?c._events[B].fn?c._events[B]=[c._events[B],y]:c._events[B].push(y):(c._events[B]=y,c._eventsCount++),c}function s(c,f){--c._eventsCount===0?c._events=new r:delete c._events[f]}function p(){this._events=new r,this._eventsCount=0}p.prototype.eventNames=function(){var f=[],m,d;if(this._eventsCount===0)return f;for(d in m=this._events)n.call(m,d)&&f.push(t?d.slice(1):d);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(m)):f},p.prototype.listeners=function(f){var m=t?t+f:f,d=this._events[m];if(!d)return[];if(d.fn)return[d.fn];for(var v=0,y=d.length,B=new Array(y);v<y;v++)B[v]=d[v].fn;return B},p.prototype.listenerCount=function(f){var m=t?t+f:f,d=this._events[m];return d?d.fn?1:d.length:0},p.prototype.emit=function(f,m,d,v,y,B){var I=t?t+f:f;if(!this._events[I])return!1;var b=this._events[I],S=arguments.length,W,M;if(b.fn){switch(b.once&&this.removeListener(f,b.fn,void 0,!0),S){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,m),!0;case 3:return b.fn.call(b.context,m,d),!0;case 4:return b.fn.call(b.context,m,d,v),!0;case 5:return b.fn.call(b.context,m,d,v,y),!0;case 6:return b.fn.call(b.context,m,d,v,y,B),!0}for(M=1,W=new Array(S-1);M<S;M++)W[M-1]=arguments[M];b.fn.apply(b.context,W)}else{var O=b.length,w;for(M=0;M<O;M++)switch(b[M].once&&this.removeListener(f,b[M].fn,void 0,!0),S){case 1:b[M].fn.call(b[M].context);break;case 2:b[M].fn.call(b[M].context,m);break;case 3:b[M].fn.call(b[M].context,m,d);break;case 4:b[M].fn.call(b[M].context,m,d,v);break;default:if(!W)for(w=1,W=new Array(S-1);w<S;w++)W[w-1]=arguments[w];b[M].fn.apply(b[M].context,W)}}return!0},p.prototype.on=function(f,m,d){return i(this,f,m,d,!1)},p.prototype.once=function(f,m,d){return i(this,f,m,d,!0)},p.prototype.removeListener=function(f,m,d,v){var y=t?t+f:f;if(!this._events[y])return this;if(!m)return s(this,y),this;var B=this._events[y];if(B.fn)B.fn===m&&(!v||B.once)&&(!d||B.context===d)&&s(this,y);else{for(var I=0,b=[],S=B.length;I<S;I++)(B[I].fn!==m||v&&!B[I].once||d&&B[I].context!==d)&&b.push(B[I]);b.length?this._events[y]=b.length===1?b[0]:b:s(this,y)}return this},p.prototype.removeAllListeners=function(f){var m;return f?(m=t?t+f:f,this._events[m]&&s(this,m)):(this._events=new r,this._eventsCount=0),this},p.prototype.off=p.prototype.removeListener,p.prototype.addListener=p.prototype.on,p.prefixed=t,p.EventEmitter=p,e.exports=p})(xv)),xv.exports}var RQ=NQ();const HQ=Xe(RQ);var wv=new HQ,Pv="recharts.syncMouseEvents";function Vs(e){"@babel/helpers - typeof";return Vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Vs(e)}function TQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function EQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,X_(r.key),r)}}function jQ(e,n,t){return n&&EQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Sv(e,n,t){return n=X_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function X_(e){var n=DQ(e,"string");return Vs(n)=="symbol"?n:n+""}function DQ(e,n){if(Vs(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var $Q=(function(){function e(){TQ(this,e),Sv(this,"activeIndex",0),Sv(this,"coordinateList",[]),Sv(this,"layout","horizontal")}return jQ(e,[{key:"setDetails",value:function(t){var r,a=t.coordinateList,i=a===void 0?null:a,s=t.container,p=s===void 0?null:s,c=t.layout,f=c===void 0?null:c,m=t.offset,d=m===void 0?null:m,v=t.mouseHandlerCallback,y=v===void 0?null:v;this.coordinateList=(r=i??this.coordinateList)!==null&&r!==void 0?r:[],this.container=p??this.container,this.layout=f??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=y??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(t){if(this.coordinateList.length!==0)switch(t.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(t){this.activeIndex=t}},{key:"spoofMouse",value:function(){var t,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),i=a.x,s=a.y,p=a.height,c=this.coordinateList[this.activeIndex].coordinate,f=((t=window)===null||t===void 0?void 0:t.scrollX)||0,m=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=i+c+f,v=s+this.offset.top+p/2+m;this.mouseHandlerCallback({pageX:d,pageY:v})}}}])})();function LQ(e,n,t){if(t==="number"&&n===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],a=e==null?void 0:e[1];if(r&&a&&pe(r)&&pe(a))return!0}return!1}function FQ(e,n,t,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?n.x-a:t.left+.5,y:e==="horizontal"?t.top+.5:n.y-a,width:e==="horizontal"?r:t.width-1,height:e==="horizontal"?t.height-1:r}}function Z_(e){var n=e.cx,t=e.cy,r=e.radius,a=e.startAngle,i=e.endAngle,s=on(n,t,r,a),p=on(n,t,r,i);return{points:[s,p],cx:n,cy:t,radius:r,startAngle:a,endAngle:i}}function qQ(e,n,t){var r,a,i,s;if(e==="horizontal")r=n.x,i=r,a=t.top,s=t.top+t.height;else if(e==="vertical")a=n.y,s=a,r=t.left,i=t.left+t.width;else if(n.cx!=null&&n.cy!=null)if(e==="centric"){var p=n.cx,c=n.cy,f=n.innerRadius,m=n.outerRadius,d=n.angle,v=on(p,c,f,d),y=on(p,c,m,d);r=v.x,a=v.y,i=y.x,s=y.y}else return Z_(n);return[{x:r,y:a},{x:i,y:s}]}function Gs(e){"@babel/helpers - typeof";return Gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Gs(e)}function P3(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Wl(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?P3(Object(t),!0).forEach(function(r){zQ(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P3(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function zQ(e,n,t){return n=UQ(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function UQ(e){var n=VQ(e,"string");return Gs(n)=="symbol"?n:n+""}function VQ(e,n){if(Gs(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Gs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function GQ(e){var n,t,r=e.element,a=e.tooltipEventType,i=e.isActive,s=e.activeCoordinate,p=e.activePayload,c=e.offset,f=e.activeTooltipIndex,m=e.tooltipAxisBandSize,d=e.layout,v=e.chartName,y=(n=r.props.cursor)!==null&&n!==void 0?n:(t=r.type.defaultProps)===null||t===void 0?void 0:t.cursor;if(!r||!y||!i||!s||v!=="ScatterChart"&&a!=="axis")return null;var B,I=ka;if(v==="ScatterChart")B=s,I=$z;else if(v==="BarChart")B=FQ(d,s,c,m),I=cb;else if(d==="radial"){var b=Z_(s),S=b.cx,W=b.cy,M=b.radius,O=b.startAngle,w=b.endAngle;B={cx:S,cy:W,startAngle:O,endAngle:w,innerRadius:M,outerRadius:M},I=VA}else B={points:qQ(d,s,c)},I=ka;var A=Wl(Wl(Wl(Wl({stroke:"#ccc",pointerEvents:"none"},c),B),We(y,!1)),{},{payload:p,payloadIndex:f,className:Ee("recharts-tooltip-cursor",y.className)});return Y.isValidElement(y)?Y.cloneElement(y,A):Y.createElement(I,A)}var KQ=["item"],QQ=["children","className","width","height","style","compact","title","desc"];function Fi(e){"@babel/helpers - typeof";return Fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Fi(e)}function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pi.apply(this,arguments)}function S3(e,n){return ZQ(e)||XQ(e,n)||eO(e,n)||YQ()}function YQ(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XQ(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,s,p=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw a}}return p}}function ZQ(e){if(Array.isArray(e))return e}function W3(e,n){if(e==null)return{};var t=JQ(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function JQ(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function eY(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function nY(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,nO(r.key),r)}}function tY(e,n,t){return n&&nY(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rY(e,n,t){return n=Ec(n),aY(e,J_()?Reflect.construct(n,t||[],Ec(e).constructor):n.apply(e,t))}function aY(e,n){if(n&&(Fi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oY(e)}function oY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(J_=function(){return!!e})()}function Ec(e){return Ec=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ec(e)}function iY(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&iy(e,n)}function iy(e,n){return iy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},iy(e,n)}function qi(e){return pY(e)||sY(e)||eO(e)||uY()}function uY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eO(e,n){if(e){if(typeof e=="string")return uy(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return uy(e,n)}}function sY(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pY(e){if(Array.isArray(e))return uy(e)}function uy(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function M3(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ae(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?M3(Object(t),!0).forEach(function(r){Re(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M3(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Re(e,n,t){return n=nO(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function nO(e){var n=lY(e,"string");return Fi(n)=="symbol"?n:n+""}function lY(e,n){if(Fi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Fi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var cY={xAxis:["bottom","top"],yAxis:["left","right"]},fY={width:"100%",height:"100%"},tO={x:0,y:0};function Ml(e){return e}var dY=function(n,t){return t==="horizontal"?n.x:t==="vertical"?n.y:t==="centric"?n.angle:n.radius},mY=function(n,t,r,a){var i=t.find(function(m){return m&&m.index===r});if(i){if(n==="horizontal")return{x:i.coordinate,y:a.y};if(n==="vertical")return{x:a.x,y:i.coordinate};if(n==="centric"){var s=i.coordinate,p=a.radius;return ae(ae(ae({},a),on(a.cx,a.cy,p,s)),{},{angle:s,radius:p})}var c=i.coordinate,f=a.angle;return ae(ae(ae({},a),on(a.cx,a.cy,c,f)),{},{angle:f,radius:c})}return tO},w0=function(n,t){var r=t.graphicalItems,a=t.dataStartIndex,i=t.dataEndIndex,s=(r??[]).reduce(function(p,c){var f=c.props.data;return f&&f.length?[].concat(qi(p),qi(f)):p},[]);return s.length>0?s:n&&n.length&&pe(a)&&pe(i)?n.slice(a,i+1):[]};function rO(e){return e==="number"?[0,"auto"]:void 0}var sy=function(n,t,r,a){var i=n.graphicalItems,s=n.tooltipAxis,p=w0(t,n);return r<0||!i||!i.length||r>=p.length?null:i.reduce(function(c,f){var m,d=(m=f.props.data)!==null&&m!==void 0?m:t;d&&n.dataStartIndex+n.dataEndIndex!==0&&n.dataEndIndex-n.dataStartIndex>=r&&(d=d.slice(n.dataStartIndex,n.dataEndIndex+1));var v;if(s.dataKey&&!s.allowDuplicatedCategory){var y=d===void 0?p:d;v=Rl(y,s.dataKey,a)}else v=d&&d[r]||p[r];return v?[].concat(qi(c),[$A(f,v)]):c},[])},A3=function(n,t,r,a){var i=a||{x:n.chartX,y:n.chartY},s=dY(i,r),p=n.orderedTooltipTicks,c=n.tooltipAxis,f=n.tooltipTicks,m=u9(s,p,f,c);if(m>=0&&f){var d=f[m]&&f[m].value,v=sy(n,t,m,d),y=mY(r,p,m,i);return{activeTooltipIndex:m,activeLabel:d,activePayload:v,activeCoordinate:y}}return null},hY=function(n,t){var r=t.axes,a=t.graphicalItems,i=t.axisType,s=t.axisIdKey,p=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=n.layout,d=n.children,v=n.stackOffset,y=RA(m,i);return r.reduce(function(B,I){var b,S=I.type.defaultProps!==void 0?ae(ae({},I.type.defaultProps),I.props):I.props,W=S.type,M=S.dataKey,O=S.allowDataOverflow,w=S.allowDuplicatedCategory,A=S.scale,N=S.ticks,P=S.includeHidden,C=S[s];if(B[C])return B;var T=w0(n.data,{graphicalItems:a.filter(function(F){var J,ue=s in F.props?F.props[s]:(J=F.type.defaultProps)===null||J===void 0?void 0:J[s];return ue===C}),dataStartIndex:c,dataEndIndex:f}),j=T.length,H,q,L;LQ(S.domain,O,W)&&(H=bg(S.domain,null,O),y&&(W==="number"||A!=="auto")&&(L=os(T,M,"category")));var K=rO(W);if(!H||H.length===0){var U,V=(U=S.domain)!==null&&U!==void 0?U:K;if(M){if(H=os(T,M,W),W==="category"&&y){var D=nT(H);w&&D?(q=H,H=Ic(0,j)):w||(H=W4(V,H,I).reduce(function(F,J){return F.indexOf(J)>=0?F:[].concat(qi(F),[J])},[]))}else if(W==="category")w?H=H.filter(function(F){return F!==""&&!Ne(F)}):H=W4(V,H,I).reduce(function(F,J){return F.indexOf(J)>=0||J===""||Ne(J)?F:[].concat(qi(F),[J])},[]);else if(W==="number"){var Q=f9(T,a.filter(function(F){var J,ue,me=s in F.props?F.props[s]:(J=F.type.defaultProps)===null||J===void 0?void 0:J[s],ge="hide"in F.props?F.props.hide:(ue=F.type.defaultProps)===null||ue===void 0?void 0:ue.hide;return me===C&&(P||!ge)}),M,i,m);Q&&(H=Q)}y&&(W==="number"||A!=="auto")&&(L=os(T,M,"category"))}else y?H=Ic(0,j):p&&p[C]&&p[C].hasStack&&W==="number"?H=v==="expand"?[0,1]:DA(p[C].stackGroups,c,f):H=NA(T,a.filter(function(F){var J=s in F.props?F.props[s]:F.type.defaultProps[s],ue="hide"in F.props?F.props.hide:F.type.defaultProps.hide;return J===C&&(P||!ue)}),W,m,!0);if(W==="number")H=oy(d,H,C,i,N),V&&(H=bg(V,H,O));else if(W==="category"&&V){var X=V,R=H.every(function(F){return X.indexOf(F)>=0});R&&(H=X)}}return ae(ae({},B),{},Re({},C,ae(ae({},S),{},{axisType:i,domain:H,categoricalDomain:L,duplicateDomain:q,originalDomain:(b=S.domain)!==null&&b!==void 0?b:K,isCategorical:y,layout:m})))},{})},vY=function(n,t){var r=t.graphicalItems,a=t.Axis,i=t.axisType,s=t.axisIdKey,p=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=n.layout,d=n.children,v=w0(n.data,{graphicalItems:r,dataStartIndex:c,dataEndIndex:f}),y=v.length,B=RA(m,i),I=-1;return r.reduce(function(b,S){var W=S.type.defaultProps!==void 0?ae(ae({},S.type.defaultProps),S.props):S.props,M=W[s],O=rO("number");if(!b[M]){I++;var w;return B?w=Ic(0,y):p&&p[M]&&p[M].hasStack?(w=DA(p[M].stackGroups,c,f),w=oy(d,w,M,i)):(w=bg(O,NA(v,r.filter(function(A){var N,P,C=s in A.props?A.props[s]:(N=A.type.defaultProps)===null||N===void 0?void 0:N[s],T="hide"in A.props?A.props.hide:(P=A.type.defaultProps)===null||P===void 0?void 0:P.hide;return C===M&&!T}),"number",m),a.defaultProps.allowDataOverflow),w=oy(d,w,M,i)),ae(ae({},b),{},Re({},M,ae(ae({axisType:i},a.defaultProps),{},{hide:!0,orientation:_t(cY,"".concat(i,".").concat(I%2),null),domain:w,originalDomain:O,isCategorical:B,layout:m})))}return b},{})},gY=function(n,t){var r=t.axisType,a=r===void 0?"xAxis":r,i=t.AxisComp,s=t.graphicalItems,p=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=n.children,d="".concat(a,"Id"),v=st(m,i),y={};return v&&v.length?y=hY(n,{axes:v,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:p,dataStartIndex:c,dataEndIndex:f}):s&&s.length&&(y=vY(n,{Axis:i,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:p,dataStartIndex:c,dataEndIndex:f})),y},yY=function(n){var t=Wa(n),r=Fr(t,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:Ey(r,function(a){return a.coordinate}),tooltipAxis:t,tooltipAxisBandSize:ic(t,r)}},_3=function(n){var t=n.children,r=n.defaultShowTooltip,a=St(t,Oi),i=0,s=0;return n.data&&n.data.length!==0&&(s=n.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(i=a.props.startIndex),a.props.endIndex>=0&&(s=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:i,dataEndIndex:s,activeTooltipIndex:-1,isTooltipActive:!!r}},bY=function(n){return!n||!n.length?!1:n.some(function(t){var r=Ur(t&&t.type);return r&&r.indexOf("Bar")>=0})},O3=function(n){return n==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:n==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:n==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},IY=function(n,t){var r=n.props,a=n.graphicalItems,i=n.xAxisMap,s=i===void 0?{}:i,p=n.yAxisMap,c=p===void 0?{}:p,f=r.width,m=r.height,d=r.children,v=r.margin||{},y=St(d,Oi),B=St(d,Oa),I=Object.keys(c).reduce(function(w,A){var N=c[A],P=N.orientation;return!N.mirror&&!N.hide?ae(ae({},w),{},Re({},P,w[P]+N.width)):w},{left:v.left||0,right:v.right||0}),b=Object.keys(s).reduce(function(w,A){var N=s[A],P=N.orientation;return!N.mirror&&!N.hide?ae(ae({},w),{},Re({},P,_t(w,"".concat(P))+N.height)):w},{top:v.top||0,bottom:v.bottom||0}),S=ae(ae({},b),I),W=S.bottom;y&&(S.bottom+=y.props.height||Oi.defaultProps.height),B&&t&&(S=l9(S,a,r,t));var M=f-S.left-S.right,O=m-S.top-S.bottom;return ae(ae({brushBottom:W},S),{},{width:Math.max(M,0),height:Math.max(O,0)})},BY=function(n,t){if(t==="xAxis")return n[t].width;if(t==="yAxis")return n[t].height},P0=function(n){var t=n.chartName,r=n.GraphicalChild,a=n.defaultTooltipEventType,i=a===void 0?"axis":a,s=n.validateTooltipEventTypes,p=s===void 0?["axis"]:s,c=n.axisComponents,f=n.legendContent,m=n.formatAxisMap,d=n.defaultProps,v=function(S,W){var M=W.graphicalItems,O=W.stackGroups,w=W.offset,A=W.updateId,N=W.dataStartIndex,P=W.dataEndIndex,C=S.barSize,T=S.layout,j=S.barGap,H=S.barCategoryGap,q=S.maxBarSize,L=O3(T),K=L.numericAxisName,U=L.cateAxisName,V=bY(M),D=[];return M.forEach(function(Q,X){var R=w0(S.data,{graphicalItems:[Q],dataStartIndex:N,dataEndIndex:P}),F=Q.type.defaultProps!==void 0?ae(ae({},Q.type.defaultProps),Q.props):Q.props,J=F.dataKey,ue=F.maxBarSize,me=F["".concat(K,"Id")],ge=F["".concat(U,"Id")],ye={},fe=c.reduce(function(xn,gn){var Ot=W["".concat(gn.axisType,"Map")],yn=F["".concat(gn.axisType,"Id")];Ot&&Ot[yn]||gn.axisType==="zAxis"||Io();var Qn=Ot[yn];return ae(ae({},xn),{},Re(Re({},gn.axisType,Qn),"".concat(gn.axisType,"Ticks"),Fr(Qn)))},ye),te=fe[U],de=fe["".concat(U,"Ticks")],ce=O&&O[me]&&O[me].hasStack&&B9(Q,O[me].stackGroups),re=Ur(Q.type).indexOf("Bar")>=0,Te=ic(te,de),Pe=[],Ce=V&&s9({barSize:C,stackGroups:O,totalSize:BY(fe,U)});if(re){var Me,Fe,je=Ne(ue)?q:ue,qe=(Me=(Fe=ic(te,de,!0))!==null&&Fe!==void 0?Fe:je)!==null&&Me!==void 0?Me:0;Pe=p9({barGap:j,barCategoryGap:H,bandSize:qe!==Te?qe:Te,sizeList:Ce[ge],maxBarSize:je}),qe!==Te&&(Pe=Pe.map(function(xn){return ae(ae({},xn),{},{position:ae(ae({},xn.position),{},{offset:xn.position.offset-qe/2})})}))}var Ke=Q&&Q.type&&Q.type.getComposedData;Ke&&D.push({props:ae(ae({},Ke(ae(ae({},fe),{},{displayedData:R,props:S,dataKey:J,item:Q,bandSize:Te,barPosition:Pe,offset:w,stackedData:ce,layout:T,dataStartIndex:N,dataEndIndex:P}))),{},Re(Re(Re({key:Q.key||"item-".concat(X)},K,fe[K]),U,fe[U]),"animationId",A)),childIndex:dT(Q,S.children),item:Q})}),D},y=function(S,W){var M=S.props,O=S.dataStartIndex,w=S.dataEndIndex,A=S.updateId;if(!LB({props:M}))return null;var N=M.children,P=M.layout,C=M.stackOffset,T=M.data,j=M.reverseStackOrder,H=O3(P),q=H.numericAxisName,L=H.cateAxisName,K=st(N,r),U=b9(T,K,"".concat(q,"Id"),"".concat(L,"Id"),C,j),V=c.reduce(function(F,J){var ue="".concat(J.axisType,"Map");return ae(ae({},F),{},Re({},ue,gY(M,ae(ae({},J),{},{graphicalItems:K,stackGroups:J.axisType===q&&U,dataStartIndex:O,dataEndIndex:w}))))},{}),D=IY(ae(ae({},V),{},{props:M,graphicalItems:K}),W==null?void 0:W.legendBBox);Object.keys(V).forEach(function(F){V[F]=m(M,V[F],D,F.replace("Map",""),t)});var Q=V["".concat(L,"Map")],X=yY(Q),R=v(M,ae(ae({},V),{},{dataStartIndex:O,dataEndIndex:w,updateId:A,graphicalItems:K,stackGroups:U,offset:D}));return ae(ae({formattedGraphicalItems:R,graphicalItems:K,offset:D,stackGroups:U},X),V)},B=(function(b){function S(W){var M,O,w;return eY(this,S),w=rY(this,S,[W]),Re(w,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Re(w,"accessibilityManager",new $Q),Re(w,"handleLegendBBoxUpdate",function(A){if(A){var N=w.state,P=N.dataStartIndex,C=N.dataEndIndex,T=N.updateId;w.setState(ae({legendBBox:A},y({props:w.props,dataStartIndex:P,dataEndIndex:C,updateId:T},ae(ae({},w.state),{},{legendBBox:A}))))}}),Re(w,"handleReceiveSyncEvent",function(A,N,P){if(w.props.syncId===A){if(P===w.eventEmitterSymbol&&typeof w.props.syncMethod!="function")return;w.applySyncEvent(N)}}),Re(w,"handleBrushChange",function(A){var N=A.startIndex,P=A.endIndex;if(N!==w.state.dataStartIndex||P!==w.state.dataEndIndex){var C=w.state.updateId;w.setState(function(){return ae({dataStartIndex:N,dataEndIndex:P},y({props:w.props,dataStartIndex:N,dataEndIndex:P,updateId:C},w.state))}),w.triggerSyncEvent({dataStartIndex:N,dataEndIndex:P})}}),Re(w,"handleMouseEnter",function(A){var N=w.getMouseInfo(A);if(N){var P=ae(ae({},N),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var C=w.props.onMouseEnter;ke(C)&&C(P,A)}}),Re(w,"triggeredAfterMouseMove",function(A){var N=w.getMouseInfo(A),P=N?ae(ae({},N),{},{isTooltipActive:!0}):{isTooltipActive:!1};w.setState(P),w.triggerSyncEvent(P);var C=w.props.onMouseMove;ke(C)&&C(P,A)}),Re(w,"handleItemMouseEnter",function(A){w.setState(function(){return{isTooltipActive:!0,activeItem:A,activePayload:A.tooltipPayload,activeCoordinate:A.tooltipPosition||{x:A.cx,y:A.cy}}})}),Re(w,"handleItemMouseLeave",function(){w.setState(function(){return{isTooltipActive:!1}})}),Re(w,"handleMouseMove",function(A){A.persist(),w.throttleTriggeredAfterMouseMove(A)}),Re(w,"handleMouseLeave",function(A){w.throttleTriggeredAfterMouseMove.cancel();var N={isTooltipActive:!1};w.setState(N),w.triggerSyncEvent(N);var P=w.props.onMouseLeave;ke(P)&&P(N,A)}),Re(w,"handleOuterEvent",function(A){var N=fT(A),P=_t(w.props,"".concat(N));if(N&&ke(P)){var C,T;/.*touch.*/i.test(N)?T=w.getMouseInfo(A.changedTouches[0]):T=w.getMouseInfo(A),P((C=T)!==null&&C!==void 0?C:{},A)}}),Re(w,"handleClick",function(A){var N=w.getMouseInfo(A);if(N){var P=ae(ae({},N),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var C=w.props.onClick;ke(C)&&C(P,A)}}),Re(w,"handleMouseDown",function(A){var N=w.props.onMouseDown;if(ke(N)){var P=w.getMouseInfo(A);N(P,A)}}),Re(w,"handleMouseUp",function(A){var N=w.props.onMouseUp;if(ke(N)){var P=w.getMouseInfo(A);N(P,A)}}),Re(w,"handleTouchMove",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&w.throttleTriggeredAfterMouseMove(A.changedTouches[0])}),Re(w,"handleTouchStart",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&w.handleMouseDown(A.changedTouches[0])}),Re(w,"handleTouchEnd",function(A){A.changedTouches!=null&&A.changedTouches.length>0&&w.handleMouseUp(A.changedTouches[0])}),Re(w,"handleDoubleClick",function(A){var N=w.props.onDoubleClick;if(ke(N)){var P=w.getMouseInfo(A);N(P,A)}}),Re(w,"handleContextMenu",function(A){var N=w.props.onContextMenu;if(ke(N)){var P=w.getMouseInfo(A);N(P,A)}}),Re(w,"triggerSyncEvent",function(A){w.props.syncId!==void 0&&wv.emit(Pv,w.props.syncId,A,w.eventEmitterSymbol)}),Re(w,"applySyncEvent",function(A){var N=w.props,P=N.layout,C=N.syncMethod,T=w.state.updateId,j=A.dataStartIndex,H=A.dataEndIndex;if(A.dataStartIndex!==void 0||A.dataEndIndex!==void 0)w.setState(ae({dataStartIndex:j,dataEndIndex:H},y({props:w.props,dataStartIndex:j,dataEndIndex:H,updateId:T},w.state)));else if(A.activeTooltipIndex!==void 0){var q=A.chartX,L=A.chartY,K=A.activeTooltipIndex,U=w.state,V=U.offset,D=U.tooltipTicks;if(!V)return;if(typeof C=="function")K=C(D,A);else if(C==="value"){K=-1;for(var Q=0;Q<D.length;Q++)if(D[Q].value===A.activeLabel){K=Q;break}}var X=ae(ae({},V),{},{x:V.left,y:V.top}),R=Math.min(q,X.x+X.width),F=Math.min(L,X.y+X.height),J=D[K]&&D[K].value,ue=sy(w.state,w.props.data,K),me=D[K]?{x:P==="horizontal"?D[K].coordinate:R,y:P==="horizontal"?F:D[K].coordinate}:tO;w.setState(ae(ae({},A),{},{activeLabel:J,activeCoordinate:me,activePayload:ue,activeTooltipIndex:K}))}else w.setState(A)}),Re(w,"renderCursor",function(A){var N,P=w.state,C=P.isTooltipActive,T=P.activeCoordinate,j=P.activePayload,H=P.offset,q=P.activeTooltipIndex,L=P.tooltipAxisBandSize,K=w.getTooltipEventType(),U=(N=A.props.active)!==null&&N!==void 0?N:C,V=w.props.layout,D=A.key||"_recharts-cursor";return E.createElement(GQ,{key:D,activeCoordinate:T,activePayload:j,activeTooltipIndex:q,chartName:t,element:A,isActive:U,layout:V,offset:H,tooltipAxisBandSize:L,tooltipEventType:K})}),Re(w,"renderPolarAxis",function(A,N,P){var C=_t(A,"type.axisType"),T=_t(w.state,"".concat(C,"Map")),j=A.type.defaultProps,H=j!==void 0?ae(ae({},j),A.props):A.props,q=T&&T[H["".concat(C,"Id")]];return Y.cloneElement(A,ae(ae({},q),{},{className:Ee(C,q.className),key:A.key||"".concat(N,"-").concat(P),ticks:Fr(q,!0)}))}),Re(w,"renderPolarGrid",function(A){var N=A.props,P=N.radialLines,C=N.polarAngles,T=N.polarRadius,j=w.state,H=j.radiusAxisMap,q=j.angleAxisMap,L=Wa(H),K=Wa(q),U=K.cx,V=K.cy,D=K.innerRadius,Q=K.outerRadius;return Y.cloneElement(A,{polarAngles:Array.isArray(C)?C:Fr(K,!0).map(function(X){return X.coordinate}),polarRadius:Array.isArray(T)?T:Fr(L,!0).map(function(X){return X.coordinate}),cx:U,cy:V,innerRadius:D,outerRadius:Q,key:A.key||"polar-grid",radialLines:P})}),Re(w,"renderLegend",function(){var A=w.state.formattedGraphicalItems,N=w.props,P=N.children,C=N.width,T=N.height,j=w.props.margin||{},H=C-(j.left||0)-(j.right||0),q=CA({children:P,formattedGraphicalItems:A,legendWidth:H,legendContent:f});if(!q)return null;var L=q.item,K=W3(q,KQ);return Y.cloneElement(L,ae(ae({},K),{},{chartWidth:C,chartHeight:T,margin:j,onBBoxUpdate:w.handleLegendBBoxUpdate}))}),Re(w,"renderTooltip",function(){var A,N=w.props,P=N.children,C=N.accessibilityLayer,T=St(P,Wt);if(!T)return null;var j=w.state,H=j.isTooltipActive,q=j.activeCoordinate,L=j.activePayload,K=j.activeLabel,U=j.offset,V=(A=T.props.active)!==null&&A!==void 0?A:H;return Y.cloneElement(T,{viewBox:ae(ae({},U),{},{x:U.left,y:U.top}),active:V,label:K,payload:V?L:[],coordinate:q,accessibilityLayer:C})}),Re(w,"renderBrush",function(A){var N=w.props,P=N.margin,C=N.data,T=w.state,j=T.offset,H=T.dataStartIndex,q=T.dataEndIndex,L=T.updateId;return Y.cloneElement(A,{key:A.key||"_recharts-brush",onChange:xl(w.handleBrushChange,A.props.onChange),data:C,x:pe(A.props.x)?A.props.x:j.left,y:pe(A.props.y)?A.props.y:j.top+j.height+j.brushBottom-(P.bottom||0),width:pe(A.props.width)?A.props.width:j.width,startIndex:H,endIndex:q,updateId:"brush-".concat(L)})}),Re(w,"renderReferenceElement",function(A,N,P){if(!A)return null;var C=w,T=C.clipPathId,j=w.state,H=j.xAxisMap,q=j.yAxisMap,L=j.offset,K=A.type.defaultProps||{},U=A.props,V=U.xAxisId,D=V===void 0?K.xAxisId:V,Q=U.yAxisId,X=Q===void 0?K.yAxisId:Q;return Y.cloneElement(A,{key:A.key||"".concat(N,"-").concat(P),xAxis:H[D],yAxis:q[X],viewBox:{x:L.left,y:L.top,width:L.width,height:L.height},clipPathId:T})}),Re(w,"renderActivePoints",function(A){var N=A.item,P=A.activePoint,C=A.basePoint,T=A.childIndex,j=A.isRange,H=[],q=N.props.key,L=N.item.type.defaultProps!==void 0?ae(ae({},N.item.type.defaultProps),N.item.props):N.item.props,K=L.activeDot,U=L.dataKey,V=ae(ae({index:T,dataKey:U,cx:P.x,cy:P.y,r:4,fill:lb(N.item),strokeWidth:2,stroke:"#fff",payload:P.payload,value:P.value},We(K,!1)),Hl(K));return H.push(S.renderActiveDot(K,V,"".concat(q,"-activePoint-").concat(T))),C?H.push(S.renderActiveDot(K,ae(ae({},V),{},{cx:C.x,cy:C.y}),"".concat(q,"-basePoint-").concat(T))):j&&H.push(null),H}),Re(w,"renderGraphicChild",function(A,N,P){var C=w.filterFormatItem(A,N,P);if(!C)return null;var T=w.getTooltipEventType(),j=w.state,H=j.isTooltipActive,q=j.tooltipAxis,L=j.activeTooltipIndex,K=j.activeLabel,U=w.props.children,V=St(U,Wt),D=C.props,Q=D.points,X=D.isRange,R=D.baseLine,F=C.item.type.defaultProps!==void 0?ae(ae({},C.item.type.defaultProps),C.item.props):C.item.props,J=F.activeDot,ue=F.hide,me=F.activeBar,ge=F.activeShape,ye=!!(!ue&&H&&V&&(J||me||ge)),fe={};T!=="axis"&&V&&V.props.trigger==="click"?fe={onClick:xl(w.handleItemMouseEnter,A.props.onClick)}:T!=="axis"&&(fe={onMouseLeave:xl(w.handleItemMouseLeave,A.props.onMouseLeave),onMouseEnter:xl(w.handleItemMouseEnter,A.props.onMouseEnter)});var te=Y.cloneElement(A,ae(ae({},C.props),fe));function de(gn){return typeof q.dataKey=="function"?q.dataKey(gn.payload):null}if(ye)if(L>=0){var ce,re;if(q.dataKey&&!q.allowDuplicatedCategory){var Te=typeof q.dataKey=="function"?de:"payload.".concat(q.dataKey.toString());ce=Rl(Q,Te,K),re=X&&R&&Rl(R,Te,K)}else ce=Q==null?void 0:Q[L],re=X&&R&&R[L];if(ge||me){var Pe=A.props.activeIndex!==void 0?A.props.activeIndex:L;return[Y.cloneElement(A,ae(ae(ae({},C.props),fe),{},{activeIndex:Pe})),null,null]}if(!Ne(ce))return[te].concat(qi(w.renderActivePoints({item:C,activePoint:ce,basePoint:re,childIndex:L,isRange:X})))}else{var Ce,Me=(Ce=w.getItemByXY(w.state.activeCoordinate))!==null&&Ce!==void 0?Ce:{graphicalItem:te},Fe=Me.graphicalItem,je=Fe.item,qe=je===void 0?A:je,Ke=Fe.childIndex,xn=ae(ae(ae({},C.props),fe),{},{activeIndex:Ke});return[Y.cloneElement(qe,xn),null,null]}return X?[te,null,null]:[te,null]}),Re(w,"renderCustomized",function(A,N,P){return Y.cloneElement(A,ae(ae({key:"recharts-customized-".concat(P)},w.props),w.state))}),Re(w,"renderMap",{CartesianGrid:{handler:Ml,once:!0},ReferenceArea:{handler:w.renderReferenceElement},ReferenceLine:{handler:Ml},ReferenceDot:{handler:w.renderReferenceElement},XAxis:{handler:Ml},YAxis:{handler:Ml},Brush:{handler:w.renderBrush,once:!0},Bar:{handler:w.renderGraphicChild},Line:{handler:w.renderGraphicChild},Area:{handler:w.renderGraphicChild},Radar:{handler:w.renderGraphicChild},RadialBar:{handler:w.renderGraphicChild},Scatter:{handler:w.renderGraphicChild},Pie:{handler:w.renderGraphicChild},Funnel:{handler:w.renderGraphicChild},Tooltip:{handler:w.renderCursor,once:!0},PolarGrid:{handler:w.renderPolarGrid,once:!0},PolarAngleAxis:{handler:w.renderPolarAxis},PolarRadiusAxis:{handler:w.renderPolarAxis},Customized:{handler:w.renderCustomized}}),w.clipPathId="".concat((M=W.id)!==null&&M!==void 0?M:Da("recharts"),"-clip"),w.throttleTriggeredAfterMouseMove=CM(w.triggeredAfterMouseMove,(O=W.throttleDelay)!==null&&O!==void 0?O:1e3/60),w.state={},w}return iY(S,b),tY(S,[{key:"componentDidMount",value:function(){var M,O;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(M=this.props.margin.left)!==null&&M!==void 0?M:0,top:(O=this.props.margin.top)!==null&&O!==void 0?O:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var M=this.props,O=M.children,w=M.data,A=M.height,N=M.layout,P=St(O,Wt);if(P){var C=P.props.defaultIndex;if(!(typeof C!="number"||C<0||C>this.state.tooltipTicks.length-1)){var T=this.state.tooltipTicks[C]&&this.state.tooltipTicks[C].value,j=sy(this.state,w,C,T),H=this.state.tooltipTicks[C].coordinate,q=(this.state.offset.top+A)/2,L=N==="horizontal",K=L?{x:H,y:q}:{y:H,x:q},U=this.state.formattedGraphicalItems.find(function(D){var Q=D.item;return Q.type.name==="Scatter"});U&&(K=ae(ae({},K),U.props.points[C].tooltipPosition),j=U.props.points[C].tooltipPayload);var V={activeTooltipIndex:C,isTooltipActive:!0,activeLabel:T,activePayload:j,activeCoordinate:K};this.setState(V),this.renderCursor(P),this.accessibilityManager.setIndex(C)}}}},{key:"getSnapshotBeforeUpdate",value:function(M,O){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==O.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==M.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==M.margin){var w,A;this.accessibilityManager.setDetails({offset:{left:(w=this.props.margin.left)!==null&&w!==void 0?w:0,top:(A=this.props.margin.top)!==null&&A!==void 0?A:0}})}return null}},{key:"componentDidUpdate",value:function(M){Lv([St(M.children,Wt)],[St(this.props.children,Wt)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var M=St(this.props.children,Wt);if(M&&typeof M.props.shared=="boolean"){var O=M.props.shared?"axis":"item";return p.indexOf(O)>=0?O:i}return i}},{key:"getMouseInfo",value:function(M){if(!this.container)return null;var O=this.container,w=O.getBoundingClientRect(),A=JD(w),N={chartX:Math.round(M.pageX-A.left),chartY:Math.round(M.pageY-A.top)},P=w.width/O.offsetWidth||1,C=this.inRange(N.chartX,N.chartY,P);if(!C)return null;var T=this.state,j=T.xAxisMap,H=T.yAxisMap,q=this.getTooltipEventType(),L=A3(this.state,this.props.data,this.props.layout,C);if(q!=="axis"&&j&&H){var K=Wa(j).scale,U=Wa(H).scale,V=K&&K.invert?K.invert(N.chartX):null,D=U&&U.invert?U.invert(N.chartY):null;return ae(ae({},N),{},{xValue:V,yValue:D},L)}return L?ae(ae({},N),L):null}},{key:"inRange",value:function(M,O){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,A=this.props.layout,N=M/w,P=O/w;if(A==="horizontal"||A==="vertical"){var C=this.state.offset,T=N>=C.left&&N<=C.left+C.width&&P>=C.top&&P<=C.top+C.height;return T?{x:N,y:P}:null}var j=this.state,H=j.angleAxisMap,q=j.radiusAxisMap;if(H&&q){var L=Wa(H);return _4({x:N,y:P},L)}return null}},{key:"parseEventsOfWrapper",value:function(){var M=this.props.children,O=this.getTooltipEventType(),w=St(M,Wt),A={};w&&O==="axis"&&(w.props.trigger==="click"?A={onClick:this.handleClick}:A={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var N=Hl(this.props,this.handleOuterEvent);return ae(ae({},N),A)}},{key:"addListener",value:function(){wv.on(Pv,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){wv.removeListener(Pv,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(M,O,w){for(var A=this.state.formattedGraphicalItems,N=0,P=A.length;N<P;N++){var C=A[N];if(C.item===M||C.props.key===M.key||O===Ur(C.item.type)&&w===C.childIndex)return C}return null}},{key:"renderClipPath",value:function(){var M=this.clipPathId,O=this.state.offset,w=O.left,A=O.top,N=O.height,P=O.width;return E.createElement("defs",null,E.createElement("clipPath",{id:M},E.createElement("rect",{x:w,y:A,height:N,width:P})))}},{key:"getXScales",value:function(){var M=this.state.xAxisMap;return M?Object.entries(M).reduce(function(O,w){var A=S3(w,2),N=A[0],P=A[1];return ae(ae({},O),{},Re({},N,P.scale))},{}):null}},{key:"getYScales",value:function(){var M=this.state.yAxisMap;return M?Object.entries(M).reduce(function(O,w){var A=S3(w,2),N=A[0],P=A[1];return ae(ae({},O),{},Re({},N,P.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(M){var O;return(O=this.state.xAxisMap)===null||O===void 0||(O=O[M])===null||O===void 0?void 0:O.scale}},{key:"getYScaleByAxisId",value:function(M){var O;return(O=this.state.yAxisMap)===null||O===void 0||(O=O[M])===null||O===void 0?void 0:O.scale}},{key:"getItemByXY",value:function(M){var O=this.state,w=O.formattedGraphicalItems,A=O.activeItem;if(w&&w.length)for(var N=0,P=w.length;N<P;N++){var C=w[N],T=C.props,j=C.item,H=j.type.defaultProps!==void 0?ae(ae({},j.type.defaultProps),j.props):j.props,q=Ur(j.type);if(q==="Bar"){var L=(T.data||[]).find(function(D){return Iz(M,D)});if(L)return{graphicalItem:C,payload:L}}else if(q==="RadialBar"){var K=(T.data||[]).find(function(D){return _4(M,D)});if(K)return{graphicalItem:C,payload:K}}else if(m0(C,A)||h0(C,A)||Ls(C,A)){var U=qU({graphicalItem:C,activeTooltipItem:A,itemData:H.data}),V=H.activeIndex===void 0?U:H.activeIndex;return{graphicalItem:ae(ae({},C),{},{childIndex:V}),payload:Ls(C,A)?H.data[U]:C.props.data[U]}}}return null}},{key:"render",value:function(){var M=this;if(!LB(this))return null;var O=this.props,w=O.children,A=O.className,N=O.width,P=O.height,C=O.style,T=O.compact,j=O.title,H=O.desc,q=W3(O,QQ),L=We(q,!1);if(T)return E.createElement(t3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},E.createElement(qv,pi({},L,{width:N,height:P,title:j,desc:H}),this.renderClipPath(),qB(w,this.renderMap)));if(this.props.accessibilityLayer){var K,U;L.tabIndex=(K=this.props.tabIndex)!==null&&K!==void 0?K:0,L.role=(U=this.props.role)!==null&&U!==void 0?U:"application",L.onKeyDown=function(D){M.accessibilityManager.keyboardEvent(D)},L.onFocus=function(){M.accessibilityManager.focus()}}var V=this.parseEventsOfWrapper();return E.createElement(t3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},E.createElement("div",pi({className:Ee("recharts-wrapper",A),style:ae({position:"relative",cursor:"default",width:N,height:P},C)},V,{ref:function(Q){M.container=Q}}),E.createElement(qv,pi({},L,{width:N,height:P,title:j,desc:H,style:fY}),this.renderClipPath(),qB(w,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(Y.Component);Re(B,"displayName",t),Re(B,"defaultProps",ae({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Re(B,"getDerivedStateFromProps",function(b,S){var W=b.dataKey,M=b.data,O=b.children,w=b.width,A=b.height,N=b.layout,P=b.stackOffset,C=b.margin,T=S.dataStartIndex,j=S.dataEndIndex;if(S.updateId===void 0){var H=_3(b);return ae(ae(ae({},H),{},{updateId:0},y(ae(ae({props:b},H),{},{updateId:0}),S)),{},{prevDataKey:W,prevData:M,prevWidth:w,prevHeight:A,prevLayout:N,prevStackOffset:P,prevMargin:C,prevChildren:O})}if(W!==S.prevDataKey||M!==S.prevData||w!==S.prevWidth||A!==S.prevHeight||N!==S.prevLayout||P!==S.prevStackOffset||!li(C,S.prevMargin)){var q=_3(b),L={chartX:S.chartX,chartY:S.chartY,isTooltipActive:S.isTooltipActive},K=ae(ae({},A3(S,M,N)),{},{updateId:S.updateId+1}),U=ae(ae(ae({},q),L),K);return ae(ae(ae({},U),y(ae({props:b},U),S)),{},{prevDataKey:W,prevData:M,prevWidth:w,prevHeight:A,prevLayout:N,prevStackOffset:P,prevMargin:C,prevChildren:O})}if(!Lv(O,S.prevChildren)){var V,D,Q,X,R=St(O,Oi),F=R&&(V=(D=R.props)===null||D===void 0?void 0:D.startIndex)!==null&&V!==void 0?V:T,J=R&&(Q=(X=R.props)===null||X===void 0?void 0:X.endIndex)!==null&&Q!==void 0?Q:j,ue=F!==T||J!==j,me=!Ne(M),ge=me&&!ue?S.updateId:S.updateId+1;return ae(ae({updateId:ge},y(ae(ae({props:b},S),{},{updateId:ge,dataStartIndex:F,dataEndIndex:J}),S)),{},{prevChildren:O,dataStartIndex:F,dataEndIndex:J})}return null}),Re(B,"renderActiveDot",function(b,S,W){var M;return Y.isValidElement(b)?M=Y.cloneElement(b,S):ke(b)?M=b(S):M=E.createElement(tp,S),E.createElement(De,{className:"recharts-active-dot",key:W},M)});var I=Y.forwardRef(function(S,W){return E.createElement(B,pi({},S,{ref:W}))});return I.displayName=B.displayName,I},xY=P0({chartName:"LineChart",GraphicalChild:qr,axisComponents:[{axisType:"xAxis",AxisComp:Ta},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:fb}),wY=P0({chartName:"BarChart",GraphicalChild:Sr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Ta},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:fb}),PY=P0({chartName:"PieChart",GraphicalChild:ea,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:d0},{axisType:"radiusAxis",AxisComp:c0}],formatAxisMap:C9,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),SY=P0({chartName:"ComposedChart",GraphicalChild:[qr,Wo,Sr,x0],axisComponents:[{axisType:"xAxis",AxisComp:Ta},{axisType:"yAxis",AxisComp:Br},{axisType:"zAxis",AxisComp:B0}],formatAxisMap:fb});const C3=({active:e,payload:n,label:t})=>e&&n&&n.length?_.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-3 shadow-lg",children:[_.jsx("p",{className:"font-semibold text-gray-900 mb-2",children:t}),_.jsxs("div",{className:"space-y-1",children:[_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-blue-600 font-medium",children:"Total Sessions: "}),_.jsx("span",{className:"text-gray-900",children:n[0].payload.totalSessions.toLocaleString()})]}),_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-orange-600 font-medium",children:"Human Escalations: "}),_.jsx("span",{className:"text-gray-900",children:n[0].payload.humanEscalations.toLocaleString()})]}),_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-red-600 font-medium",children:"Escalation Rate: "}),_.jsxs("span",{className:"text-gray-900",children:[n[0].payload.escalationRate.toFixed(1),"%"]})]})]})]}):null;function aO({data:e,title:n,instanceId:t}){var y,B;const r=Y.useId(),a=n||"Sessions & Escalation Trends",i=e.length<=3&&((B=(y=e[0])==null?void 0:y.week)==null?void 0:B.includes("2026")),s=t||r.replace(/:/g,"-"),p=`${n?n.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase():"escalation-chart"}-${s}`,c=`chart-${p}-${e.length}`,f=e.map((I,b)=>({...I,id:`${p}-${I.week.replace(/\s/g,"-")}-${b}`})),m=`colorSessions-${p}`,d=`colorEscalations-${p}`,v=`colorSessionsLine-${p}`;return _.jsxs(zt,{className:"shadow-xl border-0",children:[_.jsx(jc,{className:"bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5",children:_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsxs("div",{children:[_.jsx(Dc,{className:"text-2xl font-black text-gray-900",children:a}),_.jsx("p",{className:"text-sm text-gray-600 mt-2 font-medium",children:"Comparing Total Sessions, Human Escalations, and Escalation Rate %"})]}),_.jsxs("div",{className:"flex gap-2",children:[_.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Total Sessions"})]}),_.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Human Escalations"})]}),_.jsxs("div",{className:"flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Escalation Rate %"})]})]})]})}),_.jsx(Ut,{className:"p-6 bg-white",children:_.jsx(Dy,{width:"100%",height:400,children:i?_.jsxs(SY,{data:f,barGap:8,barCategoryGap:"20%",children:[_.jsxs("defs",{children:[_.jsxs("linearGradient",{id:m,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.9},`${m}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.7},`${m}-stop-2`)]}),_.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#f97316",stopOpacity:.9},`${d}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#f97316",stopOpacity:.7},`${d}-stop-2`)]})]}),_.jsx(Oc,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${p}`),_.jsx(Ta,{dataKey:"week",tick:{fontSize:13,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${p}`),_.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${p}`),_.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${p}`),_.jsx(Wt,{content:_.jsx(C3,{})},`tooltip-${p}`),_.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"square",iconSize:14},`legend-${p}`),_.jsx(Sr,{yAxisId:"left",dataKey:"totalSessions",fill:`url(#${m})`,name:"Total Sessions",radius:[10,10,0,0],maxBarSize:80},`bar-total-${p}`),_.jsx(Sr,{yAxisId:"left",dataKey:"humanEscalations",fill:`url(#${d})`,name:"Human Escalations",radius:[10,10,0,0],maxBarSize:80},`bar-human-${p}`),_.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:4,dot:{fill:"#ef4444",r:6,strokeWidth:2,stroke:"#fff"},activeDot:{r:8,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${p}`)]},c):_.jsxs(xY,{data:f,children:[_.jsx("defs",{children:_.jsxs("linearGradient",{id:v,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8},`${v}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.1},`${v}-stop-2`)]})}),_.jsx(Oc,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${p}`),_.jsx(Ta,{dataKey:"week",tick:{fontSize:12,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${p}`),_.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${p}`),_.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${p}`),_.jsx(Wt,{content:_.jsx(C3,{})},`tooltip-${p}`),_.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"line",iconSize:20},`legend-${p}`),_.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"totalSessions",stroke:"#3b82f6",strokeWidth:3,dot:{fill:"#3b82f6",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Total Sessions"},`line-total-${p}`),_.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"humanEscalations",stroke:"#f97316",strokeWidth:3,dot:{fill:"#f97316",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Human Escalations"},`line-human-${p}`),_.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:3,strokeDasharray:"8 4",dot:{fill:"#ef4444",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${p}`)]},c)})})]})}const k3=["#3b82f6","#f97316","#10b981","#8b5cf6","#f59e0b"];function oO({data:e,title:n}){const t=e.reduce((s,p)=>s+p.count,0),r=n||"Channel Distribution",a=r.replace(/\s/g,"-").toLowerCase(),i=e.map((s,p)=>({...s,uniqueKey:`${a}-${s.channel.replace(/\s/g,"-")}-${s.count}-${p}`,id:`${a}-${p}`}));return _.jsxs(zt,{children:[_.jsxs(jc,{children:[_.jsx(Dc,{children:r}),_.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Total sessions: ",t.toLocaleString()]})]}),_.jsx(Ut,{children:_.jsx(Dy,{width:"100%",height:300,children:_.jsxs(PY,{children:[_.jsx(ea,{data:i,cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",paddingAngle:2,dataKey:"count",label:({channel:s,percentage:p})=>`${s} (${p.toFixed(1)}%)`,children:i.map(s=>_.jsx(Xs,{fill:k3[i.indexOf(s)%k3.length]},s.uniqueKey))},`pie-${a}`),_.jsx(Wt,{formatter:(s,p,c)=>[`${s.toLocaleString()} sessions (${c.payload.percentage.toFixed(1)}%)`,c.payload.channel],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}})]},`piechart-${a}`)})})]})}function WY({data:e}){const n=e.reduce((a,i)=>{const s=a.find(p=>p.product===i.product);return s?s.count+=i.count:a.push({...i}),a},[]),t=n.slice(0,10),r=n.reduce((a,i)=>a+i.count,0);return _.jsxs(zt,{children:[_.jsxs(jc,{children:[_.jsx(Dc,{children:"Product Breakdown (Human Handled)"}),_.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Human escalations: ",r.toLocaleString()," ",t.length<n.length&&`(showing top ${t.length})`]})]}),_.jsx(Ut,{children:_.jsx(Dy,{width:"100%",height:300,children:_.jsxs(wY,{data:t,children:[_.jsx(Oc,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),_.jsx(Ta,{dataKey:"product",tick:{fontSize:11},stroke:"#6b7280",angle:-45,textAnchor:"end",height:100}),_.jsx(Br,{tick:{fontSize:12},stroke:"#6b7280",label:{value:"Count",angle:-90,position:"insideLeft",style:{fontSize:12}}}),_.jsx(Wt,{formatter:a=>[`${a} escalations`,"Count"],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}}),_.jsx(Sr,{dataKey:"count",fill:"#f97316",radius:[4,4,0,0]})]})})})]})}function iO({className:e,...n}){return _.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:_.jsx("table",{"data-slot":"table",className:pt("w-full caption-bottom text-sm",e),...n})})}function uO({className:e,...n}){return _.jsx("thead",{"data-slot":"table-header",className:pt("[&_tr]:border-b",e),...n})}function sO({className:e,...n}){return _.jsx("tbody",{"data-slot":"table-body",className:pt("[&_tr:last-child]:border-0",e),...n})}function di({className:e,...n}){return _.jsx("tr",{"data-slot":"table-row",className:pt("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...n})}function Dr({className:e,...n}){return _.jsx("th",{"data-slot":"table-head",className:pt("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...n})}function Mt({className:e,...n}){return _.jsx("td",{"data-slot":"table-cell",className:pt("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...n})}function MY({data:e}){const[n,t]=Y.useState(new Set),r=a=>{const i=new Set(n);i.has(a)?i.delete(a):i.add(a),t(i)};return _.jsx("div",{className:"border rounded-lg overflow-hidden",children:_.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:_.jsxs(iO,{children:[_.jsx(uO,{className:"bg-gray-50 sticky top-0 z-10",children:_.jsxs(di,{children:[_.jsx(Dr,{className:"w-12"}),_.jsx(Dr,{children:"Issue Type"}),_.jsx(Dr,{className:"text-right",children:"Count"})]})}),_.jsx(sO,{children:e.flatMap((a,i)=>{const s=n.has(a.issue),p=[_.jsxs(di,{className:"cursor-pointer hover:bg-gray-50",onClick:()=>r(a.issue),children:[_.jsx(Mt,{children:s?_.jsx(Uk,{className:"w-4 h-4"}):_.jsx(kv,{className:"w-4 h-4"})}),_.jsx(Mt,{className:"font-medium",children:a.issue}),_.jsx(Mt,{className:"text-right font-semibold",children:a.count})]},`${a.issue}-${i}`)];return s&&a.subIssues.forEach((c,f)=>{p.push(_.jsxs(di,{className:"bg-blue-50",children:[_.jsx(Mt,{}),_.jsx(Mt,{className:"pl-8",children:_.jsxs("div",{children:[_.jsx("div",{className:"font-medium text-sm text-gray-900",children:c.subType}),_.jsx("div",{className:"text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5",children:c.products.map((m,d)=>_.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700",children:[m.product," ",_.jsxs("span",{className:"ml-1 font-semibold",children:["(",m.count,")"]})]},`${a.issue}-${c.subType}-${m.product}-${d}`))})]})}),_.jsx(Mt,{className:"text-right",children:c.count})]},`${a.issue}-${c.subType}-${f}`))}),p})})]})})})}const Ju=50;function ai({field:e,currentField:n,direction:t,onSort:r,children:a}){return _.jsxs("button",{onClick:()=>r(e),className:"flex items-center gap-1 hover:text-gray-900 font-medium",children:[a,_.jsx(Lk,{className:`w-4 h-4 ${n===e?"text-blue-600":"text-gray-400"}`})]})}function AY({data:e=[]}){const[n,t]=Y.useState("createdAt"),[r,a]=Y.useState("desc"),[i,s]=Y.useState(0),p=Y.useCallback(d=>{t(v=>v===d?(a(y=>y==="asc"?"desc":"asc"),d):(a("asc"),d)),s(0)},[]),c=Y.useMemo(()=>[...e].sort((d,v)=>{let y,B;return n==="createdAt"?(y=ur(d.createdAt).getTime(),B=ur(v.createdAt).getTime(),isNaN(y)&&(y=-1/0),isNaN(B)&&(B=-1/0)):(y=(d[n]||"").toLowerCase(),B=(v[n]||"").toLowerCase()),r==="asc"?y>B?1:y<B?-1:0:y<B?1:y>B?-1:0}),[e,n,r]),f=Math.ceil(c.length/Ju),m=Y.useMemo(()=>c.slice(i*Ju,(i+1)*Ju),[c,i]);return _.jsxs("div",{className:"space-y-3",children:[_.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 px-1",children:[_.jsxs("span",{children:["Showing ",_.jsxs("span",{className:"font-semibold text-gray-800",children:[i*Ju+1,"–",Math.min((i+1)*Ju,c.length)]})," of ",_.jsx("span",{className:"font-semibold text-gray-800",children:c.length.toLocaleString()})," sessions"]}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("button",{onClick:()=>s(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(MI,{className:"w-4 h-4"})}),_.jsxs("span",{className:"text-xs font-medium",children:["Page ",i+1," of ",f||1]}),_.jsx("button",{onClick:()=>s(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(kv,{className:"w-4 h-4"})})]})]}),_.jsx("div",{className:"border rounded-lg overflow-hidden",children:_.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:_.jsxs(iO,{children:[_.jsx(uO,{className:"bg-gray-50 sticky top-0 z-10",children:_.jsxs(di,{children:[_.jsx(Dr,{children:_.jsx(ai,{field:"createdAt",currentField:n,direction:r,onSort:p,children:"Date"})}),_.jsx(Dr,{children:_.jsx(ai,{field:"channel",currentField:n,direction:r,onSort:p,children:"Channel"})}),_.jsx(Dr,{children:_.jsx(ai,{field:"product",currentField:n,direction:r,onSort:p,children:"Product"})}),_.jsx(Dr,{children:_.jsx(ai,{field:"issue",currentField:n,direction:r,onSort:p,children:"Issue"})}),_.jsx(Dr,{children:_.jsx(ai,{field:"subType",currentField:n,direction:r,onSort:p,children:"Sub Type"})}),_.jsx(Dr,{children:_.jsx(ai,{field:"handled",currentField:n,direction:r,onSort:p,children:"Handled By"})})]})}),_.jsx(sO,{children:m.length===0?_.jsx(di,{children:_.jsx(Mt,{colSpan:6,className:"text-center text-gray-400 py-12",children:"No sessions found."})}):m.map((d,v)=>_.jsxs(di,{className:"hover:bg-blue-50/50 transition-colors",children:[_.jsx(Mt,{className:"whitespace-nowrap text-gray-700",children:pH(ur(d.createdAt))}),_.jsx(Mt,{children:_.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700",children:d.channel||"-"})}),_.jsx(Mt,{className:"text-gray-700",children:d.product||"-"}),_.jsx(Mt,{className:"text-gray-700",children:d.issue||"-"}),_.jsx(Mt,{className:"text-gray-500 text-xs",children:d.subType||"-"}),_.jsx(Mt,{children:_.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${d.handled==="Bot"?"bg-blue-100 text-blue-800":"bg-orange-100 text-orange-800"}`,children:d.handled||"-"})})]},`${i}-${v}`))})]})})}),f>1&&_.jsxs("div",{className:"flex items-center justify-center gap-2 pt-1",children:[_.jsx("button",{onClick:()=>s(0),disabled:i===0,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"First"}),_.jsx("button",{onClick:()=>s(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(MI,{className:"w-4 h-4"})}),Array.from({length:Math.min(5,f)},(d,v)=>{let y;return f<=5||i<3?y=v:i>f-4?y=f-5+v:y=i-2+v,_.jsx("button",{onClick:()=>s(y),className:`px-3 py-1.5 text-xs rounded-md border font-medium transition-colors ${y===i?"bg-blue-600 text-white border-blue-600":"border-gray-200 hover:bg-gray-100 text-gray-700"}`,children:y+1},y)}),_.jsx("button",{onClick:()=>s(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(kv,{className:"w-4 h-4"})}),_.jsx("button",{onClick:()=>s(f-1),disabled:i>=f-1,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"Last"})]})]})}function pO({metrics:e,topChannel:n,top5Products:t,top5Issues:r,monthCount:a}){return _.jsxs(zt,{className:"border-0 shadow-xl overflow-hidden mt-6",children:[_.jsx("div",{className:"bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-6 py-4 border-b border-white/10",children:_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20",children:_.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-xl font-black tracking-tight",children:"Waggle AI Performance Summary"}),_.jsx("p",{className:"text-[10px] text-indigo-200 font-bold uppercase tracking-widest opacity-80",children:"Full Analytics Overview"})]})]})}),_.jsxs(Ut,{className:"p-6 bg-gradient-to-br from-slate-50 to-white",children:[_.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-blue-600 group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Total Sessions"})]}),_.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:e.totalSessions.toLocaleString()}),_.jsxs("p",{className:"text-[10px] text-slate-400 font-medium italic",children:["Across ",a," ",a===1?"month":"months"]})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-emerald-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Bot Efficiency"})]}),_.jsxs("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:[e.botPercentage.toFixed(1),"%"]}),_.jsxs("p",{className:"text-[10px] text-emerald-600 font-bold",children:[e.botHandled.toLocaleString()," Handled"]})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-rose-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Avg Escalation"})]}),_.jsxs("p",{className:"text-2xl font-black text-rose-600 tracking-tight mb-0.5",children:[e.escalationRate.toFixed(1),"%"]}),_.jsx("p",{className:"text-[10px] text-rose-400 font-bold uppercase",children:"Human Assistance Needs"})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-indigo-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Main Channel"})]}),_.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:(n==null?void 0:n.channel)||"N/A"}),_.jsxs("p",{className:"text-[10px] text-indigo-500 font-bold uppercase",children:[((n==null?void 0:n.percentage)||0).toFixed(1),"% Share"]})]})]}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[_.jsxs("div",{className:"bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-slate-800",children:[_.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-5 pointer-events-none",children:_.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),_.jsxs("h4",{className:"flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),"Top 5 Products Escalated"]}),_.jsx("div",{className:"space-y-2 relative z-10",children:t.map((i,s)=>_.jsxs("div",{className:"flex justify-between items-center bg-white/5 rounded-xl p-2.5 border border-white/10 hover:bg-white/10 transition-colors",children:[_.jsxs("span",{className:"font-bold text-sm text-indigo-50 flex items-center gap-2",children:[_.jsxs("span",{className:"text-indigo-400 font-mono text-xs opacity-70",children:[s+1,"."]})," ",i.product||"N/A"]}),_.jsxs("span",{className:"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-bold ring-1 ring-indigo-500/50",children:[i.count.toLocaleString()," cases"]})]},s))})]}),_.jsxs("div",{className:"bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-indigo-500/30",children:[_.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-10 pointer-events-none",children:_.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),_.jsxs("h4",{className:"flex items-center gap-2 text-indigo-100 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-pulse"}),"Top 5 Issue Types"]}),_.jsx("div",{className:"space-y-2 relative z-10",children:r.map((i,s)=>_.jsxs("div",{className:"flex justify-between items-center bg-black/10 rounded-xl p-2.5 border border-white/10 hover:bg-black/20 transition-colors",children:[_.jsxs("span",{className:"font-bold text-sm text-purple-50 flex items-center gap-2",children:[_.jsxs("span",{className:"text-purple-300 font-mono text-xs opacity-70",children:[s+1,"."]})," ",i.issue||"N/A"]}),_.jsxs("span",{className:"px-2.5 py-0.5 bg-white/10 text-white rounded-full text-xs font-bold ring-1 ring-white/20",children:[i.humanCount.toLocaleString()," escapements"]})]},s))})]})]})]})]})}function _Y({monthsData:e,weeklyEscalation:n}){const t=e.flatMap(p=>p.data),r=Tv(t),a=Ev(t)[0],i=OW(t).slice(0,5),s=jv(t,5);return _.jsxs(_.Fragment,{children:[_.jsxs(zt,{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-xl overflow-hidden relative",children:[_.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"}),_.jsx(Ut,{className:"p-5 relative z-10",children:_.jsxs("div",{className:"text-center text-white",children:[_.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-2 uppercase tracking-wider border border-white/30",children:[_.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Performance Analysis"]}),_.jsx("h2",{className:"text-2xl md:text-3xl font-black mb-1.5 tracking-tight drop-shadow-lg",children:"Dynamic Monthly Overview"}),_.jsx("p",{className:"text-base text-white/90 font-medium max-w-2xl mx-auto",children:"Comprehensive analysis across available months"})]})})]}),_.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(p=>{const c=jv(p.data,3);return _.jsxs(zt,{className:`relative overflow-hidden shadow-lg border-0 bg-gradient-to-br ${p.colorFrom} ${p.colorTo} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group`,children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),_.jsx(jc,{className:"text-white pb-3 pt-4 relative z-10",children:_.jsxs("div",{className:"text-center",children:[_.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-2 uppercase tracking-wider border border-white/30",children:[_.jsx("svg",{className:"w-2.5 h-2.5",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),p.shortName]}),_.jsx(Dc,{className:"text-2xl font-black mb-3 drop-shadow",children:p.name}),_.jsxs("div",{className:"bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-md",children:[_.jsx("p",{className:"text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold",children:"Total Sessions"}),_.jsx("p",{className:"text-4xl font-black tracking-tight drop-shadow-md",children:p.data.length.toLocaleString()}),p.data.length<200&&_.jsx("p",{className:"text-[10px] text-white/80 mt-1 font-medium",children:"Partial data recorded"})]})]})}),_.jsxs(Ut,{className:"p-4 bg-white/95 backdrop-blur-sm relative z-10",children:[_.jsxs("div",{className:"space-y-2 mb-4",children:[_.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm border border-green-200",children:[_.jsxs("div",{className:"flex justify-between items-center mb-1",children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("div",{className:"w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm",children:_.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),_.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Bot Handled"})]}),_.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-green-300",children:_.jsxs("p",{className:"text-sm font-black text-green-700",children:[p.metrics.botPercentage.toFixed(1),"%"]})})]}),_.jsx("p",{className:"text-xl font-black text-gray-900",children:p.metrics.botHandled.toLocaleString()})]}),_.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 shadow-sm border border-orange-200",children:[_.jsxs("div",{className:"flex justify-between items-center mb-1",children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("div",{className:"w-6 h-6 bg-orange-500 rounded flex items-center justify-center shadow-sm",children:_.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),_.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Human Escalated"})]}),_.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-orange-300",children:_.jsxs("p",{className:"text-sm font-black text-orange-700",children:[p.metrics.humanPercentage.toFixed(1),"%"]})})]}),_.jsx("p",{className:"text-xl font-black text-gray-900",children:p.metrics.humanHandled.toLocaleString()})]})]}),_.jsxs("div",{className:"border-t border-slate-100 pt-3",children:[_.jsxs("h5",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1",children:[_.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),"Top 3 Monthly Issues"]}),_.jsx("div",{className:"space-y-1.5",children:c.map((f,m)=>_.jsxs("div",{className:"flex justify-between items-center text-[11px] bg-slate-50 p-1.5 rounded-md border border-slate-100",children:[_.jsx("span",{className:"font-bold text-slate-700 truncate max-w-[120px]",children:f.issue}),_.jsx("span",{className:"font-black text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded",children:f.humanCount})]},m))})]})]})]},p.name)})}),_.jsx(aO,{data:n,title:"Sessions & Escalation Comparison",instanceId:"overview-comparison"}),_.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(p=>_.jsx(oO,{data:p.channels,title:`${p.name} - Channels`},p.name))}),_.jsx(pO,{metrics:r,topChannel:a,top5Products:i,top5Issues:s,monthCount:e.length})]})}const OY="WaggleAIDB",CY=1,Ea="waggle_manual_data_store",xb=()=>new Promise((e,n)=>{const t=indexedDB.open(OY,CY);t.onerror=()=>{console.error("Error opening db",t.error),n(t.error)},t.onsuccess=()=>{e(t.result)},t.onupgradeneeded=r=>{const a=r.target.result;a.objectStoreNames.contains(Ea)||a.createObjectStore(Ea,{keyPath:"id"})}}),N3=async e=>{const n=await xb();return new Promise((t,r)=>{const s=n.transaction(Ea,"readwrite").objectStore(Ea).put({id:"all_data",data:e});s.onsuccess=()=>t(),s.onerror=()=>r(s.error)})},R3=async()=>{const e=await xb();return new Promise((n,t)=>{const i=e.transaction(Ea,"readonly").objectStore(Ea).get("all_data");i.onsuccess=()=>{i.result?n(i.result.data):n([])},i.onerror=()=>t(i.error)})},kY=async()=>{const e=await xb();return new Promise((n,t)=>{const i=e.transaction(Ea,"readwrite").objectStore(Ea).clear();i.onsuccess=()=>n(),i.onerror=()=>t(i.error)})},NY=`Channel,Created at,Product,Issue,Sub Type,Handled
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
`;function RY(){const[e,n]=Y.useState([]),[t,r]=Y.useState([]),[a,i]=Y.useState("all"),[s,p]=Y.useState("all"),[c,f]=Y.useState([]),[m,d]=Y.useState("overview"),v=Y.useRef(null),[y,B]=Y.useState(null),[I,b]=Y.useState(!1),S=Y.useRef([]);Y.useEffect(()=>{S.current=e},[e]);const W=L=>{if(!L)return L;const K=L.trim(),U=K.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(U){const[,Q,X,R]=U;return`${R.padStart(2,"0")}-${X.padStart(2,"0")}-${Q}`}const V=K.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(V){const[,Q,X,R]=V;return parseInt(Q)>12?`${Q.padStart(2,"0")}-${X.padStart(2,"0")}-${R}`:`${X.padStart(2,"0")}-${Q.padStart(2,"0")}-${R}`}const D=new Date(K);return isNaN(D.getTime())?K:`${String(D.getDate()).padStart(2,"0")}-${String(D.getMonth()+1).padStart(2,"0")}-${D.getFullYear()}`};Y.useEffect(()=>{let L=[];vI.parse(NY,{header:!0,skipEmptyLines:!0,complete:async K=>{L=K.data.map(U=>({channel:U.Channel||U.channel||"",createdAt:W(U["Created at"]||U.createdAt||U["Created date"]||U.Date||U.date||U["Created Date"]||""),product:U.Product||U.product||"",issue:U.Issue||U.issue||"",subType:U["Sub Type"]||U.subType||"",handled:U.Handled||U.handled||""}));try{const U=localStorage.getItem("waggle_manual_data");let V=await R3();if(U&&V.length===0)try{const D=JSON.parse(U);Array.isArray(D)&&(V=D,await N3(D))}catch{}Array.isArray(V)&&V.length>0&&(L=[...L,...V],b(!0))}catch(U){console.error("Error loading data from IndexedDB",U)}n(L)}})},[]);const M=Y.useMemo(()=>{const L=["january","february","march","april","may","june","july","august","september","october","november","december"],K=new Set;return e.forEach(U=>{try{const V=ur(U.createdAt);if(!isNaN(V.getTime())){const D=L[V.getMonth()];K.add(`${D}-${V.getFullYear()}`)}}catch{}}),Array.from(K).sort((U,V)=>{const[D,Q]=U.split("-"),[X,R]=V.split("-");return Q!==R?parseInt(Q)-parseInt(R):L.indexOf(D)-L.indexOf(X)})},[e]);Y.useEffect(()=>{f(a&&a!=="all"?AW(a):[]),p("all")},[a]),Y.useEffect(()=>{e.length>0&&A(a,s)},[s,a,e,m]);const O=L=>{var U;const K=(U=L.target.files)==null?void 0:U[0];K&&(vI.parse(K,{header:!0,skipEmptyLines:!0,complete:V=>{if(!V.data.length){B({type:"error",message:"The CSV file appears to be empty."});return}const D=V.data.map(R=>({channel:R.Channel||R.channel||"",createdAt:W(R["Created at"]||R.createdAt||R["Created date"]||R.Date||R.date||R["Created Date"]||""),product:R.Product||R.product||"",issue:R.Issue||R.issue||"",subType:R["Sub Type"]||R.subType||"",handled:R.Handled||R.handled||""})),Q=new Set(S.current.map(R=>`${R.channel}|${R.createdAt}|${R.product}|${R.issue}|${R.subType}|${R.handled}`)),X=D.filter(R=>!Q.has(`${R.channel}|${R.createdAt}|${R.product}|${R.issue}|${R.subType}|${R.handled}`));X.length>0?R3().then(async R=>{const F=[...R,...X];await N3(F);try{localStorage.setItem("waggle_manual_data",JSON.stringify(F))}catch{}n(J=>[...J,...X]),b(!0),B({type:"success",message:`Added ${X.length} rows.`}),setTimeout(()=>B(null),5e3)}).catch(R=>{console.error("Failed to save manual data",R),B({type:"error",message:"Failed to save data. Try again."}),setTimeout(()=>B(null),5e3)}):(B({type:"error",message:"No new rows found."}),setTimeout(()=>B(null),5e3))}}),L.target.value="")},w=async()=>{if(confirm("Are you sure you want to remove all manually uploaded data? This cannot be undone."))try{await kY(),localStorage.removeItem("waggle_manual_data"),b(!1),B({type:"success",message:"All uploaded data has been cleared. Reloading..."}),setTimeout(()=>window.location.reload(),1500)}catch(L){console.error("Failed to clear manual data",L),B({type:"error",message:"Failed to clear data."})}},A=(L,K,U)=>{let V=e;if(L!=="all"?V=e.filter(D=>{const Q=ur(D.createdAt);return Hv(Q,L)}):V=e.filter(D=>!isNaN(ur(D.createdAt).getTime())),K!=="all"){const D=c.find(Q=>Q.value===K);D&&(V=V.filter(Q=>_W(ur(Q.createdAt),D)))}r(V)},N=Tv(t),P=Ev(t),C=OW(t),T=cH(t),j=lH(e,a),H=[{from:"from-blue-500",to:"to-cyan-500"},{from:"from-purple-500",to:"to-indigo-600"},{from:"from-pink-500",to:"to-rose-600"},{from:"from-emerald-500",to:"to-teal-600"},{from:"from-orange-500",to:"to-amber-500"}],q=(a==="all"?M:[a]).map((L,K)=>{const U=e.filter(X=>Hv(ur(X.createdAt),L)),[V,D]=L.split("-"),Q=H[K%H.length];return{name:`${V.charAt(0).toUpperCase()+V.slice(1)} ${D}`,shortName:`Month ${K+1}`,data:U,metrics:Tv(U),channels:Ev(U),colorFrom:Q.from,colorTo:Q.to}});return _.jsx("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",children:_.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[_.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[_.jsxs("div",{children:[_.jsxs("h1",{className:"text-3xl font-bold",children:["Waggle AI Chatbot Dashboard ",_.jsx("span",{className:"text-xs font-normal text-gray-400 align-top",children:"v1.3"})]}),_.jsx("p",{className:"text-gray-600 mt-1",children:"Track and analyze customer support interactions"})]}),_.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[_.jsxs("select",{value:a,onChange:L=>i(L.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",children:[_.jsx("option",{value:"all",children:"All Months"}),M.map(L=>_.jsxs("option",{value:L,children:[L.split("-")[0].charAt(0).toUpperCase()+L.split("-")[0].slice(1)," ",L.split("-")[1]]},L))]}),_.jsxs("select",{value:s,onChange:L=>p(L.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",disabled:a==="all",children:[_.jsx("option",{value:"all",children:"All Weeks"}),c.map(L=>_.jsx("option",{value:L.value,children:L.label},L.value))]}),_.jsx("input",{ref:v,type:"file",accept:".csv",onChange:O,className:"hidden"}),I&&_.jsxs(Bf,{onClick:w,variant:"outline",className:"bg-white border-red-300 text-red-600",children:[_.jsx(Jk,{className:"w-4 h-4 mr-2"})," Clear Uploads"]}),_.jsxs(Bf,{onClick:()=>{var L;return(L=v.current)==null?void 0:L.click()},variant:"outline",className:"bg-white border-blue-300 text-blue-700",children:[_.jsx(Qk,{className:"w-4 h-4 mr-2"})," Add Data"]}),_.jsxs(Bf,{onClick:()=>fH(t),variant:"outline",className:"bg-white",children:[_.jsx(Xk,{className:"w-4 h-4 mr-2"})," Export CSV"]})]})]}),y&&_.jsx(zt,{className:`border ${y.type==="success"?"bg-green-50":"bg-red-50"}`,children:_.jsxs(Ut,{className:"p-4 flex items-center justify-between",children:[_.jsx("p",{className:"font-medium",children:y.message}),_.jsx("button",{onClick:()=>B(null),children:_.jsx(uN,{className:"w-4 h-4"})})]})}),a==="all"&&_.jsx("div",{className:"flex justify-center",children:_.jsxs("div",{className:"inline-flex rounded-lg border border-gray-200 bg-white p-1",children:[_.jsx("button",{onClick:()=>d("overview"),className:`px-6 py-2 rounded-md text-sm font-medium ${m==="overview"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Overview Comparison"}),_.jsx("button",{onClick:()=>d("detailed"),className:`px-6 py-2 rounded-md text-sm font-medium ${m==="detailed"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Detailed Analysis"})]})}),a==="all"&&m==="overview"?_.jsx(_Y,{monthsData:q,weeklyEscalation:j}):_.jsxs(_.Fragment,{children:[_.jsx(dH,{metrics:N}),_.jsx(pO,{metrics:N,topChannel:P[0],top5Products:C.slice(0,5),top5Issues:jv(t,5),monthCount:a==="all"?M.length:1}),_.jsx(aO,{data:j,instanceId:"detailed-analysis"}),_.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[_.jsx(oO,{data:P}),_.jsx(WY,{data:C})]}),_.jsx(zt,{children:_.jsx(Ut,{className:"p-6",children:_.jsxs(Rk,{defaultValue:"issues",className:"w-full",children:[_.jsxs(Hk,{className:"grid w-full grid-cols-2 max-w-md",children:[_.jsx(PI,{value:"issues",children:"Issue Analysis"}),_.jsx(PI,{value:"sessions",children:"Detailed Sessions"})]}),_.jsx(SI,{value:"issues",className:"mt-6",children:_.jsx(MY,{data:T})}),_.jsx(SI,{value:"sessions",className:"mt-6",children:_.jsx(AY,{data:t})})]})})})]})]})})}h5.createRoot(document.getElementById("root")).render(_.jsx(RY,{}));
