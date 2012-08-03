function setSlide(clicker,next)
{
	$('.'+clicker).each(function() {
		var title = $(this), content = title.next('.'+next);
		title.click(function(){
			content.slideToggle();
		});
	});
}

$(document).ready(function() {
	setSlide('title','content');
	setSlide('question','answer');
	setSlide('subtitle','code');
});