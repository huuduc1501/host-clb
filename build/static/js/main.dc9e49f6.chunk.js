(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c,a=n(1),s=n.n(a),i=n(19),r=n.n(i),o=n(2),l=n(3),d=n(12),u=n(5),j=n.n(u),b=n(8),m=n(4),h=n(7),O=n.n(h);O.a.defaults.baseURL="http://localhost:5000/api/v1";var f=Object(m.b)("auth/signup",function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/auth/signup",t,{withCredentials:!0});case 2:return n=e.sent,c=n.data.success,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(m.b)("auth/signin",function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/auth/signin",t,{withCredentials:!0});case 2:return n=e.sent,c=n.data.success,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var p=Object(m.c)({name:"auth",initialState:{loading:!0,isAuth:!1,hasToken:function(){var e={},t=document.cookie;return t&&t.split(";").forEach((function(t){var n=t.split("=");e[n.shift().trim()]=n.join("=")})),!!e.token}()},reducers:{},extraReducers:(c={},Object(d.a)(c,f.fulfilled,(function(e,t){e.loading=!1,e.hasToken=t.payload})),Object(d.a)(c,v.fulfilled,(function(e,t){e.loading=!1,e.hasToken=t.payload})),c)}).reducer,x=n(0),g=function(e){var t=e.changeToSignup,n=Object(o.b)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"main order-md-1",children:Object(x.jsx)("div",{className:"start",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("h1",{children:"Sign in to Swipe"}),Object(x.jsx)("p",{children:"use your email account:"}),Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(v({email:e.target.email.value,password:e.target.password.value}))},children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("input",{type:"email",id:"inputEmail",className:"form-control",name:"email",placeholder:"Email Address",required:!0}),Object(x.jsx)("button",{className:"btn icon",children:Object(x.jsx)("i",{className:"material-icons",children:"mail_outline"})})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("input",{type:"password",id:"inputPassword",className:"form-control",name:"password",placeholder:"Password",required:!0}),Object(x.jsx)("button",{className:"btn icon",children:Object(x.jsx)("i",{className:"material-icons",children:"lock_outline"})})]}),Object(x.jsx)("button",{type:"submit",className:"btn button",children:"Sign In"}),Object(x.jsx)("div",{className:"callout",children:Object(x.jsxs)("span",{children:["Don't have account? ",Object(x.jsx)("a",{href:"sign-up.html",children:"Create Account"})]})})]})]})})})})}),Object(x.jsx)("div",{className:"aside order-md-2",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"preference",children:[Object(x.jsx)("h2",{children:"Hello, Friend!"}),Object(x.jsx)("p",{children:"Enter your personal details and start your journey with Swipe today."}),Object(x.jsx)("button",{onClick:t,className:"btn button",children:"Sign Up"})]})})})})]})},N=function(e){var t=e.changeToSignin,n=Object(o.b)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"main order-md-2",children:Object(x.jsx)("div",{className:"start",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("h1",{children:"Create Account"}),Object(x.jsx)("p",{children:"use your email for registration:"}),Object(x.jsxs)("form",{className:"signup",onSubmit:function(e){e.preventDefault(),n(f({email:e.target.email.value,password:e.target.password.value,fullname:e.target.fullname.value}))},children:[Object(x.jsxs)("div",{className:"form-parent",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("input",{type:"text",id:"inputName",className:"form-control",name:"fullname",placeholder:"Username",required:!0}),Object(x.jsx)("button",{className:"btn icon",children:Object(x.jsx)("i",{className:"material-icons",children:"person_outline"})})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("input",{type:"email",id:"inputEmail",className:"form-control",name:"email",placeholder:"Email Address",required:!0}),Object(x.jsx)("button",{className:"btn icon",children:Object(x.jsx)("i",{className:"material-icons",children:"mail_outline"})})]})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("input",{type:"password",id:"inputPassword",className:"form-control",name:"password",placeholder:"Password",required:!0}),Object(x.jsx)("button",{className:"btn icon",children:Object(x.jsx)("i",{className:"material-icons",children:"lock_outline"})})]}),Object(x.jsx)("button",{type:"submit",className:"btn button",children:"Sign Up"}),Object(x.jsx)("div",{className:"callout",children:Object(x.jsxs)("span",{children:["Already a member? ",Object(x.jsx)("a",{href:"sign-in.html",children:"Sign In"})]})})]})]})})})})}),Object(x.jsx)("div",{className:"aside order-md-1",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"preference",children:[Object(x.jsx)("h2",{children:"Welcome Back!"}),Object(x.jsx)("p",{children:"To keep connected with your friends please login with your personal info."}),Object(x.jsx)("button",{onClick:t,className:"btn button",children:"Sign In"})]})})})})]})},y=function(){var e=Object(a.useState)("signin"),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(x.jsx)(x.Fragment,{children:"signin"===n?Object(x.jsx)(g,{changeToSignup:function(){return c("signup")}}):Object(x.jsx)(N,{changeToSignin:function(){return c("signin")}})})},w=Object(a.createContext)(null),C=function(e){var t=e.children,n=Object(a.useState)(null),c=Object(l.a)(n,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){try{var e=new WebSocket("ws://localhost:5000");i(e)}catch(t){console.log(t)}}),[]),Object(x.jsx)(w.Provider,{value:s,children:t})},_=n(9),k=n(10),S=n(39),E=function(){var e=Object(a.useContext)(w);if(void 0===e)throw new Error("faillllllllllllll websocket");return[e,function(e,t){return JSON.stringify({type:e,payload:t})}]};O.a.defaults.baseURL="http://localhost:5000/api/v1";var I,T=Object(m.b)("chat/messages",function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/conversation/".concat(t,"/message"),{withCredentials:!0});case 2:return n=e.sent,c=n.data.messages,console.log(c),e.abrupt("return",{key:t,value:c});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=Object(m.c)({name:"chat",initialState:{isLoading:!0,chats:{}},reducers:{addMessage:function(e,t){var n;null===(n=e.chats[t.payload.conversationId])||void 0===n||n.push(t.payload)}},extraReducers:Object(d.a)({},T.fulfilled,(function(e,t){e.isLoading=!1,e.chats[t.payload.key]=t.payload.value}))}),R=D.actions.addMessage,A=D.reducer,L=function(e){var t=e.user;return Object(x.jsxs)("div",{className:"message",children:[Object(x.jsx)("img",{className:"avatar-md",src:t.avatar,"data-toggle":"tooltip","data-placement":"top",title:"Keith",alt:"avatar"}),Object(x.jsx)("div",{className:"text-main",children:Object(x.jsx)("div",{className:"text-group",children:Object(x.jsx)("div",{className:"text typing",children:Object(x.jsxs)("div",{className:"wave",children:[Object(x.jsx)("span",{className:"dot"}),Object(x.jsx)("span",{className:"dot"}),Object(x.jsx)("span",{className:"dot"})]})})})})]})},M=function(e){var t=e.message,n=new Date(t.createdAt);return Object(x.jsxs)("div",{className:"message ".concat(t.isMine?"me":""),children:[t.isMine?"":Object(x.jsx)("img",{className:"avatar-md",src:t.senderId.avatar,"data-toggle":"tooltip","data-placement":"top",title:"Keith",alt:"avatar"}),Object(x.jsxs)("div",{className:"text-main",children:[Object(x.jsx)("div",{className:"text-group ".concat(t.isMine?"me":""),children:Object(x.jsx)("div",{className:"text ".concat(t.isMine?"me":""),children:Object(x.jsx)("p",{children:t.message})})}),Object(x.jsx)("span",{children:"".concat(n.getHours(),":").concat(n.getMinutes())})]})]})},F=Object(m.c)({name:"call",initialState:{conversation:null,isCalling:!1,incommingCall:!1,callAway:!1},reducers:{setConversation:function(e,t){e.conversation=t.payload,e.isCalling=!0},setIncommingCall:function(e,t){e.incommingCall=t.payload,e.isCalling=!0},setCallAway:function(e,t){e.callAway=t.payload},setIsCallingToFalse:function(e,t){e.isCalling=e.incommingCall=e.callAway=!1}}}),P=F.actions,U=P.setConversation,J=P.setIncommingCall,q=P.setCallAway,z=P.setIsCallingToFalse,K=F.reducer,B=(k.a.div(I||(I=Object(_.a)(["\n    position: fixed;\n    /* width: 200px;\n    height: 200px; */\n    z-index:9999999;\n    background:linear-gradient(145deg,rgba(140,167,255,1) 0,rgba(139,84,249,1) 50%,rgba(131,33,243,1) 100%);\n"]))),function(){var e,t=Object(o.c)((function(e){return e.chat})),n=t.isLoading,c=t.chats,s=Object(o.c)((function(e){return e.conversations})).currentConversation,i=Object(a.useState)(""),r=Object(l.a)(i,2),d=r[0],u=r[1],j=Object(a.useState)([]),b=Object(l.a)(j,2),m=b[0],h=b[1],O=Object(a.useState)(!1),f=Object(l.a)(O,2),v=(f[0],f[1],Object(a.useState)(!1)),p=Object(l.a)(v,2),g=(p[0],p[1],E()),N=Object(l.a)(g,2),y=N[0],w=N[1],C=Object(o.b)(),_=Object(a.useRef)(""),k=Object(a.useRef)(),I=Object(a.useRef)();console.log(m),Object(a.useEffect)((function(){""===_.current&&""!==d&&y.send(w("start-typing",{conversationId:s._id})),""===d&&""!==_.current&&y.send(w("end-typing",{conversationId:s._id})),_.current!==d&&(_.current=d)}),[s._id,d,y,w]),Object(a.useEffect)((function(){return function(){d&&(u(""),y&&y.send(w("end-typing",{conversationId:s._id})))}}),[s._id]),Object(a.useEffect)((function(){y&&y.addEventListener("message",(function(e){var t=e.data;if(console.log(t),(t=JSON.parse(t)).conversationId===s._id)switch(t.type){case"start-typing":h((function(e){return[].concat(Object(S.a)(e),[t.payload.user])}));break;case"end-typing":h((function(e){return e.filter((function(e){return e._id!==t.payload.user._id}))}));break;default:return}}))}),[y,s._id]),Object(a.useEffect)((function(){k.current&&(k.current.scrollTop=I.current.offsetHeight,console.log("scorll bottom"))}),[c]),Object(a.useEffect)((function(){!c[s._id]&&s._id&&(C(T(s._id)),console.log("get messages"))}),[c,s._id,C]);var D=function(e){if(d.trim()){u("");var t={type:"text",message:d,conversationId:s._id,createdAt:(new Date).toISOString()};y.send(w("new-message",t)),t.isMine=!0,C(R(t))}};return!c[s._id]||n?null:Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"main",children:Object(x.jsx)("div",{className:"tab-content",id:"nav-tabContent",children:Object(x.jsx)("div",{className:"babble tab-pane fade active show",id:"list-chat",role:"tabpanel","aria-labelledby":"list-chat-list",children:Object(x.jsxs)("div",{className:"chat",id:"chat1",children:[Object(x.jsx)("div",{className:"top",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"inside",children:[Object(x.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(x.jsx)("img",{className:"avatar-md",src:s.avatar,"data-toggle":"tooltip","data-placement":"top",title:"Keith",alt:"avatar"})}),Object(x.jsx)("div",{className:"status",children:Object(x.jsx)("i",{className:"material-icons online",children:"fiber_manual_record"})}),Object(x.jsxs)("div",{className:"data",children:[Object(x.jsx)("h5",{children:Object(x.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:s.title})}),Object(x.jsx)("span",{children:"Active now"})]}),Object(x.jsx)("button",{className:"btn connect d-md-block d-none",name:1,children:Object(x.jsx)("i",{className:"material-icons md-30",children:"phone_in_talk"})}),Object(x.jsx)("button",{className:"btn connect d-md-block d-none",name:1,onClick:function(){C(q(!0)),C(U(s))},children:Object(x.jsx)("i",{className:"material-icons md-36",children:"videocam"})}),Object(x.jsx)("button",{className:"btn d-md-block d-none",children:Object(x.jsx)("i",{className:"material-icons md-30",children:"info"})})]})})})}),Object(x.jsx)("div",{ref:k,className:"content",id:"content",children:Object(x.jsx)("div",{ref:I,className:"container",children:Object(x.jsxs)("div",{className:"col-md-12",children:[null===(e=c[s._id])||void 0===e?void 0:e.map((function(e,t){return Object(x.jsx)(M,{message:e},e._id||t)})),null===m||void 0===m?void 0:m.map((function(e,t){return Object(x.jsx)(L,{user:e},t)}))]})})}),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsx)("div",{className:"bottom",children:Object(x.jsxs)("form",{className:"position-relative w-100",children:[Object(x.jsx)("textarea",{className:"form-control",placeholder:"Start typing for reply...",rows:1,value:d,onChange:function(e){return u(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),D())}}),Object(x.jsx)("button",{className:"btn emoticons",children:Object(x.jsx)("i",{className:"material-icons",children:"insert_emoticon"})}),Object(x.jsx)("button",{type:"button",className:"btn send",onClick:D,children:Object(x.jsx)("i",{className:"material-icons",children:"send"})})]})})})})]})})})})})});O.a.defaults.baseURL="http://localhost:5000/api/v1";var H,W,V,G,Q=Object(m.b)("conversations/list",Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/conversation",{withCredentials:!0});case 2:return t=e.sent,n=t.data.conversations,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),X=Object(m.c)({name:"conversations",initialState:{isLoading:!0,currentConversation:"",conversations:[]},reducers:{chooseConversation:function(e,t){e.currentConversation=e.conversations.find((function(e){return e._id===t.payload}))},setLastMessage:function(e,t){e.conversations.forEach((function(e){e._id===t.payload.conversationId&&(e.lastMessageId=t.payload)}))}},extraReducers:Object(d.a)({},Q.fulfilled,(function(e,t){e.isLoading=!1,e.conversations=t.payload}))}),Y=X.actions,Z=Y.chooseConversation,$=Y.setLastMessage,ee=X.reducer,te=(k.a.div(H||(H=Object(_.a)(["\n    height: 80px;\n    width:100%;\n"]))),["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"]),ne=function(e){var t=e.cvs;console.log(typeof t.lastMessageId.createdAt);var n=Object(o.b)();return Object(x.jsxs)("a",{onClick:function(e){e.preventDefault(),n(T(t._id)),n(Z(t._id))},href:"#list-chat",className:"filterDiscussions all unread single active",id:"list-chat-list","data-toggle":"list",role:"tab",children:[Object(x.jsx)("img",{className:"avatar-md",src:t.avatar,"data-toggle":"tooltip","data-placement":"top",title:"Janette",alt:"avatar"}),Object(x.jsx)("div",{className:"status",children:Object(x.jsx)("i",{className:"material-icons online",children:"fiber_manual_record"})}),Object(x.jsxs)("div",{className:"data",children:[Object(x.jsx)("h5",{children:t.title}),Object(x.jsx)("span",{children:te[new Date(t.lastMessageId.createdAt).getDay()]}),Object(x.jsx)("p",{children:t.lastMessageId.message})]})]})},ce=(k.a.div(W||(W=Object(_.a)(["\n    border: 1px solid black;\n"]))),function(){var e=Object(o.c)((function(e){return e.conversations})),t=e.isLoading,n=e.conversations,c=Object(o.b)(),s=E(),i=Object(l.a)(s,2),r=i[0];i[1];return console.log(n),Object(a.useEffect)((function(){r&&r.addEventListener("message",(function(e){var t=e.data;"new-message"===(t=JSON.parse(t)).type&&(c($(t.payload.message)),t.payload.message.isMine||c(R(t.payload.message)))}))}),[r,c]),Object(a.useEffect)((function(){c(Q()),console.log("dispatch")}),[c]),t?"...loading":Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"sidebar",id:"sidebar",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsx)("div",{className:"tab-content",children:Object(x.jsx)("div",{id:"discussions",className:"tab-pane fade active show",children:Object(x.jsxs)("div",{className:"discussions",children:[Object(x.jsx)("h1",{children:"Discussions"}),Object(x.jsx)("div",{className:"list-group",id:"chats",role:"tablist",children:null===n||void 0===n?void 0:n.map((function(e){return Object(x.jsx)(ne,{cvs:e},e._id)}))})]})})})})})})})}),ae=k.a.div(V||(V=Object(_.a)(["\n    position: fixed;\n    width: 390px;\n    height: 300px;\n    z-index: 9999999;\n    top: 100px;\n\n    right: 0;\n\n    background-color: aliceblue;\n    filter: white;\n    .hover__inner {\n        opacity: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .call-end {\n        color: red;\n    }\n    .pick-up {\n        color: green;\n    }\n    :hover .hover__inner {\n        position: absolute;\n        width: 390px;\n        height: 300px;\n        z-index: 99999999;\n        opacity: 1;\n    }\n    #local__video {\n        position: absolute;\n        width: 130px;\n        height: 100px;\n        /* border: 1px solid black; */\n        z-index: 99999990;\n    }\n    #remote__video {\n        position: absolute;\n        width: 390px;\n        height: 300px;\n        /* border: 1px solid black; */\n        /* z-index: 99999999; */\n    }\n"]))),se=function(){var e=E(),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useRef)(),i=Object(a.useRef)(),r=Object(a.useRef)(null),d=Object(o.c)((function(e){return e.conversations})).conversations,u=Object(a.useRef)(null),m=(Object(a.useRef)(null),Object(o.c)((function(e){return e.call}))),h=m.conversation,O=m.incommingCall,f=m.callAway,v=m.isCalling,p=Object(a.useState)(!0),g=Object(l.a)(p,2),N=g[0],y=g[1],w=Object(o.b)(),C=Object(a.useState)(!0),_=Object(l.a)(C,2),k=_[0],S=_[1],I=Object(a.useState)(!0),T=Object(l.a)(I,2),D=T[0],R=T[1];console.log(d),Object(a.useEffect)((function(){u.current=d}),[d]),Object(a.useEffect)((function(){n&&n.addEventListener("message",(function(e){var t=e.data;try{t=JSON.parse(t)}catch(n){t=t}switch(console.log(t),t.type){case"offer":L(r.current,t.payload);break;case"answer":M(r.current,t.payload.answer);break;case"candidate":P(r.current,t.payload.candidate);break;case"leave":F()}}))}),[n]),Object(a.useEffect)((function(){!r.current&&n&&(console.log("create Peer"),r.current=function(){var e=null;try{e=new RTCPeerConnection({iceServers:[{url:"stun:stun2.1.google.com:19302"}]})}catch(t){console.log(t)}return e.onaddstream=function(e){i.current.srcObject=e.stream},e}())}),[n,c,v]),Object(a.useEffect)((function(){var e=s.current;return function(){console.log("logg"),v&&(console.log("remove stream"),e.srcObject&&(e.srcObject.getTracks().forEach((function(e){return e.stop()})),r.current.removeStream(e.srcObject),console.log("off stream")),r.current.close(),y(!0),r.current=null)}}),[v]);Object(a.useEffect)((function(){f&&A({video:!0,audio:{echoCancellation:!0}}).then((function(e){var t;s.current&&(s.current.srcObject=e),r.current.onicecandidate=function(e){console.log("candidate"),e.candidate&&n.send(c("candidate",{candidate:e.candidate,conversationId:h._id}))},t=r.current,s.current&&(t.addStream(s.current.srcObject),t.createOffer((function(e){n.send(c("offer",{offer:e,conversationId:h._id})),t.setLocalDescription(e)}),(function(e){alert("Error when creating an offer")})))}))}),[f]);var A=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.video,c=t.audio,e.next=3,navigator.mediaDevices.getUserMedia({video:n,audio:c});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e,t){e.setRemoteDescription(new RTCSessionDescription(t.offer)),w(J(!0)),console.log(d);var n=u.current.find((function(e){return e._id===t.conversationId}));console.log(n),w(U(n)),console.log("handle offer end")},M=function(e,t){e.setRemoteDescription(new RTCSessionDescription(t))},F=function(){w(z())},P=function(e,t){try{console.log(e),e.addIceCandidate(new RTCIceCandidate(t))}catch(n){console.log(n)}};return v?Object(x.jsxs)(ae,{children:[Object(x.jsx)("video",{ref:s,autoPlay:!0,id:"local__video"}),Object(x.jsx)("video",{ref:i,autoPlay:!0,id:"remote__video"}),Object(x.jsx)("div",{className:"hover__inner",children:Object(x.jsxs)("div",{className:"options",children:[Object(x.jsx)("button",{className:"btn option",children:Object(x.jsx)("i",{className:"material-icons md-30",onClick:function(){s.current.srcObject&&(s.current.srcObject.getAudioTracks().forEach((function(e){return e.enabled=!k})),S(!k))},children:"mic"})}),Object(x.jsx)("button",{className:"btn option",children:Object(x.jsx)("i",{className:"material-icons md-30",onClick:function(){s.current.srcObject&&(s.current.srcObject.getVideoTracks().forEach((function(e){return e.enabled=!D})),R(!D))},children:"videocam"})}),O&&N&&Object(x.jsx)("button",{className:"btn pick-up",children:Object(x.jsx)("i",{className:"material-icons md-30",onClick:function(){O&&(y(!1),console.log("pickup"),A({video:!0,audio:{echoCancellation:!0}}).then((function(e){e.echoCancellation=!0,s.current.srcObject=e,r.current.addStream(e),function(e){try{e.onicecandidate=function(e){console.log("candidate"),e.candidate&&n.send(c("candidate",{candidate:e.candidate,conversationId:h._id}))},console.log(e),e.createAnswer((function(t){console.log(t),e.setLocalDescription(t),n.send(c("answer",{conversationId:h._id,answer:t}))}),(function(e){console.log(e)}))}catch(t){console.log(t)}}(r.current)})))},children:"call"})}),Object(x.jsx)("button",{className:"btn option call-end",onClick:function(){w(z()),n.send(c("leave",{conversationId:h._id}))},children:Object(x.jsx)("i",{className:"material-icons md-30",children:"call_end"})})]})})]}):null},ie=(k.a.div(G||(G=Object(_.a)(["\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    height: 100vh;\n"]))),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=(t[0],t[1],E()),c=(Object(l.a)(n,1)[0],Object(a.useState)(null)),s=Object(l.a)(c,2),i=(s[0],s[1],Object(a.useState)(null)),r=Object(l.a)(i,2);r[0],r[1],Object(o.c)((function(e){return e.call})).conversation,Object(o.b)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ce,{}),Object(x.jsx)(B,{}),Object(x.jsx)(se,{})]})});O.a.defaults.baseURL="http://localhost:5000/api/v1";var re=Object(m.b)("me/getMe",Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/auth/me",{withCredentials:!0});case 2:return t=e.sent,n=t.data.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),oe=Object(m.c)({name:"me",initialState:{me:null,loading:!0},extraReducers:Object(d.a)({},re.fulfilled,(function(e,t){e.loading=!1,e.me=t.payload}))}).reducer;var le=function(){var e=Object(o.c)((function(e){return e.auth})).hasToken,t=Object(o.c)((function(e){return e.me})),n=t.loading,c=t.me,s=Object(o.b)();return Object(a.useEffect)((function(){e&&s(re())}),[s,e]),console.log(c),n&&e?"...":Object(x.jsx)("main",{children:Object(x.jsx)("div",{className:"layout",children:c?Object(x.jsxs)(C,{children:[" ",Object(x.jsx)(ie,{})]}):Object(x.jsx)(y,{})})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},ue=(n(68),n(69),n(70),n(11)),je=Object(ue.b)({auth:p,conversations:ee,chat:A,me:oe,call:K}),be=Object(m.a)({reducer:je});r.a.render(Object(x.jsx)(o.a,{store:be,children:Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(le,{})})}),document.getElementById("root")),de()}},[[71,1,2]]]);
//# sourceMappingURL=main.dc9e49f6.chunk.js.map