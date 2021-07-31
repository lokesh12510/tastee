!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},i=t.parcelRequire213a;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in s){let n=s[e];delete s[e];let t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,n){s[e]=n},t.parcelRequire213a=i),i.register("3OOJ5",(function(n,t){var r,s;e(n.exports,"register",(()=>r),(e=>r=e)),e(n.exports,"resolve",(()=>s),(e=>s=e));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},s=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i("3OOJ5").register(JSON.parse('{"6GFSM":"index.f9b0a313.js","3ZXxf":"icons.7a226c28.svg"}'));const a=async function(e,n){try{const r=n?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}):fetch(e),s=await Promise.race([r,(t=10,new Promise((function(e,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${t} second`))}),1e3*t)})))]),i=await s.json();if(!s.ok)throw new Error(`${i.message} (${i.status})`);return i}catch(e){throw e}var t},o={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},c=function(e){const{recipe:n}=e.data;return{id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients,...n.key&&{key:n.key}}},d=function(e=o.search.page){o.search.page=e;const n=(e-1)*o.search.resultsPerPage,t=e*o.search.resultsPerPage;return o.search.results.slice(n,t)},l=function(){localStorage.setItem("bookmarks",JSON.stringify(o.bookmarks))},u=function(e){o.bookmarks.push(e),e.id===o.recipe.id&&(o.recipe.bookmarked=!0),l()};!function(){const e=localStorage.getItem("bookmarks");e&&(o.bookmarks=JSON.parse(e))}();var p;i.register("31oBo",(function(n,t){var r;e(n.exports,"getBundleURL",(()=>r),(e=>r=e));var s=null;function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(){return s||(s=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[0])}return"/"}()),s}})),i.register("3XRD4",(function(e,n){"use strict";var t=i("3OOJ5").resolve;function r(e){if(""===e)return".";var n="/"===e[e.length-1]?e.slice(0,e.length-1):e,t=n.lastIndexOf("/");return-1===t?".":n.slice(0,t)}function s(e,n){if(e===n)return"";var t=e.split("/");"."===t[0]&&t.shift();var r,s,i=n.split("/");for("."===i[0]&&i.shift(),r=0;(r<i.length||r<t.length)&&null==s;r++)t[r]!==i[r]&&(s=r);var a=[];for(r=0;r<t.length-s;r++)a.push("..");return i.length>s&&a.push.apply(a,i.slice(s)),a.join("/")}e.exports=function(e,n){return s(r(t(e)),t(n))},e.exports._dirname=r,e.exports._relative=s})),p=i("31oBo").getBundleURL()+i("3XRD4")("6GFSM","3ZXxf");class h{_data;render(e,n=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup();if(!n)return t;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}update(e){this._data=e;const n=this._generateMarkup(),t=document.createRange().createContextualFragment(n),r=Array.from(t.querySelectorAll("*")),s=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,n)=>{const t=s[n];e.isEqualNode(t)||""===e.firstChild?.nodeValue.trim()||(t.textContent=e.textContent),e.isEqualNode(t)||Array.from(e.attributes).forEach((e=>{t.setAttribute(e.name,e.value)}))}))}renderSpinner(){const e=`\n        <div class="spinner">\n            <svg>\n            <use href="${n(p)}#icon-loader"></use>\n            </svg>\n        </div> \n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n        <div class="error">\n        <div>\n          <svg>\n            <use href="${n(p)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${n(p)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var g=new class extends h{_parentElement=document.querySelector(".recipe");_errorMessage="Error message";addHandleRender(e){["hashchange","load"].forEach((n=>window.addEventListener(n,e)))}addHandleUpdateServings(e){this._parentElement.addEventListener("click",(function(n){const t=n.target.closest(".btn--update-servings");if(!t)return;const{updateTo:r}=t.dataset;+r&&e(+r)}))}addHandleAddBookmark(e){this._parentElement.addEventListener("click",(function(n){n.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n      <h1 class="recipe__title">\n        <span>${this._data.title}</span>\n      </h1>\n    </figure>\n\n    <div class="recipe__details">\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${n(p)}#icon-clock"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n        <span class="recipe__info-text">minutes</span>\n      </div>\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${n(p)}#icon-users"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n        <span class="recipe__info-text">servings</span>\n\n        <div class="recipe__info-buttons">\n          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n            <svg>\n              <use href="${n(p)}#icon-minus-circle"></use>\n            </svg>\n          </button>\n          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n            <svg>\n              <use href="${n(p)}#icon-plus-circle"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n\n      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n        <svg>\n          <use href="${n(p)}#icon-user"></use>\n        </svg>\n      </div>\n      <button class="btn--round btn--bookmark">\n        <svg class="">\n          <use href="${n(p)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n        </svg>\n      </button>\n    </div>\n\n    <div class="recipe__ingredients">\n      <h2 class="heading--2">Recipe ingredients</h2>\n      <ul class="recipe__ingredient-list">\n      ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n\n      </ul>\n    </div>\n\n    <div class="recipe__directions">\n      <h2 class="heading--2">How to cook it</h2>\n      <p class="recipe__directions-text">\n        This recipe was carefully designed and tested by\n        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n        directions at their website.\n      </p>\n      <a\n        class="btn--small recipe__btn"\n        href="${this._data.sourceUrl}"\n        target="_blank"\n      >\n        <span>Directions</span>\n        <svg class="search__icon">\n          <use href="${n(p)}#icon-arrow-right"></use>\n        </svg>\n      </a>\n    </div>\n  `}_generateMarkupIngredient(e){return`\n          <li class="recipe__ingredient">\n            <svg class="recipe__icon">\n              <use href="${n(p)}#icon-check"></use>\n            </svg>\n            <div class="recipe__quantity">${e.quantity?e.quantity:""}</div>\n            <div class="recipe__description">\n              <span class="recipe__unit">${e.unit}</span>${e.description}\n            </div>\n          </li>`}};var _=new class{_parentElement=document.querySelector(".search");getQuery(){const e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandleSearch(e){this._parentElement.addEventListener("submit",(function(n){n.preventDefault(),e()}))}};var f=new class extends h{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n    <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n            <figure class="preview__fig">\n            <img src="${this._data.image}" alt="Test" />\n            </figure>\n            <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n                <svg>\n                <use href="${n(p)}#icon-user"></use>\n                </svg>\n            </div>\n            </div>\n        </a>\n    </li>\n  `}};var v=new class extends h{_parentElement=document.querySelector(".results");_errorMessage="Not found";_generateMarkup(){return this._data.map((e=>f.render(e,!1))).join("")}};var m=new class extends h{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(n){const t=n.target.closest(".btn--inline");if(!t)return;const r=+t.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n                <use href="${n(p)}#icon-arrow-right"></use>\n            </svg>\n        </button>\n      `:e===t&&t>1?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n                <use href="${n(p)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n        </button>\n      `:e<t?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n                <use href="${n(p)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n        </button>\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n                <use href="${n(p)}#icon-arrow-right"></use>\n            </svg>\n        </button>\n      `:""}};var b=new class extends h{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No Bookmarks yet";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>f.render(e,!1))).join("")}};var k=new class extends h{_parentElement=document.querySelector(".upload");_message="Successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(n){n.preventDefault();const t=[...new FormData(this)],r=Object.fromEntries(t);e(r)}))}_generateMarkup(){}};document.querySelector(".recipe");const w=async function(){try{const e=window.location.hash.slice(1);if(!e)return;g.renderSpinner(),v.update(d()),b.update(o.bookmarks),await async function(e){try{const n=await a(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=31a87251-9d72-4612-a004-67fa3a996bb3`);o.recipe=c(n),o.bookmarks.some((n=>n.id===e))?o.recipe.bookmarked=!0:o.recipe.bookmarked=!1}catch(e){throw e}}(e),g.render(o.recipe)}catch(e){g.renderError()}},y=async function(){try{v.renderSpinner();const e=_.getQuery();if(!e)return;await async function(e){try{const n=await a(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=31a87251-9d72-4612-a004-67fa3a996bb3`);o.search.query=e,o.search.results=n.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),o.search.page=1}catch(e){throw console.log(`${e}`),e}}(e),v.render(d()),m.render(o.search)}catch(e){console.log(e)}},$=function(e){console.log(e),v.render(d(e)),m.render(o.search)},E=function(e){!function(e){o.recipe.ingredients.forEach((n=>{n.quantity=n.quantity*e/o.recipe.servings})),o.recipe.servings=e}(e),g.update(o.recipe)},S=function(){o.recipe.bookmarked?function(e){const n=o.bookmarks.findIndex((n=>n.id===e));o.bookmarks.splice(n,1),e===o.recipe.id&&(o.recipe.bookmarked=!1),l()}(o.recipe.id):u(o.recipe),g.update(o.recipe),b.render(o.bookmarks)},x=function(){b.render(o.bookmarks)},H=async function(e){try{k.renderSpinner(),await async function(e){try{const n=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const n=e[1].split(",").map((e=>e.trim())),[t,r,s]=n;if(3!==n.length)throw new Error("wrong format!");return{quantity:t?+t:null,unit:r,description:s}})),t={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:n},r=await a("https://forkify-api.herokuapp.com/api/v2/recipes/?key=31a87251-9d72-4612-a004-67fa3a996bb3",t);o.recipe=c(r),u(o.recipe)}catch(e){throw e}}(e),console.log(o.recipe),g.render(o.recipe),k.renderMessage(),b.render(o.bookmarks),window.history.pushState(null,"",`#${o.recipe.id}`),setTimeout((function(){k.toggleWindow()}),2500)}catch(e){console.error(e),k.renderError(e.message)}};b.addHandlerRender(x),g.addHandleRender(w),g.addHandleUpdateServings(E),g.addHandleAddBookmark(S),_.addHandleSearch(y),m.addHandlerClick($),k.addHandlerUpload(H)}();
//# sourceMappingURL=index.f9b0a313.js.map
