import Echo from 'laravel-echo'

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'cbcf6c8dc3dccfb2564f',
  cluster: 'eu',
  forceTLS: true
});

var channel = window.Echo.channel('pizza');
channel.listen('StatusPizza', function(data) {
  console.log(JSON.stringify(data));
  alert('test');
  document.getElementById("test").innerHTML = JSON.stringify(data);
//   alert(JSON.stringify(data));
});
