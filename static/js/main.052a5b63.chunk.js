(this.webpackJsonpaddingUsers=this.webpackJsonpaddingUsers||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__h7LA1",modal:"ErrorModal_modal__3u5_L",header:"ErrorModal_header__37Re7",content:"ErrorModal_content__3ztgX",actions:"ErrorModal_actions__2rK0r"}},,,,,function(e,t,n){e.exports={card:"Card_card__1btAt"}},function(e,t,n){e.exports={button:"Button_button__3cZRj"}},function(e,t,n){e.exports={input:"AddUser_input__2wTD3"}},function(e,t,n){e.exports={users:"UsersList_users__2fl1a"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),s=(n(17),n(12)),i=n(2),o=n(8),l=n.n(o),d=n(0),u=function(e){return Object(d.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},j=n(9),b=n.n(j),m=function(e){return Object(d.jsx)("button",{type:e.type||"button",className:b.a.button,onClick:e.onClick,children:e.children})},h=n(3),O=n.n(h),x=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:O.a.backdrop,onClick:e.onConfirm}),Object(d.jsxs)(u,{className:O.a.modal,children:[Object(d.jsx)("header",{className:O.a.header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:O.a.content,children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsx)("footer",{className:O.a.actions,children:Object(d.jsx)(m,{onClick:e.onConfirm,children:"Okay"})})]})]})},p=n(10),_=n.n(p),f=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),l=o[0],j=o[1],b=Object(a.useState)(),h=Object(i.a)(b,2),O=h[0],p=h[1];return Object(d.jsxs)("div",{children:[O&&Object(d.jsx)(x,{title:O.title,message:O.message,onConfirm:function(){p(null)}}),Object(d.jsx)(u,{className:_.a.input,children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==c.trim().length&&0!==l.trim().length?+l<1?p({title:"Invalid age",message:"Please enter a valid age (> 0)."}):(e.onAddUser(c,l),r(""),j("")):p({title:"Invalid input",message:"Please enter a valid name and age (nom-empty values)."})},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{id:"username",type:"text",value:c,onChange:function(e){r(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(d.jsx)("input",{id:"age",type:"number",value:l,onChange:function(e){j(e.target.value)}}),Object(d.jsx)(m,{type:"submit",children:"Add User"})]})})]})},g=n(11),v=n.n(g),k=function(e){return Object(d.jsx)(u,{className:v.a.users,children:Object(d.jsx)("ul",{children:e.user.map((function(e){return Object(d.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var C=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{onAddUser:function(e,t){c((function(n){return[].concat(Object(s.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(d.jsx)(k,{user:n})]})};r.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.052a5b63.chunk.js.map