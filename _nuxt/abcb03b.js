(window.webpackJsonp=window.webpackJsonp||[]).push([[36,32,33,34,35,37,42],{273:function(t,e,o){var content=o(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("2871acba",content,!0,{sourceMap:!1})},276:function(t,e,o){var content=o(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("ca665278",content,!0,{sourceMap:!1})},287:function(t,e,o){var content=o(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("01f6c88a",content,!0,{sourceMap:!1})},288:function(t,e,o){var content=o(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("bfbd9230",content,!0,{sourceMap:!1})},289:function(t,e,o){var content=o(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("89996246",content,!0,{sourceMap:!1})},290:function(t,e,o){var content=o(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("1d50c1fd",content,!0,{sourceMap:!1})},305:function(t,e,o){"use strict";o.r(e);var l={name:"popUpClose",props:{closeModalImg:{type:String}},methods:{closeModal:function(){this.$emit("close-modal",!1)}}},r=(o(307),o(44)),component=Object(r.a)(l,(function(){var t=this;return(0,t._self._c)("img",{staticClass:"pop-up-close",attrs:{src:t.closeModalImg,alt:"pop-up-close"},on:{click:function(e){return t.closeModal()}}})}),[],!1,null,"2af837ae",null);e.default=component.exports},307:function(t,e,o){"use strict";o(273)},308:function(t,e,o){var l=o(134)((function(i){return i[1]}));l.push([t.i,".pop-up-close[data-v-2af837ae]{cursor:pointer;position:absolute;right:7px;top:15px;transition:all;transition-duration:.4s}.pop-up-close[data-v-2af837ae]:hover{background-color:var(--c-gold);border-radius:5px}.buy-library-card-close[data-v-2af837ae]{right:17px;top:19px}",""]),l.locals={},t.exports=l},309:function(t,e,o){"use strict";o(276)},310:function(t,e,o){var l=o(134)((function(i){return i[1]}));l.push([t.i,".modal-profile-card-counters[data-v-534c69ee],.modal-profile-card-images[data-v-534c69ee],.modal-profile-card-titles[data-v-534c69ee]{align-items:center;display:flex;gap:20px;margin-top:0;max-height:20px;padding-left:20px;padding-top:20px}.modal-profile-card-counter[data-v-534c69ee],.modal-profile-card-image[data-v-534c69ee],.modal-profile-card-title[data-v-534c69ee]{color:var(--c-black);font-family:var(--f-inter);font-size:20px;font-style:normal;font-weight:400;letter-spacing:.4px;line-height:20px;list-style-type:none;text-align:center;text-transform:capitalize}.modal-profile-card-images[data-v-534c69ee]{gap:55px}.modal-profile-card-counters[data-v-534c69ee]{gap:60px}.modal-profile-card-image[data-v-534c69ee]{padding-left:15px}.modal-profile-card-counter[data-v-534c69ee]{font-size:12px;padding-left:20px}@media (max-width:530px){.modal-profile-card-counters[data-v-534c69ee],.modal-profile-card-images[data-v-534c69ee],.modal-profile-card-titles[data-v-534c69ee]{padding-left:2px}.modal-profile-card-title[data-v-534c69ee]{font-size:15px}.modal-profile-card-images[data-v-534c69ee]{gap:41px}.modal-profile-card-image[data-v-534c69ee]{padding-left:11px}.modal-profile-card-counter[data-v-534c69ee]{padding-left:16px}.modal-profile-card-counters[data-v-534c69ee]{gap:47px}}",""]),l.locals={},t.exports=l},315:function(t,e,o){"use strict";o.r(e);o(192);var l={name:"modalProfileCounters",props:{counters:{type:Array,default:function(){return[]}},visits:{type:Number},books:{type:Number},titlesCustomStyle:{type:Object},countersCustomStyle:{type:Object},counterCustomStyle:{type:Object},imgsCustomStyle:{type:Object},imgCustomStyle:{type:Object}}},r=(o(309),o(44)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-profile-counters-container"},[e("div",{staticClass:"modal-profile-titles"},[e("ul",{staticClass:"modal-profile-card-titles",style:t.titlesCustomStyle},t._l(t.counters,(function(o,l){return e("li",{key:l,staticClass:"modal-profile-card-title"},[t._v("\n        "+t._s(o.title)+"\n      ")])})),0)]),t._v(" "),e("div",{staticClass:"modal-profile-images"},[e("ul",{staticClass:"modal-profile-card-images",style:t.imgsCustomStyle},t._l(t.counters,(function(o,l){return e("li",{key:l,staticClass:"modal-profile-card-image",style:t.imgCustomStyle},[e("img",{attrs:{src:o.image,alt:"image"}})])})),0)]),t._v(" "),e("div",{staticClass:"modal-profile-counters"},[e("ul",{staticClass:"modal-profile-card-counters",style:t.countersCustomStyle},t._l(t.counters,(function(o,l){return e("li",{key:l,staticClass:"modal-profile-card-counter",style:t.counterCustomStyle},[t._v("\n        "+t._s(0===l?t.visits:2===l?t.books:o.counter)+"\n      ")])})),0)])])}),[],!1,null,"534c69ee",null);e.default=component.exports},326:function(t,e,o){"use strict";o(287)},327:function(t,e,o){var l=o(134)((function(i){return i[1]}));l.push([t.i,".modal-profile-initials[data-v-f3c4a194]{align-items:center;background-color:var(--c-white);display:flex;height:80px;justify-content:center;margin:139px auto 0;max-width:80px}.modal-profile-initials-text[data-v-f3c4a194]{color:var(--c-gold);font-family:var(--f-inter);font-size:20px;font-style:normal;font-weight:400;line-height:20px;text-align:center;text-transform:capitalize}@media (max-width:380px){.modal-profile-initials[data-v-f3c4a194]{margin:139px 10px 0}}",""]),l.locals={},t.exports=l},328:function(t,e,o){"use strict";o(288)},329:function(t,e,o){var l=o(134)((function(i){return i[1]}));l.push([t.i,".modal-profile-fullname[data-v-e8e112f8]{align-items:center;background-color:var(--c-white);display:flex;flex-wrap:wrap;justify-content:center;margin:15px auto 0;max-width:120px;min-height:30px}.modal-profile-fullname-text[data-v-e8e112f8]{color:var(--c-black);font-family:var(--f-inter);font-size:20px;font-style:normal;font-weight:400;line-height:20px;text-align:center}@media (max-width:530px){.modal-profile-fullname[data-v-e8e112f8]{margin:15px 10px 0}}",""]),l.locals={},t.exports=l},330:function(t,e,o){"use strict";o(289)},331:function(t,e,o){var l=o(134)((function(i){return i[1]}));l.push([t.i,".modal-profile-title[data-v-ab7e7d94]{align-items:start;color:var(--c-black);display:flex;font-family:var(--f-forum);font-size:40px;font-style:normal;font-weight:400;justify-content:start;letter-spacing:.8px;line-height:20px;margin-bottom:0;margin-left:20px;text-align:center;text-transform:uppercase}.secondTitle[data-v-ab7e7d94]{margin-bottom:0;text-transform:none}.secondTitle[data-v-ab7e7d94],.thirdTitle[data-v-ab7e7d94]{font-size:20px}@media (max-width:530px){.modal-profile-title[data-v-ab7e7d94]{font-size:25px;margin-left:2px}.thirdTitle[data-v-ab7e7d94]{font-size:15px;text-align:left}}",""]),l.locals={},t.exports=l},332:function(t,e,o){"use strict";o(290)},333:function(t,e,o){var l=o(134)((function(i){return i[1]}));l.push([t.i,".copy-img-container[data-v-3220335e]{cursor:pointer;margin-left:10px;max-height:16px;max-width:16px;transition:all .8s}.copy-img-container[data-v-3220335e]:hover{background-color:var(--c-gold);border-radius:5px}@media (max-width:400px){.copy-img-container[data-v-3220335e]{margin-right:2px}}",""]),l.locals={},t.exports=l},334:function(t,e,o){var content=o(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("78f6cb6f",content,!0,{sourceMap:!1})},383:function(t,e,o){"use strict";o.r(e);var l={name:"modalProfileInitials",props:{iconInitials:{type:String}}},r=(o(326),o(44)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-profile-initials"},[e("p",{staticClass:"modal-profile-initials-text"},[t._v(t._s(t.iconInitials.toUpperCase()))])])}),[],!1,null,"f3c4a194",null);e.default=component.exports},384:function(t,e,o){"use strict";o.r(e);var l={name:"modalProfileFullname",props:{fullName:{type:String}}},r=(o(328),o(44)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-profile-fullname"},[e("p",{staticClass:"modal-profile-fullname-text"},[t._v(t._s(t.fullName.toUpperCase()))])])}),[],!1,null,"e8e112f8",null);e.default=component.exports},385:function(t,e,o){"use strict";o.r(e);var l={name:"modalProfileTitle",props:{profileTitle:{type:String}}},r=(o(330),o(44)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-profile-title"},[e("p",[t._v(t._s(t.profileTitle))])])}),[],!1,null,"ab7e7d94",null);e.default=component.exports},386:function(t,e,o){"use strict";o.r(e);var l={name:"copyCardNumber",props:{copyImg:{type:String}},methods:{copyText:function(){this.$emit("copy-text")}}},r=(o(332),o(44)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"copy-img-container",on:{click:function(e){return t.copyText()}}},[e("img",{attrs:{src:t.copyImg,alt:"copy"}})])}),[],!1,null,"3220335e",null);e.default=component.exports},416:function(t,e,o){t.exports=o.p+"img/icon_copy.0e840de.svg"},417:function(t,e,o){"use strict";o(334)},418:function(t,e,o){var l=o(134)((function(i){return i[1]}));l.push([t.i,".modal-profile[data-v-4acb5db0]{animation-duration:.55s;animation-fill-mode:both;animation-name:fadeInDown-4acb5db0;background-color:var(--c-white);display:flex;display:none;justify-content:space-between;left:0;margin:10% auto;max-width:600px;min-height:400px;position:fixed;right:0;z-index:3}.modal-profile-active[data-v-4acb5db0]{display:flex}@keyframes fadeInDown-4acb5db0{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}.modal-profile-name[data-v-4acb5db0]{background-color:var(--c-black);width:28.6%}.modal-profile-info[data-v-4acb5db0]{background-color:var(--c-white);width:71.5%}.secondTitle[data-v-4acb5db0]{font-size:20px;margin-bottom:0;text-transform:none}.card-number[data-v-4acb5db0]{align-items:center;display:flex}.bought-books[data-v-4acb5db0]{list-style-position:inside;padding-left:20px}@media (min-width:1px) and (max-width:768px){.modal-profile[data-v-4acb5db0]{margin:22% 10px}}",""]),l.locals={},t.exports=l},477:function(t,e,o){"use strict";o.r(e);o(192);var l=o(305),r=o(383),n=o(384),c=o(385),d=o(315),f=o(386),m={name:"modalProfileMain",components:{popUpClose:l.default,modalProfileInitials:r.default,modalProfileFullName:n.default,modalProfileTitle:c.default,modalProfileCounters:d.default,copyCardNumber:f.default},data:function(){return{anotherTitle:!0,profileTitle:"",copyImg:o(416)}},props:{iconInitials:{type:String},fullName:{type:String},closeModalImg:{type:String},cardNumber:{type:String},visits:{type:Number},books:{type:Number},counters:{type:Array,default:function(){return[]}},boughtBooks:{type:Array,default:function(){return[]}}},methods:{closeModal:function(){this.$emit("close-modal",!1)},copyText:function(){var t=this.$refs.textToCopy.$el.innerText;navigator.clipboard.writeText(t)}}},v=(o(417),o(44)),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-profile"},[e("div",{staticClass:"modal-profile-name"},[e("modalProfileInitials",{attrs:{iconInitials:t.iconInitials}}),t._v(" "),e("modalProfileFullName",{attrs:{fullName:t.fullName}})],1),t._v(" "),e("div",{staticClass:"modal-profile-info"},[e("popUpClose",{attrs:{closeModalImg:t.closeModalImg},on:{"close-modal":t.closeModal}}),t._v(" "),e("modalProfileTitle",{attrs:{profileTitle:"MY PROFILE"}}),t._v(" "),e("modalProfileCounters",{attrs:{counters:t.counters,visits:t.visits,books:t.books}}),t._v(" "),e("modalProfileTitle",{class:{secondTitle:t.anotherTitle},attrs:{profileTitle:"Rented Books:"}}),t._v(" "),0===t.boughtBooks.length?e("modalProfileTitle",{class:{thirdTitle:t.anotherTitle},attrs:{profileTitle:"You haven't bought anything yet"}}):e("ol",{staticClass:"bought-books"},t._l(t.boughtBooks,(function(o,l){return e("li",{staticClass:"bought-book"},[t._v("\n        "+t._s(o)+"\n      ")])})),0),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"card-number"},[e("modalProfileTitle",{class:{secondTitle:t.anotherTitle},attrs:{profileTitle:"Card number:"}}),t._v(" "),e("modalProfileTitle",{ref:"textToCopy",class:{secondTitle:t.anotherTitle},style:{color:"var(--c-gold)"},attrs:{profileTitle:this.cardNumber}}),t._v(" "),e("copyCardNumber",{attrs:{copyImg:t.copyImg},on:{"copy-text":t.copyText}})],1)],1)])}),[],!1,null,"4acb5db0",null);e.default=component.exports}}]);