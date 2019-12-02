function Html(prod) {
	var html = ''
	html =
		'<li class="prod">' +
		'<div class="cover"><a href="#" class="btn action">删除</a></div>' +
		'<a href="">' +
		'<img src="' +
		prod.img +
		'">' +
		'<div class="prod-name"> ' +
		prod.name +
		'</div>' +
		'<div class="prod-price">' +
		prod.price +
		'</div>' +
		'</a>' +
		'</li>'
	return html
}
function Data() {
	var results = []
	for (var i = 0; i < 3; i++) {
		var rand = Math.floor(Math.random() * 100)
		var product = {
			img: 'http://picsum.photos/200/200/?image=' + rand,
			name: '福袋',
			price: '￥' + rand
		}
		results.push(product)
	}

	return results
}
$('.btn-add').on('click', function(e) {
	//e.preventDefault()
	$('.prod').removeClass('hover')
	var products = Data()
	$.each(products, function(idx, prod) {
		var html = Html(prod)
		$('.prod-ct').append(html)
	})
})
$('.btn-edit').on('click', function(e) {
	//e.preventDefault()
	$('.prod').toggleClass('hover')
})
$('.prod-ct').on('click', '.action', function(e) {
	//e.preventDefault()
	$(this).parents('.prod').remove()
})
