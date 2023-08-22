function sum() {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    var result = parseInt(number1.value) + parseInt(number2.value);
    document.getElementById("result").innerHTML = result;
}