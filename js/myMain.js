// Global variables
var map;
var infoWindow;
var bounds;

// To open Google maps and kick start KO
initMap = function(){
    // Jasper high school
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33.066927, lng: -96.782985},
        zoom: 13
    });
    // Applying KO bindings for HTML doc
    ko.applyBindings(new ViewModel());
}

// KO View Model
var ViewModel = function() {
    var self = this;

    // Search string observable to update location list displayed
    this.searchStr = ko.observable('');
    // String to hold al markers
    this.myMarkers = [];

    // More variables init/declare
    infoWindow = new google.maps.InfoWindow();
    bounds = new google.maps.LatLngBounds();
    var wikiResponse;

    // Loop thru all (5) locations, create/store location Markers and define 'click' function for each Marker
    for (var i=0; i<myLocations.length; i++){
        this.marker = new google.maps.Marker({
            position: myLocations[i].location,
            title: myLocations[i].title,
            animation: google.maps.Animation.DROP,
            map: map
        });

        // Storing each location Marker in array
        this.myMarkers.push(this.marker);
        // Fixing map boundry
        bounds.extend(this.myMarkers[i].position);
        // Function to run when Marker is clicked
        this.marker.addListener('click', function() {
            var infoWindowContent = '<div>' + this.title + '</div><br>';
            infoWindow.marker = this;
            wikiResponse = 'No wiki data found!!!';

            // Wikipedia async call. Raising Error alert if no Wiki response in 8 sec
            var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + this.title + '&format=json&callback=wikiCallback';
            var wikiRequestTimeout = setTimeout(function(){
                alert("Error: Failed to get Wikipedia resources!!!");
            }, 8000);

            // Capturing Wiki success response. Adding first Wiki response as second row text in Info Window
            $.ajax({
                url: wikiUrl,
                dataType: "jsonp",
                jsonp: "callback",
                success: function( response ) {
                    if (response[1].length != 0) {
                        wikiResponse = response[1][0];
                    }
                    // Finalizing Info Window text and opening IW
                    infoWindow.setContent(infoWindowContent + wikiResponse);
                    infoWindow.open(map, infoWindow.marker);
                    //
                    infoWindow.addListener('closeclick', function() {
                        infoWindow.marker = null;
                    });
                    // Marker bounce annimation
                    infoWindow.marker.setAnimation(google.maps.Animation.BOUNCE);
                    setTimeout((function() {
                        infoWindow.marker.setAnimation(null);
                    }).bind(infoWindow.marker), 10);
                    // Wiki call timeout clearance
                    clearTimeout(wikiRequestTimeout);
                }
            });
        });
    };
    // Fixing Map bounds
    map.fitBounds(bounds);

    // Thx to article below for search computed KO function
    // Ref: http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html
    this.locationList = ko.computed(function() {
        var searchStr = self.searchStr().toLowerCase();
        // Search Str not empty then setting all Markers visible
        if (!searchStr) {
            self.myMarkers.forEach(function(myMarker) {
            myMarker.setVisible(true);
            });
        } else {
            // Setting only those Markers to visible which match Search String
            return ko.utils.arrayFilter(self.myMarkers, function(myMarker) {
                var result = myMarker.title.toLowerCase().includes(searchStr);
                myMarker.setVisible(result);
                return result;
            });
        }
        return self.myMarkers;
    }, self);

    // Triggering Click function if a row in location list is clicked
    this.showInfoWindow = function() {
        google.maps.event.trigger(this, 'click');
    }
};

// Raising Error alert if Google Maps call not successful
function googleMapError(){
    alert("Error: Failed to get Google Map resources!!!");
}

// Function to toggle List display button caption (Show List/Hide List)
function toggleListDisplay() {
    var locLst = document.getElementById("locList");
    var dispButton = document.getElementById("showHide");
    if (locLst.style.display === "none") {
        locLst.style.display = "block";
        dispButton.value = "Hide List";
    } else {
        locLst.style.display = "none";
        dispButton.value = "Show List";
    }
}