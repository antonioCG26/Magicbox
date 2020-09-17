	$(function () { // wait for document ready
				/*	var controllerCapsule = new ScrollMagic.Controller();
						var Capsula = new TimelineMax()
						.fromTo(".animacion",5,{opacity:0},{opacity:1,marginTop:"20%"})
						.fromTo("#pantalla1",200,{opacity:0,x:"-1000px"},{opacity:1,x:"0px"})
						.fromTo("#pantalla1",200,{opacity:1,display:"block"},{opacity:0,display:"none",delay:400})
						.fromTo("#pantalla2",200,{opacity:0,x:"1000px"},{opacity:1,x:"0px"})
						.fromTo("#pantalla2",200,{opacity:1,display:"block"},{opacity:0,display:"none",delay:400})
						.fromTo("#pantalla3",200,{opacity:0,y:"1000px"},{opacity:1,y:"0px"})
						.fromTo("#pantalla3",400,{WebkitTransform:"rotateY(0deg)"},{WebkitTransform:"rotateY(90deg)",delay:400})
						.fromTo("#pantalla3",1,{display:"block"},{display:"none"})
						.fromTo("#pantalla4",1,{opacity:0},{opacity:1})
						.fromTo("#pantalla4",400,{WebkitTransform:"rotateY(90deg)"},{WebkitTransform:"rotateY(0deg)",delay:400})
					new ScrollMagic.Scene({
									triggerElement: ".animacion",
									triggerHook: "onLeave",
									duration: 2000
								})

					.setTween(Capsula) // trigger a TweenMax.to tween
					.setPin(".animacion")
					.addTo(controllerCapsule);
*/





				var screenNum= 0;
					sliderPantalla(screenNum);
				

	function sliderPantalla(position){
		$(".pantalla-mac").each(function(index,element)
		{
			console.log(element);
			if(index==position)
			{
				$(this).addClass("selected");
			}else{
				$(this).removeClass("selected");
			}
		});
	}
	
	$(".pantalla-mac").on("click",function(){
		if(screenNum<=2)
		{
			screenNum++;
			sliderPantalla(screenNum);
		}else
		{
			screenNum=0;
			sliderPantalla(0);
		}
	})
})