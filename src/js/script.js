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