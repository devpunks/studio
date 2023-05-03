/*
  - Accessibility
    - [role=button] - https://www.w3.org/WAI/ARIA/apg/example-index/button/button.html
    - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#required_javascript_features
    - [aria-pressed=true] - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#toggle_button_example

  - Page Visibility
    - https://web.dev/pagevisibility-intro/
    - https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
    - https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event

  - Form Validation
    - https://www.quirksmode.org/blog/archives/2017/12/native_form_val.html
    - https://www.quirksmode.org/blog/archives/2017/12/native_form_val_1.html
    - https://www.quirksmode.org/blog/archives/2017/12/native_form_val_2.html
    - https://developer.mozilla.org/en-US/docs/Web/API/FormData
    - https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
    - https://www.quirksmode.org/blog/archives/2017/12/native_form_val.html
    - https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
*/
var
  first  = document.querySelector ('#first')
, second = document.querySelector ('#second')
, result = document.querySelector ('#result')

//, worker = 'Worker' in window && new Worker ('worker.js')

// Passive event listener for touch event
// https://developers.google.com/web/tools/lighthouse/audits/passive-event-listeners?utm_source=lighthouse&utm_medium=devtools
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
document.addEventListener
  ('touchstart', function () {}, { passive: true })


//worker.onmessage = function (e) {
//  result.textContent = e.data
//  console.log ('Message received from worker')
//}

//worker.postMessage ( [first.value, second.value] )
console.log ('loading index.js')

// FULLSCREEN
// https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
// https://developers.google.com/web/fundamentals/native-hardware/fullscreen/
window.scrollTo(0,1);