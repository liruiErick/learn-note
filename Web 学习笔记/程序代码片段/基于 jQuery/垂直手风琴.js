require(['jquery.animate'], function($) {

	var $alla = $('#aside .sec-3 dt>a'),
		$allu = $('#aside .sec-3 dt>ul');

	$alla.first().addClass('active');
	$allu.not(':first').hide();

	$alla.click(function() {
		var $a = $(this),
			$u = $a.next();
		if ($u.is(':hidden')) {
			$allu.filter(':visible').stop().slideUp();
			$u.stop().slideDown();
			$a.addClass('active');
		}
	});
});