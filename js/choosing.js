var $ = require('jquery');
var choosing = function(value, className, id) {

	$(className).val(value);
    $(id).hide();
}
module.exports = choosing;