
var consoleHolder = console;
function debug(bool){
	if(!bool){
		consoleHolder = console;
		console = {};
		console.log = function(){};
	}else
		console = consoleHolder;
}

debug(true);

var monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
];

function getFormData($form){
	var unindexed_array = $form.serializeArray();
	var indexed_array = {};

	$.map(unindexed_array, function(n, i){
		indexed_array[n['name']] = $.trim(trim1(n['value']));
	});

	return indexed_array;
}


function dataURItoBlob(dataURI) {
	var byteString;
	if (dataURI.split(',')[0].indexOf('base64') >= 0)
		byteString = atob(dataURI.split(',')[1]);
	else
		byteString = unescape(dataURI.split(',')[1]);

	// separate out the mime component
	var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

	// write the bytes of the string to a typed array
	var ia = new Uint8Array(byteString.length);
	for (var i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	return new Blob([ia], {type:mimeString});
}


function validatePassword(password){
	var re =/^[a-zA-Z0-9]{8,}$/;
	return re.test(password);
}
function validateEmail(email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}
function escapeRegExp(string) {
	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function stripHTML(dirtyString) {
	var container = document.createElement('div');
	container.innerHTML = dirtyString;
	return container.textContent || container.innerText;
}

function trim1 (str) {
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
function replaceAll(string, find, replace) {
	return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function exist(x) {
	return x != null;
}

function truthy(x) {
	return (x !== false) && exist(x);
}


function sortByKey(array, key) {
	return array.sort(function(a, b) {
		var x = a[key]; var y = b[key];
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	});
}


function arrayCompare(a1, a2) {
	if (a1.length != a2.length) return false;
	var length = a2.length;
	for (var i = 0; i < length; i++) {
		if (a1[i] !== a2[i]) return false;
	}
	return true;
}


function inArray(needle, haystack) {
	var length = haystack.length;
	for(var i = 0; i < length; i++) {
		if(typeof haystack[i] == 'object') {
			if(arrayCompare(haystack[i], needle)) return true;
		} else {
			if(haystack[i] == needle) return true;
		}
	}
	return false;
}
String.prototype.replacerec = function (pattern, what) {
	var newstr = this.replace(pattern, what);
	if (newstr == this)
		return newstr;
	return newstr.replace(pattern, what);
};
var confirmOnPageExit = function (e) 
{
	// If we haven't been passed the event get the window.event
	e = e || window.event;

	var message = 'Any text will block the navigation and display a prompt';

	// For IE6-8 and Firefox prior to version 4
	if (e) 
		{
			e.returnValue = message;
		}

		// For Chrome, Safari, IE8+ and Opera 12+
		return message;
};
var confirmOnTattooCreatePageExit = function (e) 
{
	// If we haven't been passed the event get the window.event
	e = e || window.event;

	var message = 'Are you sure to stop editing this tattoo ???';

	// For IE6-8 and Firefox prior to version 4
	if (e) 
		{
			e.returnValue = message;
		}

		// For Chrome, Safari, IE8+ and Opera 12+
		return message;
};
