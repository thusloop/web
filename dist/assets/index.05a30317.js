import{_ as e}from"./index.91cea44f.js";import{k as a,R as t,r as l,z as s,U as o,q as i,Y as n,o as r,s as p,V as c,W as u,D as d,a1 as m,bJ as f,a0 as g}from"./index.f499658f.js";import{E as v}from"./el-button.994f3911.js";import{_ as x}from"./index.c3a9467e.js";import{E as b}from"./el-input.85ce3725.js";import{_ as h}from"./index.15d38df2.js";import{E as j}from"./index.bca7277d.js";/* empty css                */import"./index.f964aaa5.js";import"./aria.e9c93023.js";import"./focus-trap.7e3cff9b.js";import"./index.a42c7e4c.js";import"./scroll.9b2b3704.js";const y=e=>(c("data-v-4cc0c08a"),e=e(),u(),e),w=y((()=>p("div",{class:"title"}," 描述您的问题 ",-1))),z=y((()=>p("i",{style:{color:"red","font-size":"15px","margin-right":"5px"}},"*",-1))),E=y((()=>p("span",{style:{"font-weight":"bold","font-size":"16px"}},"问题描述",-1))),D=y((()=>p("span",{style:{"font-size":"12px",color:"#8a8f97"}},"（必填）",-1))),R={style:{"margin-left":"10px"}},U=y((()=>p("span",{style:{"font-weight":"bold","font-size":"14px",color:"#8a8f97"}},"问题补充说明:",-1))),V={style:{"margin-left":"10px"}},_=y((()=>p("i",{style:{color:"red","font-size":"15px","margin-right":"5px"}},"*",-1))),k=y((()=>p("span",{style:{"font-weight":"bold","font-size":"16px"}},"问题标签",-1))),C={class:"foot-button"},L=d("提交"),q=a({name:"PutQuestion"});var B=h(Object.assign(q,{setup(a){const c=t(),u=n(),d=l({labelData:"",title:"",ext:["jpg","png","jpeg","tif"],content:"",images:""}),h=l(!0);function y(){h.value&&(j.confirm('标签输入的格式为<span style="color:red;font-size: large">每个标签之间以空格分离</span><div style="color: #909399">合适标签可以提高回答的专业率<br>让你的问题被更多人看到</div>',"提示",{type:"success",showCancelButton:!1,showConfirmButton:!1,dangerouslyUseHTMLString:!0}).catch((()=>{h.value=!1})),h.value=!1)}function q(e){let a;if(e=e.replace(new RegExp("<p>","g"),"").replace(new RegExp("</p>","g"),""),new RegExp("img").test(e)){e=e.replace(new RegExp("image/","g"),"http://121.5.161.87:8888/image/");let t=new RegExp("/","g");a=e.replace(t,"\\\\/").replace(/"/g,"\\\\x22")}else{let t=new RegExp("<.+?>","g");a=e.replace(t,"")}d.value.content=a}function B(e,a){var t;c.isLogin?(t=e.filename,new Promise(((e,a)=>{const l=t().split("."),s=l[l.length-1];-1!==d.value.ext.indexOf(s)?e():(m.error(`图片上传只支持${d.value.ext.join("/")}格式`),a())}))).then((()=>{let t=new FormData;t.append("file",e.blob(),e.filename()),f({baseURL:"http://121.5.161.87:8888/",url:"/api/uploadfile",method:"post",headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+c.token},data:t}).then((e=>{if(200===e.status)if(200===e.data.code){let t="http://121.5.161.87:8888/"+e.data.data.imageurl.replace("/","");a({imageUrl:t,status:200})}else"未检测到token"===e.data.message?m.error("登录信息已过期, 请重新登录"):m.error(e.data.message)})).catch((e=>{a({status:404})}))})):(m.error("当前未登录!!请先登录"),a({status:404}))}function P(){if(c.isLogin)if(d.value.title&&d.value.labelData){let e=new RegExp(" ","g");d.value.labelData=d.value.labelData.trim().replace(e,","),g.post("/api/postquiz",{title:d.value.title,content:d.value.content?d.value.content:" ",keywords:d.value.labelData}).then((e=>{m.success("提问提交成功"),u.push({name:"detailProblem",params:{id:e.data.qid}})}))}else d.value.title?m.success("提问时关键字不能为空,输入关键字可以得到更精准的回答哦"):m.success("提问时标题不能为空");else m.error("当前未登录!!请先登录")}return(a,t)=>{const l=b,n=x,c=v,u=e;return r(),s("div",null,[o(u,null,{default:i((()=>[w,p("div",null,[z,E,D,o(l,{modelValue:d.value.title,"onUpdate:modelValue":t[0]||(t[0]=e=>d.value.title=e),clearable:"",class:"input-title",placeholder:"一句话描述你的问题"},null,8,["modelValue"])]),p("div",R,[U,o(n,{style:{margin:"10px"},"onUpdate:modelValue":q,onUploadImage:B})]),p("div",V,[_,k,o(l,{modelValue:d.value.labelData,"onUpdate:modelValue":t[1]||(t[1]=e=>d.value.labelData=e),clearable:"",class:"input-title",placeholder:"输入标签 每个标签以空格隔开",onFocus:y},null,8,["modelValue"])]),p("div",C,[o(c,{type:"primary",plain:"",onClick:P},{default:i((()=>[L])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-4cc0c08a"]]);export{B as default};
