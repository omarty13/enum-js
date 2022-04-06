"use strict";

module.exports = EnumJs;


const sNames = Symbol("enumNames");
const sNamesInOrder = Symbol("enumNamesInOrder");

/**
 * EnumJs - the type that consists of a set of named constants called enumerators list.
 * @constructor
 * @param {string} enumType - The name of the enumeration type.
 * @param {Array} enumArgs - An array of enumerators.
 */
function EnumJs(enumType, enumArgs)
{
	this[sNames] = [];
	this[sNamesInOrder] = [];

	for (var i = 0, enumValue = 0; i < enumArgs.length; i++, enumValue++) {
		var enumArg = enumArgs[i];
		var enumName;

		if (Array.isArray(enumArg) == true) {
			if (typeof enumArg[1] != "number") {
				throw new Error("The enumerator number must be of the type 'number'");
			}
			enumName = enumArg[0];
			enumValue = enumArg[1];
		}
		else if (typeof enumArg == "string") {
			enumName = enumArg;
		}
		else if (enumArg == undefined) {
			enumName = enumArg;
		}
		else {
			throw new Error("Invalid argument of EnumJs.");
		}

		if (enumName) {
			this[sNamesInOrder][enumValue] = enumName;
			this[sNames].push(enumName);
		}
		else {
			continue;
		}

		Object.defineProperty(this, enumName, {
			value: enumValue, writable: false, enumerable: false, configurable: false,
		});
	}
}

/**
 * Get the name of the enumerator by value.
 * @static
 * @param {EnumJs} _enum - An instance of the enumeration.
 * @param {number} enumValue - The value of the enumerator.
 * @returns {string} Returns the name of the enumerator.
 */
EnumJs.getName = function(_enum, enumValue) {
	return _enum[sNamesInOrder][enumValue];
}

/**
 * Get all the names of the enumerators in the enumeration.
 * @static
 * @param {EnumJs} _enum - An instance of the enumeration.
 * @returns {Array} Returns an array of all names of the enumerator.
 */
EnumJs.getNames = function(_enum) {
	return _enum[sNames];
}

/**
 * Get all the names of the enumeration in order.
 * @static
 * @param {EnumJs} _enum - An instance of the enumeration.
 * @returns {Array} Returns an array of all names by value of the enumerator.
 */
EnumJs.getNamesInOrder = function(_enum) {
	return _enum[sNamesInOrder];
}


