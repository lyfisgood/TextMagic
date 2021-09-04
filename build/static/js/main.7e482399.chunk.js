(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,a,t){},23:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(14),r=t.n(s),l=(t(22),t(23),t(0));var o=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"my-3",children:"About Us"}),Object(l.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(l.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(l.jsx)("strong",{children:"Analyze Your Text"})})}),Object(l.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",children:"TextMagic gives you a way to analyze your text quickly and efficiently. Be it word count, character count or"})})]}),Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(l.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(l.jsx)("strong",{children:"Free To Use"})})}),Object(l.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",children:"TextMagic is a free character counter tool."})})]}),Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(l.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(l.jsx)("strong",{children:"Browser Compatible "})})}),Object(l.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",children:"This word counter software works in any Browsers such as Chrome, Firefox, Internet Explorer, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc."})})]})]})]})},i=t(8);function d(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link","aria-current":"page",to:"/about",children:e.aboutText})})]})})]})})}var b=t(17);function j(e){var a=Object(c.useState)(""),t=Object(b.a)(a,2),n=t[0],s=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{className:"mb-4",children:e.heading}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){s(e.target.value)},id:"myBox",rows:"8"})}),Object(l.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var e=n.toUpperCase();s(e),alert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(l.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var e=n.toLowerCase();s(e),alert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(l.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){s(""),alert("Text Cleared!","success")},children:"All Clear"}),Object(l.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(n),alert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(l.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var e=n.split(/[ ]+/);s(e.join(" "))},children:"Remove Extra Spaces"})]}),Object(l.jsxs)("div",{className:"container my-3",children:[Object(l.jsx)("h3",{children:"Your text summary"}),Object(l.jsxs)("p",{children:[n.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",n.length," characters "]}),Object(l.jsxs)("p",{children:[.008*n.split(" ").length," minutes read"]}),Object(l.jsx)("p",{children:"Preview"}),Object(l.jsx)("p",{children:n})]})]})}var h=t(2);var x=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(d,{title:"TextMagic",AboutHome:"Home",aboutText:"About Us"}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsxs)(h.c,{children:[Object(l.jsx)(h.a,{exact:!0,path:"/about",children:Object(l.jsx)(o,{})}),Object(l.jsx)(h.a,{exact:!0,path:"/",children:Object(l.jsx)(j,{heading:"Try TextMagic - word counter, character counter, remove extra spaces"})})]})})]})})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),m()}},[[30,1,2]]]);
//# sourceMappingURL=main.7e482399.chunk.js.map