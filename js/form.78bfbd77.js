(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form"],{"0fb9":function(t,e,a){"use strict";var r=a("7360"),o=a.n(r);o.a},1488:function(t,e,a){"use strict";var r=a("b6bc"),o=a.n(r);o.a},"34b0":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("av-page-header",{attrs:{title:"分布表单"}},[a("div",{attrs:{slot:"breadcrumb"},slot:"breadcrumb"},[a("a-breadcrumb",[a("a-breadcrumb-item",[a("a",[t._v("首页")])]),a("a-breadcrumb-item",[a("a",[t._v("表单页")])]),a("a-breadcrumb-item",[a("a",[t._v("分布表单")])]),a("a-breadcrumb-item",[t._v("分步表单（填写转账信息）")])],1)],1),a("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n      将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。\n    ")])]),a("a-card",{attrs:{bordered:!1}},[a("a-steps",{staticClass:"steps",attrs:{current:t.item.step}},[a("a-step",{attrs:{title:"填写转账信息"}}),a("a-step",{attrs:{title:"确认转账信息"}}),a("a-step",{attrs:{title:"完成"}})],1),0==t.item.step?a("step-form1",{attrs:{value:t.item}}):t._e(),1==t.item.step?a("step-form2",{staticClass:"stepForm",attrs:{value:t.item}}):t._e(),2==t.item.step?a("step-form3",{staticClass:"stepForm",attrs:{value:t.item}}):t._e()],1)],1)},o=[],n=a("c665"),s=a("dc0a"),i=a("d328"),l=a("11d9"),c=a("9ab4"),u=a("60a3"),m=a("aa9a"),d=(a("cadf"),a("551c"),a("097d"),function(){function t(){Object(n["a"])(this,t),this.step=1,this.payAccount="",this.receiverType="alipay",this.receiverAccount="",this.receiverName="",this.amount=0,this.password="123456",this.again()}return Object(m["a"])(t,[{key:"again",value:function(){this.step=0,this.payAccount="ant-design@alipay.com",this.receiverType="alipay",this.receiverAccount="test@example.com",this.receiverName="asdf",this.amount=500}},{key:"receiverTypeStr",get:function(){return"alipay"===this.receiverType?"支付宝":"银行"}}]),t}()),f=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("a-form",{staticClass:"stepForm",attrs:{layout:"horizontal",hideRequiredMark:"",autoFormCreate:function(e){t.form=e}}},[r("a-form-item",e._b({attrs:{label:"付款账户",fieldDecoratorId:"payAccount",fieldDecoratorOptions:{initialValue:e.data.payAccount,rules:[{required:!0,message:"请选择付款账户"}]}}},"a-form-item",e.formItemLayout,!1),[r("a-select",{attrs:{placeholder:"test@example.com"}},[r("a-select-option",{attrs:{value:"ant-design@alipay.com"}},[e._v("ant-design@alipay.com")])],1)],1),r("a-form-item",e._b({attrs:{label:"收款账户",fieldDecoratorId:"receiverAccount",fieldDecoratorOptions:{initialValue:e.data.receiverAccount,rules:[{required:!0,message:"请输入收款人账户"},{type:"email",message:"账户名应为邮箱格式"}]}}},"a-form-item",e.formItemLayout,!1),[r("a-input-group",{attrs:{compact:""}},[r("a-select",{style:{width:100},attrs:{defaultValue:"alipay"}},[r("a-select-option",{attrs:{value:"alipay"}},[e._v("支付宝")]),r("a-select-option",{attrs:{value:"bank"}},[e._v("银行账户")])],1),r("a-input",{style:{width:"calc(100% - 100px)"},attrs:{value:e.data.receiverAccount,placeholder:"test@example.com"}})],1)],1),r("a-form-item",e._b({attrs:{label:"收款人姓名",fieldDecoratorId:"receiverName",fieldDecoratorOptions:{initialValue:e.data.receiverName,rules:[{required:!0,message:"请输入收款人姓名"}]}}},"a-form-item",e.formItemLayout,!1),[r("a-input",{attrs:{placeholder:"请输入收款人姓名"}})],1),r("a-form-item",e._b({attrs:{label:"转账金额",fieldDecoratorId:"amount",fieldDecoratorOptions:{initialValue:e.data.amount,rules:[{required:!0,message:"请输入转账金额"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"请输入合法金额数字"}]}}},"a-form-item",e.formItemLayout,!1),[r("a-input",{attrs:{prefix:"￥",placeholder:"请输入金额"}})],1),r("a-form-item",{attrs:{wrapperCol:{xs:{span:24,offset:0},sm:{span:e.formItemLayout.wrapperCol.span,offset:e.formItemLayout.labelCol.span}},label:""}},[r("a-button",{attrs:{type:"primary"},on:{click:e.onValidateForm}},[e._v("\n            下一步\n          ")])],1)],1),r("a-divider",{style:{margin:"40px 0 24px"}}),e._m(0)],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"desc"},[a("h3",[t._v("说明")]),a("h4",[t._v("转账到支付宝账户")]),a("p",[t._v("\n          如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。\n        ")]),a("h4",[t._v("转账到银行卡")]),a("p",[t._v("\n          如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。\n        ")])])}],v=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(i["a"])(this,Object(l["a"])(e).call(this)),t.formItemLayout={labelCol:{span:5},wrapperCol:{span:19}},t.form=null,t.data={},t}return Object(m["a"])(e,[{key:"onValidateForm",value:function(){var t=this;this.form.validateFields(function(e,a){e||(t.value.step=1)})}},{key:"mounted",value:function(){this.data=this.value}}]),Object(s["a"])(e,t),e}(u["d"]);c["a"]([Object(u["c"])({type:Object,default:function(){}})],v.prototype,"value",void 0),v=c["a"]([Object(u["a"])({})],v);var b=v,h=b,y=a("2877"),_=Object(y["a"])(h,f,p,!1,null,null,null);_.options.__file="StepForm1.vue";var g=_.exports,k=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("a-form",{staticClass:"stepForm",attrs:{layout:"horizontal",autoFormCreate:function(e){t.form=e}}},[r("a-alert",{style:{marginBottom:24},attrs:{closable:"",showIcon:"",message:"确认转账后，资金将直接打入对方账户，无法退回。"}}),r("a-form-item",e._b({staticClass:"stepFormText",attrs:{label:"付款账户"}},"a-form-item",e.formItemLayout,!1),[e._v("\n        "+e._s(e.data.payAccount)+"\n      ")]),r("a-form-item",e._b({staticClass:"stepFormText",attrs:{label:"收款账户"}},"a-form-item",e.formItemLayout,!1),[e._v("\n        "+e._s(e.data.receiverAccount)+"\n      ")]),r("a-form-item",e._b({staticClass:"stepFormText",attrs:{label:"收款人姓名"}},"a-form-item",e.formItemLayout,!1),[e._v("\n        "+e._s(e.data.receiverName)+"\n      ")]),r("a-form-item",e._b({staticClass:"stepFormText",attrs:{label:"转账金额"}},"a-form-item",e.formItemLayout,!1),[r("span",{staticClass:"money"},[e._v(e._s(e.data.amount))]),r("span",{staticClass:"uppercase"},[e._v("（"+e._s(e.data.amount)+"）")])]),r("a-divider",{style:{margin:"24px 0"}}),r("a-form-item",e._b({attrs:{label:"支付密码",required:!1,fieldDecoratorId:"password",fieldDecoratorOptions:{initialValue:"123456",rules:[{required:!0,message:"需要支付密码才能进行支付"}]}}},"a-form-item",e.formItemLayout,!1),[r("a-input",{style:{width:"80%"},attrs:{type:"password",autoComplete:"off"}})],1),r("a-form-item",{style:{marginBottom:8},attrs:{wrapperCol:{xs:{span:24,offset:0},sm:{span:e.formItemLayout.wrapperCol.span,offset:e.formItemLayout.labelCol.span}},label:""}},[r("a-button",{attrs:{type:"primary",loading:e.submitting},on:{click:e.onValidateForm}},[e._v("\n          提交\n        ")]),r("a-button",{style:{marginLeft:8},on:{click:e.onPrev}},[e._v("\n          上一步\n        ")])],1)],1)],1)},O=[],I=a("5118"),w=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(i["a"])(this,Object(l["a"])(e).call(this)),t.form=null,t.data={},t.formItemLayout={labelCol:{span:5},wrapperCol:{span:19}},t.submitting=!1,t}return Object(m["a"])(e,[{key:"onValidateForm",value:function(t){var e=this;t.preventDefault(),this.form.validateFields(function(t,a){t||(e.submitting=!0,Object(I["setTimeout"])(function(){e.value.step=2,e.submitting=!1},1e3))})}},{key:"onPrev",value:function(){this.value.step=0}},{key:"mounted",value:function(){this.data=this.value}}]),Object(s["a"])(e,t),e}(u["d"]);c["a"]([Object(u["c"])({type:Object,default:function(){}})],w.prototype,"value",void 0),w=c["a"]([Object(u["a"])({})],w);var j=w,C=j,x=Object(y["a"])(C,k,O,!1,null,null,null);x.options.__file="StepForm2.vue";var D=x.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("av-result",{staticClass:"result",attrs:{type:"success",title:"操作成功",description:"预计两小时内到账"}},[a("template",{slot:"extra"},[a("div",{attrs:{className:"{styles.information}"}},[a("a-row",[a("a-col",{staticClass:"label",attrs:{xs:24,sm:8}},[t._v("\n          付款账户：\n        ")]),a("a-col",{attrs:{xs:24,sm:16}},[t._v("\n          "+t._s(t.data.payAccount)+"\n        ")])],1),a("a-row",[a("a-col",{staticClass:"label",attrs:{xs:24,sm:8}},[t._v("\n          收款账户：\n        ")]),a("a-col",{attrs:{xs:24,sm:16}},[t._v("\n          "+t._s(t.data.receiverAccount)+"\n        ")])],1),a("a-row",[a("a-col",{staticClass:"label",attrs:{xs:24,sm:8}},[t._v("\n          收款人姓名：\n        ")]),a("a-col",{attrs:{xs:24,sm:16}},[t._v("\n          "+t._s(t.data.receiverName)+"\n        ")])],1),a("a-row",[a("a-col",{staticClass:"label",attrs:{xs:24,sm:8}},[t._v("\n          转账金额：\n        ")]),a("a-col",{attrs:{xs:24,sm:16}},[a("span",{staticClass:"money"},[t._v(t._s(t.data.amount))]),t._v(" 元\n        ")])],1)],1)]),a("template",{slot:"actions"},[a("a-button",{attrs:{type:"primary"},on:{click:t.onFinish}},[t._v("\n        再转一笔\n      ")]),a("a-button",[t._v("查看账单")])],1)],2)},T=[],L=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(i["a"])(this,Object(l["a"])(e).call(this)),t.data={},t}return Object(m["a"])(e,[{key:"onFinish",value:function(){this.data.step=0}},{key:"mounted",value:function(){this.data=this.value}}]),Object(s["a"])(e,t),e}(u["d"]);c["a"]([Object(u["c"])({type:Object,default:function(){}})],L.prototype,"value",void 0),L=c["a"]([Object(u["a"])({})],L);var S=L,q=S,E=Object(y["a"])(q,F,T,!1,null,null,null);E.options.__file="StepForm3.vue";var R=E.exports,A=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(i["a"])(this,Object(l["a"])(e).call(this)),t.item=new d,t}return Object(s["a"])(e,t),e}(u["d"]);A=c["a"]([Object(u["a"])({components:{StepForm1:g,StepForm2:D,StepForm3:R}})],A);var N=A,P=N,M=(a("1488"),a("8ae5"),Object(y["a"])(P,r,o,!1,null,"10c438cf",null));M.options.__file="Step.vue";e["default"]=M.exports},"456d":function(t,e,a){var r=a("4bf8"),o=a("0d58");a("5eda")("keys",function(){return function(t){return o(r(t))}})},5118:function(t,e,a){(function(t){var r="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,o=Function.prototype.apply;function n(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new n(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new n(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},a("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,a("c8ba"))},"5eda":function(t,e,a){var r=a("5ca1"),o=a("8378"),n=a("79e5");t.exports=function(t,e){var a=(o.Object||{})[t]||Object[t],s={};s[t]=e(a),r(r.S+r.F*n(function(){a(1)}),"Object",s)}},6017:function(t,e,a){(function(t,e){(function(t,a){"use strict";if(!t.setImmediate){var r,o=1,n={},s=!1,i=t.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(t);l=l&&l.setTimeout?l:t,"[object process]"==={}.toString.call(t.process)?f():p()?v():t.MessageChannel?b():i&&"onreadystatechange"in i.createElement("script")?h():y(),l.setImmediate=c,l.clearImmediate=u}function c(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),a=0;a<e.length;a++)e[a]=arguments[a+1];var s={callback:t,args:e};return n[o]=s,r(o),o++}function u(t){delete n[t]}function m(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(a,r);break}}function d(t){if(s)setTimeout(d,0,t);else{var e=n[t];if(e){s=!0;try{m(e)}finally{u(t),s=!1}}}}function f(){r=function(t){e.nextTick(function(){d(t)})}}function p(){if(t.postMessage&&!t.importScripts){var e=!0,a=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=a,e}}function v(){var e="setImmediate$"+Math.random()+"$",a=function(a){a.source===t&&"string"===typeof a.data&&0===a.data.indexOf(e)&&d(+a.data.slice(e.length))};t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),r=function(a){t.postMessage(e+a,"*")}}function b(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;d(e)},r=function(e){t.port2.postMessage(e)}}function h(){var t=i.documentElement;r=function(e){var a=i.createElement("script");a.onreadystatechange=function(){d(e),a.onreadystatechange=null,t.removeChild(a),a=null},t.appendChild(a)}}function y(){r=function(t){setTimeout(d,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,a("c8ba"),a("4362"))},"71cd":function(t,e,a){},7360:function(t,e,a){},"8a91":function(t,e,a){"use strict";var r=a("71cd"),o=a.n(r);o.a},"8ae5":function(t,e,a){"use strict";var r=a("c341"),o=a.n(r);o.a},"8eb1":function(t,e,a){},b6bc:function(t,e,a){},bad3:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("av-page-header",{attrs:{title:"基础表单"}},[r("div",{attrs:{slot:"breadcrumb"},slot:"breadcrumb"},[r("a-breadcrumb",[r("a-breadcrumb-item",[r("a",[e._v("首页")])]),r("a-breadcrumb-item",[r("a",[e._v("表单页")])]),r("a-breadcrumb-item",[e._v("基础表单")])],1)],1),r("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n        表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。\n      ")])]),r("a-card",{attrs:{bordered:!1}},[r("a-form",{staticStyle:{"margin-top":"8px"},attrs:{hideRequiredMark:"",autoFormCreate:function(e){t.form=e}},on:{submit:e.handleSubmit}},[r("a-form-item",e._b({attrs:{label:"标题",fieldDecoratorId:"title",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入标题"}]}}},"a-form-item",e.formItemLayout,!1),[r("a-input",{attrs:{placeholder:"给目标起个名字"}})],1),r("a-form-item",e._b({attrs:{label:"起止日期",fieldDecoratorId:"date",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择起止日期"}]}}},"a-form-item",e.formItemLayout,!1),[r("a-range-picker",{staticStyle:{width:"'100%'"},attrs:{placeholder:["开始日期","结束日期"]}})],1),r("a-form-item",e._b({attrs:{label:"目标描述",fieldDecoratorId:"goal",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入目标描述"}]}}},"a-form-item",e.formItemLayout,!1),[r("a-textarea",{staticStyle:{"min-height":"32px"},attrs:{placeholder:"请输入你的阶段性工作目标",rows:4}})],1),r("a-form-item",e._b({attrs:{label:"衡量标准",fieldDecoratorId:"standard",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入衡量标准"}]}}},"a-form-item",e.formItemLayout,!1),[r("a-textarea",{staticStyle:{"min-height":"32px"},attrs:{placeholder:"请输入衡量标准",rows:4}})],1),r("a-form-item",e._b({attrs:{fieldDecoratorId:"client"}},"a-form-item",e.formItemLayout,!1),[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n                  客户\n                  "),r("em",{staticClass:"ptional"},[e._v("\n                    （选填）\n                    "),r("a-tooltip",{attrs:{title:"目标的服务对象"}},[r("a-icon",{style:{marginRight:4},attrs:{type:"info-circle-o"}})],1)],1)]),r("a-input",{attrs:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}})],1),r("a-form-item",e._b({attrs:{fieldDecoratorId:"invites"}},"a-form-item",e.formItemLayout,!1),[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n                  邀评人\n                  "),r("em",{staticClass:"optional"},[e._v("（选填）")])]),r("a-input",{attrs:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}})],1),r("a-form-item",e._b({attrs:{fieldDecoratorId:"weight"}},"a-form-item",e.formItemLayout,!1),[r("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n                  权重\n                  "),r("em",{staticClass:"optional"},[e._v("（选填）")])]),r("a-input-number",{attrs:{placeholder:"请输入",min:0,max:100}}),r("span",{staticClass:"ant-form-text"},[e._v("%")])],1),r("a-form-item",e._b({attrs:{fieldDecoratorId:"public",label:"目标公开",help:"客户、邀评人默认被分享"}},"a-form-item",e.formItemLayout,!1),[r("div",[r("a-radio-group",{attrs:{defaultValue:"1"}},[r("a-radio",{attrs:{value:"1"}},[e._v("公开")]),r("a-radio",{attrs:{value:"2"}},[e._v("部分公开")]),r("a-radio",{attrs:{value:"3"}},[e._v("不公开")])],1),r("a-form-item",{style:{marginBottom:0},attrs:{fieldDecoratorId:"publicUsers"}},[r("a-select",{style:{margin:"8px 0",display:e.form&&"2"===e.form.getFieldValue("public")?"block":"none"},attrs:{mode:"multiple",placeholder:"公开给"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("同事甲")]),r("a-select-option",{attrs:{value:"2"}},[e._v("同事乙")]),r("a-select-option",{attrs:{value:"3"}},[e._v("同事丙")])],1)],1)],1)]),r("a-form-item",e._b({staticStyle:{"margin-top":"32px"}},"a-form-item",e.submitFormLayout,!1),[r("a-button",{attrs:{type:"primary",htmlType:"submit",loading:e.submitting}},[e._v("\n                提交\n              ")]),r("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("保存")])],1)],1)],1)],1)},o=[],n=a("c665"),s=a("dc0a"),i=a("aa9a"),l=a("d328"),c=a("11d9"),u=a("9ab4"),m=a("60a3"),d=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).call(this)),t.formItemLayout={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},t.submitFormLayout={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},t.form=null,t.submitting=!1,t}return Object(i["a"])(e,[{key:"handleSubmit",value:function(t){t.preventDefault(),this.form.validateFieldsAndScroll(function(t,e){})}},{key:"isPublic2",get:function(){if(null==this.form)return!1;var t=this.form.getFieldValue("public");return"2"===t}}]),Object(s["a"])(e,t),e}(m["d"]);d=u["a"]([Object(m["a"])({})],d);var f=d,p=f,v=(a("c2f0"),a("2877")),b=Object(v["a"])(p,r,o,!1,null,null,null);b.options.__file="Basic.vue";e["default"]=b.exports},c2f0:function(t,e,a){"use strict";var r=a("8eb1"),o=a.n(r);o.a},c341:function(t,e,a){},f6b0:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("av-page-header",{attrs:{title:"高级表单"}},[a("div",{attrs:{slot:"breadcrumb"},slot:"breadcrumb"},[a("a-breadcrumb",[a("a-breadcrumb-item",[a("a",[t._v("首页")])]),a("a-breadcrumb-item",[a("a",[t._v("表单页")])]),a("a-breadcrumb-item",[t._v("高级表单")])],1)],1),a("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n      高级表单常见于一次性输入和提交大批量数据的场景。\n    ")])]),a("a-form",{attrs:{layout:"vertical",hideRequiredMark:"",autoFormCreate:t.handlerFormCreate}},[a("a-card",{staticClass:"card",attrs:{title:"仓库管理",bordered:!1}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:"仓库名",fieldDecoratorId:"name",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入仓库名称"}]}}},[a("a-input",{attrs:{placeholder:"请输入仓库名称"}})],1)],1),a("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:"仓库域名",fieldDecoratorId:"url",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择"}]}}},[a("a-input",{style:{width:"100%"},attrs:{addonBefore:"http://",addonAfter:".com",placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:"仓库管理员",fieldDecoratorId:"owner",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择管理员"}]}}},[a("a-select",{attrs:{placeholder:"请选择管理员"}},[a("a-select-option",{attrs:{value:"xiao"}},[t._v("付晓晓")]),a("a-select-option",{attrs:{value:"mao"}},[t._v("周毛毛")])],1)],1)],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:"审批人",fieldDecoratorId:"approver",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择审批员"}]}}},[a("a-select",{attrs:{placeholder:"请选择审批员"}},[a("a-select-option",{attrs:{value:"xiao"}},[t._v("付晓晓")]),a("a-select-option",{attrs:{value:"mao"}},[t._v("周毛毛")])],1)],1)],1),a("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:"生效日期",fieldDecoratorId:"dateRange",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择生效日期"}]}}},[a("a-range-picker",{style:{width:"100%"},attrs:{placeholder:["开始日期","结束日期"]}})],1)],1),a("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:"仓库类型",fieldDecoratorId:"type",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择仓库类型"}]}}},[a("a-select",{attrs:{placeholder:"请选择仓库类型"}},[a("a-select-option",{attrs:{value:"private"}},[t._v("私密")]),a("a-select-option",{attrs:{value:"public"}},[t._v("公开")])],1)],1)],1)],1)],1),a("a-card",{staticClass:"card",attrs:{title:"任务管理",bordered:!1}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:"任务名",fieldDecoratorId:"name2",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入"}]}}},[a("a-input",{attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:"任务描述",fieldDecoratorId:"url2",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入"}]}}},[a("a-input",{attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:"管理员",fieldDecoratorId:"owner2",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择管理员"}]}}},[a("a-select",{attrs:{placeholder:"请选择管理员"}},[a("a-select-option",{attrs:{value:"xiao"}},[t._v("付晓晓")]),a("a-select-option",{attrs:{value:"mao"}},[t._v("周毛毛")])],1)],1)],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:"审批员",fieldDecoratorId:"approver2",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择审批员"}]}}},[a("a-select",{attrs:{placeholder:"请选择审批员"}},[a("a-select-option",{attrs:{value:"xiao"}},[t._v("付晓晓")]),a("a-select-option",{attrs:{value:"mao"}},[t._v("周毛毛")])],1)],1)],1),a("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:"提醒时间",fieldDecoratorId:"dateRange2",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入"}]}}},[a("a-time-picker",{style:{width:"100%"},attrs:{placeholder:"提醒时间",getPopupContainer:function(t){return t.parentNode}}})],1)],1),a("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:"仓库类型",fieldDecoratorId:"type2",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择仓库类型"}]}}},[a("a-select",{attrs:{placeholder:"请选择仓库类型"}},[a("a-select-option",{attrs:{value:"private"}},[t._v("私密")]),a("a-select-option",{attrs:{value:"public"}},[t._v("公开")])],1)],1)],1)],1)],1),a("a-card",{attrs:{title:"成员管理",bordered:!1}},[a("table-form",{attrs:{value:t.tableData}})],1),a("av-footer-toolbar",[a("div",{attrs:{slot:"children"},slot:"children"},[t.errorCount>0?a("span",{staticClass:"errorIcon"},[a("a-popover",{attrs:{title:"表单校验信息",overlayClassName:"errorPopover",trigger:"click"}},[a("template",{slot:"content"},t._l(t.errors,function(e,r){return a("li",{key:r,staticClass:"errorListItem",on:{click:function(a){t.scrollToField(e.key)}}},[a("a-icon",{staticClass:"errorIcon",attrs:{type:"cross-circle-o"}}),a("div",{staticClass:"errorMessage"},[t._v(t._s(e.msg))]),a("div",{staticClass:"errorField"},[t._v(t._s(e.label))])],1)})),a("a-icon",{attrs:{type:"exclamation-circle"}}),t._v("\n        "+t._s(t.errorCount)+"\n      ")],2)],1):t._e(),a("a-button",{attrs:{slot:"children",type:"primary"},on:{click:t.validate},slot:"children"},[t._v("\n        提交\n      ")])],1)])],1)],1)},o=[],n=a("a322"),s=(a("ac6a"),a("456d"),a("c665")),i=a("dc0a"),l=a("aa9a"),c=a("d328"),u=a("11d9"),m=a("9ab4"),d=a("60a3"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-table",{attrs:{rowKey:function(t){return t.key},loading:t.loading,columns:t.columns,dataSource:t.data,pagination:!1,rowClassName:function(t){return t.editable?"editable":""}},scopedSlots:t._u([{key:"name",fn:function(e,r){return[r.editable?a("a-input",{attrs:{value:e,autoFocus:"",placeholder:"成员姓名"},on:{change:function(e){return t.handleFieldChange(e,"name",r.key)},pressEnter:function(e){return t.handleKeyPress(e,r.key)}}}):a("span",[t._v(t._s(e))])]}},{key:"workId",fn:function(e,r){return[r.editable?a("a-input",{attrs:{value:e,autoFocus:"",placeholder:"工号"},on:{change:function(e){return t.handleFieldChange(e,"workId",r.key)},pressEnter:function(e){return t.handleKeyPress(e,r.key)}}}):a("span",[t._v(t._s(e))])]}},{key:"department",fn:function(e,r){return[r.editable?a("a-input",{attrs:{value:e,autoFocus:"",placeholder:"所属部门"},on:{change:function(e){return t.handleFieldChange(e,"department",r.key)},pressEnter:function(e){return t.handleKeyPress(e,r.key)}}}):a("span",[t._v(t._s(e))])]}},{key:"action",fn:function(e,r){return[r.editable?[r.isNew?a("span",[a("a",{on:{click:function(e){return t.saveRow(e,r.key)}}},[t._v("添加")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(){return t.remove(r.key)}}},[a("a",[t._v("删除")])])],1):a("span",[a("a",{on:{click:function(e){return t.saveRow(e,r.key)}}},[t._v("保存")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.cancel(e,r.key)}}},[t._v("取消")])],1)]:a("span",[a("a",{on:{click:function(e){return t.toggleEditable(e,r.key)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(e){t.remove(r.key)}}},[a("a",[t._v("删除")])])],1)]}}])}),a("a-button",{style:{width:"100%",marginTop:16,marginBottom:8},attrs:{type:"dashed",icon:"plus"},on:{click:t.newMember}},[t._v("\n        新增成员\n      ")])],1)},p=[],v=(a("f751"),a("7f7f"),a("c93e")),b=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).call(this)),t.loading=!1,t.data=t.value,t.index=0,t.clickedCancel=!1,t.cacheOriginData={},t.columns=[{title:"成员姓名",dataIndex:"name",key:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"工号",dataIndex:"workId",key:"workId",width:"20%",scopedSlots:{customRender:"workId"}},{title:"所属部门",dataIndex:"department",key:"department",width:"40%",scopedSlots:{customRender:"department"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],t}return Object(l["a"])(e,[{key:"handleFieldChange",value:function(t,e,a){var r=this.data.map(function(t){return Object(v["a"])({},t)}),o=this.getRowByKey(a,r);o&&(o[e]=t.target.value,this.data=r)}},{key:"handleKeyPress",value:function(t,e){"Enter"===t.key&&this.saveRow(t,e)}},{key:"newMember",value:function(t){var e=this.data.map(function(t){return Object(v["a"])({},t)});e.push({key:"NEW_TEMP_ID_".concat(this.index),workId:"",name:"",department:"",editable:!0,isNew:!0}),this.index+=1,this.data=e}},{key:"saveRow",value:function(t,e){var a=this;t.preventDefault(),this.loading=!0,setTimeout(function(){if(a.clickedCancel)a.clickedCancel=!1;else{var r=a.getRowByKey(e,null)||{};if(!r.workId||!r.name||!r.department)return t.target.focus(),void(a.loading=!1);delete r.isNew,a.toggleEditable(t,e),a.loading=!1}},500)}},{key:"toggleEditable",value:function(t,e){t.preventDefault();var a=this.data.map(function(t){return Object(v["a"])({},t)}),r=this.getRowByKey(e,a);r&&(r.editable||(this.cacheOriginData[e]=Object(v["a"])({},r)),r.editable=!r.editable,this.data=a)}},{key:"cancel",value:function(t,e){this.clickedCancel=!0,t.preventDefault();var a=this.data.map(function(t){return Object(v["a"])({},t)}),r=this.getRowByKey(e,a);this.cacheOriginData[e]&&(Object.assign(r,this.cacheOriginData[e]),delete this.cacheOriginData[e]),r.editable=!1,this.data=a,this.clickedCancel=!1}},{key:"remove",value:function(t){var e=this.data.filter(function(e){return e.key!==t});this.data=e}},{key:"getRowByKey",value:function(t,e){return(e||this.data).filter(function(e){return e.key===t})[0]}}]),Object(i["a"])(e,t),e}(d["d"]);m["a"]([Object(d["c"])({type:Array,default:function(){return[]}})],b.prototype,"value",void 0),b=m["a"]([Object(d["a"])({})],b);var h=b,y=h,_=a("2877"),g=Object(_["a"])(y,f,p,!1,null,null,null);g.options.__file="TableForm.vue";var k=g.exports,O={name:"仓库名",url:"仓库域名",owner:"仓库管理员",approver:"审批人",dateRange:"生效日期",type:"仓库类型",name2:"任务名",url2:"任务描述",owner2:"执行人",approver2:"责任人",dateRange2:"生效日期",type2:"任务类型"},I=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).call(this)),t.tableData=[{key:"1",workId:"00001",name:"John Brown",department:"New York No. 1 Lake Park"},{key:"2",workId:"00002",name:"Jim Green",department:"London No. 1 Lake Park"},{key:"3",workId:"00003",name:"Joe Black",department:"Sidney No. 1 Lake Park"}],t.form=null,t.errorCount=0,t.errors=[],t}return Object(l["a"])(e,[{key:"handlerFormCreate",value:function(t){this.form=t}},{key:"validate",value:function(t){var e=this;t.preventDefault(),this.form.validateFieldsAndScroll(function(t,a){t&&e.formError()})}},{key:"formError",value:function(){if(null!=this.form){var t=this.form.getFieldsError();this.errors=Object.keys(t).map(function(e){var a;if(t[e]){var r=t[e][0],o=O[e];return a={},Object(n["a"])(a,e,e),Object(n["a"])(a,"msg",r),Object(n["a"])(a,o,o),a}}).filter(function(t){return null!=t});var e=Object.keys(t).filter(function(e){return t[e]}).length;this.errorCount=e}}},{key:"scrollToField",value:function(t){var e=document.querySelector("label[for='".concat(t,"']"));e&&e.scrollIntoView(!0)}}]),Object(i["a"])(e,t),e}(d["d"]);I=m["a"]([Object(d["a"])({components:{TableForm:k}})],I);var w=I,j=w,C=(a("8a91"),a("0fb9"),Object(_["a"])(j,r,o,!1,null,"38272f2c",null));C.options.__file="Advanced.vue";e["default"]=C.exports}}]);
//# sourceMappingURL=form.78bfbd77.js.map