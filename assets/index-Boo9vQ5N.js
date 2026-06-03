var oH=Object.defineProperty;var iH=(e,n,t)=>n in e?oH(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ye=(e,n,t)=>iH(e,typeof n!="symbol"?n+"":n,t);function uH(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mf={exports:{}},$u={},hf={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iI;function pH(){if(iI)return Le;iI=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),p=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),d=Symbol.iterator;function v(R){return R===null||typeof R!="object"?null:(R=d&&R[d]||R["@@iterator"],typeof R=="function"?R:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,I={};function b(R,L,G){this.props=R,this.context=L,this.refs=I,this.updater=G||y}b.prototype.isReactComponent={},b.prototype.setState=function(R,L){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,L,"setState")},b.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function W(){}W.prototype=b.prototype;function M(R,L,G){this.props=R,this.context=L,this.refs=I,this.updater=G||y}var A=M.prototype=new W;A.constructor=M,B(A,b.prototype),A.isPureReactComponent=!0;var O=Array.isArray,w=Object.prototype.hasOwnProperty,S={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function P(R,L,G){var ie,oe={},he=null,ge=null;if(L!=null)for(ie in L.ref!==void 0&&(ge=L.ref),L.key!==void 0&&(he=""+L.key),L)w.call(L,ie)&&!N.hasOwnProperty(ie)&&(oe[ie]=L[ie]);var de=arguments.length-2;if(de===1)oe.children=G;else if(1<de){for(var te=Array(de),me=0;me<de;me++)te[me]=arguments[me+2];oe.children=te}if(R&&R.defaultProps)for(ie in de=R.defaultProps,de)oe[ie]===void 0&&(oe[ie]=de[ie]);return{$$typeof:e,type:R,key:he,ref:ge,props:oe,_owner:S.current}}function H(R,L){return{$$typeof:e,type:R.type,key:L,ref:R.ref,props:R.props,_owner:R._owner}}function T(R){return typeof R=="object"&&R!==null&&R.$$typeof===e}function j(R){var L={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(G){return L[G]})}var k=/\/+/g;function F(R,L){return typeof R=="object"&&R!==null&&R.key!=null?j(""+R.key):L.toString(36)}function Q(R,L,G,ie,oe){var he=typeof R;(he==="undefined"||he==="boolean")&&(R=null);var ge=!1;if(R===null)ge=!0;else switch(he){case"string":case"number":ge=!0;break;case"object":switch(R.$$typeof){case e:case n:ge=!0}}if(ge)return ge=R,oe=oe(ge),R=ie===""?"."+F(ge,0):ie,O(oe)?(G="",R!=null&&(G=R.replace(k,"$&/")+"/"),Q(oe,L,G,"",function(me){return me})):oe!=null&&(T(oe)&&(oe=H(oe,G+(!oe.key||ge&&ge.key===oe.key?"":(""+oe.key).replace(k,"$&/")+"/")+R)),L.push(oe)),1;if(ge=0,ie=ie===""?".":ie+":",O(R))for(var de=0;de<R.length;de++){he=R[de];var te=ie+F(he,de);ge+=Q(he,L,G,te,oe)}else if(te=v(R),typeof te=="function")for(R=te.call(R),de=0;!(he=R.next()).done;)he=he.value,te=ie+F(he,de++),ge+=Q(he,L,G,te,oe);else if(he==="object")throw L=String(R),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return ge}function Y(R,L,G){if(R==null)return R;var ie=[],oe=0;return Q(R,ie,"","",function(he){return L.call(G,he,oe++)}),ie}function X(R){if(R._status===-1){var L=R._result;L=L(),L.then(function(G){(R._status===0||R._status===-1)&&(R._status=1,R._result=G)},function(G){(R._status===0||R._status===-1)&&(R._status=2,R._result=G)}),R._status===-1&&(R._status=0,R._result=L)}if(R._status===1)return R._result.default;throw R._result}var Z={current:null},E={transition:null},z={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:E,ReactCurrentOwner:S};function V(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:Y,forEach:function(R,L,G){Y(R,function(){L.apply(this,arguments)},G)},count:function(R){var L=0;return Y(R,function(){L++}),L},toArray:function(R){return Y(R,function(L){return L})||[]},only:function(R){if(!T(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},Le.Component=b,Le.Fragment=t,Le.Profiler=a,Le.PureComponent=M,Le.StrictMode=r,Le.Suspense=c,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,Le.act=V,Le.cloneElement=function(R,L,G){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var ie=B({},R.props),oe=R.key,he=R.ref,ge=R._owner;if(L!=null){if(L.ref!==void 0&&(he=L.ref,ge=S.current),L.key!==void 0&&(oe=""+L.key),R.type&&R.type.defaultProps)var de=R.type.defaultProps;for(te in L)w.call(L,te)&&!N.hasOwnProperty(te)&&(ie[te]=L[te]===void 0&&de!==void 0?de[te]:L[te])}var te=arguments.length-2;if(te===1)ie.children=G;else if(1<te){de=Array(te);for(var me=0;me<te;me++)de[me]=arguments[me+2];ie.children=de}return{$$typeof:e,type:R.type,key:oe,ref:he,props:ie,_owner:ge}},Le.createContext=function(R){return R={$$typeof:p,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:i,_context:R},R.Consumer=R},Le.createElement=P,Le.createFactory=function(R){var L=P.bind(null,R);return L.type=R,L},Le.createRef=function(){return{current:null}},Le.forwardRef=function(R){return{$$typeof:s,render:R}},Le.isValidElement=T,Le.lazy=function(R){return{$$typeof:m,_payload:{_status:-1,_result:R},_init:X}},Le.memo=function(R,L){return{$$typeof:f,type:R,compare:L===void 0?null:L}},Le.startTransition=function(R){var L=E.transition;E.transition={};try{R()}finally{E.transition=L}},Le.unstable_act=V,Le.useCallback=function(R,L){return Z.current.useCallback(R,L)},Le.useContext=function(R){return Z.current.useContext(R)},Le.useDebugValue=function(){},Le.useDeferredValue=function(R){return Z.current.useDeferredValue(R)},Le.useEffect=function(R,L){return Z.current.useEffect(R,L)},Le.useId=function(){return Z.current.useId()},Le.useImperativeHandle=function(R,L,G){return Z.current.useImperativeHandle(R,L,G)},Le.useInsertionEffect=function(R,L){return Z.current.useInsertionEffect(R,L)},Le.useLayoutEffect=function(R,L){return Z.current.useLayoutEffect(R,L)},Le.useMemo=function(R,L){return Z.current.useMemo(R,L)},Le.useReducer=function(R,L,G){return Z.current.useReducer(R,L,G)},Le.useRef=function(R){return Z.current.useRef(R)},Le.useState=function(R){return Z.current.useState(R)},Le.useSyncExternalStore=function(R,L,G){return Z.current.useSyncExternalStore(R,L,G)},Le.useTransition=function(){return Z.current.useTransition()},Le.version="18.3.1",Le}var uI;function sy(){return uI||(uI=1,hf.exports=pH()),hf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pI;function sH(){if(pI)return $u;pI=1;var e=sy(),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(s,c,f){var m,d={},v=null,y=null;f!==void 0&&(v=""+f),c.key!==void 0&&(v=""+c.key),c.ref!==void 0&&(y=c.ref);for(m in c)r.call(c,m)&&!i.hasOwnProperty(m)&&(d[m]=c[m]);if(s&&s.defaultProps)for(m in c=s.defaultProps,c)d[m]===void 0&&(d[m]=c[m]);return{$$typeof:n,type:s,key:v,ref:y,props:d,_owner:a.current}}return $u.Fragment=t,$u.jsx=p,$u.jsxs=p,$u}var sI;function lH(){return sI||(sI=1,mf.exports=sH()),mf.exports}var _=lH(),cl={},vf={exports:{}},vt={},gf={exports:{}},yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lI;function cH(){return lI||(lI=1,(function(e){function n(E,z){var V=E.length;E.push(z);e:for(;0<V;){var R=V-1>>>1,L=E[R];if(0<a(L,z))E[R]=z,E[V]=L,V=R;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var z=E[0],V=E.pop();if(V!==z){E[0]=V;e:for(var R=0,L=E.length,G=L>>>1;R<G;){var ie=2*(R+1)-1,oe=E[ie],he=ie+1,ge=E[he];if(0>a(oe,V))he<L&&0>a(ge,oe)?(E[R]=ge,E[he]=V,R=he):(E[R]=oe,E[ie]=V,R=ie);else if(he<L&&0>a(ge,V))E[R]=ge,E[he]=V,R=he;else break e}}return z}function a(E,z){var V=E.sortIndex-z.sortIndex;return V!==0?V:E.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var p=Date,s=p.now();e.unstable_now=function(){return p.now()-s}}var c=[],f=[],m=1,d=null,v=3,y=!1,B=!1,I=!1,b=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(E){for(var z=t(f);z!==null;){if(z.callback===null)r(f);else if(z.startTime<=E)r(f),z.sortIndex=z.expirationTime,n(c,z);else break;z=t(f)}}function O(E){if(I=!1,A(E),!B)if(t(c)!==null)B=!0,X(w);else{var z=t(f);z!==null&&Z(O,z.startTime-E)}}function w(E,z){B=!1,I&&(I=!1,W(P),P=-1),y=!0;var V=v;try{for(A(z),d=t(c);d!==null&&(!(d.expirationTime>z)||E&&!j());){var R=d.callback;if(typeof R=="function"){d.callback=null,v=d.priorityLevel;var L=R(d.expirationTime<=z);z=e.unstable_now(),typeof L=="function"?d.callback=L:d===t(c)&&r(c),A(z)}else r(c);d=t(c)}if(d!==null)var G=!0;else{var ie=t(f);ie!==null&&Z(O,ie.startTime-z),G=!1}return G}finally{d=null,v=V,y=!1}}var S=!1,N=null,P=-1,H=5,T=-1;function j(){return!(e.unstable_now()-T<H)}function k(){if(N!==null){var E=e.unstable_now();T=E;var z=!0;try{z=N(!0,E)}finally{z?F():(S=!1,N=null)}}else S=!1}var F;if(typeof M=="function")F=function(){M(k)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,Y=Q.port2;Q.port1.onmessage=k,F=function(){Y.postMessage(null)}}else F=function(){b(k,0)};function X(E){N=E,S||(S=!0,F())}function Z(E,z){P=b(function(){E(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){B||y||(B=!0,X(w))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(E){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var V=v;v=z;try{return E()}finally{v=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,z){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var V=v;v=E;try{return z()}finally{v=V}},e.unstable_scheduleCallback=function(E,z,V){var R=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?R+V:R):V=R,E){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=V+L,E={id:m++,callback:z,priorityLevel:E,startTime:V,expirationTime:L,sortIndex:-1},V>R?(E.sortIndex=V,n(f,E),t(c)===null&&E===t(f)&&(I?(W(P),P=-1):I=!0,Z(O,V-R))):(E.sortIndex=L,n(c,E),B||y||(B=!0,X(w))),E},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(E){var z=v;return function(){var V=v;v=z;try{return E.apply(this,arguments)}finally{v=V}}}})(yf)),yf}var cI;function fH(){return cI||(cI=1,gf.exports=cH()),gf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fI;function dH(){if(fI)return vt;fI=1;var e=sy(),n=fH();function t(o){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+o,l=1;l<arguments.length;l++)u+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+o+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function i(o,u){p(o,u),p(o+"Capture",u)}function p(o,u){for(a[o]=u,o=0;o<u.length;o++)r.add(u[o])}var s=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},d={};function v(o){return c.call(d,o)?!0:c.call(m,o)?!1:f.test(o)?d[o]=!0:(m[o]=!0,!1)}function y(o,u,l,h){if(l!==null&&l.type===0)return!1;switch(typeof u){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function B(o,u,l,h){if(u===null||typeof u>"u"||y(o,u,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!u;case 4:return u===!1;case 5:return isNaN(u);case 6:return isNaN(u)||1>u}return!1}function I(o,u,l,h,g,x,C){this.acceptsBooleans=u===2||u===3||u===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=o,this.type=u,this.sanitizeURL=x,this.removeEmptyString=C}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){b[o]=new I(o,0,!1,o,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var u=o[0];b[u]=new I(u,1,!1,o[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(o){b[o]=new I(o,2,!1,o.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){b[o]=new I(o,2,!1,o,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){b[o]=new I(o,3,!1,o.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(o){b[o]=new I(o,3,!0,o,null,!1,!1)}),["capture","download"].forEach(function(o){b[o]=new I(o,4,!1,o,null,!1,!1)}),["cols","rows","size","span"].forEach(function(o){b[o]=new I(o,6,!1,o,null,!1,!1)}),["rowSpan","start"].forEach(function(o){b[o]=new I(o,5,!1,o.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function M(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var u=o.replace(W,M);b[u]=new I(u,1,!1,o,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var u=o.replace(W,M);b[u]=new I(u,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(o){var u=o.replace(W,M);b[u]=new I(u,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!1,!1)}),b.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!0,!0)});function A(o,u,l,h){var g=b.hasOwnProperty(u)?b[u]:null;(g!==null?g.type!==0:h||!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(B(u,l,g,h)&&(l=null),h||g===null?v(u)&&(l===null?o.removeAttribute(u):o.setAttribute(u,""+l)):g.mustUseProperty?o[g.propertyName]=l===null?g.type===3?!1:"":l:(u=g.attributeName,h=g.attributeNamespace,l===null?o.removeAttribute(u):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,h?o.setAttributeNS(h,u,l):o.setAttribute(u,l))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),j=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),E=Symbol.iterator;function z(o){return o===null||typeof o!="object"?null:(o=E&&o[E]||o["@@iterator"],typeof o=="function"?o:null)}var V=Object.assign,R;function L(o){if(R===void 0)try{throw Error()}catch(l){var u=l.stack.trim().match(/\n( *(at )?)/);R=u&&u[1]||""}return`
`+R+o}var G=!1;function ie(o,u){if(!o||G)return"";G=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(u)if(u=function(){throw Error()},Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(ne){var h=ne}Reflect.construct(o,[],u)}else{try{u.call()}catch(ne){h=ne}o.call(u.prototype)}else{try{throw Error()}catch(ne){h=ne}o()}}catch(ne){if(ne&&h&&typeof ne.stack=="string"){for(var g=ne.stack.split(`
`),x=h.stack.split(`
`),C=g.length-1,$=x.length-1;1<=C&&0<=$&&g[C]!==x[$];)$--;for(;1<=C&&0<=$;C--,$--)if(g[C]!==x[$]){if(C!==1||$!==1)do if(C--,$--,0>$||g[C]!==x[$]){var q=`
`+g[C].replace(" at new "," at ");return o.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",o.displayName)),q}while(1<=C&&0<=$);break}}}finally{G=!1,Error.prepareStackTrace=l}return(o=o?o.displayName||o.name:"")?L(o):""}function oe(o){switch(o.tag){case 5:return L(o.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return o=ie(o.type,!1),o;case 11:return o=ie(o.type.render,!1),o;case 1:return o=ie(o.type,!0),o;default:return""}}function he(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case N:return"Fragment";case S:return"Portal";case H:return"Profiler";case P:return"StrictMode";case F:return"Suspense";case Q:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case j:return(o.displayName||"Context")+".Consumer";case T:return(o._context.displayName||"Context")+".Provider";case k:var u=o.render;return o=o.displayName,o||(o=u.displayName||u.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case Y:return u=o.displayName||null,u!==null?u:he(o.type)||"Memo";case X:u=o._payload,o=o._init;try{return he(o(u))}catch{}}return null}function ge(o){var u=o.type;switch(o.tag){case 24:return"Cache";case 9:return(u.displayName||"Context")+".Consumer";case 10:return(u._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=u.render,o=o.displayName||o.name||"",u.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return u;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(u);case 8:return u===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u}return null}function de(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function te(o){var u=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(u==="checkbox"||u==="radio")}function me(o){var u=te(o)?"checked":"value",l=Object.getOwnPropertyDescriptor(o.constructor.prototype,u),h=""+o[u];if(!o.hasOwnProperty(u)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,x=l.set;return Object.defineProperty(o,u,{configurable:!0,get:function(){return g.call(this)},set:function(C){h=""+C,x.call(this,C)}}),Object.defineProperty(o,u,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(C){h=""+C},stopTracking:function(){o._valueTracker=null,delete o[u]}}}}function fe(o){o._valueTracker||(o._valueTracker=me(o))}function re(o){if(!o)return!1;var u=o._valueTracker;if(!u)return!0;var l=u.getValue(),h="";return o&&(h=te(o)?o.checked?"true":"false":o.value),o=h,o!==l?(u.setValue(o),!0):!1}function Te(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function Pe(o,u){var l=u.checked;return V({},u,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??o._wrapperState.initialChecked})}function He(o,u){var l=u.defaultValue==null?"":u.defaultValue,h=u.checked!=null?u.checked:u.defaultChecked;l=de(u.value!=null?u.value:l),o._wrapperState={initialChecked:h,initialValue:l,controlled:u.type==="checkbox"||u.type==="radio"?u.checked!=null:u.value!=null}}function Me(o,u){u=u.checked,u!=null&&A(o,"checked",u,!1)}function Fe(o,u){Me(o,u);var l=de(u.value),h=u.type;if(l!=null)h==="number"?(l===0&&o.value===""||o.value!=l)&&(o.value=""+l):o.value!==""+l&&(o.value=""+l);else if(h==="submit"||h==="reset"){o.removeAttribute("value");return}u.hasOwnProperty("value")?qe(o,u.type,l):u.hasOwnProperty("defaultValue")&&qe(o,u.type,de(u.defaultValue)),u.checked==null&&u.defaultChecked!=null&&(o.defaultChecked=!!u.defaultChecked)}function De(o,u,l){if(u.hasOwnProperty("value")||u.hasOwnProperty("defaultValue")){var h=u.type;if(!(h!=="submit"&&h!=="reset"||u.value!==void 0&&u.value!==null))return;u=""+o._wrapperState.initialValue,l||u===o.value||(o.value=u),o.defaultValue=u}l=o.name,l!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,l!==""&&(o.name=l)}function qe(o,u,l){(u!=="number"||Te(o.ownerDocument)!==o)&&(l==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+l&&(o.defaultValue=""+l))}var Ke=Array.isArray;function xn(o,u,l,h){if(o=o.options,u){u={};for(var g=0;g<l.length;g++)u["$"+l[g]]=!0;for(l=0;l<o.length;l++)g=u.hasOwnProperty("$"+o[l].value),o[l].selected!==g&&(o[l].selected=g),g&&h&&(o[l].defaultSelected=!0)}else{for(l=""+de(l),u=null,g=0;g<o.length;g++){if(o[g].value===l){o[g].selected=!0,h&&(o[g].defaultSelected=!0);return}u!==null||o[g].disabled||(u=o[g])}u!==null&&(u.selected=!0)}}function gn(o,u){if(u.dangerouslySetInnerHTML!=null)throw Error(t(91));return V({},u,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function Ot(o,u){var l=u.value;if(l==null){if(l=u.children,u=u.defaultValue,l!=null){if(u!=null)throw Error(t(92));if(Ke(l)){if(1<l.length)throw Error(t(93));l=l[0]}u=l}u==null&&(u=""),l=u}o._wrapperState={initialValue:de(l)}}function yn(o,u){var l=de(u.value),h=de(u.defaultValue);l!=null&&(l=""+l,l!==o.value&&(o.value=l),u.defaultValue==null&&o.defaultValue!==l&&(o.defaultValue=l)),h!=null&&(o.defaultValue=""+h)}function Qn(o){var u=o.textContent;u===o._wrapperState.initialValue&&u!==""&&u!==null&&(o.value=u)}function wn(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jn(o,u){return o==null||o==="http://www.w3.org/1999/xhtml"?wn(u):o==="http://www.w3.org/2000/svg"&&u==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var lt,Mo=(function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(u,l,h,g){MSApp.execUnsafeLocalFunction(function(){return o(u,l,h,g)})}:o})(function(o,u){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=u;else{for(lt=lt||document.createElement("div"),lt.innerHTML="<svg>"+u.valueOf().toString()+"</svg>",u=lt.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;u.firstChild;)o.appendChild(u.firstChild)}});function na(o,u){if(u){var l=o.firstChild;if(l&&l===o.lastChild&&l.nodeType===3){l.nodeValue=u;return}}o.textContent=u}var Ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ct=["Webkit","ms","Moz","O"];Object.keys(Ht).forEach(function(o){Ct.forEach(function(u){u=u+o.charAt(0).toUpperCase()+o.substring(1),Ht[u]=Ht[o]})});function ta(o,u,l){return u==null||typeof u=="boolean"||u===""?"":l||typeof u!="number"||u===0||Ht.hasOwnProperty(o)&&Ht[o]?(""+u).trim():u+"px"}function ru(o,u){o=o.style;for(var l in u)if(u.hasOwnProperty(l)){var h=l.indexOf("--")===0,g=ta(l,u[l],h);l==="float"&&(l="cssFloat"),h?o.setProperty(l,g):o[l]=g}}var l_=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wc(o,u){if(u){if(l_[o]&&(u.children!=null||u.dangerouslySetInnerHTML!=null))throw Error(t(137,o));if(u.dangerouslySetInnerHTML!=null){if(u.children!=null)throw Error(t(60));if(typeof u.dangerouslySetInnerHTML!="object"||!("__html"in u.dangerouslySetInnerHTML))throw Error(t(61))}if(u.style!=null&&typeof u.style!="object")throw Error(t(62))}}function Sc(o,u){if(o.indexOf("-")===-1)return typeof u.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mc=null;function Ac(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var _c=null,Ao=null,_o=null;function w6(o){if(o=Wu(o)){if(typeof _c!="function")throw Error(t(280));var u=o.stateNode;u&&(u=Ws(u),_c(o.stateNode,o.type,u))}}function P6(o){Ao?_o?_o.push(o):_o=[o]:Ao=o}function W6(){if(Ao){var o=Ao,u=_o;if(_o=Ao=null,w6(o),u)for(o=0;o<u.length;o++)w6(u[o])}}function S6(o,u){return o(u)}function M6(){}var Oc=!1;function A6(o,u,l){if(Oc)return o(u,l);Oc=!0;try{return S6(o,u,l)}finally{Oc=!1,(Ao!==null||_o!==null)&&(M6(),W6())}}function au(o,u){var l=o.stateNode;if(l===null)return null;var h=Ws(l);if(h===null)return null;l=h[u];e:switch(u){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(o=o.type,h=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!h;break e;default:o=!1}if(o)return null;if(l&&typeof l!="function")throw Error(t(231,u,typeof l));return l}var Hc=!1;if(s)try{var ou={};Object.defineProperty(ou,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",ou,ou),window.removeEventListener("test",ou,ou)}catch{Hc=!1}function c_(o,u,l,h,g,x,C,$,q){var ne=Array.prototype.slice.call(arguments,3);try{u.apply(l,ne)}catch(pe){this.onError(pe)}}var iu=!1,rs=null,as=!1,Cc=null,f_={onError:function(o){iu=!0,rs=o}};function d_(o,u,l,h,g,x,C,$,q){iu=!1,rs=null,c_.apply(f_,arguments)}function m_(o,u,l,h,g,x,C,$,q){if(d_.apply(this,arguments),iu){if(iu){var ne=rs;iu=!1,rs=null}else throw Error(t(198));as||(as=!0,Cc=ne)}}function qa(o){var u=o,l=o;if(o.alternate)for(;u.return;)u=u.return;else{o=u;do u=o,(u.flags&4098)!==0&&(l=u.return),o=u.return;while(o)}return u.tag===3?l:null}function _6(o){if(o.tag===13){var u=o.memoizedState;if(u===null&&(o=o.alternate,o!==null&&(u=o.memoizedState)),u!==null)return u.dehydrated}return null}function O6(o){if(qa(o)!==o)throw Error(t(188))}function h_(o){var u=o.alternate;if(!u){if(u=qa(o),u===null)throw Error(t(188));return u!==o?null:o}for(var l=o,h=u;;){var g=l.return;if(g===null)break;var x=g.alternate;if(x===null){if(h=g.return,h!==null){l=h;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===l)return O6(g),o;if(x===h)return O6(g),u;x=x.sibling}throw Error(t(188))}if(l.return!==h.return)l=g,h=x;else{for(var C=!1,$=g.child;$;){if($===l){C=!0,l=g,h=x;break}if($===h){C=!0,h=g,l=x;break}$=$.sibling}if(!C){for($=x.child;$;){if($===l){C=!0,l=x,h=g;break}if($===h){C=!0,h=x,l=g;break}$=$.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?o:u}function H6(o){return o=h_(o),o!==null?C6(o):null}function C6(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var u=C6(o);if(u!==null)return u;o=o.sibling}return null}var N6=n.unstable_scheduleCallback,R6=n.unstable_cancelCallback,v_=n.unstable_shouldYield,g_=n.unstable_requestPaint,Pn=n.unstable_now,y_=n.unstable_getCurrentPriorityLevel,Nc=n.unstable_ImmediatePriority,k6=n.unstable_UserBlockingPriority,os=n.unstable_NormalPriority,b_=n.unstable_LowPriority,T6=n.unstable_IdlePriority,is=null,fr=null;function I_(o){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(is,o,void 0,(o.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:w_,B_=Math.log,x_=Math.LN2;function w_(o){return o>>>=0,o===0?32:31-(B_(o)/x_|0)|0}var us=64,ps=4194304;function uu(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function ss(o,u){var l=o.pendingLanes;if(l===0)return 0;var h=0,g=o.suspendedLanes,x=o.pingedLanes,C=l&268435455;if(C!==0){var $=C&~g;$!==0?h=uu($):(x&=C,x!==0&&(h=uu(x)))}else C=l&~g,C!==0?h=uu(C):x!==0&&(h=uu(x));if(h===0)return 0;if(u!==0&&u!==h&&(u&g)===0&&(g=h&-h,x=u&-u,g>=x||g===16&&(x&4194240)!==0))return u;if((h&4)!==0&&(h|=l&16),u=o.entangledLanes,u!==0)for(o=o.entanglements,u&=h;0<u;)l=31-Xt(u),g=1<<l,h|=o[l],u&=~g;return h}function P_(o,u){switch(o){case 1:case 2:case 4:return u+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W_(o,u){for(var l=o.suspendedLanes,h=o.pingedLanes,g=o.expirationTimes,x=o.pendingLanes;0<x;){var C=31-Xt(x),$=1<<C,q=g[C];q===-1?(($&l)===0||($&h)!==0)&&(g[C]=P_($,u)):q<=u&&(o.expiredLanes|=$),x&=~$}}function Rc(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function E6(){var o=us;return us<<=1,(us&4194240)===0&&(us=64),o}function kc(o){for(var u=[],l=0;31>l;l++)u.push(o);return u}function pu(o,u,l){o.pendingLanes|=u,u!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,u=31-Xt(u),o[u]=l}function S_(o,u){var l=o.pendingLanes&~u;o.pendingLanes=u,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=u,o.mutableReadLanes&=u,o.entangledLanes&=u,u=o.entanglements;var h=o.eventTimes;for(o=o.expirationTimes;0<l;){var g=31-Xt(l),x=1<<g;u[g]=0,h[g]=-1,o[g]=-1,l&=~x}}function Tc(o,u){var l=o.entangledLanes|=u;for(o=o.entanglements;l;){var h=31-Xt(l),g=1<<h;g&u|o[h]&u&&(o[h]|=u),l&=~g}}var Ze=0;function D6(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var j6,Ec,$6,L6,F6,Dc=!1,ls=[],ra=null,aa=null,oa=null,su=new Map,lu=new Map,ia=[],M_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function q6(o,u){switch(o){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":su.delete(u.pointerId);break;case"gotpointercapture":case"lostpointercapture":lu.delete(u.pointerId)}}function cu(o,u,l,h,g,x){return o===null||o.nativeEvent!==x?(o={blockedOn:u,domEventName:l,eventSystemFlags:h,nativeEvent:x,targetContainers:[g]},u!==null&&(u=Wu(u),u!==null&&Ec(u)),o):(o.eventSystemFlags|=h,u=o.targetContainers,g!==null&&u.indexOf(g)===-1&&u.push(g),o)}function A_(o,u,l,h,g){switch(u){case"focusin":return ra=cu(ra,o,u,l,h,g),!0;case"dragenter":return aa=cu(aa,o,u,l,h,g),!0;case"mouseover":return oa=cu(oa,o,u,l,h,g),!0;case"pointerover":var x=g.pointerId;return su.set(x,cu(su.get(x)||null,o,u,l,h,g)),!0;case"gotpointercapture":return x=g.pointerId,lu.set(x,cu(lu.get(x)||null,o,u,l,h,g)),!0}return!1}function z6(o){var u=za(o.target);if(u!==null){var l=qa(u);if(l!==null){if(u=l.tag,u===13){if(u=_6(l),u!==null){o.blockedOn=u,F6(o.priority,function(){$6(l)});return}}else if(u===3&&l.stateNode.current.memoizedState.isDehydrated){o.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}o.blockedOn=null}function cs(o){if(o.blockedOn!==null)return!1;for(var u=o.targetContainers;0<u.length;){var l=$c(o.domEventName,o.eventSystemFlags,u[0],o.nativeEvent);if(l===null){l=o.nativeEvent;var h=new l.constructor(l.type,l);Mc=h,l.target.dispatchEvent(h),Mc=null}else return u=Wu(l),u!==null&&Ec(u),o.blockedOn=l,!1;u.shift()}return!0}function U6(o,u,l){cs(o)&&l.delete(u)}function __(){Dc=!1,ra!==null&&cs(ra)&&(ra=null),aa!==null&&cs(aa)&&(aa=null),oa!==null&&cs(oa)&&(oa=null),su.forEach(U6),lu.forEach(U6)}function fu(o,u){o.blockedOn===u&&(o.blockedOn=null,Dc||(Dc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,__)))}function du(o){function u(g){return fu(g,o)}if(0<ls.length){fu(ls[0],o);for(var l=1;l<ls.length;l++){var h=ls[l];h.blockedOn===o&&(h.blockedOn=null)}}for(ra!==null&&fu(ra,o),aa!==null&&fu(aa,o),oa!==null&&fu(oa,o),su.forEach(u),lu.forEach(u),l=0;l<ia.length;l++)h=ia[l],h.blockedOn===o&&(h.blockedOn=null);for(;0<ia.length&&(l=ia[0],l.blockedOn===null);)z6(l),l.blockedOn===null&&ia.shift()}var Oo=O.ReactCurrentBatchConfig,fs=!0;function O_(o,u,l,h){var g=Ze,x=Oo.transition;Oo.transition=null;try{Ze=1,jc(o,u,l,h)}finally{Ze=g,Oo.transition=x}}function H_(o,u,l,h){var g=Ze,x=Oo.transition;Oo.transition=null;try{Ze=4,jc(o,u,l,h)}finally{Ze=g,Oo.transition=x}}function jc(o,u,l,h){if(fs){var g=$c(o,u,l,h);if(g===null)r2(o,u,h,ds,l),q6(o,h);else if(A_(g,o,u,l,h))h.stopPropagation();else if(q6(o,h),u&4&&-1<M_.indexOf(o)){for(;g!==null;){var x=Wu(g);if(x!==null&&j6(x),x=$c(o,u,l,h),x===null&&r2(o,u,h,ds,l),x===g)break;g=x}g!==null&&h.stopPropagation()}else r2(o,u,h,null,l)}}var ds=null;function $c(o,u,l,h){if(ds=null,o=Ac(h),o=za(o),o!==null)if(u=qa(o),u===null)o=null;else if(l=u.tag,l===13){if(o=_6(u),o!==null)return o;o=null}else if(l===3){if(u.stateNode.current.memoizedState.isDehydrated)return u.tag===3?u.stateNode.containerInfo:null;o=null}else u!==o&&(o=null);return ds=o,null}function V6(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y_()){case Nc:return 1;case k6:return 4;case os:case b_:return 16;case T6:return 536870912;default:return 16}default:return 16}}var ua=null,Lc=null,ms=null;function G6(){if(ms)return ms;var o,u=Lc,l=u.length,h,g="value"in ua?ua.value:ua.textContent,x=g.length;for(o=0;o<l&&u[o]===g[o];o++);var C=l-o;for(h=1;h<=C&&u[l-h]===g[x-h];h++);return ms=g.slice(o,1<h?1-h:void 0)}function hs(o){var u=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&u===13&&(o=13)):o=u,o===10&&(o=13),32<=o||o===13?o:0}function vs(){return!0}function K6(){return!1}function bt(o){function u(l,h,g,x,C){this._reactName=l,this._targetInst=g,this.type=h,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var $ in o)o.hasOwnProperty($)&&(l=o[$],this[$]=l?l(x):x[$]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?vs:K6,this.isPropagationStopped=K6,this}return V(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=vs)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=vs)},persist:function(){},isPersistent:vs}),u}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=bt(Ho),mu=V({},Ho,{view:0,detail:0}),C_=bt(mu),qc,zc,hu,gs=V({},mu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==hu&&(hu&&o.type==="mousemove"?(qc=o.screenX-hu.screenX,zc=o.screenY-hu.screenY):zc=qc=0,hu=o),qc)},movementY:function(o){return"movementY"in o?o.movementY:zc}}),Q6=bt(gs),N_=V({},gs,{dataTransfer:0}),R_=bt(N_),k_=V({},mu,{relatedTarget:0}),Uc=bt(k_),T_=V({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),E_=bt(T_),D_=V({},Ho,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),j_=bt(D_),$_=V({},Ho,{data:0}),Y6=bt($_),L_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z_(o){var u=this.nativeEvent;return u.getModifierState?u.getModifierState(o):(o=q_[o])?!!u[o]:!1}function Vc(){return z_}var U_=V({},mu,{key:function(o){if(o.key){var u=L_[o.key]||o.key;if(u!=="Unidentified")return u}return o.type==="keypress"?(o=hs(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?F_[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(o){return o.type==="keypress"?hs(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?hs(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),V_=bt(U_),G_=V({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),X6=bt(G_),K_=V({},mu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),Q_=bt(K_),Y_=V({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),X_=bt(Y_),Z_=V({},gs,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),J_=bt(Z_),eO=[9,13,27,32],Gc=s&&"CompositionEvent"in window,vu=null;s&&"documentMode"in document&&(vu=document.documentMode);var nO=s&&"TextEvent"in window&&!vu,Z6=s&&(!Gc||vu&&8<vu&&11>=vu),J6=" ",eb=!1;function nb(o,u){switch(o){case"keyup":return eO.indexOf(u.keyCode)!==-1;case"keydown":return u.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tb(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var Co=!1;function tO(o,u){switch(o){case"compositionend":return tb(u);case"keypress":return u.which!==32?null:(eb=!0,J6);case"textInput":return o=u.data,o===J6&&eb?null:o;default:return null}}function rO(o,u){if(Co)return o==="compositionend"||!Gc&&nb(o,u)?(o=G6(),ms=Lc=ua=null,Co=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(u.ctrlKey||u.altKey||u.metaKey)||u.ctrlKey&&u.altKey){if(u.char&&1<u.char.length)return u.char;if(u.which)return String.fromCharCode(u.which)}return null;case"compositionend":return Z6&&u.locale!=="ko"?null:u.data;default:return null}}var aO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rb(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u==="input"?!!aO[o.type]:u==="textarea"}function ab(o,u,l,h){P6(h),u=xs(u,"onChange"),0<u.length&&(l=new Fc("onChange","change",null,l,h),o.push({event:l,listeners:u}))}var gu=null,yu=null;function oO(o){xb(o,0)}function ys(o){var u=Eo(o);if(re(u))return o}function iO(o,u){if(o==="change")return u}var ob=!1;if(s){var Kc;if(s){var Qc="oninput"in document;if(!Qc){var ib=document.createElement("div");ib.setAttribute("oninput","return;"),Qc=typeof ib.oninput=="function"}Kc=Qc}else Kc=!1;ob=Kc&&(!document.documentMode||9<document.documentMode)}function ub(){gu&&(gu.detachEvent("onpropertychange",pb),yu=gu=null)}function pb(o){if(o.propertyName==="value"&&ys(yu)){var u=[];ab(u,yu,o,Ac(o)),A6(oO,u)}}function uO(o,u,l){o==="focusin"?(ub(),gu=u,yu=l,gu.attachEvent("onpropertychange",pb)):o==="focusout"&&ub()}function pO(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return ys(yu)}function sO(o,u){if(o==="click")return ys(u)}function lO(o,u){if(o==="input"||o==="change")return ys(u)}function cO(o,u){return o===u&&(o!==0||1/o===1/u)||o!==o&&u!==u}var Zt=typeof Object.is=="function"?Object.is:cO;function bu(o,u){if(Zt(o,u))return!0;if(typeof o!="object"||o===null||typeof u!="object"||u===null)return!1;var l=Object.keys(o),h=Object.keys(u);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var g=l[h];if(!c.call(u,g)||!Zt(o[g],u[g]))return!1}return!0}function sb(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function lb(o,u){var l=sb(o);o=0;for(var h;l;){if(l.nodeType===3){if(h=o+l.textContent.length,o<=u&&h>=u)return{node:l,offset:u-o};o=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=sb(l)}}function cb(o,u){return o&&u?o===u?!0:o&&o.nodeType===3?!1:u&&u.nodeType===3?cb(o,u.parentNode):"contains"in o?o.contains(u):o.compareDocumentPosition?!!(o.compareDocumentPosition(u)&16):!1:!1}function fb(){for(var o=window,u=Te();u instanceof o.HTMLIFrameElement;){try{var l=typeof u.contentWindow.location.href=="string"}catch{l=!1}if(l)o=u.contentWindow;else break;u=Te(o.document)}return u}function Yc(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u&&(u==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||u==="textarea"||o.contentEditable==="true")}function fO(o){var u=fb(),l=o.focusedElem,h=o.selectionRange;if(u!==l&&l&&l.ownerDocument&&cb(l.ownerDocument.documentElement,l)){if(h!==null&&Yc(l)){if(u=h.start,o=h.end,o===void 0&&(o=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(o,l.value.length);else if(o=(u=l.ownerDocument||document)&&u.defaultView||window,o.getSelection){o=o.getSelection();var g=l.textContent.length,x=Math.min(h.start,g);h=h.end===void 0?x:Math.min(h.end,g),!o.extend&&x>h&&(g=h,h=x,x=g),g=lb(l,x);var C=lb(l,h);g&&C&&(o.rangeCount!==1||o.anchorNode!==g.node||o.anchorOffset!==g.offset||o.focusNode!==C.node||o.focusOffset!==C.offset)&&(u=u.createRange(),u.setStart(g.node,g.offset),o.removeAllRanges(),x>h?(o.addRange(u),o.extend(C.node,C.offset)):(u.setEnd(C.node,C.offset),o.addRange(u)))}}for(u=[],o=l;o=o.parentNode;)o.nodeType===1&&u.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<u.length;l++)o=u[l],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var dO=s&&"documentMode"in document&&11>=document.documentMode,No=null,Xc=null,Iu=null,Zc=!1;function db(o,u,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Zc||No==null||No!==Te(h)||(h=No,"selectionStart"in h&&Yc(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Iu&&bu(Iu,h)||(Iu=h,h=xs(Xc,"onSelect"),0<h.length&&(u=new Fc("onSelect","select",null,u,l),o.push({event:u,listeners:h}),u.target=No)))}function bs(o,u){var l={};return l[o.toLowerCase()]=u.toLowerCase(),l["Webkit"+o]="webkit"+u,l["Moz"+o]="moz"+u,l}var Ro={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionend:bs("Transition","TransitionEnd")},Jc={},mb={};s&&(mb=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function Is(o){if(Jc[o])return Jc[o];if(!Ro[o])return o;var u=Ro[o],l;for(l in u)if(u.hasOwnProperty(l)&&l in mb)return Jc[o]=u[l];return o}var hb=Is("animationend"),vb=Is("animationiteration"),gb=Is("animationstart"),yb=Is("transitionend"),bb=new Map,Ib="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pa(o,u){bb.set(o,u),i(u,[o])}for(var e2=0;e2<Ib.length;e2++){var n2=Ib[e2],mO=n2.toLowerCase(),hO=n2[0].toUpperCase()+n2.slice(1);pa(mO,"on"+hO)}pa(hb,"onAnimationEnd"),pa(vb,"onAnimationIteration"),pa(gb,"onAnimationStart"),pa("dblclick","onDoubleClick"),pa("focusin","onFocus"),pa("focusout","onBlur"),pa(yb,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vO=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bu));function Bb(o,u,l){var h=o.type||"unknown-event";o.currentTarget=l,m_(h,u,void 0,o),o.currentTarget=null}function xb(o,u){u=(u&4)!==0;for(var l=0;l<o.length;l++){var h=o[l],g=h.event;h=h.listeners;e:{var x=void 0;if(u)for(var C=h.length-1;0<=C;C--){var $=h[C],q=$.instance,ne=$.currentTarget;if($=$.listener,q!==x&&g.isPropagationStopped())break e;Bb(g,$,ne),x=q}else for(C=0;C<h.length;C++){if($=h[C],q=$.instance,ne=$.currentTarget,$=$.listener,q!==x&&g.isPropagationStopped())break e;Bb(g,$,ne),x=q}}}if(as)throw o=Cc,as=!1,Cc=null,o}function un(o,u){var l=u[s2];l===void 0&&(l=u[s2]=new Set);var h=o+"__bubble";l.has(h)||(wb(u,o,2,!1),l.add(h))}function t2(o,u,l){var h=0;u&&(h|=4),wb(l,o,h,u)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function xu(o){if(!o[Bs]){o[Bs]=!0,r.forEach(function(l){l!=="selectionchange"&&(vO.has(l)||t2(l,!1,o),t2(l,!0,o))});var u=o.nodeType===9?o:o.ownerDocument;u===null||u[Bs]||(u[Bs]=!0,t2("selectionchange",!1,u))}}function wb(o,u,l,h){switch(V6(u)){case 1:var g=O_;break;case 4:g=H_;break;default:g=jc}l=g.bind(null,u,l,o),g=void 0,!Hc||u!=="touchstart"&&u!=="touchmove"&&u!=="wheel"||(g=!0),h?g!==void 0?o.addEventListener(u,l,{capture:!0,passive:g}):o.addEventListener(u,l,!0):g!==void 0?o.addEventListener(u,l,{passive:g}):o.addEventListener(u,l,!1)}function r2(o,u,l,h,g){var x=h;if((u&1)===0&&(u&2)===0&&h!==null)e:for(;;){if(h===null)return;var C=h.tag;if(C===3||C===4){var $=h.stateNode.containerInfo;if($===g||$.nodeType===8&&$.parentNode===g)break;if(C===4)for(C=h.return;C!==null;){var q=C.tag;if((q===3||q===4)&&(q=C.stateNode.containerInfo,q===g||q.nodeType===8&&q.parentNode===g))return;C=C.return}for(;$!==null;){if(C=za($),C===null)return;if(q=C.tag,q===5||q===6){h=x=C;continue e}$=$.parentNode}}h=h.return}A6(function(){var ne=x,pe=Ac(l),se=[];e:{var ue=bb.get(o);if(ue!==void 0){var ve=Fc,Be=o;switch(o){case"keypress":if(hs(l)===0)break e;case"keydown":case"keyup":ve=V_;break;case"focusin":Be="focus",ve=Uc;break;case"focusout":Be="blur",ve=Uc;break;case"beforeblur":case"afterblur":ve=Uc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=Q6;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=R_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=Q_;break;case hb:case vb:case gb:ve=E_;break;case yb:ve=X_;break;case"scroll":ve=C_;break;case"wheel":ve=J_;break;case"copy":case"cut":case"paste":ve=j_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=X6}var We=(u&4)!==0,Wn=!We&&o==="scroll",J=We?ue!==null?ue+"Capture":null:ue;We=[];for(var U=ne,ee;U!==null;){ee=U;var ce=ee.stateNode;if(ee.tag===5&&ce!==null&&(ee=ce,J!==null&&(ce=au(U,J),ce!=null&&We.push(wu(U,ce,ee)))),Wn)break;U=U.return}0<We.length&&(ue=new ve(ue,Be,null,l,pe),se.push({event:ue,listeners:We}))}}if((u&7)===0){e:{if(ue=o==="mouseover"||o==="pointerover",ve=o==="mouseout"||o==="pointerout",ue&&l!==Mc&&(Be=l.relatedTarget||l.fromElement)&&(za(Be)||Be[Ar]))break e;if((ve||ue)&&(ue=pe.window===pe?pe:(ue=pe.ownerDocument)?ue.defaultView||ue.parentWindow:window,ve?(Be=l.relatedTarget||l.toElement,ve=ne,Be=Be?za(Be):null,Be!==null&&(Wn=qa(Be),Be!==Wn||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(ve=null,Be=ne),ve!==Be)){if(We=Q6,ce="onMouseLeave",J="onMouseEnter",U="mouse",(o==="pointerout"||o==="pointerover")&&(We=X6,ce="onPointerLeave",J="onPointerEnter",U="pointer"),Wn=ve==null?ue:Eo(ve),ee=Be==null?ue:Eo(Be),ue=new We(ce,U+"leave",ve,l,pe),ue.target=Wn,ue.relatedTarget=ee,ce=null,za(pe)===ne&&(We=new We(J,U+"enter",Be,l,pe),We.target=ee,We.relatedTarget=Wn,ce=We),Wn=ce,ve&&Be)n:{for(We=ve,J=Be,U=0,ee=We;ee;ee=ko(ee))U++;for(ee=0,ce=J;ce;ce=ko(ce))ee++;for(;0<U-ee;)We=ko(We),U--;for(;0<ee-U;)J=ko(J),ee--;for(;U--;){if(We===J||J!==null&&We===J.alternate)break n;We=ko(We),J=ko(J)}We=null}else We=null;ve!==null&&Pb(se,ue,ve,We,!1),Be!==null&&Wn!==null&&Pb(se,Wn,Be,We,!0)}}e:{if(ue=ne?Eo(ne):window,ve=ue.nodeName&&ue.nodeName.toLowerCase(),ve==="select"||ve==="input"&&ue.type==="file")var Ae=iO;else if(rb(ue))if(ob)Ae=lO;else{Ae=pO;var _e=uO}else(ve=ue.nodeName)&&ve.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&(Ae=sO);if(Ae&&(Ae=Ae(o,ne))){ab(se,Ae,l,pe);break e}_e&&_e(o,ue,ne),o==="focusout"&&(_e=ue._wrapperState)&&_e.controlled&&ue.type==="number"&&qe(ue,"number",ue.value)}switch(_e=ne?Eo(ne):window,o){case"focusin":(rb(_e)||_e.contentEditable==="true")&&(No=_e,Xc=ne,Iu=null);break;case"focusout":Iu=Xc=No=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,db(se,l,pe);break;case"selectionchange":if(dO)break;case"keydown":case"keyup":db(se,l,pe)}var Oe;if(Gc)e:{switch(o){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Co?nb(o,l)&&(ke="onCompositionEnd"):o==="keydown"&&l.keyCode===229&&(ke="onCompositionStart");ke&&(Z6&&l.locale!=="ko"&&(Co||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Co&&(Oe=G6()):(ua=pe,Lc="value"in ua?ua.value:ua.textContent,Co=!0)),_e=xs(ne,ke),0<_e.length&&(ke=new Y6(ke,o,null,l,pe),se.push({event:ke,listeners:_e}),Oe?ke.data=Oe:(Oe=tb(l),Oe!==null&&(ke.data=Oe)))),(Oe=nO?tO(o,l):rO(o,l))&&(ne=xs(ne,"onBeforeInput"),0<ne.length&&(pe=new Y6("onBeforeInput","beforeinput",null,l,pe),se.push({event:pe,listeners:ne}),pe.data=Oe))}xb(se,u)})}function wu(o,u,l){return{instance:o,listener:u,currentTarget:l}}function xs(o,u){for(var l=u+"Capture",h=[];o!==null;){var g=o,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=au(o,l),x!=null&&h.unshift(wu(o,x,g)),x=au(o,u),x!=null&&h.push(wu(o,x,g))),o=o.return}return h}function ko(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function Pb(o,u,l,h,g){for(var x=u._reactName,C=[];l!==null&&l!==h;){var $=l,q=$.alternate,ne=$.stateNode;if(q!==null&&q===h)break;$.tag===5&&ne!==null&&($=ne,g?(q=au(l,x),q!=null&&C.unshift(wu(l,q,$))):g||(q=au(l,x),q!=null&&C.push(wu(l,q,$)))),l=l.return}C.length!==0&&o.push({event:u,listeners:C})}var gO=/\r\n?/g,yO=/\u0000|\uFFFD/g;function Wb(o){return(typeof o=="string"?o:""+o).replace(gO,`
`).replace(yO,"")}function ws(o,u,l){if(u=Wb(u),Wb(o)!==u&&l)throw Error(t(425))}function Ps(){}var a2=null,o2=null;function i2(o,u){return o==="textarea"||o==="noscript"||typeof u.children=="string"||typeof u.children=="number"||typeof u.dangerouslySetInnerHTML=="object"&&u.dangerouslySetInnerHTML!==null&&u.dangerouslySetInnerHTML.__html!=null}var u2=typeof setTimeout=="function"?setTimeout:void 0,bO=typeof clearTimeout=="function"?clearTimeout:void 0,Sb=typeof Promise=="function"?Promise:void 0,IO=typeof queueMicrotask=="function"?queueMicrotask:typeof Sb<"u"?function(o){return Sb.resolve(null).then(o).catch(BO)}:u2;function BO(o){setTimeout(function(){throw o})}function p2(o,u){var l=u,h=0;do{var g=l.nextSibling;if(o.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(h===0){o.removeChild(g),du(u);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=g}while(l);du(u)}function sa(o){for(;o!=null;o=o.nextSibling){var u=o.nodeType;if(u===1||u===3)break;if(u===8){if(u=o.data,u==="$"||u==="$!"||u==="$?")break;if(u==="/$")return null}}return o}function Mb(o){o=o.previousSibling;for(var u=0;o;){if(o.nodeType===8){var l=o.data;if(l==="$"||l==="$!"||l==="$?"){if(u===0)return o;u--}else l==="/$"&&u++}o=o.previousSibling}return null}var To=Math.random().toString(36).slice(2),dr="__reactFiber$"+To,Pu="__reactProps$"+To,Ar="__reactContainer$"+To,s2="__reactEvents$"+To,xO="__reactListeners$"+To,wO="__reactHandles$"+To;function za(o){var u=o[dr];if(u)return u;for(var l=o.parentNode;l;){if(u=l[Ar]||l[dr]){if(l=u.alternate,u.child!==null||l!==null&&l.child!==null)for(o=Mb(o);o!==null;){if(l=o[dr])return l;o=Mb(o)}return u}o=l,l=o.parentNode}return null}function Wu(o){return o=o[dr]||o[Ar],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function Eo(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(t(33))}function Ws(o){return o[Pu]||null}var l2=[],Do=-1;function la(o){return{current:o}}function pn(o){0>Do||(o.current=l2[Do],l2[Do]=null,Do--)}function tn(o,u){Do++,l2[Do]=o.current,o.current=u}var ca={},Yn=la(ca),ct=la(!1),Ua=ca;function jo(o,u){var l=o.type.contextTypes;if(!l)return ca;var h=o.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===u)return h.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in l)g[x]=u[x];return h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=u,o.__reactInternalMemoizedMaskedChildContext=g),g}function ft(o){return o=o.childContextTypes,o!=null}function Ss(){pn(ct),pn(Yn)}function Ab(o,u,l){if(Yn.current!==ca)throw Error(t(168));tn(Yn,u),tn(ct,l)}function _b(o,u,l){var h=o.stateNode;if(u=u.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var g in h)if(!(g in u))throw Error(t(108,ge(o)||"Unknown",g));return V({},l,h)}function Ms(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||ca,Ua=Yn.current,tn(Yn,o),tn(ct,ct.current),!0}function Ob(o,u,l){var h=o.stateNode;if(!h)throw Error(t(169));l?(o=_b(o,u,Ua),h.__reactInternalMemoizedMergedChildContext=o,pn(ct),pn(Yn),tn(Yn,o)):pn(ct),tn(ct,l)}var _r=null,As=!1,c2=!1;function Hb(o){_r===null?_r=[o]:_r.push(o)}function PO(o){As=!0,Hb(o)}function fa(){if(!c2&&_r!==null){c2=!0;var o=0,u=Ze;try{var l=_r;for(Ze=1;o<l.length;o++){var h=l[o];do h=h(!0);while(h!==null)}_r=null,As=!1}catch(g){throw _r!==null&&(_r=_r.slice(o+1)),N6(Nc,fa),g}finally{Ze=u,c2=!1}}return null}var $o=[],Lo=0,_s=null,Os=0,Nt=[],Rt=0,Va=null,Or=1,Hr="";function Ga(o,u){$o[Lo++]=Os,$o[Lo++]=_s,_s=o,Os=u}function Cb(o,u,l){Nt[Rt++]=Or,Nt[Rt++]=Hr,Nt[Rt++]=Va,Va=o;var h=Or;o=Hr;var g=32-Xt(h)-1;h&=~(1<<g),l+=1;var x=32-Xt(u)+g;if(30<x){var C=g-g%5;x=(h&(1<<C)-1).toString(32),h>>=C,g-=C,Or=1<<32-Xt(u)+g|l<<g|h,Hr=x+o}else Or=1<<x|l<<g|h,Hr=o}function f2(o){o.return!==null&&(Ga(o,1),Cb(o,1,0))}function d2(o){for(;o===_s;)_s=$o[--Lo],$o[Lo]=null,Os=$o[--Lo],$o[Lo]=null;for(;o===Va;)Va=Nt[--Rt],Nt[Rt]=null,Hr=Nt[--Rt],Nt[Rt]=null,Or=Nt[--Rt],Nt[Rt]=null}var It=null,Bt=null,cn=!1,Jt=null;function Nb(o,u){var l=Dt(5,null,null,0);l.elementType="DELETED",l.stateNode=u,l.return=o,u=o.deletions,u===null?(o.deletions=[l],o.flags|=16):u.push(l)}function Rb(o,u){switch(o.tag){case 5:var l=o.type;return u=u.nodeType!==1||l.toLowerCase()!==u.nodeName.toLowerCase()?null:u,u!==null?(o.stateNode=u,It=o,Bt=sa(u.firstChild),!0):!1;case 6:return u=o.pendingProps===""||u.nodeType!==3?null:u,u!==null?(o.stateNode=u,It=o,Bt=null,!0):!1;case 13:return u=u.nodeType!==8?null:u,u!==null?(l=Va!==null?{id:Or,overflow:Hr}:null,o.memoizedState={dehydrated:u,treeContext:l,retryLane:1073741824},l=Dt(18,null,null,0),l.stateNode=u,l.return=o,o.child=l,It=o,Bt=null,!0):!1;default:return!1}}function m2(o){return(o.mode&1)!==0&&(o.flags&128)===0}function h2(o){if(cn){var u=Bt;if(u){var l=u;if(!Rb(o,u)){if(m2(o))throw Error(t(418));u=sa(l.nextSibling);var h=It;u&&Rb(o,u)?Nb(h,l):(o.flags=o.flags&-4097|2,cn=!1,It=o)}}else{if(m2(o))throw Error(t(418));o.flags=o.flags&-4097|2,cn=!1,It=o}}}function kb(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;It=o}function Hs(o){if(o!==It)return!1;if(!cn)return kb(o),cn=!0,!1;var u;if((u=o.tag!==3)&&!(u=o.tag!==5)&&(u=o.type,u=u!=="head"&&u!=="body"&&!i2(o.type,o.memoizedProps)),u&&(u=Bt)){if(m2(o))throw Tb(),Error(t(418));for(;u;)Nb(o,u),u=sa(u.nextSibling)}if(kb(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(t(317));e:{for(o=o.nextSibling,u=0;o;){if(o.nodeType===8){var l=o.data;if(l==="/$"){if(u===0){Bt=sa(o.nextSibling);break e}u--}else l!=="$"&&l!=="$!"&&l!=="$?"||u++}o=o.nextSibling}Bt=null}}else Bt=It?sa(o.stateNode.nextSibling):null;return!0}function Tb(){for(var o=Bt;o;)o=sa(o.nextSibling)}function Fo(){Bt=It=null,cn=!1}function v2(o){Jt===null?Jt=[o]:Jt.push(o)}var WO=O.ReactCurrentBatchConfig;function Su(o,u,l){if(o=l.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,o));var g=h,x=""+o;return u!==null&&u.ref!==null&&typeof u.ref=="function"&&u.ref._stringRef===x?u.ref:(u=function(C){var $=g.refs;C===null?delete $[x]:$[x]=C},u._stringRef=x,u)}if(typeof o!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,o))}return o}function Cs(o,u){throw o=Object.prototype.toString.call(u),Error(t(31,o==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":o))}function Eb(o){var u=o._init;return u(o._payload)}function Db(o){function u(J,U){if(o){var ee=J.deletions;ee===null?(J.deletions=[U],J.flags|=16):ee.push(U)}}function l(J,U){if(!o)return null;for(;U!==null;)u(J,U),U=U.sibling;return null}function h(J,U){for(J=new Map;U!==null;)U.key!==null?J.set(U.key,U):J.set(U.index,U),U=U.sibling;return J}function g(J,U){return J=Ia(J,U),J.index=0,J.sibling=null,J}function x(J,U,ee){return J.index=ee,o?(ee=J.alternate,ee!==null?(ee=ee.index,ee<U?(J.flags|=2,U):ee):(J.flags|=2,U)):(J.flags|=1048576,U)}function C(J){return o&&J.alternate===null&&(J.flags|=2),J}function $(J,U,ee,ce){return U===null||U.tag!==6?(U=pf(ee,J.mode,ce),U.return=J,U):(U=g(U,ee),U.return=J,U)}function q(J,U,ee,ce){var Ae=ee.type;return Ae===N?pe(J,U,ee.props.children,ce,ee.key):U!==null&&(U.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===X&&Eb(Ae)===U.type)?(ce=g(U,ee.props),ce.ref=Su(J,U,ee),ce.return=J,ce):(ce=tl(ee.type,ee.key,ee.props,null,J.mode,ce),ce.ref=Su(J,U,ee),ce.return=J,ce)}function ne(J,U,ee,ce){return U===null||U.tag!==4||U.stateNode.containerInfo!==ee.containerInfo||U.stateNode.implementation!==ee.implementation?(U=sf(ee,J.mode,ce),U.return=J,U):(U=g(U,ee.children||[]),U.return=J,U)}function pe(J,U,ee,ce,Ae){return U===null||U.tag!==7?(U=no(ee,J.mode,ce,Ae),U.return=J,U):(U=g(U,ee),U.return=J,U)}function se(J,U,ee){if(typeof U=="string"&&U!==""||typeof U=="number")return U=pf(""+U,J.mode,ee),U.return=J,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case w:return ee=tl(U.type,U.key,U.props,null,J.mode,ee),ee.ref=Su(J,null,U),ee.return=J,ee;case S:return U=sf(U,J.mode,ee),U.return=J,U;case X:var ce=U._init;return se(J,ce(U._payload),ee)}if(Ke(U)||z(U))return U=no(U,J.mode,ee,null),U.return=J,U;Cs(J,U)}return null}function ue(J,U,ee,ce){var Ae=U!==null?U.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ae!==null?null:$(J,U,""+ee,ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return ee.key===Ae?q(J,U,ee,ce):null;case S:return ee.key===Ae?ne(J,U,ee,ce):null;case X:return Ae=ee._init,ue(J,U,Ae(ee._payload),ce)}if(Ke(ee)||z(ee))return Ae!==null?null:pe(J,U,ee,ce,null);Cs(J,ee)}return null}function ve(J,U,ee,ce,Ae){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return J=J.get(ee)||null,$(U,J,""+ce,Ae);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case w:return J=J.get(ce.key===null?ee:ce.key)||null,q(U,J,ce,Ae);case S:return J=J.get(ce.key===null?ee:ce.key)||null,ne(U,J,ce,Ae);case X:var _e=ce._init;return ve(J,U,ee,_e(ce._payload),Ae)}if(Ke(ce)||z(ce))return J=J.get(ee)||null,pe(U,J,ce,Ae,null);Cs(U,ce)}return null}function Be(J,U,ee,ce){for(var Ae=null,_e=null,Oe=U,ke=U=0,Fn=null;Oe!==null&&ke<ee.length;ke++){Oe.index>ke?(Fn=Oe,Oe=null):Fn=Oe.sibling;var Ue=ue(J,Oe,ee[ke],ce);if(Ue===null){Oe===null&&(Oe=Fn);break}o&&Oe&&Ue.alternate===null&&u(J,Oe),U=x(Ue,U,ke),_e===null?Ae=Ue:_e.sibling=Ue,_e=Ue,Oe=Fn}if(ke===ee.length)return l(J,Oe),cn&&Ga(J,ke),Ae;if(Oe===null){for(;ke<ee.length;ke++)Oe=se(J,ee[ke],ce),Oe!==null&&(U=x(Oe,U,ke),_e===null?Ae=Oe:_e.sibling=Oe,_e=Oe);return cn&&Ga(J,ke),Ae}for(Oe=h(J,Oe);ke<ee.length;ke++)Fn=ve(Oe,J,ke,ee[ke],ce),Fn!==null&&(o&&Fn.alternate!==null&&Oe.delete(Fn.key===null?ke:Fn.key),U=x(Fn,U,ke),_e===null?Ae=Fn:_e.sibling=Fn,_e=Fn);return o&&Oe.forEach(function(Ba){return u(J,Ba)}),cn&&Ga(J,ke),Ae}function We(J,U,ee,ce){var Ae=z(ee);if(typeof Ae!="function")throw Error(t(150));if(ee=Ae.call(ee),ee==null)throw Error(t(151));for(var _e=Ae=null,Oe=U,ke=U=0,Fn=null,Ue=ee.next();Oe!==null&&!Ue.done;ke++,Ue=ee.next()){Oe.index>ke?(Fn=Oe,Oe=null):Fn=Oe.sibling;var Ba=ue(J,Oe,Ue.value,ce);if(Ba===null){Oe===null&&(Oe=Fn);break}o&&Oe&&Ba.alternate===null&&u(J,Oe),U=x(Ba,U,ke),_e===null?Ae=Ba:_e.sibling=Ba,_e=Ba,Oe=Fn}if(Ue.done)return l(J,Oe),cn&&Ga(J,ke),Ae;if(Oe===null){for(;!Ue.done;ke++,Ue=ee.next())Ue=se(J,Ue.value,ce),Ue!==null&&(U=x(Ue,U,ke),_e===null?Ae=Ue:_e.sibling=Ue,_e=Ue);return cn&&Ga(J,ke),Ae}for(Oe=h(J,Oe);!Ue.done;ke++,Ue=ee.next())Ue=ve(Oe,J,ke,Ue.value,ce),Ue!==null&&(o&&Ue.alternate!==null&&Oe.delete(Ue.key===null?ke:Ue.key),U=x(Ue,U,ke),_e===null?Ae=Ue:_e.sibling=Ue,_e=Ue);return o&&Oe.forEach(function(aH){return u(J,aH)}),cn&&Ga(J,ke),Ae}function Wn(J,U,ee,ce){if(typeof ee=="object"&&ee!==null&&ee.type===N&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:e:{for(var Ae=ee.key,_e=U;_e!==null;){if(_e.key===Ae){if(Ae=ee.type,Ae===N){if(_e.tag===7){l(J,_e.sibling),U=g(_e,ee.props.children),U.return=J,J=U;break e}}else if(_e.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===X&&Eb(Ae)===_e.type){l(J,_e.sibling),U=g(_e,ee.props),U.ref=Su(J,_e,ee),U.return=J,J=U;break e}l(J,_e);break}else u(J,_e);_e=_e.sibling}ee.type===N?(U=no(ee.props.children,J.mode,ce,ee.key),U.return=J,J=U):(ce=tl(ee.type,ee.key,ee.props,null,J.mode,ce),ce.ref=Su(J,U,ee),ce.return=J,J=ce)}return C(J);case S:e:{for(_e=ee.key;U!==null;){if(U.key===_e)if(U.tag===4&&U.stateNode.containerInfo===ee.containerInfo&&U.stateNode.implementation===ee.implementation){l(J,U.sibling),U=g(U,ee.children||[]),U.return=J,J=U;break e}else{l(J,U);break}else u(J,U);U=U.sibling}U=sf(ee,J.mode,ce),U.return=J,J=U}return C(J);case X:return _e=ee._init,Wn(J,U,_e(ee._payload),ce)}if(Ke(ee))return Be(J,U,ee,ce);if(z(ee))return We(J,U,ee,ce);Cs(J,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,U!==null&&U.tag===6?(l(J,U.sibling),U=g(U,ee),U.return=J,J=U):(l(J,U),U=pf(ee,J.mode,ce),U.return=J,J=U),C(J)):l(J,U)}return Wn}var qo=Db(!0),jb=Db(!1),Ns=la(null),Rs=null,zo=null,g2=null;function y2(){g2=zo=Rs=null}function b2(o){var u=Ns.current;pn(Ns),o._currentValue=u}function I2(o,u,l){for(;o!==null;){var h=o.alternate;if((o.childLanes&u)!==u?(o.childLanes|=u,h!==null&&(h.childLanes|=u)):h!==null&&(h.childLanes&u)!==u&&(h.childLanes|=u),o===l)break;o=o.return}}function Uo(o,u){Rs=o,g2=zo=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&u)!==0&&(dt=!0),o.firstContext=null)}function kt(o){var u=o._currentValue;if(g2!==o)if(o={context:o,memoizedValue:u,next:null},zo===null){if(Rs===null)throw Error(t(308));zo=o,Rs.dependencies={lanes:0,firstContext:o}}else zo=zo.next=o;return u}var Ka=null;function B2(o){Ka===null?Ka=[o]:Ka.push(o)}function $b(o,u,l,h){var g=u.interleaved;return g===null?(l.next=l,B2(u)):(l.next=g.next,g.next=l),u.interleaved=l,Cr(o,h)}function Cr(o,u){o.lanes|=u;var l=o.alternate;for(l!==null&&(l.lanes|=u),l=o,o=o.return;o!==null;)o.childLanes|=u,l=o.alternate,l!==null&&(l.childLanes|=u),l=o,o=o.return;return l.tag===3?l.stateNode:null}var da=!1;function x2(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lb(o,u){o=o.updateQueue,u.updateQueue===o&&(u.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Nr(o,u){return{eventTime:o,lane:u,tag:0,payload:null,callback:null,next:null}}function ma(o,u,l){var h=o.updateQueue;if(h===null)return null;if(h=h.shared,(ze&2)!==0){var g=h.pending;return g===null?u.next=u:(u.next=g.next,g.next=u),h.pending=u,Cr(o,l)}return g=h.interleaved,g===null?(u.next=u,B2(h)):(u.next=g.next,g.next=u),h.interleaved=u,Cr(o,l)}function ks(o,u,l){if(u=u.updateQueue,u!==null&&(u=u.shared,(l&4194240)!==0)){var h=u.lanes;h&=o.pendingLanes,l|=h,u.lanes=l,Tc(o,l)}}function Fb(o,u){var l=o.updateQueue,h=o.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var g=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?g=x=C:x=x.next=C,l=l.next}while(l!==null);x===null?g=x=u:x=x.next=u}else g=x=u;l={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:h.shared,effects:h.effects},o.updateQueue=l;return}o=l.lastBaseUpdate,o===null?l.firstBaseUpdate=u:o.next=u,l.lastBaseUpdate=u}function Ts(o,u,l,h){var g=o.updateQueue;da=!1;var x=g.firstBaseUpdate,C=g.lastBaseUpdate,$=g.shared.pending;if($!==null){g.shared.pending=null;var q=$,ne=q.next;q.next=null,C===null?x=ne:C.next=ne,C=q;var pe=o.alternate;pe!==null&&(pe=pe.updateQueue,$=pe.lastBaseUpdate,$!==C&&($===null?pe.firstBaseUpdate=ne:$.next=ne,pe.lastBaseUpdate=q))}if(x!==null){var se=g.baseState;C=0,pe=ne=q=null,$=x;do{var ue=$.lane,ve=$.eventTime;if((h&ue)===ue){pe!==null&&(pe=pe.next={eventTime:ve,lane:0,tag:$.tag,payload:$.payload,callback:$.callback,next:null});e:{var Be=o,We=$;switch(ue=u,ve=l,We.tag){case 1:if(Be=We.payload,typeof Be=="function"){se=Be.call(ve,se,ue);break e}se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=We.payload,ue=typeof Be=="function"?Be.call(ve,se,ue):Be,ue==null)break e;se=V({},se,ue);break e;case 2:da=!0}}$.callback!==null&&$.lane!==0&&(o.flags|=64,ue=g.effects,ue===null?g.effects=[$]:ue.push($))}else ve={eventTime:ve,lane:ue,tag:$.tag,payload:$.payload,callback:$.callback,next:null},pe===null?(ne=pe=ve,q=se):pe=pe.next=ve,C|=ue;if($=$.next,$===null){if($=g.shared.pending,$===null)break;ue=$,$=ue.next,ue.next=null,g.lastBaseUpdate=ue,g.shared.pending=null}}while(!0);if(pe===null&&(q=se),g.baseState=q,g.firstBaseUpdate=ne,g.lastBaseUpdate=pe,u=g.shared.interleaved,u!==null){g=u;do C|=g.lane,g=g.next;while(g!==u)}else x===null&&(g.shared.lanes=0);Xa|=C,o.lanes=C,o.memoizedState=se}}function qb(o,u,l){if(o=u.effects,u.effects=null,o!==null)for(u=0;u<o.length;u++){var h=o[u],g=h.callback;if(g!==null){if(h.callback=null,h=l,typeof g!="function")throw Error(t(191,g));g.call(h)}}}var Mu={},mr=la(Mu),Au=la(Mu),_u=la(Mu);function Qa(o){if(o===Mu)throw Error(t(174));return o}function w2(o,u){switch(tn(_u,u),tn(Au,o),tn(mr,Mu),o=u.nodeType,o){case 9:case 11:u=(u=u.documentElement)?u.namespaceURI:jn(null,"");break;default:o=o===8?u.parentNode:u,u=o.namespaceURI||null,o=o.tagName,u=jn(u,o)}pn(mr),tn(mr,u)}function Vo(){pn(mr),pn(Au),pn(_u)}function zb(o){Qa(_u.current);var u=Qa(mr.current),l=jn(u,o.type);u!==l&&(tn(Au,o),tn(mr,l))}function P2(o){Au.current===o&&(pn(mr),pn(Au))}var dn=la(0);function Es(o){for(var u=o;u!==null;){if(u.tag===13){var l=u.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return u}else if(u.tag===19&&u.memoizedProps.revealOrder!==void 0){if((u.flags&128)!==0)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var W2=[];function S2(){for(var o=0;o<W2.length;o++)W2[o]._workInProgressVersionPrimary=null;W2.length=0}var Ds=O.ReactCurrentDispatcher,M2=O.ReactCurrentBatchConfig,Ya=0,mn=null,Nn=null,$n=null,js=!1,Ou=!1,Hu=0,SO=0;function Xn(){throw Error(t(321))}function A2(o,u){if(u===null)return!1;for(var l=0;l<u.length&&l<o.length;l++)if(!Zt(o[l],u[l]))return!1;return!0}function _2(o,u,l,h,g,x){if(Ya=x,mn=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,Ds.current=o===null||o.memoizedState===null?OO:HO,o=l(h,g),Ou){x=0;do{if(Ou=!1,Hu=0,25<=x)throw Error(t(301));x+=1,$n=Nn=null,u.updateQueue=null,Ds.current=CO,o=l(h,g)}while(Ou)}if(Ds.current=Fs,u=Nn!==null&&Nn.next!==null,Ya=0,$n=Nn=mn=null,js=!1,u)throw Error(t(300));return o}function O2(){var o=Hu!==0;return Hu=0,o}function hr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $n===null?mn.memoizedState=$n=o:$n=$n.next=o,$n}function Tt(){if(Nn===null){var o=mn.alternate;o=o!==null?o.memoizedState:null}else o=Nn.next;var u=$n===null?mn.memoizedState:$n.next;if(u!==null)$n=u,Nn=o;else{if(o===null)throw Error(t(310));Nn=o,o={memoizedState:Nn.memoizedState,baseState:Nn.baseState,baseQueue:Nn.baseQueue,queue:Nn.queue,next:null},$n===null?mn.memoizedState=$n=o:$n=$n.next=o}return $n}function Cu(o,u){return typeof u=="function"?u(o):u}function H2(o){var u=Tt(),l=u.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=o;var h=Nn,g=h.baseQueue,x=l.pending;if(x!==null){if(g!==null){var C=g.next;g.next=x.next,x.next=C}h.baseQueue=g=x,l.pending=null}if(g!==null){x=g.next,h=h.baseState;var $=C=null,q=null,ne=x;do{var pe=ne.lane;if((Ya&pe)===pe)q!==null&&(q=q.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),h=ne.hasEagerState?ne.eagerState:o(h,ne.action);else{var se={lane:pe,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};q===null?($=q=se,C=h):q=q.next=se,mn.lanes|=pe,Xa|=pe}ne=ne.next}while(ne!==null&&ne!==x);q===null?C=h:q.next=$,Zt(h,u.memoizedState)||(dt=!0),u.memoizedState=h,u.baseState=C,u.baseQueue=q,l.lastRenderedState=h}if(o=l.interleaved,o!==null){g=o;do x=g.lane,mn.lanes|=x,Xa|=x,g=g.next;while(g!==o)}else g===null&&(l.lanes=0);return[u.memoizedState,l.dispatch]}function C2(o){var u=Tt(),l=u.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=o;var h=l.dispatch,g=l.pending,x=u.memoizedState;if(g!==null){l.pending=null;var C=g=g.next;do x=o(x,C.action),C=C.next;while(C!==g);Zt(x,u.memoizedState)||(dt=!0),u.memoizedState=x,u.baseQueue===null&&(u.baseState=x),l.lastRenderedState=x}return[x,h]}function Ub(){}function Vb(o,u){var l=mn,h=Tt(),g=u(),x=!Zt(h.memoizedState,g);if(x&&(h.memoizedState=g,dt=!0),h=h.queue,N2(Qb.bind(null,l,h,o),[o]),h.getSnapshot!==u||x||$n!==null&&$n.memoizedState.tag&1){if(l.flags|=2048,Nu(9,Kb.bind(null,l,h,g,u),void 0,null),Ln===null)throw Error(t(349));(Ya&30)!==0||Gb(l,u,g)}return g}function Gb(o,u,l){o.flags|=16384,o={getSnapshot:u,value:l},u=mn.updateQueue,u===null?(u={lastEffect:null,stores:null},mn.updateQueue=u,u.stores=[o]):(l=u.stores,l===null?u.stores=[o]:l.push(o))}function Kb(o,u,l,h){u.value=l,u.getSnapshot=h,Yb(u)&&Xb(o)}function Qb(o,u,l){return l(function(){Yb(u)&&Xb(o)})}function Yb(o){var u=o.getSnapshot;o=o.value;try{var l=u();return!Zt(o,l)}catch{return!0}}function Xb(o){var u=Cr(o,1);u!==null&&rr(u,o,1,-1)}function Zb(o){var u=hr();return typeof o=="function"&&(o=o()),u.memoizedState=u.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cu,lastRenderedState:o},u.queue=o,o=o.dispatch=_O.bind(null,mn,o),[u.memoizedState,o]}function Nu(o,u,l,h){return o={tag:o,create:u,destroy:l,deps:h,next:null},u=mn.updateQueue,u===null?(u={lastEffect:null,stores:null},mn.updateQueue=u,u.lastEffect=o.next=o):(l=u.lastEffect,l===null?u.lastEffect=o.next=o:(h=l.next,l.next=o,o.next=h,u.lastEffect=o)),o}function Jb(){return Tt().memoizedState}function $s(o,u,l,h){var g=hr();mn.flags|=o,g.memoizedState=Nu(1|u,l,void 0,h===void 0?null:h)}function Ls(o,u,l,h){var g=Tt();h=h===void 0?null:h;var x=void 0;if(Nn!==null){var C=Nn.memoizedState;if(x=C.destroy,h!==null&&A2(h,C.deps)){g.memoizedState=Nu(u,l,x,h);return}}mn.flags|=o,g.memoizedState=Nu(1|u,l,x,h)}function e1(o,u){return $s(8390656,8,o,u)}function N2(o,u){return Ls(2048,8,o,u)}function n1(o,u){return Ls(4,2,o,u)}function t1(o,u){return Ls(4,4,o,u)}function r1(o,u){if(typeof u=="function")return o=o(),u(o),function(){u(null)};if(u!=null)return o=o(),u.current=o,function(){u.current=null}}function a1(o,u,l){return l=l!=null?l.concat([o]):null,Ls(4,4,r1.bind(null,u,o),l)}function R2(){}function o1(o,u){var l=Tt();u=u===void 0?null:u;var h=l.memoizedState;return h!==null&&u!==null&&A2(u,h[1])?h[0]:(l.memoizedState=[o,u],o)}function i1(o,u){var l=Tt();u=u===void 0?null:u;var h=l.memoizedState;return h!==null&&u!==null&&A2(u,h[1])?h[0]:(o=o(),l.memoizedState=[o,u],o)}function u1(o,u,l){return(Ya&21)===0?(o.baseState&&(o.baseState=!1,dt=!0),o.memoizedState=l):(Zt(l,u)||(l=E6(),mn.lanes|=l,Xa|=l,o.baseState=!0),u)}function MO(o,u){var l=Ze;Ze=l!==0&&4>l?l:4,o(!0);var h=M2.transition;M2.transition={};try{o(!1),u()}finally{Ze=l,M2.transition=h}}function p1(){return Tt().memoizedState}function AO(o,u,l){var h=ya(o);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},s1(o))l1(u,l);else if(l=$b(o,u,l,h),l!==null){var g=rt();rr(l,o,h,g),c1(l,u,h)}}function _O(o,u,l){var h=ya(o),g={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(s1(o))l1(u,g);else{var x=o.alternate;if(o.lanes===0&&(x===null||x.lanes===0)&&(x=u.lastRenderedReducer,x!==null))try{var C=u.lastRenderedState,$=x(C,l);if(g.hasEagerState=!0,g.eagerState=$,Zt($,C)){var q=u.interleaved;q===null?(g.next=g,B2(u)):(g.next=q.next,q.next=g),u.interleaved=g;return}}catch{}finally{}l=$b(o,u,g,h),l!==null&&(g=rt(),rr(l,o,h,g),c1(l,u,h))}}function s1(o){var u=o.alternate;return o===mn||u!==null&&u===mn}function l1(o,u){Ou=js=!0;var l=o.pending;l===null?u.next=u:(u.next=l.next,l.next=u),o.pending=u}function c1(o,u,l){if((l&4194240)!==0){var h=u.lanes;h&=o.pendingLanes,l|=h,u.lanes=l,Tc(o,l)}}var Fs={readContext:kt,useCallback:Xn,useContext:Xn,useEffect:Xn,useImperativeHandle:Xn,useInsertionEffect:Xn,useLayoutEffect:Xn,useMemo:Xn,useReducer:Xn,useRef:Xn,useState:Xn,useDebugValue:Xn,useDeferredValue:Xn,useTransition:Xn,useMutableSource:Xn,useSyncExternalStore:Xn,useId:Xn,unstable_isNewReconciler:!1},OO={readContext:kt,useCallback:function(o,u){return hr().memoizedState=[o,u===void 0?null:u],o},useContext:kt,useEffect:e1,useImperativeHandle:function(o,u,l){return l=l!=null?l.concat([o]):null,$s(4194308,4,r1.bind(null,u,o),l)},useLayoutEffect:function(o,u){return $s(4194308,4,o,u)},useInsertionEffect:function(o,u){return $s(4,2,o,u)},useMemo:function(o,u){var l=hr();return u=u===void 0?null:u,o=o(),l.memoizedState=[o,u],o},useReducer:function(o,u,l){var h=hr();return u=l!==void 0?l(u):u,h.memoizedState=h.baseState=u,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:u},h.queue=o,o=o.dispatch=AO.bind(null,mn,o),[h.memoizedState,o]},useRef:function(o){var u=hr();return o={current:o},u.memoizedState=o},useState:Zb,useDebugValue:R2,useDeferredValue:function(o){return hr().memoizedState=o},useTransition:function(){var o=Zb(!1),u=o[0];return o=MO.bind(null,o[1]),hr().memoizedState=o,[u,o]},useMutableSource:function(){},useSyncExternalStore:function(o,u,l){var h=mn,g=hr();if(cn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=u(),Ln===null)throw Error(t(349));(Ya&30)!==0||Gb(h,u,l)}g.memoizedState=l;var x={value:l,getSnapshot:u};return g.queue=x,e1(Qb.bind(null,h,x,o),[o]),h.flags|=2048,Nu(9,Kb.bind(null,h,x,l,u),void 0,null),l},useId:function(){var o=hr(),u=Ln.identifierPrefix;if(cn){var l=Hr,h=Or;l=(h&~(1<<32-Xt(h)-1)).toString(32)+l,u=":"+u+"R"+l,l=Hu++,0<l&&(u+="H"+l.toString(32)),u+=":"}else l=SO++,u=":"+u+"r"+l.toString(32)+":";return o.memoizedState=u},unstable_isNewReconciler:!1},HO={readContext:kt,useCallback:o1,useContext:kt,useEffect:N2,useImperativeHandle:a1,useInsertionEffect:n1,useLayoutEffect:t1,useMemo:i1,useReducer:H2,useRef:Jb,useState:function(){return H2(Cu)},useDebugValue:R2,useDeferredValue:function(o){var u=Tt();return u1(u,Nn.memoizedState,o)},useTransition:function(){var o=H2(Cu)[0],u=Tt().memoizedState;return[o,u]},useMutableSource:Ub,useSyncExternalStore:Vb,useId:p1,unstable_isNewReconciler:!1},CO={readContext:kt,useCallback:o1,useContext:kt,useEffect:N2,useImperativeHandle:a1,useInsertionEffect:n1,useLayoutEffect:t1,useMemo:i1,useReducer:C2,useRef:Jb,useState:function(){return C2(Cu)},useDebugValue:R2,useDeferredValue:function(o){var u=Tt();return Nn===null?u.memoizedState=o:u1(u,Nn.memoizedState,o)},useTransition:function(){var o=C2(Cu)[0],u=Tt().memoizedState;return[o,u]},useMutableSource:Ub,useSyncExternalStore:Vb,useId:p1,unstable_isNewReconciler:!1};function er(o,u){if(o&&o.defaultProps){u=V({},u),o=o.defaultProps;for(var l in o)u[l]===void 0&&(u[l]=o[l]);return u}return u}function k2(o,u,l,h){u=o.memoizedState,l=l(h,u),l=l==null?u:V({},u,l),o.memoizedState=l,o.lanes===0&&(o.updateQueue.baseState=l)}var qs={isMounted:function(o){return(o=o._reactInternals)?qa(o)===o:!1},enqueueSetState:function(o,u,l){o=o._reactInternals;var h=rt(),g=ya(o),x=Nr(h,g);x.payload=u,l!=null&&(x.callback=l),u=ma(o,x,g),u!==null&&(rr(u,o,g,h),ks(u,o,g))},enqueueReplaceState:function(o,u,l){o=o._reactInternals;var h=rt(),g=ya(o),x=Nr(h,g);x.tag=1,x.payload=u,l!=null&&(x.callback=l),u=ma(o,x,g),u!==null&&(rr(u,o,g,h),ks(u,o,g))},enqueueForceUpdate:function(o,u){o=o._reactInternals;var l=rt(),h=ya(o),g=Nr(l,h);g.tag=2,u!=null&&(g.callback=u),u=ma(o,g,h),u!==null&&(rr(u,o,h,l),ks(u,o,h))}};function f1(o,u,l,h,g,x,C){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(h,x,C):u.prototype&&u.prototype.isPureReactComponent?!bu(l,h)||!bu(g,x):!0}function d1(o,u,l){var h=!1,g=ca,x=u.contextType;return typeof x=="object"&&x!==null?x=kt(x):(g=ft(u)?Ua:Yn.current,h=u.contextTypes,x=(h=h!=null)?jo(o,g):ca),u=new u(l,x),o.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=qs,o.stateNode=u,u._reactInternals=o,h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=g,o.__reactInternalMemoizedMaskedChildContext=x),u}function m1(o,u,l,h){o=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(l,h),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(l,h),u.state!==o&&qs.enqueueReplaceState(u,u.state,null)}function T2(o,u,l,h){var g=o.stateNode;g.props=l,g.state=o.memoizedState,g.refs={},x2(o);var x=u.contextType;typeof x=="object"&&x!==null?g.context=kt(x):(x=ft(u)?Ua:Yn.current,g.context=jo(o,x)),g.state=o.memoizedState,x=u.getDerivedStateFromProps,typeof x=="function"&&(k2(o,u,x,l),g.state=o.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(u=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),u!==g.state&&qs.enqueueReplaceState(g,g.state,null),Ts(o,l,g,h),g.state=o.memoizedState),typeof g.componentDidMount=="function"&&(o.flags|=4194308)}function Go(o,u){try{var l="",h=u;do l+=oe(h),h=h.return;while(h);var g=l}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:o,source:u,stack:g,digest:null}}function E2(o,u,l){return{value:o,source:null,stack:l??null,digest:u??null}}function D2(o,u){try{console.error(u.value)}catch(l){setTimeout(function(){throw l})}}var NO=typeof WeakMap=="function"?WeakMap:Map;function h1(o,u,l){l=Nr(-1,l),l.tag=3,l.payload={element:null};var h=u.value;return l.callback=function(){Ys||(Ys=!0,J2=h),D2(o,u)},l}function v1(o,u,l){l=Nr(-1,l),l.tag=3;var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var g=u.value;l.payload=function(){return h(g)},l.callback=function(){D2(o,u)}}var x=o.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){D2(o,u),typeof h!="function"&&(va===null?va=new Set([this]):va.add(this));var C=u.stack;this.componentDidCatch(u.value,{componentStack:C!==null?C:""})}),l}function g1(o,u,l){var h=o.pingCache;if(h===null){h=o.pingCache=new NO;var g=new Set;h.set(u,g)}else g=h.get(u),g===void 0&&(g=new Set,h.set(u,g));g.has(l)||(g.add(l),o=GO.bind(null,o,u,l),u.then(o,o))}function y1(o){do{var u;if((u=o.tag===13)&&(u=o.memoizedState,u=u!==null?u.dehydrated!==null:!0),u)return o;o=o.return}while(o!==null);return null}function b1(o,u,l,h,g){return(o.mode&1)===0?(o===u?o.flags|=65536:(o.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(u=Nr(-1,1),u.tag=2,ma(l,u,1))),l.lanes|=1),o):(o.flags|=65536,o.lanes=g,o)}var RO=O.ReactCurrentOwner,dt=!1;function tt(o,u,l,h){u.child=o===null?jb(u,null,l,h):qo(u,o.child,l,h)}function I1(o,u,l,h,g){l=l.render;var x=u.ref;return Uo(u,g),h=_2(o,u,l,h,x,g),l=O2(),o!==null&&!dt?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Rr(o,u,g)):(cn&&l&&f2(u),u.flags|=1,tt(o,u,h,g),u.child)}function B1(o,u,l,h,g){if(o===null){var x=l.type;return typeof x=="function"&&!uf(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(u.tag=15,u.type=x,x1(o,u,x,h,g)):(o=tl(l.type,null,h,u,u.mode,g),o.ref=u.ref,o.return=u,u.child=o)}if(x=o.child,(o.lanes&g)===0){var C=x.memoizedProps;if(l=l.compare,l=l!==null?l:bu,l(C,h)&&o.ref===u.ref)return Rr(o,u,g)}return u.flags|=1,o=Ia(x,h),o.ref=u.ref,o.return=u,u.child=o}function x1(o,u,l,h,g){if(o!==null){var x=o.memoizedProps;if(bu(x,h)&&o.ref===u.ref)if(dt=!1,u.pendingProps=h=x,(o.lanes&g)!==0)(o.flags&131072)!==0&&(dt=!0);else return u.lanes=o.lanes,Rr(o,u,g)}return j2(o,u,l,h,g)}function w1(o,u,l){var h=u.pendingProps,g=h.children,x=o!==null?o.memoizedState:null;if(h.mode==="hidden")if((u.mode&1)===0)u.memoizedState={baseLanes:0,cachePool:null,transitions:null},tn(Qo,xt),xt|=l;else{if((l&1073741824)===0)return o=x!==null?x.baseLanes|l:l,u.lanes=u.childLanes=1073741824,u.memoizedState={baseLanes:o,cachePool:null,transitions:null},u.updateQueue=null,tn(Qo,xt),xt|=o,null;u.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=x!==null?x.baseLanes:l,tn(Qo,xt),xt|=h}else x!==null?(h=x.baseLanes|l,u.memoizedState=null):h=l,tn(Qo,xt),xt|=h;return tt(o,u,g,l),u.child}function P1(o,u){var l=u.ref;(o===null&&l!==null||o!==null&&o.ref!==l)&&(u.flags|=512,u.flags|=2097152)}function j2(o,u,l,h,g){var x=ft(l)?Ua:Yn.current;return x=jo(u,x),Uo(u,g),l=_2(o,u,l,h,x,g),h=O2(),o!==null&&!dt?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Rr(o,u,g)):(cn&&h&&f2(u),u.flags|=1,tt(o,u,l,g),u.child)}function W1(o,u,l,h,g){if(ft(l)){var x=!0;Ms(u)}else x=!1;if(Uo(u,g),u.stateNode===null)Us(o,u),d1(u,l,h),T2(u,l,h,g),h=!0;else if(o===null){var C=u.stateNode,$=u.memoizedProps;C.props=$;var q=C.context,ne=l.contextType;typeof ne=="object"&&ne!==null?ne=kt(ne):(ne=ft(l)?Ua:Yn.current,ne=jo(u,ne));var pe=l.getDerivedStateFromProps,se=typeof pe=="function"||typeof C.getSnapshotBeforeUpdate=="function";se||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||($!==h||q!==ne)&&m1(u,C,h,ne),da=!1;var ue=u.memoizedState;C.state=ue,Ts(u,h,C,g),q=u.memoizedState,$!==h||ue!==q||ct.current||da?(typeof pe=="function"&&(k2(u,l,pe,h),q=u.memoizedState),($=da||f1(u,l,$,h,ue,q,ne))?(se||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(u.flags|=4194308)):(typeof C.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=h,u.memoizedState=q),C.props=h,C.state=q,C.context=ne,h=$):(typeof C.componentDidMount=="function"&&(u.flags|=4194308),h=!1)}else{C=u.stateNode,Lb(o,u),$=u.memoizedProps,ne=u.type===u.elementType?$:er(u.type,$),C.props=ne,se=u.pendingProps,ue=C.context,q=l.contextType,typeof q=="object"&&q!==null?q=kt(q):(q=ft(l)?Ua:Yn.current,q=jo(u,q));var ve=l.getDerivedStateFromProps;(pe=typeof ve=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||($!==se||ue!==q)&&m1(u,C,h,q),da=!1,ue=u.memoizedState,C.state=ue,Ts(u,h,C,g);var Be=u.memoizedState;$!==se||ue!==Be||ct.current||da?(typeof ve=="function"&&(k2(u,l,ve,h),Be=u.memoizedState),(ne=da||f1(u,l,ne,h,ue,Be,q)||!1)?(pe||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(h,Be,q),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(h,Be,q)),typeof C.componentDidUpdate=="function"&&(u.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof C.componentDidUpdate!="function"||$===o.memoizedProps&&ue===o.memoizedState||(u.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||$===o.memoizedProps&&ue===o.memoizedState||(u.flags|=1024),u.memoizedProps=h,u.memoizedState=Be),C.props=h,C.state=Be,C.context=q,h=ne):(typeof C.componentDidUpdate!="function"||$===o.memoizedProps&&ue===o.memoizedState||(u.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||$===o.memoizedProps&&ue===o.memoizedState||(u.flags|=1024),h=!1)}return $2(o,u,l,h,x,g)}function $2(o,u,l,h,g,x){P1(o,u);var C=(u.flags&128)!==0;if(!h&&!C)return g&&Ob(u,l,!1),Rr(o,u,x);h=u.stateNode,RO.current=u;var $=C&&typeof l.getDerivedStateFromError!="function"?null:h.render();return u.flags|=1,o!==null&&C?(u.child=qo(u,o.child,null,x),u.child=qo(u,null,$,x)):tt(o,u,$,x),u.memoizedState=h.state,g&&Ob(u,l,!0),u.child}function S1(o){var u=o.stateNode;u.pendingContext?Ab(o,u.pendingContext,u.pendingContext!==u.context):u.context&&Ab(o,u.context,!1),w2(o,u.containerInfo)}function M1(o,u,l,h,g){return Fo(),v2(g),u.flags|=256,tt(o,u,l,h),u.child}var L2={dehydrated:null,treeContext:null,retryLane:0};function F2(o){return{baseLanes:o,cachePool:null,transitions:null}}function A1(o,u,l){var h=u.pendingProps,g=dn.current,x=!1,C=(u.flags&128)!==0,$;if(($=C)||($=o!==null&&o.memoizedState===null?!1:(g&2)!==0),$?(x=!0,u.flags&=-129):(o===null||o.memoizedState!==null)&&(g|=1),tn(dn,g&1),o===null)return h2(u),o=u.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((u.mode&1)===0?u.lanes=1:o.data==="$!"?u.lanes=8:u.lanes=1073741824,null):(C=h.children,o=h.fallback,x?(h=u.mode,x=u.child,C={mode:"hidden",children:C},(h&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=rl(C,h,0,null),o=no(o,h,l,null),x.return=u,o.return=u,x.sibling=o,u.child=x,u.child.memoizedState=F2(l),u.memoizedState=L2,o):q2(u,C));if(g=o.memoizedState,g!==null&&($=g.dehydrated,$!==null))return kO(o,u,C,h,$,g,l);if(x){x=h.fallback,C=u.mode,g=o.child,$=g.sibling;var q={mode:"hidden",children:h.children};return(C&1)===0&&u.child!==g?(h=u.child,h.childLanes=0,h.pendingProps=q,u.deletions=null):(h=Ia(g,q),h.subtreeFlags=g.subtreeFlags&14680064),$!==null?x=Ia($,x):(x=no(x,C,l,null),x.flags|=2),x.return=u,h.return=u,h.sibling=x,u.child=h,h=x,x=u.child,C=o.child.memoizedState,C=C===null?F2(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=o.childLanes&~l,u.memoizedState=L2,h}return x=o.child,o=x.sibling,h=Ia(x,{mode:"visible",children:h.children}),(u.mode&1)===0&&(h.lanes=l),h.return=u,h.sibling=null,o!==null&&(l=u.deletions,l===null?(u.deletions=[o],u.flags|=16):l.push(o)),u.child=h,u.memoizedState=null,h}function q2(o,u){return u=rl({mode:"visible",children:u},o.mode,0,null),u.return=o,o.child=u}function zs(o,u,l,h){return h!==null&&v2(h),qo(u,o.child,null,l),o=q2(u,u.pendingProps.children),o.flags|=2,u.memoizedState=null,o}function kO(o,u,l,h,g,x,C){if(l)return u.flags&256?(u.flags&=-257,h=E2(Error(t(422))),zs(o,u,C,h)):u.memoizedState!==null?(u.child=o.child,u.flags|=128,null):(x=h.fallback,g=u.mode,h=rl({mode:"visible",children:h.children},g,0,null),x=no(x,g,C,null),x.flags|=2,h.return=u,x.return=u,h.sibling=x,u.child=h,(u.mode&1)!==0&&qo(u,o.child,null,C),u.child.memoizedState=F2(C),u.memoizedState=L2,x);if((u.mode&1)===0)return zs(o,u,C,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var $=h.dgst;return h=$,x=Error(t(419)),h=E2(x,h,void 0),zs(o,u,C,h)}if($=(C&o.childLanes)!==0,dt||$){if(h=Ln,h!==null){switch(C&-C){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|C))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,Cr(o,g),rr(h,o,g,-1))}return of(),h=E2(Error(t(421))),zs(o,u,C,h)}return g.data==="$?"?(u.flags|=128,u.child=o.child,u=KO.bind(null,o),g._reactRetry=u,null):(o=x.treeContext,Bt=sa(g.nextSibling),It=u,cn=!0,Jt=null,o!==null&&(Nt[Rt++]=Or,Nt[Rt++]=Hr,Nt[Rt++]=Va,Or=o.id,Hr=o.overflow,Va=u),u=q2(u,h.children),u.flags|=4096,u)}function _1(o,u,l){o.lanes|=u;var h=o.alternate;h!==null&&(h.lanes|=u),I2(o.return,u,l)}function z2(o,u,l,h,g){var x=o.memoizedState;x===null?o.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:g}:(x.isBackwards=u,x.rendering=null,x.renderingStartTime=0,x.last=h,x.tail=l,x.tailMode=g)}function O1(o,u,l){var h=u.pendingProps,g=h.revealOrder,x=h.tail;if(tt(o,u,h.children,l),h=dn.current,(h&2)!==0)h=h&1|2,u.flags|=128;else{if(o!==null&&(o.flags&128)!==0)e:for(o=u.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&_1(o,l,u);else if(o.tag===19)_1(o,l,u);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===u)break e;for(;o.sibling===null;){if(o.return===null||o.return===u)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}h&=1}if(tn(dn,h),(u.mode&1)===0)u.memoizedState=null;else switch(g){case"forwards":for(l=u.child,g=null;l!==null;)o=l.alternate,o!==null&&Es(o)===null&&(g=l),l=l.sibling;l=g,l===null?(g=u.child,u.child=null):(g=l.sibling,l.sibling=null),z2(u,!1,g,l,x);break;case"backwards":for(l=null,g=u.child,u.child=null;g!==null;){if(o=g.alternate,o!==null&&Es(o)===null){u.child=g;break}o=g.sibling,g.sibling=l,l=g,g=o}z2(u,!0,l,null,x);break;case"together":z2(u,!1,null,null,void 0);break;default:u.memoizedState=null}return u.child}function Us(o,u){(u.mode&1)===0&&o!==null&&(o.alternate=null,u.alternate=null,u.flags|=2)}function Rr(o,u,l){if(o!==null&&(u.dependencies=o.dependencies),Xa|=u.lanes,(l&u.childLanes)===0)return null;if(o!==null&&u.child!==o.child)throw Error(t(153));if(u.child!==null){for(o=u.child,l=Ia(o,o.pendingProps),u.child=l,l.return=u;o.sibling!==null;)o=o.sibling,l=l.sibling=Ia(o,o.pendingProps),l.return=u;l.sibling=null}return u.child}function TO(o,u,l){switch(u.tag){case 3:S1(u),Fo();break;case 5:zb(u);break;case 1:ft(u.type)&&Ms(u);break;case 4:w2(u,u.stateNode.containerInfo);break;case 10:var h=u.type._context,g=u.memoizedProps.value;tn(Ns,h._currentValue),h._currentValue=g;break;case 13:if(h=u.memoizedState,h!==null)return h.dehydrated!==null?(tn(dn,dn.current&1),u.flags|=128,null):(l&u.child.childLanes)!==0?A1(o,u,l):(tn(dn,dn.current&1),o=Rr(o,u,l),o!==null?o.sibling:null);tn(dn,dn.current&1);break;case 19:if(h=(l&u.childLanes)!==0,(o.flags&128)!==0){if(h)return O1(o,u,l);u.flags|=128}if(g=u.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),tn(dn,dn.current),h)break;return null;case 22:case 23:return u.lanes=0,w1(o,u,l)}return Rr(o,u,l)}var H1,U2,C1,N1;H1=function(o,u){for(var l=u.child;l!==null;){if(l.tag===5||l.tag===6)o.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===u)break;for(;l.sibling===null;){if(l.return===null||l.return===u)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},U2=function(){},C1=function(o,u,l,h){var g=o.memoizedProps;if(g!==h){o=u.stateNode,Qa(mr.current);var x=null;switch(l){case"input":g=Pe(o,g),h=Pe(o,h),x=[];break;case"select":g=V({},g,{value:void 0}),h=V({},h,{value:void 0}),x=[];break;case"textarea":g=gn(o,g),h=gn(o,h),x=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(o.onclick=Ps)}Wc(l,h);var C;l=null;for(ne in g)if(!h.hasOwnProperty(ne)&&g.hasOwnProperty(ne)&&g[ne]!=null)if(ne==="style"){var $=g[ne];for(C in $)$.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?x||(x=[]):(x=x||[]).push(ne,null));for(ne in h){var q=h[ne];if($=g!=null?g[ne]:void 0,h.hasOwnProperty(ne)&&q!==$&&(q!=null||$!=null))if(ne==="style")if($){for(C in $)!$.hasOwnProperty(C)||q&&q.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in q)q.hasOwnProperty(C)&&$[C]!==q[C]&&(l||(l={}),l[C]=q[C])}else l||(x||(x=[]),x.push(ne,l)),l=q;else ne==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,$=$?$.__html:void 0,q!=null&&$!==q&&(x=x||[]).push(ne,q)):ne==="children"?typeof q!="string"&&typeof q!="number"||(x=x||[]).push(ne,""+q):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(q!=null&&ne==="onScroll"&&un("scroll",o),x||$===q||(x=[])):(x=x||[]).push(ne,q))}l&&(x=x||[]).push("style",l);var ne=x;(u.updateQueue=ne)&&(u.flags|=4)}},N1=function(o,u,l,h){l!==h&&(u.flags|=4)};function Ru(o,u){if(!cn)switch(o.tailMode){case"hidden":u=o.tail;for(var l=null;u!==null;)u.alternate!==null&&(l=u),u=u.sibling;l===null?o.tail=null:l.sibling=null;break;case"collapsed":l=o.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?u||o.tail===null?o.tail=null:o.tail.sibling=null:h.sibling=null}}function Zn(o){var u=o.alternate!==null&&o.alternate.child===o.child,l=0,h=0;if(u)for(var g=o.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=o,g=g.sibling;else for(g=o.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=o,g=g.sibling;return o.subtreeFlags|=h,o.childLanes=l,u}function EO(o,u,l){var h=u.pendingProps;switch(d2(u),u.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zn(u),null;case 1:return ft(u.type)&&Ss(),Zn(u),null;case 3:return h=u.stateNode,Vo(),pn(ct),pn(Yn),S2(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(o===null||o.child===null)&&(Hs(u)?u.flags|=4:o===null||o.memoizedState.isDehydrated&&(u.flags&256)===0||(u.flags|=1024,Jt!==null&&(tf(Jt),Jt=null))),U2(o,u),Zn(u),null;case 5:P2(u);var g=Qa(_u.current);if(l=u.type,o!==null&&u.stateNode!=null)C1(o,u,l,h,g),o.ref!==u.ref&&(u.flags|=512,u.flags|=2097152);else{if(!h){if(u.stateNode===null)throw Error(t(166));return Zn(u),null}if(o=Qa(mr.current),Hs(u)){h=u.stateNode,l=u.type;var x=u.memoizedProps;switch(h[dr]=u,h[Pu]=x,o=(u.mode&1)!==0,l){case"dialog":un("cancel",h),un("close",h);break;case"iframe":case"object":case"embed":un("load",h);break;case"video":case"audio":for(g=0;g<Bu.length;g++)un(Bu[g],h);break;case"source":un("error",h);break;case"img":case"image":case"link":un("error",h),un("load",h);break;case"details":un("toggle",h);break;case"input":He(h,x),un("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!x.multiple},un("invalid",h);break;case"textarea":Ot(h,x),un("invalid",h)}Wc(l,x),g=null;for(var C in x)if(x.hasOwnProperty(C)){var $=x[C];C==="children"?typeof $=="string"?h.textContent!==$&&(x.suppressHydrationWarning!==!0&&ws(h.textContent,$,o),g=["children",$]):typeof $=="number"&&h.textContent!==""+$&&(x.suppressHydrationWarning!==!0&&ws(h.textContent,$,o),g=["children",""+$]):a.hasOwnProperty(C)&&$!=null&&C==="onScroll"&&un("scroll",h)}switch(l){case"input":fe(h),De(h,x,!0);break;case"textarea":fe(h),Qn(h);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(h.onclick=Ps)}h=g,u.updateQueue=h,h!==null&&(u.flags|=4)}else{C=g.nodeType===9?g:g.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=wn(l)),o==="http://www.w3.org/1999/xhtml"?l==="script"?(o=C.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof h.is=="string"?o=C.createElement(l,{is:h.is}):(o=C.createElement(l),l==="select"&&(C=o,h.multiple?C.multiple=!0:h.size&&(C.size=h.size))):o=C.createElementNS(o,l),o[dr]=u,o[Pu]=h,H1(o,u,!1,!1),u.stateNode=o;e:{switch(C=Sc(l,h),l){case"dialog":un("cancel",o),un("close",o),g=h;break;case"iframe":case"object":case"embed":un("load",o),g=h;break;case"video":case"audio":for(g=0;g<Bu.length;g++)un(Bu[g],o);g=h;break;case"source":un("error",o),g=h;break;case"img":case"image":case"link":un("error",o),un("load",o),g=h;break;case"details":un("toggle",o),g=h;break;case"input":He(o,h),g=Pe(o,h),un("invalid",o);break;case"option":g=h;break;case"select":o._wrapperState={wasMultiple:!!h.multiple},g=V({},h,{value:void 0}),un("invalid",o);break;case"textarea":Ot(o,h),g=gn(o,h),un("invalid",o);break;default:g=h}Wc(l,g),$=g;for(x in $)if($.hasOwnProperty(x)){var q=$[x];x==="style"?ru(o,q):x==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&Mo(o,q)):x==="children"?typeof q=="string"?(l!=="textarea"||q!=="")&&na(o,q):typeof q=="number"&&na(o,""+q):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?q!=null&&x==="onScroll"&&un("scroll",o):q!=null&&A(o,x,q,C))}switch(l){case"input":fe(o),De(o,h,!1);break;case"textarea":fe(o),Qn(o);break;case"option":h.value!=null&&o.setAttribute("value",""+de(h.value));break;case"select":o.multiple=!!h.multiple,x=h.value,x!=null?xn(o,!!h.multiple,x,!1):h.defaultValue!=null&&xn(o,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(o.onclick=Ps)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(u.flags|=4)}u.ref!==null&&(u.flags|=512,u.flags|=2097152)}return Zn(u),null;case 6:if(o&&u.stateNode!=null)N1(o,u,o.memoizedProps,h);else{if(typeof h!="string"&&u.stateNode===null)throw Error(t(166));if(l=Qa(_u.current),Qa(mr.current),Hs(u)){if(h=u.stateNode,l=u.memoizedProps,h[dr]=u,(x=h.nodeValue!==l)&&(o=It,o!==null))switch(o.tag){case 3:ws(h.nodeValue,l,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&ws(h.nodeValue,l,(o.mode&1)!==0)}x&&(u.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[dr]=u,u.stateNode=h}return Zn(u),null;case 13:if(pn(dn),h=u.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(cn&&Bt!==null&&(u.mode&1)!==0&&(u.flags&128)===0)Tb(),Fo(),u.flags|=98560,x=!1;else if(x=Hs(u),h!==null&&h.dehydrated!==null){if(o===null){if(!x)throw Error(t(318));if(x=u.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[dr]=u}else Fo(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;Zn(u),x=!1}else Jt!==null&&(tf(Jt),Jt=null),x=!0;if(!x)return u.flags&65536?u:null}return(u.flags&128)!==0?(u.lanes=l,u):(h=h!==null,h!==(o!==null&&o.memoizedState!==null)&&h&&(u.child.flags|=8192,(u.mode&1)!==0&&(o===null||(dn.current&1)!==0?Rn===0&&(Rn=3):of())),u.updateQueue!==null&&(u.flags|=4),Zn(u),null);case 4:return Vo(),U2(o,u),o===null&&xu(u.stateNode.containerInfo),Zn(u),null;case 10:return b2(u.type._context),Zn(u),null;case 17:return ft(u.type)&&Ss(),Zn(u),null;case 19:if(pn(dn),x=u.memoizedState,x===null)return Zn(u),null;if(h=(u.flags&128)!==0,C=x.rendering,C===null)if(h)Ru(x,!1);else{if(Rn!==0||o!==null&&(o.flags&128)!==0)for(o=u.child;o!==null;){if(C=Es(o),C!==null){for(u.flags|=128,Ru(x,!1),h=C.updateQueue,h!==null&&(u.updateQueue=h,u.flags|=4),u.subtreeFlags=0,h=l,l=u.child;l!==null;)x=l,o=h,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=o,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,o=C.dependencies,x.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),l=l.sibling;return tn(dn,dn.current&1|2),u.child}o=o.sibling}x.tail!==null&&Pn()>Yo&&(u.flags|=128,h=!0,Ru(x,!1),u.lanes=4194304)}else{if(!h)if(o=Es(C),o!==null){if(u.flags|=128,h=!0,l=o.updateQueue,l!==null&&(u.updateQueue=l,u.flags|=4),Ru(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!cn)return Zn(u),null}else 2*Pn()-x.renderingStartTime>Yo&&l!==1073741824&&(u.flags|=128,h=!0,Ru(x,!1),u.lanes=4194304);x.isBackwards?(C.sibling=u.child,u.child=C):(l=x.last,l!==null?l.sibling=C:u.child=C,x.last=C)}return x.tail!==null?(u=x.tail,x.rendering=u,x.tail=u.sibling,x.renderingStartTime=Pn(),u.sibling=null,l=dn.current,tn(dn,h?l&1|2:l&1),u):(Zn(u),null);case 22:case 23:return af(),h=u.memoizedState!==null,o!==null&&o.memoizedState!==null!==h&&(u.flags|=8192),h&&(u.mode&1)!==0?(xt&1073741824)!==0&&(Zn(u),u.subtreeFlags&6&&(u.flags|=8192)):Zn(u),null;case 24:return null;case 25:return null}throw Error(t(156,u.tag))}function DO(o,u){switch(d2(u),u.tag){case 1:return ft(u.type)&&Ss(),o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 3:return Vo(),pn(ct),pn(Yn),S2(),o=u.flags,(o&65536)!==0&&(o&128)===0?(u.flags=o&-65537|128,u):null;case 5:return P2(u),null;case 13:if(pn(dn),o=u.memoizedState,o!==null&&o.dehydrated!==null){if(u.alternate===null)throw Error(t(340));Fo()}return o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 19:return pn(dn),null;case 4:return Vo(),null;case 10:return b2(u.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Vs=!1,Jn=!1,jO=typeof WeakSet=="function"?WeakSet:Set,be=null;function Ko(o,u){var l=o.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){bn(o,u,h)}else l.current=null}function V2(o,u,l){try{l()}catch(h){bn(o,u,h)}}var R1=!1;function $O(o,u){if(a2=fs,o=fb(),Yc(o)){if("selectionStart"in o)var l={start:o.selectionStart,end:o.selectionEnd};else e:{l=(l=o.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var g=h.anchorOffset,x=h.focusNode;h=h.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var C=0,$=-1,q=-1,ne=0,pe=0,se=o,ue=null;n:for(;;){for(var ve;se!==l||g!==0&&se.nodeType!==3||($=C+g),se!==x||h!==0&&se.nodeType!==3||(q=C+h),se.nodeType===3&&(C+=se.nodeValue.length),(ve=se.firstChild)!==null;)ue=se,se=ve;for(;;){if(se===o)break n;if(ue===l&&++ne===g&&($=C),ue===x&&++pe===h&&(q=C),(ve=se.nextSibling)!==null)break;se=ue,ue=se.parentNode}se=ve}l=$===-1||q===-1?null:{start:$,end:q}}else l=null}l=l||{start:0,end:0}}else l=null;for(o2={focusedElem:o,selectionRange:l},fs=!1,be=u;be!==null;)if(u=be,o=u.child,(u.subtreeFlags&1028)!==0&&o!==null)o.return=u,be=o;else for(;be!==null;){u=be;try{var Be=u.alternate;if((u.flags&1024)!==0)switch(u.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var We=Be.memoizedProps,Wn=Be.memoizedState,J=u.stateNode,U=J.getSnapshotBeforeUpdate(u.elementType===u.type?We:er(u.type,We),Wn);J.__reactInternalSnapshotBeforeUpdate=U}break;case 3:var ee=u.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ce){bn(u,u.return,ce)}if(o=u.sibling,o!==null){o.return=u.return,be=o;break}be=u.return}return Be=R1,R1=!1,Be}function ku(o,u,l){var h=u.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&o)===o){var x=g.destroy;g.destroy=void 0,x!==void 0&&V2(u,l,x)}g=g.next}while(g!==h)}}function Gs(o,u){if(u=u.updateQueue,u=u!==null?u.lastEffect:null,u!==null){var l=u=u.next;do{if((l.tag&o)===o){var h=l.create;l.destroy=h()}l=l.next}while(l!==u)}}function G2(o){var u=o.ref;if(u!==null){var l=o.stateNode;switch(o.tag){case 5:o=l;break;default:o=l}typeof u=="function"?u(o):u.current=o}}function k1(o){var u=o.alternate;u!==null&&(o.alternate=null,k1(u)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(u=o.stateNode,u!==null&&(delete u[dr],delete u[Pu],delete u[s2],delete u[xO],delete u[wO])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function T1(o){return o.tag===5||o.tag===3||o.tag===4}function E1(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||T1(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function K2(o,u,l){var h=o.tag;if(h===5||h===6)o=o.stateNode,u?l.nodeType===8?l.parentNode.insertBefore(o,u):l.insertBefore(o,u):(l.nodeType===8?(u=l.parentNode,u.insertBefore(o,l)):(u=l,u.appendChild(o)),l=l._reactRootContainer,l!=null||u.onclick!==null||(u.onclick=Ps));else if(h!==4&&(o=o.child,o!==null))for(K2(o,u,l),o=o.sibling;o!==null;)K2(o,u,l),o=o.sibling}function Q2(o,u,l){var h=o.tag;if(h===5||h===6)o=o.stateNode,u?l.insertBefore(o,u):l.appendChild(o);else if(h!==4&&(o=o.child,o!==null))for(Q2(o,u,l),o=o.sibling;o!==null;)Q2(o,u,l),o=o.sibling}var Vn=null,nr=!1;function ha(o,u,l){for(l=l.child;l!==null;)D1(o,u,l),l=l.sibling}function D1(o,u,l){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(is,l)}catch{}switch(l.tag){case 5:Jn||Ko(l,u);case 6:var h=Vn,g=nr;Vn=null,ha(o,u,l),Vn=h,nr=g,Vn!==null&&(nr?(o=Vn,l=l.stateNode,o.nodeType===8?o.parentNode.removeChild(l):o.removeChild(l)):Vn.removeChild(l.stateNode));break;case 18:Vn!==null&&(nr?(o=Vn,l=l.stateNode,o.nodeType===8?p2(o.parentNode,l):o.nodeType===1&&p2(o,l),du(o)):p2(Vn,l.stateNode));break;case 4:h=Vn,g=nr,Vn=l.stateNode.containerInfo,nr=!0,ha(o,u,l),Vn=h,nr=g;break;case 0:case 11:case 14:case 15:if(!Jn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var x=g,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&V2(l,u,C),g=g.next}while(g!==h)}ha(o,u,l);break;case 1:if(!Jn&&(Ko(l,u),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch($){bn(l,u,$)}ha(o,u,l);break;case 21:ha(o,u,l);break;case 22:l.mode&1?(Jn=(h=Jn)||l.memoizedState!==null,ha(o,u,l),Jn=h):ha(o,u,l);break;default:ha(o,u,l)}}function j1(o){var u=o.updateQueue;if(u!==null){o.updateQueue=null;var l=o.stateNode;l===null&&(l=o.stateNode=new jO),u.forEach(function(h){var g=QO.bind(null,o,h);l.has(h)||(l.add(h),h.then(g,g))})}}function tr(o,u){var l=u.deletions;if(l!==null)for(var h=0;h<l.length;h++){var g=l[h];try{var x=o,C=u,$=C;e:for(;$!==null;){switch($.tag){case 5:Vn=$.stateNode,nr=!1;break e;case 3:Vn=$.stateNode.containerInfo,nr=!0;break e;case 4:Vn=$.stateNode.containerInfo,nr=!0;break e}$=$.return}if(Vn===null)throw Error(t(160));D1(x,C,g),Vn=null,nr=!1;var q=g.alternate;q!==null&&(q.return=null),g.return=null}catch(ne){bn(g,u,ne)}}if(u.subtreeFlags&12854)for(u=u.child;u!==null;)$1(u,o),u=u.sibling}function $1(o,u){var l=o.alternate,h=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(tr(u,o),vr(o),h&4){try{ku(3,o,o.return),Gs(3,o)}catch(We){bn(o,o.return,We)}try{ku(5,o,o.return)}catch(We){bn(o,o.return,We)}}break;case 1:tr(u,o),vr(o),h&512&&l!==null&&Ko(l,l.return);break;case 5:if(tr(u,o),vr(o),h&512&&l!==null&&Ko(l,l.return),o.flags&32){var g=o.stateNode;try{na(g,"")}catch(We){bn(o,o.return,We)}}if(h&4&&(g=o.stateNode,g!=null)){var x=o.memoizedProps,C=l!==null?l.memoizedProps:x,$=o.type,q=o.updateQueue;if(o.updateQueue=null,q!==null)try{$==="input"&&x.type==="radio"&&x.name!=null&&Me(g,x),Sc($,C);var ne=Sc($,x);for(C=0;C<q.length;C+=2){var pe=q[C],se=q[C+1];pe==="style"?ru(g,se):pe==="dangerouslySetInnerHTML"?Mo(g,se):pe==="children"?na(g,se):A(g,pe,se,ne)}switch($){case"input":Fe(g,x);break;case"textarea":yn(g,x);break;case"select":var ue=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var ve=x.value;ve!=null?xn(g,!!x.multiple,ve,!1):ue!==!!x.multiple&&(x.defaultValue!=null?xn(g,!!x.multiple,x.defaultValue,!0):xn(g,!!x.multiple,x.multiple?[]:"",!1))}g[Pu]=x}catch(We){bn(o,o.return,We)}}break;case 6:if(tr(u,o),vr(o),h&4){if(o.stateNode===null)throw Error(t(162));g=o.stateNode,x=o.memoizedProps;try{g.nodeValue=x}catch(We){bn(o,o.return,We)}}break;case 3:if(tr(u,o),vr(o),h&4&&l!==null&&l.memoizedState.isDehydrated)try{du(u.containerInfo)}catch(We){bn(o,o.return,We)}break;case 4:tr(u,o),vr(o);break;case 13:tr(u,o),vr(o),g=o.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(Z2=Pn())),h&4&&j1(o);break;case 22:if(pe=l!==null&&l.memoizedState!==null,o.mode&1?(Jn=(ne=Jn)||pe,tr(u,o),Jn=ne):tr(u,o),vr(o),h&8192){if(ne=o.memoizedState!==null,(o.stateNode.isHidden=ne)&&!pe&&(o.mode&1)!==0)for(be=o,pe=o.child;pe!==null;){for(se=be=pe;be!==null;){switch(ue=be,ve=ue.child,ue.tag){case 0:case 11:case 14:case 15:ku(4,ue,ue.return);break;case 1:Ko(ue,ue.return);var Be=ue.stateNode;if(typeof Be.componentWillUnmount=="function"){h=ue,l=ue.return;try{u=h,Be.props=u.memoizedProps,Be.state=u.memoizedState,Be.componentWillUnmount()}catch(We){bn(h,l,We)}}break;case 5:Ko(ue,ue.return);break;case 22:if(ue.memoizedState!==null){q1(se);continue}}ve!==null?(ve.return=ue,be=ve):q1(se)}pe=pe.sibling}e:for(pe=null,se=o;;){if(se.tag===5){if(pe===null){pe=se;try{g=se.stateNode,ne?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):($=se.stateNode,q=se.memoizedProps.style,C=q!=null&&q.hasOwnProperty("display")?q.display:null,$.style.display=ta("display",C))}catch(We){bn(o,o.return,We)}}}else if(se.tag===6){if(pe===null)try{se.stateNode.nodeValue=ne?"":se.memoizedProps}catch(We){bn(o,o.return,We)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===o)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===o)break e;for(;se.sibling===null;){if(se.return===null||se.return===o)break e;pe===se&&(pe=null),se=se.return}pe===se&&(pe=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:tr(u,o),vr(o),h&4&&j1(o);break;case 21:break;default:tr(u,o),vr(o)}}function vr(o){var u=o.flags;if(u&2){try{e:{for(var l=o.return;l!==null;){if(T1(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(na(g,""),h.flags&=-33);var x=E1(o);Q2(o,x,g);break;case 3:case 4:var C=h.stateNode.containerInfo,$=E1(o);K2(o,$,C);break;default:throw Error(t(161))}}catch(q){bn(o,o.return,q)}o.flags&=-3}u&4096&&(o.flags&=-4097)}function LO(o,u,l){be=o,L1(o)}function L1(o,u,l){for(var h=(o.mode&1)!==0;be!==null;){var g=be,x=g.child;if(g.tag===22&&h){var C=g.memoizedState!==null||Vs;if(!C){var $=g.alternate,q=$!==null&&$.memoizedState!==null||Jn;$=Vs;var ne=Jn;if(Vs=C,(Jn=q)&&!ne)for(be=g;be!==null;)C=be,q=C.child,C.tag===22&&C.memoizedState!==null?z1(g):q!==null?(q.return=C,be=q):z1(g);for(;x!==null;)be=x,L1(x),x=x.sibling;be=g,Vs=$,Jn=ne}F1(o)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,be=x):F1(o)}}function F1(o){for(;be!==null;){var u=be;if((u.flags&8772)!==0){var l=u.alternate;try{if((u.flags&8772)!==0)switch(u.tag){case 0:case 11:case 15:Jn||Gs(5,u);break;case 1:var h=u.stateNode;if(u.flags&4&&!Jn)if(l===null)h.componentDidMount();else{var g=u.elementType===u.type?l.memoizedProps:er(u.type,l.memoizedProps);h.componentDidUpdate(g,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var x=u.updateQueue;x!==null&&qb(u,x,h);break;case 3:var C=u.updateQueue;if(C!==null){if(l=null,u.child!==null)switch(u.child.tag){case 5:l=u.child.stateNode;break;case 1:l=u.child.stateNode}qb(u,C,l)}break;case 5:var $=u.stateNode;if(l===null&&u.flags&4){l=$;var q=u.memoizedProps;switch(u.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&l.focus();break;case"img":q.src&&(l.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(u.memoizedState===null){var ne=u.alternate;if(ne!==null){var pe=ne.memoizedState;if(pe!==null){var se=pe.dehydrated;se!==null&&du(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Jn||u.flags&512&&G2(u)}catch(ue){bn(u,u.return,ue)}}if(u===o){be=null;break}if(l=u.sibling,l!==null){l.return=u.return,be=l;break}be=u.return}}function q1(o){for(;be!==null;){var u=be;if(u===o){be=null;break}var l=u.sibling;if(l!==null){l.return=u.return,be=l;break}be=u.return}}function z1(o){for(;be!==null;){var u=be;try{switch(u.tag){case 0:case 11:case 15:var l=u.return;try{Gs(4,u)}catch(q){bn(u,l,q)}break;case 1:var h=u.stateNode;if(typeof h.componentDidMount=="function"){var g=u.return;try{h.componentDidMount()}catch(q){bn(u,g,q)}}var x=u.return;try{G2(u)}catch(q){bn(u,x,q)}break;case 5:var C=u.return;try{G2(u)}catch(q){bn(u,C,q)}}}catch(q){bn(u,u.return,q)}if(u===o){be=null;break}var $=u.sibling;if($!==null){$.return=u.return,be=$;break}be=u.return}}var FO=Math.ceil,Ks=O.ReactCurrentDispatcher,Y2=O.ReactCurrentOwner,Et=O.ReactCurrentBatchConfig,ze=0,Ln=null,_n=null,Gn=0,xt=0,Qo=la(0),Rn=0,Tu=null,Xa=0,Qs=0,X2=0,Eu=null,mt=null,Z2=0,Yo=1/0,kr=null,Ys=!1,J2=null,va=null,Xs=!1,ga=null,Zs=0,Du=0,ef=null,Js=-1,el=0;function rt(){return(ze&6)!==0?Pn():Js!==-1?Js:Js=Pn()}function ya(o){return(o.mode&1)===0?1:(ze&2)!==0&&Gn!==0?Gn&-Gn:WO.transition!==null?(el===0&&(el=E6()),el):(o=Ze,o!==0||(o=window.event,o=o===void 0?16:V6(o.type)),o)}function rr(o,u,l,h){if(50<Du)throw Du=0,ef=null,Error(t(185));pu(o,l,h),((ze&2)===0||o!==Ln)&&(o===Ln&&((ze&2)===0&&(Qs|=l),Rn===4&&ba(o,Gn)),ht(o,h),l===1&&ze===0&&(u.mode&1)===0&&(Yo=Pn()+500,As&&fa()))}function ht(o,u){var l=o.callbackNode;W_(o,u);var h=ss(o,o===Ln?Gn:0);if(h===0)l!==null&&R6(l),o.callbackNode=null,o.callbackPriority=0;else if(u=h&-h,o.callbackPriority!==u){if(l!=null&&R6(l),u===1)o.tag===0?PO(V1.bind(null,o)):Hb(V1.bind(null,o)),IO(function(){(ze&6)===0&&fa()}),l=null;else{switch(D6(h)){case 1:l=Nc;break;case 4:l=k6;break;case 16:l=os;break;case 536870912:l=T6;break;default:l=os}l=eI(l,U1.bind(null,o))}o.callbackPriority=u,o.callbackNode=l}}function U1(o,u){if(Js=-1,el=0,(ze&6)!==0)throw Error(t(327));var l=o.callbackNode;if(Xo()&&o.callbackNode!==l)return null;var h=ss(o,o===Ln?Gn:0);if(h===0)return null;if((h&30)!==0||(h&o.expiredLanes)!==0||u)u=nl(o,h);else{u=h;var g=ze;ze|=2;var x=K1();(Ln!==o||Gn!==u)&&(kr=null,Yo=Pn()+500,Ja(o,u));do try{UO();break}catch($){G1(o,$)}while(!0);y2(),Ks.current=x,ze=g,_n!==null?u=0:(Ln=null,Gn=0,u=Rn)}if(u!==0){if(u===2&&(g=Rc(o),g!==0&&(h=g,u=nf(o,g))),u===1)throw l=Tu,Ja(o,0),ba(o,h),ht(o,Pn()),l;if(u===6)ba(o,h);else{if(g=o.current.alternate,(h&30)===0&&!qO(g)&&(u=nl(o,h),u===2&&(x=Rc(o),x!==0&&(h=x,u=nf(o,x))),u===1))throw l=Tu,Ja(o,0),ba(o,h),ht(o,Pn()),l;switch(o.finishedWork=g,o.finishedLanes=h,u){case 0:case 1:throw Error(t(345));case 2:eo(o,mt,kr);break;case 3:if(ba(o,h),(h&130023424)===h&&(u=Z2+500-Pn(),10<u)){if(ss(o,0)!==0)break;if(g=o.suspendedLanes,(g&h)!==h){rt(),o.pingedLanes|=o.suspendedLanes&g;break}o.timeoutHandle=u2(eo.bind(null,o,mt,kr),u);break}eo(o,mt,kr);break;case 4:if(ba(o,h),(h&4194240)===h)break;for(u=o.eventTimes,g=-1;0<h;){var C=31-Xt(h);x=1<<C,C=u[C],C>g&&(g=C),h&=~x}if(h=g,h=Pn()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*FO(h/1960))-h,10<h){o.timeoutHandle=u2(eo.bind(null,o,mt,kr),h);break}eo(o,mt,kr);break;case 5:eo(o,mt,kr);break;default:throw Error(t(329))}}}return ht(o,Pn()),o.callbackNode===l?U1.bind(null,o):null}function nf(o,u){var l=Eu;return o.current.memoizedState.isDehydrated&&(Ja(o,u).flags|=256),o=nl(o,u),o!==2&&(u=mt,mt=l,u!==null&&tf(u)),o}function tf(o){mt===null?mt=o:mt.push.apply(mt,o)}function qO(o){for(var u=o;;){if(u.flags&16384){var l=u.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var g=l[h],x=g.getSnapshot;g=g.value;try{if(!Zt(x(),g))return!1}catch{return!1}}}if(l=u.child,u.subtreeFlags&16384&&l!==null)l.return=u,u=l;else{if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function ba(o,u){for(u&=~X2,u&=~Qs,o.suspendedLanes|=u,o.pingedLanes&=~u,o=o.expirationTimes;0<u;){var l=31-Xt(u),h=1<<l;o[l]=-1,u&=~h}}function V1(o){if((ze&6)!==0)throw Error(t(327));Xo();var u=ss(o,0);if((u&1)===0)return ht(o,Pn()),null;var l=nl(o,u);if(o.tag!==0&&l===2){var h=Rc(o);h!==0&&(u=h,l=nf(o,h))}if(l===1)throw l=Tu,Ja(o,0),ba(o,u),ht(o,Pn()),l;if(l===6)throw Error(t(345));return o.finishedWork=o.current.alternate,o.finishedLanes=u,eo(o,mt,kr),ht(o,Pn()),null}function rf(o,u){var l=ze;ze|=1;try{return o(u)}finally{ze=l,ze===0&&(Yo=Pn()+500,As&&fa())}}function Za(o){ga!==null&&ga.tag===0&&(ze&6)===0&&Xo();var u=ze;ze|=1;var l=Et.transition,h=Ze;try{if(Et.transition=null,Ze=1,o)return o()}finally{Ze=h,Et.transition=l,ze=u,(ze&6)===0&&fa()}}function af(){xt=Qo.current,pn(Qo)}function Ja(o,u){o.finishedWork=null,o.finishedLanes=0;var l=o.timeoutHandle;if(l!==-1&&(o.timeoutHandle=-1,bO(l)),_n!==null)for(l=_n.return;l!==null;){var h=l;switch(d2(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Ss();break;case 3:Vo(),pn(ct),pn(Yn),S2();break;case 5:P2(h);break;case 4:Vo();break;case 13:pn(dn);break;case 19:pn(dn);break;case 10:b2(h.type._context);break;case 22:case 23:af()}l=l.return}if(Ln=o,_n=o=Ia(o.current,null),Gn=xt=u,Rn=0,Tu=null,X2=Qs=Xa=0,mt=Eu=null,Ka!==null){for(u=0;u<Ka.length;u++)if(l=Ka[u],h=l.interleaved,h!==null){l.interleaved=null;var g=h.next,x=l.pending;if(x!==null){var C=x.next;x.next=g,h.next=C}l.pending=h}Ka=null}return o}function G1(o,u){do{var l=_n;try{if(y2(),Ds.current=Fs,js){for(var h=mn.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}js=!1}if(Ya=0,$n=Nn=mn=null,Ou=!1,Hu=0,Y2.current=null,l===null||l.return===null){Rn=1,Tu=u,_n=null;break}e:{var x=o,C=l.return,$=l,q=u;if(u=Gn,$.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var ne=q,pe=$,se=pe.tag;if((pe.mode&1)===0&&(se===0||se===11||se===15)){var ue=pe.alternate;ue?(pe.updateQueue=ue.updateQueue,pe.memoizedState=ue.memoizedState,pe.lanes=ue.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var ve=y1(C);if(ve!==null){ve.flags&=-257,b1(ve,C,$,x,u),ve.mode&1&&g1(x,ne,u),u=ve,q=ne;var Be=u.updateQueue;if(Be===null){var We=new Set;We.add(q),u.updateQueue=We}else Be.add(q);break e}else{if((u&1)===0){g1(x,ne,u),of();break e}q=Error(t(426))}}else if(cn&&$.mode&1){var Wn=y1(C);if(Wn!==null){(Wn.flags&65536)===0&&(Wn.flags|=256),b1(Wn,C,$,x,u),v2(Go(q,$));break e}}x=q=Go(q,$),Rn!==4&&(Rn=2),Eu===null?Eu=[x]:Eu.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,u&=-u,x.lanes|=u;var J=h1(x,q,u);Fb(x,J);break e;case 1:$=q;var U=x.type,ee=x.stateNode;if((x.flags&128)===0&&(typeof U.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(va===null||!va.has(ee)))){x.flags|=65536,u&=-u,x.lanes|=u;var ce=v1(x,$,u);Fb(x,ce);break e}}x=x.return}while(x!==null)}Y1(l)}catch(Ae){u=Ae,_n===l&&l!==null&&(_n=l=l.return);continue}break}while(!0)}function K1(){var o=Ks.current;return Ks.current=Fs,o===null?Fs:o}function of(){(Rn===0||Rn===3||Rn===2)&&(Rn=4),Ln===null||(Xa&268435455)===0&&(Qs&268435455)===0||ba(Ln,Gn)}function nl(o,u){var l=ze;ze|=2;var h=K1();(Ln!==o||Gn!==u)&&(kr=null,Ja(o,u));do try{zO();break}catch(g){G1(o,g)}while(!0);if(y2(),ze=l,Ks.current=h,_n!==null)throw Error(t(261));return Ln=null,Gn=0,Rn}function zO(){for(;_n!==null;)Q1(_n)}function UO(){for(;_n!==null&&!v_();)Q1(_n)}function Q1(o){var u=J1(o.alternate,o,xt);o.memoizedProps=o.pendingProps,u===null?Y1(o):_n=u,Y2.current=null}function Y1(o){var u=o;do{var l=u.alternate;if(o=u.return,(u.flags&32768)===0){if(l=EO(l,u,xt),l!==null){_n=l;return}}else{if(l=DO(l,u),l!==null){l.flags&=32767,_n=l;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{Rn=6,_n=null;return}}if(u=u.sibling,u!==null){_n=u;return}_n=u=o}while(u!==null);Rn===0&&(Rn=5)}function eo(o,u,l){var h=Ze,g=Et.transition;try{Et.transition=null,Ze=1,VO(o,u,l,h)}finally{Et.transition=g,Ze=h}return null}function VO(o,u,l,h){do Xo();while(ga!==null);if((ze&6)!==0)throw Error(t(327));l=o.finishedWork;var g=o.finishedLanes;if(l===null)return null;if(o.finishedWork=null,o.finishedLanes=0,l===o.current)throw Error(t(177));o.callbackNode=null,o.callbackPriority=0;var x=l.lanes|l.childLanes;if(S_(o,x),o===Ln&&(_n=Ln=null,Gn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Xs||(Xs=!0,eI(os,function(){return Xo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=Et.transition,Et.transition=null;var C=Ze;Ze=1;var $=ze;ze|=4,Y2.current=null,$O(o,l),$1(l,o),fO(o2),fs=!!a2,o2=a2=null,o.current=l,LO(l),g_(),ze=$,Ze=C,Et.transition=x}else o.current=l;if(Xs&&(Xs=!1,ga=o,Zs=g),x=o.pendingLanes,x===0&&(va=null),I_(l.stateNode),ht(o,Pn()),u!==null)for(h=o.onRecoverableError,l=0;l<u.length;l++)g=u[l],h(g.value,{componentStack:g.stack,digest:g.digest});if(Ys)throw Ys=!1,o=J2,J2=null,o;return(Zs&1)!==0&&o.tag!==0&&Xo(),x=o.pendingLanes,(x&1)!==0?o===ef?Du++:(Du=0,ef=o):Du=0,fa(),null}function Xo(){if(ga!==null){var o=D6(Zs),u=Et.transition,l=Ze;try{if(Et.transition=null,Ze=16>o?16:o,ga===null)var h=!1;else{if(o=ga,ga=null,Zs=0,(ze&6)!==0)throw Error(t(331));var g=ze;for(ze|=4,be=o.current;be!==null;){var x=be,C=x.child;if((be.flags&16)!==0){var $=x.deletions;if($!==null){for(var q=0;q<$.length;q++){var ne=$[q];for(be=ne;be!==null;){var pe=be;switch(pe.tag){case 0:case 11:case 15:ku(8,pe,x)}var se=pe.child;if(se!==null)se.return=pe,be=se;else for(;be!==null;){pe=be;var ue=pe.sibling,ve=pe.return;if(k1(pe),pe===ne){be=null;break}if(ue!==null){ue.return=ve,be=ue;break}be=ve}}}var Be=x.alternate;if(Be!==null){var We=Be.child;if(We!==null){Be.child=null;do{var Wn=We.sibling;We.sibling=null,We=Wn}while(We!==null)}}be=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,be=C;else e:for(;be!==null;){if(x=be,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ku(9,x,x.return)}var J=x.sibling;if(J!==null){J.return=x.return,be=J;break e}be=x.return}}var U=o.current;for(be=U;be!==null;){C=be;var ee=C.child;if((C.subtreeFlags&2064)!==0&&ee!==null)ee.return=C,be=ee;else e:for(C=U;be!==null;){if($=be,($.flags&2048)!==0)try{switch($.tag){case 0:case 11:case 15:Gs(9,$)}}catch(Ae){bn($,$.return,Ae)}if($===C){be=null;break e}var ce=$.sibling;if(ce!==null){ce.return=$.return,be=ce;break e}be=$.return}}if(ze=g,fa(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(is,o)}catch{}h=!0}return h}finally{Ze=l,Et.transition=u}}return!1}function X1(o,u,l){u=Go(l,u),u=h1(o,u,1),o=ma(o,u,1),u=rt(),o!==null&&(pu(o,1,u),ht(o,u))}function bn(o,u,l){if(o.tag===3)X1(o,o,l);else for(;u!==null;){if(u.tag===3){X1(u,o,l);break}else if(u.tag===1){var h=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(va===null||!va.has(h))){o=Go(l,o),o=v1(u,o,1),u=ma(u,o,1),o=rt(),u!==null&&(pu(u,1,o),ht(u,o));break}}u=u.return}}function GO(o,u,l){var h=o.pingCache;h!==null&&h.delete(u),u=rt(),o.pingedLanes|=o.suspendedLanes&l,Ln===o&&(Gn&l)===l&&(Rn===4||Rn===3&&(Gn&130023424)===Gn&&500>Pn()-Z2?Ja(o,0):X2|=l),ht(o,u)}function Z1(o,u){u===0&&((o.mode&1)===0?u=1:(u=ps,ps<<=1,(ps&130023424)===0&&(ps=4194304)));var l=rt();o=Cr(o,u),o!==null&&(pu(o,u,l),ht(o,l))}function KO(o){var u=o.memoizedState,l=0;u!==null&&(l=u.retryLane),Z1(o,l)}function QO(o,u){var l=0;switch(o.tag){case 13:var h=o.stateNode,g=o.memoizedState;g!==null&&(l=g.retryLane);break;case 19:h=o.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(u),Z1(o,l)}var J1;J1=function(o,u,l){if(o!==null)if(o.memoizedProps!==u.pendingProps||ct.current)dt=!0;else{if((o.lanes&l)===0&&(u.flags&128)===0)return dt=!1,TO(o,u,l);dt=(o.flags&131072)!==0}else dt=!1,cn&&(u.flags&1048576)!==0&&Cb(u,Os,u.index);switch(u.lanes=0,u.tag){case 2:var h=u.type;Us(o,u),o=u.pendingProps;var g=jo(u,Yn.current);Uo(u,l),g=_2(null,u,h,o,g,l);var x=O2();return u.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(u.tag=1,u.memoizedState=null,u.updateQueue=null,ft(h)?(x=!0,Ms(u)):x=!1,u.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,x2(u),g.updater=qs,u.stateNode=g,g._reactInternals=u,T2(u,h,o,l),u=$2(null,u,h,!0,x,l)):(u.tag=0,cn&&x&&f2(u),tt(null,u,g,l),u=u.child),u;case 16:h=u.elementType;e:{switch(Us(o,u),o=u.pendingProps,g=h._init,h=g(h._payload),u.type=h,g=u.tag=XO(h),o=er(h,o),g){case 0:u=j2(null,u,h,o,l);break e;case 1:u=W1(null,u,h,o,l);break e;case 11:u=I1(null,u,h,o,l);break e;case 14:u=B1(null,u,h,er(h.type,o),l);break e}throw Error(t(306,h,""))}return u;case 0:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:er(h,g),j2(o,u,h,g,l);case 1:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:er(h,g),W1(o,u,h,g,l);case 3:e:{if(S1(u),o===null)throw Error(t(387));h=u.pendingProps,x=u.memoizedState,g=x.element,Lb(o,u),Ts(u,h,null,l);var C=u.memoizedState;if(h=C.element,x.isDehydrated)if(x={element:h,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},u.updateQueue.baseState=x,u.memoizedState=x,u.flags&256){g=Go(Error(t(423)),u),u=M1(o,u,h,l,g);break e}else if(h!==g){g=Go(Error(t(424)),u),u=M1(o,u,h,l,g);break e}else for(Bt=sa(u.stateNode.containerInfo.firstChild),It=u,cn=!0,Jt=null,l=jb(u,null,h,l),u.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Fo(),h===g){u=Rr(o,u,l);break e}tt(o,u,h,l)}u=u.child}return u;case 5:return zb(u),o===null&&h2(u),h=u.type,g=u.pendingProps,x=o!==null?o.memoizedProps:null,C=g.children,i2(h,g)?C=null:x!==null&&i2(h,x)&&(u.flags|=32),P1(o,u),tt(o,u,C,l),u.child;case 6:return o===null&&h2(u),null;case 13:return A1(o,u,l);case 4:return w2(u,u.stateNode.containerInfo),h=u.pendingProps,o===null?u.child=qo(u,null,h,l):tt(o,u,h,l),u.child;case 11:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:er(h,g),I1(o,u,h,g,l);case 7:return tt(o,u,u.pendingProps,l),u.child;case 8:return tt(o,u,u.pendingProps.children,l),u.child;case 12:return tt(o,u,u.pendingProps.children,l),u.child;case 10:e:{if(h=u.type._context,g=u.pendingProps,x=u.memoizedProps,C=g.value,tn(Ns,h._currentValue),h._currentValue=C,x!==null)if(Zt(x.value,C)){if(x.children===g.children&&!ct.current){u=Rr(o,u,l);break e}}else for(x=u.child,x!==null&&(x.return=u);x!==null;){var $=x.dependencies;if($!==null){C=x.child;for(var q=$.firstContext;q!==null;){if(q.context===h){if(x.tag===1){q=Nr(-1,l&-l),q.tag=2;var ne=x.updateQueue;if(ne!==null){ne=ne.shared;var pe=ne.pending;pe===null?q.next=q:(q.next=pe.next,pe.next=q),ne.pending=q}}x.lanes|=l,q=x.alternate,q!==null&&(q.lanes|=l),I2(x.return,l,u),$.lanes|=l;break}q=q.next}}else if(x.tag===10)C=x.type===u.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=l,$=C.alternate,$!==null&&($.lanes|=l),I2(C,l,u),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===u){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}tt(o,u,g.children,l),u=u.child}return u;case 9:return g=u.type,h=u.pendingProps.children,Uo(u,l),g=kt(g),h=h(g),u.flags|=1,tt(o,u,h,l),u.child;case 14:return h=u.type,g=er(h,u.pendingProps),g=er(h.type,g),B1(o,u,h,g,l);case 15:return x1(o,u,u.type,u.pendingProps,l);case 17:return h=u.type,g=u.pendingProps,g=u.elementType===h?g:er(h,g),Us(o,u),u.tag=1,ft(h)?(o=!0,Ms(u)):o=!1,Uo(u,l),d1(u,h,g),T2(u,h,g,l),$2(null,u,h,!0,o,l);case 19:return O1(o,u,l);case 22:return w1(o,u,l)}throw Error(t(156,u.tag))};function eI(o,u){return N6(o,u)}function YO(o,u,l,h){this.tag=o,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(o,u,l,h){return new YO(o,u,l,h)}function uf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function XO(o){if(typeof o=="function")return uf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===k)return 11;if(o===Y)return 14}return 2}function Ia(o,u){var l=o.alternate;return l===null?(l=Dt(o.tag,u,o.key,o.mode),l.elementType=o.elementType,l.type=o.type,l.stateNode=o.stateNode,l.alternate=o,o.alternate=l):(l.pendingProps=u,l.type=o.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=o.flags&14680064,l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,u=o.dependencies,l.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},l.sibling=o.sibling,l.index=o.index,l.ref=o.ref,l}function tl(o,u,l,h,g,x){var C=2;if(h=o,typeof o=="function")uf(o)&&(C=1);else if(typeof o=="string")C=5;else e:switch(o){case N:return no(l.children,g,x,u);case P:C=8,g|=8;break;case H:return o=Dt(12,l,u,g|2),o.elementType=H,o.lanes=x,o;case F:return o=Dt(13,l,u,g),o.elementType=F,o.lanes=x,o;case Q:return o=Dt(19,l,u,g),o.elementType=Q,o.lanes=x,o;case Z:return rl(l,g,x,u);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case T:C=10;break e;case j:C=9;break e;case k:C=11;break e;case Y:C=14;break e;case X:C=16,h=null;break e}throw Error(t(130,o==null?o:typeof o,""))}return u=Dt(C,l,u,g),u.elementType=o,u.type=h,u.lanes=x,u}function no(o,u,l,h){return o=Dt(7,o,h,u),o.lanes=l,o}function rl(o,u,l,h){return o=Dt(22,o,h,u),o.elementType=Z,o.lanes=l,o.stateNode={isHidden:!1},o}function pf(o,u,l){return o=Dt(6,o,null,u),o.lanes=l,o}function sf(o,u,l){return u=Dt(4,o.children!==null?o.children:[],o.key,u),u.lanes=l,u.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},u}function ZO(o,u,l,h,g){this.tag=u,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function lf(o,u,l,h,g,x,C,$,q){return o=new ZO(o,u,l,$,q),u===1?(u=1,x===!0&&(u|=8)):u=0,x=Dt(3,null,null,u),o.current=x,x.stateNode=o,x.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},x2(x),o}function JO(o,u,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:h==null?null:""+h,children:o,containerInfo:u,implementation:l}}function nI(o){if(!o)return ca;o=o._reactInternals;e:{if(qa(o)!==o||o.tag!==1)throw Error(t(170));var u=o;do{switch(u.tag){case 3:u=u.stateNode.context;break e;case 1:if(ft(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break e}}u=u.return}while(u!==null);throw Error(t(171))}if(o.tag===1){var l=o.type;if(ft(l))return _b(o,l,u)}return u}function tI(o,u,l,h,g,x,C,$,q){return o=lf(l,h,!0,o,g,x,C,$,q),o.context=nI(null),l=o.current,h=rt(),g=ya(l),x=Nr(h,g),x.callback=u??null,ma(l,x,g),o.current.lanes=g,pu(o,g,h),ht(o,h),o}function al(o,u,l,h){var g=u.current,x=rt(),C=ya(g);return l=nI(l),u.context===null?u.context=l:u.pendingContext=l,u=Nr(x,C),u.payload={element:o},h=h===void 0?null:h,h!==null&&(u.callback=h),o=ma(g,u,C),o!==null&&(rr(o,g,C,x),ks(o,g,C)),C}function ol(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function rI(o,u){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var l=o.retryLane;o.retryLane=l!==0&&l<u?l:u}}function cf(o,u){rI(o,u),(o=o.alternate)&&rI(o,u)}function eH(){return null}var aI=typeof reportError=="function"?reportError:function(o){console.error(o)};function ff(o){this._internalRoot=o}il.prototype.render=ff.prototype.render=function(o){var u=this._internalRoot;if(u===null)throw Error(t(409));al(o,u,null,null)},il.prototype.unmount=ff.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var u=o.containerInfo;Za(function(){al(null,o,null,null)}),u[Ar]=null}};function il(o){this._internalRoot=o}il.prototype.unstable_scheduleHydration=function(o){if(o){var u=L6();o={blockedOn:null,target:o,priority:u};for(var l=0;l<ia.length&&u!==0&&u<ia[l].priority;l++);ia.splice(l,0,o),l===0&&z6(o)}};function df(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function ul(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function oI(){}function nH(o,u,l,h,g){if(g){if(typeof h=="function"){var x=h;h=function(){var ne=ol(C);x.call(ne)}}var C=tI(u,h,o,0,null,!1,!1,"",oI);return o._reactRootContainer=C,o[Ar]=C.current,xu(o.nodeType===8?o.parentNode:o),Za(),C}for(;g=o.lastChild;)o.removeChild(g);if(typeof h=="function"){var $=h;h=function(){var ne=ol(q);$.call(ne)}}var q=lf(o,0,!1,null,null,!1,!1,"",oI);return o._reactRootContainer=q,o[Ar]=q.current,xu(o.nodeType===8?o.parentNode:o),Za(function(){al(u,q,l,h)}),q}function pl(o,u,l,h,g){var x=l._reactRootContainer;if(x){var C=x;if(typeof g=="function"){var $=g;g=function(){var q=ol(C);$.call(q)}}al(u,C,o,g)}else C=nH(l,u,o,g,h);return ol(C)}j6=function(o){switch(o.tag){case 3:var u=o.stateNode;if(u.current.memoizedState.isDehydrated){var l=uu(u.pendingLanes);l!==0&&(Tc(u,l|1),ht(u,Pn()),(ze&6)===0&&(Yo=Pn()+500,fa()))}break;case 13:Za(function(){var h=Cr(o,1);if(h!==null){var g=rt();rr(h,o,1,g)}}),cf(o,1)}},Ec=function(o){if(o.tag===13){var u=Cr(o,134217728);if(u!==null){var l=rt();rr(u,o,134217728,l)}cf(o,134217728)}},$6=function(o){if(o.tag===13){var u=ya(o),l=Cr(o,u);if(l!==null){var h=rt();rr(l,o,u,h)}cf(o,u)}},L6=function(){return Ze},F6=function(o,u){var l=Ze;try{return Ze=o,u()}finally{Ze=l}},_c=function(o,u,l){switch(u){case"input":if(Fe(o,l),u=l.name,l.type==="radio"&&u!=null){for(l=o;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+u)+'][type="radio"]'),u=0;u<l.length;u++){var h=l[u];if(h!==o&&h.form===o.form){var g=Ws(h);if(!g)throw Error(t(90));re(h),Fe(h,g)}}}break;case"textarea":yn(o,l);break;case"select":u=l.value,u!=null&&xn(o,!!l.multiple,u,!1)}},S6=rf,M6=Za;var tH={usingClientEntryPoint:!1,Events:[Wu,Eo,Ws,P6,W6,rf]},ju={findFiberByHostInstance:za,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rH={bundleType:ju.bundleType,version:ju.version,rendererPackageName:ju.rendererPackageName,rendererConfig:ju.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=H6(o),o===null?null:o.stateNode},findFiberByHostInstance:ju.findFiberByHostInstance||eH,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{is=sl.inject(rH),fr=sl}catch{}}return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tH,vt.createPortal=function(o,u){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(u))throw Error(t(200));return JO(o,u,null,l)},vt.createRoot=function(o,u){if(!df(o))throw Error(t(299));var l=!1,h="",g=aI;return u!=null&&(u.unstable_strictMode===!0&&(l=!0),u.identifierPrefix!==void 0&&(h=u.identifierPrefix),u.onRecoverableError!==void 0&&(g=u.onRecoverableError)),u=lf(o,1,!1,null,null,l,!1,h,g),o[Ar]=u.current,xu(o.nodeType===8?o.parentNode:o),new ff(u)},vt.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var u=o._reactInternals;if(u===void 0)throw typeof o.render=="function"?Error(t(188)):(o=Object.keys(o).join(","),Error(t(268,o)));return o=H6(u),o=o===null?null:o.stateNode,o},vt.flushSync=function(o){return Za(o)},vt.hydrate=function(o,u,l){if(!ul(u))throw Error(t(200));return pl(null,o,u,!0,l)},vt.hydrateRoot=function(o,u,l){if(!df(o))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,g=!1,x="",C=aI;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),u=tI(u,null,o,1,l??null,g,!1,x,C),o[Ar]=u.current,xu(o),h)for(o=0;o<h.length;o++)l=h[o],g=l._getVersion,g=g(l._source),u.mutableSourceEagerHydrationData==null?u.mutableSourceEagerHydrationData=[l,g]:u.mutableSourceEagerHydrationData.push(l,g);return new il(u)},vt.render=function(o,u,l){if(!ul(u))throw Error(t(200));return pl(null,o,u,!1,l)},vt.unmountComponentAtNode=function(o){if(!ul(o))throw Error(t(40));return o._reactRootContainer?(Za(function(){pl(null,null,o,!1,function(){o._reactRootContainer=null,o[Ar]=null})}),!0):!1},vt.unstable_batchedUpdates=rf,vt.unstable_renderSubtreeIntoContainer=function(o,u,l,h){if(!ul(l))throw Error(t(200));if(o==null||o._reactInternals===void 0)throw Error(t(38));return pl(o,u,l,!1,h)},vt.version="18.3.1-next-f1338f8080-20240426",vt}var dI;function kW(){if(dI)return vf.exports;dI=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),vf.exports=dH(),vf.exports}var mI;function mH(){if(mI)return cl;mI=1;var e=kW();return cl.createRoot=e.createRoot,cl.hydrateRoot=e.hydrateRoot,cl}var hH=mH(),K=sy();const D=Xe(K),vH=uH({__proto__:null,default:D},[K]);var Al={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var gH=Al.exports,hI;function yH(){return hI||(hI=1,(function(e,n){((t,r)=>{e.exports=r()})(gH,function t(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},a,i=!r.document&&!!r.postMessage,p=r.IS_PAPA_WORKER||!1,s={},c=0,f={};function m(P){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(H){var T=w(H);T.chunkSize=parseInt(T.chunkSize),H.step||H.chunk||(T.chunkSize=null),this._handle=new I(T),(this._handle.streamer=this)._config=T}).call(this,P),this.parseChunk=function(H,T){var j=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<j){let F=this._config.newline;F||(k=this._config.quoteChar||'"',F=this._handle.guessLineEndings(H,k)),H=[...H.split(F).slice(j)].join(F)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(k=this._config.beforeFirstChunk(H))!==void 0&&(H=k),this.isFirstChunk=!1,this._halted=!1;var j=this._partialLine+H,k=(this._partialLine="",this._handle.parse(j,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(H=k.meta.cursor,j=(this._finished||(this._partialLine=j.substring(H-this._baseIndex),this._baseIndex=H),k&&k.data&&(this._rowCount+=k.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),p)r.postMessage({results:k,workerId:f.WORKER_ID,finished:j});else if(N(this._config.chunk)&&!T){if(this._config.chunk(k,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=k=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(k.data),this._completeResults.errors=this._completeResults.errors.concat(k.errors),this._completeResults.meta=k.meta),this._completed||!j||!N(this._config.complete)||k&&k.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),j||k&&k.meta.paused||this._nextChunk(),k}this._halted=!0},this._sendError=function(H){N(this._config.error)?this._config.error(H):p&&this._config.error&&r.postMessage({workerId:f.WORKER_ID,error:H,finished:!1})}}function d(P){var H;(P=P||{}).chunkSize||(P.chunkSize=f.RemoteChunkSize),m.call(this,P),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(T){this._input=T,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(H=new XMLHttpRequest,this._config.withCredentials&&(H.withCredentials=this._config.withCredentials),i||(H.onload=S(this._chunkLoaded,this),H.onerror=S(this._chunkError,this)),H.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var T,j=this._config.downloadRequestHeaders;for(T in j)H.setRequestHeader(T,j[T])}var k;this._config.chunkSize&&(k=this._start+this._config.chunkSize-1,H.setRequestHeader("Range","bytes="+this._start+"-"+k));try{H.send(this._config.downloadRequestBody)}catch(F){this._chunkError(F.message)}i&&H.status===0&&this._chunkError()}},this._chunkLoaded=function(){H.readyState===4&&(H.status<200||400<=H.status?this._chunkError():(this._start+=this._config.chunkSize||H.responseText.length,this._finished=!this._config.chunkSize||this._start>=(T=>(T=T.getResponseHeader("Content-Range"))!==null?parseInt(T.substring(T.lastIndexOf("/")+1)):-1)(H),this.parseChunk(H.responseText)))},this._chunkError=function(T){T=H.statusText||T,this._sendError(new Error(T))}}function v(P){(P=P||{}).chunkSize||(P.chunkSize=f.LocalChunkSize),m.call(this,P);var H,T,j=typeof FileReader<"u";this.stream=function(k){this._input=k,T=k.slice||k.webkitSlice||k.mozSlice,j?((H=new FileReader).onload=S(this._chunkLoaded,this),H.onerror=S(this._chunkError,this)):H=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var k=this._input,F=(this._config.chunkSize&&(F=Math.min(this._start+this._config.chunkSize,this._input.size),k=T.call(k,this._start,F)),H.readAsText(k,this._config.encoding));j||this._chunkLoaded({target:{result:F}})},this._chunkLoaded=function(k){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(k.target.result)},this._chunkError=function(){this._sendError(H.error)}}function y(P){var H;m.call(this,P=P||{}),this.stream=function(T){return H=T,this._nextChunk()},this._nextChunk=function(){var T,j;if(!this._finished)return T=this._config.chunkSize,H=T?(j=H.substring(0,T),H.substring(T)):(j=H,""),this._finished=!H,this.parseChunk(j)}}function B(P){m.call(this,P=P||{});var H=[],T=!0,j=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(k){this._input=k,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){j&&H.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),H.length?this.parseChunk(H.shift()):T=!0},this._streamData=S(function(k){try{H.push(typeof k=="string"?k:k.toString(this._config.encoding)),T&&(T=!1,this._checkIsFinished(),this.parseChunk(H.shift()))}catch(F){this._streamError(F)}},this),this._streamError=S(function(k){this._streamCleanUp(),this._sendError(k)},this),this._streamEnd=S(function(){this._streamCleanUp(),j=!0,this._streamData("")},this),this._streamCleanUp=S(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function I(P){var H,T,j,k,F=Math.pow(2,53),Q=-F,Y=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,X=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Z=this,E=0,z=0,V=!1,R=!1,L=[],G={data:[],errors:[],meta:{}};function ie(de){return P.skipEmptyLines==="greedy"?de.join("").trim()==="":de.length===1&&de[0].length===0}function oe(){if(G&&j&&(ge("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),j=!1),P.skipEmptyLines&&(G.data=G.data.filter(function(re){return!ie(re)})),he()){let re=function(Te,Pe){N(P.transformHeader)&&(Te=P.transformHeader(Te,Pe)),L.push(Te)};var fe=re;if(G)if(Array.isArray(G.data[0])){for(var de=0;he()&&de<G.data.length;de++)G.data[de].forEach(re);G.data.splice(0,1)}else G.data.forEach(re)}function te(re,Te){for(var Pe=P.header?{}:[],He=0;He<re.length;He++){var Me=He,Fe=re[He],Fe=((De,qe)=>(Ke=>(P.dynamicTypingFunction&&P.dynamicTyping[Ke]===void 0&&(P.dynamicTyping[Ke]=P.dynamicTypingFunction(Ke)),(P.dynamicTyping[Ke]||P.dynamicTyping)===!0))(De)?qe==="true"||qe==="TRUE"||qe!=="false"&&qe!=="FALSE"&&((Ke=>{if(Y.test(Ke)&&(Ke=parseFloat(Ke),Q<Ke&&Ke<F))return 1})(qe)?parseFloat(qe):X.test(qe)?new Date(qe):qe===""?null:qe):qe)(Me=P.header?He>=L.length?"__parsed_extra":L[He]:Me,Fe=P.transform?P.transform(Fe,Me):Fe);Me==="__parsed_extra"?(Pe[Me]=Pe[Me]||[],Pe[Me].push(Fe)):Pe[Me]=Fe}return P.header&&(He>L.length?ge("FieldMismatch","TooManyFields","Too many fields: expected "+L.length+" fields but parsed "+He,z+Te):He<L.length&&ge("FieldMismatch","TooFewFields","Too few fields: expected "+L.length+" fields but parsed "+He,z+Te)),Pe}var me;G&&(P.header||P.dynamicTyping||P.transform)&&(me=1,!G.data.length||Array.isArray(G.data[0])?(G.data=G.data.map(te),me=G.data.length):G.data=te(G.data,0),P.header&&G.meta&&(G.meta.fields=L),z+=me)}function he(){return P.header&&L.length===0}function ge(de,te,me,fe){de={type:de,code:te,message:me},fe!==void 0&&(de.row=fe),G.errors.push(de)}N(P.step)&&(k=P.step,P.step=function(de){G=de,he()?oe():(oe(),G.data.length!==0&&(E+=de.data.length,P.preview&&E>P.preview?T.abort():(G.data=G.data[0],k(G,Z))))}),this.parse=function(de,te,me){var fe=P.quoteChar||'"',fe=(P.newline||(P.newline=this.guessLineEndings(de,fe)),j=!1,P.delimiter?N(P.delimiter)&&(P.delimiter=P.delimiter(de),G.meta.delimiter=P.delimiter):((fe=((re,Te,Pe,He,Me)=>{var Fe,De,qe,Ke;Me=Me||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var xn=0;xn<Me.length;xn++){for(var gn,Ot=Me[xn],yn=0,Qn=0,wn=0,jn=(qe=void 0,new W({comments:He,delimiter:Ot,newline:Te,preview:10}).parse(re)),lt=0;lt<jn.data.length;lt++)Pe&&ie(jn.data[lt])?wn++:(gn=jn.data[lt].length,Qn+=gn,qe===void 0?qe=gn:0<gn&&(yn+=Math.abs(gn-qe),qe=gn));0<jn.data.length&&(Qn/=jn.data.length-wn),(De===void 0||yn<=De)&&(Ke===void 0||Ke<Qn)&&1.99<Qn&&(De=yn,Fe=Ot,Ke=Qn)}return{successful:!!(P.delimiter=Fe),bestDelimiter:Fe}})(de,P.newline,P.skipEmptyLines,P.comments,P.delimitersToGuess)).successful?P.delimiter=fe.bestDelimiter:(j=!0,P.delimiter=f.DefaultDelimiter),G.meta.delimiter=P.delimiter),w(P));return P.preview&&P.header&&fe.preview++,H=de,T=new W(fe),G=T.parse(H,te,me),oe(),V?{meta:{paused:!0}}:G||{meta:{paused:!1}}},this.paused=function(){return V},this.pause=function(){V=!0,T.abort(),H=N(P.chunk)?"":H.substring(T.getCharIndex())},this.resume=function(){Z.streamer._halted?(V=!1,Z.streamer.parseChunk(H,!0)):setTimeout(Z.resume,3)},this.aborted=function(){return R},this.abort=function(){R=!0,T.abort(),G.meta.aborted=!0,N(P.complete)&&P.complete(G),H=""},this.guessLineEndings=function(re,fe){re=re.substring(0,1048576);var fe=new RegExp(b(fe)+"([^]*?)"+b(fe),"gm"),me=(re=re.replace(fe,"")).split("\r"),fe=re.split(`
`),re=1<fe.length&&fe[0].length<me[0].length;if(me.length===1||re)return`
`;for(var Te=0,Pe=0;Pe<me.length;Pe++)me[Pe][0]===`
`&&Te++;return Te>=me.length/2?`\r
`:"\r"}}function b(P){return P.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function W(P){var H=(P=P||{}).delimiter,T=P.newline,j=P.comments,k=P.step,F=P.preview,Q=P.fastMode,Y=null,X=!1,Z=P.quoteChar==null?'"':P.quoteChar,E=Z;if(P.escapeChar!==void 0&&(E=P.escapeChar),(typeof H!="string"||-1<f.BAD_DELIMITERS.indexOf(H))&&(H=","),j===H)throw new Error("Comment character same as delimiter");j===!0?j="#":(typeof j!="string"||-1<f.BAD_DELIMITERS.indexOf(j))&&(j=!1),T!==`
`&&T!=="\r"&&T!==`\r
`&&(T=`
`);var z=0,V=!1;this.parse=function(R,L,G){if(typeof R!="string")throw new Error("Input must be a string");var ie=R.length,oe=H.length,he=T.length,ge=j.length,de=N(k),te=[],me=[],fe=[],re=z=0;if(!R)return yn();if(Q||Q!==!1&&R.indexOf(Z)===-1){for(var Te=R.split(T),Pe=0;Pe<Te.length;Pe++){if(fe=Te[Pe],z+=fe.length,Pe!==Te.length-1)z+=T.length;else if(G)return yn();if(!j||fe.substring(0,ge)!==j){if(de){if(te=[],Ke(fe.split(H)),Qn(),V)return yn()}else Ke(fe.split(H));if(F&&F<=Pe)return te=te.slice(0,F),yn(!0)}}return yn()}for(var He=R.indexOf(H,z),Me=R.indexOf(T,z),Fe=new RegExp(b(E)+b(Z),"g"),De=R.indexOf(Z,z);;)if(R[z]===Z)for(De=z,z++;;){if((De=R.indexOf(Z,De+1))===-1)return G||me.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:te.length,index:z}),gn();if(De===ie-1)return gn(R.substring(z,De).replace(Fe,Z));if(Z===E&&R[De+1]===E)De++;else if(Z===E||De===0||R[De-1]!==E){He!==-1&&He<De+1&&(He=R.indexOf(H,De+1));var qe=xn((Me=Me!==-1&&Me<De+1?R.indexOf(T,De+1):Me)===-1?He:Math.min(He,Me));if(R.substr(De+1+qe,oe)===H){fe.push(R.substring(z,De).replace(Fe,Z)),R[z=De+1+qe+oe]!==Z&&(De=R.indexOf(Z,z)),He=R.indexOf(H,z),Me=R.indexOf(T,z);break}if(qe=xn(Me),R.substring(De+1+qe,De+1+qe+he)===T){if(fe.push(R.substring(z,De).replace(Fe,Z)),Ot(De+1+qe+he),He=R.indexOf(H,z),De=R.indexOf(Z,z),de&&(Qn(),V))return yn();if(F&&te.length>=F)return yn(!0);break}me.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:te.length,index:z}),De++}}else if(j&&fe.length===0&&R.substring(z,z+ge)===j){if(Me===-1)return yn();z=Me+he,Me=R.indexOf(T,z),He=R.indexOf(H,z)}else if(He!==-1&&(He<Me||Me===-1))fe.push(R.substring(z,He)),z=He+oe,He=R.indexOf(H,z);else{if(Me===-1)break;if(fe.push(R.substring(z,Me)),Ot(Me+he),de&&(Qn(),V))return yn();if(F&&te.length>=F)return yn(!0)}return gn();function Ke(wn){te.push(wn),re=z}function xn(wn){var jn=0;return jn=wn!==-1&&(wn=R.substring(De+1,wn))&&wn.trim()===""?wn.length:jn}function gn(wn){return G||(wn===void 0&&(wn=R.substring(z)),fe.push(wn),z=ie,Ke(fe),de&&Qn()),yn()}function Ot(wn){z=wn,Ke(fe),fe=[],Me=R.indexOf(T,z)}function yn(wn){if(P.header&&!L&&te.length&&!X){var jn=te[0],lt=Object.create(null),Mo=new Set(jn);let na=!1;for(let Ht=0;Ht<jn.length;Ht++){let Ct=jn[Ht];if(lt[Ct=N(P.transformHeader)?P.transformHeader(Ct,Ht):Ct]){let ta,ru=lt[Ct];for(;ta=Ct+"_"+ru,ru++,Mo.has(ta););Mo.add(ta),jn[Ht]=ta,lt[Ct]++,na=!0,(Y=Y===null?{}:Y)[ta]=Ct}else lt[Ct]=1,jn[Ht]=Ct;Mo.add(Ct)}na&&console.warn("Duplicate headers found and renamed."),X=!0}return{data:te,errors:me,meta:{delimiter:H,linebreak:T,aborted:V,truncated:!!wn,cursor:re+(L||0),renamedHeaders:Y}}}function Qn(){k(yn()),te=[],me=[]}},this.abort=function(){V=!0},this.getCharIndex=function(){return z}}function M(P){var H=P.data,T=s[H.workerId],j=!1;if(H.error)T.userError(H.error,H.file);else if(H.results&&H.results.data){var k={abort:function(){j=!0,A(H.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:O,resume:O};if(N(T.userStep)){for(var F=0;F<H.results.data.length&&(T.userStep({data:H.results.data[F],errors:H.results.errors,meta:H.results.meta},k),!j);F++);delete H.results}else N(T.userChunk)&&(T.userChunk(H.results,k,H.file),delete H.results)}H.finished&&!j&&A(H.workerId,H.results)}function A(P,H){var T=s[P];N(T.userComplete)&&T.userComplete(H),T.terminate(),delete s[P]}function O(){throw new Error("Not implemented.")}function w(P){if(typeof P!="object"||P===null)return P;var H,T=Array.isArray(P)?[]:{};for(H in P)T[H]=w(P[H]);return T}function S(P,H){return function(){P.apply(H,arguments)}}function N(P){return typeof P=="function"}return f.parse=function(P,H){var T=(H=H||{}).dynamicTyping||!1;if(N(T)&&(H.dynamicTypingFunction=T,T={}),H.dynamicTyping=T,H.transform=!!N(H.transform)&&H.transform,!H.worker||!f.WORKERS_SUPPORTED)return T=null,f.NODE_STREAM_INPUT,typeof P=="string"?(P=(j=>j.charCodeAt(0)!==65279?j:j.slice(1))(P),T=new(H.download?d:y)(H)):P.readable===!0&&N(P.read)&&N(P.on)?T=new B(H):(r.File&&P instanceof File||P instanceof Object)&&(T=new v(H)),T.stream(P);(T=(()=>{var j;return!!f.WORKERS_SUPPORTED&&(j=(()=>{var k=r.URL||r.webkitURL||null,F=t.toString();return f.BLOB_URL||(f.BLOB_URL=k.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",F,")();"],{type:"text/javascript"})))})(),(j=new r.Worker(j)).onmessage=M,j.id=c++,s[j.id]=j)})()).userStep=H.step,T.userChunk=H.chunk,T.userComplete=H.complete,T.userError=H.error,H.step=N(H.step),H.chunk=N(H.chunk),H.complete=N(H.complete),H.error=N(H.error),delete H.worker,T.postMessage({input:P,config:H,workerId:T.id})},f.unparse=function(P,H){var T=!1,j=!0,k=",",F=`\r
`,Q='"',Y=Q+Q,X=!1,Z=null,E=!1,z=((()=>{if(typeof H=="object"){if(typeof H.delimiter!="string"||f.BAD_DELIMITERS.filter(function(L){return H.delimiter.indexOf(L)!==-1}).length||(k=H.delimiter),typeof H.quotes!="boolean"&&typeof H.quotes!="function"&&!Array.isArray(H.quotes)||(T=H.quotes),typeof H.skipEmptyLines!="boolean"&&typeof H.skipEmptyLines!="string"||(X=H.skipEmptyLines),typeof H.newline=="string"&&(F=H.newline),typeof H.quoteChar=="string"&&(Q=H.quoteChar),typeof H.header=="boolean"&&(j=H.header),Array.isArray(H.columns)){if(H.columns.length===0)throw new Error("Option columns is empty");Z=H.columns}H.escapeChar!==void 0&&(Y=H.escapeChar+Q),H.escapeFormulae instanceof RegExp?E=H.escapeFormulae:typeof H.escapeFormulae=="boolean"&&H.escapeFormulae&&(E=/^[=+\-@\t\r].*$/)}})(),new RegExp(b(Q),"g"));if(typeof P=="string"&&(P=JSON.parse(P)),Array.isArray(P)){if(!P.length||Array.isArray(P[0]))return V(null,P,X);if(typeof P[0]=="object")return V(Z||Object.keys(P[0]),P,X)}else if(typeof P=="object")return typeof P.data=="string"&&(P.data=JSON.parse(P.data)),Array.isArray(P.data)&&(P.fields||(P.fields=P.meta&&P.meta.fields||Z),P.fields||(P.fields=Array.isArray(P.data[0])?P.fields:typeof P.data[0]=="object"?Object.keys(P.data[0]):[]),Array.isArray(P.data[0])||typeof P.data[0]=="object"||(P.data=[P.data])),V(P.fields||[],P.data||[],X);throw new Error("Unable to serialize unrecognized input");function V(L,G,ie){var oe="",he=(typeof L=="string"&&(L=JSON.parse(L)),typeof G=="string"&&(G=JSON.parse(G)),Array.isArray(L)&&0<L.length),ge=!Array.isArray(G[0]);if(he&&j){for(var de=0;de<L.length;de++)0<de&&(oe+=k),oe+=R(L[de],de);0<G.length&&(oe+=F)}for(var te=0;te<G.length;te++){var me=(he?L:G[te]).length,fe=!1,re=he?Object.keys(G[te]).length===0:G[te].length===0;if(ie&&!he&&(fe=ie==="greedy"?G[te].join("").trim()==="":G[te].length===1&&G[te][0].length===0),ie==="greedy"&&he){for(var Te=[],Pe=0;Pe<me;Pe++){var He=ge?L[Pe]:Pe;Te.push(G[te][He])}fe=Te.join("").trim()===""}if(!fe){for(var Me=0;Me<me;Me++){0<Me&&!re&&(oe+=k);var Fe=he&&ge?L[Me]:Me;oe+=R(G[te][Fe],Me)}te<G.length-1&&(!ie||0<me&&!re)&&(oe+=F)}}return oe}function R(L,G){var ie,oe;return L==null?"":L.constructor===Date?JSON.stringify(L).slice(1,25):(oe=!1,E&&typeof L=="string"&&E.test(L)&&(L="'"+L,oe=!0),ie=L.toString().replace(z,Y),(oe=oe||T===!0||typeof T=="function"&&T(L,G)||Array.isArray(T)&&T[G]||((he,ge)=>{for(var de=0;de<ge.length;de++)if(-1<he.indexOf(ge[de]))return!0;return!1})(ie,f.BAD_DELIMITERS)||-1<ie.indexOf(k)||ie.charAt(0)===" "||ie.charAt(ie.length-1)===" ")?Q+ie+Q:ie)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!i&&!!r.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=W,f.ParserHandle=I,f.NetworkStreamer=d,f.FileStreamer=v,f.StringStreamer=y,f.ReadableStreamStreamer=B,r.jQuery&&((a=r.jQuery).fn.parse=function(P){var H=P.config||{},T=[];return this.each(function(F){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var Q=0;Q<this.files.length;Q++)T.push({file:this.files[Q],inputElem:this,instanceConfig:a.extend({},H)})}),j(),this;function j(){if(T.length===0)N(P.complete)&&P.complete();else{var F,Q,Y,X,Z=T[0];if(N(P.before)){var E=P.before(Z.file,Z.inputElem);if(typeof E=="object"){if(E.action==="abort")return F="AbortError",Q=Z.file,Y=Z.inputElem,X=E.reason,void(N(P.error)&&P.error({name:F},Q,Y,X));if(E.action==="skip")return void k();typeof E.config=="object"&&(Z.instanceConfig=a.extend(Z.instanceConfig,E.config))}else if(E==="skip")return void k()}var z=Z.instanceConfig.complete;Z.instanceConfig.complete=function(V){N(z)&&z(V,Z.file,Z.inputElem),k()},f.parse(Z.file,Z.instanceConfig)}}function k(){T.splice(0,1),j()}}),p&&(r.onmessage=function(P){P=P.data,f.WORKER_ID===void 0&&P&&(f.WORKER_ID=P.workerId),typeof P.input=="string"?r.postMessage({workerId:f.WORKER_ID,results:f.parse(P.input,P.config),finished:!0}):(r.File&&P.input instanceof File||P.input instanceof Object)&&(P=f.parse(P.input,P.config))&&r.postMessage({workerId:f.WORKER_ID,results:P,finished:!0})}),(d.prototype=Object.create(m.prototype)).constructor=d,(v.prototype=Object.create(m.prototype)).constructor=v,(y.prototype=Object.create(y.prototype)).constructor=y,(B.prototype=Object.create(m.prototype)).constructor=B,f})})(Al)),Al.exports}var bH=yH();const vI=Xe(bH);function gI(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function TW(...e){return n=>{let t=!1;const r=e.map(a=>{const i=gI(a,n);return!t&&typeof i=="function"&&(t=!0),i});if(t)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():gI(e[a],null)}}}}function Ol(...e){return K.useCallback(TW(...e),e)}var fp=K.forwardRef((e,n)=>{const{children:t,...r}=e,a=K.Children.toArray(t),i=a.find(BH);if(i){const p=i.props.children,s=a.map(c=>c===i?K.Children.count(p)>1?K.Children.only(null):K.isValidElement(p)?p.props.children:null:c);return _.jsx(Sv,{...r,ref:n,children:K.isValidElement(p)?K.cloneElement(p,void 0,s):null})}return _.jsx(Sv,{...r,ref:n,children:t})});fp.displayName="Slot";var Sv=K.forwardRef((e,n)=>{const{children:t,...r}=e;if(K.isValidElement(t)){const a=wH(t),i=xH(r,t.props);return t.type!==K.Fragment&&(i.ref=n?TW(n,a):a),K.cloneElement(t,i)}return K.Children.count(t)>1?K.Children.only(null):null});Sv.displayName="SlotClone";var IH=({children:e})=>_.jsx(_.Fragment,{children:e});function BH(e){return K.isValidElement(e)&&e.type===IH}function xH(e,n){const t={...n};for(const r in n){const a=e[r],i=n[r];/^on[A-Z]/.test(r)?a&&i?t[r]=(...s)=>{i(...s),a(...s)}:a&&(t[r]=a):r==="style"?t[r]={...a,...i}:r==="className"&&(t[r]=[a,i].filter(Boolean).join(" "))}return{...e,...t}}function wH(e){var r,a;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function EW(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(t=EW(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Ee(){for(var e,n,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&(n=EW(e))&&(r&&(r+=" "),r+=n);return r}const yI=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,bI=Ee,PH=(e,n)=>t=>{var r;if((n==null?void 0:n.variants)==null)return bI(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:a,defaultVariants:i}=n,p=Object.keys(a).map(f=>{const m=t==null?void 0:t[f],d=i==null?void 0:i[f];if(m===null)return null;const v=yI(m)||yI(d);return a[f][v]}),s=t&&Object.entries(t).reduce((f,m)=>{let[d,v]=m;return v===void 0||(f[d]=v),f},{}),c=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((f,m)=>{let{class:d,className:v,...y}=m;return Object.entries(y).every(B=>{let[I,b]=B;return Array.isArray(b)?b.includes({...i,...s}[I]):{...i,...s}[I]===b})?[...f,d,v]:f},[]);return bI(e,p,c,t==null?void 0:t.class,t==null?void 0:t.className)},ly="-",WH=e=>{const n=MH(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:p=>{const s=p.split(ly);return s[0]===""&&s.length!==1&&s.shift(),DW(s,n)||SH(p)},getConflictingClassGroupIds:(p,s)=>{const c=t[p]||[];return s&&r[p]?[...c,...r[p]]:c}}},DW=(e,n)=>{var p;if(e.length===0)return n.classGroupId;const t=e[0],r=n.nextPart.get(t),a=r?DW(e.slice(1),r):void 0;if(a)return a;if(n.validators.length===0)return;const i=e.join(ly);return(p=n.validators.find(({validator:s})=>s(i)))==null?void 0:p.classGroupId},II=/^\[(.+)\]$/,SH=e=>{if(II.test(e)){const n=II.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}},MH=e=>{const{theme:n,classGroups:t}=e,r={nextPart:new Map,validators:[]};for(const a in t)Mv(t[a],r,a,n);return r},Mv=(e,n,t,r)=>{e.forEach(a=>{if(typeof a=="string"){const i=a===""?n:BI(n,a);i.classGroupId=t;return}if(typeof a=="function"){if(AH(a)){Mv(a(r),n,t,r);return}n.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([i,p])=>{Mv(p,BI(n,i),t,r)})})},BI=(e,n)=>{let t=e;return n.split(ly).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},AH=e=>e.isThemeGetter,_H=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,r=new Map;const a=(i,p)=>{t.set(i,p),n++,n>e&&(n=0,r=t,t=new Map)};return{get(i){let p=t.get(i);if(p!==void 0)return p;if((p=r.get(i))!==void 0)return a(i,p),p},set(i,p){t.has(i)?t.set(i,p):a(i,p)}}},Av="!",_v=":",OH=_v.length,HH=e=>{const{prefix:n,experimentalParseClassName:t}=e;let r=a=>{const i=[];let p=0,s=0,c=0,f;for(let B=0;B<a.length;B++){let I=a[B];if(p===0&&s===0){if(I===_v){i.push(a.slice(c,B)),c=B+OH;continue}if(I==="/"){f=B;continue}}I==="["?p++:I==="]"?p--:I==="("?s++:I===")"&&s--}const m=i.length===0?a:a.substring(c),d=CH(m),v=d!==m,y=f&&f>c?f-c:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:d,maybePostfixModifierPosition:y}};if(n){const a=n+_v,i=r;r=p=>p.startsWith(a)?i(p.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:p,maybePostfixModifierPosition:void 0}}if(t){const a=r;r=i=>t({className:i,parseClassName:a})}return r},CH=e=>e.endsWith(Av)?e.substring(0,e.length-1):e.startsWith(Av)?e.substring(1):e,NH=e=>{const n=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let i=[];return r.forEach(p=>{p[0]==="["||n[p]?(a.push(...i.sort(),p),i=[]):i.push(p)}),a.push(...i.sort()),a}},RH=e=>({cache:_H(e.cacheSize),parseClassName:HH(e),sortModifiers:NH(e),...WH(e)}),kH=/\s+/,TH=(e,n)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=n,p=[],s=e.trim().split(kH);let c="";for(let f=s.length-1;f>=0;f-=1){const m=s[f],{isExternal:d,modifiers:v,hasImportantModifier:y,baseClassName:B,maybePostfixModifierPosition:I}=t(m);if(d){c=m+(c.length>0?" "+c:c);continue}let b=!!I,W=r(b?B.substring(0,I):B);if(!W){if(!b){c=m+(c.length>0?" "+c:c);continue}if(W=r(B),!W){c=m+(c.length>0?" "+c:c);continue}b=!1}const M=i(v).join(":"),A=y?M+Av:M,O=A+W;if(p.includes(O))continue;p.push(O);const w=a(W,b);for(let S=0;S<w.length;++S){const N=w[S];p.push(A+N)}c=m+(c.length>0?" "+c:c)}return c};function EH(){let e=0,n,t,r="";for(;e<arguments.length;)(n=arguments[e++])&&(t=jW(n))&&(r&&(r+=" "),r+=t);return r}const jW=e=>{if(typeof e=="string")return e;let n,t="";for(let r=0;r<e.length;r++)e[r]&&(n=jW(e[r]))&&(t&&(t+=" "),t+=n);return t};function DH(e,...n){let t,r,a,i=p;function p(c){const f=n.reduce((m,d)=>d(m),e());return t=RH(f),r=t.cache.get,a=t.cache.set,i=s,s(c)}function s(c){const f=r(c);if(f)return f;const m=TH(c,t);return a(c,m),m}return function(){return i(EH.apply(null,arguments))}}const kn=e=>{const n=t=>t[e]||[];return n.isThemeGetter=!0,n},$W=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,LW=/^\((?:(\w[\w-]*):)?(.+)\)$/i,jH=/^\d+\/\d+$/,$H=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,LH=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,FH=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,qH=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,zH=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Zo=e=>jH.test(e),$e=e=>!!e&&!Number.isNaN(Number(e)),xa=e=>!!e&&Number.isInteger(Number(e)),bf=e=>e.endsWith("%")&&$e(e.slice(0,-1)),Tr=e=>$H.test(e),UH=()=>!0,VH=e=>LH.test(e)&&!FH.test(e),FW=()=>!1,GH=e=>qH.test(e),KH=e=>zH.test(e),QH=e=>!xe(e)&&!we(e),YH=e=>zi(e,UW,FW),xe=e=>$W.test(e),to=e=>zi(e,VW,VH),If=e=>zi(e,nC,$e),xI=e=>zi(e,qW,FW),XH=e=>zi(e,zW,KH),fl=e=>zi(e,GW,GH),we=e=>LW.test(e),Lu=e=>Ui(e,VW),ZH=e=>Ui(e,tC),wI=e=>Ui(e,qW),JH=e=>Ui(e,UW),eC=e=>Ui(e,zW),dl=e=>Ui(e,GW,!0),zi=(e,n,t)=>{const r=$W.exec(e);return r?r[1]?n(r[1]):t(r[2]):!1},Ui=(e,n,t=!1)=>{const r=LW.exec(e);return r?r[1]?n(r[1]):t:!1},qW=e=>e==="position"||e==="percentage",zW=e=>e==="image"||e==="url",UW=e=>e==="length"||e==="size"||e==="bg-size",VW=e=>e==="length",nC=e=>e==="number",tC=e=>e==="family-name",GW=e=>e==="shadow",rC=()=>{const e=kn("color"),n=kn("font"),t=kn("text"),r=kn("font-weight"),a=kn("tracking"),i=kn("leading"),p=kn("breakpoint"),s=kn("container"),c=kn("spacing"),f=kn("radius"),m=kn("shadow"),d=kn("inset-shadow"),v=kn("text-shadow"),y=kn("drop-shadow"),B=kn("blur"),I=kn("perspective"),b=kn("aspect"),W=kn("ease"),M=kn("animate"),A=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...O(),we,xe],S=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto","contain","none"],P=()=>[we,xe,c],H=()=>[Zo,"full","auto",...P()],T=()=>[xa,"none","subgrid",we,xe],j=()=>["auto",{span:["full",xa,we,xe]},xa,we,xe],k=()=>[xa,"auto",we,xe],F=()=>["auto","min","max","fr",we,xe],Q=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Y=()=>["start","end","center","stretch","center-safe","end-safe"],X=()=>["auto",...P()],Z=()=>[Zo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],E=()=>[e,we,xe],z=()=>[...O(),wI,xI,{position:[we,xe]}],V=()=>["no-repeat",{repeat:["","x","y","space","round"]}],R=()=>["auto","cover","contain",JH,YH,{size:[we,xe]}],L=()=>[bf,Lu,to],G=()=>["","none","full",f,we,xe],ie=()=>["",$e,Lu,to],oe=()=>["solid","dashed","dotted","double"],he=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ge=()=>[$e,bf,wI,xI],de=()=>["","none",B,we,xe],te=()=>["none",$e,we,xe],me=()=>["none",$e,we,xe],fe=()=>[$e,we,xe],re=()=>[Zo,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Tr],breakpoint:[Tr],color:[UH],container:[Tr],"drop-shadow":[Tr],ease:["in","out","in-out"],font:[QH],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Tr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Tr],shadow:[Tr],spacing:["px",$e],text:[Tr],"text-shadow":[Tr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Zo,xe,we,b]}],container:["container"],columns:[{columns:[$e,xe,we,s]}],"break-after":[{"break-after":A()}],"break-before":[{"break-before":A()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:H()}],"inset-x":[{"inset-x":H()}],"inset-y":[{"inset-y":H()}],start:[{start:H()}],end:[{end:H()}],top:[{top:H()}],right:[{right:H()}],bottom:[{bottom:H()}],left:[{left:H()}],visibility:["visible","invisible","collapse"],z:[{z:[xa,"auto",we,xe]}],basis:[{basis:[Zo,"full","auto",s,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,Zo,"auto","initial","none",xe]}],grow:[{grow:["",$e,we,xe]}],shrink:[{shrink:["",$e,we,xe]}],order:[{order:[xa,"first","last","none",we,xe]}],"grid-cols":[{"grid-cols":T()}],"col-start-end":[{col:j()}],"col-start":[{"col-start":k()}],"col-end":[{"col-end":k()}],"grid-rows":[{"grid-rows":T()}],"row-start-end":[{row:j()}],"row-start":[{"row-start":k()}],"row-end":[{"row-end":k()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":F()}],"auto-rows":[{"auto-rows":F()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...Q(),"normal"]}],"justify-items":[{"justify-items":[...Y(),"normal"]}],"justify-self":[{"justify-self":["auto",...Y()]}],"align-content":[{content:["normal",...Q()]}],"align-items":[{items:[...Y(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Y(),{baseline:["","last"]}]}],"place-content":[{"place-content":Q()}],"place-items":[{"place-items":[...Y(),"baseline"]}],"place-self":[{"place-self":["auto",...Y()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:X()}],mx:[{mx:X()}],my:[{my:X()}],ms:[{ms:X()}],me:[{me:X()}],mt:[{mt:X()}],mr:[{mr:X()}],mb:[{mb:X()}],ml:[{ml:X()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:Z()}],w:[{w:[s,"screen",...Z()]}],"min-w":[{"min-w":[s,"screen","none",...Z()]}],"max-w":[{"max-w":[s,"screen","none","prose",{screen:[p]},...Z()]}],h:[{h:["screen",...Z()]}],"min-h":[{"min-h":["screen","none",...Z()]}],"max-h":[{"max-h":["screen",...Z()]}],"font-size":[{text:["base",t,Lu,to]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,we,If]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",bf,xe]}],"font-family":[{font:[ZH,xe,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,we,xe]}],"line-clamp":[{"line-clamp":[$e,"none",we,If]}],leading:[{leading:[i,...P()]}],"list-image":[{"list-image":["none",we,xe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",we,xe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:E()}],"text-color":[{text:E()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...oe(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",we,to]}],"text-decoration-color":[{decoration:E()}],"underline-offset":[{"underline-offset":[$e,"auto",we,xe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we,xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we,xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:z()}],"bg-repeat":[{bg:V()}],"bg-size":[{bg:R()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xa,we,xe],radial:["",we,xe],conic:[xa,we,xe]},eC,XH]}],"bg-color":[{bg:E()}],"gradient-from-pos":[{from:L()}],"gradient-via-pos":[{via:L()}],"gradient-to-pos":[{to:L()}],"gradient-from":[{from:E()}],"gradient-via":[{via:E()}],"gradient-to":[{to:E()}],rounded:[{rounded:G()}],"rounded-s":[{"rounded-s":G()}],"rounded-e":[{"rounded-e":G()}],"rounded-t":[{"rounded-t":G()}],"rounded-r":[{"rounded-r":G()}],"rounded-b":[{"rounded-b":G()}],"rounded-l":[{"rounded-l":G()}],"rounded-ss":[{"rounded-ss":G()}],"rounded-se":[{"rounded-se":G()}],"rounded-ee":[{"rounded-ee":G()}],"rounded-es":[{"rounded-es":G()}],"rounded-tl":[{"rounded-tl":G()}],"rounded-tr":[{"rounded-tr":G()}],"rounded-br":[{"rounded-br":G()}],"rounded-bl":[{"rounded-bl":G()}],"border-w":[{border:ie()}],"border-w-x":[{"border-x":ie()}],"border-w-y":[{"border-y":ie()}],"border-w-s":[{"border-s":ie()}],"border-w-e":[{"border-e":ie()}],"border-w-t":[{"border-t":ie()}],"border-w-r":[{"border-r":ie()}],"border-w-b":[{"border-b":ie()}],"border-w-l":[{"border-l":ie()}],"divide-x":[{"divide-x":ie()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ie()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...oe(),"hidden","none"]}],"divide-style":[{divide:[...oe(),"hidden","none"]}],"border-color":[{border:E()}],"border-color-x":[{"border-x":E()}],"border-color-y":[{"border-y":E()}],"border-color-s":[{"border-s":E()}],"border-color-e":[{"border-e":E()}],"border-color-t":[{"border-t":E()}],"border-color-r":[{"border-r":E()}],"border-color-b":[{"border-b":E()}],"border-color-l":[{"border-l":E()}],"divide-color":[{divide:E()}],"outline-style":[{outline:[...oe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,we,xe]}],"outline-w":[{outline:["",$e,Lu,to]}],"outline-color":[{outline:E()}],shadow:[{shadow:["","none",m,dl,fl]}],"shadow-color":[{shadow:E()}],"inset-shadow":[{"inset-shadow":["none",d,dl,fl]}],"inset-shadow-color":[{"inset-shadow":E()}],"ring-w":[{ring:ie()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:E()}],"ring-offset-w":[{"ring-offset":[$e,to]}],"ring-offset-color":[{"ring-offset":E()}],"inset-ring-w":[{"inset-ring":ie()}],"inset-ring-color":[{"inset-ring":E()}],"text-shadow":[{"text-shadow":["none",v,dl,fl]}],"text-shadow-color":[{"text-shadow":E()}],opacity:[{opacity:[$e,we,xe]}],"mix-blend":[{"mix-blend":[...he(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":he()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":ge()}],"mask-image-linear-to-pos":[{"mask-linear-to":ge()}],"mask-image-linear-from-color":[{"mask-linear-from":E()}],"mask-image-linear-to-color":[{"mask-linear-to":E()}],"mask-image-t-from-pos":[{"mask-t-from":ge()}],"mask-image-t-to-pos":[{"mask-t-to":ge()}],"mask-image-t-from-color":[{"mask-t-from":E()}],"mask-image-t-to-color":[{"mask-t-to":E()}],"mask-image-r-from-pos":[{"mask-r-from":ge()}],"mask-image-r-to-pos":[{"mask-r-to":ge()}],"mask-image-r-from-color":[{"mask-r-from":E()}],"mask-image-r-to-color":[{"mask-r-to":E()}],"mask-image-b-from-pos":[{"mask-b-from":ge()}],"mask-image-b-to-pos":[{"mask-b-to":ge()}],"mask-image-b-from-color":[{"mask-b-from":E()}],"mask-image-b-to-color":[{"mask-b-to":E()}],"mask-image-l-from-pos":[{"mask-l-from":ge()}],"mask-image-l-to-pos":[{"mask-l-to":ge()}],"mask-image-l-from-color":[{"mask-l-from":E()}],"mask-image-l-to-color":[{"mask-l-to":E()}],"mask-image-x-from-pos":[{"mask-x-from":ge()}],"mask-image-x-to-pos":[{"mask-x-to":ge()}],"mask-image-x-from-color":[{"mask-x-from":E()}],"mask-image-x-to-color":[{"mask-x-to":E()}],"mask-image-y-from-pos":[{"mask-y-from":ge()}],"mask-image-y-to-pos":[{"mask-y-to":ge()}],"mask-image-y-from-color":[{"mask-y-from":E()}],"mask-image-y-to-color":[{"mask-y-to":E()}],"mask-image-radial":[{"mask-radial":[we,xe]}],"mask-image-radial-from-pos":[{"mask-radial-from":ge()}],"mask-image-radial-to-pos":[{"mask-radial-to":ge()}],"mask-image-radial-from-color":[{"mask-radial-from":E()}],"mask-image-radial-to-color":[{"mask-radial-to":E()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":O()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":ge()}],"mask-image-conic-to-pos":[{"mask-conic-to":ge()}],"mask-image-conic-from-color":[{"mask-conic-from":E()}],"mask-image-conic-to-color":[{"mask-conic-to":E()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:z()}],"mask-repeat":[{mask:V()}],"mask-size":[{mask:R()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",we,xe]}],filter:[{filter:["","none",we,xe]}],blur:[{blur:de()}],brightness:[{brightness:[$e,we,xe]}],contrast:[{contrast:[$e,we,xe]}],"drop-shadow":[{"drop-shadow":["","none",y,dl,fl]}],"drop-shadow-color":[{"drop-shadow":E()}],grayscale:[{grayscale:["",$e,we,xe]}],"hue-rotate":[{"hue-rotate":[$e,we,xe]}],invert:[{invert:["",$e,we,xe]}],saturate:[{saturate:[$e,we,xe]}],sepia:[{sepia:["",$e,we,xe]}],"backdrop-filter":[{"backdrop-filter":["","none",we,xe]}],"backdrop-blur":[{"backdrop-blur":de()}],"backdrop-brightness":[{"backdrop-brightness":[$e,we,xe]}],"backdrop-contrast":[{"backdrop-contrast":[$e,we,xe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,we,xe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,we,xe]}],"backdrop-invert":[{"backdrop-invert":["",$e,we,xe]}],"backdrop-opacity":[{"backdrop-opacity":[$e,we,xe]}],"backdrop-saturate":[{"backdrop-saturate":[$e,we,xe]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,we,xe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",we,xe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",we,xe]}],ease:[{ease:["linear","initial",W,we,xe]}],delay:[{delay:[$e,we,xe]}],animate:[{animate:["none",M,we,xe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,we,xe]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:te()}],"rotate-x":[{"rotate-x":te()}],"rotate-y":[{"rotate-y":te()}],"rotate-z":[{"rotate-z":te()}],scale:[{scale:me()}],"scale-x":[{"scale-x":me()}],"scale-y":[{"scale-y":me()}],"scale-z":[{"scale-z":me()}],"scale-3d":["scale-3d"],skew:[{skew:fe()}],"skew-x":[{"skew-x":fe()}],"skew-y":[{"skew-y":fe()}],transform:[{transform:[we,xe,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:re()}],"translate-x":[{"translate-x":re()}],"translate-y":[{"translate-y":re()}],"translate-z":[{"translate-z":re()}],"translate-none":["translate-none"],accent:[{accent:E()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:E()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we,xe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we,xe]}],fill:[{fill:["none",...E()]}],"stroke-w":[{stroke:[$e,Lu,to,If]}],stroke:[{stroke:["none",...E()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},aC=DH(rC);function st(...e){return aC(Ee(e))}const oC=PH("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Bf({className:e,variant:n,size:t,asChild:r=!1,...a}){const i=r?fp:"button";return _.jsx(i,{"data-slot":"button",className:st(oC({variant:n,size:t,className:e})),...a})}function zt({className:e,...n}){return _.jsx("div",{"data-slot":"card",className:st("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...n})}function D0({className:e,...n}){return _.jsx("div",{"data-slot":"card-header",className:st("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...n})}function j0({className:e,...n}){return _.jsx("h4",{"data-slot":"card-title",className:st("leading-none",e),...n})}function Ut({className:e,...n}){return _.jsx("div",{"data-slot":"card-content",className:st("px-6 [&:last-child]:pb-6",e),...n})}function zr(e,n,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e==null||e(a),t===!1||!a.defaultPrevented)return n==null?void 0:n(a)}}function cy(e,n=[]){let t=[];function r(i,p){const s=K.createContext(p),c=t.length;t=[...t,p];const f=d=>{var W;const{scope:v,children:y,...B}=d,I=((W=v==null?void 0:v[e])==null?void 0:W[c])||s,b=K.useMemo(()=>B,Object.values(B));return _.jsx(I.Provider,{value:b,children:y})};f.displayName=i+"Provider";function m(d,v){var I;const y=((I=v==null?void 0:v[e])==null?void 0:I[c])||s,B=K.useContext(y);if(B)return B;if(p!==void 0)return p;throw new Error(`\`${d}\` must be used within \`${i}\``)}return[f,m]}const a=()=>{const i=t.map(p=>K.createContext(p));return function(s){const c=(s==null?void 0:s[e])||i;return K.useMemo(()=>({[`__scope${e}`]:{...s,[e]:c}}),[s,c])}};return a.scopeName=e,[r,iC(a,...n)]}function iC(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const p=r.reduce((s,{useScope:c,scopeName:f})=>{const d=c(i)[`__scope${f}`];return{...s,...d}},{});return K.useMemo(()=>({[`__scope${n.scopeName}`]:p}),[p])}};return t.scopeName=n.scopeName,t}function uC(e){const n=e+"CollectionProvider",[t,r]=cy(n),[a,i]=t(n,{collectionRef:{current:null},itemMap:new Map}),p=y=>{const{scope:B,children:I}=y,b=D.useRef(null),W=D.useRef(new Map).current;return _.jsx(a,{scope:B,itemMap:W,collectionRef:b,children:I})};p.displayName=n;const s=e+"CollectionSlot",c=D.forwardRef((y,B)=>{const{scope:I,children:b}=y,W=i(s,I),M=Ol(B,W.collectionRef);return _.jsx(fp,{ref:M,children:b})});c.displayName=s;const f=e+"CollectionItemSlot",m="data-radix-collection-item",d=D.forwardRef((y,B)=>{const{scope:I,children:b,...W}=y,M=D.useRef(null),A=Ol(B,M),O=i(f,I);return D.useEffect(()=>(O.itemMap.set(M,{ref:M,...W}),()=>void O.itemMap.delete(M))),_.jsx(fp,{[m]:"",ref:A,children:b})});d.displayName=f;function v(y){const B=i(e+"CollectionConsumer",y);return D.useCallback(()=>{const b=B.collectionRef.current;if(!b)return[];const W=Array.from(b.querySelectorAll(`[${m}]`));return Array.from(B.itemMap.values()).sort((O,w)=>W.indexOf(O.ref.current)-W.indexOf(w.ref.current))},[B.collectionRef,B.itemMap])}return[{Provider:p,Slot:c,ItemSlot:d},v,r]}var Ov=globalThis!=null&&globalThis.document?K.useLayoutEffect:()=>{},pC=vH.useId||(()=>{}),sC=0;function KW(e){const[n,t]=K.useState(pC());return Ov(()=>{t(r=>r??String(sC++))},[e]),e||(n?`radix-${n}`:"")}kW();var lC=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Vi=lC.reduce((e,n)=>{const t=K.forwardRef((r,a)=>{const{asChild:i,...p}=r,s=i?fp:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),_.jsx(s,{...p,ref:a})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function fy(e){const n=K.useRef(e);return K.useEffect(()=>{n.current=e}),K.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}function QW({prop:e,defaultProp:n,onChange:t=()=>{}}){const[r,a]=cC({defaultProp:n,onChange:t}),i=e!==void 0,p=i?e:r,s=fy(t),c=K.useCallback(f=>{if(i){const d=typeof f=="function"?f(e):f;d!==e&&s(d)}else a(f)},[i,e,a,s]);return[p,c]}function cC({defaultProp:e,onChange:n}){const t=K.useState(e),[r]=t,a=K.useRef(r),i=fy(n);return K.useEffect(()=>{a.current!==r&&(i(r),a.current=r)},[r,a,i]),t}var fC=K.createContext(void 0);function YW(e){const n=K.useContext(fC);return e||n||"ltr"}var xf="rovingFocusGroup.onEntryFocus",dC={bubbles:!1,cancelable:!0},$0="RovingFocusGroup",[Hv,XW,mC]=uC($0),[hC,ZW]=cy($0,[mC]),[vC,gC]=hC($0),JW=K.forwardRef((e,n)=>_.jsx(Hv.Provider,{scope:e.__scopeRovingFocusGroup,children:_.jsx(Hv.Slot,{scope:e.__scopeRovingFocusGroup,children:_.jsx(yC,{...e,ref:n})})}));JW.displayName=$0;var yC=K.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,orientation:r,loop:a=!1,dir:i,currentTabStopId:p,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:c,onEntryFocus:f,preventScrollOnEntryFocus:m=!1,...d}=e,v=K.useRef(null),y=Ol(n,v),B=YW(i),[I=null,b]=QW({prop:p,defaultProp:s,onChange:c}),[W,M]=K.useState(!1),A=fy(f),O=XW(t),w=K.useRef(!1),[S,N]=K.useState(0);return K.useEffect(()=>{const P=v.current;if(P)return P.addEventListener(xf,A),()=>P.removeEventListener(xf,A)},[A]),_.jsx(vC,{scope:t,orientation:r,dir:B,loop:a,currentTabStopId:I,onItemFocus:K.useCallback(P=>b(P),[b]),onItemShiftTab:K.useCallback(()=>M(!0),[]),onFocusableItemAdd:K.useCallback(()=>N(P=>P+1),[]),onFocusableItemRemove:K.useCallback(()=>N(P=>P-1),[]),children:_.jsx(Vi.div,{tabIndex:W||S===0?-1:0,"data-orientation":r,...d,ref:y,style:{outline:"none",...e.style},onMouseDown:zr(e.onMouseDown,()=>{w.current=!0}),onFocus:zr(e.onFocus,P=>{const H=!w.current;if(P.target===P.currentTarget&&H&&!W){const T=new CustomEvent(xf,dC);if(P.currentTarget.dispatchEvent(T),!T.defaultPrevented){const j=O().filter(X=>X.focusable),k=j.find(X=>X.active),F=j.find(X=>X.id===I),Y=[k,F,...j].filter(Boolean).map(X=>X.ref.current);t3(Y,m)}}w.current=!1}),onBlur:zr(e.onBlur,()=>M(!1))})})}),e3="RovingFocusGroupItem",n3=K.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:t,focusable:r=!0,active:a=!1,tabStopId:i,...p}=e,s=KW(),c=i||s,f=gC(e3,t),m=f.currentTabStopId===c,d=XW(t),{onFocusableItemAdd:v,onFocusableItemRemove:y}=f;return K.useEffect(()=>{if(r)return v(),()=>y()},[r,v,y]),_.jsx(Hv.ItemSlot,{scope:t,id:c,focusable:r,active:a,children:_.jsx(Vi.span,{tabIndex:m?0:-1,"data-orientation":f.orientation,...p,ref:n,onMouseDown:zr(e.onMouseDown,B=>{r?f.onItemFocus(c):B.preventDefault()}),onFocus:zr(e.onFocus,()=>f.onItemFocus(c)),onKeyDown:zr(e.onKeyDown,B=>{if(B.key==="Tab"&&B.shiftKey){f.onItemShiftTab();return}if(B.target!==B.currentTarget)return;const I=BC(B,f.orientation,f.dir);if(I!==void 0){if(B.metaKey||B.ctrlKey||B.altKey||B.shiftKey)return;B.preventDefault();let W=d().filter(M=>M.focusable).map(M=>M.ref.current);if(I==="last")W.reverse();else if(I==="prev"||I==="next"){I==="prev"&&W.reverse();const M=W.indexOf(B.currentTarget);W=f.loop?xC(W,M+1):W.slice(M+1)}setTimeout(()=>t3(W))}})})})});n3.displayName=e3;var bC={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function IC(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function BC(e,n,t){const r=IC(e.key,t);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return bC[r]}function t3(e,n=!1){const t=document.activeElement;for(const r of e)if(r===t||(r.focus({preventScroll:n}),document.activeElement!==t))return}function xC(e,n){return e.map((t,r)=>e[(n+r)%e.length])}var wC=JW,PC=n3;function WC(e,n){return K.useReducer((t,r)=>n[t][r]??t,e)}var r3=e=>{const{present:n,children:t}=e,r=SC(n),a=typeof t=="function"?t({present:r.isPresent}):K.Children.only(t),i=Ol(r.ref,MC(a));return typeof t=="function"||r.isPresent?K.cloneElement(a,{ref:i}):null};r3.displayName="Presence";function SC(e){const[n,t]=K.useState(),r=K.useRef({}),a=K.useRef(e),i=K.useRef("none"),p=e?"mounted":"unmounted",[s,c]=WC(p,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return K.useEffect(()=>{const f=ml(r.current);i.current=s==="mounted"?f:"none"},[s]),Ov(()=>{const f=r.current,m=a.current;if(m!==e){const v=i.current,y=ml(f);e?c("MOUNT"):y==="none"||(f==null?void 0:f.display)==="none"?c("UNMOUNT"):c(m&&v!==y?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,c]),Ov(()=>{if(n){let f;const m=n.ownerDocument.defaultView??window,d=y=>{const I=ml(r.current).includes(y.animationName);if(y.target===n&&I&&(c("ANIMATION_END"),!a.current)){const b=n.style.animationFillMode;n.style.animationFillMode="forwards",f=m.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=b)})}},v=y=>{y.target===n&&(i.current=ml(r.current))};return n.addEventListener("animationstart",v),n.addEventListener("animationcancel",d),n.addEventListener("animationend",d),()=>{m.clearTimeout(f),n.removeEventListener("animationstart",v),n.removeEventListener("animationcancel",d),n.removeEventListener("animationend",d)}}else c("ANIMATION_END")},[n,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:K.useCallback(f=>{f&&(r.current=getComputedStyle(f)),t(f)},[])}}function ml(e){return(e==null?void 0:e.animationName)||"none"}function MC(e){var r,a;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}var dy="Tabs",[AC]=cy(dy,[ZW]),a3=ZW(),[_C,my]=AC(dy),o3=K.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,onValueChange:a,defaultValue:i,orientation:p="horizontal",dir:s,activationMode:c="automatic",...f}=e,m=YW(s),[d,v]=QW({prop:r,onChange:a,defaultProp:i});return _.jsx(_C,{scope:t,baseId:KW(),value:d,onValueChange:v,orientation:p,dir:m,activationMode:c,children:_.jsx(Vi.div,{dir:m,"data-orientation":p,...f,ref:n})})});o3.displayName=dy;var i3="TabsList",u3=K.forwardRef((e,n)=>{const{__scopeTabs:t,loop:r=!0,...a}=e,i=my(i3,t),p=a3(t);return _.jsx(wC,{asChild:!0,...p,orientation:i.orientation,dir:i.dir,loop:r,children:_.jsx(Vi.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:n})})});u3.displayName=i3;var p3="TabsTrigger",s3=K.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,disabled:a=!1,...i}=e,p=my(p3,t),s=a3(t),c=f3(p.baseId,r),f=d3(p.baseId,r),m=r===p.value;return _.jsx(PC,{asChild:!0,...s,focusable:!a,active:m,children:_.jsx(Vi.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":f,"data-state":m?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...i,ref:n,onMouseDown:zr(e.onMouseDown,d=>{!a&&d.button===0&&d.ctrlKey===!1?p.onValueChange(r):d.preventDefault()}),onKeyDown:zr(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&p.onValueChange(r)}),onFocus:zr(e.onFocus,()=>{const d=p.activationMode!=="manual";!m&&!a&&d&&p.onValueChange(r)})})})});s3.displayName=p3;var l3="TabsContent",c3=K.forwardRef((e,n)=>{const{__scopeTabs:t,value:r,forceMount:a,children:i,...p}=e,s=my(l3,t),c=f3(s.baseId,r),f=d3(s.baseId,r),m=r===s.value,d=K.useRef(m);return K.useEffect(()=>{const v=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(v)},[]),_.jsx(r3,{present:a||m,children:({present:v})=>_.jsx(Vi.div,{"data-state":m?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":c,hidden:!v,id:f,tabIndex:0,...p,ref:n,style:{...e.style,animationDuration:d.current?"0s":void 0},children:v&&i})})});c3.displayName=l3;function f3(e,n){return`${e}-trigger-${n}`}function d3(e,n){return`${e}-content-${n}`}var OC=o3,HC=u3,CC=s3,NC=c3;function RC({className:e,...n}){return _.jsx(OC,{"data-slot":"tabs",className:st("flex flex-col gap-2",e),...n})}function kC({className:e,...n}){return _.jsx(HC,{"data-slot":"tabs-list",className:st("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",e),...n})}function PI({className:e,...n}){return _.jsx(CC,{"data-slot":"tabs-trigger",className:st("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...n})}function WI({className:e,...n}){return _.jsx(NC,{"data-slot":"tabs-content",className:st("flex-1 outline-none",e),...n})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),EC=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,t,r)=>r?r.toUpperCase():t.toLowerCase()),SI=e=>{const n=EC(e);return n.charAt(0).toUpperCase()+n.slice(1)},m3=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var DC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=K.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:p,...s},c)=>K.createElement("svg",{ref:c,...DC,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:m3("lucide",a),...s},[...p.map(([f,m])=>K.createElement(f,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=(e,n)=>{const t=K.forwardRef(({className:r,...a},i)=>K.createElement(jC,{ref:i,iconNode:n,className:m3(`lucide-${TC(SI(e))}`,`lucide-${e}`,r),...a}));return t.displayName=SI(e),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],LC=Qt("arrow-up-down",$C);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],qC=Qt("bot",FC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],UC=Qt("chevron-down",zC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],MI=Qt("chevron-left",VC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Cv=Qt("chevron-right",GC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],QC=Qt("circle-plus",KC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],XC=Qt("download",YC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],JC=Qt("trash-2",ZC);/**
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
 */const iN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],uN=Qt("x",iN);function Cn(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function Sn(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}function Hl(e,n){const t=Cn(e);return isNaN(n)?Sn(e,NaN):(n&&t.setDate(t.getDate()+n),t)}const h3=6048e5,pN=864e5,sN=6e4,lN=36e5,cN=1e3;let fN={};function Gi(){return fN}function Na(e,n){var s,c,f,m;const t=Gi(),r=(n==null?void 0:n.weekStartsOn)??((c=(s=n==null?void 0:n.locale)==null?void 0:s.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((m=(f=t.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??0,a=Cn(e),i=a.getDay(),p=(i<r?7:0)+i-r;return a.setDate(a.getDate()-p),a.setHours(0,0,0,0),a}function mi(e){return Na(e,{weekStartsOn:1})}function v3(e){const n=Cn(e),t=n.getFullYear(),r=Sn(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const a=mi(r),i=Sn(e,0);i.setFullYear(t,0,4),i.setHours(0,0,0,0);const p=mi(i);return n.getTime()>=a.getTime()?t+1:n.getTime()>=p.getTime()?t:t-1}function AI(e){const n=Cn(e);return n.setHours(0,0,0,0),n}function Cl(e){const n=Cn(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function dN(e,n){const t=AI(e),r=AI(n),a=+t-Cl(t),i=+r-Cl(r);return Math.round((a-i)/pN)}function mN(e){const n=v3(e),t=Sn(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),mi(t)}function hN(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function vN(e){if(!hN(e)&&typeof e!="number")return!1;const n=Cn(e);return!isNaN(Number(n))}function gN(e){const n=Cn(e),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function yN(e){const n=Cn(e);return n.setDate(1),n.setHours(0,0,0,0),n}function bN(e){const n=Cn(e),t=Sn(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const IN={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},BN=(e,n,t)=>{let r;const a=IN[e];return typeof a=="string"?r=a:n===1?r=a.one:r=a.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function wf(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const xN={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},wN={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},PN={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},WN={date:wf({formats:xN,defaultWidth:"full"}),time:wf({formats:wN,defaultWidth:"full"}),dateTime:wf({formats:PN,defaultWidth:"full"})},SN={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},MN=(e,n,t,r)=>SN[e];function Fu(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const p=e.defaultFormattingWidth||e.defaultWidth,s=t!=null&&t.width?String(t.width):p;a=e.formattingValues[s]||e.formattingValues[p]}else{const p=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;a=e.values[s]||e.values[p]}const i=e.argumentCallback?e.argumentCallback(n):n;return a[i]}}const AN={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},_N={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ON={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},HN={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},CN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},NN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},RN=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},kN={ordinalNumber:RN,era:Fu({values:AN,defaultWidth:"wide"}),quarter:Fu({values:_N,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Fu({values:ON,defaultWidth:"wide"}),day:Fu({values:HN,defaultWidth:"wide"}),dayPeriod:Fu({values:CN,defaultWidth:"wide",formattingValues:NN,defaultFormattingWidth:"wide"})};function qu(e){return(n,t={})=>{const r=t.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=n.match(a);if(!i)return null;const p=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?EN(s,d=>d.test(p)):TN(s,d=>d.test(p));let f;f=e.valueCallback?e.valueCallback(c):c,f=t.valueCallback?t.valueCallback(f):f;const m=n.slice(p.length);return{value:f,rest:m}}}function TN(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function EN(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function DN(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const a=r[0],i=n.match(e.parsePattern);if(!i)return null;let p=e.valueCallback?e.valueCallback(i[0]):i[0];p=t.valueCallback?t.valueCallback(p):p;const s=n.slice(a.length);return{value:p,rest:s}}}const jN=/^(\d+)(th|st|nd|rd)?/i,$N=/\d+/i,LN={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},FN={any:[/^b/i,/^(a|c)/i]},qN={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},zN={any:[/1/i,/2/i,/3/i,/4/i]},UN={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},VN={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},GN={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},KN={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},QN={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},YN={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},XN={ordinalNumber:DN({matchPattern:jN,parsePattern:$N,valueCallback:e=>parseInt(e,10)}),era:qu({matchPatterns:LN,defaultMatchWidth:"wide",parsePatterns:FN,defaultParseWidth:"any"}),quarter:qu({matchPatterns:qN,defaultMatchWidth:"wide",parsePatterns:zN,defaultParseWidth:"any",valueCallback:e=>e+1}),month:qu({matchPatterns:UN,defaultMatchWidth:"wide",parsePatterns:VN,defaultParseWidth:"any"}),day:qu({matchPatterns:GN,defaultMatchWidth:"wide",parsePatterns:KN,defaultParseWidth:"any"}),dayPeriod:qu({matchPatterns:QN,defaultMatchWidth:"any",parsePatterns:YN,defaultParseWidth:"any"})},g3={code:"en-US",formatDistance:BN,formatLong:WN,formatRelative:MN,localize:kN,match:XN,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ZN(e){const n=Cn(e);return dN(n,bN(n))+1}function y3(e){const n=Cn(e),t=+mi(n)-+mN(n);return Math.round(t/h3)+1}function hy(e,n){var m,d,v,y;const t=Cn(e),r=t.getFullYear(),a=Gi(),i=(n==null?void 0:n.firstWeekContainsDate)??((d=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??a.firstWeekContainsDate??((y=(v=a.locale)==null?void 0:v.options)==null?void 0:y.firstWeekContainsDate)??1,p=Sn(e,0);p.setFullYear(r+1,0,i),p.setHours(0,0,0,0);const s=Na(p,n),c=Sn(e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const f=Na(c,n);return t.getTime()>=s.getTime()?r+1:t.getTime()>=f.getTime()?r:r-1}function JN(e,n){var s,c,f,m;const t=Gi(),r=(n==null?void 0:n.firstWeekContainsDate)??((c=(s=n==null?void 0:n.locale)==null?void 0:s.options)==null?void 0:c.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(f=t.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,a=hy(e,n),i=Sn(e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),Na(i,n)}function b3(e,n){const t=Cn(e),r=+Na(t,n)-+JN(t,n);return Math.round(r/h3)+1}function Je(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const wa={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return Je(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):Je(t+1,2)},d(e,n){return Je(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return Je(e.getHours()%12||12,n.length)},H(e,n){return Je(e.getHours(),n.length)},m(e,n){return Je(e.getMinutes(),n.length)},s(e,n){return Je(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,t-3));return Je(a,n.length)}},Jo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},_I={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return t.ordinalNumber(a,{unit:"year"})}return wa.y(e,n)},Y:function(e,n,t,r){const a=hy(e,r),i=a>0?a:1-a;if(n==="YY"){const p=i%100;return Je(p,2)}return n==="Yo"?t.ordinalNumber(i,{unit:"year"}):Je(i,n.length)},R:function(e,n){const t=v3(e);return Je(t,n.length)},u:function(e,n){const t=e.getFullYear();return Je(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return Je(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return Je(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return wa.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return Je(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const a=b3(e,r);return n==="wo"?t.ordinalNumber(a,{unit:"week"}):Je(a,n.length)},I:function(e,n,t){const r=y3(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):Je(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):wa.d(e,n)},D:function(e,n,t){const r=ZN(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):Je(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(i);case"ee":return Je(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(i);case"cc":return Je(i,n.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),a=r===0?7:r;switch(n){case"i":return String(a);case"ii":return Je(a,n.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const a=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let a;switch(r===12?a=Jo.noon:r===0?a=Jo.midnight:a=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let a;switch(r>=17?a=Jo.evening:r>=12?a=Jo.afternoon:r>=4?a=Jo.morning:a=Jo.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return wa.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):wa.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):Je(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):Je(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):wa.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):wa.s(e,n)},S:function(e,n){return wa.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return HI(r);case"XXXX":case"XX":return io(r);case"XXXXX":case"XXX":default:return io(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return HI(r);case"xxxx":case"xx":return io(r);case"xxxxx":case"xxx":default:return io(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+OI(r,":");case"OOOO":default:return"GMT"+io(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+OI(r,":");case"zzzz":default:return"GMT"+io(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return Je(r,n.length)},T:function(e,n,t){const r=e.getTime();return Je(r,n.length)}};function OI(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?t+String(a):t+String(a)+n+Je(i,2)}function HI(e,n){return e%60===0?(e>0?"-":"+")+Je(Math.abs(e)/60,2):io(e,n)}function io(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),a=Je(Math.trunc(r/60),2),i=Je(r%60,2);return t+a+n+i}const CI=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},I3=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},eR=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],a=t[2];if(!a)return CI(e,n);let i;switch(r){case"P":i=n.dateTime({width:"short"});break;case"PP":i=n.dateTime({width:"medium"});break;case"PPP":i=n.dateTime({width:"long"});break;case"PPPP":default:i=n.dateTime({width:"full"});break}return i.replace("{{date}}",CI(r,n)).replace("{{time}}",I3(a,n))},Nv={p:I3,P:eR},nR=/^D+$/,tR=/^Y+$/,rR=["D","DD","YY","YYYY"];function B3(e){return nR.test(e)}function x3(e){return tR.test(e)}function Rv(e,n,t){const r=aR(e,n,t);if(console.warn(r),rR.includes(e))throw new RangeError(r)}function aR(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const oR=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,iR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,uR=/^'([^]*?)'?$/,pR=/''/g,sR=/[a-zA-Z]/;function lR(e,n,t){var m,d,v,y;const r=Gi(),a=r.locale??g3,i=r.firstWeekContainsDate??((d=(m=r.locale)==null?void 0:m.options)==null?void 0:d.firstWeekContainsDate)??1,p=r.weekStartsOn??((y=(v=r.locale)==null?void 0:v.options)==null?void 0:y.weekStartsOn)??0,s=Cn(e);if(!vN(s))throw new RangeError("Invalid time value");let c=n.match(iR).map(B=>{const I=B[0];if(I==="p"||I==="P"){const b=Nv[I];return b(B,a.formatLong)}return B}).join("").match(oR).map(B=>{if(B==="''")return{isToken:!1,value:"'"};const I=B[0];if(I==="'")return{isToken:!1,value:cR(B)};if(_I[I])return{isToken:!0,value:B};if(I.match(sR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:B}});a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const f={firstWeekContainsDate:i,weekStartsOn:p,locale:a};return c.map(B=>{if(!B.isToken)return B.value;const I=B.value;(x3(I)||B3(I))&&Rv(I,n,String(e));const b=_I[I[0]];return b(s,I,a.localize,f)}).join("")}function cR(e){const n=e.match(uR);return n?n[1].replace(pR,"'"):e}function fR(){return Object.assign({},Gi())}function dR(e){let t=Cn(e).getDay();return t===0&&(t=7),t}function mR(e,n){const t=n instanceof Date?Sn(n,0):new n(0);return t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),t.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t}const hR=10;class w3{constructor(){ye(this,"subPriority",0)}validate(n,t){return!0}}class vR extends w3{constructor(n,t,r,a,i){super(),this.value=n,this.validateValue=t,this.setValue=r,this.priority=a,i&&(this.subPriority=i)}validate(n,t){return this.validateValue(n,this.value,t)}set(n,t,r){return this.setValue(n,t,this.value,r)}}class gR extends w3{constructor(){super(...arguments);ye(this,"priority",hR);ye(this,"subPriority",-1)}set(t,r){return r.timestampIsSet?t:Sn(t,mR(t,Date))}}class Ge{run(n,t,r,a){const i=this.parse(n,t,r,a);return i?{setter:new vR(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(n,t,r){return!0}}class yR extends Ge{constructor(){super(...arguments);ye(this,"priority",140);ye(this,"incompatibleTokens",["R","u","t","T"])}parse(t,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(t,{width:"abbreviated"})||a.era(t,{width:"narrow"});case"GGGGG":return a.era(t,{width:"narrow"});case"GGGG":default:return a.era(t,{width:"wide"})||a.era(t,{width:"abbreviated"})||a.era(t,{width:"narrow"})}}set(t,r,a){return r.era=a,t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}const Mn={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},gr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function An(e,n){return e&&{value:n(e.value),rest:e.rest}}function vn(e,n){const t=n.match(e);return t?{value:parseInt(t[0],10),rest:n.slice(t[0].length)}:null}function yr(e,n){const t=n.match(e);if(!t)return null;if(t[0]==="Z")return{value:0,rest:n.slice(1)};const r=t[1]==="+"?1:-1,a=t[2]?parseInt(t[2],10):0,i=t[3]?parseInt(t[3],10):0,p=t[5]?parseInt(t[5],10):0;return{value:r*(a*lN+i*sN+p*cN),rest:n.slice(t[0].length)}}function P3(e){return vn(Mn.anyDigitsSigned,e)}function Bn(e,n){switch(e){case 1:return vn(Mn.singleDigit,n);case 2:return vn(Mn.twoDigits,n);case 3:return vn(Mn.threeDigits,n);case 4:return vn(Mn.fourDigits,n);default:return vn(new RegExp("^\\d{1,"+e+"}"),n)}}function Nl(e,n){switch(e){case 1:return vn(Mn.singleDigitSigned,n);case 2:return vn(Mn.twoDigitsSigned,n);case 3:return vn(Mn.threeDigitsSigned,n);case 4:return vn(Mn.fourDigitsSigned,n);default:return vn(new RegExp("^-?\\d{1,"+e+"}"),n)}}function vy(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function W3(e,n){const t=n>0,r=t?n:1-n;let a;if(r<=50)a=e||100;else{const i=r+50,p=Math.trunc(i/100)*100,s=e>=i%100;a=e+p-(s?100:0)}return t?a:1-a}function S3(e){return e%400===0||e%4===0&&e%100!==0}class bR extends Ge{constructor(){super(...arguments);ye(this,"priority",130);ye(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(t,r,a){const i=p=>({year:p,isTwoDigitYear:r==="yy"});switch(r){case"y":return An(Bn(4,t),i);case"yo":return An(a.ordinalNumber(t,{unit:"year"}),i);default:return An(Bn(r.length,t),i)}}validate(t,r){return r.isTwoDigitYear||r.year>0}set(t,r,a){const i=t.getFullYear();if(a.isTwoDigitYear){const s=W3(a.year,i);return t.setFullYear(s,0,1),t.setHours(0,0,0,0),t}const p=!("era"in r)||r.era===1?a.year:1-a.year;return t.setFullYear(p,0,1),t.setHours(0,0,0,0),t}}class IR extends Ge{constructor(){super(...arguments);ye(this,"priority",130);ye(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(t,r,a){const i=p=>({year:p,isTwoDigitYear:r==="YY"});switch(r){case"Y":return An(Bn(4,t),i);case"Yo":return An(a.ordinalNumber(t,{unit:"year"}),i);default:return An(Bn(r.length,t),i)}}validate(t,r){return r.isTwoDigitYear||r.year>0}set(t,r,a,i){const p=hy(t,i);if(a.isTwoDigitYear){const c=W3(a.year,p);return t.setFullYear(c,0,i.firstWeekContainsDate),t.setHours(0,0,0,0),Na(t,i)}const s=!("era"in r)||r.era===1?a.year:1-a.year;return t.setFullYear(s,0,i.firstWeekContainsDate),t.setHours(0,0,0,0),Na(t,i)}}class BR extends Ge{constructor(){super(...arguments);ye(this,"priority",130);ye(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(t,r){return Nl(r==="R"?4:r.length,t)}set(t,r,a){const i=Sn(t,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),mi(i)}}class xR extends Ge{constructor(){super(...arguments);ye(this,"priority",130);ye(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(t,r){return Nl(r==="u"?4:r.length,t)}set(t,r,a){return t.setFullYear(a,0,1),t.setHours(0,0,0,0),t}}class wR extends Ge{constructor(){super(...arguments);ye(this,"priority",120);ye(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"Q":case"QQ":return Bn(r.length,t);case"Qo":return a.ordinalNumber(t,{unit:"quarter"});case"QQQ":return a.quarter(t,{width:"abbreviated",context:"formatting"})||a.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(t,{width:"wide",context:"formatting"})||a.quarter(t,{width:"abbreviated",context:"formatting"})||a.quarter(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=1&&r<=4}set(t,r,a){return t.setMonth((a-1)*3,1),t.setHours(0,0,0,0),t}}class PR extends Ge{constructor(){super(...arguments);ye(this,"priority",120);ye(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"q":case"qq":return Bn(r.length,t);case"qo":return a.ordinalNumber(t,{unit:"quarter"});case"qqq":return a.quarter(t,{width:"abbreviated",context:"standalone"})||a.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(t,{width:"wide",context:"standalone"})||a.quarter(t,{width:"abbreviated",context:"standalone"})||a.quarter(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=1&&r<=4}set(t,r,a){return t.setMonth((a-1)*3,1),t.setHours(0,0,0,0),t}}class WR extends Ge{constructor(){super(...arguments);ye(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);ye(this,"priority",110)}parse(t,r,a){const i=p=>p-1;switch(r){case"M":return An(vn(Mn.month,t),i);case"MM":return An(Bn(2,t),i);case"Mo":return An(a.ordinalNumber(t,{unit:"month"}),i);case"MMM":return a.month(t,{width:"abbreviated",context:"formatting"})||a.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(t,{width:"wide",context:"formatting"})||a.month(t,{width:"abbreviated",context:"formatting"})||a.month(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.setMonth(a,1),t.setHours(0,0,0,0),t}}class SR extends Ge{constructor(){super(...arguments);ye(this,"priority",110);ye(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(t,r,a){const i=p=>p-1;switch(r){case"L":return An(vn(Mn.month,t),i);case"LL":return An(Bn(2,t),i);case"Lo":return An(a.ordinalNumber(t,{unit:"month"}),i);case"LLL":return a.month(t,{width:"abbreviated",context:"standalone"})||a.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(t,{width:"wide",context:"standalone"})||a.month(t,{width:"abbreviated",context:"standalone"})||a.month(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.setMonth(a,1),t.setHours(0,0,0,0),t}}function MR(e,n,t){const r=Cn(e),a=b3(r,t)-n;return r.setDate(r.getDate()-a*7),r}class AR extends Ge{constructor(){super(...arguments);ye(this,"priority",100);ye(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(t,r,a){switch(r){case"w":return vn(Mn.week,t);case"wo":return a.ordinalNumber(t,{unit:"week"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=53}set(t,r,a,i){return Na(MR(t,a,i),i)}}function _R(e,n){const t=Cn(e),r=y3(t)-n;return t.setDate(t.getDate()-r*7),t}class OR extends Ge{constructor(){super(...arguments);ye(this,"priority",100);ye(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(t,r,a){switch(r){case"I":return vn(Mn.week,t);case"Io":return a.ordinalNumber(t,{unit:"week"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=53}set(t,r,a){return mi(_R(t,a))}}const HR=[31,28,31,30,31,30,31,31,30,31,30,31],CR=[31,29,31,30,31,30,31,31,30,31,30,31];class NR extends Ge{constructor(){super(...arguments);ye(this,"priority",90);ye(this,"subPriority",1);ye(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"d":return vn(Mn.date,t);case"do":return a.ordinalNumber(t,{unit:"date"});default:return Bn(r.length,t)}}validate(t,r){const a=t.getFullYear(),i=S3(a),p=t.getMonth();return i?r>=1&&r<=CR[p]:r>=1&&r<=HR[p]}set(t,r,a){return t.setDate(a),t.setHours(0,0,0,0),t}}class RR extends Ge{constructor(){super(...arguments);ye(this,"priority",90);ye(this,"subpriority",1);ye(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(t,r,a){switch(r){case"D":case"DD":return vn(Mn.dayOfYear,t);case"Do":return a.ordinalNumber(t,{unit:"date"});default:return Bn(r.length,t)}}validate(t,r){const a=t.getFullYear();return S3(a)?r>=1&&r<=366:r>=1&&r<=365}set(t,r,a){return t.setMonth(0,a),t.setHours(0,0,0,0),t}}function gy(e,n,t){var d,v,y,B;const r=Gi(),a=(t==null?void 0:t.weekStartsOn)??((v=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((B=(y=r.locale)==null?void 0:y.options)==null?void 0:B.weekStartsOn)??0,i=Cn(e),p=i.getDay(),c=(n%7+7)%7,f=7-a,m=n<0||n>6?n-(p+f)%7:(c+f)%7-(p+f)%7;return Hl(i,m)}class kR extends Ge{constructor(){super(...arguments);ye(this,"priority",90);ye(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(t,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=gy(t,a,i),t.setHours(0,0,0,0),t}}class TR extends Ge{constructor(){super(...arguments);ye(this,"priority",90);ye(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(t,r,a,i){const p=s=>{const c=Math.floor((s-1)/7)*7;return(s+i.weekStartsOn+6)%7+c};switch(r){case"e":case"ee":return An(Bn(r.length,t),p);case"eo":return An(a.ordinalNumber(t,{unit:"day"}),p);case"eee":return a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"eeeee":return a.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=gy(t,a,i),t.setHours(0,0,0,0),t}}class ER extends Ge{constructor(){super(...arguments);ye(this,"priority",90);ye(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(t,r,a,i){const p=s=>{const c=Math.floor((s-1)/7)*7;return(s+i.weekStartsOn+6)%7+c};switch(r){case"c":case"cc":return An(Bn(r.length,t),p);case"co":return An(a.ordinalNumber(t,{unit:"day"}),p);case"ccc":return a.day(t,{width:"abbreviated",context:"standalone"})||a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"});case"ccccc":return a.day(t,{width:"narrow",context:"standalone"});case"cccccc":return a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(t,{width:"wide",context:"standalone"})||a.day(t,{width:"abbreviated",context:"standalone"})||a.day(t,{width:"short",context:"standalone"})||a.day(t,{width:"narrow",context:"standalone"})}}validate(t,r){return r>=0&&r<=6}set(t,r,a,i){return t=gy(t,a,i),t.setHours(0,0,0,0),t}}function DR(e,n){const t=Cn(e),r=dR(t),a=n-r;return Hl(t,a)}class jR extends Ge{constructor(){super(...arguments);ye(this,"priority",90);ye(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(t,r,a){const i=p=>p===0?7:p;switch(r){case"i":case"ii":return Bn(r.length,t);case"io":return a.ordinalNumber(t,{unit:"day"});case"iii":return An(a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i);case"iiiii":return An(a.day(t,{width:"narrow",context:"formatting"}),i);case"iiiiii":return An(a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i);case"iiii":default:return An(a.day(t,{width:"wide",context:"formatting"})||a.day(t,{width:"abbreviated",context:"formatting"})||a.day(t,{width:"short",context:"formatting"})||a.day(t,{width:"narrow",context:"formatting"}),i)}}validate(t,r){return r>=1&&r<=7}set(t,r,a){return t=DR(t,a),t.setHours(0,0,0,0),t}}class $R extends Ge{constructor(){super(...arguments);ye(this,"priority",80);ye(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(t,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(vy(a),0,0,0),t}}class LR extends Ge{constructor(){super(...arguments);ye(this,"priority",80);ye(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(t,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(vy(a),0,0,0),t}}class FR extends Ge{constructor(){super(...arguments);ye(this,"priority",80);ye(this,"incompatibleTokens",["a","b","t","T"])}parse(t,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})||a.dayPeriod(t,{width:"abbreviated",context:"formatting"})||a.dayPeriod(t,{width:"narrow",context:"formatting"})}}set(t,r,a){return t.setHours(vy(a),0,0,0),t}}class qR extends Ge{constructor(){super(...arguments);ye(this,"priority",70);ye(this,"incompatibleTokens",["H","K","k","t","T"])}parse(t,r,a){switch(r){case"h":return vn(Mn.hour12h,t);case"ho":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=12}set(t,r,a){const i=t.getHours()>=12;return i&&a<12?t.setHours(a+12,0,0,0):!i&&a===12?t.setHours(0,0,0,0):t.setHours(a,0,0,0),t}}class zR extends Ge{constructor(){super(...arguments);ye(this,"priority",70);ye(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(t,r,a){switch(r){case"H":return vn(Mn.hour23h,t);case"Ho":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=23}set(t,r,a){return t.setHours(a,0,0,0),t}}class UR extends Ge{constructor(){super(...arguments);ye(this,"priority",70);ye(this,"incompatibleTokens",["h","H","k","t","T"])}parse(t,r,a){switch(r){case"K":return vn(Mn.hour11h,t);case"Ko":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=11}set(t,r,a){return t.getHours()>=12&&a<12?t.setHours(a+12,0,0,0):t.setHours(a,0,0,0),t}}class VR extends Ge{constructor(){super(...arguments);ye(this,"priority",70);ye(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(t,r,a){switch(r){case"k":return vn(Mn.hour24h,t);case"ko":return a.ordinalNumber(t,{unit:"hour"});default:return Bn(r.length,t)}}validate(t,r){return r>=1&&r<=24}set(t,r,a){const i=a<=24?a%24:a;return t.setHours(i,0,0,0),t}}class GR extends Ge{constructor(){super(...arguments);ye(this,"priority",60);ye(this,"incompatibleTokens",["t","T"])}parse(t,r,a){switch(r){case"m":return vn(Mn.minute,t);case"mo":return a.ordinalNumber(t,{unit:"minute"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=59}set(t,r,a){return t.setMinutes(a,0,0),t}}class KR extends Ge{constructor(){super(...arguments);ye(this,"priority",50);ye(this,"incompatibleTokens",["t","T"])}parse(t,r,a){switch(r){case"s":return vn(Mn.second,t);case"so":return a.ordinalNumber(t,{unit:"second"});default:return Bn(r.length,t)}}validate(t,r){return r>=0&&r<=59}set(t,r,a){return t.setSeconds(a,0),t}}class QR extends Ge{constructor(){super(...arguments);ye(this,"priority",30);ye(this,"incompatibleTokens",["t","T"])}parse(t,r){const a=i=>Math.trunc(i*Math.pow(10,-r.length+3));return An(Bn(r.length,t),a)}set(t,r,a){return t.setMilliseconds(a),t}}class YR extends Ge{constructor(){super(...arguments);ye(this,"priority",10);ye(this,"incompatibleTokens",["t","T","x"])}parse(t,r){switch(r){case"X":return yr(gr.basicOptionalMinutes,t);case"XX":return yr(gr.basic,t);case"XXXX":return yr(gr.basicOptionalSeconds,t);case"XXXXX":return yr(gr.extendedOptionalSeconds,t);case"XXX":default:return yr(gr.extended,t)}}set(t,r,a){return r.timestampIsSet?t:Sn(t,t.getTime()-Cl(t)-a)}}class XR extends Ge{constructor(){super(...arguments);ye(this,"priority",10);ye(this,"incompatibleTokens",["t","T","X"])}parse(t,r){switch(r){case"x":return yr(gr.basicOptionalMinutes,t);case"xx":return yr(gr.basic,t);case"xxxx":return yr(gr.basicOptionalSeconds,t);case"xxxxx":return yr(gr.extendedOptionalSeconds,t);case"xxx":default:return yr(gr.extended,t)}}set(t,r,a){return r.timestampIsSet?t:Sn(t,t.getTime()-Cl(t)-a)}}class ZR extends Ge{constructor(){super(...arguments);ye(this,"priority",40);ye(this,"incompatibleTokens","*")}parse(t){return P3(t)}set(t,r,a){return[Sn(t,a*1e3),{timestampIsSet:!0}]}}class JR extends Ge{constructor(){super(...arguments);ye(this,"priority",20);ye(this,"incompatibleTokens","*")}parse(t){return P3(t)}set(t,r,a){return[Sn(t,a),{timestampIsSet:!0}]}}const ek={G:new yR,y:new bR,Y:new IR,R:new BR,u:new xR,Q:new wR,q:new PR,M:new WR,L:new SR,w:new AR,I:new OR,d:new NR,D:new RR,E:new kR,e:new TR,c:new ER,i:new jR,a:new $R,b:new LR,B:new FR,h:new qR,H:new zR,K:new UR,k:new VR,m:new GR,s:new KR,S:new QR,X:new YR,x:new XR,t:new ZR,T:new JR},nk=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rk=/^'([^]*?)'?$/,ak=/''/g,ok=/\S/,ik=/[a-zA-Z]/;function uk(e,n,t,r){var I,b,W,M;const a=fR(),i=a.locale??g3,p=a.firstWeekContainsDate??((b=(I=a.locale)==null?void 0:I.options)==null?void 0:b.firstWeekContainsDate)??1,s=a.weekStartsOn??((M=(W=a.locale)==null?void 0:W.options)==null?void 0:M.weekStartsOn)??0,c={firstWeekContainsDate:p,weekStartsOn:s,locale:i},f=[new gR],m=n.match(tk).map(A=>{const O=A[0];if(O in Nv){const w=Nv[O];return w(A,i.formatLong)}return A}).join("").match(nk),d=[];for(let A of m){x3(A)&&Rv(A,n,e),B3(A)&&Rv(A,n,e);const O=A[0],w=ek[O];if(w){const{incompatibleTokens:S}=w;if(Array.isArray(S)){const P=d.find(H=>S.includes(H.token)||H.token===O);if(P)throw new RangeError(`The format string mustn't contain \`${P.fullToken}\` and \`${A}\` at the same time`)}else if(w.incompatibleTokens==="*"&&d.length>0)throw new RangeError(`The format string mustn't contain \`${A}\` and any other token at the same time`);d.push({token:O,fullToken:A});const N=w.run(e,A,i.match,c);if(!N)return Sn(t,NaN);f.push(N.setter),e=N.rest}else{if(O.match(ik))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");if(A==="''"?A="'":O==="'"&&(A=pk(A)),e.indexOf(A)===0)e=e.slice(A.length);else return Sn(t,NaN)}}if(e.length>0&&ok.test(e))return Sn(t,NaN);const v=f.map(A=>A.priority).sort((A,O)=>O-A).filter((A,O,w)=>w.indexOf(A)===O).map(A=>f.filter(O=>O.priority===A).sort((O,w)=>w.subPriority-O.subPriority)).map(A=>A[0]);let y=Cn(t);if(isNaN(y.getTime()))return Sn(t,NaN);const B={};for(const A of v){if(!A.validate(y,c))return Sn(t,NaN);const O=A.set(y,B,c);Array.isArray(O)?(y=O[0],Object.assign(B,O[1])):y=O}return Sn(t,y)}function pk(e){return e.match(rk)[1].replace(ak,"'")}const ur=e=>{if(!e)return new Date(NaN);const n=e.trim(),t=n.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(t){const[,a,i,p]=t;return new Date(parseInt(a),parseInt(i)-1,parseInt(p),12,0,0)}const r=n.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(r){const[,a,i,p]=r;return new Date(parseInt(p),parseInt(i)-1,parseInt(a),12,0,0)}return uk(e,"dd-MM-yyyy",new Date)},M3=["january","february","march","april","may","june","july","august","september","october","november","december"],A3=e=>{if(e==="all"||!e)return[];const[n,t]=e.split("-"),r=M3.indexOf(n.toLowerCase()),a=parseInt(t)||2026;if(r===-1)return[];const i=yN(new Date(a,r)),p=gN(new Date(a,r)),s=[];let c=i,f=1;for(;c<=p;){let m=Hl(c,6);m>p&&(m=p),s.push({value:`${n}-week${f}`,label:`${n.charAt(0).toUpperCase()+n.slice(1,3)} ${c.getDate()}-${m.getDate()}`,startDate:c,endDate:m}),c=Hl(m,1),f++}return s},_3=(e,n)=>{if(isNaN(e.getTime()))return!1;const t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0);return t>=n.startDate&&t<=n.endDate},kv=(e,n)=>{if(n==="all")return!0;if(isNaN(e.getTime()))return!1;const[t,r]=n.split("-"),a=M3.indexOf(t.toLowerCase()),i=parseInt(r);return e.getMonth()===a&&e.getFullYear()===i},sk=e=>!e||isNaN(e.getTime())?"N/A":lR(e,"MMM dd, yyyy"),Tv=e=>{const n=e.length,t=e.filter(a=>a.handled==="Bot").length,r=e.filter(a=>a.handled==="Human").length;return{totalSessions:n,botHandled:t,humanHandled:r,botPercentage:n>0?t/n*100:0,humanPercentage:n>0?r/n*100:0,escalationRate:n>0?r/n*100:0}},Ev=e=>{const n=new Map;e.forEach(r=>{const a=r.channel==="Webchat"?"Webapp":r.channel,i=n.get(a)||0;n.set(a,i+1)});const t=e.length;return Array.from(n.entries()).map(([r,a])=>({channel:r,count:a,percentage:t>0?a/t*100:0})).sort((r,a)=>a.count-r.count)},O3=e=>{const n=e.filter(r=>r.handled==="Human"),t=new Map;return n.forEach(r=>{if(r.product&&r.product.trim()!==""){const a=t.get(r.product)||0;t.set(r.product,a+1)}}),Array.from(t.entries()).map(([r,a])=>({product:r,count:a})).sort((r,a)=>a.count-r.count)},Dv=(e,n=10)=>{const t=new Map;return e.forEach(r=>{if(r.issue&&r.issue.trim()!==""){const a=t.get(r.issue)||{bot:0,human:0};r.handled==="Bot"?a.bot++:a.human++,t.set(r.issue,a)}}),Array.from(t.entries()).map(([r,a])=>({issue:r,botCount:a.bot,humanCount:a.human,total:a.bot+a.human})).sort((r,a)=>a.humanCount-r.humanCount).slice(0,n)},lk=(e,n="february-2026")=>{if(n==="all"){const t=["january","february","march","april","may","june","july","august","september","october","november","december"],r=new Set;return e.forEach(i=>{try{const p=ur(i.createdAt);if(!isNaN(p.getTime())){const s=t[p.getMonth()],c=`${s.charAt(0).toUpperCase()}${s.slice(1,3)} ${p.getFullYear()}`;r.add(`${c}|${s}-${p.getFullYear()}`)}}catch{}}),Array.from(r).map(i=>{const[p,s]=i.split("|"),c=e.filter(v=>kv(ur(v.createdAt),s)),f=c.length,m=c.filter(v=>v.handled==="Human").length,d=f>0?m/f*100:0;return{week:p,totalSessions:f,humanEscalations:m,escalationRate:d}}).sort((i,p)=>new Date(`1 ${i.week}`).getTime()-new Date(`1 ${p.week}`).getTime()).filter(i=>i.totalSessions>0)}else return A3(n).map(r=>{const a=e.filter(c=>{const f=ur(c.createdAt);return _3(f,r)}),i=a.length,p=a.filter(c=>c.handled==="Human").length,s=a.length>0?p/a.length*100:0;return{week:r.label,totalSessions:i,humanEscalations:p,escalationRate:s}})},ck=e=>{const n=e.filter(r=>r.handled==="Human"),t=new Map;return n.forEach(r=>{if(r.issue&&r.issue.trim()!==""){t.has(r.issue)||t.set(r.issue,new Map);const a=t.get(r.issue),i=r.subType&&r.subType.trim()!==""?r.subType:"Other";a.has(i)||a.set(i,new Map);const p=a.get(i),s=r.product&&r.product.trim()!==""?r.product:"Unknown";p.set(s,(p.get(s)||0)+1)}}),Array.from(t.entries()).map(([r,a])=>{const i=Array.from(a.entries()).map(([s,c])=>{const f=Array.from(c.entries()).map(([d,v])=>({product:d,count:v})).sort((d,v)=>v.count-d.count),m=f.reduce((d,v)=>d+v.count,0);return{subType:s,count:m,products:f}}).sort((s,c)=>c.count-s.count),p=i.reduce((s,c)=>s+c.count,0);return{issue:r,count:p,subIssues:i}}).sort((r,a)=>a.count-r.count)},fk=(e,n="analytics-export.csv")=>{const r=[["Channel","Created at","Product","Issue","Sub Type","Handled"].join(","),...e.map(s=>[s.channel,s.createdAt,s.product||"",s.issue||"",s.subType||"",s.handled].join(","))].join(`
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a"),p=URL.createObjectURL(a);i.setAttribute("href",p),i.setAttribute("download",n),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)};function dk({metrics:e}){const n=r=>r<20?"text-green-600":r<40?"text-yellow-600":"text-red-600",t=r=>r<20?"bg-green-50":r<40?"bg-yellow-50":"bg-red-50";return _.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[_.jsx(zt,{children:_.jsx(Ut,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:e.totalSessions.toLocaleString()})]}),_.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:_.jsx(nN,{className:"w-6 h-6 text-blue-600"})})]})})}),_.jsx(zt,{children:_.jsx(Ut,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Bot Handled Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:e.botHandled.toLocaleString()}),_.jsxs("p",{className:"text-sm text-blue-600 mt-1",children:[e.botPercentage.toFixed(1),"%"]})]}),_.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:_.jsx(qC,{className:"w-6 h-6 text-blue-600"})})]})})}),_.jsx(zt,{children:_.jsx(Ut,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Human Handled Sessions"}),_.jsx("p",{className:"text-3xl font-bold mt-2",children:e.humanHandled.toLocaleString()}),_.jsxs("p",{className:"text-sm text-orange-600 mt-1",children:[e.humanPercentage.toFixed(1),"%"]})]}),_.jsx("div",{className:"p-3 bg-orange-50 rounded-full",children:_.jsx(oN,{className:"w-6 h-6 text-orange-600"})})]})})}),_.jsx(zt,{className:t(e.escalationRate),children:_.jsx(Ut,{className:"p-6",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Escalation Rate"}),_.jsxs("p",{className:`text-3xl font-bold mt-2 ${n(e.escalationRate)}`,children:[e.escalationRate.toFixed(1),"%"]}),_.jsx("p",{className:"text-xs text-gray-500 mt-1",children:e.escalationRate<20?"Excellent":e.escalationRate<40?"Good":"Needs Attention"})]}),_.jsx("div",{className:`p-3 rounded-full ${n(e.escalationRate).replace("text","bg").replace("600","100")}`,children:_.jsx(rN,{className:`w-6 h-6 ${n(e.escalationRate)}`})})]})})})]})}var Pf,NI;function yt(){if(NI)return Pf;NI=1;var e=Array.isArray;return Pf=e,Pf}var Wf,RI;function H3(){if(RI)return Wf;RI=1;var e=typeof ll=="object"&&ll&&ll.Object===Object&&ll;return Wf=e,Wf}var Sf,kI;function Sr(){if(kI)return Sf;kI=1;var e=H3(),n=typeof self=="object"&&self&&self.Object===Object&&self,t=e||n||Function("return this")();return Sf=t,Sf}var Mf,TI;function Kp(){if(TI)return Mf;TI=1;var e=Sr(),n=e.Symbol;return Mf=n,Mf}var Af,EI;function mk(){if(EI)return Af;EI=1;var e=Kp(),n=Object.prototype,t=n.hasOwnProperty,r=n.toString,a=e?e.toStringTag:void 0;function i(p){var s=t.call(p,a),c=p[a];try{p[a]=void 0;var f=!0}catch{}var m=r.call(p);return f&&(s?p[a]=c:delete p[a]),m}return Af=i,Af}var _f,DI;function hk(){if(DI)return _f;DI=1;var e=Object.prototype,n=e.toString;function t(r){return n.call(r)}return _f=t,_f}var Of,jI;function Yr(){if(jI)return Of;jI=1;var e=Kp(),n=mk(),t=hk(),r="[object Null]",a="[object Undefined]",i=e?e.toStringTag:void 0;function p(s){return s==null?s===void 0?a:r:i&&i in Object(s)?n(s):t(s)}return Of=p,Of}var Hf,$I;function Xr(){if($I)return Hf;$I=1;function e(n){return n!=null&&typeof n=="object"}return Hf=e,Hf}var Cf,LI;function Ki(){if(LI)return Cf;LI=1;var e=Yr(),n=Xr(),t="[object Symbol]";function r(a){return typeof a=="symbol"||n(a)&&e(a)==t}return Cf=r,Cf}var Nf,FI;function yy(){if(FI)return Nf;FI=1;var e=yt(),n=Ki(),t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,p){if(e(i))return!1;var s=typeof i;return s=="number"||s=="symbol"||s=="boolean"||i==null||n(i)?!0:r.test(i)||!t.test(i)||p!=null&&i in Object(p)}return Nf=a,Nf}var Rf,qI;function Da(){if(qI)return Rf;qI=1;function e(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}return Rf=e,Rf}var kf,zI;function by(){if(zI)return kf;zI=1;var e=Yr(),n=Da(),t="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",i="[object Proxy]";function p(s){if(!n(s))return!1;var c=e(s);return c==r||c==a||c==t||c==i}return kf=p,kf}var Tf,UI;function vk(){if(UI)return Tf;UI=1;var e=Sr(),n=e["__core-js_shared__"];return Tf=n,Tf}var Ef,VI;function gk(){if(VI)return Ef;VI=1;var e=vk(),n=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function t(r){return!!n&&n in r}return Ef=t,Ef}var Df,GI;function C3(){if(GI)return Df;GI=1;var e=Function.prototype,n=e.toString;function t(r){if(r!=null){try{return n.call(r)}catch{}try{return r+""}catch{}}return""}return Df=t,Df}var jf,KI;function yk(){if(KI)return jf;KI=1;var e=by(),n=gk(),t=Da(),r=C3(),a=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,p=Function.prototype,s=Object.prototype,c=p.toString,f=s.hasOwnProperty,m=RegExp("^"+c.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(v){if(!t(v)||n(v))return!1;var y=e(v)?m:i;return y.test(r(v))}return jf=d,jf}var $f,QI;function bk(){if(QI)return $f;QI=1;function e(n,t){return n==null?void 0:n[t]}return $f=e,$f}var Lf,YI;function xo(){if(YI)return Lf;YI=1;var e=yk(),n=bk();function t(r,a){var i=n(r,a);return e(i)?i:void 0}return Lf=t,Lf}var Ff,XI;function L0(){if(XI)return Ff;XI=1;var e=xo(),n=e(Object,"create");return Ff=n,Ff}var qf,ZI;function Ik(){if(ZI)return qf;ZI=1;var e=L0();function n(){this.__data__=e?e(null):{},this.size=0}return qf=n,qf}var zf,JI;function Bk(){if(JI)return zf;JI=1;function e(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}return zf=e,zf}var Uf,eB;function xk(){if(eB)return Uf;eB=1;var e=L0(),n="__lodash_hash_undefined__",t=Object.prototype,r=t.hasOwnProperty;function a(i){var p=this.__data__;if(e){var s=p[i];return s===n?void 0:s}return r.call(p,i)?p[i]:void 0}return Uf=a,Uf}var Vf,nB;function wk(){if(nB)return Vf;nB=1;var e=L0(),n=Object.prototype,t=n.hasOwnProperty;function r(a){var i=this.__data__;return e?i[a]!==void 0:t.call(i,a)}return Vf=r,Vf}var Gf,tB;function Pk(){if(tB)return Gf;tB=1;var e=L0(),n="__lodash_hash_undefined__";function t(r,a){var i=this.__data__;return this.size+=this.has(r)?0:1,i[r]=e&&a===void 0?n:a,this}return Gf=t,Gf}var Kf,rB;function Wk(){if(rB)return Kf;rB=1;var e=Ik(),n=Bk(),t=xk(),r=wk(),a=Pk();function i(p){var s=-1,c=p==null?0:p.length;for(this.clear();++s<c;){var f=p[s];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=n,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,Kf=i,Kf}var Qf,aB;function Sk(){if(aB)return Qf;aB=1;function e(){this.__data__=[],this.size=0}return Qf=e,Qf}var Yf,oB;function Iy(){if(oB)return Yf;oB=1;function e(n,t){return n===t||n!==n&&t!==t}return Yf=e,Yf}var Xf,iB;function F0(){if(iB)return Xf;iB=1;var e=Iy();function n(t,r){for(var a=t.length;a--;)if(e(t[a][0],r))return a;return-1}return Xf=n,Xf}var Zf,uB;function Mk(){if(uB)return Zf;uB=1;var e=F0(),n=Array.prototype,t=n.splice;function r(a){var i=this.__data__,p=e(i,a);if(p<0)return!1;var s=i.length-1;return p==s?i.pop():t.call(i,p,1),--this.size,!0}return Zf=r,Zf}var Jf,pB;function Ak(){if(pB)return Jf;pB=1;var e=F0();function n(t){var r=this.__data__,a=e(r,t);return a<0?void 0:r[a][1]}return Jf=n,Jf}var ed,sB;function _k(){if(sB)return ed;sB=1;var e=F0();function n(t){return e(this.__data__,t)>-1}return ed=n,ed}var nd,lB;function Ok(){if(lB)return nd;lB=1;var e=F0();function n(t,r){var a=this.__data__,i=e(a,t);return i<0?(++this.size,a.push([t,r])):a[i][1]=r,this}return nd=n,nd}var td,cB;function q0(){if(cB)return td;cB=1;var e=Sk(),n=Mk(),t=Ak(),r=_k(),a=Ok();function i(p){var s=-1,c=p==null?0:p.length;for(this.clear();++s<c;){var f=p[s];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=n,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,td=i,td}var rd,fB;function By(){if(fB)return rd;fB=1;var e=xo(),n=Sr(),t=e(n,"Map");return rd=t,rd}var ad,dB;function Hk(){if(dB)return ad;dB=1;var e=Wk(),n=q0(),t=By();function r(){this.size=0,this.__data__={hash:new e,map:new(t||n),string:new e}}return ad=r,ad}var od,mB;function Ck(){if(mB)return od;mB=1;function e(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}return od=e,od}var id,hB;function z0(){if(hB)return id;hB=1;var e=Ck();function n(t,r){var a=t.__data__;return e(r)?a[typeof r=="string"?"string":"hash"]:a.map}return id=n,id}var ud,vB;function Nk(){if(vB)return ud;vB=1;var e=z0();function n(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}return ud=n,ud}var pd,gB;function Rk(){if(gB)return pd;gB=1;var e=z0();function n(t){return e(this,t).get(t)}return pd=n,pd}var sd,yB;function kk(){if(yB)return sd;yB=1;var e=z0();function n(t){return e(this,t).has(t)}return sd=n,sd}var ld,bB;function Tk(){if(bB)return ld;bB=1;var e=z0();function n(t,r){var a=e(this,t),i=a.size;return a.set(t,r),this.size+=a.size==i?0:1,this}return ld=n,ld}var cd,IB;function xy(){if(IB)return cd;IB=1;var e=Hk(),n=Nk(),t=Rk(),r=kk(),a=Tk();function i(p){var s=-1,c=p==null?0:p.length;for(this.clear();++s<c;){var f=p[s];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=n,i.prototype.get=t,i.prototype.has=r,i.prototype.set=a,cd=i,cd}var fd,BB;function N3(){if(BB)return fd;BB=1;var e=xy(),n="Expected a function";function t(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(n);var i=function(){var p=arguments,s=a?a.apply(this,p):p[0],c=i.cache;if(c.has(s))return c.get(s);var f=r.apply(this,p);return i.cache=c.set(s,f)||c,f};return i.cache=new(t.Cache||e),i}return t.Cache=e,fd=t,fd}var dd,xB;function Ek(){if(xB)return dd;xB=1;var e=N3(),n=500;function t(r){var a=e(r,function(p){return i.size===n&&i.clear(),p}),i=a.cache;return a}return dd=t,dd}var md,wB;function Dk(){if(wB)return md;wB=1;var e=Ek(),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,t=/\\(\\)?/g,r=e(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(n,function(p,s,c,f){i.push(c?f.replace(t,"$1"):s||p)}),i});return md=r,md}var hd,PB;function wy(){if(PB)return hd;PB=1;function e(n,t){for(var r=-1,a=n==null?0:n.length,i=Array(a);++r<a;)i[r]=t(n[r],r,n);return i}return hd=e,hd}var vd,WB;function jk(){if(WB)return vd;WB=1;var e=Kp(),n=wy(),t=yt(),r=Ki(),a=e?e.prototype:void 0,i=a?a.toString:void 0;function p(s){if(typeof s=="string")return s;if(t(s))return n(s,p)+"";if(r(s))return i?i.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}return vd=p,vd}var gd,SB;function R3(){if(SB)return gd;SB=1;var e=jk();function n(t){return t==null?"":e(t)}return gd=n,gd}var yd,MB;function k3(){if(MB)return yd;MB=1;var e=yt(),n=yy(),t=Dk(),r=R3();function a(i,p){return e(i)?i:n(i,p)?[i]:t(r(i))}return yd=a,yd}var bd,AB;function U0(){if(AB)return bd;AB=1;var e=Ki();function n(t){if(typeof t=="string"||e(t))return t;var r=t+"";return r=="0"&&1/t==-1/0?"-0":r}return bd=n,bd}var Id,_B;function Py(){if(_B)return Id;_B=1;var e=k3(),n=U0();function t(r,a){a=e(a,r);for(var i=0,p=a.length;r!=null&&i<p;)r=r[n(a[i++])];return i&&i==p?r:void 0}return Id=t,Id}var Bd,OB;function T3(){if(OB)return Bd;OB=1;var e=Py();function n(t,r,a){var i=t==null?void 0:e(t,r);return i===void 0?a:i}return Bd=n,Bd}var $k=T3();const _t=Xe($k);var xd,HB;function Lk(){if(HB)return xd;HB=1;function e(n){return n==null}return xd=e,xd}var Fk=Lk();const Ne=Xe(Fk);var wd,CB;function qk(){if(CB)return wd;CB=1;var e=Yr(),n=yt(),t=Xr(),r="[object String]";function a(i){return typeof i=="string"||!n(i)&&t(i)&&e(i)==r}return wd=a,wd}var zk=qk();const Qp=Xe(zk);var Uk=by();const Ce=Xe(Uk);var Vk=Da();const Qi=Xe(Vk);var Pd={exports:{}},Qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NB;function Gk(){if(NB)return Qe;NB=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),p=Symbol.for("react.context"),s=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),B;B=Symbol.for("react.module.reference");function I(b){if(typeof b=="object"&&b!==null){var W=b.$$typeof;switch(W){case e:switch(b=b.type,b){case t:case a:case r:case f:case m:return b;default:switch(b=b&&b.$$typeof,b){case s:case p:case c:case v:case d:case i:return b;default:return W}}case n:return W}}}return Qe.ContextConsumer=p,Qe.ContextProvider=i,Qe.Element=e,Qe.ForwardRef=c,Qe.Fragment=t,Qe.Lazy=v,Qe.Memo=d,Qe.Portal=n,Qe.Profiler=a,Qe.StrictMode=r,Qe.Suspense=f,Qe.SuspenseList=m,Qe.isAsyncMode=function(){return!1},Qe.isConcurrentMode=function(){return!1},Qe.isContextConsumer=function(b){return I(b)===p},Qe.isContextProvider=function(b){return I(b)===i},Qe.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===e},Qe.isForwardRef=function(b){return I(b)===c},Qe.isFragment=function(b){return I(b)===t},Qe.isLazy=function(b){return I(b)===v},Qe.isMemo=function(b){return I(b)===d},Qe.isPortal=function(b){return I(b)===n},Qe.isProfiler=function(b){return I(b)===a},Qe.isStrictMode=function(b){return I(b)===r},Qe.isSuspense=function(b){return I(b)===f},Qe.isSuspenseList=function(b){return I(b)===m},Qe.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===t||b===a||b===r||b===f||b===m||b===y||typeof b=="object"&&b!==null&&(b.$$typeof===v||b.$$typeof===d||b.$$typeof===i||b.$$typeof===p||b.$$typeof===c||b.$$typeof===B||b.getModuleId!==void 0)},Qe.typeOf=I,Qe}var RB;function Kk(){return RB||(RB=1,Pd.exports=Gk()),Pd.exports}var Qk=Kk(),Wd,kB;function E3(){if(kB)return Wd;kB=1;var e=Yr(),n=Xr(),t="[object Number]";function r(a){return typeof a=="number"||n(a)&&e(a)==t}return Wd=r,Wd}var Sd,TB;function Yk(){if(TB)return Sd;TB=1;var e=E3();function n(t){return e(t)&&t!=+t}return Sd=n,Sd}var Xk=Yk();const Yi=Xe(Xk);var Zk=E3();const Jk=Xe(Zk);var ot=function(n){return n===0?0:n>0?1:-1},lo=function(n){return Qp(n)&&n.indexOf("%")===n.length-1},le=function(n){return Jk(n)&&!Yi(n)},En=function(n){return le(n)||Qp(n)},eT=0,ja=function(n){var t=++eT;return"".concat(n||"").concat(t)},it=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!le(n)&&!Qp(n))return r;var i;if(lo(n)){var p=n.indexOf("%");i=t*parseFloat(n.slice(0,p))/100}else i=+n;return Yi(i)&&(i=r),a&&i>t&&(i=t),i},Sa=function(n){if(!n)return null;var t=Object.keys(n);return t&&t.length?n[t[0]]:null},nT=function(n){if(!Array.isArray(n))return!1;for(var t=n.length,r={},a=0;a<t;a++)if(!r[n[a]])r[n[a]]=!0;else return!0;return!1},hn=function(n,t){return le(n)&&le(t)?function(r){return n+r*(t-n)}:function(){return t}};function Rl(e,n,t){return!e||!e.length?null:e.find(function(r){return r&&(typeof n=="function"?n(r):_t(r,n))===t})}var tT=function(n){if(!n||!n.length)return null;for(var t=n.length,r=0,a=0,i=0,p=0,s=1/0,c=-1/0,f=0,m=0,d=0;d<t;d++)f=n[d].cx||0,m=n[d].cy||0,r+=f,a+=m,i+=f*m,p+=f*f,s=Math.min(s,f),c=Math.max(c,f);var v=t*p!==r*r?(t*i-r*a)/(t*p-r*r):0;return{xmin:s,xmax:c,a:v,b:(a-v*r)/t}};function li(e,n){for(var t in e)if({}.hasOwnProperty.call(e,t)&&(!{}.hasOwnProperty.call(n,t)||e[t]!==n[t]))return!1;for(var r in n)if({}.hasOwnProperty.call(n,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function jv(e){"@babel/helpers - typeof";return jv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jv(e)}var rT=["viewBox","children"],aT=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],EB=["points","pathLength"],Md={svg:rT,polygon:EB,polyline:EB},Wy=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],kl=function(n,t){if(!n||typeof n=="function"||typeof n=="boolean")return null;var r=n;if(K.isValidElement(n)&&(r=n.props),!Qi(r))return null;var a={};return Object.keys(r).forEach(function(i){Wy.includes(i)&&(a[i]=t||function(p){return r[i](r,p)})}),a},oT=function(n,t,r){return function(a){return n(t,r,a),null}},Ra=function(n,t,r){if(!Qi(n)||jv(n)!=="object")return null;var a=null;return Object.keys(n).forEach(function(i){var p=n[i];Wy.includes(i)&&typeof p=="function"&&(a||(a={}),a[i]=oT(p,t,r))}),a},iT=["children"],uT=["children"];function DB(e,n){if(e==null)return{};var t=pT(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function pT(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function $v(e){"@babel/helpers - typeof";return $v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$v(e)}var jB={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},Ur=function(n){return typeof n=="string"?n:n?n.displayName||n.name||"Component":""},$B=null,Ad=null,Sy=function e(n){if(n===$B&&Array.isArray(Ad))return Ad;var t=[];return K.Children.forEach(n,function(r){Ne(r)||(Qk.isFragment(r)?t=t.concat(e(r.props.children)):t.push(r))}),Ad=t,$B=n,t};function pt(e,n){var t=[],r=[];return Array.isArray(n)?r=n.map(function(a){return Ur(a)}):r=[Ur(n)],Sy(e).forEach(function(a){var i=_t(a,"type.displayName")||_t(a,"type.name");r.indexOf(i)!==-1&&t.push(a)}),t}function Wt(e,n){var t=pt(e,n);return t&&t[0]}var LB=function(n){if(!n||!n.props)return!1;var t=n.props,r=t.width,a=t.height;return!(!le(r)||r<=0||!le(a)||a<=0)},sT=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],lT=function(n){return n&&n.type&&Qp(n.type)&&sT.indexOf(n.type)>=0},D3=function(n){return n&&$v(n)==="object"&&"clipDot"in n},cT=function(n,t,r,a){var i,p=(i=Md==null?void 0:Md[a])!==null&&i!==void 0?i:[];return t.startsWith("data-")||!Ce(n)&&(a&&p.includes(t)||aT.includes(t))||r&&Wy.includes(t)},Se=function(n,t,r){if(!n||typeof n=="function"||typeof n=="boolean")return null;var a=n;if(K.isValidElement(n)&&(a=n.props),!Qi(a))return null;var i={};return Object.keys(a).forEach(function(p){var s;cT((s=a)===null||s===void 0?void 0:s[p],p,t,r)&&(i[p]=a[p])}),i},Lv=function e(n,t){if(n===t)return!0;var r=K.Children.count(n);if(r!==K.Children.count(t))return!1;if(r===0)return!0;if(r===1)return FB(Array.isArray(n)?n[0]:n,Array.isArray(t)?t[0]:t);for(var a=0;a<r;a++){var i=n[a],p=t[a];if(Array.isArray(i)||Array.isArray(p)){if(!e(i,p))return!1}else if(!FB(i,p))return!1}return!0},FB=function(n,t){if(Ne(n)&&Ne(t))return!0;if(!Ne(n)&&!Ne(t)){var r=n.props||{},a=r.children,i=DB(r,iT),p=t.props||{},s=p.children,c=DB(p,uT);return a&&s?li(i,c)&&Lv(a,s):!a&&!s?li(i,c):!1}return!1},qB=function(n,t){var r=[],a={};return Sy(n).forEach(function(i,p){if(lT(i))r.push(i);else if(i){var s=Ur(i.type),c=t[s]||{},f=c.handler,m=c.once;if(f&&(!m||!a[s])){var d=f(i,s,p);r.push(d),a[s]=!0}}}),r},fT=function(n){var t=n&&n.type;return t&&jB[t]?jB[t]:null},dT=function(n,t){return Sy(t).indexOf(n)},mT=["children","width","height","viewBox","className","style","title","desc"];function Fv(){return Fv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Fv.apply(this,arguments)}function hT(e,n){if(e==null)return{};var t=vT(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function vT(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function qv(e){var n=e.children,t=e.width,r=e.height,a=e.viewBox,i=e.className,p=e.style,s=e.title,c=e.desc,f=hT(e,mT),m=a||{width:t,height:r,x:0,y:0},d=Ee("recharts-surface",i);return D.createElement("svg",Fv({},Se(f,!0,"svg"),{className:d,width:t,height:r,style:p,viewBox:"".concat(m.x," ").concat(m.y," ").concat(m.width," ").concat(m.height)}),D.createElement("title",null,s),D.createElement("desc",null,c),n)}var gT=["children","className"];function zv(){return zv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},zv.apply(this,arguments)}function yT(e,n){if(e==null)return{};var t=bT(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function bT(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var je=D.forwardRef(function(e,n){var t=e.children,r=e.className,a=yT(e,gT),i=Ee("recharts-layer",r);return D.createElement("g",zv({className:i},Se(a,!0),{ref:n}),t)}),sr=function(n,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i]},_d,zB;function IT(){if(zB)return _d;zB=1;function e(n,t,r){var a=-1,i=n.length;t<0&&(t=-t>i?0:i+t),r=r>i?i:r,r<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var p=Array(i);++a<i;)p[a]=n[a+t];return p}return _d=e,_d}var Od,UB;function BT(){if(UB)return Od;UB=1;var e=IT();function n(t,r,a){var i=t.length;return a=a===void 0?i:a,!r&&a>=i?t:e(t,r,a)}return Od=n,Od}var Hd,VB;function j3(){if(VB)return Hd;VB=1;var e="\\ud800-\\udfff",n="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=n+t+r,i="\\ufe0e\\ufe0f",p="\\u200d",s=RegExp("["+p+e+a+i+"]");function c(f){return s.test(f)}return Hd=c,Hd}var Cd,GB;function xT(){if(GB)return Cd;GB=1;function e(n){return n.split("")}return Cd=e,Cd}var Nd,KB;function wT(){if(KB)return Nd;KB=1;var e="\\ud800-\\udfff",n="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=n+t+r,i="\\ufe0e\\ufe0f",p="["+e+"]",s="["+a+"]",c="\\ud83c[\\udffb-\\udfff]",f="(?:"+s+"|"+c+")",m="[^"+e+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",y="\\u200d",B=f+"?",I="["+i+"]?",b="(?:"+y+"(?:"+[m,d,v].join("|")+")"+I+B+")*",W=I+B+b,M="(?:"+[m+s+"?",s,d,v,p].join("|")+")",A=RegExp(c+"(?="+c+")|"+M+W,"g");function O(w){return w.match(A)||[]}return Nd=O,Nd}var Rd,QB;function PT(){if(QB)return Rd;QB=1;var e=xT(),n=j3(),t=wT();function r(a){return n(a)?t(a):e(a)}return Rd=r,Rd}var kd,YB;function WT(){if(YB)return kd;YB=1;var e=BT(),n=j3(),t=PT(),r=R3();function a(i){return function(p){p=r(p);var s=n(p)?t(p):void 0,c=s?s[0]:p.charAt(0),f=s?e(s,1).join(""):p.slice(1);return c[i]()+f}}return kd=a,kd}var Td,XB;function ST(){if(XB)return Td;XB=1;var e=WT(),n=e("toUpperCase");return Td=n,Td}var MT=ST();const V0=Xe(MT);function an(e){return function(){return e}}const $3=Math.cos,Tl=Math.sin,cr=Math.sqrt,El=Math.PI,G0=2*El,Uv=Math.PI,Vv=2*Uv,uo=1e-6,AT=Vv-uo;function L3(e){this._+=e[0];for(let n=1,t=e.length;n<t;++n)this._+=arguments[n]+e[n]}function _T(e){let n=Math.floor(e);if(!(n>=0))throw new Error(`invalid digits: ${e}`);if(n>15)return L3;const t=10**n;return function(r){this._+=r[0];for(let a=1,i=r.length;a<i;++a)this._+=Math.round(arguments[a]*t)/t+r[a]}}class OT{constructor(n){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=n==null?L3:_T(n)}moveTo(n,t){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(n,t){this._append`L${this._x1=+n},${this._y1=+t}`}quadraticCurveTo(n,t,r,a){this._append`Q${+n},${+t},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(n,t,r,a,i,p){this._append`C${+n},${+t},${+r},${+a},${this._x1=+i},${this._y1=+p}`}arcTo(n,t,r,a,i){if(n=+n,t=+t,r=+r,a=+a,i=+i,i<0)throw new Error(`negative radius: ${i}`);let p=this._x1,s=this._y1,c=r-n,f=a-t,m=p-n,d=s-t,v=m*m+d*d;if(this._x1===null)this._append`M${this._x1=n},${this._y1=t}`;else if(v>uo)if(!(Math.abs(d*c-f*m)>uo)||!i)this._append`L${this._x1=n},${this._y1=t}`;else{let y=r-p,B=a-s,I=c*c+f*f,b=y*y+B*B,W=Math.sqrt(I),M=Math.sqrt(v),A=i*Math.tan((Uv-Math.acos((I+v-b)/(2*W*M)))/2),O=A/M,w=A/W;Math.abs(O-1)>uo&&this._append`L${n+O*m},${t+O*d}`,this._append`A${i},${i},0,0,${+(d*y>m*B)},${this._x1=n+w*c},${this._y1=t+w*f}`}}arc(n,t,r,a,i,p){if(n=+n,t=+t,r=+r,p=!!p,r<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(a),c=r*Math.sin(a),f=n+s,m=t+c,d=1^p,v=p?a-i:i-a;this._x1===null?this._append`M${f},${m}`:(Math.abs(this._x1-f)>uo||Math.abs(this._y1-m)>uo)&&this._append`L${f},${m}`,r&&(v<0&&(v=v%Vv+Vv),v>AT?this._append`A${r},${r},0,1,${d},${n-s},${t-c}A${r},${r},0,1,${d},${this._x1=f},${this._y1=m}`:v>uo&&this._append`A${r},${r},0,${+(v>=Uv)},${d},${this._x1=n+r*Math.cos(i)},${this._y1=t+r*Math.sin(i)}`)}rect(n,t,r,a){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+t}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function My(e){let n=3;return e.digits=function(t){if(!arguments.length)return n;if(t==null)n=null;else{const r=Math.floor(t);if(!(r>=0))throw new RangeError(`invalid digits: ${t}`);n=r}return e},()=>new OT(n)}function Ay(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function F3(e){this._context=e}F3.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:this._context.lineTo(e,n);break}}};function K0(e){return new F3(e)}function q3(e){return e[0]}function z3(e){return e[1]}function U3(e,n){var t=an(!0),r=null,a=K0,i=null,p=My(s);e=typeof e=="function"?e:e===void 0?q3:an(e),n=typeof n=="function"?n:n===void 0?z3:an(n);function s(c){var f,m=(c=Ay(c)).length,d,v=!1,y;for(r==null&&(i=a(y=p())),f=0;f<=m;++f)!(f<m&&t(d=c[f],f,c))===v&&((v=!v)?i.lineStart():i.lineEnd()),v&&i.point(+e(d,f,c),+n(d,f,c));if(y)return i=null,y+""||null}return s.x=function(c){return arguments.length?(e=typeof c=="function"?c:an(+c),s):e},s.y=function(c){return arguments.length?(n=typeof c=="function"?c:an(+c),s):n},s.defined=function(c){return arguments.length?(t=typeof c=="function"?c:an(!!c),s):t},s.curve=function(c){return arguments.length?(a=c,r!=null&&(i=a(r)),s):a},s.context=function(c){return arguments.length?(c==null?r=i=null:i=a(r=c),s):r},s}function hl(e,n,t){var r=null,a=an(!0),i=null,p=K0,s=null,c=My(f);e=typeof e=="function"?e:e===void 0?q3:an(+e),n=typeof n=="function"?n:an(n===void 0?0:+n),t=typeof t=="function"?t:t===void 0?z3:an(+t);function f(d){var v,y,B,I=(d=Ay(d)).length,b,W=!1,M,A=new Array(I),O=new Array(I);for(i==null&&(s=p(M=c())),v=0;v<=I;++v){if(!(v<I&&a(b=d[v],v,d))===W)if(W=!W)y=v,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),B=v-1;B>=y;--B)s.point(A[B],O[B]);s.lineEnd(),s.areaEnd()}W&&(A[v]=+e(b,v,d),O[v]=+n(b,v,d),s.point(r?+r(b,v,d):A[v],t?+t(b,v,d):O[v]))}if(M)return s=null,M+""||null}function m(){return U3().defined(a).curve(p).context(i)}return f.x=function(d){return arguments.length?(e=typeof d=="function"?d:an(+d),r=null,f):e},f.x0=function(d){return arguments.length?(e=typeof d=="function"?d:an(+d),f):e},f.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:an(+d),f):r},f.y=function(d){return arguments.length?(n=typeof d=="function"?d:an(+d),t=null,f):n},f.y0=function(d){return arguments.length?(n=typeof d=="function"?d:an(+d),f):n},f.y1=function(d){return arguments.length?(t=d==null?null:typeof d=="function"?d:an(+d),f):t},f.lineX0=f.lineY0=function(){return m().x(e).y(n)},f.lineY1=function(){return m().x(e).y(t)},f.lineX1=function(){return m().x(r).y(n)},f.defined=function(d){return arguments.length?(a=typeof d=="function"?d:an(!!d),f):a},f.curve=function(d){return arguments.length?(p=d,i!=null&&(s=p(i)),f):p},f.context=function(d){return arguments.length?(d==null?i=s=null:s=p(i=d),f):i},f}class V3{constructor(n,t){this._context=n,this._x=t}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(n,t){switch(n=+n,t=+t,this._point){case 0:{this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+n)/2,this._y0,this._x0,t,n,t):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+t)/2,n,this._y0,n,t);break}}this._x0=n,this._y0=t}}function HT(e){return new V3(e,!0)}function CT(e){return new V3(e,!1)}const _y={draw(e,n){const t=cr(n/El);e.moveTo(t,0),e.arc(0,0,t,0,G0)}},NT={draw(e,n){const t=cr(n/5)/2;e.moveTo(-3*t,-t),e.lineTo(-t,-t),e.lineTo(-t,-3*t),e.lineTo(t,-3*t),e.lineTo(t,-t),e.lineTo(3*t,-t),e.lineTo(3*t,t),e.lineTo(t,t),e.lineTo(t,3*t),e.lineTo(-t,3*t),e.lineTo(-t,t),e.lineTo(-3*t,t),e.closePath()}},G3=cr(1/3),RT=G3*2,kT={draw(e,n){const t=cr(n/RT),r=t*G3;e.moveTo(0,-t),e.lineTo(r,0),e.lineTo(0,t),e.lineTo(-r,0),e.closePath()}},TT={draw(e,n){const t=cr(n),r=-t/2;e.rect(r,r,t,t)}},ET=.8908130915292852,K3=Tl(El/10)/Tl(7*El/10),DT=Tl(G0/10)*K3,jT=-$3(G0/10)*K3,$T={draw(e,n){const t=cr(n*ET),r=DT*t,a=jT*t;e.moveTo(0,-t),e.lineTo(r,a);for(let i=1;i<5;++i){const p=G0*i/5,s=$3(p),c=Tl(p);e.lineTo(c*t,-s*t),e.lineTo(s*r-c*a,c*r+s*a)}e.closePath()}},Ed=cr(3),LT={draw(e,n){const t=-cr(n/(Ed*3));e.moveTo(0,t*2),e.lineTo(-Ed*t,-t),e.lineTo(Ed*t,-t),e.closePath()}},jt=-.5,$t=cr(3)/2,Gv=1/cr(12),FT=(Gv/2+1)*3,qT={draw(e,n){const t=cr(n/FT),r=t/2,a=t*Gv,i=r,p=t*Gv+t,s=-i,c=p;e.moveTo(r,a),e.lineTo(i,p),e.lineTo(s,c),e.lineTo(jt*r-$t*a,$t*r+jt*a),e.lineTo(jt*i-$t*p,$t*i+jt*p),e.lineTo(jt*s-$t*c,$t*s+jt*c),e.lineTo(jt*r+$t*a,jt*a-$t*r),e.lineTo(jt*i+$t*p,jt*p-$t*i),e.lineTo(jt*s+$t*c,jt*c-$t*s),e.closePath()}};function zT(e,n){let t=null,r=My(a);e=typeof e=="function"?e:an(e||_y),n=typeof n=="function"?n:an(n===void 0?64:+n);function a(){let i;if(t||(t=i=r()),e.apply(this,arguments).draw(t,+n.apply(this,arguments)),i)return t=null,i+""||null}return a.type=function(i){return arguments.length?(e=typeof i=="function"?i:an(i),a):e},a.size=function(i){return arguments.length?(n=typeof i=="function"?i:an(+i),a):n},a.context=function(i){return arguments.length?(t=i??null,a):t},a}function Dl(){}function jl(e,n,t){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+n)/6,(e._y0+4*e._y1+t)/6)}function Q3(e){this._context=e}Q3.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:jl(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:jl(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function UT(e){return new Q3(e)}function Y3(e){this._context=e}Y3.prototype={areaStart:Dl,areaEnd:Dl,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._x2=e,this._y2=n;break;case 1:this._point=2,this._x3=e,this._y3=n;break;case 2:this._point=3,this._x4=e,this._y4=n,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+n)/6);break;default:jl(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function VT(e){return new Y3(e)}function X3(e){this._context=e}X3.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var t=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break;case 3:this._point=4;default:jl(this,e,n);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}};function GT(e){return new X3(e)}function Z3(e){this._context=e}Z3.prototype={areaStart:Dl,areaEnd:Dl,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,n){e=+e,n=+n,this._point?this._context.lineTo(e,n):(this._point=1,this._context.moveTo(e,n))}};function KT(e){return new Z3(e)}function ZB(e){return e<0?-1:1}function JB(e,n,t){var r=e._x1-e._x0,a=n-e._x1,i=(e._y1-e._y0)/(r||a<0&&-0),p=(t-e._y1)/(a||r<0&&-0),s=(i*a+p*r)/(r+a);return(ZB(i)+ZB(p))*Math.min(Math.abs(i),Math.abs(p),.5*Math.abs(s))||0}function ex(e,n){var t=e._x1-e._x0;return t?(3*(e._y1-e._y0)/t-n)/2:n}function Dd(e,n,t){var r=e._x0,a=e._y0,i=e._x1,p=e._y1,s=(i-r)/3;e._context.bezierCurveTo(r+s,a+s*n,i-s,p-s*t,i,p)}function $l(e){this._context=e}$l.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Dd(this,this._t0,ex(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){var t=NaN;if(e=+e,n=+n,!(e===this._x1&&n===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,Dd(this,ex(this,t=JB(this,e,n)),t);break;default:Dd(this,this._t0,t=JB(this,e,n));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n,this._t0=t}}};function J3(e){this._context=new eS(e)}(J3.prototype=Object.create($l.prototype)).point=function(e,n){$l.prototype.point.call(this,n,e)};function eS(e){this._context=e}eS.prototype={moveTo:function(e,n){this._context.moveTo(n,e)},closePath:function(){this._context.closePath()},lineTo:function(e,n){this._context.lineTo(n,e)},bezierCurveTo:function(e,n,t,r,a,i){this._context.bezierCurveTo(n,e,r,t,i,a)}};function QT(e){return new $l(e)}function YT(e){return new J3(e)}function nS(e){this._context=e}nS.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,n=this._y,t=e.length;if(t)if(this._line?this._context.lineTo(e[0],n[0]):this._context.moveTo(e[0],n[0]),t===2)this._context.lineTo(e[1],n[1]);else for(var r=nx(e),a=nx(n),i=0,p=1;p<t;++i,++p)this._context.bezierCurveTo(r[0][i],a[0][i],r[1][i],a[1][i],e[p],n[p]);(this._line||this._line!==0&&t===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,n){this._x.push(+e),this._y.push(+n)}};function nx(e){var n,t=e.length-1,r,a=new Array(t),i=new Array(t),p=new Array(t);for(a[0]=0,i[0]=2,p[0]=e[0]+2*e[1],n=1;n<t-1;++n)a[n]=1,i[n]=4,p[n]=4*e[n]+2*e[n+1];for(a[t-1]=2,i[t-1]=7,p[t-1]=8*e[t-1]+e[t],n=1;n<t;++n)r=a[n]/i[n-1],i[n]-=r,p[n]-=r*p[n-1];for(a[t-1]=p[t-1]/i[t-1],n=t-2;n>=0;--n)a[n]=(p[n]-a[n+1])/i[n];for(i[t-1]=(e[t]+a[t-1])/2,n=0;n<t-1;++n)i[n]=2*e[n+1]-a[n+1];return[a,i]}function XT(e){return new nS(e)}function Q0(e,n){this._context=e,this._t=n}Q0.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(e,n);else{var t=this._x*(1-this._t)+e*this._t;this._context.lineTo(t,this._y),this._context.lineTo(t,n)}break}}this._x=e,this._y=n}};function ZT(e){return new Q0(e,.5)}function JT(e){return new Q0(e,0)}function eE(e){return new Q0(e,1)}function hi(e,n){if((p=e.length)>1)for(var t=1,r,a,i=e[n[0]],p,s=i.length;t<p;++t)for(a=i,i=e[n[t]],r=0;r<s;++r)i[r][1]+=i[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function Kv(e){for(var n=e.length,t=new Array(n);--n>=0;)t[n]=n;return t}function nE(e,n){return e[n]}function tE(e){const n=[];return n.key=e,n}function rE(){var e=an([]),n=Kv,t=hi,r=nE;function a(i){var p=Array.from(e.apply(this,arguments),tE),s,c=p.length,f=-1,m;for(const d of i)for(s=0,++f;s<c;++s)(p[s][f]=[0,+r(d,p[s].key,f,i)]).data=d;for(s=0,m=Ay(n(p));s<c;++s)p[m[s]].index=s;return t(p,m),p}return a.keys=function(i){return arguments.length?(e=typeof i=="function"?i:an(Array.from(i)),a):e},a.value=function(i){return arguments.length?(r=typeof i=="function"?i:an(+i),a):r},a.order=function(i){return arguments.length?(n=i==null?Kv:typeof i=="function"?i:an(Array.from(i)),a):n},a.offset=function(i){return arguments.length?(t=i??hi,a):t},a}function aE(e,n){if((r=e.length)>0){for(var t,r,a=0,i=e[0].length,p;a<i;++a){for(p=t=0;t<r;++t)p+=e[t][a][1]||0;if(p)for(t=0;t<r;++t)e[t][a][1]/=p}hi(e,n)}}function oE(e,n){if((a=e.length)>0){for(var t=0,r=e[n[0]],a,i=r.length;t<i;++t){for(var p=0,s=0;p<a;++p)s+=e[p][t][1]||0;r[t][1]+=r[t][0]=-s/2}hi(e,n)}}function iE(e,n){if(!(!((p=e.length)>0)||!((i=(a=e[n[0]]).length)>0))){for(var t=0,r=1,a,i,p;r<i;++r){for(var s=0,c=0,f=0;s<p;++s){for(var m=e[n[s]],d=m[r][1]||0,v=m[r-1][1]||0,y=(d-v)/2,B=0;B<s;++B){var I=e[n[B]],b=I[r][1]||0,W=I[r-1][1]||0;y+=b-W}c+=d,f+=y*d}a[r-1][1]+=a[r-1][0]=t,c&&(t-=f/c)}a[r-1][1]+=a[r-1][0]=t,hi(e,n)}}function dp(e){"@babel/helpers - typeof";return dp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},dp(e)}var uE=["type","size","sizeType"];function Qv(){return Qv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Qv.apply(this,arguments)}function tx(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function rx(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?tx(Object(t),!0).forEach(function(r){pE(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tx(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function pE(e,n,t){return n=sE(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function sE(e){var n=lE(e,"string");return dp(n)=="symbol"?n:n+""}function lE(e,n){if(dp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(dp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function cE(e,n){if(e==null)return{};var t=fE(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function fE(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var tS={symbolCircle:_y,symbolCross:NT,symbolDiamond:kT,symbolSquare:TT,symbolStar:$T,symbolTriangle:LT,symbolWye:qT},dE=Math.PI/180,mE=function(n){var t="symbol".concat(V0(n));return tS[t]||_y},hE=function(n,t,r){if(t==="area")return n;switch(r){case"cross":return 5*n*n/9;case"diamond":return .5*n*n/Math.sqrt(3);case"square":return n*n;case"star":{var a=18*dE;return 1.25*n*n*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*n*n/4;case"wye":return(21-10*Math.sqrt(3))*n*n/8;default:return Math.PI*n*n/4}},vE=function(n,t){tS["symbol".concat(V0(n))]=t},Y0=function(n){var t=n.type,r=t===void 0?"circle":t,a=n.size,i=a===void 0?64:a,p=n.sizeType,s=p===void 0?"area":p,c=cE(n,uE),f=rx(rx({},c),{},{type:r,size:i,sizeType:s}),m=function(){var b=mE(r),W=zT().type(b).size(hE(i,s,r));return W()},d=f.className,v=f.cx,y=f.cy,B=Se(f,!0);return v===+v&&y===+y&&i===+i?D.createElement("path",Qv({},B,{className:Ee("recharts-symbols",d),transform:"translate(".concat(v,", ").concat(y,")"),d:m()})):null};Y0.registerSymbol=vE;function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vi(e)}function Yv(){return Yv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Yv.apply(this,arguments)}function ax(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function gE(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ax(Object(t),!0).forEach(function(r){mp(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ax(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function yE(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function bE(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,aS(r.key),r)}}function IE(e,n,t){return n&&bE(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function BE(e,n,t){return n=Ll(n),xE(e,rS()?Reflect.construct(n,t||[],Ll(e).constructor):n.apply(e,t))}function xE(e,n){if(n&&(vi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wE(e)}function wE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rS(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rS=function(){return!!e})()}function Ll(e){return Ll=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ll(e)}function PE(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Xv(e,n)}function Xv(e,n){return Xv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xv(e,n)}function mp(e,n,t){return n=aS(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function aS(e){var n=WE(e,"string");return vi(n)=="symbol"?n:n+""}function WE(e,n){if(vi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Lt=32,Oy=(function(e){function n(){return yE(this,n),BE(this,n,arguments)}return PE(n,e),IE(n,[{key:"renderIcon",value:function(r){var a=this.props.inactiveColor,i=Lt/2,p=Lt/6,s=Lt/3,c=r.inactive?a:r.color;if(r.type==="plainline")return D.createElement("line",{strokeWidth:4,fill:"none",stroke:c,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:i,x2:Lt,y2:i,className:"recharts-legend-icon"});if(r.type==="line")return D.createElement("path",{strokeWidth:4,fill:"none",stroke:c,d:"M0,".concat(i,"h").concat(s,`
            A`).concat(p,",").concat(p,",0,1,1,").concat(2*s,",").concat(i,`
            H`).concat(Lt,"M").concat(2*s,",").concat(i,`
            A`).concat(p,",").concat(p,",0,1,1,").concat(s,",").concat(i),className:"recharts-legend-icon"});if(r.type==="rect")return D.createElement("path",{stroke:"none",fill:c,d:"M0,".concat(Lt/8,"h").concat(Lt,"v").concat(Lt*3/4,"h").concat(-Lt,"z"),className:"recharts-legend-icon"});if(D.isValidElement(r.legendIcon)){var f=gE({},r);return delete f.legendIcon,D.cloneElement(r.legendIcon,f)}return D.createElement(Y0,{fill:c,cx:i,cy:i,size:Lt,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,a=this.props,i=a.payload,p=a.iconSize,s=a.layout,c=a.formatter,f=a.inactiveColor,m={x:0,y:0,width:Lt,height:Lt},d={display:s==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return i.map(function(y,B){var I=y.formatter||c,b=Ee(mp(mp({"recharts-legend-item":!0},"legend-item-".concat(B),!0),"inactive",y.inactive));if(y.type==="none")return null;var W=Ce(y.value)?null:y.value;sr(!Ce(y.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var M=y.inactive?f:y.color;return D.createElement("li",Yv({className:b,style:d,key:"legend-item-".concat(B)},Ra(r.props,y,B)),D.createElement(qv,{width:p,height:p,viewBox:m,style:v},r.renderIcon(y)),D.createElement("span",{className:"recharts-legend-item-text",style:{color:M}},I?I(W,y,B):W))})}},{key:"render",value:function(){var r=this.props,a=r.payload,i=r.layout,p=r.align;if(!a||!a.length)return null;var s={padding:0,margin:0,textAlign:i==="horizontal"?p:"left"};return D.createElement("ul",{className:"recharts-default-legend",style:s},this.renderItems())}}])})(K.PureComponent);mp(Oy,"displayName","Legend");mp(Oy,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var jd,ox;function SE(){if(ox)return jd;ox=1;var e=q0();function n(){this.__data__=new e,this.size=0}return jd=n,jd}var $d,ix;function ME(){if(ix)return $d;ix=1;function e(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}return $d=e,$d}var Ld,ux;function AE(){if(ux)return Ld;ux=1;function e(n){return this.__data__.get(n)}return Ld=e,Ld}var Fd,px;function _E(){if(px)return Fd;px=1;function e(n){return this.__data__.has(n)}return Fd=e,Fd}var qd,sx;function OE(){if(sx)return qd;sx=1;var e=q0(),n=By(),t=xy(),r=200;function a(i,p){var s=this.__data__;if(s instanceof e){var c=s.__data__;if(!n||c.length<r-1)return c.push([i,p]),this.size=++s.size,this;s=this.__data__=new t(c)}return s.set(i,p),this.size=s.size,this}return qd=a,qd}var zd,lx;function oS(){if(lx)return zd;lx=1;var e=q0(),n=SE(),t=ME(),r=AE(),a=_E(),i=OE();function p(s){var c=this.__data__=new e(s);this.size=c.size}return p.prototype.clear=n,p.prototype.delete=t,p.prototype.get=r,p.prototype.has=a,p.prototype.set=i,zd=p,zd}var Ud,cx;function HE(){if(cx)return Ud;cx=1;var e="__lodash_hash_undefined__";function n(t){return this.__data__.set(t,e),this}return Ud=n,Ud}var Vd,fx;function CE(){if(fx)return Vd;fx=1;function e(n){return this.__data__.has(n)}return Vd=e,Vd}var Gd,dx;function iS(){if(dx)return Gd;dx=1;var e=xy(),n=HE(),t=CE();function r(a){var i=-1,p=a==null?0:a.length;for(this.__data__=new e;++i<p;)this.add(a[i])}return r.prototype.add=r.prototype.push=n,r.prototype.has=t,Gd=r,Gd}var Kd,mx;function uS(){if(mx)return Kd;mx=1;function e(n,t){for(var r=-1,a=n==null?0:n.length;++r<a;)if(t(n[r],r,n))return!0;return!1}return Kd=e,Kd}var Qd,hx;function pS(){if(hx)return Qd;hx=1;function e(n,t){return n.has(t)}return Qd=e,Qd}var Yd,vx;function sS(){if(vx)return Yd;vx=1;var e=iS(),n=uS(),t=pS(),r=1,a=2;function i(p,s,c,f,m,d){var v=c&r,y=p.length,B=s.length;if(y!=B&&!(v&&B>y))return!1;var I=d.get(p),b=d.get(s);if(I&&b)return I==s&&b==p;var W=-1,M=!0,A=c&a?new e:void 0;for(d.set(p,s),d.set(s,p);++W<y;){var O=p[W],w=s[W];if(f)var S=v?f(w,O,W,s,p,d):f(O,w,W,p,s,d);if(S!==void 0){if(S)continue;M=!1;break}if(A){if(!n(s,function(N,P){if(!t(A,P)&&(O===N||m(O,N,c,f,d)))return A.push(P)})){M=!1;break}}else if(!(O===w||m(O,w,c,f,d))){M=!1;break}}return d.delete(p),d.delete(s),M}return Yd=i,Yd}var Xd,gx;function NE(){if(gx)return Xd;gx=1;var e=Sr(),n=e.Uint8Array;return Xd=n,Xd}var Zd,yx;function RE(){if(yx)return Zd;yx=1;function e(n){var t=-1,r=Array(n.size);return n.forEach(function(a,i){r[++t]=[i,a]}),r}return Zd=e,Zd}var Jd,bx;function Hy(){if(bx)return Jd;bx=1;function e(n){var t=-1,r=Array(n.size);return n.forEach(function(a){r[++t]=a}),r}return Jd=e,Jd}var em,Ix;function kE(){if(Ix)return em;Ix=1;var e=Kp(),n=NE(),t=Iy(),r=sS(),a=RE(),i=Hy(),p=1,s=2,c="[object Boolean]",f="[object Date]",m="[object Error]",d="[object Map]",v="[object Number]",y="[object RegExp]",B="[object Set]",I="[object String]",b="[object Symbol]",W="[object ArrayBuffer]",M="[object DataView]",A=e?e.prototype:void 0,O=A?A.valueOf:void 0;function w(S,N,P,H,T,j,k){switch(P){case M:if(S.byteLength!=N.byteLength||S.byteOffset!=N.byteOffset)return!1;S=S.buffer,N=N.buffer;case W:return!(S.byteLength!=N.byteLength||!j(new n(S),new n(N)));case c:case f:case v:return t(+S,+N);case m:return S.name==N.name&&S.message==N.message;case y:case I:return S==N+"";case d:var F=a;case B:var Q=H&p;if(F||(F=i),S.size!=N.size&&!Q)return!1;var Y=k.get(S);if(Y)return Y==N;H|=s,k.set(S,N);var X=r(F(S),F(N),H,T,j,k);return k.delete(S),X;case b:if(O)return O.call(S)==O.call(N)}return!1}return em=w,em}var nm,Bx;function lS(){if(Bx)return nm;Bx=1;function e(n,t){for(var r=-1,a=t.length,i=n.length;++r<a;)n[i+r]=t[r];return n}return nm=e,nm}var tm,xx;function TE(){if(xx)return tm;xx=1;var e=lS(),n=yt();function t(r,a,i){var p=a(r);return n(r)?p:e(p,i(r))}return tm=t,tm}var rm,wx;function EE(){if(wx)return rm;wx=1;function e(n,t){for(var r=-1,a=n==null?0:n.length,i=0,p=[];++r<a;){var s=n[r];t(s,r,n)&&(p[i++]=s)}return p}return rm=e,rm}var am,Px;function DE(){if(Px)return am;Px=1;function e(){return[]}return am=e,am}var om,Wx;function jE(){if(Wx)return om;Wx=1;var e=EE(),n=DE(),t=Object.prototype,r=t.propertyIsEnumerable,a=Object.getOwnPropertySymbols,i=a?function(p){return p==null?[]:(p=Object(p),e(a(p),function(s){return r.call(p,s)}))}:n;return om=i,om}var im,Sx;function $E(){if(Sx)return im;Sx=1;function e(n,t){for(var r=-1,a=Array(n);++r<n;)a[r]=t(r);return a}return im=e,im}var um,Mx;function LE(){if(Mx)return um;Mx=1;var e=Yr(),n=Xr(),t="[object Arguments]";function r(a){return n(a)&&e(a)==t}return um=r,um}var pm,Ax;function Cy(){if(Ax)return pm;Ax=1;var e=LE(),n=Xr(),t=Object.prototype,r=t.hasOwnProperty,a=t.propertyIsEnumerable,i=e((function(){return arguments})())?e:function(p){return n(p)&&r.call(p,"callee")&&!a.call(p,"callee")};return pm=i,pm}var ep={exports:{}},sm,_x;function FE(){if(_x)return sm;_x=1;function e(){return!1}return sm=e,sm}ep.exports;var Ox;function cS(){return Ox||(Ox=1,(function(e,n){var t=Sr(),r=FE(),a=n&&!n.nodeType&&n,i=a&&!0&&e&&!e.nodeType&&e,p=i&&i.exports===a,s=p?t.Buffer:void 0,c=s?s.isBuffer:void 0,f=c||r;e.exports=f})(ep,ep.exports)),ep.exports}var lm,Hx;function Ny(){if(Hx)return lm;Hx=1;var e=9007199254740991,n=/^(?:0|[1-9]\d*)$/;function t(r,a){var i=typeof r;return a=a??e,!!a&&(i=="number"||i!="symbol"&&n.test(r))&&r>-1&&r%1==0&&r<a}return lm=t,lm}var cm,Cx;function Ry(){if(Cx)return cm;Cx=1;var e=9007199254740991;function n(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=e}return cm=n,cm}var fm,Nx;function qE(){if(Nx)return fm;Nx=1;var e=Yr(),n=Ry(),t=Xr(),r="[object Arguments]",a="[object Array]",i="[object Boolean]",p="[object Date]",s="[object Error]",c="[object Function]",f="[object Map]",m="[object Number]",d="[object Object]",v="[object RegExp]",y="[object Set]",B="[object String]",I="[object WeakMap]",b="[object ArrayBuffer]",W="[object DataView]",M="[object Float32Array]",A="[object Float64Array]",O="[object Int8Array]",w="[object Int16Array]",S="[object Int32Array]",N="[object Uint8Array]",P="[object Uint8ClampedArray]",H="[object Uint16Array]",T="[object Uint32Array]",j={};j[M]=j[A]=j[O]=j[w]=j[S]=j[N]=j[P]=j[H]=j[T]=!0,j[r]=j[a]=j[b]=j[i]=j[W]=j[p]=j[s]=j[c]=j[f]=j[m]=j[d]=j[v]=j[y]=j[B]=j[I]=!1;function k(F){return t(F)&&n(F.length)&&!!j[e(F)]}return fm=k,fm}var dm,Rx;function fS(){if(Rx)return dm;Rx=1;function e(n){return function(t){return n(t)}}return dm=e,dm}var np={exports:{}};np.exports;var kx;function zE(){return kx||(kx=1,(function(e,n){var t=H3(),r=n&&!n.nodeType&&n,a=r&&!0&&e&&!e.nodeType&&e,i=a&&a.exports===r,p=i&&t.process,s=(function(){try{var c=a&&a.require&&a.require("util").types;return c||p&&p.binding&&p.binding("util")}catch{}})();e.exports=s})(np,np.exports)),np.exports}var mm,Tx;function dS(){if(Tx)return mm;Tx=1;var e=qE(),n=fS(),t=zE(),r=t&&t.isTypedArray,a=r?n(r):e;return mm=a,mm}var hm,Ex;function UE(){if(Ex)return hm;Ex=1;var e=$E(),n=Cy(),t=yt(),r=cS(),a=Ny(),i=dS(),p=Object.prototype,s=p.hasOwnProperty;function c(f,m){var d=t(f),v=!d&&n(f),y=!d&&!v&&r(f),B=!d&&!v&&!y&&i(f),I=d||v||y||B,b=I?e(f.length,String):[],W=b.length;for(var M in f)(m||s.call(f,M))&&!(I&&(M=="length"||y&&(M=="offset"||M=="parent")||B&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||a(M,W)))&&b.push(M);return b}return hm=c,hm}var vm,Dx;function VE(){if(Dx)return vm;Dx=1;var e=Object.prototype;function n(t){var r=t&&t.constructor,a=typeof r=="function"&&r.prototype||e;return t===a}return vm=n,vm}var gm,jx;function mS(){if(jx)return gm;jx=1;function e(n,t){return function(r){return n(t(r))}}return gm=e,gm}var ym,$x;function GE(){if($x)return ym;$x=1;var e=mS(),n=e(Object.keys,Object);return ym=n,ym}var bm,Lx;function KE(){if(Lx)return bm;Lx=1;var e=VE(),n=GE(),t=Object.prototype,r=t.hasOwnProperty;function a(i){if(!e(i))return n(i);var p=[];for(var s in Object(i))r.call(i,s)&&s!="constructor"&&p.push(s);return p}return bm=a,bm}var Im,Fx;function Yp(){if(Fx)return Im;Fx=1;var e=by(),n=Ry();function t(r){return r!=null&&n(r.length)&&!e(r)}return Im=t,Im}var Bm,qx;function X0(){if(qx)return Bm;qx=1;var e=UE(),n=KE(),t=Yp();function r(a){return t(a)?e(a):n(a)}return Bm=r,Bm}var xm,zx;function QE(){if(zx)return xm;zx=1;var e=TE(),n=jE(),t=X0();function r(a){return e(a,t,n)}return xm=r,xm}var wm,Ux;function YE(){if(Ux)return wm;Ux=1;var e=QE(),n=1,t=Object.prototype,r=t.hasOwnProperty;function a(i,p,s,c,f,m){var d=s&n,v=e(i),y=v.length,B=e(p),I=B.length;if(y!=I&&!d)return!1;for(var b=y;b--;){var W=v[b];if(!(d?W in p:r.call(p,W)))return!1}var M=m.get(i),A=m.get(p);if(M&&A)return M==p&&A==i;var O=!0;m.set(i,p),m.set(p,i);for(var w=d;++b<y;){W=v[b];var S=i[W],N=p[W];if(c)var P=d?c(N,S,W,p,i,m):c(S,N,W,i,p,m);if(!(P===void 0?S===N||f(S,N,s,c,m):P)){O=!1;break}w||(w=W=="constructor")}if(O&&!w){var H=i.constructor,T=p.constructor;H!=T&&"constructor"in i&&"constructor"in p&&!(typeof H=="function"&&H instanceof H&&typeof T=="function"&&T instanceof T)&&(O=!1)}return m.delete(i),m.delete(p),O}return wm=a,wm}var Pm,Vx;function XE(){if(Vx)return Pm;Vx=1;var e=xo(),n=Sr(),t=e(n,"DataView");return Pm=t,Pm}var Wm,Gx;function ZE(){if(Gx)return Wm;Gx=1;var e=xo(),n=Sr(),t=e(n,"Promise");return Wm=t,Wm}var Sm,Kx;function hS(){if(Kx)return Sm;Kx=1;var e=xo(),n=Sr(),t=e(n,"Set");return Sm=t,Sm}var Mm,Qx;function JE(){if(Qx)return Mm;Qx=1;var e=xo(),n=Sr(),t=e(n,"WeakMap");return Mm=t,Mm}var Am,Yx;function eD(){if(Yx)return Am;Yx=1;var e=XE(),n=By(),t=ZE(),r=hS(),a=JE(),i=Yr(),p=C3(),s="[object Map]",c="[object Object]",f="[object Promise]",m="[object Set]",d="[object WeakMap]",v="[object DataView]",y=p(e),B=p(n),I=p(t),b=p(r),W=p(a),M=i;return(e&&M(new e(new ArrayBuffer(1)))!=v||n&&M(new n)!=s||t&&M(t.resolve())!=f||r&&M(new r)!=m||a&&M(new a)!=d)&&(M=function(A){var O=i(A),w=O==c?A.constructor:void 0,S=w?p(w):"";if(S)switch(S){case y:return v;case B:return s;case I:return f;case b:return m;case W:return d}return O}),Am=M,Am}var _m,Xx;function nD(){if(Xx)return _m;Xx=1;var e=oS(),n=sS(),t=kE(),r=YE(),a=eD(),i=yt(),p=cS(),s=dS(),c=1,f="[object Arguments]",m="[object Array]",d="[object Object]",v=Object.prototype,y=v.hasOwnProperty;function B(I,b,W,M,A,O){var w=i(I),S=i(b),N=w?m:a(I),P=S?m:a(b);N=N==f?d:N,P=P==f?d:P;var H=N==d,T=P==d,j=N==P;if(j&&p(I)){if(!p(b))return!1;w=!0,H=!1}if(j&&!H)return O||(O=new e),w||s(I)?n(I,b,W,M,A,O):t(I,b,N,W,M,A,O);if(!(W&c)){var k=H&&y.call(I,"__wrapped__"),F=T&&y.call(b,"__wrapped__");if(k||F){var Q=k?I.value():I,Y=F?b.value():b;return O||(O=new e),A(Q,Y,W,M,O)}}return j?(O||(O=new e),r(I,b,W,M,A,O)):!1}return _m=B,_m}var Om,Zx;function ky(){if(Zx)return Om;Zx=1;var e=nD(),n=Xr();function t(r,a,i,p,s){return r===a?!0:r==null||a==null||!n(r)&&!n(a)?r!==r&&a!==a:e(r,a,i,p,t,s)}return Om=t,Om}var Hm,Jx;function tD(){if(Jx)return Hm;Jx=1;var e=oS(),n=ky(),t=1,r=2;function a(i,p,s,c){var f=s.length,m=f,d=!c;if(i==null)return!m;for(i=Object(i);f--;){var v=s[f];if(d&&v[2]?v[1]!==i[v[0]]:!(v[0]in i))return!1}for(;++f<m;){v=s[f];var y=v[0],B=i[y],I=v[1];if(d&&v[2]){if(B===void 0&&!(y in i))return!1}else{var b=new e;if(c)var W=c(B,I,y,i,p,b);if(!(W===void 0?n(I,B,t|r,c,b):W))return!1}}return!0}return Hm=a,Hm}var Cm,ew;function vS(){if(ew)return Cm;ew=1;var e=Da();function n(t){return t===t&&!e(t)}return Cm=n,Cm}var Nm,nw;function rD(){if(nw)return Nm;nw=1;var e=vS(),n=X0();function t(r){for(var a=n(r),i=a.length;i--;){var p=a[i],s=r[p];a[i]=[p,s,e(s)]}return a}return Nm=t,Nm}var Rm,tw;function gS(){if(tw)return Rm;tw=1;function e(n,t){return function(r){return r==null?!1:r[n]===t&&(t!==void 0||n in Object(r))}}return Rm=e,Rm}var km,rw;function aD(){if(rw)return km;rw=1;var e=tD(),n=rD(),t=gS();function r(a){var i=n(a);return i.length==1&&i[0][2]?t(i[0][0],i[0][1]):function(p){return p===a||e(p,a,i)}}return km=r,km}var Tm,aw;function oD(){if(aw)return Tm;aw=1;function e(n,t){return n!=null&&t in Object(n)}return Tm=e,Tm}var Em,ow;function iD(){if(ow)return Em;ow=1;var e=k3(),n=Cy(),t=yt(),r=Ny(),a=Ry(),i=U0();function p(s,c,f){c=e(c,s);for(var m=-1,d=c.length,v=!1;++m<d;){var y=i(c[m]);if(!(v=s!=null&&f(s,y)))break;s=s[y]}return v||++m!=d?v:(d=s==null?0:s.length,!!d&&a(d)&&r(y,d)&&(t(s)||n(s)))}return Em=p,Em}var Dm,iw;function uD(){if(iw)return Dm;iw=1;var e=oD(),n=iD();function t(r,a){return r!=null&&n(r,a,e)}return Dm=t,Dm}var jm,uw;function pD(){if(uw)return jm;uw=1;var e=ky(),n=T3(),t=uD(),r=yy(),a=vS(),i=gS(),p=U0(),s=1,c=2;function f(m,d){return r(m)&&a(d)?i(p(m),d):function(v){var y=n(v,m);return y===void 0&&y===d?t(v,m):e(d,y,s|c)}}return jm=f,jm}var $m,pw;function Xi(){if(pw)return $m;pw=1;function e(n){return n}return $m=e,$m}var Lm,sw;function sD(){if(sw)return Lm;sw=1;function e(n){return function(t){return t==null?void 0:t[n]}}return Lm=e,Lm}var Fm,lw;function lD(){if(lw)return Fm;lw=1;var e=Py();function n(t){return function(r){return e(r,t)}}return Fm=n,Fm}var qm,cw;function cD(){if(cw)return qm;cw=1;var e=sD(),n=lD(),t=yy(),r=U0();function a(i){return t(i)?e(r(i)):n(i)}return qm=a,qm}var zm,fw;function Mr(){if(fw)return zm;fw=1;var e=aD(),n=pD(),t=Xi(),r=yt(),a=cD();function i(p){return typeof p=="function"?p:p==null?t:typeof p=="object"?r(p)?n(p[0],p[1]):e(p):a(p)}return zm=i,zm}var Um,dw;function yS(){if(dw)return Um;dw=1;function e(n,t,r,a){for(var i=n.length,p=r+(a?1:-1);a?p--:++p<i;)if(t(n[p],p,n))return p;return-1}return Um=e,Um}var Vm,mw;function fD(){if(mw)return Vm;mw=1;function e(n){return n!==n}return Vm=e,Vm}var Gm,hw;function dD(){if(hw)return Gm;hw=1;function e(n,t,r){for(var a=r-1,i=n.length;++a<i;)if(n[a]===t)return a;return-1}return Gm=e,Gm}var Km,vw;function mD(){if(vw)return Km;vw=1;var e=yS(),n=fD(),t=dD();function r(a,i,p){return i===i?t(a,i,p):e(a,n,p)}return Km=r,Km}var Qm,gw;function hD(){if(gw)return Qm;gw=1;var e=mD();function n(t,r){var a=t==null?0:t.length;return!!a&&e(t,r,0)>-1}return Qm=n,Qm}var Ym,yw;function vD(){if(yw)return Ym;yw=1;function e(n,t,r){for(var a=-1,i=n==null?0:n.length;++a<i;)if(r(t,n[a]))return!0;return!1}return Ym=e,Ym}var Xm,bw;function gD(){if(bw)return Xm;bw=1;function e(){}return Xm=e,Xm}var Zm,Iw;function yD(){if(Iw)return Zm;Iw=1;var e=hS(),n=gD(),t=Hy(),r=1/0,a=e&&1/t(new e([,-0]))[1]==r?function(i){return new e(i)}:n;return Zm=a,Zm}var Jm,Bw;function bD(){if(Bw)return Jm;Bw=1;var e=iS(),n=hD(),t=vD(),r=pS(),a=yD(),i=Hy(),p=200;function s(c,f,m){var d=-1,v=n,y=c.length,B=!0,I=[],b=I;if(m)B=!1,v=t;else if(y>=p){var W=f?null:a(c);if(W)return i(W);B=!1,v=r,b=new e}else b=f?[]:I;e:for(;++d<y;){var M=c[d],A=f?f(M):M;if(M=m||M!==0?M:0,B&&A===A){for(var O=b.length;O--;)if(b[O]===A)continue e;f&&b.push(A),I.push(M)}else v(b,A,m)||(b!==I&&b.push(A),I.push(M))}return I}return Jm=s,Jm}var eh,xw;function ID(){if(xw)return eh;xw=1;var e=Mr(),n=bD();function t(r,a){return r&&r.length?n(r,e(a,2)):[]}return eh=t,eh}var BD=ID();const ww=Xe(BD);function bS(e,n,t){return n===!0?ww(e,t):Ce(n)?ww(e,n):e}function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gi(e)}var xD=["ref"];function Pw(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Er(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Pw(Object(t),!0).forEach(function(r){Z0(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Pw(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function wD(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Ww(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,BS(r.key),r)}}function PD(e,n,t){return n&&Ww(e.prototype,n),t&&Ww(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function WD(e,n,t){return n=Fl(n),SD(e,IS()?Reflect.construct(n,t||[],Fl(e).constructor):n.apply(e,t))}function SD(e,n){if(n&&(gi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return MD(e)}function MD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function IS(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(IS=function(){return!!e})()}function Fl(e){return Fl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Fl(e)}function AD(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Zv(e,n)}function Zv(e,n){return Zv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zv(e,n)}function Z0(e,n,t){return n=BS(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function BS(e){var n=_D(e,"string");return gi(n)=="symbol"?n:n+""}function _D(e,n){if(gi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function OD(e,n){if(e==null)return{};var t=HD(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function HD(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function CD(e){return e.value}function ND(e,n){if(D.isValidElement(e))return D.cloneElement(e,n);if(typeof e=="function")return D.createElement(e,n);n.ref;var t=OD(n,xD);return D.createElement(Oy,t)}var Sw=1,Oa=(function(e){function n(){var t;wD(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=WD(this,n,[].concat(a)),Z0(t,"lastBoundingBox",{width:-1,height:-1}),t}return AD(n,e),PD(n,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>Sw||Math.abs(a.height-this.lastBoundingBox.height)>Sw)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,r&&r(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?Er({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var a=this.props,i=a.layout,p=a.align,s=a.verticalAlign,c=a.margin,f=a.chartWidth,m=a.chartHeight,d,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(p==="center"&&i==="vertical"){var y=this.getBBoxSnapshot();d={left:((f||0)-y.width)/2}}else d=p==="right"?{right:c&&c.right||0}:{left:c&&c.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(s==="middle"){var B=this.getBBoxSnapshot();v={top:((m||0)-B.height)/2}}else v=s==="bottom"?{bottom:c&&c.bottom||0}:{top:c&&c.top||0};return Er(Er({},d),v)}},{key:"render",value:function(){var r=this,a=this.props,i=a.content,p=a.width,s=a.height,c=a.wrapperStyle,f=a.payloadUniqBy,m=a.payload,d=Er(Er({position:"absolute",width:p||"auto",height:s||"auto"},this.getDefaultPosition(c)),c);return D.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(y){r.wrapperNode=y}},ND(i,Er(Er({},this.props),{},{payload:bS(m,f,CD)})))}}],[{key:"getWithHeight",value:function(r,a){var i=Er(Er({},this.defaultProps),r.props),p=i.layout;return p==="vertical"&&le(r.props.height)?{height:r.props.height}:p==="horizontal"?{width:r.props.width||a}:null}}])})(K.PureComponent);Z0(Oa,"displayName","Legend");Z0(Oa,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var nh,Mw;function RD(){if(Mw)return nh;Mw=1;var e=Kp(),n=Cy(),t=yt(),r=e?e.isConcatSpreadable:void 0;function a(i){return t(i)||n(i)||!!(r&&i&&i[r])}return nh=a,nh}var th,Aw;function xS(){if(Aw)return th;Aw=1;var e=lS(),n=RD();function t(r,a,i,p,s){var c=-1,f=r.length;for(i||(i=n),s||(s=[]);++c<f;){var m=r[c];a>0&&i(m)?a>1?t(m,a-1,i,p,s):e(s,m):p||(s[s.length]=m)}return s}return th=t,th}var rh,_w;function kD(){if(_w)return rh;_w=1;function e(n){return function(t,r,a){for(var i=-1,p=Object(t),s=a(t),c=s.length;c--;){var f=s[n?c:++i];if(r(p[f],f,p)===!1)break}return t}}return rh=e,rh}var ah,Ow;function TD(){if(Ow)return ah;Ow=1;var e=kD(),n=e();return ah=n,ah}var oh,Hw;function wS(){if(Hw)return oh;Hw=1;var e=TD(),n=X0();function t(r,a){return r&&e(r,a,n)}return oh=t,oh}var ih,Cw;function ED(){if(Cw)return ih;Cw=1;var e=Yp();function n(t,r){return function(a,i){if(a==null)return a;if(!e(a))return t(a,i);for(var p=a.length,s=r?p:-1,c=Object(a);(r?s--:++s<p)&&i(c[s],s,c)!==!1;);return a}}return ih=n,ih}var uh,Nw;function Ty(){if(Nw)return uh;Nw=1;var e=wS(),n=ED(),t=n(e);return uh=t,uh}var ph,Rw;function PS(){if(Rw)return ph;Rw=1;var e=Ty(),n=Yp();function t(r,a){var i=-1,p=n(r)?Array(r.length):[];return e(r,function(s,c,f){p[++i]=a(s,c,f)}),p}return ph=t,ph}var sh,kw;function DD(){if(kw)return sh;kw=1;function e(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}return sh=e,sh}var lh,Tw;function jD(){if(Tw)return lh;Tw=1;var e=Ki();function n(t,r){if(t!==r){var a=t!==void 0,i=t===null,p=t===t,s=e(t),c=r!==void 0,f=r===null,m=r===r,d=e(r);if(!f&&!d&&!s&&t>r||s&&c&&m&&!f&&!d||i&&c&&m||!a&&m||!p)return 1;if(!i&&!s&&!d&&t<r||d&&a&&p&&!i&&!s||f&&a&&p||!c&&p||!m)return-1}return 0}return lh=n,lh}var ch,Ew;function $D(){if(Ew)return ch;Ew=1;var e=jD();function n(t,r,a){for(var i=-1,p=t.criteria,s=r.criteria,c=p.length,f=a.length;++i<c;){var m=e(p[i],s[i]);if(m){if(i>=f)return m;var d=a[i];return m*(d=="desc"?-1:1)}}return t.index-r.index}return ch=n,ch}var fh,Dw;function LD(){if(Dw)return fh;Dw=1;var e=wy(),n=Py(),t=Mr(),r=PS(),a=DD(),i=fS(),p=$D(),s=Xi(),c=yt();function f(m,d,v){d.length?d=e(d,function(I){return c(I)?function(b){return n(b,I.length===1?I[0]:I)}:I}):d=[s];var y=-1;d=e(d,i(t));var B=r(m,function(I,b,W){var M=e(d,function(A){return A(I)});return{criteria:M,index:++y,value:I}});return a(B,function(I,b){return p(I,b,v)})}return fh=f,fh}var dh,jw;function FD(){if(jw)return dh;jw=1;function e(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}return dh=e,dh}var mh,$w;function qD(){if($w)return mh;$w=1;var e=FD(),n=Math.max;function t(r,a,i){return a=n(a===void 0?r.length-1:a,0),function(){for(var p=arguments,s=-1,c=n(p.length-a,0),f=Array(c);++s<c;)f[s]=p[a+s];s=-1;for(var m=Array(a+1);++s<a;)m[s]=p[s];return m[a]=i(f),e(r,this,m)}}return mh=t,mh}var hh,Lw;function zD(){if(Lw)return hh;Lw=1;function e(n){return function(){return n}}return hh=e,hh}var vh,Fw;function WS(){if(Fw)return vh;Fw=1;var e=xo(),n=(function(){try{var t=e(Object,"defineProperty");return t({},"",{}),t}catch{}})();return vh=n,vh}var gh,qw;function UD(){if(qw)return gh;qw=1;var e=zD(),n=WS(),t=Xi(),r=n?function(a,i){return n(a,"toString",{configurable:!0,enumerable:!1,value:e(i),writable:!0})}:t;return gh=r,gh}var yh,zw;function VD(){if(zw)return yh;zw=1;var e=800,n=16,t=Date.now;function r(a){var i=0,p=0;return function(){var s=t(),c=n-(s-p);if(p=s,c>0){if(++i>=e)return arguments[0]}else i=0;return a.apply(void 0,arguments)}}return yh=r,yh}var bh,Uw;function GD(){if(Uw)return bh;Uw=1;var e=UD(),n=VD(),t=n(e);return bh=t,bh}var Ih,Vw;function KD(){if(Vw)return Ih;Vw=1;var e=Xi(),n=qD(),t=GD();function r(a,i){return t(n(a,i,e),a+"")}return Ih=r,Ih}var Bh,Gw;function J0(){if(Gw)return Bh;Gw=1;var e=Iy(),n=Yp(),t=Ny(),r=Da();function a(i,p,s){if(!r(s))return!1;var c=typeof p;return(c=="number"?n(s)&&t(p,s.length):c=="string"&&p in s)?e(s[p],i):!1}return Bh=a,Bh}var xh,Kw;function QD(){if(Kw)return xh;Kw=1;var e=xS(),n=LD(),t=KD(),r=J0(),a=t(function(i,p){if(i==null)return[];var s=p.length;return s>1&&r(i,p[0],p[1])?p=[]:s>2&&r(p[0],p[1],p[2])&&(p=[p[0]]),n(i,e(p,1),[])});return xh=a,xh}var YD=QD();const Ey=Xe(YD);function hp(e){"@babel/helpers - typeof";return hp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hp(e)}function Jv(){return Jv=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Jv.apply(this,arguments)}function XD(e,n){return nj(e)||ej(e,n)||JD(e,n)||ZD()}function ZD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JD(e,n){if(e){if(typeof e=="string")return Qw(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Qw(e,n)}}function Qw(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ej(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function nj(e){if(Array.isArray(e))return e}function Yw(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function wh(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Yw(Object(t),!0).forEach(function(r){tj(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Yw(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function tj(e,n,t){return n=rj(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function rj(e){var n=aj(e,"string");return hp(n)=="symbol"?n:n+""}function aj(e,n){if(hp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(hp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function oj(e){return Array.isArray(e)&&En(e[0])&&En(e[1])?e.join(" ~ "):e}var ij=function(n){var t=n.separator,r=t===void 0?" : ":t,a=n.contentStyle,i=a===void 0?{}:a,p=n.itemStyle,s=p===void 0?{}:p,c=n.labelStyle,f=c===void 0?{}:c,m=n.payload,d=n.formatter,v=n.itemSorter,y=n.wrapperClassName,B=n.labelClassName,I=n.label,b=n.labelFormatter,W=n.accessibilityLayer,M=W===void 0?!1:W,A=function(){if(m&&m.length){var k={padding:0,margin:0},F=(v?Ey(m,v):m).map(function(Q,Y){if(Q.type==="none")return null;var X=wh({display:"block",paddingTop:4,paddingBottom:4,color:Q.color||"#000"},s),Z=Q.formatter||d||oj,E=Q.value,z=Q.name,V=E,R=z;if(Z&&V!=null&&R!=null){var L=Z(E,z,Q,Y,m);if(Array.isArray(L)){var G=XD(L,2);V=G[0],R=G[1]}else V=L}return D.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(Y),style:X},En(R)?D.createElement("span",{className:"recharts-tooltip-item-name"},R):null,En(R)?D.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,D.createElement("span",{className:"recharts-tooltip-item-value"},V),D.createElement("span",{className:"recharts-tooltip-item-unit"},Q.unit||""))});return D.createElement("ul",{className:"recharts-tooltip-item-list",style:k},F)}return null},O=wh({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},i),w=wh({margin:0},f),S=!Ne(I),N=S?I:"",P=Ee("recharts-default-tooltip",y),H=Ee("recharts-tooltip-label",B);S&&b&&m!==void 0&&m!==null&&(N=b(I,m));var T=M?{role:"status","aria-live":"assertive"}:{};return D.createElement("div",Jv({className:P,style:O},T),D.createElement("p",{className:H,style:w},D.isValidElement(N)?N:"".concat(N)),A())};function vp(e){"@babel/helpers - typeof";return vp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vp(e)}function vl(e,n,t){return n=uj(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function uj(e){var n=pj(e,"string");return vp(n)=="symbol"?n:n+""}function pj(e,n){if(vp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(vp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var zu="recharts-tooltip-wrapper",sj={visibility:"hidden"};function lj(e){var n=e.coordinate,t=e.translateX,r=e.translateY;return Ee(zu,vl(vl(vl(vl({},"".concat(zu,"-right"),le(t)&&n&&le(n.x)&&t>=n.x),"".concat(zu,"-left"),le(t)&&n&&le(n.x)&&t<n.x),"".concat(zu,"-bottom"),le(r)&&n&&le(n.y)&&r>=n.y),"".concat(zu,"-top"),le(r)&&n&&le(n.y)&&r<n.y))}function Xw(e){var n=e.allowEscapeViewBox,t=e.coordinate,r=e.key,a=e.offsetTopLeft,i=e.position,p=e.reverseDirection,s=e.tooltipDimension,c=e.viewBox,f=e.viewBoxDimension;if(i&&le(i[r]))return i[r];var m=t[r]-s-a,d=t[r]+a;if(n[r])return p[r]?m:d;if(p[r]){var v=m,y=c[r];return v<y?Math.max(d,c[r]):Math.max(m,c[r])}var B=d+s,I=c[r]+f;return B>I?Math.max(m,c[r]):Math.max(d,c[r])}function cj(e){var n=e.translateX,t=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(n,"px, ").concat(t,"px, 0)"):"translate(".concat(n,"px, ").concat(t,"px)")}}function fj(e){var n=e.allowEscapeViewBox,t=e.coordinate,r=e.offsetTopLeft,a=e.position,i=e.reverseDirection,p=e.tooltipBox,s=e.useTranslate3d,c=e.viewBox,f,m,d;return p.height>0&&p.width>0&&t?(m=Xw({allowEscapeViewBox:n,coordinate:t,key:"x",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:p.width,viewBox:c,viewBoxDimension:c.width}),d=Xw({allowEscapeViewBox:n,coordinate:t,key:"y",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:p.height,viewBox:c,viewBoxDimension:c.height}),f=cj({translateX:m,translateY:d,useTranslate3d:s})):f=sj,{cssProperties:f,cssClasses:lj({translateX:m,translateY:d,coordinate:t})}}function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yi(e)}function Zw(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Jw(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Zw(Object(t),!0).forEach(function(r){ng(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Zw(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function dj(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function mj(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,MS(r.key),r)}}function hj(e,n,t){return n&&mj(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function vj(e,n,t){return n=ql(n),gj(e,SS()?Reflect.construct(n,t||[],ql(e).constructor):n.apply(e,t))}function gj(e,n){if(n&&(yi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yj(e)}function yj(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function SS(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SS=function(){return!!e})()}function ql(e){return ql=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ql(e)}function bj(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&eg(e,n)}function eg(e,n){return eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},eg(e,n)}function ng(e,n,t){return n=MS(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function MS(e){var n=Ij(e,"string");return yi(n)=="symbol"?n:n+""}function Ij(e,n){if(yi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var eP=1,Bj=(function(e){function n(){var t;dj(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=vj(this,n,[].concat(a)),ng(t,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),ng(t,"handleKeyDown",function(p){if(p.key==="Escape"){var s,c,f,m;t.setState({dismissed:!0,dismissedAtCoordinate:{x:(s=(c=t.props.coordinate)===null||c===void 0?void 0:c.x)!==null&&s!==void 0?s:0,y:(f=(m=t.props.coordinate)===null||m===void 0?void 0:m.y)!==null&&f!==void 0?f:0}})}}),t}return bj(n,e),hj(n,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>eP||Math.abs(r.height-this.state.lastBoundingBox.height)>eP)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,a=this.props,i=a.active,p=a.allowEscapeViewBox,s=a.animationDuration,c=a.animationEasing,f=a.children,m=a.coordinate,d=a.hasPayload,v=a.isAnimationActive,y=a.offset,B=a.position,I=a.reverseDirection,b=a.useTranslate3d,W=a.viewBox,M=a.wrapperStyle,A=fj({allowEscapeViewBox:p,coordinate:m,offsetTopLeft:y,position:B,reverseDirection:I,tooltipBox:this.state.lastBoundingBox,useTranslate3d:b,viewBox:W}),O=A.cssClasses,w=A.cssProperties,S=Jw(Jw({transition:v&&i?"transform ".concat(s,"ms ").concat(c):void 0},w),{},{pointerEvents:"none",visibility:!this.state.dismissed&&i&&d?"visible":"hidden",position:"absolute",top:0,left:0},M);return D.createElement("div",{tabIndex:-1,className:O,style:S,ref:function(P){r.wrapperNode=P}},f)}}])})(K.PureComponent),xj=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Zr={isSsr:xj()};function bi(e){"@babel/helpers - typeof";return bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bi(e)}function nP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function tP(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?nP(Object(t),!0).forEach(function(r){Dy(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):nP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function wj(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Pj(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_S(r.key),r)}}function Wj(e,n,t){return n&&Pj(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Sj(e,n,t){return n=zl(n),Mj(e,AS()?Reflect.construct(n,t||[],zl(e).constructor):n.apply(e,t))}function Mj(e,n){if(n&&(bi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Aj(e)}function Aj(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AS(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(AS=function(){return!!e})()}function zl(e){return zl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},zl(e)}function _j(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&tg(e,n)}function tg(e,n){return tg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},tg(e,n)}function Dy(e,n,t){return n=_S(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _S(e){var n=Oj(e,"string");return bi(n)=="symbol"?n:n+""}function Oj(e,n){if(bi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(bi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Hj(e){return e.dataKey}function Cj(e,n){return D.isValidElement(e)?D.cloneElement(e,n):typeof e=="function"?D.createElement(e,n):D.createElement(ij,n)}var St=(function(e){function n(){return wj(this,n),Sj(this,n,arguments)}return _j(n,e),Wj(n,[{key:"render",value:function(){var r=this,a=this.props,i=a.active,p=a.allowEscapeViewBox,s=a.animationDuration,c=a.animationEasing,f=a.content,m=a.coordinate,d=a.filterNull,v=a.isAnimationActive,y=a.offset,B=a.payload,I=a.payloadUniqBy,b=a.position,W=a.reverseDirection,M=a.useTranslate3d,A=a.viewBox,O=a.wrapperStyle,w=B??[];d&&w.length&&(w=bS(B.filter(function(N){return N.value!=null&&(N.hide!==!0||r.props.includeHidden)}),I,Hj));var S=w.length>0;return D.createElement(Bj,{allowEscapeViewBox:p,animationDuration:s,animationEasing:c,isAnimationActive:v,active:i,coordinate:m,hasPayload:S,offset:y,position:b,reverseDirection:W,useTranslate3d:M,viewBox:A,wrapperStyle:O},Cj(f,tP(tP({},this.props),{},{payload:w})))}}])})(K.PureComponent);Dy(St,"displayName","Tooltip");Dy(St,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Zr.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var Ph,rP;function Nj(){if(rP)return Ph;rP=1;var e=Sr(),n=function(){return e.Date.now()};return Ph=n,Ph}var Wh,aP;function Rj(){if(aP)return Wh;aP=1;var e=/\s/;function n(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}return Wh=n,Wh}var Sh,oP;function kj(){if(oP)return Sh;oP=1;var e=Rj(),n=/^\s+/;function t(r){return r&&r.slice(0,e(r)+1).replace(n,"")}return Sh=t,Sh}var Mh,iP;function OS(){if(iP)return Mh;iP=1;var e=kj(),n=Da(),t=Ki(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,p=/^0o[0-7]+$/i,s=parseInt;function c(f){if(typeof f=="number")return f;if(t(f))return r;if(n(f)){var m=typeof f.valueOf=="function"?f.valueOf():f;f=n(m)?m+"":m}if(typeof f!="string")return f===0?f:+f;f=e(f);var d=i.test(f);return d||p.test(f)?s(f.slice(2),d?2:8):a.test(f)?r:+f}return Mh=c,Mh}var Ah,uP;function Tj(){if(uP)return Ah;uP=1;var e=Da(),n=Nj(),t=OS(),r="Expected a function",a=Math.max,i=Math.min;function p(s,c,f){var m,d,v,y,B,I,b=0,W=!1,M=!1,A=!0;if(typeof s!="function")throw new TypeError(r);c=t(c)||0,e(f)&&(W=!!f.leading,M="maxWait"in f,v=M?a(t(f.maxWait)||0,c):v,A="trailing"in f?!!f.trailing:A);function O(F){var Q=m,Y=d;return m=d=void 0,b=F,y=s.apply(Y,Q),y}function w(F){return b=F,B=setTimeout(P,c),W?O(F):y}function S(F){var Q=F-I,Y=F-b,X=c-Q;return M?i(X,v-Y):X}function N(F){var Q=F-I,Y=F-b;return I===void 0||Q>=c||Q<0||M&&Y>=v}function P(){var F=n();if(N(F))return H(F);B=setTimeout(P,S(F))}function H(F){return B=void 0,A&&m?O(F):(m=d=void 0,y)}function T(){B!==void 0&&clearTimeout(B),b=0,m=I=d=B=void 0}function j(){return B===void 0?y:H(n())}function k(){var F=n(),Q=N(F);if(m=arguments,d=this,I=F,Q){if(B===void 0)return w(I);if(M)return clearTimeout(B),B=setTimeout(P,c),O(I)}return B===void 0&&(B=setTimeout(P,c)),y}return k.cancel=T,k.flush=j,k}return Ah=p,Ah}var _h,pP;function Ej(){if(pP)return _h;pP=1;var e=Tj(),n=Da(),t="Expected a function";function r(a,i,p){var s=!0,c=!0;if(typeof a!="function")throw new TypeError(t);return n(p)&&(s="leading"in p?!!p.leading:s,c="trailing"in p?!!p.trailing:c),e(a,i,{leading:s,maxWait:i,trailing:c})}return _h=r,_h}var Dj=Ej();const HS=Xe(Dj);function gp(e){"@babel/helpers - typeof";return gp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gp(e)}function sP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function gl(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?sP(Object(t),!0).forEach(function(r){jj(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):sP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function jj(e,n,t){return n=$j(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function $j(e){var n=Lj(e,"string");return gp(n)=="symbol"?n:n+""}function Lj(e,n){if(gp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(gp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Fj(e,n){return Vj(e)||Uj(e,n)||zj(e,n)||qj()}function qj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zj(e,n){if(e){if(typeof e=="string")return lP(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return lP(e,n)}}function lP(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Uj(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function Vj(e){if(Array.isArray(e))return e}var jy=K.forwardRef(function(e,n){var t=e.aspect,r=e.initialDimension,a=r===void 0?{width:-1,height:-1}:r,i=e.width,p=i===void 0?"100%":i,s=e.height,c=s===void 0?"100%":s,f=e.minWidth,m=f===void 0?0:f,d=e.minHeight,v=e.maxHeight,y=e.children,B=e.debounce,I=B===void 0?0:B,b=e.id,W=e.className,M=e.onResize,A=e.style,O=A===void 0?{}:A,w=K.useRef(null),S=K.useRef();S.current=M,K.useImperativeHandle(n,function(){return Object.defineProperty(w.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),w.current},configurable:!0})});var N=K.useState({containerWidth:a.width,containerHeight:a.height}),P=Fj(N,2),H=P[0],T=P[1],j=K.useCallback(function(F,Q){T(function(Y){var X=Math.round(F),Z=Math.round(Q);return Y.containerWidth===X&&Y.containerHeight===Z?Y:{containerWidth:X,containerHeight:Z}})},[]);K.useEffect(function(){var F=function(z){var V,R=z[0].contentRect,L=R.width,G=R.height;j(L,G),(V=S.current)===null||V===void 0||V.call(S,L,G)};I>0&&(F=HS(F,I,{trailing:!0,leading:!1}));var Q=new ResizeObserver(F),Y=w.current.getBoundingClientRect(),X=Y.width,Z=Y.height;return j(X,Z),Q.observe(w.current),function(){Q.disconnect()}},[j,I]);var k=K.useMemo(function(){var F=H.containerWidth,Q=H.containerHeight;if(F<0||Q<0)return null;sr(lo(p)||lo(c),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,p,c),sr(!t||t>0,"The aspect(%s) must be greater than zero.",t);var Y=lo(p)?F:p,X=lo(c)?Q:c;t&&t>0&&(Y?X=Y/t:X&&(Y=X*t),v&&X>v&&(X=v)),sr(Y>0||X>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,Y,X,p,c,m,d,t);var Z=!Array.isArray(y)&&Ur(y.type).endsWith("Chart");return D.Children.map(y,function(E){return D.isValidElement(E)?K.cloneElement(E,gl({width:Y,height:X},Z?{style:gl({height:"100%",width:"100%",maxHeight:X,maxWidth:Y},E.props.style)}:{})):E})},[t,y,c,v,d,m,H,p]);return D.createElement("div",{id:b?"".concat(b):void 0,className:Ee("recharts-responsive-container",W),style:gl(gl({},O),{},{width:p,height:c,minWidth:m,minHeight:d,maxHeight:v}),ref:w},k)}),Xp=function(n){return null};Xp.displayName="Cell";function yp(e){"@babel/helpers - typeof";return yp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yp(e)}function cP(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function rg(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?cP(Object(t),!0).forEach(function(r){Gj(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):cP(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Gj(e,n,t){return n=Kj(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Kj(e){var n=Qj(e,"string");return yp(n)=="symbol"?n:n+""}function Qj(e,n){if(yp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(yp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var ei={widthCache:{},cacheCount:0},Yj=2e3,Xj={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},fP="recharts_measurement_span";function Zj(e){var n=rg({},e);return Object.keys(n).forEach(function(t){n[t]||delete n[t]}),n}var rp=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(n==null||Zr.isSsr)return{width:0,height:0};var r=Zj(t),a=JSON.stringify({text:n,copyStyle:r});if(ei.widthCache[a])return ei.widthCache[a];try{var i=document.getElementById(fP);i||(i=document.createElement("span"),i.setAttribute("id",fP),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));var p=rg(rg({},Xj),r);Object.assign(i.style,p),i.textContent="".concat(n);var s=i.getBoundingClientRect(),c={width:s.width,height:s.height};return ei.widthCache[a]=c,++ei.cacheCount>Yj&&(ei.cacheCount=0,ei.widthCache={}),c}catch{return{width:0,height:0}}},Jj=function(n){return{top:n.top+window.scrollY-document.documentElement.clientTop,left:n.left+window.scrollX-document.documentElement.clientLeft}};function bp(e){"@babel/helpers - typeof";return bp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bp(e)}function Ul(e,n){return r$(e)||t$(e,n)||n$(e,n)||e$()}function e$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n$(e,n){if(e){if(typeof e=="string")return dP(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return dP(e,n)}}function dP(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function t$(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function r$(e){if(Array.isArray(e))return e}function a$(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function mP(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i$(r.key),r)}}function o$(e,n,t){return n&&mP(e.prototype,n),t&&mP(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function i$(e){var n=u$(e,"string");return bp(n)=="symbol"?n:n+""}function u$(e,n){if(bp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(bp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var hP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,vP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,p$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,s$=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,CS={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},l$=Object.keys(CS),oi="NaN";function c$(e,n){return e*CS[n]}var yl=(function(){function e(n,t){a$(this,e),this.num=n,this.unit=t,this.num=n,this.unit=t,Number.isNaN(n)&&(this.unit=""),t!==""&&!p$.test(t)&&(this.num=NaN,this.unit=""),l$.includes(t)&&(this.num=c$(n,t),this.unit="px")}return o$(e,[{key:"add",value:function(t){return this.unit!==t.unit?new e(NaN,""):new e(this.num+t.num,this.unit)}},{key:"subtract",value:function(t){return this.unit!==t.unit?new e(NaN,""):new e(this.num-t.num,this.unit)}},{key:"multiply",value:function(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new e(NaN,""):new e(this.num*t.num,this.unit||t.unit)}},{key:"divide",value:function(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new e(NaN,""):new e(this.num/t.num,this.unit||t.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(t){var r,a=(r=s$.exec(t))!==null&&r!==void 0?r:[],i=Ul(a,3),p=i[1],s=i[2];return new e(parseFloat(p),s??"")}}])})();function NS(e){if(e.includes(oi))return oi;for(var n=e;n.includes("*")||n.includes("/");){var t,r=(t=hP.exec(n))!==null&&t!==void 0?t:[],a=Ul(r,4),i=a[1],p=a[2],s=a[3],c=yl.parse(i??""),f=yl.parse(s??""),m=p==="*"?c.multiply(f):c.divide(f);if(m.isNaN())return oi;n=n.replace(hP,m.toString())}for(;n.includes("+")||/.-\d+(?:\.\d+)?/.test(n);){var d,v=(d=vP.exec(n))!==null&&d!==void 0?d:[],y=Ul(v,4),B=y[1],I=y[2],b=y[3],W=yl.parse(B??""),M=yl.parse(b??""),A=I==="+"?W.add(M):W.subtract(M);if(A.isNaN())return oi;n=n.replace(vP,A.toString())}return n}var gP=/\(([^()]*)\)/;function f$(e){for(var n=e;n.includes("(");){var t=gP.exec(n),r=Ul(t,2),a=r[1];n=n.replace(gP,NS(a))}return n}function d$(e){var n=e.replace(/\s+/g,"");return n=f$(n),n=NS(n),n}function m$(e){try{return d$(e)}catch{return oi}}function Oh(e){var n=m$(e.slice(5,-1));return n===oi?"":n}var h$=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],v$=["dx","dy","angle","className","breakAll"];function ag(){return ag=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ag.apply(this,arguments)}function yP(e,n){if(e==null)return{};var t=g$(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function g$(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function bP(e,n){return B$(e)||I$(e,n)||b$(e,n)||y$()}function y$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b$(e,n){if(e){if(typeof e=="string")return IP(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return IP(e,n)}}function IP(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function I$(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function B$(e){if(Array.isArray(e))return e}var RS=/[ \f\n\r\t\v\u2028\u2029]+/,kS=function(n){var t=n.children,r=n.breakAll,a=n.style;try{var i=[];Ne(t)||(r?i=t.toString().split(""):i=t.toString().split(RS));var p=i.map(function(c){return{word:c,width:rp(c,a).width}}),s=r?0:rp(" ",a).width;return{wordsWithComputedWidth:p,spaceWidth:s}}catch{return null}},x$=function(n,t,r,a,i){var p=n.maxLines,s=n.children,c=n.style,f=n.breakAll,m=le(p),d=s,v=function(){var Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return Y.reduce(function(X,Z){var E=Z.word,z=Z.width,V=X[X.length-1];if(V&&(a==null||i||V.width+z+r<Number(a)))V.words.push(E),V.width+=z+r;else{var R={words:[E],width:z};X.push(R)}return X},[])},y=v(t),B=function(Y){return Y.reduce(function(X,Z){return X.width>Z.width?X:Z})};if(!m)return y;for(var I="…",b=function(Y){var X=d.slice(0,Y),Z=kS({breakAll:f,style:c,children:X+I}).wordsWithComputedWidth,E=v(Z),z=E.length>p||B(E).width>Number(a);return[z,E]},W=0,M=d.length-1,A=0,O;W<=M&&A<=d.length-1;){var w=Math.floor((W+M)/2),S=w-1,N=b(S),P=bP(N,2),H=P[0],T=P[1],j=b(w),k=bP(j,1),F=k[0];if(!H&&!F&&(W=w+1),H&&F&&(M=w-1),!H&&F){O=T;break}A++}return O||y},BP=function(n){var t=Ne(n)?[]:n.toString().split(RS);return[{words:t}]},w$=function(n){var t=n.width,r=n.scaleToFit,a=n.children,i=n.style,p=n.breakAll,s=n.maxLines;if((t||r)&&!Zr.isSsr){var c,f,m=kS({breakAll:p,children:a,style:i});if(m){var d=m.wordsWithComputedWidth,v=m.spaceWidth;c=d,f=v}else return BP(a);return x$({breakAll:p,children:a,maxLines:s,style:i},c,f,t,r)}return BP(a)},xP="#808080",yo=function(n){var t=n.x,r=t===void 0?0:t,a=n.y,i=a===void 0?0:a,p=n.lineHeight,s=p===void 0?"1em":p,c=n.capHeight,f=c===void 0?"0.71em":c,m=n.scaleToFit,d=m===void 0?!1:m,v=n.textAnchor,y=v===void 0?"start":v,B=n.verticalAnchor,I=B===void 0?"end":B,b=n.fill,W=b===void 0?xP:b,M=yP(n,h$),A=K.useMemo(function(){return w$({breakAll:M.breakAll,children:M.children,maxLines:M.maxLines,scaleToFit:d,style:M.style,width:M.width})},[M.breakAll,M.children,M.maxLines,d,M.style,M.width]),O=M.dx,w=M.dy,S=M.angle,N=M.className,P=M.breakAll,H=yP(M,v$);if(!En(r)||!En(i))return null;var T=r+(le(O)?O:0),j=i+(le(w)?w:0),k;switch(I){case"start":k=Oh("calc(".concat(f,")"));break;case"middle":k=Oh("calc(".concat((A.length-1)/2," * -").concat(s," + (").concat(f," / 2))"));break;default:k=Oh("calc(".concat(A.length-1," * -").concat(s,")"));break}var F=[];if(d){var Q=A[0].width,Y=M.width;F.push("scale(".concat((le(Y)?Y/Q:1)/Q,")"))}return S&&F.push("rotate(".concat(S,", ").concat(T,", ").concat(j,")")),F.length&&(H.transform=F.join(" ")),D.createElement("text",ag({},Se(H,!0),{x:T,y:j,className:Ee("recharts-text",N),textAnchor:y,fill:W.includes("url")?xP:W}),A.map(function(X,Z){var E=X.words.join(P?"":" ");return D.createElement("tspan",{x:T,dy:Z===0?k:s,key:"".concat(E,"-").concat(Z)},E)}))};function Ha(e,n){return e==null||n==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function P$(e,n){return e==null||n==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function $y(e){let n,t,r;e.length!==2?(n=Ha,t=(s,c)=>Ha(e(s),c),r=(s,c)=>e(s)-c):(n=e===Ha||e===P$?e:W$,t=e,r=e);function a(s,c,f=0,m=s.length){if(f<m){if(n(c,c)!==0)return m;do{const d=f+m>>>1;t(s[d],c)<0?f=d+1:m=d}while(f<m)}return f}function i(s,c,f=0,m=s.length){if(f<m){if(n(c,c)!==0)return m;do{const d=f+m>>>1;t(s[d],c)<=0?f=d+1:m=d}while(f<m)}return f}function p(s,c,f=0,m=s.length){const d=a(s,c,f,m-1);return d>f&&r(s[d-1],c)>-r(s[d],c)?d-1:d}return{left:a,center:p,right:i}}function W$(){return 0}function TS(e){return e===null?NaN:+e}function*S$(e,n){for(let t of e)t!=null&&(t=+t)>=t&&(yield t)}const M$=$y(Ha),Zp=M$.right;$y(TS).center;class wP extends Map{constructor(n,t=O$){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),n!=null)for(const[r,a]of n)this.set(r,a)}get(n){return super.get(PP(this,n))}has(n){return super.has(PP(this,n))}set(n,t){return super.set(A$(this,n),t)}delete(n){return super.delete(_$(this,n))}}function PP({_intern:e,_key:n},t){const r=n(t);return e.has(r)?e.get(r):t}function A$({_intern:e,_key:n},t){const r=n(t);return e.has(r)?e.get(r):(e.set(r,t),t)}function _$({_intern:e,_key:n},t){const r=n(t);return e.has(r)&&(t=e.get(r),e.delete(r)),t}function O$(e){return e!==null&&typeof e=="object"?e.valueOf():e}function H$(e=Ha){if(e===Ha)return ES;if(typeof e!="function")throw new TypeError("compare is not a function");return(n,t)=>{const r=e(n,t);return r||r===0?r:(e(t,t)===0)-(e(n,n)===0)}}function ES(e,n){return(e==null||!(e>=e))-(n==null||!(n>=n))||(e<n?-1:e>n?1:0)}const C$=Math.sqrt(50),N$=Math.sqrt(10),R$=Math.sqrt(2);function Vl(e,n,t){const r=(n-e)/Math.max(0,t),a=Math.floor(Math.log10(r)),i=r/Math.pow(10,a),p=i>=C$?10:i>=N$?5:i>=R$?2:1;let s,c,f;return a<0?(f=Math.pow(10,-a)/p,s=Math.round(e*f),c=Math.round(n*f),s/f<e&&++s,c/f>n&&--c,f=-f):(f=Math.pow(10,a)*p,s=Math.round(e/f),c=Math.round(n/f),s*f<e&&++s,c*f>n&&--c),c<s&&.5<=t&&t<2?Vl(e,n,t*2):[s,c,f]}function og(e,n,t){if(n=+n,e=+e,t=+t,!(t>0))return[];if(e===n)return[e];const r=n<e,[a,i,p]=r?Vl(n,e,t):Vl(e,n,t);if(!(i>=a))return[];const s=i-a+1,c=new Array(s);if(r)if(p<0)for(let f=0;f<s;++f)c[f]=(i-f)/-p;else for(let f=0;f<s;++f)c[f]=(i-f)*p;else if(p<0)for(let f=0;f<s;++f)c[f]=(a+f)/-p;else for(let f=0;f<s;++f)c[f]=(a+f)*p;return c}function ig(e,n,t){return n=+n,e=+e,t=+t,Vl(e,n,t)[2]}function ug(e,n,t){n=+n,e=+e,t=+t;const r=n<e,a=r?ig(n,e,t):ig(e,n,t);return(r?-1:1)*(a<0?1/-a:a)}function WP(e,n){let t;for(const r of e)r!=null&&(t<r||t===void 0&&r>=r)&&(t=r);return t}function SP(e,n){let t;for(const r of e)r!=null&&(t>r||t===void 0&&r>=r)&&(t=r);return t}function DS(e,n,t=0,r=1/0,a){if(n=Math.floor(n),t=Math.floor(Math.max(0,t)),r=Math.floor(Math.min(e.length-1,r)),!(t<=n&&n<=r))return e;for(a=a===void 0?ES:H$(a);r>t;){if(r-t>600){const c=r-t+1,f=n-t+1,m=Math.log(c),d=.5*Math.exp(2*m/3),v=.5*Math.sqrt(m*d*(c-d)/c)*(f-c/2<0?-1:1),y=Math.max(t,Math.floor(n-f*d/c+v)),B=Math.min(r,Math.floor(n+(c-f)*d/c+v));DS(e,n,y,B,a)}const i=e[n];let p=t,s=r;for(Uu(e,t,n),a(e[r],i)>0&&Uu(e,t,r);p<s;){for(Uu(e,p,s),++p,--s;a(e[p],i)<0;)++p;for(;a(e[s],i)>0;)--s}a(e[t],i)===0?Uu(e,t,s):(++s,Uu(e,s,r)),s<=n&&(t=s+1),n<=s&&(r=s-1)}return e}function Uu(e,n,t){const r=e[n];e[n]=e[t],e[t]=r}function k$(e,n,t){if(e=Float64Array.from(S$(e)),!(!(r=e.length)||isNaN(n=+n))){if(n<=0||r<2)return SP(e);if(n>=1)return WP(e);var r,a=(r-1)*n,i=Math.floor(a),p=WP(DS(e,i).subarray(0,i+1)),s=SP(e.subarray(i+1));return p+(s-p)*(a-i)}}function T$(e,n,t=TS){if(!(!(r=e.length)||isNaN(n=+n))){if(n<=0||r<2)return+t(e[0],0,e);if(n>=1)return+t(e[r-1],r-1,e);var r,a=(r-1)*n,i=Math.floor(a),p=+t(e[i],i,e),s=+t(e[i+1],i+1,e);return p+(s-p)*(a-i)}}function E$(e,n,t){e=+e,n=+n,t=(a=arguments.length)<2?(n=e,e=0,1):a<3?1:+t;for(var r=-1,a=Math.max(0,Math.ceil((n-e)/t))|0,i=new Array(a);++r<a;)i[r]=e+r*t;return i}function Yt(e,n){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(n).domain(e);break}return this}function Jr(e,n){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof n=="function"?this.interpolator(n):this.range(n);break}}return this}const pg=Symbol("implicit");function Ly(){var e=new wP,n=[],t=[],r=pg;function a(i){let p=e.get(i);if(p===void 0){if(r!==pg)return r;e.set(i,p=n.push(i)-1)}return t[p%t.length]}return a.domain=function(i){if(!arguments.length)return n.slice();n=[],e=new wP;for(const p of i)e.has(p)||e.set(p,n.push(p)-1);return a},a.range=function(i){return arguments.length?(t=Array.from(i),a):t.slice()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return Ly(n,t).unknown(r)},Yt.apply(a,arguments),a}function Ip(){var e=Ly().unknown(void 0),n=e.domain,t=e.range,r=0,a=1,i,p,s=!1,c=0,f=0,m=.5;delete e.unknown;function d(){var v=n().length,y=a<r,B=y?a:r,I=y?r:a;i=(I-B)/Math.max(1,v-c+f*2),s&&(i=Math.floor(i)),B+=(I-B-i*(v-c))*m,p=i*(1-c),s&&(B=Math.round(B),p=Math.round(p));var b=E$(v).map(function(W){return B+i*W});return t(y?b.reverse():b)}return e.domain=function(v){return arguments.length?(n(v),d()):n()},e.range=function(v){return arguments.length?([r,a]=v,r=+r,a=+a,d()):[r,a]},e.rangeRound=function(v){return[r,a]=v,r=+r,a=+a,s=!0,d()},e.bandwidth=function(){return p},e.step=function(){return i},e.round=function(v){return arguments.length?(s=!!v,d()):s},e.padding=function(v){return arguments.length?(c=Math.min(1,f=+v),d()):c},e.paddingInner=function(v){return arguments.length?(c=Math.min(1,v),d()):c},e.paddingOuter=function(v){return arguments.length?(f=+v,d()):f},e.align=function(v){return arguments.length?(m=Math.max(0,Math.min(1,v)),d()):m},e.copy=function(){return Ip(n(),[r,a]).round(s).paddingInner(c).paddingOuter(f).align(m)},Yt.apply(d(),arguments)}function jS(e){var n=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return jS(n())},e}function ap(){return jS(Ip.apply(null,arguments).paddingInner(1))}function Fy(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function $S(e,n){var t=Object.create(e.prototype);for(var r in n)t[r]=n[r];return t}function Jp(){}var Bp=.7,Gl=1/Bp,ci="\\s*([+-]?\\d+)\\s*",xp="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",D$=/^#([0-9a-f]{3,8})$/,j$=new RegExp(`^rgb\\(${ci},${ci},${ci}\\)$`),$$=new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`),L$=new RegExp(`^rgba\\(${ci},${ci},${ci},${xp}\\)$`),F$=new RegExp(`^rgba\\(${xr},${xr},${xr},${xp}\\)$`),q$=new RegExp(`^hsl\\(${xp},${xr},${xr}\\)$`),z$=new RegExp(`^hsla\\(${xp},${xr},${xr},${xp}\\)$`),MP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Fy(Jp,wp,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:AP,formatHex:AP,formatHex8:U$,formatHsl:V$,formatRgb:_P,toString:_P});function AP(){return this.rgb().formatHex()}function U$(){return this.rgb().formatHex8()}function V$(){return LS(this).formatHsl()}function _P(){return this.rgb().formatRgb()}function wp(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=D$.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?OP(n):t===3?new gt(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?bl(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?bl(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=j$.exec(e))?new gt(n[1],n[2],n[3],1):(n=$$.exec(e))?new gt(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=L$.exec(e))?bl(n[1],n[2],n[3],n[4]):(n=F$.exec(e))?bl(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=q$.exec(e))?NP(n[1],n[2]/100,n[3]/100,1):(n=z$.exec(e))?NP(n[1],n[2]/100,n[3]/100,n[4]):MP.hasOwnProperty(e)?OP(MP[e]):e==="transparent"?new gt(NaN,NaN,NaN,0):null}function OP(e){return new gt(e>>16&255,e>>8&255,e&255,1)}function bl(e,n,t,r){return r<=0&&(e=n=t=NaN),new gt(e,n,t,r)}function G$(e){return e instanceof Jp||(e=wp(e)),e?(e=e.rgb(),new gt(e.r,e.g,e.b,e.opacity)):new gt}function sg(e,n,t,r){return arguments.length===1?G$(e):new gt(e,n,t,r??1)}function gt(e,n,t,r){this.r=+e,this.g=+n,this.b=+t,this.opacity=+r}Fy(gt,sg,$S(Jp,{brighter(e){return e=e==null?Gl:Math.pow(Gl,e),new gt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Bp:Math.pow(Bp,e),new gt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new gt(vo(this.r),vo(this.g),vo(this.b),Kl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:HP,formatHex:HP,formatHex8:K$,formatRgb:CP,toString:CP}));function HP(){return`#${co(this.r)}${co(this.g)}${co(this.b)}`}function K$(){return`#${co(this.r)}${co(this.g)}${co(this.b)}${co((isNaN(this.opacity)?1:this.opacity)*255)}`}function CP(){const e=Kl(this.opacity);return`${e===1?"rgb(":"rgba("}${vo(this.r)}, ${vo(this.g)}, ${vo(this.b)}${e===1?")":`, ${e})`}`}function Kl(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function vo(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function co(e){return e=vo(e),(e<16?"0":"")+e.toString(16)}function NP(e,n,t,r){return r<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new pr(e,n,t,r)}function LS(e){if(e instanceof pr)return new pr(e.h,e.s,e.l,e.opacity);if(e instanceof Jp||(e=wp(e)),!e)return new pr;if(e instanceof pr)return e;e=e.rgb();var n=e.r/255,t=e.g/255,r=e.b/255,a=Math.min(n,t,r),i=Math.max(n,t,r),p=NaN,s=i-a,c=(i+a)/2;return s?(n===i?p=(t-r)/s+(t<r)*6:t===i?p=(r-n)/s+2:p=(n-t)/s+4,s/=c<.5?i+a:2-i-a,p*=60):s=c>0&&c<1?0:p,new pr(p,s,c,e.opacity)}function Q$(e,n,t,r){return arguments.length===1?LS(e):new pr(e,n,t,r??1)}function pr(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}Fy(pr,Q$,$S(Jp,{brighter(e){return e=e==null?Gl:Math.pow(Gl,e),new pr(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Bp:Math.pow(Bp,e),new pr(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*n,a=2*t-r;return new gt(Hh(e>=240?e-240:e+120,a,r),Hh(e,a,r),Hh(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new pr(RP(this.h),Il(this.s),Il(this.l),Kl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Kl(this.opacity);return`${e===1?"hsl(":"hsla("}${RP(this.h)}, ${Il(this.s)*100}%, ${Il(this.l)*100}%${e===1?")":`, ${e})`}`}}));function RP(e){return e=(e||0)%360,e<0?e+360:e}function Il(e){return Math.max(0,Math.min(1,e||0))}function Hh(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const qy=e=>()=>e;function Y$(e,n){return function(t){return e+t*n}}function X$(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(r){return Math.pow(e+r*n,t)}}function Z$(e){return(e=+e)==1?FS:function(n,t){return t-n?X$(n,t,e):qy(isNaN(n)?t:n)}}function FS(e,n){var t=n-e;return t?Y$(e,t):qy(isNaN(e)?n:e)}const kP=(function e(n){var t=Z$(n);function r(a,i){var p=t((a=sg(a)).r,(i=sg(i)).r),s=t(a.g,i.g),c=t(a.b,i.b),f=FS(a.opacity,i.opacity);return function(m){return a.r=p(m),a.g=s(m),a.b=c(m),a.opacity=f(m),a+""}}return r.gamma=e,r})(1);function J$(e,n){n||(n=[]);var t=e?Math.min(n.length,e.length):0,r=n.slice(),a;return function(i){for(a=0;a<t;++a)r[a]=e[a]*(1-i)+n[a]*i;return r}}function e8(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function n8(e,n){var t=n?n.length:0,r=e?Math.min(t,e.length):0,a=new Array(r),i=new Array(t),p;for(p=0;p<r;++p)a[p]=Zi(e[p],n[p]);for(;p<t;++p)i[p]=n[p];return function(s){for(p=0;p<r;++p)i[p]=a[p](s);return i}}function t8(e,n){var t=new Date;return e=+e,n=+n,function(r){return t.setTime(e*(1-r)+n*r),t}}function Ql(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}function r8(e,n){var t={},r={},a;(e===null||typeof e!="object")&&(e={}),(n===null||typeof n!="object")&&(n={});for(a in n)a in e?t[a]=Zi(e[a],n[a]):r[a]=n[a];return function(i){for(a in t)r[a]=t[a](i);return r}}var lg=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ch=new RegExp(lg.source,"g");function a8(e){return function(){return e}}function o8(e){return function(n){return e(n)+""}}function i8(e,n){var t=lg.lastIndex=Ch.lastIndex=0,r,a,i,p=-1,s=[],c=[];for(e=e+"",n=n+"";(r=lg.exec(e))&&(a=Ch.exec(n));)(i=a.index)>t&&(i=n.slice(t,i),s[p]?s[p]+=i:s[++p]=i),(r=r[0])===(a=a[0])?s[p]?s[p]+=a:s[++p]=a:(s[++p]=null,c.push({i:p,x:Ql(r,a)})),t=Ch.lastIndex;return t<n.length&&(i=n.slice(t),s[p]?s[p]+=i:s[++p]=i),s.length<2?c[0]?o8(c[0].x):a8(n):(n=c.length,function(f){for(var m=0,d;m<n;++m)s[(d=c[m]).i]=d.x(f);return s.join("")})}function Zi(e,n){var t=typeof n,r;return n==null||t==="boolean"?qy(n):(t==="number"?Ql:t==="string"?(r=wp(n))?(n=r,kP):i8:n instanceof wp?kP:n instanceof Date?t8:e8(n)?J$:Array.isArray(n)?n8:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?r8:Ql)(e,n)}function zy(e,n){return e=+e,n=+n,function(t){return Math.round(e*(1-t)+n*t)}}function u8(e,n){n===void 0&&(n=e,e=Zi);for(var t=0,r=n.length-1,a=n[0],i=new Array(r<0?0:r);t<r;)i[t]=e(a,a=n[++t]);return function(p){var s=Math.max(0,Math.min(r-1,Math.floor(p*=r)));return i[s](p-s)}}function p8(e){return function(){return e}}function Yl(e){return+e}var TP=[0,1];function ut(e){return e}function cg(e,n){return(n-=e=+e)?function(t){return(t-e)/n}:p8(isNaN(n)?NaN:.5)}function s8(e,n){var t;return e>n&&(t=e,e=n,n=t),function(r){return Math.max(e,Math.min(n,r))}}function l8(e,n,t){var r=e[0],a=e[1],i=n[0],p=n[1];return a<r?(r=cg(a,r),i=t(p,i)):(r=cg(r,a),i=t(i,p)),function(s){return i(r(s))}}function c8(e,n,t){var r=Math.min(e.length,n.length)-1,a=new Array(r),i=new Array(r),p=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),n=n.slice().reverse());++p<r;)a[p]=cg(e[p],e[p+1]),i[p]=t(n[p],n[p+1]);return function(s){var c=Zp(e,s,1,r)-1;return i[c](a[c](s))}}function es(e,n){return n.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function ec(){var e=TP,n=TP,t=Zi,r,a,i,p=ut,s,c,f;function m(){var v=Math.min(e.length,n.length);return p!==ut&&(p=s8(e[0],e[v-1])),s=v>2?c8:l8,c=f=null,d}function d(v){return v==null||isNaN(v=+v)?i:(c||(c=s(e.map(r),n,t)))(r(p(v)))}return d.invert=function(v){return p(a((f||(f=s(n,e.map(r),Ql)))(v)))},d.domain=function(v){return arguments.length?(e=Array.from(v,Yl),m()):e.slice()},d.range=function(v){return arguments.length?(n=Array.from(v),m()):n.slice()},d.rangeRound=function(v){return n=Array.from(v),t=zy,m()},d.clamp=function(v){return arguments.length?(p=v?!0:ut,m()):p!==ut},d.interpolate=function(v){return arguments.length?(t=v,m()):t},d.unknown=function(v){return arguments.length?(i=v,d):i},function(v,y){return r=v,a=y,m()}}function Uy(){return ec()(ut,ut)}function f8(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Xl(e,n){if(!isFinite(e)||e===0)return null;var t=(e=n?e.toExponential(n-1):e.toExponential()).indexOf("e"),r=e.slice(0,t);return[r.length>1?r[0]+r.slice(2):r,+e.slice(t+1)]}function Ii(e){return e=Xl(Math.abs(e)),e?e[1]:NaN}function d8(e,n){return function(t,r){for(var a=t.length,i=[],p=0,s=e[0],c=0;a>0&&s>0&&(c+s+1>r&&(s=Math.max(1,r-c)),i.push(t.substring(a-=s,a+s)),!((c+=s+1)>r));)s=e[p=(p+1)%e.length];return i.reverse().join(n)}}function m8(e){return function(n){return n.replace(/[0-9]/g,function(t){return e[+t]})}}var h8=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Pp(e){if(!(n=h8.exec(e)))throw new Error("invalid format: "+e);var n;return new Vy({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}Pp.prototype=Vy.prototype;function Vy(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Vy.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function v8(e){e:for(var n=e.length,t=1,r=-1,a;t<n;++t)switch(e[t]){case".":r=a=t;break;case"0":r===0&&(r=t),a=t;break;default:if(!+e[t])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Zl;function g8(e,n){var t=Xl(e,n);if(!t)return Zl=void 0,e.toPrecision(n);var r=t[0],a=t[1],i=a-(Zl=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,p=r.length;return i===p?r:i>p?r+new Array(i-p+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Xl(e,Math.max(0,n+i-1))[0]}function EP(e,n){var t=Xl(e,n);if(!t)return e+"";var r=t[0],a=t[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const DP={"%":(e,n)=>(e*100).toFixed(n),b:e=>Math.round(e).toString(2),c:e=>e+"",d:f8,e:(e,n)=>e.toExponential(n),f:(e,n)=>e.toFixed(n),g:(e,n)=>e.toPrecision(n),o:e=>Math.round(e).toString(8),p:(e,n)=>EP(e*100,n),r:EP,s:g8,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function jP(e){return e}var $P=Array.prototype.map,LP=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function y8(e){var n=e.grouping===void 0||e.thousands===void 0?jP:d8($P.call(e.grouping,Number),e.thousands+""),t=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?jP:m8($P.call(e.numerals,String)),p=e.percent===void 0?"%":e.percent+"",s=e.minus===void 0?"−":e.minus+"",c=e.nan===void 0?"NaN":e.nan+"";function f(d,v){d=Pp(d);var y=d.fill,B=d.align,I=d.sign,b=d.symbol,W=d.zero,M=d.width,A=d.comma,O=d.precision,w=d.trim,S=d.type;S==="n"?(A=!0,S="g"):DP[S]||(O===void 0&&(O=12),w=!0,S="g"),(W||y==="0"&&B==="=")&&(W=!0,y="0",B="=");var N=(v&&v.prefix!==void 0?v.prefix:"")+(b==="$"?t:b==="#"&&/[boxX]/.test(S)?"0"+S.toLowerCase():""),P=(b==="$"?r:/[%p]/.test(S)?p:"")+(v&&v.suffix!==void 0?v.suffix:""),H=DP[S],T=/[defgprs%]/.test(S);O=O===void 0?6:/[gprs]/.test(S)?Math.max(1,Math.min(21,O)):Math.max(0,Math.min(20,O));function j(k){var F=N,Q=P,Y,X,Z;if(S==="c")Q=H(k)+Q,k="";else{k=+k;var E=k<0||1/k<0;if(k=isNaN(k)?c:H(Math.abs(k),O),w&&(k=v8(k)),E&&+k==0&&I!=="+"&&(E=!1),F=(E?I==="("?I:s:I==="-"||I==="("?"":I)+F,Q=(S==="s"&&!isNaN(k)&&Zl!==void 0?LP[8+Zl/3]:"")+Q+(E&&I==="("?")":""),T){for(Y=-1,X=k.length;++Y<X;)if(Z=k.charCodeAt(Y),48>Z||Z>57){Q=(Z===46?a+k.slice(Y+1):k.slice(Y))+Q,k=k.slice(0,Y);break}}}A&&!W&&(k=n(k,1/0));var z=F.length+k.length+Q.length,V=z<M?new Array(M-z+1).join(y):"";switch(A&&W&&(k=n(V+k,V.length?M-Q.length:1/0),V=""),B){case"<":k=F+k+Q+V;break;case"=":k=F+V+k+Q;break;case"^":k=V.slice(0,z=V.length>>1)+F+k+Q+V.slice(z);break;default:k=V+F+k+Q;break}return i(k)}return j.toString=function(){return d+""},j}function m(d,v){var y=Math.max(-8,Math.min(8,Math.floor(Ii(v)/3)))*3,B=Math.pow(10,-y),I=f((d=Pp(d),d.type="f",d),{suffix:LP[8+y/3]});return function(b){return I(B*b)}}return{format:f,formatPrefix:m}}var Bl,Gy,qS;b8({thousands:",",grouping:[3],currency:["$",""]});function b8(e){return Bl=y8(e),Gy=Bl.format,qS=Bl.formatPrefix,Bl}function I8(e){return Math.max(0,-Ii(Math.abs(e)))}function B8(e,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Ii(n)/3)))*3-Ii(Math.abs(e)))}function x8(e,n){return e=Math.abs(e),n=Math.abs(n)-e,Math.max(0,Ii(n)-Ii(e))+1}function zS(e,n,t,r){var a=ug(e,n,t),i;switch(r=Pp(r??",f"),r.type){case"s":{var p=Math.max(Math.abs(e),Math.abs(n));return r.precision==null&&!isNaN(i=B8(a,p))&&(r.precision=i),qS(r,p)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=x8(a,Math.max(Math.abs(e),Math.abs(n))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=I8(a))&&(r.precision=i-(r.type==="%")*2);break}}return Gy(r)}function $a(e){var n=e.domain;return e.ticks=function(t){var r=n();return og(r[0],r[r.length-1],t??10)},e.tickFormat=function(t,r){var a=n();return zS(a[0],a[a.length-1],t??10,r)},e.nice=function(t){t==null&&(t=10);var r=n(),a=0,i=r.length-1,p=r[a],s=r[i],c,f,m=10;for(s<p&&(f=p,p=s,s=f,f=a,a=i,i=f);m-- >0;){if(f=ig(p,s,t),f===c)return r[a]=p,r[i]=s,n(r);if(f>0)p=Math.floor(p/f)*f,s=Math.ceil(s/f)*f;else if(f<0)p=Math.ceil(p*f)/f,s=Math.floor(s*f)/f;else break;c=f}return e},e}function Jl(){var e=Uy();return e.copy=function(){return es(e,Jl())},Yt.apply(e,arguments),$a(e)}function US(e){var n;function t(r){return r==null||isNaN(r=+r)?n:r}return t.invert=t,t.domain=t.range=function(r){return arguments.length?(e=Array.from(r,Yl),t):e.slice()},t.unknown=function(r){return arguments.length?(n=r,t):n},t.copy=function(){return US(e).unknown(n)},e=arguments.length?Array.from(e,Yl):[0,1],$a(t)}function VS(e,n){e=e.slice();var t=0,r=e.length-1,a=e[t],i=e[r],p;return i<a&&(p=t,t=r,r=p,p=a,a=i,i=p),e[t]=n.floor(a),e[r]=n.ceil(i),e}function FP(e){return Math.log(e)}function qP(e){return Math.exp(e)}function w8(e){return-Math.log(-e)}function P8(e){return-Math.exp(-e)}function W8(e){return isFinite(e)?+("1e"+e):e<0?0:e}function S8(e){return e===10?W8:e===Math.E?Math.exp:n=>Math.pow(e,n)}function M8(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),n=>Math.log(n)/e)}function zP(e){return(n,t)=>-e(-n,t)}function Ky(e){const n=e(FP,qP),t=n.domain;let r=10,a,i;function p(){return a=M8(r),i=S8(r),t()[0]<0?(a=zP(a),i=zP(i),e(w8,P8)):e(FP,qP),n}return n.base=function(s){return arguments.length?(r=+s,p()):r},n.domain=function(s){return arguments.length?(t(s),p()):t()},n.ticks=s=>{const c=t();let f=c[0],m=c[c.length-1];const d=m<f;d&&([f,m]=[m,f]);let v=a(f),y=a(m),B,I;const b=s==null?10:+s;let W=[];if(!(r%1)&&y-v<b){if(v=Math.floor(v),y=Math.ceil(y),f>0){for(;v<=y;++v)for(B=1;B<r;++B)if(I=v<0?B/i(-v):B*i(v),!(I<f)){if(I>m)break;W.push(I)}}else for(;v<=y;++v)for(B=r-1;B>=1;--B)if(I=v>0?B/i(-v):B*i(v),!(I<f)){if(I>m)break;W.push(I)}W.length*2<b&&(W=og(f,m,b))}else W=og(v,y,Math.min(y-v,b)).map(i);return d?W.reverse():W},n.tickFormat=(s,c)=>{if(s==null&&(s=10),c==null&&(c=r===10?"s":","),typeof c!="function"&&(!(r%1)&&(c=Pp(c)).precision==null&&(c.trim=!0),c=Gy(c)),s===1/0)return c;const f=Math.max(1,r*s/n.ticks().length);return m=>{let d=m/i(Math.round(a(m)));return d*r<r-.5&&(d*=r),d<=f?c(m):""}},n.nice=()=>t(VS(t(),{floor:s=>i(Math.floor(a(s))),ceil:s=>i(Math.ceil(a(s)))})),n}function GS(){const e=Ky(ec()).domain([1,10]);return e.copy=()=>es(e,GS()).base(e.base()),Yt.apply(e,arguments),e}function UP(e){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/e))}}function VP(e){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*e}}function Qy(e){var n=1,t=e(UP(n),VP(n));return t.constant=function(r){return arguments.length?e(UP(n=+r),VP(n)):n},$a(t)}function KS(){var e=Qy(ec());return e.copy=function(){return es(e,KS()).constant(e.constant())},Yt.apply(e,arguments)}function GP(e){return function(n){return n<0?-Math.pow(-n,e):Math.pow(n,e)}}function A8(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function _8(e){return e<0?-e*e:e*e}function Yy(e){var n=e(ut,ut),t=1;function r(){return t===1?e(ut,ut):t===.5?e(A8,_8):e(GP(t),GP(1/t))}return n.exponent=function(a){return arguments.length?(t=+a,r()):t},$a(n)}function Xy(){var e=Yy(ec());return e.copy=function(){return es(e,Xy()).exponent(e.exponent())},Yt.apply(e,arguments),e}function O8(){return Xy.apply(null,arguments).exponent(.5)}function KP(e){return Math.sign(e)*e*e}function H8(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function QS(){var e=Uy(),n=[0,1],t=!1,r;function a(i){var p=H8(e(i));return isNaN(p)?r:t?Math.round(p):p}return a.invert=function(i){return e.invert(KP(i))},a.domain=function(i){return arguments.length?(e.domain(i),a):e.domain()},a.range=function(i){return arguments.length?(e.range((n=Array.from(i,Yl)).map(KP)),a):n.slice()},a.rangeRound=function(i){return a.range(i).round(!0)},a.round=function(i){return arguments.length?(t=!!i,a):t},a.clamp=function(i){return arguments.length?(e.clamp(i),a):e.clamp()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return QS(e.domain(),n).round(t).clamp(e.clamp()).unknown(r)},Yt.apply(a,arguments),$a(a)}function YS(){var e=[],n=[],t=[],r;function a(){var p=0,s=Math.max(1,n.length);for(t=new Array(s-1);++p<s;)t[p-1]=T$(e,p/s);return i}function i(p){return p==null||isNaN(p=+p)?r:n[Zp(t,p)]}return i.invertExtent=function(p){var s=n.indexOf(p);return s<0?[NaN,NaN]:[s>0?t[s-1]:e[0],s<t.length?t[s]:e[e.length-1]]},i.domain=function(p){if(!arguments.length)return e.slice();e=[];for(let s of p)s!=null&&!isNaN(s=+s)&&e.push(s);return e.sort(Ha),a()},i.range=function(p){return arguments.length?(n=Array.from(p),a()):n.slice()},i.unknown=function(p){return arguments.length?(r=p,i):r},i.quantiles=function(){return t.slice()},i.copy=function(){return YS().domain(e).range(n).unknown(r)},Yt.apply(i,arguments)}function XS(){var e=0,n=1,t=1,r=[.5],a=[0,1],i;function p(c){return c!=null&&c<=c?a[Zp(r,c,0,t)]:i}function s(){var c=-1;for(r=new Array(t);++c<t;)r[c]=((c+1)*n-(c-t)*e)/(t+1);return p}return p.domain=function(c){return arguments.length?([e,n]=c,e=+e,n=+n,s()):[e,n]},p.range=function(c){return arguments.length?(t=(a=Array.from(c)).length-1,s()):a.slice()},p.invertExtent=function(c){var f=a.indexOf(c);return f<0?[NaN,NaN]:f<1?[e,r[0]]:f>=t?[r[t-1],n]:[r[f-1],r[f]]},p.unknown=function(c){return arguments.length&&(i=c),p},p.thresholds=function(){return r.slice()},p.copy=function(){return XS().domain([e,n]).range(a).unknown(i)},Yt.apply($a(p),arguments)}function ZS(){var e=[.5],n=[0,1],t,r=1;function a(i){return i!=null&&i<=i?n[Zp(e,i,0,r)]:t}return a.domain=function(i){return arguments.length?(e=Array.from(i),r=Math.min(e.length,n.length-1),a):e.slice()},a.range=function(i){return arguments.length?(n=Array.from(i),r=Math.min(e.length,n.length-1),a):n.slice()},a.invertExtent=function(i){var p=n.indexOf(i);return[e[p-1],e[p]]},a.unknown=function(i){return arguments.length?(t=i,a):t},a.copy=function(){return ZS().domain(e).range(n).unknown(t)},Yt.apply(a,arguments)}const Nh=new Date,Rh=new Date;function Dn(e,n,t,r){function a(i){return e(i=arguments.length===0?new Date:new Date(+i)),i}return a.floor=i=>(e(i=new Date(+i)),i),a.ceil=i=>(e(i=new Date(i-1)),n(i,1),e(i),i),a.round=i=>{const p=a(i),s=a.ceil(i);return i-p<s-i?p:s},a.offset=(i,p)=>(n(i=new Date(+i),p==null?1:Math.floor(p)),i),a.range=(i,p,s)=>{const c=[];if(i=a.ceil(i),s=s==null?1:Math.floor(s),!(i<p)||!(s>0))return c;let f;do c.push(f=new Date(+i)),n(i,s),e(i);while(f<i&&i<p);return c},a.filter=i=>Dn(p=>{if(p>=p)for(;e(p),!i(p);)p.setTime(p-1)},(p,s)=>{if(p>=p)if(s<0)for(;++s<=0;)for(;n(p,-1),!i(p););else for(;--s>=0;)for(;n(p,1),!i(p););}),t&&(a.count=(i,p)=>(Nh.setTime(+i),Rh.setTime(+p),e(Nh),e(Rh),Math.floor(t(Nh,Rh))),a.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?a.filter(r?p=>r(p)%i===0:p=>a.count(0,p)%i===0):a)),a}const e0=Dn(()=>{},(e,n)=>{e.setTime(+e+n)},(e,n)=>n-e);e0.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?Dn(n=>{n.setTime(Math.floor(n/e)*e)},(n,t)=>{n.setTime(+n+t*e)},(n,t)=>(t-n)/e):e0);e0.range;const $r=1e3,Vt=$r*60,Lr=Vt*60,Gr=Lr*24,Zy=Gr*7,QP=Gr*30,kh=Gr*365,fo=Dn(e=>{e.setTime(e-e.getMilliseconds())},(e,n)=>{e.setTime(+e+n*$r)},(e,n)=>(n-e)/$r,e=>e.getUTCSeconds());fo.range;const Jy=Dn(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r)},(e,n)=>{e.setTime(+e+n*Vt)},(e,n)=>(n-e)/Vt,e=>e.getMinutes());Jy.range;const e6=Dn(e=>{e.setUTCSeconds(0,0)},(e,n)=>{e.setTime(+e+n*Vt)},(e,n)=>(n-e)/Vt,e=>e.getUTCMinutes());e6.range;const n6=Dn(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r-e.getMinutes()*Vt)},(e,n)=>{e.setTime(+e+n*Lr)},(e,n)=>(n-e)/Lr,e=>e.getHours());n6.range;const t6=Dn(e=>{e.setUTCMinutes(0,0,0)},(e,n)=>{e.setTime(+e+n*Lr)},(e,n)=>(n-e)/Lr,e=>e.getUTCHours());t6.range;const ns=Dn(e=>e.setHours(0,0,0,0),(e,n)=>e.setDate(e.getDate()+n),(e,n)=>(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*Vt)/Gr,e=>e.getDate()-1);ns.range;const nc=Dn(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/Gr,e=>e.getUTCDate()-1);nc.range;const JS=Dn(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/Gr,e=>Math.floor(e/Gr));JS.range;function wo(e){return Dn(n=>{n.setDate(n.getDate()-(n.getDay()+7-e)%7),n.setHours(0,0,0,0)},(n,t)=>{n.setDate(n.getDate()+t*7)},(n,t)=>(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*Vt)/Zy)}const tc=wo(0),n0=wo(1),C8=wo(2),N8=wo(3),Bi=wo(4),R8=wo(5),k8=wo(6);tc.range;n0.range;C8.range;N8.range;Bi.range;R8.range;k8.range;function Po(e){return Dn(n=>{n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-e)%7),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCDate(n.getUTCDate()+t*7)},(n,t)=>(t-n)/Zy)}const rc=Po(0),t0=Po(1),T8=Po(2),E8=Po(3),xi=Po(4),D8=Po(5),j8=Po(6);rc.range;t0.range;T8.range;E8.range;xi.range;D8.range;j8.range;const r6=Dn(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,n)=>{e.setMonth(e.getMonth()+n)},(e,n)=>n.getMonth()-e.getMonth()+(n.getFullYear()-e.getFullYear())*12,e=>e.getMonth());r6.range;const a6=Dn(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCMonth(e.getUTCMonth()+n)},(e,n)=>n.getUTCMonth()-e.getUTCMonth()+(n.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());a6.range;const Kr=Dn(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,n)=>{e.setFullYear(e.getFullYear()+n)},(e,n)=>n.getFullYear()-e.getFullYear(),e=>e.getFullYear());Kr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Dn(n=>{n.setFullYear(Math.floor(n.getFullYear()/e)*e),n.setMonth(0,1),n.setHours(0,0,0,0)},(n,t)=>{n.setFullYear(n.getFullYear()+t*e)});Kr.range;const Qr=Dn(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCFullYear(e.getUTCFullYear()+n)},(e,n)=>n.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Qr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Dn(n=>{n.setUTCFullYear(Math.floor(n.getUTCFullYear()/e)*e),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCFullYear(n.getUTCFullYear()+t*e)});Qr.range;function eM(e,n,t,r,a,i){const p=[[fo,1,$r],[fo,5,5*$r],[fo,15,15*$r],[fo,30,30*$r],[i,1,Vt],[i,5,5*Vt],[i,15,15*Vt],[i,30,30*Vt],[a,1,Lr],[a,3,3*Lr],[a,6,6*Lr],[a,12,12*Lr],[r,1,Gr],[r,2,2*Gr],[t,1,Zy],[n,1,QP],[n,3,3*QP],[e,1,kh]];function s(f,m,d){const v=m<f;v&&([f,m]=[m,f]);const y=d&&typeof d.range=="function"?d:c(f,m,d),B=y?y.range(f,+m+1):[];return v?B.reverse():B}function c(f,m,d){const v=Math.abs(m-f)/d,y=$y(([,,b])=>b).right(p,v);if(y===p.length)return e.every(ug(f/kh,m/kh,d));if(y===0)return e0.every(Math.max(ug(f,m,d),1));const[B,I]=p[v/p[y-1][2]<p[y][2]/v?y-1:y];return B.every(I)}return[s,c]}const[$8,L8]=eM(Qr,a6,rc,JS,t6,e6),[F8,q8]=eM(Kr,r6,tc,ns,n6,Jy);function Th(e){if(0<=e.y&&e.y<100){var n=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return n.setFullYear(e.y),n}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Eh(e){if(0<=e.y&&e.y<100){var n=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return n.setUTCFullYear(e.y),n}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Vu(e,n,t){return{y:e,m:n,d:t,H:0,M:0,S:0,L:0}}function z8(e){var n=e.dateTime,t=e.date,r=e.time,a=e.periods,i=e.days,p=e.shortDays,s=e.months,c=e.shortMonths,f=Gu(a),m=Ku(a),d=Gu(i),v=Ku(i),y=Gu(p),B=Ku(p),I=Gu(s),b=Ku(s),W=Gu(c),M=Ku(c),A={a:Z,A:E,b:z,B:V,c:null,d:n4,e:n4,f:dL,g:wL,G:WL,H:lL,I:cL,j:fL,L:nM,m:mL,M:hL,p:R,q:L,Q:a4,s:o4,S:vL,u:gL,U:yL,V:bL,w:IL,W:BL,x:null,X:null,y:xL,Y:PL,Z:SL,"%":r4},O={a:G,A:ie,b:oe,B:he,c:null,d:t4,e:t4,f:OL,g:$L,G:FL,H:ML,I:AL,j:_L,L:rM,m:HL,M:CL,p:ge,q:de,Q:a4,s:o4,S:NL,u:RL,U:kL,V:TL,w:EL,W:DL,x:null,X:null,y:jL,Y:LL,Z:qL,"%":r4},w={a:T,A:j,b:k,B:F,c:Q,d:JP,e:JP,f:iL,g:ZP,G:XP,H:e4,I:e4,j:tL,L:oL,m:nL,M:rL,p:H,q:eL,Q:pL,s:sL,S:aL,u:Q8,U:Y8,V:X8,w:K8,W:Z8,x:Y,X,y:ZP,Y:XP,Z:J8,"%":uL};A.x=S(t,A),A.X=S(r,A),A.c=S(n,A),O.x=S(t,O),O.X=S(r,O),O.c=S(n,O);function S(te,me){return function(fe){var re=[],Te=-1,Pe=0,He=te.length,Me,Fe,De;for(fe instanceof Date||(fe=new Date(+fe));++Te<He;)te.charCodeAt(Te)===37&&(re.push(te.slice(Pe,Te)),(Fe=YP[Me=te.charAt(++Te)])!=null?Me=te.charAt(++Te):Fe=Me==="e"?" ":"0",(De=me[Me])&&(Me=De(fe,Fe)),re.push(Me),Pe=Te+1);return re.push(te.slice(Pe,Te)),re.join("")}}function N(te,me){return function(fe){var re=Vu(1900,void 0,1),Te=P(re,te,fe+="",0),Pe,He;if(Te!=fe.length)return null;if("Q"in re)return new Date(re.Q);if("s"in re)return new Date(re.s*1e3+("L"in re?re.L:0));if(me&&!("Z"in re)&&(re.Z=0),"p"in re&&(re.H=re.H%12+re.p*12),re.m===void 0&&(re.m="q"in re?re.q:0),"V"in re){if(re.V<1||re.V>53)return null;"w"in re||(re.w=1),"Z"in re?(Pe=Eh(Vu(re.y,0,1)),He=Pe.getUTCDay(),Pe=He>4||He===0?t0.ceil(Pe):t0(Pe),Pe=nc.offset(Pe,(re.V-1)*7),re.y=Pe.getUTCFullYear(),re.m=Pe.getUTCMonth(),re.d=Pe.getUTCDate()+(re.w+6)%7):(Pe=Th(Vu(re.y,0,1)),He=Pe.getDay(),Pe=He>4||He===0?n0.ceil(Pe):n0(Pe),Pe=ns.offset(Pe,(re.V-1)*7),re.y=Pe.getFullYear(),re.m=Pe.getMonth(),re.d=Pe.getDate()+(re.w+6)%7)}else("W"in re||"U"in re)&&("w"in re||(re.w="u"in re?re.u%7:"W"in re?1:0),He="Z"in re?Eh(Vu(re.y,0,1)).getUTCDay():Th(Vu(re.y,0,1)).getDay(),re.m=0,re.d="W"in re?(re.w+6)%7+re.W*7-(He+5)%7:re.w+re.U*7-(He+6)%7);return"Z"in re?(re.H+=re.Z/100|0,re.M+=re.Z%100,Eh(re)):Th(re)}}function P(te,me,fe,re){for(var Te=0,Pe=me.length,He=fe.length,Me,Fe;Te<Pe;){if(re>=He)return-1;if(Me=me.charCodeAt(Te++),Me===37){if(Me=me.charAt(Te++),Fe=w[Me in YP?me.charAt(Te++):Me],!Fe||(re=Fe(te,fe,re))<0)return-1}else if(Me!=fe.charCodeAt(re++))return-1}return re}function H(te,me,fe){var re=f.exec(me.slice(fe));return re?(te.p=m.get(re[0].toLowerCase()),fe+re[0].length):-1}function T(te,me,fe){var re=y.exec(me.slice(fe));return re?(te.w=B.get(re[0].toLowerCase()),fe+re[0].length):-1}function j(te,me,fe){var re=d.exec(me.slice(fe));return re?(te.w=v.get(re[0].toLowerCase()),fe+re[0].length):-1}function k(te,me,fe){var re=W.exec(me.slice(fe));return re?(te.m=M.get(re[0].toLowerCase()),fe+re[0].length):-1}function F(te,me,fe){var re=I.exec(me.slice(fe));return re?(te.m=b.get(re[0].toLowerCase()),fe+re[0].length):-1}function Q(te,me,fe){return P(te,n,me,fe)}function Y(te,me,fe){return P(te,t,me,fe)}function X(te,me,fe){return P(te,r,me,fe)}function Z(te){return p[te.getDay()]}function E(te){return i[te.getDay()]}function z(te){return c[te.getMonth()]}function V(te){return s[te.getMonth()]}function R(te){return a[+(te.getHours()>=12)]}function L(te){return 1+~~(te.getMonth()/3)}function G(te){return p[te.getUTCDay()]}function ie(te){return i[te.getUTCDay()]}function oe(te){return c[te.getUTCMonth()]}function he(te){return s[te.getUTCMonth()]}function ge(te){return a[+(te.getUTCHours()>=12)]}function de(te){return 1+~~(te.getUTCMonth()/3)}return{format:function(te){var me=S(te+="",A);return me.toString=function(){return te},me},parse:function(te){var me=N(te+="",!1);return me.toString=function(){return te},me},utcFormat:function(te){var me=S(te+="",O);return me.toString=function(){return te},me},utcParse:function(te){var me=N(te+="",!0);return me.toString=function(){return te},me}}}var YP={"-":"",_:" ",0:"0"},Un=/^\s*\d+/,U8=/^%/,V8=/[\\^$*+?|[\]().{}]/g;function Ve(e,n,t){var r=e<0?"-":"",a=(r?-e:e)+"",i=a.length;return r+(i<t?new Array(t-i+1).join(n)+a:a)}function G8(e){return e.replace(V8,"\\$&")}function Gu(e){return new RegExp("^(?:"+e.map(G8).join("|")+")","i")}function Ku(e){return new Map(e.map((n,t)=>[n.toLowerCase(),t]))}function K8(e,n,t){var r=Un.exec(n.slice(t,t+1));return r?(e.w=+r[0],t+r[0].length):-1}function Q8(e,n,t){var r=Un.exec(n.slice(t,t+1));return r?(e.u=+r[0],t+r[0].length):-1}function Y8(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.U=+r[0],t+r[0].length):-1}function X8(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.V=+r[0],t+r[0].length):-1}function Z8(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.W=+r[0],t+r[0].length):-1}function XP(e,n,t){var r=Un.exec(n.slice(t,t+4));return r?(e.y=+r[0],t+r[0].length):-1}function ZP(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),t+r[0].length):-1}function J8(e,n,t){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(t,t+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),t+r[0].length):-1}function eL(e,n,t){var r=Un.exec(n.slice(t,t+1));return r?(e.q=r[0]*3-3,t+r[0].length):-1}function nL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.m=r[0]-1,t+r[0].length):-1}function JP(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.d=+r[0],t+r[0].length):-1}function tL(e,n,t){var r=Un.exec(n.slice(t,t+3));return r?(e.m=0,e.d=+r[0],t+r[0].length):-1}function e4(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.H=+r[0],t+r[0].length):-1}function rL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.M=+r[0],t+r[0].length):-1}function aL(e,n,t){var r=Un.exec(n.slice(t,t+2));return r?(e.S=+r[0],t+r[0].length):-1}function oL(e,n,t){var r=Un.exec(n.slice(t,t+3));return r?(e.L=+r[0],t+r[0].length):-1}function iL(e,n,t){var r=Un.exec(n.slice(t,t+6));return r?(e.L=Math.floor(r[0]/1e3),t+r[0].length):-1}function uL(e,n,t){var r=U8.exec(n.slice(t,t+1));return r?t+r[0].length:-1}function pL(e,n,t){var r=Un.exec(n.slice(t));return r?(e.Q=+r[0],t+r[0].length):-1}function sL(e,n,t){var r=Un.exec(n.slice(t));return r?(e.s=+r[0],t+r[0].length):-1}function n4(e,n){return Ve(e.getDate(),n,2)}function lL(e,n){return Ve(e.getHours(),n,2)}function cL(e,n){return Ve(e.getHours()%12||12,n,2)}function fL(e,n){return Ve(1+ns.count(Kr(e),e),n,3)}function nM(e,n){return Ve(e.getMilliseconds(),n,3)}function dL(e,n){return nM(e,n)+"000"}function mL(e,n){return Ve(e.getMonth()+1,n,2)}function hL(e,n){return Ve(e.getMinutes(),n,2)}function vL(e,n){return Ve(e.getSeconds(),n,2)}function gL(e){var n=e.getDay();return n===0?7:n}function yL(e,n){return Ve(tc.count(Kr(e)-1,e),n,2)}function tM(e){var n=e.getDay();return n>=4||n===0?Bi(e):Bi.ceil(e)}function bL(e,n){return e=tM(e),Ve(Bi.count(Kr(e),e)+(Kr(e).getDay()===4),n,2)}function IL(e){return e.getDay()}function BL(e,n){return Ve(n0.count(Kr(e)-1,e),n,2)}function xL(e,n){return Ve(e.getFullYear()%100,n,2)}function wL(e,n){return e=tM(e),Ve(e.getFullYear()%100,n,2)}function PL(e,n){return Ve(e.getFullYear()%1e4,n,4)}function WL(e,n){var t=e.getDay();return e=t>=4||t===0?Bi(e):Bi.ceil(e),Ve(e.getFullYear()%1e4,n,4)}function SL(e){var n=e.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Ve(n/60|0,"0",2)+Ve(n%60,"0",2)}function t4(e,n){return Ve(e.getUTCDate(),n,2)}function ML(e,n){return Ve(e.getUTCHours(),n,2)}function AL(e,n){return Ve(e.getUTCHours()%12||12,n,2)}function _L(e,n){return Ve(1+nc.count(Qr(e),e),n,3)}function rM(e,n){return Ve(e.getUTCMilliseconds(),n,3)}function OL(e,n){return rM(e,n)+"000"}function HL(e,n){return Ve(e.getUTCMonth()+1,n,2)}function CL(e,n){return Ve(e.getUTCMinutes(),n,2)}function NL(e,n){return Ve(e.getUTCSeconds(),n,2)}function RL(e){var n=e.getUTCDay();return n===0?7:n}function kL(e,n){return Ve(rc.count(Qr(e)-1,e),n,2)}function aM(e){var n=e.getUTCDay();return n>=4||n===0?xi(e):xi.ceil(e)}function TL(e,n){return e=aM(e),Ve(xi.count(Qr(e),e)+(Qr(e).getUTCDay()===4),n,2)}function EL(e){return e.getUTCDay()}function DL(e,n){return Ve(t0.count(Qr(e)-1,e),n,2)}function jL(e,n){return Ve(e.getUTCFullYear()%100,n,2)}function $L(e,n){return e=aM(e),Ve(e.getUTCFullYear()%100,n,2)}function LL(e,n){return Ve(e.getUTCFullYear()%1e4,n,4)}function FL(e,n){var t=e.getUTCDay();return e=t>=4||t===0?xi(e):xi.ceil(e),Ve(e.getUTCFullYear()%1e4,n,4)}function qL(){return"+0000"}function r4(){return"%"}function a4(e){return+e}function o4(e){return Math.floor(+e/1e3)}var ni,oM,iM;zL({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function zL(e){return ni=z8(e),oM=ni.format,ni.parse,iM=ni.utcFormat,ni.utcParse,ni}function UL(e){return new Date(e)}function VL(e){return e instanceof Date?+e:+new Date(+e)}function o6(e,n,t,r,a,i,p,s,c,f){var m=Uy(),d=m.invert,v=m.domain,y=f(".%L"),B=f(":%S"),I=f("%I:%M"),b=f("%I %p"),W=f("%a %d"),M=f("%b %d"),A=f("%B"),O=f("%Y");function w(S){return(c(S)<S?y:s(S)<S?B:p(S)<S?I:i(S)<S?b:r(S)<S?a(S)<S?W:M:t(S)<S?A:O)(S)}return m.invert=function(S){return new Date(d(S))},m.domain=function(S){return arguments.length?v(Array.from(S,VL)):v().map(UL)},m.ticks=function(S){var N=v();return e(N[0],N[N.length-1],S??10)},m.tickFormat=function(S,N){return N==null?w:f(N)},m.nice=function(S){var N=v();return(!S||typeof S.range!="function")&&(S=n(N[0],N[N.length-1],S??10)),S?v(VS(N,S)):m},m.copy=function(){return es(m,o6(e,n,t,r,a,i,p,s,c,f))},m}function GL(){return Yt.apply(o6(F8,q8,Kr,r6,tc,ns,n6,Jy,fo,oM).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function KL(){return Yt.apply(o6($8,L8,Qr,a6,rc,nc,t6,e6,fo,iM).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function ac(){var e=0,n=1,t,r,a,i,p=ut,s=!1,c;function f(d){return d==null||isNaN(d=+d)?c:p(a===0?.5:(d=(i(d)-t)*a,s?Math.max(0,Math.min(1,d)):d))}f.domain=function(d){return arguments.length?([e,n]=d,t=i(e=+e),r=i(n=+n),a=t===r?0:1/(r-t),f):[e,n]},f.clamp=function(d){return arguments.length?(s=!!d,f):s},f.interpolator=function(d){return arguments.length?(p=d,f):p};function m(d){return function(v){var y,B;return arguments.length?([y,B]=v,p=d(y,B),f):[p(0),p(1)]}}return f.range=m(Zi),f.rangeRound=m(zy),f.unknown=function(d){return arguments.length?(c=d,f):c},function(d){return i=d,t=d(e),r=d(n),a=t===r?0:1/(r-t),f}}function La(e,n){return n.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function uM(){var e=$a(ac()(ut));return e.copy=function(){return La(e,uM())},Jr.apply(e,arguments)}function pM(){var e=Ky(ac()).domain([1,10]);return e.copy=function(){return La(e,pM()).base(e.base())},Jr.apply(e,arguments)}function sM(){var e=Qy(ac());return e.copy=function(){return La(e,sM()).constant(e.constant())},Jr.apply(e,arguments)}function i6(){var e=Yy(ac());return e.copy=function(){return La(e,i6()).exponent(e.exponent())},Jr.apply(e,arguments)}function QL(){return i6.apply(null,arguments).exponent(.5)}function lM(){var e=[],n=ut;function t(r){if(r!=null&&!isNaN(r=+r))return n((Zp(e,r,1)-1)/(e.length-1))}return t.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Ha),t},t.interpolator=function(r){return arguments.length?(n=r,t):n},t.range=function(){return e.map((r,a)=>n(a/(e.length-1)))},t.quantiles=function(r){return Array.from({length:r+1},(a,i)=>k$(e,i/r))},t.copy=function(){return lM(n).domain(e)},Jr.apply(t,arguments)}function oc(){var e=0,n=.5,t=1,r=1,a,i,p,s,c,f=ut,m,d=!1,v;function y(I){return isNaN(I=+I)?v:(I=.5+((I=+m(I))-i)*(r*I<r*i?s:c),f(d?Math.max(0,Math.min(1,I)):I))}y.domain=function(I){return arguments.length?([e,n,t]=I,a=m(e=+e),i=m(n=+n),p=m(t=+t),s=a===i?0:.5/(i-a),c=i===p?0:.5/(p-i),r=i<a?-1:1,y):[e,n,t]},y.clamp=function(I){return arguments.length?(d=!!I,y):d},y.interpolator=function(I){return arguments.length?(f=I,y):f};function B(I){return function(b){var W,M,A;return arguments.length?([W,M,A]=b,f=u8(I,[W,M,A]),y):[f(0),f(.5),f(1)]}}return y.range=B(Zi),y.rangeRound=B(zy),y.unknown=function(I){return arguments.length?(v=I,y):v},function(I){return m=I,a=I(e),i=I(n),p=I(t),s=a===i?0:.5/(i-a),c=i===p?0:.5/(p-i),r=i<a?-1:1,y}}function cM(){var e=$a(oc()(ut));return e.copy=function(){return La(e,cM())},Jr.apply(e,arguments)}function fM(){var e=Ky(oc()).domain([.1,1,10]);return e.copy=function(){return La(e,fM()).base(e.base())},Jr.apply(e,arguments)}function dM(){var e=Qy(oc());return e.copy=function(){return La(e,dM()).constant(e.constant())},Jr.apply(e,arguments)}function u6(){var e=Yy(oc());return e.copy=function(){return La(e,u6()).exponent(e.exponent())},Jr.apply(e,arguments)}function YL(){return u6.apply(null,arguments).exponent(.5)}const i4=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:Ip,scaleDiverging:cM,scaleDivergingLog:fM,scaleDivergingPow:u6,scaleDivergingSqrt:YL,scaleDivergingSymlog:dM,scaleIdentity:US,scaleImplicit:pg,scaleLinear:Jl,scaleLog:GS,scaleOrdinal:Ly,scalePoint:ap,scalePow:Xy,scaleQuantile:YS,scaleQuantize:XS,scaleRadial:QS,scaleSequential:uM,scaleSequentialLog:pM,scaleSequentialPow:i6,scaleSequentialQuantile:lM,scaleSequentialSqrt:QL,scaleSequentialSymlog:sM,scaleSqrt:O8,scaleSymlog:KS,scaleThreshold:ZS,scaleTime:GL,scaleUtc:KL,tickFormat:zS},Symbol.toStringTag,{value:"Module"}));var Dh,u4;function ic(){if(u4)return Dh;u4=1;var e=Ki();function n(t,r,a){for(var i=-1,p=t.length;++i<p;){var s=t[i],c=r(s);if(c!=null&&(f===void 0?c===c&&!e(c):a(c,f)))var f=c,m=s}return m}return Dh=n,Dh}var jh,p4;function mM(){if(p4)return jh;p4=1;function e(n,t){return n>t}return jh=e,jh}var $h,s4;function XL(){if(s4)return $h;s4=1;var e=ic(),n=mM(),t=Xi();function r(a){return a&&a.length?e(a,t,n):void 0}return $h=r,$h}var ZL=XL();const Ma=Xe(ZL);var Lh,l4;function hM(){if(l4)return Lh;l4=1;function e(n,t){return n<t}return Lh=e,Lh}var Fh,c4;function JL(){if(c4)return Fh;c4=1;var e=ic(),n=hM(),t=Xi();function r(a){return a&&a.length?e(a,t,n):void 0}return Fh=r,Fh}var e7=JL();const uc=Xe(e7);var qh,f4;function n7(){if(f4)return qh;f4=1;var e=wy(),n=Mr(),t=PS(),r=yt();function a(i,p){var s=r(i)?e:t;return s(i,n(p,3))}return qh=a,qh}var zh,d4;function t7(){if(d4)return zh;d4=1;var e=xS(),n=n7();function t(r,a){return e(n(r,a),1)}return zh=t,zh}var r7=t7();const a7=Xe(r7);var Uh,m4;function o7(){if(m4)return Uh;m4=1;var e=ky();function n(t,r){return e(t,r)}return Uh=n,Uh}var i7=o7();const ka=Xe(i7);var Ji=1e9,u7={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},s6,fn=!0,Gt="[DecimalError] ",go=Gt+"Invalid argument: ",p6=Gt+"Exponent out of range: ",eu=Math.floor,po=Math.pow,p7=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,At,qn=1e7,sn=7,vM=9007199254740991,r0=eu(vM/sn),Ie={};Ie.absoluteValue=Ie.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};Ie.comparedTo=Ie.cmp=function(e){var n,t,r,a,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(r=i.d.length,a=e.d.length,n=0,t=r<a?r:a;n<t;++n)if(i.d[n]!==e.d[n])return i.d[n]>e.d[n]^i.s<0?1:-1;return r===a?0:r>a^i.s<0?1:-1};Ie.decimalPlaces=Ie.dp=function(){var e=this,n=e.d.length-1,t=(n-e.e)*sn;if(n=e.d[n],n)for(;n%10==0;n/=10)t--;return t<0?0:t};Ie.dividedBy=Ie.div=function(e){return Vr(this,new this.constructor(e))};Ie.dividedToIntegerBy=Ie.idiv=function(e){var n=this,t=n.constructor;return nn(Vr(n,new t(e),0,1),t.precision)};Ie.equals=Ie.eq=function(e){return!this.cmp(e)};Ie.exponent=function(){return Hn(this)};Ie.greaterThan=Ie.gt=function(e){return this.cmp(e)>0};Ie.greaterThanOrEqualTo=Ie.gte=function(e){return this.cmp(e)>=0};Ie.isInteger=Ie.isint=function(){return this.e>this.d.length-2};Ie.isNegative=Ie.isneg=function(){return this.s<0};Ie.isPositive=Ie.ispos=function(){return this.s>0};Ie.isZero=function(){return this.s===0};Ie.lessThan=Ie.lt=function(e){return this.cmp(e)<0};Ie.lessThanOrEqualTo=Ie.lte=function(e){return this.cmp(e)<1};Ie.logarithm=Ie.log=function(e){var n,t=this,r=t.constructor,a=r.precision,i=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(At))throw Error(Gt+"NaN");if(t.s<1)throw Error(Gt+(t.s?"NaN":"-Infinity"));return t.eq(At)?new r(0):(fn=!1,n=Vr(Wp(t,i),Wp(e,i),i),fn=!0,nn(n,a))};Ie.minus=Ie.sub=function(e){var n=this;return e=new n.constructor(e),n.s==e.s?bM(n,e):gM(n,(e.s=-e.s,e))};Ie.modulo=Ie.mod=function(e){var n,t=this,r=t.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(Gt+"NaN");return t.s?(fn=!1,n=Vr(t,e,0,1).times(e),fn=!0,t.minus(n)):nn(new r(t),a)};Ie.naturalExponential=Ie.exp=function(){return yM(this)};Ie.naturalLogarithm=Ie.ln=function(){return Wp(this)};Ie.negated=Ie.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};Ie.plus=Ie.add=function(e){var n=this;return e=new n.constructor(e),n.s==e.s?gM(n,e):bM(n,(e.s=-e.s,e))};Ie.precision=Ie.sd=function(e){var n,t,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(go+e);if(n=Hn(a)+1,r=a.d.length-1,t=r*sn+1,r=a.d[r],r){for(;r%10==0;r/=10)t--;for(r=a.d[0];r>=10;r/=10)t++}return e&&n>t?n:t};Ie.squareRoot=Ie.sqrt=function(){var e,n,t,r,a,i,p,s=this,c=s.constructor;if(s.s<1){if(!s.s)return new c(0);throw Error(Gt+"NaN")}for(e=Hn(s),fn=!1,a=Math.sqrt(+s),a==0||a==1/0?(n=br(s.d),(n.length+e)%2==0&&(n+="0"),a=Math.sqrt(n),e=eu((e+1)/2)-(e<0||e%2),a==1/0?n="5e"+e:(n=a.toExponential(),n=n.slice(0,n.indexOf("e")+1)+e),r=new c(n)):r=new c(a.toString()),t=c.precision,a=p=t+3;;)if(i=r,r=i.plus(Vr(s,i,p+2)).times(.5),br(i.d).slice(0,p)===(n=br(r.d)).slice(0,p)){if(n=n.slice(p-3,p+1),a==p&&n=="4999"){if(nn(i,t+1,0),i.times(i).eq(s)){r=i;break}}else if(n!="9999")break;p+=4}return fn=!0,nn(r,t)};Ie.times=Ie.mul=function(e){var n,t,r,a,i,p,s,c,f,m=this,d=m.constructor,v=m.d,y=(e=new d(e)).d;if(!m.s||!e.s)return new d(0);for(e.s*=m.s,t=m.e+e.e,c=v.length,f=y.length,c<f&&(i=v,v=y,y=i,p=c,c=f,f=p),i=[],p=c+f,r=p;r--;)i.push(0);for(r=f;--r>=0;){for(n=0,a=c+r;a>r;)s=i[a]+y[r]*v[a-r-1]+n,i[a--]=s%qn|0,n=s/qn|0;i[a]=(i[a]+n)%qn|0}for(;!i[--p];)i.pop();return n?++t:i.shift(),e.d=i,e.e=t,fn?nn(e,d.precision):e};Ie.toDecimalPlaces=Ie.todp=function(e,n){var t=this,r=t.constructor;return t=new r(t),e===void 0?t:(Pr(e,0,Ji),n===void 0?n=r.rounding:Pr(n,0,8),nn(t,e+Hn(t)+1,n))};Ie.toExponential=function(e,n){var t,r=this,a=r.constructor;return e===void 0?t=bo(r,!0):(Pr(e,0,Ji),n===void 0?n=a.rounding:Pr(n,0,8),r=nn(new a(r),e+1,n),t=bo(r,!0,e+1)),t};Ie.toFixed=function(e,n){var t,r,a=this,i=a.constructor;return e===void 0?bo(a):(Pr(e,0,Ji),n===void 0?n=i.rounding:Pr(n,0,8),r=nn(new i(a),e+Hn(a)+1,n),t=bo(r.abs(),!1,e+Hn(r)+1),a.isneg()&&!a.isZero()?"-"+t:t)};Ie.toInteger=Ie.toint=function(){var e=this,n=e.constructor;return nn(new n(e),Hn(e)+1,n.rounding)};Ie.toNumber=function(){return+this};Ie.toPower=Ie.pow=function(e){var n,t,r,a,i,p,s=this,c=s.constructor,f=12,m=+(e=new c(e));if(!e.s)return new c(At);if(s=new c(s),!s.s){if(e.s<1)throw Error(Gt+"Infinity");return s}if(s.eq(At))return s;if(r=c.precision,e.eq(At))return nn(s,r);if(n=e.e,t=e.d.length-1,p=n>=t,i=s.s,p){if((t=m<0?-m:m)<=vM){for(a=new c(At),n=Math.ceil(r/sn+4),fn=!1;t%2&&(a=a.times(s),v4(a.d,n)),t=eu(t/2),t!==0;)s=s.times(s),v4(s.d,n);return fn=!0,e.s<0?new c(At).div(a):nn(a,r)}}else if(i<0)throw Error(Gt+"NaN");return i=i<0&&e.d[Math.max(n,t)]&1?-1:1,s.s=1,fn=!1,a=e.times(Wp(s,r+f)),fn=!0,a=yM(a),a.s=i,a};Ie.toPrecision=function(e,n){var t,r,a=this,i=a.constructor;return e===void 0?(t=Hn(a),r=bo(a,t<=i.toExpNeg||t>=i.toExpPos)):(Pr(e,1,Ji),n===void 0?n=i.rounding:Pr(n,0,8),a=nn(new i(a),e,n),t=Hn(a),r=bo(a,e<=t||t<=i.toExpNeg,e)),r};Ie.toSignificantDigits=Ie.tosd=function(e,n){var t=this,r=t.constructor;return e===void 0?(e=r.precision,n=r.rounding):(Pr(e,1,Ji),n===void 0?n=r.rounding:Pr(n,0,8)),nn(new r(t),e,n)};Ie.toString=Ie.valueOf=Ie.val=Ie.toJSON=Ie[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,n=Hn(e),t=e.constructor;return bo(e,n<=t.toExpNeg||n>=t.toExpPos)};function gM(e,n){var t,r,a,i,p,s,c,f,m=e.constructor,d=m.precision;if(!e.s||!n.s)return n.s||(n=new m(e)),fn?nn(n,d):n;if(c=e.d,f=n.d,p=e.e,a=n.e,c=c.slice(),i=p-a,i){for(i<0?(r=c,i=-i,s=f.length):(r=f,a=p,s=c.length),p=Math.ceil(d/sn),s=p>s?p+1:s+1,i>s&&(i=s,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(s=c.length,i=f.length,s-i<0&&(i=s,r=f,f=c,c=r),t=0;i;)t=(c[--i]=c[i]+f[i]+t)/qn|0,c[i]%=qn;for(t&&(c.unshift(t),++a),s=c.length;c[--s]==0;)c.pop();return n.d=c,n.e=a,fn?nn(n,d):n}function Pr(e,n,t){if(e!==~~e||e<n||e>t)throw Error(go+e)}function br(e){var n,t,r,a=e.length-1,i="",p=e[0];if(a>0){for(i+=p,n=1;n<a;n++)r=e[n]+"",t=sn-r.length,t&&(i+=Wa(t)),i+=r;p=e[n],r=p+"",t=sn-r.length,t&&(i+=Wa(t))}else if(p===0)return"0";for(;p%10===0;)p/=10;return i+p}var Vr=(function(){function e(r,a){var i,p=0,s=r.length;for(r=r.slice();s--;)i=r[s]*a+p,r[s]=i%qn|0,p=i/qn|0;return p&&r.unshift(p),r}function n(r,a,i,p){var s,c;if(i!=p)c=i>p?1:-1;else for(s=c=0;s<i;s++)if(r[s]!=a[s]){c=r[s]>a[s]?1:-1;break}return c}function t(r,a,i){for(var p=0;i--;)r[i]-=p,p=r[i]<a[i]?1:0,r[i]=p*qn+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,p){var s,c,f,m,d,v,y,B,I,b,W,M,A,O,w,S,N,P,H=r.constructor,T=r.s==a.s?1:-1,j=r.d,k=a.d;if(!r.s)return new H(r);if(!a.s)throw Error(Gt+"Division by zero");for(c=r.e-a.e,N=k.length,w=j.length,y=new H(T),B=y.d=[],f=0;k[f]==(j[f]||0);)++f;if(k[f]>(j[f]||0)&&--c,i==null?M=i=H.precision:p?M=i+(Hn(r)-Hn(a))+1:M=i,M<0)return new H(0);if(M=M/sn+2|0,f=0,N==1)for(m=0,k=k[0],M++;(f<w||m)&&M--;f++)A=m*qn+(j[f]||0),B[f]=A/k|0,m=A%k|0;else{for(m=qn/(k[0]+1)|0,m>1&&(k=e(k,m),j=e(j,m),N=k.length,w=j.length),O=N,I=j.slice(0,N),b=I.length;b<N;)I[b++]=0;P=k.slice(),P.unshift(0),S=k[0],k[1]>=qn/2&&++S;do m=0,s=n(k,I,N,b),s<0?(W=I[0],N!=b&&(W=W*qn+(I[1]||0)),m=W/S|0,m>1?(m>=qn&&(m=qn-1),d=e(k,m),v=d.length,b=I.length,s=n(d,I,v,b),s==1&&(m--,t(d,N<v?P:k,v))):(m==0&&(s=m=1),d=k.slice()),v=d.length,v<b&&d.unshift(0),t(I,d,b),s==-1&&(b=I.length,s=n(k,I,N,b),s<1&&(m++,t(I,N<b?P:k,b))),b=I.length):s===0&&(m++,I=[0]),B[f++]=m,s&&I[0]?I[b++]=j[O]||0:(I=[j[O]],b=1);while((O++<w||I[0]!==void 0)&&M--)}return B[0]||B.shift(),y.e=c,nn(y,p?i+Hn(y)+1:i)}})();function yM(e,n){var t,r,a,i,p,s,c=0,f=0,m=e.constructor,d=m.precision;if(Hn(e)>16)throw Error(p6+Hn(e));if(!e.s)return new m(At);for(fn=!1,s=d,p=new m(.03125);e.abs().gte(.1);)e=e.times(p),f+=5;for(r=Math.log(po(2,f))/Math.LN10*2+5|0,s+=r,t=a=i=new m(At),m.precision=s;;){if(a=nn(a.times(e),s),t=t.times(++c),p=i.plus(Vr(a,t,s)),br(p.d).slice(0,s)===br(i.d).slice(0,s)){for(;f--;)i=nn(i.times(i),s);return m.precision=d,n==null?(fn=!0,nn(i,d)):i}i=p}}function Hn(e){for(var n=e.e*sn,t=e.d[0];t>=10;t/=10)n++;return n}function Vh(e,n,t){if(n>e.LN10.sd())throw fn=!0,t&&(e.precision=t),Error(Gt+"LN10 precision limit exceeded");return nn(new e(e.LN10),n)}function Wa(e){for(var n="";e--;)n+="0";return n}function Wp(e,n){var t,r,a,i,p,s,c,f,m,d=1,v=10,y=e,B=y.d,I=y.constructor,b=I.precision;if(y.s<1)throw Error(Gt+(y.s?"NaN":"-Infinity"));if(y.eq(At))return new I(0);if(n==null?(fn=!1,f=b):f=n,y.eq(10))return n==null&&(fn=!0),Vh(I,f);if(f+=v,I.precision=f,t=br(B),r=t.charAt(0),i=Hn(y),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&t.charAt(1)>3;)y=y.times(e),t=br(y.d),r=t.charAt(0),d++;i=Hn(y),r>1?(y=new I("0."+t),i++):y=new I(r+"."+t.slice(1))}else return c=Vh(I,f+2,b).times(i+""),y=Wp(new I(r+"."+t.slice(1)),f-v).plus(c),I.precision=b,n==null?(fn=!0,nn(y,b)):y;for(s=p=y=Vr(y.minus(At),y.plus(At),f),m=nn(y.times(y),f),a=3;;){if(p=nn(p.times(m),f),c=s.plus(Vr(p,new I(a),f)),br(c.d).slice(0,f)===br(s.d).slice(0,f))return s=s.times(2),i!==0&&(s=s.plus(Vh(I,f+2,b).times(i+""))),s=Vr(s,new I(d),f),I.precision=b,n==null?(fn=!0,nn(s,b)):s;s=c,a+=2}}function h4(e,n){var t,r,a;for((t=n.indexOf("."))>-1&&(n=n.replace(".","")),(r=n.search(/e/i))>0?(t<0&&(t=r),t+=+n.slice(r+1),n=n.substring(0,r)):t<0&&(t=n.length),r=0;n.charCodeAt(r)===48;)++r;for(a=n.length;n.charCodeAt(a-1)===48;)--a;if(n=n.slice(r,a),n){if(a-=r,t=t-r-1,e.e=eu(t/sn),e.d=[],r=(t+1)%sn,t<0&&(r+=sn),r<a){for(r&&e.d.push(+n.slice(0,r)),a-=sn;r<a;)e.d.push(+n.slice(r,r+=sn));n=n.slice(r),r=sn-n.length}else r-=a;for(;r--;)n+="0";if(e.d.push(+n),fn&&(e.e>r0||e.e<-r0))throw Error(p6+t)}else e.s=0,e.e=0,e.d=[0];return e}function nn(e,n,t){var r,a,i,p,s,c,f,m,d=e.d;for(p=1,i=d[0];i>=10;i/=10)p++;if(r=n-p,r<0)r+=sn,a=n,f=d[m=0];else{if(m=Math.ceil((r+1)/sn),i=d.length,m>=i)return e;for(f=i=d[m],p=1;i>=10;i/=10)p++;r%=sn,a=r-sn+p}if(t!==void 0&&(i=po(10,p-a-1),s=f/i%10|0,c=n<0||d[m+1]!==void 0||f%i,c=t<4?(s||c)&&(t==0||t==(e.s<0?3:2)):s>5||s==5&&(t==4||c||t==6&&(r>0?a>0?f/po(10,p-a):0:d[m-1])%10&1||t==(e.s<0?8:7))),n<1||!d[0])return c?(i=Hn(e),d.length=1,n=n-i-1,d[0]=po(10,(sn-n%sn)%sn),e.e=eu(-n/sn)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(r==0?(d.length=m,i=1,m--):(d.length=m+1,i=po(10,sn-r),d[m]=a>0?(f/po(10,p-a)%po(10,a)|0)*i:0),c)for(;;)if(m==0){(d[0]+=i)==qn&&(d[0]=1,++e.e);break}else{if(d[m]+=i,d[m]!=qn)break;d[m--]=0,i=1}for(r=d.length;d[--r]===0;)d.pop();if(fn&&(e.e>r0||e.e<-r0))throw Error(p6+Hn(e));return e}function bM(e,n){var t,r,a,i,p,s,c,f,m,d,v=e.constructor,y=v.precision;if(!e.s||!n.s)return n.s?n.s=-n.s:n=new v(e),fn?nn(n,y):n;if(c=e.d,d=n.d,r=n.e,f=e.e,c=c.slice(),p=f-r,p){for(m=p<0,m?(t=c,p=-p,s=d.length):(t=d,r=f,s=c.length),a=Math.max(Math.ceil(y/sn),s)+2,p>a&&(p=a,t.length=1),t.reverse(),a=p;a--;)t.push(0);t.reverse()}else{for(a=c.length,s=d.length,m=a<s,m&&(s=a),a=0;a<s;a++)if(c[a]!=d[a]){m=c[a]<d[a];break}p=0}for(m&&(t=c,c=d,d=t,n.s=-n.s),s=c.length,a=d.length-s;a>0;--a)c[s++]=0;for(a=d.length;a>p;){if(c[--a]<d[a]){for(i=a;i&&c[--i]===0;)c[i]=qn-1;--c[i],c[a]+=qn}c[a]-=d[a]}for(;c[--s]===0;)c.pop();for(;c[0]===0;c.shift())--r;return c[0]?(n.d=c,n.e=r,fn?nn(n,y):n):new v(0)}function bo(e,n,t){var r,a=Hn(e),i=br(e.d),p=i.length;return n?(t&&(r=t-p)>0?i=i.charAt(0)+"."+i.slice(1)+Wa(r):p>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(a<0?"e":"e+")+a):a<0?(i="0."+Wa(-a-1)+i,t&&(r=t-p)>0&&(i+=Wa(r))):a>=p?(i+=Wa(a+1-p),t&&(r=t-a-1)>0&&(i=i+"."+Wa(r))):((r=a+1)<p&&(i=i.slice(0,r)+"."+i.slice(r)),t&&(r=t-p)>0&&(a+1===p&&(i+="."),i+=Wa(r))),e.s<0?"-"+i:i}function v4(e,n){if(e.length>n)return e.length=n,!0}function IM(e){var n,t,r;function a(i){var p=this;if(!(p instanceof a))return new a(i);if(p.constructor=a,i instanceof a){p.s=i.s,p.e=i.e,p.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(go+i);if(i>0)p.s=1;else if(i<0)i=-i,p.s=-1;else{p.s=0,p.e=0,p.d=[0];return}if(i===~~i&&i<1e7){p.e=0,p.d=[i];return}return h4(p,i.toString())}else if(typeof i!="string")throw Error(go+i);if(i.charCodeAt(0)===45?(i=i.slice(1),p.s=-1):p.s=1,p7.test(i))h4(p,i);else throw Error(go+i)}if(a.prototype=Ie,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=IM,a.config=a.set=s7,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],n=0;n<r.length;)e.hasOwnProperty(t=r[n++])||(e[t]=this[t]);return a.config(e),a}function s7(e){if(!e||typeof e!="object")throw Error(Gt+"Object expected");var n,t,r,a=["precision",1,Ji,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(n=0;n<a.length;n+=3)if((r=e[t=a[n]])!==void 0)if(eu(r)===r&&r>=a[n+1]&&r<=a[n+2])this[t]=r;else throw Error(go+t+": "+r);if((r=e[t="LN10"])!==void 0)if(r==Math.LN10)this[t]=new this(r);else throw Error(go+t+": "+r);return this}var s6=IM(u7);At=new s6(1);const en=s6;function l7(e){return m7(e)||d7(e)||f7(e)||c7()}function c7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f7(e,n){if(e){if(typeof e=="string")return fg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fg(e,n)}}function d7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function m7(e){if(Array.isArray(e))return fg(e)}function fg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var h7=function(n){return n},BM={},xM=function(n){return n===BM},g4=function(n){return function t(){return arguments.length===0||arguments.length===1&&xM(arguments.length<=0?void 0:arguments[0])?t:n.apply(void 0,arguments)}},v7=function e(n,t){return n===1?t:g4(function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var p=a.filter(function(s){return s!==BM}).length;return p>=n?t.apply(void 0,a):e(n-p,g4(function(){for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];var m=a.map(function(d){return xM(d)?c.shift():d});return t.apply(void 0,l7(m).concat(c))}))})},pc=function(n){return v7(n.length,n)},dg=function(n,t){for(var r=[],a=n;a<t;++a)r[a-n]=a;return r},g7=pc(function(e,n){return Array.isArray(n)?n.map(e):Object.keys(n).map(function(t){return n[t]}).map(e)}),y7=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];if(!t.length)return h7;var a=t.reverse(),i=a[0],p=a.slice(1);return function(){return p.reduce(function(s,c){return c(s)},i.apply(void 0,arguments))}},mg=function(n){return Array.isArray(n)?n.reverse():n.split("").reverse.join("")},wM=function(n){var t=null,r=null;return function(){for(var a=arguments.length,i=new Array(a),p=0;p<a;p++)i[p]=arguments[p];return t&&i.every(function(s,c){return s===t[c]})||(t=i,r=n.apply(void 0,i)),r}};function b7(e){var n;return e===0?n=1:n=Math.floor(new en(e).abs().log(10).toNumber())+1,n}function I7(e,n,t){for(var r=new en(e),a=0,i=[];r.lt(n)&&a<1e5;)i.push(r.toNumber()),r=r.add(t),a++;return i}var B7=pc(function(e,n,t){var r=+e,a=+n;return r+t*(a-r)}),x7=pc(function(e,n,t){var r=n-+e;return r=r||1/0,(t-e)/r}),w7=pc(function(e,n,t){var r=n-+e;return r=r||1/0,Math.max(0,Math.min(1,(t-e)/r))});const sc={rangeStep:I7,getDigitCount:b7,interpolateNumber:B7,uninterpolateNumber:x7,uninterpolateTruncation:w7};function hg(e){return S7(e)||W7(e)||PM(e)||P7()}function P7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function S7(e){if(Array.isArray(e))return vg(e)}function Sp(e,n){return _7(e)||A7(e,n)||PM(e,n)||M7()}function M7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PM(e,n){if(e){if(typeof e=="string")return vg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return vg(e,n)}}function vg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function A7(e,n){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],r=!0,a=!1,i=void 0;try{for(var p=e[Symbol.iterator](),s;!(r=(s=p.next()).done)&&(t.push(s.value),!(n&&t.length===n));r=!0);}catch(c){a=!0,i=c}finally{try{!r&&p.return!=null&&p.return()}finally{if(a)throw i}}return t}}function _7(e){if(Array.isArray(e))return e}function WM(e){var n=Sp(e,2),t=n[0],r=n[1],a=t,i=r;return t>r&&(a=r,i=t),[a,i]}function SM(e,n,t){if(e.lte(0))return new en(0);var r=sc.getDigitCount(e.toNumber()),a=new en(10).pow(r),i=e.div(a),p=r!==1?.05:.1,s=new en(Math.ceil(i.div(p).toNumber())).add(t).mul(p),c=s.mul(a);return n?c:new en(Math.ceil(c))}function O7(e,n,t){var r=1,a=new en(e);if(!a.isint()&&t){var i=Math.abs(e);i<1?(r=new en(10).pow(sc.getDigitCount(e)-1),a=new en(Math.floor(a.div(r).toNumber())).mul(r)):i>1&&(a=new en(Math.floor(e)))}else e===0?a=new en(Math.floor((n-1)/2)):t||(a=new en(Math.floor(e)));var p=Math.floor((n-1)/2),s=y7(g7(function(c){return a.add(new en(c-p).mul(r)).toNumber()}),dg);return s(0,n)}function MM(e,n,t,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((n-e)/(t-1)))return{step:new en(0),tickMin:new en(0),tickMax:new en(0)};var i=SM(new en(n).sub(e).div(t-1),r,a),p;e<=0&&n>=0?p=new en(0):(p=new en(e).add(n).div(2),p=p.sub(new en(p).mod(i)));var s=Math.ceil(p.sub(e).div(i).toNumber()),c=Math.ceil(new en(n).sub(p).div(i).toNumber()),f=s+c+1;return f>t?MM(e,n,t,r,a+1):(f<t&&(c=n>0?c+(t-f):c,s=n>0?s:s+(t-f)),{step:i,tickMin:p.sub(new en(s).mul(i)),tickMax:p.add(new en(c).mul(i))})}function H7(e){var n=Sp(e,2),t=n[0],r=n[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,p=Math.max(a,2),s=WM([t,r]),c=Sp(s,2),f=c[0],m=c[1];if(f===-1/0||m===1/0){var d=m===1/0?[f].concat(hg(dg(0,a-1).map(function(){return 1/0}))):[].concat(hg(dg(0,a-1).map(function(){return-1/0})),[m]);return t>r?mg(d):d}if(f===m)return O7(f,a,i);var v=MM(f,m,p,i),y=v.step,B=v.tickMin,I=v.tickMax,b=sc.rangeStep(B,I.add(new en(.1).mul(y)),y);return t>r?mg(b):b}function C7(e,n){var t=Sp(e,2),r=t[0],a=t[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,p=WM([r,a]),s=Sp(p,2),c=s[0],f=s[1];if(c===-1/0||f===1/0)return[r,a];if(c===f)return[c];var m=Math.max(n,2),d=SM(new en(f).sub(c).div(m-1),i,0),v=[].concat(hg(sc.rangeStep(new en(c),new en(f).sub(new en(.99).mul(d)),d)),[f]);return r>a?mg(v):v}var N7=wM(H7),R7=wM(C7),k7="Invariant failed";function Io(e,n){throw new Error(k7)}var T7=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function wi(e){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wi(e)}function a0(){return a0=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a0.apply(this,arguments)}function E7(e,n){return L7(e)||$7(e,n)||j7(e,n)||D7()}function D7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j7(e,n){if(e){if(typeof e=="string")return y4(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y4(e,n)}}function y4(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function $7(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function L7(e){if(Array.isArray(e))return e}function F7(e,n){if(e==null)return{};var t=q7(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function q7(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function z7(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function U7(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,OM(r.key),r)}}function V7(e,n,t){return n&&U7(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function G7(e,n,t){return n=o0(n),K7(e,AM()?Reflect.construct(n,t||[],o0(e).constructor):n.apply(e,t))}function K7(e,n){if(n&&(wi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Q7(e)}function Q7(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(AM=function(){return!!e})()}function o0(e){return o0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o0(e)}function Y7(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&gg(e,n)}function gg(e,n){return gg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},gg(e,n)}function _M(e,n,t){return n=OM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function OM(e){var n=X7(e,"string");return wi(n)=="symbol"?n:n+""}function X7(e,n){if(wi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var nu=(function(e){function n(){return z7(this,n),G7(this,n,arguments)}return Y7(n,e),V7(n,[{key:"render",value:function(){var r=this.props,a=r.offset,i=r.layout,p=r.width,s=r.dataKey,c=r.data,f=r.dataPointFormatter,m=r.xAxis,d=r.yAxis,v=F7(r,T7),y=Se(v,!1);this.props.direction==="x"&&m.type!=="number"&&Io();var B=c.map(function(I){var b=f(I,s),W=b.x,M=b.y,A=b.value,O=b.errorVal;if(!O)return null;var w=[],S,N;if(Array.isArray(O)){var P=E7(O,2);S=P[0],N=P[1]}else S=N=O;if(i==="vertical"){var H=m.scale,T=M+a,j=T+p,k=T-p,F=H(A-S),Q=H(A+N);w.push({x1:Q,y1:j,x2:Q,y2:k}),w.push({x1:F,y1:T,x2:Q,y2:T}),w.push({x1:F,y1:j,x2:F,y2:k})}else if(i==="horizontal"){var Y=d.scale,X=W+a,Z=X-p,E=X+p,z=Y(A-S),V=Y(A+N);w.push({x1:Z,y1:V,x2:E,y2:V}),w.push({x1:X,y1:z,x2:X,y2:V}),w.push({x1:Z,y1:z,x2:E,y2:z})}return D.createElement(je,a0({className:"recharts-errorBar",key:"bar-".concat(w.map(function(R){return"".concat(R.x1,"-").concat(R.x2,"-").concat(R.y1,"-").concat(R.y2)}))},y),w.map(function(R){return D.createElement("line",a0({},R,{key:"line-".concat(R.x1,"-").concat(R.x2,"-").concat(R.y1,"-").concat(R.y2)}))}))});return D.createElement(je,{className:"recharts-errorBars"},B)}}])})(D.Component);_M(nu,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});_M(nu,"displayName","ErrorBar");function Mp(e){"@babel/helpers - typeof";return Mp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Mp(e)}function b4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ro(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?b4(Object(t),!0).forEach(function(r){Z7(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Z7(e,n,t){return n=J7(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function J7(e){var n=e9(e,"string");return Mp(n)=="symbol"?n:n+""}function e9(e,n){if(Mp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Mp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var HM=function(n){var t=n.children,r=n.formattedGraphicalItems,a=n.legendWidth,i=n.legendContent,p=Wt(t,Oa);if(!p)return null;var s=Oa.defaultProps,c=s!==void 0?ro(ro({},s),p.props):{},f;return p.props&&p.props.payload?f=p.props&&p.props.payload:i==="children"?f=(r||[]).reduce(function(m,d){var v=d.item,y=d.props,B=y.sectors||y.data||[];return m.concat(B.map(function(I){return{type:p.props.iconType||v.props.legendType,value:I.name,color:I.fill,payload:I}}))},[]):f=(r||[]).map(function(m){var d=m.item,v=d.type.defaultProps,y=v!==void 0?ro(ro({},v),d.props):{},B=y.dataKey,I=y.name,b=y.legendType,W=y.hide;return{inactive:W,dataKey:B,type:c.iconType||b||"square",color:l6(d),value:I||B,payload:y}}),ro(ro(ro({},c),Oa.getWithHeight(p,a)),{},{payload:f,item:p})};function Ap(e){"@babel/helpers - typeof";return Ap=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ap(e)}function I4(e){return a9(e)||r9(e)||t9(e)||n9()}function n9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t9(e,n){if(e){if(typeof e=="string")return yg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return yg(e,n)}}function r9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function a9(e){if(Array.isArray(e))return yg(e)}function yg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function B4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function In(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?B4(Object(t),!0).forEach(function(r){fi(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function fi(e,n,t){return n=o9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o9(e){var n=i9(e,"string");return Ap(n)=="symbol"?n:n+""}function i9(e,n){if(Ap(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ap(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function ln(e,n,t){return Ne(e)||Ne(n)?t:En(n)?_t(e,n,t):Ce(n)?n(e):t}function op(e,n,t,r){var a=a7(e,function(s){return ln(s,n)});if(t==="number"){var i=a.filter(function(s){return le(s)||parseFloat(s)});return i.length?[uc(i),Ma(i)]:[1/0,-1/0]}var p=r?a.filter(function(s){return!Ne(s)}):a;return p.map(function(s){return En(s)||s instanceof Date?s:""})}var u9=function(n){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,p=-1,s=(t=r==null?void 0:r.length)!==null&&t!==void 0?t:0;if(s<=1)return 0;if(i&&i.axisType==="angleAxis"&&Math.abs(Math.abs(i.range[1]-i.range[0])-360)<=1e-6)for(var c=i.range,f=0;f<s;f++){var m=f>0?a[f-1].coordinate:a[s-1].coordinate,d=a[f].coordinate,v=f>=s-1?a[0].coordinate:a[f+1].coordinate,y=void 0;if(ot(d-m)!==ot(v-d)){var B=[];if(ot(v-d)===ot(c[1]-c[0])){y=v;var I=d+c[1]-c[0];B[0]=Math.min(I,(I+m)/2),B[1]=Math.max(I,(I+m)/2)}else{y=m;var b=v+c[1]-c[0];B[0]=Math.min(d,(b+d)/2),B[1]=Math.max(d,(b+d)/2)}var W=[Math.min(d,(y+d)/2),Math.max(d,(y+d)/2)];if(n>W[0]&&n<=W[1]||n>=B[0]&&n<=B[1]){p=a[f].index;break}}else{var M=Math.min(m,v),A=Math.max(m,v);if(n>(M+d)/2&&n<=(A+d)/2){p=a[f].index;break}}}else for(var O=0;O<s;O++)if(O===0&&n<=(r[O].coordinate+r[O+1].coordinate)/2||O>0&&O<s-1&&n>(r[O].coordinate+r[O-1].coordinate)/2&&n<=(r[O].coordinate+r[O+1].coordinate)/2||O===s-1&&n>(r[O].coordinate+r[O-1].coordinate)/2){p=r[O].index;break}return p},l6=function(n){var t,r=n,a=r.type.displayName,i=(t=n.type)!==null&&t!==void 0&&t.defaultProps?In(In({},n.type.defaultProps),n.props):n.props,p=i.stroke,s=i.fill,c;switch(a){case"Line":c=p;break;case"Area":case"Radar":c=p&&p!=="none"?p:s;break;default:c=s;break}return c},p9=function(n){var t=n.barSize,r=n.totalSize,a=n.stackGroups,i=a===void 0?{}:a;if(!i)return{};for(var p={},s=Object.keys(i),c=0,f=s.length;c<f;c++)for(var m=i[s[c]].stackGroups,d=Object.keys(m),v=0,y=d.length;v<y;v++){var B=m[d[v]],I=B.items,b=B.cateAxisId,W=I.filter(function(N){return Ur(N.type).indexOf("Bar")>=0});if(W&&W.length){var M=W[0].type.defaultProps,A=M!==void 0?In(In({},M),W[0].props):W[0].props,O=A.barSize,w=A[b];p[w]||(p[w]=[]);var S=Ne(O)?t:O;p[w].push({item:W[0],stackList:W.slice(1),barSize:Ne(S)?void 0:it(S,r,0)})}}return p},s9=function(n){var t=n.barGap,r=n.barCategoryGap,a=n.bandSize,i=n.sizeList,p=i===void 0?[]:i,s=n.maxBarSize,c=p.length;if(c<1)return null;var f=it(t,a,0,!0),m,d=[];if(p[0].barSize===+p[0].barSize){var v=!1,y=a/c,B=p.reduce(function(O,w){return O+w.barSize||0},0);B+=(c-1)*f,B>=a&&(B-=(c-1)*f,f=0),B>=a&&y>0&&(v=!0,y*=.9,B=c*y);var I=(a-B)/2>>0,b={offset:I-f,size:0};m=p.reduce(function(O,w){var S={item:w.item,position:{offset:b.offset+b.size+f,size:v?y:w.barSize}},N=[].concat(I4(O),[S]);return b=N[N.length-1].position,w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){N.push({item:P,position:b})}),N},d)}else{var W=it(r,a,0,!0);a-2*W-(c-1)*f<=0&&(f=0);var M=(a-2*W-(c-1)*f)/c;M>1&&(M>>=0);var A=s===+s?Math.min(M,s):M;m=p.reduce(function(O,w,S){var N=[].concat(I4(O),[{item:w.item,position:{offset:W+(M+f)*S+(M-A)/2,size:A}}]);return w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){N.push({item:P,position:N[N.length-1].position})}),N},d)}return m},l9=function(n,t,r,a){var i=r.children,p=r.width,s=r.margin,c=p-(s.left||0)-(s.right||0),f=HM({children:i,legendWidth:c});if(f){var m=a||{},d=m.width,v=m.height,y=f.align,B=f.verticalAlign,I=f.layout;if((I==="vertical"||I==="horizontal"&&B==="middle")&&y!=="center"&&le(n[y]))return In(In({},n),{},fi({},y,n[y]+(d||0)));if((I==="horizontal"||I==="vertical"&&y==="center")&&B!=="middle"&&le(n[B]))return In(In({},n),{},fi({},B,n[B]+(v||0)))}return n},c9=function(n,t,r){return Ne(t)?!0:n==="horizontal"?t==="yAxis":n==="vertical"||r==="x"?t==="xAxis":r==="y"?t==="yAxis":!0},CM=function(n,t,r,a,i){var p=t.props.children,s=pt(p,nu).filter(function(f){return c9(a,i,f.props.direction)});if(s&&s.length){var c=s.map(function(f){return f.props.dataKey});return n.reduce(function(f,m){var d=ln(m,r);if(Ne(d))return f;var v=Array.isArray(d)?[uc(d),Ma(d)]:[d,d],y=c.reduce(function(B,I){var b=ln(m,I,0),W=v[0]-Math.abs(Array.isArray(b)?b[0]:b),M=v[1]+Math.abs(Array.isArray(b)?b[1]:b);return[Math.min(W,B[0]),Math.max(M,B[1])]},[1/0,-1/0]);return[Math.min(y[0],f[0]),Math.max(y[1],f[1])]},[1/0,-1/0])}return null},f9=function(n,t,r,a,i){var p=t.map(function(s){return CM(n,s,r,i,a)}).filter(function(s){return!Ne(s)});return p&&p.length?p.reduce(function(s,c){return[Math.min(s[0],c[0]),Math.max(s[1],c[1])]},[1/0,-1/0]):null},NM=function(n,t,r,a,i){var p=t.map(function(c){var f=c.props.dataKey;return r==="number"&&f&&CM(n,c,f,a)||op(n,f,r,i)});if(r==="number")return p.reduce(function(c,f){return[Math.min(c[0],f[0]),Math.max(c[1],f[1])]},[1/0,-1/0]);var s={};return p.reduce(function(c,f){for(var m=0,d=f.length;m<d;m++)s[f[m]]||(s[f[m]]=!0,c.push(f[m]));return c},[])},RM=function(n,t){return n==="horizontal"&&t==="xAxis"||n==="vertical"&&t==="yAxis"||n==="centric"&&t==="angleAxis"||n==="radial"&&t==="radiusAxis"},kM=function(n,t,r,a){if(a)return n.map(function(c){return c.coordinate});var i,p,s=n.map(function(c){return c.coordinate===t&&(i=!0),c.coordinate===r&&(p=!0),c.coordinate});return i||s.push(t),p||s.push(r),s},Fr=function(n,t,r){if(!n)return null;var a=n.scale,i=n.duplicateDomain,p=n.type,s=n.range,c=n.realScaleType==="scaleBand"?a.bandwidth()/2:2,f=(t||r)&&p==="category"&&a.bandwidth?a.bandwidth()/c:0;if(f=n.axisType==="angleAxis"&&(s==null?void 0:s.length)>=2?ot(s[0]-s[1])*2*f:f,t&&(n.ticks||n.niceTicks)){var m=(n.ticks||n.niceTicks).map(function(d){var v=i?i.indexOf(d):d;return{coordinate:a(v)+f,value:d,offset:f}});return m.filter(function(d){return!Yi(d.coordinate)})}return n.isCategorical&&n.categoricalDomain?n.categoricalDomain.map(function(d,v){return{coordinate:a(d)+f,value:d,index:v,offset:f}}):a.ticks&&!r?a.ticks(n.tickCount).map(function(d){return{coordinate:a(d)+f,value:d,offset:f}}):a.domain().map(function(d,v){return{coordinate:a(d)+f,value:i?i[d]:d,index:v,offset:f}})},Gh=new WeakMap,xl=function(n,t){if(typeof t!="function")return n;Gh.has(n)||Gh.set(n,new WeakMap);var r=Gh.get(n);if(r.has(t))return r.get(t);var a=function(){n.apply(void 0,arguments),t.apply(void 0,arguments)};return r.set(t,a),a},TM=function(n,t,r){var a=n.scale,i=n.type,p=n.layout,s=n.axisType;if(a==="auto")return p==="radial"&&s==="radiusAxis"?{scale:Ip(),realScaleType:"band"}:p==="radial"&&s==="angleAxis"?{scale:Jl(),realScaleType:"linear"}:i==="category"&&t&&(t.indexOf("LineChart")>=0||t.indexOf("AreaChart")>=0||t.indexOf("ComposedChart")>=0&&!r)?{scale:ap(),realScaleType:"point"}:i==="category"?{scale:Ip(),realScaleType:"band"}:{scale:Jl(),realScaleType:"linear"};if(Qp(a)){var c="scale".concat(V0(a));return{scale:(i4[c]||ap)(),realScaleType:i4[c]?c:"point"}}return Ce(a)?{scale:a}:{scale:ap(),realScaleType:"point"}},x4=1e-4,EM=function(n){var t=n.domain();if(!(!t||t.length<=2)){var r=t.length,a=n.range(),i=Math.min(a[0],a[1])-x4,p=Math.max(a[0],a[1])+x4,s=n(t[0]),c=n(t[r-1]);(s<i||s>p||c<i||c>p)&&n.domain([t[0],t[r-1]])}},d9=function(n,t){if(!n)return null;for(var r=0,a=n.length;r<a;r++)if(n[r].item===t)return n[r].position;return null},m9=function(n,t){if(!t||t.length!==2||!le(t[0])||!le(t[1]))return n;var r=Math.min(t[0],t[1]),a=Math.max(t[0],t[1]),i=[n[0],n[1]];return(!le(n[0])||n[0]<r)&&(i[0]=r),(!le(n[1])||n[1]>a)&&(i[1]=a),i[0]>a&&(i[0]=a),i[1]<r&&(i[1]=r),i},h9=function(n){var t=n.length;if(!(t<=0))for(var r=0,a=n[0].length;r<a;++r)for(var i=0,p=0,s=0;s<t;++s){var c=Yi(n[s][r][1])?n[s][r][0]:n[s][r][1];c>=0?(n[s][r][0]=i,n[s][r][1]=i+c,i=n[s][r][1]):(n[s][r][0]=p,n[s][r][1]=p+c,p=n[s][r][1])}},v9=function(n){var t=n.length;if(!(t<=0))for(var r=0,a=n[0].length;r<a;++r)for(var i=0,p=0;p<t;++p){var s=Yi(n[p][r][1])?n[p][r][0]:n[p][r][1];s>=0?(n[p][r][0]=i,n[p][r][1]=i+s,i=n[p][r][1]):(n[p][r][0]=0,n[p][r][1]=0)}},g9={sign:h9,expand:aE,none:hi,silhouette:oE,wiggle:iE,positive:v9},y9=function(n,t,r){var a=t.map(function(s){return s.props.dataKey}),i=g9[r],p=rE().keys(a).value(function(s,c){return+ln(s,c,0)}).order(Kv).offset(i);return p(n)},b9=function(n,t,r,a,i,p){if(!n)return null;var s=p?t.reverse():t,c={},f=s.reduce(function(d,v){var y,B=(y=v.type)!==null&&y!==void 0&&y.defaultProps?In(In({},v.type.defaultProps),v.props):v.props,I=B.stackId,b=B.hide;if(b)return d;var W=B[r],M=d[W]||{hasStack:!1,stackGroups:{}};if(En(I)){var A=M.stackGroups[I]||{numericAxisId:r,cateAxisId:a,items:[]};A.items.push(v),M.hasStack=!0,M.stackGroups[I]=A}else M.stackGroups[ja("_stackId_")]={numericAxisId:r,cateAxisId:a,items:[v]};return In(In({},d),{},fi({},W,M))},c),m={};return Object.keys(f).reduce(function(d,v){var y=f[v];if(y.hasStack){var B={};y.stackGroups=Object.keys(y.stackGroups).reduce(function(I,b){var W=y.stackGroups[b];return In(In({},I),{},fi({},b,{numericAxisId:r,cateAxisId:a,items:W.items,stackedData:y9(n,W.items,i)}))},B)}return In(In({},d),{},fi({},v,y))},m)},DM=function(n,t){var r=t.realScaleType,a=t.type,i=t.tickCount,p=t.originalDomain,s=t.allowDecimals,c=r||t.scale;if(c!=="auto"&&c!=="linear")return null;if(i&&a==="number"&&p&&(p[0]==="auto"||p[1]==="auto")){var f=n.domain();if(!f.length)return null;var m=N7(f,i,s);return n.domain([uc(m),Ma(m)]),{niceTicks:m}}if(i&&a==="number"){var d=n.domain(),v=R7(d,i,s);return{niceTicks:v}}return null};function Pi(e){var n=e.axis,t=e.ticks,r=e.bandSize,a=e.entry,i=e.index,p=e.dataKey;if(n.type==="category"){if(!n.allowDuplicatedCategory&&n.dataKey&&!Ne(a[n.dataKey])){var s=Rl(t,"value",a[n.dataKey]);if(s)return s.coordinate+r/2}return t[i]?t[i].coordinate+r/2:null}var c=ln(a,Ne(p)?n.dataKey:p);return Ne(c)?null:n.scale(c)}var w4=function(n){var t=n.axis,r=n.ticks,a=n.offset,i=n.bandSize,p=n.entry,s=n.index;if(t.type==="category")return r[s]?r[s].coordinate+a:null;var c=ln(p,t.dataKey,t.domain[s]);return Ne(c)?null:t.scale(c)-i/2+a},I9=function(n){var t=n.numericAxis,r=t.scale.domain();if(t.type==="number"){var a=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]);return a<=0&&i>=0?0:i<0?i:a}return r[0]},B9=function(n,t){var r,a=(r=n.type)!==null&&r!==void 0&&r.defaultProps?In(In({},n.type.defaultProps),n.props):n.props,i=a.stackId;if(En(i)){var p=t[i];if(p){var s=p.items.indexOf(n);return s>=0?p.stackedData[s]:null}}return null},x9=function(n){return n.reduce(function(t,r){return[uc(r.concat([t[0]]).filter(le)),Ma(r.concat([t[1]]).filter(le))]},[1/0,-1/0])},jM=function(n,t,r){return Object.keys(n).reduce(function(a,i){var p=n[i],s=p.stackedData,c=s.reduce(function(f,m){var d=x9(m.slice(t,r+1));return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);return[Math.min(c[0],a[0]),Math.max(c[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},P4=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,W4=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,bg=function(n,t,r){if(Ce(n))return n(t,r);if(!Array.isArray(n))return t;var a=[];if(le(n[0]))a[0]=r?n[0]:Math.min(n[0],t[0]);else if(P4.test(n[0])){var i=+P4.exec(n[0])[1];a[0]=t[0]-i}else Ce(n[0])?a[0]=n[0](t[0]):a[0]=t[0];if(le(n[1]))a[1]=r?n[1]:Math.max(n[1],t[1]);else if(W4.test(n[1])){var p=+W4.exec(n[1])[1];a[1]=t[1]+p}else Ce(n[1])?a[1]=n[1](t[1]):a[1]=t[1];return a},i0=function(n,t,r){if(n&&n.scale&&n.scale.bandwidth){var a=n.scale.bandwidth();if(!r||a>0)return a}if(n&&t&&t.length>=2){for(var i=Ey(t,function(d){return d.coordinate}),p=1/0,s=1,c=i.length;s<c;s++){var f=i[s],m=i[s-1];p=Math.min((f.coordinate||0)-(m.coordinate||0),p)}return p===1/0?0:p}return r?void 0:0},S4=function(n,t,r){return!n||!n.length||ka(n,_t(r,"type.defaultProps.domain"))?t:n},$M=function(n,t){var r=n.type.defaultProps?In(In({},n.type.defaultProps),n.props):n.props,a=r.dataKey,i=r.name,p=r.unit,s=r.formatter,c=r.tooltipType,f=r.chartType,m=r.hide;return In(In({},Se(n,!1)),{},{dataKey:a,unit:p,formatter:s,name:i||a,color:l6(n),value:ln(t,a),type:c,payload:t,chartType:f,hide:m})};function _p(e){"@babel/helpers - typeof";return _p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_p(e)}function M4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Dr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?M4(Object(t),!0).forEach(function(r){LM(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function LM(e,n,t){return n=w9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w9(e){var n=P9(e,"string");return _p(n)=="symbol"?n:n+""}function P9(e,n){if(_p(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(_p(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function W9(e,n){return _9(e)||A9(e,n)||M9(e,n)||S9()}function S9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M9(e,n){if(e){if(typeof e=="string")return A4(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A4(e,n)}}function A4(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function A9(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function _9(e){if(Array.isArray(e))return e}var u0=Math.PI/180,O9=function(n){return n*180/Math.PI},on=function(n,t,r,a){return{x:n+Math.cos(-u0*a)*r,y:t+Math.sin(-u0*a)*r}},FM=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(n-(r.left||0)-(r.right||0)),Math.abs(t-(r.top||0)-(r.bottom||0)))/2},H9=function(n,t,r,a,i){var p=n.width,s=n.height,c=n.startAngle,f=n.endAngle,m=it(n.cx,p,p/2),d=it(n.cy,s,s/2),v=FM(p,s,r),y=it(n.innerRadius,v,0),B=it(n.outerRadius,v,v*.8),I=Object.keys(t);return I.reduce(function(b,W){var M=t[W],A=M.domain,O=M.reversed,w;if(Ne(M.range))a==="angleAxis"?w=[c,f]:a==="radiusAxis"&&(w=[y,B]),O&&(w=[w[1],w[0]]);else{w=M.range;var S=w,N=W9(S,2);c=N[0],f=N[1]}var P=TM(M,i),H=P.realScaleType,T=P.scale;T.domain(A).range(w),EM(T);var j=DM(T,Dr(Dr({},M),{},{realScaleType:H})),k=Dr(Dr(Dr({},M),j),{},{range:w,radius:B,realScaleType:H,scale:T,cx:m,cy:d,innerRadius:y,outerRadius:B,startAngle:c,endAngle:f});return Dr(Dr({},b),{},LM({},W,k))},{})},C9=function(n,t){var r=n.x,a=n.y,i=t.x,p=t.y;return Math.sqrt(Math.pow(r-i,2)+Math.pow(a-p,2))},N9=function(n,t){var r=n.x,a=n.y,i=t.cx,p=t.cy,s=C9({x:r,y:a},{x:i,y:p});if(s<=0)return{radius:s};var c=(r-i)/s,f=Math.acos(c);return a>p&&(f=2*Math.PI-f),{radius:s,angle:O9(f),angleInRadian:f}},R9=function(n){var t=n.startAngle,r=n.endAngle,a=Math.floor(t/360),i=Math.floor(r/360),p=Math.min(a,i);return{startAngle:t-p*360,endAngle:r-p*360}},k9=function(n,t){var r=t.startAngle,a=t.endAngle,i=Math.floor(r/360),p=Math.floor(a/360),s=Math.min(i,p);return n+s*360},_4=function(n,t){var r=n.x,a=n.y,i=N9({x:r,y:a},t),p=i.radius,s=i.angle,c=t.innerRadius,f=t.outerRadius;if(p<c||p>f)return!1;if(p===0)return!0;var m=R9(t),d=m.startAngle,v=m.endAngle,y=s,B;if(d<=v){for(;y>v;)y-=360;for(;y<d;)y+=360;B=y>=d&&y<=v}else{for(;y>d;)y-=360;for(;y<v;)y+=360;B=y>=v&&y<=d}return B?Dr(Dr({},t),{},{radius:p,angle:k9(y,t)}):null},qM=function(n){return!K.isValidElement(n)&&!Ce(n)&&typeof n!="boolean"?n.className:""};function Op(e){"@babel/helpers - typeof";return Op=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Op(e)}var T9=["offset"];function E9(e){return L9(e)||$9(e)||j9(e)||D9()}function D9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j9(e,n){if(e){if(typeof e=="string")return Ig(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ig(e,n)}}function $9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function L9(e){if(Array.isArray(e))return Ig(e)}function Ig(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function F9(e,n){if(e==null)return{};var t=q9(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function q9(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function O4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Tn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?O4(Object(t),!0).forEach(function(r){z9(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function z9(e,n,t){return n=U9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function U9(e){var n=V9(e,"string");return Op(n)=="symbol"?n:n+""}function V9(e,n){if(Op(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Op(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Hp(){return Hp=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Hp.apply(this,arguments)}var G9=function(n){var t=n.value,r=n.formatter,a=Ne(n.children)?t:n.children;return Ce(r)?r(a):a},K9=function(n,t){var r=ot(t-n),a=Math.min(Math.abs(t-n),360);return r*a},Q9=function(n,t,r){var a=n.position,i=n.viewBox,p=n.offset,s=n.className,c=i,f=c.cx,m=c.cy,d=c.innerRadius,v=c.outerRadius,y=c.startAngle,B=c.endAngle,I=c.clockWise,b=(d+v)/2,W=K9(y,B),M=W>=0?1:-1,A,O;a==="insideStart"?(A=y+M*p,O=I):a==="insideEnd"?(A=B-M*p,O=!I):a==="end"&&(A=B+M*p,O=I),O=W<=0?O:!O;var w=on(f,m,b,A),S=on(f,m,b,A+(O?1:-1)*359),N="M".concat(w.x,",").concat(w.y,`
    A`).concat(b,",").concat(b,",0,1,").concat(O?0:1,`,
    `).concat(S.x,",").concat(S.y),P=Ne(n.id)?ja("recharts-radial-line-"):n.id;return D.createElement("text",Hp({},r,{dominantBaseline:"central",className:Ee("recharts-radial-bar-label",s)}),D.createElement("defs",null,D.createElement("path",{id:P,d:N})),D.createElement("textPath",{xlinkHref:"#".concat(P)},t))},Y9=function(n){var t=n.viewBox,r=n.offset,a=n.position,i=t,p=i.cx,s=i.cy,c=i.innerRadius,f=i.outerRadius,m=i.startAngle,d=i.endAngle,v=(m+d)/2;if(a==="outside"){var y=on(p,s,f+r,v),B=y.x,I=y.y;return{x:B,y:I,textAnchor:B>=p?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:p,y:s,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:p,y:s,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:p,y:s,textAnchor:"middle",verticalAnchor:"end"};var b=(c+f)/2,W=on(p,s,b,v),M=W.x,A=W.y;return{x:M,y:A,textAnchor:"middle",verticalAnchor:"middle"}},X9=function(n){var t=n.viewBox,r=n.parentViewBox,a=n.offset,i=n.position,p=t,s=p.x,c=p.y,f=p.width,m=p.height,d=m>=0?1:-1,v=d*a,y=d>0?"end":"start",B=d>0?"start":"end",I=f>=0?1:-1,b=I*a,W=I>0?"end":"start",M=I>0?"start":"end";if(i==="top"){var A={x:s+f/2,y:c-d*a,textAnchor:"middle",verticalAnchor:y};return Tn(Tn({},A),r?{height:Math.max(c-r.y,0),width:f}:{})}if(i==="bottom"){var O={x:s+f/2,y:c+m+v,textAnchor:"middle",verticalAnchor:B};return Tn(Tn({},O),r?{height:Math.max(r.y+r.height-(c+m),0),width:f}:{})}if(i==="left"){var w={x:s-b,y:c+m/2,textAnchor:W,verticalAnchor:"middle"};return Tn(Tn({},w),r?{width:Math.max(w.x-r.x,0),height:m}:{})}if(i==="right"){var S={x:s+f+b,y:c+m/2,textAnchor:M,verticalAnchor:"middle"};return Tn(Tn({},S),r?{width:Math.max(r.x+r.width-S.x,0),height:m}:{})}var N=r?{width:f,height:m}:{};return i==="insideLeft"?Tn({x:s+b,y:c+m/2,textAnchor:M,verticalAnchor:"middle"},N):i==="insideRight"?Tn({x:s+f-b,y:c+m/2,textAnchor:W,verticalAnchor:"middle"},N):i==="insideTop"?Tn({x:s+f/2,y:c+v,textAnchor:"middle",verticalAnchor:B},N):i==="insideBottom"?Tn({x:s+f/2,y:c+m-v,textAnchor:"middle",verticalAnchor:y},N):i==="insideTopLeft"?Tn({x:s+b,y:c+v,textAnchor:M,verticalAnchor:B},N):i==="insideTopRight"?Tn({x:s+f-b,y:c+v,textAnchor:W,verticalAnchor:B},N):i==="insideBottomLeft"?Tn({x:s+b,y:c+m-v,textAnchor:M,verticalAnchor:y},N):i==="insideBottomRight"?Tn({x:s+f-b,y:c+m-v,textAnchor:W,verticalAnchor:y},N):Qi(i)&&(le(i.x)||lo(i.x))&&(le(i.y)||lo(i.y))?Tn({x:s+it(i.x,f),y:c+it(i.y,m),textAnchor:"end",verticalAnchor:"end"},N):Tn({x:s+f/2,y:c+m/2,textAnchor:"middle",verticalAnchor:"middle"},N)},Z9=function(n){return"cx"in n&&le(n.cx)};function zn(e){var n=e.offset,t=n===void 0?5:n,r=F9(e,T9),a=Tn({offset:t},r),i=a.viewBox,p=a.position,s=a.value,c=a.children,f=a.content,m=a.className,d=m===void 0?"":m,v=a.textBreakAll;if(!i||Ne(s)&&Ne(c)&&!K.isValidElement(f)&&!Ce(f))return null;if(K.isValidElement(f))return K.cloneElement(f,a);var y;if(Ce(f)){if(y=K.createElement(f,a),K.isValidElement(y))return y}else y=G9(a);var B=Z9(i),I=Se(a,!0);if(B&&(p==="insideStart"||p==="insideEnd"||p==="end"))return Q9(a,y,I);var b=B?Y9(a):X9(a);return D.createElement(yo,Hp({className:Ee("recharts-label",d)},I,b,{breakAll:v}),y)}zn.displayName="Label";var zM=function(n){var t=n.cx,r=n.cy,a=n.angle,i=n.startAngle,p=n.endAngle,s=n.r,c=n.radius,f=n.innerRadius,m=n.outerRadius,d=n.x,v=n.y,y=n.top,B=n.left,I=n.width,b=n.height,W=n.clockWise,M=n.labelViewBox;if(M)return M;if(le(I)&&le(b)){if(le(d)&&le(v))return{x:d,y:v,width:I,height:b};if(le(y)&&le(B))return{x:y,y:B,width:I,height:b}}return le(d)&&le(v)?{x:d,y:v,width:0,height:0}:le(t)&&le(r)?{cx:t,cy:r,startAngle:i||a||0,endAngle:p||a||0,innerRadius:f||0,outerRadius:m||c||s||0,clockWise:W}:n.viewBox?n.viewBox:{}},J9=function(n,t){return n?n===!0?D.createElement(zn,{key:"label-implicit",viewBox:t}):En(n)?D.createElement(zn,{key:"label-implicit",viewBox:t,value:n}):K.isValidElement(n)?n.type===zn?K.cloneElement(n,{key:"label-implicit",viewBox:t}):D.createElement(zn,{key:"label-implicit",content:n,viewBox:t}):Ce(n)?D.createElement(zn,{key:"label-implicit",content:n,viewBox:t}):Qi(n)?D.createElement(zn,Hp({viewBox:t},n,{key:"label-implicit"})):null:null},eF=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!n||!n.children&&r&&!n.label)return null;var a=n.children,i=zM(n),p=pt(a,zn).map(function(c,f){return K.cloneElement(c,{viewBox:t||i,key:"label-".concat(f)})});if(!r)return p;var s=J9(n.label,t||i);return[s].concat(E9(p))};zn.parseViewBox=zM;zn.renderCallByParent=eF;var Kh,H4;function nF(){if(H4)return Kh;H4=1;function e(n){var t=n==null?0:n.length;return t?n[t-1]:void 0}return Kh=e,Kh}var tF=nF();const rF=Xe(tF);function Cp(e){"@babel/helpers - typeof";return Cp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Cp(e)}var aF=["valueAccessor"],oF=["data","dataKey","clockWise","id","textBreakAll"];function iF(e){return lF(e)||sF(e)||pF(e)||uF()}function uF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pF(e,n){if(e){if(typeof e=="string")return Bg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Bg(e,n)}}function sF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lF(e){if(Array.isArray(e))return Bg(e)}function Bg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p0(){return p0=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p0.apply(this,arguments)}function C4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function N4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?C4(Object(t),!0).forEach(function(r){cF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function cF(e,n,t){return n=fF(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fF(e){var n=dF(e,"string");return Cp(n)=="symbol"?n:n+""}function dF(e,n){if(Cp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Cp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function R4(e,n){if(e==null)return{};var t=mF(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function mF(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var hF=function(n){return Array.isArray(n.value)?rF(n.value):n.value};function lr(e){var n=e.valueAccessor,t=n===void 0?hF:n,r=R4(e,aF),a=r.data,i=r.dataKey,p=r.clockWise,s=r.id,c=r.textBreakAll,f=R4(r,oF);return!a||!a.length?null:D.createElement(je,{className:"recharts-label-list"},a.map(function(m,d){var v=Ne(i)?t(m,d):ln(m&&m.payload,i),y=Ne(s)?{}:{id:"".concat(s,"-").concat(d)};return D.createElement(zn,p0({},Se(m,!0),f,y,{parentViewBox:m.parentViewBox,value:v,textBreakAll:c,viewBox:zn.parseViewBox(Ne(p)?m:N4(N4({},m),{},{clockWise:p})),key:"label-".concat(d),index:d}))}))}lr.displayName="LabelList";function vF(e,n){return e?e===!0?D.createElement(lr,{key:"labelList-implicit",data:n}):D.isValidElement(e)||Ce(e)?D.createElement(lr,{key:"labelList-implicit",data:n,content:e}):Qi(e)?D.createElement(lr,p0({data:n},e,{key:"labelList-implicit"})):null:null}function gF(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&t&&!e.label)return null;var r=e.children,a=pt(r,lr).map(function(p,s){return K.cloneElement(p,{data:n,key:"labelList-".concat(s)})});if(!t)return a;var i=vF(e.label,n);return[i].concat(iF(a))}lr.renderCallByParent=gF;function Np(e){"@babel/helpers - typeof";return Np=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Np(e)}function xg(){return xg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xg.apply(this,arguments)}function k4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function T4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?k4(Object(t),!0).forEach(function(r){yF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function yF(e,n,t){return n=bF(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function bF(e){var n=IF(e,"string");return Np(n)=="symbol"?n:n+""}function IF(e,n){if(Np(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Np(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var BF=function(n,t){var r=ot(t-n),a=Math.min(Math.abs(t-n),359.999);return r*a},wl=function(n){var t=n.cx,r=n.cy,a=n.radius,i=n.angle,p=n.sign,s=n.isExternal,c=n.cornerRadius,f=n.cornerIsExternal,m=c*(s?1:-1)+a,d=Math.asin(c/m)/u0,v=f?i:i+p*d,y=on(t,r,m,v),B=on(t,r,a,v),I=f?i-p*d:i,b=on(t,r,m*Math.cos(d*u0),I);return{center:y,circleTangency:B,lineTangency:b,theta:d}},UM=function(n){var t=n.cx,r=n.cy,a=n.innerRadius,i=n.outerRadius,p=n.startAngle,s=n.endAngle,c=BF(p,s),f=p+c,m=on(t,r,i,p),d=on(t,r,i,f),v="M ".concat(m.x,",").concat(m.y,`
    A `).concat(i,",").concat(i,`,0,
    `).concat(+(Math.abs(c)>180),",").concat(+(p>f),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(a>0){var y=on(t,r,a,p),B=on(t,r,a,f);v+="L ".concat(B.x,",").concat(B.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(c)>180),",").concat(+(p<=f),`,
            `).concat(y.x,",").concat(y.y," Z")}else v+="L ".concat(t,",").concat(r," Z");return v},xF=function(n){var t=n.cx,r=n.cy,a=n.innerRadius,i=n.outerRadius,p=n.cornerRadius,s=n.forceCornerRadius,c=n.cornerIsExternal,f=n.startAngle,m=n.endAngle,d=ot(m-f),v=wl({cx:t,cy:r,radius:i,angle:f,sign:d,cornerRadius:p,cornerIsExternal:c}),y=v.circleTangency,B=v.lineTangency,I=v.theta,b=wl({cx:t,cy:r,radius:i,angle:m,sign:-d,cornerRadius:p,cornerIsExternal:c}),W=b.circleTangency,M=b.lineTangency,A=b.theta,O=c?Math.abs(f-m):Math.abs(f-m)-I-A;if(O<0)return s?"M ".concat(B.x,",").concat(B.y,`
        a`).concat(p,",").concat(p,",0,0,1,").concat(p*2,`,0
        a`).concat(p,",").concat(p,",0,0,1,").concat(-p*2,`,0
      `):UM({cx:t,cy:r,innerRadius:a,outerRadius:i,startAngle:f,endAngle:m});var w="M ".concat(B.x,",").concat(B.y,`
    A`).concat(p,",").concat(p,",0,0,").concat(+(d<0),",").concat(y.x,",").concat(y.y,`
    A`).concat(i,",").concat(i,",0,").concat(+(O>180),",").concat(+(d<0),",").concat(W.x,",").concat(W.y,`
    A`).concat(p,",").concat(p,",0,0,").concat(+(d<0),",").concat(M.x,",").concat(M.y,`
  `);if(a>0){var S=wl({cx:t,cy:r,radius:a,angle:f,sign:d,isExternal:!0,cornerRadius:p,cornerIsExternal:c}),N=S.circleTangency,P=S.lineTangency,H=S.theta,T=wl({cx:t,cy:r,radius:a,angle:m,sign:-d,isExternal:!0,cornerRadius:p,cornerIsExternal:c}),j=T.circleTangency,k=T.lineTangency,F=T.theta,Q=c?Math.abs(f-m):Math.abs(f-m)-H-F;if(Q<0&&p===0)return"".concat(w,"L").concat(t,",").concat(r,"Z");w+="L".concat(k.x,",").concat(k.y,`
      A`).concat(p,",").concat(p,",0,0,").concat(+(d<0),",").concat(j.x,",").concat(j.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(Q>180),",").concat(+(d>0),",").concat(N.x,",").concat(N.y,`
      A`).concat(p,",").concat(p,",0,0,").concat(+(d<0),",").concat(P.x,",").concat(P.y,"Z")}else w+="L".concat(t,",").concat(r,"Z");return w},wF={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},VM=function(n){var t=T4(T4({},wF),n),r=t.cx,a=t.cy,i=t.innerRadius,p=t.outerRadius,s=t.cornerRadius,c=t.forceCornerRadius,f=t.cornerIsExternal,m=t.startAngle,d=t.endAngle,v=t.className;if(p<i||m===d)return null;var y=Ee("recharts-sector",v),B=p-i,I=it(s,B,0,!0),b;return I>0&&Math.abs(m-d)<360?b=xF({cx:r,cy:a,innerRadius:i,outerRadius:p,cornerRadius:Math.min(I,B/2),forceCornerRadius:c,cornerIsExternal:f,startAngle:m,endAngle:d}):b=UM({cx:r,cy:a,innerRadius:i,outerRadius:p,startAngle:m,endAngle:d}),D.createElement("path",xg({},Se(t,!0),{className:y,d:b,role:"img"}))};function Rp(e){"@babel/helpers - typeof";return Rp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Rp(e)}function wg(){return wg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wg.apply(this,arguments)}function E4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function D4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?E4(Object(t),!0).forEach(function(r){PF(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function PF(e,n,t){return n=WF(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function WF(e){var n=SF(e,"string");return Rp(n)=="symbol"?n:n+""}function SF(e,n){if(Rp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Rp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var j4={curveBasisClosed:VT,curveBasisOpen:GT,curveBasis:UT,curveBumpX:HT,curveBumpY:CT,curveLinearClosed:KT,curveLinear:K0,curveMonotoneX:QT,curveMonotoneY:YT,curveNatural:XT,curveStep:ZT,curveStepAfter:eE,curveStepBefore:JT},Pl=function(n){return n.x===+n.x&&n.y===+n.y},Qu=function(n){return n.x},Yu=function(n){return n.y},MF=function(n,t){if(Ce(n))return n;var r="curve".concat(V0(n));return(r==="curveMonotone"||r==="curveBump")&&t?j4["".concat(r).concat(t==="vertical"?"Y":"X")]:j4[r]||K0},AF=function(n){var t=n.type,r=t===void 0?"linear":t,a=n.points,i=a===void 0?[]:a,p=n.baseLine,s=n.layout,c=n.connectNulls,f=c===void 0?!1:c,m=MF(r,s),d=f?i.filter(function(I){return Pl(I)}):i,v;if(Array.isArray(p)){var y=f?p.filter(function(I){return Pl(I)}):p,B=d.map(function(I,b){return D4(D4({},I),{},{base:y[b]})});return s==="vertical"?v=hl().y(Yu).x1(Qu).x0(function(I){return I.base.x}):v=hl().x(Qu).y1(Yu).y0(function(I){return I.base.y}),v.defined(Pl).curve(m),v(B)}return s==="vertical"&&le(p)?v=hl().y(Yu).x1(Qu).x0(p):le(p)?v=hl().x(Qu).y1(Yu).y0(p):v=U3().x(Qu).y(Yu),v.defined(Pl).curve(m),v(d)},Ca=function(n){var t=n.className,r=n.points,a=n.path,i=n.pathRef;if((!r||!r.length)&&!a)return null;var p=r&&r.length?AF(n):a;return D.createElement("path",wg({},Se(n,!1),kl(n),{className:Ee("recharts-curve",t),d:p,ref:i}))},Qh={exports:{}},Yh,$4;function _F(){if($4)return Yh;$4=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Yh=e,Yh}var Xh,L4;function OF(){if(L4)return Xh;L4=1;var e=_F();function n(){}function t(){}return t.resetWarningCache=n,Xh=function(){function r(p,s,c,f,m,d){if(d!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:n};return i.PropTypes=i,i},Xh}var F4;function HF(){return F4||(F4=1,Qh.exports=OF()()),Qh.exports}var CF=HF();const Ye=Xe(CF),{getOwnPropertyNames:NF,getOwnPropertySymbols:RF}=Object,{hasOwnProperty:kF}=Object.prototype;function Zh(e,n){return function(r,a,i){return e(r,a,i)&&n(r,a,i)}}function Wl(e){return function(t,r,a){if(!t||!r||typeof t!="object"||typeof r!="object")return e(t,r,a);const{cache:i}=a,p=i.get(t),s=i.get(r);if(p&&s)return p===r&&s===t;i.set(t,r),i.set(r,t);const c=e(t,r,a);return i.delete(t),i.delete(r),c}}function TF(e){return e!=null?e[Symbol.toStringTag]:void 0}function q4(e){return NF(e).concat(RF(e))}const EF=Object.hasOwn||((e,n)=>kF.call(e,n));function Wo(e,n){return e===n||!e&&!n&&e!==e&&n!==n}const DF="__v",jF="__o",$F="_owner",{getOwnPropertyDescriptor:z4,keys:U4}=Object;function LF(e,n){return e.byteLength===n.byteLength&&s0(new Uint8Array(e),new Uint8Array(n))}function FF(e,n,t){let r=e.length;if(n.length!==r)return!1;for(;r-- >0;)if(!t.equals(e[r],n[r],r,r,e,n,t))return!1;return!0}function qF(e,n){return e.byteLength===n.byteLength&&s0(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}function zF(e,n){return Wo(e.getTime(),n.getTime())}function UF(e,n){return e.name===n.name&&e.message===n.message&&e.cause===n.cause&&e.stack===n.stack}function VF(e,n){return e===n}function V4(e,n,t){const r=e.size;if(r!==n.size)return!1;if(!r)return!0;const a=new Array(r),i=e.entries();let p,s,c=0;for(;(p=i.next())&&!p.done;){const f=n.entries();let m=!1,d=0;for(;(s=f.next())&&!s.done;){if(a[d]){d++;continue}const v=p.value,y=s.value;if(t.equals(v[0],y[0],c,d,e,n,t)&&t.equals(v[1],y[1],v[0],y[0],e,n,t)){m=a[d]=!0;break}d++}if(!m)return!1;c++}return!0}const GF=Wo;function KF(e,n,t){const r=U4(e);let a=r.length;if(U4(n).length!==a)return!1;for(;a-- >0;)if(!GM(e,n,t,r[a]))return!1;return!0}function Xu(e,n,t){const r=q4(e);let a=r.length;if(q4(n).length!==a)return!1;let i,p,s;for(;a-- >0;)if(i=r[a],!GM(e,n,t,i)||(p=z4(e,i),s=z4(n,i),(p||s)&&(!p||!s||p.configurable!==s.configurable||p.enumerable!==s.enumerable||p.writable!==s.writable)))return!1;return!0}function QF(e,n){return Wo(e.valueOf(),n.valueOf())}function YF(e,n){return e.source===n.source&&e.flags===n.flags}function G4(e,n,t){const r=e.size;if(r!==n.size)return!1;if(!r)return!0;const a=new Array(r),i=e.values();let p,s;for(;(p=i.next())&&!p.done;){const c=n.values();let f=!1,m=0;for(;(s=c.next())&&!s.done;){if(!a[m]&&t.equals(p.value,s.value,p.value,s.value,e,n,t)){f=a[m]=!0;break}m++}if(!f)return!1}return!0}function s0(e,n){let t=e.byteLength;if(n.byteLength!==t||e.byteOffset!==n.byteOffset)return!1;for(;t-- >0;)if(e[t]!==n[t])return!1;return!0}function XF(e,n){return e.hostname===n.hostname&&e.pathname===n.pathname&&e.protocol===n.protocol&&e.port===n.port&&e.hash===n.hash&&e.username===n.username&&e.password===n.password}function GM(e,n,t,r){return(r===$F||r===jF||r===DF)&&(e.$$typeof||n.$$typeof)?!0:EF(n,r)&&t.equals(e[r],n[r],r,r,e,n,t)}const ZF="[object ArrayBuffer]",JF="[object Arguments]",eq="[object Boolean]",nq="[object DataView]",tq="[object Date]",rq="[object Error]",aq="[object Map]",oq="[object Number]",iq="[object Object]",uq="[object RegExp]",pq="[object Set]",sq="[object String]",lq={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},cq="[object URL]",fq=Object.prototype.toString;function dq({areArrayBuffersEqual:e,areArraysEqual:n,areDataViewsEqual:t,areDatesEqual:r,areErrorsEqual:a,areFunctionsEqual:i,areMapsEqual:p,areNumbersEqual:s,areObjectsEqual:c,arePrimitiveWrappersEqual:f,areRegExpsEqual:m,areSetsEqual:d,areTypedArraysEqual:v,areUrlsEqual:y,unknownTagComparators:B}){return function(b,W,M){if(b===W)return!0;if(b==null||W==null)return!1;const A=typeof b;if(A!==typeof W)return!1;if(A!=="object")return A==="number"?s(b,W,M):A==="function"?i(b,W,M):!1;const O=b.constructor;if(O!==W.constructor)return!1;if(O===Object)return c(b,W,M);if(Array.isArray(b))return n(b,W,M);if(O===Date)return r(b,W,M);if(O===RegExp)return m(b,W,M);if(O===Map)return p(b,W,M);if(O===Set)return d(b,W,M);const w=fq.call(b);if(w===tq)return r(b,W,M);if(w===uq)return m(b,W,M);if(w===aq)return p(b,W,M);if(w===pq)return d(b,W,M);if(w===iq)return typeof b.then!="function"&&typeof W.then!="function"&&c(b,W,M);if(w===cq)return y(b,W,M);if(w===rq)return a(b,W,M);if(w===JF)return c(b,W,M);if(lq[w])return v(b,W,M);if(w===ZF)return e(b,W,M);if(w===nq)return t(b,W,M);if(w===eq||w===oq||w===sq)return f(b,W,M);if(B){let S=B[w];if(!S){const N=TF(b);N&&(S=B[N])}if(S)return S(b,W,M)}return!1}}function mq({circular:e,createCustomConfig:n,strict:t}){let r={areArrayBuffersEqual:LF,areArraysEqual:t?Xu:FF,areDataViewsEqual:qF,areDatesEqual:zF,areErrorsEqual:UF,areFunctionsEqual:VF,areMapsEqual:t?Zh(V4,Xu):V4,areNumbersEqual:GF,areObjectsEqual:t?Xu:KF,arePrimitiveWrappersEqual:QF,areRegExpsEqual:YF,areSetsEqual:t?Zh(G4,Xu):G4,areTypedArraysEqual:t?Zh(s0,Xu):s0,areUrlsEqual:XF,unknownTagComparators:void 0};if(n&&(r=Object.assign({},r,n(r))),e){const a=Wl(r.areArraysEqual),i=Wl(r.areMapsEqual),p=Wl(r.areObjectsEqual),s=Wl(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:a,areMapsEqual:i,areObjectsEqual:p,areSetsEqual:s})}return r}function hq(e){return function(n,t,r,a,i,p,s){return e(n,t,s)}}function vq({circular:e,comparator:n,createState:t,equals:r,strict:a}){if(t)return function(s,c){const{cache:f=e?new WeakMap:void 0,meta:m}=t();return n(s,c,{cache:f,equals:r,meta:m,strict:a})};if(e)return function(s,c){return n(s,c,{cache:new WeakMap,equals:r,meta:void 0,strict:a})};const i={cache:void 0,equals:r,meta:void 0,strict:a};return function(s,c){return n(s,c,i)}}const gq=Fa();Fa({strict:!0});Fa({circular:!0});Fa({circular:!0,strict:!0});Fa({createInternalComparator:()=>Wo});Fa({strict:!0,createInternalComparator:()=>Wo});Fa({circular:!0,createInternalComparator:()=>Wo});Fa({circular:!0,createInternalComparator:()=>Wo,strict:!0});function Fa(e={}){const{circular:n=!1,createInternalComparator:t,createState:r,strict:a=!1}=e,i=mq(e),p=dq(i),s=t?t(p):hq(p);return vq({circular:n,comparator:p,createState:r,equals:s,strict:a})}function yq(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function K4(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=-1,r=function a(i){t<0&&(t=i),i-t>n?(e(i),t=-1):yq(a)};requestAnimationFrame(r)}function Pg(e){"@babel/helpers - typeof";return Pg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pg(e)}function bq(e){return wq(e)||xq(e)||Bq(e)||Iq()}function Iq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bq(e,n){if(e){if(typeof e=="string")return Q4(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q4(e,n)}}function Q4(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function xq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wq(e){if(Array.isArray(e))return e}function Pq(){var e={},n=function(){return null},t=!1,r=function a(i){if(!t){if(Array.isArray(i)){if(!i.length)return;var p=i,s=bq(p),c=s[0],f=s.slice(1);if(typeof c=="number"){K4(a.bind(null,f),c);return}a(c),K4(a.bind(null,f));return}Pg(i)==="object"&&(e=i,n(e)),typeof i=="function"&&i()}};return{stop:function(){t=!0},start:function(i){t=!1,r(i)},subscribe:function(i){return n=i,function(){n=function(){return null}}}}}function kp(e){"@babel/helpers - typeof";return kp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},kp(e)}function Y4(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function X4(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Y4(Object(t),!0).forEach(function(r){KM(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y4(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function KM(e,n,t){return n=Wq(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Wq(e){var n=Sq(e,"string");return kp(n)==="symbol"?n:String(n)}function Sq(e,n){if(kp(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(kp(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Mq=function(n,t){return[Object.keys(n),Object.keys(t)].reduce(function(r,a){return r.filter(function(i){return a.includes(i)})})},Aq=function(n){return n},_q=function(n){return n.replace(/([A-Z])/g,function(t){return"-".concat(t.toLowerCase())})},ip=function(n,t){return Object.keys(t).reduce(function(r,a){return X4(X4({},r),{},KM({},a,n(a,t[a])))},{})},Z4=function(n,t,r){return n.map(function(a){return"".concat(_q(a)," ").concat(t,"ms ").concat(r)}).join(",")};function Oq(e,n){return Nq(e)||Cq(e,n)||QM(e,n)||Hq()}function Hq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cq(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function Nq(e){if(Array.isArray(e))return e}function Rq(e){return Eq(e)||Tq(e)||QM(e)||kq()}function kq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QM(e,n){if(e){if(typeof e=="string")return Wg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Wg(e,n)}}function Tq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Eq(e){if(Array.isArray(e))return Wg(e)}function Wg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var l0=1e-4,YM=function(n,t){return[0,3*n,3*t-6*n,3*n-3*t+1]},XM=function(n,t){return n.map(function(r,a){return r*Math.pow(t,a)}).reduce(function(r,a){return r+a})},J4=function(n,t){return function(r){var a=YM(n,t);return XM(a,r)}},Dq=function(n,t){return function(r){var a=YM(n,t),i=[].concat(Rq(a.map(function(p,s){return p*s}).slice(1)),[0]);return XM(i,r)}},e5=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var a=t[0],i=t[1],p=t[2],s=t[3];if(t.length===1)switch(t[0]){case"linear":a=0,i=0,p=1,s=1;break;case"ease":a=.25,i=.1,p=.25,s=1;break;case"ease-in":a=.42,i=0,p=1,s=1;break;case"ease-out":a=.42,i=0,p=.58,s=1;break;case"ease-in-out":a=0,i=0,p=.58,s=1;break;default:{var c=t[0].split("(");if(c[0]==="cubic-bezier"&&c[1].split(")")[0].split(",").length===4){var f=c[1].split(")")[0].split(",").map(function(b){return parseFloat(b)}),m=Oq(f,4);a=m[0],i=m[1],p=m[2],s=m[3]}}}var d=J4(a,p),v=J4(i,s),y=Dq(a,p),B=function(W){return W>1?1:W<0?0:W},I=function(W){for(var M=W>1?1:W,A=M,O=0;O<8;++O){var w=d(A)-M,S=y(A);if(Math.abs(w-M)<l0||S<l0)return v(A);A=B(A-w/S)}return v(A)};return I.isStepper=!1,I},jq=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.stiff,r=t===void 0?100:t,a=n.damping,i=a===void 0?8:a,p=n.dt,s=p===void 0?17:p,c=function(m,d,v){var y=-(m-d)*r,B=v*i,I=v+(y-B)*s/1e3,b=v*s/1e3+m;return Math.abs(b-d)<l0&&Math.abs(I)<l0?[d,0]:[b,I]};return c.isStepper=!0,c.dt=s,c},$q=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var a=t[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return e5(a);case"spring":return jq();default:if(a.split("(")[0]==="cubic-bezier")return e5(a)}return typeof a=="function"?a:null};function Tp(e){"@babel/helpers - typeof";return Tp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Tp(e)}function n5(e){return qq(e)||Fq(e)||ZM(e)||Lq()}function Lq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qq(e){if(Array.isArray(e))return Mg(e)}function t5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Kn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?t5(Object(t),!0).forEach(function(r){Sg(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):t5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Sg(e,n,t){return n=zq(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function zq(e){var n=Uq(e,"string");return Tp(n)==="symbol"?n:String(n)}function Uq(e,n){if(Tp(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Tp(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Vq(e,n){return Qq(e)||Kq(e,n)||ZM(e,n)||Gq()}function Gq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZM(e,n){if(e){if(typeof e=="string")return Mg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Mg(e,n)}}function Mg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Kq(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function Qq(e){if(Array.isArray(e))return e}var c0=function(n,t,r){return n+(t-n)*r},Ag=function(n){var t=n.from,r=n.to;return t!==r},Yq=function e(n,t,r){var a=ip(function(i,p){if(Ag(p)){var s=n(p.from,p.to,p.velocity),c=Vq(s,2),f=c[0],m=c[1];return Kn(Kn({},p),{},{from:f,velocity:m})}return p},t);return r<1?ip(function(i,p){return Ag(p)?Kn(Kn({},p),{},{velocity:c0(p.velocity,a[i].velocity,r),from:c0(p.from,a[i].from,r)}):p},t):e(n,a,r-1)};const Xq=(function(e,n,t,r,a){var i=Mq(e,n),p=i.reduce(function(b,W){return Kn(Kn({},b),{},Sg({},W,[e[W],n[W]]))},{}),s=i.reduce(function(b,W){return Kn(Kn({},b),{},Sg({},W,{from:e[W],velocity:0,to:n[W]}))},{}),c=-1,f,m,d=function(){return null},v=function(){return ip(function(W,M){return M.from},s)},y=function(){return!Object.values(s).filter(Ag).length},B=function(W){f||(f=W);var M=W-f,A=M/t.dt;s=Yq(t,s,A),a(Kn(Kn(Kn({},e),n),v())),f=W,y()||(c=requestAnimationFrame(d))},I=function(W){m||(m=W);var M=(W-m)/r,A=ip(function(w,S){return c0.apply(void 0,n5(S).concat([t(M)]))},p);if(a(Kn(Kn(Kn({},e),n),A)),M<1)c=requestAnimationFrame(d);else{var O=ip(function(w,S){return c0.apply(void 0,n5(S).concat([t(1)]))},p);a(Kn(Kn(Kn({},e),n),O))}};return d=t.isStepper?B:I,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(c)}}});function Wi(e){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Wi(e)}var Zq=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function Jq(e,n){if(e==null)return{};var t=ez(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function ez(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Jh(e){return az(e)||rz(e)||tz(e)||nz()}function nz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tz(e,n){if(e){if(typeof e=="string")return _g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _g(e,n)}}function rz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function az(e){if(Array.isArray(e))return _g(e)}function _g(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function r5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ar(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?r5(Object(t),!0).forEach(function(r){tp(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function tp(e,n,t){return n=JM(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function oz(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function iz(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,JM(r.key),r)}}function uz(e,n,t){return n&&iz(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function JM(e){var n=pz(e,"string");return Wi(n)==="symbol"?n:String(n)}function pz(e,n){if(Wi(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Wi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function sz(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Og(e,n)}function Og(e,n){return Og=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Og(e,n)}function lz(e){var n=cz();return function(){var r=f0(e),a;if(n){var i=f0(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Hg(this,a)}}function Hg(e,n){if(n&&(Wi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Cg(e)}function Cg(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function f0(e){return f0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f0(e)}var Kt=(function(e){sz(t,e);var n=lz(t);function t(r,a){var i;oz(this,t),i=n.call(this,r,a);var p=i.props,s=p.isActive,c=p.attributeName,f=p.from,m=p.to,d=p.steps,v=p.children,y=p.duration;if(i.handleStyleChange=i.handleStyleChange.bind(Cg(i)),i.changeStyle=i.changeStyle.bind(Cg(i)),!s||y<=0)return i.state={style:{}},typeof v=="function"&&(i.state={style:m}),Hg(i);if(d&&d.length)i.state={style:d[0].style};else if(f){if(typeof v=="function")return i.state={style:f},Hg(i);i.state={style:c?tp({},c,f):f}}else i.state={style:{}};return i}return uz(t,[{key:"componentDidMount",value:function(){var a=this.props,i=a.isActive,p=a.canBegin;this.mounted=!0,!(!i||!p)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var i=this.props,p=i.isActive,s=i.canBegin,c=i.attributeName,f=i.shouldReAnimate,m=i.to,d=i.from,v=this.state.style;if(s){if(!p){var y={style:c?tp({},c,m):m};this.state&&v&&(c&&v[c]!==m||!c&&v!==m)&&this.setState(y);return}if(!(gq(a.to,m)&&a.canBegin&&a.isActive)){var B=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var I=B||f?d:a.to;if(this.state&&v){var b={style:c?tp({},c,I):I};(c&&v[c]!==I||!c&&v!==I)&&this.setState(b)}this.runAnimation(ar(ar({},this.props),{},{from:I,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var i=this,p=a.from,s=a.to,c=a.duration,f=a.easing,m=a.begin,d=a.onAnimationEnd,v=a.onAnimationStart,y=Xq(p,s,$q(f),c,this.changeStyle),B=function(){i.stopJSAnimation=y()};this.manager.start([v,m,B,c,d])}},{key:"runStepAnimation",value:function(a){var i=this,p=a.steps,s=a.begin,c=a.onAnimationStart,f=p[0],m=f.style,d=f.duration,v=d===void 0?0:d,y=function(I,b,W){if(W===0)return I;var M=b.duration,A=b.easing,O=A===void 0?"ease":A,w=b.style,S=b.properties,N=b.onAnimationEnd,P=W>0?p[W-1]:b,H=S||Object.keys(w);if(typeof O=="function"||O==="spring")return[].concat(Jh(I),[i.runJSAnimation.bind(i,{from:P.style,to:w,duration:M,easing:O}),M]);var T=Z4(H,M,O),j=ar(ar(ar({},P.style),w),{},{transition:T});return[].concat(Jh(I),[j,M,N]).filter(Aq)};return this.manager.start([c].concat(Jh(p.reduce(y,[m,Math.max(v,s)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=Pq());var i=a.begin,p=a.duration,s=a.attributeName,c=a.to,f=a.easing,m=a.onAnimationStart,d=a.onAnimationEnd,v=a.steps,y=a.children,B=this.manager;if(this.unSubscribe=B.subscribe(this.handleStyleChange),typeof f=="function"||typeof y=="function"||f==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var I=s?tp({},s,c):c,b=Z4(Object.keys(I),p,f);B.start([m,i,ar(ar({},I),{},{transition:b}),p,d])}},{key:"render",value:function(){var a=this.props,i=a.children;a.begin;var p=a.duration;a.attributeName,a.easing;var s=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var c=Jq(a,Zq),f=K.Children.count(i),m=this.state.style;if(typeof i=="function")return i(m);if(!s||f===0||p<=0)return i;var d=function(y){var B=y.props,I=B.style,b=I===void 0?{}:I,W=B.className,M=K.cloneElement(y,ar(ar({},c),{},{style:ar(ar({},b),m),className:W}));return M};return f===1?d(K.Children.only(i)):D.createElement("div",null,K.Children.map(i,function(v){return d(v)}))}}]),t})(K.PureComponent);Kt.displayName="Animate";Kt.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Kt.propTypes={from:Ye.oneOfType([Ye.object,Ye.string]),to:Ye.oneOfType([Ye.object,Ye.string]),attributeName:Ye.string,duration:Ye.number,begin:Ye.number,easing:Ye.oneOfType([Ye.string,Ye.func]),steps:Ye.arrayOf(Ye.shape({duration:Ye.number.isRequired,style:Ye.object.isRequired,easing:Ye.oneOfType([Ye.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Ye.func]),properties:Ye.arrayOf("string"),onAnimationEnd:Ye.func})),children:Ye.oneOfType([Ye.node,Ye.func]),isActive:Ye.bool,canBegin:Ye.bool,onAnimationEnd:Ye.func,shouldReAnimate:Ye.bool,onAnimationStart:Ye.func,onAnimationReStart:Ye.func};function Ep(e){"@babel/helpers - typeof";return Ep=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ep(e)}function d0(){return d0=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d0.apply(this,arguments)}function fz(e,n){return vz(e)||hz(e,n)||mz(e,n)||dz()}function dz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mz(e,n){if(e){if(typeof e=="string")return a5(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a5(e,n)}}function a5(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function hz(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function vz(e){if(Array.isArray(e))return e}function o5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function i5(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o5(Object(t),!0).forEach(function(r){gz(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function gz(e,n,t){return n=yz(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function yz(e){var n=bz(e,"string");return Ep(n)=="symbol"?n:n+""}function bz(e,n){if(Ep(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ep(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var u5=function(n,t,r,a,i){var p=Math.min(Math.abs(r)/2,Math.abs(a)/2),s=a>=0?1:-1,c=r>=0?1:-1,f=a>=0&&r>=0||a<0&&r<0?1:0,m;if(p>0&&i instanceof Array){for(var d=[0,0,0,0],v=0,y=4;v<y;v++)d[v]=i[v]>p?p:i[v];m="M".concat(n,",").concat(t+s*d[0]),d[0]>0&&(m+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(f,",").concat(n+c*d[0],",").concat(t)),m+="L ".concat(n+r-c*d[1],",").concat(t),d[1]>0&&(m+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(f,`,
        `).concat(n+r,",").concat(t+s*d[1])),m+="L ".concat(n+r,",").concat(t+a-s*d[2]),d[2]>0&&(m+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(f,`,
        `).concat(n+r-c*d[2],",").concat(t+a)),m+="L ".concat(n+c*d[3],",").concat(t+a),d[3]>0&&(m+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(f,`,
        `).concat(n,",").concat(t+a-s*d[3])),m+="Z"}else if(p>0&&i===+i&&i>0){var B=Math.min(p,i);m="M ".concat(n,",").concat(t+s*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n+c*B,",").concat(t,`
            L `).concat(n+r-c*B,",").concat(t,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n+r,",").concat(t+s*B,`
            L `).concat(n+r,",").concat(t+a-s*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n+r-c*B,",").concat(t+a,`
            L `).concat(n+c*B,",").concat(t+a,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(n,",").concat(t+a-s*B," Z")}else m="M ".concat(n,",").concat(t," h ").concat(r," v ").concat(a," h ").concat(-r," Z");return m},Iz=function(n,t){if(!n||!t)return!1;var r=n.x,a=n.y,i=t.x,p=t.y,s=t.width,c=t.height;if(Math.abs(s)>0&&Math.abs(c)>0){var f=Math.min(i,i+s),m=Math.max(i,i+s),d=Math.min(p,p+c),v=Math.max(p,p+c);return r>=f&&r<=m&&a>=d&&a<=v}return!1},Bz={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},c6=function(n){var t=i5(i5({},Bz),n),r=K.useRef(),a=K.useState(-1),i=fz(a,2),p=i[0],s=i[1];K.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var O=r.current.getTotalLength();O&&s(O)}catch{}},[]);var c=t.x,f=t.y,m=t.width,d=t.height,v=t.radius,y=t.className,B=t.animationEasing,I=t.animationDuration,b=t.animationBegin,W=t.isAnimationActive,M=t.isUpdateAnimationActive;if(c!==+c||f!==+f||m!==+m||d!==+d||m===0||d===0)return null;var A=Ee("recharts-rectangle",y);return M?D.createElement(Kt,{canBegin:p>0,from:{width:m,height:d,x:c,y:f},to:{width:m,height:d,x:c,y:f},duration:I,animationEasing:B,isActive:M},function(O){var w=O.width,S=O.height,N=O.x,P=O.y;return D.createElement(Kt,{canBegin:p>0,from:"0px ".concat(p===-1?1:p,"px"),to:"".concat(p,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,isActive:W,easing:B},D.createElement("path",d0({},Se(t,!0),{className:A,d:u5(N,P,w,S,v),ref:r})))}):D.createElement("path",d0({},Se(t,!0),{className:A,d:u5(c,f,m,d,v)}))},xz=["points","className","baseLinePoints","connectNulls"];function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ii.apply(this,arguments)}function wz(e,n){if(e==null)return{};var t=Pz(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Pz(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function p5(e){return Az(e)||Mz(e)||Sz(e)||Wz()}function Wz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sz(e,n){if(e){if(typeof e=="string")return Ng(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ng(e,n)}}function Mz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Az(e){if(Array.isArray(e))return Ng(e)}function Ng(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var s5=function(n){return n&&n.x===+n.x&&n.y===+n.y},_z=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=[[]];return n.forEach(function(r){s5(r)?t[t.length-1].push(r):t[t.length-1].length>0&&t.push([])}),s5(n[0])&&t[t.length-1].push(n[0]),t[t.length-1].length<=0&&(t=t.slice(0,-1)),t},up=function(n,t){var r=_z(n);t&&(r=[r.reduce(function(i,p){return[].concat(p5(i),p5(p))},[])]);var a=r.map(function(i){return i.reduce(function(p,s,c){return"".concat(p).concat(c===0?"M":"L").concat(s.x,",").concat(s.y)},"")}).join("");return r.length===1?"".concat(a,"Z"):a},Oz=function(n,t,r){var a=up(n,r);return"".concat(a.slice(-1)==="Z"?a.slice(0,-1):a,"L").concat(up(t.reverse(),r).slice(1))},Hz=function(n){var t=n.points,r=n.className,a=n.baseLinePoints,i=n.connectNulls,p=wz(n,xz);if(!t||!t.length)return null;var s=Ee("recharts-polygon",r);if(a&&a.length){var c=p.stroke&&p.stroke!=="none",f=Oz(t,a,i);return D.createElement("g",{className:s},D.createElement("path",ii({},Se(p,!0),{fill:f.slice(-1)==="Z"?p.fill:"none",stroke:"none",d:f})),c?D.createElement("path",ii({},Se(p,!0),{fill:"none",d:up(t,i)})):null,c?D.createElement("path",ii({},Se(p,!0),{fill:"none",d:up(a,i)})):null)}var m=up(t,i);return D.createElement("path",ii({},Se(p,!0),{fill:m.slice(-1)==="Z"?p.fill:"none",className:s,d:m}))};function Rg(){return Rg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Rg.apply(this,arguments)}var ts=function(n){var t=n.cx,r=n.cy,a=n.r,i=n.className,p=Ee("recharts-dot",i);return t===+t&&r===+r&&a===+a?D.createElement("circle",Rg({},Se(n,!1),kl(n),{className:p,cx:t,cy:r,r:a})):null};function Dp(e){"@babel/helpers - typeof";return Dp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Dp(e)}var Cz=["x","y","top","left","width","height","className"];function kg(){return kg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},kg.apply(this,arguments)}function l5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Nz(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l5(Object(t),!0).forEach(function(r){Rz(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Rz(e,n,t){return n=kz(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function kz(e){var n=Tz(e,"string");return Dp(n)=="symbol"?n:n+""}function Tz(e,n){if(Dp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Dp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Ez(e,n){if(e==null)return{};var t=Dz(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Dz(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var jz=function(n,t,r,a,i,p){return"M".concat(n,",").concat(i,"v").concat(a,"M").concat(p,",").concat(t,"h").concat(r)},$z=function(n){var t=n.x,r=t===void 0?0:t,a=n.y,i=a===void 0?0:a,p=n.top,s=p===void 0?0:p,c=n.left,f=c===void 0?0:c,m=n.width,d=m===void 0?0:m,v=n.height,y=v===void 0?0:v,B=n.className,I=Ez(n,Cz),b=Nz({x:r,y:i,top:s,left:f,width:d,height:y},I);return!le(r)||!le(i)||!le(d)||!le(y)||!le(s)||!le(f)?null:D.createElement("path",kg({},Se(b,!0),{className:Ee("recharts-cross",B),d:jz(r,i,d,y,s,f)}))},ev,c5;function Lz(){if(c5)return ev;c5=1;var e=ic(),n=mM(),t=Mr();function r(a,i){return a&&a.length?e(a,t(i,2),n):void 0}return ev=r,ev}var Fz=Lz();const qz=Xe(Fz);var nv,f5;function zz(){if(f5)return nv;f5=1;var e=ic(),n=Mr(),t=hM();function r(a,i){return a&&a.length?e(a,n(i,2),t):void 0}return nv=r,nv}var Uz=zz();const Vz=Xe(Uz);var Gz=["cx","cy","angle","ticks","axisLine"],Kz=["ticks","tick","angle","tickFormatter","stroke"];function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Si(e)}function pp(){return pp=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pp.apply(this,arguments)}function d5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ao(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?d5(Object(t),!0).forEach(function(r){lc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function m5(e,n){if(e==null)return{};var t=Qz(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Qz(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function Yz(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function h5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,nA(r.key),r)}}function Xz(e,n,t){return n&&h5(e.prototype,n),t&&h5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zz(e,n,t){return n=m0(n),Jz(e,eA()?Reflect.construct(n,t||[],m0(e).constructor):n.apply(e,t))}function Jz(e,n){if(n&&(Si(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eU(e)}function eU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(eA=function(){return!!e})()}function m0(e){return m0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m0(e)}function nU(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Tg(e,n)}function Tg(e,n){return Tg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Tg(e,n)}function lc(e,n,t){return n=nA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function nA(e){var n=tU(e,"string");return Si(n)=="symbol"?n:n+""}function tU(e,n){if(Si(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Si(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var cc=(function(e){function n(){return Yz(this,n),Zz(this,n,arguments)}return nU(n,e),Xz(n,[{key:"getTickValueCoord",value:function(r){var a=r.coordinate,i=this.props,p=i.angle,s=i.cx,c=i.cy;return on(s,c,a,p)}},{key:"getTickTextAnchor",value:function(){var r=this.props.orientation,a;switch(r){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var r=this.props,a=r.cx,i=r.cy,p=r.angle,s=r.ticks,c=qz(s,function(m){return m.coordinate||0}),f=Vz(s,function(m){return m.coordinate||0});return{cx:a,cy:i,startAngle:p,endAngle:p,innerRadius:f.coordinate||0,outerRadius:c.coordinate||0}}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,p=r.angle,s=r.ticks,c=r.axisLine,f=m5(r,Gz),m=s.reduce(function(B,I){return[Math.min(B[0],I.coordinate),Math.max(B[1],I.coordinate)]},[1/0,-1/0]),d=on(a,i,m[0],p),v=on(a,i,m[1],p),y=ao(ao(ao({},Se(f,!1)),{},{fill:"none"},Se(c,!1)),{},{x1:d.x,y1:d.y,x2:v.x,y2:v.y});return D.createElement("line",pp({className:"recharts-polar-radius-axis-line"},y))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,p=a.tick,s=a.angle,c=a.tickFormatter,f=a.stroke,m=m5(a,Kz),d=this.getTickTextAnchor(),v=Se(m,!1),y=Se(p,!1),B=i.map(function(I,b){var W=r.getTickValueCoord(I),M=ao(ao(ao(ao({textAnchor:d,transform:"rotate(".concat(90-s,", ").concat(W.x,", ").concat(W.y,")")},v),{},{stroke:"none",fill:f},y),{},{index:b},W),{},{payload:I});return D.createElement(je,pp({className:Ee("recharts-polar-radius-axis-tick",qM(p)),key:"tick-".concat(I.coordinate)},Ra(r.props,I,b)),n.renderTickItem(p,M,c?c(I.value,b):I.value))});return D.createElement(je,{className:"recharts-polar-radius-axis-ticks"},B)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.axisLine,p=r.tick;return!a||!a.length?null:D.createElement(je,{className:Ee("recharts-polar-radius-axis",this.props.className)},i&&this.renderAxisLine(),p&&this.renderTicks(),zn.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(r,a,i){var p;return D.isValidElement(r)?p=D.cloneElement(r,a):Ce(r)?p=r(a):p=D.createElement(yo,pp({},a,{className:"recharts-polar-radius-axis-tick-value"}),i),p}}])})(K.PureComponent);lc(cc,"displayName","PolarRadiusAxis");lc(cc,"axisType","radiusAxis");lc(cc,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Mi(e){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Mi(e)}function so(){return so=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},so.apply(this,arguments)}function v5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function oo(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?v5(Object(t),!0).forEach(function(r){fc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function rU(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function g5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,rA(r.key),r)}}function aU(e,n,t){return n&&g5(e.prototype,n),t&&g5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function oU(e,n,t){return n=h0(n),iU(e,tA()?Reflect.construct(n,t||[],h0(e).constructor):n.apply(e,t))}function iU(e,n){if(n&&(Mi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uU(e)}function uU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(tA=function(){return!!e})()}function h0(e){return h0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h0(e)}function pU(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Eg(e,n)}function Eg(e,n){return Eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Eg(e,n)}function fc(e,n,t){return n=rA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function rA(e){var n=sU(e,"string");return Mi(n)=="symbol"?n:n+""}function sU(e,n){if(Mi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var lU=Math.PI/180,y5=1e-5,dc=(function(e){function n(){return rU(this,n),oU(this,n,arguments)}return pU(n,e),aU(n,[{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.cx,p=a.cy,s=a.radius,c=a.orientation,f=a.tickSize,m=f||8,d=on(i,p,s,r.coordinate),v=on(i,p,s+(c==="inner"?-1:1)*m,r.coordinate);return{x1:d.x,y1:d.y,x2:v.x,y2:v.y}}},{key:"getTickTextAnchor",value:function(r){var a=this.props.orientation,i=Math.cos(-r.coordinate*lU),p;return i>y5?p=a==="outer"?"start":"end":i<-y5?p=a==="outer"?"end":"start":p="middle",p}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,p=r.radius,s=r.axisLine,c=r.axisLineType,f=oo(oo({},Se(this.props,!1)),{},{fill:"none"},Se(s,!1));if(c==="circle")return D.createElement(ts,so({className:"recharts-polar-angle-axis-line"},f,{cx:a,cy:i,r:p}));var m=this.props.ticks,d=m.map(function(v){return on(a,i,p,v.coordinate)});return D.createElement(Hz,so({className:"recharts-polar-angle-axis-line"},f,{points:d}))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,p=a.tick,s=a.tickLine,c=a.tickFormatter,f=a.stroke,m=Se(this.props,!1),d=Se(p,!1),v=oo(oo({},m),{},{fill:"none"},Se(s,!1)),y=i.map(function(B,I){var b=r.getTickLineCoord(B),W=r.getTickTextAnchor(B),M=oo(oo(oo({textAnchor:W},m),{},{stroke:"none",fill:f},d),{},{index:I,payload:B,x:b.x2,y:b.y2});return D.createElement(je,so({className:Ee("recharts-polar-angle-axis-tick",qM(p)),key:"tick-".concat(B.coordinate)},Ra(r.props,B,I)),s&&D.createElement("line",so({className:"recharts-polar-angle-axis-tick-line"},v,b)),p&&n.renderTickItem(p,M,c?c(B.value,I):B.value))});return D.createElement(je,{className:"recharts-polar-angle-axis-ticks"},y)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.radius,p=r.axisLine;return i<=0||!a||!a.length?null:D.createElement(je,{className:Ee("recharts-polar-angle-axis",this.props.className)},p&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(r,a,i){var p;return D.isValidElement(r)?p=D.cloneElement(r,a):Ce(r)?p=r(a):p=D.createElement(yo,so({},a,{className:"recharts-polar-angle-axis-tick-value"}),i),p}}])})(K.PureComponent);fc(dc,"displayName","PolarAngleAxis");fc(dc,"axisType","angleAxis");fc(dc,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var tv,b5;function cU(){if(b5)return tv;b5=1;var e=mS(),n=e(Object.getPrototypeOf,Object);return tv=n,tv}var rv,I5;function fU(){if(I5)return rv;I5=1;var e=Yr(),n=cU(),t=Xr(),r="[object Object]",a=Function.prototype,i=Object.prototype,p=a.toString,s=i.hasOwnProperty,c=p.call(Object);function f(m){if(!t(m)||e(m)!=r)return!1;var d=n(m);if(d===null)return!0;var v=s.call(d,"constructor")&&d.constructor;return typeof v=="function"&&v instanceof v&&p.call(v)==c}return rv=f,rv}var dU=fU();const mU=Xe(dU);var av,B5;function hU(){if(B5)return av;B5=1;var e=Yr(),n=Xr(),t="[object Boolean]";function r(a){return a===!0||a===!1||n(a)&&e(a)==t}return av=r,av}var vU=hU();const gU=Xe(vU);function jp(e){"@babel/helpers - typeof";return jp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jp(e)}function v0(){return v0=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v0.apply(this,arguments)}function yU(e,n){return xU(e)||BU(e,n)||IU(e,n)||bU()}function bU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IU(e,n){if(e){if(typeof e=="string")return x5(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x5(e,n)}}function x5(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function BU(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function xU(e){if(Array.isArray(e))return e}function w5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function P5(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?w5(Object(t),!0).forEach(function(r){wU(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function wU(e,n,t){return n=PU(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function PU(e){var n=WU(e,"string");return jp(n)=="symbol"?n:n+""}function WU(e,n){if(jp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(jp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var W5=function(n,t,r,a,i){var p=r-a,s;return s="M ".concat(n,",").concat(t),s+="L ".concat(n+r,",").concat(t),s+="L ".concat(n+r-p/2,",").concat(t+i),s+="L ".concat(n+r-p/2-a,",").concat(t+i),s+="L ".concat(n,",").concat(t," Z"),s},SU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},MU=function(n){var t=P5(P5({},SU),n),r=K.useRef(),a=K.useState(-1),i=yU(a,2),p=i[0],s=i[1];K.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var A=r.current.getTotalLength();A&&s(A)}catch{}},[]);var c=t.x,f=t.y,m=t.upperWidth,d=t.lowerWidth,v=t.height,y=t.className,B=t.animationEasing,I=t.animationDuration,b=t.animationBegin,W=t.isUpdateAnimationActive;if(c!==+c||f!==+f||m!==+m||d!==+d||v!==+v||m===0&&d===0||v===0)return null;var M=Ee("recharts-trapezoid",y);return W?D.createElement(Kt,{canBegin:p>0,from:{upperWidth:0,lowerWidth:0,height:v,x:c,y:f},to:{upperWidth:m,lowerWidth:d,height:v,x:c,y:f},duration:I,animationEasing:B,isActive:W},function(A){var O=A.upperWidth,w=A.lowerWidth,S=A.height,N=A.x,P=A.y;return D.createElement(Kt,{canBegin:p>0,from:"0px ".concat(p===-1?1:p,"px"),to:"".concat(p,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,easing:B},D.createElement("path",v0({},Se(t,!0),{className:M,d:W5(N,P,O,w,S),ref:r})))}):D.createElement("g",null,D.createElement("path",v0({},Se(t,!0),{className:M,d:W5(c,f,m,d,v)})))},AU=["option","shapeType","propTransformer","activeClassName","isActive"];function $p(e){"@babel/helpers - typeof";return $p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$p(e)}function _U(e,n){if(e==null)return{};var t=OU(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function OU(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function S5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function g0(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?S5(Object(t),!0).forEach(function(r){HU(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function HU(e,n,t){return n=CU(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function CU(e){var n=NU(e,"string");return $p(n)=="symbol"?n:n+""}function NU(e,n){if($p(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if($p(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function RU(e,n){return g0(g0({},n),e)}function kU(e,n){return e==="symbols"}function M5(e){var n=e.shapeType,t=e.elementProps;switch(n){case"rectangle":return D.createElement(c6,t);case"trapezoid":return D.createElement(MU,t);case"sector":return D.createElement(VM,t);case"symbols":if(kU(n))return D.createElement(Y0,t);break;default:return null}}function TU(e){return K.isValidElement(e)?e.props:e}function y0(e){var n=e.option,t=e.shapeType,r=e.propTransformer,a=r===void 0?RU:r,i=e.activeClassName,p=i===void 0?"recharts-active-shape":i,s=e.isActive,c=_U(e,AU),f;if(K.isValidElement(n))f=K.cloneElement(n,g0(g0({},c),TU(n)));else if(Ce(n))f=n(c);else if(mU(n)&&!gU(n)){var m=a(n,c);f=D.createElement(M5,{shapeType:t,elementProps:m})}else{var d=c;f=D.createElement(M5,{shapeType:t,elementProps:d})}return s?D.createElement(je,{className:p},f):f}function mc(e,n){return n!=null&&"trapezoids"in e.props}function hc(e,n){return n!=null&&"sectors"in e.props}function Lp(e,n){return n!=null&&"points"in e.props}function EU(e,n){var t,r,a=e.x===(n==null||(t=n.labelViewBox)===null||t===void 0?void 0:t.x)||e.x===n.x,i=e.y===(n==null||(r=n.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===n.y;return a&&i}function DU(e,n){var t=e.endAngle===n.endAngle,r=e.startAngle===n.startAngle;return t&&r}function jU(e,n){var t=e.x===n.x,r=e.y===n.y,a=e.z===n.z;return t&&r&&a}function $U(e,n){var t;return mc(e,n)?t=EU:hc(e,n)?t=DU:Lp(e,n)&&(t=jU),t}function LU(e,n){var t;return mc(e,n)?t="trapezoids":hc(e,n)?t="sectors":Lp(e,n)&&(t="points"),t}function FU(e,n){if(mc(e,n)){var t;return(t=n.tooltipPayload)===null||t===void 0||(t=t[0])===null||t===void 0||(t=t.payload)===null||t===void 0?void 0:t.payload}if(hc(e,n)){var r;return(r=n.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return Lp(e,n)?n.payload:{}}function qU(e){var n=e.activeTooltipItem,t=e.graphicalItem,r=e.itemData,a=LU(t,n),i=FU(t,n),p=r.filter(function(c,f){var m=ka(i,c),d=t.props[a].filter(function(B){var I=$U(t,n);return I(B,n)}),v=t.props[a].indexOf(d[d.length-1]),y=f===v;return m&&y}),s=r.indexOf(p[p.length-1]);return s}var _l;function Ai(e){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ai(e)}function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ui.apply(this,arguments)}function A5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function rn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?A5(Object(t),!0).forEach(function(r){qt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function zU(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,oA(r.key),r)}}function UU(e,n,t){return n&&_5(e.prototype,n),t&&_5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function VU(e,n,t){return n=b0(n),GU(e,aA()?Reflect.construct(n,t||[],b0(e).constructor):n.apply(e,t))}function GU(e,n){if(n&&(Ai(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return KU(e)}function KU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function aA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(aA=function(){return!!e})()}function b0(e){return b0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b0(e)}function QU(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Dg(e,n)}function Dg(e,n){return Dg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Dg(e,n)}function qt(e,n,t){return n=oA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function oA(e){var n=YU(e,"string");return Ai(n)=="symbol"?n:n+""}function YU(e,n){if(Ai(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ai(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ea=(function(e){function n(t){var r;return zU(this,n),r=VU(this,n,[t]),qt(r,"pieRef",null),qt(r,"sectorRefs",[]),qt(r,"id",ja("recharts-pie-")),qt(r,"handleAnimationEnd",function(){var a=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),Ce(a)&&a()}),qt(r,"handleAnimationStart",function(){var a=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),Ce(a)&&a()}),r.state={isAnimationFinished:!t.isAnimationActive,prevIsAnimationActive:t.isAnimationActive,prevAnimationId:t.animationId,sectorToFocus:0},r}return QU(n,e),UU(n,[{key:"isActiveIndex",value:function(r){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(r)!==-1:r===a}},{key:"hasActiveIndex",value:function(){var r=this.props.activeIndex;return Array.isArray(r)?r.length!==0:r||r===0}},{key:"renderLabels",value:function(r){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var i=this.props,p=i.label,s=i.labelLine,c=i.dataKey,f=i.valueKey,m=Se(this.props,!1),d=Se(p,!1),v=Se(s,!1),y=p&&p.offsetRadius||20,B=r.map(function(I,b){var W=(I.startAngle+I.endAngle)/2,M=on(I.cx,I.cy,I.outerRadius+y,W),A=rn(rn(rn(rn({},m),I),{},{stroke:"none"},d),{},{index:b,textAnchor:n.getTextAnchor(M.x,I.cx)},M),O=rn(rn(rn(rn({},m),I),{},{fill:"none",stroke:I.fill},v),{},{index:b,points:[on(I.cx,I.cy,I.outerRadius,W),M]}),w=c;return Ne(c)&&Ne(f)?w="value":Ne(c)&&(w=f),D.createElement(je,{key:"label-".concat(I.startAngle,"-").concat(I.endAngle,"-").concat(I.midAngle,"-").concat(b)},s&&n.renderLabelLineItem(s,O,"line"),n.renderLabelItem(p,A,ln(I,w)))});return D.createElement(je,{className:"recharts-pie-labels"},B)}},{key:"renderSectorsStatically",value:function(r){var a=this,i=this.props,p=i.activeShape,s=i.blendStroke,c=i.inactiveShape;return r.map(function(f,m){if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&r.length!==1)return null;var d=a.isActiveIndex(m),v=c&&a.hasActiveIndex()?c:null,y=d?p:v,B=rn(rn({},f),{},{stroke:s?f.fill:f.stroke,tabIndex:-1});return D.createElement(je,ui({ref:function(b){b&&!a.sectorRefs.includes(b)&&a.sectorRefs.push(b)},tabIndex:-1,className:"recharts-pie-sector"},Ra(a.props,f,m),{key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(m)}),D.createElement(y0,ui({option:y,isActive:d,shapeType:"sector"},B)))})}},{key:"renderSectorsWithAnimation",value:function(){var r=this,a=this.props,i=a.sectors,p=a.isAnimationActive,s=a.animationBegin,c=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state,v=d.prevSectors,y=d.prevIsAnimationActive;return D.createElement(Kt,{begin:s,duration:c,isActive:p,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m,"-").concat(y),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(B){var I=B.t,b=[],W=i&&i[0],M=W.startAngle;return i.forEach(function(A,O){var w=v&&v[O],S=O>0?_t(A,"paddingAngle",0):0;if(w){var N=hn(w.endAngle-w.startAngle,A.endAngle-A.startAngle),P=rn(rn({},A),{},{startAngle:M+S,endAngle:M+N(I)+S});b.push(P),M=P.endAngle}else{var H=A.endAngle,T=A.startAngle,j=hn(0,H-T),k=j(I),F=rn(rn({},A),{},{startAngle:M+S,endAngle:M+k+S});b.push(F),M=F.endAngle}}),D.createElement(je,null,r.renderSectorsStatically(b))})}},{key:"attachKeyboardHandlers",value:function(r){var a=this;r.onkeydown=function(i){if(!i.altKey)switch(i.key){case"ArrowLeft":{var p=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[p].focus(),a.setState({sectorToFocus:p});break}case"ArrowRight":{var s=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[s].focus(),a.setState({sectorToFocus:s});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var r=this.props,a=r.sectors,i=r.isAnimationActive,p=this.state.prevSectors;return i&&a&&a.length&&(!p||!ka(p,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var r=this,a=this.props,i=a.hide,p=a.sectors,s=a.className,c=a.label,f=a.cx,m=a.cy,d=a.innerRadius,v=a.outerRadius,y=a.isAnimationActive,B=this.state.isAnimationFinished;if(i||!p||!p.length||!le(f)||!le(m)||!le(d)||!le(v))return null;var I=Ee("recharts-pie",s);return D.createElement(je,{tabIndex:this.props.rootTabIndex,className:I,ref:function(W){r.pieRef=W}},this.renderSectors(),c&&this.renderLabels(p),zn.renderCallByParent(this.props,null,!1),(!y||B)&&lr.renderCallByParent(this.props,p,!1))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return a.prevIsAnimationActive!==r.isAnimationActive?{prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:[],isAnimationFinished:!0}:r.isAnimationActive&&r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:r.sectors!==a.curSectors?{curSectors:r.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(r,a){return r>a?"start":r<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(r,a,i){if(D.isValidElement(r))return D.cloneElement(r,a);if(Ce(r))return r(a);var p=Ee("recharts-pie-label-line",typeof r!="boolean"?r.className:"");return D.createElement(Ca,ui({},a,{key:i,type:"linear",className:p}))}},{key:"renderLabelItem",value:function(r,a,i){if(D.isValidElement(r))return D.cloneElement(r,a);var p=i;if(Ce(r)&&(p=r(a),D.isValidElement(p)))return p;var s=Ee("recharts-pie-label-text",typeof r!="boolean"&&!Ce(r)?r.className:"");return D.createElement(yo,ui({},a,{alignmentBaseline:"middle",className:s}),p)}}])})(K.PureComponent);_l=ea;qt(ea,"displayName","Pie");qt(ea,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Zr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});qt(ea,"parseDeltaAngle",function(e,n){var t=ot(n-e),r=Math.min(Math.abs(n-e),360);return t*r});qt(ea,"getRealPieData",function(e){var n=e.data,t=e.children,r=Se(e,!1),a=pt(t,Xp);return n&&n.length?n.map(function(i,p){return rn(rn(rn({payload:i},r),i),a&&a[p]&&a[p].props)}):a&&a.length?a.map(function(i){return rn(rn({},r),i.props)}):[]});qt(ea,"parseCoordinateOfPie",function(e,n){var t=n.top,r=n.left,a=n.width,i=n.height,p=FM(a,i),s=r+it(e.cx,a,a/2),c=t+it(e.cy,i,i/2),f=it(e.innerRadius,p,0),m=it(e.outerRadius,p,p*.8),d=e.maxRadius||Math.sqrt(a*a+i*i)/2;return{cx:s,cy:c,innerRadius:f,outerRadius:m,maxRadius:d}});qt(ea,"getComposedData",function(e){var n=e.item,t=e.offset,r=n.type.defaultProps!==void 0?rn(rn({},n.type.defaultProps),n.props):n.props,a=_l.getRealPieData(r);if(!a||!a.length)return null;var i=r.cornerRadius,p=r.startAngle,s=r.endAngle,c=r.paddingAngle,f=r.dataKey,m=r.nameKey,d=r.valueKey,v=r.tooltipType,y=Math.abs(r.minAngle),B=_l.parseCoordinateOfPie(r,t),I=_l.parseDeltaAngle(p,s),b=Math.abs(I),W=f;Ne(f)&&Ne(d)?(sr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),W="value"):Ne(f)&&(sr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),W=d);var M=a.filter(function(P){return ln(P,W,0)!==0}).length,A=(b>=360?M:M-1)*c,O=b-M*y-A,w=a.reduce(function(P,H){var T=ln(H,W,0);return P+(le(T)?T:0)},0),S;if(w>0){var N;S=a.map(function(P,H){var T=ln(P,W,0),j=ln(P,m,H),k=(le(T)?T:0)/w,F;H?F=N.endAngle+ot(I)*c*(T!==0?1:0):F=p;var Q=F+ot(I)*((T!==0?y:0)+k*O),Y=(F+Q)/2,X=(B.innerRadius+B.outerRadius)/2,Z=[{name:j,value:T,payload:P,dataKey:W,type:v}],E=on(B.cx,B.cy,X,Y);return N=rn(rn(rn({percent:k,cornerRadius:i,name:j,tooltipPayload:Z,midAngle:Y,middleRadius:X,tooltipPosition:E},P),B),{},{value:ln(P,W),startAngle:F,endAngle:Q,payload:P,paddingAngle:ot(I)*c}),N})}return rn(rn({},B),{},{sectors:S,data:a})});var ov,O5;function XU(){if(O5)return ov;O5=1;var e=Math.ceil,n=Math.max;function t(r,a,i,p){for(var s=-1,c=n(e((a-r)/(i||1)),0),f=Array(c);c--;)f[p?c:++s]=r,r+=i;return f}return ov=t,ov}var iv,H5;function iA(){if(H5)return iv;H5=1;var e=OS(),n=1/0,t=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=e(a),a===n||a===-n){var i=a<0?-1:1;return i*t}return a===a?a:0}return iv=r,iv}var uv,C5;function ZU(){if(C5)return uv;C5=1;var e=XU(),n=J0(),t=iA();function r(a){return function(i,p,s){return s&&typeof s!="number"&&n(i,p,s)&&(p=s=void 0),i=t(i),p===void 0?(p=i,i=0):p=t(p),s=s===void 0?i<p?1:-1:t(s),e(i,p,s,a)}}return uv=r,uv}var pv,N5;function JU(){if(N5)return pv;N5=1;var e=ZU(),n=e();return pv=n,pv}var eV=JU();const I0=Xe(eV);function Fp(e){"@babel/helpers - typeof";return Fp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Fp(e)}function R5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function k5(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?R5(Object(t),!0).forEach(function(r){uA(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function uA(e,n,t){return n=nV(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function nV(e){var n=tV(e,"string");return Fp(n)=="symbol"?n:n+""}function tV(e,n){if(Fp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Fp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var rV=["Webkit","Moz","O","ms"],aV=function(n,t){var r=n.replace(/(\w)/,function(i){return i.toUpperCase()}),a=rV.reduce(function(i,p){return k5(k5({},i),{},uA({},p+r,t))},{});return a[n]=t,a};function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_i(e)}function B0(){return B0=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},B0.apply(this,arguments)}function T5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function sv(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?T5(Object(t),!0).forEach(function(r){Pt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function oV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function E5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,sA(r.key),r)}}function iV(e,n,t){return n&&E5(e.prototype,n),t&&E5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function uV(e,n,t){return n=x0(n),pV(e,pA()?Reflect.construct(n,t||[],x0(e).constructor):n.apply(e,t))}function pV(e,n){if(n&&(_i(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sV(e)}function sV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(pA=function(){return!!e})()}function x0(e){return x0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x0(e)}function lV(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&jg(e,n)}function jg(e,n){return jg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},jg(e,n)}function Pt(e,n,t){return n=sA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function sA(e){var n=cV(e,"string");return _i(n)=="symbol"?n:n+""}function cV(e,n){if(_i(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(_i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var fV=function(n){var t=n.data,r=n.startIndex,a=n.endIndex,i=n.x,p=n.width,s=n.travellerWidth;if(!t||!t.length)return{};var c=t.length,f=ap().domain(I0(0,c)).range([i,i+p-s]),m=f.domain().map(function(d){return f(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(a),scale:f,scaleValues:m}},D5=function(n){return n.changedTouches&&!!n.changedTouches.length},Oi=(function(e){function n(t){var r;return oV(this,n),r=uV(this,n,[t]),Pt(r,"handleDrag",function(a){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(a):r.state.isSlideMoving&&r.handleSlideDrag(a)}),Pt(r,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&r.handleDrag(a.changedTouches[0])}),Pt(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=r.props,i=a.endIndex,p=a.onDragEnd,s=a.startIndex;p==null||p({endIndex:i,startIndex:s})}),r.detachDragEndListener()}),Pt(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),Pt(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),Pt(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),Pt(r,"handleSlideDragStart",function(a){var i=D5(a)?a.changedTouches[0]:a;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:i.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return lV(n,e),iV(n,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var a=r.startX,i=r.endX,p=this.state.scaleValues,s=this.props,c=s.gap,f=s.data,m=f.length-1,d=Math.min(a,i),v=Math.max(a,i),y=n.getIndexInRange(p,d),B=n.getIndexInRange(p,v);return{startIndex:y-y%c,endIndex:B===m?m:B-B%c}}},{key:"getTextOfTick",value:function(r){var a=this.props,i=a.data,p=a.tickFormatter,s=a.dataKey,c=ln(i[r],s,r);return Ce(p)?p(c,r):c}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var a=this.state,i=a.slideMoveStartX,p=a.startX,s=a.endX,c=this.props,f=c.x,m=c.width,d=c.travellerWidth,v=c.startIndex,y=c.endIndex,B=c.onChange,I=r.pageX-i;I>0?I=Math.min(I,f+m-d-s,f+m-d-p):I<0&&(I=Math.max(I,f-p,f-s));var b=this.getIndex({startX:p+I,endX:s+I});(b.startIndex!==v||b.endIndex!==y)&&B&&B(b),this.setState({startX:p+I,endX:s+I,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,a){var i=D5(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:i.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var a=this.state,i=a.brushMoveStartX,p=a.movingTravellerId,s=a.endX,c=a.startX,f=this.state[p],m=this.props,d=m.x,v=m.width,y=m.travellerWidth,B=m.onChange,I=m.gap,b=m.data,W={startX:this.state.startX,endX:this.state.endX},M=r.pageX-i;M>0?M=Math.min(M,d+v-y-f):M<0&&(M=Math.max(M,d-f)),W[p]=f+M;var A=this.getIndex(W),O=A.startIndex,w=A.endIndex,S=function(){var P=b.length-1;return p==="startX"&&(s>c?O%I===0:w%I===0)||s<c&&w===P||p==="endX"&&(s>c?w%I===0:O%I===0)||s>c&&w===P};this.setState(Pt(Pt({},p,f+M),"brushMoveStartX",r.pageX),function(){B&&S()&&B(A)})}},{key:"handleTravellerMoveKeyboard",value:function(r,a){var i=this,p=this.state,s=p.scaleValues,c=p.startX,f=p.endX,m=this.state[a],d=s.indexOf(m);if(d!==-1){var v=d+r;if(!(v===-1||v>=s.length)){var y=s[v];a==="startX"&&y>=f||a==="endX"&&y<=c||this.setState(Pt({},a,y),function(){i.props.onChange(i.getIndex({startX:i.state.startX,endX:i.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,a=r.x,i=r.y,p=r.width,s=r.height,c=r.fill,f=r.stroke;return D.createElement("rect",{stroke:f,fill:c,x:a,y:i,width:p,height:s})}},{key:"renderPanorama",value:function(){var r=this.props,a=r.x,i=r.y,p=r.width,s=r.height,c=r.data,f=r.children,m=r.padding,d=K.Children.only(f);return d?D.cloneElement(d,{x:a,y:i,width:p,height:s,margin:m,compact:!0,data:c}):null}},{key:"renderTravellerLayer",value:function(r,a){var i,p,s=this,c=this.props,f=c.y,m=c.travellerWidth,d=c.height,v=c.traveller,y=c.ariaLabel,B=c.data,I=c.startIndex,b=c.endIndex,W=Math.max(r,this.props.x),M=sv(sv({},Se(this.props,!1)),{},{x:W,y:f,width:m,height:d}),A=y||"Min value: ".concat((i=B[I])===null||i===void 0?void 0:i.name,", Max value: ").concat((p=B[b])===null||p===void 0?void 0:p.name);return D.createElement(je,{tabIndex:0,role:"slider","aria-label":A,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(w){["ArrowLeft","ArrowRight"].includes(w.key)&&(w.preventDefault(),w.stopPropagation(),s.handleTravellerMoveKeyboard(w.key==="ArrowRight"?1:-1,a))},onFocus:function(){s.setState({isTravellerFocused:!0})},onBlur:function(){s.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},n.renderTraveller(v,M))}},{key:"renderSlide",value:function(r,a){var i=this.props,p=i.y,s=i.height,c=i.stroke,f=i.travellerWidth,m=Math.min(r,a)+f,d=Math.max(Math.abs(a-r)-f,0);return D.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:c,fillOpacity:.2,x:m,y:p,width:d,height:s})}},{key:"renderText",value:function(){var r=this.props,a=r.startIndex,i=r.endIndex,p=r.y,s=r.height,c=r.travellerWidth,f=r.stroke,m=this.state,d=m.startX,v=m.endX,y=5,B={pointerEvents:"none",fill:f};return D.createElement(je,{className:"recharts-brush-texts"},D.createElement(yo,B0({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,v)-y,y:p+s/2},B),this.getTextOfTick(a)),D.createElement(yo,B0({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,v)+c+y,y:p+s/2},B),this.getTextOfTick(i)))}},{key:"render",value:function(){var r=this.props,a=r.data,i=r.className,p=r.children,s=r.x,c=r.y,f=r.width,m=r.height,d=r.alwaysShowText,v=this.state,y=v.startX,B=v.endX,I=v.isTextActive,b=v.isSlideMoving,W=v.isTravellerMoving,M=v.isTravellerFocused;if(!a||!a.length||!le(s)||!le(c)||!le(f)||!le(m)||f<=0||m<=0)return null;var A=Ee("recharts-brush",i),O=D.Children.count(p)===1,w=aV("userSelect","none");return D.createElement(je,{className:A,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:w},this.renderBackground(),O&&this.renderPanorama(),this.renderSlide(y,B),this.renderTravellerLayer(y,"startX"),this.renderTravellerLayer(B,"endX"),(I||b||W||M||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var a=r.x,i=r.y,p=r.width,s=r.height,c=r.stroke,f=Math.floor(i+s/2)-1;return D.createElement(D.Fragment,null,D.createElement("rect",{x:a,y:i,width:p,height:s,fill:c,stroke:"none"}),D.createElement("line",{x1:a+1,y1:f,x2:a+p-1,y2:f,fill:"none",stroke:"#fff"}),D.createElement("line",{x1:a+1,y1:f+2,x2:a+p-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,a){var i;return D.isValidElement(r)?i=D.cloneElement(r,a):Ce(r)?i=r(a):i=n.renderDefaultTraveller(a),i}},{key:"getDerivedStateFromProps",value:function(r,a){var i=r.data,p=r.width,s=r.x,c=r.travellerWidth,f=r.updateId,m=r.startIndex,d=r.endIndex;if(i!==a.prevData||f!==a.prevUpdateId)return sv({prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:s,prevWidth:p},i&&i.length?fV({data:i,width:p,x:s,travellerWidth:c,startIndex:m,endIndex:d}):{scale:null,scaleValues:null});if(a.scale&&(p!==a.prevWidth||s!==a.prevX||c!==a.prevTravellerWidth)){a.scale.range([s,s+p-c]);var v=a.scale.domain().map(function(y){return a.scale(y)});return{prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:s,prevWidth:p,startX:a.scale(r.startIndex),endX:a.scale(r.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(r,a){for(var i=r.length,p=0,s=i-1;s-p>1;){var c=Math.floor((p+s)/2);r[c]>a?s=c:p=c}return a>=r[s]?s:p}}])})(K.PureComponent);Pt(Oi,"displayName","Brush");Pt(Oi,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var lv,j5;function dV(){if(j5)return lv;j5=1;var e=Ty();function n(t,r){var a;return e(t,function(i,p,s){return a=r(i,p,s),!a}),!!a}return lv=n,lv}var cv,$5;function mV(){if($5)return cv;$5=1;var e=uS(),n=Mr(),t=dV(),r=yt(),a=J0();function i(p,s,c){var f=r(p)?e:t;return c&&a(p,s,c)&&(s=void 0),f(p,n(s,3))}return cv=i,cv}var hV=mV();const vV=Xe(hV);var wr=function(n,t){var r=n.alwaysShow,a=n.ifOverflow;return r&&(a="extendDomain"),a===t},fv,L5;function gV(){if(L5)return fv;L5=1;var e=WS();function n(t,r,a){r=="__proto__"&&e?e(t,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):t[r]=a}return fv=n,fv}var dv,F5;function yV(){if(F5)return dv;F5=1;var e=gV(),n=wS(),t=Mr();function r(a,i){var p={};return i=t(i,3),n(a,function(s,c,f){e(p,c,i(s,c,f))}),p}return dv=r,dv}var bV=yV();const IV=Xe(bV);var mv,q5;function BV(){if(q5)return mv;q5=1;function e(n,t){for(var r=-1,a=n==null?0:n.length;++r<a;)if(!t(n[r],r,n))return!1;return!0}return mv=e,mv}var hv,z5;function xV(){if(z5)return hv;z5=1;var e=Ty();function n(t,r){var a=!0;return e(t,function(i,p,s){return a=!!r(i,p,s),a}),a}return hv=n,hv}var vv,U5;function wV(){if(U5)return vv;U5=1;var e=BV(),n=xV(),t=Mr(),r=yt(),a=J0();function i(p,s,c){var f=r(p)?e:n;return c&&a(p,s,c)&&(s=void 0),f(p,t(s,3))}return vv=i,vv}var PV=wV();const lA=Xe(PV);var WV=["x","y"];function qp(e){"@babel/helpers - typeof";return qp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qp(e)}function $g(){return $g=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},$g.apply(this,arguments)}function V5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Zu(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?V5(Object(t),!0).forEach(function(r){SV(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function SV(e,n,t){return n=MV(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function MV(e){var n=AV(e,"string");return qp(n)=="symbol"?n:n+""}function AV(e,n){if(qp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(qp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function _V(e,n){if(e==null)return{};var t=OV(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function OV(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function HV(e,n){var t=e.x,r=e.y,a=_V(e,WV),i="".concat(t),p=parseInt(i,10),s="".concat(r),c=parseInt(s,10),f="".concat(n.height||a.height),m=parseInt(f,10),d="".concat(n.width||a.width),v=parseInt(d,10);return Zu(Zu(Zu(Zu(Zu({},n),a),p?{x:p}:{}),c?{y:c}:{}),{},{height:m,width:v,name:n.name,radius:n.radius})}function G5(e){return D.createElement(y0,$g({shapeType:"rectangle",propTransformer:HV,activeClassName:"recharts-active-bar"},e))}var CV=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,a){if(typeof n=="number")return n;var i=typeof r=="number";return i?n(r,a):(i||Io(),t)}},NV=["value","background"],cA;function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Hi(e)}function RV(e,n){if(e==null)return{};var t=kV(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function kV(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function w0(){return w0=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},w0.apply(this,arguments)}function K5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function On(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?K5(Object(t),!0).forEach(function(r){Aa(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function TV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Q5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,dA(r.key),r)}}function EV(e,n,t){return n&&Q5(e.prototype,n),t&&Q5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function DV(e,n,t){return n=P0(n),jV(e,fA()?Reflect.construct(n,t||[],P0(e).constructor):n.apply(e,t))}function jV(e,n){if(n&&(Hi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $V(e)}function $V(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(fA=function(){return!!e})()}function P0(e){return P0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P0(e)}function LV(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Lg(e,n)}function Lg(e,n){return Lg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Lg(e,n)}function Aa(e,n,t){return n=dA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function dA(e){var n=FV(e,"string");return Hi(n)=="symbol"?n:n+""}function FV(e,n){if(Hi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Wr=(function(e){function n(){var t;TV(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=DV(this,n,[].concat(a)),Aa(t,"state",{isAnimationFinished:!1}),Aa(t,"id",ja("recharts-bar-")),Aa(t,"handleAnimationEnd",function(){var p=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),p&&p()}),Aa(t,"handleAnimationStart",function(){var p=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),p&&p()}),t}return LV(n,e),EV(n,[{key:"renderRectanglesStatically",value:function(r){var a=this,i=this.props,p=i.shape,s=i.dataKey,c=i.activeIndex,f=i.activeBar,m=Se(this.props,!1);return r&&r.map(function(d,v){var y=v===c,B=y?f:p,I=On(On(On({},m),d),{},{isActive:y,option:B,index:v,dataKey:s,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return D.createElement(je,w0({className:"recharts-bar-rectangle"},Ra(a.props,d,v),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(v)}),D.createElement(G5,I))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,a=this.props,i=a.data,p=a.layout,s=a.isAnimationActive,c=a.animationBegin,f=a.animationDuration,m=a.animationEasing,d=a.animationId,v=this.state.prevData;return D.createElement(Kt,{begin:c,duration:f,isActive:s,easing:m,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(y){var B=y.t,I=i.map(function(b,W){var M=v&&v[W];if(M){var A=hn(M.x,b.x),O=hn(M.y,b.y),w=hn(M.width,b.width),S=hn(M.height,b.height);return On(On({},b),{},{x:A(B),y:O(B),width:w(B),height:S(B)})}if(p==="horizontal"){var N=hn(0,b.height),P=N(B);return On(On({},b),{},{y:b.y+b.height-P,height:P})}var H=hn(0,b.width),T=H(B);return On(On({},b),{},{width:T})});return D.createElement(je,null,r.renderRectanglesStatically(I))})}},{key:"renderRectangles",value:function(){var r=this.props,a=r.data,i=r.isAnimationActive,p=this.state.prevData;return i&&a&&a.length&&(!p||!ka(p,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var r=this,a=this.props,i=a.data,p=a.dataKey,s=a.activeIndex,c=Se(this.props.background,!1);return i.map(function(f,m){f.value;var d=f.background,v=RV(f,NV);if(!d)return null;var y=On(On(On(On(On({},v),{},{fill:"#eee"},d),c),Ra(r.props,f,m)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:p,index:m,className:"recharts-bar-background-rectangle"});return D.createElement(G5,w0({key:"background-bar-".concat(m),option:r.props.background,isActive:m===s},y))})}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,p=i.data,s=i.xAxis,c=i.yAxis,f=i.layout,m=i.children,d=pt(m,nu);if(!d)return null;var v=f==="vertical"?p[0].height/2:p[0].width/2,y=function(b,W){var M=Array.isArray(b.value)?b.value[1]:b.value;return{x:b.x,y:b.y,value:M,errorVal:ln(b,W)}},B={clipPath:r?"url(#clipPath-".concat(a,")"):null};return D.createElement(je,B,d.map(function(I){return D.cloneElement(I,{key:"error-bar-".concat(a,"-").concat(I.props.dataKey),data:p,xAxis:s,yAxis:c,layout:f,offset:v,dataPointFormatter:y})}))}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.data,p=r.className,s=r.xAxis,c=r.yAxis,f=r.left,m=r.top,d=r.width,v=r.height,y=r.isAnimationActive,B=r.background,I=r.id;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,W=Ee("recharts-bar",p),M=s&&s.allowDataOverflow,A=c&&c.allowDataOverflow,O=M||A,w=Ne(I)?this.id:I;return D.createElement(je,{className:W},M||A?D.createElement("defs",null,D.createElement("clipPath",{id:"clipPath-".concat(w)},D.createElement("rect",{x:M?f:f-d/2,y:A?m:m-v/2,width:M?d:d*2,height:A?v:v*2}))):null,D.createElement(je,{className:"recharts-bar-rectangles",clipPath:O?"url(#clipPath-".concat(w,")"):null},B?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(O,w),(!y||b)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:a.curData}:r.data!==a.curData?{curData:r.data}:null}}])})(K.PureComponent);cA=Wr;Aa(Wr,"displayName","Bar");Aa(Wr,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});Aa(Wr,"getComposedData",function(e){var n=e.props,t=e.item,r=e.barPosition,a=e.bandSize,i=e.xAxis,p=e.yAxis,s=e.xAxisTicks,c=e.yAxisTicks,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,y=d9(r,t);if(!y)return null;var B=n.layout,I=t.type.defaultProps,b=I!==void 0?On(On({},I),t.props):t.props,W=b.dataKey,M=b.children,A=b.minPointSize,O=B==="horizontal"?p:i,w=f?O.scale.domain():null,S=I9({numericAxis:O}),N=pt(M,Xp),P=d.map(function(H,T){var j,k,F,Q,Y,X;f?j=m9(f[m+T],w):(j=ln(H,W),Array.isArray(j)||(j=[S,j]));var Z=CV(A,cA.defaultProps.minPointSize)(j[1],T);if(B==="horizontal"){var E,z=[p.scale(j[0]),p.scale(j[1])],V=z[0],R=z[1];k=w4({axis:i,ticks:s,bandSize:a,offset:y.offset,entry:H,index:T}),F=(E=R??V)!==null&&E!==void 0?E:void 0,Q=y.size;var L=V-R;if(Y=Number.isNaN(L)?0:L,X={x:k,y:p.y,width:Q,height:p.height},Math.abs(Z)>0&&Math.abs(Y)<Math.abs(Z)){var G=ot(Y||Z)*(Math.abs(Z)-Math.abs(Y));F-=G,Y+=G}}else{var ie=[i.scale(j[0]),i.scale(j[1])],oe=ie[0],he=ie[1];if(k=oe,F=w4({axis:p,ticks:c,bandSize:a,offset:y.offset,entry:H,index:T}),Q=he-oe,Y=y.size,X={x:i.x,y:F,width:i.width,height:Y},Math.abs(Z)>0&&Math.abs(Q)<Math.abs(Z)){var ge=ot(Q||Z)*(Math.abs(Z)-Math.abs(Q));Q+=ge}}return On(On(On({},H),{},{x:k,y:F,width:Q,height:Y,value:f?j:j[1],payload:H,background:X},N&&N[T]&&N[T].props),{},{tooltipPayload:[$M(t,H)],tooltipPosition:{x:k+Q/2,y:F+Y/2}})});return On({data:P,layout:B},v)});function zp(e){"@babel/helpers - typeof";return zp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},zp(e)}function qV(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Y5(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,mA(r.key),r)}}function zV(e,n,t){return n&&Y5(e.prototype,n),t&&Y5(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function X5(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function or(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?X5(Object(t),!0).forEach(function(r){vc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X5(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function vc(e,n,t){return n=mA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function mA(e){var n=UV(e,"string");return zp(n)=="symbol"?n:n+""}function UV(e,n){if(zp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(zp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var f6=function(n,t,r,a,i){var p=n.width,s=n.height,c=n.layout,f=n.children,m=Object.keys(t),d={left:r.left,leftMirror:r.left,right:p-r.right,rightMirror:p-r.right,top:r.top,topMirror:r.top,bottom:s-r.bottom,bottomMirror:s-r.bottom},v=!!Wt(f,Wr);return m.reduce(function(y,B){var I=t[B],b=I.orientation,W=I.domain,M=I.padding,A=M===void 0?{}:M,O=I.mirror,w=I.reversed,S="".concat(b).concat(O?"Mirror":""),N,P,H,T,j;if(I.type==="number"&&(I.padding==="gap"||I.padding==="no-gap")){var k=W[1]-W[0],F=1/0,Q=I.categoricalDomain.sort();if(Q.forEach(function(ie,oe){oe>0&&(F=Math.min((ie||0)-(Q[oe-1]||0),F))}),Number.isFinite(F)){var Y=F/k,X=I.layout==="vertical"?r.height:r.width;if(I.padding==="gap"&&(N=Y*X/2),I.padding==="no-gap"){var Z=it(n.barCategoryGap,Y*X),E=Y*X/2;N=E-Z-(E-Z)/X*Z}}}a==="xAxis"?P=[r.left+(A.left||0)+(N||0),r.left+r.width-(A.right||0)-(N||0)]:a==="yAxis"?P=c==="horizontal"?[r.top+r.height-(A.bottom||0),r.top+(A.top||0)]:[r.top+(A.top||0)+(N||0),r.top+r.height-(A.bottom||0)-(N||0)]:P=I.range,w&&(P=[P[1],P[0]]);var z=TM(I,i,v),V=z.scale,R=z.realScaleType;V.domain(W).range(P),EM(V);var L=DM(V,or(or({},I),{},{realScaleType:R}));a==="xAxis"?(j=b==="top"&&!O||b==="bottom"&&O,H=r.left,T=d[S]-j*I.height):a==="yAxis"&&(j=b==="left"&&!O||b==="right"&&O,H=d[S]-j*I.width,T=r.top);var G=or(or(or({},I),L),{},{realScaleType:R,x:H,y:T,scale:V,width:a==="xAxis"?r.width:I.width,height:a==="yAxis"?r.height:I.height});return G.bandSize=i0(G,L),!I.hide&&a==="xAxis"?d[S]+=(j?-1:1)*G.height:I.hide||(d[S]+=(j?-1:1)*G.width),or(or({},y),{},vc({},B,G))},{})},hA=function(n,t){var r=n.x,a=n.y,i=t.x,p=t.y;return{x:Math.min(r,i),y:Math.min(a,p),width:Math.abs(i-r),height:Math.abs(p-a)}},VV=function(n){var t=n.x1,r=n.y1,a=n.x2,i=n.y2;return hA({x:t,y:r},{x:a,y:i})},vA=(function(){function e(n){qV(this,e),this.scale=n}return zV(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.bandAware,i=r.position;if(t!==void 0){if(i)switch(i){case"start":return this.scale(t);case"middle":{var p=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+p}case"end":{var s=this.bandwidth?this.bandwidth():0;return this.scale(t)+s}default:return this.scale(t)}if(a){var c=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+c}return this.scale(t)}}},{key:"isInRange",value:function(t){var r=this.range(),a=r[0],i=r[r.length-1];return a<=i?t>=a&&t<=i:t>=i&&t<=a}}],[{key:"create",value:function(t){return new e(t)}}])})();vc(vA,"EPS",1e-4);var d6=function(n){var t=Object.keys(n).reduce(function(r,a){return or(or({},r),{},vc({},a,vA.create(n[a])))},{});return or(or({},t),{},{apply:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=i.bandAware,s=i.position;return IV(a,function(c,f){return t[f].apply(c,{bandAware:p,position:s})})},isInRange:function(a){return lA(a,function(i,p){return t[p].isInRange(i)})}})};function GV(e){return(e%180+180)%180}var KV=function(n){var t=n.width,r=n.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=GV(a),p=i*Math.PI/180,s=Math.atan(r/t),c=p>s&&p<Math.PI-s?r/Math.sin(p):t/Math.cos(p);return Math.abs(c)},gv,Z5;function QV(){if(Z5)return gv;Z5=1;var e=Mr(),n=Yp(),t=X0();function r(a){return function(i,p,s){var c=Object(i);if(!n(i)){var f=e(p,3);i=t(i),p=function(d){return f(c[d],d,c)}}var m=a(i,p,s);return m>-1?c[f?i[m]:m]:void 0}}return gv=r,gv}var yv,J5;function YV(){if(J5)return yv;J5=1;var e=iA();function n(t){var r=e(t),a=r%1;return r===r?a?r-a:r:0}return yv=n,yv}var bv,eW;function XV(){if(eW)return bv;eW=1;var e=yS(),n=Mr(),t=YV(),r=Math.max;function a(i,p,s){var c=i==null?0:i.length;if(!c)return-1;var f=s==null?0:t(s);return f<0&&(f=r(c+f,0)),e(i,n(p,3),f)}return bv=a,bv}var Iv,nW;function ZV(){if(nW)return Iv;nW=1;var e=QV(),n=XV(),t=e(n);return Iv=t,Iv}var JV=ZV();const eG=Xe(JV);var nG=N3();const tG=Xe(nG);var rG=tG(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),m6=K.createContext(void 0),h6=K.createContext(void 0),gA=K.createContext(void 0),yA=K.createContext({}),bA=K.createContext(void 0),IA=K.createContext(0),BA=K.createContext(0),tW=function(n){var t=n.state,r=t.xAxisMap,a=t.yAxisMap,i=t.offset,p=n.clipPathId,s=n.children,c=n.width,f=n.height,m=rG(i);return D.createElement(m6.Provider,{value:r},D.createElement(h6.Provider,{value:a},D.createElement(yA.Provider,{value:i},D.createElement(gA.Provider,{value:m},D.createElement(bA.Provider,{value:p},D.createElement(IA.Provider,{value:f},D.createElement(BA.Provider,{value:c},s)))))))},aG=function(){return K.useContext(bA)},xA=function(n){var t=K.useContext(m6);t==null&&Io();var r=t[n];return r==null&&Io(),r},oG=function(){var n=K.useContext(m6);return Sa(n)},iG=function(){var n=K.useContext(h6),t=eG(n,function(r){return lA(r.domain,Number.isFinite)});return t||Sa(n)},wA=function(n){var t=K.useContext(h6);t==null&&Io();var r=t[n];return r==null&&Io(),r},uG=function(){var n=K.useContext(gA);return n},pG=function(){return K.useContext(yA)},v6=function(){return K.useContext(BA)},g6=function(){return K.useContext(IA)};function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ci(e)}function sG(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function lG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,WA(r.key),r)}}function cG(e,n,t){return n&&lG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fG(e,n,t){return n=W0(n),dG(e,PA()?Reflect.construct(n,t||[],W0(e).constructor):n.apply(e,t))}function dG(e,n){if(n&&(Ci(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mG(e)}function mG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function PA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(PA=function(){return!!e})()}function W0(e){return W0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},W0(e)}function hG(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Fg(e,n)}function Fg(e,n){return Fg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Fg(e,n)}function rW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function aW(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?rW(Object(t),!0).forEach(function(r){y6(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function y6(e,n,t){return n=WA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function WA(e){var n=vG(e,"string");return Ci(n)=="symbol"?n:n+""}function vG(e,n){if(Ci(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ci(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function gG(e,n){return BG(e)||IG(e,n)||bG(e,n)||yG()}function yG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bG(e,n){if(e){if(typeof e=="string")return oW(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return oW(e,n)}}function oW(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function IG(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function BG(e){if(Array.isArray(e))return e}function qg(){return qg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},qg.apply(this,arguments)}var xG=function(n,t){var r;return D.isValidElement(n)?r=D.cloneElement(n,t):Ce(n)?r=n(t):r=D.createElement("line",qg({},t,{className:"recharts-reference-line-line"})),r},wG=function(n,t,r,a,i,p,s,c,f){var m=i.x,d=i.y,v=i.width,y=i.height;if(r){var B=f.y,I=n.y.apply(B,{position:p});if(wr(f,"discard")&&!n.y.isInRange(I))return null;var b=[{x:m+v,y:I},{x:m,y:I}];return c==="left"?b.reverse():b}if(t){var W=f.x,M=n.x.apply(W,{position:p});if(wr(f,"discard")&&!n.x.isInRange(M))return null;var A=[{x:M,y:d+y},{x:M,y:d}];return s==="top"?A.reverse():A}if(a){var O=f.segment,w=O.map(function(S){return n.apply(S,{position:p})});return wr(f,"discard")&&vV(w,function(S){return!n.isInRange(S)})?null:w}return null};function PG(e){var n=e.x,t=e.y,r=e.segment,a=e.xAxisId,i=e.yAxisId,p=e.shape,s=e.className,c=e.alwaysShow,f=aG(),m=xA(a),d=wA(i),v=uG();if(!f||!v)return null;sr(c===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var y=d6({x:m.scale,y:d.scale}),B=En(n),I=En(t),b=r&&r.length===2,W=wG(y,B,I,b,v,e.position,m.orientation,d.orientation,e);if(!W)return null;var M=gG(W,2),A=M[0],O=A.x,w=A.y,S=M[1],N=S.x,P=S.y,H=wr(e,"hidden")?"url(#".concat(f,")"):void 0,T=aW(aW({clipPath:H},Se(e,!0)),{},{x1:O,y1:w,x2:N,y2:P});return D.createElement(je,{className:Ee("recharts-reference-line",s)},xG(p,T),zn.renderCallByParent(e,VV({x1:O,y1:w,x2:N,y2:P})))}var b6=(function(e){function n(){return sG(this,n),fG(this,n,arguments)}return hG(n,e),cG(n,[{key:"render",value:function(){return D.createElement(PG,this.props)}}])})(D.Component);y6(b6,"displayName","ReferenceLine");y6(b6,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function zg(){return zg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},zg.apply(this,arguments)}function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ni(e)}function iW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function uW(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?iW(Object(t),!0).forEach(function(r){gc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):iW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function WG(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function SG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,MA(r.key),r)}}function MG(e,n,t){return n&&SG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function AG(e,n,t){return n=S0(n),_G(e,SA()?Reflect.construct(n,t||[],S0(e).constructor):n.apply(e,t))}function _G(e,n){if(n&&(Ni(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return OG(e)}function OG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function SA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SA=function(){return!!e})()}function S0(e){return S0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S0(e)}function HG(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Ug(e,n)}function Ug(e,n){return Ug=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ug(e,n)}function gc(e,n,t){return n=MA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function MA(e){var n=CG(e,"string");return Ni(n)=="symbol"?n:n+""}function CG(e,n){if(Ni(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var NG=function(n){var t=n.x,r=n.y,a=n.xAxis,i=n.yAxis,p=d6({x:a.scale,y:i.scale}),s=p.apply({x:t,y:r},{bandAware:!0});return wr(n,"discard")&&!p.isInRange(s)?null:s},yc=(function(e){function n(){return WG(this,n),AG(this,n,arguments)}return HG(n,e),MG(n,[{key:"render",value:function(){var r=this.props,a=r.x,i=r.y,p=r.r,s=r.alwaysShow,c=r.clipPathId,f=En(a),m=En(i);if(sr(s===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!m)return null;var d=NG(this.props);if(!d)return null;var v=d.x,y=d.y,B=this.props,I=B.shape,b=B.className,W=wr(this.props,"hidden")?"url(#".concat(c,")"):void 0,M=uW(uW({clipPath:W},Se(this.props,!0)),{},{cx:v,cy:y});return D.createElement(je,{className:Ee("recharts-reference-dot",b)},n.renderDot(I,M),zn.renderCallByParent(this.props,{x:v-p,y:y-p,width:2*p,height:2*p}))}}])})(D.Component);gc(yc,"displayName","ReferenceDot");gc(yc,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});gc(yc,"renderDot",function(e,n){var t;return D.isValidElement(e)?t=D.cloneElement(e,n):Ce(e)?t=e(n):t=D.createElement(ts,zg({},n,{cx:n.cx,cy:n.cy,className:"recharts-reference-dot-dot"})),t});function Vg(){return Vg=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Vg.apply(this,arguments)}function Ri(e){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ri(e)}function pW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function sW(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?pW(Object(t),!0).forEach(function(r){bc(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function RG(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function kG(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_A(r.key),r)}}function TG(e,n,t){return n&&kG(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function EG(e,n,t){return n=M0(n),DG(e,AA()?Reflect.construct(n,t||[],M0(e).constructor):n.apply(e,t))}function DG(e,n){if(n&&(Ri(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return jG(e)}function jG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(AA=function(){return!!e})()}function M0(e){return M0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M0(e)}function $G(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Gg(e,n)}function Gg(e,n){return Gg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Gg(e,n)}function bc(e,n,t){return n=_A(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _A(e){var n=LG(e,"string");return Ri(n)=="symbol"?n:n+""}function LG(e,n){if(Ri(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ri(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var FG=function(n,t,r,a,i){var p=i.x1,s=i.x2,c=i.y1,f=i.y2,m=i.xAxis,d=i.yAxis;if(!m||!d)return null;var v=d6({x:m.scale,y:d.scale}),y={x:n?v.x.apply(p,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(c,{position:"start"}):v.y.rangeMin},B={x:t?v.x.apply(s,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(f,{position:"end"}):v.y.rangeMax};return wr(i,"discard")&&(!v.isInRange(y)||!v.isInRange(B))?null:hA(y,B)},Ic=(function(e){function n(){return RG(this,n),EG(this,n,arguments)}return $G(n,e),TG(n,[{key:"render",value:function(){var r=this.props,a=r.x1,i=r.x2,p=r.y1,s=r.y2,c=r.className,f=r.alwaysShow,m=r.clipPathId;sr(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=En(a),v=En(i),y=En(p),B=En(s),I=this.props.shape;if(!d&&!v&&!y&&!B&&!I)return null;var b=FG(d,v,y,B,this.props);if(!b&&!I)return null;var W=wr(this.props,"hidden")?"url(#".concat(m,")"):void 0;return D.createElement(je,{className:Ee("recharts-reference-area",c)},n.renderRect(I,sW(sW({clipPath:W},Se(this.props,!0)),b)),zn.renderCallByParent(this.props,b))}}])})(D.Component);bc(Ic,"displayName","ReferenceArea");bc(Ic,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});bc(Ic,"renderRect",function(e,n){var t;return D.isValidElement(e)?t=D.cloneElement(e,n):Ce(e)?t=e(n):t=D.createElement(c6,Vg({},n,{className:"recharts-reference-area-rect"})),t});function OA(e,n,t){if(n<1)return[];if(n===1&&t===void 0)return e;for(var r=[],a=0;a<e.length;a+=n)r.push(e[a]);return r}function qG(e,n,t){var r={width:e.width+n.width,height:e.height+n.height};return KV(r,t)}function zG(e,n,t){var r=t==="width",a=e.x,i=e.y,p=e.width,s=e.height;return n===1?{start:r?a:i,end:r?a+p:i+s}:{start:r?a+p:i+s,end:r?a:i}}function A0(e,n,t,r,a){if(e*n<e*r||e*n>e*a)return!1;var i=t();return e*(n-e*i/2-r)>=0&&e*(n+e*i/2-a)<=0}function UG(e,n){return OA(e,n+1)}function VG(e,n,t,r,a){for(var i=(r||[]).slice(),p=n.start,s=n.end,c=0,f=1,m=p,d=function(){var B=r==null?void 0:r[c];if(B===void 0)return{v:OA(r,f)};var I=c,b,W=function(){return b===void 0&&(b=t(B,I)),b},M=B.coordinate,A=c===0||A0(e,M,W,m,s);A||(c=0,m=p,f+=1),A&&(m=M+e*(W()/2+a),c+=f)},v;f<=i.length;)if(v=d(),v)return v.v;return[]}function Up(e){"@babel/helpers - typeof";return Up=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Up(e)}function lW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function et(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?lW(Object(t),!0).forEach(function(r){GG(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):lW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function GG(e,n,t){return n=KG(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function KG(e){var n=QG(e,"string");return Up(n)=="symbol"?n:n+""}function QG(e,n){if(Up(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Up(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function YG(e,n,t,r,a){for(var i=(r||[]).slice(),p=i.length,s=n.start,c=n.end,f=function(v){var y=i[v],B,I=function(){return B===void 0&&(B=t(y,v)),B};if(v===p-1){var b=e*(y.coordinate+e*I()/2-c);i[v]=y=et(et({},y),{},{tickCoord:b>0?y.coordinate-b*e:y.coordinate})}else i[v]=y=et(et({},y),{},{tickCoord:y.coordinate});var W=A0(e,y.tickCoord,I,s,c);W&&(c=y.tickCoord-e*(I()/2+a),i[v]=et(et({},y),{},{isShow:!0}))},m=p-1;m>=0;m--)f(m);return i}function XG(e,n,t,r,a,i){var p=(r||[]).slice(),s=p.length,c=n.start,f=n.end;if(i){var m=r[s-1],d=t(m,s-1),v=e*(m.coordinate+e*d/2-f);p[s-1]=m=et(et({},m),{},{tickCoord:v>0?m.coordinate-v*e:m.coordinate});var y=A0(e,m.tickCoord,function(){return d},c,f);y&&(f=m.tickCoord-e*(d/2+a),p[s-1]=et(et({},m),{},{isShow:!0}))}for(var B=i?s-1:s,I=function(M){var A=p[M],O,w=function(){return O===void 0&&(O=t(A,M)),O};if(M===0){var S=e*(A.coordinate-e*w()/2-c);p[M]=A=et(et({},A),{},{tickCoord:S<0?A.coordinate-S*e:A.coordinate})}else p[M]=A=et(et({},A),{},{tickCoord:A.coordinate});var N=A0(e,A.tickCoord,w,c,f);N&&(c=A.tickCoord+e*(w()/2+a),p[M]=et(et({},A),{},{isShow:!0}))},b=0;b<B;b++)I(b);return p}function I6(e,n,t){var r=e.tick,a=e.ticks,i=e.viewBox,p=e.minTickGap,s=e.orientation,c=e.interval,f=e.tickFormatter,m=e.unit,d=e.angle;if(!a||!a.length||!r)return[];if(le(c)||Zr.isSsr)return UG(a,typeof c=="number"&&le(c)?c:0);var v=[],y=s==="top"||s==="bottom"?"width":"height",B=m&&y==="width"?rp(m,{fontSize:n,letterSpacing:t}):{width:0,height:0},I=function(A,O){var w=Ce(f)?f(A.value,O):A.value;return y==="width"?qG(rp(w,{fontSize:n,letterSpacing:t}),B,d):rp(w,{fontSize:n,letterSpacing:t})[y]},b=a.length>=2?ot(a[1].coordinate-a[0].coordinate):1,W=zG(i,b,y);return c==="equidistantPreserveStart"?VG(b,W,I,a,p):(c==="preserveStart"||c==="preserveStartEnd"?v=XG(b,W,I,a,p,c==="preserveStartEnd"):v=YG(b,W,I,a,p),v.filter(function(M){return M.isShow}))}var ZG=["viewBox"],JG=["viewBox"],eK=["ticks"];function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ki(e)}function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pi.apply(this,arguments)}function cW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function at(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?cW(Object(t),!0).forEach(function(r){B6(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):cW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Bv(e,n){if(e==null)return{};var t=nK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function nK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function tK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function fW(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,CA(r.key),r)}}function rK(e,n,t){return n&&fW(e.prototype,n),t&&fW(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function aK(e,n,t){return n=_0(n),oK(e,HA()?Reflect.construct(n,t||[],_0(e).constructor):n.apply(e,t))}function oK(e,n){if(n&&(ki(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return iK(e)}function iK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function HA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(HA=function(){return!!e})()}function _0(e){return _0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_0(e)}function uK(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Kg(e,n)}function Kg(e,n){return Kg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Kg(e,n)}function B6(e,n,t){return n=CA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function CA(e){var n=pK(e,"string");return ki(n)=="symbol"?n:n+""}function pK(e,n){if(ki(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var tu=(function(e){function n(t){var r;return tK(this,n),r=aK(this,n,[t]),r.state={fontSize:"",letterSpacing:""},r}return uK(n,e),rK(n,[{key:"shouldComponentUpdate",value:function(r,a){var i=r.viewBox,p=Bv(r,ZG),s=this.props,c=s.viewBox,f=Bv(s,JG);return!li(i,c)||!li(p,f)||!li(a,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var a=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.x,p=a.y,s=a.width,c=a.height,f=a.orientation,m=a.tickSize,d=a.mirror,v=a.tickMargin,y,B,I,b,W,M,A=d?-1:1,O=r.tickSize||m,w=le(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":y=B=r.coordinate,b=p+ +!d*c,I=b-A*O,M=I-A*v,W=w;break;case"left":I=b=r.coordinate,B=i+ +!d*s,y=B-A*O,W=y-A*v,M=w;break;case"right":I=b=r.coordinate,B=i+ +d*s,y=B+A*O,W=y+A*v,M=w;break;default:y=B=r.coordinate,b=p+ +d*c,I=b+A*O,M=I+A*v,W=w;break}return{line:{x1:y,y1:I,x2:B,y2:b},tick:{x:W,y:M}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,p;switch(a){case"left":p=i?"start":"end";break;case"right":p=i?"end":"start";break;default:p="middle";break}return p}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,p="end";switch(a){case"left":case"right":p="middle";break;case"top":p=i?"start":"end";break;default:p=i?"end":"start";break}return p}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.x,i=r.y,p=r.width,s=r.height,c=r.orientation,f=r.mirror,m=r.axisLine,d=at(at(at({},Se(this.props,!1)),Se(m,!1)),{},{fill:"none"});if(c==="top"||c==="bottom"){var v=+(c==="top"&&!f||c==="bottom"&&f);d=at(at({},d),{},{x1:a,y1:i+v*s,x2:a+p,y2:i+v*s})}else{var y=+(c==="left"&&!f||c==="right"&&f);d=at(at({},d),{},{x1:a+y*p,y1:i,x2:a+y*p,y2:i+s})}return D.createElement("line",pi({},d,{className:Ee("recharts-cartesian-axis-line",_t(m,"className"))}))}},{key:"renderTicks",value:function(r,a,i){var p=this,s=this.props,c=s.tickLine,f=s.stroke,m=s.tick,d=s.tickFormatter,v=s.unit,y=I6(at(at({},this.props),{},{ticks:r}),a,i),B=this.getTickTextAnchor(),I=this.getTickVerticalAnchor(),b=Se(this.props,!1),W=Se(m,!1),M=at(at({},b),{},{fill:"none"},Se(c,!1)),A=y.map(function(O,w){var S=p.getTickLineCoord(O),N=S.line,P=S.tick,H=at(at(at(at({textAnchor:B,verticalAnchor:I},b),{},{stroke:"none",fill:f},W),P),{},{index:w,payload:O,visibleTicksCount:y.length,tickFormatter:d});return D.createElement(je,pi({className:"recharts-cartesian-axis-tick",key:"tick-".concat(O.value,"-").concat(O.coordinate,"-").concat(O.tickCoord)},Ra(p.props,O,w)),c&&D.createElement("line",pi({},M,N,{className:Ee("recharts-cartesian-axis-tick-line",_t(c,"className"))})),m&&n.renderTickItem(m,H,"".concat(Ce(d)?d(O.value,w):O.value).concat(v||"")))});return D.createElement("g",{className:"recharts-cartesian-axis-ticks"},A)}},{key:"render",value:function(){var r=this,a=this.props,i=a.axisLine,p=a.width,s=a.height,c=a.ticksGenerator,f=a.className,m=a.hide;if(m)return null;var d=this.props,v=d.ticks,y=Bv(d,eK),B=v;return Ce(c)&&(B=v&&v.length>0?c(this.props):c(y)),p<=0||s<=0||!B||!B.length?null:D.createElement(je,{className:Ee("recharts-cartesian-axis",f),ref:function(b){r.layerReference=b}},i&&this.renderAxisLine(),this.renderTicks(B,this.state.fontSize,this.state.letterSpacing),zn.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,a,i){var p;return D.isValidElement(r)?p=D.cloneElement(r,a):Ce(r)?p=r(a):p=D.createElement(yo,pi({},a,{className:"recharts-cartesian-axis-tick-value"}),i),p}}])})(K.Component);B6(tu,"displayName","CartesianAxis");B6(tu,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var sK=["x1","y1","x2","y2","key"],lK=["offset"];function Bo(e){"@babel/helpers - typeof";return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Bo(e)}function dW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function nt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?dW(Object(t),!0).forEach(function(r){cK(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function cK(e,n,t){return n=fK(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fK(e){var n=dK(e,"string");return Bo(n)=="symbol"?n:n+""}function dK(e,n){if(Bo(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Bo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mo.apply(this,arguments)}function mW(e,n){if(e==null)return{};var t=mK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function mK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}var hK=function(n){var t=n.fill;if(!t||t==="none")return null;var r=n.fillOpacity,a=n.x,i=n.y,p=n.width,s=n.height,c=n.ry;return D.createElement("rect",{x:a,y:i,ry:c,width:p,height:s,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function NA(e,n){var t;if(D.isValidElement(e))t=D.cloneElement(e,n);else if(Ce(e))t=e(n);else{var r=n.x1,a=n.y1,i=n.x2,p=n.y2,s=n.key,c=mW(n,sK),f=Se(c,!1);f.offset;var m=mW(f,lK);t=D.createElement("line",mo({},m,{x1:r,y1:a,x2:i,y2:p,fill:"none",key:s}))}return t}function vK(e){var n=e.x,t=e.width,r=e.horizontal,a=r===void 0?!0:r,i=e.horizontalPoints;if(!a||!i||!i.length)return null;var p=i.map(function(s,c){var f=nt(nt({},e),{},{x1:n,y1:s,x2:n+t,y2:s,key:"line-".concat(c),index:c});return NA(a,f)});return D.createElement("g",{className:"recharts-cartesian-grid-horizontal"},p)}function gK(e){var n=e.y,t=e.height,r=e.vertical,a=r===void 0?!0:r,i=e.verticalPoints;if(!a||!i||!i.length)return null;var p=i.map(function(s,c){var f=nt(nt({},e),{},{x1:s,y1:n,x2:s,y2:n+t,key:"line-".concat(c),index:c});return NA(a,f)});return D.createElement("g",{className:"recharts-cartesian-grid-vertical"},p)}function yK(e){var n=e.horizontalFill,t=e.fillOpacity,r=e.x,a=e.y,i=e.width,p=e.height,s=e.horizontalPoints,c=e.horizontal,f=c===void 0?!0:c;if(!f||!n||!n.length)return null;var m=s.map(function(v){return Math.round(v+a-a)}).sort(function(v,y){return v-y});a!==m[0]&&m.unshift(0);var d=m.map(function(v,y){var B=!m[y+1],I=B?a+p-v:m[y+1]-v;if(I<=0)return null;var b=y%n.length;return D.createElement("rect",{key:"react-".concat(y),y:v,x:r,height:I,width:i,stroke:"none",fill:n[b],fillOpacity:t,className:"recharts-cartesian-grid-bg"})});return D.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function bK(e){var n=e.vertical,t=n===void 0?!0:n,r=e.verticalFill,a=e.fillOpacity,i=e.x,p=e.y,s=e.width,c=e.height,f=e.verticalPoints;if(!t||!r||!r.length)return null;var m=f.map(function(v){return Math.round(v+i-i)}).sort(function(v,y){return v-y});i!==m[0]&&m.unshift(0);var d=m.map(function(v,y){var B=!m[y+1],I=B?i+s-v:m[y+1]-v;if(I<=0)return null;var b=y%r.length;return D.createElement("rect",{key:"react-".concat(y),x:v,y:p,width:I,height:c,stroke:"none",fill:r[b],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return D.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var IK=function(n,t){var r=n.xAxis,a=n.width,i=n.height,p=n.offset;return kM(I6(nt(nt(nt({},tu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),p.left,p.left+p.width,t)},BK=function(n,t){var r=n.yAxis,a=n.width,i=n.height,p=n.offset;return kM(I6(nt(nt(nt({},tu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),p.top,p.top+p.height,t)},ti={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function O0(e){var n,t,r,a,i,p,s=v6(),c=g6(),f=pG(),m=nt(nt({},e),{},{stroke:(n=e.stroke)!==null&&n!==void 0?n:ti.stroke,fill:(t=e.fill)!==null&&t!==void 0?t:ti.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:ti.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:ti.horizontalFill,vertical:(i=e.vertical)!==null&&i!==void 0?i:ti.vertical,verticalFill:(p=e.verticalFill)!==null&&p!==void 0?p:ti.verticalFill,x:le(e.x)?e.x:f.left,y:le(e.y)?e.y:f.top,width:le(e.width)?e.width:f.width,height:le(e.height)?e.height:f.height}),d=m.x,v=m.y,y=m.width,B=m.height,I=m.syncWithTicks,b=m.horizontalValues,W=m.verticalValues,M=oG(),A=iG();if(!le(y)||y<=0||!le(B)||B<=0||!le(d)||d!==+d||!le(v)||v!==+v)return null;var O=m.verticalCoordinatesGenerator||IK,w=m.horizontalCoordinatesGenerator||BK,S=m.horizontalPoints,N=m.verticalPoints;if((!S||!S.length)&&Ce(w)){var P=b&&b.length,H=w({yAxis:A?nt(nt({},A),{},{ticks:P?b:A.ticks}):void 0,width:s,height:c,offset:f},P?!0:I);sr(Array.isArray(H),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Bo(H),"]")),Array.isArray(H)&&(S=H)}if((!N||!N.length)&&Ce(O)){var T=W&&W.length,j=O({xAxis:M?nt(nt({},M),{},{ticks:T?W:M.ticks}):void 0,width:s,height:c,offset:f},T?!0:I);sr(Array.isArray(j),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Bo(j),"]")),Array.isArray(j)&&(N=j)}return D.createElement("g",{className:"recharts-cartesian-grid"},D.createElement(hK,{fill:m.fill,fillOpacity:m.fillOpacity,x:m.x,y:m.y,width:m.width,height:m.height,ry:m.ry}),D.createElement(vK,mo({},m,{offset:f,horizontalPoints:S,xAxis:M,yAxis:A})),D.createElement(gK,mo({},m,{offset:f,verticalPoints:N,xAxis:M,yAxis:A})),D.createElement(yK,mo({},m,{horizontalPoints:S})),D.createElement(bK,mo({},m,{verticalPoints:N})))}O0.displayName="CartesianGrid";var xK=["type","layout","connectNulls","ref"],wK=["key"];function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ti(e)}function hW(e,n){if(e==null)return{};var t=PK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function PK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function sp(){return sp=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},sp.apply(this,arguments)}function vW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function wt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?vW(Object(t),!0).forEach(function(r){ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):vW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ri(e){return AK(e)||MK(e)||SK(e)||WK()}function WK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SK(e,n){if(e){if(typeof e=="string")return Qg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Qg(e,n)}}function MK(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function AK(e){if(Array.isArray(e))return Qg(e)}function Qg(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _K(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function gW(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,kA(r.key),r)}}function OK(e,n,t){return n&&gW(e.prototype,n),t&&gW(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function HK(e,n,t){return n=H0(n),CK(e,RA()?Reflect.construct(n,t||[],H0(e).constructor):n.apply(e,t))}function CK(e,n){if(n&&(Ti(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return NK(e)}function NK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function RA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(RA=function(){return!!e})()}function H0(e){return H0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},H0(e)}function RK(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Yg(e,n)}function Yg(e,n){return Yg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yg(e,n)}function ir(e,n,t){return n=kA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function kA(e){var n=kK(e,"string");return Ti(n)=="symbol"?n:n+""}function kK(e,n){if(Ti(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var qr=(function(e){function n(){var t;_K(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=HK(this,n,[].concat(a)),ir(t,"state",{isAnimationFinished:!0,totalLength:0}),ir(t,"generateSimpleStrokeDasharray",function(p,s){return"".concat(s,"px ").concat(p-s,"px")}),ir(t,"getStrokeDasharray",function(p,s,c){var f=c.reduce(function(W,M){return W+M});if(!f)return t.generateSimpleStrokeDasharray(s,p);for(var m=Math.floor(p/f),d=p%f,v=s-p,y=[],B=0,I=0;B<c.length;I+=c[B],++B)if(I+c[B]>d){y=[].concat(ri(c.slice(0,B)),[d-I]);break}var b=y.length%2===0?[0,v]:[v];return[].concat(ri(n.repeat(c,m)),ri(y),b).map(function(W){return"".concat(W,"px")}).join(", ")}),ir(t,"id",ja("recharts-line-")),ir(t,"pathRef",function(p){t.mainCurve=p}),ir(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0}),t.props.onAnimationEnd&&t.props.onAnimationEnd()}),ir(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1}),t.props.onAnimationStart&&t.props.onAnimationStart()}),t}return RK(n,e),OK(n,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,p=i.points,s=i.xAxis,c=i.yAxis,f=i.layout,m=i.children,d=pt(m,nu);if(!d)return null;var v=function(I,b){return{x:I.x,y:I.y,value:I.value,errorVal:ln(I.payload,b)}},y={clipPath:r?"url(#clipPath-".concat(a,")"):null};return D.createElement(je,y,d.map(function(B){return D.cloneElement(B,{key:"bar-".concat(B.props.dataKey),data:p,xAxis:s,yAxis:c,layout:f,dataPointFormatter:v})}))}},{key:"renderDots",value:function(r,a,i){var p=this.props.isAnimationActive;if(p&&!this.state.isAnimationFinished)return null;var s=this.props,c=s.dot,f=s.points,m=s.dataKey,d=Se(this.props,!1),v=Se(c,!0),y=f.map(function(I,b){var W=wt(wt(wt({key:"dot-".concat(b),r:3},d),v),{},{index:b,cx:I.x,cy:I.y,value:I.value,dataKey:m,payload:I.payload,points:f});return n.renderDotItem(c,W)}),B={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return D.createElement(je,sp({className:"recharts-line-dots",key:"dots"},B),y)}},{key:"renderCurveStatically",value:function(r,a,i,p){var s=this.props,c=s.type,f=s.layout,m=s.connectNulls;s.ref;var d=hW(s,xK),v=wt(wt(wt({},Se(d,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(i,")"):null,points:r},p),{},{type:c,layout:f,connectNulls:m});return D.createElement(Ca,sp({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,a){var i=this,p=this.props,s=p.points,c=p.strokeDasharray,f=p.isAnimationActive,m=p.animationBegin,d=p.animationDuration,v=p.animationEasing,y=p.animationId,B=p.animateNewValues,I=p.width,b=p.height,W=this.state,M=W.prevPoints,A=W.totalLength;return D.createElement(Kt,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"line-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(O){var w=O.t;if(M){var S=M.length/s.length,N=s.map(function(k,F){var Q=Math.floor(F*S);if(M[Q]){var Y=M[Q],X=hn(Y.x,k.x),Z=hn(Y.y,k.y);return wt(wt({},k),{},{x:X(w),y:Z(w)})}if(B){var E=hn(I*2,k.x),z=hn(b/2,k.y);return wt(wt({},k),{},{x:E(w),y:z(w)})}return wt(wt({},k),{},{x:k.x,y:k.y})});return i.renderCurveStatically(N,r,a)}var P=hn(0,A),H=P(w),T;if(c){var j="".concat(c).split(/[,\s]+/gim).map(function(k){return parseFloat(k)});T=i.getStrokeDasharray(H,A,j)}else T=i.generateSimpleStrokeDasharray(A,H);return i.renderCurveStatically(s,r,a,{strokeDasharray:T})})}},{key:"renderCurve",value:function(r,a){var i=this.props,p=i.points,s=i.isAnimationActive,c=this.state,f=c.prevPoints,m=c.totalLength;return s&&p&&p.length&&(!f&&m>0||!ka(f,p))?this.renderCurveWithAnimation(r,a):this.renderCurveStatically(p,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,p=a.dot,s=a.points,c=a.className,f=a.xAxis,m=a.yAxis,d=a.top,v=a.left,y=a.width,B=a.height,I=a.isAnimationActive,b=a.id;if(i||!s||!s.length)return null;var W=this.state.isAnimationFinished,M=s.length===1,A=Ee("recharts-line",c),O=f&&f.allowDataOverflow,w=m&&m.allowDataOverflow,S=O||w,N=Ne(b)?this.id:b,P=(r=Se(p,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},H=P.r,T=H===void 0?3:H,j=P.strokeWidth,k=j===void 0?2:j,F=D3(p)?p:{},Q=F.clipDot,Y=Q===void 0?!0:Q,X=T*2+k;return D.createElement(je,{className:A},O||w?D.createElement("defs",null,D.createElement("clipPath",{id:"clipPath-".concat(N)},D.createElement("rect",{x:O?v:v-y/2,y:w?d:d-B/2,width:O?y:y*2,height:w?B:B*2})),!Y&&D.createElement("clipPath",{id:"clipPath-dots-".concat(N)},D.createElement("rect",{x:v-X/2,y:d-X/2,width:y+X,height:B+X}))):null,!M&&this.renderCurve(S,N),this.renderErrorBar(S,N),(M||p)&&this.renderDots(S,Y,N),(!I||W)&&lr.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,a){for(var i=r.length%2!==0?[].concat(ri(r),[0]):r,p=[],s=0;s<a;++s)p=[].concat(ri(p),ri(i));return p}},{key:"renderDotItem",value:function(r,a){var i;if(D.isValidElement(r))i=D.cloneElement(r,a);else if(Ce(r))i=r(a);else{var p=a.key,s=hW(a,wK),c=Ee("recharts-line-dot",typeof r!="boolean"?r.className:"");i=D.createElement(ts,sp({key:p},s,{className:c}))}return i}}])})(K.PureComponent);ir(qr,"displayName","Line");ir(qr,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});ir(qr,"getComposedData",function(e){var n=e.props,t=e.xAxis,r=e.yAxis,a=e.xAxisTicks,i=e.yAxisTicks,p=e.dataKey,s=e.bandSize,c=e.displayedData,f=e.offset,m=n.layout,d=c.map(function(v,y){var B=ln(v,p);return m==="horizontal"?{x:Pi({axis:t,ticks:a,bandSize:s,entry:v,index:y}),y:Ne(B)?null:r.scale(B),value:B,payload:v}:{x:Ne(B)?null:t.scale(B),y:Pi({axis:r,ticks:i,bandSize:s,entry:v,index:y}),value:B,payload:v}});return wt({points:d,layout:m},f)});var TK=["layout","type","stroke","connectNulls","isRange","ref"],EK=["key"],TA;function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ei(e)}function EA(e,n){if(e==null)return{};var t=DK(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function DK(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ho.apply(this,arguments)}function yW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Pa(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?yW(Object(t),!0).forEach(function(r){Ir(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):yW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function jK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function bW(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,jA(r.key),r)}}function $K(e,n,t){return n&&bW(e.prototype,n),t&&bW(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function LK(e,n,t){return n=C0(n),FK(e,DA()?Reflect.construct(n,t||[],C0(e).constructor):n.apply(e,t))}function FK(e,n){if(n&&(Ei(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return qK(e)}function qK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function DA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(DA=function(){return!!e})()}function C0(e){return C0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C0(e)}function zK(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Xg(e,n)}function Xg(e,n){return Xg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xg(e,n)}function Ir(e,n,t){return n=jA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function jA(e){var n=UK(e,"string");return Ei(n)=="symbol"?n:n+""}function UK(e,n){if(Ei(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var So=(function(e){function n(){var t;jK(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=LK(this,n,[].concat(a)),Ir(t,"state",{isAnimationFinished:!0}),Ir(t,"id",ja("recharts-area-")),Ir(t,"handleAnimationEnd",function(){var p=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),Ce(p)&&p()}),Ir(t,"handleAnimationStart",function(){var p=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),Ce(p)&&p()}),t}return zK(n,e),$K(n,[{key:"renderDots",value:function(r,a,i){var p=this.props.isAnimationActive,s=this.state.isAnimationFinished;if(p&&!s)return null;var c=this.props,f=c.dot,m=c.points,d=c.dataKey,v=Se(this.props,!1),y=Se(f,!0),B=m.map(function(b,W){var M=Pa(Pa(Pa({key:"dot-".concat(W),r:3},v),y),{},{index:W,cx:b.x,cy:b.y,dataKey:d,value:b.value,payload:b.payload,points:m});return n.renderDotItem(f,M)}),I={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return D.createElement(je,ho({className:"recharts-area-dots"},I),B)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,i=a.baseLine,p=a.points,s=a.strokeWidth,c=p[0].x,f=p[p.length-1].x,m=r*Math.abs(c-f),d=Ma(p.map(function(v){return v.y||0}));return le(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Ma(i.map(function(v){return v.y||0})),d)),le(d)?D.createElement("rect",{x:c<f?c:c-m,y:0,width:m,height:Math.floor(d+(s?parseInt("".concat(s),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,i=a.baseLine,p=a.points,s=a.strokeWidth,c=p[0].y,f=p[p.length-1].y,m=r*Math.abs(c-f),d=Ma(p.map(function(v){return v.x||0}));return le(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Ma(i.map(function(v){return v.x||0})),d)),le(d)?D.createElement("rect",{x:0,y:c<f?c:c-m,width:d+(s?parseInt("".concat(s),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,i,p){var s=this.props,c=s.layout,f=s.type,m=s.stroke,d=s.connectNulls,v=s.isRange;s.ref;var y=EA(s,TK);return D.createElement(je,{clipPath:i?"url(#clipPath-".concat(p,")"):null},D.createElement(Ca,ho({},Se(y,!0),{points:r,connectNulls:d,type:f,baseLine:a,layout:c,stroke:"none",className:"recharts-area-area"})),m!=="none"&&D.createElement(Ca,ho({},Se(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:r})),m!=="none"&&v&&D.createElement(Ca,ho({},Se(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var i=this,p=this.props,s=p.points,c=p.baseLine,f=p.isAnimationActive,m=p.animationBegin,d=p.animationDuration,v=p.animationEasing,y=p.animationId,B=this.state,I=B.prevPoints,b=B.prevBaseLine;return D.createElement(Kt,{begin:m,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"area-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(W){var M=W.t;if(I){var A=I.length/s.length,O=s.map(function(P,H){var T=Math.floor(H*A);if(I[T]){var j=I[T],k=hn(j.x,P.x),F=hn(j.y,P.y);return Pa(Pa({},P),{},{x:k(M),y:F(M)})}return P}),w;if(le(c)&&typeof c=="number"){var S=hn(b,c);w=S(M)}else if(Ne(c)||Yi(c)){var N=hn(b,0);w=N(M)}else w=c.map(function(P,H){var T=Math.floor(H*A);if(b[T]){var j=b[T],k=hn(j.x,P.x),F=hn(j.y,P.y);return Pa(Pa({},P),{},{x:k(M),y:F(M)})}return P});return i.renderAreaStatically(O,w,r,a)}return D.createElement(je,null,D.createElement("defs",null,D.createElement("clipPath",{id:"animationClipPath-".concat(a)},i.renderClipRect(M))),D.createElement(je,{clipPath:"url(#animationClipPath-".concat(a,")")},i.renderAreaStatically(s,c,r,a)))})}},{key:"renderArea",value:function(r,a){var i=this.props,p=i.points,s=i.baseLine,c=i.isAnimationActive,f=this.state,m=f.prevPoints,d=f.prevBaseLine,v=f.totalLength;return c&&p&&p.length&&(!m&&v>0||!ka(m,p)||!ka(d,s))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(p,s,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,p=a.dot,s=a.points,c=a.className,f=a.top,m=a.left,d=a.xAxis,v=a.yAxis,y=a.width,B=a.height,I=a.isAnimationActive,b=a.id;if(i||!s||!s.length)return null;var W=this.state.isAnimationFinished,M=s.length===1,A=Ee("recharts-area",c),O=d&&d.allowDataOverflow,w=v&&v.allowDataOverflow,S=O||w,N=Ne(b)?this.id:b,P=(r=Se(p,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},H=P.r,T=H===void 0?3:H,j=P.strokeWidth,k=j===void 0?2:j,F=D3(p)?p:{},Q=F.clipDot,Y=Q===void 0?!0:Q,X=T*2+k;return D.createElement(je,{className:A},O||w?D.createElement("defs",null,D.createElement("clipPath",{id:"clipPath-".concat(N)},D.createElement("rect",{x:O?m:m-y/2,y:w?f:f-B/2,width:O?y:y*2,height:w?B:B*2})),!Y&&D.createElement("clipPath",{id:"clipPath-dots-".concat(N)},D.createElement("rect",{x:m-X/2,y:f-X/2,width:y+X,height:B+X}))):null,M?null:this.renderArea(S,N),(p||M)&&this.renderDots(S,Y,N),(!I||W)&&lr.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(K.PureComponent);TA=So;Ir(So,"displayName","Area");Ir(So,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});Ir(So,"getBaseValue",function(e,n,t,r){var a=e.layout,i=e.baseValue,p=n.props.baseValue,s=p??i;if(le(s)&&typeof s=="number")return s;var c=a==="horizontal"?r:t,f=c.scale.domain();if(c.type==="number"){var m=Math.max(f[0],f[1]),d=Math.min(f[0],f[1]);return s==="dataMin"?d:s==="dataMax"||m<0?m:Math.max(Math.min(f[0],f[1]),0)}return s==="dataMin"?f[0]:s==="dataMax"?f[1]:f[0]});Ir(So,"getComposedData",function(e){var n=e.props,t=e.item,r=e.xAxis,a=e.yAxis,i=e.xAxisTicks,p=e.yAxisTicks,s=e.bandSize,c=e.dataKey,f=e.stackedData,m=e.dataStartIndex,d=e.displayedData,v=e.offset,y=n.layout,B=f&&f.length,I=TA.getBaseValue(n,t,r,a),b=y==="horizontal",W=!1,M=d.map(function(O,w){var S;B?S=f[m+w]:(S=ln(O,c),Array.isArray(S)?W=!0:S=[I,S]);var N=S[1]==null||B&&ln(O,c)==null;return b?{x:Pi({axis:r,ticks:i,bandSize:s,entry:O,index:w}),y:N?null:a.scale(S[1]),value:S,payload:O}:{x:N?null:r.scale(S[1]),y:Pi({axis:a,ticks:p,bandSize:s,entry:O,index:w}),value:S,payload:O}}),A;return B||W?A=M.map(function(O){var w=Array.isArray(O.value)?O.value[0]:null;return b?{x:O.x,y:w!=null&&O.y!=null?a.scale(w):null}:{x:w!=null?r.scale(w):null,y:O.y}}):A=b?a.scale(I):r.scale(I),Pa({points:M,baseLine:A,layout:y,isRange:W},v)});Ir(So,"renderDotItem",function(e,n){var t;if(D.isValidElement(e))t=D.cloneElement(e,n);else if(Ce(e))t=e(n);else{var r=Ee("recharts-area-dot",typeof e!="boolean"?e.className:""),a=n.key,i=EA(n,EK);t=D.createElement(ts,ho({},i,{key:a,className:r}))}return t});function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Di(e)}function VK(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function GK(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,FA(r.key),r)}}function KK(e,n,t){return n&&GK(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function QK(e,n,t){return n=N0(n),YK(e,$A()?Reflect.construct(n,t||[],N0(e).constructor):n.apply(e,t))}function YK(e,n){if(n&&(Di(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return XK(e)}function XK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($A=function(){return!!e})()}function N0(e){return N0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N0(e)}function ZK(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Zg(e,n)}function Zg(e,n){return Zg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zg(e,n)}function LA(e,n,t){return n=FA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function FA(e){var n=JK(e,"string");return Di(n)=="symbol"?n:n+""}function JK(e,n){if(Di(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Bc=(function(e){function n(){return VK(this,n),QK(this,n,arguments)}return ZK(n,e),KK(n,[{key:"render",value:function(){return null}}])})(D.Component);LA(Bc,"displayName","ZAxis");LA(Bc,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var eQ=["option","isActive"];function lp(){return lp=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lp.apply(this,arguments)}function nQ(e,n){if(e==null)return{};var t=tQ(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function tQ(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function rQ(e){var n=e.option,t=e.isActive,r=nQ(e,eQ);return typeof n=="string"?D.createElement(y0,lp({option:D.createElement(Y0,lp({type:n},r)),isActive:t,shapeType:"symbols"},r)):D.createElement(y0,lp({option:n,isActive:t,shapeType:"symbols"},r))}function ji(e){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ji(e)}function cp(){return cp=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},cp.apply(this,arguments)}function IW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Ft(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?IW(Object(t),!0).forEach(function(r){_a(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):IW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function aQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function BW(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,zA(r.key),r)}}function oQ(e,n,t){return n&&BW(e.prototype,n),t&&BW(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function iQ(e,n,t){return n=R0(n),uQ(e,qA()?Reflect.construct(n,t||[],R0(e).constructor):n.apply(e,t))}function uQ(e,n){if(n&&(ji(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pQ(e)}function pQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(qA=function(){return!!e})()}function R0(e){return R0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R0(e)}function sQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Jg(e,n)}function Jg(e,n){return Jg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Jg(e,n)}function _a(e,n,t){return n=zA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function zA(e){var n=lQ(e,"string");return ji(n)=="symbol"?n:n+""}function lQ(e,n){if(ji(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var xc=(function(e){function n(){var t;aQ(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=iQ(this,n,[].concat(a)),_a(t,"state",{isAnimationFinished:!1}),_a(t,"handleAnimationEnd",function(){t.setState({isAnimationFinished:!0})}),_a(t,"handleAnimationStart",function(){t.setState({isAnimationFinished:!1})}),_a(t,"id",ja("recharts-scatter-")),t}return sQ(n,e),oQ(n,[{key:"renderSymbolsStatically",value:function(r){var a=this,i=this.props,p=i.shape,s=i.activeShape,c=i.activeIndex,f=Se(this.props,!1);return r.map(function(m,d){var v=c===d,y=v?s:p,B=Ft(Ft({},f),m);return D.createElement(je,cp({className:"recharts-scatter-symbol",key:"symbol-".concat(m==null?void 0:m.cx,"-").concat(m==null?void 0:m.cy,"-").concat(m==null?void 0:m.size,"-").concat(d)},Ra(a.props,m,d),{role:"img"}),D.createElement(rQ,cp({option:y,isActive:v,key:"symbol-".concat(d)},B)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,i=a.points,p=a.isAnimationActive,s=a.animationBegin,c=a.animationDuration,f=a.animationEasing,m=a.animationId,d=this.state.prevPoints;return D.createElement(Kt,{begin:s,duration:c,isActive:p,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var y=v.t,B=i.map(function(I,b){var W=d&&d[b];if(W){var M=hn(W.cx,I.cx),A=hn(W.cy,I.cy),O=hn(W.size,I.size);return Ft(Ft({},I),{},{cx:M(y),cy:A(y),size:O(y)})}var w=hn(0,I.size);return Ft(Ft({},I),{},{size:w(y)})});return D.createElement(je,null,r.renderSymbolsStatically(B))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,i=r.isAnimationActive,p=this.state.prevPoints;return i&&a&&a.length&&(!p||!ka(p,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,i=a.points,p=a.xAxis,s=a.yAxis,c=a.children,f=pt(c,nu);return f?f.map(function(m,d){var v=m.props,y=v.direction,B=v.dataKey;return D.cloneElement(m,{key:"".concat(y,"-").concat(B,"-").concat(i[d]),data:i,xAxis:p,yAxis:s,layout:y==="x"?"vertical":"horizontal",dataPointFormatter:function(b,W){return{x:b.cx,y:b.cy,value:y==="x"?+b.node.x:+b.node.y,errorVal:ln(b,W)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,i=r.line,p=r.lineType,s=r.lineJointType,c=Se(this.props,!1),f=Se(i,!1),m,d;if(p==="joint")m=a.map(function(A){return{x:A.cx,y:A.cy}});else if(p==="fitting"){var v=tT(a),y=v.xmin,B=v.xmax,I=v.a,b=v.b,W=function(O){return I*O+b};m=[{x:y,y:W(y)},{x:B,y:W(B)}]}var M=Ft(Ft(Ft({},c),{},{fill:"none",stroke:c&&c.fill},f),{},{points:m});return D.isValidElement(i)?d=D.cloneElement(i,M):Ce(i)?d=i(M):d=D.createElement(Ca,cp({},M,{type:s})),D.createElement(je,{className:"recharts-scatter-line",key:"recharts-scatter-line"},d)}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.points,p=r.line,s=r.className,c=r.xAxis,f=r.yAxis,m=r.left,d=r.top,v=r.width,y=r.height,B=r.id,I=r.isAnimationActive;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,W=Ee("recharts-scatter",s),M=c&&c.allowDataOverflow,A=f&&f.allowDataOverflow,O=M||A,w=Ne(B)?this.id:B;return D.createElement(je,{className:W,clipPath:O?"url(#clipPath-".concat(w,")"):null},M||A?D.createElement("defs",null,D.createElement("clipPath",{id:"clipPath-".concat(w)},D.createElement("rect",{x:M?m:m-v/2,y:A?d:d-y/2,width:M?v:v*2,height:A?y:y*2}))):null,p&&this.renderLine(),this.renderErrorBar(),D.createElement(je,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!I||b)&&lr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}])})(K.PureComponent);_a(xc,"displayName","Scatter");_a(xc,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});_a(xc,"getComposedData",function(e){var n=e.xAxis,t=e.yAxis,r=e.zAxis,a=e.item,i=e.displayedData,p=e.xAxisTicks,s=e.yAxisTicks,c=e.offset,f=a.props.tooltipType,m=pt(a.props.children,Xp),d=Ne(n.dataKey)?a.props.dataKey:n.dataKey,v=Ne(t.dataKey)?a.props.dataKey:t.dataKey,y=r&&r.dataKey,B=r?r.range:Bc.defaultProps.range,I=B&&B[0],b=n.scale.bandwidth?n.scale.bandwidth():0,W=t.scale.bandwidth?t.scale.bandwidth():0,M=i.map(function(A,O){var w=ln(A,d),S=ln(A,v),N=!Ne(y)&&ln(A,y)||"-",P=[{name:Ne(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:w,payload:A,dataKey:d,type:f},{name:Ne(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:S,payload:A,dataKey:v,type:f}];N!=="-"&&P.push({name:r.name||r.dataKey,unit:r.unit||"",value:N,payload:A,dataKey:y,type:f});var H=Pi({axis:n,ticks:p,bandSize:b,entry:A,index:O,dataKey:d}),T=Pi({axis:t,ticks:s,bandSize:W,entry:A,index:O,dataKey:v}),j=N!=="-"?r.scale(N):I,k=Math.sqrt(Math.max(j,0)/Math.PI);return Ft(Ft({},A),{},{cx:H,cy:T,x:H-k,y:T-k,xAxis:n,yAxis:t,zAxis:r,width:2*k,height:2*k,size:j,node:{x:w,y:S,z:N},tooltipPayload:P,tooltipPosition:{x:H,y:T},payload:A},m&&m[O]&&m[O].props)});return Ft({points:M},c)});function $i(e){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$i(e)}function cQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function fQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,GA(r.key),r)}}function dQ(e,n,t){return n&&fQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function mQ(e,n,t){return n=k0(n),hQ(e,UA()?Reflect.construct(n,t||[],k0(e).constructor):n.apply(e,t))}function hQ(e,n){if(n&&($i(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vQ(e)}function vQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function UA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(UA=function(){return!!e})()}function k0(e){return k0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k0(e)}function gQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&ey(e,n)}function ey(e,n){return ey=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ey(e,n)}function VA(e,n,t){return n=GA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function GA(e){var n=yQ(e,"string");return $i(n)=="symbol"?n:n+""}function yQ(e,n){if($i(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if($i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ny(){return ny=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ny.apply(this,arguments)}function bQ(e){var n=e.xAxisId,t=v6(),r=g6(),a=xA(n);return a==null?null:D.createElement(tu,ny({},a,{className:Ee("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:t,height:r},ticksGenerator:function(p){return Fr(p,!0)}}))}var Ta=(function(e){function n(){return cQ(this,n),mQ(this,n,arguments)}return gQ(n,e),dQ(n,[{key:"render",value:function(){return D.createElement(bQ,this.props)}}])})(D.Component);VA(Ta,"displayName","XAxis");VA(Ta,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function Li(e){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Li(e)}function IQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function BQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,YA(r.key),r)}}function xQ(e,n,t){return n&&BQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function wQ(e,n,t){return n=T0(n),PQ(e,KA()?Reflect.construct(n,t||[],T0(e).constructor):n.apply(e,t))}function PQ(e,n){if(n&&(Li(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return WQ(e)}function WQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function KA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(KA=function(){return!!e})()}function T0(e){return T0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T0(e)}function SQ(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&ty(e,n)}function ty(e,n){return ty=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ty(e,n)}function QA(e,n,t){return n=YA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function YA(e){var n=MQ(e,"string");return Li(n)=="symbol"?n:n+""}function MQ(e,n){if(Li(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Li(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ry(){return ry=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ry.apply(this,arguments)}var AQ=function(n){var t=n.yAxisId,r=v6(),a=g6(),i=wA(t);return i==null?null:D.createElement(tu,ry({},i,{className:Ee("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:a},ticksGenerator:function(s){return Fr(s,!0)}}))},Br=(function(e){function n(){return IQ(this,n),wQ(this,n,arguments)}return SQ(n,e),xQ(n,[{key:"render",value:function(){return D.createElement(AQ,this.props)}}])})(D.Component);QA(Br,"displayName","YAxis");QA(Br,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function xW(e){return CQ(e)||HQ(e)||OQ(e)||_Q()}function _Q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OQ(e,n){if(e){if(typeof e=="string")return ay(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ay(e,n)}}function HQ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function CQ(e){if(Array.isArray(e))return ay(e)}function ay(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var oy=function(n,t,r,a,i){var p=pt(n,b6),s=pt(n,yc),c=[].concat(xW(p),xW(s)),f=pt(n,Ic),m="".concat(a,"Id"),d=a[0],v=t;if(c.length&&(v=c.reduce(function(I,b){if(b.props[m]===r&&wr(b.props,"extendDomain")&&le(b.props[d])){var W=b.props[d];return[Math.min(I[0],W),Math.max(I[1],W)]}return I},v)),f.length){var y="".concat(d,"1"),B="".concat(d,"2");v=f.reduce(function(I,b){if(b.props[m]===r&&wr(b.props,"extendDomain")&&le(b.props[y])&&le(b.props[B])){var W=b.props[y],M=b.props[B];return[Math.min(I[0],W,M),Math.max(I[1],W,M)]}return I},v)}return i&&i.length&&(v=i.reduce(function(I,b){return le(b)?[Math.min(I[0],b),Math.max(I[1],b)]:I},v)),v},xv={exports:{}},wW;function NQ(){return wW||(wW=1,(function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function a(c,f,m){this.fn=c,this.context=f,this.once=m||!1}function i(c,f,m,d,v){if(typeof m!="function")throw new TypeError("The listener must be a function");var y=new a(m,d||c,v),B=t?t+f:f;return c._events[B]?c._events[B].fn?c._events[B]=[c._events[B],y]:c._events[B].push(y):(c._events[B]=y,c._eventsCount++),c}function p(c,f){--c._eventsCount===0?c._events=new r:delete c._events[f]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var f=[],m,d;if(this._eventsCount===0)return f;for(d in m=this._events)n.call(m,d)&&f.push(t?d.slice(1):d);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(m)):f},s.prototype.listeners=function(f){var m=t?t+f:f,d=this._events[m];if(!d)return[];if(d.fn)return[d.fn];for(var v=0,y=d.length,B=new Array(y);v<y;v++)B[v]=d[v].fn;return B},s.prototype.listenerCount=function(f){var m=t?t+f:f,d=this._events[m];return d?d.fn?1:d.length:0},s.prototype.emit=function(f,m,d,v,y,B){var I=t?t+f:f;if(!this._events[I])return!1;var b=this._events[I],W=arguments.length,M,A;if(b.fn){switch(b.once&&this.removeListener(f,b.fn,void 0,!0),W){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,m),!0;case 3:return b.fn.call(b.context,m,d),!0;case 4:return b.fn.call(b.context,m,d,v),!0;case 5:return b.fn.call(b.context,m,d,v,y),!0;case 6:return b.fn.call(b.context,m,d,v,y,B),!0}for(A=1,M=new Array(W-1);A<W;A++)M[A-1]=arguments[A];b.fn.apply(b.context,M)}else{var O=b.length,w;for(A=0;A<O;A++)switch(b[A].once&&this.removeListener(f,b[A].fn,void 0,!0),W){case 1:b[A].fn.call(b[A].context);break;case 2:b[A].fn.call(b[A].context,m);break;case 3:b[A].fn.call(b[A].context,m,d);break;case 4:b[A].fn.call(b[A].context,m,d,v);break;default:if(!M)for(w=1,M=new Array(W-1);w<W;w++)M[w-1]=arguments[w];b[A].fn.apply(b[A].context,M)}}return!0},s.prototype.on=function(f,m,d){return i(this,f,m,d,!1)},s.prototype.once=function(f,m,d){return i(this,f,m,d,!0)},s.prototype.removeListener=function(f,m,d,v){var y=t?t+f:f;if(!this._events[y])return this;if(!m)return p(this,y),this;var B=this._events[y];if(B.fn)B.fn===m&&(!v||B.once)&&(!d||B.context===d)&&p(this,y);else{for(var I=0,b=[],W=B.length;I<W;I++)(B[I].fn!==m||v&&!B[I].once||d&&B[I].context!==d)&&b.push(B[I]);b.length?this._events[y]=b.length===1?b[0]:b:p(this,y)}return this},s.prototype.removeAllListeners=function(f){var m;return f?(m=t?t+f:f,this._events[m]&&p(this,m)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,e.exports=s})(xv)),xv.exports}var RQ=NQ();const kQ=Xe(RQ);var wv=new kQ,Pv="recharts.syncMouseEvents";function Vp(e){"@babel/helpers - typeof";return Vp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Vp(e)}function TQ(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function EQ(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,XA(r.key),r)}}function DQ(e,n,t){return n&&EQ(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wv(e,n,t){return n=XA(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function XA(e){var n=jQ(e,"string");return Vp(n)=="symbol"?n:n+""}function jQ(e,n){if(Vp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Vp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var $Q=(function(){function e(){TQ(this,e),Wv(this,"activeIndex",0),Wv(this,"coordinateList",[]),Wv(this,"layout","horizontal")}return DQ(e,[{key:"setDetails",value:function(t){var r,a=t.coordinateList,i=a===void 0?null:a,p=t.container,s=p===void 0?null:p,c=t.layout,f=c===void 0?null:c,m=t.offset,d=m===void 0?null:m,v=t.mouseHandlerCallback,y=v===void 0?null:v;this.coordinateList=(r=i??this.coordinateList)!==null&&r!==void 0?r:[],this.container=s??this.container,this.layout=f??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=y??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(t){if(this.coordinateList.length!==0)switch(t.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(t){this.activeIndex=t}},{key:"spoofMouse",value:function(){var t,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),i=a.x,p=a.y,s=a.height,c=this.coordinateList[this.activeIndex].coordinate,f=((t=window)===null||t===void 0?void 0:t.scrollX)||0,m=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=i+c+f,v=p+this.offset.top+s/2+m;this.mouseHandlerCallback({pageX:d,pageY:v})}}}])})();function LQ(e,n,t){if(t==="number"&&n===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],a=e==null?void 0:e[1];if(r&&a&&le(r)&&le(a))return!0}return!1}function FQ(e,n,t,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?n.x-a:t.left+.5,y:e==="horizontal"?t.top+.5:n.y-a,width:e==="horizontal"?r:t.width-1,height:e==="horizontal"?t.height-1:r}}function ZA(e){var n=e.cx,t=e.cy,r=e.radius,a=e.startAngle,i=e.endAngle,p=on(n,t,r,a),s=on(n,t,r,i);return{points:[p,s],cx:n,cy:t,radius:r,startAngle:a,endAngle:i}}function qQ(e,n,t){var r,a,i,p;if(e==="horizontal")r=n.x,i=r,a=t.top,p=t.top+t.height;else if(e==="vertical")a=n.y,p=a,r=t.left,i=t.left+t.width;else if(n.cx!=null&&n.cy!=null)if(e==="centric"){var s=n.cx,c=n.cy,f=n.innerRadius,m=n.outerRadius,d=n.angle,v=on(s,c,f,d),y=on(s,c,m,d);r=v.x,a=v.y,i=y.x,p=y.y}else return ZA(n);return[{x:r,y:a},{x:i,y:p}]}function Gp(e){"@babel/helpers - typeof";return Gp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Gp(e)}function PW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Sl(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?PW(Object(t),!0).forEach(function(r){zQ(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):PW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function zQ(e,n,t){return n=UQ(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function UQ(e){var n=VQ(e,"string");return Gp(n)=="symbol"?n:n+""}function VQ(e,n){if(Gp(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Gp(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function GQ(e){var n,t,r=e.element,a=e.tooltipEventType,i=e.isActive,p=e.activeCoordinate,s=e.activePayload,c=e.offset,f=e.activeTooltipIndex,m=e.tooltipAxisBandSize,d=e.layout,v=e.chartName,y=(n=r.props.cursor)!==null&&n!==void 0?n:(t=r.type.defaultProps)===null||t===void 0?void 0:t.cursor;if(!r||!y||!i||!p||v!=="ScatterChart"&&a!=="axis")return null;var B,I=Ca;if(v==="ScatterChart")B=p,I=$z;else if(v==="BarChart")B=FQ(d,p,c,m),I=c6;else if(d==="radial"){var b=ZA(p),W=b.cx,M=b.cy,A=b.radius,O=b.startAngle,w=b.endAngle;B={cx:W,cy:M,startAngle:O,endAngle:w,innerRadius:A,outerRadius:A},I=VM}else B={points:qQ(d,p,c)},I=Ca;var S=Sl(Sl(Sl(Sl({stroke:"#ccc",pointerEvents:"none"},c),B),Se(y,!1)),{},{payload:s,payloadIndex:f,className:Ee("recharts-tooltip-cursor",y.className)});return K.isValidElement(y)?K.cloneElement(y,S):K.createElement(I,S)}var KQ=["item"],QQ=["children","className","width","height","style","compact","title","desc"];function Fi(e){"@babel/helpers - typeof";return Fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Fi(e)}function si(){return si=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},si.apply(this,arguments)}function WW(e,n){return ZQ(e)||XQ(e,n)||e_(e,n)||YQ()}function YQ(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XQ(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,p,s=[],c=!0,f=!1;try{if(i=(t=t.call(e)).next,n!==0)for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(m){f=!0,a=m}finally{try{if(!c&&t.return!=null&&(p=t.return(),Object(p)!==p))return}finally{if(f)throw a}}return s}}function ZQ(e){if(Array.isArray(e))return e}function SW(e,n){if(e==null)return{};var t=JQ(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function JQ(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function eY(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function nY(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n_(r.key),r)}}function tY(e,n,t){return n&&nY(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rY(e,n,t){return n=E0(n),aY(e,JA()?Reflect.construct(n,t||[],E0(e).constructor):n.apply(e,t))}function aY(e,n){if(n&&(Fi(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oY(e)}function oY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function JA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(JA=function(){return!!e})()}function E0(e){return E0=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E0(e)}function iY(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&iy(e,n)}function iy(e,n){return iy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},iy(e,n)}function qi(e){return sY(e)||pY(e)||e_(e)||uY()}function uY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e_(e,n){if(e){if(typeof e=="string")return uy(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return uy(e,n)}}function pY(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sY(e){if(Array.isArray(e))return uy(e)}function uy(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function MW(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ae(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?MW(Object(t),!0).forEach(function(r){Re(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):MW(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Re(e,n,t){return n=n_(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function n_(e){var n=lY(e,"string");return Fi(n)=="symbol"?n:n+""}function lY(e,n){if(Fi(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(Fi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var cY={xAxis:["bottom","top"],yAxis:["left","right"]},fY={width:"100%",height:"100%"},t_={x:0,y:0};function Ml(e){return e}var dY=function(n,t){return t==="horizontal"?n.x:t==="vertical"?n.y:t==="centric"?n.angle:n.radius},mY=function(n,t,r,a){var i=t.find(function(m){return m&&m.index===r});if(i){if(n==="horizontal")return{x:i.coordinate,y:a.y};if(n==="vertical")return{x:a.x,y:i.coordinate};if(n==="centric"){var p=i.coordinate,s=a.radius;return ae(ae(ae({},a),on(a.cx,a.cy,s,p)),{},{angle:p,radius:s})}var c=i.coordinate,f=a.angle;return ae(ae(ae({},a),on(a.cx,a.cy,c,f)),{},{angle:f,radius:c})}return t_},wc=function(n,t){var r=t.graphicalItems,a=t.dataStartIndex,i=t.dataEndIndex,p=(r??[]).reduce(function(s,c){var f=c.props.data;return f&&f.length?[].concat(qi(s),qi(f)):s},[]);return p.length>0?p:n&&n.length&&le(a)&&le(i)?n.slice(a,i+1):[]};function r_(e){return e==="number"?[0,"auto"]:void 0}var py=function(n,t,r,a){var i=n.graphicalItems,p=n.tooltipAxis,s=wc(t,n);return r<0||!i||!i.length||r>=s.length?null:i.reduce(function(c,f){var m,d=(m=f.props.data)!==null&&m!==void 0?m:t;d&&n.dataStartIndex+n.dataEndIndex!==0&&n.dataEndIndex-n.dataStartIndex>=r&&(d=d.slice(n.dataStartIndex,n.dataEndIndex+1));var v;if(p.dataKey&&!p.allowDuplicatedCategory){var y=d===void 0?s:d;v=Rl(y,p.dataKey,a)}else v=d&&d[r]||s[r];return v?[].concat(qi(c),[$M(f,v)]):c},[])},AW=function(n,t,r,a){var i=a||{x:n.chartX,y:n.chartY},p=dY(i,r),s=n.orderedTooltipTicks,c=n.tooltipAxis,f=n.tooltipTicks,m=u9(p,s,f,c);if(m>=0&&f){var d=f[m]&&f[m].value,v=py(n,t,m,d),y=mY(r,s,m,i);return{activeTooltipIndex:m,activeLabel:d,activePayload:v,activeCoordinate:y}}return null},hY=function(n,t){var r=t.axes,a=t.graphicalItems,i=t.axisType,p=t.axisIdKey,s=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=n.layout,d=n.children,v=n.stackOffset,y=RM(m,i);return r.reduce(function(B,I){var b,W=I.type.defaultProps!==void 0?ae(ae({},I.type.defaultProps),I.props):I.props,M=W.type,A=W.dataKey,O=W.allowDataOverflow,w=W.allowDuplicatedCategory,S=W.scale,N=W.ticks,P=W.includeHidden,H=W[p];if(B[H])return B;var T=wc(n.data,{graphicalItems:a.filter(function(L){var G,ie=p in L.props?L.props[p]:(G=L.type.defaultProps)===null||G===void 0?void 0:G[p];return ie===H}),dataStartIndex:c,dataEndIndex:f}),j=T.length,k,F,Q;LQ(W.domain,O,M)&&(k=bg(W.domain,null,O),y&&(M==="number"||S!=="auto")&&(Q=op(T,A,"category")));var Y=r_(M);if(!k||k.length===0){var X,Z=(X=W.domain)!==null&&X!==void 0?X:Y;if(A){if(k=op(T,A,M),M==="category"&&y){var E=nT(k);w&&E?(F=k,k=I0(0,j)):w||(k=S4(Z,k,I).reduce(function(L,G){return L.indexOf(G)>=0?L:[].concat(qi(L),[G])},[]))}else if(M==="category")w?k=k.filter(function(L){return L!==""&&!Ne(L)}):k=S4(Z,k,I).reduce(function(L,G){return L.indexOf(G)>=0||G===""||Ne(G)?L:[].concat(qi(L),[G])},[]);else if(M==="number"){var z=f9(T,a.filter(function(L){var G,ie,oe=p in L.props?L.props[p]:(G=L.type.defaultProps)===null||G===void 0?void 0:G[p],he="hide"in L.props?L.props.hide:(ie=L.type.defaultProps)===null||ie===void 0?void 0:ie.hide;return oe===H&&(P||!he)}),A,i,m);z&&(k=z)}y&&(M==="number"||S!=="auto")&&(Q=op(T,A,"category"))}else y?k=I0(0,j):s&&s[H]&&s[H].hasStack&&M==="number"?k=v==="expand"?[0,1]:jM(s[H].stackGroups,c,f):k=NM(T,a.filter(function(L){var G=p in L.props?L.props[p]:L.type.defaultProps[p],ie="hide"in L.props?L.props.hide:L.type.defaultProps.hide;return G===H&&(P||!ie)}),M,m,!0);if(M==="number")k=oy(d,k,H,i,N),Z&&(k=bg(Z,k,O));else if(M==="category"&&Z){var V=Z,R=k.every(function(L){return V.indexOf(L)>=0});R&&(k=V)}}return ae(ae({},B),{},Re({},H,ae(ae({},W),{},{axisType:i,domain:k,categoricalDomain:Q,duplicateDomain:F,originalDomain:(b=W.domain)!==null&&b!==void 0?b:Y,isCategorical:y,layout:m})))},{})},vY=function(n,t){var r=t.graphicalItems,a=t.Axis,i=t.axisType,p=t.axisIdKey,s=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=n.layout,d=n.children,v=wc(n.data,{graphicalItems:r,dataStartIndex:c,dataEndIndex:f}),y=v.length,B=RM(m,i),I=-1;return r.reduce(function(b,W){var M=W.type.defaultProps!==void 0?ae(ae({},W.type.defaultProps),W.props):W.props,A=M[p],O=r_("number");if(!b[A]){I++;var w;return B?w=I0(0,y):s&&s[A]&&s[A].hasStack?(w=jM(s[A].stackGroups,c,f),w=oy(d,w,A,i)):(w=bg(O,NM(v,r.filter(function(S){var N,P,H=p in S.props?S.props[p]:(N=S.type.defaultProps)===null||N===void 0?void 0:N[p],T="hide"in S.props?S.props.hide:(P=S.type.defaultProps)===null||P===void 0?void 0:P.hide;return H===A&&!T}),"number",m),a.defaultProps.allowDataOverflow),w=oy(d,w,A,i)),ae(ae({},b),{},Re({},A,ae(ae({axisType:i},a.defaultProps),{},{hide:!0,orientation:_t(cY,"".concat(i,".").concat(I%2),null),domain:w,originalDomain:O,isCategorical:B,layout:m})))}return b},{})},gY=function(n,t){var r=t.axisType,a=r===void 0?"xAxis":r,i=t.AxisComp,p=t.graphicalItems,s=t.stackGroups,c=t.dataStartIndex,f=t.dataEndIndex,m=n.children,d="".concat(a,"Id"),v=pt(m,i),y={};return v&&v.length?y=hY(n,{axes:v,graphicalItems:p,axisType:a,axisIdKey:d,stackGroups:s,dataStartIndex:c,dataEndIndex:f}):p&&p.length&&(y=vY(n,{Axis:i,graphicalItems:p,axisType:a,axisIdKey:d,stackGroups:s,dataStartIndex:c,dataEndIndex:f})),y},yY=function(n){var t=Sa(n),r=Fr(t,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:Ey(r,function(a){return a.coordinate}),tooltipAxis:t,tooltipAxisBandSize:i0(t,r)}},_W=function(n){var t=n.children,r=n.defaultShowTooltip,a=Wt(t,Oi),i=0,p=0;return n.data&&n.data.length!==0&&(p=n.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(i=a.props.startIndex),a.props.endIndex>=0&&(p=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:i,dataEndIndex:p,activeTooltipIndex:-1,isTooltipActive:!!r}},bY=function(n){return!n||!n.length?!1:n.some(function(t){var r=Ur(t&&t.type);return r&&r.indexOf("Bar")>=0})},OW=function(n){return n==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:n==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:n==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},IY=function(n,t){var r=n.props,a=n.graphicalItems,i=n.xAxisMap,p=i===void 0?{}:i,s=n.yAxisMap,c=s===void 0?{}:s,f=r.width,m=r.height,d=r.children,v=r.margin||{},y=Wt(d,Oi),B=Wt(d,Oa),I=Object.keys(c).reduce(function(w,S){var N=c[S],P=N.orientation;return!N.mirror&&!N.hide?ae(ae({},w),{},Re({},P,w[P]+N.width)):w},{left:v.left||0,right:v.right||0}),b=Object.keys(p).reduce(function(w,S){var N=p[S],P=N.orientation;return!N.mirror&&!N.hide?ae(ae({},w),{},Re({},P,_t(w,"".concat(P))+N.height)):w},{top:v.top||0,bottom:v.bottom||0}),W=ae(ae({},b),I),M=W.bottom;y&&(W.bottom+=y.props.height||Oi.defaultProps.height),B&&t&&(W=l9(W,a,r,t));var A=f-W.left-W.right,O=m-W.top-W.bottom;return ae(ae({brushBottom:M},W),{},{width:Math.max(A,0),height:Math.max(O,0)})},BY=function(n,t){if(t==="xAxis")return n[t].width;if(t==="yAxis")return n[t].height},Pc=function(n){var t=n.chartName,r=n.GraphicalChild,a=n.defaultTooltipEventType,i=a===void 0?"axis":a,p=n.validateTooltipEventTypes,s=p===void 0?["axis"]:p,c=n.axisComponents,f=n.legendContent,m=n.formatAxisMap,d=n.defaultProps,v=function(W,M){var A=M.graphicalItems,O=M.stackGroups,w=M.offset,S=M.updateId,N=M.dataStartIndex,P=M.dataEndIndex,H=W.barSize,T=W.layout,j=W.barGap,k=W.barCategoryGap,F=W.maxBarSize,Q=OW(T),Y=Q.numericAxisName,X=Q.cateAxisName,Z=bY(A),E=[];return A.forEach(function(z,V){var R=wc(W.data,{graphicalItems:[z],dataStartIndex:N,dataEndIndex:P}),L=z.type.defaultProps!==void 0?ae(ae({},z.type.defaultProps),z.props):z.props,G=L.dataKey,ie=L.maxBarSize,oe=L["".concat(Y,"Id")],he=L["".concat(X,"Id")],ge={},de=c.reduce(function(xn,gn){var Ot=M["".concat(gn.axisType,"Map")],yn=L["".concat(gn.axisType,"Id")];Ot&&Ot[yn]||gn.axisType==="zAxis"||Io();var Qn=Ot[yn];return ae(ae({},xn),{},Re(Re({},gn.axisType,Qn),"".concat(gn.axisType,"Ticks"),Fr(Qn)))},ge),te=de[X],me=de["".concat(X,"Ticks")],fe=O&&O[oe]&&O[oe].hasStack&&B9(z,O[oe].stackGroups),re=Ur(z.type).indexOf("Bar")>=0,Te=i0(te,me),Pe=[],He=Z&&p9({barSize:H,stackGroups:O,totalSize:BY(de,X)});if(re){var Me,Fe,De=Ne(ie)?F:ie,qe=(Me=(Fe=i0(te,me,!0))!==null&&Fe!==void 0?Fe:De)!==null&&Me!==void 0?Me:0;Pe=s9({barGap:j,barCategoryGap:k,bandSize:qe!==Te?qe:Te,sizeList:He[he],maxBarSize:De}),qe!==Te&&(Pe=Pe.map(function(xn){return ae(ae({},xn),{},{position:ae(ae({},xn.position),{},{offset:xn.position.offset-qe/2})})}))}var Ke=z&&z.type&&z.type.getComposedData;Ke&&E.push({props:ae(ae({},Ke(ae(ae({},de),{},{displayedData:R,props:W,dataKey:G,item:z,bandSize:Te,barPosition:Pe,offset:w,stackedData:fe,layout:T,dataStartIndex:N,dataEndIndex:P}))),{},Re(Re(Re({key:z.key||"item-".concat(V)},Y,de[Y]),X,de[X]),"animationId",S)),childIndex:dT(z,W.children),item:z})}),E},y=function(W,M){var A=W.props,O=W.dataStartIndex,w=W.dataEndIndex,S=W.updateId;if(!LB({props:A}))return null;var N=A.children,P=A.layout,H=A.stackOffset,T=A.data,j=A.reverseStackOrder,k=OW(P),F=k.numericAxisName,Q=k.cateAxisName,Y=pt(N,r),X=b9(T,Y,"".concat(F,"Id"),"".concat(Q,"Id"),H,j),Z=c.reduce(function(L,G){var ie="".concat(G.axisType,"Map");return ae(ae({},L),{},Re({},ie,gY(A,ae(ae({},G),{},{graphicalItems:Y,stackGroups:G.axisType===F&&X,dataStartIndex:O,dataEndIndex:w}))))},{}),E=IY(ae(ae({},Z),{},{props:A,graphicalItems:Y}),M==null?void 0:M.legendBBox);Object.keys(Z).forEach(function(L){Z[L]=m(A,Z[L],E,L.replace("Map",""),t)});var z=Z["".concat(Q,"Map")],V=yY(z),R=v(A,ae(ae({},Z),{},{dataStartIndex:O,dataEndIndex:w,updateId:S,graphicalItems:Y,stackGroups:X,offset:E}));return ae(ae({formattedGraphicalItems:R,graphicalItems:Y,offset:E,stackGroups:X},V),Z)},B=(function(b){function W(M){var A,O,w;return eY(this,W),w=rY(this,W,[M]),Re(w,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Re(w,"accessibilityManager",new $Q),Re(w,"handleLegendBBoxUpdate",function(S){if(S){var N=w.state,P=N.dataStartIndex,H=N.dataEndIndex,T=N.updateId;w.setState(ae({legendBBox:S},y({props:w.props,dataStartIndex:P,dataEndIndex:H,updateId:T},ae(ae({},w.state),{},{legendBBox:S}))))}}),Re(w,"handleReceiveSyncEvent",function(S,N,P){if(w.props.syncId===S){if(P===w.eventEmitterSymbol&&typeof w.props.syncMethod!="function")return;w.applySyncEvent(N)}}),Re(w,"handleBrushChange",function(S){var N=S.startIndex,P=S.endIndex;if(N!==w.state.dataStartIndex||P!==w.state.dataEndIndex){var H=w.state.updateId;w.setState(function(){return ae({dataStartIndex:N,dataEndIndex:P},y({props:w.props,dataStartIndex:N,dataEndIndex:P,updateId:H},w.state))}),w.triggerSyncEvent({dataStartIndex:N,dataEndIndex:P})}}),Re(w,"handleMouseEnter",function(S){var N=w.getMouseInfo(S);if(N){var P=ae(ae({},N),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var H=w.props.onMouseEnter;Ce(H)&&H(P,S)}}),Re(w,"triggeredAfterMouseMove",function(S){var N=w.getMouseInfo(S),P=N?ae(ae({},N),{},{isTooltipActive:!0}):{isTooltipActive:!1};w.setState(P),w.triggerSyncEvent(P);var H=w.props.onMouseMove;Ce(H)&&H(P,S)}),Re(w,"handleItemMouseEnter",function(S){w.setState(function(){return{isTooltipActive:!0,activeItem:S,activePayload:S.tooltipPayload,activeCoordinate:S.tooltipPosition||{x:S.cx,y:S.cy}}})}),Re(w,"handleItemMouseLeave",function(){w.setState(function(){return{isTooltipActive:!1}})}),Re(w,"handleMouseMove",function(S){S.persist(),w.throttleTriggeredAfterMouseMove(S)}),Re(w,"handleMouseLeave",function(S){w.throttleTriggeredAfterMouseMove.cancel();var N={isTooltipActive:!1};w.setState(N),w.triggerSyncEvent(N);var P=w.props.onMouseLeave;Ce(P)&&P(N,S)}),Re(w,"handleOuterEvent",function(S){var N=fT(S),P=_t(w.props,"".concat(N));if(N&&Ce(P)){var H,T;/.*touch.*/i.test(N)?T=w.getMouseInfo(S.changedTouches[0]):T=w.getMouseInfo(S),P((H=T)!==null&&H!==void 0?H:{},S)}}),Re(w,"handleClick",function(S){var N=w.getMouseInfo(S);if(N){var P=ae(ae({},N),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var H=w.props.onClick;Ce(H)&&H(P,S)}}),Re(w,"handleMouseDown",function(S){var N=w.props.onMouseDown;if(Ce(N)){var P=w.getMouseInfo(S);N(P,S)}}),Re(w,"handleMouseUp",function(S){var N=w.props.onMouseUp;if(Ce(N)){var P=w.getMouseInfo(S);N(P,S)}}),Re(w,"handleTouchMove",function(S){S.changedTouches!=null&&S.changedTouches.length>0&&w.throttleTriggeredAfterMouseMove(S.changedTouches[0])}),Re(w,"handleTouchStart",function(S){S.changedTouches!=null&&S.changedTouches.length>0&&w.handleMouseDown(S.changedTouches[0])}),Re(w,"handleTouchEnd",function(S){S.changedTouches!=null&&S.changedTouches.length>0&&w.handleMouseUp(S.changedTouches[0])}),Re(w,"handleDoubleClick",function(S){var N=w.props.onDoubleClick;if(Ce(N)){var P=w.getMouseInfo(S);N(P,S)}}),Re(w,"handleContextMenu",function(S){var N=w.props.onContextMenu;if(Ce(N)){var P=w.getMouseInfo(S);N(P,S)}}),Re(w,"triggerSyncEvent",function(S){w.props.syncId!==void 0&&wv.emit(Pv,w.props.syncId,S,w.eventEmitterSymbol)}),Re(w,"applySyncEvent",function(S){var N=w.props,P=N.layout,H=N.syncMethod,T=w.state.updateId,j=S.dataStartIndex,k=S.dataEndIndex;if(S.dataStartIndex!==void 0||S.dataEndIndex!==void 0)w.setState(ae({dataStartIndex:j,dataEndIndex:k},y({props:w.props,dataStartIndex:j,dataEndIndex:k,updateId:T},w.state)));else if(S.activeTooltipIndex!==void 0){var F=S.chartX,Q=S.chartY,Y=S.activeTooltipIndex,X=w.state,Z=X.offset,E=X.tooltipTicks;if(!Z)return;if(typeof H=="function")Y=H(E,S);else if(H==="value"){Y=-1;for(var z=0;z<E.length;z++)if(E[z].value===S.activeLabel){Y=z;break}}var V=ae(ae({},Z),{},{x:Z.left,y:Z.top}),R=Math.min(F,V.x+V.width),L=Math.min(Q,V.y+V.height),G=E[Y]&&E[Y].value,ie=py(w.state,w.props.data,Y),oe=E[Y]?{x:P==="horizontal"?E[Y].coordinate:R,y:P==="horizontal"?L:E[Y].coordinate}:t_;w.setState(ae(ae({},S),{},{activeLabel:G,activeCoordinate:oe,activePayload:ie,activeTooltipIndex:Y}))}else w.setState(S)}),Re(w,"renderCursor",function(S){var N,P=w.state,H=P.isTooltipActive,T=P.activeCoordinate,j=P.activePayload,k=P.offset,F=P.activeTooltipIndex,Q=P.tooltipAxisBandSize,Y=w.getTooltipEventType(),X=(N=S.props.active)!==null&&N!==void 0?N:H,Z=w.props.layout,E=S.key||"_recharts-cursor";return D.createElement(GQ,{key:E,activeCoordinate:T,activePayload:j,activeTooltipIndex:F,chartName:t,element:S,isActive:X,layout:Z,offset:k,tooltipAxisBandSize:Q,tooltipEventType:Y})}),Re(w,"renderPolarAxis",function(S,N,P){var H=_t(S,"type.axisType"),T=_t(w.state,"".concat(H,"Map")),j=S.type.defaultProps,k=j!==void 0?ae(ae({},j),S.props):S.props,F=T&&T[k["".concat(H,"Id")]];return K.cloneElement(S,ae(ae({},F),{},{className:Ee(H,F.className),key:S.key||"".concat(N,"-").concat(P),ticks:Fr(F,!0)}))}),Re(w,"renderPolarGrid",function(S){var N=S.props,P=N.radialLines,H=N.polarAngles,T=N.polarRadius,j=w.state,k=j.radiusAxisMap,F=j.angleAxisMap,Q=Sa(k),Y=Sa(F),X=Y.cx,Z=Y.cy,E=Y.innerRadius,z=Y.outerRadius;return K.cloneElement(S,{polarAngles:Array.isArray(H)?H:Fr(Y,!0).map(function(V){return V.coordinate}),polarRadius:Array.isArray(T)?T:Fr(Q,!0).map(function(V){return V.coordinate}),cx:X,cy:Z,innerRadius:E,outerRadius:z,key:S.key||"polar-grid",radialLines:P})}),Re(w,"renderLegend",function(){var S=w.state.formattedGraphicalItems,N=w.props,P=N.children,H=N.width,T=N.height,j=w.props.margin||{},k=H-(j.left||0)-(j.right||0),F=HM({children:P,formattedGraphicalItems:S,legendWidth:k,legendContent:f});if(!F)return null;var Q=F.item,Y=SW(F,KQ);return K.cloneElement(Q,ae(ae({},Y),{},{chartWidth:H,chartHeight:T,margin:j,onBBoxUpdate:w.handleLegendBBoxUpdate}))}),Re(w,"renderTooltip",function(){var S,N=w.props,P=N.children,H=N.accessibilityLayer,T=Wt(P,St);if(!T)return null;var j=w.state,k=j.isTooltipActive,F=j.activeCoordinate,Q=j.activePayload,Y=j.activeLabel,X=j.offset,Z=(S=T.props.active)!==null&&S!==void 0?S:k;return K.cloneElement(T,{viewBox:ae(ae({},X),{},{x:X.left,y:X.top}),active:Z,label:Y,payload:Z?Q:[],coordinate:F,accessibilityLayer:H})}),Re(w,"renderBrush",function(S){var N=w.props,P=N.margin,H=N.data,T=w.state,j=T.offset,k=T.dataStartIndex,F=T.dataEndIndex,Q=T.updateId;return K.cloneElement(S,{key:S.key||"_recharts-brush",onChange:xl(w.handleBrushChange,S.props.onChange),data:H,x:le(S.props.x)?S.props.x:j.left,y:le(S.props.y)?S.props.y:j.top+j.height+j.brushBottom-(P.bottom||0),width:le(S.props.width)?S.props.width:j.width,startIndex:k,endIndex:F,updateId:"brush-".concat(Q)})}),Re(w,"renderReferenceElement",function(S,N,P){if(!S)return null;var H=w,T=H.clipPathId,j=w.state,k=j.xAxisMap,F=j.yAxisMap,Q=j.offset,Y=S.type.defaultProps||{},X=S.props,Z=X.xAxisId,E=Z===void 0?Y.xAxisId:Z,z=X.yAxisId,V=z===void 0?Y.yAxisId:z;return K.cloneElement(S,{key:S.key||"".concat(N,"-").concat(P),xAxis:k[E],yAxis:F[V],viewBox:{x:Q.left,y:Q.top,width:Q.width,height:Q.height},clipPathId:T})}),Re(w,"renderActivePoints",function(S){var N=S.item,P=S.activePoint,H=S.basePoint,T=S.childIndex,j=S.isRange,k=[],F=N.props.key,Q=N.item.type.defaultProps!==void 0?ae(ae({},N.item.type.defaultProps),N.item.props):N.item.props,Y=Q.activeDot,X=Q.dataKey,Z=ae(ae({index:T,dataKey:X,cx:P.x,cy:P.y,r:4,fill:l6(N.item),strokeWidth:2,stroke:"#fff",payload:P.payload,value:P.value},Se(Y,!1)),kl(Y));return k.push(W.renderActiveDot(Y,Z,"".concat(F,"-activePoint-").concat(T))),H?k.push(W.renderActiveDot(Y,ae(ae({},Z),{},{cx:H.x,cy:H.y}),"".concat(F,"-basePoint-").concat(T))):j&&k.push(null),k}),Re(w,"renderGraphicChild",function(S,N,P){var H=w.filterFormatItem(S,N,P);if(!H)return null;var T=w.getTooltipEventType(),j=w.state,k=j.isTooltipActive,F=j.tooltipAxis,Q=j.activeTooltipIndex,Y=j.activeLabel,X=w.props.children,Z=Wt(X,St),E=H.props,z=E.points,V=E.isRange,R=E.baseLine,L=H.item.type.defaultProps!==void 0?ae(ae({},H.item.type.defaultProps),H.item.props):H.item.props,G=L.activeDot,ie=L.hide,oe=L.activeBar,he=L.activeShape,ge=!!(!ie&&k&&Z&&(G||oe||he)),de={};T!=="axis"&&Z&&Z.props.trigger==="click"?de={onClick:xl(w.handleItemMouseEnter,S.props.onClick)}:T!=="axis"&&(de={onMouseLeave:xl(w.handleItemMouseLeave,S.props.onMouseLeave),onMouseEnter:xl(w.handleItemMouseEnter,S.props.onMouseEnter)});var te=K.cloneElement(S,ae(ae({},H.props),de));function me(gn){return typeof F.dataKey=="function"?F.dataKey(gn.payload):null}if(ge)if(Q>=0){var fe,re;if(F.dataKey&&!F.allowDuplicatedCategory){var Te=typeof F.dataKey=="function"?me:"payload.".concat(F.dataKey.toString());fe=Rl(z,Te,Y),re=V&&R&&Rl(R,Te,Y)}else fe=z==null?void 0:z[Q],re=V&&R&&R[Q];if(he||oe){var Pe=S.props.activeIndex!==void 0?S.props.activeIndex:Q;return[K.cloneElement(S,ae(ae(ae({},H.props),de),{},{activeIndex:Pe})),null,null]}if(!Ne(fe))return[te].concat(qi(w.renderActivePoints({item:H,activePoint:fe,basePoint:re,childIndex:Q,isRange:V})))}else{var He,Me=(He=w.getItemByXY(w.state.activeCoordinate))!==null&&He!==void 0?He:{graphicalItem:te},Fe=Me.graphicalItem,De=Fe.item,qe=De===void 0?S:De,Ke=Fe.childIndex,xn=ae(ae(ae({},H.props),de),{},{activeIndex:Ke});return[K.cloneElement(qe,xn),null,null]}return V?[te,null,null]:[te,null]}),Re(w,"renderCustomized",function(S,N,P){return K.cloneElement(S,ae(ae({key:"recharts-customized-".concat(P)},w.props),w.state))}),Re(w,"renderMap",{CartesianGrid:{handler:Ml,once:!0},ReferenceArea:{handler:w.renderReferenceElement},ReferenceLine:{handler:Ml},ReferenceDot:{handler:w.renderReferenceElement},XAxis:{handler:Ml},YAxis:{handler:Ml},Brush:{handler:w.renderBrush,once:!0},Bar:{handler:w.renderGraphicChild},Line:{handler:w.renderGraphicChild},Area:{handler:w.renderGraphicChild},Radar:{handler:w.renderGraphicChild},RadialBar:{handler:w.renderGraphicChild},Scatter:{handler:w.renderGraphicChild},Pie:{handler:w.renderGraphicChild},Funnel:{handler:w.renderGraphicChild},Tooltip:{handler:w.renderCursor,once:!0},PolarGrid:{handler:w.renderPolarGrid,once:!0},PolarAngleAxis:{handler:w.renderPolarAxis},PolarRadiusAxis:{handler:w.renderPolarAxis},Customized:{handler:w.renderCustomized}}),w.clipPathId="".concat((A=M.id)!==null&&A!==void 0?A:ja("recharts"),"-clip"),w.throttleTriggeredAfterMouseMove=HS(w.triggeredAfterMouseMove,(O=M.throttleDelay)!==null&&O!==void 0?O:1e3/60),w.state={},w}return iY(W,b),tY(W,[{key:"componentDidMount",value:function(){var A,O;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(A=this.props.margin.left)!==null&&A!==void 0?A:0,top:(O=this.props.margin.top)!==null&&O!==void 0?O:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var A=this.props,O=A.children,w=A.data,S=A.height,N=A.layout,P=Wt(O,St);if(P){var H=P.props.defaultIndex;if(!(typeof H!="number"||H<0||H>this.state.tooltipTicks.length-1)){var T=this.state.tooltipTicks[H]&&this.state.tooltipTicks[H].value,j=py(this.state,w,H,T),k=this.state.tooltipTicks[H].coordinate,F=(this.state.offset.top+S)/2,Q=N==="horizontal",Y=Q?{x:k,y:F}:{y:k,x:F},X=this.state.formattedGraphicalItems.find(function(E){var z=E.item;return z.type.name==="Scatter"});X&&(Y=ae(ae({},Y),X.props.points[H].tooltipPosition),j=X.props.points[H].tooltipPayload);var Z={activeTooltipIndex:H,isTooltipActive:!0,activeLabel:T,activePayload:j,activeCoordinate:Y};this.setState(Z),this.renderCursor(P),this.accessibilityManager.setIndex(H)}}}},{key:"getSnapshotBeforeUpdate",value:function(A,O){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==O.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==A.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==A.margin){var w,S;this.accessibilityManager.setDetails({offset:{left:(w=this.props.margin.left)!==null&&w!==void 0?w:0,top:(S=this.props.margin.top)!==null&&S!==void 0?S:0}})}return null}},{key:"componentDidUpdate",value:function(A){Lv([Wt(A.children,St)],[Wt(this.props.children,St)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var A=Wt(this.props.children,St);if(A&&typeof A.props.shared=="boolean"){var O=A.props.shared?"axis":"item";return s.indexOf(O)>=0?O:i}return i}},{key:"getMouseInfo",value:function(A){if(!this.container)return null;var O=this.container,w=O.getBoundingClientRect(),S=Jj(w),N={chartX:Math.round(A.pageX-S.left),chartY:Math.round(A.pageY-S.top)},P=w.width/O.offsetWidth||1,H=this.inRange(N.chartX,N.chartY,P);if(!H)return null;var T=this.state,j=T.xAxisMap,k=T.yAxisMap,F=this.getTooltipEventType(),Q=AW(this.state,this.props.data,this.props.layout,H);if(F!=="axis"&&j&&k){var Y=Sa(j).scale,X=Sa(k).scale,Z=Y&&Y.invert?Y.invert(N.chartX):null,E=X&&X.invert?X.invert(N.chartY):null;return ae(ae({},N),{},{xValue:Z,yValue:E},Q)}return Q?ae(ae({},N),Q):null}},{key:"inRange",value:function(A,O){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,S=this.props.layout,N=A/w,P=O/w;if(S==="horizontal"||S==="vertical"){var H=this.state.offset,T=N>=H.left&&N<=H.left+H.width&&P>=H.top&&P<=H.top+H.height;return T?{x:N,y:P}:null}var j=this.state,k=j.angleAxisMap,F=j.radiusAxisMap;if(k&&F){var Q=Sa(k);return _4({x:N,y:P},Q)}return null}},{key:"parseEventsOfWrapper",value:function(){var A=this.props.children,O=this.getTooltipEventType(),w=Wt(A,St),S={};w&&O==="axis"&&(w.props.trigger==="click"?S={onClick:this.handleClick}:S={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var N=kl(this.props,this.handleOuterEvent);return ae(ae({},N),S)}},{key:"addListener",value:function(){wv.on(Pv,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){wv.removeListener(Pv,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(A,O,w){for(var S=this.state.formattedGraphicalItems,N=0,P=S.length;N<P;N++){var H=S[N];if(H.item===A||H.props.key===A.key||O===Ur(H.item.type)&&w===H.childIndex)return H}return null}},{key:"renderClipPath",value:function(){var A=this.clipPathId,O=this.state.offset,w=O.left,S=O.top,N=O.height,P=O.width;return D.createElement("defs",null,D.createElement("clipPath",{id:A},D.createElement("rect",{x:w,y:S,height:N,width:P})))}},{key:"getXScales",value:function(){var A=this.state.xAxisMap;return A?Object.entries(A).reduce(function(O,w){var S=WW(w,2),N=S[0],P=S[1];return ae(ae({},O),{},Re({},N,P.scale))},{}):null}},{key:"getYScales",value:function(){var A=this.state.yAxisMap;return A?Object.entries(A).reduce(function(O,w){var S=WW(w,2),N=S[0],P=S[1];return ae(ae({},O),{},Re({},N,P.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(A){var O;return(O=this.state.xAxisMap)===null||O===void 0||(O=O[A])===null||O===void 0?void 0:O.scale}},{key:"getYScaleByAxisId",value:function(A){var O;return(O=this.state.yAxisMap)===null||O===void 0||(O=O[A])===null||O===void 0?void 0:O.scale}},{key:"getItemByXY",value:function(A){var O=this.state,w=O.formattedGraphicalItems,S=O.activeItem;if(w&&w.length)for(var N=0,P=w.length;N<P;N++){var H=w[N],T=H.props,j=H.item,k=j.type.defaultProps!==void 0?ae(ae({},j.type.defaultProps),j.props):j.props,F=Ur(j.type);if(F==="Bar"){var Q=(T.data||[]).find(function(E){return Iz(A,E)});if(Q)return{graphicalItem:H,payload:Q}}else if(F==="RadialBar"){var Y=(T.data||[]).find(function(E){return _4(A,E)});if(Y)return{graphicalItem:H,payload:Y}}else if(mc(H,S)||hc(H,S)||Lp(H,S)){var X=qU({graphicalItem:H,activeTooltipItem:S,itemData:k.data}),Z=k.activeIndex===void 0?X:k.activeIndex;return{graphicalItem:ae(ae({},H),{},{childIndex:Z}),payload:Lp(H,S)?k.data[X]:H.props.data[X]}}}return null}},{key:"render",value:function(){var A=this;if(!LB(this))return null;var O=this.props,w=O.children,S=O.className,N=O.width,P=O.height,H=O.style,T=O.compact,j=O.title,k=O.desc,F=SW(O,QQ),Q=Se(F,!1);if(T)return D.createElement(tW,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},D.createElement(qv,si({},Q,{width:N,height:P,title:j,desc:k}),this.renderClipPath(),qB(w,this.renderMap)));if(this.props.accessibilityLayer){var Y,X;Q.tabIndex=(Y=this.props.tabIndex)!==null&&Y!==void 0?Y:0,Q.role=(X=this.props.role)!==null&&X!==void 0?X:"application",Q.onKeyDown=function(E){A.accessibilityManager.keyboardEvent(E)},Q.onFocus=function(){A.accessibilityManager.focus()}}var Z=this.parseEventsOfWrapper();return D.createElement(tW,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},D.createElement("div",si({className:Ee("recharts-wrapper",S),style:ae({position:"relative",cursor:"default",width:N,height:P},H)},Z,{ref:function(z){A.container=z}}),D.createElement(qv,si({},Q,{width:N,height:P,title:j,desc:k,style:fY}),this.renderClipPath(),qB(w,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(K.Component);Re(B,"displayName",t),Re(B,"defaultProps",ae({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Re(B,"getDerivedStateFromProps",function(b,W){var M=b.dataKey,A=b.data,O=b.children,w=b.width,S=b.height,N=b.layout,P=b.stackOffset,H=b.margin,T=W.dataStartIndex,j=W.dataEndIndex;if(W.updateId===void 0){var k=_W(b);return ae(ae(ae({},k),{},{updateId:0},y(ae(ae({props:b},k),{},{updateId:0}),W)),{},{prevDataKey:M,prevData:A,prevWidth:w,prevHeight:S,prevLayout:N,prevStackOffset:P,prevMargin:H,prevChildren:O})}if(M!==W.prevDataKey||A!==W.prevData||w!==W.prevWidth||S!==W.prevHeight||N!==W.prevLayout||P!==W.prevStackOffset||!li(H,W.prevMargin)){var F=_W(b),Q={chartX:W.chartX,chartY:W.chartY,isTooltipActive:W.isTooltipActive},Y=ae(ae({},AW(W,A,N)),{},{updateId:W.updateId+1}),X=ae(ae(ae({},F),Q),Y);return ae(ae(ae({},X),y(ae({props:b},X),W)),{},{prevDataKey:M,prevData:A,prevWidth:w,prevHeight:S,prevLayout:N,prevStackOffset:P,prevMargin:H,prevChildren:O})}if(!Lv(O,W.prevChildren)){var Z,E,z,V,R=Wt(O,Oi),L=R&&(Z=(E=R.props)===null||E===void 0?void 0:E.startIndex)!==null&&Z!==void 0?Z:T,G=R&&(z=(V=R.props)===null||V===void 0?void 0:V.endIndex)!==null&&z!==void 0?z:j,ie=L!==T||G!==j,oe=!Ne(A),he=oe&&!ie?W.updateId:W.updateId+1;return ae(ae({updateId:he},y(ae(ae({props:b},W),{},{updateId:he,dataStartIndex:L,dataEndIndex:G}),W)),{},{prevChildren:O,dataStartIndex:L,dataEndIndex:G})}return null}),Re(B,"renderActiveDot",function(b,W,M){var A;return K.isValidElement(b)?A=K.cloneElement(b,W):Ce(b)?A=b(W):A=D.createElement(ts,W),D.createElement(je,{className:"recharts-active-dot",key:M},A)});var I=K.forwardRef(function(W,M){return D.createElement(B,si({},W,{ref:M}))});return I.displayName=B.displayName,I},xY=Pc({chartName:"LineChart",GraphicalChild:qr,axisComponents:[{axisType:"xAxis",AxisComp:Ta},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:f6}),wY=Pc({chartName:"BarChart",GraphicalChild:Wr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Ta},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:f6}),PY=Pc({chartName:"PieChart",GraphicalChild:ea,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:dc},{axisType:"radiusAxis",AxisComp:cc}],formatAxisMap:H9,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),WY=Pc({chartName:"ComposedChart",GraphicalChild:[qr,So,Wr,xc],axisComponents:[{axisType:"xAxis",AxisComp:Ta},{axisType:"yAxis",AxisComp:Br},{axisType:"zAxis",AxisComp:Bc}],formatAxisMap:f6});const HW=({active:e,payload:n,label:t})=>e&&n&&n.length?_.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-3 shadow-lg",children:[_.jsx("p",{className:"font-semibold text-gray-900 mb-2",children:t}),_.jsxs("div",{className:"space-y-1",children:[_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-blue-600 font-medium",children:"Total Sessions: "}),_.jsx("span",{className:"text-gray-900",children:n[0].payload.totalSessions.toLocaleString()})]}),_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-orange-600 font-medium",children:"Human Escalations: "}),_.jsx("span",{className:"text-gray-900",children:n[0].payload.humanEscalations.toLocaleString()})]}),_.jsxs("p",{className:"text-sm",children:[_.jsx("span",{className:"text-red-600 font-medium",children:"Escalation Rate: "}),_.jsxs("span",{className:"text-gray-900",children:[n[0].payload.escalationRate.toFixed(1),"%"]})]})]})]}):null;function a_({data:e,title:n,instanceId:t}){var y,B;const r=K.useId(),a=n||"Sessions & Escalation Trends",i=e.length<=3&&((B=(y=e[0])==null?void 0:y.week)==null?void 0:B.includes("2026")),p=t||r.replace(/:/g,"-"),s=`${n?n.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase():"escalation-chart"}-${p}`,c=`chart-${s}-${e.length}`,f=e.map((I,b)=>({...I,id:`${s}-${I.week.replace(/\s/g,"-")}-${b}`})),m=`colorSessions-${s}`,d=`colorEscalations-${s}`,v=`colorSessionsLine-${s}`;return _.jsxs(zt,{className:"shadow-xl border-0",children:[_.jsx(D0,{className:"bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5",children:_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsxs("div",{children:[_.jsx(j0,{className:"text-2xl font-black text-gray-900",children:a}),_.jsx("p",{className:"text-sm text-gray-600 mt-2 font-medium",children:"Comparing Total Sessions, Human Escalations, and Escalation Rate %"})]}),_.jsxs("div",{className:"flex gap-2",children:[_.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Total Sessions"})]}),_.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Human Escalations"})]}),_.jsxs("div",{className:"flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200",children:[_.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600"}),_.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Escalation Rate %"})]})]})]})}),_.jsx(Ut,{className:"p-6 bg-white",children:_.jsx(jy,{width:"100%",height:400,children:i?_.jsxs(WY,{data:f,barGap:8,barCategoryGap:"20%",children:[_.jsxs("defs",{children:[_.jsxs("linearGradient",{id:m,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.9},`${m}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.7},`${m}-stop-2`)]}),_.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#f97316",stopOpacity:.9},`${d}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#f97316",stopOpacity:.7},`${d}-stop-2`)]})]}),_.jsx(O0,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${s}`),_.jsx(Ta,{dataKey:"week",tick:{fontSize:13,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${s}`),_.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${s}`),_.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${s}`),_.jsx(St,{content:_.jsx(HW,{})},`tooltip-${s}`),_.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"square",iconSize:14},`legend-${s}`),_.jsx(Wr,{yAxisId:"left",dataKey:"totalSessions",fill:`url(#${m})`,name:"Total Sessions",radius:[10,10,0,0],maxBarSize:80},`bar-total-${s}`),_.jsx(Wr,{yAxisId:"left",dataKey:"humanEscalations",fill:`url(#${d})`,name:"Human Escalations",radius:[10,10,0,0],maxBarSize:80},`bar-human-${s}`),_.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:4,dot:{fill:"#ef4444",r:6,strokeWidth:2,stroke:"#fff"},activeDot:{r:8,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${s}`)]},c):_.jsxs(xY,{data:f,children:[_.jsx("defs",{children:_.jsxs("linearGradient",{id:v,x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8},`${v}-stop-1`),_.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.1},`${v}-stop-2`)]})}),_.jsx(O0,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${s}`),_.jsx(Ta,{dataKey:"week",tick:{fontSize:12,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${s}`),_.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${s}`),_.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${s}`),_.jsx(St,{content:_.jsx(HW,{})},`tooltip-${s}`),_.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"line",iconSize:20},`legend-${s}`),_.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"totalSessions",stroke:"#3b82f6",strokeWidth:3,dot:{fill:"#3b82f6",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Total Sessions"},`line-total-${s}`),_.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"humanEscalations",stroke:"#f97316",strokeWidth:3,dot:{fill:"#f97316",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Human Escalations"},`line-human-${s}`),_.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:3,strokeDasharray:"8 4",dot:{fill:"#ef4444",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${s}`)]},c)})})]})}const CW=["#3b82f6","#f97316","#10b981","#8b5cf6","#f59e0b"];function o_({data:e,title:n}){const t=e.reduce((p,s)=>p+s.count,0),r=n||"Channel Distribution",a=r.replace(/\s/g,"-").toLowerCase(),i=e.map((p,s)=>({...p,uniqueKey:`${a}-${p.channel.replace(/\s/g,"-")}-${p.count}-${s}`,id:`${a}-${s}`}));return _.jsxs(zt,{children:[_.jsxs(D0,{children:[_.jsx(j0,{children:r}),_.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Total sessions: ",t.toLocaleString()]})]}),_.jsx(Ut,{children:_.jsx(jy,{width:"100%",height:300,children:_.jsxs(PY,{children:[_.jsx(ea,{data:i,cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",paddingAngle:2,dataKey:"count",label:({channel:p,percentage:s})=>`${p} (${s.toFixed(1)}%)`,children:i.map(p=>_.jsx(Xp,{fill:CW[i.indexOf(p)%CW.length]},p.uniqueKey))},`pie-${a}`),_.jsx(St,{formatter:(p,s,c)=>[`${p.toLocaleString()} sessions (${c.payload.percentage.toFixed(1)}%)`,c.payload.channel],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}})]},`piechart-${a}`)})})]})}function SY({data:e}){const n=e.reduce((a,i)=>{const p=a.find(s=>s.product===i.product);return p?p.count+=i.count:a.push({...i}),a},[]),t=n.slice(0,10),r=n.reduce((a,i)=>a+i.count,0);return _.jsxs(zt,{children:[_.jsxs(D0,{children:[_.jsx(j0,{children:"Product Breakdown (Human Handled)"}),_.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Human escalations: ",r.toLocaleString()," ",t.length<n.length&&`(showing top ${t.length})`]})]}),_.jsx(Ut,{children:_.jsx(jy,{width:"100%",height:300,children:_.jsxs(wY,{data:t,children:[_.jsx(O0,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),_.jsx(Ta,{dataKey:"product",tick:{fontSize:11},stroke:"#6b7280",angle:-45,textAnchor:"end",height:100}),_.jsx(Br,{tick:{fontSize:12},stroke:"#6b7280",label:{value:"Count",angle:-90,position:"insideLeft",style:{fontSize:12}}}),_.jsx(St,{formatter:a=>[`${a} escalations`,"Count"],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}}),_.jsx(Wr,{dataKey:"count",fill:"#f97316",radius:[4,4,0,0]})]})})})]})}function i_({className:e,...n}){return _.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:_.jsx("table",{"data-slot":"table",className:st("w-full caption-bottom text-sm",e),...n})})}function u_({className:e,...n}){return _.jsx("thead",{"data-slot":"table-header",className:st("[&_tr]:border-b",e),...n})}function p_({className:e,...n}){return _.jsx("tbody",{"data-slot":"table-body",className:st("[&_tr:last-child]:border-0",e),...n})}function di({className:e,...n}){return _.jsx("tr",{"data-slot":"table-row",className:st("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...n})}function jr({className:e,...n}){return _.jsx("th",{"data-slot":"table-head",className:st("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...n})}function Mt({className:e,...n}){return _.jsx("td",{"data-slot":"table-cell",className:st("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...n})}function MY({data:e}){const[n,t]=K.useState(new Set),r=a=>{const i=new Set(n);i.has(a)?i.delete(a):i.add(a),t(i)};return _.jsx("div",{className:"border rounded-lg overflow-hidden",children:_.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:_.jsxs(i_,{children:[_.jsx(u_,{className:"bg-gray-50 sticky top-0 z-10",children:_.jsxs(di,{children:[_.jsx(jr,{className:"w-12"}),_.jsx(jr,{children:"Issue Type"}),_.jsx(jr,{className:"text-right",children:"Count"})]})}),_.jsx(p_,{children:e.flatMap((a,i)=>{const p=n.has(a.issue),s=[_.jsxs(di,{className:"cursor-pointer hover:bg-gray-50",onClick:()=>r(a.issue),children:[_.jsx(Mt,{children:p?_.jsx(UC,{className:"w-4 h-4"}):_.jsx(Cv,{className:"w-4 h-4"})}),_.jsx(Mt,{className:"font-medium",children:a.issue}),_.jsx(Mt,{className:"text-right font-semibold",children:a.count})]},`${a.issue}-${i}`)];return p&&a.subIssues.forEach((c,f)=>{s.push(_.jsxs(di,{className:"bg-blue-50",children:[_.jsx(Mt,{}),_.jsx(Mt,{className:"pl-8",children:_.jsxs("div",{children:[_.jsx("div",{className:"font-medium text-sm text-gray-900",children:c.subType}),_.jsx("div",{className:"text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5",children:c.products.map((m,d)=>_.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700",children:[m.product," ",_.jsxs("span",{className:"ml-1 font-semibold",children:["(",m.count,")"]})]},`${a.issue}-${c.subType}-${m.product}-${d}`))})]})}),_.jsx(Mt,{className:"text-right",children:c.count})]},`${a.issue}-${c.subType}-${f}`))}),s})})]})})})}const Ju=50;function ai({field:e,currentField:n,direction:t,onSort:r,children:a}){return _.jsxs("button",{onClick:()=>r(e),className:"flex items-center gap-1 hover:text-gray-900 font-medium",children:[a,_.jsx(LC,{className:`w-4 h-4 ${n===e?"text-blue-600":"text-gray-400"}`})]})}function AY({data:e=[]}){const[n,t]=K.useState("createdAt"),[r,a]=K.useState("desc"),[i,p]=K.useState(0),s=K.useCallback(d=>{t(v=>v===d?(a(y=>y==="asc"?"desc":"asc"),d):(a("asc"),d)),p(0)},[]),c=K.useMemo(()=>[...e].sort((d,v)=>{let y,B;return n==="createdAt"?(y=ur(d.createdAt).getTime(),B=ur(v.createdAt).getTime(),isNaN(y)&&(y=-1/0),isNaN(B)&&(B=-1/0)):(y=(d[n]||"").toLowerCase(),B=(v[n]||"").toLowerCase()),r==="asc"?y>B?1:y<B?-1:0:y<B?1:y>B?-1:0}),[e,n,r]),f=Math.ceil(c.length/Ju),m=K.useMemo(()=>c.slice(i*Ju,(i+1)*Ju),[c,i]);return _.jsxs("div",{className:"space-y-3",children:[_.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 px-1",children:[_.jsxs("span",{children:["Showing ",_.jsxs("span",{className:"font-semibold text-gray-800",children:[i*Ju+1,"–",Math.min((i+1)*Ju,c.length)]})," of ",_.jsx("span",{className:"font-semibold text-gray-800",children:c.length.toLocaleString()})," sessions"]}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("button",{onClick:()=>p(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(MI,{className:"w-4 h-4"})}),_.jsxs("span",{className:"text-xs font-medium",children:["Page ",i+1," of ",f||1]}),_.jsx("button",{onClick:()=>p(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(Cv,{className:"w-4 h-4"})})]})]}),_.jsx("div",{className:"border rounded-lg overflow-hidden",children:_.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:_.jsxs(i_,{children:[_.jsx(u_,{className:"bg-gray-50 sticky top-0 z-10",children:_.jsxs(di,{children:[_.jsx(jr,{children:_.jsx(ai,{field:"createdAt",currentField:n,direction:r,onSort:s,children:"Date"})}),_.jsx(jr,{children:_.jsx(ai,{field:"channel",currentField:n,direction:r,onSort:s,children:"Channel"})}),_.jsx(jr,{children:_.jsx(ai,{field:"product",currentField:n,direction:r,onSort:s,children:"Product"})}),_.jsx(jr,{children:_.jsx(ai,{field:"issue",currentField:n,direction:r,onSort:s,children:"Issue"})}),_.jsx(jr,{children:_.jsx(ai,{field:"subType",currentField:n,direction:r,onSort:s,children:"Sub Type"})}),_.jsx(jr,{children:_.jsx(ai,{field:"handled",currentField:n,direction:r,onSort:s,children:"Handled By"})})]})}),_.jsx(p_,{children:m.length===0?_.jsx(di,{children:_.jsx(Mt,{colSpan:6,className:"text-center text-gray-400 py-12",children:"No sessions found."})}):m.map((d,v)=>_.jsxs(di,{className:"hover:bg-blue-50/50 transition-colors",children:[_.jsx(Mt,{className:"whitespace-nowrap text-gray-700",children:sk(ur(d.createdAt))}),_.jsx(Mt,{children:_.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700",children:d.channel||"-"})}),_.jsx(Mt,{className:"text-gray-700",children:d.product||"-"}),_.jsx(Mt,{className:"text-gray-700",children:d.issue||"-"}),_.jsx(Mt,{className:"text-gray-500 text-xs",children:d.subType||"-"}),_.jsx(Mt,{children:_.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${d.handled==="Bot"?"bg-blue-100 text-blue-800":"bg-orange-100 text-orange-800"}`,children:d.handled||"-"})})]},`${i}-${v}`))})]})})}),f>1&&_.jsxs("div",{className:"flex items-center justify-center gap-2 pt-1",children:[_.jsx("button",{onClick:()=>p(0),disabled:i===0,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"First"}),_.jsx("button",{onClick:()=>p(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(MI,{className:"w-4 h-4"})}),Array.from({length:Math.min(5,f)},(d,v)=>{let y;return f<=5||i<3?y=v:i>f-4?y=f-5+v:y=i-2+v,_.jsx("button",{onClick:()=>p(y),className:`px-3 py-1.5 text-xs rounded-md border font-medium transition-colors ${y===i?"bg-blue-600 text-white border-blue-600":"border-gray-200 hover:bg-gray-100 text-gray-700"}`,children:y+1},y)}),_.jsx("button",{onClick:()=>p(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:_.jsx(Cv,{className:"w-4 h-4"})}),_.jsx("button",{onClick:()=>p(f-1),disabled:i>=f-1,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"Last"})]})]})}function s_({metrics:e,topChannel:n,top5Products:t,top5Issues:r,monthCount:a}){return _.jsxs(zt,{className:"border-0 shadow-xl overflow-hidden mt-6",children:[_.jsx("div",{className:"bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-6 py-4 border-b border-white/10",children:_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20",children:_.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-xl font-black tracking-tight",children:"Waggle AI Performance Summary"}),_.jsx("p",{className:"text-[10px] text-indigo-200 font-bold uppercase tracking-widest opacity-80",children:"Full Analytics Overview"})]})]})}),_.jsxs(Ut,{className:"p-6 bg-gradient-to-br from-slate-50 to-white",children:[_.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-blue-600 group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Total Sessions"})]}),_.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:e.totalSessions.toLocaleString()}),_.jsxs("p",{className:"text-[10px] text-slate-400 font-medium italic",children:["Across ",a," ",a===1?"month":"months"]})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-emerald-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Bot Efficiency"})]}),_.jsxs("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:[e.botPercentage.toFixed(1),"%"]}),_.jsxs("p",{className:"text-[10px] text-emerald-600 font-bold",children:[e.botHandled.toLocaleString()," Handled"]})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-rose-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Avg Escalation"})]}),_.jsxs("p",{className:"text-2xl font-black text-rose-600 tracking-tight mb-0.5",children:[e.escalationRate.toFixed(1),"%"]}),_.jsx("p",{className:"text-[10px] text-rose-400 font-bold uppercase",children:"Human Assistance Needs"})]}),_.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("div",{className:"w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300",children:_.jsx("svg",{className:"w-4 h-4 text-indigo-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),_.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Main Channel"})]}),_.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:(n==null?void 0:n.channel)||"N/A"}),_.jsxs("p",{className:"text-[10px] text-indigo-500 font-bold uppercase",children:[((n==null?void 0:n.percentage)||0).toFixed(1),"% Share"]})]})]}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[_.jsxs("div",{className:"bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-slate-800",children:[_.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-5 pointer-events-none",children:_.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),_.jsxs("h4",{className:"flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),"Top 5 Products Escalated"]}),_.jsx("div",{className:"space-y-2 relative z-10",children:t.map((i,p)=>_.jsxs("div",{className:"flex justify-between items-center bg-white/5 rounded-xl p-2.5 border border-white/10 hover:bg-white/10 transition-colors",children:[_.jsxs("span",{className:"font-bold text-sm text-indigo-50 flex items-center gap-2",children:[_.jsxs("span",{className:"text-indigo-400 font-mono text-xs opacity-70",children:[p+1,"."]})," ",i.product||"N/A"]}),_.jsxs("span",{className:"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-bold ring-1 ring-indigo-500/50",children:[i.count.toLocaleString()," cases"]})]},p))})]}),_.jsxs("div",{className:"bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-indigo-500/30",children:[_.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-10 pointer-events-none",children:_.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),_.jsxs("h4",{className:"flex items-center gap-2 text-indigo-100 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-pulse"}),"Top 5 Issue Types"]}),_.jsx("div",{className:"space-y-2 relative z-10",children:r.map((i,p)=>_.jsxs("div",{className:"flex justify-between items-center bg-black/10 rounded-xl p-2.5 border border-white/10 hover:bg-black/20 transition-colors",children:[_.jsxs("span",{className:"font-bold text-sm text-purple-50 flex items-center gap-2",children:[_.jsxs("span",{className:"text-purple-300 font-mono text-xs opacity-70",children:[p+1,"."]})," ",i.issue||"N/A"]}),_.jsxs("span",{className:"px-2.5 py-0.5 bg-white/10 text-white rounded-full text-xs font-bold ring-1 ring-white/20",children:[i.humanCount.toLocaleString()," escapements"]})]},p))})]})]})]})]})}function _Y({monthsData:e,weeklyEscalation:n}){const t=e.flatMap(s=>s.data),r=Tv(t),a=Ev(t)[0],i=O3(t).slice(0,5),p=Dv(t,5);return _.jsxs(_.Fragment,{children:[_.jsxs(zt,{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-xl overflow-hidden relative",children:[_.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"}),_.jsx(Ut,{className:"p-5 relative z-10",children:_.jsxs("div",{className:"text-center text-white",children:[_.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-2 uppercase tracking-wider border border-white/30",children:[_.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Performance Analysis"]}),_.jsx("h2",{className:"text-2xl md:text-3xl font-black mb-1.5 tracking-tight drop-shadow-lg",children:"Dynamic Monthly Overview"}),_.jsx("p",{className:"text-base text-white/90 font-medium max-w-2xl mx-auto",children:"Comprehensive analysis across available months"})]})})]}),_.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(s=>{const c=Dv(s.data,3);return _.jsxs(zt,{className:`relative overflow-hidden shadow-lg border-0 bg-gradient-to-br ${s.colorFrom} ${s.colorTo} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group`,children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),_.jsx(D0,{className:"text-white pb-3 pt-4 relative z-10",children:_.jsxs("div",{className:"text-center",children:[_.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-2 uppercase tracking-wider border border-white/30",children:[_.jsx("svg",{className:"w-2.5 h-2.5",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),s.shortName]}),_.jsx(j0,{className:"text-2xl font-black mb-3 drop-shadow",children:s.name}),_.jsxs("div",{className:"bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-md",children:[_.jsx("p",{className:"text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold",children:"Total Sessions"}),_.jsx("p",{className:"text-4xl font-black tracking-tight drop-shadow-md",children:s.data.length.toLocaleString()}),s.data.length<200&&_.jsx("p",{className:"text-[10px] text-white/80 mt-1 font-medium",children:"Partial data recorded"})]})]})}),_.jsxs(Ut,{className:"p-4 bg-white/95 backdrop-blur-sm relative z-10",children:[_.jsxs("div",{className:"space-y-2 mb-4",children:[_.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm border border-green-200",children:[_.jsxs("div",{className:"flex justify-between items-center mb-1",children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("div",{className:"w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm",children:_.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),_.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Bot Handled"})]}),_.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-green-300",children:_.jsxs("p",{className:"text-sm font-black text-green-700",children:[s.metrics.botPercentage.toFixed(1),"%"]})})]}),_.jsx("p",{className:"text-xl font-black text-gray-900",children:s.metrics.botHandled.toLocaleString()})]}),_.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 shadow-sm border border-orange-200",children:[_.jsxs("div",{className:"flex justify-between items-center mb-1",children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("div",{className:"w-6 h-6 bg-orange-500 rounded flex items-center justify-center shadow-sm",children:_.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),_.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Human Escalated"})]}),_.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-orange-300",children:_.jsxs("p",{className:"text-sm font-black text-orange-700",children:[s.metrics.humanPercentage.toFixed(1),"%"]})})]}),_.jsx("p",{className:"text-xl font-black text-gray-900",children:s.metrics.humanHandled.toLocaleString()})]})]}),_.jsxs("div",{className:"border-t border-slate-100 pt-3",children:[_.jsxs("h5",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1",children:[_.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),"Top 3 Monthly Issues"]}),_.jsx("div",{className:"space-y-1.5",children:c.map((f,m)=>_.jsxs("div",{className:"flex justify-between items-center text-[11px] bg-slate-50 p-1.5 rounded-md border border-slate-100",children:[_.jsx("span",{className:"font-bold text-slate-700 truncate max-w-[120px]",children:f.issue}),_.jsx("span",{className:"font-black text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded",children:f.humanCount})]},m))})]})]})]},s.name)})}),_.jsx(a_,{data:n,title:"Sessions & Escalation Comparison",instanceId:"overview-comparison"}),_.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(s=>_.jsx(o_,{data:s.channels,title:`${s.name} - Channels`},s.name))}),_.jsx(s_,{metrics:r,topChannel:a,top5Products:i,top5Issues:p,monthCount:e.length})]})}const OY="WaggleAIDB",HY=1,Ea="waggle_manual_data_store",x6=()=>new Promise((e,n)=>{const t=indexedDB.open(OY,HY);t.onerror=()=>{console.error("Error opening db",t.error),n(t.error)},t.onsuccess=()=>{e(t.result)},t.onupgradeneeded=r=>{const a=r.target.result;a.objectStoreNames.contains(Ea)||a.createObjectStore(Ea,{keyPath:"id"})}}),NW=async e=>{const n=await x6();return new Promise((t,r)=>{const p=n.transaction(Ea,"readwrite").objectStore(Ea).put({id:"all_data",data:e});p.onsuccess=()=>t(),p.onerror=()=>r(p.error)})},RW=async()=>{const e=await x6();return new Promise((n,t)=>{const i=e.transaction(Ea,"readonly").objectStore(Ea).get("all_data");i.onsuccess=()=>{i.result?n(i.result.data):n([])},i.onerror=()=>t(i.error)})},CY=async()=>{const e=await x6();return new Promise((n,t)=>{const i=e.transaction(Ea,"readwrite").objectStore(Ea).clear();i.onsuccess=()=>n(),i.onerror=()=>t(i.error)})},NY=`Channel,Created at,Product,Issue,Sub Type,Handled
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
`;function RY(){const[e,n]=K.useState([]),[t,r]=K.useState([]),[a,i]=K.useState("all"),[p,s]=K.useState("all"),[c,f]=K.useState([]),[m,d]=K.useState("overview"),v=K.useRef(null),[y,B]=K.useState(null),[I,b]=K.useState(!1),W=K.useRef([]);K.useEffect(()=>{W.current=e},[e]);const[M,A]=K.useState(!1);K.useEffect(()=>{new URLSearchParams(window.location.search).get("admin")==="true"&&A(!0)},[]);const O=E=>{if(!E)return E;const z=E.trim(),V=z.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(V){const[,G,ie,oe]=V;return`${oe.padStart(2,"0")}-${ie.padStart(2,"0")}-${G}`}const R=z.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(R){const[,G,ie,oe]=R;return parseInt(G)>12?`${G.padStart(2,"0")}-${ie.padStart(2,"0")}-${oe}`:`${ie.padStart(2,"0")}-${G.padStart(2,"0")}-${oe}`}const L=new Date(z);return isNaN(L.getTime())?z:`${String(L.getDate()).padStart(2,"0")}-${String(L.getMonth()+1).padStart(2,"0")}-${L.getFullYear()}`},w=E=>{if(!E)return"";const z=E.trim().toLowerCase();return z==="bot"||z==="robot"?"Bot":z==="human"||z==="agent"?"Human":E.trim()},S=(E,...z)=>{if(!E)return"";const V=z.map(R=>R.toLowerCase().replace(/\s+/g,""));for(const R of Object.keys(E)){const L=R.trim().replace(/\r$/,"").toLowerCase().replace(/\s+/g,"");if(V.includes(L))return E[R]||""}return""};K.useEffect(()=>{let E=[];vI.parse(NY,{header:!0,skipEmptyLines:!0,complete:async z=>{E=z.data.map(V=>({channel:S(V,"Channel"),createdAt:O(S(V,"Created at","createdAt","Created date","Date","date","Created Date")),product:S(V,"Product"),issue:S(V,"Issue"),subType:S(V,"Sub Type","subType"),handled:w(S(V,"Handled","Handled By","Handledby"))}));try{const V=localStorage.getItem("waggle_manual_data");let R=await RW();if(V&&R.length===0)try{const L=JSON.parse(V);Array.isArray(L)&&(R=L,await NW(L))}catch{}Array.isArray(R)&&R.length>0&&(E=[...E,...R],b(!0))}catch(V){console.error("Error loading data from IndexedDB",V)}n(E)}})},[]);const N=K.useMemo(()=>{const E=["january","february","march","april","may","june","july","august","september","october","november","december"],z=new Set;return e.forEach(V=>{try{const R=ur(V.createdAt);if(!isNaN(R.getTime())){const L=E[R.getMonth()];z.add(`${L}-${R.getFullYear()}`)}}catch{}}),Array.from(z).sort((V,R)=>{const[L,G]=V.split("-"),[ie,oe]=R.split("-");return G!==oe?parseInt(G)-parseInt(oe):E.indexOf(L)-E.indexOf(ie)})},[e]);K.useEffect(()=>{f(a&&a!=="all"?A3(a):[]),s("all")},[a]),K.useEffect(()=>{e.length>0&&T(a,p)},[p,a,e,m]);const P=E=>{var V;const z=(V=E.target.files)==null?void 0:V[0];z&&(vI.parse(z,{header:!0,skipEmptyLines:!0,complete:R=>{if(!R.data.length){B({type:"error",message:"The CSV file appears to be empty."});return}const L=R.data.map(oe=>({channel:S(oe,"Channel"),createdAt:O(S(oe,"Created at","createdAt","Created date","Date","date","Created Date")),product:S(oe,"Product"),issue:S(oe,"Issue"),subType:S(oe,"Sub Type","subType"),handled:w(S(oe,"Handled","Handled By","Handledby"))})),G=new Set(W.current.map(oe=>`${oe.channel}|${oe.createdAt}|${oe.product}|${oe.issue}|${oe.subType}|${oe.handled}`)),ie=L.filter(oe=>!G.has(`${oe.channel}|${oe.createdAt}|${oe.product}|${oe.issue}|${oe.subType}|${oe.handled}`));ie.length>0?RW().then(async oe=>{const he=[...oe,...ie];await NW(he);try{localStorage.setItem("waggle_manual_data",JSON.stringify(he))}catch{}n(ge=>[...ge,...ie]),b(!0),B({type:"success",message:`Added ${ie.length} rows.`}),setTimeout(()=>B(null),5e3)}).catch(oe=>{console.error("Failed to save manual data",oe),B({type:"error",message:"Failed to save data. Try again."}),setTimeout(()=>B(null),5e3)}):(B({type:"error",message:"No new rows found."}),setTimeout(()=>B(null),5e3))}}),E.target.value="")},H=async()=>{if(confirm("Are you sure you want to remove all manually uploaded data? This cannot be undone."))try{await CY(),localStorage.removeItem("waggle_manual_data"),b(!1),B({type:"success",message:"All uploaded data has been cleared. Reloading..."}),setTimeout(()=>window.location.reload(),1500)}catch(E){console.error("Failed to clear manual data",E),B({type:"error",message:"Failed to clear data."})}},T=(E,z,V)=>{let R=e;if(E!=="all"?R=e.filter(L=>{const G=ur(L.createdAt);return kv(G,E)}):R=e.filter(L=>!isNaN(ur(L.createdAt).getTime())),z!=="all"){const L=c.find(G=>G.value===z);L&&(R=R.filter(G=>_3(ur(G.createdAt),L)))}r(R)},j=Tv(t),k=Ev(t),F=O3(t),Q=ck(t),Y=lk(e,a),X=[{from:"from-blue-500",to:"to-cyan-500"},{from:"from-purple-500",to:"to-indigo-600"},{from:"from-pink-500",to:"to-rose-600"},{from:"from-emerald-500",to:"to-teal-600"},{from:"from-orange-500",to:"to-amber-500"}],Z=(a==="all"?N:[a]).map((E,z)=>{const V=e.filter(ie=>kv(ur(ie.createdAt),E)),[R,L]=E.split("-"),G=X[z%X.length];return{name:`${R.charAt(0).toUpperCase()+R.slice(1)} ${L}`,shortName:`Month ${z+1}`,data:V,metrics:Tv(V),channels:Ev(V),colorFrom:G.from,colorTo:G.to}});return _.jsx("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",children:_.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[_.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[_.jsxs("div",{children:[_.jsxs("h1",{className:"text-3xl font-bold",children:["Waggle AI Chatbot Dashboard ",_.jsx("span",{className:"text-xs font-normal text-gray-400 align-top",children:"v1.3"})]}),_.jsx("p",{className:"text-gray-600 mt-1",children:"Track and analyze customer support interactions"})]}),_.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[_.jsxs("select",{value:a,onChange:E=>i(E.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",children:[_.jsx("option",{value:"all",children:"All Months"}),N.map(E=>_.jsxs("option",{value:E,children:[E.split("-")[0].charAt(0).toUpperCase()+E.split("-")[0].slice(1)," ",E.split("-")[1]]},E))]}),_.jsxs("select",{value:p,onChange:E=>s(E.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",disabled:a==="all",children:[_.jsx("option",{value:"all",children:"All Weeks"}),c.map(E=>_.jsx("option",{value:E.value,children:E.label},E.value))]}),_.jsx("input",{ref:v,type:"file",accept:".csv",onChange:P,className:"hidden"}),M&&I&&_.jsxs(Bf,{onClick:H,variant:"outline",className:"bg-white border-red-300 text-red-600",children:[_.jsx(JC,{className:"w-4 h-4 mr-2"})," Clear Uploads"]}),M&&_.jsxs(Bf,{onClick:()=>{var E;return(E=v.current)==null?void 0:E.click()},variant:"outline",className:"bg-white border-blue-300 text-blue-700",children:[_.jsx(QC,{className:"w-4 h-4 mr-2"})," Add Data"]}),_.jsxs(Bf,{onClick:()=>fk(t),variant:"outline",className:"bg-white",children:[_.jsx(XC,{className:"w-4 h-4 mr-2"})," Export CSV"]})]})]}),y&&_.jsx(zt,{className:`border ${y.type==="success"?"bg-green-50":"bg-red-50"}`,children:_.jsxs(Ut,{className:"p-4 flex items-center justify-between",children:[_.jsx("p",{className:"font-medium",children:y.message}),_.jsx("button",{onClick:()=>B(null),children:_.jsx(uN,{className:"w-4 h-4"})})]})}),a==="all"&&_.jsx("div",{className:"flex justify-center",children:_.jsxs("div",{className:"inline-flex rounded-lg border border-gray-200 bg-white p-1",children:[_.jsx("button",{onClick:()=>d("overview"),className:`px-6 py-2 rounded-md text-sm font-medium ${m==="overview"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Overview Comparison"}),_.jsx("button",{onClick:()=>d("detailed"),className:`px-6 py-2 rounded-md text-sm font-medium ${m==="detailed"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Detailed Analysis"})]})}),a==="all"&&m==="overview"?_.jsx(_Y,{monthsData:Z,weeklyEscalation:Y}):_.jsxs(_.Fragment,{children:[_.jsx(dk,{metrics:j}),_.jsx(s_,{metrics:j,topChannel:k[0],top5Products:F.slice(0,5),top5Issues:Dv(t,5),monthCount:a==="all"?N.length:1}),_.jsx(a_,{data:Y,instanceId:"detailed-analysis"}),_.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[_.jsx(o_,{data:k}),_.jsx(SY,{data:F})]}),_.jsx(zt,{children:_.jsx(Ut,{className:"p-6",children:_.jsxs(RC,{defaultValue:"issues",className:"w-full",children:[_.jsxs(kC,{className:"grid w-full grid-cols-2 max-w-md",children:[_.jsx(PI,{value:"issues",children:"Issue Analysis"}),_.jsx(PI,{value:"sessions",children:"Detailed Sessions"})]}),_.jsx(WI,{value:"issues",className:"mt-6",children:_.jsx(MY,{data:Q})}),_.jsx(WI,{value:"sessions",className:"mt-6",children:_.jsx(AY,{data:t})})]})})})]})]})})}hH.createRoot(document.getElementById("root")).render(_.jsx(RY,{}));
