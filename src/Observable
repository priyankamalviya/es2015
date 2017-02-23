var Observable = Rx.Observable;

var button = document.getElementById('button');
/*
var handler = function(e) {
	alert('clicked');
	button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/

var clicks = Observable.fromEvent(button, 'click');

var subscription = 
	clicks.forEach(
		function onNext(e) {
			alert('clicked');
			subscription.dispose();
		},
		function onError(error) {				 		
			console.log('ERROR!');
		},
		function onCompleted() {
			console.log("done");
		});
