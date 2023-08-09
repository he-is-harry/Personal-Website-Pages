import{s as d1,n as Q,f as _1,o as S1,i as l2,h as s2,r as J1,j as Y1}from"../chunks/scheduler.9a542d92.js";import{S as p1,i as f1,e as z1,a as N,f as h,g as p,m as w1,h as f,j as _,n as y1,k as n,l as D,z as o,o as x1,B as Z,s as T,c as j,d as U,p as r2,b as a2,t as K,C as q1,r as e1,u as t1,v as l1,w as s1,D as K1,H as n2,E as i2,A as C1,F as Q1,x as i1,y as c1}from"../chunks/index.1ffa850a.js";import{e as m1,u as c2,d as o2}from"../chunks/each.3c8562bc.js";import{T as M}from"../chunks/types.3a27cc23.js";const h2=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,d2="always",h3=Object.freeze(Object.defineProperty({__proto__:null,trailingSlash:d2},Symbol.toStringTag,{value:"Module"}));function p2(a){let e,s;return{c(){e=p("span"),s=w1(a[1]),this.h()},l(t){e=f(t,"SPAN",{class:!0,style:!0});var l=_(e);s=y1(l,a[1]),l.forEach(h),this.h()},h(){n(e,"class","tag tag-text svelte-84xwp9"),D(e,"color",a[3]),D(e,"background-color",a[2])},m(t,l){N(t,e,l),o(e,s)},p(t,l){l&2&&x1(s,t[1]),l&8&&D(e,"color",t[3]),l&4&&D(e,"background-color",t[2])},d(t){t&&h(e)}}}function f2(a){let e,s;return{c(){e=p("span"),s=w1(a[1]),this.h()},l(t){e=f(t,"SPAN",{class:!0,style:!0});var l=_(e);s=y1(l,a[1]),l.forEach(h),this.h()},h(){n(e,"class","tag tag-text metal-gradient svelte-84xwp9"),D(e,"color",a[3])},m(t,l){N(t,e,l),o(e,s)},p(t,l){l&2&&x1(s,t[1]),l&8&&D(e,"color",t[3])},d(t){t&&h(e)}}}function u2(a){let e,s,t="#game";return{c(){e=p("span"),s=p("p"),s.textContent=t,this.h()},l(l){e=f(l,"SPAN",{class:!0,style:!0});var r=_(e);s=f(r,"P",{class:!0,style:!0,["data-svelte-h"]:!0}),Z(s)!=="svelte-5z9i25"&&(s.textContent=t),r.forEach(h),this.h()},h(){n(s,"class","gradient-text tag-text svelte-84xwp9"),D(s,"margin","0"),n(e,"class","tag svelte-84xwp9"),D(e,"background-color",a[2])},m(l,r){N(l,e,r),o(e,s)},p(l,r){r&4&&D(e,"background-color",l[2])},d(l){l&&h(e)}}}function v2(a){let e;function s(r,c){return r[0]==M.Game?u2:r[0]==M.ML?f2:p2}let t=s(a),l=t(a);return{c(){l.c(),e=z1()},l(r){l.l(r),e=z1()},m(r,c){l.m(r,c),N(r,e,c)},p(r,[c]){t===(t=s(r))&&l?l.p(r,c):(l.d(1),l=t(r),l&&(l.c(),l.m(e.parentNode,e)))},i:Q,o:Q,d(r){r&&h(e),l.d(r)}}}function m2(a,e,s){let{type:t}=e,l="unknown-tag",r="var(--dark-2)",c="var(--surface-3)";return t==M.Svelte?(l="#svelte",r="#ff3e00",c="#ffffff"):t==M.Typescript?(l="#typescript",r="#2775c3",c="#ffffff"):t==M.CSS?(l="#css",r="#f954be",c="#313244"):t==M.Node?(l="#node",r="#8dba55",c="#46483d"):t==M.Python?(l="#python",r="#3879ab",c="#ffda5d"):t==M.Java?(l="#java",r="#ff9e29",c="#2e71a3"):t==M.CPP?(l="#c++",r="#709ace",c="#ffffff"):t==M.ML?(l="#ml",c="#000000"):t==M.ProceduralGeneration?l="#proc-gen":t==M.Game?(l="#game",r="#000000"):t==M.AI?(l="#ai",r="#d68f91",c="#000000"):t==M.Neuroevolution?l="#neuroevolution":t==M.PixelArt?l="#pixel-art":t==M.Backpropagation?l="#backpropagation":t==M.Template?(l="#template",r="#bb9b72",c="#000000"):t==M.Algorithms&&(l="#algorithms"),a.$$set=i=>{"type"in i&&s(0,t=i.type)},[t,l,r,c]}class g2 extends p1{constructor(e){super(),f1(this,e,m2,v2,d1,{type:0})}}function D1(a,e,s){const t=a.slice();return t[5]=e[s],t}function B1(a){let e,s;return e=new g2({props:{type:a[5]}}),{c(){e1(e.$$.fragment)},l(t){t1(e.$$.fragment,t)},m(t,l){l1(e,t,l),s=!0},p(t,l){const r={};l&16&&(r.type=t[5]),e.$set(r)},i(t){s||(U(e.$$.fragment,t),s=!0)},o(t){K(e.$$.fragment,t),s=!1},d(t){s1(e,t)}}}function _2(a){let e,s,t,l,r,c,i,u,C,y,b,m,E,x,L=m1(a[4]),k=[];for(let d=0;d<L.length;d+=1)k[d]=B1(D1(a,L,d));const B=d=>K(k[d],1,1,()=>{k[d]=null});return{c(){e=p("article"),s=p("a"),t=p("div"),l=p("img"),c=T(),i=p("section"),u=p("h5"),C=w1(a[2]),y=T(),b=p("p"),m=w1(a[3]),E=T();for(let d=0;d<k.length;d+=1)k[d].c();this.h()},l(d){e=f(d,"ARTICLE",{class:!0});var g=_(e);s=f(g,"A",{href:!0,class:!0});var w=_(s);t=f(w,"DIV",{style:!0});var F=_(t);l=f(F,"IMG",{class:!0,src:!0,alt:!0}),F.forEach(h),c=j(w),i=f(w,"SECTION",{class:!0});var A=_(i);u=f(A,"H5",{class:!0});var O=_(u);C=y1(O,a[2]),O.forEach(h),y=j(A),b=f(A,"P",{class:!0});var H=_(b);m=y1(H,a[3]),H.forEach(h),E=j(A);for(let S=0;S<k.length;S+=1)k[S].l(A);A.forEach(h),w.forEach(h),g.forEach(h),this.h()},h(){n(l,"class","project-image svelte-116fkmd"),_1(l.src,r=a[1])||n(l,"src",r),n(l,"alt",a[2]),D(t,"container-type","inline-size"),D(t,"width","100%"),D(t,"height","auto"),n(u,"class","project-title svelte-116fkmd"),n(b,"class","project-description svelte-116fkmd"),n(i,"class","project-info svelte-116fkmd"),n(s,"href",a[0]),n(s,"class","no-underline svelte-116fkmd"),n(e,"class","project-block svelte-116fkmd")},m(d,g){N(d,e,g),o(e,s),o(s,t),o(t,l),o(s,c),o(s,i),o(i,u),o(u,C),o(i,y),o(i,b),o(b,m),o(i,E);for(let w=0;w<k.length;w+=1)k[w]&&k[w].m(i,null);x=!0},p(d,[g]){if((!x||g&2&&!_1(l.src,r=d[1]))&&n(l,"src",r),(!x||g&4)&&n(l,"alt",d[2]),(!x||g&4)&&x1(C,d[2]),(!x||g&8)&&x1(m,d[3]),g&16){L=m1(d[4]);let w;for(w=0;w<L.length;w+=1){const F=D1(d,L,w);k[w]?(k[w].p(F,g),U(k[w],1)):(k[w]=B1(F),k[w].c(),U(k[w],1),k[w].m(i,null))}for(r2(),w=L.length;w<k.length;w+=1)B(w);a2()}(!x||g&1)&&n(s,"href",d[0])},i(d){if(!x){for(let g=0;g<L.length;g+=1)U(k[g]);x=!0}},o(d){k=k.filter(Boolean);for(let g=0;g<k.length;g+=1)K(k[g]);x=!1},d(d){d&&h(e),q1(k,d)}}}function w2(a,e,s){let{projectLink:t}=e,{imgSrc:l}=e,{title:r}=e,{description:c}=e,{tags:i}=e;return a.$$set=u=>{"projectLink"in u&&s(0,t=u.projectLink),"imgSrc"in u&&s(1,l=u.imgSrc),"title"in u&&s(2,r=u.title),"description"in u&&s(3,c=u.description),"tags"in u&&s(4,i=u.tags)},[t,l,r,c,i]}class o1 extends p1{constructor(e){super(),f1(this,e,w2,_2,d1,{projectLink:0,imgSrc:1,title:2,description:3,tags:4})}}function y2(a){let e,s,t="Projects",l,r,c,i,u,C,y,b,m,E,x,L,k,B,d,g,w,F,A,O,H,S,I,$,R,J,Y,r1;return C=new o1({props:{projectLink:"https://github.com/he-is-harry/Personal-Website",imgSrc:"/projects/PersonalWebsite.png",title:"Personal Website",description:"The website that you are currently looking at right now!",tags:[M.Svelte,M.Typescript,M.CSS,M.Node]}}),m=new o1({props:{projectLink:"https://github.com/he-is-harry/Camp-Haliburton",imgSrc:"/projects/CampHaliburton.png",title:"Camp Haliburton",description:"A RPG pixel art game based on Harry's experiences as a scout",tags:[M.Game,M.Java,M.PixelArt]}}),L=new o1({props:{projectLink:"https://github.com/he-is-harry/Neuroevolution-Flappy-Bird",imgSrc:"/projects/NeuroevolutionFlappyBird.png",title:"Neuroevolution Flappy Bird",description:"Train neural networks to play a user or each other in Flappy Bird",tags:[M.ML,M.Neuroevolution,M.Java]}}),d=new o1({props:{projectLink:"https://github.com/he-is-harry/Doodle-Classifier",imgSrc:"/projects/DoodleClassifier.png",title:"Doodle Classifier",description:"Draw doodles to test and train a neural network classifier",tags:[M.ML,M.Java,M.Backpropagation]}}),F=new o1({props:{projectLink:"https://github.com/he-is-harry/Template-Neural-Network",imgSrc:"/projects/TemplateNeuralNetwork.png",title:"Template Neural Network",description:"A framework to start neural network projects",tags:[M.Java,M.Template]}}),H=new o1({props:{projectLink:"https://github.com/he-is-harry/Golf",imgSrc:"/projects/GolfCartGolf.png",title:"Golf Cart Golf",description:"Golf played as a golf cart on a procedurally generated map",tags:[M.Game,M.ProceduralGeneration,M.Java]}}),$=new o1({props:{projectLink:"https://github.com/he-is-harry/ChessAI",imgSrc:"/projects/ChessAI.png",title:"Chess AI",description:"Play chess against the computer algorithm or against another player",tags:[M.Game,M.AI,M.Java,M.Algorithms]}}),Y=new o1({props:{projectLink:"https://github.com/he-is-harry/Wii",imgSrc:"/projects/WiiTennis.png",title:"Wii Tennis",description:"A game emulating Wii Sports Tennis played against a CPU with varying difficulties",tags:[M.Python,M.Game]}}),{c(){e=p("section"),s=p("h1"),s.textContent=t,l=T(),r=p("div"),c=T(),i=p("ul"),u=p("li"),e1(C.$$.fragment),y=T(),b=p("li"),e1(m.$$.fragment),E=T(),x=p("li"),e1(L.$$.fragment),k=T(),B=p("li"),e1(d.$$.fragment),g=T(),w=p("li"),e1(F.$$.fragment),A=T(),O=p("li"),e1(H.$$.fragment),S=T(),I=p("li"),e1($.$$.fragment),R=T(),J=p("li"),e1(Y.$$.fragment),this.h()},l(P){e=f(P,"SECTION",{id:!0,class:!0});var q=_(e);s=f(q,"H1",{["data-svelte-h"]:!0}),Z(s)!=="svelte-136d6se"&&(s.textContent=t),l=j(q),r=f(q,"DIV",{class:!0}),_(r).forEach(h),c=j(q),i=f(q,"UL",{class:!0});var G=_(i);u=f(G,"LI",{class:!0});var a1=_(u);t1(C.$$.fragment,a1),a1.forEach(h),y=j(G),b=f(G,"LI",{class:!0});var W=_(b);t1(m.$$.fragment,W),W.forEach(h),E=j(G),x=f(G,"LI",{class:!0});var k1=_(x);t1(L.$$.fragment,k1),k1.forEach(h),k=j(G),B=f(G,"LI",{class:!0});var u1=_(B);t1(d.$$.fragment,u1),u1.forEach(h),g=j(G),w=f(G,"LI",{class:!0});var X=_(w);t1(F.$$.fragment,X),X.forEach(h),A=j(G),O=f(G,"LI",{class:!0});var v=_(O);t1(H.$$.fragment,v),v.forEach(h),S=j(G),I=f(G,"LI",{class:!0});var V=_(I);t1($.$$.fragment,V),V.forEach(h),R=j(G),J=f(G,"LI",{class:!0});var z=_(J);t1(Y.$$.fragment,z),z.forEach(h),G.forEach(h),q.forEach(h),this.h()},h(){n(r,"class","break-line svelte-1ukmx5t"),n(u,"class","grid-element svelte-1ukmx5t"),n(b,"class","grid-element svelte-1ukmx5t"),n(x,"class","grid-element svelte-1ukmx5t"),n(B,"class","grid-element svelte-1ukmx5t"),n(w,"class","grid-element svelte-1ukmx5t"),n(O,"class","grid-element svelte-1ukmx5t"),n(I,"class","grid-element svelte-1ukmx5t"),n(J,"class","grid-element svelte-1ukmx5t"),n(i,"class","grid-list svelte-1ukmx5t"),n(e,"id","Projects"),n(e,"class","svelte-1ukmx5t")},m(P,q){N(P,e,q),o(e,s),o(e,l),o(e,r),o(e,c),o(e,i),o(i,u),l1(C,u,null),o(i,y),o(i,b),l1(m,b,null),o(i,E),o(i,x),l1(L,x,null),o(i,k),o(i,B),l1(d,B,null),o(i,g),o(i,w),l1(F,w,null),o(i,A),o(i,O),l1(H,O,null),o(i,S),o(i,I),l1($,I,null),o(i,R),o(i,J),l1(Y,J,null),r1=!0},p:Q,i(P){r1||(U(C.$$.fragment,P),U(m.$$.fragment,P),U(L.$$.fragment,P),U(d.$$.fragment,P),U(F.$$.fragment,P),U(H.$$.fragment,P),U($.$$.fragment,P),U(Y.$$.fragment,P),r1=!0)},o(P){K(C.$$.fragment,P),K(m.$$.fragment,P),K(L.$$.fragment,P),K(d.$$.fragment,P),K(F.$$.fragment,P),K(H.$$.fragment,P),K($.$$.fragment,P),K(Y.$$.fragment,P),r1=!1},d(P){P&&h(e),s1(C),s1(m),s1(L),s1(d),s1(F),s1(H),s1($),s1(Y)}}}class k2 extends p1{constructor(e){super(),f1(this,e,null,y2,d1,{})}}function b2(a){let e,s="",t,l,r;return{c(){e=p("script"),e.innerHTML=s,l=T(),r=p("div"),this.h()},l(c){const i=K1("svelte-v4ysta",document.head);e=f(i,"SCRIPT",{src:!0,["data-svelte-h"]:!0}),Z(e)!=="svelte-2lmn1n"&&(e.innerHTML=s),i.forEach(h),l=j(c),r=f(c,"DIV",{id:!0}),_(r).forEach(h),this.h()},h(){_1(e.src,t="https://www.youtube.com/iframe_api")||n(e,"src",t),n(r,"id",Z1)},m(c,i){o(document.head,e),N(c,l,i),N(c,r,i)},p:Q,i:Q,o:Q,d(c){c&&(h(l),h(r)),h(e)}}}const Z1="youtube-player";function x2(a,e,s){let{videoId:t}=e;return S1(()=>{window.addEventListener("YoutubePlayerSizeReady",l=>{function r(){new YT.Player(Z1,{height:l.detail.height,width:l.detail.width,videoId:t})}window.YT?r():window.onYouTubeIframeAPIReady=r})}),a.$$set=l=>{"videoId"in l&&s(0,t=l.videoId)},[t]}class C2 extends p1{constructor(e){super(),f1(this,e,x2,b2,d1,{videoId:0})}}function M2(a){let e,s=`<div class="tooltip-container svelte-wknpeo"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="100px" viewBox="0 0 306 344.35" enable-background="new 0 0 306 344.35" xml:space="preserve"><path fill="#00599C" d="M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175
    L302.107,258.262z"></path><path fill="#004482" d="M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263
    c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"></path><path fill="#659AD2" d="M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0
    L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"></path><g><path fill="#FFFFFF" d="M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968
        l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51
        c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"></path></g><g><polygon fill="#FFFFFF" points="255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508 
        221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"></polygon></g><g><polygon fill="#FFFFFF" points="297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508 
        263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"></polygon></g></svg> <span class="tooltip-text svelte-wknpeo">C++</span></div> <div class="tooltip-container svelte-wknpeo"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="100px" viewBox="0 0 300 380" style="enable-background:new 0 0 300 550;" xml:space="preserve"><path style="fill:#5382A1;" d="M285.104,430.945h-2.038v-1.14h5.486v1.14h-2.024v5.688h-1.424V430.945z M296.046,431.242h-0.032

l-2.019,5.392h-0.924l-2.006-5.392h-0.025v5.392h-1.342v-6.828h1.975l1.86,4.835l1.854-4.835h1.968v6.828h-1.31V431.242z"></path><path style="fill:#5382A1;" d="M102.681,291.324c0,0-14.178,8.245,10.09,11.035c29.4,3.354,44.426,2.873,76.825-3.259

c0,0,8.518,5.341,20.414,9.967C137.38,340.195,45.634,307.264,102.681,291.324"></path><path style="fill:#5382A1;" d="M93.806,250.704c0,0-15.902,11.771,8.384,14.283c31.406,3.24,56.208,3.505,99.125-4.759

c0,0,5.936,6.018,15.27,9.309C128.771,295.215,30.962,271.562,93.806,250.704"></path><path style="fill:#F8981D;" d="M168.625,181.799c17.896,20.604-4.702,39.145-4.702,39.145s45.441-23.458,24.572-52.833

c-19.491-27.394-34.438-41.005,46.479-87.934C234.974,80.177,107.961,111.899,168.625,181.799"></path><path style="fill:#5382A1;" d="M264.684,321.369c0,0,10.492,8.645-11.555,15.333c-41.923,12.7-174.488,16.535-211.314,0.506

c-13.238-5.759,11.587-13.751,19.396-15.428c8.144-1.766,12.798-1.437,12.798-1.437c-14.722-10.371-95.157,20.364-40.857,29.166

C181.236,373.524,303.095,338.695,264.684,321.369"></path><path style="fill:#5382A1;" d="M109.499,208.617c0,0-67.431,16.016-23.879,21.832c18.389,2.462,55.047,1.905,89.193-0.956

c27.906-2.354,55.927-7.359,55.927-7.359s-9.84,4.214-16.959,9.075c-68.475,18.009-200.756,9.631-162.674-8.79

C83.313,206.851,109.499,208.617,109.499,208.617"></path><path style="fill:#5382A1;" d="M230.462,276.231c69.608-36.171,37.424-70.931,14.96-66.248c-5.506,1.146-7.961,2.139-7.961,2.139

s2.044-3.202,5.948-4.588c44.441-15.624,78.619,46.081-14.346,70.52C229.063,278.055,230.14,277.092,230.462,276.231"></path><path style="fill:#F8981D;" d="M188.495,4.399c0,0,38.55,38.563-36.563,97.862c-60.233,47.568-13.735,74.69-0.025,105.678

c-35.159-31.722-60.961-59.647-43.651-85.637C133.663,84.151,204.049,65.654,188.495,4.399"></path><path style="fill:#5382A1;" d="M116.339,374.246c66.815,4.277,169.417-2.373,171.847-33.988c0,0-4.671,11.985-55.219,21.503

c-57.028,10.732-127.364,9.479-169.081,2.601C63.887,364.361,72.426,371.43,116.339,374.246"></path><path style="fill:#5382A1;" d="M105.389,495.048c-6.303,5.467-12.96,8.536-18.934,8.536c-8.527,0-13.134-5.113-13.134-13.314

c0-8.871,4.936-15.357,24.739-15.357h7.328V495.048 M122.781,514.671v-60.742c0-15.517-8.85-25.756-30.188-25.756

c-12.457,0-23.369,3.076-32.238,6.999l2.56,10.752c6.983-2.563,16.022-4.949,24.894-4.949c12.292,0,17.58,4.949,17.58,15.181v7.677

h-6.135c-29.865,0-43.337,11.593-43.337,28.994c0,15.017,8.878,23.553,25.594,23.553c10.745,0,18.766-4.436,26.264-10.928

l1.361,9.22H122.781z"></path><path style="fill:#5382A1;" d="M180.825,514.671h-21.692l-26.106-84.96h18.943l16.199,52.2l3.601,15.699

c8.195-22.698,13.991-45.726,16.89-67.899h18.427C202.15,457.688,193.266,488.396,180.825,514.671"></path><path style="fill:#5382A1;" d="M264.038,495.048c-6.315,5.467-12.984,8.536-18.958,8.536c-8.512,0-13.131-5.113-13.131-13.314

c0-8.871,4.948-15.357,24.749-15.357h7.34V495.048 M281.428,514.671v-60.742c0-15.517-8.872-25.756-30.185-25.756

c-12.466,0-23.382,3.076-32.247,6.999l2.556,10.752c6.986-2.563,16.042-4.949,24.907-4.949c12.283,0,17.579,4.949,17.579,15.181

v7.677h-6.145c-29.874,0-43.34,11.593-43.34,28.994c0,15.017,8.871,23.553,25.584,23.553c10.751,0,18.769-4.436,26.28-10.928

l1.366,9.22H281.428z"></path><path style="fill:#5382A1;" d="M36.847,529.099c-4.958,7.239-12.966,12.966-21.733,16.206l-8.587-10.105

c6.673-3.424,12.396-8.954,15.055-14.105c2.3-4.581,3.252-10.485,3.252-24.604v-96.995h18.478v95.666

C43.311,514.038,41.802,521.663,36.847,529.099"></path></svg> <span class="tooltip-text svelte-wknpeo">Java</span></div> <div class="tooltip-container svelte-wknpeo"><svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 32 32"><defs><linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#366a96"></stop><stop offset="1" stop-color="#3679b0"></stop></linearGradient><linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc836"></stop><stop offset="1" stop-color="#ffe873"></stop></linearGradient></defs><g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)"><path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#A)"></path><path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#B)"></path><path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#fff"></path></g></svg> <span class="tooltip-text svelte-wknpeo">Python</span></div> <div class="tooltip-container svelte-wknpeo"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="100px" viewBox="0 0 98.1 118" style="enable-background:new 0 0 98.1 118;" xml:space="preserve"><style type="text/css">.st0 {
                    fill: #ff3e00;
                }
                .st1 {
                    fill: #ffffff;
                }
            </style><path class="st0" d="M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3
c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1
c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"></path><path class="st1" d="M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1
c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72
c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7
c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5
c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1
c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1
c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5
c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"></path></svg> <span class="tooltip-text svelte-wknpeo">Svelte</span></div> <div class="tooltip-container svelte-wknpeo"><svg fill="none" height="100px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="512" rx="50" width="512"></rect><rect fill="#3178c6" height="512" rx="50" width="512"></rect><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"></path></svg> <span class="tooltip-text svelte-wknpeo">Typescript</span></div> <div class="tooltip-container svelte-wknpeo"><svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="70 100 370 415"><title>HTML5 Logo</title><path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6"></path><path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"></path><path fill="#f16529" d="M256 480.5V131H404.3L376 447"></path><path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"></path><path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"></path></svg> <span class="tooltip-text svelte-wknpeo">HTML</span></div> <div class="tooltip-container svelte-wknpeo"><svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 512 512"><path fill="#264de4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"></path><path fill="#2965f1" d="M405.388 431.408l35.148-393.73H256v435.146z"></path><path fill="#ebebeb" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"></path><path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"></path></svg> <span class="tooltip-text svelte-wknpeo">CSS</span></div>`;return{c(){e=p("div"),e.innerHTML=s,this.h()},l(t){e=f(t,"DIV",{class:!0,["data-svelte-h"]:!0}),Z(e)!=="svelte-m3jhyf"&&(e.innerHTML=s),this.h()},h(){n(e,"class","skill-bar svelte-wknpeo")},m(t,l){N(t,e,l)},p:Q,i:Q,o:Q,d(t){t&&h(e)}}}class E2 extends p1{constructor(e){super(),f1(this,e,null,M2,d1,{})}}function H2(a){return a()}function I2(a){a.forEach(H2)}const H1=[],N1=[],L1=[],F1=[],X1=Promise.resolve();let V1=!1;function $2(){V1||(V1=!0,X1.then(T2))}function L2(){return $2(),X1}function z2(a){L1.push(a)}const P1=new Set;let I1=0;function T2(){do{for(;I1<H1.length;){const a=H1[I1];I1++,j2(a.$$)}for(H1.length=0,I1=0;N1.length;)N1.pop()();for(let a=0;a<L1.length;a+=1){const e=L1[a];P1.has(e)||(P1.add(e),e())}L1.length=0}while(H1.length);for(;F1.length;)F1.pop()();V1=!1,P1.clear()}function j2(a){if(a.fragment!==null){a.update(),I2(a.before_update);const e=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,e),a.after_update.forEach(z2)}}const S2={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},h1=(a,e)=>new CustomEvent(a,{detail:e});function P2(a,e={}){const{root:s,rootMargin:t,threshold:l,unobserveOnEnter:r}=Object.assign(Object.assign({},S2),e);let c={x:void 0,y:void 0},i={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&a){const u=new IntersectionObserver((C,y)=>{C.forEach(b=>{c.y>b.boundingClientRect.y?i.vertical="up":i.vertical="down",c.x>b.boundingClientRect.x?i.horizontal="left":i.horizontal="right",c={y:b.boundingClientRect.y,x:b.boundingClientRect.x};const m={inView:b.isIntersecting,entry:b,scrollDirection:i,node:a,observer:y};a.dispatchEvent(h1("inview_change",m)),a.dispatchEvent(h1("change",m)),b.isIntersecting?(a.dispatchEvent(h1("inview_enter",m)),a.dispatchEvent(h1("enter",m)),r&&y.unobserve(a)):(a.dispatchEvent(h1("inview_leave",m)),a.dispatchEvent(h1("leave",m)))})},{root:s,rootMargin:t,threshold:l});return L2().then(()=>{a.dispatchEvent(h1("inview_init",{observer:u,node:a})),a.dispatchEvent(h1("init",{observer:u,node:a}))}),u.observe(a),{destroy(){u.unobserve(a)}}}}function e2(a){return a<.5?4*a*a*a:.5*Math.pow(2*a-2,3)+1}function t2(a,{delay:e=0,duration:s=400,easing:t=l2}={}){const l=+getComputedStyle(a).opacity;return{delay:e,duration:s,easing:t,css:r=>`opacity: ${r*l}`}}function V2(a){let e,s;return{c(){e=p("h2"),this.h()},l(t){e=f(t,"H2",{class:!0});var l=_(e);l.forEach(h),this.h()},h(){n(e,"class","display-adjectives svelte-1w625sn")},m(t,l){N(t,e,l),e.innerHTML=N2},p(t,l){},i(t){t&&(s||Y1(()=>{s=Q1(e,t2,{duration:1e3,easing:e2}),s.start()}))},o:Q,d(t){t&&h(e)}}}function A2(a){let e,s;return{c(){e=p("h2"),this.h()},l(t){e=f(t,"H2",{class:!0});var l=_(e);l.forEach(h),this.h()},h(){n(e,"class","display-adjectives svelte-1w625sn")},m(t,l){N(t,e,l),e.innerHTML=B2},p(t,l){},i(t){t&&(s||Y1(()=>{s=Q1(e,t2,{duration:1e3,easing:e2}),s.start()}))},o:Q,d(t){t&&h(e)}}}function D2(a){let e,s,t,l,r='<div class="buttons svelte-1w625sn"><span class="button-icon red-button svelte-1w625sn"></span> <span class="button-icon orange-button svelte-1w625sn"></span> <span class="button-icon green-button svelte-1w625sn"></span></div> <div class="display-title svelte-1w625sn"><p class="display-title-text svelte-1w625sn">Who is Harry He?</p></div>',c,i,u,C,y,b,m,E,x,L='<div class="buttons svelte-1w625sn"><span class="button-icon red-button svelte-1w625sn"></span> <span class="button-icon orange-button svelte-1w625sn"></span> <span class="button-icon green-button svelte-1w625sn"></span></div> <div class="terminal-title svelte-1w625sn"><p class="terminal-title-text svelte-1w625sn">harry@server: ~</p></div>',k,B,d,g,w,F=" ",A,O;function H($,R){if($[0]==1)return A2;if($[0]==2)return V2}let S=H(a),I=S&&S(a);return{c(){e=p("div"),s=p("div"),t=p("div"),l=p("div"),l.innerHTML=r,c=T(),i=p("div"),u=p("img"),y=T(),I&&I.c(),b=T(),m=p("div"),E=p("div"),x=p("div"),x.innerHTML=L,k=T(),B=p("div"),d=p("p"),g=new n2(!1),w=p("span"),w.textContent=F,this.h()},l($){e=f($,"DIV",{class:!0});var R=_(e);s=f(R,"DIV",{class:!0});var J=_(s);t=f(J,"DIV",{class:!0});var Y=_(t);l=f(Y,"DIV",{class:!0,["data-svelte-h"]:!0}),Z(l)!=="svelte-17l5mhn"&&(l.innerHTML=r),c=j(Y),i=f(Y,"DIV",{class:!0});var r1=_(i);u=f(r1,"IMG",{src:!0,alt:!0,class:!0}),y=j(r1),I&&I.l(r1),r1.forEach(h),Y.forEach(h),J.forEach(h),b=j(R),m=f(R,"DIV",{class:!0});var P=_(m);E=f(P,"DIV",{class:!0});var q=_(E);x=f(q,"DIV",{class:!0,["data-svelte-h"]:!0}),Z(x)!=="svelte-1m0xptw"&&(x.innerHTML=L),k=j(q),B=f(q,"DIV",{class:!0,id:!0});var G=_(B);d=f(G,"P",{class:!0});var a1=_(d);g=i2(a1,!1),w=f(a1,"SPAN",{id:!0,class:!0,["data-svelte-h"]:!0}),Z(w)!=="svelte-p68sf6"&&(w.textContent=F),a1.forEach(h),G.forEach(h),q.forEach(h),P.forEach(h),R.forEach(h),this.h()},h(){n(l,"class","display-header svelte-1w625sn"),_1(u.src,C="/DisplayImage.png")||n(u,"src",C),n(u,"alt","Harry Posing"),n(u,"class","display-image svelte-1w625sn"),n(i,"class","display-bottom svelte-1w625sn"),n(t,"class","inner-display svelte-1w625sn"),n(s,"class","display-window svelte-1w625sn"),n(x,"class","terminal-header svelte-1w625sn"),g.a=w,n(w,"id","cursor"),n(w,"class","svelte-1w625sn"),n(d,"class","terminal-text svelte-1w625sn"),n(B,"class","terminal-bottom svelte-1w625sn"),n(B,"id","terminal-text"),n(E,"class","inner-terminal svelte-1w625sn"),n(m,"class","terminal-window svelte-1w625sn"),n(e,"class","animation-window svelte-1w625sn")},m($,R){N($,e,R),o(e,s),o(s,t),o(t,l),o(t,c),o(t,i),o(i,u),o(i,y),I&&I.m(i,null),o(e,b),o(e,m),o(m,E),o(E,x),o(E,k),o(E,B),o(B,d),g.m(a[1],d),o(d,w),A||(O=[s2(P2.call(null,e)),C1(e,"inview_change",a[3])],A=!0)},p($,[R]){S===(S=H($))&&I?I.p($,R):(I&&I.d(1),I=S&&S($),I&&(I.c(),U(I,1),I.m(i,null))),R&2&&g.p($[1])},i($){U(I)},o:Q,d($){$&&h(e),I&&I.d(),A=!1,J1(O)}}}const B2="1.<br>2.<br>3.<br>",N2="1. Innovative<br>2. Persevering<br>3. Effective<br>",F2=100,G2=250;function O2(a,e,s){let t=0,l="";const r=["harry@server:~$ ","sudo -u harryhe psql",'<br>psql (14.8 (Ubuntu 14.8-0ubuntu0.22.04.1))<br>Type "help" for help.<br><br>harryhe=# ',"\\c harry_info",'<br>You are now connected to database "harry_info" as user "harryhe".<br>harry_info=# ',"SELECT adjective FROM skills LIMIT 3;","<br>&nbsp;&nbsp;adjective<br>-------------<br>&nbsp;Innovative<br>&nbsp;Persevering<br>&nbsp;Effective<br>(3 rows)<br>harry_info=# "];let c,i=0,u=0,C=5,y=!1;var b=setInterval(()=>{if(c)if(C>0)C--;else{if(y){var x=document.getElementById("terminal-text");if(x==null)throw new Error("Undefined Element");console.log(x.scrollHeight),x.scrollTop=x.scrollHeight,s(0,t=2),clearInterval(b);return}i&1?u<r[i].length?(s(1,l+=r[i][u]),u++):i++:(i==0&&s(0,t=1),s(1,l+=r[i]),i++,C=44,u=0,i>=r.length&&(C=1,y=!0))}},F2);let m=!0;return S1(()=>{setInterval(()=>{var x=document.getElementById("cursor");if(x==null)throw new Error("Undefined Element");C>0||y?m?(x.style.opacity="0",m=!1):(x.style.opacity="1",m=!0):m||(x.style.opacity="1",m=!0)},G2)}),[t,l,c,x=>{const{inView:L}=x.detail;s(2,c=L)}]}class W2 extends p1{constructor(e){super(),f1(this,e,O2,D2,d1,{})}}function R2(a){let e,s,t="Skills",l,r,c,i,u="A professional problem solver experienced in 7+ languages",C,y,b,m,E,x,L,k=`<div class="research-skill"><div class="icon-wrapper svelte-2foe3a"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 1280.000000 1258.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1258.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M8455 12551 c-512 -29 -1090 -183 -1548 -413 -743 -372 -1349 -945
                                -1749 -1653 -85 -151 -103 -187 -185 -370 -153 -343 -270 -776 -312 -1155 -24
                                -225 -34 -425 -28 -582 8 -176 39 -507 58 -597 69 -343 102 -464 194 -716 277
                                -760 832 -1473 1510 -1937 579 -397 1210 -628 1915 -700 159 -16 626 -16 795
                                0 784 75 1537 383 2165 886 161 129 477 446 606 606 117 146 240 324 346 500
                                272 449 475 1050 529 1565 24 226 35 491 27 640 -16 281 -49 551 -87 708 -11
                                48 -30 126 -42 175 -93 395 -293 841 -555 1237 -283 428 -643 795 -1072 1093
                                -221 153 -562 334 -832 440 -293 116 -661 212 -925 242 -55 6 -136 15 -180 21
                                -105 13 -466 19 -630 10z m525 -486 c1366 -113 2527 -963 3049 -2233 113 -275
                                192 -574 238 -902 25 -182 25 -713 0 -890 -74 -511 -216 -934 -447 -1335 -780
                                -1355 -2323 -2053 -3847 -1739 -1375 282 -2474 1364 -2777 2731 -69 313 -91
                                541 -83 878 13 568 133 1045 388 1545 347 681 904 1234 1587 1575 442 221 897
                                342 1412 378 120 9 322 5 480 -8z"></path><path d="M4943 6222 c-143 -51 -223 -163 -223 -311 0 -90 22 -150 82 -224 l50
                                -62 -138 -132 c-77 -73 -144 -133 -150 -133 -7 0 -48 39 -93 88 l-80 87 -403
                                -401 c-717 -713 -3491 -3458 -3568 -3531 -66 -61 -81 -71 -123 -76 -140 -19
                                -243 -117 -283 -267 -16 -63 -16 -67 5 -136 11 -39 34 -88 50 -110 15 -21 215
                                -239 444 -484 372 -398 423 -448 479 -477 35 -18 84 -38 110 -45 43 -11 55
                                -10 120 11 40 13 92 37 116 53 84 58 135 161 134 270 l-1 58 592 588 c326 323
                                1053 1044 1617 1602 564 558 1202 1190 1418 1405 l393 390 -91 97 c-49 53 -90
                                100 -90 105 0 14 258 253 273 253 7 0 28 -15 46 -34 55 -56 122 -81 221 -81
                                108 0 169 26 238 99 64 67 87 129 87 231 0 113 -25 159 -171 315 -824 880
                                -750 805 -821 837 -72 33 -171 40 -240 15z"></path></g></svg></div> <h2 class="skill-header svelte-2foe3a">Researching at whirlwind speeds</h2> <p class="skill-description svelte-2foe3a">Able to learn a wide range of technologies remarkably quickly, such as Svelte, Tensorflow, OpenCV, and SQL, from a vastly diverse set of topics.</p></div> <div class="communication-skill"><div class="icon-wrapper svelte-2foe3a"><svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 256 256" xml:space="preserve"><path d="M107.8 29.3c-7.8 2.1-13.9 8.3-15.9 16.2-.6 2-.7 5.5-.7 15v12.3H60.4c-25.8 0-31.2.1-33.4.7-8 2.1-14.1 8.2-16.2 16.1-1.1 4.1-1.1 80.2 0 84.3 2.3 8.6 9.4 15.2 18.2 16.5l3.2.5v15.4c0 16.8.1 17.3 2.7 19.6 1.7 1.4 3.9 1.9 6.4 1.5 1.5-.3 4-2.6 19.9-18.5l18.2-18.1h33c36.2 0 35.6 0 41-2.8 3.2-1.8 7.2-5.8 8.9-9.1 2.3-4.6 2.6-6.6 2.6-20v-12.3h11.7l18.2 18.1c15.9 15.9 18.4 18.2 19.9 18.5 2.4.5 4.7 0 6.4-1.5 2.6-2.3 2.7-2.8 2.7-19.6v-15.4l3.2-.5c8.8-1.4 16-7.9 18.2-16.5 1-4 1.1-80.2 0-84.2-2.1-8-8.2-14.1-16.1-16.2-4-1-117.4-1-121.3 0zm120 15.2c.7.5 1.7 1.5 2.2 2.2 1 1.2 1 1.6 1 40.8s0 39.6-1 40.8c-2.1 2.9-2.9 3.2-9.9 3.4s-7.7.6-9.9 3.4c-.9 1.2-1 2.1-1.2 12.1l-.2 10.8-12.4-12.5c-6.8-6.9-13.1-12.8-13.9-13.1-1.1-.5-3.6-.6-9.6-.6h-8.1V112c0-21.3-.1-22.5-2.6-27.4-1.7-3.3-5.7-7.3-8.9-9.1-5.1-2.7-6.1-2.8-27.8-2.8h-19.7V61.1c0-12.2.2-13.5 2-15.4 2.3-2.4-.6-2.3 61.2-2.2 57.3 0 57.5 0 58.8 1zm-81.1 44.2c.7.5 1.7 1.5 2.2 2.2 1 1.2 1 1.6 1 40.8s0 39.6-1 40.8c-.5.7-1.5 1.7-2.2 2.2-1.2 1-1.8 1-37 1.2-26.4.2-36 .4-36.7.8-.5.3-6.5 6.2-13.4 13l-12.4 12.5-.2-10.8c-.2-10-.3-10.9-1.2-12.1-2.1-2.9-2.9-3.2-9.9-3.4-6.9-.2-7.7-.6-9.9-3.4-1-1.2-1-1.7-1.1-39.6-.1-21.1 0-39 .1-39.8.3-1.8 2.3-4.2 4.1-5 1.1-.5 11.8-.6 58.8-.5 57.3.2 57.6.2 58.8 1.1z"></path></svg></div> <h2 class="skill-header svelte-2foe3a">A versatile communicator with many mediums</h2> <p class="skill-description svelte-2foe3a">With over 400+ hours of experience conversing at Kumon and Markville’s Computer Science Club, Harry can articulate himself with speech, handwritten and electronic presentations, and videos.</p></div> <div class="creativity-skill"><div class="icon-wrapper svelte-2foe3a"><svg width="29" height="29" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13 24h-2c-.288 0-.563-.125-.753-.341L9.671 23h4.658l-.576.659c-.19.216-.465.341-.753.341zm1.867-3c.287 0 .52.224.52.5s-.233.5-.52.5H9.133c-.287 0-.52-.224-.52-.5s.233-.5.52-.5h5.734zM11.996 4C14.979 4 18 5.97 18 9.734c0 1.937-.97 3.622-1.907 5.252-.907 1.574-1.843 3.201-1.844 5.014h1.001c0-3.286 3.75-6.103 3.75-10.266C19 5.394 15.498 3 11.996 3 8.498 3 5 5.391 5 9.734 5 13.897 8.75 16.714 8.75 20h.999c.001-1.813-.936-3.44-1.841-5.014C6.97 13.356 6 11.671 6 9.734 6 5.97 9.017 4 11.996 4zm9.428 7.958a.5.5 0 0 1-.414.911l-.91-.414a.5.5 0 1 1 .413-.91l.911.413zm-18.848 0a.5.5 0 0 0 .414.911l.91-.414a.5.5 0 1 0-.413-.91l-.911.413zM21.5 9h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zm-18-1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1zm16.818-3.089a.5.5 0 1 0-.57-.822l-.821.57a.5.5 0 0 0 .57.822l.821-.57zm-16.636 0a.5.5 0 1 1 .57-.822l.821.57a.5.5 0 0 1-.57.822l-.821-.57zm13.333-3.033a.5.5 0 0 0-.873-.488l-.488.873a.501.501 0 0 0 .873.488l.488-.873zm-10.03 0a.5.5 0 0 1 .873-.488l.488.873a.501.501 0 0 1-.873.488l-.488-.873zM12.5.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1z"></path></svg></div> <h2 class="skill-header svelte-2foe3a">Creative solutions to daunting problems</h2> <p class="skill-description svelte-2foe3a">Experienced in innovating systems to reduce workload and improve results, including developing his own terrain generation technique and a pixel art design workflow.</p></div>`,B,d,g,w=`<div class="teaching-header-container svelte-2foe3a"><div class="large-icon-wrapper svelte-2foe3a"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="50" height="42" viewBox="0 0 1280.000000 1090.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1090.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path stroke="black" stroke-width="30px" d="M6335 10893 c-81 -7 -252 -35 -323 -53 -69 -17 -78 -17 -165 -2 -71
                    13 -155 17 -362 17 -235 -1 -286 -4 -395 -23 -156 -28 -297 -63 -425 -107 -95
                    -32 -104 -33 -180 -25 -131 15 -442 12 -572 -5 -488 -64 -911 -248 -1278 -556
                    l-81 -67 -80 5 c-103 7 -196 -9 -300 -52 -243 -101 -521 -321 -834 -660 -164
                    -177 -431 -429 -523 -492 -133 -92 -241 -207 -345 -368 -56 -86 -160 -302
                    -197 -410 -16 -44 -61 -141 -102 -216 -41 -75 -90 -181 -110 -235 -32 -88 -36
                    -112 -41 -220 -5 -137 6 -185 59 -269 l31 -48 -41 -87 c-77 -162 -89 -326 -38
                    -510 62 -220 159 -387 386 -661 29 -36 41 -62 50 -110 27 -139 98 -306 182
                    -430 255 -375 763 -656 1423 -784 72 -14 134 -29 137 -33 3 -4 14 -27 23 -51
                    22 -58 65 -118 136 -194 54 -59 58 -66 69 -134 6 -39 15 -83 21 -98 5 -14 10
                    -70 10 -123 0 -90 3 -103 34 -169 60 -126 176 -233 401 -373 55 -34 159 -106
                    230 -160 305 -230 613 -381 940 -461 219 -53 296 -60 726 -62 387 -2 397 -1
                    574 26 99 15 248 41 330 57 83 17 159 30 171 30 15 0 26 -13 43 -54 34 -82
                    139 -262 203 -346 80 -106 218 -249 322 -333 79 -64 97 -85 159 -187 225 -369
                    592 -1044 681 -1255 94 -220 144 -303 250 -413 77 -81 167 -139 263 -171 75
                    -25 120 -26 235 -5 135 25 170 64 169 188 0 91 -23 173 -122 454 -118 331
                    -136 402 -106 402 6 0 50 -9 97 -21 237 -56 327 -69 496 -69 91 0 229 -7 307
                    -16 228 -26 425 -15 662 34 351 74 507 119 693 201 380 168 677 466 732 736
                    10 47 22 70 56 108 59 66 90 135 110 247 18 97 16 124 -23 288 -5 21 -3 22 73
                    22 399 2 698 89 945 274 418 315 656 917 676 1711 6 239 -16 729 -43 965 -54
                    470 -161 811 -322 1026 -49 65 -66 99 -97 194 -103 316 -287 601 -462 716 -45
                    30 -87 63 -93 74 -5 10 -10 45 -10 77 0 187 -97 466 -228 654 -120 172 -320
                    367 -485 474 -40 26 -94 61 -121 78 -42 28 -52 41 -71 94 -34 94 -80 164 -190
                    287 -56 61 -133 154 -171 206 -89 120 -136 174 -248 279 -322 303 -824 550
                    -1401 691 -102 24 -230 65 -320 100 -328 129 -587 180 -925 185 l-205 3 -95
                    45 c-179 86 -391 145 -601 167 -89 9 -285 11 -374 3z m529 -102 c110 -23 296
                    -78 311 -92 5 -5 -3 -9 -21 -9 -39 0 -160 -34 -229 -65 -41 -18 -86 -53 -158
                    -123 -103 -100 -165 -146 -210 -157 -22 -6 -28 0 -57 49 -78 138 -212 259
                    -364 332 l-89 42 39 10 c21 6 73 15 114 21 41 6 86 13 100 15 14 3 124 3 245
                    1 172 -3 242 -8 319 -24z m-1244 -11 c0 -5 -6 -10 -13 -10 -7 0 -54 -20 -104
                    -44 -93 -45 -128 -74 -225 -186 l-56 -65 -79 82 c-92 95 -137 120 -244 129
                    -51 5 -67 10 -54 15 35 14 256 57 355 68 171 20 420 26 420 11z m364 -96 c122
                    -32 233 -99 338 -207 60 -62 77 -89 167 -272 84 -169 107 -208 138 -231 21
                    -15 42 -31 47 -35 5 -5 1 -20 -9 -36 -31 -49 -156 -203 -165 -203 -4 0 -10 23
                    -12 50 -6 63 -20 79 -188 211 -69 54 -159 126 -200 159 -67 54 -161 109 -243
                    139 -26 10 -29 9 -43 -24 -7 -19 -14 -37 -14 -40 0 -2 40 -25 89 -49 49 -25
                    131 -79 182 -121 52 -42 139 -111 195 -154 139 -109 137 -107 131 -158 -8 -71
                    -63 -146 -249 -339 -166 -172 -181 -191 -222 -277 -42 -87 -89 -219 -119 -332
                    l-13 -50 -48 75 c-63 96 -167 235 -250 333 -58 66 -69 76 -86 67 -10 -6 -21
                    -14 -24 -19 -3 -5 44 -74 106 -153 109 -140 232 -317 225 -324 -6 -6 -139 41
                    -193 69 -28 14 -88 51 -134 82 -78 54 -82 56 -101 39 -33 -30 -33 -31 89 -115
                    74 -51 205 -119 230 -119 39 0 84 -35 118 -93 20 -34 42 -66 49 -72 11 -9 25
                    -100 52 -335 l5 -45 -37 54 c-21 30 -57 96 -81 148 -24 51 -48 93 -54 93 -6 0
                    -20 -5 -30 -10 -19 -10 -19 -12 6 -78 33 -88 74 -160 144 -252 32 -42 66 -91
                    76 -110 11 -20 29 -45 40 -56 12 -12 23 -27 26 -34 5 -17 67 -3 75 16 3 8 -13
                    78 -36 157 -52 182 -60 222 -72 392 -13 190 0 304 50 455 68 202 95 246 255
                    408 135 138 145 145 266 209 69 36 170 92 225 123 55 32 183 103 283 159 l184
                    102 54 -11 c78 -16 173 -68 296 -160 l108 -81 -21 -42 c-12 -23 -60 -103 -107
                    -177 -200 -317 -377 -530 -440 -530 -24 0 -173 76 -322 164 l-95 56 -18 -22
                    c-10 -11 -16 -25 -14 -31 4 -13 114 -79 278 -167 l136 -73 43 -101 c55 -129
                    56 -179 10 -356 -27 -103 -33 -149 -37 -260 l-4 -135 31 -52 c31 -55 44 -62
                    73 -40 16 11 15 16 -11 72 -28 59 -29 63 -21 170 5 69 21 164 45 259 35 142
                    37 154 26 216 -6 36 -25 100 -43 142 l-31 78 85 85 c131 131 309 375 452 622
                    37 65 63 99 70 94 5 -5 72 6 150 25 328 78 406 88 680 88 241 0 254 -1 350
                    -27 121 -33 216 -78 423 -198 220 -129 278 -155 407 -179 150 -27 258 -57 330
                    -90 33 -16 91 -42 130 -60 223 -101 459 -305 750 -650 76 -91 182 -214 234
                    -275 52 -60 126 -153 164 -205 77 -105 164 -200 184 -200 7 0 22 15 33 32 l20
                    33 -49 50 c-26 27 -80 93 -118 145 -65 89 -236 293 -496 594 -229 264 -467
                    459 -689 567 l-48 23 0 63 c0 37 -9 90 -22 130 -19 59 -32 78 -97 144 -46 46
                    -121 106 -191 151 -232 150 -417 236 -665 309 -180 53 -336 112 -605 228 -103
                    45 -178 71 -200 71 -119 0 -389 -148 -445 -244 -13 -23 -37 -95 -54 -161 -17
                    -66 -41 -140 -54 -165 l-22 -45 -90 -5 c-81 -5 -93 -3 -121 17 -261 184 -297
                    197 -623 228 -84 8 -156 17 -159 19 -19 20 152 190 235 234 66 35 180 67 347
                    98 96 18 122 32 98 56 -12 12 -58 5 -252 -38 -195 -44 -308 -113 -438 -268
                    -59 -70 -65 -74 -87 -64 -14 6 -38 32 -54 57 -32 50 -81 150 -81 166 0 6 28
                    26 62 45 34 19 112 83 173 141 93 88 123 110 180 133 38 15 89 30 114 32 25 3
                    206 1 401 -5 275 -8 381 -15 473 -30 211 -37 420 -98 582 -171 39 -17 144 -50
                    235 -72 303 -73 518 -147 765 -261 406 -187 694 -416 915 -727 30 -41 88 -111
                    130 -155 122 -128 183 -223 205 -320 11 -50 12 -50 116 -113 404 -245 674
                    -587 748 -949 11 -54 25 -145 31 -202 6 -57 15 -110 21 -117 6 -7 36 -27 67
                    -45 31 -18 77 -48 101 -68 45 -37 145 -160 198 -246 72 -114 171 -344 203
                    -473 6 -23 31 -67 56 -97 140 -173 228 -398 294 -750 35 -191 70 -555 70 -735
                    l0 -85 -22 35 c-11 19 -51 100 -87 180 l-66 145 17 130 c19 148 23 428 7 525
                    -17 106 -39 169 -72 207 -50 57 -199 184 -211 180 -6 -2 -43 45 -83 105 -76
                    114 -176 246 -433 568 -318 399 -422 546 -466 662 -114 302 -234 480 -416 616
                    -219 165 -557 246 -826 198 -84 -14 -79 -18 -84 71 -4 53 -10 71 -44 120 -84
                    123 -344 356 -768 686 -141 110 -151 116 -168 100 -10 -9 -18 -22 -18 -29 0
                    -6 98 -90 218 -185 444 -355 625 -519 685 -621 62 -107 16 -251 -138 -431
                    l-58 -68 21 -22 22 -22 60 60 c32 33 84 101 113 150 l54 90 64 19 c50 14 98
                    19 214 19 133 0 161 -3 250 -27 538 -147 757 -498 920 -1476 43 -262 63 -345
                    126 -523 55 -157 58 -187 30 -324 -28 -134 -83 -233 -196 -351 -111 -117 -189
                    -181 -372 -306 -190 -130 -213 -157 -414 -496 -161 -271 -395 -521 -644 -687
                    -96 -64 -238 -205 -233 -231 2 -8 11 -20 20 -26 14 -9 32 4 105 75 48 47 138
                    119 198 159 77 52 149 113 240 205 173 172 271 298 390 496 185 309 204 331
                    370 442 162 108 273 198 376 304 161 166 219 282 243 486 l13 108 -43 122
                    c-71 197 -92 280 -129 502 -19 116 -47 268 -61 338 -14 70 -24 132 -22 137 2
                    6 91 -101 198 -237 474 -600 533 -679 587 -781 30 -57 33 -72 33 -145 0 -111
                    -23 -242 -64 -375 -67 -211 -92 -410 -57 -445 5 -5 20 -7 33 -4 23 6 24 10 26
                    99 1 93 22 195 86 403 24 81 46 223 46 305 0 80 10 80 98 -6 89 -87 95 -100
                    114 -244 15 -117 4 -405 -22 -570 -25 -165 -27 -281 -6 -379 20 -90 20 -91 57
                    -91 34 0 34 3 15 97 -22 107 -28 163 -18 163 12 0 135 -261 174 -369 l31 -83
                    -6 -217 c-6 -245 -32 -451 -83 -656 -34 -136 -121 -385 -134 -385 -4 0 -11 15
                    -14 34 -5 24 -32 63 -90 128 -46 51 -93 101 -104 112 l-21 19 50 56 c64 71
                    102 128 178 269 34 62 84 147 112 189 27 42 48 81 46 86 -2 6 -12 16 -23 24
                    -19 12 -24 8 -76 -65 -30 -43 -81 -128 -113 -188 -74 -139 -120 -207 -192
                    -285 l-58 -62 -12 169 c-7 116 -20 207 -38 285 -32 132 -104 348 -141 421 -14
                    27 -23 52 -21 55 3 2 94 20 203 39 109 18 202 38 207 43 5 5 6 18 2 30 -9 29
                    -38 28 -268 -12 -170 -28 -214 -32 -382 -32 -104 0 -207 4 -227 8 -36 8 -37 8
                    -73 118 -62 185 -207 452 -288 527 -23 22 -25 22 -46 5 l-23 -19 74 -105 c84
                    -120 131 -206 182 -337 93 -234 114 -463 77 -842 -47 -485 -47 -503 -2 -498
                    30 3 25 -31 67 433 21 225 25 325 22 450 -3 88 -8 167 -12 175 -5 13 24 15
                    230 15 161 0 230 -3 219 -10 -48 -29 -48 -26 -14 -105 103 -243 159 -481 159
                    -681 0 -181 -14 -221 -128 -382 -87 -122 -98 -160 -86 -301 13 -147 9 -208
                    -19 -330 -14 -59 -23 -114 -21 -121 4 -8 -23 -23 -79 -43 -152 -55 -326 -82
                    -530 -82 l-129 0 16 23 c67 92 68 159 7 282 -41 83 -45 87 -184 199 -78 63
                    -172 145 -208 183 -85 87 -239 272 -239 287 0 6 48 35 108 65 186 92 552 321
                    552 344 -1 22 -28 49 -42 41 -7 -4 -74 -47 -149 -95 -200 -128 -336 -204 -463
                    -259 -297 -127 -576 -178 -827 -150 -82 9 -114 9 -117 1 -5 -16 -28 -14 -70 8
                    -56 28 -114 38 -387 71 -810 95 -945 103 -1280 75 -340 -28 -431 -20 -605 56
                    -90 40 -123 50 -152 46 -46 -6 -124 -46 -269 -137 -235 -147 -308 -170 -546
                    -170 -160 0 -282 16 -487 64 -121 29 -195 33 -252 12 -22 -7 -82 -41 -134 -75
                    -148 -96 -178 -105 -350 -105 -80 -1 -172 1 -205 4 -59 5 -60 5 -63 -22 -5
                    -44 28 -51 233 -52 219 -1 246 6 400 101 61 38 123 74 138 81 43 19 102 14
                    232 -17 216 -52 318 -64 529 -59 256 6 268 11 590 207 66 41 139 80 162 88 42
                    14 43 14 156 -35 62 -27 143 -54 179 -61 88 -15 246 -14 464 4 276 22 377 19
                    791 -25 635 -68 759 -86 831 -120 78 -36 164 -116 198 -183 22 -46 25 -63 25
                    -170 l0 -118 33 3 32 3 3 125 c3 121 2 126 -27 185 -17 33 -46 77 -66 97 -19
                    20 -35 38 -35 41 0 2 60 2 133 -1 194 -6 320 14 595 93 34 10 63 16 65 14 185
                    -237 285 -342 467 -489 133 -107 148 -123 178 -183 44 -90 45 -164 3 -200 -25
                    -21 -44 -26 -127 -32 -177 -13 -393 -3 -519 25 -22 5 -139 16 -260 25 -275 19
                    -380 30 -625 61 -183 24 -212 25 -470 19 -315 -7 -320 -7 -710 76 l-245 51
                    -250 2 c-137 0 -374 -3 -525 -8 -184 -6 -364 -5 -545 3 -406 17 -619 -3 -855
                    -82 -104 -35 -298 -76 -565 -119 -129 -21 -171 -23 -555 -23 -445 0 -482 3
                    -705 55 -171 41 -308 90 -480 175 -148 72 -351 193 -341 202 2 3 29 -4 59 -15
                    178 -67 356 -67 598 -1 l76 21 149 -47 c214 -68 279 -102 387 -204 56 -53 57
                    -54 77 -36 11 10 20 24 20 30 0 18 -105 113 -176 160 -41 27 -120 61 -259 108
                    -278 95 -353 133 -441 221 -98 99 -133 182 -134 313 0 132 40 272 152 530 l70
                    163 42 10 c22 6 51 15 64 20 14 6 79 8 160 4 l137 -6 203 51 c112 28 209 51
                    217 51 10 0 15 -11 15 -35 0 -48 31 -121 111 -261 l69 -121 0 -99 c0 -55 3
                    -109 6 -121 4 -15 27 -33 68 -53 74 -36 233 -77 246 -64 5 5 11 24 12 42 l3
                    34 -112 32 c-62 18 -115 35 -118 38 -3 2 -8 54 -12 113 l-6 109 -60 106 c-74
                    130 -117 219 -117 244 0 10 39 60 86 112 79 86 90 94 123 94 20 0 140 -14 266
                    -31 306 -40 459 -47 545 -25 39 10 190 79 380 174 185 93 339 164 373 172 54
                    13 65 12 175 -14 155 -37 273 -42 623 -26 159 7 292 10 294 8 3 -2 16 -44 30
                    -94 31 -105 68 -174 125 -229 33 -32 44 -38 58 -29 30 19 26 45 -16 88 -49 50
                    -76 103 -98 191 -20 81 -14 89 63 80 63 -6 119 -30 240 -101 192 -113 313
                    -136 590 -114 l166 13 28 -34 c39 -47 89 -132 103 -174 7 -20 17 -40 23 -46
                    12 -12 58 -2 71 14 17 22 -17 103 -88 212 l-71 107 58 66 c32 37 110 119 173
                    182 106 106 127 122 261 197 80 45 226 136 325 201 166 110 190 130 329 273
                    227 234 251 269 355 529 51 127 94 225 105 238 1 1 31 -15 66 -36 35 -21 116
                    -66 179 -100 68 -36 156 -94 214 -142 55 -44 104 -80 110 -80 6 0 17 10 25 22
                    13 21 11 25 -30 61 -113 99 -183 149 -294 207 -158 83 -225 126 -225 145 0 8
                    31 66 69 127 151 248 194 370 171 483 -8 38 -47 113 -137 266 -69 117 -151
                    260 -183 318 -62 112 -68 117 -118 85 l-22 -14 31 -63 c18 -34 92 -164 165
                    -289 185 -316 177 -298 172 -382 -7 -89 -27 -136 -154 -347 -111 -186 -155
                    -277 -247 -507 -82 -203 -116 -252 -321 -457 -142 -142 -180 -173 -321 -266
                    -88 -59 -214 -137 -280 -174 -172 -98 -221 -133 -300 -216 -205 -214 -292
                    -302 -307 -310 -33 -18 -264 -31 -352 -20 -110 13 -171 36 -308 113 -63 36
                    -137 73 -164 83 -27 10 -53 22 -57 26 -5 4 16 25 46 47 68 51 118 108 162 189
                    47 86 52 109 26 123 -29 15 -35 10 -77 -70 -68 -130 -144 -196 -294 -257 -94
                    -38 -113 -40 -447 -53 -300 -11 -383 -6 -555 35 -98 23 -108 23 -164 10 -77
                    -19 -74 -19 -74 15 0 45 99 229 209 390 214 311 290 426 300 453 10 25 8 29
                    -16 40 -30 13 -17 28 -136 -153 -46 -69 -121 -179 -169 -245 -89 -124 -193
                    -298 -229 -382 -11 -26 -24 -74 -27 -107 l-7 -59 -290 -147 c-328 -166 -360
                    -177 -508 -166 -128 9 -477 55 -504 66 -37 15 -76 80 -158 260 -66 142 -82
                    170 -100 170 -56 0 -49 -26 76 -289 32 -68 59 -128 59 -132 0 -5 -9 -9 -21 -9
                    -40 0 -88 -32 -133 -90 -53 -68 -46 -65 -341 -142 -190 -49 -206 -52 -325 -52
                    -362 1 -587 150 -729 484 -18 41 -33 76 -35 77 -9 10 -56 -19 -56 -34 0 -10
                    23 -65 50 -122 28 -57 49 -106 47 -108 -2 -2 -94 44 -203 102 -109 58 -205
                    105 -212 105 -7 0 -17 -10 -21 -22 -12 -29 -10 -30 174 -130 83 -45 191 -105
                    242 -135 51 -29 100 -53 111 -53 10 0 29 -12 43 -26 34 -36 156 -117 212 -140
                    26 -10 47 -22 47 -25 0 -3 -25 -16 -56 -28 -80 -30 -159 -86 -208 -147 -24
                    -29 -92 -147 -151 -263 -99 -193 -112 -213 -151 -239 -48 -29 -51 -38 -30 -68
                    14 -19 15 -19 51 0 61 33 97 84 198 283 53 105 114 213 135 240 39 48 118 111
                    128 101 3 -3 -26 -82 -65 -174 -86 -207 -110 -298 -118 -434 -9 -168 28 -276
                    133 -389 46 -50 147 -127 189 -145 23 -10 -23 -25 -126 -41 -192 -31 -308 -11
                    -534 92 -66 30 -128 52 -138 49 -22 -5 -236 124 -343 208 -99 78 -178 178
                    -201 255 -13 45 -14 68 -6 116 8 47 7 66 -3 87 -8 15 -21 71 -31 125 l-16 98
                    -76 81 c-91 97 -135 176 -128 231 3 21 17 126 31 233 49 365 53 379 154 468
                    197 173 807 595 1137 786 132 76 315 129 539 157 126 15 321 7 481 -22 102
                    -18 144 -20 280 -15 366 13 483 48 661 195 78 65 111 85 163 102 65 20 222 38
                    209 24 -4 -4 -40 -22 -81 -39 -139 -61 -271 -154 -432 -304 l-79 -74 -21 26
                    c-24 30 -33 32 -60 12 -17 -13 -16 -17 27 -93 55 -95 88 -189 88 -254 0 -26
                    -11 -95 -25 -153 -33 -138 -33 -138 7 -134 33 3 33 3 60 108 41 160 35 269
                    -24 384 l-20 40 68 63 c208 191 354 289 512 342 107 36 255 71 304 71 83 0
                    328 40 533 86 300 68 397 84 545 91 147 6 263 -5 394 -38 93 -24 136 -44 363
                    -177 228 -134 250 -145 280 -137 47 11 183 159 183 199 0 13 -46 46 -64 46 -2
                    0 -27 -31 -55 -69 -28 -38 -59 -72 -67 -75 -24 -9 -389 198 -389 220 0 6 43
                    46 95 88 149 122 396 380 546 569 76 94 191 227 258 295 l120 122 -20 21 -21
                    21 -59 -50 c-84 -70 -159 -153 -329 -363 -160 -198 -383 -429 -533 -552 -144
                    -120 -117 -113 -278 -71 -125 32 -157 36 -309 41 -207 7 -272 -1 -598 -73
                    -297 -66 -337 -73 -337 -65 0 3 29 26 63 51 88 64 202 175 253 246 82 115 115
                    211 134 392 6 57 20 123 31 148 10 25 19 47 19 50 0 6 -58 34 -70 34 -26 0
                    -59 -105 -74 -237 -24 -203 -63 -290 -190 -421 -89 -93 -192 -170 -303 -229
                    -123 -66 -164 -73 -373 -66 -117 4 -193 2 -229 -6 -30 -6 -56 -10 -58 -8 -2 3
                    8 48 22 102 49 188 33 260 -88 414 -53 66 -72 100 -93 165 -27 86 -103 256
                    -113 256 -3 0 -12 -4 -19 -9 -11 -6 -3 -34 37 -130 27 -66 47 -121 44 -121 -3
                    0 -32 25 -64 55 -32 30 -62 55 -67 55 -5 0 -17 -9 -26 -19 -18 -19 -14 -24
                    121 -164 76 -79 156 -170 178 -201 58 -85 60 -161 4 -344 -10 -34 -16 -68 -13
                    -75 3 -8 -5 -18 -18 -24 -13 -6 -70 -49 -128 -97 -144 -119 -218 -144 -500
                    -167 -155 -12 -224 -9 -420 22 -145 22 -377 25 -512 5 -49 -7 -88 -10 -88 -7
                    0 2 7 13 16 22 15 17 15 25 -5 111 -75 313 -117 588 -141 918 -20 283 -36 396
                    -70 495 -25 71 -179 405 -196 424 -11 12 -18 12 -43 1 -17 -7 -31 -17 -31 -23
                    0 -5 37 -89 81 -186 144 -311 149 -336 179 -801 16 -251 85 -676 138 -850 16
                    -52 31 -101 33 -109 3 -10 -26 -23 -108 -46 -129 -37 -269 -103 -429 -203
                    l-111 -70 -116 48 c-119 48 -137 60 -307 206 -98 84 -123 110 -225 233 -103
                    126 -223 219 -517 400 -142 87 -221 146 -309 229 l-67 63 -27 -24 c-35 -30
                    -29 -42 64 -130 67 -63 161 -128 473 -327 137 -87 249 -188 411 -373 38 -42
                    126 -125 195 -184 100 -83 148 -116 227 -153 l99 -47 -64 -46 c-36 -25 -135
                    -94 -220 -153 -85 -59 -216 -152 -290 -208 -207 -156 -207 -156 -243 -150
                    -173 31 -560 159 -724 239 -107 53 -200 137 -248 225 -26 48 -30 64 -29 130 1
                    63 9 96 48 204 25 71 53 157 60 190 52 221 17 460 -111 761 -45 105 -48 108
                    -83 90 -16 -8 -31 -19 -35 -24 -3 -6 14 -57 39 -114 67 -157 99 -276 116 -433
                    14 -132 0 -218 -71 -434 -58 -174 -61 -189 -57 -260 3 -59 11 -90 38 -143 18
                    -37 31 -69 29 -71 -10 -9 -250 48 -297 70 -113 55 -346 314 -426 473 -62 121
                    -71 167 -71 356 1 240 2 244 200 440 92 92 160 168 175 196 l23 46 -18 94
                    c-26 139 -28 143 -71 136 -20 -4 -38 -8 -41 -10 -2 -2 4 -47 13 -99 9 -52 14
                    -107 10 -121 -9 -38 -123 -157 -150 -157 -38 0 -197 102 -268 171 -48 47 -77
                    86 -99 133 -29 61 -31 75 -31 169 1 64 6 118 16 145 42 118 193 367 295 487
                    101 118 162 150 359 190 124 26 299 51 306 44 6 -6 -38 -192 -64 -269 -11 -34
                    -39 -91 -62 -127 l-42 -66 25 -19 24 -20 27 32 c47 57 86 142 118 260 17 63
                    45 157 62 208 38 118 189 423 260 524 120 173 348 403 497 503 120 79 148 88
                    306 92 l140 5 112 -51 c123 -56 148 -60 208 -32 69 31 128 120 94 142 -27 17
                    -47 9 -68 -26 -12 -21 -36 -42 -56 -50 -31 -14 -39 -13 -87 5 -87 33 -87 32
                    -45 83 99 121 191 203 282 249 114 58 240 103 352 124 79 15 100 15 242 0 102
                    -10 321 -17 634 -21 616 -8 651 -13 845 -121 l63 -35 -43 -42 c-24 -23 -68
                    -78 -97 -122 -112 -164 -192 -262 -273 -336 -46 -41 -89 -79 -96 -83 -7 -4
                    -63 21 -140 62 -70 38 -175 95 -234 126 -117 62 -247 146 -438 285 -116 84
                    -126 89 -142 74 -33 -30 -35 -28 152 -165 199 -146 282 -198 493 -309 108 -57
                    209 -113 224 -125 l26 -21 -39 -124 -39 -124 2 -302 1 -302 -79 68 c-160 138
                    -314 229 -436 256 -37 9 -141 19 -231 22 l-163 6 -32 61 c-30 59 -31 66 -32
                    186 0 69 4 203 9 298 l9 172 -30 0 c-30 0 -31 -2 -36 -57 -16 -150 -29 -405
                    -25 -478 4 -61 12 -94 32 -133 28 -56 27 -72 -4 -72 -40 0 -188 -62 -252 -106
                    -115 -78 -214 -200 -324 -399 l-38 -69 -17 99 c-30 169 -62 220 -261 420 -212
                    212 -222 230 -274 493 -3 17 -11 22 -37 22 -18 0 -38 -5 -43 -10 -15 -15 0
                    -116 31 -213 39 -124 84 -187 248 -347 197 -193 229 -244 247 -401 11 -96 -5
                    -182 -55 -285 -28 -59 -46 -82 -88 -113 -75 -56 -109 -71 -211 -93 -107 -23
                    -460 -36 -568 -21 -45 6 -71 6 -78 -1 -17 -17 -12 -73 8 -82 9 -4 121 -10 248
                    -12 338 -6 492 22 637 117 63 41 86 65 145 148 38 54 113 175 167 268 124 216
                    144 245 230 331 80 80 172 131 290 161 105 26 381 23 489 -6 218 -58 520 -312
                    541 -455 4 -24 -1 -103 -10 -177 -10 -80 -15 -173 -13 -234 4 -89 8 -110 42
                    -190 21 -49 41 -105 43 -123 3 -18 -10 -109 -28 -202 -18 -93 -30 -172 -27
                    -175 3 -3 21 -8 41 -12 42 -6 38 -17 88 230 l33 164 -49 114 -50 114 0 115 c0
                    63 6 164 14 223 12 85 12 123 4 180 -7 45 -11 215 -10 452 l2 380 35 96 35 97
                    108 97 c104 95 166 170 307 373 l65 93 120 65 c132 71 273 167 282 191 3 8 -5
                    25 -20 40 l-25 26 -116 -77 c-64 -43 -124 -78 -133 -79 -26 -1 -73 32 -73 53
                    0 10 18 73 40 141 37 114 45 129 100 192 33 38 73 79 89 92 40 35 159 96 289
                    150 61 26 114 50 116 54 8 13 -14 51 -29 51 -24 0 -230 -86 -305 -127 -36 -19
                    -94 -58 -129 -85 -44 -35 -66 -47 -74 -39 -12 12 -2 29 82 133 68 85 124 125
                    226 163 123 47 256 53 389 19z m-1222 -36 c3 -21 10 -24 88 -31 138 -13 157
                    -21 232 -99 36 -38 90 -105 118 -148 l52 -80 -26 -30 c-16 -19 -42 -81 -67
                    -161 -22 -71 -42 -129 -43 -129 -2 0 -37 16 -79 35 -42 19 -106 42 -142 50
                    -99 23 -328 34 -730 35 -198 1 -380 5 -405 8 l-45 7 -3 70 c-2 58 1 78 21 118
                    24 47 24 48 6 70 l-19 22 -29 -32 c-37 -40 -51 -88 -51 -176 l0 -68 -107 7
                    c-155 9 -288 -20 -491 -110 -132 -57 -190 -100 -307 -223 l-111 -116 -174 -7
                    c-139 -6 -186 -12 -227 -28 -165 -63 -456 -323 -640 -569 -67 -91 -156 -249
                    -223 -401 -29 -64 -56 -121 -60 -125 -4 -5 -65 -17 -136 -27 -249 -37 -396
                    -77 -477 -131 -140 -93 -404 -504 -443 -691 -20 -94 -12 -201 22 -283 14 -33
                    27 -64 29 -70 2 -5 -14 -22 -35 -37 -22 -16 -52 -46 -68 -68 -15 -21 -32 -39
                    -38 -40 -6 0 -22 24 -35 53 -20 43 -23 68 -23 152 0 152 36 259 159 475 30 52
                    68 136 85 185 49 141 181 399 254 495 75 100 191 214 269 264 31 19 127 100
                    214 181 87 80 169 148 183 151 63 14 198 58 230 74 19 10 105 91 190 181 287
                    302 521 476 747 554 36 13 70 28 75 33 6 6 25 8 43 5 28 -4 40 2 96 52 271
                    243 619 427 984 519 196 50 359 69 600 68 121 0 250 -5 287 -10 60 -7 73 -6
                    140 19 91 34 106 35 110 7z m3778 -414 c293 -124 455 -185 608 -230 182 -52
                    286 -94 442 -176 165 -86 304 -181 386 -263 59 -57 75 -81 88 -125 15 -49 22
                    -130 12 -130 -3 0 -44 13 -93 29 -48 16 -150 41 -226 56 -165 31 -194 43 -413
                    172 -211 125 -268 154 -370 186 -149 47 -244 60 -444 60 -194 0 -324 -14 -538
                    -58 -64 -13 -118 -22 -120 -20 -2 2 4 17 12 34 9 17 32 89 51 161 42 158 54
                    182 108 221 95 69 264 149 317 149 14 0 95 -30 180 -66z m-6255 -253 c-3 -6
                    -39 -28 -80 -51 -173 -95 -346 -240 -576 -482 -84 -88 -164 -164 -178 -170
                    -57 -23 -111 -37 -111 -28 0 5 72 83 160 174 275 282 504 454 714 537 82 33
                    79 32 71 20z m4640 -77 c139 -10 140 -12 28 -76 -180 -103 -514 -288 -519
                    -288 -3 0 37 48 88 108 52 59 122 144 157 190 l63 84 47 -6 c25 -3 87 -8 136
                    -12z m-6508 -2704 c32 -27 97 -73 146 -101 l87 -51 -54 -59 c-98 -105 -126
                    -196 -126 -397 1 -232 31 -332 153 -516 58 -87 115 -155 202 -242 145 -146
                    206 -181 383 -218 63 -13 116 -27 119 -29 8 -8 -194 -103 -262 -123 -70 -20
                    -184 -22 -269 -4 -61 12 -69 9 -80 -27 -6 -20 -1 -24 51 -39 36 -10 96 -17
                    158 -18 119 -1 173 15 361 104 193 92 181 90 272 36 42 -26 119 -63 170 -82
                    60 -24 96 -44 104 -58 14 -28 78 -105 150 -184 57 -62 58 -63 41 -88 -38 -59
                    -163 -123 -240 -124 -48 0 -53 -2 -59 -25 -4 -14 -4 -29 0 -32 12 -13 115 -15
                    149 -4 51 17 147 82 195 131 l41 43 64 -36 c35 -20 69 -43 76 -50 9 -11 7 -54
                    -9 -188 -31 -266 -24 -243 -73 -235 -82 13 -314 67 -417 98 -344 102 -655 269
                    -857 461 -196 187 -305 380 -353 624 -14 71 -22 84 -113 189 -148 170 -277
                    401 -323 579 -22 87 -25 115 -21 215 5 129 26 201 90 301 19 30 42 71 50 90 8
                    20 29 52 47 72 45 52 74 50 147 -13z m1654 -1888 c46 -16 125 -39 176 -51 l91
                    -23 -29 -61 c-16 -34 -32 -63 -37 -65 -18 -6 -181 101 -234 154 -50 49 -68 74
                    -55 74 2 0 41 -13 88 -28z m10250 -1677 c47 -49 91 -99 96 -110 6 -11 14 -56
                    18 -100 l7 -80 -63 -95 c-75 -114 -253 -297 -354 -364 -85 -56 -97 -58 -84
                    -13 34 117 41 199 29 336 -15 170 -14 173 109 349 85 121 135 177 150 170 3
                    -2 45 -43 92 -93z m-5721 -837 c18 -46 83 -182 145 -303 62 -121 120 -245 129
                    -275 8 -30 25 -124 36 -208 40 -293 89 -365 397 -577 153 -106 294 -193 445
                    -275 l117 -64 11 -62 c6 -35 49 -172 96 -306 114 -323 144 -421 151 -495 12
                    -122 -20 -145 -202 -147 -94 -1 -104 1 -168 32 -163 80 -276 217 -377 460 -58
                    137 -322 648 -464 895 -305 530 -321 555 -416 627 -103 79 -224 201 -309 314
                    -65 86 -171 266 -206 349 l-15 37 27 11 c101 39 285 66 459 68 l111 1 33 -82z
                    m305 68 c66 -8 169 -17 229 -21 98 -5 128 -12 285 -65 288 -96 447 -122 830
                    -136 162 -5 193 -4 189 7 -4 11 -58 16 -249 25 -274 12 -306 16 -471 50 -123
                    26 -363 98 -372 113 -13 20 445 37 609 22 140 -13 413 -56 448 -71 26 -11 -10
                    -9 -390 25 -299 27 -343 29 -343 16 0 -10 27 -14 389 -51 155 -15 285 -31 288
                    -34 4 -3 -84 -6 -195 -6 -173 0 -202 -2 -202 -15 0 -13 45 -15 343 -15 188 0
                    398 -5 466 -10 101 -8 128 -7 140 4 27 23 299 50 425 42 205 -13 244 -22 301
                    -67 89 -71 160 -116 311 -200 299 -165 372 -231 504 -464 87 -153 123 -205
                    135 -194 3 4 -38 85 -92 179 -148 261 -225 336 -488 480 -188 103 -356 213
                    -344 225 3 2 34 0 69 -6 76 -12 289 -107 389 -173 76 -51 252 -229 358 -362
                    79 -99 203 -308 203 -342 0 -22 25 -41 37 -28 4 4 1 23 -6 44 -18 48 -124 235
                    -168 292 -80 105 -273 315 -336 366 -64 51 -196 134 -213 134 -4 0 -28 12 -53
                    28 l-46 27 95 5 c66 4 102 1 117 -7 276 -156 355 -216 450 -337 75 -96 84
                    -117 137 -311 45 -164 58 -196 69 -178 5 8 -36 181 -74 308 -52 173 -215 345
                    -461 484 -32 18 -58 37 -58 42 0 7 21 8 53 5 176 -18 156 -11 263 -92 54 -42
                    116 -92 137 -112 54 -52 122 -149 153 -218 24 -55 84 -334 84 -394 0 -48 -182
                    -344 -220 -358 -5 -2 -66 22 -136 52 -185 81 -379 136 -337 96 4 -5 53 -23
                    108 -41 90 -28 278 -105 314 -128 19 -12 4 -31 -55 -72 l-42 -29 -85 40 c-60
                    27 -113 63 -182 122 -107 92 -125 104 -125 88 0 -14 112 -120 184 -174 28 -21
                    77 -50 109 -64 31 -13 57 -28 57 -33 0 -5 -14 -16 -30 -24 -38 -19 -43 -18
                    -263 69 -92 36 -213 79 -270 96 -174 50 -340 90 -345 85 -14 -14 30 -30 214
                    -80 172 -47 482 -157 563 -200 l26 -13 -65 -30 c-134 -60 -123 -59 -251 -17
                    -140 47 -451 201 -577 287 -151 102 -152 102 -152 85 0 -18 98 -91 223 -166
                    112 -67 324 -169 452 -216 55 -20 104 -40 108 -45 16 -15 -179 -69 -343 -94
                    -232 -36 -277 -39 -377 -31 -103 9 -89 17 62 34 104 12 322 64 339 81 23 23
                    -10 20 -126 -8 -184 -46 -266 -56 -453 -56 -182 -1 -312 14 -590 65 -375 70
                    -553 137 -721 270 -66 52 -85 75 -36 43 83 -54 124 -76 187 -98 223 -79 669
                    -166 1002 -197 68 -6 218 -9 335 -7 202 4 217 6 291 32 42 15 77 32 77 37 0
                    14 -29 11 -95 -10 -137 -43 -295 -48 -615 -20 -366 32 -900 144 -1053 221 -20
                    10 -83 50 -139 88 -56 39 -107 70 -114 70 -12 0 -84 80 -84 94 0 3 20 6 45 6
                    37 0 45 -3 45 -19 0 -14 24 -27 103 -58 156 -62 405 -141 577 -184 152 -38
                    157 -39 345 -39 243 -1 345 -11 530 -55 175 -42 355 -58 355 -33 0 12 -20 16
                    -98 21 -58 4 -173 24 -278 48 l-179 41 -250 2 c-232 2 -258 4 -360 28 -153 37
                    -415 117 -574 177 -143 53 -175 71 -125 71 73 0 281 -25 674 -82 322 -46 463
                    -62 582 -65 159 -5 228 0 228 17 0 6 -61 10 -149 10 -157 0 -226 8 -766 85
                    -335 49 -496 65 -646 65 l-96 0 -86 110 c-79 100 -107 127 -107 101 0 -28 246
                    -326 361 -436 226 -218 408 -292 949 -384 96 -17 205 -33 242 -37 41 -4 65
                    -11 61 -17 -4 -6 -48 -7 -122 -3 -339 20 -691 112 -996 261 -178 88 -303 173
                    -411 280 -108 107 -144 171 -144 254 0 70 -10 131 -21 131 -4 0 -10 -39 -11
                    -87 l-3 -88 -34 85 c-39 97 -51 116 -51 78 0 -35 72 -231 125 -343 47 -97 94
                    -159 171 -226 152 -132 463 -288 677 -339 98 -24 117 -25 117 -6 0 9 -17 16
                    -47 21 -116 17 -332 100 -495 190 -129 72 -209 128 -271 192 -59 60 -77 87
                    -123 176 l-35 68 113 -114 c125 -124 211 -186 390 -278 212 -108 447 -189 712
                    -245 108 -23 155 -27 431 -34 346 -9 514 -20 493 -30 -29 -17 -238 -42 -342
                    -41 -61 0 -172 7 -246 15 -74 9 -208 16 -297 16 -172 0 -319 21 -523 75 -217
                    57 -740 367 -926 550 -110 108 -129 155 -164 405 -11 74 -22 151 -26 170 l-7
                    35 61 -52 c74 -61 145 -97 250 -124 96 -25 282 -37 427 -28 61 3 112 5 114 3
                    4 -4 -37 -23 -122 -58 -21 -9 -36 -20 -33 -25 4 -5 52 6 112 26 l106 36 61
                    -17 c33 -9 164 -57 291 -105 321 -123 438 -155 736 -200 317 -48 402 -55 650
                    -55 207 -1 268 3 395 22 181 28 231 40 218 53 -6 6 -72 0 -184 -16 -319 -49
                    -587 -44 -1009 16 -313 44 -502 93 -759 193 -102 40 -224 85 -271 101 -47 15
                    -89 31 -93 35 -5 4 29 13 75 20 46 6 175 27 288 45 113 18 210 30 215 25 6 -4
                    57 -15 116 -23 58 -9 202 -39 320 -67 441 -105 413 -101 655 -107 266 -7 505
                    3 531 22 15 11 -39 12 -317 8 -389 -6 -375 -8 -797 92 -150 36 -306 70 -348
                    76 -41 6 -75 15 -75 19 0 13 243 40 365 40 140 0 234 -14 504 -74 242 -55 361
                    -73 566 -86 206 -13 205 -13 205 5 0 10 -10 15 -30 15 -18 0 -33 6 -36 15 -3
                    8 -76 86 -162 173 -206 207 -312 277 -533 347 -92 29 -344 85 -384 85 -51 0
                    -22 -19 53 -35 287 -61 425 -105 555 -179 107 -61 184 -126 321 -271 l117
                    -125 -79 0 c-150 0 -161 4 -264 92 -247 212 -288 232 -723 352 -267 75 -267
                    75 -272 59 -5 -13 32 -26 280 -93 228 -62 375 -112 444 -152 66 -37 217 -154
                    263 -203 l35 -37 -50 7 c-27 3 -162 31 -300 60 -300 64 -373 75 -513 75 -135
                    0 -196 -8 -632 -80 -442 -72 -562 -84 -783 -77 -273 8 -383 47 -518 182 -66
                    67 -89 95 -76 95 2 0 71 -14 153 -30 294 -60 473 -80 705 -80 230 0 535 29
                    857 80 116 19 274 69 288 91 14 23 -10 20 -88 -10 -191 -72 -786 -139 -1143
                    -128 -212 7 -358 25 -618 76 l-190 38 -18 34 c-10 19 -18 38 -19 43 0 18 173
                    -5 440 -58 483 -97 686 -100 1040 -15 217 52 335 88 324 99 -5 5 -104 -14
                    -234 -46 -317 -78 -388 -87 -600 -80 -186 5 -263 17 -595 86 -110 23 -240 44
                    -290 47 -49 3 -97 9 -105 13 -17 9 -75 118 -67 126 3 3 61 -12 129 -34 479
                    -156 909 -199 1393 -139 252 31 265 34 265 47 0 15 -50 12 -271 -16 -382 -50
                    -740 -30 -1118 62 -123 30 -338 98 -397 126 -37 17 -64 51 -64 80 0 14 19 10
                    405 -82 434 -104 567 -128 766 -142 204 -13 719 -2 719 16 0 8 -87 10 -337 8
                    -466 -6 -543 4 -1143 148 -157 38 -314 74 -350 81 -73 13 -90 23 -90 50 0 17
                    8 19 68 19 37 0 121 -6 187 -14z m1718 -123 c-7 -2 -21 -2 -30 0 -10 3 -4 5
                    12 5 17 0 24 -2 18 -5z m1973 -113 c38 -15 222 -221 259 -292 30 -57 37 -83
                    47 -177 8 -87 8 -120 -2 -156 -7 -25 -16 -47 -20 -50 -3 -2 -19 58 -33 133
                    -45 230 -125 360 -307 505 l-75 59 55 -7 c30 -4 64 -11 76 -15z m419 -34 c8
                    -19 26 -74 41 -123 24 -83 25 -92 13 -160 -6 -40 -15 -73 -18 -73 -3 0 -25 39
                    -48 88 -24 48 -74 131 -113 184 -38 53 -70 99 -70 102 0 8 41 13 113 15 l68 1
                    14 -34z m-231 8 c47 -47 164 -227 202 -312 24 -53 44 -102 44 -107 0 -15 -78
                    -90 -86 -82 -4 3 -10 43 -15 88 -12 125 -47 186 -207 368 l-54 61 50 0 c33 0
                    56 -6 66 -16z"></path><path d="M8389 9090 c-49 -52 -100 -116 -119 -151 -32 -61 -33 -62 -25 -153
                    15 -168 11 -265 -14 -336 -60 -172 -192 -410 -240 -434 -14 -7 -83 -30 -153
                    -51 -137 -41 -141 -45 -116 -100 6 -14 17 -24 24 -21 7 3 32 10 56 16 271 71
                    340 110 563 322 169 159 215 182 412 199 175 16 320 1 405 -42 87 -43 236
                    -196 302 -307 124 -213 216 -549 216 -790 0 -88 20 -121 95 -157 41 -19 75
                    -27 119 -28 l61 -2 3 41 3 41 -53 7 c-29 4 -72 16 -95 26 -39 17 -43 22 -43
                    54 0 26 6 38 22 47 12 6 59 40 105 75 99 76 118 86 206 109 63 17 68 20 65 44
                    -3 24 -6 26 -50 24 -77 -2 -143 -31 -244 -105 -52 -39 -97 -68 -99 -66 -3 2
                    -14 58 -25 124 -60 351 -172 602 -358 795 -86 91 -160 143 -252 178 -62 24
                    -74 25 -275 25 -199 -1 -214 -2 -290 -27 -109 -36 -158 -69 -297 -203 -66 -64
                    -121 -114 -123 -112 -2 2 16 44 40 93 88 180 120 301 111 413 -3 43 -8 111
                    -12 152 -7 95 7 123 128 254 83 89 86 94 72 115 -8 11 -20 21 -27 21 -6 0 -50
                    -41 -98 -90z"></path><path d="M5241 5270 l-32 -30 47 -56 c63 -74 74 -79 107 -48 31 29 31 30 -39
                    107 l-50 57 -33 -30z"></path><path d="M6645 4739 c-4 -6 -10 -62 -13 -124 -4 -90 -1 -122 13 -166 18 -56
                    97 -178 140 -219 24 -23 25 -23 45 -5 11 10 20 21 20 25 0 3 -27 42 -60 86
                    -89 117 -94 140 -86 369 1 36 -1 40 -26 43 -14 2 -29 -2 -33 -9z"></path><path d="M3083 3685 c-3 -9 -4 -17 -2 -19 2 -1 65 -45 139 -96 74 -52 182
                    -129 239 -172 57 -44 109 -77 115 -75 29 10 8 38 -79 107 -106 83 -379 270
                    -395 270 -6 0 -13 -7 -17 -15z"></path><path d="M7007 2113 c-3 -5 -2 -58 2 -118 6 -95 12 -119 40 -175 62 -126 91
                    -124 33 2 -34 73 -40 98 -46 184 -7 92 -16 128 -29 107z"></path><path d="M8416 2113 c-13 -14 -1 -23 112 -81 254 -130 344 -151 722 -162 654
                    -21 778 -29 890 -54 58 -13 123 -31 144 -40 45 -19 66 -20 66 -5 0 15 -57 36
                    -184 70 -120 31 -116 31 -936 58 -244 9 -286 13 -370 35 -122 33 -175 53 -319
                    126 -65 32 -121 56 -125 53z"></path><path d="M8230 2072 c0 -4 125 -70 278 -145 253 -125 285 -138 372 -154 111
                    -19 438 -23 878 -9 231 8 272 11 272 24 0 13 -32 14 -262 6 -383 -13 -784 -9
                    -888 10 -73 13 -121 33 -350 146 -246 121 -300 143 -300 122z"></path><path d="M7110 1968 c1 -158 53 -264 211 -428 67 -70 78 -49 12 26 -141 162
                    -181 234 -189 341 -7 99 -14 133 -24 133 -6 0 -10 -33 -10 -72z"></path></g></svg></div> <h1 class="teaching-header svelte-2foe3a">Teaching Skill</h1></div> <p class="teaching-information svelte-2foe3a">Harry has over 200+ hours of experience teaching others through his part-time job at Kumon and executive role in the Computer Science Education Club.</p> <p class="teaching-information svelte-2foe3a">He has helped many people understand concepts they were struggling with, including high-school level English, university-level mathematics, and university-level computer science. See one of Harry&#39;s example lectures on the right.</p>`,F,A,O;return y=new E2({}),E=new W2({}),A=new C2({props:{videoId:"ghZ83DrP85g"}}),{c(){e=p("section"),s=p("h1"),s.textContent=t,l=T(),r=p("div"),c=T(),i=p("h2"),i.textContent=u,C=T(),e1(y.$$.fragment),b=T(),m=p("div"),e1(E.$$.fragment),x=T(),L=p("div"),L.innerHTML=k,B=T(),d=p("div"),g=p("div"),g.innerHTML=w,F=T(),e1(A.$$.fragment),this.h()},l(H){e=f(H,"SECTION",{id:!0,class:!0});var S=_(e);s=f(S,"H1",{class:!0,["data-svelte-h"]:!0}),Z(s)!=="svelte-ypxmam"&&(s.textContent=t),l=j(S),r=f(S,"DIV",{class:!0}),_(r).forEach(h),c=j(S),i=f(S,"H2",{class:!0,["data-svelte-h"]:!0}),Z(i)!=="svelte-p5002w"&&(i.textContent=u),C=j(S),t1(y.$$.fragment,S),b=j(S),m=f(S,"DIV",{class:!0});var I=_(m);t1(E.$$.fragment,I),x=j(I),L=f(I,"DIV",{class:!0,["data-svelte-h"]:!0}),Z(L)!=="svelte-1hv0817"&&(L.innerHTML=k),I.forEach(h),B=j(S),d=f(S,"DIV",{class:!0});var $=_(d);g=f($,"DIV",{class:!0,["data-svelte-h"]:!0}),Z(g)!=="svelte-1y8bb7d"&&(g.innerHTML=w),F=j($),t1(A.$$.fragment,$),$.forEach(h),S.forEach(h),this.h()},h(){n(s,"class","section-header svelte-2foe3a"),n(r,"class","break-line svelte-2foe3a"),n(i,"class","languages-header svelte-2foe3a"),n(L,"class","complete-skill-descriptions svelte-2foe3a"),n(m,"class","expanded-skills-block svelte-2foe3a"),n(g,"class","teaching-description"),n(d,"class","teaching-container svelte-2foe3a"),n(e,"id","Skills"),n(e,"class","svelte-2foe3a")},m(H,S){N(H,e,S),o(e,s),o(e,l),o(e,r),o(e,c),o(e,i),o(e,C),l1(y,e,null),o(e,b),o(e,m),l1(E,m,null),o(m,x),o(m,L),o(e,B),o(e,d),o(d,g),o(d,F),l1(A,d,null),O=!0},p:Q,i(H){O||(U(y.$$.fragment,H),U(E.$$.fragment,H),U(A.$$.fragment,H),O=!0)},o(H){K(y.$$.fragment,H),K(E.$$.fragment,H),K(A.$$.fragment,H),O=!1},d(H){H&&h(e),s1(y),s1(E),s1(A)}}}function U2(a){let e,s;return S1(()=>{function t(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)}e="100%",s="103.75px",t()<360?s="171px":t()<480?s="238.5px":t()<768?s="400.5px":t()<1024?s="544.5px":t()<1240?s="333px":t()<1440?s="389.25px":t()<1696?s="441px":t()<1920&&(s="504px"),window.dispatchEvent(new CustomEvent("YoutubePlayerSizeReady",{detail:{width:e,height:s}}))}),[]}class J2 extends p1{constructor(e){super(),f1(this,e,U2,R2,d1,{})}}const{document:$1}=h2;function G1(a,e,s){const t=a.slice();return t[15]=e[s],t[17]=s,t}function O1(a,e,s){const t=a.slice();return t[18]=e[s],t}function W1(a,e){let s,t,l;return{key:a,first:null,c(){s=p("img"),this.h()},l(r){s=f(r,"IMG",{src:!0,alt:!0,class:!0,id:!0}),this.h()},h(){_1(s.src,t=e[18])||n(s,"src",t),n(s,"alt","Images of Harry"),n(s,"class","slideshow-image svelte-1ni6a1r"),n(s,"id",l="image-"+e[0]),this.first=s},m(r,c){N(r,s,c)},p(r,c){e=r,c&1&&!_1(s.src,t=e[18])&&n(s,"src",t),c&1&&l!==(l="image-"+e[0])&&n(s,"id",l)},d(r){r&&h(s)}}}function Y2(a){let e,s,t;function l(){return a[7](a[17])}return{c(){e=p("button"),this.h()},l(r){e=f(r,"BUTTON",{style:!0,class:!0}),_(e).forEach(h),this.h()},h(){D(e,"opacity","0.35"),n(e,"class","slideshow-button svelte-1ni6a1r")},m(r,c){N(r,e,c),s||(t=C1(e,"click",l),s=!0)},p(r,c){a=r},d(r){r&&h(e),s=!1,t()}}}function q2(a){let e,s,t;return{c(){e=p("button"),this.h()},l(l){e=f(l,"BUTTON",{style:!0,class:!0}),_(e).forEach(h),this.h()},h(){D(e,"opacity","1"),n(e,"class","slideshow-button svelte-1ni6a1r")},m(l,r){N(l,e,r),s||(t=C1(e,"click",a[3]),s=!0)},p:Q,d(l){l&&h(e),s=!1,t()}}}function R1(a){let e;function s(r,c){return r[17]==r[0]?q2:Y2}let t=s(a),l=t(a);return{c(){l.c(),e=z1()},l(r){l.l(r),e=z1()},m(r,c){l.m(r,c),N(r,e,c)},p(r,c){t===(t=s(r))&&l?l.p(r,c):(l.d(1),l=t(r),l&&(l.c(),l.m(e.parentNode,e)))},d(r){r&&h(e),l.d(r)}}}function K2(a){let e,s;return{c(){e=p("h1"),s=w1(a[1]),this.h()},l(t){e=f(t,"H1",{class:!0,style:!0});var l=_(e);s=y1(l,a[1]),l.forEach(h),this.h()},h(){n(e,"class","typed svelte-1ni6a1r"),D(e,"font-size","calc(2.2rem * "+T1+")")},m(t,l){N(t,e,l),o(e,s)},p(t,l){l&2&&x1(s,t[1])},d(t){t&&h(e)}}}function Q2(a){let e,s,t,l,r,c,i,u;return{c(){e=i1("svg"),s=i1("g"),t=i1("g"),l=i1("path"),r=i1("path"),c=i1("path"),i=i1("path"),u=i1("path"),this.h()},l(C){e=c1(C,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var y=_(e);s=c1(y,"g",{id:!0});var b=_(s);t=c1(b,"g",{id:!0});var m=_(t);l=c1(m,"path",{id:!0,style:!0,d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,class:!0}),_(l).forEach(h),r=c1(m,"path",{id:!0,style:!0,d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,class:!0}),_(r).forEach(h),c=c1(m,"path",{id:!0,style:!0,d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,class:!0}),_(c).forEach(h),i=c1(m,"path",{id:!0,style:!0,d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,class:!0}),_(i).forEach(h),u=c1(m,"path",{id:!0,style:!0,d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,class:!0}),_(u).forEach(h),m.forEach(h),b.forEach(h),y.forEach(h),this.h()},h(){n(l,"id","h-letter"),D(l,"--order","1"),n(l,"d","M7.38029 24.9542C7.38029 36.0598 7.38029 47.1654 7.38029 58.271C7.38029 60.5181 7.88981 62.739 7.88981 64.9514C7.88981 66.9517 7.88981 60.9507 7.88981 58.9504C7.88981 55.4781 7.88981 52.0059 7.88981 48.5336C7.88981 47.3312 8.17714 45.6748 7.8332 44.514C7.7036 44.0767 7.63505 43.7521 7.63505 43.2969C7.63505 42.5493 8.00021 42.9797 8.55502 43.028C11.9459 43.3228 15.2258 42.3726 18.5897 42.2778C19.9908 42.2384 21.9133 42.1299 22.9206 41.004C24.106 39.6792 24.1087 36.3716 24.1802 34.7624C24.3468 31.0142 24.7039 27.3056 24.7039 23.553C24.7039 20.5714 24.7039 29.5163 24.7039 32.4979C24.7039 40.0912 23.6849 47.6307 23.6849 55.2139C23.6849 57.4028 23.4301 59.5596 23.4301 61.7527C23.4301 62.5941 23.6849 63.3884 23.6849 64.1871"),n(l,"stroke","black"),n(l,"stroke-width","3"),n(l,"stroke-linecap","round"),n(l,"class","svelte-1ni6a1r"),n(r,"id","a-letter"),D(r,"--order","2"),n(r,"d","M36.6776 51.7039C33.2698 51.7039 30.9682 53.5056 28.7234 55.8367C27.7602 56.8369 26.8419 58.8587 27.3081 60.3091C27.9912 62.4342 31.1174 62.2085 32.5448 61.13C34.508 59.6467 36.0037 57.6809 36.7342 55.3272C37.0721 54.2383 36.9449 52.9495 37.3852 51.9587C37.7229 51.199 37.8174 51.6565 38.3194 52.27C39.725 53.988 41.3529 55.4968 42.7352 57.252C43.91 58.7439 45.7248 61.5132 47.6322 62.149"),n(r,"stroke","black"),n(r,"stroke-width","3"),n(r,"stroke-linecap","round"),n(r,"class","svelte-1ni6a1r"),n(c,"id","r1-letter"),D(c,"--order","3"),n(c,"d","M52.4726 62.4038C52.4726 59.8339 52.3572 57.299 52.232 54.7327C52.1624 53.3052 51.6693 50.4413 53.4917 49.9206C56.5929 49.0345 59.7827 49.6658 62.9178 49.6658"),n(c,"stroke","black"),n(c,"stroke-width","3"),n(c,"stroke-linecap","round"),n(c,"class","svelte-1ni6a1r"),n(i,"id","r2-letter"),D(i,"--order","4"),n(i,"d","M69.032 62.9133C69.032 59.6864 69.032 56.4594 69.032 53.2325C69.032 52.0611 68.3964 49.1563 70.051 49.1563C72.2967 49.1563 74.5423 49.1563 76.788 49.1563C77.3875 49.1563 79.4491 48.8455 79.7319 49.4111"),n(i,"stroke","black"),n(i,"stroke-width","3"),n(i,"stroke-linecap","round"),n(i,"class","svelte-1ni6a1r"),n(u,"id","y-letter"),D(u,"--order","5"),n(u,"d","M85.5913 45.5897C85.7616 47.2922 87.424 49.6931 88.2804 51.1095C89.1933 52.6192 90.951 53.1387 92.6538 52.6522C95.7579 51.7653 96.843 48.4843 98.3151 46.0001C98.6621 45.4147 99.6852 42.4693 100.311 42.3911C100.329 42.3887 99.8855 43.288 99.8578 43.3535C99.4345 44.3561 98.8663 45.2409 98.3859 46.2124C96.4603 50.1064 95.0688 54.2877 93.2199 58.2286C91.5058 61.8824 89.2738 65.4105 88.0257 69.2681C87.7204 70.2117 87.1199 71.0997 87.1199 72.0846"),n(u,"stroke","black"),n(u,"stroke-width","3"),n(u,"stroke-linecap","round"),n(u,"class","svelte-1ni6a1r"),n(t,"id","letters"),n(s,"id","signature"),n(e,"width",T1*120),n(e,"height",T1*54),n(e,"viewBox","0 21 120 54"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg")},m(C,y){N(C,e,y),o(e,s),o(s,t),o(t,l),o(t,r),o(t,c),o(t,i),o(t,u)},p:Q,d(C){C&&h(e)}}}function Z2(a){let e,s;return{c(){e=p("h1"),s=w1(j1),this.h()},l(t){e=f(t,"H1",{class:!0,id:!0,style:!0});var l=_(e);s=y1(l,j1),l.forEach(h),this.h()},h(){n(e,"class","classic svelte-1ni6a1r"),n(e,"id","classic-name"),D(e,"font-size","calc(2rem * "+T1+")")},m(t,l){N(t,e,l),o(e,s)},p:Q,d(t){t&&h(e)}}}function X2(a){let e,s,t,l,r,c,i=[],u=new Map,C,y,b='<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left svelte-1ni6a1r"><path d="M6 8L2 12L6 16" class="svelte-1ni6a1r"></path><path d="M2 12H22" class="svelte-1ni6a1r"></path></svg>',m,E,x='<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right svelte-1ni6a1r"><path d="M18 8L22 12L18 16" class="svelte-1ni6a1r"></path><path d="M2 12H22" class="svelte-1ni6a1r"></path></svg>',L,k,B,d,g,w,F="Hello, I'm",A,O,H,S=`Harry He is studying Computer Science at the University of Waterloo.
            He is a full-stack developer with a passion to learn and teach,
            having taught others unversity level computer science, competitive
            programming, and even English. You can find him on <a href="https://github.com/he-is-harry">Github</a>,
            <a href="https://ca.linkedin.com/in/harryghe">Linkedin</a>, and, if you really want to,
            <a href="mailto:harryhemr@gmail.com">Email</a>.`,I,$,R,J,Y,r1,P,q=m1([a[2][a[0]]]);const G=v=>v[0];for(let v=0;v<1;v+=1){let V=O1(a,q,v),z=G(V);u.set(z,i[v]=W1(z,V))}let a1=m1({length:g1}),W=[];for(let v=0;v<a1.length;v+=1)W[v]=R1(G1(a,a1,v));function k1(v,V){return v[0]==0?Z2:v[0]==1?Q2:K2}let u1=k1(a),X=u1(a);return $=new k2({}),J=new J2({}),{c(){e=p("meta"),s=p("meta"),t=T(),l=p("div"),r=p("div"),c=p("div");for(let v=0;v<1;v+=1)i[v].c();C=T(),y=p("button"),y.innerHTML=b,m=T(),E=p("button"),E.innerHTML=x,L=T(),k=p("div");for(let v=0;v<W.length;v+=1)W[v].c();B=T(),d=p("div"),g=p("div"),w=p("h1"),w.textContent=F,A=T(),X.c(),O=T(),H=p("p"),H.innerHTML=S,I=T(),e1($.$$.fragment),R=T(),e1(J.$$.fragment),this.h()},l(v){const V=K1("svelte-1kjawpp",$1.head);e=f(V,"META",{name:!0,content:!0}),s=f(V,"META",{name:!0,content:!0}),V.forEach(h),t=j(v),l=f(v,"DIV",{class:!0});var z=_(l);r=f(z,"DIV",{class:!0});var b1=_(r);c=f(b1,"DIV",{class:!0,style:!0});var n1=_(c);for(let v1=0;v1<1;v1+=1)i[v1].l(n1);C=j(n1),y=f(n1,"BUTTON",{class:!0,["data-svelte-h"]:!0}),Z(y)!=="svelte-f8r9sl"&&(y.innerHTML=b),m=j(n1),E=f(n1,"BUTTON",{class:!0,["data-svelte-h"]:!0}),Z(E)!=="svelte-91elpl"&&(E.innerHTML=x),L=j(n1),k=f(n1,"DIV",{class:!0});var A1=_(k);for(let v1=0;v1<W.length;v1+=1)W[v1].l(A1);A1.forEach(h),n1.forEach(h),b1.forEach(h),B=j(z),d=f(z,"DIV",{class:!0});var M1=_(d);g=f(M1,"DIV",{class:!0});var E1=_(g);w=f(E1,"H1",{["data-svelte-h"]:!0}),Z(w)!=="svelte-1kwcu8j"&&(w.textContent=F),A=j(E1),X.l(E1),E1.forEach(h),O=j(M1),H=f(M1,"P",{class:!0,["data-svelte-h"]:!0}),Z(H)!=="svelte-1xm2z7b"&&(H.innerHTML=S),M1.forEach(h),z.forEach(h),I=j(v),t1($.$$.fragment,v),R=j(v),t1(J.$$.fragment,v),this.h()},h(){$1.title="Harry He",n(e,"name","keywords"),n(e,"content","Harry He"),n(s,"name","author"),n(s,"content","Harry He"),n(y,"class","arrow-left svelte-1ni6a1r"),n(E,"class","arrow-right svelte-1ni6a1r"),n(k,"class","slideshow-buttons svelte-1ni6a1r"),n(c,"class","image-carousel svelte-1ni6a1r"),D(c,"container-type","size"),D(c,"width",l3),D(c,"height",s3),D(c,"left",e3),D(c,"top",t3),n(r,"class","carousel-container svelte-1ni6a1r"),n(g,"class","animated-header svelte-1ni6a1r"),n(H,"class","svelte-1ni6a1r"),n(d,"class","text-column svelte-1ni6a1r"),n(l,"class","block-1 svelte-1ni6a1r")},m(v,V){o($1.head,e),o($1.head,s),N(v,t,V),N(v,l,V),o(l,r),o(r,c);for(let z=0;z<1;z+=1)i[z]&&i[z].m(c,null);o(c,C),o(c,y),o(c,m),o(c,E),o(c,L),o(c,k);for(let z=0;z<W.length;z+=1)W[z]&&W[z].m(k,null);o(l,B),o(l,d),o(d,g),o(g,w),o(g,A),X.m(g,null),o(d,O),o(d,H),N(v,I,V),l1($,v,V),N(v,R,V),l1(J,v,V),Y=!0,r1||(P=[C1(y,"click",a[5]),C1(E,"click",a[4])],r1=!0)},p(v,[V]){if(V&5&&(q=m1([v[2][v[0]]]),i=c2(i,V,G,1,v,q,u,c,o2,W1,C,O1)),V&73){a1=m1({length:g1});let z;for(z=0;z<a1.length;z+=1){const b1=G1(v,a1,z);W[z]?W[z].p(b1,V):(W[z]=R1(b1),W[z].c(),W[z].m(k,null))}for(;z<W.length;z+=1)W[z].d(1);W.length=a1.length}u1===(u1=k1(v))&&X?X.p(v,V):(X.d(1),X=u1(v),X&&(X.c(),X.m(g,null)))},i(v){Y||(U($.$$.fragment,v),U(J.$$.fragment,v),Y=!0)},o(v){K($.$$.fragment,v),K(J.$$.fragment,v),Y=!1},d(v){v&&(h(t),h(l),h(I),h(R)),h(e),h(s);for(let V=0;V<1;V+=1)i[V].d();q1(W,v),X.d(),s1($,v),s1(J,v),r1=!1,J1(P)}}}let e3="0",t3="5%",l3="100%",s3="90%",T1=1.5;const g1=3,U1=5e3,j1="Harry",r3=150;function a3(a,e,s){let t=0,l;const r=()=>{t<g1-1?(s(0,t++,t),t==2&&y()):s(0,t=0)};S1(()=>{l=setInterval(r,U1)});const c=["/carousel/HarryPosing.JPG","/carousel/HarryTeaching.png","/carousel/HarryCoding.JPG"];let i,u="",C=0;function y(){C=0,s(1,u=""),i=setInterval(()=>{C<j1.length?(s(1,u+=j1[C]),C++):clearInterval(i)},r3)}function b(d){var g=document.getElementById("image-"+t);if(g==null)throw new Error("Null Document");g.style.animation="none",g.offsetHeight,g.style.animation=""}function m(){clearInterval(l),l=setInterval(r,U1)}function E(){b(),t==0?b():t==1?(b(),b(),b(),b(),b()):t==2&&y(),m()}const x=()=>{s(0,t=(t+1)%g1),t==2&&y(),m()},L=()=>{s(0,t=(t-1+g1)%g1),t==2&&y(),m()},k=d=>{s(0,t=d),t==2&&y(),m()};return[t,u,c,E,x,L,k,d=>k(d)]}class d3 extends p1{constructor(e){super(),f1(this,e,a3,X2,d1,{})}}export{d3 as component,h3 as universal};
