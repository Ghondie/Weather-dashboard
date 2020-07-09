let today = new Date();
let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
let queryUrl;
if (localStorage.getItem("last") !== null) {
    queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('last')},us&units=imperial&APPID=47e95ab4ed529ac723f321b23d47806a`;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        let iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        let icon = $('<img>').attr('src', iconUrl);
        let card = $('<div>').addClass('card mt-3 mx-3');
        let body = $("<div>").addClass('card-body');
        let head = $("<h5>").addClass('card-title').text(response.name + ' (' + date + ')').append(icon);
        let temp = $("<p>").addClass('card-text').text('Temperature: ' + Math.round(response.main.temp) + '°F');
        let humid = $("<p>").addClass('card-text').text('Humidity: ' + response.main.humidity + '%');
        let wind = $("<p>").addClass('card-text').text('Wind Speed: ' + response.wind.speed + 'mph');
        body.append(head, temp, humid, wind);
        card.append(body);
        $('#displayContainer').prepend(card);
    })
}
$('#searchBtn').click(function (e) {
    e.preventDefault();
    //alert ("click")
    let userInput = $('#search').val() //.trim();
    console.log(userInput);
    
    localStorage.setItem('last', userInput)
    queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput},us&units=imperial&APPID=47e95ab4ed529ac723f321b23d47806a`;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        let iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        let icon = $('<img>').attr('src', iconUrl);
        let card = $('<div>').addClass('card mt-3 mx-3');
        let body = $("<div>").addClass('card-body');
        let head = $("<h5>").addClass('card-title').text(response.name + ' (' + date + ')').append(icon);
        let temp = $("<p>").addClass('card-text').text('Temperature: ' + Math.round(response.main.temp) + '°F');
        let humid = $("<p>").addClass('card-text').text('Humidity: ' + response.main.humidity + '%');
        let wind = $("<p>").addClass('card-text').text('Wind Speed: ' + response.wind.speed + 'mph');
        body.append(head, temp, humid, wind);
        card.append(body);
        $('#displayContainer').prepend(card);
    });
    $("#userInput").val('');
})
//alert('work')