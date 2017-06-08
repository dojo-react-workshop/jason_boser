## Written Portion (40 min)
This part of the test is closed book!

1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!

```js

/* As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/

```

Please write your answer [here](./map.js)

2. What is a React `component`?

---
> A component is an element/node in the DOM tree that can be rendered to the DOM. React maintains a virtual DOM and compares components in the virtual DOM tree against components in the browser DOM to determine where differences have been made and if an update is needed in the browser.
---

3. You can define a React component a few different ways, including (1) as a simple function or (2) as a class that extends the `Component` piece of the React library. How should you decide when to use which syntax?

---
> Simple functions should be used when your component is simply taking in data and outputting static text.  They can be re-used easily by simply changing the data that's passed in.  Components created using class are referred to as 'smart components' because they need to maintain some kind of state data and render updates to the browser when their state changes, e.g. when the user enters data, submits forms, etc. 
---

4. Please transpile the following JSX code into JavaScript that the browser can understand:

```js
<div>
    <h1 className='headline'>Hello Dojo!</h1>
</div>
```

---
> React.createElement('div',null,[React.createElement('h1',{class:'headline'},'Hello Dojo!')])
---

5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

```js
const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];
```

Please write your answer [here](./reverseArr.js)

6. How does using the `new` keyword affect a function's behavior in JavaScript?

---
> The 'new' keyword dynamically creates a new object and attaches the 'this' keyword to it.  It then returns that object to the place where the 'new' keyword was invoked.  For example, let myCar = new Car() will create a new Car object and attach it to myCar.  Now when we invoke methods against myCar, those methods can use the 'this' keyword because it is bound to the myCar object.
---

7. What is the best thing?
* A) Callbacks
* B) Objects
* C) Promises
* D) Pushing to Github

---
> E - all of the above
---

Done! Time to start the [React app](./app-details.md)!
