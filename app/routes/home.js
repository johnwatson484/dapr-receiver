module.exports = [{
  method: 'POST',
  path: '/message',
  handler: (request, h) => {
    console.log('Received message')
    console.log(request.payload)
    return h.response().code(200)
  }
}]
