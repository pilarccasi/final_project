function initMap() {

    var geocoder = new google.maps.Geocoder();
    var myLatlng = new google.maps.LatLng(0, 0);
    var myOptions = {
        zoom: 1,
        //address: 'Telde, Canarias'
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    //show marker for an address
    function codeAddress(address) {
        geocoder.geocode({
            'address': address
        },

        function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                map.setZoom(2);
                var infowindow = new google.maps.InfoWindow({
                    content: '<div id="content">Location: ' + address + '</div>'
                });

/*

        $.each(data.statuses, function () {
            if ($list.find('#' + this.id_str).length == 0) { //don't ad tweet which is already there
                $('<li>').attr('id', this.id_str).append(
                    '<a data-weight="'+getRandomInt(10,30)+'" title="&lt;img src=&quot;' 
                        + this.user.profile_image_url + '&quot;/&gt; ' 
                        + this.text + '" href="https://twitter.com/' 
                        + this.user.screen_name + '/status/' + this.id_str 
                        + '" target="_blank">' + this.text.substring(0, numOfCharsToShowInCloud) 
                    + '...</a>').appendTo($list);
                newTweetsAdded++;
            }
            n++;
        });

*/        







                
                //var point = results[0].geometry.location;
                //map.panTo(point); // Mapa a la posicion
                //setTimeout(function(){ map.setZoom(14) },2000); // Zoom in after 1 sec

                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    animation: google.maps.Animation.DROP,
                    map: map,
                    title: 'Pajarito',
                    icon: 'img/mr_icon.png'
                });

                //on click marker, open popup
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });
            }
        });
    }
  //var searchTerm = 'marianorajoy',
    //numOfTweets = 100,
    //url = 'http://aamirafridi.com/twitter/?q=' + searchTerm + '&count=' + numOfTweets;

  //$.get(url, function(data) {
    //var locations = [];
    //$.each(data.statuses, function() {
      //if (this.user.location !== "")
        //locations.push(this.user.location);
    //});


    $.get('request.php', function(response) {
    //console.log(response);
    var dataParse = JSON.parse(response);
    var locations = [];
    var tuits = [];
    $.each(dataParse.statuses, function() {
    if (this.user.location !== "")
          locations.push(this.user.location);  
    });


    var timer = setInterval(function(){
            if(locations.length === 0) {
                clearTimeout(timer);
                return;
            }
            codeAddress(locations.shift());
        }, 2000);
        
    });
    
};

google.maps.event.addDomListener(window, "load", initMap);    
