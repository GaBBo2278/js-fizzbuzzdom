let containerElement = document.getElementById('container');

for (let i = 1; i<= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        containerElement.innerHTML += "<div id='red-box' class='box'>FizzBuzz</div>";
    } else if (i % 5 == 0) {
        containerElement.innerHTML += "<div id='yellow-box' class='box'>Buzz</div>";
    } else if (i % 3 == 0) {
        containerElement.innerHTML += "<div id='green-box' class='box'>Fizz</div>";
    } else {
        containerElement.innerHTML += "<div class='box'>"+ i +"</div>";
    }

}
