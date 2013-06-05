function getres(query, type, res){

	//first test if this query is recognized by the browser
	if (!window.matchMedia('only screen and (' + query + ':1' + type + ')').matches) {
		return false;
	}

	//counting down from max possible, return the first matching value
	for (var i = 0; i < res.length; i++) {
		if ( window.matchMedia('only screen and (' + query + ':' + res[i] + type + ')').matches ) {
			return res[i] + ' ' + type;
		}
	}
};

function getdpi(imin, imax) {
	//first test if this query is recognized by the browser
	if (!window.matchMedia('only screen and (min-resolution:1dpi)').matches) {
		return false;
	}

	//binary search between imin and imax
	var imid; 
	while( imax >= imin ) {
		imid = Math.floor((imax+imin)/2);
		console.log(imid);
		if (window.matchMedia('only screen and (min-resolution:' + imid + 'dpi)').matches){
			if (window.matchMedia('only screen and (max-resolution:' + imid + 'dpi)').matches) { break; }
			imin = imid + 1;
		} else {
			imax = imid - 1;
		}
	}
	return imid + ' dpi';

}
