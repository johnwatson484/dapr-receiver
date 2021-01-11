(async function () {
  const config = require('./config')
  const { MessageReceiver, messageAction } = require('./messaging')

  const queueReceiver = new MessageReceiver('queue-receiver', config.queueConfig, messageAction)
  const subscriptionReceiver = new MessageReceiver('topic-receiver', config.subscriptionConfig, messageAction)

  process.on('SIGTERM', async function () {
    await queueReceiver.closeConnection()
    await subscriptionReceiver.closeConnection()
    process.exit(0)
  })

  process.on('SIGINT', async function () {
    await queueReceiver.closeConnection()
    await subscriptionReceiver.closeConnection()
    process.exit(0)
  })
}())
