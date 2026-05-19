var ok=Object.defineProperty;var ik=(e,t,n)=>t in e?ok(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ve=(e,t,n)=>ik(e,typeof t!="symbol"?t+"":t,n);function uk(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hf={exports:{}},$u={},mf={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iI;function sk(){if(iI)return Le;iI=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),d=Symbol.iterator;function v(E){return E===null||typeof E!="object"?null:(E=d&&E[d]||E["@@iterator"],typeof E=="function"?E:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,I={};function b(E,F,J){this.props=E,this.context=F,this.refs=I,this.updater=J||y}b.prototype.isReactComponent={},b.prototype.setState=function(E,F){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,F,"setState")},b.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function S(){}S.prototype=b.prototype;function W(E,F,J){this.props=E,this.context=F,this.refs=I,this.updater=J||y}var A=W.prototype=new S;A.constructor=W,B(A,b.prototype),A.isPureReactComponent=!0;var O=Array.isArray,w=Object.prototype.hasOwnProperty,_={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function P(E,F,J){var ue,he={},ge=null,ye=null;if(F!=null)for(ue in F.ref!==void 0&&(ye=F.ref),F.key!==void 0&&(ge=""+F.key),F)w.call(F,ue)&&!N.hasOwnProperty(ue)&&(he[ue]=F[ue]);var fe=arguments.length-2;if(fe===1)he.children=J;else if(1<fe){for(var ne=Array(fe),de=0;de<fe;de++)ne[de]=arguments[de+2];he.children=ne}if(E&&E.defaultProps)for(ue in fe=E.defaultProps,fe)he[ue]===void 0&&(he[ue]=fe[ue]);return{$$typeof:e,type:E,key:ge,ref:ye,props:he,_owner:_.current}}function C(E,F){return{$$typeof:e,type:E.type,key:F,ref:E.ref,props:E.props,_owner:E._owner}}function R(E){return typeof E=="object"&&E!==null&&E.$$typeof===e}function j(E){var F={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(J){return F[J]})}var T=/\/+/g;function q(E,F){return typeof E=="object"&&E!==null&&E.key!=null?j(""+E.key):F.toString(36)}function L(E,F,J,ue,he){var ge=typeof E;(ge==="undefined"||ge==="boolean")&&(E=null);var ye=!1;if(E===null)ye=!0;else switch(ge){case"string":case"number":ye=!0;break;case"object":switch(E.$$typeof){case e:case t:ye=!0}}if(ye)return ye=E,he=he(ye),E=ue===""?"."+q(ye,0):ue,O(he)?(J="",E!=null&&(J=E.replace(T,"$&/")+"/"),L(he,F,J,"",function(de){return de})):he!=null&&(R(he)&&(he=C(he,J+(!he.key||ye&&ye.key===he.key?"":(""+he.key).replace(T,"$&/")+"/")+E)),F.push(he)),1;if(ye=0,ue=ue===""?".":ue+":",O(E))for(var fe=0;fe<E.length;fe++){ge=E[fe];var ne=ue+q(ge,fe);ye+=L(ge,F,J,ne,he)}else if(ne=v(E),typeof ne=="function")for(E=ne.call(E),fe=0;!(ge=E.next()).done;)ge=ge.value,ne=ue+q(ge,fe++),ye+=L(ge,F,J,ne,he);else if(ge==="object")throw F=String(E),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return ye}function K(E,F,J){if(E==null)return E;var ue=[],he=0;return L(E,ue,"","",function(ge){return F.call(J,ge,he++)}),ue}function U(E){if(E._status===-1){var F=E._result;F=F(),F.then(function(J){(E._status===0||E._status===-1)&&(E._status=1,E._result=J)},function(J){(E._status===0||E._status===-1)&&(E._status=2,E._result=J)}),E._status===-1&&(E._status=0,E._result=F)}if(E._status===1)return E._result.default;throw E._result}var V={current:null},D={transition:null},Q={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:D,ReactCurrentOwner:_};function X(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:K,forEach:function(E,F,J){K(E,function(){F.apply(this,arguments)},J)},count:function(E){var F=0;return K(E,function(){F++}),F},toArray:function(E){return K(E,function(F){return F})||[]},only:function(E){if(!R(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Le.Component=b,Le.Fragment=n,Le.Profiler=a,Le.PureComponent=W,Le.StrictMode=r,Le.Suspense=c,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Le.act=X,Le.cloneElement=function(E,F,J){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var ue=B({},E.props),he=E.key,ge=E.ref,ye=E._owner;if(F!=null){if(F.ref!==void 0&&(ge=F.ref,ye=_.current),F.key!==void 0&&(he=""+F.key),E.type&&E.type.defaultProps)var fe=E.type.defaultProps;for(ne in F)w.call(F,ne)&&!N.hasOwnProperty(ne)&&(ue[ne]=F[ne]===void 0&&fe!==void 0?fe[ne]:F[ne])}var ne=arguments.length-2;if(ne===1)ue.children=J;else if(1<ne){fe=Array(ne);for(var de=0;de<ne;de++)fe[de]=arguments[de+2];ue.children=fe}return{$$typeof:e,type:E.type,key:he,ref:ge,props:ue,_owner:ye}},Le.createContext=function(E){return E={$$typeof:s,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:i,_context:E},E.Consumer=E},Le.createElement=P,Le.createFactory=function(E){var F=P.bind(null,E);return F.type=E,F},Le.createRef=function(){return{current:null}},Le.forwardRef=function(E){return{$$typeof:l,render:E}},Le.isValidElement=R,Le.lazy=function(E){return{$$typeof:h,_payload:{_status:-1,_result:E},_init:U}},Le.memo=function(E,F){return{$$typeof:f,type:E,compare:F===void 0?null:F}},Le.startTransition=function(E){var F=D.transition;D.transition={};try{E()}finally{D.transition=F}},Le.unstable_act=X,Le.useCallback=function(E,F){return V.current.useCallback(E,F)},Le.useContext=function(E){return V.current.useContext(E)},Le.useDebugValue=function(){},Le.useDeferredValue=function(E){return V.current.useDeferredValue(E)},Le.useEffect=function(E,F){return V.current.useEffect(E,F)},Le.useId=function(){return V.current.useId()},Le.useImperativeHandle=function(E,F,J){return V.current.useImperativeHandle(E,F,J)},Le.useInsertionEffect=function(E,F){return V.current.useInsertionEffect(E,F)},Le.useLayoutEffect=function(E,F){return V.current.useLayoutEffect(E,F)},Le.useMemo=function(E,F){return V.current.useMemo(E,F)},Le.useReducer=function(E,F,J){return V.current.useReducer(E,F,J)},Le.useRef=function(E){return V.current.useRef(E)},Le.useState=function(E){return V.current.useState(E)},Le.useSyncExternalStore=function(E,F,J){return V.current.useSyncExternalStore(E,F,J)},Le.useTransition=function(){return V.current.useTransition()},Le.version="18.3.1",Le}var uI;function ly(){return uI||(uI=1,mf.exports=sk()),mf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sI;function lk(){if(sI)return $u;sI=1;var e=ly(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(l,c,f){var h,d={},v=null,y=null;f!==void 0&&(v=""+f),c.key!==void 0&&(v=""+c.key),c.ref!==void 0&&(y=c.ref);for(h in c)r.call(c,h)&&!i.hasOwnProperty(h)&&(d[h]=c[h]);if(l&&l.defaultProps)for(h in c=l.defaultProps,c)d[h]===void 0&&(d[h]=c[h]);return{$$typeof:t,type:l,key:v,ref:y,props:d,_owner:a.current}}return $u.Fragment=n,$u.jsx=s,$u.jsxs=s,$u}var lI;function pk(){return lI||(lI=1,hf.exports=lk()),hf.exports}var M=pk(),cp={},vf={exports:{}},vn={},gf={exports:{}},yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pI;function ck(){return pI||(pI=1,(function(e){function t(D,Q){var X=D.length;D.push(Q);e:for(;0<X;){var E=X-1>>>1,F=D[E];if(0<a(F,Q))D[E]=Q,D[X]=F,X=E;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var Q=D[0],X=D.pop();if(X!==Q){D[0]=X;e:for(var E=0,F=D.length,J=F>>>1;E<J;){var ue=2*(E+1)-1,he=D[ue],ge=ue+1,ye=D[ge];if(0>a(he,X))ge<F&&0>a(ye,he)?(D[E]=ye,D[ge]=X,E=ge):(D[E]=he,D[ue]=X,E=ue);else if(ge<F&&0>a(ye,X))D[E]=ye,D[ge]=X,E=ge;else break e}}return Q}function a(D,Q){var X=D.sortIndex-Q.sortIndex;return X!==0?X:D.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],f=[],h=1,d=null,v=3,y=!1,B=!1,I=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(D){for(var Q=n(f);Q!==null;){if(Q.callback===null)r(f);else if(Q.startTime<=D)r(f),Q.sortIndex=Q.expirationTime,t(c,Q);else break;Q=n(f)}}function O(D){if(I=!1,A(D),!B)if(n(c)!==null)B=!0,U(w);else{var Q=n(f);Q!==null&&V(O,Q.startTime-D)}}function w(D,Q){B=!1,I&&(I=!1,S(P),P=-1),y=!0;var X=v;try{for(A(Q),d=n(c);d!==null&&(!(d.expirationTime>Q)||D&&!j());){var E=d.callback;if(typeof E=="function"){d.callback=null,v=d.priorityLevel;var F=E(d.expirationTime<=Q);Q=e.unstable_now(),typeof F=="function"?d.callback=F:d===n(c)&&r(c),A(Q)}else r(c);d=n(c)}if(d!==null)var J=!0;else{var ue=n(f);ue!==null&&V(O,ue.startTime-Q),J=!1}return J}finally{d=null,v=X,y=!1}}var _=!1,N=null,P=-1,C=5,R=-1;function j(){return!(e.unstable_now()-R<C)}function T(){if(N!==null){var D=e.unstable_now();R=D;var Q=!0;try{Q=N(!0,D)}finally{Q?q():(_=!1,N=null)}}else _=!1}var q;if(typeof W=="function")q=function(){W(T)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,K=L.port2;L.port1.onmessage=T,q=function(){K.postMessage(null)}}else q=function(){b(T,0)};function U(D){N=D,_||(_=!0,q())}function V(D,Q){P=b(function(){D(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){B||y||(B=!0,U(w))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var X=v;v=Q;try{return D()}finally{v=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var X=v;v=D;try{return Q()}finally{v=X}},e.unstable_scheduleCallback=function(D,Q,X){var E=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?E+X:E):X=E,D){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=X+F,D={id:h++,callback:Q,priorityLevel:D,startTime:X,expirationTime:F,sortIndex:-1},X>E?(D.sortIndex=X,t(f,D),n(c)===null&&D===n(f)&&(I?(S(P),P=-1):I=!0,V(O,X-E))):(D.sortIndex=F,t(c,D),B||y||(B=!0,U(w))),D},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(D){var Q=v;return function(){var X=v;v=Q;try{return D.apply(this,arguments)}finally{v=X}}}})(yf)),yf}var cI;function fk(){return cI||(cI=1,gf.exports=ck()),gf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fI;function dk(){if(fI)return vn;fI=1;var e=ly(),t=fk();function n(o){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+o,p=1;p<arguments.length;p++)u+="&args[]="+encodeURIComponent(arguments[p]);return"Minified React error #"+o+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function i(o,u){s(o,u),s(o+"Capture",u)}function s(o,u){for(a[o]=u,o=0;o<u.length;o++)r.add(u[o])}var l=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},d={};function v(o){return c.call(d,o)?!0:c.call(h,o)?!1:f.test(o)?d[o]=!0:(h[o]=!0,!1)}function y(o,u,p,m){if(p!==null&&p.type===0)return!1;switch(typeof u){case"function":case"symbol":return!0;case"boolean":return m?!1:p!==null?!p.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function B(o,u,p,m){if(u===null||typeof u>"u"||y(o,u,p,m))return!0;if(m)return!1;if(p!==null)switch(p.type){case 3:return!u;case 4:return u===!1;case 5:return isNaN(u);case 6:return isNaN(u)||1>u}return!1}function I(o,u,p,m,g,x,k){this.acceptsBooleans=u===2||u===3||u===4,this.attributeName=m,this.attributeNamespace=g,this.mustUseProperty=p,this.propertyName=o,this.type=u,this.sanitizeURL=x,this.removeEmptyString=k}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){b[o]=new I(o,0,!1,o,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var u=o[0];b[u]=new I(u,1,!1,o[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(o){b[o]=new I(o,2,!1,o.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){b[o]=new I(o,2,!1,o,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){b[o]=new I(o,3,!1,o.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(o){b[o]=new I(o,3,!0,o,null,!1,!1)}),["capture","download"].forEach(function(o){b[o]=new I(o,4,!1,o,null,!1,!1)}),["cols","rows","size","span"].forEach(function(o){b[o]=new I(o,6,!1,o,null,!1,!1)}),["rowSpan","start"].forEach(function(o){b[o]=new I(o,5,!1,o.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function W(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var u=o.replace(S,W);b[u]=new I(u,1,!1,o,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var u=o.replace(S,W);b[u]=new I(u,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(o){var u=o.replace(S,W);b[u]=new I(u,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!1,!1)}),b.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(o){b[o]=new I(o,1,!1,o.toLowerCase(),null,!0,!0)});function A(o,u,p,m){var g=b.hasOwnProperty(u)?b[u]:null;(g!==null?g.type!==0:m||!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(B(u,p,g,m)&&(p=null),m||g===null?v(u)&&(p===null?o.removeAttribute(u):o.setAttribute(u,""+p)):g.mustUseProperty?o[g.propertyName]=p===null?g.type===3?!1:"":p:(u=g.attributeName,m=g.attributeNamespace,p===null?o.removeAttribute(u):(g=g.type,p=g===3||g===4&&p===!0?"":""+p,m?o.setAttributeNS(m,u,p):o.setAttribute(u,p))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),_=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),j=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),D=Symbol.iterator;function Q(o){return o===null||typeof o!="object"?null:(o=D&&o[D]||o["@@iterator"],typeof o=="function"?o:null)}var X=Object.assign,E;function F(o){if(E===void 0)try{throw Error()}catch(p){var u=p.stack.trim().match(/\n( *(at )?)/);E=u&&u[1]||""}return`
`+E+o}var J=!1;function ue(o,u){if(!o||J)return"";J=!0;var p=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(u)if(u=function(){throw Error()},Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(te){var m=te}Reflect.construct(o,[],u)}else{try{u.call()}catch(te){m=te}o.call(u.prototype)}else{try{throw Error()}catch(te){m=te}o()}}catch(te){if(te&&m&&typeof te.stack=="string"){for(var g=te.stack.split(`
`),x=m.stack.split(`
`),k=g.length-1,$=x.length-1;1<=k&&0<=$&&g[k]!==x[$];)$--;for(;1<=k&&0<=$;k--,$--)if(g[k]!==x[$]){if(k!==1||$!==1)do if(k--,$--,0>$||g[k]!==x[$]){var z=`
`+g[k].replace(" at new "," at ");return o.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",o.displayName)),z}while(1<=k&&0<=$);break}}}finally{J=!1,Error.prepareStackTrace=p}return(o=o?o.displayName||o.name:"")?F(o):""}function he(o){switch(o.tag){case 5:return F(o.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return o=ue(o.type,!1),o;case 11:return o=ue(o.type.render,!1),o;case 1:return o=ue(o.type,!0),o;default:return""}}function ge(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case N:return"Fragment";case _:return"Portal";case C:return"Profiler";case P:return"StrictMode";case q:return"Suspense";case L:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case j:return(o.displayName||"Context")+".Consumer";case R:return(o._context.displayName||"Context")+".Provider";case T:var u=o.render;return o=o.displayName,o||(o=u.displayName||u.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case K:return u=o.displayName||null,u!==null?u:ge(o.type)||"Memo";case U:u=o._payload,o=o._init;try{return ge(o(u))}catch{}}return null}function ye(o){var u=o.type;switch(o.tag){case 24:return"Cache";case 9:return(u.displayName||"Context")+".Consumer";case 10:return(u._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=u.render,o=o.displayName||o.name||"",u.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return u;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(u);case 8:return u===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u}return null}function fe(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function ne(o){var u=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(u==="checkbox"||u==="radio")}function de(o){var u=ne(o)?"checked":"value",p=Object.getOwnPropertyDescriptor(o.constructor.prototype,u),m=""+o[u];if(!o.hasOwnProperty(u)&&typeof p<"u"&&typeof p.get=="function"&&typeof p.set=="function"){var g=p.get,x=p.set;return Object.defineProperty(o,u,{configurable:!0,get:function(){return g.call(this)},set:function(k){m=""+k,x.call(this,k)}}),Object.defineProperty(o,u,{enumerable:p.enumerable}),{getValue:function(){return m},setValue:function(k){m=""+k},stopTracking:function(){o._valueTracker=null,delete o[u]}}}}function ce(o){o._valueTracker||(o._valueTracker=de(o))}function re(o){if(!o)return!1;var u=o._valueTracker;if(!u)return!0;var p=u.getValue(),m="";return o&&(m=ne(o)?o.checked?"true":"false":o.value),o=m,o!==p?(u.setValue(o),!0):!1}function Re(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function Pe(o,u){var p=u.checked;return X({},u,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:p??o._wrapperState.initialChecked})}function Ce(o,u){var p=u.defaultValue==null?"":u.defaultValue,m=u.checked!=null?u.checked:u.defaultChecked;p=fe(u.value!=null?u.value:p),o._wrapperState={initialChecked:m,initialValue:p,controlled:u.type==="checkbox"||u.type==="radio"?u.checked!=null:u.value!=null}}function Ae(o,u){u=u.checked,u!=null&&A(o,"checked",u,!1)}function Fe(o,u){Ae(o,u);var p=fe(u.value),m=u.type;if(p!=null)m==="number"?(p===0&&o.value===""||o.value!=p)&&(o.value=""+p):o.value!==""+p&&(o.value=""+p);else if(m==="submit"||m==="reset"){o.removeAttribute("value");return}u.hasOwnProperty("value")?qe(o,u.type,p):u.hasOwnProperty("defaultValue")&&qe(o,u.type,fe(u.defaultValue)),u.checked==null&&u.defaultChecked!=null&&(o.defaultChecked=!!u.defaultChecked)}function je(o,u,p){if(u.hasOwnProperty("value")||u.hasOwnProperty("defaultValue")){var m=u.type;if(!(m!=="submit"&&m!=="reset"||u.value!==void 0&&u.value!==null))return;u=""+o._wrapperState.initialValue,p||u===o.value||(o.value=u),o.defaultValue=u}p=o.name,p!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,p!==""&&(o.name=p)}function qe(o,u,p){(u!=="number"||Re(o.ownerDocument)!==o)&&(p==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+p&&(o.defaultValue=""+p))}var Ke=Array.isArray;function Bt(o,u,p,m){if(o=o.options,u){u={};for(var g=0;g<p.length;g++)u["$"+p[g]]=!0;for(p=0;p<o.length;p++)g=u.hasOwnProperty("$"+o[p].value),o[p].selected!==g&&(o[p].selected=g),g&&m&&(o[p].defaultSelected=!0)}else{for(p=""+fe(p),u=null,g=0;g<o.length;g++){if(o[g].value===p){o[g].selected=!0,m&&(o[g].defaultSelected=!0);return}u!==null||o[g].disabled||(u=o[g])}u!==null&&(u.selected=!0)}}function vt(o,u){if(u.dangerouslySetInnerHTML!=null)throw Error(n(91));return X({},u,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function On(o,u){var p=u.value;if(p==null){if(p=u.children,u=u.defaultValue,p!=null){if(u!=null)throw Error(n(92));if(Ke(p)){if(1<p.length)throw Error(n(93));p=p[0]}u=p}u==null&&(u=""),p=u}o._wrapperState={initialValue:fe(p)}}function gt(o,u){var p=fe(u.value),m=fe(u.defaultValue);p!=null&&(p=""+p,p!==o.value&&(o.value=p),u.defaultValue==null&&o.defaultValue!==p&&(o.defaultValue=p)),m!=null&&(o.defaultValue=""+m)}function Kt(o){var u=o.textContent;u===o._wrapperState.initialValue&&u!==""&&u!==null&&(o.value=u)}function xt(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jt(o,u){return o==null||o==="http://www.w3.org/1999/xhtml"?xt(u):o==="http://www.w3.org/2000/svg"&&u==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var pn,Ao=(function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(u,p,m,g){MSApp.execUnsafeLocalFunction(function(){return o(u,p,m,g)})}:o})(function(o,u){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=u;else{for(pn=pn||document.createElement("div"),pn.innerHTML="<svg>"+u.valueOf().toString()+"</svg>",u=pn.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;u.firstChild;)o.appendChild(u.firstChild)}});function ta(o,u){if(u){var p=o.firstChild;if(p&&p===o.lastChild&&p.nodeType===3){p.nodeValue=u;return}}o.textContent=u}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kn=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(o){kn.forEach(function(u){u=u+o.charAt(0).toUpperCase()+o.substring(1),Cn[u]=Cn[o]})});function na(o,u,p){return u==null||typeof u=="boolean"||u===""?"":p||typeof u!="number"||u===0||Cn.hasOwnProperty(o)&&Cn[o]?(""+u).trim():u+"px"}function ru(o,u){o=o.style;for(var p in u)if(u.hasOwnProperty(p)){var m=p.indexOf("--")===0,g=na(p,u[p],m);p==="float"&&(p="cssFloat"),m?o.setProperty(p,g):o[p]=g}}var pO=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function S0(o,u){if(u){if(pO[o]&&(u.children!=null||u.dangerouslySetInnerHTML!=null))throw Error(n(137,o));if(u.dangerouslySetInnerHTML!=null){if(u.children!=null)throw Error(n(60));if(typeof u.dangerouslySetInnerHTML!="object"||!("__html"in u.dangerouslySetInnerHTML))throw Error(n(61))}if(u.style!=null&&typeof u.style!="object")throw Error(n(62))}}function W0(o,u){if(o.indexOf("-")===-1)return typeof u.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A0=null;function _0(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var M0=null,_o=null,Mo=null;function wb(o){if(o=Su(o)){if(typeof M0!="function")throw Error(n(280));var u=o.stateNode;u&&(u=Sl(u),M0(o.stateNode,o.type,u))}}function Pb(o){_o?Mo?Mo.push(o):Mo=[o]:_o=o}function Sb(){if(_o){var o=_o,u=Mo;if(Mo=_o=null,wb(o),u)for(o=0;o<u.length;o++)wb(u[o])}}function Wb(o,u){return o(u)}function Ab(){}var O0=!1;function _b(o,u,p){if(O0)return o(u,p);O0=!0;try{return Wb(o,u,p)}finally{O0=!1,(_o!==null||Mo!==null)&&(Ab(),Sb())}}function au(o,u){var p=o.stateNode;if(p===null)return null;var m=Sl(p);if(m===null)return null;p=m[u];e:switch(u){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(m=!m.disabled)||(o=o.type,m=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!m;break e;default:o=!1}if(o)return null;if(p&&typeof p!="function")throw Error(n(231,u,typeof p));return p}var C0=!1;if(l)try{var ou={};Object.defineProperty(ou,"passive",{get:function(){C0=!0}}),window.addEventListener("test",ou,ou),window.removeEventListener("test",ou,ou)}catch{C0=!1}function cO(o,u,p,m,g,x,k,$,z){var te=Array.prototype.slice.call(arguments,3);try{u.apply(p,te)}catch(ie){this.onError(ie)}}var iu=!1,rl=null,al=!1,k0=null,fO={onError:function(o){iu=!0,rl=o}};function dO(o,u,p,m,g,x,k,$,z){iu=!1,rl=null,cO.apply(fO,arguments)}function hO(o,u,p,m,g,x,k,$,z){if(dO.apply(this,arguments),iu){if(iu){var te=rl;iu=!1,rl=null}else throw Error(n(198));al||(al=!0,k0=te)}}function qa(o){var u=o,p=o;if(o.alternate)for(;u.return;)u=u.return;else{o=u;do u=o,(u.flags&4098)!==0&&(p=u.return),o=u.return;while(o)}return u.tag===3?p:null}function Mb(o){if(o.tag===13){var u=o.memoizedState;if(u===null&&(o=o.alternate,o!==null&&(u=o.memoizedState)),u!==null)return u.dehydrated}return null}function Ob(o){if(qa(o)!==o)throw Error(n(188))}function mO(o){var u=o.alternate;if(!u){if(u=qa(o),u===null)throw Error(n(188));return u!==o?null:o}for(var p=o,m=u;;){var g=p.return;if(g===null)break;var x=g.alternate;if(x===null){if(m=g.return,m!==null){p=m;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===p)return Ob(g),o;if(x===m)return Ob(g),u;x=x.sibling}throw Error(n(188))}if(p.return!==m.return)p=g,m=x;else{for(var k=!1,$=g.child;$;){if($===p){k=!0,p=g,m=x;break}if($===m){k=!0,m=g,p=x;break}$=$.sibling}if(!k){for($=x.child;$;){if($===p){k=!0,p=x,m=g;break}if($===m){k=!0,m=x,p=g;break}$=$.sibling}if(!k)throw Error(n(189))}}if(p.alternate!==m)throw Error(n(190))}if(p.tag!==3)throw Error(n(188));return p.stateNode.current===p?o:u}function Cb(o){return o=mO(o),o!==null?kb(o):null}function kb(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var u=kb(o);if(u!==null)return u;o=o.sibling}return null}var Nb=t.unstable_scheduleCallback,Eb=t.unstable_cancelCallback,vO=t.unstable_shouldYield,gO=t.unstable_requestPaint,wt=t.unstable_now,yO=t.unstable_getCurrentPriorityLevel,N0=t.unstable_ImmediatePriority,Tb=t.unstable_UserBlockingPriority,ol=t.unstable_NormalPriority,bO=t.unstable_LowPriority,Rb=t.unstable_IdlePriority,il=null,fr=null;function IO(o){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(il,o,void 0,(o.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:wO,BO=Math.log,xO=Math.LN2;function wO(o){return o>>>=0,o===0?32:31-(BO(o)/xO|0)|0}var ul=64,sl=4194304;function uu(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function ll(o,u){var p=o.pendingLanes;if(p===0)return 0;var m=0,g=o.suspendedLanes,x=o.pingedLanes,k=p&268435455;if(k!==0){var $=k&~g;$!==0?m=uu($):(x&=k,x!==0&&(m=uu(x)))}else k=p&~g,k!==0?m=uu(k):x!==0&&(m=uu(x));if(m===0)return 0;if(u!==0&&u!==m&&(u&g)===0&&(g=m&-m,x=u&-u,g>=x||g===16&&(x&4194240)!==0))return u;if((m&4)!==0&&(m|=p&16),u=o.entangledLanes,u!==0)for(o=o.entanglements,u&=m;0<u;)p=31-Xn(u),g=1<<p,m|=o[p],u&=~g;return m}function PO(o,u){switch(o){case 1:case 2:case 4:return u+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SO(o,u){for(var p=o.suspendedLanes,m=o.pingedLanes,g=o.expirationTimes,x=o.pendingLanes;0<x;){var k=31-Xn(x),$=1<<k,z=g[k];z===-1?(($&p)===0||($&m)!==0)&&(g[k]=PO($,u)):z<=u&&(o.expiredLanes|=$),x&=~$}}function E0(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Hb(){var o=ul;return ul<<=1,(ul&4194240)===0&&(ul=64),o}function T0(o){for(var u=[],p=0;31>p;p++)u.push(o);return u}function su(o,u,p){o.pendingLanes|=u,u!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,u=31-Xn(u),o[u]=p}function WO(o,u){var p=o.pendingLanes&~u;o.pendingLanes=u,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=u,o.mutableReadLanes&=u,o.entangledLanes&=u,u=o.entanglements;var m=o.eventTimes;for(o=o.expirationTimes;0<p;){var g=31-Xn(p),x=1<<g;u[g]=0,m[g]=-1,o[g]=-1,p&=~x}}function R0(o,u){var p=o.entangledLanes|=u;for(o=o.entanglements;p;){var m=31-Xn(p),g=1<<m;g&u|o[m]&u&&(o[m]|=u),p&=~g}}var Ze=0;function jb(o){return o&=-o,1<o?4<o?(o&268435455)!==0?16:536870912:4:1}var Db,H0,$b,Lb,Fb,j0=!1,pl=[],ra=null,aa=null,oa=null,lu=new Map,pu=new Map,ia=[],AO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qb(o,u){switch(o){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":lu.delete(u.pointerId);break;case"gotpointercapture":case"lostpointercapture":pu.delete(u.pointerId)}}function cu(o,u,p,m,g,x){return o===null||o.nativeEvent!==x?(o={blockedOn:u,domEventName:p,eventSystemFlags:m,nativeEvent:x,targetContainers:[g]},u!==null&&(u=Su(u),u!==null&&H0(u)),o):(o.eventSystemFlags|=m,u=o.targetContainers,g!==null&&u.indexOf(g)===-1&&u.push(g),o)}function _O(o,u,p,m,g){switch(u){case"focusin":return ra=cu(ra,o,u,p,m,g),!0;case"dragenter":return aa=cu(aa,o,u,p,m,g),!0;case"mouseover":return oa=cu(oa,o,u,p,m,g),!0;case"pointerover":var x=g.pointerId;return lu.set(x,cu(lu.get(x)||null,o,u,p,m,g)),!0;case"gotpointercapture":return x=g.pointerId,pu.set(x,cu(pu.get(x)||null,o,u,p,m,g)),!0}return!1}function zb(o){var u=za(o.target);if(u!==null){var p=qa(u);if(p!==null){if(u=p.tag,u===13){if(u=Mb(p),u!==null){o.blockedOn=u,Fb(o.priority,function(){$b(p)});return}}else if(u===3&&p.stateNode.current.memoizedState.isDehydrated){o.blockedOn=p.tag===3?p.stateNode.containerInfo:null;return}}}o.blockedOn=null}function cl(o){if(o.blockedOn!==null)return!1;for(var u=o.targetContainers;0<u.length;){var p=$0(o.domEventName,o.eventSystemFlags,u[0],o.nativeEvent);if(p===null){p=o.nativeEvent;var m=new p.constructor(p.type,p);A0=m,p.target.dispatchEvent(m),A0=null}else return u=Su(p),u!==null&&H0(u),o.blockedOn=p,!1;u.shift()}return!0}function Ub(o,u,p){cl(o)&&p.delete(u)}function MO(){j0=!1,ra!==null&&cl(ra)&&(ra=null),aa!==null&&cl(aa)&&(aa=null),oa!==null&&cl(oa)&&(oa=null),lu.forEach(Ub),pu.forEach(Ub)}function fu(o,u){o.blockedOn===u&&(o.blockedOn=null,j0||(j0=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,MO)))}function du(o){function u(g){return fu(g,o)}if(0<pl.length){fu(pl[0],o);for(var p=1;p<pl.length;p++){var m=pl[p];m.blockedOn===o&&(m.blockedOn=null)}}for(ra!==null&&fu(ra,o),aa!==null&&fu(aa,o),oa!==null&&fu(oa,o),lu.forEach(u),pu.forEach(u),p=0;p<ia.length;p++)m=ia[p],m.blockedOn===o&&(m.blockedOn=null);for(;0<ia.length&&(p=ia[0],p.blockedOn===null);)zb(p),p.blockedOn===null&&ia.shift()}var Oo=O.ReactCurrentBatchConfig,fl=!0;function OO(o,u,p,m){var g=Ze,x=Oo.transition;Oo.transition=null;try{Ze=1,D0(o,u,p,m)}finally{Ze=g,Oo.transition=x}}function CO(o,u,p,m){var g=Ze,x=Oo.transition;Oo.transition=null;try{Ze=4,D0(o,u,p,m)}finally{Ze=g,Oo.transition=x}}function D0(o,u,p,m){if(fl){var g=$0(o,u,p,m);if(g===null)r2(o,u,m,dl,p),qb(o,m);else if(_O(g,o,u,p,m))m.stopPropagation();else if(qb(o,m),u&4&&-1<AO.indexOf(o)){for(;g!==null;){var x=Su(g);if(x!==null&&Db(x),x=$0(o,u,p,m),x===null&&r2(o,u,m,dl,p),x===g)break;g=x}g!==null&&m.stopPropagation()}else r2(o,u,m,null,p)}}var dl=null;function $0(o,u,p,m){if(dl=null,o=_0(m),o=za(o),o!==null)if(u=qa(o),u===null)o=null;else if(p=u.tag,p===13){if(o=Mb(u),o!==null)return o;o=null}else if(p===3){if(u.stateNode.current.memoizedState.isDehydrated)return u.tag===3?u.stateNode.containerInfo:null;o=null}else u!==o&&(o=null);return dl=o,null}function Vb(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yO()){case N0:return 1;case Tb:return 4;case ol:case bO:return 16;case Rb:return 536870912;default:return 16}default:return 16}}var ua=null,L0=null,hl=null;function Gb(){if(hl)return hl;var o,u=L0,p=u.length,m,g="value"in ua?ua.value:ua.textContent,x=g.length;for(o=0;o<p&&u[o]===g[o];o++);var k=p-o;for(m=1;m<=k&&u[p-m]===g[x-m];m++);return hl=g.slice(o,1<m?1-m:void 0)}function ml(o){var u=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&u===13&&(o=13)):o=u,o===10&&(o=13),32<=o||o===13?o:0}function vl(){return!0}function Kb(){return!1}function bn(o){function u(p,m,g,x,k){this._reactName=p,this._targetInst=g,this.type=m,this.nativeEvent=x,this.target=k,this.currentTarget=null;for(var $ in o)o.hasOwnProperty($)&&(p=o[$],this[$]=p?p(x):x[$]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?vl:Kb,this.isPropagationStopped=Kb,this}return X(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var p=this.nativeEvent;p&&(p.preventDefault?p.preventDefault():typeof p.returnValue!="unknown"&&(p.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var p=this.nativeEvent;p&&(p.stopPropagation?p.stopPropagation():typeof p.cancelBubble!="unknown"&&(p.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),u}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},F0=bn(Co),hu=X({},Co,{view:0,detail:0}),kO=bn(hu),q0,z0,mu,gl=X({},hu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:V0,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==mu&&(mu&&o.type==="mousemove"?(q0=o.screenX-mu.screenX,z0=o.screenY-mu.screenY):z0=q0=0,mu=o),q0)},movementY:function(o){return"movementY"in o?o.movementY:z0}}),Qb=bn(gl),NO=X({},gl,{dataTransfer:0}),EO=bn(NO),TO=X({},hu,{relatedTarget:0}),U0=bn(TO),RO=X({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),HO=bn(RO),jO=X({},Co,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),DO=bn(jO),$O=X({},Co,{data:0}),Yb=bn($O),LO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zO(o){var u=this.nativeEvent;return u.getModifierState?u.getModifierState(o):(o=qO[o])?!!u[o]:!1}function V0(){return zO}var UO=X({},hu,{key:function(o){if(o.key){var u=LO[o.key]||o.key;if(u!=="Unidentified")return u}return o.type==="keypress"?(o=ml(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?FO[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:V0,charCode:function(o){return o.type==="keypress"?ml(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?ml(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),VO=bn(UO),GO=X({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xb=bn(GO),KO=X({},hu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:V0}),QO=bn(KO),YO=X({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),XO=bn(YO),ZO=X({},gl,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),JO=bn(ZO),eC=[9,13,27,32],G0=l&&"CompositionEvent"in window,vu=null;l&&"documentMode"in document&&(vu=document.documentMode);var tC=l&&"TextEvent"in window&&!vu,Zb=l&&(!G0||vu&&8<vu&&11>=vu),Jb=" ",e1=!1;function t1(o,u){switch(o){case"keyup":return eC.indexOf(u.keyCode)!==-1;case"keydown":return u.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n1(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var ko=!1;function nC(o,u){switch(o){case"compositionend":return n1(u);case"keypress":return u.which!==32?null:(e1=!0,Jb);case"textInput":return o=u.data,o===Jb&&e1?null:o;default:return null}}function rC(o,u){if(ko)return o==="compositionend"||!G0&&t1(o,u)?(o=Gb(),hl=L0=ua=null,ko=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(u.ctrlKey||u.altKey||u.metaKey)||u.ctrlKey&&u.altKey){if(u.char&&1<u.char.length)return u.char;if(u.which)return String.fromCharCode(u.which)}return null;case"compositionend":return Zb&&u.locale!=="ko"?null:u.data;default:return null}}var aC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function r1(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u==="input"?!!aC[o.type]:u==="textarea"}function a1(o,u,p,m){Pb(m),u=xl(u,"onChange"),0<u.length&&(p=new F0("onChange","change",null,p,m),o.push({event:p,listeners:u}))}var gu=null,yu=null;function oC(o){x1(o,0)}function yl(o){var u=Ho(o);if(re(u))return o}function iC(o,u){if(o==="change")return u}var o1=!1;if(l){var K0;if(l){var Q0="oninput"in document;if(!Q0){var i1=document.createElement("div");i1.setAttribute("oninput","return;"),Q0=typeof i1.oninput=="function"}K0=Q0}else K0=!1;o1=K0&&(!document.documentMode||9<document.documentMode)}function u1(){gu&&(gu.detachEvent("onpropertychange",s1),yu=gu=null)}function s1(o){if(o.propertyName==="value"&&yl(yu)){var u=[];a1(u,yu,o,_0(o)),_b(oC,u)}}function uC(o,u,p){o==="focusin"?(u1(),gu=u,yu=p,gu.attachEvent("onpropertychange",s1)):o==="focusout"&&u1()}function sC(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return yl(yu)}function lC(o,u){if(o==="click")return yl(u)}function pC(o,u){if(o==="input"||o==="change")return yl(u)}function cC(o,u){return o===u&&(o!==0||1/o===1/u)||o!==o&&u!==u}var Zn=typeof Object.is=="function"?Object.is:cC;function bu(o,u){if(Zn(o,u))return!0;if(typeof o!="object"||o===null||typeof u!="object"||u===null)return!1;var p=Object.keys(o),m=Object.keys(u);if(p.length!==m.length)return!1;for(m=0;m<p.length;m++){var g=p[m];if(!c.call(u,g)||!Zn(o[g],u[g]))return!1}return!0}function l1(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function p1(o,u){var p=l1(o);o=0;for(var m;p;){if(p.nodeType===3){if(m=o+p.textContent.length,o<=u&&m>=u)return{node:p,offset:u-o};o=m}e:{for(;p;){if(p.nextSibling){p=p.nextSibling;break e}p=p.parentNode}p=void 0}p=l1(p)}}function c1(o,u){return o&&u?o===u?!0:o&&o.nodeType===3?!1:u&&u.nodeType===3?c1(o,u.parentNode):"contains"in o?o.contains(u):o.compareDocumentPosition?!!(o.compareDocumentPosition(u)&16):!1:!1}function f1(){for(var o=window,u=Re();u instanceof o.HTMLIFrameElement;){try{var p=typeof u.contentWindow.location.href=="string"}catch{p=!1}if(p)o=u.contentWindow;else break;u=Re(o.document)}return u}function Y0(o){var u=o&&o.nodeName&&o.nodeName.toLowerCase();return u&&(u==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||u==="textarea"||o.contentEditable==="true")}function fC(o){var u=f1(),p=o.focusedElem,m=o.selectionRange;if(u!==p&&p&&p.ownerDocument&&c1(p.ownerDocument.documentElement,p)){if(m!==null&&Y0(p)){if(u=m.start,o=m.end,o===void 0&&(o=u),"selectionStart"in p)p.selectionStart=u,p.selectionEnd=Math.min(o,p.value.length);else if(o=(u=p.ownerDocument||document)&&u.defaultView||window,o.getSelection){o=o.getSelection();var g=p.textContent.length,x=Math.min(m.start,g);m=m.end===void 0?x:Math.min(m.end,g),!o.extend&&x>m&&(g=m,m=x,x=g),g=p1(p,x);var k=p1(p,m);g&&k&&(o.rangeCount!==1||o.anchorNode!==g.node||o.anchorOffset!==g.offset||o.focusNode!==k.node||o.focusOffset!==k.offset)&&(u=u.createRange(),u.setStart(g.node,g.offset),o.removeAllRanges(),x>m?(o.addRange(u),o.extend(k.node,k.offset)):(u.setEnd(k.node,k.offset),o.addRange(u)))}}for(u=[],o=p;o=o.parentNode;)o.nodeType===1&&u.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<u.length;p++)o=u[p],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var dC=l&&"documentMode"in document&&11>=document.documentMode,No=null,X0=null,Iu=null,Z0=!1;function d1(o,u,p){var m=p.window===p?p.document:p.nodeType===9?p:p.ownerDocument;Z0||No==null||No!==Re(m)||(m=No,"selectionStart"in m&&Y0(m)?m={start:m.selectionStart,end:m.selectionEnd}:(m=(m.ownerDocument&&m.ownerDocument.defaultView||window).getSelection(),m={anchorNode:m.anchorNode,anchorOffset:m.anchorOffset,focusNode:m.focusNode,focusOffset:m.focusOffset}),Iu&&bu(Iu,m)||(Iu=m,m=xl(X0,"onSelect"),0<m.length&&(u=new F0("onSelect","select",null,u,p),o.push({event:u,listeners:m}),u.target=No)))}function bl(o,u){var p={};return p[o.toLowerCase()]=u.toLowerCase(),p["Webkit"+o]="webkit"+u,p["Moz"+o]="moz"+u,p}var Eo={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},J0={},h1={};l&&(h1=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function Il(o){if(J0[o])return J0[o];if(!Eo[o])return o;var u=Eo[o],p;for(p in u)if(u.hasOwnProperty(p)&&p in h1)return J0[o]=u[p];return o}var m1=Il("animationend"),v1=Il("animationiteration"),g1=Il("animationstart"),y1=Il("transitionend"),b1=new Map,I1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sa(o,u){b1.set(o,u),i(u,[o])}for(var e2=0;e2<I1.length;e2++){var t2=I1[e2],hC=t2.toLowerCase(),mC=t2[0].toUpperCase()+t2.slice(1);sa(hC,"on"+mC)}sa(m1,"onAnimationEnd"),sa(v1,"onAnimationIteration"),sa(g1,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa(y1,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bu));function B1(o,u,p){var m=o.type||"unknown-event";o.currentTarget=p,hO(m,u,void 0,o),o.currentTarget=null}function x1(o,u){u=(u&4)!==0;for(var p=0;p<o.length;p++){var m=o[p],g=m.event;m=m.listeners;e:{var x=void 0;if(u)for(var k=m.length-1;0<=k;k--){var $=m[k],z=$.instance,te=$.currentTarget;if($=$.listener,z!==x&&g.isPropagationStopped())break e;B1(g,$,te),x=z}else for(k=0;k<m.length;k++){if($=m[k],z=$.instance,te=$.currentTarget,$=$.listener,z!==x&&g.isPropagationStopped())break e;B1(g,$,te),x=z}}}if(al)throw o=k0,al=!1,k0=null,o}function it(o,u){var p=u[l2];p===void 0&&(p=u[l2]=new Set);var m=o+"__bubble";p.has(m)||(w1(u,o,2,!1),p.add(m))}function n2(o,u,p){var m=0;u&&(m|=4),w1(p,o,m,u)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function xu(o){if(!o[Bl]){o[Bl]=!0,r.forEach(function(p){p!=="selectionchange"&&(vC.has(p)||n2(p,!1,o),n2(p,!0,o))});var u=o.nodeType===9?o:o.ownerDocument;u===null||u[Bl]||(u[Bl]=!0,n2("selectionchange",!1,u))}}function w1(o,u,p,m){switch(Vb(u)){case 1:var g=OO;break;case 4:g=CO;break;default:g=D0}p=g.bind(null,u,p,o),g=void 0,!C0||u!=="touchstart"&&u!=="touchmove"&&u!=="wheel"||(g=!0),m?g!==void 0?o.addEventListener(u,p,{capture:!0,passive:g}):o.addEventListener(u,p,!0):g!==void 0?o.addEventListener(u,p,{passive:g}):o.addEventListener(u,p,!1)}function r2(o,u,p,m,g){var x=m;if((u&1)===0&&(u&2)===0&&m!==null)e:for(;;){if(m===null)return;var k=m.tag;if(k===3||k===4){var $=m.stateNode.containerInfo;if($===g||$.nodeType===8&&$.parentNode===g)break;if(k===4)for(k=m.return;k!==null;){var z=k.tag;if((z===3||z===4)&&(z=k.stateNode.containerInfo,z===g||z.nodeType===8&&z.parentNode===g))return;k=k.return}for(;$!==null;){if(k=za($),k===null)return;if(z=k.tag,z===5||z===6){m=x=k;continue e}$=$.parentNode}}m=m.return}_b(function(){var te=x,ie=_0(p),se=[];e:{var oe=b1.get(o);if(oe!==void 0){var me=F0,Be=o;switch(o){case"keypress":if(ml(p)===0)break e;case"keydown":case"keyup":me=VO;break;case"focusin":Be="focus",me=U0;break;case"focusout":Be="blur",me=U0;break;case"beforeblur":case"afterblur":me=U0;break;case"click":if(p.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Qb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=EO;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=QO;break;case m1:case v1:case g1:me=HO;break;case y1:me=XO;break;case"scroll":me=kO;break;case"wheel":me=JO;break;case"copy":case"cut":case"paste":me=DO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Xb}var Se=(u&4)!==0,Pt=!Se&&o==="scroll",Z=Se?oe!==null?oe+"Capture":null:oe;Se=[];for(var G=te,ee;G!==null;){ee=G;var pe=ee.stateNode;if(ee.tag===5&&pe!==null&&(ee=pe,Z!==null&&(pe=au(G,Z),pe!=null&&Se.push(wu(G,pe,ee)))),Pt)break;G=G.return}0<Se.length&&(oe=new me(oe,Be,null,p,ie),se.push({event:oe,listeners:Se}))}}if((u&7)===0){e:{if(oe=o==="mouseover"||o==="pointerover",me=o==="mouseout"||o==="pointerout",oe&&p!==A0&&(Be=p.relatedTarget||p.fromElement)&&(za(Be)||Be[_r]))break e;if((me||oe)&&(oe=ie.window===ie?ie:(oe=ie.ownerDocument)?oe.defaultView||oe.parentWindow:window,me?(Be=p.relatedTarget||p.toElement,me=te,Be=Be?za(Be):null,Be!==null&&(Pt=qa(Be),Be!==Pt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(me=null,Be=te),me!==Be)){if(Se=Qb,pe="onMouseLeave",Z="onMouseEnter",G="mouse",(o==="pointerout"||o==="pointerover")&&(Se=Xb,pe="onPointerLeave",Z="onPointerEnter",G="pointer"),Pt=me==null?oe:Ho(me),ee=Be==null?oe:Ho(Be),oe=new Se(pe,G+"leave",me,p,ie),oe.target=Pt,oe.relatedTarget=ee,pe=null,za(ie)===te&&(Se=new Se(Z,G+"enter",Be,p,ie),Se.target=ee,Se.relatedTarget=Pt,pe=Se),Pt=pe,me&&Be)t:{for(Se=me,Z=Be,G=0,ee=Se;ee;ee=To(ee))G++;for(ee=0,pe=Z;pe;pe=To(pe))ee++;for(;0<G-ee;)Se=To(Se),G--;for(;0<ee-G;)Z=To(Z),ee--;for(;G--;){if(Se===Z||Z!==null&&Se===Z.alternate)break t;Se=To(Se),Z=To(Z)}Se=null}else Se=null;me!==null&&P1(se,oe,me,Se,!1),Be!==null&&Pt!==null&&P1(se,Pt,Be,Se,!0)}}e:{if(oe=te?Ho(te):window,me=oe.nodeName&&oe.nodeName.toLowerCase(),me==="select"||me==="input"&&oe.type==="file")var _e=iC;else if(r1(oe))if(o1)_e=pC;else{_e=sC;var Me=uC}else(me=oe.nodeName)&&me.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(_e=lC);if(_e&&(_e=_e(o,te))){a1(se,_e,p,ie);break e}Me&&Me(o,oe,te),o==="focusout"&&(Me=oe._wrapperState)&&Me.controlled&&oe.type==="number"&&qe(oe,"number",oe.value)}switch(Me=te?Ho(te):window,o){case"focusin":(r1(Me)||Me.contentEditable==="true")&&(No=Me,X0=te,Iu=null);break;case"focusout":Iu=X0=No=null;break;case"mousedown":Z0=!0;break;case"contextmenu":case"mouseup":case"dragend":Z0=!1,d1(se,p,ie);break;case"selectionchange":if(dC)break;case"keydown":case"keyup":d1(se,p,ie)}var Oe;if(G0)e:{switch(o){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else ko?t1(o,p)&&(Te="onCompositionEnd"):o==="keydown"&&p.keyCode===229&&(Te="onCompositionStart");Te&&(Zb&&p.locale!=="ko"&&(ko||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&ko&&(Oe=Gb()):(ua=ie,L0="value"in ua?ua.value:ua.textContent,ko=!0)),Me=xl(te,Te),0<Me.length&&(Te=new Yb(Te,o,null,p,ie),se.push({event:Te,listeners:Me}),Oe?Te.data=Oe:(Oe=n1(p),Oe!==null&&(Te.data=Oe)))),(Oe=tC?nC(o,p):rC(o,p))&&(te=xl(te,"onBeforeInput"),0<te.length&&(ie=new Yb("onBeforeInput","beforeinput",null,p,ie),se.push({event:ie,listeners:te}),ie.data=Oe))}x1(se,u)})}function wu(o,u,p){return{instance:o,listener:u,currentTarget:p}}function xl(o,u){for(var p=u+"Capture",m=[];o!==null;){var g=o,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=au(o,p),x!=null&&m.unshift(wu(o,x,g)),x=au(o,u),x!=null&&m.push(wu(o,x,g))),o=o.return}return m}function To(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function P1(o,u,p,m,g){for(var x=u._reactName,k=[];p!==null&&p!==m;){var $=p,z=$.alternate,te=$.stateNode;if(z!==null&&z===m)break;$.tag===5&&te!==null&&($=te,g?(z=au(p,x),z!=null&&k.unshift(wu(p,z,$))):g||(z=au(p,x),z!=null&&k.push(wu(p,z,$)))),p=p.return}k.length!==0&&o.push({event:u,listeners:k})}var gC=/\r\n?/g,yC=/\u0000|\uFFFD/g;function S1(o){return(typeof o=="string"?o:""+o).replace(gC,`
`).replace(yC,"")}function wl(o,u,p){if(u=S1(u),S1(o)!==u&&p)throw Error(n(425))}function Pl(){}var a2=null,o2=null;function i2(o,u){return o==="textarea"||o==="noscript"||typeof u.children=="string"||typeof u.children=="number"||typeof u.dangerouslySetInnerHTML=="object"&&u.dangerouslySetInnerHTML!==null&&u.dangerouslySetInnerHTML.__html!=null}var u2=typeof setTimeout=="function"?setTimeout:void 0,bC=typeof clearTimeout=="function"?clearTimeout:void 0,W1=typeof Promise=="function"?Promise:void 0,IC=typeof queueMicrotask=="function"?queueMicrotask:typeof W1<"u"?function(o){return W1.resolve(null).then(o).catch(BC)}:u2;function BC(o){setTimeout(function(){throw o})}function s2(o,u){var p=u,m=0;do{var g=p.nextSibling;if(o.removeChild(p),g&&g.nodeType===8)if(p=g.data,p==="/$"){if(m===0){o.removeChild(g),du(u);return}m--}else p!=="$"&&p!=="$?"&&p!=="$!"||m++;p=g}while(p);du(u)}function la(o){for(;o!=null;o=o.nextSibling){var u=o.nodeType;if(u===1||u===3)break;if(u===8){if(u=o.data,u==="$"||u==="$!"||u==="$?")break;if(u==="/$")return null}}return o}function A1(o){o=o.previousSibling;for(var u=0;o;){if(o.nodeType===8){var p=o.data;if(p==="$"||p==="$!"||p==="$?"){if(u===0)return o;u--}else p==="/$"&&u++}o=o.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),dr="__reactFiber$"+Ro,Pu="__reactProps$"+Ro,_r="__reactContainer$"+Ro,l2="__reactEvents$"+Ro,xC="__reactListeners$"+Ro,wC="__reactHandles$"+Ro;function za(o){var u=o[dr];if(u)return u;for(var p=o.parentNode;p;){if(u=p[_r]||p[dr]){if(p=u.alternate,u.child!==null||p!==null&&p.child!==null)for(o=A1(o);o!==null;){if(p=o[dr])return p;o=A1(o)}return u}o=p,p=o.parentNode}return null}function Su(o){return o=o[dr]||o[_r],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function Ho(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(n(33))}function Sl(o){return o[Pu]||null}var p2=[],jo=-1;function pa(o){return{current:o}}function ut(o){0>jo||(o.current=p2[jo],p2[jo]=null,jo--)}function nt(o,u){jo++,p2[jo]=o.current,o.current=u}var ca={},Qt=pa(ca),cn=pa(!1),Ua=ca;function Do(o,u){var p=o.type.contextTypes;if(!p)return ca;var m=o.stateNode;if(m&&m.__reactInternalMemoizedUnmaskedChildContext===u)return m.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in p)g[x]=u[x];return m&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=u,o.__reactInternalMemoizedMaskedChildContext=g),g}function fn(o){return o=o.childContextTypes,o!=null}function Wl(){ut(cn),ut(Qt)}function _1(o,u,p){if(Qt.current!==ca)throw Error(n(168));nt(Qt,u),nt(cn,p)}function M1(o,u,p){var m=o.stateNode;if(u=u.childContextTypes,typeof m.getChildContext!="function")return p;m=m.getChildContext();for(var g in m)if(!(g in u))throw Error(n(108,ye(o)||"Unknown",g));return X({},p,m)}function Al(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||ca,Ua=Qt.current,nt(Qt,o),nt(cn,cn.current),!0}function O1(o,u,p){var m=o.stateNode;if(!m)throw Error(n(169));p?(o=M1(o,u,Ua),m.__reactInternalMemoizedMergedChildContext=o,ut(cn),ut(Qt),nt(Qt,o)):ut(cn),nt(cn,p)}var Mr=null,_l=!1,c2=!1;function C1(o){Mr===null?Mr=[o]:Mr.push(o)}function PC(o){_l=!0,C1(o)}function fa(){if(!c2&&Mr!==null){c2=!0;var o=0,u=Ze;try{var p=Mr;for(Ze=1;o<p.length;o++){var m=p[o];do m=m(!0);while(m!==null)}Mr=null,_l=!1}catch(g){throw Mr!==null&&(Mr=Mr.slice(o+1)),Nb(N0,fa),g}finally{Ze=u,c2=!1}}return null}var $o=[],Lo=0,Ml=null,Ol=0,Nn=[],En=0,Va=null,Or=1,Cr="";function Ga(o,u){$o[Lo++]=Ol,$o[Lo++]=Ml,Ml=o,Ol=u}function k1(o,u,p){Nn[En++]=Or,Nn[En++]=Cr,Nn[En++]=Va,Va=o;var m=Or;o=Cr;var g=32-Xn(m)-1;m&=~(1<<g),p+=1;var x=32-Xn(u)+g;if(30<x){var k=g-g%5;x=(m&(1<<k)-1).toString(32),m>>=k,g-=k,Or=1<<32-Xn(u)+g|p<<g|m,Cr=x+o}else Or=1<<x|p<<g|m,Cr=o}function f2(o){o.return!==null&&(Ga(o,1),k1(o,1,0))}function d2(o){for(;o===Ml;)Ml=$o[--Lo],$o[Lo]=null,Ol=$o[--Lo],$o[Lo]=null;for(;o===Va;)Va=Nn[--En],Nn[En]=null,Cr=Nn[--En],Nn[En]=null,Or=Nn[--En],Nn[En]=null}var In=null,Bn=null,pt=!1,Jn=null;function N1(o,u){var p=jn(5,null,null,0);p.elementType="DELETED",p.stateNode=u,p.return=o,u=o.deletions,u===null?(o.deletions=[p],o.flags|=16):u.push(p)}function E1(o,u){switch(o.tag){case 5:var p=o.type;return u=u.nodeType!==1||p.toLowerCase()!==u.nodeName.toLowerCase()?null:u,u!==null?(o.stateNode=u,In=o,Bn=la(u.firstChild),!0):!1;case 6:return u=o.pendingProps===""||u.nodeType!==3?null:u,u!==null?(o.stateNode=u,In=o,Bn=null,!0):!1;case 13:return u=u.nodeType!==8?null:u,u!==null?(p=Va!==null?{id:Or,overflow:Cr}:null,o.memoizedState={dehydrated:u,treeContext:p,retryLane:1073741824},p=jn(18,null,null,0),p.stateNode=u,p.return=o,o.child=p,In=o,Bn=null,!0):!1;default:return!1}}function h2(o){return(o.mode&1)!==0&&(o.flags&128)===0}function m2(o){if(pt){var u=Bn;if(u){var p=u;if(!E1(o,u)){if(h2(o))throw Error(n(418));u=la(p.nextSibling);var m=In;u&&E1(o,u)?N1(m,p):(o.flags=o.flags&-4097|2,pt=!1,In=o)}}else{if(h2(o))throw Error(n(418));o.flags=o.flags&-4097|2,pt=!1,In=o}}}function T1(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;In=o}function Cl(o){if(o!==In)return!1;if(!pt)return T1(o),pt=!0,!1;var u;if((u=o.tag!==3)&&!(u=o.tag!==5)&&(u=o.type,u=u!=="head"&&u!=="body"&&!i2(o.type,o.memoizedProps)),u&&(u=Bn)){if(h2(o))throw R1(),Error(n(418));for(;u;)N1(o,u),u=la(u.nextSibling)}if(T1(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(n(317));e:{for(o=o.nextSibling,u=0;o;){if(o.nodeType===8){var p=o.data;if(p==="/$"){if(u===0){Bn=la(o.nextSibling);break e}u--}else p!=="$"&&p!=="$!"&&p!=="$?"||u++}o=o.nextSibling}Bn=null}}else Bn=In?la(o.stateNode.nextSibling):null;return!0}function R1(){for(var o=Bn;o;)o=la(o.nextSibling)}function Fo(){Bn=In=null,pt=!1}function v2(o){Jn===null?Jn=[o]:Jn.push(o)}var SC=O.ReactCurrentBatchConfig;function Wu(o,u,p){if(o=p.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(p._owner){if(p=p._owner,p){if(p.tag!==1)throw Error(n(309));var m=p.stateNode}if(!m)throw Error(n(147,o));var g=m,x=""+o;return u!==null&&u.ref!==null&&typeof u.ref=="function"&&u.ref._stringRef===x?u.ref:(u=function(k){var $=g.refs;k===null?delete $[x]:$[x]=k},u._stringRef=x,u)}if(typeof o!="string")throw Error(n(284));if(!p._owner)throw Error(n(290,o))}return o}function kl(o,u){throw o=Object.prototype.toString.call(u),Error(n(31,o==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":o))}function H1(o){var u=o._init;return u(o._payload)}function j1(o){function u(Z,G){if(o){var ee=Z.deletions;ee===null?(Z.deletions=[G],Z.flags|=16):ee.push(G)}}function p(Z,G){if(!o)return null;for(;G!==null;)u(Z,G),G=G.sibling;return null}function m(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function g(Z,G){return Z=Ia(Z,G),Z.index=0,Z.sibling=null,Z}function x(Z,G,ee){return Z.index=ee,o?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<G?(Z.flags|=2,G):ee):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function k(Z){return o&&Z.alternate===null&&(Z.flags|=2),Z}function $(Z,G,ee,pe){return G===null||G.tag!==6?(G=sf(ee,Z.mode,pe),G.return=Z,G):(G=g(G,ee),G.return=Z,G)}function z(Z,G,ee,pe){var _e=ee.type;return _e===N?ie(Z,G,ee.props.children,pe,ee.key):G!==null&&(G.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===U&&H1(_e)===G.type)?(pe=g(G,ee.props),pe.ref=Wu(Z,G,ee),pe.return=Z,pe):(pe=np(ee.type,ee.key,ee.props,null,Z.mode,pe),pe.ref=Wu(Z,G,ee),pe.return=Z,pe)}function te(Z,G,ee,pe){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=lf(ee,Z.mode,pe),G.return=Z,G):(G=g(G,ee.children||[]),G.return=Z,G)}function ie(Z,G,ee,pe,_e){return G===null||G.tag!==7?(G=to(ee,Z.mode,pe,_e),G.return=Z,G):(G=g(G,ee),G.return=Z,G)}function se(Z,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return G=sf(""+G,Z.mode,ee),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case w:return ee=np(G.type,G.key,G.props,null,Z.mode,ee),ee.ref=Wu(Z,null,G),ee.return=Z,ee;case _:return G=lf(G,Z.mode,ee),G.return=Z,G;case U:var pe=G._init;return se(Z,pe(G._payload),ee)}if(Ke(G)||Q(G))return G=to(G,Z.mode,ee,null),G.return=Z,G;kl(Z,G)}return null}function oe(Z,G,ee,pe){var _e=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return _e!==null?null:$(Z,G,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:return ee.key===_e?z(Z,G,ee,pe):null;case _:return ee.key===_e?te(Z,G,ee,pe):null;case U:return _e=ee._init,oe(Z,G,_e(ee._payload),pe)}if(Ke(ee)||Q(ee))return _e!==null?null:ie(Z,G,ee,pe,null);kl(Z,ee)}return null}function me(Z,G,ee,pe,_e){if(typeof pe=="string"&&pe!==""||typeof pe=="number")return Z=Z.get(ee)||null,$(G,Z,""+pe,_e);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case w:return Z=Z.get(pe.key===null?ee:pe.key)||null,z(G,Z,pe,_e);case _:return Z=Z.get(pe.key===null?ee:pe.key)||null,te(G,Z,pe,_e);case U:var Me=pe._init;return me(Z,G,ee,Me(pe._payload),_e)}if(Ke(pe)||Q(pe))return Z=Z.get(ee)||null,ie(G,Z,pe,_e,null);kl(G,pe)}return null}function Be(Z,G,ee,pe){for(var _e=null,Me=null,Oe=G,Te=G=0,Lt=null;Oe!==null&&Te<ee.length;Te++){Oe.index>Te?(Lt=Oe,Oe=null):Lt=Oe.sibling;var Ue=oe(Z,Oe,ee[Te],pe);if(Ue===null){Oe===null&&(Oe=Lt);break}o&&Oe&&Ue.alternate===null&&u(Z,Oe),G=x(Ue,G,Te),Me===null?_e=Ue:Me.sibling=Ue,Me=Ue,Oe=Lt}if(Te===ee.length)return p(Z,Oe),pt&&Ga(Z,Te),_e;if(Oe===null){for(;Te<ee.length;Te++)Oe=se(Z,ee[Te],pe),Oe!==null&&(G=x(Oe,G,Te),Me===null?_e=Oe:Me.sibling=Oe,Me=Oe);return pt&&Ga(Z,Te),_e}for(Oe=m(Z,Oe);Te<ee.length;Te++)Lt=me(Oe,Z,Te,ee[Te],pe),Lt!==null&&(o&&Lt.alternate!==null&&Oe.delete(Lt.key===null?Te:Lt.key),G=x(Lt,G,Te),Me===null?_e=Lt:Me.sibling=Lt,Me=Lt);return o&&Oe.forEach(function(Ba){return u(Z,Ba)}),pt&&Ga(Z,Te),_e}function Se(Z,G,ee,pe){var _e=Q(ee);if(typeof _e!="function")throw Error(n(150));if(ee=_e.call(ee),ee==null)throw Error(n(151));for(var Me=_e=null,Oe=G,Te=G=0,Lt=null,Ue=ee.next();Oe!==null&&!Ue.done;Te++,Ue=ee.next()){Oe.index>Te?(Lt=Oe,Oe=null):Lt=Oe.sibling;var Ba=oe(Z,Oe,Ue.value,pe);if(Ba===null){Oe===null&&(Oe=Lt);break}o&&Oe&&Ba.alternate===null&&u(Z,Oe),G=x(Ba,G,Te),Me===null?_e=Ba:Me.sibling=Ba,Me=Ba,Oe=Lt}if(Ue.done)return p(Z,Oe),pt&&Ga(Z,Te),_e;if(Oe===null){for(;!Ue.done;Te++,Ue=ee.next())Ue=se(Z,Ue.value,pe),Ue!==null&&(G=x(Ue,G,Te),Me===null?_e=Ue:Me.sibling=Ue,Me=Ue);return pt&&Ga(Z,Te),_e}for(Oe=m(Z,Oe);!Ue.done;Te++,Ue=ee.next())Ue=me(Oe,Z,Te,Ue.value,pe),Ue!==null&&(o&&Ue.alternate!==null&&Oe.delete(Ue.key===null?Te:Ue.key),G=x(Ue,G,Te),Me===null?_e=Ue:Me.sibling=Ue,Me=Ue);return o&&Oe.forEach(function(ak){return u(Z,ak)}),pt&&Ga(Z,Te),_e}function Pt(Z,G,ee,pe){if(typeof ee=="object"&&ee!==null&&ee.type===N&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case w:e:{for(var _e=ee.key,Me=G;Me!==null;){if(Me.key===_e){if(_e=ee.type,_e===N){if(Me.tag===7){p(Z,Me.sibling),G=g(Me,ee.props.children),G.return=Z,Z=G;break e}}else if(Me.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===U&&H1(_e)===Me.type){p(Z,Me.sibling),G=g(Me,ee.props),G.ref=Wu(Z,Me,ee),G.return=Z,Z=G;break e}p(Z,Me);break}else u(Z,Me);Me=Me.sibling}ee.type===N?(G=to(ee.props.children,Z.mode,pe,ee.key),G.return=Z,Z=G):(pe=np(ee.type,ee.key,ee.props,null,Z.mode,pe),pe.ref=Wu(Z,G,ee),pe.return=Z,Z=pe)}return k(Z);case _:e:{for(Me=ee.key;G!==null;){if(G.key===Me)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){p(Z,G.sibling),G=g(G,ee.children||[]),G.return=Z,Z=G;break e}else{p(Z,G);break}else u(Z,G);G=G.sibling}G=lf(ee,Z.mode,pe),G.return=Z,Z=G}return k(Z);case U:return Me=ee._init,Pt(Z,G,Me(ee._payload),pe)}if(Ke(ee))return Be(Z,G,ee,pe);if(Q(ee))return Se(Z,G,ee,pe);kl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,G!==null&&G.tag===6?(p(Z,G.sibling),G=g(G,ee),G.return=Z,Z=G):(p(Z,G),G=sf(ee,Z.mode,pe),G.return=Z,Z=G),k(Z)):p(Z,G)}return Pt}var qo=j1(!0),D1=j1(!1),Nl=pa(null),El=null,zo=null,g2=null;function y2(){g2=zo=El=null}function b2(o){var u=Nl.current;ut(Nl),o._currentValue=u}function I2(o,u,p){for(;o!==null;){var m=o.alternate;if((o.childLanes&u)!==u?(o.childLanes|=u,m!==null&&(m.childLanes|=u)):m!==null&&(m.childLanes&u)!==u&&(m.childLanes|=u),o===p)break;o=o.return}}function Uo(o,u){El=o,g2=zo=null,o=o.dependencies,o!==null&&o.firstContext!==null&&((o.lanes&u)!==0&&(dn=!0),o.firstContext=null)}function Tn(o){var u=o._currentValue;if(g2!==o)if(o={context:o,memoizedValue:u,next:null},zo===null){if(El===null)throw Error(n(308));zo=o,El.dependencies={lanes:0,firstContext:o}}else zo=zo.next=o;return u}var Ka=null;function B2(o){Ka===null?Ka=[o]:Ka.push(o)}function $1(o,u,p,m){var g=u.interleaved;return g===null?(p.next=p,B2(u)):(p.next=g.next,g.next=p),u.interleaved=p,kr(o,m)}function kr(o,u){o.lanes|=u;var p=o.alternate;for(p!==null&&(p.lanes|=u),p=o,o=o.return;o!==null;)o.childLanes|=u,p=o.alternate,p!==null&&(p.childLanes|=u),p=o,o=o.return;return p.tag===3?p.stateNode:null}var da=!1;function x2(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L1(o,u){o=o.updateQueue,u.updateQueue===o&&(u.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Nr(o,u){return{eventTime:o,lane:u,tag:0,payload:null,callback:null,next:null}}function ha(o,u,p){var m=o.updateQueue;if(m===null)return null;if(m=m.shared,(ze&2)!==0){var g=m.pending;return g===null?u.next=u:(u.next=g.next,g.next=u),m.pending=u,kr(o,p)}return g=m.interleaved,g===null?(u.next=u,B2(m)):(u.next=g.next,g.next=u),m.interleaved=u,kr(o,p)}function Tl(o,u,p){if(u=u.updateQueue,u!==null&&(u=u.shared,(p&4194240)!==0)){var m=u.lanes;m&=o.pendingLanes,p|=m,u.lanes=p,R0(o,p)}}function F1(o,u){var p=o.updateQueue,m=o.alternate;if(m!==null&&(m=m.updateQueue,p===m)){var g=null,x=null;if(p=p.firstBaseUpdate,p!==null){do{var k={eventTime:p.eventTime,lane:p.lane,tag:p.tag,payload:p.payload,callback:p.callback,next:null};x===null?g=x=k:x=x.next=k,p=p.next}while(p!==null);x===null?g=x=u:x=x.next=u}else g=x=u;p={baseState:m.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:m.shared,effects:m.effects},o.updateQueue=p;return}o=p.lastBaseUpdate,o===null?p.firstBaseUpdate=u:o.next=u,p.lastBaseUpdate=u}function Rl(o,u,p,m){var g=o.updateQueue;da=!1;var x=g.firstBaseUpdate,k=g.lastBaseUpdate,$=g.shared.pending;if($!==null){g.shared.pending=null;var z=$,te=z.next;z.next=null,k===null?x=te:k.next=te,k=z;var ie=o.alternate;ie!==null&&(ie=ie.updateQueue,$=ie.lastBaseUpdate,$!==k&&($===null?ie.firstBaseUpdate=te:$.next=te,ie.lastBaseUpdate=z))}if(x!==null){var se=g.baseState;k=0,ie=te=z=null,$=x;do{var oe=$.lane,me=$.eventTime;if((m&oe)===oe){ie!==null&&(ie=ie.next={eventTime:me,lane:0,tag:$.tag,payload:$.payload,callback:$.callback,next:null});e:{var Be=o,Se=$;switch(oe=u,me=p,Se.tag){case 1:if(Be=Se.payload,typeof Be=="function"){se=Be.call(me,se,oe);break e}se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Se.payload,oe=typeof Be=="function"?Be.call(me,se,oe):Be,oe==null)break e;se=X({},se,oe);break e;case 2:da=!0}}$.callback!==null&&$.lane!==0&&(o.flags|=64,oe=g.effects,oe===null?g.effects=[$]:oe.push($))}else me={eventTime:me,lane:oe,tag:$.tag,payload:$.payload,callback:$.callback,next:null},ie===null?(te=ie=me,z=se):ie=ie.next=me,k|=oe;if($=$.next,$===null){if($=g.shared.pending,$===null)break;oe=$,$=oe.next,oe.next=null,g.lastBaseUpdate=oe,g.shared.pending=null}}while(!0);if(ie===null&&(z=se),g.baseState=z,g.firstBaseUpdate=te,g.lastBaseUpdate=ie,u=g.shared.interleaved,u!==null){g=u;do k|=g.lane,g=g.next;while(g!==u)}else x===null&&(g.shared.lanes=0);Xa|=k,o.lanes=k,o.memoizedState=se}}function q1(o,u,p){if(o=u.effects,u.effects=null,o!==null)for(u=0;u<o.length;u++){var m=o[u],g=m.callback;if(g!==null){if(m.callback=null,m=p,typeof g!="function")throw Error(n(191,g));g.call(m)}}}var Au={},hr=pa(Au),_u=pa(Au),Mu=pa(Au);function Qa(o){if(o===Au)throw Error(n(174));return o}function w2(o,u){switch(nt(Mu,u),nt(_u,o),nt(hr,Au),o=u.nodeType,o){case 9:case 11:u=(u=u.documentElement)?u.namespaceURI:jt(null,"");break;default:o=o===8?u.parentNode:u,u=o.namespaceURI||null,o=o.tagName,u=jt(u,o)}ut(hr),nt(hr,u)}function Vo(){ut(hr),ut(_u),ut(Mu)}function z1(o){Qa(Mu.current);var u=Qa(hr.current),p=jt(u,o.type);u!==p&&(nt(_u,o),nt(hr,p))}function P2(o){_u.current===o&&(ut(hr),ut(_u))}var ft=pa(0);function Hl(o){for(var u=o;u!==null;){if(u.tag===13){var p=u.memoizedState;if(p!==null&&(p=p.dehydrated,p===null||p.data==="$?"||p.data==="$!"))return u}else if(u.tag===19&&u.memoizedProps.revealOrder!==void 0){if((u.flags&128)!==0)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var S2=[];function W2(){for(var o=0;o<S2.length;o++)S2[o]._workInProgressVersionPrimary=null;S2.length=0}var jl=O.ReactCurrentDispatcher,A2=O.ReactCurrentBatchConfig,Ya=0,dt=null,kt=null,Dt=null,Dl=!1,Ou=!1,Cu=0,WC=0;function Yt(){throw Error(n(321))}function _2(o,u){if(u===null)return!1;for(var p=0;p<u.length&&p<o.length;p++)if(!Zn(o[p],u[p]))return!1;return!0}function M2(o,u,p,m,g,x){if(Ya=x,dt=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,jl.current=o===null||o.memoizedState===null?OC:CC,o=p(m,g),Ou){x=0;do{if(Ou=!1,Cu=0,25<=x)throw Error(n(301));x+=1,Dt=kt=null,u.updateQueue=null,jl.current=kC,o=p(m,g)}while(Ou)}if(jl.current=Fl,u=kt!==null&&kt.next!==null,Ya=0,Dt=kt=dt=null,Dl=!1,u)throw Error(n(300));return o}function O2(){var o=Cu!==0;return Cu=0,o}function mr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?dt.memoizedState=Dt=o:Dt=Dt.next=o,Dt}function Rn(){if(kt===null){var o=dt.alternate;o=o!==null?o.memoizedState:null}else o=kt.next;var u=Dt===null?dt.memoizedState:Dt.next;if(u!==null)Dt=u,kt=o;else{if(o===null)throw Error(n(310));kt=o,o={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Dt===null?dt.memoizedState=Dt=o:Dt=Dt.next=o}return Dt}function ku(o,u){return typeof u=="function"?u(o):u}function C2(o){var u=Rn(),p=u.queue;if(p===null)throw Error(n(311));p.lastRenderedReducer=o;var m=kt,g=m.baseQueue,x=p.pending;if(x!==null){if(g!==null){var k=g.next;g.next=x.next,x.next=k}m.baseQueue=g=x,p.pending=null}if(g!==null){x=g.next,m=m.baseState;var $=k=null,z=null,te=x;do{var ie=te.lane;if((Ya&ie)===ie)z!==null&&(z=z.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),m=te.hasEagerState?te.eagerState:o(m,te.action);else{var se={lane:ie,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};z===null?($=z=se,k=m):z=z.next=se,dt.lanes|=ie,Xa|=ie}te=te.next}while(te!==null&&te!==x);z===null?k=m:z.next=$,Zn(m,u.memoizedState)||(dn=!0),u.memoizedState=m,u.baseState=k,u.baseQueue=z,p.lastRenderedState=m}if(o=p.interleaved,o!==null){g=o;do x=g.lane,dt.lanes|=x,Xa|=x,g=g.next;while(g!==o)}else g===null&&(p.lanes=0);return[u.memoizedState,p.dispatch]}function k2(o){var u=Rn(),p=u.queue;if(p===null)throw Error(n(311));p.lastRenderedReducer=o;var m=p.dispatch,g=p.pending,x=u.memoizedState;if(g!==null){p.pending=null;var k=g=g.next;do x=o(x,k.action),k=k.next;while(k!==g);Zn(x,u.memoizedState)||(dn=!0),u.memoizedState=x,u.baseQueue===null&&(u.baseState=x),p.lastRenderedState=x}return[x,m]}function U1(){}function V1(o,u){var p=dt,m=Rn(),g=u(),x=!Zn(m.memoizedState,g);if(x&&(m.memoizedState=g,dn=!0),m=m.queue,N2(Q1.bind(null,p,m,o),[o]),m.getSnapshot!==u||x||Dt!==null&&Dt.memoizedState.tag&1){if(p.flags|=2048,Nu(9,K1.bind(null,p,m,g,u),void 0,null),$t===null)throw Error(n(349));(Ya&30)!==0||G1(p,u,g)}return g}function G1(o,u,p){o.flags|=16384,o={getSnapshot:u,value:p},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.stores=[o]):(p=u.stores,p===null?u.stores=[o]:p.push(o))}function K1(o,u,p,m){u.value=p,u.getSnapshot=m,Y1(u)&&X1(o)}function Q1(o,u,p){return p(function(){Y1(u)&&X1(o)})}function Y1(o){var u=o.getSnapshot;o=o.value;try{var p=u();return!Zn(o,p)}catch{return!0}}function X1(o){var u=kr(o,1);u!==null&&rr(u,o,1,-1)}function Z1(o){var u=mr();return typeof o=="function"&&(o=o()),u.memoizedState=u.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ku,lastRenderedState:o},u.queue=o,o=o.dispatch=MC.bind(null,dt,o),[u.memoizedState,o]}function Nu(o,u,p,m){return o={tag:o,create:u,destroy:p,deps:m,next:null},u=dt.updateQueue,u===null?(u={lastEffect:null,stores:null},dt.updateQueue=u,u.lastEffect=o.next=o):(p=u.lastEffect,p===null?u.lastEffect=o.next=o:(m=p.next,p.next=o,o.next=m,u.lastEffect=o)),o}function J1(){return Rn().memoizedState}function $l(o,u,p,m){var g=mr();dt.flags|=o,g.memoizedState=Nu(1|u,p,void 0,m===void 0?null:m)}function Ll(o,u,p,m){var g=Rn();m=m===void 0?null:m;var x=void 0;if(kt!==null){var k=kt.memoizedState;if(x=k.destroy,m!==null&&_2(m,k.deps)){g.memoizedState=Nu(u,p,x,m);return}}dt.flags|=o,g.memoizedState=Nu(1|u,p,x,m)}function e6(o,u){return $l(8390656,8,o,u)}function N2(o,u){return Ll(2048,8,o,u)}function t6(o,u){return Ll(4,2,o,u)}function n6(o,u){return Ll(4,4,o,u)}function r6(o,u){if(typeof u=="function")return o=o(),u(o),function(){u(null)};if(u!=null)return o=o(),u.current=o,function(){u.current=null}}function a6(o,u,p){return p=p!=null?p.concat([o]):null,Ll(4,4,r6.bind(null,u,o),p)}function E2(){}function o6(o,u){var p=Rn();u=u===void 0?null:u;var m=p.memoizedState;return m!==null&&u!==null&&_2(u,m[1])?m[0]:(p.memoizedState=[o,u],o)}function i6(o,u){var p=Rn();u=u===void 0?null:u;var m=p.memoizedState;return m!==null&&u!==null&&_2(u,m[1])?m[0]:(o=o(),p.memoizedState=[o,u],o)}function u6(o,u,p){return(Ya&21)===0?(o.baseState&&(o.baseState=!1,dn=!0),o.memoizedState=p):(Zn(p,u)||(p=Hb(),dt.lanes|=p,Xa|=p,o.baseState=!0),u)}function AC(o,u){var p=Ze;Ze=p!==0&&4>p?p:4,o(!0);var m=A2.transition;A2.transition={};try{o(!1),u()}finally{Ze=p,A2.transition=m}}function s6(){return Rn().memoizedState}function _C(o,u,p){var m=ya(o);if(p={lane:m,action:p,hasEagerState:!1,eagerState:null,next:null},l6(o))p6(u,p);else if(p=$1(o,u,p,m),p!==null){var g=nn();rr(p,o,m,g),c6(p,u,m)}}function MC(o,u,p){var m=ya(o),g={lane:m,action:p,hasEagerState:!1,eagerState:null,next:null};if(l6(o))p6(u,g);else{var x=o.alternate;if(o.lanes===0&&(x===null||x.lanes===0)&&(x=u.lastRenderedReducer,x!==null))try{var k=u.lastRenderedState,$=x(k,p);if(g.hasEagerState=!0,g.eagerState=$,Zn($,k)){var z=u.interleaved;z===null?(g.next=g,B2(u)):(g.next=z.next,z.next=g),u.interleaved=g;return}}catch{}finally{}p=$1(o,u,g,m),p!==null&&(g=nn(),rr(p,o,m,g),c6(p,u,m))}}function l6(o){var u=o.alternate;return o===dt||u!==null&&u===dt}function p6(o,u){Ou=Dl=!0;var p=o.pending;p===null?u.next=u:(u.next=p.next,p.next=u),o.pending=u}function c6(o,u,p){if((p&4194240)!==0){var m=u.lanes;m&=o.pendingLanes,p|=m,u.lanes=p,R0(o,p)}}var Fl={readContext:Tn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},OC={readContext:Tn,useCallback:function(o,u){return mr().memoizedState=[o,u===void 0?null:u],o},useContext:Tn,useEffect:e6,useImperativeHandle:function(o,u,p){return p=p!=null?p.concat([o]):null,$l(4194308,4,r6.bind(null,u,o),p)},useLayoutEffect:function(o,u){return $l(4194308,4,o,u)},useInsertionEffect:function(o,u){return $l(4,2,o,u)},useMemo:function(o,u){var p=mr();return u=u===void 0?null:u,o=o(),p.memoizedState=[o,u],o},useReducer:function(o,u,p){var m=mr();return u=p!==void 0?p(u):u,m.memoizedState=m.baseState=u,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:u},m.queue=o,o=o.dispatch=_C.bind(null,dt,o),[m.memoizedState,o]},useRef:function(o){var u=mr();return o={current:o},u.memoizedState=o},useState:Z1,useDebugValue:E2,useDeferredValue:function(o){return mr().memoizedState=o},useTransition:function(){var o=Z1(!1),u=o[0];return o=AC.bind(null,o[1]),mr().memoizedState=o,[u,o]},useMutableSource:function(){},useSyncExternalStore:function(o,u,p){var m=dt,g=mr();if(pt){if(p===void 0)throw Error(n(407));p=p()}else{if(p=u(),$t===null)throw Error(n(349));(Ya&30)!==0||G1(m,u,p)}g.memoizedState=p;var x={value:p,getSnapshot:u};return g.queue=x,e6(Q1.bind(null,m,x,o),[o]),m.flags|=2048,Nu(9,K1.bind(null,m,x,p,u),void 0,null),p},useId:function(){var o=mr(),u=$t.identifierPrefix;if(pt){var p=Cr,m=Or;p=(m&~(1<<32-Xn(m)-1)).toString(32)+p,u=":"+u+"R"+p,p=Cu++,0<p&&(u+="H"+p.toString(32)),u+=":"}else p=WC++,u=":"+u+"r"+p.toString(32)+":";return o.memoizedState=u},unstable_isNewReconciler:!1},CC={readContext:Tn,useCallback:o6,useContext:Tn,useEffect:N2,useImperativeHandle:a6,useInsertionEffect:t6,useLayoutEffect:n6,useMemo:i6,useReducer:C2,useRef:J1,useState:function(){return C2(ku)},useDebugValue:E2,useDeferredValue:function(o){var u=Rn();return u6(u,kt.memoizedState,o)},useTransition:function(){var o=C2(ku)[0],u=Rn().memoizedState;return[o,u]},useMutableSource:U1,useSyncExternalStore:V1,useId:s6,unstable_isNewReconciler:!1},kC={readContext:Tn,useCallback:o6,useContext:Tn,useEffect:N2,useImperativeHandle:a6,useInsertionEffect:t6,useLayoutEffect:n6,useMemo:i6,useReducer:k2,useRef:J1,useState:function(){return k2(ku)},useDebugValue:E2,useDeferredValue:function(o){var u=Rn();return kt===null?u.memoizedState=o:u6(u,kt.memoizedState,o)},useTransition:function(){var o=k2(ku)[0],u=Rn().memoizedState;return[o,u]},useMutableSource:U1,useSyncExternalStore:V1,useId:s6,unstable_isNewReconciler:!1};function er(o,u){if(o&&o.defaultProps){u=X({},u),o=o.defaultProps;for(var p in o)u[p]===void 0&&(u[p]=o[p]);return u}return u}function T2(o,u,p,m){u=o.memoizedState,p=p(m,u),p=p==null?u:X({},u,p),o.memoizedState=p,o.lanes===0&&(o.updateQueue.baseState=p)}var ql={isMounted:function(o){return(o=o._reactInternals)?qa(o)===o:!1},enqueueSetState:function(o,u,p){o=o._reactInternals;var m=nn(),g=ya(o),x=Nr(m,g);x.payload=u,p!=null&&(x.callback=p),u=ha(o,x,g),u!==null&&(rr(u,o,g,m),Tl(u,o,g))},enqueueReplaceState:function(o,u,p){o=o._reactInternals;var m=nn(),g=ya(o),x=Nr(m,g);x.tag=1,x.payload=u,p!=null&&(x.callback=p),u=ha(o,x,g),u!==null&&(rr(u,o,g,m),Tl(u,o,g))},enqueueForceUpdate:function(o,u){o=o._reactInternals;var p=nn(),m=ya(o),g=Nr(p,m);g.tag=2,u!=null&&(g.callback=u),u=ha(o,g,m),u!==null&&(rr(u,o,m,p),Tl(u,o,m))}};function f6(o,u,p,m,g,x,k){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(m,x,k):u.prototype&&u.prototype.isPureReactComponent?!bu(p,m)||!bu(g,x):!0}function d6(o,u,p){var m=!1,g=ca,x=u.contextType;return typeof x=="object"&&x!==null?x=Tn(x):(g=fn(u)?Ua:Qt.current,m=u.contextTypes,x=(m=m!=null)?Do(o,g):ca),u=new u(p,x),o.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ql,o.stateNode=u,u._reactInternals=o,m&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=g,o.__reactInternalMemoizedMaskedChildContext=x),u}function h6(o,u,p,m){o=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(p,m),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(p,m),u.state!==o&&ql.enqueueReplaceState(u,u.state,null)}function R2(o,u,p,m){var g=o.stateNode;g.props=p,g.state=o.memoizedState,g.refs={},x2(o);var x=u.contextType;typeof x=="object"&&x!==null?g.context=Tn(x):(x=fn(u)?Ua:Qt.current,g.context=Do(o,x)),g.state=o.memoizedState,x=u.getDerivedStateFromProps,typeof x=="function"&&(T2(o,u,x,p),g.state=o.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(u=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),u!==g.state&&ql.enqueueReplaceState(g,g.state,null),Rl(o,p,g,m),g.state=o.memoizedState),typeof g.componentDidMount=="function"&&(o.flags|=4194308)}function Go(o,u){try{var p="",m=u;do p+=he(m),m=m.return;while(m);var g=p}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:o,source:u,stack:g,digest:null}}function H2(o,u,p){return{value:o,source:null,stack:p??null,digest:u??null}}function j2(o,u){try{console.error(u.value)}catch(p){setTimeout(function(){throw p})}}var NC=typeof WeakMap=="function"?WeakMap:Map;function m6(o,u,p){p=Nr(-1,p),p.tag=3,p.payload={element:null};var m=u.value;return p.callback=function(){Yl||(Yl=!0,J2=m),j2(o,u)},p}function v6(o,u,p){p=Nr(-1,p),p.tag=3;var m=o.type.getDerivedStateFromError;if(typeof m=="function"){var g=u.value;p.payload=function(){return m(g)},p.callback=function(){j2(o,u)}}var x=o.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(p.callback=function(){j2(o,u),typeof m!="function"&&(va===null?va=new Set([this]):va.add(this));var k=u.stack;this.componentDidCatch(u.value,{componentStack:k!==null?k:""})}),p}function g6(o,u,p){var m=o.pingCache;if(m===null){m=o.pingCache=new NC;var g=new Set;m.set(u,g)}else g=m.get(u),g===void 0&&(g=new Set,m.set(u,g));g.has(p)||(g.add(p),o=GC.bind(null,o,u,p),u.then(o,o))}function y6(o){do{var u;if((u=o.tag===13)&&(u=o.memoizedState,u=u!==null?u.dehydrated!==null:!0),u)return o;o=o.return}while(o!==null);return null}function b6(o,u,p,m,g){return(o.mode&1)===0?(o===u?o.flags|=65536:(o.flags|=128,p.flags|=131072,p.flags&=-52805,p.tag===1&&(p.alternate===null?p.tag=17:(u=Nr(-1,1),u.tag=2,ha(p,u,1))),p.lanes|=1),o):(o.flags|=65536,o.lanes=g,o)}var EC=O.ReactCurrentOwner,dn=!1;function tn(o,u,p,m){u.child=o===null?D1(u,null,p,m):qo(u,o.child,p,m)}function I6(o,u,p,m,g){p=p.render;var x=u.ref;return Uo(u,g),m=M2(o,u,p,m,x,g),p=O2(),o!==null&&!dn?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Er(o,u,g)):(pt&&p&&f2(u),u.flags|=1,tn(o,u,m,g),u.child)}function B6(o,u,p,m,g){if(o===null){var x=p.type;return typeof x=="function"&&!uf(x)&&x.defaultProps===void 0&&p.compare===null&&p.defaultProps===void 0?(u.tag=15,u.type=x,x6(o,u,x,m,g)):(o=np(p.type,null,m,u,u.mode,g),o.ref=u.ref,o.return=u,u.child=o)}if(x=o.child,(o.lanes&g)===0){var k=x.memoizedProps;if(p=p.compare,p=p!==null?p:bu,p(k,m)&&o.ref===u.ref)return Er(o,u,g)}return u.flags|=1,o=Ia(x,m),o.ref=u.ref,o.return=u,u.child=o}function x6(o,u,p,m,g){if(o!==null){var x=o.memoizedProps;if(bu(x,m)&&o.ref===u.ref)if(dn=!1,u.pendingProps=m=x,(o.lanes&g)!==0)(o.flags&131072)!==0&&(dn=!0);else return u.lanes=o.lanes,Er(o,u,g)}return D2(o,u,p,m,g)}function w6(o,u,p){var m=u.pendingProps,g=m.children,x=o!==null?o.memoizedState:null;if(m.mode==="hidden")if((u.mode&1)===0)u.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Qo,xn),xn|=p;else{if((p&1073741824)===0)return o=x!==null?x.baseLanes|p:p,u.lanes=u.childLanes=1073741824,u.memoizedState={baseLanes:o,cachePool:null,transitions:null},u.updateQueue=null,nt(Qo,xn),xn|=o,null;u.memoizedState={baseLanes:0,cachePool:null,transitions:null},m=x!==null?x.baseLanes:p,nt(Qo,xn),xn|=m}else x!==null?(m=x.baseLanes|p,u.memoizedState=null):m=p,nt(Qo,xn),xn|=m;return tn(o,u,g,p),u.child}function P6(o,u){var p=u.ref;(o===null&&p!==null||o!==null&&o.ref!==p)&&(u.flags|=512,u.flags|=2097152)}function D2(o,u,p,m,g){var x=fn(p)?Ua:Qt.current;return x=Do(u,x),Uo(u,g),p=M2(o,u,p,m,x,g),m=O2(),o!==null&&!dn?(u.updateQueue=o.updateQueue,u.flags&=-2053,o.lanes&=~g,Er(o,u,g)):(pt&&m&&f2(u),u.flags|=1,tn(o,u,p,g),u.child)}function S6(o,u,p,m,g){if(fn(p)){var x=!0;Al(u)}else x=!1;if(Uo(u,g),u.stateNode===null)Ul(o,u),d6(u,p,m),R2(u,p,m,g),m=!0;else if(o===null){var k=u.stateNode,$=u.memoizedProps;k.props=$;var z=k.context,te=p.contextType;typeof te=="object"&&te!==null?te=Tn(te):(te=fn(p)?Ua:Qt.current,te=Do(u,te));var ie=p.getDerivedStateFromProps,se=typeof ie=="function"||typeof k.getSnapshotBeforeUpdate=="function";se||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||($!==m||z!==te)&&h6(u,k,m,te),da=!1;var oe=u.memoizedState;k.state=oe,Rl(u,m,k,g),z=u.memoizedState,$!==m||oe!==z||cn.current||da?(typeof ie=="function"&&(T2(u,p,ie,m),z=u.memoizedState),($=da||f6(u,p,$,m,oe,z,te))?(se||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(u.flags|=4194308)):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=m,u.memoizedState=z),k.props=m,k.state=z,k.context=te,m=$):(typeof k.componentDidMount=="function"&&(u.flags|=4194308),m=!1)}else{k=u.stateNode,L1(o,u),$=u.memoizedProps,te=u.type===u.elementType?$:er(u.type,$),k.props=te,se=u.pendingProps,oe=k.context,z=p.contextType,typeof z=="object"&&z!==null?z=Tn(z):(z=fn(p)?Ua:Qt.current,z=Do(u,z));var me=p.getDerivedStateFromProps;(ie=typeof me=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||($!==se||oe!==z)&&h6(u,k,m,z),da=!1,oe=u.memoizedState,k.state=oe,Rl(u,m,k,g);var Be=u.memoizedState;$!==se||oe!==Be||cn.current||da?(typeof me=="function"&&(T2(u,p,me,m),Be=u.memoizedState),(te=da||f6(u,p,te,m,oe,Be,z)||!1)?(ie||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(m,Be,z),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(m,Be,z)),typeof k.componentDidUpdate=="function"&&(u.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof k.componentDidUpdate!="function"||$===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||$===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),u.memoizedProps=m,u.memoizedState=Be),k.props=m,k.state=Be,k.context=z,m=te):(typeof k.componentDidUpdate!="function"||$===o.memoizedProps&&oe===o.memoizedState||(u.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||$===o.memoizedProps&&oe===o.memoizedState||(u.flags|=1024),m=!1)}return $2(o,u,p,m,x,g)}function $2(o,u,p,m,g,x){P6(o,u);var k=(u.flags&128)!==0;if(!m&&!k)return g&&O1(u,p,!1),Er(o,u,x);m=u.stateNode,EC.current=u;var $=k&&typeof p.getDerivedStateFromError!="function"?null:m.render();return u.flags|=1,o!==null&&k?(u.child=qo(u,o.child,null,x),u.child=qo(u,null,$,x)):tn(o,u,$,x),u.memoizedState=m.state,g&&O1(u,p,!0),u.child}function W6(o){var u=o.stateNode;u.pendingContext?_1(o,u.pendingContext,u.pendingContext!==u.context):u.context&&_1(o,u.context,!1),w2(o,u.containerInfo)}function A6(o,u,p,m,g){return Fo(),v2(g),u.flags|=256,tn(o,u,p,m),u.child}var L2={dehydrated:null,treeContext:null,retryLane:0};function F2(o){return{baseLanes:o,cachePool:null,transitions:null}}function _6(o,u,p){var m=u.pendingProps,g=ft.current,x=!1,k=(u.flags&128)!==0,$;if(($=k)||($=o!==null&&o.memoizedState===null?!1:(g&2)!==0),$?(x=!0,u.flags&=-129):(o===null||o.memoizedState!==null)&&(g|=1),nt(ft,g&1),o===null)return m2(u),o=u.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?((u.mode&1)===0?u.lanes=1:o.data==="$!"?u.lanes=8:u.lanes=1073741824,null):(k=m.children,o=m.fallback,x?(m=u.mode,x=u.child,k={mode:"hidden",children:k},(m&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=k):x=rp(k,m,0,null),o=to(o,m,p,null),x.return=u,o.return=u,x.sibling=o,u.child=x,u.child.memoizedState=F2(p),u.memoizedState=L2,o):q2(u,k));if(g=o.memoizedState,g!==null&&($=g.dehydrated,$!==null))return TC(o,u,k,m,$,g,p);if(x){x=m.fallback,k=u.mode,g=o.child,$=g.sibling;var z={mode:"hidden",children:m.children};return(k&1)===0&&u.child!==g?(m=u.child,m.childLanes=0,m.pendingProps=z,u.deletions=null):(m=Ia(g,z),m.subtreeFlags=g.subtreeFlags&14680064),$!==null?x=Ia($,x):(x=to(x,k,p,null),x.flags|=2),x.return=u,m.return=u,m.sibling=x,u.child=m,m=x,x=u.child,k=o.child.memoizedState,k=k===null?F2(p):{baseLanes:k.baseLanes|p,cachePool:null,transitions:k.transitions},x.memoizedState=k,x.childLanes=o.childLanes&~p,u.memoizedState=L2,m}return x=o.child,o=x.sibling,m=Ia(x,{mode:"visible",children:m.children}),(u.mode&1)===0&&(m.lanes=p),m.return=u,m.sibling=null,o!==null&&(p=u.deletions,p===null?(u.deletions=[o],u.flags|=16):p.push(o)),u.child=m,u.memoizedState=null,m}function q2(o,u){return u=rp({mode:"visible",children:u},o.mode,0,null),u.return=o,o.child=u}function zl(o,u,p,m){return m!==null&&v2(m),qo(u,o.child,null,p),o=q2(u,u.pendingProps.children),o.flags|=2,u.memoizedState=null,o}function TC(o,u,p,m,g,x,k){if(p)return u.flags&256?(u.flags&=-257,m=H2(Error(n(422))),zl(o,u,k,m)):u.memoizedState!==null?(u.child=o.child,u.flags|=128,null):(x=m.fallback,g=u.mode,m=rp({mode:"visible",children:m.children},g,0,null),x=to(x,g,k,null),x.flags|=2,m.return=u,x.return=u,m.sibling=x,u.child=m,(u.mode&1)!==0&&qo(u,o.child,null,k),u.child.memoizedState=F2(k),u.memoizedState=L2,x);if((u.mode&1)===0)return zl(o,u,k,null);if(g.data==="$!"){if(m=g.nextSibling&&g.nextSibling.dataset,m)var $=m.dgst;return m=$,x=Error(n(419)),m=H2(x,m,void 0),zl(o,u,k,m)}if($=(k&o.childLanes)!==0,dn||$){if(m=$t,m!==null){switch(k&-k){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(m.suspendedLanes|k))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,kr(o,g),rr(m,o,g,-1))}return of(),m=H2(Error(n(421))),zl(o,u,k,m)}return g.data==="$?"?(u.flags|=128,u.child=o.child,u=KC.bind(null,o),g._reactRetry=u,null):(o=x.treeContext,Bn=la(g.nextSibling),In=u,pt=!0,Jn=null,o!==null&&(Nn[En++]=Or,Nn[En++]=Cr,Nn[En++]=Va,Or=o.id,Cr=o.overflow,Va=u),u=q2(u,m.children),u.flags|=4096,u)}function M6(o,u,p){o.lanes|=u;var m=o.alternate;m!==null&&(m.lanes|=u),I2(o.return,u,p)}function z2(o,u,p,m,g){var x=o.memoizedState;x===null?o.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:m,tail:p,tailMode:g}:(x.isBackwards=u,x.rendering=null,x.renderingStartTime=0,x.last=m,x.tail=p,x.tailMode=g)}function O6(o,u,p){var m=u.pendingProps,g=m.revealOrder,x=m.tail;if(tn(o,u,m.children,p),m=ft.current,(m&2)!==0)m=m&1|2,u.flags|=128;else{if(o!==null&&(o.flags&128)!==0)e:for(o=u.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&M6(o,p,u);else if(o.tag===19)M6(o,p,u);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===u)break e;for(;o.sibling===null;){if(o.return===null||o.return===u)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}m&=1}if(nt(ft,m),(u.mode&1)===0)u.memoizedState=null;else switch(g){case"forwards":for(p=u.child,g=null;p!==null;)o=p.alternate,o!==null&&Hl(o)===null&&(g=p),p=p.sibling;p=g,p===null?(g=u.child,u.child=null):(g=p.sibling,p.sibling=null),z2(u,!1,g,p,x);break;case"backwards":for(p=null,g=u.child,u.child=null;g!==null;){if(o=g.alternate,o!==null&&Hl(o)===null){u.child=g;break}o=g.sibling,g.sibling=p,p=g,g=o}z2(u,!0,p,null,x);break;case"together":z2(u,!1,null,null,void 0);break;default:u.memoizedState=null}return u.child}function Ul(o,u){(u.mode&1)===0&&o!==null&&(o.alternate=null,u.alternate=null,u.flags|=2)}function Er(o,u,p){if(o!==null&&(u.dependencies=o.dependencies),Xa|=u.lanes,(p&u.childLanes)===0)return null;if(o!==null&&u.child!==o.child)throw Error(n(153));if(u.child!==null){for(o=u.child,p=Ia(o,o.pendingProps),u.child=p,p.return=u;o.sibling!==null;)o=o.sibling,p=p.sibling=Ia(o,o.pendingProps),p.return=u;p.sibling=null}return u.child}function RC(o,u,p){switch(u.tag){case 3:W6(u),Fo();break;case 5:z1(u);break;case 1:fn(u.type)&&Al(u);break;case 4:w2(u,u.stateNode.containerInfo);break;case 10:var m=u.type._context,g=u.memoizedProps.value;nt(Nl,m._currentValue),m._currentValue=g;break;case 13:if(m=u.memoizedState,m!==null)return m.dehydrated!==null?(nt(ft,ft.current&1),u.flags|=128,null):(p&u.child.childLanes)!==0?_6(o,u,p):(nt(ft,ft.current&1),o=Er(o,u,p),o!==null?o.sibling:null);nt(ft,ft.current&1);break;case 19:if(m=(p&u.childLanes)!==0,(o.flags&128)!==0){if(m)return O6(o,u,p);u.flags|=128}if(g=u.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),nt(ft,ft.current),m)break;return null;case 22:case 23:return u.lanes=0,w6(o,u,p)}return Er(o,u,p)}var C6,U2,k6,N6;C6=function(o,u){for(var p=u.child;p!==null;){if(p.tag===5||p.tag===6)o.appendChild(p.stateNode);else if(p.tag!==4&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===u)break;for(;p.sibling===null;){if(p.return===null||p.return===u)return;p=p.return}p.sibling.return=p.return,p=p.sibling}},U2=function(){},k6=function(o,u,p,m){var g=o.memoizedProps;if(g!==m){o=u.stateNode,Qa(hr.current);var x=null;switch(p){case"input":g=Pe(o,g),m=Pe(o,m),x=[];break;case"select":g=X({},g,{value:void 0}),m=X({},m,{value:void 0}),x=[];break;case"textarea":g=vt(o,g),m=vt(o,m),x=[];break;default:typeof g.onClick!="function"&&typeof m.onClick=="function"&&(o.onclick=Pl)}S0(p,m);var k;p=null;for(te in g)if(!m.hasOwnProperty(te)&&g.hasOwnProperty(te)&&g[te]!=null)if(te==="style"){var $=g[te];for(k in $)$.hasOwnProperty(k)&&(p||(p={}),p[k]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?x||(x=[]):(x=x||[]).push(te,null));for(te in m){var z=m[te];if($=g!=null?g[te]:void 0,m.hasOwnProperty(te)&&z!==$&&(z!=null||$!=null))if(te==="style")if($){for(k in $)!$.hasOwnProperty(k)||z&&z.hasOwnProperty(k)||(p||(p={}),p[k]="");for(k in z)z.hasOwnProperty(k)&&$[k]!==z[k]&&(p||(p={}),p[k]=z[k])}else p||(x||(x=[]),x.push(te,p)),p=z;else te==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,$=$?$.__html:void 0,z!=null&&$!==z&&(x=x||[]).push(te,z)):te==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(te,""+z):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(z!=null&&te==="onScroll"&&it("scroll",o),x||$===z||(x=[])):(x=x||[]).push(te,z))}p&&(x=x||[]).push("style",p);var te=x;(u.updateQueue=te)&&(u.flags|=4)}},N6=function(o,u,p,m){p!==m&&(u.flags|=4)};function Eu(o,u){if(!pt)switch(o.tailMode){case"hidden":u=o.tail;for(var p=null;u!==null;)u.alternate!==null&&(p=u),u=u.sibling;p===null?o.tail=null:p.sibling=null;break;case"collapsed":p=o.tail;for(var m=null;p!==null;)p.alternate!==null&&(m=p),p=p.sibling;m===null?u||o.tail===null?o.tail=null:o.tail.sibling=null:m.sibling=null}}function Xt(o){var u=o.alternate!==null&&o.alternate.child===o.child,p=0,m=0;if(u)for(var g=o.child;g!==null;)p|=g.lanes|g.childLanes,m|=g.subtreeFlags&14680064,m|=g.flags&14680064,g.return=o,g=g.sibling;else for(g=o.child;g!==null;)p|=g.lanes|g.childLanes,m|=g.subtreeFlags,m|=g.flags,g.return=o,g=g.sibling;return o.subtreeFlags|=m,o.childLanes=p,u}function HC(o,u,p){var m=u.pendingProps;switch(d2(u),u.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(u),null;case 1:return fn(u.type)&&Wl(),Xt(u),null;case 3:return m=u.stateNode,Vo(),ut(cn),ut(Qt),W2(),m.pendingContext&&(m.context=m.pendingContext,m.pendingContext=null),(o===null||o.child===null)&&(Cl(u)?u.flags|=4:o===null||o.memoizedState.isDehydrated&&(u.flags&256)===0||(u.flags|=1024,Jn!==null&&(nf(Jn),Jn=null))),U2(o,u),Xt(u),null;case 5:P2(u);var g=Qa(Mu.current);if(p=u.type,o!==null&&u.stateNode!=null)k6(o,u,p,m,g),o.ref!==u.ref&&(u.flags|=512,u.flags|=2097152);else{if(!m){if(u.stateNode===null)throw Error(n(166));return Xt(u),null}if(o=Qa(hr.current),Cl(u)){m=u.stateNode,p=u.type;var x=u.memoizedProps;switch(m[dr]=u,m[Pu]=x,o=(u.mode&1)!==0,p){case"dialog":it("cancel",m),it("close",m);break;case"iframe":case"object":case"embed":it("load",m);break;case"video":case"audio":for(g=0;g<Bu.length;g++)it(Bu[g],m);break;case"source":it("error",m);break;case"img":case"image":case"link":it("error",m),it("load",m);break;case"details":it("toggle",m);break;case"input":Ce(m,x),it("invalid",m);break;case"select":m._wrapperState={wasMultiple:!!x.multiple},it("invalid",m);break;case"textarea":On(m,x),it("invalid",m)}S0(p,x),g=null;for(var k in x)if(x.hasOwnProperty(k)){var $=x[k];k==="children"?typeof $=="string"?m.textContent!==$&&(x.suppressHydrationWarning!==!0&&wl(m.textContent,$,o),g=["children",$]):typeof $=="number"&&m.textContent!==""+$&&(x.suppressHydrationWarning!==!0&&wl(m.textContent,$,o),g=["children",""+$]):a.hasOwnProperty(k)&&$!=null&&k==="onScroll"&&it("scroll",m)}switch(p){case"input":ce(m),je(m,x,!0);break;case"textarea":ce(m),Kt(m);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(m.onclick=Pl)}m=g,u.updateQueue=m,m!==null&&(u.flags|=4)}else{k=g.nodeType===9?g:g.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=xt(p)),o==="http://www.w3.org/1999/xhtml"?p==="script"?(o=k.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof m.is=="string"?o=k.createElement(p,{is:m.is}):(o=k.createElement(p),p==="select"&&(k=o,m.multiple?k.multiple=!0:m.size&&(k.size=m.size))):o=k.createElementNS(o,p),o[dr]=u,o[Pu]=m,C6(o,u,!1,!1),u.stateNode=o;e:{switch(k=W0(p,m),p){case"dialog":it("cancel",o),it("close",o),g=m;break;case"iframe":case"object":case"embed":it("load",o),g=m;break;case"video":case"audio":for(g=0;g<Bu.length;g++)it(Bu[g],o);g=m;break;case"source":it("error",o),g=m;break;case"img":case"image":case"link":it("error",o),it("load",o),g=m;break;case"details":it("toggle",o),g=m;break;case"input":Ce(o,m),g=Pe(o,m),it("invalid",o);break;case"option":g=m;break;case"select":o._wrapperState={wasMultiple:!!m.multiple},g=X({},m,{value:void 0}),it("invalid",o);break;case"textarea":On(o,m),g=vt(o,m),it("invalid",o);break;default:g=m}S0(p,g),$=g;for(x in $)if($.hasOwnProperty(x)){var z=$[x];x==="style"?ru(o,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ao(o,z)):x==="children"?typeof z=="string"?(p!=="textarea"||z!=="")&&ta(o,z):typeof z=="number"&&ta(o,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?z!=null&&x==="onScroll"&&it("scroll",o):z!=null&&A(o,x,z,k))}switch(p){case"input":ce(o),je(o,m,!1);break;case"textarea":ce(o),Kt(o);break;case"option":m.value!=null&&o.setAttribute("value",""+fe(m.value));break;case"select":o.multiple=!!m.multiple,x=m.value,x!=null?Bt(o,!!m.multiple,x,!1):m.defaultValue!=null&&Bt(o,!!m.multiple,m.defaultValue,!0);break;default:typeof g.onClick=="function"&&(o.onclick=Pl)}switch(p){case"button":case"input":case"select":case"textarea":m=!!m.autoFocus;break e;case"img":m=!0;break e;default:m=!1}}m&&(u.flags|=4)}u.ref!==null&&(u.flags|=512,u.flags|=2097152)}return Xt(u),null;case 6:if(o&&u.stateNode!=null)N6(o,u,o.memoizedProps,m);else{if(typeof m!="string"&&u.stateNode===null)throw Error(n(166));if(p=Qa(Mu.current),Qa(hr.current),Cl(u)){if(m=u.stateNode,p=u.memoizedProps,m[dr]=u,(x=m.nodeValue!==p)&&(o=In,o!==null))switch(o.tag){case 3:wl(m.nodeValue,p,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&wl(m.nodeValue,p,(o.mode&1)!==0)}x&&(u.flags|=4)}else m=(p.nodeType===9?p:p.ownerDocument).createTextNode(m),m[dr]=u,u.stateNode=m}return Xt(u),null;case 13:if(ut(ft),m=u.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(pt&&Bn!==null&&(u.mode&1)!==0&&(u.flags&128)===0)R1(),Fo(),u.flags|=98560,x=!1;else if(x=Cl(u),m!==null&&m.dehydrated!==null){if(o===null){if(!x)throw Error(n(318));if(x=u.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(n(317));x[dr]=u}else Fo(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;Xt(u),x=!1}else Jn!==null&&(nf(Jn),Jn=null),x=!0;if(!x)return u.flags&65536?u:null}return(u.flags&128)!==0?(u.lanes=p,u):(m=m!==null,m!==(o!==null&&o.memoizedState!==null)&&m&&(u.child.flags|=8192,(u.mode&1)!==0&&(o===null||(ft.current&1)!==0?Nt===0&&(Nt=3):of())),u.updateQueue!==null&&(u.flags|=4),Xt(u),null);case 4:return Vo(),U2(o,u),o===null&&xu(u.stateNode.containerInfo),Xt(u),null;case 10:return b2(u.type._context),Xt(u),null;case 17:return fn(u.type)&&Wl(),Xt(u),null;case 19:if(ut(ft),x=u.memoizedState,x===null)return Xt(u),null;if(m=(u.flags&128)!==0,k=x.rendering,k===null)if(m)Eu(x,!1);else{if(Nt!==0||o!==null&&(o.flags&128)!==0)for(o=u.child;o!==null;){if(k=Hl(o),k!==null){for(u.flags|=128,Eu(x,!1),m=k.updateQueue,m!==null&&(u.updateQueue=m,u.flags|=4),u.subtreeFlags=0,m=p,p=u.child;p!==null;)x=p,o=m,x.flags&=14680066,k=x.alternate,k===null?(x.childLanes=0,x.lanes=o,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=k.childLanes,x.lanes=k.lanes,x.child=k.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=k.memoizedProps,x.memoizedState=k.memoizedState,x.updateQueue=k.updateQueue,x.type=k.type,o=k.dependencies,x.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),p=p.sibling;return nt(ft,ft.current&1|2),u.child}o=o.sibling}x.tail!==null&&wt()>Yo&&(u.flags|=128,m=!0,Eu(x,!1),u.lanes=4194304)}else{if(!m)if(o=Hl(k),o!==null){if(u.flags|=128,m=!0,p=o.updateQueue,p!==null&&(u.updateQueue=p,u.flags|=4),Eu(x,!0),x.tail===null&&x.tailMode==="hidden"&&!k.alternate&&!pt)return Xt(u),null}else 2*wt()-x.renderingStartTime>Yo&&p!==1073741824&&(u.flags|=128,m=!0,Eu(x,!1),u.lanes=4194304);x.isBackwards?(k.sibling=u.child,u.child=k):(p=x.last,p!==null?p.sibling=k:u.child=k,x.last=k)}return x.tail!==null?(u=x.tail,x.rendering=u,x.tail=u.sibling,x.renderingStartTime=wt(),u.sibling=null,p=ft.current,nt(ft,m?p&1|2:p&1),u):(Xt(u),null);case 22:case 23:return af(),m=u.memoizedState!==null,o!==null&&o.memoizedState!==null!==m&&(u.flags|=8192),m&&(u.mode&1)!==0?(xn&1073741824)!==0&&(Xt(u),u.subtreeFlags&6&&(u.flags|=8192)):Xt(u),null;case 24:return null;case 25:return null}throw Error(n(156,u.tag))}function jC(o,u){switch(d2(u),u.tag){case 1:return fn(u.type)&&Wl(),o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 3:return Vo(),ut(cn),ut(Qt),W2(),o=u.flags,(o&65536)!==0&&(o&128)===0?(u.flags=o&-65537|128,u):null;case 5:return P2(u),null;case 13:if(ut(ft),o=u.memoizedState,o!==null&&o.dehydrated!==null){if(u.alternate===null)throw Error(n(340));Fo()}return o=u.flags,o&65536?(u.flags=o&-65537|128,u):null;case 19:return ut(ft),null;case 4:return Vo(),null;case 10:return b2(u.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Vl=!1,Zt=!1,DC=typeof WeakSet=="function"?WeakSet:Set,be=null;function Ko(o,u){var p=o.ref;if(p!==null)if(typeof p=="function")try{p(null)}catch(m){yt(o,u,m)}else p.current=null}function V2(o,u,p){try{p()}catch(m){yt(o,u,m)}}var E6=!1;function $C(o,u){if(a2=fl,o=f1(),Y0(o)){if("selectionStart"in o)var p={start:o.selectionStart,end:o.selectionEnd};else e:{p=(p=o.ownerDocument)&&p.defaultView||window;var m=p.getSelection&&p.getSelection();if(m&&m.rangeCount!==0){p=m.anchorNode;var g=m.anchorOffset,x=m.focusNode;m=m.focusOffset;try{p.nodeType,x.nodeType}catch{p=null;break e}var k=0,$=-1,z=-1,te=0,ie=0,se=o,oe=null;t:for(;;){for(var me;se!==p||g!==0&&se.nodeType!==3||($=k+g),se!==x||m!==0&&se.nodeType!==3||(z=k+m),se.nodeType===3&&(k+=se.nodeValue.length),(me=se.firstChild)!==null;)oe=se,se=me;for(;;){if(se===o)break t;if(oe===p&&++te===g&&($=k),oe===x&&++ie===m&&(z=k),(me=se.nextSibling)!==null)break;se=oe,oe=se.parentNode}se=me}p=$===-1||z===-1?null:{start:$,end:z}}else p=null}p=p||{start:0,end:0}}else p=null;for(o2={focusedElem:o,selectionRange:p},fl=!1,be=u;be!==null;)if(u=be,o=u.child,(u.subtreeFlags&1028)!==0&&o!==null)o.return=u,be=o;else for(;be!==null;){u=be;try{var Be=u.alternate;if((u.flags&1024)!==0)switch(u.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Se=Be.memoizedProps,Pt=Be.memoizedState,Z=u.stateNode,G=Z.getSnapshotBeforeUpdate(u.elementType===u.type?Se:er(u.type,Se),Pt);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ee=u.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(pe){yt(u,u.return,pe)}if(o=u.sibling,o!==null){o.return=u.return,be=o;break}be=u.return}return Be=E6,E6=!1,Be}function Tu(o,u,p){var m=u.updateQueue;if(m=m!==null?m.lastEffect:null,m!==null){var g=m=m.next;do{if((g.tag&o)===o){var x=g.destroy;g.destroy=void 0,x!==void 0&&V2(u,p,x)}g=g.next}while(g!==m)}}function Gl(o,u){if(u=u.updateQueue,u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&o)===o){var m=p.create;p.destroy=m()}p=p.next}while(p!==u)}}function G2(o){var u=o.ref;if(u!==null){var p=o.stateNode;switch(o.tag){case 5:o=p;break;default:o=p}typeof u=="function"?u(o):u.current=o}}function T6(o){var u=o.alternate;u!==null&&(o.alternate=null,T6(u)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(u=o.stateNode,u!==null&&(delete u[dr],delete u[Pu],delete u[l2],delete u[xC],delete u[wC])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function R6(o){return o.tag===5||o.tag===3||o.tag===4}function H6(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||R6(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function K2(o,u,p){var m=o.tag;if(m===5||m===6)o=o.stateNode,u?p.nodeType===8?p.parentNode.insertBefore(o,u):p.insertBefore(o,u):(p.nodeType===8?(u=p.parentNode,u.insertBefore(o,p)):(u=p,u.appendChild(o)),p=p._reactRootContainer,p!=null||u.onclick!==null||(u.onclick=Pl));else if(m!==4&&(o=o.child,o!==null))for(K2(o,u,p),o=o.sibling;o!==null;)K2(o,u,p),o=o.sibling}function Q2(o,u,p){var m=o.tag;if(m===5||m===6)o=o.stateNode,u?p.insertBefore(o,u):p.appendChild(o);else if(m!==4&&(o=o.child,o!==null))for(Q2(o,u,p),o=o.sibling;o!==null;)Q2(o,u,p),o=o.sibling}var Ut=null,tr=!1;function ma(o,u,p){for(p=p.child;p!==null;)j6(o,u,p),p=p.sibling}function j6(o,u,p){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(il,p)}catch{}switch(p.tag){case 5:Zt||Ko(p,u);case 6:var m=Ut,g=tr;Ut=null,ma(o,u,p),Ut=m,tr=g,Ut!==null&&(tr?(o=Ut,p=p.stateNode,o.nodeType===8?o.parentNode.removeChild(p):o.removeChild(p)):Ut.removeChild(p.stateNode));break;case 18:Ut!==null&&(tr?(o=Ut,p=p.stateNode,o.nodeType===8?s2(o.parentNode,p):o.nodeType===1&&s2(o,p),du(o)):s2(Ut,p.stateNode));break;case 4:m=Ut,g=tr,Ut=p.stateNode.containerInfo,tr=!0,ma(o,u,p),Ut=m,tr=g;break;case 0:case 11:case 14:case 15:if(!Zt&&(m=p.updateQueue,m!==null&&(m=m.lastEffect,m!==null))){g=m=m.next;do{var x=g,k=x.destroy;x=x.tag,k!==void 0&&((x&2)!==0||(x&4)!==0)&&V2(p,u,k),g=g.next}while(g!==m)}ma(o,u,p);break;case 1:if(!Zt&&(Ko(p,u),m=p.stateNode,typeof m.componentWillUnmount=="function"))try{m.props=p.memoizedProps,m.state=p.memoizedState,m.componentWillUnmount()}catch($){yt(p,u,$)}ma(o,u,p);break;case 21:ma(o,u,p);break;case 22:p.mode&1?(Zt=(m=Zt)||p.memoizedState!==null,ma(o,u,p),Zt=m):ma(o,u,p);break;default:ma(o,u,p)}}function D6(o){var u=o.updateQueue;if(u!==null){o.updateQueue=null;var p=o.stateNode;p===null&&(p=o.stateNode=new DC),u.forEach(function(m){var g=QC.bind(null,o,m);p.has(m)||(p.add(m),m.then(g,g))})}}function nr(o,u){var p=u.deletions;if(p!==null)for(var m=0;m<p.length;m++){var g=p[m];try{var x=o,k=u,$=k;e:for(;$!==null;){switch($.tag){case 5:Ut=$.stateNode,tr=!1;break e;case 3:Ut=$.stateNode.containerInfo,tr=!0;break e;case 4:Ut=$.stateNode.containerInfo,tr=!0;break e}$=$.return}if(Ut===null)throw Error(n(160));j6(x,k,g),Ut=null,tr=!1;var z=g.alternate;z!==null&&(z.return=null),g.return=null}catch(te){yt(g,u,te)}}if(u.subtreeFlags&12854)for(u=u.child;u!==null;)$6(u,o),u=u.sibling}function $6(o,u){var p=o.alternate,m=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(nr(u,o),vr(o),m&4){try{Tu(3,o,o.return),Gl(3,o)}catch(Se){yt(o,o.return,Se)}try{Tu(5,o,o.return)}catch(Se){yt(o,o.return,Se)}}break;case 1:nr(u,o),vr(o),m&512&&p!==null&&Ko(p,p.return);break;case 5:if(nr(u,o),vr(o),m&512&&p!==null&&Ko(p,p.return),o.flags&32){var g=o.stateNode;try{ta(g,"")}catch(Se){yt(o,o.return,Se)}}if(m&4&&(g=o.stateNode,g!=null)){var x=o.memoizedProps,k=p!==null?p.memoizedProps:x,$=o.type,z=o.updateQueue;if(o.updateQueue=null,z!==null)try{$==="input"&&x.type==="radio"&&x.name!=null&&Ae(g,x),W0($,k);var te=W0($,x);for(k=0;k<z.length;k+=2){var ie=z[k],se=z[k+1];ie==="style"?ru(g,se):ie==="dangerouslySetInnerHTML"?Ao(g,se):ie==="children"?ta(g,se):A(g,ie,se,te)}switch($){case"input":Fe(g,x);break;case"textarea":gt(g,x);break;case"select":var oe=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var me=x.value;me!=null?Bt(g,!!x.multiple,me,!1):oe!==!!x.multiple&&(x.defaultValue!=null?Bt(g,!!x.multiple,x.defaultValue,!0):Bt(g,!!x.multiple,x.multiple?[]:"",!1))}g[Pu]=x}catch(Se){yt(o,o.return,Se)}}break;case 6:if(nr(u,o),vr(o),m&4){if(o.stateNode===null)throw Error(n(162));g=o.stateNode,x=o.memoizedProps;try{g.nodeValue=x}catch(Se){yt(o,o.return,Se)}}break;case 3:if(nr(u,o),vr(o),m&4&&p!==null&&p.memoizedState.isDehydrated)try{du(u.containerInfo)}catch(Se){yt(o,o.return,Se)}break;case 4:nr(u,o),vr(o);break;case 13:nr(u,o),vr(o),g=o.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(Z2=wt())),m&4&&D6(o);break;case 22:if(ie=p!==null&&p.memoizedState!==null,o.mode&1?(Zt=(te=Zt)||ie,nr(u,o),Zt=te):nr(u,o),vr(o),m&8192){if(te=o.memoizedState!==null,(o.stateNode.isHidden=te)&&!ie&&(o.mode&1)!==0)for(be=o,ie=o.child;ie!==null;){for(se=be=ie;be!==null;){switch(oe=be,me=oe.child,oe.tag){case 0:case 11:case 14:case 15:Tu(4,oe,oe.return);break;case 1:Ko(oe,oe.return);var Be=oe.stateNode;if(typeof Be.componentWillUnmount=="function"){m=oe,p=oe.return;try{u=m,Be.props=u.memoizedProps,Be.state=u.memoizedState,Be.componentWillUnmount()}catch(Se){yt(m,p,Se)}}break;case 5:Ko(oe,oe.return);break;case 22:if(oe.memoizedState!==null){q6(se);continue}}me!==null?(me.return=oe,be=me):q6(se)}ie=ie.sibling}e:for(ie=null,se=o;;){if(se.tag===5){if(ie===null){ie=se;try{g=se.stateNode,te?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):($=se.stateNode,z=se.memoizedProps.style,k=z!=null&&z.hasOwnProperty("display")?z.display:null,$.style.display=na("display",k))}catch(Se){yt(o,o.return,Se)}}}else if(se.tag===6){if(ie===null)try{se.stateNode.nodeValue=te?"":se.memoizedProps}catch(Se){yt(o,o.return,Se)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===o)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===o)break e;for(;se.sibling===null;){if(se.return===null||se.return===o)break e;ie===se&&(ie=null),se=se.return}ie===se&&(ie=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:nr(u,o),vr(o),m&4&&D6(o);break;case 21:break;default:nr(u,o),vr(o)}}function vr(o){var u=o.flags;if(u&2){try{e:{for(var p=o.return;p!==null;){if(R6(p)){var m=p;break e}p=p.return}throw Error(n(160))}switch(m.tag){case 5:var g=m.stateNode;m.flags&32&&(ta(g,""),m.flags&=-33);var x=H6(o);Q2(o,x,g);break;case 3:case 4:var k=m.stateNode.containerInfo,$=H6(o);K2(o,$,k);break;default:throw Error(n(161))}}catch(z){yt(o,o.return,z)}o.flags&=-3}u&4096&&(o.flags&=-4097)}function LC(o,u,p){be=o,L6(o)}function L6(o,u,p){for(var m=(o.mode&1)!==0;be!==null;){var g=be,x=g.child;if(g.tag===22&&m){var k=g.memoizedState!==null||Vl;if(!k){var $=g.alternate,z=$!==null&&$.memoizedState!==null||Zt;$=Vl;var te=Zt;if(Vl=k,(Zt=z)&&!te)for(be=g;be!==null;)k=be,z=k.child,k.tag===22&&k.memoizedState!==null?z6(g):z!==null?(z.return=k,be=z):z6(g);for(;x!==null;)be=x,L6(x),x=x.sibling;be=g,Vl=$,Zt=te}F6(o)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,be=x):F6(o)}}function F6(o){for(;be!==null;){var u=be;if((u.flags&8772)!==0){var p=u.alternate;try{if((u.flags&8772)!==0)switch(u.tag){case 0:case 11:case 15:Zt||Gl(5,u);break;case 1:var m=u.stateNode;if(u.flags&4&&!Zt)if(p===null)m.componentDidMount();else{var g=u.elementType===u.type?p.memoizedProps:er(u.type,p.memoizedProps);m.componentDidUpdate(g,p.memoizedState,m.__reactInternalSnapshotBeforeUpdate)}var x=u.updateQueue;x!==null&&q1(u,x,m);break;case 3:var k=u.updateQueue;if(k!==null){if(p=null,u.child!==null)switch(u.child.tag){case 5:p=u.child.stateNode;break;case 1:p=u.child.stateNode}q1(u,k,p)}break;case 5:var $=u.stateNode;if(p===null&&u.flags&4){p=$;var z=u.memoizedProps;switch(u.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&p.focus();break;case"img":z.src&&(p.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(u.memoizedState===null){var te=u.alternate;if(te!==null){var ie=te.memoizedState;if(ie!==null){var se=ie.dehydrated;se!==null&&du(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Zt||u.flags&512&&G2(u)}catch(oe){yt(u,u.return,oe)}}if(u===o){be=null;break}if(p=u.sibling,p!==null){p.return=u.return,be=p;break}be=u.return}}function q6(o){for(;be!==null;){var u=be;if(u===o){be=null;break}var p=u.sibling;if(p!==null){p.return=u.return,be=p;break}be=u.return}}function z6(o){for(;be!==null;){var u=be;try{switch(u.tag){case 0:case 11:case 15:var p=u.return;try{Gl(4,u)}catch(z){yt(u,p,z)}break;case 1:var m=u.stateNode;if(typeof m.componentDidMount=="function"){var g=u.return;try{m.componentDidMount()}catch(z){yt(u,g,z)}}var x=u.return;try{G2(u)}catch(z){yt(u,x,z)}break;case 5:var k=u.return;try{G2(u)}catch(z){yt(u,k,z)}}}catch(z){yt(u,u.return,z)}if(u===o){be=null;break}var $=u.sibling;if($!==null){$.return=u.return,be=$;break}be=u.return}}var FC=Math.ceil,Kl=O.ReactCurrentDispatcher,Y2=O.ReactCurrentOwner,Hn=O.ReactCurrentBatchConfig,ze=0,$t=null,_t=null,Vt=0,xn=0,Qo=pa(0),Nt=0,Ru=null,Xa=0,Ql=0,X2=0,Hu=null,hn=null,Z2=0,Yo=1/0,Tr=null,Yl=!1,J2=null,va=null,Xl=!1,ga=null,Zl=0,ju=0,ef=null,Jl=-1,ep=0;function nn(){return(ze&6)!==0?wt():Jl!==-1?Jl:Jl=wt()}function ya(o){return(o.mode&1)===0?1:(ze&2)!==0&&Vt!==0?Vt&-Vt:SC.transition!==null?(ep===0&&(ep=Hb()),ep):(o=Ze,o!==0||(o=window.event,o=o===void 0?16:Vb(o.type)),o)}function rr(o,u,p,m){if(50<ju)throw ju=0,ef=null,Error(n(185));su(o,p,m),((ze&2)===0||o!==$t)&&(o===$t&&((ze&2)===0&&(Ql|=p),Nt===4&&ba(o,Vt)),mn(o,m),p===1&&ze===0&&(u.mode&1)===0&&(Yo=wt()+500,_l&&fa()))}function mn(o,u){var p=o.callbackNode;SO(o,u);var m=ll(o,o===$t?Vt:0);if(m===0)p!==null&&Eb(p),o.callbackNode=null,o.callbackPriority=0;else if(u=m&-m,o.callbackPriority!==u){if(p!=null&&Eb(p),u===1)o.tag===0?PC(V6.bind(null,o)):C1(V6.bind(null,o)),IC(function(){(ze&6)===0&&fa()}),p=null;else{switch(jb(m)){case 1:p=N0;break;case 4:p=Tb;break;case 16:p=ol;break;case 536870912:p=Rb;break;default:p=ol}p=eI(p,U6.bind(null,o))}o.callbackPriority=u,o.callbackNode=p}}function U6(o,u){if(Jl=-1,ep=0,(ze&6)!==0)throw Error(n(327));var p=o.callbackNode;if(Xo()&&o.callbackNode!==p)return null;var m=ll(o,o===$t?Vt:0);if(m===0)return null;if((m&30)!==0||(m&o.expiredLanes)!==0||u)u=tp(o,m);else{u=m;var g=ze;ze|=2;var x=K6();($t!==o||Vt!==u)&&(Tr=null,Yo=wt()+500,Ja(o,u));do try{UC();break}catch($){G6(o,$)}while(!0);y2(),Kl.current=x,ze=g,_t!==null?u=0:($t=null,Vt=0,u=Nt)}if(u!==0){if(u===2&&(g=E0(o),g!==0&&(m=g,u=tf(o,g))),u===1)throw p=Ru,Ja(o,0),ba(o,m),mn(o,wt()),p;if(u===6)ba(o,m);else{if(g=o.current.alternate,(m&30)===0&&!qC(g)&&(u=tp(o,m),u===2&&(x=E0(o),x!==0&&(m=x,u=tf(o,x))),u===1))throw p=Ru,Ja(o,0),ba(o,m),mn(o,wt()),p;switch(o.finishedWork=g,o.finishedLanes=m,u){case 0:case 1:throw Error(n(345));case 2:eo(o,hn,Tr);break;case 3:if(ba(o,m),(m&130023424)===m&&(u=Z2+500-wt(),10<u)){if(ll(o,0)!==0)break;if(g=o.suspendedLanes,(g&m)!==m){nn(),o.pingedLanes|=o.suspendedLanes&g;break}o.timeoutHandle=u2(eo.bind(null,o,hn,Tr),u);break}eo(o,hn,Tr);break;case 4:if(ba(o,m),(m&4194240)===m)break;for(u=o.eventTimes,g=-1;0<m;){var k=31-Xn(m);x=1<<k,k=u[k],k>g&&(g=k),m&=~x}if(m=g,m=wt()-m,m=(120>m?120:480>m?480:1080>m?1080:1920>m?1920:3e3>m?3e3:4320>m?4320:1960*FC(m/1960))-m,10<m){o.timeoutHandle=u2(eo.bind(null,o,hn,Tr),m);break}eo(o,hn,Tr);break;case 5:eo(o,hn,Tr);break;default:throw Error(n(329))}}}return mn(o,wt()),o.callbackNode===p?U6.bind(null,o):null}function tf(o,u){var p=Hu;return o.current.memoizedState.isDehydrated&&(Ja(o,u).flags|=256),o=tp(o,u),o!==2&&(u=hn,hn=p,u!==null&&nf(u)),o}function nf(o){hn===null?hn=o:hn.push.apply(hn,o)}function qC(o){for(var u=o;;){if(u.flags&16384){var p=u.updateQueue;if(p!==null&&(p=p.stores,p!==null))for(var m=0;m<p.length;m++){var g=p[m],x=g.getSnapshot;g=g.value;try{if(!Zn(x(),g))return!1}catch{return!1}}}if(p=u.child,u.subtreeFlags&16384&&p!==null)p.return=u,u=p;else{if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function ba(o,u){for(u&=~X2,u&=~Ql,o.suspendedLanes|=u,o.pingedLanes&=~u,o=o.expirationTimes;0<u;){var p=31-Xn(u),m=1<<p;o[p]=-1,u&=~m}}function V6(o){if((ze&6)!==0)throw Error(n(327));Xo();var u=ll(o,0);if((u&1)===0)return mn(o,wt()),null;var p=tp(o,u);if(o.tag!==0&&p===2){var m=E0(o);m!==0&&(u=m,p=tf(o,m))}if(p===1)throw p=Ru,Ja(o,0),ba(o,u),mn(o,wt()),p;if(p===6)throw Error(n(345));return o.finishedWork=o.current.alternate,o.finishedLanes=u,eo(o,hn,Tr),mn(o,wt()),null}function rf(o,u){var p=ze;ze|=1;try{return o(u)}finally{ze=p,ze===0&&(Yo=wt()+500,_l&&fa())}}function Za(o){ga!==null&&ga.tag===0&&(ze&6)===0&&Xo();var u=ze;ze|=1;var p=Hn.transition,m=Ze;try{if(Hn.transition=null,Ze=1,o)return o()}finally{Ze=m,Hn.transition=p,ze=u,(ze&6)===0&&fa()}}function af(){xn=Qo.current,ut(Qo)}function Ja(o,u){o.finishedWork=null,o.finishedLanes=0;var p=o.timeoutHandle;if(p!==-1&&(o.timeoutHandle=-1,bC(p)),_t!==null)for(p=_t.return;p!==null;){var m=p;switch(d2(m),m.tag){case 1:m=m.type.childContextTypes,m!=null&&Wl();break;case 3:Vo(),ut(cn),ut(Qt),W2();break;case 5:P2(m);break;case 4:Vo();break;case 13:ut(ft);break;case 19:ut(ft);break;case 10:b2(m.type._context);break;case 22:case 23:af()}p=p.return}if($t=o,_t=o=Ia(o.current,null),Vt=xn=u,Nt=0,Ru=null,X2=Ql=Xa=0,hn=Hu=null,Ka!==null){for(u=0;u<Ka.length;u++)if(p=Ka[u],m=p.interleaved,m!==null){p.interleaved=null;var g=m.next,x=p.pending;if(x!==null){var k=x.next;x.next=g,m.next=k}p.pending=m}Ka=null}return o}function G6(o,u){do{var p=_t;try{if(y2(),jl.current=Fl,Dl){for(var m=dt.memoizedState;m!==null;){var g=m.queue;g!==null&&(g.pending=null),m=m.next}Dl=!1}if(Ya=0,Dt=kt=dt=null,Ou=!1,Cu=0,Y2.current=null,p===null||p.return===null){Nt=1,Ru=u,_t=null;break}e:{var x=o,k=p.return,$=p,z=u;if(u=Vt,$.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var te=z,ie=$,se=ie.tag;if((ie.mode&1)===0&&(se===0||se===11||se===15)){var oe=ie.alternate;oe?(ie.updateQueue=oe.updateQueue,ie.memoizedState=oe.memoizedState,ie.lanes=oe.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var me=y6(k);if(me!==null){me.flags&=-257,b6(me,k,$,x,u),me.mode&1&&g6(x,te,u),u=me,z=te;var Be=u.updateQueue;if(Be===null){var Se=new Set;Se.add(z),u.updateQueue=Se}else Be.add(z);break e}else{if((u&1)===0){g6(x,te,u),of();break e}z=Error(n(426))}}else if(pt&&$.mode&1){var Pt=y6(k);if(Pt!==null){(Pt.flags&65536)===0&&(Pt.flags|=256),b6(Pt,k,$,x,u),v2(Go(z,$));break e}}x=z=Go(z,$),Nt!==4&&(Nt=2),Hu===null?Hu=[x]:Hu.push(x),x=k;do{switch(x.tag){case 3:x.flags|=65536,u&=-u,x.lanes|=u;var Z=m6(x,z,u);F1(x,Z);break e;case 1:$=z;var G=x.type,ee=x.stateNode;if((x.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(va===null||!va.has(ee)))){x.flags|=65536,u&=-u,x.lanes|=u;var pe=v6(x,$,u);F1(x,pe);break e}}x=x.return}while(x!==null)}Y6(p)}catch(_e){u=_e,_t===p&&p!==null&&(_t=p=p.return);continue}break}while(!0)}function K6(){var o=Kl.current;return Kl.current=Fl,o===null?Fl:o}function of(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),$t===null||(Xa&268435455)===0&&(Ql&268435455)===0||ba($t,Vt)}function tp(o,u){var p=ze;ze|=2;var m=K6();($t!==o||Vt!==u)&&(Tr=null,Ja(o,u));do try{zC();break}catch(g){G6(o,g)}while(!0);if(y2(),ze=p,Kl.current=m,_t!==null)throw Error(n(261));return $t=null,Vt=0,Nt}function zC(){for(;_t!==null;)Q6(_t)}function UC(){for(;_t!==null&&!vO();)Q6(_t)}function Q6(o){var u=J6(o.alternate,o,xn);o.memoizedProps=o.pendingProps,u===null?Y6(o):_t=u,Y2.current=null}function Y6(o){var u=o;do{var p=u.alternate;if(o=u.return,(u.flags&32768)===0){if(p=HC(p,u,xn),p!==null){_t=p;return}}else{if(p=jC(p,u),p!==null){p.flags&=32767,_t=p;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{Nt=6,_t=null;return}}if(u=u.sibling,u!==null){_t=u;return}_t=u=o}while(u!==null);Nt===0&&(Nt=5)}function eo(o,u,p){var m=Ze,g=Hn.transition;try{Hn.transition=null,Ze=1,VC(o,u,p,m)}finally{Hn.transition=g,Ze=m}return null}function VC(o,u,p,m){do Xo();while(ga!==null);if((ze&6)!==0)throw Error(n(327));p=o.finishedWork;var g=o.finishedLanes;if(p===null)return null;if(o.finishedWork=null,o.finishedLanes=0,p===o.current)throw Error(n(177));o.callbackNode=null,o.callbackPriority=0;var x=p.lanes|p.childLanes;if(WO(o,x),o===$t&&(_t=$t=null,Vt=0),(p.subtreeFlags&2064)===0&&(p.flags&2064)===0||Xl||(Xl=!0,eI(ol,function(){return Xo(),null})),x=(p.flags&15990)!==0,(p.subtreeFlags&15990)!==0||x){x=Hn.transition,Hn.transition=null;var k=Ze;Ze=1;var $=ze;ze|=4,Y2.current=null,$C(o,p),$6(p,o),fC(o2),fl=!!a2,o2=a2=null,o.current=p,LC(p),gO(),ze=$,Ze=k,Hn.transition=x}else o.current=p;if(Xl&&(Xl=!1,ga=o,Zl=g),x=o.pendingLanes,x===0&&(va=null),IO(p.stateNode),mn(o,wt()),u!==null)for(m=o.onRecoverableError,p=0;p<u.length;p++)g=u[p],m(g.value,{componentStack:g.stack,digest:g.digest});if(Yl)throw Yl=!1,o=J2,J2=null,o;return(Zl&1)!==0&&o.tag!==0&&Xo(),x=o.pendingLanes,(x&1)!==0?o===ef?ju++:(ju=0,ef=o):ju=0,fa(),null}function Xo(){if(ga!==null){var o=jb(Zl),u=Hn.transition,p=Ze;try{if(Hn.transition=null,Ze=16>o?16:o,ga===null)var m=!1;else{if(o=ga,ga=null,Zl=0,(ze&6)!==0)throw Error(n(331));var g=ze;for(ze|=4,be=o.current;be!==null;){var x=be,k=x.child;if((be.flags&16)!==0){var $=x.deletions;if($!==null){for(var z=0;z<$.length;z++){var te=$[z];for(be=te;be!==null;){var ie=be;switch(ie.tag){case 0:case 11:case 15:Tu(8,ie,x)}var se=ie.child;if(se!==null)se.return=ie,be=se;else for(;be!==null;){ie=be;var oe=ie.sibling,me=ie.return;if(T6(ie),ie===te){be=null;break}if(oe!==null){oe.return=me,be=oe;break}be=me}}}var Be=x.alternate;if(Be!==null){var Se=Be.child;if(Se!==null){Be.child=null;do{var Pt=Se.sibling;Se.sibling=null,Se=Pt}while(Se!==null)}}be=x}}if((x.subtreeFlags&2064)!==0&&k!==null)k.return=x,be=k;else e:for(;be!==null;){if(x=be,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Tu(9,x,x.return)}var Z=x.sibling;if(Z!==null){Z.return=x.return,be=Z;break e}be=x.return}}var G=o.current;for(be=G;be!==null;){k=be;var ee=k.child;if((k.subtreeFlags&2064)!==0&&ee!==null)ee.return=k,be=ee;else e:for(k=G;be!==null;){if($=be,($.flags&2048)!==0)try{switch($.tag){case 0:case 11:case 15:Gl(9,$)}}catch(_e){yt($,$.return,_e)}if($===k){be=null;break e}var pe=$.sibling;if(pe!==null){pe.return=$.return,be=pe;break e}be=$.return}}if(ze=g,fa(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(il,o)}catch{}m=!0}return m}finally{Ze=p,Hn.transition=u}}return!1}function X6(o,u,p){u=Go(p,u),u=m6(o,u,1),o=ha(o,u,1),u=nn(),o!==null&&(su(o,1,u),mn(o,u))}function yt(o,u,p){if(o.tag===3)X6(o,o,p);else for(;u!==null;){if(u.tag===3){X6(u,o,p);break}else if(u.tag===1){var m=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof m.componentDidCatch=="function"&&(va===null||!va.has(m))){o=Go(p,o),o=v6(u,o,1),u=ha(u,o,1),o=nn(),u!==null&&(su(u,1,o),mn(u,o));break}}u=u.return}}function GC(o,u,p){var m=o.pingCache;m!==null&&m.delete(u),u=nn(),o.pingedLanes|=o.suspendedLanes&p,$t===o&&(Vt&p)===p&&(Nt===4||Nt===3&&(Vt&130023424)===Vt&&500>wt()-Z2?Ja(o,0):X2|=p),mn(o,u)}function Z6(o,u){u===0&&((o.mode&1)===0?u=1:(u=sl,sl<<=1,(sl&130023424)===0&&(sl=4194304)));var p=nn();o=kr(o,u),o!==null&&(su(o,u,p),mn(o,p))}function KC(o){var u=o.memoizedState,p=0;u!==null&&(p=u.retryLane),Z6(o,p)}function QC(o,u){var p=0;switch(o.tag){case 13:var m=o.stateNode,g=o.memoizedState;g!==null&&(p=g.retryLane);break;case 19:m=o.stateNode;break;default:throw Error(n(314))}m!==null&&m.delete(u),Z6(o,p)}var J6;J6=function(o,u,p){if(o!==null)if(o.memoizedProps!==u.pendingProps||cn.current)dn=!0;else{if((o.lanes&p)===0&&(u.flags&128)===0)return dn=!1,RC(o,u,p);dn=(o.flags&131072)!==0}else dn=!1,pt&&(u.flags&1048576)!==0&&k1(u,Ol,u.index);switch(u.lanes=0,u.tag){case 2:var m=u.type;Ul(o,u),o=u.pendingProps;var g=Do(u,Qt.current);Uo(u,p),g=M2(null,u,m,o,g,p);var x=O2();return u.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(u.tag=1,u.memoizedState=null,u.updateQueue=null,fn(m)?(x=!0,Al(u)):x=!1,u.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,x2(u),g.updater=ql,u.stateNode=g,g._reactInternals=u,R2(u,m,o,p),u=$2(null,u,m,!0,x,p)):(u.tag=0,pt&&x&&f2(u),tn(null,u,g,p),u=u.child),u;case 16:m=u.elementType;e:{switch(Ul(o,u),o=u.pendingProps,g=m._init,m=g(m._payload),u.type=m,g=u.tag=XC(m),o=er(m,o),g){case 0:u=D2(null,u,m,o,p);break e;case 1:u=S6(null,u,m,o,p);break e;case 11:u=I6(null,u,m,o,p);break e;case 14:u=B6(null,u,m,er(m.type,o),p);break e}throw Error(n(306,m,""))}return u;case 0:return m=u.type,g=u.pendingProps,g=u.elementType===m?g:er(m,g),D2(o,u,m,g,p);case 1:return m=u.type,g=u.pendingProps,g=u.elementType===m?g:er(m,g),S6(o,u,m,g,p);case 3:e:{if(W6(u),o===null)throw Error(n(387));m=u.pendingProps,x=u.memoizedState,g=x.element,L1(o,u),Rl(u,m,null,p);var k=u.memoizedState;if(m=k.element,x.isDehydrated)if(x={element:m,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},u.updateQueue.baseState=x,u.memoizedState=x,u.flags&256){g=Go(Error(n(423)),u),u=A6(o,u,m,p,g);break e}else if(m!==g){g=Go(Error(n(424)),u),u=A6(o,u,m,p,g);break e}else for(Bn=la(u.stateNode.containerInfo.firstChild),In=u,pt=!0,Jn=null,p=D1(u,null,m,p),u.child=p;p;)p.flags=p.flags&-3|4096,p=p.sibling;else{if(Fo(),m===g){u=Er(o,u,p);break e}tn(o,u,m,p)}u=u.child}return u;case 5:return z1(u),o===null&&m2(u),m=u.type,g=u.pendingProps,x=o!==null?o.memoizedProps:null,k=g.children,i2(m,g)?k=null:x!==null&&i2(m,x)&&(u.flags|=32),P6(o,u),tn(o,u,k,p),u.child;case 6:return o===null&&m2(u),null;case 13:return _6(o,u,p);case 4:return w2(u,u.stateNode.containerInfo),m=u.pendingProps,o===null?u.child=qo(u,null,m,p):tn(o,u,m,p),u.child;case 11:return m=u.type,g=u.pendingProps,g=u.elementType===m?g:er(m,g),I6(o,u,m,g,p);case 7:return tn(o,u,u.pendingProps,p),u.child;case 8:return tn(o,u,u.pendingProps.children,p),u.child;case 12:return tn(o,u,u.pendingProps.children,p),u.child;case 10:e:{if(m=u.type._context,g=u.pendingProps,x=u.memoizedProps,k=g.value,nt(Nl,m._currentValue),m._currentValue=k,x!==null)if(Zn(x.value,k)){if(x.children===g.children&&!cn.current){u=Er(o,u,p);break e}}else for(x=u.child,x!==null&&(x.return=u);x!==null;){var $=x.dependencies;if($!==null){k=x.child;for(var z=$.firstContext;z!==null;){if(z.context===m){if(x.tag===1){z=Nr(-1,p&-p),z.tag=2;var te=x.updateQueue;if(te!==null){te=te.shared;var ie=te.pending;ie===null?z.next=z:(z.next=ie.next,ie.next=z),te.pending=z}}x.lanes|=p,z=x.alternate,z!==null&&(z.lanes|=p),I2(x.return,p,u),$.lanes|=p;break}z=z.next}}else if(x.tag===10)k=x.type===u.type?null:x.child;else if(x.tag===18){if(k=x.return,k===null)throw Error(n(341));k.lanes|=p,$=k.alternate,$!==null&&($.lanes|=p),I2(k,p,u),k=x.sibling}else k=x.child;if(k!==null)k.return=x;else for(k=x;k!==null;){if(k===u){k=null;break}if(x=k.sibling,x!==null){x.return=k.return,k=x;break}k=k.return}x=k}tn(o,u,g.children,p),u=u.child}return u;case 9:return g=u.type,m=u.pendingProps.children,Uo(u,p),g=Tn(g),m=m(g),u.flags|=1,tn(o,u,m,p),u.child;case 14:return m=u.type,g=er(m,u.pendingProps),g=er(m.type,g),B6(o,u,m,g,p);case 15:return x6(o,u,u.type,u.pendingProps,p);case 17:return m=u.type,g=u.pendingProps,g=u.elementType===m?g:er(m,g),Ul(o,u),u.tag=1,fn(m)?(o=!0,Al(u)):o=!1,Uo(u,p),d6(u,m,g),R2(u,m,g,p),$2(null,u,m,!0,o,p);case 19:return O6(o,u,p);case 22:return w6(o,u,p)}throw Error(n(156,u.tag))};function eI(o,u){return Nb(o,u)}function YC(o,u,p,m){this.tag=o,this.key=p,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=m,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(o,u,p,m){return new YC(o,u,p,m)}function uf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function XC(o){if(typeof o=="function")return uf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===T)return 11;if(o===K)return 14}return 2}function Ia(o,u){var p=o.alternate;return p===null?(p=jn(o.tag,u,o.key,o.mode),p.elementType=o.elementType,p.type=o.type,p.stateNode=o.stateNode,p.alternate=o,o.alternate=p):(p.pendingProps=u,p.type=o.type,p.flags=0,p.subtreeFlags=0,p.deletions=null),p.flags=o.flags&14680064,p.childLanes=o.childLanes,p.lanes=o.lanes,p.child=o.child,p.memoizedProps=o.memoizedProps,p.memoizedState=o.memoizedState,p.updateQueue=o.updateQueue,u=o.dependencies,p.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},p.sibling=o.sibling,p.index=o.index,p.ref=o.ref,p}function np(o,u,p,m,g,x){var k=2;if(m=o,typeof o=="function")uf(o)&&(k=1);else if(typeof o=="string")k=5;else e:switch(o){case N:return to(p.children,g,x,u);case P:k=8,g|=8;break;case C:return o=jn(12,p,u,g|2),o.elementType=C,o.lanes=x,o;case q:return o=jn(13,p,u,g),o.elementType=q,o.lanes=x,o;case L:return o=jn(19,p,u,g),o.elementType=L,o.lanes=x,o;case V:return rp(p,g,x,u);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case R:k=10;break e;case j:k=9;break e;case T:k=11;break e;case K:k=14;break e;case U:k=16,m=null;break e}throw Error(n(130,o==null?o:typeof o,""))}return u=jn(k,p,u,g),u.elementType=o,u.type=m,u.lanes=x,u}function to(o,u,p,m){return o=jn(7,o,m,u),o.lanes=p,o}function rp(o,u,p,m){return o=jn(22,o,m,u),o.elementType=V,o.lanes=p,o.stateNode={isHidden:!1},o}function sf(o,u,p){return o=jn(6,o,null,u),o.lanes=p,o}function lf(o,u,p){return u=jn(4,o.children!==null?o.children:[],o.key,u),u.lanes=p,u.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},u}function ZC(o,u,p,m,g){this.tag=u,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=T0(0),this.expirationTimes=T0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=T0(0),this.identifierPrefix=m,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function pf(o,u,p,m,g,x,k,$,z){return o=new ZC(o,u,p,$,z),u===1?(u=1,x===!0&&(u|=8)):u=0,x=jn(3,null,null,u),o.current=x,x.stateNode=o,x.memoizedState={element:m,isDehydrated:p,cache:null,transitions:null,pendingSuspenseBoundaries:null},x2(x),o}function JC(o,u,p){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:m==null?null:""+m,children:o,containerInfo:u,implementation:p}}function tI(o){if(!o)return ca;o=o._reactInternals;e:{if(qa(o)!==o||o.tag!==1)throw Error(n(170));var u=o;do{switch(u.tag){case 3:u=u.stateNode.context;break e;case 1:if(fn(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break e}}u=u.return}while(u!==null);throw Error(n(171))}if(o.tag===1){var p=o.type;if(fn(p))return M1(o,p,u)}return u}function nI(o,u,p,m,g,x,k,$,z){return o=pf(p,m,!0,o,g,x,k,$,z),o.context=tI(null),p=o.current,m=nn(),g=ya(p),x=Nr(m,g),x.callback=u??null,ha(p,x,g),o.current.lanes=g,su(o,g,m),mn(o,m),o}function ap(o,u,p,m){var g=u.current,x=nn(),k=ya(g);return p=tI(p),u.context===null?u.context=p:u.pendingContext=p,u=Nr(x,k),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ha(g,u,k),o!==null&&(rr(o,g,k,x),Tl(o,g,k)),k}function op(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function rI(o,u){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var p=o.retryLane;o.retryLane=p!==0&&p<u?p:u}}function cf(o,u){rI(o,u),(o=o.alternate)&&rI(o,u)}function ek(){return null}var aI=typeof reportError=="function"?reportError:function(o){console.error(o)};function ff(o){this._internalRoot=o}ip.prototype.render=ff.prototype.render=function(o){var u=this._internalRoot;if(u===null)throw Error(n(409));ap(o,u,null,null)},ip.prototype.unmount=ff.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var u=o.containerInfo;Za(function(){ap(null,o,null,null)}),u[_r]=null}};function ip(o){this._internalRoot=o}ip.prototype.unstable_scheduleHydration=function(o){if(o){var u=Lb();o={blockedOn:null,target:o,priority:u};for(var p=0;p<ia.length&&u!==0&&u<ia[p].priority;p++);ia.splice(p,0,o),p===0&&zb(o)}};function df(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function up(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function oI(){}function tk(o,u,p,m,g){if(g){if(typeof m=="function"){var x=m;m=function(){var te=op(k);x.call(te)}}var k=nI(u,m,o,0,null,!1,!1,"",oI);return o._reactRootContainer=k,o[_r]=k.current,xu(o.nodeType===8?o.parentNode:o),Za(),k}for(;g=o.lastChild;)o.removeChild(g);if(typeof m=="function"){var $=m;m=function(){var te=op(z);$.call(te)}}var z=pf(o,0,!1,null,null,!1,!1,"",oI);return o._reactRootContainer=z,o[_r]=z.current,xu(o.nodeType===8?o.parentNode:o),Za(function(){ap(u,z,p,m)}),z}function sp(o,u,p,m,g){var x=p._reactRootContainer;if(x){var k=x;if(typeof g=="function"){var $=g;g=function(){var z=op(k);$.call(z)}}ap(u,k,o,g)}else k=tk(p,u,o,g,m);return op(k)}Db=function(o){switch(o.tag){case 3:var u=o.stateNode;if(u.current.memoizedState.isDehydrated){var p=uu(u.pendingLanes);p!==0&&(R0(u,p|1),mn(u,wt()),(ze&6)===0&&(Yo=wt()+500,fa()))}break;case 13:Za(function(){var m=kr(o,1);if(m!==null){var g=nn();rr(m,o,1,g)}}),cf(o,1)}},H0=function(o){if(o.tag===13){var u=kr(o,134217728);if(u!==null){var p=nn();rr(u,o,134217728,p)}cf(o,134217728)}},$b=function(o){if(o.tag===13){var u=ya(o),p=kr(o,u);if(p!==null){var m=nn();rr(p,o,u,m)}cf(o,u)}},Lb=function(){return Ze},Fb=function(o,u){var p=Ze;try{return Ze=o,u()}finally{Ze=p}},M0=function(o,u,p){switch(u){case"input":if(Fe(o,p),u=p.name,p.type==="radio"&&u!=null){for(p=o;p.parentNode;)p=p.parentNode;for(p=p.querySelectorAll("input[name="+JSON.stringify(""+u)+'][type="radio"]'),u=0;u<p.length;u++){var m=p[u];if(m!==o&&m.form===o.form){var g=Sl(m);if(!g)throw Error(n(90));re(m),Fe(m,g)}}}break;case"textarea":gt(o,p);break;case"select":u=p.value,u!=null&&Bt(o,!!p.multiple,u,!1)}},Wb=rf,Ab=Za;var nk={usingClientEntryPoint:!1,Events:[Su,Ho,Sl,Pb,Sb,rf]},Du={findFiberByHostInstance:za,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rk={bundleType:Du.bundleType,version:Du.version,rendererPackageName:Du.rendererPackageName,rendererConfig:Du.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=Cb(o),o===null?null:o.stateNode},findFiberByHostInstance:Du.findFiberByHostInstance||ek,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lp.isDisabled&&lp.supportsFiber)try{il=lp.inject(rk),fr=lp}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nk,vn.createPortal=function(o,u){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(u))throw Error(n(200));return JC(o,u,null,p)},vn.createRoot=function(o,u){if(!df(o))throw Error(n(299));var p=!1,m="",g=aI;return u!=null&&(u.unstable_strictMode===!0&&(p=!0),u.identifierPrefix!==void 0&&(m=u.identifierPrefix),u.onRecoverableError!==void 0&&(g=u.onRecoverableError)),u=pf(o,1,!1,null,null,p,!1,m,g),o[_r]=u.current,xu(o.nodeType===8?o.parentNode:o),new ff(u)},vn.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var u=o._reactInternals;if(u===void 0)throw typeof o.render=="function"?Error(n(188)):(o=Object.keys(o).join(","),Error(n(268,o)));return o=Cb(u),o=o===null?null:o.stateNode,o},vn.flushSync=function(o){return Za(o)},vn.hydrate=function(o,u,p){if(!up(u))throw Error(n(200));return sp(null,o,u,!0,p)},vn.hydrateRoot=function(o,u,p){if(!df(o))throw Error(n(405));var m=p!=null&&p.hydratedSources||null,g=!1,x="",k=aI;if(p!=null&&(p.unstable_strictMode===!0&&(g=!0),p.identifierPrefix!==void 0&&(x=p.identifierPrefix),p.onRecoverableError!==void 0&&(k=p.onRecoverableError)),u=nI(u,null,o,1,p??null,g,!1,x,k),o[_r]=u.current,xu(o),m)for(o=0;o<m.length;o++)p=m[o],g=p._getVersion,g=g(p._source),u.mutableSourceEagerHydrationData==null?u.mutableSourceEagerHydrationData=[p,g]:u.mutableSourceEagerHydrationData.push(p,g);return new ip(u)},vn.render=function(o,u,p){if(!up(u))throw Error(n(200));return sp(null,o,u,!1,p)},vn.unmountComponentAtNode=function(o){if(!up(o))throw Error(n(40));return o._reactRootContainer?(Za(function(){sp(null,null,o,!1,function(){o._reactRootContainer=null,o[_r]=null})}),!0):!1},vn.unstable_batchedUpdates=rf,vn.unstable_renderSubtreeIntoContainer=function(o,u,p,m){if(!up(p))throw Error(n(200));if(o==null||o._reactInternals===void 0)throw Error(n(38));return sp(o,u,p,!1,m)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var dI;function T3(){if(dI)return vf.exports;dI=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),vf.exports=dk(),vf.exports}var hI;function hk(){if(hI)return cp;hI=1;var e=T3();return cp.createRoot=e.createRoot,cp.hydrateRoot=e.hydrateRoot,cp}var mk=hk(),Y=ly();const H=Xe(Y),vk=uk({__proto__:null,default:H},[Y]);var _p={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var gk=_p.exports,mI;function yk(){return mI||(mI=1,(function(e,t){((n,r)=>{e.exports=r()})(gk,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},a,i=!r.document&&!!r.postMessage,s=r.IS_PAPA_WORKER||!1,l={},c=0,f={};function h(P){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(C){var R=w(C);R.chunkSize=parseInt(R.chunkSize),C.step||C.chunk||(R.chunkSize=null),this._handle=new I(R),(this._handle.streamer=this)._config=R}).call(this,P),this.parseChunk=function(C,R){var j=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<j){let q=this._config.newline;q||(T=this._config.quoteChar||'"',q=this._handle.guessLineEndings(C,T)),C=[...C.split(q).slice(j)].join(q)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(T=this._config.beforeFirstChunk(C))!==void 0&&(C=T),this.isFirstChunk=!1,this._halted=!1;var j=this._partialLine+C,T=(this._partialLine="",this._handle.parse(j,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(C=T.meta.cursor,j=(this._finished||(this._partialLine=j.substring(C-this._baseIndex),this._baseIndex=C),T&&T.data&&(this._rowCount+=T.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),s)r.postMessage({results:T,workerId:f.WORKER_ID,finished:j});else if(N(this._config.chunk)&&!R){if(this._config.chunk(T,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=T=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(T.data),this._completeResults.errors=this._completeResults.errors.concat(T.errors),this._completeResults.meta=T.meta),this._completed||!j||!N(this._config.complete)||T&&T.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),j||T&&T.meta.paused||this._nextChunk(),T}this._halted=!0},this._sendError=function(C){N(this._config.error)?this._config.error(C):s&&this._config.error&&r.postMessage({workerId:f.WORKER_ID,error:C,finished:!1})}}function d(P){var C;(P=P||{}).chunkSize||(P.chunkSize=f.RemoteChunkSize),h.call(this,P),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(R){this._input=R,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(C=new XMLHttpRequest,this._config.withCredentials&&(C.withCredentials=this._config.withCredentials),i||(C.onload=_(this._chunkLoaded,this),C.onerror=_(this._chunkError,this)),C.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var R,j=this._config.downloadRequestHeaders;for(R in j)C.setRequestHeader(R,j[R])}var T;this._config.chunkSize&&(T=this._start+this._config.chunkSize-1,C.setRequestHeader("Range","bytes="+this._start+"-"+T));try{C.send(this._config.downloadRequestBody)}catch(q){this._chunkError(q.message)}i&&C.status===0&&this._chunkError()}},this._chunkLoaded=function(){C.readyState===4&&(C.status<200||400<=C.status?this._chunkError():(this._start+=this._config.chunkSize||C.responseText.length,this._finished=!this._config.chunkSize||this._start>=(R=>(R=R.getResponseHeader("Content-Range"))!==null?parseInt(R.substring(R.lastIndexOf("/")+1)):-1)(C),this.parseChunk(C.responseText)))},this._chunkError=function(R){R=C.statusText||R,this._sendError(new Error(R))}}function v(P){(P=P||{}).chunkSize||(P.chunkSize=f.LocalChunkSize),h.call(this,P);var C,R,j=typeof FileReader<"u";this.stream=function(T){this._input=T,R=T.slice||T.webkitSlice||T.mozSlice,j?((C=new FileReader).onload=_(this._chunkLoaded,this),C.onerror=_(this._chunkError,this)):C=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var T=this._input,q=(this._config.chunkSize&&(q=Math.min(this._start+this._config.chunkSize,this._input.size),T=R.call(T,this._start,q)),C.readAsText(T,this._config.encoding));j||this._chunkLoaded({target:{result:q}})},this._chunkLoaded=function(T){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(T.target.result)},this._chunkError=function(){this._sendError(C.error)}}function y(P){var C;h.call(this,P=P||{}),this.stream=function(R){return C=R,this._nextChunk()},this._nextChunk=function(){var R,j;if(!this._finished)return R=this._config.chunkSize,C=R?(j=C.substring(0,R),C.substring(R)):(j=C,""),this._finished=!C,this.parseChunk(j)}}function B(P){h.call(this,P=P||{});var C=[],R=!0,j=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(T){this._input=T,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){j&&C.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),C.length?this.parseChunk(C.shift()):R=!0},this._streamData=_(function(T){try{C.push(typeof T=="string"?T:T.toString(this._config.encoding)),R&&(R=!1,this._checkIsFinished(),this.parseChunk(C.shift()))}catch(q){this._streamError(q)}},this),this._streamError=_(function(T){this._streamCleanUp(),this._sendError(T)},this),this._streamEnd=_(function(){this._streamCleanUp(),j=!0,this._streamData("")},this),this._streamCleanUp=_(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function I(P){var C,R,j,T,q=Math.pow(2,53),L=-q,K=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,U=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,V=this,D=0,Q=0,X=!1,E=!1,F=[],J={data:[],errors:[],meta:{}};function ue(fe){return P.skipEmptyLines==="greedy"?fe.join("").trim()==="":fe.length===1&&fe[0].length===0}function he(){if(J&&j&&(ye("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),j=!1),P.skipEmptyLines&&(J.data=J.data.filter(function(re){return!ue(re)})),ge()){let re=function(Re,Pe){N(P.transformHeader)&&(Re=P.transformHeader(Re,Pe)),F.push(Re)};var ce=re;if(J)if(Array.isArray(J.data[0])){for(var fe=0;ge()&&fe<J.data.length;fe++)J.data[fe].forEach(re);J.data.splice(0,1)}else J.data.forEach(re)}function ne(re,Re){for(var Pe=P.header?{}:[],Ce=0;Ce<re.length;Ce++){var Ae=Ce,Fe=re[Ce],Fe=((je,qe)=>(Ke=>(P.dynamicTypingFunction&&P.dynamicTyping[Ke]===void 0&&(P.dynamicTyping[Ke]=P.dynamicTypingFunction(Ke)),(P.dynamicTyping[Ke]||P.dynamicTyping)===!0))(je)?qe==="true"||qe==="TRUE"||qe!=="false"&&qe!=="FALSE"&&((Ke=>{if(K.test(Ke)&&(Ke=parseFloat(Ke),L<Ke&&Ke<q))return 1})(qe)?parseFloat(qe):U.test(qe)?new Date(qe):qe===""?null:qe):qe)(Ae=P.header?Ce>=F.length?"__parsed_extra":F[Ce]:Ae,Fe=P.transform?P.transform(Fe,Ae):Fe);Ae==="__parsed_extra"?(Pe[Ae]=Pe[Ae]||[],Pe[Ae].push(Fe)):Pe[Ae]=Fe}return P.header&&(Ce>F.length?ye("FieldMismatch","TooManyFields","Too many fields: expected "+F.length+" fields but parsed "+Ce,Q+Re):Ce<F.length&&ye("FieldMismatch","TooFewFields","Too few fields: expected "+F.length+" fields but parsed "+Ce,Q+Re)),Pe}var de;J&&(P.header||P.dynamicTyping||P.transform)&&(de=1,!J.data.length||Array.isArray(J.data[0])?(J.data=J.data.map(ne),de=J.data.length):J.data=ne(J.data,0),P.header&&J.meta&&(J.meta.fields=F),Q+=de)}function ge(){return P.header&&F.length===0}function ye(fe,ne,de,ce){fe={type:fe,code:ne,message:de},ce!==void 0&&(fe.row=ce),J.errors.push(fe)}N(P.step)&&(T=P.step,P.step=function(fe){J=fe,ge()?he():(he(),J.data.length!==0&&(D+=fe.data.length,P.preview&&D>P.preview?R.abort():(J.data=J.data[0],T(J,V))))}),this.parse=function(fe,ne,de){var ce=P.quoteChar||'"',ce=(P.newline||(P.newline=this.guessLineEndings(fe,ce)),j=!1,P.delimiter?N(P.delimiter)&&(P.delimiter=P.delimiter(fe),J.meta.delimiter=P.delimiter):((ce=((re,Re,Pe,Ce,Ae)=>{var Fe,je,qe,Ke;Ae=Ae||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var Bt=0;Bt<Ae.length;Bt++){for(var vt,On=Ae[Bt],gt=0,Kt=0,xt=0,jt=(qe=void 0,new S({comments:Ce,delimiter:On,newline:Re,preview:10}).parse(re)),pn=0;pn<jt.data.length;pn++)Pe&&ue(jt.data[pn])?xt++:(vt=jt.data[pn].length,Kt+=vt,qe===void 0?qe=vt:0<vt&&(gt+=Math.abs(vt-qe),qe=vt));0<jt.data.length&&(Kt/=jt.data.length-xt),(je===void 0||gt<=je)&&(Ke===void 0||Ke<Kt)&&1.99<Kt&&(je=gt,Fe=On,Ke=Kt)}return{successful:!!(P.delimiter=Fe),bestDelimiter:Fe}})(fe,P.newline,P.skipEmptyLines,P.comments,P.delimitersToGuess)).successful?P.delimiter=ce.bestDelimiter:(j=!0,P.delimiter=f.DefaultDelimiter),J.meta.delimiter=P.delimiter),w(P));return P.preview&&P.header&&ce.preview++,C=fe,R=new S(ce),J=R.parse(C,ne,de),he(),X?{meta:{paused:!0}}:J||{meta:{paused:!1}}},this.paused=function(){return X},this.pause=function(){X=!0,R.abort(),C=N(P.chunk)?"":C.substring(R.getCharIndex())},this.resume=function(){V.streamer._halted?(X=!1,V.streamer.parseChunk(C,!0)):setTimeout(V.resume,3)},this.aborted=function(){return E},this.abort=function(){E=!0,R.abort(),J.meta.aborted=!0,N(P.complete)&&P.complete(J),C=""},this.guessLineEndings=function(re,ce){re=re.substring(0,1048576);var ce=new RegExp(b(ce)+"([^]*?)"+b(ce),"gm"),de=(re=re.replace(ce,"")).split("\r"),ce=re.split(`
`),re=1<ce.length&&ce[0].length<de[0].length;if(de.length===1||re)return`
`;for(var Re=0,Pe=0;Pe<de.length;Pe++)de[Pe][0]===`
`&&Re++;return Re>=de.length/2?`\r
`:"\r"}}function b(P){return P.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function S(P){var C=(P=P||{}).delimiter,R=P.newline,j=P.comments,T=P.step,q=P.preview,L=P.fastMode,K=null,U=!1,V=P.quoteChar==null?'"':P.quoteChar,D=V;if(P.escapeChar!==void 0&&(D=P.escapeChar),(typeof C!="string"||-1<f.BAD_DELIMITERS.indexOf(C))&&(C=","),j===C)throw new Error("Comment character same as delimiter");j===!0?j="#":(typeof j!="string"||-1<f.BAD_DELIMITERS.indexOf(j))&&(j=!1),R!==`
`&&R!=="\r"&&R!==`\r
`&&(R=`
`);var Q=0,X=!1;this.parse=function(E,F,J){if(typeof E!="string")throw new Error("Input must be a string");var ue=E.length,he=C.length,ge=R.length,ye=j.length,fe=N(T),ne=[],de=[],ce=[],re=Q=0;if(!E)return gt();if(L||L!==!1&&E.indexOf(V)===-1){for(var Re=E.split(R),Pe=0;Pe<Re.length;Pe++){if(ce=Re[Pe],Q+=ce.length,Pe!==Re.length-1)Q+=R.length;else if(J)return gt();if(!j||ce.substring(0,ye)!==j){if(fe){if(ne=[],Ke(ce.split(C)),Kt(),X)return gt()}else Ke(ce.split(C));if(q&&q<=Pe)return ne=ne.slice(0,q),gt(!0)}}return gt()}for(var Ce=E.indexOf(C,Q),Ae=E.indexOf(R,Q),Fe=new RegExp(b(D)+b(V),"g"),je=E.indexOf(V,Q);;)if(E[Q]===V)for(je=Q,Q++;;){if((je=E.indexOf(V,je+1))===-1)return J||de.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ne.length,index:Q}),vt();if(je===ue-1)return vt(E.substring(Q,je).replace(Fe,V));if(V===D&&E[je+1]===D)je++;else if(V===D||je===0||E[je-1]!==D){Ce!==-1&&Ce<je+1&&(Ce=E.indexOf(C,je+1));var qe=Bt((Ae=Ae!==-1&&Ae<je+1?E.indexOf(R,je+1):Ae)===-1?Ce:Math.min(Ce,Ae));if(E.substr(je+1+qe,he)===C){ce.push(E.substring(Q,je).replace(Fe,V)),E[Q=je+1+qe+he]!==V&&(je=E.indexOf(V,Q)),Ce=E.indexOf(C,Q),Ae=E.indexOf(R,Q);break}if(qe=Bt(Ae),E.substring(je+1+qe,je+1+qe+ge)===R){if(ce.push(E.substring(Q,je).replace(Fe,V)),On(je+1+qe+ge),Ce=E.indexOf(C,Q),je=E.indexOf(V,Q),fe&&(Kt(),X))return gt();if(q&&ne.length>=q)return gt(!0);break}de.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ne.length,index:Q}),je++}}else if(j&&ce.length===0&&E.substring(Q,Q+ye)===j){if(Ae===-1)return gt();Q=Ae+ge,Ae=E.indexOf(R,Q),Ce=E.indexOf(C,Q)}else if(Ce!==-1&&(Ce<Ae||Ae===-1))ce.push(E.substring(Q,Ce)),Q=Ce+he,Ce=E.indexOf(C,Q);else{if(Ae===-1)break;if(ce.push(E.substring(Q,Ae)),On(Ae+ge),fe&&(Kt(),X))return gt();if(q&&ne.length>=q)return gt(!0)}return vt();function Ke(xt){ne.push(xt),re=Q}function Bt(xt){var jt=0;return jt=xt!==-1&&(xt=E.substring(je+1,xt))&&xt.trim()===""?xt.length:jt}function vt(xt){return J||(xt===void 0&&(xt=E.substring(Q)),ce.push(xt),Q=ue,Ke(ce),fe&&Kt()),gt()}function On(xt){Q=xt,Ke(ce),ce=[],Ae=E.indexOf(R,Q)}function gt(xt){if(P.header&&!F&&ne.length&&!U){var jt=ne[0],pn=Object.create(null),Ao=new Set(jt);let ta=!1;for(let Cn=0;Cn<jt.length;Cn++){let kn=jt[Cn];if(pn[kn=N(P.transformHeader)?P.transformHeader(kn,Cn):kn]){let na,ru=pn[kn];for(;na=kn+"_"+ru,ru++,Ao.has(na););Ao.add(na),jt[Cn]=na,pn[kn]++,ta=!0,(K=K===null?{}:K)[na]=kn}else pn[kn]=1,jt[Cn]=kn;Ao.add(kn)}ta&&console.warn("Duplicate headers found and renamed."),U=!0}return{data:ne,errors:de,meta:{delimiter:C,linebreak:R,aborted:X,truncated:!!xt,cursor:re+(F||0),renamedHeaders:K}}}function Kt(){T(gt()),ne=[],de=[]}},this.abort=function(){X=!0},this.getCharIndex=function(){return Q}}function W(P){var C=P.data,R=l[C.workerId],j=!1;if(C.error)R.userError(C.error,C.file);else if(C.results&&C.results.data){var T={abort:function(){j=!0,A(C.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:O,resume:O};if(N(R.userStep)){for(var q=0;q<C.results.data.length&&(R.userStep({data:C.results.data[q],errors:C.results.errors,meta:C.results.meta},T),!j);q++);delete C.results}else N(R.userChunk)&&(R.userChunk(C.results,T,C.file),delete C.results)}C.finished&&!j&&A(C.workerId,C.results)}function A(P,C){var R=l[P];N(R.userComplete)&&R.userComplete(C),R.terminate(),delete l[P]}function O(){throw new Error("Not implemented.")}function w(P){if(typeof P!="object"||P===null)return P;var C,R=Array.isArray(P)?[]:{};for(C in P)R[C]=w(P[C]);return R}function _(P,C){return function(){P.apply(C,arguments)}}function N(P){return typeof P=="function"}return f.parse=function(P,C){var R=(C=C||{}).dynamicTyping||!1;if(N(R)&&(C.dynamicTypingFunction=R,R={}),C.dynamicTyping=R,C.transform=!!N(C.transform)&&C.transform,!C.worker||!f.WORKERS_SUPPORTED)return R=null,f.NODE_STREAM_INPUT,typeof P=="string"?(P=(j=>j.charCodeAt(0)!==65279?j:j.slice(1))(P),R=new(C.download?d:y)(C)):P.readable===!0&&N(P.read)&&N(P.on)?R=new B(C):(r.File&&P instanceof File||P instanceof Object)&&(R=new v(C)),R.stream(P);(R=(()=>{var j;return!!f.WORKERS_SUPPORTED&&(j=(()=>{var T=r.URL||r.webkitURL||null,q=n.toString();return f.BLOB_URL||(f.BLOB_URL=T.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",q,")();"],{type:"text/javascript"})))})(),(j=new r.Worker(j)).onmessage=W,j.id=c++,l[j.id]=j)})()).userStep=C.step,R.userChunk=C.chunk,R.userComplete=C.complete,R.userError=C.error,C.step=N(C.step),C.chunk=N(C.chunk),C.complete=N(C.complete),C.error=N(C.error),delete C.worker,R.postMessage({input:P,config:C,workerId:R.id})},f.unparse=function(P,C){var R=!1,j=!0,T=",",q=`\r
`,L='"',K=L+L,U=!1,V=null,D=!1,Q=((()=>{if(typeof C=="object"){if(typeof C.delimiter!="string"||f.BAD_DELIMITERS.filter(function(F){return C.delimiter.indexOf(F)!==-1}).length||(T=C.delimiter),typeof C.quotes!="boolean"&&typeof C.quotes!="function"&&!Array.isArray(C.quotes)||(R=C.quotes),typeof C.skipEmptyLines!="boolean"&&typeof C.skipEmptyLines!="string"||(U=C.skipEmptyLines),typeof C.newline=="string"&&(q=C.newline),typeof C.quoteChar=="string"&&(L=C.quoteChar),typeof C.header=="boolean"&&(j=C.header),Array.isArray(C.columns)){if(C.columns.length===0)throw new Error("Option columns is empty");V=C.columns}C.escapeChar!==void 0&&(K=C.escapeChar+L),C.escapeFormulae instanceof RegExp?D=C.escapeFormulae:typeof C.escapeFormulae=="boolean"&&C.escapeFormulae&&(D=/^[=+\-@\t\r].*$/)}})(),new RegExp(b(L),"g"));if(typeof P=="string"&&(P=JSON.parse(P)),Array.isArray(P)){if(!P.length||Array.isArray(P[0]))return X(null,P,U);if(typeof P[0]=="object")return X(V||Object.keys(P[0]),P,U)}else if(typeof P=="object")return typeof P.data=="string"&&(P.data=JSON.parse(P.data)),Array.isArray(P.data)&&(P.fields||(P.fields=P.meta&&P.meta.fields||V),P.fields||(P.fields=Array.isArray(P.data[0])?P.fields:typeof P.data[0]=="object"?Object.keys(P.data[0]):[]),Array.isArray(P.data[0])||typeof P.data[0]=="object"||(P.data=[P.data])),X(P.fields||[],P.data||[],U);throw new Error("Unable to serialize unrecognized input");function X(F,J,ue){var he="",ge=(typeof F=="string"&&(F=JSON.parse(F)),typeof J=="string"&&(J=JSON.parse(J)),Array.isArray(F)&&0<F.length),ye=!Array.isArray(J[0]);if(ge&&j){for(var fe=0;fe<F.length;fe++)0<fe&&(he+=T),he+=E(F[fe],fe);0<J.length&&(he+=q)}for(var ne=0;ne<J.length;ne++){var de=(ge?F:J[ne]).length,ce=!1,re=ge?Object.keys(J[ne]).length===0:J[ne].length===0;if(ue&&!ge&&(ce=ue==="greedy"?J[ne].join("").trim()==="":J[ne].length===1&&J[ne][0].length===0),ue==="greedy"&&ge){for(var Re=[],Pe=0;Pe<de;Pe++){var Ce=ye?F[Pe]:Pe;Re.push(J[ne][Ce])}ce=Re.join("").trim()===""}if(!ce){for(var Ae=0;Ae<de;Ae++){0<Ae&&!re&&(he+=T);var Fe=ge&&ye?F[Ae]:Ae;he+=E(J[ne][Fe],Ae)}ne<J.length-1&&(!ue||0<de&&!re)&&(he+=q)}}return he}function E(F,J){var ue,he;return F==null?"":F.constructor===Date?JSON.stringify(F).slice(1,25):(he=!1,D&&typeof F=="string"&&D.test(F)&&(F="'"+F,he=!0),ue=F.toString().replace(Q,K),(he=he||R===!0||typeof R=="function"&&R(F,J)||Array.isArray(R)&&R[J]||((ge,ye)=>{for(var fe=0;fe<ye.length;fe++)if(-1<ge.indexOf(ye[fe]))return!0;return!1})(ue,f.BAD_DELIMITERS)||-1<ue.indexOf(T)||ue.charAt(0)===" "||ue.charAt(ue.length-1)===" ")?L+ue+L:ue)}},f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!i&&!!r.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=S,f.ParserHandle=I,f.NetworkStreamer=d,f.FileStreamer=v,f.StringStreamer=y,f.ReadableStreamStreamer=B,r.jQuery&&((a=r.jQuery).fn.parse=function(P){var C=P.config||{},R=[];return this.each(function(q){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var L=0;L<this.files.length;L++)R.push({file:this.files[L],inputElem:this,instanceConfig:a.extend({},C)})}),j(),this;function j(){if(R.length===0)N(P.complete)&&P.complete();else{var q,L,K,U,V=R[0];if(N(P.before)){var D=P.before(V.file,V.inputElem);if(typeof D=="object"){if(D.action==="abort")return q="AbortError",L=V.file,K=V.inputElem,U=D.reason,void(N(P.error)&&P.error({name:q},L,K,U));if(D.action==="skip")return void T();typeof D.config=="object"&&(V.instanceConfig=a.extend(V.instanceConfig,D.config))}else if(D==="skip")return void T()}var Q=V.instanceConfig.complete;V.instanceConfig.complete=function(X){N(Q)&&Q(X,V.file,V.inputElem),T()},f.parse(V.file,V.instanceConfig)}}function T(){R.splice(0,1),j()}}),s&&(r.onmessage=function(P){P=P.data,f.WORKER_ID===void 0&&P&&(f.WORKER_ID=P.workerId),typeof P.input=="string"?r.postMessage({workerId:f.WORKER_ID,results:f.parse(P.input,P.config),finished:!0}):(r.File&&P.input instanceof File||P.input instanceof Object)&&(P=f.parse(P.input,P.config))&&r.postMessage({workerId:f.WORKER_ID,results:P,finished:!0})}),(d.prototype=Object.create(h.prototype)).constructor=d,(v.prototype=Object.create(h.prototype)).constructor=v,(y.prototype=Object.create(y.prototype)).constructor=y,(B.prototype=Object.create(h.prototype)).constructor=B,f})})(_p)),_p.exports}var bk=yk();const vI=Xe(bk);function gI(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function R3(...e){return t=>{let n=!1;const r=e.map(a=>{const i=gI(a,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():gI(e[a],null)}}}}function Op(...e){return Y.useCallback(R3(...e),e)}var fs=Y.forwardRef((e,t)=>{const{children:n,...r}=e,a=Y.Children.toArray(n),i=a.find(Bk);if(i){const s=i.props.children,l=a.map(c=>c===i?Y.Children.count(s)>1?Y.Children.only(null):Y.isValidElement(s)?s.props.children:null:c);return M.jsx(Wv,{...r,ref:t,children:Y.isValidElement(s)?Y.cloneElement(s,void 0,l):null})}return M.jsx(Wv,{...r,ref:t,children:n})});fs.displayName="Slot";var Wv=Y.forwardRef((e,t)=>{const{children:n,...r}=e;if(Y.isValidElement(n)){const a=wk(n),i=xk(r,n.props);return n.type!==Y.Fragment&&(i.ref=t?R3(t,a):a),Y.cloneElement(n,i)}return Y.Children.count(n)>1?Y.Children.only(null):null});Wv.displayName="SlotClone";var Ik=({children:e})=>M.jsx(M.Fragment,{children:e});function Bk(e){return Y.isValidElement(e)&&e.type===Ik}function xk(e,t){const n={...t};for(const r in t){const a=e[r],i=t[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...l)=>{i(...l),a(...l)}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function wk(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function H3(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=H3(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function He(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=H3(e))&&(r&&(r+=" "),r+=t);return r}const yI=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,bI=He,Pk=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return bI(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:i}=t,s=Object.keys(a).map(f=>{const h=n==null?void 0:n[f],d=i==null?void 0:i[f];if(h===null)return null;const v=yI(h)||yI(d);return a[f][v]}),l=n&&Object.entries(n).reduce((f,h)=>{let[d,v]=h;return v===void 0||(f[d]=v),f},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((f,h)=>{let{class:d,className:v,...y}=h;return Object.entries(y).every(B=>{let[I,b]=B;return Array.isArray(b)?b.includes({...i,...l}[I]):{...i,...l}[I]===b})?[...f,d,v]:f},[]);return bI(e,s,c,n==null?void 0:n.class,n==null?void 0:n.className)},py="-",Sk=e=>{const t=Ak(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const l=s.split(py);return l[0]===""&&l.length!==1&&l.shift(),j3(l,t)||Wk(s)},getConflictingClassGroupIds:(s,l)=>{const c=n[s]||[];return l&&r[s]?[...c,...r[s]]:c}}},j3=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),a=r?j3(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const i=e.join(py);return(s=t.validators.find(({validator:l})=>l(i)))==null?void 0:s.classGroupId},II=/^\[(.+)\]$/,Wk=e=>{if(II.test(e)){const t=II.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Ak=e=>{const{theme:t,classGroups:n}=e,r={nextPart:new Map,validators:[]};for(const a in n)Av(n[a],r,a,t);return r},Av=(e,t,n,r)=>{e.forEach(a=>{if(typeof a=="string"){const i=a===""?t:BI(t,a);i.classGroupId=n;return}if(typeof a=="function"){if(_k(a)){Av(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([i,s])=>{Av(s,BI(t,i),n,r)})})},BI=(e,t)=>{let n=e;return t.split(py).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},_k=e=>e.isThemeGetter,Mk=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const a=(i,s)=>{n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let s=n.get(i);if(s!==void 0)return s;if((s=r.get(i))!==void 0)return a(i,s),s},set(i,s){n.has(i)?n.set(i,s):a(i,s)}}},_v="!",Mv=":",Ok=Mv.length,Ck=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=a=>{const i=[];let s=0,l=0,c=0,f;for(let B=0;B<a.length;B++){let I=a[B];if(s===0&&l===0){if(I===Mv){i.push(a.slice(c,B)),c=B+Ok;continue}if(I==="/"){f=B;continue}}I==="["?s++:I==="]"?s--:I==="("?l++:I===")"&&l--}const h=i.length===0?a:a.substring(c),d=kk(h),v=d!==h,y=f&&f>c?f-c:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:d,maybePostfixModifierPosition:y}};if(t){const a=t+Mv,i=r;r=s=>s.startsWith(a)?i(s.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:s,maybePostfixModifierPosition:void 0}}if(n){const a=r;r=i=>n({className:i,parseClassName:a})}return r},kk=e=>e.endsWith(_v)?e.substring(0,e.length-1):e.startsWith(_v)?e.substring(1):e,Nk=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let i=[];return r.forEach(s=>{s[0]==="["||t[s]?(a.push(...i.sort(),s),i=[]):i.push(s)}),a.push(...i.sort()),a}},Ek=e=>({cache:Mk(e.cacheSize),parseClassName:Ck(e),sortModifiers:Nk(e),...Sk(e)}),Tk=/\s+/,Rk=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=t,s=[],l=e.trim().split(Tk);let c="";for(let f=l.length-1;f>=0;f-=1){const h=l[f],{isExternal:d,modifiers:v,hasImportantModifier:y,baseClassName:B,maybePostfixModifierPosition:I}=n(h);if(d){c=h+(c.length>0?" "+c:c);continue}let b=!!I,S=r(b?B.substring(0,I):B);if(!S){if(!b){c=h+(c.length>0?" "+c:c);continue}if(S=r(B),!S){c=h+(c.length>0?" "+c:c);continue}b=!1}const W=i(v).join(":"),A=y?W+_v:W,O=A+S;if(s.includes(O))continue;s.push(O);const w=a(S,b);for(let _=0;_<w.length;++_){const N=w[_];s.push(A+N)}c=h+(c.length>0?" "+c:c)}return c};function Hk(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=D3(t))&&(r&&(r+=" "),r+=n);return r}const D3=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=D3(e[r]))&&(n&&(n+=" "),n+=t);return n};function jk(e,...t){let n,r,a,i=s;function s(c){const f=t.reduce((h,d)=>d(h),e());return n=Ek(f),r=n.cache.get,a=n.cache.set,i=l,l(c)}function l(c){const f=r(c);if(f)return f;const h=Rk(c,n);return a(c,h),h}return function(){return i(Hk.apply(null,arguments))}}const Et=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},$3=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,L3=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Dk=/^\d+\/\d+$/,$k=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Lk=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Fk=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,qk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,zk=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Zo=e=>Dk.test(e),$e=e=>!!e&&!Number.isNaN(Number(e)),xa=e=>!!e&&Number.isInteger(Number(e)),bf=e=>e.endsWith("%")&&$e(e.slice(0,-1)),Rr=e=>$k.test(e),Uk=()=>!0,Vk=e=>Lk.test(e)&&!Fk.test(e),F3=()=>!1,Gk=e=>qk.test(e),Kk=e=>zk.test(e),Qk=e=>!xe(e)&&!we(e),Yk=e=>zi(e,U3,F3),xe=e=>$3.test(e),no=e=>zi(e,V3,Vk),If=e=>zi(e,tN,$e),xI=e=>zi(e,q3,F3),Xk=e=>zi(e,z3,Kk),fp=e=>zi(e,G3,Gk),we=e=>L3.test(e),Lu=e=>Ui(e,V3),Zk=e=>Ui(e,nN),wI=e=>Ui(e,q3),Jk=e=>Ui(e,U3),eN=e=>Ui(e,z3),dp=e=>Ui(e,G3,!0),zi=(e,t,n)=>{const r=$3.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Ui=(e,t,n=!1)=>{const r=L3.exec(e);return r?r[1]?t(r[1]):n:!1},q3=e=>e==="position"||e==="percentage",z3=e=>e==="image"||e==="url",U3=e=>e==="length"||e==="size"||e==="bg-size",V3=e=>e==="length",tN=e=>e==="number",nN=e=>e==="family-name",G3=e=>e==="shadow",rN=()=>{const e=Et("color"),t=Et("font"),n=Et("text"),r=Et("font-weight"),a=Et("tracking"),i=Et("leading"),s=Et("breakpoint"),l=Et("container"),c=Et("spacing"),f=Et("radius"),h=Et("shadow"),d=Et("inset-shadow"),v=Et("text-shadow"),y=Et("drop-shadow"),B=Et("blur"),I=Et("perspective"),b=Et("aspect"),S=Et("ease"),W=Et("animate"),A=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...O(),we,xe],_=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto","contain","none"],P=()=>[we,xe,c],C=()=>[Zo,"full","auto",...P()],R=()=>[xa,"none","subgrid",we,xe],j=()=>["auto",{span:["full",xa,we,xe]},xa,we,xe],T=()=>[xa,"auto",we,xe],q=()=>["auto","min","max","fr",we,xe],L=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],K=()=>["start","end","center","stretch","center-safe","end-safe"],U=()=>["auto",...P()],V=()=>[Zo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],D=()=>[e,we,xe],Q=()=>[...O(),wI,xI,{position:[we,xe]}],X=()=>["no-repeat",{repeat:["","x","y","space","round"]}],E=()=>["auto","cover","contain",Jk,Yk,{size:[we,xe]}],F=()=>[bf,Lu,no],J=()=>["","none","full",f,we,xe],ue=()=>["",$e,Lu,no],he=()=>["solid","dashed","dotted","double"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ye=()=>[$e,bf,wI,xI],fe=()=>["","none",B,we,xe],ne=()=>["none",$e,we,xe],de=()=>["none",$e,we,xe],ce=()=>[$e,we,xe],re=()=>[Zo,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Rr],breakpoint:[Rr],color:[Uk],container:[Rr],"drop-shadow":[Rr],ease:["in","out","in-out"],font:[Qk],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Rr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Rr],shadow:[Rr],spacing:["px",$e],text:[Rr],"text-shadow":[Rr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Zo,xe,we,b]}],container:["container"],columns:[{columns:[$e,xe,we,l]}],"break-after":[{"break-after":A()}],"break-before":[{"break-before":A()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[xa,"auto",we,xe]}],basis:[{basis:[Zo,"full","auto",l,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,Zo,"auto","initial","none",xe]}],grow:[{grow:["",$e,we,xe]}],shrink:[{shrink:["",$e,we,xe]}],order:[{order:[xa,"first","last","none",we,xe]}],"grid-cols":[{"grid-cols":R()}],"col-start-end":[{col:j()}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":R()}],"row-start-end":[{row:j()}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":q()}],"auto-rows":[{"auto-rows":q()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...L(),"normal"]}],"justify-items":[{"justify-items":[...K(),"normal"]}],"justify-self":[{"justify-self":["auto",...K()]}],"align-content":[{content:["normal",...L()]}],"align-items":[{items:[...K(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...K(),{baseline:["","last"]}]}],"place-content":[{"place-content":L()}],"place-items":[{"place-items":[...K(),"baseline"]}],"place-self":[{"place-self":["auto",...K()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:U()}],mx:[{mx:U()}],my:[{my:U()}],ms:[{ms:U()}],me:[{me:U()}],mt:[{mt:U()}],mr:[{mr:U()}],mb:[{mb:U()}],ml:[{ml:U()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:V()}],w:[{w:[l,"screen",...V()]}],"min-w":[{"min-w":[l,"screen","none",...V()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[s]},...V()]}],h:[{h:["screen",...V()]}],"min-h":[{"min-h":["screen","none",...V()]}],"max-h":[{"max-h":["screen",...V()]}],"font-size":[{text:["base",n,Lu,no]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,we,If]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",bf,xe]}],"font-family":[{font:[Zk,xe,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,we,xe]}],"line-clamp":[{"line-clamp":[$e,"none",we,If]}],leading:[{leading:[i,...P()]}],"list-image":[{"list-image":["none",we,xe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",we,xe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",we,no]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[$e,"auto",we,xe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we,xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we,xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Q()}],"bg-repeat":[{bg:X()}],"bg-size":[{bg:E()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xa,we,xe],radial:["",we,xe],conic:[xa,we,xe]},eN,Xk]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:F()}],"gradient-via-pos":[{via:F()}],"gradient-to-pos":[{to:F()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:J()}],"rounded-s":[{"rounded-s":J()}],"rounded-e":[{"rounded-e":J()}],"rounded-t":[{"rounded-t":J()}],"rounded-r":[{"rounded-r":J()}],"rounded-b":[{"rounded-b":J()}],"rounded-l":[{"rounded-l":J()}],"rounded-ss":[{"rounded-ss":J()}],"rounded-se":[{"rounded-se":J()}],"rounded-ee":[{"rounded-ee":J()}],"rounded-es":[{"rounded-es":J()}],"rounded-tl":[{"rounded-tl":J()}],"rounded-tr":[{"rounded-tr":J()}],"rounded-br":[{"rounded-br":J()}],"rounded-bl":[{"rounded-bl":J()}],"border-w":[{border:ue()}],"border-w-x":[{"border-x":ue()}],"border-w-y":[{"border-y":ue()}],"border-w-s":[{"border-s":ue()}],"border-w-e":[{"border-e":ue()}],"border-w-t":[{"border-t":ue()}],"border-w-r":[{"border-r":ue()}],"border-w-b":[{"border-b":ue()}],"border-w-l":[{"border-l":ue()}],"divide-x":[{"divide-x":ue()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ue()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...he(),"hidden","none"]}],"divide-style":[{divide:[...he(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...he(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,we,xe]}],"outline-w":[{outline:["",$e,Lu,no]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",h,dp,fp]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",d,dp,fp]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[$e,no]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":ue()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",v,dp,fp]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[$e,we,xe]}],"mix-blend":[{"mix-blend":[...ge(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ge()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":ye()}],"mask-image-linear-to-pos":[{"mask-linear-to":ye()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":ye()}],"mask-image-t-to-pos":[{"mask-t-to":ye()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":ye()}],"mask-image-r-to-pos":[{"mask-r-to":ye()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":ye()}],"mask-image-b-to-pos":[{"mask-b-to":ye()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":ye()}],"mask-image-l-to-pos":[{"mask-l-to":ye()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":ye()}],"mask-image-x-to-pos":[{"mask-x-to":ye()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":ye()}],"mask-image-y-to-pos":[{"mask-y-to":ye()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[we,xe]}],"mask-image-radial-from-pos":[{"mask-radial-from":ye()}],"mask-image-radial-to-pos":[{"mask-radial-to":ye()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":O()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":ye()}],"mask-image-conic-to-pos":[{"mask-conic-to":ye()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Q()}],"mask-repeat":[{mask:X()}],"mask-size":[{mask:E()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",we,xe]}],filter:[{filter:["","none",we,xe]}],blur:[{blur:fe()}],brightness:[{brightness:[$e,we,xe]}],contrast:[{contrast:[$e,we,xe]}],"drop-shadow":[{"drop-shadow":["","none",y,dp,fp]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",$e,we,xe]}],"hue-rotate":[{"hue-rotate":[$e,we,xe]}],invert:[{invert:["",$e,we,xe]}],saturate:[{saturate:[$e,we,xe]}],sepia:[{sepia:["",$e,we,xe]}],"backdrop-filter":[{"backdrop-filter":["","none",we,xe]}],"backdrop-blur":[{"backdrop-blur":fe()}],"backdrop-brightness":[{"backdrop-brightness":[$e,we,xe]}],"backdrop-contrast":[{"backdrop-contrast":[$e,we,xe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,we,xe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,we,xe]}],"backdrop-invert":[{"backdrop-invert":["",$e,we,xe]}],"backdrop-opacity":[{"backdrop-opacity":[$e,we,xe]}],"backdrop-saturate":[{"backdrop-saturate":[$e,we,xe]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,we,xe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",we,xe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",we,xe]}],ease:[{ease:["linear","initial",S,we,xe]}],delay:[{delay:[$e,we,xe]}],animate:[{animate:["none",W,we,xe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,we,xe]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:ne()}],"rotate-x":[{"rotate-x":ne()}],"rotate-y":[{"rotate-y":ne()}],"rotate-z":[{"rotate-z":ne()}],scale:[{scale:de()}],"scale-x":[{"scale-x":de()}],"scale-y":[{"scale-y":de()}],"scale-z":[{"scale-z":de()}],"scale-3d":["scale-3d"],skew:[{skew:ce()}],"skew-x":[{"skew-x":ce()}],"skew-y":[{"skew-y":ce()}],transform:[{transform:[we,xe,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:re()}],"translate-x":[{"translate-x":re()}],"translate-y":[{"translate-y":re()}],"translate-z":[{"translate-z":re()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we,xe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we,xe]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[$e,Lu,no,If]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},aN=jk(rN);function ln(...e){return aN(He(e))}const oN=Pk("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Bf({className:e,variant:t,size:n,asChild:r=!1,...a}){const i=r?fs:"button";return M.jsx(i,{"data-slot":"button",className:ln(oN({variant:t,size:n,className:e})),...a})}function zn({className:e,...t}){return M.jsx("div",{"data-slot":"card",className:ln("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}function jc({className:e,...t}){return M.jsx("div",{"data-slot":"card-header",className:ln("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function Dc({className:e,...t}){return M.jsx("h4",{"data-slot":"card-title",className:ln("leading-none",e),...t})}function Un({className:e,...t}){return M.jsx("div",{"data-slot":"card-content",className:ln("px-6 [&:last-child]:pb-6",e),...t})}function zr(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function cy(e,t=[]){let n=[];function r(i,s){const l=Y.createContext(s),c=n.length;n=[...n,s];const f=d=>{var S;const{scope:v,children:y,...B}=d,I=((S=v==null?void 0:v[e])==null?void 0:S[c])||l,b=Y.useMemo(()=>B,Object.values(B));return M.jsx(I.Provider,{value:b,children:y})};f.displayName=i+"Provider";function h(d,v){var I;const y=((I=v==null?void 0:v[e])==null?void 0:I[c])||l,B=Y.useContext(y);if(B)return B;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${i}\``)}return[f,h]}const a=()=>{const i=n.map(s=>Y.createContext(s));return function(l){const c=(l==null?void 0:l[e])||i;return Y.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return a.scopeName=e,[r,iN(a,...t)]}function iN(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const s=r.reduce((l,{useScope:c,scopeName:f})=>{const d=c(i)[`__scope${f}`];return{...l,...d}},{});return Y.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function uN(e){const t=e+"CollectionProvider",[n,r]=cy(t),[a,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=y=>{const{scope:B,children:I}=y,b=H.useRef(null),S=H.useRef(new Map).current;return M.jsx(a,{scope:B,itemMap:S,collectionRef:b,children:I})};s.displayName=t;const l=e+"CollectionSlot",c=H.forwardRef((y,B)=>{const{scope:I,children:b}=y,S=i(l,I),W=Op(B,S.collectionRef);return M.jsx(fs,{ref:W,children:b})});c.displayName=l;const f=e+"CollectionItemSlot",h="data-radix-collection-item",d=H.forwardRef((y,B)=>{const{scope:I,children:b,...S}=y,W=H.useRef(null),A=Op(B,W),O=i(f,I);return H.useEffect(()=>(O.itemMap.set(W,{ref:W,...S}),()=>void O.itemMap.delete(W))),M.jsx(fs,{[h]:"",ref:A,children:b})});d.displayName=f;function v(y){const B=i(e+"CollectionConsumer",y);return H.useCallback(()=>{const b=B.collectionRef.current;if(!b)return[];const S=Array.from(b.querySelectorAll(`[${h}]`));return Array.from(B.itemMap.values()).sort((O,w)=>S.indexOf(O.ref.current)-S.indexOf(w.ref.current))},[B.collectionRef,B.itemMap])}return[{Provider:s,Slot:c,ItemSlot:d},v,r]}var Ov=globalThis!=null&&globalThis.document?Y.useLayoutEffect:()=>{},sN=vk.useId||(()=>{}),lN=0;function K3(e){const[t,n]=Y.useState(sN());return Ov(()=>{n(r=>r??String(lN++))},[e]),e||(t?`radix-${t}`:"")}T3();var pN=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Vi=pN.reduce((e,t)=>{const n=Y.forwardRef((r,a)=>{const{asChild:i,...s}=r,l=i?fs:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),M.jsx(l,{...s,ref:a})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function fy(e){const t=Y.useRef(e);return Y.useEffect(()=>{t.current=e}),Y.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Q3({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,a]=cN({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:r,l=fy(n),c=Y.useCallback(f=>{if(i){const d=typeof f=="function"?f(e):f;d!==e&&l(d)}else a(f)},[i,e,a,l]);return[s,c]}function cN({defaultProp:e,onChange:t}){const n=Y.useState(e),[r]=n,a=Y.useRef(r),i=fy(t);return Y.useEffect(()=>{a.current!==r&&(i(r),a.current=r)},[r,a,i]),n}var fN=Y.createContext(void 0);function Y3(e){const t=Y.useContext(fN);return e||t||"ltr"}var xf="rovingFocusGroup.onEntryFocus",dN={bubbles:!1,cancelable:!0},$c="RovingFocusGroup",[Cv,X3,hN]=uN($c),[mN,Z3]=cy($c,[hN]),[vN,gN]=mN($c),J3=Y.forwardRef((e,t)=>M.jsx(Cv.Provider,{scope:e.__scopeRovingFocusGroup,children:M.jsx(Cv.Slot,{scope:e.__scopeRovingFocusGroup,children:M.jsx(yN,{...e,ref:t})})}));J3.displayName=$c;var yN=Y.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:a=!1,dir:i,currentTabStopId:s,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:c,onEntryFocus:f,preventScrollOnEntryFocus:h=!1,...d}=e,v=Y.useRef(null),y=Op(t,v),B=Y3(i),[I=null,b]=Q3({prop:s,defaultProp:l,onChange:c}),[S,W]=Y.useState(!1),A=fy(f),O=X3(n),w=Y.useRef(!1),[_,N]=Y.useState(0);return Y.useEffect(()=>{const P=v.current;if(P)return P.addEventListener(xf,A),()=>P.removeEventListener(xf,A)},[A]),M.jsx(vN,{scope:n,orientation:r,dir:B,loop:a,currentTabStopId:I,onItemFocus:Y.useCallback(P=>b(P),[b]),onItemShiftTab:Y.useCallback(()=>W(!0),[]),onFocusableItemAdd:Y.useCallback(()=>N(P=>P+1),[]),onFocusableItemRemove:Y.useCallback(()=>N(P=>P-1),[]),children:M.jsx(Vi.div,{tabIndex:S||_===0?-1:0,"data-orientation":r,...d,ref:y,style:{outline:"none",...e.style},onMouseDown:zr(e.onMouseDown,()=>{w.current=!0}),onFocus:zr(e.onFocus,P=>{const C=!w.current;if(P.target===P.currentTarget&&C&&!S){const R=new CustomEvent(xf,dN);if(P.currentTarget.dispatchEvent(R),!R.defaultPrevented){const j=O().filter(U=>U.focusable),T=j.find(U=>U.active),q=j.find(U=>U.id===I),K=[T,q,...j].filter(Boolean).map(U=>U.ref.current);nW(K,h)}}w.current=!1}),onBlur:zr(e.onBlur,()=>W(!1))})})}),eW="RovingFocusGroupItem",tW=Y.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:a=!1,tabStopId:i,...s}=e,l=K3(),c=i||l,f=gN(eW,n),h=f.currentTabStopId===c,d=X3(n),{onFocusableItemAdd:v,onFocusableItemRemove:y}=f;return Y.useEffect(()=>{if(r)return v(),()=>y()},[r,v,y]),M.jsx(Cv.ItemSlot,{scope:n,id:c,focusable:r,active:a,children:M.jsx(Vi.span,{tabIndex:h?0:-1,"data-orientation":f.orientation,...s,ref:t,onMouseDown:zr(e.onMouseDown,B=>{r?f.onItemFocus(c):B.preventDefault()}),onFocus:zr(e.onFocus,()=>f.onItemFocus(c)),onKeyDown:zr(e.onKeyDown,B=>{if(B.key==="Tab"&&B.shiftKey){f.onItemShiftTab();return}if(B.target!==B.currentTarget)return;const I=BN(B,f.orientation,f.dir);if(I!==void 0){if(B.metaKey||B.ctrlKey||B.altKey||B.shiftKey)return;B.preventDefault();let S=d().filter(W=>W.focusable).map(W=>W.ref.current);if(I==="last")S.reverse();else if(I==="prev"||I==="next"){I==="prev"&&S.reverse();const W=S.indexOf(B.currentTarget);S=f.loop?xN(S,W+1):S.slice(W+1)}setTimeout(()=>nW(S))}})})})});tW.displayName=eW;var bN={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function IN(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function BN(e,t,n){const r=IN(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return bN[r]}function nW(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function xN(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var wN=J3,PN=tW;function SN(e,t){return Y.useReducer((n,r)=>t[n][r]??n,e)}var rW=e=>{const{present:t,children:n}=e,r=WN(t),a=typeof n=="function"?n({present:r.isPresent}):Y.Children.only(n),i=Op(r.ref,AN(a));return typeof n=="function"||r.isPresent?Y.cloneElement(a,{ref:i}):null};rW.displayName="Presence";function WN(e){const[t,n]=Y.useState(),r=Y.useRef({}),a=Y.useRef(e),i=Y.useRef("none"),s=e?"mounted":"unmounted",[l,c]=SN(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Y.useEffect(()=>{const f=hp(r.current);i.current=l==="mounted"?f:"none"},[l]),Ov(()=>{const f=r.current,h=a.current;if(h!==e){const v=i.current,y=hp(f);e?c("MOUNT"):y==="none"||(f==null?void 0:f.display)==="none"?c("UNMOUNT"):c(h&&v!==y?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,c]),Ov(()=>{if(t){let f;const h=t.ownerDocument.defaultView??window,d=y=>{const I=hp(r.current).includes(y.animationName);if(y.target===t&&I&&(c("ANIMATION_END"),!a.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",f=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},v=y=>{y.target===t&&(i.current=hp(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{h.clearTimeout(f),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:Y.useCallback(f=>{f&&(r.current=getComputedStyle(f)),n(f)},[])}}function hp(e){return(e==null?void 0:e.animationName)||"none"}function AN(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var dy="Tabs",[_N]=cy(dy,[Z3]),aW=Z3(),[MN,hy]=_N(dy),oW=Y.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:a,defaultValue:i,orientation:s="horizontal",dir:l,activationMode:c="automatic",...f}=e,h=Y3(l),[d,v]=Q3({prop:r,onChange:a,defaultProp:i});return M.jsx(MN,{scope:n,baseId:K3(),value:d,onValueChange:v,orientation:s,dir:h,activationMode:c,children:M.jsx(Vi.div,{dir:h,"data-orientation":s,...f,ref:t})})});oW.displayName=dy;var iW="TabsList",uW=Y.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...a}=e,i=hy(iW,n),s=aW(n);return M.jsx(wN,{asChild:!0,...s,orientation:i.orientation,dir:i.dir,loop:r,children:M.jsx(Vi.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:t})})});uW.displayName=iW;var sW="TabsTrigger",lW=Y.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:a=!1,...i}=e,s=hy(sW,n),l=aW(n),c=fW(s.baseId,r),f=dW(s.baseId,r),h=r===s.value;return M.jsx(PN,{asChild:!0,...l,focusable:!a,active:h,children:M.jsx(Vi.button,{type:"button",role:"tab","aria-selected":h,"aria-controls":f,"data-state":h?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...i,ref:t,onMouseDown:zr(e.onMouseDown,d=>{!a&&d.button===0&&d.ctrlKey===!1?s.onValueChange(r):d.preventDefault()}),onKeyDown:zr(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&s.onValueChange(r)}),onFocus:zr(e.onFocus,()=>{const d=s.activationMode!=="manual";!h&&!a&&d&&s.onValueChange(r)})})})});lW.displayName=sW;var pW="TabsContent",cW=Y.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:a,children:i,...s}=e,l=hy(pW,n),c=fW(l.baseId,r),f=dW(l.baseId,r),h=r===l.value,d=Y.useRef(h);return Y.useEffect(()=>{const v=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(v)},[]),M.jsx(rW,{present:a||h,children:({present:v})=>M.jsx(Vi.div,{"data-state":h?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":c,hidden:!v,id:f,tabIndex:0,...s,ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0},children:v&&i})})});cW.displayName=pW;function fW(e,t){return`${e}-trigger-${t}`}function dW(e,t){return`${e}-content-${t}`}var ON=oW,CN=uW,kN=lW,NN=cW;function EN({className:e,...t}){return M.jsx(ON,{"data-slot":"tabs",className:ln("flex flex-col gap-2",e),...t})}function TN({className:e,...t}){return M.jsx(CN,{"data-slot":"tabs-list",className:ln("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",e),...t})}function PI({className:e,...t}){return M.jsx(kN,{"data-slot":"tabs-trigger",className:ln("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function SI({className:e,...t}){return M.jsx(NN,{"data-slot":"tabs-content",className:ln("flex-1 outline-none",e),...t})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),HN=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),WI=e=>{const t=HN(e);return t.charAt(0).toUpperCase()+t.slice(1)},hW=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=Y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:s,...l},c)=>Y.createElement("svg",{ref:c,...jN,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:hW("lucide",a),...l},[...s.map(([f,h])=>Y.createElement(f,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=(e,t)=>{const n=Y.forwardRef(({className:r,...a},i)=>Y.createElement(DN,{ref:i,iconNode:t,className:hW(`lucide-${RN(WI(e))}`,`lucide-${e}`,r),...a}));return n.displayName=WI(e),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],LN=Qn("arrow-up-down",$N);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],qN=Qn("bot",FN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],UN=Qn("chevron-down",zN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],AI=Qn("chevron-left",VN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],kv=Qn("chevron-right",GN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],QN=Qn("circle-plus",KN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YN=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],XN=Qn("download",YN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZN=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],JN=Qn("trash-2",ZN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],tE=Qn("trending-up",eE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],rE=Qn("triangle-alert",nE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],oE=Qn("users",aE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],uE=Qn("x",iE);function Ct(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function St(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Cp(e,t){const n=Ct(e);return isNaN(t)?St(e,NaN):(t&&n.setDate(n.getDate()+t),n)}const mW=6048e5,sE=864e5,lE=6e4,pE=36e5,cE=1e3;let fE={};function Gi(){return fE}function Na(e,t){var l,c,f,h;const n=Gi(),r=(t==null?void 0:t.weekStartsOn)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.weekStartsOn)??0,a=Ct(e),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function hi(e){return Na(e,{weekStartsOn:1})}function vW(e){const t=Ct(e),n=t.getFullYear(),r=St(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=hi(r),i=St(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=hi(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function _I(e){const t=Ct(e);return t.setHours(0,0,0,0),t}function kp(e){const t=Ct(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function dE(e,t){const n=_I(e),r=_I(t),a=+n-kp(n),i=+r-kp(r);return Math.round((a-i)/sE)}function hE(e){const t=vW(e),n=St(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),hi(n)}function mE(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function vE(e){if(!mE(e)&&typeof e!="number")return!1;const t=Ct(e);return!isNaN(Number(t))}function gE(e){const t=Ct(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function yE(e){const t=Ct(e);return t.setDate(1),t.setHours(0,0,0,0),t}function bE(e){const t=Ct(e),n=St(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const IE={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},BE=(e,t,n)=>{let r;const a=IE[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function wf(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const xE={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},wE={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},PE={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},SE={date:wf({formats:xE,defaultWidth:"full"}),time:wf({formats:wE,defaultWidth:"full"}),dateTime:wf({formats:PE,defaultWidth:"full"})},WE={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},AE=(e,t,n,r)=>WE[e];function Fu(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):s;a=e.formattingValues[l]||e.formattingValues[s]}else{const s=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[l]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}const _E={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ME={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},OE={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},CE={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},kE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},NE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},EE=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},TE={ordinalNumber:EE,era:Fu({values:_E,defaultWidth:"wide"}),quarter:Fu({values:ME,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Fu({values:OE,defaultWidth:"wide"}),day:Fu({values:CE,defaultWidth:"wide"}),dayPeriod:Fu({values:kE,defaultWidth:"wide",formattingValues:NE,defaultFormattingWidth:"wide"})};function qu(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const s=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(l)?HE(l,d=>d.test(s)):RE(l,d=>d.test(s));let f;f=e.valueCallback?e.valueCallback(c):c,f=n.valueCallback?n.valueCallback(f):f;const h=t.slice(s.length);return{value:f,rest:h}}}function RE(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function HE(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function jE(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const l=t.slice(a.length);return{value:s,rest:l}}}const DE=/^(\d+)(th|st|nd|rd)?/i,$E=/\d+/i,LE={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},FE={any:[/^b/i,/^(a|c)/i]},qE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},zE={any:[/1/i,/2/i,/3/i,/4/i]},UE={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},VE={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},GE={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},KE={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},QE={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},YE={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},XE={ordinalNumber:jE({matchPattern:DE,parsePattern:$E,valueCallback:e=>parseInt(e,10)}),era:qu({matchPatterns:LE,defaultMatchWidth:"wide",parsePatterns:FE,defaultParseWidth:"any"}),quarter:qu({matchPatterns:qE,defaultMatchWidth:"wide",parsePatterns:zE,defaultParseWidth:"any",valueCallback:e=>e+1}),month:qu({matchPatterns:UE,defaultMatchWidth:"wide",parsePatterns:VE,defaultParseWidth:"any"}),day:qu({matchPatterns:GE,defaultMatchWidth:"wide",parsePatterns:KE,defaultParseWidth:"any"}),dayPeriod:qu({matchPatterns:QE,defaultMatchWidth:"any",parsePatterns:YE,defaultParseWidth:"any"})},gW={code:"en-US",formatDistance:BE,formatLong:SE,formatRelative:AE,localize:TE,match:XE,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ZE(e){const t=Ct(e);return dE(t,bE(t))+1}function yW(e){const t=Ct(e),n=+hi(t)-+hE(t);return Math.round(n/mW)+1}function my(e,t){var h,d,v,y;const n=Ct(e),r=n.getFullYear(),a=Gi(),i=(t==null?void 0:t.firstWeekContainsDate)??((d=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:d.firstWeekContainsDate)??a.firstWeekContainsDate??((y=(v=a.locale)==null?void 0:v.options)==null?void 0:y.firstWeekContainsDate)??1,s=St(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const l=Na(s,t),c=St(e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const f=Na(c,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function JE(e,t){var l,c,f,h;const n=Gi(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??1,a=my(e,t),i=St(e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),Na(i,t)}function bW(e,t){const n=Ct(e),r=+Na(n,t)-+JE(n,t);return Math.round(r/mW)+1}function Je(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const wa={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return Je(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):Je(n+1,2)},d(e,t){return Je(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return Je(e.getHours()%12||12,t.length)},H(e,t){return Je(e.getHours(),t.length)},m(e,t){return Je(e.getMinutes(),t.length)},s(e,t){return Je(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return Je(a,t.length)}},Jo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},MI={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return wa.y(e,t)},Y:function(e,t,n,r){const a=my(e,r),i=a>0?a:1-a;if(t==="YY"){const s=i%100;return Je(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):Je(i,t.length)},R:function(e,t){const n=vW(e);return Je(n,t.length)},u:function(e,t){const n=e.getFullYear();return Je(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return Je(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return Je(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return wa.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return Je(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=bW(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):Je(a,t.length)},I:function(e,t,n){const r=yW(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):Je(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):wa.d(e,t)},D:function(e,t,n){const r=ZE(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):Je(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return Je(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return Je(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return Je(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=Jo.noon:r===0?a=Jo.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=Jo.evening:r>=12?a=Jo.afternoon:r>=4?a=Jo.morning:a=Jo.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return wa.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):wa.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):Je(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):wa.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):wa.s(e,t)},S:function(e,t){return wa.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return CI(r);case"XXXX":case"XX":return io(r);case"XXXXX":case"XXX":default:return io(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return CI(r);case"xxxx":case"xx":return io(r);case"xxxxx":case"xxx":default:return io(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+OI(r,":");case"OOOO":default:return"GMT"+io(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+OI(r,":");case"zzzz":default:return"GMT"+io(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return Je(r,t.length)},T:function(e,t,n){const r=e.getTime();return Je(r,t.length)}};function OI(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+t+Je(i,2)}function CI(e,t){return e%60===0?(e>0?"-":"+")+Je(Math.abs(e)/60,2):io(e,t)}function io(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Je(Math.trunc(r/60),2),i=Je(r%60,2);return n+a+t+i}const kI=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},IW=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},eT=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return kI(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",kI(r,t)).replace("{{time}}",IW(a,t))},Nv={p:IW,P:eT},tT=/^D+$/,nT=/^Y+$/,rT=["D","DD","YY","YYYY"];function BW(e){return tT.test(e)}function xW(e){return nT.test(e)}function Ev(e,t,n){const r=aT(e,t,n);if(console.warn(r),rT.includes(e))throw new RangeError(r)}function aT(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const oT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,iT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,uT=/^'([^]*?)'?$/,sT=/''/g,lT=/[a-zA-Z]/;function pT(e,t,n){var h,d,v,y;const r=Gi(),a=r.locale??gW,i=r.firstWeekContainsDate??((d=(h=r.locale)==null?void 0:h.options)==null?void 0:d.firstWeekContainsDate)??1,s=r.weekStartsOn??((y=(v=r.locale)==null?void 0:v.options)==null?void 0:y.weekStartsOn)??0,l=Ct(e);if(!vE(l))throw new RangeError("Invalid time value");let c=t.match(iT).map(B=>{const I=B[0];if(I==="p"||I==="P"){const b=Nv[I];return b(B,a.formatLong)}return B}).join("").match(oT).map(B=>{if(B==="''")return{isToken:!1,value:"'"};const I=B[0];if(I==="'")return{isToken:!1,value:cT(B)};if(MI[I])return{isToken:!0,value:B};if(I.match(lT))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:B}});a.localize.preprocessor&&(c=a.localize.preprocessor(l,c));const f={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return c.map(B=>{if(!B.isToken)return B.value;const I=B.value;(xW(I)||BW(I))&&Ev(I,t,String(e));const b=MI[I[0]];return b(l,I,a.localize,f)}).join("")}function cT(e){const t=e.match(uT);return t?t[1].replace(sT,"'"):e}function fT(){return Object.assign({},Gi())}function dT(e){let n=Ct(e).getDay();return n===0&&(n=7),n}function hT(e,t){const n=t instanceof Date?St(t,0):new t(0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}const mT=10;class wW{constructor(){ve(this,"subPriority",0)}validate(t,n){return!0}}class vT extends wW{constructor(t,n,r,a,i){super(),this.value=t,this.validateValue=n,this.setValue=r,this.priority=a,i&&(this.subPriority=i)}validate(t,n){return this.validateValue(t,this.value,n)}set(t,n,r){return this.setValue(t,n,this.value,r)}}class gT extends wW{constructor(){super(...arguments);ve(this,"priority",mT);ve(this,"subPriority",-1)}set(n,r){return r.timestampIsSet?n:St(n,hT(n,Date))}}class Ge{run(t,n,r,a){const i=this.parse(t,n,r,a);return i?{setter:new vT(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(t,n,r){return!0}}class yT extends Ge{constructor(){super(...arguments);ve(this,"priority",140);ve(this,"incompatibleTokens",["R","u","t","T"])}parse(n,r,a){switch(r){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})||a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"})}}set(n,r,a){return r.era=a,n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}const Wt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},gr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function At(e,t){return e&&{value:t(e.value),rest:e.rest}}function mt(e,t){const n=t.match(e);return n?{value:parseInt(n[0],10),rest:t.slice(n[0].length)}:null}function yr(e,t){const n=t.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:t.slice(1)};const r=n[1]==="+"?1:-1,a=n[2]?parseInt(n[2],10):0,i=n[3]?parseInt(n[3],10):0,s=n[5]?parseInt(n[5],10):0;return{value:r*(a*pE+i*lE+s*cE),rest:t.slice(n[0].length)}}function PW(e){return mt(Wt.anyDigitsSigned,e)}function It(e,t){switch(e){case 1:return mt(Wt.singleDigit,t);case 2:return mt(Wt.twoDigits,t);case 3:return mt(Wt.threeDigits,t);case 4:return mt(Wt.fourDigits,t);default:return mt(new RegExp("^\\d{1,"+e+"}"),t)}}function Np(e,t){switch(e){case 1:return mt(Wt.singleDigitSigned,t);case 2:return mt(Wt.twoDigitsSigned,t);case 3:return mt(Wt.threeDigitsSigned,t);case 4:return mt(Wt.fourDigitsSigned,t);default:return mt(new RegExp("^-?\\d{1,"+e+"}"),t)}}function vy(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function SW(e,t){const n=t>0,r=n?t:1-t;let a;if(r<=50)a=e||100;else{const i=r+50,s=Math.trunc(i/100)*100,l=e>=i%100;a=e+s-(l?100:0)}return n?a:1-a}function WW(e){return e%400===0||e%4===0&&e%100!==0}class bT extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,r,a){const i=s=>({year:s,isTwoDigitYear:r==="yy"});switch(r){case"y":return At(It(4,n),i);case"yo":return At(a.ordinalNumber(n,{unit:"year"}),i);default:return At(It(r.length,n),i)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a){const i=n.getFullYear();if(a.isTwoDigitYear){const l=SW(a.year,i);return n.setFullYear(l,0,1),n.setHours(0,0,0,0),n}const s=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(s,0,1),n.setHours(0,0,0,0),n}}class IT extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,r,a){const i=s=>({year:s,isTwoDigitYear:r==="YY"});switch(r){case"Y":return At(It(4,n),i);case"Yo":return At(a.ordinalNumber(n,{unit:"year"}),i);default:return At(It(r.length,n),i)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,a,i){const s=my(n,i);if(a.isTwoDigitYear){const c=SW(a.year,s);return n.setFullYear(c,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Na(n,i)}const l=!("era"in r)||r.era===1?a.year:1-a.year;return n.setFullYear(l,0,i.firstWeekContainsDate),n.setHours(0,0,0,0),Na(n,i)}}class BT extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,r){return Np(r==="R"?4:r.length,n)}set(n,r,a){const i=St(n,0);return i.setFullYear(a,0,4),i.setHours(0,0,0,0),hi(i)}}class xT extends Ge{constructor(){super(...arguments);ve(this,"priority",130);ve(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,r){return Np(r==="u"?4:r.length,n)}set(n,r,a){return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}class wT extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"Q":case"QQ":return It(r.length,n);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})||a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class PT extends Ge{constructor(){super(...arguments);ve(this,"priority",120);ve(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"q":case"qq":return It(r.length,n);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})||a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=1&&r<=4}set(n,r,a){return n.setMonth((a-1)*3,1),n.setHours(0,0,0,0),n}}class ST extends Ge{constructor(){super(...arguments);ve(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);ve(this,"priority",110)}parse(n,r,a){const i=s=>s-1;switch(r){case"M":return At(mt(Wt.month,n),i);case"MM":return At(It(2,n),i);case"Mo":return At(a.ordinalNumber(n,{unit:"month"}),i);case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})||a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}class WT extends Ge{constructor(){super(...arguments);ve(this,"priority",110);ve(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,r,a){const i=s=>s-1;switch(r){case"L":return At(mt(Wt.month,n),i);case"LL":return At(It(2,n),i);case"Lo":return At(a.ordinalNumber(n,{unit:"month"}),i);case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})||a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.setMonth(a,1),n.setHours(0,0,0,0),n}}function AT(e,t,n){const r=Ct(e),a=bW(r,n)-t;return r.setDate(r.getDate()-a*7),r}class _T extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,r,a){switch(r){case"w":return mt(Wt.week,n);case"wo":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a,i){return Na(AT(n,a,i),i)}}function MT(e,t){const n=Ct(e),r=yW(n)-t;return n.setDate(n.getDate()-r*7),n}class OT extends Ge{constructor(){super(...arguments);ve(this,"priority",100);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,r,a){switch(r){case"I":return mt(Wt.week,n);case"Io":return a.ordinalNumber(n,{unit:"week"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,a){return hi(MT(n,a))}}const CT=[31,28,31,30,31,30,31,31,30,31,30,31],kT=[31,29,31,30,31,30,31,31,30,31,30,31];class NT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subPriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"d":return mt(Wt.date,n);case"do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear(),i=WW(a),s=n.getMonth();return i?r>=1&&r<=kT[s]:r>=1&&r<=CT[s]}set(n,r,a){return n.setDate(a),n.setHours(0,0,0,0),n}}class ET extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"subpriority",1);ve(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,r,a){switch(r){case"D":case"DD":return mt(Wt.dayOfYear,n);case"Do":return a.ordinalNumber(n,{unit:"date"});default:return It(r.length,n)}}validate(n,r){const a=n.getFullYear();return WW(a)?r>=1&&r<=366:r>=1&&r<=365}set(n,r,a){return n.setMonth(0,a),n.setHours(0,0,0,0),n}}function gy(e,t,n){var d,v,y,B;const r=Gi(),a=(n==null?void 0:n.weekStartsOn)??((v=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((B=(y=r.locale)==null?void 0:y.options)==null?void 0:B.weekStartsOn)??0,i=Ct(e),s=i.getDay(),c=(t%7+7)%7,f=7-a,h=t<0||t>6?t-(s+f)%7:(c+f)%7-(s+f)%7;return Cp(i,h)}class TT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,r,a){switch(r){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=gy(n,a,i),n.setHours(0,0,0,0),n}}class RT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,r,a,i){const s=l=>{const c=Math.floor((l-1)/7)*7;return(l+i.weekStartsOn+6)%7+c};switch(r){case"e":case"ee":return At(It(r.length,n),s);case"eo":return At(a.ordinalNumber(n,{unit:"day"}),s);case"eee":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=gy(n,a,i),n.setHours(0,0,0,0),n}}class HT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,r,a,i){const s=l=>{const c=Math.floor((l-1)/7)*7;return(l+i.weekStartsOn+6)%7+c};switch(r){case"c":case"cc":return At(It(r.length,n),s);case"co":return At(a.ordinalNumber(n,{unit:"day"}),s);case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})||a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=6}set(n,r,a,i){return n=gy(n,a,i),n.setHours(0,0,0,0),n}}function jT(e,t){const n=Ct(e),r=dT(n),a=t-r;return Cp(n,a)}class DT extends Ge{constructor(){super(...arguments);ve(this,"priority",90);ve(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,r,a){const i=s=>s===0?7:s;switch(r){case"i":case"ii":return It(r.length,n);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return At(a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiii":return At(a.day(n,{width:"narrow",context:"formatting"}),i);case"iiiiii":return At(a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i);case"iiii":default:return At(a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),i)}}validate(n,r){return r>=1&&r<=7}set(n,r,a){return n=jT(n,a),n.setHours(0,0,0,0),n}}class $T extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,r,a){switch(r){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(vy(a),0,0,0),n}}class LT extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,r,a){switch(r){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(vy(a),0,0,0),n}}class FT extends Ge{constructor(){super(...arguments);ve(this,"priority",80);ve(this,"incompatibleTokens",["a","b","t","T"])}parse(n,r,a){switch(r){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,a){return n.setHours(vy(a),0,0,0),n}}class qT extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,r,a){switch(r){case"h":return mt(Wt.hour12h,n);case"ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=12}set(n,r,a){const i=n.getHours()>=12;return i&&a<12?n.setHours(a+12,0,0,0):!i&&a===12?n.setHours(0,0,0,0):n.setHours(a,0,0,0),n}}class zT extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,r,a){switch(r){case"H":return mt(Wt.hour23h,n);case"Ho":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=23}set(n,r,a){return n.setHours(a,0,0,0),n}}class UT extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,r,a){switch(r){case"K":return mt(Wt.hour11h,n);case"Ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=11}set(n,r,a){return n.getHours()>=12&&a<12?n.setHours(a+12,0,0,0):n.setHours(a,0,0,0),n}}class VT extends Ge{constructor(){super(...arguments);ve(this,"priority",70);ve(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,r,a){switch(r){case"k":return mt(Wt.hour24h,n);case"ko":return a.ordinalNumber(n,{unit:"hour"});default:return It(r.length,n)}}validate(n,r){return r>=1&&r<=24}set(n,r,a){const i=a<=24?a%24:a;return n.setHours(i,0,0,0),n}}class GT extends Ge{constructor(){super(...arguments);ve(this,"priority",60);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"m":return mt(Wt.minute,n);case"mo":return a.ordinalNumber(n,{unit:"minute"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setMinutes(a,0,0),n}}class KT extends Ge{constructor(){super(...arguments);ve(this,"priority",50);ve(this,"incompatibleTokens",["t","T"])}parse(n,r,a){switch(r){case"s":return mt(Wt.second,n);case"so":return a.ordinalNumber(n,{unit:"second"});default:return It(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,a){return n.setSeconds(a,0),n}}class QT extends Ge{constructor(){super(...arguments);ve(this,"priority",30);ve(this,"incompatibleTokens",["t","T"])}parse(n,r){const a=i=>Math.trunc(i*Math.pow(10,-r.length+3));return At(It(r.length,n),a)}set(n,r,a){return n.setMilliseconds(a),n}}class YT extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","x"])}parse(n,r){switch(r){case"X":return yr(gr.basicOptionalMinutes,n);case"XX":return yr(gr.basic,n);case"XXXX":return yr(gr.basicOptionalSeconds,n);case"XXXXX":return yr(gr.extendedOptionalSeconds,n);case"XXX":default:return yr(gr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-kp(n)-a)}}class XT extends Ge{constructor(){super(...arguments);ve(this,"priority",10);ve(this,"incompatibleTokens",["t","T","X"])}parse(n,r){switch(r){case"x":return yr(gr.basicOptionalMinutes,n);case"xx":return yr(gr.basic,n);case"xxxx":return yr(gr.basicOptionalSeconds,n);case"xxxxx":return yr(gr.extendedOptionalSeconds,n);case"xxx":default:return yr(gr.extended,n)}}set(n,r,a){return r.timestampIsSet?n:St(n,n.getTime()-kp(n)-a)}}class ZT extends Ge{constructor(){super(...arguments);ve(this,"priority",40);ve(this,"incompatibleTokens","*")}parse(n){return PW(n)}set(n,r,a){return[St(n,a*1e3),{timestampIsSet:!0}]}}class JT extends Ge{constructor(){super(...arguments);ve(this,"priority",20);ve(this,"incompatibleTokens","*")}parse(n){return PW(n)}set(n,r,a){return[St(n,a),{timestampIsSet:!0}]}}const eR={G:new yT,y:new bT,Y:new IT,R:new BT,u:new xT,Q:new wT,q:new PT,M:new ST,L:new WT,w:new _T,I:new OT,d:new NT,D:new ET,E:new TT,e:new RT,c:new HT,i:new DT,a:new $T,b:new LT,B:new FT,h:new qT,H:new zT,K:new UT,k:new VT,m:new GT,s:new KT,S:new QT,X:new YT,x:new XT,t:new ZT,T:new JT},tR=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rR=/^'([^]*?)'?$/,aR=/''/g,oR=/\S/,iR=/[a-zA-Z]/;function uR(e,t,n,r){var I,b,S,W;const a=fT(),i=a.locale??gW,s=a.firstWeekContainsDate??((b=(I=a.locale)==null?void 0:I.options)==null?void 0:b.firstWeekContainsDate)??1,l=a.weekStartsOn??((W=(S=a.locale)==null?void 0:S.options)==null?void 0:W.weekStartsOn)??0,c={firstWeekContainsDate:s,weekStartsOn:l,locale:i},f=[new gT],h=t.match(nR).map(A=>{const O=A[0];if(O in Nv){const w=Nv[O];return w(A,i.formatLong)}return A}).join("").match(tR),d=[];for(let A of h){xW(A)&&Ev(A,t,e),BW(A)&&Ev(A,t,e);const O=A[0],w=eR[O];if(w){const{incompatibleTokens:_}=w;if(Array.isArray(_)){const P=d.find(C=>_.includes(C.token)||C.token===O);if(P)throw new RangeError(`The format string mustn't contain \`${P.fullToken}\` and \`${A}\` at the same time`)}else if(w.incompatibleTokens==="*"&&d.length>0)throw new RangeError(`The format string mustn't contain \`${A}\` and any other token at the same time`);d.push({token:O,fullToken:A});const N=w.run(e,A,i.match,c);if(!N)return St(n,NaN);f.push(N.setter),e=N.rest}else{if(O.match(iR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");if(A==="''"?A="'":O==="'"&&(A=sR(A)),e.indexOf(A)===0)e=e.slice(A.length);else return St(n,NaN)}}if(e.length>0&&oR.test(e))return St(n,NaN);const v=f.map(A=>A.priority).sort((A,O)=>O-A).filter((A,O,w)=>w.indexOf(A)===O).map(A=>f.filter(O=>O.priority===A).sort((O,w)=>w.subPriority-O.subPriority)).map(A=>A[0]);let y=Ct(n);if(isNaN(y.getTime()))return St(n,NaN);const B={};for(const A of v){if(!A.validate(y,c))return St(n,NaN);const O=A.set(y,B,c);Array.isArray(O)?(y=O[0],Object.assign(B,O[1])):y=O}return St(n,y)}function sR(e){return e.match(rR)[1].replace(aR,"'")}const ur=e=>{if(!e)return new Date(NaN);const t=e.trim(),n=t.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(n){const[,a,i,s]=n;return new Date(parseInt(a),parseInt(i)-1,parseInt(s),12,0,0)}const r=t.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(r){const[,a,i,s]=r;return new Date(parseInt(s),parseInt(i)-1,parseInt(a),12,0,0)}return uR(e,"dd-MM-yyyy",new Date)},AW=["january","february","march","april","may","june","july","august","september","october","november","december"],_W=e=>{if(e==="all"||!e)return[];const[t,n]=e.split("-"),r=AW.indexOf(t.toLowerCase()),a=parseInt(n)||2026;if(r===-1)return[];const i=yE(new Date(a,r)),s=gE(new Date(a,r)),l=[];let c=i,f=1;for(;c<=s;){let h=Cp(c,6);h>s&&(h=s),l.push({value:`${t}-week${f}`,label:`${t.charAt(0).toUpperCase()+t.slice(1,3)} ${c.getDate()}-${h.getDate()}`,startDate:c,endDate:h}),c=Cp(h,1),f++}return l},MW=(e,t)=>{if(isNaN(e.getTime()))return!1;const n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,0,0);return n>=t.startDate&&n<=t.endDate},Tv=(e,t)=>{if(t==="all")return!0;if(isNaN(e.getTime()))return!1;const[n,r]=t.split("-"),a=AW.indexOf(n.toLowerCase()),i=parseInt(r);return e.getMonth()===a&&e.getFullYear()===i},lR=e=>!e||isNaN(e.getTime())?"N/A":pT(e,"MMM dd, yyyy"),Rv=e=>{const t=e.length,n=e.filter(a=>a.handled==="Bot").length,r=e.filter(a=>a.handled==="Human").length;return{totalSessions:t,botHandled:n,humanHandled:r,botPercentage:t>0?n/t*100:0,humanPercentage:t>0?r/t*100:0,escalationRate:t>0?r/t*100:0}},Hv=e=>{const t=new Map;e.forEach(r=>{const a=r.channel==="Webchat"?"Webapp":r.channel,i=t.get(a)||0;t.set(a,i+1)});const n=e.length;return Array.from(t.entries()).map(([r,a])=>({channel:r,count:a,percentage:n>0?a/n*100:0})).sort((r,a)=>a.count-r.count)},OW=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.product&&r.product.trim()!==""){const a=n.get(r.product)||0;n.set(r.product,a+1)}}),Array.from(n.entries()).map(([r,a])=>({product:r,count:a})).sort((r,a)=>a.count-r.count)},jv=(e,t=10)=>{const n=new Map;return e.forEach(r=>{if(r.issue&&r.issue.trim()!==""){const a=n.get(r.issue)||{bot:0,human:0};r.handled==="Bot"?a.bot++:a.human++,n.set(r.issue,a)}}),Array.from(n.entries()).map(([r,a])=>({issue:r,botCount:a.bot,humanCount:a.human,total:a.bot+a.human})).sort((r,a)=>a.humanCount-r.humanCount).slice(0,t)},pR=(e,t="february-2026")=>{if(t==="all"){const n=["january","february","march","april","may","june","july","august","september","october","november","december"],r=new Set;return e.forEach(i=>{try{const s=ur(i.createdAt);if(!isNaN(s.getTime())){const l=n[s.getMonth()],c=`${l.charAt(0).toUpperCase()}${l.slice(1,3)} ${s.getFullYear()}`;r.add(`${c}|${l}-${s.getFullYear()}`)}}catch{}}),Array.from(r).map(i=>{const[s,l]=i.split("|"),c=e.filter(v=>Tv(ur(v.createdAt),l)),f=c.length,h=c.filter(v=>v.handled==="Human").length,d=f>0?h/f*100:0;return{week:s,totalSessions:f,humanEscalations:h,escalationRate:d}}).sort((i,s)=>new Date(`1 ${i.week}`).getTime()-new Date(`1 ${s.week}`).getTime()).filter(i=>i.totalSessions>0)}else return _W(t).map(r=>{const a=e.filter(c=>{const f=ur(c.createdAt);return MW(f,r)}),i=a.length,s=a.filter(c=>c.handled==="Human").length,l=a.length>0?s/a.length*100:0;return{week:r.label,totalSessions:i,humanEscalations:s,escalationRate:l}})},cR=e=>{const t=e.filter(r=>r.handled==="Human"),n=new Map;return t.forEach(r=>{if(r.issue&&r.issue.trim()!==""){n.has(r.issue)||n.set(r.issue,new Map);const a=n.get(r.issue),i=r.subType&&r.subType.trim()!==""?r.subType:"Other";a.has(i)||a.set(i,new Map);const s=a.get(i),l=r.product&&r.product.trim()!==""?r.product:"Unknown";s.set(l,(s.get(l)||0)+1)}}),Array.from(n.entries()).map(([r,a])=>{const i=Array.from(a.entries()).map(([l,c])=>{const f=Array.from(c.entries()).map(([d,v])=>({product:d,count:v})).sort((d,v)=>v.count-d.count),h=f.reduce((d,v)=>d+v.count,0);return{subType:l,count:h,products:f}}).sort((l,c)=>c.count-l.count),s=i.reduce((l,c)=>l+c.count,0);return{issue:r,count:s,subIssues:i}}).sort((r,a)=>a.count-r.count)},fR=(e,t="analytics-export.csv")=>{const r=[["Channel","Created at","Product","Issue","Sub Type","Handled"].join(","),...e.map(l=>[l.channel,l.createdAt,l.product||"",l.issue||"",l.subType||"",l.handled].join(","))].join(`
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a"),s=URL.createObjectURL(a);i.setAttribute("href",s),i.setAttribute("download",t),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)};function dR({metrics:e}){const t=r=>r<20?"text-green-600":r<40?"text-yellow-600":"text-red-600",n=r=>r<20?"bg-green-50":r<40?"bg-yellow-50":"bg-red-50";return M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[M.jsx(zn,{children:M.jsx(Un,{className:"p-6",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sessions"}),M.jsx("p",{className:"text-3xl font-bold mt-2",children:e.totalSessions.toLocaleString()})]}),M.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:M.jsx(tE,{className:"w-6 h-6 text-blue-600"})})]})})}),M.jsx(zn,{children:M.jsx(Un,{className:"p-6",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Bot Handled Sessions"}),M.jsx("p",{className:"text-3xl font-bold mt-2",children:e.botHandled.toLocaleString()}),M.jsxs("p",{className:"text-sm text-blue-600 mt-1",children:[e.botPercentage.toFixed(1),"%"]})]}),M.jsx("div",{className:"p-3 bg-blue-50 rounded-full",children:M.jsx(qN,{className:"w-6 h-6 text-blue-600"})})]})})}),M.jsx(zn,{children:M.jsx(Un,{className:"p-6",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Human Handled Sessions"}),M.jsx("p",{className:"text-3xl font-bold mt-2",children:e.humanHandled.toLocaleString()}),M.jsxs("p",{className:"text-sm text-orange-600 mt-1",children:[e.humanPercentage.toFixed(1),"%"]})]}),M.jsx("div",{className:"p-3 bg-orange-50 rounded-full",children:M.jsx(oE,{className:"w-6 h-6 text-orange-600"})})]})})}),M.jsx(zn,{className:n(e.escalationRate),children:M.jsx(Un,{className:"p-6",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Escalation Rate"}),M.jsxs("p",{className:`text-3xl font-bold mt-2 ${t(e.escalationRate)}`,children:[e.escalationRate.toFixed(1),"%"]}),M.jsx("p",{className:"text-xs text-gray-500 mt-1",children:e.escalationRate<20?"Excellent":e.escalationRate<40?"Good":"Needs Attention"})]}),M.jsx("div",{className:`p-3 rounded-full ${t(e.escalationRate).replace("text","bg").replace("600","100")}`,children:M.jsx(rE,{className:`w-6 h-6 ${t(e.escalationRate)}`})})]})})})]})}var Pf,NI;function yn(){if(NI)return Pf;NI=1;var e=Array.isArray;return Pf=e,Pf}var Sf,EI;function CW(){if(EI)return Sf;EI=1;var e=typeof pp=="object"&&pp&&pp.Object===Object&&pp;return Sf=e,Sf}var Wf,TI;function Wr(){if(TI)return Wf;TI=1;var e=CW(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=e||t||Function("return this")();return Wf=n,Wf}var Af,RI;function Ks(){if(RI)return Af;RI=1;var e=Wr(),t=e.Symbol;return Af=t,Af}var _f,HI;function hR(){if(HI)return _f;HI=1;var e=Ks(),t=Object.prototype,n=t.hasOwnProperty,r=t.toString,a=e?e.toStringTag:void 0;function i(s){var l=n.call(s,a),c=s[a];try{s[a]=void 0;var f=!0}catch{}var h=r.call(s);return f&&(l?s[a]=c:delete s[a]),h}return _f=i,_f}var Mf,jI;function mR(){if(jI)return Mf;jI=1;var e=Object.prototype,t=e.toString;function n(r){return t.call(r)}return Mf=n,Mf}var Of,DI;function Yr(){if(DI)return Of;DI=1;var e=Ks(),t=hR(),n=mR(),r="[object Null]",a="[object Undefined]",i=e?e.toStringTag:void 0;function s(l){return l==null?l===void 0?a:r:i&&i in Object(l)?t(l):n(l)}return Of=s,Of}var Cf,$I;function Xr(){if($I)return Cf;$I=1;function e(t){return t!=null&&typeof t=="object"}return Cf=e,Cf}var kf,LI;function Ki(){if(LI)return kf;LI=1;var e=Yr(),t=Xr(),n="[object Symbol]";function r(a){return typeof a=="symbol"||t(a)&&e(a)==n}return kf=r,kf}var Nf,FI;function yy(){if(FI)return Nf;FI=1;var e=yn(),t=Ki(),n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function a(i,s){if(e(i))return!1;var l=typeof i;return l=="number"||l=="symbol"||l=="boolean"||i==null||t(i)?!0:r.test(i)||!n.test(i)||s!=null&&i in Object(s)}return Nf=a,Nf}var Ef,qI;function ja(){if(qI)return Ef;qI=1;function e(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return Ef=e,Ef}var Tf,zI;function by(){if(zI)return Tf;zI=1;var e=Yr(),t=ja(),n="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",i="[object Proxy]";function s(l){if(!t(l))return!1;var c=e(l);return c==r||c==a||c==n||c==i}return Tf=s,Tf}var Rf,UI;function vR(){if(UI)return Rf;UI=1;var e=Wr(),t=e["__core-js_shared__"];return Rf=t,Rf}var Hf,VI;function gR(){if(VI)return Hf;VI=1;var e=vR(),t=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function n(r){return!!t&&t in r}return Hf=n,Hf}var jf,GI;function kW(){if(GI)return jf;GI=1;var e=Function.prototype,t=e.toString;function n(r){if(r!=null){try{return t.call(r)}catch{}try{return r+""}catch{}}return""}return jf=n,jf}var Df,KI;function yR(){if(KI)return Df;KI=1;var e=by(),t=gR(),n=ja(),r=kW(),a=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,s=Function.prototype,l=Object.prototype,c=s.toString,f=l.hasOwnProperty,h=RegExp("^"+c.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(v){if(!n(v)||t(v))return!1;var y=e(v)?h:i;return y.test(r(v))}return Df=d,Df}var $f,QI;function bR(){if(QI)return $f;QI=1;function e(t,n){return t==null?void 0:t[n]}return $f=e,$f}var Lf,YI;function xo(){if(YI)return Lf;YI=1;var e=yR(),t=bR();function n(r,a){var i=t(r,a);return e(i)?i:void 0}return Lf=n,Lf}var Ff,XI;function Lc(){if(XI)return Ff;XI=1;var e=xo(),t=e(Object,"create");return Ff=t,Ff}var qf,ZI;function IR(){if(ZI)return qf;ZI=1;var e=Lc();function t(){this.__data__=e?e(null):{},this.size=0}return qf=t,qf}var zf,JI;function BR(){if(JI)return zf;JI=1;function e(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}return zf=e,zf}var Uf,eB;function xR(){if(eB)return Uf;eB=1;var e=Lc(),t="__lodash_hash_undefined__",n=Object.prototype,r=n.hasOwnProperty;function a(i){var s=this.__data__;if(e){var l=s[i];return l===t?void 0:l}return r.call(s,i)?s[i]:void 0}return Uf=a,Uf}var Vf,tB;function wR(){if(tB)return Vf;tB=1;var e=Lc(),t=Object.prototype,n=t.hasOwnProperty;function r(a){var i=this.__data__;return e?i[a]!==void 0:n.call(i,a)}return Vf=r,Vf}var Gf,nB;function PR(){if(nB)return Gf;nB=1;var e=Lc(),t="__lodash_hash_undefined__";function n(r,a){var i=this.__data__;return this.size+=this.has(r)?0:1,i[r]=e&&a===void 0?t:a,this}return Gf=n,Gf}var Kf,rB;function SR(){if(rB)return Kf;rB=1;var e=IR(),t=BR(),n=xR(),r=wR(),a=PR();function i(s){var l=-1,c=s==null?0:s.length;for(this.clear();++l<c;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,Kf=i,Kf}var Qf,aB;function WR(){if(aB)return Qf;aB=1;function e(){this.__data__=[],this.size=0}return Qf=e,Qf}var Yf,oB;function Iy(){if(oB)return Yf;oB=1;function e(t,n){return t===n||t!==t&&n!==n}return Yf=e,Yf}var Xf,iB;function Fc(){if(iB)return Xf;iB=1;var e=Iy();function t(n,r){for(var a=n.length;a--;)if(e(n[a][0],r))return a;return-1}return Xf=t,Xf}var Zf,uB;function AR(){if(uB)return Zf;uB=1;var e=Fc(),t=Array.prototype,n=t.splice;function r(a){var i=this.__data__,s=e(i,a);if(s<0)return!1;var l=i.length-1;return s==l?i.pop():n.call(i,s,1),--this.size,!0}return Zf=r,Zf}var Jf,sB;function _R(){if(sB)return Jf;sB=1;var e=Fc();function t(n){var r=this.__data__,a=e(r,n);return a<0?void 0:r[a][1]}return Jf=t,Jf}var ed,lB;function MR(){if(lB)return ed;lB=1;var e=Fc();function t(n){return e(this.__data__,n)>-1}return ed=t,ed}var td,pB;function OR(){if(pB)return td;pB=1;var e=Fc();function t(n,r){var a=this.__data__,i=e(a,n);return i<0?(++this.size,a.push([n,r])):a[i][1]=r,this}return td=t,td}var nd,cB;function qc(){if(cB)return nd;cB=1;var e=WR(),t=AR(),n=_R(),r=MR(),a=OR();function i(s){var l=-1,c=s==null?0:s.length;for(this.clear();++l<c;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,nd=i,nd}var rd,fB;function By(){if(fB)return rd;fB=1;var e=xo(),t=Wr(),n=e(t,"Map");return rd=n,rd}var ad,dB;function CR(){if(dB)return ad;dB=1;var e=SR(),t=qc(),n=By();function r(){this.size=0,this.__data__={hash:new e,map:new(n||t),string:new e}}return ad=r,ad}var od,hB;function kR(){if(hB)return od;hB=1;function e(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}return od=e,od}var id,mB;function zc(){if(mB)return id;mB=1;var e=kR();function t(n,r){var a=n.__data__;return e(r)?a[typeof r=="string"?"string":"hash"]:a.map}return id=t,id}var ud,vB;function NR(){if(vB)return ud;vB=1;var e=zc();function t(n){var r=e(this,n).delete(n);return this.size-=r?1:0,r}return ud=t,ud}var sd,gB;function ER(){if(gB)return sd;gB=1;var e=zc();function t(n){return e(this,n).get(n)}return sd=t,sd}var ld,yB;function TR(){if(yB)return ld;yB=1;var e=zc();function t(n){return e(this,n).has(n)}return ld=t,ld}var pd,bB;function RR(){if(bB)return pd;bB=1;var e=zc();function t(n,r){var a=e(this,n),i=a.size;return a.set(n,r),this.size+=a.size==i?0:1,this}return pd=t,pd}var cd,IB;function xy(){if(IB)return cd;IB=1;var e=CR(),t=NR(),n=ER(),r=TR(),a=RR();function i(s){var l=-1,c=s==null?0:s.length;for(this.clear();++l<c;){var f=s[l];this.set(f[0],f[1])}}return i.prototype.clear=e,i.prototype.delete=t,i.prototype.get=n,i.prototype.has=r,i.prototype.set=a,cd=i,cd}var fd,BB;function NW(){if(BB)return fd;BB=1;var e=xy(),t="Expected a function";function n(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new TypeError(t);var i=function(){var s=arguments,l=a?a.apply(this,s):s[0],c=i.cache;if(c.has(l))return c.get(l);var f=r.apply(this,s);return i.cache=c.set(l,f)||c,f};return i.cache=new(n.Cache||e),i}return n.Cache=e,fd=n,fd}var dd,xB;function HR(){if(xB)return dd;xB=1;var e=NW(),t=500;function n(r){var a=e(r,function(s){return i.size===t&&i.clear(),s}),i=a.cache;return a}return dd=n,dd}var hd,wB;function jR(){if(wB)return hd;wB=1;var e=HR(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g,r=e(function(a){var i=[];return a.charCodeAt(0)===46&&i.push(""),a.replace(t,function(s,l,c,f){i.push(c?f.replace(n,"$1"):l||s)}),i});return hd=r,hd}var md,PB;function wy(){if(PB)return md;PB=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,i=Array(a);++r<a;)i[r]=n(t[r],r,t);return i}return md=e,md}var vd,SB;function DR(){if(SB)return vd;SB=1;var e=Ks(),t=wy(),n=yn(),r=Ki(),a=e?e.prototype:void 0,i=a?a.toString:void 0;function s(l){if(typeof l=="string")return l;if(n(l))return t(l,s)+"";if(r(l))return i?i.call(l):"";var c=l+"";return c=="0"&&1/l==-1/0?"-0":c}return vd=s,vd}var gd,WB;function EW(){if(WB)return gd;WB=1;var e=DR();function t(n){return n==null?"":e(n)}return gd=t,gd}var yd,AB;function TW(){if(AB)return yd;AB=1;var e=yn(),t=yy(),n=jR(),r=EW();function a(i,s){return e(i)?i:t(i,s)?[i]:n(r(i))}return yd=a,yd}var bd,_B;function Uc(){if(_B)return bd;_B=1;var e=Ki();function t(n){if(typeof n=="string"||e(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}return bd=t,bd}var Id,MB;function Py(){if(MB)return Id;MB=1;var e=TW(),t=Uc();function n(r,a){a=e(a,r);for(var i=0,s=a.length;r!=null&&i<s;)r=r[t(a[i++])];return i&&i==s?r:void 0}return Id=n,Id}var Bd,OB;function RW(){if(OB)return Bd;OB=1;var e=Py();function t(n,r,a){var i=n==null?void 0:e(n,r);return i===void 0?a:i}return Bd=t,Bd}var $R=RW();const Mn=Xe($R);var xd,CB;function LR(){if(CB)return xd;CB=1;function e(t){return t==null}return xd=e,xd}var FR=LR();const Ne=Xe(FR);var wd,kB;function qR(){if(kB)return wd;kB=1;var e=Yr(),t=yn(),n=Xr(),r="[object String]";function a(i){return typeof i=="string"||!t(i)&&n(i)&&e(i)==r}return wd=a,wd}var zR=qR();const Qs=Xe(zR);var UR=by();const ke=Xe(UR);var VR=ja();const Qi=Xe(VR);var Pd={exports:{}},Qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NB;function GR(){if(NB)return Qe;NB=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),B;B=Symbol.for("react.module.reference");function I(b){if(typeof b=="object"&&b!==null){var S=b.$$typeof;switch(S){case e:switch(b=b.type,b){case n:case a:case r:case f:case h:return b;default:switch(b=b&&b.$$typeof,b){case l:case s:case c:case v:case d:case i:return b;default:return S}}case t:return S}}}return Qe.ContextConsumer=s,Qe.ContextProvider=i,Qe.Element=e,Qe.ForwardRef=c,Qe.Fragment=n,Qe.Lazy=v,Qe.Memo=d,Qe.Portal=t,Qe.Profiler=a,Qe.StrictMode=r,Qe.Suspense=f,Qe.SuspenseList=h,Qe.isAsyncMode=function(){return!1},Qe.isConcurrentMode=function(){return!1},Qe.isContextConsumer=function(b){return I(b)===s},Qe.isContextProvider=function(b){return I(b)===i},Qe.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===e},Qe.isForwardRef=function(b){return I(b)===c},Qe.isFragment=function(b){return I(b)===n},Qe.isLazy=function(b){return I(b)===v},Qe.isMemo=function(b){return I(b)===d},Qe.isPortal=function(b){return I(b)===t},Qe.isProfiler=function(b){return I(b)===a},Qe.isStrictMode=function(b){return I(b)===r},Qe.isSuspense=function(b){return I(b)===f},Qe.isSuspenseList=function(b){return I(b)===h},Qe.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===n||b===a||b===r||b===f||b===h||b===y||typeof b=="object"&&b!==null&&(b.$$typeof===v||b.$$typeof===d||b.$$typeof===i||b.$$typeof===s||b.$$typeof===c||b.$$typeof===B||b.getModuleId!==void 0)},Qe.typeOf=I,Qe}var EB;function KR(){return EB||(EB=1,Pd.exports=GR()),Pd.exports}var QR=KR(),Sd,TB;function HW(){if(TB)return Sd;TB=1;var e=Yr(),t=Xr(),n="[object Number]";function r(a){return typeof a=="number"||t(a)&&e(a)==n}return Sd=r,Sd}var Wd,RB;function YR(){if(RB)return Wd;RB=1;var e=HW();function t(n){return e(n)&&n!=+n}return Wd=t,Wd}var XR=YR();const Yi=Xe(XR);var ZR=HW();const JR=Xe(ZR);var an=function(t){return t===0?0:t>0?1:-1},po=function(t){return Qs(t)&&t.indexOf("%")===t.length-1},le=function(t){return JR(t)&&!Yi(t)},Rt=function(t){return le(t)||Qs(t)},eH=0,Da=function(t){var n=++eH;return"".concat(t||"").concat(n)},on=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!le(t)&&!Qs(t))return r;var i;if(po(t)){var s=t.indexOf("%");i=n*parseFloat(t.slice(0,s))/100}else i=+t;return Yi(i)&&(i=r),a&&i>n&&(i=n),i},Wa=function(t){if(!t)return null;var n=Object.keys(t);return n&&n.length?t[n[0]]:null},tH=function(t){if(!Array.isArray(t))return!1;for(var n=t.length,r={},a=0;a<n;a++)if(!r[t[a]])r[t[a]]=!0;else return!0;return!1},ht=function(t,n){return le(t)&&le(n)?function(r){return t+r*(n-t)}:function(){return n}};function Ep(e,t,n){return!e||!e.length?null:e.find(function(r){return r&&(typeof t=="function"?t(r):Mn(r,t))===n})}var nH=function(t){if(!t||!t.length)return null;for(var n=t.length,r=0,a=0,i=0,s=0,l=1/0,c=-1/0,f=0,h=0,d=0;d<n;d++)f=t[d].cx||0,h=t[d].cy||0,r+=f,a+=h,i+=f*h,s+=f*f,l=Math.min(l,f),c=Math.max(c,f);var v=n*s!==r*r?(n*i-r*a)/(n*s-r*r):0;return{xmin:l,xmax:c,a:v,b:(a-v*r)/n}};function pi(e,t){for(var n in e)if({}.hasOwnProperty.call(e,n)&&(!{}.hasOwnProperty.call(t,n)||e[n]!==t[n]))return!1;for(var r in t)if({}.hasOwnProperty.call(t,r)&&!{}.hasOwnProperty.call(e,r))return!1;return!0}function Dv(e){"@babel/helpers - typeof";return Dv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dv(e)}var rH=["viewBox","children"],aH=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],HB=["points","pathLength"],Ad={svg:rH,polygon:HB,polyline:HB},Sy=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Tp=function(t,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var r=t;if(Y.isValidElement(t)&&(r=t.props),!Qi(r))return null;var a={};return Object.keys(r).forEach(function(i){Sy.includes(i)&&(a[i]=n||function(s){return r[i](r,s)})}),a},oH=function(t,n,r){return function(a){return t(n,r,a),null}},Ea=function(t,n,r){if(!Qi(t)||Dv(t)!=="object")return null;var a=null;return Object.keys(t).forEach(function(i){var s=t[i];Sy.includes(i)&&typeof s=="function"&&(a||(a={}),a[i]=oH(s,n,r))}),a},iH=["children"],uH=["children"];function jB(e,t){if(e==null)return{};var n=sH(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function $v(e){"@babel/helpers - typeof";return $v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$v(e)}var DB={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},Ur=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},$B=null,_d=null,Wy=function e(t){if(t===$B&&Array.isArray(_d))return _d;var n=[];return Y.Children.forEach(t,function(r){Ne(r)||(QR.isFragment(r)?n=n.concat(e(r.props.children)):n.push(r))}),_d=n,$B=t,n};function sn(e,t){var n=[],r=[];return Array.isArray(t)?r=t.map(function(a){return Ur(a)}):r=[Ur(t)],Wy(e).forEach(function(a){var i=Mn(a,"type.displayName")||Mn(a,"type.name");r.indexOf(i)!==-1&&n.push(a)}),n}function Sn(e,t){var n=sn(e,t);return n&&n[0]}var LB=function(t){if(!t||!t.props)return!1;var n=t.props,r=n.width,a=n.height;return!(!le(r)||r<=0||!le(a)||a<=0)},lH=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],pH=function(t){return t&&t.type&&Qs(t.type)&&lH.indexOf(t.type)>=0},jW=function(t){return t&&$v(t)==="object"&&"clipDot"in t},cH=function(t,n,r,a){var i,s=(i=Ad==null?void 0:Ad[a])!==null&&i!==void 0?i:[];return n.startsWith("data-")||!ke(t)&&(a&&s.includes(n)||aH.includes(n))||r&&Sy.includes(n)},We=function(t,n,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var a=t;if(Y.isValidElement(t)&&(a=t.props),!Qi(a))return null;var i={};return Object.keys(a).forEach(function(s){var l;cH((l=a)===null||l===void 0?void 0:l[s],s,n,r)&&(i[s]=a[s])}),i},Lv=function e(t,n){if(t===n)return!0;var r=Y.Children.count(t);if(r!==Y.Children.count(n))return!1;if(r===0)return!0;if(r===1)return FB(Array.isArray(t)?t[0]:t,Array.isArray(n)?n[0]:n);for(var a=0;a<r;a++){var i=t[a],s=n[a];if(Array.isArray(i)||Array.isArray(s)){if(!e(i,s))return!1}else if(!FB(i,s))return!1}return!0},FB=function(t,n){if(Ne(t)&&Ne(n))return!0;if(!Ne(t)&&!Ne(n)){var r=t.props||{},a=r.children,i=jB(r,iH),s=n.props||{},l=s.children,c=jB(s,uH);return a&&l?pi(i,c)&&Lv(a,l):!a&&!l?pi(i,c):!1}return!1},qB=function(t,n){var r=[],a={};return Wy(t).forEach(function(i,s){if(pH(i))r.push(i);else if(i){var l=Ur(i.type),c=n[l]||{},f=c.handler,h=c.once;if(f&&(!h||!a[l])){var d=f(i,l,s);r.push(d),a[l]=!0}}}),r},fH=function(t){var n=t&&t.type;return n&&DB[n]?DB[n]:null},dH=function(t,n){return Wy(n).indexOf(t)},hH=["children","width","height","viewBox","className","style","title","desc"];function Fv(){return Fv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fv.apply(this,arguments)}function mH(e,t){if(e==null)return{};var n=vH(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function qv(e){var t=e.children,n=e.width,r=e.height,a=e.viewBox,i=e.className,s=e.style,l=e.title,c=e.desc,f=mH(e,hH),h=a||{width:n,height:r,x:0,y:0},d=He("recharts-surface",i);return H.createElement("svg",Fv({},We(f,!0,"svg"),{className:d,width:n,height:r,style:s,viewBox:"".concat(h.x," ").concat(h.y," ").concat(h.width," ").concat(h.height)}),H.createElement("title",null,l),H.createElement("desc",null,c),t)}var gH=["children","className"];function zv(){return zv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zv.apply(this,arguments)}function yH(e,t){if(e==null)return{};var n=bH(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function bH(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var De=H.forwardRef(function(e,t){var n=e.children,r=e.className,a=yH(e,gH),i=He("recharts-layer",r);return H.createElement("g",zv({className:i},We(a,!0),{ref:t}),n)}),lr=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i]},Md,zB;function IH(){if(zB)return Md;zB=1;function e(t,n,r){var a=-1,i=t.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var s=Array(i);++a<i;)s[a]=t[a+n];return s}return Md=e,Md}var Od,UB;function BH(){if(UB)return Od;UB=1;var e=IH();function t(n,r,a){var i=n.length;return a=a===void 0?i:a,!r&&a>=i?n:e(n,r,a)}return Od=t,Od}var Cd,VB;function DW(){if(VB)return Cd;VB=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,i="\\ufe0e\\ufe0f",s="\\u200d",l=RegExp("["+s+e+a+i+"]");function c(f){return l.test(f)}return Cd=c,Cd}var kd,GB;function xH(){if(GB)return kd;GB=1;function e(t){return t.split("")}return kd=e,kd}var Nd,KB;function wH(){if(KB)return Nd;KB=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",a=t+n+r,i="\\ufe0e\\ufe0f",s="["+e+"]",l="["+a+"]",c="\\ud83c[\\udffb-\\udfff]",f="(?:"+l+"|"+c+")",h="[^"+e+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",y="\\u200d",B=f+"?",I="["+i+"]?",b="(?:"+y+"(?:"+[h,d,v].join("|")+")"+I+B+")*",S=I+B+b,W="(?:"+[h+l+"?",l,d,v,s].join("|")+")",A=RegExp(c+"(?="+c+")|"+W+S,"g");function O(w){return w.match(A)||[]}return Nd=O,Nd}var Ed,QB;function PH(){if(QB)return Ed;QB=1;var e=xH(),t=DW(),n=wH();function r(a){return t(a)?n(a):e(a)}return Ed=r,Ed}var Td,YB;function SH(){if(YB)return Td;YB=1;var e=BH(),t=DW(),n=PH(),r=EW();function a(i){return function(s){s=r(s);var l=t(s)?n(s):void 0,c=l?l[0]:s.charAt(0),f=l?e(l,1).join(""):s.slice(1);return c[i]()+f}}return Td=a,Td}var Rd,XB;function WH(){if(XB)return Rd;XB=1;var e=SH(),t=e("toUpperCase");return Rd=t,Rd}var AH=WH();const Vc=Xe(AH);function at(e){return function(){return e}}const $W=Math.cos,Rp=Math.sin,cr=Math.sqrt,Hp=Math.PI,Gc=2*Hp,Uv=Math.PI,Vv=2*Uv,uo=1e-6,_H=Vv-uo;function LW(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function MH(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return LW;const n=10**t;return function(r){this._+=r[0];for(let a=1,i=r.length;a<i;++a)this._+=Math.round(arguments[a]*n)/n+r[a]}}class OH{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?LW:MH(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,a){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+a}`}bezierCurveTo(t,n,r,a,i,s){this._append`C${+t},${+n},${+r},${+a},${this._x1=+i},${this._y1=+s}`}arcTo(t,n,r,a,i){if(t=+t,n=+n,r=+r,a=+a,i=+i,i<0)throw new Error(`negative radius: ${i}`);let s=this._x1,l=this._y1,c=r-t,f=a-n,h=s-t,d=l-n,v=h*h+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(v>uo)if(!(Math.abs(d*c-f*h)>uo)||!i)this._append`L${this._x1=t},${this._y1=n}`;else{let y=r-s,B=a-l,I=c*c+f*f,b=y*y+B*B,S=Math.sqrt(I),W=Math.sqrt(v),A=i*Math.tan((Uv-Math.acos((I+v-b)/(2*S*W)))/2),O=A/W,w=A/S;Math.abs(O-1)>uo&&this._append`L${t+O*h},${n+O*d}`,this._append`A${i},${i},0,0,${+(d*y>h*B)},${this._x1=t+w*c},${this._y1=n+w*f}`}}arc(t,n,r,a,i,s){if(t=+t,n=+n,r=+r,s=!!s,r<0)throw new Error(`negative radius: ${r}`);let l=r*Math.cos(a),c=r*Math.sin(a),f=t+l,h=n+c,d=1^s,v=s?a-i:i-a;this._x1===null?this._append`M${f},${h}`:(Math.abs(this._x1-f)>uo||Math.abs(this._y1-h)>uo)&&this._append`L${f},${h}`,r&&(v<0&&(v=v%Vv+Vv),v>_H?this._append`A${r},${r},0,1,${d},${t-l},${n-c}A${r},${r},0,1,${d},${this._x1=f},${this._y1=h}`:v>uo&&this._append`A${r},${r},0,${+(v>=Uv)},${d},${this._x1=t+r*Math.cos(i)},${this._y1=n+r*Math.sin(i)}`)}rect(t,n,r,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+a}h${-r}Z`}toString(){return this._}}function Ay(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new OH(t)}function _y(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function FW(e){this._context=e}FW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function Kc(e){return new FW(e)}function qW(e){return e[0]}function zW(e){return e[1]}function UW(e,t){var n=at(!0),r=null,a=Kc,i=null,s=Ay(l);e=typeof e=="function"?e:e===void 0?qW:at(e),t=typeof t=="function"?t:t===void 0?zW:at(t);function l(c){var f,h=(c=_y(c)).length,d,v=!1,y;for(r==null&&(i=a(y=s())),f=0;f<=h;++f)!(f<h&&n(d=c[f],f,c))===v&&((v=!v)?i.lineStart():i.lineEnd()),v&&i.point(+e(d,f,c),+t(d,f,c));if(y)return i=null,y+""||null}return l.x=function(c){return arguments.length?(e=typeof c=="function"?c:at(+c),l):e},l.y=function(c){return arguments.length?(t=typeof c=="function"?c:at(+c),l):t},l.defined=function(c){return arguments.length?(n=typeof c=="function"?c:at(!!c),l):n},l.curve=function(c){return arguments.length?(a=c,r!=null&&(i=a(r)),l):a},l.context=function(c){return arguments.length?(c==null?r=i=null:i=a(r=c),l):r},l}function mp(e,t,n){var r=null,a=at(!0),i=null,s=Kc,l=null,c=Ay(f);e=typeof e=="function"?e:e===void 0?qW:at(+e),t=typeof t=="function"?t:at(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?zW:at(+n);function f(d){var v,y,B,I=(d=_y(d)).length,b,S=!1,W,A=new Array(I),O=new Array(I);for(i==null&&(l=s(W=c())),v=0;v<=I;++v){if(!(v<I&&a(b=d[v],v,d))===S)if(S=!S)y=v,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),B=v-1;B>=y;--B)l.point(A[B],O[B]);l.lineEnd(),l.areaEnd()}S&&(A[v]=+e(b,v,d),O[v]=+t(b,v,d),l.point(r?+r(b,v,d):A[v],n?+n(b,v,d):O[v]))}if(W)return l=null,W+""||null}function h(){return UW().defined(a).curve(s).context(i)}return f.x=function(d){return arguments.length?(e=typeof d=="function"?d:at(+d),r=null,f):e},f.x0=function(d){return arguments.length?(e=typeof d=="function"?d:at(+d),f):e},f.x1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:at(+d),f):r},f.y=function(d){return arguments.length?(t=typeof d=="function"?d:at(+d),n=null,f):t},f.y0=function(d){return arguments.length?(t=typeof d=="function"?d:at(+d),f):t},f.y1=function(d){return arguments.length?(n=d==null?null:typeof d=="function"?d:at(+d),f):n},f.lineX0=f.lineY0=function(){return h().x(e).y(t)},f.lineY1=function(){return h().x(e).y(n)},f.lineX1=function(){return h().x(r).y(t)},f.defined=function(d){return arguments.length?(a=typeof d=="function"?d:at(!!d),f):a},f.curve=function(d){return arguments.length?(s=d,i!=null&&(l=s(i)),f):s},f.context=function(d){return arguments.length?(d==null?i=l=null:l=s(i=d),f):i},f}class VW{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function CH(e){return new VW(e,!0)}function kH(e){return new VW(e,!1)}const My={draw(e,t){const n=cr(t/Hp);e.moveTo(n,0),e.arc(0,0,n,0,Gc)}},NH={draw(e,t){const n=cr(t/5)/2;e.moveTo(-3*n,-n),e.lineTo(-n,-n),e.lineTo(-n,-3*n),e.lineTo(n,-3*n),e.lineTo(n,-n),e.lineTo(3*n,-n),e.lineTo(3*n,n),e.lineTo(n,n),e.lineTo(n,3*n),e.lineTo(-n,3*n),e.lineTo(-n,n),e.lineTo(-3*n,n),e.closePath()}},GW=cr(1/3),EH=GW*2,TH={draw(e,t){const n=cr(t/EH),r=n*GW;e.moveTo(0,-n),e.lineTo(r,0),e.lineTo(0,n),e.lineTo(-r,0),e.closePath()}},RH={draw(e,t){const n=cr(t),r=-n/2;e.rect(r,r,n,n)}},HH=.8908130915292852,KW=Rp(Hp/10)/Rp(7*Hp/10),jH=Rp(Gc/10)*KW,DH=-$W(Gc/10)*KW,$H={draw(e,t){const n=cr(t*HH),r=jH*n,a=DH*n;e.moveTo(0,-n),e.lineTo(r,a);for(let i=1;i<5;++i){const s=Gc*i/5,l=$W(s),c=Rp(s);e.lineTo(c*n,-l*n),e.lineTo(l*r-c*a,c*r+l*a)}e.closePath()}},Hd=cr(3),LH={draw(e,t){const n=-cr(t/(Hd*3));e.moveTo(0,n*2),e.lineTo(-Hd*n,-n),e.lineTo(Hd*n,-n),e.closePath()}},Dn=-.5,$n=cr(3)/2,Gv=1/cr(12),FH=(Gv/2+1)*3,qH={draw(e,t){const n=cr(t/FH),r=n/2,a=n*Gv,i=r,s=n*Gv+n,l=-i,c=s;e.moveTo(r,a),e.lineTo(i,s),e.lineTo(l,c),e.lineTo(Dn*r-$n*a,$n*r+Dn*a),e.lineTo(Dn*i-$n*s,$n*i+Dn*s),e.lineTo(Dn*l-$n*c,$n*l+Dn*c),e.lineTo(Dn*r+$n*a,Dn*a-$n*r),e.lineTo(Dn*i+$n*s,Dn*s-$n*i),e.lineTo(Dn*l+$n*c,Dn*c-$n*l),e.closePath()}};function zH(e,t){let n=null,r=Ay(a);e=typeof e=="function"?e:at(e||My),t=typeof t=="function"?t:at(t===void 0?64:+t);function a(){let i;if(n||(n=i=r()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),i)return n=null,i+""||null}return a.type=function(i){return arguments.length?(e=typeof i=="function"?i:at(i),a):e},a.size=function(i){return arguments.length?(t=typeof i=="function"?i:at(+i),a):t},a.context=function(i){return arguments.length?(n=i??null,a):n},a}function jp(){}function Dp(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function QW(e){this._context=e}QW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Dp(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Dp(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function UH(e){return new QW(e)}function YW(e){this._context=e}YW.prototype={areaStart:jp,areaEnd:jp,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Dp(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function VH(e){return new YW(e)}function XW(e){this._context=e}XW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:Dp(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function GH(e){return new XW(e)}function ZW(e){this._context=e}ZW.prototype={areaStart:jp,areaEnd:jp,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function KH(e){return new ZW(e)}function ZB(e){return e<0?-1:1}function JB(e,t,n){var r=e._x1-e._x0,a=t-e._x1,i=(e._y1-e._y0)/(r||a<0&&-0),s=(n-e._y1)/(a||r<0&&-0),l=(i*a+s*r)/(r+a);return(ZB(i)+ZB(s))*Math.min(Math.abs(i),Math.abs(s),.5*Math.abs(l))||0}function ex(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function jd(e,t,n){var r=e._x0,a=e._y0,i=e._x1,s=e._y1,l=(i-r)/3;e._context.bezierCurveTo(r+l,a+l*t,i-l,s-l*n,i,s)}function $p(e){this._context=e}$p.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:jd(this,this._t0,ex(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,jd(this,ex(this,n=JB(this,e,t)),n);break;default:jd(this,this._t0,n=JB(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function JW(e){this._context=new eA(e)}(JW.prototype=Object.create($p.prototype)).point=function(e,t){$p.prototype.point.call(this,t,e)};function eA(e){this._context=e}eA.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,a,i){this._context.bezierCurveTo(t,e,r,n,i,a)}};function QH(e){return new $p(e)}function YH(e){return new JW(e)}function tA(e){this._context=e}tA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=tx(e),a=tx(t),i=0,s=1;s<n;++i,++s)this._context.bezierCurveTo(r[0][i],a[0][i],r[1][i],a[1][i],e[s],t[s]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function tx(e){var t,n=e.length-1,r,a=new Array(n),i=new Array(n),s=new Array(n);for(a[0]=0,i[0]=2,s[0]=e[0]+2*e[1],t=1;t<n-1;++t)a[t]=1,i[t]=4,s[t]=4*e[t]+2*e[t+1];for(a[n-1]=2,i[n-1]=7,s[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=a[t]/i[t-1],i[t]-=r,s[t]-=r*s[t-1];for(a[n-1]=s[n-1]/i[n-1],t=n-2;t>=0;--t)a[t]=(s[t]-a[t+1])/i[t];for(i[n-1]=(e[n]+a[n-1])/2,t=0;t<n-1;++t)i[t]=2*e[t+1]-a[t+1];return[a,i]}function XH(e){return new tA(e)}function Qc(e,t){this._context=e,this._t=t}Qc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function ZH(e){return new Qc(e,.5)}function JH(e){return new Qc(e,0)}function ej(e){return new Qc(e,1)}function mi(e,t){if((s=e.length)>1)for(var n=1,r,a,i=e[t[0]],s,l=i.length;n<s;++n)for(a=i,i=e[t[n]],r=0;r<l;++r)i[r][1]+=i[r][0]=isNaN(a[r][1])?a[r][0]:a[r][1]}function Kv(e){for(var t=e.length,n=new Array(t);--t>=0;)n[t]=t;return n}function tj(e,t){return e[t]}function nj(e){const t=[];return t.key=e,t}function rj(){var e=at([]),t=Kv,n=mi,r=tj;function a(i){var s=Array.from(e.apply(this,arguments),nj),l,c=s.length,f=-1,h;for(const d of i)for(l=0,++f;l<c;++l)(s[l][f]=[0,+r(d,s[l].key,f,i)]).data=d;for(l=0,h=_y(t(s));l<c;++l)s[h[l]].index=l;return n(s,h),s}return a.keys=function(i){return arguments.length?(e=typeof i=="function"?i:at(Array.from(i)),a):e},a.value=function(i){return arguments.length?(r=typeof i=="function"?i:at(+i),a):r},a.order=function(i){return arguments.length?(t=i==null?Kv:typeof i=="function"?i:at(Array.from(i)),a):t},a.offset=function(i){return arguments.length?(n=i??mi,a):n},a}function aj(e,t){if((r=e.length)>0){for(var n,r,a=0,i=e[0].length,s;a<i;++a){for(s=n=0;n<r;++n)s+=e[n][a][1]||0;if(s)for(n=0;n<r;++n)e[n][a][1]/=s}mi(e,t)}}function oj(e,t){if((a=e.length)>0){for(var n=0,r=e[t[0]],a,i=r.length;n<i;++n){for(var s=0,l=0;s<a;++s)l+=e[s][n][1]||0;r[n][1]+=r[n][0]=-l/2}mi(e,t)}}function ij(e,t){if(!(!((s=e.length)>0)||!((i=(a=e[t[0]]).length)>0))){for(var n=0,r=1,a,i,s;r<i;++r){for(var l=0,c=0,f=0;l<s;++l){for(var h=e[t[l]],d=h[r][1]||0,v=h[r-1][1]||0,y=(d-v)/2,B=0;B<l;++B){var I=e[t[B]],b=I[r][1]||0,S=I[r-1][1]||0;y+=b-S}c+=d,f+=y*d}a[r-1][1]+=a[r-1][0]=n,c&&(n-=f/c)}a[r-1][1]+=a[r-1][0]=n,mi(e,t)}}function ds(e){"@babel/helpers - typeof";return ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ds(e)}var uj=["type","size","sizeType"];function Qv(){return Qv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qv.apply(this,arguments)}function nx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nx(Object(n),!0).forEach(function(r){sj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sj(e,t,n){return t=lj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lj(e){var t=pj(e,"string");return ds(t)=="symbol"?t:t+""}function pj(e,t){if(ds(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function cj(e,t){if(e==null)return{};var n=fj(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var nA={symbolCircle:My,symbolCross:NH,symbolDiamond:TH,symbolSquare:RH,symbolStar:$H,symbolTriangle:LH,symbolWye:qH},dj=Math.PI/180,hj=function(t){var n="symbol".concat(Vc(t));return nA[n]||My},mj=function(t,n,r){if(n==="area")return t;switch(r){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var a=18*dj;return 1.25*t*t*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},vj=function(t,n){nA["symbol".concat(Vc(t))]=n},Yc=function(t){var n=t.type,r=n===void 0?"circle":n,a=t.size,i=a===void 0?64:a,s=t.sizeType,l=s===void 0?"area":s,c=cj(t,uj),f=rx(rx({},c),{},{type:r,size:i,sizeType:l}),h=function(){var b=hj(r),S=zH().type(b).size(mj(i,l,r));return S()},d=f.className,v=f.cx,y=f.cy,B=We(f,!0);return v===+v&&y===+y&&i===+i?H.createElement("path",Qv({},B,{className:He("recharts-symbols",d),transform:"translate(".concat(v,", ").concat(y,")"),d:h()})):null};Yc.registerSymbol=vj;function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(e)}function Yv(){return Yv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yv.apply(this,arguments)}function ax(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function gj(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ax(Object(n),!0).forEach(function(r){hs(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ax(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yj(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bj(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,aA(r.key),r)}}function Ij(e,t,n){return t&&bj(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bj(e,t,n){return t=Lp(t),xj(e,rA()?Reflect.construct(t,n||[],Lp(e).constructor):t.apply(e,n))}function xj(e,t){if(t&&(vi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wj(e)}function wj(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rA=function(){return!!e})()}function Lp(e){return Lp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Lp(e)}function Pj(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Xv(e,t)}function Xv(e,t){return Xv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xv(e,t)}function hs(e,t,n){return t=aA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aA(e){var t=Sj(e,"string");return vi(t)=="symbol"?t:t+""}function Sj(e,t){if(vi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Ln=32,Oy=(function(e){function t(){return yj(this,t),Bj(this,t,arguments)}return Pj(t,e),Ij(t,[{key:"renderIcon",value:function(r){var a=this.props.inactiveColor,i=Ln/2,s=Ln/6,l=Ln/3,c=r.inactive?a:r.color;if(r.type==="plainline")return H.createElement("line",{strokeWidth:4,fill:"none",stroke:c,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:i,x2:Ln,y2:i,className:"recharts-legend-icon"});if(r.type==="line")return H.createElement("path",{strokeWidth:4,fill:"none",stroke:c,d:"M0,".concat(i,"h").concat(l,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(2*l,",").concat(i,`
            H`).concat(Ln,"M").concat(2*l,",").concat(i,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(l,",").concat(i),className:"recharts-legend-icon"});if(r.type==="rect")return H.createElement("path",{stroke:"none",fill:c,d:"M0,".concat(Ln/8,"h").concat(Ln,"v").concat(Ln*3/4,"h").concat(-Ln,"z"),className:"recharts-legend-icon"});if(H.isValidElement(r.legendIcon)){var f=gj({},r);return delete f.legendIcon,H.cloneElement(r.legendIcon,f)}return H.createElement(Yc,{fill:c,cx:i,cy:i,size:Ln,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,a=this.props,i=a.payload,s=a.iconSize,l=a.layout,c=a.formatter,f=a.inactiveColor,h={x:0,y:0,width:Ln,height:Ln},d={display:l==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return i.map(function(y,B){var I=y.formatter||c,b=He(hs(hs({"recharts-legend-item":!0},"legend-item-".concat(B),!0),"inactive",y.inactive));if(y.type==="none")return null;var S=ke(y.value)?null:y.value;lr(!ke(y.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var W=y.inactive?f:y.color;return H.createElement("li",Yv({className:b,style:d,key:"legend-item-".concat(B)},Ea(r.props,y,B)),H.createElement(qv,{width:s,height:s,viewBox:h,style:v},r.renderIcon(y)),H.createElement("span",{className:"recharts-legend-item-text",style:{color:W}},I?I(S,y,B):S))})}},{key:"render",value:function(){var r=this.props,a=r.payload,i=r.layout,s=r.align;if(!a||!a.length)return null;var l={padding:0,margin:0,textAlign:i==="horizontal"?s:"left"};return H.createElement("ul",{className:"recharts-default-legend",style:l},this.renderItems())}}])})(Y.PureComponent);hs(Oy,"displayName","Legend");hs(Oy,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var Dd,ox;function Wj(){if(ox)return Dd;ox=1;var e=qc();function t(){this.__data__=new e,this.size=0}return Dd=t,Dd}var $d,ix;function Aj(){if(ix)return $d;ix=1;function e(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r}return $d=e,$d}var Ld,ux;function _j(){if(ux)return Ld;ux=1;function e(t){return this.__data__.get(t)}return Ld=e,Ld}var Fd,sx;function Mj(){if(sx)return Fd;sx=1;function e(t){return this.__data__.has(t)}return Fd=e,Fd}var qd,lx;function Oj(){if(lx)return qd;lx=1;var e=qc(),t=By(),n=xy(),r=200;function a(i,s){var l=this.__data__;if(l instanceof e){var c=l.__data__;if(!t||c.length<r-1)return c.push([i,s]),this.size=++l.size,this;l=this.__data__=new n(c)}return l.set(i,s),this.size=l.size,this}return qd=a,qd}var zd,px;function oA(){if(px)return zd;px=1;var e=qc(),t=Wj(),n=Aj(),r=_j(),a=Mj(),i=Oj();function s(l){var c=this.__data__=new e(l);this.size=c.size}return s.prototype.clear=t,s.prototype.delete=n,s.prototype.get=r,s.prototype.has=a,s.prototype.set=i,zd=s,zd}var Ud,cx;function Cj(){if(cx)return Ud;cx=1;var e="__lodash_hash_undefined__";function t(n){return this.__data__.set(n,e),this}return Ud=t,Ud}var Vd,fx;function kj(){if(fx)return Vd;fx=1;function e(t){return this.__data__.has(t)}return Vd=e,Vd}var Gd,dx;function iA(){if(dx)return Gd;dx=1;var e=xy(),t=Cj(),n=kj();function r(a){var i=-1,s=a==null?0:a.length;for(this.__data__=new e;++i<s;)this.add(a[i])}return r.prototype.add=r.prototype.push=t,r.prototype.has=n,Gd=r,Gd}var Kd,hx;function uA(){if(hx)return Kd;hx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(n(t[r],r,t))return!0;return!1}return Kd=e,Kd}var Qd,mx;function sA(){if(mx)return Qd;mx=1;function e(t,n){return t.has(n)}return Qd=e,Qd}var Yd,vx;function lA(){if(vx)return Yd;vx=1;var e=iA(),t=uA(),n=sA(),r=1,a=2;function i(s,l,c,f,h,d){var v=c&r,y=s.length,B=l.length;if(y!=B&&!(v&&B>y))return!1;var I=d.get(s),b=d.get(l);if(I&&b)return I==l&&b==s;var S=-1,W=!0,A=c&a?new e:void 0;for(d.set(s,l),d.set(l,s);++S<y;){var O=s[S],w=l[S];if(f)var _=v?f(w,O,S,l,s,d):f(O,w,S,s,l,d);if(_!==void 0){if(_)continue;W=!1;break}if(A){if(!t(l,function(N,P){if(!n(A,P)&&(O===N||h(O,N,c,f,d)))return A.push(P)})){W=!1;break}}else if(!(O===w||h(O,w,c,f,d))){W=!1;break}}return d.delete(s),d.delete(l),W}return Yd=i,Yd}var Xd,gx;function Nj(){if(gx)return Xd;gx=1;var e=Wr(),t=e.Uint8Array;return Xd=t,Xd}var Zd,yx;function Ej(){if(yx)return Zd;yx=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a,i){r[++n]=[i,a]}),r}return Zd=e,Zd}var Jd,bx;function Cy(){if(bx)return Jd;bx=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(a){r[++n]=a}),r}return Jd=e,Jd}var eh,Ix;function Tj(){if(Ix)return eh;Ix=1;var e=Ks(),t=Nj(),n=Iy(),r=lA(),a=Ej(),i=Cy(),s=1,l=2,c="[object Boolean]",f="[object Date]",h="[object Error]",d="[object Map]",v="[object Number]",y="[object RegExp]",B="[object Set]",I="[object String]",b="[object Symbol]",S="[object ArrayBuffer]",W="[object DataView]",A=e?e.prototype:void 0,O=A?A.valueOf:void 0;function w(_,N,P,C,R,j,T){switch(P){case W:if(_.byteLength!=N.byteLength||_.byteOffset!=N.byteOffset)return!1;_=_.buffer,N=N.buffer;case S:return!(_.byteLength!=N.byteLength||!j(new t(_),new t(N)));case c:case f:case v:return n(+_,+N);case h:return _.name==N.name&&_.message==N.message;case y:case I:return _==N+"";case d:var q=a;case B:var L=C&s;if(q||(q=i),_.size!=N.size&&!L)return!1;var K=T.get(_);if(K)return K==N;C|=l,T.set(_,N);var U=r(q(_),q(N),C,R,j,T);return T.delete(_),U;case b:if(O)return O.call(_)==O.call(N)}return!1}return eh=w,eh}var th,Bx;function pA(){if(Bx)return th;Bx=1;function e(t,n){for(var r=-1,a=n.length,i=t.length;++r<a;)t[i+r]=n[r];return t}return th=e,th}var nh,xx;function Rj(){if(xx)return nh;xx=1;var e=pA(),t=yn();function n(r,a,i){var s=a(r);return t(r)?s:e(s,i(r))}return nh=n,nh}var rh,wx;function Hj(){if(wx)return rh;wx=1;function e(t,n){for(var r=-1,a=t==null?0:t.length,i=0,s=[];++r<a;){var l=t[r];n(l,r,t)&&(s[i++]=l)}return s}return rh=e,rh}var ah,Px;function jj(){if(Px)return ah;Px=1;function e(){return[]}return ah=e,ah}var oh,Sx;function Dj(){if(Sx)return oh;Sx=1;var e=Hj(),t=jj(),n=Object.prototype,r=n.propertyIsEnumerable,a=Object.getOwnPropertySymbols,i=a?function(s){return s==null?[]:(s=Object(s),e(a(s),function(l){return r.call(s,l)}))}:t;return oh=i,oh}var ih,Wx;function $j(){if(Wx)return ih;Wx=1;function e(t,n){for(var r=-1,a=Array(t);++r<t;)a[r]=n(r);return a}return ih=e,ih}var uh,Ax;function Lj(){if(Ax)return uh;Ax=1;var e=Yr(),t=Xr(),n="[object Arguments]";function r(a){return t(a)&&e(a)==n}return uh=r,uh}var sh,_x;function ky(){if(_x)return sh;_x=1;var e=Lj(),t=Xr(),n=Object.prototype,r=n.hasOwnProperty,a=n.propertyIsEnumerable,i=e((function(){return arguments})())?e:function(s){return t(s)&&r.call(s,"callee")&&!a.call(s,"callee")};return sh=i,sh}var es={exports:{}},lh,Mx;function Fj(){if(Mx)return lh;Mx=1;function e(){return!1}return lh=e,lh}es.exports;var Ox;function cA(){return Ox||(Ox=1,(function(e,t){var n=Wr(),r=Fj(),a=t&&!t.nodeType&&t,i=a&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===a,l=s?n.Buffer:void 0,c=l?l.isBuffer:void 0,f=c||r;e.exports=f})(es,es.exports)),es.exports}var ph,Cx;function Ny(){if(Cx)return ph;Cx=1;var e=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function n(r,a){var i=typeof r;return a=a??e,!!a&&(i=="number"||i!="symbol"&&t.test(r))&&r>-1&&r%1==0&&r<a}return ph=n,ph}var ch,kx;function Ey(){if(kx)return ch;kx=1;var e=9007199254740991;function t(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=e}return ch=t,ch}var fh,Nx;function qj(){if(Nx)return fh;Nx=1;var e=Yr(),t=Ey(),n=Xr(),r="[object Arguments]",a="[object Array]",i="[object Boolean]",s="[object Date]",l="[object Error]",c="[object Function]",f="[object Map]",h="[object Number]",d="[object Object]",v="[object RegExp]",y="[object Set]",B="[object String]",I="[object WeakMap]",b="[object ArrayBuffer]",S="[object DataView]",W="[object Float32Array]",A="[object Float64Array]",O="[object Int8Array]",w="[object Int16Array]",_="[object Int32Array]",N="[object Uint8Array]",P="[object Uint8ClampedArray]",C="[object Uint16Array]",R="[object Uint32Array]",j={};j[W]=j[A]=j[O]=j[w]=j[_]=j[N]=j[P]=j[C]=j[R]=!0,j[r]=j[a]=j[b]=j[i]=j[S]=j[s]=j[l]=j[c]=j[f]=j[h]=j[d]=j[v]=j[y]=j[B]=j[I]=!1;function T(q){return n(q)&&t(q.length)&&!!j[e(q)]}return fh=T,fh}var dh,Ex;function fA(){if(Ex)return dh;Ex=1;function e(t){return function(n){return t(n)}}return dh=e,dh}var ts={exports:{}};ts.exports;var Tx;function zj(){return Tx||(Tx=1,(function(e,t){var n=CW(),r=t&&!t.nodeType&&t,a=r&&!0&&e&&!e.nodeType&&e,i=a&&a.exports===r,s=i&&n.process,l=(function(){try{var c=a&&a.require&&a.require("util").types;return c||s&&s.binding&&s.binding("util")}catch{}})();e.exports=l})(ts,ts.exports)),ts.exports}var hh,Rx;function dA(){if(Rx)return hh;Rx=1;var e=qj(),t=fA(),n=zj(),r=n&&n.isTypedArray,a=r?t(r):e;return hh=a,hh}var mh,Hx;function Uj(){if(Hx)return mh;Hx=1;var e=$j(),t=ky(),n=yn(),r=cA(),a=Ny(),i=dA(),s=Object.prototype,l=s.hasOwnProperty;function c(f,h){var d=n(f),v=!d&&t(f),y=!d&&!v&&r(f),B=!d&&!v&&!y&&i(f),I=d||v||y||B,b=I?e(f.length,String):[],S=b.length;for(var W in f)(h||l.call(f,W))&&!(I&&(W=="length"||y&&(W=="offset"||W=="parent")||B&&(W=="buffer"||W=="byteLength"||W=="byteOffset")||a(W,S)))&&b.push(W);return b}return mh=c,mh}var vh,jx;function Vj(){if(jx)return vh;jx=1;var e=Object.prototype;function t(n){var r=n&&n.constructor,a=typeof r=="function"&&r.prototype||e;return n===a}return vh=t,vh}var gh,Dx;function hA(){if(Dx)return gh;Dx=1;function e(t,n){return function(r){return t(n(r))}}return gh=e,gh}var yh,$x;function Gj(){if($x)return yh;$x=1;var e=hA(),t=e(Object.keys,Object);return yh=t,yh}var bh,Lx;function Kj(){if(Lx)return bh;Lx=1;var e=Vj(),t=Gj(),n=Object.prototype,r=n.hasOwnProperty;function a(i){if(!e(i))return t(i);var s=[];for(var l in Object(i))r.call(i,l)&&l!="constructor"&&s.push(l);return s}return bh=a,bh}var Ih,Fx;function Ys(){if(Fx)return Ih;Fx=1;var e=by(),t=Ey();function n(r){return r!=null&&t(r.length)&&!e(r)}return Ih=n,Ih}var Bh,qx;function Xc(){if(qx)return Bh;qx=1;var e=Uj(),t=Kj(),n=Ys();function r(a){return n(a)?e(a):t(a)}return Bh=r,Bh}var xh,zx;function Qj(){if(zx)return xh;zx=1;var e=Rj(),t=Dj(),n=Xc();function r(a){return e(a,n,t)}return xh=r,xh}var wh,Ux;function Yj(){if(Ux)return wh;Ux=1;var e=Qj(),t=1,n=Object.prototype,r=n.hasOwnProperty;function a(i,s,l,c,f,h){var d=l&t,v=e(i),y=v.length,B=e(s),I=B.length;if(y!=I&&!d)return!1;for(var b=y;b--;){var S=v[b];if(!(d?S in s:r.call(s,S)))return!1}var W=h.get(i),A=h.get(s);if(W&&A)return W==s&&A==i;var O=!0;h.set(i,s),h.set(s,i);for(var w=d;++b<y;){S=v[b];var _=i[S],N=s[S];if(c)var P=d?c(N,_,S,s,i,h):c(_,N,S,i,s,h);if(!(P===void 0?_===N||f(_,N,l,c,h):P)){O=!1;break}w||(w=S=="constructor")}if(O&&!w){var C=i.constructor,R=s.constructor;C!=R&&"constructor"in i&&"constructor"in s&&!(typeof C=="function"&&C instanceof C&&typeof R=="function"&&R instanceof R)&&(O=!1)}return h.delete(i),h.delete(s),O}return wh=a,wh}var Ph,Vx;function Xj(){if(Vx)return Ph;Vx=1;var e=xo(),t=Wr(),n=e(t,"DataView");return Ph=n,Ph}var Sh,Gx;function Zj(){if(Gx)return Sh;Gx=1;var e=xo(),t=Wr(),n=e(t,"Promise");return Sh=n,Sh}var Wh,Kx;function mA(){if(Kx)return Wh;Kx=1;var e=xo(),t=Wr(),n=e(t,"Set");return Wh=n,Wh}var Ah,Qx;function Jj(){if(Qx)return Ah;Qx=1;var e=xo(),t=Wr(),n=e(t,"WeakMap");return Ah=n,Ah}var _h,Yx;function eD(){if(Yx)return _h;Yx=1;var e=Xj(),t=By(),n=Zj(),r=mA(),a=Jj(),i=Yr(),s=kW(),l="[object Map]",c="[object Object]",f="[object Promise]",h="[object Set]",d="[object WeakMap]",v="[object DataView]",y=s(e),B=s(t),I=s(n),b=s(r),S=s(a),W=i;return(e&&W(new e(new ArrayBuffer(1)))!=v||t&&W(new t)!=l||n&&W(n.resolve())!=f||r&&W(new r)!=h||a&&W(new a)!=d)&&(W=function(A){var O=i(A),w=O==c?A.constructor:void 0,_=w?s(w):"";if(_)switch(_){case y:return v;case B:return l;case I:return f;case b:return h;case S:return d}return O}),_h=W,_h}var Mh,Xx;function tD(){if(Xx)return Mh;Xx=1;var e=oA(),t=lA(),n=Tj(),r=Yj(),a=eD(),i=yn(),s=cA(),l=dA(),c=1,f="[object Arguments]",h="[object Array]",d="[object Object]",v=Object.prototype,y=v.hasOwnProperty;function B(I,b,S,W,A,O){var w=i(I),_=i(b),N=w?h:a(I),P=_?h:a(b);N=N==f?d:N,P=P==f?d:P;var C=N==d,R=P==d,j=N==P;if(j&&s(I)){if(!s(b))return!1;w=!0,C=!1}if(j&&!C)return O||(O=new e),w||l(I)?t(I,b,S,W,A,O):n(I,b,N,S,W,A,O);if(!(S&c)){var T=C&&y.call(I,"__wrapped__"),q=R&&y.call(b,"__wrapped__");if(T||q){var L=T?I.value():I,K=q?b.value():b;return O||(O=new e),A(L,K,S,W,O)}}return j?(O||(O=new e),r(I,b,S,W,A,O)):!1}return Mh=B,Mh}var Oh,Zx;function Ty(){if(Zx)return Oh;Zx=1;var e=tD(),t=Xr();function n(r,a,i,s,l){return r===a?!0:r==null||a==null||!t(r)&&!t(a)?r!==r&&a!==a:e(r,a,i,s,n,l)}return Oh=n,Oh}var Ch,Jx;function nD(){if(Jx)return Ch;Jx=1;var e=oA(),t=Ty(),n=1,r=2;function a(i,s,l,c){var f=l.length,h=f,d=!c;if(i==null)return!h;for(i=Object(i);f--;){var v=l[f];if(d&&v[2]?v[1]!==i[v[0]]:!(v[0]in i))return!1}for(;++f<h;){v=l[f];var y=v[0],B=i[y],I=v[1];if(d&&v[2]){if(B===void 0&&!(y in i))return!1}else{var b=new e;if(c)var S=c(B,I,y,i,s,b);if(!(S===void 0?t(I,B,n|r,c,b):S))return!1}}return!0}return Ch=a,Ch}var kh,ew;function vA(){if(ew)return kh;ew=1;var e=ja();function t(n){return n===n&&!e(n)}return kh=t,kh}var Nh,tw;function rD(){if(tw)return Nh;tw=1;var e=vA(),t=Xc();function n(r){for(var a=t(r),i=a.length;i--;){var s=a[i],l=r[s];a[i]=[s,l,e(l)]}return a}return Nh=n,Nh}var Eh,nw;function gA(){if(nw)return Eh;nw=1;function e(t,n){return function(r){return r==null?!1:r[t]===n&&(n!==void 0||t in Object(r))}}return Eh=e,Eh}var Th,rw;function aD(){if(rw)return Th;rw=1;var e=nD(),t=rD(),n=gA();function r(a){var i=t(a);return i.length==1&&i[0][2]?n(i[0][0],i[0][1]):function(s){return s===a||e(s,a,i)}}return Th=r,Th}var Rh,aw;function oD(){if(aw)return Rh;aw=1;function e(t,n){return t!=null&&n in Object(t)}return Rh=e,Rh}var Hh,ow;function iD(){if(ow)return Hh;ow=1;var e=TW(),t=ky(),n=yn(),r=Ny(),a=Ey(),i=Uc();function s(l,c,f){c=e(c,l);for(var h=-1,d=c.length,v=!1;++h<d;){var y=i(c[h]);if(!(v=l!=null&&f(l,y)))break;l=l[y]}return v||++h!=d?v:(d=l==null?0:l.length,!!d&&a(d)&&r(y,d)&&(n(l)||t(l)))}return Hh=s,Hh}var jh,iw;function uD(){if(iw)return jh;iw=1;var e=oD(),t=iD();function n(r,a){return r!=null&&t(r,a,e)}return jh=n,jh}var Dh,uw;function sD(){if(uw)return Dh;uw=1;var e=Ty(),t=RW(),n=uD(),r=yy(),a=vA(),i=gA(),s=Uc(),l=1,c=2;function f(h,d){return r(h)&&a(d)?i(s(h),d):function(v){var y=t(v,h);return y===void 0&&y===d?n(v,h):e(d,y,l|c)}}return Dh=f,Dh}var $h,sw;function Xi(){if(sw)return $h;sw=1;function e(t){return t}return $h=e,$h}var Lh,lw;function lD(){if(lw)return Lh;lw=1;function e(t){return function(n){return n==null?void 0:n[t]}}return Lh=e,Lh}var Fh,pw;function pD(){if(pw)return Fh;pw=1;var e=Py();function t(n){return function(r){return e(r,n)}}return Fh=t,Fh}var qh,cw;function cD(){if(cw)return qh;cw=1;var e=lD(),t=pD(),n=yy(),r=Uc();function a(i){return n(i)?e(r(i)):t(i)}return qh=a,qh}var zh,fw;function Ar(){if(fw)return zh;fw=1;var e=aD(),t=sD(),n=Xi(),r=yn(),a=cD();function i(s){return typeof s=="function"?s:s==null?n:typeof s=="object"?r(s)?t(s[0],s[1]):e(s):a(s)}return zh=i,zh}var Uh,dw;function yA(){if(dw)return Uh;dw=1;function e(t,n,r,a){for(var i=t.length,s=r+(a?1:-1);a?s--:++s<i;)if(n(t[s],s,t))return s;return-1}return Uh=e,Uh}var Vh,hw;function fD(){if(hw)return Vh;hw=1;function e(t){return t!==t}return Vh=e,Vh}var Gh,mw;function dD(){if(mw)return Gh;mw=1;function e(t,n,r){for(var a=r-1,i=t.length;++a<i;)if(t[a]===n)return a;return-1}return Gh=e,Gh}var Kh,vw;function hD(){if(vw)return Kh;vw=1;var e=yA(),t=fD(),n=dD();function r(a,i,s){return i===i?n(a,i,s):e(a,t,s)}return Kh=r,Kh}var Qh,gw;function mD(){if(gw)return Qh;gw=1;var e=hD();function t(n,r){var a=n==null?0:n.length;return!!a&&e(n,r,0)>-1}return Qh=t,Qh}var Yh,yw;function vD(){if(yw)return Yh;yw=1;function e(t,n,r){for(var a=-1,i=t==null?0:t.length;++a<i;)if(r(n,t[a]))return!0;return!1}return Yh=e,Yh}var Xh,bw;function gD(){if(bw)return Xh;bw=1;function e(){}return Xh=e,Xh}var Zh,Iw;function yD(){if(Iw)return Zh;Iw=1;var e=mA(),t=gD(),n=Cy(),r=1/0,a=e&&1/n(new e([,-0]))[1]==r?function(i){return new e(i)}:t;return Zh=a,Zh}var Jh,Bw;function bD(){if(Bw)return Jh;Bw=1;var e=iA(),t=mD(),n=vD(),r=sA(),a=yD(),i=Cy(),s=200;function l(c,f,h){var d=-1,v=t,y=c.length,B=!0,I=[],b=I;if(h)B=!1,v=n;else if(y>=s){var S=f?null:a(c);if(S)return i(S);B=!1,v=r,b=new e}else b=f?[]:I;e:for(;++d<y;){var W=c[d],A=f?f(W):W;if(W=h||W!==0?W:0,B&&A===A){for(var O=b.length;O--;)if(b[O]===A)continue e;f&&b.push(A),I.push(W)}else v(b,A,h)||(b!==I&&b.push(A),I.push(W))}return I}return Jh=l,Jh}var em,xw;function ID(){if(xw)return em;xw=1;var e=Ar(),t=bD();function n(r,a){return r&&r.length?t(r,e(a,2)):[]}return em=n,em}var BD=ID();const ww=Xe(BD);function bA(e,t,n){return t===!0?ww(e,n):ke(t)?ww(e,t):e}function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gi(e)}var xD=["ref"];function Pw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Hr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pw(Object(n),!0).forEach(function(r){Zc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wD(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Sw(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,BA(r.key),r)}}function PD(e,t,n){return t&&Sw(e.prototype,t),n&&Sw(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function SD(e,t,n){return t=Fp(t),WD(e,IA()?Reflect.construct(t,n||[],Fp(e).constructor):t.apply(e,n))}function WD(e,t){if(t&&(gi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return AD(e)}function AD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function IA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(IA=function(){return!!e})()}function Fp(e){return Fp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Fp(e)}function _D(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zv(e,t)}function Zv(e,t){return Zv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zv(e,t)}function Zc(e,t,n){return t=BA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BA(e){var t=MD(e,"string");return gi(t)=="symbol"?t:t+""}function MD(e,t){if(gi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(gi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function OD(e,t){if(e==null)return{};var n=CD(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function CD(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function kD(e){return e.value}function ND(e,t){if(H.isValidElement(e))return H.cloneElement(e,t);if(typeof e=="function")return H.createElement(e,t);t.ref;var n=OD(t,xD);return H.createElement(Oy,n)}var Ww=1,Oa=(function(e){function t(){var n;wD(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=SD(this,t,[].concat(a)),Zc(n,"lastBoundingBox",{width:-1,height:-1}),n}return _D(t,e),PD(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();return r.height=this.wrapperNode.offsetHeight,r.width=this.wrapperNode.offsetWidth,r}return null}},{key:"updateBBox",value:function(){var r=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>Ww||Math.abs(a.height-this.lastBoundingBox.height)>Ww)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,r&&r(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,r&&r(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?Hr({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(r){var a=this.props,i=a.layout,s=a.align,l=a.verticalAlign,c=a.margin,f=a.chartWidth,h=a.chartHeight,d,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(s==="center"&&i==="vertical"){var y=this.getBBoxSnapshot();d={left:((f||0)-y.width)/2}}else d=s==="right"?{right:c&&c.right||0}:{left:c&&c.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(l==="middle"){var B=this.getBBoxSnapshot();v={top:((h||0)-B.height)/2}}else v=l==="bottom"?{bottom:c&&c.bottom||0}:{top:c&&c.top||0};return Hr(Hr({},d),v)}},{key:"render",value:function(){var r=this,a=this.props,i=a.content,s=a.width,l=a.height,c=a.wrapperStyle,f=a.payloadUniqBy,h=a.payload,d=Hr(Hr({position:"absolute",width:s||"auto",height:l||"auto"},this.getDefaultPosition(c)),c);return H.createElement("div",{className:"recharts-legend-wrapper",style:d,ref:function(y){r.wrapperNode=y}},ND(i,Hr(Hr({},this.props),{},{payload:bA(h,f,kD)})))}}],[{key:"getWithHeight",value:function(r,a){var i=Hr(Hr({},this.defaultProps),r.props),s=i.layout;return s==="vertical"&&le(r.props.height)?{height:r.props.height}:s==="horizontal"?{width:r.props.width||a}:null}}])})(Y.PureComponent);Zc(Oa,"displayName","Legend");Zc(Oa,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var tm,Aw;function ED(){if(Aw)return tm;Aw=1;var e=Ks(),t=ky(),n=yn(),r=e?e.isConcatSpreadable:void 0;function a(i){return n(i)||t(i)||!!(r&&i&&i[r])}return tm=a,tm}var nm,_w;function xA(){if(_w)return nm;_w=1;var e=pA(),t=ED();function n(r,a,i,s,l){var c=-1,f=r.length;for(i||(i=t),l||(l=[]);++c<f;){var h=r[c];a>0&&i(h)?a>1?n(h,a-1,i,s,l):e(l,h):s||(l[l.length]=h)}return l}return nm=n,nm}var rm,Mw;function TD(){if(Mw)return rm;Mw=1;function e(t){return function(n,r,a){for(var i=-1,s=Object(n),l=a(n),c=l.length;c--;){var f=l[t?c:++i];if(r(s[f],f,s)===!1)break}return n}}return rm=e,rm}var am,Ow;function RD(){if(Ow)return am;Ow=1;var e=TD(),t=e();return am=t,am}var om,Cw;function wA(){if(Cw)return om;Cw=1;var e=RD(),t=Xc();function n(r,a){return r&&e(r,a,t)}return om=n,om}var im,kw;function HD(){if(kw)return im;kw=1;var e=Ys();function t(n,r){return function(a,i){if(a==null)return a;if(!e(a))return n(a,i);for(var s=a.length,l=r?s:-1,c=Object(a);(r?l--:++l<s)&&i(c[l],l,c)!==!1;);return a}}return im=t,im}var um,Nw;function Ry(){if(Nw)return um;Nw=1;var e=wA(),t=HD(),n=t(e);return um=n,um}var sm,Ew;function PA(){if(Ew)return sm;Ew=1;var e=Ry(),t=Ys();function n(r,a){var i=-1,s=t(r)?Array(r.length):[];return e(r,function(l,c,f){s[++i]=a(l,c,f)}),s}return sm=n,sm}var lm,Tw;function jD(){if(Tw)return lm;Tw=1;function e(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].value;return t}return lm=e,lm}var pm,Rw;function DD(){if(Rw)return pm;Rw=1;var e=Ki();function t(n,r){if(n!==r){var a=n!==void 0,i=n===null,s=n===n,l=e(n),c=r!==void 0,f=r===null,h=r===r,d=e(r);if(!f&&!d&&!l&&n>r||l&&c&&h&&!f&&!d||i&&c&&h||!a&&h||!s)return 1;if(!i&&!l&&!d&&n<r||d&&a&&s&&!i&&!l||f&&a&&s||!c&&s||!h)return-1}return 0}return pm=t,pm}var cm,Hw;function $D(){if(Hw)return cm;Hw=1;var e=DD();function t(n,r,a){for(var i=-1,s=n.criteria,l=r.criteria,c=s.length,f=a.length;++i<c;){var h=e(s[i],l[i]);if(h){if(i>=f)return h;var d=a[i];return h*(d=="desc"?-1:1)}}return n.index-r.index}return cm=t,cm}var fm,jw;function LD(){if(jw)return fm;jw=1;var e=wy(),t=Py(),n=Ar(),r=PA(),a=jD(),i=fA(),s=$D(),l=Xi(),c=yn();function f(h,d,v){d.length?d=e(d,function(I){return c(I)?function(b){return t(b,I.length===1?I[0]:I)}:I}):d=[l];var y=-1;d=e(d,i(n));var B=r(h,function(I,b,S){var W=e(d,function(A){return A(I)});return{criteria:W,index:++y,value:I}});return a(B,function(I,b){return s(I,b,v)})}return fm=f,fm}var dm,Dw;function FD(){if(Dw)return dm;Dw=1;function e(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}return dm=e,dm}var hm,$w;function qD(){if($w)return hm;$w=1;var e=FD(),t=Math.max;function n(r,a,i){return a=t(a===void 0?r.length-1:a,0),function(){for(var s=arguments,l=-1,c=t(s.length-a,0),f=Array(c);++l<c;)f[l]=s[a+l];l=-1;for(var h=Array(a+1);++l<a;)h[l]=s[l];return h[a]=i(f),e(r,this,h)}}return hm=n,hm}var mm,Lw;function zD(){if(Lw)return mm;Lw=1;function e(t){return function(){return t}}return mm=e,mm}var vm,Fw;function SA(){if(Fw)return vm;Fw=1;var e=xo(),t=(function(){try{var n=e(Object,"defineProperty");return n({},"",{}),n}catch{}})();return vm=t,vm}var gm,qw;function UD(){if(qw)return gm;qw=1;var e=zD(),t=SA(),n=Xi(),r=t?function(a,i){return t(a,"toString",{configurable:!0,enumerable:!1,value:e(i),writable:!0})}:n;return gm=r,gm}var ym,zw;function VD(){if(zw)return ym;zw=1;var e=800,t=16,n=Date.now;function r(a){var i=0,s=0;return function(){var l=n(),c=t-(l-s);if(s=l,c>0){if(++i>=e)return arguments[0]}else i=0;return a.apply(void 0,arguments)}}return ym=r,ym}var bm,Uw;function GD(){if(Uw)return bm;Uw=1;var e=UD(),t=VD(),n=t(e);return bm=n,bm}var Im,Vw;function KD(){if(Vw)return Im;Vw=1;var e=Xi(),t=qD(),n=GD();function r(a,i){return n(t(a,i,e),a+"")}return Im=r,Im}var Bm,Gw;function Jc(){if(Gw)return Bm;Gw=1;var e=Iy(),t=Ys(),n=Ny(),r=ja();function a(i,s,l){if(!r(l))return!1;var c=typeof s;return(c=="number"?t(l)&&n(s,l.length):c=="string"&&s in l)?e(l[s],i):!1}return Bm=a,Bm}var xm,Kw;function QD(){if(Kw)return xm;Kw=1;var e=xA(),t=LD(),n=KD(),r=Jc(),a=n(function(i,s){if(i==null)return[];var l=s.length;return l>1&&r(i,s[0],s[1])?s=[]:l>2&&r(s[0],s[1],s[2])&&(s=[s[0]]),t(i,e(s,1),[])});return xm=a,xm}var YD=QD();const Hy=Xe(YD);function ms(e){"@babel/helpers - typeof";return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ms(e)}function Jv(){return Jv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jv.apply(this,arguments)}function XD(e,t){return t5(e)||e5(e,t)||JD(e,t)||ZD()}function ZD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JD(e,t){if(e){if(typeof e=="string")return Qw(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qw(e,t)}}function Qw(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function e5(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function t5(e){if(Array.isArray(e))return e}function Yw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yw(Object(n),!0).forEach(function(r){n5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function n5(e,t,n){return t=r5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r5(e){var t=a5(e,"string");return ms(t)=="symbol"?t:t+""}function a5(e,t){if(ms(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function o5(e){return Array.isArray(e)&&Rt(e[0])&&Rt(e[1])?e.join(" ~ "):e}var i5=function(t){var n=t.separator,r=n===void 0?" : ":n,a=t.contentStyle,i=a===void 0?{}:a,s=t.itemStyle,l=s===void 0?{}:s,c=t.labelStyle,f=c===void 0?{}:c,h=t.payload,d=t.formatter,v=t.itemSorter,y=t.wrapperClassName,B=t.labelClassName,I=t.label,b=t.labelFormatter,S=t.accessibilityLayer,W=S===void 0?!1:S,A=function(){if(h&&h.length){var T={padding:0,margin:0},q=(v?Hy(h,v):h).map(function(L,K){if(L.type==="none")return null;var U=wm({display:"block",paddingTop:4,paddingBottom:4,color:L.color||"#000"},l),V=L.formatter||d||o5,D=L.value,Q=L.name,X=D,E=Q;if(V&&X!=null&&E!=null){var F=V(D,Q,L,K,h);if(Array.isArray(F)){var J=XD(F,2);X=J[0],E=J[1]}else X=F}return H.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(K),style:U},Rt(E)?H.createElement("span",{className:"recharts-tooltip-item-name"},E):null,Rt(E)?H.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,H.createElement("span",{className:"recharts-tooltip-item-value"},X),H.createElement("span",{className:"recharts-tooltip-item-unit"},L.unit||""))});return H.createElement("ul",{className:"recharts-tooltip-item-list",style:T},q)}return null},O=wm({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},i),w=wm({margin:0},f),_=!Ne(I),N=_?I:"",P=He("recharts-default-tooltip",y),C=He("recharts-tooltip-label",B);_&&b&&h!==void 0&&h!==null&&(N=b(I,h));var R=W?{role:"status","aria-live":"assertive"}:{};return H.createElement("div",Jv({className:P,style:O},R),H.createElement("p",{className:C,style:w},H.isValidElement(N)?N:"".concat(N)),A())};function vs(e){"@babel/helpers - typeof";return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vs(e)}function vp(e,t,n){return t=u5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u5(e){var t=s5(e,"string");return vs(t)=="symbol"?t:t+""}function s5(e,t){if(vs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var zu="recharts-tooltip-wrapper",l5={visibility:"hidden"};function p5(e){var t=e.coordinate,n=e.translateX,r=e.translateY;return He(zu,vp(vp(vp(vp({},"".concat(zu,"-right"),le(n)&&t&&le(t.x)&&n>=t.x),"".concat(zu,"-left"),le(n)&&t&&le(t.x)&&n<t.x),"".concat(zu,"-bottom"),le(r)&&t&&le(t.y)&&r>=t.y),"".concat(zu,"-top"),le(r)&&t&&le(t.y)&&r<t.y))}function Xw(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.key,a=e.offsetTopLeft,i=e.position,s=e.reverseDirection,l=e.tooltipDimension,c=e.viewBox,f=e.viewBoxDimension;if(i&&le(i[r]))return i[r];var h=n[r]-l-a,d=n[r]+a;if(t[r])return s[r]?h:d;if(s[r]){var v=h,y=c[r];return v<y?Math.max(d,c[r]):Math.max(h,c[r])}var B=d+l,I=c[r]+f;return B>I?Math.max(h,c[r]):Math.max(d,c[r])}function c5(e){var t=e.translateX,n=e.translateY,r=e.useTranslate3d;return{transform:r?"translate3d(".concat(t,"px, ").concat(n,"px, 0)"):"translate(".concat(t,"px, ").concat(n,"px)")}}function f5(e){var t=e.allowEscapeViewBox,n=e.coordinate,r=e.offsetTopLeft,a=e.position,i=e.reverseDirection,s=e.tooltipBox,l=e.useTranslate3d,c=e.viewBox,f,h,d;return s.height>0&&s.width>0&&n?(h=Xw({allowEscapeViewBox:t,coordinate:n,key:"x",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.width,viewBox:c,viewBoxDimension:c.width}),d=Xw({allowEscapeViewBox:t,coordinate:n,key:"y",offsetTopLeft:r,position:a,reverseDirection:i,tooltipDimension:s.height,viewBox:c,viewBoxDimension:c.height}),f=c5({translateX:h,translateY:d,useTranslate3d:l})):f=l5,{cssProperties:f,cssClasses:p5({translateX:h,translateY:d,coordinate:n})}}function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(e)}function Zw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zw(Object(n),!0).forEach(function(r){tg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function d5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,AA(r.key),r)}}function m5(e,t,n){return t&&h5(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function v5(e,t,n){return t=qp(t),g5(e,WA()?Reflect.construct(t,n||[],qp(e).constructor):t.apply(e,n))}function g5(e,t){if(t&&(yi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y5(e)}function y5(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function WA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(WA=function(){return!!e})()}function qp(e){return qp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},qp(e)}function b5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&eg(e,t)}function eg(e,t){return eg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},eg(e,t)}function tg(e,t,n){return t=AA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function AA(e){var t=I5(e,"string");return yi(t)=="symbol"?t:t+""}function I5(e,t){if(yi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var eP=1,B5=(function(e){function t(){var n;d5(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=v5(this,t,[].concat(a)),tg(n,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),tg(n,"handleKeyDown",function(s){if(s.key==="Escape"){var l,c,f,h;n.setState({dismissed:!0,dismissedAtCoordinate:{x:(l=(c=n.props.coordinate)===null||c===void 0?void 0:c.x)!==null&&l!==void 0?l:0,y:(f=(h=n.props.coordinate)===null||h===void 0?void 0:h.y)!==null&&f!==void 0?f:0}})}}),n}return b5(t,e),m5(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var r=this.wrapperNode.getBoundingClientRect();(Math.abs(r.width-this.state.lastBoundingBox.width)>eP||Math.abs(r.height-this.state.lastBoundingBox.height)>eP)&&this.setState({lastBoundingBox:{width:r.width,height:r.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var r,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((r=this.props.coordinate)===null||r===void 0?void 0:r.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,c=a.animationEasing,f=a.children,h=a.coordinate,d=a.hasPayload,v=a.isAnimationActive,y=a.offset,B=a.position,I=a.reverseDirection,b=a.useTranslate3d,S=a.viewBox,W=a.wrapperStyle,A=f5({allowEscapeViewBox:s,coordinate:h,offsetTopLeft:y,position:B,reverseDirection:I,tooltipBox:this.state.lastBoundingBox,useTranslate3d:b,viewBox:S}),O=A.cssClasses,w=A.cssProperties,_=Jw(Jw({transition:v&&i?"transform ".concat(l,"ms ").concat(c):void 0},w),{},{pointerEvents:"none",visibility:!this.state.dismissed&&i&&d?"visible":"hidden",position:"absolute",top:0,left:0},W);return H.createElement("div",{tabIndex:-1,className:O,style:_,ref:function(P){r.wrapperNode=P}},f)}}])})(Y.PureComponent),x5=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Zr={isSsr:x5()};function bi(e){"@babel/helpers - typeof";return bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bi(e)}function tP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function nP(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tP(Object(n),!0).forEach(function(r){jy(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function w5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P5(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,MA(r.key),r)}}function S5(e,t,n){return t&&P5(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function W5(e,t,n){return t=zp(t),A5(e,_A()?Reflect.construct(t,n||[],zp(e).constructor):t.apply(e,n))}function A5(e,t){if(t&&(bi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _5(e)}function _5(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_A=function(){return!!e})()}function zp(e){return zp=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},zp(e)}function M5(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ng(e,t)}function ng(e,t){return ng=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ng(e,t)}function jy(e,t,n){return t=MA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function MA(e){var t=O5(e,"string");return bi(t)=="symbol"?t:t+""}function O5(e,t){if(bi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(bi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function C5(e){return e.dataKey}function k5(e,t){return H.isValidElement(e)?H.cloneElement(e,t):typeof e=="function"?H.createElement(e,t):H.createElement(i5,t)}var Wn=(function(e){function t(){return w5(this,t),W5(this,t,arguments)}return M5(t,e),S5(t,[{key:"render",value:function(){var r=this,a=this.props,i=a.active,s=a.allowEscapeViewBox,l=a.animationDuration,c=a.animationEasing,f=a.content,h=a.coordinate,d=a.filterNull,v=a.isAnimationActive,y=a.offset,B=a.payload,I=a.payloadUniqBy,b=a.position,S=a.reverseDirection,W=a.useTranslate3d,A=a.viewBox,O=a.wrapperStyle,w=B??[];d&&w.length&&(w=bA(B.filter(function(N){return N.value!=null&&(N.hide!==!0||r.props.includeHidden)}),I,C5));var _=w.length>0;return H.createElement(B5,{allowEscapeViewBox:s,animationDuration:l,animationEasing:c,isAnimationActive:v,active:i,coordinate:h,hasPayload:_,offset:y,position:b,reverseDirection:S,useTranslate3d:W,viewBox:A,wrapperStyle:O},k5(f,nP(nP({},this.props),{},{payload:w})))}}])})(Y.PureComponent);jy(Wn,"displayName","Tooltip");jy(Wn,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Zr.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var Pm,rP;function N5(){if(rP)return Pm;rP=1;var e=Wr(),t=function(){return e.Date.now()};return Pm=t,Pm}var Sm,aP;function E5(){if(aP)return Sm;aP=1;var e=/\s/;function t(n){for(var r=n.length;r--&&e.test(n.charAt(r)););return r}return Sm=t,Sm}var Wm,oP;function T5(){if(oP)return Wm;oP=1;var e=E5(),t=/^\s+/;function n(r){return r&&r.slice(0,e(r)+1).replace(t,"")}return Wm=n,Wm}var Am,iP;function OA(){if(iP)return Am;iP=1;var e=T5(),t=ja(),n=Ki(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;function c(f){if(typeof f=="number")return f;if(n(f))return r;if(t(f)){var h=typeof f.valueOf=="function"?f.valueOf():f;f=t(h)?h+"":h}if(typeof f!="string")return f===0?f:+f;f=e(f);var d=i.test(f);return d||s.test(f)?l(f.slice(2),d?2:8):a.test(f)?r:+f}return Am=c,Am}var _m,uP;function R5(){if(uP)return _m;uP=1;var e=ja(),t=N5(),n=OA(),r="Expected a function",a=Math.max,i=Math.min;function s(l,c,f){var h,d,v,y,B,I,b=0,S=!1,W=!1,A=!0;if(typeof l!="function")throw new TypeError(r);c=n(c)||0,e(f)&&(S=!!f.leading,W="maxWait"in f,v=W?a(n(f.maxWait)||0,c):v,A="trailing"in f?!!f.trailing:A);function O(q){var L=h,K=d;return h=d=void 0,b=q,y=l.apply(K,L),y}function w(q){return b=q,B=setTimeout(P,c),S?O(q):y}function _(q){var L=q-I,K=q-b,U=c-L;return W?i(U,v-K):U}function N(q){var L=q-I,K=q-b;return I===void 0||L>=c||L<0||W&&K>=v}function P(){var q=t();if(N(q))return C(q);B=setTimeout(P,_(q))}function C(q){return B=void 0,A&&h?O(q):(h=d=void 0,y)}function R(){B!==void 0&&clearTimeout(B),b=0,h=I=d=B=void 0}function j(){return B===void 0?y:C(t())}function T(){var q=t(),L=N(q);if(h=arguments,d=this,I=q,L){if(B===void 0)return w(I);if(W)return clearTimeout(B),B=setTimeout(P,c),O(I)}return B===void 0&&(B=setTimeout(P,c)),y}return T.cancel=R,T.flush=j,T}return _m=s,_m}var Mm,sP;function H5(){if(sP)return Mm;sP=1;var e=R5(),t=ja(),n="Expected a function";function r(a,i,s){var l=!0,c=!0;if(typeof a!="function")throw new TypeError(n);return t(s)&&(l="leading"in s?!!s.leading:l,c="trailing"in s?!!s.trailing:c),e(a,i,{leading:l,maxWait:i,trailing:c})}return Mm=r,Mm}var j5=H5();const CA=Xe(j5);function gs(e){"@babel/helpers - typeof";return gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gs(e)}function lP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function gp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lP(Object(n),!0).forEach(function(r){D5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function D5(e,t,n){return t=$5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $5(e){var t=L5(e,"string");return gs(t)=="symbol"?t:t+""}function L5(e,t){if(gs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(gs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function F5(e,t){return V5(e)||U5(e,t)||z5(e,t)||q5()}function q5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z5(e,t){if(e){if(typeof e=="string")return pP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pP(e,t)}}function pP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U5(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function V5(e){if(Array.isArray(e))return e}var Dy=Y.forwardRef(function(e,t){var n=e.aspect,r=e.initialDimension,a=r===void 0?{width:-1,height:-1}:r,i=e.width,s=i===void 0?"100%":i,l=e.height,c=l===void 0?"100%":l,f=e.minWidth,h=f===void 0?0:f,d=e.minHeight,v=e.maxHeight,y=e.children,B=e.debounce,I=B===void 0?0:B,b=e.id,S=e.className,W=e.onResize,A=e.style,O=A===void 0?{}:A,w=Y.useRef(null),_=Y.useRef();_.current=W,Y.useImperativeHandle(t,function(){return Object.defineProperty(w.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),w.current},configurable:!0})});var N=Y.useState({containerWidth:a.width,containerHeight:a.height}),P=F5(N,2),C=P[0],R=P[1],j=Y.useCallback(function(q,L){R(function(K){var U=Math.round(q),V=Math.round(L);return K.containerWidth===U&&K.containerHeight===V?K:{containerWidth:U,containerHeight:V}})},[]);Y.useEffect(function(){var q=function(Q){var X,E=Q[0].contentRect,F=E.width,J=E.height;j(F,J),(X=_.current)===null||X===void 0||X.call(_,F,J)};I>0&&(q=CA(q,I,{trailing:!0,leading:!1}));var L=new ResizeObserver(q),K=w.current.getBoundingClientRect(),U=K.width,V=K.height;return j(U,V),L.observe(w.current),function(){L.disconnect()}},[j,I]);var T=Y.useMemo(function(){var q=C.containerWidth,L=C.containerHeight;if(q<0||L<0)return null;lr(po(s)||po(c),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,s,c),lr(!n||n>0,"The aspect(%s) must be greater than zero.",n);var K=po(s)?q:s,U=po(c)?L:c;n&&n>0&&(K?U=K/n:U&&(K=U*n),v&&U>v&&(U=v)),lr(K>0||U>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,K,U,s,c,h,d,n);var V=!Array.isArray(y)&&Ur(y.type).endsWith("Chart");return H.Children.map(y,function(D){return H.isValidElement(D)?Y.cloneElement(D,gp({width:K,height:U},V?{style:gp({height:"100%",width:"100%",maxHeight:U,maxWidth:K},D.props.style)}:{})):D})},[n,y,c,v,d,h,C,s]);return H.createElement("div",{id:b?"".concat(b):void 0,className:He("recharts-responsive-container",S),style:gp(gp({},O),{},{width:s,height:c,minWidth:h,minHeight:d,maxHeight:v}),ref:w},T)}),Xs=function(t){return null};Xs.displayName="Cell";function ys(e){"@babel/helpers - typeof";return ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ys(e)}function cP(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cP(Object(n),!0).forEach(function(r){G5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cP(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function G5(e,t,n){return t=K5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K5(e){var t=Q5(e,"string");return ys(t)=="symbol"?t:t+""}function Q5(e,t){if(ys(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ys(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ei={widthCache:{},cacheCount:0},Y5=2e3,X5={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},fP="recharts_measurement_span";function Z5(e){var t=rg({},e);return Object.keys(t).forEach(function(n){t[n]||delete t[n]}),t}var rs=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||Zr.isSsr)return{width:0,height:0};var r=Z5(n),a=JSON.stringify({text:t,copyStyle:r});if(ei.widthCache[a])return ei.widthCache[a];try{var i=document.getElementById(fP);i||(i=document.createElement("span"),i.setAttribute("id",fP),i.setAttribute("aria-hidden","true"),document.body.appendChild(i));var s=rg(rg({},X5),r);Object.assign(i.style,s),i.textContent="".concat(t);var l=i.getBoundingClientRect(),c={width:l.width,height:l.height};return ei.widthCache[a]=c,++ei.cacheCount>Y5&&(ei.cacheCount=0,ei.widthCache={}),c}catch{return{width:0,height:0}}},J5=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function bs(e){"@babel/helpers - typeof";return bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bs(e)}function Up(e,t){return r$(e)||n$(e,t)||t$(e,t)||e$()}function e$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t$(e,t){if(e){if(typeof e=="string")return dP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dP(e,t)}}function dP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function r$(e){if(Array.isArray(e))return e}function a$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hP(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i$(r.key),r)}}function o$(e,t,n){return t&&hP(e.prototype,t),n&&hP(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i$(e){var t=u$(e,"string");return bs(t)=="symbol"?t:t+""}function u$(e,t){if(bs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(bs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var mP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,vP=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,s$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,l$=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,kA={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},p$=Object.keys(kA),oi="NaN";function c$(e,t){return e*kA[t]}var yp=(function(){function e(t,n){a$(this,e),this.num=t,this.unit=n,this.num=t,this.unit=n,Number.isNaN(t)&&(this.unit=""),n!==""&&!s$.test(n)&&(this.num=NaN,this.unit=""),p$.includes(n)&&(this.num=c$(t,n),this.unit="px")}return o$(e,[{key:"add",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num+n.num,this.unit)}},{key:"subtract",value:function(n){return this.unit!==n.unit?new e(NaN,""):new e(this.num-n.num,this.unit)}},{key:"multiply",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num*n.num,this.unit||n.unit)}},{key:"divide",value:function(n){return this.unit!==""&&n.unit!==""&&this.unit!==n.unit?new e(NaN,""):new e(this.num/n.num,this.unit||n.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(n){var r,a=(r=l$.exec(n))!==null&&r!==void 0?r:[],i=Up(a,3),s=i[1],l=i[2];return new e(parseFloat(s),l??"")}}])})();function NA(e){if(e.includes(oi))return oi;for(var t=e;t.includes("*")||t.includes("/");){var n,r=(n=mP.exec(t))!==null&&n!==void 0?n:[],a=Up(r,4),i=a[1],s=a[2],l=a[3],c=yp.parse(i??""),f=yp.parse(l??""),h=s==="*"?c.multiply(f):c.divide(f);if(h.isNaN())return oi;t=t.replace(mP,h.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var d,v=(d=vP.exec(t))!==null&&d!==void 0?d:[],y=Up(v,4),B=y[1],I=y[2],b=y[3],S=yp.parse(B??""),W=yp.parse(b??""),A=I==="+"?S.add(W):S.subtract(W);if(A.isNaN())return oi;t=t.replace(vP,A.toString())}return t}var gP=/\(([^()]*)\)/;function f$(e){for(var t=e;t.includes("(");){var n=gP.exec(t),r=Up(n,2),a=r[1];t=t.replace(gP,NA(a))}return t}function d$(e){var t=e.replace(/\s+/g,"");return t=f$(t),t=NA(t),t}function h$(e){try{return d$(e)}catch{return oi}}function Om(e){var t=h$(e.slice(5,-1));return t===oi?"":t}var m$=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],v$=["dx","dy","angle","className","breakAll"];function ag(){return ag=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ag.apply(this,arguments)}function yP(e,t){if(e==null)return{};var n=g$(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function g$(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function bP(e,t){return B$(e)||I$(e,t)||b$(e,t)||y$()}function y$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b$(e,t){if(e){if(typeof e=="string")return IP(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return IP(e,t)}}function IP(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I$(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function B$(e){if(Array.isArray(e))return e}var EA=/[ \f\n\r\t\v\u2028\u2029]+/,TA=function(t){var n=t.children,r=t.breakAll,a=t.style;try{var i=[];Ne(n)||(r?i=n.toString().split(""):i=n.toString().split(EA));var s=i.map(function(c){return{word:c,width:rs(c,a).width}}),l=r?0:rs(" ",a).width;return{wordsWithComputedWidth:s,spaceWidth:l}}catch{return null}},x$=function(t,n,r,a,i){var s=t.maxLines,l=t.children,c=t.style,f=t.breakAll,h=le(s),d=l,v=function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return K.reduce(function(U,V){var D=V.word,Q=V.width,X=U[U.length-1];if(X&&(a==null||i||X.width+Q+r<Number(a)))X.words.push(D),X.width+=Q+r;else{var E={words:[D],width:Q};U.push(E)}return U},[])},y=v(n),B=function(K){return K.reduce(function(U,V){return U.width>V.width?U:V})};if(!h)return y;for(var I="…",b=function(K){var U=d.slice(0,K),V=TA({breakAll:f,style:c,children:U+I}).wordsWithComputedWidth,D=v(V),Q=D.length>s||B(D).width>Number(a);return[Q,D]},S=0,W=d.length-1,A=0,O;S<=W&&A<=d.length-1;){var w=Math.floor((S+W)/2),_=w-1,N=b(_),P=bP(N,2),C=P[0],R=P[1],j=b(w),T=bP(j,1),q=T[0];if(!C&&!q&&(S=w+1),C&&q&&(W=w-1),!C&&q){O=R;break}A++}return O||y},BP=function(t){var n=Ne(t)?[]:t.toString().split(EA);return[{words:n}]},w$=function(t){var n=t.width,r=t.scaleToFit,a=t.children,i=t.style,s=t.breakAll,l=t.maxLines;if((n||r)&&!Zr.isSsr){var c,f,h=TA({breakAll:s,children:a,style:i});if(h){var d=h.wordsWithComputedWidth,v=h.spaceWidth;c=d,f=v}else return BP(a);return x$({breakAll:s,children:a,maxLines:l,style:i},c,f,n,r)}return BP(a)},xP="#808080",yo=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,i=a===void 0?0:a,s=t.lineHeight,l=s===void 0?"1em":s,c=t.capHeight,f=c===void 0?"0.71em":c,h=t.scaleToFit,d=h===void 0?!1:h,v=t.textAnchor,y=v===void 0?"start":v,B=t.verticalAnchor,I=B===void 0?"end":B,b=t.fill,S=b===void 0?xP:b,W=yP(t,m$),A=Y.useMemo(function(){return w$({breakAll:W.breakAll,children:W.children,maxLines:W.maxLines,scaleToFit:d,style:W.style,width:W.width})},[W.breakAll,W.children,W.maxLines,d,W.style,W.width]),O=W.dx,w=W.dy,_=W.angle,N=W.className,P=W.breakAll,C=yP(W,v$);if(!Rt(r)||!Rt(i))return null;var R=r+(le(O)?O:0),j=i+(le(w)?w:0),T;switch(I){case"start":T=Om("calc(".concat(f,")"));break;case"middle":T=Om("calc(".concat((A.length-1)/2," * -").concat(l," + (").concat(f," / 2))"));break;default:T=Om("calc(".concat(A.length-1," * -").concat(l,")"));break}var q=[];if(d){var L=A[0].width,K=W.width;q.push("scale(".concat((le(K)?K/L:1)/L,")"))}return _&&q.push("rotate(".concat(_,", ").concat(R,", ").concat(j,")")),q.length&&(C.transform=q.join(" ")),H.createElement("text",ag({},We(C,!0),{x:R,y:j,className:He("recharts-text",N),textAnchor:y,fill:S.includes("url")?xP:S}),A.map(function(U,V){var D=U.words.join(P?"":" ");return H.createElement("tspan",{x:R,dy:V===0?T:l,key:"".concat(D,"-").concat(V)},D)}))};function Ca(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function P$(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function $y(e){let t,n,r;e.length!==2?(t=Ca,n=(l,c)=>Ca(e(l),c),r=(l,c)=>e(l)-c):(t=e===Ca||e===P$?e:S$,n=e,r=e);function a(l,c,f=0,h=l.length){if(f<h){if(t(c,c)!==0)return h;do{const d=f+h>>>1;n(l[d],c)<0?f=d+1:h=d}while(f<h)}return f}function i(l,c,f=0,h=l.length){if(f<h){if(t(c,c)!==0)return h;do{const d=f+h>>>1;n(l[d],c)<=0?f=d+1:h=d}while(f<h)}return f}function s(l,c,f=0,h=l.length){const d=a(l,c,f,h-1);return d>f&&r(l[d-1],c)>-r(l[d],c)?d-1:d}return{left:a,center:s,right:i}}function S$(){return 0}function RA(e){return e===null?NaN:+e}function*W$(e,t){for(let n of e)n!=null&&(n=+n)>=n&&(yield n)}const A$=$y(Ca),Zs=A$.right;$y(RA).center;class wP extends Map{constructor(t,n=O$){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[r,a]of t)this.set(r,a)}get(t){return super.get(PP(this,t))}has(t){return super.has(PP(this,t))}set(t,n){return super.set(_$(this,t),n)}delete(t){return super.delete(M$(this,t))}}function PP({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function _$({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function M$({_intern:e,_key:t},n){const r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function O$(e){return e!==null&&typeof e=="object"?e.valueOf():e}function C$(e=Ca){if(e===Ca)return HA;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function HA(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const k$=Math.sqrt(50),N$=Math.sqrt(10),E$=Math.sqrt(2);function Vp(e,t,n){const r=(t-e)/Math.max(0,n),a=Math.floor(Math.log10(r)),i=r/Math.pow(10,a),s=i>=k$?10:i>=N$?5:i>=E$?2:1;let l,c,f;return a<0?(f=Math.pow(10,-a)/s,l=Math.round(e*f),c=Math.round(t*f),l/f<e&&++l,c/f>t&&--c,f=-f):(f=Math.pow(10,a)*s,l=Math.round(e/f),c=Math.round(t/f),l*f<e&&++l,c*f>t&&--c),c<l&&.5<=n&&n<2?Vp(e,t,n*2):[l,c,f]}function og(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[a,i,s]=r?Vp(t,e,n):Vp(e,t,n);if(!(i>=a))return[];const l=i-a+1,c=new Array(l);if(r)if(s<0)for(let f=0;f<l;++f)c[f]=(i-f)/-s;else for(let f=0;f<l;++f)c[f]=(i-f)*s;else if(s<0)for(let f=0;f<l;++f)c[f]=(a+f)/-s;else for(let f=0;f<l;++f)c[f]=(a+f)*s;return c}function ig(e,t,n){return t=+t,e=+e,n=+n,Vp(e,t,n)[2]}function ug(e,t,n){t=+t,e=+e,n=+n;const r=t<e,a=r?ig(t,e,n):ig(e,t,n);return(r?-1:1)*(a<0?1/-a:a)}function SP(e,t){let n;for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);return n}function WP(e,t){let n;for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);return n}function jA(e,t,n=0,r=1/0,a){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(a=a===void 0?HA:C$(a);r>n;){if(r-n>600){const c=r-n+1,f=t-n+1,h=Math.log(c),d=.5*Math.exp(2*h/3),v=.5*Math.sqrt(h*d*(c-d)/c)*(f-c/2<0?-1:1),y=Math.max(n,Math.floor(t-f*d/c+v)),B=Math.min(r,Math.floor(t+(c-f)*d/c+v));jA(e,t,y,B,a)}const i=e[t];let s=n,l=r;for(Uu(e,n,t),a(e[r],i)>0&&Uu(e,n,r);s<l;){for(Uu(e,s,l),++s,--l;a(e[s],i)<0;)++s;for(;a(e[l],i)>0;)--l}a(e[n],i)===0?Uu(e,n,l):(++l,Uu(e,l,r)),l<=t&&(n=l+1),t<=l&&(r=l-1)}return e}function Uu(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function T$(e,t,n){if(e=Float64Array.from(W$(e)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return WP(e);if(t>=1)return SP(e);var r,a=(r-1)*t,i=Math.floor(a),s=SP(jA(e,i).subarray(0,i+1)),l=WP(e.subarray(i+1));return s+(l-s)*(a-i)}}function R$(e,t,n=RA){if(!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return+n(e[0],0,e);if(t>=1)return+n(e[r-1],r-1,e);var r,a=(r-1)*t,i=Math.floor(a),s=+n(e[i],i,e),l=+n(e[i+1],i+1,e);return s+(l-s)*(a-i)}}function H$(e,t,n){e=+e,t=+t,n=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+n;for(var r=-1,a=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(a);++r<a;)i[r]=e+r*n;return i}function Yn(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Jr(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const sg=Symbol("implicit");function Ly(){var e=new wP,t=[],n=[],r=sg;function a(i){let s=e.get(i);if(s===void 0){if(r!==sg)return r;e.set(i,s=t.push(i)-1)}return n[s%n.length]}return a.domain=function(i){if(!arguments.length)return t.slice();t=[],e=new wP;for(const s of i)e.has(s)||e.set(s,t.push(s)-1);return a},a.range=function(i){return arguments.length?(n=Array.from(i),a):n.slice()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return Ly(t,n).unknown(r)},Yn.apply(a,arguments),a}function Is(){var e=Ly().unknown(void 0),t=e.domain,n=e.range,r=0,a=1,i,s,l=!1,c=0,f=0,h=.5;delete e.unknown;function d(){var v=t().length,y=a<r,B=y?a:r,I=y?r:a;i=(I-B)/Math.max(1,v-c+f*2),l&&(i=Math.floor(i)),B+=(I-B-i*(v-c))*h,s=i*(1-c),l&&(B=Math.round(B),s=Math.round(s));var b=H$(v).map(function(S){return B+i*S});return n(y?b.reverse():b)}return e.domain=function(v){return arguments.length?(t(v),d()):t()},e.range=function(v){return arguments.length?([r,a]=v,r=+r,a=+a,d()):[r,a]},e.rangeRound=function(v){return[r,a]=v,r=+r,a=+a,l=!0,d()},e.bandwidth=function(){return s},e.step=function(){return i},e.round=function(v){return arguments.length?(l=!!v,d()):l},e.padding=function(v){return arguments.length?(c=Math.min(1,f=+v),d()):c},e.paddingInner=function(v){return arguments.length?(c=Math.min(1,v),d()):c},e.paddingOuter=function(v){return arguments.length?(f=+v,d()):f},e.align=function(v){return arguments.length?(h=Math.max(0,Math.min(1,v)),d()):h},e.copy=function(){return Is(t(),[r,a]).round(l).paddingInner(c).paddingOuter(f).align(h)},Yn.apply(d(),arguments)}function DA(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return DA(t())},e}function as(){return DA(Is.apply(null,arguments).paddingInner(1))}function Fy(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function $A(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Js(){}var Bs=.7,Gp=1/Bs,ci="\\s*([+-]?\\d+)\\s*",xs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",j$=/^#([0-9a-f]{3,8})$/,D$=new RegExp(`^rgb\\(${ci},${ci},${ci}\\)$`),$$=new RegExp(`^rgb\\(${xr},${xr},${xr}\\)$`),L$=new RegExp(`^rgba\\(${ci},${ci},${ci},${xs}\\)$`),F$=new RegExp(`^rgba\\(${xr},${xr},${xr},${xs}\\)$`),q$=new RegExp(`^hsl\\(${xs},${xr},${xr}\\)$`),z$=new RegExp(`^hsla\\(${xs},${xr},${xr},${xs}\\)$`),AP={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Fy(Js,ws,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:_P,formatHex:_P,formatHex8:U$,formatHsl:V$,formatRgb:MP,toString:MP});function _P(){return this.rgb().formatHex()}function U$(){return this.rgb().formatHex8()}function V$(){return LA(this).formatHsl()}function MP(){return this.rgb().formatRgb()}function ws(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=j$.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?OP(t):n===3?new gn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?bp(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?bp(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=D$.exec(e))?new gn(t[1],t[2],t[3],1):(t=$$.exec(e))?new gn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=L$.exec(e))?bp(t[1],t[2],t[3],t[4]):(t=F$.exec(e))?bp(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=q$.exec(e))?NP(t[1],t[2]/100,t[3]/100,1):(t=z$.exec(e))?NP(t[1],t[2]/100,t[3]/100,t[4]):AP.hasOwnProperty(e)?OP(AP[e]):e==="transparent"?new gn(NaN,NaN,NaN,0):null}function OP(e){return new gn(e>>16&255,e>>8&255,e&255,1)}function bp(e,t,n,r){return r<=0&&(e=t=n=NaN),new gn(e,t,n,r)}function G$(e){return e instanceof Js||(e=ws(e)),e?(e=e.rgb(),new gn(e.r,e.g,e.b,e.opacity)):new gn}function lg(e,t,n,r){return arguments.length===1?G$(e):new gn(e,t,n,r??1)}function gn(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Fy(gn,lg,$A(Js,{brighter(e){return e=e==null?Gp:Math.pow(Gp,e),new gn(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Bs:Math.pow(Bs,e),new gn(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new gn(vo(this.r),vo(this.g),vo(this.b),Kp(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:CP,formatHex:CP,formatHex8:K$,formatRgb:kP,toString:kP}));function CP(){return`#${co(this.r)}${co(this.g)}${co(this.b)}`}function K$(){return`#${co(this.r)}${co(this.g)}${co(this.b)}${co((isNaN(this.opacity)?1:this.opacity)*255)}`}function kP(){const e=Kp(this.opacity);return`${e===1?"rgb(":"rgba("}${vo(this.r)}, ${vo(this.g)}, ${vo(this.b)}${e===1?")":`, ${e})`}`}function Kp(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function vo(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function co(e){return e=vo(e),(e<16?"0":"")+e.toString(16)}function NP(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new sr(e,t,n,r)}function LA(e){if(e instanceof sr)return new sr(e.h,e.s,e.l,e.opacity);if(e instanceof Js||(e=ws(e)),!e)return new sr;if(e instanceof sr)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,a=Math.min(t,n,r),i=Math.max(t,n,r),s=NaN,l=i-a,c=(i+a)/2;return l?(t===i?s=(n-r)/l+(n<r)*6:n===i?s=(r-t)/l+2:s=(t-n)/l+4,l/=c<.5?i+a:2-i-a,s*=60):l=c>0&&c<1?0:s,new sr(s,l,c,e.opacity)}function Q$(e,t,n,r){return arguments.length===1?LA(e):new sr(e,t,n,r??1)}function sr(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Fy(sr,Q$,$A(Js,{brighter(e){return e=e==null?Gp:Math.pow(Gp,e),new sr(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Bs:Math.pow(Bs,e),new sr(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,a=2*n-r;return new gn(Cm(e>=240?e-240:e+120,a,r),Cm(e,a,r),Cm(e<120?e+240:e-120,a,r),this.opacity)},clamp(){return new sr(EP(this.h),Ip(this.s),Ip(this.l),Kp(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Kp(this.opacity);return`${e===1?"hsl(":"hsla("}${EP(this.h)}, ${Ip(this.s)*100}%, ${Ip(this.l)*100}%${e===1?")":`, ${e})`}`}}));function EP(e){return e=(e||0)%360,e<0?e+360:e}function Ip(e){return Math.max(0,Math.min(1,e||0))}function Cm(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const qy=e=>()=>e;function Y$(e,t){return function(n){return e+n*t}}function X$(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function Z$(e){return(e=+e)==1?FA:function(t,n){return n-t?X$(t,n,e):qy(isNaN(t)?n:t)}}function FA(e,t){var n=t-e;return n?Y$(e,n):qy(isNaN(e)?t:e)}const TP=(function e(t){var n=Z$(t);function r(a,i){var s=n((a=lg(a)).r,(i=lg(i)).r),l=n(a.g,i.g),c=n(a.b,i.b),f=FA(a.opacity,i.opacity);return function(h){return a.r=s(h),a.g=l(h),a.b=c(h),a.opacity=f(h),a+""}}return r.gamma=e,r})(1);function J$(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),a;return function(i){for(a=0;a<n;++a)r[a]=e[a]*(1-i)+t[a]*i;return r}}function eL(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function tL(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,a=new Array(r),i=new Array(n),s;for(s=0;s<r;++s)a[s]=Zi(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(l){for(s=0;s<r;++s)i[s]=a[s](l);return i}}function nL(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Qp(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function rL(e,t){var n={},r={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?n[a]=Zi(e[a],t[a]):r[a]=t[a];return function(i){for(a in n)r[a]=n[a](i);return r}}var pg=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,km=new RegExp(pg.source,"g");function aL(e){return function(){return e}}function oL(e){return function(t){return e(t)+""}}function iL(e,t){var n=pg.lastIndex=km.lastIndex=0,r,a,i,s=-1,l=[],c=[];for(e=e+"",t=t+"";(r=pg.exec(e))&&(a=km.exec(t));)(i=a.index)>n&&(i=t.slice(n,i),l[s]?l[s]+=i:l[++s]=i),(r=r[0])===(a=a[0])?l[s]?l[s]+=a:l[++s]=a:(l[++s]=null,c.push({i:s,x:Qp(r,a)})),n=km.lastIndex;return n<t.length&&(i=t.slice(n),l[s]?l[s]+=i:l[++s]=i),l.length<2?c[0]?oL(c[0].x):aL(t):(t=c.length,function(f){for(var h=0,d;h<t;++h)l[(d=c[h]).i]=d.x(f);return l.join("")})}function Zi(e,t){var n=typeof t,r;return t==null||n==="boolean"?qy(t):(n==="number"?Qp:n==="string"?(r=ws(t))?(t=r,TP):iL:t instanceof ws?TP:t instanceof Date?nL:eL(t)?J$:Array.isArray(t)?tL:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?rL:Qp)(e,t)}function zy(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function uL(e,t){t===void 0&&(t=e,e=Zi);for(var n=0,r=t.length-1,a=t[0],i=new Array(r<0?0:r);n<r;)i[n]=e(a,a=t[++n]);return function(s){var l=Math.max(0,Math.min(r-1,Math.floor(s*=r)));return i[l](s-l)}}function sL(e){return function(){return e}}function Yp(e){return+e}var RP=[0,1];function un(e){return e}function cg(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:sL(isNaN(t)?NaN:.5)}function lL(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function pL(e,t,n){var r=e[0],a=e[1],i=t[0],s=t[1];return a<r?(r=cg(a,r),i=n(s,i)):(r=cg(r,a),i=n(i,s)),function(l){return i(r(l))}}function cL(e,t,n){var r=Math.min(e.length,t.length)-1,a=new Array(r),i=new Array(r),s=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<r;)a[s]=cg(e[s],e[s+1]),i[s]=n(t[s],t[s+1]);return function(l){var c=Zs(e,l,1,r)-1;return i[c](a[c](l))}}function el(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function e0(){var e=RP,t=RP,n=Zi,r,a,i,s=un,l,c,f;function h(){var v=Math.min(e.length,t.length);return s!==un&&(s=lL(e[0],e[v-1])),l=v>2?cL:pL,c=f=null,d}function d(v){return v==null||isNaN(v=+v)?i:(c||(c=l(e.map(r),t,n)))(r(s(v)))}return d.invert=function(v){return s(a((f||(f=l(t,e.map(r),Qp)))(v)))},d.domain=function(v){return arguments.length?(e=Array.from(v,Yp),h()):e.slice()},d.range=function(v){return arguments.length?(t=Array.from(v),h()):t.slice()},d.rangeRound=function(v){return t=Array.from(v),n=zy,h()},d.clamp=function(v){return arguments.length?(s=v?!0:un,h()):s!==un},d.interpolate=function(v){return arguments.length?(n=v,h()):n},d.unknown=function(v){return arguments.length?(i=v,d):i},function(v,y){return r=v,a=y,h()}}function Uy(){return e0()(un,un)}function fL(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Xp(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function Ii(e){return e=Xp(Math.abs(e)),e?e[1]:NaN}function dL(e,t){return function(n,r){for(var a=n.length,i=[],s=0,l=e[0],c=0;a>0&&l>0&&(c+l+1>r&&(l=Math.max(1,r-c)),i.push(n.substring(a-=l,a+l)),!((c+=l+1)>r));)l=e[s=(s+1)%e.length];return i.reverse().join(t)}}function hL(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var mL=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Ps(e){if(!(t=mL.exec(e)))throw new Error("invalid format: "+e);var t;return new Vy({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Ps.prototype=Vy.prototype;function Vy(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Vy.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function vL(e){e:for(var t=e.length,n=1,r=-1,a;n<t;++n)switch(e[n]){case".":r=a=n;break;case"0":r===0&&(r=n),a=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(a+1):e}var Zp;function gL(e,t){var n=Xp(e,t);if(!n)return Zp=void 0,e.toPrecision(t);var r=n[0],a=n[1],i=a-(Zp=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,s=r.length;return i===s?r:i>s?r+new Array(i-s+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Xp(e,Math.max(0,t+i-1))[0]}function HP(e,t){var n=Xp(e,t);if(!n)return e+"";var r=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")}const jP={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:fL,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>HP(e*100,t),r:HP,s:gL,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function DP(e){return e}var $P=Array.prototype.map,LP=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function yL(e){var t=e.grouping===void 0||e.thousands===void 0?DP:dL($P.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?DP:hL($P.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",c=e.nan===void 0?"NaN":e.nan+"";function f(d,v){d=Ps(d);var y=d.fill,B=d.align,I=d.sign,b=d.symbol,S=d.zero,W=d.width,A=d.comma,O=d.precision,w=d.trim,_=d.type;_==="n"?(A=!0,_="g"):jP[_]||(O===void 0&&(O=12),w=!0,_="g"),(S||y==="0"&&B==="=")&&(S=!0,y="0",B="=");var N=(v&&v.prefix!==void 0?v.prefix:"")+(b==="$"?n:b==="#"&&/[boxX]/.test(_)?"0"+_.toLowerCase():""),P=(b==="$"?r:/[%p]/.test(_)?s:"")+(v&&v.suffix!==void 0?v.suffix:""),C=jP[_],R=/[defgprs%]/.test(_);O=O===void 0?6:/[gprs]/.test(_)?Math.max(1,Math.min(21,O)):Math.max(0,Math.min(20,O));function j(T){var q=N,L=P,K,U,V;if(_==="c")L=C(T)+L,T="";else{T=+T;var D=T<0||1/T<0;if(T=isNaN(T)?c:C(Math.abs(T),O),w&&(T=vL(T)),D&&+T==0&&I!=="+"&&(D=!1),q=(D?I==="("?I:l:I==="-"||I==="("?"":I)+q,L=(_==="s"&&!isNaN(T)&&Zp!==void 0?LP[8+Zp/3]:"")+L+(D&&I==="("?")":""),R){for(K=-1,U=T.length;++K<U;)if(V=T.charCodeAt(K),48>V||V>57){L=(V===46?a+T.slice(K+1):T.slice(K))+L,T=T.slice(0,K);break}}}A&&!S&&(T=t(T,1/0));var Q=q.length+T.length+L.length,X=Q<W?new Array(W-Q+1).join(y):"";switch(A&&S&&(T=t(X+T,X.length?W-L.length:1/0),X=""),B){case"<":T=q+T+L+X;break;case"=":T=q+X+T+L;break;case"^":T=X.slice(0,Q=X.length>>1)+q+T+L+X.slice(Q);break;default:T=X+q+T+L;break}return i(T)}return j.toString=function(){return d+""},j}function h(d,v){var y=Math.max(-8,Math.min(8,Math.floor(Ii(v)/3)))*3,B=Math.pow(10,-y),I=f((d=Ps(d),d.type="f",d),{suffix:LP[8+y/3]});return function(b){return I(B*b)}}return{format:f,formatPrefix:h}}var Bp,Gy,qA;bL({thousands:",",grouping:[3],currency:["$",""]});function bL(e){return Bp=yL(e),Gy=Bp.format,qA=Bp.formatPrefix,Bp}function IL(e){return Math.max(0,-Ii(Math.abs(e)))}function BL(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Ii(t)/3)))*3-Ii(Math.abs(e)))}function xL(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Ii(t)-Ii(e))+1}function zA(e,t,n,r){var a=ug(e,t,n),i;switch(r=Ps(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(i=BL(a,s))&&(r.precision=i),qA(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=xL(a,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=IL(a))&&(r.precision=i-(r.type==="%")*2);break}}return Gy(r)}function $a(e){var t=e.domain;return e.ticks=function(n){var r=t();return og(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var a=t();return zA(a[0],a[a.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),a=0,i=r.length-1,s=r[a],l=r[i],c,f,h=10;for(l<s&&(f=s,s=l,l=f,f=a,a=i,i=f);h-- >0;){if(f=ig(s,l,n),f===c)return r[a]=s,r[i]=l,t(r);if(f>0)s=Math.floor(s/f)*f,l=Math.ceil(l/f)*f;else if(f<0)s=Math.ceil(s*f)/f,l=Math.floor(l*f)/f;else break;c=f}return e},e}function Jp(){var e=Uy();return e.copy=function(){return el(e,Jp())},Yn.apply(e,arguments),$a(e)}function UA(e){var t;function n(r){return r==null||isNaN(r=+r)?t:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(e=Array.from(r,Yp),n):e.slice()},n.unknown=function(r){return arguments.length?(t=r,n):t},n.copy=function(){return UA(e).unknown(t)},e=arguments.length?Array.from(e,Yp):[0,1],$a(n)}function VA(e,t){e=e.slice();var n=0,r=e.length-1,a=e[n],i=e[r],s;return i<a&&(s=n,n=r,r=s,s=a,a=i,i=s),e[n]=t.floor(a),e[r]=t.ceil(i),e}function FP(e){return Math.log(e)}function qP(e){return Math.exp(e)}function wL(e){return-Math.log(-e)}function PL(e){return-Math.exp(-e)}function SL(e){return isFinite(e)?+("1e"+e):e<0?0:e}function WL(e){return e===10?SL:e===Math.E?Math.exp:t=>Math.pow(e,t)}function AL(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function zP(e){return(t,n)=>-e(-t,n)}function Ky(e){const t=e(FP,qP),n=t.domain;let r=10,a,i;function s(){return a=AL(r),i=WL(r),n()[0]<0?(a=zP(a),i=zP(i),e(wL,PL)):e(FP,qP),t}return t.base=function(l){return arguments.length?(r=+l,s()):r},t.domain=function(l){return arguments.length?(n(l),s()):n()},t.ticks=l=>{const c=n();let f=c[0],h=c[c.length-1];const d=h<f;d&&([f,h]=[h,f]);let v=a(f),y=a(h),B,I;const b=l==null?10:+l;let S=[];if(!(r%1)&&y-v<b){if(v=Math.floor(v),y=Math.ceil(y),f>0){for(;v<=y;++v)for(B=1;B<r;++B)if(I=v<0?B/i(-v):B*i(v),!(I<f)){if(I>h)break;S.push(I)}}else for(;v<=y;++v)for(B=r-1;B>=1;--B)if(I=v>0?B/i(-v):B*i(v),!(I<f)){if(I>h)break;S.push(I)}S.length*2<b&&(S=og(f,h,b))}else S=og(v,y,Math.min(y-v,b)).map(i);return d?S.reverse():S},t.tickFormat=(l,c)=>{if(l==null&&(l=10),c==null&&(c=r===10?"s":","),typeof c!="function"&&(!(r%1)&&(c=Ps(c)).precision==null&&(c.trim=!0),c=Gy(c)),l===1/0)return c;const f=Math.max(1,r*l/t.ticks().length);return h=>{let d=h/i(Math.round(a(h)));return d*r<r-.5&&(d*=r),d<=f?c(h):""}},t.nice=()=>n(VA(n(),{floor:l=>i(Math.floor(a(l))),ceil:l=>i(Math.ceil(a(l)))})),t}function GA(){const e=Ky(e0()).domain([1,10]);return e.copy=()=>el(e,GA()).base(e.base()),Yn.apply(e,arguments),e}function UP(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function VP(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function Qy(e){var t=1,n=e(UP(t),VP(t));return n.constant=function(r){return arguments.length?e(UP(t=+r),VP(t)):t},$a(n)}function KA(){var e=Qy(e0());return e.copy=function(){return el(e,KA()).constant(e.constant())},Yn.apply(e,arguments)}function GP(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function _L(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function ML(e){return e<0?-e*e:e*e}function Yy(e){var t=e(un,un),n=1;function r(){return n===1?e(un,un):n===.5?e(_L,ML):e(GP(n),GP(1/n))}return t.exponent=function(a){return arguments.length?(n=+a,r()):n},$a(t)}function Xy(){var e=Yy(e0());return e.copy=function(){return el(e,Xy()).exponent(e.exponent())},Yn.apply(e,arguments),e}function OL(){return Xy.apply(null,arguments).exponent(.5)}function KP(e){return Math.sign(e)*e*e}function CL(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function QA(){var e=Uy(),t=[0,1],n=!1,r;function a(i){var s=CL(e(i));return isNaN(s)?r:n?Math.round(s):s}return a.invert=function(i){return e.invert(KP(i))},a.domain=function(i){return arguments.length?(e.domain(i),a):e.domain()},a.range=function(i){return arguments.length?(e.range((t=Array.from(i,Yp)).map(KP)),a):t.slice()},a.rangeRound=function(i){return a.range(i).round(!0)},a.round=function(i){return arguments.length?(n=!!i,a):n},a.clamp=function(i){return arguments.length?(e.clamp(i),a):e.clamp()},a.unknown=function(i){return arguments.length?(r=i,a):r},a.copy=function(){return QA(e.domain(),t).round(n).clamp(e.clamp()).unknown(r)},Yn.apply(a,arguments),$a(a)}function YA(){var e=[],t=[],n=[],r;function a(){var s=0,l=Math.max(1,t.length);for(n=new Array(l-1);++s<l;)n[s-1]=R$(e,s/l);return i}function i(s){return s==null||isNaN(s=+s)?r:t[Zs(n,s)]}return i.invertExtent=function(s){var l=t.indexOf(s);return l<0?[NaN,NaN]:[l>0?n[l-1]:e[0],l<n.length?n[l]:e[e.length-1]]},i.domain=function(s){if(!arguments.length)return e.slice();e=[];for(let l of s)l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(Ca),a()},i.range=function(s){return arguments.length?(t=Array.from(s),a()):t.slice()},i.unknown=function(s){return arguments.length?(r=s,i):r},i.quantiles=function(){return n.slice()},i.copy=function(){return YA().domain(e).range(t).unknown(r)},Yn.apply(i,arguments)}function XA(){var e=0,t=1,n=1,r=[.5],a=[0,1],i;function s(c){return c!=null&&c<=c?a[Zs(r,c,0,n)]:i}function l(){var c=-1;for(r=new Array(n);++c<n;)r[c]=((c+1)*t-(c-n)*e)/(n+1);return s}return s.domain=function(c){return arguments.length?([e,t]=c,e=+e,t=+t,l()):[e,t]},s.range=function(c){return arguments.length?(n=(a=Array.from(c)).length-1,l()):a.slice()},s.invertExtent=function(c){var f=a.indexOf(c);return f<0?[NaN,NaN]:f<1?[e,r[0]]:f>=n?[r[n-1],t]:[r[f-1],r[f]]},s.unknown=function(c){return arguments.length&&(i=c),s},s.thresholds=function(){return r.slice()},s.copy=function(){return XA().domain([e,t]).range(a).unknown(i)},Yn.apply($a(s),arguments)}function ZA(){var e=[.5],t=[0,1],n,r=1;function a(i){return i!=null&&i<=i?t[Zs(e,i,0,r)]:n}return a.domain=function(i){return arguments.length?(e=Array.from(i),r=Math.min(e.length,t.length-1),a):e.slice()},a.range=function(i){return arguments.length?(t=Array.from(i),r=Math.min(e.length,t.length-1),a):t.slice()},a.invertExtent=function(i){var s=t.indexOf(i);return[e[s-1],e[s]]},a.unknown=function(i){return arguments.length?(n=i,a):n},a.copy=function(){return ZA().domain(e).range(t).unknown(n)},Yn.apply(a,arguments)}const Nm=new Date,Em=new Date;function Ht(e,t,n,r){function a(i){return e(i=arguments.length===0?new Date:new Date(+i)),i}return a.floor=i=>(e(i=new Date(+i)),i),a.ceil=i=>(e(i=new Date(i-1)),t(i,1),e(i),i),a.round=i=>{const s=a(i),l=a.ceil(i);return i-s<l-i?s:l},a.offset=(i,s)=>(t(i=new Date(+i),s==null?1:Math.floor(s)),i),a.range=(i,s,l)=>{const c=[];if(i=a.ceil(i),l=l==null?1:Math.floor(l),!(i<s)||!(l>0))return c;let f;do c.push(f=new Date(+i)),t(i,l),e(i);while(f<i&&i<s);return c},a.filter=i=>Ht(s=>{if(s>=s)for(;e(s),!i(s);)s.setTime(s-1)},(s,l)=>{if(s>=s)if(l<0)for(;++l<=0;)for(;t(s,-1),!i(s););else for(;--l>=0;)for(;t(s,1),!i(s););}),n&&(a.count=(i,s)=>(Nm.setTime(+i),Em.setTime(+s),e(Nm),e(Em),Math.floor(n(Nm,Em))),a.every=i=>(i=Math.floor(i),!isFinite(i)||!(i>0)?null:i>1?a.filter(r?s=>r(s)%i===0:s=>a.count(0,s)%i===0):a)),a}const ec=Ht(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);ec.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?Ht(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):ec);ec.range;const $r=1e3,Vn=$r*60,Lr=Vn*60,Gr=Lr*24,Zy=Gr*7,QP=Gr*30,Tm=Gr*365,fo=Ht(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*$r)},(e,t)=>(t-e)/$r,e=>e.getUTCSeconds());fo.range;const Jy=Ht(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r)},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getMinutes());Jy.range;const eb=Ht(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Vn)},(e,t)=>(t-e)/Vn,e=>e.getUTCMinutes());eb.range;const tb=Ht(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*$r-e.getMinutes()*Vn)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getHours());tb.range;const nb=Ht(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*Lr)},(e,t)=>(t-e)/Lr,e=>e.getUTCHours());nb.range;const tl=Ht(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Vn)/Gr,e=>e.getDate()-1);tl.range;const t0=Ht(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gr,e=>e.getUTCDate()-1);t0.range;const JA=Ht(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gr,e=>Math.floor(e/Gr));JA.range;function wo(e){return Ht(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Vn)/Zy)}const n0=wo(0),tc=wo(1),kL=wo(2),NL=wo(3),Bi=wo(4),EL=wo(5),TL=wo(6);n0.range;tc.range;kL.range;NL.range;Bi.range;EL.range;TL.range;function Po(e){return Ht(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Zy)}const r0=Po(0),nc=Po(1),RL=Po(2),HL=Po(3),xi=Po(4),jL=Po(5),DL=Po(6);r0.range;nc.range;RL.range;HL.range;xi.range;jL.range;DL.range;const rb=Ht(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());rb.range;const ab=Ht(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());ab.range;const Kr=Ht(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Kr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Ht(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});Kr.range;const Qr=Ht(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Qr.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:Ht(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});Qr.range;function e_(e,t,n,r,a,i){const s=[[fo,1,$r],[fo,5,5*$r],[fo,15,15*$r],[fo,30,30*$r],[i,1,Vn],[i,5,5*Vn],[i,15,15*Vn],[i,30,30*Vn],[a,1,Lr],[a,3,3*Lr],[a,6,6*Lr],[a,12,12*Lr],[r,1,Gr],[r,2,2*Gr],[n,1,Zy],[t,1,QP],[t,3,3*QP],[e,1,Tm]];function l(f,h,d){const v=h<f;v&&([f,h]=[h,f]);const y=d&&typeof d.range=="function"?d:c(f,h,d),B=y?y.range(f,+h+1):[];return v?B.reverse():B}function c(f,h,d){const v=Math.abs(h-f)/d,y=$y(([,,b])=>b).right(s,v);if(y===s.length)return e.every(ug(f/Tm,h/Tm,d));if(y===0)return ec.every(Math.max(ug(f,h,d),1));const[B,I]=s[v/s[y-1][2]<s[y][2]/v?y-1:y];return B.every(I)}return[l,c]}const[$L,LL]=e_(Qr,ab,r0,JA,nb,eb),[FL,qL]=e_(Kr,rb,n0,tl,tb,Jy);function Rm(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Hm(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Vu(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function zL(e){var t=e.dateTime,n=e.date,r=e.time,a=e.periods,i=e.days,s=e.shortDays,l=e.months,c=e.shortMonths,f=Gu(a),h=Ku(a),d=Gu(i),v=Ku(i),y=Gu(s),B=Ku(s),I=Gu(l),b=Ku(l),S=Gu(c),W=Ku(c),A={a:V,A:D,b:Q,B:X,c:null,d:t4,e:t4,f:d8,g:w8,G:S8,H:p8,I:c8,j:f8,L:t_,m:h8,M:m8,p:E,q:F,Q:a4,s:o4,S:v8,u:g8,U:y8,V:b8,w:I8,W:B8,x:null,X:null,y:x8,Y:P8,Z:W8,"%":r4},O={a:J,A:ue,b:he,B:ge,c:null,d:n4,e:n4,f:O8,g:$8,G:F8,H:A8,I:_8,j:M8,L:r_,m:C8,M:k8,p:ye,q:fe,Q:a4,s:o4,S:N8,u:E8,U:T8,V:R8,w:H8,W:j8,x:null,X:null,y:D8,Y:L8,Z:q8,"%":r4},w={a:R,A:j,b:T,B:q,c:L,d:JP,e:JP,f:i8,g:ZP,G:XP,H:e4,I:e4,j:n8,L:o8,m:t8,M:r8,p:C,q:e8,Q:s8,s:l8,S:a8,u:QL,U:YL,V:XL,w:KL,W:ZL,x:K,X:U,y:ZP,Y:XP,Z:JL,"%":u8};A.x=_(n,A),A.X=_(r,A),A.c=_(t,A),O.x=_(n,O),O.X=_(r,O),O.c=_(t,O);function _(ne,de){return function(ce){var re=[],Re=-1,Pe=0,Ce=ne.length,Ae,Fe,je;for(ce instanceof Date||(ce=new Date(+ce));++Re<Ce;)ne.charCodeAt(Re)===37&&(re.push(ne.slice(Pe,Re)),(Fe=YP[Ae=ne.charAt(++Re)])!=null?Ae=ne.charAt(++Re):Fe=Ae==="e"?" ":"0",(je=de[Ae])&&(Ae=je(ce,Fe)),re.push(Ae),Pe=Re+1);return re.push(ne.slice(Pe,Re)),re.join("")}}function N(ne,de){return function(ce){var re=Vu(1900,void 0,1),Re=P(re,ne,ce+="",0),Pe,Ce;if(Re!=ce.length)return null;if("Q"in re)return new Date(re.Q);if("s"in re)return new Date(re.s*1e3+("L"in re?re.L:0));if(de&&!("Z"in re)&&(re.Z=0),"p"in re&&(re.H=re.H%12+re.p*12),re.m===void 0&&(re.m="q"in re?re.q:0),"V"in re){if(re.V<1||re.V>53)return null;"w"in re||(re.w=1),"Z"in re?(Pe=Hm(Vu(re.y,0,1)),Ce=Pe.getUTCDay(),Pe=Ce>4||Ce===0?nc.ceil(Pe):nc(Pe),Pe=t0.offset(Pe,(re.V-1)*7),re.y=Pe.getUTCFullYear(),re.m=Pe.getUTCMonth(),re.d=Pe.getUTCDate()+(re.w+6)%7):(Pe=Rm(Vu(re.y,0,1)),Ce=Pe.getDay(),Pe=Ce>4||Ce===0?tc.ceil(Pe):tc(Pe),Pe=tl.offset(Pe,(re.V-1)*7),re.y=Pe.getFullYear(),re.m=Pe.getMonth(),re.d=Pe.getDate()+(re.w+6)%7)}else("W"in re||"U"in re)&&("w"in re||(re.w="u"in re?re.u%7:"W"in re?1:0),Ce="Z"in re?Hm(Vu(re.y,0,1)).getUTCDay():Rm(Vu(re.y,0,1)).getDay(),re.m=0,re.d="W"in re?(re.w+6)%7+re.W*7-(Ce+5)%7:re.w+re.U*7-(Ce+6)%7);return"Z"in re?(re.H+=re.Z/100|0,re.M+=re.Z%100,Hm(re)):Rm(re)}}function P(ne,de,ce,re){for(var Re=0,Pe=de.length,Ce=ce.length,Ae,Fe;Re<Pe;){if(re>=Ce)return-1;if(Ae=de.charCodeAt(Re++),Ae===37){if(Ae=de.charAt(Re++),Fe=w[Ae in YP?de.charAt(Re++):Ae],!Fe||(re=Fe(ne,ce,re))<0)return-1}else if(Ae!=ce.charCodeAt(re++))return-1}return re}function C(ne,de,ce){var re=f.exec(de.slice(ce));return re?(ne.p=h.get(re[0].toLowerCase()),ce+re[0].length):-1}function R(ne,de,ce){var re=y.exec(de.slice(ce));return re?(ne.w=B.get(re[0].toLowerCase()),ce+re[0].length):-1}function j(ne,de,ce){var re=d.exec(de.slice(ce));return re?(ne.w=v.get(re[0].toLowerCase()),ce+re[0].length):-1}function T(ne,de,ce){var re=S.exec(de.slice(ce));return re?(ne.m=W.get(re[0].toLowerCase()),ce+re[0].length):-1}function q(ne,de,ce){var re=I.exec(de.slice(ce));return re?(ne.m=b.get(re[0].toLowerCase()),ce+re[0].length):-1}function L(ne,de,ce){return P(ne,t,de,ce)}function K(ne,de,ce){return P(ne,n,de,ce)}function U(ne,de,ce){return P(ne,r,de,ce)}function V(ne){return s[ne.getDay()]}function D(ne){return i[ne.getDay()]}function Q(ne){return c[ne.getMonth()]}function X(ne){return l[ne.getMonth()]}function E(ne){return a[+(ne.getHours()>=12)]}function F(ne){return 1+~~(ne.getMonth()/3)}function J(ne){return s[ne.getUTCDay()]}function ue(ne){return i[ne.getUTCDay()]}function he(ne){return c[ne.getUTCMonth()]}function ge(ne){return l[ne.getUTCMonth()]}function ye(ne){return a[+(ne.getUTCHours()>=12)]}function fe(ne){return 1+~~(ne.getUTCMonth()/3)}return{format:function(ne){var de=_(ne+="",A);return de.toString=function(){return ne},de},parse:function(ne){var de=N(ne+="",!1);return de.toString=function(){return ne},de},utcFormat:function(ne){var de=_(ne+="",O);return de.toString=function(){return ne},de},utcParse:function(ne){var de=N(ne+="",!0);return de.toString=function(){return ne},de}}}var YP={"-":"",_:" ",0:"0"},zt=/^\s*\d+/,UL=/^%/,VL=/[\\^$*+?|[\]().{}]/g;function Ve(e,t,n){var r=e<0?"-":"",a=(r?-e:e)+"",i=a.length;return r+(i<n?new Array(n-i+1).join(t)+a:a)}function GL(e){return e.replace(VL,"\\$&")}function Gu(e){return new RegExp("^(?:"+e.map(GL).join("|")+")","i")}function Ku(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function KL(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function QL(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function YL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function XL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function ZL(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function XP(e,t,n){var r=zt.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function ZP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function JL(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function e8(e,t,n){var r=zt.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function t8(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function JP(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function n8(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function e4(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function r8(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function a8(e,t,n){var r=zt.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function o8(e,t,n){var r=zt.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function i8(e,t,n){var r=zt.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function u8(e,t,n){var r=UL.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function s8(e,t,n){var r=zt.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function l8(e,t,n){var r=zt.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function t4(e,t){return Ve(e.getDate(),t,2)}function p8(e,t){return Ve(e.getHours(),t,2)}function c8(e,t){return Ve(e.getHours()%12||12,t,2)}function f8(e,t){return Ve(1+tl.count(Kr(e),e),t,3)}function t_(e,t){return Ve(e.getMilliseconds(),t,3)}function d8(e,t){return t_(e,t)+"000"}function h8(e,t){return Ve(e.getMonth()+1,t,2)}function m8(e,t){return Ve(e.getMinutes(),t,2)}function v8(e,t){return Ve(e.getSeconds(),t,2)}function g8(e){var t=e.getDay();return t===0?7:t}function y8(e,t){return Ve(n0.count(Kr(e)-1,e),t,2)}function n_(e){var t=e.getDay();return t>=4||t===0?Bi(e):Bi.ceil(e)}function b8(e,t){return e=n_(e),Ve(Bi.count(Kr(e),e)+(Kr(e).getDay()===4),t,2)}function I8(e){return e.getDay()}function B8(e,t){return Ve(tc.count(Kr(e)-1,e),t,2)}function x8(e,t){return Ve(e.getFullYear()%100,t,2)}function w8(e,t){return e=n_(e),Ve(e.getFullYear()%100,t,2)}function P8(e,t){return Ve(e.getFullYear()%1e4,t,4)}function S8(e,t){var n=e.getDay();return e=n>=4||n===0?Bi(e):Bi.ceil(e),Ve(e.getFullYear()%1e4,t,4)}function W8(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Ve(t/60|0,"0",2)+Ve(t%60,"0",2)}function n4(e,t){return Ve(e.getUTCDate(),t,2)}function A8(e,t){return Ve(e.getUTCHours(),t,2)}function _8(e,t){return Ve(e.getUTCHours()%12||12,t,2)}function M8(e,t){return Ve(1+t0.count(Qr(e),e),t,3)}function r_(e,t){return Ve(e.getUTCMilliseconds(),t,3)}function O8(e,t){return r_(e,t)+"000"}function C8(e,t){return Ve(e.getUTCMonth()+1,t,2)}function k8(e,t){return Ve(e.getUTCMinutes(),t,2)}function N8(e,t){return Ve(e.getUTCSeconds(),t,2)}function E8(e){var t=e.getUTCDay();return t===0?7:t}function T8(e,t){return Ve(r0.count(Qr(e)-1,e),t,2)}function a_(e){var t=e.getUTCDay();return t>=4||t===0?xi(e):xi.ceil(e)}function R8(e,t){return e=a_(e),Ve(xi.count(Qr(e),e)+(Qr(e).getUTCDay()===4),t,2)}function H8(e){return e.getUTCDay()}function j8(e,t){return Ve(nc.count(Qr(e)-1,e),t,2)}function D8(e,t){return Ve(e.getUTCFullYear()%100,t,2)}function $8(e,t){return e=a_(e),Ve(e.getUTCFullYear()%100,t,2)}function L8(e,t){return Ve(e.getUTCFullYear()%1e4,t,4)}function F8(e,t){var n=e.getUTCDay();return e=n>=4||n===0?xi(e):xi.ceil(e),Ve(e.getUTCFullYear()%1e4,t,4)}function q8(){return"+0000"}function r4(){return"%"}function a4(e){return+e}function o4(e){return Math.floor(+e/1e3)}var ti,o_,i_;z8({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function z8(e){return ti=zL(e),o_=ti.format,ti.parse,i_=ti.utcFormat,ti.utcParse,ti}function U8(e){return new Date(e)}function V8(e){return e instanceof Date?+e:+new Date(+e)}function ob(e,t,n,r,a,i,s,l,c,f){var h=Uy(),d=h.invert,v=h.domain,y=f(".%L"),B=f(":%S"),I=f("%I:%M"),b=f("%I %p"),S=f("%a %d"),W=f("%b %d"),A=f("%B"),O=f("%Y");function w(_){return(c(_)<_?y:l(_)<_?B:s(_)<_?I:i(_)<_?b:r(_)<_?a(_)<_?S:W:n(_)<_?A:O)(_)}return h.invert=function(_){return new Date(d(_))},h.domain=function(_){return arguments.length?v(Array.from(_,V8)):v().map(U8)},h.ticks=function(_){var N=v();return e(N[0],N[N.length-1],_??10)},h.tickFormat=function(_,N){return N==null?w:f(N)},h.nice=function(_){var N=v();return(!_||typeof _.range!="function")&&(_=t(N[0],N[N.length-1],_??10)),_?v(VA(N,_)):h},h.copy=function(){return el(h,ob(e,t,n,r,a,i,s,l,c,f))},h}function G8(){return Yn.apply(ob(FL,qL,Kr,rb,n0,tl,tb,Jy,fo,o_).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function K8(){return Yn.apply(ob($L,LL,Qr,ab,r0,t0,nb,eb,fo,i_).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function a0(){var e=0,t=1,n,r,a,i,s=un,l=!1,c;function f(d){return d==null||isNaN(d=+d)?c:s(a===0?.5:(d=(i(d)-n)*a,l?Math.max(0,Math.min(1,d)):d))}f.domain=function(d){return arguments.length?([e,t]=d,n=i(e=+e),r=i(t=+t),a=n===r?0:1/(r-n),f):[e,t]},f.clamp=function(d){return arguments.length?(l=!!d,f):l},f.interpolator=function(d){return arguments.length?(s=d,f):s};function h(d){return function(v){var y,B;return arguments.length?([y,B]=v,s=d(y,B),f):[s(0),s(1)]}}return f.range=h(Zi),f.rangeRound=h(zy),f.unknown=function(d){return arguments.length?(c=d,f):c},function(d){return i=d,n=d(e),r=d(t),a=n===r?0:1/(r-n),f}}function La(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function u_(){var e=$a(a0()(un));return e.copy=function(){return La(e,u_())},Jr.apply(e,arguments)}function s_(){var e=Ky(a0()).domain([1,10]);return e.copy=function(){return La(e,s_()).base(e.base())},Jr.apply(e,arguments)}function l_(){var e=Qy(a0());return e.copy=function(){return La(e,l_()).constant(e.constant())},Jr.apply(e,arguments)}function ib(){var e=Yy(a0());return e.copy=function(){return La(e,ib()).exponent(e.exponent())},Jr.apply(e,arguments)}function Q8(){return ib.apply(null,arguments).exponent(.5)}function p_(){var e=[],t=un;function n(r){if(r!=null&&!isNaN(r=+r))return t((Zs(e,r,1)-1)/(e.length-1))}return n.domain=function(r){if(!arguments.length)return e.slice();e=[];for(let a of r)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Ca),n},n.interpolator=function(r){return arguments.length?(t=r,n):t},n.range=function(){return e.map((r,a)=>t(a/(e.length-1)))},n.quantiles=function(r){return Array.from({length:r+1},(a,i)=>T$(e,i/r))},n.copy=function(){return p_(t).domain(e)},Jr.apply(n,arguments)}function o0(){var e=0,t=.5,n=1,r=1,a,i,s,l,c,f=un,h,d=!1,v;function y(I){return isNaN(I=+I)?v:(I=.5+((I=+h(I))-i)*(r*I<r*i?l:c),f(d?Math.max(0,Math.min(1,I)):I))}y.domain=function(I){return arguments.length?([e,t,n]=I,a=h(e=+e),i=h(t=+t),s=h(n=+n),l=a===i?0:.5/(i-a),c=i===s?0:.5/(s-i),r=i<a?-1:1,y):[e,t,n]},y.clamp=function(I){return arguments.length?(d=!!I,y):d},y.interpolator=function(I){return arguments.length?(f=I,y):f};function B(I){return function(b){var S,W,A;return arguments.length?([S,W,A]=b,f=uL(I,[S,W,A]),y):[f(0),f(.5),f(1)]}}return y.range=B(Zi),y.rangeRound=B(zy),y.unknown=function(I){return arguments.length?(v=I,y):v},function(I){return h=I,a=I(e),i=I(t),s=I(n),l=a===i?0:.5/(i-a),c=i===s?0:.5/(s-i),r=i<a?-1:1,y}}function c_(){var e=$a(o0()(un));return e.copy=function(){return La(e,c_())},Jr.apply(e,arguments)}function f_(){var e=Ky(o0()).domain([.1,1,10]);return e.copy=function(){return La(e,f_()).base(e.base())},Jr.apply(e,arguments)}function d_(){var e=Qy(o0());return e.copy=function(){return La(e,d_()).constant(e.constant())},Jr.apply(e,arguments)}function ub(){var e=Yy(o0());return e.copy=function(){return La(e,ub()).exponent(e.exponent())},Jr.apply(e,arguments)}function Y8(){return ub.apply(null,arguments).exponent(.5)}const i4=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:Is,scaleDiverging:c_,scaleDivergingLog:f_,scaleDivergingPow:ub,scaleDivergingSqrt:Y8,scaleDivergingSymlog:d_,scaleIdentity:UA,scaleImplicit:sg,scaleLinear:Jp,scaleLog:GA,scaleOrdinal:Ly,scalePoint:as,scalePow:Xy,scaleQuantile:YA,scaleQuantize:XA,scaleRadial:QA,scaleSequential:u_,scaleSequentialLog:s_,scaleSequentialPow:ib,scaleSequentialQuantile:p_,scaleSequentialSqrt:Q8,scaleSequentialSymlog:l_,scaleSqrt:OL,scaleSymlog:KA,scaleThreshold:ZA,scaleTime:G8,scaleUtc:K8,tickFormat:zA},Symbol.toStringTag,{value:"Module"}));var jm,u4;function i0(){if(u4)return jm;u4=1;var e=Ki();function t(n,r,a){for(var i=-1,s=n.length;++i<s;){var l=n[i],c=r(l);if(c!=null&&(f===void 0?c===c&&!e(c):a(c,f)))var f=c,h=l}return h}return jm=t,jm}var Dm,s4;function h_(){if(s4)return Dm;s4=1;function e(t,n){return t>n}return Dm=e,Dm}var $m,l4;function X8(){if(l4)return $m;l4=1;var e=i0(),t=h_(),n=Xi();function r(a){return a&&a.length?e(a,n,t):void 0}return $m=r,$m}var Z8=X8();const Aa=Xe(Z8);var Lm,p4;function m_(){if(p4)return Lm;p4=1;function e(t,n){return t<n}return Lm=e,Lm}var Fm,c4;function J8(){if(c4)return Fm;c4=1;var e=i0(),t=m_(),n=Xi();function r(a){return a&&a.length?e(a,n,t):void 0}return Fm=r,Fm}var e7=J8();const u0=Xe(e7);var qm,f4;function t7(){if(f4)return qm;f4=1;var e=wy(),t=Ar(),n=PA(),r=yn();function a(i,s){var l=r(i)?e:n;return l(i,t(s,3))}return qm=a,qm}var zm,d4;function n7(){if(d4)return zm;d4=1;var e=xA(),t=t7();function n(r,a){return e(t(r,a),1)}return zm=n,zm}var r7=n7();const a7=Xe(r7);var Um,h4;function o7(){if(h4)return Um;h4=1;var e=Ty();function t(n,r){return e(n,r)}return Um=t,Um}var i7=o7();const Ta=Xe(i7);var Ji=1e9,u7={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},lb,ct=!0,Gn="[DecimalError] ",go=Gn+"Invalid argument: ",sb=Gn+"Exponent out of range: ",eu=Math.floor,so=Math.pow,s7=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,_n,Ft=1e7,st=7,v_=9007199254740991,rc=eu(v_/st),Ie={};Ie.absoluteValue=Ie.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};Ie.comparedTo=Ie.cmp=function(e){var t,n,r,a,i=this;if(e=new i.constructor(e),i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;for(r=i.d.length,a=e.d.length,t=0,n=r<a?r:a;t<n;++t)if(i.d[t]!==e.d[t])return i.d[t]>e.d[t]^i.s<0?1:-1;return r===a?0:r>a^i.s<0?1:-1};Ie.decimalPlaces=Ie.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*st;if(t=e.d[t],t)for(;t%10==0;t/=10)n--;return n<0?0:n};Ie.dividedBy=Ie.div=function(e){return Vr(this,new this.constructor(e))};Ie.dividedToIntegerBy=Ie.idiv=function(e){var t=this,n=t.constructor;return tt(Vr(t,new n(e),0,1),n.precision)};Ie.equals=Ie.eq=function(e){return!this.cmp(e)};Ie.exponent=function(){return Ot(this)};Ie.greaterThan=Ie.gt=function(e){return this.cmp(e)>0};Ie.greaterThanOrEqualTo=Ie.gte=function(e){return this.cmp(e)>=0};Ie.isInteger=Ie.isint=function(){return this.e>this.d.length-2};Ie.isNegative=Ie.isneg=function(){return this.s<0};Ie.isPositive=Ie.ispos=function(){return this.s>0};Ie.isZero=function(){return this.s===0};Ie.lessThan=Ie.lt=function(e){return this.cmp(e)<0};Ie.lessThanOrEqualTo=Ie.lte=function(e){return this.cmp(e)<1};Ie.logarithm=Ie.log=function(e){var t,n=this,r=n.constructor,a=r.precision,i=a+5;if(e===void 0)e=new r(10);else if(e=new r(e),e.s<1||e.eq(_n))throw Error(Gn+"NaN");if(n.s<1)throw Error(Gn+(n.s?"NaN":"-Infinity"));return n.eq(_n)?new r(0):(ct=!1,t=Vr(Ss(n,i),Ss(e,i),i),ct=!0,tt(t,a))};Ie.minus=Ie.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?b_(t,e):g_(t,(e.s=-e.s,e))};Ie.modulo=Ie.mod=function(e){var t,n=this,r=n.constructor,a=r.precision;if(e=new r(e),!e.s)throw Error(Gn+"NaN");return n.s?(ct=!1,t=Vr(n,e,0,1).times(e),ct=!0,n.minus(t)):tt(new r(n),a)};Ie.naturalExponential=Ie.exp=function(){return y_(this)};Ie.naturalLogarithm=Ie.ln=function(){return Ss(this)};Ie.negated=Ie.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};Ie.plus=Ie.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?g_(t,e):b_(t,(e.s=-e.s,e))};Ie.precision=Ie.sd=function(e){var t,n,r,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(go+e);if(t=Ot(a)+1,r=a.d.length-1,n=r*st+1,r=a.d[r],r){for(;r%10==0;r/=10)n--;for(r=a.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};Ie.squareRoot=Ie.sqrt=function(){var e,t,n,r,a,i,s,l=this,c=l.constructor;if(l.s<1){if(!l.s)return new c(0);throw Error(Gn+"NaN")}for(e=Ot(l),ct=!1,a=Math.sqrt(+l),a==0||a==1/0?(t=br(l.d),(t.length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=eu((e+1)/2)-(e<0||e%2),a==1/0?t="5e"+e:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),r=new c(t)):r=new c(a.toString()),n=c.precision,a=s=n+3;;)if(i=r,r=i.plus(Vr(l,i,s+2)).times(.5),br(i.d).slice(0,s)===(t=br(r.d)).slice(0,s)){if(t=t.slice(s-3,s+1),a==s&&t=="4999"){if(tt(i,n+1,0),i.times(i).eq(l)){r=i;break}}else if(t!="9999")break;s+=4}return ct=!0,tt(r,n)};Ie.times=Ie.mul=function(e){var t,n,r,a,i,s,l,c,f,h=this,d=h.constructor,v=h.d,y=(e=new d(e)).d;if(!h.s||!e.s)return new d(0);for(e.s*=h.s,n=h.e+e.e,c=v.length,f=y.length,c<f&&(i=v,v=y,y=i,s=c,c=f,f=s),i=[],s=c+f,r=s;r--;)i.push(0);for(r=f;--r>=0;){for(t=0,a=c+r;a>r;)l=i[a]+y[r]*v[a-r-1]+t,i[a--]=l%Ft|0,t=l/Ft|0;i[a]=(i[a]+t)%Ft|0}for(;!i[--s];)i.pop();return t?++n:i.shift(),e.d=i,e.e=n,ct?tt(e,d.precision):e};Ie.toDecimalPlaces=Ie.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(Pr(e,0,Ji),t===void 0?t=r.rounding:Pr(t,0,8),tt(n,e+Ot(n)+1,t))};Ie.toExponential=function(e,t){var n,r=this,a=r.constructor;return e===void 0?n=bo(r,!0):(Pr(e,0,Ji),t===void 0?t=a.rounding:Pr(t,0,8),r=tt(new a(r),e+1,t),n=bo(r,!0,e+1)),n};Ie.toFixed=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?bo(a):(Pr(e,0,Ji),t===void 0?t=i.rounding:Pr(t,0,8),r=tt(new i(a),e+Ot(a)+1,t),n=bo(r.abs(),!1,e+Ot(r)+1),a.isneg()&&!a.isZero()?"-"+n:n)};Ie.toInteger=Ie.toint=function(){var e=this,t=e.constructor;return tt(new t(e),Ot(e)+1,t.rounding)};Ie.toNumber=function(){return+this};Ie.toPower=Ie.pow=function(e){var t,n,r,a,i,s,l=this,c=l.constructor,f=12,h=+(e=new c(e));if(!e.s)return new c(_n);if(l=new c(l),!l.s){if(e.s<1)throw Error(Gn+"Infinity");return l}if(l.eq(_n))return l;if(r=c.precision,e.eq(_n))return tt(l,r);if(t=e.e,n=e.d.length-1,s=t>=n,i=l.s,s){if((n=h<0?-h:h)<=v_){for(a=new c(_n),t=Math.ceil(r/st+4),ct=!1;n%2&&(a=a.times(l),v4(a.d,t)),n=eu(n/2),n!==0;)l=l.times(l),v4(l.d,t);return ct=!0,e.s<0?new c(_n).div(a):tt(a,r)}}else if(i<0)throw Error(Gn+"NaN");return i=i<0&&e.d[Math.max(t,n)]&1?-1:1,l.s=1,ct=!1,a=e.times(Ss(l,r+f)),ct=!0,a=y_(a),a.s=i,a};Ie.toPrecision=function(e,t){var n,r,a=this,i=a.constructor;return e===void 0?(n=Ot(a),r=bo(a,n<=i.toExpNeg||n>=i.toExpPos)):(Pr(e,1,Ji),t===void 0?t=i.rounding:Pr(t,0,8),a=tt(new i(a),e,t),n=Ot(a),r=bo(a,e<=n||n<=i.toExpNeg,e)),r};Ie.toSignificantDigits=Ie.tosd=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(Pr(e,1,Ji),t===void 0?t=r.rounding:Pr(t,0,8)),tt(new r(n),e,t)};Ie.toString=Ie.valueOf=Ie.val=Ie.toJSON=Ie[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=Ot(e),n=e.constructor;return bo(e,t<=n.toExpNeg||t>=n.toExpPos)};function g_(e,t){var n,r,a,i,s,l,c,f,h=e.constructor,d=h.precision;if(!e.s||!t.s)return t.s||(t=new h(e)),ct?tt(t,d):t;if(c=e.d,f=t.d,s=e.e,a=t.e,c=c.slice(),i=s-a,i){for(i<0?(r=c,i=-i,l=f.length):(r=f,a=s,l=c.length),s=Math.ceil(d/st),l=s>l?s+1:l+1,i>l&&(i=l,r.length=1),r.reverse();i--;)r.push(0);r.reverse()}for(l=c.length,i=f.length,l-i<0&&(i=l,r=f,f=c,c=r),n=0;i;)n=(c[--i]=c[i]+f[i]+n)/Ft|0,c[i]%=Ft;for(n&&(c.unshift(n),++a),l=c.length;c[--l]==0;)c.pop();return t.d=c,t.e=a,ct?tt(t,d):t}function Pr(e,t,n){if(e!==~~e||e<t||e>n)throw Error(go+e)}function br(e){var t,n,r,a=e.length-1,i="",s=e[0];if(a>0){for(i+=s,t=1;t<a;t++)r=e[t]+"",n=st-r.length,n&&(i+=Sa(n)),i+=r;s=e[t],r=s+"",n=st-r.length,n&&(i+=Sa(n))}else if(s===0)return"0";for(;s%10===0;)s/=10;return i+s}var Vr=(function(){function e(r,a){var i,s=0,l=r.length;for(r=r.slice();l--;)i=r[l]*a+s,r[l]=i%Ft|0,s=i/Ft|0;return s&&r.unshift(s),r}function t(r,a,i,s){var l,c;if(i!=s)c=i>s?1:-1;else for(l=c=0;l<i;l++)if(r[l]!=a[l]){c=r[l]>a[l]?1:-1;break}return c}function n(r,a,i){for(var s=0;i--;)r[i]-=s,s=r[i]<a[i]?1:0,r[i]=s*Ft+r[i]-a[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,a,i,s){var l,c,f,h,d,v,y,B,I,b,S,W,A,O,w,_,N,P,C=r.constructor,R=r.s==a.s?1:-1,j=r.d,T=a.d;if(!r.s)return new C(r);if(!a.s)throw Error(Gn+"Division by zero");for(c=r.e-a.e,N=T.length,w=j.length,y=new C(R),B=y.d=[],f=0;T[f]==(j[f]||0);)++f;if(T[f]>(j[f]||0)&&--c,i==null?W=i=C.precision:s?W=i+(Ot(r)-Ot(a))+1:W=i,W<0)return new C(0);if(W=W/st+2|0,f=0,N==1)for(h=0,T=T[0],W++;(f<w||h)&&W--;f++)A=h*Ft+(j[f]||0),B[f]=A/T|0,h=A%T|0;else{for(h=Ft/(T[0]+1)|0,h>1&&(T=e(T,h),j=e(j,h),N=T.length,w=j.length),O=N,I=j.slice(0,N),b=I.length;b<N;)I[b++]=0;P=T.slice(),P.unshift(0),_=T[0],T[1]>=Ft/2&&++_;do h=0,l=t(T,I,N,b),l<0?(S=I[0],N!=b&&(S=S*Ft+(I[1]||0)),h=S/_|0,h>1?(h>=Ft&&(h=Ft-1),d=e(T,h),v=d.length,b=I.length,l=t(d,I,v,b),l==1&&(h--,n(d,N<v?P:T,v))):(h==0&&(l=h=1),d=T.slice()),v=d.length,v<b&&d.unshift(0),n(I,d,b),l==-1&&(b=I.length,l=t(T,I,N,b),l<1&&(h++,n(I,N<b?P:T,b))),b=I.length):l===0&&(h++,I=[0]),B[f++]=h,l&&I[0]?I[b++]=j[O]||0:(I=[j[O]],b=1);while((O++<w||I[0]!==void 0)&&W--)}return B[0]||B.shift(),y.e=c,tt(y,s?i+Ot(y)+1:i)}})();function y_(e,t){var n,r,a,i,s,l,c=0,f=0,h=e.constructor,d=h.precision;if(Ot(e)>16)throw Error(sb+Ot(e));if(!e.s)return new h(_n);for(ct=!1,l=d,s=new h(.03125);e.abs().gte(.1);)e=e.times(s),f+=5;for(r=Math.log(so(2,f))/Math.LN10*2+5|0,l+=r,n=a=i=new h(_n),h.precision=l;;){if(a=tt(a.times(e),l),n=n.times(++c),s=i.plus(Vr(a,n,l)),br(s.d).slice(0,l)===br(i.d).slice(0,l)){for(;f--;)i=tt(i.times(i),l);return h.precision=d,t==null?(ct=!0,tt(i,d)):i}i=s}}function Ot(e){for(var t=e.e*st,n=e.d[0];n>=10;n/=10)t++;return t}function Vm(e,t,n){if(t>e.LN10.sd())throw ct=!0,n&&(e.precision=n),Error(Gn+"LN10 precision limit exceeded");return tt(new e(e.LN10),t)}function Sa(e){for(var t="";e--;)t+="0";return t}function Ss(e,t){var n,r,a,i,s,l,c,f,h,d=1,v=10,y=e,B=y.d,I=y.constructor,b=I.precision;if(y.s<1)throw Error(Gn+(y.s?"NaN":"-Infinity"));if(y.eq(_n))return new I(0);if(t==null?(ct=!1,f=b):f=t,y.eq(10))return t==null&&(ct=!0),Vm(I,f);if(f+=v,I.precision=f,n=br(B),r=n.charAt(0),i=Ot(y),Math.abs(i)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)y=y.times(e),n=br(y.d),r=n.charAt(0),d++;i=Ot(y),r>1?(y=new I("0."+n),i++):y=new I(r+"."+n.slice(1))}else return c=Vm(I,f+2,b).times(i+""),y=Ss(new I(r+"."+n.slice(1)),f-v).plus(c),I.precision=b,t==null?(ct=!0,tt(y,b)):y;for(l=s=y=Vr(y.minus(_n),y.plus(_n),f),h=tt(y.times(y),f),a=3;;){if(s=tt(s.times(h),f),c=l.plus(Vr(s,new I(a),f)),br(c.d).slice(0,f)===br(l.d).slice(0,f))return l=l.times(2),i!==0&&(l=l.plus(Vm(I,f+2,b).times(i+""))),l=Vr(l,new I(d),f),I.precision=b,t==null?(ct=!0,tt(l,b)):l;l=c,a+=2}}function m4(e,t){var n,r,a;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;)++r;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(r,a),t){if(a-=r,n=n-r-1,e.e=eu(n/st),e.d=[],r=(n+1)%st,n<0&&(r+=st),r<a){for(r&&e.d.push(+t.slice(0,r)),a-=st;r<a;)e.d.push(+t.slice(r,r+=st));t=t.slice(r),r=st-t.length}else r-=a;for(;r--;)t+="0";if(e.d.push(+t),ct&&(e.e>rc||e.e<-rc))throw Error(sb+n)}else e.s=0,e.e=0,e.d=[0];return e}function tt(e,t,n){var r,a,i,s,l,c,f,h,d=e.d;for(s=1,i=d[0];i>=10;i/=10)s++;if(r=t-s,r<0)r+=st,a=t,f=d[h=0];else{if(h=Math.ceil((r+1)/st),i=d.length,h>=i)return e;for(f=i=d[h],s=1;i>=10;i/=10)s++;r%=st,a=r-st+s}if(n!==void 0&&(i=so(10,s-a-1),l=f/i%10|0,c=t<0||d[h+1]!==void 0||f%i,c=n<4?(l||c)&&(n==0||n==(e.s<0?3:2)):l>5||l==5&&(n==4||c||n==6&&(r>0?a>0?f/so(10,s-a):0:d[h-1])%10&1||n==(e.s<0?8:7))),t<1||!d[0])return c?(i=Ot(e),d.length=1,t=t-i-1,d[0]=so(10,(st-t%st)%st),e.e=eu(-t/st)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(r==0?(d.length=h,i=1,h--):(d.length=h+1,i=so(10,st-r),d[h]=a>0?(f/so(10,s-a)%so(10,a)|0)*i:0),c)for(;;)if(h==0){(d[0]+=i)==Ft&&(d[0]=1,++e.e);break}else{if(d[h]+=i,d[h]!=Ft)break;d[h--]=0,i=1}for(r=d.length;d[--r]===0;)d.pop();if(ct&&(e.e>rc||e.e<-rc))throw Error(sb+Ot(e));return e}function b_(e,t){var n,r,a,i,s,l,c,f,h,d,v=e.constructor,y=v.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new v(e),ct?tt(t,y):t;if(c=e.d,d=t.d,r=t.e,f=e.e,c=c.slice(),s=f-r,s){for(h=s<0,h?(n=c,s=-s,l=d.length):(n=d,r=f,l=c.length),a=Math.max(Math.ceil(y/st),l)+2,s>a&&(s=a,n.length=1),n.reverse(),a=s;a--;)n.push(0);n.reverse()}else{for(a=c.length,l=d.length,h=a<l,h&&(l=a),a=0;a<l;a++)if(c[a]!=d[a]){h=c[a]<d[a];break}s=0}for(h&&(n=c,c=d,d=n,t.s=-t.s),l=c.length,a=d.length-l;a>0;--a)c[l++]=0;for(a=d.length;a>s;){if(c[--a]<d[a]){for(i=a;i&&c[--i]===0;)c[i]=Ft-1;--c[i],c[a]+=Ft}c[a]-=d[a]}for(;c[--l]===0;)c.pop();for(;c[0]===0;c.shift())--r;return c[0]?(t.d=c,t.e=r,ct?tt(t,y):t):new v(0)}function bo(e,t,n){var r,a=Ot(e),i=br(e.d),s=i.length;return t?(n&&(r=n-s)>0?i=i.charAt(0)+"."+i.slice(1)+Sa(r):s>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(a<0?"e":"e+")+a):a<0?(i="0."+Sa(-a-1)+i,n&&(r=n-s)>0&&(i+=Sa(r))):a>=s?(i+=Sa(a+1-s),n&&(r=n-a-1)>0&&(i=i+"."+Sa(r))):((r=a+1)<s&&(i=i.slice(0,r)+"."+i.slice(r)),n&&(r=n-s)>0&&(a+1===s&&(i+="."),i+=Sa(r))),e.s<0?"-"+i:i}function v4(e,t){if(e.length>t)return e.length=t,!0}function I_(e){var t,n,r;function a(i){var s=this;if(!(s instanceof a))return new a(i);if(s.constructor=a,i instanceof a){s.s=i.s,s.e=i.e,s.d=(i=i.d)?i.slice():i;return}if(typeof i=="number"){if(i*0!==0)throw Error(go+i);if(i>0)s.s=1;else if(i<0)i=-i,s.s=-1;else{s.s=0,s.e=0,s.d=[0];return}if(i===~~i&&i<1e7){s.e=0,s.d=[i];return}return m4(s,i.toString())}else if(typeof i!="string")throw Error(go+i);if(i.charCodeAt(0)===45?(i=i.slice(1),s.s=-1):s.s=1,s7.test(i))m4(s,i);else throw Error(go+i)}if(a.prototype=Ie,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=I_,a.config=a.set=l7,e===void 0&&(e={}),e)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return a.config(e),a}function l7(e){if(!e||typeof e!="object")throw Error(Gn+"Object expected");var t,n,r,a=["precision",1,Ji,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if((r=e[n=a[t]])!==void 0)if(eu(r)===r&&r>=a[t+1]&&r<=a[t+2])this[n]=r;else throw Error(go+n+": "+r);if((r=e[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(go+n+": "+r);return this}var lb=I_(u7);_n=new lb(1);const et=lb;function p7(e){return h7(e)||d7(e)||f7(e)||c7()}function c7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f7(e,t){if(e){if(typeof e=="string")return fg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fg(e,t)}}function d7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function h7(e){if(Array.isArray(e))return fg(e)}function fg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m7=function(t){return t},B_={},x_=function(t){return t===B_},g4=function(t){return function n(){return arguments.length===0||arguments.length===1&&x_(arguments.length<=0?void 0:arguments[0])?n:t.apply(void 0,arguments)}},v7=function e(t,n){return t===1?n:g4(function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.filter(function(l){return l!==B_}).length;return s>=t?n.apply(void 0,a):e(t-s,g4(function(){for(var l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];var h=a.map(function(d){return x_(d)?c.shift():d});return n.apply(void 0,p7(h).concat(c))}))})},s0=function(t){return v7(t.length,t)},dg=function(t,n){for(var r=[],a=t;a<n;++a)r[a-t]=a;return r},g7=s0(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(n){return t[n]}).map(e)}),y7=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return m7;var a=n.reverse(),i=a[0],s=a.slice(1);return function(){return s.reduce(function(l,c){return c(l)},i.apply(void 0,arguments))}},hg=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},w_=function(t){var n=null,r=null;return function(){for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return n&&i.every(function(l,c){return l===n[c]})||(n=i,r=t.apply(void 0,i)),r}};function b7(e){var t;return e===0?t=1:t=Math.floor(new et(e).abs().log(10).toNumber())+1,t}function I7(e,t,n){for(var r=new et(e),a=0,i=[];r.lt(t)&&a<1e5;)i.push(r.toNumber()),r=r.add(n),a++;return i}var B7=s0(function(e,t,n){var r=+e,a=+t;return r+n*(a-r)}),x7=s0(function(e,t,n){var r=t-+e;return r=r||1/0,(n-e)/r}),w7=s0(function(e,t,n){var r=t-+e;return r=r||1/0,Math.max(0,Math.min(1,(n-e)/r))});const l0={rangeStep:I7,getDigitCount:b7,interpolateNumber:B7,uninterpolateNumber:x7,uninterpolateTruncation:w7};function mg(e){return W7(e)||S7(e)||P_(e)||P7()}function P7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S7(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function W7(e){if(Array.isArray(e))return vg(e)}function Ws(e,t){return M7(e)||_7(e,t)||P_(e,t)||A7()}function A7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P_(e,t){if(e){if(typeof e=="string")return vg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vg(e,t)}}function vg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _7(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,a=!1,i=void 0;try{for(var s=e[Symbol.iterator](),l;!(r=(l=s.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(c){a=!0,i=c}finally{try{!r&&s.return!=null&&s.return()}finally{if(a)throw i}}return n}}function M7(e){if(Array.isArray(e))return e}function S_(e){var t=Ws(e,2),n=t[0],r=t[1],a=n,i=r;return n>r&&(a=r,i=n),[a,i]}function W_(e,t,n){if(e.lte(0))return new et(0);var r=l0.getDigitCount(e.toNumber()),a=new et(10).pow(r),i=e.div(a),s=r!==1?.05:.1,l=new et(Math.ceil(i.div(s).toNumber())).add(n).mul(s),c=l.mul(a);return t?c:new et(Math.ceil(c))}function O7(e,t,n){var r=1,a=new et(e);if(!a.isint()&&n){var i=Math.abs(e);i<1?(r=new et(10).pow(l0.getDigitCount(e)-1),a=new et(Math.floor(a.div(r).toNumber())).mul(r)):i>1&&(a=new et(Math.floor(e)))}else e===0?a=new et(Math.floor((t-1)/2)):n||(a=new et(Math.floor(e)));var s=Math.floor((t-1)/2),l=y7(g7(function(c){return a.add(new et(c-s).mul(r)).toNumber()}),dg);return l(0,t)}function A_(e,t,n,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(n-1)))return{step:new et(0),tickMin:new et(0),tickMax:new et(0)};var i=W_(new et(t).sub(e).div(n-1),r,a),s;e<=0&&t>=0?s=new et(0):(s=new et(e).add(t).div(2),s=s.sub(new et(s).mod(i)));var l=Math.ceil(s.sub(e).div(i).toNumber()),c=Math.ceil(new et(t).sub(s).div(i).toNumber()),f=l+c+1;return f>n?A_(e,t,n,r,a+1):(f<n&&(c=t>0?c+(n-f):c,l=t>0?l:l+(n-f)),{step:i,tickMin:s.sub(new et(l).mul(i)),tickMax:s.add(new et(c).mul(i))})}function C7(e){var t=Ws(e,2),n=t[0],r=t[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(a,2),l=S_([n,r]),c=Ws(l,2),f=c[0],h=c[1];if(f===-1/0||h===1/0){var d=h===1/0?[f].concat(mg(dg(0,a-1).map(function(){return 1/0}))):[].concat(mg(dg(0,a-1).map(function(){return-1/0})),[h]);return n>r?hg(d):d}if(f===h)return O7(f,a,i);var v=A_(f,h,s,i),y=v.step,B=v.tickMin,I=v.tickMax,b=l0.rangeStep(B,I.add(new et(.1).mul(y)),y);return n>r?hg(b):b}function k7(e,t){var n=Ws(e,2),r=n[0],a=n[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=S_([r,a]),l=Ws(s,2),c=l[0],f=l[1];if(c===-1/0||f===1/0)return[r,a];if(c===f)return[c];var h=Math.max(t,2),d=W_(new et(f).sub(c).div(h-1),i,0),v=[].concat(mg(l0.rangeStep(new et(c),new et(f).sub(new et(.99).mul(d)),d)),[f]);return r>a?hg(v):v}var N7=w_(C7),E7=w_(k7),T7="Invariant failed";function Io(e,t){throw new Error(T7)}var R7=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function wi(e){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wi(e)}function ac(){return ac=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ac.apply(this,arguments)}function H7(e,t){return L7(e)||$7(e,t)||D7(e,t)||j7()}function j7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D7(e,t){if(e){if(typeof e=="string")return y4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y4(e,t)}}function y4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $7(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function L7(e){if(Array.isArray(e))return e}function F7(e,t){if(e==null)return{};var n=q7(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function q7(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function z7(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U7(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O_(r.key),r)}}function V7(e,t,n){return t&&U7(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function G7(e,t,n){return t=oc(t),K7(e,__()?Reflect.construct(t,n||[],oc(e).constructor):t.apply(e,n))}function K7(e,t){if(t&&(wi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Q7(e)}function Q7(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function __(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(__=function(){return!!e})()}function oc(e){return oc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},oc(e)}function Y7(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&gg(e,t)}function gg(e,t){return gg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},gg(e,t)}function M_(e,t,n){return t=O_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O_(e){var t=X7(e,"string");return wi(t)=="symbol"?t:t+""}function X7(e,t){if(wi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var tu=(function(e){function t(){return z7(this,t),G7(this,t,arguments)}return Y7(t,e),V7(t,[{key:"render",value:function(){var r=this.props,a=r.offset,i=r.layout,s=r.width,l=r.dataKey,c=r.data,f=r.dataPointFormatter,h=r.xAxis,d=r.yAxis,v=F7(r,R7),y=We(v,!1);this.props.direction==="x"&&h.type!=="number"&&Io();var B=c.map(function(I){var b=f(I,l),S=b.x,W=b.y,A=b.value,O=b.errorVal;if(!O)return null;var w=[],_,N;if(Array.isArray(O)){var P=H7(O,2);_=P[0],N=P[1]}else _=N=O;if(i==="vertical"){var C=h.scale,R=W+a,j=R+s,T=R-s,q=C(A-_),L=C(A+N);w.push({x1:L,y1:j,x2:L,y2:T}),w.push({x1:q,y1:R,x2:L,y2:R}),w.push({x1:q,y1:j,x2:q,y2:T})}else if(i==="horizontal"){var K=d.scale,U=S+a,V=U-s,D=U+s,Q=K(A-_),X=K(A+N);w.push({x1:V,y1:X,x2:D,y2:X}),w.push({x1:U,y1:Q,x2:U,y2:X}),w.push({x1:V,y1:Q,x2:D,y2:Q})}return H.createElement(De,ac({className:"recharts-errorBar",key:"bar-".concat(w.map(function(E){return"".concat(E.x1,"-").concat(E.x2,"-").concat(E.y1,"-").concat(E.y2)}))},y),w.map(function(E){return H.createElement("line",ac({},E,{key:"line-".concat(E.x1,"-").concat(E.x2,"-").concat(E.y1,"-").concat(E.y2)}))}))});return H.createElement(De,{className:"recharts-errorBars"},B)}}])})(H.Component);M_(tu,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});M_(tu,"displayName","ErrorBar");function As(e){"@babel/helpers - typeof";return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},As(e)}function b4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ro(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b4(Object(n),!0).forEach(function(r){Z7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Z7(e,t,n){return t=J7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J7(e){var t=e9(e,"string");return As(t)=="symbol"?t:t+""}function e9(e,t){if(As(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(As(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var C_=function(t){var n=t.children,r=t.formattedGraphicalItems,a=t.legendWidth,i=t.legendContent,s=Sn(n,Oa);if(!s)return null;var l=Oa.defaultProps,c=l!==void 0?ro(ro({},l),s.props):{},f;return s.props&&s.props.payload?f=s.props&&s.props.payload:i==="children"?f=(r||[]).reduce(function(h,d){var v=d.item,y=d.props,B=y.sectors||y.data||[];return h.concat(B.map(function(I){return{type:s.props.iconType||v.props.legendType,value:I.name,color:I.fill,payload:I}}))},[]):f=(r||[]).map(function(h){var d=h.item,v=d.type.defaultProps,y=v!==void 0?ro(ro({},v),d.props):{},B=y.dataKey,I=y.name,b=y.legendType,S=y.hide;return{inactive:S,dataKey:B,type:c.iconType||b||"square",color:pb(d),value:I||B,payload:y}}),ro(ro(ro({},c),Oa.getWithHeight(s,a)),{},{payload:f,item:s})};function _s(e){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_s(e)}function I4(e){return a9(e)||r9(e)||n9(e)||t9()}function t9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n9(e,t){if(e){if(typeof e=="string")return yg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yg(e,t)}}function r9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function a9(e){if(Array.isArray(e))return yg(e)}function yg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B4(Object(n),!0).forEach(function(r){fi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fi(e,t,n){return t=o9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o9(e){var t=i9(e,"string");return _s(t)=="symbol"?t:t+""}function i9(e,t){if(_s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lt(e,t,n){return Ne(e)||Ne(t)?n:Rt(t)?Mn(e,t,n):ke(t)?t(e):n}function os(e,t,n,r){var a=a7(e,function(l){return lt(l,t)});if(n==="number"){var i=a.filter(function(l){return le(l)||parseFloat(l)});return i.length?[u0(i),Aa(i)]:[1/0,-1/0]}var s=r?a.filter(function(l){return!Ne(l)}):a;return s.map(function(l){return Rt(l)||l instanceof Date?l:""})}var u9=function(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=-1,l=(n=r==null?void 0:r.length)!==null&&n!==void 0?n:0;if(l<=1)return 0;if(i&&i.axisType==="angleAxis"&&Math.abs(Math.abs(i.range[1]-i.range[0])-360)<=1e-6)for(var c=i.range,f=0;f<l;f++){var h=f>0?a[f-1].coordinate:a[l-1].coordinate,d=a[f].coordinate,v=f>=l-1?a[0].coordinate:a[f+1].coordinate,y=void 0;if(an(d-h)!==an(v-d)){var B=[];if(an(v-d)===an(c[1]-c[0])){y=v;var I=d+c[1]-c[0];B[0]=Math.min(I,(I+h)/2),B[1]=Math.max(I,(I+h)/2)}else{y=h;var b=v+c[1]-c[0];B[0]=Math.min(d,(b+d)/2),B[1]=Math.max(d,(b+d)/2)}var S=[Math.min(d,(y+d)/2),Math.max(d,(y+d)/2)];if(t>S[0]&&t<=S[1]||t>=B[0]&&t<=B[1]){s=a[f].index;break}}else{var W=Math.min(h,v),A=Math.max(h,v);if(t>(W+d)/2&&t<=(A+d)/2){s=a[f].index;break}}}else for(var O=0;O<l;O++)if(O===0&&t<=(r[O].coordinate+r[O+1].coordinate)/2||O>0&&O<l-1&&t>(r[O].coordinate+r[O-1].coordinate)/2&&t<=(r[O].coordinate+r[O+1].coordinate)/2||O===l-1&&t>(r[O].coordinate+r[O-1].coordinate)/2){s=r[O].index;break}return s},pb=function(t){var n,r=t,a=r.type.displayName,i=(n=t.type)!==null&&n!==void 0&&n.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,s=i.stroke,l=i.fill,c;switch(a){case"Line":c=s;break;case"Area":case"Radar":c=s&&s!=="none"?s:l;break;default:c=l;break}return c},s9=function(t){var n=t.barSize,r=t.totalSize,a=t.stackGroups,i=a===void 0?{}:a;if(!i)return{};for(var s={},l=Object.keys(i),c=0,f=l.length;c<f;c++)for(var h=i[l[c]].stackGroups,d=Object.keys(h),v=0,y=d.length;v<y;v++){var B=h[d[v]],I=B.items,b=B.cateAxisId,S=I.filter(function(N){return Ur(N.type).indexOf("Bar")>=0});if(S&&S.length){var W=S[0].type.defaultProps,A=W!==void 0?bt(bt({},W),S[0].props):S[0].props,O=A.barSize,w=A[b];s[w]||(s[w]=[]);var _=Ne(O)?n:O;s[w].push({item:S[0],stackList:S.slice(1),barSize:Ne(_)?void 0:on(_,r,0)})}}return s},l9=function(t){var n=t.barGap,r=t.barCategoryGap,a=t.bandSize,i=t.sizeList,s=i===void 0?[]:i,l=t.maxBarSize,c=s.length;if(c<1)return null;var f=on(n,a,0,!0),h,d=[];if(s[0].barSize===+s[0].barSize){var v=!1,y=a/c,B=s.reduce(function(O,w){return O+w.barSize||0},0);B+=(c-1)*f,B>=a&&(B-=(c-1)*f,f=0),B>=a&&y>0&&(v=!0,y*=.9,B=c*y);var I=(a-B)/2>>0,b={offset:I-f,size:0};h=s.reduce(function(O,w){var _={item:w.item,position:{offset:b.offset+b.size+f,size:v?y:w.barSize}},N=[].concat(I4(O),[_]);return b=N[N.length-1].position,w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){N.push({item:P,position:b})}),N},d)}else{var S=on(r,a,0,!0);a-2*S-(c-1)*f<=0&&(f=0);var W=(a-2*S-(c-1)*f)/c;W>1&&(W>>=0);var A=l===+l?Math.min(W,l):W;h=s.reduce(function(O,w,_){var N=[].concat(I4(O),[{item:w.item,position:{offset:S+(W+f)*_+(W-A)/2,size:A}}]);return w.stackList&&w.stackList.length&&w.stackList.forEach(function(P){N.push({item:P,position:N[N.length-1].position})}),N},d)}return h},p9=function(t,n,r,a){var i=r.children,s=r.width,l=r.margin,c=s-(l.left||0)-(l.right||0),f=C_({children:i,legendWidth:c});if(f){var h=a||{},d=h.width,v=h.height,y=f.align,B=f.verticalAlign,I=f.layout;if((I==="vertical"||I==="horizontal"&&B==="middle")&&y!=="center"&&le(t[y]))return bt(bt({},t),{},fi({},y,t[y]+(d||0)));if((I==="horizontal"||I==="vertical"&&y==="center")&&B!=="middle"&&le(t[B]))return bt(bt({},t),{},fi({},B,t[B]+(v||0)))}return t},c9=function(t,n,r){return Ne(n)?!0:t==="horizontal"?n==="yAxis":t==="vertical"||r==="x"?n==="xAxis":r==="y"?n==="yAxis":!0},k_=function(t,n,r,a,i){var s=n.props.children,l=sn(s,tu).filter(function(f){return c9(a,i,f.props.direction)});if(l&&l.length){var c=l.map(function(f){return f.props.dataKey});return t.reduce(function(f,h){var d=lt(h,r);if(Ne(d))return f;var v=Array.isArray(d)?[u0(d),Aa(d)]:[d,d],y=c.reduce(function(B,I){var b=lt(h,I,0),S=v[0]-Math.abs(Array.isArray(b)?b[0]:b),W=v[1]+Math.abs(Array.isArray(b)?b[1]:b);return[Math.min(S,B[0]),Math.max(W,B[1])]},[1/0,-1/0]);return[Math.min(y[0],f[0]),Math.max(y[1],f[1])]},[1/0,-1/0])}return null},f9=function(t,n,r,a,i){var s=n.map(function(l){return k_(t,l,r,i,a)}).filter(function(l){return!Ne(l)});return s&&s.length?s.reduce(function(l,c){return[Math.min(l[0],c[0]),Math.max(l[1],c[1])]},[1/0,-1/0]):null},N_=function(t,n,r,a,i){var s=n.map(function(c){var f=c.props.dataKey;return r==="number"&&f&&k_(t,c,f,a)||os(t,f,r,i)});if(r==="number")return s.reduce(function(c,f){return[Math.min(c[0],f[0]),Math.max(c[1],f[1])]},[1/0,-1/0]);var l={};return s.reduce(function(c,f){for(var h=0,d=f.length;h<d;h++)l[f[h]]||(l[f[h]]=!0,c.push(f[h]));return c},[])},E_=function(t,n){return t==="horizontal"&&n==="xAxis"||t==="vertical"&&n==="yAxis"||t==="centric"&&n==="angleAxis"||t==="radial"&&n==="radiusAxis"},T_=function(t,n,r,a){if(a)return t.map(function(c){return c.coordinate});var i,s,l=t.map(function(c){return c.coordinate===n&&(i=!0),c.coordinate===r&&(s=!0),c.coordinate});return i||l.push(n),s||l.push(r),l},Fr=function(t,n,r){if(!t)return null;var a=t.scale,i=t.duplicateDomain,s=t.type,l=t.range,c=t.realScaleType==="scaleBand"?a.bandwidth()/2:2,f=(n||r)&&s==="category"&&a.bandwidth?a.bandwidth()/c:0;if(f=t.axisType==="angleAxis"&&(l==null?void 0:l.length)>=2?an(l[0]-l[1])*2*f:f,n&&(t.ticks||t.niceTicks)){var h=(t.ticks||t.niceTicks).map(function(d){var v=i?i.indexOf(d):d;return{coordinate:a(v)+f,value:d,offset:f}});return h.filter(function(d){return!Yi(d.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(d,v){return{coordinate:a(d)+f,value:d,index:v,offset:f}}):a.ticks&&!r?a.ticks(t.tickCount).map(function(d){return{coordinate:a(d)+f,value:d,offset:f}}):a.domain().map(function(d,v){return{coordinate:a(d)+f,value:i?i[d]:d,index:v,offset:f}})},Gm=new WeakMap,xp=function(t,n){if(typeof n!="function")return t;Gm.has(t)||Gm.set(t,new WeakMap);var r=Gm.get(t);if(r.has(n))return r.get(n);var a=function(){t.apply(void 0,arguments),n.apply(void 0,arguments)};return r.set(n,a),a},R_=function(t,n,r){var a=t.scale,i=t.type,s=t.layout,l=t.axisType;if(a==="auto")return s==="radial"&&l==="radiusAxis"?{scale:Is(),realScaleType:"band"}:s==="radial"&&l==="angleAxis"?{scale:Jp(),realScaleType:"linear"}:i==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0||n.indexOf("ComposedChart")>=0&&!r)?{scale:as(),realScaleType:"point"}:i==="category"?{scale:Is(),realScaleType:"band"}:{scale:Jp(),realScaleType:"linear"};if(Qs(a)){var c="scale".concat(Vc(a));return{scale:(i4[c]||as)(),realScaleType:i4[c]?c:"point"}}return ke(a)?{scale:a}:{scale:as(),realScaleType:"point"}},x4=1e-4,H_=function(t){var n=t.domain();if(!(!n||n.length<=2)){var r=n.length,a=t.range(),i=Math.min(a[0],a[1])-x4,s=Math.max(a[0],a[1])+x4,l=t(n[0]),c=t(n[r-1]);(l<i||l>s||c<i||c>s)&&t.domain([n[0],n[r-1]])}},d9=function(t,n){if(!t)return null;for(var r=0,a=t.length;r<a;r++)if(t[r].item===n)return t[r].position;return null},h9=function(t,n){if(!n||n.length!==2||!le(n[0])||!le(n[1]))return t;var r=Math.min(n[0],n[1]),a=Math.max(n[0],n[1]),i=[t[0],t[1]];return(!le(t[0])||t[0]<r)&&(i[0]=r),(!le(t[1])||t[1]>a)&&(i[1]=a),i[0]>a&&(i[0]=a),i[1]<r&&(i[1]=r),i},m9=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var i=0,s=0,l=0;l<n;++l){var c=Yi(t[l][r][1])?t[l][r][0]:t[l][r][1];c>=0?(t[l][r][0]=i,t[l][r][1]=i+c,i=t[l][r][1]):(t[l][r][0]=s,t[l][r][1]=s+c,s=t[l][r][1])}},v9=function(t){var n=t.length;if(!(n<=0))for(var r=0,a=t[0].length;r<a;++r)for(var i=0,s=0;s<n;++s){var l=Yi(t[s][r][1])?t[s][r][0]:t[s][r][1];l>=0?(t[s][r][0]=i,t[s][r][1]=i+l,i=t[s][r][1]):(t[s][r][0]=0,t[s][r][1]=0)}},g9={sign:m9,expand:aj,none:mi,silhouette:oj,wiggle:ij,positive:v9},y9=function(t,n,r){var a=n.map(function(l){return l.props.dataKey}),i=g9[r],s=rj().keys(a).value(function(l,c){return+lt(l,c,0)}).order(Kv).offset(i);return s(t)},b9=function(t,n,r,a,i,s){if(!t)return null;var l=s?n.reverse():n,c={},f=l.reduce(function(d,v){var y,B=(y=v.type)!==null&&y!==void 0&&y.defaultProps?bt(bt({},v.type.defaultProps),v.props):v.props,I=B.stackId,b=B.hide;if(b)return d;var S=B[r],W=d[S]||{hasStack:!1,stackGroups:{}};if(Rt(I)){var A=W.stackGroups[I]||{numericAxisId:r,cateAxisId:a,items:[]};A.items.push(v),W.hasStack=!0,W.stackGroups[I]=A}else W.stackGroups[Da("_stackId_")]={numericAxisId:r,cateAxisId:a,items:[v]};return bt(bt({},d),{},fi({},S,W))},c),h={};return Object.keys(f).reduce(function(d,v){var y=f[v];if(y.hasStack){var B={};y.stackGroups=Object.keys(y.stackGroups).reduce(function(I,b){var S=y.stackGroups[b];return bt(bt({},I),{},fi({},b,{numericAxisId:r,cateAxisId:a,items:S.items,stackedData:y9(t,S.items,i)}))},B)}return bt(bt({},d),{},fi({},v,y))},h)},j_=function(t,n){var r=n.realScaleType,a=n.type,i=n.tickCount,s=n.originalDomain,l=n.allowDecimals,c=r||n.scale;if(c!=="auto"&&c!=="linear")return null;if(i&&a==="number"&&s&&(s[0]==="auto"||s[1]==="auto")){var f=t.domain();if(!f.length)return null;var h=N7(f,i,l);return t.domain([u0(h),Aa(h)]),{niceTicks:h}}if(i&&a==="number"){var d=t.domain(),v=E7(d,i,l);return{niceTicks:v}}return null};function Pi(e){var t=e.axis,n=e.ticks,r=e.bandSize,a=e.entry,i=e.index,s=e.dataKey;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!Ne(a[t.dataKey])){var l=Ep(n,"value",a[t.dataKey]);if(l)return l.coordinate+r/2}return n[i]?n[i].coordinate+r/2:null}var c=lt(a,Ne(s)?t.dataKey:s);return Ne(c)?null:t.scale(c)}var w4=function(t){var n=t.axis,r=t.ticks,a=t.offset,i=t.bandSize,s=t.entry,l=t.index;if(n.type==="category")return r[l]?r[l].coordinate+a:null;var c=lt(s,n.dataKey,n.domain[l]);return Ne(c)?null:n.scale(c)-i/2+a},I9=function(t){var n=t.numericAxis,r=n.scale.domain();if(n.type==="number"){var a=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]);return a<=0&&i>=0?0:i<0?i:a}return r[0]},B9=function(t,n){var r,a=(r=t.type)!==null&&r!==void 0&&r.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,i=a.stackId;if(Rt(i)){var s=n[i];if(s){var l=s.items.indexOf(t);return l>=0?s.stackedData[l]:null}}return null},x9=function(t){return t.reduce(function(n,r){return[u0(r.concat([n[0]]).filter(le)),Aa(r.concat([n[1]]).filter(le))]},[1/0,-1/0])},D_=function(t,n,r){return Object.keys(t).reduce(function(a,i){var s=t[i],l=s.stackedData,c=l.reduce(function(f,h){var d=x9(h.slice(n,r+1));return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);return[Math.min(c[0],a[0]),Math.max(c[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},P4=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,S4=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,bg=function(t,n,r){if(ke(t))return t(n,r);if(!Array.isArray(t))return n;var a=[];if(le(t[0]))a[0]=r?t[0]:Math.min(t[0],n[0]);else if(P4.test(t[0])){var i=+P4.exec(t[0])[1];a[0]=n[0]-i}else ke(t[0])?a[0]=t[0](n[0]):a[0]=n[0];if(le(t[1]))a[1]=r?t[1]:Math.max(t[1],n[1]);else if(S4.test(t[1])){var s=+S4.exec(t[1])[1];a[1]=n[1]+s}else ke(t[1])?a[1]=t[1](n[1]):a[1]=n[1];return a},ic=function(t,n,r){if(t&&t.scale&&t.scale.bandwidth){var a=t.scale.bandwidth();if(!r||a>0)return a}if(t&&n&&n.length>=2){for(var i=Hy(n,function(d){return d.coordinate}),s=1/0,l=1,c=i.length;l<c;l++){var f=i[l],h=i[l-1];s=Math.min((f.coordinate||0)-(h.coordinate||0),s)}return s===1/0?0:s}return r?void 0:0},W4=function(t,n,r){return!t||!t.length||Ta(t,Mn(r,"type.defaultProps.domain"))?n:t},$_=function(t,n){var r=t.type.defaultProps?bt(bt({},t.type.defaultProps),t.props):t.props,a=r.dataKey,i=r.name,s=r.unit,l=r.formatter,c=r.tooltipType,f=r.chartType,h=r.hide;return bt(bt({},We(t,!1)),{},{dataKey:a,unit:s,formatter:l,name:i||a,color:pb(t),value:lt(n,a),type:c,payload:n,chartType:f,hide:h})};function Ms(e){"@babel/helpers - typeof";return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ms(e)}function A4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function jr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A4(Object(n),!0).forEach(function(r){L_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function L_(e,t,n){return t=w9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w9(e){var t=P9(e,"string");return Ms(t)=="symbol"?t:t+""}function P9(e,t){if(Ms(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function S9(e,t){return M9(e)||_9(e,t)||A9(e,t)||W9()}function W9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A9(e,t){if(e){if(typeof e=="string")return _4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _4(e,t)}}function _4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _9(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function M9(e){if(Array.isArray(e))return e}var uc=Math.PI/180,O9=function(t){return t*180/Math.PI},ot=function(t,n,r,a){return{x:t+Math.cos(-uc*a)*r,y:n+Math.sin(-uc*a)*r}},F_=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(t-(r.left||0)-(r.right||0)),Math.abs(n-(r.top||0)-(r.bottom||0)))/2},C9=function(t,n,r,a,i){var s=t.width,l=t.height,c=t.startAngle,f=t.endAngle,h=on(t.cx,s,s/2),d=on(t.cy,l,l/2),v=F_(s,l,r),y=on(t.innerRadius,v,0),B=on(t.outerRadius,v,v*.8),I=Object.keys(n);return I.reduce(function(b,S){var W=n[S],A=W.domain,O=W.reversed,w;if(Ne(W.range))a==="angleAxis"?w=[c,f]:a==="radiusAxis"&&(w=[y,B]),O&&(w=[w[1],w[0]]);else{w=W.range;var _=w,N=S9(_,2);c=N[0],f=N[1]}var P=R_(W,i),C=P.realScaleType,R=P.scale;R.domain(A).range(w),H_(R);var j=j_(R,jr(jr({},W),{},{realScaleType:C})),T=jr(jr(jr({},W),j),{},{range:w,radius:B,realScaleType:C,scale:R,cx:h,cy:d,innerRadius:y,outerRadius:B,startAngle:c,endAngle:f});return jr(jr({},b),{},L_({},S,T))},{})},k9=function(t,n){var r=t.x,a=t.y,i=n.x,s=n.y;return Math.sqrt(Math.pow(r-i,2)+Math.pow(a-s,2))},N9=function(t,n){var r=t.x,a=t.y,i=n.cx,s=n.cy,l=k9({x:r,y:a},{x:i,y:s});if(l<=0)return{radius:l};var c=(r-i)/l,f=Math.acos(c);return a>s&&(f=2*Math.PI-f),{radius:l,angle:O9(f),angleInRadian:f}},E9=function(t){var n=t.startAngle,r=t.endAngle,a=Math.floor(n/360),i=Math.floor(r/360),s=Math.min(a,i);return{startAngle:n-s*360,endAngle:r-s*360}},T9=function(t,n){var r=n.startAngle,a=n.endAngle,i=Math.floor(r/360),s=Math.floor(a/360),l=Math.min(i,s);return t+l*360},M4=function(t,n){var r=t.x,a=t.y,i=N9({x:r,y:a},n),s=i.radius,l=i.angle,c=n.innerRadius,f=n.outerRadius;if(s<c||s>f)return!1;if(s===0)return!0;var h=E9(n),d=h.startAngle,v=h.endAngle,y=l,B;if(d<=v){for(;y>v;)y-=360;for(;y<d;)y+=360;B=y>=d&&y<=v}else{for(;y>d;)y-=360;for(;y<v;)y+=360;B=y>=v&&y<=d}return B?jr(jr({},n),{},{radius:s,angle:T9(y,n)}):null},q_=function(t){return!Y.isValidElement(t)&&!ke(t)&&typeof t!="boolean"?t.className:""};function Os(e){"@babel/helpers - typeof";return Os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Os(e)}var R9=["offset"];function H9(e){return L9(e)||$9(e)||D9(e)||j9()}function j9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D9(e,t){if(e){if(typeof e=="string")return Ig(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ig(e,t)}}function $9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function L9(e){if(Array.isArray(e))return Ig(e)}function Ig(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F9(e,t){if(e==null)return{};var n=q9(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function q9(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function O4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?O4(Object(n),!0).forEach(function(r){z9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function z9(e,t,n){return t=U9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U9(e){var t=V9(e,"string");return Os(t)=="symbol"?t:t+""}function V9(e,t){if(Os(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Os(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cs.apply(this,arguments)}var G9=function(t){var n=t.value,r=t.formatter,a=Ne(t.children)?n:t.children;return ke(r)?r(a):a},K9=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),360);return r*a},Q9=function(t,n,r){var a=t.position,i=t.viewBox,s=t.offset,l=t.className,c=i,f=c.cx,h=c.cy,d=c.innerRadius,v=c.outerRadius,y=c.startAngle,B=c.endAngle,I=c.clockWise,b=(d+v)/2,S=K9(y,B),W=S>=0?1:-1,A,O;a==="insideStart"?(A=y+W*s,O=I):a==="insideEnd"?(A=B-W*s,O=!I):a==="end"&&(A=B+W*s,O=I),O=S<=0?O:!O;var w=ot(f,h,b,A),_=ot(f,h,b,A+(O?1:-1)*359),N="M".concat(w.x,",").concat(w.y,`
    A`).concat(b,",").concat(b,",0,1,").concat(O?0:1,`,
    `).concat(_.x,",").concat(_.y),P=Ne(t.id)?Da("recharts-radial-line-"):t.id;return H.createElement("text",Cs({},r,{dominantBaseline:"central",className:He("recharts-radial-bar-label",l)}),H.createElement("defs",null,H.createElement("path",{id:P,d:N})),H.createElement("textPath",{xlinkHref:"#".concat(P)},n))},Y9=function(t){var n=t.viewBox,r=t.offset,a=t.position,i=n,s=i.cx,l=i.cy,c=i.innerRadius,f=i.outerRadius,h=i.startAngle,d=i.endAngle,v=(h+d)/2;if(a==="outside"){var y=ot(s,l,f+r,v),B=y.x,I=y.y;return{x:B,y:I,textAnchor:B>=s?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:s,y:l,textAnchor:"middle",verticalAnchor:"end"};var b=(c+f)/2,S=ot(s,l,b,v),W=S.x,A=S.y;return{x:W,y:A,textAnchor:"middle",verticalAnchor:"middle"}},X9=function(t){var n=t.viewBox,r=t.parentViewBox,a=t.offset,i=t.position,s=n,l=s.x,c=s.y,f=s.width,h=s.height,d=h>=0?1:-1,v=d*a,y=d>0?"end":"start",B=d>0?"start":"end",I=f>=0?1:-1,b=I*a,S=I>0?"end":"start",W=I>0?"start":"end";if(i==="top"){var A={x:l+f/2,y:c-d*a,textAnchor:"middle",verticalAnchor:y};return Tt(Tt({},A),r?{height:Math.max(c-r.y,0),width:f}:{})}if(i==="bottom"){var O={x:l+f/2,y:c+h+v,textAnchor:"middle",verticalAnchor:B};return Tt(Tt({},O),r?{height:Math.max(r.y+r.height-(c+h),0),width:f}:{})}if(i==="left"){var w={x:l-b,y:c+h/2,textAnchor:S,verticalAnchor:"middle"};return Tt(Tt({},w),r?{width:Math.max(w.x-r.x,0),height:h}:{})}if(i==="right"){var _={x:l+f+b,y:c+h/2,textAnchor:W,verticalAnchor:"middle"};return Tt(Tt({},_),r?{width:Math.max(r.x+r.width-_.x,0),height:h}:{})}var N=r?{width:f,height:h}:{};return i==="insideLeft"?Tt({x:l+b,y:c+h/2,textAnchor:W,verticalAnchor:"middle"},N):i==="insideRight"?Tt({x:l+f-b,y:c+h/2,textAnchor:S,verticalAnchor:"middle"},N):i==="insideTop"?Tt({x:l+f/2,y:c+v,textAnchor:"middle",verticalAnchor:B},N):i==="insideBottom"?Tt({x:l+f/2,y:c+h-v,textAnchor:"middle",verticalAnchor:y},N):i==="insideTopLeft"?Tt({x:l+b,y:c+v,textAnchor:W,verticalAnchor:B},N):i==="insideTopRight"?Tt({x:l+f-b,y:c+v,textAnchor:S,verticalAnchor:B},N):i==="insideBottomLeft"?Tt({x:l+b,y:c+h-v,textAnchor:W,verticalAnchor:y},N):i==="insideBottomRight"?Tt({x:l+f-b,y:c+h-v,textAnchor:S,verticalAnchor:y},N):Qi(i)&&(le(i.x)||po(i.x))&&(le(i.y)||po(i.y))?Tt({x:l+on(i.x,f),y:c+on(i.y,h),textAnchor:"end",verticalAnchor:"end"},N):Tt({x:l+f/2,y:c+h/2,textAnchor:"middle",verticalAnchor:"middle"},N)},Z9=function(t){return"cx"in t&&le(t.cx)};function qt(e){var t=e.offset,n=t===void 0?5:t,r=F9(e,R9),a=Tt({offset:n},r),i=a.viewBox,s=a.position,l=a.value,c=a.children,f=a.content,h=a.className,d=h===void 0?"":h,v=a.textBreakAll;if(!i||Ne(l)&&Ne(c)&&!Y.isValidElement(f)&&!ke(f))return null;if(Y.isValidElement(f))return Y.cloneElement(f,a);var y;if(ke(f)){if(y=Y.createElement(f,a),Y.isValidElement(y))return y}else y=G9(a);var B=Z9(i),I=We(a,!0);if(B&&(s==="insideStart"||s==="insideEnd"||s==="end"))return Q9(a,y,I);var b=B?Y9(a):X9(a);return H.createElement(yo,Cs({className:He("recharts-label",d)},I,b,{breakAll:v}),y)}qt.displayName="Label";var z_=function(t){var n=t.cx,r=t.cy,a=t.angle,i=t.startAngle,s=t.endAngle,l=t.r,c=t.radius,f=t.innerRadius,h=t.outerRadius,d=t.x,v=t.y,y=t.top,B=t.left,I=t.width,b=t.height,S=t.clockWise,W=t.labelViewBox;if(W)return W;if(le(I)&&le(b)){if(le(d)&&le(v))return{x:d,y:v,width:I,height:b};if(le(y)&&le(B))return{x:y,y:B,width:I,height:b}}return le(d)&&le(v)?{x:d,y:v,width:0,height:0}:le(n)&&le(r)?{cx:n,cy:r,startAngle:i||a||0,endAngle:s||a||0,innerRadius:f||0,outerRadius:h||c||l||0,clockWise:S}:t.viewBox?t.viewBox:{}},J9=function(t,n){return t?t===!0?H.createElement(qt,{key:"label-implicit",viewBox:n}):Rt(t)?H.createElement(qt,{key:"label-implicit",viewBox:n,value:t}):Y.isValidElement(t)?t.type===qt?Y.cloneElement(t,{key:"label-implicit",viewBox:n}):H.createElement(qt,{key:"label-implicit",content:t,viewBox:n}):ke(t)?H.createElement(qt,{key:"label-implicit",content:t,viewBox:n}):Qi(t)?H.createElement(qt,Cs({viewBox:n},t,{key:"label-implicit"})):null:null},eF=function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&r&&!t.label)return null;var a=t.children,i=z_(t),s=sn(a,qt).map(function(c,f){return Y.cloneElement(c,{viewBox:n||i,key:"label-".concat(f)})});if(!r)return s;var l=J9(t.label,n||i);return[l].concat(H9(s))};qt.parseViewBox=z_;qt.renderCallByParent=eF;var Km,C4;function tF(){if(C4)return Km;C4=1;function e(t){var n=t==null?0:t.length;return n?t[n-1]:void 0}return Km=e,Km}var nF=tF();const rF=Xe(nF);function ks(e){"@babel/helpers - typeof";return ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ks(e)}var aF=["valueAccessor"],oF=["data","dataKey","clockWise","id","textBreakAll"];function iF(e){return pF(e)||lF(e)||sF(e)||uF()}function uF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sF(e,t){if(e){if(typeof e=="string")return Bg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bg(e,t)}}function lF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pF(e){if(Array.isArray(e))return Bg(e)}function Bg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function sc(){return sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sc.apply(this,arguments)}function k4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function N4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k4(Object(n),!0).forEach(function(r){cF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cF(e,t,n){return t=fF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fF(e){var t=dF(e,"string");return ks(t)=="symbol"?t:t+""}function dF(e,t){if(ks(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ks(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function E4(e,t){if(e==null)return{};var n=hF(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function hF(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var mF=function(t){return Array.isArray(t.value)?rF(t.value):t.value};function pr(e){var t=e.valueAccessor,n=t===void 0?mF:t,r=E4(e,aF),a=r.data,i=r.dataKey,s=r.clockWise,l=r.id,c=r.textBreakAll,f=E4(r,oF);return!a||!a.length?null:H.createElement(De,{className:"recharts-label-list"},a.map(function(h,d){var v=Ne(i)?n(h,d):lt(h&&h.payload,i),y=Ne(l)?{}:{id:"".concat(l,"-").concat(d)};return H.createElement(qt,sc({},We(h,!0),f,y,{parentViewBox:h.parentViewBox,value:v,textBreakAll:c,viewBox:qt.parseViewBox(Ne(s)?h:N4(N4({},h),{},{clockWise:s})),key:"label-".concat(d),index:d}))}))}pr.displayName="LabelList";function vF(e,t){return e?e===!0?H.createElement(pr,{key:"labelList-implicit",data:t}):H.isValidElement(e)||ke(e)?H.createElement(pr,{key:"labelList-implicit",data:t,content:e}):Qi(e)?H.createElement(pr,sc({data:t},e,{key:"labelList-implicit"})):null:null}function gF(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&n&&!e.label)return null;var r=e.children,a=sn(r,pr).map(function(s,l){return Y.cloneElement(s,{data:t,key:"labelList-".concat(l)})});if(!n)return a;var i=vF(e.label,t);return[i].concat(iF(a))}pr.renderCallByParent=gF;function Ns(e){"@babel/helpers - typeof";return Ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ns(e)}function xg(){return xg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xg.apply(this,arguments)}function T4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T4(Object(n),!0).forEach(function(r){yF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yF(e,t,n){return t=bF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bF(e){var t=IF(e,"string");return Ns(t)=="symbol"?t:t+""}function IF(e,t){if(Ns(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ns(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var BF=function(t,n){var r=an(n-t),a=Math.min(Math.abs(n-t),359.999);return r*a},wp=function(t){var n=t.cx,r=t.cy,a=t.radius,i=t.angle,s=t.sign,l=t.isExternal,c=t.cornerRadius,f=t.cornerIsExternal,h=c*(l?1:-1)+a,d=Math.asin(c/h)/uc,v=f?i:i+s*d,y=ot(n,r,h,v),B=ot(n,r,a,v),I=f?i-s*d:i,b=ot(n,r,h*Math.cos(d*uc),I);return{center:y,circleTangency:B,lineTangency:b,theta:d}},U_=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,i=t.outerRadius,s=t.startAngle,l=t.endAngle,c=BF(s,l),f=s+c,h=ot(n,r,i,s),d=ot(n,r,i,f),v="M ".concat(h.x,",").concat(h.y,`
    A `).concat(i,",").concat(i,`,0,
    `).concat(+(Math.abs(c)>180),",").concat(+(s>f),`,
    `).concat(d.x,",").concat(d.y,`
  `);if(a>0){var y=ot(n,r,a,s),B=ot(n,r,a,f);v+="L ".concat(B.x,",").concat(B.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(c)>180),",").concat(+(s<=f),`,
            `).concat(y.x,",").concat(y.y," Z")}else v+="L ".concat(n,",").concat(r," Z");return v},xF=function(t){var n=t.cx,r=t.cy,a=t.innerRadius,i=t.outerRadius,s=t.cornerRadius,l=t.forceCornerRadius,c=t.cornerIsExternal,f=t.startAngle,h=t.endAngle,d=an(h-f),v=wp({cx:n,cy:r,radius:i,angle:f,sign:d,cornerRadius:s,cornerIsExternal:c}),y=v.circleTangency,B=v.lineTangency,I=v.theta,b=wp({cx:n,cy:r,radius:i,angle:h,sign:-d,cornerRadius:s,cornerIsExternal:c}),S=b.circleTangency,W=b.lineTangency,A=b.theta,O=c?Math.abs(f-h):Math.abs(f-h)-I-A;if(O<0)return l?"M ".concat(B.x,",").concat(B.y,`
        a`).concat(s,",").concat(s,",0,0,1,").concat(s*2,`,0
        a`).concat(s,",").concat(s,",0,0,1,").concat(-s*2,`,0
      `):U_({cx:n,cy:r,innerRadius:a,outerRadius:i,startAngle:f,endAngle:h});var w="M ".concat(B.x,",").concat(B.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(y.x,",").concat(y.y,`
    A`).concat(i,",").concat(i,",0,").concat(+(O>180),",").concat(+(d<0),",").concat(S.x,",").concat(S.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(W.x,",").concat(W.y,`
  `);if(a>0){var _=wp({cx:n,cy:r,radius:a,angle:f,sign:d,isExternal:!0,cornerRadius:s,cornerIsExternal:c}),N=_.circleTangency,P=_.lineTangency,C=_.theta,R=wp({cx:n,cy:r,radius:a,angle:h,sign:-d,isExternal:!0,cornerRadius:s,cornerIsExternal:c}),j=R.circleTangency,T=R.lineTangency,q=R.theta,L=c?Math.abs(f-h):Math.abs(f-h)-C-q;if(L<0&&s===0)return"".concat(w,"L").concat(n,",").concat(r,"Z");w+="L".concat(T.x,",").concat(T.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(j.x,",").concat(j.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(L>180),",").concat(+(d>0),",").concat(N.x,",").concat(N.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(d<0),",").concat(P.x,",").concat(P.y,"Z")}else w+="L".concat(n,",").concat(r,"Z");return w},wF={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},V_=function(t){var n=R4(R4({},wF),t),r=n.cx,a=n.cy,i=n.innerRadius,s=n.outerRadius,l=n.cornerRadius,c=n.forceCornerRadius,f=n.cornerIsExternal,h=n.startAngle,d=n.endAngle,v=n.className;if(s<i||h===d)return null;var y=He("recharts-sector",v),B=s-i,I=on(l,B,0,!0),b;return I>0&&Math.abs(h-d)<360?b=xF({cx:r,cy:a,innerRadius:i,outerRadius:s,cornerRadius:Math.min(I,B/2),forceCornerRadius:c,cornerIsExternal:f,startAngle:h,endAngle:d}):b=U_({cx:r,cy:a,innerRadius:i,outerRadius:s,startAngle:h,endAngle:d}),H.createElement("path",xg({},We(n,!0),{className:y,d:b,role:"img"}))};function Es(e){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Es(e)}function wg(){return wg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wg.apply(this,arguments)}function H4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function j4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?H4(Object(n),!0).forEach(function(r){PF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function PF(e,t,n){return t=SF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function SF(e){var t=WF(e,"string");return Es(t)=="symbol"?t:t+""}function WF(e,t){if(Es(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Es(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var D4={curveBasisClosed:VH,curveBasisOpen:GH,curveBasis:UH,curveBumpX:CH,curveBumpY:kH,curveLinearClosed:KH,curveLinear:Kc,curveMonotoneX:QH,curveMonotoneY:YH,curveNatural:XH,curveStep:ZH,curveStepAfter:ej,curveStepBefore:JH},Pp=function(t){return t.x===+t.x&&t.y===+t.y},Qu=function(t){return t.x},Yu=function(t){return t.y},AF=function(t,n){if(ke(t))return t;var r="curve".concat(Vc(t));return(r==="curveMonotone"||r==="curveBump")&&n?D4["".concat(r).concat(n==="vertical"?"Y":"X")]:D4[r]||Kc},_F=function(t){var n=t.type,r=n===void 0?"linear":n,a=t.points,i=a===void 0?[]:a,s=t.baseLine,l=t.layout,c=t.connectNulls,f=c===void 0?!1:c,h=AF(r,l),d=f?i.filter(function(I){return Pp(I)}):i,v;if(Array.isArray(s)){var y=f?s.filter(function(I){return Pp(I)}):s,B=d.map(function(I,b){return j4(j4({},I),{},{base:y[b]})});return l==="vertical"?v=mp().y(Yu).x1(Qu).x0(function(I){return I.base.x}):v=mp().x(Qu).y1(Yu).y0(function(I){return I.base.y}),v.defined(Pp).curve(h),v(B)}return l==="vertical"&&le(s)?v=mp().y(Yu).x1(Qu).x0(s):le(s)?v=mp().x(Qu).y1(Yu).y0(s):v=UW().x(Qu).y(Yu),v.defined(Pp).curve(h),v(d)},ka=function(t){var n=t.className,r=t.points,a=t.path,i=t.pathRef;if((!r||!r.length)&&!a)return null;var s=r&&r.length?_F(t):a;return H.createElement("path",wg({},We(t,!1),Tp(t),{className:He("recharts-curve",n),d:s,ref:i}))},Qm={exports:{}},Ym,$4;function MF(){if($4)return Ym;$4=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ym=e,Ym}var Xm,L4;function OF(){if(L4)return Xm;L4=1;var e=MF();function t(){}function n(){}return n.resetWarningCache=t,Xm=function(){function r(s,l,c,f,h,d){if(d!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},Xm}var F4;function CF(){return F4||(F4=1,Qm.exports=OF()()),Qm.exports}var kF=CF();const Ye=Xe(kF),{getOwnPropertyNames:NF,getOwnPropertySymbols:EF}=Object,{hasOwnProperty:TF}=Object.prototype;function Zm(e,t){return function(r,a,i){return e(r,a,i)&&t(r,a,i)}}function Sp(e){return function(n,r,a){if(!n||!r||typeof n!="object"||typeof r!="object")return e(n,r,a);const{cache:i}=a,s=i.get(n),l=i.get(r);if(s&&l)return s===r&&l===n;i.set(n,r),i.set(r,n);const c=e(n,r,a);return i.delete(n),i.delete(r),c}}function RF(e){return e!=null?e[Symbol.toStringTag]:void 0}function q4(e){return NF(e).concat(EF(e))}const HF=Object.hasOwn||((e,t)=>TF.call(e,t));function So(e,t){return e===t||!e&&!t&&e!==e&&t!==t}const jF="__v",DF="__o",$F="_owner",{getOwnPropertyDescriptor:z4,keys:U4}=Object;function LF(e,t){return e.byteLength===t.byteLength&&lc(new Uint8Array(e),new Uint8Array(t))}function FF(e,t,n){let r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(!n.equals(e[r],t[r],r,r,e,t,n))return!1;return!0}function qF(e,t){return e.byteLength===t.byteLength&&lc(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}function zF(e,t){return So(e.getTime(),t.getTime())}function UF(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function VF(e,t){return e===t}function V4(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),i=e.entries();let s,l,c=0;for(;(s=i.next())&&!s.done;){const f=t.entries();let h=!1,d=0;for(;(l=f.next())&&!l.done;){if(a[d]){d++;continue}const v=s.value,y=l.value;if(n.equals(v[0],y[0],c,d,e,t,n)&&n.equals(v[1],y[1],v[0],y[0],e,t,n)){h=a[d]=!0;break}d++}if(!h)return!1;c++}return!0}const GF=So;function KF(e,t,n){const r=U4(e);let a=r.length;if(U4(t).length!==a)return!1;for(;a-- >0;)if(!G_(e,t,n,r[a]))return!1;return!0}function Xu(e,t,n){const r=q4(e);let a=r.length;if(q4(t).length!==a)return!1;let i,s,l;for(;a-- >0;)if(i=r[a],!G_(e,t,n,i)||(s=z4(e,i),l=z4(t,i),(s||l)&&(!s||!l||s.configurable!==l.configurable||s.enumerable!==l.enumerable||s.writable!==l.writable)))return!1;return!0}function QF(e,t){return So(e.valueOf(),t.valueOf())}function YF(e,t){return e.source===t.source&&e.flags===t.flags}function G4(e,t,n){const r=e.size;if(r!==t.size)return!1;if(!r)return!0;const a=new Array(r),i=e.values();let s,l;for(;(s=i.next())&&!s.done;){const c=t.values();let f=!1,h=0;for(;(l=c.next())&&!l.done;){if(!a[h]&&n.equals(s.value,l.value,s.value,l.value,e,t,n)){f=a[h]=!0;break}h++}if(!f)return!1}return!0}function lc(e,t){let n=e.byteLength;if(t.byteLength!==n||e.byteOffset!==t.byteOffset)return!1;for(;n-- >0;)if(e[n]!==t[n])return!1;return!0}function XF(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function G_(e,t,n,r){return(r===$F||r===DF||r===jF)&&(e.$$typeof||t.$$typeof)?!0:HF(t,r)&&n.equals(e[r],t[r],r,r,e,t,n)}const ZF="[object ArrayBuffer]",JF="[object Arguments]",eq="[object Boolean]",tq="[object DataView]",nq="[object Date]",rq="[object Error]",aq="[object Map]",oq="[object Number]",iq="[object Object]",uq="[object RegExp]",sq="[object Set]",lq="[object String]",pq={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},cq="[object URL]",fq=Object.prototype.toString;function dq({areArrayBuffersEqual:e,areArraysEqual:t,areDataViewsEqual:n,areDatesEqual:r,areErrorsEqual:a,areFunctionsEqual:i,areMapsEqual:s,areNumbersEqual:l,areObjectsEqual:c,arePrimitiveWrappersEqual:f,areRegExpsEqual:h,areSetsEqual:d,areTypedArraysEqual:v,areUrlsEqual:y,unknownTagComparators:B}){return function(b,S,W){if(b===S)return!0;if(b==null||S==null)return!1;const A=typeof b;if(A!==typeof S)return!1;if(A!=="object")return A==="number"?l(b,S,W):A==="function"?i(b,S,W):!1;const O=b.constructor;if(O!==S.constructor)return!1;if(O===Object)return c(b,S,W);if(Array.isArray(b))return t(b,S,W);if(O===Date)return r(b,S,W);if(O===RegExp)return h(b,S,W);if(O===Map)return s(b,S,W);if(O===Set)return d(b,S,W);const w=fq.call(b);if(w===nq)return r(b,S,W);if(w===uq)return h(b,S,W);if(w===aq)return s(b,S,W);if(w===sq)return d(b,S,W);if(w===iq)return typeof b.then!="function"&&typeof S.then!="function"&&c(b,S,W);if(w===cq)return y(b,S,W);if(w===rq)return a(b,S,W);if(w===JF)return c(b,S,W);if(pq[w])return v(b,S,W);if(w===ZF)return e(b,S,W);if(w===tq)return n(b,S,W);if(w===eq||w===oq||w===lq)return f(b,S,W);if(B){let _=B[w];if(!_){const N=RF(b);N&&(_=B[N])}if(_)return _(b,S,W)}return!1}}function hq({circular:e,createCustomConfig:t,strict:n}){let r={areArrayBuffersEqual:LF,areArraysEqual:n?Xu:FF,areDataViewsEqual:qF,areDatesEqual:zF,areErrorsEqual:UF,areFunctionsEqual:VF,areMapsEqual:n?Zm(V4,Xu):V4,areNumbersEqual:GF,areObjectsEqual:n?Xu:KF,arePrimitiveWrappersEqual:QF,areRegExpsEqual:YF,areSetsEqual:n?Zm(G4,Xu):G4,areTypedArraysEqual:n?Zm(lc,Xu):lc,areUrlsEqual:XF,unknownTagComparators:void 0};if(t&&(r=Object.assign({},r,t(r))),e){const a=Sp(r.areArraysEqual),i=Sp(r.areMapsEqual),s=Sp(r.areObjectsEqual),l=Sp(r.areSetsEqual);r=Object.assign({},r,{areArraysEqual:a,areMapsEqual:i,areObjectsEqual:s,areSetsEqual:l})}return r}function mq(e){return function(t,n,r,a,i,s,l){return e(t,n,l)}}function vq({circular:e,comparator:t,createState:n,equals:r,strict:a}){if(n)return function(l,c){const{cache:f=e?new WeakMap:void 0,meta:h}=n();return t(l,c,{cache:f,equals:r,meta:h,strict:a})};if(e)return function(l,c){return t(l,c,{cache:new WeakMap,equals:r,meta:void 0,strict:a})};const i={cache:void 0,equals:r,meta:void 0,strict:a};return function(l,c){return t(l,c,i)}}const gq=Fa();Fa({strict:!0});Fa({circular:!0});Fa({circular:!0,strict:!0});Fa({createInternalComparator:()=>So});Fa({strict:!0,createInternalComparator:()=>So});Fa({circular:!0,createInternalComparator:()=>So});Fa({circular:!0,createInternalComparator:()=>So,strict:!0});function Fa(e={}){const{circular:t=!1,createInternalComparator:n,createState:r,strict:a=!1}=e,i=hq(e),s=dq(i),l=n?n(s):mq(s);return vq({circular:t,comparator:s,createState:r,equals:l,strict:a})}function yq(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function K4(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=-1,r=function a(i){n<0&&(n=i),i-n>t?(e(i),n=-1):yq(a)};requestAnimationFrame(r)}function Pg(e){"@babel/helpers - typeof";return Pg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pg(e)}function bq(e){return wq(e)||xq(e)||Bq(e)||Iq()}function Iq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bq(e,t){if(e){if(typeof e=="string")return Q4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q4(e,t)}}function Q4(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wq(e){if(Array.isArray(e))return e}function Pq(){var e={},t=function(){return null},n=!1,r=function a(i){if(!n){if(Array.isArray(i)){if(!i.length)return;var s=i,l=bq(s),c=l[0],f=l.slice(1);if(typeof c=="number"){K4(a.bind(null,f),c);return}a(c),K4(a.bind(null,f));return}Pg(i)==="object"&&(e=i,t(e)),typeof i=="function"&&i()}};return{stop:function(){n=!0},start:function(i){n=!1,r(i)},subscribe:function(i){return t=i,function(){t=function(){return null}}}}}function Ts(e){"@babel/helpers - typeof";return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ts(e)}function Y4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function X4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Y4(Object(n),!0).forEach(function(r){K_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function K_(e,t,n){return t=Sq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sq(e){var t=Wq(e,"string");return Ts(t)==="symbol"?t:String(t)}function Wq(e,t){if(Ts(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ts(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Aq=function(t,n){return[Object.keys(t),Object.keys(n)].reduce(function(r,a){return r.filter(function(i){return a.includes(i)})})},_q=function(t){return t},Mq=function(t){return t.replace(/([A-Z])/g,function(n){return"-".concat(n.toLowerCase())})},is=function(t,n){return Object.keys(n).reduce(function(r,a){return X4(X4({},r),{},K_({},a,t(a,n[a])))},{})},Z4=function(t,n,r){return t.map(function(a){return"".concat(Mq(a)," ").concat(n,"ms ").concat(r)}).join(",")};function Oq(e,t){return Nq(e)||kq(e,t)||Q_(e,t)||Cq()}function Cq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kq(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function Nq(e){if(Array.isArray(e))return e}function Eq(e){return Hq(e)||Rq(e)||Q_(e)||Tq()}function Tq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q_(e,t){if(e){if(typeof e=="string")return Sg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sg(e,t)}}function Rq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hq(e){if(Array.isArray(e))return Sg(e)}function Sg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var pc=1e-4,Y_=function(t,n){return[0,3*t,3*n-6*t,3*t-3*n+1]},X_=function(t,n){return t.map(function(r,a){return r*Math.pow(n,a)}).reduce(function(r,a){return r+a})},J4=function(t,n){return function(r){var a=Y_(t,n);return X_(a,r)}},jq=function(t,n){return function(r){var a=Y_(t,n),i=[].concat(Eq(a.map(function(s,l){return s*l}).slice(1)),[0]);return X_(i,r)}},eS=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0],i=n[1],s=n[2],l=n[3];if(n.length===1)switch(n[0]){case"linear":a=0,i=0,s=1,l=1;break;case"ease":a=.25,i=.1,s=.25,l=1;break;case"ease-in":a=.42,i=0,s=1,l=1;break;case"ease-out":a=.42,i=0,s=.58,l=1;break;case"ease-in-out":a=0,i=0,s=.58,l=1;break;default:{var c=n[0].split("(");if(c[0]==="cubic-bezier"&&c[1].split(")")[0].split(",").length===4){var f=c[1].split(")")[0].split(",").map(function(b){return parseFloat(b)}),h=Oq(f,4);a=h[0],i=h[1],s=h[2],l=h[3]}}}var d=J4(a,s),v=J4(i,l),y=jq(a,s),B=function(S){return S>1?1:S<0?0:S},I=function(S){for(var W=S>1?1:S,A=W,O=0;O<8;++O){var w=d(A)-W,_=y(A);if(Math.abs(w-W)<pc||_<pc)return v(A);A=B(A-w/_)}return v(A)};return I.isStepper=!1,I},Dq=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.stiff,r=n===void 0?100:n,a=t.damping,i=a===void 0?8:a,s=t.dt,l=s===void 0?17:s,c=function(h,d,v){var y=-(h-d)*r,B=v*i,I=v+(y-B)*l/1e3,b=v*l/1e3+h;return Math.abs(b-d)<pc&&Math.abs(I)<pc?[d,0]:[b,I]};return c.isStepper=!0,c.dt=l,c},$q=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return eS(a);case"spring":return Dq();default:if(a.split("(")[0]==="cubic-bezier")return eS(a)}return typeof a=="function"?a:null};function Rs(e){"@babel/helpers - typeof";return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rs(e)}function tS(e){return qq(e)||Fq(e)||Z_(e)||Lq()}function Lq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fq(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qq(e){if(Array.isArray(e))return Ag(e)}function nS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Gt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nS(Object(n),!0).forEach(function(r){Wg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wg(e,t,n){return t=zq(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zq(e){var t=Uq(e,"string");return Rs(t)==="symbol"?t:String(t)}function Uq(e,t){if(Rs(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Rs(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Vq(e,t){return Qq(e)||Kq(e,t)||Z_(e,t)||Gq()}function Gq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z_(e,t){if(e){if(typeof e=="string")return Ag(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ag(e,t)}}function Ag(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Kq(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function Qq(e){if(Array.isArray(e))return e}var cc=function(t,n,r){return t+(n-t)*r},_g=function(t){var n=t.from,r=t.to;return n!==r},Yq=function e(t,n,r){var a=is(function(i,s){if(_g(s)){var l=t(s.from,s.to,s.velocity),c=Vq(l,2),f=c[0],h=c[1];return Gt(Gt({},s),{},{from:f,velocity:h})}return s},n);return r<1?is(function(i,s){return _g(s)?Gt(Gt({},s),{},{velocity:cc(s.velocity,a[i].velocity,r),from:cc(s.from,a[i].from,r)}):s},n):e(t,a,r-1)};const Xq=(function(e,t,n,r,a){var i=Aq(e,t),s=i.reduce(function(b,S){return Gt(Gt({},b),{},Wg({},S,[e[S],t[S]]))},{}),l=i.reduce(function(b,S){return Gt(Gt({},b),{},Wg({},S,{from:e[S],velocity:0,to:t[S]}))},{}),c=-1,f,h,d=function(){return null},v=function(){return is(function(S,W){return W.from},l)},y=function(){return!Object.values(l).filter(_g).length},B=function(S){f||(f=S);var W=S-f,A=W/n.dt;l=Yq(n,l,A),a(Gt(Gt(Gt({},e),t),v())),f=S,y()||(c=requestAnimationFrame(d))},I=function(S){h||(h=S);var W=(S-h)/r,A=is(function(w,_){return cc.apply(void 0,tS(_).concat([n(W)]))},s);if(a(Gt(Gt(Gt({},e),t),A)),W<1)c=requestAnimationFrame(d);else{var O=is(function(w,_){return cc.apply(void 0,tS(_).concat([n(1)]))},s);a(Gt(Gt(Gt({},e),t),O))}};return d=n.isStepper?B:I,function(){return requestAnimationFrame(d),function(){cancelAnimationFrame(c)}}});function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(e)}var Zq=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function Jq(e,t){if(e==null)return{};var n=ez(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ez(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Jm(e){return az(e)||rz(e)||nz(e)||tz()}function tz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nz(e,t){if(e){if(typeof e=="string")return Mg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mg(e,t)}}function rz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function az(e){if(Array.isArray(e))return Mg(e)}function Mg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ar(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rS(Object(n),!0).forEach(function(r){ns(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ns(e,t,n){return t=J_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function iz(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,J_(r.key),r)}}function uz(e,t,n){return t&&iz(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function J_(e){var t=sz(e,"string");return Si(t)==="symbol"?t:String(t)}function sz(e,t){if(Si(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Si(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Og(e,t)}function Og(e,t){return Og=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Og(e,t)}function pz(e){var t=cz();return function(){var r=fc(e),a;if(t){var i=fc(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return Cg(this,a)}}function Cg(e,t){if(t&&(Si(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return kg(e)}function kg(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fc(e){return fc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},fc(e)}var Kn=(function(e){lz(n,e);var t=pz(n);function n(r,a){var i;oz(this,n),i=t.call(this,r,a);var s=i.props,l=s.isActive,c=s.attributeName,f=s.from,h=s.to,d=s.steps,v=s.children,y=s.duration;if(i.handleStyleChange=i.handleStyleChange.bind(kg(i)),i.changeStyle=i.changeStyle.bind(kg(i)),!l||y<=0)return i.state={style:{}},typeof v=="function"&&(i.state={style:h}),Cg(i);if(d&&d.length)i.state={style:d[0].style};else if(f){if(typeof v=="function")return i.state={style:f},Cg(i);i.state={style:c?ns({},c,f):f}}else i.state={style:{}};return i}return uz(n,[{key:"componentDidMount",value:function(){var a=this.props,i=a.isActive,s=a.canBegin;this.mounted=!0,!(!i||!s)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var i=this.props,s=i.isActive,l=i.canBegin,c=i.attributeName,f=i.shouldReAnimate,h=i.to,d=i.from,v=this.state.style;if(l){if(!s){var y={style:c?ns({},c,h):h};this.state&&v&&(c&&v[c]!==h||!c&&v!==h)&&this.setState(y);return}if(!(gq(a.to,h)&&a.canBegin&&a.isActive)){var B=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var I=B||f?d:a.to;if(this.state&&v){var b={style:c?ns({},c,I):I};(c&&v[c]!==I||!c&&v!==I)&&this.setState(b)}this.runAnimation(ar(ar({},this.props),{},{from:I,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var i=this,s=a.from,l=a.to,c=a.duration,f=a.easing,h=a.begin,d=a.onAnimationEnd,v=a.onAnimationStart,y=Xq(s,l,$q(f),c,this.changeStyle),B=function(){i.stopJSAnimation=y()};this.manager.start([v,h,B,c,d])}},{key:"runStepAnimation",value:function(a){var i=this,s=a.steps,l=a.begin,c=a.onAnimationStart,f=s[0],h=f.style,d=f.duration,v=d===void 0?0:d,y=function(I,b,S){if(S===0)return I;var W=b.duration,A=b.easing,O=A===void 0?"ease":A,w=b.style,_=b.properties,N=b.onAnimationEnd,P=S>0?s[S-1]:b,C=_||Object.keys(w);if(typeof O=="function"||O==="spring")return[].concat(Jm(I),[i.runJSAnimation.bind(i,{from:P.style,to:w,duration:W,easing:O}),W]);var R=Z4(C,W,O),j=ar(ar(ar({},P.style),w),{},{transition:R});return[].concat(Jm(I),[j,W,N]).filter(_q)};return this.manager.start([c].concat(Jm(s.reduce(y,[h,Math.max(v,l)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=Pq());var i=a.begin,s=a.duration,l=a.attributeName,c=a.to,f=a.easing,h=a.onAnimationStart,d=a.onAnimationEnd,v=a.steps,y=a.children,B=this.manager;if(this.unSubscribe=B.subscribe(this.handleStyleChange),typeof f=="function"||typeof y=="function"||f==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var I=l?ns({},l,c):c,b=Z4(Object.keys(I),s,f);B.start([h,i,ar(ar({},I),{},{transition:b}),s,d])}},{key:"render",value:function(){var a=this.props,i=a.children;a.begin;var s=a.duration;a.attributeName,a.easing;var l=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var c=Jq(a,Zq),f=Y.Children.count(i),h=this.state.style;if(typeof i=="function")return i(h);if(!l||f===0||s<=0)return i;var d=function(y){var B=y.props,I=B.style,b=I===void 0?{}:I,S=B.className,W=Y.cloneElement(y,ar(ar({},c),{},{style:ar(ar({},b),h),className:S}));return W};return f===1?d(Y.Children.only(i)):H.createElement("div",null,Y.Children.map(i,function(v){return d(v)}))}}]),n})(Y.PureComponent);Kn.displayName="Animate";Kn.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Kn.propTypes={from:Ye.oneOfType([Ye.object,Ye.string]),to:Ye.oneOfType([Ye.object,Ye.string]),attributeName:Ye.string,duration:Ye.number,begin:Ye.number,easing:Ye.oneOfType([Ye.string,Ye.func]),steps:Ye.arrayOf(Ye.shape({duration:Ye.number.isRequired,style:Ye.object.isRequired,easing:Ye.oneOfType([Ye.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Ye.func]),properties:Ye.arrayOf("string"),onAnimationEnd:Ye.func})),children:Ye.oneOfType([Ye.node,Ye.func]),isActive:Ye.bool,canBegin:Ye.bool,onAnimationEnd:Ye.func,shouldReAnimate:Ye.bool,onAnimationStart:Ye.func,onAnimationReStart:Ye.func};function Hs(e){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hs(e)}function dc(){return dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dc.apply(this,arguments)}function fz(e,t){return vz(e)||mz(e,t)||hz(e,t)||dz()}function dz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hz(e,t){if(e){if(typeof e=="string")return aS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return aS(e,t)}}function aS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function mz(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function vz(e){if(Array.isArray(e))return e}function oS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function iS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oS(Object(n),!0).forEach(function(r){gz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gz(e,t,n){return t=yz(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yz(e){var t=bz(e,"string");return Hs(t)=="symbol"?t:t+""}function bz(e,t){if(Hs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var uS=function(t,n,r,a,i){var s=Math.min(Math.abs(r)/2,Math.abs(a)/2),l=a>=0?1:-1,c=r>=0?1:-1,f=a>=0&&r>=0||a<0&&r<0?1:0,h;if(s>0&&i instanceof Array){for(var d=[0,0,0,0],v=0,y=4;v<y;v++)d[v]=i[v]>s?s:i[v];h="M".concat(t,",").concat(n+l*d[0]),d[0]>0&&(h+="A ".concat(d[0],",").concat(d[0],",0,0,").concat(f,",").concat(t+c*d[0],",").concat(n)),h+="L ".concat(t+r-c*d[1],",").concat(n),d[1]>0&&(h+="A ".concat(d[1],",").concat(d[1],",0,0,").concat(f,`,
        `).concat(t+r,",").concat(n+l*d[1])),h+="L ".concat(t+r,",").concat(n+a-l*d[2]),d[2]>0&&(h+="A ".concat(d[2],",").concat(d[2],",0,0,").concat(f,`,
        `).concat(t+r-c*d[2],",").concat(n+a)),h+="L ".concat(t+c*d[3],",").concat(n+a),d[3]>0&&(h+="A ".concat(d[3],",").concat(d[3],",0,0,").concat(f,`,
        `).concat(t,",").concat(n+a-l*d[3])),h+="Z"}else if(s>0&&i===+i&&i>0){var B=Math.min(s,i);h="M ".concat(t,",").concat(n+l*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(t+c*B,",").concat(n,`
            L `).concat(t+r-c*B,",").concat(n,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(t+r,",").concat(n+l*B,`
            L `).concat(t+r,",").concat(n+a-l*B,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(t+r-c*B,",").concat(n+a,`
            L `).concat(t+c*B,",").concat(n+a,`
            A `).concat(B,",").concat(B,",0,0,").concat(f,",").concat(t,",").concat(n+a-l*B," Z")}else h="M ".concat(t,",").concat(n," h ").concat(r," v ").concat(a," h ").concat(-r," Z");return h},Iz=function(t,n){if(!t||!n)return!1;var r=t.x,a=t.y,i=n.x,s=n.y,l=n.width,c=n.height;if(Math.abs(l)>0&&Math.abs(c)>0){var f=Math.min(i,i+l),h=Math.max(i,i+l),d=Math.min(s,s+c),v=Math.max(s,s+c);return r>=f&&r<=h&&a>=d&&a<=v}return!1},Bz={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},cb=function(t){var n=iS(iS({},Bz),t),r=Y.useRef(),a=Y.useState(-1),i=fz(a,2),s=i[0],l=i[1];Y.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var O=r.current.getTotalLength();O&&l(O)}catch{}},[]);var c=n.x,f=n.y,h=n.width,d=n.height,v=n.radius,y=n.className,B=n.animationEasing,I=n.animationDuration,b=n.animationBegin,S=n.isAnimationActive,W=n.isUpdateAnimationActive;if(c!==+c||f!==+f||h!==+h||d!==+d||h===0||d===0)return null;var A=He("recharts-rectangle",y);return W?H.createElement(Kn,{canBegin:s>0,from:{width:h,height:d,x:c,y:f},to:{width:h,height:d,x:c,y:f},duration:I,animationEasing:B,isActive:W},function(O){var w=O.width,_=O.height,N=O.x,P=O.y;return H.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,isActive:S,easing:B},H.createElement("path",dc({},We(n,!0),{className:A,d:uS(N,P,w,_,v),ref:r})))}):H.createElement("path",dc({},We(n,!0),{className:A,d:uS(c,f,h,d,v)}))},xz=["points","className","baseLinePoints","connectNulls"];function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}function wz(e,t){if(e==null)return{};var n=Pz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Pz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function sS(e){return _z(e)||Az(e)||Wz(e)||Sz()}function Sz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wz(e,t){if(e){if(typeof e=="string")return Ng(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ng(e,t)}}function Az(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _z(e){if(Array.isArray(e))return Ng(e)}function Ng(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var lS=function(t){return t&&t.x===+t.x&&t.y===+t.y},Mz=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=[[]];return t.forEach(function(r){lS(r)?n[n.length-1].push(r):n[n.length-1].length>0&&n.push([])}),lS(t[0])&&n[n.length-1].push(t[0]),n[n.length-1].length<=0&&(n=n.slice(0,-1)),n},us=function(t,n){var r=Mz(t);n&&(r=[r.reduce(function(i,s){return[].concat(sS(i),sS(s))},[])]);var a=r.map(function(i){return i.reduce(function(s,l,c){return"".concat(s).concat(c===0?"M":"L").concat(l.x,",").concat(l.y)},"")}).join("");return r.length===1?"".concat(a,"Z"):a},Oz=function(t,n,r){var a=us(t,r);return"".concat(a.slice(-1)==="Z"?a.slice(0,-1):a,"L").concat(us(n.reverse(),r).slice(1))},Cz=function(t){var n=t.points,r=t.className,a=t.baseLinePoints,i=t.connectNulls,s=wz(t,xz);if(!n||!n.length)return null;var l=He("recharts-polygon",r);if(a&&a.length){var c=s.stroke&&s.stroke!=="none",f=Oz(n,a,i);return H.createElement("g",{className:l},H.createElement("path",ii({},We(s,!0),{fill:f.slice(-1)==="Z"?s.fill:"none",stroke:"none",d:f})),c?H.createElement("path",ii({},We(s,!0),{fill:"none",d:us(n,i)})):null,c?H.createElement("path",ii({},We(s,!0),{fill:"none",d:us(a,i)})):null)}var h=us(n,i);return H.createElement("path",ii({},We(s,!0),{fill:h.slice(-1)==="Z"?s.fill:"none",className:l,d:h}))};function Eg(){return Eg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eg.apply(this,arguments)}var nl=function(t){var n=t.cx,r=t.cy,a=t.r,i=t.className,s=He("recharts-dot",i);return n===+n&&r===+r&&a===+a?H.createElement("circle",Eg({},We(t,!1),Tp(t),{className:s,cx:n,cy:r,r:a})):null};function js(e){"@babel/helpers - typeof";return js=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},js(e)}var kz=["x","y","top","left","width","height","className"];function Tg(){return Tg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tg.apply(this,arguments)}function pS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Nz(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pS(Object(n),!0).forEach(function(r){Ez(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ez(e,t,n){return t=Tz(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tz(e){var t=Rz(e,"string");return js(t)=="symbol"?t:t+""}function Rz(e,t){if(js(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(js(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hz(e,t){if(e==null)return{};var n=jz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function jz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Dz=function(t,n,r,a,i,s){return"M".concat(t,",").concat(i,"v").concat(a,"M").concat(s,",").concat(n,"h").concat(r)},$z=function(t){var n=t.x,r=n===void 0?0:n,a=t.y,i=a===void 0?0:a,s=t.top,l=s===void 0?0:s,c=t.left,f=c===void 0?0:c,h=t.width,d=h===void 0?0:h,v=t.height,y=v===void 0?0:v,B=t.className,I=Hz(t,kz),b=Nz({x:r,y:i,top:l,left:f,width:d,height:y},I);return!le(r)||!le(i)||!le(d)||!le(y)||!le(l)||!le(f)?null:H.createElement("path",Tg({},We(b,!0),{className:He("recharts-cross",B),d:Dz(r,i,d,y,l,f)}))},ev,cS;function Lz(){if(cS)return ev;cS=1;var e=i0(),t=h_(),n=Ar();function r(a,i){return a&&a.length?e(a,n(i,2),t):void 0}return ev=r,ev}var Fz=Lz();const qz=Xe(Fz);var tv,fS;function zz(){if(fS)return tv;fS=1;var e=i0(),t=Ar(),n=m_();function r(a,i){return a&&a.length?e(a,t(i,2),n):void 0}return tv=r,tv}var Uz=zz();const Vz=Xe(Uz);var Gz=["cx","cy","angle","ticks","axisLine"],Kz=["ticks","tick","angle","tickFormatter","stroke"];function Wi(e){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wi(e)}function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ss.apply(this,arguments)}function dS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ao(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dS(Object(n),!0).forEach(function(r){p0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hS(e,t){if(e==null)return{};var n=Qz(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Qz(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Yz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,tM(r.key),r)}}function Xz(e,t,n){return t&&mS(e.prototype,t),n&&mS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zz(e,t,n){return t=hc(t),Jz(e,eM()?Reflect.construct(t,n||[],hc(e).constructor):t.apply(e,n))}function Jz(e,t){if(t&&(Wi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eU(e)}function eU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(eM=function(){return!!e})()}function hc(e){return hc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},hc(e)}function tU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Rg(e,t)}function Rg(e,t){return Rg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Rg(e,t)}function p0(e,t,n){return t=tM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tM(e){var t=nU(e,"string");return Wi(t)=="symbol"?t:t+""}function nU(e,t){if(Wi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Wi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var c0=(function(e){function t(){return Yz(this,t),Zz(this,t,arguments)}return tU(t,e),Xz(t,[{key:"getTickValueCoord",value:function(r){var a=r.coordinate,i=this.props,s=i.angle,l=i.cx,c=i.cy;return ot(l,c,a,s)}},{key:"getTickTextAnchor",value:function(){var r=this.props.orientation,a;switch(r){case"left":a="end";break;case"right":a="start";break;default:a="middle";break}return a}},{key:"getViewBox",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,l=r.ticks,c=qz(l,function(h){return h.coordinate||0}),f=Vz(l,function(h){return h.coordinate||0});return{cx:a,cy:i,startAngle:s,endAngle:s,innerRadius:f.coordinate||0,outerRadius:c.coordinate||0}}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.angle,l=r.ticks,c=r.axisLine,f=hS(r,Gz),h=l.reduce(function(B,I){return[Math.min(B[0],I.coordinate),Math.max(B[1],I.coordinate)]},[1/0,-1/0]),d=ot(a,i,h[0],s),v=ot(a,i,h[1],s),y=ao(ao(ao({},We(f,!1)),{},{fill:"none"},We(c,!1)),{},{x1:d.x,y1:d.y,x2:v.x,y2:v.y});return H.createElement("line",ss({className:"recharts-polar-radius-axis-line"},y))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,l=a.angle,c=a.tickFormatter,f=a.stroke,h=hS(a,Kz),d=this.getTickTextAnchor(),v=We(h,!1),y=We(s,!1),B=i.map(function(I,b){var S=r.getTickValueCoord(I),W=ao(ao(ao(ao({textAnchor:d,transform:"rotate(".concat(90-l,", ").concat(S.x,", ").concat(S.y,")")},v),{},{stroke:"none",fill:f},y),{},{index:b},S),{},{payload:I});return H.createElement(De,ss({className:He("recharts-polar-radius-axis-tick",q_(s)),key:"tick-".concat(I.coordinate)},Ea(r.props,I,b)),t.renderTickItem(s,W,c?c(I.value,b):I.value))});return H.createElement(De,{className:"recharts-polar-radius-axis-ticks"},B)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.axisLine,s=r.tick;return!a||!a.length?null:H.createElement(De,{className:He("recharts-polar-radius-axis",this.props.className)},i&&this.renderAxisLine(),s&&this.renderTicks(),qt.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return H.isValidElement(r)?s=H.cloneElement(r,a):ke(r)?s=r(a):s=H.createElement(yo,ss({},a,{className:"recharts-polar-radius-axis-tick-value"}),i),s}}])})(Y.PureComponent);p0(c0,"displayName","PolarRadiusAxis");p0(c0,"axisType","radiusAxis");p0(c0,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Ai(e){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ai(e)}function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lo.apply(this,arguments)}function vS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function oo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vS(Object(n),!0).forEach(function(r){f0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,rM(r.key),r)}}function aU(e,t,n){return t&&gS(e.prototype,t),n&&gS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function oU(e,t,n){return t=mc(t),iU(e,nM()?Reflect.construct(t,n||[],mc(e).constructor):t.apply(e,n))}function iU(e,t){if(t&&(Ai(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uU(e)}function uU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(nM=function(){return!!e})()}function mc(e){return mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},mc(e)}function sU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Hg(e,t)}function Hg(e,t){return Hg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Hg(e,t)}function f0(e,t,n){return t=rM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rM(e){var t=lU(e,"string");return Ai(t)=="symbol"?t:t+""}function lU(e,t){if(Ai(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ai(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var pU=Math.PI/180,yS=1e-5,d0=(function(e){function t(){return rU(this,t),oU(this,t,arguments)}return sU(t,e),aU(t,[{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.cx,s=a.cy,l=a.radius,c=a.orientation,f=a.tickSize,h=f||8,d=ot(i,s,l,r.coordinate),v=ot(i,s,l+(c==="inner"?-1:1)*h,r.coordinate);return{x1:d.x,y1:d.y,x2:v.x,y2:v.y}}},{key:"getTickTextAnchor",value:function(r){var a=this.props.orientation,i=Math.cos(-r.coordinate*pU),s;return i>yS?s=a==="outer"?"start":"end":i<-yS?s=a==="outer"?"end":"start":s="middle",s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.cx,i=r.cy,s=r.radius,l=r.axisLine,c=r.axisLineType,f=oo(oo({},We(this.props,!1)),{},{fill:"none"},We(l,!1));if(c==="circle")return H.createElement(nl,lo({className:"recharts-polar-angle-axis-line"},f,{cx:a,cy:i,r:s}));var h=this.props.ticks,d=h.map(function(v){return ot(a,i,s,v.coordinate)});return H.createElement(Cz,lo({className:"recharts-polar-angle-axis-line"},f,{points:d}))}},{key:"renderTicks",value:function(){var r=this,a=this.props,i=a.ticks,s=a.tick,l=a.tickLine,c=a.tickFormatter,f=a.stroke,h=We(this.props,!1),d=We(s,!1),v=oo(oo({},h),{},{fill:"none"},We(l,!1)),y=i.map(function(B,I){var b=r.getTickLineCoord(B),S=r.getTickTextAnchor(B),W=oo(oo(oo({textAnchor:S},h),{},{stroke:"none",fill:f},d),{},{index:I,payload:B,x:b.x2,y:b.y2});return H.createElement(De,lo({className:He("recharts-polar-angle-axis-tick",q_(s)),key:"tick-".concat(B.coordinate)},Ea(r.props,B,I)),l&&H.createElement("line",lo({className:"recharts-polar-angle-axis-tick-line"},v,b)),s&&t.renderTickItem(s,W,c?c(B.value,I):B.value))});return H.createElement(De,{className:"recharts-polar-angle-axis-ticks"},y)}},{key:"render",value:function(){var r=this.props,a=r.ticks,i=r.radius,s=r.axisLine;return i<=0||!a||!a.length?null:H.createElement(De,{className:He("recharts-polar-angle-axis",this.props.className)},s&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(r,a,i){var s;return H.isValidElement(r)?s=H.cloneElement(r,a):ke(r)?s=r(a):s=H.createElement(yo,lo({},a,{className:"recharts-polar-angle-axis-tick-value"}),i),s}}])})(Y.PureComponent);f0(d0,"displayName","PolarAngleAxis");f0(d0,"axisType","angleAxis");f0(d0,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var nv,bS;function cU(){if(bS)return nv;bS=1;var e=hA(),t=e(Object.getPrototypeOf,Object);return nv=t,nv}var rv,IS;function fU(){if(IS)return rv;IS=1;var e=Yr(),t=cU(),n=Xr(),r="[object Object]",a=Function.prototype,i=Object.prototype,s=a.toString,l=i.hasOwnProperty,c=s.call(Object);function f(h){if(!n(h)||e(h)!=r)return!1;var d=t(h);if(d===null)return!0;var v=l.call(d,"constructor")&&d.constructor;return typeof v=="function"&&v instanceof v&&s.call(v)==c}return rv=f,rv}var dU=fU();const hU=Xe(dU);var av,BS;function mU(){if(BS)return av;BS=1;var e=Yr(),t=Xr(),n="[object Boolean]";function r(a){return a===!0||a===!1||t(a)&&e(a)==n}return av=r,av}var vU=mU();const gU=Xe(vU);function Ds(e){"@babel/helpers - typeof";return Ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ds(e)}function vc(){return vc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vc.apply(this,arguments)}function yU(e,t){return xU(e)||BU(e,t)||IU(e,t)||bU()}function bU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IU(e,t){if(e){if(typeof e=="string")return xS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xS(e,t)}}function xS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function BU(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function xU(e){if(Array.isArray(e))return e}function wS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function PS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wS(Object(n),!0).forEach(function(r){wU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wU(e,t,n){return t=PU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function PU(e){var t=SU(e,"string");return Ds(t)=="symbol"?t:t+""}function SU(e,t){if(Ds(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var SS=function(t,n,r,a,i){var s=r-a,l;return l="M ".concat(t,",").concat(n),l+="L ".concat(t+r,",").concat(n),l+="L ".concat(t+r-s/2,",").concat(n+i),l+="L ".concat(t+r-s/2-a,",").concat(n+i),l+="L ".concat(t,",").concat(n," Z"),l},WU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},AU=function(t){var n=PS(PS({},WU),t),r=Y.useRef(),a=Y.useState(-1),i=yU(a,2),s=i[0],l=i[1];Y.useEffect(function(){if(r.current&&r.current.getTotalLength)try{var A=r.current.getTotalLength();A&&l(A)}catch{}},[]);var c=n.x,f=n.y,h=n.upperWidth,d=n.lowerWidth,v=n.height,y=n.className,B=n.animationEasing,I=n.animationDuration,b=n.animationBegin,S=n.isUpdateAnimationActive;if(c!==+c||f!==+f||h!==+h||d!==+d||v!==+v||h===0&&d===0||v===0)return null;var W=He("recharts-trapezoid",y);return S?H.createElement(Kn,{canBegin:s>0,from:{upperWidth:0,lowerWidth:0,height:v,x:c,y:f},to:{upperWidth:h,lowerWidth:d,height:v,x:c,y:f},duration:I,animationEasing:B,isActive:S},function(A){var O=A.upperWidth,w=A.lowerWidth,_=A.height,N=A.x,P=A.y;return H.createElement(Kn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:I,easing:B},H.createElement("path",vc({},We(n,!0),{className:W,d:SS(N,P,O,w,_),ref:r})))}):H.createElement("g",null,H.createElement("path",vc({},We(n,!0),{className:W,d:SS(c,f,h,d,v)})))},_U=["option","shapeType","propTransformer","activeClassName","isActive"];function $s(e){"@babel/helpers - typeof";return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$s(e)}function MU(e,t){if(e==null)return{};var n=OU(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function OU(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function WS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function gc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?WS(Object(n),!0).forEach(function(r){CU(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):WS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function CU(e,t,n){return t=kU(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kU(e){var t=NU(e,"string");return $s(t)=="symbol"?t:t+""}function NU(e,t){if($s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function EU(e,t){return gc(gc({},t),e)}function TU(e,t){return e==="symbols"}function AS(e){var t=e.shapeType,n=e.elementProps;switch(t){case"rectangle":return H.createElement(cb,n);case"trapezoid":return H.createElement(AU,n);case"sector":return H.createElement(V_,n);case"symbols":if(TU(t))return H.createElement(Yc,n);break;default:return null}}function RU(e){return Y.isValidElement(e)?e.props:e}function yc(e){var t=e.option,n=e.shapeType,r=e.propTransformer,a=r===void 0?EU:r,i=e.activeClassName,s=i===void 0?"recharts-active-shape":i,l=e.isActive,c=MU(e,_U),f;if(Y.isValidElement(t))f=Y.cloneElement(t,gc(gc({},c),RU(t)));else if(ke(t))f=t(c);else if(hU(t)&&!gU(t)){var h=a(t,c);f=H.createElement(AS,{shapeType:n,elementProps:h})}else{var d=c;f=H.createElement(AS,{shapeType:n,elementProps:d})}return l?H.createElement(De,{className:s},f):f}function h0(e,t){return t!=null&&"trapezoids"in e.props}function m0(e,t){return t!=null&&"sectors"in e.props}function Ls(e,t){return t!=null&&"points"in e.props}function HU(e,t){var n,r,a=e.x===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.x)||e.x===t.x,i=e.y===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.y)||e.y===t.y;return a&&i}function jU(e,t){var n=e.endAngle===t.endAngle,r=e.startAngle===t.startAngle;return n&&r}function DU(e,t){var n=e.x===t.x,r=e.y===t.y,a=e.z===t.z;return n&&r&&a}function $U(e,t){var n;return h0(e,t)?n=HU:m0(e,t)?n=jU:Ls(e,t)&&(n=DU),n}function LU(e,t){var n;return h0(e,t)?n="trapezoids":m0(e,t)?n="sectors":Ls(e,t)&&(n="points"),n}function FU(e,t){if(h0(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}if(m0(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}return Ls(e,t)?t.payload:{}}function qU(e){var t=e.activeTooltipItem,n=e.graphicalItem,r=e.itemData,a=LU(n,t),i=FU(n,t),s=r.filter(function(c,f){var h=Ta(i,c),d=n.props[a].filter(function(B){var I=$U(n,t);return I(B,t)}),v=n.props[a].indexOf(d[d.length-1]),y=f===v;return h&&y}),l=r.indexOf(s[s.length-1]);return l}var Mp;function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(e)}function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ui.apply(this,arguments)}function _S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_S(Object(n),!0).forEach(function(r){qn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_S(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function MS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,oM(r.key),r)}}function UU(e,t,n){return t&&MS(e.prototype,t),n&&MS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function VU(e,t,n){return t=bc(t),GU(e,aM()?Reflect.construct(t,n||[],bc(e).constructor):t.apply(e,n))}function GU(e,t){if(t&&(_i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return KU(e)}function KU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function aM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(aM=function(){return!!e})()}function bc(e){return bc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},bc(e)}function QU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&jg(e,t)}function jg(e,t){return jg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},jg(e,t)}function qn(e,t,n){return t=oM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oM(e){var t=YU(e,"string");return _i(t)=="symbol"?t:t+""}function YU(e,t){if(_i(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ea=(function(e){function t(n){var r;return zU(this,t),r=VU(this,t,[n]),qn(r,"pieRef",null),qn(r,"sectorRefs",[]),qn(r,"id",Da("recharts-pie-")),qn(r,"handleAnimationEnd",function(){var a=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),ke(a)&&a()}),qn(r,"handleAnimationStart",function(){var a=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),ke(a)&&a()}),r.state={isAnimationFinished:!n.isAnimationActive,prevIsAnimationActive:n.isAnimationActive,prevAnimationId:n.animationId,sectorToFocus:0},r}return QU(t,e),UU(t,[{key:"isActiveIndex",value:function(r){var a=this.props.activeIndex;return Array.isArray(a)?a.indexOf(r)!==-1:r===a}},{key:"hasActiveIndex",value:function(){var r=this.props.activeIndex;return Array.isArray(r)?r.length!==0:r||r===0}},{key:"renderLabels",value:function(r){var a=this.props.isAnimationActive;if(a&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.label,l=i.labelLine,c=i.dataKey,f=i.valueKey,h=We(this.props,!1),d=We(s,!1),v=We(l,!1),y=s&&s.offsetRadius||20,B=r.map(function(I,b){var S=(I.startAngle+I.endAngle)/2,W=ot(I.cx,I.cy,I.outerRadius+y,S),A=rt(rt(rt(rt({},h),I),{},{stroke:"none"},d),{},{index:b,textAnchor:t.getTextAnchor(W.x,I.cx)},W),O=rt(rt(rt(rt({},h),I),{},{fill:"none",stroke:I.fill},v),{},{index:b,points:[ot(I.cx,I.cy,I.outerRadius,S),W]}),w=c;return Ne(c)&&Ne(f)?w="value":Ne(c)&&(w=f),H.createElement(De,{key:"label-".concat(I.startAngle,"-").concat(I.endAngle,"-").concat(I.midAngle,"-").concat(b)},l&&t.renderLabelLineItem(l,O,"line"),t.renderLabelItem(s,A,lt(I,w)))});return H.createElement(De,{className:"recharts-pie-labels"},B)}},{key:"renderSectorsStatically",value:function(r){var a=this,i=this.props,s=i.activeShape,l=i.blendStroke,c=i.inactiveShape;return r.map(function(f,h){if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&r.length!==1)return null;var d=a.isActiveIndex(h),v=c&&a.hasActiveIndex()?c:null,y=d?s:v,B=rt(rt({},f),{},{stroke:l?f.fill:f.stroke,tabIndex:-1});return H.createElement(De,ui({ref:function(b){b&&!a.sectorRefs.includes(b)&&a.sectorRefs.push(b)},tabIndex:-1,className:"recharts-pie-sector"},Ea(a.props,f,h),{key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(h)}),H.createElement(yc,ui({option:y,isActive:d,shapeType:"sector"},B)))})}},{key:"renderSectorsWithAnimation",value:function(){var r=this,a=this.props,i=a.sectors,s=a.isAnimationActive,l=a.animationBegin,c=a.animationDuration,f=a.animationEasing,h=a.animationId,d=this.state,v=d.prevSectors,y=d.prevIsAnimationActive;return H.createElement(Kn,{begin:l,duration:c,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(h,"-").concat(y),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(B){var I=B.t,b=[],S=i&&i[0],W=S.startAngle;return i.forEach(function(A,O){var w=v&&v[O],_=O>0?Mn(A,"paddingAngle",0):0;if(w){var N=ht(w.endAngle-w.startAngle,A.endAngle-A.startAngle),P=rt(rt({},A),{},{startAngle:W+_,endAngle:W+N(I)+_});b.push(P),W=P.endAngle}else{var C=A.endAngle,R=A.startAngle,j=ht(0,C-R),T=j(I),q=rt(rt({},A),{},{startAngle:W+_,endAngle:W+T+_});b.push(q),W=q.endAngle}}),H.createElement(De,null,r.renderSectorsStatically(b))})}},{key:"attachKeyboardHandlers",value:function(r){var a=this;r.onkeydown=function(i){if(!i.altKey)switch(i.key){case"ArrowLeft":{var s=++a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[s].focus(),a.setState({sectorToFocus:s});break}case"ArrowRight":{var l=--a.state.sectorToFocus<0?a.sectorRefs.length-1:a.state.sectorToFocus%a.sectorRefs.length;a.sectorRefs[l].focus(),a.setState({sectorToFocus:l});break}case"Escape":{a.sectorRefs[a.state.sectorToFocus].blur(),a.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var r=this.props,a=r.sectors,i=r.isAnimationActive,s=this.state.prevSectors;return i&&a&&a.length&&(!s||!Ta(s,a))?this.renderSectorsWithAnimation():this.renderSectorsStatically(a)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var r=this,a=this.props,i=a.hide,s=a.sectors,l=a.className,c=a.label,f=a.cx,h=a.cy,d=a.innerRadius,v=a.outerRadius,y=a.isAnimationActive,B=this.state.isAnimationFinished;if(i||!s||!s.length||!le(f)||!le(h)||!le(d)||!le(v))return null;var I=He("recharts-pie",l);return H.createElement(De,{tabIndex:this.props.rootTabIndex,className:I,ref:function(S){r.pieRef=S}},this.renderSectors(),c&&this.renderLabels(s),qt.renderCallByParent(this.props,null,!1),(!y||B)&&pr.renderCallByParent(this.props,s,!1))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return a.prevIsAnimationActive!==r.isAnimationActive?{prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:[],isAnimationFinished:!0}:r.isAnimationActive&&r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curSectors:r.sectors,prevSectors:a.curSectors,isAnimationFinished:!0}:r.sectors!==a.curSectors?{curSectors:r.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(r,a){return r>a?"start":r<a?"end":"middle"}},{key:"renderLabelLineItem",value:function(r,a,i){if(H.isValidElement(r))return H.cloneElement(r,a);if(ke(r))return r(a);var s=He("recharts-pie-label-line",typeof r!="boolean"?r.className:"");return H.createElement(ka,ui({},a,{key:i,type:"linear",className:s}))}},{key:"renderLabelItem",value:function(r,a,i){if(H.isValidElement(r))return H.cloneElement(r,a);var s=i;if(ke(r)&&(s=r(a),H.isValidElement(s)))return s;var l=He("recharts-pie-label-text",typeof r!="boolean"&&!ke(r)?r.className:"");return H.createElement(yo,ui({},a,{alignmentBaseline:"middle",className:l}),s)}}])})(Y.PureComponent);Mp=ea;qn(ea,"displayName","Pie");qn(ea,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Zr.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});qn(ea,"parseDeltaAngle",function(e,t){var n=an(t-e),r=Math.min(Math.abs(t-e),360);return n*r});qn(ea,"getRealPieData",function(e){var t=e.data,n=e.children,r=We(e,!1),a=sn(n,Xs);return t&&t.length?t.map(function(i,s){return rt(rt(rt({payload:i},r),i),a&&a[s]&&a[s].props)}):a&&a.length?a.map(function(i){return rt(rt({},r),i.props)}):[]});qn(ea,"parseCoordinateOfPie",function(e,t){var n=t.top,r=t.left,a=t.width,i=t.height,s=F_(a,i),l=r+on(e.cx,a,a/2),c=n+on(e.cy,i,i/2),f=on(e.innerRadius,s,0),h=on(e.outerRadius,s,s*.8),d=e.maxRadius||Math.sqrt(a*a+i*i)/2;return{cx:l,cy:c,innerRadius:f,outerRadius:h,maxRadius:d}});qn(ea,"getComposedData",function(e){var t=e.item,n=e.offset,r=t.type.defaultProps!==void 0?rt(rt({},t.type.defaultProps),t.props):t.props,a=Mp.getRealPieData(r);if(!a||!a.length)return null;var i=r.cornerRadius,s=r.startAngle,l=r.endAngle,c=r.paddingAngle,f=r.dataKey,h=r.nameKey,d=r.valueKey,v=r.tooltipType,y=Math.abs(r.minAngle),B=Mp.parseCoordinateOfPie(r,n),I=Mp.parseDeltaAngle(s,l),b=Math.abs(I),S=f;Ne(f)&&Ne(d)?(lr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S="value"):Ne(f)&&(lr(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),S=d);var W=a.filter(function(P){return lt(P,S,0)!==0}).length,A=(b>=360?W:W-1)*c,O=b-W*y-A,w=a.reduce(function(P,C){var R=lt(C,S,0);return P+(le(R)?R:0)},0),_;if(w>0){var N;_=a.map(function(P,C){var R=lt(P,S,0),j=lt(P,h,C),T=(le(R)?R:0)/w,q;C?q=N.endAngle+an(I)*c*(R!==0?1:0):q=s;var L=q+an(I)*((R!==0?y:0)+T*O),K=(q+L)/2,U=(B.innerRadius+B.outerRadius)/2,V=[{name:j,value:R,payload:P,dataKey:S,type:v}],D=ot(B.cx,B.cy,U,K);return N=rt(rt(rt({percent:T,cornerRadius:i,name:j,tooltipPayload:V,midAngle:K,middleRadius:U,tooltipPosition:D},P),B),{},{value:lt(P,S),startAngle:q,endAngle:L,payload:P,paddingAngle:an(I)*c}),N})}return rt(rt({},B),{},{sectors:_,data:a})});var ov,OS;function XU(){if(OS)return ov;OS=1;var e=Math.ceil,t=Math.max;function n(r,a,i,s){for(var l=-1,c=t(e((a-r)/(i||1)),0),f=Array(c);c--;)f[s?c:++l]=r,r+=i;return f}return ov=n,ov}var iv,CS;function iM(){if(CS)return iv;CS=1;var e=OA(),t=1/0,n=17976931348623157e292;function r(a){if(!a)return a===0?a:0;if(a=e(a),a===t||a===-t){var i=a<0?-1:1;return i*n}return a===a?a:0}return iv=r,iv}var uv,kS;function ZU(){if(kS)return uv;kS=1;var e=XU(),t=Jc(),n=iM();function r(a){return function(i,s,l){return l&&typeof l!="number"&&t(i,s,l)&&(s=l=void 0),i=n(i),s===void 0?(s=i,i=0):s=n(s),l=l===void 0?i<s?1:-1:n(l),e(i,s,l,a)}}return uv=r,uv}var sv,NS;function JU(){if(NS)return sv;NS=1;var e=ZU(),t=e();return sv=t,sv}var eV=JU();const Ic=Xe(eV);function Fs(e){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fs(e)}function ES(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function TS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ES(Object(n),!0).forEach(function(r){uM(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ES(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uM(e,t,n){return t=tV(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tV(e){var t=nV(e,"string");return Fs(t)=="symbol"?t:t+""}function nV(e,t){if(Fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var rV=["Webkit","Moz","O","ms"],aV=function(t,n){var r=t.replace(/(\w)/,function(i){return i.toUpperCase()}),a=rV.reduce(function(i,s){return TS(TS({},i),{},uM({},s+r,n))},{});return a[t]=n,a};function Mi(e){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mi(e)}function Bc(){return Bc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bc.apply(this,arguments)}function RS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function lv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?RS(Object(n),!0).forEach(function(r){Pn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):RS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function HS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,lM(r.key),r)}}function iV(e,t,n){return t&&HS(e.prototype,t),n&&HS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function uV(e,t,n){return t=xc(t),sV(e,sM()?Reflect.construct(t,n||[],xc(e).constructor):t.apply(e,n))}function sV(e,t){if(t&&(Mi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lV(e)}function lV(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(sM=function(){return!!e})()}function xc(e){return xc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},xc(e)}function pV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Dg(e,t)}function Dg(e,t){return Dg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Dg(e,t)}function Pn(e,t,n){return t=lM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lM(e){var t=cV(e,"string");return Mi(t)=="symbol"?t:t+""}function cV(e,t){if(Mi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Mi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var fV=function(t){var n=t.data,r=t.startIndex,a=t.endIndex,i=t.x,s=t.width,l=t.travellerWidth;if(!n||!n.length)return{};var c=n.length,f=as().domain(Ic(0,c)).range([i,i+s-l]),h=f.domain().map(function(d){return f(d)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:f(r),endX:f(a),scale:f,scaleValues:h}},jS=function(t){return t.changedTouches&&!!t.changedTouches.length},Oi=(function(e){function t(n){var r;return oV(this,t),r=uV(this,t,[n]),Pn(r,"handleDrag",function(a){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(a):r.state.isSlideMoving&&r.handleSlideDrag(a)}),Pn(r,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&r.handleDrag(a.changedTouches[0])}),Pn(r,"handleDragEnd",function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=r.props,i=a.endIndex,s=a.onDragEnd,l=a.startIndex;s==null||s({endIndex:i,startIndex:l})}),r.detachDragEndListener()}),Pn(r,"handleLeaveWrapper",function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=window.setTimeout(r.handleDragEnd,r.props.leaveTimeOut))}),Pn(r,"handleEnterSlideOrTraveller",function(){r.setState({isTextActive:!0})}),Pn(r,"handleLeaveSlideOrTraveller",function(){r.setState({isTextActive:!1})}),Pn(r,"handleSlideDragStart",function(a){var i=jS(a)?a.changedTouches[0]:a;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:i.pageX}),r.attachDragEndListener()}),r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(r,"startX"),endX:r.handleTravellerDragStart.bind(r,"endX")},r.state={},r}return pV(t,e),iV(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(r){var a=r.startX,i=r.endX,s=this.state.scaleValues,l=this.props,c=l.gap,f=l.data,h=f.length-1,d=Math.min(a,i),v=Math.max(a,i),y=t.getIndexInRange(s,d),B=t.getIndexInRange(s,v);return{startIndex:y-y%c,endIndex:B===h?h:B-B%c}}},{key:"getTextOfTick",value:function(r){var a=this.props,i=a.data,s=a.tickFormatter,l=a.dataKey,c=lt(i[r],l,r);return ke(s)?s(c,r):c}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(r){var a=this.state,i=a.slideMoveStartX,s=a.startX,l=a.endX,c=this.props,f=c.x,h=c.width,d=c.travellerWidth,v=c.startIndex,y=c.endIndex,B=c.onChange,I=r.pageX-i;I>0?I=Math.min(I,f+h-d-l,f+h-d-s):I<0&&(I=Math.max(I,f-s,f-l));var b=this.getIndex({startX:s+I,endX:l+I});(b.startIndex!==v||b.endIndex!==y)&&B&&B(b),this.setState({startX:s+I,endX:l+I,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,a){var i=jS(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:i.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(r){var a=this.state,i=a.brushMoveStartX,s=a.movingTravellerId,l=a.endX,c=a.startX,f=this.state[s],h=this.props,d=h.x,v=h.width,y=h.travellerWidth,B=h.onChange,I=h.gap,b=h.data,S={startX:this.state.startX,endX:this.state.endX},W=r.pageX-i;W>0?W=Math.min(W,d+v-y-f):W<0&&(W=Math.max(W,d-f)),S[s]=f+W;var A=this.getIndex(S),O=A.startIndex,w=A.endIndex,_=function(){var P=b.length-1;return s==="startX"&&(l>c?O%I===0:w%I===0)||l<c&&w===P||s==="endX"&&(l>c?w%I===0:O%I===0)||l>c&&w===P};this.setState(Pn(Pn({},s,f+W),"brushMoveStartX",r.pageX),function(){B&&_()&&B(A)})}},{key:"handleTravellerMoveKeyboard",value:function(r,a){var i=this,s=this.state,l=s.scaleValues,c=s.startX,f=s.endX,h=this.state[a],d=l.indexOf(h);if(d!==-1){var v=d+r;if(!(v===-1||v>=l.length)){var y=l[v];a==="startX"&&y>=f||a==="endX"&&y<=c||this.setState(Pn({},a,y),function(){i.props.onChange(i.getIndex({startX:i.state.startX,endX:i.state.endX}))})}}}},{key:"renderBackground",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,c=r.fill,f=r.stroke;return H.createElement("rect",{stroke:f,fill:c,x:a,y:i,width:s,height:l})}},{key:"renderPanorama",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,c=r.data,f=r.children,h=r.padding,d=Y.Children.only(f);return d?H.cloneElement(d,{x:a,y:i,width:s,height:l,margin:h,compact:!0,data:c}):null}},{key:"renderTravellerLayer",value:function(r,a){var i,s,l=this,c=this.props,f=c.y,h=c.travellerWidth,d=c.height,v=c.traveller,y=c.ariaLabel,B=c.data,I=c.startIndex,b=c.endIndex,S=Math.max(r,this.props.x),W=lv(lv({},We(this.props,!1)),{},{x:S,y:f,width:h,height:d}),A=y||"Min value: ".concat((i=B[I])===null||i===void 0?void 0:i.name,", Max value: ").concat((s=B[b])===null||s===void 0?void 0:s.name);return H.createElement(De,{tabIndex:0,role:"slider","aria-label":A,"aria-valuenow":r,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(w){["ArrowLeft","ArrowRight"].includes(w.key)&&(w.preventDefault(),w.stopPropagation(),l.handleTravellerMoveKeyboard(w.key==="ArrowRight"?1:-1,a))},onFocus:function(){l.setState({isTravellerFocused:!0})},onBlur:function(){l.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(v,W))}},{key:"renderSlide",value:function(r,a){var i=this.props,s=i.y,l=i.height,c=i.stroke,f=i.travellerWidth,h=Math.min(r,a)+f,d=Math.max(Math.abs(a-r)-f,0);return H.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:c,fillOpacity:.2,x:h,y:s,width:d,height:l})}},{key:"renderText",value:function(){var r=this.props,a=r.startIndex,i=r.endIndex,s=r.y,l=r.height,c=r.travellerWidth,f=r.stroke,h=this.state,d=h.startX,v=h.endX,y=5,B={pointerEvents:"none",fill:f};return H.createElement(De,{className:"recharts-brush-texts"},H.createElement(yo,Bc({textAnchor:"end",verticalAnchor:"middle",x:Math.min(d,v)-y,y:s+l/2},B),this.getTextOfTick(a)),H.createElement(yo,Bc({textAnchor:"start",verticalAnchor:"middle",x:Math.max(d,v)+c+y,y:s+l/2},B),this.getTextOfTick(i)))}},{key:"render",value:function(){var r=this.props,a=r.data,i=r.className,s=r.children,l=r.x,c=r.y,f=r.width,h=r.height,d=r.alwaysShowText,v=this.state,y=v.startX,B=v.endX,I=v.isTextActive,b=v.isSlideMoving,S=v.isTravellerMoving,W=v.isTravellerFocused;if(!a||!a.length||!le(l)||!le(c)||!le(f)||!le(h)||f<=0||h<=0)return null;var A=He("recharts-brush",i),O=H.Children.count(s)===1,w=aV("userSelect","none");return H.createElement(De,{className:A,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:w},this.renderBackground(),O&&this.renderPanorama(),this.renderSlide(y,B),this.renderTravellerLayer(y,"startX"),this.renderTravellerLayer(B,"endX"),(I||b||S||W||d)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(r){var a=r.x,i=r.y,s=r.width,l=r.height,c=r.stroke,f=Math.floor(i+l/2)-1;return H.createElement(H.Fragment,null,H.createElement("rect",{x:a,y:i,width:s,height:l,fill:c,stroke:"none"}),H.createElement("line",{x1:a+1,y1:f,x2:a+s-1,y2:f,fill:"none",stroke:"#fff"}),H.createElement("line",{x1:a+1,y1:f+2,x2:a+s-1,y2:f+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(r,a){var i;return H.isValidElement(r)?i=H.cloneElement(r,a):ke(r)?i=r(a):i=t.renderDefaultTraveller(a),i}},{key:"getDerivedStateFromProps",value:function(r,a){var i=r.data,s=r.width,l=r.x,c=r.travellerWidth,f=r.updateId,h=r.startIndex,d=r.endIndex;if(i!==a.prevData||f!==a.prevUpdateId)return lv({prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:l,prevWidth:s},i&&i.length?fV({data:i,width:s,x:l,travellerWidth:c,startIndex:h,endIndex:d}):{scale:null,scaleValues:null});if(a.scale&&(s!==a.prevWidth||l!==a.prevX||c!==a.prevTravellerWidth)){a.scale.range([l,l+s-c]);var v=a.scale.domain().map(function(y){return a.scale(y)});return{prevData:i,prevTravellerWidth:c,prevUpdateId:f,prevX:l,prevWidth:s,startX:a.scale(r.startIndex),endX:a.scale(r.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(r,a){for(var i=r.length,s=0,l=i-1;l-s>1;){var c=Math.floor((s+l)/2);r[c]>a?l=c:s=c}return a>=r[l]?l:s}}])})(Y.PureComponent);Pn(Oi,"displayName","Brush");Pn(Oi,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var pv,DS;function dV(){if(DS)return pv;DS=1;var e=Ry();function t(n,r){var a;return e(n,function(i,s,l){return a=r(i,s,l),!a}),!!a}return pv=t,pv}var cv,$S;function hV(){if($S)return cv;$S=1;var e=uA(),t=Ar(),n=dV(),r=yn(),a=Jc();function i(s,l,c){var f=r(s)?e:n;return c&&a(s,l,c)&&(l=void 0),f(s,t(l,3))}return cv=i,cv}var mV=hV();const vV=Xe(mV);var wr=function(t,n){var r=t.alwaysShow,a=t.ifOverflow;return r&&(a="extendDomain"),a===n},fv,LS;function gV(){if(LS)return fv;LS=1;var e=SA();function t(n,r,a){r=="__proto__"&&e?e(n,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[r]=a}return fv=t,fv}var dv,FS;function yV(){if(FS)return dv;FS=1;var e=gV(),t=wA(),n=Ar();function r(a,i){var s={};return i=n(i,3),t(a,function(l,c,f){e(s,c,i(l,c,f))}),s}return dv=r,dv}var bV=yV();const IV=Xe(bV);var hv,qS;function BV(){if(qS)return hv;qS=1;function e(t,n){for(var r=-1,a=t==null?0:t.length;++r<a;)if(!n(t[r],r,t))return!1;return!0}return hv=e,hv}var mv,zS;function xV(){if(zS)return mv;zS=1;var e=Ry();function t(n,r){var a=!0;return e(n,function(i,s,l){return a=!!r(i,s,l),a}),a}return mv=t,mv}var vv,US;function wV(){if(US)return vv;US=1;var e=BV(),t=xV(),n=Ar(),r=yn(),a=Jc();function i(s,l,c){var f=r(s)?e:t;return c&&a(s,l,c)&&(l=void 0),f(s,n(l,3))}return vv=i,vv}var PV=wV();const pM=Xe(PV);var SV=["x","y"];function qs(e){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qs(e)}function $g(){return $g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$g.apply(this,arguments)}function VS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Zu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?VS(Object(n),!0).forEach(function(r){WV(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):VS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function WV(e,t,n){return t=AV(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function AV(e){var t=_V(e,"string");return qs(t)=="symbol"?t:t+""}function _V(e,t){if(qs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(qs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function MV(e,t){if(e==null)return{};var n=OV(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function OV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function CV(e,t){var n=e.x,r=e.y,a=MV(e,SV),i="".concat(n),s=parseInt(i,10),l="".concat(r),c=parseInt(l,10),f="".concat(t.height||a.height),h=parseInt(f,10),d="".concat(t.width||a.width),v=parseInt(d,10);return Zu(Zu(Zu(Zu(Zu({},t),a),s?{x:s}:{}),c?{y:c}:{}),{},{height:h,width:v,name:t.name,radius:t.radius})}function GS(e){return H.createElement(yc,$g({shapeType:"rectangle",propTransformer:CV,activeClassName:"recharts-active-bar"},e))}var kV=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(r,a){if(typeof t=="number")return t;var i=typeof r=="number";return i?t(r,a):(i||Io(),n)}},NV=["value","background"],cM;function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ci(e)}function EV(e,t){if(e==null)return{};var n=TV(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function TV(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function wc(){return wc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wc.apply(this,arguments)}function KS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?KS(Object(n),!0).forEach(function(r){_a(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):KS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function RV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function QS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,dM(r.key),r)}}function HV(e,t,n){return t&&QS(e.prototype,t),n&&QS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function jV(e,t,n){return t=Pc(t),DV(e,fM()?Reflect.construct(t,n||[],Pc(e).constructor):t.apply(e,n))}function DV(e,t){if(t&&(Ci(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $V(e)}function $V(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(fM=function(){return!!e})()}function Pc(e){return Pc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Pc(e)}function LV(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Lg(e,t)}function Lg(e,t){return Lg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Lg(e,t)}function _a(e,t,n){return t=dM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dM(e){var t=FV(e,"string");return Ci(t)=="symbol"?t:t+""}function FV(e,t){if(Ci(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ci(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Sr=(function(e){function t(){var n;RV(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=jV(this,t,[].concat(a)),_a(n,"state",{isAnimationFinished:!1}),_a(n,"id",Da("recharts-bar-")),_a(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),s&&s()}),_a(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),s&&s()}),n}return LV(t,e),HV(t,[{key:"renderRectanglesStatically",value:function(r){var a=this,i=this.props,s=i.shape,l=i.dataKey,c=i.activeIndex,f=i.activeBar,h=We(this.props,!1);return r&&r.map(function(d,v){var y=v===c,B=y?f:s,I=Mt(Mt(Mt({},h),d),{},{isActive:y,option:B,index:v,dataKey:l,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return H.createElement(De,wc({className:"recharts-bar-rectangle"},Ea(a.props,d,v),{key:"rectangle-".concat(d==null?void 0:d.x,"-").concat(d==null?void 0:d.y,"-").concat(d==null?void 0:d.value,"-").concat(v)}),H.createElement(GS,I))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,a=this.props,i=a.data,s=a.layout,l=a.isAnimationActive,c=a.animationBegin,f=a.animationDuration,h=a.animationEasing,d=a.animationId,v=this.state.prevData;return H.createElement(Kn,{begin:c,duration:f,isActive:l,easing:h,from:{t:0},to:{t:1},key:"bar-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(y){var B=y.t,I=i.map(function(b,S){var W=v&&v[S];if(W){var A=ht(W.x,b.x),O=ht(W.y,b.y),w=ht(W.width,b.width),_=ht(W.height,b.height);return Mt(Mt({},b),{},{x:A(B),y:O(B),width:w(B),height:_(B)})}if(s==="horizontal"){var N=ht(0,b.height),P=N(B);return Mt(Mt({},b),{},{y:b.y+b.height-P,height:P})}var C=ht(0,b.width),R=C(B);return Mt(Mt({},b),{},{width:R})});return H.createElement(De,null,r.renderRectanglesStatically(I))})}},{key:"renderRectangles",value:function(){var r=this.props,a=r.data,i=r.isAnimationActive,s=this.state.prevData;return i&&a&&a.length&&(!s||!Ta(s,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var r=this,a=this.props,i=a.data,s=a.dataKey,l=a.activeIndex,c=We(this.props.background,!1);return i.map(function(f,h){f.value;var d=f.background,v=EV(f,NV);if(!d)return null;var y=Mt(Mt(Mt(Mt(Mt({},v),{},{fill:"#eee"},d),c),Ea(r.props,f,h)),{},{onAnimationStart:r.handleAnimationStart,onAnimationEnd:r.handleAnimationEnd,dataKey:s,index:h,className:"recharts-bar-background-rectangle"});return H.createElement(GS,wc({key:"background-bar-".concat(h),option:r.props.background,isActive:h===l},y))})}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.data,l=i.xAxis,c=i.yAxis,f=i.layout,h=i.children,d=sn(h,tu);if(!d)return null;var v=f==="vertical"?s[0].height/2:s[0].width/2,y=function(b,S){var W=Array.isArray(b.value)?b.value[1]:b.value;return{x:b.x,y:b.y,value:W,errorVal:lt(b,S)}},B={clipPath:r?"url(#clipPath-".concat(a,")"):null};return H.createElement(De,B,d.map(function(I){return H.cloneElement(I,{key:"error-bar-".concat(a,"-").concat(I.props.dataKey),data:s,xAxis:l,yAxis:c,layout:f,offset:v,dataPointFormatter:y})}))}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.data,s=r.className,l=r.xAxis,c=r.yAxis,f=r.left,h=r.top,d=r.width,v=r.height,y=r.isAnimationActive,B=r.background,I=r.id;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,S=He("recharts-bar",s),W=l&&l.allowDataOverflow,A=c&&c.allowDataOverflow,O=W||A,w=Ne(I)?this.id:I;return H.createElement(De,{className:S},W||A?H.createElement("defs",null,H.createElement("clipPath",{id:"clipPath-".concat(w)},H.createElement("rect",{x:W?f:f-d/2,y:A?h:h-v/2,width:W?d:d*2,height:A?v:v*2}))):null,H.createElement(De,{className:"recharts-bar-rectangles",clipPath:O?"url(#clipPath-".concat(w,")"):null},B?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(O,w),(!y||b)&&pr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curData:r.data,prevData:a.curData}:r.data!==a.curData?{curData:r.data}:null}}])})(Y.PureComponent);cM=Sr;_a(Sr,"displayName","Bar");_a(Sr,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});_a(Sr,"getComposedData",function(e){var t=e.props,n=e.item,r=e.barPosition,a=e.bandSize,i=e.xAxis,s=e.yAxis,l=e.xAxisTicks,c=e.yAxisTicks,f=e.stackedData,h=e.dataStartIndex,d=e.displayedData,v=e.offset,y=d9(r,n);if(!y)return null;var B=t.layout,I=n.type.defaultProps,b=I!==void 0?Mt(Mt({},I),n.props):n.props,S=b.dataKey,W=b.children,A=b.minPointSize,O=B==="horizontal"?s:i,w=f?O.scale.domain():null,_=I9({numericAxis:O}),N=sn(W,Xs),P=d.map(function(C,R){var j,T,q,L,K,U;f?j=h9(f[h+R],w):(j=lt(C,S),Array.isArray(j)||(j=[_,j]));var V=kV(A,cM.defaultProps.minPointSize)(j[1],R);if(B==="horizontal"){var D,Q=[s.scale(j[0]),s.scale(j[1])],X=Q[0],E=Q[1];T=w4({axis:i,ticks:l,bandSize:a,offset:y.offset,entry:C,index:R}),q=(D=E??X)!==null&&D!==void 0?D:void 0,L=y.size;var F=X-E;if(K=Number.isNaN(F)?0:F,U={x:T,y:s.y,width:L,height:s.height},Math.abs(V)>0&&Math.abs(K)<Math.abs(V)){var J=an(K||V)*(Math.abs(V)-Math.abs(K));q-=J,K+=J}}else{var ue=[i.scale(j[0]),i.scale(j[1])],he=ue[0],ge=ue[1];if(T=he,q=w4({axis:s,ticks:c,bandSize:a,offset:y.offset,entry:C,index:R}),L=ge-he,K=y.size,U={x:i.x,y:q,width:i.width,height:K},Math.abs(V)>0&&Math.abs(L)<Math.abs(V)){var ye=an(L||V)*(Math.abs(V)-Math.abs(L));L+=ye}}return Mt(Mt(Mt({},C),{},{x:T,y:q,width:L,height:K,value:f?j:j[1],payload:C,background:U},N&&N[R]&&N[R].props),{},{tooltipPayload:[$_(n,C)],tooltipPosition:{x:T+L/2,y:q+K/2}})});return Mt({data:P,layout:B},v)});function zs(e){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zs(e)}function qV(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function YS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,hM(r.key),r)}}function zV(e,t,n){return t&&YS(e.prototype,t),n&&YS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function XS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function or(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?XS(Object(n),!0).forEach(function(r){v0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):XS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function v0(e,t,n){return t=hM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hM(e){var t=UV(e,"string");return zs(t)=="symbol"?t:t+""}function UV(e,t){if(zs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(zs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var fb=function(t,n,r,a,i){var s=t.width,l=t.height,c=t.layout,f=t.children,h=Object.keys(n),d={left:r.left,leftMirror:r.left,right:s-r.right,rightMirror:s-r.right,top:r.top,topMirror:r.top,bottom:l-r.bottom,bottomMirror:l-r.bottom},v=!!Sn(f,Sr);return h.reduce(function(y,B){var I=n[B],b=I.orientation,S=I.domain,W=I.padding,A=W===void 0?{}:W,O=I.mirror,w=I.reversed,_="".concat(b).concat(O?"Mirror":""),N,P,C,R,j;if(I.type==="number"&&(I.padding==="gap"||I.padding==="no-gap")){var T=S[1]-S[0],q=1/0,L=I.categoricalDomain.sort();if(L.forEach(function(ue,he){he>0&&(q=Math.min((ue||0)-(L[he-1]||0),q))}),Number.isFinite(q)){var K=q/T,U=I.layout==="vertical"?r.height:r.width;if(I.padding==="gap"&&(N=K*U/2),I.padding==="no-gap"){var V=on(t.barCategoryGap,K*U),D=K*U/2;N=D-V-(D-V)/U*V}}}a==="xAxis"?P=[r.left+(A.left||0)+(N||0),r.left+r.width-(A.right||0)-(N||0)]:a==="yAxis"?P=c==="horizontal"?[r.top+r.height-(A.bottom||0),r.top+(A.top||0)]:[r.top+(A.top||0)+(N||0),r.top+r.height-(A.bottom||0)-(N||0)]:P=I.range,w&&(P=[P[1],P[0]]);var Q=R_(I,i,v),X=Q.scale,E=Q.realScaleType;X.domain(S).range(P),H_(X);var F=j_(X,or(or({},I),{},{realScaleType:E}));a==="xAxis"?(j=b==="top"&&!O||b==="bottom"&&O,C=r.left,R=d[_]-j*I.height):a==="yAxis"&&(j=b==="left"&&!O||b==="right"&&O,C=d[_]-j*I.width,R=r.top);var J=or(or(or({},I),F),{},{realScaleType:E,x:C,y:R,scale:X,width:a==="xAxis"?r.width:I.width,height:a==="yAxis"?r.height:I.height});return J.bandSize=ic(J,F),!I.hide&&a==="xAxis"?d[_]+=(j?-1:1)*J.height:I.hide||(d[_]+=(j?-1:1)*J.width),or(or({},y),{},v0({},B,J))},{})},mM=function(t,n){var r=t.x,a=t.y,i=n.x,s=n.y;return{x:Math.min(r,i),y:Math.min(a,s),width:Math.abs(i-r),height:Math.abs(s-a)}},VV=function(t){var n=t.x1,r=t.y1,a=t.x2,i=t.y2;return mM({x:n,y:r},{x:a,y:i})},vM=(function(){function e(t){qV(this,e),this.scale=t}return zV(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.bandAware,i=r.position;if(n!==void 0){if(i)switch(i){case"start":return this.scale(n);case"middle":{var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+s}case"end":{var l=this.bandwidth?this.bandwidth():0;return this.scale(n)+l}default:return this.scale(n)}if(a){var c=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+c}return this.scale(n)}}},{key:"isInRange",value:function(n){var r=this.range(),a=r[0],i=r[r.length-1];return a<=i?n>=a&&n<=i:n>=i&&n<=a}}],[{key:"create",value:function(n){return new e(n)}}])})();v0(vM,"EPS",1e-4);var db=function(t){var n=Object.keys(t).reduce(function(r,a){return or(or({},r),{},v0({},a,vM.create(t[a])))},{});return or(or({},n),{},{apply:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.bandAware,l=i.position;return IV(a,function(c,f){return n[f].apply(c,{bandAware:s,position:l})})},isInRange:function(a){return pM(a,function(i,s){return n[s].isInRange(i)})}})};function GV(e){return(e%180+180)%180}var KV=function(t){var n=t.width,r=t.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=GV(a),s=i*Math.PI/180,l=Math.atan(r/n),c=s>l&&s<Math.PI-l?r/Math.sin(s):n/Math.cos(s);return Math.abs(c)},gv,ZS;function QV(){if(ZS)return gv;ZS=1;var e=Ar(),t=Ys(),n=Xc();function r(a){return function(i,s,l){var c=Object(i);if(!t(i)){var f=e(s,3);i=n(i),s=function(d){return f(c[d],d,c)}}var h=a(i,s,l);return h>-1?c[f?i[h]:h]:void 0}}return gv=r,gv}var yv,JS;function YV(){if(JS)return yv;JS=1;var e=iM();function t(n){var r=e(n),a=r%1;return r===r?a?r-a:r:0}return yv=t,yv}var bv,e3;function XV(){if(e3)return bv;e3=1;var e=yA(),t=Ar(),n=YV(),r=Math.max;function a(i,s,l){var c=i==null?0:i.length;if(!c)return-1;var f=l==null?0:n(l);return f<0&&(f=r(c+f,0)),e(i,t(s,3),f)}return bv=a,bv}var Iv,t3;function ZV(){if(t3)return Iv;t3=1;var e=QV(),t=XV(),n=e(t);return Iv=n,Iv}var JV=ZV();const eG=Xe(JV);var tG=NW();const nG=Xe(tG);var rG=nG(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),hb=Y.createContext(void 0),mb=Y.createContext(void 0),gM=Y.createContext(void 0),yM=Y.createContext({}),bM=Y.createContext(void 0),IM=Y.createContext(0),BM=Y.createContext(0),n3=function(t){var n=t.state,r=n.xAxisMap,a=n.yAxisMap,i=n.offset,s=t.clipPathId,l=t.children,c=t.width,f=t.height,h=rG(i);return H.createElement(hb.Provider,{value:r},H.createElement(mb.Provider,{value:a},H.createElement(yM.Provider,{value:i},H.createElement(gM.Provider,{value:h},H.createElement(bM.Provider,{value:s},H.createElement(IM.Provider,{value:f},H.createElement(BM.Provider,{value:c},l)))))))},aG=function(){return Y.useContext(bM)},xM=function(t){var n=Y.useContext(hb);n==null&&Io();var r=n[t];return r==null&&Io(),r},oG=function(){var t=Y.useContext(hb);return Wa(t)},iG=function(){var t=Y.useContext(mb),n=eG(t,function(r){return pM(r.domain,Number.isFinite)});return n||Wa(t)},wM=function(t){var n=Y.useContext(mb);n==null&&Io();var r=n[t];return r==null&&Io(),r},uG=function(){var t=Y.useContext(gM);return t},sG=function(){return Y.useContext(yM)},vb=function(){return Y.useContext(BM)},gb=function(){return Y.useContext(IM)};function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(e)}function lG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,SM(r.key),r)}}function cG(e,t,n){return t&&pG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function fG(e,t,n){return t=Sc(t),dG(e,PM()?Reflect.construct(t,n||[],Sc(e).constructor):t.apply(e,n))}function dG(e,t){if(t&&(ki(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hG(e)}function hG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function PM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(PM=function(){return!!e})()}function Sc(e){return Sc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Sc(e)}function mG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Fg(e,t)}function Fg(e,t){return Fg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Fg(e,t)}function r3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function a3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?r3(Object(n),!0).forEach(function(r){yb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yb(e,t,n){return t=SM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function SM(e){var t=vG(e,"string");return ki(t)=="symbol"?t:t+""}function vG(e,t){if(ki(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function gG(e,t){return BG(e)||IG(e,t)||bG(e,t)||yG()}function yG(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bG(e,t){if(e){if(typeof e=="string")return o3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o3(e,t)}}function o3(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function IG(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function BG(e){if(Array.isArray(e))return e}function qg(){return qg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qg.apply(this,arguments)}var xG=function(t,n){var r;return H.isValidElement(t)?r=H.cloneElement(t,n):ke(t)?r=t(n):r=H.createElement("line",qg({},n,{className:"recharts-reference-line-line"})),r},wG=function(t,n,r,a,i,s,l,c,f){var h=i.x,d=i.y,v=i.width,y=i.height;if(r){var B=f.y,I=t.y.apply(B,{position:s});if(wr(f,"discard")&&!t.y.isInRange(I))return null;var b=[{x:h+v,y:I},{x:h,y:I}];return c==="left"?b.reverse():b}if(n){var S=f.x,W=t.x.apply(S,{position:s});if(wr(f,"discard")&&!t.x.isInRange(W))return null;var A=[{x:W,y:d+y},{x:W,y:d}];return l==="top"?A.reverse():A}if(a){var O=f.segment,w=O.map(function(_){return t.apply(_,{position:s})});return wr(f,"discard")&&vV(w,function(_){return!t.isInRange(_)})?null:w}return null};function PG(e){var t=e.x,n=e.y,r=e.segment,a=e.xAxisId,i=e.yAxisId,s=e.shape,l=e.className,c=e.alwaysShow,f=aG(),h=xM(a),d=wM(i),v=uG();if(!f||!v)return null;lr(c===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var y=db({x:h.scale,y:d.scale}),B=Rt(t),I=Rt(n),b=r&&r.length===2,S=wG(y,B,I,b,v,e.position,h.orientation,d.orientation,e);if(!S)return null;var W=gG(S,2),A=W[0],O=A.x,w=A.y,_=W[1],N=_.x,P=_.y,C=wr(e,"hidden")?"url(#".concat(f,")"):void 0,R=a3(a3({clipPath:C},We(e,!0)),{},{x1:O,y1:w,x2:N,y2:P});return H.createElement(De,{className:He("recharts-reference-line",l)},xG(s,R),qt.renderCallByParent(e,VV({x1:O,y1:w,x2:N,y2:P})))}var bb=(function(e){function t(){return lG(this,t),fG(this,t,arguments)}return mG(t,e),cG(t,[{key:"render",value:function(){return H.createElement(PG,this.props)}}])})(H.Component);yb(bb,"displayName","ReferenceLine");yb(bb,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function zg(){return zg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zg.apply(this,arguments)}function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ni(e)}function i3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function u3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?i3(Object(n),!0).forEach(function(r){g0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function SG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function WG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,AM(r.key),r)}}function AG(e,t,n){return t&&WG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _G(e,t,n){return t=Wc(t),MG(e,WM()?Reflect.construct(t,n||[],Wc(e).constructor):t.apply(e,n))}function MG(e,t){if(t&&(Ni(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return OG(e)}function OG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function WM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(WM=function(){return!!e})()}function Wc(e){return Wc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Wc(e)}function CG(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ug(e,t)}function Ug(e,t){return Ug=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ug(e,t)}function g0(e,t,n){return t=AM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function AM(e){var t=kG(e,"string");return Ni(t)=="symbol"?t:t+""}function kG(e,t){if(Ni(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ni(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var NG=function(t){var n=t.x,r=t.y,a=t.xAxis,i=t.yAxis,s=db({x:a.scale,y:i.scale}),l=s.apply({x:n,y:r},{bandAware:!0});return wr(t,"discard")&&!s.isInRange(l)?null:l},y0=(function(e){function t(){return SG(this,t),_G(this,t,arguments)}return CG(t,e),AG(t,[{key:"render",value:function(){var r=this.props,a=r.x,i=r.y,s=r.r,l=r.alwaysShow,c=r.clipPathId,f=Rt(a),h=Rt(i);if(lr(l===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!f||!h)return null;var d=NG(this.props);if(!d)return null;var v=d.x,y=d.y,B=this.props,I=B.shape,b=B.className,S=wr(this.props,"hidden")?"url(#".concat(c,")"):void 0,W=u3(u3({clipPath:S},We(this.props,!0)),{},{cx:v,cy:y});return H.createElement(De,{className:He("recharts-reference-dot",b)},t.renderDot(I,W),qt.renderCallByParent(this.props,{x:v-s,y:y-s,width:2*s,height:2*s}))}}])})(H.Component);g0(y0,"displayName","ReferenceDot");g0(y0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});g0(y0,"renderDot",function(e,t){var n;return H.isValidElement(e)?n=H.cloneElement(e,t):ke(e)?n=e(t):n=H.createElement(nl,zg({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),n});function Vg(){return Vg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vg.apply(this,arguments)}function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(e)}function s3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function l3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s3(Object(n),!0).forEach(function(r){b0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function EG(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function TG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,MM(r.key),r)}}function RG(e,t,n){return t&&TG(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function HG(e,t,n){return t=Ac(t),jG(e,_M()?Reflect.construct(t,n||[],Ac(e).constructor):t.apply(e,n))}function jG(e,t){if(t&&(Ei(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return DG(e)}function DG(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _M(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_M=function(){return!!e})()}function Ac(e){return Ac=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ac(e)}function $G(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Gg(e,t)}function Gg(e,t){return Gg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Gg(e,t)}function b0(e,t,n){return t=MM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function MM(e){var t=LG(e,"string");return Ei(t)=="symbol"?t:t+""}function LG(e,t){if(Ei(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ei(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var FG=function(t,n,r,a,i){var s=i.x1,l=i.x2,c=i.y1,f=i.y2,h=i.xAxis,d=i.yAxis;if(!h||!d)return null;var v=db({x:h.scale,y:d.scale}),y={x:t?v.x.apply(s,{position:"start"}):v.x.rangeMin,y:r?v.y.apply(c,{position:"start"}):v.y.rangeMin},B={x:n?v.x.apply(l,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(f,{position:"end"}):v.y.rangeMax};return wr(i,"discard")&&(!v.isInRange(y)||!v.isInRange(B))?null:mM(y,B)},I0=(function(e){function t(){return EG(this,t),HG(this,t,arguments)}return $G(t,e),RG(t,[{key:"render",value:function(){var r=this.props,a=r.x1,i=r.x2,s=r.y1,l=r.y2,c=r.className,f=r.alwaysShow,h=r.clipPathId;lr(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var d=Rt(a),v=Rt(i),y=Rt(s),B=Rt(l),I=this.props.shape;if(!d&&!v&&!y&&!B&&!I)return null;var b=FG(d,v,y,B,this.props);if(!b&&!I)return null;var S=wr(this.props,"hidden")?"url(#".concat(h,")"):void 0;return H.createElement(De,{className:He("recharts-reference-area",c)},t.renderRect(I,l3(l3({clipPath:S},We(this.props,!0)),b)),qt.renderCallByParent(this.props,b))}}])})(H.Component);b0(I0,"displayName","ReferenceArea");b0(I0,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});b0(I0,"renderRect",function(e,t){var n;return H.isValidElement(e)?n=H.cloneElement(e,t):ke(e)?n=e(t):n=H.createElement(cb,Vg({},t,{className:"recharts-reference-area-rect"})),n});function OM(e,t,n){if(t<1)return[];if(t===1&&n===void 0)return e;for(var r=[],a=0;a<e.length;a+=t)r.push(e[a]);return r}function qG(e,t,n){var r={width:e.width+t.width,height:e.height+t.height};return KV(r,n)}function zG(e,t,n){var r=n==="width",a=e.x,i=e.y,s=e.width,l=e.height;return t===1?{start:r?a:i,end:r?a+s:i+l}:{start:r?a+s:i+l,end:r?a:i}}function _c(e,t,n,r,a){if(e*t<e*r||e*t>e*a)return!1;var i=n();return e*(t-e*i/2-r)>=0&&e*(t+e*i/2-a)<=0}function UG(e,t){return OM(e,t+1)}function VG(e,t,n,r,a){for(var i=(r||[]).slice(),s=t.start,l=t.end,c=0,f=1,h=s,d=function(){var B=r==null?void 0:r[c];if(B===void 0)return{v:OM(r,f)};var I=c,b,S=function(){return b===void 0&&(b=n(B,I)),b},W=B.coordinate,A=c===0||_c(e,W,S,h,l);A||(c=0,h=s,f+=1),A&&(h=W+e*(S()/2+a),c+=f)},v;f<=i.length;)if(v=d(),v)return v.v;return[]}function Us(e){"@babel/helpers - typeof";return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Us(e)}function p3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p3(Object(n),!0).forEach(function(r){GG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function GG(e,t,n){return t=KG(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KG(e){var t=QG(e,"string");return Us(t)=="symbol"?t:t+""}function QG(e,t){if(Us(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Us(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function YG(e,t,n,r,a){for(var i=(r||[]).slice(),s=i.length,l=t.start,c=t.end,f=function(v){var y=i[v],B,I=function(){return B===void 0&&(B=n(y,v)),B};if(v===s-1){var b=e*(y.coordinate+e*I()/2-c);i[v]=y=Jt(Jt({},y),{},{tickCoord:b>0?y.coordinate-b*e:y.coordinate})}else i[v]=y=Jt(Jt({},y),{},{tickCoord:y.coordinate});var S=_c(e,y.tickCoord,I,l,c);S&&(c=y.tickCoord-e*(I()/2+a),i[v]=Jt(Jt({},y),{},{isShow:!0}))},h=s-1;h>=0;h--)f(h);return i}function XG(e,t,n,r,a,i){var s=(r||[]).slice(),l=s.length,c=t.start,f=t.end;if(i){var h=r[l-1],d=n(h,l-1),v=e*(h.coordinate+e*d/2-f);s[l-1]=h=Jt(Jt({},h),{},{tickCoord:v>0?h.coordinate-v*e:h.coordinate});var y=_c(e,h.tickCoord,function(){return d},c,f);y&&(f=h.tickCoord-e*(d/2+a),s[l-1]=Jt(Jt({},h),{},{isShow:!0}))}for(var B=i?l-1:l,I=function(W){var A=s[W],O,w=function(){return O===void 0&&(O=n(A,W)),O};if(W===0){var _=e*(A.coordinate-e*w()/2-c);s[W]=A=Jt(Jt({},A),{},{tickCoord:_<0?A.coordinate-_*e:A.coordinate})}else s[W]=A=Jt(Jt({},A),{},{tickCoord:A.coordinate});var N=_c(e,A.tickCoord,w,c,f);N&&(c=A.tickCoord+e*(w()/2+a),s[W]=Jt(Jt({},A),{},{isShow:!0}))},b=0;b<B;b++)I(b);return s}function Ib(e,t,n){var r=e.tick,a=e.ticks,i=e.viewBox,s=e.minTickGap,l=e.orientation,c=e.interval,f=e.tickFormatter,h=e.unit,d=e.angle;if(!a||!a.length||!r)return[];if(le(c)||Zr.isSsr)return UG(a,typeof c=="number"&&le(c)?c:0);var v=[],y=l==="top"||l==="bottom"?"width":"height",B=h&&y==="width"?rs(h,{fontSize:t,letterSpacing:n}):{width:0,height:0},I=function(A,O){var w=ke(f)?f(A.value,O):A.value;return y==="width"?qG(rs(w,{fontSize:t,letterSpacing:n}),B,d):rs(w,{fontSize:t,letterSpacing:n})[y]},b=a.length>=2?an(a[1].coordinate-a[0].coordinate):1,S=zG(i,b,y);return c==="equidistantPreserveStart"?VG(b,S,I,a,s):(c==="preserveStart"||c==="preserveStartEnd"?v=XG(b,S,I,a,s,c==="preserveStartEnd"):v=YG(b,S,I,a,s),v.filter(function(W){return W.isShow}))}var ZG=["viewBox"],JG=["viewBox"],eK=["ticks"];function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ti(e)}function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},si.apply(this,arguments)}function c3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?c3(Object(n),!0).forEach(function(r){Bb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bv(e,t){if(e==null)return{};var n=tK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function tK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function nK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,kM(r.key),r)}}function rK(e,t,n){return t&&f3(e.prototype,t),n&&f3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function aK(e,t,n){return t=Mc(t),oK(e,CM()?Reflect.construct(t,n||[],Mc(e).constructor):t.apply(e,n))}function oK(e,t){if(t&&(Ti(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return iK(e)}function iK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function CM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(CM=function(){return!!e})()}function Mc(e){return Mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Mc(e)}function uK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Kg(e,t)}function Kg(e,t){return Kg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Kg(e,t)}function Bb(e,t,n){return t=kM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kM(e){var t=sK(e,"string");return Ti(t)=="symbol"?t:t+""}function sK(e,t){if(Ti(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var nu=(function(e){function t(n){var r;return nK(this,t),r=aK(this,t,[n]),r.state={fontSize:"",letterSpacing:""},r}return uK(t,e),rK(t,[{key:"shouldComponentUpdate",value:function(r,a){var i=r.viewBox,s=Bv(r,ZG),l=this.props,c=l.viewBox,f=Bv(l,JG);return!pi(i,c)||!pi(s,f)||!pi(a,this.state)}},{key:"componentDidMount",value:function(){var r=this.layerReference;if(r){var a=r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(r){var a=this.props,i=a.x,s=a.y,l=a.width,c=a.height,f=a.orientation,h=a.tickSize,d=a.mirror,v=a.tickMargin,y,B,I,b,S,W,A=d?-1:1,O=r.tickSize||h,w=le(r.tickCoord)?r.tickCoord:r.coordinate;switch(f){case"top":y=B=r.coordinate,b=s+ +!d*c,I=b-A*O,W=I-A*v,S=w;break;case"left":I=b=r.coordinate,B=i+ +!d*l,y=B-A*O,S=y-A*v,W=w;break;case"right":I=b=r.coordinate,B=i+ +d*l,y=B+A*O,S=y+A*v,W=w;break;default:y=B=r.coordinate,b=s+ +d*c,I=b+A*O,W=I+A*v,S=w;break}return{line:{x1:y,y1:I,x2:B,y2:b},tick:{x:S,y:W}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s;switch(a){case"left":s=i?"start":"end";break;case"right":s=i?"end":"start";break;default:s="middle";break}return s}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,a=r.orientation,i=r.mirror,s="end";switch(a){case"left":case"right":s="middle";break;case"top":s=i?"start":"end";break;default:s=i?"end":"start";break}return s}},{key:"renderAxisLine",value:function(){var r=this.props,a=r.x,i=r.y,s=r.width,l=r.height,c=r.orientation,f=r.mirror,h=r.axisLine,d=rn(rn(rn({},We(this.props,!1)),We(h,!1)),{},{fill:"none"});if(c==="top"||c==="bottom"){var v=+(c==="top"&&!f||c==="bottom"&&f);d=rn(rn({},d),{},{x1:a,y1:i+v*l,x2:a+s,y2:i+v*l})}else{var y=+(c==="left"&&!f||c==="right"&&f);d=rn(rn({},d),{},{x1:a+y*s,y1:i,x2:a+y*s,y2:i+l})}return H.createElement("line",si({},d,{className:He("recharts-cartesian-axis-line",Mn(h,"className"))}))}},{key:"renderTicks",value:function(r,a,i){var s=this,l=this.props,c=l.tickLine,f=l.stroke,h=l.tick,d=l.tickFormatter,v=l.unit,y=Ib(rn(rn({},this.props),{},{ticks:r}),a,i),B=this.getTickTextAnchor(),I=this.getTickVerticalAnchor(),b=We(this.props,!1),S=We(h,!1),W=rn(rn({},b),{},{fill:"none"},We(c,!1)),A=y.map(function(O,w){var _=s.getTickLineCoord(O),N=_.line,P=_.tick,C=rn(rn(rn(rn({textAnchor:B,verticalAnchor:I},b),{},{stroke:"none",fill:f},S),P),{},{index:w,payload:O,visibleTicksCount:y.length,tickFormatter:d});return H.createElement(De,si({className:"recharts-cartesian-axis-tick",key:"tick-".concat(O.value,"-").concat(O.coordinate,"-").concat(O.tickCoord)},Ea(s.props,O,w)),c&&H.createElement("line",si({},W,N,{className:He("recharts-cartesian-axis-tick-line",Mn(c,"className"))})),h&&t.renderTickItem(h,C,"".concat(ke(d)?d(O.value,w):O.value).concat(v||"")))});return H.createElement("g",{className:"recharts-cartesian-axis-ticks"},A)}},{key:"render",value:function(){var r=this,a=this.props,i=a.axisLine,s=a.width,l=a.height,c=a.ticksGenerator,f=a.className,h=a.hide;if(h)return null;var d=this.props,v=d.ticks,y=Bv(d,eK),B=v;return ke(c)&&(B=v&&v.length>0?c(this.props):c(y)),s<=0||l<=0||!B||!B.length?null:H.createElement(De,{className:He("recharts-cartesian-axis",f),ref:function(b){r.layerReference=b}},i&&this.renderAxisLine(),this.renderTicks(B,this.state.fontSize,this.state.letterSpacing),qt.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(r,a,i){var s;return H.isValidElement(r)?s=H.cloneElement(r,a):ke(r)?s=r(a):s=H.createElement(yo,si({},a,{className:"recharts-cartesian-axis-tick-value"}),i),s}}])})(Y.Component);Bb(nu,"displayName","CartesianAxis");Bb(nu,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var lK=["x1","y1","x2","y2","key"],pK=["offset"];function Bo(e){"@babel/helpers - typeof";return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bo(e)}function d3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d3(Object(n),!0).forEach(function(r){cK(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cK(e,t,n){return t=fK(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fK(e){var t=dK(e,"string");return Bo(t)=="symbol"?t:t+""}function dK(e,t){if(Bo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Bo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}function h3(e,t){if(e==null)return{};var n=hK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function hK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var mK=function(t){var n=t.fill;if(!n||n==="none")return null;var r=t.fillOpacity,a=t.x,i=t.y,s=t.width,l=t.height,c=t.ry;return H.createElement("rect",{x:a,y:i,ry:c,width:s,height:l,stroke:"none",fill:n,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function NM(e,t){var n;if(H.isValidElement(e))n=H.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=t.x1,a=t.y1,i=t.x2,s=t.y2,l=t.key,c=h3(t,lK),f=We(c,!1);f.offset;var h=h3(f,pK);n=H.createElement("line",ho({},h,{x1:r,y1:a,x2:i,y2:s,fill:"none",key:l}))}return n}function vK(e){var t=e.x,n=e.width,r=e.horizontal,a=r===void 0?!0:r,i=e.horizontalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(l,c){var f=en(en({},e),{},{x1:t,y1:l,x2:t+n,y2:l,key:"line-".concat(c),index:c});return NM(a,f)});return H.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function gK(e){var t=e.y,n=e.height,r=e.vertical,a=r===void 0?!0:r,i=e.verticalPoints;if(!a||!i||!i.length)return null;var s=i.map(function(l,c){var f=en(en({},e),{},{x1:l,y1:t,x2:l,y2:t+n,key:"line-".concat(c),index:c});return NM(a,f)});return H.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function yK(e){var t=e.horizontalFill,n=e.fillOpacity,r=e.x,a=e.y,i=e.width,s=e.height,l=e.horizontalPoints,c=e.horizontal,f=c===void 0?!0:c;if(!f||!t||!t.length)return null;var h=l.map(function(v){return Math.round(v+a-a)}).sort(function(v,y){return v-y});a!==h[0]&&h.unshift(0);var d=h.map(function(v,y){var B=!h[y+1],I=B?a+s-v:h[y+1]-v;if(I<=0)return null;var b=y%t.length;return H.createElement("rect",{key:"react-".concat(y),y:v,x:r,height:I,width:i,stroke:"none",fill:t[b],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return H.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},d)}function bK(e){var t=e.vertical,n=t===void 0?!0:t,r=e.verticalFill,a=e.fillOpacity,i=e.x,s=e.y,l=e.width,c=e.height,f=e.verticalPoints;if(!n||!r||!r.length)return null;var h=f.map(function(v){return Math.round(v+i-i)}).sort(function(v,y){return v-y});i!==h[0]&&h.unshift(0);var d=h.map(function(v,y){var B=!h[y+1],I=B?i+l-v:h[y+1]-v;if(I<=0)return null;var b=y%r.length;return H.createElement("rect",{key:"react-".concat(y),x:v,y:s,width:I,height:c,stroke:"none",fill:r[b],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return H.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},d)}var IK=function(t,n){var r=t.xAxis,a=t.width,i=t.height,s=t.offset;return T_(Ib(en(en(en({},nu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.left,s.left+s.width,n)},BK=function(t,n){var r=t.yAxis,a=t.width,i=t.height,s=t.offset;return T_(Ib(en(en(en({},nu.defaultProps),r),{},{ticks:Fr(r,!0),viewBox:{x:0,y:0,width:a,height:i}})),s.top,s.top+s.height,n)},ni={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function Oc(e){var t,n,r,a,i,s,l=vb(),c=gb(),f=sG(),h=en(en({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:ni.stroke,fill:(n=e.fill)!==null&&n!==void 0?n:ni.fill,horizontal:(r=e.horizontal)!==null&&r!==void 0?r:ni.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:ni.horizontalFill,vertical:(i=e.vertical)!==null&&i!==void 0?i:ni.vertical,verticalFill:(s=e.verticalFill)!==null&&s!==void 0?s:ni.verticalFill,x:le(e.x)?e.x:f.left,y:le(e.y)?e.y:f.top,width:le(e.width)?e.width:f.width,height:le(e.height)?e.height:f.height}),d=h.x,v=h.y,y=h.width,B=h.height,I=h.syncWithTicks,b=h.horizontalValues,S=h.verticalValues,W=oG(),A=iG();if(!le(y)||y<=0||!le(B)||B<=0||!le(d)||d!==+d||!le(v)||v!==+v)return null;var O=h.verticalCoordinatesGenerator||IK,w=h.horizontalCoordinatesGenerator||BK,_=h.horizontalPoints,N=h.verticalPoints;if((!_||!_.length)&&ke(w)){var P=b&&b.length,C=w({yAxis:A?en(en({},A),{},{ticks:P?b:A.ticks}):void 0,width:l,height:c,offset:f},P?!0:I);lr(Array.isArray(C),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Bo(C),"]")),Array.isArray(C)&&(_=C)}if((!N||!N.length)&&ke(O)){var R=S&&S.length,j=O({xAxis:W?en(en({},W),{},{ticks:R?S:W.ticks}):void 0,width:l,height:c,offset:f},R?!0:I);lr(Array.isArray(j),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Bo(j),"]")),Array.isArray(j)&&(N=j)}return H.createElement("g",{className:"recharts-cartesian-grid"},H.createElement(mK,{fill:h.fill,fillOpacity:h.fillOpacity,x:h.x,y:h.y,width:h.width,height:h.height,ry:h.ry}),H.createElement(vK,ho({},h,{offset:f,horizontalPoints:_,xAxis:W,yAxis:A})),H.createElement(gK,ho({},h,{offset:f,verticalPoints:N,xAxis:W,yAxis:A})),H.createElement(yK,ho({},h,{horizontalPoints:_})),H.createElement(bK,ho({},h,{verticalPoints:N})))}Oc.displayName="CartesianGrid";var xK=["type","layout","connectNulls","ref"],wK=["key"];function Ri(e){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ri(e)}function m3(e,t){if(e==null)return{};var n=PK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function PK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}function v3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function wn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v3(Object(n),!0).forEach(function(r){ir(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ri(e){return _K(e)||AK(e)||WK(e)||SK()}function SK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WK(e,t){if(e){if(typeof e=="string")return Qg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qg(e,t)}}function AK(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _K(e){if(Array.isArray(e))return Qg(e)}function Qg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function MK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,TM(r.key),r)}}function OK(e,t,n){return t&&g3(e.prototype,t),n&&g3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function CK(e,t,n){return t=Cc(t),kK(e,EM()?Reflect.construct(t,n||[],Cc(e).constructor):t.apply(e,n))}function kK(e,t){if(t&&(Ri(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return NK(e)}function NK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function EM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(EM=function(){return!!e})()}function Cc(e){return Cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Cc(e)}function EK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yg(e,t)}function Yg(e,t){return Yg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Yg(e,t)}function ir(e,t,n){return t=TM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function TM(e){var t=TK(e,"string");return Ri(t)=="symbol"?t:t+""}function TK(e,t){if(Ri(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ri(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var qr=(function(e){function t(){var n;MK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=CK(this,t,[].concat(a)),ir(n,"state",{isAnimationFinished:!0,totalLength:0}),ir(n,"generateSimpleStrokeDasharray",function(s,l){return"".concat(l,"px ").concat(s-l,"px")}),ir(n,"getStrokeDasharray",function(s,l,c){var f=c.reduce(function(S,W){return S+W});if(!f)return n.generateSimpleStrokeDasharray(l,s);for(var h=Math.floor(s/f),d=s%f,v=l-s,y=[],B=0,I=0;B<c.length;I+=c[B],++B)if(I+c[B]>d){y=[].concat(ri(c.slice(0,B)),[d-I]);break}var b=y.length%2===0?[0,v]:[v];return[].concat(ri(t.repeat(c,h)),ri(y),b).map(function(S){return"".concat(S,"px")}).join(", ")}),ir(n,"id",Da("recharts-line-")),ir(n,"pathRef",function(s){n.mainCurve=s}),ir(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0}),n.props.onAnimationEnd&&n.props.onAnimationEnd()}),ir(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1}),n.props.onAnimationStart&&n.props.onAnimationStart()}),n}return EK(t,e),OK(t,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();this.setState({totalLength:r})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var r=this.getTotalLength();r!==this.state.totalLength&&this.setState({totalLength:r})}}},{key:"getTotalLength",value:function(){var r=this.mainCurve;try{return r&&r.getTotalLength&&r.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(r,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var i=this.props,s=i.points,l=i.xAxis,c=i.yAxis,f=i.layout,h=i.children,d=sn(h,tu);if(!d)return null;var v=function(I,b){return{x:I.x,y:I.y,value:I.value,errorVal:lt(I.payload,b)}},y={clipPath:r?"url(#clipPath-".concat(a,")"):null};return H.createElement(De,y,d.map(function(B){return H.cloneElement(B,{key:"bar-".concat(B.props.dataKey),data:s,xAxis:l,yAxis:c,layout:f,dataPointFormatter:v})}))}},{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var l=this.props,c=l.dot,f=l.points,h=l.dataKey,d=We(this.props,!1),v=We(c,!0),y=f.map(function(I,b){var S=wn(wn(wn({key:"dot-".concat(b),r:3},d),v),{},{index:b,cx:I.x,cy:I.y,value:I.value,dataKey:h,payload:I.payload,points:f});return t.renderDotItem(c,S)}),B={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return H.createElement(De,ls({className:"recharts-line-dots",key:"dots"},B),y)}},{key:"renderCurveStatically",value:function(r,a,i,s){var l=this.props,c=l.type,f=l.layout,h=l.connectNulls;l.ref;var d=m3(l,xK),v=wn(wn(wn({},We(d,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(i,")"):null,points:r},s),{},{type:c,layout:f,connectNulls:h});return H.createElement(ka,ls({},v,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(r,a){var i=this,s=this.props,l=s.points,c=s.strokeDasharray,f=s.isAnimationActive,h=s.animationBegin,d=s.animationDuration,v=s.animationEasing,y=s.animationId,B=s.animateNewValues,I=s.width,b=s.height,S=this.state,W=S.prevPoints,A=S.totalLength;return H.createElement(Kn,{begin:h,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"line-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(O){var w=O.t;if(W){var _=W.length/l.length,N=l.map(function(T,q){var L=Math.floor(q*_);if(W[L]){var K=W[L],U=ht(K.x,T.x),V=ht(K.y,T.y);return wn(wn({},T),{},{x:U(w),y:V(w)})}if(B){var D=ht(I*2,T.x),Q=ht(b/2,T.y);return wn(wn({},T),{},{x:D(w),y:Q(w)})}return wn(wn({},T),{},{x:T.x,y:T.y})});return i.renderCurveStatically(N,r,a)}var P=ht(0,A),C=P(w),R;if(c){var j="".concat(c).split(/[,\s]+/gim).map(function(T){return parseFloat(T)});R=i.getStrokeDasharray(C,A,j)}else R=i.generateSimpleStrokeDasharray(A,C);return i.renderCurveStatically(l,r,a,{strokeDasharray:R})})}},{key:"renderCurve",value:function(r,a){var i=this.props,s=i.points,l=i.isAnimationActive,c=this.state,f=c.prevPoints,h=c.totalLength;return l&&s&&s.length&&(!f&&h>0||!Ta(f,s))?this.renderCurveWithAnimation(r,a):this.renderCurveStatically(s,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,l=a.points,c=a.className,f=a.xAxis,h=a.yAxis,d=a.top,v=a.left,y=a.width,B=a.height,I=a.isAnimationActive,b=a.id;if(i||!l||!l.length)return null;var S=this.state.isAnimationFinished,W=l.length===1,A=He("recharts-line",c),O=f&&f.allowDataOverflow,w=h&&h.allowDataOverflow,_=O||w,N=Ne(b)?this.id:b,P=(r=We(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},C=P.r,R=C===void 0?3:C,j=P.strokeWidth,T=j===void 0?2:j,q=jW(s)?s:{},L=q.clipDot,K=L===void 0?!0:L,U=R*2+T;return H.createElement(De,{className:A},O||w?H.createElement("defs",null,H.createElement("clipPath",{id:"clipPath-".concat(N)},H.createElement("rect",{x:O?v:v-y/2,y:w?d:d-B/2,width:O?y:y*2,height:w?B:B*2})),!K&&H.createElement("clipPath",{id:"clipPath-dots-".concat(N)},H.createElement("rect",{x:v-U/2,y:d-U/2,width:y+U,height:B+U}))):null,!W&&this.renderCurve(_,N),this.renderErrorBar(_,N),(W||s)&&this.renderDots(_,K,N),(!I||S)&&pr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}},{key:"repeat",value:function(r,a){for(var i=r.length%2!==0?[].concat(ri(r),[0]):r,s=[],l=0;l<a;++l)s=[].concat(ri(s),ri(i));return s}},{key:"renderDotItem",value:function(r,a){var i;if(H.isValidElement(r))i=H.cloneElement(r,a);else if(ke(r))i=r(a);else{var s=a.key,l=m3(a,wK),c=He("recharts-line-dot",typeof r!="boolean"?r.className:"");i=H.createElement(nl,ls({key:s},l,{className:c}))}return i}}])})(Y.PureComponent);ir(qr,"displayName","Line");ir(qr,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!Zr.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});ir(qr,"getComposedData",function(e){var t=e.props,n=e.xAxis,r=e.yAxis,a=e.xAxisTicks,i=e.yAxisTicks,s=e.dataKey,l=e.bandSize,c=e.displayedData,f=e.offset,h=t.layout,d=c.map(function(v,y){var B=lt(v,s);return h==="horizontal"?{x:Pi({axis:n,ticks:a,bandSize:l,entry:v,index:y}),y:Ne(B)?null:r.scale(B),value:B,payload:v}:{x:Ne(B)?null:n.scale(B),y:Pi({axis:r,ticks:i,bandSize:l,entry:v,index:y}),value:B,payload:v}});return wn({points:d,layout:h},f)});var RK=["layout","type","stroke","connectNulls","isRange","ref"],HK=["key"],RM;function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hi(e)}function HM(e,t){if(e==null)return{};var n=jK(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function jK(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mo.apply(this,arguments)}function y3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Pa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y3(Object(n),!0).forEach(function(r){Ir(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function DK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,DM(r.key),r)}}function $K(e,t,n){return t&&b3(e.prototype,t),n&&b3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function LK(e,t,n){return t=kc(t),FK(e,jM()?Reflect.construct(t,n||[],kc(e).constructor):t.apply(e,n))}function FK(e,t){if(t&&(Hi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return qK(e)}function qK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(jM=function(){return!!e})()}function kc(e){return kc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},kc(e)}function zK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Xg(e,t)}function Xg(e,t){return Xg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Xg(e,t)}function Ir(e,t,n){return t=DM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function DM(e){var t=UK(e,"string");return Hi(t)=="symbol"?t:t+""}function UK(e,t){if(Hi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Wo=(function(e){function t(){var n;DK(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=LK(this,t,[].concat(a)),Ir(n,"state",{isAnimationFinished:!0}),Ir(n,"id",Da("recharts-area-")),Ir(n,"handleAnimationEnd",function(){var s=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),ke(s)&&s()}),Ir(n,"handleAnimationStart",function(){var s=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),ke(s)&&s()}),n}return zK(t,e),$K(t,[{key:"renderDots",value:function(r,a,i){var s=this.props.isAnimationActive,l=this.state.isAnimationFinished;if(s&&!l)return null;var c=this.props,f=c.dot,h=c.points,d=c.dataKey,v=We(this.props,!1),y=We(f,!0),B=h.map(function(b,S){var W=Pa(Pa(Pa({key:"dot-".concat(S),r:3},v),y),{},{index:S,cx:b.x,cy:b.y,dataKey:d,value:b.value,payload:b.payload,points:h});return t.renderDotItem(f,W)}),I={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return H.createElement(De,mo({className:"recharts-area-dots"},I),B)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,l=a.strokeWidth,c=s[0].x,f=s[s.length-1].x,h=r*Math.abs(c-f),d=Aa(s.map(function(v){return v.y||0}));return le(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Aa(i.map(function(v){return v.y||0})),d)),le(d)?H.createElement("rect",{x:c<f?c:c-h,y:0,width:h,height:Math.floor(d+(l?parseInt("".concat(l),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,i=a.baseLine,s=a.points,l=a.strokeWidth,c=s[0].y,f=s[s.length-1].y,h=r*Math.abs(c-f),d=Aa(s.map(function(v){return v.x||0}));return le(i)&&typeof i=="number"?d=Math.max(i,d):i&&Array.isArray(i)&&i.length&&(d=Math.max(Aa(i.map(function(v){return v.x||0})),d)),le(d)?H.createElement("rect",{x:0,y:c<f?c:c-h,width:d+(l?parseInt("".concat(l),10):1),height:Math.floor(h)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,i,s){var l=this.props,c=l.layout,f=l.type,h=l.stroke,d=l.connectNulls,v=l.isRange;l.ref;var y=HM(l,RK);return H.createElement(De,{clipPath:i?"url(#clipPath-".concat(s,")"):null},H.createElement(ka,mo({},We(y,!0),{points:r,connectNulls:d,type:f,baseLine:a,layout:c,stroke:"none",className:"recharts-area-area"})),h!=="none"&&H.createElement(ka,mo({},We(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:r})),h!=="none"&&v&&H.createElement(ka,mo({},We(this.props,!1),{className:"recharts-area-curve",layout:c,type:f,connectNulls:d,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var i=this,s=this.props,l=s.points,c=s.baseLine,f=s.isAnimationActive,h=s.animationBegin,d=s.animationDuration,v=s.animationEasing,y=s.animationId,B=this.state,I=B.prevPoints,b=B.prevBaseLine;return H.createElement(Kn,{begin:h,duration:d,isActive:f,easing:v,from:{t:0},to:{t:1},key:"area-".concat(y),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(S){var W=S.t;if(I){var A=I.length/l.length,O=l.map(function(P,C){var R=Math.floor(C*A);if(I[R]){var j=I[R],T=ht(j.x,P.x),q=ht(j.y,P.y);return Pa(Pa({},P),{},{x:T(W),y:q(W)})}return P}),w;if(le(c)&&typeof c=="number"){var _=ht(b,c);w=_(W)}else if(Ne(c)||Yi(c)){var N=ht(b,0);w=N(W)}else w=c.map(function(P,C){var R=Math.floor(C*A);if(b[R]){var j=b[R],T=ht(j.x,P.x),q=ht(j.y,P.y);return Pa(Pa({},P),{},{x:T(W),y:q(W)})}return P});return i.renderAreaStatically(O,w,r,a)}return H.createElement(De,null,H.createElement("defs",null,H.createElement("clipPath",{id:"animationClipPath-".concat(a)},i.renderClipRect(W))),H.createElement(De,{clipPath:"url(#animationClipPath-".concat(a,")")},i.renderAreaStatically(l,c,r,a)))})}},{key:"renderArea",value:function(r,a){var i=this.props,s=i.points,l=i.baseLine,c=i.isAnimationActive,f=this.state,h=f.prevPoints,d=f.prevBaseLine,v=f.totalLength;return c&&s&&s.length&&(!h&&v>0||!Ta(h,s)||!Ta(d,l))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(s,l,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,s=a.dot,l=a.points,c=a.className,f=a.top,h=a.left,d=a.xAxis,v=a.yAxis,y=a.width,B=a.height,I=a.isAnimationActive,b=a.id;if(i||!l||!l.length)return null;var S=this.state.isAnimationFinished,W=l.length===1,A=He("recharts-area",c),O=d&&d.allowDataOverflow,w=v&&v.allowDataOverflow,_=O||w,N=Ne(b)?this.id:b,P=(r=We(s,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},C=P.r,R=C===void 0?3:C,j=P.strokeWidth,T=j===void 0?2:j,q=jW(s)?s:{},L=q.clipDot,K=L===void 0?!0:L,U=R*2+T;return H.createElement(De,{className:A},O||w?H.createElement("defs",null,H.createElement("clipPath",{id:"clipPath-".concat(N)},H.createElement("rect",{x:O?h:h-y/2,y:w?f:f-B/2,width:O?y:y*2,height:w?B:B*2})),!K&&H.createElement("clipPath",{id:"clipPath-dots-".concat(N)},H.createElement("rect",{x:h-U/2,y:f-U/2,width:y+U,height:B+U}))):null,W?null:this.renderArea(_,N),(s||W)&&this.renderDots(_,K,N),(!I||S)&&pr.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])})(Y.PureComponent);RM=Wo;Ir(Wo,"displayName","Area");Ir(Wo,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});Ir(Wo,"getBaseValue",function(e,t,n,r){var a=e.layout,i=e.baseValue,s=t.props.baseValue,l=s??i;if(le(l)&&typeof l=="number")return l;var c=a==="horizontal"?r:n,f=c.scale.domain();if(c.type==="number"){var h=Math.max(f[0],f[1]),d=Math.min(f[0],f[1]);return l==="dataMin"?d:l==="dataMax"||h<0?h:Math.max(Math.min(f[0],f[1]),0)}return l==="dataMin"?f[0]:l==="dataMax"?f[1]:f[0]});Ir(Wo,"getComposedData",function(e){var t=e.props,n=e.item,r=e.xAxis,a=e.yAxis,i=e.xAxisTicks,s=e.yAxisTicks,l=e.bandSize,c=e.dataKey,f=e.stackedData,h=e.dataStartIndex,d=e.displayedData,v=e.offset,y=t.layout,B=f&&f.length,I=RM.getBaseValue(t,n,r,a),b=y==="horizontal",S=!1,W=d.map(function(O,w){var _;B?_=f[h+w]:(_=lt(O,c),Array.isArray(_)?S=!0:_=[I,_]);var N=_[1]==null||B&&lt(O,c)==null;return b?{x:Pi({axis:r,ticks:i,bandSize:l,entry:O,index:w}),y:N?null:a.scale(_[1]),value:_,payload:O}:{x:N?null:r.scale(_[1]),y:Pi({axis:a,ticks:s,bandSize:l,entry:O,index:w}),value:_,payload:O}}),A;return B||S?A=W.map(function(O){var w=Array.isArray(O.value)?O.value[0]:null;return b?{x:O.x,y:w!=null&&O.y!=null?a.scale(w):null}:{x:w!=null?r.scale(w):null,y:O.y}}):A=b?a.scale(I):r.scale(I),Pa({points:W,baseLine:A,layout:y,isRange:S},v)});Ir(Wo,"renderDotItem",function(e,t){var n;if(H.isValidElement(e))n=H.cloneElement(e,t);else if(ke(e))n=e(t);else{var r=He("recharts-area-dot",typeof e!="boolean"?e.className:""),a=t.key,i=HM(t,HK);n=H.createElement(nl,mo({},i,{key:a,className:r}))}return n});function ji(e){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ji(e)}function VK(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function GK(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,FM(r.key),r)}}function KK(e,t,n){return t&&GK(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function QK(e,t,n){return t=Nc(t),YK(e,$M()?Reflect.construct(t,n||[],Nc(e).constructor):t.apply(e,n))}function YK(e,t){if(t&&(ji(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return XK(e)}function XK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $M(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($M=function(){return!!e})()}function Nc(e){return Nc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Nc(e)}function ZK(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Zg(e,t)}function Zg(e,t){return Zg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Zg(e,t)}function LM(e,t,n){return t=FM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FM(e){var t=JK(e,"string");return ji(t)=="symbol"?t:t+""}function JK(e,t){if(ji(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ji(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var B0=(function(e){function t(){return VK(this,t),QK(this,t,arguments)}return ZK(t,e),KK(t,[{key:"render",value:function(){return null}}])})(H.Component);LM(B0,"displayName","ZAxis");LM(B0,"defaultProps",{zAxisId:0,range:[64,64],scale:"auto",type:"number"});var eQ=["option","isActive"];function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ps.apply(this,arguments)}function tQ(e,t){if(e==null)return{};var n=nQ(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function nQ(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function rQ(e){var t=e.option,n=e.isActive,r=tQ(e,eQ);return typeof t=="string"?H.createElement(yc,ps({option:H.createElement(Yc,ps({type:t},r)),isActive:n,shapeType:"symbols"},r)):H.createElement(yc,ps({option:t,isActive:n,shapeType:"symbols"},r))}function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Di(e)}function cs(){return cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cs.apply(this,arguments)}function I3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?I3(Object(n),!0).forEach(function(r){Ma(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function aQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,zM(r.key),r)}}function oQ(e,t,n){return t&&B3(e.prototype,t),n&&B3(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function iQ(e,t,n){return t=Ec(t),uQ(e,qM()?Reflect.construct(t,n||[],Ec(e).constructor):t.apply(e,n))}function uQ(e,t){if(t&&(Di(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sQ(e)}function sQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(qM=function(){return!!e})()}function Ec(e){return Ec=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ec(e)}function lQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Jg(e,t)}function Jg(e,t){return Jg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Jg(e,t)}function Ma(e,t,n){return t=zM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zM(e){var t=pQ(e,"string");return Di(t)=="symbol"?t:t+""}function pQ(e,t){if(Di(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Di(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var x0=(function(e){function t(){var n;aQ(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=iQ(this,t,[].concat(a)),Ma(n,"state",{isAnimationFinished:!1}),Ma(n,"handleAnimationEnd",function(){n.setState({isAnimationFinished:!0})}),Ma(n,"handleAnimationStart",function(){n.setState({isAnimationFinished:!1})}),Ma(n,"id",Da("recharts-scatter-")),n}return lQ(t,e),oQ(t,[{key:"renderSymbolsStatically",value:function(r){var a=this,i=this.props,s=i.shape,l=i.activeShape,c=i.activeIndex,f=We(this.props,!1);return r.map(function(h,d){var v=c===d,y=v?l:s,B=Fn(Fn({},f),h);return H.createElement(De,cs({className:"recharts-scatter-symbol",key:"symbol-".concat(h==null?void 0:h.cx,"-").concat(h==null?void 0:h.cy,"-").concat(h==null?void 0:h.size,"-").concat(d)},Ea(a.props,h,d),{role:"img"}),H.createElement(rQ,cs({option:y,isActive:v,key:"symbol-".concat(d)},B)))})}},{key:"renderSymbolsWithAnimation",value:function(){var r=this,a=this.props,i=a.points,s=a.isAnimationActive,l=a.animationBegin,c=a.animationDuration,f=a.animationEasing,h=a.animationId,d=this.state.prevPoints;return H.createElement(Kn,{begin:l,duration:c,isActive:s,easing:f,from:{t:0},to:{t:1},key:"pie-".concat(h),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(v){var y=v.t,B=i.map(function(I,b){var S=d&&d[b];if(S){var W=ht(S.cx,I.cx),A=ht(S.cy,I.cy),O=ht(S.size,I.size);return Fn(Fn({},I),{},{cx:W(y),cy:A(y),size:O(y)})}var w=ht(0,I.size);return Fn(Fn({},I),{},{size:w(y)})});return H.createElement(De,null,r.renderSymbolsStatically(B))})}},{key:"renderSymbols",value:function(){var r=this.props,a=r.points,i=r.isAnimationActive,s=this.state.prevPoints;return i&&a&&a.length&&(!s||!Ta(s,a))?this.renderSymbolsWithAnimation():this.renderSymbolsStatically(a)}},{key:"renderErrorBar",value:function(){var r=this.props.isAnimationActive;if(r&&!this.state.isAnimationFinished)return null;var a=this.props,i=a.points,s=a.xAxis,l=a.yAxis,c=a.children,f=sn(c,tu);return f?f.map(function(h,d){var v=h.props,y=v.direction,B=v.dataKey;return H.cloneElement(h,{key:"".concat(y,"-").concat(B,"-").concat(i[d]),data:i,xAxis:s,yAxis:l,layout:y==="x"?"vertical":"horizontal",dataPointFormatter:function(b,S){return{x:b.cx,y:b.cy,value:y==="x"?+b.node.x:+b.node.y,errorVal:lt(b,S)}}})}):null}},{key:"renderLine",value:function(){var r=this.props,a=r.points,i=r.line,s=r.lineType,l=r.lineJointType,c=We(this.props,!1),f=We(i,!1),h,d;if(s==="joint")h=a.map(function(A){return{x:A.cx,y:A.cy}});else if(s==="fitting"){var v=nH(a),y=v.xmin,B=v.xmax,I=v.a,b=v.b,S=function(O){return I*O+b};h=[{x:y,y:S(y)},{x:B,y:S(B)}]}var W=Fn(Fn(Fn({},c),{},{fill:"none",stroke:c&&c.fill},f),{},{points:h});return H.isValidElement(i)?d=H.cloneElement(i,W):ke(i)?d=i(W):d=H.createElement(ka,cs({},W,{type:l})),H.createElement(De,{className:"recharts-scatter-line",key:"recharts-scatter-line"},d)}},{key:"render",value:function(){var r=this.props,a=r.hide,i=r.points,s=r.line,l=r.className,c=r.xAxis,f=r.yAxis,h=r.left,d=r.top,v=r.width,y=r.height,B=r.id,I=r.isAnimationActive;if(a||!i||!i.length)return null;var b=this.state.isAnimationFinished,S=He("recharts-scatter",l),W=c&&c.allowDataOverflow,A=f&&f.allowDataOverflow,O=W||A,w=Ne(B)?this.id:B;return H.createElement(De,{className:S,clipPath:O?"url(#clipPath-".concat(w,")"):null},W||A?H.createElement("defs",null,H.createElement("clipPath",{id:"clipPath-".concat(w)},H.createElement("rect",{x:W?h:h-v/2,y:A?d:d-y/2,width:W?v:v*2,height:A?y:y*2}))):null,s&&this.renderLine(),this.renderErrorBar(),H.createElement(De,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!I||b)&&pr.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,prevPoints:a.curPoints}:r.points!==a.curPoints?{curPoints:r.points}:null}}])})(Y.PureComponent);Ma(x0,"displayName","Scatter");Ma(x0,"defaultProps",{xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!Zr.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"});Ma(x0,"getComposedData",function(e){var t=e.xAxis,n=e.yAxis,r=e.zAxis,a=e.item,i=e.displayedData,s=e.xAxisTicks,l=e.yAxisTicks,c=e.offset,f=a.props.tooltipType,h=sn(a.props.children,Xs),d=Ne(t.dataKey)?a.props.dataKey:t.dataKey,v=Ne(n.dataKey)?a.props.dataKey:n.dataKey,y=r&&r.dataKey,B=r?r.range:B0.defaultProps.range,I=B&&B[0],b=t.scale.bandwidth?t.scale.bandwidth():0,S=n.scale.bandwidth?n.scale.bandwidth():0,W=i.map(function(A,O){var w=lt(A,d),_=lt(A,v),N=!Ne(y)&&lt(A,y)||"-",P=[{name:Ne(t.dataKey)?a.props.name:t.name||t.dataKey,unit:t.unit||"",value:w,payload:A,dataKey:d,type:f},{name:Ne(n.dataKey)?a.props.name:n.name||n.dataKey,unit:n.unit||"",value:_,payload:A,dataKey:v,type:f}];N!=="-"&&P.push({name:r.name||r.dataKey,unit:r.unit||"",value:N,payload:A,dataKey:y,type:f});var C=Pi({axis:t,ticks:s,bandSize:b,entry:A,index:O,dataKey:d}),R=Pi({axis:n,ticks:l,bandSize:S,entry:A,index:O,dataKey:v}),j=N!=="-"?r.scale(N):I,T=Math.sqrt(Math.max(j,0)/Math.PI);return Fn(Fn({},A),{},{cx:C,cy:R,x:C-T,y:R-T,xAxis:t,yAxis:n,zAxis:r,width:2*T,height:2*T,size:j,node:{x:w,y:_,z:N},tooltipPayload:P,tooltipPosition:{x:C,y:R},payload:A},h&&h[O]&&h[O].props)});return Fn({points:W},c)});function $i(e){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$i(e)}function cQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,GM(r.key),r)}}function dQ(e,t,n){return t&&fQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function hQ(e,t,n){return t=Tc(t),mQ(e,UM()?Reflect.construct(t,n||[],Tc(e).constructor):t.apply(e,n))}function mQ(e,t){if(t&&($i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vQ(e)}function vQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function UM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(UM=function(){return!!e})()}function Tc(e){return Tc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Tc(e)}function gQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ey(e,t)}function ey(e,t){return ey=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ey(e,t)}function VM(e,t,n){return t=GM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function GM(e){var t=yQ(e,"string");return $i(t)=="symbol"?t:t+""}function yQ(e,t){if($i(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ty(){return ty=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ty.apply(this,arguments)}function bQ(e){var t=e.xAxisId,n=vb(),r=gb(),a=xM(t);return a==null?null:H.createElement(nu,ty({},a,{className:He("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:n,height:r},ticksGenerator:function(s){return Fr(s,!0)}}))}var Ra=(function(e){function t(){return cQ(this,t),hQ(this,t,arguments)}return gQ(t,e),dQ(t,[{key:"render",value:function(){return H.createElement(bQ,this.props)}}])})(H.Component);VM(Ra,"displayName","XAxis");VM(Ra,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function Li(e){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Li(e)}function IQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function BQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,YM(r.key),r)}}function xQ(e,t,n){return t&&BQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function wQ(e,t,n){return t=Rc(t),PQ(e,KM()?Reflect.construct(t,n||[],Rc(e).constructor):t.apply(e,n))}function PQ(e,t){if(t&&(Li(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return SQ(e)}function SQ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function KM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(KM=function(){return!!e})()}function Rc(e){return Rc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Rc(e)}function WQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ny(e,t)}function ny(e,t){return ny=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ny(e,t)}function QM(e,t,n){return t=YM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YM(e){var t=AQ(e,"string");return Li(t)=="symbol"?t:t+""}function AQ(e,t){if(Li(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Li(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ry(){return ry=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ry.apply(this,arguments)}var _Q=function(t){var n=t.yAxisId,r=vb(),a=gb(),i=wM(n);return i==null?null:H.createElement(nu,ry({},i,{className:He("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:a},ticksGenerator:function(l){return Fr(l,!0)}}))},Br=(function(e){function t(){return IQ(this,t),wQ(this,t,arguments)}return WQ(t,e),xQ(t,[{key:"render",value:function(){return H.createElement(_Q,this.props)}}])})(H.Component);QM(Br,"displayName","YAxis");QM(Br,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function x3(e){return kQ(e)||CQ(e)||OQ(e)||MQ()}function MQ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OQ(e,t){if(e){if(typeof e=="string")return ay(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ay(e,t)}}function CQ(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kQ(e){if(Array.isArray(e))return ay(e)}function ay(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var oy=function(t,n,r,a,i){var s=sn(t,bb),l=sn(t,y0),c=[].concat(x3(s),x3(l)),f=sn(t,I0),h="".concat(a,"Id"),d=a[0],v=n;if(c.length&&(v=c.reduce(function(I,b){if(b.props[h]===r&&wr(b.props,"extendDomain")&&le(b.props[d])){var S=b.props[d];return[Math.min(I[0],S),Math.max(I[1],S)]}return I},v)),f.length){var y="".concat(d,"1"),B="".concat(d,"2");v=f.reduce(function(I,b){if(b.props[h]===r&&wr(b.props,"extendDomain")&&le(b.props[y])&&le(b.props[B])){var S=b.props[y],W=b.props[B];return[Math.min(I[0],S,W),Math.max(I[1],S,W)]}return I},v)}return i&&i.length&&(v=i.reduce(function(I,b){return le(b)?[Math.min(I[0],b),Math.max(I[1],b)]:I},v)),v},xv={exports:{}},w3;function NQ(){return w3||(w3=1,(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function a(c,f,h){this.fn=c,this.context=f,this.once=h||!1}function i(c,f,h,d,v){if(typeof h!="function")throw new TypeError("The listener must be a function");var y=new a(h,d||c,v),B=n?n+f:f;return c._events[B]?c._events[B].fn?c._events[B]=[c._events[B],y]:c._events[B].push(y):(c._events[B]=y,c._eventsCount++),c}function s(c,f){--c._eventsCount===0?c._events=new r:delete c._events[f]}function l(){this._events=new r,this._eventsCount=0}l.prototype.eventNames=function(){var f=[],h,d;if(this._eventsCount===0)return f;for(d in h=this._events)t.call(h,d)&&f.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(h)):f},l.prototype.listeners=function(f){var h=n?n+f:f,d=this._events[h];if(!d)return[];if(d.fn)return[d.fn];for(var v=0,y=d.length,B=new Array(y);v<y;v++)B[v]=d[v].fn;return B},l.prototype.listenerCount=function(f){var h=n?n+f:f,d=this._events[h];return d?d.fn?1:d.length:0},l.prototype.emit=function(f,h,d,v,y,B){var I=n?n+f:f;if(!this._events[I])return!1;var b=this._events[I],S=arguments.length,W,A;if(b.fn){switch(b.once&&this.removeListener(f,b.fn,void 0,!0),S){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,h),!0;case 3:return b.fn.call(b.context,h,d),!0;case 4:return b.fn.call(b.context,h,d,v),!0;case 5:return b.fn.call(b.context,h,d,v,y),!0;case 6:return b.fn.call(b.context,h,d,v,y,B),!0}for(A=1,W=new Array(S-1);A<S;A++)W[A-1]=arguments[A];b.fn.apply(b.context,W)}else{var O=b.length,w;for(A=0;A<O;A++)switch(b[A].once&&this.removeListener(f,b[A].fn,void 0,!0),S){case 1:b[A].fn.call(b[A].context);break;case 2:b[A].fn.call(b[A].context,h);break;case 3:b[A].fn.call(b[A].context,h,d);break;case 4:b[A].fn.call(b[A].context,h,d,v);break;default:if(!W)for(w=1,W=new Array(S-1);w<S;w++)W[w-1]=arguments[w];b[A].fn.apply(b[A].context,W)}}return!0},l.prototype.on=function(f,h,d){return i(this,f,h,d,!1)},l.prototype.once=function(f,h,d){return i(this,f,h,d,!0)},l.prototype.removeListener=function(f,h,d,v){var y=n?n+f:f;if(!this._events[y])return this;if(!h)return s(this,y),this;var B=this._events[y];if(B.fn)B.fn===h&&(!v||B.once)&&(!d||B.context===d)&&s(this,y);else{for(var I=0,b=[],S=B.length;I<S;I++)(B[I].fn!==h||v&&!B[I].once||d&&B[I].context!==d)&&b.push(B[I]);b.length?this._events[y]=b.length===1?b[0]:b:s(this,y)}return this},l.prototype.removeAllListeners=function(f){var h;return f?(h=n?n+f:f,this._events[h]&&s(this,h)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=n,l.EventEmitter=l,e.exports=l})(xv)),xv.exports}var EQ=NQ();const TQ=Xe(EQ);var wv=new TQ,Pv="recharts.syncMouseEvents";function Vs(e){"@babel/helpers - typeof";return Vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vs(e)}function RQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function HQ(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,XM(r.key),r)}}function jQ(e,t,n){return t&&HQ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Sv(e,t,n){return t=XM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function XM(e){var t=DQ(e,"string");return Vs(t)=="symbol"?t:t+""}function DQ(e,t){if(Vs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var $Q=(function(){function e(){RQ(this,e),Sv(this,"activeIndex",0),Sv(this,"coordinateList",[]),Sv(this,"layout","horizontal")}return jQ(e,[{key:"setDetails",value:function(n){var r,a=n.coordinateList,i=a===void 0?null:a,s=n.container,l=s===void 0?null:s,c=n.layout,f=c===void 0?null:c,h=n.offset,d=h===void 0?null:h,v=n.mouseHandlerCallback,y=v===void 0?null:v;this.coordinateList=(r=i??this.coordinateList)!==null&&r!==void 0?r:[],this.container=l??this.container,this.layout=f??this.layout,this.offset=d??this.offset,this.mouseHandlerCallback=y??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(n){if(this.coordinateList.length!==0)switch(n.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(n){this.activeIndex=n}},{key:"spoofMouse",value:function(){var n,r;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),i=a.x,s=a.y,l=a.height,c=this.coordinateList[this.activeIndex].coordinate,f=((n=window)===null||n===void 0?void 0:n.scrollX)||0,h=((r=window)===null||r===void 0?void 0:r.scrollY)||0,d=i+c+f,v=s+this.offset.top+l/2+h;this.mouseHandlerCallback({pageX:d,pageY:v})}}}])})();function LQ(e,t,n){if(n==="number"&&t===!0&&Array.isArray(e)){var r=e==null?void 0:e[0],a=e==null?void 0:e[1];if(r&&a&&le(r)&&le(a))return!0}return!1}function FQ(e,t,n,r){var a=r/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:n.left+.5,y:e==="horizontal"?n.top+.5:t.y-a,width:e==="horizontal"?r:n.width-1,height:e==="horizontal"?n.height-1:r}}function ZM(e){var t=e.cx,n=e.cy,r=e.radius,a=e.startAngle,i=e.endAngle,s=ot(t,n,r,a),l=ot(t,n,r,i);return{points:[s,l],cx:t,cy:n,radius:r,startAngle:a,endAngle:i}}function qQ(e,t,n){var r,a,i,s;if(e==="horizontal")r=t.x,i=r,a=n.top,s=n.top+n.height;else if(e==="vertical")a=t.y,s=a,r=n.left,i=n.left+n.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var l=t.cx,c=t.cy,f=t.innerRadius,h=t.outerRadius,d=t.angle,v=ot(l,c,f,d),y=ot(l,c,h,d);r=v.x,a=v.y,i=y.x,s=y.y}else return ZM(t);return[{x:r,y:a},{x:i,y:s}]}function Gs(e){"@babel/helpers - typeof";return Gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gs(e)}function P3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Wp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P3(Object(n),!0).forEach(function(r){zQ(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zQ(e,t,n){return t=UQ(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function UQ(e){var t=VQ(e,"string");return Gs(t)=="symbol"?t:t+""}function VQ(e,t){if(Gs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Gs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function GQ(e){var t,n,r=e.element,a=e.tooltipEventType,i=e.isActive,s=e.activeCoordinate,l=e.activePayload,c=e.offset,f=e.activeTooltipIndex,h=e.tooltipAxisBandSize,d=e.layout,v=e.chartName,y=(t=r.props.cursor)!==null&&t!==void 0?t:(n=r.type.defaultProps)===null||n===void 0?void 0:n.cursor;if(!r||!y||!i||!s||v!=="ScatterChart"&&a!=="axis")return null;var B,I=ka;if(v==="ScatterChart")B=s,I=$z;else if(v==="BarChart")B=FQ(d,s,c,h),I=cb;else if(d==="radial"){var b=ZM(s),S=b.cx,W=b.cy,A=b.radius,O=b.startAngle,w=b.endAngle;B={cx:S,cy:W,startAngle:O,endAngle:w,innerRadius:A,outerRadius:A},I=V_}else B={points:qQ(d,s,c)},I=ka;var _=Wp(Wp(Wp(Wp({stroke:"#ccc",pointerEvents:"none"},c),B),We(y,!1)),{},{payload:l,payloadIndex:f,className:He("recharts-tooltip-cursor",y.className)});return Y.isValidElement(y)?Y.cloneElement(y,_):Y.createElement(I,_)}var KQ=["item"],QQ=["children","className","width","height","style","compact","title","desc"];function Fi(e){"@babel/helpers - typeof";return Fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fi(e)}function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},li.apply(this,arguments)}function S3(e,t){return ZQ(e)||XQ(e,t)||eO(e,t)||YQ()}function YQ(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XQ(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,s,l=[],c=!0,f=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(h){f=!0,a=h}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw a}}return l}}function ZQ(e){if(Array.isArray(e))return e}function W3(e,t){if(e==null)return{};var n=JQ(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function JQ(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function eY(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tY(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,tO(r.key),r)}}function nY(e,t,n){return t&&tY(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function rY(e,t,n){return t=Hc(t),aY(e,JM()?Reflect.construct(t,n||[],Hc(e).constructor):t.apply(e,n))}function aY(e,t){if(t&&(Fi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oY(e)}function oY(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function JM(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(JM=function(){return!!e})()}function Hc(e){return Hc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Hc(e)}function iY(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&iy(e,t)}function iy(e,t){return iy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},iy(e,t)}function qi(e){return lY(e)||sY(e)||eO(e)||uY()}function uY(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eO(e,t){if(e){if(typeof e=="string")return uy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return uy(e,t)}}function sY(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lY(e){if(Array.isArray(e))return uy(e)}function uy(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A3(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ee(e,t,n){return t=tO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tO(e){var t=pY(e,"string");return Fi(t)=="symbol"?t:t+""}function pY(e,t){if(Fi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Fi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var cY={xAxis:["bottom","top"],yAxis:["left","right"]},fY={width:"100%",height:"100%"},nO={x:0,y:0};function Ap(e){return e}var dY=function(t,n){return n==="horizontal"?t.x:n==="vertical"?t.y:n==="centric"?t.angle:t.radius},hY=function(t,n,r,a){var i=n.find(function(h){return h&&h.index===r});if(i){if(t==="horizontal")return{x:i.coordinate,y:a.y};if(t==="vertical")return{x:a.x,y:i.coordinate};if(t==="centric"){var s=i.coordinate,l=a.radius;return ae(ae(ae({},a),ot(a.cx,a.cy,l,s)),{},{angle:s,radius:l})}var c=i.coordinate,f=a.angle;return ae(ae(ae({},a),ot(a.cx,a.cy,c,f)),{},{angle:f,radius:c})}return nO},w0=function(t,n){var r=n.graphicalItems,a=n.dataStartIndex,i=n.dataEndIndex,s=(r??[]).reduce(function(l,c){var f=c.props.data;return f&&f.length?[].concat(qi(l),qi(f)):l},[]);return s.length>0?s:t&&t.length&&le(a)&&le(i)?t.slice(a,i+1):[]};function rO(e){return e==="number"?[0,"auto"]:void 0}var sy=function(t,n,r,a){var i=t.graphicalItems,s=t.tooltipAxis,l=w0(n,t);return r<0||!i||!i.length||r>=l.length?null:i.reduce(function(c,f){var h,d=(h=f.props.data)!==null&&h!==void 0?h:n;d&&t.dataStartIndex+t.dataEndIndex!==0&&t.dataEndIndex-t.dataStartIndex>=r&&(d=d.slice(t.dataStartIndex,t.dataEndIndex+1));var v;if(s.dataKey&&!s.allowDuplicatedCategory){var y=d===void 0?l:d;v=Ep(y,s.dataKey,a)}else v=d&&d[r]||l[r];return v?[].concat(qi(c),[$_(f,v)]):c},[])},_3=function(t,n,r,a){var i=a||{x:t.chartX,y:t.chartY},s=dY(i,r),l=t.orderedTooltipTicks,c=t.tooltipAxis,f=t.tooltipTicks,h=u9(s,l,f,c);if(h>=0&&f){var d=f[h]&&f[h].value,v=sy(t,n,h,d),y=hY(r,l,h,i);return{activeTooltipIndex:h,activeLabel:d,activePayload:v,activeCoordinate:y}}return null},mY=function(t,n){var r=n.axes,a=n.graphicalItems,i=n.axisType,s=n.axisIdKey,l=n.stackGroups,c=n.dataStartIndex,f=n.dataEndIndex,h=t.layout,d=t.children,v=t.stackOffset,y=E_(h,i);return r.reduce(function(B,I){var b,S=I.type.defaultProps!==void 0?ae(ae({},I.type.defaultProps),I.props):I.props,W=S.type,A=S.dataKey,O=S.allowDataOverflow,w=S.allowDuplicatedCategory,_=S.scale,N=S.ticks,P=S.includeHidden,C=S[s];if(B[C])return B;var R=w0(t.data,{graphicalItems:a.filter(function(F){var J,ue=s in F.props?F.props[s]:(J=F.type.defaultProps)===null||J===void 0?void 0:J[s];return ue===C}),dataStartIndex:c,dataEndIndex:f}),j=R.length,T,q,L;LQ(S.domain,O,W)&&(T=bg(S.domain,null,O),y&&(W==="number"||_!=="auto")&&(L=os(R,A,"category")));var K=rO(W);if(!T||T.length===0){var U,V=(U=S.domain)!==null&&U!==void 0?U:K;if(A){if(T=os(R,A,W),W==="category"&&y){var D=tH(T);w&&D?(q=T,T=Ic(0,j)):w||(T=W4(V,T,I).reduce(function(F,J){return F.indexOf(J)>=0?F:[].concat(qi(F),[J])},[]))}else if(W==="category")w?T=T.filter(function(F){return F!==""&&!Ne(F)}):T=W4(V,T,I).reduce(function(F,J){return F.indexOf(J)>=0||J===""||Ne(J)?F:[].concat(qi(F),[J])},[]);else if(W==="number"){var Q=f9(R,a.filter(function(F){var J,ue,he=s in F.props?F.props[s]:(J=F.type.defaultProps)===null||J===void 0?void 0:J[s],ge="hide"in F.props?F.props.hide:(ue=F.type.defaultProps)===null||ue===void 0?void 0:ue.hide;return he===C&&(P||!ge)}),A,i,h);Q&&(T=Q)}y&&(W==="number"||_!=="auto")&&(L=os(R,A,"category"))}else y?T=Ic(0,j):l&&l[C]&&l[C].hasStack&&W==="number"?T=v==="expand"?[0,1]:D_(l[C].stackGroups,c,f):T=N_(R,a.filter(function(F){var J=s in F.props?F.props[s]:F.type.defaultProps[s],ue="hide"in F.props?F.props.hide:F.type.defaultProps.hide;return J===C&&(P||!ue)}),W,h,!0);if(W==="number")T=oy(d,T,C,i,N),V&&(T=bg(V,T,O));else if(W==="category"&&V){var X=V,E=T.every(function(F){return X.indexOf(F)>=0});E&&(T=X)}}return ae(ae({},B),{},Ee({},C,ae(ae({},S),{},{axisType:i,domain:T,categoricalDomain:L,duplicateDomain:q,originalDomain:(b=S.domain)!==null&&b!==void 0?b:K,isCategorical:y,layout:h})))},{})},vY=function(t,n){var r=n.graphicalItems,a=n.Axis,i=n.axisType,s=n.axisIdKey,l=n.stackGroups,c=n.dataStartIndex,f=n.dataEndIndex,h=t.layout,d=t.children,v=w0(t.data,{graphicalItems:r,dataStartIndex:c,dataEndIndex:f}),y=v.length,B=E_(h,i),I=-1;return r.reduce(function(b,S){var W=S.type.defaultProps!==void 0?ae(ae({},S.type.defaultProps),S.props):S.props,A=W[s],O=rO("number");if(!b[A]){I++;var w;return B?w=Ic(0,y):l&&l[A]&&l[A].hasStack?(w=D_(l[A].stackGroups,c,f),w=oy(d,w,A,i)):(w=bg(O,N_(v,r.filter(function(_){var N,P,C=s in _.props?_.props[s]:(N=_.type.defaultProps)===null||N===void 0?void 0:N[s],R="hide"in _.props?_.props.hide:(P=_.type.defaultProps)===null||P===void 0?void 0:P.hide;return C===A&&!R}),"number",h),a.defaultProps.allowDataOverflow),w=oy(d,w,A,i)),ae(ae({},b),{},Ee({},A,ae(ae({axisType:i},a.defaultProps),{},{hide:!0,orientation:Mn(cY,"".concat(i,".").concat(I%2),null),domain:w,originalDomain:O,isCategorical:B,layout:h})))}return b},{})},gY=function(t,n){var r=n.axisType,a=r===void 0?"xAxis":r,i=n.AxisComp,s=n.graphicalItems,l=n.stackGroups,c=n.dataStartIndex,f=n.dataEndIndex,h=t.children,d="".concat(a,"Id"),v=sn(h,i),y={};return v&&v.length?y=mY(t,{axes:v,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:l,dataStartIndex:c,dataEndIndex:f}):s&&s.length&&(y=vY(t,{Axis:i,graphicalItems:s,axisType:a,axisIdKey:d,stackGroups:l,dataStartIndex:c,dataEndIndex:f})),y},yY=function(t){var n=Wa(t),r=Fr(n,!1,!0);return{tooltipTicks:r,orderedTooltipTicks:Hy(r,function(a){return a.coordinate}),tooltipAxis:n,tooltipAxisBandSize:ic(n,r)}},M3=function(t){var n=t.children,r=t.defaultShowTooltip,a=Sn(n,Oi),i=0,s=0;return t.data&&t.data.length!==0&&(s=t.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(i=a.props.startIndex),a.props.endIndex>=0&&(s=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:i,dataEndIndex:s,activeTooltipIndex:-1,isTooltipActive:!!r}},bY=function(t){return!t||!t.length?!1:t.some(function(n){var r=Ur(n&&n.type);return r&&r.indexOf("Bar")>=0})},O3=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},IY=function(t,n){var r=t.props,a=t.graphicalItems,i=t.xAxisMap,s=i===void 0?{}:i,l=t.yAxisMap,c=l===void 0?{}:l,f=r.width,h=r.height,d=r.children,v=r.margin||{},y=Sn(d,Oi),B=Sn(d,Oa),I=Object.keys(c).reduce(function(w,_){var N=c[_],P=N.orientation;return!N.mirror&&!N.hide?ae(ae({},w),{},Ee({},P,w[P]+N.width)):w},{left:v.left||0,right:v.right||0}),b=Object.keys(s).reduce(function(w,_){var N=s[_],P=N.orientation;return!N.mirror&&!N.hide?ae(ae({},w),{},Ee({},P,Mn(w,"".concat(P))+N.height)):w},{top:v.top||0,bottom:v.bottom||0}),S=ae(ae({},b),I),W=S.bottom;y&&(S.bottom+=y.props.height||Oi.defaultProps.height),B&&n&&(S=p9(S,a,r,n));var A=f-S.left-S.right,O=h-S.top-S.bottom;return ae(ae({brushBottom:W},S),{},{width:Math.max(A,0),height:Math.max(O,0)})},BY=function(t,n){if(n==="xAxis")return t[n].width;if(n==="yAxis")return t[n].height},P0=function(t){var n=t.chartName,r=t.GraphicalChild,a=t.defaultTooltipEventType,i=a===void 0?"axis":a,s=t.validateTooltipEventTypes,l=s===void 0?["axis"]:s,c=t.axisComponents,f=t.legendContent,h=t.formatAxisMap,d=t.defaultProps,v=function(S,W){var A=W.graphicalItems,O=W.stackGroups,w=W.offset,_=W.updateId,N=W.dataStartIndex,P=W.dataEndIndex,C=S.barSize,R=S.layout,j=S.barGap,T=S.barCategoryGap,q=S.maxBarSize,L=O3(R),K=L.numericAxisName,U=L.cateAxisName,V=bY(A),D=[];return A.forEach(function(Q,X){var E=w0(S.data,{graphicalItems:[Q],dataStartIndex:N,dataEndIndex:P}),F=Q.type.defaultProps!==void 0?ae(ae({},Q.type.defaultProps),Q.props):Q.props,J=F.dataKey,ue=F.maxBarSize,he=F["".concat(K,"Id")],ge=F["".concat(U,"Id")],ye={},fe=c.reduce(function(Bt,vt){var On=W["".concat(vt.axisType,"Map")],gt=F["".concat(vt.axisType,"Id")];On&&On[gt]||vt.axisType==="zAxis"||Io();var Kt=On[gt];return ae(ae({},Bt),{},Ee(Ee({},vt.axisType,Kt),"".concat(vt.axisType,"Ticks"),Fr(Kt)))},ye),ne=fe[U],de=fe["".concat(U,"Ticks")],ce=O&&O[he]&&O[he].hasStack&&B9(Q,O[he].stackGroups),re=Ur(Q.type).indexOf("Bar")>=0,Re=ic(ne,de),Pe=[],Ce=V&&s9({barSize:C,stackGroups:O,totalSize:BY(fe,U)});if(re){var Ae,Fe,je=Ne(ue)?q:ue,qe=(Ae=(Fe=ic(ne,de,!0))!==null&&Fe!==void 0?Fe:je)!==null&&Ae!==void 0?Ae:0;Pe=l9({barGap:j,barCategoryGap:T,bandSize:qe!==Re?qe:Re,sizeList:Ce[ge],maxBarSize:je}),qe!==Re&&(Pe=Pe.map(function(Bt){return ae(ae({},Bt),{},{position:ae(ae({},Bt.position),{},{offset:Bt.position.offset-qe/2})})}))}var Ke=Q&&Q.type&&Q.type.getComposedData;Ke&&D.push({props:ae(ae({},Ke(ae(ae({},fe),{},{displayedData:E,props:S,dataKey:J,item:Q,bandSize:Re,barPosition:Pe,offset:w,stackedData:ce,layout:R,dataStartIndex:N,dataEndIndex:P}))),{},Ee(Ee(Ee({key:Q.key||"item-".concat(X)},K,fe[K]),U,fe[U]),"animationId",_)),childIndex:dH(Q,S.children),item:Q})}),D},y=function(S,W){var A=S.props,O=S.dataStartIndex,w=S.dataEndIndex,_=S.updateId;if(!LB({props:A}))return null;var N=A.children,P=A.layout,C=A.stackOffset,R=A.data,j=A.reverseStackOrder,T=O3(P),q=T.numericAxisName,L=T.cateAxisName,K=sn(N,r),U=b9(R,K,"".concat(q,"Id"),"".concat(L,"Id"),C,j),V=c.reduce(function(F,J){var ue="".concat(J.axisType,"Map");return ae(ae({},F),{},Ee({},ue,gY(A,ae(ae({},J),{},{graphicalItems:K,stackGroups:J.axisType===q&&U,dataStartIndex:O,dataEndIndex:w}))))},{}),D=IY(ae(ae({},V),{},{props:A,graphicalItems:K}),W==null?void 0:W.legendBBox);Object.keys(V).forEach(function(F){V[F]=h(A,V[F],D,F.replace("Map",""),n)});var Q=V["".concat(L,"Map")],X=yY(Q),E=v(A,ae(ae({},V),{},{dataStartIndex:O,dataEndIndex:w,updateId:_,graphicalItems:K,stackGroups:U,offset:D}));return ae(ae({formattedGraphicalItems:E,graphicalItems:K,offset:D,stackGroups:U},X),V)},B=(function(b){function S(W){var A,O,w;return eY(this,S),w=rY(this,S,[W]),Ee(w,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Ee(w,"accessibilityManager",new $Q),Ee(w,"handleLegendBBoxUpdate",function(_){if(_){var N=w.state,P=N.dataStartIndex,C=N.dataEndIndex,R=N.updateId;w.setState(ae({legendBBox:_},y({props:w.props,dataStartIndex:P,dataEndIndex:C,updateId:R},ae(ae({},w.state),{},{legendBBox:_}))))}}),Ee(w,"handleReceiveSyncEvent",function(_,N,P){if(w.props.syncId===_){if(P===w.eventEmitterSymbol&&typeof w.props.syncMethod!="function")return;w.applySyncEvent(N)}}),Ee(w,"handleBrushChange",function(_){var N=_.startIndex,P=_.endIndex;if(N!==w.state.dataStartIndex||P!==w.state.dataEndIndex){var C=w.state.updateId;w.setState(function(){return ae({dataStartIndex:N,dataEndIndex:P},y({props:w.props,dataStartIndex:N,dataEndIndex:P,updateId:C},w.state))}),w.triggerSyncEvent({dataStartIndex:N,dataEndIndex:P})}}),Ee(w,"handleMouseEnter",function(_){var N=w.getMouseInfo(_);if(N){var P=ae(ae({},N),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var C=w.props.onMouseEnter;ke(C)&&C(P,_)}}),Ee(w,"triggeredAfterMouseMove",function(_){var N=w.getMouseInfo(_),P=N?ae(ae({},N),{},{isTooltipActive:!0}):{isTooltipActive:!1};w.setState(P),w.triggerSyncEvent(P);var C=w.props.onMouseMove;ke(C)&&C(P,_)}),Ee(w,"handleItemMouseEnter",function(_){w.setState(function(){return{isTooltipActive:!0,activeItem:_,activePayload:_.tooltipPayload,activeCoordinate:_.tooltipPosition||{x:_.cx,y:_.cy}}})}),Ee(w,"handleItemMouseLeave",function(){w.setState(function(){return{isTooltipActive:!1}})}),Ee(w,"handleMouseMove",function(_){_.persist(),w.throttleTriggeredAfterMouseMove(_)}),Ee(w,"handleMouseLeave",function(_){w.throttleTriggeredAfterMouseMove.cancel();var N={isTooltipActive:!1};w.setState(N),w.triggerSyncEvent(N);var P=w.props.onMouseLeave;ke(P)&&P(N,_)}),Ee(w,"handleOuterEvent",function(_){var N=fH(_),P=Mn(w.props,"".concat(N));if(N&&ke(P)){var C,R;/.*touch.*/i.test(N)?R=w.getMouseInfo(_.changedTouches[0]):R=w.getMouseInfo(_),P((C=R)!==null&&C!==void 0?C:{},_)}}),Ee(w,"handleClick",function(_){var N=w.getMouseInfo(_);if(N){var P=ae(ae({},N),{},{isTooltipActive:!0});w.setState(P),w.triggerSyncEvent(P);var C=w.props.onClick;ke(C)&&C(P,_)}}),Ee(w,"handleMouseDown",function(_){var N=w.props.onMouseDown;if(ke(N)){var P=w.getMouseInfo(_);N(P,_)}}),Ee(w,"handleMouseUp",function(_){var N=w.props.onMouseUp;if(ke(N)){var P=w.getMouseInfo(_);N(P,_)}}),Ee(w,"handleTouchMove",function(_){_.changedTouches!=null&&_.changedTouches.length>0&&w.throttleTriggeredAfterMouseMove(_.changedTouches[0])}),Ee(w,"handleTouchStart",function(_){_.changedTouches!=null&&_.changedTouches.length>0&&w.handleMouseDown(_.changedTouches[0])}),Ee(w,"handleTouchEnd",function(_){_.changedTouches!=null&&_.changedTouches.length>0&&w.handleMouseUp(_.changedTouches[0])}),Ee(w,"handleDoubleClick",function(_){var N=w.props.onDoubleClick;if(ke(N)){var P=w.getMouseInfo(_);N(P,_)}}),Ee(w,"handleContextMenu",function(_){var N=w.props.onContextMenu;if(ke(N)){var P=w.getMouseInfo(_);N(P,_)}}),Ee(w,"triggerSyncEvent",function(_){w.props.syncId!==void 0&&wv.emit(Pv,w.props.syncId,_,w.eventEmitterSymbol)}),Ee(w,"applySyncEvent",function(_){var N=w.props,P=N.layout,C=N.syncMethod,R=w.state.updateId,j=_.dataStartIndex,T=_.dataEndIndex;if(_.dataStartIndex!==void 0||_.dataEndIndex!==void 0)w.setState(ae({dataStartIndex:j,dataEndIndex:T},y({props:w.props,dataStartIndex:j,dataEndIndex:T,updateId:R},w.state)));else if(_.activeTooltipIndex!==void 0){var q=_.chartX,L=_.chartY,K=_.activeTooltipIndex,U=w.state,V=U.offset,D=U.tooltipTicks;if(!V)return;if(typeof C=="function")K=C(D,_);else if(C==="value"){K=-1;for(var Q=0;Q<D.length;Q++)if(D[Q].value===_.activeLabel){K=Q;break}}var X=ae(ae({},V),{},{x:V.left,y:V.top}),E=Math.min(q,X.x+X.width),F=Math.min(L,X.y+X.height),J=D[K]&&D[K].value,ue=sy(w.state,w.props.data,K),he=D[K]?{x:P==="horizontal"?D[K].coordinate:E,y:P==="horizontal"?F:D[K].coordinate}:nO;w.setState(ae(ae({},_),{},{activeLabel:J,activeCoordinate:he,activePayload:ue,activeTooltipIndex:K}))}else w.setState(_)}),Ee(w,"renderCursor",function(_){var N,P=w.state,C=P.isTooltipActive,R=P.activeCoordinate,j=P.activePayload,T=P.offset,q=P.activeTooltipIndex,L=P.tooltipAxisBandSize,K=w.getTooltipEventType(),U=(N=_.props.active)!==null&&N!==void 0?N:C,V=w.props.layout,D=_.key||"_recharts-cursor";return H.createElement(GQ,{key:D,activeCoordinate:R,activePayload:j,activeTooltipIndex:q,chartName:n,element:_,isActive:U,layout:V,offset:T,tooltipAxisBandSize:L,tooltipEventType:K})}),Ee(w,"renderPolarAxis",function(_,N,P){var C=Mn(_,"type.axisType"),R=Mn(w.state,"".concat(C,"Map")),j=_.type.defaultProps,T=j!==void 0?ae(ae({},j),_.props):_.props,q=R&&R[T["".concat(C,"Id")]];return Y.cloneElement(_,ae(ae({},q),{},{className:He(C,q.className),key:_.key||"".concat(N,"-").concat(P),ticks:Fr(q,!0)}))}),Ee(w,"renderPolarGrid",function(_){var N=_.props,P=N.radialLines,C=N.polarAngles,R=N.polarRadius,j=w.state,T=j.radiusAxisMap,q=j.angleAxisMap,L=Wa(T),K=Wa(q),U=K.cx,V=K.cy,D=K.innerRadius,Q=K.outerRadius;return Y.cloneElement(_,{polarAngles:Array.isArray(C)?C:Fr(K,!0).map(function(X){return X.coordinate}),polarRadius:Array.isArray(R)?R:Fr(L,!0).map(function(X){return X.coordinate}),cx:U,cy:V,innerRadius:D,outerRadius:Q,key:_.key||"polar-grid",radialLines:P})}),Ee(w,"renderLegend",function(){var _=w.state.formattedGraphicalItems,N=w.props,P=N.children,C=N.width,R=N.height,j=w.props.margin||{},T=C-(j.left||0)-(j.right||0),q=C_({children:P,formattedGraphicalItems:_,legendWidth:T,legendContent:f});if(!q)return null;var L=q.item,K=W3(q,KQ);return Y.cloneElement(L,ae(ae({},K),{},{chartWidth:C,chartHeight:R,margin:j,onBBoxUpdate:w.handleLegendBBoxUpdate}))}),Ee(w,"renderTooltip",function(){var _,N=w.props,P=N.children,C=N.accessibilityLayer,R=Sn(P,Wn);if(!R)return null;var j=w.state,T=j.isTooltipActive,q=j.activeCoordinate,L=j.activePayload,K=j.activeLabel,U=j.offset,V=(_=R.props.active)!==null&&_!==void 0?_:T;return Y.cloneElement(R,{viewBox:ae(ae({},U),{},{x:U.left,y:U.top}),active:V,label:K,payload:V?L:[],coordinate:q,accessibilityLayer:C})}),Ee(w,"renderBrush",function(_){var N=w.props,P=N.margin,C=N.data,R=w.state,j=R.offset,T=R.dataStartIndex,q=R.dataEndIndex,L=R.updateId;return Y.cloneElement(_,{key:_.key||"_recharts-brush",onChange:xp(w.handleBrushChange,_.props.onChange),data:C,x:le(_.props.x)?_.props.x:j.left,y:le(_.props.y)?_.props.y:j.top+j.height+j.brushBottom-(P.bottom||0),width:le(_.props.width)?_.props.width:j.width,startIndex:T,endIndex:q,updateId:"brush-".concat(L)})}),Ee(w,"renderReferenceElement",function(_,N,P){if(!_)return null;var C=w,R=C.clipPathId,j=w.state,T=j.xAxisMap,q=j.yAxisMap,L=j.offset,K=_.type.defaultProps||{},U=_.props,V=U.xAxisId,D=V===void 0?K.xAxisId:V,Q=U.yAxisId,X=Q===void 0?K.yAxisId:Q;return Y.cloneElement(_,{key:_.key||"".concat(N,"-").concat(P),xAxis:T[D],yAxis:q[X],viewBox:{x:L.left,y:L.top,width:L.width,height:L.height},clipPathId:R})}),Ee(w,"renderActivePoints",function(_){var N=_.item,P=_.activePoint,C=_.basePoint,R=_.childIndex,j=_.isRange,T=[],q=N.props.key,L=N.item.type.defaultProps!==void 0?ae(ae({},N.item.type.defaultProps),N.item.props):N.item.props,K=L.activeDot,U=L.dataKey,V=ae(ae({index:R,dataKey:U,cx:P.x,cy:P.y,r:4,fill:pb(N.item),strokeWidth:2,stroke:"#fff",payload:P.payload,value:P.value},We(K,!1)),Tp(K));return T.push(S.renderActiveDot(K,V,"".concat(q,"-activePoint-").concat(R))),C?T.push(S.renderActiveDot(K,ae(ae({},V),{},{cx:C.x,cy:C.y}),"".concat(q,"-basePoint-").concat(R))):j&&T.push(null),T}),Ee(w,"renderGraphicChild",function(_,N,P){var C=w.filterFormatItem(_,N,P);if(!C)return null;var R=w.getTooltipEventType(),j=w.state,T=j.isTooltipActive,q=j.tooltipAxis,L=j.activeTooltipIndex,K=j.activeLabel,U=w.props.children,V=Sn(U,Wn),D=C.props,Q=D.points,X=D.isRange,E=D.baseLine,F=C.item.type.defaultProps!==void 0?ae(ae({},C.item.type.defaultProps),C.item.props):C.item.props,J=F.activeDot,ue=F.hide,he=F.activeBar,ge=F.activeShape,ye=!!(!ue&&T&&V&&(J||he||ge)),fe={};R!=="axis"&&V&&V.props.trigger==="click"?fe={onClick:xp(w.handleItemMouseEnter,_.props.onClick)}:R!=="axis"&&(fe={onMouseLeave:xp(w.handleItemMouseLeave,_.props.onMouseLeave),onMouseEnter:xp(w.handleItemMouseEnter,_.props.onMouseEnter)});var ne=Y.cloneElement(_,ae(ae({},C.props),fe));function de(vt){return typeof q.dataKey=="function"?q.dataKey(vt.payload):null}if(ye)if(L>=0){var ce,re;if(q.dataKey&&!q.allowDuplicatedCategory){var Re=typeof q.dataKey=="function"?de:"payload.".concat(q.dataKey.toString());ce=Ep(Q,Re,K),re=X&&E&&Ep(E,Re,K)}else ce=Q==null?void 0:Q[L],re=X&&E&&E[L];if(ge||he){var Pe=_.props.activeIndex!==void 0?_.props.activeIndex:L;return[Y.cloneElement(_,ae(ae(ae({},C.props),fe),{},{activeIndex:Pe})),null,null]}if(!Ne(ce))return[ne].concat(qi(w.renderActivePoints({item:C,activePoint:ce,basePoint:re,childIndex:L,isRange:X})))}else{var Ce,Ae=(Ce=w.getItemByXY(w.state.activeCoordinate))!==null&&Ce!==void 0?Ce:{graphicalItem:ne},Fe=Ae.graphicalItem,je=Fe.item,qe=je===void 0?_:je,Ke=Fe.childIndex,Bt=ae(ae(ae({},C.props),fe),{},{activeIndex:Ke});return[Y.cloneElement(qe,Bt),null,null]}return X?[ne,null,null]:[ne,null]}),Ee(w,"renderCustomized",function(_,N,P){return Y.cloneElement(_,ae(ae({key:"recharts-customized-".concat(P)},w.props),w.state))}),Ee(w,"renderMap",{CartesianGrid:{handler:Ap,once:!0},ReferenceArea:{handler:w.renderReferenceElement},ReferenceLine:{handler:Ap},ReferenceDot:{handler:w.renderReferenceElement},XAxis:{handler:Ap},YAxis:{handler:Ap},Brush:{handler:w.renderBrush,once:!0},Bar:{handler:w.renderGraphicChild},Line:{handler:w.renderGraphicChild},Area:{handler:w.renderGraphicChild},Radar:{handler:w.renderGraphicChild},RadialBar:{handler:w.renderGraphicChild},Scatter:{handler:w.renderGraphicChild},Pie:{handler:w.renderGraphicChild},Funnel:{handler:w.renderGraphicChild},Tooltip:{handler:w.renderCursor,once:!0},PolarGrid:{handler:w.renderPolarGrid,once:!0},PolarAngleAxis:{handler:w.renderPolarAxis},PolarRadiusAxis:{handler:w.renderPolarAxis},Customized:{handler:w.renderCustomized}}),w.clipPathId="".concat((A=W.id)!==null&&A!==void 0?A:Da("recharts"),"-clip"),w.throttleTriggeredAfterMouseMove=CA(w.triggeredAfterMouseMove,(O=W.throttleDelay)!==null&&O!==void 0?O:1e3/60),w.state={},w}return iY(S,b),nY(S,[{key:"componentDidMount",value:function(){var A,O;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(A=this.props.margin.left)!==null&&A!==void 0?A:0,top:(O=this.props.margin.top)!==null&&O!==void 0?O:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var A=this.props,O=A.children,w=A.data,_=A.height,N=A.layout,P=Sn(O,Wn);if(P){var C=P.props.defaultIndex;if(!(typeof C!="number"||C<0||C>this.state.tooltipTicks.length-1)){var R=this.state.tooltipTicks[C]&&this.state.tooltipTicks[C].value,j=sy(this.state,w,C,R),T=this.state.tooltipTicks[C].coordinate,q=(this.state.offset.top+_)/2,L=N==="horizontal",K=L?{x:T,y:q}:{y:T,x:q},U=this.state.formattedGraphicalItems.find(function(D){var Q=D.item;return Q.type.name==="Scatter"});U&&(K=ae(ae({},K),U.props.points[C].tooltipPosition),j=U.props.points[C].tooltipPayload);var V={activeTooltipIndex:C,isTooltipActive:!0,activeLabel:R,activePayload:j,activeCoordinate:K};this.setState(V),this.renderCursor(P),this.accessibilityManager.setIndex(C)}}}},{key:"getSnapshotBeforeUpdate",value:function(A,O){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==O.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==A.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==A.margin){var w,_;this.accessibilityManager.setDetails({offset:{left:(w=this.props.margin.left)!==null&&w!==void 0?w:0,top:(_=this.props.margin.top)!==null&&_!==void 0?_:0}})}return null}},{key:"componentDidUpdate",value:function(A){Lv([Sn(A.children,Wn)],[Sn(this.props.children,Wn)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var A=Sn(this.props.children,Wn);if(A&&typeof A.props.shared=="boolean"){var O=A.props.shared?"axis":"item";return l.indexOf(O)>=0?O:i}return i}},{key:"getMouseInfo",value:function(A){if(!this.container)return null;var O=this.container,w=O.getBoundingClientRect(),_=J5(w),N={chartX:Math.round(A.pageX-_.left),chartY:Math.round(A.pageY-_.top)},P=w.width/O.offsetWidth||1,C=this.inRange(N.chartX,N.chartY,P);if(!C)return null;var R=this.state,j=R.xAxisMap,T=R.yAxisMap,q=this.getTooltipEventType(),L=_3(this.state,this.props.data,this.props.layout,C);if(q!=="axis"&&j&&T){var K=Wa(j).scale,U=Wa(T).scale,V=K&&K.invert?K.invert(N.chartX):null,D=U&&U.invert?U.invert(N.chartY):null;return ae(ae({},N),{},{xValue:V,yValue:D},L)}return L?ae(ae({},N),L):null}},{key:"inRange",value:function(A,O){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,_=this.props.layout,N=A/w,P=O/w;if(_==="horizontal"||_==="vertical"){var C=this.state.offset,R=N>=C.left&&N<=C.left+C.width&&P>=C.top&&P<=C.top+C.height;return R?{x:N,y:P}:null}var j=this.state,T=j.angleAxisMap,q=j.radiusAxisMap;if(T&&q){var L=Wa(T);return M4({x:N,y:P},L)}return null}},{key:"parseEventsOfWrapper",value:function(){var A=this.props.children,O=this.getTooltipEventType(),w=Sn(A,Wn),_={};w&&O==="axis"&&(w.props.trigger==="click"?_={onClick:this.handleClick}:_={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var N=Tp(this.props,this.handleOuterEvent);return ae(ae({},N),_)}},{key:"addListener",value:function(){wv.on(Pv,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){wv.removeListener(Pv,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(A,O,w){for(var _=this.state.formattedGraphicalItems,N=0,P=_.length;N<P;N++){var C=_[N];if(C.item===A||C.props.key===A.key||O===Ur(C.item.type)&&w===C.childIndex)return C}return null}},{key:"renderClipPath",value:function(){var A=this.clipPathId,O=this.state.offset,w=O.left,_=O.top,N=O.height,P=O.width;return H.createElement("defs",null,H.createElement("clipPath",{id:A},H.createElement("rect",{x:w,y:_,height:N,width:P})))}},{key:"getXScales",value:function(){var A=this.state.xAxisMap;return A?Object.entries(A).reduce(function(O,w){var _=S3(w,2),N=_[0],P=_[1];return ae(ae({},O),{},Ee({},N,P.scale))},{}):null}},{key:"getYScales",value:function(){var A=this.state.yAxisMap;return A?Object.entries(A).reduce(function(O,w){var _=S3(w,2),N=_[0],P=_[1];return ae(ae({},O),{},Ee({},N,P.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(A){var O;return(O=this.state.xAxisMap)===null||O===void 0||(O=O[A])===null||O===void 0?void 0:O.scale}},{key:"getYScaleByAxisId",value:function(A){var O;return(O=this.state.yAxisMap)===null||O===void 0||(O=O[A])===null||O===void 0?void 0:O.scale}},{key:"getItemByXY",value:function(A){var O=this.state,w=O.formattedGraphicalItems,_=O.activeItem;if(w&&w.length)for(var N=0,P=w.length;N<P;N++){var C=w[N],R=C.props,j=C.item,T=j.type.defaultProps!==void 0?ae(ae({},j.type.defaultProps),j.props):j.props,q=Ur(j.type);if(q==="Bar"){var L=(R.data||[]).find(function(D){return Iz(A,D)});if(L)return{graphicalItem:C,payload:L}}else if(q==="RadialBar"){var K=(R.data||[]).find(function(D){return M4(A,D)});if(K)return{graphicalItem:C,payload:K}}else if(h0(C,_)||m0(C,_)||Ls(C,_)){var U=qU({graphicalItem:C,activeTooltipItem:_,itemData:T.data}),V=T.activeIndex===void 0?U:T.activeIndex;return{graphicalItem:ae(ae({},C),{},{childIndex:V}),payload:Ls(C,_)?T.data[U]:C.props.data[U]}}}return null}},{key:"render",value:function(){var A=this;if(!LB(this))return null;var O=this.props,w=O.children,_=O.className,N=O.width,P=O.height,C=O.style,R=O.compact,j=O.title,T=O.desc,q=W3(O,QQ),L=We(q,!1);if(R)return H.createElement(n3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},H.createElement(qv,li({},L,{width:N,height:P,title:j,desc:T}),this.renderClipPath(),qB(w,this.renderMap)));if(this.props.accessibilityLayer){var K,U;L.tabIndex=(K=this.props.tabIndex)!==null&&K!==void 0?K:0,L.role=(U=this.props.role)!==null&&U!==void 0?U:"application",L.onKeyDown=function(D){A.accessibilityManager.keyboardEvent(D)},L.onFocus=function(){A.accessibilityManager.focus()}}var V=this.parseEventsOfWrapper();return H.createElement(n3,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},H.createElement("div",li({className:He("recharts-wrapper",_),style:ae({position:"relative",cursor:"default",width:N,height:P},C)},V,{ref:function(Q){A.container=Q}}),H.createElement(qv,li({},L,{width:N,height:P,title:j,desc:T,style:fY}),this.renderClipPath(),qB(w,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(Y.Component);Ee(B,"displayName",n),Ee(B,"defaultProps",ae({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),Ee(B,"getDerivedStateFromProps",function(b,S){var W=b.dataKey,A=b.data,O=b.children,w=b.width,_=b.height,N=b.layout,P=b.stackOffset,C=b.margin,R=S.dataStartIndex,j=S.dataEndIndex;if(S.updateId===void 0){var T=M3(b);return ae(ae(ae({},T),{},{updateId:0},y(ae(ae({props:b},T),{},{updateId:0}),S)),{},{prevDataKey:W,prevData:A,prevWidth:w,prevHeight:_,prevLayout:N,prevStackOffset:P,prevMargin:C,prevChildren:O})}if(W!==S.prevDataKey||A!==S.prevData||w!==S.prevWidth||_!==S.prevHeight||N!==S.prevLayout||P!==S.prevStackOffset||!pi(C,S.prevMargin)){var q=M3(b),L={chartX:S.chartX,chartY:S.chartY,isTooltipActive:S.isTooltipActive},K=ae(ae({},_3(S,A,N)),{},{updateId:S.updateId+1}),U=ae(ae(ae({},q),L),K);return ae(ae(ae({},U),y(ae({props:b},U),S)),{},{prevDataKey:W,prevData:A,prevWidth:w,prevHeight:_,prevLayout:N,prevStackOffset:P,prevMargin:C,prevChildren:O})}if(!Lv(O,S.prevChildren)){var V,D,Q,X,E=Sn(O,Oi),F=E&&(V=(D=E.props)===null||D===void 0?void 0:D.startIndex)!==null&&V!==void 0?V:R,J=E&&(Q=(X=E.props)===null||X===void 0?void 0:X.endIndex)!==null&&Q!==void 0?Q:j,ue=F!==R||J!==j,he=!Ne(A),ge=he&&!ue?S.updateId:S.updateId+1;return ae(ae({updateId:ge},y(ae(ae({props:b},S),{},{updateId:ge,dataStartIndex:F,dataEndIndex:J}),S)),{},{prevChildren:O,dataStartIndex:F,dataEndIndex:J})}return null}),Ee(B,"renderActiveDot",function(b,S,W){var A;return Y.isValidElement(b)?A=Y.cloneElement(b,S):ke(b)?A=b(S):A=H.createElement(nl,S),H.createElement(De,{className:"recharts-active-dot",key:W},A)});var I=Y.forwardRef(function(S,W){return H.createElement(B,li({},S,{ref:W}))});return I.displayName=B.displayName,I},xY=P0({chartName:"LineChart",GraphicalChild:qr,axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:fb}),wY=P0({chartName:"BarChart",GraphicalChild:Sr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br}],formatAxisMap:fb}),PY=P0({chartName:"PieChart",GraphicalChild:ea,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:d0},{axisType:"radiusAxis",AxisComp:c0}],formatAxisMap:C9,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),SY=P0({chartName:"ComposedChart",GraphicalChild:[qr,Wo,Sr,x0],axisComponents:[{axisType:"xAxis",AxisComp:Ra},{axisType:"yAxis",AxisComp:Br},{axisType:"zAxis",AxisComp:B0}],formatAxisMap:fb});const C3=({active:e,payload:t,label:n})=>e&&t&&t.length?M.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-3 shadow-lg",children:[M.jsx("p",{className:"font-semibold text-gray-900 mb-2",children:n}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("p",{className:"text-sm",children:[M.jsx("span",{className:"text-blue-600 font-medium",children:"Total Sessions: "}),M.jsx("span",{className:"text-gray-900",children:t[0].payload.totalSessions.toLocaleString()})]}),M.jsxs("p",{className:"text-sm",children:[M.jsx("span",{className:"text-orange-600 font-medium",children:"Human Escalations: "}),M.jsx("span",{className:"text-gray-900",children:t[0].payload.humanEscalations.toLocaleString()})]}),M.jsxs("p",{className:"text-sm",children:[M.jsx("span",{className:"text-red-600 font-medium",children:"Escalation Rate: "}),M.jsxs("span",{className:"text-gray-900",children:[t[0].payload.escalationRate.toFixed(1),"%"]})]})]})]}):null;function aO({data:e,title:t,instanceId:n}){var y,B;const r=Y.useId(),a=t||"Sessions & Escalation Trends",i=e.length<=3&&((B=(y=e[0])==null?void 0:y.week)==null?void 0:B.includes("2026")),s=n||r.replace(/:/g,"-"),l=`${t?t.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase():"escalation-chart"}-${s}`,c=`chart-${l}-${e.length}`,f=e.map((I,b)=>({...I,id:`${l}-${I.week.replace(/\s/g,"-")}-${b}`})),h=`colorSessions-${l}`,d=`colorEscalations-${l}`,v=`colorSessionsLine-${l}`;return M.jsxs(zn,{className:"shadow-xl border-0",children:[M.jsx(jc,{className:"bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 pb-5",children:M.jsxs("div",{className:"flex items-start justify-between",children:[M.jsxs("div",{children:[M.jsx(Dc,{className:"text-2xl font-black text-gray-900",children:a}),M.jsx("p",{className:"text-sm text-gray-600 mt-2 font-medium",children:"Comparing Total Sessions, Human Escalations, and Escalation Rate %"})]}),M.jsxs("div",{className:"flex gap-2",children:[M.jsxs("div",{className:"flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200",children:[M.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600"}),M.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Total Sessions"})]}),M.jsxs("div",{className:"flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200",children:[M.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-600"}),M.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Human Escalations"})]}),M.jsxs("div",{className:"flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200",children:[M.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600"}),M.jsx("span",{className:"text-xs font-bold text-gray-700",children:"Escalation Rate %"})]})]})]})}),M.jsx(Un,{className:"p-6 bg-white",children:M.jsx(Dy,{width:"100%",height:400,children:i?M.jsxs(SY,{data:f,barGap:8,barCategoryGap:"20%",children:[M.jsxs("defs",{children:[M.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[M.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.9},`${h}-stop-1`),M.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.7},`${h}-stop-2`)]}),M.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"0",y2:"1",children:[M.jsx("stop",{offset:"5%",stopColor:"#f97316",stopOpacity:.9},`${d}-stop-1`),M.jsx("stop",{offset:"95%",stopColor:"#f97316",stopOpacity:.7},`${d}-stop-2`)]})]}),M.jsx(Oc,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),M.jsx(Ra,{dataKey:"week",tick:{fontSize:13,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),M.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),M.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),M.jsx(Wn,{content:M.jsx(C3,{})},`tooltip-${l}`),M.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"square",iconSize:14},`legend-${l}`),M.jsx(Sr,{yAxisId:"left",dataKey:"totalSessions",fill:`url(#${h})`,name:"Total Sessions",radius:[10,10,0,0],maxBarSize:80},`bar-total-${l}`),M.jsx(Sr,{yAxisId:"left",dataKey:"humanEscalations",fill:`url(#${d})`,name:"Human Escalations",radius:[10,10,0,0],maxBarSize:80},`bar-human-${l}`),M.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:4,dot:{fill:"#ef4444",r:6,strokeWidth:2,stroke:"#fff"},activeDot:{r:8,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},c):M.jsxs(xY,{data:f,children:[M.jsx("defs",{children:M.jsxs("linearGradient",{id:v,x1:"0",y1:"0",x2:"0",y2:"1",children:[M.jsx("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8},`${v}-stop-1`),M.jsx("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:.1},`${v}-stop-2`)]})}),M.jsx(Oc,{strokeDasharray:"3 3",stroke:"#e5e7eb",vertical:!1},`grid-${l}`),M.jsx(Ra,{dataKey:"week",tick:{fontSize:12,fontWeight:600},stroke:"#6b7280",axisLine:{stroke:"#d1d5db",strokeWidth:2}},`xaxis-${l}`),M.jsx(Br,{yAxisId:"left",tick:{fontSize:12,fontWeight:500},stroke:"#3b82f6",axisLine:{stroke:"#3b82f6",strokeWidth:2},label:{value:"Sessions Count",angle:-90,position:"insideLeft",style:{fontSize:13,fontWeight:"bold",fill:"#1e40af"}}},`yaxis-left-${l}`),M.jsx(Br,{yAxisId:"right",orientation:"right",tick:{fontSize:12,fontWeight:500},stroke:"#ef4444",axisLine:{stroke:"#ef4444",strokeWidth:2},label:{value:"Escalation Rate %",angle:90,position:"insideRight",style:{fontSize:13,fontWeight:"bold",fill:"#dc2626"}}},`yaxis-right-${l}`),M.jsx(Wn,{content:M.jsx(C3,{})},`tooltip-${l}`),M.jsx(Oa,{wrapperStyle:{paddingTop:"25px",fontSize:"14px",fontWeight:"bold"},iconType:"line",iconSize:20},`legend-${l}`),M.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"totalSessions",stroke:"#3b82f6",strokeWidth:3,dot:{fill:"#3b82f6",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Total Sessions"},`line-total-${l}`),M.jsx(qr,{yAxisId:"left",type:"monotone",dataKey:"humanEscalations",stroke:"#f97316",strokeWidth:3,dot:{fill:"#f97316",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Human Escalations"},`line-human-${l}`),M.jsx(qr,{yAxisId:"right",type:"monotone",dataKey:"escalationRate",stroke:"#ef4444",strokeWidth:3,strokeDasharray:"8 4",dot:{fill:"#ef4444",r:5,strokeWidth:2,stroke:"#fff"},activeDot:{r:7,strokeWidth:2},name:"Escalation Rate %"},`line-rate-${l}`)]},c)})})]})}const k3=["#3b82f6","#f97316","#10b981","#8b5cf6","#f59e0b"];function oO({data:e,title:t}){const n=e.reduce((s,l)=>s+l.count,0),r=t||"Channel Distribution",a=r.replace(/\s/g,"-").toLowerCase(),i=e.map((s,l)=>({...s,uniqueKey:`${a}-${s.channel.replace(/\s/g,"-")}-${s.count}-${l}`,id:`${a}-${l}`}));return M.jsxs(zn,{children:[M.jsxs(jc,{children:[M.jsx(Dc,{children:r}),M.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Total sessions: ",n.toLocaleString()]})]}),M.jsx(Un,{children:M.jsx(Dy,{width:"100%",height:300,children:M.jsxs(PY,{children:[M.jsx(ea,{data:i,cx:"50%",cy:"50%",innerRadius:60,outerRadius:100,fill:"#8884d8",paddingAngle:2,dataKey:"count",label:({channel:s,percentage:l})=>`${s} (${l.toFixed(1)}%)`,children:i.map(s=>M.jsx(Xs,{fill:k3[i.indexOf(s)%k3.length]},s.uniqueKey))},`pie-${a}`),M.jsx(Wn,{formatter:(s,l,c)=>[`${s.toLocaleString()} sessions (${c.payload.percentage.toFixed(1)}%)`,c.payload.channel],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}})]},`piechart-${a}`)})})]})}function WY({data:e}){const t=e.reduce((a,i)=>{const s=a.find(l=>l.product===i.product);return s?s.count+=i.count:a.push({...i}),a},[]),n=t.slice(0,10),r=t.reduce((a,i)=>a+i.count,0);return M.jsxs(zn,{children:[M.jsxs(jc,{children:[M.jsx(Dc,{children:"Product Breakdown (Human Handled)"}),M.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Human escalations: ",r.toLocaleString()," ",n.length<t.length&&`(showing top ${n.length})`]})]}),M.jsx(Un,{children:M.jsx(Dy,{width:"100%",height:300,children:M.jsxs(wY,{data:n,children:[M.jsx(Oc,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),M.jsx(Ra,{dataKey:"product",tick:{fontSize:11},stroke:"#6b7280",angle:-45,textAnchor:"end",height:100}),M.jsx(Br,{tick:{fontSize:12},stroke:"#6b7280",label:{value:"Count",angle:-90,position:"insideLeft",style:{fontSize:12}}}),M.jsx(Wn,{formatter:a=>[`${a} escalations`,"Count"],contentStyle:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"6px"}}),M.jsx(Sr,{dataKey:"count",fill:"#f97316",radius:[4,4,0,0]})]})})})]})}function iO({className:e,...t}){return M.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:M.jsx("table",{"data-slot":"table",className:ln("w-full caption-bottom text-sm",e),...t})})}function uO({className:e,...t}){return M.jsx("thead",{"data-slot":"table-header",className:ln("[&_tr]:border-b",e),...t})}function sO({className:e,...t}){return M.jsx("tbody",{"data-slot":"table-body",className:ln("[&_tr:last-child]:border-0",e),...t})}function di({className:e,...t}){return M.jsx("tr",{"data-slot":"table-row",className:ln("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",e),...t})}function Dr({className:e,...t}){return M.jsx("th",{"data-slot":"table-head",className:ln("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function An({className:e,...t}){return M.jsx("td",{"data-slot":"table-cell",className:ln("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t})}function AY({data:e}){const[t,n]=Y.useState(new Set),r=a=>{const i=new Set(t);i.has(a)?i.delete(a):i.add(a),n(i)};return M.jsx("div",{className:"border rounded-lg overflow-hidden",children:M.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:M.jsxs(iO,{children:[M.jsx(uO,{className:"bg-gray-50 sticky top-0 z-10",children:M.jsxs(di,{children:[M.jsx(Dr,{className:"w-12"}),M.jsx(Dr,{children:"Issue Type"}),M.jsx(Dr,{className:"text-right",children:"Count"})]})}),M.jsx(sO,{children:e.flatMap((a,i)=>{const s=t.has(a.issue),l=[M.jsxs(di,{className:"cursor-pointer hover:bg-gray-50",onClick:()=>r(a.issue),children:[M.jsx(An,{children:s?M.jsx(UN,{className:"w-4 h-4"}):M.jsx(kv,{className:"w-4 h-4"})}),M.jsx(An,{className:"font-medium",children:a.issue}),M.jsx(An,{className:"text-right font-semibold",children:a.count})]},`${a.issue}-${i}`)];return s&&a.subIssues.forEach((c,f)=>{l.push(M.jsxs(di,{className:"bg-blue-50",children:[M.jsx(An,{}),M.jsx(An,{className:"pl-8",children:M.jsxs("div",{children:[M.jsx("div",{className:"font-medium text-sm text-gray-900",children:c.subType}),M.jsx("div",{className:"text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5",children:c.products.map((h,d)=>M.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700",children:[h.product," ",M.jsxs("span",{className:"ml-1 font-semibold",children:["(",h.count,")"]})]},`${a.issue}-${c.subType}-${h.product}-${d}`))})]})}),M.jsx(An,{className:"text-right",children:c.count})]},`${a.issue}-${c.subType}-${f}`))}),l})})]})})})}const Ju=50;function ai({field:e,currentField:t,direction:n,onSort:r,children:a}){return M.jsxs("button",{onClick:()=>r(e),className:"flex items-center gap-1 hover:text-gray-900 font-medium",children:[a,M.jsx(LN,{className:`w-4 h-4 ${t===e?"text-blue-600":"text-gray-400"}`})]})}function _Y({data:e=[]}){const[t,n]=Y.useState("createdAt"),[r,a]=Y.useState("desc"),[i,s]=Y.useState(0),l=Y.useCallback(d=>{n(v=>v===d?(a(y=>y==="asc"?"desc":"asc"),d):(a("asc"),d)),s(0)},[]),c=Y.useMemo(()=>[...e].sort((d,v)=>{let y,B;return t==="createdAt"?(y=ur(d.createdAt).getTime(),B=ur(v.createdAt).getTime(),isNaN(y)&&(y=-1/0),isNaN(B)&&(B=-1/0)):(y=(d[t]||"").toLowerCase(),B=(v[t]||"").toLowerCase()),r==="asc"?y>B?1:y<B?-1:0:y<B?1:y>B?-1:0}),[e,t,r]),f=Math.ceil(c.length/Ju),h=Y.useMemo(()=>c.slice(i*Ju,(i+1)*Ju),[c,i]);return M.jsxs("div",{className:"space-y-3",children:[M.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 px-1",children:[M.jsxs("span",{children:["Showing ",M.jsxs("span",{className:"font-semibold text-gray-800",children:[i*Ju+1,"–",Math.min((i+1)*Ju,c.length)]})," of ",M.jsx("span",{className:"font-semibold text-gray-800",children:c.length.toLocaleString()})," sessions"]}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("button",{onClick:()=>s(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:M.jsx(AI,{className:"w-4 h-4"})}),M.jsxs("span",{className:"text-xs font-medium",children:["Page ",i+1," of ",f||1]}),M.jsx("button",{onClick:()=>s(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:M.jsx(kv,{className:"w-4 h-4"})})]})]}),M.jsx("div",{className:"border rounded-lg overflow-hidden",children:M.jsx("div",{className:"max-h-[500px] overflow-y-auto",children:M.jsxs(iO,{children:[M.jsx(uO,{className:"bg-gray-50 sticky top-0 z-10",children:M.jsxs(di,{children:[M.jsx(Dr,{children:M.jsx(ai,{field:"createdAt",currentField:t,direction:r,onSort:l,children:"Date"})}),M.jsx(Dr,{children:M.jsx(ai,{field:"channel",currentField:t,direction:r,onSort:l,children:"Channel"})}),M.jsx(Dr,{children:M.jsx(ai,{field:"product",currentField:t,direction:r,onSort:l,children:"Product"})}),M.jsx(Dr,{children:M.jsx(ai,{field:"issue",currentField:t,direction:r,onSort:l,children:"Issue"})}),M.jsx(Dr,{children:M.jsx(ai,{field:"subType",currentField:t,direction:r,onSort:l,children:"Sub Type"})}),M.jsx(Dr,{children:M.jsx(ai,{field:"handled",currentField:t,direction:r,onSort:l,children:"Handled By"})})]})}),M.jsx(sO,{children:h.length===0?M.jsx(di,{children:M.jsx(An,{colSpan:6,className:"text-center text-gray-400 py-12",children:"No sessions found."})}):h.map((d,v)=>M.jsxs(di,{className:"hover:bg-blue-50/50 transition-colors",children:[M.jsx(An,{className:"whitespace-nowrap text-gray-700",children:lR(ur(d.createdAt))}),M.jsx(An,{children:M.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700",children:d.channel||"-"})}),M.jsx(An,{className:"text-gray-700",children:d.product||"-"}),M.jsx(An,{className:"text-gray-700",children:d.issue||"-"}),M.jsx(An,{className:"text-gray-500 text-xs",children:d.subType||"-"}),M.jsx(An,{children:M.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${d.handled==="Bot"?"bg-blue-100 text-blue-800":"bg-orange-100 text-orange-800"}`,children:d.handled||"-"})})]},`${i}-${v}`))})]})})}),f>1&&M.jsxs("div",{className:"flex items-center justify-center gap-2 pt-1",children:[M.jsx("button",{onClick:()=>s(0),disabled:i===0,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"First"}),M.jsx("button",{onClick:()=>s(d=>Math.max(0,d-1)),disabled:i===0,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:M.jsx(AI,{className:"w-4 h-4"})}),Array.from({length:Math.min(5,f)},(d,v)=>{let y;return f<=5||i<3?y=v:i>f-4?y=f-5+v:y=i-2+v,M.jsx("button",{onClick:()=>s(y),className:`px-3 py-1.5 text-xs rounded-md border font-medium transition-colors ${y===i?"bg-blue-600 text-white border-blue-600":"border-gray-200 hover:bg-gray-100 text-gray-700"}`,children:y+1},y)}),M.jsx("button",{onClick:()=>s(d=>Math.min(f-1,d+1)),disabled:i>=f-1,className:"p-1.5 rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:M.jsx(kv,{className:"w-4 h-4"})}),M.jsx("button",{onClick:()=>s(f-1),disabled:i>=f-1,className:"px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium",children:"Last"})]})]})}function lO({metrics:e,topChannel:t,top5Products:n,top5Issues:r,monthCount:a}){return M.jsxs(zn,{className:"border-0 shadow-xl overflow-hidden mt-6",children:[M.jsx("div",{className:"bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white px-6 py-4 border-b border-white/10",children:M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg border border-white/20",children:M.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-xl font-black tracking-tight",children:"Waggle AI Performance Summary"}),M.jsx("p",{className:"text-[10px] text-indigo-200 font-bold uppercase tracking-widest opacity-80",children:"Full Analytics Overview"})]})]})}),M.jsxs(Un,{className:"p-6 bg-gradient-to-br from-slate-50 to-white",children:[M.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[M.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[M.jsx("div",{className:"w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300",children:M.jsx("svg",{className:"w-4 h-4 text-blue-600 group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})})}),M.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Total Sessions"})]}),M.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:e.totalSessions.toLocaleString()}),M.jsxs("p",{className:"text-[10px] text-slate-400 font-medium italic",children:["Across ",a," ",a===1?"month":"months"]})]}),M.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[M.jsx("div",{className:"w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300",children:M.jsx("svg",{className:"w-4 h-4 text-emerald-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),M.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Bot Efficiency"})]}),M.jsxs("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:[e.botPercentage.toFixed(1),"%"]}),M.jsxs("p",{className:"text-[10px] text-emerald-600 font-bold",children:[e.botHandled.toLocaleString()," Handled"]})]}),M.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[M.jsx("div",{className:"w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300",children:M.jsx("svg",{className:"w-4 h-4 text-rose-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),M.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Avg Escalation"})]}),M.jsxs("p",{className:"text-2xl font-black text-rose-600 tracking-tight mb-0.5",children:[e.escalationRate.toFixed(1),"%"]}),M.jsx("p",{className:"text-[10px] text-rose-400 font-bold uppercase",children:"Human Assistance Needs"})]}),M.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[M.jsx("div",{className:"w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300",children:M.jsx("svg",{className:"w-4 h-4 text-indigo-600 group-hover:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),M.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Main Channel"})]}),M.jsx("p",{className:"text-2xl font-black text-slate-900 tracking-tight mb-0.5",children:(t==null?void 0:t.channel)||"N/A"}),M.jsxs("p",{className:"text-[10px] text-indigo-500 font-bold uppercase",children:[((t==null?void 0:t.percentage)||0).toFixed(1),"% Share"]})]})]}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[M.jsxs("div",{className:"bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-slate-800",children:[M.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-5 pointer-events-none",children:M.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),M.jsxs("h4",{className:"flex items-center gap-2 text-indigo-400 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),"Top 5 Products Escalated"]}),M.jsx("div",{className:"space-y-2 relative z-10",children:n.map((i,s)=>M.jsxs("div",{className:"flex justify-between items-center bg-white/5 rounded-xl p-2.5 border border-white/10 hover:bg-white/10 transition-colors",children:[M.jsxs("span",{className:"font-bold text-sm text-indigo-50 flex items-center gap-2",children:[M.jsxs("span",{className:"text-indigo-400 font-mono text-xs opacity-70",children:[s+1,"."]})," ",i.product||"N/A"]}),M.jsxs("span",{className:"px-2.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-bold ring-1 ring-indigo-500/50",children:[i.count.toLocaleString()," cases"]})]},s))})]}),M.jsxs("div",{className:"bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg border border-indigo-500/30",children:[M.jsx("div",{className:"absolute top-0 right-0 p-3 opacity-10 pointer-events-none",children:M.jsx("svg",{className:"w-32 h-32",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),M.jsxs("h4",{className:"flex items-center gap-2 text-indigo-100 font-black uppercase tracking-[0.1em] text-xs mb-4",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-pulse"}),"Top 5 Issue Types"]}),M.jsx("div",{className:"space-y-2 relative z-10",children:r.map((i,s)=>M.jsxs("div",{className:"flex justify-between items-center bg-black/10 rounded-xl p-2.5 border border-white/10 hover:bg-black/20 transition-colors",children:[M.jsxs("span",{className:"font-bold text-sm text-purple-50 flex items-center gap-2",children:[M.jsxs("span",{className:"text-purple-300 font-mono text-xs opacity-70",children:[s+1,"."]})," ",i.issue||"N/A"]}),M.jsxs("span",{className:"px-2.5 py-0.5 bg-white/10 text-white rounded-full text-xs font-bold ring-1 ring-white/20",children:[i.humanCount.toLocaleString()," escapements"]})]},s))})]})]})]})]})}function MY({monthsData:e,weeklyEscalation:t}){const n=e.flatMap(l=>l.data),r=Rv(n),a=Hv(n)[0],i=OW(n).slice(0,5),s=jv(n,5);return M.jsxs(M.Fragment,{children:[M.jsxs(zn,{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 border-0 shadow-xl overflow-hidden relative",children:[M.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"}),M.jsx(Un,{className:"p-5 relative z-10",children:M.jsxs("div",{className:"text-center text-white",children:[M.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-2 uppercase tracking-wider border border-white/30",children:[M.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})}),"Performance Analysis"]}),M.jsx("h2",{className:"text-2xl md:text-3xl font-black mb-1.5 tracking-tight drop-shadow-lg",children:"Dynamic Monthly Overview"}),M.jsx("p",{className:"text-base text-white/90 font-medium max-w-2xl mx-auto",children:"Comprehensive analysis across available months"})]})})]}),M.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(l=>{const c=jv(l.data,3);return M.jsxs(zn,{className:`relative overflow-hidden shadow-lg border-0 bg-gradient-to-br ${l.colorFrom} ${l.colorTo} hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group`,children:[M.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),M.jsx(jc,{className:"text-white pb-3 pt-4 relative z-10",children:M.jsxs("div",{className:"text-center",children:[M.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold mb-2 uppercase tracking-wider border border-white/30",children:[M.jsx("svg",{className:"w-2.5 h-2.5",fill:"currentColor",viewBox:"0 0 20 20",children:M.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),l.shortName]}),M.jsx(Dc,{className:"text-2xl font-black mb-3 drop-shadow",children:l.name}),M.jsxs("div",{className:"bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-md",children:[M.jsx("p",{className:"text-[10px] text-white/90 uppercase tracking-widest mb-1 font-bold",children:"Total Sessions"}),M.jsx("p",{className:"text-4xl font-black tracking-tight drop-shadow-md",children:l.data.length.toLocaleString()}),l.data.length<200&&M.jsx("p",{className:"text-[10px] text-white/80 mt-1 font-medium",children:"Partial data recorded"})]})]})}),M.jsxs(Un,{className:"p-4 bg-white/95 backdrop-blur-sm relative z-10",children:[M.jsxs("div",{className:"space-y-2 mb-4",children:[M.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm border border-green-200",children:[M.jsxs("div",{className:"flex justify-between items-center mb-1",children:[M.jsxs("div",{className:"flex items-center gap-1.5",children:[M.jsx("div",{className:"w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-sm",children:M.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),M.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Bot Handled"})]}),M.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-green-300",children:M.jsxs("p",{className:"text-sm font-black text-green-700",children:[l.metrics.botPercentage.toFixed(1),"%"]})})]}),M.jsx("p",{className:"text-xl font-black text-gray-900",children:l.metrics.botHandled.toLocaleString()})]}),M.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 shadow-sm border border-orange-200",children:[M.jsxs("div",{className:"flex justify-between items-center mb-1",children:[M.jsxs("div",{className:"flex items-center gap-1.5",children:[M.jsx("div",{className:"w-6 h-6 bg-orange-500 rounded flex items-center justify-center shadow-sm",children:M.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),M.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-wide",children:"Human Escalated"})]}),M.jsx("div",{className:"bg-white rounded px-2 py-0.5 shadow-sm border border-orange-300",children:M.jsxs("p",{className:"text-sm font-black text-orange-700",children:[l.metrics.humanPercentage.toFixed(1),"%"]})})]}),M.jsx("p",{className:"text-xl font-black text-gray-900",children:l.metrics.humanHandled.toLocaleString()})]})]}),M.jsxs("div",{className:"border-t border-slate-100 pt-3",children:[M.jsxs("h5",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),"Top 3 Monthly Issues"]}),M.jsx("div",{className:"space-y-1.5",children:c.map((f,h)=>M.jsxs("div",{className:"flex justify-between items-center text-[11px] bg-slate-50 p-1.5 rounded-md border border-slate-100",children:[M.jsx("span",{className:"font-bold text-slate-700 truncate max-w-[120px]",children:f.issue}),M.jsx("span",{className:"font-black text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded",children:f.humanCount})]},h))})]})]})]},l.name)})}),M.jsx(aO,{data:t,title:"Sessions & Escalation Comparison",instanceId:"overview-comparison"}),M.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:e.map(l=>M.jsx(oO,{data:l.channels,title:`${l.name} - Channels`},l.name))}),M.jsx(lO,{metrics:r,topChannel:a,top5Products:i,top5Issues:s,monthCount:e.length})]})}const OY="WaggleAIDB",CY=1,Ha="waggle_manual_data_store",xb=()=>new Promise((e,t)=>{const n=indexedDB.open(OY,CY);n.onerror=()=>{console.error("Error opening db",n.error),t(n.error)},n.onsuccess=()=>{e(n.result)},n.onupgradeneeded=r=>{const a=r.target.result;a.objectStoreNames.contains(Ha)||a.createObjectStore(Ha,{keyPath:"id"})}}),N3=async e=>{const t=await xb();return new Promise((n,r)=>{const s=t.transaction(Ha,"readwrite").objectStore(Ha).put({id:"all_data",data:e});s.onsuccess=()=>n(),s.onerror=()=>r(s.error)})},E3=async()=>{const e=await xb();return new Promise((t,n)=>{const i=e.transaction(Ha,"readonly").objectStore(Ha).get("all_data");i.onsuccess=()=>{i.result?t(i.result.data):t([])},i.onerror=()=>n(i.error)})},kY=async()=>{const e=await xb();return new Promise((t,n)=>{const i=e.transaction(Ha,"readwrite").objectStore(Ha).clear();i.onsuccess=()=>t(),i.onerror=()=>n(i.error)})},NY=`Channel,Created at,Product,Issue,Sub Type,Handled
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
Inapp,2026-05-10,,,,Bot`;function EY(){const[e,t]=Y.useState([]),[n,r]=Y.useState([]),[a,i]=Y.useState("all"),[s,l]=Y.useState("all"),[c,f]=Y.useState([]),[h,d]=Y.useState("overview"),v=Y.useRef(null),[y,B]=Y.useState(null),[I,b]=Y.useState(!1),S=Y.useRef([]);Y.useEffect(()=>{S.current=e},[e]);const W=L=>{if(!L)return L;const K=L.trim(),U=K.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/);if(U){const[,Q,X,E]=U;return`${E.padStart(2,"0")}-${X.padStart(2,"0")}-${Q}`}const V=K.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/);if(V){const[,Q,X,E]=V;return parseInt(Q)>12?`${Q.padStart(2,"0")}-${X.padStart(2,"0")}-${E}`:`${X.padStart(2,"0")}-${Q.padStart(2,"0")}-${E}`}const D=new Date(K);return isNaN(D.getTime())?K:`${String(D.getDate()).padStart(2,"0")}-${String(D.getMonth()+1).padStart(2,"0")}-${D.getFullYear()}`};Y.useEffect(()=>{let L=[];vI.parse(NY,{header:!0,skipEmptyLines:!0,complete:async K=>{L=K.data.map(U=>({channel:U.Channel||U.channel||"",createdAt:W(U["Created at"]||U.createdAt||U["Created date"]||U.Date||U.date||U["Created Date"]||""),product:U.Product||U.product||"",issue:U.Issue||U.issue||"",subType:U["Sub Type"]||U.subType||"",handled:U.Handled||U.handled||""}));try{const U=localStorage.getItem("waggle_manual_data");let V=await E3();if(U&&V.length===0)try{const D=JSON.parse(U);Array.isArray(D)&&(V=D,await N3(D))}catch{}Array.isArray(V)&&V.length>0&&(L=[...L,...V],b(!0))}catch(U){console.error("Error loading data from IndexedDB",U)}t(L)}})},[]);const A=Y.useMemo(()=>{const L=["january","february","march","april","may","june","july","august","september","october","november","december"],K=new Set;return e.forEach(U=>{try{const V=ur(U.createdAt);if(!isNaN(V.getTime())){const D=L[V.getMonth()];K.add(`${D}-${V.getFullYear()}`)}}catch{}}),Array.from(K).sort((U,V)=>{const[D,Q]=U.split("-"),[X,E]=V.split("-");return Q!==E?parseInt(Q)-parseInt(E):L.indexOf(D)-L.indexOf(X)})},[e]);Y.useEffect(()=>{f(a&&a!=="all"?_W(a):[]),l("all")},[a]),Y.useEffect(()=>{e.length>0&&_(a,s)},[s,a,e,h]);const O=L=>{var U;const K=(U=L.target.files)==null?void 0:U[0];K&&(vI.parse(K,{header:!0,skipEmptyLines:!0,complete:V=>{if(!V.data.length){B({type:"error",message:"The CSV file appears to be empty."});return}const D=V.data.map(E=>({channel:E.Channel||E.channel||"",createdAt:W(E["Created at"]||E.createdAt||E["Created date"]||E.Date||E.date||E["Created Date"]||""),product:E.Product||E.product||"",issue:E.Issue||E.issue||"",subType:E["Sub Type"]||E.subType||"",handled:E.Handled||E.handled||""})),Q=new Set(S.current.map(E=>`${E.channel}|${E.createdAt}|${E.product}|${E.issue}|${E.subType}|${E.handled}`)),X=D.filter(E=>!Q.has(`${E.channel}|${E.createdAt}|${E.product}|${E.issue}|${E.subType}|${E.handled}`));X.length>0?E3().then(async E=>{const F=[...E,...X];await N3(F);try{localStorage.setItem("waggle_manual_data",JSON.stringify(F))}catch{}t(J=>[...J,...X]),b(!0),B({type:"success",message:`Added ${X.length} rows.`}),setTimeout(()=>B(null),5e3)}).catch(E=>{console.error("Failed to save manual data",E),B({type:"error",message:"Failed to save data. Try again."}),setTimeout(()=>B(null),5e3)}):(B({type:"error",message:"No new rows found."}),setTimeout(()=>B(null),5e3))}}),L.target.value="")},w=async()=>{if(confirm("Are you sure you want to remove all manually uploaded data? This cannot be undone."))try{await kY(),localStorage.removeItem("waggle_manual_data"),b(!1),B({type:"success",message:"All uploaded data has been cleared. Reloading..."}),setTimeout(()=>window.location.reload(),1500)}catch(L){console.error("Failed to clear manual data",L),B({type:"error",message:"Failed to clear data."})}},_=(L,K,U)=>{let V=e;if(L!=="all"?V=e.filter(D=>{const Q=ur(D.createdAt);return Tv(Q,L)}):V=e.filter(D=>!isNaN(ur(D.createdAt).getTime())),K!=="all"){const D=c.find(Q=>Q.value===K);D&&(V=V.filter(Q=>MW(ur(Q.createdAt),D)))}r(V)},N=Rv(n),P=Hv(n),C=OW(n),R=cR(n),j=pR(e,a),T=[{from:"from-blue-500",to:"to-cyan-500"},{from:"from-purple-500",to:"to-indigo-600"},{from:"from-pink-500",to:"to-rose-600"},{from:"from-emerald-500",to:"to-teal-600"},{from:"from-orange-500",to:"to-amber-500"}],q=(a==="all"?A:[a]).map((L,K)=>{const U=e.filter(X=>Tv(ur(X.createdAt),L)),[V,D]=L.split("-"),Q=T[K%T.length];return{name:`${V.charAt(0).toUpperCase()+V.slice(1)} ${D}`,shortName:`Month ${K+1}`,data:U,metrics:Rv(U),channels:Hv(U),colorFrom:Q.from,colorTo:Q.to}});return M.jsx("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",children:M.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[M.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[M.jsxs("div",{children:[M.jsxs("h1",{className:"text-3xl font-bold",children:["Waggle AI Chatbot Dashboard ",M.jsx("span",{className:"text-xs font-normal text-gray-400 align-top",children:"v1.3"})]}),M.jsx("p",{className:"text-gray-600 mt-1",children:"Track and analyze customer support interactions"})]}),M.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[M.jsxs("select",{value:a,onChange:L=>i(L.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",children:[M.jsx("option",{value:"all",children:"All Months"}),A.map(L=>M.jsxs("option",{value:L,children:[L.split("-")[0].charAt(0).toUpperCase()+L.split("-")[0].slice(1)," ",L.split("-")[1]]},L))]}),M.jsxs("select",{value:s,onChange:L=>l(L.target.value),className:"h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm w-full sm:w-[200px]",disabled:a==="all",children:[M.jsx("option",{value:"all",children:"All Weeks"}),c.map(L=>M.jsx("option",{value:L.value,children:L.label},L.value))]}),M.jsx("input",{ref:v,type:"file",accept:".csv",onChange:O,className:"hidden"}),I&&M.jsxs(Bf,{onClick:w,variant:"outline",className:"bg-white border-red-300 text-red-600",children:[M.jsx(JN,{className:"w-4 h-4 mr-2"})," Clear Uploads"]}),M.jsxs(Bf,{onClick:()=>{var L;return(L=v.current)==null?void 0:L.click()},variant:"outline",className:"bg-white border-blue-300 text-blue-700",children:[M.jsx(QN,{className:"w-4 h-4 mr-2"})," Add Data"]}),M.jsxs(Bf,{onClick:()=>fR(n),variant:"outline",className:"bg-white",children:[M.jsx(XN,{className:"w-4 h-4 mr-2"})," Export CSV"]})]})]}),y&&M.jsx(zn,{className:`border ${y.type==="success"?"bg-green-50":"bg-red-50"}`,children:M.jsxs(Un,{className:"p-4 flex items-center justify-between",children:[M.jsx("p",{className:"font-medium",children:y.message}),M.jsx("button",{onClick:()=>B(null),children:M.jsx(uE,{className:"w-4 h-4"})})]})}),a==="all"&&M.jsx("div",{className:"flex justify-center",children:M.jsxs("div",{className:"inline-flex rounded-lg border border-gray-200 bg-white p-1",children:[M.jsx("button",{onClick:()=>d("overview"),className:`px-6 py-2 rounded-md text-sm font-medium ${h==="overview"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Overview Comparison"}),M.jsx("button",{onClick:()=>d("detailed"),className:`px-6 py-2 rounded-md text-sm font-medium ${h==="detailed"?"bg-blue-600 text-white":"text-gray-700"}`,children:"Detailed Analysis"})]})}),a==="all"&&h==="overview"?M.jsx(MY,{monthsData:q,weeklyEscalation:j}):M.jsxs(M.Fragment,{children:[M.jsx(dR,{metrics:N}),M.jsx(lO,{metrics:N,topChannel:P[0],top5Products:C.slice(0,5),top5Issues:jv(n,5),monthCount:a==="all"?A.length:1}),M.jsx(aO,{data:j,instanceId:"detailed-analysis"}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[M.jsx(oO,{data:P}),M.jsx(WY,{data:C})]}),M.jsx(zn,{children:M.jsx(Un,{className:"p-6",children:M.jsxs(EN,{defaultValue:"issues",className:"w-full",children:[M.jsxs(TN,{className:"grid w-full grid-cols-2 max-w-md",children:[M.jsx(PI,{value:"issues",children:"Issue Analysis"}),M.jsx(PI,{value:"sessions",children:"Detailed Sessions"})]}),M.jsx(SI,{value:"issues",className:"mt-6",children:M.jsx(AY,{data:R})}),M.jsx(SI,{value:"sessions",className:"mt-6",children:M.jsx(_Y,{data:n})})]})})})]})]})})}mk.createRoot(document.getElementById("root")).render(M.jsx(EY,{}));
