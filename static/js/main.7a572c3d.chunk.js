(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(16),r=a.n(n),l=(a(27),a(10)),i=(a(28),a(14)),o=a(9),d=a(0);function b(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg "+e.navModeClass,children:[Object(d.jsx)(o.b,{className:"navbar-brand",to:"/Simple-Text-Editor-in-React/",children:e.title}),Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("button",{style:{position:"a",top:"1rem",left:"1rem"},className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"my-2 navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/Simple-Text-Editor-in-React/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link",to:"/Simple-Text-Editor-in-React/about1",children:e.about})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"https://github.com/coder-jkb",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(i.a,{src:"github.svg"})})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"https://www.linkedin.com/in/jay-bhanushali-03b647200/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(i.a,{src:"linkedin.svg"})})})]})})]}),Object(d.jsxs)("div",{className:"form-check form-switch",style:{position:"absolute",top:"1rem",right:"1rem"},children:[Object(d.jsx)("input",{className:"mx-3 form-check-input",type:"checkbox",id:"flexSwitchCheckChecked",onClick:e.handleToggleMode}),Object(d.jsxs)("label",{className:"form-check-label text-"+e.mode,htmlFor:"flexSwitchCheckChecked",children:["Enable ",e.mode," mode"]})]})]})})}function j(e){var t=Object(c.useState)("Enter the text and start working on it..."),a=Object(l.a)(t,2),s=a[0],n=a[1],r=function(t){var a=document.getElementById("myTextarea");a.select(),navigator.clipboard.writeText(a.value),e.setNewAlert("success","Text is copied!")},i=function(t){n(""),e.setNewAlert("success","Text cleared!")};return Object(d.jsxs)("div",{className:"pb-3",style:{color:"dark"===e.mode?"black":"white"},children:[Object(d.jsxs)("div",{className:"container my-4",children:[Object(d.jsx)("h1",{children:e.heading}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("textarea",{className:"form-control border border-primary bg-{mode}",id:"myTextarea",style:{backgroundColor:"dark"===e.mode?"white":"#2a2b2c",color:"dark"===e.mode?"black":"white"},value:s,onChange:function(e){n(e.target.value)},rows:"12"})}),Object(d.jsxs)("div",{className:"d-flex flex-md-row flex-column justify-content-center",children:[Object(d.jsx)("button",{className:"mx-3 my-3 btn btn-outline-primary",onClick:function(){var t=s.toUpperCase();n(t),e.setNewAlert("success","Converted to Upper case!")},children:"Convert all to UPPER CASE"}),Object(d.jsx)("button",{className:"mx-3 my-3 btn btn-outline-primary",onClick:function(){var t=s.toLowerCase();n(t),e.setNewAlert("success","Converted to lower case!")},children:"Convert all to lower case"}),Object(d.jsx)("button",{className:"mx-3 my-3 btn btn-outline-primary",onClick:function(t){var a=s.split(/[ ]+/);n(a.join(" ")),e.setNewAlert("success","Deleted extra spaces!")},children:"Delete extra spaces"}),Object(d.jsx)("button",{className:"mx-3 my-3 btn btn-outline-primary",onClick:function(t){r(),i(),e.setNewAlert("success","Text is cut!")},children:"Cut"}),Object(d.jsx)("button",{className:"mx-3 my-3 btn btn-outline-primary",onClick:r,children:"Copy"}),Object(d.jsx)("button",{className:"mx-3 my-3 btn btn-outline-primary",onClick:i,children:"Clear"})]})]}),Object(d.jsxs)("div",{className:"container border border-primary bg-{mode}",children:[Object(d.jsx)("h2",{children:"Your Text analysis:"}),"Words: ",s.length>0?" "!==s[s.length-1]?s.split(" ").length:s.split(" ").length-1:0," ",Object(d.jsx)("br",{}),"Characters: ",s.length,Object(d.jsx)("h3",{children:"Preview:"}),s.length>0?s:"Enter some text to preview"]})]})}function h(e){return Object(d.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(d.jsxs)("div",{className:"alert alert-"+e.alert.type+" alert-dismissible fade show",role:"alert",children:[Object(d.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})}function m(e){return Object(d.jsxs)("div",{className:"container text-"+e.mode,children:[Object(d.jsx)("h1",{className:"about",children:"About"}),Object(d.jsxs)("p",{children:["\u2192 I am ",Object(d.jsx)("strong",{children:"Jay Bhanushali"})," I have built this simple text utility application as a project while learning ",Object(d.jsx)("strong",{children:Object(d.jsxs)("a",{href:"https://reactjs.org",style:{color:"#35c7ff"},children:[Object(d.jsx)("img",{src:"logo192.png",alt:"React_logo",style:{height:"30px"}}),"React"]})}),"."]}),Object(d.jsx)("p",{children:"\u2192 As the main focus was te learn React, I have used Bootstrap for basic layought and styling..."}),Object(d.jsx)("h3",{children:"What did I learn from this Project ?"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Getting started with React - Creating simple react app"}),Object(d.jsx)("li",{children:"Function based components"}),Object(d.jsx)("li",{children:"Learn props and useState"}),Object(d.jsx)("li",{children:"React router"})]}),Object(d.jsx)("h3",{children:"Resources"}),Object(d.jsx)("p",{children:Object(d.jsxs)("strong",{children:["\u2192",Object(d.jsx)("a",{href:"https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt",target:"_blank",rel:"noreferrer",style:{color:"#ff7c7c",textDecoration:"none"},children:" Youtube tutorial by CodeWithHarry"})]})}),Object(d.jsx)("p",{children:Object(d.jsxs)("strong",{children:["\u2192",Object(d.jsx)("a",{href:"https://reactjs.org/docs/getting-started.html",style:{color:"#35c7ff",textDecoration:"none"},children:" React official documentation"})]})}),"You can have a look at the source code by visiting this GitHub repo",Object(d.jsxs)("a",{href:"https://git.io/Jutb8",target:"_blank",rel:"noreferrer",style:{color:"#00d500"},children:[" ",Object(d.jsx)("strong",{children:"Simple-Text-Editor-in-React"})]})," & any suggestion or feedback related to the project is heartily welcomed."]})}b.defaultProps={title:"Title here",about:"About"},j.defaultProps={heading:"Heading"};var u=a(2);var x=function(){var e="navbar-light bg-light",t=Object(c.useState)("dark"),a=Object(l.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(e),i=Object(l.a)(r,2),x=i[0],p=i[1],g=Object(c.useState)(null),O=Object(l.a)(g,2),v=O[0],f=O[1],y=function(e,t){f({msg:t,type:e}),setTimeout((function(){f(null)}),4e3)};return Object(d.jsx)("div",{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(b,{title:"!My 1st react app!",navModeClass:x,handleToggleMode:function(){"dark"===s?(n("light"),p("navbar-dark bg-dark"),document.body.style.backgroundColor="#112426",y("success","Enabled dark mode")):(n("dark"),p(e),document.body.style.backgroundColor="white",y("success","Enabled light mode"))},mode:s}),Object(d.jsx)(h,{alert:v}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:"/Simple-Text-Editor-in-React/about",children:Object(d.jsx)(m,{mode:s})}),Object(d.jsx)(u.a,{exact:!0,path:"/Simple-Text-Editor-in-React",children:Object(d.jsx)(j,{heading:"Let's play with text",mode:s,setNewAlert:y})})]})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),p()}},[[36,1,2]]]);
//# sourceMappingURL=main.7a572c3d.chunk.js.map