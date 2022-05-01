(function(){"use strict";var n={6505:function(n,e,i){var a=i(9242),o=i(3396);function t(n,e){const i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(i)}var r=i(89);const d={},l=(0,r.Z)(d,[["render",t]]);var u=l,s=i(678),f=i(7139);const c=n=>((0,o.dD)("data-v-12c942de"),n=n(),(0,o.Cn)(),n),m={class:"home"},g={class:"df flex-col"},p={class:"min-height-100px"},v=c((()=>(0,o._)("div",{class:"pt30px"},[(0,o.Uk)(" 同时掷三枚硬币，"),(0,o._)("br"),(0,o.Uk)(" 记"),(0,o._)("mark",null,"背面朝上"),(0,o.Uk)("的硬币个数，"),(0,o._)("br"),(0,o.Uk)(" 共掷六次，"),(0,o._)("br"),(0,o.Uk)(" 填入下表。"),(0,o._)("br")],-1))),h=(0,o.Uk)(" 成卦 "),w=(0,o.Uk)(" 重置 "),y=c((()=>(0,o._)("div",null,[(0,o.Uk)("请填写每掷"),(0,o._)("mark",null,"背面朝上"),(0,o.Uk)("的硬币个数:")],-1))),k={class:"cursor-default",title:"同时掷三个铜钱, 记录背面朝上的铜钱个数, 为一爻"},x=(0,o.Uk)("0"),b=(0,o.Uk)("1"),_=(0,o.Uk)("2"),I=(0,o.Uk)("3"),Y={style:{"margin-left":"10px"}},L=c((()=>(0,o._)("br",null,null,-1))),G=c((()=>(0,o._)("div",{class:"pt30px"},'或者你懒得掷硬币也可以使用"随机成卦"(笑)',-1))),U=(0,o.Uk)(" 随机成卦 ");function C(n,e,i,a,t,r){const d=(0,o.up)("GuaView"),l=(0,o.up)("NButton"),u=(0,o.up)("NButtonGroup"),s=(0,o.up)("NRadio"),c=(0,o.up)("NRadioGroup"),C=(0,o.up)("NSpace"),O=(0,o.up)("NCard");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(O,{title:"其实我觉得不用铜钱，用硬币也行"},{default:(0,o.w5)((()=>[(0,o._)("div",g,[(0,o._)("div",p,[(0,o.Wm)(d,{ref:"guaViewRef"},null,512)]),(0,o._)("div",null,[(0,o.Wm)(C,{size:"large",vertical:""},{default:(0,o.w5)((()=>[v,(0,o.Wm)(u,{size:"small"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{secondary:"",round:"",type:"primary",onClick:n.handleGenerate},{default:(0,o.w5)((()=>[h])),_:1},8,["onClick"]),(0,o.Wm)(l,{secondary:"",round:"",onClick:n.handleReset},{default:(0,o.w5)((()=>[w])),_:1},8,["onClick"])])),_:1}),y,(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.curYaoList,((e,i)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:i},[(0,o._)("span",k," [第"+(0,f.zw)(n.nzhcn.encodeS(i+1))+"掷] "+(0,f.zw)(n.yaoLabelList[i])+" : ",1),(0,o.Wm)(c,{value:n.curYaoList[i],"onUpdate:value":e=>n.curYaoList[i]=e},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{value:"0"},{default:(0,o.w5)((()=>[x])),_:1}),(0,o.Wm)(s,{value:"1"},{default:(0,o.w5)((()=>[b])),_:1}),(0,o.Wm)(s,{value:"2"},{default:(0,o.w5)((()=>[_])),_:1}),(0,o.Wm)(s,{value:"3"},{default:(0,o.w5)((()=>[I])),_:1})])),_:2},1032,["value","onUpdate:value"]),(0,o._)("span",Y," [ "+(0,f.zw)(n.curOriginYaoLabelList[i])+" ] ",1),L],64)))),128))]),G,(0,o.Wm)(l,{type:"primary",size:"small",round:"",tertiary:"",onClick:n.handleEasyGenerate},{default:(0,o.w5)((()=>[U])),_:1},8,["onClick"])])),_:1})])])])),_:1})])}var O;(function(n){n["ying"]="0",n["yang"]="1"})(O||(O={}));var $=i(4870),R=i(147),T=i.n(R),N=i(354),j=i(9332),B=i(711),W=i(1835),Z=i(8333),z=i(2703);const H={ref:"refContainer",class:"h200px pr"},V={ref:"refRoughView"};function D(n,e,i,a,t,r){return(0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("canvas",V,null,512),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.contentBox,(({layout:n,children:e},i)=>((0,o.wg)(),(0,o.iD)("div",{class:"pa df aic tal plr-4px lh-16px border-box",key:i,style:(0,f.j5)({top:n.top+"px",left:n.left+"px",width:n.width+"px",height:n.height+"px"})},(0,f.zw)(e),5)))),128))],512)}var E=i(65),A=i(2410),S=i.n(A);const F={1:[125,115,105,95,85,75],2:[[80,70,60,50,40,30],[165,155,145,135,125,115]]},M=5,P=n=>e=>{const{x:i,width:a,spacing:o,rc:t}=n,r=(a-o)/2;t.rectangle(i,e,r,M,{fill:"dimgray",stroke:"dimgray"}),t.rectangle(i+r+o,e,r,M,{fill:"dimgray",stroke:"dimgray"})},K=n=>e=>{const{x:i,width:a,rc:o}=n;o.rectangle(i,e,a,M,{stroke:"orangered",fill:"orangered"})},q=n=>{const{guaId:e,positionY:i,drawYing:a,drawYang:o}=n;e.split("").forEach(((n,e)=>{if("0"===n)a(i[e]);else{if("1"!==n)throw"drawGua";o(i[e])}}))},J=n=>{const{rc:e,mainYao:i,positionY:a,x:o,width:t}=n,r=(a[0]+a[a.length-1])/2,d=a[0]-a[a.length-1]+5;i?(e.ellipse(o+t/2,a[i-1]+M/2,t+10,M+10,{stroke:"darkseagreen"}),e.line(o+t+10,a[i-1]+M/2,3*t-10,r,{stroke:"darkseagreen"})):e.line(o+t+10,r,3*t-10,r,{stroke:"darkseagreen"});const l={left:3*t,top:a[a.length-1]-10,width:2.8*t,height:d+20};return e.rectangle(l.left,l.top,l.width,l.height,{stroke:"darkseagreen"}),l},Q=n=>{const{width:e,height:i}=n.getBoundingClientRect(),a=n.getContext("2d");a?.clearRect(0,0,e,i)};var X=(0,o.aZ)({name:"GuaView",setup(){const n=(0,$.iH)(),e=(0,$.iH)();(0,o.bv)((()=>{const i=n.value?.getBoundingClientRect();if(!i)return;const{width:a,height:o}=i;e.value?.setAttribute("width",`${a}`),e.value?.setAttribute("height",`${o}`)}));const i=(0,E.oR)(),a=(0,$.iH)([]),t=()=>{a.value=[],e.value&&Q(e.value)},r=({totalTrans:o,oYao:r,oGuaId:d,tGuaId:l,isUseO:u,isUseT:s,yaoIdList:f})=>{if(t(),6!==d.length||6!==l.length||1!==f.length&&2!==f.length)return void window.alert("error: 找旦旦提个bug吧~");console.log({totalTrans:o,oYao:r,oGuaId:d,tGuaId:l,isUseO:u,isUseT:s,yaoIdList:f});const c=n.value?.getBoundingClientRect();if(!c)return void window.alert("error: 找旦旦提个bug吧~");if(!e.value)return void window.alert("error: 找旦旦提个bug吧~");const m=S().canvas(e.value),{width:g}=c,p=g/6,v=P({x:10,width:p,spacing:p/5,rc:m}),h=K({x:10,width:p,rc:m});1===f.length?f.forEach((n=>{const e=i.getters.getGuaById(n[0]);q({guaId:e.id,positionY:F["1"],drawYing:v,drawYang:h});const o=Number(n[1]),t=J({rc:m,mainYao:o,positionY:F["1"],x:10,width:p});a.value.push({layout:t,children:`${e.name} => ${e.info[n[1]]}`})})):2===f.length?f.forEach(((n,e)=>{const o=i.getters.getGuaById(n[0]);q({guaId:o.id,positionY:F["2"][e],drawYing:v,drawYang:h});const t=Number(n[1]),r=J({rc:m,mainYao:t,positionY:F["2"][e],x:10,width:p});a.value.push({layout:r,children:`${e?"辅":"主"}: ${o.name} => ${o.info[n[1]]}`})})):window.alert("error: 找旦旦提个bug吧~")};return{refContainer:n,refRoughView:e,contentBox:a,generateGua:r,clearContent:t}}});const nn=(0,r.Z)(X,[["render",D],["__scopeId","data-v-68c8bdc6"]]);var en=nn;const{cn:an}=T(),on=["初爻","二爻","三爻","四爻","五爻","上爻"],tn=n=>n===O.ying?"六":"九",rn=()=>Math.random()>=.5,dn=()=>new Array(3).fill(!1).map((()=>rn()));var ln=(0,o.aZ)({name:"HomeView",components:{GuaView:en,NCard:N.ZP,NRadioGroup:j.Z,NRadio:B.Z,NButton:W.Z,NButtonGroup:Z.Z,NSpace:z.Z},setup(){const n=(0,$.iH)(),e=(0,$.iH)(["0","0","0","0","0","0"]),i=(0,o.Fl)((()=>e.value.map(((n,e)=>({yao:n,yaoIdx:e+1,oYy:"0"===n||"2"===n?O.ying:O.yang,tYy:"3"===n||"2"===n?O.ying:O.yang,isT:"0"===n||"3"===n}))))),a=(0,o.Fl)((()=>i.value.map((({oYy:n},e)=>{const i=tn(n);let a;return a=0===e?`初${i}`:5===e?`上${i}`:`${i}${an.encodeS(e+1)}`,a})))),t=()=>{e.value=["0","0","0","0","0","0"],n.value?.clearContent()},r=()=>{console.log(i.value);const e=i.value.filter((({isT:n})=>n)).length,a=i.value.map((({oYy:n})=>n)).join(""),o=i.value.map((({tYy:n})=>n)).join(""),t={totalTrans:e,oYao:i.value.map((({yao:n})=>n)),oGuaId:a,tGuaId:o,isUseO:e<=4,isUseT:3===e||e>=5,yaoIdList:[]};if(0===e)t.yaoIdList=[[a,"0"]];else if(1===e)t.yaoIdList=[[a,`${i.value.find((({isT:n})=>n))?.yaoIdx}`]];else if(2===e)t.yaoIdList=i.value.filter((({isT:n})=>n)).sort(((n,e)=>e.yaoIdx-n.yaoIdx)).map((({yaoIdx:n})=>[a,`${n}`]));else if(3===e)t.yaoIdList=[[a,"0"],[o,"0"]];else if(4===e)t.yaoIdList=i.value.filter((({isT:n})=>!n)).sort(((n,e)=>n.yaoIdx-e.yaoIdx)).map((({yaoIdx:n})=>[a,`${n}`]));else if(5===e)t.yaoIdList=[[o,`${i.value.find((({isT:n})=>!n))?.yaoIdx}`]];else{if(6!==e)return void window.alert("error: 找旦旦提个bug吧~");t.yaoIdList=[[o,"0"]]}console.log(e),n.value?.generateGua(t)},d=()=>{e.value=new Array(6).fill("").map((()=>`${dn().filter((n=>!n)).length}`)),r()};return{yaoLabelList:on,curYaoList:e,curOriginYaoLabelList:a,handleReset:t,guaViewRef:n,handleGenerate:r,handleEasyGenerate:d,nzhcn:an}}});const un=(0,r.Z)(ln,[["render",C],["__scopeId","data-v-12c942de"]]);var sn=un;const fn=[{path:"/",name:"home",component:sn}],cn=(0,s.p7)({history:(0,s.r5)(),routes:fn});var mn=cn,gn=(0,E.MT)({state:{guaList:[{id:"000000",name:"坤卦",info:{0:"元亨，利牝马之贞。君子有攸往，先迷后得主，利；西南得朋，东北丧朋，安贞吉。",1:"履霜，坚冰至。",2:"直方大，不习无不利。",3:"含章可贞，或从王事，无成有终。",4:"括囊，无咎无誉。",5:"黄裳，元吉。",6:"龙战于野，其血玄黄。"}},{id:"000001",name:"剥卦",info:{0:"不利有攸往。",1:"剥床以足，蔑；贞凶。",2:"剥床以辨，蔑；贞凶。",3:"剥之，无咎。",4:"剥床以肤，凶。",5:"贯鱼以宫人宠，无不利。",6:"硕果不食，君子得舆，小人剥庐。"}},{id:"000010",name:"比卦",info:{0:"吉。原筮，元永贞，无咎。不宁方来。后夫凶。",1:"有孚比之，无咎。有孚盈缶，终来有它，吉。",2:"比之自内，贞吉。",3:"比之匪人。",4:"外比之，贞吉。",5:"显比，王用三驱，失前禽，邑人不诫，吉。",6:"比之无首，凶。"}},{id:"000011",name:"观卦",info:{0:"盥而不荐，有孚顒若。",1:"童观，小人无咎，君子吝。",2:"闚观，利女贞。",3:"观我生，进退。",4:"观国之光，利用宾于王。",5:"观我生，君子无咎。",6:"观其生，君子无咎。"}},{id:"000100",name:"豫卦",info:{0:"利建侯行师。",1:"鸣豫，凶。",2:"介于石，不终日，贞吉。",3:"盱豫悔，迟有悔。",4:"由豫，大有得；勿疑，朋盍簪。",5:"贞疾，恒不死。",6:"冥豫成，有渝无咎。"}},{id:"000101",name:"晋卦",info:{0:"康侯用锡马蕃庶，昼日三接。",1:"晋如摧如，贞吉；罔孚，裕无咎。",2:"晋如愁如，贞吉；受兹介福，于其王母。",3:"众允，悔亡。",4:"晋如鼫鼠，贞厉。",5:"悔亡，失得勿恤。往，吉。无不利。",6:"晋其角，维用伐邑，厉吉，无咎，贞吝。"}},{id:"000110",name:"萃卦",info:{0:"亨，王假有庙，利见大人，亨，利贞；用大牲吉，利有攸往。",1:"有孚不终，乃乱乃萃；若号，一握为笑；勿恤，往无咎。",2:"引吉，无咎；孚乃利用禴。",3:"萃如嗟如，无攸利；往无咎，小吝。",4:"大吉，无咎。",5:"萃有位，无咎；匪孚，元永贞，悔亡。",6:"赍咨涕洟，无咎。"}},{id:"000111",name:"否卦",info:{0:"否之匪人，不利君子贞，大往小来。",1:"拔茅茹，以其汇，贞吉，亨。",2:"包承，小人吉；大人否，亨。",3:"包羞。",4:"有命无咎，畴离祉。",5:"休否，大人吉；其亡其亡，系于苞桑。",6:"倾否；先否后喜。"}},{id:"001000",name:"谦卦",info:{0:"亨，君子有终。",1:"谦谦君子，用涉大川，吉。",2:"鸣谦，贞吉。",3:"劳谦，君子有终，吉。",4:"无不利，撝谦。",5:"不富以其邻，利用侵伐，无不利。",6:"鸣谦，利用行师征邑国。"}},{id:"001001",name:"艮卦",info:{0:"艮其背，不获其身；行其庭，不见其人，无咎。",1:"艮其趾，无咎，利永贞。",2:"艮其腓，不拯其随，其心不快。",3:"艮其限，列其夤，厉熏心。",4:"艮其身，无咎。",5:"艮其辅，言有序，悔亡。",6:"敦艮，吉。"}},{id:"001010",name:"蹇卦",info:{0:"蹇，利西南，不利东北。利见大人，贞吉。",1:"往蹇，来誉。",2:"王臣蹇蹇，匪躬之故。",3:"往蹇，来反。",4:"往蹇，来连。",5:"大蹇，朋来。",6:"往蹇，来硕；吉；利见大人。"}},{id:"001011",name:"渐卦",info:{0:"女归吉，利贞。",1:"鸿渐于干，小子厉，有言，无咎。",2:"鸿渐于磐，饮食衎衎，吉。",3:"鸿渐于陆，夫征不复，妇孕不育，凶；利御寇。",4:"鸿渐于木，或得其桷，无咎。",5:"鸿渐于陵。妇三岁不孕；终莫之胜，吉。",6:"鸿渐于陆，其羽可用为仪，吉。"}},{id:"001100",name:"小过卦",info:{0:"亨，利贞；可小事，不可大事；飞鸟遗之音，不宜上，宜下，大吉。",1:"飞鸟以凶。",2:"过其祖，遇其妣；不及其君，遇其臣，无咎。",3:"弗过防之，从或戕之，凶。",4:"无咎，弗过遇之；往厉必戒，勿用永贞。",5:"密云不雨，自我西郊；公弋取彼在穴。",6:"弗遇过之；飞鸟离之，凶，是谓灾眚。"}},{id:"001101",name:"旅卦",info:{0:"小亨，旅贞吉。",1:"旅琐琐，斯其所取灾。",2:"旅即次，怀其资，得童仆，贞。",3:"旅焚其次，丧其童仆，贞厉。",4:"旅于处，得其资斧，我心不快。",5:"射雉，一矢亡，终以誉命。",6:"鸟焚其巢，旅人先笑后号啕；丧牛于易，凶。"}},{id:"001110",name:"咸卦",info:{0:"亨，利贞；取女吉。",1:"咸其拇。",2:"咸其腓，凶，居吉。",3:"咸其股，执其随，往吝。",4:"贞吉，悔亡；憧憧往来，朋从尔思。",5:"咸其脢，无悔。",6:"咸其辅颊舌。"}},{id:"001111",name:"遁卦",info:{0:"亨，小利贞。",1:"遯尾，厉，勿用有攸往。",2:"执之用黄牛之革，莫之胜说。",3:"系遯，有疾厉；畜臣妾，吉。",4:"好遯，君子吉，小人否。",5:"嘉遯，贞吉。",6:"肥遯，无不利。"}},{id:"010000",name:"师卦",info:{0:"贞，丈人吉，无咎。",1:"师出以律，否臧凶。",2:"在师中，吉，无咎；王三锡命。",3:"师或舆尸,凶。",4:"师左次，无咎。",5:"田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。",6:"大君有命，开国承家,小人勿用。"}},{id:"010001",name:"蒙卦",info:{0:"亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。",1:"发蒙，利用刑人，用说桎梏；以往吝。",2:"包蒙，吉。纳妇，吉；子克家。",3:"勿用取女，见金夫，不有躬，无攸利。",4:"困蒙，吝。",5:"童蒙，吉。",6:"击蒙，不利为寇，利御寇。"}},{id:"010010",name:"习坎卦",info:{0:"有孚维心，亨，行有尚。",1:"习坎，入于坎窞，凶。",2:"坎有险，求小得。",3:"来之坎，坎险且枕。入于坎窞，勿用。",4:"樽酒簋，贰用缶，纳约自牖，终无咎。",5:"坎不盈，祗既平，无咎。",6:"系用徽纆，寘于丛棘上，三岁不得，凶。"}},{id:"010011",name:"涣卦",info:{0:"亨，王假有庙，利涉大川，利贞。",1:"用拯马壮，吉。",2:"涣奔其机，悔亡。",3:"涣其躬，无悔。",4:"涣其群。元吉，涣有丘，匪夷所思。",5:"涣汗其大号，涣王居，无咎。",6:"涣其血，去逖出，无咎。"}},{id:"010100",name:"解卦",info:{0:"利西南；无所往，其来复吉；有攸往，夙吉。",1:"无咎。",2:"田获三狐，得黄矢；贞吉。",3:"负且乘，致寇至；贞吝。",4:"解而拇，朋至斯孚。",5:"君子维有解，吉，有孚于小人。",6:"公用射隼于高墉之上，获之，无不利。"}},{id:"010101",name:"未济卦",info:{0:"亨；小狐汔济，濡其尾，无攸利。",1:"濡其尾，吝。",2:"曳其轮，贞吉。",3:"未济，征凶，利涉大川。",4:"贞吉，悔亡；震用伐鬼方，三年有赏于大国。",5:"贞吉，无悔；君子之光，有孚吉。",6:"有孚于饮酒，无咎；濡其首，有孚失是。"}},{id:"010110",name:"困卦",info:{0:"亨；贞，大人吉，无咎；有言不信。",1:"臀困于株木，入于幽谷，三岁不觌",2:"困于酒食，朱绂方来，利用享祀；征凶，无咎。",3:"困于石，据于蒺藜；入于其宫，不见其妻，凶。",4:"来徐徐，困于金车，吝，有终。",5:"劓刖，困于赤绂；乃徐有说，利用祭祀。",6:"困于葛藟，于臲兀危；曰动悔有悔，征吉。"}},{id:"010111",name:"讼卦",info:{0:"有孚，窒惕，中吉，终凶。利见大人，不利涉大川。",1:"不永所事，小有言，终吉。",2:"不克讼，归而逋。其邑人三百户，无眚。",3:"食旧德，贞厉，终吉。或从王事，无成。",4:"不克讼，复既命，渝。安贞，吉。",5:"讼元吉。",6:"或锡之鞶带，终朝三褫之。"}},{id:"011000",name:"升卦",info:{0:"元亨。用见大人，勿恤。",1:"允升，大吉",2:"孚乃利用禴，无咎。",3:"升虚邑。",4:"王用亨于岐山，吉，无咎。",5:"贞吉，升阶。",6:"冥升，利于不息之贞。"}},{id:"011001",name:"蛊卦",info:{0:"元亨，利涉大川；先甲三日，后甲三日。",1:"干父之蛊，有子考，无咎，厉终吉。",2:"干母之蛊，不可贞。",3:"干父之蛊，小有悔，无大咎。",4:"裕父之蛊，往见吝。",5:"干父之蛊，用誉。",6:"不事王侯，高尚其事。"}},{id:"011010",name:"井卦",info:{0:"改邑不改井，无丧无得，往来井井；汔至亦未繘井，羸其瓶，凶。",1:"井泥不食，旧井无禽。",2:"井谷射鲋，瓮敝漏。",3:"井渫不食，为我心恻；可用汲，王明并受其福。",4:"井甃，无咎。",5:"井冽，寒泉食。",6:"井收，勿幕；有孚，元吉。"}},{id:"011011",name:"巽卦",info:{0:"小亨，利有攸往，利见大人。",1:"进退，利武人之贞。",2:"巽在床下，用史巫纷若，吉，无咎。",3:"频巽，吝。",4:"悔亡，田获三品。",5:"悔亡，田获三品。",6:"巽在床下，丧其资斧，贞凶。"}},{id:"011100",name:"恒卦",info:{0:"亨，无咎，利贞，利有攸往。",1:"浚恒，贞凶，无攸利。",2:"悔亡。",3:"不恒其德，或承之羞；贞吝。",4:"田无禽。",5:"恒其德，贞，妇人吉，夫子凶。",6:"振恒，凶。"}},{id:"011101",name:"鼎卦",info:{0:"元吉，亨。",1:"鼎颠趾，利出否，得妾以其子，无咎。",2:"鼎有实，我仇有疾，不我能即，吉。",3:"鼎耳革，其行塞，雉膏不食；方雨亏悔，终吉。",4:"鼎折足，覆公餗，其形渥，凶。",5:"鼎黄耳金铉，利贞。",6:"鼎玉铉，大吉，无不利。"}},{id:"011110",name:"大过卦",info:{0:"栋桡，利有攸往，亨。",1:"藉用白茅，无咎。",2:"枯杨生稊，老夫得其女妻，无不利。",3:"栋桡，凶。",4:"栋隆，吉；有它，吝。",5:"枯杨生华，老妇得其士夫；无咎无誉。",6:"过涉灭顶，凶，无咎。"}},{id:"011111",name:"姤卦",info:{0:"女壮，勿用取女。",1:"系于金柅，贞吉；有攸往，见凶，羸豕孚蹢躅。",2:"包有鱼，无咎；不利宾。",3:"臀无肤，其行次且；厉，无大咎。",4:"包无鱼，起凶。",5:"以杞包瓜；含章，有陨自天。",6:"姤其角；吝，无咎。"}},{id:"100000",name:"复卦",info:{0:"亨。出入无疾，朋来无咎；反复其道，七日来复。利有攸往。",1:"不远复，无祗悔，元吉。",2:"休复，吉。",3:"频复，厉无咎。",4:"中行独复。",5:"敦复，无悔。",6:"迷复，凶，有灾眚。用行师，终有大败；以其国君凶，至于十年不克征。"}},{id:"100001",name:"颐卦",info:{0:"贞吉。观颐，自求口实。",1:"舍尔灵龟，观我朵颐，凶。",2:"颠颐，拂经于丘颐，征凶。",3:"拂颐，贞凶，十年勿用，无攸利。",4:"颠颐，吉。虎视眈眈，其欲逐逐，无咎。",5:"拂经，居贞吉，不可涉大川。",6:"由颐，厉吉，利涉大川。"}},{id:"100010",name:"屯卦",info:{0:"元亨，利贞，勿用有攸往。利建侯。",1:"磐桓，利居贞，利建侯。",2:"屯如，邅如，乘马班如。匪寇，婚媾。女子贞不字，十年乃字。",3:"即鹿无虞，惟入于林中；君子几不如舍。往吝。",4:"乘马班如，求婚媾；往吉，无不利。",5:"屯其膏，小贞吉，大贞凶。",6:"乘马班如，泣血涟如。"}},{id:"100011",name:"益卦",info:{0:"利用攸往，利涉大川。",1:"利用为大作，元吉，无咎。",2:"或益之十朋之龟，弗克违，永贞吉；王用享于帝，吉。",3:"益之用凶事，无咎；有孚中行，告公用圭。",4:"中行告公从，利用为依迁国。",5:"有孚惠心，勿问元吉；有孚惠我德。",6:"莫益之，或击之；立心勿恒，凶。"}},{id:"100100",name:"震卦",info:{0:"震来虩虩，笑言哑哑；震惊百里，不丧匕鬯。",1:"震来虩虩，后笑言哑哑，吉。",2:"震来厉，亿丧贝，跻于九陵；勿逐，七日得。",3:"震苏苏，震行无眚。",4:"震遂泥。",5:"震往来厉，意无丧有事。",6:"震索索，视矍矍，征凶；震不于其躬，于其邻，无咎；婚媾有言。"}},{id:"100101",name:"噬嗑卦",info:{0:"亨。利用狱。",1:"屦校灭趾，无咎。",2:"噬肤灭鼻，无咎。",3:"噬腊肉，遇毒；小吝，无咎。",4:"噬乾胏，得金矢，利艰贞，吉。",5:"噬乾肉，得黄金；贞厉，无咎。",6:"何校灭耳，凶。"}},{id:"100110",name:"随卦",info:{0:"元，亨，利，贞，无咎。",1:"官有渝，贞吉；出门交有功。",2:"系小子，失丈夫。",3:"系丈夫，失小子；随有求得，利居贞。",4:"随有获，贞凶；有孚在道，以明何咎。",5:"孚于嘉，吉。",6:"拘系之，乃从维之，王用亨于西山。"}},{id:"100111",name:"无妄卦",info:{0:"元，亨，利，贞。 其匪正有眚，不利有攸往。",1:"无妄，往吉。",2:"不耕获，不菑畲，则利有攸往。",3:"无妄之灾，或系之牛，行人之得，邑人之灾。",4:"可贞，无咎。",5:"无妄之疾，勿药有喜。",6:"无妄，行有眚，无攸利。"}},{id:"101000",name:"明夷卦",info:{0:"利艰贞。",1:"明夷于飞，垂其翼；君子于行，三日不食；有攸往，主人有言。",2:"明夷，夷于左股，用拯马壮，吉。",3:"明夷于南狩，得其大首；不可疾，贞。",4:"入于左腹，获明夷之心，于出门庭。",5:"箕子之明夷，利贞。",6:"不明晦；初登于天，后入于地。"}},{id:"101001",name:"贲卦",info:{0:"亨。小利有攸往。",1:"贲其趾，舍车而徒。",2:"贲其须。",3:"贲如濡如，永贞吉。",4:"贲如皤如，白马翰如，匪寇婚媾。",5:"贲于丘园，束帛戋戋，吝，终吉。",6:"白贲，无咎。"}},{id:"101010",name:"既济卦",info:{0:"亨，小利贞；初吉终乱。",1:"曳其轮，濡其尾，无咎。",2:"妇丧其茀，勿逐，七日得。",3:"高宗伐鬼方，三年克之；小人勿用。",4:"繻有衣袽，终日戒。",5:"东邻杀牛，不如西邻之禴祭，实受其福。",6:"濡其首，厉。"}},{id:"101011",name:"家人卦",info:{0:"利女贞。",1:"闲有家，悔亡。",2:"无攸遂，在中馈，贞吉。",3:"家人嗃嗃，悔厉，吉；妇子嘻嘻，终吝。",4:"富家，大吉。",5:"王假有家，勿恤，吉。",6:"有孚威如，终吉。"}},{id:"101100",name:"丰卦",info:{0:"亨，王假之；勿忧，宜日中。",1:"遇其配主，虽旬无咎，往有尚。",2:"丰其蔀，日中见斗，往得疑疾；有孚发若，吉。",3:"丰其沛，日中见沬，折其右肱，无咎。",4:"丰其蔀，日中见斗，遇其夷主，吉。",5:"来章，有庆誉，吉。",6:"丰其屋，蔀其家，闚其户，阒其无人，三岁不觌，凶。"}},{id:"101101",name:"离卦",info:{0:"利贞，亨；畜牝牛吉。",1:"履错然，敬之，无咎。",2:"黄离，元吉。",3:"日昃之离，不鼓缶而歌，则大耋之嗟，凶。",4:"突如其来如，焚如，死如，弃如。",5:"出涕沱若，戚嗟若，吉。",6:"王用出征，用嘉折首，获匪其丑，无咎。"}},{id:"101110",name:"革卦",info:{0:"巳日乃孚，元亨，利贞，悔亡。",1:"巩用黄牛之革。",2:"巳日乃革之，征吉，无咎。",3:"征凶，贞厉；革言三就，有孚。",4:"悔亡，有孚改命，吉。",5:"大人虎变，未占有孚。",6:"君子豹变，小人革面；征凶，居贞吉。"}},{id:"101111",name:"同人卦",info:{0:"同人于野，亨，利涉大川，利君子贞。",1:"同人于门，无咎。",2:"同人于宗，吝。",3:"伏戎于莽，升其高陵，三岁不兴。",4:"乘其墉，弗克攻，吉。",5:"同人，先号啕，而后笑；大师克相遇。",6:"同人于郊，无悔。"}},{id:"110000",name:"临挂",info:{0:"元亨，利贞；至于八月有凶。",1:"咸临，贞吉。",2:"咸临，吉无不利。",3:"甘临，无攸利；既忧之，无咎。",4:"至临，无咎。",5:"知临，大君之宜，吉。",6:"敦临，吉，无咎。"}},{id:"110001",name:"损卦",info:{0:"有孚，元吉，无咎，可贞，利有攸往。曷之用？二簋可用享。",1:"已事遄往，无咎；酌损之。",2:"利贞，征凶；弗损，益之。",3:"三人行则损一人，一人行则得其友。",4:"损其疾，使遄，有喜，无咎。",5:"或益之十朋之龟，弗克违，元吉。",6:"弗损，益之，无咎；贞吉，利有攸往，得臣，无家。"}},{id:"110010",name:"节卦",info:{0:"亨，苦节不可，贞。",1:"不出户庭，无咎。",2:"不出门庭，凶。",3:"不节若，则嗟若，无咎。",4:"安节，亨。",5:"甘节，吉，往有尚。",6:"苦节；贞凶，悔亡。"}},{id:"110011",name:"中孚卦",info:{0:"豚鱼吉，利涉大川，利贞。",1:"虞吉，有它不燕。",2:"鹤鸣在阴，其子和之；我有好爵，吾与尔靡之。",3:"得敌，或鼓或罢，或泣或歌。",4:"月几望，马匹亡，无咎。",5:"有孚挛如，无咎。",6:"翰音登于天，贞凶。"}},{id:"110100",name:"归妹卦",info:{0:"征凶，无攸利。",1:"归妹以娣，跛能履，征吉。",2:"眇能视，利幽人之贞。",3:"归妹以须，反归以娣。",4:"归妹愆期，迟归有时。",5:"帝乙归妹，其君之袂，不如其娣之袂良；月几望，吉。",6:"女承筐，无实；士刲羊，无血；无攸利。"}},{id:"110101",name:"睽卦",info:{0:"小事吉。",1:"悔亡；丧马勿逐，自复；见恶人，无咎。",2:"遇主于巷，无咎。",3:"见舆曳，其牛掣；其人天且劓，无初有终。",4:"睽孤；遇元夫，交孚，厉无咎。",5:"悔亡，厥宗噬肤，往何咎？",6:"睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧；匪寇，婚媾；往遇雨则吉。"}},{id:"110110",name:"兑卦",info:{0:"亨，利贞。",1:"和兑，吉。",2:"孚兑，吉，悔亡。",3:"来兑，凶。",4:"商兑未宁，介疾有喜。",5:"孚于剥，有厉。",6:"引兑。"}},{id:"110111",name:"履卦",info:{0:"履虎尾，不咥人，亨。",1:"素履，往无咎。",2:"履道坦坦，幽人贞吉。",3:"眇能视，跛能履，履虎尾咥人，凶；武人为于大君。",4:"履虎尾，愬愬，终吉。",5:"夬履，贞厉。",6:"视履考祥，其旋元吉。"}},{id:"111000",name:"泰卦",info:{0:"小往大来，吉，亨。",1:"拔茅茹，以其汇，征吉。",2:"包荒，用冯河，不遐遗；朋亡，得尚于中行。",3:"无平不陂，无往不复；艰贞无咎，勿恤其孚，于食有福。",4:"翩翩，不富以其邻，不戒以孚。",5:"帝乙归妹，以祉元吉。",6:"城复于隍，勿用师；自邑告命，贞吝。"}},{id:"111001",name:"大畜卦",info:{0:"利贞，不家食吉，利涉大川。",1:"有厉，利巳。",2:"舆说輹。",3:"良马逐，利艰贞；曰闲舆卫，利有攸往。",4:"童牛之牿，元吉。",5:"豶豕之牙，吉。",6:"何天之衢，亨。"}},{id:"111010",name:"需卦",info:{0:"有孚，光亨，贞吉，利涉大川。",1:"需于郊，利用恒，无咎。",2:"需于沙，小有言，终吉。",3:"需于泥，致寇至。",4:"需于血，出自穴。",5:"需于酒食，贞吉。",6:"入于穴，有不速之客三人来，敬之终吉。"}},{id:"111011",name:"小畜卦",info:{0:"亨，密云不雨，自我西郊。",1:"复自道，何其咎？吉。",2:"牵复，吉。",3:"舆说辐，夫妻反目。",4:"有孚，血去惕出，无咎。",5:"有孚挛如，富以其邻。",6:"既雨既处，尚德载，妇贞厉。月几望，君子征凶。"}},{id:"111100",name:"大壮卦",info:{0:"利贞。",1:"壮于趾，征凶，有孚。",2:"贞吉。",3:"小人用壮，君子用罔；贞厉，羝羊触藩，羸其角。",4:"贞吉，悔亡；藩决不羸，壮于大舆之輹。",5:"丧羊于易，无悔。",6:"羝羊触藩，不能退，不能遂，无攸利；艰则吉。"}},{id:"111101",name:"大有卦",info:{0:"元亨。",1:"无交害，匪咎，艰则无咎。",2:"大车以载，有攸往，无咎。",3:"公用亨于天子，小人弗克。",4:"匪其彭，无咎。",5:"厥孚交如，威如，吉。",6:"自天祐之，吉无不利。"}},{id:"111110",name:"夬卦",info:{0:"扬于王庭，孚号，有厉告自邑，不利即戎；利有攸往。",1:"壮于前趾，往不胜为咎。",2:"惕号，莫夜有戎，勿恤。",3:"壮于頄，有凶；君子夬夬，独行遇雨，若濡有愠，无咎。",4:"臀无肤，其行次且；牵羊悔亡，闻言不信。",5:"苋陆夬夬，中行无咎。",6:"无号，终有凶。"}},{id:"111111",name:"乾卦",info:{0:"元亨利贞。",1:"潜龙勿用。",2:"见龙在田，利见大人。",3:"君子终日乾乾，夕惕若厉，无咎。",4:"或跃在渊，无咎。",5:"飞龙在天，利见大人。",6:"亢龙有悔。"}}]},getters:{getGuaById:({guaList:n})=>e=>n.find((({id:n})=>n===e))},mutations:{},actions:{},modules:{}});(0,a.ri)(u).use(gn).use(mn).mount("#app")}},e={};function i(a){var o=e[a];if(void 0!==o)return o.exports;var t=e[a]={exports:{}};return n[a](t,t.exports,i),t.exports}i.m=n,function(){var n=[];i.O=function(e,a,o,t){if(!a){var r=1/0;for(s=0;s<n.length;s++){a=n[s][0],o=n[s][1],t=n[s][2];for(var d=!0,l=0;l<a.length;l++)(!1&t||r>=t)&&Object.keys(i.O).every((function(n){return i.O[n](a[l])}))?a.splice(l--,1):(d=!1,t<r&&(r=t));if(d){n.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}t=t||0;for(var s=n.length;s>0&&n[s-1][2]>t;s--)n[s]=n[s-1];n[s]=[a,o,t]}}(),function(){i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,{a:e}),e}}(),function(){i.d=function(n,e){for(var a in e)i.o(e,a)&&!i.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={826:0};i.O.j=function(e){return 0===n[e]};var e=function(e,a){var o,t,r=a[0],d=a[1],l=a[2],u=0;if(r.some((function(e){return 0!==n[e]}))){for(o in d)i.o(d,o)&&(i.m[o]=d[o]);if(l)var s=l(i)}for(e&&e(a);u<r.length;u++)t=r[u],i.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return i.O(s)},a=self["webpackChunkproject"]=self["webpackChunkproject"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(6505)}));a=i.O(a)})();
//# sourceMappingURL=index.d2bc6b54.js.map