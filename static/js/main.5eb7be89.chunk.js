(this.webpackJsonpshopv2=this.webpackJsonpshopv2||[]).push([[0],{151:function(e,a,t){e.exports=t(250)},156:function(e,a,t){},250:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l);t(156),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(50),o=t(6),m=function(){return localStorage.getItem("auth")},s=t(310),u=t(290),d=t(284),p=t(311),g=t(288),f=t(307),E=t(24),b=t(291),h=t(72),v=t.n(h),j=t(132),O=t(292),N=t(281),y=t(13),S=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},formContainer:{border:"solid black 1px",borderRadius:5},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},msg:{color:"red",fontSize:"20px"},linkContainer:{marginBottom:50}}})),C=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),h=m[0],O=m[1],C=Object(n.useState)(!1),x=Object(o.a)(C,2),w=x[0],k=x[1],W=Object(n.useState)(""),I=Object(o.a)(W,2),q=I[0],_=I[1],T=function(){_(""),w?localStorage.setItem("email",l):localStorage.removeItem("email"),fetch("https://jm-shop-api.herokuapp.com/api/accounts/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:h})}).then((function(e){var a;return 200===e.status?(a=e.headers.get("authentication"),localStorage.setItem("auth",a),_(r.a.createElement(y.a,{to:"/inventory"}))):_("Login Failed"),e.json()})).then((function(e){return localStorage.setItem("user",JSON.stringify(e))}))},P=S();return Object(n.useEffect)((function(){var e=localStorage.getItem("email");e&&(c(e),k(!0))}),[]),r.a.createElement("div",{id:"login_container"},r.a.createElement(N.a,{component:"main",maxWidth:"xs",className:P.formContainer},r.a.createElement(d.a,null),r.a.createElement("div",{className:P.paper},r.a.createElement(s.a,{className:P.avatar},r.a.createElement(v.a,null)),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("span",{className:P.msg},q),r.a.createElement("form",{className:P.form,noValidate:!0},r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:l,onChange:function(e){var a=e.target;return c(a.value)}}),r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:h,onChange:function(e){var a=e.target;return O(a.value)}}),r.a.createElement(g.a,{control:r.a.createElement(f.a,{name:"remember",checked:w,color:"primary",onChange:function(){k(!w)}}),label:"Remember me"}),r.a.createElement(u.a,{fullWidth:!0,variant:"contained",color:"primary",className:P.submit,onClick:function(){return T()}},"Sign In"),r.a.createElement(b.a,{container:!0,className:P.linkContainer},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(E.b,{to:"",variant:"body2"},"Forgot password?")),r.a.createElement(b.a,{item:!0},r.a.createElement(E.b,{to:"",onClick:e.handleFormView,variant:"body2"},"Don't have an account? Sign Up")))))))},x=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},registerForm:{border:"solid black 1px",borderRadius:5,marginTop:50},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},linkContainer:{marginBottom:50}}})),w=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),g=m[0],f=m[1],h=Object(n.useState)(""),O=Object(o.a)(h,2),y=O[0],S=O[1],C=Object(n.useState)(""),w=Object(o.a)(C,2),k=w[0],W=w[1],I=Object(n.useState)(""),q=Object(o.a)(I,2),_=q[0],T=q[1],P=Object(n.useState)(!1),A=Object(o.a)(P,1)[0],z=Object(n.useState)([]),D=Object(o.a)(z,1)[0],H=Object(n.useState)(!1),F=Object(o.a)(H,2),J=F[0],L=F[1],B=Object(n.useState)(!1),R=Object(o.a)(B,2),V=R[0],M=R[1],U=Object(n.useState)(!1),$=Object(o.a)(U,2),G=$[0],Q=$[1],Z=Object(n.useState)(!1),Y=Object(o.a)(Z,2),K=Y[0],X=Y[1],ee=Object(n.useState)(!1),ae=Object(o.a)(ee,2),te=ae[0],ne=ae[1],re=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),le=RegExp(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/),ce=function(e){var a=e.name,t=e.value;switch(a){case"firstName":L(""===l);break;case"lastName":M(""===g);break;case"email":y.match(re)?Q(!1):Q(!0);break;case"password":t.match(le)?X(!1):X(!0);break;case"passwordMatch":t.match(k)?ne(!1):ne(!0)}},ie=x();return r.a.createElement("div",{id:"register_container"},r.a.createElement(N.a,{component:"main",maxWidth:"xs",className:ie.registerForm},r.a.createElement(d.a,null),r.a.createElement("div",{className:ie.paper},r.a.createElement(s.a,{className:ie.avatar},r.a.createElement(v.a,null)),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{id:"sign_up_form",className:ie.form,noValidate:!0},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{name:"firstName",error:J,variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:l,onChange:function(e){var a=e.target;return c(a.value)},onBlur:function(e){var a=e.target;return ce(a)}})),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{variant:"outlined",error:V,required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",value:g,onChange:function(e){var a=e.target;return f(a.value)},onBlur:function(e){var a=e.target;return ce(a)}})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(p.a,{variant:"outlined",required:!0,error:G,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:y,onChange:function(e){var a=e.target;return S(a.value)},onBlur:function(e){var a=e.target;return ce(a)}})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(p.a,{variant:"outlined",error:K,type:"password",required:!0,fullWidth:!0,id:"password",label:"Create Password",name:"password",value:k,onChange:function(e){var a=e.target;W(a.value),ce(a)},helperText:"Password must be at least 6 characters long and include at least one number."})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(p.a,{type:"password",error:te,variant:"outlined",required:!0,fullWidth:!0,id:"passwordMatch",label:"Confirm Password",name:"passwordMatch",onChange:function(e){var a=e.target;T(a.value),ce(a)},helperText:"Passwords must match.",value:_}))),r.a.createElement(u.a,{fullWidth:!0,variant:"contained",color:"primary",className:ie.submit,onClick:function(){return!1===J&&""!==l&&!1===V&&""!==g&&!1===G&&""!==y&&!1===K&&""!==k&&!1===te?console.log("valid form"):alert("Invalid form, check your information."),void fetch("https://jm-shop-api.herokuapp.com/api/accounts/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fname:l,lname:g,email:y,password:k,isAdmin:A,cart:D})}).then((function(){c(""),f(""),S(""),W(""),T("")})).then(e.handleFormView)}},"Sign Up"),r.a.createElement(b.a,{container:!0,justify:"flex-end",className:ie.linkContainer},r.a.createElement(b.a,{item:!0},r.a.createElement(E.b,{to:"",onClick:e.handleFormView,variant:"body2"},"Already have an account? Sign in")))))))},k=Object(O.a)((function(){return{logos:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",width:"100%"},logo:{width:"1fr",height:"100px"},image:{width:"90%"}}})),W=function(){var e=k();return r.a.createElement("div",{id:"ad_container",className:e.container},r.a.createElement("p",null,"All the brands you love, at prices you can afford!"),r.a.createElement("div",{className:e.logos},r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/f41203d00a203780.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/40f2eeff324dbf8f.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/33d52ffb1724c1a8.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/f19cf7832ff1eac4.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/7e5f2994c8c46d10.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/0e1617d09434ceee.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/65d54fe044bd4863.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/e8c894a432523c05.png",className:e.image,alt:"logo"})),r.a.createElement("div",{className:e.logo},r.a.createElement("img",{src:"https://cdn.expertvoice.com/static-forever/public-web/bdcc4ff759625385.png",className:e.image,alt:"logo"}))))},I=t(293),q=Object(O.a)((function(){return{welcomeContainer:{display:"flex"},con:{display:"flex",flexDirection:"column",width:"50%",alignItems:"center"},left:{height:"80vh",display:"flex",flexDirection:"column",alignItems:"center",padding:"30px 50px",color:"#4E4E4E",fontSize:"22px",fontWeight:"300",lineHeight:"1.5"},right:{display:"flex",flexDirection:"column",justifyContent:"center"}}})),_=function(){var e=Object(n.useState)("login"),a=Object(o.a)(e,2),t=a[0],l=a[1],c=function(){l("login"===t?"register":"login")},i="login"===t?r.a.createElement(C,{handleFormView:c}):r.a.createElement(w,{handleFormView:c}),m=q();return r.a.createElement("div",{id:"main_container"},r.a.createElement("div",{className:m.welcomeContainer},r.a.createElement("div",{className:"".concat(m.left," ").concat(m.con)},r.a.createElement("h1",null,"Welcome"),r.a.createElement("p",null,"Welcome to the exclusive, members only gear shop. To view the best deals on the market right now, please login. If you have not made an account yet, you can do so ",r.a.createElement(I.a,{onClick:c},"here!")),r.a.createElement(W,null)),r.a.createElement("div",{className:"".concat(m.right," ").concat(m.con)},i)))},T=t(123),P=t.n(T),A=t(308),z=t(309),D=t(287),H=t(306),F=Object(O.a)((function(){return{itemContainer:{width:"100%",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",height:"auto"},itemContent:{display:"flex",flexDirection:"column",width:"1fr",alignItems:"center"},img:{width:400,padding:20},desc:{lineHeight:1.5,fontSize:20,fontWeight:300,padding:5,width:600},selectSize:{minWidth:120},name:{fontFamily:"Stuart,Georgia,serif",fontWeight:700,fontSize:35,padding:5,marginTop:40},quantity:{fontSize:18},price:{fontSize:18}}})),J=function(){var e=localStorage.getItem("cart"),a=Object(n.useState)(JSON.parse(localStorage.getItem("selected"))),t=Object(o.a)(a,1)[0],l=Object(n.useState)(JSON.parse(e)),c=Object(o.a)(l,1)[0],i=F();return r.a.createElement("div",{className:i.itemContainer},r.a.createElement("div",{className:i.itemContent},r.a.createElement("div",{className:"image-carousel"},r.a.createElement("img",{src:t.img,className:i.img,alt:"default img placeholder"})),r.a.createElement("p",{className:i.desc},t.desc)),r.a.createElement("div",{className:i.itemContent},r.a.createElement("p",{className:i.name},t.name),r.a.createElement("p",{className:i.price},"Price: $",t.price),r.a.createElement(D.a,{variant:"outlined"},r.a.createElement(A.a,{id:"demo"},"Size"),r.a.createElement(H.a,{labelId:"demo-simple-select-outlined-label",className:i.selectSize,label:"Size"},r.a.createElement(z.a,{value:"s"},"Small"),r.a.createElement(z.a,{value:"m"},"Medium"),r.a.createElement(z.a,{value:"l"},"Large"))),r.a.createElement("p",{className:i.quantity},"Quantity: ",t.quantity),r.a.createElement(u.a,{variant:"contained",color:"primary",endIcon:r.a.createElement(P.a,null),onClick:function(){return c.push(t),void localStorage.setItem("cart",JSON.stringify(c))}},"Add to Cart")))},L=t(305),B=t(124),R=t.n(B),V=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(e.inventory.name),m=Object(o.a)(i,2),s=m[0],d=m[1],g=Object(n.useState)(e.inventory.price),f=Object(o.a)(g,2),E=f[0],b=f[1],h=Object(n.useState)(e.inventory.quantity),v=Object(o.a)(h,2),j=v[0],N=v[1],y=Object(n.useState)(e.inventory.desc),S=Object(o.a)(y,2),C=S[0],x=S[1],w=Object(n.useState)(e.inventory.img),k=Object(o.a)(w,2),W=k[0],I=k[1],q=function(){c(!l)},_=Object(O.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:100,left:"37%"},button:{margin:e.spacing(2,0,2)},input:{margin:e.spacing(1,0,1)}}}))();return r.a.createElement("div",{id:"edit_modal_container"},r.a.createElement(R.a,{onClick:q}),r.a.createElement(L.a,{open:l,onClose:q,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("div",{className:_.paper},r.a.createElement("h2",{id:"simple-modal-title"},"Edit Item"),r.a.createElement(p.a,{name:"name",variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Item Name",className:_.input,value:s,onChange:function(e){var a=e.target;return d(a.value)}}),r.a.createElement(p.a,{name:"quantity",variant:"outlined",required:!0,fullWidth:!0,id:"quantity",label:"Quantity",className:_.input,value:j,onChange:function(e){var a=e.target;return N(a.value)}}),r.a.createElement(p.a,{name:"price",variant:"outlined",required:!0,fullWidth:!0,id:"price",label:"Price",className:_.input,value:E,onChange:function(e){var a=e.target;return b(a.value)}}),r.a.createElement(p.a,{name:"img",variant:"outlined",required:!0,fullWidth:!0,id:"img_url",label:"Img URL",value:W,className:_.input,onChange:function(e){var a=e.target;return I(a.value)}}),r.a.createElement(p.a,{name:"desc",variant:"outlined",required:!0,fullWidth:!0,id:"desc",label:"Description",className:_.input,multiline:!0,rows:"5",value:C,onChange:function(e){var a=e.target;return x(a.value)}}),r.a.createElement(u.a,{fullWidth:!0,variant:"contained",color:"primary",className:_.button,onClick:function(){fetch("https://jm-shop-api.herokuapp.com/api/inventory/".concat(e.inventory._id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,price:E,quantity:j,desc:C,img:W})}).then(console.log("EDITED")).then((function(){return q()}))}},"Update"),r.a.createElement(u.a,{fullWidth:!0,variant:"contained",color:"secondary",className:_.button,onClick:function(){return q()}},"Cancel"))))},M=t(125),U=t.n(M),$=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),s=m[0],d=m[1],g=Object(n.useState)(""),f=Object(o.a)(g,2),E=f[0],b=f[1],h=Object(n.useState)(""),v=Object(o.a)(h,2),j=v[0],N=v[1],y=Object(n.useState)(""),S=Object(o.a)(y,2),C=S[0],x=S[1],w=Object(n.useState)(""),k=Object(o.a)(w,2),W=k[0],I=k[1],q=function(){c(!l)},_=Object(O.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:100,left:"37%"},button:{margin:e.spacing(3,0,2)},input:{margin:e.spacing(1,0,1)}}}))();return r.a.createElement("div",{id:"edit_modal_container"},r.a.createElement(u.a,{variant:"contained",color:"primary",className:_.button,startIcon:r.a.createElement(U.a,null),onClick:q},"Add Item"),r.a.createElement(L.a,{open:l,onClose:q,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("div",{className:_.paper},r.a.createElement("h2",{id:"simple-modal-title"},"Add Item"),r.a.createElement(p.a,{name:"name",variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Item Name",className:_.input,onChange:function(e){var a=e.target;return d(a.value)}}),r.a.createElement(p.a,{name:"quantity",variant:"outlined",required:!0,fullWidth:!0,id:"quantity",label:"Quantity",className:_.input,onChange:function(e){var a=e.target;return N(a.value)}}),r.a.createElement(p.a,{name:"price",variant:"outlined",required:!0,fullWidth:!0,id:"price",label:"Price",className:_.input,onChange:function(e){var a=e.target;return b(a.value)}}),r.a.createElement(p.a,{name:"img",variant:"outlined",required:!0,fullWidth:!0,id:"img_url",label:"Img URL",className:_.input,onChange:function(e){var a=e.target;return I(a.value)}}),r.a.createElement(p.a,{name:"desc",variant:"outlined",required:!0,fullWidth:!0,id:"desc",label:"Description",className:_.input,onChange:function(e){var a=e.target;return x(a.value)}}),r.a.createElement(u.a,{fullWidth:!0,variant:"contained",color:"primary",className:_.button,onClick:function(){fetch("https://jm-shop-api.herokuapp.com/api/inventory",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:s,price:E,quantity:j,desc:C,img:W})}).then((function(){d(""),b(""),N(""),x(""),I("")})).then((function(){return q()})).then(console.log("ADDED"))}},"Add"),r.a.createElement(u.a,{fullWidth:!0,variant:"contained",color:"secondary",className:_.button,onClick:function(){return q()}},"Cancel"))))},G=t(126),Q=t.n(G),Z=function(e){return r.a.createElement("div",{id:"delete_btn_container"},r.a.createElement(Q.a,{onClick:function(){window.confirm("Are you sure you want to remove this item?")&&fetch("https://jm-shop-api.herokuapp.com/api/inventory/".concat(e.inventory._id),{method:"DELETE"}).then(console.log("DELETE"))}}))},Y=t(295),K=t(299),X=t(298),ee=t(294),ae=t(296),te=t(297),ne=t(252),re=Object(n.createContext)([]),le=t(88),ce=t.n(le),ie=function(e){var a=Object(n.useContext)(re),t=function(){p("asc"===d?"desc":"asc")},l=Object(n.useState)(a),c=Object(o.a)(l,2),i=c[0],m=c[1],s=Object(n.useState)("asc"),u=Object(o.a)(s,2),d=u[0],p=u[1],g=function(){var e=ce()(a,"quantity",d);t(),m(e)},E=Object(O.a)({table:{minWidth:650},descCell:{maxWidth:300},itemCell:{minWidth:300},quantityCell:{width:20},tableHeader:{fontWeight:"bold"}})();return r.a.createElement("div",{id:"inventory_container"},r.a.createElement(ee.a,{component:ne.a},r.a.createElement($,null),r.a.createElement(Y.a,{className:E.table,"aria-label":"simple table"},r.a.createElement(ae.a,null,r.a.createElement(te.a,null,r.a.createElement(X.a,{padding:"checkbox",align:"left",className:E.tableHeader,onClick:function(){return function(){var e=ce()(a,[function(e){return e.name.toLowerCase()}],d);t(),m(e)}()}},r.a.createElement(f.a,null),"Item"),r.a.createElement(X.a,{align:"right",className:E.tableHeader,onClick:function(){return g()}},"Quantity"),r.a.createElement(X.a,{align:"right",className:E.tableHeader,onClick:function(){return g()}},"Price"),r.a.createElement(X.a,{align:"left",className:E.tableHeader},"Description"),r.a.createElement(X.a,{align:"left",className:E.tableHeader},"Edit"),r.a.createElement(X.a,{align:"left",className:E.tableHeader},"Delete"))),r.a.createElement(K.a,null,i.map((function(e){return r.a.createElement(te.a,{key:e._id},r.a.createElement(X.a,{component:"th",scope:"row",padding:"checkbox",className:E.itemCell},r.a.createElement(f.a,null),e.name),r.a.createElement(X.a,{align:"right",className:E.quantityCell},e.quantity),r.a.createElement(X.a,{align:"right"},e.price),r.a.createElement(X.a,{align:"left",className:E.descCell},e.desc),r.a.createElement(X.a,{align:"left"},r.a.createElement(V,{inventory:e})),r.a.createElement(X.a,{align:"left"},r.a.createElement(Z,{inventory:e})))}))))))},oe=t(49),me=t.n(oe),se=t(77),ue=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];function c(){return(c=Object(se.a)(me.a.mark((function e(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jm-shop-api.herokuapp.com/api/accounts");case 2:e.sent.json().then((function(e){return l(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[]);var i=Object(O.a)({table:{minWidth:650},descCell:{maxWidth:300},itemCell:{minWidth:50},quantityCell:{width:20},tableHeader:{fontWeight:"bold"}})();return r.a.createElement("div",{id:"inventory_container"},r.a.createElement(ee.a,{component:ne.a},r.a.createElement(Y.a,{className:i.table,"aria-label":"simple table"},r.a.createElement(ae.a,null,r.a.createElement(te.a,null,r.a.createElement(X.a,{padding:"checkbox",align:"left",className:i.tableHeader},r.a.createElement(f.a,null)),r.a.createElement(X.a,{align:"left",className:i.tableHeader},"First Name"),r.a.createElement(X.a,{align:"left",className:i.tableHeader},"Last Name"),r.a.createElement(X.a,{align:"left",className:i.tableHeader},"Email"),r.a.createElement(X.a,{align:"left",className:i.tableHeader},"isAdmin"),r.a.createElement(X.a,{align:"left",className:i.tableHeader},"Edit"))),r.a.createElement(K.a,null,t.map((function(e){return r.a.createElement(te.a,{key:e._id},r.a.createElement(X.a,{component:"th",scope:"row",padding:"checkbox",className:i.itemCell},r.a.createElement(f.a,null)),r.a.createElement(X.a,{align:"left",className:i.itemCell},e.fname),r.a.createElement(X.a,{align:"left"},e.lname),r.a.createElement(X.a,{align:"left"},e.email),r.a.createElement(X.a,{align:"left",className:i.descCell},e.isAdmin?"yes":"no"),r.a.createElement(X.a,{align:"left"}))}))))))},de=t(300),pe=t(304),ge=t(301),fe=t(303);function Ee(e){var a=e.children,t=e.value,n=e.index,l=Object(i.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},l),t===n&&r.a.createElement(fe.a,{p:3},r.a.createElement(j.a,{component:"span"},a)))}function be(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var he=Object(O.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function ve(){var e=he(),a=r.a.useState(0),t=Object(o.a)(a,2),n=t[0],l=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(de.a,{position:"static"},r.a.createElement(pe.a,{value:n,onChange:function(e,a){l(a)},"aria-label":"simple tabs example"},r.a.createElement(ge.a,Object.assign({label:"Inventory"},be(0))),r.a.createElement(ge.a,Object.assign({label:"Users"},be(1))))),r.a.createElement(Ee,{value:n,index:0},r.a.createElement(ie,null)),r.a.createElement(Ee,{value:n,index:1},r.a.createElement(ue,null)))}var je=Object(O.a)((function(){return{container:{width:"1fr",height:"auto",border:"solid black 1px",borderRadius:3,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",transition:"all .1s ease-in-out",color:"rgb(45, 42, 42)"},itemName:{padding:0,margin:5,fontSize:20,maxWidth:225},itemPrice:{},img:{width:150,margin:10}}})),Oe=function(e){var a=je();return r.a.createElement(I.a,{href:"/item",item:e.item},r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.imgContainer},r.a.createElement("img",{className:a.img,src:e.item.img,alt:e.item.name})),r.a.createElement("h4",{className:a.itemName},e.item.name),r.a.createElement("p",{className:a.itemPrice},"Price: $",e.item.price)))},Ne=Object(O.a)((function(){return{itemsContainer:{width:"80%",height:"auto",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:15,marginTop:30}}})),ye=function(){var e=Object(n.useContext)(re),a=e.map((function(e){return r.a.createElement("a",{to:"/item/".concat(e._id),onClick:function(){return function(e){localStorage.setItem("selected",JSON.stringify(e))}(e)},key:e._id},r.a.createElement(Oe,{item:e}))})),t=Ne();return r.a.createElement("div",{id:"inventory_container"},r.a.createElement("h1",null,"Inventory Page"),r.a.createElement("div",{id:"items_container",className:t.itemsContainer},a))},Se=0,Ce=Object(O.a)({table:{minWidth:700,maxWidth:1e3,margin:"0 auto"},btn:{margin:"20px",position:"relative",left:"70%",paddingBottom:10},header:{fontWeight:800,fontSize:18},cartH2:{marginLeft:"42%",fontSize:30}}),xe=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];function c(e){return"".concat(e.toFixed(2))}var i=[];t.map((function(e){return i.push((a=e.name,t=1,n=e.price,{desc:a,qty:t,unit:n,price:function(e,a){return e*a}(t,n)}));var a,t,n}));var m=i.map((function(e){return e.price})).reduce((function(e,a){return e+a}),0),s=.07*m,d=s+m;Object(n.useEffect)((function(){l(JSON.parse(localStorage.getItem("cart")))}),[]);var p=Ce();return r.a.createElement("div",{id:"cart_container"},r.a.createElement("h2",{className:p.cartH2},"Your Cart"),r.a.createElement(ee.a,{component:ne.a},r.a.createElement(Y.a,{className:p.table,"aria-label":"spanning table"},r.a.createElement(ae.a,null,r.a.createElement(te.a,null,r.a.createElement(X.a,{className:p.header},"Item"),r.a.createElement(X.a,{className:p.header,align:"left"},"Quantity:"),r.a.createElement(X.a,{className:p.header,align:"left"},"Price each:"),r.a.createElement(X.a,{className:p.header,align:"right"},"Sum Total"))),r.a.createElement(K.a,null,i.map((function(e){return r.a.createElement(te.a,{key:Se++},r.a.createElement(X.a,null,e.desc),r.a.createElement(X.a,{align:"left"},e.qty),r.a.createElement(X.a,{align:"left"},e.unit),r.a.createElement(X.a,{align:"right"},c(e.price)))})),r.a.createElement(te.a,null,r.a.createElement(X.a,{rowSpan:3}),r.a.createElement(X.a,{colSpan:2},"Subtotal"),r.a.createElement(X.a,{align:"right"},c(m))),r.a.createElement(te.a,null,r.a.createElement(X.a,null,"Tax"),r.a.createElement(X.a,{align:"right"},"".concat((.07*100).toFixed(0)," %")),r.a.createElement(X.a,{align:"right"},c(s))),r.a.createElement(te.a,null,r.a.createElement(X.a,{colSpan:2},"Total"),r.a.createElement(X.a,{align:"right"},c(d)))))),r.a.createElement(u.a,{className:p.btn,variant:"contained",color:"primary"},"Proceed With Order"))},we=t(302),ke=t(289),We=t(129),Ie=t.n(We),qe=t(127),_e=t.n(qe),Te=t(130),Pe=t(128),Ae=t.n(Pe),ze=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],l=a[1],c=r.a.useState(null),i=Object(o.a)(c,2),s=i[0],u=i[1],d=function(){u(null)},p=function(){var e=Object(se.a)(me.a.mark((function e(){var a;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("auth"),localStorage.removeItem("user"),void localStorage.setItem("cart",JSON.stringify([]));case 2:a=r.a.createElement(y.a,{to:"/"}),l(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=m();return r.a.createElement("div",{id:"avatar_container"},g?r.a.createElement("span",null,r.a.createElement(_e.a,{"aria-controls":"avatar-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},fontSize:"large"}),r.a.createElement(E.b,{to:"/cart"},r.a.createElement(Ae.a,null)),r.a.createElement(Te.a,{id:"avatar-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:d},r.a.createElement(z.a,{onClick:d},"Profile"),r.a.createElement(z.a,{onClick:d},"Shopping Cart"),r.a.createElement(z.a,{onClick:function(){d(),p()}},"Logout"))):r.a.createElement("p",null," You are not logged in."),t)},De=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),He=function(){var e=De();return r.a.createElement("div",{id:"nav_container"},r.a.createElement(de.a,{position:"static",color:"inherit"},r.a.createElement(we.a,null,r.a.createElement(ke.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(Ie.a,null)),r.a.createElement(j.a,{variant:"h6",className:e.title}),r.a.createElement("span",null,r.a.createElement(ze,null)))))},Fe=Object(n.createContext)(null),Je=function(){var e=Object(n.useState)(m()?"Logged In":"Not Logged In"),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(JSON.parse(localStorage.getItem("user"))),s=Object(o.a)(c,1)[0],u=Object(n.useState)([]),d=Object(o.a)(u,2),p=d[0],g=d[1];var f=function(e){var a=e.component,t=Object(i.a)(e,["component"]),n=m()&&s.isAdmin;return r.a.createElement(y.b,Object.assign({},t,{render:function(e){return n?r.a.createElement(a,e):r.a.createElement(y.a,{to:"/"})}}))},b=function(e){var a=e.component,t=Object(i.a)(e,["component"]);return r.a.createElement(y.b,Object.assign({},t,{render:function(e){return m()?r.a.createElement(a,e):r.a.createElement(y.a,{to:"/"})}}))},h=function(e){var a=e.component,t=Object(i.a)(e,["component"]);return r.a.createElement(y.b,Object.assign({},t,{render:function(e){return m()?r.a.createElement(y.a,{to:"inventory"}):r.a.createElement(a,e)}}))};return Object(n.useEffect)((function(){fetch("https://jm-shop-api.herokuapp.com/api/inventory").then((function(e){return e.json()})).then((function(e){return g(e)})),null===localStorage.getItem("cart")&&localStorage.setItem("cart",JSON.stringify([]))}),[]),r.a.createElement(re.Provider,{value:p},r.a.createElement(Fe.Provider,{value:{loginStatus:t,setLoginStatus:l}},r.a.createElement("div",{className:"App"},r.a.createElement(E.a,null,r.a.createElement(He,null),r.a.createElement(y.d,null,r.a.createElement(h,{exact:!0,path:"/",component:_}),r.a.createElement(b,{exact:!0,path:"/item",component:J}),r.a.createElement(b,{exact:!0,path:"/cart",component:xe}),r.a.createElement(b,{exact:!0,path:"/inventory",component:ye}),r.a.createElement(f,{exact:!0,path:"/admin",component:ve}))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.5eb7be89.chunk.js.map