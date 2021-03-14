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

//CALENDAR//
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
        AstroSign = "stanley";
      } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "phyllis";
      } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "pam";
      } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "oscar";
      } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "michael";
      } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "kelly";
      } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "jim";
      } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "dwight";
      } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "kevin";
      } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "andy";
      } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "angela";
      } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "darryl";
      }
 
      console.log('AstroSign is: ' + AstroSign);
      userPicked(AstroSign);
});

//MODALS//
function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {

    case 'darryl':
      zDisplayObj.src = '/images/darrylphilbin.png';
      zTitleObj.innerHTML = 'Darryl Philbin';
      zDateRangeObj.innerHTML = '20-January to 18-February';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;

    case 'angela':
      zDisplayObj.src = '/images/angelamartin.png';
      zTitleObj.innerHTML = 'Angela Martin';
      zDateRangeObj.innerHTML = '19-February to 20-March';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;

    case 'andy':
      zDisplayObj.src = '/images/andybernard.png';
      zTitleObj.innerHTML = 'Andy Bernard';
      zDateRangeObj.innerHTML = '21-March to 19-April';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;

    case 'kevin':
      zDisplayObj.src = '/images/kevinmalone.png';
      zTitleObj.innerHTML = 'Kevin Malone';
      zDateRangeObj.innerHTML = '20-April to 20-May';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;

    case 'dwight':
      zDisplayObj.src = '/images/dwightshrute.png';
      zTitleObj.innerHTML = 'Dwight Shrute';
      zDateRangeObj.innerHTML = '21-May to 21-June';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
        break;

      case 'jim':
        zDisplayObj.src = '/images/jimhalpert.png';
        zTitleObj.innerHTML = 'Jim Halpert';
        zDateRangeObj.innerHTML = '22-June to 22-July';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;

      case 'kelly':
        zDisplayObj.src = '/images/kellykapoor.png';
        zTitleObj.innerHTML = 'Kelly Kapoor';
        zDateRangeObj.innerHTML = '23-July to 22-August';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;

      case 'michael':
        zDisplayObj.src = '/images/michaelscott.png';
        zTitleObj.innerHTML = 'Michael Scott';
        zDateRangeObj.innerHTML = '23-August to 22-September';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;

      case 'oscar':
        zDisplayObj.src = '/images/oscarnunez.png';
        zTitleObj.innerHTML = 'Oscar Nunez';
        zDateRangeObj.innerHTML = '23-September to 23-October';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;

      case 'pam':
        zDisplayObj.src = '/images/pambeesly.png';
        zTitleObj.innerHTML = 'Pam Beesly';
        zDateRangeObj.innerHTML = '24-October to 21-November';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;

      case 'phyllis':
        zDisplayObj.src = '/images/phyllissmith.png';
        zTitleObj.innerHTML = 'Phyllis Smith';
        zDateRangeObj.innerHTML = '22-November to 21-December';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
         
      case 'stanley':
        zDisplayObj.src = '/images/stanleyhudson.png';
        zTitleObj.innerHTML = 'Stanley Hudson';
        zDateRangeObj.innerHTML = '22-December to 19-January';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
    default: 
    }
  }

//MODALS//
const modal = document.getElementById('modal');
 
const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function(){
  modal.hidden = !modal.hidden;
});
 
const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreINfoObj = document.getElementById('zMoreInfo');