//calling jPreLoader
if (!($.browser.msie && $.browser.version.substr(0,1)<7)) {
	$('body').jpreLoader({
		splashID: "#loadingpage_wrap",
		loaderVPos: '80%',
		splashVPos: '25%',
		autoClose: true
	});
}
else
{
	$('#loadingpage_wrap').remove();
	$('body').show();
}
$('#loadingpage_wrap').fadeIn();

