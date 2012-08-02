$(document).ready(function() {
	$('.title').each(function() {
		var title = $(this), content = title.next('.content');
		title.click(function(){
			content.slideToggle();
		});
	});
});