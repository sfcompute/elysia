import { Elysia } from '../src'
import { NodeAdapter } from '../src/adapter/node'

const app = new Elysia({ adapter: NodeAdapter, precompile: true })
	.post('/json', ({ body }) => body, {
		type: 'json'
	})
	.get('/', ({ request }) => {
		return 'Hi'
	})
	.get('/ok', () => {
		return 'Ok'
	})
	.listen(3000)

// console.log(app._handle.toString())
console.log(app.routes[0].composed.toString())
