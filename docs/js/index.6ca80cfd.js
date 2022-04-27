(function(){"use strict";var n={4946:function(n,e,i){var a=i(9242),o=i(3396);function t(n,e){const i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(i)}var r=i(89);const d={},u=(0,r.Z)(d,[["render",t]]);var l=u,f=i(678),s=i(7139);const c=n=>((0,o.dD)("data-v-272e20e1"),n=n(),(0,o.Cn)(),n),m={class:"home"},v={class:"df flex-col"},p={class:"min-height-100px border-box"},y={class:"border-box"},g=c((()=>(0,o._)("div",null," 同时掷三枚硬币, 记背面朝上的硬币个数, 成一爻, 成六次爻后可成卦 ",-1))),h=(0,o.Uk)(" 成卦 "),w=(0,o.Uk)(" 成爻 "),k=(0,o.Uk)(" 退爻 "),I=(0,o.Uk)("重置"),_=c((()=>(0,o._)("div",null,"本次投掷背面朝上的硬币个数:",-1))),L={class:"cursor-default",title:"同时掷三个铜钱, 记录背面朝上的铜钱个数, 为一爻"},Y=(0,o.Uk)("0"),b=(0,o.Uk)("1"),G=(0,o.Uk)("2"),x=(0,o.Uk)("3"),C=c((()=>(0,o._)("div",{class:"pt30px"},'或者你懒得掷硬币也可以使用"一键成卦"(笑)',-1))),j=(0,o.Uk)(" 一键成卦 ");function O(n,e,i,a,t,r){const d=(0,o.up)("GuaView"),u=(0,o.up)("NButton"),l=(0,o.up)("NButtonGroup"),f=(0,o.up)("NRadio"),c=(0,o.up)("NRadioGroup"),O=(0,o.up)("NSpace"),U=(0,o.up)("NCard");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(U,{title:"其实就是填一些东西再从《易经》里找一些东西"},{default:(0,o.w5)((()=>[(0,o._)("div",v,[(0,o._)("div",p,[(0,o.Wm)(d,{ref:"guaViewRef"},null,512)]),(0,o._)("div",null,[(0,o.Wm)(O,{size:"large",vertical:""},{default:(0,o.w5)((()=>[(0,o._)("p",y," 小计: "+(0,s.zw)(n.curOriginYaoLabelList.join(",")||"空"),1),g,(0,o.Wm)(l,{size:"small"},{default:(0,o.w5)((()=>[6===n.curYaoList.length?((0,o.wg)(),(0,o.j4)(u,{key:0,type:"primary",onClick:n.handleGenerate,round:""},{default:(0,o.w5)((()=>[h])),_:1},8,["onClick"])):n.curYaoList.length<6?((0,o.wg)(),(0,o.j4)(u,{key:1,type:"info",onClick:n.handleAddYao,round:""},{default:(0,o.w5)((()=>[w])),_:1},8,["onClick"])):(0,o.kq)("",!0),n.curYaoList.length>0?((0,o.wg)(),(0,o.j4)(u,{key:2,type:"error",onClick:n.handleRemoveYao},{default:(0,o.w5)((()=>[k])),_:1},8,["onClick"])):(0,o.kq)("",!0),(0,o.Wm)(u,{round:"",onClick:n.handleReset},{default:(0,o.w5)((()=>[I])),_:1},8,["onClick"])])),_:1}),n.curYaoList.length<6?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[_,(0,o._)("div",null,[(0,o._)("span",L,(0,s.zw)(n.yaoLabelList[n.curYaoList.length])+" : ",1),(0,o.Wm)(c,{value:n.curYaoValue,"onUpdate:value":e[0]||(e[0]=e=>n.curYaoValue=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{value:"0"},{default:(0,o.w5)((()=>[Y])),_:1}),(0,o.Wm)(f,{value:"1"},{default:(0,o.w5)((()=>[b])),_:1}),(0,o.Wm)(f,{value:"2"},{default:(0,o.w5)((()=>[G])),_:1}),(0,o.Wm)(f,{value:"3"},{default:(0,o.w5)((()=>[x])),_:1})])),_:1},8,["value"])])],64)):(0,o.kq)("",!0),0===n.curYaoList.length?((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[C,(0,o.Wm)(u,{type:"primary",size:"small",round:"",tertiary:"",onClick:n.handleEasyGenerate},{default:(0,o.w5)((()=>[j])),_:1},8,["onClick"])],64)):(0,o.kq)("",!0)])),_:1})])])])),_:1})])}var U;(function(n){n["ying"]="0",n["yang"]="1"})(U||(U={}));var T=i(4870),$=i(147),N=i.n($),R=i(354),W=i(9332),Z=i(711),V=i(1835),D=i(8333),H=i(2703);const z={class:"h100 df flex-col jcc"},B={key:1};function q(n,e,i,a,t,r){return(0,o.wg)(),(0,o.iD)("div",z,[n.calContent.length?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:0},(0,o.Ko)(n.calContent,((n,e)=>((0,o.wg)(),(0,o.iD)("p",{key:e},(0,s.zw)(n),1)))),128)):((0,o.wg)(),(0,o.iD)("p",B,"我是展示区"))])}var A=i(65);const{cn:F}=N();var S=(0,o.aZ)({name:"GuaView",setup(){const n=(0,A.oR)(),e=(0,T.iH)([]),i=(0,o.Fl)((()=>1===e.value.length?e.value:e.value.map(((n,e)=>0===e?`主 => ${n}`:1===e?`辅 => ${n}`:void 0)))),a=({totalTrans:i,oYao:a,oGuaId:o,tGuaId:t,isUseO:r,isUseT:d,yaoIdList:u})=>{6!==o.length||6!==t.length||1!==u.length&&2!==u.length?window.alert("error: 找旦旦提个bug吧~"):(console.log({totalTrans:i,oYao:a,oGuaId:o,tGuaId:t,isUseO:r,isUseT:d,yaoIdList:u}),e.value=u.map((e=>{const i=n.getters.getGuaById(e[0]);return`\n          卦:${i.name} =>\n          ${"0"===e[1]?"卦辞":F.encodeS(e[1])+"爻"}:\n          ${i.info[e[1]]}`})))};return{calContent:i,generateGua:a}}});const E=(0,r.Z)(S,[["render",q],["__scopeId","data-v-39c73688"]]);var M=E;const{cn:P}=N(),K=["初爻","二爻","三爻","四爻","五爻","上爻"],J=n=>n===U.ying?"六":"九",Q=()=>Math.random()>=.5,X=()=>new Array(3).fill(!1).map((()=>Q()));var nn=(0,o.aZ)({name:"HomeView",components:{GuaView:M,NCard:R.ZP,NRadioGroup:W.Z,NRadio:Z.Z,NButton:V.Z,NButtonGroup:D.Z,NSpace:H.Z},setup(){const n=(0,T.iH)("0"),e=(0,T.iH)([]),i=(0,o.Fl)((()=>e.value.map(((n,e)=>({yao:n,yaoIdx:e+1,oYy:"0"===n||"2"===n?U.ying:U.yang,tYy:"3"===n||"2"===n?U.ying:U.yang,isT:"0"===n||"3"===n}))))),a=(0,o.Fl)((()=>i.value.map((({oYy:n},e)=>{const i=J(n);let a;return a=0===e?`初${i}`:5===e?`上${i}`:`${i}${P.encodeS(e+1)}`,a})))),t=()=>{e.value.push(n.value)},r=()=>{e.value.pop()},d=()=>{e.value=[]},u=(0,T.iH)(),l=()=>{console.log(i.value);const n=i.value.filter((({isT:n})=>n)).length,e=i.value.map((({oYy:n})=>n)).join(""),a=i.value.map((({tYy:n})=>n)).join(""),o={totalTrans:n,oYao:i.value.map((({yao:n})=>n)),oGuaId:e,tGuaId:a,isUseO:n<=4,isUseT:3===n||n>=5,yaoIdList:[]};if(0===n)o.yaoIdList=[[e,"0"]];else if(1===n)o.yaoIdList=[[e,`${i.value.find((({isT:n})=>n))?.yaoIdx}`]];else if(2===n)o.yaoIdList=i.value.filter((({isT:n})=>n)).sort(((n,e)=>e.yaoIdx-n.yaoIdx)).map((({yaoIdx:n})=>[e,`${n}`]));else if(3===n)o.yaoIdList=[[e,"0"],[a,"0"]];else if(4===n)o.yaoIdList=i.value.filter((({isT:n})=>!n)).sort(((n,e)=>n.yaoIdx-e.yaoIdx)).map((({yaoIdx:n})=>[e,`${n}`]));else if(5===n)o.yaoIdList=[[a,`${i.value.find((({isT:n})=>!n))?.yaoIdx}`]];else{if(6!==n)return void window.alert("error: 找旦旦提个bug吧~");o.yaoIdList=[[a,"0"]]}console.log(n),u.value?.generateGua(o)},f=()=>{e.value=new Array(6).fill("").map((()=>`${X().filter((n=>!n)).length}`)),l()};return{yaoLabelList:K,curYaoValue:n,curYaoList:e,curOriginYaoLabelList:a,handleAddYao:t,handleRemoveYao:r,handleReset:d,guaViewRef:u,handleGenerate:l,handleEasyGenerate:f}}});const en=(0,r.Z)(nn,[["render",O],["__scopeId","data-v-272e20e1"]]);var an=en;const on=[{path:"/",name:"home",component:an}],tn=(0,f.p7)({history:(0,f.r5)(),routes:on});var rn=tn,dn=(0,A.MT)({state:{guaList:[{id:"000000",name:"000000",info:{0:"000000",1:"000000",2:"000000",3:"000000",4:"000000",5:"000000",6:"000000"}},{id:"000001",name:"000001",info:{0:"000001",1:"000001",2:"000001",3:"000001",4:"000001",5:"000001",6:"000001"}},{id:"000010",name:"000010",info:{0:"000010",1:"000010",2:"000010",3:"000010",4:"000010",5:"000010",6:"000010"}},{id:"000011",name:"000011",info:{0:"000011",1:"000011",2:"000011",3:"000011",4:"000011",5:"000011",6:"000011"}},{id:"000100",name:"000100",info:{0:"000100",1:"000100",2:"000100",3:"000100",4:"000100",5:"000100",6:"000100"}},{id:"000101",name:"000101",info:{0:"000101",1:"000101",2:"000101",3:"000101",4:"000101",5:"000101",6:"000101"}},{id:"000110",name:"000110",info:{0:"000110",1:"000110",2:"000110",3:"000110",4:"000110",5:"000110",6:"000110"}},{id:"000111",name:"000111",info:{0:"000111",1:"000111",2:"000111",3:"000111",4:"000111",5:"000111",6:"000111"}},{id:"001000",name:"001000",info:{0:"001000",1:"001000",2:"001000",3:"001000",4:"001000",5:"001000",6:"001000"}},{id:"001001",name:"001001",info:{0:"001001",1:"001001",2:"001001",3:"001001",4:"001001",5:"001001",6:"001001"}},{id:"001010",name:"001010",info:{0:"001010",1:"001010",2:"001010",3:"001010",4:"001010",5:"001010",6:"001010"}},{id:"001011",name:"001011",info:{0:"001011",1:"001011",2:"001011",3:"001011",4:"001011",5:"001011",6:"001011"}},{id:"001100",name:"001100",info:{0:"001100",1:"001100",2:"001100",3:"001100",4:"001100",5:"001100",6:"001100"}},{id:"001101",name:"001101",info:{0:"001101",1:"001101",2:"001101",3:"001101",4:"001101",5:"001101",6:"001101"}},{id:"001110",name:"001110",info:{0:"001110",1:"001110",2:"001110",3:"001110",4:"001110",5:"001110",6:"001110"}},{id:"001111",name:"001111",info:{0:"001111",1:"001111",2:"001111",3:"001111",4:"001111",5:"001111",6:"001111"}},{id:"010000",name:"010000",info:{0:"010000",1:"010000",2:"010000",3:"010000",4:"010000",5:"010000",6:"010000"}},{id:"010001",name:"010001",info:{0:"010001",1:"010001",2:"010001",3:"010001",4:"010001",5:"010001",6:"010001"}},{id:"010010",name:"010010",info:{0:"010010",1:"010010",2:"010010",3:"010010",4:"010010",5:"010010",6:"010010"}},{id:"010011",name:"010011",info:{0:"010011",1:"010011",2:"010011",3:"010011",4:"010011",5:"010011",6:"010011"}},{id:"010100",name:"010100",info:{0:"010100",1:"010100",2:"010100",3:"010100",4:"010100",5:"010100",6:"010100"}},{id:"010101",name:"010101",info:{0:"010101",1:"010101",2:"010101",3:"010101",4:"010101",5:"010101",6:"010101"}},{id:"010110",name:"010110",info:{0:"010110",1:"010110",2:"010110",3:"010110",4:"010110",5:"010110",6:"010110"}},{id:"010111",name:"010111",info:{0:"010111",1:"010111",2:"010111",3:"010111",4:"010111",5:"010111",6:"010111"}},{id:"011000",name:"011000",info:{0:"011000",1:"011000",2:"011000",3:"011000",4:"011000",5:"011000",6:"011000"}},{id:"011001",name:"011001",info:{0:"011001",1:"011001",2:"011001",3:"011001",4:"011001",5:"011001",6:"011001"}},{id:"011010",name:"011010",info:{0:"011010",1:"011010",2:"011010",3:"011010",4:"011010",5:"011010",6:"011010"}},{id:"011011",name:"011011",info:{0:"011011",1:"011011",2:"011011",3:"011011",4:"011011",5:"011011",6:"011011"}},{id:"011100",name:"011100",info:{0:"011100",1:"011100",2:"011100",3:"011100",4:"011100",5:"011100",6:"011100"}},{id:"011101",name:"011101",info:{0:"011101",1:"011101",2:"011101",3:"011101",4:"011101",5:"011101",6:"011101"}},{id:"011110",name:"011110",info:{0:"011110",1:"011110",2:"011110",3:"011110",4:"011110",5:"011110",6:"011110"}},{id:"011111",name:"011111",info:{0:"011111",1:"011111",2:"011111",3:"011111",4:"011111",5:"011111",6:"011111"}},{id:"100000",name:"100000",info:{0:"100000",1:"100000",2:"100000",3:"100000",4:"100000",5:"100000",6:"100000"}},{id:"100001",name:"100001",info:{0:"100001",1:"100001",2:"100001",3:"100001",4:"100001",5:"100001",6:"100001"}},{id:"100010",name:"100010",info:{0:"100010",1:"100010",2:"100010",3:"100010",4:"100010",5:"100010",6:"100010"}},{id:"100011",name:"100011",info:{0:"100011",1:"100011",2:"100011",3:"100011",4:"100011",5:"100011",6:"100011"}},{id:"100100",name:"100100",info:{0:"100100",1:"100100",2:"100100",3:"100100",4:"100100",5:"100100",6:"100100"}},{id:"100101",name:"100101",info:{0:"100101",1:"100101",2:"100101",3:"100101",4:"100101",5:"100101",6:"100101"}},{id:"100110",name:"100110",info:{0:"100110",1:"100110",2:"100110",3:"100110",4:"100110",5:"100110",6:"100110"}},{id:"100111",name:"100111",info:{0:"100111",1:"100111",2:"100111",3:"100111",4:"100111",5:"100111",6:"100111"}},{id:"101000",name:"101000",info:{0:"101000",1:"101000",2:"101000",3:"101000",4:"101000",5:"101000",6:"101000"}},{id:"101001",name:"101001",info:{0:"101001",1:"101001",2:"101001",3:"101001",4:"101001",5:"101001",6:"101001"}},{id:"101010",name:"101010",info:{0:"101010",1:"101010",2:"101010",3:"101010",4:"101010",5:"101010",6:"101010"}},{id:"101011",name:"101011",info:{0:"101011",1:"101011",2:"101011",3:"101011",4:"101011",5:"101011",6:"101011"}},{id:"101100",name:"101100",info:{0:"101100",1:"101100",2:"101100",3:"101100",4:"101100",5:"101100",6:"101100"}},{id:"101101",name:"101101",info:{0:"101101",1:"101101",2:"101101",3:"101101",4:"101101",5:"101101",6:"101101"}},{id:"101110",name:"101110",info:{0:"101110",1:"101110",2:"101110",3:"101110",4:"101110",5:"101110",6:"101110"}},{id:"101111",name:"101111",info:{0:"101111",1:"101111",2:"101111",3:"101111",4:"101111",5:"101111",6:"101111"}},{id:"110000",name:"110000",info:{0:"110000",1:"110000",2:"110000",3:"110000",4:"110000",5:"110000",6:"110000"}},{id:"110001",name:"110001",info:{0:"110001",1:"110001",2:"110001",3:"110001",4:"110001",5:"110001",6:"110001"}},{id:"110010",name:"110010",info:{0:"110010",1:"110010",2:"110010",3:"110010",4:"110010",5:"110010",6:"110010"}},{id:"110011",name:"110011",info:{0:"110011",1:"110011",2:"110011",3:"110011",4:"110011",5:"110011",6:"110011"}},{id:"110100",name:"110100",info:{0:"110100",1:"110100",2:"110100",3:"110100",4:"110100",5:"110100",6:"110100"}},{id:"110101",name:"110101",info:{0:"110101",1:"110101",2:"110101",3:"110101",4:"110101",5:"110101",6:"110101"}},{id:"110110",name:"110110",info:{0:"110110",1:"110110",2:"110110",3:"110110",4:"110110",5:"110110",6:"110110"}},{id:"110111",name:"110111",info:{0:"110111",1:"110111",2:"110111",3:"110111",4:"110111",5:"110111",6:"110111"}},{id:"111000",name:"111000",info:{0:"111000",1:"111000",2:"111000",3:"111000",4:"111000",5:"111000",6:"111000"}},{id:"111001",name:"111001",info:{0:"111001",1:"111001",2:"111001",3:"111001",4:"111001",5:"111001",6:"111001"}},{id:"111010",name:"111010",info:{0:"111010",1:"111010",2:"111010",3:"111010",4:"111010",5:"111010",6:"111010"}},{id:"111011",name:"111011",info:{0:"111011",1:"111011",2:"111011",3:"111011",4:"111011",5:"111011",6:"111011"}},{id:"111100",name:"111100",info:{0:"111100",1:"111100",2:"111100",3:"111100",4:"111100",5:"111100",6:"111100"}},{id:"111101",name:"111101",info:{0:"111101",1:"111101",2:"111101",3:"111101",4:"111101",5:"111101",6:"111101"}},{id:"111110",name:"111110",info:{0:"111110",1:"111110",2:"111110",3:"111110",4:"111110",5:"111110",6:"111110"}},{id:"111111",name:"111111",info:{0:"111111",1:"111111",2:"111111",3:"111111",4:"111111",5:"111111",6:"111111"}}]},getters:{getGuaById:({guaList:n})=>e=>n.find((({id:n})=>n===e))},mutations:{},actions:{},modules:{}});(0,a.ri)(l).use(dn).use(rn).mount("#app")}},e={};function i(a){var o=e[a];if(void 0!==o)return o.exports;var t=e[a]={exports:{}};return n[a](t,t.exports,i),t.exports}i.m=n,function(){var n=[];i.O=function(e,a,o,t){if(!a){var r=1/0;for(f=0;f<n.length;f++){a=n[f][0],o=n[f][1],t=n[f][2];for(var d=!0,u=0;u<a.length;u++)(!1&t||r>=t)&&Object.keys(i.O).every((function(n){return i.O[n](a[u])}))?a.splice(u--,1):(d=!1,t<r&&(r=t));if(d){n.splice(f--,1);var l=o();void 0!==l&&(e=l)}}return e}t=t||0;for(var f=n.length;f>0&&n[f-1][2]>t;f--)n[f]=n[f-1];n[f]=[a,o,t]}}(),function(){i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,{a:e}),e}}(),function(){i.d=function(n,e){for(var a in e)i.o(e,a)&&!i.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={826:0};i.O.j=function(e){return 0===n[e]};var e=function(e,a){var o,t,r=a[0],d=a[1],u=a[2],l=0;if(r.some((function(e){return 0!==n[e]}))){for(o in d)i.o(d,o)&&(i.m[o]=d[o]);if(u)var f=u(i)}for(e&&e(a);l<r.length;l++)t=r[l],i.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return i.O(f)},a=self["webpackChunkproject"]=self["webpackChunkproject"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(4946)}));a=i.O(a)})();
//# sourceMappingURL=index.6ca80cfd.js.map