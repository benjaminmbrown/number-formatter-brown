'use strict';

/*
*Adds a comma to a number
*@param [number] number
*@param [string] locale
*@return [string]
*/

module.exports = function(number, locale){
	return number.toLocaleString(locale);
}