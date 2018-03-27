
# Udacity Front-End Web Developer Nanodegree
## Project: Neighborhood Map

### Overview
Student needs to create a website which depicts selected locations in list view and as markers on Google Maps.  An info window should open up above the selected marker if a location marker is clicked directly or a location selected from list view.  Search/filter functionality should be provided for list view which should reflect in on-screen markers availability in real time.


### Installation
Install/download website resources using one of following methods and open index.html:
* Clone from GitHub - https://github.com/DeemiTx/FEND_Proj_NeighborhoodMap.git
* Download as Zip file - https://github.com/DeemiTx/FEND_Proj_NeighborhoodMap/archive/master.zip

Access website resources (index.html) using following URL:
* https://deemitx.github.io/FEND_Proj_NeighborhoodMap/index.html

### How to Run
* Open index.html in browser either directly or once downloaded.
* Click on a location marker directly on the map to open Info Window related to map marker
* Click on a location in the list to open Info Window related to map marker
* Use text box in upper left corner to filter list locations
* Use Show List / Hide List button as needed to attain more screen real estate

### Coding Features/Details

* bootstrap CSS classes are mostly used to control presentation
* Model-View-View Model (MVVM) design pattern via Knockout JS 3.4.2 library is used to build dynamic UI
* Use of KO Observable to link location data to list view
* Use of KO Computed Observable to implement location list search/filter feature @ UI
* Use of Google Maps API to implement map and related features
* Use of Wikipedia async API to retrieve location related data
* Use of bootstrap 4.0.0 minified CSS and JQuery 3.3.1 minified JS libraries

Please see individual files for more details.  Comments are added  throughout the code/files.


### Required Files

* index.html : HTML
* js/myData.js : Location Data
* js/myMain.js : KO and other JS scripts
* js/knockout-3.4.2.js : KO framework
* css/myStyle.css : Cusom CSS


### License
MIT License

Copyright (c) [2018] [Deemi TX]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
