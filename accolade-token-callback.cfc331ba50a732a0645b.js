!function(e){function n(n){for(var t,u,a=n[0],f=n[1],l=n[2],p=0,s=[];p<a.length;p++)u=a[p],o[u]&&s.push(o[u][0]),o[u]=0;for(t in f)Object.prototype.hasOwnProperty.call(f,t)&&(e[t]=f[t]);for(c&&c(n);s.length;)s.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,n=0;n<i.length;n++){for(var r=i[n],t=!0,a=1;a<r.length;a++){var f=r[a];0!==o[f]&&(t=!1)}t&&(i.splice(n--,1),e=u(u.s=r[0]))}return e}var t={},o={4:0},i=[];function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=t,u.d=function(e,n,r){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(r,t,function(n){return e[n]}.bind(null,t));return r},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],f=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var c=f;i.push([28,0,1]),r()}({28:function(e,n,r){"use strict";r.r(n);var t=r(2);Office.initialize=(()=>{}),Office.onReady(()=>{try{window.opener.postMessage(JSON.stringify({parse:!1,value:location.href}),location.origin),window.close()}catch(e){t.b.error("Cannot close dialog",e)}})},9:function(e){e.exports={b:"Sopheon Accolade enhancements for Office Online and GSuite",a:"Copyright © 2001-2019 Sopheon PLC. All rights reserved."}}});