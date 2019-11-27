const
  first  = document.querySelector `#first`
, second = document.querySelector `#second`
, result = document.querySelector `#result`

// PAssive event listener for touch event
// https://developers.google.com/web/tools/lighthouse/audits/passive-event-listeners?utm_source=lighthouse&utm_medium=devtools

let
  worker =
    'Worker' in window && new Worker ('/worker.js')

worker.onmessage = e => {
  result.textContent = e.data
  console.log ('Message received from worker')
}

first
&& first.addEventHandler ('change', e => {
  'postMessage' in worker
    && worker.postMessage ( [first.value, second.value] )

  console.log ('Message posted to worker', e)
})
