function div() {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    if(parseInt(number2.value) == 0){
        alert("Bir sayı 0'a bölünemez !");
        return;
    }
    var result = Math.round(number1.value / number2.value);
    document.getElementById("result").innerHTML = result;
}
