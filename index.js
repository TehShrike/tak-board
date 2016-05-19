const Ractive = require('ractive')
const board = require('./board-1.html')
const p = require('tak-game/parse-position')

const boardState = p(`
	oxo |oo  |xox^|
	oO  |    |xxxx|oooo^
	    |xo  |o   |xox
	ox  |x   |xx  |o
`)

const ractive = new Ractive({
	el: '#board-1',
	template: board,
	data: {
		boardState
	}
})

console.log(ractive.get())

