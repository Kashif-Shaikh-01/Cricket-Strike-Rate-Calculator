// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   let runInput = document.querySelector("#runsscored").value;
//   let ballInput = document.querySelector("#ballsfaced").value;
//   let results = document.querySelector(".results");

//   e.preventDefault();
//   console.log(`Button clicked`);
//   console.log(runInput.value, ballInput.value);
//   //   let runValue = runInput.value;
//   //   let ballValue = ballInput.value;
//   //   console.log(ballValue, runValue);

//   let p = document.createElement("p");
//   p.innerHTML = `Your Strike Rate is ${((runInput / ballInput) * 100).toFixed(
//     1
//   )}`;
//   results.appendChild(p);
//   runInput.value = "";
//   ballInput.value = "";
// });

// STRIKE RATE CALCULATOR :-
const form = document.querySelector("form");

form.addEventListener("submit", function (x) {
  let runInput = document.querySelector("#runsscored");
  let ballInput = document.querySelector("#ballsfaced");
  let results = document.querySelector("#results");

  x.preventDefault();
  if (!runInput.value || !ballInput.value) {
    alert(`Type Some Values`);
    return;
  }
  let p = document.createElement("p");
  p.innerText = `Your Strike Rate is ${(
    (runInput.value / ballInput.value) *
    100
  ).toFixed(1)}`;
  //   results.appendChild(p);  // Not working properly
  results.innerText = p.innerText;
  console.log(
    `Total runs scored is (${runInput.value}),Total balls faced (${ballInput.value})
    & ${results.innerText}`
  );
  runInput.value = "";
  ballInput.value = "";
});
