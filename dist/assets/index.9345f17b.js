import{b as e,d as a,a4 as l,u as t,l as s,X as r,a6 as o,aO as n,al as i,o as u,a as c,w as v,q as m,v as f,p,n as d,e as h,ad as y,ae as g,_ as w,ay as b,c as S,s as z,K as x,R as _,am as E,ab as k,Z as L,a8 as T,I as H,$,a0 as B,m as C,a7 as N,g as R,r as X,f as j,az as A,h as M}from"./index.10862972.js";import{t as W}from"./event.4982e83d.js";const Y=Symbol("scrollbarContextKey"),K={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};var O=w(a({__name:"thumb",props:e({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),setup(e){const a=e,w=l(Y),S=t("scrollbar");w||W("Thumb","can not inject scrollbar context");const z=s(),x=s(),_=s({}),E=s(!1);let k=!1,L=!1,T=b?document.onselectstart:null;const H=r((()=>K[a.vertical?"vertical":"horizontal"])),$=r((()=>(({move:e,size:a,bar:l})=>({[l.size]:a,transform:`translate${l.axis}(${e}%)`}))({size:a.size,move:a.move,bar:H.value}))),B=r((()=>z.value[H.value.offset]**2/w.wrapElement[H.value.scrollSize]/a.ratio/x.value[H.value.offset])),C=e=>{var a;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(a=window.getSelection())||a.removeAllRanges(),R(e);const l=e.currentTarget;l&&(_.value[H.value.axis]=l[H.value.offset]-(e[H.value.client]-l.getBoundingClientRect()[H.value.direction]))},N=e=>{if(!x.value||!z.value||!w.wrapElement)return;const a=100*(Math.abs(e.target.getBoundingClientRect()[H.value.direction]-e[H.value.client])-x.value[H.value.offset]/2)*B.value/z.value[H.value.offset];w.wrapElement[H.value.scroll]=a*w.wrapElement[H.value.scrollSize]/100},R=e=>{e.stopImmediatePropagation(),k=!0,document.addEventListener("mousemove",X),document.addEventListener("mouseup",j),T=document.onselectstart,document.onselectstart=()=>!1},X=e=>{if(!z.value||!x.value)return;if(!1===k)return;const a=_.value[H.value.axis];if(!a)return;const l=100*(-1*(z.value.getBoundingClientRect()[H.value.direction]-e[H.value.client])-(x.value[H.value.offset]-a))*B.value/z.value[H.value.offset];w.wrapElement[H.value.scroll]=l*w.wrapElement[H.value.scrollSize]/100},j=()=>{k=!1,_.value[H.value.axis]=0,document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",j),A(),L&&(E.value=!1)};o((()=>{A(),document.removeEventListener("mouseup",j)}));const A=()=>{document.onselectstart!==T&&(document.onselectstart=T)};return n(i(w,"scrollbarElement"),"mousemove",(()=>{L=!1,E.value=!!a.size})),n(i(w,"scrollbarElement"),"mouseleave",(()=>{L=!0,E.value=k})),(e,a)=>(u(),c(g,{name:h(S).b("fade"),persisted:""},{default:v((()=>[m(p("div",{ref_key:"instance",ref:z,class:d([h(S).e("bar"),h(S).is(h(H).key)]),onMousedown:N},[p("div",{ref_key:"thumb",ref:x,class:d(h(S).e("thumb")),style:y(h($)),onMousedown:C},null,38)],34),[[f,e.always||E.value]])])),_:1},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);var q=w(a({__name:"bar",props:e({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),setup(e,{expose:a}){const l=e,t=s(0),r=s(0);return a({handleScroll:e=>{if(e){const a=e.offsetHeight-4,s=e.offsetWidth-4;r.value=100*e.scrollTop/a*l.ratioY,t.value=100*e.scrollLeft/s*l.ratioX}}}),(e,a)=>(u(),S(x,null,[z(O,{move:t.value,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),z(O,{move:r.value,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const I=M(w(a({name:"ElScrollbar",props:e({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:Boolean,wrapStyle:{type:_([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),emits:{scroll:({scrollTop:e,scrollLeft:a})=>[e,a].every(E)},setup(e,{expose:a,emit:l}){const o=e,i=t("scrollbar");let m,f;const g=s(),w=s(),b=s(),z=s("0"),x=s("0"),_=s(),M=s(1),W=s(1),K=r((()=>{const e={};return o.height&&(e.height=k(o.height)),o.maxHeight&&(e.maxHeight=k(o.maxHeight)),[o.wrapStyle,e]})),O=()=>{var e;w.value&&(null==(e=_.value)||e.handleScroll(w.value),l("scroll",{scrollTop:w.value.scrollTop,scrollLeft:w.value.scrollLeft}))};const I=()=>{if(!w.value)return;const e=w.value.offsetHeight-4,a=w.value.offsetWidth-4,l=e**2/w.value.scrollHeight,t=a**2/w.value.scrollWidth,s=Math.max(l,o.minSize),r=Math.max(t,o.minSize);M.value=l/(e-l)/(s/(e-s)),W.value=t/(a-t)/(r/(a-r)),x.value=s+4<e?`${s}px`:"",z.value=r+4<a?`${r}px`:""};return L((()=>o.noresize),(e=>{e?(null==m||m(),null==f||f()):(({stop:m}=T(b,I)),f=n("resize",I))}),{immediate:!0}),L((()=>[o.maxHeight,o.height]),(()=>{o.native||H((()=>{var e;I(),w.value&&(null==(e=_.value)||e.handleScroll(w.value))}))})),$(Y,B({scrollbarElement:g,wrapElement:w})),C((()=>{o.native||H((()=>I()))})),N((()=>I())),a({wrap$:w,update:I,scrollTo:function(e,a){A(e)?w.value.scrollTo(e):E(e)&&E(a)&&w.value.scrollTo(e,a)},setScrollTop:e=>{E(e)&&(w.value.scrollTop=e)},setScrollLeft:e=>{E(e)&&(w.value.scrollLeft=e)},handleScroll:O}),(e,a)=>(u(),S("div",{ref_key:"scrollbar$",ref:g,class:d(h(i).b())},[p("div",{ref_key:"wrap$",ref:w,class:d([e.wrapClass,h(i).e("wrap"),{[h(i).em("wrap","hidden-default")]:!e.native}]),style:y(h(K)),onScroll:O},[(u(),c(X(e.tag),{ref_key:"resize$",ref:b,class:d([h(i).e("view"),e.viewClass]),style:y(e.viewStyle)},{default:v((()=>[R(e.$slots,"default")])),_:3},8,["class","style"]))],38),e.native?j("v-if",!0):(u(),c(q,{key:0,ref_key:"barRef",ref:_,height:x.value,width:z.value,always:e.always,"ratio-x":W.value,"ratio-y":M.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]));export{I as E};
