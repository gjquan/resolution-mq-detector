# [Device Resolution Media Query Detector](http://gregquan.com/detect)

Detecting resolution-related media query values

## Background

Not all devices, especially high-dpi/retina devices, report appropriate device-widths when queried by CSS media queries. The can be troublesome when trying to design with width-based media queries. For example, some smartphones with 1080p displays will actually report their device-width as 1080 pixels, and some unknowing CSS would then render a page intended for desktops. 

In this situation, it probably would have been better to report a device-width of 480px or so in order to receive a phone-focused layout. For more in-depth information on this issue, please visit the project page at [gregquan.com/detect](http://gregquan.com/detect).

Thankfully, we now have resolution-based media queries such as -webkit-min-device-pixel-ratio or min-resolution to identify these high-dpi devices and lay out a web page accordingly.

So how do you know what resolution or pixel ratio a device will report? Here are a couple scripts to do just that.

##Usage

getres() is used to find a device's -webkit-device-pixel-ratio or resolution in dppx. It takes three arguments: (1) the min- version of the media query keyword, (2) the type or unit of the values being tested, and (3) an array of values to test, sorted in descending order. It returns the matching media query with units, or false if the browser doesn't support the query.

Example: testing resolution as dppx with values between 1 and 3
values = [3,2.9,2.8,2.7,2.6,2.5,2.4,2.3,2.2,2.1,2,1.9,1.8,1.7,1.6,1.5,1.4,1.3,1.2,1];
result = getres('min-resolution', 'dppx', values); 


getdpi() returns a device's resolution in dpi units. It takes two arguments, a minimum dpi and a maximum dpi, to search between. It returns the browser's reported dpi or false if the browser doesn't support the min-resolution media query with dpi units.

Example: search for dpi results between 96 and 500dpi
result = getdpi(96, 500);

##Notes

The [matchMedia](https://github.com/paulirish/matchMedia.js/) polyfill is useful for browsers that do not natively support it.

As touched upon above, mobile device browsers will sometimes lie about their pixel dimensions. On a smartphone, window.screen.width should theoretically be the same as window.innerWidth, but usually the former contains the actual display pixels and the latter contains the 'reported' device-width pixels. For example, the iPhone 4 window.screen.width is 640px and the window.innerWidth is 320px (portrait mode).