webpackJsonp([24],{Af3P:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("g3lQ"),a=n("pBwn"),i={name:"jf_charge",data:function(){return{query:this.$route.query,show:!1,id:0,money:1e3,list:[1e3,500,200,100,50,20,10],wxConfig:{}}},created:function(){var e=this;Object(o.a)("/index/sign-package",{url:encodeURIComponent("http://anfum.demo.sclonsee.com/jfCharge?code="+this.query.code)}).then(function(t){e.wxConfig=t.data.data.signpackage})},methods:{submitCharge:function(){var e=this,t=new FormData;t.append("accessToken",this.$cookie.get("accessToken")),t.append("code",this.query.code),t.append("price",this.money),t.append("integral",10*this.money),Object(o.b)("/integral/wchat-pay",t).then(function(t){if(Object(a.c)()){var n=e.wxConfig,i=t.data.data;wx.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["chooseWXPay"]}),wx.ready(function(e){wx.chooseWXPay({timestamp:i.info.timestamp,nonceStr:i.info.nonceStr,package:i.info.package,signType:i.info.signType,paySign:i.info.paySign,success:function(e){this.$router.go(-1)},fail:function(e){Toast("支付失败");var t=new FormData;t.append("accessToken",this.$cookie.get("accessToken")),t.append("order_id",i.order_id),Object(o.b)("/integral/pay-failure",t).then(function(e){console.log(e)})},complete:function(e){},cancel:function(e){Toast("支付取消")},trigger:function(e){}})})}else Toast("请在微信浏览器中打开！")})},choose:function(e,t){this.id=t,this.money=e,console.log(this.money)}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jf_charge"},[n("ul",{staticClass:"jf_content"},[e._l(e.list,function(t,o){return n("li",{key:o,class:o==e.id?"chiose":"",on:{click:function(n){e.choose(t,o)}}},[e._v(e._s(t)+"元")])}),e._v(" "),n("router-link",{attrs:{to:{path:"/jfChongzhi",query:{code:e.query.code}},tag:"li"}},[e._v("\n        其他金额\n    ")])],2),e._v(" "),n("div",{staticClass:"beizhu"},[e._v("注:1元=10积分")]),e._v(" "),n("van-button",{attrs:{type:"default btn_yue"},on:{click:e.submitCharge}},[e._v("充值")]),e._v(" "),n("a",{staticClass:"kefu iconfont icon-kefu",attrs:{href:""}})],1)},staticRenderFns:[]};var s=n("C7Lr")(i,c,!1,function(e){n("YJJI")},"data-v-9fc76a84",null);t.default=s.exports},YJJI:function(e,t){}});
//# sourceMappingURL=24.b68f7b9b0a1f539890fe.js.map