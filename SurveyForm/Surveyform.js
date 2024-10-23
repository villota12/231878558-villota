function calBMI(){
    let height = document.getElementById("height").value /100;
    let weight = document.getElementById("weight").value;

    if (height >0 && weight >0) {
        let bmi = (weight / (height*height)).toFixed(2);
        let resultText = "Your BMI is " + bmi + " - ";

        if (bmi < 18.5){
            resultText += "Under Weight";
        }
        else if (bmi >= 18.5 && bmi <24.9){
            resultText += "Normal Weight";
        }
        else if (bmi >= 25 && bmi <29.9){
            resultText += "Over Weight";
        }
        else{
            resultText += "Obese";
        }

        document.getElementById("result").innerText = resultText;
    } 
    else {
        document.getElementById("result").innerText = "Please enter valid Height and weight"
    }
}