const Ractive = require('ractive')
const board = require('./board-1.html')
const p = require('tak-game/parse-position')

const boardState = p(`
	oxo |oo  |xox^|
	oO  |    |xxxx|oooo^
	    |xo  |O   |xox
	ox  |x   |xx  |o
`)

const boardState2 = p(`
	ooxoxoX | oxo   | oo     |               |     |
	ooxo    | x     | xoxoox | oxoooxoxoxoox | o   | x
	o       | xooxoo| oxox   | oo            |     | xxxO
	oxooxoo^| oxox^ | xoxoo  | xxxo          | xxx^| oo
	oxo     | oo    |        | x             | ox  | x
	        | o^    | xoox   |               | x   | oxooxooxooxo

`)

function squareOwner(pieces) {
	const length = pieces.length
	if (length === 0) {
		return ''
	} else {
		return pieces[length - 1].toLowerCase()
	}
}

new Ractive({
	el: '#tak-board-1',
	template: board,
	data: {
		boardState,
		squareOwner
	}
})

new Ractive({
	el: '#tak-board-1b',
	template: board,
	data: {
		boardState: boardState2,
		squareOwner
	}
})


