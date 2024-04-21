import{a as b,i as c,S as L}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const S="https://pixabay.com/api/",w="43457723-16bfd608d3311c06907a5c683";async function u(a,s=1){const o=new URLSearchParams({key:w,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15});return(await b.get(`${S}?${o}`)).data}function p(a){return a.map(({webformatURL:s,largeImageURL:o,tags:i,likes:e,views:t,comments:n,downloads:g})=>`<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${o}">
              <img
                class="gallery-image"
                src="${s}"
                alt="${i}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${e}</li>
                <li class="description-items"><span class="accent">Views </span>${t}</li>
                <li class="description-items"><span class="accent">Comments </span>${n}</li>
                <li class="description-items"><span class="accent">Downloads </span>${g}</li>
              </ul>
        </div>
      </li>`).join("")}const l={title:"❌",titleSize:"24px",messageColor:"white",messageSize:"16px",backgroundColor:"rgba(225, 0, 0, 0.3)",position:"topRight",timeout:3e3};let d=1,f=null;const r={form:document.querySelector(".js-form"),list:document.querySelector(".js-list"),loader:document.querySelector(".js-loader"),btnLoadMore:document.querySelector(".btn-js-load-more")};r.btnLoadMore.addEventListener("click",P);r.form.addEventListener("submit",M);function h(){r.loader.style.display="block"}function m(){r.loader.style.display="none"}m();async function M(a){a.preventDefault();const s=r.form.elements.search.value.trim();if(s===""){c.show({...l,message:"Please enter a search term before submitting!"});return}f=s,d=1,h();try{const o=await u(s);if(o.hits.length===0){r.list.innerHTML="",c.show({...l,message:"Sorry, there are no images matching your search query. Please try again!"}),r.btnLoadMore.classList.replace("btn-load-more","btn-hidden-load-more");return}r.list.innerHTML=p(o.hits),y.refresh(),r.btnLoadMore.classList.replace("btn-hidden-load-more","btn-load-more")}catch{r.list.innerHTML="",c.show({...l,message:"Sorry, there are no images matching your search query. Please try again!"})}finally{m()}}async function P(){h();try{d+=1;const a=await u(f,d);r.list.insertAdjacentHTML("beforeend",p(a.hits)),y.refresh()}catch{c.show({...l,message:"Failed to load more images. Please try again!"})}finally{m()}}const y=new L(".js-list a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
