(this["webpackJsonptf-react"]=this["webpackJsonptf-react"]||[]).push([[0],{100:function(e,t,a){},244:function(e,t){},253:function(e,t,a){var n={"./test.md":254};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=253},254:function(e,t,a){e.exports=a.p+"static/media/test.f96135b7.md"},268:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(85),c=a.n(r),i=(a(96),a(97),a(98),a(99),a(7)),m=a(14),o=(a(100),a(1)),s=a(3),u=a.n(s),d=a(5),E=a.n(d);var p=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){u.a.get("/api/information").then((function(e){c(e.data.socialLinks)}))}),[]),l.a.createElement("ul",{className:e.bordered?"mi-socialicons mi-socialicons-bordered":"mi-socialicons"},r.facebook?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.facebook},l.a.createElement(E.a,{name:"facebook"}))):null,r.twitter?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.twitter},l.a.createElement(E.a,{name:"twitter"}))):null,r.pinterest?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.pinterest},l.a.createElement(E.a,{name:"pinterest"}))):null,r.behance?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.behance},l.a.createElement(E.a,{name:"behance"}))):null,r.linkedin?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.linkedin},l.a.createElement(E.a,{name:"linkedin"}))):null,r.dribbble?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.dribbble},l.a.createElement(E.a,{name:"dribbble"}))):null,r.github?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.github},l.a.createElement(E.a,{name:"github"}))):null)};var b=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),m=Object(o.a)(c,2),s=m[0],d=m[1];return Object(n.useEffect)((function(){u.a.get("/api/information").then((function(e){r(e.data)}))}),[]),l.a.createElement("nav",{className:s?"mi-header is-visible":"mi-header"},l.a.createElement("button",{onClick:function(){d(!s)},className:"mi-header-toggler"},s?l.a.createElement(E.a,{name:"close"}):l.a.createElement(E.a,{name:"menu"})),l.a.createElement("div",{className:"mi-header-inner"},l.a.createElement("div",{className:"mi-header-image"},l.a.createElement(i.b,{to:"/home"},l.a.createElement("img",{src:a.brandImage,alt:"brandimage"}))),l.a.createElement("ul",{className:"mi-header-mennpmu"},l.a.createElement("li",null,l.a.createElement(i.c,{to:"/home"},l.a.createElement("span",null,"Home"))),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/about"},l.a.createElement("span",null,"About"))),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/resume"},l.a.createElement("span",null,"Resume"))),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/portfolio"},l.a.createElement("span",null,"Portfolio"))),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/blog"},l.a.createElement("span",null,"Blog"))),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/contact"},l.a.createElement("span",null,"Contact")))),l.a.createElement("p",{className:"mi-header-copyright"},"\xa9 ",(new Date).getFullYear()," ",l.a.createElement("b",null,"Clayton Redmon"),l.a.createElement("br",null),l.a.createElement("span",{className:"mi-smallfont"},l.a.createElement("a",{href:"https://reactjs.org/"},"Built with React.")))))},g=a(88),v=a.n(g);var f=function(e){return l.a.createElement("div",{className:"mi-particles-wrapper"},l.a.createElement(v.a,{className:"mi-particles-part",params:{particles:{number:{value:123,density:{enable:!0,value_area:1920}},line_linked:{enable:!0,opacity:.2},move:{direction:"up",speed:.5},size:{value:0},opacity:{anim:{enable:!0,speed:2,opacity_min:.1}}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}},retina_detect:!0}}))};var h=function(e){return l.a.createElement("div",{className:"mi-wrapper"},l.a.createElement(f,{params:{particles:{number:{value:123,density:{enable:!0,value_area:1920}},line_linked:{enable:!0,opacity:.2},move:{direction:"up",speed:.5},size:{value:0},opacity:{anim:{enable:!0,speed:2,opacity_min:.1}}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}},retina_detect:!0}}),l.a.createElement(b,null),e.children)};var N=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){u.a.get("/api/information").then((function(e){r(e.data)}))}),[]),l.a.createElement(h,null,l.a.createElement("div",{className:"mi-home-area mi-padding-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-10 col-12"},l.a.createElement("div",{className:"mi-home-content"},l.a.createElement("h1",null,"My name is ",l.a.createElement("span",{className:"color-theme"},a.nickname)),l.a.createElement("p",null,a.aboutConcise),l.a.createElement(p,{bordered:!0})))))))},y=a(23),j=a.n(y),w=a(269);var k=function(e){return l.a.createElement("div",{className:"mi-sectiontitle"},l.a.createElement("h2",null,e.title),l.a.createElement("span",null,e.title))};var O=function(e){return l.a.createElement("div",{className:"mi-service"},l.a.createElement("span",{className:"mi-service-icon"},l.a.createElement(E.a,{name:e.content.icon})),l.a.createElement("h5",null,e.content.title),l.a.createElement("p",null,e.content.details))};var S=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),m=i[0],s=i[1],d=Object(n.useState)([]),E=Object(o.a)(d,2),p=E[0],b=E[1],g=Object(n.useState)([]),v=Object(o.a)(g,2),f=(v[0],v[1]);return Object(n.useEffect)((function(){u.a.get("/api/information").then((function(e){s(e.data)})),u.a.get("/api/services").then((function(e){b(e.data)})),u.a.get("/api/reviews").then((function(e){f(e.data)}))}),[]),l.a.createElement(h,null,l.a.createElement("div",{className:"mi-about-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"About"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-about-image"},l.a.createElement("img",{src:m.aboutImage,alt:"about",onClick:function(){r({toggler:!a})}}),l.a.createElement("span",{className:"mi-about-image-icon"},l.a.createElement(w.a,null)),l.a.createElement(j.a,{toggler:a,sources:[m.aboutImageLg]}))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-about-content"},l.a.createElement("h3",null,"My name is ",l.a.createElement("span",{className:"color-theme"},m.nickname),"."),l.a.createElement("p",null,m.aboutContent),l.a.createElement("ul",null,m.name?l.a.createElement("li",null,l.a.createElement("b",null,"Full Name")," ",m.name):null,m.age?l.a.createElement("li",null,l.a.createElement("b",null,"Age")," ",m.age):null,m.phone?l.a.createElement("li",null,l.a.createElement("b",null,"Phone")," ",m.phone):null,m.language?l.a.createElement("li",null,l.a.createElement("b",null,"Languages")," ",m.language):null,m.email?l.a.createElement("li",null,l.a.createElement("b",null,"Email")," ",m.email):null,m.freelanceStatus?l.a.createElement("li",null,l.a.createElement("b",null,"Freelance")," ",m.freelanceStatus):null),l.a.createElement("a",{href:m.resumefile,className:"mi-button"},"Download Resume")))))),l.a.createElement("div",{className:"mi-service-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"Services"}),l.a.createElement("div",{className:"mi-service-wrapper"},l.a.createElement("div",{className:"row mt-30-reverse"},p.map((function(e){return l.a.createElement("div",{className:"col-lg-4 col-md-6 col-12 mt-30",key:e.title},l.a.createElement(O,{content:e}))})))))))},C=a(18),M=a.n(C);var x=function(e){return l.a.createElement("div",{className:"mi-smalltitle"},l.a.createElement("span",{className:"mi-smalltitle-icon"},l.a.createElement(E.a,{name:e.icon})),l.a.createElement("h4",null,e.title))};var I=function(e){return l.a.createElement("div",{className:"mi-progress"},l.a.createElement("h6",{className:"mi-progress-title"},e.title),l.a.createElement("div",{className:"mi-progress-inner"},l.a.createElement("div",{className:"mi-progress-percentage"},"".concat(1===e.percentage?"".concat(e.percentage," yr"):"".concat("".concat(e.percentage>20?"20+":e.percentage)," yrs "))),l.a.createElement("div",{className:"mi-progress-container"},l.a.createElement("span",{className:"mi-progress-active",style:e.isVisible?{width:"".concat(e.percentage>=e.max?"100":Math.floor(e.percentage/e.max*100),"%")}:{width:0}}))))};var P=function(e){var t=e.resumeData,a=t.year,n=t.position,r=t.graduation,c=t.university,i=t.company,m=t.details;return l.a.createElement("div",{className:"mi-resume mt-30"},l.a.createElement("div",{className:"mi-resume-summary"},l.a.createElement("h6",{className:"mi-resume-year"},a)),l.a.createElement("div",{className:"mi-resume-details"},l.a.createElement("h5",null,n||r),l.a.createElement("h6",{className:"mi-resume-company"},i||c),l.a.createElement("p",null,m)))};var A=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),m=i[0],s=i[1],d=Object(n.useState)([]),E=Object(o.a)(d,2),p=E[0],b=E[1],g=Object(n.useState)([]),v=Object(o.a)(g,2),f=v[0],N=v[1],y=Object(n.useState)([]),j=Object(o.a)(y,2),w=j[0],O=j[1],S=Object(n.useState)([]),C=Object(o.a)(S,2),A=C[0],_=C[1],D=Object(n.useState)([]),z=Object(o.a)(D,2),L=z[0],T=z[1],W=Object(n.useState)([]),F=Object(o.a)(W,2),G=F[0],U=F[1];return Object(n.useEffect)((function(){u.a.get("/api/skills").then((function(e){r(e.data.languages),s(e.data.software),b(e.data.systems),N(e.data.languages.reduce((function(e,t){return e.value>t.value?e:t})).value),O(e.data.software.reduce((function(e,t){return e.value>t.value?e:t})).value),_(e.data.systems.reduce((function(e,t){return e.value>t.value?e:t})).value)})),u.a.get("/api/experience").then((function(e){T(e.data.workingExperience),U(e.data.educationExperience)}))}),[]),l.a.createElement(h,null,l.a.createElement("div",{className:"mi-skills-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"Languages"}),l.a.createElement("div",{className:"mi-skills"},l.a.createElement("div",{className:"row mt-30-reverse"},a.map((function(e){return l.a.createElement(M.a,{once:!0,className:"col-lg-6 mt-30",key:e.title},l.a.createElement(I,{title:e.title,percentage:e.value,max:f}))})))))),l.a.createElement("div",{className:"mi-skills-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"Software"}),l.a.createElement("div",{className:"mi-skills"},l.a.createElement("div",{className:"row mt-30-reverse"},m.map((function(e){return l.a.createElement(M.a,{once:!0,className:"col-lg-6 mt-30",key:e.title},l.a.createElement(I,{title:e.title,percentage:e.value,max:w}))})))))),l.a.createElement("div",{className:"mi-skills-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"Operating Systems"}),l.a.createElement("div",{className:"mi-skills"},l.a.createElement("div",{className:"row mt-30-reverse"},p.map((function(e){return l.a.createElement(M.a,{once:!0,className:"col-lg-6 mt-30",key:e.title},l.a.createElement(I,{title:e.title,percentage:e.value,max:A}))})))))),l.a.createElement("div",{className:"mi-resume-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"Resume"}),l.a.createElement(x,{title:"Work Experience",icon:"briefcase"}),l.a.createElement("div",{className:"mi-resume-wrapper"},L.map((function(e){return l.a.createElement(P,{key:e.id,resumeData:e})}))),l.a.createElement("div",{className:"mt-30"}),l.a.createElement(x,{title:"Education",icon:"book"}),l.a.createElement("div",{className:"mi-resume-wrapper"},G.map((function(e){return l.a.createElement(P,{key:e.id,resumeData:e})}))))))};var _=function(e){for(var t=e.itemsPerPage,a=e.totalItems,n=e.paginate,r=e.currentPage,c=e.className,i=[],m=1;m<=Math.ceil(a/t);m++)i.push(m);return l.a.createElement("div",{className:c?"mi-pagination "+c:"mi-pagination"},l.a.createElement("ul",null,1===r?null:l.a.createElement("li",null,l.a.createElement("a",{onClick:function(e){return n(e,r-1)},href:"!#"},l.a.createElement(E.a,{name:"chevron-left"}))),i.map((function(e){return l.a.createElement("li",{key:e,className:r===e?"is-active":null},l.a.createElement("a",{onClick:function(t){return n(t,e)},href:"!#"},e))})),r===i[i.length-1]?null:l.a.createElement("li",null,l.a.createElement("a",{onClick:function(e){return n(e,r+1)},href:"!#"},l.a.createElement(E.a,{name:"chevron-right"})))))},D=a(270);var z=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],i=e.content,m=i.title,s=i.subtitle,u=i.imageUrl,d=i.largeImageUrl,E=i.url;return l.a.createElement("div",{className:e.isVisible?"mi-portfolio mi-portfolio-visible":"mi-portfolio"},l.a.createElement("div",{className:"mi-portfolio-image"},l.a.createElement("img",{src:u,alt:m}),l.a.createElement("ul",null,d?l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){c(!r)}},l.a.createElement(w.a,null))):null,E?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:E},l.a.createElement(D.a,null))):null)),E?l.a.createElement("h5",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:E},m)):l.a.createElement("h5",null,m),s?l.a.createElement("h6",null,s):null,d?l.a.createElement(j.a,{toggler:r,sources:d}):null)};var L=function(e){var t=e.portfolio;return l.a.createElement("div",{className:"row mt-30-reverse"},t.map((function(e){return l.a.createElement(M.a,{once:!0,offset:200,className:"col-lg-4 col-md-6 col-12 mt-30",key:e.id},l.a.createElement(z,{content:e}))})))};var T=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),i=Object(o.a)(c,2),m=i[0],s=i[1],d=Object(n.useState)(9),E=Object(o.a)(d,1)[0];Object(n.useEffect)((function(){u.a.get("/api/portfolios").then((function(e){r(e.data)}))}),[a]);var p=m*E,b=p-E,g=a.slice(b,p);return l.a.createElement(h,null,l.a.createElement("div",{className:"mi-about mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"Portfolio"}),l.a.createElement(L,{portfolio:g}),a.length>E?l.a.createElement(_,{className:"mt-50",itemsPerPage:E,totalItems:a.length,paginate:function(e,t){e.preventDefault(),s(t)},currentPage:m}):null)))};var W=function(e){var t=e.data,a=t.id,n=t.featuredImage,r=t.title,c=t.createDay,m=t.createMonth,o=t.filesource,s=function(e){var t=e.split("/");return t[t.length-1].slice(0,-3)};return l.a.createElement("div",{className:"mi-blog"},l.a.createElement("div",{className:"mi-blog-image"},l.a.createElement(i.b,{to:"blog/blog-details/".concat(a,"/").concat(s(o))},l.a.createElement("img",{src:n,alt:r})),l.a.createElement("div",{className:"mi-blog-date"},l.a.createElement("span",{className:"date"},c),l.a.createElement("span",{className:"month"},m.slice(0,3)))),l.a.createElement("div",{className:"mi-blog-content"},l.a.createElement("h5",null,l.a.createElement(i.b,{to:"blog/blog-details/".concat(a,"/").concat(s(o))},r))))};var F=function(e){var t=e.blogs;return l.a.createElement("div",{className:"row mt-30-reverse"},t.map((function(e){return l.a.createElement("div",{className:"col-lg-6 mt-30",key:e.id},l.a.createElement(W,{data:e}))})))};var G=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),i=Object(o.a)(c,2),m=i[0],s=i[1],d=Object(n.useState)(4),E=Object(o.a)(d,1)[0];Object(n.useEffect)((function(){u.a.get("/api/blog").then((function(e){r(e.data)}))}),[a]);var p=m*E,b=p-E,g=a.slice(b,p);return l.a.createElement(h,null,l.a.createElement("div",{className:"mi-about mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"Recent Blogs"}),l.a.createElement(F,{blogs:g}),a.length>E?l.a.createElement(_,{className:"mt-50",itemsPerPage:E,totalItems:a.length,paginate:function(e,t){e.preventDefault(),s(t)},currentPage:m}):null)))},U=a(24),B=a(89),H=a(271),J=a(272);var R=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),m=i[0],s=i[1],d=Object(n.useState)({name:"",email:"",subject:"",message:""}),E=Object(o.a)(d,2),p=E[0],b=E[1],g=Object(n.useState)(!1),v=Object(o.a)(g,2),f=v[0],N=v[1],y=Object(n.useState)(""),j=Object(o.a)(y,2),w=j[0],O=j[1],S=function(e){b(Object(B.a)({},p,Object(U.a)({},e.currentTarget.name,e.currentTarget.value)))};return Object(n.useEffect)((function(){u.a.get("/api/contactinfo").then((function(e){r(e.data.phoneNumbers),s(e.data.emailAddress)}))}),[]),l.a.createElement(h,null,l.a.createElement("div",{className:"mi-contact-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"Contact Me"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-contact-formwrapper"},l.a.createElement("h4",null,"Get In Touch"),l.a.createElement("form",{action:"#",className:"mi-form mi-contact-form",onSubmit:function(e){e.preventDefault(),p.name?p.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(p.email)?p.subject?p.message?(N(!1),O("You message has been sent!")):(N(!0),O("Message is required.")):(N(!0),O("Subject is required.")):(N(!0),O("Must be a valid Email.")):(N(!0),O("Email is required.")):(N(!0),O("Name is required."))}},l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("label",{htmlFor:"contact-form-name"},"Enter your name*"),l.a.createElement("input",{onChange:S,type:"text",name:"name",id:"contact-form-name",value:p.name})),l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("label",{htmlFor:"contact-form-email"},"Enter your email*"),l.a.createElement("input",{onChange:S,type:"text",name:"email",id:"contact-form-email",value:p.email})),l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("label",{htmlFor:"contact-form-subject"},"Enter your subject*"),l.a.createElement("input",{onChange:S,type:"text",name:"subject",id:"contact-form-subject",value:p.subject})),l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("label",{htmlFor:"contact-form-message"},"Enter your Message*"),l.a.createElement("textarea",{onChange:S,name:"message",id:"contact-form-message",cols:"30",rows:"6",value:p.message})),l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("button",{className:"mi-button",type:"submit"},"Send Mail"))),f&&w?l.a.createElement("div",{className:"alert alert-danger mt-4"},w):!f&&w?l.a.createElement("div",{className:"alert alert-success mt-4"},w):null)),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-contact-info"},a?l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(H.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Phone"),a.map((function(e){return l.a.createElement("p",{key:e},l.a.createElement("a",{href:e},e))})))):null,m?l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(J.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Email"),m.map((function(e){return l.a.createElement("p",{key:e},l.a.createElement("a",{href:"mailto:".concat(e)},e))})))):null))))))},Q=a(90),V=a.n(Q);var q=function(e){var t=Object(n.useState)(""),r=Object(o.a)(t,2),c=r[0],i=r[1],m=e.match.params.title;return Object(n.useEffect)((function(){u.a.get(a(253)("./".concat(m,".md"))).then((function(e){i(e.data)})).catch((function(e){return console.log(e)}))}),[c]),l.a.createElement(h,null,l.a.createElement("div",{className:"mi-blog-details mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(V.a,{source:c,escapeHtml:!1}))))};var Y=function(){return l.a.createElement(i.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/home",exact:!0,component:N}),l.a.createElement(m.a,{path:"/about",component:S}),l.a.createElement(m.a,{path:"/resume",component:A}),l.a.createElement(m.a,{path:"/portfolio",component:T}),l.a.createElement(m.a,{path:"/blog",exact:!0,component:G}),l.a.createElement(m.a,{path:"/blog/blog-details/:id/:title",component:q}),l.a.createElement(m.a,{path:"/contact",component:R})))},X=new(a(255))(a(3)),Z={name:"Clayton Redmon",nickname:"Clayton",aboutContent:"I am a graduate of Eastern Kentucky University with a Bachelors in Computer Science. I am an intermediate-level developer who loves continually growing more knowledge of JavaScript, HTML, CSS, and more. While not necessarily posessing job experience related to IT, I have a passion for self-teaching, and finding useful applications for as much as I can about what I have learned.",aboutConcise:"I am an intermediate-level developer who loves continually growing more knowledge of JavaScript, HTML, CSS, and more.",age:24,phone:"15025930589",language:"English",email:"redmon.xln@gmail.com",freelanceStatus:"Available",socialLinks:{facebook:"https://www.facebook.com/zam.clay",twitter:"",pinterest:"",behance:"",linkedin:"https://www.linkedin.com/in/cmredmon/",dribbble:"",github:""},brandImage:"https://raw.githubusercontent.com/zetterburn/resume/master/public/images/brand-image.jpg",aboutImage:"https://raw.githubusercontent.com/zetterburn/resume/master/public/images/about-image.jpg",aboutImageLg:"https://raw.githubusercontent.com/zetterburn/resume/master/public/images/about-image-lg.jpg",resumefile:"https://raw.githubusercontent.com/zetterburn/resume/master/public/files/resume.pdf"},K=[{title:"Web Design",icon:"color-pallet",details:"Designing and maintaining updates for front-end website development."},{title:"Node Development",icon:"code",details:"Solutions for node-based JavaScript applications."}],$=[{id:1,content:"If Clayton actually had any reviews, they would go here!",author:{name:"Person McPersonson",designation:"Web Developer"}}],ee={languages:[{title:"C#",value:1},{title:"HTML",value:11},{title:"HTML5",value:6},{title:"CSS",value:11},{title:"CSS3",value:5},{title:"Java",value:4},{title:"JavaScript",value:10},{title:"jQuery",value:6},{title:"MySQL",value:3},{title:"NoSQL",value:2},{title:"Python",value:1},{title:"ReactJS",value:2},{title:"SQL",value:3},{title:"Swift 4.0",value:1}],software:[{title:"Adobe Animate CC 2015",value:2},{title:"Atom",value:3},{title:"Autodesk Maya",value:1},{title:"Blender",value:3},{title:"Brackets",value:3},{title:"Eclipse",value:4},{title:"Gimp 2.6 - 2.8",value:10},{title:"Git",value:4},{title:"HeidiSQL",value:3},{title:"Inkscape",value:2},{title:"Microsoft Word / Excel / PowerPoint",value:10},{title:"NotePad++",value:6},{title:"Node.JS",value:5},{title:"Photoshop CS6",value:3},{title:"PuTTY",value:3},{title:"Unity",value:4},{title:"Unreal Engine 4",value:1},{title:"Visual Studio 2015 - 2017",value:4},{title:"Visual Studio Code",value:4},{title:"Xcode 10",value:1}],systems:[{title:"Windows XP",value:12},{title:"Windows Vista",value:10},{title:"Windows 8 / 8.1",value:7},{title:"Windows 10",value:3},{title:"Ubuntu 14.04 - 18.04",value:4},{title:"Mac OSX 10.6",value:1}]},te=[{id:1,title:"test",subtitle:"subtitle",imageUrl:"https://raw.githubusercontent.com/zetterburn/resume/master/public/images/portfolio-image-1.jpg",largeImageUrl:["https://raw.githubusercontent.com/zetterburn/resume/master/public/images/portfolio-image-1-lg.jpg"],url:"https://zetterburn.github.io/resume"}],ae={workingExperience:[{id:1,year:"Mar 2020 - Present",position:"Shift Manager",company:"Arbys",details:"In charge of maintaining the store and running shifts 5-6 days per week, managing a full staff of bright employees and regularly helping to train new employees AND managers at our training store."},{id:2,year:"May 2018 - Aug 2018",position:"Fullfilment Center Associate",company:"Amazon",details:"Was responsible for Picking items from shelves, scanning, and sending them off to packing. Fast-paced 12-hour shifts. Summer job between college semesters."},{id:3,year:"Apr 2014 - May 2018",position:"Customer Service/Shift Manager",company:"Arbys",details:"Switched constantly, and was trained on every position available, including Cashier, Drivethrough, Fry Station, Morning-prep, cleaning, backline food-prep, taking inventory, etc. Left for a higher paying job at Amazon."}],educationExperience:[{id:1,year:"2019",graduation:"Bachelors of Computer Science",university:"Eastern Kentucky University",details:""},{id:2,year:"2014",graduation:"High School Degree",university:"Trinity High School",details:""}]},ne=[{id:1,title:"test",featuredImage:"https://raw.githubusercontent.com/zetterburn/resume/master/public/images/blog-image-10.jpg",filesource:"https://raw.githubusercontent.com/zetterburn/resume/master/src/blog/test.md",createDay:"1",createMonth:"March",createYear:"2020"}],le={phoneNumbers:["+1 (502) 593-0589"],emailAddress:["redmon.xln@gmail.com"]};X.onGet("/api/information").reply((function(e){return[200,Z]})),X.onGet("/api/services").reply((function(e){return[200,K]})),X.onGet("/api/reviews").reply((function(e){return[200,$]})),X.onGet("/api/skills").reply((function(e){return[200,ee]})),X.onGet("/api/portfolios").reply((function(e){return[200,te]})),X.onGet("/api/experience").reply((function(e){return[200,ae]})),X.onGet("/api/blog").reply((function(e){return[200,ne]})),X.onGet("/api/contactinfo").reply((function(e){return[200,le]})),X.onAny().passThrough();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},91:function(e,t,a){e.exports=a(268)},99:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.d49bfcf5.chunk.js.map