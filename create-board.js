const Ractive = require('ractive')
const board = require('./board-1.html')

module.exports = function createBoard({ el, boardState, highlight, canClick }) {
	return new Ractive({
		el,
		template: board,
		data: {
			boardState,
			highlight: highlight || {},
			canClick: canClick || {},
			squareOwner,
			atLeastClasses
		}
	})
}

function squareOwner(pieces) {
	const length = pieces.length
	if (length === 0) {
		return ''
	} else {
		return pieces[length - 1].toLowerCase()
	}
}

function atLeastClasses(pieces) {
	return pieces.map((piece, index) => `at-least-${index + 1}`).join(' ')
}

