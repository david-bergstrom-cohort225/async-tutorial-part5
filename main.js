const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");



/*
Part 1: Callback Hell

Using callbacks, the first animation runs using the animate() method. We use the finished() method
to return a promise when the animation has been resolved/finished. The then() method is then used
to run the next animation when finished() promise is resolved/finished.

This is callback hell because we put another callback nested inside the then() method to run the second animation.
Similar to the first animation, once the second animation is finished, the then() method is used to run the 
third animation using another nested callback function inside the then() method.
*/

// function animateOperation() {
//   (alice1.animate(aliceTumbling, aliceTiming).finished).then(()=>{
//     (alice2.animate(aliceTumbling, aliceTiming).finished).then(()=>{
//       alice3.animate(aliceTumbling, aliceTiming);
//     })
//   })

// } 

// animateOperation();




/*
Part 2: Promise Chaining\
Using promise chaining, we can run the first animation and use the finsihed() method promise to then instruct the
second animation to run after the first one is finished with the then() method. 

Once the second animation is done, we can use that finished() method promise to then tell the third animation to run
using the then() method.

*/

// const animateOperation = alice1.animate(aliceTumbling, aliceTiming);

// animateOperation.finished
// .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
// .then(() => alice3.animate(aliceTumbling, aliceTiming))


/*
Part 3: Async + Await
Aysnc + Await is the way to go. Using await on the animate.finished() method, JavaScript waits until the promise is
resolved before moving onto the next line of code.
*/

const animateOperation = async () => {
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  alice3.animate(aliceTumbling, aliceTiming);
};

animateOperation();