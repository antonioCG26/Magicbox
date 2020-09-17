$('.btn-menu').click(function() { 
		$(this).toggleClass('active');
		$('#menu, nav').toggleClass('open');
		$(".menu-list").toggleClass("show");
		if($(this).hasClass("active")==true)
		{
			$(".btn-menu").attr("src","assets/img/Grupo 41@2x.png");
			$("#bullets").hide();

		}else{
			$(".btn-menu").attr("src","assets/img/burger.png");
			$("#bullets").show();
		}

	});

	$('#Burger-emergente-btn').click(function() { 
		$(this).toggleClass('active');
		$('#navbar-emergente').toggleClass('open');
		if($(this).hasClass("active")==true)
		{
			$("#Burger-emergente-btn").attr("src","assets/img/Grupo 41@2x.png");
			$("#categoria").css("display","block");
			$("#categoria").addClass("d-flex");
		}else{
			$("#Burger-emergente-btn").attr("src","assets/img/burger.png");
			$("#categoria").css("display","none");
			$("#categoria").removeClass("d-flex");
		}

	});

		$('.portafolio').click(function() { 
		$('.emergente').addClass('open');
		$('#btn-menu').css("display","none");
		$(".scrollContent").css("overflowX","hidden");
		$("#bullets").hide();

	});

	$('#emergenteClose, #Burger-emergente-close').click(function() { 
		$('.emergente').removeClass('open');
		$('#btn-menu').css("display","block");
		$(".scrollContent").css("overflowX","");
		window.scrollTo(0,4000);
		$("#bullets").show();


	});



	$(".instruccional").on("click",function(){
			var width = screen.width;

		if(width<600)
		{
			$("#cuadro-how").css("backgroundImage","url(assets/img/SB-22.png)");
			$("#icon-selected-text").html("");
		$("#icon-selected-text").html("<p>Una vez se tienen todos los inputs, se genera <br>una propuesta instruccional que transmite el contenido al usuario final, la cual es revisada<br> y aprobada por el cliente.</p>");
		}else{
			$("#cuadro-how").css("backgroundImage","url(assets/img/SB-19.png)");
			$("#icon-selected-text").html("");
		$("#icon-selected-text").html("<p>Una vez se tienen todos los inputs, se genera una propuesta instruccional que transmite el contenido al usuario final, la cual es revisada y aprobada por el cliente.</p>");
		}
		$(".instruccional").attr("src","assets/img/1-hover.png");
		$(".diseño").attr("src","assets/img/2.png");
		$(".integracion").attr("src","assets/img/3.png");
		$(".juntos").attr("src","assets/img/4.png");
		$("#icon-selected").attr("src","assets/img/icon-instruccional.png");
		$("#icon-selected-text").css("color","white");
		
	});

	

	$(".diseño").on("click",function(){
			var width = screen.width;

		if(width<600)
		{
			$("#cuadro-how").css("backgroundImage","url(assets/img/SB-23.png)");
			$("#icon-selected-text").html("");
		$("#icon-selected-text").html("<p>En la segunda fase, el material se transforma.<br> Los diseñadores toman todos los elementos instruccionales y les dan vida, haciendo que lo que en algún momento era una idea en una hoja de papel, ahora sea toda una experiencia educativa superior.</p>");
		}else{
			$("#cuadro-how").css("backgroundImage","url(assets/img/SB-18.png)");
			$("#icon-selected-text").html("");
		$("#icon-selected-text").html("<p>En la segunda fase, el material se transforma.<br> Los diseñadores toman todos los elementos instruccionales y les dan vida, haciendo que lo que en algún momento<br> era una idea en una hoja de papel, ahora sea toda una experiencia educativa superior.</p>");
		}
		$(".instruccional").attr("src","assets/img/1.png");
		$(".diseño").attr("src","assets/img/2-hover.png");
		$(".integracion").attr("src","assets/img/3.png");
		$(".juntos").attr("src","assets/img/4.png");
		$("#icon-selected").attr("src","assets/img/design-icon.png");
		$("#icon-selected-text").css("color","white");
		
	});
	$(".integracion").on("click",function(){
			var width = screen.width;

		if(width<600)
		{
			$("#cuadro-how").css("backgroundImage","url(assets/img/SB-24.png)");
					$("#icon-selected-text").html("");
		$("#icon-selected-text").html("<p>Por último, todo el trabajo realizado se integra tecnológicamente para que el material realizado pueda ser presentado  de la mejor manera a los usuarios y así aseguramos su total efectividad.</p>");			
		}else{
			$("#cuadro-how").css("backgroundImage","url(assets/img/SB-19.png)");
					$("#icon-selected-text").html("");
		$("#icon-selected-text").html("<p>Por último, todo el trabajo realizado se integra tecnológicamente para que el material realizado pueda <br>ser presentado  de la mejor manera a los usuarios <br>y así aseguramos su total efectividad.</p>");
		}
		$(".instruccional").attr("src","assets/img/1.png");
		$(".diseño").attr("src","assets/img/2.png");
		$(".integracion").attr("src","assets/img/3-hover.png");
		$(".juntos").attr("src","assets/img/4.png");
		$("#icon-selected").attr("src","assets/img/integrador-icon.png");
		$("#icon-selected-text").css("color","white");

	});

	$(".juntos").on("click",function(){
			var width = screen.width;

		if(width<600)
		{
			$("#cuadro-how").css("backgroundImage","url(assets/img/SB-21.png)");
					$("#icon-selected-text").html("");
		$("#icon-selected-text").html("<p>Para dar atención personalizada y mantener<br> una comunicación efectiva con nuestros<br> clientes, hemos divido al equipo en 3 streams:</p><h4><span class='mx-2' style='color:#5B1DEC'>#HappyTeam</span>   <span class='mx-2' style='color:#3B1399'>#MAZ</span>   <span class='mx-2' style='color:#5F20F3'>#GrowthAcademy</span></h4>");
		}else{
			$("#cuadro-how").css("backgroundImage","url(assets/img/SB-20.png)");
					$("#icon-selected-text").html("");
		$("#icon-selected-text").html("<p>Para dar atención personalizada y mantener<br> una comunicación efectiva con nuestros clientes,<br> hemos divido al equipo en 3 streams:</p><h4><span class='mx-2' style='color:#5B1DEC'>#HappyTeam</span>   <span class='mx-2' style='color:#3B1399'>#MAZ</span>   <span class='mx-2' style='color:#5F20F3'>#GrowthAcademy</span></h4>");
		}
		$(".instruccional").attr("src","assets/img/1.png");
		$(".diseño").attr("src","assets/img/2.png");
		$(".integracion").attr("src","assets/img/3.png");
		$(".juntos").attr("src","assets/img/4-hover.png");
		$("#icon-selected").attr("src","assets/img/juntos-icon.png");

		$("#icon-selected-text p").css("color","black");

	});

	$(".icon-fases").on("mouseover",function(){
		$(this).css("width","70px");
	});
	$(".icon-fases").on("mouseout",function(){
		$(this).css("width","50px");
	})


	function btnListPeople(listnum){
		switch (listnum)
		{
			case 1:
			$(".lentes").attr("src","assets/img/lentes-hover.png");
			$(".bigote").attr("src","assets/img/bigote.png");
			$(".wink").attr("src","assets/img/wink.png");
			$(".integrantes1").css("display","block");
			$(".integrantes2").css("display","none");
			$(".integrantes3").css("display","none");
			break;
			case 2:
			$(".lentes").attr("src","assets/img/lentes.png");
			$(".bigote").attr("src","assets/img/bigote-hover.png");
			$(".wink").attr("src","assets/img/wink.png");
			$(".integrantes1").css("display","none");
			$(".integrantes2").css("display","block");
			$(".integrantes3").css("display","none");
			break;
			case 3:
			$(".lentes").attr("src","assets/img/lentes.png");
			$(".bigote").attr("src","assets/img/bigote.png");
			$(".wink").attr("src","assets/img/wink-hover.png");
			$(".integrantes1").css("display","none");
			$(".integrantes2").css("display","none");
			$(".integrantes3").css("display","block");
			break;
		}
	}


   
	
	

	

 	
 	

	$(function () { // wait for document ready
	window.onload = function(event){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   					orientationJS(event.currentTarget.screen.orientation.angle)

		}else{
			orientationJS(0)
		}
		console.log(event);
	}

	window.onorientationchange = function(event) { 
  		var orientation = window.screen.orientation;
  		console.log(orientation); 
  		orientationJS(window.screen.orientation.angle)	
};

	function orientationJS(orientation)
	{
		var controller = new ScrollMagic.Controller();
		switch (orientation)
				{
					case 0:
					var videoAnimacion = new TimelineMax()
								.fromTo(".navbar",{display:"blocks"},{display:"none",duration:3})
							    .fromTo("#green-x",{top:"10vh"},{top:"80vh",duration:9})
							    .fromTo("#blue-x",{bottom:"10vh"},{bottom:"87vh",duration:9},"-=9")
								.fromTo("#MagicBoxBig",{top:"0%"},{top:"0%",duration:15},"-=9")
								.fromTo("#grupoMas",{opacity:1},{opacity:0,duration:4},"-=7")
								.fromTo("#MagicBoxText",{opacity:0},{opacity:1,duration:3,delay:2},"-=7")
								.fromTo("#transparent-x",{top:"85%"},{left:"50%",opacity:0,duration:6},"-=7")
								.fromTo("#screen2",{opacity:0},{opacity:1,duration:6},"-=7")
								.fromTo("#green-x,#blue-x,#MagicBoxBig,#MagicBoxText,#transparent-x,#down",{},{y:"-900",duration:9,delay:40})
								.fromTo("#green-x,#blue-x,#MagicBoxBig,#MagicBoxText,#transparent-x,#down",{display:"blocks"},{display:"none"})
								.fromTo("#screen2",{},{marginTop:"0vh",opacity:1,duration:5},"-=9.5")
								.fromTo(".somosMB", 10, {rotation: 0}, {rotation: 135, ease:"back.out(2.7)",duration:10,delay:0},"-=6")
								.fromTo(".boton-play",{scale:1},{scale:40,duration:35},"-=9")
								.fromTo("#video1",{opacity:0},{opacity:1,duration:5},"-=31")
								.fromTo(".borde,.somosMB",{display:"blocks"},{display:"none"},"-=4")
								.fromTo(".boton-play",{display:"blocks"},{display:"none",duration:1})
								.fromTo("#titlechart",{backgroundImage:"url(assets/img/fondo@2x.png)"},{backgroundImage:"url(assets/img/fondoblenco.jpg)"},"-=5")
								.fromTo("#ourwork-title",10, {x:  "100%"}, {x: "5%", ease:"back.out(1.7)"})
								.fromTo("#video1",{},{y:"-1300",duration:15},"-=16")
								.fromTo("#carousel",40, {left:  "-4000px"}, {left: "20px", ease: Linear.easeNone},"-=30")
								.fromTo(".how",1,{opacity:0},{opacity:1},"-=8")
								.fromTo(".how",7,{top:"100%"},{top:"65%"},"-=8")
								.fromTo("#carousel",16,{},{y:"-2000px"})
								.fromTo(".how",6,{top:"65%"},{top:"0%"},"-=16")
								.fromTo("#como-title",5,{x: "-100"},{x:"-500"},"-=16")
								.fromTo("#carousel",1,{display:"blocks"},{display:"none"})
								.fromTo("#como-title",4,{paddingTop:"30%"},{paddingTop:"1%"},"-=16")
								.fromTo("#ourPeople",1,{opacity:0},{opacity:1})
								.fromTo("#ourPeople",10,{bottom:"100%"},{bottom:"0%"})
					break;
					case 90:
					var videoAnimacion = new TimelineMax()
								.fromTo(".navbar",{display:"blocks"},{display:"none",duration:3})
							    .fromTo("#green-x",{top:"10vh"},{top:"80vh",duration:9})
							    .fromTo("#blue-x",{bottom:"10vh"},{bottom:"87vh",duration:9},"-=9")
								.fromTo("#MagicBoxBig",{top:"0%"},{top:"0%",duration:15},"-=9")
								.fromTo("#grupoMas",{opacity:1},{opacity:0,duration:4},"-=7")
								.fromTo("#MagicBoxText",{opacity:0},{opacity:1,duration:3,delay:2},"-=7")
								.fromTo("#transparent-x",{top:"85%"},{left:"50%",opacity:0,duration:6},"-=7")
								.fromTo("#green-x,#blue-x,#MagicBoxBig,#MagicBoxText,#transparent-x,#down",{},{y:"-500",duration:19,delay:20})
								.fromTo("#screen2",{opacity:0},{opacity:1,duration:5},"-=10")
								.fromTo("#green-x,#blue-x,#MagicBoxBig,#MagicBoxText,#transparent-x,#down",{display:"blocks"},{display:"none"})
								.fromTo(".somosMB", 10, {rotation: 0}, {rotation: 135, ease:"back.out(2.7)",duration:10,delay:0},"-=6")
								.fromTo(".boton-play",{scale:1},{scale:40,duration:35},"-=9")
								.fromTo("#video1",{opacity:0},{opacity:1,duration:5},"-=31")
								.fromTo(".borde,.somosMB",{display:"blocks"},{display:"none"},"-=4")
								.fromTo(".boton-play",{display:"blocks"},{display:"none",duration:1})
								.fromTo("#titlechart",{backgroundImage:"url(assets/img/fondo@2x.png)"},{backgroundImage:"url(assets/img/fondoblenco.jpg)"},"-=5")
								.fromTo("#ourwork-title",10, {x:  "100%"}, {x: "5%", ease:"back.out(1.7)"})
								.fromTo("#video1",{},{y:"-1300",duration:15},"-=16")
								.fromTo("#carousel",40, {left:  "-2000px"}, {left: "20px", ease: Linear.easeNone},"-=30")
								.fromTo(".how",1,{opacity:0},{opacity:1},"-=8")
								.fromTo(".how",7,{top:"100%"},{top:"65%"},"-=8")
								.fromTo("#carousel",16,{},{y:"-2000px"})
								.fromTo(".how",6,{top:"65%"},{top:"0%"},"-=16")
								.fromTo("#como-title",5,{x: "-100"},{x:"-500"},"-=16")
								.fromTo("#carousel",1,{display:"blocks"},{display:"none"})
								.fromTo("#como-title",4,{paddingTop:"30%"},{paddingTop:"1%"},"-=16")
								.fromTo("#cuadro-how",4,{},{top:"-150px"})
								.fromTo("#ourPeople",1,{opacity:0},{opacity:1})
								.fromTo("#ourPeople",10,{bottom:"100%"},{bottom:"0%"})
					break;

				}	

							new ScrollMagic.Scene({
									triggerElement: "#titlechart",
									triggerHook: "onLeave",
									duration: "6000"
								})
								.setTween(videoAnimacion) // trigger a TweenMax.to tween
								.setPin("#titlechart")
								//.addIndicators()  add indicators (requires plugin)
								.on("progress",function(event){
									console.log(event.progress);
									if(event.progress<.70)
									{
										$("#bullet1").css("backgroundColor","#01FFA2");
										$("#bullet2").css("backgroundColor","transparent");
										$("#bullet3").css("backgroundColor","transparent");
									}else if(event.progress<.95)
									{
										$("#bullet1").css("backgroundColor","transparent");
										$("#bullet2").css("backgroundColor","#01FFA2");
										$("#bullet3").css("backgroundColor","transparent");
									}else{
										$("#bullet1").css("backgroundColor","transparent");
										$("#bullet2").css("backgroundColor","transparent");
										$("#bullet3").css("backgroundColor","#01FFA2");
									}

									var framenum = event.progress*10/.3;
									framenum = Math.round(framenum);
									if(framenum>9){
										framenum=9;
									}

									animacionMB(framenum);

								}



								)
								.addTo(controller);
	}
				

				
							




								// change behaviour of controller to animate scroll instead of jump
	
	
			$("#section1").on("click",function(){
				window.scrollTo(0,0);
				$('#menu, nav').toggleClass('open');
				$(".menu-list").toggleClass("show");
				if($(this).hasClass("active")==true)
				{
					$(".btn-menu").attr("src","assets/img/Grupo 41@2x.png");
				}else{
					$(".btn-menu").attr("src","assets/img/burger.png");
				}
			});
				
			
			 $("#section2").on("click",function(){
			 	window.scrollTo(0,4500);
				$('#menu, nav').toggleClass('open');
				$(".menu-list").toggleClass("show");
				if($(this).hasClass("active")==true)
				{
					$(".btn-menu").attr("src","assets/img/Grupo 41@2x.png");
				}else{
					$(".btn-menu").attr("src","assets/img/burger.png");
				}
			});
				
			
			$("#section3").on("click",function(){
				window.scrollTo(0,6000);
				$('#menu, nav').toggleClass('open');
				$(".menu-list").toggleClass("show");
				if($(this).hasClass("active")==true)
				{
					$(".btn-menu").attr("src","assets/img/Grupo 41@2x.png");
				}else{
					$(".btn-menu").attr("src","assets/img/burger.png");
				}

			})
					
			
		//  bind scroll to anchor links
	$(document).on("click", ".item", function (e) {
		var id = $(this).attr("id");
		console.log(id)
		switch (id)
		{
			case "bullet1":
				window.scrollTo(0,0);
				
			break;
			case "bullet2":
				window.scrollTo(0,4500);
				
			break;
			case "bullet3":
				window.scrollTo(0,6000);
				
			break
		}
	});

	$( document ).ready(function() {
		screen.orientation.unlock();


    		slidePeople();
    		imgTeam();

		});








	var numberPerson=0;

	$("#btn-izquierda").on("click",function(){
		console.log("izquierda");
			if(numberPerson==0)
			{
				numberPerson=TotalPerson;
			}else{
				numberPerson=numberPerson-1;
			}
			slidePeople();
		});

	$("#btn-derecha").on("click",function(){
		console.log("derecha");
		console.log(numberPerson);
		console.log(TotalPerson);
			if(numberPerson==TotalPerson)
			{
				numberPerson=0;
			}else{
				numberPerson=numberPerson+1;

			}
			slidePeople();
			
		});

	

	var TotalPerson = 0;
	function slidePeople(){
		TotalPerson=0;
		if(numberPerson<=7)
		{
			$(".integrantes1").css("display","block");
			$(".integrantes2").css("display","none");
			$(".integrantes3").css("display","none");
		}else if(numberPerson<=14){
			$(".integrantes1").css("display","none");
			$(".integrantes2").css("display","block");
			$(".integrantes3").css("display","none");
		}else{
			$(".integrantes1").css("display","none");
			$(".integrantes2").css("display","none");
			$(".integrantes3").css("display","block");
		}
		console.log(numberPerson);
			$(".list-people").each(function(index,element)
		{
			console.log();
			if(index == numberPerson)
			{
				$(element).removeClass("d-none");
			}else{
				$(element).addClass("d-none");
			}
			TotalPerson =index;
		});
			console.log(TotalPerson);
	}

	function imgTeam(){
			$(".list-people").each(function(index,element)
		{
			

			var width = screen.width;

			if(width>600){
				srt=element.firstChild.nextSibling.src;
				srt=srt.replace("integrantes","CUADRADAS");
				element.firstChild.nextSibling.src = srt;
				console.log(srt);
			}
		});
	}

		function animacionMB(framenum){
			var width = screen.width;
			if(width<1200)
			{	
				$("#MagicBoxBig").css("backgroundImage","url(assets/img/outro50.png)");
				
				var anchura = 409.6;
				var altura = 190;
				console.log(framenum);
				var framewidht = framenum * anchura;
				$("#MagicBoxBig").css("backgroundPosition","-"+framewidht+"px 0px");
			}else{
				$("#MagicBoxBig").css("backgroundImage","url(assets/img/outro.png)");
				var anchura = 819.1;
				var altura = 379;
				console.log(framenum);
				var framewidht = framenum * anchura;
				$("#MagicBoxBig").css("backgroundPosition","-"+framewidht+"px 0px");
			}
				
			}



});

