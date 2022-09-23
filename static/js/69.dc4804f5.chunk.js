"use strict";(self.webpackChunk_kie_chain_status_webpage=self.webpackChunk_kie_chain_status_webpage||[]).push([[69],{4069:function(e,t,n){n.r(t),n.d(t,{Header:function(){return L},default:function(){return M}});var l=n(3028),i=n(6234),a=n(969),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M788 705.9V192c0-8.8-7.2-16-16-16H602v-68.8c0-6-7-9.4-11.7-5.7L462.7 202.3a7.14 7.14 0 000 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V240h114v465.9c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c.1-49.2-31.7-91-75.9-106.1zM752 860a48.01 48.01 0 010-96 48.01 48.01 0 010 96zM384 212c0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1V318.1c44.2-15.1 76-56.9 76-106.1zm-160 0a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm96 600a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0z"}}]},name:"pull-request",theme:"outlined"},o=n(2717),r=function(e,t){return a.createElement(o.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:s}))};r.displayName="PullRequestOutlined";var c=a.forwardRef(r),u=n(7471),d=n(5267),f=n(4157),x=n(2363),p=n(4454),j=n(7099),v=n(6602),Z=n(4419),h=n(4071),m=n(9717),g=n(7798),b=n(3679),y=n(7207),S=n(3275),R=n(2426),z=n.n(R),k=n(9369),w=n(9400),E=n(1089),_=n(9629),q=n(7347),A=n(6829),C=n(7574),N=a.lazy((function(){return n.e(116).then(n.bind(n,4116))})),D=a.lazy((function(){return Promise.all([n.e(53),n.e(489)]).then(n.bind(n,2489))})),H=a.lazy((function(){return n.e(273).then(n.bind(n,2273))})),V=a.lazy((function(){return n.e(551).then(n.bind(n,9551))})),L=function(e){var t,n,s,o,r,R,L,M,T,I=(0,k.I0)(),P=(0,k.v9)((function(e){return e.pullrequestFilter.filteredData})),B=(0,k.v9)((function(e){return e.data.loading})),G=(0,a.useState)(new Date),W=(0,i.Z)(G,2),O=W[0],U=W[1],F=(0,a.useState)([]),J=(0,i.Z)(F,2),K=J[0],Q=J[1],X=(0,k.v9)((function(e){return e.product.selectedProduct}));(0,a.useEffect)((function(){null!==P&&void 0!==P&&P.projects?(U(new Date),Q(P.projects.flatMap((function(e){return e.pullRequests})))):Q([])}),[P]);return(0,C.jsx)(j.Z,{style:{margin:24,marginTop:10},children:(0,C.jsx)(v.Z,{title:null!==(t=P.metadata)&&void 0!==t&&t.title?(0,C.jsx)(Z.Z.Title,{level:2,children:null===(n=P.metadata)||void 0===n?void 0:n.title}):(0,C.jsx)(p.Z.Input,{style:{width:200,height:55.5}}),subTitle:null!==(s=null===(o=P.metadata)||void 0===o?void 0:o.subtitle)&&void 0!==s?s:(0,C.jsx)(p.Z.Input,{style:{width:400}}),style:{padding:0},extra:[(0,C.jsx)(a.Suspense,{fallback:(0,C.jsx)(p.Z.Input,{style:{width:100}}),children:(0,C.jsx)(N,{reloadAction:function(){null!==X&&void 0!==X&&X.folder&&I(w.mu("".concat(null===X||void 0===X?void 0:X.folder,"/latest.json")))},loading:B})}),(0,C.jsx)(h.Z,{title:"Show project status information",children:(0,C.jsx)(m.Z,{type:"text",shape:"circle",icon:(0,C.jsx)(u.Z,{}),onClick:function(){return x.Z.info({content:(0,C.jsx)(a.Suspense,{fallback:(0,C.jsx)(p.Z,{}),children:(0,C.jsx)(D,{})}),onOk:function(){},width:1e3,centered:!0})}},"info")},"info")],children:(0,C.jsxs)(g.Z,{gutter:16,children:[(0,C.jsx)(b.Z,{children:(0,C.jsx)(y.Z,{title:"Generated By",value:null===(r=P.metadata)||void 0===r?void 0:r.createdBy,valueStyle:E.AR,suffix:null!==(R=P.metadata)&&void 0!==R&&R.createdUrl?(0,C.jsx)(h.Z,{title:"Visit job generating the report",children:(0,C.jsx)(m.Z,{type:"link",href:null===(L=P.metadata)||void 0===L?void 0:L.createdUrl,target:"_blank",icon:(0,C.jsx)(d.Z,{}),style:(0,l.Z)((0,l.Z)({padding:0},E.AR),{},{fontWeight:"bold"})})}):null})}),(0,C.jsx)(b.Z,{children:(0,C.jsx)(S.Z,{content:(0,C.jsx)(a.Suspense,{fallback:(0,C.jsx)(_.Z,{}),children:(0,C.jsx)(H,{projects:P.projects,size:12})}),placement:"bottom",children:(0,C.jsx)(y.Z,{title:"Number of Projects",prefix:(0,C.jsx)(f.Z,{}),value:P.projects.length,valueStyle:(0,l.Z)((0,l.Z)({},E.AR),{},{fontWeight:"bold"})})})}),(0,C.jsx)(b.Z,{children:(0,C.jsx)(S.Z,{content:(0,C.jsx)(a.Suspense,{fallback:(0,C.jsx)(_.Z,{}),children:(0,C.jsx)(H,{projects:P.projects,size:12})}),placement:"bottom",children:(0,C.jsx)(y.Z,{title:"Number of Pull Requests",prefix:(0,C.jsx)(c,{}),value:K.length,valueStyle:E.AR})})}),(0,C.jsx)(b.Z,{children:(0,C.jsx)(q.Z,{title:"Error Index",pullRequests:K,placement:"bottom",popoverContent:(0,C.jsx)(a.Suspense,{fallback:(0,C.jsx)(_.Z,{}),children:(0,C.jsx)(V,{projects:P.projects})})})}),(0,C.jsx)(b.Z,{children:(0,C.jsx)(a.Suspense,{fallback:(0,C.jsx)(_.Z,{style:{fontSize:16}}),children:(0,C.jsx)(A.Z,{date:null!==(M=P.metadata)&&void 0!==M&&M.date?z()(new Date(Date.parse(null===(T=P.metadata)||void 0===T?void 0:T.date))).format(E.sR):void 0,text:"Creation Date"})})}),(0,C.jsx)(b.Z,{children:(0,C.jsx)(a.Suspense,{fallback:(0,C.jsx)(_.Z,{style:{fontSize:16}}),children:(0,C.jsx)(A.Z,{date:z()(O).format(E.sR),text:"Latest Load"})})})]})})})},M=L},7347:function(e,t,n){var l=n(3028),i=n(6234),a=n(3275),s=n(7207),o=n(4071),r=n(7471),c=n(969),u=n(1089),d=n(6946),f=n(7574);t.Z=function(e){var t=(0,c.useState)(void 0),n=(0,i.Z)(t,2),x=n[0],p=n[1],j=(0,c.useState)(u.po.GREEN),v=(0,i.Z)(j,2),Z=v[0],h=v[1],m=e.size?{fontSize:e.size}:u.AR;return(0,c.useEffect)((function(){var t;if(null!==(t=e.pullRequests)&&void 0!==t&&t.length){var n=(0,d.a)(e.pullRequests);p(n),h(n<=20?u.po.GREEN:u.po.RED)}else p(void 0),h(u.po.GREEN)}),[e.pullRequests]),e.popoverContent?(0,f.jsx)(a.Z,{content:e.popoverContent,placement:e.placement,children:(0,f.jsx)(s.Z,{prefix:(0,f.jsx)(o.Z,{title:"This index is calculated by n_failures/n_checks",children:(0,f.jsx)(r.Z,{style:{fontSize:12}})}),title:e.title,value:x,precision:2,valueStyle:(0,l.Z)((0,l.Z)({},m),{},{color:Z,fontWeight:"bold"}),suffix:"%"})}):(0,f.jsx)(s.Z,{title:e.title,value:x,precision:2,valueStyle:(0,l.Z)((0,l.Z)({},m),{},{color:Z,fontWeight:"bold"}),suffix:"%"})}},6829:function(e,t,n){var l=n(4071),i=n(7207),a=(n(969),n(1089)),s=n(7574);t.Z=function(e){return e.tooltipTitle?(0,s.jsx)(l.Z,{title:e.tooltipTitle,children:(0,s.jsx)(i.Z,{title:e.text,loading:!e.date,valueStyle:a.AR,value:e.date?e.date.toLocaleString():void 0})}):(0,s.jsx)(i.Z,{title:e.text,loading:!e.date,valueStyle:a.AR,value:e.date?e.date.toLocaleString():void 0})}},4157:function(e,t,n){n.d(t,{Z:function(){return r}});var l=n(3028),i=n(969),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M952 612c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H298a95.92 95.92 0 00-89-60c-53 0-96 43-96 96s43 96 96 96c40.3 0 74.8-24.8 89-60h150.3v152c0 55.2 44.8 100 100 100H952c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H548.3c-15.5 0-28-12.5-28-28V612H952zM451.7 313.7l172.5 136.2c6.3 5.1 15.8.5 15.8-7.7V344h264c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H640v-98.2c0-8.1-9.4-12.8-15.8-7.7L451.7 298.3a9.9 9.9 0 000 15.4z"}}]},name:"node-collapse",theme:"outlined"},s=n(2717),o=function(e,t){return i.createElement(s.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:a}))};o.displayName="NodeCollapseOutlined";var r=i.forwardRef(o)}}]);
//# sourceMappingURL=69.dc4804f5.chunk.js.map