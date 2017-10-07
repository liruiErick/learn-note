(function(holder) {
	'use strict';

	holder.CustomClass = CustomClass;

	function CustomClass() {
		this._init.apply(this, arguments);
	}

	CustomClass.prototype = Object.create(holder.BaseClass.prototype);

	var p = CustomClass.prototype;

	p.constructor = CustomClass;

	p._init = function() {

	};

})(window.bjj = window.bjj || {});