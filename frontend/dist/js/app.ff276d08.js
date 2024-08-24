(function(){"use strict";var e={1415:function(e,t,n){var r=n(5130),o=n(6768);const s={id:"app"};function a(e,t,n,r,a,u){const i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.bF)(i)])}var u={name:"App"},i=n(1241);const c=(0,i.A)(u,[["render",a]]);var l=c,p=n(951);const h={class:"container"},f=(0,o.Lk)("h1",null,"Share Your Thoughts",-1);function d(e,t,n,s,a,u){return(0,o.uX)(),(0,o.CE)("div",h,[f,(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.userInput=e),class:"text-box",placeholder:"Enter your thoughts here..."},null,512),[[r.Jo,a.userInput]]),(0,o.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>u.submitThoughts&&u.submitThoughts(...e)),class:"btn"},"Submit")])}n(4114);var v=n(586),b={data(){return{userInput:""}},methods:{async submitThoughts(){try{const e=await v.A.post("/api/generate-questions",{text:this.userInput});this.$router.push({name:"Page2",params:{questions:e.data.questions,originalText:this.userInput}})}catch(e){console.error("Error:",e),alert("An error occurred. Please try again.")}}}};const g=(0,i.A)(b,[["render",d]]);var m=g,y=n(4232);const x={class:"container"},w=(0,o.Lk)("h1",null,"Reflect on These Questions",-1),k=["onUpdate:modelValue","placeholder"];function T(e,t,n,s,a,u){return(0,o.uX)(),(0,o.CE)("div",x,[w,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.questions,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t},[(0,o.Lk)("p",null,(0,y.v_)(e),1),(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":e=>a.answers[t]=e,class:"text-box",placeholder:"Your answer to question "+(t+1)},null,8,k),[[r.Jo,a.answers[t]]])])))),128)),(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>u.submitAnswers&&u.submitAnswers(...e)),class:"btn"},"Submit")])}var A={data(){return{questions:this.$route.params.questions,originalText:this.$route.params.originalText,answers:["","",""]}},methods:{async submitAnswers(){try{const e=await v.A.post("/api/generate-speech",{originalText:this.originalText,questions:this.questions,answers:this.answers});this.$router.push({name:"Page3",params:{speech:e.data.speech}})}catch(e){console.error("Error:",e),alert("An error occurred. Please try again.")}}}};const E=(0,i.A)(A,[["render",T]]);var O=E;const P={class:"container"},C=(0,o.Lk)("h1",null,"Your Reframed Message",-1);function L(e,t,n,s,a,u){return(0,o.uX)(),(0,o.CE)("div",P,[C,(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.speech=e),class:"text-box",style:{height:"400px"}},null,512),[[r.Jo,a.speech]])])}var q={data(){return{speech:this.$route.params.speech}}};const S=(0,i.A)(q,[["render",L]]);var j=S;const I=[{path:"/",name:"FirstPage",component:m},{path:"/page2",name:"SecondPage",component:O},{path:"/page3",name:"ThirdPage",component:j}],X=(0,p.aE)({history:(0,p.LA)("/"),routes:I});var V=X;const $=(0,r.Ef)(l);$.config.errorHandler=(e,t,n)=>{console.error("Vue error: ",e),console.error("Error info: ",n)},$.use(V),$.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,s){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],s=e[l][2];for(var u=!0,i=0;i<r.length;i++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(u=!1,s<a&&(a=s));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,a=r[0],u=r[1],i=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(i)var l=i(n)}for(t&&t(r);c<a.length;c++)s=a[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1415)}));r=n.O(r)})();
//# sourceMappingURL=app.ff276d08.js.map