(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{334:function(t,a,e){var n=e(354);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(33).default)("e4ed70e0",n,!0,{sourceMap:!1})},353:function(t,a,e){"use strict";var n=e(334);e.n(n).a},354:function(t,a,e){(t.exports=e(32)(!1)).push([t.i,"\n.slide-modal[data-v-be00c24a]{position:relative;display:flex;justify-content:center;align-items:center;width:500px;height:500px;background-color:#0ff;overflow:hidden\n}\n.close-button[data-v-be00c24a]{position:absolute;top:-40px;right:-40px\n}\n.modal[data-v-be00c24a]{position:absolute;top:0;left:0;width:500px;height:500px;display:flex;background-color:coral;justify-content:center;align-items:center;color:grey\n}\n.modal .modal-inner[data-v-be00c24a]{position:relative;width:80%;height:300px;background-color:beige;border:3px solid grey;padding:30px\n}\n.slide-enter-active[data-v-be00c24a],.slide-leave-active[data-v-be00c24a]{transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-webkit-transform .25s ease-out\n}\n.slide-enter[data-v-be00c24a],.slide-leave-to[data-v-be00c24a]{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.close-button[data-v-be00c24a],.open-button[data-v-be00c24a]{width:80px;height:80px;background-color:#fff;border:3px solid grey;border-radius:50%;font-size:16px;font-weight:700;color:grey;-webkit-animation-name:zoom-in-data-v-be00c24a;animation-name:zoom-in-data-v-be00c24a;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;cursor:pointer;outline:none\n}\n.close-button[data-v-be00c24a]:hover,.open-button[data-v-be00c24a]:hover{-webkit-animation-play-state:paused;animation-play-state:paused\n}\n@-webkit-keyframes zoom-in-data-v-be00c24a{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n50%{-webkit-transform:scale(.95) rotate(-5deg);transform:scale(.95) rotate(-5deg)\n}\n}\n@keyframes zoom-in-data-v-be00c24a{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n50%{-webkit-transform:scale(.95) rotate(-5deg);transform:scale(.95) rotate(-5deg)\n}\n}",""])},367:function(t,a,e){"use strict";e.r(a);var n={data:function(){return{visibilty:!1}},methods:{showModal:function(){this.visibilty=!0},hideModal:function(){this.visibilty=!1}}},i=(e(353),e(18)),o=Object(i.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("Slide Modal")]),t._v(" "),e("p",[t._v("This project is transition sample.")]),t._v(" "),e("div",{staticClass:"slide-modal"},[e("div",{staticClass:"button-container"},[e("button",{staticClass:"open-button",attrs:{type:"button"},on:{click:t.showModal}},[t._v("Open")])]),t._v(" "),e("transition",{attrs:{name:"slide"}},[t.visibilty?e("div",{staticClass:"modal"},[e("div",{staticClass:"modal-inner"},[e("p",[t._v("This is a modal.")]),t._v(" "),e("button",{staticClass:"close-button",attrs:{type:"button"},on:{click:t.hideModal}},[t._v("Close")])])]):t._e()])],1)])},[],!1,null,"be00c24a",null);o.options.__file="slide-modal.vue";a.default=o.exports}}]);