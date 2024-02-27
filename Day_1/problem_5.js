fetch('https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=59c50fe87fd65199bea0a528226f0304')
  .then(response => response.json())
  .then(data => {
    
    console.log(data.coord);
    console.log(data.weather[0]);
    console.log(data.main);

   
  })
  .catch(error => {
    console.error(error);
  });
 
 