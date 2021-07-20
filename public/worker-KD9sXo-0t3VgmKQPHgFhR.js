(()=>{"use strict";var e=[,(e,t,r)=>{r.r(t),r.d(t,{_private:()=>a._private,cacheNames:()=>a.cacheNames,clientsClaim:()=>a.clientsClaim,copyResponse:()=>a.copyResponse,registerQuotaErrorCallback:()=>a.registerQuotaErrorCallback,setCacheNameDetails:()=>a.setCacheNameDetails,skipWaiting:()=>a.skipWaiting});var a=r(2)},(e,t,r)=>{r.r(t),r.d(t,{_private:()=>s,cacheNames:()=>n.cacheNames,clientsClaim:()=>i.clientsClaim,copyResponse:()=>o.copyResponse,registerQuotaErrorCallback:()=>a.registerQuotaErrorCallback,setCacheNameDetails:()=>c.setCacheNameDetails,skipWaiting:()=>l.skipWaiting});var a=r(3),s=r(11),n=r(26),o=r(27),i=r(28),c=r(29),l=r(30);r(5),r(31)},(e,t,r)=>{r.r(t),r.d(t,{registerQuotaErrorCallback:()=>s});r(4),r(6);var a=r(10);r(5);function s(e){a.quotaErrorCallbacks.add(e)}},(e,t,r)=>{r.r(t),r.d(t,{logger:()=>a});r(5);const a=null},()=>{try{self["workbox:core:6.1.5"]&&_()}catch(e){}},(e,t,r)=>{r.r(t),r.d(t,{assert:()=>a});r(7),r(5);const a=null},(e,t,r)=>{r.r(t),r.d(t,{WorkboxError:()=>s});var a=r(8);r(5);class s extends Error{constructor(e,t){super((0,a.messageGenerator)(e,t)),this.name=e,this.details=t}}},(e,t,r)=>{r.r(t),r.d(t,{messageGenerator:()=>a});r(9),r(5);const a=(e,...t)=>{let r=e;return t.length>0&&(r+=` :: ${JSON.stringify(t)}`),r}},(e,t,r)=>{r.r(t),r.d(t,{messages:()=>a});r(5);const a={"invalid-value":({paramName:e,validValueDescription:t,value:r})=>{if(!e||!t)throw new Error("Unexpected input to 'invalid-value' error.");return`The '${e}' parameter was given a value with an unexpected value. ${t} Received a value of ${JSON.stringify(r)}.`},"not-an-array":({moduleName:e,className:t,funcName:r,paramName:a})=>{if(!(e&&t&&r&&a))throw new Error("Unexpected input to 'not-an-array' error.");return`The parameter '${a}' passed into '${e}.${t}.${r}()' must be an array.`},"incorrect-type":({expectedType:e,paramName:t,moduleName:r,className:a,funcName:s})=>{if(!(e&&t&&r&&s))throw new Error("Unexpected input to 'incorrect-type' error.");return`The parameter '${t}' passed into '${r}.${a?a+".":""}${s}()' must be of type ${e}.`},"incorrect-class":({expectedClass:e,paramName:t,moduleName:r,className:a,funcName:s,isReturnValueProblem:n})=>{if(!e||!r||!s)throw new Error("Unexpected input to 'incorrect-class' error.");return n?`The return value from '${r}.${a?a+".":""}${s}()' must be an instance of class ${e.name}.`:`The parameter '${t}' passed into '${r}.${a?a+".":""}${s}()' must be an instance of class ${e.name}.`},"missing-a-method":({expectedMethod:e,paramName:t,moduleName:r,className:a,funcName:s})=>{if(!(e&&t&&r&&a&&s))throw new Error("Unexpected input to 'missing-a-method' error.");return`${r}.${a}.${s}() expected the '${t}' parameter to expose a '${e}' method.`},"add-to-cache-list-unexpected-type":({entry:e})=>`An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(e)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,"add-to-cache-list-conflicting-entries":({firstEntry:e,secondEntry:t})=>{if(!e||!t)throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");return`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${e._entryId} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`},"plugin-error-request-will-fetch":({thrownError:e})=>{if(!e)throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");return`An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${e.message}'.`},"invalid-cache-name":({cacheNameId:e,value:t})=>{if(!e)throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");return`You must provide a name containing at least one character for setCacheDetails({${e}: '...'}). Received a value of '${JSON.stringify(t)}'`},"unregister-route-but-not-found-with-method":({method:e})=>{if(!e)throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");return`The route you're trying to unregister was not  previously registered for the method type '${e}'.`},"unregister-route-route-not-registered":()=>"The route you're trying to unregister was not previously registered.","queue-replay-failed":({name:e})=>`Replaying the background sync queue '${e}' failed.`,"duplicate-queue-name":({name:e})=>`The Queue name '${e}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,"expired-test-without-max-age":({methodName:e,paramName:t})=>`The '${e}()' method can only be used when the '${t}' is used in the constructor.`,"unsupported-route-type":({moduleName:e,className:t,funcName:r,paramName:a})=>`The supplied '${a}' parameter was an unsupported type. Please check the docs for ${e}.${t}.${r} for valid input types.`,"not-array-of-class":({value:e,expectedClass:t,moduleName:r,className:a,funcName:s,paramName:n})=>`The supplied '${n}' parameter must be an array of '${t}' objects. Received '${JSON.stringify(e)},'. Please check the call to ${r}.${a}.${s}() to fix the issue.`,"max-entries-or-age-required":({moduleName:e,className:t,funcName:r})=>`You must define either config.maxEntries or config.maxAgeSecondsin ${e}.${t}.${r}`,"statuses-or-headers-required":({moduleName:e,className:t,funcName:r})=>`You must define either config.statuses or config.headersin ${e}.${t}.${r}`,"invalid-string":({moduleName:e,funcName:t,paramName:r})=>{if(!r||!e||!t)throw new Error("Unexpected input to 'invalid-string' error.");return`When using strings, the '${r}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${e}.${t}() for more info.`},"channel-name-required":()=>"You must provide a channelName to construct a BroadcastCacheUpdate instance.","invalid-responses-are-same-args":()=>"The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.","expire-custom-caches-only":()=>"You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.","unit-must-be-bytes":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'unit-must-be-bytes' error.");return`The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${e}"`},"single-range-only":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'single-range-only' error.");return`Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${e}"`},"invalid-range-values":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'invalid-range-values' error.");return`The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${e}"`},"no-range-header":()=>"No Range header was found in the Request provided.","range-not-satisfiable":({size:e,start:t,end:r})=>`The start (${t}) and end (${r}) values in the Range are not satisfiable by the cached response, which is ${e} bytes.`,"attempt-to-cache-non-get-request":({url:e,method:t})=>`Unable to cache '${e}' because it is a '${t}' request and only 'GET' requests can be cached.`,"cache-put-with-no-response":({url:e})=>`There was an attempt to cache '${e}' but the response was not defined.`,"no-response":({url:e,error:t})=>{let r=`The strategy could not generate a response for '${e}'.`;return t&&(r+=` The underlying error is ${t}.`),r},"bad-precaching-response":({url:e,status:t})=>`The precaching request for '${e}' failed`+(t?` with an HTTP status of ${t}.`:"."),"non-precached-url":({url:e})=>`createHandlerBoundToURL('${e}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,"add-to-cache-list-conflicting-integrities":({url:e})=>`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${e} with different integrity values. Please remove one of them.`,"missing-precache-entry":({cacheName:e,url:t})=>`Unable to find a precached response in ${e} for ${t}.`,"cross-origin-copy-response":({origin:e})=>`workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${e}.`}},(e,t,r)=>{r.r(t),r.d(t,{quotaErrorCallbacks:()=>a});r(5);const a=new Set},(e,t,r)=>{r.r(t),r.d(t,{assert:()=>a.assert,cacheMatchIgnoreParams:()=>n.cacheMatchIgnoreParams,cacheNames:()=>s.cacheNames,canConstructReadableStream:()=>o.canConstructReadableStream,canConstructResponseFromBodyStream:()=>i.canConstructResponseFromBodyStream,dontWaitFor:()=>c.dontWaitFor,DBWrapper:()=>l.DBWrapper,Deferred:()=>u.Deferred,deleteDatabase:()=>h.deleteDatabase,executeQuotaErrorCallbacks:()=>d.executeQuotaErrorCallbacks,getFriendlyURL:()=>p.getFriendlyURL,logger:()=>m.logger,resultingClientExists:()=>g.resultingClientExists,timeout:()=>f.timeout,waitUntil:()=>w.waitUntil,WorkboxError:()=>y.WorkboxError});var a=r(6),s=r(12),n=r(13),o=r(15),i=r(16),c=r(17),l=r(18),u=r(19),h=r(20),d=r(21),p=r(22),m=r(4),g=r(23),f=r(24),w=r(25),y=r(7);r(5)},(e,t,r)=>{r.r(t),r.d(t,{cacheNames:()=>n});r(5);const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},s=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),n={updateDetails:e=>{(e=>{for(const t of Object.keys(a))e(t)})((t=>{"string"==typeof e[t]&&(a[t]=e[t])}))},getGoogleAnalyticsName:e=>e||s(a.googleAnalytics),getPrecacheName:e=>e||s(a.precache),getPrefix:()=>a.prefix,getRuntimeName:e=>e||s(a.runtime),getSuffix:()=>a.suffix}},(e,t,r)=>{r.r(t),r.d(t,{cacheMatchIgnoreParams:()=>i});var a=r(14);r(5);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){const r=new URL(e);for(const e of t)r.searchParams.delete(e);return r.href}async function i(e,t,r,a){const s=o(t.url,r);if(t.url===s)return e.match(t,a);const i=n(n({},a),{},{ignoreSearch:!0}),c=await e.keys(t,i);for(const t of c){if(s===o(t.url,r))return e.match(t,a)}}},(e,t,r)=>{function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:()=>a})},(e,t,r)=>{r.r(t),r.d(t,{canConstructReadableStream:()=>s});r(5);let a;function s(){if(void 0===a)try{new ReadableStream({start(){}}),a=!0}catch(e){a=!1}return a}},(e,t,r)=>{r.r(t),r.d(t,{canConstructResponseFromBodyStream:()=>s});r(5);let a;function s(){if(void 0===a){const e=new Response("");if("body"in e)try{new Response(e.body),a=!0}catch(e){a=!1}a=!1}return a}},(e,t,r)=>{r.r(t),r.d(t,{dontWaitFor:()=>a});r(5);function a(e){e.then((()=>{}))}},(e,t,r)=>{r.r(t),r.d(t,{DBWrapper:()=>a});r(5);class a{constructor(e,t,{onupgradeneeded:r,onversionchange:a}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=r,this._onversionchange=a||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise(((e,t)=>{let r=!1;setTimeout((()=>{r=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const a=indexedDB.open(this._name,this._version);a.onerror=()=>t(a.error),a.onupgradeneeded=e=>{r?(a.transaction.abort(),a.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},a.onsuccess=()=>{const t=a.result;r?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,r){return await this.getAllMatching(e,{query:t,count:r})}async getAllKeys(e,t,r){return(await this.getAllMatching(e,{query:t,count:r,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e,{index:t,query:r=null,direction:a="next",count:s,includeKeys:n=!1}={}){return await this.transaction([e],"readonly",((o,i)=>{const c=o.objectStore(e),l=t?c.index(t):c,u=[],h=l.openCursor(r,a);h.onsuccess=()=>{const e=h.result;e?(u.push(n?e:e.value),s&&u.length>=s?i(u):e.continue()):i(u)}}))}async transaction(e,t,r){return await this.open(),await new Promise(((a,s)=>{const n=this._db.transaction(e,t);n.onabort=()=>s(n.error),n.oncomplete=()=>a(),r(n,(e=>a(e)))}))}async _call(e,t,r,...a){return await this.transaction([t],r,((r,s)=>{const n=r.objectStore(t),o=n[e].apply(n,a);o.onsuccess=()=>s(o.result)}))}close(){this._db&&(this._db.close(),this._db=null)}}a.prototype.OPEN_TIMEOUT=2e3;const s={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(s))for(const r of t)r in IDBObjectStore.prototype&&(a.prototype[r]=async function(t,...a){return await this._call(r,t,e,...a)})},(e,t,r)=>{r.r(t),r.d(t,{Deferred:()=>a});r(5);class a{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}},(e,t,r)=>{r.r(t),r.d(t,{deleteDatabase:()=>a});r(5);const a=async e=>{await new Promise(((t,r)=>{const a=indexedDB.deleteDatabase(e);a.onerror=()=>{r(a.error)},a.onblocked=()=>{r(new Error("Delete blocked"))},a.onsuccess=()=>{t()}}))}},(e,t,r)=>{r.r(t),r.d(t,{executeQuotaErrorCallbacks:()=>s});r(4);var a=r(10);r(5);async function s(){for(const e of a.quotaErrorCallbacks)await e()}},(e,t,r)=>{r.r(t),r.d(t,{getFriendlyURL:()=>a});r(5);const a=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")},(e,t,r)=>{r.r(t),r.d(t,{resultingClientExists:()=>s});var a=r(24);r(5);async function s(e){if(!e)return;let t=await self.clients.matchAll({type:"window"});const r=new Set(t.map((e=>e.id)));let s;const n=performance.now();for(;performance.now()-n<2e3&&(t=await self.clients.matchAll({type:"window"}),s=t.find((t=>e?t.id===e:!r.has(t.id))),!s);)await(0,a.timeout)(100);return s}},(e,t,r)=>{r.r(t),r.d(t,{timeout:()=>a});r(5);function a(e){return new Promise((t=>setTimeout(t,e)))}},(e,t,r)=>{r.r(t),r.d(t,{waitUntil:()=>a});r(5);function a(e,t){const r=t();return e.waitUntil(r),r}},(e,t,r)=>{r.r(t),r.d(t,{cacheNames:()=>s});var a=r(12);r(5);const s={get googleAnalytics(){return a.cacheNames.getGoogleAnalyticsName()},get precache(){return a.cacheNames.getPrecacheName()},get prefix(){return a.cacheNames.getPrefix()},get runtime(){return a.cacheNames.getRuntimeName()},get suffix(){return a.cacheNames.getSuffix()}}},(e,t,r)=>{r.r(t),r.d(t,{copyResponse:()=>n});var a=r(16),s=r(7);r(5);async function n(e,t){let r=null;if(e.url){r=new URL(e.url).origin}if(r!==self.location.origin)throw new s.WorkboxError("cross-origin-copy-response",{origin:r});const n=e.clone(),o={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=t?t(o):o,c=(0,a.canConstructResponseFromBodyStream)()?n.body:await n.blob();return new Response(c,i)}},(e,t,r)=>{r.r(t),r.d(t,{clientsClaim:()=>a});r(5);function a(){self.addEventListener("activate",(()=>self.clients.claim()))}},(e,t,r)=>{r.r(t),r.d(t,{setCacheNameDetails:()=>s});r(6);var a=r(12);r(7),r(5);function s(e){a.cacheNames.updateDetails(e)}},(e,t,r)=>{r.r(t),r.d(t,{skipWaiting:()=>a});r(4),r(5);function a(){self.skipWaiting()}},(e,t,r)=>{r.r(t);r(5)},(e,t,r)=>{r.r(t),r.d(t,{NavigationRoute:()=>a.NavigationRoute,RegExpRoute:()=>a.RegExpRoute,Route:()=>a.Route,Router:()=>a.Router,registerRoute:()=>a.registerRoute,setCatchHandler:()=>a.setCatchHandler,setDefaultHandler:()=>a.setDefaultHandler});var a=r(33)},(e,t,r)=>{r.r(t),r.d(t,{NavigationRoute:()=>a.NavigationRoute,RegExpRoute:()=>s.RegExpRoute,registerRoute:()=>n.registerRoute,Route:()=>o.Route,Router:()=>i.Router,setCatchHandler:()=>c.setCatchHandler,setDefaultHandler:()=>l.setDefaultHandler});var a=r(34),s=r(39),n=r(40),o=r(35),i=r(42),c=r(43),l=r(44);r(37)},(e,t,r)=>{r.r(t),r.d(t,{NavigationRoute:()=>s});r(6),r(4);var a=r(35);r(37);class s extends a.Route{constructor(e,{allowlist:t=[/./],denylist:r=[]}={}){super((e=>this._match(e)),e),this._allowlist=t,this._denylist=r}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const r=e.pathname+e.search;for(const e of this._denylist)if(e.test(r))return!1;return!!this._allowlist.some((e=>e.test(r)))}}},(e,t,r)=>{r.r(t),r.d(t,{Route:()=>n});r(6);var a=r(36),s=r(38);r(37);class n{constructor(e,t,r=a.defaultMethod){this.handler=(0,s.normalizeHandler)(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=(0,s.normalizeHandler)(e)}}},(e,t,r)=>{r.r(t),r.d(t,{defaultMethod:()=>a,validMethods:()=>s});r(37);const a="GET",s=["DELETE","GET","HEAD","PATCH","POST","PUT"]},()=>{try{self["workbox:routing:6.1.5"]&&_()}catch(e){}},(e,t,r)=>{r.r(t),r.d(t,{normalizeHandler:()=>a});r(6),r(37);const a=e=>e&&"object"==typeof e?e:{handle:e}},(e,t,r)=>{r.r(t),r.d(t,{RegExpRoute:()=>s});r(6),r(4);var a=r(35);r(37);class s extends a.Route{constructor(e,t,r){super((({url:t})=>{const r=e.exec(t.href);if(r&&(t.origin===location.origin||0===r.index))return r.slice(1)}),t,r)}}},(e,t,r)=>{r.r(t),r.d(t,{registerRoute:()=>i});r(4);var a=r(7),s=r(35),n=r(39),o=r(41);r(37);function i(e,t,r){let i;if("string"==typeof e){const a=new URL(e,location.href);0;const n=({url:e})=>e.href===a.href;i=new s.Route(n,t,r)}else if(e instanceof RegExp)i=new n.RegExpRoute(e,t,r);else if("function"==typeof e)i=new s.Route(e,t,r);else{if(!(e instanceof s.Route))throw new a.WorkboxError("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});i=e}return(0,o.getOrCreateDefaultRouter)().registerRoute(i),i}},(e,t,r)=>{r.r(t),r.d(t,{getOrCreateDefaultRouter:()=>n});var a=r(42);r(37);let s;const n=()=>(s||(s=new a.Router,s.addFetchListener(),s.addCacheListener()),s)},(e,t,r)=>{r.r(t),r.d(t,{Router:()=>o});r(6),r(22);var a=r(36),s=(r(4),r(38)),n=r(7);r(37);class o{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const r=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const r=new Request(...t);return this.handleRequest({request:r,event:e})})));e.waitUntil(r),e.ports&&e.ports[0]&&r.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return void 0;const a=r.origin===location.origin,{params:s,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:r});let o=n&&n.handler;const i=e.method;if(!o&&this._defaultHandlerMap.has(i)&&(o=this._defaultHandlerMap.get(i)),!o)return void 0;let c;try{c=o.handle({url:r,request:e,event:t,params:s})}catch(e){c=Promise.reject(e)}const l=n&&n.catchHandler;return c instanceof Promise&&(this._catchHandler||l)&&(c=c.catch((async a=>{if(l){0;try{return await l.handle({url:r,request:e,event:t,params:s})}catch(e){a=e}}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:t});throw a}))),c}findMatchingRoute({url:e,sameOrigin:t,request:r,event:a}){const s=this._routes.get(r.method)||[];for(const n of s){let s;const o=n.match({url:e,sameOrigin:t,request:r,event:a});if(o)return s=o,(Array.isArray(o)&&0===o.length||o.constructor===Object&&0===Object.keys(o).length||"boolean"==typeof o)&&(s=void 0),{route:n,params:s}}return{}}setDefaultHandler(e,t=a.defaultMethod){this._defaultHandlerMap.set(t,(0,s.normalizeHandler)(e))}setCatchHandler(e){this._catchHandler=(0,s.normalizeHandler)(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new n.WorkboxError("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new n.WorkboxError("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}},(e,t,r)=>{r.r(t),r.d(t,{setCatchHandler:()=>s});var a=r(41);r(37);function s(e){(0,a.getOrCreateDefaultRouter)().setCatchHandler(e)}},(e,t,r)=>{r.r(t),r.d(t,{setDefaultHandler:()=>s});var a=r(41);r(37);function s(e){(0,a.getOrCreateDefaultRouter)().setDefaultHandler(e)}},(e,t,r)=>{r.r(t),r.d(t,{CacheFirst:()=>a.CacheFirst,CacheOnly:()=>a.CacheOnly,NetworkFirst:()=>a.NetworkFirst,NetworkOnly:()=>a.NetworkOnly,StaleWhileRevalidate:()=>a.StaleWhileRevalidate,Strategy:()=>a.Strategy,StrategyHandler:()=>a.StrategyHandler});var a=r(46)},(e,t,r)=>{r.r(t),r.d(t,{CacheFirst:()=>a.CacheFirst,CacheOnly:()=>s.CacheOnly,NetworkFirst:()=>n.NetworkFirst,NetworkOnly:()=>o.NetworkOnly,StaleWhileRevalidate:()=>i.StaleWhileRevalidate,Strategy:()=>c.Strategy,StrategyHandler:()=>l.StrategyHandler});var a=r(47),s=r(52),n=r(53),o=r(55),i=r(56),c=r(48),l=r(49);r(50)},(e,t,r)=>{r.r(t),r.d(t,{CacheFirst:()=>n});r(6),r(4);var a=r(7),s=r(48);r(51),r(50);class n extends s.Strategy{async _handle(e,t){let r,s=await t.cacheMatch(e);if(s)0;else{0;try{s=await t.fetchAndCachePut(e)}catch(e){r=e}0}if(!s)throw new a.WorkboxError("no-response",{url:e.url,error:r});return s}}},(e,t,r)=>{r.r(t),r.d(t,{Strategy:()=>o});var a=r(12),s=r(7),n=(r(4),r(22),r(49));r(50);class o{constructor(e={}){this.cacheName=a.cacheNames.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,r="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,s=new n.StrategyHandler(this,{event:t,request:r,params:a}),o=this._getResponse(s,r,t);return[o,this._awaitComplete(o,s,r,t)]}async _getResponse(e,t,r){let a;await e.runCallbacks("handlerWillStart",{event:r,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new s.WorkboxError("no-response",{url:t.url})}catch(s){for(const n of e.iterateCallbacks("handlerDidError"))if(a=await n({error:s,event:r,request:t}),a)break;if(!a)throw s}for(const s of e.iterateCallbacks("handlerWillRespond"))a=await s({event:r,request:t,response:a});return a}async _awaitComplete(e,t,r,a){let s,n;try{s=await e}catch(n){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:r,response:s}),await t.doneWaiting()}catch(e){n=e}if(await t.runCallbacks("handlerDidComplete",{event:a,request:r,response:s,error:n}),t.destroy(),n)throw n}}},(e,t,r)=>{r.r(t),r.d(t,{StrategyHandler:()=>p});var a=r(14),s=(r(6),r(13)),n=r(19),o=r(21),i=r(22),c=(r(4),r(24)),l=r(7);r(50);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){return"string"==typeof e?new Request(e):e}class p{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new n.Deferred,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let r=d(e);if("navigate"===r.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?r.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))r=await e({request:r.clone(),event:t})}catch(e){throw new l.WorkboxError("plugin-error-request-will-fetch",{thrownError:e})}const s=r.clone();try{let e;e=await fetch(r,"navigate"===r.mode?void 0:this._strategy.fetchOptions);for(const r of this.iterateCallbacks("fetchDidSucceed"))e=await r({event:t,request:s,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:s.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),r=t.clone();return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){const t=d(e);let r;const{cacheName:a,matchOptions:s}=this._strategy,n=await this.getCacheKey(t,"read"),o=h(h({},s),{cacheName:a});r=await caches.match(n,o);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await e({cacheName:a,matchOptions:s,cachedResponse:r,request:n,event:this.event})||void 0;return r}async cachePut(e,t){const r=d(e);await(0,c.timeout)(0);const a=await this.getCacheKey(r,"write");if(!t)throw new l.WorkboxError("cache-put-with-no-response",{url:(0,i.getFriendlyURL)(a.url)});const n=await this._ensureResponseSafeToCache(t);if(!n)return!1;const{cacheName:u,matchOptions:h}=this._strategy,p=await self.caches.open(u),m=this.hasCallback("cacheDidUpdate"),g=m?await(0,s.cacheMatchIgnoreParams)(p,a.clone(),["__WB_REVISION__"],h):null;try{await p.put(a,m?n.clone():n)}catch(e){throw"QuotaExceededError"===e.name&&await(0,o.executeQuotaErrorCallbacks)(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:u,oldResponse:g,newResponse:n.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let r=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=d(await e({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[t]=r}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const r=this._pluginStateMap.get(t),a=a=>{const s=h(h({},a),{},{state:r});return t[e](s)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,r=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break;return r||t&&200!==t.status&&(t=void 0),t}}},()=>{try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}},(e,t,r)=>{r.r(t),r.d(t,{messages:()=>n});var a=r(4),s=r(22);r(50);const n={strategyStart:(e,t)=>`Using ${e} to respond to '${(0,s.getFriendlyURL)(t.url)}'`,printFinalResponse:e=>{e&&(a.logger.groupCollapsed("View the final response here."),a.logger.log(e||"[No response returned]"),a.logger.groupEnd())}}},(e,t,r)=>{r.r(t),r.d(t,{CacheOnly:()=>n});r(6),r(4);var a=r(7),s=r(48);r(51),r(50);class n extends s.Strategy{async _handle(e,t){const r=await t.cacheMatch(e);if(!r)throw new a.WorkboxError("no-response",{url:e.url});return r}}},(e,t,r)=>{r.r(t),r.d(t,{NetworkFirst:()=>o});r(6),r(4);var a=r(7),s=r(54),n=r(48);r(51),r(50);class o extends n.Strategy{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(s.cacheOkAndOpaquePlugin),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const r=[];const s=[];let n;if(this._networkTimeoutSeconds){const{id:a,promise:o}=this._getTimeoutPromise({request:e,logs:r,handler:t});n=a,s.push(o)}const o=this._getNetworkPromise({timeoutId:n,request:e,logs:r,handler:t});s.push(o);const i=await t.waitUntil((async()=>await t.waitUntil(Promise.race(s))||await o)());if(!i)throw new a.WorkboxError("no-response",{url:e.url});return i}_getTimeoutPromise({request:e,logs:t,handler:r}){let a;return{promise:new Promise((t=>{a=setTimeout((async()=>{t(await r.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:r,handler:a}){let s,n;try{n=await a.fetchAndCachePut(t)}catch(e){s=e}return e&&clearTimeout(e),!s&&n||(n=await a.cacheMatch(t)),n}}},(e,t,r)=>{r.r(t),r.d(t,{cacheOkAndOpaquePlugin:()=>a});r(50);const a={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null}},(e,t,r)=>{r.r(t),r.d(t,{NetworkOnly:()=>o});r(6),r(4);var a=r(24),s=r(7),n=r(48);r(51),r(50);class o extends n.Strategy{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let r,n;try{const r=[t.fetch(e)];if(this._networkTimeoutSeconds){const e=(0,a.timeout)(1e3*this._networkTimeoutSeconds);r.push(e)}if(n=await Promise.race(r),!n)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){r=e}if(!n)throw new s.WorkboxError("no-response",{url:e.url,error:r});return n}}},(e,t,r)=>{r.r(t),r.d(t,{StaleWhileRevalidate:()=>o});r(6),r(4);var a=r(7),s=r(54),n=r(48);r(51),r(50);class o extends n.Strategy{constructor(e){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(s.cacheOkAndOpaquePlugin)}async _handle(e,t){const r=t.fetchAndCachePut(e).catch((()=>{}));let s,n=await t.cacheMatch(e);if(n)0;else{0;try{n=await r}catch(e){s=e}}if(!n)throw new a.WorkboxError("no-response",{url:e.url,error:s});return n}}},(e,t,r)=>{r.r(t),r.d(t,{CacheableResponse:()=>a.CacheableResponse,CacheableResponsePlugin:()=>a.CacheableResponsePlugin});var a=r(58)},(e,t,r)=>{r.r(t),r.d(t,{CacheableResponse:()=>a.CacheableResponse,CacheableResponsePlugin:()=>s.CacheableResponsePlugin});var a=r(59),s=r(61);r(60)},(e,t,r)=>{r.r(t),r.d(t,{CacheableResponse:()=>a});r(6),r(7),r(22),r(4),r(60);class a{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}},()=>{try{self["workbox:cacheable-response:6.1.5"]&&_()}catch(e){}},(e,t,r)=>{r.r(t),r.d(t,{CacheableResponsePlugin:()=>s});var a=r(59);r(60);class s{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new a.CacheableResponse(e)}}},(e,t,r)=>{r.r(t),r.d(t,{CacheExpiration:()=>a.CacheExpiration,ExpirationPlugin:()=>a.ExpirationPlugin});var a=r(63)},(e,t,r)=>{r.r(t),r.d(t,{CacheExpiration:()=>a.CacheExpiration,ExpirationPlugin:()=>s.ExpirationPlugin});var a=r(64),s=r(67);r(66)},(e,t,r)=>{r.r(t),r.d(t,{CacheExpiration:()=>n});r(6);var a=r(17),s=(r(4),r(7),r(65));r(66);class n{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new s.CacheTimestampsModel(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),r=await self.caches.open(this._cacheName);for(const e of t)await r.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,(0,a.dontWaitFor)(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}},(e,t,r)=>{r.r(t),r.d(t,{CacheTimestampsModel:()=>i});var a=r(18),s=r(20);r(66);const n="cache-entries",o=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class i{constructor(e){this._cacheName=e,this._db=new a.DBWrapper("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore(n,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(0,s.deleteDatabase)(this._cacheName)}async setTimestamp(e,t){const r={url:e=o(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put(n,r)}async getTimestamp(e){return(await this._db.get(n,this._getId(e))).timestamp}async expireEntries(e,t){const r=await this._db.transaction(n,"readwrite",((r,a)=>{const s=r.objectStore(n).index("timestamp").openCursor(null,"prev"),o=[];let i=0;s.onsuccess=()=>{const r=s.result;if(r){const a=r.value;a.cacheName===this._cacheName&&(e&&a.timestamp<e||t&&i>=t?o.push(r.value):i++),r.continue()}else a(o)}})),a=[];for(const e of r)await this._db.delete(n,e.id),a.push(e.url);return a}_getId(e){return this._cacheName+"|"+o(e)}}},()=>{try{self["workbox:expiration:6.1.5"]&&_()}catch(e){}},(e,t,r)=>{r.r(t),r.d(t,{ExpirationPlugin:()=>c});r(6);var a=r(12),s=r(17),n=(r(22),r(4),r(3)),o=r(7),i=r(64);r(66);class c{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:r,cachedResponse:a})=>{if(!a)return null;const n=this._isResponseDateFresh(a),o=this._getCacheExpiration(r);(0,s.dontWaitFor)(o.expireEntries());const i=o.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){0}return n?a:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const r=this._getCacheExpiration(e);await r.updateTimestamp(t.url),await r.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(0,n.registerQuotaErrorCallback)((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===a.cacheNames.getRuntimeName())throw new o.WorkboxError("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new i.CacheExpiration(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),r=new Date(t).getTime();return isNaN(r)?null:r}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}}],t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{r.r(a);var e=r(1),t=r(32),s=r(45),n=r(57),o=r(62);(0,e.setCacheNameDetails)({prefix:"jerens-app",suffix:"v1"}),(0,t.registerRoute)((({request:e})=>"navigate"===e.mode),new s.NetworkFirst({cacheName:"pages",plugins:[new n.CacheableResponsePlugin({statuses:[200]})]})),(0,t.registerRoute)((({request:e})=>"style"===e.destination||"script"===e.destination||"worker"===e.destination),new s.StaleWhileRevalidate({cacheName:"assets",plugins:[new n.CacheableResponsePlugin({statuses:[200]})]})),(0,t.registerRoute)((({request:e})=>"image"===e.destination),new s.CacheFirst({cacheName:"images",plugins:[new n.CacheableResponsePlugin({statuses:[200]}),new o.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]})),self.addEventListener("message",(e=>{console.log(null==e?void 0:e.data)}))})()})();