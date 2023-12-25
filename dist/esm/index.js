import n,{useEffect as e,useCallback as t,useRef as r,createContext as o,memo as i,useContext as u,useState as c}from"react";var a=function(n,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},a(n,e)};function l(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}a(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var s,f,v,d=function(){return d=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},d.apply(this,arguments)};function p(n,e,t,r){return new(t||(t=Promise))((function(o,i){function u(n){try{a(r.next(n))}catch(n){i(n)}}function c(n){try{a(r.throw(n))}catch(n){i(n)}}function a(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(u,c)}a((r=r.apply(n,e||[])).next())}))}function m(n,e){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(n,u)}catch(n){c=[6,n],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}function y(n,e,t){if(t||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return n.concat(r||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError,function(n){n.onInit="onInit",n.onEnter="onEnter",n.onLeave="onLeave",n.onClosing="onClosing"}(s||(s={})),function(n){n.onEnter="onEnter",n.onLeave="onLeave"}(f||(f={}));var h=[],w=!1,b=!0;function g(n){setTimeout((function(){window.history.pushState({id:n.id,name:n.id},n.id)}),100),h.push(n)}function E(n){h.remove((function(e){return e.id===n}))}function C(){b=!1,setTimeout((function(){b=!0}),1e3)}function k(n){return v||(v=function(){var n=window.location.href,e=n.indexOf("?"),t="";e>0&&(t=n.substring(e+1));return t.split("&").reduce((function(n,e){var t=e.split("=");return n[t[0]]=t[1],n}),{})}()),v[n]}function T(n){var e=function(n,e){var t=e.split("?")[0],r=[],o=-1!==e.indexOf("?")?e.split("?")[1]:"";if(""!==o){for(var i=(r=o.split("&")).length-1;i>=0;i-=1)r[i].split("=")[0]===n&&r.splice(i,1);r.length&&(t="/?"+r.join("&"))}return t}(n,window.location.href);window.history.replaceState({},document.title,e)}function x(n){var e;b&&(n.state,h.length>0&&(e=h.pop())&&e.back())}function L(n){"Escape"===n.key&&window.history.back()}w||(window.onpopstate=x,document.addEventListener("popstate",x),document.addEventListener("keydown",L,!1),w=!0);var A={},D=[],I={};function V(n,e,t,r,o,i,u){A[n]?console.warn("ViewModule","Duplicate container type"):A[n]={views:[],containerOrder:e,config:t,openView:r,closeView:o,activateView:i,changeContainer:u}}function _(n){A[n]&&delete A[n]}function S(n){var e,t,r,o,i;return p(this,void 0,void 0,(function(){var u,c,a,l,s;return m(this,(function(v){switch(v.label){case 0:return v.trys.push([0,5,,6]),n.id||(n.id=n.type+"-"+Date.now()),(u=A[n.type])?F(n.type,n.id)||(c=u.views.find((function(e){return e.id===n.id})))&&!(null===(e=u.config)||void 0===e?void 0:e.moveBetweenViews)?[2]:(a=P(),(l=(null==a?void 0:a.type)===n.type)&&(null==a?void 0:a.id)===n.id?[2]:(a&&!l&&(s=A[a.type],null===(t=s.changeContainer)||void 0===t||t.call(s,n,f.onLeave)),(null===(r=u.config)||void 0===r?void 0:r.disableBrowserHistory)||g({id:n.id,back:function(){N(n.id,n.type)}}),B(n.type,n.id,!0),c?[4,null===(o=u.activateView)||void 0===o?void 0:o.call(u,c)]:[3,2])):[2];case 1:return v.sent(),function(n){var e=D.remove((function(e){return e.id===n.id}));e&&D.push(e)}(c),[3,4];case 2:return u.views.push(n),[4,u.openView(n)];case 3:v.sent(),null===(i=n.onOpened)||void 0===i||i.call(n),function(n){D.push(n)}(n),v.label=4;case 4:return B(n.type,n.id,!1),[3,6];case 5:return v.sent(),B(n.type,n.id,!1),[3,6];case 6:return[2]}}))}))}function N(n,e,t,r){var o,i,u,c;return void 0===t&&(t="Current"),p(this,void 0,void 0,(function(){var a,l,s,v,d,p,y,h;return m(this,(function(m){switch(m.label){case 0:return m.trys.push([0,2,,3]),n&&e?(a=A[e])?F(e,n)||(l=a.views.findIndex((function(e){return e.id===n})))<0||D.length<2?[2]:(s=a.views[l],v=P([s.id]),d=R(a.views.map((function(n){return n.id})),t,l),p=P(d,s.type),y=(null==v?void 0:v.type)===s.type,v&&!y&&(h=A[v.type],null===(o=h.changeContainer)||void 0===o||o.call(h,s,f.onEnter)),(null===(i=a.config)||void 0===i?void 0:i.disableBrowserHistory)||E(n),B(e,n,!0),null===(u=s.onClose)||void 0===u||u.call(s,r),[4,a.closeView(s,p,t)]):[2]:[2];case 1:return m.sent(),null===(c=s.onClosed)||void 0===c||c.call(s,r),M(a.views,t,l),function(n,e){switch(e){case"All":D.removeAll((function(e){return e.type===n.type}));break;case"AllExceptFirst":case"AllExceptLast":break;case"Current":D.remove((function(e){return e.id===n.id}))}}(s,t),B(e,n,!1),[3,3];case 2:return m.sent(),B(e,n,!1),[3,3];case 3:return[2]}}))}))}function M(n,e,t){var r=n.length;switch(e){case"All":return n.splice(0,r);case"AllExceptFirst":return n.splice(1,r-1);case"AllExceptLast":return n.splice(0,r-1);case"Current":return n.splice(t,1)}}function R(n,e,t){var r=n.length;switch(e){case"All":return n.slice(0,r);case"AllExceptFirst":return n.slice(1,r);case"AllExceptLast":return n.slice(0,r-1);case"Current":return n[t]}}function P(n,e){for(var t=D.length-1;t>=0;t--){var r=D[t];if((n||[]).indexOf(r.id)<0&&(void 0===e||r.type===e))return r}}function F(n,e){return(I[n]||[]).findIndex((function(n){return n===e}))>-1}function B(n,e,t){var r=I[n];r||(r=I[n]=[]),t?r.safePush(e):r.remove((function(n){return n===e}))}var O,z=function(n){e(n,[])},H=function(){z((function(){var n=function(n){n.preventDefault()};return window.addEventListener("selectstart",n),function(){window.removeEventListener("selectstart",n)}}))},X=function(n){return t(n,[])};!function(n){n.None="None",n.Tap="Tap",n.RightClick="RightClick",n.DoubleClick="DoubleClick",n.Hover="Hover",n.Press="Press",n.HorizontalSwipe="HorizontalSwipe",n.VerticalSwipe="VerticalSwipe"}(O||(O={}));var j=function(n,e,t){var o=r(),i=r(),u=r([]),c=r(!1),a=r(),l=r();H();var s=function(){return Date.now()},f=function(n){if(n.touches){var e=i.current,t=n.touches[n.touches.length-1],r=n.clientX||t.clientX,o=n.clientY||t.clientY;return{x:r,y:o,moveX:r-((null==e?void 0:e.x)||0),moveY:o-((null==e?void 0:e.y)||0),e:n}}},v=function(n){var e,r=u.current;s()-r[r.length-1]>300||c.current?m():r.length<2||(m(),2===r.length&&r[1]-r[0]<300&&(null===(e=null==t?void 0:t.onDoubleClick)||void 0===e||e.call(t,n)))},p=function(n){var e;n.preventDefault(),null===(e=t.onRightClick)||void 0===e||e.call(t,n)},m=function(){u.current=[]},y=X((function(n){var e=u.current;e.length>2&&(u.current.length=0),e.push(s()),i.current=l.current=f(n),T(!0),b(n)})),h=X((function(n){var e;g(n),T(!1),w(),a.current&&(null===(e=t.onTouchEnd)||void 0===e||e.call(t,l.current),a.current=void 0)})),w=function(){var n=o.current;n&&(clearTimeout(n),o.current=void 0)},b=function(n){if(e===O.Press)!function(n){w(),m(),o.current=setTimeout((function(){var e;c.current||null===(e=t.onPress)||void 0===e||e.call(t,n)}),500)}(n)},g=function(n){switch(e){case O.DoubleClick:v(n);break;case O.Tap:!function(n){var e,r=u.current;1!==r.length||c.current?m():(m(),s()-r[0]>300||(u.current=[],null===(e=null==t?void 0:t.onTap)||void 0===e||e.call(t,n)))}(n);break;default:m()}},E=X((function(n){switch(c.current=!0,e){case O.HorizontalSwipe:case O.VerticalSwipe:!function(n){var r,u=f(n);if(l.current=u,o.current)a.current&&(null===(r=t.onTouchMove)||void 0===r||r.call(t,u));else{m();var s=e===O.VerticalSwipe;o.current=setTimeout((function(){var n,e,r,o;if(c.current){var l=i.current;if(u&&l){var f=Math.abs(u.moveX),v=Math.abs(u.moveY);f<v&&s?(a.current=!0,null===(n=t.onTouchStart)||void 0===n||n.call(t,d(d({},u),{x:l.x,y:l.y})),null===(e=t.onTouchMove)||void 0===e||e.call(t,u)):f>=v&&!s&&(a.current=!0,null===(r=t.onTouchStart)||void 0===r||r.call(t,d(d({},u),{x:l.x,y:l.y})),null===(o=t.onTouchMove)||void 0===o||o.call(t,u))}}}),10)}}(n)}})),C=X((function(n){var e;null===(e=null==t?void 0:t.onMouseover)||void 0===e||e.call(t,n)})),k=X((function(n){var e;null===(e=null==t?void 0:t.onMouseout)||void 0===e||e.call(t,n)})),T=function(n){n&&!c.current?(L("mousemove",E),L("touchmove",E)):n||(c.current=!1,x("mousemove",E),x("touchmove",E))},x=function(e,t,r){n.current&&(r?n.current:window).removeEventListener(e,t)},L=function(e,t,r){n.current&&(r?n.current:window).addEventListener(e,t)},A=function(){if(n.current&&e!==O.None){if(e===O.Hover)return L("mouseover",C,!0),L("mouseout",k,!0),function(){x("mouseover",C,!0),x("mouseout",k,!0)};if(e===O.RightClick)return L("contextmenu",p,!0),function(){x("contextmenu",v,!0)};L("mousedown",y,!0),L("mouseup",h),L("touchstart",y,!0),L("touchend",h)}};return z((function(){return A(),function(){T(!1),x("mousedown",y,!0),x("mouseup",h),x("touchstart",y,!0),x("touchend",h),w()}})),{updateRef:function(){A()}}},q=function(n){var e={current:null};j(e,n.event,{onPress:function(n){return t(n)},onTap:function(n){return t(n)},onDoubleClick:function(n){return t(n)},onRightClick:function(n){return t(n)},onMouseover:function(n){t(n)}});var t=function(t){var r;S({type:"Overlay",component:n.component,data:n.mapDataTo?n.mapDataTo(n.data):n.data,onClose:function(e){var t;null===(t=n.onClose)||void 0===t||t.call(n,e)},options:{disableBackdrop:(n.backdrop,!0),params:{event:t,target:(null===(r=n.getTargetElement)||void 0===r?void 0:r.call(n))||e.current||t.target,position:n.position?n.position:"BottomRight"}}})};return e};function Y(e){var t=e.children,o=e.contextMenuConfig,i=e.data,u=e.onSelect,c=r(null);z((function(){var n;a.current=null===(n=c.current)||void 0===n?void 0:n.children[0]}));var a=q({component:o.component,backdrop:o.backdrop,className:o.className,onClose:function(n){null==u||u(n),o.onClose(n)},position:o.position,positionType:o.positionType,event:o.event,data:i,mapDataTo:o.mapDataTo});return n.createElement("span",{ref:c},t)}function U(e){var t=e.children,o=e.viewInfo,i=r(),u=j(i,O.VerticalSwipe,{onTouchMove:function(){console.log("Move horizontal")},onTouchStart:function(){console.log("Start move horizontal")},onTouchEnd:function(){console.log("End move horizontal")}}).updateRef;return z((function(){i.current=o.elRef,u()})),n.createElement(n.Fragment,null,t)}function G(e){var t=e.viewInfo,o=r(null),i=t.view.className;return z((function(){var n;t.elRef=o.current,null===(n=t.onInit)||void 0===n||n.call(t,o.current)})),n.createElement("div",{ref:o,className:"view-wrapper"+(i?" ".concat(i):"")},t.view.component())}var $=o({});i((function(e){var t=e.children,o=e.viewInfo,i=r({}),u=function(n,e){if(e){var t=i.current[n];t||(t=i.current[n]=[]),t.push(e)}},c=function(n,e){e&&i.current[n].remove((function(n){return n===e}))},a=function(n,e){var t=i.current[n];null==t||t.forEach((function(n){n(e)}))};return z((function(){o.events={onEnter:function(n){a(s.onEnter,n)},onLeave:function(n){a(s.onLeave,n)},onClosing:function(n){a(s.onClosing,n)}}})),n.createElement($.Provider,{value:{listenEvents:function(n){return u(s.onEnter,n.onEnter),u(s.onLeave,n.onLeave),u(s.onClosing,n.onClosing),function(){c(s.onEnter,n.onEnter),c(s.onLeave,n.onLeave),c(s.onClosing,n.onClosing)}},emitEvent:a,close:function(n,e){var t=o.view;N(t.id,t.type,n,e)},getViewData:function(){return o.view.data},openView:function(n){n.type=o.view.type,S(n)}}},t)}),(function(){return!0}));var J,K,Q,W=function(n){var e=u($);z((function(){if(n){var t=e.listenEvents(n);return function(){t()}}}));var t=function(n,t){var r;null===(r=e.close)||void 0===r||r.call(e,n,t)};return{close:function(n){t("Current",n)},closeByType:t,openView:function(n){var t;null===(t=e.openView)||void 0===t||t.call(e,n)},viewData:e.getViewData()}};function Z(){var e=W({}).viewData;return n.createElement("div",null,n.createElement("span",null,e.message))}function nn(){var e=W({}),t=e.close,r=e.viewData;return n.createElement(n.Fragment,null,n.createElement("div",{className:"confirm-card"},null==r?void 0:r.message),n.createElement("div",{className:"d-flex mt-3"},n.createElement("div",{style:{paddingRight:".5rem",width:"50%"}},n.createElement("button",{className:"btn btn-warning w-100",onClick:function(){return t({res:!1})}},"خیر")),n.createElement("div",{style:{paddingLeft:".5rem",width:"50%"}},n.createElement("button",{className:"btn btn-primary w-100",onClick:function(){return t({res:!0})}},"بله"))))}function en(){var t=this,o=c(),i=o[0],u=o[1],a=r(!1),l=W({}),s=l.viewData,f=l.close;return z((function(){return p(t,void 0,void 0,(function(){var n;return m(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s.callback()];case 1:return(n=e.sent()).type===Q.Close?f():u(n),[3,3];case 2:return e.sent(),f(),[3,3];case 3:return[2]}}))})),s.onClickedBackdrop=function(){a.current&&f()},function(){}})),e((function(){a.current=!!i}),[i]),n.createElement("div",null,i?n.createElement(n.Fragment,null,n.createElement("span",null,i.message),i.type===Q.Confirm&&n.createElement("button",{className:"btn btn-primary w-100",onClick:function(){return f({res:!0})}},i.confirmButtonCaption)):n.createElement(n.Fragment,null,n.createElement("span",null,s.message),n.createElement("span",null,"loading...")))}function tn(){var e=W(),t=e.close,r=e.viewData;return n.createElement("div",{style:{backgroundColor:"yellow",marginTop:"20px",borderRadius:"8px",padding:"5px"}},n.createElement("ul",null,r.options.map((function(e){return n.createElement("li",{onClick:function(){return t({res:e})},key:e.value},e.label)}))))}function rn(){var e=W({}),t=e.close,r=e.viewData;return n.createElement("ul",{className:"d-block bg-primary p-2 text-lite"},r.options.map((function(e){return n.createElement("li",{key:e.text,onClick:function(){t({res:e.value})}},e.text)})))}function on(){var e=r(),t=W({}),o=t.close,i=t.viewData;return z((function(){return i.delay&&(e.current=setTimeout((function(){o()}),1e3*i.delay)),function(){e.current&&clearTimeout(e.current)}})),n.createElement("div",{className:"w-100"},n.createElement("div",{className:"row"},n.createElement("h1",{className:"col-8"},i.message),n.createElement("button",{className:"col-3 btn btn-success",onClick:function(){return o({res:!0})}},"delete")))}!function(n){n.MasterTab="MasterTab",n.Tab="Tab",n.Modal="Modal",n.BottomSheet="BottomSheet",n.Toast="Toast"}(J||(J={})),function(n){n.Success="Success",n.Error="Error"}(K||(K={})),function(n){n.Close="Close",n.Confirm="Confirm"}(Q||(Q={}));var un=window,cn=un.$requestAnimationFrame=un.requestAnimationFrame||un.webkitRequestAnimationFrame||un.mozRequestAnimationFrame||function(n){un.setTimeout(n,1e3/60)};function an(n,e,t,r){var o=Date.now();if(n<0)throw new Error("ANIMATION_SPEED_INVALID");n=n||300;var i=!1,u=function(){if(i)null==r||r();else{var c=Math.min(1,(Date.now()-o)/n);e(Math.floor(1e3*c)/1e3),c<1?cn(u):t()}};return u(),function(){i=!0}}var ln=function(){var n=r([]),e=X((function(e){n.current.remove((function(n){return n===e}))})),t=X((function(t,r,o,i){var u=an(t,(function(n){r(n)}),(function(){e(u),o()}),(function(){e(u),null==i||i()}));return n.current.push(u),u})),o=X((function(n){e(n),n()}));return z((function(){return function(){n.current.forEach((function(n){n()})),n.current=[]}})),{requestAnimate:t,cancelAnimate:o}},sn=function(n,e,t,o,i,u,a,l){var s=c([]),v=s[0],d=s[1],h=r(""),w=r(!1),b=ln().requestAnimate,g=X((function(n,e,t,r){return new Promise((function(o,i){var u,c,a;if(t||o(!0),null===(u=null==t?void 0:t.start)||void 0===u||u.call(t,n,e,r),(null==r?void 0:r.disableAnimate)||!(null==t?void 0:t.duration))return null===(c=null==t?void 0:t.animate)||void 0===c||c.call(t,1,n,e,r),null===(a=null==t?void 0:t.end)||void 0===a||a.call(t,n,e,r),void o(!0);document.body.classList.add("animating"),b(t.duration,(function(o){var i;null===(i=null==t?void 0:t.animate)||void 0===i||i.call(t,o,n,e,r)}),(function(){var i;null===(i=null==t?void 0:t.end)||void 0===i||i.call(t,n,e,r),document.body.classList.remove("animating"),o(!0)}))}))})),E=X((function(n){return new Promise((function(e,r){var i={id:n.id,view:n,onInit:function(r){return p(void 0,void 0,void 0,(function(){var u,c,a,l,s,f,d;return m(this,(function(p){switch(p.label){case 0:return u=v.find((function(n){return n.id===h.current})),h.current=n.id,c=n.options,(a=null==c?void 0:c.disableAnimate)||w.current||(w.current=!0,a=(null==t?void 0:t.disableFirstTimeAnimate)||!1),(null==c?void 0:c.inBackground)?(r.style.display="none",e(!0),[2]):[4,g({view:n,ref:i.elRef},u?{view:null==u?void 0:u.view,ref:null==u?void 0:u.elRef}:void 0,o,{disableAnimate:a})];case 1:return p.sent(),u&&(null===(s=null===(l=u.events)||void 0===l?void 0:l.onLeave)||void 0===s||s.call(l,{toView:n})),null===(d=null===(f=i.events)||void 0===f?void 0:f.onEnter)||void 0===d||d.call(f,{fromView:null==u?void 0:u.view,data:n.data}),e(!0),[2]}}))}))}};v.push(i),d(y([],v,!0))}))})),C=X((function(n,e,r){return p(void 0,void 0,void 0,(function(){var o,u,c,a,l,s,f,p;return m(this,(function(m){switch(m.label){case 0:return h.current="",e&&(h.current=e.id,o=v.find((function(n){return n.id===e.id}))),(u=v.findIndex((function(e){return e.id===n.id})))<0?[2]:(c=v[u],a=!(null==t?void 0:t.moveBetweenViews)&&u<v.length-1,null===(s=null===(l=c.events)||void 0===l?void 0:l.onClosing)||void 0===s||s.call(l,{toView:e}),[4,g({view:v[u].view,ref:v[u].elRef},o?{view:o.view,ref:o.elRef}:void 0,i,{disableAnimate:a,closeType:r})]);case 1:return m.sent(),o&&(null===(p=null===(f=o.events)||void 0===f?void 0:f.onEnter)||void 0===p||p.call(f,{fromView:c.view})),u>-1&&(M(v,r,u),d(y([],v,!0))),[2]}}))}))})),k=X((function(n){return p(void 0,void 0,void 0,(function(){var e,t,r,o,i,c;return m(this,(function(a){switch(a.label){case 0:return(e=v.find((function(e){return e.id===n.id})))?h.current===n.id?[2]:(t=v.find((function(n){return n.id===h.current})),h.current=n.id,[4,g({view:e.view,ref:e.elRef},t?{view:t.view,ref:t.elRef}:void 0,u)]):[2];case 1:return a.sent(),t&&(null===(o=null===(r=t.events)||void 0===r?void 0:r.onLeave)||void 0===o||o.call(r,{toView:n})),null===(c=null===(i=e.events)||void 0===i?void 0:i.onEnter)||void 0===c||c.call(i,{fromView:null==t?void 0:t.view}),[2]}}))}))})),T=X((function(n,e){return p(void 0,void 0,void 0,(function(){var t,r,o,i,u;return m(this,(function(c){switch(c.label){case 0:return(t=v.find((function(n){return n.id===h.current})))?[4,g({view:t.view,ref:t.elRef},{view:n,ref:null},e===f.onEnter?a:l)]:[2];case 1:return c.sent(),e===f.onEnter?null===(o=null===(r=t.events)||void 0===r?void 0:r.onEnter)||void 0===o||o.call(r,{fromView:n}):e===f.onLeave&&(null===(u=null===(i=t.events)||void 0===i?void 0:i.onLeave)||void 0===u||u.call(i,{toView:n})),[2]}}))}))}));return z((function(){return V(n,e,t||{},E,C,k,T),function(){_(n)}})),{activeViewId:h.current,viewsInfo:v,openView:E,closeView:C}},fn=4,vn=1e-7,dn=10,pn=.1,mn="function"==typeof Float32Array;function yn(n,e){return 1-3*e+3*n}function hn(n,e){return 3*e-6*n}function wn(n){return 3*n}function bn(n,e,t){return((yn(e,t)*n+hn(e,t))*n+wn(e))*n}function gn(n,e,t){return 3*yn(e,t)*n*n+2*hn(e,t)*n+wn(e)}function En(n){return n}function Cn(n,e,t,r){if(!(0<=n&&n<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(n===e&&t===r)return En;for(var o=mn?new Float32Array(11):new Array(11),i=0;i<11;++i)o[i]=bn(i*pn,n,t);function u(e){for(var r=0,i=1;10!==i&&o[i]<=e;++i)r+=pn;--i;var u=r+(e-o[i])/(o[i+1]-o[i])*pn,c=gn(u,n,t);return c>=.001?function(n,e,t,r){for(var o=0;o<fn;++o){var i=gn(e,t,r);if(0===i)return e;e-=(bn(e,t,r)-n)/i}return e}(e,u,n,t):0===c?u:function(n,e,t,r,o){var i,u,c=0;do{(i=bn(u=e+(t-e)/2,r,o)-n)>0?t=u:e=u}while(Math.abs(i)>vn&&++c<dn);return u}(e,r,r+pn,n,t)}return function(n){return 0===n||1===n?n:bn(u(n),e,r)}}var kn=Cn(.25,1,.5,1),Tn={duration:400,start:function(n,e){var t=n.ref.style,r=null==e?void 0:e.ref.style;t.display="1",r&&(r.display="block",r.opacity="1")},animate:function(n,e,t){var r=e.ref.style,o=null==t?void 0:t.ref.style,i=kn(n);r.transform="translateX(".concat(100*i,"%)"),o&&(o.filter="brightness(".concat(20*n+80,"%)"),o.transform="translateX(".concat(.2*(i-1)*100,"%)"))},end:function(n,e){var t=n.ref.style,r=null==e?void 0:e.ref.style;t.opacity="0",t.display="none",r&&(r.opacity="1")}},xn={duration:300,start:function(n,e){var t=n.ref.style;t.display="block",t.opacity="0"},animate:function(n,e,t){var r=e.ref.style,o=null==t?void 0:t.ref.style;o&&(o.opacity="".concat(1-n)),r.opacity="".concat(n)},end:function(n,e){var t=null==e?void 0:e.ref.style;t&&(t.display="none")}},Ln={duration:300,animate:function(n,e){e.ref.style.opacity="".concat(.5+.5*n)}},An={duration:500,start:function(n,e){},animate:function(n,e,t){},end:function(n,e){}},Dn={duration:200,start:function(n,e){var t=n.ref.style;t.display="block",t.opacity="0"},animate:function(n,e,t){var r=e.ref.style,o=null==t?void 0:t.ref.style;r.opacity="".concat(n),o&&(o.opacity="".concat(1-n))},end:function(n,e){var t=null==e?void 0:e.ref.style;t&&(t.display="none")}},In={duration:400,start:function(n,e){var t,r=n.ref.style,o=null===(t=null==e?void 0:e.ref)||void 0===t?void 0:t.style;r.display="block",r.zIndex="2",r.transform="translateX(100%)",o&&(o.zIndex="1")},animate:function(n,e,t){var r,o=kn(n),i=e.ref.style,u=null===(r=null==t?void 0:t.ref)||void 0===r?void 0:r.style;i.transform="translateX(".concat(100*(1-o),"%)"),u&&(u.transform="translateX(".concat(100*-o*.2,"%)"),u.filter="brightness(".concat(20*(1-n)+80,"%)"))},end:function(n,e){var t,r=null===(t=null==e?void 0:e.ref)||void 0===t?void 0:t.style;r&&(r.display="none")}},Vn={duration:400,start:function(n,e){},animate:function(n,e,t){},end:function(n,e){}},_n={duration:300,start:function(n,e){var t=n.ref.style;t.display="block",t.opacity="0"},animate:function(n,e,t){var r=e.ref.style,o=null==t?void 0:t.ref.style;r.opacity="".concat(n),o&&(o.opacity="".concat(1-n/2))}},Sn={duration:300,start:function(n,e){var t=n.ref.style;t.display="block",t.opacity="0"},animate:function(n,e,t){var r=e.ref.style,o=null==t?void 0:t.ref.style;r.opacity="".concat(n),o&&(o.opacity="".concat(1-n/2))}},Nn={duration:300,start:function(n,e){var t=n.ref.style;t.display="block",t.opacity="0"},animate:function(n,e,t){var r=e.ref.style,o=null==t?void 0:t.ref.style;r.opacity="".concat(n),o&&(o.opacity="".concat(1-n/2))}},Mn={duration:300,start:function(n,e){var t=n.ref.style;t.position="relative",t.zIndex="1",t.opacity="0"},animate:function(n,e,t){e.ref.style.opacity=n+""}},Rn={duration:300,start:function(n,e){n.ref.style.zIndex="0"},animate:function(n,e,t){var r=kn(n),o=e.ref.style;o.opacity=1-n+"";var i=e.ref.offsetHeight;o.marginTop="".concat(-i*r,"px")},end:function(n,e){}},Pn=function(n,e,t){var o=r(!1),i={current:void 0};return z((function(){var r=i.current;r&&r.addEventListener("click",(function(i){return p(void 0,void 0,void 0,(function(){var i,u;return m(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),o.current?[2]:(r.classList.add("loading"),o.current=!0,[4,n()]);case 1:return i=c.sent(),o.current=!1,r.classList.remove("loading"),null==e||e(i),[3,3];case 2:return u=c.sent(),r.classList.remove("loading"),o.current=!1,null==t||t(u),[3,3];case 3:return[2]}}))}))}))})),i},Fn=function(n,e,t,r){var o=c(e),i=o[0],u=o[1],a=X((function(n,o){switch(n){case"Update":u(o===e?d({},o):o),null==r||r(o);break;case"Delete":null==t||t(o)}}));return z((function(){return n.on(a,e),function(){n.off(a,e)}})),i},Bn=function(n){return q({event:n.event,component:tn,data:n.data,backdrop:n.backdrop,position:n.position,onClose:n.onClose,getTargetElement:n.getTargetElement,mapDataTo:n.mapDataTo})},On=function(n){var e=r({}),t=n;t.__listeners||(t.__listeners={},t.__events={});var o=function(n){var e=t.__listeners;t.__events[n]=function(t){(e[n]||[]).forEach((function(n){null==n||n(t)}))}};return z((function(){return function(){var n=t.__listeners,r=e.current,o=function(e){r[e].forEach((function(t){var r=n[e].findIndex((function(n){return n===t}));n[e].splice(r,1)}))};for(var i in r)o(i)}})),{listen:function(n){if(n){var r=t.__listeners;for(var i in n){r[i]||(o(i),r[i]=[]),r[i].push(n[i]);var u=e.current[i];u||(u=e.current[i]=[]),u.push(n[i])}}},call:t.__events}},zn=o({}),Hn=i((function(t){var o=t.children,i=t.viewInfo,u=r({}),c=function(n,e){if(e){var t=u.current[n];t||(t=u.current[n]=[]),t.push(e)}},a=function(n,e){e&&u.current[n].remove((function(n){return n===e}))},l=function(n,e){var t=u.current[n];null==t||t.forEach((function(n){n(e)}))};return e((function(){i.events={onEnter:function(n){l(s.onEnter,n)},onLeave:function(n){l(s.onLeave,n)},onClosing:function(n){l(s.onClosing,n)}}}),[]),n.createElement(zn.Provider,{value:{listenEvents:function(n){return c(s.onEnter,n.onEnter),c(s.onLeave,n.onLeave),c(s.onClosing,n.onClosing),function(){a(s.onEnter,n.onEnter),a(s.onLeave,n.onLeave),a(s.onClosing,n.onClosing)}},emitEvent:l,close:function(n,e){var t=i.view;N(t.id,t.type,n,e)},getViewData:function(){return i.view.data},openView:function(n){n.type=i.view.type,S(n)}}},o)}),(function(){return!0})),Xn=function(){function n(){var n=this;this.observables={},this.defaultId="subscribers",this.getForceId=function(e){var t;return(null===(t=n.getId)||void 0===t?void 0:t.call(n,e||{}))||n.defaultId}}return n.prototype.on=function(n,e){var t=this.getForceId(e),r=this.observables[t];r||(r=this.observables[t]=[]),r.push(n)},n.prototype.off=function(n,e){var t=this.getForceId(e),r=this.observables[t];null==r||r.remove((function(e){return e===n})),0===r.length&&delete this.observables[t]},n.prototype.emit=function(n,e){var t=this.getForceId(e),r=this.observables[t];null==r||r.forEach((function(t){null==t||t.apply(t,[n,e])}))},n}(),jn=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return l(e,n),e.prototype.update=function(n){this.emit("Update",n)},e.prototype.delete=function(n){var e;this.emit("Delete",n);var t=null===(e=this.getId)||void 0===e?void 0:e.call(this,n);t&&delete this.observables[t]},e}(Xn),qn=new(function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return l(e,n),e.prototype.getId=function(n){return n.id},e}(Xn)),Yn=[{id:"1",name:"ali"},{id:"2",name:"reza"}];function Un(){return Yn}function Gn(){var n=Yn[1];n.name="Hasan",qn.emit("Update",n)}var $n=function(n){return function(n){return Promise.resolve({})}},Jn=$n(),Kn=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return l(e,n),e.prototype.getId=function(n){return n.id},e}(jn),Qn=[{id:"1",text:"hello"},{id:"2",text:"world"}];function Wn(){return Qn}function Zn(){var n=Qn[1];n.text="by",ne.update(n)}var ne=new Kn;function ee(n){S({type:J.Toast,id:"toast-"+Date.now(),data:n,component:on,className:"toast-message"})}function te(n){return p(this,void 0,void 0,(function(){return m(this,(function(e){return[2,new Promise((function(e){S({type:J.Tab,id:"alert-"+Date.now(),component:Z,data:n,onClose:function(){e(!0)}})}))]}))}))}function re(n){return p(this,void 0,void 0,(function(){return m(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,oe(nn,n)];case 1:if(!e.sent())throw Error("CANCEL");return[2,!0];case 2:throw e.sent();case 3:return[2]}}))}))}function oe(n,e){return p(this,void 0,void 0,(function(){return m(this,(function(t){return[2,new Promise((function(t,r){S({type:J.Modal,id:"confirm-"+Date.now(),component:n,data:e,onClose:function(n){n?t(n):r(!1)}})}))]}))}))}function ie(n,e){var t=n;S({type:e||J.Modal,id:"loading-"+Date.now(),data:t,component:en,className:"loading-message",options:{disableBackdrop:!0,onClickedBackdrop:function(){var n;null===(n=t.onClickedBackdrop)||void 0===n||n.call(t)}}})}function ue(n,e){return!!n&&(n===e||e.contains(n))}function ce(n,e,t){null==n||n.addEventListener(e,t)}function ae(n,e,t){null==n||n.removeEventListener(e,t)}Event.prototype.contains=function(n){return ue(this.target,n)},Array.prototype.last=function(){var n=this||[];return n[n.length-1]},Array.prototype.safePush=function(n){var e=this||[];e.find((function(e){return e===n}))||e.push(n)},Array.prototype.remove=function(n){var e=this||[],t=e.findIndex((function(e){return n(e)}));if(t>=0){var r=e[t];return e.splice(t,1),r}},Array.prototype.removeAll=function(n){for(var e=!0,t=this||[];e;)if(!t.remove(n)){e=!1;break}return[]};export{Z as Alert,nn as Confirm,Y as ContextMenuWrapper,O as EventType,en as LoadingDialog,jn as ObjectObservable,Xn as Observable,rn as Overlay,U as Scrollable,on as Toast,G as ViewComponent,zn as ViewContext,Hn as ViewContextProvider,Dn as activateTabConfig,Sn as activePartialTabAnimationConfig,ce as addEventListenerEl,$n as apiPost,Cn as bezier,qn as chatObservable,Gn as chatUpdate,Tn as closeTabAnimationConfig,N as closeView,ue as containsTargetEl,C as disableBrowserAction,Un as getChats,Jn as getChatsApi,Wn as getMessages,k as getQueryParam,R as getViewsByCloseType,Nn as leaveContainerMasterTabAnimationConfig,g as listenBack,Zn as messageUpdate,ne as msgObservable,Rn as onCloseToastConfig,Ln as onEnterContainerConfig,Vn as onEnterTabContainerConfig,An as onLeaveContainerConfig,Mn as onOpenToastConfig,te as openAlert,re as openConfirm,oe as openCustomConfirm,ie as openLoading,_n as openPartialTabAnimationConfig,xn as openTabAnimationConfig,In as openTabContainerConfig,ee as openToast,S as openView,V as registerContainer,_ as removeContainer,ae as removeEventListenerEl,T as replaceUrlWithoutQueryParam,an as requestAnimation,E as unlistenBack,M as updateViewsByCloseType,ln as useAnimate,Pn as useClickAsync,On as useContextEvents,H as useDisableSelection,j as useEvent,Fn as useObserver,q as useOverlay,Bn as useOverlayMenu,W as useView,sn as useViewManage};