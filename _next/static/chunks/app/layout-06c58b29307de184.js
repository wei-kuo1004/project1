(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9431:function(e,t,n){Promise.resolve().then(n.bind(n,1695)),Promise.resolve().then(n.t.bind(n,4332,23)),Promise.resolve().then(n.t.bind(n,6928,23)),Promise.resolve().then(n.t.bind(n,3195,23))},1695:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return b}});var a=n(7437),r=n(2265);let l=["light","dark"],o="(prefers-color-scheme: dark)",s="undefined"==typeof window,i=(0,r.createContext)(void 0),c=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(d,e),m=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:s="theme",themes:c=m,defaultTheme:d=n?"system":"light",attribute:b="data-theme",value:_,children:v,nonce:$})=>{let[g,S]=(0,r.useState)(()=>h(s,d)),[p,k]=(0,r.useState)(()=>h(s)),w=_?Object.values(_):c,E=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=y());let o=_?_[r]:r,s=t?f():null,i=document.documentElement;if("class"===b?(i.classList.remove(...w),o&&i.classList.add(o)):o?i.setAttribute(b,o):i.removeAttribute(b),a){let e=l.includes(d)?d:null,t=l.includes(r)?r:e;i.style.colorScheme=t}null==s||s()},[]),C=(0,r.useCallback)(e=>{S(e);try{localStorage.setItem(s,e)}catch(e){}},[e]),T=(0,r.useCallback)(t=>{k(y(t)),"system"===g&&n&&!e&&E("system")},[g,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(o);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,r.useEffect)(()=>{let e=e=>{e.key===s&&C(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,r.useEffect)(()=>{E(null!=e?e:g)},[e,g]);let x=(0,r.useMemo)(()=>({theme:g,setTheme:C,forcedTheme:e,resolvedTheme:"system"===g?p:g,themes:n?[...c,"system"]:c,systemTheme:n?p:void 0}),[g,C,e,p,n,c]);return r.createElement(i.Provider,{value:x},r.createElement(u,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:a,storageKey:s,themes:c,defaultTheme:d,attribute:b,value:_,children:v,attrs:w,nonce:$}),v)},u=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:s,defaultTheme:i,value:c,attrs:m,nonce:d})=>{let u="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=s?l.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,a=!0)=>{let r=c?c[e]:e,o=t?e+"|| ''":`'${r}'`,i="";return s&&a&&!t&&l.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||r?`c.add(${o})`:"null":r&&(i+=`d[s](n,${o})`),i},b=e?`!function(){${h}${y(e)}}()`:a?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}${u?"":"else{"+y(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}else{${y(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:b}})},()=>!0),h=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light");function b(e){let{children:t,...n}=e;return(0,a.jsx)(c,{...n,children:t})}},4332:function(){},6928:function(e){e.exports={style:{fontFamily:"'__Inter_c0830b', '__Inter_Fallback_c0830b'",fontStyle:"normal"},className:"__className_c0830b",variable:"__variable_c0830b"}},3195:function(e){e.exports={style:{fontFamily:"'__JetBrains_Mono_03a424', '__JetBrains_Mono_Fallback_03a424'",fontStyle:"normal"},className:"__className_03a424",variable:"__variable_03a424"}}},function(e){e.O(0,[67,971,23,744],function(){return e(e.s=9431)}),_N_E=e.O()}]);