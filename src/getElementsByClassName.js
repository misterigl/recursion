// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  	// your code here
  	var results = [];

  	function searcher (element) {
	  	var elementClasses = element.classList;
		if (elementClasses) {	
		  	for (var i = 0; i < elementClasses.length; i++) {
		  		if(elementClasses[i] === className) {
		  			results.push(element);
		  		}	
		  	}
		}

	  	var elementChildren = element.childNodes;
	  	if(elementChildren.length !== 0){
		  	for (var i = 0; i < elementChildren.length; i++) {
		  		searcher(elementChildren[i]);
		  	}
		}
  	}
  	
  searcher(document.body);
  return results;
};
