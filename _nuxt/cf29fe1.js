(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{276:function(e,t,l){var content=l(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(135).default)("ca665278",content,!0,{sourceMap:!1})},309:function(e,t,l){"use strict";l(276)},310:function(e,t,l){var o=l(134)((function(i){return i[1]}));o.push([e.i,".modal-profile-card-counters[data-v-534c69ee],.modal-profile-card-images[data-v-534c69ee],.modal-profile-card-titles[data-v-534c69ee]{align-items:center;display:flex;gap:20px;margin-top:0;max-height:20px;padding-left:20px;padding-top:20px}.modal-profile-card-counter[data-v-534c69ee],.modal-profile-card-image[data-v-534c69ee],.modal-profile-card-title[data-v-534c69ee]{color:var(--c-black);font-family:var(--f-inter);font-size:20px;font-style:normal;font-weight:400;letter-spacing:.4px;line-height:20px;list-style-type:none;text-align:center;text-transform:capitalize}.modal-profile-card-images[data-v-534c69ee]{gap:55px}.modal-profile-card-counters[data-v-534c69ee]{gap:60px}.modal-profile-card-image[data-v-534c69ee]{padding-left:15px}.modal-profile-card-counter[data-v-534c69ee]{font-size:12px;padding-left:20px}@media (max-width:530px){.modal-profile-card-counters[data-v-534c69ee],.modal-profile-card-images[data-v-534c69ee],.modal-profile-card-titles[data-v-534c69ee]{padding-left:2px}.modal-profile-card-title[data-v-534c69ee]{font-size:15px}.modal-profile-card-images[data-v-534c69ee]{gap:41px}.modal-profile-card-image[data-v-534c69ee]{padding-left:11px}.modal-profile-card-counter[data-v-534c69ee]{padding-left:16px}.modal-profile-card-counters[data-v-534c69ee]{gap:47px}}",""]),o.locals={},e.exports=o},315:function(e,t,l){"use strict";l.r(t);l(192);var o={name:"modalProfileCounters",props:{counters:{type:Array,default:function(){return[]}},visits:{type:Number},books:{type:Number},titlesCustomStyle:{type:Object},countersCustomStyle:{type:Object},counterCustomStyle:{type:Object},imgsCustomStyle:{type:Object},imgCustomStyle:{type:Object}}},r=(l(309),l(44)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal-profile-counters-container"},[t("div",{staticClass:"modal-profile-titles"},[t("ul",{staticClass:"modal-profile-card-titles",style:e.titlesCustomStyle},e._l(e.counters,(function(l,o){return t("li",{key:o,staticClass:"modal-profile-card-title"},[e._v("\n        "+e._s(l.title)+"\n      ")])})),0)]),e._v(" "),t("div",{staticClass:"modal-profile-images"},[t("ul",{staticClass:"modal-profile-card-images",style:e.imgsCustomStyle},e._l(e.counters,(function(l,o){return t("li",{key:o,staticClass:"modal-profile-card-image",style:e.imgCustomStyle},[t("img",{attrs:{src:l.image,alt:"image"}})])})),0)]),e._v(" "),t("div",{staticClass:"modal-profile-counters"},[t("ul",{staticClass:"modal-profile-card-counters",style:e.countersCustomStyle},e._l(e.counters,(function(l,o){return t("li",{key:o,staticClass:"modal-profile-card-counter",style:e.counterCustomStyle},[e._v("\n        "+e._s(0===o?e.visits:2===o?e.books:l.counter)+"\n      ")])})),0)])])}),[],!1,null,"534c69ee",null);t.default=component.exports}}]);