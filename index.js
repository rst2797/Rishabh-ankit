// const height = document.querySelectorAll('input');

// height.forEach((x)=> {
//    return x.addEventListener('',function(e){
//         console.log(e.target.value)
//     })
// })


function calculateBmi () {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    console.log(height,"height",weight)

    if(isNaN(height) || isNaN(weight)){
        alert("Provide correct number")
        return;
    }

    const bmi = (weight / (height * height))*10000;

    const result = document.getElementById('result');
    result.textContent = `The BMI is ${bmi}`
}