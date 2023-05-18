//array-ul cu cuvinte de ghicit
let cuvinteDeGhicit = ["HTML", "INSTRUMENTE", "CURS", "SCOALA", "CASH", "FLOARE"];

//elemente
let underscoreresLetter = document.querySelector(".underscore");

let head = document.querySelector(".line1Div4");
let neck = document.querySelector(".neckHands");
let handLeft = document.querySelector(".handLeft");
let handRight = document.querySelector(".handRight");
let corp = document.querySelector(".line3Div4");
let legLeft = document.querySelector(".legLeft");
let legRight = document.querySelector(".legRight");
let counterLifes = document.querySelector(".counter");
let textLifes = document.querySelector(".lifes")
let partileCorp = [legRight, legLeft, corp, handRight, handLeft, neck, head];
let lifes =  partileCorp.length;
counterLifes.textContent = lifes;


//BUTOANE
let btnKeys = document.querySelectorAll(".key");

//ASCULTATORI
btnKeys.forEach((button) => {
  button.addEventListener("click", function(){ 
    let letter = button.textContent;
    replaceUnderscores(letter);//functia inlocuieste _ cu litera la apasare buton
    makeDisableButtons(button);
    
  }) 
});

//FUNCTII
//alegem cuvantul de ghicit prin metoda random (dupa index se alege unul din cuvintele array-ului)
const getWordRandom = () => {
  let indexRandom = Math.floor(Math.random() * cuvinteDeGhicit.length);
  let randomWord = cuvinteDeGhicit[indexRandom];
  return randomWord
};

const makeDisableButtons = (button) => {
  button.classList.add('disable');
  button.disabled = true;
};

//salvam intr-o variabila cuvantul random
let cuvintRandom = getWordRandom()
console.log(cuvintRandom);

//cream functia care 1.creaza spatiu pt underscores/litera in dependenta de lungimea cuv. 2. pt fiecare underscore cream un paragraf/div cu clasa respectiva, iar in paragraf adaugam textContent underscores unde o a fie literele pe pagina
const createLetterSpace = () => {
  let spaceNumber = cuvintRandom.length;

  for( let i = 0; i < spaceNumber; i++ ){
    let div = document.createElement("div");
    div.classList.add("letter");
    let p = document.createElement("p");
    p.classList.add(`underscore${i}`);
    p.textContent = "___";
    div.appendChild(p);
    document.querySelector(".guesLetter").appendChild(div);
  }
};
createLetterSpace()//chemam functia = s-au creat spatiile cu underscores

//cream functia care inlocuieste _ cu litera apasata si sterge clasa hiden ca sa adaugam cate un element din corpul spanzuratoare treptat
const replaceUnderscores = (letter) => {
      if(cuvintRandom.includes(letter)){
        let indexLetter = cuvintRandom.indexOf(letter);
        let underscoreElement = document.querySelector(`.underscore${indexLetter}`);
        underscoreElement.textContent = letter;
        let indexLetter2 = cuvintRandom.indexOf(letter, indexLetter +1)
        if(indexLetter2 > 0){
          let underscoreElement = document.querySelector(`.underscore${indexLetter2}`);
          underscoreElement.textContent = letter;
          console.log(`este litera ${letter} `);

        }
      } else {
        if(lifes > 0){
          partileCorp[lifes -1].classList.remove("hiden");
          lifes--;
          counterLifes.textContent = lifes;
          console.log(lifes);
          if(lifes == 0){
            textLifes.textContent = "GAME OVER"
          }
        } 
        console.log("nu coincide");
      }
     
     
}

 



