const isTopWindow = window.self === window.top;
const locURL = new URL(window.location);
const operationElement = document.querySelector('#operation');
const iFrameSrc = 'http://trackertest.org:8000/iframe-test.html';
const scriptSrc = 'http://itisatracker.com:8000/tracker.js';

document.querySelector('#current-domain').innerHTML = locURL.hostname;

if (isTopWindow && locURL.hostname == 'itisatracker.com' ) {
  operationElement.innerHTML = 'Setting iframe src to: ' + iFrameSrc; 
  document.querySelector('#the-iframe').src = iFrameSrc;
} else if (!isTopWindow && locURL.hostname == 'trackertest.org') {
  operationElement.innerHTML = 'Writing script tag with src to: ' + scriptSrc; 
  document.write('<scr' + 'ipt src="' + scriptSrc + '"></sc' + 'ript>');
} else {
  operationElement.innerHTML = "Unknown case. Expected itisatracker.com to be the top window URL hostname.";
}
