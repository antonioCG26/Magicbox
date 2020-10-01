$(window).on("load",function(){
	infografiaSlider();
	navbarEmergente();
	
});
$(window).on("resize",function(){
	infografiaSlider();
	navbarEmergente();
	imgTeam();

});
function infografiaSlider(){
	var SWidth = screen.width;
	console.log(SWidth);
	if(SWidth>=1024)
	{
		$("#container-infografia").html("");
		$("#container-infografia").html('<div class="carousel slide" data-ride="carousel" id="carousel-3" style="text-align: -webkit-center">'+
            '<div class="carousel-inner" role="listbox">'+
                '<!-- Primeras tres infografías -->'+
                '<div class="carousel-item active">'+
                    '<div class="row">'+
                        '<div class="col-md-4 col-4">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39;{"caption" : "BOX and WHISKERS plot!"}&#39; href="assets/img/infografia/P1.jpg"><img class="card-img-top" src="assets/img/infografia/POSTER1.png" alt="Slide Image"></a>'+
                            '</div>'+
                        '</div>'+
                        '<div class="col-md-4 col-4">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39;{"caption" : "Happy Team"}&#39; href="assets/img/infografia/P2.jpg">'+
                                    '<img class="card-img-top" src="assets/img/infografia/POSTER2.png" alt="Slide Image"></a>'+
                            '</div>'+
                        '</div>'+
                        '<div class="col-md-4 col-4">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39;{"caption" : "SCRUM POKER - Game Rules"}&#39; href="assets/img/infografia/P3.jpg"><img class="card-img-top" src="assets/img/infografia/POSTER3.png" alt="Slide Image">'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<!-- Fin primers tres Infografías -->'+
                '<!-- Primeras tres infografías -->'+
                '<div class="carousel-item">'+
                    '<div class="row">'+
                        '<div class="col-md-4 col-4 ">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39&#39;{"caption" : "COOLERS estrategias para su instalación"}&#39&#39; href="assets/img/infografia/P4.jpg"><img class="card-img-top" src="assets/img/infografia/POSTER4.png" alt="Slide Image">'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                        '<div class="col-md-4 col-4 ">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39&#39;{"caption" : "Activaciones"}&#39&#39; href="assets/img/infografia/P5.jpg"><img class="card-img-top" src="assets/img/infografia/POSTER5.png" alt="Slide Image"></a>'+
                            '</div>'+
                        '</div>'+
                        '<div class="col-md-4 col-4 ">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39&#39;{"caption" : "ONEWAY ANOVA"}&#39&#39; href="assets/img/infografia/P6.jpg"><img class="card-img-top" src="assets/img/infografia/POSTER6.png" alt="Slide Image">'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<!-- Fin primers tres Infografías -->'+
                '<!-- Primeras tres infografías -->'+
                '<div class="carousel-item">'+
                    '<div class="row">'+
                        '<div class="col-md-4 col-4 ">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<img class="card-img-top" src="assets/img/infografia/POSTER7.png" alt="Slide Image">'+
                            '</div>'+
                        '</div>'+
                        '<div class="col-md-4 col-4 ">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<img class="card-img-top" src="assets/img/infografia/POSTER8.png" alt="Slide Image">'+
                            '</div>'+
                        '</div>'+
                        '<div class="col-md-4 col-4 ">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39;{"caption" : "SCRUM Framework Rules"}&#39; href="assets/img/infografia/P9.jpg"><img class="card-img-top" src="assets/img/infografia/POSTER9.png" alt="Slide Image">'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<!-- Fin primers tres Infografías -->'+
            '</div>'+
            '<ol class="carousel-indicators">'+
                '<li data-target="#carousel-1" data-slide-to="0" class="active"></li>'+
                '<li data-target="#carousel-1" data-slide-to="1"></li>'+
                '<li data-target="#carousel-1" data-slide-to="2"></li>'+
            '</ol>'+
        '</div>');
	}else{
		$("#container-infografia").html("");
		$("#container-infografia").html('<div class="carousel slide" data-ride="carousel" id="carousel-3" style="text-align: -webkit-center">'+
            '<div class="carousel-inner" role="listbox">'+
                '<div class="carousel-item active">'+ 
                        '<div class="col-12 ml-4">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39;{"caption" : "BOX and WHISKERS plot!"}&#39; href="assets/img/infografia/P1.jpg"><img class="card-img-top" src="assets/img/infografia/POSTER1.png" alt="Slide Image"></a>'+
                            '</div>'+
                        '</div>'+
                '</div>'+
                '<div class="carousel-item">'+
                        '<div class="col-12 ml-4">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39;{"caption" : "Happy Team"}&#39; href="assets/img/infografia/P2.jpg">'+
                                    '<img class="card-img-top" src="assets/img/infografia/POSTER2.png" alt="Slide Image"></a>'+
                            '</div>'+
                        '</div>'+
                '</div>'+
                '<div class="carousel-item">'+
                        '<div class="col-12 ml-4">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39;{"caption" : "SCRUM POKER - Game Rules"}&#39; href="assets/img/infografia/P3.jpg"><img class="card-img-top" src="assets/img/infografia/POSTER3.png" alt="Slide Image">'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                '</div>'+
                '<div class="carousel-item">'+
                        '<div class="col-12 ml-4">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39&#39;{"caption" : "COOLERS estrategias para su instalación"}&#39&#39; href="assets/img/infografia/P4.jpg"><img class="card-img-top" src="assets/img/infografia/POSTER4.png" alt="Slide Image">'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                '</div>'+
                '<div class="carousel-item">'+
                        '<div class="col-12 ml-4">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39&#39;{"caption" : "Activaciones"}&#39&#39; href="assets/img/infografia/P5.jpg"><img class="card-img-top" src="assets/img/infografia/POSTER5.png" alt="Slide Image"></a>'+
                            '</div>'+
                        '</div>'+
                '</div>'+
                '<div class="carousel-item">'+
                        '<div class="col-12 ml-4">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39&#39;{"caption" : "ONEWAY ANOVA"}&#39&#39; href="assets/img/infografia/P6.jpg"><img class="card-img-top" src="assets/img/infografia/POSTER6.png" alt="Slide Image">'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                '</div>'+
                '<div class="carousel-item">'+
                        '<div class="col-12 ml-4 ">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<img class="card-img-top" src="assets/img/infografia/POSTER7.png" alt="Slide Image">'+
                            '</div>'+
                        '</div>'+
                '</div>'+
                '<div class="carousel-item">'+
                        '<div class="col-12 ml-4">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<img class="card-img-top" src="assets/img/infografia/POSTER8.png" alt="Slide Image">'+
                            '</div>'+
                        '</div>'+
                '</div>'+
                '<div class="carousel-item">'+
                        '<div class="col-12 ml-4">'+
                            '<div class="card cardInfo mb-2" style="border:none">'+
                                '<a data-fancybox="images" data-options=&#39;{"caption" : "SCRUM Framework Rules"}&#39; href="assets/img/infografia/P9.jpg"><img class="card-img-top" src="assets/img/infografia/POSTER9.png" alt="Slide Image">'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                '</div>'+
            '</div>'+
            '<ol class="carousel-indicators">'+
                '<li data-target="#carousel-1" data-slide-to="0" class="active"></li>'+
                '<li data-target="#carousel-1" data-slide-to="1"></li>'+
                '<li data-target="#carousel-1" data-slide-to="2"></li>'+
            '</ol>'+
        '</div>');

	}
}

