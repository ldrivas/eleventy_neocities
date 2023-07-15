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

  var locations = [
    {
      lat: -34.9285,
      lng: 138.6007,
      title: 'Adelaide CBD',
      category: 'cafe',
      rating: 5,
      content: '<div class="infowindow-content"><h3>This is the Adelaide CBD.</h3><div><img src="/img/map.png" alt="Adelaide CBD Image" width="200" height="auto"></div><div><p><br>Adelaide city centre (Kaurna: Tarndanya) is the inner city locality of Greater Adelaide, the capital city of South Australia. It is known by locals simply as "the City" or "Town" to distinguish it from Greater Adelaide and from the City of Adelaide local government area (which also includes North Adelaide and from the Park Lands around the whole city centre). The population was 15,115 in the 2016 census.<p><br>Attribution: Adelaide city centre, <a href="https://en.wikipedia.org/wiki/Adelaide_city_centre">https://en.wikipedia.org/wiki/Adelaide_city_centre</a> (last visited 11 July 2023)</p></div>'
    },
    {
      lat: -34.924342,
      lng: 138.606044,
      title: 'Hindmarsh Square',
      category: 'restaurant',
      rating: 4,
      content: '<div class="infowindow-content"><h3>Hindmarsh Square</h3><div><img src="/img/map.png" alt="Adelaide CBD Image" width="200" height="auto"></div><div><p><br>Adelaide city centre (Kaurna: Tarndanya) is the inner city locality of Greater Adelaide, the capital city of South Australia. It is known by locals simply as "the City" or "Town" to distinguish it from Greater Adelaide and from the City of Adelaide local government area (which also includes North Adelaide and from the Park Lands around the whole city centre). The population was 15,115 in the 2016 census.<p><br>Attribution: Adelaide city centre, <a href="https://en.wikipedia.org/wiki/Adelaide_city_centre">https://en.wikipedia.org/wiki/Adelaide_city_centre</a> (last visited 11 July 2023)</p></div>'
    },
    {
      lat: -34.927913,
      lng: 138.597208,
      title: 'The Brew Haven',
      category: 'cafe',
      rating: 4,
      content: '<div class="infowindow-content"><h3>The Brew Haven</h3><div><img src="/img/map.png" alt="The Brew Haven" width="200" height="auto"></div><div><p>Description of The Brew Haven</p></div></div>'
    },
    {
      lat: -34.928320,
      lng: 138.601467,
      title: 'Caffeine Dreams',
      category: 'cafe',
      rating: 4.5,
      content: '<h3>Caffeine Dreams</h3><div><img src="/img/map.png" alt="Caffeine Dreams" width="200" height="auto"></div><div><p>Description of Caffeine Dreams</p></div>'
    },
    {
      lat: -34.928852,
      lng: 138.593915,
      title: 'Mellow Mornings',
      category: 'cafe',
      rating: 4.2,
      content: '<h3>Mellow Mornings</h3><div><img src="/img/map.png" alt="Mellow Mornings" width="200" height="auto"></div><div><p>Description of Mellow Mornings</p></div>'
    },
    {
      lat: -34.935237,
      lng: 138.598466,
      title: 'Sugar & Spice Cafe',
      category: 'cafe',
      rating: 3.8,
      content: '<h3>Sugar & Spice Cafe</h3><div><img src="/img/map.png" alt="Sugar & Spice Cafe" width="200" height="auto"></div><div><p>Description of Sugar & Spice Cafe</p></div>'
    },
    {
      lat: -34.928658,
      lng: 138.593082,
      title: 'The Daily Grind',
      category: 'cafe',
      rating: 4.3,
      content: '<h3>The Daily Grind</h3><div><img src="/img/map.png" alt="The Daily Grind" width="200" height="auto"></div><div><p>Description of The Daily Grind</p></div>'
    },
    {
      lat: -34.936158,
      lng: 138.602699,
      title: 'Cuppa Corner',
      category: 'cafe',
      rating: 4.1,
      content: '<h3>Cuppa Corner</h3><div><img src="/img/map.png" alt="Cuppa Corner" width="200" height="auto"></div><div><p>Description of Cuppa Corner</p></div>'
    },
    {
      lat: -34.937054,
      lng: 138.615336,
      title: 'Bean and Leaf Bistro',
      category: 'restaurant',
      rating: 4.7,
      content: '<h3>Bean and Leaf Bistro</h3><div><img src="/img/map.png" alt="Bean and Leaf Bistro" width="200" height="auto"></div><div><p>Description of Bean and Leaf Bistro</p></div>'
    },
    {
      lat: -34.928389,
      lng: 138.604779,
      title: 'Sip & Savor',
      category: 'restaurant',
      rating: 4.4,
      content: '<h3>Sip & Savor</h3><div><img src="/img/map.png" alt="Sip & Savor" width="200" height="auto"></div><div><p>Description of Sip & Savor</p></div>'
    },
    {
      lat: -34.923962,
      lng: 138.604251,
      title: 'The Cozy Bean',
      category: 'cafe',
      rating: 4.6,
      content: '<h3>The Cozy Bean</h3><div><img src="/img/map.png" alt="The Cozy Bean" width="200" height="auto"></div><div><p>Description of The Cozy Bean</p></div>'
    },
    {
      lat: -34.920253,
      lng: 138.602739,
      title: 'Brewed Bliss',
      category: 'cafe',
      rating: 4.3,
      content: '<h3>Brewed Bliss</h3><div><img src="/img/map.png" alt="Brewed Bliss" width="200" height="auto"></div><div><p>Description of Brewed Bliss</p></div>'
    },
  ];
    // Add more locations here as needed

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

    // Create an InfoWindow object and set its content
    var infoWindow = new google.maps.InfoWindow({
      content: location.content,
      maxWidth: 230
    }); // Create a new InfoWindow for each marker
    infoWindows.push(infoWindow);

    // Attach the InfoWindow to the marker's click event
    marker.addListener(
      'click',
      (function (marker, content, infoWindow) {
        return function () {
          if (openedInfoWindow) {
            openedInfoWindow.close();
          }

          if (openedMarker === marker) {
            openedMarker = null;
            openedInfoWindow = null;
            map.panTo(originalCenter);
            return;
          }

          infoWindow.open(map, marker);
          openedMarker = marker;
          openedInfoWindow = infoWindow;
        };
      })(marker, location.content, infoWindow)
    );

    // Close the InfoWindow when map is clicked and dragged
    map.addListener('dragstart', function () {
      for (var i = 0; i < infoWindows.length; i++) {
        infoWindows[i].close();
      }
    });

    markers.push(marker);
  }

  // Function to filter markers based on the selected options
  function filterMarkers() {
    var filterCafe = document.getElementById('filterCafe').checked;
    var filterRestaurant = document.getElementById('filterRestaurant').checked;
    var filterRating = document.getElementById('filterRating').checked;

    // Iterate over all markers and set their visibility based on the filters
    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i];
      var isVisible =
        (filterCafe && marker.category === 'cafe') ||
        (filterRestaurant && marker.category === 'restaurant') ||
        (filterRating && marker.rating >= 5);

      marker.setVisible(isVisible);

      // Update the corresponding item in the place list
      var listItem = document.getElementById('placeItem_' + i);
      if (listItem) {
        listItem.style.display = isVisible ? 'table-cell' : 'none';
      }
    }
  }

  // Function to create the place list and handle its click events
  function createPlaceList() {
    var placeList = document.getElementById('placeList');
    placeList.innerHTML = ''; // Clear the existing list

    // Create a table with 3 columns
    var table = document.createElement('table');
    table.classList.add('place-table');

    var row;
    var cellCount = 0;

    // Iterate over all markers and create table cells
    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i];

      if (marker.getVisible()) {
        // Create a new row for every 3 cells
        if (cellCount % 3 === 0) {
          row = document.createElement('tr');
          table.appendChild(row);
        }

        var cell = document.createElement('td');
        cell.textContent = marker.title;
        cell.classList.add('place-item');
        cell.id = 'placeItem_' + i;

        // Attach click event listener to show/hide the marker's InfoWindow
        cell.addEventListener(
          'click',
          (function (marker, content, infoWindow) {
            return function () {
              if (openedInfoWindow === infoWindow) {
                infoWindow.close();
                openedMarker = null;
                openedInfoWindow = null;
                map.panTo(originalCenter);
              } else {
                if (openedInfoWindow) {
                  openedInfoWindow.close();
                }
                infoWindow.open(map, marker);
                openedMarker = marker;
                openedInfoWindow = infoWindow;
              }
            };
          })(marker, marker.content, infoWindows[i])
        );

        row.appendChild(cell);
        cellCount++;
      }
    }

    placeList.appendChild(table);
  }

  createPlaceList(); // Call the function to create the initial place list
  filterMarkers(); // Call the function to apply the initial filters

  // Attach event listeners to the filter checkboxes
  document.getElementById('filterCafe').addEventListener('change', filterMarkers);
  document.getElementById('filterRestaurant').addEventListener('change', filterMarkers);
  document.getElementById('filterRating').addEventListener('change', filterMarkers);
}

