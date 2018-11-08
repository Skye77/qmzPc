$(document).ready(function() {
	var type = getUP("type");
	if(type == '4'){
		$('#abouTit,#cutType').html("加盟合作");
		$('#anoutTab').children('li').removeClass('active');
		$('#anoutTab').children('li').eq(3).addClass('active');
		$('.abr_cont').hide();
		$('#Abcont_3').show();
	}else if(type == '5'){
		$('#abouTit,#cutType').html("加入我们");
		$('#anoutTab').children('li').removeClass('active');
		$('#anoutTab').children('li').eq(4).addClass('active');
		$('.abr_cont').hide();
		$('#Abcont_4').show();
	}
	//切换
	$('#anoutTab').children('li').each(function(index){
		$(this).off('click').on('click',function(){
			var cont = $(this).children('a').html();
			$('#abouTit,#cutType').html(cont);
			$(this).addClass('active').siblings('li').removeClass('active');
			$('.abr_cont').hide();
			$('#Abcont_'+(index+1)).show();
			if(cont == "联系我们"){
				baiduMap();//地图
			}
		});
	});
});
//获取url参数
function getUP(name){
	var paraMap = decodeURI(window.location.search);
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
	var r = paraMap.substr(1).match(reg); // 匹配目标参数
	if (r != null) {
		return unescape(r[2]);
	} else {
		return null; // 返回参数值
	}
}