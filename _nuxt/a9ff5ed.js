(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4],{305:function(t,e,r){var content=r(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(115).default)("5ef72236",content,!0,{sourceMap:!1})},306:function(t,e,r){"use strict";r.r(e);var o=r(25),n=(r(307),r(28),r(86),r(15),r(87),r(42),r(27),r(34),r(66),r(33),r(67),r(68));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"ProductItem",props:{product:{type:Object,required:!0,id:{type:Number,required:!0},image:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,default:""},price:{type:Number,required:!0}}},computed:{convertPrice:function(){return"".concat(this.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")," ")}},methods:d(d({},Object(n.b)(["removeProduct"])),{},{removeProductFromList:function(t){this.removeProduct(t)}})},f=(r(311),r(48)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{key:t.product.id,staticClass:"product",attrs:{id:t.product.id}},[r("button",{staticClass:"product__delete",on:{click:function(e){return t.removeProductFromList(t.product.id)}}},[r("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("g",{attrs:{filter:"url(#filter0_d_4_347)"}},[r("rect",{attrs:{x:"4",y:"2",width:"32",height:"32",rx:"10",fill:"#FF8484"}})]),t._v(" "),r("g",[r("path",{attrs:{d:"M22.207 15.7969C22 15.7969 21.8322 15.9646 21.8322 16.1716V23.2535C21.8322 23.4604 22 23.6283 22.207 23.6283C22.4139 23.6283 22.5817 23.4604 22.5817 23.2535V16.1716C22.5817 15.9646 22.4139 15.7969 22.207 15.7969Z",fill:"white"}}),t._v(" "),r("path",{attrs:{d:"M17.7854 15.7969C17.5785 15.7969 17.4107 15.9646 17.4107 16.1716V23.2535C17.4107 23.4604 17.5785 23.6283 17.7854 23.6283C17.9924 23.6283 18.1602 23.4604 18.1602 23.2535V16.1716C18.1602 15.9646 17.9924 15.7969 17.7854 15.7969Z",fill:"white"}}),t._v(" "),r("path",{attrs:{d:"M14.5629 14.7634V23.9953C14.5629 24.541 14.763 25.0534 15.1126 25.4211C15.4605 25.7898 15.9447 25.9991 16.4514 26H23.541C24.0478 25.9991 24.532 25.7898 24.8798 25.4211C25.2293 25.0534 25.4294 24.541 25.4294 23.9953V14.7634C26.1242 14.5789 26.5745 13.9077 26.4815 13.1947C26.3884 12.4819 25.7811 11.9487 25.0622 11.9485H23.1437V11.4801C23.1459 11.0863 22.9902 10.708 22.7113 10.4298C22.4325 10.1517 22.0537 9.99683 21.6598 10H18.3325C17.9387 9.99683 17.5599 10.1517 17.281 10.4298C17.0022 10.708 16.8465 11.0863 16.8487 11.4801V11.9485H14.9302C14.2112 11.9487 13.6039 12.4819 13.5108 13.1947C13.4179 13.9077 13.8681 14.5789 14.5629 14.7634ZM23.541 25.2506H16.4514C15.8107 25.2506 15.3124 24.7002 15.3124 23.9953V14.7963H24.68V23.9953C24.68 24.7002 24.1816 25.2506 23.541 25.2506ZM17.5981 11.4801C17.5956 11.285 17.6723 11.0972 17.8107 10.9595C17.9491 10.8218 18.1373 10.7461 18.3325 10.7495H21.6598C21.8551 10.7461 22.0433 10.8218 22.1816 10.9595C22.3201 11.0971 22.3968 11.285 22.3943 11.4801V11.9485H17.5981V11.4801ZM14.9302 12.6979H25.0622C25.4347 12.6979 25.7367 12.9999 25.7367 13.3724C25.7367 13.7449 25.4347 14.0469 25.0622 14.0469H14.9302C14.5577 14.0469 14.2557 13.7449 14.2557 13.3724C14.2557 12.9999 14.5577 12.6979 14.9302 12.6979Z",fill:"white"}}),t._v(" "),r("path",{attrs:{d:"M19.9962 15.7969C19.7892 15.7969 19.6215 15.9646 19.6215 16.1716V23.2535C19.6215 23.4604 19.7892 23.6283 19.9962 23.6283C20.2032 23.6283 20.3709 23.4604 20.3709 23.2535V16.1716C20.3709 15.9646 20.2032 15.7969 19.9962 15.7969Z",fill:"white"}})]),t._v(" "),r("defs",[r("filter",{attrs:{id:"filter0_d_4_347",x:"0",y:"0",width:"40",height:"40",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[r("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),t._v(" "),r("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),t._v(" "),r("feOffset",{attrs:{dy:"2"}}),t._v(" "),r("feGaussianBlur",{attrs:{stdDeviation:"2"}}),t._v(" "),r("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),t._v(" "),r("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}}),t._v(" "),r("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_4_347"}}),t._v(" "),r("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_4_347",result:"shape"}})],1),t._v(" "),r("clipPath",{attrs:{id:"clip0_4_347"}},[r("rect",{attrs:{width:"16",height:"16",fill:"white",transform:"translate(12 10)"}})])])])]),t._v(" "),r("div",{staticClass:"product__image"},[r("img",{attrs:{src:t.product.image,alt:""}})]),t._v(" "),r("div",{staticClass:"product__content"},[r("h3",{staticClass:"product__name"},[t._v(t._s(t.product.name))]),t._v(" "),r("div",{staticClass:"product__body"},[t._v(t._s(t.product.description))]),t._v(" "),r("div",{staticClass:"product__price"},[r("span",{staticClass:"product__priceNumber"},[t._v(t._s(t.convertPrice))]),t._v(" "),r("span",{staticClass:"products__priceCurrency"},[t._v("руб.")])])])])}),[],!1,null,"2d006008",null);e.default=component.exports},307:function(t,e,r){"use strict";var o=r(10),n=r(5),c=r(3),d=r(116),l=r(17),f=r(12),v=r(205),h=r(43),_=r(84),m=r(204),x=r(4),y=r(85).f,w=r(35).f,P=r(16).f,O=r(308),C=r(309).trim,j="Number",M=n.Number,I=M.prototype,N=n.TypeError,S=c("".slice),E=c("".charCodeAt),k=function(t){var e=m(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,r,o,n,c,d,l,code,f=m(t,"number");if(_(f))throw N("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=C(f),43===(e=E(f,0))||45===e){if(88===(r=E(f,2))||120===r)return NaN}else if(48===e){switch(E(f,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(d=(c=S(f,2)).length,l=0;l<d;l++)if((code=E(c,l))<48||code>n)return NaN;return parseInt(c,o)}return+f};if(d(j,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var D,V=function(t){var e=arguments.length<1?0:M(k(t)),r=this;return h(I,r)&&x((function(){O(r)}))?v(Object(e),r,V):e},B=o?y(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;B.length>F;F++)f(M,D=B[F])&&!f(V,D)&&P(V,D,w(M,D));V.prototype=I,I.constructor=V,l(n,j,V,{constructor:!0})}},308:function(t,e,r){var o=r(3);t.exports=o(1..valueOf)},309:function(t,e,r){var o=r(3),n=r(20),c=r(11),d=r(310),l=o("".replace),f="["+d+"]",v=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),_=function(t){return function(e){var r=c(n(e));return 1&t&&(r=l(r,v,"")),2&t&&(r=l(r,h,"")),r}};t.exports={start:_(1),end:_(2),trim:_(3)}},310:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},311:function(t,e,r){"use strict";r(305)},312:function(t,e,r){var o=r(114)(!1);o.push([t.i,".product[data-v-2d006008]{background:#fffefb;box-shadow:0 20px 30px rgba(0,0,0,.04),0 6px 10px rgba(0,0,0,.02);border-radius:4px;position:relative;cursor:pointer;max-height:423px;min-width:100%;max-width:100%}.product:hover .product__delete[data-v-2d006008]{opacity:1;visibility:visible}.product__delete[data-v-2d006008]{position:absolute;visibility:hidden;opacity:0;transition:all .3s ease;background-color:transparent;right:-8px;top:-8px;padding:0;border:0;display:flex;cursor:pointer}.product__image[data-v-2d006008]{width:100%;height:200px}.product__image img[data-v-2d006008]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:4px 4px 0 0}.product__content[data-v-2d006008]{padding:16px 16px 24px}.product__name[data-v-2d006008]{margin:0;font-weight:600;font-size:20px;line-height:25px;white-space:nowrap}.product__body[data-v-2d006008],.product__name[data-v-2d006008]{color:#3f3f3f;overflow:hidden;text-overflow:ellipsis}.product__body[data-v-2d006008]{font-weight:400;font-size:16px;line-height:20px;margin:16px 0 32px;display:-moz-box;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;line-clamp:4;box-orient:vertical;height:80px}.product__price[data-v-2d006008]{font-weight:600;font-size:24px;line-height:30px;color:#3f3f3f;display:flex;grid-gap:8px;gap:8px}.product__priceNumber[data-v-2d006008]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),t.exports=o},313:function(t,e,r){var content=r(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(115).default)("4f9bedd8",content,!0,{sourceMap:!1})},314:function(t,e,r){"use strict";r(313)},315:function(t,e,r){var o=r(114)(!1);o.push([t.i,".list[data-v-1af3a2df]{display:grid;grid-template-columns:1fr;padding:8px 16px 16px 8px}@media(min-width:1024px){.list[data-v-1af3a2df]{grid-template-columns:repeat(3,1fr);grid-gap:16px;gap:16px;overflow-y:auto;overflow-x:hidden}}.fade-enter-active[data-v-1af3a2df],.fade-leave-active[data-v-1af3a2df]{transition:opacity 1s}.fade-enter[data-v-1af3a2df],.fade-leave-to[data-v-1af3a2df]{opacity:0}",""]),t.exports=o},316:function(t,e,r){"use strict";r.r(e);r(42),r(27),r(34),r(15),r(66),r(33),r(67);var o=r(25),n=r(68);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"ProductsList",components:{ProductItem:r(306).default},computed:d(d({},Object(n.c)(["getProducts","getProductsByMinPrice","getProductsByMaxPrice","getProductsByName","getSortingMethod"])),{},{products:function(){var t;return t="По наименованию"===this.getSortingMethod?this.getProductsByName:"По цене min"===this.getSortingMethod?this.getProductsByMinPrice:"По цене max"===this.getSortingMethod?this.getProductsByMaxPrice:this.getProducts,t}})},f=(r(314),r(48)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition-group",{ref:"productsList",staticClass:"list",attrs:{tag:"div",name:"fade"}},t._l(t.products,(function(t){return r("ProductItem",{key:t.id,attrs:{product:t}})})),1)}),[],!1,null,"1af3a2df",null);e.default=component.exports;installComponents(component,{ProductItem:r(306).default})},318:function(t,e,r){var content=r(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(115).default)("c6743d36",content,!0,{sourceMap:!1})},346:function(t,e,r){"use strict";r(318)},347:function(t,e,r){var o=r(114),n=r(348),c=r(349),d=o(!1),l=n(c);d.push([t.i,'*[data-v-675c9ef4]{box-sizing:border-box}.mainPage[data-v-675c9ef4]{font-family:"Sourse Sans Pro",sans-serif}.mainPage__container[data-v-675c9ef4]{padding:16px 16px 16px 32px;max-width:1440px;margin:0 auto}.mainPage__header[data-v-675c9ef4]{padding-right:16px;display:flex;align-items:center;justify-content:space-between}.mainPage__title[data-v-675c9ef4]{font-weight:600;font-size:28px;line-height:35px;margin:32px 0 16px;color:#3f3f3f}@media(min-width:1024px){.mainPage__block[data-v-675c9ef4]{display:flex;grid-gap:8px;gap:8px}}.mainPage__select[data-v-675c9ef4]{cursor:pointer;font-weight:400;font-size:12px;line-height:15px;color:#b4b4b4;background:#fffefb;box-shadow:0 2px 5px rgba(0,0,0,.1);border-radius:4px;border:0;padding:10px 16px;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden;background:url('+l+") no-repeat calc(100% - 16px) 50%}",""]),t.exports=d},348:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},349:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOCA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNy40ODUzMiAxLjI0MjY0TDQuMjQyNjggNC40ODUyOEwxLjAwMDAzIDEuMjQyNjQiIHN0cm9rZT0iI0I0QjRCNCIvPgo8L3N2Zz4K"},350:function(t,e,r){"use strict";r.r(e);r(42),r(27),r(34),r(15),r(66),r(33),r(67);var o=r(25),n=r(68),c=r(316);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"IndexPage",components:{AddProductForm:r(319).default,ProductsList:c.default},data:function(){return{selected:""}},mounted:function(){localStorage.getItem("products")||this.fetchProducts()},methods:l(l({},Object(n.b)(["fetchProducts","setSortingMethod"])),{},{setNewSortingMethod:function(){this.setSortingMethod(this.selected)}})},v=(r(346),r(48)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mainPage"},[r("div",{staticClass:"mainPage__container"},[r("header",{staticClass:"mainPage__header"},[r("h1",{staticClass:"mainPage__title"},[t._v("Добавление товара")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"mainPage__select",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?r:r[0]},t.setNewSortingMethod]}},[r("option",{attrs:{value:""}},[t._v("По умолчанию")]),t._v(" "),r("option",[t._v("По цене min")]),t._v(" "),r("option",[t._v("По цене max")]),t._v(" "),r("option",[t._v("По наименованию")])])]),t._v(" "),r("div",{staticClass:"mainPage__block"},[r("AddProductForm"),t._v(" "),r("ProductsList")],1)])])}),[],!1,null,"675c9ef4",null);e.default=component.exports;installComponents(component,{AddProductForm:r(319).default,ProductsList:r(316).default})}}]);