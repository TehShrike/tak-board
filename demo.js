const p = require('tak-game/parse-position')
const createBoard = require('./create-board')

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

const highlight = {
	'1-3': true,
	'2-3': true
}

const canClick = {
	'2-3': true
}

const r = createBoard({
	el: '#tak-board-1',
	highlight,
	boardState,
	canClick
})

r.on('click', ({x, y}) => console.log('CLICK', x, y))
r.on('hover', ({x, y}) => console.log('HOVER', x, y))

createBoard({
	el: '#tak-board-1b',
	highlight,
	boardState: boardState2,
	canClick
})
