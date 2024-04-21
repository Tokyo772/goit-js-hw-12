import{i as c,S as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(o){const s="https://pixabay.com/api/",r=new URLSearchParams({key:"43457723-16bfd608d3311c06907a5c683",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${s}?${r}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}function f(o){return o.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:m})=>`<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${r}">
              <img
                class="gallery-image"
                src="${s}"
                alt="${i}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${e}</li>
                <li class="description-items"><span class="accent">Views </span>${t}</li>
                <li class="description-items"><span class="accent">Comments </span>${a}</li>
                <li class="description-items"><span class="accent">Downloads </span>${m}</li>
              </ul>
        </div>
      </li>`).join("")}const l={title:"❌",titleSize:"24px",messageColor:"white",messageSize:"16px",backgroundColor:"rgba(225, 0, 0, 0.3)",position:"topRight",timeout:3e3},n={form:document.querySelector(".js-form"),list:document.querySelector(".js-list"),loader:document.querySelector(".js-loader")};n.form.addEventListener("submit",y);function h(){n.loader.style.display="block"}function u(){n.loader.style.display="none"}u();function y(o){o.preventDefault();const s=n.form.elements.search.value.trim();if(s===""){c.show({...l,message:"Please enter a search term before submitting!"});return}h(),p(s).then(r=>{if(r.hits.length===0)throw new Error("error");n.list.innerHTML=f(r.hits),g.refresh()}).catch(r=>{n.list.innerHTML="",c.show({...l,message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{u()})}const g=new d(".js-list a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
