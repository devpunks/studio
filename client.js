import {
  Headers,
  Request,
  Response,
  default as fetch
} from "node-fetch"
import methods from "methods"

export default class Client {
  #router

  constructor(router) {
    this.#router = router
  }

  async request(url, options) {
    try { // check for URL
      return await fetch(url)
    } catch(e) {
      return await this.#route(...arguments)
    }
  }

  async #route(url, request = { method, url }) {
    console.log('URL', url)
    console.log('Request', request)
    return this.#router
      .handle( request, new Object, new Function )
  }
}

methods.reduce((_, method) =>
	Client.prototype[method] // http verb (head, get, post, put, patch, etc.)
    = async function (
        url
      , options = { url, method: method.toUpperCase() })
      { return await this.request(url, options) }
, null);
