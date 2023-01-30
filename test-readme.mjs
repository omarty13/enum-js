
import EnumJs from "./index.mjs";

// By default, the first enumerator has the value 0, and the value of each successive enumerator is increased by 1.
// apple - 0, orange - 1, pear - 2, etc.
const fruitsEnum1 = new EnumJs ("fruits", [
	"apple",
	"orange",
	"pear",
	"cucumber",
	"banana",
]);

console.log(EnumJs.getNamesInOrder(fruitsEnum1));
// [ 'apple', 'orange', 'pear', 'cucumber', 'banana' ]


// Enumerations can use initializers to override the default values, as shown in the following example.
// In this case is a sequence of elements start at 0, but since the enumerator cucumber sequence continues with 7.
const fruitsEnum2 = new EnumJs ("fruits", [
	"orange",
	"apple",
	"pear",
	[ "cucumber", 7 ],
	"banana",
]);

console.log(EnumJs.getNamesInOrder(fruitsEnum2));
// [ 'orange', 'apple', 'pear', <4 empty items>, 'cucumber', 'banana' ]

// Add names to enumeration
EnumJs.addNames(fruitsEnum2, [
	[ "cherry", 10 ],
	"durian",
])

console.log(EnumJs.getNames(fruitsEnum2));
// [ 'orange', 'apple', 'pear',   'cucumber', 'banana', 'cherry', 'durian' ]

console.log(EnumJs.getNamesInOrder(fruitsEnum2));
// [ 'orange', 'apple', 'pear', <4 empty items>, 'cucumber', 'banana', <1 empty item>, 'cherry', 'durian' ]

console.log(EnumJs.getSize(fruitsEnum2));
// 12