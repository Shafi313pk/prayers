function httpAjaxX(url, mFunction) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            mFunction(this.responseText);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}
document
    .getElementById("changeSettings")
    .addEventListener("click", function () {
        httpAjaxX(
            '//timesprayer.com/ajax.php?do=settingsModal&lang=en&j=0&m=4&t=1',
            function (result) {
                var modalContiner = document.getElementById("hashSpace");
                modalContiner.innerHTML = result;
                var span = document.getElementsByClassName("close")[0];
                span.onclick = function () {
                    modalContiner.innerHTML = '';
                };

                window.onclick = function (event) {
                    if (event.target == document.getElementById("myModal")) {
                        modalContiner.innerHTML = '';
                    }
                };

            }
        );
    });

var base_url = 'timesprayer.com/en';
var city_url = 'jeddah';

function buildurl() {
    document
        .getElementById("goButton")
        .style
        .visibility = "visible";
    var method = document
        .getElementById("method")
        .value;
    var asr = document
        .getElementById("asr")
        .value;
    var time = document
        .getElementById("time")
        .value;
    var realUrl = '//' + base_url + '/prayer-times-in-' + city_url + '-m' +
            method + 'j' + asr + 't' + time + '.html';
    document
        .getElementById("goButton")
        .href = realUrl;;
}

// both were seperate//

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    var elm = document.getElementsByClassName("sidebar")[0];
    var currentVal = window
        .getComputedStyle(elm, null)
        .getPropertyValue('left');
    if (currentVal == '0px' || currentVal == '') {
        elm.style.left = "-225px";
    } else {
        elm.style.left = "0px";
    }
});

var siteURL = '//timesprayer.com';
var language = 'en';

var city_offset = "3";
var reminingtime = 6479000;
var soundfile = "reqiular";
var douration_sound = "243";

var clean_url = 'timesprayer.com';
var base_url = 'timesprayer.com/en';
var city_url = 'jeddah';
function appJs(jsFile) {
    var element = document.createElement("script");
    element.src = jsFile;
    document
        .body
        .appendChild(element);
};

function afterLoad() {
    appJs("//timesprayer.com/js/ptimer.js");
    setTimeout(function downloadJs() {
        appJs(
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9IneXdwfkqK4UbkZ_OZ_S0gDtfj" +
            "9Ux0w&language=en"
        );
        appJs("//timesprayer.com/js/search.1.2.3.js");
        var element = document.createElement("script");
        element.async = true;
        element.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        document
            .body
            .appendChild(element);
        (adsbygoogle = window.adsbygoogle || []).push(
            {google_ad_client: "ca-pub-9184638470810001", enable_page_level_ads: true}
        );
    }, 2000);
}

if (window.addEventListener) 
    window.addEventListener("load", afterLoad, false);
else if (window.attachEvent) 
    window.attachEvent("onload", afterLoad);
else 
    window.onload = afterLoad;

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    },
    i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m
        .parentNode
        .insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-51636779-1', 'timesprayer.com');
ga('send', 'pageview');
