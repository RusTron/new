(this.webpackJsonpnew_app=this.webpackJsonpnew_app||[]).push([[0],{185:function(e,a,t){},200:function(e,a,t){e.exports=t.p+"static/media/wezom-logo.324b96ae.svg"},201:function(e,a,t){e.exports=t.p+"static/media/backdrop.f7eab148.jpg"},238:function(e,a,t){e.exports=t(412)},318:function(e,a,t){},319:function(e,a,t){},320:function(e,a,t){},323:function(e,a,t){},324:function(e,a,t){},345:function(e,a,t){},365:function(e,a,t){},376:function(e,a,t){},394:function(e,a,t){},404:function(e,a,t){},411:function(e,a,t){},412:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(27),l=t.n(c),o=t(67),i=t(76),m=t(83),u=t(42),s=t(171),E=function(e){return{type:"SETPEOPLE",peopleData:e}},d=function(e){return{type:"FILTERBYNAME",searchValue:e}},f=function(e){return{type:"SETSELECTEDGENDER",selectedGender:e}},p=function(e){return{type:"SETSELECTEDNATIONALITY",selectedNationality:e}},_=function(){return{type:"CLEARFORM",clear:!0}},O=function(e){return{type:"CLEARDATA",data:e}},b=function(){return{peopleData:[],searchValue:"",selectedNationality:[],selectedGender:"",clear:!1,data:!0,error:!1}},v=t(421),S=Object(m.b)({people:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SETERROR":return Object(u.a)(Object(u.a)({},e),{},{error:a.error});case"SETPEOPLE":return Object(u.a)(Object(u.a)({},e),{},{peopleData:a.peopleData});case"FILTERBYNAME":return Object(u.a)(Object(u.a)({},e),{},{searchValue:a.searchValue});case"SETSELECTEDGENDER":return Object(u.a)(Object(u.a)({},e),{},{selectedGender:a.selectedGender});case"SETSELECTEDNATIONALITY":return Object(u.a)(Object(u.a)({},e),{},{selectedNationality:Object(s.a)(a.selectedNationality)});case"CLEARFORM":return Object(u.a)(Object(u.a)({},e),{},{searchValue:"",selectedNationality:"",selectedGender:"",clear:!1});case"CLEARDATA":return Object(u.a)(Object(u.a)({},e),{},{data:a.data});default:return e}},form:v.a}),g=Object(m.d)(S),N=(t(318),t(36)),T=(t(319),t(416)),y=(Object({NODE_ENV:"production",PUBLIC_URL:"/new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ALLOW_DEV_CONSOLE,Object({NODE_ENV:"production",PUBLIC_URL:"/new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ALLOW_REDUX_DEVTOOLS_EXTENSION,Object({NODE_ENV:"production",PUBLIC_URL:"/new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ALLOW_WINDOW_EXTENDS,Object({NODE_ENV:"production",PUBLIC_URL:"/new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_NAME||"Wezom React-Redux Test"),h=(Object({NODE_ENV:"production",PUBLIC_URL:"/new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,Object({NODE_ENV:"production",PUBLIC_URL:"/new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_VERSION,Object({NODE_ENV:"production",PUBLIC_URL:"/new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_CONTACTS_SEED_KEY,Object({NODE_ENV:"production",PUBLIC_URL:"/new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_HISTORY_BASENAME,t(103)),C=t(61),D=t(68),A=t(429),j=(t(320),t(321),t(200)),P=t.n(j),w=r.a.memo((function(){return r.a.createElement(i.b,{to:"/home",className:"logo",activeClassName:"is-active",exact:!0},r.a.createElement("img",{className:"logo__img",src:P.a,alt:"Wezom"}))})),I=(t(323),Object(m.c)(Object(o.b)((function(e){return{}}),null))((function(e){var a=e.location;return console.log(a),r.a.createElement("div",{className:"navbar"},r.a.createElement("ul",{className:"navbar__list"},r.a.createElement("li",{className:"navbar__item"},r.a.createElement(i.b,{to:"/home",className:"navbar__link",activeClassName:"active-link"},"Home"),r.a.createElement(i.b,{to:"/contacts",className:"navbar__link",activeClassName:"active-link"},"Contacts"))))}))),R=(t(324),t(185),function(){return r.a.createElement(h.a,{type:"flex",gutter:16,align:"middle"},r.a.createElement(C.a,null,r.a.createElement(w,null)),r.a.createElement(C.a,{className:"_flex-grow"},r.a.createElement(h.a,{type:"flex",align:"middle"},r.a.createElement(C.a,{className:"_flex-grow"},r.a.createElement(I,null)),r.a.createElement(C.a,null,r.a.createElement(D.a,{type:"link",htmlType:"button",icon:r.a.createElement(A.a,null)},"Sign In")))))}),L=t(201),k={content:{backgroundImage:"url(".concat(t.n(L).a,")")}},W=r.a.memo((function(e){var a=e.children,t=Object(n.useMemo)((function(){return(new Date).getFullYear()}),[]);return r.a.createElement(T.a,{className:"layout layout--base"},r.a.createElement(T.a.Header,{className:"layout__header"},r.a.createElement(R,null)),r.a.createElement(T.a.Content,{className:"layout__content",style:k.content},a),r.a.createElement(T.a.Footer,{className:"layout__footer"},t," \xa9 ",y))})),K=t(128),x=t(82),F=t(118),H=t(420),U=t(425),B=t(119),V=t(430),M=(t(2),t(108),t(345),F.a.Option),G=function(e){var a=e.view,t=Object(n.useState)(""),c=Object(x.a)(t,2),l=c[0],i=c[1],m=H.a.useForm(),u=Object(x.a)(m,1)[0],s=Object(n.useState)(!1),E=Object(x.a)(s,2),b=E[0],v=E[1],S=Object(n.useState)(!1),g=Object(x.a)(S,2),N=g[0],T=g[1],y=Object(o.d)((function(e){var a=e.people;return a.peopleData&&a.peopleData.map((function(e){return e.nationality.name})).filter((function(e,a,t){return t.indexOf(e)===a}))})),A=Object(o.c)();Object(n.useEffect)((function(){u.resetFields(),j(),P({checked:!1})}),[a]);var j=function(){i("");var e=_();A(e)},P=function(e){var a=e.checked,t=O(a);A(t)};return r.a.createElement("div",{className:"contacts-form"},r.a.createElement(H.a,{layout:"horizontal",form:u},r.a.createElement(h.a,null,r.a.createElement(C.a,{className:"gutter-row"},r.a.createElement(H.a.Item,{name:"query"},r.a.createElement(U.a.Search,{placeholder:"Search by full name",value:l,onChange:function(e){return function(e){i(e);var a=d(e);A(a)}(e.target.value)},allowClear:!0}))),r.a.createElement(C.a,{className:"gutter-row"},r.a.createElement(H.a.Item,{name:"gender"},r.a.createElement(F.a,{placeholder:"Gender",allowClear:!0,onChange:function(e){T(!!e);var a=f(e);A(a)},className:"select-gender"},r.a.createElement(M,{value:"male"},"Male"),r.a.createElement(M,{value:"female"},"Female"),r.a.createElement(M,{value:"inderterminate"},"Identerminate")))),r.a.createElement(C.a,{className:"gutter-row"},r.a.createElement(H.a.Item,{name:"nationality"},r.a.createElement(F.a,{mode:"multiple",placeholder:"Nationality",optionLabelProp:"label",onChange:function(e){e.length?T(!0):T(!1);var a=p(e);A(a)}},y&&y.map((function(e){return r.a.createElement(M,{value:e,label:e,key:e},r.a.createElement("div",{className:"demo-option-label-item",key:e},r.a.createElement("span",{role:"img","aria-label":e,key:e}),e))}))))),r.a.createElement(H.a.Item,null,r.a.createElement(C.a,{className:"gutter-row form-checkox"},r.a.createElement(B.a,{checked:b,onChange:function(e){var a=e.target;P(a),v(!b)}},"I am creator"))),r.a.createElement(D.a,{type:"link",onClick:function(){u.resetFields(),j(),v(!1),P({checked:!1})},className:"clear-button",disabled:!N&&!l&&!b},r.a.createElement(V.a,null),"Clear"))))},z=t(423),Y=t(426),J=(t(365),function(e){var a=e.people,t=0,n=0,c=0;a.forEach((function(e){switch(e.gender){case"male":t++;break;case"female":n++;break;default:c++}}));var l={};return a.forEach((function(e){return l.hasOwnProperty(e.nationality.name)?l[e.nationality.name]++:l[e.nationality.name]=1})),console.log(l),r.a.createElement("div",{className:"ant-statistic-footer"},r.a.createElement(h.a,{gutter:16},r.a.createElement(C.a,{span:3},r.a.createElement(z.a,{title:"Collection size",value:a.length})),r.a.createElement(C.a,{span:6},r.a.createElement(h.a,{gutter:16},r.a.createElement(C.a,{span:4},r.a.createElement(z.a,{title:"Males",value:t})),r.a.createElement(C.a,{span:5},r.a.createElement(z.a,{title:"Females",value:n})),r.a.createElement(C.a,{span:4},r.a.createElement(z.a,{title:"Indeterminate",value:c}))),r.a.createElement("div",{className:"statistic__dominate"},t>n?"Men predominate":"Women predominate"))),r.a.createElement("div",{className:"ant-description-box"},r.a.createElement(Y.a,{title:"Nationalities",size:"middle",column:6},Object.keys(l).map((function(e){return r.a.createElement(Y.a.Item,{label:e,key:e},l[e])})))))}),X=t(422),Z=t(424),q=t(427),$=t(229),Q=(t(376),X.a.Paragraph),ee=[{title:"Avatar",dataIndex:"picture",key:"picture",render:function(e){return r.a.createElement(Z.a,{size:"large",src:e.thumbnail})}},{title:"Full-name",dataIndex:"name",key:"name",render:function(e){return r.a.createElement("a",null,e)},sorter:function(e,a){return e.name.localeCompare(a.name)}},{title:"Birthday",dataIndex:"dob",key:"dob",render:function(e){var a=new Date(e.date).toLocaleTimeString("en-us",{weekday:"long",year:"numeric",month:"numeric",day:"numeric"});return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"".concat(a)),r.a.createElement("p",null,"".concat(e.age," years")))}},{title:"Email",dataIndex:"email",key:"email",render:function(e){return r.a.createElement("div",{className:"one_row"},r.a.createElement(Q,{copyable:{text:e}}),r.a.createElement("a",null,e))}},{title:"Phone",dataIndex:"phone",key:"phone",text:"location",render:function(e,a){console.log(a);var t=new $.a(a.nat).input(e);return r.a.createElement("div",{className:"one_row"},r.a.createElement(Q,{copyable:{text:t}}),r.a.createElement("a",null,t))}},{title:"Location",dataIndex:"location",key:"location",render:function(e){var a=e.country,t=e.street,n=e.city,c=e.state,l=e.postcode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{copyable:{text:"".concat(t.number," ").concat(t.name,", ").concat(n,", ").concat(c," ").concat(l)},className:"ant__location"}),r.a.createElement("div",{className:"address"},r.a.createElement("p",{className:"address-country"},"/".concat(a,"/")),r.a.createElement("span",null,"".concat(t.number," ").concat(t.name,", ").concat(n,", ").concat(c," ").concat(l))))}},{title:"Nationality",key:"nationality",dataIndex:"nationality",align:"center",render:function(e){return r.a.createElement(q.a,{color:e.color},e.name)}}],ae={AU:{name:"Australian",color:"magenta"},BR:{name:"Brazilian",color:"red"},CA:{name:"Canadian",color:"volcano"},CH:{name:"Swiss",color:"orange"},DE:{name:"German",color:"gold"},DK:{name:"Danish",color:"lime"},ES:{name:"Spanish",color:"green"},FI:{name:"Finnish",color:"cyan"},FR:{name:"French",color:"blue"},GB:{name:"British",color:"geekblue"},IE:{name:"Irish",color:"purple"},IR:{name:"Iranian",color:"#f50"},NO:{name:"Norwegian",color:"#2db7f5"},NL:{name:"Dutch",color:"#87d068"},NZ:{name:"New Zealander",color:"#9e1068"},TR:{name:"Turkish",color:"#ffd666"},US:{name:"American"}},te=t(235),ne=t(151),re=t(418),ce=t(419),le=t(428),oe=t(417),ie=(t(394),ce.a.Meta),me=function(e){var a=e.people,t=(e.title,e.columns);return r.a.createElement(le.b,{grid:{gutter:4,column:3},dataSource:a,header:r.a.createElement(G,null),footer:r.a.createElement(J,{people:a}),pagination:{onChange:function(e){},pageSize:6},className:"list__card-container",renderItem:function(e){var a=e.picture,n=e.name,c=e.dob,l=e.email,o=e.phone,i=e.nat,m=e.location,u=e.nationality;return r.a.createElement(le.b.Item,{xs:5},r.a.createElement(ce.a,{hoverable:!0,width:"100%",cover:r.a.createElement(Z.a,{className:"list__avatar",size:"large",src:a.large})},r.a.createElement(ie,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",null,n),r.a.createElement("span",{className:"list__person-age"}," (".concat(c.age," years)")),r.a.createElement(oe.a,{dashed:!0})),description:r.a.createElement(r.a.Fragment,null,t.find((function(e){return"email"===e.key})).render(l),t.find((function(e){return"phone"===e.key})).render(o,i),t.find((function(e){return"location"===e.key})).render(m),r.a.createElement(oe.a,{dashed:!0}),t.find((function(e){return"nationality"===e.key})).render(u))})))}})},ue=Math.ceil(1e3*Math.random());console.log(ue);var se=t(431),Ee=t(432),de=t(433),fe=(t(404),function(){var e=Object(n.useState)(!1),a=Object(x.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(localStorage.getItem("view")&&JSON.parse(localStorage.getItem("view"))||"table"),i=Object(x.a)(l,2),m=i[0],d=i[1],f=function(e){localStorage.setItem("view",JSON.stringify(e)),d(e)},p=Object(o.c)(),_=function(){return fetch("".concat("https://randomuser.me/api/?results=").concat(ue)).then((function(e){return e.json()})).catch((function(e){return{error:e}})).then((function(e){if(e.error)return console.log(e.error),void O("error");var a=E(e.results.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{name:"".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last),nationality:ae[e.nat]})})));p(a),c(!1)}))},O=function(e){te.a[e]({message:"Network Error",description:"Please, try again later"})};Object(n.useEffect)((function(){_()}),[]);var b=Object(o.d)((function(e){return function(e){var a=e.people,t=a.peopleData,n=a.searchValue,r=a.selectedNationality,c=a.selectedGender,l=a.data,o=[];return console.log(a),l||(t&&(o=Object(s.a)(t)),n&&(o=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))),r&&r.length&&(o=o.filter((function(e){return r.includes(e.nationality.name)}))),c&&(o=o.filter((function(e){return e.gender===c})))),o}(e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contacts__title"},r.a.createElement("span",null,r.a.createElement("h1",{className:"contacts__title-text"},"Contacts")),r.a.createElement(D.a,{shape:"circle",icon:r.a.createElement(se.a,null),onClick:function(){c(!0),_()},loading:t}),r.a.createElement(ne.a.Group,{defaultValue:m},r.a.createElement(D.a,{value:"table",onClick:function(){return f("table")},type:"table"===m&&"primary"},r.a.createElement(Ee.a,null)),r.a.createElement(D.a,Object(K.a)({type:"button",value:"gallery",onClick:function(){return f("gallery")}},"type","gallery"===m&&"primary"),r.a.createElement(de.a,null)))),"table"===m?r.a.createElement(re.a,{columns:ee,dataSource:b,title:function(){return r.a.createElement(G,{view:m})},footer:function(){return r.a.createElement(J,{people:b})}}):r.a.createElement(me,{people:b,columns:ee,title:function(){return r.a.createElement(G,{view:m})},footer:function(){return r.a.createElement(J,{people:b})}}))}),pe=(t(411),function(){return r.a.createElement(W,null,r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/contacts",component:fe})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,{store:g},r.a.createElement(i.a,null,r.a.createElement(pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[238,1,2]]]);
//# sourceMappingURL=main.09255381.chunk.js.map