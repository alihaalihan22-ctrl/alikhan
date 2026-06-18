(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Y_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xm={exports:{}},$l={},jm={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),q_=Symbol.for("react.portal"),$_=Symbol.for("react.fragment"),K_=Symbol.for("react.strict_mode"),Z_=Symbol.for("react.profiler"),Q_=Symbol.for("react.provider"),J_=Symbol.for("react.context"),ev=Symbol.for("react.forward_ref"),tv=Symbol.for("react.suspense"),nv=Symbol.for("react.memo"),iv=Symbol.for("react.lazy"),Lh=Symbol.iterator;function rv(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var Ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,$m={};function eo(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||Ym}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Km(){}Km.prototype=eo.prototype;function dd(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||Ym}var hd=dd.prototype=new Km;hd.constructor=dd;qm(hd,eo.prototype);hd.isPureReactComponent=!0;var Dh=Array.isArray,Zm=Object.prototype.hasOwnProperty,pd={current:null},Qm={key:!0,ref:!0,__self:!0,__source:!0};function Jm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zm.call(e,i)&&!Qm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ra,type:t,key:s,ref:o,props:r,_owner:pd.current}}function sv(t,e){return{$$typeof:ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function md(t){return typeof t=="object"&&t!==null&&t.$$typeof===ra}function ov(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ih=/\/+/g;function gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ov(""+t.key):e.toString(36)}function el(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ra:case q_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+gc(o,0):i,Dh(r)?(n="",t!=null&&(n=t.replace(Ih,"$&/")+"/"),el(r,e,n,"",function(u){return u})):r!=null&&(md(r)&&(r=sv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ih,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Dh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+gc(s,a);o+=el(s,e,n,l,r)}else if(l=rv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+gc(s,a++),o+=el(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pa(t,e,n){if(t==null)return t;var i=[],r=0;return el(t,i,"","",function(s){return e.call(n,s,r++)}),i}function av(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},tl={transition:null},lv={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:tl,ReactCurrentOwner:pd};function e0(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:pa,forEach:function(t,e,n){pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pa(t,function(){e++}),e},toArray:function(t){return pa(t,function(e){return e})||[]},only:function(t){if(!md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=eo;Ke.Fragment=$_;Ke.Profiler=Z_;Ke.PureComponent=dd;Ke.StrictMode=K_;Ke.Suspense=tv;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv;Ke.act=e0;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=qm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Zm.call(e,l)&&!Qm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ra,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:J_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Q_,_context:t},t.Consumer=t};Ke.createElement=Jm;Ke.createFactory=function(t){var e=Jm.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:ev,render:t}};Ke.isValidElement=md;Ke.lazy=function(t){return{$$typeof:iv,_payload:{_status:-1,_result:t},_init:av}};Ke.memo=function(t,e){return{$$typeof:nv,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};Ke.unstable_act=e0;Ke.useCallback=function(t,e){return hn.current.useCallback(t,e)};Ke.useContext=function(t){return hn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return hn.current.useEffect(t,e)};Ke.useId=function(){return hn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return hn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};Ke.useRef=function(t){return hn.current.useRef(t)};Ke.useState=function(t){return hn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return hn.current.useTransition()};Ke.version="18.3.1";jm.exports=Ke;var bi=jm.exports;const cv=Y_(bi);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv=bi,fv=Symbol.for("react.element"),dv=Symbol.for("react.fragment"),hv=Object.prototype.hasOwnProperty,pv=uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mv={key:!0,ref:!0,__self:!0,__source:!0};function t0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)hv.call(e,i)&&!mv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fv,type:t,key:s,ref:o,props:r,_owner:pv.current}}$l.Fragment=dv;$l.jsx=t0;$l.jsxs=t0;Xm.exports=$l;var He=Xm.exports,Au={},n0={exports:{}},In={},i0={exports:{}},r0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,q){var ee=B.length;B.push(q);e:for(;0<ee;){var le=ee-1>>>1,pe=B[le];if(0<r(pe,q))B[le]=q,B[ee]=pe,ee=le;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var q=B[0],ee=B.pop();if(ee!==q){B[0]=ee;e:for(var le=0,pe=B.length,Ve=pe>>>1;le<Ve;){var Xe=2*(le+1)-1,De=B[Xe],Z=Xe+1,de=B[Z];if(0>r(De,ee))Z<pe&&0>r(de,De)?(B[le]=de,B[Z]=ee,le=Z):(B[le]=De,B[Xe]=ee,le=Xe);else if(Z<pe&&0>r(de,ee))B[le]=de,B[Z]=ee,le=Z;else break e}}return q}function r(B,q){var ee=B.sortIndex-q.sortIndex;return ee!==0?ee:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,p=null,c=3,d=!1,v=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(B){for(var q=n(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=B)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function M(B){if(y=!1,x(B),!v)if(n(l)!==null)v=!0,W(R);else{var q=n(u);q!==null&&z(M,q.startTime-B)}}function R(B,q){v=!1,y&&(y=!1,f(_),_=-1),d=!0;var ee=c;try{for(x(q),p=n(l);p!==null&&(!(p.expirationTime>q)||B&&!L());){var le=p.callback;if(typeof le=="function"){p.callback=null,c=p.priorityLevel;var pe=le(p.expirationTime<=q);q=t.unstable_now(),typeof pe=="function"?p.callback=pe:p===n(l)&&i(l),x(q)}else i(l);p=n(l)}if(p!==null)var Ve=!0;else{var Xe=n(u);Xe!==null&&z(M,Xe.startTime-q),Ve=!1}return Ve}finally{p=null,c=ee,d=!1}}var T=!1,b=null,_=-1,A=5,P=-1;function L(){return!(t.unstable_now()-P<A)}function F(){if(b!==null){var B=t.unstable_now();P=B;var q=!0;try{q=b(!0,B)}finally{q?j():(T=!1,b=null)}}else T=!1}var j;if(typeof m=="function")j=function(){m(F)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,N=K.port2;K.port1.onmessage=F,j=function(){N.postMessage(null)}}else j=function(){g(F,0)};function W(B){b=B,T||(T=!0,j())}function z(B,q){_=g(function(){B(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){v||d||(v=!0,W(R))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(c){case 1:case 2:case 3:var q=3;break;default:q=c}var ee=c;c=q;try{return B()}finally{c=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=c;c=B;try{return q()}finally{c=ee}},t.unstable_scheduleCallback=function(B,q,ee){var le=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?le+ee:le):ee=le,B){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=ee+pe,B={id:h++,callback:q,priorityLevel:B,startTime:ee,expirationTime:pe,sortIndex:-1},ee>le?(B.sortIndex=ee,e(u,B),n(l)===null&&B===n(u)&&(y?(f(_),_=-1):y=!0,z(M,ee-le))):(B.sortIndex=pe,e(l,B),v||d||(v=!0,W(R))),B},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(B){var q=c;return function(){var ee=c;c=q;try{return B.apply(this,arguments)}finally{c=ee}}}})(r0);i0.exports=r0;var gv=i0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=bi,Dn=gv;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,Oo={};function Qr(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Oo[t]=e,t=0;t<e.length;t++)s0.add(e[t])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=Object.prototype.hasOwnProperty,vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nh={},Uh={};function xv(t){return Ru.call(Uh,t)?!0:Ru.call(Nh,t)?!1:vv.test(t)?Uh[t]=!0:(Nh[t]=!0,!1)}function Sv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yv(t,e,n,i){if(e===null||typeof e>"u"||Sv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var gd=/[\-:]([a-z])/g;function _d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gd,_d);Kt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gd,_d);Kt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gd,_d);Kt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function vd(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yv(e,n,r,i)&&(n=null),i||r===null?xv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Xi=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),Cu=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),Sd=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),Pu=Symbol.for("react.suspense_list"),yd=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),l0=Symbol.for("react.offscreen"),Fh=Symbol.iterator;function oo(t){return t===null||typeof t!="object"?null:(t=Fh&&t[Fh]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,_c;function Mo(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var vc=!1;function xc(t,e){if(!t||vc)return"";vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mo(t):""}function Mv(t){switch(t.tag){case 5:return Mo(t.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function Lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case ys:return"Portal";case Cu:return"Profiler";case xd:return"StrictMode";case bu:return"Suspense";case Pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case a0:return(t.displayName||"Context")+".Consumer";case o0:return(t._context.displayName||"Context")+".Provider";case Sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yd:return e=t.displayName||null,e!==null?e:Lu(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Lu(t(e))}catch{}}return null}function Ev(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(e);case 8:return e===xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Tv(t){var e=c0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ga(t){t._valueTracker||(t._valueTracker=Tv(t))}function u0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=c0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Du(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Oh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function f0(t,e){e=e.checked,e!=null&&vd(t,"checked",e,!1)}function Iu(t,e){f0(t,e);var n=Sr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nu(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nu(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function Ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Eo(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function d0(t,e){var n=Sr(e.value),i=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function h0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?h0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _a,p0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_a=_a||document.createElement("div"),_a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wv=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(t){wv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Co[e]=Co[t]})});function m0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Co.hasOwnProperty(t)&&Co[t]?(""+e).trim():e+"px"}function g0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=m0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Av=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ou(t,e){if(e){if(Av[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bu=null;function Md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zu=null,Us=null,Fs=null;function Vh(t){if(t=aa(t)){if(typeof zu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=ec(e),zu(t.stateNode,t.type,e))}}function _0(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function v0(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,Vh(t),e)for(t=0;t<e.length;t++)Vh(e[t])}}function x0(t,e){return t(e)}function S0(){}var Sc=!1;function y0(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return x0(t,e,n)}finally{Sc=!1,(Us!==null||Fs!==null)&&(S0(),v0())}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var i=ec(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Vu=!1;if(ki)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Vu=!1}function Rv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var bo=!1,xl=null,Sl=!1,Hu=null,Cv={onError:function(t){bo=!0,xl=t}};function bv(t,e,n,i,r,s,o,a,l){bo=!1,xl=null,Rv.apply(Cv,arguments)}function Pv(t,e,n,i,r,s,o,a,l){if(bv.apply(this,arguments),bo){if(bo){var u=xl;bo=!1,xl=null}else throw Error(se(198));Sl||(Sl=!0,Hu=u)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function M0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hh(t){if(Jr(t)!==t)throw Error(se(188))}function Lv(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Hh(r),t;if(s===i)return Hh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function E0(t){return t=Lv(t),t!==null?T0(t):null}function T0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T0(t);if(e!==null)return e;t=t.sibling}return null}var w0=Dn.unstable_scheduleCallback,Gh=Dn.unstable_cancelCallback,Dv=Dn.unstable_shouldYield,Iv=Dn.unstable_requestPaint,It=Dn.unstable_now,Nv=Dn.unstable_getCurrentPriorityLevel,Ed=Dn.unstable_ImmediatePriority,A0=Dn.unstable_UserBlockingPriority,yl=Dn.unstable_NormalPriority,Uv=Dn.unstable_LowPriority,R0=Dn.unstable_IdlePriority,Kl=null,mi=null;function Fv(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:Bv,Ov=Math.log,kv=Math.LN2;function Bv(t){return t>>>=0,t===0?32:31-(Ov(t)/kv|0)|0}var va=64,xa=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=To(a):(s&=o,s!==0&&(i=To(s)))}else o=n&~r,o!==0?i=To(o):s!==0&&(i=To(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function zv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ti(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=zv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function C0(){var t=va;return va<<=1,!(va&4194240)&&(va=64),t}function yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function Hv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function b0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var P0,wd,L0,D0,I0,Wu=!1,Sa=[],dr=null,hr=null,pr=null,zo=new Map,Vo=new Map,sr=[],Gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wh(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=aa(e),e!==null&&wd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Wv(t,e,n,i,r){switch(e){case"focusin":return dr=lo(dr,t,e,n,i,r),!0;case"dragenter":return hr=lo(hr,t,e,n,i,r),!0;case"mouseover":return pr=lo(pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return zo.set(s,lo(zo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Vo.set(s,lo(Vo.get(s)||null,t,e,n,i,r)),!0}return!1}function N0(t){var e=Or(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=M0(n),e!==null){t.blockedOn=e,I0(t.priority,function(){L0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bu=i,n.target.dispatchEvent(i),Bu=null}else return e=aa(n),e!==null&&wd(e),t.blockedOn=n,!1;e.shift()}return!0}function Xh(t,e,n){nl(t)&&n.delete(e)}function Xv(){Wu=!1,dr!==null&&nl(dr)&&(dr=null),hr!==null&&nl(hr)&&(hr=null),pr!==null&&nl(pr)&&(pr=null),zo.forEach(Xh),Vo.forEach(Xh)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,Wu||(Wu=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,Xv)))}function Ho(t){function e(r){return co(r,t)}if(0<Sa.length){co(Sa[0],t);for(var n=1;n<Sa.length;n++){var i=Sa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(dr!==null&&co(dr,t),hr!==null&&co(hr,t),pr!==null&&co(pr,t),zo.forEach(e),Vo.forEach(e),n=0;n<sr.length;n++)i=sr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)N0(n),n.blockedOn===null&&sr.shift()}var Os=Xi.ReactCurrentBatchConfig,El=!0;function jv(t,e,n,i){var r=at,s=Os.transition;Os.transition=null;try{at=1,Ad(t,e,n,i)}finally{at=r,Os.transition=s}}function Yv(t,e,n,i){var r=at,s=Os.transition;Os.transition=null;try{at=4,Ad(t,e,n,i)}finally{at=r,Os.transition=s}}function Ad(t,e,n,i){if(El){var r=Xu(t,e,n,i);if(r===null)Lc(t,e,i,Tl,n),Wh(t,i);else if(Wv(r,t,e,n,i))i.stopPropagation();else if(Wh(t,i),e&4&&-1<Gv.indexOf(t)){for(;r!==null;){var s=aa(r);if(s!==null&&P0(s),s=Xu(t,e,n,i),s===null&&Lc(t,e,i,Tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lc(t,e,i,null,n)}}var Tl=null;function Xu(t,e,n,i){if(Tl=null,t=Md(i),t=Or(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=M0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function U0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nv()){case Ed:return 1;case A0:return 4;case yl:case Uv:return 16;case R0:return 536870912;default:return 16}default:return 16}}var lr=null,Rd=null,il=null;function F0(){if(il)return il;var t,e=Rd,n=e.length,i,r="value"in lr?lr.value:lr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return il=r.slice(t,1<i?1-i:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ya(){return!0}function jh(){return!1}function Nn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ya:jh,this.isPropagationStopped=jh,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cd=Nn(to),oa=Tt({},to,{view:0,detail:0}),qv=Nn(oa),Mc,Ec,uo,Zl=Tt({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Mc=t.screenX-uo.screenX,Ec=t.screenY-uo.screenY):Ec=Mc=0,uo=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),Yh=Nn(Zl),$v=Tt({},Zl,{dataTransfer:0}),Kv=Nn($v),Zv=Tt({},oa,{relatedTarget:0}),Tc=Nn(Zv),Qv=Tt({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=Nn(Qv),ex=Tt({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tx=Nn(ex),nx=Tt({},to,{data:0}),qh=Nn(nx),ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sx[t])?!!e[t]:!1}function bd(){return ox}var ax=Tt({},oa,{key:function(t){if(t.key){var e=ix[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bd,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lx=Nn(ax),cx=Tt({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=Nn(cx),ux=Tt({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bd}),fx=Nn(ux),dx=Tt({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),hx=Nn(dx),px=Tt({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mx=Nn(px),gx=[9,13,27,32],Pd=ki&&"CompositionEvent"in window,Po=null;ki&&"documentMode"in document&&(Po=document.documentMode);var _x=ki&&"TextEvent"in window&&!Po,O0=ki&&(!Pd||Po&&8<Po&&11>=Po),Kh=" ",Zh=!1;function k0(t,e){switch(t){case"keyup":return gx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function vx(t,e){switch(t){case"compositionend":return B0(e);case"keypress":return e.which!==32?null:(Zh=!0,Kh);case"textInput":return t=e.data,t===Kh&&Zh?null:t;default:return null}}function xx(t,e){if(Es)return t==="compositionend"||!Pd&&k0(t,e)?(t=F0(),il=Rd=lr=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O0&&e.locale!=="ko"?null:e.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sx[t.type]:e==="textarea"}function z0(t,e,n,i){_0(i),e=wl(e,"onChange"),0<e.length&&(n=new Cd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Lo=null,Go=null;function yx(t){Z0(t,0)}function Ql(t){var e=As(t);if(u0(e))return t}function Mx(t,e){if(t==="change")return e}var V0=!1;if(ki){var wc;if(ki){var Ac="oninput"in document;if(!Ac){var Jh=document.createElement("div");Jh.setAttribute("oninput","return;"),Ac=typeof Jh.oninput=="function"}wc=Ac}else wc=!1;V0=wc&&(!document.documentMode||9<document.documentMode)}function ep(){Lo&&(Lo.detachEvent("onpropertychange",H0),Go=Lo=null)}function H0(t){if(t.propertyName==="value"&&Ql(Go)){var e=[];z0(e,Go,t,Md(t)),y0(yx,e)}}function Ex(t,e,n){t==="focusin"?(ep(),Lo=e,Go=n,Lo.attachEvent("onpropertychange",H0)):t==="focusout"&&ep()}function Tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(Go)}function wx(t,e){if(t==="click")return Ql(e)}function Ax(t,e){if(t==="input"||t==="change")return Ql(e)}function Rx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:Rx;function Wo(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ru.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function np(t,e){var n=tp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tp(n)}}function G0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function W0(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function Ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Cx(t){var e=W0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G0(n.ownerDocument.documentElement,n)){if(i!==null&&Ld(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=np(n,s);var o=np(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bx=ki&&"documentMode"in document&&11>=document.documentMode,Ts=null,ju=null,Do=null,Yu=!1;function ip(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||Ts==null||Ts!==vl(i)||(i=Ts,"selectionStart"in i&&Ld(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Do&&Wo(Do,i)||(Do=i,i=wl(ju,"onSelect"),0<i.length&&(e=new Cd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Rc={},X0={};ki&&(X0=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Jl(t){if(Rc[t])return Rc[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in X0)return Rc[t]=e[n];return t}var j0=Jl("animationend"),Y0=Jl("animationiteration"),q0=Jl("animationstart"),$0=Jl("transitionend"),K0=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){K0.set(t,e),Qr(e,[t])}for(var Cc=0;Cc<rp.length;Cc++){var bc=rp[Cc],Px=bc.toLowerCase(),Lx=bc[0].toUpperCase()+bc.slice(1);Er(Px,"on"+Lx)}Er(j0,"onAnimationEnd");Er(Y0,"onAnimationIteration");Er(q0,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er($0,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function sp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Pv(i,e,void 0,t),t.currentTarget=null}function Z0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;sp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;sp(r,a,u),s=l}}}if(Sl)throw t=Hu,Sl=!1,Hu=null,t}function xt(t,e){var n=e[Qu];n===void 0&&(n=e[Qu]=new Set);var i=t+"__bubble";n.has(i)||(Q0(e,t,2,!1),n.add(i))}function Pc(t,e,n){var i=0;e&&(i|=4),Q0(n,t,i,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Xo(t){if(!t[Ea]){t[Ea]=!0,s0.forEach(function(n){n!=="selectionchange"&&(Dx.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,Pc("selectionchange",!1,e))}}function Q0(t,e,n,i){switch(U0(e)){case 1:var r=jv;break;case 4:r=Yv;break;default:r=Ad}n=r.bind(null,e,n,t),r=void 0,!Vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Lc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}y0(function(){var u=s,h=Md(n),p=[];e:{var c=K0.get(t);if(c!==void 0){var d=Cd,v=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":d=lx;break;case"focusin":v="focus",d=Tc;break;case"focusout":v="blur",d=Tc;break;case"beforeblur":case"afterblur":d=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=fx;break;case j0:case Y0:case q0:d=Jv;break;case $0:d=hx;break;case"scroll":d=qv;break;case"wheel":d=mx;break;case"copy":case"cut":case"paste":d=tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=$h}var y=(e&4)!==0,g=!y&&t==="scroll",f=y?c!==null?c+"Capture":null:c;y=[];for(var m=u,x;m!==null;){x=m;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,f!==null&&(M=Bo(m,f),M!=null&&y.push(jo(m,M,x)))),g)break;m=m.return}0<y.length&&(c=new d(c,v,null,n,h),p.push({event:c,listeners:y}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",c&&n!==Bu&&(v=n.relatedTarget||n.fromElement)&&(Or(v)||v[Bi]))break e;if((d||c)&&(c=h.window===h?h:(c=h.ownerDocument)?c.defaultView||c.parentWindow:window,d?(v=n.relatedTarget||n.toElement,d=u,v=v?Or(v):null,v!==null&&(g=Jr(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(d=null,v=u),d!==v)){if(y=Yh,M="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=$h,M="onPointerLeave",f="onPointerEnter",m="pointer"),g=d==null?c:As(d),x=v==null?c:As(v),c=new y(M,m+"leave",d,n,h),c.target=g,c.relatedTarget=x,M=null,Or(h)===u&&(y=new y(f,m+"enter",v,n,h),y.target=x,y.relatedTarget=g,M=y),g=M,d&&v)t:{for(y=d,f=v,m=0,x=y;x;x=is(x))m++;for(x=0,M=f;M;M=is(M))x++;for(;0<m-x;)y=is(y),m--;for(;0<x-m;)f=is(f),x--;for(;m--;){if(y===f||f!==null&&y===f.alternate)break t;y=is(y),f=is(f)}y=null}else y=null;d!==null&&op(p,c,d,y,!1),v!==null&&g!==null&&op(p,g,v,y,!0)}}e:{if(c=u?As(u):window,d=c.nodeName&&c.nodeName.toLowerCase(),d==="select"||d==="input"&&c.type==="file")var R=Mx;else if(Qh(c))if(V0)R=Ax;else{R=Tx;var T=Ex}else(d=c.nodeName)&&d.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(R=wx);if(R&&(R=R(t,u))){z0(p,R,n,h);break e}T&&T(t,c,u),t==="focusout"&&(T=c._wrapperState)&&T.controlled&&c.type==="number"&&Nu(c,"number",c.value)}switch(T=u?As(u):window,t){case"focusin":(Qh(T)||T.contentEditable==="true")&&(Ts=T,ju=u,Do=null);break;case"focusout":Do=ju=Ts=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,ip(p,n,h);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":ip(p,n,h)}var b;if(Pd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Es?k0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(O0&&n.locale!=="ko"&&(Es||_!=="onCompositionStart"?_==="onCompositionEnd"&&Es&&(b=F0()):(lr=h,Rd="value"in lr?lr.value:lr.textContent,Es=!0)),T=wl(u,_),0<T.length&&(_=new qh(_,t,null,n,h),p.push({event:_,listeners:T}),b?_.data=b:(b=B0(n),b!==null&&(_.data=b)))),(b=_x?vx(t,n):xx(t,n))&&(u=wl(u,"onBeforeInput"),0<u.length&&(h=new qh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=b))}Z0(p,e)})}function jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Bo(t,n),s!=null&&i.unshift(jo(t,s,r)),s=Bo(t,e),s!=null&&i.push(jo(t,s,r))),t=t.return}return i}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function op(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Bo(n,s),l!=null&&o.unshift(jo(n,l,a))):r||(l=Bo(n,s),l!=null&&o.push(jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ix=/\r\n?/g,Nx=/\u0000|\uFFFD/g;function ap(t){return(typeof t=="string"?t:""+t).replace(Ix,`
`).replace(Nx,"")}function Ta(t,e,n){if(e=ap(e),ap(t)!==e&&n)throw Error(se(425))}function Al(){}var qu=null,$u=null;function Ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zu=typeof setTimeout=="function"?setTimeout:void 0,Ux=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(t){return lp.resolve(null).then(t).catch(Ox)}:Zu;function Ox(t){setTimeout(function(){throw t})}function Dc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ho(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),di="__reactFiber$"+no,Yo="__reactProps$"+no,Bi="__reactContainer$"+no,Qu="__reactEvents$"+no,kx="__reactListeners$"+no,Bx="__reactHandles$"+no;function Or(t){var e=t[di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bi]||n[di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cp(t);t!==null;){if(n=t[di])return n;t=cp(t)}return e}t=n,n=t.parentNode}return null}function aa(t){return t=t[di]||t[Bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function ec(t){return t[Yo]||null}var Ju=[],Rs=-1;function Tr(t){return{current:t}}function St(t){0>Rs||(t.current=Ju[Rs],Ju[Rs]=null,Rs--)}function vt(t,e){Rs++,Ju[Rs]=t.current,t.current=e}var yr={},on=Tr(yr),Sn=Tr(!1),Xr=yr;function Gs(t,e){var n=t.type.contextTypes;if(!n)return yr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function Rl(){St(Sn),St(on)}function up(t,e,n){if(on.current!==yr)throw Error(se(168));vt(on,e),vt(Sn,n)}function J0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Ev(t)||"Unknown",r));return Tt({},n,i)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Xr=on.current,vt(on,t),vt(Sn,Sn.current),!0}function fp(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=J0(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,St(Sn),St(on),vt(on,t)):St(Sn),vt(Sn,n)}var Pi=null,tc=!1,Ic=!1;function eg(t){Pi===null?Pi=[t]:Pi.push(t)}function zx(t){tc=!0,eg(t)}function wr(){if(!Ic&&Pi!==null){Ic=!0;var t=0,e=at;try{var n=Pi;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Pi=null,tc=!1}catch(r){throw Pi!==null&&(Pi=Pi.slice(t+1)),w0(Ed,wr),r}finally{at=e,Ic=!1}}return null}var Cs=[],bs=0,bl=null,Pl=0,zn=[],Vn=0,jr=null,Di=1,Ii="";function Lr(t,e){Cs[bs++]=Pl,Cs[bs++]=bl,bl=t,Pl=e}function tg(t,e,n){zn[Vn++]=Di,zn[Vn++]=Ii,zn[Vn++]=jr,jr=t;var i=Di;t=Ii;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var s=32-ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Di=1<<32-ti(e)+r|n<<r|i,Ii=s+t}else Di=1<<s|n<<r|i,Ii=t}function Dd(t){t.return!==null&&(Lr(t,1),tg(t,1,0))}function Id(t){for(;t===bl;)bl=Cs[--bs],Cs[bs]=null,Pl=Cs[--bs],Cs[bs]=null;for(;t===jr;)jr=zn[--Vn],zn[Vn]=null,Ii=zn[--Vn],zn[Vn]=null,Di=zn[--Vn],zn[Vn]=null}var Ln=null,Pn=null,yt=!1,Qn=null;function ng(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:Di,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ln=t,Pn=null,!0):!1;default:return!1}}function ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tf(t){if(yt){var e=Pn;if(e){var n=e;if(!dp(t,e)){if(ef(t))throw Error(se(418));e=mr(n.nextSibling);var i=Ln;e&&dp(t,e)?ng(i,n):(t.flags=t.flags&-4097|2,yt=!1,Ln=t)}}else{if(ef(t))throw Error(se(418));t.flags=t.flags&-4097|2,yt=!1,Ln=t}}}function hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function wa(t){if(t!==Ln)return!1;if(!yt)return hp(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ku(t.type,t.memoizedProps)),e&&(e=Pn)){if(ef(t))throw ig(),Error(se(418));for(;e;)ng(t,e),e=mr(e.nextSibling)}if(hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=Ln?mr(t.stateNode.nextSibling):null;return!0}function ig(){for(var t=Pn;t;)t=mr(t.nextSibling)}function Ws(){Pn=Ln=null,yt=!1}function Nd(t){Qn===null?Qn=[t]:Qn.push(t)}var Vx=Xi.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Aa(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pp(t){var e=t._init;return e(t._payload)}function rg(t){function e(f,m){if(t){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=xr(f,m),f.index=0,f.sibling=null,f}function s(f,m,x){return f.index=x,t?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=2,m):x):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,m,x,M){return m===null||m.tag!==6?(m=zc(x,f.mode,M),m.return=f,m):(m=r(m,x),m.return=f,m)}function l(f,m,x,M){var R=x.type;return R===Ms?h(f,m,x.props.children,M,x.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ir&&pp(R)===m.type)?(M=r(m,x.props),M.ref=fo(f,m,x),M.return=f,M):(M=fl(x.type,x.key,x.props,null,f.mode,M),M.ref=fo(f,m,x),M.return=f,M)}function u(f,m,x,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Vc(x,f.mode,M),m.return=f,m):(m=r(m,x.children||[]),m.return=f,m)}function h(f,m,x,M,R){return m===null||m.tag!==7?(m=Gr(x,f.mode,M,R),m.return=f,m):(m=r(m,x),m.return=f,m)}function p(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=zc(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ma:return x=fl(m.type,m.key,m.props,null,f.mode,x),x.ref=fo(f,null,m),x.return=f,x;case ys:return m=Vc(m,f.mode,x),m.return=f,m;case ir:var M=m._init;return p(f,M(m._payload),x)}if(Eo(m)||oo(m))return m=Gr(m,f.mode,x,null),m.return=f,m;Aa(f,m)}return null}function c(f,m,x,M){var R=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(f,m,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ma:return x.key===R?l(f,m,x,M):null;case ys:return x.key===R?u(f,m,x,M):null;case ir:return R=x._init,c(f,m,R(x._payload),M)}if(Eo(x)||oo(x))return R!==null?null:h(f,m,x,M,null);Aa(f,x)}return null}function d(f,m,x,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(x)||null,a(m,f,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ma:return f=f.get(M.key===null?x:M.key)||null,l(m,f,M,R);case ys:return f=f.get(M.key===null?x:M.key)||null,u(m,f,M,R);case ir:var T=M._init;return d(f,m,x,T(M._payload),R)}if(Eo(M)||oo(M))return f=f.get(x)||null,h(m,f,M,R,null);Aa(m,M)}return null}function v(f,m,x,M){for(var R=null,T=null,b=m,_=m=0,A=null;b!==null&&_<x.length;_++){b.index>_?(A=b,b=null):A=b.sibling;var P=c(f,b,x[_],M);if(P===null){b===null&&(b=A);break}t&&b&&P.alternate===null&&e(f,b),m=s(P,m,_),T===null?R=P:T.sibling=P,T=P,b=A}if(_===x.length)return n(f,b),yt&&Lr(f,_),R;if(b===null){for(;_<x.length;_++)b=p(f,x[_],M),b!==null&&(m=s(b,m,_),T===null?R=b:T.sibling=b,T=b);return yt&&Lr(f,_),R}for(b=i(f,b);_<x.length;_++)A=d(b,f,_,x[_],M),A!==null&&(t&&A.alternate!==null&&b.delete(A.key===null?_:A.key),m=s(A,m,_),T===null?R=A:T.sibling=A,T=A);return t&&b.forEach(function(L){return e(f,L)}),yt&&Lr(f,_),R}function y(f,m,x,M){var R=oo(x);if(typeof R!="function")throw Error(se(150));if(x=R.call(x),x==null)throw Error(se(151));for(var T=R=null,b=m,_=m=0,A=null,P=x.next();b!==null&&!P.done;_++,P=x.next()){b.index>_?(A=b,b=null):A=b.sibling;var L=c(f,b,P.value,M);if(L===null){b===null&&(b=A);break}t&&b&&L.alternate===null&&e(f,b),m=s(L,m,_),T===null?R=L:T.sibling=L,T=L,b=A}if(P.done)return n(f,b),yt&&Lr(f,_),R;if(b===null){for(;!P.done;_++,P=x.next())P=p(f,P.value,M),P!==null&&(m=s(P,m,_),T===null?R=P:T.sibling=P,T=P);return yt&&Lr(f,_),R}for(b=i(f,b);!P.done;_++,P=x.next())P=d(b,f,_,P.value,M),P!==null&&(t&&P.alternate!==null&&b.delete(P.key===null?_:P.key),m=s(P,m,_),T===null?R=P:T.sibling=P,T=P);return t&&b.forEach(function(F){return e(f,F)}),yt&&Lr(f,_),R}function g(f,m,x,M){if(typeof x=="object"&&x!==null&&x.type===Ms&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ma:e:{for(var R=x.key,T=m;T!==null;){if(T.key===R){if(R=x.type,R===Ms){if(T.tag===7){n(f,T.sibling),m=r(T,x.props.children),m.return=f,f=m;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ir&&pp(R)===T.type){n(f,T.sibling),m=r(T,x.props),m.ref=fo(f,T,x),m.return=f,f=m;break e}n(f,T);break}else e(f,T);T=T.sibling}x.type===Ms?(m=Gr(x.props.children,f.mode,M,x.key),m.return=f,f=m):(M=fl(x.type,x.key,x.props,null,f.mode,M),M.ref=fo(f,m,x),M.return=f,f=M)}return o(f);case ys:e:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(f,m.sibling),m=r(m,x.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=Vc(x,f.mode,M),m.return=f,f=m}return o(f);case ir:return T=x._init,g(f,m,T(x._payload),M)}if(Eo(x))return v(f,m,x,M);if(oo(x))return y(f,m,x,M);Aa(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,x),m.return=f,f=m):(n(f,m),m=zc(x,f.mode,M),m.return=f,f=m),o(f)):n(f,m)}return g}var Xs=rg(!0),sg=rg(!1),Ll=Tr(null),Dl=null,Ps=null,Ud=null;function Fd(){Ud=Ps=Dl=null}function Od(t){var e=Ll.current;St(Ll),t._currentValue=e}function nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){Dl=t,Ud=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Ud!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(Dl===null)throw Error(se(308));Ps=t,Dl.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var kr=null;function kd(t){kr===null?kr=[t]:kr.push(t)}function og(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kd(e)):(n.next=r.next,r.next=n),e.interleaved=n,zi(t,i)}function zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function Bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ag(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(t,n)}return r=i.interleaved,r===null?(e.next=e,kd(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Td(t,n)}}function mp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,i){var r=t.updateQueue;rr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,h=u=l=null,a=s;do{var c=a.lane,d=a.eventTime;if((i&c)===c){h!==null&&(h=h.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(c=e,d=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){p=v.call(d,p,c);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,c=typeof v=="function"?v.call(d,p,c):v,c==null)break e;p=Tt({},p,c);break e;case 2:rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,c=r.effects,c===null?r.effects=[a]:c.push(a))}else d={eventTime:d,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=d,l=p):h=h.next=d,o|=c;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;c=a,a=c.next,c.next=null,r.lastBaseUpdate=c,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=p}}function gp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var la={},gi=Tr(la),qo=Tr(la),$o=Tr(la);function Br(t){if(t===la)throw Error(se(174));return t}function zd(t,e){switch(vt($o,e),vt(qo,t),vt(gi,la),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fu(e,t)}St(gi),vt(gi,e)}function js(){St(gi),St(qo),St($o)}function lg(t){Br($o.current);var e=Br(gi.current),n=Fu(e,t.type);e!==n&&(vt(qo,t),vt(gi,n))}function Vd(t){qo.current===t&&(St(gi),St(qo))}var Mt=Tr(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nc=[];function Hd(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var ol=Xi.ReactCurrentDispatcher,Uc=Xi.ReactCurrentBatchConfig,Yr=0,Et=null,kt=null,Gt=null,Ul=!1,Io=!1,Ko=0,Hx=0;function Jt(){throw Error(se(321))}function Gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function Wd(t,e,n,i,r,s){if(Yr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?jx:Yx,t=n(i,r),Io){s=0;do{if(Io=!1,Ko=0,25<=s)throw Error(se(301));s+=1,Gt=kt=null,e.updateQueue=null,ol.current=qx,t=n(i,r)}while(Io)}if(ol.current=Fl,e=kt!==null&&kt.next!==null,Yr=0,Gt=kt=Et=null,Ul=!1,e)throw Error(se(300));return t}function Xd(){var t=Ko!==0;return Ko=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Et.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Xn(){if(kt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Gt===null?Et.memoizedState:Gt.next;if(e!==null)Gt=e,kt=t;else{if(t===null)throw Error(se(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Gt===null?Et.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Zo(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Yr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,Et.lanes|=h,qr|=h}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ri(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ri(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function cg(){}function ug(t,e){var n=Et,i=Xn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,jd(hg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Qo(9,dg.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(se(349));Yr&30||fg(n,e,r)}return r}function fg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dg(t,e,n,i){e.value=n,e.getSnapshot=i,pg(e)&&mg(t)}function hg(t,e,n){return n(function(){pg(e)&&mg(t)})}function pg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function mg(t){var e=zi(t,1);e!==null&&ni(e,t,1,-1)}function _p(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},e.queue=t,t=t.dispatch=Xx.bind(null,Et,t),[e.memoizedState,t]}function Qo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function gg(){return Xn().memoizedState}function al(t,e,n,i){var r=ui();Et.flags|=t,r.memoizedState=Qo(1|e,n,void 0,i===void 0?null:i)}function nc(t,e,n,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&Gd(i,o.deps)){r.memoizedState=Qo(e,n,s,i);return}}Et.flags|=t,r.memoizedState=Qo(1|e,n,s,i)}function vp(t,e){return al(8390656,8,t,e)}function jd(t,e){return nc(2048,8,t,e)}function _g(t,e){return nc(4,2,t,e)}function vg(t,e){return nc(4,4,t,e)}function xg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sg(t,e,n){return n=n!=null?n.concat([t]):null,nc(4,4,xg.bind(null,e,t),n)}function Yd(){}function yg(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Mg(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Eg(t,e,n){return Yr&21?(ri(n,e)||(n=C0(),Et.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function Gx(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=Uc.transition;Uc.transition={};try{t(!1),e()}finally{at=n,Uc.transition=i}}function Tg(){return Xn().memoizedState}function Wx(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},wg(t))Ag(e,n);else if(n=og(t,e,n,i),n!==null){var r=fn();ni(n,t,i,r),Rg(n,e,i)}}function Xx(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(wg(t))Ag(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ri(a,o)){var l=e.interleaved;l===null?(r.next=r,kd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=og(t,e,r,i),n!==null&&(r=fn(),ni(n,t,i,r),Rg(n,e,i))}}function wg(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Ag(t,e){Io=Ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Td(t,n)}}var Fl={readContext:Wn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},jx={readContext:Wn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:vp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,xg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Wx.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:_p,useDebugValue:Yd,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=_p(!1),e=t[0];return t=Gx.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=ui();if(yt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Wt===null)throw Error(se(349));Yr&30||fg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,vp(hg.bind(null,i,s,t),[t]),i.flags|=2048,Qo(9,dg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ui(),e=Wt.identifierPrefix;if(yt){var n=Ii,i=Di;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Hx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Yx={readContext:Wn,useCallback:yg,useContext:Wn,useEffect:jd,useImperativeHandle:Sg,useInsertionEffect:_g,useLayoutEffect:vg,useMemo:Mg,useReducer:Fc,useRef:gg,useState:function(){return Fc(Zo)},useDebugValue:Yd,useDeferredValue:function(t){var e=Xn();return Eg(e,kt.memoizedState,t)},useTransition:function(){var t=Fc(Zo)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:cg,useSyncExternalStore:ug,useId:Tg,unstable_isNewReconciler:!1},qx={readContext:Wn,useCallback:yg,useContext:Wn,useEffect:jd,useImperativeHandle:Sg,useInsertionEffect:_g,useLayoutEffect:vg,useMemo:Mg,useReducer:Oc,useRef:gg,useState:function(){return Oc(Zo)},useDebugValue:Yd,useDeferredValue:function(t){var e=Xn();return kt===null?e.memoizedState=t:Eg(e,kt.memoizedState,t)},useTransition:function(){var t=Oc(Zo)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:cg,useSyncExternalStore:ug,useId:Tg,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ic={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=vr(t),s=Ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(ni(e,t,r,i),sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=vr(t),s=Ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(ni(e,t,r,i),sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=vr(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=gr(t,r,i),e!==null&&(ni(e,t,i,n),sl(e,t,i))}};function xp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,i)||!Wo(r,s):!0}function Cg(t,e,n){var i=!1,r=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=yn(e)?Xr:on.current,i=e.contextTypes,s=(i=i!=null)?Gs(t,r):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ic,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ic.enqueueReplaceState(e,e.state,null)}function sf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Bd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=yn(e)?Xr:on.current,r.context=Gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ic.enqueueReplaceState(r,r.state,null),Il(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=Mv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $x=typeof WeakMap=="function"?WeakMap:Map;function bg(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kl||(kl=!0,gf=i),of(t,e)},n}function Pg(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){of(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){of(t,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $x;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=cS.bind(null,t,e,n),e.then(t,t))}function Mp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ep(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var Kx=Xi.ReactCurrentOwner,vn=!1;function un(t,e,n,i){e.child=t===null?sg(e,null,n,i):Xs(e,t.child,n,i)}function Tp(t,e,n,i,r){n=n.render;var s=e.ref;return ks(e,r),i=Wd(t,e,n,i,s,r),n=Xd(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(yt&&n&&Dd(e),e.flags|=1,un(t,e,i,r),e.child)}function wp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!th(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Lg(t,e,s,i,r)):(t=fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,i)&&t.ref===e.ref)return Vi(t,e,r)}return e.flags|=1,t=xr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Lg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wo(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Vi(t,e,r)}return af(t,e,n,i,r)}function Dg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Ds,Rn),Rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Ds,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(Ds,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(Ds,Rn),Rn|=i;return un(t,e,r,n),e.child}function Ig(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function af(t,e,n,i,r){var s=yn(n)?Xr:on.current;return s=Gs(e,s),ks(e,r),n=Wd(t,e,n,i,s,r),i=Xd(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(yt&&i&&Dd(e),e.flags|=1,un(t,e,n,r),e.child)}function Ap(t,e,n,i,r){if(yn(n)){var s=!0;Cl(e)}else s=!1;if(ks(e,r),e.stateNode===null)ll(t,e),Cg(e,n,i),sf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wn(u):(u=yn(n)?Xr:on.current,u=Gs(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Sp(e,o,i,u),rr=!1;var c=e.memoizedState;o.state=c,Il(e,i,o,r),l=e.memoizedState,a!==i||c!==l||Sn.current||rr?(typeof h=="function"&&(rf(e,n,h,i),l=e.memoizedState),(a=rr||xp(e,n,a,i,c,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ag(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Kn(e.type,a),o.props=u,p=e.pendingProps,c=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=yn(n)?Xr:on.current,l=Gs(e,l));var d=n.getDerivedStateFromProps;(h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||c!==l)&&Sp(e,o,i,l),rr=!1,c=e.memoizedState,o.state=c,Il(e,i,o,r);var v=e.memoizedState;a!==p||c!==v||Sn.current||rr?(typeof d=="function"&&(rf(e,n,d,i),v=e.memoizedState),(u=rr||xp(e,n,u,i,c,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),i=!1)}return lf(t,e,n,i,s,r)}function lf(t,e,n,i,r,s){Ig(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&fp(e,n,!1),Vi(t,e,s);i=e.stateNode,Kx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,a,s)):un(t,e,a,s),e.memoizedState=i.state,r&&fp(e,n,!0),e.child}function Ng(t){var e=t.stateNode;e.pendingContext?up(t,e.pendingContext,e.pendingContext!==e.context):e.context&&up(t,e.context,!1),zd(t,e.containerInfo)}function Rp(t,e,n,i,r){return Ws(),Nd(r),e.flags|=256,un(t,e,n,i),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ug(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(Mt,r&1),t===null)return tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=oc(o,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uf(n),e.memoizedState=cf,t):qd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Zx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=xr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cf,i}return s=t.child,t=s.sibling,i=xr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function qd(t,e){return e=oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ra(t,e,n,i){return i!==null&&Nd(i),Xs(e,t.child,null,n),t=qd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=kc(Error(se(422))),Ra(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=oc({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=uf(o),e.memoizedState=cf,s);if(!(e.mode&1))return Ra(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=kc(s,i,void 0),Ra(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(t,r),ni(i,t,r,-1))}return eh(),i=kc(Error(se(421))),Ra(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=uS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=mr(r.nextSibling),Ln=e,yt=!0,Qn=null,t!==null&&(zn[Vn++]=Di,zn[Vn++]=Ii,zn[Vn++]=jr,Di=t.id,Ii=t.overflow,jr=e),e=qd(e,i.children),e.flags|=4096,e)}function Cp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nf(t.return,e,n)}function Bc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Fg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cp(t,n,e);else if(t.tag===19)Cp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Nl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bc(e,!0,n,null,s);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Qx(t,e,n){switch(e.tag){case 3:Ng(e),Ws();break;case 5:lg(e);break;case 1:yn(e.type)&&Cl(e);break;case 4:zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(Ll,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?Ug(t,e,n):(vt(Mt,Mt.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);vt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Fg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Dg(t,e,n)}return Vi(t,e,n)}var Og,ff,kg,Bg;Og=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ff=function(){};kg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(gi.current);var s=null;switch(n){case"input":r=Du(t,r),i=Du(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Uu(t,r),i=Uu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Al)}Ou(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&xt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Bg=function(t,e,n,i){n!==i&&(e.flags|=4)};function ho(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Jx(t,e,n){var i=e.pendingProps;switch(Id(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return yn(e.type)&&Rl(),en(e),null;case 3:return i=e.stateNode,js(),St(Sn),St(on),Hd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(xf(Qn),Qn=null))),ff(t,e),en(e),null;case 5:Vd(e);var r=Br($o.current);if(n=e.type,t!==null&&e.stateNode!=null)kg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return en(e),null}if(t=Br(gi.current),wa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[di]=e,i[Yo]=s,t=(e.mode&1)!==0,n){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)xt(wo[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":Oh(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":Bh(i,s),xt("invalid",i)}Ou(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",""+a]):Oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xt("scroll",i)}switch(n){case"input":ga(i),kh(i,s,!0);break;case"textarea":ga(i),zh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=h0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[di]=e,t[Yo]=i,Og(t,e,!1,!1),e.stateNode=t;e:{switch(o=ku(n,i),n){case"dialog":xt("cancel",t),xt("close",t),r=i;break;case"iframe":case"object":case"embed":xt("load",t),r=i;break;case"video":case"audio":for(r=0;r<wo.length;r++)xt(wo[r],t);r=i;break;case"source":xt("error",t),r=i;break;case"img":case"image":case"link":xt("error",t),xt("load",t),r=i;break;case"details":xt("toggle",t),r=i;break;case"input":Oh(t,i),r=Du(t,i),xt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),xt("invalid",t);break;case"textarea":Bh(t,i),r=Uu(t,i),xt("invalid",t);break;default:r=i}Ou(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?g0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&p0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ko(t,l):typeof l=="number"&&ko(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xt("scroll",t):l!=null&&vd(t,s,l,o))}switch(n){case"input":ga(t),kh(t,i,!1);break;case"textarea":ga(t),zh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Sr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)Bg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Br($o.current),Br(gi.current),wa(e)){if(i=e.stateNode,n=e.memoizedProps,i[di]=e,(s=i.nodeValue!==n)&&(t=Ln,t!==null))switch(t.tag){case 3:Ta(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return en(e),null;case 13:if(St(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Pn!==null&&e.mode&1&&!(e.flags&128))ig(),Ws(),e.flags|=98560,s=!1;else if(s=wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[di]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else Qn!==null&&(xf(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Bt===0&&(Bt=3):eh())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return js(),ff(t,e),t===null&&Xo(e.stateNode.containerInfo),en(e),null;case 10:return Od(e.type._context),en(e),null;case 17:return yn(e.type)&&Rl(),en(e),null;case 19:if(St(Mt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ho(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nl(t),o!==null){for(e.flags|=128,ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>qs&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=Nl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return en(e),null}else 2*It()-s.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=Mt.current,vt(Mt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Jd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function eS(t,e){switch(Id(e),e.tag){case 1:return yn(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),St(Sn),St(on),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vd(e),null;case 13:if(St(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(Mt),null;case 4:return js(),null;case 10:return Od(e.type._context),null;case 22:case 23:return Jd(),null;case 24:return null;default:return null}}var Ca=!1,rn=!1,tS=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function df(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var bp=!1;function nS(t,e){if(qu=El,t=W0(),Ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,p=t,c=null;t:for(;;){for(var d;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(d=p.firstChild)!==null;)c=p,p=d;for(;;){if(p===t)break t;if(c===n&&++u===r&&(a=o),c===s&&++h===i&&(l=o),(d=p.nextSibling)!==null)break;p=c,c=p.parentNode}p=d}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:t,selectionRange:n},El=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,g=v.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Kn(e.type,y),g);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(M){Ct(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return v=bp,bp=!1,v}function No(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&df(e,n,s)}r=r.next}while(r!==i)}}function rc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zg(t){var e=t.alternate;e!==null&&(t.alternate=null,zg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[di],delete e[Yo],delete e[Qu],delete e[kx],delete e[Bx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vg(t){return t.tag===5||t.tag===3||t.tag===4}function Pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(i!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}function mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}var jt=null,Zn=!1;function $i(t,e,n){for(n=n.child;n!==null;)Hg(t,e,n),n=n.sibling}function Hg(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:rn||Ls(n,e);case 6:var i=jt,r=Zn;jt=null,$i(t,e,n),jt=i,Zn=r,jt!==null&&(Zn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Zn?(t=jt,n=n.stateNode,t.nodeType===8?Dc(t.parentNode,n):t.nodeType===1&&Dc(t,n),Ho(t)):Dc(jt,n.stateNode));break;case 4:i=jt,r=Zn,jt=n.stateNode.containerInfo,Zn=!0,$i(t,e,n),jt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&df(n,e,o),r=r.next}while(r!==i)}$i(t,e,n);break;case 1:if(!rn&&(Ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ct(n,e,a)}$i(t,e,n);break;case 21:$i(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,$i(t,e,n),rn=i):$i(t,e,n);break;default:$i(t,e,n)}}function Lp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tS),e.forEach(function(i){var r=fS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,Zn=!1;break e;case 3:jt=a.stateNode.containerInfo,Zn=!0;break e;case 4:jt=a.stateNode.containerInfo,Zn=!0;break e}a=a.return}if(jt===null)throw Error(se(160));Hg(s,o,r),jt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ct(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gg(e,t),e=e.sibling}function Gg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),ai(t),i&4){try{No(3,t,t.return),rc(3,t)}catch(y){Ct(t,t.return,y)}try{No(5,t,t.return)}catch(y){Ct(t,t.return,y)}}break;case 1:jn(e,t),ai(t),i&512&&n!==null&&Ls(n,n.return);break;case 5:if(jn(e,t),ai(t),i&512&&n!==null&&Ls(n,n.return),t.flags&32){var r=t.stateNode;try{ko(r,"")}catch(y){Ct(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&f0(r,s),ku(a,o);var u=ku(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?g0(r,p):h==="dangerouslySetInnerHTML"?p0(r,p):h==="children"?ko(r,p):vd(r,h,p,u)}switch(a){case"input":Iu(r,s);break;case"textarea":d0(r,s);break;case"select":var c=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?Ns(r,!!s.multiple,d,!1):c!==!!s.multiple&&(s.defaultValue!=null?Ns(r,!!s.multiple,s.defaultValue,!0):Ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[Yo]=s}catch(y){Ct(t,t.return,y)}}break;case 6:if(jn(e,t),ai(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Ct(t,t.return,y)}}break;case 3:if(jn(e,t),ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(y){Ct(t,t.return,y)}break;case 4:jn(e,t),ai(t);break;case 13:jn(e,t),ai(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zd=It())),i&4&&Lp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(u=rn)||h,jn(e,t),rn=u):jn(e,t),ai(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Ee=t,h=t.child;h!==null;){for(p=Ee=h;Ee!==null;){switch(c=Ee,d=c.child,c.tag){case 0:case 11:case 14:case 15:No(4,c,c.return);break;case 1:Ls(c,c.return);var v=c.stateNode;if(typeof v.componentWillUnmount=="function"){i=c,n=c.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Ct(i,n,y)}}break;case 5:Ls(c,c.return);break;case 22:if(c.memoizedState!==null){Ip(p);continue}}d!==null?(d.return=c,Ee=d):Ip(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=m0("display",o))}catch(y){Ct(t,t.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){Ct(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:jn(e,t),ai(t),i&4&&Lp(t);break;case 21:break;default:jn(e,t),ai(t)}}function ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vg(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ko(r,""),i.flags&=-33);var s=Pp(t);mf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Pp(t);pf(t,a,o);break;default:throw Error(se(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iS(t,e,n){Ee=t,Wg(t)}function Wg(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ca;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=Ca;var u=rn;if(Ca=o,(rn=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?Np(r):l!==null?(l.return=o,Ee=l):Np(r);for(;s!==null;)Ee=s,Wg(s),s=s.sibling;Ee=r,Ca=a,rn=u}Dp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Dp(t)}}function Dp(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||rc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ho(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}rn||e.flags&512&&hf(e)}catch(c){Ct(e,e.return,c)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Ip(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Np(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rc(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{hf(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{hf(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var rS=Math.ceil,Ol=Xi.ReactCurrentDispatcher,$d=Xi.ReactCurrentOwner,Gn=Xi.ReactCurrentBatchConfig,tt=0,Wt=null,Ot=null,qt=0,Rn=0,Ds=Tr(0),Bt=0,Jo=null,qr=0,sc=0,Kd=0,Uo=null,gn=null,Zd=0,qs=1/0,Ri=null,kl=!1,gf=null,_r=null,ba=!1,cr=null,Bl=0,Fo=0,_f=null,cl=-1,ul=0;function fn(){return tt&6?It():cl!==-1?cl:cl=It()}function vr(t){return t.mode&1?tt&2&&qt!==0?qt&-qt:Vx.transition!==null?(ul===0&&(ul=C0()),ul):(t=at,t!==0||(t=window.event,t=t===void 0?16:U0(t.type)),t):1}function ni(t,e,n,i){if(50<Fo)throw Fo=0,_f=null,Error(se(185));sa(t,n,i),(!(tt&2)||t!==Wt)&&(t===Wt&&(!(tt&2)&&(sc|=n),Bt===4&&or(t,qt)),Mn(t,i),n===1&&tt===0&&!(e.mode&1)&&(qs=It()+500,tc&&wr()))}function Mn(t,e){var n=t.callbackNode;Vv(t,e);var i=Ml(t,t===Wt?qt:0);if(i===0)n!==null&&Gh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Gh(n),e===1)t.tag===0?zx(Up.bind(null,t)):eg(Up.bind(null,t)),Fx(function(){!(tt&6)&&wr()}),n=null;else{switch(b0(i)){case 1:n=Ed;break;case 4:n=A0;break;case 16:n=yl;break;case 536870912:n=R0;break;default:n=yl}n=Qg(n,Xg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Xg(t,e){if(cl=-1,ul=0,tt&6)throw Error(se(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var i=Ml(t,t===Wt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zl(t,i);else{e=i;var r=tt;tt|=2;var s=Yg();(Wt!==t||qt!==e)&&(Ri=null,qs=It()+500,Hr(t,e));do try{aS();break}catch(a){jg(t,a)}while(!0);Fd(),Ol.current=s,tt=r,Ot!==null?e=0:(Wt=null,qt=0,e=Bt)}if(e!==0){if(e===2&&(r=Gu(t),r!==0&&(i=r,e=vf(t,r))),e===1)throw n=Jo,Hr(t,0),or(t,i),Mn(t,It()),n;if(e===6)or(t,i);else{if(r=t.current.alternate,!(i&30)&&!sS(r)&&(e=zl(t,i),e===2&&(s=Gu(t),s!==0&&(i=s,e=vf(t,s))),e===1))throw n=Jo,Hr(t,0),or(t,i),Mn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Dr(t,gn,Ri);break;case 3:if(or(t,i),(i&130023424)===i&&(e=Zd+500-It(),10<e)){if(Ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zu(Dr.bind(null,t,gn,Ri),e);break}Dr(t,gn,Ri);break;case 4:if(or(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rS(i/1960))-i,10<i){t.timeoutHandle=Zu(Dr.bind(null,t,gn,Ri),i);break}Dr(t,gn,Ri);break;case 5:Dr(t,gn,Ri);break;default:throw Error(se(329))}}}return Mn(t,It()),t.callbackNode===n?Xg.bind(null,t):null}function vf(t,e){var n=Uo;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=zl(t,e),t!==2&&(e=gn,gn=n,e!==null&&xf(e)),t}function xf(t){gn===null?gn=t:gn.push.apply(gn,t)}function sS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Kd,e&=~sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function Up(t){if(tt&6)throw Error(se(327));Bs();var e=Ml(t,0);if(!(e&1))return Mn(t,It()),null;var n=zl(t,e);if(t.tag!==0&&n===2){var i=Gu(t);i!==0&&(e=i,n=vf(t,i))}if(n===1)throw n=Jo,Hr(t,0),or(t,e),Mn(t,It()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,gn,Ri),Mn(t,It()),null}function Qd(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(qs=It()+500,tc&&wr())}}function $r(t){cr!==null&&cr.tag===0&&!(tt&6)&&Bs();var e=tt;tt|=1;var n=Gn.transition,i=at;try{if(Gn.transition=null,at=1,t)return t()}finally{at=i,Gn.transition=n,tt=e,!(tt&6)&&wr()}}function Jd(){Rn=Ds.current,St(Ds)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ux(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(Id(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rl();break;case 3:js(),St(Sn),St(on),Hd();break;case 5:Vd(i);break;case 4:js();break;case 13:St(Mt);break;case 19:St(Mt);break;case 10:Od(i.type._context);break;case 22:case 23:Jd()}n=n.return}if(Wt=t,Ot=t=xr(t.current,null),qt=Rn=e,Bt=0,Jo=null,Kd=sc=qr=0,gn=Uo=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}kr=null}return t}function jg(t,e){do{var n=Ot;try{if(Fd(),ol.current=Fl,Ul){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ul=!1}if(Yr=0,Gt=kt=Et=null,Io=!1,Ko=0,$d.current=null,n===null||n.return===null){Bt=1,Jo=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var c=h.alternate;c?(h.updateQueue=c.updateQueue,h.memoizedState=c.memoizedState,h.lanes=c.lanes):(h.updateQueue=null,h.memoizedState=null)}var d=Mp(o);if(d!==null){d.flags&=-257,Ep(d,o,a,s,e),d.mode&1&&yp(s,u,e),e=d,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){yp(s,u,e),eh();break e}l=Error(se(426))}}else if(yt&&a.mode&1){var g=Mp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Ep(g,o,a,s,e),Nd(Ys(l,a));break e}}s=l=Ys(l,a),Bt!==4&&(Bt=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=bg(s,l,e);mp(s,f);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(_r===null||!_r.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Pg(s,a,e);mp(s,M);break e}}s=s.return}while(s!==null)}$g(n)}catch(R){e=R,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function Yg(){var t=Ol.current;return Ol.current=Fl,t===null?Fl:t}function eh(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Wt===null||!(qr&268435455)&&!(sc&268435455)||or(Wt,qt)}function zl(t,e){var n=tt;tt|=2;var i=Yg();(Wt!==t||qt!==e)&&(Ri=null,Hr(t,e));do try{oS();break}catch(r){jg(t,r)}while(!0);if(Fd(),tt=n,Ol.current=i,Ot!==null)throw Error(se(261));return Wt=null,qt=0,Bt}function oS(){for(;Ot!==null;)qg(Ot)}function aS(){for(;Ot!==null&&!Dv();)qg(Ot)}function qg(t){var e=Zg(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?$g(t):Ot=e,$d.current=null}function $g(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eS(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ot=null;return}}else if(n=Jx(n,e,Rn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Bt===0&&(Bt=5)}function Dr(t,e,n){var i=at,r=Gn.transition;try{Gn.transition=null,at=1,lS(t,e,n,i)}finally{Gn.transition=r,at=i}return null}function lS(t,e,n,i){do Bs();while(cr!==null);if(tt&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Hv(t,s),t===Wt&&(Ot=Wt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,Qg(yl,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var o=at;at=1;var a=tt;tt|=4,$d.current=null,nS(t,n),Gg(n,t),Cx($u),El=!!qu,$u=qu=null,t.current=n,iS(n),Iv(),tt=a,at=o,Gn.transition=s}else t.current=n;if(ba&&(ba=!1,cr=t,Bl=r),s=t.pendingLanes,s===0&&(_r=null),Fv(n.stateNode),Mn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kl)throw kl=!1,t=gf,gf=null,t;return Bl&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===_f?Fo++:(Fo=0,_f=t):Fo=0,wr(),null}function Bs(){if(cr!==null){var t=b0(Bl),e=Gn.transition,n=at;try{if(Gn.transition=null,at=16>t?16:t,cr===null)var i=!1;else{if(t=cr,cr=null,Bl=0,tt&6)throw Error(se(331));var r=tt;for(tt|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var h=Ee;switch(h.tag){case 0:case 11:case 15:No(8,h,s)}var p=h.child;if(p!==null)p.return=h,Ee=p;else for(;Ee!==null;){h=Ee;var c=h.sibling,d=h.return;if(zg(h),h===u){Ee=null;break}if(c!==null){c.return=d,Ee=c;break}Ee=d}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ee=f;break e}Ee=s.return}}var m=t.current;for(Ee=m;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=m;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rc(9,a)}}catch(R){Ct(a,a.return,R)}if(a===o){Ee=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ee=M;break e}Ee=a.return}}if(tt=r,wr(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(Kl,t)}catch{}i=!0}return i}finally{at=n,Gn.transition=e}}return!1}function Fp(t,e,n){e=Ys(n,e),e=bg(t,e,1),t=gr(t,e,1),e=fn(),t!==null&&(sa(t,1,e),Mn(t,e))}function Ct(t,e,n){if(t.tag===3)Fp(t,t,n);else for(;e!==null;){if(e.tag===3){Fp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){t=Ys(n,t),t=Pg(e,t,1),e=gr(e,t,1),t=fn(),e!==null&&(sa(e,1,t),Mn(e,t));break}}e=e.return}}function cS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(qt&n)===n&&(Bt===4||Bt===3&&(qt&130023424)===qt&&500>It()-Zd?Hr(t,0):Kd|=n),Mn(t,e)}function Kg(t,e){e===0&&(t.mode&1?(e=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):e=1);var n=fn();t=zi(t,e),t!==null&&(sa(t,e,n),Mn(t,n))}function uS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kg(t,n)}function fS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Kg(t,n)}var Zg;Zg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,Qx(t,e,n);vn=!!(t.flags&131072)}else vn=!1,yt&&e.flags&1048576&&tg(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ll(t,e),t=e.pendingProps;var r=Gs(e,on.current);ks(e,n),r=Wd(null,e,i,t,r,n);var s=Xd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,Cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bd(e),r.updater=ic,e.stateNode=r,r._reactInternals=e,sf(e,i,t,n),e=lf(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&Dd(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hS(i),t=Kn(i,t),r){case 0:e=af(null,e,i,t,n);break e;case 1:e=Ap(null,e,i,t,n);break e;case 11:e=Tp(null,e,i,t,n);break e;case 14:e=wp(null,e,i,Kn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),af(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Ap(t,e,i,r,n);case 3:e:{if(Ng(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ag(t,e),Il(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(se(423)),e),e=Rp(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(se(424)),e),e=Rp(t,e,i,n,r);break e}else for(Pn=mr(e.stateNode.containerInfo.firstChild),Ln=e,yt=!0,Qn=null,n=sg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Vi(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return lg(e),t===null&&tf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ku(i,r)?o=null:s!==null&&Ku(i,s)&&(e.flags|=32),Ig(t,e),un(t,e,o,n),e.child;case 6:return t===null&&tf(e),null;case 13:return Ug(t,e,n);case 4:return zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Tp(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,vt(Ll,i._currentValue),i._currentValue=o,s!==null)if(ri(s.value,o)){if(s.children===r.children&&!Sn.current){e=Vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ui(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,n),r=Wn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),wp(t,e,i,r,n);case 15:return Lg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),ll(t,e),e.tag=1,yn(i)?(t=!0,Cl(e)):t=!1,ks(e,n),Cg(e,i,r),sf(e,i,r,n),lf(null,e,i,!0,t,n);case 19:return Fg(t,e,n);case 22:return Dg(t,e,n)}throw Error(se(156,e.tag))};function Qg(t,e){return w0(t,e)}function dS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new dS(t,e,n,i)}function th(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hS(t){if(typeof t=="function")return th(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sd)return 11;if(t===yd)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")th(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ms:return Gr(n.children,r,s,e);case xd:o=8,r|=8;break;case Cu:return t=Hn(12,n,e,r|2),t.elementType=Cu,t.lanes=s,t;case bu:return t=Hn(13,n,e,r),t.elementType=bu,t.lanes=s,t;case Pu:return t=Hn(19,n,e,r),t.elementType=Pu,t.lanes=s,t;case l0:return oc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case o0:o=10;break e;case a0:o=9;break e;case Sd:o=11;break e;case yd:o=14;break e;case ir:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Hn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function oc(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=l0,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function Vc(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yc(0),this.expirationTimes=yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function nh(t,e,n,i,r,s,o,a,l){return t=new pS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bd(s),t}function mS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Jg(t){if(!t)return yr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(yn(n))return J0(t,n,e)}return e}function e_(t,e,n,i,r,s,o,a,l){return t=nh(n,i,!0,t,r,s,o,a,l),t.context=Jg(null),n=t.current,i=fn(),r=vr(n),s=Ui(i,r),s.callback=e??null,gr(n,s,r),t.current.lanes=r,sa(t,r,i),Mn(t,i),t}function ac(t,e,n,i){var r=e.current,s=fn(),o=vr(r);return n=Jg(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=gr(r,e,o),t!==null&&(ni(t,r,o,s),sl(t,r,o)),o}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Op(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ih(t,e){Op(t,e),(t=t.alternate)&&Op(t,e)}function gS(){return null}var t_=typeof reportError=="function"?reportError:function(t){console.error(t)};function rh(t){this._internalRoot=t}lc.prototype.render=rh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));ac(t,e,null,null)};lc.prototype.unmount=rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){ac(null,t,null,null)}),e[Bi]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=D0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&N0(t)}};function sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kp(){}function _S(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Vl(o);s.call(u)}}var o=e_(e,i,t,0,null,!1,!1,"",kp);return t._reactRootContainer=o,t[Bi]=o.current,Xo(t.nodeType===8?t.parentNode:t),$r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Vl(l);a.call(u)}}var l=nh(t,0,!1,null,null,!1,!1,"",kp);return t._reactRootContainer=l,t[Bi]=l.current,Xo(t.nodeType===8?t.parentNode:t),$r(function(){ac(e,l,n,i)}),l}function uc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vl(o);a.call(l)}}ac(e,o,t,r)}else o=_S(n,e,t,r,i);return Vl(o)}P0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(Td(e,n|1),Mn(e,It()),!(tt&6)&&(qs=It()+500,wr()))}break;case 13:$r(function(){var i=zi(t,1);if(i!==null){var r=fn();ni(i,t,1,r)}}),ih(t,1)}};wd=function(t){if(t.tag===13){var e=zi(t,134217728);if(e!==null){var n=fn();ni(e,t,134217728,n)}ih(t,134217728)}};L0=function(t){if(t.tag===13){var e=vr(t),n=zi(t,e);if(n!==null){var i=fn();ni(n,t,e,i)}ih(t,e)}};D0=function(){return at};I0=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};zu=function(t,e,n){switch(e){case"input":if(Iu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ec(i);if(!r)throw Error(se(90));u0(i),Iu(i,r)}}}break;case"textarea":d0(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};x0=Qd;S0=$r;var vS={usingClientEntryPoint:!1,Events:[aa,As,ec,_0,v0,Qd]},po={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xS={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=E0(t),t===null?null:t.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||gS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Kl=Pa.inject(xS),mi=Pa}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vS;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sh(e))throw Error(se(200));return mS(t,e,null,n)};In.createRoot=function(t,e){if(!sh(t))throw Error(se(299));var n=!1,i="",r=t_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=nh(t,1,!1,null,null,n,!1,i,r),t[Bi]=e.current,Xo(t.nodeType===8?t.parentNode:t),new rh(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=E0(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return $r(t)};In.hydrate=function(t,e,n){if(!cc(e))throw Error(se(200));return uc(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!sh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=t_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=e_(e,null,t,1,n??null,r,!1,s,o),t[Bi]=e.current,Xo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lc(e)};In.render=function(t,e,n){if(!cc(e))throw Error(se(200));return uc(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!cc(t))throw Error(se(40));return t._reactRootContainer?($r(function(){uc(null,null,t,!1,function(){t._reactRootContainer=null,t[Bi]=null})}),!0):!1};In.unstable_batchedUpdates=Qd;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return uc(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function n_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n_)}catch(t){console.error(t)}}n_(),n0.exports=In;var SS=n0.exports,Bp=SS;Au.createRoot=Bp.createRoot,Au.hydrateRoot=Bp.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="184",yS=0,zp=1,MS=2,dl=1,i_=2,Ao=3,Mr=0,En=1,Li=2,Fi=0,zs=1,Vp=2,Hp=3,Gp=4,ES=5,Nr=100,TS=101,wS=102,AS=103,RS=104,CS=200,bS=201,PS=202,LS=203,Sf=204,yf=205,DS=206,IS=207,NS=208,US=209,FS=210,OS=211,kS=212,BS=213,zS=214,Mf=0,Ef=1,Tf=2,$s=3,wf=4,Af=5,Rf=6,Cf=7,r_=0,VS=1,HS=2,_i=0,s_=1,o_=2,a_=3,ah=4,l_=5,c_=6,u_=7,f_=300,Kr=301,Ks=302,Hc=303,Gc=304,fc=306,bf=1e3,Ni=1001,Pf=1002,Yt=1003,GS=1004,La=1005,sn=1006,Wc=1007,zr=1008,bn=1009,d_=1010,h_=1011,ea=1012,lh=1013,Si=1014,hi=1015,Hi=1016,ch=1017,uh=1018,ta=1020,p_=35902,m_=35899,g_=1021,__=1022,ei=1023,Gi=1026,Vr=1027,v_=1028,fh=1029,Zr=1030,dh=1031,hh=1033,hl=33776,pl=33777,ml=33778,gl=33779,Lf=35840,Df=35841,If=35842,Nf=35843,Uf=36196,Ff=37492,Of=37496,kf=37488,Bf=37489,Hl=37490,zf=37491,Vf=37808,Hf=37809,Gf=37810,Wf=37811,Xf=37812,jf=37813,Yf=37814,qf=37815,$f=37816,Kf=37817,Zf=37818,Qf=37819,Jf=37820,ed=37821,td=36492,nd=36494,id=36495,rd=36283,sd=36284,Gl=36285,od=36286,WS=3200,ad=0,XS=1,ar="",Cn="srgb",Wl="srgb-linear",Xl="linear",ot="srgb",rs=7680,Wp=519,jS=512,YS=513,qS=514,ph=515,$S=516,KS=517,mh=518,ZS=519,Xp=35044,jp="300 es",pi=2e3,na=2001;function QS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function JS(){const t=jl("canvas");return t.style.display="block",t}const Yp={};function qp(...t){const e="THREE."+t.shift();console.log(e,...t)}function x_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Le(...t){t=x_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function et(...t){t=x_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ld(...t){const e=t.join(" ");e in Yp||(Yp[e]=!0,Le(...t))}function ey(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ty={[Mf]:Ef,[Tf]:Rf,[wf]:Cf,[$s]:Af,[Ef]:Mf,[Rf]:Tf,[Cf]:wf,[Af]:$s};class Ar{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,Yl=180/Math.PI;function ca(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function ny(t,e){return(t%e+e)%e}function jc(t,e,n){return(1-n)*t+n*e}function mo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Sh=class Sh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sh.prototype.isVector2=!0;let nt=Sh;class io{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],c=s[o+0],d=s[o+1],v=s[o+2],y=s[o+3];if(p!==y||l!==c||u!==d||h!==v){let g=l*c+u*d+h*v+p*y;g<0&&(c=-c,d=-d,v=-v,y=-y,g=-g);let f=1-a;if(g<.9995){const m=Math.acos(g),x=Math.sin(m);f=Math.sin(f*m)/x,a=Math.sin(a*m)/x,l=l*f+c*a,u=u*f+d*a,h=h*f+v*a,p=p*f+y*a}else{l=l*f+c*a,u=u*f+d*a,h=h*f+v*a,p=p*f+y*a;const m=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=m,u*=m,h*=m,p*=m}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[o],c=s[o+1],d=s[o+2],v=s[o+3];return e[n]=a*v+h*p+l*d-u*c,e[n+1]=l*v+h*c+u*p-a*d,e[n+2]=u*v+h*d+a*c-l*p,e[n+3]=h*v-a*p-l*c-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(r/2),p=a(s/2),c=l(i/2),d=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=c*h*p+u*d*v,this._y=u*d*p-c*h*v,this._z=u*h*v+c*d*p,this._w=u*h*p-c*d*v;break;case"YXZ":this._x=c*h*p+u*d*v,this._y=u*d*p-c*h*v,this._z=u*h*v-c*d*p,this._w=u*h*p+c*d*v;break;case"ZXY":this._x=c*h*p-u*d*v,this._y=u*d*p+c*h*v,this._z=u*h*v+c*d*p,this._w=u*h*p-c*d*v;break;case"ZYX":this._x=c*h*p-u*d*v,this._y=u*d*p+c*h*v,this._z=u*h*v-c*d*p,this._w=u*h*p+c*d*v;break;case"YZX":this._x=c*h*p+u*d*v,this._y=u*d*p+c*h*v,this._z=u*h*v-c*d*p,this._w=u*h*p-c*d*v;break;case"XZY":this._x=c*h*p-u*d*v,this._y=u*d*p-c*h*v,this._z=u*h*v+c*d*p,this._w=u*h*p+c*d*v;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],h=n[6],p=n[10],c=i+a+p;if(c>0){const d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>p){const d=2*Math.sqrt(1+i-a-p);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>p){const d=2*Math.sqrt(1+a-i-p);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+p-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-i*u,this._z=s*h+o*u+i*l-r*a,this._w=o*h-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),h=Math.sin(u);l=Math.sin(l*u)/h,n=Math.sin(n*u)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yh=class yh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*u+o*p-a*h,this.y=i+l*h+a*u-s*p,this.z=r+l*p+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yh.prototype.isVector3=!0;let U=yh;const Yc=new U,$p=new io,Mh=class Mh{constructor(e,n,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],p=i[7],c=i[2],d=i[5],v=i[8],y=r[0],g=r[3],f=r[6],m=r[1],x=r[4],M=r[7],R=r[2],T=r[5],b=r[8];return s[0]=o*y+a*m+l*R,s[3]=o*g+a*x+l*T,s[6]=o*f+a*M+l*b,s[1]=u*y+h*m+p*R,s[4]=u*g+h*x+p*T,s[7]=u*f+h*M+p*b,s[2]=c*y+d*m+v*R,s[5]=c*g+d*x+v*T,s[8]=c*f+d*M+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return n*o*h-n*a*u-i*s*h+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],p=h*o-a*u,c=a*l-h*s,d=u*s-o*l,v=n*p+i*c+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=p*y,e[1]=(r*u-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=c*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=d*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qc.makeScale(e,n)),this}rotate(e){return this.premultiply(qc.makeRotation(-e)),this}translate(e,n){return this.premultiply(qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mh.prototype.isMatrix3=!0;let ke=Mh;const qc=new ke,Kp=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zp=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iy(){const t={enabled:!0,workingColorSpace:Wl,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?Xl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ld("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ld("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Wl]:{primaries:e,whitePoint:i,transfer:Xl,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const Qe=iy();function Oi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ss;class ry{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=jl("canvas")),ss.width=e.width,ss.height=e.height;const r=ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Oi(n[i]/255)*255):n[i]=Oi(n[i]);return{data:n,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sy=0;class gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($c(r[o].image)):s.push($c(r[o]))}else s=$c(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $c(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ry.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let oy=0;const Kc=new U;class dn extends Ar{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Ni,r=Ni,s=sn,o=zr,a=ei,l=bn,u=dn.DEFAULT_ANISOTROPY,h=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=ca(),this.name="",this.source=new gh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bf:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bf:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=f_;dn.DEFAULT_ANISOTROPY=1;const Eh=class Eh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],c=l[1],d=l[5],v=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(h-c)<.01&&Math.abs(p-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+c)<.1&&Math.abs(p+y)<.1&&Math.abs(v+g)<.1&&Math.abs(u+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,M=(d+1)/2,R=(f+1)/2,T=(h+c)/4,b=(p+y)/4,_=(v+g)/4;return x>M&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=b/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=_/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=b/s,r=_/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(p-y)*(p-y)+(c-h)*(c-h));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(p-y)/m,this.z=(c-h)/m,this.w=Math.acos((u+d+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eh.prototype.isVector4=!0;let bt=Eh;class ay extends Ar{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new dn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new gh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends ay{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class S_ extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ly extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ql=class ql{constructor(e,n,i,r,s,o,a,l,u,h,p,c,d,v,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,h,p,c,d,v,y,g)}set(e,n,i,r,s,o,a,l,u,h,p,c,d,v,y,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=h,f[10]=p,f[14]=c,f[3]=d,f[7]=v,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ql().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const c=o*h,d=o*p,v=a*h,y=a*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=d+v*u,n[5]=c-y*u,n[9]=-a*l,n[2]=y-c*u,n[6]=v+d*u,n[10]=o*l}else if(e.order==="YXZ"){const c=l*h,d=l*p,v=u*h,y=u*p;n[0]=c+y*a,n[4]=v*a-d,n[8]=o*u,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=d*a-v,n[6]=y+c*a,n[10]=o*l}else if(e.order==="ZXY"){const c=l*h,d=l*p,v=u*h,y=u*p;n[0]=c-y*a,n[4]=-o*p,n[8]=v+d*a,n[1]=d+v*a,n[5]=o*h,n[9]=y-c*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const c=o*h,d=o*p,v=a*h,y=a*p;n[0]=l*h,n[4]=v*u-d,n[8]=c*u+y,n[1]=l*p,n[5]=y*u+c,n[9]=d*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const c=o*l,d=o*u,v=a*l,y=a*u;n[0]=l*h,n[4]=y-c*p,n[8]=v*p+d,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-u*h,n[6]=d*p+v,n[10]=c-y*p}else if(e.order==="XZY"){const c=o*l,d=o*u,v=a*l,y=a*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=c*p+y,n[5]=o*h,n[9]=d*p-v,n[2]=v*p-d,n[6]=a*h,n[10]=y*p+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cy,e,uy)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ki.crossVectors(i,wn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ki.crossVectors(i,wn)),Ki.normalize(),Da.crossVectors(wn,Ki),r[0]=Ki.x,r[4]=Da.x,r[8]=wn.x,r[1]=Ki.y,r[5]=Da.y,r[9]=wn.y,r[2]=Ki.z,r[6]=Da.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],p=i[5],c=i[9],d=i[13],v=i[2],y=i[6],g=i[10],f=i[14],m=i[3],x=i[7],M=i[11],R=i[15],T=r[0],b=r[4],_=r[8],A=r[12],P=r[1],L=r[5],F=r[9],j=r[13],K=r[2],N=r[6],W=r[10],z=r[14],B=r[3],q=r[7],ee=r[11],le=r[15];return s[0]=o*T+a*P+l*K+u*B,s[4]=o*b+a*L+l*N+u*q,s[8]=o*_+a*F+l*W+u*ee,s[12]=o*A+a*j+l*z+u*le,s[1]=h*T+p*P+c*K+d*B,s[5]=h*b+p*L+c*N+d*q,s[9]=h*_+p*F+c*W+d*ee,s[13]=h*A+p*j+c*z+d*le,s[2]=v*T+y*P+g*K+f*B,s[6]=v*b+y*L+g*N+f*q,s[10]=v*_+y*F+g*W+f*ee,s[14]=v*A+y*j+g*z+f*le,s[3]=m*T+x*P+M*K+R*B,s[7]=m*b+x*L+M*N+R*q,s[11]=m*_+x*F+M*W+R*ee,s[15]=m*A+x*j+M*z+R*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],p=e[6],c=e[10],d=e[14],v=e[3],y=e[7],g=e[11],f=e[15],m=l*d-u*c,x=a*d-u*p,M=a*c-l*p,R=o*d-u*h,T=o*c-l*h,b=o*p-a*h;return n*(y*m-g*x+f*M)-i*(v*m-g*R+f*T)+r*(v*x-y*R+f*b)-s*(v*M-y*T+g*b)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],p=e[9],c=e[10],d=e[11],v=e[12],y=e[13],g=e[14],f=e[15],m=n*a-i*o,x=n*l-r*o,M=n*u-s*o,R=i*l-r*a,T=i*u-s*a,b=r*u-s*l,_=h*y-p*v,A=h*g-c*v,P=h*f-d*v,L=p*g-c*y,F=p*f-d*y,j=c*f-d*g,K=m*j-x*F+M*L+R*P-T*A+b*_;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/K;return e[0]=(a*j-l*F+u*L)*N,e[1]=(r*F-i*j-s*L)*N,e[2]=(y*b-g*T+f*R)*N,e[3]=(c*T-p*b-d*R)*N,e[4]=(l*P-o*j-u*A)*N,e[5]=(n*j-r*P+s*A)*N,e[6]=(g*M-v*b-f*x)*N,e[7]=(h*b-c*M+d*x)*N,e[8]=(o*F-a*P+u*_)*N,e[9]=(i*P-n*F-s*_)*N,e[10]=(v*T-y*M+f*m)*N,e[11]=(p*M-h*T-d*m)*N,e[12]=(a*A-o*L-l*_)*N,e[13]=(n*L-i*A+r*_)*N,e[14]=(y*x-v*R-g*m)*N,e[15]=(h*R-p*x+c*m)*N,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,h=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+i,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,h=o+o,p=a+a,c=s*u,d=s*h,v=s*p,y=o*h,g=o*p,f=a*p,m=l*u,x=l*h,M=l*p,R=i.x,T=i.y,b=i.z;return r[0]=(1-(y+f))*R,r[1]=(d+M)*R,r[2]=(v-x)*R,r[3]=0,r[4]=(d-M)*T,r[5]=(1-(c+f))*T,r[6]=(g+m)*T,r[7]=0,r[8]=(v+x)*b,r[9]=(g-m)*b,r[10]=(1-(c+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=os.set(r[0],r[1],r[2]).length();const a=os.set(r[4],r[5],r[6]).length(),l=os.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Yn.copy(this);const u=1/o,h=1/a,p=1/l;return Yn.elements[0]*=u,Yn.elements[1]*=u,Yn.elements[2]*=u,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=p,Yn.elements[9]*=p,Yn.elements[10]*=p,n.setFromRotationMatrix(Yn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=pi,l=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r);let v,y;if(l)v=s/(o-s),y=o*s/(o-s);else if(a===pi)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===na)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=p,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=pi,l=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),c=-(n+e)/(n-e),d=-(i+r)/(i-r);let v,y;if(l)v=1/(o-s),y=o/(o-s);else if(a===pi)v=-2/(o-s),y=-(o+s)/(o-s);else if(a===na)v=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=p,u[9]=0,u[13]=d,u[2]=0,u[6]=0,u[10]=v,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ql.prototype.isMatrix4=!0;let Nt=ql;const os=new U,Yn=new Nt,cy=new U(0,0,0),uy=new U(1,1,1),Ki=new U,Da=new U,wn=new U,Qp=new Nt,Jp=new io;class Wi{constructor(e=0,n=0,i=0,r=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],p=r[2],c=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jp.setFromEuler(this),this.setFromQuaternion(Jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class y_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fy=0;const em=new U,as=new io,Mi=new Nt,Ia=new U,go=new U,dy=new U,hy=new io,tm=new U(1,0,0),nm=new U(0,1,0),im=new U(0,0,1),rm={type:"added"},py={type:"removed"},ls={type:"childadded",child:null},Zc={type:"childremoved",child:null};class $t extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new U,n=new Wi,i=new io,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new ke}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,n){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ia.copy(e):Ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(go,Ia,this.up):Mi.lookAt(Ia,go,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),as.setFromRotationMatrix(Mi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rm),ls.child=e,this.dispatchEvent(ls),ls.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(py),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rm),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),c=o(e.skeletons),d=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),c.length>0&&(i.skeletons=c),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new U(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xn extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const my={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),f=this._getHandJoint(u,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],c=h.position.distanceTo(p.position),d=.02,v=.005;u.inputState.pinching&&c>d+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=d-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(my)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const M_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Na={h:0,s:0,l:0};function Jc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=ny(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Jc(o,s,e+1/3),this.g=Jc(o,s,e),this.b=Jc(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=M_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Qe.workingToColorSpace(nn.copy(this),e),Math.round(Ze(nn.r*255,0,255))*65536+Math.round(Ze(nn.g*255,0,255))*256+Math.round(Ze(nn.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const p=o-a;switch(u=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Cn){Qe.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(Na);const i=jc(Zi.h,Na.h,n),r=jc(Zi.s,Na.s,n),s=jc(Zi.l,Na.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new $e;$e.NAMES=M_;class Is{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=n}clone(){return new Is(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gy extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qn=new U,Ei=new U,eu=new U,Ti=new U,cs=new U,us=new U,sm=new U,tu=new U,nu=new U,iu=new U,ru=new bt,su=new bt,ou=new bt;class Jn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),Ei.subVectors(i,n),eu.subVectors(e,n);const o=qn.dot(qn),a=qn.dot(Ei),l=qn.dot(eu),u=Ei.dot(Ei),h=Ei.dot(eu),p=o*u-a*a;if(p===0)return s.set(0,0,0),null;const c=1/p,d=(u*l-a*h)*c,v=(o*h-a*l)*c;return s.set(1-d-v,v,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ru.setScalar(0),su.setScalar(0),ou.setScalar(0),ru.fromBufferAttribute(e,n),su.fromBufferAttribute(e,i),ou.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ru,s.x),o.addScaledVector(su,s.y),o.addScaledVector(ou,s.z),o}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),Ei.subVectors(e,n),qn.cross(Ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),qn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;cs.subVectors(r,i),us.subVectors(s,i),tu.subVectors(e,i);const l=cs.dot(tu),u=us.dot(tu);if(l<=0&&u<=0)return n.copy(i);nu.subVectors(e,r);const h=cs.dot(nu),p=us.dot(nu);if(h>=0&&p<=h)return n.copy(r);const c=l*p-h*u;if(c<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(cs,o);iu.subVectors(e,s);const d=cs.dot(iu),v=us.dot(iu);if(v>=0&&d<=v)return n.copy(s);const y=d*u-l*v;if(y<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(us,a);const g=h*v-d*p;if(g<=0&&p-h>=0&&d-v>=0)return sm.subVectors(s,r),a=(p-h)/(p-h+(d-v)),n.copy(r).addScaledVector(sm,a);const f=1/(g+y+c);return o=y*f,a=c*f,n.copy(i).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cn{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Fa.subVectors(this.max,_o),fs.subVectors(e.a,_o),ds.subVectors(e.b,_o),hs.subVectors(e.c,_o),Qi.subVectors(ds,fs),Ji.subVectors(hs,ds),Rr.subVectors(fs,hs);let n=[0,-Qi.z,Qi.y,0,-Ji.z,Ji.y,0,-Rr.z,Rr.y,Qi.z,0,-Qi.x,Ji.z,0,-Ji.x,Rr.z,0,-Rr.x,-Qi.y,Qi.x,0,-Ji.y,Ji.x,0,-Rr.y,Rr.x,0];return!au(n,fs,ds,hs,Fa)||(n=[1,0,0,0,1,0,0,0,1],!au(n,fs,ds,hs,Fa))?!1:(Oa.crossVectors(Qi,Ji),n=[Oa.x,Oa.y,Oa.z],au(n,fs,ds,hs,Fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new U,new U,new U,new U,new U,new U,new U,new U],$n=new U,Ua=new cn,fs=new U,ds=new U,hs=new U,Qi=new U,Ji=new U,Rr=new U,_o=new U,Fa=new U,Oa=new U,Cr=new U;function au(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Cr.fromArray(t,s);const a=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=e.dot(Cr),u=n.dot(Cr),h=i.dot(Cr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const Ft=new U,ka=new nt;let _y=0;class xi extends Ar{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_y++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Xp,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ka.fromBufferAttribute(this,n),ka.applyMatrix3(e),this.setXY(n,ka.x,ka.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=mo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=mo(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=mo(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=mo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=mo(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class E_ extends xi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class T_ extends xi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ut extends xi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const vy=new cn,vo=new U,lu=new U;class _h{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):vy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const n=vo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(vo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(lu)),this.expandByPoint(vo.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xy=0;const kn=new Nt,cu=new $t,ps=new U,An=new cn,xo=new cn,Ht=new U;class Un extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QS(e)?T_:E_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ut(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _h);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(An.min,xo.min),An.expandByPoint(Ht),Ht.addVectors(An.max,xo.max),An.expandByPoint(Ht)):(An.expandByPoint(xo.min),An.expandByPoint(xo.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Ht.fromBufferAttribute(a,u),l&&(ps.fromBufferAttribute(e,u),Ht.add(ps)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new U,l[_]=new U;const u=new U,h=new U,p=new U,c=new nt,d=new nt,v=new nt,y=new U,g=new U;function f(_,A,P){u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,P),c.fromBufferAttribute(s,_),d.fromBufferAttribute(s,A),v.fromBufferAttribute(s,P),h.sub(u),p.sub(u),d.sub(c),v.sub(c);const L=1/(d.x*v.y-v.x*d.y);isFinite(L)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(L),g.copy(p).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(L),a[_].add(y),a[A].add(y),a[P].add(y),l[_].add(g),l[A].add(g),l[P].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let _=0,A=m.length;_<A;++_){const P=m[_],L=P.start,F=P.count;for(let j=L,K=L+F;j<K;j+=3)f(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const x=new U,M=new U,R=new U,T=new U;function b(_){R.fromBufferAttribute(r,_),T.copy(R);const A=a[_];x.copy(A),x.sub(R.multiplyScalar(R.dot(A))).normalize(),M.crossVectors(T,A);const L=M.dot(l[_])<0?-1:1;o.setXYZW(_,x.x,x.y,x.z,L)}for(let _=0,A=m.length;_<A;++_){const P=m[_],L=P.start,F=P.count;for(let j=L,K=L+F;j<K;j+=3)b(e.getX(j+0)),b(e.getX(j+1)),b(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,d=i.count;c<d;c++)i.setXYZ(c,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,h=new U,p=new U;if(e)for(let c=0,d=e.count;c<d;c+=3){const v=e.getX(c+0),y=e.getX(c+1),g=e.getX(c+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),a.add(h),l.add(h),u.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let c=0,d=n.count;c<d;c+=3)r.fromBufferAttribute(n,c+0),s.fromBufferAttribute(n,c+1),o.fromBufferAttribute(n,c+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(c+0,h.x,h.y,h.z),i.setXYZ(c+1,h.x,h.y,h.z),i.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,p=a.normalized,c=new u.constructor(l.length*h);let d=0,v=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let f=0;f<h;f++)c[v++]=u[d++]}return new xi(c,h,p)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Un,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,p=u.length;h<p;h++){const c=u[h],d=e(c,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,c=u.length;p<c;p++){const d=u[p];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let c=0,d=p.length;c<d;c++)h.push(p[c].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Sy=0;class ua extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=zs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sf,this.blendDst=yf,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Le(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sf&&(i.blendSrc=this.blendSrc),this.blendDst!==yf&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ai=new U,uu=new U,Ba=new U,er=new U,fu=new U,za=new U,du=new U;class yy{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){uu.copy(e).add(n).multiplyScalar(.5),Ba.copy(n).sub(e).normalize(),er.copy(this.origin).sub(uu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ba),a=er.dot(this.direction),l=-er.dot(Ba),u=er.lengthSq(),h=Math.abs(1-o*o);let p,c,d,v;if(h>0)if(p=o*l-a,c=o*a-l,v=s*h,p>=0)if(c>=-v)if(c<=v){const y=1/h;p*=y,c*=y,d=p*(p+o*c+2*a)+c*(o*p+c+2*l)+u}else c=s,p=Math.max(0,-(o*c+a)),d=-p*p+c*(c+2*l)+u;else c=-s,p=Math.max(0,-(o*c+a)),d=-p*p+c*(c+2*l)+u;else c<=-v?(p=Math.max(0,-(-o*s+a)),c=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+c*(c+2*l)+u):c<=v?(p=0,c=Math.min(Math.max(-s,-l),s),d=c*(c+2*l)+u):(p=Math.max(0,-(o*s+a)),c=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+c*(c+2*l)+u);else c=o>0?-s:s,p=Math.max(0,-(o*c+a)),d=-p*p+c*(c+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(uu).addScaledVector(Ba,c),d}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,c=this.origin;return u>=0?(i=(e.min.x-c.x)*u,r=(e.max.x-c.x)*u):(i=(e.max.x-c.x)*u,r=(e.min.x-c.x)*u),h>=0?(s=(e.min.y-c.y)*h,o=(e.max.y-c.y)*h):(s=(e.max.y-c.y)*h,o=(e.min.y-c.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-c.z)*p,l=(e.max.z-c.z)*p):(a=(e.max.z-c.z)*p,l=(e.min.z-c.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,i,r,s){fu.subVectors(n,e),za.subVectors(i,e),du.crossVectors(fu,za);let o=this.direction.dot(du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=a*this.direction.dot(za.crossVectors(er,za));if(l<0)return null;const u=a*this.direction.dot(fu.cross(er));if(u<0||l+u>o)return null;const h=-a*er.dot(du);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zs extends ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const om=new Nt,br=new yy,Va=new _h,am=new U,Ha=new U,Ga=new U,Wa=new U,hu=new U,Xa=new U,lm=new U,ja=new U;class we extends $t{constructor(e=new Un,n=new Zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],p=s[l];h!==0&&(hu.fromBufferAttribute(p,e),o?Xa.addScaledVector(hu,h):Xa.addScaledVector(hu.sub(n),h))}n.add(Xa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Va.containsPoint(br.origin)===!1&&(br.intersectSphere(Va,am)===null||br.origin.distanceToSquared(am)>(e.far-e.near)**2))&&(om.copy(s).invert(),br.copy(e.ray).applyMatrix4(om),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,c=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=c.length;v<y;v++){const g=c[v],f=o[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=m,R=x;M<R;M+=3){const T=a.getX(M),b=a.getX(M+1),_=a.getX(M+2);r=Ya(this,f,e,i,u,h,p,T,b,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let g=v,f=y;g<f;g+=3){const m=a.getX(g),x=a.getX(g+1),M=a.getX(g+2);r=Ya(this,o,e,i,u,h,p,m,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=c.length;v<y;v++){const g=c[v],f=o[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=m,R=x;M<R;M+=3){const T=M,b=M+1,_=M+2;r=Ya(this,f,e,i,u,h,p,T,b,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let g=v,f=y;g<f;g+=3){const m=g,x=g+1,M=g+2;r=Ya(this,o,e,i,u,h,p,m,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function My(t,e,n,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mr,a),l===null)return null;ja.copy(a),ja.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ja);return u<n.near||u>n.far?null:{distance:u,point:ja.clone(),object:t}}function Ya(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ha),t.getVertexPosition(l,Ga),t.getVertexPosition(u,Wa);const h=My(t,e,n,i,Ha,Ga,Wa,lm);if(h){const p=new U;Jn.getBarycoord(lm,Ha,Ga,Wa,p),r&&(h.uv=Jn.getInterpolatedAttribute(r,a,l,u,p,new nt)),s&&(h.uv1=Jn.getInterpolatedAttribute(s,a,l,u,p,new nt)),o&&(h.normal=Jn.getInterpolatedAttribute(o,a,l,u,p,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const c={a,b:l,c:u,normal:new U,materialIndex:0};Jn.getNormal(Ha,Ga,Wa,c.normal),h.face=c,h.barycoord=p}return h}class Ey extends dn{constructor(e=null,n=1,i=1,r,s,o,a,l,u=Yt,h=Yt,p,c){super(null,o,a,l,u,h,r,s,p,c),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pu=new U,Ty=new U,wy=new ke;class Ir{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pu.subVectors(i,n).cross(Ty.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(pu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wy.getNormalMatrix(e),r=this.coplanarPoint(pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new _h,Ay=new nt(.5,.5),qa=new U;class vh{constructor(e=new Ir,n=new Ir,i=new Ir,r=new Ir,s=new Ir,o=new Ir){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],h=s[4],p=s[5],c=s[6],d=s[7],v=s[8],y=s[9],g=s[10],f=s[11],m=s[12],x=s[13],M=s[14],R=s[15];if(r[0].setComponents(u-o,d-h,f-v,R-m).normalize(),r[1].setComponents(u+o,d+h,f+v,R+m).normalize(),r[2].setComponents(u+a,d+p,f+y,R+x).normalize(),r[3].setComponents(u-a,d-p,f-y,R-x).normalize(),i)r[4].setComponents(l,c,g,M).normalize(),r[5].setComponents(u-l,d-c,f-g,R-M).normalize();else if(r[4].setComponents(u-l,d-c,f-g,R-M).normalize(),n===pi)r[5].setComponents(u+l,d+c,f+g,R+M).normalize();else if(n===na)r[5].setComponents(l,c,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);const n=Ay.distanceTo(e.center);return Pr.radius=.7071067811865476+n,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(qa.x=r.normal.x>0?e.max.x:e.min.x,qa.y=r.normal.y>0?e.max.y:e.min.y,qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class w_ extends dn{constructor(e=[],n=Kr,i,r,s,o,a,l,u,h){super(e,n,i,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qs extends dn{constructor(e,n,i=Si,r,s,o,a=Yt,l=Yt,u,h=Gi,p=1){if(h!==Gi&&h!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:n,depth:p};super(c,r,s,o,a,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ry extends Qs{constructor(e,n=Si,i=Kr,r,s,o=Yt,a=Yt,l,u=Gi){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,o,a,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class A_ extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dt extends Un{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],p=[];let c=0,d=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(p,2));function v(y,g,f,m,x,M,R,T,b,_,A){const P=M/b,L=R/_,F=M/2,j=R/2,K=T/2,N=b+1,W=_+1;let z=0,B=0;const q=new U;for(let ee=0;ee<W;ee++){const le=ee*L-j;for(let pe=0;pe<N;pe++){const Ve=pe*P-F;q[y]=Ve*m,q[g]=le*x,q[f]=K,u.push(q.x,q.y,q.z),q[y]=0,q[g]=0,q[f]=T>0?1:-1,h.push(q.x,q.y,q.z),p.push(pe/b),p.push(1-ee/_),z+=1}}for(let ee=0;ee<_;ee++)for(let le=0;le<b;le++){const pe=c+le+N*ee,Ve=c+le+N*(ee+1),Xe=c+(le+1)+N*(ee+1),De=c+(le+1)+N*ee;l.push(pe,Ve,De),l.push(Ve,Xe,De),B+=6}a.addGroup(d,B,A),d+=B,c+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wr extends Un{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],u=[],h=n/2,p=Math.PI/2*e,c=n,d=2*p+c,v=i*2+s,y=r+1,g=new U,f=new U;for(let m=0;m<=v;m++){let x=0,M=0,R=0,T=0;if(m<=i){const A=m/i,P=A*Math.PI/2;M=-h-e*Math.cos(P),R=e*Math.sin(P),T=-e*Math.cos(P),x=A*p}else if(m<=i+s){const A=(m-i)/s;M=-h+A*n,R=e,T=0,x=p+A*c}else{const A=(m-i-s)/i,P=A*Math.PI/2;M=h+e*Math.sin(P),R=e*Math.cos(P),T=e*Math.sin(P),x=p+c+A*p}const b=Math.max(0,Math.min(1,x/d));let _=0;m===0?_=.5/r:m===v&&(_=-.5/r);for(let A=0;A<=r;A++){const P=A/r,L=P*Math.PI*2,F=Math.sin(L),j=Math.cos(L);f.x=-R*j,f.y=M,f.z=R*F,a.push(f.x,f.y,f.z),g.set(-R*j,T,R*F),g.normalize(),l.push(g.x,g.y,g.z),u.push(P+_,b)}if(m>0){const A=(m-1)*y;for(let P=0;P<r;P++){const L=A+P,F=A+P+1,j=m*y+P,K=m*y+P+1;o.push(L,F,j),o.push(F,K,j)}}}this.setIndex(o),this.setAttribute("position",new Ut(a,3)),this.setAttribute("normal",new Ut(l,3)),this.setAttribute("uv",new Ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class fa extends Un{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],c=[],d=[];let v=0;const y=[],g=i/2;let f=0;m(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ut(p,3)),this.setAttribute("normal",new Ut(c,3)),this.setAttribute("uv",new Ut(d,2));function m(){const M=new U,R=new U;let T=0;const b=(n-e)/i;for(let _=0;_<=s;_++){const A=[],P=_/s,L=P*(n-e)+e;for(let F=0;F<=r;F++){const j=F/r,K=j*l+a,N=Math.sin(K),W=Math.cos(K);R.x=L*N,R.y=-P*i+g,R.z=L*W,p.push(R.x,R.y,R.z),M.set(N,b,W).normalize(),c.push(M.x,M.y,M.z),d.push(j,1-P),A.push(v++)}y.push(A)}for(let _=0;_<r;_++)for(let A=0;A<s;A++){const P=y[A][_],L=y[A+1][_],F=y[A+1][_+1],j=y[A][_+1];(e>0||A!==0)&&(h.push(P,L,j),T+=3),(n>0||A!==s-1)&&(h.push(L,F,j),T+=3)}u.addGroup(f,T,0),f+=T}function x(M){const R=v,T=new nt,b=new U;let _=0;const A=M===!0?e:n,P=M===!0?1:-1;for(let F=1;F<=r;F++)p.push(0,g*P,0),c.push(0,P,0),d.push(.5,.5),v++;const L=v;for(let F=0;F<=r;F++){const K=F/r*l+a,N=Math.cos(K),W=Math.sin(K);b.x=A*W,b.y=g*P,b.z=A*N,p.push(b.x,b.y,b.z),c.push(0,P,0),T.x=N*.5+.5,T.y=W*.5*P+.5,d.push(T.x,T.y),v++}for(let F=0;F<r;F++){const j=R+F,K=L+F;M===!0?h.push(K,K+1,j):h.push(K+1,K,j),_+=3}u.addGroup(f,_,M===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ur extends fa{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ur(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dc extends Un{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,h=l+1,p=e/a,c=n/l,d=[],v=[],y=[],g=[];for(let f=0;f<h;f++){const m=f*c-o;for(let x=0;x<u;x++){const M=x*p-s;v.push(M,-m,0),y.push(0,0,1),g.push(x/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<a;m++){const x=m+u*f,M=m+u*(f+1),R=m+1+u*(f+1),T=m+1+u*f;d.push(x,M,T),d.push(M,R,T)}this.setIndex(d),this.setAttribute("position",new Ut(v,3)),this.setAttribute("normal",new Ut(y,3)),this.setAttribute("uv",new Ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ii extends Un{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const h=[],p=new U,c=new U,d=[],v=[],y=[],g=[];for(let f=0;f<=i;f++){const m=[],x=f/i;let M=0;f===0&&o===0?M=.5/n:f===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const T=R/n;p.x=-e*Math.cos(r+T*s)*Math.sin(o+x*a),p.y=e*Math.cos(o+x*a),p.z=e*Math.sin(r+T*s)*Math.sin(o+x*a),v.push(p.x,p.y,p.z),c.copy(p).normalize(),y.push(c.x,c.y,c.z),g.push(T+M,1-x),m.push(u++)}h.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const x=h[f][m+1],M=h[f][m],R=h[f+1][m],T=h[f+1][m+1];(f!==0||o>0)&&d.push(x,M,T),(f!==i-1||l<Math.PI)&&d.push(M,R,T)}this.setIndex(d),this.setAttribute("position",new Ut(v,3)),this.setAttribute("normal",new Ut(y,3)),this.setAttribute("uv",new Ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ia extends Un{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],u=[],h=[],p=[],c=new U,d=new U,v=new U;for(let y=0;y<=i;y++){const g=o+y/i*a;for(let f=0;f<=r;f++){const m=f/r*s;d.x=(e+n*Math.cos(g))*Math.cos(m),d.y=(e+n*Math.cos(g))*Math.sin(m),d.z=n*Math.sin(g),u.push(d.x,d.y,d.z),c.x=e*Math.cos(m),c.y=e*Math.sin(m),v.subVectors(d,c).normalize(),h.push(v.x,v.y,v.z),p.push(f/r),p.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=r;g++){const f=(r+1)*y+g-1,m=(r+1)*(y-1)+g-1,x=(r+1)*(y-1)+g,M=(r+1)*y+g;l.push(f,m,M),l.push(m,x,M)}this.setIndex(l),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(cm(r))r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(cm(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=Js(t[n]);for(const r in i)e[r]=i[r]}return e}function cm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Cy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function R_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const by={clone:Js,merge:ln};var Py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Py,this.fragmentShader=Ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=Cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dy extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ht extends ua{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ad,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xh extends ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Iy extends ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ny extends ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hc extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Uy extends hc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const mu=new Nt,um=new U,fm=new U;class C_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vh,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;um.setFromMatrixPosition(e.matrixWorld),n.position.copy(um),fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(fm),n.updateMatrixWorld(),mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===na||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $a=new U,Ka=new io,li=new U;class b_ extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($a,Ka,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Ka,li.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose($a,Ka,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Ka,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const tr=new U,dm=new nt,hm=new nt;class _n extends b_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yl*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,n){return this.getViewBounds(e,dm,hm),n.subVectors(hm,dm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Fy extends C_{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=Yl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Oy extends hc{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Fy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class ky extends C_{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}}class Ur extends hc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ky}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class P_ extends b_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class By extends hc{constructor(e,n,i=10,r=10){super(e,n),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const n=super.toJSON(e);return n.object.width=this.width,n.object.height=this.height,n}}const ms=-90,gs=1;class zy extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new _n(ms,gs,e,n);s.layers=this.layers,this.add(s);const o=new _n(ms,gs,e,n);o.layers=this.layers,this.add(o);const a=new _n(ms,gs,e,n);a.layers=this.layers,this.add(a);const l=new _n(ms,gs,e,n);l.layers=this.layers,this.add(l);const u=new _n(ms,gs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,p=e.getRenderTarget(),c=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,c,d),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Vy extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Hy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Le("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Th=class Th{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Th.prototype.isMatrix2=!0;let pm=Th;class Gy extends Ar{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Le("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function mm(t,e,n,i){const r=Wy(i);switch(n){case g_:return t*e;case v_:return t*e/r.components*r.byteLength;case fh:return t*e/r.components*r.byteLength;case Zr:return t*e*2/r.components*r.byteLength;case dh:return t*e*2/r.components*r.byteLength;case __:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case hh:return t*e*4/r.components*r.byteLength;case hl:case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ml:case gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Df:case Nf:return Math.max(t,16)*Math.max(e,8)/4;case Lf:case If:return Math.max(t,8)*Math.max(e,8)/2;case Uf:case Ff:case kf:case Bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Of:case Hl:case zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case jf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Qf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ed:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case td:case nd:case id:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rd:case sd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Gl:case od:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Wy(t){switch(t){case bn:case d_:return{byteLength:1,components:1};case ea:case h_:case Hi:return{byteLength:2,components:1};case ch:case uh:return{byteLength:2,components:4};case Si:case lh:case hi:return{byteLength:4,components:1};case p_:case m_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function L_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Xy(t){const e=new WeakMap;function n(a,l){const u=a.array,h=a.usage,p=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,h),a.onUploadCallback();let d;if(u instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)d=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=t.SHORT;else if(u instanceof Uint32Array)d=t.UNSIGNED_INT;else if(u instanceof Int32Array)d=t.INT;else if(u instanceof Int8Array)d=t.BYTE;else if(u instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,u){const h=l.array,p=l.updateRanges;if(t.bindBuffer(u,a),p.length===0)t.bufferSubData(u,0,h);else{p.sort((d,v)=>d.start-v.start);let c=0;for(let d=1;d<p.length;d++){const v=p[c],y=p[d];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++c,p[c]=y)}p.length=c+1;for(let d=0,v=p.length;d<v;d++){const y=p[d];t.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_M=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MM="gl_FragColor = linearToOutputTexel( gl_FragColor );",EM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ME=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,FE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,XE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:jy,alphahash_pars_fragment:Yy,alphamap_fragment:qy,alphamap_pars_fragment:$y,alphatest_fragment:Ky,alphatest_pars_fragment:Zy,aomap_fragment:Qy,aomap_pars_fragment:Jy,batching_pars_vertex:eM,batching_vertex:tM,begin_vertex:nM,beginnormal_vertex:iM,bsdfs:rM,iridescence_fragment:sM,bumpmap_pars_fragment:oM,clipping_planes_fragment:aM,clipping_planes_pars_fragment:lM,clipping_planes_pars_vertex:cM,clipping_planes_vertex:uM,color_fragment:fM,color_pars_fragment:dM,color_pars_vertex:hM,color_vertex:pM,common:mM,cube_uv_reflection_fragment:gM,defaultnormal_vertex:_M,displacementmap_pars_vertex:vM,displacementmap_vertex:xM,emissivemap_fragment:SM,emissivemap_pars_fragment:yM,colorspace_fragment:MM,colorspace_pars_fragment:EM,envmap_fragment:TM,envmap_common_pars_fragment:wM,envmap_pars_fragment:AM,envmap_pars_vertex:RM,envmap_physical_pars_fragment:kM,envmap_vertex:CM,fog_vertex:bM,fog_pars_vertex:PM,fog_fragment:LM,fog_pars_fragment:DM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:NM,lights_lambert_fragment:UM,lights_lambert_pars_fragment:FM,lights_pars_begin:OM,lights_toon_fragment:BM,lights_toon_pars_fragment:zM,lights_phong_fragment:VM,lights_phong_pars_fragment:HM,lights_physical_fragment:GM,lights_physical_pars_fragment:WM,lights_fragment_begin:XM,lights_fragment_maps:jM,lights_fragment_end:YM,lightprobes_pars_fragment:qM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:KM,logdepthbuf_pars_vertex:ZM,logdepthbuf_vertex:QM,map_fragment:JM,map_pars_fragment:eE,map_particle_fragment:tE,map_particle_pars_fragment:nE,metalnessmap_fragment:iE,metalnessmap_pars_fragment:rE,morphinstance_vertex:sE,morphcolor_vertex:oE,morphnormal_vertex:aE,morphtarget_pars_vertex:lE,morphtarget_vertex:cE,normal_fragment_begin:uE,normal_fragment_maps:fE,normal_pars_fragment:dE,normal_pars_vertex:hE,normal_vertex:pE,normalmap_pars_fragment:mE,clearcoat_normal_fragment_begin:gE,clearcoat_normal_fragment_maps:_E,clearcoat_pars_fragment:vE,iridescence_pars_fragment:xE,opaque_fragment:SE,packing:yE,premultiplied_alpha_fragment:ME,project_vertex:EE,dithering_fragment:TE,dithering_pars_fragment:wE,roughnessmap_fragment:AE,roughnessmap_pars_fragment:RE,shadowmap_pars_fragment:CE,shadowmap_pars_vertex:bE,shadowmap_vertex:PE,shadowmask_pars_fragment:LE,skinbase_vertex:DE,skinning_pars_vertex:IE,skinning_vertex:NE,skinnormal_vertex:UE,specularmap_fragment:FE,specularmap_pars_fragment:OE,tonemapping_fragment:kE,tonemapping_pars_fragment:BE,transmission_fragment:zE,transmission_pars_fragment:VE,uv_pars_fragment:HE,uv_pars_vertex:GE,uv_vertex:WE,worldpos_vertex:XE,background_vert:jE,background_frag:YE,backgroundCube_vert:qE,backgroundCube_frag:$E,cube_vert:KE,cube_frag:ZE,depth_vert:QE,depth_frag:JE,distance_vert:e1,distance_frag:t1,equirect_vert:n1,equirect_frag:i1,linedashed_vert:r1,linedashed_frag:s1,meshbasic_vert:o1,meshbasic_frag:a1,meshlambert_vert:l1,meshlambert_frag:c1,meshmatcap_vert:u1,meshmatcap_frag:f1,meshnormal_vert:d1,meshnormal_frag:h1,meshphong_vert:p1,meshphong_frag:m1,meshphysical_vert:g1,meshphysical_frag:_1,meshtoon_vert:v1,meshtoon_frag:x1,points_vert:S1,points_frag:y1,shadow_vert:M1,shadow_frag:E1,sprite_vert:T1,sprite_frag:w1},_e={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},fi={basic:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:ln([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:ln([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:ln([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:ln([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:ln([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:ln([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:ln([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:ln([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:ln([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:ln([_e.lights,_e.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};fi.physical={uniforms:ln([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Za={r:0,b:0,g:0},A1=new Nt,D_=new ke;D_.set(-1,0,0,0,1,0,0,0,1);function R1(t,e,n,i,r,s){const o=new $e(0);let a=r===!0?0:1,l,u,h=null,p=0,c=null;function d(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){const M=m.backgroundBlurriness>0;x=e.get(x,M)}return x}function v(m){let x=!1;const M=d(m);M===null?g(o,a):M&&M.isColor&&(g(M,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,x){const M=d(x);M&&(M.isCubeTexture||M.mapping===fc)?(u===void 0&&(u=new we(new dt(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Js(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(A1.makeRotationFromEuler(x.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(D_),u.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ot,(h!==M||p!==M.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,p=M.version,c=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new we(new dc(2,2),new yi({name:"BackgroundMaterial",uniforms:Js(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,c=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(Za,R_(t)),n.buffers.color.setClear(Za.r,Za.g,Za.b,x,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,x=1){o.set(m),a=x,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:v,addToRenderList:y,dispose:f}}function C1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=c(null);let s=r,o=!1;function a(L,F,j,K,N){let W=!1;const z=p(L,K,j,F);s!==z&&(s=z,u(s.object)),W=d(L,K,j,N),W&&v(L,K,j,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(L,F,j,K),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return t.createVertexArray()}function u(L){return t.bindVertexArray(L)}function h(L){return t.deleteVertexArray(L)}function p(L,F,j,K){const N=K.wireframe===!0;let W=i[F.id];W===void 0&&(W={},i[F.id]=W);const z=L.isInstancedMesh===!0?L.id:0;let B=W[z];B===void 0&&(B={},W[z]=B);let q=B[j.id];q===void 0&&(q={},B[j.id]=q);let ee=q[N];return ee===void 0&&(ee=c(l()),q[N]=ee),ee}function c(L){const F=[],j=[],K=[];for(let N=0;N<n;N++)F[N]=0,j[N]=0,K[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:K,object:L,attributes:{},index:null}}function d(L,F,j,K){const N=s.attributes,W=F.attributes;let z=0;const B=j.getAttributes();for(const q in B)if(B[q].location>=0){const le=N[q];let pe=W[q];if(pe===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),le===void 0||le.attribute!==pe||pe&&le.data!==pe.data)return!0;z++}return s.attributesNum!==z||s.index!==K}function v(L,F,j,K){const N={},W=F.attributes;let z=0;const B=j.getAttributes();for(const q in B)if(B[q].location>=0){let le=W[q];le===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(le=L.instanceColor));const pe={};pe.attribute=le,le&&le.data&&(pe.data=le.data),N[q]=pe,z++}s.attributes=N,s.attributesNum=z,s.index=K}function y(){const L=s.newAttributes;for(let F=0,j=L.length;F<j;F++)L[F]=0}function g(L){f(L,0)}function f(L,F){const j=s.newAttributes,K=s.enabledAttributes,N=s.attributeDivisors;j[L]=1,K[L]===0&&(t.enableVertexAttribArray(L),K[L]=1),N[L]!==F&&(t.vertexAttribDivisor(L,F),N[L]=F)}function m(){const L=s.newAttributes,F=s.enabledAttributes;for(let j=0,K=F.length;j<K;j++)F[j]!==L[j]&&(t.disableVertexAttribArray(j),F[j]=0)}function x(L,F,j,K,N,W,z){z===!0?t.vertexAttribIPointer(L,F,j,N,W):t.vertexAttribPointer(L,F,j,K,N,W)}function M(L,F,j,K){y();const N=K.attributes,W=j.getAttributes(),z=F.defaultAttributeValues;for(const B in W){const q=W[B];if(q.location>=0){let ee=N[B];if(ee===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){const le=ee.normalized,pe=ee.itemSize,Ve=e.get(ee);if(Ve===void 0)continue;const Xe=Ve.buffer,De=Ve.type,Z=Ve.bytesPerElement,de=De===t.INT||De===t.UNSIGNED_INT||ee.gpuType===lh;if(ee.isInterleavedBufferAttribute){const ue=ee.data,be=ue.stride,Ue=ee.offset;if(ue.isInstancedInterleavedBuffer){for(let Pe=0;Pe<q.locationSize;Pe++)f(q.location+Pe,ue.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Pe=0;Pe<q.locationSize;Pe++)g(q.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let Pe=0;Pe<q.locationSize;Pe++)x(q.location+Pe,pe/q.locationSize,De,le,be*Z,(Ue+pe/q.locationSize*Pe)*Z,de)}else{if(ee.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)f(q.location+ue,ee.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ue=0;ue<q.locationSize;ue++)g(q.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let ue=0;ue<q.locationSize;ue++)x(q.location+ue,pe/q.locationSize,De,le,pe*Z,pe/q.locationSize*ue*Z,de)}}else if(z!==void 0){const le=z[B];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(q.location,le);break;case 3:t.vertexAttrib3fv(q.location,le);break;case 4:t.vertexAttrib4fv(q.location,le);break;default:t.vertexAttrib1fv(q.location,le)}}}}m()}function R(){A();for(const L in i){const F=i[L];for(const j in F){const K=F[j];for(const N in K){const W=K[N];for(const z in W)h(W[z].object),delete W[z];delete K[N]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const j in F){const K=F[j];for(const N in K){const W=K[N];for(const z in W)h(W[z].object),delete W[z];delete K[N]}}delete i[L.id]}function b(L){for(const F in i){const j=i[F];for(const K in j){const N=j[K];if(N[L.id]===void 0)continue;const W=N[L.id];for(const z in W)h(W[z].object),delete W[z];delete N[L.id]}}}function _(L){for(const F in i){const j=i[F],K=L.isInstancedMesh===!0?L.id:0,N=j[K];if(N!==void 0){for(const W in N){const z=N[W];for(const B in z)h(z[B].object),delete z[B];delete N[W]}delete j[K],Object.keys(j).length===0&&delete i[F]}}}function A(){P(),o=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function b1(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let c=0;for(let d=0;d<h;d++)c+=u[d];n.update(c,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function P1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==ei&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const _=b===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==bn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==hi&&!_)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(Le("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,c=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&c===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:c,maxTextures:d,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:M,maxSamples:R,samples:T}}function L1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ir,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){const d=p.length!==0||c||i!==0||r;return r=c,i=p.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,c){n=h(p,c,0)},this.setState=function(p,c,d){const v=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,f=t.get(p);if(!r||v===null||v.length===0||s&&!g)s?h(null):u();else{const m=s?0:i,x=m*4;let M=f.clippingState||null;l.value=M,M=h(v,c,x,d);for(let R=0;R!==x;++R)M[R]=n[R];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,c,d,v){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const f=d+y*4,m=c.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let x=0,M=d;x!==y;++x,M+=4)o.copy(p[x]).applyMatrix4(m,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const fr=4,gm=[.125,.215,.35,.446,.526,.582],Fr=20,D1=256,So=new P_,_m=new $e;let gu=null,_u=0,vu=0,xu=!1;const I1=new U;class vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=I1}=s;gu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,_u,vu),this._renderer.xr.enabled=xu,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Kr||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Hi,format:ei,colorSpace:Wl,depthBuffer:!1},r=xm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N1(s)),this._blurMaterial=F1(s,e,n),this._ggxMaterial=U1(s,e,n)}return r}_compileMaterial(e){const n=new we(new Un,e);this._renderer.compile(n,So)}_sceneToCubeUV(e,n,i,r,s){const l=new _n(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,c=p.autoClear,d=p.toneMapping;p.getClearColor(_m),p.toneMapping=_i,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new dt,new Zs({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let f=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,f=!0):(g.color.copy(_m),f=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):M===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));const R=this._cubeSize;_s(r,M*R,x>2?R:0,R,R),p.setRenderTarget(r),f&&p.render(y,l),p.render(e,l)}p.toneMapping=d,p.autoClear=c,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Kr||e.mapping===Ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_s(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,So)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),c=0+u*1.25,d=p*c,{_lodMax:v}=this,y=this._sizeLods[i],g=3*y*(i>v-fr?i-v+fr:0),f=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=v-n,_s(s,g,f,3*y,2*y),r.setRenderTarget(s),r.render(a,So),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,_s(e,g,f,3*y,2*y),r.setRenderTarget(e),r.render(a,So)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=u;const c=u.uniforms,d=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fr-1),y=s/v,g=isFinite(s)?1+Math.floor(h*y):Fr;g>Fr&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fr}`);const f=[];let m=0;for(let b=0;b<Fr;++b){const _=b/y,A=Math.exp(-_*_/2);f.push(A),b===0?m+=A:b<g&&(m+=2*A)}for(let b=0;b<f.length;b++)f[b]=f[b]/m;c.envMap.value=e.texture,c.samples.value=g,c.weights.value=f,c.latitudinal.value=o==="latitudinal",a&&(c.poleAxis.value=a);const{_lodMax:x}=this;c.dTheta.value=v,c.mipInt.value=x-i;const M=this._sizeLods[r],R=3*M*(r>x-fr?r-x+fr:0),T=4*(this._cubeSize-M);_s(n,R,T,3*M,2*M),l.setRenderTarget(n),l.render(p,So)}}function N1(t){const e=[],n=[],i=[];let r=t;const s=t-fr+1+gm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-fr?l=gm[o-t+fr-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,p=1+u,c=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,v=6,y=3,g=2,f=1,m=new Float32Array(y*v*d),x=new Float32Array(g*v*d),M=new Float32Array(f*v*d);for(let T=0;T<d;T++){const b=T%3*2/3-1,_=T>2?0:-1,A=[b,_,0,b+2/3,_,0,b+2/3,_+1,0,b,_,0,b+2/3,_+1,0,b,_+1,0];m.set(A,y*v*T),x.set(c,g*v*T);const P=[T,T,T,T,T,T];M.set(P,f*v*T)}const R=new Un;R.setAttribute("position",new xi(m,y)),R.setAttribute("uv",new xi(x,g)),R.setAttribute("faceIndex",new xi(M,f)),i.push(new we(R,null)),r>fr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function xm(t,e,n){const i=new vi(t,e,n);return i.texture.mapping=fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function U1(t,e,n){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:D1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function F1(t,e,n){const i=new Float32Array(Fr),r=new U(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Sm(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ym(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class I_ extends vi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new w_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dt(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Fi});s.uniforms.tEquirect.value=n;const o=new we(r,s),a=n.minFilter;return n.minFilter===zr&&(n.minFilter=sn),new zy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function O1(t){let e=new WeakMap,n=new WeakMap,i=null;function r(c,d=!1){return c==null?null:d?o(c):s(c)}function s(c){if(c&&c.isTexture){const d=c.mapping;if(d===Hc||d===Gc)if(e.has(c)){const v=e.get(c).texture;return a(v,c.mapping)}else{const v=c.image;if(v&&v.height>0){const y=new I_(v.height);return y.fromEquirectangularTexture(t,c),e.set(c,y),c.addEventListener("dispose",u),a(y.texture,c.mapping)}else return null}}return c}function o(c){if(c&&c.isTexture){const d=c.mapping,v=d===Hc||d===Gc,y=d===Kr||d===Ks;if(v||y){let g=n.get(c);const f=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new vm(t)),g=v?i.fromEquirectangular(c,g):i.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,n.set(c,g),g.texture;if(g!==void 0)return g.texture;{const m=c.image;return v&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new vm(t)),g=v?i.fromEquirectangular(c):i.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,n.set(c,g),c.addEventListener("dispose",h),g.texture):null}}}return c}function a(c,d){return d===Hc?c.mapping=Kr:d===Gc&&(c.mapping=Ks),c}function l(c){let d=0;const v=6;for(let y=0;y<v;y++)c[y]!==void 0&&d++;return d===v}function u(c){const d=c.target;d.removeEventListener("dispose",u);const v=e.get(d);v!==void 0&&(e.delete(d),v.dispose())}function h(c){const d=c.target;d.removeEventListener("dispose",h);const v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function k1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ld("WebGLRenderer: "+i+" extension not supported."),r}}}function B1(t,e,n,i){const r={},s=new WeakMap;function o(p){const c=p.target;c.index!==null&&e.remove(c.index);for(const v in c.attributes)e.remove(c.attributes[v]);c.removeEventListener("dispose",o),delete r[c.id];const d=s.get(c);d&&(e.remove(d),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function a(p,c){return r[c.id]===!0||(c.addEventListener("dispose",o),r[c.id]=!0,n.memory.geometries++),c}function l(p){const c=p.attributes;for(const d in c)e.update(c[d],t.ARRAY_BUFFER)}function u(p){const c=[],d=p.index,v=p.attributes.position;let y=0;if(v===void 0)return;if(d!==null){const m=d.array;y=d.version;for(let x=0,M=m.length;x<M;x+=3){const R=m[x+0],T=m[x+1],b=m[x+2];c.push(R,T,T,b,b,R)}}else{const m=v.array;y=v.version;for(let x=0,M=m.length/3-1;x<M;x+=3){const R=x+0,T=x+1,b=x+2;c.push(R,T,T,b,b,R)}}const g=new(v.count>=65535?T_:E_)(c,1);g.version=y;const f=s.get(p);f&&e.remove(f),s.set(p,g)}function h(p){const c=s.get(p);if(c){const d=p.index;d!==null&&c.version<d.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function z1(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,c){t.drawElements(i,c,s,p*o),n.update(c,i,1)}function u(p,c,d){d!==0&&(t.drawElementsInstanced(i,c,s,p*o,d),n.update(c,i,d))}function h(p,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,s,p,0,d);let y=0;for(let g=0;g<d;g++)y+=c[g];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function V1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function H1(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let c=i.get(a);if(c===void 0||c.count!==p){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var d=P;c!==void 0&&c.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),g===!0&&(M=3);let R=a.attributes.position.count*M,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*T*4*p),_=new S_(b,R,T,p);_.type=hi,_.needsUpdate=!0;const A=M*4;for(let L=0;L<p;L++){const F=f[L],j=m[L],K=x[L],N=R*T*4*L;for(let W=0;W<F.count;W++){const z=W*A;v===!0&&(r.fromBufferAttribute(F,W),b[N+z+0]=r.x,b[N+z+1]=r.y,b[N+z+2]=r.z,b[N+z+3]=0),y===!0&&(r.fromBufferAttribute(j,W),b[N+z+4]=r.x,b[N+z+5]=r.y,b[N+z+6]=r.z,b[N+z+7]=0),g===!0&&(r.fromBufferAttribute(K,W),b[N+z+8]=r.x,b[N+z+9]=r.y,b[N+z+10]=r.z,b[N+z+11]=K.itemSize===4?r.w:1)}}c={count:p,texture:_,size:new nt(R,T)},i.set(a,c),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let g=0;g<u.length;g++)v+=u[g];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function G1(t,e,n,i,r){let s=new WeakMap;function o(u){const h=r.render.frame,p=u.geometry,c=e.get(u,p);if(s.get(c)!==h&&(e.update(c),s.set(c,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const d=u.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return c}function a(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}const W1={[s_]:"LINEAR_TONE_MAPPING",[o_]:"REINHARD_TONE_MAPPING",[a_]:"CINEON_TONE_MAPPING",[ah]:"ACES_FILMIC_TONE_MAPPING",[c_]:"AGX_TONE_MAPPING",[u_]:"NEUTRAL_TONE_MAPPING",[l_]:"CUSTOM_TONE_MAPPING"};function X1(t,e,n,i,r){const s=new vi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Qs(e,n):void 0}),o=new vi(e,n,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),a=new Un;a.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ut([0,2,0,0,2,0],2));const l=new Dy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new we(a,l),h=new P_(-1,1,1,-1,0,1);let p=null,c=null,d=!1,v,y=null,g=[],f=!1;this.setSize=function(m,x){s.setSize(m,x),o.setSize(m,x);for(let M=0;M<g.length;M++){const R=g[M];R.setSize&&R.setSize(m,x)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const x=s.width,M=s.height;for(let R=0;R<g.length;R++){const T=g[R];T.setSize&&T.setSize(x,M)}},this.begin=function(m,x){if(d||m.toneMapping===_i&&g.length===0)return!1;if(y=x,x!==null){const M=x.width,R=x.height;(s.width!==M||s.height!==R)&&this.setSize(M,R)}return f===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=_i,!0},this.hasRenderPass=function(){return f},this.end=function(m,x){m.toneMapping=v,d=!0;let M=s,R=o;for(let T=0;T<g.length;T++){const b=g[T];if(b.enabled!==!1&&(b.render(m,R,M,x),b.needsSwap!==!1)){const _=M;M=R,R=_}}if(p!==m.outputColorSpace||c!==m.toneMapping){p=m.outputColorSpace,c=m.toneMapping,l.defines={},Qe.getTransfer(p)===ot&&(l.defines.SRGB_TRANSFER="");const T=W1[c];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(y),m.render(u,h),y=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const N_=new dn,cd=new Qs(1,1),U_=new S_,F_=new ly,O_=new w_,Mm=[],Em=[],Tm=new Float32Array(16),wm=new Float32Array(9),Am=new Float32Array(4);function ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Mm[r];if(s===void 0&&(s=new Float32Array(r),Mm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mc(t,e){let n=Em[e];n===void 0&&(n=new Int32Array(e),Em[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function j1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function K1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Am.set(i),t.uniformMatrix2fv(this.addr,!1,Am),Vt(n,i)}}function Z1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;wm.set(i),t.uniformMatrix3fv(this.addr,!1,wm),Vt(n,i)}}function Q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Tm.set(i),t.uniformMatrix4fv(this.addr,!1,Tm),Vt(n,i)}}function J1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function aT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(cd.compareFunction=n.isReversedDepthBuffer()?mh:ph,s=cd):s=N_,n.setTexture2D(e||s,r)}function lT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||F_,r)}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||O_,r)}function uT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||U_,r)}function fT(t){switch(t){case 5126:return j1;case 35664:return Y1;case 35665:return q1;case 35666:return $1;case 35674:return K1;case 35675:return Z1;case 35676:return Q1;case 5124:case 35670:return J1;case 35667:case 35671:return eT;case 35668:case 35672:return tT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return rT;case 36295:return sT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return uT}}function dT(t,e){t.uniform1fv(this.addr,e)}function hT(t,e){const n=ro(e,this.size,2);t.uniform2fv(this.addr,n)}function pT(t,e){const n=ro(e,this.size,3);t.uniform3fv(this.addr,n)}function mT(t,e){const n=ro(e,this.size,4);t.uniform4fv(this.addr,n)}function gT(t,e){const n=ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _T(t,e){const n=ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vT(t,e){const n=ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xT(t,e){t.uniform1iv(this.addr,e)}function ST(t,e){t.uniform2iv(this.addr,e)}function yT(t,e){t.uniform3iv(this.addr,e)}function MT(t,e){t.uniform4iv(this.addr,e)}function ET(t,e){t.uniform1uiv(this.addr,e)}function TT(t,e){t.uniform2uiv(this.addr,e)}function wT(t,e){t.uniform3uiv(this.addr,e)}function AT(t,e){t.uniform4uiv(this.addr,e)}function RT(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=cd:o=N_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function CT(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||F_,s[o])}function bT(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||O_,s[o])}function PT(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||U_,s[o])}function LT(t){switch(t){case 5126:return dT;case 35664:return hT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return _T;case 35676:return vT;case 5124:case 35670:return xT;case 35667:case 35671:return ST;case 35668:case 35672:return yT;case 35669:case 35673:return MT;case 5125:return ET;case 36294:return TT;case 36295:return wT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return PT}}class DT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fT(n.type)}}class IT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LT(n.type)}}class NT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Su=/(\w+)(\])?(\[|\.)?/g;function Rm(t,e){t.seq.push(e),t.map[e.id]=e}function UT(t,e,n){const i=t.name,r=i.length;for(Su.lastIndex=0;;){const s=Su.exec(i),o=Su.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Rm(n,u===void 0?new DT(a,t,e):new IT(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new NT(a),Rm(n,p)),n=p}}}class _l{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);UT(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Cm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const FT=37297;let OT=0;function kT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const bm=new ke;function BT(t){Qe._getMatrix(bm,Qe.workingColorSpace,t);const e=`mat3( ${bm.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case Xl:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Pm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+kT(t.getShaderSource(e),a)}else return s}function zT(t,e){const n=BT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const VT={[s_]:"Linear",[o_]:"Reinhard",[a_]:"Cineon",[ah]:"ACESFilmic",[c_]:"AgX",[u_]:"Neutral",[l_]:"Custom"};function HT(t,e){const n=VT[e];return n===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qa=new U;function GT(){Qe.getLuminanceCoefficients(Qa);const t=Qa.x.toFixed(4),e=Qa.y.toFixed(4),n=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function XT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ro(t){return t!==""}function Lm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(t){return t.replace(YT,$T)}const qT=new Map;function $T(t,e){let n=Ge[e];if(n===void 0){const i=qT.get(e);if(i!==void 0)n=Ge[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ud(n)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(t){return t.replace(KT,ZT)}function ZT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const QT={[dl]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function JT(t){return QT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ew={[Kr]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[fc]:"ENVMAP_TYPE_CUBE_UV"};function tw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":ew[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const nw={[Ks]:"ENVMAP_MODE_REFRACTION"};function iw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":nw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rw={[r_]:"ENVMAP_BLENDING_MULTIPLY",[VS]:"ENVMAP_BLENDING_MIX",[HS]:"ENVMAP_BLENDING_ADD"};function sw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":rw[t.combine]||"ENVMAP_BLENDING_NONE"}function ow(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=JT(n),u=tw(n),h=iw(n),p=sw(n),c=ow(n),d=WT(n),v=XT(s),y=r.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ro).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ro).join(`
`),f.length>0&&(f+=`
`)):(g=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),f=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_i?"#define TONE_MAPPING":"",n.toneMapping!==_i?Ge.tonemapping_pars_fragment:"",n.toneMapping!==_i?HT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,zT("linearToOutputTexel",n.outputColorSpace),GT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ro).join(`
`)),o=ud(o),o=Lm(o,n),o=Dm(o,n),a=ud(a),a=Lm(a,n),a=Dm(a,n),o=Im(o),a=Im(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=m+g+o,M=m+f+a,R=Cm(r,r.VERTEX_SHADER,x),T=Cm(r,r.FRAGMENT_SHADER,M);r.attachShader(y,R),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(L){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y)||"",j=r.getShaderInfoLog(R)||"",K=r.getShaderInfoLog(T)||"",N=F.trim(),W=j.trim(),z=K.trim();let B=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,T);else{const ee=Pm(r,R,"vertex"),le=Pm(r,T,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+ee+`
`+le)}else N!==""?Le("WebGLProgram: Program Info Log:",N):(W===""||z==="")&&(q=!1);q&&(L.diagnostics={runnable:B,programLog:N,vertexShader:{log:W,prefix:g},fragmentShader:{log:z,prefix:f}})}r.deleteShader(R),r.deleteShader(T),_=new _l(r,y),A=jT(r,y)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,FT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=T,this}let lw=0;class cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uw(e),n.set(e,i)),i}}class uw{constructor(e){this.id=lw++,this.code=e,this.usedTimes=0}}function fw(t){return t===Zr||t===Hl||t===Gl}function dw(t,e,n,i,r,s){const o=new y_,a=new cw,l=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let c=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,A,P,L,F,j){const K=L.fog,N=F.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||W,z),q=B&&B.mapping===fc?B.image.height:null,ee=d[_.type];_.precision!==null&&(c=i.getMaxPrecision(_.precision),c!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",c,"instead."));const le=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,pe=le!==void 0?le.length:0;let Ve=0;N.morphAttributes.position!==void 0&&(Ve=1),N.morphAttributes.normal!==void 0&&(Ve=2),N.morphAttributes.color!==void 0&&(Ve=3);let Xe,De,Z,de;if(ee){const Oe=fi[ee];Xe=Oe.vertexShader,De=Oe.fragmentShader}else Xe=_.vertexShader,De=_.fragmentShader,a.update(_),Z=a.getVertexShaderID(_),de=a.getFragmentShaderID(_);const ue=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,Pe=F.isBatchedMesh===!0,pt=!!_.map,qe=!!_.matcap,it=!!B,lt=!!_.aoMap,ze=!!_.lightMap,Pt=!!_.bumpMap,mt=!!_.normalMap,Xt=!!_.displacementMap,I=!!_.emissiveMap,wt=!!_.metalnessMap,je=!!_.roughnessMap,rt=_.anisotropy>0,he=_.clearcoat>0,gt=_.dispersion>0,w=_.iridescence>0,S=_.sheen>0,k=_.transmission>0,Q=rt&&!!_.anisotropyMap,ne=he&&!!_.clearcoatMap,oe=he&&!!_.clearcoatNormalMap,fe=he&&!!_.clearcoatRoughnessMap,$=w&&!!_.iridescenceMap,J=w&&!!_.iridescenceThicknessMap,ge=S&&!!_.sheenColorMap,Se=S&&!!_.sheenRoughnessMap,ce=!!_.specularMap,ae=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Fe=k&&!!_.transmissionMap,D=k&&!!_.thicknessMap,C=!!_.gradientMap,V=!!_.alphaMap,X=_.alphaTest>0,me=!!_.alphaHash,re=!!_.extensions;let te=_i;_.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(te=t.toneMapping);const Te={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:Xe,fragmentShader:De,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:de,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:c,batching:Pe,batchingColor:Pe&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:pt,matcap:qe,envMap:it,envMapMode:it&&B.mapping,envMapCubeUVHeight:q,aoMap:lt,lightMap:ze,bumpMap:Pt,normalMap:mt,displacementMap:Xt,emissiveMap:I,normalMapObjectSpace:mt&&_.normalMapType===XS,normalMapTangentSpace:mt&&_.normalMapType===ad,packedNormalMap:mt&&_.normalMapType===ad&&fw(_.normalMap.format),metalnessMap:wt,roughnessMap:je,anisotropy:rt,anisotropyMap:Q,clearcoat:he,clearcoatMap:ne,clearcoatNormalMap:oe,clearcoatRoughnessMap:fe,dispersion:gt,iridescence:w,iridescenceMap:$,iridescenceThicknessMap:J,sheen:S,sheenColorMap:ge,sheenRoughnessMap:Se,specularMap:ce,specularColorMap:ae,specularIntensityMap:Ne,transmission:k,transmissionMap:Fe,thicknessMap:D,gradientMap:C,opaque:_.transparent===!1&&_.blending===zs&&_.alphaToCoverage===!1,alphaMap:V,alphaTest:X,alphaHash:me,combine:_.combine,mapUv:pt&&v(_.map.channel),aoMapUv:lt&&v(_.aoMap.channel),lightMapUv:ze&&v(_.lightMap.channel),bumpMapUv:Pt&&v(_.bumpMap.channel),normalMapUv:mt&&v(_.normalMap.channel),displacementMapUv:Xt&&v(_.displacementMap.channel),emissiveMapUv:I&&v(_.emissiveMap.channel),metalnessMapUv:wt&&v(_.metalnessMap.channel),roughnessMapUv:je&&v(_.roughnessMap.channel),anisotropyMapUv:Q&&v(_.anisotropyMap.channel),clearcoatMapUv:ne&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(_.sheenRoughnessMap.channel),specularMapUv:ce&&v(_.specularMap.channel),specularColorMapUv:ae&&v(_.specularColorMap.channel),specularIntensityMapUv:Ne&&v(_.specularIntensityMap.channel),transmissionMapUv:Fe&&v(_.transmissionMap.channel),thicknessMapUv:D&&v(_.thicknessMap.channel),alphaMapUv:V&&v(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(mt||rt),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(pt||V),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:be,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:pt&&_.map.isVideoTexture===!0&&Qe.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:I&&_.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Li,flipSided:_.side===En,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:re&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&_.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function g(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)A.push(P),A.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(f(A,_),m(A,_),A.push(t.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function f(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function m(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function x(_){const A=d[_.type];let P;if(A){const L=fi[A];P=by.clone(L.uniforms)}else P=_.uniforms;return P}function M(_,A){let P=h.get(A);return P!==void 0?++P.usedTimes:(P=new aw(t,A,_,r),u.push(P),h.set(A,P)),P}function R(_){if(--_.usedTimes===0){const A=u.indexOf(_);u[A]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function b(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:x,acquireProgram:M,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:b}}function hw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Um(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(c){let d=0;return c.isInstancedMesh&&(d+=2),c.isSkinnedMesh&&(d+=1),d}function a(c,d,v,y,g,f){let m=t[e];return m===void 0?(m={id:c.id,object:c,geometry:d,material:v,materialVariant:o(c),groupOrder:y,renderOrder:c.renderOrder,z:g,group:f},t[e]=m):(m.id=c.id,m.object=c,m.geometry=d,m.material=v,m.materialVariant=o(c),m.groupOrder=y,m.renderOrder=c.renderOrder,m.z=g,m.group=f),e++,m}function l(c,d,v,y,g,f){const m=a(c,d,v,y,g,f);v.transmission>0?i.push(m):v.transparent===!0?r.push(m):n.push(m)}function u(c,d,v,y,g,f){const m=a(c,d,v,y,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):n.unshift(m)}function h(c,d){n.length>1&&n.sort(c||pw),i.length>1&&i.sort(d||Um),r.length>1&&r.sort(d||Um)}function p(){for(let c=e,d=t.length;c<d;c++){const v=t[c];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:p,sort:h}}function mw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Fm,t.set(i,[o])):r>=s.length?(o=new Fm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new $e};break;case"SpotLight":n={position:new U,direction:new U,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function _w(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vw=0;function xw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Sw(t){const e=new gw,n=_w(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new Nt,o=new Nt;function a(u){let h=0,p=0,c=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,v=0,y=0,g=0,f=0,m=0,x=0,M=0,R=0,T=0,b=0;u.sort(xw);for(let A=0,P=u.length;A<P;A++){const L=u[A],F=L.color,j=L.intensity,K=L.distance;let N=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Zr?N=L.shadow.map.texture:N=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*j,p+=F.g*j,c+=F.b*j;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],j);b++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const z=L.shadow,B=n.get(L);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=L.shadow.matrix,m++}i.directional[d]=W,d++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(F).multiplyScalar(j),W.distance=K,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[y]=W;const z=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,z.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[y]=z.matrix,L.castShadow){const B=n.get(L);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,i.spotShadow[y]=B,i.spotShadowMap[y]=N,M++}y++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(F).multiplyScalar(j),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=W,g++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const z=L.shadow,B=n.get(L);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,B.shadowCameraNear=z.camera.near,B.shadowCameraFar=z.camera.far,i.pointShadow[v]=B,i.pointShadowMap[v]=N,i.pointShadowMatrix[v]=L.shadow.matrix,x++}i.point[v]=W,v++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(j),W.groundColor.copy(L.groundColor).multiplyScalar(j),i.hemi[f]=W,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=c;const _=i.hash;(_.directionalLength!==d||_.pointLength!==v||_.spotLength!==y||_.rectAreaLength!==g||_.hemiLength!==f||_.numDirectionalShadows!==m||_.numPointShadows!==x||_.numSpotShadows!==M||_.numSpotMaps!==R||_.numLightProbes!==b)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,_.directionalLength=d,_.pointLength=v,_.spotLength=y,_.rectAreaLength=g,_.hemiLength=f,_.numDirectionalShadows=m,_.numPointShadows=x,_.numSpotShadows=M,_.numSpotMaps=R,_.numLightProbes=b,i.version=vw++)}function l(u,h){let p=0,c=0,d=0,v=0,y=0;const g=h.matrixWorldInverse;for(let f=0,m=u.length;f<m;f++){const x=u[f];if(x.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(x.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const M=i.point[c];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),c++}else if(x.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function Om(t){const e=new Sw(t),n=[],i=[],r=[];function s(c){p.camera=c,n.length=0,i.length=0,r.length=0}function o(c){n.push(c)}function a(c){i.push(c)}function l(c){r.push(c)}function u(){e.setup(n)}function h(c){e.setupView(n,c)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function yw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Om(t),e.set(r,[a])):s>=o.length?(a=new Om(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const Mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ew=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tw=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ww=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],km=new Nt,yo=new U,yu=new U;function Aw(t,e,n){let i=new vh;const r=new nt,s=new nt,o=new bt,a=new Iy,l=new Ny,u={},h=n.maxTextureSize,p={[Mr]:En,[En]:Mr,[Li]:Li},c=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Mw,fragmentShader:Ew}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const v=new Un;v.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new we(v,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let f=this.type;this.render=function(T,b,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===i_&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=dl);const A=t.getRenderTarget(),P=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Fi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const j=f!==this.type;j&&b.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(N=>N.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,N=T.length;K<N;K++){const W=T[K],z=W.shadow;if(z===void 0){Le("WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const B=z.getFrameExtents();r.multiply(B),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/B.x),r.x=s.x*B.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/B.y),r.y=s.y*B.y,z.mapSize.y=s.y));const q=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||j===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ao){if(W.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new vi(r.x,r.y,{format:Zr,type:Hi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),z.map.texture.name=W.name+".shadowMap",z.map.depthTexture=new Qs(r.x,r.y,hi),z.map.depthTexture.name=W.name+".shadowMapDepth",z.map.depthTexture.format=Gi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt}else W.isPointLight?(z.map=new I_(r.x),z.map.depthTexture=new Ry(r.x,Si)):(z.map=new vi(r.x,r.y),z.map.depthTexture=new Qs(r.x,r.y,Si)),z.map.depthTexture.name=W.name+".shadowMap",z.map.depthTexture.format=Gi,this.type===dl?(z.map.depthTexture.compareFunction=q?mh:ph,z.map.depthTexture.minFilter=sn,z.map.depthTexture.magFilter=sn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt);z.camera.updateProjectionMatrix()}const ee=z.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<ee;le++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,le),t.clear();else{le===0&&(t.setRenderTarget(z.map),t.clear());const pe=z.getViewport(le);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),F.viewport(o)}if(W.isPointLight){const pe=z.camera,Ve=z.matrix,Xe=W.distance||pe.far;Xe!==pe.far&&(pe.far=Xe,pe.updateProjectionMatrix()),yo.setFromMatrixPosition(W.matrixWorld),pe.position.copy(yo),yu.copy(pe.position),yu.add(Tw[le]),pe.up.copy(ww[le]),pe.lookAt(yu),pe.updateMatrixWorld(),Ve.makeTranslation(-yo.x,-yo.y,-yo.z),km.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(km,pe.coordinateSystem,pe.reversedDepth)}else z.updateMatrices(W);i=z.getFrustum(),M(b,_,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===Ao&&m(z,_),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(A,P,L)};function m(T,b){const _=e.update(y);c.defines.VSM_SAMPLES!==T.blurSamples&&(c.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vi(r.x,r.y,{format:Zr,type:Hi})),c.uniforms.shadow_pass.value=T.map.depthTexture,c.uniforms.resolution.value=T.mapSize,c.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,_,c,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,_,d,y,null)}function x(T,b,_,A){let P=null;const L=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)P=L;else if(P=_.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const F=P.uuid,j=b.uuid;let K=u[F];K===void 0&&(K={},u[F]=K);let N=K[j];N===void 0&&(N=P.clone(),K[j]=N,b.addEventListener("dispose",R)),P=N}if(P.visible=b.visible,P.wireframe=b.wireframe,A===Ao?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:p[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=t.properties.get(P);F.light=_}return P}function M(T,b,_,A,P){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Ao)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const j=e.update(T),K=T.material;if(Array.isArray(K)){const N=j.groups;for(let W=0,z=N.length;W<z;W++){const B=N[W],q=K[B.materialIndex];if(q&&q.visible){const ee=x(T,q,A,P);T.onBeforeShadow(t,T,b,_,j,ee,B),t.renderBufferDirect(_,null,j,ee,T,B),T.onAfterShadow(t,T,b,_,j,ee,B)}}}else if(K.visible){const N=x(T,K,A,P);T.onBeforeShadow(t,T,b,_,j,N,null),t.renderBufferDirect(_,null,j,N,T,null),T.onAfterShadow(t,T,b,_,j,N,null)}}const F=T.children;for(let j=0,K=F.length;j<K;j++)M(F[j],b,_,A,P)}function R(T){T.target.removeEventListener("dispose",R);for(const _ in u){const A=u[_],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function Rw(t,e){function n(){let C=!1;const V=new bt;let X=null;const me=new bt(0,0,0,0);return{setMask:function(re){X!==re&&!C&&(t.colorMask(re,re,re,re),X=re)},setLocked:function(re){C=re},setClear:function(re,te,Te,Oe,At){At===!0&&(re*=Oe,te*=Oe,Te*=Oe),V.set(re,te,Te,Oe),me.equals(V)===!1&&(t.clearColor(re,te,Te,Oe),me.copy(V))},reset:function(){C=!1,X=null,me.set(-1,0,0,0)}}}function i(){let C=!1,V=!1,X=null,me=null,re=null;return{setReversed:function(te){if(V!==te){const Te=e.get("EXT_clip_control");te?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),V=te;const Oe=re;re=null,this.setClear(Oe)}},getReversed:function(){return V},setTest:function(te){te?ue(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(te){X!==te&&!C&&(t.depthMask(te),X=te)},setFunc:function(te){if(V&&(te=ty[te]),me!==te){switch(te){case Mf:t.depthFunc(t.NEVER);break;case Ef:t.depthFunc(t.ALWAYS);break;case Tf:t.depthFunc(t.LESS);break;case $s:t.depthFunc(t.LEQUAL);break;case wf:t.depthFunc(t.EQUAL);break;case Af:t.depthFunc(t.GEQUAL);break;case Rf:t.depthFunc(t.GREATER);break;case Cf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=te}},setLocked:function(te){C=te},setClear:function(te){re!==te&&(re=te,V&&(te=1-te),t.clearDepth(te))},reset:function(){C=!1,X=null,me=null,re=null,V=!1}}}function r(){let C=!1,V=null,X=null,me=null,re=null,te=null,Te=null,Oe=null,At=null;return{setTest:function(st){C||(st?ue(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(st){V!==st&&!C&&(t.stencilMask(st),V=st)},setFunc:function(st,Fn,ie){(X!==st||me!==Fn||re!==ie)&&(t.stencilFunc(st,Fn,ie),X=st,me=Fn,re=ie)},setOp:function(st,Fn,ie){(te!==st||Te!==Fn||Oe!==ie)&&(t.stencilOp(st,Fn,ie),te=st,Te=Fn,Oe=ie)},setLocked:function(st){C=st},setClear:function(st){At!==st&&(t.clearStencil(st),At=st)},reset:function(){C=!1,V=null,X=null,me=null,re=null,te=null,Te=null,Oe=null,At=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let h={},p={},c={},d=new WeakMap,v=[],y=null,g=!1,f=null,m=null,x=null,M=null,R=null,T=null,b=null,_=new $e(0,0,0),A=0,P=!1,L=null,F=null,j=null,K=null,N=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,B=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=B>=2);let ee=null,le={};const pe=t.getParameter(t.SCISSOR_BOX),Ve=t.getParameter(t.VIEWPORT),Xe=new bt().fromArray(pe),De=new bt().fromArray(Ve);function Z(C,V,X,me){const re=new Uint8Array(4),te=t.createTexture();t.bindTexture(C,te),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<X;Te++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(V,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(V+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return te}const de={};de[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(t.DEPTH_TEST),o.setFunc($s),Pt(!1),mt(zp),ue(t.CULL_FACE),lt(Fi);function ue(C){h[C]!==!0&&(t.enable(C),h[C]=!0)}function be(C){h[C]!==!1&&(t.disable(C),h[C]=!1)}function Ue(C,V){return c[C]!==V?(t.bindFramebuffer(C,V),c[C]=V,C===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=V),C===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=V),!0):!1}function Pe(C,V){let X=v,me=!1;if(C){X=d.get(V),X===void 0&&(X=[],d.set(V,X));const re=C.textures;if(X.length!==re.length||X[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Te=re.length;te<Te;te++)X[te]=t.COLOR_ATTACHMENT0+te;X.length=re.length,me=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,me=!0);me&&t.drawBuffers(X)}function pt(C){return y!==C?(t.useProgram(C),y=C,!0):!1}const qe={[Nr]:t.FUNC_ADD,[TS]:t.FUNC_SUBTRACT,[wS]:t.FUNC_REVERSE_SUBTRACT};qe[AS]=t.MIN,qe[RS]=t.MAX;const it={[CS]:t.ZERO,[bS]:t.ONE,[PS]:t.SRC_COLOR,[Sf]:t.SRC_ALPHA,[FS]:t.SRC_ALPHA_SATURATE,[NS]:t.DST_COLOR,[DS]:t.DST_ALPHA,[LS]:t.ONE_MINUS_SRC_COLOR,[yf]:t.ONE_MINUS_SRC_ALPHA,[US]:t.ONE_MINUS_DST_COLOR,[IS]:t.ONE_MINUS_DST_ALPHA,[OS]:t.CONSTANT_COLOR,[kS]:t.ONE_MINUS_CONSTANT_COLOR,[BS]:t.CONSTANT_ALPHA,[zS]:t.ONE_MINUS_CONSTANT_ALPHA};function lt(C,V,X,me,re,te,Te,Oe,At,st){if(C===Fi){g===!0&&(be(t.BLEND),g=!1);return}if(g===!1&&(ue(t.BLEND),g=!0),C!==ES){if(C!==f||st!==P){if((m!==Nr||R!==Nr)&&(t.blendEquation(t.FUNC_ADD),m=Nr,R=Nr),st)switch(C){case zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vp:t.blendFunc(t.ONE,t.ONE);break;case Hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",C);break}else switch(C){case zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Hp:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gp:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",C);break}x=null,M=null,T=null,b=null,_.set(0,0,0),A=0,f=C,P=st}return}re=re||V,te=te||X,Te=Te||me,(V!==m||re!==R)&&(t.blendEquationSeparate(qe[V],qe[re]),m=V,R=re),(X!==x||me!==M||te!==T||Te!==b)&&(t.blendFuncSeparate(it[X],it[me],it[te],it[Te]),x=X,M=me,T=te,b=Te),(Oe.equals(_)===!1||At!==A)&&(t.blendColor(Oe.r,Oe.g,Oe.b,At),_.copy(Oe),A=At),f=C,P=!1}function ze(C,V){C.side===Li?be(t.CULL_FACE):ue(t.CULL_FACE);let X=C.side===En;V&&(X=!X),Pt(X),C.blending===zs&&C.transparent===!1?lt(Fi):lt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),s.setMask(C.colorWrite);const me=C.stencilWrite;a.setTest(me),me&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),I(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(C){L!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),L=C)}function mt(C){C!==yS?(ue(t.CULL_FACE),C!==F&&(C===zp?t.cullFace(t.BACK):C===MS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),F=C}function Xt(C){C!==j&&(z&&t.lineWidth(C),j=C)}function I(C,V,X){C?(ue(t.POLYGON_OFFSET_FILL),(K!==V||N!==X)&&(K=V,N=X,o.getReversed()&&(V=-V),t.polygonOffset(V,X))):be(t.POLYGON_OFFSET_FILL)}function wt(C){C?ue(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function je(C){C===void 0&&(C=t.TEXTURE0+W-1),ee!==C&&(t.activeTexture(C),ee=C)}function rt(C,V,X){X===void 0&&(ee===null?X=t.TEXTURE0+W-1:X=ee);let me=le[X];me===void 0&&(me={type:void 0,texture:void 0},le[X]=me),(me.type!==C||me.texture!==V)&&(ee!==X&&(t.activeTexture(X),ee=X),t.bindTexture(C,V||de[C]),me.type=C,me.texture=V)}function he(){const C=le[ee];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function gt(){try{t.compressedTexImage2D(...arguments)}catch(C){et("WebGLState:",C)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(C){et("WebGLState:",C)}}function S(){try{t.texSubImage2D(...arguments)}catch(C){et("WebGLState:",C)}}function k(){try{t.texSubImage3D(...arguments)}catch(C){et("WebGLState:",C)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(C){et("WebGLState:",C)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(C){et("WebGLState:",C)}}function oe(){try{t.texStorage2D(...arguments)}catch(C){et("WebGLState:",C)}}function fe(){try{t.texStorage3D(...arguments)}catch(C){et("WebGLState:",C)}}function $(){try{t.texImage2D(...arguments)}catch(C){et("WebGLState:",C)}}function J(){try{t.texImage3D(...arguments)}catch(C){et("WebGLState:",C)}}function ge(C){return p[C]!==void 0?p[C]:t.getParameter(C)}function Se(C,V){p[C]!==V&&(t.pixelStorei(C,V),p[C]=V)}function ce(C){Xe.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),Xe.copy(C))}function ae(C){De.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),De.copy(C))}function Ne(C,V){let X=u.get(V);X===void 0&&(X=new WeakMap,u.set(V,X));let me=X.get(C);me===void 0&&(me=t.getUniformBlockIndex(V,C.name),X.set(C,me))}function Fe(C,V){const me=u.get(V).get(C);l.get(V)!==me&&(t.uniformBlockBinding(V,me,C.__bindingPointIndex),l.set(V,me))}function D(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},ee=null,le={},c={},d=new WeakMap,v=[],y=null,g=!1,f=null,m=null,x=null,M=null,R=null,T=null,b=null,_=new $e(0,0,0),A=0,P=!1,L=null,F=null,j=null,K=null,N=null,Xe.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:be,bindFramebuffer:Ue,drawBuffers:Pe,useProgram:pt,setBlending:lt,setMaterial:ze,setFlipSided:Pt,setCullFace:mt,setLineWidth:Xt,setPolygonOffset:I,setScissorTest:wt,activeTexture:je,bindTexture:rt,unbindTexture:he,compressedTexImage2D:gt,compressedTexImage3D:w,texImage2D:$,texImage3D:J,pixelStorei:Se,getParameter:ge,updateUBOMapping:Ne,uniformBlockBinding:Fe,texStorage2D:oe,texStorage3D:fe,texSubImage2D:S,texSubImage3D:k,compressedTexSubImage2D:Q,compressedTexSubImage3D:ne,scissor:ce,viewport:ae,reset:D}}function Cw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,h=new WeakMap,p=new Set;let c;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,S){return v?new OffscreenCanvas(w,S):jl("canvas")}function g(w,S,k){let Q=1;const ne=gt(w);if((ne.width>k||ne.height>k)&&(Q=k/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const oe=Math.floor(Q*ne.width),fe=Math.floor(Q*ne.height);c===void 0&&(c=y(oe,fe));const $=S?y(oe,fe):c;return $.width=oe,$.height=fe,$.getContext("2d").drawImage(w,0,0,oe,fe),Le("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+oe+"x"+fe+")."),$}else return"data"in w&&Le("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function f(w){return w.generateMipmaps}function m(w){t.generateMipmap(w)}function x(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(w,S,k,Q,ne,oe=!1){if(w!==null){if(t[w]!==void 0)return t[w];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe;Q&&(fe=e.get("EXT_texture_norm16"),fe||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===t.RED&&(k===t.FLOAT&&($=t.R32F),k===t.HALF_FLOAT&&($=t.R16F),k===t.UNSIGNED_BYTE&&($=t.R8),k===t.UNSIGNED_SHORT&&fe&&($=fe.R16_EXT),k===t.SHORT&&fe&&($=fe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.R8UI),k===t.UNSIGNED_SHORT&&($=t.R16UI),k===t.UNSIGNED_INT&&($=t.R32UI),k===t.BYTE&&($=t.R8I),k===t.SHORT&&($=t.R16I),k===t.INT&&($=t.R32I)),S===t.RG&&(k===t.FLOAT&&($=t.RG32F),k===t.HALF_FLOAT&&($=t.RG16F),k===t.UNSIGNED_BYTE&&($=t.RG8),k===t.UNSIGNED_SHORT&&fe&&($=fe.RG16_EXT),k===t.SHORT&&fe&&($=fe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.RG8UI),k===t.UNSIGNED_SHORT&&($=t.RG16UI),k===t.UNSIGNED_INT&&($=t.RG32UI),k===t.BYTE&&($=t.RG8I),k===t.SHORT&&($=t.RG16I),k===t.INT&&($=t.RG32I)),S===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.RGB8UI),k===t.UNSIGNED_SHORT&&($=t.RGB16UI),k===t.UNSIGNED_INT&&($=t.RGB32UI),k===t.BYTE&&($=t.RGB8I),k===t.SHORT&&($=t.RGB16I),k===t.INT&&($=t.RGB32I)),S===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.RGBA8UI),k===t.UNSIGNED_SHORT&&($=t.RGBA16UI),k===t.UNSIGNED_INT&&($=t.RGBA32UI),k===t.BYTE&&($=t.RGBA8I),k===t.SHORT&&($=t.RGBA16I),k===t.INT&&($=t.RGBA32I)),S===t.RGB&&(k===t.UNSIGNED_SHORT&&fe&&($=fe.RGB16_EXT),k===t.SHORT&&fe&&($=fe.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),S===t.RGBA){const J=oe?Xl:Qe.getTransfer(ne);k===t.FLOAT&&($=t.RGBA32F),k===t.HALF_FLOAT&&($=t.RGBA16F),k===t.UNSIGNED_BYTE&&($=J===ot?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&fe&&($=fe.RGBA16_EXT),k===t.SHORT&&fe&&($=fe.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function R(w,S){let k;return w?S===null||S===Si||S===ta?k=t.DEPTH24_STENCIL8:S===hi?k=t.DEPTH32F_STENCIL8:S===ea&&(k=t.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Si||S===ta?k=t.DEPTH_COMPONENT24:S===hi?k=t.DEPTH_COMPONENT32F:S===ea&&(k=t.DEPTH_COMPONENT16),k}function T(w,S){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Yt&&w.minFilter!==sn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function b(w){const S=w.target;S.removeEventListener("dispose",b),A(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&p.delete(S)}function _(w){const S=w.target;S.removeEventListener("dispose",_),L(S)}function A(w){const S=i.get(w);if(S.__webglInit===void 0)return;const k=w.source,Q=d.get(k);if(Q){const ne=Q[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(w),Object.keys(Q).length===0&&d.delete(k)}i.remove(w)}function P(w){const S=i.get(w);t.deleteTexture(S.__webglTexture);const k=w.source,Q=d.get(k);delete Q[S.__cacheKey],o.memory.textures--}function L(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ne=0;ne<S.__webglFramebuffer[Q].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[Q][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=w.textures;for(let Q=0,ne=k.length;Q<ne;Q++){const oe=i.get(k[Q]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(w)}let F=0;function j(){F=0}function K(){return F}function N(w){F=w}function W(){const w=F;return w>=r.maxTextures&&Le("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),F+=1,w}function z(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function B(w,S){const k=i.get(w);if(w.isVideoTexture&&rt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){const Q=w.image;if(Q===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{be(k,w,S);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function q(w,S){const k=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){be(k,w,S);return}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function ee(w,S){const k=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){be(k,w,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function le(w,S){const k=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&k.__version!==w.version){Ue(k,w,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}const pe={[bf]:t.REPEAT,[Ni]:t.CLAMP_TO_EDGE,[Pf]:t.MIRRORED_REPEAT},Ve={[Yt]:t.NEAREST,[GS]:t.NEAREST_MIPMAP_NEAREST,[La]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Wc]:t.LINEAR_MIPMAP_NEAREST,[zr]:t.LINEAR_MIPMAP_LINEAR},Xe={[jS]:t.NEVER,[ZS]:t.ALWAYS,[YS]:t.LESS,[ph]:t.LEQUAL,[qS]:t.EQUAL,[mh]:t.GEQUAL,[$S]:t.GREATER,[KS]:t.NOTEQUAL};function De(w,S){if(S.type===hi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===sn||S.magFilter===Wc||S.magFilter===La||S.magFilter===zr||S.minFilter===sn||S.minFilter===Wc||S.minFilter===La||S.minFilter===zr)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,pe[S.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,pe[S.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,pe[S.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Ve[S.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Ve[S.minFilter]),S.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yt||S.minFilter!==La&&S.minFilter!==zr||S.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Z(w,S){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",b));const Q=S.source;let ne=d.get(Q);ne===void 0&&(ne={},d.set(Q,ne));const oe=z(S);if(oe!==w.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ne[oe].usedTimes++;const fe=ne[w.__cacheKey];fe!==void 0&&(ne[w.__cacheKey].usedTimes--,fe.usedTimes===0&&P(S)),w.__cacheKey=oe,w.__webglTexture=ne[oe].texture}return k}function de(w,S,k){return Math.floor(Math.floor(w/k)/S)}function ue(w,S,k,Q){const oe=w.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,k,Q,S.data);else{oe.sort((Se,ce)=>Se.start-ce.start);let fe=0;for(let Se=1;Se<oe.length;Se++){const ce=oe[fe],ae=oe[Se],Ne=ce.start+ce.count,Fe=de(ae.start,S.width,4),D=de(ce.start,S.width,4);ae.start<=Ne+1&&Fe===D&&de(ae.start+ae.count-1,S.width,4)===Fe?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++fe,oe[fe]=ae)}oe.length=fe+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Se=0,ce=oe.length;Se<ce;Se++){const ae=oe[Se],Ne=Math.floor(ae.start/4),Fe=Math.ceil(ae.count/4),D=Ne%S.width,C=Math.floor(Ne/S.width),V=Fe,X=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,D),n.pixelStorei(t.UNPACK_SKIP_ROWS,C),n.texSubImage2D(t.TEXTURE_2D,0,D,C,V,X,k,Q,S.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function be(w,S,k){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const ne=Z(w,S),oe=S.source;n.bindTexture(Q,w.__webglTexture,t.TEXTURE0+k);const fe=i.get(oe);if(oe.version!==fe.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const X=Qe.getPrimaries(Qe.workingColorSpace),me=S.colorSpace===ar?null:Qe.getPrimaries(S.colorSpace),re=S.colorSpace===ar||X===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let J=g(S.image,!1,r.maxTextureSize);J=he(S,J);const ge=s.convert(S.format,S.colorSpace),Se=s.convert(S.type);let ce=M(S.internalFormat,ge,Se,S.normalized,S.colorSpace,S.isVideoTexture);De(Q,S);let ae;const Ne=S.mipmaps,Fe=S.isVideoTexture!==!0,D=fe.__version===void 0||ne===!0,C=oe.dataReady,V=T(S,J);if(S.isDepthTexture)ce=R(S.format===Vr,S.type),D&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,ce,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,ge,Se,null));else if(S.isDataTexture)if(Ne.length>0){Fe&&D&&n.texStorage2D(t.TEXTURE_2D,V,ce,Ne[0].width,Ne[0].height);for(let X=0,me=Ne.length;X<me;X++)ae=Ne[X],Fe?C&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ae.width,ae.height,ge,Se,ae.data):n.texImage2D(t.TEXTURE_2D,X,ce,ae.width,ae.height,0,ge,Se,ae.data);S.generateMipmaps=!1}else Fe?(D&&n.texStorage2D(t.TEXTURE_2D,V,ce,J.width,J.height),C&&ue(S,J,ge,Se)):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,ge,Se,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&D&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,ce,Ne[0].width,Ne[0].height,J.depth);for(let X=0,me=Ne.length;X<me;X++)if(ae=Ne[X],S.format!==ei)if(ge!==null)if(Fe){if(C)if(S.layerUpdates.size>0){const re=mm(ae.width,ae.height,S.format,S.type);for(const te of S.layerUpdates){const Te=ae.data.subarray(te*re/ae.data.BYTES_PER_ELEMENT,(te+1)*re/ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,te,ae.width,ae.height,1,ge,Te)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ae.width,ae.height,J.depth,ge,ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,ce,ae.width,ae.height,J.depth,0,ae.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?C&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ae.width,ae.height,J.depth,ge,Se,ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,ce,ae.width,ae.height,J.depth,0,ge,Se,ae.data)}else{Fe&&D&&n.texStorage2D(t.TEXTURE_2D,V,ce,Ne[0].width,Ne[0].height);for(let X=0,me=Ne.length;X<me;X++)ae=Ne[X],S.format!==ei?ge!==null?Fe?C&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ae.width,ae.height,ge,ae.data):n.compressedTexImage2D(t.TEXTURE_2D,X,ce,ae.width,ae.height,0,ae.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?C&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ae.width,ae.height,ge,Se,ae.data):n.texImage2D(t.TEXTURE_2D,X,ce,ae.width,ae.height,0,ge,Se,ae.data)}else if(S.isDataArrayTexture)if(Fe){if(D&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,ce,J.width,J.height,J.depth),C)if(S.layerUpdates.size>0){const X=mm(J.width,J.height,S.format,S.type);for(const me of S.layerUpdates){const re=J.data.subarray(me*X/J.data.BYTES_PER_ELEMENT,(me+1)*X/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,J.width,J.height,1,ge,Se,re)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ge,Se,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,ge,Se,J.data);else if(S.isData3DTexture)Fe?(D&&n.texStorage3D(t.TEXTURE_3D,V,ce,J.width,J.height,J.depth),C&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ge,Se,J.data)):n.texImage3D(t.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,ge,Se,J.data);else if(S.isFramebufferTexture){if(D)if(Fe)n.texStorage2D(t.TEXTURE_2D,V,ce,J.width,J.height);else{let X=J.width,me=J.height;for(let re=0;re<V;re++)n.texImage2D(t.TEXTURE_2D,re,ce,X,me,0,ge,Se,null),X>>=1,me>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const X=t.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),J.parentNode!==X){X.appendChild(J),p.add(S),X.onpaint=Oe=>{const At=Oe.changedElements;for(const st of p)At.includes(st.image)&&(st.needsUpdate=!0)},X.requestPaint();return}const me=0,re=t.RGBA,te=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,me,re,te,Te,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Fe&&D){const X=gt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,V,ce,X.width,X.height)}for(let X=0,me=Ne.length;X<me;X++)ae=Ne[X],Fe?C&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge,Se,ae):n.texImage2D(t.TEXTURE_2D,X,ce,ge,Se,ae);S.generateMipmaps=!1}else if(Fe){if(D){const X=gt(J);n.texStorage2D(t.TEXTURE_2D,V,ce,X.width,X.height)}C&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Se,J)}else n.texImage2D(t.TEXTURE_2D,0,ce,ge,Se,J);f(S)&&m(Q),fe.__version=oe.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Ue(w,S,k){if(S.image.length!==6)return;const Q=Z(w,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+k);const oe=i.get(ne);if(ne.version!==oe.__version||Q===!0){n.activeTexture(t.TEXTURE0+k);const fe=Qe.getPrimaries(Qe.workingColorSpace),$=S.colorSpace===ar?null:Qe.getPrimaries(S.colorSpace),J=S.colorSpace===ar||fe===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ge=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,ce=[];for(let te=0;te<6;te++)!ge&&!Se?ce[te]=g(S.image[te],!0,r.maxCubemapSize):ce[te]=Se?S.image[te].image:S.image[te],ce[te]=he(S,ce[te]);const ae=ce[0],Ne=s.convert(S.format,S.colorSpace),Fe=s.convert(S.type),D=M(S.internalFormat,Ne,Fe,S.normalized,S.colorSpace),C=S.isVideoTexture!==!0,V=oe.__version===void 0||Q===!0,X=ne.dataReady;let me=T(S,ae);De(t.TEXTURE_CUBE_MAP,S);let re;if(ge){C&&V&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,D,ae.width,ae.height);for(let te=0;te<6;te++){re=ce[te].mipmaps;for(let Te=0;Te<re.length;Te++){const Oe=re[Te];S.format!==ei?Ne!==null?C?X&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,Oe.width,Oe.height,Ne,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,D,Oe.width,Oe.height,0,Oe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,Oe.width,Oe.height,Ne,Fe,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,D,Oe.width,Oe.height,0,Ne,Fe,Oe.data)}}}else{if(re=S.mipmaps,C&&V){re.length>0&&me++;const te=gt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,D,te.width,te.height)}for(let te=0;te<6;te++)if(Se){C?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce[te].width,ce[te].height,Ne,Fe,ce[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,D,ce[te].width,ce[te].height,0,Ne,Fe,ce[te].data);for(let Te=0;Te<re.length;Te++){const At=re[Te].image[te].image;C?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,At.width,At.height,Ne,Fe,At.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,D,At.width,At.height,0,Ne,Fe,At.data)}}else{C?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,Fe,ce[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,D,Ne,Fe,ce[te]);for(let Te=0;Te<re.length;Te++){const Oe=re[Te];C?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,Ne,Fe,Oe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,D,Ne,Fe,Oe.image[te])}}}f(S)&&m(t.TEXTURE_CUBE_MAP),oe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Pe(w,S,k,Q,ne,oe){const fe=s.convert(k.format,k.colorSpace),$=s.convert(k.type),J=M(k.internalFormat,fe,$,k.normalized,k.colorSpace),ge=i.get(S),Se=i.get(k);if(Se.__renderTarget=S,!ge.__hasExternalTextures){const ce=Math.max(1,S.width>>oe),ae=Math.max(1,S.height>>oe);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,oe,J,ce,ae,S.depth,0,fe,$,null):n.texImage2D(ne,oe,J,ce,ae,0,fe,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),je(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ne,Se.__webglTexture,0,wt(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ne,Se.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pt(w,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,w),S.depthBuffer){const Q=S.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,oe=R(S.stencilBuffer,ne),fe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;je(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,wt(S),oe,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,wt(S),oe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,oe,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,w)}else{const Q=S.textures;for(let ne=0;ne<Q.length;ne++){const oe=Q[ne],fe=s.convert(oe.format,oe.colorSpace),$=s.convert(oe.type),J=M(oe.internalFormat,fe,$,oe.normalized,oe.colorSpace);je(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,wt(S),J,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,wt(S),J,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,J,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(w,S,k){const Q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(S.depthTexture);if(ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,S.depthTexture.addEventListener("dispose",b)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),De(t.TEXTURE_CUBE_MAP,S.depthTexture);const ge=s.convert(S.depthTexture.format),Se=s.convert(S.depthTexture.type);let ce;S.depthTexture.format===Gi?ce=t.DEPTH_COMPONENT24:S.depthTexture.format===Vr&&(ce=t.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ce,S.width,S.height,0,ge,Se,null)}}else B(S.depthTexture,0);const oe=ne.__webglTexture,fe=wt(S),$=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,J=S.depthTexture.format===Vr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Gi)je(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,oe,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,oe,0);else if(S.depthTexture.format===Vr)je(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,oe,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,oe,0);else throw new Error("Unknown depthTexture format")}function it(w){const S=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=Q}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let Q=0;Q<6;Q++)qe(S.__webglFramebuffer[Q],w,Q);else{const Q=w.texture.mipmaps;Q&&Q.length>0?qe(S.__webglFramebuffer[0],w,0):qe(S.__webglFramebuffer,w,0)}else if(k){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=t.createRenderbuffer(),pt(S.__webglDepthbuffer[Q],w,!1);else{const ne=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,oe)}}else{const Q=w.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),pt(S.__webglDepthbuffer,w,!1);else{const ne=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function lt(w,S,k){const Q=i.get(w);S!==void 0&&Pe(Q.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&it(w)}function ze(w){const S=w.texture,k=i.get(w),Q=i.get(S);w.addEventListener("dispose",_);const ne=w.textures,oe=w.isWebGLCubeRenderTarget===!0,fe=ne.length>1;if(fe||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,o.memory.textures++),oe){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let J=0;J<S.mipmaps.length;J++)k.__webglFramebuffer[$][J]=t.createFramebuffer()}else k.__webglFramebuffer[$]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)k.__webglFramebuffer[$]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(fe)for(let $=0,J=ne.length;$<J;$++){const ge=i.get(ne[$]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),o.memory.textures++)}if(w.samples>0&&je(w)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<ne.length;$++){const J=ne[$];k.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[$]);const ge=s.convert(J.format,J.colorSpace),Se=s.convert(J.type),ce=M(J.internalFormat,ge,Se,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),ae=wt(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,ce,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,k.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),pt(k.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),De(t.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Pe(k.__webglFramebuffer[$][J],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Pe(k.__webglFramebuffer[$],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(S)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let $=0,J=ne.length;$<J;$++){const ge=ne[$],Se=i.get(ge);let ce=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Se.__webglTexture),De(ce,ge),Pe(k.__webglFramebuffer,w,ge,t.COLOR_ATTACHMENT0+$,ce,0),f(ge)&&m(ce)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,Q.__webglTexture),De($,S),S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Pe(k.__webglFramebuffer[J],w,S,t.COLOR_ATTACHMENT0,$,J);else Pe(k.__webglFramebuffer,w,S,t.COLOR_ATTACHMENT0,$,0);f(S)&&m($),n.unbindTexture()}w.depthBuffer&&it(w)}function Pt(w){const S=w.textures;for(let k=0,Q=S.length;k<Q;k++){const ne=S[k];if(f(ne)){const oe=x(w),fe=i.get(ne).__webglTexture;n.bindTexture(oe,fe),m(oe),n.unbindTexture()}}}const mt=[],Xt=[];function I(w){if(w.samples>0){if(je(w)===!1){const S=w.textures,k=w.width,Q=w.height;let ne=t.COLOR_BUFFER_BIT;const oe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(w),$=S.length>1;if($)for(let ge=0;ge<S.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const J=w.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const Se=i.get(S[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,k,Q,0,0,k,Q,ne,t.NEAREST),l===!0&&(mt.length=0,Xt.length=0,mt.push(t.COLOR_ATTACHMENT0+ge),w.depthBuffer&&w.resolveDepthBuffer===!1&&(mt.push(oe),Xt.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Xt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let ge=0;ge<S.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const Se=i.get(S[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function wt(w){return Math.min(r.maxSamples,w.samples)}function je(w){const S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function rt(w){const S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function he(w,S){const k=w.colorSpace,Q=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Wl&&k!==ar&&(Qe.getTransfer(k)===ot?(Q!==ei||ne!==bn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",k)),S}function gt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.getTextureUnits=K,this.setTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=le,this.rebindTextures=lt,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function bw(t,e){function n(i,r=ar){let s;const o=Qe.getTransfer(r);if(i===bn)return t.UNSIGNED_BYTE;if(i===ch)return t.UNSIGNED_SHORT_4_4_4_4;if(i===uh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===p_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===m_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===d_)return t.BYTE;if(i===h_)return t.SHORT;if(i===ea)return t.UNSIGNED_SHORT;if(i===lh)return t.INT;if(i===Si)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===Hi)return t.HALF_FLOAT;if(i===g_)return t.ALPHA;if(i===__)return t.RGB;if(i===ei)return t.RGBA;if(i===Gi)return t.DEPTH_COMPONENT;if(i===Vr)return t.DEPTH_STENCIL;if(i===v_)return t.RED;if(i===fh)return t.RED_INTEGER;if(i===Zr)return t.RG;if(i===dh)return t.RG_INTEGER;if(i===hh)return t.RGBA_INTEGER;if(i===hl||i===pl||i===ml||i===gl)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lf||i===Df||i===If||i===Nf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Df)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===If)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uf||i===Ff||i===Of||i===kf||i===Bf||i===Hl||i===zf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Uf||i===Ff)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Of)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===kf)return s.COMPRESSED_R11_EAC;if(i===Bf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Hl)return s.COMPRESSED_RG11_EAC;if(i===zf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vf||i===Hf||i===Gf||i===Wf||i===Xf||i===jf||i===Yf||i===qf||i===$f||i===Kf||i===Zf||i===Qf||i===Jf||i===ed)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$f)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ed)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===td||i===nd||i===id)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===td)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===id)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rd||i===sd||i===Gl||i===od)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===od)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ta?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Pw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new A_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yi({vertexShader:Pw,fragmentShader:Lw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new we(new dc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iw extends Ar{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,p=null,c=null,d=null,v=null;const y=typeof XRWebGLBinding<"u",g=new Dw,f={},m=n.getContextAttributes();let x=null,M=null;const R=[],T=[],b=new nt;let _=null;const A=new _n;A.viewport=new bt;const P=new _n;P.viewport=new bt;const L=[A,P],F=new Vy;let j=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=R[Z];return de===void 0&&(de=new Qc,R[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=R[Z];return de===void 0&&(de=new Qc,R[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=R[Z];return de===void 0&&(de=new Qc,R[Z]=de),de.getHandSpace()};function N(Z){const de=T.indexOf(Z.inputSource);if(de===-1)return;const ue=R[de];ue!==void 0&&(ue.update(Z.inputSource,Z.frame,u||o),ue.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",z);for(let Z=0;Z<R.length;Z++){const de=T[Z];de!==null&&(T[Z]=null,R[Z].disconnect(de))}j=null,K=null,g.reset();for(const Z in f)delete f[Z];e.setRenderTarget(x),d=null,c=null,p=null,r=null,M=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",W),r.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(b),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,be=null,Ue=null;m.depth&&(Ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=m.stencil?Vr:Gi,be=m.stencil?ta:Si);const Pe={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};p=this.getBinding(),c=p.createProjectionLayer(Pe),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),M=new vi(c.textureWidth,c.textureHeight,{format:ei,type:bn,depthTexture:new Qs(c.textureWidth,c.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new vi(d.framebufferWidth,d.framebufferHeight,{format:ei,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(Z){for(let de=0;de<Z.removed.length;de++){const ue=Z.removed[de],be=T.indexOf(ue);be>=0&&(T[be]=null,R[be].disconnect(ue))}for(let de=0;de<Z.added.length;de++){const ue=Z.added[de];let be=T.indexOf(ue);if(be===-1){for(let Pe=0;Pe<R.length;Pe++)if(Pe>=T.length){T.push(ue),be=Pe;break}else if(T[Pe]===null){T[Pe]=ue,be=Pe;break}if(be===-1)break}const Ue=R[be];Ue&&Ue.connect(ue)}}const B=new U,q=new U;function ee(Z,de,ue){B.setFromMatrixPosition(de.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);const be=B.distanceTo(q),Ue=de.projectionMatrix.elements,Pe=ue.projectionMatrix.elements,pt=Ue[14]/(Ue[10]-1),qe=Ue[14]/(Ue[10]+1),it=(Ue[9]+1)/Ue[5],lt=(Ue[9]-1)/Ue[5],ze=(Ue[8]-1)/Ue[0],Pt=(Pe[8]+1)/Pe[0],mt=pt*ze,Xt=pt*Pt,I=be/(-ze+Pt),wt=I*-ze;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(I),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ue[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const je=pt+I,rt=qe+I,he=mt-wt,gt=Xt+(be-wt),w=it*qe/rt*je,S=lt*qe/rt*je;Z.projectionMatrix.makePerspective(he,gt,w,S,je,rt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let de=Z.near,ue=Z.far;g.texture!==null&&(g.depthNear>0&&(de=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),F.near=P.near=A.near=de,F.far=P.far=A.far=ue,(j!==F.near||K!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),j=F.near,K=F.far),F.layers.mask=Z.layers.mask|6,A.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const be=Z.parent,Ue=F.cameras;le(F,be);for(let Pe=0;Pe<Ue.length;Pe++)le(Ue[Pe],be);Ue.length===2?ee(F,A,P):F.projectionMatrix.copy(A.projectionMatrix),pe(Z,F,be)};function pe(Z,de,ue){ue===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(ue.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Yl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(c===null&&d===null))return l},this.setFoveation=function(Z){l=Z,c!==null&&(c.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Z){return f[Z]};let Ve=null;function Xe(Z,de){if(h=de.getViewerPose(u||o),v=de,h!==null){const ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let be=!1;ue.length!==F.cameras.length&&(F.cameras.length=0,be=!0);for(let qe=0;qe<ue.length;qe++){const it=ue[qe];let lt=null;if(d!==null)lt=d.getViewport(it);else{const Pt=p.getViewSubImage(c,it);lt=Pt.viewport,qe===0&&(e.setRenderTargetTextures(M,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(M))}let ze=L[qe];ze===void 0&&(ze=new _n,ze.layers.enable(qe),ze.viewport=new bt,L[qe]=ze),ze.matrix.fromArray(it.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(it.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(lt.x,lt.y,lt.width,lt.height),qe===0&&(F.matrix.copy(ze.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),be===!0&&F.cameras.push(ze)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){p=i.getBinding();const qe=p.getDepthInformation(ue[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,r.renderState)}if(Ue&&Ue.includes("camera-access")&&y){e.state.unbindTexture(),p=i.getBinding();for(let qe=0;qe<ue.length;qe++){const it=ue[qe].camera;if(it){let lt=f[it];lt||(lt=new A_,f[it]=lt);const ze=p.getCameraImage(it);lt.sourceTexture=ze}}}}for(let ue=0;ue<R.length;ue++){const be=T[ue],Ue=R[ue];be!==null&&Ue!==void 0&&Ue.update(be,de,u||o)}Ve&&Ve(Z,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const De=new L_;De.setAnimationLoop(Xe),this.setAnimationLoop=function(Z){Ve=Z},this.dispose=function(){}}}const Nw=new Nt,k_=new ke;k_.set(-1,0,0,0,1,0,0,0,1);function Uw(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,R_(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,m,x,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),c(g,f),f.isMeshPhysicalMaterial&&d(g,f,M)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),y(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,m,x):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===En&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===En&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=e.get(f),x=m.envMap,M=m.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(M)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(k_),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,x){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=x*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function c(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){const m=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fw(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const M=x.program;i.uniformBlockBinding(m,M)}function u(m,x){let M=r[m.id];M===void 0&&(v(m),M=h(m),r[m.id]=M,m.addEventListener("dispose",g));const R=x.program;i.updateUBOMapping(m,R);const T=e.render.frame;s[m.id]!==T&&(c(m),s[m.id]=T)}function h(m){const x=p();m.__bindingPointIndex=x;const M=t.createBuffer(),R=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function p(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(m){const x=r[m.id],M=m.uniforms,R=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,b=M.length;T<b;T++){const _=Array.isArray(M[T])?M[T]:[M[T]];for(let A=0,P=_.length;A<P;A++){const L=_[A];if(d(L,T,A,R)===!0){const F=L.__offset,j=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let N=0;N<j.length;N++){const W=j[N],z=y(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,F+K,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):ArrayBuffer.isView(W)?L.__data.set(new W.constructor(W.buffer,W.byteOffset,L.__data.length)):(W.toArray(L.__data,K),K+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(m,x,M,R){const T=m.value,b=x+"_"+M;if(R[b]===void 0)return typeof T=="number"||typeof T=="boolean"?R[b]=T:ArrayBuffer.isView(T)?R[b]=T.slice():R[b]=T.clone(),!0;{const _=R[b];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return R[b]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function v(m){const x=m.uniforms;let M=0;const R=16;for(let b=0,_=x.length;b<_;b++){const A=Array.isArray(x[b])?x[b]:[x[b]];for(let P=0,L=A.length;P<L;P++){const F=A[P],j=Array.isArray(F.value)?F.value:[F.value];for(let K=0,N=j.length;K<N;K++){const W=j[K],z=y(W),B=M%R,q=B%z.boundary,ee=B+q;M+=q,ee!==0&&R-ee<z.storage&&(M+=R-ee),F.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=z.storage}}}const T=M%R;return T>0&&(M+=R-T),m.__size=M,m.__cache={},this}function y(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){const x=m.target;x.removeEventListener("dispose",g);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}const Ow=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ci=null;function kw(){return ci===null&&(ci=new Ey(Ow,16,16,Zr,Hi),ci.name="DFG_LUT",ci.minFilter=sn,ci.magFilter=sn,ci.wrapS=Ni,ci.wrapT=Ni,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}class Bw{constructor(e={}){const{canvas:n=JS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:c=!1,outputBufferType:d=bn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const y=d,g=new Set([hh,dh,fh]),f=new Set([bn,Si,ea,ta,ch,uh]),m=new Uint32Array(4),x=new Int32Array(4),M=new U;let R=null,T=null;const b=[],_=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,F=null;this._outputColorSpace=Cn;let j=0,K=0,N=null,W=-1,z=null;const B=new bt,q=new bt;let ee=null;const le=new $e(0);let pe=0,Ve=n.width,Xe=n.height,De=1,Z=null,de=null;const ue=new bt(0,0,Ve,Xe),be=new bt(0,0,Ve,Xe);let Ue=!1;const Pe=new vh;let pt=!1,qe=!1;const it=new Nt,lt=new U,ze=new bt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Xt(){return N===null?De:1}let I=i;function wt(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${oh}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),I===null){const O="webgl2";if(I=wt(O,E),I===null)throw wt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw et("WebGLRenderer: "+E.message),E}let je,rt,he,gt,w,S,k,Q,ne,oe,fe,$,J,ge,Se,ce,ae,Ne,Fe,D,C,V,X;function me(){je=new k1(I),je.init(),C=new bw(I,je),rt=new P1(I,je,e,C),he=new Rw(I,je),rt.reversedDepthBuffer&&c&&he.buffers.depth.setReversed(!0),gt=new V1(I),w=new hw,S=new Cw(I,je,he,w,rt,C,gt),k=new O1(P),Q=new Xy(I),V=new C1(I,Q),ne=new B1(I,Q,gt,V),oe=new G1(I,ne,Q,V,gt),Ne=new H1(I,rt,S),Se=new L1(w),fe=new dw(P,k,je,rt,V,Se),$=new Uw(P,w),J=new mw,ge=new yw(je),ae=new R1(P,k,he,oe,v,l),ce=new Aw(P,oe,rt),X=new Fw(I,gt,rt,he),Fe=new b1(I,je,gt),D=new z1(I,je,gt),gt.programs=fe.programs,P.capabilities=rt,P.extensions=je,P.properties=w,P.renderLists=J,P.shadowMap=ce,P.state=he,P.info=gt}me(),y!==bn&&(A=new X1(y,n.width,n.height,r,s));const re=new Iw(P,I);this.xr=re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(E){E!==void 0&&(De=E,this.setSize(Ve,Xe,!1))},this.getSize=function(E){return E.set(Ve,Xe)},this.setSize=function(E,O,Y=!0){if(re.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=E,Xe=O,n.width=Math.floor(E*De),n.height=Math.floor(O*De),Y===!0&&(n.style.width=E+"px",n.style.height=O+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Ve*De,Xe*De).floor()},this.setDrawingBufferSize=function(E,O,Y){Ve=E,Xe=O,De=Y,n.width=Math.floor(E*Y),n.height=Math.floor(O*Y),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(y===bn){et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Le("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(B)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,O,Y,H){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,O,Y,H),he.viewport(B.copy(ue).multiplyScalar(De).round())},this.getScissor=function(E){return E.copy(be)},this.setScissor=function(E,O,Y,H){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,O,Y,H),he.scissor(q.copy(be).multiplyScalar(De).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(E){he.setScissorTest(Ue=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,Y=!0){let H=0;if(E){let G=!1;if(N!==null){const xe=N.texture.format;G=g.has(xe)}if(G){const xe=N.texture.type,Me=f.has(xe),ve=ae.getClearColor(),Ae=ae.getClearAlpha(),Re=ve.r,Be=ve.g,We=ve.b;Me?(m[0]=Re,m[1]=Be,m[2]=We,m[3]=Ae,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=Re,x[1]=Be,x[2]=We,x[3]=Ae,I.clearBufferiv(I.COLOR,0,x))}else H|=I.COLOR_BUFFER_BIT}O&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),ae.dispose(),J.dispose(),ge.dispose(),w.dispose(),k.dispose(),oe.dispose(),V.dispose(),X.dispose(),fe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Zt),re.removeEventListener("sessionend",es),si.stop()};function te(E){E.preventDefault(),qp("WebGLRenderer: Context Lost."),L=!0}function Te(){qp("WebGLRenderer: Context Restored."),L=!1;const E=gt.autoReset,O=ce.enabled,Y=ce.autoUpdate,H=ce.needsUpdate,G=ce.type;me(),gt.autoReset=E,ce.enabled=O,ce.autoUpdate=Y,ce.needsUpdate=H,ce.type=G}function Oe(E){et("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function At(E){const O=E.target;O.removeEventListener("dispose",At),st(O)}function st(E){Fn(E),w.remove(E)}function Fn(E){const O=w.get(E).programs;O!==void 0&&(O.forEach(function(Y){fe.releaseProgram(Y)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Y,H,G,xe){O===null&&(O=Pt);const Me=G.isMesh&&G.matrixWorld.determinant()<0,ve=V_(E,O,Y,H,G);he.setMaterial(H,Me);let Ae=Y.index,Re=1;if(H.wireframe===!0){if(Ae=ne.getWireframeAttribute(Y),Ae===void 0)return;Re=2}const Be=Y.drawRange,We=Y.attributes.position;let Ce=Be.start*Re,ct=(Be.start+Be.count)*Re;xe!==null&&(Ce=Math.max(Ce,xe.start*Re),ct=Math.min(ct,(xe.start+xe.count)*Re)),Ae!==null?(Ce=Math.max(Ce,0),ct=Math.min(ct,Ae.count)):We!=null&&(Ce=Math.max(Ce,0),ct=Math.min(ct,We.count));const Lt=ct-Ce;if(Lt<0||Lt===1/0)return;V.setup(G,H,ve,Y,Ae);let Rt,ut=Fe;if(Ae!==null&&(Rt=Q.get(Ae),ut=D,ut.setIndex(Rt)),G.isMesh)H.wireframe===!0?(he.setLineWidth(H.wireframeLinewidth*Xt()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(G.isLine){let Qt=H.linewidth;Qt===void 0&&(Qt=1),he.setLineWidth(Qt*Xt()),G.isLineSegments?ut.setMode(I.LINES):G.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else G.isPoints?ut.setMode(I.POINTS):G.isSprite&&ut.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(je.get("WEBGL_multi_draw"))ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Qt=G._multiDrawStarts,ye=G._multiDrawCounts,Tn=G._multiDrawCount,Je=Ae?Q.get(Ae).bytesPerElement:1,On=w.get(H).currentProgram.getUniforms();for(let oi=0;oi<Tn;oi++)On.setValue(I,"_gl_DrawID",oi),ut.render(Qt[oi]/Je,ye[oi])}else if(G.isInstancedMesh)ut.renderInstances(Ce,Lt,G.count);else if(Y.isInstancedBufferGeometry){const Qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ye=Math.min(Y.instanceCount,Qt);ut.renderInstances(Ce,Lt,ye)}else ut.render(Ce,Lt)};function ie(E,O,Y){E.transparent===!0&&E.side===Li&&E.forceSinglePass===!1?(E.side=En,E.needsUpdate=!0,ha(E,O,Y),E.side=Mr,E.needsUpdate=!0,ha(E,O,Y),E.side=Li):ha(E,O,Y)}this.compile=function(E,O,Y=null){Y===null&&(Y=E),T=ge.get(Y),T.init(O),_.push(T),Y.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),E!==Y&&E.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const H=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const xe=G.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){const ve=xe[Me];ie(ve,Y,G),H.add(ve)}else ie(xe,Y,G),H.add(xe)}),T=_.pop(),H},this.compileAsync=function(E,O,Y=null){const H=this.compile(E,O,Y);return new Promise(G=>{function xe(){if(H.forEach(function(Me){w.get(Me).currentProgram.isReady()&&H.delete(Me)}),H.size===0){G(E);return}setTimeout(xe,10)}je.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ye=null;function an(E){Ye&&Ye(E)}function Zt(){si.stop()}function es(){si.start()}const si=new L_;si.setAnimationLoop(an),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(E){Ye=E,re.setAnimationLoop(E),E===null?si.stop():si.start()},re.addEventListener("sessionstart",Zt),re.addEventListener("sessionend",es),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(E,O);const Y=re.enabled===!0&&re.isPresenting===!0,H=A!==null&&(N===null||Y)&&A.begin(P,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,O,N),T=ge.get(E,_.length),T.init(O),T.state.textureUnits=S.getTextureUnits(),_.push(T),it.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Pe.setFromProjectionMatrix(it,pi,O.reversedDepth),qe=this.localClippingEnabled,pt=Se.init(this.clippingPlanes,qe),R=J.get(E,b.length),R.init(),b.push(R),re.enabled===!0&&re.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&so(Me,O,-1/0,P.sortObjects)}so(E,O,0,P.sortObjects),R.finish(),P.sortObjects===!0&&R.sort(Z,de),mt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,mt&&ae.addToRenderList(R,E),this.info.render.frame++,pt===!0&&Se.beginShadows();const G=T.state.shadowsArray;if(ce.render(G,E,O),pt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&A.hasRenderPass())===!1){const Me=R.opaque,ve=R.transmissive;if(T.setupLights(),O.isArrayCamera){const Ae=O.cameras;if(ve.length>0)for(let Re=0,Be=Ae.length;Re<Be;Re++){const We=Ae[Re];Ah(Me,ve,E,We)}mt&&ae.render(E);for(let Re=0,Be=Ae.length;Re<Be;Re++){const We=Ae[Re];wh(R,E,We,We.viewport)}}else ve.length>0&&Ah(Me,ve,E,O),mt&&ae.render(E),wh(R,E,O)}N!==null&&K===0&&(S.updateMultisampleRenderTarget(N),S.updateRenderTargetMipmap(N)),H&&A.end(P),E.isScene===!0&&E.onAfterRender(P,E,O),V.resetDefaultState(),W=-1,z=null,_.pop(),_.length>0?(T=_[_.length-1],S.setTextureUnits(T.state.textureUnits),pt===!0&&Se.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?R=b[b.length-1]:R=null,F!==null&&F.renderEnd()};function so(E,O,Y,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pe.intersectsSprite(E)){H&&ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(it);const Me=oe.update(E),ve=E.material;ve.visible&&R.push(E,Me,ve,Y,ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pe.intersectsObject(E))){const Me=oe.update(E),ve=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ze.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ze.copy(Me.boundingSphere.center)),ze.applyMatrix4(E.matrixWorld).applyMatrix4(it)),Array.isArray(ve)){const Ae=Me.groups;for(let Re=0,Be=Ae.length;Re<Be;Re++){const We=Ae[Re],Ce=ve[We.materialIndex];Ce&&Ce.visible&&R.push(E,Me,Ce,Y,ze.z,We)}}else ve.visible&&R.push(E,Me,ve,Y,ze.z,null)}}const xe=E.children;for(let Me=0,ve=xe.length;Me<ve;Me++)so(xe[Me],O,Y,H)}function wh(E,O,Y,H){const{opaque:G,transmissive:xe,transparent:Me}=E;T.setupLightsView(Y),pt===!0&&Se.setGlobalState(P.clippingPlanes,Y),H&&he.viewport(B.copy(H)),G.length>0&&da(G,O,Y),xe.length>0&&da(xe,O,Y),Me.length>0&&da(Me,O,Y),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Ah(E,O,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Ce=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new vi(1,1,{generateMipmaps:!0,type:Ce?Hi:bn,minFilter:zr,samples:Math.max(4,rt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const xe=T.state.transmissionRenderTarget[H.id],Me=H.viewport||B;xe.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const ve=P.getRenderTarget(),Ae=P.getActiveCubeFace(),Re=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(le),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),mt&&ae.render(Y);const Be=P.toneMapping;P.toneMapping=_i;const We=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),pt===!0&&Se.setGlobalState(P.clippingPlanes,H),da(E,Y,H),S.updateMultisampleRenderTarget(xe),S.updateRenderTargetMipmap(xe),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ct=0,Lt=O.length;ct<Lt;ct++){const Rt=O[ct],{object:ut,geometry:Qt,material:ye,group:Tn}=Rt;if(ye.side===Li&&ut.layers.test(H.layers)){const Je=ye.side;ye.side=En,ye.needsUpdate=!0,Rh(ut,Y,H,Qt,ye,Tn),ye.side=Je,ye.needsUpdate=!0,Ce=!0}}Ce===!0&&(S.updateMultisampleRenderTarget(xe),S.updateRenderTargetMipmap(xe))}P.setRenderTarget(ve,Ae,Re),P.setClearColor(le,pe),We!==void 0&&(H.viewport=We),P.toneMapping=Be}function da(E,O,Y){const H=O.isScene===!0?O.overrideMaterial:null;for(let G=0,xe=E.length;G<xe;G++){const Me=E[G],{object:ve,geometry:Ae,group:Re}=Me;let Be=Me.material;Be.allowOverride===!0&&H!==null&&(Be=H),ve.layers.test(Y.layers)&&Rh(ve,O,Y,Ae,Be,Re)}}function Rh(E,O,Y,H,G,xe){E.onBeforeRender(P,O,Y,H,G,xe),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(P,O,Y,H,E,xe),G.transparent===!0&&G.side===Li&&G.forceSinglePass===!1?(G.side=En,G.needsUpdate=!0,P.renderBufferDirect(Y,O,H,G,E,xe),G.side=Mr,G.needsUpdate=!0,P.renderBufferDirect(Y,O,H,G,E,xe),G.side=Li):P.renderBufferDirect(Y,O,H,G,E,xe),E.onAfterRender(P,O,Y,H,G,xe)}function ha(E,O,Y){O.isScene!==!0&&(O=Pt);const H=w.get(E),G=T.state.lights,xe=T.state.shadowsArray,Me=G.state.version,ve=fe.getParameters(E,G.state,xe,O,Y,T.state.lightProbeGridArray),Ae=fe.getProgramCacheKey(ve);let Re=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Be=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=k.get(E.envMap||H.environment,Be),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",At),Re=new Map,H.programs=Re);let We=Re.get(Ae);if(We!==void 0){if(H.currentProgram===We&&H.lightsStateVersion===Me)return bh(E,ve),We}else ve.uniforms=fe.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,Y,ve),E.onBeforeCompile(ve,P),We=fe.acquireProgram(ve,Ae),Re.set(Ae,We),H.uniforms=ve.uniforms;const Ce=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=Se.uniform),bh(E,ve),H.needsLights=G_(E),H.lightsStateVersion=Me,H.needsLights&&(Ce.ambientLightColor.value=G.state.ambient,Ce.lightProbe.value=G.state.probe,Ce.directionalLights.value=G.state.directional,Ce.directionalLightShadows.value=G.state.directionalShadow,Ce.spotLights.value=G.state.spot,Ce.spotLightShadows.value=G.state.spotShadow,Ce.rectAreaLights.value=G.state.rectArea,Ce.ltc_1.value=G.state.rectAreaLTC1,Ce.ltc_2.value=G.state.rectAreaLTC2,Ce.pointLights.value=G.state.point,Ce.pointLightShadows.value=G.state.pointShadow,Ce.hemisphereLights.value=G.state.hemi,Ce.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ce.spotLightMatrix.value=G.state.spotLightMatrix,Ce.spotLightMap.value=G.state.spotLightMap,Ce.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=We,H.uniformsList=null,We}function Ch(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=_l.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function bh(E,O){const Y=w.get(E);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function z_(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let Y=0,H=E.length;Y<H;Y++){const G=E[Y];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function V_(E,O,Y,H,G){O.isScene!==!0&&(O=Pt),S.resetTextureUnits();const xe=O.fog,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,ve=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Qe.workingColorSpace,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=k.get(H.envMap||Me,Ae),Be=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,We=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,Lt=!!Y.morphAttributes.color;let Rt=_i;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Rt=P.toneMapping);const ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Qt=ut!==void 0?ut.length:0,ye=w.get(H),Tn=T.state.lights;if(pt===!0&&(qe===!0||E!==z)){const _t=E===z&&H.id===W;Se.setState(H,E,_t)}let Je=!1;H.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Tn.state.version||ye.outputColorSpace!==ve||G.isBatchedMesh&&ye.batching===!1||!G.isBatchedMesh&&ye.batching===!0||G.isBatchedMesh&&ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ye.instancing===!1||!G.isInstancedMesh&&ye.instancing===!0||G.isSkinnedMesh&&ye.skinning===!1||!G.isSkinnedMesh&&ye.skinning===!0||G.isInstancedMesh&&ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ye.instancingMorph===!1&&G.morphTexture!==null||ye.envMap!==Re||H.fog===!0&&ye.fog!==xe||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==Be||ye.vertexTangents!==We||ye.morphTargets!==Ce||ye.morphNormals!==ct||ye.morphColors!==Lt||ye.toneMapping!==Rt||ye.morphTargetsCount!==Qt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,ye.__version=H.version);let On=ye.currentProgram;Je===!0&&(On=ha(H,O,G),F&&H.isNodeMaterial&&F.onUpdateProgram(H,On,ye));let oi=!1,ji=!1,ts=!1;const ft=On.getUniforms(),Dt=ye.uniforms;if(he.useProgram(On.program)&&(oi=!0,ji=!0,ts=!0),H.id!==W&&(W=H.id,ji=!0),ye.needsLights){const _t=z_(T.state.lightProbeGridArray,G);ye.lightProbeGrid!==_t&&(ye.lightProbeGrid=_t,ji=!0)}if(oi||z!==E){he.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ft.setValue(I,"projectionMatrix",E.projectionMatrix),ft.setValue(I,"viewMatrix",E.matrixWorldInverse);const qi=ft.map.cameraPosition;qi!==void 0&&qi.setValue(I,lt.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ft.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),z!==E&&(z=E,ji=!0,ts=!0)}if(ye.needsLights&&(Tn.state.directionalShadowMap.length>0&&ft.setValue(I,"directionalShadowMap",Tn.state.directionalShadowMap,S),Tn.state.spotShadowMap.length>0&&ft.setValue(I,"spotShadowMap",Tn.state.spotShadowMap,S),Tn.state.pointShadowMap.length>0&&ft.setValue(I,"pointShadowMap",Tn.state.pointShadowMap,S)),G.isSkinnedMesh){ft.setOptional(I,G,"bindMatrix"),ft.setOptional(I,G,"bindMatrixInverse");const _t=G.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),ft.setValue(I,"boneTexture",_t.boneTexture,S))}G.isBatchedMesh&&(ft.setOptional(I,G,"batchingTexture"),ft.setValue(I,"batchingTexture",G._matricesTexture,S),ft.setOptional(I,G,"batchingIdTexture"),ft.setValue(I,"batchingIdTexture",G._indirectTexture,S),ft.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&ft.setValue(I,"batchingColorTexture",G._colorsTexture,S));const Yi=Y.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&Ne.update(G,Y,On),(ji||ye.receiveShadow!==G.receiveShadow)&&(ye.receiveShadow=G.receiveShadow,ft.setValue(I,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Dt.envMapIntensity.value=O.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=kw()),ji){if(ft.setValue(I,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&H_(Dt,ts),xe&&H.fog===!0&&$.refreshFogUniforms(Dt,xe),$.refreshMaterialUniforms(Dt,H,De,Xe,T.state.transmissionRenderTarget[E.id]),ye.needsLights&&ye.lightProbeGrid){const _t=ye.lightProbeGrid;Dt.probesSH.value=_t.texture,Dt.probesMin.value.copy(_t.boundingBox.min),Dt.probesMax.value.copy(_t.boundingBox.max),Dt.probesResolution.value.copy(_t.resolution)}_l.upload(I,Ch(ye),Dt,S)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_l.upload(I,Ch(ye),Dt,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ft.setValue(I,"center",G.center),ft.setValue(I,"modelViewMatrix",G.modelViewMatrix),ft.setValue(I,"normalMatrix",G.normalMatrix),ft.setValue(I,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const _t=H.uniformsGroups;for(let qi=0,ns=_t.length;qi<ns;qi++){const Ph=_t[qi];X.update(Ph,On),X.bind(Ph,On)}}return On}function H_(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function G_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,O,Y){const H=w.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),w.get(E.texture).__webglTexture=O,w.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const Y=w.get(E);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const W_=I.createFramebuffer();this.setRenderTarget=function(E,O=0,Y=0){N=E,j=O,K=Y;let H=null,G=!1,xe=!1;if(E){const ve=w.get(E);if(ve.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(I.FRAMEBUFFER,ve.__webglFramebuffer),B.copy(E.viewport),q.copy(E.scissor),ee=E.scissorTest,he.viewport(B),he.scissor(q),he.setScissorTest(ee),W=-1;return}else if(ve.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(ve.__hasExternalTextures)S.rebindTextures(E,w.get(E.texture).__webglTexture,w.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Be=E.depthTexture;if(ve.__boundDepthTexture!==Be){if(Be!==null&&w.has(Be)&&(E.width!==Be.image.width||E.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);const Re=w.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[O])?H=Re[O][Y]:H=Re[O],G=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?H=w.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[Y]:H=Re,B.copy(E.viewport),q.copy(E.scissor),ee=E.scissorTest}else B.copy(ue).multiplyScalar(De).floor(),q.copy(be).multiplyScalar(De).floor(),ee=Ue;if(Y!==0&&(H=W_),he.bindFramebuffer(I.FRAMEBUFFER,H)&&he.drawBuffers(E,H),he.viewport(B),he.scissor(q),he.setScissorTest(ee),G){const ve=w.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,Y)}else if(xe){const ve=O;for(let Ae=0;Ae<E.textures.length;Ae++){const Re=w.get(E.textures[Ae]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ae,Re.__webglTexture,Y,ve)}}else if(E!==null&&Y!==0){const ve=w.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ve.__webglTexture,Y)}W=-1},this.readRenderTargetPixels=function(E,O,Y,H,G,xe,Me,ve=0){if(!(E&&E.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=w.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){he.bindFramebuffer(I.FRAMEBUFFER,Ae);try{const Re=E.textures[ve],Be=Re.format,We=Re.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve),!rt.textureFormatReadable(Be)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(We)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&Y>=0&&Y<=E.height-G&&I.readPixels(O,Y,H,G,C.convert(Be),C.convert(We),xe)}finally{const Re=N!==null?w.get(N).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,O,Y,H,G,xe,Me,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=w.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae)if(O>=0&&O<=E.width-H&&Y>=0&&Y<=E.height-G){he.bindFramebuffer(I.FRAMEBUFFER,Ae);const Re=E.textures[ve],Be=Re.format,We=Re.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve),!rt.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ce),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),I.readPixels(O,Y,H,G,C.convert(Be),C.convert(We),0);const ct=N!==null?w.get(N).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,ct);const Lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ey(I,Lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ce),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.deleteBuffer(Ce),I.deleteSync(Lt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,Y=0){const H=Math.pow(2,-Y),G=Math.floor(E.image.width*H),xe=Math.floor(E.image.height*H),Me=O!==null?O.x:0,ve=O!==null?O.y:0;S.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Me,ve,G,xe),he.unbindTexture()};const X_=I.createFramebuffer(),j_=I.createFramebuffer();this.copyTextureToTexture=function(E,O,Y=null,H=null,G=0,xe=0){let Me,ve,Ae,Re,Be,We,Ce,ct,Lt;const Rt=E.isCompressedTexture?E.mipmaps[xe]:E.image;if(Y!==null)Me=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,Re=Y.min.x,Be=Y.min.y,We=Y.isBox3?Y.min.z:0;else{const Dt=Math.pow(2,-G);Me=Math.floor(Rt.width*Dt),ve=Math.floor(Rt.height*Dt),E.isDataArrayTexture?Ae=Rt.depth:E.isData3DTexture?Ae=Math.floor(Rt.depth*Dt):Ae=1,Re=0,Be=0,We=0}H!==null?(Ce=H.x,ct=H.y,Lt=H.z):(Ce=0,ct=0,Lt=0);const ut=C.convert(O.format),Qt=C.convert(O.type);let ye;O.isData3DTexture?(S.setTexture3D(O,0),ye=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(S.setTexture2DArray(O,0),ye=I.TEXTURE_2D_ARRAY):(S.setTexture2D(O,0),ye=I.TEXTURE_2D),he.activeTexture(I.TEXTURE0),he.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),he.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),he.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Tn=he.getParameter(I.UNPACK_ROW_LENGTH),Je=he.getParameter(I.UNPACK_IMAGE_HEIGHT),On=he.getParameter(I.UNPACK_SKIP_PIXELS),oi=he.getParameter(I.UNPACK_SKIP_ROWS),ji=he.getParameter(I.UNPACK_SKIP_IMAGES);he.pixelStorei(I.UNPACK_ROW_LENGTH,Rt.width),he.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rt.height),he.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),he.pixelStorei(I.UNPACK_SKIP_ROWS,Be),he.pixelStorei(I.UNPACK_SKIP_IMAGES,We);const ts=E.isDataArrayTexture||E.isData3DTexture,ft=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Dt=w.get(E),Yi=w.get(O),_t=w.get(Dt.__renderTarget),qi=w.get(Yi.__renderTarget);he.bindFramebuffer(I.READ_FRAMEBUFFER,_t.__webglFramebuffer),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let ns=0;ns<Ae;ns++)ts&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,w.get(E).__webglTexture,G,We+ns),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,w.get(O).__webglTexture,xe,Lt+ns)),I.blitFramebuffer(Re,Be,Me,ve,Ce,ct,Me,ve,I.DEPTH_BUFFER_BIT,I.NEAREST);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||w.has(E)){const Dt=w.get(E),Yi=w.get(O);he.bindFramebuffer(I.READ_FRAMEBUFFER,X_),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,j_);for(let _t=0;_t<Ae;_t++)ts?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.__webglTexture,G,We+_t):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dt.__webglTexture,G),ft?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yi.__webglTexture,xe,Lt+_t):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yi.__webglTexture,xe),G!==0?I.blitFramebuffer(Re,Be,Me,ve,Ce,ct,Me,ve,I.COLOR_BUFFER_BIT,I.NEAREST):ft?I.copyTexSubImage3D(ye,xe,Ce,ct,Lt+_t,Re,Be,Me,ve):I.copyTexSubImage2D(ye,xe,Ce,ct,Re,Be,Me,ve);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ft?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ye,xe,Ce,ct,Lt,Me,ve,Ae,ut,Qt,Rt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,xe,Ce,ct,Lt,Me,ve,Ae,ut,Rt.data):I.texSubImage3D(ye,xe,Ce,ct,Lt,Me,ve,Ae,ut,Qt,Rt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,Ce,ct,Me,ve,ut,Qt,Rt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,Ce,ct,Rt.width,Rt.height,ut,Rt.data):I.texSubImage2D(I.TEXTURE_2D,xe,Ce,ct,Me,ve,ut,Qt,Rt);he.pixelStorei(I.UNPACK_ROW_LENGTH,Tn),he.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je),he.pixelStorei(I.UNPACK_SKIP_PIXELS,On),he.pixelStorei(I.UNPACK_SKIP_ROWS,oi),he.pixelStorei(I.UNPACK_SKIP_IMAGES,ji),xe===0&&O.generateMipmaps&&I.generateMipmap(ye),he.unbindTexture()},this.initRenderTarget=function(E){w.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){j=0,K=0,N=null,he.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}const vs=new Wi(0,0,0,"YXZ"),xs=new U,zw={type:"change"},Vw={type:"lock"},Hw={type:"unlock"},Bm=.002,zm=Math.PI/2;class Gw extends Gy{constructor(e,n=null){super(e,n),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Ww.bind(this),this._onPointerlockChange=Xw.bind(this),this._onPointerlockError=jw.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const n=this.object;xs.setFromMatrixColumn(n.matrix,0),xs.crossVectors(n.up,xs),n.position.addScaledVector(xs,e)}moveRight(e){if(this.enabled===!1)return;const n=this.object;xs.setFromMatrixColumn(n.matrix,0),n.position.addScaledVector(xs,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Ww(t){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;vs.setFromQuaternion(e.quaternion),vs.y-=t.movementX*Bm*this.pointerSpeed,vs.x-=t.movementY*Bm*this.pointerSpeed,vs.x=Math.max(zm-this.maxPolarAngle,Math.min(zm-this.minPolarAngle,vs.x)),e.quaternion.setFromEuler(vs),this.dispatchEvent(zw)}function Xw(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Vw),this.isLocked=!0):(this.dispatchEvent(Hw),this.isLocked=!1)}function jw(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Yw=t=>`/alikhan/assets/${t}.png`,Ci=["Pepsi","Fanta","Вода","Чипсы","Бургер","Хот-дог","Корн-дог","Шоколадка","Печенье","Овощи","Фрукты","Мороженое"],Ja=[new U(-15,0,-13),new U(-12,0,8),new U(-7,0,-13),new U(-3,0,9),new U(2,0,-13),new U(7,0,8),new U(13,0,-13),new U(14,0,6)],Vm={phone:!1,cashier:!1,stock:!1,trash:!1,cameras:!1,bandits:!1,outside:!1},Bn=(t,e,n)=>Math.min(n,Math.max(e,t));function Hm(t){const e={KeyW:"w",KeyA:"a",KeyS:"s",KeyD:"d",ArrowUp:"w",ArrowLeft:"a",ArrowDown:"s",ArrowRight:"d",KeyE:"e",KeyQ:"q",ShiftLeft:"shift",ShiftRight:"shift",Escape:"escape"},n={ц:"w",ф:"a",ы:"s",в:"d",у:"e",й:"q"},i=t.key.toLowerCase();return e[t.code]??n[i]??i}function Ie(t,e,n,i,r){const s=new we(new dt(t,e,n),new ht({color:i,roughness:.72}));return s.position.set(...r),s.castShadow=!0,s.receiveShadow=!0,s}function nr(t,e,n,i,r=20){const s=new we(new fa(t,t,e,r),new ht({color:n,roughness:.5,metalness:.04}));return s.position.set(...i),s.castShadow=!0,s.receiveShadow=!0,s}function fd(t,e){const n=new xn;if(t.includes("Pepsi")||t.includes("Fanta")||t.includes("Вода")){const i=nr(.13,.62,e,[0,.31,0],24),r=nr(.1,.08,15658734,[0,.66,0],18),s=Ie(.29,.16,.02,16053492,[0,.36,-.13]);n.add(i,r,s)}else if(t.includes("Чип")){const i=Ie(.38,.72,.14,e,[0,.36,0]);i.rotation.z=.08,n.add(i)}else if(t.includes("Бургер"))n.add(nr(.18,.13,13207099,[0,.33,0],24)),n.add(nr(.17,.08,5974550,[0,.23,0],24)),n.add(nr(.18,.1,14721612,[0,.14,0],24));else if(t.includes("дог")){const i=Ie(.52,.14,.18,14064211,[0,.22,0]),r=Ie(.48,.08,.09,11090724,[0,.31,0]);n.add(i,r)}else if(t.includes("Шоколад")){const i=Ie(.56,.1,.28,4858136,[0,.18,0]),r=Ie(.6,.12,.08,e,[0,.2,-.08]);n.add(i,r)}else if(t.includes("Печенье"))for(let i=0;i<4;i+=1){const r=nr(.12,.045,12156997,[-.18+i*.12,.16+i*.025,0],18);r.rotation.x=Math.PI/2,n.add(r)}else if(t.includes("Овощ"))n.add(nr(.16,.28,4826692,[0,.18,0],14)),n.add(nr(.11,.22,14502453,[.18,.16,.04],14));else if(t.includes("Фрукт")){const i=new we(new ii(.16,18,14),new ht({color:12726824,roughness:.42}));i.position.set(-.12,.18,0);const r=new we(new ii(.15,18,14),new ht({color:14912294,roughness:.45}));r.position.set(.14,.18,.04),n.add(i,r)}else{const i=Ie(.32,.42,.24,e,[0,.22,0]);n.add(i)}return n.traverse(i=>{i instanceof we&&(i.castShadow=!0,i.receiveShadow=!0)}),n}function B_(t,e=15772279,n=!1){const i=new xn,r=new ht({color:t,roughness:.68,metalness:.02}),s=new ht({color:2105894,roughness:.72}),o=new ht({color:e,roughness:.62}),a=new we(new Wr(.28,.72,8,18),r);a.position.y=.96,a.scale.set(.85,1.08,.58);const l=new we(new ii(.25,24,18),o);l.position.y=1.55;const u=new we(new ii(.27,16,10,0,Math.PI*2,0,Math.PI/2),new ht({color:n?328965:1774093,roughness:.9}));u.position.y=1.65;const h=new Zs({color:n?16764780:463119}),p=new we(new ii(.035,8,8),h),c=p.clone();p.position.set(-.08,1.57,-.22),c.position.set(.08,1.57,-.22);const d=new we(new ur(.035,.08,8),o);d.position.set(0,1.51,-.245),d.rotation.x=Math.PI/2;const v=new we(new dt(.12,.018,.012),new Zs({color:3478287}));v.position.set(0,1.43,-.235);const y=new we(new Wr(.055,.6,6,10),o),g=y.clone();y.position.set(-.38,.91,-.02),g.position.set(.38,.91,-.02),y.rotation.z=-.18,g.rotation.z=.18;const f=new we(new Wr(.075,.62,6,10),s),m=f.clone();f.position.set(-.13,.31,0),m.position.set(.13,.31,0);const x=Ie(.18,.08,.28,328965,[-.13,.035,-.04]),M=Ie(.18,.08,.28,328965,[.13,.035,-.04]);return i.add(a,l,u,p,c,d,v,y,g,f,m,x,M),i}function qw(t,e=0){const n=B_(t,[15772279,13668709,12089684,14725258][e%4],e%3===0),i=Ie(.22,.32,.12,7031343,[.46,.78,.06]);return i.rotation.z=.16,n.add(i),n}function Gm(){const t=B_(1118481,12159592,!0),e=Ie(.12,.12,.72,3355443,[.55,.9,-.28]);return e.rotation.x=.55,t.add(e),t}function Mu(t){const e=new xn,n=new ht({color:12108231,metalness:.75,roughness:.22}),i=new we(new dt(1.2,.62,.9),n);i.position.y=.62,i.scale.set(1,1,1);const r=new we(new ia(.44,.025,8,28),n);return r.position.set(0,1.05,.52),r.rotation.x=Math.PI/2,e.add(i,r),[-.42,.42].forEach(s=>[-.32,.32].forEach(o=>{const a=new we(new ia(.12,.025,8,18),n);a.position.set(s,.12,o),a.rotation.y=Math.PI/2,e.add(a)})),e.position.set(...t),e.traverse(s=>{s instanceof we&&(s.castShadow=!0,s.receiveShadow=!0)}),e.userData.kind="cart",e.userData.items=0,e}function Ss(t){const e=new xn,n=new ht({color:328965,roughness:.92,metalness:0}),i=new we(new ii(.38,20,14),n);i.position.y=.36,i.scale.set(1,.82,.78);const r=new we(new ur(.13,.32,12),n);r.position.y=.82;const s=new ht({color:1579032,roughness:.98});for(let o=0;o<6;o+=1){const a=new we(new dt(.03,.34,.02),s);a.position.set(Math.cos(o)*.28,.42,Math.sin(o)*.22),a.rotation.y=o,e.add(a)}return e.add(i,r),e.position.set(...t),e.userData.kind="trashBag",e.traverse(o=>{o instanceof we&&(o.castShadow=!0,o.receiveShadow=!0)}),e}function Eu(t){const e=new xn,n=new ht({color:14165554,roughness:.42,metalness:.02}),i=new ht({color:1315860,roughness:.55}),r=new we(new dt(.92,.08,.62),n);r.position.y=.16,e.add(r),[-.34,0,.34].forEach(o=>{const a=new we(new dt(.05,.38,.66),n);a.position.set(o,.4,0),e.add(a)}),[-.28,0,.28].forEach(o=>{const a=new we(new dt(.98,.32,.04),n);a.position.set(0,.42,o),e.add(a)});const s=new we(new ia(.42,.025,8,28),i);return s.position.set(0,.78,0),s.rotation.x=Math.PI/2,e.add(s),e.position.set(...t),e.userData.kind="basket",e.userData.items=0,e.traverse(o=>{o instanceof we&&(o.castShadow=!0,o.receiveShadow=!0)}),e}function Tu(t,e){const n=new xn,i=new ht({color:e,roughness:.24,metalness:.28}),r=new xh({color:10471385,roughness:.05,metalness:0,transmission:.35,transparent:!0,opacity:.42,clearcoat:1}),s=new we(new dt(2.2,.55,4.1),i);s.position.y=.45;const o=new we(new dt(1.55,.55,1.7),r);o.position.set(0,.95,-.25),n.add(s,o),[-.82,.82].forEach(l=>[-1.45,1.45].forEach(u=>{const h=new we(new fa(.28,.28,.22,18),new ht({color:328965,roughness:.62}));h.position.set(l,.23,u),h.rotation.z=Math.PI/2,n.add(h)}));const a=new Zs({color:16773042});return[-.55,.55].forEach(l=>{const u=new we(new dt(.35,.12,.06),a);u.position.set(l,.56,-2.08),n.add(u)}),n.position.set(...t),n.traverse(l=>{l instanceof we&&(l.castShadow=!0,l.receiveShadow=!0)}),n}function wu(t){const e=new xn,n=Ie(2.3,3.1,.45,2238253,[0,1.55,0]),i=new we(new dt(1.85,2.55,.05),new xh({color:11459839,metalness:0,roughness:.03,transmission:.55,transparent:!0,opacity:.34,reflectivity:.9,clearcoat:1}));i.position.set(0,1.58,-.26),i.userData.closedZ=-.26,i.userData.openZ=-.9;const r=new Ur(12447487,.75,4);r.position.set(0,1.8,-.45),e.add(n,i,r);for(let s=0;s<8;s+=1){const o=fd(Ci[s%Ci.length],[1789951,16743705,8772095,14218495][s%4]);o.position.set(-.65+s%4*.43,.85+Math.floor(s/4)*.9,-.36),o.scale.setScalar(.72),e.add(o)}return e.position.set(...t),{mesh:e,door:i,manualOpen:!1}}function $w(t){const e=new xn,n=new ht({color:10199975,metalness:.86,roughness:.24}),i=new ht({color:5199708,metalness:.9,roughness:.2});return[-.48,.48].forEach(r=>[-5.1,5.1].forEach(s=>{const o=new we(new dt(.12,2.35,.12),i);o.position.set(r,1.18,s),e.add(o)})),[.38,.95,1.52,2.08].forEach(r=>{const s=new we(new dt(1.08,.09,10.7),n);s.position.set(0,r,0),e.add(s),[-.58,.58].forEach(o=>{const a=new we(new dt(.08,.18,10.8),i);a.position.set(o,r+.1,0),e.add(a)})}),[-4,-2,0,2,4].forEach(r=>{const s=new we(new dt(1.16,.08,.08),i);s.position.set(0,2.35,r),e.add(s)}),e.position.set(...t),e.traverse(r=>{r instanceof we&&(r.castShadow=!0,r.receiveShadow=!0)}),e}function Wm(){const t=new xn,e=new ht({color:4921117,emissive:1441798,roughness:.42,metalness:.04}),n=new we(new Wr(.75,2.4,10,24),e);n.position.y=1.9;const i=new we(new ii(.68,24,18),e);i.position.y=3.35,i.scale.set(1,.8,1.15),t.add(n,i);const r=new we(new ii(.34,20,12),new ht({color:327680,roughness:.95,emissive:2162692}));r.position.set(0,3.16,-.61),r.scale.set(1.45,.42,.34),t.add(r);const s=new Zs({color:16769155});[-.23,.23].forEach(a=>{const l=new we(new ii(.08,12,10),s);l.position.set(a,3.42,-.56),t.add(l)});for(let a=0;a<15;a+=1){const l=new we(new ur(.055,.44,10),new ht({color:15327176,roughness:.34}));l.position.set(-.47+a*.067,3.03+a%2*.23,-.72),l.rotation.x=a%2?0:Math.PI,t.add(l)}[-1,1].forEach(a=>{const l=new we(new ur(.16,.95,16),new ht({color:13220768,roughness:.28}));l.position.set(a*.45,3.92,-.05),l.rotation.z=-a*.48,t.add(l)});for(let a=0;a<8;a+=1){const l=new we(new ur(.11,.55,10),e);l.position.set(0,3.05-a*.28,.72),l.rotation.x=Math.PI/2,t.add(l)}[-1,1].forEach(a=>{const l=new we(new Wr(.13,1.8,6,10),e);l.position.set(a*.95,2.1,-.05),l.rotation.z=a*.7,t.add(l);const u=new we(new ur(.18,.55,12),new ht({color:14208953,roughness:.2}));u.position.set(a*1.55,1.35,-.12),u.rotation.z=-a*.8,t.add(u)});const o=new Ur(16721727,2.2,8);return o.position.set(0,2.8,0),t.add(o),t.visible=!1,t}function Kw(){const t=bi.useRef(null),e=bi.useRef(null),[n,i]=bi.useState({phase:"menu",locked:!1,message:"Шестёрочка Horror: нажми старт, затем кликни по игре для захвата мыши.",battery:100,fear:0,served:0,stocked:0,trash:0,cameraOpen:!1,screamer:null,heldItem:null,inventory:0,outsideFinal:!1,trashDelivered:0,health:100,tasks:Vm}),r=bi.useRef(n);bi.useEffect(()=>{r.current=n},[n]);const s=c=>{i(d=>({...d,...c}))},o=c=>{i(d=>({...d,tasks:{...d.tasks,[c]:!0}}))},a=c=>{var g;s({screamer:"screamer-grin",fear:Bn(r.current.fear+24,0,100)});const v=e.current;if(v){const f=new U;v.camera.getWorldDirection(f),v.scareMesh.visible=!0,v.scareMesh.position.copy(v.camera.position).add(f.multiplyScalar(1.05)),v.scareMesh.position.y-=.1,v.scareMesh.lookAt(v.camera.position),v.scareMesh.scale.setScalar(.9+Math.random()*.25),window.setTimeout(()=>{e.current&&(e.current.scareMesh.visible=!1)},820)}const y=(g=e.current)==null?void 0:g.audio;if(y){const f=y.createOscillator(),m=y.createGain();f.type="sawtooth",f.frequency.value=48+Math.random()*42,m.gain.value=.18,m.gain.exponentialRampToValueAtTime(.001,y.currentTime+.7),f.connect(m),m.connect(y.destination),f.start(),f.stop(y.currentTime+.7)}window.setTimeout(()=>s({screamer:null}),950)},l=()=>{var g;const c=(g=e.current)==null?void 0:g.audio;if(!c)return;const d=c.createOscillator(),v=c.createOscillator(),y=c.createGain();d.type="square",v.type="sawtooth",d.frequency.setValueAtTime(210,c.currentTime),d.frequency.exponentialRampToValueAtTime(68,c.currentTime+.45),v.frequency.setValueAtTime(42,c.currentTime),y.gain.value=.001,y.gain.exponentialRampToValueAtTime(.13,c.currentTime+.05),y.gain.exponentialRampToValueAtTime(.001,c.currentTime+.75),d.connect(y),v.connect(y),y.connect(c.destination),d.start(),v.start(),d.stop(c.currentTime+.75),v.stop(c.currentTime+.75)};bi.useEffect(()=>{if(!t.current)return;const c=new gy;c.background=new $e(329223),c.fog=new Is(329223,.026);const d=new _n(75,t.current.clientWidth/t.current.clientHeight,.1,220);d.position.set(0,1.7,14);const v=new Bw({antialias:!0});v.setSize(t.current.clientWidth,t.current.clientHeight),v.shadowMap.enabled=!0,v.shadowMap.type=i_,v.toneMapping=ah,v.toneMappingExposure=1.18,v.outputColorSpace=Cn,v.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),t.current.appendChild(v.domElement);const y=new Gw(d,v.domElement);y.addEventListener("lock",()=>s({locked:!0})),y.addEventListener("unlock",()=>s({locked:!1}));const g=new Uy(15922943,2368548,.95);c.add(g);const f=new Ur(16774872,4.2,58);f.position.set(0,6,0),f.castShadow=!0,f.shadow.mapSize.set(1024,1024),c.add(f),[-12,-6,0,6,12].forEach(D=>{[-11,-3,5,12].forEach(C=>{const V=new By(16251903,4.2,5.6,.62);V.position.set(D,3.85,C),V.rotation.x=-Math.PI/2,c.add(V);const X=new we(new dt(5.4,.05,.55),new ht({color:15923199,emissive:15332351,emissiveIntensity:2.8,roughness:.18}));X.position.set(D,3.82,C),X.receiveShadow=!1,c.add(X)})});const m=new Oy(16777215,3.2,20,Math.PI/8,.35,1.1);m.position.copy(d.position),m.target.position.set(0,1.7,0),c.add(m,m.target);const x=new we(new dt(36,.16,34),new ht({color:6249300,roughness:.18,metalness:.06}));x.position.set(0,-.08,0),x.receiveShadow=!0,c.add(x);const M=new ht({color:2763047,roughness:.7});for(let D=-17;D<=17;D+=2){const C=new we(new dt(.025,.01,33),M);C.position.set(D,.006,0),c.add(C)}for(let D=-16;D<=16;D+=2){const C=new we(new dt(35,.01,.025),M);C.position.set(0,.007,D),c.add(C)}const R=[],T=D=>{c.add(D),R.push(new cn().setFromObject(D))};T(Ie(36,4,.3,4080712,[0,2,-17])),T(Ie(36,4,.3,4080712,[0,2,17])),T(Ie(.3,4,34,4080712,[-18,2,0])),T(Ie(.3,4,24,4080712,[18,2,-5]));const b=new xh({color:12118015,roughness:.02,metalness:0,transmission:.65,transparent:!0,opacity:.36,clearcoat:1,reflectivity:1}),_=Ie(3.2,3.2,.15,1120288,[18.05,1.6,12]);_.visible=!1,c.add(_);const A=new we(new dt(1.35,2.75,.08),b);A.position.set(18.02,1.42,11.25),A.rotation.y=Math.PI/2,A.castShadow=!0;const P=A.clone();P.position.z=12.75,c.add(A,P);const L=Ie(.18,.18,3.55,10135725,[18.03,2.95,12]),F=Ie(.14,.12,3.55,5463908,[18.03,.08,12]);c.add(L,F);const j=Ie(3.6,3.3,.3,3108679,[0,1.65,48]);j.visible=!1,c.add(j);const K=Ie(.8,.35,.65,1118481,[-14,1.1,12]);c.add(K);const N=Ie(5,1.05,1.4,9247780,[-3,.52,12]);c.add(N),R.push(new cn().setFromObject(N));const W=Ie(.55,.38,.08,1120288,[-4.15,1.28,11.55]),z=Ie(.5,.1,.34,1052688,[-3.15,1.1,11.55]),B=Ie(.22,.12,.32,1910059,[-2.25,1.15,11.55]);c.add(W,z,B);const q=new xn,ee=new ht({color:2303787,metalness:.55,roughness:.28}),le=new we(new dt(3.7,1.25,.08),ee);le.position.set(-3,2.08,12.78),q.add(le);for(let D=0;D<3;D+=1){for(let V=0;V<8;V+=1){const X=Ie(.28,.38,.05,[15986918,11869482,2047858,3092271][(D+V)%4],[-4.45+V*.42,1.67+D*.36,12.72]);q.add(X)}const C=new we(new dt(3.65,.04,.08),ee);C.position.set(-3,1.48+D*.36,12.67),q.add(C)}c.add(q);const pe=Ie(1.5,1,1.1,1777445,[11.5,.5,12.5]);c.add(pe);const Ve=Ie(8,.04,8,4670269,[-14,.02,-2]),Xe=Ie(2.2,.45,.08,1975336,[-17.82,2.35,-2]),De=[Ie(1.2,1,1.2,9067051,[-15.5,.5,-4.6]),Ie(1.2,1,1.2,9067051,[-13.9,.5,-4.6]),Ie(1.2,1,1.2,9067051,[-12.3,.5,-4.6])];c.add(Ve,Xe,...De),De.forEach(D=>R.push(new cn().setFromObject(D)));const Z=Ie(6.5,.04,5.5,3817282,[12,.025,12]),de=Ie(5.6,1.9,.16,2107437,[12,1.9,16.65]);c.add(Z,de),[Ie(6.5,2.7,.16,5594465,[12,1.35,9.25]),Ie(.16,2.7,5.5,5594465,[8.75,1.35,12]),Ie(.16,2.7,2.1,5594465,[15.25,1.35,9.95]),Ie(.16,2.7,1.8,5594465,[15.25,1.35,14.75])].forEach(D=>{c.add(D),R.push(new cn().setFromObject(D))});const be=Ie(.18,2.3,.16,8489359,[15.25,1.15,12.2]);c.add(be),["CHECKOUT","FRIDGES","PARKING","DUMPSTER"].forEach((D,C)=>{const V=9.9+C%2*3,X=2.25-Math.floor(C/2)*.85,me=Ie(2.55,.72,.08,533296,[V,X,16.52]);me.userData.cameraName=D;const re=Ie(2.35,.035,.03,12121087,[V,X+.18,16.46]),te=new Ur(9035007,.55,2.6);te.position.set(V,X,16.08);const Te=Ie(.12,.12,.04,C===3?14690099:10284287,[V-1.12,X+.24,16.44]);c.add(me,re,Te,te)});const Pe=new Ur(14217471,1.35,7);Pe.position.set(12,3.15,12),c.add(Pe);const pt=[];[-11,-6,-1,4,9,14].forEach((D,C)=>{const V=$w([D,0,-3]);c.add(V),R.push(new cn().setFromObject(V));for(let X=0;X<7;X+=1){const me=[1789951,16743705,8772095,15782460,9259810,15155759,16052951,4761163,14218495][(X+C)%Ci.length],re=fd(Ci[(X+C)%Ci.length],me);re.position.set(D,.42+X%3*.62,-7+Math.floor(X/3)*2.1),re.scale.setScalar(.82),re.visible=C<2,re.userData.initialVisible=re.visible,re.userData.product=Ci[(X+C)%Ci.length],c.add(re),pt.push(re)}});const it=[wu([-14.8,0,-12.5]),wu([-12.1,0,-12.5]),wu([-9.4,0,-12.5])];it.forEach(D=>{c.add(D.mesh),R.push(new cn().setFromObject(D.mesh))});const lt=[Mu([8,0,9]),Mu([13,0,7]),Mu([-12,0,9]),Eu([-4.2,0,13.1]),Eu([-3.4,0,13.1]),Eu([-2.6,0,13.1])];lt.forEach(D=>{c.add(D)});const ze=(D,C)=>{const V=Ie(.7,.04,.46,14733997,D);return V.rotation.y=Math.random()*.3-.15,V.userData.lore=C,c.add(V),V},Pt=[ze([11.3,1.05,12.8],"Запись охраны: камера у мусорки отключалась ровно в 05:12 три ночи подряд. После помех клиенты забывали, зачем пришли."),ze([-15.3,1.05,-4.6],"Накладная склада: поставка с маркировкой Ш-6 пришла без водителя. Внутри коробок слышали дыхание."),ze([5.7,.45,38.8],"Старая записка: не стой у контейнеров дольше минуты. Он сначала копирует шаги, потом голос.")],mt=[Ss([-12,0,5]),Ss([6,0,4]),Ss([14,0,-10])];mt.forEach(D=>c.add(D));const Xt=Wm();Xt.position.set(5,-1.5,38),c.add(Xt);const I=Wm();I.visible=!1,I.scale.setScalar(.9),c.add(I);const wt=[];for(let D=0;D<12;D+=1){const C=Ie(.55,.018,.18,3870731,[8+Math.random()*8,.01,13+Math.random()*4]);C.rotation.y=Math.random()*Math.PI,C.visible=!1,c.add(C),wt.push(C)}const je=["Аружан","Марат","Старик","Клиент 05:12","Охранник"].map((D,C)=>{const V=qw([2980295,9581736,5862204,1118481,7020328][C],C);return V.position.set(-15+C*2.4,0,-12),V.visible=!1,V.userData.initialPosition=V.position.clone(),c.add(V),{mesh:V,stage:"waiting",target:new U(-10+C*4,0,-5+C%2*8),item:Ci[C%Ci.length],weird:C>=3,leaveTime:0,checkoutTime:0,angry:!1,spawnAt:2+C*5}}),rt=[{mesh:Gm(),active:!1,health:3,target:new U(12,0,-10)},{mesh:Gm(),active:!1,health:3,target:new U(-13,0,4)}];rt.forEach((D,C)=>{D.mesh.position.set(C===0?14:-15,0,-13),D.mesh.visible=!1,c.add(D.mesh)});const he=[],gt=Ie(42,.12,70,1514013,[0,-.06,42]);gt.visible=!0,c.add(gt);const w=Ie(4.5,2.2,2.6,2182202,[5,1.1,38]);w.visible=!0,c.add(w),he.push(new cn().setFromObject(w));const S=Ie(4.7,.18,2.8,1521707,[5,2.28,38]);S.rotation.x=-.18,c.add(S),he.push(new cn().setFromObject(S));const k=[Ss([2.2,0,39.4]),Ss([7.6,0,36.9]),Ss([5.9,0,41.1])];k.forEach(D=>{D.visible=!0,c.add(D)});const Q=[];for(let D=-15;D<=15;D+=5){const C=Ie(.08,.018,9,14210504,[D,.02,30]);C.visible=!0,c.add(C),Q.push(C)}[Tu([-12,0,33],2303532),Tu([-4,0,31],6363938),Tu([12,0,35],1913671)].forEach(D=>{D.visible=!0,c.add(D),Q.push(D)});const ne=new Ur(16765819,0,22);ne.position.set(-8,6,30);const oe=new Ur(16765819,0,22);oe.position.set(10,6,52),ne.intensity=.35,oe.intensity=.28,c.add(ne,oe);const fe=[gt,w,S,...k,...Q],$=[ne,oe],J={},ge=new Set(["w","a","s","d","shift","e","q","escape"]),Se=D=>{const C=Hm(D);ge.has(C)&&D.preventDefault(),J[C]=!0,C==="q"&&(m.visible=!m.visible,s({message:m.visible?"Фонарик включен. Следы возле мусорки стали видны.":"Фонарик выключен."})),C==="e"&&p(),C==="escape"&&y.unlock()},ce=D=>{const C=Hm(D);ge.has(C)&&D.preventDefault(),J[C]=!1};document.addEventListener("keydown",Se),document.addEventListener("keyup",ce),v.domElement.tabIndex=0,v.domElement.addEventListener("click",()=>{v.domElement.focus(),y.lock()});const ae=new Hy;e.current={renderer:v,scene:c,camera:d,controls:y,clock:ae,keys:J,customers:je,monster:{mesh:Xt,active:!1,emerging:0},scareMesh:I,flashlight:m,traces:wt,colliders:R,outsideColliders:he,trashObjects:mt,stockObjects:pt,carts:lt,fridges:it,loreNotes:Pt,bandits:rt,phone:K,cameraDesk:pe,exitDoor:_,autoDoorLeft:A,autoDoorRight:P,helpExit:j,dumpster:w,outsideObjects:fe,outsideLights:$};const Ne=()=>{requestAnimationFrame(Ne);const D=e.current;if(!D)return;const C=Math.min(.04,D.clock.getDelta()),V=r.current,X=new U;if(D.keys.w&&(X.z-=1),D.keys.s&&(X.z+=1),D.keys.a&&(X.x-=1),D.keys.d&&(X.x+=1),X.lengthSq()>0&&V.phase!=="menu"){X.normalize();const ie=D.keys.shift?8.8:4.6,Ye=D.camera.position.clone(),an=new U;D.camera.getWorldDirection(an),an.y=0,an.normalize();const Zt=new U().crossVectors(an,D.camera.up).normalize();D.camera.position.addScaledVector(an,-X.z*ie*C),D.camera.position.addScaledVector(Zt,X.x*ie*C),D.camera.position.y=1.7,V.phase!=="outside"?(D.camera.position.x=Bn(D.camera.position.x,-16.8,17.2),D.camera.position.z=Bn(D.camera.position.z,-15.8,16.4)):(D.camera.position.x=Bn(D.camera.position.x,-19,19),D.camera.position.z=Bn(D.camera.position.z,17,58));const es=new cn().setFromCenterAndSize(D.camera.position,new U(.65,1.7,.65));(V.phase==="outside"?D.outsideColliders:D.colliders).some(so=>so.intersectsBox(es))&&D.camera.position.copy(Ye)}D.flashlight.position.copy(D.camera.position);const me=new U;D.camera.getWorldDirection(me),D.flashlight.target.position.copy(D.camera.position).add(me.multiplyScalar(10)),D.flashlight.visible&&V.phase!=="menu"&&(s({battery:Bn(V.battery-C*1.7,0,100)}),V.battery<=1&&(D.flashlight.visible=!1));const re=new U;D.camera.getWorldDirection(re),D.carts.forEach(ie=>{if(!ie.userData.follow)return;const Ye=ie.userData.kind==="basket"?.9:2.15,an=D.camera.position.clone().add(re.clone().multiplyScalar(Ye));an.y=ie.userData.kind==="basket"?.65:0,ie.position.lerp(an,Math.min(1,C*9)),ie.lookAt(D.camera.position.x,ie.position.y,D.camera.position.z)}),D.fridges.forEach(ie=>{const Ye=ie.mesh.worldToLocal(D.camera.position.clone()),Zt=ie.manualOpen||Math.abs(Ye.x)<1.6&&Math.abs(Ye.z)<2.1?ie.door.userData.openZ:ie.door.userData.closedZ;ie.door.position.z+=(Zt-ie.door.position.z)*Math.min(1,C*6)});const te=D.camera.position.distanceTo(D.exitDoor.position)<4||D.customers.some(ie=>ie.stage==="leave"&&ie.mesh.position.distanceTo(D.exitDoor.position)<5)||V.phase==="outside",Te=te?10.35:11.25,Oe=te?13.65:12.75;if(D.autoDoorLeft.position.z+=(Te-D.autoDoorLeft.position.z)*Math.min(1,C*7),D.autoDoorRight.position.z+=(Oe-D.autoDoorRight.position.z)*Math.min(1,C*7),V.phase!=="menu"&&V.phase!=="outside"&&V.phase!=="dead"&&V.phase!=="escaped"&&D.camera.position.x>16.45&&D.camera.position.z>10&&D.camera.position.z<14.2){const ie=V.phase==="armed"||Object.values(V.tasks).filter(Boolean).length>=6;o("outside"),ie&&(D.customers.forEach(Ye=>{Ye.mesh.visible=!1}),D.trashObjects.forEach(Ye=>{Ye.visible=!1}),D.stockObjects.forEach(Ye=>{Ye.visible=!1})),D.helpExit.visible=!0,D.outsideObjects.forEach(Ye=>{Ye.visible=!0}),D.outsideLights.forEach(Ye=>{Ye.intensity=ie?1.55:.86}),D.scene.fog=new Is(592656,.052),D.camera.position.set(0,1.7,24),D.monster.mesh.visible=!1,D.monster.active=!1,D.monster.mesh.position.set(5,-1.5,38),D.monster.emerging=0,D.traces.forEach(Ye=>{Ye.visible=!0}),s({phase:"outside",outsideFinal:ie,message:ie?"Ты вышел на парковку с мусором. Контейнер сдвинулся сам.":"Автоматические двери раскрылись. Ты вышел на пустую парковку, хотя смена еще не закончена."})}D.customers.forEach(ie=>{if(ie.stage==="gone")return;if(ie.stage==="waiting"){if(!V.tasks.phone||(ie.leaveTime+=C,ie.leaveTime<ie.spawnAt))return;ie.stage="browse",ie.mesh.visible=!0,ie.mesh.position.copy(ie.mesh.userData.initialPosition),ie.target.copy(Ja[Math.floor(Math.random()*Ja.length)]),ie.leaveTime=0;return}if(ie.stage==="leave"&&(ie.leaveTime+=C,ie.leaveTime>12)){ie.stage="gone",ie.mesh.visible=!1;return}if(ie.stage==="checkout"&&(ie.checkoutTime+=C,!ie.angry&&ie.checkoutTime>13)){ie.angry=!0,ie.stage="leave",ie.leaveTime=0,ie.target.set(19.5,0,12);const Zt=Math.min(V.served+1,D.customers.length);s({served:Zt,fear:Bn(V.fear+10,0,100),message:`Клиент разозлился из-за ожидания, издал хриплый звук и ушел без покупки: ${ie.item}.`}),l(),Zt>=D.customers.length&&o("cashier");return}const Ye=ie.mesh.position,an=ie.target.clone().sub(Ye);if(an.length()>.15){const Zt=Ye.clone();an.normalize(),Ye.add(an.multiplyScalar(C*(ie.stage==="leave"?4.4:1.3))),ie.mesh.lookAt(ie.target.x,Ye.y,ie.target.z);const es=new cn().setFromCenterAndSize(new U(Ye.x,.9,Ye.z),new U(.58,1.8,.58));ie.stage!=="leave"&&D.colliders.some(si=>si.intersectsBox(es))&&(Ye.copy(Zt),ie.target.copy(Ja[Math.floor(Math.random()*Ja.length)]))}else if(ie.stage==="leave")ie.stage="gone",ie.mesh.visible=!1;else if(ie.stage==="browse"){if(ie.stage="checkout",ie.checkoutTime=0,ie.angry=!1,!ie.mesh.userData.carryingProduct){const Zt=fd(ie.item,15782460);Zt.name="carriedProduct",Zt.scale.setScalar(.42),Zt.position.set(.42,.78,-.22),ie.mesh.add(Zt),ie.mesh.userData.carryingProduct=!0}ie.target.set(-3+Math.random()*2,0,10.2+Math.random()),ie.weird&&(s({message:"Клиент слишком долго смотрит в камеру. На лице нет моргания."}),a(ie.item==="пустой чек"?"screamer-mask":"screamer-grin"))}}),D.customers.every(ie=>ie.stage==="gone")&&V.tasks.cashier&&V.tasks.stock&&V.tasks.trash&&V.tasks.cameras&&V.tasks.bandits&&V.phase==="shift"&&s({phase:"armed",message:"Смена почти закрыта. Теперь вынеси мусор на улицу, если решишься."}),V.tasks.cameras&&V.served>=3&&D.bandits.forEach(ie=>{!ie.active&&ie.health>0&&(ie.active=!0,ie.mesh.visible=!0)});let Fn=0;if(D.bandits.forEach(ie=>{if(!ie.active||ie.health<=0)return;Fn+=1;const Ye=D.camera.position.clone().sub(ie.mesh.position);Ye.y=0,Ye.length()>1.35?(ie.mesh.position.add(Ye.normalize().multiplyScalar(C*2.15)),ie.mesh.lookAt(D.camera.position.x,1.4,D.camera.position.z)):Math.random()<C*1.2&&s({health:Bn(V.health-8,0,100),message:"Бандит ударил тебя у прохода. Нужно отбиваться рядом клавишей E."})}),V.tasks.cameras&&V.served>=3&&Fn===0&&!V.tasks.bandits&&o("bandits"),V.phase==="outside")if(D.camera.position.z<18.5)D.camera.position.set(16.25,1.7,12),D.scene.fog=new Is(329223,.026),D.monster.mesh.visible=!1,D.monster.active=!1,D.monster.emerging=0,s({phase:V.outsideFinal?"escaped":"shift",outsideFinal:!1,message:V.outsideFinal?"You slammed back into the store. The glass doors closed before the monster reached you.":"You returned to the store through the automatic doors."});else{const ie=D.camera.position.distanceTo(D.dumpster.position)<6.2;if(!V.outsideFinal&&ie&&(D.monster.mesh.visible=!0,D.monster.active=!0,D.monster.mesh.position.set(5,-1.5,38),D.monster.emerging=0,s({outsideFinal:!0,fear:Bn(V.fear+18,0,100),message:"The dumpster lid moves by itself. Run back to the store."}),a("screamer-trash3d")),V.outsideFinal){D.monster.mesh.visible=!0,D.monster.active=!0,D.monster.emerging=Bn(D.monster.emerging+C*.42,0,1),D.monster.mesh.position.y=-1.5+D.monster.emerging*1.75,D.monster.mesh.lookAt(D.camera.position.x,1.7,D.camera.position.z);const Ye=D.camera.position.clone().sub(D.monster.mesh.position);Ye.y=0,D.monster.emerging>=.7&&Ye.length()>1.8&&D.monster.mesh.position.add(Ye.normalize().multiplyScalar(C*3.35)),D.monster.mesh.position.distanceTo(D.camera.position)<2.5&&(s({phase:"dead",message:"The monster caught you near the dumpsters."}),a("screamer-trash3d"))}else D.monster.mesh.visible=!1,D.monster.active=!1}V.phase==="shift"&&V.tasks.cameras&&D.monster.emerging<.26&&(D.monster.mesh.visible=!0,D.monster.mesh.position.set(13.5,-.9,-14.5),D.monster.mesh.rotation.y+=C*.25,D.monster.emerging+=C*.018,D.monster.mesh.scale.setScalar(.38+D.monster.emerging)),V.health<=0&&V.phase!=="dead"&&(s({phase:"dead",message:"Ты потерял сознание между полками."}),a("screamer-grin")),Math.random()<C*.05&&V.phase==="shift"&&(f.intensity=f.intensity>1?.95:2.4,s({message:"Свет моргнул. За спиной прозвучали шаги."})),Math.random()<C*.006&&V.phase==="shift"&&!V.cameraOpen&&!V.screamer&&V.served>=2&&(s({message:"На секунду в стекле холодильника появилось лицо."}),a("screamer-mask")),v.render(c,d)};Ne();const Fe=()=>{t.current&&(d.aspect=t.current.clientWidth/t.current.clientHeight,d.updateProjectionMatrix(),v.setSize(t.current.clientWidth,t.current.clientHeight))};return window.addEventListener("resize",Fe),()=>{var D;window.removeEventListener("resize",Fe),document.removeEventListener("keydown",Se),document.removeEventListener("keyup",ce),v.dispose(),(D=t.current)==null||D.removeChild(v.domElement),e.current=null}},[]);const u=()=>{const c=e.current;if(!c||c.audio)return;const d=new AudioContext,v=d.createOscillator(),y=d.createGain();v.frequency.value=47,v.type="sine",y.gain.value=.025,v.connect(y),y.connect(d.destination),v.start(),c.audio=d,c.wind=v,s({message:"Пространственный шум включен: гул ламп, ветер и шорохи магазина."})},h=()=>{const c=e.current;c&&(s({phase:"shift",message:"Ты пришел на ночную смену. Ответь на телефон охраны у входа.",tasks:Vm,served:0,stocked:0,trash:0,fear:0,health:100,battery:100,heldItem:null,inventory:0,outsideFinal:!1,trashDelivered:0}),c.camera.position.set(0,1.7,14),c.stockObjects.forEach(d=>{d.visible=!!d.userData.initialVisible}),c.trashObjects.forEach(d=>{d.visible=!0}),c.customers.forEach(d=>{d.stage="waiting",d.leaveTime=0,d.checkoutTime=0,d.angry=!1,d.mesh.visible=!1,d.mesh.position.copy(d.mesh.userData.initialPosition),d.mesh.children.filter(v=>v.name==="carriedProduct").forEach(v=>d.mesh.remove(v)),d.mesh.userData.carryingProduct=!1}),c.carts.forEach(d=>{d.userData.follow=!1,d.userData.items=0}),c.fridges.forEach(d=>{d.manualOpen=!1}),c.loreNotes.forEach(d=>{d.visible=!0}),c.outsideObjects.forEach(d=>{d.visible=!0}),c.outsideLights.forEach(d=>{d.intensity=.35}),c.monster.mesh.visible=!1,c.monster.emerging=0,c.renderer.domElement.focus(),c.controls.lock(),u())},p=()=>{const c=e.current;if(!c)return;const d=r.current,v=c.camera.position,y=(_,A=2.2)=>_.position.distanceTo(v)<A;if(d.phase==="menu"){h();return}const g=c.fridges.find(_=>_.mesh.position.distanceTo(v)<3);if(g){g.manualOpen=!g.manualOpen,s({message:g.manualOpen?"Ты открыл холодильник. Холодный свет вытекает в проход.":"Ты закрыл дверцу холодильника."});return}const f=c.loreNotes.find(_=>_.visible&&_.position.distanceTo(v)<2);if(f){f.visible=!1,s({message:String(f.userData.lore??"Запись стерта. Остался только запах мокрой бумаги."),fear:Bn(d.fear+8,0,100)});return}const m=c.carts.find(_=>_.position.distanceTo(v)<2.7);if(m){if(d.heldItem){m.userData.items=Number(m.userData.items??0)+1,s({heldItem:null,message:`${d.heldItem} лежит в ${m.userData.kind==="basket"?"корзине":"тележке"}. Внутри товаров: ${m.userData.items}.`});return}const _=!m.userData.follow;c.carts.forEach(A=>{A.userData.follow=!1}),m.userData.follow=_,s({message:_?m.userData.kind==="basket"?"Ты взял ручную корзину. Она держится перед тобой.":"Ты взял тележку. Она катится перед тобой.":m.userData.kind==="basket"?"Ты поставил корзину.":"Ты отпустил тележку."});return}const x=c.bandits.find(_=>_.active&&_.health>0&&_.mesh.position.distanceTo(v)<2.4);if(x){x.health-=1,x.mesh.position.add(x.mesh.position.clone().sub(v).normalize().multiplyScalar(1.3)),s({message:"Ты отбился от бандита. В проходе снова слышен чужой бег."}),x.health<=0&&(x.active=!1,x.mesh.visible=!1,s({message:"Бандит убежал в темный проход. Но за холодильниками кто-то еще дышит."}));return}const M=c.stockObjects.find(_=>_.visible&&_.position.distanceTo(v)<2.25);if(M&&!d.heldItem){const _=String(M.userData.product??"товар");M.visible=!1,s({heldItem:_,inventory:d.inventory+1,message:`Ты взял товар: ${_}. Его можно положить в тележку или вернуть на пустую полку.`});return}if(y(c.phone)&&!d.tasks.phone){o("phone"),s({message:'Голос в телефоне: "Ночью нельзя выходить к мусорным контейнерам."'}),a("screamer-dust");return}const R=c.customers.find(_=>_.stage==="checkout"&&_.mesh.position.distanceTo(v)<4.2);if(R){R.stage="leave",R.leaveTime=0,R.checkoutTime=0,R.angry=!1,R.target.set(19.5,0,12);const _=d.served+1;s({served:_,message:`Пробит товар: ${R.item}. Клиент уходит из магазина.`}),_>=c.customers.length&&o("cashier"),R.weird&&a("screamer-longneck");return}const T=c.stockObjects.find(_=>!_.visible&&_.position.distanceTo(v)<5.5);if(T&&d.heldItem){T.visible=!0;const _=d.stocked+1;s({stocked:_,heldItem:null,message:`Полка пополнена: ${T.userData.product}.`}),_>=18&&o("stock");return}if(d.phase==="outside"&&d.heldItem==="Trash bag"&&y(c.dumpster,5.5)){const _=d.trashDelivered+1;s({heldItem:null,trashDelivered:_,outsideFinal:!0,fear:Bn(d.fear+22,0,100),message:"The trash bag drops into the dumpster. Something inside pushes back. Run to the store."}),c.monster.mesh.visible=!0,c.monster.active=!0,c.monster.mesh.position.set(5,-1.5,38),c.monster.emerging=0,a("screamer-trash3d");return}const b=c.trashObjects.find(_=>_.visible&&_.position.distanceTo(v)<2.2);if(b){if(d.heldItem){s({message:"Your hands are full. Take the current item outside or put it into a cart first."});return}b.visible=!1;const _=d.trash+1;s({trash:_,heldItem:"Trash bag",message:"You picked up a heavy trash bag. Carry it outside to the dumpster."}),s({trash:_,message:"Мусор собран. Пакет будто тяжелее, чем должен быть."}),s({trash:_,heldItem:"Trash bag",message:"You picked up a heavy trash bag. Carry it outside to the dumpster."}),_===1&&a("screamer-dust"),_>=c.trashObjects.length&&o("trash");return}if(y(c.cameraDesk,2.5)){o("cameras");const _=!d.cameraOpen;s({cameraOpen:_,message:_?"Камеры открыты. На одной из них видна мусорка.":"Камеры закрыты."}),_&&a("screamer-mask");return}if(y(c.exitDoor,3)&&d.phase!=="outside"&&d.phase!=="dead"&&d.phase!=="escaped"){const _=d.phase==="armed"||Object.values(d.tasks).filter(Boolean).length>=6;o("outside"),_&&(c.customers.forEach(A=>{A.mesh.visible=!1}),c.trashObjects.forEach(A=>{A.visible=!1}),c.stockObjects.forEach(A=>{A.visible=!1})),c.helpExit.visible=!0,c.outsideObjects.forEach(A=>{A.visible=!0}),c.outsideLights.forEach(A=>{A.intensity=_?1.45:.82}),c.scene.fog=new Is(592656,.052),c.camera.position.set(0,1.7,24),c.monster.mesh.visible=!1,c.monster.active=!1,c.monster.mesh.position.set(5,-1.5,38),c.monster.emerging=0,c.traces.forEach(A=>{A.visible=!0}),s({phase:"outside",outsideFinal:_,message:_?"Финальная сцена: ночь, туман, фонари. Монстр вылезает из мусорки.":"Ты вышел на улицу раньше времени. Парковка пустая, но у контейнеров слышно мокрое дыхание."});return}s({message:"Подойди ближе: телефон, касса, полки, мусор, камеры или выход."})};return He.jsxs("main",{className:"three-game",children:[He.jsx("div",{className:"viewport",ref:t}),n.phase==="menu"&&He.jsxs("section",{className:"title-screen",children:[He.jsx("h1",{children:"Шестёрочка Horror"}),He.jsx("p",{children:"3D-хоррор от первого лица. Ночная смена, клиенты, камеры и монстр у мусорных контейнеров."}),He.jsx("button",{type:"button",onClick:h,children:"Начать смену"})]}),He.jsxs("section",{className:"hud3d",children:[He.jsxs("div",{children:[He.jsx("b",{children:n.phase==="outside"?"Финал: улица":"Ночная смена"}),He.jsx("span",{children:n.message}),n.heldItem?He.jsxs("em",{children:["В руках: ",n.heldItem]}):null]}),He.jsxs("div",{className:"bars",children:[He.jsxs("label",{children:["Здоровье ",He.jsx("i",{style:{width:`${n.health}%`}})]}),He.jsxs("label",{children:["Батарея ",He.jsx("i",{style:{width:`${n.battery}%`}})]}),He.jsxs("label",{children:["Страх ",He.jsx("i",{style:{width:`${n.fear}%`}})]})]})]}),He.jsxs("aside",{className:"quest-log",children:[He.jsx("b",{children:"Квесты"}),He.jsx("span",{className:n.tasks.phone?"done":"",children:"E: ответить на телефон"}),He.jsxs("span",{className:n.tasks.cashier?"done":"",children:["Обслужить клиентов: ",n.served,"/5"]}),He.jsxs("span",{className:n.tasks.stock?"done":"",children:["Пополнить полки: ",n.stocked,"/18"]}),He.jsxs("span",{className:n.tasks.trash?"done":"",children:["Собрать мусор: ",n.trash,"/3"]}),He.jsx("span",{className:n.tasks.cameras?"done":"",children:"Посмотреть камеры"}),He.jsx("span",{className:n.tasks.bandits?"done":"",children:"Отбиться от бандитов"}),He.jsx("span",{className:n.tasks.outside?"done":"",children:"Вынести мусор наружу"})]}),He.jsxs("div",{className:"controls-note",children:["WASD - ходьба · Shift - бег · мышь - обзор · E - действие · Q - фонарик · Esc - меню",!n.locked&&n.phase!=="menu"?He.jsx("strong",{children:"Кликни по игре, чтобы захватить мышь"}):null]}),n.cameraOpen&&He.jsxs("div",{className:"camera-panel",children:[He.jsx("b",{children:"CAM 05:12"}),He.jsxs("div",{className:"camera-grid",children:[He.jsx("i",{children:"SHOP AISLE"}),He.jsx("i",{children:"SECURITY"}),He.jsx("i",{children:"PARKING"}),He.jsx("i",{children:"TRASH ZONE"})]}),He.jsx("span",{children:"Помехи. Контейнеры. Что-то движется внутри мусорки."})]}),n.screamer&&He.jsx("div",{className:"screamer3d",style:{backgroundImage:`url(${Yw(n.screamer)})`}})]})}Au.createRoot(document.getElementById("root")).render(He.jsx(cv.StrictMode,{children:He.jsx(Kw,{})}));
