
function loadMsg(){
    alert("Loading weather report...");
}

function hide(id){
    document.getElementById('hide').style.display = "none";
}

function tempChange(){
    console.log(document.getElementById('degree-type').value);
    if (document.getElementById('degree-type').value == document.getElementById('fahrenheit').value) {
        document.getElementById('today-high').innerText = "75°";
        document.getElementById('today-low').innerText = "65°";
        document.getElementById('tomorrow-high').innerText = "80°";
        document.getElementById('tomorrow-low').innerText = "66°";
        document.getElementById('friday-high').innerText = "69°";
        document.getElementById('friday-low').innerText = "61°";
        document.getElementById('saturday-high').innerText = "78°";
        document.getElementById('saturday-low').innerText = "70°";
    } else {
        document.getElementById('today-high').innerText = "24°";
        document.getElementById('today-low').innerText = "18°";
        document.getElementById('tomorrow-high').innerText = "27°";
        document.getElementById('tomorrow-low').innerText = "19°";
        document.getElementById('friday-high').innerText = "21°";
        document.getElementById('friday-low').innerText = "16°";
        document.getElementById('saturday-high').innerText = "26°";
        document.getElementById('saturday-low').innerText = "21°";
        console.log('done')
    }
}

//  how the teacher solved the bonus
// function c2f(temp) {
//     return Math.round(9/5 * temp + 32);
// }

// function f2c(temp) {
//     return Math.round(5/9 * (temp -32));
// }

// function convert(element) {
//     console.log(element.value);
//     for(var i = 1; i < 9; i++) {
//         var tempSpan = document.querySelector("#temp" + i);
//         var tempVal = parseInt(tempSpan.innerText);
//         if(element.value == "℃") {
//             console.log(f2c(temp));
//         } else {
//             console.log(c2f(tempVal));
//         }
//     }
// }