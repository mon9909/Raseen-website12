(()=>{const mark='<svg class="brand-mark" viewBox="0 0 48 48"><path d="M5 43V15L24 4l19 11v28M12 43V20l12-7 12 7v23M20 43V25l4-3 4 3v18M3 46H45" fill="none" stroke="#B99762" stroke-width="2"/></svg>';const nav=[["index.html","الرئيسية","Home"],["about.html","من نحن","About"],["services.html","الخدمات","Services"],["sectors.html","القطاعات","Sectors"],["approach.html","منهجيتنا","Approach"],["insights.html","الرؤى","Insights"]];const cur=location.pathname.split("/").pop()||"index.html";const h=document.querySelector("[data-site-header]");if(h)h.innerHTML=`<header class="site-header"><div class="container header-inner"><a class="brand" href="index.html">${mark}<span><strong>رَصين</strong><small>RASEEN / ADVISORY & INVESTMENT</small></span></a><nav class="nav" id="main-nav">${nav.map(([u,a,e])=>`<a href="${u}" ${cur===u?'aria-current="page"':''} data-ar="${a}" data-en="${e}">${a}</a>`).join("")}<a href="inquiry.html" data-ar="طلب استشارة" data-en="Inquire">طلب استشارة</a></nav><div class="header-actions"><button class="lang-toggle">EN</button><a class="btn btn-primary header-cta" href="inquiry.html" data-ar="طلب استشارة" data-en="Inquire">طلب استشارة</a><button class="menu-toggle" aria-expanded="false">☰</button></div></div></header>`;const f=document.querySelector("[data-site-footer]");if(f)f.innerHTML=`<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a class="brand" href="index.html">${mark}<span><strong style="color:white">رَصين</strong><small>RASEEN / ADVISORY & INVESTMENT</small></span></a><p data-ar="نساعد صُنّاع القرار على فهم الأسواق وتقييم الفرص وبناء خيارات استراتيجية أوضح." data-en="We help decision-makers understand markets, assess opportunities, and build clearer strategic options.">نساعد صُنّاع القرار على فهم الأسواق وتقييم الفرص وبناء خيارات استراتيجية أوضح.</p></div><div><p class="footer-title" data-ar="استكشف" data-en="EXPLORE">استكشف</p><div class="footer-links"><a href="market-entry.html" data-ar="دراسة ما قبل دخول السوق" data-en="Market entry assessment">دراسة ما قبل دخول السوق</a><a href="services.html" data-ar="الخدمات" data-en="Services">الخدمات</a><a href="sectors.html" data-ar="القطاعات" data-en="Sectors">القطاعات</a><a href="approach.html" data-ar="منهجية العمل" data-en="Approach">منهجية العمل</a></div></div><div><p class="footer-title" data-ar="ابدأ حوارًا" data-en="START A CONVERSATION">ابدأ حوارًا</p><div class="footer-links"><a href="inquiry.html" data-ar="طلب استشارة" data-en="Request a consultation">طلب استشارة</a><a href="privacy.html" data-ar="الخصوصية" data-en="Privacy">الخصوصية</a><a href="insights.html" data-ar="الرؤى" data-en="Insights">الرؤى</a></div></div></div><div class="footer-bottom"><span data-ar="© رَصين. جميع الحقوق محفوظة." data-en="© RASEEN. All rights reserved.">© رَصين. جميع الحقوق محفوظة.</span><span data-ar="استشارات استراتيجية واستثمارية" data-en="Strategy & Investment Advisory">استشارات استراتيجية واستثمارية</span></div></div></footer>`;function lang(l){document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";document.querySelectorAll("[data-ar][data-en]").forEach(x=>x.innerHTML=x.dataset[l]);document.querySelectorAll("[data-aria-ar][data-aria-en]").forEach(x=>x.setAttribute("aria-label",x.dataset["aria"+l[0].toUpperCase()+l.slice(1)]));document.querySelectorAll("[data-alt-ar][data-alt-en]").forEach(x=>x.setAttribute("alt",x.dataset["alt"+l[0].toUpperCase()+l.slice(1)]));document.querySelectorAll("[data-placeholder-ar][data-placeholder-en]").forEach(x=>x.setAttribute("placeholder",x.dataset["placeholder"+l[0].toUpperCase()+l.slice(1)]));document.querySelectorAll(".lang-toggle").forEach(b=>b.textContent=l==="ar"?"EN":"عربي");try{localStorage.setItem("raseen-language",l)}catch(e){}}let l="ar";try{l=localStorage.getItem("raseen-language")||"ar"}catch(e){}lang(l);document.addEventListener("click",e=>{if(e.target.closest(".lang-toggle"))lang(document.documentElement.lang==="ar"?"en":"ar");const b=e.target.closest(".menu-toggle");if(b){const n=document.querySelector(".nav");n.classList.toggle("is-open");b.setAttribute("aria-expanded",n.classList.contains("is-open"));b.textContent=n.classList.contains("is-open")?"×":"☰"}});if("IntersectionObserver"in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll(".reveal").forEach(x=>io.observe(x))}else document.querySelectorAll(".reveal").forEach(x=>x.classList.add("is-visible"));const form=document.querySelector("[data-inquiry-form]");if(form){const status=form.querySelector(".form-status"),result=form.querySelector(".form-result"),copyField=form.querySelector("#inquiry-copy"),copyButton=form.querySelector(".copy-inquiry"),copyStatus=form.querySelector(".copy-status");form.addEventListener("submit",e=>{e.preventDefault();if(!form.reportValidity())return;const ar=document.documentElement.lang==="ar",data=new FormData(form),labels=ar?{name:"الاسم",company:"الشركة / الجهة",email:"البريد الإلكتروني",country:"السوق المستهدف",type:"نوع الاحتياج",message:"نبذة عن الاحتياج"}:{name:"Name",company:"Company / organization",email:"Email",country:"Target market",type:"Type of support",message:"Brief description"};const lines=[ar?"طلب استشارة — رصين":"Consultation inquiry — RASEEN"];for(const [key,labelText] of Object.entries(labels)){const value=String(data.get(key)||"").trim();if(value)lines.push(`${labelText}: ${value}`)}copyField.value=lines.join("\n\n");result.hidden=false;status.textContent=ar?"تم تجهيز نص الطلب. راجعه ثم انسخه لإرساله عبر قناة التواصل المناسبة.":"Your inquiry is ready. Review it, then copy it to send through your preferred contact channel.";copyButton.focus();});copyButton?.addEventListener("click",async()=>{try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(copyField.value)}else{copyField.focus();copyField.select();const ok=document.execCommand("copy");if(!ok)throw new Error("Copy failed")}copyStatus.textContent=document.documentElement.lang==="ar"?"تم نسخ تفاصيل الطلب.":"Inquiry details copied."}catch(err){copyField.focus();copyField.select();copyStatus.textContent=document.documentElement.lang==="ar"?"حدد النص أعلاه وانسخه يدويًا.":"Select the text above and copy it manually."}})}})();

/* RASEEN sector cards: accessible expand + calm manual/automatic carousel */
(()=>{
 const carousel=document.querySelector('#sector-carousel');
 if(!carousel) return;
 const cards=[...carousel.querySelectorAll('[data-sector-card]')];
 const prev=document.querySelector('.sector-carousel-prev');
 const next=document.querySelector('.sector-carousel-next');
 const pause=document.querySelector('.sector-carousel-pause');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 let index=0, timer=null, paused=reduced;
 const label=(button,ar,en)=>{if(!button)return;button.dataset.ar=ar;button.dataset.en=en;button.textContent=document.documentElement.lang==='ar'?ar:en;};
 const go=(i)=>{
   if(!cards.length)return;
   index=(i+cards.length)%cards.length;
   cards[index].scrollIntoView({behavior:reduced?'auto':'smooth',block:'nearest',inline:'start'});
 };
 cards.forEach(card=>{
   const toggle=card.querySelector('.sector-expand-toggle');
   const panel=card.querySelector('.sector-expanded');
   toggle?.addEventListener('click',()=>{
     const opening=toggle.getAttribute('aria-expanded')!=='true';
     toggle.setAttribute('aria-expanded',String(opening));
     panel.hidden=!opening;
     toggle.dataset.ar=opening?'إخفاء التفاصيل −':'استكشف محاور القطاع +';
     toggle.dataset.en=opening?'Hide details −':'Explore sector focus +';
     toggle.textContent=document.documentElement.lang==='ar'?toggle.dataset.ar:toggle.dataset.en;
     if(opening){index=cards.indexOf(card);}
   });
 });
 prev?.addEventListener('click',()=>{go(index-1);restart();});
 next?.addEventListener('click',()=>{go(index+1);restart();});
 const setPauseText=()=>{
   if(!pause)return;
   pause.setAttribute('aria-pressed',String(paused));
   label(pause,paused?'استئناف الحركة':'إيقاف الحركة',paused?'Resume motion':'Pause motion');
 };
 const stop=()=>{if(timer)window.clearInterval(timer);timer=null;};
 const start=()=>{stop();if(paused||reduced)return;timer=window.setInterval(()=>go(index+1),5600);};
 const restart=()=>{start();};
 pause?.addEventListener('click',()=>{paused=!paused;setPauseText();paused?stop():start();});
 carousel.addEventListener('mouseenter',stop);
 carousel.addEventListener('mouseleave',start);
 carousel.addEventListener('focusin',stop);
 carousel.addEventListener('focusout',e=>{if(!carousel.contains(e.relatedTarget))start();});
 carousel.addEventListener('scroll',()=>{
   const center=carousel.getBoundingClientRect().left+carousel.getBoundingClientRect().width/2;
   let closest=0,dist=Infinity;
   cards.forEach((card,i)=>{const r=card.getBoundingClientRect();const d=Math.abs((r.left+r.right)/2-center);if(d<dist){dist=d;closest=i;}});
   index=closest;
 },{passive:true});
 document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
 setPauseText();start();
})();

// Keep photo-led cards visually complete if a remote image fails.
document.querySelectorAll('img').forEach((img)=>{img.addEventListener('error',()=>{if(img.dataset.imageFallback)return;img.dataset.imageFallback='1';img.style.background='linear-gradient(135deg,#d9d0bd,#8b9b94)';img.style.objectFit='cover';},{once:true});});
