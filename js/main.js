const darrylObj = document.getElementById('darryl');
const angelaObj = document.getElementById('angela');
const andyObj = document.getElementById('andy');
const kevinObj = document.getElementById('kevin');
const dwightObj = document.getElementById('dwight');
const jimObj = document.getElementById('jim');
const kellyObj = document.getElementById('kelly');
const michaelObj = document.getElementById('michael');
const oscarObj = document.getElementById('oscar');
const pamObj = document.getElementById('pam');
const phyllisObj = document.getElementById('phyllis');
const stanleyObj = document.getElementById('stanley');
 
darrylObj.addEventListener('click', function(evt) {
    console.log('darryl button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
angelaObj.addEventListener('click', function(evt) {
    console.log('angela button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
andyObj.addEventListener('click', function(evt) {
    console.log('andy button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
kevinObj.addEventListener('click', function(evt) {
    console.log('kevin button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
dwightObj.addEventListener('click', function(evt) {
  console.log('dwight button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

jimObj.addEventListener('click', function(evt) {
  console.log('jim button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

kellyObj.addEventListener('click', function(evt) {
  console.log('kelly button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

michaelObj.addEventListener('click', function(evt) {
  console.log('michael button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

oscarObj.addEventListener('click', function(evt) {
  console.log('oscar button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

pamObj.addEventListener('click', function(evt) {
  console.log('pam button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

phyllisObj.addEventListener('click', function(evt) {
  console.log('phyllis button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});
 
stanleyObj.addEventListener('click', function(evt) {
    console.log('stanley button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

function fade2Content() {
  console.log('fade2Content called');
  document.body.classList.remove("blackScreen");
}

const pisObj = document.getElementById('pis');
const scoObj = document.getElementById('sco');
const aquObj = document.getElementById('aqu');

const displayObj = document.getElementById('display');

pisObj.addEventListener('click', function (evt) {
  console.log('pis button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

scoObj.addEventListener('click', function (evt) {
  console.log('sco button clicked: ' + evt.target.id); 
  const idName = evt.target.id;
  userPicked(idName);
});

aquObj.addEventListener('click', function (evt) {
  console.log('aqu button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

MODALS
const modal = document.getElementById('modal');
 
const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function(){
  modal.hidden = !modal.hidden;
});
 
const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreINfoObj = document.getElementById('zMoreInfo');
  
const userSubmitObj = document.getElementById('userSubmit');
 
userSubmitObj.addEventListener('click', function(){
    console.log('User submit button clicked');
 
    const userBday = new Date(document.getElementById('bday').value);
    console.log('userBday is' + userBday);
 
    let whichMonth = userBday.getUTCMonth();
    whichMonth++;
    console.log('whichMonth is: ' + whichMonth);
 
    const whichDayOfMonth = userBday.getUTCDate();
    console.log('whichDayOfMonth is: ' + whichDayOfMonth)
 
    let AstroSign = "";
    
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "drums";
      } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "pipes";
      } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "lord";
      } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "lady";
      } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "maid";
      } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "swan";
      } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "geese";
      } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "ring";
      } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "bird";
      } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "hen";
      } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "turtle";
      } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "tree";
      }
 
      console.log('AstroSign is: ' + AstroSign);
      userPicked(AstroSign);
});