   function load(){
   	alert("Click On 'Status' to watch status");
   	alert("Click On 'Calls' to watch call histroy");
   }
	function slide1(){
		document.querySelector('.horizontal').style.transform="translateX(0%)";
		document.querySelector('.horizontal').style.transition="1s";
	}
	function slide2(){
		document.querySelector('.horizontal').style.transform="translateX(-33.30%)";
		document.querySelector('.horizontal').style.transition="1s";
	}
	function slide3(){
		document.querySelector('.horizontal').style.transform="translateX(-67%)";
		document.querySelector('.horizontal').style.transition="1s";
	}
  