function baiduMap(){
	//百度地图API功能
    var map = new BMap.Map("about_map");
    var point = new BMap.Point(106.6260309196,26.6616783519);
    map.centerAndZoom(point, 15);
    //店铺信息
    var json_data = [
	    	[106.6260309196,26.6616783519,'俏苗寨(新世界店)<br />地址：贵阳市观山湖区金朱路新世界永辉超市旁<br />电话：0851-84847299/84848099'],
	    	[106.7643586572,26.6065144096,'俏苗寨(未来方舟店)<br />地址：贵阳市云岩区水东路中天未来方舟D5组团6栋<br />电话：0851-85613296/85613396'],
	    	[106.7334297843,26.6094171570,'俏苗寨(大营坡店)<br />地址：贵阳市云岩区中建华府售楼部旁<br />电话：0851-86757808']
    	];
    var pointArray = new Array();
 	//信息窗口
	var opts = {
			width : 250,     // 信息窗口宽度
			height: 80,     // 信息窗口高度
			title : ""  // 信息窗口标题
//			enableMessage:true//设置允许信息窗发送短息
		};
	//默认打卡新世界信息窗口
	var infoWindow = new BMap.InfoWindow(json_data[0][2],opts);  // 创建信息窗口对象 
	map.openInfoWindow(infoWindow,point); //开启信息窗口
		
	//设置信息窗口	
    for(var i=0;i<json_data.length;i++){
        var marker = new BMap.Marker(new BMap.Point(json_data[i][0], json_data[i][1])); // 创建点
    	map.addOverlay(marker);    //增加点
    	pointArray[i] = new BMap.Point(json_data[i][0], json_data[i][1]);
    	var content = json_data[i][2];
    	addClickHandler(content,marker);       
	}
    //让所有点在视野范围内
    map.setViewport(pointArray);
    function addClickHandler(content,marker){
		marker.addEventListener("click",function(e){
			openInfo(content,e)
		});
	}
	function openInfo(content,e){
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	}
	//移动到某一坐标点
    function to(x,y){
        map.panTo(new BMap.Point(x,y)); 
    }
}
