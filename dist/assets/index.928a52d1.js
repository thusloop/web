import{_ as t}from"./index.15d38df2.js";import{k as e,r as s,S as o,al as a,o as n,z as d,C as i,B as c,s as l,E as r,D as m}from"./index.f499658f.js";const u=e({name:"FixedActionBar"});var v=t(Object.assign(u,{setup(t){const e=s({isBottom:!0});function l(){var t=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.clientHeight||document.body.clientHeight,o=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+s)>=o?e.value.isBottom=!0:e.value.isBottom=!1}return o((()=>{l(),window.addEventListener("scroll",l)})),a((()=>{window.removeEventListener("scroll",l)})),(t,s)=>(n(),d("div",{class:c(["actionbar",{shadow:!e.value.isBottom}]),"data-fixed-calc-width":""},[i(t.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-1048a486"]]);const p={class:"header"},f={class:"main"},g={class:"title"},h={class:"content"},b={class:"sub"},w=e({name:"PageHeader"});var B=t(Object.assign(w,{props:{title:{type:String,required:!0},content:{type:String,default:""}},setup:t=>(e,s)=>(n(),d("div",p,[l("div",f,[l("div",g,r(t.title),1),l("div",h,[i(e.$slots,"content",{},(()=>[m(r(t.content),1)]),!0)])]),l("div",b,[i(e.$slots,"default",{},void 0,!0)])]))}),[["__scopeId","data-v-04268528"]]);export{B as _,v as a};