import{b as e,R as t,ap as s,d as a,a4 as u,X as l,u as r,am as n,az as p,o,a as c,w as d,g as f,n as m,e as g,ad as i,r as b,_ as y,h as $,$ as h}from"./index.10862972.js";const j=Symbol("rowContextKey");const v=$(y(a({name:"ElCol",props:e({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:t([Number,Object]),default:()=>s({})},sm:{type:t([Number,Object]),default:()=>s({})},md:{type:t([Number,Object]),default:()=>s({})},lg:{type:t([Number,Object]),default:()=>s({})},xl:{type:t([Number,Object]),default:()=>s({})}}),setup(e){const t=e,{gutter:s}=u(j,{gutter:l((()=>0))}),a=r("col"),y=l((()=>{const e={};return s.value&&(e.paddingLeft=e.paddingRight=s.value/2+"px"),e})),$=l((()=>{const e=[];["span","offset","pull","push"].forEach((s=>{const u=t[s];n(u)&&("span"===s?e.push(a.b(`${t[s]}`)):u>0&&e.push(a.b(`${s}-${t[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{n(t[s])?e.push(a.b(`${s}-${t[s]}`)):p(t[s])&&Object.entries(t[s]).forEach((([t,u])=>{e.push("span"!==t?a.b(`${s}-${t}-${u}`):a.b(`${s}-${u}`))}))})),s.value&&e.push(a.is("guttered")),e}));return(e,t)=>(o(),c(b(e.tag),{class:m([g(a).b(),g($)]),style:i(g(y))},{default:d((()=>[f(e.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]));const N=$(y(a({name:"ElRow",props:e({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"],default:"top"}}),setup(e){const t=e,s=r("row"),a=l((()=>t.gutter));h(j,{gutter:a});const u=l((()=>{const e={};return t.gutter?(e.marginRight=e.marginLeft=`-${t.gutter/2}px`,e):e}));return(e,a)=>(o(),c(b(e.tag),{class:m([g(s).b(),g(s).is(`justify-${t.justify}`,"start"!==e.justify),g(s).is(`align-${t.align}`,"top"!==e.align)]),style:i(g(u))},{default:d((()=>[f(e.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]));export{v as E,N as a};