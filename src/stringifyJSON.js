// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // console.log("obj=", obj);

  if (obj === null) {
  	return 'null';
  }

  if (typeof obj === 'number') {
  	return obj.toString();
  }

  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  if (obj === true) {
  	return 'true';
  }

  if (obj === false) {
  	return 'false';
  }

  if (Array.isArray(obj)) {
  	return stringifyArray(obj);
  }

  if (typeof obj ==='object') {
  	return stringifyObject(obj);
  }

  function stringifyArray (array) {
  	// console.log("stringifyArray called.");
  	if (array.length === 0) {
  		return '[]';
  	}
  	var string = '[';
  	for (var i = 0; i < array.length; i++) {
  		string = string + stringifyJSON(array[i]) + ',';
  	}

  	return string.slice(0, string.length-1) + ']';
  }  	

  function stringifyObject(object) {
  	// console.log("stringifyObject called.");
    
  	if (Object.keys(object).length === 0) {
  		return '{}';
  	}
  	var string = '{';
  	for (key in object) {
      if (key === 'undefined') {
      return '{}';
      }
  		string = string + '"' + key + '":' + stringifyJSON(object[key]) + ',';
  	}

  	return string.slice(0, string.length-1) + '}';
  }

};
