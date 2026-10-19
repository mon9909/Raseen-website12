(() => {
const root=document.documentElement, langBtn=document.querySelector('.lang'), menuBtn=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
function setLang(lang){
 const en=lang==='en'; root.lang=lang;root.dir=en?'ltr':'rtl';document.body.setAttribute('lang',lang);
 document.querySelectorAll('[data-ar][data-en]').forEach(el=>{const v=el.getAttribute(en?'data-en':'data-ar');if(v!==null)el.innerHTML=v;});
 document.querySelectorAll('[data-placeholder-ar][data-placeholder-en]').forEach(el=>el.placeholder=el.getAttribute(en?'data-placeholder-en':'data-placeholder-ar'));
 if(langBtn)langBtn.textContent=en?'عربي':'EN';
 if(menuBtn)menuBtn.setAttribute('aria-label',en?'Open menu':'فتح القائمة');
 try{localStorage.setItem('raseen-language',lang)}catch(e){}
}
if(langBtn)langBtn.addEventListener('click',()=>setLang(root.lang==='ar'?'en':'ar'));
if(menuBtn&&nav)menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
try{if(localStorage.getItem('raseen-language')==='en')setLang('en')}catch(e){}
// Gentle reveal-on-scroll animations; content remains visible if motion is reduced or observer is unavailable.
const revealTargets=document.querySelectorAll('.section,.splitband,.sectors,.pagecontent .pageintro,.gridcards,.approachrow,.callout,.market-entry-feature');
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 revealTargets.forEach(el=>el.classList.add('reveal'));
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:0.12});
 revealTargets.forEach(el=>revealObserver.observe(el));
}
const form=document.querySelector('[data-inquiry-form]');
if(form)form.addEventListener('submit',e=>{
 e.preventDefault();const recipient=form.dataset.recipient||'YOUR_EMAIL@example.com';const out=form.querySelector('.message');
 if(recipient==='YOUR_EMAIL@example.com'){if(out)out.textContent=root.lang==='en'?'Set the company email in inquiry.html before using the form.':'أضف بريد الشركة في inquiry.html قبل استخدام النموذج.';return}
 const d=new FormData(form), en=root.lang==='en';
 const subject=encodeURIComponent((en?'RASEEN inquiry: ':'استفسار إلى رَصين: ')+(d.get('requestType')||''));
 const body=encodeURIComponent(`${en?'Name':'الاسم'}: ${d.get('name')||''}\n${en?'Company':'الشركة'}: ${d.get('company')||''}\n${en?'Email':'البريد الإلكتروني'}: ${d.get('email')||''}\n${en?'Phone':'الهاتف'}: ${d.get('phone')||''}\n${en?'Request type':'نوع الطلب'}: ${d.get('requestType')||''}\n\n${en?'Message':'الرسالة'}:\n${d.get('message')||''}\n${en?'Confidentiality requested':'طلب السرية'}: ${d.get('confidentiality')?(en?'Yes':'نعم'):(en?'No':'لا')}`);
 window.location.href=`mailto:${recipient}?subject=${subject}&body=${body}`;
 if(out)out.textContent=en?'Your email app should open with the inquiry prepared.':'من المفترض أن يفتح تطبيق البريد برسالة جاهزة.';
});
})();