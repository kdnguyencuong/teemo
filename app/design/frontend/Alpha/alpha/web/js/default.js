require(
    [
        'jquery'
    ], function ($) {
    'use strict';
	
	// Function max height
	jQuery.fn.equalizeHeights = function() {
		var maxHeight = this.map(function(i,e) {
			return jQuery(e).height();
		}).get();
		return this.height( Math.max.apply(this, maxHeight) );
	};
	
	$( document ).ajaxComplete(function( event,request, settings ) {
		var windowWidthScreenAj = jQuery(window).width();
			
		jQuery(".product-item .product-item-info").mouseenter(function(){
			var  product_item_photo = jQuery(".product-item .product-item-info .product-item-photo").height();
			var position_top = 0 - product_item_photo;
			position_top = position_top + "px";
			jQuery(".product-item .product-item-info:hover .magebuzz-quickview.magebuzz_quickview_button").height(product_item_photo);
			jQuery(".products-grid .product-item .product-item-info:hover .magebuzz-quickview.magebuzz_quickview_button").css({"top":position_top});
			jQuery(".product-item .product-item-info:hover .magebuzz-quickview.magebuzz_quickview_button").addClass("quick-active");
		});
		jQuery(".catalog-category-view .products-grid .product-item-name").equalizeHeights();
		jQuery(".catalog-category-view .products-grid .price-box").equalizeHeights();
		
		jQuery(".upsell .products-grid .product-item-name").equalizeHeights();
		jQuery(".upsell .products-grid .price-box").equalizeHeights();
	});
    jQuery(document).ready(function(){
		//  START js hover ACCOUNT LOGIN
		jQuery(".account-login").hover(function () {
			jQuery('.page-wrapper .overFlowBssTT').addClass("login-active");
			jQuery('.page-wrapper .login-dropdown').addClass("login-dropdown-active");
		}, function () {
			jQuery('.page-wrapper .login-dropdown').removeClass("login-dropdown-active");
			jQuery('.page-wrapper .overFlowBssTT').removeClass("login-active");
		});
		jQuery(".account-login").mouseleave(function(){
			jQuery(".page-wrapper .overFlowBssTT").mouseenter(function(){
				jQuery('.page-wrapper .overFlowBssTT').addClass("login-active");
			});	
		}).delay(100);
		jQuery(".page-wrapper .overFlowBssTT").mouseleave(function(){
			jQuery('.page-wrapper .overFlowBssTT').removeClass("login-active");
		});
		
		
		// END
		
		// START js hover MiniCart , MiniQuote
		function heightContentMinicart(){
			var height1 = jQuery('#mini-cart li').eq(0).outerHeight();
			var height2 = jQuery('#mini-cart li').eq(1).outerHeight();
			var height3 = jQuery('#mini-cart li').eq(2).outerHeight();
			return height1 + height2 + height3;
		}
		function heightContentMiniquote(){
			var height1 = jQuery('#mini-quote li').eq(0).outerHeight();
			var height2 = jQuery('#mini-quote li').eq(1).outerHeight();
			var height3 = jQuery('#mini-quote li').eq(2).outerHeight();
			return height1 + height2 + height3;
		}
		
		jQuery(".minicart-wrapper").hover(function () {
			jQuery(this).addClass("minicart-active");
			//jQuery(this).addClass("active");
			var heightMinicart= heightContentMinicart();
			jQuery(".minicart-items-wrapper").height(heightMinicart);
		}, function () {
			jQuery(this).removeClass("minicart-active");
		});
		jQuery(".miniquote-wrapper").hover(function () {
			jQuery(this).addClass("miniquote-active");
			//jQuery(this).addClass("active");
			var heightMiniquote= heightContentMiniquote();
			jQuery(".miniquote-items-wrapper").height(heightMiniquote);
		}, function () {
			jQuery(this).removeClass("miniquote-active");
		});
		// END
		
		
		jQuery(window).scroll(function() {    
			var scroll = jQuery(window).scrollTop();
			var headerHeight = jQuery('.page-header').height();
			var menuHeight = jQuery('.navigation').height();
			var windowWidthScreen = jQuery(window).width();
			if(windowWidthScreen > 768){
				if (scroll >= headerHeight + menuHeight) {
					jQuery(".sidebar-categories").addClass("sticky");
					jQuery(".main-wrapper").addClass("has-sticky");
				} else {
					jQuery(".sidebar-categories").removeClass("sticky");
					jQuery(".main-wrapper").removeClass("has-sticky");
				}
			}
		});
		
		jQuery('.qtym').click(function(){
			var qty = jQuery(this).parent().find('.input-text').val();
			qty = parseInt(qty);
			qty++;
			jQuery(this).parent().find('.input-text').val(qty);
		});
		jQuery('.qtyp').click(function(){
			var qty = jQuery(this).parent().find('.input-text').val();
			qty = parseInt(qty);
			if(qty > 1){
				qty--;
				jQuery(this).parent().find('.input-text').val(qty);
			}
		});
		
		jQuery('.faq-index-index a[href*=#]').click(function(event){
			jQuery('html, body').animate({
				scrollTop: jQuery( jQuery(this).attr('href') ).offset().top
			}, 500);
			event.preventDefault();
		});
		jQuery('.header-top-mobile a[href*=#]').click(function(event){
			jQuery('html, body').animate({
				scrollTop: jQuery( jQuery(this).attr('href') ).offset().top
			}, 500);
			event.preventDefault();
		});
		// Fix Width Job Page
		var windowWidth = jQuery(window).width();
		if(windowWidth < 769){
			jQuery('.mainContent .inno-jobs').width(windowWidth-30);
		}
	});
	
	
	function fixHeight() {
		var windowWidthScreen = jQuery(window).width();
		if(windowWidthScreen > 768){		
			
			// Js About Home Max Height
			var height_about_alpha= jQuery(".about-catering-equipment .catering-equipment .content").outerHeight();
			jQuery(".happy-customers .content").height(height_about_alpha);
			
			// Fix Height sidebar and Column main in My Account
			var height_sidebar= jQuery(".account .sidebar-main").height();
			var height_column_main= jQuery(".account .column.main").height();
			if(height_sidebar > height_column_main){
				jQuery(".account .column.main").height(height_sidebar);
			}
			else{
				jQuery(".account .sidebar-main").height(height_column_main);
			}
			
			//	
			var height_sidebar_forgotpassword= jQuery(".customer-account-forgotpassword .sidebar.sidebar-additional").height();
			if(height_sidebar_forgotpassword > jQuery(".customer-account-forgotpassword .column.main").height()){
				jQuery(".customer-account-forgotpassword .column.main").height(height_sidebar_forgotpassword);
			}	
			var height_sidebar_success= jQuery(".checkout-onepage-success .sidebar.sidebar-additional").height();
			if(height_sidebar_success > jQuery(".checkout-onepage-success .column.main").height()){
				jQuery(".checkout-onepage-success .column.main").height(height_sidebar_success);
			}
			var height_sidebar_quote_success= jQuery(".quotation-quote-success .sidebar.sidebar-additional").height();
			if(height_sidebar_quote_success > jQuery(".quotation-quote-success .column.main").height()){
				jQuery(".quotation-quote-success .column.main").height(height_sidebar_quote_success);
			}
			
			//
			var height_category_left = jQuery('.category-view .category-view-left').height();
			var width_category_image_right = jQuery('.category-view .category-image').width();
			jQuery('.category-view .category-image .category-container-image').height(height_category_left);
			jQuery('.category-view .category-image .category-container-image').width(width_category_image_right);
		}
		//Fix height blocks in product page
		if(windowWidthScreen > 768){
			var product_media_height = jQuery(".product-media-main").innerHeight();
			var waring_height = jQuery(".product-cms-blocks .waring").innerHeight();
			var now_online_height = jQuery(".product-cms-blocks .now-online").innerHeight();
			if(windowWidthScreen <1204 ){
				var maxHeight1 = Math.max(waring_height, now_online_height);
				jQuery(".product-media-main").height('auto');
				jQuery(".product-cms-blocks .waring").innerHeight(maxHeight1);
				jQuery(".product-cms-blocks .now-online").innerHeight(maxHeight1);
			}
			else{
				var maxHeight1 = Math.max(product_media_height, waring_height, now_online_height);
				jQuery(".product-media-main").innerHeight(maxHeight1);
				jQuery(".product-cms-blocks .waring").innerHeight(maxHeight1);
				jQuery(".product-cms-blocks .now-online").innerHeight(maxHeight1);
			}
			
			var product_description_height = jQuery(".product-information .description").innerHeight();
			var additional_attributes_height = jQuery(".product-specifications .additional-attributes-wrapper").innerHeight();
			if(product_description_height > additional_attributes_height) {
				jQuery(".product-specifications .additional-attributes-wrapper").innerHeight(product_description_height);
			} else {
				jQuery(".product-information .description").innerHeight(additional_attributes_height);
			}
		}
		else{
			jQuery(".product-media-main").height('auto');
			jQuery(".product-cms-blocks .waring").height('auto');
			jQuery(".product-cms-blocks .now-online").height('auto');
			jQuery(".product-specifications .additional-attributes-wrapper").height('auto');
			jQuery(".product-information .description").height('auto');
		}
	}
	
	// Password strength meter
	function hidePasswordStrength() {
		$(".customer-account-edit .new.password input").keyup(function () {
			if($(this).val() != ""){
				jQuery("#password-strength-meter-container").show();
			}
			else{
				jQuery("#password-strength-meter-container").hide();
			}
		}).keyup();
	}
	
	function toggleByClass(classClick, classAdd, classToggle){
		jQuery(classClick).click(function(){
			jQuery(classAdd).toggleClass(classToggle);
		})
	}
	
	
	jQuery(document).ready(function(){
		
		var windowWidthScreen = jQuery(window).width();
		if(windowWidthScreen > 768){
			fixHeight();			
			jQuery('.sidebar-categories .nav-all-categories .vertical-menu .level0').hover(function(){
					jQuery(this).find(".dropdown-menu .level1 .mega-menu-sub-title").equalizeHeights();
				},function(){		
			});
			jQuery(".aw-blog-index-list .aw-blog-post__header").equalizeHeights();
			jQuery(".aw-blog-index-list .aw-blog-post__info").equalizeHeights();
			jQuery(".aw-blog-index-list .image-blog").equalizeHeights();
			jQuery(".category-page li .single-image").equalizeHeights();
			jQuery(".category-page li .category-short-description").equalizeHeights();
		}
		else{
			jQuery('.customer-account-create .form-create-account .login-right').appendTo('.customer-account-create .form-create-account .login-left');
			jQuery('.checkout-cart-index .cart-container .cart-discount').appendTo('.checkout-cart-index .cart.table-wrapper');
			// CheckOut hover
			jQuery(".checkout-cart-index .cart.item .item-info").hover(function(){
				var height_checkout_item =jQuery(this).height();
				jQuery(this).find(".actions-toolbar").height(height_checkout_item+1);
				jQuery(this).find(".action-delete").css({'padding-top':height_checkout_item/2-12.5});
				},function(){}
			);
			// Read more Category Description Mobile
			jQuery(".catalog-category-view .view-more span").click(function (){
				jQuery(".catalog-category-view .category-description-content").css({"height":"auto"});
				jQuery(".catalog-category-view .view-more").hide();
				jQuery(".catalog-category-view .category-description").css({"padding-bottom":"0"});
			});
			// Menu Mobile
			jQuery(".page-wrapper .sidebar-categories .nav-all-categories .vertical-menu li.level0 a.level0").click(function(){
				if(!jQuery(this).parent().find('.dropdown-menu').is(':visible')){
					jQuery(".sidebar-categories .nav-all-categories .dropdown-menu").hide();
					jQuery(this).parent().find('.dropdown-menu').show();
				}
				else{
					jQuery(this).parent().find('.dropdown-menu').hide();
				}
				//jQuery(".page-wrapper .content-box .sidebar-categories").addClass('mobile-sidebar-categories-active');
				return false;
			});
			jQuery(".page-wrapper .sidebar-categories").mouseleave(function(){
				jQuery(".sidebar-categories .nav-all-categories .dropdown-menu").hide();
				jQuery(".page-wrapper .content-box .sidebar-categories").removeClass('mobile-sidebar-categories-active');
			});
			
			// FILTER MOBILE
			jQuery(document).click(function(){			
				jQuery('.catalog-category-view .block.filter').removeClass('filter-active');
			});		
			jQuery('.catalog-category-view .block.filter .filter-title').click(function(event){
				jQuery('.catalog-category-view .block.filter').toggleClass('filter-active');
				event.stopPropagation();	
			});
			jQuery(".catalog-category-view .block.filter .filter-content").click(function (event) {
				jQuery(".catalog-category-view .block.filter").addClass("filter-active");
				event.stopPropagation();
			});
			// END
		}
		
		// HOVER PRODUCT IN CATEGORY
		jQuery(".product-item .product-item-info").mouseenter(function(){
			var  product_item_photo = jQuery(".product-item .product-item-info .product-item-photo").height();
			var position_top = 0 - product_item_photo;
			position_top = position_top + "px";
			jQuery(".product-item .product-item-info:hover .magebuzz-quickview.magebuzz_quickview_button").height(product_item_photo);
			jQuery(".products-grid .product-item .product-item-info:hover .magebuzz-quickview.magebuzz_quickview_button").css({"top":position_top});
			jQuery(".product-item .product-item-info:hover .magebuzz-quickview.magebuzz_quickview_button").addClass("quick-active");
		});
		
		// VIEW MORE
		jQuery(".catering-equipment .view-more span").click(function(){
			jQuery(".catering-equipment .content-left-text").css({"height":"auto"});
			jQuery(".catering-equipment .view-more").hide();
		});
		
		hidePasswordStrength();
		jQuery(".cms-home .top-categories .category-item-name").equalizeHeights();
		jQuery(".cms-home .top-categories .category-item-description").equalizeHeights();
		
		// jQuery(".cms-home .blog-item .blog-post-title").equalizeHeights();
	});	
	jQuery( window ).load(function(){
		// Fix height Map
		var height_about_alpha_catering_equipment = jQuery(".page-footer .about-alpha-catering-equipment").outerHeight();
		jQuery(".page-footer .map .content").height(height_about_alpha_catering_equipment);
		
		jQuery(".cms-home .products-grid .product-item-name").equalizeHeights();
		jQuery(".cms-home .products-grid .price-box").equalizeHeights();
		jQuery(".catalog-category-view .products-grid .product-item-name").equalizeHeights();
		jQuery(".catalog-category-view .products-grid .price-box").equalizeHeights();
		jQuery(".catalogsearch-result-index .products-grid .product-item-name").equalizeHeights();
		jQuery(".catalogsearch-result-index .products-grid .price-box").equalizeHeights();
		jQuery(".catalog-category-view .categories-grid li .category-item-container").equalizeHeights();
		
		jQuery(".cms-page-view .category-img-thumbnail").equalizeHeights();
		jQuery(".cms-page-view .category-container").equalizeHeights();
		jQuery(".grid.products-grid .product-item .product-item-info").equalizeHeights();
		jQuery(".cms-page-view .subcategories li .sub-category-image").addClass("sub-category-image-ac");
	});
	
	jQuery(window).resize(function(){
		fixHeight();
		var windowWidthScreen2 = jQuery(window).width();
		if(windowWidthScreen2 > 768){
			jQuery(".aw-blog-index-list .aw-blog-post__header").css({"height":"auto"});
			jQuery(".aw-blog-index-list .aw-blog-post__info").css({"height":"auto"});
			jQuery(".aw-blog-index-list .image-blog").css({"height":"auto"});
			jQuery(".category-page li .single-image").css({"height":"auto"});
			jQuery(".category-page li .category-short-description").css({"height":"auto"});
			jQuery(".aw-blog-index-list .aw-blog-post__header").equalizeHeights();
			jQuery(".aw-blog-index-list .aw-blog-post__info").equalizeHeights();
			jQuery(".aw-blog-index-list .image-blog").equalizeHeights();
			jQuery(".category-page li .single-image").equalizeHeights();
			jQuery(".category-page li .category-short-description").equalizeHeights();
		}
		
		// Fix height Map
		var height_about_alpha_catering_equipment = jQuery(".page-footer .about-alpha-catering-equipment").outerHeight();
		jQuery(".page-footer .map .content").height(height_about_alpha_catering_equipment);
		
		jQuery(".grid.products-grid .product-item .product-item-info").css({"height":"auto"});
		jQuery(".cms-home .top-categories .category-item-name").css({"height":"auto"});
		jQuery(".cms-home .top-categories .category-item-description").css({"height":"auto"});
		jQuery(".cms-home .products-grid .product-item-name").css({"height":"auto"});
		jQuery(".cms-home .products-grid .price-box").css({"height":"auto"});
		jQuery(".cms-home .top-categories .category-item-name").equalizeHeights();
		jQuery(".cms-home .top-categories .category-item-description").equalizeHeights();
		jQuery(".cms-home .products-grid .product-item-name").equalizeHeights();
		jQuery(".cms-home .products-grid .price-box").equalizeHeights();
		
		jQuery(".catalog-category-view .products-grid .product-item-name").css({"height":"auto"});
		jQuery(".catalog-category-view .products-grid .price-box").css({"height":"auto"});
		jQuery(".catalogsearch-result-index .products-grid .product-item-name").css({"height":"auto"});
		jQuery(".catalogsearch-result-index .products-grid .price-box").css({"height":"auto"});
		jQuery(".catalog-category-view .products-grid .product-item-name").equalizeHeights();
		jQuery(".catalog-category-view .products-grid .price-box").equalizeHeights();
		jQuery(".catalogsearch-result-index .products-grid .product-item-name").equalizeHeights(); 
		jQuery(".catalogsearch-result-index .products-grid .price-box").equalizeHeights();
		
		jQuery(".cms-page-view .category-img-thumbnail").css({"height":"auto"});
		jQuery(".cms-page-view .category-container").css({"height":"auto"});
		jQuery(".cms-page-view .category-img-thumbnail").equalizeHeights();
		jQuery(".cms-page-view .category-container").equalizeHeights();
	
		jQuery(".upsell .products-grid .product-item-name").css({"height":"auto"});
		jQuery(".upsell .products-grid .price-box").css({"height":"auto"});
		jQuery(".upsell .products-grid .product-item-name").equalizeHeights();
		jQuery(".upsell .products-grid .price-box").equalizeHeights();
	
		jQuery(".catalog-category-view .categories-grid li .category-item-container").css({"height":"auto"});
		jQuery(".catalog-category-view .categories-grid li .category-item-container").equalizeHeights();
		
		
		jQuery(".grid.products-grid .product-item .product-item-info").equalizeHeights();
		
		// Fix Width Job Page
		var windowWidth = jQuery(window).width();
		if(windowWidth < 769){
			jQuery('.mainContent .inno-jobs').width(windowWidth-30);
		}
				
	});
	jQuery(function($){
		$('.filter-toggle').click(function(){
			$('.sort-attributes').toggle('slow');
		})
	})
	
	toggleByClass('.action.nav-toggle', 'body', 'nav-open');
});