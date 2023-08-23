function ded() {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    if(parseInt(number1.value) < parseInt(number2.value))
    {
        alert("Birinci sayı, ikinci sayıdan büyük veya eşit olmalıdır !");
        return;
    }
    var result = number1.value - number2.value;
    document.getElementById("result").innerHTML = result;
}