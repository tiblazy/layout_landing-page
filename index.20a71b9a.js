!function(){var e,n,t,r,i,o,s=function(){return{phoneIcon:document.querySelector(".nav__icon--phone"),phoneList:document.querySelector(".phone__items")}},c=function(e){var n=s().phoneList;e?n.classList.remove("hidden"):n.classList.add("hidden")};function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var a=function(){return{menu:document.querySelector(".menu"),hero:document.querySelector(".hero"),main:document.querySelector(".main"),burgerIcon:document.querySelector(".nav__icon--burger"),closeIcon:document.querySelector(".nav__icon--close"),menuLinks:document.querySelectorAll(".menu__link")}},d=function(e){var n=a(),t=n.menu,r=n.hero,i=n.main;e?(t.classList.add("is-visible"),t.classList.remove("is-hidden","hidden"),r.classList.add("is-hidden","hidden"),r.classList.remove("is-visible"),i.classList.add("hidden")):(t.classList.remove("is-visible"),t.classList.add("is-hidden","hidden"),r.classList.remove("is-hidden","hidden"),r.classList.add("is-visible"),i.classList.remove("hidden"))},l=function(e){var n=document.getElementById(e);d(!1),setTimeout(function(){n.scrollIntoView({behavior:"smooth"})},100)};(n=s().phoneIcon).addEventListener("mouseenter",function(){return c(!0)}),n.addEventListener("mouseleave",function(){return c(!1)}),r=(t=a()).burgerIcon,i=t.closeIcon,o=t.menuLinks,null==r||r.addEventListener("click",function(){return d(!0)}),null==i||i.addEventListener("click",function(){return d(!1)}),((function(e){if(Array.isArray(e))return u(e)})(e=o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return u(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter(function(e){return!e.classList.contains("menu__link--number")&&!e.classList.contains("menu__link--message")}).forEach(function(e){e.addEventListener("click",function(n){n.preventDefault();var t,r=null===(t=e.getAttribute("href"))||void 0===t?void 0:t.substring(1);r&&l(r)})})}();
//# sourceMappingURL=index.20a71b9a.js.map
