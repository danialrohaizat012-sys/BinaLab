const CACHE='binalab-v458';
const ASSETS=['./','./index.html','./en.html','./about-founder.html','./about-founder-en.html','./impact.html','./products.html','./google-business.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(async cache=>{await Promise.allSettled(ASSETS.map(url=>cache.add(url)))}))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('binalab-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
 const path=new URL(request.url).pathname.toLowerCase();
 // Never cache customer portals, internal Studio, Firebase code or query-string URLs.
 if(path.endsWith('/portal.html')||path.endsWith('/studio.html')||path.endsWith('/firebase-config.js')||new URL(request.url).search)return;
 if(request.mode==='navigate'){
  event.respondWith(fetch(request).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(request,copy)))}return response}).catch(()=>caches.match(request).then(hit=>hit||Response.error())));
  return;
 }
 event.respondWith(caches.match(request).then(hit=>hit||fetch(request).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(request,copy)))}return response})));
});
