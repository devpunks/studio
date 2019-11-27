var
  first  = document.querySelector ('#first')
, second = document.querySelector ('#second')
, result = document.querySelector ('#result')

, worker =
    'Worker' in window && new Worker ('/worker.js')

// Passive event listener for touch event
// https://developers.google.com/web/tools/lighthouse/audits/passive-event-listeners?utm_source=lighthouse&utm_medium=devtools
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md

document.addEventListener
  ('touchstart', function () {}, { passive: true })


worker.onmessage = function (e) {
  result.textContent = e.data
  console.log ('Message received from worker')
}

first
&& first.addEventHandler ('change', function (e) {
  'postMessage' in worker
    && worker.postMessage ( [first.value, second.value] )

  console.log ('Message posted to worker', e)
})
