function getCheckLogin() {
	var sd = localStorage.getItem("admin_login");
	if(sd != undefined && sd.length != 0) {
		return true;
	} else {
		return false;
	}
}

function getHeadUrl() {
//		return "http://192.168.0.138/v1/";
	return "http://interface.pinshe.org/v1/";
}

function utf16to8(str) { //转码
	var out, i, len, c;
	out = "";
	len = str.length;
	for(i = 0; i < len; i++) {
		c = str.charCodeAt(i);
		if((c >= 0x0001) && (c <= 0x007F)) {
			out += str.charAt(i);
		} else if(c > 0x07FF) {
			out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
			out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
		} else {
			out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
		}
	}
	return out;
}