/*placeholder*/
function placeholderInit() {
	$('[placeholder]').placeholder();
}
/*placeholder end*/

/*map init*/
function mapInit(){
	google.maps.event.addDomListener(window, 'load', init);
	var map;
	function init() {
		var mapOptions = {
			center: new google.maps.LatLng(28.632396,77.218201),
			zoom: 16,
			zoomControl: false,
			disableDoubleClickZoom: true,
			mapTypeControl: false,
			scaleControl: false,
			scrollwheel: false,
			panControl: false,
			streetViewControl: false,
			draggable : true,
			overviewMapControl: true,
			overviewMapControlOptions: {
				opened: false,
			},
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: [
				{
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [
						{ "color": "#d3d3d3" }
					]
				},{
					"featureType": "transit",
					"stylers": [
						{ "color": "#808080" },
						{ "visibility": "off" }
					]
				},{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{ "visibility": "on" },
						{ "color": "#b3b3b3" }
					]
				},{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{ "color": "#ffffff" }
					]
				},{
					"featureType": "road.local",
					"elementType": "geometry.fill",
					"stylers": [
						{ "visibility": "on" },
						{ "color": "#ffffff" },
						{ "weight": 1.8 }
					]
				},{
					"featureType": "road.local",
					"elementType": "geometry.stroke",
					"stylers": [
						{ "color": "#d7d7d7" }
					]
				},{
					"featureType": "poi",
					"elementType": "geometry.fill",
					"stylers": [
						{ "visibility": "on" },
						{ "color": "#ebebeb" }
					]
				},{
					"featureType": "administrative",
					"elementType": "geometry",
					"stylers": [
						{ "color": "#a7a7a7" }
					]
				},{
					"featureType": "road.arterial",
					"elementType": "geometry.fill",
					"stylers": [
						{ "color": "#ffffff" }
					]
				},{
					"featureType": "road.arterial",
					"elementType": "geometry.fill",
					"stylers": [
						{ "color": "#ffffff" }
					]
				},{
					"featureType": "landscape",
					"elementType": "geometry.fill",
					"stylers": [
						{ "visibility": "on" },
						{ "color": "#efefef" }
					]
				},{
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [
						{ "color": "#696969" }
					]
				},{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{ "visibility": "on" },
						{ "color": "#737373" }
					]
				},{
					"featureType": "poi",
					"elementType": "labels.icon",
					"stylers": [
						{ "visibility": "off" }
					]
				},{
					"featureType": "poi",
					"elementType": "labels",
					"stylers": [
						{ "visibility": "off" }
					]
				},{
					"featureType": "road.arterial",
					"elementType": "geometry.stroke",
					"stylers": [
						{ "color": "#d6d6d6" }
					]
				},{
					"featureType": "road",
					"elementType": "labels.icon",
					"stylers": [
						{ "visibility": "off" }
					]
				},{
				},{
					"featureType": "poi",
					"elementType": "geometry.fill",
					"stylers": [
						{ "color": "#dadada" }
					]
				}
			],
		}
		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var locations = [

		];
		for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
			if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
			if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
			marker = new google.maps.Marker({
				icon: markericon,
				position: new google.maps.LatLng(locations[i][5], locations[i][6]),
				map: map,
				title: locations[i][0],
				desc: description,
				tel: telephone,
				email: email,
				web: web
			});
			if (web.substring(0, 7) != "http://") {
				link = "http://" + web;
			} else {
				link = web;
			}
			bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
		}
		function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
			var infoWindowVisible = (function () {
				var currentlyVisible = false;
				return function (visible) {
					if (visible !== undefined) {
						currentlyVisible = visible;
					}
					return currentlyVisible;
				};
			}());
			iw = new google.maps.InfoWindow();
			google.maps.event.addListener(marker, 'click', function() {
				if (infoWindowVisible()) {
					iw.close();
					infoWindowVisible(false);
				} else {
					var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a><a href='"+link+"'' >"+web+"<a></div>";
					iw = new google.maps.InfoWindow({content:html});
					iw.open(map,marker);
					infoWindowVisible(true);
				}
			});
			google.maps.event.addListener(iw, 'closeclick', function () {
				infoWindowVisible(false);
			});
		}
	}
}
/*map init end*/

/*drop navigation*/
function dropNavigation() {
	$('.header').on('click', '.btn-menu', function (e) {
		var btn = $(this);
		btn.closest('.header')
			.find('.header-options')
			.stop()
			.slideToggle(function () {
				if ($(this).is(':visible')) {
					btn.addClass('active')
						.closest('.wrapper')
						.addClass('menu-expanded');
				} else {
					btn.removeClass('active')
						.closest('.wrapper')
						.removeClass('menu-expanded');
				}
			});

		e.preventDefault();
	});
}
function clearDropNavigation() {
	var dropNav = $('.header-options'),
		btnMenu = $('.btn-menu');

	if (dropNav.is(':visible') && btnMenu.is(':visible')) {
		dropNav.slideUp(function () {
			$('.wrapper').removeClass('menu-expanded');
			btnMenu.removeClass('active');
		});
	}

	if (dropNav.attr('style') && btnMenu.is(':hidden')) {
		dropNav.attr('style', '');
	}
}
/*drop navigation end*/

/*tabs init*/
function tabInit(){
	var $tabs = $('.tabs');
	$tabs.responsiveTabs({
		rotate: false,
		setHash: false,
		startCollapsed: false,
		active: 0,
		animation: 'slide'
	});
}
/*tabs init end*/

/*equalHeight*/
function equalHeightInit(){
	var bonusesList1 = $('.benefits-list');
	var item1 = bonusesList1.find('.benefits-item-img');
	var amount1 = item1.length;
	item1.equalHeight({
		amount: amount1,
		useParent: true,
		parent: bonusesList1,
		resize: true
	});

	var bonusesList2 = $('.edges-list');
	var item2 = bonusesList2.find('.edges-item-img');
	var amount2 = item2.length;
	item2.equalHeight({
		amount: amount2,
		useParent: true,
		parent: bonusesList2,
		resize: true
	});
}
/*equalHeight end*/

/*slick slider init*/
function slickSliderInit(){
	var mainSlider = $('.main-slider');
	if(!mainSlider.length){return;}
	mainSlider.slick({
		fade: true,
		speed: 500,
		arrows: false,
		//swipe: false,
		//autoplay: true,
		autoplaySpeed: 5000,
		//pauseOnHover: false
	})
}
/*slick slider init end*/

/** ready/load/resize document **/
$(document).ready(function () {
	placeholderInit();
	mapInit();
	dropNavigation();
	tabInit();
	slickSliderInit();
});
$(window).load(function () {
	equalHeightInit();
});
$(window).on("debouncedresize", function (event) {
	clearDropNavigation();
});