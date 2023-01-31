var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,s=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&i(e,n,t[n]);if(o)for(var n of o(t))a.call(t,n)&&i(e,n,t[n]);return e},l=(e,o)=>t(e,n(o));import{be as p,a9 as u,c as f,ac as c,w as d,S as v,j as m,az as g,e as h,bf as b,bg as y,N as w,y as x,J as O,_ as E,k as A,r as k,C,m as T,i as B,ad as R,o as S,z as j,B as M,ay as P,v as L,bh as D,aA as _,F as I,U as F,ap as H,bi as W,bj as $,bk as N,p as z,q,aw as K,G as V,a as U,bl as G,K as X,I as Y,L as J,aS as Z,bm as Q,aU as ee,T as te,aj as ne,bn as oe,g as re,ak as ae,bo as ie,aT as se,bp as le,E as pe}from"./index.48f940ee.js";import{E as ue,c as fe}from"./focus-trap.8a3181f4.js";import{i as ce}from"./el-input.41045a8b.js";import{a as de}from"./el-button.d3031f13.js";const ve=Symbol("popper"),me=Symbol("popperContent"),ge=p({type:u(Boolean),default:null}),he=p({type:u(Function)});let be;const ye=`el-popper-container-${Math.floor(1e4*Math.random())}`,we=`#${ye}`,xe=()=>{y((()=>{g&&(be&&document.body.querySelector(we)||(be=(()=>{const e=document.createElement("div");return e.id=ye,document.body.appendChild(e),e})()))}))},Oe=w({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200}}),Ee=({showAfter:e,hideAfter:t,open:n,close:o})=>{const{registerTimeout:r}=function(){let e;const t=()=>window.clearTimeout(e);return b((()=>t())),{registerTimeout:(n,o)=>{t(),e=window.setTimeout(n,o)},cancelTimeout:t}}();return{onOpen:t=>{r((()=>{n(t)}),x(e))},onClose:e=>{r((()=>{o(e)}),x(t))}}},Ae=Symbol("elForwardRef"),ke={LIGHT:"light",DARK:"dark"},Ce=w({role:{type:String,default:"tooltip"}});var Te=E(A(l(s({},{name:"ElPopperRoot",inheritAttrs:!1}),{props:Ce,setup(e,{expose:t}){const n=e,o={triggerRef:k(),popperInstanceRef:k(),contentRef:k(),referenceRef:k(),role:f((()=>n.role))};return t(o),O(ve,o),(e,t)=>C(e.$slots,"default")}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const Be=w({arrowOffset:{type:Number,default:5}});var Re=E(A(l(s({},{name:"ElPopperArrow",inheritAttrs:!1}),{props:Be,setup(e,{expose:t}){const n=e,o=T("popper"),{arrowOffset:r,arrowRef:a}=B(me,void 0);return d((()=>n.arrowOffset),(e=>{r.value=e})),R((()=>{a.value=void 0})),t({arrowRef:a}),(e,t)=>(S(),j("span",{ref_key:"arrowRef",ref:a,class:M(x(o).e("arrow")),"data-popper-arrow":""},null,2))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const Se=A({name:"ElOnlyChild",setup(e,{slots:t,attrs:n}){var o;const r=B(Ae),a=(i=null!=(o=null==r?void 0:r.setForwardRef)?o:P,{mounted(e){i(e)},updated(e){i(e)},unmounted(){i(null)}});var i;return()=>{var e;const o=null==(e=t.default)?void 0:e.call(t,n);if(!o)return null;if(o.length>1)return null;const r=je(o);return r?L(D(r,n),[[a]]):null}}});function je(e){if(!e)return null;const t=e;for(const n of t){if(_(n))switch(n.type){case W:continue;case H:case"svg":return Me(n);case I:return je(n.children);default:return n}return Me(n)}return null}function Me(e){return F("span",{class:"el-only-child__content"},[e])}const Pe=w({virtualRef:{type:u(Object)},virtualTriggering:Boolean,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function,onBlur:Function,onContextmenu:Function,id:String,open:Boolean});var Le=E(A(l(s({},{name:"ElPopperTrigger",inheritAttrs:!1}),{props:Pe,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=B(ve,void 0);var a;a=r,O(Ae,{setForwardRef:e=>{a.value=e}});const i=f((()=>l.value?n.id:void 0)),s=f((()=>{if(o&&"tooltip"===o.value)return n.open&&n.id?n.id:void 0})),l=f((()=>{if(o&&"tooltip"!==o.value)return o.value})),p=f((()=>l.value?`${n.open}`:void 0));let u;return v((()=>{d((()=>n.virtualRef),(e=>{e&&(r.value=$(e))}),{immediate:!0}),d((()=>r.value),((e,t)=>{null==u||u(),u=void 0,N(e)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach((o=>{var r;const a=n[o];a&&(e.addEventListener(o.slice(2).toLowerCase(),a),null==(r=null==t?void 0:t.removeEventListener)||r.call(t,o.slice(2).toLowerCase(),a))})),u=d([i,s,l,p],(t=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(((n,o)=>{ce(t[o])?e.removeAttribute(n):e.setAttribute(n,t[o])}))}),{immediate:!0})),N(t)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((e=>t.removeAttribute(e)))}),{immediate:!0})})),R((()=>{null==u||u(),u=void 0})),t({triggerRef:r}),(e,t)=>e.virtualTriggering?V("v-if",!0):(S(),z(x(Se),K({key:0},e.$attrs,{"aria-controls":x(i),"aria-describedby":x(s),"aria-expanded":x(p),"aria-haspopup":x(l)}),{default:q((()=>[C(e.$slots,"default")])),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]),De="top",_e="bottom",Ie="right",Fe="left",He="auto",We=[De,_e,Ie,Fe],$e="start",Ne="end",ze="viewport",qe="popper",Ke=We.reduce((function(e,t){return e.concat([t+"-"+$e,t+"-"+Ne])}),[]),Ve=[].concat(We,[He]).reduce((function(e,t){return e.concat([t,t+"-"+$e,t+"-"+Ne])}),[]),Ue=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Ge(e){return e?(e.nodeName||"").toLowerCase():null}function Xe(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Ye(e){return e instanceof Xe(e).Element||e instanceof Element}function Je(e){return e instanceof Xe(e).HTMLElement||e instanceof HTMLElement}function Ze(e){return"undefined"!=typeof ShadowRoot&&(e instanceof Xe(e).ShadowRoot||e instanceof ShadowRoot)}var Qe={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];!Je(r)||!Ge(r)||(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});!Je(o)||!Ge(o)||(Object.assign(o.style,a),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};function et(e){return e.split("-")[0]}var tt=Math.max,nt=Math.min,ot=Math.round;function rt(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(Je(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=ot(n.width)/i||1),a>0&&(r=ot(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function at(e){var t=rt(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function it(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Ze(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function st(e){return Xe(e).getComputedStyle(e)}function lt(e){return["table","td","th"].indexOf(Ge(e))>=0}function pt(e){return((Ye(e)?e.ownerDocument:e.document)||window.document).documentElement}function ut(e){return"html"===Ge(e)?e:e.assignedSlot||e.parentNode||(Ze(e)?e.host:null)||pt(e)}function ft(e){return Je(e)&&"fixed"!==st(e).position?e.offsetParent:null}function ct(e){for(var t=Xe(e),n=ft(e);n&&lt(n)&&"static"===st(n).position;)n=ft(n);return n&&("html"===Ge(n)||"body"===Ge(n)&&"static"===st(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&Je(e)&&"fixed"===st(e).position)return null;var n=ut(e);for(Ze(n)&&(n=n.host);Je(n)&&["html","body"].indexOf(Ge(n))<0;){var o=st(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}function dt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function vt(e,t,n){return tt(e,nt(t,n))}function mt(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function gt(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var ht={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=et(n.placement),l=dt(s),p=[Fe,Ie].indexOf(s)>=0?"height":"width";if(a&&i){var u=function(e,t){return mt("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:gt(e,We))}(r.padding,n),f=at(a),c="y"===l?De:Fe,d="y"===l?_e:Ie,v=n.rects.reference[p]+n.rects.reference[l]-i[l]-n.rects.popper[p],m=i[l]-n.rects.reference[l],g=ct(a),h=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=v/2-m/2,y=u[c],w=h-f[p]-u[d],x=h/2-f[p]/2+b,O=vt(y,x,w),E=l;n.modifiersData[o]=((t={})[E]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"==typeof o&&!(o=t.elements.popper.querySelector(o))||!it(t.elements.popper,o)||(t.elements.arrow=o))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function bt(e){return e.split("-")[1]}var yt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function wt(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,p=e.adaptive,u=e.roundOffsets,f=e.isFixed,c=i.x,d=void 0===c?0:c,v=i.y,m=void 0===v?0:v,g="function"==typeof u?u({x:d,y:m}):{x:d,y:m};d=g.x,m=g.y;var h=i.hasOwnProperty("x"),b=i.hasOwnProperty("y"),y=Fe,w=De,x=window;if(p){var O=ct(n),E="clientHeight",A="clientWidth";if(O===Xe(n)&&("static"!==st(O=pt(n)).position&&"absolute"===s&&(E="scrollHeight",A="scrollWidth")),r===De||(r===Fe||r===Ie)&&a===Ne)w=_e,m-=(f&&O===x&&x.visualViewport?x.visualViewport.height:O[E])-o.height,m*=l?1:-1;if(r===Fe||(r===De||r===_e)&&a===Ne)y=Ie,d-=(f&&O===x&&x.visualViewport?x.visualViewport.width:O[A])-o.width,d*=l?1:-1}var k,C=Object.assign({position:s},p&&yt),T=!0===u?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:ot(t*o)/o||0,y:ot(n*o)/o||0}}({x:d,y:m}):{x:d,y:m};return d=T.x,m=T.y,l?Object.assign({},C,((k={})[w]=b?"0":"",k[y]=h?"0":"",k.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",k)):Object.assign({},C,((t={})[w]=b?m+"px":"",t[y]=h?d+"px":"",t.transform="",t))}var xt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,a=n.adaptive,i=void 0===a||a,s=n.roundOffsets,l=void 0===s||s,p={placement:et(t.placement),variation:bt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,wt(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,wt(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Ot={passive:!0};var Et={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=void 0===r||r,i=o.resize,s=void 0===i||i,l=Xe(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,Ot)})),s&&l.addEventListener("resize",n.update,Ot),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,Ot)})),s&&l.removeEventListener("resize",n.update,Ot)}},data:{}},At={left:"right",right:"left",bottom:"top",top:"bottom"};function kt(e){return e.replace(/left|right|bottom|top/g,(function(e){return At[e]}))}var Ct={start:"end",end:"start"};function Tt(e){return e.replace(/start|end/g,(function(e){return Ct[e]}))}function Bt(e){var t=Xe(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Rt(e){return rt(pt(e)).left+Bt(e).scrollLeft}function St(e){var t=st(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function jt(e){return["html","body","#document"].indexOf(Ge(e))>=0?e.ownerDocument.body:Je(e)&&St(e)?e:jt(ut(e))}function Mt(e,t){var n;void 0===t&&(t=[]);var o=jt(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),a=Xe(o),i=r?[a].concat(a.visualViewport||[],St(o)?o:[]):o,s=t.concat(i);return r?s:s.concat(Mt(ut(i)))}function Pt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Lt(e,t){return t===ze?Pt(function(e){var t=Xe(e),n=pt(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,s=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,s=o.offsetTop)),{width:r,height:a,x:i+Rt(e),y:s}}(e)):Ye(t)?function(e){var t=rt(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Pt(function(e){var t,n=pt(e),o=Bt(e),r=null==(t=e.ownerDocument)?void 0:t.body,a=tt(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=tt(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+Rt(e),l=-o.scrollTop;return"rtl"===st(r||n).direction&&(s+=tt(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}(pt(e)))}function Dt(e,t,n){var o="clippingParents"===t?function(e){var t=Mt(ut(e)),n=["absolute","fixed"].indexOf(st(e).position)>=0&&Je(e)?ct(e):e;return Ye(n)?t.filter((function(e){return Ye(e)&&it(e,n)&&"body"!==Ge(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce((function(t,n){var o=Lt(e,n);return t.top=tt(o.top,t.top),t.right=nt(o.right,t.right),t.bottom=nt(o.bottom,t.bottom),t.left=tt(o.left,t.left),t}),Lt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function _t(e){var t,n=e.reference,o=e.element,r=e.placement,a=r?et(r):null,i=r?bt(r):null,s=n.x+n.width/2-o.width/2,l=n.y+n.height/2-o.height/2;switch(a){case De:t={x:s,y:n.y-o.height};break;case _e:t={x:s,y:n.y+n.height};break;case Ie:t={x:n.x+n.width,y:l};break;case Fe:t={x:n.x-o.width,y:l};break;default:t={x:n.x,y:n.y}}var p=a?dt(a):null;if(null!=p){var u="y"===p?"height":"width";switch(i){case $e:t[p]=t[p]-(n[u]/2-o[u]/2);break;case Ne:t[p]=t[p]+(n[u]/2-o[u]/2)}}return t}function It(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,a=n.boundary,i=void 0===a?"clippingParents":a,s=n.rootBoundary,l=void 0===s?ze:s,p=n.elementContext,u=void 0===p?qe:p,f=n.altBoundary,c=void 0!==f&&f,d=n.padding,v=void 0===d?0:d,m=mt("number"!=typeof v?v:gt(v,We)),g=u===qe?"reference":qe,h=e.rects.popper,b=e.elements[c?g:u],y=Dt(Ye(b)?b:b.contextElement||pt(e.elements.popper),i,l),w=rt(e.elements.reference),x=_t({reference:w,element:h,strategy:"absolute",placement:r}),O=Pt(Object.assign({},h,x)),E=u===qe?O:w,A={top:y.top-E.top+m.top,bottom:E.bottom-y.bottom+m.bottom,left:y.left-E.left+m.left,right:E.right-y.right+m.right},k=e.modifiersData.offset;if(u===qe&&k){var C=k[r];Object.keys(A).forEach((function(e){var t=[Ie,_e].indexOf(e)>=0?1:-1,n=[De,_e].indexOf(e)>=0?"y":"x";A[e]+=C[n]*t}))}return A}var Ft={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=void 0===r||r,i=n.altAxis,s=void 0===i||i,l=n.fallbackPlacements,p=n.padding,u=n.boundary,f=n.rootBoundary,c=n.altBoundary,d=n.flipVariations,v=void 0===d||d,m=n.allowedAutoPlacements,g=t.options.placement,h=et(g),b=l||(h===g||!v?[kt(g)]:function(e){if(et(e)===He)return[];var t=kt(e);return[Tt(e),t,Tt(t)]}(g)),y=[g].concat(b).reduce((function(e,n){return e.concat(et(n)===He?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,p=void 0===l?Ve:l,u=bt(o),f=u?s?Ke:Ke.filter((function(e){return bt(e)===u})):We,c=f.filter((function(e){return p.indexOf(e)>=0}));0===c.length&&(c=f);var d=c.reduce((function(t,n){return t[n]=It(e,{placement:n,boundary:r,rootBoundary:a,padding:i})[et(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:f,padding:p,flipVariations:v,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,A=y[0],k=0;k<y.length;k++){var C=y[k],T=et(C),B=bt(C)===$e,R=[De,_e].indexOf(T)>=0,S=R?"width":"height",j=It(t,{placement:C,boundary:u,rootBoundary:f,altBoundary:c,padding:p}),M=R?B?Ie:Fe:B?_e:De;w[S]>x[S]&&(M=kt(M));var P=kt(M),L=[];if(a&&L.push(j[T]<=0),s&&L.push(j[M]<=0,j[P]<=0),L.every((function(e){return e}))){A=C,E=!1;break}O.set(C,L)}if(E)for(var D=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},_=v?3:1;_>0;_--){if("break"===D(_))break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Ht(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Wt(e){return[De,Ie,_e,Fe].some((function(t){return e[t]>=0}))}var $t={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=It(t,{elementContext:"reference"}),s=It(t,{altBoundary:!0}),l=Ht(i,o),p=Ht(s,r,a),u=Wt(l),f=Wt(p);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}};var Nt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=void 0===r?[0,0]:r,i=Ve.reduce((function(e,n){return e[n]=function(e,t,n){var o=et(e),r=[Fe,De].indexOf(o)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*r,[Fe,Ie].indexOf(o)>=0?{x:s,y:i}:{x:i,y:s}}(n,t.rects,a),e}),{}),s=i[t.placement],l=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=i}};var zt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=_t({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var qt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=void 0===r||r,i=n.altAxis,s=void 0!==i&&i,l=n.boundary,p=n.rootBoundary,u=n.altBoundary,f=n.padding,c=n.tether,d=void 0===c||c,v=n.tetherOffset,m=void 0===v?0:v,g=It(t,{boundary:l,rootBoundary:p,padding:f,altBoundary:u}),h=et(t.placement),b=bt(t.placement),y=!b,w=dt(h),x=function(e){return"x"===e?"y":"x"}(w),O=t.modifiersData.popperOffsets,E=t.rects.reference,A=t.rects.popper,k="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,C="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(O){if(a){var R,S="y"===w?De:Fe,j="y"===w?_e:Ie,M="y"===w?"height":"width",P=O[w],L=P+g[S],D=P-g[j],_=d?-A[M]/2:0,I=b===$e?E[M]:A[M],F=b===$e?-A[M]:-E[M],H=t.elements.arrow,W=d&&H?at(H):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},N=$[S],z=$[j],q=vt(0,E[M],W[M]),K=y?E[M]/2-_-q-N-C.mainAxis:I-q-N-C.mainAxis,V=y?-E[M]/2+_+q+z+C.mainAxis:F+q+z+C.mainAxis,U=t.elements.arrow&&ct(t.elements.arrow),G=U?"y"===w?U.clientTop||0:U.clientLeft||0:0,X=null!=(R=null==T?void 0:T[w])?R:0,Y=P+V-X,J=vt(d?nt(L,P+K-X-G):L,P,d?tt(D,Y):D);O[w]=J,B[w]=J-P}if(s){var Z,Q="x"===w?De:Fe,ee="x"===w?_e:Ie,te=O[x],ne="y"===x?"height":"width",oe=te+g[Q],re=te-g[ee],ae=-1!==[De,Fe].indexOf(h),ie=null!=(Z=null==T?void 0:T[x])?Z:0,se=ae?oe:te-E[ne]-A[ne]-ie+C.altAxis,le=ae?te+E[ne]+A[ne]-ie-C.altAxis:re,pe=d&&ae?function(e,t,n){var o=vt(e,t,n);return o>n?n:o}(se,te,le):vt(d?se:oe,te,d?le:re);O[x]=pe,B[x]=pe-te}t.modifiersData[o]=B}},requiresIfExists:["offset"]};function Kt(e,t,n){void 0===n&&(n=!1);var o=Je(t),r=Je(t)&&function(e){var t=e.getBoundingClientRect(),n=ot(t.width)/e.offsetWidth||1,o=ot(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),a=pt(t),i=rt(e,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(o||!o&&!n)&&(("body"!==Ge(t)||St(a))&&(s=function(e){return e!==Xe(e)&&Je(e)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):Bt(e)}(t)),Je(t)?((l=rt(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=Rt(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function Vt(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}function Ut(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Gt={placement:"bottom",modifiers:[],strategy:"absolute"};function Xt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Yt(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,a=void 0===r?Gt:r;return function(e,t,n){void 0===n&&(n=a);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},Gt,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],s=!1,l={state:r,setOptions:function(n){var s="function"==typeof n?n(r.options):n;p(),r.options=Object.assign({},a,r.options,s),r.scrollParents={reference:Ye(e)?Mt(e):e.contextElement?Mt(e.contextElement):[],popper:Mt(t)};var u=function(e){var t=Vt(e);return Ue.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,r.options.modifiers)));return r.orderedModifiers=u.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,a=e.effect;if("function"==typeof a){var s=a({state:r,name:t,instance:l,options:o}),p=function(){};i.push(s||p)}})),l.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,n=e.popper;if(Xt(t,n)){r.rects={reference:Kt(t,ct(n),"fixed"===r.options.strategy),popper:at(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var a=r.orderedModifiers[o],i=a.fn,p=a.options,u=void 0===p?{}:p,f=a.name;"function"==typeof i&&(r=i({state:r,options:u,name:f,instance:l})||r)}else r.reset=!1,o=-1}}},update:Ut((function(){return new Promise((function(e){l.forceUpdate(),e(r)}))})),destroy:function(){p(),s=!0}};if(!Xt(e,t))return l;function p(){i.forEach((function(e){return e()})),i=[]}return l.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}Yt(),Yt({defaultModifiers:[Et,zt,xt,Qe]});var Jt=Yt({defaultModifiers:[Et,zt,xt,Qe,Nt,Ft,qt,ht,$t]});const Zt=w({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:u(Array),default:()=>[]},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Ve,default:"bottom"},popperOptions:{type:u(Object),default:()=>({})},strategy:{type:String,values:["fixed","absolute"],default:"absolute"}}),Qt=w(l(s({},Zt),{id:String,style:{type:u([String,Array,Object])},className:{type:u([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:u([String,Array,Object])},popperStyle:{type:u([String,Array,Object])},referenceEl:{type:u(Object)},triggerTargetEl:{type:u(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number})),en=(e,t)=>{const{placement:n,strategy:o,popperOptions:r}=e,a=l(s({placement:n,strategy:o},r),{modifiers:tn(e)});return function(e,{arrowEl:t,arrowOffset:n}){e.modifiers.push({name:"arrow",options:{element:t,padding:null!=n?n:5}})}(a,t),function(e,t){t&&(e.modifiers=[...e.modifiers,...null!=t?t:[]])}(a,null==r?void 0:r.modifiers),a};function tn(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,null!=t?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:null!=o?o:[]}},{name:"computeStyles",options:{gpuAcceleration:n,adaptive:n}}]}var nn=E(A(l(s({},{name:"ElPopperContent"}),{props:Qt,emits:["mouseenter","mouseleave","focus","blur","close"],setup(e,{expose:t,emit:n}){const o=e,{popperInstanceRef:r,contentRef:a,triggerRef:i,role:p}=B(ve,void 0),u=B(U,void 0),{nextZIndex:c}=G(),m=T("popper"),h=k(),b=k("first"),y=k(),w=k();O(me,{arrowRef:y,arrowOffset:w}),u&&(u.addInputId||u.removeInputId)&&O(U,l(s({},u),{addInputId:P,removeInputId:P}));const E=k(o.zIndex||c()),A=k(!1);let L;const D=f((()=>(e=>{if(g)return $(e)})(o.referenceEl)||x(i))),_=f((()=>[{zIndex:x(E)},o.popperStyle])),I=f((()=>[m.b(),m.is("pure",o.pure),m.is(o.effect),o.popperClass])),H=f((()=>p&&"dialog"===p.value?"false":void 0)),W=(e=!0)=>{var t;null==(t=x(r))||t.update(),e&&(E.value=o.zIndex||c())},z=()=>{var e,t;const n={name:"eventListeners",enabled:o.visible};null==(t=null==(e=x(r))?void 0:e.setOptions)||t.call(e,(e=>l(s({},e),{modifiers:[...e.modifiers||[],n]}))),W(!1),o.visible&&o.focusOnShow?A.value=!0:!1===o.visible&&(A.value=!1)},K=()=>{n("focus")},V=()=>{b.value="first",n("blur")},J=e=>{var t;o.visible&&!A.value&&(e.relatedTarget&&(null==(t=e.relatedTarget)||t.focus()),e.target&&(b.value=e.target),A.value=!0)},Z=()=>{o.trapping||(A.value=!1)},Q=()=>{A.value=!1,n("close")};return v((()=>{let e;d(D,(t=>{var n;null==e||e();const i=x(r);if(null==(n=null==i?void 0:i.destroy)||n.call(i),t){const n=x(h);a.value=n,r.value=(({referenceEl:e,popperContentEl:t,arrowEl:n})=>{const r=en(o,{arrowEl:n,arrowOffset:x(w)});return Jt(e,t,r)})({referenceEl:t,popperContentEl:n,arrowEl:x(y)}),e=d((()=>t.getBoundingClientRect()),(()=>W()),{immediate:!0})}else r.value=void 0}),{immediate:!0}),d((()=>o.triggerTargetEl),((e,t)=>{null==L||L(),L=void 0;const n=x(e||h.value),r=x(t||h.value);if(N(n)){const{ariaLabel:e,id:t}=X(o);L=d([p,e,H,t],(e=>{["role","aria-label","aria-modal","id"].forEach(((t,o)=>{ce(e[o])?n.removeAttribute(t):n.setAttribute(t,e[o])}))}),{immediate:!0})}N(r)&&["role","aria-label","aria-modal","id"].forEach((e=>{r.removeAttribute(e)}))}),{immediate:!0}),d((()=>o.visible),z,{immediate:!0}),d((()=>en(o,{arrowEl:x(y),arrowOffset:x(w)})),(e=>{var t;return null==(t=r.value)?void 0:t.setOptions(e)}))})),R((()=>{null==L||L(),L=void 0})),t({popperContentRef:h,popperInstanceRef:r,updatePopper:W,contentStyle:_}),(e,t)=>(S(),j("div",{ref_key:"popperContentRef",ref:h,style:Y(x(_)),class:M(x(I)),tabindex:"-1",onMouseenter:t[0]||(t[0]=t=>e.$emit("mouseenter",t)),onMouseleave:t[1]||(t[1]=t=>e.$emit("mouseleave",t))},[F(x(ue),{trapped:A.value,"trap-on-focus-in":!0,"focus-trap-el":h.value,"focus-start-el":b.value,onFocusAfterTrapped:K,onFocusAfterReleased:V,onFocusin:J,onFocusoutPrevented:Z,onReleaseRequested:Q},{default:q((()=>[C(e.$slots,"default")])),_:3},8,["trapped","focus-trap-el","focus-start-el"])],38))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const on=J(Te),rn=T("tooltip"),an=w(l(s(s({},Oe),Qt),{appendTo:{type:u([String,Object]),default:we},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:u(Boolean),default:null},transition:{type:String,default:`${rn.namespace.value}-fade-in-linear`},teleported:{type:Boolean,default:!0},disabled:{type:Boolean}})),sn=w(l(s({},Pe),{disabled:Boolean,trigger:{type:u([String,Array]),default:"hover"},triggerKeys:{type:u(Array),default:()=>[Z.enter,Z.space]}})),ln=w({openDelay:{type:Number},visibleArrow:{type:Boolean,default:void 0},hideAfter:{type:Number,default:200},showArrow:{type:Boolean,default:!0}}),pn=Symbol("elTooltip");var un=E(A({name:"ElTooltipContent",components:{ElPopperContent:nn},inheritAttrs:!1,props:an,setup(e){const t=k(null),n=k(!1),o=k(!1),r=k(!1),a=k(!1),{controlled:i,id:s,open:l,trigger:p,onClose:u,onOpen:c,onShow:v,onHide:m,onBeforeShow:g,onBeforeHide:h}=B(pn,void 0),b=f((()=>e.persistent));R((()=>{a.value=!0}));const y=f((()=>!!x(b)||x(l))),w=f((()=>!e.disabled&&x(l))),O=f((()=>{var t;return null!=(t=e.style)?t:{}})),E=f((()=>!x(l))),A=()=>{if(x(i))return!0},C=fe(A,(()=>{e.enterable&&"hover"===x(p)&&c()})),T=fe(A,(()=>{"hover"===x(p)&&u()}));let S;return d((()=>x(l)),(e=>{e||null==S||S()}),{flush:"post"}),{ariaHidden:E,entering:o,leaving:r,id:s,intermediateOpen:n,contentStyle:O,contentRef:t,destroyed:a,shouldRender:y,shouldShow:w,onClose:u,open:l,onAfterShow:()=>{v(),S=Q(f((()=>{var e;return null==(e=t.value)?void 0:e.popperContentRef})),(()=>{if(x(i))return;"hover"!==x(p)&&u()}))},onBeforeEnter:()=>{var e,n;null==(n=null==(e=t.value)?void 0:e.updatePopper)||n.call(e),null==g||g()},onBeforeLeave:()=>{null==h||h()},onContentEnter:C,onContentLeave:T,onTransitionLeave:()=>{m()},onBlur:()=>{e.virtualTriggering||u()}}}}),[["render",function(e,t,n,o,r,a){const i=ee("el-popper-content");return S(),z(oe,{disabled:!e.teleported,to:e.appendTo},[F(ne,{name:e.transition,onAfterLeave:e.onTransitionLeave,onBeforeEnter:e.onBeforeEnter,onAfterEnter:e.onAfterShow,onBeforeLeave:e.onBeforeLeave},{default:q((()=>[e.shouldRender?L((S(),z(i,K({key:0,id:e.id,ref:"contentRef"},e.$attrs,{"aria-label":e.ariaLabel,"aria-hidden":e.ariaHidden,"boundaries-padding":e.boundariesPadding,"fallback-placements":e.fallbackPlacements,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,placement:e.placement,"popper-options":e.popperOptions,strategy:e.strategy,effect:e.effect,enterable:e.enterable,pure:e.pure,"popper-class":e.popperClass,"popper-style":[e.popperStyle,e.contentStyle],"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,visible:e.shouldShow,"z-index":e.zIndex,onMouseenter:e.onContentEnter,onMouseleave:e.onContentLeave,onBlur:e.onBlur,onClose:e.onClose}),{default:q((()=>[V(" Workaround bug #6378 "),e.destroyed?V("v-if",!0):C(e.$slots,"default",{key:0})])),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onBlur","onClose"])),[[te,e.shouldShow]]):V("v-if",!0)])),_:3},8,["name","onAfterLeave","onBeforeEnter","onAfterEnter","onBeforeLeave"])],8,["disabled","to"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const fn=(e,t,n)=>o=>{((e,t)=>re(e)?e.includes(t):e===t)(x(e),t)&&n(o)};var cn=E(A({name:"ElTooltipTrigger",components:{ElPopperTrigger:Le},props:sn,setup(e){const t=T("tooltip"),{controlled:n,id:o,open:r,onOpen:a,onClose:i,onToggle:s}=B(pn,void 0),l=k(null),p=()=>{if(x(n)||e.disabled)return!0},u=ae(e,"trigger"),f=fe(p,fn(u,"hover",a)),c=fe(p,fn(u,"hover",i)),d=fe(p,fn(u,"click",(e=>{0===e.button&&s(e)}))),v=fe(p,fn(u,"focus",a));return{onBlur:fe(p,fn(u,"focus",i)),onContextMenu:fe(p,fn(u,"contextmenu",(e=>{e.preventDefault(),s(e)}))),onFocus:v,onMouseenter:f,onMouseleave:c,onClick:d,onKeydown:fe(p,(t=>{const{code:n}=t;e.triggerKeys.includes(n)&&(t.preventDefault(),s(t))})),open:r,id:o,triggerRef:l,ns:t}}}),[["render",function(e,t,n,o,r,a){const i=ee("el-popper-trigger");return S(),z(i,{id:e.id,"virtual-ref":e.virtualRef,open:e.open,"virtual-triggering":e.virtualTriggering,class:M(e.ns.e("trigger")),onBlur:e.onBlur,onClick:e.onClick,onContextmenu:e.onContextMenu,onFocus:e.onFocus,onMouseenter:e.onMouseenter,onMouseleave:e.onMouseleave,onKeydown:e.onKeydown},{default:q((()=>[C(e.$slots,"default")])),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const{useModelToggleProps:dn,useModelToggle:vn,useModelToggleEmits:mn}=(e=>{const t=`update:${e}`,n=`onUpdate:${e}`;return{useModelToggle:({indicator:o,toggleReason:r,shouldHideWhenRouteChanges:a,shouldProceed:i,onShow:l,onHide:p})=>{const u=m(),{emit:b}=u,y=u.props,w=f((()=>c(y[n]))),x=f((()=>null===y[e])),O=e=>{!0!==o.value&&(o.value=!0,r&&(r.value=e),c(l)&&l(e))},E=e=>{!1!==o.value&&(o.value=!1,r&&(r.value=e),c(p)&&p(e))},A=e=>{if(!0===y.disabled||c(i)&&!i())return;const n=w.value&&g;n&&b(t,!0),!x.value&&n||O(e)},k=e=>{if(!0===y.disabled||!g)return;const n=w.value&&g;n&&b(t,!1),!x.value&&n||E(e)},C=e=>{h(e)&&(y.disabled&&e?w.value&&b(t,!1):o.value!==e&&(e?O():E()))};return d((()=>y[e]),C),a&&void 0!==u.appContext.config.globalProperties.$route&&d((()=>s({},u.proxy.$route)),(()=>{a.value&&o.value&&k()})),v((()=>{C(y[e])})),{hide:k,show:A,toggle:()=>{o.value?k():A()}}},useModelToggleProps:{[e]:ge,[n]:he},useModelToggleEmits:[t]}})("visible"),gn=A({name:"ElTooltip",components:{ElPopper:on,ElPopperArrow:Re,ElTooltipContent:un,ElTooltipTrigger:cn},props:s(s(s(s(s(s({},Ce),dn),an),sn),Be),ln),emits:[...mn,"before-show","before-hide","show","hide","open","close"],setup(e,{emit:t}){xe();const n=f((()=>(ie(e.openDelay),e.openDelay||e.showAfter))),o=f((()=>(ie(e.visibleArrow),h(e.visibleArrow)?e.visibleArrow:e.showArrow))),r=de(),a=k(null),i=k(null),s=()=>{var e;const t=x(a);t&&(null==(e=t.popperInstanceRef)||e.update())},l=k(!1),p=k(void 0),{show:u,hide:c}=vn({indicator:l,toggleReason:p}),{onOpen:v,onClose:m}=Ee({showAfter:n,hideAfter:ae(e,"hideAfter"),open:u,close:c}),g=f((()=>h(e.visible)));O(pn,{controlled:g,id:r,open:se(l),trigger:ae(e,"trigger"),onOpen:e=>{v(e)},onClose:e=>{m(e)},onToggle:e=>{x(l)?m(e):v(e)},onShow:()=>{t("show",p.value)},onHide:()=>{t("hide",p.value)},onBeforeShow:()=>{t("before-show",p.value)},onBeforeHide:()=>{t("before-hide",p.value)},updatePopper:s}),d((()=>e.disabled),(e=>{e&&l.value&&(l.value=!1)}));return le((()=>l.value&&c())),{compatShowAfter:n,compatShowArrow:o,popperRef:a,contentRef:i,open:l,hide:c,isFocusInsideContent:()=>{var e,t;const n=null==(t=null==(e=i.value)?void 0:e.contentRef)?void 0:t.popperContentRef;return n&&n.contains(document.activeElement)},updatePopper:s,onOpen:v,onClose:m}}}),hn=["innerHTML"],bn={key:1};const yn=J(E(gn,[["render",function(e,t,n,o,r,a){const i=ee("el-tooltip-trigger"),s=ee("el-popper-arrow"),l=ee("el-tooltip-content"),p=ee("el-popper");return S(),z(p,{ref:"popperRef",role:e.role},{default:q((()=>[F(i,{disabled:e.disabled,trigger:e.trigger,"trigger-keys":e.triggerKeys,"virtual-ref":e.virtualRef,"virtual-triggering":e.virtualTriggering},{default:q((()=>[e.$slots.default?C(e.$slots,"default",{key:0}):V("v-if",!0)])),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),F(l,{ref:"contentRef","aria-label":e.ariaLabel,"boundaries-padding":e.boundariesPadding,content:e.content,disabled:e.disabled,effect:e.effect,enterable:e.enterable,"fallback-placements":e.fallbackPlacements,"hide-after":e.hideAfter,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,persistent:e.persistent,"popper-class":e.popperClass,"popper-style":e.popperStyle,placement:e.placement,"popper-options":e.popperOptions,pure:e.pure,"raw-content":e.rawContent,"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,"show-after":e.compatShowAfter,strategy:e.strategy,teleported:e.teleported,transition:e.transition,"virtual-triggering":e.virtualTriggering,"z-index":e.zIndex,"append-to":e.appendTo},{default:q((()=>[C(e.$slots,"content",{},(()=>[e.rawContent?(S(),j("span",{key:0,innerHTML:e.content},null,8,hn)):(S(),j("span",bn,pe(e.content),1))])),e.compatShowArrow?(S(),z(s,{key:0,"arrow-offset":e.arrowOffset},null,8,["arrow-offset"])):V("v-if",!0)])),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])])),_:3},8,["role"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]));export{yn as E,Se as O,pn as T,ke as a,an as b,sn as u};
