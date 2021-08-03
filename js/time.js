var ClockTick=self.setInterval("Tick()",300000);
function Tick()
{
    var obj=new Date();
    var hour=obj.getHours();
    if(hour >= 19)
    {
        document.getElementById('bg').src='./img/night.png';
    } else {
        document.getElementById('bg').src='./img/day.png';
    }
}
/*
var int=self.setInterval("clock()",1000);
function clock()
{
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("clock").value=t;
	alert("111");
}
*/