function navbarEmergente()
{
	var SWidth = screen.width;
	console.log(SWidth);
	if(SWidth>=1024)
	{
		$("#categoria").removeAttr("style");
		$('#navbar-emergente').removeClass('open');
	}else{
		$("#categoria").css({"display": "none","height": "90%","cursor": "pointer"});

	}
}

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

		$(".categoria").on("mouseover",function(){
			$(this).css({"backgroundColor":"#01FFA2","color":"#5B1DEC"});
		})
		$(".categoria").on("mouseout",function(){
			if($(this).hasClass("active"))
			{
				$(this).css({"backgroundColor":"#01FFA2","color":"#5B1DEC"});
			}else{
				$(this).css({"backgroundColor":"transparent","color":"#01FFA2"});
			}
		})
		$(".categoria").on("click",function(){
			$(".categoria").each(function(index,element){
				$(element).removeClass("active");
				$(this).css({"backgroundColor":"transparent","color":"#01FFA2"});
			});
			$(this).addClass("active");
			$(this).css({"backgroundColor":"#01FFA2","color":"#5B1DEC"});
		})

		function CategoryCloseMenu(){
			$("#bullets").show();
				$(".btn-menu ").removeClass('active');
				$('#menu, nav').removeClass('open');
				$(".menu-list").removeClass("show");
				if($(this).hasClass("active")==true)
				{
					$(".btn-menu").attr("src","assets/img/Grupo 41@2x.png");
				}else{
					$(".btn-menu").attr("src","assets/img/burger.png");
				}
		}

		$(".categoria").on("click", function(){
			if($("#navbar-emergente").hasClass("open")==true)
			{
				$("#Burger-emergente-btn").toggleClass('active');
		$('#navbar-emergente').toggleClass('open');
		if($("#Burger-emergente-btn").hasClass("active")==true)
		{
			$("#Burger-emergente-btn").attr("src","assets/img/Grupo 41@2x.png");
			$("#categoria").css("display","block");
			$("#categoria").addClass("d-flex");
		}else{
			$("#Burger-emergente-btn").attr("src","assets/img/burger.png");
			$("#categoria").css("display","none");
			$("#categoria").removeClass("d-flex");
		}
	}else{
		
	}
		

		});


		function modalCapsula()
		{
			CategoryCloseMenu();
			$(".categoria").each(function(index,element){
				
				if(index==0)
				{
					$(element).addClass("active");
					$(element).css({"backgroundColor":"#01FFA2","color":"#5B1DEC"});
					console.log(element);

				}else{
					$(element).removeClass("active");
					$(element).css({"backgroundColor":"transparent","color":"#01FFA2"});

				}
					
			});
			openModal();
			$("#capsula").addClass("active");
			$("#Learning").removeClass("active");
			$("#Infografias").removeClass("active");
			$("#Comunicacion").removeClass("active");
			$("#Mas").removeClass("active");
			setTimeout(function(){
				$("#capsula").css("display","block");
				$("#Learning,#Infografias,#Comunicacion,#Mas").css("display","none");
			},750)
			
			
		}
		function modalLearning()
		{
			CategoryCloseMenu();
			$(".categoria").each(function(index,element){
				
				if(index==1)
				{
					$(element).addClass("active");
					$(element).css({"backgroundColor":"#01FFA2","color":"#5B1DEC"});
					console.log(element);

				}else{
					$(element).removeClass("active");
					$(element).css({"backgroundColor":"transparent","color":"#01FFA2"});

				}
					
			});
			openModal();
			$("#capsula").removeClass("active");
			$("#Learning").addClass("active");
			$("#Infografias").removeClass("active");
			$("#Comunicacion").removeClass("active");
			$("#Mas").removeClass("active");
			setTimeout(function(){
				$("#Learning").css("display","block");
				$("#capsula,#Infografias,#Comunicacion,#Mas").css("display","none");
			},750)
							
		}
		function modalInfografia()
		{
			CategoryCloseMenu();
			$(".categoria").each(function(index,element){
				
				if(index==2)
				{
					$(element).addClass("active");
					$(element).css({"backgroundColor":"#01FFA2","color":"#5B1DEC"});
					console.log(element);

				}else{
					$(element).removeClass("active");
					$(element).css({"backgroundColor":"transparent","color":"#01FFA2"});

				}
					
			});
			openModal();
			$("#capsula").removeClass("active");
			$("#Learning").removeClass("active");
			$("#Infografias").addClass("active");
			$("#Comunicacion").removeClass("active");
			$("#Mas").removeClass("active");	
			setTimeout(function(){
				$("#Infografias").css("display","block");
				$("#capsula,#Learning,#Comunicacion,#Mas").css("display","none");
			},750)

		}
		function modalComunicacion()
		{
			CategoryCloseMenu();
			$(".categoria").each(function(index,element){
				
				if(index==3)
				{
					$(element).addClass("active");
					$(element).css({"backgroundColor":"#01FFA2","color":"#5B1DEC"});
					console.log(element);

				}else{
					$(element).removeClass("active");
					$(element).css({"backgroundColor":"transparent","color":"#01FFA2"});

				}
					
			});
			openModal();
			$("#capsula").removeClass("active");
			$("#Learning").removeClass("active");
			$("#Infografias").removeClass("active");
			$("#Comunicacion").addClass("active");
			$("#Mas").removeClass("active");	
			setTimeout(function(){
				$("#Comunicacion").css("display","block");
				$("#capsula,#Learning,#Infografias,#Mas").css("display","none");
			},750)
				
		
		}
		function modalMas()
		{
			CategoryCloseMenu();
			$(".categoria").each(function(index,element){
				
				if(index==4)
				{
					$(element).addClass("active");
					$(element).css({"backgroundColor":"#01FFA2","color":"#5B1DEC"});
					console.log(element);

				}else{
					$(element).removeClass("active");
					$(element).css({"backgroundColor":"transparent","color":"#01FFA2"});

				}
					
			});
			openModal();
			$("#capsula").removeClass("active");
			$("#E-Learning").removeClass("active");
			$("#Infografias").removeClass("active");
			$("#Comunicacion").removeClass("active");
			$("#Mas").addClass("active");	
			setTimeout(function(){
				$("#Mas").css("display","block");
				$("#capsula,#Learning,#Infografias,#Comunicacion").css("display","none");
			},750)
				
				
				}

		function openModal() { 
			$('.emergente').addClass('open');
			$('#btn-menu').css("display","none");
			$("#menu").css("display","none");
			$(".scrollContent").css("overflowX","hidden");
			$("#bullets").hide();
		};

	$('#emergenteClose, #Burger-emergente-close').click(function() { 
		$('.emergente').removeClass('open');
		$('#btn-menu').css("display","block");
		$("#menu").css("display","block");
		$(".scrollContent").css("overflowX","");
		window.scrollTo(0,4500);
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


	/*function btnListPeople(listnum){
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
*/

   
	
	

	

 	
 	

	$(function () { // wait for document ready
	window.onload = function(event){

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   					orientationJS(event.currentTarget.screen.orientation.angle)

		}else{
			orientationJS(0);
		}
		console.log(event);
	}

	
});
	window.onorientationchange = function(event) { 
		console.log(event);
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
					$("#alertPortrait").addClass("hide");
					var videoAnimacion = new TimelineMax()
								.fromTo(".navbar",{display:"blocks"},{display:"none",duration:3})
							    .fromTo("#green-x",{top:"10vh"},{top:"80vh",duration:9})
							    .fromTo("#blue-x",{bottom:"10vh"},{bottom:"87vh",duration:9},"-=9")
								.fromTo("#MagicBoxBig",{top:"25%"},{top:"0%",duration:25,delay:10})
								.fromTo("#grupoMas",{opacity:1},{opacity:0,duration:4},"-=7")
								.fromTo("#MagicBoxText",{opacity:0},{opacity:1,duration:3},"-=7")
								.fromTo("#transparent-x",{top:"85%"},{left:"50%",opacity:0,duration:6},"-=7")
								.fromTo("#screen2",{opacity:0},{opacity:1,duration:6},"-=7")
								.fromTo("#green-x,#blue-x,#MagicBoxBig,#MagicBoxText,#transparent-x,#down,#logoMB",{},{y:"-900",duration:9})
								.fromTo("#green-x,#blue-x,#MagicBoxBig,#MagicBoxText,#transparent-x,#down,#logoMB",{display:"blocks"},{display:"none"})
								.fromTo("#screen2",{},{marginTop:"0vh",opacity:1,duration:5},"-=9.5")
								.fromTo(".somosMB", 10, {rotation: 0}, {rotation: 135, ease:"back.out(2.7)",duration:10,delay:0},"-=6")
								.fromTo(".boton-play",{scale:1},{scale:40,duration:35},"-=9")
								.fromTo("#video1",{opacity:0},{opacity:1,duration:5},"-=31")
								.fromTo(".borde,.somosMB",{display:"blocks"},{display:"none"},"-=10")
								.fromTo(".boton-play",{display:"blocks"},{display:"none",duration:1})
								.fromTo("#titlechart",{backgroundImage:"url(assets/img/fondo@2xtransparente.png)"},{backgroundImage:"url(assets/img/fondoblenco.jpg)"},"-=5")
								.fromTo("#ourwork-title",.5,{display:"none"},{display:"block"})
								.fromTo("#bullet1",1,{backgroundColor:"rgb(1,255,162)"},{backgroundColor:"transparent"})
								.fromTo("#bullet2",1,{backgroundColor:"transparent"},{backgroundColor:"rgb(1,255,162)"})
								.fromTo("#ourwork-title",10, {x:  "100%"}, {x: "5%", ease:"back.out(1.7)"})
								.fromTo("#video1",{},{y:"-1300",duration:15},"-=16")
								.fromTo("#carousel",40, {left:  "-4000px"}, {left: "20px", ease: Linear.easeNone},"-=30")
								.fromTo(".how",1,{display:"none"},{display:"block"},"+=0")
								
								.fromTo("#carousel",16,{},{y:"-2000px",delay:"5"})
								.fromTo(".how",6,{top:"100%"},{top:"0%"},"-=16")
								.fromTo("#como-title",5,{x: "-100"},{x:"-500"},"-=16")
								.fromTo("#carousel",1,{display:"blocks"},{display:"none"})
								.fromTo("#como-title",4,{paddingTop:"30%"},{paddingTop:"1%"},"-=16")
								.fromTo("#bullet3",1,{backgroundColor:"transparent"},{backgroundColor:"rgb(1,255,162)"})
								.fromTo("#bullet2",1,{backgroundColor:"rgb(1,255,162)"},{backgroundColor:"transparent"})
								.fromTo("#bullet2",1,{backgroundColor:"transparent"},{backgroundColor:"transparent"})
								.fromTo("#ourPeople",1,{opacity:0},{opacity:1})
								.fromTo("#ourPeople",10,{bottom:"100%"},{bottom:"0%"})
								.fromTo(".people-list",{overflow:"hidden"},{overflow:"visible"})

					break;
					case 90:
					$("#alertPortrait").removeClass("hide");
					var videoAnimacion = new TimelineMax()
								.fromTo(".navbar",{display:"blocks"},{display:"none",duration:3})
							    .fromTo("#green-x",{top:"10vh"},{top:"80vh",duration:9})
							    .fromTo("#blue-x",{bottom:"10vh"},{bottom:"87vh",duration:9},"-=9")
								.fromTo("#MagicBoxBig",{top:"0%"},{top:"0%",duration:15},"-=9")
								.fromTo("#grupoMas",{opacity:1},{opacity:0,duration:4},"-=7")
								.fromTo("#MagicBoxText",{opacity:0},{opacity:1,duration:3,delay:2},"-=7")
								.fromTo("#transparent-x",{top:"85%"},{left:"50%",opacity:0,duration:6},"-=7")
								.fromTo("#green-x,#blue-x,#MagicBoxBig,#MagicBoxText,#transparent-x,#down,#logoMB",{},{y:"-500",duration:19,delay:20})
								.fromTo("#screen2",{opacity:0},{opacity:1,duration:5},"-=10")
								.fromTo("#green-x,#blue-x,#MagicBoxBig,#MagicBoxText,#transparent-x,#down,#logoMB",{display:"blocks"},{display:"none"})
								.fromTo(".somosMB", 10, {rotation: 0}, {rotation: 135, ease:"back.out(2.7)",duration:10,delay:0},"-=6")
								.fromTo(".boton-play",{scale:1},{scale:40,duration:35},"-=9")
								.fromTo("#video1",{opacity:0},{opacity:1,duration:5},"-=31")
								.fromTo(".borde,.somosMB",{display:"blocks"},{display:"none"},"-=4")
								.fromTo(".boton-play",{display:"blocks"},{display:"none",duration:1})
								.fromTo("#titlechart",{backgroundImage:"url(assets/img/fondo@2x.png)"},{backgroundImage:"url(assets/img/fondoblenco.jpg)"},"-=5")
								.fromTo("#ourwork-title",10, {x:  "100%"}, {x: "5%", ease:"back.out(1.7)"})
								.fromTo("#bullet1",1,{backgroundColor:"rgb(1,255,162)"},{backgroundColor:"transparent"})
								.fromTo("#bullet2",1,{backgroundColor:"transparent"},{backgroundColor:"rgb(1,255,162)"})
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
								.fromTo("#bullet3",1,{backgroundColor:"transparent"},{backgroundColor:"rgb(1,255,162)"})
								.fromTo("#bullet2",1,{backgroundColor:"rgb(1,255,162)"},{backgroundColor:"transparent"})
								.fromTo("#bullet2",1,{backgroundColor:"transparent"},{backgroundColor:"transparent"})
								.fromTo("#ourPeople",1,{opacity:0},{opacity:1})
								.fromTo("#ourPeople",10,{bottom:"100%"},{bottom:"0%"})
								.fromTo(".people-list",{overflow:"hidden"},{overflow:"visible"})

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
									var framenum = event.progress*10/.2;
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
				$("#bullets").show();
				$(".btn-menu ").toggleClass('active');
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
			 	$("#bullets").show();
			 	$(".btn-menu ").toggleClass('active');
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
				$("#bullets").show();
				$(".btn-menu ").toggleClass('active');
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
	var ContSaltos;

	$("#btn-izquierda").on("click",function(){
		var width = screen.width;
		if(width<600){
			ContSaltos=1;
		}else{
			ContSaltos=3;
		}
		console.log("izquierda");
			if(numberPerson<=0)
			{
				numberPerson=TotalPerson;
			}else{
				numberPerson=numberPerson-ContSaltos;
			}
			slidePeople();
		});

	$("#btn-derecha").on("click",function(){
		var width = screen.width;
		if(width<600){
			ContSaltos=1;
		}else{
			ContSaltos=3;
		}
		console.log("derecha");
		console.log(TotalPerson);
		numberPerson=numberPerson+ContSaltos;
			if(numberPerson>TotalPerson)
			{
				numberPerson=0;
			}else{

			}
			console.log(numberPerson);
			slidePeople();
			
		});

	

	var TotalPerson = 0;
	function slidePeople(){
		TotalPerson=0;
		if(numberPerson<=2){
			$(".integrantes1").css("display","block");
			$(".integrantes2").css("display","none");
			$(".integrantes3").css("display","none");
			$(".integrantes4").css("display","none");
			$(".integrantes5").css("display","none");
			$(".integrantes6").css("display","none");
		}else if(numberPerson<=5){
			$(".integrantes1").css("display","none");
			$(".integrantes2").css("display","block");
			$(".integrantes3").css("display","none");
			$(".integrantes4").css("display","none");
			$(".integrantes5").css("display","none");
			$(".integrantes6").css("display","none");
		}else if(numberPerson<=8){
			$(".integrantes1").css("display","none");
			$(".integrantes2").css("display","none");
			$(".integrantes3").css("display","block");
			$(".integrantes4").css("display","none");
			$(".integrantes5").css("display","none");
			$(".integrantes6").css("display","none");
		}else if(numberPerson<=11){
			$(".integrantes1").css("display","none");
			$(".integrantes2").css("display","none");
			$(".integrantes3").css("display","none");
			$(".integrantes4").css("display","block");
			$(".integrantes5").css("display","none");
			$(".integrantes6").css("display","none");
		}else if(numberPerson<=14){
			$(".integrantes1").css("display","none");
			$(".integrantes2").css("display","none");
			$(".integrantes3").css("display","none");
			$(".integrantes4").css("display","none");
			$(".integrantes5").css("display","block");
			$(".integrantes6").css("display","none");
		}else{
			$(".integrantes1").css("display","none");
			$(".integrantes2").css("display","none");
			$(".integrantes3").css("display","none");
			$(".integrantes4").css("display","none");
			$(".integrantes5").css("display","none");
			$(".integrantes6").css("display","block");
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
			}else{
				srt=element.firstChild.nextSibling.src;
				srt=srt.replace("CUADRADAS","integrantes");
				element.firstChild.nextSibling.src = srt;
				console.log(srt);
				}
		});
	}

		function animacionMB(framenum){
			var width = screen.width;
			if(width<1100)
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
				
			};

			$(".list-people").on("click",function(){
				$(".list-people").each(function(index,element){
					if($(this).hasClass("flip"))
				{
					$(this).removeClass("flip");
					$(this).css({"transform":"rotateY(90deg)","transition":".6s"});
					$("img",this).css({"opacity":"1","transition-delay":".135s"});
					$(".back",this).css({"transform": "rotateY(90deg)","transition":".08s","transition-delay":"0.135s"});
					$(this).css({"transform":"rotateY(0deg)","transition":".6s"});
				}else{
				}
				})
				console.log(this);
				if($(this).hasClass("flip"))
				{
					$(this).removeClass("flip");
					$(this).css({"transform":"rotateY(90deg)","transition":".6s"});
					$("img",this).css({"opacity":"1","transition-delay":".135s"});
					$(".back",this).css({"transform": "rotateY(90deg)","transition":".08s","transition-delay":"0.135s"});
					$(this).css({"transform":"rotateY(0deg)","transition":".6s"});
				}else{
					$(this).addClass("flip")
					$(this).css({"transform":"rotateY(90deg)","transition":".6s"});
					$("img",this).css({"opacity":"0","transition-delay":".135s"});
					$(".back",this).css({"transform": "rotateY(180deg)","transition":".2s","transition-delay":".135s"});
					$(this).css({"transform":"rotateY(180deg)","transition":".6s"});
				}
				
			})

	$(".list-people").on("mouseleave",function(){
				if($(this).hasClass("flip"))
				{
					$(this).removeClass("flip");
					$(this).css({"transform":"rotateY(90deg)","transition":".6s"});
					$("img",this).css({"opacity":"1","transition-delay":".135s"});
					$(".back",this).css({"transform": "rotateY(90deg)","transition":".08s","transition-delay":"0.135s"});
					$(this).css({"transform":"rotateY(0deg)","transition":".6s"});
				}else{
				}
			});

			$(".btn-ourPeople").on("mouseover",function(){
				$(this).css("width","60px");
			});
			$(".btn-ourPeople").on("mouseout",function(){
				$(this).css("width","50px");
			});

			$(".imacTransparente").on("click",function(){
				console.log(this.id);
				switch (this.id)
				{
					case "NPS":
					var elem = document.getElementById("videoNPS");
					break;
					case "bias1":
					var elem = document.getElementById("videobias1");
					break;
					case "bias2":
					var elem = document.getElementById("videobias2");
					break;
					case "bias3":
					var elem = document.getElementById("videobias3");
					break;
					case "cyber1":
					var elem = document.getElementById("videocyber1");
					break;
					case "cyber2":
					var elem = document.getElementById("videocyber2");
					break;
				}
				console.log(elem);
				fullscreenNPS(elem);
				
			});
			var VideoNPSFull=false;
			function fullscreenNPS(elem){
				 if (elem.requestFullscreen) {
				  elem.requestFullscreen();				  
				  } else if (elem.mozRequestFullScreen) { /* Firefox */
				  elem.mozRequestFullScreen(); 				  
				  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
				  elem.webkitRequestFullscreen(); 				  
				  } else if (elem.msRequestFullscreen) { /* IE/Edge */
				  elem.msRequestFullscreen(); 				  
				  }
			}
			$(".videoLearning").on("fullscreenchange", function(){
				if(VideoNPSFull)
				{
					$(this).css({"paddingLeft": "11%","paddingRight": "11%","paddingTop": "4%"});
					VideoNPSFull=false;
				}else{
					$(this).css({"paddingLeft": "0px","paddingRight": "0px","paddingTop": "0px"});
					VideoNPSFull=true;
					}
				console.log(this.requestFullscreen);
			});


