let random_number = generateNumber();

function generateNumber(){
    let generated_number = Math.random() * 100; // 20.24234
    let exact_random_number = Math.floor(generated_number); // 20

    return exact_random_number;
}

console.log(random_number)
document.getElementById('submit-number').addEventListener("click",play)

function play(){
    let guessing_number = document.getElementById("guessNumber").value ;

    if(guessing_number > random_number){
        let msg = `<div class="alert alert-danger" role="alert">
       Too High!!!
      </div>`;

      document.getElementById("result").innerHTML = msg;
    }else if(guessing_number < random_number){
        let msg = `<div class="alert alert-danger" role="alert">
       Too Low!!!
      </div>`;

      document.getElementById("result").innerHTML = msg;
    }
    else{
        let msg = `<div class="alert alert-success" role="alert">
        You Win !!!
       </div>`;
 
       document.getElementById("result").innerHTML = msg;
    }  
}


