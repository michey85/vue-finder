(function(t){function e(e){for(var n,c,o=e[0],s=e[1],u=e[2],d=0,b=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(b.length)b.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},i=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-finder/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=s;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0084":function(t,e,r){"use strict";r("669a")},"0298":function(t,e,r){},"246e":function(t,e,r){},"3e3a":function(t,e,r){"use strict";r("5d6a")},"3fab":function(t,e,r){},"4aae":function(t,e,r){"use strict";r("514f")},"4c33":function(t,e,r){"use strict";r("a86b")},"514f":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a=r("6c02"),i=Object(n["K"])("data-v-2a13fbf2");Object(n["u"])("data-v-2a13fbf2");var c={class:"controls"},o=Object(n["h"])("Refresh"),s=Object(n["h"])("Login to register an Instructor"),u=Object(n["h"])("Register an Instructor"),l=Object(n["i"])("h2",null,"List of Coaches",-1),d={key:0},b={key:1},f={key:2};Object(n["s"])();var j=i((function(t,e,r,a,j,O){var h=Object(n["z"])("base-dialog"),m=Object(n["z"])("InstructorFilter"),p=Object(n["z"])("base-button"),v=Object(n["z"])("base-spinner"),g=Object(n["z"])("InstructorItem"),y=Object(n["z"])("base-card");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])(h,{show:!!j.error,title:"An error occured!",onClose:O.handleError},{default:i((function(){return[Object(n["i"])("p",null,Object(n["C"])(j.error),1)]})),_:1},8,["show","onClose"]),Object(n["i"])(m,{onChangeFilter:O.setFilter},null,8,["onChangeFilter"]),Object(n["i"])("section",null,[Object(n["i"])(y,null,{default:i((function(){return[Object(n["i"])("div",c,[Object(n["i"])(p,{mode:"outline",onClick:e[1]||(e[1]=function(t){return O.loadInstructors(!0)})},{default:i((function(){return[o]})),_:1}),O.isLoggedIn?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])(p,{key:0,link:"",to:"/auth?redirect=register"},{default:i((function(){return[s]})),_:1})),!O.isLoggedIn||O.isInstructor||j.isLoading?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])(p,{key:1,link:"",to:"/register"},{default:i((function(){return[u]})),_:1}))]),l,j.isLoading?(Object(n["r"])(),Object(n["f"])("div",d,[Object(n["i"])(v)])):O.hasInstructors?(Object(n["r"])(),Object(n["f"])("ul",b,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(O.filteredInstructors,(function(t){return Object(n["r"])(),Object(n["f"])(g,{key:t.id,id:t.id,"first-name":t.firstName,"last-name":t.lastName,rate:t.hourlyRate,areas:t.areas},null,8,["id","first-name","last-name","rate","areas"])})),128))])):(Object(n["r"])(),Object(n["f"])("h3",f,"No instructors found."))]})),_:1})])])})),O=r("1da1"),h=(r("96cf"),r("4de4"),r("caad"),r("2532"),Object(n["K"])("data-v-8a4ae19c"));Object(n["u"])("data-v-8a4ae19c");var m={class:"actions"},p=Object(n["h"])("Contact"),v=Object(n["h"])("View Details");Object(n["s"])();var g=h((function(t,e,r,a,i,c){var o=Object(n["z"])("base-badge"),s=Object(n["z"])("base-button");return Object(n["r"])(),Object(n["f"])("li",null,[Object(n["i"])("h3",null,Object(n["C"])(c.fullName),1),Object(n["i"])("h4",null,"$"+Object(n["C"])(r.rate)+"/hour",1),Object(n["i"])("div",null,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(r.areas,(function(t){return Object(n["r"])(),Object(n["f"])(o,{key:t,type:t,title:t},null,8,["type","title"])})),128))]),Object(n["i"])("div",m,[Object(n["i"])(s,{mode:"outline",link:"",to:c.contactLink},{default:h((function(){return[p]})),_:1},8,["to"]),Object(n["i"])(s,{link:"",to:c.detailsLink},{default:h((function(){return[v]})),_:1},8,["to"])])])})),y=(r("99af"),r("9911"),Object(n["K"])("data-v-3629619b")),k=y((function(t,e,r,a,i,c){var o=Object(n["z"])("router-link");return r.link?(Object(n["r"])(),Object(n["f"])(o,{key:1,to:r.to,class:r.mode},{default:y((function(){return[Object(n["y"])(t.$slots,"default",{},void 0,!0)]})),_:3},8,["to","class"])):(Object(n["r"])(),Object(n["f"])("button",{key:0,class:r.mode},[Object(n["y"])(t.$slots,"default",{},void 0,!0)],2))})),I={props:{mode:{type:String,required:!1,default:""},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"}}};r("d6ef");I.render=k,I.__scopeId="data-v-3629619b";var w=I,F={components:{BaseButton:w},props:["id","firstName","lastName","rate","areas"],computed:{fullName:function(){return this.firstName+" "+this.lastName},contactLink:function(){return"".concat(this.$route.path,"/").concat(this.id,"/contact")},detailsLink:function(){return"".concat(this.$route.path,"/").concat(this.id)}}};r("4c33");F.render=g,F.__scopeId="data-v-8a4ae19c";var _=F,x=Object(n["K"])("data-v-a32298c6");Object(n["u"])("data-v-a32298c6");var V=Object(n["i"])("h2",null,"Find your instructor",-1),q=Object(n["h"])(" Hatha "),C=Object(n["h"])(" Mantra "),R=Object(n["h"])(" Meditation "),L=Object(n["h"])(" Kundalini ");Object(n["s"])();var N=x((function(t,e,r,a,i,c){var o=Object(n["z"])("base-card");return Object(n["r"])(),Object(n["f"])(o,null,{default:x((function(){return[V,Object(n["i"])("label",null,[Object(n["i"])("input",{type:"checkbox",name:"hatha",checked:"",onChange:e[1]||(e[1]=function(){return c.setFilter&&c.setFilter.apply(c,arguments)})},null,32),q]),Object(n["i"])("label",null,[Object(n["i"])("input",{type:"checkbox",name:"mantra",checked:"",onChange:e[2]||(e[2]=function(){return c.setFilter&&c.setFilter.apply(c,arguments)})},null,32),C]),Object(n["i"])("label",null,[Object(n["i"])("input",{type:"checkbox",name:"meditation",checked:"",onChange:e[3]||(e[3]=function(){return c.setFilter&&c.setFilter.apply(c,arguments)})},null,32),R]),Object(n["i"])("label",null,[Object(n["i"])("input",{type:"checkbox",name:"kundalini",checked:"",onChange:e[4]||(e[4]=function(){return c.setFilter&&c.setFilter.apply(c,arguments)})},null,32),L])]})),_:1})})),$=(r("b0c0"),{emits:["change-filter"],data:function(){return{filters:{hatha:!0,mantra:!0,meditation:!0,kundalini:!0}}},methods:{setFilter:function(t){var e=t.target.name,r=t.target.checked;this.filters[e]=r,this.$emit("change-filter",this.filters)}}});r("eadd");$.render=N,$.__scopeId="data-v-a32298c6";var S=$,z={components:{InstructorItem:_,InstructorFilter:S},data:function(){return{isLoading:!1,error:null,activeFilter:{hatha:!0,mantra:!0,meditation:!0,kundalini:!0}}},computed:{isLoggedIn:function(){return this.$store.getters.isAuth},filteredInstructors:function(){var t=this;return this.$store.getters["instructors/instructors"].filter((function(e){return!(!t.activeFilter.hatha||!e.areas.includes("hatha"))||(!(!t.activeFilter.mantra||!e.areas.includes("mantra"))||(!(!t.activeFilter.meditation||!e.areas.includes("meditation"))||!(!t.activeFilter.kundalini||!e.areas.includes("kundalini"))))}))},hasInstructors:function(){return!this.isLoading&&this.$store.getters["instructors/hasInstructors"]},isInstructor:function(){return this.$store.getters["instructors/isInstructor"]}},methods:{setFilter:function(t){this.activeFilter=t},loadInstructors:function(){var t=arguments,e=this;return Object(O["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]&&t[0],e.isLoading=!0,r.prev=2,r.next=5,e.$store.dispatch("instructors/loadInstructors",{forceRefresh:n});case 5:r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](2),e.error=r.t0.message||"Something went wrong...";case 10:e.isLoading=!1;case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},handleError:function(){this.error=null}},created:function(){this.loadInstructors()}};r("6670");z.render=j,z.__scopeId="data-v-2a13fbf2";var A=z,T=(r("a4d3"),r("e01a"),Object(n["i"])("h2",null,"Reach out now!",-1)),U=Object(n["h"])("Contact");function E(t,e,r,a,i,c){var o=Object(n["z"])("base-card"),s=Object(n["z"])("base-badge"),u=Object(n["z"])("base-button"),l=Object(n["z"])("router-view");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])("section",null,[Object(n["i"])(o,null,{default:Object(n["H"])((function(){return[Object(n["i"])("h2",null,Object(n["C"])(c.fullName),1),Object(n["i"])("h3",null,"$"+Object(n["C"])(c.rate)+"/hour",1)]})),_:1})]),Object(n["i"])("section",null,[Object(n["i"])(o,null,{default:Object(n["H"])((function(){return[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(c.areas,(function(t){return Object(n["r"])(),Object(n["f"])(s,{key:t,type:t,title:t},null,8,["type","title"])})),128)),Object(n["i"])("p",null,Object(n["C"])(c.description),1)]})),_:1})]),Object(n["i"])("section",null,[Object(n["i"])(o,null,{default:Object(n["H"])((function(){return[Object(n["i"])("header",null,[T,Object(n["i"])(u,{link:"",to:c.contactLink},{default:Object(n["H"])((function(){return[U]})),_:1},8,["to"])]),Object(n["i"])(l)]})),_:1})])])}r("7db0");var B={props:["id"],data:function(){return{selectedInstructor:null}},computed:{fullName:function(){return this.selectedInstructor.firstName+" "+this.selectedInstructor.lastName},areas:function(){return this.selectedInstructor.areas},rate:function(){return this.selectedInstructor.hourlyRate},description:function(){return this.selectedInstructor.description},contactLink:function(){return this.$route.path+"/contact"}},created:function(){var t=this;this.selectedInstructor=this.$store.getters["instructors/instructors"].find((function(e){return e.id===t.id}))}};B.render=E;var P=B,K=Object(n["i"])("h2",null,"Register as an instructor!",-1);function H(t,e,r,a,i,c){var o=Object(n["z"])("InstructorForm"),s=Object(n["z"])("base-card");return Object(n["r"])(),Object(n["f"])("section",null,[Object(n["i"])(s,null,{default:Object(n["H"])((function(){return[K,Object(n["i"])(o,{onSaveData:c.saveData},null,8,["onSaveData"])]})),_:1})])}r("ac1f"),r("5319");var M=Object(n["K"])("data-v-3cccb066");Object(n["u"])("data-v-3cccb066");var D=Object(n["h"])(" First Name "),J={key:0},Y=Object(n["h"])(" First Name "),G={key:0},Q=Object(n["h"])(" Description "),W={key:0},X=Object(n["h"])(" Hourly rate "),Z={key:0},tt=Object(n["i"])("h3",null,"Areas of Expertise",-1),et=Object(n["h"])(" Hatha yoga "),rt=Object(n["h"])(" Mantra yoga "),nt=Object(n["h"])(" Kundalini yoga "),at=Object(n["h"])(" Meditation "),it={key:0},ct={key:0},ot=Object(n["h"])("Register");Object(n["s"])();var st=M((function(t,e,r,a,i,c){var o=Object(n["z"])("base-button");return Object(n["r"])(),Object(n["f"])("form",{onSubmit:e[17]||(e[17]=Object(n["J"])((function(){return c.submitForm&&c.submitForm.apply(c,arguments)}),["prevent"]))},[Object(n["i"])("label",{class:["form-control",{invalid:!i.firstName.isValid}]},[D,Object(n["I"])(Object(n["i"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.firstName.val=t}),onBlur:e[2]||(e[2]=function(t){return c.clearValidity("firstName")})},null,544),[[n["F"],i.firstName.val,void 0,{trim:!0}]]),i.firstName.isValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",J,"The field must not be empty."))],2),Object(n["i"])("label",{class:["form-control",{invalid:!i.lastName.isValid}]},[Y,Object(n["I"])(Object(n["i"])("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=function(t){return i.lastName.val=t}),onBlur:e[4]||(e[4]=function(t){return c.clearValidity("lastName")})},null,544),[[n["F"],i.lastName.val,void 0,{trim:!0}]]),i.lastName.isValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",G,"The field must not be empty."))],2),Object(n["i"])("label",{class:["form-control",{invalid:!i.description.isValid}]},[Q,Object(n["I"])(Object(n["i"])("textarea",{rows:"5","onUpdate:modelValue":e[5]||(e[5]=function(t){return i.description.val=t}),onBlur:e[6]||(e[6]=function(t){return c.clearValidity("description")})},null,544),[[n["F"],i.description.val,void 0,{trim:!0}]]),i.description.isValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",W,"The field must not be empty."))],2),Object(n["i"])("label",{class:["form-control",{invalid:!i.rate.isValid}]},[X,Object(n["I"])(Object(n["i"])("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=function(t){return i.rate.val=t}),onBlur:e[8]||(e[8]=function(t){return c.clearValidity("rate")})},null,544),[[n["F"],i.rate.val,void 0,{number:!0}]]),i.rate.isValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",Z,"The field must not be empty or less than 0."))],2),Object(n["i"])("div",{class:["form-control",{invalid:!i.areas.isValid}]},[tt,Object(n["i"])("label",null,[Object(n["I"])(Object(n["i"])("input",{type:"checkbox",value:"hatha","onUpdate:modelValue":e[9]||(e[9]=function(t){return i.areas.val=t}),onBlur:e[10]||(e[10]=function(t){return c.clearValidity("areas")})},null,544),[[n["E"],i.areas.val]]),et]),Object(n["i"])("label",null,[Object(n["I"])(Object(n["i"])("input",{type:"checkbox",value:"mantra","onUpdate:modelValue":e[11]||(e[11]=function(t){return i.areas.val=t}),onBlur:e[12]||(e[12]=function(t){return c.clearValidity("areas")})},null,544),[[n["E"],i.areas.val]]),rt]),Object(n["i"])("label",null,[Object(n["I"])(Object(n["i"])("input",{type:"checkbox",value:"kundalini","onUpdate:modelValue":e[13]||(e[13]=function(t){return i.areas.val=t}),onBlur:e[14]||(e[14]=function(t){return c.clearValidity("areas")})},null,544),[[n["E"],i.areas.val]]),nt]),Object(n["i"])("label",null,[Object(n["I"])(Object(n["i"])("input",{type:"checkbox",value:"meditation","onUpdate:modelValue":e[15]||(e[15]=function(t){return i.areas.val=t}),onBlur:e[16]||(e[16]=function(t){return c.clearValidity("areas")})},null,544),[[n["E"],i.areas.val]]),at]),i.areas.isValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",it,"Choose at least one expertise."))],2),i.isValidForm?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",ct,"Please fix all the above errors and try to submit again.")),Object(n["i"])(o,null,{default:M((function(){return[ot]})),_:1})],32)})),ut={emits:["save-data"],data:function(){return{firstName:{val:"",isValid:!0},lastName:{val:"",isValid:!0},description:{val:"",isValid:!0},rate:{val:null,isValid:!0},areas:{val:[],isValid:!0},isValidForm:!0}},methods:{clearValidity:function(t){this[t].isValid=!0},validateForm:function(){this.isValidForm=!0,this.firstName.val||(this.firstName.isValid=!1,this.isValidForm=!1),this.lastName.val||(this.lastName.isValid=!1,this.isValidForm=!1),this.description.val||(this.description.isValid=!1,this.isValidForm=!1),(!this.rate.val||this.rate.val<0)&&(this.rate.isValid=!1,this.isValidForm=!1),this.areas.val.length||(this.areas.isValid=!1,this.isValidForm=!1)},submitForm:function(){if(this.validateForm(),this.isValidForm){var t={first:this.firstName.val,last:this.lastName.val,desc:this.description.val,rate:this.rate.val,areas:this.areas.val};this.$emit("save-data",t)}}}};r("0084");ut.render=st,ut.__scopeId="data-v-3cccb066";var lt=ut,dt={components:{InstructorForm:lt},methods:{saveData:function(t){this.$store.dispatch("instructors/registerInstructor",t),this.$router.replace("/instructors")}}};dt.render=H;var bt=dt,ft=Object(n["K"])("data-v-b9a1d442");Object(n["u"])("data-v-b9a1d442");var jt={class:"form-control"},Ot=Object(n["h"])(" Your E-mail: "),ht={class:"form-control"},mt=Object(n["h"])(" Your Message: "),pt={key:0},vt={class:"actions"},gt=Object(n["h"])("Send Message");Object(n["s"])();var yt=ft((function(t,e,r,a,i,c){var o=Object(n["z"])("base-button");return Object(n["r"])(),Object(n["f"])("form",{onSubmit:e[3]||(e[3]=Object(n["J"])((function(){return c.submitForm&&c.submitForm.apply(c,arguments)}),["prevent"]))},[Object(n["i"])("label",jt,[Ot,Object(n["I"])(Object(n["i"])("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.email=t})},null,512),[[n["F"],i.email,void 0,{trim:!0}]])]),Object(n["i"])("label",ht,[mt,Object(n["I"])(Object(n["i"])("textarea",{rows:"5","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.message=t})},null,512),[[n["F"],i.message,void 0,{trim:!0}]])]),i.isValidForm?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",pt,"Please enter valid email and non-empty message.")),Object(n["i"])("div",vt,[Object(n["i"])(o,null,{default:ft((function(){return[gt]})),_:1})])],32)})),kt={data:function(){return{email:"",message:"",isValidForm:!0}},methods:{submitForm:function(){this.isValidForm=!0,this.email&&this.email.includes("@")&&this.message?(this.$store.dispatch("requests/contactInstructor",{id:this.$route.params.id,email:this.email,message:this.message}),this.$router.replace("/instructors")):this.isValidForm=!1}}};r("99ee");kt.render=yt,kt.__scopeId="data-v-b9a1d442";var It=kt,wt=Object(n["K"])("data-v-7e307aff");Object(n["u"])("data-v-7e307aff");var Ft=Object(n["i"])("h2",null,"Received requests",-1),_t={key:1},xt={key:2};Object(n["s"])();var Vt=wt((function(t,e,r,a,i,c){var o=Object(n["z"])("base-dialog"),s=Object(n["z"])("base-spinner"),u=Object(n["z"])("RequestItem"),l=Object(n["z"])("base-card");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])(o,{show:!!i.error,title:"An error occured!",onClose:c.handleError},{default:wt((function(){return[Object(n["i"])("p",null,Object(n["C"])(i.error),1)]})),_:1},8,["show","onClose"]),Object(n["i"])("section",null,[Object(n["i"])(l,null,{default:wt((function(){return[Ft,i.isLoading?(Object(n["r"])(),Object(n["f"])(s,{key:0})):c.hasRequests?(Object(n["r"])(),Object(n["f"])("ul",_t,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(c.receivedRequests,(function(t){return Object(n["r"])(),Object(n["f"])(u,{key:t.id,email:t.userEmail,message:t.message},null,8,["email","message"])})),128))])):(Object(n["r"])(),Object(n["f"])("h3",xt,"You haven't received any requests yet."))]})),_:1})])])})),qt=Object(n["K"])("data-v-31025c3e"),Ct=qt((function(t,e,r,a,i,c){return Object(n["r"])(),Object(n["f"])("li",null,[Object(n["i"])("div",null,[Object(n["i"])("a",{href:c.emailLink},Object(n["C"])(r.email),9,["href"])]),Object(n["i"])("p",null,Object(n["C"])(r.message),1)])})),Rt={props:["email","message"],computed:{emailLink:function(){return"mailto:"+this.email}}};r("f122");Rt.render=Ct,Rt.__scopeId="data-v-31025c3e";var Lt=Rt,Nt={components:{RequestItem:Lt},data:function(){return{isLoading:!1,error:null}},computed:{receivedRequests:function(){return this.$store.getters["requests/requests"]},hasRequests:function(){return this.$store.getters["requests/hasRequests"]}},methods:{loadRequests:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,t.$store.dispatch("requests/loadRequests");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),t.error=e.t0.message||"Failed to load requests.";case 9:t.isLoading=!1;case 10:case"end":return e.stop()}}),e,null,[[1,6]])})))()},handleError:function(){this.error=null}},created:function(){this.loadRequests()}};r("bd8b");Nt.render=Vt,Nt.__scopeId="data-v-7e307aff";var $t=Nt,St=Object(n["K"])("data-v-1294ae98");Object(n["u"])("data-v-1294ae98");var zt={class:"form-control"},At=Object(n["h"])(" Email "),Tt={class:"form-control"},Ut=Object(n["h"])(" Password "),Et={key:0};Object(n["s"])();var Bt=St((function(t,e,r,a,i,c){var o=Object(n["z"])("base-dialog"),s=Object(n["z"])("base-spinner"),u=Object(n["z"])("base-button"),l=Object(n["z"])("base-card");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])(o,{show:!!i.error,fixed:"",title:"An error ocurred",onClose:c.handleError},{default:St((function(){return[Object(n["i"])("p",null,Object(n["C"])(i.error),1)]})),_:1},8,["show","onClose"]),Object(n["i"])(o,{show:i.isLoading,fixed:"",title:"Authenticating..."},{default:St((function(){return[Object(n["i"])(s)]})),_:1},8,["show"]),Object(n["i"])(l,null,{default:St((function(){return[Object(n["i"])("form",{onSubmit:e[3]||(e[3]=Object(n["J"])((function(){return c.submitForm&&c.submitForm.apply(c,arguments)}),["prevent"]))},[Object(n["i"])("label",zt,[At,Object(n["I"])(Object(n["i"])("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.email=t})},null,512),[[n["F"],i.email,void 0,{trim:!0}]])]),Object(n["i"])("label",Tt,[Ut,Object(n["I"])(Object(n["i"])("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.password=t})},null,512),[[n["F"],i.password,void 0,{trim:!0}]])]),i.formIsValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",Et,"Please enter a valid email and password (should be at least 6 characters long)")),Object(n["i"])(u,null,{default:St((function(){return[Object(n["h"])(Object(n["C"])(c.submitButtonCaption),1)]})),_:1}),Object(n["i"])(u,{type:"button",mode:"flat",onClick:c.switchAuthMode},{default:St((function(){return[Object(n["h"])(Object(n["C"])(c.switchModeButtonCaption),1)]})),_:1},8,["onClick"])],32)]})),_:1})])})),Pt={data:function(){return{email:"",password:"",formIsValid:!0,mode:"login",isLoading:!1,error:null}},computed:{submitButtonCaption:function(){return"login"===this.mode?"LogIn":"SignUp"},switchModeButtonCaption:function(){return"login"===this.mode?"SignUp instead":"LogIn instead"}},methods:{submitForm:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.formIsValid=!0,t.email&&!(t.password.length<6)){e.next=4;break}return t.formIsValid=!1,e.abrupt("return");case 4:return t.isLoading=!0,e.prev=5,e.next=8,t.$store.dispatch(t.mode,{email:t.email,password:t.password});case 8:n="/"+((null===(r=t.$router.query)||void 0===r?void 0:r.redirect)||"instructors"),t.$router.replace(n),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](5),t.error=e.t0.message||"Try it later!";case 15:t.isLoading=!1;case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))()},switchAuthMode:function(){this.mode="login"===this.mode?"signup":"login"},handleError:function(){this.error=null}}};r("edc8");Pt.render=Bt,Pt.__scopeId="data-v-1294ae98";var Kt=Pt,Ht=Object(n["i"])("h2",null,"Page not found.",-1),Mt=Object(n["h"])(" Check out all our "),Dt=Object(n["h"])("instructors"),Jt=Object(n["h"])(". ");function Yt(t,e){var r=Object(n["z"])("router-link"),a=Object(n["z"])("base-card");return Object(n["r"])(),Object(n["f"])("section",null,[Object(n["i"])(a,null,{default:Object(n["H"])((function(){return[Ht,Object(n["i"])("p",null,[Mt,Object(n["i"])(r,{to:"/"},{default:Object(n["H"])((function(){return[Dt]})),_:1}),Jt])]})),_:1})])}const Gt={};Gt.render=Yt;var Qt,Wt=Gt,Xt=r("5502"),Zt=r("5530"),te=(r("d3b7"),"https://yoga-instructors-default-rtdb.europe-west1.firebasedatabase.app/"),ee="AIzaSyB7nQqAiqNPfA74SJlQngNmoPLAYAxtaNU",re={registerInstructor:function(t,e){return Object(O["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.rootGetters.userId,a={firstName:e.first,lastName:e.last,description:e.desc,hourlyRate:e.rate,areas:e.areas},i=t.rootGetters.token,r.next=5,fetch("".concat(te,"/instructors/").concat(n,".json?auth=").concat(i),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:c=r.sent,c.ok&&t.commit("registerInstructor",Object(Zt["a"])(Object(Zt["a"])({},a),{},{id:n}));case 7:case"end":return r.stop()}}),r)})))()},loadInstructors:function(t,e){return Object(O["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.forceRefresh||t.getters.shouldUpdate){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,fetch("".concat(te,"/instructors.json"));case 4:if(n=r.sent,n.ok){r.next=7;break}throw new Error(a.message||"Failed to fetch data!");case 7:return r.next=9,n.json();case 9:for(c in a=r.sent,i=[],a)o={firstName:a[c].firstName,lastName:a[c].lastName,description:a[c].description,hourlyRate:a[c].hourlyRate,areas:a[c].areas,id:c},i.push(o);t.commit("setInstructors",i),t.commit("setFetchTimestamp");case 14:case"end":return r.stop()}}),r)})))()}},ne={instructors:function(t){return t.instructors},hasInstructors:function(t){return t.instructors&&t.instructors.length>0},isInstructor:function(t,e,r,n){var a=e.instructors,i=n.userId;return a.some((function(t){return t.id===i}))},shouldUpdate:function(t){var e=t.lastFetch;if(!e)return!0;var r=(new Date).getTime();return(r-e)/1e3>60}},ae={registerInstructor:function(t,e){t.instructors.push(e)},setInstructors:function(t,e){t.instructors=e},setFetchTimestamp:function(t){t.lastFetch=(new Date).getTime()}},ie={namespaced:!0,state:function(){return{lastFetch:null,instructors:[]}},actions:re,getters:ne,mutations:ae},ce={contactInstructor:function(t,e){return Object(O["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={userEmail:e.email,message:e.message},r.next=3,fetch("".concat(te,"/requests/").concat(e.id,".json"),{method:"POST",body:JSON.stringify(n)});case 3:if(a=r.sent,a.ok){r.next=6;break}throw new Error(a.message||"Failed to fetch");case 6:i=a.json(),c=i.name,n.id=c,n.instructorId=e.id,t.commit("addRequest",n);case 10:case"end":return r.stop()}}),r)})))()},loadRequests:function(t){return Object(O["a"])(regeneratorRuntime.mark((function e(){var r,n,a,i,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.rootGetters.userId,n=t.rootGetters.token,e.next=4,fetch("".concat(te,"/requests/").concat(r,".json?auth=").concat(n));case 4:if(a=e.sent,a.ok){e.next=7;break}throw new Error(a.message||"Failed to fetch data.");case 7:return e.next=9,a.json();case 9:for(o in i=e.sent,c=[],i)c.push({id:o,instructorId:r,userEmail:i[o].userEmail,message:i[o].message});t.commit("setRequests",c);case 13:case"end":return e.stop()}}),e)})))()}},oe={requests:function(t,e,r,n){var a=n.userId;return t.requests.filter((function(t){return t.instructorId===a}))},hasRequests:function(t,e){var r;return(null===(r=e.requests)||void 0===r?void 0:r.length)>0}},se={addRequest:function(t,e){t.requests.push(e)},setRequests:function(t,e){t.requests=e}},ue={namespaced:!0,state:function(){return{requests:[]}},actions:ce,getters:oe,mutations:se},le={login:function(t,e){return Object(O["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",t.dispatch("auth",Object(Zt["a"])(Object(Zt["a"])({},e),{},{mode:"login"})));case 1:case"end":return r.stop()}}),r)})))()},logout:function(t){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("tokenExpiration"),clearTimeout(Qt),t.commit("setUser",{token:null,userId:null})},signup:function(t,e){return Object(O["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",t.dispatch("auth",Object(Zt["a"])(Object(Zt["a"])({},e),{},{mode:"signup"})));case 1:case"end":return r.stop()}}),r)})))()},tryLogin:function(t){var e=localStorage.getItem("userId"),r=localStorage.getItem("token"),n=localStorage.getItem("token"),a=+n-(new Date).getTime();a<0||(Qt=setTimeout((function(){return t.dispatch("autoLogout")}),a),t.commit("setUser",{userId:e,token:r}))},auth:function(t,e){return Object(O["a"])(regeneratorRuntime.mark((function r(){var n,a,i,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(ee),"signup"===e.mode&&(n="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(ee)),r.next=4,fetch(n,{method:"POST",body:JSON.stringify({email:e.email,password:e.password,returnSecureToken:!0})});case 4:return a=r.sent,r.next=7,a.json();case 7:if(i=r.sent,a.ok){r.next=10;break}throw new Error("Failed to login!");case 10:c=1e3*+i.expiresIn,o=(new Date).getTime()+c,Qt=setTimeout((function(){t.dispatch("autoLogout")}),c),localStorage.setItem("token",i.idToken),localStorage.setItem("userId",i.localId),localStorage.setItem("tokenExpiration",o),t.commit("setUser",{token:i.idToken,userId:i.localId});case 17:case"end":return r.stop()}}),r)})))()},autoLogout:function(t){t.dispatch("logout"),t.dispatch("setAutoLogout")}},de={userId:function(t){return t.userId},token:function(t){return t.token},isAuth:function(t){return!!t.token},didAutoLogout:function(t){return t.didAutoLogout}},be={setUser:function(t,e){t.token=e.token,t.userId=e.userId},setAutoLogout:function(t){t.didAutoLogout=!0}},fe={state:function(){return{userId:null,token:null,didAutoLogout:!1}},actions:le,getters:de,mutations:be},je=Object(Xt["a"])({modules:{instructors:ie,requests:ue,auth:fe}}),Oe=[{path:"/",redirect:"/instructors"},{path:"/instructors",component:A},{path:"/instructors/:id",component:P,props:!0,children:[{path:"contact",component:It}]},{path:"/register",component:bt,meta:{requiresAuth:!0}},{path:"/requests",component:$t,meta:{requiresAuth:!0}},{path:"/auth",component:Kt,meta:{requiresUnauth:!0}},{path:"/:notFound(.*)",component:Wt}],he=Object(a["a"])({history:Object(a["b"])("/vue-finder/"),routes:Oe});he.beforeEach((function(t,e,r){t.meta.requiresAuth&&!je.getters.isAuth?r("/auth"):t.meta.requiresUnauth&&je.getters.isAuth?r(!1):r()}));var me=he;function pe(t,e,r,a,i,c){var o=Object(n["z"])("TheHeader"),s=Object(n["z"])("router-view");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(o),Object(n["i"])(s,null,{default:Object(n["H"])((function(t){return[Object(n["i"])(n["c"],{name:"route",mode:"out-in"},{default:Object(n["H"])((function(){return[(Object(n["r"])(),Object(n["f"])(Object(n["A"])(t.Component)))]})),_:2},1024)]})),_:1})],64)}var ve=Object(n["K"])("data-v-35b8b45d");Object(n["u"])("data-v-35b8b45d");var ge=Object(n["h"])("Find a Yoga Instructor"),ye=Object(n["h"])("All Instructors"),ke={key:0},Ie=Object(n["h"])("Requests"),we={key:1},Fe=Object(n["h"])("Login"),_e={key:2},xe=Object(n["h"])("Logout");Object(n["s"])();var Ve=ve((function(t,e,r,a,i,c){var o=Object(n["z"])("router-link"),s=Object(n["z"])("base-button");return Object(n["r"])(),Object(n["f"])("header",null,[Object(n["i"])("nav",null,[Object(n["i"])("h1",null,[Object(n["i"])(o,{to:"/"},{default:ve((function(){return[ge]})),_:1})]),Object(n["i"])("ul",null,[Object(n["i"])("li",null,[Object(n["i"])(o,{to:"/instructors"},{default:ve((function(){return[ye]})),_:1})]),c.isLoggedIn?(Object(n["r"])(),Object(n["f"])("li",ke,[Object(n["i"])(o,{to:"/requests"},{default:ve((function(){return[Ie]})),_:1})])):(Object(n["r"])(),Object(n["f"])("li",we,[Object(n["i"])(o,{to:"/auth"},{default:ve((function(){return[Fe]})),_:1})])),c.isLoggedIn?(Object(n["r"])(),Object(n["f"])("li",_e,[Object(n["i"])(s,{onClick:c.logout},{default:ve((function(){return[xe]})),_:1},8,["onClick"])])):Object(n["g"])("",!0)])])])})),qe={computed:{isLoggedIn:function(){return this.$store.getters.isAuth}},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.replace("/instructors")}}};r("96a6");qe.render=Ve,qe.__scopeId="data-v-35b8b45d";var Ce=qe,Re={components:{TheHeader:Ce},computed:{didAutoLogout:function(){return this.$store.getters.didAutoLogout}},watch:{didAutoLogout:function(t,e){t&&t!==e&&this.$router.replace("/instructors")}},created:function(){this.$store.dispatch("tryLogin")}};r("dba3");Re.render=pe;var Le=Re,Ne=Object(n["K"])("data-v-5296fcf3");Object(n["u"])("data-v-5296fcf3");var $e={class:"card"};Object(n["s"])();var Se=Ne((function(t,e){return Object(n["r"])(),Object(n["f"])("div",$e,[Object(n["y"])(t.$slots,"default",{},void 0,!0)])}));r("4aae");const ze={};ze.render=Se,ze.__scopeId="data-v-5296fcf3";var Ae=ze,Te=Object(n["K"])("data-v-2b15d497"),Ue=Te((function(t,e,r,a,i,c){return Object(n["r"])(),Object(n["f"])("span",{class:["badge",r.type]},Object(n["C"])(r.title),3)})),Ee={props:{type:{type:String,required:!0},title:{type:String,required:!0}}};r("3e3a");Ee.render=Ue,Ee.__scopeId="data-v-2b15d497";var Be=Ee,Pe=Object(n["K"])("data-v-2389dacc");Object(n["u"])("data-v-2389dacc");var Ke={class:"spinner"},He=Object(n["i"])("div",{class:"lds-roller"},[Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div")],-1);Object(n["s"])();var Me=Pe((function(t,e){return Object(n["r"])(),Object(n["f"])("div",Ke,[He])}));r("ef59");const De={};De.render=Me,De.__scopeId="data-v-2389dacc";var Je=De,Ye=(r("c7cd"),Object(n["K"])("data-v-6c52006e"));Object(n["u"])("data-v-6c52006e");var Ge={key:0,open:""},Qe={key:0},We=Object(n["h"])("Close");Object(n["s"])();var Xe=Ye((function(t,e,r,a,i,c){var o=Object(n["z"])("base-button");return Object(n["r"])(),Object(n["f"])(n["b"],{to:"body"},[r.show?(Object(n["r"])(),Object(n["f"])("div",{key:0,onClick:e[1]||(e[1]=function(){return c.tryClose&&c.tryClose.apply(c,arguments)}),class:"backdrop"})):Object(n["g"])("",!0),Object(n["i"])(n["c"],{name:"dialog"},{default:Ye((function(){return[r.show?(Object(n["r"])(),Object(n["f"])("dialog",Ge,[Object(n["i"])("header",null,[Object(n["y"])(t.$slots,"header",{},(function(){return[Object(n["i"])("h2",null,Object(n["C"])(r.title),1)]}),{},!0)]),Object(n["i"])("section",null,[Object(n["y"])(t.$slots,"default",{},void 0,!0)]),r.fixed?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("menu",Qe,[Object(n["y"])(t.$slots,"actions",{},(function(){return[Object(n["i"])(o,{onClick:c.tryClose},{default:Ye((function(){return[We]})),_:1},8,["onClick"])]}),{},!0)]))])):Object(n["g"])("",!0)]})),_:3})])})),Ze={props:{show:{type:Boolean,required:!0},title:{type:String,required:!1},fixed:{type:Boolean,required:!1,default:!1}},emits:["close"],methods:{tryClose:function(){this.fixed||this.$emit("close")}}};r("c6bb");Ze.render=Xe,Ze.__scopeId="data-v-6c52006e";var tr=Ze,er=Object(n["e"])(Le);er.component("base-card",Ae),er.component("base-badge",Be),er.component("base-button",w),er.component("base-spinner",Je),er.component("base-dialog",tr),er.use(je).use(me),er.mount("#app")},"5d6a":function(t,e,r){},6670:function(t,e,r){"use strict";r("f01a")},"669a":function(t,e,r){},"8e8a":function(t,e,r){},"91af":function(t,e,r){},"96a6":function(t,e,r){"use strict";r("fb13")},"99ee":function(t,e,r){"use strict";r("3fab")},a77c:function(t,e,r){},a86b:function(t,e,r){},a8b7:function(t,e,r){},bd8b:function(t,e,r){"use strict";r("d087")},c6bb:function(t,e,r){"use strict";r("246e")},d087:function(t,e,r){},d6ef:function(t,e,r){"use strict";r("91af")},dba3:function(t,e,r){"use strict";r("0298")},e872:function(t,e,r){},eadd:function(t,e,r){"use strict";r("8e8a")},edc8:function(t,e,r){"use strict";r("a77c")},ef59:function(t,e,r){"use strict";r("e872")},f01a:function(t,e,r){},f122:function(t,e,r){"use strict";r("a8b7")},fb13:function(t,e,r){}});
//# sourceMappingURL=app.1a7cfcb6.js.map