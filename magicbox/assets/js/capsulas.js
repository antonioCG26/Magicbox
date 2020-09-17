	$(function () { // wait for document ready
					// init controller
					var controller1 = new ScrollMagic.Controller({container: ".emergente"});

					var capsula = new TimelineMax()
						.fromTo("#pantallas",1,{opacity:0},{opacity:1})
						.fromTo("#pantallas",500,{},{marginLeft:"0%"})
						.fromTo("#pantallas",1,{},{position:"absolute",top:"300px"})
						.fromTo("#pantalla1",10,{display:"block"},{display:"none",delay:10})


					// build scene
					var scene = new ScrollMagic.Scene(
						{triggerElement: "#titulo-emergente", 
						duration: 500,
						triggerHook:0})
						.setTween(capsula)
						.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
						.addTo(controller1);
				})