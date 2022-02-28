
const port = process.env.PORT || 3000
const path = require('path')
const helmet = require('fastify-helmet')

const fastify = require('fastify')({
  logger: true
})

fastify.register(
  helmet,
)

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public')
})

const start = async () => {
  try {
    await fastify.listen(port, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

async function closeGracefully(signal) {
 await fastify.close()
 fastify.log.error(signal)
 process.exit()
}
process.on('SIGINT', closeGracefully)