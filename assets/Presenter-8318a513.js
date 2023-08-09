import{o as d,f as y,g as e,B as k,C as D,v as h,d as M,i as B,a as P,D as S,x as m,E as H,_ as z,G as I,H as R,c as b,b as A,I as $,J as E,K as L,L as j,M as q,N as F,O,P as U,Q as W,h as i,p as u,t as Z,n as x,j as N,R as V,S as T,q as G,T as J,l as K,U as w,V as Q,W as X,F as Y,X as ee,Y as te,w as se,Z as oe,$ as le,a0 as ne,a1 as ae,a2 as ie,a3 as re,a4 as ce}from"./index-478e4f0a.js";import{N as ue}from"./NoteDisplay-01a0f9d8.js";import de from"./DrawingControls-1e67a399.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ve=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[ve];function me(o,n){return d(),y("svg",_e,pe)}const he={name:"carbon-renew",render:me},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function ke(o,n){return d(),y("svg",fe,we)}const Se={name:"carbon-time",render:ke},ye="/intro-vue-3-workshop-slides-2022-2/assets/logo-title-horizontal-96c3c915.png";function Ce(){const o=k(Date.now()),n=D({interval:1e3}),_=h(()=>{const t=(n.value-o.value)/1e3,l=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${l}`});function v(){o.value=n.value}return{timer:_,resetTimer:v}}const be=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const n=o;B(P);const _=h(()=>{var t,l,s;return(s=(l=(t=S.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.note}),v=h(()=>{var t,l,s;return(s=(l=(t=S.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.noteHTML});return(t,l)=>(d(),m(ue,{class:H(n.class),note:_.value,"note-html":v.value},null,8,["class","note","note-html"]))}}),$e=z(be,[["__file","/home/runner/work/intro-vue-3-workshop-slides-2022-2/intro-vue-3-workshop-slides-2022-2/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(ee("data-v-574fd206"),o=o(),te(),o),Ne={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:ye,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),Pe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He=f(()=>e("div",{class:"context"}," current ",-1)),ze=f(()=>e("div",{class:"context"}," next ",-1)),De={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},Re={class:"progress-bar"},Ae=M({__name:"Presenter",setup(o){B(P);const n=k();I(),R(n);const _=b.titleTemplate.replace("%s",b.title||"Slidev");A({title:`Presenter - ${_}`});const{timer:v,resetTimer:t}=Ce(),l=k([]),s=h(()=>$.value<E.value?{route:S.value,clicks:$.value+1}:L.value?{route:j.value,clicks:0}:null);return q(()=>{const C=n.value.querySelector("#slide-content"),r=F(O()),g=U();W(()=>{if(!g.value||oe.value||!le.value)return;const c=C.getBoundingClientRect(),a=(r.x-c.left)/c.width*100,p=(r.y-c.top)/c.height*100;if(!(a<0||a>100||p<0||p>100))return{x:a,y:p}},c=>{se.cursor=c})}),(C,r)=>{const g=Se,c=he;return d(),y(Y,null,[e("div",Ne,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...a)=>i(t)&&i(t)(...a))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Pe,Z(i(v)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(i(N))},[u(T,{key:"main",class:"h-full w-full"},{default:V(()=>[u(ne,{context:"presenter"})]),_:1}),He],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(i(N))},[s.value?(d(),m(T,{key:"next",class:"h-full w-full"},{default:V(()=>{var a;return[u(i(ie),{is:(a=s.value.route)==null?void 0:a.component,"clicks-elements":l.value,"onUpdate:clicksElements":r[1]||(r[1]=p=>l.value=p),clicks:s.value.clicks,"clicks-disabled":!1,class:H(i(ae)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):G("v-if",!0),ze],4),e("div",De,[(d(),m($e,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[u(re,{persist:!0})]),(d(),m(de,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(i(J)-1)/(i(K)-1)*100}%`})},null,4)])]),u(ce),u(X,{modelValue:i(w),"onUpdate:modelValue":r[2]||(r[2]=a=>Q(w)?w.value=a:null)},null,8,["modelValue"])],64)}}});const qe=z(Ae,[["__scopeId","data-v-574fd206"],["__file","/home/runner/work/intro-vue-3-workshop-slides-2022-2/intro-vue-3-workshop-slides-2022-2/node_modules/@slidev/client/internals/Presenter.vue"]]);export{qe as default};
