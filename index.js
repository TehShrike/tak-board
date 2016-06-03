const Ractive = require('ractive')
const board = require('./board-1.html')
const p = require('tak-game/parse-position')

const boardState = p(`
	oxo |oo  |xox^|
	oO  |    |xxxx|oooo^
	    |xo  |O   |xox
	ox  |x   |xx  |o
`)

const ractive = new Ractive({
	el: '#tak-board-1',
	template: board,
	data: {
		boardState,
		squareOwner: function(pieces) {
			const length = pieces.length
			if (length === 0) {
				return ''
			} else {
				return pieces[length - 1].toLowerCase()
			}
		}
	}
})

console.log(ractive.get())

