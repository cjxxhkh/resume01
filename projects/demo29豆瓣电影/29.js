$('footer>div').click(function() {
	$(this).addClass('active').siblings().removeClass('active')
	var index = $(this).index()
	$('section').hide().eq(index).fadeIn()
})
var indexs = 0
$.ajax({
	url: 'http://api.douban.com/v2/movie/top250',
	type: 'GET',
	data: {
		start: 0,
		count: 15
	},
	dataType: 'jsonp'
})
	.done(function(ret) {
		console.log(ret)
	})
	.fail(function() {
		console.log('error ...')
	})
