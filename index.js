const Ractive = require('ractive')
const board = require('./board.html')
const p = require('tak-game/parse-position')

const boardState = p(`
	oxo |oo  |xox^|
	oO  |    |xxxx|oooo^
	    |xo  |o   |xox
	ox  |x   |xx  |o
`)

const ractive = new Ractive({
	el: '#board',
	template: board,
	data: {
		boardState
	}
})

console.log(ractive.get())

