let spacer0 = '';
let greeting = "a";
let fullName = "b";
let occupation = "c";
let maleRelative = "d";
let country = "e";
let year = "f";
let disaster = "g";
let minsterOfNoun = "h";
let veryLargeNum = "i";
let moneyFromNoun = "j";
let anotherCountry = "k";
let firstCountry = country;
let pluralNounProperties = "l";
let spacer2 = '';
let nameOfCompany = "m";
let familyMember = "n";
let adjective = "o";
let nounOfSpecialization = "p";
let spacer3 = '';
let numLessThan50 = "q";
let numLessThan10 = "r";
let numberLessThan20 = "s";
let anotherCountry2 = "t";
let transactionBasedOnNoun = "u";
let familyMember2 = "v";
let spacer4 = '';
let abundanceOfNoun = "w";
let adjectiveForTransaction = "x";
let openSomethingNoun = "y";
let pluralNounOfDangers = "z";
let spacer5 = '';
let closingAdverb = "aa";
let spacer6 = '';
let yourFullName = fullName;
let index = 0;

let words = [spacer0, greeting, fullName, occupation, maleRelative, country, year, disaster, minsterOfNoun, veryLargeNum, moneyFromNoun, anotherCountry, firstCountry, pluralNounProperties, spacer2, nameOfCompany, familyMember, adjective, nounOfSpecialization, spacer3, numLessThan50, numLessThan10, numberLessThan20, anotherCountry2, transactionBasedOnNoun, familyMember2, spacer4, abundanceOfNoun, adjectiveForTransaction, openSomethingNoun, pluralNounOfDangers, spacer5, closingAdverb, spacer6, yourFullName];

let titles = ["Enter a Greeting", "Enter Your Full Name", "Enter an Occupation", "Enter the name of a Male Relative", "Enter a Country", "Enter a Year", "Enter a Disaster", "Enter a Noun", "Enter a Very Large Number", "Enter another Noun", "Enter Another Country", "Enter the First Country You Typed (Pop Quiz!)", "Enter a Plural Noun", "Press Enter to Continue", "Enter a Name of a Company", "Enter a Family Member", "Enter an Adjective", "Enter a Noun", "Enter Press Enter to Continue", "Enter a Number Less Than 50", "Enter a Number Less Than 10", "Enter a Number Less than 20", "Enter Another Country", "Enter Another Noun", "Enter Another Family Member", "Press Enter to Continue", "Enter Another Another Noun", "Enter Another Adjective", "Enter Another Noun", "Enter Another Plural Noun", "Press Enter to Continue", "Enter An Adverb", "Press Enter to Continue", "Enter Your Preferred Nickname"];

function renderChat(jsonData){
  let data = JSON.parse(jsonData);
  let div = document.getElementById('chat');
  div['innerHTML'] = data;
}

function sendMessage(){
  let title, messageArea, message;
  if((index == 13) || (index == 18) || (index == 25) || (index == 30) || (index == 32)){
    document.getElementById("message").style.visibility='hidden'; 
    title = document.getElementById("header")
    title.textContent = titles[index] + ':';
    messageArea=document.getElementById("message");
    message=messageArea.value;
    messageArea.value="";
    words[index] = "";
    index += 1;
   }
  else{
    document.getElementById("message").style.visibility='visible';
    title = document.getElementById("header")
    title.textContent = titles[index] + ':';
    messageArea=document.getElementById("message");
    message=messageArea.value;
    messageArea.value="";
    words[index] = message;
    index += 1;
  }
    
  console.log(words)
  let toSend=JSON.stringify(words);
  if (index == words.length){
    header.remove();
    button.remove();
    messageArea.remove();
    
    //doughnut remover 
    //while (1) {
      //ajaxPostRequest("/writeFile", toSend, renderChat);
    //}
    ajaxPostRequest("/writeFile", toSend, renderChat);
  }
}
