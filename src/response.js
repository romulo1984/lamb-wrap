'use strict'

const Response = function (data, action) {
  this.data = data
  this.action = action
  this.send = () => action.context.succeed(this.data)
}

module.exports = Response
