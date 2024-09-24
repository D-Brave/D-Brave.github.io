var We=Object.defineProperty;var Ve=(n,e,t)=>e in n?We(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>(Ve(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,de=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),ue=new WeakMap;let Ee=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(de&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=ue.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ue.set(t,e))}return e}toString(){return this.cssText}};const Fe=n=>new Ee(typeof n=="string"?n:n+"",void 0,he),u=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new Ee(t,n,he)},Ye=(n,e)=>{if(de)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=B.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,n.appendChild(s)}},me=de?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Fe(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:qe,defineProperty:Ge,getOwnPropertyDescriptor:Ke,getOwnPropertyNames:Je,getOwnPropertySymbols:Xe,getPrototypeOf:Ze}=Object,_=globalThis,ge=_.trustedTypes,Qe=ge?ge.emptyScript:"",F=_.reactiveElementPolyfillSupport,U=(n,e)=>n,J={toAttribute(n,e){switch(e){case Boolean:n=n?Qe:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ce=(n,e)=>!qe(n,e),fe={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:Ce};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class C extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=fe){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ge(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=Ke(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const m=i==null?void 0:i.call(this);r.call(this,o),this.requestUpdate(e,m,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fe}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const e=Ze(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const t=this.properties,s=[...Je(t),...Xe(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(me(i))}else e!==void 0&&t.push(me(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ye(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var r;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:J).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var r;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),m=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:J;this._$Em=i,this[i]=m.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??Ce)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[U("elementProperties")]=new Map,C[U("finalized")]=new Map,F==null||F({ReactiveElement:C}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,W=H.trustedTypes,xe=W?W.createPolicy("lit-html",{createHTML:n=>n}):void 0,Pe="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,Te="?"+w,et=`<${Te}>`,E=document,L=()=>E.createComment(""),I=n=>n===null||typeof n!="object"&&typeof n!="function",Me=Array.isArray,tt=n=>Me(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Y=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,ve=/>/g,A=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ye=/'/g,be=/"/g,Ue=/^(?:script|style|textarea|title)$/i,it=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),h=it(1),P=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),we=new WeakMap,k=E.createTreeWalker(E,129);function He(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return xe!==void 0?xe.createHTML(e):e}const st=(n,e)=>{const t=n.length-1,s=[];let i,r=e===2?"<svg>":"",o=M;for(let m=0;m<t;m++){const l=n[m];let f,x,p=-1,y=0;for(;y<l.length&&(o.lastIndex=y,x=o.exec(l),x!==null);)y=o.lastIndex,o===M?x[1]==="!--"?o=$e:x[1]!==void 0?o=ve:x[2]!==void 0?(Ue.test(x[2])&&(i=RegExp("</"+x[2],"g")),o=A):x[3]!==void 0&&(o=A):o===A?x[0]===">"?(o=i??M,p=-1):x[1]===void 0?p=-2:(p=o.lastIndex-x[2].length,f=x[1],o=x[3]===void 0?A:x[3]==='"'?be:ye):o===be||o===ye?o=A:o===$e||o===ve?o=M:(o=A,i=void 0);const b=o===A&&n[m+1].startsWith("/>")?" ":"";r+=o===M?l+et:p>=0?(s.push(f),l.slice(0,p)+Pe+l.slice(p)+w+b):l+w+(p===-2?m:b)}return[He(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),s]};class N{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0;const m=e.length-1,l=this.parts,[f,x]=st(e,t);if(this.el=N.createElement(f,s),k.currentNode=this.el.content,t===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=k.nextNode())!==null&&l.length<m;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(Pe)){const y=x[o++],b=i.getAttribute(p).split(w),D=/([.?@])?(.*)/.exec(y);l.push({type:1,index:r,name:D[2],strings:b,ctor:D[1]==="."?rt:D[1]==="?"?ot:D[1]==="@"?at:V}),i.removeAttribute(p)}else p.startsWith(w)&&(l.push({type:6,index:r}),i.removeAttribute(p));if(Ue.test(i.tagName)){const p=i.textContent.split(w),y=p.length-1;if(y>0){i.textContent=W?W.emptyScript:"";for(let b=0;b<y;b++)i.append(p[b],L()),k.nextNode(),l.push({type:2,index:++r});i.append(p[y],L())}}}else if(i.nodeType===8)if(i.data===Te)l.push({type:2,index:r});else{let p=-1;for(;(p=i.data.indexOf(w,p+1))!==-1;)l.push({type:7,index:r}),p+=w.length-1}r++}}static createElement(e,t){const s=E.createElement("template");return s.innerHTML=e,s}}function T(n,e,t=n,s){var o,m;if(e===P)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const r=I(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((m=i==null?void 0:i._$AO)==null||m.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=T(n,i._$AS(n,e.values),i,s)),e}class nt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??E).importNode(t,!0);k.currentNode=i;let r=k.nextNode(),o=0,m=0,l=s[0];for(;l!==void 0;){if(o===l.index){let f;l.type===2?f=new j(r,r.nextSibling,this,e):l.type===1?f=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(f=new lt(r,this,e)),this._$AV.push(f),l=s[++m]}o!==(l==null?void 0:l.index)&&(r=k.nextNode(),o++)}return k.currentNode=E,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class j{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=T(this,e,t),I(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==P&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):tt(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==g&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=N.createElement(He(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(t);else{const o=new nt(i,this),m=o.u(this.options);o.p(t),this.T(m),this._$AH=o}}_$AC(e){let t=we.get(e.strings);return t===void 0&&we.set(e.strings,t=new N(e)),t}k(e){Me(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new j(this.S(L()),this.S(L()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(e,t=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=T(this,e,t,0),o=!I(e)||e!==this._$AH&&e!==P,o&&(this._$AH=e);else{const m=e;let l,f;for(e=r[0],l=0;l<r.length-1;l++)f=T(this,m[s+l],t,l),f===P&&(f=this._$AH[l]),o||(o=!I(f)||f!==this._$AH[l]),f===g?e=g:e!==g&&(e+=(f??"")+r[l+1]),this._$AH[l]=f}o&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class rt extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class ot extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class at extends V{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=T(this,e,t,0)??g)===P)return;const s=this._$AH,i=e===g&&s!==g||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==g&&(s===g||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class lt{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}const q=H.litHtmlPolyfillSupport;q==null||q(N,j),(H.litHtmlVersions??(H.litHtmlVersions=[])).push("3.1.2");const ct=(n,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const r=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new j(e.insertBefore(L(),r),r,void 0,t??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class d extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ct(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return P}}var ke;d._$litElement$=!0,d.finalized=!0,(ke=globalThis.litElementHydrateSupport)==null||ke.call(globalThis,{LitElement:d});const G=globalThis.litElementPolyfillSupport;G==null||G({LitElement:d});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=n=>n??g;function dt(){return u`

        .App {
            display: grid;
            grid-template-columns: auto 158px;
            }

        .App-header {
            background-color: #282c34;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
        }

        .stroke {
            border-color: black;
            border-width: 3px;
        }
        .element-with-scroll {
            overflow-y: scroll;
            height: 100vh;
        }
        /* div {
            scrollbar-color: var(--neutral70) var(--yellow99);
            scrollbar-width: thin;
        } */
        /* For Firefox */
        /* .element-with-scroll {
            scrollbar-color: var(--neutral70) var(--yellow99);
            scrollbar-width: thin;
        } */

        /* For Chrome and Safari */
        .element-with-scroll::-webkit-scrollbar {
            width: 5px;
        }
        .element-with-scroll::-webkit-scrollbar-thumb {
            border-radius: 10px;
        }

        .element-with-scroll::-webkit-scrollbar-track{
            background: var(--yellow99);
        }
        .element-with-scroll::-webkit-scrollbar-thumb {
            background: var(--yellow30);
        }
        `}class X extends d{render(){return h`
            <div class="App element-with-scroll">
                <slot></slot>
                <app-menubar page = ${O(this.page)}></app-menubar>
            </div>
        `}}c(X,"styles",dt()),c(X,"properties",{page:{type:String}});window.customElements.define("app-wrapper",X);const ht={example:"Lorem Itsum badadum",mainContent:{heading1:"Hello!",body1:"Welcome to my little experiment. I started doing this website in a educational purpose, to challenge myself and learn webdesign. I will continue to add functions and material as I go forward.",body2:"Enjoy!",body3:"A curious, innovation-loving, product designer with a programming dream or two.",body4:"I want to design products and services for a better tomorrow",body5:"Current occupation:",body6:"Product Owner at GS1 Sweden",heading2:"I am Daniel"},sideContent:{example:"Lorem Itsum badadum",name:"Daniel Modig"},menuBar:{example:"Lorem Itsum badadum"}},pt={example:"Lorem Itsum badadum",profileHeading:"Profile",profileText:"I am curious, social and likes to challenge myself. I love finding creative solutions through user centered innovation. My abillity to combine different elements and take a holistic view on a problem helps me see solutions outside of the box.",experienceHeading:"Work Experience",exp1Company:"GS1 Sweden",exp1Year:"2024 -","GS1 Sweden":[["Product Owner at GS1 Sweden","Stockholm","2024-","I manage and develop my products by setting roadmaps, creating and prioritizing the dev teams backlog. Work closely with UX-team, Sales team and Customer Service to see that the product is developed in the right direction."]],exp2Company:"Mestro",exp2Year:"2019 - 2024",Mestro:[["Product Owner at Mestro","Stockholm","2022-2024","Act as a liason between Product-, Customer Experience- and Development team. Conduct user research, define customer needs and feature requriements, condensed into User Stories. Prioritizing User Stories and do acceptance testing on developed features."],["Application Support Engineer at Mestro","Stockholm","2020-2022","Act as a liason between Product-, Customer Experience- and Development team. Conduct user research, define customer needs and feature requriements, condensed into User Stories. Prioritizing User Stories and do acceptance testing on developed features."],["Customer Success Manager at Mestro","Stockholm","2019-2022","As a CSM you own customer relations and help introduce the customer to our product. It includes understanding customer needs and together with the customer construct the product after their preferences. In addition to my primary tasks I’ve also explored tools for internal processes and done research and drafts for product tours for our product."]],exp3Company:"LinTek",exp3Year:"2016 - 2017",LinTek:[["Project Manager at LinTek","Linköping","2016-2017","Full time employee as project manager of the biggest event at Linköping University, Studentorkesterfestivalen (SOF). I had the ultimate responsibility of the event with a revenue of 3.5 million SEK. Together with my organisation we planned and realised the event in May 2017."]],educationHeading:"Education",edu1Place:"Linköping University",edu1Year:"2012 - 2019","Linköping University":["M.S.E. Design and Product Development","Master specialisation: Design Engineering","Master thesis","Assessment and redesign of fire extinguisher offering to increase resource efficiency through transition towards functional sale with focus on circular economy."],skillsHeading:"Skills",skillsSubheading1:"Product Development",skillsText1:["User-centered Design","Conceptualization","Requirement Elicitation","Methodologies","Design Thinking","Workshopping","Service Design","Graphic Design","Communication"],skillsSubheading2:"Softwares",skillsText2:["Adobe Photoshop","Adobe Illustrator","Microsoft Office","Figma"],skillsSubheading3:"Development",skillsText3:["JavaScript","HTML/CSS","Basic SQL","GitHub Client"],contactHeading:"Contact",contactSubheading1:"Email",contactText1:"a.daniel.modig@gmail.com",contactSubheading2:"LinkedIn",contactText2:"linkedin.com/in/danielmodig/",contactText2Link:"https://www.linkedin.com/in/danielmodig/"},a={homepage:ht,resume:pt},$=()=>u`
        h1 {
            color: var(--yellow20);
            font-size: 65px;
        }
        
        h3 {
            color: var(--yellow40); 
            font-size: 25px;
            margin-bottom: 0px;
            font-weight: normal;

        }
        h4 {
            color: var(--neutral40); 
            font-size: 16px;
            margin-top: 5px;
            margin-bottom: 0px;
        }
        
        p {
            font-size: 18px;
            font-family: 'Ubuntu Regular', 'Calibri';
        }
        
        em {
            font-family: 'Ubuntu Bold';
            font-style: normal;
            font-weight: normal;
        }
        div{
            display: flex;
            flex-direction: column;
        }

        .dark{
            background-color: black;
            height: 100px;
            width: 100px;
        }

        
    `,Oe="/assets/DanielModig-cartoon-white-DKyZ8pIH.png",ut=()=>u`

        div {
            display:flex;
            flex-direction: column;
        }

        .wrapper {
            width: 473px;
            height: calc(100vh - var(--topMargin) - var(--bottomMargin) - 70px);

            position: sticky;
            top: 0;
        }
            
        .box {
            justify-content: flex-end;
            /* height: calc(100vh - var(--topMargin) - var(--bottomMargin) - 70px); // 70 is for the lower bottom. */
            height: 100%; 
            background-color: var(--yellow95);
            flex-shrink: 0;
        }

        .picture{
            width: 500px;
            transform: translate(-12px,0);
            flex-shrink: 0;
            overflow-x: visible;
        }

        .namebox {
            margin-left: -5px;
            height: 60px;

        }

        .namebox h1{
            margin-top: 5px;
            margin-bottom: 0px;
        }
    `;class Re extends d{render(){return h`
            <div class = "wrapper">
                <div class = "box">
                    <img src=${Oe} alt="Picture of me" class="picture" />
                </div>
                <div class="namebox">
                    <h1 class="uRegular">${a.homepage.sideContent.name}</h1>
                </div>
            </div>
        `}}c(Re,"styles",[ut(),$()]);window.customElements.define("index-hero-picture",Re);const mt=()=>u`
        .wrapper{
            max-width: calc(100vw - 493px - 178px); /* Calculated with the padding on either side of MainContent */
            height: calc(100% - 70px); //70px because the class .box in me picture. Calcs height for img box in me-picture.
            flex-shrink: 10;
            padding-left: calc(var(--leftMargin) * 3);
            padding-right: calc(var(--rightMargin) * 3);
            background-color: var(--yellow95);
            margin-bottom: 60px;
        }
        
        .helloSection {
            max-width: 100%;
        }
        
        /* .whoSection {
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            max-width: 769px;
            height: 429px;
            padding-bottom: 79px;
        } */
        
        /* .whoHeading{
            --headingWidth: 138px;
            display: flex;
            justify-content: flex-end;
            width: var(--headingWidth);
            height: var(--headingWidth);;
            transform: rotate(-90deg);
            margin-right: calc(var(--headingWidth)/-2);
        } */
        
        /* .whoHeading h1{
            display: flex;
            font-size: 64px;
            width: 306px;
            height: 80px;
            flex-shrink: 0;
            color: var(--yellow80, #FB0);
            margin-top: 0px;
            margin-bottom: 0px;
            font-weight: normal;
            margin-left: 0px;
        } */
        
        /* .border {
            height: 306px;
            width: 50px;
            background-color: var(--yellow80);
            margin-right:20px;
            flex-shrink:0;
        } */
        
        /* .whoBody{
            display: flex;
            flex-direction:column;
            justify-content:space-between;
            height: 290px;
        } */
        
        /* .whoBody p{
            margin-top: 0;
            margin-bottom:0 ;
        } */
    `;class Le extends d{render(){return h`
            <div class = "wrapper">
                <div class="helloSection">
                    <h1>
                        ${a.homepage.mainContent.heading1}
                    </h1>
                    <h3>
                        ${a.homepage.mainContent.body1}
                    </h3>
                    <h3>${a.homepage.mainContent.body2}</h3>
                </div>
                <!-- <div class="whoSection"> -->
                    <!-- <div class="whoHeading">
                        <h1>${a.homepage.mainContent.heading2}</h1>
                    </div> -->
                    <!-- <div class="border">

                    </div> -->
                    <!-- <div class="whoBody">
                        <p>${a.homepage.mainContent.body3}</p>
                        <p>${a.homepage.mainContent.body4}</p>
                        <p>${a.homepage.mainContent.body5} <br/> <em>${a.homepage.mainContent.body6}</em></p>
                    </div> -->
                </div>

            </div>
        `}}c(Le,"styles",[$(),mt()]);window.customElements.define("main-welcome",Le);class Ie extends d{render(){return h`          
            <div class = "body">
                <index-hero-picture></index-hero-picture>
                <main-welcome></main-welcome>
            </div>
        `}}c(Ie,"styles",u`
        .body{
            display: flex;
            flex-direction: row;

            margin: var(--topMargin) var(--rightMargin) var(--bottomMargin) var(--leftMargin);
            height: calc(100vh - var(--topMargin) - var(--bottomMargin));
        }
    `);window.customElements.define("app-index",Ie);const gt=()=>u`
        :host {
            position: absolute;
            cursor: default;
            transform: translate(calc(-100% - 58px), 0px);
            width: 0px;
            height: 58px;
            margin: 7px 0 5px 0;
            overflow: hidden;
        }

        .container{
            margin: 5px 0 5px 0;
            padding: 5px 5px 5px 10px;
            height: 30px;
            
            background-color: var(--yellow30);
            color: var(--yellow95);
            display: flex;
            justify-content: center;
            border-radius: 10px 0px 0px 10px;
        }

    `;class Z extends d{render(){return h`
        <div class='container'>
            <slot></slot>
        </div>
        `}}c(Z,"styles",[$(),gt()]),c(Z,"properties",{text:{Type:String}});window.customElements.define("menubar-tooltip",Z);const ft={"index.html":"Start","resume.html":"Resume","thisPage.html":"About"},xt=()=>u`
        .backRect{
            fill: var(--yellow30);
            stroke: var(--yellow30);
            stroke-width: 2px;
        }

        .frontRect{
            fill: var(--neutral95);
            stroke: var(--yellow30);
            stroke-width: 2px;
        }

        .frontRect:hover{
            fill: var(--yellow80);
            transform: translate(4px, 4px);
            transition-duration: 300ms;
        }
        .frontRect:not(:hover){
            transition-duration: 800ms;
        }
        /* .active .frontRect {
            fill: var(--yellow70);
            transform: translate(4px, 4px);   
        } */
        /* .active:hover{
            fill: var(--yellow70);
        } */

        a:hover ~ menubar-tooltip {
            width: 80px;
            transition-duration: 300ms;
        }
        a:not(:hover) ~ menubar-tooltip {
            transition-duration: 100ms;
        }
    `;class Q extends d{render(){return h`
            
            <a href=${this.link} class = ${O(this.status)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                    <rect class = 'backRect' x="6" y="6" width="50" height="50" rx="10"/>
                    <rect class = 'frontRect' x="2" y="2" width="50" height="50" rx="10"/>
                </svg>
            </a>
            <menubar-tooltip>${ft[this.link]}</menubar-tooltip>
        `}}c(Q,"styles",xt()),c(Q,"properties",{link:{type:String},status:{type:String}});window.customElements.define("menubar-button",Q);function $t(){return u`

    :host {
        width: 100%;

    }

    div {
        display: flex;
        flex-direction: column;
    }

    .menubar {
        flex-wrap: nowrap;
        /* justify-content: flex-start; */
        justify-content: center;
        row-gap: calc((100vh)/8);

        height: 100vh;
        max-width: 158px;

        flex-shrink: 0;

        position: sticky;
        top: 0;
    } 
    
    .logo-holder {
        justify-content: center;
        align-items: center;
        background-color: var(--yellow99);
        opacity: 0;
        height: 90px;   
    }
    
    .menu-buttons{
        justify-content: space-around;
        align-items: center;
        background-color: var(--yellow99);
        height: calc(100vh*5/8);
        border-left: 3px solid var(--yellow30);
    }

    .App-logo{
        background-color: var(--yellow90);
        width: 70px;
        height: 70px;
        border-radius: 35px;
    }`}class ee extends d{constructor(){super(),this.status=""}_isActive(e){return this.page===e?(this.status="active","active"):""}render(){return h`
        <div class = "menubar stroke">
            <!-- <div class="logo-holder">
                <div class ="App-logo">
                </div>
            </div> -->
            <div class="menu-buttons">
                <menubar-button link='index.html' status=${O(this._isActive("index"))}></menubar-button>
                <menubar-button link='resume.html' status=${O(this._isActive("resume"))}></menubar-button>
                <menubar-button link='thisPage.html' status=${O(this._isActive("thisPage"))}></menubar-button>
            </div>
        </div>
        `}}c(ee,"styles",$t()),c(ee,"properties",{page:{type:String}});window.customElements.define("app-menubar",ee);const vt=()=>u`

        div {
            display:flex;
            flex-direction: column;
        }

        .wrapper {
            width:300px;
            /* height: calc(100vh - var(--topMargin) - var(--bottomMargin) - 70px); */

            position: sticky;
            justify-content: flex-end;
            align-items: center;
            top: 0;
        }
            
        .box {
            margin-top: 70px;
            justify-content: flex-end;
            /* height: calc(100vh - var(--topMargin) - var(--bottomMargin) - 70px); // 70 is for the lower bottom. */
            height: 200px; 
            width: 200px;
            overflow: hidden;
            background-color: var(--yellow95);
            border-radius: 50px;
            object-fit: contain;
        }

        .picture{
            width: 300px;
            height: 300px;
            transform: translate(-5%, 30%);
            object-fit: contain;
            object-position: top;
        }
    `;class Ne extends d{render(){return h`
            <div class = "wrapper">
                <div class = "box">
                    <img src=${Oe} alt="Picture of me" class="picture" />
                </div>
            </div>
        `}}c(Ne,"styles",[vt(),$()]);window.customElements.define("resume-hero-picture",Ne);const yt=()=>u`
        :host{
            display: flex;
            flex-direction: column;
        }
        ul {
            list-style-type: none;
            padding-left: 0px;
        }
        h3{
            margin-bottom: 20px;
        }
    `,bt=()=>u`
        :host{
            display: block;
        }
    `,R=class R extends d{render(){return h`
        <h3>${this.heading}</h3>
        <slot></slot>
        `}};c(R,"properties",{heading:{type:String},rowType:{type:Boolean}}),c(R,"styles",R.rowType?[$(),bt()]:[$(),yt()]);let te=R;window.customElements.define("resume-element",te);const wt=()=>u`
        :host {
            display:flex;
            margin-bottom: 10px;
            transition-duration: 500ms;
        }

/* Button layout and placement */
        button {
            display: flex;
			background-color: var(--neutral99);
            padding: 0px;
            padding-inline: 0px;
            padding-block: 0px;
            border: none;
            cursor: pointer;
            width: 100%;
            height: 100%;
            z-index:11;

            
        }

/* TEST FOR ANIMATION */

        h4 {
            color: var(--neutral40);
            text-align: start;
        }

        h4.sub{
            font-weight: normal;
        }
    /* DIV STYLE */
        div {
            border-radius: 10px;
        }
        .accordion-bg {
            background-color: var(--neutral70);
            width: 100%;
            height: 55px;

            position:relative;
            transition-duration: 100ms;
            
        }
        .accordion-fg {
            background-color: var(--neutral99);
            transform: translate(-3px, -3px);
            /* height: 100%; */
            padding: 0 20px 0 20px;
            overflow: hidden;
        }


        .accordion-text {
            color: var(--neutral40);
            
            font-size: 16px;
            text-align: justify;
        }

    /* HOVER STATE */

        .accordion-bg:hover {
            background-color: var(--neutral30);
        }

        .accordion-bg:hover h4 {
            color: var(--neutral10);
        }

        .accordion-bg:hover .accordion-text {
            color: var(--neutral10);
        }

    /* EXPANDED STATE */
        .expanded {
            height: 100%;
            transition-duration:400ms;
        }
    `;class ie extends d{_click(e){e.preventDefault(),this.shadowRoot.querySelector(".accordion-bg").classList.toggle("expanded")}render(){return h`
            <li>
                <button @click=${this._click}>
                    <!-- <accordion-cell heading1=${this.content[0]} heading2=${this.content[1]} bodyText=${this.content[3]}></accordion-cell> -->
                    <div class='accordion-bg'> 
                        <div class='accordion-fg'>
                            <h4>${this.content[0]}</h4>
                            <h4 class='sub'>${this.content[1]}</h4>
                            <p class='accordion-text'>${this.content[3]}</p>
                        </div>
                    </div>
                </button>
            </li>
        `}}c(ie,"styles",[$(),wt()]),c(ie,"properties",{content:{Type:Object}});window.customElements.define("sub-item",ie);const _t=()=>u`
/* Remove list default list styling */
        ul {
            list-style-type: none;
            padding-left: 0px;
            margin-top: 0px;
            margin-bottom: 0px;
            justify-content:center;
        }
    `;class se extends d{render(){const e=[];return this.listContent.forEach(t=>{e.push(h`<sub-item .content = ${t}>`)}),h`
            <ul id=subList>
                ${e}
            </ul>
        `}}c(se,"styles",[$(),_t()]),c(se,"properties",{listContent:{Type:Object}});window.customElements.define("sub-list",se);const At=()=>u`
        li{
            display: flex;
            flex-direction: row;
            column-gap: 20px;
        }
        div {
            padding-top: 2px; // 2px because aligning the accordionCell (subItem). Padding  there 5px - 3px moving accordion-fg (w/ text)
        }
        slot{
            display: flex;
            flex-direction: column;
            min-width: 300px;
        }

        h4 {
            margin-bottom: 2px;
            margin-top: 0px;
            width: 100px;
        }

        h4.sub{
            font-weight: normal;
        }
    `;class ne extends d{render(){return h`
            <li>
                <div>
                    <h4>${this.heading}</h4>
                    <h4 class='sub'>${this.subheading}</h4>
                </div>
                <slot></slot>
            </li>
        `}}c(ne,"styles",[$(),At()]),c(ne,"properties",{heading:{Type:String},subheading:{Type:String}});window.customElements.define("resume-main-list",ne);const St=()=>u`
        :host{
            display: block;
        }
    `;class re extends d{render(){return h`
        <h3>${this.heading}</h3>
        <slot></slot>
            
        `}}c(re,"styles",[$(),St()]),c(re,"properties",{heading:{type:String}});window.customElements.define("resume-chips",re);const kt=()=>u`
        :host {
            margin: 0px 10px 10px 10px;
            display: inline-block;
        }

    /* DIV Chips  */

        div {
            border-radius: 10px;
        }
        .chips-fg {
            background-color: var(--neutral60);
            transform: translate(-3px, -3px);
            
        }

        .chips-bg {
            background-color: var(--neutral40);
            
        }

        .chips-text {
            color: var(--neutral99);
            margin: 5px 10px 5px 10px;
            font-size: 14px;
            cursor: default;

        }
    `;class oe extends d{_renderDIV(e){return h`
            <div class='chips-bg'>
                <div class='chips-fg'>
                    <p class='chips-text'>${this.content}</p>
                </div>
            </div>
        `}render(){return h`
            ${this._renderDIV(this.text)}
        `}}c(oe,"styles",[$(),kt()]),c(oe,"properties",{content:{Type:String}});window.customElements.define("chips-item",oe);const Et=()=>u`
        :host{
            display: block;
        }
        h4 {
            margin-top: 20px;
            margin-bottom: 1em;
        }
        .chipsWrapper {
            display: inline-block;
        }
    `;class ae extends d{render(){const e=[];return this.listContent.forEach(t=>{e.push(h`<chips-item content = ${t}>`)}),h`
                <h4>${this.heading}</h4>
                <div class='chipsWrapper'>
                    ${e}
                </div>
        `}}c(ae,"styles",[$(),Et()]),c(ae,"properties",{listContent:{Type:Object},heading:{Type:Text}});window.customElements.define("resume-chips-section",ae);const Ct=()=>u`
        .footer {
            width: 100%;
            height: 80px;
            margin: 10px, 20px, 10px, 20px;
        }
    `;var z;let Pt=(z=class extends d{render(){return h`
            <div class='footer'>


            </div>
        
        `}},c(z,"styles",[Ct(),$()]),c(z,"properties",{}),z);window.customElements.define("resume-footer",Pt);const le=12,pe=1,Tt=2,ce=4,Mt=4,_e=u`var(--neutral20)`;let S=pe/2,v=le-pe/2,Ae=v/2,Se=v-ce-Mt;const Ut=()=>h`
    <svg xmlns="http://www.w3.org/2000/svg">
        <polyline class='line1' points="${ce},${S} ${S},${S} ${S},${v} ${v},${v} ${v},${v-ce}"/>
        <polyline class="line2" points="${v-Se},${S} ${v},${S} ${Ae},${Ae} ${v},${S} ${v},${Se}"/>
    </svg>
    `,Ht=()=>u`
        :host {
            height: 16px;
        }
        
        svg {
            height: ${le}px;
            width: ${le}px;
        }
        .line1{
            fill: none;
            stroke: ${_e};
            stroke-width: ${pe}px;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        .line2{
            fill: none;
            stroke: ${_e};
            stroke-width: ${Tt}px;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
    `;class je extends d{render(){return h`
        ${Ut()}
        `}}c(je,"styles",[Ht(),$()]);window.customElements.define("new-tab-svg",je);const Ot=()=>u`
        .wrapper {
            width: 100%;
            margin: 10px, 20px, 10px, 20px;
        }
        .row{
            flex-direction: row;
        }
        h4{
            width: 100px;
            
        }

        h4.sub{
            width:100%;
            font-weight: normal;
            padding-left: 20px;
            margin-bottom: 5px;
        }
        a {
            display: inline-flex;
            align-items: center;
        }

        new-tab-svg {
            margin: 0 10px 0 10px;
        }
    `;class De extends d{render(){return h`
            <div class='wrapper'>
                <div class='row'>    
                    <h4>${a.resume.contactSubheading1}</h4>
                    <a href='mailto:${a.resume.contactText1}'>
                        <h4 class='sub'>${a.resume.contactText1}</h4>
                        <new-tab-svg></new-tab-svg>
                    </a>
                </div>
                <div class='row'>    
                    <h4>${a.resume.contactSubheading2}</h4>
                    <a target="_blank" href=${a.resume.contactText2Link}>
                        <h4 class='sub'>${a.resume.contactText2}</h4>
                        <new-tab-svg></new-tab-svg>
                    </a>
                </div>
            </div>
        
        `}}c(De,"styles",[Ot(),$()]);window.customElements.define("resume-contact",De);const Rt=()=>u`      
        :host{
            max-width: calc(100vw - 493px - 178px); /* Calculated with the padding on either side of MainContent */
            flex-shrink: 10;
            margin-top: var(--topMargin);
            margin-left: calc(var(--leftMargin) * 4);
            margin-right: calc(var(--rightMargin) * 4);
            overflow-x: hidden;
        }

        div {
            display: flex;
            flex-direction: column; 
            max-width: 769px;
            padding: 2px 0px 10px 0px; //2px from lining up with the left column
        }

        h3 {
            margin-top: 0px;
        }

        h4 {
            margin-bottom: 2px;
            margin-top: 0px;
            height:100%;
        }

        h4.sub{
            font-weight: normal;
        }
    `;class ze extends d{render(){return h`
            <!-- Profile -->
            <div>
                <h3>${a.resume.profileHeading}</h3>
                <p>${a.resume.profileText}</p>
            </div>
            <!--Work Experience -->
            <resume-element heading=${a.resume.experienceHeading}>
                <resume-main-list heading=${a.resume.exp1Year} subheading=${a.resume.exp1Company}>
                    <sub-list .listContent=${a.resume[a.resume.exp1Company]}></sub-list>
                </resume-main-list>
                <resume-main-list heading=${a.resume.exp2Year} subheading=${a.resume.exp2Company}>
                    <sub-list .listContent=${a.resume[a.resume.exp2Company]}></sub-list>
                </resume-main-list>
                <resume-main-list heading=${a.resume.exp3Year} subheading=${a.resume.exp3Company}>
                    <sub-list .listContent=${a.resume[a.resume.exp3Company]}></sub-list>
                </resume-main-list>
            </resume-element>
            <!-- Education -->
            <resume-element heading=${a.resume.educationHeading}>
                <resume-main-list heading=${a.resume.edu1Year} subheading=${a.resume.edu1Place}>
                    <div>
                        <h4>${a.resume[a.resume.edu1Place][0]}</h4>
                        <h4 class='sub'>${a.resume[a.resume.edu1Place][1]}</h4>
                    </div>
                    <div>
                        <h4>${a.resume[a.resume.edu1Place][2]}</h4>
                        <h4 class='sub'>${a.resume[a.resume.edu1Place][3]}</h4>
                    </div>
                </resume-main-list>
            </resume-element>
            <!-- Skills, list with 3 headings positioned in 2 columns -->
            <resume-element rowType heading=${a.resume.skillsHeading}>
                <!-- sub-row per heading, like "Product Development" -->
                <resume-chips-section heading=${a.resume.skillsSubheading1} .listContent=${a.resume.skillsText1}></resume-chips-section> 
                <resume-chips-section heading=${a.resume.skillsSubheading2} .listContent=${a.resume.skillsText2}></resume-chips-section> 
                <resume-chips-section heading=${a.resume.skillsSubheading3} .listContent=${a.resume.skillsText3}></resume-chips-section> 
            </resume-element>
            <!-- Contact a two column field with category "Email" and "LinkedIn" -->
            <resume-element rowType heading=${a.resume.contactHeading}>
                <resume-contact></resume-contact>
            </resume-element>
            <resume-footer></resume-footer>
        `}}c(ze,"styles",[$(),Rt()]);window.customElements.define("main-resume",ze);const Lt=()=>u`
        :host{
            display:flex;
            flex-direction: row;
        }
        
        .ResumeTextSection p{
            margin-top: 0px;
        }
        
        .ResumeListSection p{
            margin-top: 0px;
        }
    `;var K;let It=(K=class extends d{render(){return h`
        <resume-hero-picture></resume-hero-picture>
        <main-resume></main-resume>
        `}},c(K,"styles",Lt()),K);window.customElements.define("app-resume",It);const Nt=()=>u`
        :host{
            /* display: flex;
            flex-direction: column; */
            position: relative;

        }

        div {
            text-align: center;
            transform: translate(0, 40vh);
        }
    `;class Be extends d{render(){return h`
        <div>
            <h1>Under construction</h1>
            <h4>This page will soon be up and running</h4>
            <new-tab-svg></new-tab-svg>
        </div>
        `}}c(Be,"styles",Nt());window.customElements.define("app-thispage",Be);
