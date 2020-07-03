(this.webpackJsonpvredditor=this.webpackJsonpvredditor||[]).push([[0],{38:function(e,t,n){e.exports=n(47)},43:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),c=n.n(i),l=n(21),o=n(35),u=(n(43),n(7)),s=n(30),d=n(23),m=n(10),v=n(6),p=n(34),E=n(9),f=n(36),h=function(e){var t=e.input,n=e.meta,a=e.children,i=Object(u.a)(e,["input","meta","children"]),c=n.error||n.submitError,l=n.invalid&&!n.dirtySinceLastSubmit&&n.touched&&!n.active;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a.Control,Object.assign({isInvalid:l},t,i),a),l&&r.a.createElement(v.a.Control.Feedback,{type:"invalid"},c))},b=function(e){var t=e.input,n=e.meta,a=Object(u.a)(e,["input","meta"]),i=n.error||n.submitError,c=n.invalid&&!n.dirtySinceLastSubmit&&n.touched&&!n.active,l=(t.type,Object(u.a)(t,["type"]));return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a.Check,Object.assign({isInvalid:c,type:"checkbox"},l,a,{checked:!!l.value})),c&&r.a.createElement(v.a.Control.Feedback,{type:"invalid"},i))},g=n(19),y=n(32),O=function(e){var t=e.loading,n=e.loadingMessage,a=e.message,i=e.spinnerProps,c=void 0===i?{}:i,l=Object(u.a)(e,["loading","loadingMessage","message","spinnerProps"]);return r.a.createElement(g.a,l,t&&r.a.createElement(y.a,Object.assign({size:"sm",animation:"border",role:"status","aria-hidden":"true"},c)),t?n:a)},j=n(37),k=n(33),w=function(e){var t=/v\.redd\.it\/([A-Za-z0-9]+)/.exec(e);if(2===(null===t||void 0===t?void 0:t.length))return t[1]},L=function e(t,n,a,r,i){var c=Object(k.a)(t),l=c[0],o=c.slice(1),u={once:""},s=function(t){if(m(),u.once=t.type,v(),0===o.length)return r(n);setTimeout((function(){u.once===t.type&&e(o,n,a,r,i)}),500)},d={abort:s,error:s,loadedmetadata:function(t){m(),v();var c=[].concat(Object(j.a)(n),[l]);if(console.dir(c),0===o.length||i.resolveOnFirst)return r(c);setTimeout((function(){e(o,c,a,r,i)}),500)}},m=function(){return Object.keys(d).map((function(e){return a.removeEventListener(e,d[e])}))},v=function(){a.src=void 0};Object.keys(d).map((function(e){return a.addEventListener(e,d[e])})),a.src=l},S=function(e){return function(t){var n=t.url,a=t.resolveOnFirst;return new Promise((function(t){(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{resolveOnFirst:!1};return new Promise((function(n,a){var r=w(e);void 0===r&&a(new Error("could not get id from vreddit url"));var i=["1080","720","480","360","96"].map((function(e){return"https://v.redd.it/".concat(r,"/DASH_").concat(e,".mp4")})),c=document.createElement("video");L(i,[],c,n,t)}))})(n,{resolveOnFirst:a}).then((function(n){e(n),t()})).catch((function(e){t(Object(s.a)({},m.a,e))}))}))}},F=function(e){var t=e.handleSubmit,n=e.submitting,a=e.pristine,i=e.dirtySinceLastSubmit,c=e.invalid,l=e.error,o=e.submitError,u=e.submitErrors,s=o||l,g=!(void 0!==u&&void 0!==u[m.a])&&!i;return r.a.createElement(v.a,{onSubmit:t},s&&r.a.createElement(f.a,{variant:"danger"},"".concat(s)),r.a.createElement(p.a,{sm:"12",md:"8"},r.a.createElement(v.a.Group,{as:E.a,md:"12",lg:"8"},r.a.createElement(v.a.Label,null,"URL"),r.a.createElement(d.a,{component:h,name:"url",type:"text",placeholder:"https://v.redd.it/asdf1234"}),r.a.createElement(v.a.Text,{className:"text-muted"},"When viewing a reddit thread, copy the URL from the title and put it here.")),r.a.createElement(v.a.Group,{as:E.a,md:"12",lg:"8"},r.a.createElement(d.a,{component:b,name:"resolveOnFirst",label:"Return only the highest quality video"})),r.a.createElement(E.a,{md:"8"},r.a.createElement(O,{variant:"primary",type:"submit",message:"Convert",loading:n,loadingMessage:"Converting...",disabled:n||a||c&&g}))))},C=function(e){var t=e.url;Object(u.a)(e,["url"]);if(!t||t.length<3)return{url:"A valid URL is required"};try{new URL(t)}catch(n){return{url:"This isn't a valid URL. It should be in the format https://v.redd.it/asdf1234xyz"}}return{}},x=function(e){var t=e.setURLs;return r.a.createElement(d.b,{onSubmit:S(t),validate:C,render:F,initialValues:{resolveOnFirst:!0}})},R=n(26),N=n(18),U=n(27),A=function(e){var t=e.value,n=e.displayValue,i=Object(u.a)(e,["value","displayValue"]),c=Object(a.useState)(!1),o=Object(l.a)(c,2),s=o[0],d=o[1],m=Object(a.useRef)(null),v=void 0===n||n;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{className:"copy-group"},r.a.createElement(N.a,Object.assign({className:"copy-only",onClick:function(){var e;return null===(e=m.current)||void 0===e?void 0:e.select()},value:t,ref:m,style:v?{}:{display:"none"},readOnly:!0},i)),r.a.createElement(R.a.Append,null,r.a.createElement(T,{isLoading:s,onClick:function(e){(null===m||void 0===m?void 0:m.current)&&(d(!0),v||(m.current.style.display="block"),m.current.select(),document.execCommand("copy"),v||(m.current.style.display="none"),e.target.focus(),setTimeout((function(){return d(!1)}),1e3))}}))))},T=function(e){var t=e.isLoading,n=e.onClick;return r.a.createElement(g.a,{onClick:n,variant:"outline-success"},t?r.a.createElement(U.a,null):r.a.createElement(U.b,null))},z=function(e){var t=e.url;return r.a.createElement("video",{src:t,width:"240",height:"auto"})},I=function(e){var t=e.urls,n=e.video;return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(z,{url:t[0]}),r.a.createElement("div",{className:"mt-3"}),t.map((function(e){return r.a.createElement(E.a,{md:"8"},r.a.createElement(v.a.Group,null,r.a.createElement(A,{value:e,displayValue:!0}),r.a.createElement(v.a.Label,null,function(e){var t=/DASH_([0-9]+)\.([a-z0-9]{1,5})/.exec(e);return 3===(null===t||void 0===t?void 0:t.length)?"".concat(t[1],"p ").concat(t[2]," video"):2===(null===t||void 0===t?void 0:t.length)?"".concat(t[1],"p video"):"unknown quality"}(e),"\xa0 (",r.a.createElement("a",{href:e,target:"_blank"},"preview"),")")))})))},M=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1];return r.a.createElement(o.a,{className:"app"},r.a.createElement("h2",{className:"app-header pt-md-5 mb-3"},"v.redd.it converter"),r.a.createElement(x,{setURLs:i}),r.a.createElement("div",{className:"mt-5"},null!==n&&r.a.createElement(I,{urls:n,video:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.bb2aeeea.chunk.js.map