var vd=document.getElementById("mavideo"); 	  
var ad=document.getElementById("maaudio"); 	 



function lecture(s) 
{
      s.play(); 	

}
function dopause(s)
{
     s.pause(); 	
}
function dostop(s) 
{
	s.pause(); 
	s.currentTime=0;    	
}
function avancer(s) 
{
	s.currentTime+=10;
}
function reculer(s)
{
	s.currentTime-=10;
}
function creerBoutons() 
{
var btn1='<button type="button" onClick="lecture(vd)" class="btn btn-secondary" >Lecture</button>'; 
var btn2='<button type="button" onClick="dopause(vd)" class="btn btn-secondary">Pause</button>';
var btn3='<button type="button" onClick="dostop(vd)" class="btn btn-secondary">Stop</button>';	
var btn4='<button type="button" onClick="avancer(vd)" class="btn btn-secondary">+10</button>';
var btn5='<button type="button" onClick="reculer(vd)" class="btn btn-secondary">-10</button>';

var abtn1='<button type="button" onClick="lecture(ad)" class="btn btn-warning" >Lecture</button>'; 
var abtn2='<button type="button" onClick="dopause(ad)" class="btn btn-warning">Pause</button>';
var abtn3='<button type="button" onClick="dostop(ad)" class="btn btn-warning">Stop</button>';	
var abtn4='<button type="button" onClick="avancer(ad)" class="btn btn-warning">+10</button>';
var abtn5='<button type="button" onClick="reculer(ad)" class="btn btn-warning">-10</button>';
document.getElementById("d1").innerHTML=btn1+btn2+btn3+btn4+btn5;
document.getElementById("d2").innerHTML=abtn1+abtn2+abtn3+abtn4+abtn5;

} 

 function repeter()
   {
	var lp=document.getElementById("rept");
	   if(lp.checked)
        {
        vd.currentTime=0;
        vd.play(); 	   
        }
   }
   function repeter2()
   {
	var lp=document.getElementById("rept2");
	   if(lp.checked)
        {
        ad.currentTime=0;
        ad.play(); 	   
        }
   }





function myLocation() 
{
   if (navigator.geolocation)
   navigator.geolocation.getCurrentPosition(showLocation);
   else 
   p.innerHTML = " please apporve Geolocation";
}

function showLocation(location)
 {
   var p = document.getElementById("showloc");

  p.innerHTML = "Latitude: " + location.coords.latitude + "<br>"+"Longitude: " + location.coords.longitude;
  var locationonmap = location.coords.latitude + "," + location.coords.longitude;
var lg=location.coords.longitude   ;
var lt=location.coords.latitude ;



//display of the map using here api


// create the object:
var platform = new H.service.Platform({
   'apikey': '{LtTl9v35Zpb_r9cgVv8GypHLG-EQ863Ij2_CbqXG13g	}'
   });

   // Obtain the default map types from the platform object
   var maptypes = platform.createDefaultLayers();

   var map = new H.Map(
   document.getElementById('showloc'),
   maptypes.vector.normal.map,
   {
     zoom: 6,
     center: { lng:  lg, lat: lt  }
   });

   

}

