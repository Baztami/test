   

function initMap() {
    const myLatlng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatlng,
    });

   
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: myLatlng,
    });
  
    infoWindow.open(map);

    var js;
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
      // Close the current InfoWindow.
      infoWindow.close();
      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toString(), null, 2),
        js=mapsMouseEvent.latLng.toJSON(),
        url="https://api.solcast.com.au/world_radiation/forecasts?latitude=${js['lat']}&longitude=${js['long']}&api_key=N7nT0QW-MvtYpa7ArMwlFPFAyjw4Jj9i",

          
        

         async function getapi(url){lat
            const response = await fetch(url)
            var data= await response.json()
            console.log(data)



         }
      );    
      infoWindow.open(map);
    });
  }