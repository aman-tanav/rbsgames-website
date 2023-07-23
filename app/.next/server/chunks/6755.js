"use strict";
exports.id = 6755;
exports.ids = [6755];
exports.modules = {

/***/ 66755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
"use Client";


const Map = ()=>{
    const mapContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const jubileeWalkLatLng = {
        lat: 30.6862,
        lng: 76.7077
    };
    const markerTitle = "RBS LABS, Sector 70, Mohali";
    let marker;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let map;
        let infoWindow;
        const loadMap = ()=>{
            map = new window.google.maps.Map(mapContainerRef.current, {
                center: jubileeWalkLatLng,
                zoom: 16
            });
            marker = new window.google.maps.Marker({
                position: jubileeWalkLatLng,
                map: map,
                title: markerTitle,
                animation: window.google.maps.Animation.DROP
            });
            infoWindow = new window.google.maps.InfoWindow({
                content: `<div>${markerTitle}</div>`
            });
            // Add a click event listener to show the info window when the marker is clicked
            marker.addListener("click", ()=>{
                infoWindow.open(map, marker);
            });
        };
        // Load Google Maps script dynamically on the client-side
        if (false) {} else {
            loadMap();
        }
        return ()=>{
            if (marker) {
                marker.setMap(null);
            }
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "responsive-map",
        ref: mapContainerRef,
        style: {
            height: "600px"
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ })

};
;