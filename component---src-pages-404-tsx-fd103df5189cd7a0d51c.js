(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(165),o=a(163),c=a(160),l=a(164),d=c.a.div.withConfig({displayName:"sc-404__Container",componentId:"sc-2npco9-0"})(["margin:0 5%;width:90%;@media (max-width:968px){width:100%;margin:0;}"]);t.default=function(){return i.a.createElement(r.a,{imageBg:!1},i.a.createElement(o.a,{title:"404: Not found"}),i.a.createElement(d,null,i.a.createElement(l.a,{text:"NOT FOUND"}),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))}},161:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(32),l=a.n(c);a.d(t,"a",function(){return l.a});a(162);var d=i.a.createContext({}),s=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},162:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},163:function(e,t,a){"use strict";var n=a(171),i=a(0),r=a.n(i),o=a(176),c=a.n(o),l=a(161),d=a(172),s=a.n(d);t.a=function(e){var t=e.description,a=e.lang,i=void 0===a?"en":a,o=e.meta,d=void 0===o?[]:o,u=e.keywords,p=void 0===u?[]:u,f=e.title;return r.a.createElement(l.b,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:i},title:f,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:f},{property:"og:site_name",content:f},{property:"og:description",content:a},{property:"og:type",content:"website"},{property:"og:image",content:""+e.site.siteMetadata.siteUrl+s.a},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:site",content:e.site.siteMetadata.author},{name:"twitter:title",content:f},{name:"twitter:image",content:""+e.site.siteMetadata.siteUrl+s.a},{name:"twitter:description",content:a},{name:"theme-color",content:e.site.siteMetadata.theme}].concat(p.length>0?{name:"keywords",content:p.join(", ")}:[]).concat(d)})},data:n})};var m="3355691305"},164:function(e,t,a){"use strict";a.d(t,"a",function(){return d}),a.d(t,"b",function(){return s}),a.d(t,"c",function(){return m});var n=a(0),i=a.n(n),r=a(160),o=r.a.h1.withConfig({displayName:"Headings__HeadingTag1",componentId:"iwoxmb-0"})(["color:#ebc561;text-transform:uppercase;margin:auto auto;font-family:'Unna',serif;"]),c=r.a.h2.withConfig({displayName:"Headings__HeadingTag2",componentId:"iwoxmb-1"})(["color:#ffffff;text-transform:uppercase;margin:auto auto;"]),l=r.a.h3.withConfig({displayName:"Headings__HeadingTag3",componentId:"iwoxmb-2"})(["color:#ffffff;text-transform:uppercase;margin:auto auto;"]),d=(r.a.h4.withConfig({displayName:"Headings__HeadingTag4",componentId:"iwoxmb-3"})(["color:#ffffff;text-transform:uppercase;margin:auto auto;"]),r.a.h5.withConfig({displayName:"Headings__HeadingTag5",componentId:"iwoxmb-4"})(["color:#ffffff;text-transform:uppercase;margin:auto auto;"]),r.a.h6.withConfig({displayName:"Headings__HeadingTag6",componentId:"iwoxmb-5"})(["color:#ffffff;text-transform:uppercase;margin:auto auto;"]),function(e){return i.a.createElement(o,null,e.text)}),s=function(e){return i.a.createElement(c,null,e.text)},m=function(e){return i.a.createElement(l,null,e.text)}},165:function(e,t,a){"use strict";var n=a(167),i=a(0),r=a.n(i),o=a(161),c=a(160),l=a(168),d=a.n(l),s=c.a.li.withConfig({displayName:"navigation__ReportButton",componentId:"sc-5s3a6z-0"})(["text-transform:uppercase;list-style-position:inside;border-radius:2px;border:2px solid #ffd166;color:#ffd166;letter-spacing:0.1px;line-height:17px;text-align:center;margin-left:2em;padding:1em 2em 1em 1em;a{color:#ffd166;}&:hover{background:#ffd166;color:#fff;a{color:#000;}}"]),m=c.a.div.withConfig({displayName:"navigation__Container",componentId:"sc-5s3a6z-1"})(["flex:1;text-align:right;ul{text-align:right;list-style-type:none;display:inline;li{display:inline-block;padding-left:2em;margin-bottom:2em;}}a{&:active{padding-bottom:1em;border-bottom:1px solid #fff;}&:hover{padding-bottom:1em;border-bottom:1px solid #fff;}}"]),u=function(){return r.a.createElement(m,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.a,{to:"/scams",role:"link",tabIndex:1},"See Scams")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/verified",role:"link",tabIndex:2},"Verified Domains")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://api.cryptoscamdb.org",target:"_blank",rel:"noreferrer",tabIndex:3},"API")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/faq",role:"link",tabIndex:4},"FAQ")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/search",role:"link",tabIndex:5},"Search")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/mission",role:"link",tabIndex:6},"Mission Statement")),r.a.createElement(s,null,r.a.createElement(o.a,{to:"/report",role:"link",tabIndex:7},"Report Scams"))))},p=c.a.div.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-11kwcf1-0"})(["padding:2em 5em 2em 5em;"]),f=c.a.div.withConfig({displayName:"Header__Container",componentId:"sc-11kwcf1-1"})(["width:100%;display:flex;"]),g=c.a.div.withConfig({displayName:"Header__Brand",componentId:"sc-11kwcf1-2"})(["flex:0 0 55%;"]),h=function(e){var t=e.siteTitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement(g,null,r.a.createElement(o.a,{to:"/"},r.a.createElement("img",{title:t,alt:t,src:d.a}))),r.a.createElement(u,null))))},y=c.a.div.withConfig({displayName:"Banner__BannerContainer",componentId:"sc-1kecwos-0"})([""]),b=c.a.div.withConfig({displayName:"Banner__Container",componentId:"sc-1kecwos-1"})(["width:100%;display:flex;background:rgb(245,197,97);padding:0 0.5em;> p{text-align:center;width:100%;color:#3a5f78;> a{text-decoration:underline;font-weight:600;}}"]),w=function(){return r.a.createElement(y,null,r.a.createElement(b,null,r.a.createElement("p",null,"Like what we're doing? If so, please consider contributing to"," ",r.a.createElement("a",{href:"https://gitcoin.co/grants/347/cryptoscamdb",target:"_blank",rel:"noreferrer"},"CryptoScamDB's Gitcoin grant"),"! Thank you!")))},x=a(169),E=a.n(x),v=c.a.div.withConfig({displayName:"footer__Container",componentId:"f08nbw-0"})(["margin:0 5%;width:90%;padding-top:5em;padding-bottom:40px;@media (max-width:968px){width:100%;margin:0;}"]),_=function(){return r.a.createElement(v,null,r.a.createElement("img",{title:"Powered By MyCrypto",alt:"Powered By MyCrypto",src:E.a}))},C=(a(175),a(170)),k=a.n(C),I=c.a.div.withConfig({displayName:"Layout__PageView",componentId:"jy2iym-0"})(["width:100%;background:#001629;color:#ffffff;height:100%;width:100%;font-family:'Lato',sans-serif;",""],function(e){return e.imageBg&&"\n    @media (min-width: 1200px) {\n      background: url("+k.a+") no-repeat center center;\n      background-position: center center;\n      background-size: cover;\n      min-height: 100vh;\n    }\n  "}),N=c.a.div.withConfig({displayName:"Layout__Container",componentId:"jy2iym-1"})(["margin-top:2em;padding:0em;"]);t.a=function(e){var t=e.id,a=e.children,i=e.imageBg;return r.a.createElement(o.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(I,{imageBg:i,id:t},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato|Unna&display=swap",rel:"stylesheet"}),r.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(N,null,a,r.a.createElement(_,null))))},data:n})}},166:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(53),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},167:function(e){e.exports={data:{site:{siteMetadata:{title:"CryptoScamDB"}}}}},168:function(e,t,a){e.exports=a.p+"static/csdb-logo-730e005883a557148b8378cb09e7d510.svg"},169:function(e,t,a){e.exports=a.p+"static/powered-by-mycrypto-80b3cefdbfbcd2ce90b2b96896c9cc6b.svg"},170:function(e,t,a){e.exports=a.p+"static/background-big-8de968890ab061275d9cd3a632ba9485.png"},171:function(e){e.exports={data:{site:{siteMetadata:{title:"CryptoScamDB",siteUrl:"https://cryptoscamdb.org",description:"Keeping track of all current cryptocurrency scams in an open-source database - Brought to you by MyCrypto",author:"@CryptoScamDB",theme:"#FFD166"}}}}},172:function(e,t,a){e.exports=a.p+"static/csdb-twitter-29ce0ba49db4d298d2edeb2b95a5db79.png"}}]);
//# sourceMappingURL=component---src-pages-404-tsx-fd103df5189cd7a0d51c.js.map