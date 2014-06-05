$.getJSON("js/quotes.json", function (data) {
 var max = data.quotes.length;
            $('.quote').append('"' + data.quotes[Math.floor(Math.random() * max) + 0] + '"')
});
