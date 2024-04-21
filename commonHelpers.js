import{a as p,i as c,S as d}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function f(a){const s="https://pixabay.com/api/",r=new URLSearchParams({key:"43457723-16bfd608d3311c06907a5c683",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await p.get(`${s}?${r}`)).data}function h(a){return a.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,views:t,comments:n,downloads:m})=>`<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${r}">
              <img
                class="gallery-image"
                src="${s}"
                alt="${o}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${e}</li>
                <li class="description-items"><span class="accent">Views </span>${t}</li>
                <li class="description-items"><span class="accent">Comments </span>${n}</li>
                <li class="description-items"><span class="accent">Downloads </span>${m}</li>
              </ul>
        </div>
      </li>`).join("")}const l={title:"❌",titleSize:"24px",messageColor:"white",messageSize:"16px",backgroundColor:"rgba(225, 0, 0, 0.3)",position:"topRight",timeout:3e3},i={form:document.querySelector(".js-form"),list:document.querySelector(".js-list"),loader:document.querySelector(".js-loader")};i.form.addEventListener("submit",g);function y(){i.loader.style.display="block"}function u(){i.loader.style.display="none"}u();async function g(a){a.preventDefault();const s=i.form.elements.search.value.trim();if(s===""){c.show({...l,message:"Please enter a search term before submitting!"});return}y();try{const r=await f(s);if(r.hits.length===0){i.list.innerHTML="",c.show({...l,message:"Sorry, there are no images matching your search query. Please try again!"});return}i.list.innerHTML=h(r.hits),b.refresh()}catch{i.list.innerHTML="",c.show({...l,message:"Sorry, there are no images matching your search query. Please try again!"})}finally{u()}}const b=new d(".js-list a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
