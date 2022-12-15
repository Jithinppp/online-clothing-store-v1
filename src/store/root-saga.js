import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/categories-saga";

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}

/*
function* is a ES6 function generator
generator functions are newish feature in js ecosystem
function that resemble async await actually async await is built on top of generator functions
we pause the execution when we see the await keyword
similar to this generator functions also pause the execution when see a keyword called yield 
why? --> to control the execution or to pause execution in a function
eg:
   function* genFunction(){
      clg('a')
      clg('b')
   }
   const res = genFunction()

the moment we call the function it wont run or execute the code inside of it
it gives back a suspended object like promise or generator object
in the generator object we call next()
   res.next()   
then resume the code or get executed code and it returns a object {value:undefined,done:true}

in the generator function we can call yield it basically behave like return keyword or resolve keyword
   function* gen(i){
      yield i;
      yield i+10;
   }
   const res = gen(5)
   res.next() 
the first res.next() --> gives the first yield {value:5,done:false}
the second res.next() --> gives second yield {value:15,done:false}
the third time res.next() --> will give the done:true and value be undefined so we can return some in the function
   function* gen(i){
      yield i;
      yield i+10;
      return 55;
   }
   const res = gen(5)
   res.next() 
   res.next() 
   res.next() --> {value:55,done:true} the return will give the value 


*/
