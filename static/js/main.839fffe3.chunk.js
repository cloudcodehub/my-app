(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),o=(t(13),t(1));t(14);function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg  navbar-".concat(e.DarkModeStatus," bg-").concat(e.DarkModeStatus," ")},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.brandName),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/service"},"Services"))),l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2 rounded-5",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success rounded-5",type:"submit"},"Search")),l.a.createElement("div",{className:"form-check form-switch mx-4"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault","aria-checked":"false",onClick:function(a){e.EnableDarkMode(a)}}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"})))))}function s(e){var a=Object(n.useState)("your text here"),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mb-3 mt-5 text-".concat("dark"===e.DarkModeStatus?"light":"dark")},l.a.createElement("label",{htmlFor:"exampleFormControlInput1",className:"form-label"},"Username "),l.a.createElement("input",{type:"email",className:"form-control",id:"exampleFormControlInput 1",placeholder:"username"})),l.a.createElement("div",{className:"mb-3 text-".concat("dark"===e.DarkModeStatus?"light":"dark")},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"},"Message here."),l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){console.log("this is onchange"),c(e.target.value)},id:"exampleFormControlTextarea1",rows:"3"})),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var e=r.toUpperCase();c(e)}},"Submit"),l.a.createElement("button",{className:"btn btn-danger mx-2",onClick:function(){c("")}},"Clear"),l.a.createElement("button",{className:"btn btn-success mx-2",onClick:function(){var e=r.split(""),a=e.slice(0,e.length-1).join("");console.log(a),c(a)}},"Undo"),l.a.createElement("div",{className:"container my-5 text-".concat("dark"===e.DarkModeStatus?"light":"dark")},l.a.createElement("h1",null,"Text Summery..."),l.a.createElement("p",null,"You wrote ",r.split(" ").length-1," character and ",r.length," words")))}m.defaultProps={brandName:"name here..."};var i=function(){var e=Object(n.useState)("light"),a=Object(o.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{brandName:"Rahul Website",EnableDarkMode:function(e){!0===e.target.checked?(r("dark"),document.body.style.backgroundColor="#040D12",document.title="dark mode on"):(r("light"),document.body.style.backgroundColor="#F0F0F0",document.title="dark mode off")},DarkModeStatus:t}),l.a.createElement(s,{DarkModeStatus:t}))},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),u()},4:function(e,a,t){e.exports=t(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.839fffe3.chunk.js.map