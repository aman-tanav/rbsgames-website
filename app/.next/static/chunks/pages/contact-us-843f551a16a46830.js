(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{7031:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-us",function(){return a(2323)}])},2323:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return r}});var n=a(5893);a(978);var l=a(7294),i=a(2005),c=a(2304),t=a(6419),o=a(8550);function r(){let[e,s]=(0,l.useState)({fname:"",lname:"",email:"",mobile:"",region:"",message:"",signup:"",agree:""}),a=e=>{let{name:a,value:n}=e.target;s(e=>({...e,[a]:n}))},r=e=>{let{name:a,checked:n}=e.target;s(e=>({...e,[a]:n}))};return console.log("fields",e),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)("div",{className:"bannerCommon",children:(0,n.jsxs)("div",{className:"outterText",children:[(0,n.jsx)("h2",{children:"Contact Us"}),(0,n.jsx)("p",{children:"We are thrilled to hear from you! Whether you have a question, need assistance, we are here to help. At RBS Labs, we value our clients and strive to provide exceptional support and services."})]})}),(0,n.jsx)("div",{className:"ContactForm",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col",children:[(0,n.jsxs)("div",{className:"formSide",children:[(0,n.jsx)("h3",{children:"Contact Us"}),(0,n.jsx)("p",{children:"Keep up with the latest news, special events & other exciting news."})]}),(0,n.jsxs)("div",{className:"formOutter",children:[(0,n.jsx)("div",{className:"inputoutter",children:(0,n.jsx)("input",{onChange:a,name:"fname",type:"text",className:"form-control",placeholder:"First name"})}),(0,n.jsx)("div",{className:"inputoutter",children:(0,n.jsx)(t.default,{onChange:a,name:"lname",type:"text",className:"form-control",id:"lName",placeholder:"Last name"})}),(0,n.jsx)("div",{className:"inputoutter",children:(0,n.jsx)(t.default,{onChange:a,name:"email",type:"text",className:"form-control",id:"email",placeholder:"Email"})}),(0,n.jsxs)("div",{className:"row g-3 align-items-center inputoutter",children:[(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)(t.default,{onChange:a,name:"mobile",type:"number",id:"phone",className:"form-control","aria-labelledby":"Phone",placeholder:"Phone"})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("select",{onChange:a,name:"region",className:"form-select","aria-label":"Region",placeholder:"Region",children:[(0,n.jsx)("option",{children:"Region"}),(0,n.jsx)("option",{value:"one",children:"One"}),(0,n.jsx)("option",{value:"two",children:"Two"}),(0,n.jsx)("option",{value:"three",children:"Three"})]})})]}),(0,n.jsx)("div",{className:"messageOutter",children:(0,n.jsx)("textarea",{onChange:a,className:"form-control",name:"message",id:"message",rows:"3",placeholder:"Message"})}),(0,n.jsx)("div",{className:"col-12",children:(0,n.jsxs)("div",{className:"form-check",children:[(0,n.jsx)("input",{onChange:r,checked:e.signup||!1,name:"signup",className:"form-check-input checkBox",type:"checkbox",id:"gridCheck"}),(0,n.jsxs)("label",{className:"form-check-label",htmlFor:"gridCheck",children:["By signing up, I confirm that I am 18 years old or older. I agree to the ",(0,n.jsx)("a",{href:"",children:"Terms and Conditions"})," and I have read the ",(0,n.jsx)("a",{href:"",children:"Privacy Policy."})]})]})}),(0,n.jsx)("div",{className:"col-12",children:(0,n.jsxs)("div",{className:"form-check",children:[(0,n.jsx)("input",{onChange:r,checked:e.agree||!1,name:"agree",className:"form-check-input checkBox",type:"checkbox",id:"gridCheck2"}),(0,n.jsx)("label",{className:"form-check-label",htmlFor:"gridCheck2",children:"I agree to receive promotional offers relating to all games and services."})]})}),(0,n.jsx)("div",{className:"col-12",children:(0,n.jsx)("button",{type:"submit",className:"submitBtn",children:"Submit"})})]})]}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("div",{className:"mapMain",children:(0,n.jsx)(o.default,{})})})]})})}),(0,n.jsx)(c.Z,{})]})}},6419:function(e,s,a){"use strict";a.r(s);var n=a(5893);s.default=e=>{let{name:s,label:a,type:l,value:i,onChange:c,placeholder:t,className:o,handleChange:r}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{children:a}),(0,n.jsx)("input",{name:s,type:l,value:i,onChange:c,placeholder:t,className:"form-control"})]})}},8550:function(e,s,a){"use strict";a.r(s);var n=a(5893),l=a(7294);s.default=()=>{let e;let s=(0,l.useRef)(null),a={lat:30.6862,lng:76.7077},i="RBS LABS, Sector 70, Mohali";return(0,l.useEffect)(()=>{let n,l;let c=()=>{n=new window.google.maps.Map(s.current,{center:a,zoom:16}),e=new window.google.maps.Marker({position:a,map:n,title:i,animation:window.google.maps.Animation.DROP}),l=new window.google.maps.InfoWindow({content:"<div>".concat(i,"</div>")}),e.addListener("click",()=>{l.open(n,e)})};if(void 0===window.google){let e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDFV4xaQARSMROoLZGQBkbiRuBsz5LYUik",e.async=!0,e.defer=!0,e.onload=c,document.head.appendChild(e)}else c();return()=>{e&&e.setMap(null)}},[]),(0,n.jsx)("div",{className:"responsive-map",ref:s,style:{height:"600px"}})}},978:function(){}},function(e){e.O(0,[774,758,674,169,321,888,179],function(){return e(e.s=7031)}),_N_E=e.O()}]);