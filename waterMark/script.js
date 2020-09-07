var globaluserId='用户名';
jQuery(document).ready(function () {
	if(watermark){
		var tem = window.setInterval(function () {
			watermark.load({ watermark_txt: "test666",userIdss:globaluserId });
			clearInterval(tem);
		},500);
		PointerEventsPolyfill.initialize({});
	}
})
