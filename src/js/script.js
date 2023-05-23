document.addEventListener('click', function(event) {
    var spark = document.createElement('div');
    spark.className = 'spark';
    spark.style.left = (event.clientX - 5) + 'px';
    spark.style.top = (event.clientY - 5) + 'px';
    document.body.appendChild(spark);

    setTimeout(function() {
        document.body.removeChild(spark);
    }, 1000);
});