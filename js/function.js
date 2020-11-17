$('.detonadorMenu').click(function() {
	if($(this).hasClass('activo')){
		$(this).removeClass('activo');
		$('.menuBox').removeClass('menuActivo');
		$('#header').removeClass('menuActivo');
		$('#body').removeClass('menuActivo');
		$('.item').removeClass('activo');
		$('.box').removeClass('activo');
		$('.resultadoMenu1').removeClass('activo');
		$('.categoriaN1').removeClass('activo');

		
	}else{
		$(this).addClass('activo');
		$('.menuBox').addClass('menuActivo');
		$('#header').addClass('menuActivo');
		$('#body').addClass('menuActivo');
		$('.itemMenuRegister').addClass('activo');
		$('.resultadoMenu1').addClass('activo');
	}
})
$('.cerrarMenu').click(function() {
	$('.detonadorMenu').removeClass('activo');
	$('.menuBox').removeClass('menuActivo');
	$('#header').removeClass('menuActivo');
	$('.item').removeClass('activo');
	$('.box').removeClass('activo');
})

$('.itemMenuRegister').click(function() {
	if($(this).hasClass('activo') == false){
		$('.item').removeClass('activo');
		$('.box').removeClass('activo');
		$(this).addClass('activo');
		$('.resultadoMenu1').addClass('activo');
	}
})
$('.itemMenuOutlet').click(function() {
	if($(this).hasClass('activo') == false){
		$('.item').removeClass('activo');
		$('.box').removeClass('activo');
		$(this).addClass('activo');
		$('.resultadoMenu2').addClass('activo');
		$('.categoriaN1').addClass('activo');
	}
})

$('.itemMenuModa').click(function() {
	if($(this).hasClass('activo') == false){
		$('.item').removeClass('activo');
		$('.box').removeClass('activo');
		$(this).addClass('activo');
		$('.resultadoMenuModa').addClass('activo');
		
	}
})


$('.atrasOut').click(function(){
	$('.item').removeClass('activo');
	$('.box').removeClass('activo');
	$('.categoriaN1').removeClass('activo');
	$('.resultadoMenu2').removeClass('activo');
	$('.itemMenuRegister').addClass('activo');
	$('.resultadoMenu1').addClass('activo');
})


$('.itemMenuClasificado').click(function() {
	if($(this).hasClass('activo') == false){
		$('.item').removeClass('activo');
		$('.box').removeClass('activo');
		$(this).addClass('activo');
		$('.resultadoMenu3').addClass('activo');
	}
})
$('.itemMenuDirectorio').click(function() {
	if($(this).hasClass('activo') == false){
		$('.item').removeClass('activo');
		$('.box').removeClass('activo');
		$(this).addClass('activo');
		$('.resultadoMenu4').addClass('activo');
	}
})
$('.itemMenuTarjeta').click(function() {
	if($(this).hasClass('activo') == false){
		$('.item').removeClass('activo');
		$('.box').removeClass('activo');
		$(this).addClass('activo');
		$('.resultadoMenu5').addClass('activo');
	}
})
$('.itemMenuCupones').click(function() {
	if($(this).hasClass('activo') == false){
		$('.item').removeClass('activo');
		$('.box').removeClass('activo');
		$(this).addClass('activo');
		$('.resultadoMenu6').addClass('activo');
	}
})
$('.itemMenuConvenios').click(function() {
	if($(this).hasClass('activo') == false){
		$('.item').removeClass('activo');
		$('.box').removeClass('activo');
		$(this).addClass('activo');
		$('.resultadoMenu7').addClass('activo');
	}
})

function changeTheme() {
	let btn = document.getElementById("switch");
	let toggle = document.getElementById("toggle");
	btn.classList.toggle("switchLight");
	toggle.classList.toggle("toggleLight");
}

