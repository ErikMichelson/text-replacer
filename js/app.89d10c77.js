(function(e){function t(t){for(var n,o,l=t[0],i=t[1],c=t[2],p=0,d=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"419c":function(e,t,a){"use strict";a("48f3")},"48f3":function(e,t,a){},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("PageHeader"),a("div",{staticClass:"container"},[a("TextReplacer")],1)],1)},s=[],o=a("d4ec"),l=a("262e"),i=a("2caf"),c=a("9ab4"),u=a("60a3"),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"hero is-dark"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v(" Text Replacer ")]),a("h2",[e._v(" Useful for deciphering texts where single characters were substituted by others ")])])])])}],f={name:"PageHeader"},m=f,v=a("2877"),b=Object(v["a"])(m,p,d,!1,null,null,null),h=b.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("section",{staticClass:"field mt-3"},[a("label",{staticClass:"label is-unselectable",attrs:{for:"input"}},[e._v(" Enter text to modify: ")]),a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],staticClass:"textarea",attrs:{id:"input",placeholder:"xjsy afu gzbt!"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})])]),a("b",{staticClass:"is-unselectable"},[e._v("Replacements:")]),a("br"),a("section",{staticClass:"is-flex is-flex-direction-row is-flex-wrap-wrap my-3"},e._l(e.replacements,(function(t,n){return a("div",{key:n,staticClass:"card mx-2 my-2"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label is-unselectable",attrs:{for:"old-char-"+n}},[e._v(" Character in original text: ")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.old,expression:"repl.old"}],attrs:{type:"text",size:"3",maxlength:"1",id:"old-char-"+n},domProps:{value:t.old},on:{input:function(a){a.target.composing||e.$set(t,"old",a.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label is-unselectable",attrs:{for:"new-char-"+n}},[e._v(" Character as replacement: ")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.new,expression:"repl.new"}],attrs:{type:"text",size:"3",maxlength:"1",id:"new-char-"+n},domProps:{value:t.new},on:{input:function(a){a.target.composing||e.$set(t,"new",a.target.value)}}})])]),a("button",{staticClass:"button is-danger is-small is-unselectable",on:{click:function(t){return e.deleteReplacement(n)}}},[e._v(" Delete this ")])])])})),0),a("label",{staticClass:"checkbox is-block"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.autoLowerUpperCase,expression:"autoLowerUpperCase"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.autoLowerUpperCase)?e._i(e.autoLowerUpperCase,null)>-1:e.autoLowerUpperCase},on:{change:function(t){var a=e.autoLowerUpperCase,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=null,o=e._i(a,s);n.checked?o<0&&(e.autoLowerUpperCase=a.concat([s])):o>-1&&(e.autoLowerUpperCase=a.slice(0,o).concat(a.slice(o+1)))}else e.autoLowerUpperCase=r}}}),e._v(" Auto-transform lower-case and upper-case ")]),a("button",{staticClass:"button is-info my-2 mr-2 is-unselectable",attrs:{type:"button"},on:{click:e.addReplacement}},[e._v(" Add replacement ")]),a("button",{staticClass:"button my-2 mr-2 is-unselectable",attrs:{type:"button"},on:{click:e.downloadReplMap}},[e._v(" Download replacement map ")]),a("button",{staticClass:"button my-2 mr-2 is-unselectable",attrs:{type:"button"},on:{click:e.uploadReplMap}},[e._v(" Upload replacement map ")]),a("input",{ref:"filechooser",staticClass:"is-hidden",attrs:{type:"file"},on:{change:e.handleReplImport}}),a("section",[a("b",{staticClass:"my-3 is-inline-block is-unselectable"},[e._v("Result: ")]),a("br"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.result,expression:"result"}],staticClass:"textarea has-cursor-text",attrs:{disabled:"",rows:"8"},domProps:{value:e.result},on:{input:function(t){t.target.composing||(e.result=t.target.value)}}})])])},y=[],C=(a("cb29"),a("4160"),a("a15b"),a("d81d"),a("13d5"),a("a434"),a("d3b7"),a("ac1f"),a("3ca3"),a("1276"),a("159b"),a("ddb0"),a("2b3d"),a("2909")),g={name:"TextReplacer",data:function(){return{input:"",replacements:[],autoLowerUpperCase:!1}},methods:{addReplacement:function(){this.replacements.push({old:"",new:""})},deleteReplacement:function(e){this.replacements.splice(e,1)},downloadReplMap:function(){var e=document.createElement("a"),t=new Blob([JSON.stringify(this.replacements)],{type:"application/json"});e.download="replacements.json",e.style.display="none",e.href=URL.createObjectURL(t),document.body.appendChild(e),e.click(),setTimeout((function(){return e.remove()}),1e3)},uploadReplMap:function(){this.$refs.filechooser.click()},handleReplImport:function(){var e=this,t=this.$refs.filechooser.files;if(t&&!(t.length<1)){var a=t[0],n=new FileReader;n.addEventListener("load",(function(){var t=n.result;e.replacements=JSON.parse(t)})),n.addEventListener("loadend",(function(){e.$refs.filechooser.value=""})),n.addEventListener("error",(function(e){console.error(e)})),n.readAsText(a)}}},computed:{result:function(){var e=this.input.split(""),t=new Array(e.length).fill(0),a=Object(C["a"])(this.replacements);return this.autoLowerUpperCase&&a.forEach((function(e,t){a.splice(t,1),a.push({old:e.old.toLowerCase(),new:e.new.toLowerCase()}),a.push({old:e.old.toUpperCase(),new:e.new.toUpperCase()})})),a.forEach((function(a){var n=e.reduce((function(e,t,n){return t===a.old&&e.push(n),e}),[]);n.forEach((function(e){t[e]=a.new}))})),t.map((function(t,a){return 0===t?e[a]:t})).join("")}}},x=g,_=(a("419c"),Object(v["a"])(x,w,y,!1,null,null,null)),j=_.exports,O=function(e){Object(l["a"])(a,e);var t=Object(i["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(u["b"]);O=Object(c["a"])([Object(u["a"])({components:{TextReplacer:j,PageHeader:h}})],O);var R=O,k=R,L=(a("5c0b"),Object(v["a"])(k,r,s,!1,null,null,null)),U=L.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(U)}}).$mount("#app")}});
//# sourceMappingURL=app.89d10c77.js.map