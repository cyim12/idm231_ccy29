let date = [];

function getInput(evt) {
    evt.preventDefault();
    const $userInput = document.getElementById('userInput');
    const userInput = $userInput.value;
    const $userMonth = document.getElementById('month');
    const userMonth = $userMonth.value;  

    date.push(`Month: ` + userMonth ,`Day: ` + userInput);
    document.forms[0].reset();

    console.log({date});
    
    let AstroSign = "";

    if ((userMonth == 'december' && userInput >= 22) || (userMonth == 1 && userInput <= 19)) {
        AstroSign = "tpab";
      } else if ((userMonth == 'november' && userInput >= 22) || (userMonth == 'december' && userInput <= 21)) {
        AstroSign = "eternal-atake";
      } else if ((userMonth == 'october' && userInput >= 24) || (userMonth == 'november' && userInput <= 21)) {
        AstroSign = "monster";
      } else if ((userMonth == 'september' && userInput >= 23) || (userMonth == 'october' && userInput <= 23)) {
        AstroSign = "under-pressure";
      } else if ((userMonth == 'august' && userInput >= 23) || (userMonth == 'september' && userInput <= 22)) {
        AstroSign = "swimming";
      } else if ((userMonth == 'july' && userInput >= 23) || (userMonth == 'august' && userInput <= 22)) {
        AstroSign = "stankonia";
      } else if ((userMonth == 'june' && userInput >= 22) || (userMonth == 'july' && userInput <= 22)) {
        AstroSign = "take-care";
      } else if ((userMonth == 'may' && userInput >= 21) || (userMonth == 'june' && userInput <= 21)) {
        AstroSign = "telefone";
      } else if ((userMonth == 'april' && userInput >= 20) || (userMonth == 'may' && userInput <= 20)) {
        AstroSign = "blueprint";
      } else if ((userMonth == 'march' && userInput >= 21) || (userMonth == 'april' && userInput <= 19)) {
        AstroSign = "mbdtf";
      } else if ((userMonth == 'february' && userInput >= 19) || (userMonth == 'march' && userInput <= 20)) {
        AstroSign = "blonde";
      } else if ((userMonth == 'january' && userInput >= 20) || (userMonth == 'february' && userInput <= 18)) {
        AstroSign = "miseducation";
      }

    console.log('AstroSign is: ' + AstroSign);
}