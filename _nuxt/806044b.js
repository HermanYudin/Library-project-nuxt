(window.webpackJsonp=window.webpackJsonp||[]).push([[16,15,17,41,44,50,53],{265:function(t,e,o){var content=o(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("62aff97f",content,!0,{sourceMap:!1})},266:function(t,e,o){var content=o(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("7a1e5e6e",content,!0,{sourceMap:!1})},267:function(t,e,o){var content=o(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("31e2294c",content,!0,{sourceMap:!1})},270:function(t,e,o){"use strict";o.r(e);var n={name:"sectionTitle",props:{sectionTitle:{type:String}}},r=(o(277),o(44)),component=Object(r.a)(n,(function(){var t=this;return(0,t._self._c)("h2",{staticClass:"section-title"},[t._v(t._s(t.sectionTitle))])}),[],!1,null,"0f2fb090",null);e.default=component.exports},271:function(t,e,o){"use strict";o.r(e);var n={name:"popUpBtn",props:{btnTitle:{type:String},btnDisabled:{type:Boolean}},methods:{setToLocalStorage:function(){this.$emit("set-to-local-storage")},makeCardNumber:function(){this.$emit("make-card-number")},getFromLocalStorage:function(){this.$emit("get-from-local-storage")},closeModal:function(){this.$emit("close-modal")},closeModalAndLogIn:function(){this.$emit("close-modal-and-log-in")},openPopUp:function(){this.$emit("open-popUp",this.btnTitle)},openPopUpProfile:function(){this.$emit("open-popup-profile",this.btnTitle)},openPopUpBook:function(){this.$emit("open-popup-book",this.btnTitle)},setSeasonTicketToLocalStotage:function(){this.$emit("set-season-ticket-to-local-stotage")},addToBoughtBooks:function(){this.$emit("add-to-bought-books")}}},r=(o(274),o(44)),component=Object(r.a)(n,(function(){var t=this;return(0,t._self._c)("button",{staticClass:"pop-up-button",on:{click:function(e){t.setToLocalStorage(),t.getFromLocalStorage(),t.closeModal(),t.openPopUp(t.btnTitle),t.openPopUpProfile(t.btnTitle),t.openPopUpBook(t.btnTitle),t.closeModalAndLogIn(),t.setSeasonTicketToLocalStotage(),t.addToBoughtBooks()}}},[t._v("\n  "+t._s(t.btnTitle)+"\n")])}),[],!1,null,"3ca61ab4",null);e.default=component.exports},272:function(t,e,o){"use strict";o.r(e);var n={name:"sectionBoldText",props:{sectionBoldText:{type:String}}},r=(o(279),o(44)),component=Object(r.a)(n,(function(){var t=this;return(0,t._self._c)("h3",{staticClass:"section-bold-text"},[t._v(t._s(t.sectionBoldText))])}),[],!1,null,"4f0bbb93",null);e.default=component.exports},274:function(t,e,o){"use strict";o(265)},275:function(t,e,o){var n=o(134)((function(i){return i[1]}));n.push([t.i,".pop-up-button[data-v-3ca61ab4]{background-color:var(--c-white);border:1px solid #000;border-radius:3px;font-family:var(--f-inter);font-size:10px;font-weight:700;margin-top:13px;max-width:75px;padding:8px;transition:all;transition-duration:.3s}.pop-up-button[data-v-3ca61ab4]:hover{background-color:var(--c-gold);border:1px solid var(--c-gold);cursor:pointer}@media (max-width:800px){.card-btn[data-v-3ca61ab4]:hover{background-color:var(--c-white);border-color:var(--c-gold)}}",""]),n.locals={},t.exports=n},277:function(t,e,o){"use strict";o(266)},278:function(t,e,o){var n=o(134)((function(i){return i[1]}));n.push([t.i,'.section-title[data-v-0f2fb090]{font-family:var(--f-forum);font-size:40px;font-weight:400;letter-spacing:2px;margin-top:20px;text-align:center}.section-title[data-v-0f2fb090]:after{background-color:var(--c-black);content:"";display:block;height:1px;margin:15px auto 0;width:50px}',""]),n.locals={},t.exports=n},279:function(t,e,o){"use strict";o(267)},280:function(t,e,o){var n=o(134)((function(i){return i[1]}));n.push([t.i,".section-bold-text[data-v-4f0bbb93]{font-family:var(--f-inter);font-size:20px;font-weight:700;letter-spacing:.2px}",""]),n.locals={},t.exports=n},283:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},296:function(t,e,o){var content=o(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("04659dad",content,!0,{sourceMap:!1})},297:function(t,e,o){var content=o(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("38b68411",content,!0,{sourceMap:!1})},355:function(t,e,o){"use strict";o(296)},356:function(t,e,o){var n=o(134),r=o(283),c=o(357),d=o(358),l=n((function(i){return i[1]})),f=r(c),h=r(d);l.push([t.i,".radio-btns[data-v-6cd5e054]{display:flex;flex-wrap:wrap;gap:86px;list-style-type:none;margin-left:20px;margin-top:41px;padding:0}.radio-btn[data-v-6cd5e054]{cursor:pointer;font-family:var(--f-inter);font-size:20px}.radio-btn[data-v-6cd5e054]:before{background:url("+f+');background-repeat:no-repeat;content:"";display:inline-block;height:17px;margin-bottom:3px;margin-right:20px;vertical-align:middle;width:17px}.radio-btn.active-radio[data-v-6cd5e054]:before{background:url('+h+")}.radio-btn[data-v-6cd5e054]:hover{color:var(--c-gold)}.radio-btns .active-radio[data-v-6cd5e054]{font-weight:700}@media (min-width:1px) and (max-width:740px){.radio-btns[data-v-6cd5e054]{display:block}}",""]),l.locals={},t.exports=l},357:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAEKSURBVDhPlZMBcYVADETDV4AEHIADcAYOwAE4wAJOkAAOUl7mL+2nZXrsTCbc3GYvCYn5Bdu2edd13jSN53nuZhae8zRNvq7rm/mND5FhGM7AOyuKIsR+4hThdRHruvZ5niMrgOdMNuLAF0JkHMfzsu/7uLgD91euUSMppggIEqJ0sjRlQQlPoNLatnXTgZqfAD5xEa+/oSamIso44ojP+DiMBuMeIcsIN3sdSvGx73v4VIhP/KuqqjgsyxI+FeKXZWkW3X036An0Q5heo0FqbuqcsB7wmS/mLCb2rym8gwQw7dC5OyoLI9X/dge+cIoAplcrcGeUfs32QwRQI2K8ql7hWQte/z2U7l8+HM0Vh7D7mgAAAABJRU5ErkJggg=="},358:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgBjVSLFYMgEDudgBEcpSOwgWygG8gI7UR1A9sJ2g10Awt9d5oHnJr34gdCCAdKlMMEDoHPwDlw5Xt8bwMbOkEHAzV+2KyIAYRjoOVUks5yGtEMqYGDzp6O0Ze0DUe8YpAazZLWwRIQHZhPlNdBlubxxYLAUbmomNRyWxy/7YYBwUT6zgiMLKnih4gKBCvpyHR14ALOgq9i8EqSRCw1dNxA8FBM7vAs+ne8eIICARxPsHKydPtlQ1qJJcW9ek462gvdSGPxFJ4YbCkQHjpj1LNvx2uzONpPqcb5Qtr/Gh3l/5ORZzfpgB/Sa2+2Ilk3QQAAAABJRU5ErkJggg=="},359:function(t,e,o){"use strict";o(297)},360:function(t,e,o){var n=o(134)((function(i){return i[1]}));n.push([t.i,'.card[data-v-604af98b]{border:1px solid var(--c-black);flex-direction:column;min-height:556px;min-width:38.2%;position:relative;transition:all 1s ease-in-out}.none[data-v-604af98b]{border:0;height:0;margin:0;padding:0;position:absolute;width:0;clip:rect(0 0 0 0);opacity:0}.card-grow[data-v-604af98b]{align-items:flex-start;display:flex;flex-direction:column;flex-grow:1}.card[data-v-604af98b]:nth-child(odd){margin-left:20px}.card[data-v-604af98b]:nth-child(2n){margin-right:60px}.card[data-v-604af98b]:nth-child(11),.card[data-v-604af98b]:nth-child(12),.card[data-v-604af98b]:nth-child(15),.card[data-v-604af98b]:nth-child(16),.card[data-v-604af98b]:nth-child(3),.card[data-v-604af98b]:nth-child(4),.card[data-v-604af98b]:nth-child(7),.card[data-v-604af98b]:nth-child(8){margin-top:40px}.card-top-title[data-v-604af98b]{font-family:var(--f-forum);font-size:20px;font-weight:400;letter-spacing:2px;margin-left:20px;margin-top:22px}.card-top-title[data-v-604af98b]:after{background-color:var(--c-gold);content:"";display:block;height:1px;margin-top:8px;max-width:60px}.card-title[data-v-604af98b]{margin-bottom:0}.card-author[data-v-604af98b],.card-title[data-v-604af98b]{font-weight:700;letter-spacing:2px;margin-top:0}.card-author[data-v-604af98b],.card-text[data-v-604af98b],.card-title[data-v-604af98b]{font-family:var(--f-inter);font-size:15px;line-height:40px;margin-left:20px}.card-text[data-v-604af98b]{font-weight:400;letter-spacing:1.95px;margin-top:5px;max-width:355px;text-transform:capitalize}.card-btn[data-v-604af98b]{margin-bottom:16px;margin-left:20px;margin-top:0;min-width:75px}.card-img[data-v-604af98b]{bottom:-1px;max-width:200px;position:absolute;right:-41px;width:100%}.btn-disabled[data-v-604af98b]{border-color:var(--c-gold);color:var(--c-gold);pointer-events:none}.active-cards[data-v-604af98b]{clip:auto;border:1px solid var(--c-black);display:flex;min-height:556px;min-width:38.2%;opacity:1;position:relative}@media (min-width:1px) and (max-width:1058px){.card[data-v-604af98b]{width:71.7%}.card[data-v-604af98b]:nth-child(odd){margin:0 128px 0 20px}.card[data-v-604af98b]:nth-child(2n){margin:41px 128px 0 20px}.card[data-v-604af98b]:nth-child(11),.card[data-v-604af98b]:nth-child(15),.card[data-v-604af98b]:nth-child(3),.card[data-v-604af98b]:nth-child(7){margin-top:41px}.card-text[data-v-604af98b]:nth-child(2){padding-bottom:21px}.active-cards[data-v-604af98b]{margin:0 auto;min-height:1050px}}',""]),n.locals={},t.exports=n},361:function(t,e,o){var content=o(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("0644fca4",content,!0,{sourceMap:!1})},391:function(t,e,o){"use strict";o.r(e);var n={name:"radio",data:function(){return{activeRadio:"Winter"}},props:{radios:{type:Array,default:function(){return[]}}},methods:{setRadio:function(t){this.activeRadio=t},setActiveCard:function(){this.$emit("set-active-cards",this.activeRadio)}}},r=(o(355),o(44)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"radio"},[e("ul",{staticClass:"radio-btns"},t._l(t.radios,(function(o,n){return e("li",{key:n,staticClass:"radio-btn",class:{"active-radio":t.activeRadio===o},on:{click:function(e){t.setRadio(o),t.setActiveCard()}}},[t._v("\n      "+t._s(o)+"\n    ")])})),0)])}),[],!1,null,"6cd5e054",null);e.default=component.exports},392:function(t,e,o){"use strict";o.r(e);var n={name:"card",components:{popUpBtn:o(271).default},data:function(){return{cardBtn:!0,isDisabledDisabled:this.isDisabled,boughtBooks:""}},props:{card:{type:Object,default:function(){return{}}},isDisabled:{type:Boolean},isLoggedIn:{type:Boolean},seasonTicket:{type:Boolean}},methods:{addToBoughtBooks:function(){if(!localStorage.getItem("seasonTicket")||!0!==this.isLoggedIn)return!1;this.boughtBooks=this.card.title,this.$emit("add-to-bought-books",this.boughtBooks)},openPopUpBook:function(data){this.$emit("open-popup-book",data),!this.isDisabledDisabled&&this.isLoggedIn&&localStorage.getItem("seasonTicket")&&(this.isDisabledDisabled=!0)}},watch:{isDisabled:function(t){this.isDisabledDisabled=t}}},r=(o(359),o(44)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card none"},[e("div",{staticClass:"card-grow"},[e("h3",{staticClass:"card-top-title"},[t._v(t._s(t.card.topTitle))]),t._v(" "),e("h3",{staticClass:"card-title"},[t._v("\n      "+t._s(t.card.title)+"\n    ")]),t._v(" "),e("h3",{staticClass:"card-author"},[t._v("\n      "+t._s(t.card.author)+"\n    ")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("\n      "+t._s(t.card.text)+"\n    ")])]),t._v(" "),e("popUpBtn",{staticClass:"card-btn",class:{"btn-disabled":t.isDisabledDisabled},attrs:{btnTitle:"Buy"},on:{"open-popup-book":t.openPopUpBook,"add-to-bought-books":t.addToBoughtBooks}}),t._v(" "),e("img",{staticClass:"card-img",attrs:{src:t.card.img,alt:"card-img"}})],1)}),[],!1,null,"604af98b",null);e.default=component.exports},431:function(t,e,o){t.exports=o.p+"img/b1.feb58e1.jpg"},432:function(t,e,o){t.exports=o.p+"img/b2.5f43522.jpg"},433:function(t,e,o){t.exports=o.p+"img/b3.358677a.jpg"},434:function(t,e,o){t.exports=o.p+"img/b4.2b3ceee.jpg"},435:function(t,e,o){t.exports=o.p+"img/b5.2d4849d.jpg"},436:function(t,e,o){t.exports=o.p+"img/b6.720578b.jpg"},437:function(t,e,o){t.exports=o.p+"img/b7.6b335cc.jpg"},438:function(t,e,o){t.exports=o.p+"img/b8.88fc416.jpg"},439:function(t,e,o){t.exports=o.p+"img/b9.3bfea53.jpg"},440:function(t,e,o){t.exports=o.p+"img/b10.45354d7.jpg"},441:function(t,e,o){t.exports=o.p+"img/b11.f45167a.jpg"},442:function(t,e,o){t.exports=o.p+"img/b12.e6a781c.jpg"},443:function(t,e,o){t.exports=o.p+"img/b13.3780fcb.jpg"},444:function(t,e,o){t.exports=o.p+"img/b14.5976bbe.jpg"},445:function(t,e,o){t.exports=o.p+"img/b15.306fe4c.jpg"},446:function(t,e,o){t.exports=o.p+"img/b16.09c37d1.jpg"},447:function(t,e,o){"use strict";o(361)},448:function(t,e,o){var n=o(134)((function(i){return i[1]}));n.push([t.i,".fav-title[data-v-5597bf92]{margin-top:16px}.season-text[data-v-5597bf92]{margin-left:23px;margin-top:40px}.cards[data-v-5597bf92]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:40px;padding-bottom:37px}.active-cards[data-v-5597bf92]{clip:auto;border:1px solid var(--c-black);display:flex;min-height:556px;min-width:38.2%;opacity:1;position:relative}@media (min-width:1px) and (max-width:1058px){.fav-title[data-v-5597bf92]:after{margin-top:18px}.season-text[data-v-5597bf92]{margin-left:22px}.cards[data-v-5597bf92]{flex-direction:column}.active-cards[data-v-5597bf92]{margin:0 auto;min-height:1050px}}",""]),n.locals={},t.exports=n},484:function(t,e,o){"use strict";o.r(e);var n=o(270),r=o(391),c=o(272),d=o(392),l={name:"favoritesMain",components:{sectionTitle:n.default,sectionBoldText:c.default,radio:r.default,card:d.default},props:{isDisabled:{type:Boolean},isLoggedIn:{type:Boolean},seasonTicket:{type:Boolean}},methods:{setActiveCards:function(data){this.activeCards=data},openPopUpBook:function(data){this.$emit("open-popup-book",data)},addToBoughtBooks:function(data){this.$emit("add-to-bought-books",data)}},data:function(){return{radios:["Winter","Spring","Summer","Autumn"],activeCards:"Winter",cards:[{category:"Winter",topTitle:"Staff Picks",title:"THE BOOK EATERS",author:"By Sunyi Dean",text:"An Unusual Sci-Fi Story About A Book Eater Woman Who Tries Desperately To Save Her Dangerous Mind-Eater Son From Tradition And Certain Death. Complete With Dysfunctional Family Values, Light Sapphic Romance, And A Strong, Complex Protagonist. Not For The Faint Of Heart.",img:o(431)},{category:"Winter",topTitle:"Staff Picks",title:"CACKLE",author:"By Rachel Harrison",text:"Are Your Halloween Movies Of Choice The Witches Of Eastwick And Practical Magic? Look No Further Than Here - Where A Woman Recovering From A Breakup Moves To A Quaint Town In Upstate New York And Befriends A Beautiful Witch.",img:o(432)},{category:"Winter",topTitle:"Staff Picks",title:"DANTE: POET OF THE SECULAR WORLD",author:"By Erich Auerbach",text:"Auerbach's Engaging Book Places The 'Comedy' Within The Tradition Of Epic, Tragedy, And Philosophy In General, Arguing For Dante's Uniqueness As One Who Raised The Individual And His Drama Of Soul Into Something Of Divine Significance—An Inspired Introduction To Dante's Main Themes.",img:o(433)},{category:"Winter",topTitle:"Staff Picks",title:"THE LAST QUEEN",author:"By Clive Irving",text:"A Timely And Revelatory New Biography Of Queen Elizabeth (And Her Family) Exploring How The Windsors Have Evolved And Thrived As The Modern World Has Changed Around Them.",img:o(434)},{category:"Spring",topTitle:"Staff Picks",title:"THE BODY",author:"By Stephen King",text:"Powerful Novel That Takes You Back To A Nostalgic Time, Exploring Both The Beauty And Danger And Loss Of Innocence That Is Youth.",img:o(435)},{category:"Spring",topTitle:"Staff Picks",title:"CARRY: A MEMOIR OF SURVIVAL ON STOLEN LAND",author:"By Toni Jenson",text:"This Memoir About The Author's Relationship With Gun Violence Feels Both Expansive And Intimate, Resulting In A Lyrical Indictment Of The Way Things Are.",img:o(436)},{category:"Spring",topTitle:"Staff Picks",title:"DAYS OF DISTRACTION",author:"By Alexandra Chang",text:"A Sardonic View Of Silicon Valley Culture, A Meditation On Race, And A Journal Of Displacement And Belonging, All In One Form-Defying Package Of Spare Prose.",img:o(437)},{category:"Spring",topTitle:"Staff Picks",title:"DOMINICANA",author:"By Angie Cruz",text:"A Fascinating Story Of A Teenage Girl Who Marries A Man Twice Her Age With The Promise To Bring Her To America. Her Marriage Is An Opportunity For Her Family To Eventually Immigrate. For Fans Of Isabel Allende And Julia Alvarez.",img:o(438)},{category:"Summer",topTitle:"Staff Picks",title:"CRUDE: A MEMOIR",author:"By Pablo Fajardo & ​​Sophie Tardy-Joubert",text:"Drawing And Color By Damien Roudeau | This Book Illustrates The Struggles Of A Group Of Indigenous Ecuadoreans As They Try To Sue The ChevronTexaco Company For Damage Their Oil Fields Did To The Amazon And Her People.",img:o(439)},{category:"Summer",topTitle:"Staff Picks",title:"LET MY PEOPLE GO SURFING",author:"By Yvon Chouinard",text:"Chouinard—Climber, Businessman, Environmentalist—Shares Tales Of Courage And Persistence From His Experience Of Founding And Leading Patagonia, Inc. Full Title: Let My People Go Surfing: The Education Of A Reluctant Businessman, Including 10 More Years Of Business Unusual.",img:o(440)},{category:"Summer",topTitle:"Staff Picks",title:"THE OCTOPUS MUSEUM: POEMS",author:"By Brenda Shaughnessy",text:"This Collection Of Bold And Scathingly Beautiful Feminist Poems Imagines What Comes After Our Current Age Of Environmental Destruction, Racism, Sexism, And Divisive Politics.",img:o(441)},{category:"Summer",topTitle:"Staff Picks",title:"SHARK DIALOGUES: A NOVEL",author:"By Kiana Davenport",text:"An Epic Saga Of Seven Generations Of One Family Encompasses The Tumultuous History Of Hawaii As A Hawaiian Woman Gathers Her Four Granddaughters Together In An Erotic Tale Of Villains And Dreamers, Queens And Revolutionaries, Lepers And Healers.",img:o(442)},{category:"Autumn",topTitle:"Staff Picks",title:"CASUAL CONVERSATION",author:"By Renia White",text:"White's Impressive Debut Collection Takes Readers Through And Beyond The Concepts Of Conversation And The Casual - Both What We Say To Each Other And What We Don't, Examining The Possibilities Around How We Construct And Communicate Identity.",img:o(443)},{category:"Autumn",topTitle:"Staff Picks",title:"THE GREAT FIRE",author:"By Lou Ureneck",text:"The Harrowing Story Of An Ordinary American And A Principled Naval Officer Who, Horrified By The Burning Of Smyrna, Led An Extraordinary Rescue Effort That Saved A Quarter Of A Million Refugees From The Armenian Genocide.",img:o(444)},{category:"Autumn",topTitle:"Staff Picks",title:"RICKEY: THE LIFE AND LEGEND",author:"By Howard Bryant",text:"With The Fall Rolling Around, One Can't Help But Think Of Baseball's Postseason Coming Up! And What Better Way To Prepare For It Than Reading The Biography Of One Of The Game's All-Time Greatest Performers, The Man Of Steal, Rickey Henderson?",img:o(445)},{category:"Autumn",topTitle:"Staff Picks",title:"SLUG: AND OTHER STORIES",author:"By Megan Milks",text:"Exes Tegan And Sara Find Themselves Chained Together By Hairballs Of Codependency. A Father And Child Experience The Shared Trauma Of Giving Birth To Gods From Their Wounds.",img:o(446)}]}}},f=(o(447),o(44)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("sectionTitle",{staticClass:"fav-title",attrs:{sectionTitle:"Favorites"}}),t._v(" "),e("sectionBoldText",{staticClass:"season-text",attrs:{sectionBoldText:"Pick favorites of season"}}),t._v(" "),e("radio",{attrs:{radios:t.radios},on:{"set-active-cards":t.setActiveCards}}),t._v(" "),e("div",{staticClass:"cards"},t._l(t.cards,(function(o,n){return e("card",{key:n,class:{"active-cards":t.activeCards===o.category},attrs:{card:o,isLoggedIn:t.isLoggedIn,isDisabled:t.isDisabled,seasonTicket:t.seasonTicket},on:{"open-popup-book":t.openPopUpBook,"add-to-bought-books":t.addToBoughtBooks}})})),1)],1)}),[],!1,null,"5597bf92",null);e.default=component.exports}}]);