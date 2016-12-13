var $ = require('jquery');
var displayOptions = function(className) {
	$(className).toggle('show');
}

module.exports = displayOptions;