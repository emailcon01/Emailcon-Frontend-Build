import{r as C,R as w}from"./vendor-DTDMNvXd.js";function en(t){var e,n,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=en(t[e]))&&(a&&(a+=" "),a+=n)}else for(n in t)t[n]&&(a&&(a+=" "),a+=n);return a}function J(){for(var t,e,n=0,a="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=en(t))&&(a&&(a+=" "),a+=e);return a}const Et=t=>typeof t=="number"&&!isNaN(t),ot=t=>typeof t=="string",M=t=>typeof t=="function",Nt=t=>ot(t)||M(t)?t:null,Qt=t=>C.isValidElement(t)||ot(t)||M(t)||Et(t);function Yn(t,e,n){n===void 0&&(n=300);const{scrollHeight:a,style:r}=t;requestAnimationFrame(()=>{r.minHeight="initial",r.height=a+"px",r.transition=`all ${n}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)})})}function zt(t){let{enter:e,exit:n,appendPosition:a=!1,collapse:r=!0,collapseDuration:o=300}=t;return function(s){let{children:i,position:f,preventExitTransition:u,done:c,nodeRef:g,isIn:p,playToast:k}=s;const x=a?`${e}--${f}`:e,y=a?`${n}--${f}`:n,E=C.useRef(0);return C.useLayoutEffect(()=>{const b=g.current,h=x.split(" "),m=A=>{A.target===g.current&&(k(),b.removeEventListener("animationend",m),b.removeEventListener("animationcancel",m),E.current===0&&A.type!=="animationcancel"&&b.classList.remove(...h))};b.classList.add(...h),b.addEventListener("animationend",m),b.addEventListener("animationcancel",m)},[]),C.useEffect(()=>{const b=g.current,h=()=>{b.removeEventListener("animationend",h),r?Yn(b,c,o):c()};p||(u?h():(E.current=1,b.className+=` ${y}`,b.addEventListener("animationend",h)))},[p]),w.createElement(w.Fragment,null,i)}}function Ie(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const N=new Map;let At=[];const Jt=new Set,Un=t=>Jt.forEach(e=>e(t)),nn=()=>N.size>0;function an(t,e){var n;if(e)return!((n=N.get(e))==null||!n.isToastActive(t));let a=!1;return N.forEach(r=>{r.isToastActive(t)&&(a=!0)}),a}function rn(t,e){Qt(t)&&(nn()||At.push({content:t,options:e}),N.forEach(n=>{n.buildToast(t,e)}))}function Pe(t,e){N.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function Bn(t){const{subscribe:e,getSnapshot:n,setProps:a}=C.useRef(function(o){const s=o.containerId||1;return{subscribe(i){const f=function(c,g,p){let k=1,x=0,y=[],E=[],b=[],h=g;const m=new Map,A=new Set,O=()=>{b=Array.from(m.values()),A.forEach(v=>v())},R=v=>{E=v==null?[]:E.filter(T=>T!==v),O()},S=v=>{const{toastId:T,onOpen:L,updateId:B,children:V}=v.props,lt=B==null;v.staleId&&m.delete(v.staleId),m.set(T,v),E=[...E,v.props.toastId].filter(q=>q!==v.staleId),O(),p(Ie(v,lt?"added":"updated")),lt&&M(L)&&L(C.isValidElement(V)&&V.props)};return{id:c,props:h,observe:v=>(A.add(v),()=>A.delete(v)),toggle:(v,T)=>{m.forEach(L=>{T!=null&&T!==L.props.toastId||M(L.toggle)&&L.toggle(v)})},removeToast:R,toasts:m,clearQueue:()=>{x-=y.length,y=[]},buildToast:(v,T)=>{if((j=>{let{containerId:D,toastId:z,updateId:$}=j;const at=D?D!==c:c!==1,ht=m.has(z)&&$==null;return at||ht})(T))return;const{toastId:L,updateId:B,data:V,staleId:lt,delay:q}=T,ct=()=>{R(L)},Pt=B==null;Pt&&x++;const H={...h,style:h.toastStyle,key:k++,...Object.fromEntries(Object.entries(T).filter(j=>{let[D,z]=j;return z!=null})),toastId:L,updateId:B,data:V,closeToast:ct,isIn:!1,className:Nt(T.className||h.toastClassName),bodyClassName:Nt(T.bodyClassName||h.bodyClassName),progressClassName:Nt(T.progressClassName||h.progressClassName),autoClose:!T.isLoading&&(K=T.autoClose,ft=h.autoClose,K===!1||Et(K)&&K>0?K:ft),deleteToast(){const j=m.get(L),{onClose:D,children:z}=j.props;M(D)&&D(C.isValidElement(z)&&z.props),p(Ie(j,"removed")),m.delete(L),x--,x<0&&(x=0),y.length>0?S(y.shift()):O()}};var K,ft;H.closeButton=h.closeButton,T.closeButton===!1||Qt(T.closeButton)?H.closeButton=T.closeButton:T.closeButton===!0&&(H.closeButton=!Qt(h.closeButton)||h.closeButton);let ut=v;C.isValidElement(v)&&!ot(v.type)?ut=C.cloneElement(v,{closeToast:ct,toastProps:H,data:V}):M(v)&&(ut=v({closeToast:ct,toastProps:H,data:V}));const nt={content:ut,props:H,staleId:lt};h.limit&&h.limit>0&&x>h.limit&&Pt?y.push(nt):Et(q)?setTimeout(()=>{S(nt)},q):S(nt)},setProps(v){h=v},setToggle:(v,T)=>{m.get(v).toggle=T},isToastActive:v=>E.some(T=>T===v),getSnapshot:()=>b}}(s,o,Un);N.set(s,f);const u=f.observe(i);return At.forEach(c=>rn(c.content,c.options)),At=[],()=>{u(),N.delete(s)}},setProps(i){var f;(f=N.get(s))==null||f.setProps(i)},getSnapshot(){var i;return(i=N.get(s))==null?void 0:i.getSnapshot()}}}(t)).current;a(t);const r=C.useSyncExternalStore(e,n,n);return{getToastToRender:function(o){if(!r)return[];const s=new Map;return t.newestOnTop&&r.reverse(),r.forEach(i=>{const{position:f}=i.props;s.has(f)||s.set(f,[]),s.get(f).push(i)}),Array.from(s,i=>o(i[0],i[1]))},isToastActive:an,count:r==null?void 0:r.length}}function Hn(t){const[e,n]=C.useState(!1),[a,r]=C.useState(!1),o=C.useRef(null),s=C.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:i,pauseOnHover:f,closeToast:u,onClick:c,closeOnClick:g}=t;var p,k;function x(){n(!0)}function y(){n(!1)}function E(m){const A=o.current;s.canDrag&&A&&(s.didMove=!0,e&&y(),s.delta=t.draggableDirection==="x"?m.clientX-s.start:m.clientY-s.start,s.start!==m.clientX&&(s.canCloseOnClick=!1),A.style.transform=`translate3d(${t.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,A.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function b(){document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",b);const m=o.current;if(s.canDrag&&s.didMove&&m){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return r(!0),t.closeToast(),void t.collapseAll();m.style.transition="transform 0.2s, opacity 0.2s",m.style.removeProperty("transform"),m.style.removeProperty("opacity")}}(k=N.get((p={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||k.setToggle(p.id,p.fn),C.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||y(),window.addEventListener("focus",x),window.addEventListener("blur",y),()=>{window.removeEventListener("focus",x),window.removeEventListener("blur",y)}},[t.pauseOnFocusLoss]);const h={onPointerDown:function(m){if(t.draggable===!0||t.draggable===m.pointerType){s.didMove=!1,document.addEventListener("pointermove",E),document.addEventListener("pointerup",b);const A=o.current;s.canCloseOnClick=!0,s.canDrag=!0,A.style.transition="none",t.draggableDirection==="x"?(s.start=m.clientX,s.removalDistance=A.offsetWidth*(t.draggablePercent/100)):(s.start=m.clientY,s.removalDistance=A.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(m){const{top:A,bottom:O,left:R,right:S}=o.current.getBoundingClientRect();m.nativeEvent.type!=="touchend"&&t.pauseOnHover&&m.clientX>=R&&m.clientX<=S&&m.clientY>=A&&m.clientY<=O?y():x()}};return i&&f&&(h.onMouseEnter=y,t.stacked||(h.onMouseLeave=x)),g&&(h.onClick=m=>{c&&c(m),s.canCloseOnClick&&u()}),{playToast:x,pauseToast:y,isRunning:e,preventExitTransition:a,toastRef:o,eventHandlers:h}}function Wn(t){let{delay:e,isRunning:n,closeToast:a,type:r="default",hide:o,className:s,style:i,controlledProgress:f,progress:u,rtl:c,isIn:g,theme:p}=t;const k=o||f&&u===0,x={...i,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};f&&(x.transform=`scaleX(${u})`);const y=J("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":c}),E=M(s)?s({rtl:c,type:r,defaultClassName:y}):J(y,s),b={[f&&u>=1?"onTransitionEnd":"onAnimationEnd"]:f&&u<1?null:()=>{g&&a()}};return w.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":k},w.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${r}`}),w.createElement("div",{role:"progressbar","aria-hidden":k?"true":"false","aria-label":"notification timer",className:E,style:x,...b}))}let Xn=1;const on=()=>""+Xn++;function Gn(t){return t&&(ot(t.toastId)||Et(t.toastId))?t.toastId:on()}function vt(t,e){return rn(t,e),e.toastId}function Ft(t,e){return{...e,type:e&&e.type||t,toastId:Gn(e)}}function Ct(t){return(e,n)=>vt(e,Ft(t,n))}function I(t,e){return vt(t,Ft("default",e))}I.loading=(t,e)=>vt(t,Ft("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),I.promise=function(t,e,n){let a,{pending:r,error:o,success:s}=e;r&&(a=ot(r)?I.loading(r,n):I.loading(r.render,{...n,...r}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},f=(c,g,p)=>{if(g==null)return void I.dismiss(a);const k={type:c,...i,...n,data:p},x=ot(g)?{render:g}:g;return a?I.update(a,{...k,...x}):I(x.render,{...k,...x}),p},u=M(t)?t():t;return u.then(c=>f("success",s,c)).catch(c=>f("error",o,c)),u},I.success=Ct("success"),I.info=Ct("info"),I.error=Ct("error"),I.warning=Ct("warning"),I.warn=I.warning,I.dark=(t,e)=>vt(t,Ft("default",{theme:"dark",...e})),I.dismiss=function(t){(function(e){var n;if(nn()){if(e==null||ot(n=e)||Et(n))N.forEach(a=>{a.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const a=N.get(e.containerId);a?a.removeToast(e.id):N.forEach(r=>{r.removeToast(e.id)})}}else At=At.filter(a=>e!=null&&a.options.toastId!==e)})(t)},I.clearWaitingQueue=function(t){t===void 0&&(t={}),N.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},I.isActive=an,I.update=function(t,e){e===void 0&&(e={});const n=((a,r)=>{var o;let{containerId:s}=r;return(o=N.get(s||1))==null?void 0:o.toasts.get(a)})(t,e);if(n){const{props:a,content:r}=n,o={delay:100,...a,...e,toastId:e.toastId||t,updateId:on()};o.toastId!==t&&(o.staleId=t);const s=o.render||r;delete o.render,vt(s,o)}},I.done=t=>{I.update(t,{progress:1})},I.onChange=function(t){return Jt.add(t),()=>{Jt.delete(t)}},I.play=t=>Pe(!0,t),I.pause=t=>Pe(!1,t);const Vn=typeof window<"u"?C.useLayoutEffect:C.useEffect,St=t=>{let{theme:e,type:n,isLoading:a,...r}=t;return w.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Wt={info:function(t){return w.createElement(St,{...t},w.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return w.createElement(St,{...t},w.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return w.createElement(St,{...t},w.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return w.createElement(St,{...t},w.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return w.createElement("div",{className:"Toastify__spinner"})}},qn=t=>{const{isRunning:e,preventExitTransition:n,toastRef:a,eventHandlers:r,playToast:o}=Hn(t),{closeButton:s,children:i,autoClose:f,onClick:u,type:c,hideProgressBar:g,closeToast:p,transition:k,position:x,className:y,style:E,bodyClassName:b,bodyStyle:h,progressClassName:m,progressStyle:A,updateId:O,role:R,progress:S,rtl:v,toastId:T,deleteToast:L,isIn:B,isLoading:V,closeOnClick:lt,theme:q}=t,ct=J("Toastify__toast",`Toastify__toast-theme--${q}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":v},{"Toastify__toast--close-on-click":lt}),Pt=M(y)?y({rtl:v,position:x,type:c,defaultClassName:ct}):J(ct,y),H=function(nt){let{theme:j,type:D,isLoading:z,icon:$}=nt,at=null;const ht={theme:j,type:D};return $===!1||(M($)?at=$({...ht,isLoading:z}):C.isValidElement($)?at=C.cloneElement($,ht):z?at=Wt.spinner():($n=>$n in Wt)(D)&&(at=Wt[D](ht))),at}(t),K=!!S||!f,ft={closeToast:p,type:c,theme:q};let ut=null;return s===!1||(ut=M(s)?s(ft):C.isValidElement(s)?C.cloneElement(s,ft):function(nt){let{closeToast:j,theme:D,ariaLabel:z="close"}=nt;return w.createElement("button",{className:`Toastify__close-button Toastify__close-button--${D}`,type:"button",onClick:$=>{$.stopPropagation(),j($)},"aria-label":z},w.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},w.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(ft)),w.createElement(k,{isIn:B,done:L,position:x,preventExitTransition:n,nodeRef:a,playToast:o},w.createElement("div",{id:T,onClick:u,"data-in":B,className:Pt,...r,style:E,ref:a},w.createElement("div",{...B&&{role:R},className:M(b)?b({type:c}):J("Toastify__toast-body",b),style:h},H!=null&&w.createElement("div",{className:J("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!V})},H),w.createElement("div",null,i)),ut,w.createElement(Wn,{...O&&!K?{key:`pb-${O}`}:{},rtl:v,theme:q,delay:f,isRunning:e,isIn:B,closeToast:p,hide:g,type:c,style:A,className:m,controlledProgress:K,progress:S||0})))},jt=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},Kn=zt(jt("bounce",!0));zt(jt("slide",!0));zt(jt("zoom"));zt(jt("flip"));const Qn={position:"top-right",transition:Kn,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Zr(t){let e={...Qn,...t};const n=t.stacked,[a,r]=C.useState(!0),o=C.useRef(null),{getToastToRender:s,isToastActive:i,count:f}=Bn(e),{className:u,style:c,rtl:g,containerId:p}=e;function k(y){const E=J("Toastify__toast-container",`Toastify__toast-container--${y}`,{"Toastify__toast-container--rtl":g});return M(u)?u({position:y,rtl:g,defaultClassName:E}):J(E,Nt(u))}function x(){n&&(r(!0),I.play())}return Vn(()=>{if(n){var y;const E=o.current.querySelectorAll('[data-in="true"]'),b=12,h=(y=e.position)==null?void 0:y.includes("top");let m=0,A=0;Array.from(E).reverse().forEach((O,R)=>{const S=O;S.classList.add("Toastify__toast--stacked"),R>0&&(S.dataset.collapsed=`${a}`),S.dataset.pos||(S.dataset.pos=h?"top":"bot");const v=m*(a?.2:1)+(a?0:b*R);S.style.setProperty("--y",`${h?v:-1*v}px`),S.style.setProperty("--g",`${b}`),S.style.setProperty("--s",""+(1-(a?A:0))),m+=S.offsetHeight,A+=.025})}},[a,f,n]),w.createElement("div",{ref:o,className:"Toastify",id:p,onMouseEnter:()=>{n&&(r(!1),I.pause())},onMouseLeave:x},s((y,E)=>{const b=E.length?{...c}:{...c,pointerEvents:"none"};return w.createElement("div",{className:k(y),style:b,key:`container-${y}`},E.map(h=>{let{content:m,props:A}=h;return w.createElement(qn,{...A,stacked:n,collapseAll:x,isIn:i(A.toastId,A.containerId),style:A.style,key:`toast-${A.key}`},m)}))}))}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Jn(t,e,n){return(e=ta(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ce(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ce(Object(n),!0).forEach(function(a){Jn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Zn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ta(t){var e=Zn(t,"string");return typeof e=="symbol"?e:e+""}const Se=()=>{};let ge={},sn={},ln=null,cn={mark:Se,measure:Se};try{typeof window<"u"&&(ge=window),typeof document<"u"&&(sn=document),typeof MutationObserver<"u"&&(ln=MutationObserver),typeof performance<"u"&&(cn=performance)}catch{}const{userAgent:Oe=""}=ge.navigator||{},Z=ge,P=sn,_e=ln,Ot=cn;Z.document;const G=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",fn=~Oe.indexOf("MSIE")||~Oe.indexOf("Trident/");var ea=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,na=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,un={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},aa={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},dn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],_="classic",$t="duotone",ra="sharp",oa="sharp-duotone",mn=[_,$t,ra,oa],sa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ia={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},la=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ca={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},fa=["fak","fa-kit","fakd","fa-kit-duotone"],Ne={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ua=["kit"],da={kit:{"fa-kit":"fak"}},ma=["fak","fakd"],pa={kit:{fak:"fa-kit"}},Le={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},_t={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ga=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ha=["fak","fa-kit","fakd","fa-kit-duotone"],ya={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},va={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ba={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Zt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},xa=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],te=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ga,...xa],Ea=["solid","regular","light","thin","duotone","brands"],pn=[1,2,3,4,5,6,7,8,9,10],Aa=pn.concat([11,12,13,14,15,16,17,18,19,20]),ka=[...Object.keys(ba),...Ea,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_t.GROUP,_t.SWAP_OPACITY,_t.PRIMARY,_t.SECONDARY].concat(pn.map(t=>"".concat(t,"x"))).concat(Aa.map(t=>"w-".concat(t))),wa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const W="___FONT_AWESOME___",ee=16,gn="fa",hn="svg-inline--fa",st="data-fa-i2svg",ne="data-fa-pseudo-element",Ta="data-fa-pseudo-element-pending",he="data-prefix",ye="data-icon",Me="fontawesome-i2svg",Ia="async",Pa=["HTML","HEAD","STYLE","SCRIPT"],yn=(()=>{try{return!0}catch{return!1}})();function Tt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[_]}})}const vn=l({},un);vn[_]=l(l(l(l({},{"fa-duotone":"duotone"}),un[_]),Ne.kit),Ne["kit-duotone"]);const Ca=Tt(vn),ae=l({},ca);ae[_]=l(l(l(l({},{duotone:"fad"}),ae[_]),Le.kit),Le["kit-duotone"]);const Fe=Tt(ae),re=l({},Zt);re[_]=l(l({},re[_]),pa.kit);const ve=Tt(re),oe=l({},va);oe[_]=l(l({},oe[_]),da.kit);Tt(oe);const Sa=ea,bn="fa-layers-text",Oa=na,_a=l({},sa);Tt(_a);const Na=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xt=aa,La=[...ua,...ka],bt=Z.FontAwesomeConfig||{};function Ma(t){var e=P.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Fa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}P&&typeof P.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Fa(Ma(n));r!=null&&(bt[a]=r)});const xn={styleDefault:"solid",familyDefault:_,cssPrefix:gn,replacementClass:hn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bt.familyPrefix&&(bt.cssPrefix=bt.familyPrefix);const pt=l(l({},xn),bt);pt.autoReplaceSvg||(pt.observeMutations=!1);const d={};Object.keys(xn).forEach(t=>{Object.defineProperty(d,t,{enumerable:!0,set:function(e){pt[t]=e,xt.forEach(n=>n(d))},get:function(){return pt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){pt.cssPrefix=t,xt.forEach(e=>e(d))},get:function(){return pt.cssPrefix}});Z.FontAwesomeConfig=d;const xt=[];function Da(t){return xt.push(t),()=>{xt.splice(xt.indexOf(t),1)}}const Q=ee,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ra(t){if(!t||!G)return;const e=P.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=P.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return P.head.insertBefore(e,a),t}const za="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kt(){let t=12,e="";for(;t-- >0;)e+=za[Math.random()*62|0];return e}function gt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function be(t){return t.classList?gt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function En(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ja(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(En(t[n]),'" '),"").trim()}function Yt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function xe(t){return t.size!==Y.size||t.x!==Y.x||t.y!==Y.y||t.rotate!==Y.rotate||t.flipX||t.flipY}function $a(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(s," ").concat(i)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Ya(t){let{transform:e,width:n=ee,height:a=ee,startCentered:r=!1}=t,o="";return r&&fn?o+="translate(".concat(e.x/Q-n/2,"em, ").concat(e.y/Q-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/Q,"em), calc(-50% + ").concat(e.y/Q,"em)) "):o+="translate(".concat(e.x/Q,"em, ").concat(e.y/Q,"em) "),o+="scale(".concat(e.size/Q*(e.flipX?-1:1),", ").concat(e.size/Q*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Ua=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function An(){const t=gn,e=hn,n=d.cssPrefix,a=d.replacementClass;let r=Ua;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let De=!1;function Gt(){d.autoAddCss&&!De&&(Ra(An()),De=!0)}var Ba={mixout(){return{dom:{css:An,insertCss:Gt}}},hooks(){return{beforeDOMElementCreation(){Gt()},beforeI2svg(){Gt()}}}};const X=Z||{};X[W]||(X[W]={});X[W].styles||(X[W].styles={});X[W].hooks||(X[W].hooks={});X[W].shims||(X[W].shims=[]);var U=X[W];const kn=[],wn=function(){P.removeEventListener("DOMContentLoaded",wn),Dt=1,kn.map(t=>t())};let Dt=!1;G&&(Dt=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),Dt||P.addEventListener("DOMContentLoaded",wn));function Ha(t){G&&(Dt?setTimeout(t,0):kn.push(t))}function It(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?En(t):"<".concat(e," ").concat(ja(n),">").concat(a.map(It).join(""),"</").concat(e,">")}function Re(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Vt=function(e,n,a,r){var o=Object.keys(e),s=o.length,i=n,f,u,c;for(a===void 0?(f=1,c=e[o[0]]):(f=0,c=a);f<s;f++)u=o[f],c=i(c,e[u],u,e);return c};function Wa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function se(t){const e=Wa(t);return e.length===1?e[0].toString(16):null}function Xa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ze(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function ie(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ze(e);typeof U.hooks.addPack=="function"&&!a?U.hooks.addPack(t,ze(e)):U.styles[t]=l(l({},U.styles[t]||{}),r),t==="fas"&&ie("fa",e)}const{styles:wt,shims:Ga}=U,Tn=Object.keys(ve),Va=Tn.reduce((t,e)=>(t[e]=Object.keys(ve[e]),t),{});let Ee=null,In={},Pn={},Cn={},Sn={},On={};function qa(t){return~La.indexOf(t)}function Ka(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!qa(r)?r:null}const _n=()=>{const t=a=>Vt(wt,(r,o,s)=>(r[s]=Vt(o,a,{}),r),{});In=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),Pn=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),On=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(i=>{a[i]=o}),a});const e="far"in wt||d.autoFetchSvg,n=Vt(Ga,(a,r)=>{const o=r[0];let s=r[1];const i=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:i}),a},{names:{},unicodes:{}});Cn=n.names,Sn=n.unicodes,Ee=Ut(d.styleDefault,{family:d.familyDefault})};Da(t=>{Ee=Ut(t.styleDefault,{family:d.familyDefault})});_n();function Ae(t,e){return(In[t]||{})[e]}function Qa(t,e){return(Pn[t]||{})[e]}function rt(t,e){return(On[t]||{})[e]}function Nn(t){return Cn[t]||{prefix:null,iconName:null}}function Ja(t){const e=Sn[t],n=Ae("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tt(){return Ee}const Ln=()=>({prefix:null,iconName:null,rest:[]});function Za(t){let e=_;const n=Tn.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return mn.forEach(a=>{(t.includes(n[a])||t.some(r=>Va[a].includes(r)))&&(e=a)}),e}function Ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=_}=e,a=Ca[n][t];if(n===$t&&!t)return"fad";const r=Fe[n][t]||Fe[n][a],o=t in U.styles?t:null;return r||o||null}function tr(t){let e=[],n=null;return t.forEach(a=>{const r=Ka(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function je(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Bt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=te.concat(ha),o=je(t.filter(g=>r.includes(g))),s=je(t.filter(g=>!te.includes(g))),i=o.filter(g=>(a=g,!dn.includes(g))),[f=null]=i,u=Za(o),c=l(l({},tr(s)),{},{prefix:Ut(f,{family:u})});return l(l(l({},c),rr({values:t,family:u,styles:wt,config:d,canonical:c,givenPrefix:a})),er(n,a,c))}function er(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?Nn(r):{},s=rt(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!wt.far&&wt.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const nr=mn.filter(t=>t!==_||t!==$t),ar=Object.keys(Zt).filter(t=>t!==_).map(t=>Object.keys(Zt[t])).flat();function rr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,i=n===$t,f=e.includes("fa-duotone")||e.includes("fad"),u=s.familyDefault==="duotone",c=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(f||u||c)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&nr.includes(n)&&(Object.keys(o).find(p=>ar.includes(p))||s.autoFetchSvg)){const p=la.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=rt(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=tt()||"fas"),a}class or{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),ie(o,r[o]);const s=ve[_][o];s&&ie(s,r[o]),_n()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:i}=a[r],f=i[2];e[o]||(e[o]={}),f.length>0&&f.forEach(u=>{typeof u=="string"&&(e[o][u]=i)}),e[o][s]=i}),e}}let $e=[],dt={};const mt={},sr=Object.keys(mt);function ir(t,e){let{mixoutsTo:n}=e;return $e=t,dt={},Object.keys(mt).forEach(a=>{sr.indexOf(a)===-1&&delete mt[a]}),$e.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{dt[s]||(dt[s]=[]),dt[s].push(o[s])})}a.provides&&a.provides(mt)}),n}function le(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(dt[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function it(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(dt[t]||[]).forEach(o=>{o.apply(null,n)})}function et(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return mt[t]?mt[t].apply(null,e):void 0}function ce(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||tt();if(e)return e=rt(n,e)||e,Re(Mn.definitions,n,e)||Re(U.styles,n,e)}const Mn=new or,lr=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,it("noAuto")},cr={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return G?(it("beforeI2svg",t),et("pseudoElements2svg",t),et("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ha(()=>{ur({autoReplaceSvgRoot:e}),it("watch",t)})}},fr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:rt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ut(t[0]);return{prefix:n,iconName:rt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(Sa))){const e=Bt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||tt(),iconName:rt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=tt();return{prefix:e,iconName:rt(e,t)||t}}}},F={noAuto:lr,config:d,dom:cr,parse:fr,library:Mn,findIconDefinition:ce,toHtml:It},ur=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=P}=t;(Object.keys(U.styles).length>0||d.autoFetchSvg)&&G&&d.autoReplaceSvg&&F.dom.i2svg({node:e})};function Ht(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>It(n))}}),Object.defineProperty(t,"node",{get:function(){if(!G)return;const n=P.createElement("div");return n.innerHTML=t.html,n.children}}),t}function dr(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(xe(s)&&n.found&&!a.found){const{width:i,height:f}=n,u={x:i/f/2,y:.5};r.style=Yt(l(l({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function mr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function ke(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:i,maskId:f,titleId:u,extra:c,watchable:g=!1}=t,{width:p,height:k}=n.found?n:e,x=ma.includes(a),y=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(O=>c.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(c.classes).join(" ");let E={children:[],attributes:l(l({},c.attributes),{},{"data-prefix":a,"data-icon":r,class:y,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(k)})};const b=x&&!~c.classes.indexOf("fa-fw")?{width:"".concat(p/k*16*.0625,"em")}:{};g&&(E.attributes[st]=""),i&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||kt())},children:[i]}),delete E.attributes.title);const h=l(l({},E),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:o,symbol:s,styles:l(l({},b),c.styles)}),{children:m,attributes:A}=n.found&&e.found?et("generateAbstractMask",h)||{children:[],attributes:{}}:et("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=m,h.attributes=A,s?mr(h):dr(h)}function Ye(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:i=!1}=t,f=l(l(l({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(f[st]="");const u=l({},s.styles);xe(r)&&(u.transform=Ya({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);const c=Yt(u);c.length>0&&(f.style=c);const g=[];return g.push({tag:"span",attributes:f,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function pr(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Yt(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:qt}=U;function fe(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Xt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Xt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const gr={found:!1,width:512,height:512};function hr(t,e){!yn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ue(t,e){let n=e;return e==="fa"&&d.styleDefault!==null&&(e=tt()),new Promise((a,r)=>{if(n==="fa"){const o=Nn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&qt[e]&&qt[e][t]){const o=qt[e][t];return a(fe(o))}hr(t,e),a(l(l({},gr),{},{icon:d.showMissingIcons&&t?et("missingIconAbstract")||{}:{}}))})}const Ue=()=>{},de=d.measurePerformance&&Ot&&Ot.mark&&Ot.measure?Ot:{mark:Ue,measure:Ue},yt='FA "6.7.2"',yr=t=>(de.mark("".concat(yt," ").concat(t," begins")),()=>Fn(t)),Fn=t=>{de.mark("".concat(yt," ").concat(t," ends")),de.measure("".concat(yt," ").concat(t),"".concat(yt," ").concat(t," begins"),"".concat(yt," ").concat(t," ends"))};var we={begin:yr,end:Fn};const Lt=()=>{};function Be(t){return typeof(t.getAttribute?t.getAttribute(st):null)=="string"}function vr(t){const e=t.getAttribute?t.getAttribute(he):null,n=t.getAttribute?t.getAttribute(ye):null;return e&&n}function br(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function xr(){return d.autoReplaceSvg===!0?Mt.replace:Mt[d.autoReplaceSvg]||Mt.replace}function Er(t){return P.createElementNS("http://www.w3.org/2000/svg",t)}function Ar(t){return P.createElement(t)}function Dn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Er:Ar}=e;if(typeof t=="string")return P.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(Dn(o,{ceFn:n}))}),a}function kr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Mt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Dn(n),e)}),e.getAttribute(st)===null&&d.keepOriginalSource){let n=P.createComment(kr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~be(e).indexOf(d.replacementClass))return Mt.replace(t);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===d.replacementClass||i.match(a)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>It(o)).join(`
`);e.setAttribute(st,""),e.innerHTML=r}};function He(t){t()}function Rn(t,e){const n=typeof e=="function"?e:Lt;if(t.length===0)n();else{let a=He;d.mutateApproach===Ia&&(a=Z.requestAnimationFrame||He),a(()=>{const r=xr(),o=we.begin("mutate");t.map(r),o(),n()})}}let Te=!1;function zn(){Te=!0}function me(){Te=!1}let Rt=null;function We(t){if(!_e||!d.observeMutations)return;const{treeCallback:e=Lt,nodeCallback:n=Lt,pseudoElementsCallback:a=Lt,observeMutationsRoot:r=P}=t;Rt=new _e(o=>{if(Te)return;const s=tt();gt(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!Be(i.addedNodes[0])&&(d.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&d.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&Be(i.target)&&~Na.indexOf(i.attributeName))if(i.attributeName==="class"&&vr(i.target)){const{prefix:f,iconName:u}=Bt(be(i.target));i.target.setAttribute(he,f||s),u&&i.target.setAttribute(ye,u)}else br(i.target)&&n(i.target)})}),G&&Rt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function wr(){Rt&&Rt.disconnect()}function Tr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),n}function Ir(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Bt(be(t));return r.prefix||(r.prefix=tt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Qa(r.prefix,t.innerText)||Ae(r.prefix,se(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Pr(t){const e=gt(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||kt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Cr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ir(t),o=Pr(t),s=le("parseNodeAttributes",{},t);let i=e.styleParser?Tr(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:o}},s)}const{styles:Sr}=U;function jn(t){const e=d.autoReplaceSvg==="nest"?Xe(t,{styleParser:!1}):Xe(t);return~e.extra.classes.indexOf(bn)?et("generateLayersText",t,e):et("generateSvgReplacementMutation",t,e)}function Or(){return[...fa,...te]}function Ge(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G)return Promise.resolve();const n=P.documentElement.classList,a=c=>n.add("".concat(Me,"-").concat(c)),r=c=>n.remove("".concat(Me,"-").concat(c)),o=d.autoFetchSvg?Or():dn.concat(Object.keys(Sr));o.includes("fa")||o.push("fa");const s=[".".concat(bn,":not([").concat(st,"])")].concat(o.map(c=>".".concat(c,":not([").concat(st,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=gt(t.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const f=we.begin("onTree"),u=i.reduce((c,g)=>{try{const p=jn(g);p&&c.push(p)}catch(p){yn||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise((c,g)=>{Promise.all(u).then(p=>{Rn(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),c()})}).catch(p=>{f(),g(p)})})}function _r(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jn(t).then(n=>{n&&Rn([n],e)})}function Nr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:ce(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:ce(r||{})),t(a,l(l({},n),{},{mask:r}))}}const Lr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Y,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:i=null,classes:f=[],attributes:u={},styles:c={}}=e;if(!t)return;const{prefix:g,iconName:p,icon:k}=t;return Ht(l({type:"icon"},t),()=>(it("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(s?u["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(i||kt()):(u["aria-hidden"]="true",u.focusable="false")),ke({icons:{main:fe(k),mask:r?fe(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:p,transform:l(l({},Y),n),symbol:a,title:s,maskId:o,titleId:i,extra:{attributes:u,styles:c,classes:f}})))};var Mr={mixout(){return{icon:Nr(Lr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ge,t.nodeCallback=_r,t}}},provides(t){t.i2svg=function(e){const{node:n=P,callback:a=()=>{}}=e;return Ge(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:i,symbol:f,mask:u,maskId:c,extra:g}=n;return new Promise((p,k)=>{Promise.all([ue(a,s),u.iconName?ue(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[y,E]=x;p([e,ke({icons:{main:y,mask:E},prefix:s,iconName:a,transform:i,symbol:f,maskId:c,title:r,titleId:o,extra:g,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const i=Yt(s);i.length>0&&(a.style=i);let f;return xe(o)&&(f=et("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},Fr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ht({type:"layer"},()=>{it("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Dr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return Ht({type:"counter",content:t},()=>(it("beforeDOMElementCreation",{content:t,params:e}),pr({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},Rr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Y,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return Ht({type:"text",content:t},()=>(it("beforeDOMElementCreation",{content:t,params:e}),Ye({content:t,transform:l(l({},Y),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,i=null;if(fn){const f=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/f,i=u.height/f}return d.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Ye({content:e.innerHTML,width:s,height:i,transform:r,title:a,extra:o,watchable:!0})])}}};const zr=new RegExp('"',"ug"),Ve=[1105920,1112319],qe=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),ia),wa),ya),pe=Object.keys(qe).reduce((t,e)=>(t[e.toLowerCase()]=qe[e],t),{}),jr=Object.keys(pe).reduce((t,e)=>{const n=pe[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function $r(t){const e=t.replace(zr,""),n=Xa(e,0),a=n>=Ve[0]&&n<=Ve[1],r=e.length===2?e[0]===e[1]:!1;return{value:se(r?e[0]:e),isSecondary:a||r}}function Yr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(pe[n]||{})[r]||jr[n]}function Ke(t,e){const n="".concat(Ta).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=gt(t.children).filter(p=>p.getAttribute(ne)===e)[0],i=Z.getComputedStyle(t,e),f=i.getPropertyValue("font-family"),u=f.match(Oa),c=i.getPropertyValue("font-weight"),g=i.getPropertyValue("content");if(s&&!u)return t.removeChild(s),a();if(u&&g!=="none"&&g!==""){const p=i.getPropertyValue("content");let k=Yr(f,c);const{value:x,isSecondary:y}=$r(p),E=u[0].startsWith("FontAwesome");let b=Ae(k,x),h=b;if(E){const m=Ja(x);m.iconName&&m.prefix&&(b=m.iconName,k=m.prefix)}if(b&&!y&&(!s||s.getAttribute(he)!==k||s.getAttribute(ye)!==h)){t.setAttribute(n,h),s&&t.removeChild(s);const m=Cr(),{extra:A}=m;A.attributes[ne]=e,ue(b,k).then(O=>{const R=ke(l(l({},m),{},{icons:{main:O,mask:Ln()},prefix:k,iconName:h,extra:A,watchable:!0})),S=P.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=R.map(v=>It(v)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ur(t){return Promise.all([Ke(t,"::before"),Ke(t,"::after")])}function Br(t){return t.parentNode!==document.head&&!~Pa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ne)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Qe(t){if(G)return new Promise((e,n)=>{const a=gt(t.querySelectorAll("*")).filter(Br).map(Ur),r=we.begin("searchPseudoElements");zn(),Promise.all(a).then(()=>{r(),me(),e()}).catch(()=>{r(),me(),n()})})}var Hr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Qe,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=P}=e;d.searchPseudoElements&&Qe(n)}}};let Je=!1;var Wr={mixout(){return{dom:{unwatch(){zn(),Je=!0}}}},hooks(){return{bootstrap(){We(le("mutationObserverCallbacks",{}))},noAuto(){wr()},watch(t){const{observeMutationsRoot:e}=t;Je?me():We(le("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ze=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Xr={mixout(){return{parse:{transform:t=>Ze(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ze(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),c={transform:"".concat(i," ").concat(f," ").concat(u)},g={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:c,path:g};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),p.path)}]}]}}}};const Kt={x:0,y:0,width:"100%",height:"100%"};function tn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Gr(t){return t.tag==="g"?t.children:[t]}var Vr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Bt(n.split(" ").map(r=>r.trim())):Ln();return a.prefix||(a.prefix=tt()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:i}=e;const{width:f,icon:u}=r,{width:c,icon:g}=o,p=$a({transform:i,containerWidth:c,iconWidth:f}),k={tag:"rect",attributes:l(l({},Kt),{},{fill:"white"})},x=u.children?{children:u.children.map(tn)}:{},y={tag:"g",attributes:l({},p.inner),children:[tn(l({tag:u.tag,attributes:l(l({},u.attributes),p.path)},x))]},E={tag:"g",attributes:l({},p.outer),children:[y]},b="mask-".concat(s||kt()),h="clip-".concat(s||kt()),m={tag:"mask",attributes:l(l({},Kt),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,E]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Gr(g)},m]};return n.push(A,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(b,")")},Kt)}),{children:n,attributes:a}}}},qr={provides(t){let e=!1;Z.matchMedia&&(e=Z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Kr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Qr=[Ba,Mr,Fr,Dr,Rr,Hr,Wr,Xr,Vr,qr,Kr];ir(Qr,{mixoutsTo:F});F.noAuto;F.config;F.library;F.dom;const to=F.parse;F.findIconDefinition;F.toHtml;const eo=F.icon;F.layer;F.text;F.counter;export{I as B,Zr as Q,J as c,eo as i,to as p};
//# sourceMappingURL=ui-DEuSkH1a.js.map
