var H={};//工具函数


H.getNowDateTime=function(){
		var time=new Date();
		var timeString=time.getFullYear()+"-"+
						(time.getMonth()+1)+"-"+
						time.getDate()+" "+
						time.getHours()+":"+
						time.getMinutes()+":"+
						time.getSeconds();
		return timeString;
};

H.getNowDate=function(){
	var time=new Date();
	var timeString=time.getFullYear()+"-"+
					(time.getMonth()+1)+"-"+
					time.getDate();
	return timeString;
}