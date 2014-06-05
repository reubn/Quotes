$.getJSON("js/quotes.json", function (data) {
 var max = data.quotes.length;
    var random = Math.floor(Math.random() * max);
            $('.quote').append('"' + data.quotes[random] + '"');
    Midway();
});
