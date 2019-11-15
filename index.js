const
  worker
, first  = document.querySelector `#first`
, second = document.querySelector `#second`
, result = document.querySelector `#result`

let
  worker =
    'Worker' in window && new Worker ('/worker.js')

worker.onmessage = e => {
  result.textContent = e.data
  console.log ('Message received from worker')
}

first.addEventHandler ('change', e => {
  'postMessage' in worker
    && worker.postMessage ( [first.value, second.value] )

  console.log ('Message posted to worker', e)
})
