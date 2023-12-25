import{jsx as n,Fragment as t,jsxs as e}from"react/jsx-runtime";import{useEffect as r,useCallback as o,useRef as i,createContext as u,memo as c,useContext as a,Component as l,createElement as s,isValidElement as f,useState as v}from"react";var d=function(n,t){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},d(n,t)};function p(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=n}d(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}var h,y,m,w=function(){return w=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},w.apply(this,arguments)};function b(n,t,e,r){return new(e||(e=Promise))((function(o,i){function u(n){try{a(r.next(n))}catch(n){i(n)}}function c(n){try{a(r.throw(n))}catch(n){i(n)}}function a(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(u,c)}a((r=r.apply(n,t||[])).next())}))}function g(n,t){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(e=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(n,u)}catch(n){c=[6,n],r=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}function E(n,t,e){if(e||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return n.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError,function(n){n.onInit="onInit",n.onEnter="onEnter",n.onLeave="onLeave",n.onClosing="onClosing"}(h||(h={})),function(n){n.onEnter="onEnter",n.onLeave="onLeave"}(y||(y={}));var C=[],k=!1,x=!0;function T(n){setTimeout((function(){window.history.pushState({id:n.id,name:n.id},n.id)}),100),C.push(n)}function L(n){C.remove((function(t){return t.id===n}))}function D(){x=!1,setTimeout((function(){x=!0}),1e3)}function A(n){return m||(m=function(){var n=window.location.href,t=n.indexOf("?"),e="";t>0&&(e=n.substring(t+1));return e.split("&").reduce((function(n,t){var e=t.split("=");return n[e[0]]=e[1],n}),{})}()),m[n]}function I(n){var t=function(n,t){var e=t.split("?")[0],r=[],o=-1!==t.indexOf("?")?t.split("?")[1]:"";if(""!==o){for(var i=(r=o.split("&")).length-1;i>=0;i-=1)r[i].split("=")[0]===n&&r.splice(i,1);r.length&&(e="/?"+r.join("&"))}return e}(n,window.location.href);window.history.replaceState({},document.title,t)}function V(n){var t;x&&(n.state,C.length>0&&(t=C.pop())&&t.back())}function S(n){"Escape"===n.key&&window.history.back()}k||(window.onpopstate=V,document.addEventListener("popstate",V),document.addEventListener("keydown",S,!1),k=!0);var _={},R=[],N={};function B(n,t,e,r,o,i,u){_[n]?console.warn("ViewModule","Duplicate container type"):_[n]={views:[],containerOrder:t,config:e,openView:r,closeView:o,activateView:i,changeContainer:u}}function M(n){_[n]&&delete _[n]}function P(n){var t,e,r,o,i;return b(this,void 0,void 0,(function(){var u,c,a,l,s;return g(this,(function(f){switch(f.label){case 0:return f.trys.push([0,5,,6]),n.id||(n.id=n.type+"-"+Date.now()),(u=_[n.type])?X(n.type,n.id)||(c=u.views.find((function(t){return t.id===n.id})))&&!(null===(t=u.config)||void 0===t?void 0:t.moveBetweenViews)?[2]:(a=H(),(l=(null==a?void 0:a.type)===n.type)&&(null==a?void 0:a.id)===n.id?[2]:(a&&!l&&(s=_[a.type],null===(e=s.changeContainer)||void 0===e||e.call(s,n,y.onLeave)),(null===(r=u.config)||void 0===r?void 0:r.disableBrowserHistory)||T({id:n.id,back:function(){F(n.id,n.type)}}),j(n.type,n.id,!0),c?[4,null===(o=u.activateView)||void 0===o?void 0:o.call(u,c)]:[3,2])):[2];case 1:return f.sent(),function(n){var t=R.remove((function(t){return t.id===n.id}));t&&R.push(t)}(c),[3,4];case 2:return u.views.push(n),[4,u.openView(n)];case 3:f.sent(),null===(i=n.onOpened)||void 0===i||i.call(n),function(n){R.push(n)}(n),f.label=4;case 4:return j(n.type,n.id,!1),[3,6];case 5:return f.sent(),j(n.type,n.id,!1),[3,6];case 6:return[2]}}))}))}function F(n,t,e,r){var o,i,u,c;return void 0===e&&(e="Current"),b(this,void 0,void 0,(function(){var a,l,s,f,v,d,p,h;return g(this,(function(m){switch(m.label){case 0:return m.trys.push([0,2,,3]),n&&t?(a=_[t])?X(t,n)||(l=a.views.findIndex((function(t){return t.id===n})))<0||R.length<2?[2]:(s=a.views[l],f=H([s.id]),v=z(a.views.map((function(n){return n.id})),e,l),d=H(v,s.type),p=(null==f?void 0:f.type)===s.type,f&&!p&&(h=_[f.type],null===(o=h.changeContainer)||void 0===o||o.call(h,s,y.onEnter)),(null===(i=a.config)||void 0===i?void 0:i.disableBrowserHistory)||L(n),j(t,n,!0),null===(u=s.onClose)||void 0===u||u.call(s,r),[4,a.closeView(s,d,e)]):[2]:[2];case 1:return m.sent(),null===(c=s.onClosed)||void 0===c||c.call(s,r),O(a.views,e,l),function(n,t){switch(t){case"All":R.removeAll((function(t){return t.type===n.type}));break;case"AllExceptFirst":case"AllExceptLast":break;case"Current":R.remove((function(t){return t.id===n.id}))}}(s,e),j(t,n,!1),[3,3];case 2:return m.sent(),j(t,n,!1),[3,3];case 3:return[2]}}))}))}function O(n,t,e){var r=n.length;switch(t){case"All":return n.splice(0,r);case"AllExceptFirst":return n.splice(1,r-1);case"AllExceptLast":return n.splice(0,r-1);case"Current":return n.splice(e,1)}}function z(n,t,e){var r=n.length;switch(t){case"All":return n.slice(0,r);case"AllExceptFirst":return n.slice(1,r);case"AllExceptLast":return n.slice(0,r-1);case"Current":return n[e]}}function H(n,t){for(var e=R.length-1;e>=0;e--){var r=R[e];if((n||[]).indexOf(r.id)<0&&(void 0===t||r.type===t))return r}}function X(n,t){return(N[n]||[]).findIndex((function(n){return n===t}))>-1}function j(n,t,e){var r=N[n];r||(r=N[n]=[]),e?r.safePush(t):r.remove((function(n){return n===t}))}var q,U=function(n){r(n,[])},Y=function(){U((function(){var n=function(n){n.preventDefault()};return window.addEventListener("selectstart",n),function(){window.removeEventListener("selectstart",n)}}))},K=function(n){return o(n,[])};!function(n){n.None="None",n.Tap="Tap",n.RightClick="RightClick",n.DoubleClick="DoubleClick",n.Hover="Hover",n.Press="Press",n.HorizontalSwipe="HorizontalSwipe",n.VerticalSwipe="VerticalSwipe"}(q||(q={}));var G=function(n,t,e){var r=i(),o=i(),u=i([]),c=i(!1),a=i(),l=i();Y();var s=function(){return Date.now()},f=function(n){if(n.touches){var t=o.current,e=n.touches[n.touches.length-1],r=n.clientX||e.clientX,i=n.clientY||e.clientY;return{x:r,y:i,moveX:r-((null==t?void 0:t.x)||0),moveY:i-((null==t?void 0:t.y)||0),e:n}}},v=function(n){var t,r=u.current;s()-r[r.length-1]>300||c.current?p():r.length<2||(p(),2===r.length&&r[1]-r[0]<300&&(null===(t=null==e?void 0:e.onDoubleClick)||void 0===t||t.call(e,n)))},d=function(n){var t;n.preventDefault(),null===(t=e.onRightClick)||void 0===t||t.call(e,n)},p=function(){u.current=[]},h=K((function(n){var t=u.current;t.length>2&&(u.current.length=0),t.push(s()),o.current=l.current=f(n),x(!0),b(n)})),y=K((function(n){var t;g(n),x(!1),m(),a.current&&(null===(t=e.onTouchEnd)||void 0===t||t.call(e,l.current),a.current=void 0)})),m=function(){var n=r.current;n&&(clearTimeout(n),r.current=void 0)},b=function(n){if(t===q.Press)!function(n){m(),p(),r.current=setTimeout((function(){var t;c.current||null===(t=e.onPress)||void 0===t||t.call(e,n)}),500)}(n)},g=function(n){switch(t){case q.DoubleClick:v(n);break;case q.Tap:!function(n){var t,r=u.current;1!==r.length||c.current?p():(p(),s()-r[0]>300||(u.current=[],null===(t=null==e?void 0:e.onTap)||void 0===t||t.call(e,n)))}(n);break;default:p()}},E=K((function(n){switch(c.current=!0,t){case q.HorizontalSwipe:case q.VerticalSwipe:!function(n){var i,u=f(n);if(l.current=u,r.current)a.current&&(null===(i=e.onTouchMove)||void 0===i||i.call(e,u));else{p();var s=t===q.VerticalSwipe;r.current=setTimeout((function(){var n,t,r,i;if(c.current){var l=o.current;if(u&&l){var f=Math.abs(u.moveX),v=Math.abs(u.moveY);f<v&&s?(a.current=!0,null===(n=e.onTouchStart)||void 0===n||n.call(e,w(w({},u),{x:l.x,y:l.y})),null===(t=e.onTouchMove)||void 0===t||t.call(e,u)):f>=v&&!s&&(a.current=!0,null===(r=e.onTouchStart)||void 0===r||r.call(e,w(w({},u),{x:l.x,y:l.y})),null===(i=e.onTouchMove)||void 0===i||i.call(e,u))}}}),10)}}(n)}})),C=K((function(n){var t;null===(t=null==e?void 0:e.onMouseover)||void 0===t||t.call(e,n)})),k=K((function(n){var t;null===(t=null==e?void 0:e.onMouseout)||void 0===t||t.call(e,n)})),x=function(n){n&&!c.current?(L("mousemove",E),L("touchmove",E)):n||(c.current=!1,T("mousemove",E),T("touchmove",E))},T=function(t,e,r){n.current&&(r?n.current:window).removeEventListener(t,e)},L=function(t,e,r){n.current&&(r?n.current:window).addEventListener(t,e)},D=function(){if(n.current&&t!==q.None){if(t===q.Hover)return L("mouseover",C,!0),L("mouseout",k,!0),function(){T("mouseover",C,!0),T("mouseout",k,!0)};if(t===q.RightClick)return L("contextmenu",d,!0),function(){T("contextmenu",v,!0)};L("mousedown",h,!0),L("mouseup",y),L("touchstart",h,!0),L("touchend",y)}};return U((function(){return D(),function(){x(!1),T("mousedown",h,!0),T("mouseup",y),T("touchstart",h,!0),T("touchend",y),m()}})),{updateRef:function(){D()}}},$=function(n){var t={current:null};G(t,n.event,{onPress:function(n){return e(n)},onTap:function(n){return e(n)},onDoubleClick:function(n){return e(n)},onRightClick:function(n){return e(n)},onMouseover:function(n){e(n)}});var e=function(e){var r;P({type:"Overlay",component:n.component,data:n.mapDataTo?n.mapDataTo(n.data):n.data,onClose:function(t){var e;null===(e=n.onClose)||void 0===e||e.call(n,t)},options:{disableBackdrop:(n.backdrop,!0),params:{event:e,target:(null===(r=n.getTargetElement)||void 0===r?void 0:r.call(n))||t.current||e.target,position:n.position?n.position:"BottomRight"}}})};return t};function J(t){var e=t.children,r=t.contextMenuConfig,o=t.data,u=t.onSelect,c=i(null);U((function(){var n;a.current=null===(n=c.current)||void 0===n?void 0:n.children[0]}));var a=$({component:r.component,backdrop:r.backdrop,className:r.className,onClose:function(n){null==u||u(n),r.onClose(n)},position:r.position,positionType:r.positionType,event:r.event,data:o,mapDataTo:r.mapDataTo});return n("span",w({ref:c},{children:e}))}function Q(e){var r=e.children,o=e.viewInfo,u=i(),c=G(u,q.VerticalSwipe,{onTouchMove:function(){console.log("Move horizontal")},onTouchStart:function(){console.log("Start move horizontal")},onTouchEnd:function(){console.log("End move horizontal")}}).updateRef;return U((function(){u.current=o.elRef,c()})),n(t,{children:r})}function W(t){var e=t.viewInfo,r=i(null),o=e.view.className;return U((function(){var n;e.elRef=r.current,null===(n=e.onInit)||void 0===n||n.call(e,r.current)})),n("div",w({ref:r,className:"view-wrapper"+(o?" ".concat(o):"")},{children:e.view.component()}))}var Z=u({});c((function(t){var e=t.children,r=t.viewInfo,o=i({}),u=function(n,t){if(t){var e=o.current[n];e||(e=o.current[n]=[]),e.push(t)}},c=function(n,t){t&&o.current[n].remove((function(n){return n===t}))},a=function(n,t){var e=o.current[n];null==e||e.forEach((function(n){n(t)}))};return U((function(){r.events={onEnter:function(n){a(h.onEnter,n)},onLeave:function(n){a(h.onLeave,n)},onClosing:function(n){a(h.onClosing,n)}}})),n(Z.Provider,w({value:{listenEvents:function(n){return u(h.onEnter,n.onEnter),u(h.onLeave,n.onLeave),u(h.onClosing,n.onClosing),function(){c(h.onEnter,n.onEnter),c(h.onLeave,n.onLeave),c(h.onClosing,n.onClosing)}},emitEvent:a,close:function(n,t){var e=r.view;F(e.id,e.type,n,t)},getViewData:function(){return r.view.data},openView:function(n){n.type=r.view.type,P(n)}}},{children:e}))}),(function(){return!0}));var nn=function(n){var t=a(Z);U((function(){if(n){var e=t.listenEvents(n);return function(){e()}}}));var e=function(n,e){var r;null===(r=t.close)||void 0===r||r.call(t,n,e)};return{close:function(n){e("Current",n)},closeByType:e,openView:function(n){var e;null===(e=t.openView)||void 0===e||e.call(t,n)},viewData:t.getViewData()}};function tn(){var t=nn({}).viewData;return n("div",{children:n("span",{children:t.message})})}function en(){var r=nn({}),o=r.close,i=r.viewData;return e(t,{children:[n("div",w({className:"confirm-card"},{children:null==i?void 0:i.message})),e("div",w({className:"d-flex mt-3"},{children:[n("div",w({style:{paddingRight:".5rem",width:"50%"}},{children:n("button",w({className:"btn btn-warning w-100",onClick:function(){return o({res:!1})}},{children:"خیر"}))})),n("div",w({style:{paddingLeft:".5rem",width:"50%"}},{children:n("button",w({className:"btn btn-primary w-100",onClick:function(){return o({res:!0})}},{children:"بله"}))}))]}))]})}const rn=u(null),on={didCatch:!1,error:null};class un extends l{constructor(n){super(n),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=on}static getDerivedStateFromError(n){return{didCatch:!0,error:n}}resetErrorBoundary(){const{error:n}=this.state;if(null!==n){for(var t,e,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];null===(t=(e=this.props).onReset)||void 0===t||t.call(e,{args:o,reason:"imperative-api"}),this.setState(on)}}componentDidCatch(n,t){var e,r;null===(e=(r=this.props).onError)||void 0===e||e.call(r,n,t)}componentDidUpdate(n,t){const{didCatch:e}=this.state,{resetKeys:r}=this.props;var o,i;e&&null!==t.error&&function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.length!==t.length||n.some(((n,e)=>!Object.is(n,t[e])))}(n.resetKeys,r)&&(null===(o=(i=this.props).onReset)||void 0===o||o.call(i,{next:r,prev:n.resetKeys,reason:"keys"}),this.setState(on))}render(){const{children:n,fallbackRender:t,FallbackComponent:e,fallback:r}=this.props,{didCatch:o,error:i}=this.state;let u=n;if(o){const n={error:i,resetErrorBoundary:this.resetErrorBoundary};if("function"==typeof t)u=t(n);else if(e)u=s(e,n);else{if(null!==r&&!f(r))throw i;u=r}}return s(rn.Provider,{value:{didCatch:o,error:i,resetErrorBoundary:this.resetErrorBoundary}},u)}}var cn,an,ln,sn=function(){return n(t,{})},fn=function(t){var e=t.customFallback,r=void 0===e?sn:e,o=t.children;return n(un,w({FallbackComponent:r},{children:o}))};function vn(){var o=this,u=v(),c=u[0],a=u[1],l=i(!1),s=nn({}),f=s.viewData,d=s.close;return U((function(){return b(o,void 0,void 0,(function(){var n;return g(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,f.callback()];case 1:return(n=t.sent()).type===ln.Close?d():a(n),[3,3];case 2:return t.sent(),d(),[3,3];case 3:return[2]}}))})),f.onClickedBackdrop=function(){l.current&&d()},function(){}})),r((function(){l.current=!!c}),[c]),n("div",{children:e(t,c?{children:[n("span",{children:c.message}),c.type===ln.Confirm&&n("button",w({className:"btn btn-primary w-100",onClick:function(){return d({res:!0})}},{children:c.confirmButtonCaption}))]}:{children:[n("span",{children:f.message}),n("span",{children:"loading..."})]})})}function dn(){var t=nn(),e=t.close,r=t.viewData;return n("div",w({style:{backgroundColor:"yellow",marginTop:"20px",borderRadius:"8px",padding:"5px"}},{children:n("ul",{children:r.options.map((function(t){return n("li",w({onClick:function(){return e({res:t})}},{children:t.label}),t.value)}))})}))}function pn(){var t=nn({}),e=t.close,r=t.viewData;return n("ul",w({className:"d-block bg-primary p-2 text-lite"},{children:r.options.map((function(t){return n("li",w({onClick:function(){e({res:t.value})}},{children:t.text}),t.text)}))}))}function hn(){var t=i(),r=nn({}),o=r.close,u=r.viewData;return U((function(){return u.delay&&(t.current=setTimeout((function(){o()}),1e3*u.delay)),function(){t.current&&clearTimeout(t.current)}})),n("div",w({className:"w-100"},{children:e("div",w({className:"row"},{children:[n("h1",w({className:"col-8"},{children:u.message})),n("button",w({className:"col-3 btn btn-success",onClick:function(){return o({res:!0})}},{children:"delete"}))]}))}))}!function(n){n.MasterTab="MasterTab",n.Tab="Tab",n.Modal="Modal",n.BottomSheet="BottomSheet",n.Toast="Toast"}(cn||(cn={})),function(n){n.Success="Success",n.Error="Error"}(an||(an={})),function(n){n.Close="Close",n.Confirm="Confirm"}(ln||(ln={}));var yn=window,mn=yn.$requestAnimationFrame=yn.requestAnimationFrame||yn.webkitRequestAnimationFrame||yn.mozRequestAnimationFrame||function(n){yn.setTimeout(n,1e3/60)};function wn(n,t,e,r){var o=Date.now();if(n<0)throw new Error("ANIMATION_SPEED_INVALID");n=n||300;var i=!1,u=function(){if(i)null==r||r();else{var c=Math.min(1,(Date.now()-o)/n);t(Math.floor(1e3*c)/1e3),c<1?mn(u):e()}};return u(),function(){i=!0}}var bn=function(){var n=i([]),t=K((function(t){n.current.remove((function(n){return n===t}))})),e=K((function(e,r,o,i){var u=wn(e,(function(n){r(n)}),(function(){t(u),o()}),(function(){t(u),null==i||i()}));return n.current.push(u),u})),r=K((function(n){t(n),n()}));return U((function(){return function(){n.current.forEach((function(n){n()})),n.current=[]}})),{requestAnimate:e,cancelAnimate:r}},gn=function(n,t,e,r,o,u,c,a){var l=v([]),s=l[0],f=l[1],d=i(""),p=i(!1),h=bn().requestAnimate,m=K((function(n,t,e,r){return new Promise((function(o,i){var u,c,a;if(e||o(!0),null===(u=null==e?void 0:e.start)||void 0===u||u.call(e,n,t,r),(null==r?void 0:r.disableAnimate)||!(null==e?void 0:e.duration))return null===(c=null==e?void 0:e.animate)||void 0===c||c.call(e,1,n,t,r),null===(a=null==e?void 0:e.end)||void 0===a||a.call(e,n,t,r),void o(!0);document.body.classList.add("animating"),h(e.duration,(function(o){var i;null===(i=null==e?void 0:e.animate)||void 0===i||i.call(e,o,n,t,r)}),(function(){var i;null===(i=null==e?void 0:e.end)||void 0===i||i.call(e,n,t,r),document.body.classList.remove("animating"),o(!0)}))}))})),w=K((function(n){return new Promise((function(t,o){var i={id:n.id,view:n,onInit:function(o){return b(void 0,void 0,void 0,(function(){var u,c,a,l,f,v,h;return g(this,(function(y){switch(y.label){case 0:return u=s.find((function(n){return n.id===d.current})),d.current=n.id,c=n.options,(a=null==c?void 0:c.disableAnimate)||p.current||(p.current=!0,a=(null==e?void 0:e.disableFirstTimeAnimate)||!1),(null==c?void 0:c.inBackground)?(o.style.display="none",t(!0),[2]):[4,m({view:n,ref:i.elRef},u?{view:null==u?void 0:u.view,ref:null==u?void 0:u.elRef}:void 0,r,{disableAnimate:a})];case 1:return y.sent(),u&&(null===(f=null===(l=u.events)||void 0===l?void 0:l.onLeave)||void 0===f||f.call(l,{toView:n})),null===(h=null===(v=i.events)||void 0===v?void 0:v.onEnter)||void 0===h||h.call(v,{fromView:null==u?void 0:u.view,data:n.data}),t(!0),[2]}}))}))}};s.push(i),f(E([],s,!0))}))})),C=K((function(n,t,r){return b(void 0,void 0,void 0,(function(){var i,u,c,a,l,v,p,h;return g(this,(function(y){switch(y.label){case 0:return d.current="",t&&(d.current=t.id,i=s.find((function(n){return n.id===t.id}))),(u=s.findIndex((function(t){return t.id===n.id})))<0?[2]:(c=s[u],a=!(null==e?void 0:e.moveBetweenViews)&&u<s.length-1,null===(v=null===(l=c.events)||void 0===l?void 0:l.onClosing)||void 0===v||v.call(l,{toView:t}),[4,m({view:s[u].view,ref:s[u].elRef},i?{view:i.view,ref:i.elRef}:void 0,o,{disableAnimate:a,closeType:r})]);case 1:return y.sent(),i&&(null===(h=null===(p=i.events)||void 0===p?void 0:p.onEnter)||void 0===h||h.call(p,{fromView:c.view})),u>-1&&(O(s,r,u),f(E([],s,!0))),[2]}}))}))})),k=K((function(n){return b(void 0,void 0,void 0,(function(){var t,e,r,o,i,c;return g(this,(function(a){switch(a.label){case 0:return(t=s.find((function(t){return t.id===n.id})))?d.current===n.id?[2]:(e=s.find((function(n){return n.id===d.current})),d.current=n.id,[4,m({view:t.view,ref:t.elRef},e?{view:e.view,ref:e.elRef}:void 0,u)]):[2];case 1:return a.sent(),e&&(null===(o=null===(r=e.events)||void 0===r?void 0:r.onLeave)||void 0===o||o.call(r,{toView:n})),null===(c=null===(i=t.events)||void 0===i?void 0:i.onEnter)||void 0===c||c.call(i,{fromView:null==e?void 0:e.view}),[2]}}))}))})),x=K((function(n,t){return b(void 0,void 0,void 0,(function(){var e,r,o,i,u;return g(this,(function(l){switch(l.label){case 0:return(e=s.find((function(n){return n.id===d.current})))?[4,m({view:e.view,ref:e.elRef},{view:n,ref:null},t===y.onEnter?c:a)]:[2];case 1:return l.sent(),t===y.onEnter?null===(o=null===(r=e.events)||void 0===r?void 0:r.onEnter)||void 0===o||o.call(r,{fromView:n}):t===y.onLeave&&(null===(u=null===(i=e.events)||void 0===i?void 0:i.onLeave)||void 0===u||u.call(i,{toView:n})),[2]}}))}))}));return U((function(){return B(n,t,e||{},w,C,k,x),function(){M(n)}})),{activeViewId:d.current,viewsInfo:s,openView:w,closeView:C}},En=4,Cn=1e-7,kn=10,xn=.1,Tn="function"==typeof Float32Array;function Ln(n,t){return 1-3*t+3*n}function Dn(n,t){return 3*t-6*n}function An(n){return 3*n}function In(n,t,e){return((Ln(t,e)*n+Dn(t,e))*n+An(t))*n}function Vn(n,t,e){return 3*Ln(t,e)*n*n+2*Dn(t,e)*n+An(t)}function Sn(n){return n}function _n(n,t,e,r){if(!(0<=n&&n<=1&&0<=e&&e<=1))throw new Error("bezier x values must be in [0, 1] range");if(n===t&&e===r)return Sn;for(var o=Tn?new Float32Array(11):new Array(11),i=0;i<11;++i)o[i]=In(i*xn,n,e);function u(t){for(var r=0,i=1;10!==i&&o[i]<=t;++i)r+=xn;--i;var u=r+(t-o[i])/(o[i+1]-o[i])*xn,c=Vn(u,n,e);return c>=.001?function(n,t,e,r){for(var o=0;o<En;++o){var i=Vn(t,e,r);if(0===i)return t;t-=(In(t,e,r)-n)/i}return t}(t,u,n,e):0===c?u:function(n,t,e,r,o){var i,u,c=0;do{(i=In(u=t+(e-t)/2,r,o)-n)>0?e=u:t=u}while(Math.abs(i)>Cn&&++c<kn);return u}(t,r,r+xn,n,e)}return function(n){return 0===n||1===n?n:In(u(n),t,r)}}var Rn=_n(.25,1,.5,1),Nn={duration:400,start:function(n,t){var e=n.ref.style,r=null==t?void 0:t.ref.style;e.display="1",r&&(r.display="block",r.opacity="1")},animate:function(n,t,e){var r=t.ref.style,o=null==e?void 0:e.ref.style,i=Rn(n);r.transform="translateX(".concat(100*i,"%)"),o&&(o.filter="brightness(".concat(20*n+80,"%)"),o.transform="translateX(".concat(.2*(i-1)*100,"%)"))},end:function(n,t){var e=n.ref.style,r=null==t?void 0:t.ref.style;e.opacity="0",e.display="none",r&&(r.opacity="1")}},Bn={duration:300,start:function(n,t){var e=n.ref.style;e.display="block",e.opacity="0"},animate:function(n,t,e){var r=t.ref.style,o=null==e?void 0:e.ref.style;o&&(o.opacity="".concat(1-n)),r.opacity="".concat(n)},end:function(n,t){var e=null==t?void 0:t.ref.style;e&&(e.display="none")}},Mn={duration:300,animate:function(n,t){t.ref.style.opacity="".concat(.5+.5*n)}},Pn={duration:500,start:function(n,t){},animate:function(n,t,e){},end:function(n,t){}},Fn={duration:200,start:function(n,t){var e=n.ref.style;e.display="block",e.opacity="0"},animate:function(n,t,e){var r=t.ref.style,o=null==e?void 0:e.ref.style;r.opacity="".concat(n),o&&(o.opacity="".concat(1-n))},end:function(n,t){var e=null==t?void 0:t.ref.style;e&&(e.display="none")}},On={duration:400,start:function(n,t){var e,r=n.ref.style,o=null===(e=null==t?void 0:t.ref)||void 0===e?void 0:e.style;r.display="block",r.zIndex="2",r.transform="translateX(100%)",o&&(o.zIndex="1")},animate:function(n,t,e){var r,o=Rn(n),i=t.ref.style,u=null===(r=null==e?void 0:e.ref)||void 0===r?void 0:r.style;i.transform="translateX(".concat(100*(1-o),"%)"),u&&(u.transform="translateX(".concat(100*-o*.2,"%)"),u.filter="brightness(".concat(20*(1-n)+80,"%)"))},end:function(n,t){var e,r=null===(e=null==t?void 0:t.ref)||void 0===e?void 0:e.style;r&&(r.display="none")}},zn={duration:400,start:function(n,t){},animate:function(n,t,e){},end:function(n,t){}},Hn={duration:300,start:function(n,t){var e=n.ref.style;e.display="block",e.opacity="0"},animate:function(n,t,e){var r=t.ref.style,o=null==e?void 0:e.ref.style;r.opacity="".concat(n),o&&(o.opacity="".concat(1-n/2))}},Xn={duration:300,start:function(n,t){var e=n.ref.style;e.display="block",e.opacity="0"},animate:function(n,t,e){var r=t.ref.style,o=null==e?void 0:e.ref.style;r.opacity="".concat(n),o&&(o.opacity="".concat(1-n/2))}},jn={duration:300,start:function(n,t){var e=n.ref.style;e.display="block",e.opacity="0"},animate:function(n,t,e){var r=t.ref.style,o=null==e?void 0:e.ref.style;r.opacity="".concat(n),o&&(o.opacity="".concat(1-n/2))}},qn={duration:300,start:function(n,t){var e=n.ref.style;e.position="relative",e.zIndex="1",e.opacity="0"},animate:function(n,t,e){t.ref.style.opacity=n+""}},Un={duration:300,start:function(n,t){n.ref.style.zIndex="0"},animate:function(n,t,e){var r=Rn(n),o=t.ref.style;o.opacity=1-n+"";var i=t.ref.offsetHeight;o.marginTop="".concat(-i*r,"px")},end:function(n,t){}},Yn=function(n,t,e){var r=i(!1),o={current:void 0};return U((function(){var i=o.current;i&&i.addEventListener("click",(function(o){return b(void 0,void 0,void 0,(function(){var o,u;return g(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),r.current?[2]:(i.classList.add("loading"),r.current=!0,[4,n()]);case 1:return o=c.sent(),r.current=!1,i.classList.remove("loading"),null==t||t(o),[3,3];case 2:return u=c.sent(),i.classList.remove("loading"),r.current=!1,null==e||e(u),[3,3];case 3:return[2]}}))}))}))})),o},Kn=function(n,t,e,r){var o=v(t),i=o[0],u=o[1],c=K((function(n,o){switch(n){case"Update":u(o===t?w({},o):o),null==r||r(o);break;case"Delete":null==e||e(o)}}));return U((function(){return n.on(c,t),function(){n.off(c,t)}})),i},Gn=function(n){return $({event:n.event,component:dn,data:n.data,backdrop:n.backdrop,position:n.position,onClose:n.onClose,getTargetElement:n.getTargetElement,mapDataTo:n.mapDataTo})},$n=function(n){var t=i({}),e=n;e.__listeners||(e.__listeners={},e.__events={});var r=function(n){var t=e.__listeners;e.__events[n]=function(e){(t[n]||[]).forEach((function(n){null==n||n(e)}))}};return U((function(){return function(){var n=e.__listeners,r=t.current,o=function(t){r[t].forEach((function(e){var r=n[t].findIndex((function(n){return n===e}));n[t].splice(r,1)}))};for(var i in r)o(i)}})),{listen:function(n){if(n){var o=e.__listeners;for(var i in n){o[i]||(r(i),o[i]=[]),o[i].push(n[i]);var u=t.current[i];u||(u=t.current[i]=[]),u.push(n[i])}}},call:e.__events}},Jn=u({}),Qn=c((function(t){var e=t.children,o=t.viewInfo,u=i({}),c=function(n,t){if(t){var e=u.current[n];e||(e=u.current[n]=[]),e.push(t)}},a=function(n,t){t&&u.current[n].remove((function(n){return n===t}))},l=function(n,t){var e=u.current[n];null==e||e.forEach((function(n){n(t)}))};return r((function(){o.events={onEnter:function(n){l(h.onEnter,n)},onLeave:function(n){l(h.onLeave,n)},onClosing:function(n){l(h.onClosing,n)}}}),[]),n(Jn.Provider,w({value:{listenEvents:function(n){return c(h.onEnter,n.onEnter),c(h.onLeave,n.onLeave),c(h.onClosing,n.onClosing),function(){a(h.onEnter,n.onEnter),a(h.onLeave,n.onLeave),a(h.onClosing,n.onClosing)}},emitEvent:l,close:function(n,t){var e=o.view;F(e.id,e.type,n,t)},getViewData:function(){return o.view.data},openView:function(n){n.type=o.view.type,P(n)}}},{children:e}))}),(function(){return!0})),Wn=function(){function n(){var n=this;this.observables={},this.defaultId="subscribers",this.getForceId=function(t){var e;return(null===(e=n.getId)||void 0===e?void 0:e.call(n,t||{}))||n.defaultId}}return n.prototype.on=function(n,t){var e=this.getForceId(t),r=this.observables[e];r||(r=this.observables[e]=[]),r.push(n)},n.prototype.off=function(n,t){var e=this.getForceId(t),r=this.observables[e];null==r||r.remove((function(t){return t===n})),0===r.length&&delete this.observables[e]},n.prototype.emit=function(n,t){var e=this.getForceId(t),r=this.observables[e];null==r||r.forEach((function(e){null==e||e.apply(e,[n,t])}))},n}(),Zn=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return p(t,n),t.prototype.update=function(n){this.emit("Update",n)},t.prototype.delete=function(n){var t;this.emit("Delete",n);var e=null===(t=this.getId)||void 0===t?void 0:t.call(this,n);e&&delete this.observables[e]},t}(Wn),nt=new(function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return p(t,n),t.prototype.getId=function(n){return n.id},t}(Wn)),tt=[{id:"1",name:"ali"},{id:"2",name:"reza"}];function et(){return tt}function rt(){var n=tt[1];n.name="Hasan",nt.emit("Update",n)}var ot=function(n){return function(n){return Promise.resolve({})}},it=ot(),ut=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return p(t,n),t.prototype.getId=function(n){return n.id},t}(Zn),ct=[{id:"1",text:"hello"},{id:"2",text:"world"}];function at(){return ct}function lt(){var n=ct[1];n.text="by",st.update(n)}var st=new ut;function ft(n){P({type:cn.Toast,id:"toast-"+Date.now(),data:n,component:hn,className:"toast-message"})}function vt(n){return b(this,void 0,void 0,(function(){return g(this,(function(t){return[2,new Promise((function(t){P({type:cn.Tab,id:"alert-"+Date.now(),component:tn,data:n,onClose:function(){t(!0)}})}))]}))}))}function dt(n){return b(this,void 0,void 0,(function(){return g(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,pt(en,n)];case 1:if(!t.sent())throw Error("CANCEL");return[2,!0];case 2:throw t.sent();case 3:return[2]}}))}))}function pt(n,t){return b(this,void 0,void 0,(function(){return g(this,(function(e){return[2,new Promise((function(e,r){P({type:cn.Modal,id:"confirm-"+Date.now(),component:n,data:t,onClose:function(n){n?e(n):r(!1)}})}))]}))}))}function ht(n,t){var e=n;P({type:t||cn.Modal,id:"loading-"+Date.now(),data:e,component:vn,className:"loading-message",options:{disableBackdrop:!0,onClickedBackdrop:function(){var n;null===(n=e.onClickedBackdrop)||void 0===n||n.call(e)}}})}function yt(n,t){return!!n&&(n===t||t.contains(n))}function mt(n,t,e){null==n||n.addEventListener(t,e)}function wt(n,t,e){null==n||n.removeEventListener(t,e)}Event.prototype.contains=function(n){return yt(this.target,n)},Array.prototype.last=function(){var n=this||[];return n[n.length-1]},Array.prototype.safePush=function(n){var t=this||[];t.find((function(t){return t===n}))||t.push(n)},Array.prototype.remove=function(n){var t=this||[],e=t.findIndex((function(t){return n(t)}));if(e>=0){var r=t[e];return t.splice(e,1),r}},Array.prototype.removeAll=function(n){for(var t=!0,e=this||[];t;)if(!e.remove(n)){t=!1;break}return[]};export{tn as Alert,en as Confirm,J as ContextMenuWrapper,fn as ErrorBoundaryWrapper,q as EventType,vn as LoadingDialog,Zn as ObjectObservable,Wn as Observable,pn as Overlay,Q as Scrollable,hn as Toast,W as ViewComponent,Jn as ViewContext,Qn as ViewContextProvider,Fn as activateTabConfig,Xn as activePartialTabAnimationConfig,mt as addEventListenerEl,ot as apiPost,_n as bezier,nt as chatObservable,rt as chatUpdate,Nn as closeTabAnimationConfig,F as closeView,yt as containsTargetEl,D as disableBrowserAction,et as getChats,it as getChatsApi,at as getMessages,A as getQueryParam,z as getViewsByCloseType,jn as leaveContainerMasterTabAnimationConfig,T as listenBack,lt as messageUpdate,st as msgObservable,Un as onCloseToastConfig,Mn as onEnterContainerConfig,zn as onEnterTabContainerConfig,Pn as onLeaveContainerConfig,qn as onOpenToastConfig,vt as openAlert,dt as openConfirm,pt as openCustomConfirm,ht as openLoading,Hn as openPartialTabAnimationConfig,Bn as openTabAnimationConfig,On as openTabContainerConfig,ft as openToast,P as openView,B as registerContainer,M as removeContainer,wt as removeEventListenerEl,I as replaceUrlWithoutQueryParam,wn as requestAnimation,L as unlistenBack,O as updateViewsByCloseType,bn as useAnimate,Yn as useClickAsync,$n as useContextEvents,Y as useDisableSelection,G as useEvent,Kn as useObserver,$ as useOverlay,Gn as useOverlayMenu,nn as useView,gn as useViewManage};
