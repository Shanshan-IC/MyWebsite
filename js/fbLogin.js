
window.fbAsyncInit = function() {
	FB.init({
		appId      : '594495640707483',
		xfbml      : true,
		version    : 'v2.5'
	});

	FB.getLoginStatus(function (response) {
		if (response.status === 'connected') {
			document.getElementById('status').innerHTML = 'We are connected';
		} else if (response.status === 'not_authorized') {
			document.getElementById('status').innerHTML = 'We are not Login';
		} else {
			document.getElementById('status').innerHTML = 'You are not Login in facebook.';
		}
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function login() {
	FB.login(function(response) {
		if (response.status === 'connected') {
			document.getElementById('status').innerHTML = 'We are connected';

		} else if (response.status === 'not_authorized') {
			document.getElementById('status').innerHTML = 'We are not Login';
		} else {
			document.getElementById('status').innerHTML = 'You are not Login in facebook.';
		}

	});
}