import{_ as e,a}from"./index.16c6b546.js";import{_ as l}from"./index.2c00059e.js";import{k as t,X as r,Y as s,R as o,r as u,o as i,z as m,U as n,q as d,D as p,E as c,a1 as f,P as v,j as g}from"./index.48f940ee.js";import{E as b,a as _}from"./el-col.17ce7fba.js";import{E as h,a as j}from"./el-form-item.811364a1.js";import{E as x}from"./el-input.41045a8b.js";import{E as y}from"./el-button.d3031f13.js";/* empty css                */import{a as E}from"./index.178d681a.js";import{b as k}from"./route-block.89f12ae7.js";import"./isEqual.c6c571f0.js";import"./index.786a6241.js";const V=p(" 返回 "),q=p("取消"),z=p("提交"),C=t({name:"PersonalEditEmail"}),P=Object.assign(C,{setup(t){const k=r(),C=s(),{proxy:P}=g(),w=o(),R=u({email:"",captcha:""}),U=u({email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",trigger:"blur",message:"请输入正确的邮箱格式"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"},{min:4,max:4,trigger:"blur",message:"验证码长度必须为4位"}]}),I=u(!1),D="{{time}}s后重新获取";let O=u(20);const S=u("发送验证码");function X(){O.value=20,S.value=D.replace("{{time}}",O.value);let e=setInterval((()=>{O.value--,O.value<=0?(S.value="发送验证码",clearInterval(e),I.value=!1):S.value=D.replace("{{time}}",O.value)}),1e3)}function Y(){P.$refs.formRef.validate((e=>{e&&w.editPassword(R.value).then((()=>{f({type:"success",message:"模拟修改成功，请重新登录"}),w.logout().then((()=>{C.push({name:"login",query:{redirect:k.fullPath}})}))})).catch((()=>{}))}))}function $(){C.push({name:"personalSetting"})}return(t,r)=>{const s=E,o=v,u=y,f=e,g=x,k=h,C=j,P=b,w=_,D=l,O=a;return i(),m("div",null,[n(f,{title:"修改邮箱",content:"绑定邮箱可以提高帐号安全性噢~"},{default:d((()=>[n(u,{size:"default",round:"",onClick:$},{icon:d((()=>[n(o,null,{default:d((()=>[n(s,{name:"ep:arrow-left"})])),_:1})])),default:d((()=>[V])),_:1})])),_:1}),n(D,null,{default:d((()=>[n(w,null,{default:d((()=>[n(P,{md:24,lg:12},{default:d((()=>[n(C,{ref:"formRef",model:R.value,rules:U.value,"label-width":"120px"},{default:d((()=>[n(k,{label:"邮箱",prop:"email"},{default:d((()=>[n(g,{modelValue:R.value.email,"onUpdate:modelValue":r[0]||(r[0]=e=>R.value.email=e),type:"text",placeholder:"请输入邮箱号"},null,8,["modelValue"])])),_:1}),n(k,{label:"验证码",prop:"captcha"},{default:d((()=>[n(g,{ref:"captcha",modelValue:R.value.captcha,"onUpdate:modelValue":r[1]||(r[1]=e=>R.value.captcha=e),type:"text",autocomplete:"on",placeholder:"请输入验证码"},{append:d((()=>[n(u,{disabled:I.value,onClick:X},{default:d((()=>[p(c(S.value),1)])),_:1},8,["disabled"])])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})])),_:1}),n(O,null,{default:d((()=>[n(u,{size:"large",onClick:$},{default:d((()=>[q])),_:1}),n(u,{type:"primary",size:"large",onClick:Y},{default:d((()=>[z])),_:1})])),_:1})])}}});"function"==typeof k&&k(P);export{P as default};