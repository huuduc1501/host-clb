(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c,a=n(0),s=n.n(a),i=n(28),r=n.n(i),o=n(4),l=n(12),d=n(17),u=n(10),j=n.n(u),b=n(16),m=n(11),f=n(15),h=n.n(f);h.a.defaults.baseURL="https://demo-clb-123.herokuapp.com/api/v1";var O=Object(m.b)("auth/signup",function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/auth/signup",t,{withCredentials:!0});case 2:return n=e.sent,c=n.data.success,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(m.b)("auth/signin",function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/auth/signin",t,{withCredentials:!0});case 2:return n=e.sent,c=n.data.success,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var v=Object(m.c)({name:"auth",initialState:{loading:!0,isAuth:!1,hasToken:function(){var e={},t=document.cookie;return t&&t.split(";").forEach((function(t){var n=t.split("=");e[n.shift().trim()]=n.join("=")})),!!e.token}()},reducers:{},extraReducers:(c={},Object(d.a)(c,O.fulfilled,(function(e,t){e.loading=!1,e.hasToken=t.payload})),Object(d.a)(c,p.fulfilled,(function(e,t){e.loading=!1,e.hasToken=t.payload})),c)}).reducer,x=n(1),g=function(e){var t=e.changeToSignup,n=Object(o.b)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"main order-md-1",children:Object(x.jsx)("div",{className:"start",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("h1",{children:"Sign in to Swipe"}),Object(x.jsx)("p",{children:"use your email account:"}),Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(p({email:e.target.email.value,password:e.target.password.value}))},children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("input",{type:"email",id:"inputEmail",className:"form-control",name:"email",placeholder:"Email Address",required:!0}),Object(x.jsx)("button",{className:"btn icon",children:Object(x.jsx)("i",{className:"material-icons",children:"mail_outline"})})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("input",{type:"password",id:"inputPassword",className:"form-control",name:"password",placeholder:"Password",required:!0}),Object(x.jsx)("button",{className:"btn icon",children:Object(x.jsx)("i",{className:"material-icons",children:"lock_outline"})})]}),Object(x.jsx)("button",{type:"submit",className:"btn button",children:"Sign In"}),Object(x.jsx)("div",{className:"callout",children:Object(x.jsxs)("span",{children:["Don't have account? ",Object(x.jsx)("a",{href:"sign-up.html",children:"Create Account"})]})})]})]})})})})}),Object(x.jsx)("div",{className:"aside order-md-2",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"preference",children:[Object(x.jsx)("h2",{children:"Hello, Friend!"}),Object(x.jsx)("p",{children:"Enter your personal details and start your journey with Swipe today."}),Object(x.jsx)("button",{onClick:t,className:"btn button",children:"Sign Up"})]})})})})]})},N=function(e){var t=e.changeToSignin,n=Object(o.b)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"main order-md-2",children:Object(x.jsx)("div",{className:"start",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("h1",{children:"Create Account"}),Object(x.jsx)("p",{children:"use your email for registration:"}),Object(x.jsxs)("form",{className:"signup",onSubmit:function(e){e.preventDefault(),n(O({email:e.target.email.value,password:e.target.password.value,fullname:e.target.fullname.value}))},children:[Object(x.jsxs)("div",{className:"form-parent",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("input",{type:"text",id:"inputName",className:"form-control",name:"fullname",placeholder:"Username",required:!0}),Object(x.jsx)("button",{className:"btn icon",children:Object(x.jsx)("i",{className:"material-icons",children:"person_outline"})})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("input",{type:"email",id:"inputEmail",className:"form-control",name:"email",placeholder:"Email Address",required:!0}),Object(x.jsx)("button",{className:"btn icon",children:Object(x.jsx)("i",{className:"material-icons",children:"mail_outline"})})]})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("input",{type:"password",id:"inputPassword",className:"form-control",name:"password",placeholder:"Password",required:!0}),Object(x.jsx)("button",{className:"btn icon",children:Object(x.jsx)("i",{className:"material-icons",children:"lock_outline"})})]}),Object(x.jsx)("button",{type:"submit",className:"btn button",children:"Sign Up"}),Object(x.jsx)("div",{className:"callout",children:Object(x.jsxs)("span",{children:["Already a member? ",Object(x.jsx)("a",{href:"sign-in.html",children:"Sign In"})]})})]})]})})})})}),Object(x.jsx)("div",{className:"aside order-md-1",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"preference",children:[Object(x.jsx)("h2",{children:"Welcome Back!"}),Object(x.jsx)("p",{children:"To keep connected with your friends please login with your personal info."}),Object(x.jsx)("button",{onClick:t,className:"btn button",children:"Sign In"})]})})})})]})},y=function(){var e=Object(a.useState)("signin"),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(x.jsx)(x.Fragment,{children:"signin"===n?Object(x.jsx)(g,{changeToSignup:function(){return c("signup")}}):Object(x.jsx)(N,{changeToSignin:function(){return c("signin")}})})},w=Object(a.createContext)(null),k=function(e){var t=e.children,n=Object(a.useState)(null),c=Object(l.a)(n,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){try{var e=new WebSocket("wss://demo-clb-123.herokuapp.com");i(e)}catch(t){console.log(t)}}),[]),Object(x.jsx)(w.Provider,{value:s,children:t})},_=n(47),C=n(18),S=n(19),E=function(){var e=Object(a.useContext)(w);if(void 0===e)throw new Error("faillllllllllllll websocket");return[e,function(e,t){return JSON.stringify({type:e,payload:t})}]};h.a.defaults.baseURL="https://demo-clb-123.herokuapp.com/api/v1";var I,R,L=Object(m.b)("chat/messages",function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/conversation/".concat(t,"/message"),{withCredentials:!0});case 2:return n=e.sent,c=n.data.messages,console.log(c),e.abrupt("return",{key:t,value:c});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T=Object(m.c)({name:"chat",initialState:{isLoading:!0,chats:{}},reducers:{addMessage:function(e,t){var n;null===(n=e.chats[t.payload.conversationId])||void 0===n||n.push(t.payload)}},extraReducers:Object(d.a)({},L.fulfilled,(function(e,t){e.isLoading=!1,e.chats[t.payload.key]=t.payload.value}))}),D=T.actions.addMessage,A=T.reducer,M=function(e){var t=e.user;return Object(x.jsxs)("div",{className:"message",children:[Object(x.jsx)("img",{className:"avatar-md",src:t.avatar,"data-toggle":"tooltip","data-placement":"top",title:"Keith",alt:"avatar"}),Object(x.jsx)("div",{className:"text-main",children:Object(x.jsx)("div",{className:"text-group",children:Object(x.jsx)("div",{className:"text typing",children:Object(x.jsxs)("div",{className:"wave",children:[Object(x.jsx)("span",{className:"dot"}),Object(x.jsx)("span",{className:"dot"}),Object(x.jsx)("span",{className:"dot"})]})})})})]})},F=function(e){var t=e.message,n=new Date(t.createdAt);return Object(x.jsxs)("div",{className:"message ".concat(t.isMine?"me":""),children:[t.isMine?"":Object(x.jsx)("img",{className:"avatar-md",src:t.senderId.avatar,"data-toggle":"tooltip","data-placement":"top",title:"Keith",alt:"avatar"}),Object(x.jsxs)("div",{className:"text-main",children:[Object(x.jsx)("div",{className:"text-group ".concat(t.isMine?"me":""),children:Object(x.jsx)("div",{className:"text ".concat(t.isMine?"me":""),children:Object(x.jsx)("p",{children:t.message})})}),Object(x.jsx)("span",{children:"".concat(n.getHours(),":").concat(n.getMinutes())})]})]})},P=Object(m.c)({name:"call",initialState:{conversation:null,isCalling:!1,incommingCall:!1,callAway:!1},reducers:{setConversation:function(e,t){e.conversation=t.payload,e.isCalling=!0},setIncommingCall:function(e,t){e.incommingCall=!0,e.isCalling=!0},setCallAway:function(e,t){e.callAway=!0,e.isCalling=!0},setIsCallingToFalse:function(e,t){e.isCalling=e.incommingCall=e.callAway=!1,e.conversation=null}}}),J=P.actions,U=J.setConversation,z=J.setIncommingCall,V=J.setCallAway,q=J.setIsCallingToFalse,K=P.reducer,B=n(42),H=n(46),W=(n(77),S.a.div(I||(I=Object(C.a)(["\n  position: relative;\n\n  .emoji__picker--toggle {\n  }\n  .emoji__picker--content {\n    display: none;\n  }\n  .active {\n    display: block;\n  }\n  @media (max-width: 425px) {\n    .emoji-mart {\n      width: 280px !important;\n    }\n  }\n\n"])))),G=s.a.forwardRef((function(e,t){var n=e.setValue,c=e.pickerStyle,s=Object(a.useRef)(null);Object(a.useEffect)((function(){!function(e,t){document.addEventListener("mousedown",(function(n){t.current&&t.current.contains(n.target)?e.current.classList.toggle("active"):e.current&&!e.current.contains(n.target)&&e.current.classList.remove("active")}))}(s,t)}),[t]);return Object(x.jsxs)(W,{children:[Object(x.jsx)("div",{ref:t,className:"emoji__picker--toggle",children:Object(x.jsx)("i",{className:"material-icons",style:{padding:"14px"},children:"insert_emoticon"})}),Object(x.jsx)("div",{ref:s,className:"emoji__picker--content",children:Object(x.jsx)(H.a,{set:"apple",style:Object(B.a)({position:"absolute",zIndex:"9"},c),onSelect:function(e){n((function(t){return t+e.native}))}})})]})})),Q=(S.a.div(R||(R=Object(C.a)(["\n    position: fixed;\n    /* width: 200px;\n    height: 200px; */\n    z-index:9999999;\n    background:linear-gradient(145deg,rgba(140,167,255,1) 0,rgba(139,84,249,1) 50%,rgba(131,33,243,1) 100%);\n"]))),function(){var e,t=Object(o.c)((function(e){return e.chat})),n=t.isLoading,c=t.chats,s=Object(o.c)((function(e){return e.conversations})).currentConversation,i=Object(a.useState)(""),r=Object(l.a)(i,2),d=r[0],u=r[1],j=Object(a.useState)([]),b=Object(l.a)(j,2),m=b[0],f=b[1],h=Object(o.c)((function(e){return e.call})).isCalling,O=E(),p=Object(l.a)(O,2),v=p[0],g=p[1],N=Object(o.b)(),y=Object(a.useRef)(""),w=Object(a.useRef)(),k=Object(a.useRef)(),C=Object(a.useRef)();Object(a.useEffect)((function(){""===y.current&&""!==d&&v.send(g("start-typing",{conversationId:s._id})),""===d&&""!==y.current&&v.send(g("end-typing",{conversationId:s._id})),y.current!==d&&(y.current=d)}),[s._id,d,v,g]),Object(a.useEffect)((function(){return function(){d&&(u(""),v&&v.send(g("end-typing",{conversationId:s._id})))}}),[s._id]),Object(a.useEffect)((function(){v&&v.addEventListener("message",(function(e){var t=e.data;if((t=JSON.parse(t)).conversationId===s._id)switch(t.type){case"start-typing":f((function(e){return[].concat(Object(_.a)(e),[t.payload.user])}));break;case"end-typing":f((function(e){return e.filter((function(e){return e._id!==t.payload.user._id}))}));break;default:return}}))}),[v,s._id]),Object(a.useEffect)((function(){w.current&&(w.current.scrollTop=k.current.offsetHeight,console.log("scorll bottom"))}),[c]),Object(a.useEffect)((function(){!c[s._id]&&s._id&&(N(L(s._id)),console.log("get messages"))}),[c,s._id,N]);var S=function(e){if(d.trim()){u("");var t={type:"text",message:d,conversationId:s._id,createdAt:(new Date).toISOString()};v.send(g("new-message",t)),t.isMine=!0,N(D(t))}};return!c[s._id]||n?null:Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"main",children:Object(x.jsx)("div",{className:"tab-content",id:"nav-tabContent",children:Object(x.jsx)("div",{className:"babble tab-pane fade active show",id:"list-chat",role:"tabpanel","aria-labelledby":"list-chat-list",children:Object(x.jsxs)("div",{className:"chat",id:"chat1",children:[Object(x.jsx)("div",{className:"top",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"inside",children:[Object(x.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(x.jsx)("img",{className:"avatar-md",src:s.avatar,"data-toggle":"tooltip","data-placement":"top",title:"Keith",alt:"avatar"})}),Object(x.jsx)("div",{className:"status",children:Object(x.jsx)("i",{className:"material-icons online",children:"fiber_manual_record"})}),Object(x.jsxs)("div",{className:"data",children:[Object(x.jsx)("h5",{children:Object(x.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:s.title})}),Object(x.jsx)("span",{children:"Active now"})]}),Object(x.jsx)("button",{className:"btn connect d-md-block d-none",name:1,onClick:function(){h||(N(V(!0)),N(U(s)))},children:Object(x.jsx)("i",{className:"material-icons md-36",children:"videocam"})})]})})})}),Object(x.jsx)("div",{ref:w,className:"content",id:"content",children:Object(x.jsx)("div",{ref:k,className:"container",children:Object(x.jsxs)("div",{className:"col-md-12",children:[null===(e=c[s._id])||void 0===e?void 0:e.map((function(e,t){return Object(x.jsx)(F,{message:e},e._id||t)})),null===m||void 0===m?void 0:m.map((function(e,t){return Object(x.jsx)(M,{user:e},t)}))]})})}),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsx)("div",{className:"bottom",children:Object(x.jsxs)("form",{className:"position-relative w-100",children:[Object(x.jsx)("textarea",{className:"form-control",placeholder:"Start typing for reply...",rows:1,value:d,onChange:function(e){return u(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),S())}}),Object(x.jsx)("div",{style:{padding:0},className:"btn emoticons",onClick:function(e){e.preventDefault(),console.log(C),C.current.dispatchEvent(new Event("mousedown"))},children:Object(x.jsx)(G,{ref:C,setValue:u,pickerStyle:{left:0,bottom:"50px"}})}),Object(x.jsx)("button",{type:"button",className:"btn send",onClick:S,children:Object(x.jsx)("i",{className:"material-icons",children:"send"})})]})})})})]})})})})})});h.a.defaults.baseURL="https://demo-clb-123.herokuapp.com/api/v1";var X,Y,Z,$,ee=Object(m.b)("conversations/list",Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/conversation",{withCredentials:!0});case 2:return t=e.sent,n=t.data.conversations,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),te=Object(m.c)({name:"conversations",initialState:{isLoading:!0,currentConversation:"",conversations:[]},reducers:{chooseConversation:function(e,t){e.currentConversation=e.conversations.find((function(e){return e._id===t.payload}))},setLastMessage:function(e,t){e.conversations.forEach((function(e){e._id===t.payload.conversationId&&(e.lastMessageId=t.payload)}))}},extraReducers:Object(d.a)({},ee.fulfilled,(function(e,t){e.isLoading=!1,e.conversations=t.payload}))}),ne=te.actions,ce=ne.chooseConversation,ae=ne.setLastMessage,se=te.reducer,ie=(S.a.div(X||(X=Object(C.a)(["\n    height: 80px;\n    width:100%;\n"]))),["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"]),re=function(e){var t=e.cvs,n=Object(o.b)();return Object(x.jsxs)("a",{onClick:function(e){e.preventDefault(),n(L(t._id)),n(ce(t._id))},href:"#list-chat",className:"filterDiscussions all unread single active",id:"list-chat-list","data-toggle":"list",role:"tab",children:[Object(x.jsx)("img",{className:"avatar-md",src:t.avatar,"data-toggle":"tooltip","data-placement":"top",title:"Janette",alt:"avatar"}),Object(x.jsx)("div",{className:"status",children:Object(x.jsx)("i",{className:"material-icons online",children:"fiber_manual_record"})}),Object(x.jsxs)("div",{className:"data",children:[Object(x.jsx)("h5",{children:t.title}),Object(x.jsx)("span",{children:ie[new Date(t.lastMessageId.createdAt).getDay()]}),Object(x.jsx)("p",{children:t.lastMessageId.message})]})]})},oe=(S.a.div(Y||(Y=Object(C.a)(["\n    border: 1px solid black;\n"]))),function(){var e=Object(o.c)((function(e){return e.conversations})),t=e.isLoading,n=e.conversations,c=Object(o.b)(),s=E(),i=Object(l.a)(s,2),r=i[0];i[1];return Object(a.useEffect)((function(){r&&r.addEventListener("message",(function(e){var t=e.data;"new-message"===(t=JSON.parse(t)).type&&(c(ae(t.payload.message)),t.payload.message.isMine||c(D(t.payload.message)))}))}),[r,c]),Object(a.useEffect)((function(){c(ee())}),[c]),t?"...loading":Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"sidebar",id:"sidebar",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsx)("div",{className:"tab-content",children:Object(x.jsx)("div",{id:"discussions",className:"tab-pane fade active show",children:Object(x.jsxs)("div",{className:"discussions",children:[Object(x.jsx)("h1",{children:"Discussions"}),Object(x.jsx)("div",{className:"list-group",id:"chats",role:"tablist",children:null===n||void 0===n?void 0:n.map((function(e){return Object(x.jsx)(re,{cvs:e},e._id)}))})]})})})})})})})}),le=S.a.div(Z||(Z=Object(C.a)(["\n    position: fixed;\n    width: 390px;\n    height: 300px;\n    z-index: 9999999;\n    top: 100px;\n\n    right: 0;\n\n    background-color: aliceblue;\n    filter: white;\n    .hover__inner {\n        opacity: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .call-end {\n        color: red;\n    }\n    .pick-up {\n        color: green;\n    }\n    :hover .hover__inner {\n        position: absolute;\n        width: 390px;\n        height: 300px;\n        z-index: 99999999;\n        opacity: 1;\n    }\n    .relative {\n        position: relative;\n    }\n\n    #local__video {\n        position: absolute;\n        width: 130px;\n        height: 100px;\n        /* border: 1px solid black; */\n        z-index: 99999990;\n    }\n    #remote__video {\n        position: absolute;\n        width: 390px;\n        height: 300px;\n        /* border: 1px solid black; */\n        /* z-index: 99999999; */\n    }\n"]))),de=S.a.div($||($=Object(C.a)(["\n    position: absolute;\n    display: flex;\n    left: -50px;\n"]))),ue=function(e){var t=e.setVolume;return Object(x.jsxs)(de,{children:[Object(x.jsx)("i",{className:"material-icons md-30",children:"volume_down"}),Object(x.jsx)("input",{type:"range",min:"0",max:"100",defaultValue:"100",id:"myRange",onChange:t}),Object(x.jsx)("i",{className:"material-icons md-30",children:"volume_up"})]})},je=function(){var e=E(),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useRef)(),i=Object(a.useRef)(),r=Object(a.useRef)(null),d=Object(a.useRef)(null),u=Object(o.c)((function(e){return e.call})),m=u.conversation,f=u.incommingCall,h=u.callAway,O=Object(a.useState)(!0),p=Object(l.a)(O,2),v=p[0],g=p[1],N=Object(o.b)(),y=Object(a.useState)(!0),w=Object(l.a)(y,2),k=w[0],_=w[1],C=Object(a.useState)(!0),S=Object(l.a)(C,2),I=S[0],R=S[1],L=Object(a.useState)(!1),T=Object(l.a)(L,2),D=T[0],A=T[1];function M(){var e=null;try{e=new RTCPeerConnection({iceServers:[{url:"stun:stun2.1.google.com:19302"}]})}catch(t){console.log(t)}return e.addStream(d.current),e.onaddstream=function(e){i.current.srcObject=e.stream},e.onicecandidate=function(e){console.log("candidate"),e.candidate&&n.send(c("candidate",{candidate:e.candidate,conversationId:m._id}))},e}Object(a.useEffect)((function(){var e=function(e){var t=e.data;try{t=JSON.parse(t)}catch(n){console.log(n)}switch(t.type){case"offer":F(t.payload.offer);break;case"answer":P(r.current,t.payload.answer);break;case"candidate":U(r.current,t.payload.candidate);break;case"leave":J()}};return n&&n.addEventListener("message",e),function(){n.removeEventListener("message",e)}}),[n]),Object(a.useEffect)((function(){V({audio:!0,video:!0}).then((function(e){d.current=e,s.current?s.current.srcObject=e:d.current.getTracks().forEach((function(e){return e.stop()}))})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){h&&(console.log("make calll"),n.send(c("make-call",{conversationId:m._id})))}),[n,c,h,m]),Object(a.useEffect)((function(){return function(){d.current&&d.current.getTracks().forEach((function(e){return e.stop()})),r.current&&r.current.close()}}),[]);var F=function(e){r.current=M(),r.current.setRemoteDescription(new RTCSessionDescription(e)),r.current.createAnswer((function(e){r.current.setLocalDescription(e),n.send(c("answer",{conversationId:m._id,answer:e}))}),(function(e){console.log(e)})),console.log("handle offer end")},P=function(e,t){e.setRemoteDescription(new RTCSessionDescription(t))},J=function(){N(q())},U=function(e,t){try{console.log("add candidate"),e.addIceCandidate(new RTCIceCandidate(t))}catch(n){console.log(n)}},z=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(!1),r.current=M(),r.current.createOffer((function(e){n.send(c("offer",{offer:e,conversationId:m._id})),r.current.setLocalDescription(e)}),(function(e){alert("Error when creating an offer")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.video,c=t.audio,e.next=3,navigator.mediaDevices.getUserMedia({video:n,audio:c});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(le,{children:[Object(x.jsx)("video",{ref:s,autoPlay:!0,id:"local__video",muted:!0}),Object(x.jsx)("video",{ref:i,autoPlay:!0,id:"remote__video"}),Object(x.jsx)("div",{className:"hover__inner",children:Object(x.jsxs)("div",{className:"options",children:[Object(x.jsx)("button",{className:"btn option",onClick:function(){d.current&&(d.current.getAudioTracks().forEach((function(e){return e.enabled=!k})),_(!k))},children:k?Object(x.jsx)("i",{className:"material-icons md-30",children:"mic"}):Object(x.jsx)("i",{className:"material-icons md-30",children:"mic_off"})}),Object(x.jsx)("button",{className:"btn option",onClick:function(){d.current&&(d.current.getVideoTracks().forEach((function(e){return e.enabled=!I})),R(!I))},children:I?Object(x.jsx)("i",{className:"material-icons md-30",children:"videocam"}):Object(x.jsx)("i",{className:"material-icons md-30",children:"videocam_off"})}),f&&v&&Object(x.jsx)("button",{className:"btn pick-up",onClick:z,children:Object(x.jsx)("i",{className:"material-icons md-30",children:"call"})}),Object(x.jsx)("button",{className:"btn option call-end",onClick:function(){N(q()),n.send(c("leave",{conversationId:m._id}))},children:Object(x.jsx)("i",{className:"material-icons md-30",children:"call_end"})}),Object(x.jsxs)("button",{className:"btn option relative",children:[Object(x.jsx)("i",{className:"material-icons md-30",onClick:function(){return A(!D)},children:"volume_up"}),D&&Object(x.jsx)(ue,{setVolume:function(e){i.current&&(i.current.volume=Number(e.target.value)/100)}})]})]})})]})},be=function(){var e=E(),t=Object(l.a)(e,2),n=t[0],c=(t[1],Object(o.b)()),s=Object(a.useRef)(),i=Object(o.c)((function(e){return e.call})),r=i.isCalling,d=(i.conversation,Object(o.c)((function(e){return e.conversations})).conversations);return Object(a.useEffect)((function(){s.current=d}),[d]),Object(a.useEffect)((function(){n&&n.addEventListener("message",(function(e){var t=e.data;try{t=JSON.parse(t)}catch(a){t=t}if("incomming-call"===t.type){var n=s.current.find((function(e){return e._id===t.payload.conversationId}));c(U(n)),c(z(!0))}}))}),[n]),r?Object(x.jsx)(je,{}):null},me=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(oe,{}),Object(x.jsx)(Q,{}),Object(x.jsx)(be,{})]})};h.a.defaults.baseURL="https://demo-clb-123.herokuapp.com/api/v1";var fe=Object(m.b)("me/getMe",Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/auth/me",{withCredentials:!0});case 2:return t=e.sent,n=t.data.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),he=Object(m.c)({name:"me",initialState:{me:null,loading:!0},extraReducers:Object(d.a)({},fe.fulfilled,(function(e,t){e.loading=!1,e.me=t.payload}))}).reducer;var Oe=function(){var e=Object(o.c)((function(e){return e.auth})).hasToken,t=Object(o.c)((function(e){return e.me})),n=t.loading,c=t.me,s=Object(o.b)();return Object(a.useEffect)((function(){e&&s(fe())}),[s,e]),n&&e?"...":Object(x.jsx)("main",{children:Object(x.jsx)("div",{className:"layout",children:c?Object(x.jsxs)(k,{children:[" ",Object(x.jsx)(me,{})]}):Object(x.jsx)(y,{})})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},ve=(n(78),n(79),n(20)),xe=Object(ve.b)({auth:v,conversations:se,chat:A,me:he,call:K}),ge=Object(m.a)({reducer:xe});r.a.render(Object(x.jsx)(o.a,{store:ge,children:Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(Oe,{})})}),document.getElementById("root")),pe()}},[[80,1,2]]]);
//# sourceMappingURL=main.bd9c15b4.chunk.js.map