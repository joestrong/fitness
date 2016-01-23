import "../../node_modules/material-design-lite/dist/material.js";
import AppController from "./controllers/AppController.js";

new AppController();

if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    }).then(function (reg) {
        console.log('service worker registered', reg);
    }, function (err) {
        console.log('service worker NOT registered', err);
    });
}
