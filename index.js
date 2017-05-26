const Client = require('./client')
const Server = require('./server')

module.exports = {
  init: () => { console.log('INIT') }, // this is meant as an initialization helper like reading confs from env , files or cli params
  client: () => { console.log('return a client'); return Client }, // the client lib. Use this to consume micro enabled services
  server: () => { console.log('return a server'); return Server } // the server lib. Use this to accept requests and send responses back up the pipe  
}
