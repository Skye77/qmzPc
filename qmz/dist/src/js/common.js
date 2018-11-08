$(document).ready(function() {
	getAllcp();//所有菜品
});

//加载所有的菜品
function getAllcp(){
	var result = ["安顺裹卷","八宝蜜金瓜","赤水黑豆花","干锅带皮小黄牛","干锅辣子鸡","干锅杂烩","黄糖糍粑","贡菜炒腊肉","怪味花生","贵州宫保鸡","贵州黄糕粑","贵州辣子鸡","贵州卤味拼盘（小）","贵州卤味拼盘","贵州小米渣","贵州盐酸菜","干锅仔姜鸭","尖椒腰花","韭菜小河虾","蕨菜炒肉丝","腊味合蒸","醪糟兴义二块粑丝","老奶鸡汤馄饨","雷家豆腐圆子","镭钵烧椒皮蛋","凉拌米豆腐","卤味拼盘","玫瑰冰粉","苗家炒饭","苗家脆哨小土豆","苗家三宝","苗乡蕨根粉","苗寨带皮小黄牛","苗寨风味骨","苗寨瓜丝","苗寨烤脑花","苗寨奇味骨","苗寨烧椒肘子","苗寨生滚粥","苗寨生焖鳝鱼","农家豇豆焖茄子","泡椒拌毛肚","奇味爽肚","青菜豌豆烧排骨","青蒜蕨粑炒腊肉","青岩糕粑稀饭","青岩卤猪脚","三虫合一","手搓辣椒蘸酸菜","水豆豉拌何首乌","酸菜拌折耳根","酸菜炒汤圆","酸汤鱼","铁锅生煎饺","铜锅田间饭","土豆红烧肉","土鸡野菌钵","土碗盐菜肉","豌豆苗","五谷杂粮","五仁桂花汤圆","西红柿拌卷皮","西芹百合炒山药","香辣牛干巴","小慈菇炒油渣","血炒鸡鸭杂","洋芋粑粑","油渣青岩豆腐","油炸臭豆腐","有机蔬菜（小白菜）"]
	var html = '';
	for(var i=0;i<result.length;i++){
		if(i == 10||i == 24||i == 52||i == 58||i == 63||i == 69){
			html += '<li class="fl su">'+
				'<a href="javascript:;">'+
					'<img src="./dist/images/slidefood/'+(i+1)+'su'+result[i]+'.jpg" alt="'+result[i]+'" />'+
					'<span>'+result[i]+'</span>'+
				'</a>'+
			'</li>';
		}else{
			html += '<li class="fl">'+
				'<a href="javascript:;">'+
					'<img src="./dist/images/slidefood/'+(i+1)+result[i]+'.jpg" alt="'+result[i]+'" />'+
					'<span>'+result[i]+'</span>'+
				'</a>'+
			'</li>';
		}
	}
	$('#allCp').html(html);
	var slideObj = $("#cf_slide"),v = 1;//滚动的对象和其速率
	Rin(slideObj,v);
}
//菜品移动
function Rin($Box, v) { //$Box移动的对象，v对象移动的速率
 	var $Box_ul = $Box.find("ul"),
 		$Box_li = $Box_ul.find("li"),
 		$Box_li_span = $Box_li.find("span"),
 		left = 0,
 		s = 0,
 		timer; //定时器
 	$Box_li.each(function(index) {
 		$($Box_li_span[index]).width($(this).width()); //hover
 		s += $(this).outerWidth(true); //即要滚动的长度
 	});
 	window.requestAnimationFrame = window.requestAnimationFrame || function(Tmove) {
 		return setTimeout(Tmove, 1000 / 60)
 	};
 	window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
 	if(s >= $Box.width()) { //如果滚动长度超出Box长度即开始滚动，没有的话就不执行滚动
 		$Box_li.clone(true).appendTo($Box_ul);
 		Tmove();
 		function Tmove() {
 			//运动是移动left  从0到-s;（个人习惯往左滚）
 			left -= v;
 			if(left <= -s) {
 				left = 0;
 				$Box_ul.css("left", left)
 			} else {
 				$Box_ul.css("left", left)
 			}
 			timer = requestAnimationFrame(Tmove);
 		}
 		$Box_ul.hover(function() {
 			cancelAnimationFrame(timer)
 		}, function() {
 			Tmove()
 		});
 	}
}