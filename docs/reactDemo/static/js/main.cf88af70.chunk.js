(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n.n(i),s=n(17),r=n.n(s),a=(n(23),n(7)),j=n.p+"static/media/logo.6ce24c58.svg",o=(n(24),n(5)),u=n(6),d=n(18),l=n.n(d),h=function(){function e(t,n,i,c){Object(o.a)(this,e),this._id=void 0,this._email=void 0,this._first_name=void 0,this._last_name=void 0,this._id=t,this._email=n,this._first_name=i,this._last_name=c}return Object(u.a)(e,[{key:"id",get:function(){return this._id}},{key:"email",get:function(){return this._email}},{key:"first_name",get:function(){return this._first_name}},{key:"last_name",get:function(){return this._last_name}}]),e}(),b=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"getUsers",value:function(){return l.a.get(e.apiURL+"users?page=2").then((function(e){var t=e.data.data.map((function(e){return new h(e.id,e.email,e.first_name,e.last_name)}));return Promise.resolve(t)}))}}]),e}();b.apiURL="https://reqres.in/api/";n(43);var f=n(0);var m=function(e){var t=Object(i.useState)([]),n=Object(a.a)(t,2),c=n[0],s=n[1];return Object(i.useEffect)((function(){return s(e.users)}),[e.users]),Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"ID"}),Object(f.jsx)("th",{children:"Firstname"}),Object(f.jsx)("th",{children:"Lastname"}),Object(f.jsx)("th",{children:"Action"})]})}),Object(f.jsx)("tbody",{children:c.map((function(t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:t.id}),Object(f.jsx)("td",{children:t.first_name}),Object(f.jsx)("td",{children:t.last_name}),Object(f.jsx)("td",{children:t.email}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{onClick:function(){return e.onDeleteUser(t)},children:"Delete"})})]})}))})]})};var O=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){b.getUsers().then(c)}),[]),Object(f.jsxs)("div",{className:"app",children:[Object(f.jsxs)("div",{className:"toolbar",role:"banner",children:[Object(f.jsx)("img",{width:"40",alt:"React Logo",src:j}),Object(f.jsx)("span",{children:"React Demo"}),Object(f.jsx)("div",{className:"spacer"})]}),Object(f.jsx)("div",{className:"content",role:"main",children:Object(f.jsx)(m,{users:n,onDeleteUser:function(e){c(n.filter((function(t){return t.id!==e.id})))}})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),x()}},[[45,1,2]]]);
//# sourceMappingURL=main.cf88af70.chunk.js.map