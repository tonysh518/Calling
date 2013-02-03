var styles = [
  {
	stylers: [
	  { hue: "#000" },
	  { saturation: -100 }
	]
  },{
	featureType: "road",
	elementType: "geometry",
	stylers: [
	  { lightness: 50 },
	  { visibility: "simplified" }
	]
  },{
	featureType: "road",
	elementType: "labels",
	stylers: [
	  { visibility: "on" }
	]
  }
];

var styledMap = new google.maps.StyledMapType(styles,
  {name: "Styled Map"});
var point = new google.maps.LatLng(22.282542,114.232046);
var point2 = new google.maps.LatLng(31.206472,121.477809);


//Map1
var mapOptions = {
  zoom: 13,
  center: new google.maps.LatLng(22.282542,114.232046),
  mapTypeControlOptions: {
	mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
  }
};
map = new google.maps.Map(document.getElementById('google_map1'), mapOptions);
map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');
var marker = new google.maps.Marker({
	position: point,
	map: map,
	title: 'Calling Hong Kong'
});

//Map2
var mapOptions2 = {
  zoom: 4,
  center: new google.maps.LatLng(28.138524,115.748291),
  mapTypeControlOptions: {
	mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
  }
};
map2 = new google.maps.Map(document.getElementById('google_map2'), mapOptions2);
map2.mapTypes.set('map_style', styledMap);
map2.setMapTypeId('map_style');
var marker = new google.maps.Marker({
	position: point,
	map: map2,
	title: 'Calling Hong Kong'
});
var marker2 = new google.maps.Marker({
	position: point2,
	map: map2,
	title: 'Calling Shanghai'
});
