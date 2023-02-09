import{k as defineComponent,R as useUserStore,r as ref,S as onMounted,ad as onBeforeUnmount,a0 as api,P as ElIcon,v as withDirectives,z as createElementBlock,s as createBaseVNode,p as createBlock,G as createCommentVNode,E as toDisplayString,U as createVNode,q as withCtx,I as normalizeStyle,F as Fragment,b6 as renderList,X as useRoute,Y as useRouter,o as openBlock,D as createTextVNode,V as pushScopeId,W as popScopeId,a1 as ElMessage}from"./index.f499658f.js";import{v as vLoading}from"./el-loading.57218893.js";import{_ as __unplugin_components_5}from"./index.d55bb01b.js";import{E as ElAvatar}from"./el-tooltip.1b4f5208.js";import{E as ElTooltip}from"./el-popper.749b4208.js";import{E as ElInput}from"./el-input.85ce3725.js";import{_ as __unplugin_components_10}from"./index.4782147e.js";import{E as ElCard}from"./el-card.1281a4aa.js";import{E as ElImage}from"./el-image-viewer.66177193.js";import{E as ElButton}from"./el-button.994f3911.js";/* empty css                */import{_ as _export_sfc,a as _sfc_main$1}from"./index.15d38df2.js";import{_ as __unplugin_components_3}from"./index.dcdae372.js";import"./focus-trap.7e3cff9b.js";import"./index.f964aaa5.js";import"./index.a42c7e4c.js";import"./debounce.bdc5bbc3.js";import"./scroll.9b2b3704.js";var index_vue_vue_type_style_index_0_scoped_true_lang="";const _withScopeId=e=>(pushScopeId("data-v-3ba3aaae"),e=e(),popScopeId(),e),_hoisted_1={key:1,class:"title-box",style:{"padding-left":"0"}},_hoisted_2={class:"title"},_hoisted_3={key:2,class:"button-box"},_hoisted_4=createTextVNode(" 写回答 "),_hoisted_5=createTextVNode(" 提出问题 "),_hoisted_6={class:"label-box"},_hoisted_7={class:"label"},_hoisted_8={class:"title-box"},_hoisted_9={class:"title"},_hoisted_10={class:"content-box"},_hoisted_11=_withScopeId((()=>createBaseVNode("span",{style:{"font-size":"15px"}},"展开",-1))),_hoisted_12={class:"content-foot"},_hoisted_13={class:"button-box"},_hoisted_14=createTextVNode(" 写回答 "),_hoisted_15=_withScopeId((()=>createBaseVNode("span",{style:{"font-size":"15px"}},"收起",-1))),_hoisted_16={class:"total-box"},_hoisted_17={class:"total-num"},_hoisted_18={key:0,class:"detail-box"},_hoisted_19={class:"detail"},_hoisted_20={key:0,class:"briefDetail"},_hoisted_21=["onClick"],_hoisted_22=_withScopeId((()=>createBaseVNode("span",null,"阅读全文",-1))),_hoisted_23={class:"footer"},_hoisted_24=_withScopeId((()=>createBaseVNode("div",{style:{"font-size":"20px"}},"🖒",-1))),_hoisted_25=createTextVNode(" 赞同 "),_hoisted_26={style:{"letter-spacing":"1px","margin-left":"10px"}},_hoisted_27=_withScopeId((()=>createBaseVNode("div",{style:{"font-size":"10px"}},"o(TヘTo)",-1))),_hoisted_28={key:0,class:"icon-box"},_hoisted_29={style:{"font-size":"15px"}},_hoisted_30={class:"icon-box"},_hoisted_31=_withScopeId((()=>createBaseVNode("span",{style:{"font-size":"15px"}},"分享",-1))),_hoisted_32=["onClick"],_hoisted_33=_withScopeId((()=>createBaseVNode("span",{style:{"font-size":"15px"}},"收起",-1))),_hoisted_34={style:{display:"flex","margin-top":"10px"}},_hoisted_35={style:{padding:"0 10px 0 0"}},_hoisted_36=createTextVNode(" 发表 "),_hoisted_37={class:"comment-box"},_hoisted_38={class:"comment-header"},_hoisted_39={class:"comment"},_hoisted_40={class:"user"},_hoisted_41={class:"comment-detail-box"},_hoisted_42={style:{display:"flex","justify-content":"space-between","align-items":"center"}},_hoisted_43=_withScopeId((()=>createBaseVNode("div",{class:"comment-detail-head"},[createBaseVNode("div",{class:"userName"},"趣味运动会"),createBaseVNode("div",{class:"time"}," 2019-12-12 11:54")],-1))),_hoisted_44={class:"comment-detail-head-icon"},_hoisted_45=_withScopeId((()=>createBaseVNode("span",{style:{"letter-spacing":"1px"}},"回复",-1))),_hoisted_46={class:"comment-detail-icon-box"},_hoisted_47={class:"icon",style:{"margin-left":"5px"},viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},_hoisted_48=_withScopeId((()=>createBaseVNode("path",{d:"M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"},null,-1))),_hoisted_49=[_hoisted_48],_hoisted_50=_withScopeId((()=>createBaseVNode("span",null,"3",-1))),_hoisted_51=_withScopeId((()=>createBaseVNode("div",{class:"comment-detail"},[createBaseVNode("span",null,"我觉得这和她原生家庭的家境好以及氛围好是密不可分的。比如家里父母社会地位本身就高，那么面对公司领导，根本不会发怵，反而很有底气。")],-1))),_hoisted_52={key:0,style:{display:"flex"},class:"replay-box"},_hoisted_53=createTextVNode(" 发布 "),_hoisted_54={class:"total-box",style:{"padding-top":"0"}},__default__=defineComponent({name:"DetailPage"}),_sfc_main=Object.assign(__default__,{setup(__props){const userStore=useUserStore(),route=useRoute(),router=useRouter(),commentShow=ref(!1),isUnfold=ref(!1),replyBoxShow=ref([]),data=ref({userId:1,qid:route.params.id,changeHead:!1,agreeNum:123,userAvatar:"",commentNumber:100,publishComment:"",replyText:[],showMore:!0,title:"",content:{imagSrc:"",text:"",username:"",time:""},contentShow:!1,keyWords:[],ansNum:"",hasStar:!1,answerContent:[],comment:!1,loading:!1});function getList(){data.value.loading=!0,api.get("api/quizinfo",{params:{qid:data.value.qid,userId:userStore.account?userStore.account:""}}).then((e=>{let t=new RegExp("<.+?>","g");if(t.test(e.data.quiz_list[0].content)){let a=e.data.quiz_list[0].content.match(t),o=new RegExp("x22http","g");for(let e=0;e<a.length;e++)if(o.test(a[e])){data.value.content.imagSrc=a[e].split(/\s+/)[1].split("=")[1].replace(/\\x22/g,"").replace(/\\/g,"");break}e.data.quiz_list[0].content=e.data.quiz_list[0].content.replace(t,"")}data.value.title=e.data.quiz_list[0].title,data.value.content.username=e.data.quiz_list[0].username,data.value.content.time=e.data.quiz_list[0].time.replace("T"," ").split(".")[0],data.value.content.text=e.data.quiz_list[0].content,data.value.keyWords=""===e.data.quiz_list[0].keyWords[0]?[]:e.data.quiz_list[0].keyWords,data.value.ansNum=e.data.quiz_list[0].ans_num,data.value.hasStar=e.data.quiz_list[0].is_star,data.value.ansNum<=10&&(data.value.showMore=!1)})),api.get("api/search_answer",{params:{qid:data.value.qid,userId:userStore.account?userStore.account:""}}).then((res=>{res.data.answer_list.forEach((item=>{let cache=item.content.replace(eval("/\\\\/g"),"\\").replace(/(。+|(！+)|？+)/g,"$1\n").replace("&nbsp"," ");data.value.answerContent.push({aid:item.id,username:item.username,agreeNum:item.like,hasAgree:item.is_like,sendTime:item.time.replace("T"," ").split(".")[0],detailInfo:cache,briefDetail:item.content.substring(0,100).replace(eval("/\\\\/g"),"\\").replace(/(。|！|？)/g,"$1\n").replace("&nbsp"," ")+"....",detailShow:cache.split("\n").length<=30})})),data.value.answerContent.sort(((e,t)=>t.agreeNum-e.agreeNum)),data.value.loading=!1}))}function handleScroll(){data.value.content.imagSrc?data.value.changeHead=window.pageYOffset>300:data.value.content.text?data.value.changeHead=window.pageYOffset>130:data.value.changeHead=window.pageYOffset>10}function onSearch(e){router.push({name:"resultsInterface",params:{type:"search-issues",keyword:e}})}function tagSearch(e){router.push({name:"resultsInterface",params:{type:"search-keywords",keyword:e}})}function handleWrite(){""!==data.value.userId&&router.push({name:"answerQuestion",params:{problemId:data.value.qid}})}function handleStart(){userStore.isLogin?data.value.hasStar?api.get("/api/removestar",{params:{qid:data.value.qid}}).then((e=>{data.value.hasStar=!data.value.hasStar,ElMessage.success(e.message)})):api.get("/api/star",{params:{qid:data.value.qid}}).then((e=>{data.value.hasStar=!data.value.hasStar,ElMessage.success(e.message)})):ElMessage.error("当前未登录!!请先登录")}function putQuestion(){""!==data.value.userId&&router.push({name:"putQuestion"})}function onAgree(e,t){userStore.isLogin?data.value.answerContent[t].hasAgree?api.get("api/removelike",{params:{aid:e}}).then((e=>{--data.value.answerContent[t].agreeNum,data.value.answerContent[t].hasAgree=!data.value.answerContent[t].hasAgree,ElMessage.success(e.message)})):api.get("api/like",{params:{aid:e}}).then((e=>{++data.value.answerContent[t].agreeNum,data.value.answerContent[t].hasAgree=!data.value.answerContent[t].hasAgree,ElMessage.success(e.message)})):ElMessage.error("当前未登录!!请先登录")}function getMoreList(){api.get("api/search_answer",{params:{qid:data.value.qid,limit:10,offset:data.value.answerContent.length,userId:userStore.account?userStore.account:""}}).then((res=>{res.data.answer_list.forEach((item=>{let cache=item.content.replace(eval("/\\\\/g"),"\\").replace(/(。+|(！+)|？+)/g,"$1\n").replace("&nbsp"," ");data.value.answerContent.push({aid:item.id,username:item.username,agreeNum:item.like,hasAgree:item.is_like,sendTime:item.time.replace("T"," ").split(".")[0],detailInfo:cache,briefDetail:item.content.substring(0,100).replace(eval("/\\\\/g"),"\\").replace(/(。|！|？)/g,"$1\n").replace("&nbsp"," ")+"....",detailShow:cache.split("\n").length<=30})})),data.value.answerContent.length===data.value.ansNum&&(data.value.showMore=!1),data.value.loading=!1}))}return onMounted((()=>{window.addEventListener("scroll",handleScroll),getList()})),onBeforeUnmount((()=>{data.value.answerContent=[],window.removeEventListener("scroll",handleScroll)})),(e,t)=>{const a=__unplugin_components_3,o=_sfc_main$1,s=ElIcon,i=ElButton,l=ElImage,d=ElCard,n=__unplugin_components_10,r=ElAvatar,c=ElInput,_=ElTooltip,u=__unplugin_components_5,p=vLoading;return withDirectives((openBlock(),createElementBlock("div",null,[createBaseVNode("div",{class:"page-head",style:normalizeStyle(data.value.changeHead?"position: fixed":"")},[data.value.changeHead?createCommentVNode("",!0):(openBlock(),createBlock(a,{key:0,onOnSearch:onSearch})),data.value.changeHead?(openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,toDisplayString(data.value.title),1)])):createCommentVNode("",!0),data.value.changeHead?(openBlock(),createElementBlock("div",_hoisted_3,[createVNode(i,{type:"primary",onClick:handleWrite},{default:withCtx((()=>[createVNode(s,{style:{"margin-right":"5px"}},{default:withCtx((()=>[createVNode(o,{name:"ep:edit-pen"})])),_:1}),_hoisted_4])),_:1}),createVNode(i,{"info-filled":"",onClick:putQuestion},{default:withCtx((()=>[createVNode(s,{style:{"margin-right":"5px"}},{default:withCtx((()=>[createVNode(o,{name:"ep:info-filled"})])),_:1}),_hoisted_5])),_:1})])):createCommentVNode("",!0)],4),createBaseVNode("div",null,[createVNode(d,{shadow:"never"},{default:withCtx((()=>[createBaseVNode("div",_hoisted_6,[createBaseVNode("div",_hoisted_7,[(openBlock(!0),createElementBlock(Fragment,null,renderList(data.value.keyWords,((e,t)=>(openBlock(),createBlock(i,{key:t,round:"",onClick:t=>tagSearch(e)},{default:withCtx((()=>[createTextVNode(toDisplayString(e),1)])),_:2},1032,["onClick"])))),128))])]),createBaseVNode("div",_hoisted_8,[createBaseVNode("div",_hoisted_9,toDisplayString(data.value.title),1)]),createBaseVNode("div",_hoisted_10,[data.value.content.imagSrc?(openBlock(),createBlock(l,{key:0,style:{width:"300px",height:"200px","margin-bottom":"10px"},src:data.value.content.imagSrc,fit:"cover","preview-src-list":[data.value.content.imagSrc]},null,8,["src","preview-src-list"])):createCommentVNode("",!0),data.value.content.text?(openBlock(),createElementBlock("div",{key:1,style:normalizeStyle(data.value.contentShow?"height: auto":""),class:"content"},[createBaseVNode("span",{ref:"t",style:{"white-space":"normal",width:"100%","word-break":"break-all"}},toDisplayString(data.value.content.text),513),!data.value.contentShow&&data.value.content.text.length>100?(openBlock(),createElementBlock("div",{key:0,class:"icon-box",onClick:t[0]||(t[0]=e=>data.value.contentShow=!0)},[createVNode(s,{class:"icon"},{default:withCtx((()=>[createVNode(o,{name:"ep:caret-bottom"})])),_:1}),_hoisted_11])):createCommentVNode("",!0)],4)):createCommentVNode("",!0),createBaseVNode("div",_hoisted_12,[createBaseVNode("span",null,toDisplayString(data.value.content.username)+" · 发布于"+toDisplayString(data.value.content.time),1)])]),createBaseVNode("div",_hoisted_13,[createVNode(i,{type:"primary",onClick:handleWrite},{default:withCtx((()=>[createVNode(s,{style:{"margin-right":"5px"}},{default:withCtx((()=>[createVNode(o,{name:"ep:edit-pen"})])),_:1}),_hoisted_14])),_:1}),createVNode(i,{onClick:handleStart},{default:withCtx((()=>[data.value.hasStar?(openBlock(),createBlock(s,{key:0,style:{color:"#409EFF","font-size":"large","margin-right":"5px"}},{default:withCtx((()=>[createVNode(o,{name:"ep:circle-check"})])),_:1})):createCommentVNode("",!0),createTextVNode(" "+toDisplayString(data.value.hasStar?"已收藏":"收藏问题"),1)])),_:1}),data.value.contentShow?(openBlock(),createElementBlock("div",{key:0,class:"icon-box",onClick:t[1]||(t[1]=e=>data.value.contentShow=!data.value.contentShow)},[createVNode(s,{class:"icon"},{default:withCtx((()=>[createVNode(o,{name:"ep:caret-top"})])),_:1}),_hoisted_15])):createCommentVNode("",!0)])])),_:1})]),createBaseVNode("div",_hoisted_16,[createBaseVNode("div",_hoisted_17,[createBaseVNode("span",null,"总共有"+toDisplayString(data.value.ansNum)+"个回答",1)])]),(openBlock(!0),createElementBlock(Fragment,null,renderList(data.value.answerContent,((e,a)=>(openBlock(),createElementBlock(Fragment,{key:a},[e.detailInfo?(openBlock(),createElementBlock("div",_hoisted_18,[createBaseVNode("div",_hoisted_19,[e.detailShow?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_20,toDisplayString(e.username)+"： "+toDisplayString(e.briefDetail),1)),e.detailShow?(openBlock(),createBlock(n,{key:1,"user-name":e.username,"agree-number":e.agreeNum,"detail-info":e.detailInfo,"send-time":e.sendTime,"user-name-size":"18px",class:"content"},null,8,["user-name","agree-number","detail-info","send-time"])):(openBlock(),createElementBlock("div",{key:2,class:"tail",onClick:t=>e.detailShow=!0},[_hoisted_22,createVNode(s,null,{default:withCtx((()=>[createVNode(o,{name:"ep:arrow-down"})])),_:1})],8,_hoisted_21)),createBaseVNode("div",_hoisted_23,[createVNode(i,{type:"primary",plain:"",style:normalizeStyle(e.hasAgree?"background-color: #409eff;color: #ecf5ff":""),onClick:t=>onAgree(e.aid,a)},{default:withCtx((()=>[_hoisted_24,_hoisted_25,createBaseVNode("span",_hoisted_26,toDisplayString(0!==e.agreeNum?e.agreeNum:""),1)])),_:2},1032,["style","onClick"]),createVNode(i,{type:"primary",plain:"",style:{padding:"5px"}},{default:withCtx((()=>[_hoisted_27])),_:1}),data.value.comment?(openBlock(),createElementBlock("div",_hoisted_28,[createVNode(s,{class:"icon"},{default:withCtx((()=>[createVNode(o,{name:"ep:chat-round"})])),_:1}),createBaseVNode("span",_hoisted_29,toDisplayString(commentShow.value?"收起评论":data.value.commentNumber+"条评论"),1)])):createCommentVNode("",!0),createBaseVNode("div",_hoisted_30,[createVNode(s,{class:"icon"},{default:withCtx((()=>[createVNode(o,{name:"ep:promotion"})])),_:1}),_hoisted_31]),e.detailShow?(openBlock(),createElementBlock("div",{key:1,class:"icon-box",onClick:t=>e.detailShow=!e.detailShow},[createVNode(s,{class:"icon"},{default:withCtx((()=>[createVNode(o,{name:"ep:caret-top"})])),_:1}),_hoisted_33],8,_hoisted_32)):createCommentVNode("",!0)]),commentShow.value?(openBlock(),createElementBlock(Fragment,{key:3},[createBaseVNode("div",_hoisted_34,[createBaseVNode("div",_hoisted_35,[createVNode(r,{size:"default",fit:"cover",src:data.value.userAvatar},null,8,["src"])]),createVNode(c,{modelValue:data.value.publishComment,"onUpdate:modelValue":t[2]||(t[2]=e=>data.value.publishComment=e),clearable:"",maxlength:"100",placeholder:"发表你的看法",class:"comment-input"},null,8,["modelValue"]),""!==data.value.publishComment&&void 0!==data.value.publishComment?(openBlock(),createBlock(i,{key:0,type:"primary",size:"large",plain:"",style:{"margin-left":"10px"}},{default:withCtx((()=>[_hoisted_36])),_:1})):createCommentVNode("",!0)]),createBaseVNode("div",_hoisted_37,[createBaseVNode("div",_hoisted_38,[createBaseVNode("span",null,toDisplayString(data.value.commentNumber)+" 条评论",1),createBaseVNode("div",null,[createVNode(s,{class:"icon"},{default:withCtx((()=>[createVNode(_,{effect:"dark",content:isUnfold.value?"逆序":"正序",placement:"bottom"},{default:withCtx((()=>[createVNode(o,{name:isUnfold.value?"ep:caret-top":"ep:caret-bottom"},null,8,["name"])])),_:1},8,["content"])])),_:1})])]),createBaseVNode("div",_hoisted_39,[createBaseVNode("div",_hoisted_40,[createVNode(s,{style:{width:"inherit",height:"inherit"}},{default:withCtx((()=>[createVNode(o,{style:{width:"100%",height:"100%"},name:"user-avatar"})])),_:1})]),createBaseVNode("div",_hoisted_41,[createBaseVNode("div",_hoisted_42,[_hoisted_43,createBaseVNode("div",_hoisted_44,[createBaseVNode("div",{class:"comment-detail-icon-box",onClick:t[3]||(t[3]=e=>replyBoxShow.value[0]=!replyBoxShow.value[0])},[createVNode(s,{style:{"font-size":"large",color:"#909399"}},{default:withCtx((()=>[createVNode(o,{name:"ep:chat-line-round"})])),_:1}),_hoisted_45]),createBaseVNode("div",_hoisted_46,[(openBlock(),createElementBlock("svg",_hoisted_47,_hoisted_49)),_hoisted_50])])]),_hoisted_51,replyBoxShow.value[0]?(openBlock(),createElementBlock("div",_hoisted_52,[createVNode(c,{modelValue:data.value.replyText[0],"onUpdate:modelValue":t[4]||(t[4]=e=>data.value.replyText[0]=e),placeholder:"回复 趣味运动会",clearable:""},null,8,["modelValue"]),""!==data.value.replyText[0]&&void 0!==data.value.replyText[0]?(openBlock(),createBlock(i,{key:0,type:"primary",plain:"",style:{"margin-left":"10px"}},{default:withCtx((()=>[_hoisted_53])),_:1})):createCommentVNode("",!0)])):createCommentVNode("",!0)])])])],64)):createCommentVNode("",!0)])])):createCommentVNode("",!0)],64)))),128)),createBaseVNode("div",_hoisted_54,[data.value.showMore?(openBlock(),createBlock(u,{key:0,style:{width:"70%"},onClick:t[5]||(t[5]=e=>getMoreList())})):createCommentVNode("",!0)])])),[[p,data.value.loading]])}}});var index=_export_sfc(_sfc_main,[["__scopeId","data-v-3ba3aaae"]]);export{index as default};