$(document).ready(
    function() {

	// TODO test userAgent more sensibly

	if (!navigator.userAgent
	    .match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {

	    var e = new Event("deviceready");
	    $(document).trigger(e);
	}
    }
);
