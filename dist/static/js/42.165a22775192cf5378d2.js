webpackJsonp([42],{XSqh:function(i,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"sc_search",data:function(){return{value:"",mnListnum:0,sort:"zonghe",moneyId:"",highcode:"",lowcode:"",popupVisible:!1,moneyList:["0-100","100-300","300-500","500-1000","1000-2000","2500以上"],goodList:[{img:s("Jb7Q"),title:"龙熙科技",jifen:"99",id:"010",person:"999"},{img:s("Jb7Q"),title:"龙熙科技",jifen:"99",id:"011",person:"999"},{img:s("Jb7Q"),title:"龙熙科技",jifen:"99",id:"012",person:"999"},{img:s("Jb7Q"),title:"龙熙科技",id:"013",jifen:"99",person:"999"},{img:s("Jb7Q"),title:"龙熙科技",jifen:"99",id:"014",person:"999"},{img:s("Jb7Q"),title:"龙熙科技",jifen:"99",id:"015",person:"999"}]}},methods:{onSearch:function(){},onCancel:function(){},zonghe:function(){this.sort="zonghe"},changedt:function(){"xiaoliang"==this.sort?this.sort="xiaoliangs":this.sort="xiaoliang"},changemn:function(){"jifen"==this.sort?this.sort="jifens":this.sort="jifen"},chioseThis:function(i){this.mnListnum=i}}},a={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"scSearch"},[s("div",{staticClass:"search"},[s("form",{attrs:{action:"/"}},[s("van-search",{attrs:{placeholder:"搜索","show-action":""},on:{search:i.onSearch,cancel:i.onCancel},model:{value:i.value,callback:function(t){i.value=t},expression:"value"}})],1)]),i._v(" "),s("div",{staticClass:"searchContent"},[s("div",{staticClass:"searchCon"},[s("ul",{staticClass:"tab_list"},[s("li",{staticClass:"lantype",class:"zonghe"==i.sort?"active":"",on:{click:function(t){i.zonghe()}}},[s("i",[i._v("综合")])]),i._v(" "),s("li",{on:{click:function(t){i.changedt()}}},[s("i",{class:"xiaoliang"==i.sort||"xiaoliangs"==i.sort?"active":""},[i._v("销量")]),i._v(" "),s("div",[s("span",{staticClass:"iconfont icon-shangsanjiao",class:"xiaoliangs"==i.sort?"active":""}),i._v(" "),s("span",{staticClass:"iconfont icon-xiasanjiao",class:"xiaoliang"==i.sort?"active":""})])]),i._v(" "),s("li",{on:{click:function(t){i.changemn()}}},[s("i",{class:"jifen"==i.sort||"jifens"==i.sort?"active":""},[i._v("积分")]),i._v(" "),s("div",[s("span",{staticClass:"iconfont icon-shangsanjiao",class:"jifens"==i.sort?"active":""}),i._v(" "),s("span",{staticClass:"iconfont icon-xiasanjiao",class:"jifen"==i.sort?"active":""})])]),i._v(" "),s("li",{on:{click:function(t){i.popupVisible=!0}}},[s("i",[i._v("筛选")])])]),i._v(" "),s("div",{staticClass:"lanList"},[s("ul",i._l(i.goodList,function(t,n){return s("router-link",{key:n,attrs:{to:{name:"spXiangqin",params:{id:t.id}},tag:"li"}},[s("img",{attrs:{src:t.img,alt:""}}),i._v(" "),s("h3",[i._v("\n              "+i._s(t.title)+"\n            ")]),i._v(" "),s("div",{staticClass:"sc_jflist"},[s("div",{staticClass:"jfnum"},[s("span",[i._v(i._s(t.jifen))]),i._v("积分")]),i._v(" "),s("div",{staticClass:"rsnum"},[s("span",[i._v(i._s(t.person))]),i._v("人已兑换")])])])}))])])]),i._v(" "),s("mt-popup",{attrs:{position:"right"},model:{value:i.popupVisible,callback:function(t){i.popupVisible=t},expression:"popupVisible"}},[s("div",{staticClass:"po_warp"},[s("div",{staticClass:"bottom_type"},[s("van-button",{attrs:{type:"default"},on:{click:function(t){i.highcode=i.lowcode=""}}},[i._v("重置")]),i._v(" "),s("van-button",{attrs:{type:"default"},on:{click:function(t){i.popupVisible=!1}}},[i._v("确认")])],1),i._v(" "),s("div",{staticClass:"info"},[i._v("积分区间")]),i._v(" "),s("div",{staticClass:"money_area"},[s("input",{directives:[{name:"model",rawName:"v-model",value:i.highcode,expression:"highcode"}],attrs:{type:"number",placeholder:"最高积分"},domProps:{value:i.highcode},on:{input:function(t){t.target.composing||(i.highcode=t.target.value)}}}),i._v(" "),s("span"),i._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:i.lowcode,expression:"lowcode"}],attrs:{type:"number",placeholder:"最低积分"},domProps:{value:i.lowcode},on:{input:function(t){t.target.composing||(i.lowcode=t.target.value)}}})]),i._v(" "),s("ul",{staticClass:"jifenlist"},i._l(i.moneyList,function(t,n){return s("li",{key:n,class:n==i.mnListnum?"chiose":"",on:{click:function(t){i.chioseThis(n)}}},[i._v("\n          "+i._s(t)+"\n        ")])}))])]),i._v(" "),s("a",{staticClass:"kefu iconfont icon-kefu",attrs:{href:""}})],1)},staticRenderFns:[]};var e=s("C7Lr")(n,a,!1,function(i){s("ragF")},null,null);t.default=e.exports},ragF:function(i,t){}});
//# sourceMappingURL=42.165a22775192cf5378d2.js.map