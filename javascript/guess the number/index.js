let random_number = generateNumber();
let guess = [];

console.log(guess);

function generateNumber(){
    let generated_number = Math.random() * 100; // 0.2324234 * 100 = 23.24234 
    let exact_random_number = Math.floor(generated_number); // 23

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

    guess.push(guessing_number) 

    let i = 0; // i = 0
    let list = `<ul class="list-group">`; //template literale
    while(i < guess.length ){
        list = list +   `<li class="list-group-item">${guess[i]}</li>`;

        i++;
    }
    list += "</ul>";
    document.getElementById('history').innerHTML = list;

}
 
document.getElementById('restart-game').addEventListener("click",reset)

function reset(){
    document.getElementById('result').innerHTML = "";
    document.getElementById('history').innerHTML = "";
    guess = [];
    random_number = generateNumber();  
    document.getElementById('guessNumber').value = ""
}

