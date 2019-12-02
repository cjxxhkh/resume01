$(window).on('scroll', function() {
	start()
})

function start() {
	$('.containr img').not('isLoad').each(function() {
		let $node = $(this)
		if (show($node)) {
			load($node)
		}
	})
}
function show($node) {
	return $node.offset().top <= $(window).height() + $(window).scrollTop()
}
function load($img) {
	$img.attr('src', $img.attr('data-src'))
	$img.attr('isLoad', 1)
}
