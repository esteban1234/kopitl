$(document).ready(function(){
	// event.preventDefault();

	// $("a").click(function(event){
 //        event.preventDefault();
 //    });


	$('.category_list .category_item[category="contables"]').addClass('ct_item-active');
	$('.product-item').hide();
	$('.product-item[category=contables]').show();

	$('.category_item').click(function(event){
		event.preventDefault();
		var catProduct = $(this).attr('category');
		// console.log(catProduct);

	$('.category_item').removeClass('ct_item-active');
	$(this).addClass('ct_item-active');

	$('.product-item').css('transform', 'scale(0)');
	function hideProduct(){
		$('.product-item').hide();
	} setTimeout(hideProduct,400);


	function showProduct(){
		//$('.product-item').hide();
		$('.product-item[category='+catProduct+']').show();
		$('.product-item[category='+catProduct+']').css('transform','scale(1)');
	} setTimeout(showProduct,400);
	});

	$('.category_item[category="contables"]').click(function(event){
		event.preventDefault();
		function showAll(){
			// $('.product-item').show();
			$('.product-item[category=contables]').show();
			$('.product-item').css('transform','scale(1)');
		}setTimeout(showAll,400);
	});

	//alert('hola')

});