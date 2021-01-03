(this.webpackJsonpvredditor=this.webpackJsonpvredditor||[]).push([[0],{134:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(23),i=t.n(a),l=t(22),c=t(74),s=(t(79),t(64)),u=t(36),d=t(11),v=t(7),f=t(10),m=t(51),p=t(32),h=t(33),b=t(52),k=function(e){var n=e.value,t=e.displayValue,a=Object(f.a)(e,["value","displayValue"]),i=Object(o.useState)(!1),c=Object(l.a)(i,2),s=c[0],u=c[1],d=Object(o.useRef)(null),v=void 0===t||t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"copy-group"},r.a.createElement(p.a,Object.assign({className:"copy-only",onClick:function(){var e;return null===(e=d.current)||void 0===e?void 0:e.select()},value:n,ref:d,style:v?{}:{display:"none"},readOnly:!0},a)),r.a.createElement(m.a.Append,null,r.a.createElement(g,{isLoading:s,onClick:function(e){(null===d||void 0===d?void 0:d.current)&&(u(!0),v||(d.current.style.display="block"),d.current.select(),document.execCommand("copy"),v||(d.current.style.display="none"),e.target.focus(),setTimeout((function(){return u(!1)}),1e3))}}))))},g=function(e){var n=e.isLoading,t=e.onClick;return r.a.createElement(h.a,{onClick:t,variant:"outline-success"},n?r.a.createElement(b.a,null):r.a.createElement(b.b,null))},O=function(e){var n=e.url;return r.a.createElement("video",{src:n,width:"240",height:"auto"})},$=function(e){var n=/DASH_([0-9]+)\.?([a-z0-9]{1,5})?/.exec(e);return null===n?"":(null===n||void 0===n?void 0:n.length)>3?"".concat(n[1],"p ").concat(n[2]," video"):(null===n||void 0===n?void 0:n.length)>1?"".concat(n[1],"p video"):""},S=function(e){var n=e.urls,t=e.video;return 0===n.length?r.a.createElement("div",{className:"mt-3"},r.a.createElement(u.a,{variant:"danger"},"Couldn't get a video from the link provided. If it's definitely a v.redd.it video, please send ",r.a.createElement("a",{href:"mailto:me@brod.es"},"me@brod.es")," an email with the link.")):r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(O,{url:n[0]}),r.a.createElement("div",{className:"mt-3"}),n.map((function(e){return r.a.createElement(d.a,{key:e,md:"8"},r.a.createElement(v.a.Group,null,r.a.createElement(k,{value:e,displayValue:!0}),r.a.createElement(v.a.Label,null,$(e)?r.a.createElement(r.a.Fragment,null,$(e),"\xa0 (",r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},"preview"),")"):r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},"preview"))))})))},y=function(){var e=Object(o.useState)(null),n=Object(l.a)(e,2),t=n[0],a=n[1];return r.a.createElement(c.a,{className:"app"},r.a.createElement("h2",{className:"app-header pt-md-5 mb-3"},"v.redd.it converter"),r.a.createElement(s.a,{setURLs:a}),r.a.createElement("div",{className:"mt-5"},null!==t&&r.a.createElement(S,{urls:t,video:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,n,t){"use strict";var o=t(10),r=t(0),a=t.n(r),i=t(7);n.a=function(e){var n=e.input,t=e.meta,r=e.children,l=Object(o.a)(e,["input","meta","children"]),c=t.error||t.submitError,s=t.invalid&&!t.dirtySinceLastSubmit&&t.touched&&!t.active;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a.Control,Object.assign({isInvalid:s},n,l),r),s&&a.a.createElement(i.a.Control.Feedback,{type:"invalid"},c))}},34:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return l}));var o=t(20),r=t(6),a=t(37),i=function(e){},l=function(e){return function(n){return n.subscribe((function(n){var t=n.values;void 0!==t&&new a.a("persist").set("persist",JSON.stringify(e.reduce((function(e,n){return Object(r.a)(Object(r.a)({},e),{},Object(o.a)({},n,t[n]))}),{})))}),{values:!0})}}},39:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return h}));var o=t(6),r=t(4),a=t(8),i={},l={url:""},c={},s={},u={},d={},v={},f={encode:function(e){var n,t,o,i,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Writer.create();return"handshake"===(null===(n=e.req)||void 0===n?void 0:n.$case)&&p.encode(e.req.handshake,l.uint32(10).fork()).ldelim(),"transcode"===(null===(t=e.req)||void 0===t?void 0:t.$case)&&m.encode(e.req.transcode,l.uint32(18).fork()).ldelim(),"status"===(null===(o=e.req)||void 0===o?void 0:o.$case)&&r.a.encode(e.req.status,l.uint32(26).fork()).ldelim(),"cancel"===(null===(i=e.req)||void 0===i?void 0:i.$case)&&r.a.encode(e.req.cancel,l.uint32(34).fork()).ldelim(),l},decode:function(e,n){for(var t=e instanceof Uint8Array?new a.Reader(e):e,l=void 0===n?t.len:t.pos+n,c=Object(o.a)({},i);t.pos<l;){var s=t.uint32();switch(s>>>3){case 1:c.req={$case:"handshake",handshake:p.decode(t,t.uint32())};break;case 2:c.req={$case:"transcode",transcode:m.decode(t,t.uint32())};break;case 3:c.req={$case:"status",status:r.a.decode(t,t.uint32())};break;case 4:c.req={$case:"cancel",cancel:r.a.decode(t,t.uint32())};break;default:t.skipType(7&s)}}return c},fromJSON:function(e){var n=Object(o.a)({},i);return void 0!==e.handshake&&null!==e.handshake&&(n.req={$case:"handshake",handshake:p.fromJSON(e.handshake)}),void 0!==e.transcode&&null!==e.transcode&&(n.req={$case:"transcode",transcode:m.fromJSON(e.transcode)}),void 0!==e.status&&null!==e.status&&(n.req={$case:"status",status:r.a.fromJSON(e.status)}),void 0!==e.cancel&&null!==e.cancel&&(n.req={$case:"cancel",cancel:r.a.fromJSON(e.cancel)}),n},fromPartial:function(e){var n,t,a,l,c,s,u,d,v,f,h,b,k=Object(o.a)({},i);return"handshake"===(null===(n=e.req)||void 0===n?void 0:n.$case)&&void 0!==(null===(t=e.req)||void 0===t?void 0:t.handshake)&&null!==(null===(a=e.req)||void 0===a?void 0:a.handshake)&&(k.req={$case:"handshake",handshake:p.fromPartial(e.req.handshake)}),"transcode"===(null===(l=e.req)||void 0===l?void 0:l.$case)&&void 0!==(null===(c=e.req)||void 0===c?void 0:c.transcode)&&null!==(null===(s=e.req)||void 0===s?void 0:s.transcode)&&(k.req={$case:"transcode",transcode:m.fromPartial(e.req.transcode)}),"status"===(null===(u=e.req)||void 0===u?void 0:u.$case)&&void 0!==(null===(d=e.req)||void 0===d?void 0:d.status)&&null!==(null===(v=e.req)||void 0===v?void 0:v.status)&&(k.req={$case:"status",status:r.a.fromPartial(e.req.status)}),"cancel"===(null===(f=e.req)||void 0===f?void 0:f.$case)&&void 0!==(null===(h=e.req)||void 0===h?void 0:h.cancel)&&null!==(null===(b=e.req)||void 0===b?void 0:b.cancel)&&(k.req={$case:"cancel",cancel:r.a.fromPartial(e.req.cancel)}),k},toJSON:function(e){var n,t,o,a,i,l,c,s,u,d,v,f,h={};return"handshake"===(null===(n=e.req)||void 0===n?void 0:n.$case)&&(h.handshake=(null===(t=e.req)||void 0===t?void 0:t.handshake)?p.toJSON(null===(o=e.req)||void 0===o?void 0:o.handshake):void 0),"transcode"===(null===(a=e.req)||void 0===a?void 0:a.$case)&&(h.transcode=(null===(i=e.req)||void 0===i?void 0:i.transcode)?m.toJSON(null===(l=e.req)||void 0===l?void 0:l.transcode):void 0),"status"===(null===(c=e.req)||void 0===c?void 0:c.$case)&&(h.status=(null===(s=e.req)||void 0===s?void 0:s.status)?r.a.toJSON(null===(u=e.req)||void 0===u?void 0:u.status):void 0),"cancel"===(null===(d=e.req)||void 0===d?void 0:d.$case)&&(h.cancel=(null===(v=e.req)||void 0===v?void 0:v.cancel)?r.a.toJSON(null===(f=e.req)||void 0===f?void 0:f.cancel):void 0),h}},m={encode:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Writer.create();return n.uint32(10).string(e.url),n},decode:function(e,n){for(var t=e instanceof Uint8Array?new a.Reader(e):e,r=void 0===n?t.len:t.pos+n,i=Object(o.a)({},l);t.pos<r;){var c=t.uint32();switch(c>>>3){case 1:i.url=t.string();break;default:t.skipType(7&c)}}return i},fromJSON:function(e){var n=Object(o.a)({},l);return void 0!==e.url&&null!==e.url&&(n.url=String(e.url)),n},fromPartial:function(e){var n=Object(o.a)({},l);return void 0!==e.url&&null!==e.url&&(n.url=e.url),n},toJSON:function(e){var n={};return void 0!==e.url&&(n.url=e.url),n}},p={encode:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Writer.create();return void 0!==e.token&&void 0!==e.token&&g.encode(e.token,n.uint32(10).fork()).ldelim(),n},decode:function(e,n){for(var t=e instanceof Uint8Array?new a.Reader(e):e,r=void 0===n?t.len:t.pos+n,i=Object(o.a)({},c);t.pos<r;){var l=t.uint32();switch(l>>>3){case 1:i.token=g.decode(t,t.uint32());break;default:t.skipType(7&l)}}return i},fromJSON:function(e){var n=Object(o.a)({},c);return void 0!==e.token&&null!==e.token&&(n.token=g.fromJSON(e.token)),n},fromPartial:function(e){var n=Object(o.a)({},c);return void 0!==e.token&&null!==e.token&&(n.token=g.fromPartial(e.token)),n},toJSON:function(e){var n={};return void 0!==e.token&&(n.token=e.token?g.toJSON(e.token):void 0),n}},h={encode:function(e){var n,t,o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Writer.create();return"error"===(null===(n=e.resp)||void 0===n?void 0:n.$case)&&r.uint32(10).string(e.resp.error),"accepted"===(null===(t=e.resp)||void 0===t?void 0:t.$case)&&k.encode(e.resp.accepted,r.uint32(18).fork()).ldelim(),"jobStatus"===(null===(o=e.resp)||void 0===o?void 0:o.$case)&&b.encode(e.resp.jobStatus,r.uint32(26).fork()).ldelim(),r},decode:function(e,n){for(var t=e instanceof Uint8Array?new a.Reader(e):e,r=void 0===n?t.len:t.pos+n,i=Object(o.a)({},s);t.pos<r;){var l=t.uint32();switch(l>>>3){case 1:i.resp={$case:"error",error:t.string()};break;case 2:i.resp={$case:"accepted",accepted:k.decode(t,t.uint32())};break;case 3:i.resp={$case:"jobStatus",jobStatus:b.decode(t,t.uint32())};break;default:t.skipType(7&l)}}return i},fromJSON:function(e){var n=Object(o.a)({},s);return void 0!==e.error&&null!==e.error&&(n.resp={$case:"error",error:String(e.error)}),void 0!==e.accepted&&null!==e.accepted&&(n.resp={$case:"accepted",accepted:k.fromJSON(e.accepted)}),void 0!==e.jobStatus&&null!==e.jobStatus&&(n.resp={$case:"jobStatus",jobStatus:b.fromJSON(e.jobStatus)}),n},fromPartial:function(e){var n,t,r,a,i,l,c,u,d,v=Object(o.a)({},s);return"error"===(null===(n=e.resp)||void 0===n?void 0:n.$case)&&void 0!==(null===(t=e.resp)||void 0===t?void 0:t.error)&&null!==(null===(r=e.resp)||void 0===r?void 0:r.error)&&(v.resp={$case:"error",error:e.resp.error}),"accepted"===(null===(a=e.resp)||void 0===a?void 0:a.$case)&&void 0!==(null===(i=e.resp)||void 0===i?void 0:i.accepted)&&null!==(null===(l=e.resp)||void 0===l?void 0:l.accepted)&&(v.resp={$case:"accepted",accepted:k.fromPartial(e.resp.accepted)}),"jobStatus"===(null===(c=e.resp)||void 0===c?void 0:c.$case)&&void 0!==(null===(u=e.resp)||void 0===u?void 0:u.jobStatus)&&null!==(null===(d=e.resp)||void 0===d?void 0:d.jobStatus)&&(v.resp={$case:"jobStatus",jobStatus:b.fromPartial(e.resp.jobStatus)}),v},toJSON:function(e){var n,t,o,r,a,i,l,c,s={};return"error"===(null===(n=e.resp)||void 0===n?void 0:n.$case)&&(s.error=null===(t=e.resp)||void 0===t?void 0:t.error),"accepted"===(null===(o=e.resp)||void 0===o?void 0:o.$case)&&(s.accepted=(null===(r=e.resp)||void 0===r?void 0:r.accepted)?k.toJSON(null===(a=e.resp)||void 0===a?void 0:a.accepted):void 0),"jobStatus"===(null===(i=e.resp)||void 0===i?void 0:i.$case)&&(s.jobStatus=(null===(l=e.resp)||void 0===l?void 0:l.jobStatus)?b.toJSON(null===(c=e.resp)||void 0===c?void 0:c.jobStatus):void 0),s}},b={encode:function(e){var n,t,o,i,l,c,s,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Writer.create();return"unknown"===(null===(n=e.state)||void 0===n?void 0:n.$case)&&r.a.encode(e.state.unknown,u.uint32(10).fork()).ldelim(),"noJobs"===(null===(t=e.state)||void 0===t?void 0:t.$case)&&r.a.encode(e.state.noJobs,u.uint32(18).fork()).ldelim(),"queued"===(null===(o=e.state)||void 0===o?void 0:o.$case)&&r.a.encode(e.state.queued,u.uint32(26).fork()).ldelim(),"processing"===(null===(i=e.state)||void 0===i?void 0:i.$case)&&r.a.encode(e.state.processing,u.uint32(34).fork()).ldelim(),"uploading"===(null===(l=e.state)||void 0===l?void 0:l.$case)&&r.a.encode(e.state.uploading,u.uint32(42).fork()).ldelim(),"completed"===(null===(c=e.state)||void 0===c?void 0:c.$case)&&k.encode(e.state.completed,u.uint32(50).fork()).ldelim(),"cancelled"===(null===(s=e.state)||void 0===s?void 0:s.$case)&&r.a.encode(e.state.cancelled,u.uint32(58).fork()).ldelim(),u},decode:function(e,n){for(var t=e instanceof Uint8Array?new a.Reader(e):e,i=void 0===n?t.len:t.pos+n,l=Object(o.a)({},u);t.pos<i;){var c=t.uint32();switch(c>>>3){case 1:l.state={$case:"unknown",unknown:r.a.decode(t,t.uint32())};break;case 2:l.state={$case:"noJobs",noJobs:r.a.decode(t,t.uint32())};break;case 3:l.state={$case:"queued",queued:r.a.decode(t,t.uint32())};break;case 4:l.state={$case:"processing",processing:r.a.decode(t,t.uint32())};break;case 5:l.state={$case:"uploading",uploading:r.a.decode(t,t.uint32())};break;case 6:l.state={$case:"completed",completed:k.decode(t,t.uint32())};break;case 7:l.state={$case:"cancelled",cancelled:r.a.decode(t,t.uint32())};break;default:t.skipType(7&c)}}return l},fromJSON:function(e){var n=Object(o.a)({},u);return void 0!==e.unknown&&null!==e.unknown&&(n.state={$case:"unknown",unknown:r.a.fromJSON(e.unknown)}),void 0!==e.noJobs&&null!==e.noJobs&&(n.state={$case:"noJobs",noJobs:r.a.fromJSON(e.noJobs)}),void 0!==e.queued&&null!==e.queued&&(n.state={$case:"queued",queued:r.a.fromJSON(e.queued)}),void 0!==e.processing&&null!==e.processing&&(n.state={$case:"processing",processing:r.a.fromJSON(e.processing)}),void 0!==e.uploading&&null!==e.uploading&&(n.state={$case:"uploading",uploading:r.a.fromJSON(e.uploading)}),void 0!==e.completed&&null!==e.completed&&(n.state={$case:"completed",completed:k.fromJSON(e.completed)}),void 0!==e.cancelled&&null!==e.cancelled&&(n.state={$case:"cancelled",cancelled:r.a.fromJSON(e.cancelled)}),n},fromPartial:function(e){var n,t,a,i,l,c,s,d,v,f,m,p,h,b,g,O,$,S,y,E,w,j=Object(o.a)({},u);return"unknown"===(null===(n=e.state)||void 0===n?void 0:n.$case)&&void 0!==(null===(t=e.state)||void 0===t?void 0:t.unknown)&&null!==(null===(a=e.state)||void 0===a?void 0:a.unknown)&&(j.state={$case:"unknown",unknown:r.a.fromPartial(e.state.unknown)}),"noJobs"===(null===(i=e.state)||void 0===i?void 0:i.$case)&&void 0!==(null===(l=e.state)||void 0===l?void 0:l.noJobs)&&null!==(null===(c=e.state)||void 0===c?void 0:c.noJobs)&&(j.state={$case:"noJobs",noJobs:r.a.fromPartial(e.state.noJobs)}),"queued"===(null===(s=e.state)||void 0===s?void 0:s.$case)&&void 0!==(null===(d=e.state)||void 0===d?void 0:d.queued)&&null!==(null===(v=e.state)||void 0===v?void 0:v.queued)&&(j.state={$case:"queued",queued:r.a.fromPartial(e.state.queued)}),"processing"===(null===(f=e.state)||void 0===f?void 0:f.$case)&&void 0!==(null===(m=e.state)||void 0===m?void 0:m.processing)&&null!==(null===(p=e.state)||void 0===p?void 0:p.processing)&&(j.state={$case:"processing",processing:r.a.fromPartial(e.state.processing)}),"uploading"===(null===(h=e.state)||void 0===h?void 0:h.$case)&&void 0!==(null===(b=e.state)||void 0===b?void 0:b.uploading)&&null!==(null===(g=e.state)||void 0===g?void 0:g.uploading)&&(j.state={$case:"uploading",uploading:r.a.fromPartial(e.state.uploading)}),"completed"===(null===(O=e.state)||void 0===O?void 0:O.$case)&&void 0!==(null===($=e.state)||void 0===$?void 0:$.completed)&&null!==(null===(S=e.state)||void 0===S?void 0:S.completed)&&(j.state={$case:"completed",completed:k.fromPartial(e.state.completed)}),"cancelled"===(null===(y=e.state)||void 0===y?void 0:y.$case)&&void 0!==(null===(E=e.state)||void 0===E?void 0:E.cancelled)&&null!==(null===(w=e.state)||void 0===w?void 0:w.cancelled)&&(j.state={$case:"cancelled",cancelled:r.a.fromPartial(e.state.cancelled)}),j},toJSON:function(e){var n,t,o,a,i,l,c,s,u,d,v,f,m,p,h,b,g,O,$,S,y,E={};return"unknown"===(null===(n=e.state)||void 0===n?void 0:n.$case)&&(E.unknown=(null===(t=e.state)||void 0===t?void 0:t.unknown)?r.a.toJSON(null===(o=e.state)||void 0===o?void 0:o.unknown):void 0),"noJobs"===(null===(a=e.state)||void 0===a?void 0:a.$case)&&(E.noJobs=(null===(i=e.state)||void 0===i?void 0:i.noJobs)?r.a.toJSON(null===(l=e.state)||void 0===l?void 0:l.noJobs):void 0),"queued"===(null===(c=e.state)||void 0===c?void 0:c.$case)&&(E.queued=(null===(s=e.state)||void 0===s?void 0:s.queued)?r.a.toJSON(null===(u=e.state)||void 0===u?void 0:u.queued):void 0),"processing"===(null===(d=e.state)||void 0===d?void 0:d.$case)&&(E.processing=(null===(v=e.state)||void 0===v?void 0:v.processing)?r.a.toJSON(null===(f=e.state)||void 0===f?void 0:f.processing):void 0),"uploading"===(null===(m=e.state)||void 0===m?void 0:m.$case)&&(E.uploading=(null===(p=e.state)||void 0===p?void 0:p.uploading)?r.a.toJSON(null===(h=e.state)||void 0===h?void 0:h.uploading):void 0),"completed"===(null===(b=e.state)||void 0===b?void 0:b.$case)&&(E.completed=(null===(g=e.state)||void 0===g?void 0:g.completed)?k.toJSON(null===(O=e.state)||void 0===O?void 0:O.completed):void 0),"cancelled"===(null===($=e.state)||void 0===$?void 0:$.$case)&&(E.cancelled=(null===(S=e.state)||void 0===S?void 0:S.cancelled)?r.a.toJSON(null===(y=e.state)||void 0===y?void 0:y.cancelled):void 0),E}},k={encode:function(e){var n,t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Writer.create();return"ok"===(null===(n=e.resultInner)||void 0===n?void 0:n.$case)&&o.uint32(10).string(e.resultInner.ok),"err"===(null===(t=e.resultInner)||void 0===t?void 0:t.$case)&&o.uint32(18).string(e.resultInner.err),o},decode:function(e,n){for(var t=e instanceof Uint8Array?new a.Reader(e):e,r=void 0===n?t.len:t.pos+n,i=Object(o.a)({},d);t.pos<r;){var l=t.uint32();switch(l>>>3){case 1:i.resultInner={$case:"ok",ok:t.string()};break;case 2:i.resultInner={$case:"err",err:t.string()};break;default:t.skipType(7&l)}}return i},fromJSON:function(e){var n=Object(o.a)({},d);return void 0!==e.ok&&null!==e.ok&&(n.resultInner={$case:"ok",ok:String(e.ok)}),void 0!==e.err&&null!==e.err&&(n.resultInner={$case:"err",err:String(e.err)}),n},fromPartial:function(e){var n,t,r,a,i,l,c=Object(o.a)({},d);return"ok"===(null===(n=e.resultInner)||void 0===n?void 0:n.$case)&&void 0!==(null===(t=e.resultInner)||void 0===t?void 0:t.ok)&&null!==(null===(r=e.resultInner)||void 0===r?void 0:r.ok)&&(c.resultInner={$case:"ok",ok:e.resultInner.ok}),"err"===(null===(a=e.resultInner)||void 0===a?void 0:a.$case)&&void 0!==(null===(i=e.resultInner)||void 0===i?void 0:i.err)&&null!==(null===(l=e.resultInner)||void 0===l?void 0:l.err)&&(c.resultInner={$case:"err",err:e.resultInner.err}),c},toJSON:function(e){var n,t,o,r,a={};return"ok"===(null===(n=e.resultInner)||void 0===n?void 0:n.$case)&&(a.ok=null===(t=e.resultInner)||void 0===t?void 0:t.ok),"err"===(null===(o=e.resultInner)||void 0===o?void 0:o.$case)&&(a.err=null===(r=e.resultInner)||void 0===r?void 0:r.err),a}},g={encode:function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Writer.create();return"v1"===(null===(n=e.token)||void 0===n?void 0:n.$case)&&t.uint32(10).bytes(e.token.v1),t},decode:function(e,n){for(var t=e instanceof Uint8Array?new a.Reader(e):e,r=void 0===n?t.len:t.pos+n,i=Object(o.a)({},v);t.pos<r;){var l=t.uint32();switch(l>>>3){case 1:i.token={$case:"v1",v1:t.bytes()};break;default:t.skipType(7&l)}}return i},fromJSON:function(e){var n=Object(o.a)({},v);return void 0!==e.v1&&null!==e.v1&&(n.token={$case:"v1",v1:y(e.v1)}),n},fromPartial:function(e){var n,t,r,a=Object(o.a)({},v);return"v1"===(null===(n=e.token)||void 0===n?void 0:n.$case)&&void 0!==(null===(t=e.token)||void 0===t?void 0:t.v1)&&null!==(null===(r=e.token)||void 0===r?void 0:r.v1)&&(a.token={$case:"v1",v1:e.token.v1}),a},toJSON:function(e){var n,t,o,r={};return"v1"===(null===(n=e.token)||void 0===n?void 0:n.$case)&&(r.v1=void 0!==(null===(t=e.token)||void 0===t?void 0:t.v1)?function(e){for(var n=[],t=0;t<e.byteLength;++t)n.push(String.fromCharCode(e[t]));return S(n.join(""))}(null===(o=e.token)||void 0===o?void 0:o.v1):void 0),r}},O=globalThis,$=O.atob||function(n){return e.from(n,"base64").toString("binary")},S=O.btoa||function(n){return e.from(n,"binary").toString("base64")};function y(e){for(var n=$(e),t=new Uint8Array(n.length),o=0;o<n.length;++o)t[o]=n.charCodeAt(o);return t}}).call(this,t(41).Buffer)},4:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var o=t(6),r=t(8),a={},i={encode:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.Writer.create();return n},decode:function(e,n){for(var t=e instanceof Uint8Array?new r.Reader(e):e,i=void 0===n?t.len:t.pos+n,l=Object(o.a)({},a);t.pos<i;){var c=t.uint32();t.skipType(7&c)}return l},fromJSON:function(e){return Object(o.a)({},a)},fromPartial:function(e){return Object(o.a)({},a)},toJSON:function(e){return{}}}},49:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var o=t(50),r=t.n(o),a=t(68),i=t(69),l=t(70),c=t(71),s=t(40),u=t(39),d=t(72),v=t(73),f=t.n(v),m=function(e,n){return new Promise((function(t,o){/v\.redd\.it\/([A-Za-z0-9]+)/.test(e)?(n("Scanning reddit"),t(e)):/(m|old)?\.?reddit\.com\/r\/.*?\/comments/.test(e)?(n("Fetching thread"),function(e){return new Promise((function(n,t){return fetch("//cors-anywhere.herokuapp.com/".concat(e)).then((function(e){return e.text()})).then((function(e){var o=/(https:\/\/v\.redd\.it\/[A-Z0-9a-z]+)/.exec(e);!o||(null===o||void 0===o?void 0:o.length)<2?t(new Error("Failed to find v.redd.it url in link; is it a video?")):n(o[1])}))}))}(e).then(t).catch(o)):(n("Failed"),o(new Error("Couldn't get a reddit link from that. Please email me@brod.es if this is a valid reddit link.")))}))},p=null,h=function(e){return new Promise((function(n,t){null!==p&&n(p),p=new S(e);var o=setTimeout((function(){clearTimeout(o),null===p||p.isOpened||(console.log("timeout hit"),console.dir(p),p.close(),p=null,t("connection timeout"))}),5e3);return p.open().then((function(){clearTimeout(o),n(p)}),t)}))},b=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{statusCallback:function(){}};return new Promise((function(e,t){var o=n.authz,r=n.server;if((0,n.statusCallback)("Connecting"),void 0===r)t("Convert server was missing but is required");else{if(void 0!==o)return h(r).then(e,t);t("Authorization was missing but is required")}})).then((function(e){return n.statusCallback("Checking permission"),e.sendRequest(y.handshake(n.authz)).then((function(t){if("accepted"!==t.$case)throw new Error("unknown response from server after handshake: ".concat(u.b.toJSON({resp:t})));var o,r,a,i=null===t||void 0===t?void 0:t.accepted;if("ok"===(null===i||void 0===i||null===(o=i.resultInner)||void 0===o?void 0:o.$case))return n.statusCallback("Requesting"),e;if("err"===(null===i||void 0===i||null===(r=i.resultInner)||void 0===r?void 0:r.$case))throw n.statusCallback("Server declined"),new Error("server rejected handshake: ".concat(null===i||void 0===i||null===(a=i.resultInner)||void 0===a?void 0:a.err));return e}))})).then((function(t){return k(t,e,n)}))},k=function(e,n,t){return new Promise((function(o,r){var a=t.statusCallback,i=!1,l=!1,c=function(e){l=!0,r(e)};if(null===e)return console.error("connection closed"),a("Server hung up"),c("connection was closed");e.onMessage.addListener((function(e){console.log("incoming message",e),$(e).then((function(n){if(console.log("server message: ".concat(n)),"jobStatus"!==n.$case)return a("Server communication failure"),c("unexpected message type, expected state: ".concat(e));var t=n.jobStatus.state;if(!t)return a("Server communication failure"),c("unexpected message type, expected state: ".concat(e));var r,s=null===t||void 0===t?void 0:t.$case;if("queued"===s)a("Queueing"),console.log("file queued");else if("completed"===(null===t||void 0===t?void 0:t.$case)){var u,d=null===t||void 0===t||null===(u=t.completed)||void 0===u?void 0:u.resultInner;switch(null===d||void 0===d?void 0:d.$case){case"ok":return console.log("file COMPLETE: ".concat(JSON.stringify(d))),a("Completed"),r=d.ok,l=!0,void o(r);case"err":return a("Errored"),console.log("file failed: ".concat(JSON.stringify(d))),c(d.err);default:return c("unknown result state for completed file from server: ".concat(d))}}else if("processing"===s)a("Processing"),console.log("file PROCESSING");else{if("cancelled"===s)return a("Cancelled"),console.log("file cancelled"),c("operation was cancelled");"uploading"===s?(a("Uploading"),console.log("file UPLOADING")):"noJobs"===s?(a("No jobs"),console.log("no file queued")):"unknown"===s?(a("Unknown"),console.log("unknown file state")):(a("Communication error"),console.log("unknown state message: ".concat(t)))}i=!0})).catch(c)})),e.send(y.transcode(n));setTimeout((function n(){null===e||l||(i?e.send(y.status()):console.log("have not received status, debouncing"),setTimeout(n,1e3))}),1e3),console.log("started download for URL: ".concat(n))}))},g=function(e,n){return new Promise((function(t,o){return m(e,n.statusCallback).then((function(e){var o=function(e){var n=/v\.redd\.it\/([A-Za-z0-9]+)/.exec(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}(e);if(void 0===o)throw new Error("could not get id from vreddit url");var r=["1080","720","480","360","96"],a=r.map((function(e){return{name:"".concat(e," mp4"),url:"https://v.redd.it/".concat(o,"/DASH_").concat(e,".mp4")}})),i=[].concat(Object(s.a)(a),Object(s.a)(r.map((function(e){return{name:"".concat(e," legacy"),url:"https://v.redd.it/".concat(o,"/DASH_").concat(e)}})))),l=document.createElement("video");O(i,[],l,t,n)})).catch((function(e){return o(e)}))}))},O=function e(n,t,o,r,a){var i=Object(c.a)(n),l=i[0],u=l.url,d=l.name,v=i.slice(1),f={once:""};a.statusCallback("Checking ".concat(d));var m=function(n){if(h(),f.once=n.type,b(),0===v.length)return r(t);setTimeout((function(){f.once===n.type&&e(v,t,o,r,a)}),500)},p={abort:m,error:m,loadedmetadata:function(n){h(),b();var i=[].concat(Object(s.a)(t),[u]);if(0===v.length||a.resolveOnFirst)return r(i);setTimeout((function(){e(v,i,o,r,a)}),500)}},h=function(){return Object.keys(p).map((function(e){return o.removeEventListener(e,p[e])}))},b=function(){o.src=void 0};Object.keys(p).map((function(e){return o.addEventListener(e,p[e])})),o.src=u},$=function(e){return new Promise((function(n,t){return e.arrayBuffer().then((function(e){var t=u.b.decode(new Uint8Array(e)).resp;if(console.log("message received from server"),console.dir(t),void 0===t)throw Error("server returned an incomplete response");if("error"===t.$case)throw Error("server errored: "+t.error);return n(t)})).catch(t)}))},S=function(){function e(n){Object(i.a)(this,e),this.inner=void 0,this.onClose=void 0,this.onError=void 0,this.onResponse=void 0,this.onMessage=void 0,this.inner=new f.a(n),this.onClose=this.inner.onClose,this.onClose.addListener((function(e){console.error("websocket closed"),console.dir(e)})),this.onError=this.inner.onError,this.onError.addListener((function(e){console.error("websocket errored"),console.dir(e)})),this.onResponse=this.inner.onResponse,this.onMessage=this.inner.onMessage}return Object(l.a)(e,[{key:"open",value:function(){return this.inner.open()}},{key:"close",value:function(e,n){return console.log("closing connection"),this.inner.close()}},{key:"send",value:function(e){console.log("sending data",e),this.inner.send(u.a.encode(e).finish())}},{key:"sendRequest",value:function(){var e=Object(a.a)(r.a.mark((function e(n){var t,o=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e,n){o.onMessage.addOnceListener((function(t){console.log("presumptive response to request",t),console.dir(t),$(t).then(e,n)}))})),this.send(n),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"isOpened",get:function(){return this.inner.isOpened}},{key:"isOpening",get:function(){return this.inner.isOpening}}]),e}(),y={transcode:function(e){return{req:{$case:"transcode",transcode:{url:e}}}},handshake:function(n){return{req:{$case:"handshake",handshake:{token:void 0===n?void 0:{token:{$case:"v1",v1:e.from(n,"base64")}}}}}},status:function(){return{req:{$case:"status",status:d.a}}}}}).call(this,t(41).Buffer)},53:function(e,n,t){"use strict";t.d(n,"b",(function(){return v})),t.d(n,"a",(function(){return f}));var o=t(0),r=t.n(o),a=t(15),i=t(7),l=t(11),c=t(10),s=function(e){var n=e.input,t=e.meta,o=Object(c.a)(e,["input","meta"]),a=t.error||t.submitError,l=t.invalid&&!t.dirtySinceLastSubmit&&t.touched&&!t.active,s=(n.type,Object(c.a)(n,["type"]));return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a.Check,Object.assign({isInvalid:l,type:"checkbox"},s,o,{checked:!!s.value})),l&&r.a.createElement(i.a.Control.Feedback,{type:"invalid"},a))},u=t(27),d=t(34),v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a.Group,{as:l.a,md:"12",lg:"8"},r.a.createElement(i.a.Label,null,"Authorization Key"),r.a.createElement(a.a,{component:u.a,label:"Authorization Key",name:"authz",type:"password",required:!0,placeholder:"Special key provided by the server owner."})),r.a.createElement(i.a.Group,{as:l.a,md:"12",lg:"8"},r.a.createElement(i.a.Label,null,"Server"),r.a.createElement(a.a,{component:u.a,label:"Server",name:"server",type:"text",required:!0,placeholder:"api.example.com",initialValue:d.a("localhost:8080")})))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a.Group,{as:l.a,md:"12",lg:"8"},r.a.createElement(a.a,{name:"resolveOnFirst",label:"Return only the highest quality video found.",component:s})))}},64:function(e,n,t){"use strict";(function(e){var o=t(22),r=t(20),a=t(6),i=t(10),l=t(0),c=t.n(l),s=t(15),u=t(16),d=t(135),v=t(7),f=t(28),m=t(11),p=t(36),h=t(27),b=t(65),k=t(66),g=t(53),O=t(49),$=t(34),S=function(e,n){return function(t){var o=t.url,l=t.conversionMethod,c=t.server,s=Object(i.a)(t,["url","conversionMethod","server"]);return new Promise((function(t,i){return("youtubedl"===l?O.a(o,Object(a.a)(Object(a.a)({statusCallback:e},s),{},{server:c?"ws://".concat(c):void 0})).then((function(e){n([e]),t({})})):O.b(o,{statusCallback:e,resolveOnFirst:s.resolveOnFirst||!1}).then((function(e){n(e),t({})}))).catch((function(e){console.error("error when returning promise"),console.dir(e),t(Object(r.a)({},u.a,e.message))}))}))}},y=function(e){var n=e.handleSubmit,t=e.submitting,o=e.pristine,r=e.dirtySinceLastSubmit,a=e.invalid,i=e.error,l=e.submitError,d=e.submitErrors,O=e.values,$=e.status,S=l||i,y=!(void 0!==d&&void 0!==d[u.a])&&!r;return c.a.createElement(v.a,{onSubmit:n},S&&c.a.createElement(p.a,{variant:"danger"},"".concat(S)),c.a.createElement(f.a,{sm:"12",md:"8"},c.a.createElement(v.a.Group,{as:m.a,md:"4"},c.a.createElement(v.a.Label,null,"Conversion Method"),c.a.createElement(s.a,{name:"conversionMethod",component:b.a,type:"select"},c.a.createElement("option",{value:"scrape"},"Scrape Reddit (reddit)"),c.a.createElement("option",{value:"youtubedl"},"youtube-dl (private)")))),c.a.createElement(f.a,{sm:"12",md:"8"},c.a.createElement(v.a.Group,{as:m.a,md:"12",lg:"8"},c.a.createElement(v.a.Label,null,"URL"),c.a.createElement(s.a,{component:h.a,name:"url",type:"text",placeholder:"https://v.redd.it/asdf1234"}),c.a.createElement(j,{conversionMethod:O.conversionMethod}))),void 0!==O.conversionMethod&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",null,"Additional Settings"),c.a.createElement(f.a,{sm:"12",md:"8"},c.a.createElement(v.a.Group,{as:m.a,md:"12",lg:"8"},"youtubedl"===O.conversionMethod&&c.a.createElement(g.b,null),"scrape"===O.conversionMethod&&c.a.createElement(g.a,null)))),c.a.createElement(f.a,{sm:"12",md:"8"},c.a.createElement(m.a,{md:"8"},c.a.createElement(k.a,{variant:"primary",type:"submit",message:"Convert",loading:t,loadingMessage:$?"".concat($,"..."):"Starting...",disabled:t||o||a&&y}))))},E=function(n){var t=n.url,o=n.conversionMethod,r=n.server,a=n.authz,i={};if(!t||t.length<3)i.url="A valid URL is required";else try{new URL(t)}catch(l){console.log("bad url"),console.error(l),i.url="This isn't a valid URL. It should be in the format https://v.redd.it/asdf1234xyz"}if("youtubedl"===o)if(void 0===r?i.server="A server address is required":r.length<5&&(i.server="A valid server address is required"),void 0===a)i.authz="An authorization token required";else try{e.from(a,"base64")}catch(l){console.dir(l),i.authz="This authorization token is malformed"}return i},w=[$.b(["conversionMethod","resolveOnFirst","authz","server"])];n.a=Object(d.a)((function(e){var n=e.cookies,t=e.setURLs,r=Object(l.useState)(""),a=Object(o.a)(r,2),i=a[0],u=a[1],d={};try{d=n.get("persist")||"{}"}catch(v){console.log("error when getting a cookie"),console.error(v)}return c.a.createElement(s.b,{onSubmit:S(u,t),validate:E,initialValues:d,decorators:w,render:function(e){return c.a.createElement(y,Object.assign({status:i},e))}})}));var j=function(e){var n=e.conversionMethod;return"scrape"===n?c.a.createElement(v.a.Text,{className:"text-muted"},"Provide either a direct v.redd.it link or a link to a video's comments."):"youtubedl"===n?c.a.createElement(v.a.Text,{className:"text-muted"},"Provide any link to any \xa0",c.a.createElement("a",{href:"https://github.com/ytdl-org/youtube-dl/blob/master/docs/supportedsites.md",target:"_blank",rel:"noopener noreferrer"},"youtube-dl supported site"),"."):null}}).call(this,t(41).Buffer)},65:function(e,n,t){"use strict";var o=t(10),r=t(0),a=t.n(r),i=t(7);n.a=function(e){var n=e.input,t=e.meta,r=Object(o.a)(e,["input","meta"]),l=t.error||t.submitError,c=t.invalid&&!t.dirtySinceLastSubmit&&t.touched&&!t.active,s=(n.type,Object(o.a)(n,["type"]));return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a.Control,Object.assign({isInvalid:c,as:"select"},s,r)),c&&a.a.createElement(i.a.Control.Feedback,{type:"invalid"},l))}},66:function(e,n,t){"use strict";var o=t(10),r=t(0),a=t.n(r),i=t(33),l=t(67);n.a=function(e){var n=e.loading,t=e.loadingMessage,r=e.message,c=e.spinnerProps,s=void 0===c?{}:c,u=Object(o.a)(e,["loading","loadingMessage","message","spinnerProps"]);return a.a.createElement(i.a,u,n&&a.a.createElement(l.a,Object.assign({size:"sm",animation:"border",role:"status","aria-hidden":"true"},s)),n?t:r)}},72:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var o=t(6),r=t(8),a={},i={encode:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.Writer.create();return n},decode:function(e,n){for(var t=e instanceof Uint8Array?new r.Reader(e):e,i=void 0===n?t.len:t.pos+n,l=Object(o.a)({},a);t.pos<i;){var c=t.uint32();t.skipType(7&c)}return l},fromJSON:function(e){return Object(o.a)({},a)},fromPartial:function(e){return Object(o.a)({},a)},toJSON:function(e){return{}}}},79:function(e,n,t){}},[[134,1,2]]]);
//# sourceMappingURL=main.fc48883a.chunk.js.map