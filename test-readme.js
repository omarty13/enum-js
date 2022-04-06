
const EnumJs = require("./index.js");

// By default, the first enumerator has the value 0, and the value of each successive enumerator is increased by 1.
// apple - 0, orange - 1, pear - 2, etc.
var fruitsEnum = new EnumJs ("fruits", [
	"apple",
	"orange",
	"pear",
	"cucumber",
	"banana",
]);

// Enumerations can use initializers to override the default values, as shown in the following example.
// In this case is a sequence of elements start at 0, but since the enumerator cucumber sequence continues with 7.
var fruitsEnum = new EnumJs ("fruits", [
	"apple",
	"orange",
	"pear",
	[ "cucumber", 7 ],
	"banana",
]);

console.log(EnumJs.getNames(fruitsEnum));
// [ 'apple', 'orange', 'pear', 'cucumber', 'banana' ]

console.log(EnumJs.getNamesInOrder(fruitsEnum));