const form = document.querySelector("form");
// // This usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault(); // to prevent default action

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // //Show the result
    // results.innerHTML = `<span>${bmi}</span>`;

    // Showing result according to BMI
    if(bmi < 18.6){
        results.innerHTML = `<span> Under Weight & BMI = ${bmi} </span>`
    }
    else if(bmi > 18.6 && bmi < 24.9){
        results.innerHTML = `<span> Normal Weight & BMI = ${bmi} </span>`
    }
    else{
        results.innerHTML = `<span> Over Weight & BMI = ${bmi} </span>`
    }
  }
});
