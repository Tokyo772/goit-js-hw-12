import{a as S,i as l,S as v}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const M="https://pixabay.com/api/",P="43457723-16bfd608d3311c06907a5c683";async function f(a,t=1){const r=new URLSearchParams({key:P,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15});return(await S.get(`${M}?${r}`)).data}function p(a){return a.map(({webformatURL:t,largeImageURL:r,tags:n,likes:e,views:s,comments:c,downloads:w})=>`<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${r}">
              <img
                class="gallery-image"
                src="${t}"
                alt="${n}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${e}</li>
                <li class="description-items"><span class="accent">Views </span>${s}</li>
                <li class="description-items"><span class="accent">Comments </span>${c}</li>
                <li class="description-items"><span class="accent">Downloads </span>${w}</li>
              </ul>
        </div>
      </li>`).join("")}const d={title:"❌",titleSize:"24px",messageColor:"white",messageSize:"16px",backgroundColor:"rgba(225, 0, 0, 0.3)",position:"topRight",timeout:3e3};let i=1,g=null,u;const o={form:document.querySelector(".js-form"),list:document.querySelector(".js-list"),loader:document.querySelector(".js-loader"),btnLoadMore:document.querySelector(".btn-js-load-more")};o.btnLoadMore.addEventListener("click",j);o.form.addEventListener("submit",$);function y(){o.loader.style.display="block"}function m(){o.loader.style.display="none"}function h(){o.btnLoadMore.classList.add("hidden")}function L(){o.btnLoadMore.classList.remove("hidden")}m();async function $(a){a.preventDefault();const t=o.form.elements.search.value.trim();if(t===""){l.show({...d,message:"Please enter a search term before submitting!"});return}g=t,i=1,y();try{const r=await f(t,i);o.list.innerHTML=r.hits.length?p(r.hits):"",b.refresh(),u=Math.ceil(r.totalHits/r.hits.length),i>=u?h():L(),r.hits.length===0&&(l.show({...d,message:"Sorry, there are no images matching your search query. Please try again!"}),h())}catch{o.list.innerHTML="",l.show({...d,message:"Sorry, there was an error fetching the images. Please try again!"})}finally{m()}}async function j(){i+=1,y(),h();try{const a=await f(g,i);if(a.hits.length>0){o.list.insertAdjacentHTML("beforeend",p(a.hits)),b.refresh();const{height:t}=o.list.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*3,behavior:"smooth"})}i>=u?l.show({...d,message:"We're sorry, but you've reached the end of search results."}):L()}catch{l.show({...d,message:"We're sorry, but you've reached the end of search results."})}finally{m()}}const b=new v(".js-list a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
