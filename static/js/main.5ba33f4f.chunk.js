(this["webpackJsonpgithub-search-app"]=this["webpackJsonpgithub-search-app"]||[]).push([[0],{22:function(e,c,s){},23:function(e,c,s){},47:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s.n(t),n=s(16),r=s.n(n),l=(s(22),s.p,s(23),s(24),s(25),s(6)),i=s.n(l),o=s(17),d=s(3),b="48743005c585c21ade32",j="bbf845d465cffef11b5015ab5dfa305230b7b4f1",u=s(7),m=s.n(u),h=s(0),x=b,O=j,g=Object(t.createContext)({userDetails:{},userRepos:[],onChangeHandler:function(e){},onSubmitHandler:function(e){}}),p=function(e){var c=Object(t.useState)({}),s=Object(d.a)(c,2),a=s[0],n=s[1],r=Object(t.useState)([]),l=Object(d.a)(r,2),b=l[0],j=l[1],u=Object(t.useState)(""),p=Object(d.a)(u,2),f=p[0],v=p[1];Object(t.useEffect)((function(){N(x,O,"mdmubasheer6544"),w(x,O,"mdmubasheer6544")}),[]);var N=function(){var e=Object(o.a)(i.a.mark((function e(c,s,t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a="https://api.github.com/users/".concat(t,"?Client_ID=").concat(c,",&Client_Secret=").concat(s),m.a.get(a).then((function(e){n(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(c,s,t){return e.apply(this,arguments)}}(),w=function(e,c,s){var t="https://api.github.com/users/".concat(s,"/repos?Client_ID=").concat(e,",&Client_Secret=").concat(c);m.a.get(t).then((function(e){j(e.data)})).catch((function(e){console.log(e)}))},C={value:f,userDetails:a,userRepos:b,onChangeHandler:function(e){v(e.target.value)},onSubmitHandler:function(e){N(x,O,f),w(x,O,f),v("")}};return Object(h.jsx)(g.Provider,{value:C,children:e.children})},f=g,v=function(){var e=Object(t.useContext)(f);return Object(h.jsxs)("nav",{className:"navbar px-4 navbar-dark bg-info navbar-expand-sm",children:[Object(h.jsx)("a",{href:"",className:"navbar-brand",children:"GitHub Search"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSearch",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"navbar-collapse collapse",id:"navbarSearch",children:Object(h.jsxs)("form",{className:"form-inline search-form  align-items-center row ",onSubmit:function(c){c.preventDefault(),e.onSubmitHandler()},children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",value:e.value,onChange:function(c){e.onChangeHandler(c)}})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("button",{className:"btn btn-outline-warning mt-3\r btn-sm my-sm-0",children:"Search"})})]})})]})},N=function(){var e=Object(t.useContext)(f).userRepos;return console.log(e),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header bg-success text-white",children:Object(h.jsx)("h2",{children:"Our Repository"})}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("ul",{className:"list-group",children:e.map((function(e){return Object(h.jsx)("li",{className:"list-group-item",children:Object(h.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(h.jsx)("a",{href:e.html_url,children:e.html_url}),Object(h.jsx)("span",{className:"badge badge-success",children:e.starred_url}),Object(h.jsx)("span",{className:"badge badge-info",children:e.watchers}),Object(h.jsx)("span",{className:"badge badge-warning",children:e.forks})]})})}))})})]})})},w=function(){var e=Object(t.useContext)(f).userDetails;return console.log(e),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("div",{className:"card-header bg-secondary text-white",children:[Object(h.jsx)("h2",{children:"User Details"}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("span",{className:"badge badge-danger mx-2",children:["followers ",e.followers]}),Object(h.jsxs)("span",{className:"badge badge-primary mx-2",children:["following ",e.following]}),Object(h.jsxs)("span",{className:"badge badge-warning mx-2",children:["Git ",e.public_gists]}),Object(h.jsxs)("span",{className:"badge badge-primary mx-2",children:["Repository ",e.public_repos]})]})]}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("ul",{className:"list-group",children:[Object(h.jsxs)("ul",{className:"list-group-item",children:["Name: ",e.name]}),Object(h.jsxs)("ul",{className:"list-group-item",children:["Bio: ",e.bio]}),Object(h.jsxs)("ul",{className:"list-group-item",children:["Email: ",e.email]}),Object(h.jsxs)("ul",{className:"list-group-item",children:["Contact: ",Object(h.jsx)("a",{href:e.blog,children:e.blog})," "]}),Object(h.jsxs)("ul",{className:"list-group-item",children:["Location: ",e.location]}),Object(h.jsxs)("ul",{className:"list-group-item",children:["Members since: ",e.updated_at]}),Object(h.jsxs)("ul",{className:"list-group-item",children:["Profile Url since: ",e.url]})]})})]})})},C=function(){var e=Object(t.useContext)(f);return Object(h.jsxs)("div",{className:"card text-center",children:[Object(h.jsx)("div",{className:"card-header text-center bg-danger text-white",children:Object(h.jsx)("h2",{children:"Profile"})}),Object(h.jsxs)("div",{className:"card-body ",children:[Object(h.jsx)("img",{src:e.userDetails.avatar_url,className:"w-100 card-img rounded-circle",alt:""}),Object(h.jsxs)("ul",{className:"list-group mt-2",children:[Object(h.jsxs)("li",{className:"list-group-item",children:["Name: ",e.userDetails.name]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Bio: ",e.userDetails.bio]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Location: ",e.userDetails.location]})]})]})]})};var S=function(){var e=Object(t.useContext)(f);return console.log(Object.keys(e.userDetails).length),Object(h.jsxs)(p,{children:[Object(h.jsx)(v,{}),0===Object.keys(e.userDetails).length&&Object(h.jsx)("div",{className:"container mt-3",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)(C,{})}),Object(h.jsx)("div",{className:"col-md-9",children:Object(h.jsx)(w,{})})]})}),Object(h.jsx)("div",{className:"container mt-3",children:Object(h.jsx)("section",{className:"row ",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(N,{})})})})]})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,n=c.getLCP,r=c.getTTFB;s(e),t(e),a(e),n(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),y()}},[[47,1,2]]]);
//# sourceMappingURL=main.5ba33f4f.chunk.js.map