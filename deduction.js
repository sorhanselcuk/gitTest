function ded() {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    var result = number1.value - number2.value;
    document.getElementById("result").innerHTML = result;
}