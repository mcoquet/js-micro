const client = require('../index.js').client()

client.call('go.micro.api', 'Hello')
