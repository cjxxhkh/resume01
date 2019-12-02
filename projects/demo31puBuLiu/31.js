let colcount
let colHeightArray = []

colcount = Math.floor($('.waterfall').width() / $('.waterfall img').outerWidth(true))
for (let i = 0; i < colcount; i++) {
	colHeightArray[i] = 0
}
$('.waterfall img').on('load', function() {
	let minValue = colHeightArray[0]
	let minindex = 0
	for (let i = 0; i < colcount; i++) {
		if (colHeightArray[i] < minValue) {
			minValue = colHeightArray[i]
			minindex = i
		}
	}
	console.log('minValue', minValue)

	$(this).css({
		left: $('.waterfall img').outerWidth(true) * minindex,
		top: minValue
	})
	colHeightArray[minindex] += $(this).outerHeight(true)
	console.log(colHeightArray)
})
