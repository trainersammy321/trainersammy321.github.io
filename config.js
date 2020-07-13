const API_KEY = "pk.eyJ1IjoiY2FybGFpciIsImEiOiJjazFja3JjYncwMTJlM2xteWl2czY4aWg0In0.gxpkCgiMg1Fo7voVsLNlHw";

var streets = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery Â© <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

// Demo Marker
var marker = L.marker([35.2271, -80.8431], {
	title: "This Marker is in Charlotte, NC"
});

marker.bindPopup("Hello from Charlotte, NC!");

// Section 001 Markers

var Sam_Marker = L.marker([35.6762, 139.6503], {
	title: "Sam Bailey wants to travel to Tokyo, Japan"
});

Sam_Marker.bindPopup("Sam says Konichiwa from Tokyo!");

var Jonathan_Marker = L.marker([30.0444, 31.2357], {
	title: "Jonathan Lindsay wants to travel to Egypt"
});

Jonathan_Marker.bindPopup("Jonathan says Hello from Egypt!");

var Semira_Marker = L.marker([7.5400, -5.5471], {
	title: "Semira Daniels wants to travel to Côte d'Ivoire"
});

Semira_Marker.bindPopup("Semira says Hello from Côte d'Ivoire!");

var Camryn_Marker = L.marker([13.9094, -60.9789], {
	title: "Camryn wants to travel to St. Lucia"
});

Camryn_Marker.bindPopup("Camryn says Hello from St. Lucia!");

// Section 002 Markers
var Istar_Marker = L.marker([21.3891, 39.8579], {
	title: "Istar wants to travel to Mecca"
});

Istar_Marker.bindPopup("Istar says Marhaba from Mecca!");

var Abrum_Marker = L.marker([25.2048, 55.2708], {
	title: "Abrum wants to travel to Dubai"
});

Abrum_Marker.bindPopup("Abrum says Hello from Dubai!");

var Toby_Marker = L.marker([35.8617, 104.1954], {
    title: "Toby wants to travel to China"
});
Toby_Marker.bindPopup("Toby says Hello from China!");

var Kiyah_Marker = L.marker([35.7023, 139.7745], {
    title: "Kiyah wants to travel to Akihabara"
});

Kiyah_Marker.bindPopup("Kiyah says Hello from Akihabara!");

var Denilson_Marker = L.marker([-22.9027800, -43.2075000], {
    title: "Denilson wants to travel to Rio De Janeiro"
});
Denilson_Marker.bindPopup("Denilson says Hello from Rio De Janeiro");

// Section 003
var Dr_A_Marker = L.marker([3.2028, 73.2207], {
	title: "Dr. A wants to travel to the Maldives Islands"
});

Dr_A_Marker.bindPopup("Dr. A says hello from the Maldives Islands!");

var Brooke_Marker = L.marker([25.0443, -77.3504], {
    title: "Brooke wants to travel to the Bahamas"
});

Brooke_Marker.bindPopup("Brooke says Hello from the Bahamas!");

var Lizzie_Marker = L.marker([51.1657, 10.4515], { title: "Lizzie wants to travel to Germany" });  
Lizzie_Marker.bindPopup("Lizzie says hello from Germany!");

var Damon_Marker = L.marker([35.689488, 139.691706], {
    title: "Damon wants to travel to tokyo"
});
Damon_Marker.bindPopup("Damon says hello from tokyo");

var Andrew_Marker = L.marker([33.7490, -84.3880], {
    title: "Andrew wants to travel to Atlanta"
});
Andrew_Marker.bindPopup("Andrew says hello from Atlanta!");

var Ariana_Marker = L.marker([19.8968, -155.5828], {
    title: "Ariana wants to travel to Hawaii"
});
Ariana_Marker.bindPopup("Ariana says hello from Hawaii!");

// Schools
var POB_Marker = L.marker([35.2387527, -80.8920165], {
    title: "Phillip O'Berry High School"
});

POB_Marker.bindPopup("Phillip O'Berry High School");

var HawthorneAcademy_Marker = L.marker([35.228878, -80.814613], {
    title: "Hawthorne Academy of Health Science"
});
HawthorneAcademy_Marker.bindPopup("Hawthorne Academy of Health Science");

var NorthMeck_Marker = L.marker([ 35.3731949, -80.833961], { title: "This is North Mecklenburg High" });
NorthMeck_Marker.bindPopup("North Mecklenburg High School");

var Ardrey_Kell_High_marker = L.marker([35.05, -80.81], {
    title: "This Marker is at Ardrey Kell High School"
});

Ardrey_Kell_High_marker.bindPopup("Ardrey Kell High School");

var Butler_Marker = L.marker([35.12028, -80.69306], {
    title: "Butler High School"
});

Butler_Marker.bindPopup("Butler High School");

var myMap = L.map("map", {
	center: [0, 0],
	zoom: 3});
	
streets.addTo(myMap);
marker.addTo(myMap);
Sam_Marker.addTo(myMap);
Jonathan_Marker.addTo(myMap);
Semira_Marker.addTo(myMap);
Camryn_Marker.addTo(myMap);
Istar_Marker.addTo(myMap);
Abrum_Marker.addTo(myMap);
Toby_Marker.addTo(myMap);
Kiyah_Marker.addTo(myMap);
Denilson_Marker.addTo(myMap);
Dr_A_Marker.addTo(myMap);
Brooke_Marker.addTo(myMap);
Lizzie_Marker.addTo(myMap);
Damon_Marker.addTo(myMap);
Andrew_Marker.addTo(myMap);
Ariana_Marker.addTo(myMap)
POB_Marker.addTo(myMap);
HawthorneAcademy_Marker.addTo(myMap);
NorthMeck_Marker.addTo(myMap);
Ardrey_Kell_High_marker.addTo(myMap);
Butler_Marker.addTo(myMap);
