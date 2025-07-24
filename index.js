import{a as u,S as h,i as l}from"./assets/vendor-ChKhXQjG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="51458784-2f96fe50249650f21f6db1ef2",y="https://pixabay.com/api/",g=i=>u.get(y,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{if(!t.data||!t.data.hits)throw new Error("Invalid response format from Pixabay API");return t.data.hits}).catch(t=>{throw console.error("Error fetching images:",t),t}),c=document.querySelector(".gallery"),d=document.querySelector(".loader-box"),L=new h(".gallery-item a",{captionsData:"alt",captionDelay:250}),b=i=>{const t=i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:o,comments:p,downloads:f})=>`
         <li class="gallery-item">
        <a class="gallery-link" href="${a}">
            <img
                class="gallery-img"
                src="${s}"
                alt="${e}"
            />
        </a>
        <ul class="list-description">
            <li class="description">
                <h3 class="title">Likes</h3>
                <p class="text">${r}</p>
            </li>
            <li class="description">
                <h3 class="title">Views</h3>
                <p class="text">${o}</p>
            </li>
            <li class="description">
                <h3 class="title">Comments</h3>
                <p class="text">${p}</p>
            </li>
            <li class="description">
                <h3 class="title">Downloads</h3>
                <p class="text">${f}</p>
            </li>
        </ul>
    </li>
        `).join("");c.insertAdjacentHTML("beforeend",t),L.refresh()},x=()=>{c.innerHTML=""},w=()=>{d.classList.remove("hidden")},P=()=>{d.classList.add("hidden")},n=document.querySelector(".form");n.addEventListener("submit",i=>{i.preventDefault(),x();const t=i.target.elements.searchText.value.trim();if(!t){l.error({title:"Please enter text",position:"topRight"});return}w(),g(t).then(s=>{if(!s||s.length===0){l.error({title:`Sorry, there are no images matching "${t}". Please try again!`,position:"topRight"});return}b(s)}).catch(s=>{l.error({title:s.message,position:"topRight"})}).finally(()=>{P(),n.reset()})});
//# sourceMappingURL=index.js.map
