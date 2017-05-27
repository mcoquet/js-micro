const consul = require('consul')({promisify: true, host: 'consul'})

function getServiceNode (address) {
  console.log('looking up ', address)
  return consul.health.service(address)
}

module.exports = {
  call: (service, payload) => {
    getServiceNode(service)
    .then((serviceData) => {
      console.log('found', service)
      serviceData.forEach(function (serviceObj) {
        console.log(serviceObj.Service.Tags)
      }, this)
    })
    .catch(console.error)
  }
}
