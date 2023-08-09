import{s as D,n as H,f as L}from"../chunks/scheduler.9a542d92.js";import{S as q,i as F,s as _,g as v,D as V,f as s,c as b,h as f,B as k,j as M,k as c,l as T,a as u,z as C,C as B}from"../chunks/index.1ffa850a.js";import{e as E}from"../chunks/each.3c8562bc.js";function P(p,t,a){const i=p.slice();return i[0]=t[a],i[2]=a,i}function z(p){let t,a;return{c(){t=v("img"),this.h()},l(i){t=f(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){L(t.src,a="/About"+(p[2]+1)+".png")||c(t,"src",a),c(t,"alt","Project Images"),c(t,"class","banded-image svelte-5dj6lc")},m(i,g){u(i,t,g)},p:H,d(i){i&&s(t)}}}function W(p){let t,a,i=`<h1 style="line-height: 50%">About Harry</h1> <h2>Harry has been creating code for 7 years.</h2> <br/> <p class="svelte-5dj6lc">Ever since learning Swift with Apple in Swift Playgrounds in 2017, Harry
        has envisioned, launched, and built a number of projects. He&#39;s a full
        stack developer, game designer, and teacher. In 2018, Harry started
        studying competitive programming by learning Java and preparing for the
        Canadian Computing Compeition. From there, he started learning
        algorithms and data structures and picked up two other languages, Python
        and C++, all the way throughout middle school and highschool going all
        the way up to learning advanced topics such as persistent data
        structures and CDQ divide and conquer.</p> <p class="svelte-5dj6lc">In 2020, Harry developed a replica of Wii Sports Tennis which earned him
        a mark of 100% in his grade 10 computer science course. Later on, in
        2021 and 2022, he continued developing games creating his own random
        terrain generation technique and pixel art methodology. At the same
        time, Harry became interested in a field which he continues to study:
        Artificial Intelligence. He created his own Chess AI, a doodle
        classifier, and a neuroevolution flappy bird game to advance his
        knowledge into machine learning and its applications.</p>`,g,n,m,j,d,I='<div class="image-captions svelte-5dj6lc"><p class="caption svelte-5dj6lc">1: A bipartite graph illustrating augmenting paths. Apart of a presentation on Bipartite Matching by Harry, a 3rd year CS topic.</p> <p class="caption svelte-5dj6lc">2: Harry&#39;s Wii Sports Tennis game coded in python.</p> <p class="caption svelte-5dj6lc">3: A randomly generated golf map with unfiltered RGB values.</p> <p class="caption svelte-5dj6lc">4: Flappy birds training in a genetic algorithm neuroevolution. For more information on the meaning of the bird colors see the <a href="https://github.com/he-is-harry/Neuroevolution-Flappy-Bird">project page</a>.</p></div>',y,o,A=`<p class="svelte-5dj6lc">Harry is continuing his journey by going on to study Computer Science at
        the University of Waterloo. He continues to broaden his understanding of
        computer science by studying front end development and networking. For example,
        this website built in 2023 is one of Harry&#39;s projects, where the site is
        coded in SvelteKit. Harry&#39;s hobbies include learning about quantum
        chromodynamics and running with his family.</p>`,x=E({length:4}),r=[];for(let e=0;e<x.length;e+=1)r[e]=z(P(p,x,e));return{c(){t=_(),a=v("div"),a.innerHTML=i,g=_(),n=v("div"),m=v("div");for(let e=0;e<r.length;e+=1)r[e].c();j=_(),d=v("div"),d.innerHTML=I,y=_(),o=v("div"),o.innerHTML=A,this.h()},l(e){V("svelte-19yt1tc",document.head).forEach(s),t=b(e),a=f(e,"DIV",{class:!0,["data-svelte-h"]:!0}),k(a)!=="svelte-1g5pz0z"&&(a.innerHTML=i),g=b(e),n=f(e,"DIV",{class:!0,style:!0});var l=M(n);m=f(l,"DIV",{class:!0});var S=M(m);for(let w=0;w<r.length;w+=1)r[w].l(S);S.forEach(s),j=b(l),d=f(l,"DIV",{class:!0,["data-svelte-h"]:!0}),k(d)!=="svelte-12hq16o"&&(d.innerHTML=I),l.forEach(s),y=b(e),o=f(e,"DIV",{class:!0,["data-svelte-h"]:!0}),k(o)!=="svelte-saud4h"&&(o.innerHTML=A),this.h()},h(){document.title="About - Harry He",c(a,"class","block-1 svelte-5dj6lc"),c(m,"class","image-band svelte-5dj6lc"),c(d,"class","caption-background"),c(n,"class","images"),T(n,"background-color","var(--surface-2)"),T(n,"width","100%"),c(o,"class","block-2 svelte-5dj6lc")},m(e,h){u(e,t,h),u(e,a,h),u(e,g,h),u(e,n,h),C(n,m);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(m,null);C(n,j),C(n,d),u(e,y,h),u(e,o,h)},p:H,i:H,o:H,d(e){e&&(s(t),s(a),s(g),s(n),s(y),s(o)),B(r,e)}}}class N extends q{constructor(t){super(),F(this,t,null,W,D,{})}}export{N as component};
