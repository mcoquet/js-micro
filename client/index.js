const consul = require('consul')({promisify: true, host: process.env.MICRO_REGISTRY_ADDRESS})

/*
{ Node:
     { ID: '8b0857a1-2741-d89d-867f-f954f58661cf',
       Node: '0565625755d3',
       Address: '127.0.0.1',
       Datacenter: 'dc1',
       TaggedAddresses: [Object],
       Meta: [Object],
       CreateIndex: 5,
       ModifyIndex: 6 },
    Service:
     { ID: 'go.micro.api-a47c15d8-20c6-11e8-a916-0242ac150003',
       Service: 'go.micro.api',
       Tags: [Object],
       Address: '172.21.0.3',
       Port: 36709,
       EnableTagOverride: false,
       CreateIndex: 9,
       ModifyIndex: 9 },
    Checks: [ [Object], [Object] ] }
*/

function getServiceNode (address) {
  console.log('looking up ', address)
  return consul.health.service(address)
}

function Init (options) {}

function Options () {}

function NewPublication (topic, message) {}

function NewRequest (service, method, req, reqOpts) {}

function NewProtoRequest (service, method, req, reqOpts) {}

function NewJsonRequest (service, method, req, reqOpts) {}

function Call (ctx, req, rsp, opts) {}

function CallRemote (ctx, addr, req, rsp, opts) {}

function Stream (ctx, req, opts) {}

function StreamRemote (ctx, addr, req, opts) {}

function Publish (ctx, p, opts) {}

module.exports = {
  Init,
  Options,
  NewPublication,
  NewRequest,
  NewProtoRequest,
  NewJsonRequest,
  Call,
  CallRemote,
  Stream,
  StreamRemote,
  Publish
}
