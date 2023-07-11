/* animation for cursor */

document.addEventListener('click', function(event) {
    var target = event.target;
 
    // Check if the clicked element is a link or a descendant of a link
    var isLink = target.tagName.toLowerCase() === 'a' || target.closest('a');
 
    if (!isLink) {
        var spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.left = (event.clientX - 5 + window.pageXOffset) + 'px'; // Add window.pageXOffset
        spark.style.top = (event.clientY - 5 + window.pageYOffset) + 'px'; // Add window.pageYOffset
        document.body.appendChild(spark);
 
        setTimeout(function() {
            document.body.removeChild(spark);
        }, 1000);
    }
 });

 /* map */

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