let today = new Date();
let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
let queryUrl;
if (localStorage.getItem("last") !== null) {
    queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('last')},us&units=imperial&appid=47e95ab4ed529ac723f321b23d47806a`;
   // setting up a local storage 
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        var icon = $('<img>').attr('src', iconUrl);
        var card = $('<div>').addClass('card mt-3 mx-3');
        var body = $("<div>").addClass('card-body');
        var head = $("<h5>").addClass('card-title').text(response.name + ' (' + date + ')').append(icon);
        var temp = $("<p>").addClass('card-text').text('Temperature: ' + Math.round(response.main.temp) + '°F');
        var humid = $("<p>").addClass('card-text').text('Humidity: ' + response.main.humidity + '%');
        var wind = $("<p>").addClass('card-text').text('Wind Speed: ' + response.wind.speed + 'mph');
        body.append(head, temp, humid, wind);
        card.append(body);
        $('#displayContainer').prepend(card);
    })
}
// code for the search button
$('#searchBtn').click(function (e) {
    e.preventDefault();
    //alert ("click")
    var userInput = $('#search').val() //.trim();
    console.log(userInput);
    
    localStorage.setItem('last', userInput)
    queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput},us&units=imperial&appid=47e95ab4ed529ac723f321b23d47806a`;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        var icon = $('<img>').attr('src', iconUrl);
        var card = $('<div>').addClass('card mt-3 mx-3');
        var body = $("<div>").addClass('card-body');
        var head = $("<h5>").addClass('card-title').text(response.name + ' (' + date + ')').append(icon);
        var temp = $("<p>").addClass('card-text').text('Temperature: ' + Math.round(response.main.temp) + '°F');
        var humid = $("<p>").addClass('card-text').text('Humidity: ' + response.main.humidity + '%');
        var wind = $("<p>").addClass('card-text').text('Wind Speed: ' + response.wind.speed + 'mph');
        body.append(head, temp, humid, wind);
        card.append(body);
        $('#displayContainer').prepend(card);
    });
    $("#userInput").val('');
})
//alert('work')