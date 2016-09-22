
function getCheckLogin() {
	var sd = localStorage.getItem("admin_login");
	if (sd != undefined && sd.length != 0) {
		return true;
	} else {
		return false;
	}
}

function getHeadUrl() {
//	return "http://192.168.2.104/v1/";
	return "http://interface.pinshe.org/v1/";
}
