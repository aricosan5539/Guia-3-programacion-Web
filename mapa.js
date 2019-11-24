<!DOCTYPE html>
<html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    </script>
    <script src="https://www.google.com/maps/place/Playa+Guatavita/@4.9358503,-73.8392283,16.75z/data=!4m13!1m7!3m6!1s0x8e400b51495fa3b3:0xe2f4a5f554c430b0!2sGuatavita,+Cundinamarca!3b1!8m2!3d4.934487!4d-73.833644!3m4!1s0x8e400b5495d510af:0xf02a071e49a3dfe5!8m2!3d4.93696!4d-73.8402593"
    async defer></script>
  </body>
</html>