
const sNames = Symbol("enumNames");
const sNamesInOrder = Symbol("enumNamesInOrder");
const sNamesSize = Symbol("enumNamesSize");


export default class EnumJs
{
	/**
	 * EnumJs - the type that consists of a set of named constants called enumerators list.
	 * @constructor
	 * @param {string} enumType - The name of the enumeration type.
	 * @param {Array} enumArgs - An array of enumerators.
	 */
	constructor(enumType, enumArgs)
	{
		this[sNames] = [];
		this[sNamesInOrder] = [];
		this[sNamesSize] = 0;

		for (let i = 0; i < enumArgs.length; i++) {
			EnumJs.addName(this, enumArgs[i]);
		}
	}

	/**
	 * Function for get size of the enumerator.
	 * @static
	 * @param {EnumJs} _enum - An instance of the enumeration.
	 * @returns {number} Returns size of the enumerator.
	 */
	static getSize(_enum) {
		return _enum[sNamesSize];
	}

	/**
	 * Function for add name of the enumerator.
	 * @static
	 * @param {EnumJs} _enum - An instance of the enumeration.
	 * @param {string | Array} enumArg - The name (string) of the enumerator or array of name and position of enumerator.
	 */
	static addName(_enum, enumArg) {
		let enumName, enumValue;

		if (Array.isArray(enumArg) == true) {
			if (typeof enumArg[0] != "string" || typeof enumArg[1] != "number") {
				throw new Error("The enumerator name must be of the type 'string', and the enumerator number must be of the type 'number'.");
			}
			enumName = enumArg[0];
			enumValue = enumArg[1];
		}
		else if (typeof enumArg == "string") {
			enumName = enumArg;
			enumValue = _enum[sNamesSize];
		}
		else if (enumArg == undefined) {
			return;
		}
		else {
			throw new Error("Invalid argument of EnumJs.");
		}

		_enum[sNamesInOrder][enumValue] = enumName;
		_enum[sNames].push(enumName);

		if (_enum[sNamesSize] < (enumValue + 1)) {
			_enum[sNamesSize] = enumValue + 1;
		}
		
		Object.defineProperty(_enum, enumName, {
			value: enumValue, writable: false, enumerable: false, configurable: false,
		});
	}

	/**
	 * Function for add array of names to the enumerator.
	 * @static
	 * @param {EnumJs} _enum - An instance of the enumeration.
	 * @param {Array} enumArgs - An array of enumerators.
	 */
	static addNames(_enum, enumArgs) {
		for (let i = 0; i < enumArgs.length; i++) {
			EnumJs.addName(_enum, enumArgs[i]);
		}
	}

	/**
	 * Get the name of the enumerator by value.
	 * @static
	 * @param {EnumJs} _enum - An instance of the enumeration.
	 * @param {number} enumValue - The value of the enumerator.
	 * @returns {string} Returns the name of the enumerator.
	 */
	static getName(_enum, enumValue) {
		return _enum[sNamesInOrder][enumValue];
	}

	/**
	 * Get all the names of the enumerators in the enumeration.
	 * @static
	 * @param {EnumJs} _enum - An instance of the enumeration.
	 * @returns {Array} Returns an array of all names of the enumerator.
	 */
	static getNames(_enum) {
		return _enum[sNames];
	}

	/**
	 * Get all the names of the enumeration in order.
	 * @static
	 * @param {EnumJs} _enum - An instance of the enumeration.
	 * @returns {Array} Returns an array of all names by value of the enumerator.
	 */
	static getNamesInOrder(_enum) {
		return _enum[sNamesInOrder];
	}
}








