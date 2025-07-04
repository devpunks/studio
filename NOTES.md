// HTTP/2
  - https://gitlab.com/sebdeckers/http2server#README
  - https://github.com/GoogleChrome/simplehttp2server

// https://github.com/w3c/webcomponents/issues/509#issuecomment-230700060

SNUGGSI

Javascript optimizations (Developer Ergonomics)
https://leftshift.io/4-javascript-optimisations-you-should-know

Hidden Classes & Inline Caching
http://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html
https://github.com/sq/JSIL/wiki/Optimizing-dynamic-JavaScript-with-inline-caches

Type Coercion
String([‘foo’, ‘bar’])
[‘foo’] + ‘'
[].concat

TRAILING SLASH
- https://tools.ietf.org/html/rfc3986#section-3.3
- https://github.com/pedestal/pedestal/pull/352
- https://groups.google.com/forum/#!topic/api-craft/L2YlSS7FmEk
- https://github.com/pyeve/eve/issues/118#issuecomment-373893759

CONDITIONAL (IF) vs Expressions. https://fsharpforfunandprofit.com/posts/expressions-vs-statements

WEB PLATFORM STATUS - https://platformstatus.io

https://webkit.org/status
https://chromestatus.com/features
https://developer.microsoft.com/en-us/microsoft-edge/platform/status

HTML
Mathematical Programming Contexts.
Removal of <head> <html> <body> # See GOOGLE HTML Guide.
No IE Support
https://meyerweb.com/eric/thoughts/2009/01/22/using-http-headers-to-serve-styles

H/2 (HTTP 2)
Server strategy https://support.cloudflare.com/hc/en-us/articles/218367338-HTTP-2-Server-Push
https://hpbn.co/http2
Pagination with HTTP <link> - https://developer.github.com/v3/guides/traversing-with-pagination

Prefetch, Preload Resources with <link>
<link rel=preload> https://w3c.github.io/preload
https://codepen.io/tigt/post/async-css-without-javascript
https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
https://github.com/Fyrd/caniuse/issues/2130#issuecomment-189755682
https://fetch.spec.whatwg.org/#concept-request-destination

Server Push
Preload https://smashingmagazine.com/2016/02/preload-what-is-it-good-for
https://smashingmagazine.com/2017/04/guide-http2-server-push
Protocol Agnostic - //
Destroy all IFs - http://degoes.net/articles/destroy-all-ifs
Brotli compression
https://github.com/devpunks/snuggsi/tree/master/dist#brotli-compression-minbr
GZIP Compression
https://github.com/devpunks/snuggsi/tree/master/dist#gzip-compression-mingz
.es application/ecmascript extension
https://tools.ietf.org/html/rfc4329#section-8.2
Font Loading
https://tabatkins.github.io/specs/css-font-display
FontFace API
    Oh the irony not supported in IE (they made @font-face)
    https://igvita.com/2014/01/31/optimizing-web-font-rendering-performance
    https://gist.github.com/paulirish/d511793a1c3b74b31460
    http://caniuse.com/#feat=font-loading
    https://drafts.csswg.org/css-font-loading
    https://developer.mozilla.org/en-US/docs/Web/API/FontFace


 application/ecmascript (.es) file extension - https://tools.ietf.org/html/rfc4329#section-8.2

 Page visibility API
 https://html5rocks.com/en/tutorials/pagevisibility/intro
  https://w3.org/TR/page-visibility/#sec-document-interface
  Responsive typography. https://twitter.com/sarah_edo/status/856543697462325248
  Battery API - https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API
  Link in body
  https://jakearchibald.com/2016/link-in-body
  https://w3.org/Bugs/Public/show_bug.cgi?id=27303
  https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/ZAPP8aTnyn0
  https://github.com/whatwg/html/commit/179983e9eb99efe417349a40ebb664bd11668ddd
  Intersection Observer
  https://platform-status.mozilla.org/#intersection-observer

  CSS Snappoints (OH SNAP!)
    https://blog.hospodarets.com/css-scroll-snap
    https://w3.org/TR/css-scroll-snap-1
    https://drafts.csswg.org/css-scroll-snap
    http://caniuse.com/#feat=css-snappoints
    https://css-tricks.com/introducing-css-scroll-snap-points
  https://github.com/ckrack/scrollsnap-polyfill

  CSS Grids
    https://alistapart.com/article/practical-grid
    https://webkit.org/status/#specification-css-grid-layout-level-1
    https://developer.microsoft.com/en-us/microsoft-edge/platform/status/cssgridlayout
  Tom Ethernet Packet
    - https://en.wikipedia.org/wiki/Ethernet_frame#Structure
    - https://en.wikipedia.org/wiki/Maximum_transmission_unit
  Progressive Web Apps 
    - https://medium.com/javascript-scene/native-apps-are-doomed-ac397148a2c0
  Chrome timeline GIF - https://blog.hospodarets.com/chrome-timeline-to-gif
  ECMAScript modules in the browser
  Don’t Bundle Your Modules 
  https://dl.dropboxusercontent.com/u/20140634/script-type-module/images/asyncdefer.svg
  https://github.com/whatwg/html/pull/443
  https://github.com/whatwg/loader/issues/83#issuecomment-166442597
  https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/#RPFVZO0LoQM5QwHT.97
  https://blog.hospodarets.com/native-ecmascript-modules-new-features
  https://github.com/whatwg/html/pull/2261
  https://html.spec.whatwg.org/multipage/scripting.html#attr-script-nomodule
  https://trac.webkit.org/changeset/211078/webkit
  "smoke server" https://vercel.com/docs
  Pure CSS Tabs
  ES File Extension

Leading Forward Slash
  http://stackoverflow.com/q/4659345/is-there-any-downside-for-using-a-leading-double-slash-to-inherit-the-protocol-i
  Difference between the W3C and WHATWG
    Regular Expressions:
    Non Capturing - http://stackoverflow.com/q/3512471/what-is-a-non-capturing-group-what-does-a-question-mark-followed-by-a-colon
Cosole
  https://developer.mozilla.org/en-US/docs/Web/API/Console/table
  Merging objects Object.assign https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Merging_objects
  Can drag elements in developer console.
  Can use $0= as current context
  Destructing https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  hidden https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden
Counters
  https://davidwalsh.name/css-counters
  https://youtube.com/watch?v=Snj31cMmZ2c
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters
will-change -
  https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
  http://cssmojo.com/the-dark-side-of-the-will-change-property/
  https://css-tricks.com/prefetching-preloading-prebrowsing/
  Link Prefetching - https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
  preconnect, prefetch, preload, prerender https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
