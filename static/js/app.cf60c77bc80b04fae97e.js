webpackJsonp([2,0],{0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(105),s=i(o),r=n(98),a=i(r);n(91),new s.default({el:"#app",render:function(e){return e(a.default)}})},21:function(e,t,n){n(94);var i=n(11)(n(43),n(104),null,null);e.exports=i.exports},39:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(55),s=i(o);t.default=function(e){var t=e.split("---"),n=(0,s.default)(t,2),i=n[0],o=void 0===i?"":i,r=n[1],a=void 0===r?"":r;return{candidates:o.split("\n").map(function(e){return e.trim()}).filter(function(e){return e}).map(function(e){var t=e.split("|"),n=(0,s.default)(t,2),i=n[0],o=n[1];return{name:i,desc:o}}),rounds:a.split("\n").map(function(e){return e.trim()}).filter(function(e){return e}).map(function(e){var t=e.split("|"),n=(0,s.default)(t,2),i=n[0],o=n[1],r=parseInt(o,10);return{title:i,count:r}})}}},40:function(e,t){"use strict";function n(e,t){if(e){var n=document.createRange(),i=window.getSelection();"function"==typeof e.select&&void 0!==e.value?(e.select(),t&&i.collapseToEnd()):"true"===e.contentEditable?(n.selectNodeContents(e),t&&n.collapse(),i.removeAllRanges(),i.addRange(n),e.focus()):e.focus()}}function i(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;e.scrollHeight>e.offsetHeight&&o(e,t,-n););}function o(e,t,n){var i=Math.max(parseInt(window.getComputedStyle(e).fontSize,10)+n,t);return i!==t&&(e.style.fontSize=i+"px",!0)}Object.defineProperty(t,"__esModule",{value:!0}),t.focus=n,t.fitByFontSize=i},41:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if("string"==typeof e)localStorage.setItem(e,(0,a.default)(t));else for(var n in e)e.hasOwnProperty(n)&&localStorage.setItem(n,(0,a.default)(e[n]))}function s(e,t){var n=null;"string"==typeof e&&(n=localStorage.getItem(e));try{n=null===n&&void 0!==t?t:JSON.parse(n)}catch(e){n=void 0!==t?t:null}return n}Object.defineProperty(t,"__esModule",{value:!0});var r=n(52),a=i(r);t.save=o,t.load=s},42:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Math.floor((0,c.default)(e))+1;return n>=t?""+e:Array(t-n).fill(0).join("")+e}function s(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length;t=Math.min(e.length,t);for(var n=[].concat((0,l.default)(e)),i=n.length,o=0;o<t;o++){var r=Math.floor(Math.random()*(i-o))+o;s(n,o,r)}return n}Object.defineProperty(t,"__esModule",{value:!0});var a=n(56),l=i(a),u=n(53),c=i(u);t.pad=o,t.swap=s,t.shuffle=r},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(49),o={};t.default={name:"octicon",props:{name:{type:String,validator:function(e){return e?e in o:null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e="undefined"==typeof e?1:Number(e),isNaN(e)||e<=0?((0,i.warn)('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},clazz:function(){return{octicon:!0,"octicon-spin":this.spin,"octicon-flip-horizontal":"horizontal"===this.flip,"octicon-flip-vertical":"vertical"===this.flip,"octicon-inverse":this.inverse}},icon:function(){return this.name?o[this.name]:null},box:function(){return this.icon?this.icon.viewBox?this.icon.viewBox:"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},width:function(){return this.childrenWidth||this.icon&&this.icon.width*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var e=this;if(!this.icon){this.$children.forEach(function(t){t.outerScale=e.normalizedScale});var t=0,n=0;this.$children.forEach(function(e){t=Math.max(t,e.width),n=Math.max(n,e.height)}),this.childrenWidth=t,this.childrenHeight=n,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(n-e.height)/2})}},register:function(e){for(var t in e)o[t]=e[t]},icons:o}},44:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=[],n=!0,i=!1,o=void 0;try{for(var s,r=(0,d.default)(e);!(n=(s=r.next()).done);n=!0){var a=s.value;t.push(a)}}catch(e){i=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(i)throw o}}return t}function s(){var e=(0,h.load)("cooldown");e=null==e?500:e;var t=(0,h.load)("emojis")||x.join(""),n=o(t),i=(0,h.load)("welcome")||n[Math.floor(Math.random()*n.length)],s=(0,h.load)("mode")||"both",r=(0,h.load)("custom")||"";return{emojis:t,cooldown:e,welcome:i,mode:s,custom:r}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(23),a=i(r),l=n(54),u=i(l),c=n(22),d=i(c),f=n(42),h=n(41),m=n(40),p=n(39),v=i(p),g=n(99),_=i(g),b=n(100),w=i(b),y=n(21),S=i(y);n(48),n(47);var x=["👻","🤟","🖖","🙈","🎰","🤩","😜","😎","🤑","🤘"],k=(0,u.default)({candidates:[],winners:[],total:null,round:null,rolling:!1,isSetup:!1,isNumber:!1,isFit:!0,editing:!1,showLog:!1,logs:[],showSettings:!1,rounds:[],coolingDown:!1},s());t.default={name:"lucky",components:{File:_.default,NameLabel:w.default,Octicon:S.default},data:function(){return(0,u.default)({},k)},computed:{remaining:{get:function(){return this.isSetup?this.candidates.length:"∞"}}},methods:{setup:function(){this.check("total")&&(this.isNumber=!0,this.candidates=Array(this.total).fill(!0).map(function(e,t){return{name:(0,f.pad)(t+1,3)}}),this.isSetup=!0)},log:function(e){var t=(0,h.load)("current",[]);t.push(e),(0,h.save)("current",t)},upload:function(e){var t=this,n=e.target,i=n.files[0];if(i){var o=new FileReader;o.onload=function(e){var n=e.target,i=(0,v.default)(n.result),o=i.candidates;t.candidates=o,t.total=o.length,t.isSetup=!0,t.focus("round")},o.readAsText(i)}},roll:function(){var e=this;if(this.check("round")){var t=this.round;this.rolling?(this.candidates.splice(0,t),clearTimeout(this.rolling),this.rolling=!1,this.checkRemaining(),this.log(this.winners)):(this.winners=[],this.fit(!0),this.rolling=setInterval(function(){e.shuffle(t),e.fit()},1e3/15),this.focus("begin")),this.coolingDown=!0,setTimeout(function(){e.coolingDown=!1},this.cooldown)}},shuffle:function(e){var t=(0,f.shuffle)(this.candidates,e);this.winners=t.slice(0,e),this.candidates=t},reset:function(){clearTimeout(this.rolling),this.$refs.upload&&this.$refs.upload.clear(),(0,a.default)(this,(0,u.default)({},k,s()))},checkRemaining:function(){var e="";this.candidates.length<this.round&&(e="剩余人数不足"+this.round+"人。"),this.$refs.round.setCustomValidity(e)},edit:function(e){this.editing=e},click:function(e){var t=e.target;this.$refs.welcome.contains(t)||this.edit(!1)},focus:function(e,t){var n=this.$refs[e];n&&this.$nextTick(function(){n instanceof HTMLElement?(0,m.focus)(n,t):"function"==typeof n.focus&&n.focus()})},check:function(e){var t=this.$refs[e].validationMessage;return!t||(alert(t),!1)},fit:function(e){var t=this,n=this.$refs.winners;e?(this.isFit=!1,n.style.fontSize=""):this.$nextTick(function(){(0,m.fitByFontSize)(n),t.isFit=!0})},openLog:function(){this.logs=(0,h.load)("current"),this.showLog=!0},setStyles:function(e){if(this.customStyleEl)this.customStyleEl.innerHTML=e;else{var t=document.createElement("style");t.innerHTML=e,document.querySelector("head").appendChild(t),this.customStyleEl=t}}},watch:{isSetup:function(e,t){e!==t&&(e&&((0,h.save)("previous",(0,h.load)("current")),(0,h.save)("current",[])),this.focus(e?"round":"total"))},editing:function(e,t){e!==t&&(e?this.focus("welcome",!0):(0,h.save)("welcome",this.$refs.welcome.textContent))},emojis:function(e){(0,h.save)("emojis",e)},cooldown:function(e){(0,h.save)("cooldown",e)},mode:function(e){(0,h.save)("mode",e)},custom:function(e){(0,h.save)("custom",e),this.setStyles(e)}},mounted:function(){var e=this,t=(0,h.load)("custom");t&&this.setStyles(t),window.addEventListener("resize",function(){e.isSetup&&e.fit()}),window.addEventListener("beforeunload",function(){if(e.isSetup)return"目前抽奖尚未结束，是否要离开？"})}}},45:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"file",props:{name:String,disabled:Boolean,accept:String,multiple:Boolean,required:Boolean},methods:{input:function(e){this.$emit("input",e)},change:function(e){this.$emit("change",e)},choose:function(){this.$refs.file.click()},clear:function(){this.$refs.file.value=""}}}},46:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"name-label",props:{name:{type:String,required:!0},desc:String}}},91:function(e,t){},92:function(e,t){},93:function(e,t){},94:function(e,t){},98:function(e,t,n){n(92);var i=n(11)(n(44),n(101),null,null);e.exports=i.exports},99:function(e,t,n){n(93);var i=n(11)(n(45),n(102),null,null);e.exports=i.exports},100:function(e,t,n){var i=n(11)(n(46),n(103),null,null);e.exports=i.exports},101:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{started:e.isSetup,fit:e.isFit,number:e.isNumber},attrs:{id:"app"},on:{click:e.click}},[n("div",{ref:"stage",attrs:{id:"stage"}},[n("div",{attrs:{id:"display"}},[n("div",{ref:"winners",attrs:{id:"winners"}},e._l(e.winners,function(e,t){return n("name-label",{key:t,attrs:{name:e.name,desc:e.desc}})}),1),e._v(" "),n("h1",{directives:[{name:"show",rawName:"v-show",value:!e.winners.length&&e.isFit,expression:"!winners.length && isFit"}],ref:"welcome",attrs:{id:"welcome",contenteditable:e.editing,spellcheck:"false"},domProps:{innerHTML:e._s(e.welcome)},on:{dblclick:function(t){return t.stopPropagation(),e.edit(!0)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.edit(!1)}}})]),e._v(" "),n("div",{attrs:{id:"control"}},[n("form",{attrs:{id:"setup"},on:{submit:function(t){return t.preventDefault(),e.setup(t)}}},["number"!==e.mode?n("label",[n("file",{ref:"upload",attrs:{disabled:e.isSetup},on:{change:e.upload}},[e._v("选择文件")])],1):e._e(),e._v(" "),"both"===e.mode?n("span",{staticClass:"separator"},[e._v("- or -")]):e._e(),e._v(" "),"import"!==e.mode?n("label",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.total,expression:"total",modifiers:{number:!0}}],ref:"total",attrs:{type:"number",required:"",min:"1",max:"999",disabled:e.isSetup,placeholder:"一共有几人？"},domProps:{value:e.total},on:{input:function(t){t.target.composing||(e.total=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]):e._e(),e._v(" "),"import"!==e.mode?n("button",{attrs:{disabled:e.isSetup}},[e._v("确定")]):e._e()]),e._v(" "),n("form",{attrs:{id:"roll"},on:{reset:e.reset,submit:function(t){return t.preventDefault(),e.roll(t)}}},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.round,expression:"round",modifiers:{number:!0}}],ref:"round",attrs:{type:"number",required:"",disabled:!e.isSetup||e.rolling,min:"1",max:e.remaining||50,placeholder:"本轮抽几人？"},domProps:{value:e.round},on:{input:[function(t){t.target.composing||(e.round=e._n(t.target.value))},e.checkRemaining],blur:function(t){return e.$forceUpdate()}}})]),e._v("\n        /\n        "),n("span",{staticClass:"remaining"},[e._v(e._s(e.remaining))]),e._v(" "),n("button",{ref:"begin",attrs:{disabled:!e.isSetup||e.coolingDown,name:"begin"}},[e._v("\n          "+e._s(e.rolling?"停止":"开始")+"\n          "),e.coolingDown?n("span",{staticClass:"cooler",style:"animation-duration: "+e.cooldown+"ms;"}):e._e()]),e._v(" "),n("button",{attrs:{type:"reset",disabled:!e.isSetup||e.coolingDown}},[e._v("\n          重置\n          "),e.coolingDown?n("span",{staticClass:"cooler",style:"animation-duration: "+e.cooldown+"ms;"}):e._e()]),e._v(" "),n("button",{attrs:{type:"button"},on:{click:e.openLog}},[e._v("记录")])])])]),e._v(" "),n("div",{class:{show:e.showLog,modal:!0},attrs:{id:"log",tabindex:"-1"},on:{click:function(t){e.showLog=!1},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:void(e.showSettings=!1)}}},[n("h2",[e._v("抽取历史")]),e._v(" "),e.logs.length?n("ol",e._l(e.logs,function(t,i){return n("li",{key:i},e._l(t,function(e,t){return n("name-label",{key:t,attrs:{name:e.name,desc:e.desc}})}),1)}),0):e._e(),e._v(" "),e.logs.length?e._e():n("h2",{staticClass:"empty"},[e._v("还没有进行过抽奖")])]),e._v(" "),n("div",{class:{show:e.showSettings,modal:!0},attrs:{id:"settings",tabindex:"-1"},on:{click:function(t){return t.target!==t.currentTarget?null:void(e.showSettings=!1)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:void(e.showSettings=!1)}}},[n("h2",[e._v("设置")]),e._v(" "),n("form",[n("p",[n("label",[n("span",{staticClass:"label"},[e._v("间隔时间")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.cooldown,expression:"cooldown",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.cooldown},on:{input:function(t){t.target.composing||(e.cooldown=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("span",{staticClass:"tip"},[e._v("毫秒")])])]),e._v(" "),n("p",[n("label",[n("span",{staticClass:"label"},[e._v("表情")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.emojis,expression:"emojis"}],staticClass:"hero",attrs:{type:"text"},domProps:{value:e.emojis},on:{input:function(t){t.target.composing||(e.emojis=t.target.value)}}})])]),e._v(" "),n("p",[n("span",{staticClass:"label"},[e._v("输入模式")]),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",value:"import"},domProps:{checked:e._q(e.mode,"import")},on:{change:function(t){e.mode="import"}}}),n("span",[e._v("文件导入")])]),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",value:"number"},domProps:{checked:e._q(e.mode,"number")},on:{change:function(t){e.mode="number"}}}),n("span",[e._v("抽取序号")])]),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",value:"both"},domProps:{checked:e._q(e.mode,"both")},on:{change:function(t){e.mode="both"}}}),n("span",[e._v("自由选择")])])]),e._v(" "),n("p",{attrs:{id:"custom"}},[n("label",[n("span",{staticClass:"label"},[e._v("自定义样式")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.custom,expression:"custom"}],attrs:{spellcheck:"false",rows:"10"},domProps:{value:e.custom},on:{input:function(t){t.target.composing||(e.custom=t.target.value)}}})])])])]),e._v(" "),n("button",{attrs:{id:"setting"},on:{click:function(t){e.showSettings=!e.showSettings}}},[n("octicon",{attrs:{name:"gear"}})],1),e._v(" "),n("a",{attrs:{id:"github",href:"https://github.com/Justineo/lucky"}},[n("octicon",{attrs:{name:"mark-github",label:"View on GitHub",title:"View on GitHub"}})],1)])},staticRenderFns:[]}},102:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file"},[n("button",{attrs:{type:"button"},on:{click:e.choose}},[e._t("default",[e._v("选择文件")])],2),e._v(" "),n("input",{ref:"file",attrs:{type:"file",name:e.name,disabled:e.disabled,accept:e.accept,multiple:e.multiple,required:e.required},on:{input:e.input,change:e.change}})])},staticRenderFns:[]}},103:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"name"},[e._v(e._s(e.name)+" "),e.desc?n("span",{staticClass:"desc"},[e._v("("+e._s(e.desc)+")")]):e._e()])},staticRenderFns:[]}},104:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{class:e.clazz,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon?n("path",{attrs:{d:e.icon.d}}):e._e()])],2)},staticRenderFns:[]}}});
//# sourceMappingURL=app.cf60c77bc80b04fae97e.js.map