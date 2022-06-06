let inputArea = document.getElementById("inputarea");
let check = document.getElementById("btn");
let result = document.querySelector("#result");
let random = Math.floor(Math.random() * 100 + 1);
let rule = document.querySelector('.rule');
console.log(random);
let restart = document.getElementById("restart");
let sndtrue = new Audio("success-fanfare-trumpets-6185.mp3");
let sndfalse = new Audio("phone_buzz-36086.mp3");
let last = document.querySelector(".last");
let first = document.querySelector(".first");


control();
check.addEventListener("click", () => {
  inputArea.focus();
  control();
    if (inputArea.value > 100 || inputArea.value < 0) {
      result.innerHTML = `Please enter a valid number`;
    } else {
      if (Number(inputArea.value) < random) {
        
        result.innerHTML = `Wrong ! Enter a number which is higher than ${Number(
          inputArea.value
        )}`;
        result.style.color = 'black';
        attempt.innerHTML--;
        control();
        first.innerHTML = inputArea.value;
        inputArea.value = "";
        
        sndfalse.play();
      } else if (Number(inputArea.value) > random) {
        result.innerText = `Wrong ! Enter a number which is lower than ${Number(
          inputArea.value
        )}  `;
        result.style.color = 'black';
        attempt.innerHTML--;
        control();
        last.innerHTML = inputArea.value;
        inputArea.value = "";
        
        
        sndfalse.play();
      } else {
        result.innerText = `!! You really hit the bull's-eye with that guess—good job !! `;
        sndtrue.play();
        result.style.color = 'green';
        check.style.display = 'none';
      }
    }
 
});
function control() {
  if (attempt.innerHTML < 1) {
    inputArea.style.display = "none";
    rule.innerHTML = "GAME OVER ";
    rule.style.color = 'red';
    rule.style.fontSize = '40px';
    check.style.display = 'none';
  }
}

restart.addEventListener("click", () => {
  window.location.reload(false);
});
