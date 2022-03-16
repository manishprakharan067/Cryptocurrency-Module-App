/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CryptoCurrencyModule from './src/components/viewcontrolers/CryptocurrencyModuleUI';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <CryptoCurrencyModule />
    </View>
  );
};

const styles = StyleSheet.create({
  s1: {
    alignItems: 'flex-end'
  }
});

export default App;

// function higherOrderFunction(fn) {
//   fn();
// }

// function newFunc() {
//   return function() {
//     return "Higher order"
//   }
// }

// var higherOrder2 = newFunc()
// higherOrder2()

// higherOrderFunction(function() {console.log('higher order')})

// //this keyword refers to the object of which the function is property of

// function sayHello(Message) {
//   var obj = {name: 'Ankit'}
//   return this.name + Message
// }

// // var obj = {name: 'Manish'}

// sayHello.call(obj, "Jiukl");

// var person = {
//   age: 23,
//   getAge: function() {
//     return this.age
//   }
// }

// var person2 = {age: 54}

// person.getAge.call(person2)

// function multiply(a,b) {
//   return a * b
// }

// function curriedMultiply(fn) {
//   return function(b) {
//     return function(a) {
//       return fn(a,b)
//     }
//   }
// }

// var curryMulti = curriedMultiply(multiply)

// console.log(curryMulti(4)(3))

// multiply(4,3)
// curryMulti(4)(3)

// var Person = function(pName) {
//   var name = pName
//   this.getName = function() {
//     return name
//   }
// }

// var Person1 = new Person('Manish')



// function closure(ame) {
//   var ibjNme = ame
//   return function() {
//     return ibjNme
//   }
// }

// var cl = closure('ecfece')
// cl()
 
// var Obj1 = {
//   name: 'Manish',
//   valueOfThis: function() {
//     return this
//   }
// }

// var Obj2 = {
//   valueOfThis: () => {
//     return this
//   }
// }

// Obj1.valueOfThis()
// Obj2.valueOfThis()


// function bigFunc(){
//   let newArray = new Array(700).fill('♥');
//   return (element) => newArray[element];
// }

// var arry = bigFunc()
// arry(599)

// console.log(bigFunc(599)); // Array is created
// console.log(bigFunc(670)); // Array is created again

// function randomFunc(){
//   for(let i = 0; i < 2; i++){
//     setTimeout(()=> console.log(i),1000);
//   }
// }

// randomFunc();
// function randomFunc(){
//   for(var i = 0; i < 2; i++){
//     (function(i) {
//       setTimeout(()=> console.log(i),1000);
//     })(i)
//   }
// }

// randomFunc(); 
//developmant model based on react native original component 