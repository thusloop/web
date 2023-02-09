var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{N as n,k as i,i as u,m as c,r as v,c as m,ad as f,aO as p,ak as d,o as y,p as h,q as b,v as g,T as w,s as S,B as z,y as x,I as _,aj as k,_ as E,az as L,z as T,U as j,F as O,a9 as H,d as B,ah as C,w as $,af as N,n as P,J as A,ab as M,S as R,ae as W,C as X,H as Y,G as I,aA as q,L as K}from"./index.f499658f.js";import{t as D}from"./el-input.85ce3725.js";const F=Symbol("scrollbarContextKey"),G={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};var J=E(i({__name:"thumb",props:n({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),setup(e){const a=e,l=u(F),t=c("scrollbar");l||D("Thumb","can not inject scrollbar context");const r=v(),s=v(),o=v({}),n=v(!1);let i=!1,E=!1,T=L?document.onselectstart:null;const j=m((()=>G[a.vertical?"vertical":"horizontal"])),O=m((()=>(({move:e,size:a,bar:l})=>({[l.size]:a,transform:`translate${l.axis}(${e}%)`}))({size:a.size,move:a.move,bar:j.value}))),H=m((()=>r.value[j.value.offset]**2/l.wrapElement[j.value.scrollSize]/a.ratio/s.value[j.value.offset])),B=e=>{var a;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(a=window.getSelection())||a.removeAllRanges(),$(e);const l=e.currentTarget;l&&(o.value[j.value.axis]=l[j.value.offset]-(e[j.value.client]-l.getBoundingClientRect()[j.value.direction]))},C=e=>{if(!s.value||!r.value||!l.wrapElement)return;const a=100*(Math.abs(e.target.getBoundingClientRect()[j.value.direction]-e[j.value.client])-s.value[j.value.offset]/2)*H.value/r.value[j.value.offset];l.wrapElement[j.value.scroll]=a*l.wrapElement[j.value.scrollSize]/100},$=e=>{e.stopImmediatePropagation(),i=!0,document.addEventListener("mousemove",N),document.addEventListener("mouseup",P),T=document.onselectstart,document.onselectstart=()=>!1},N=e=>{if(!r.value||!s.value)return;if(!1===i)return;const a=o.value[j.value.axis];if(!a)return;const t=100*(-1*(r.value.getBoundingClientRect()[j.value.direction]-e[j.value.client])-(s.value[j.value.offset]-a))*H.value/r.value[j.value.offset];l.wrapElement[j.value.scroll]=t*l.wrapElement[j.value.scrollSize]/100},P=()=>{i=!1,o.value[j.value.axis]=0,document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",P),A(),E&&(n.value=!1)};f((()=>{A(),document.removeEventListener("mouseup",P)}));const A=()=>{document.onselectstart!==T&&(document.onselectstart=T)};return p(d(l,"scrollbarElement"),"mousemove",(()=>{E=!1,n.value=!!a.size})),p(d(l,"scrollbarElement"),"mouseleave",(()=>{E=!0,n.value=i})),(e,a)=>(y(),h(k,{name:x(t).b("fade"),persisted:""},{default:b((()=>[g(S("div",{ref_key:"instance",ref:r,class:z([x(t).e("bar"),x(t).is(x(j).key)]),onMousedown:C},[S("div",{ref_key:"thumb",ref:s,class:z(x(t).e("thumb")),style:_(x(O)),onMousedown:B},null,38)],34),[[w,e.always||n.value]])])),_:1},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);var U=E(i({__name:"bar",props:n({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),setup(e,{expose:a}){const l=e,t=v(0),r=v(0);return a({handleScroll:e=>{if(e){const a=e.offsetHeight-4,s=e.offsetWidth-4;r.value=100*e.scrollTop/a*l.ratioY,t.value=100*e.scrollLeft/s*l.ratioX}}}),(e,a)=>(y(),T(O,null,[j(J,{move:t.value,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),j(J,{move:r.value,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const Q=n({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:Boolean,wrapStyle:{type:H([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),V={scroll:({scrollTop:e,scrollLeft:a})=>[e,a].every(B)},Z=i((ee=((e,a)=>{for(var l in a||(a={}))r.call(a,l)&&o(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&o(e,l,a[l]);return e})({},{name:"ElScrollbar"}),a(ee,l({props:Q,emits:V,setup(e,{expose:a,emit:l}){const t=e,r=c("scrollbar");let s,o;const n=v(),i=v(),u=v(),f=v("0"),d=v("0"),g=v(),w=v(1),k=v(1),E=m((()=>{const e={};return t.height&&(e.height=C(t.height)),t.maxHeight&&(e.maxHeight=C(t.maxHeight)),[t.wrapStyle,e]})),L=()=>{var e;i.value&&(null==(e=g.value)||e.handleScroll(i.value),l("scroll",{scrollTop:i.value.scrollTop,scrollLeft:i.value.scrollLeft}))},j=()=>{if(!i.value)return;const e=i.value.offsetHeight-4,a=i.value.offsetWidth-4,l=e**2/i.value.scrollHeight,r=a**2/i.value.scrollWidth,s=Math.max(l,t.minSize),o=Math.max(r,t.minSize);w.value=l/(e-l)/(s/(e-s)),k.value=r/(a-r)/(o/(a-o)),d.value=s+4<e?`${s}px`:"",f.value=o+4<a?`${o}px`:""};return $((()=>t.noresize),(e=>{e?(null==s||s(),null==o||o()):(({stop:s}=N(u,j)),o=p("resize",j))}),{immediate:!0}),$((()=>[t.maxHeight,t.height]),(()=>{t.native||P((()=>{var e;j(),i.value&&(null==(e=g.value)||e.handleScroll(i.value))}))})),A(F,M({scrollbarElement:n,wrapElement:i})),R((()=>{t.native||P((()=>j()))})),W((()=>j())),a({wrap$:i,update:j,scrollTo:function(e,a){q(e)?i.value.scrollTo(e):B(e)&&B(a)&&i.value.scrollTo(e,a)},setScrollTop:e=>{B(e)&&(i.value.scrollTop=e)},setScrollLeft:e=>{B(e)&&(i.value.scrollLeft=e)},handleScroll:L}),(e,a)=>(y(),T("div",{ref_key:"scrollbar$",ref:n,class:z(x(r).b())},[S("div",{ref_key:"wrap$",ref:i,class:z([e.wrapClass,x(r).e("wrap"),{[x(r).em("wrap","hidden-default")]:!e.native}]),style:_(x(E)),onScroll:L},[(y(),h(Y(e.tag),{ref_key:"resize$",ref:u,class:z([x(r).e("view"),e.viewClass]),style:_(e.viewStyle)},{default:b((()=>[X(e.$slots,"default")])),_:3},8,["class","style"]))],38),e.native?I("v-if",!0):(y(),h(U,{key:0,ref_key:"barRef",ref:g,height:d.value,width:f.value,always:e.always,"ratio-x":k.value,"ratio-y":w.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}}))));var ee;const ae=K(E(Z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]));export{ae as E};