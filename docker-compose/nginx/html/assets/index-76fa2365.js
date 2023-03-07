import{q as D,r as S,aG as yt,aH as wt,D as f,aI as we,aJ as Ct,aK as te,aL as _t,p as Rt,L as Ae,aM as St,y as F,R as $t,$ as fe,aN as Tt,Z as zt,N as kt,aO as Pt,j as s,k as y,n as $,l as N,m as Lt,s as Wt,u as Be,aP as At,aQ as Ce,aR as re,a5 as Bt,w as oe,ar as se,t as Et,v as M,aS as jt,J as It,z as E,A as Ot,C as _e,V as Re,E as Q,aT as Nt,aU as Ft,aV as Ht,aW as Mt,aX as Dt,aa as Vt,aY as Ut,ab as K,ac as ie,af as z,ak as ee,aw as Se,al as $e,ad as P,an as Y,am as Ee,ae as Te,ap as G,aZ as Xt,ao as Gt,a_ as Yt,a$ as Kt}from"./index-65843fcc.js";const qt=we(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[we("&::-webkit-scrollbar",{width:0,height:0})]),Jt=D({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=S(null);function n(o){!(o.currentTarget.offsetWidth<o.currentTarget.scrollWidth)||o.deltaY===0||(o.currentTarget.scrollLeft+=o.deltaY+o.deltaX,o.preventDefault())}const r=yt();return qt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:wt,ssr:r}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...o){var h;(h=e.value)===null||h===void 0||h.scrollTo(...o)}})},render(){return f("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Zt=/\s/;function Qt(e){for(var n=e.length;n--&&Zt.test(e.charAt(n)););return n}var ea=/^\s+/;function ta(e){return e&&e.slice(0,Qt(e)+1).replace(ea,"")}var ze=0/0,aa=/^[-+]0x[0-9a-f]+$/i,na=/^0b[01]+$/i,ra=/^0o[0-7]+$/i,oa=parseInt;function ke(e){if(typeof e=="number")return e;if(Ct(e))return ze;if(te(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=te(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=ta(e);var r=na.test(e);return r||ra.test(e)?oa(e.slice(2),r?2:8):aa.test(e)?ze:+e}var sa=function(){return _t.Date.now()};const le=sa;var ia="Expected a function",la=Math.max,da=Math.min;function ca(e,n,r){var b,o,h,p,d,u,v=0,R=!1,c=!1,m=!0;if(typeof e!="function")throw new TypeError(ia);n=ke(n)||0,te(r)&&(R=!!r.leading,c="maxWait"in r,h=c?la(ke(r.maxWait)||0,n):h,m="trailing"in r?!!r.trailing:m);function C(x){var W=b,I=o;return b=o=void 0,v=x,p=e.apply(I,W),p}function _(x){return v=x,d=setTimeout(L,n),R?C(x):p}function A(x){var W=x-u,I=x-v,H=n-W;return c?da(H,h-I):H}function T(x){var W=x-u,I=x-v;return u===void 0||W>=n||W<0||c&&I>=h}function L(){var x=le();if(T(x))return g(x);d=setTimeout(L,A(x))}function g(x){return d=void 0,m&&b?C(x):(b=o=void 0,p)}function w(){d!==void 0&&clearTimeout(d),v=0,b=u=o=d=void 0}function j(){return d===void 0?p:g(le())}function X(){var x=le(),W=T(x);if(b=arguments,o=this,u=x,W){if(d===void 0)return _(u);if(c)return clearTimeout(d),d=setTimeout(L,n),C(u)}return d===void 0&&(d=setTimeout(L,n)),p}return X.cancel=w,X.flush=j,X}var fa="Expected a function";function de(e,n,r){var b=!0,o=!0;if(typeof e!="function")throw new TypeError(fa);return te(r)&&(b="leading"in r?!!r.leading:b,o="trailing"in r?!!r.trailing:o),ca(e,n,{leading:b,maxWait:n,trailing:o})}const ba=D({name:"Add",render(){return f("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ue=Rt("n-tabs"),je={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ua=D({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:je,setup(e){const n=Ae(ue,null);return n||St("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return f("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),pa=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Pt(je,["displayDirective"])),be=D({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:pa,setup(e){const{mergedClsPrefixRef:n,valueRef:r,typeRef:b,closableRef:o,tabStyleRef:h,tabChangeIdRef:p,onBeforeLeaveRef:d,triggerRef:u,handleAdd:v,activateTab:R,handleClose:c}=Ae(ue);return{trigger:u,mergedClosable:F(()=>{if(e.internalAddable)return!1;const{closable:m}=e;return m===void 0?o.value:m}),style:h,clsPrefix:n,value:r,type:b,handleClose(m){m.stopPropagation(),!e.disabled&&c(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){v();return}const{name:m}=e,C=++p.id;if(m!==r.value){const{value:_}=d;_?Promise.resolve(_(e.name,r.value)).then(A=>{A&&p.id===C&&R(m)}):R(m)}}}},render(){const{internalAddable:e,clsPrefix:n,name:r,disabled:b,label:o,tab:h,value:p,mergedClosable:d,style:u,trigger:v,$slots:{default:R}}=this,c=o??h;return f("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?f("div",{class:`${n}-tabs-tab-pad`}):null,f("div",Object.assign({key:r,"data-name":r,"data-disabled":b?!0:void 0},$t({class:[`${n}-tabs-tab`,p===r&&`${n}-tabs-tab--active`,b&&`${n}-tabs-tab--disabled`,d&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:v==="click"?this.activateTab:void 0,onMouseenter:v==="hover"?this.activateTab:void 0,style:e?void 0:u},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),f("span",{class:`${n}-tabs-tab__label`},e?f(fe,null,f("div",{class:`${n}-tabs-tab__height-placeholder`}," "),f(Tt,{clsPrefix:n},{default:()=>f(ba,null)})):R?R():typeof c=="object"?c:zt(c??r)),d&&this.type==="card"?f(kt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:b}):null))}}),va=s("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[y("segment-type",[s("tabs-rail",[$("&.transition-disabled","color: red;",[s("tabs-tab",`
 transition: none;
 `)])])]),y("left, right",`
 flex-direction: row;
 `,[s("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),s("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),y("right",`
 flex-direction: row-reverse;
 `,[s("tabs-bar",`
 left: 0;
 `)]),y("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[s("tabs-bar",`
 top: 0;
 `)]),s("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[s("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[s("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[y("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),$("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),y("flex",[s("tabs-nav",{width:"100%"},[s("tabs-wrapper",{width:"100%"},[s("tabs-tab",{marginRight:0})])])]),s("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[N("prefix, suffix",`
 display: flex;
 align-items: center;
 `),N("prefix","padding-right: 16px;"),N("suffix","padding-left: 16px;")]),s("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[y("shadow-before",[$("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),y("shadow-after",[$("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),s("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[$("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),$("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),$("&::before",`
 left: 0;
 `),$("&::after",`
 right: 0;
 `)]),s("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),s("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),s("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),s("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("disabled",{cursor:"not-allowed"}),N("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),N("label",`
 display: flex;
 align-items: center;
 `)]),s("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[$("&.transition-disabled",`
 transition: none;
 `),y("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),s("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),s("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[$("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),$("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),$("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),$("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),$("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),s("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),y("line-type, bar-type",[s("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[$("&:hover",{color:"var(--n-tab-text-color-hover)"}),y("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),y("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),s("tabs-nav",[y("line-type",[N("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),y("card-type",[N("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[y("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[N("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Lt("disabled",[$("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),y("closable","padding-right: 6px;"),y("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),y("disabled","color: var(--n-tab-text-color-disabled);")]),s("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),y("left, right",[s("tabs-wrapper",`
 flex-direction: column;
 `,[s("tabs-tab-wrapper",`
 flex-direction: column;
 `,[s("tabs-tab-pad",`
 height: var(--n-tab-gap);
 width: 100%;
 `)])]),s("tabs-nav-scroll-content",`
 border-bottom: none;
 `)]),y("left",[s("tabs-nav-scroll-content",`
 box-sizing: border-box;
 border-right: 1px solid var(--n-tab-border-color);
 `)]),y("right",[s("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `)]),y("bottom",[s("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 border-bottom: none;
 `)])])]),ha=Object.assign(Object.assign({},Be.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ga=D({name:"Tabs",props:ha,setup(e,{slots:n}){var r,b,o,h;const{mergedClsPrefixRef:p,inlineThemeDisabled:d}=Wt(e),u=Be("Tabs","-tabs",va,At,e,p),v=S(null),R=S(null),c=S(null),m=S(null),C=S(null),_=S(!0),A=S(!0),T=Ce(e,["labelSize","size"]),L=Ce(e,["activeName","value"]),g=S((b=(r=L.value)!==null&&r!==void 0?r:e.defaultValue)!==null&&b!==void 0?b:n.default?(h=(o=re(n.default())[0])===null||o===void 0?void 0:o.props)===null||h===void 0?void 0:h.name:null),w=Bt(L,g),j={id:0},X=F(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});oe(w,()=>{j.id=0,H(),pe()});function x(){var t;const{value:a}=w;return a===null?null:(t=v.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function W(t){if(e.type==="card")return;const{value:a}=R;if(a&&t){const i=`${p.value}-tabs-bar--disabled`,{barWidth:l,placement:B}=e;if(t.dataset.disabled==="true"?a.classList.add(i):a.classList.remove(i),["top","bottom"].includes(B)){if(I(["top","maxHeight","height"]),typeof l=="number"&&t.offsetWidth>=l){const k=Math.floor((t.offsetWidth-l)/2)+t.offsetLeft;a.style.left=`${k}px`,a.style.maxWidth=`${l}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(I(["left","maxWidth","width"]),typeof l=="number"&&t.offsetHeight>=l){const k=Math.floor((t.offsetHeight-l)/2)+t.offsetTop;a.style.top=`${k}px`,a.style.maxHeight=`${l}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function I(t){const{value:a}=R;if(a)for(const i of t)a.style[i]=""}function H(){if(e.type==="card")return;const t=x();t&&W(t)}function pe(t){var a;const i=(a=C.value)===null||a===void 0?void 0:a.$el;if(!i)return;const l=x();if(!l)return;const{scrollLeft:B,offsetWidth:k}=i,{offsetLeft:U,offsetWidth:Z}=l;B>U?i.scrollTo({top:0,left:U,behavior:"smooth"}):U+Z>B+k&&i.scrollTo({top:0,left:U+Z-k,behavior:"smooth"})}const q=S(null);let ae=0,O=null;function Ie(t){const a=q.value;if(a){ae=t.getBoundingClientRect().height;const i=`${ae}px`,l=()=>{a.style.height=i,a.style.maxHeight=i};O?(l(),O(),O=null):O=l}}function Oe(t){const a=q.value;if(a){const i=t.getBoundingClientRect().height,l=()=>{document.body.offsetHeight,a.style.maxHeight=`${i}px`,a.style.height=`${Math.max(ae,i)}px`};O?(O(),O=null,l()):O=l}}function Ne(){const t=q.value;t&&(t.style.maxHeight="",t.style.height="")}const ve={value:[]},he=S("next");function Fe(t){const a=w.value;let i="next";for(const l of ve.value){if(l===a)break;if(l===t){i="prev";break}}he.value=i,He(t)}function He(t){const{onActiveNameChange:a,onUpdateValue:i,"onUpdate:value":l}=e;a&&Q(a,t),i&&Q(i,t),l&&Q(l,t),g.value=t}function Me(t){const{onClose:a}=e;a&&Q(a,t)}function ge(){const{value:t}=R;if(!t)return;const a="transition-disabled";t.classList.add(a),H(),t.classList.remove(a)}let me=0;function De(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||me===t.contentRect.width)return;me=t.contentRect.width;const{type:i}=e;(i==="line"||i==="bar")&&ge(),i!=="segment"&&ne((a=C.value)===null||a===void 0?void 0:a.$el)}const Ve=de(De,64);oe([()=>e.justifyContent,()=>e.size],()=>{se(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ge()})});const J=S(!1);function Ue(t){var a;const{target:i,contentRect:{width:l}}=t,B=i.parentElement.offsetWidth;if(!J.value)B<l&&(J.value=!0);else{const{value:k}=m;if(!k)return;B-l>k.$el.offsetWidth&&(J.value=!1)}ne((a=C.value)===null||a===void 0?void 0:a.$el)}const Xe=de(Ue,64);function Ge(){const{onAdd:t}=e;t&&t(),se(()=>{const a=x(),{value:i}=C;!a||!i||i.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function ne(t){if(!t)return;const{scrollLeft:a,scrollWidth:i,offsetWidth:l}=t;_.value=a<=0,A.value=a+l>=i}const Ye=de(t=>{ne(t.target)},64);Et(ue,{triggerRef:M(e,"trigger"),tabStyleRef:M(e,"tabStyle"),paneClassRef:M(e,"paneClass"),paneStyleRef:M(e,"paneStyle"),mergedClsPrefixRef:p,typeRef:M(e,"type"),closableRef:M(e,"closable"),valueRef:w,tabChangeIdRef:j,onBeforeLeaveRef:M(e,"onBeforeLeave"),activateTab:Fe,handleClose:Me,handleAdd:Ge}),jt(()=>{H(),pe()}),It(()=>{const{value:t}=c;if(!t||["left","right"].includes(e.placement))return;const{value:a}=p,i=`${a}-tabs-nav-scroll-wrapper--shadow-before`,l=`${a}-tabs-nav-scroll-wrapper--shadow-after`;_.value?t.classList.remove(i):t.classList.add(i),A.value?t.classList.remove(l):t.classList.add(l)});const xe=S(null);oe(w,()=>{if(e.type==="segment"){const t=xe.value;t&&se(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Ke={syncBarPosition:()=>{H()}},ye=F(()=>{const{value:t}=T,{type:a}=e,i={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],l=`${t}${i}`,{self:{barColor:B,closeIconColor:k,closeIconColorHover:U,closeIconColorPressed:Z,tabColor:qe,tabBorderColor:Je,paneTextColor:Ze,tabFontWeight:Qe,tabBorderRadius:et,tabFontWeightActive:tt,colorSegment:at,fontWeightStrong:nt,tabColorSegment:rt,closeSize:ot,closeIconSize:st,closeColorHover:it,closeColorPressed:lt,closeBorderRadius:dt,[E("panePadding",t)]:ct,[E("tabPadding",l)]:ft,[E("tabPaddingVertical",l)]:bt,[E("tabGap",l)]:ut,[E("tabTextColor",a)]:pt,[E("tabTextColorActive",a)]:vt,[E("tabTextColorHover",a)]:ht,[E("tabTextColorDisabled",a)]:gt,[E("tabFontSize",t)]:mt},common:{cubicBezierEaseInOut:xt}}=u.value;return{"--n-bezier":xt,"--n-color-segment":at,"--n-bar-color":B,"--n-tab-font-size":mt,"--n-tab-text-color":pt,"--n-tab-text-color-active":vt,"--n-tab-text-color-disabled":gt,"--n-tab-text-color-hover":ht,"--n-pane-text-color":Ze,"--n-tab-border-color":Je,"--n-tab-border-radius":et,"--n-close-size":ot,"--n-close-icon-size":st,"--n-close-color-hover":it,"--n-close-color-pressed":lt,"--n-close-border-radius":dt,"--n-close-icon-color":k,"--n-close-icon-color-hover":U,"--n-close-icon-color-pressed":Z,"--n-tab-color":qe,"--n-tab-font-weight":Qe,"--n-tab-font-weight-active":tt,"--n-tab-padding":ft,"--n-tab-padding-vertical":bt,"--n-tab-gap":ut,"--n-pane-padding":ct,"--n-font-weight-strong":nt,"--n-tab-color-segment":rt}}),V=d?Ot("tabs",F(()=>`${T.value[0]}${e.type[0]}`),ye,e):void 0;return Object.assign({mergedClsPrefix:p,mergedValue:w,renderedNames:new Set,tabsRailElRef:xe,tabsPaneWrapperRef:q,tabsElRef:v,barElRef:R,addTabInstRef:m,xScrollInstRef:C,scrollWrapperElRef:c,addTabFixed:J,tabWrapperStyle:X,handleNavResize:Ve,mergedSize:T,handleScroll:Ye,handleTabsResize:Xe,cssVars:d?void 0:ye,themeClass:V==null?void 0:V.themeClass,animationDirection:he,renderNameListRef:ve,onAnimationBeforeLeave:Ie,onAnimationEnter:Oe,onAnimationAfterEnter:Ne,onRender:V==null?void 0:V.onRender},Ke)},render(){const{mergedClsPrefix:e,type:n,placement:r,addTabFixed:b,addable:o,mergedSize:h,renderNameListRef:p,onRender:d,$slots:{default:u,prefix:v,suffix:R}}=this;d==null||d();const c=u?re(u()).filter(g=>g.type.__TAB_PANE__===!0):[],m=u?re(u()).filter(g=>g.type.__TAB__===!0):[],C=!m.length,_=n==="card",A=n==="segment",T=!_&&!A&&this.justifyContent;p.value=[];const L=()=>{const g=f("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},T?null:f("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),C?c.map((w,j)=>(p.value.push(w.props.name),ce(f(be,Object.assign({},w.props,{internalCreatedByPane:!0,internalLeftPadded:j!==0&&(!T||T==="center"||T==="start"||T==="end")}),w.children?{default:w.children.tab}:void 0)))):m.map((w,j)=>(p.value.push(w.props.name),ce(j!==0&&!T?We(w):w))),!b&&o&&_?Le(o,(C?c.length:m.length)!==0):null,T?null:f("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return f("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},_&&o?f(Re,{onResize:this.handleTabsResize},{default:()=>g}):g,_?f("div",{class:`${e}-tabs-pad`}):null,_?null:f("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return f("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${h}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${r}`],style:this.cssVars},f("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${r}`,`${e}-tabs-nav`]},_e(v,g=>g&&f("div",{class:`${e}-tabs-nav__prefix`},g)),A?f("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},C?c.map((g,w)=>(p.value.push(g.props.name),f(be,Object.assign({},g.props,{internalCreatedByPane:!0,internalLeftPadded:w!==0}),g.children?{default:g.children.tab}:void 0))):m.map((g,w)=>(p.value.push(g.props.name),w===0?g:We(g)))):f(Re,{onResize:this.handleNavResize},{default:()=>f("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(r)?f(Jt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:L}):f("div",{class:`${e}-tabs-nav-y-scroll`},L()))}),b&&o&&_?Le(o,!0):null,_e(R,g=>g&&f("div",{class:`${e}-tabs-nav__suffix`},g))),C&&(this.animated?f("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},Pe(c,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Pe(c,this.mergedValue,this.renderedNames)))}});function Pe(e,n,r,b,o,h,p){const d=[];return e.forEach(u=>{const{name:v,displayDirective:R,"display-directive":c}=u.props,m=_=>R===_||c===_,C=n===v;if(u.key!==void 0&&(u.key=v),C||m("show")||m("show:lazy")&&r.has(v)){r.has(v)||r.add(v);const _=!m("if");d.push(_?Nt(u,[[Ft,C]]):u)}}),p?f(Ht,{name:`${p}-transition`,onBeforeLeave:b,onEnter:o,onAfterEnter:h},{default:()=>d}):d}function Le(e,n){return f(be,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function We(e){const n=Mt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function ce(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const ma={class:"p-4 space-y-5 min-h-[200px]"},xa={class:"space-y-6"},ya={class:"flex items-center space-x-4"},wa={class:"flex-shrink-0 w-[100px]"},Ca={class:"flex items-center space-x-4"},_a=["onClick"],Ra={class:"text-xl"},Sa={class:"flex items-center space-x-4"},$a={class:"flex-shrink-0 w-[100px]"},Ta={class:"flex items-center space-x-4"},za=["onClick"],ka={class:"text-sm"},Pa=D({__name:"General",emits:["update"],setup(e,{emit:n}){const r=Dt(),b=Vt();Ut();const o=F(()=>r.theme),h=F(()=>b.userInfo);S(h.value.avatar??""),S(h.value.name??""),S(h.value.description??"");const p=F({get(){return r.language},set(v){r.setLanguage(v)}}),d=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],u=[{label:"中文",key:"zh-CN",value:"zh-CN"},{label:"English",key:"en-US",value:"en-US"}];return(v,R)=>(K(),ie("div",ma,[z("div",xa,[z("div",ya,[z("span",wa,ee(v.$t("setting.theme")),1),z("div",Ca,[(K(),ie(fe,null,Se(d,c=>z("a",{key:c.key,class:$e(["flex items-center justify-center h-8 px-4 border rounded-md cursor-pointer dark:border-neutral-700",c.key===P(o)&&["bg-[#4ca85e]","border-[#4ca85e]","text-white"]]),onClick:m=>P(r).setTheme(c.key)},[z("span",Ra,[Y(P(Ee),{icon:c.icon},null,8,["icon"])])],10,_a)),64))])]),z("div",Sa,[z("span",$a,ee(v.$t("setting.language")),1),z("div",Ta,[(K(),ie(fe,null,Se(u,c=>z("a",{key:c.key,class:$e(["flex items-center justify-center h-8 px-4 border rounded-md cursor-pointer dark:border-neutral-700",c.key===P(p)&&["bg-[#4ca85e]","border-[#4ca85e]","text-white"]]),onClick:m=>P(r).setLanguage(c.key)},[z("span",ka,ee(c.label),1)],10,za)),64))])])])]))}}),La={class:"ml-2"},Wa={class:"min-h-[100px]"},Ba=D({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(e,{emit:n}){const r=e,b=S("General"),o=S(!1),h=F({get(){return r.visible},set(d){n("update:visible",d)}});function p(){o.value=!0,setTimeout(()=>{o.value=!1},0)}return(d,u)=>(K(),Te(P(Kt),{show:P(h),"onUpdate:show":u[1]||(u[1]=v=>Yt(h)?h.value=v:null),"auto-focus":!1},{default:G(()=>[Y(P(Xt),{role:"dialog","aria-modal":"true",bordered:!1,style:{width:"100%","max-width":"640px"}},{default:G(()=>[Y(P(ga),{value:b.value,"onUpdate:value":u[0]||(u[0]=v=>b.value=v),type:"line",animated:""},{default:G(()=>[Y(P(ua),{name:"General",tab:"General"},{tab:G(()=>[Y(P(Ee),{class:"text-lg",icon:"ri:file-user-line"}),z("span",La,ee(d.$t("setting.general")),1)]),default:G(()=>[z("div",Wa,[o.value?Gt("",!0):(K(),Te(Pa,{key:0,onUpdate:p}))])]),_:1})]),_:1},8,["value"])]),_:1})]),_:1},8,["show"]))}});export{Ba as default};
