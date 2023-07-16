/* animation for cursor */

document.addEventListener('DOMContentLoaded', function() {
  // Get the current page URL
  var currentPage = window.location.pathname;

  // Check if the current page is the panorama page
  var isPanoramaPage = currentPage.includes('streetviewhindmarsh');
  var isPanoramaPage = currentPage.includes('yum');

  // Animation for cursor (excluding the panorama page)
  if (!isPanoramaPage) {
    document.addEventListener('click', function(event) {
      var target = event.target;

      // Check if the clicked element is a link or a descendant of a link
      var isLink = target.tagName.toLowerCase() === 'a' || target.closest('a');

      if (!isLink) {
        var spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.left = (event.clientX - 5 + window.pageXOffset) + 'px';
        spark.style.top = (event.clientY - 5 + window.pageYOffset) + 'px';
        document.body.appendChild(spark);

        setTimeout(function() {
          document.body.removeChild(spark);
        }, 1000);
      }
    });
  }
});

 /* map image */

 document.addEventListener('DOMContentLoaded', function() {
    const areas = document.querySelectorAll('area');
    const popups = document.querySelectorAll('.popup');
    const imageMap = document.getElementById('image-map');
  
    areas.forEach(area => {
      area.addEventListener('click', function() {
        const popupId = area.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
  
        if (popup) {
          popups.forEach(popup => {
            popup.style.display = 'none';
            imageMap.style.filter = 'grayscale(0%) brightness(1)';
          });
          
          popup.style.display = 'block';
          imageMap.style.filter = 'grayscale(75%) brightness(0.5)';
        }
      });
    });
    
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.popup') && !event.target.closest('area')) {
        popups.forEach(popup => {
          popup.style.display = 'none';
          imageMap.style.filter = 'grayscale(0%) brightness(1)';
        });
      }
    });
  });

/* food map */

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.9285, lng: 138.6007 },
    zoom: 14
  });

  var originalCenter = { lat: -34.9285, lng: 138.6007 }; // Store the original center position of the map
  var openedMarker = null; // Track the currently opened marker
  var openedInfoWindow = null; // Track the associated InfoWindow

  
    // Added location data in separate file labeled location.js

    var markers = []; // Array to store all markers
  var infoWindows = [];

  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    var marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.title,
      category: location.category,
      rating: location.rating,
      content: location.content
    });

    var infoWindow = new google.maps.InfoWindow({
      content: location.content,
      maxWidth: 230
    });
    infoWindows.push(infoWindow);

    marker.addListener(
      'click',
      (function (marker, content, infoWindow) {
        return function () {
          for (var i = 0; i < infoWindows.length; i++) {
            infoWindows[i].close();
          }

          var latLng = marker.getPosition();
          map.panTo(latLng);

          infoWindow.setContent(content);
          infoWindow.open(map, marker);
        };
      })(marker, location.content, infoWindow)
    );

    google.maps.event.addListener(infoWindow, 'closeclick', function () {
      map.panTo({ lat: -34.9285, lng: 138.6007 });
    });

    markers.push(marker);
  }

  function filterMarkers() {
    var filterCafe = document.getElementById('filterCafe').checked;
    var filterRestaurant = document.getElementById('filterRestaurant').checked;
    var filterRating = document.getElementById('filterRating').checked;

    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i];
      var isVisible =
        (filterCafe && marker.category === 'cafe') ||
        (filterRestaurant && marker.category === 'restaurant') ||
        (filterRating && marker.rating >= 5);

      marker.setVisible(isVisible);

      var listItem = document.getElementById('placeItem_' + i);
      if (listItem) {
        listItem.style.display = isVisible ? 'table-cell' : 'none';
      }
    }
  }

  function createPlaceList() {
    var placeList = document.getElementById('placeList');
    placeList.innerHTML = '';

    var numItems = markers.length; 
    var numRows = Math.ceil(numItems / 3); 

    var table = document.createElement('table');
    table.classList.add('place-table');

    for (var i = 0; i < numRows; i++) {
      var row = document.createElement('tr');
      table.appendChild(row);

      for (var j = 0; j < 3; j++) {
        var index = i * 3 + j;
        if (index >= numItems) {
          break;
        }

        var marker = markers[index];
        var cell = document.createElement('td');
        cell.textContent = marker.title;
        cell.classList.add('place-item');
        cell.id = 'placeItem_' + index;

        cell.addEventListener(
          'click',
          (function (marker, content, infoWindow) {
            return function () {
              if (infoWindow.getMap()) {
                infoWindow.close();
                map.panTo(marker.getPosition());
              } else {
                for (var i = 0; i < infoWindows.length; i++) {
                  infoWindows[i].close();
                }
                infoWindow.setContent(content);
                infoWindow.open(map, marker);
              }
            };
          })(marker, marker.content, infoWindows[index])
        );

        row.appendChild(cell);
      }
    }

    if (numRows > 9) {
      table.style.height = '18em'; 
      table.style.overflowY = 'scroll';
      table.style.display = 'block';
    }

    placeList.appendChild(table);
  }

  createPlaceList();
  filterMarkers();

  document.getElementById('filterCafe').addEventListener('change', filterMarkers);
  document.getElementById('filterRestaurant').addEventListener('change', filterMarkers);
  document.getElementById('filterRating').addEventListener('change', filterMarkers);
}