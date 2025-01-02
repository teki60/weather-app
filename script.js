var data = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=srikakulam&appid=ea3f1cfe5e3a30a100914fb65fe04e09&units=metric`
  ).then((res) => res.json());
  data.then((data) => {
    $(".temp").text(Math.floor(data.main.temp) + "°C");
    $(".place").text(data.name);
    $(".wind").text(Math.floor(data.wind.speed * 10) + " km/h");
    $(".hum").text(data.main.humidity + "%");
    var img = data.weather[0].main.toLowerCase();
    img = "images/" + img + ".png";
    console.log(img);
    $(".midimg").attr("src", img);
  });
  
  $(".search").on("click", function () {
    var place = $("input").val();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${place.toLowerCase()}&appid=ea3f1cfe5e3a30a100914fb65fe04e09&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        $(".temp").text(Math.floor(data.main.temp) + "°C");
        $(".place").text(data.name);
        $(".wind").text(Math.floor(data.wind.speed * 10) + " km/h");
        $(".hum").text(data.main.humidity + "%");
        var img = data.weather[0].main.toLowerCase();
        img = "images/" + img + ".png";
        $(".midimg").attr("src", img);
      });
  });
  