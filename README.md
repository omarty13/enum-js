# enum-js

**enum-js** the data type whose set of values is a limited list of identifiers.

## Install

```
npm install @omarty13/enum-js
```

## Parameters

* `enumType` { string } - The name of the enumeration type.
* `enumArgs` { Array } - An array of enumerators.

## Functions

### **addNames** (enum, enumValue) `[static]`
Add enumerator names.
* `enum` { EnumJs } - An instance of the enumeration to add.
* `enumArgs` { Array } - An array of enumerators.

### **getName** (enum, enumValue) `[static]`
Get the name of the enumerator by value.
* `enum` { EnumJs } - An instance of the enumeration from which to receive a name.
* `enumValue` { number } - The value of the enumerator.
* `Returns` { string } - Returns the name of the enumerator.

### **getNames** (enum) `[static]`
Get all the names of the enumerators in the enumeration.
* `enum` { EnumJs } - An instance of the enumeration from which you want to get all the names.
* `Returns` { string } - Returns an array of all names of the enumerator.

### **getNamesByValue** (enum) `[static]`
Get all the names by value of the enumerators in the enumeration.
* `enum` { EnumJs } - An instance of the enumeration from which you want to get all the names.
* `Returns` { Array } Returns an array of all names by value of the enumerator.

### **getSize** (enum) `[static]`
Get the size of the enumeration.
* `enum` { EnumJs } - An instance of the enumeration.
* `Returns` { Number } Returns the size of the enumeration.

## Example of use

```javascript
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
```
