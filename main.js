const angelaObj = document.getElementById('angela');
const stanleyObj = document.getElementById('stanley');
const oscarObj = document.getElementById('oscar');
const pamObj = document.getElementById('pam');
const andyObj = document.getElementById('andy');
const jimObj = document.getElementById('jim');
const phyllisObj = document.getElementById('phyllis');
const dwightObj = document.getElementById('dwight');
const kellyObj = document.getElementById('kelly');
const darrylObj = document.getElementById('darryl');
const michaelObj = document.getElementById('michael');
const kevinObj = document.getElementById('kevin');

angelaObj.addEventListener('click', function(evt) {
    console.log('angela button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

stanleyObj.addEventListener('click', function(evt) {
  console.log('stanley button clicked' + evt.target.id);
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

andyObj.addEventListener('click', function(evt) {
    console.log('andy button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

jimObj.addEventListener('click', function(evt) {
  console.log('jim button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

phyllisObj.addEventListener('click', function(evt) {
  console.log('phyllis button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});
 
dwightObj.addEventListener('click', function(evt) {
  console.log('dwight button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

kellyObj.addEventListener('click', function(evt) {
  console.log('kelly button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

darrylObj.addEventListener('click', function(evt) {
  console.log('darryl button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

michaelObj.addEventListener('click', function(evt) {
  console.log('michael button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

kevinObj.addEventListener('click', function(evt) {
  console.log('kevin button clicked' + evt.target.id);
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
    console.log('whichDayOfMonth is: ' + whichDayOfMonth);
 
    let AstroSign = "";
    
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "darryl";
      } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "kelly";
      } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "dwight";
      } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "phyllis";
      } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "jim";
      } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "andy";
      } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "pam";
      } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "oscar";
      } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "stanley";
      } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "angela";
      } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "kevin";
      } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "michael";
      }
 
      console.log('AstroSign is: ' + AstroSign);
      userPicked(AstroSign);
});

//MODALS//
function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {

    case 'angela':
      zDisplayObj.src = '/gif/angela.gif';
      zTitleObj.innerHTML = 'Angela Martin';
      zDateRangeObj.innerHTML = 'Mar. 21 ~ Apr. 19';
      zMoreInfoObj.innerHTML = '<p>Angela brings down harsh judgments on anyone who doesn’t live up to her standards of piousness – standards not even she lives up to. She dislikes excitement to the point of phobia and relishes in her dislike of her co-workers. Then again, if you happen to be a cat, Angela is a dream come true.</p>';
      modal.hidden = !modal.hidden;
      break;

    case 'stanley':
      zDisplayObj.src = '/gif/stanley.gif';
      zTitleObj.innerHTML = 'Stanley Hudson';
      zDateRangeObj.innerHTML = 'Apr. 20 ~ May. 20';
      zMoreInfoObj.innerHTML = '<p>Stanley is generally quiet and polite, but don’t cross him. When Michael gets too loose-jawed, Stanley can put him in his place with a single intimidating glance. But overall, Stanley mostly wants to be left alone to enjoy his simple pleasures of puzzles and pretzels.</p>';
      modal.hidden = !modal.hidden;
      break;

    case 'oscar':
      zDisplayObj.src = '/gif/oscar.gif';
      zTitleObj.innerHTML = 'Oscar Martinez';
      zDateRangeObj.innerHTML = 'May. 21 ~ Jun. 21';
      zMoreInfoObj.innerHTML = '<p>Oscar is pleasant but distant, and a bit of a know-it-all. In meetings, Oscar is inquisitive and critical. In conversation, he’s usually either friendly or pedantic. Like his co-worker Stanley, he’s generally uninterested in close relationships with his co-workers.</p>';
      modal.hidden = !modal.hidden;
      break;  

    case 'pam':
      zDisplayObj.src = '/gif/pam.gif';
      zTitleObj.innerHTML = 'Pam Beesly';
      zDateRangeObj.innerHTML = 'Jun. 22 ~ Jul. 22';
      zMoreInfoObj.innerHTML = '<p>Pam is friendly and sweet, but shy and a bit mousy. Pam’s never been the type to take a stand or “go for it.” She says more with her face than with words. She tolerates without complaint. These aren’t qualities she admires about herself. She’s actively trying to change them.</p>';
      modal.hidden = !modal.hidden;
      break;

    case 'andy':
      zDisplayObj.src = '/gif/andy.gif';
      zTitleObj.innerHTML = 'Andy Bernard';
      zDateRangeObj.innerHTML = 'Jul. 23 ~ Aug. 22';
      zMoreInfoObj.innerHTML = '<p>Andy is clueless and often obnoxious, but never malicious. Andy gives people unwanted nicknames, goes on about his Ivy League education, and is completely tone-deaf on issues of class and race – and yet he’s a nice guy at heart. There’s a genuine goodness in him. Even his obliviousness is genuine. </p>';
      modal.hidden = !modal.hidden;
      break;

    case 'jim':
      zDisplayObj.src = '/gif/jim.gif';
      zTitleObj.innerHTML = 'Jim Halpert';
      zDateRangeObj.innerHTML = 'Aug. 23 ~ Sept. 22';
      zMoreInfoObj.innerHTML = '<p>Jim is charismatic and charming, and not in a creepy way. Jim is a great guy: funny, kind, mild-mannered. Jim is also dedicated as he is part of a rivalrous pranking on fellow salesman and invested in a romantic interest with the receptionist.</p>';
      modal.hidden = !modal.hidden;
      break;
    
    case 'phyllis':
      zDisplayObj.src = '/gif/phyllis.gif';
      zTitleObj.innerHTML = 'Phyllis Smith';
      zDateRangeObj.innerHTML = 'Sept. 23 ~ Oct. 23';
      zMoreInfoObj.innerHTML = '<p>Phyllis is quiet and nuturing. She rarely starts conflict but isn’t above blackmail – in fact, that’s how she took control of the Party Planning Committee. Phyllis sometimes lacks self-esteem, yet beams about her happy marriage. Beneath her quiet exterior lurks a strong, determined woman.</p>';
      modal.hidden = !modal.hidden;
      break;

    case 'dwight':
      zDisplayObj.src = '/gif/dwight.gif';
      zTitleObj.innerHTML = 'Dwight Schrute';
      zDateRangeObj.innerHTML = 'Oct. 24 ~ Nov. 21';
      zMoreInfoObj.innerHTML = '<p>Dwight can easily be described as the most ambitious Dunder Mifflin employee as his goal in life was to become successful. Under the hard exterior, there’s a soft side to Dwight — something else that makes him appealing. But as lovable as Dwight can be, many things about him make no sense. </p>';
      modal.hidden = !modal.hidden;
      break;

    case 'kelly':
      zDisplayObj.src = '/gif/kelly.gif';
      zTitleObj.innerHTML = 'Kelly Kapoor';
      zDateRangeObj.innerHTML = 'Nov. 22 ~ Dec. 21';
      zMoreInfoObj.innerHTML = '<p>Kelly is always happy to provide needed distractions to anyone who’ll listen. We love Kelly because she loves who she is, and her lack of desire to be anything other than that should serve as an example for all to embrace the trivial, give in to the pleasures of gossip, and consider starting some of their own.</p>';
      modal.hidden = !modal.hidden;
      break;

    case 'darryl':
      zDisplayObj.src = '/gif/darryl.gif';
      zTitleObj.innerHTML = 'Darryl Philbin';
      zDateRangeObj.innerHTML = 'Dec. 22 ~ Jan. 19';
      zMoreInfoObj.innerHTML = '<p>Darryl is mellow and well-liked. Darryl is competent, ambitious, innovative, chill, funny and loves to take advantage of his boss. His rapport with the rest of the staff both in the office and warehouse is friendly. When given an opportunity, Darryl takes it and invests in it for the long run.</p>';
      modal.hidden = !modal.hidden;
      break;

    case 'michael':
      zDisplayObj.src = '/gif/michael.gif';
      zTitleObj.innerHTML = 'Michael Scott';
      zDateRangeObj.innerHTML = 'Jan. 20 ~ Feb. 18';
      zMoreInfoObj.innerHTML = '<p>Michael is vain and oblivious, but well-meaning. He is often inappropriate and completely unaware that he’s rubbing people the wrong way. Yet just when you’re ready to write him off forever as a clueless buffoon, he does something nice for a friend to show that his heart’s ultimately in the right place.  </p>';
      modal.hidden = !modal.hidden;
      break;

    case 'kevin':
      zDisplayObj.src = '/gif/kevin.gif';
      zTitleObj.innerHTML = 'Kevin Malone';
      zDateRangeObj.innerHTML = 'Feb. 19 ~ Mar. 20';
      zMoreInfoObj.innerHTML = '<p>Kevin is lovably dumb even though he thinks he is a genius. He’s somehow openly perverse yet completely harmless, even sweet. Kevin is charmingly oblivious, even when his cluelessness leads to backhanded compliments to his female co-workers. Nobody seems to mind that much; that’s just Kevin.</p>';
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
const zMoreInfoObj = document.getElementById('zMoreInfo');

//HELP MODAL//
const help = document.getElementsByClassName('help').item(0);
console.log(help)
const helpModal = document.getElementsByClassName('helpModal').item(0);
help.addEventListener('click', function(){
  helpModal.hidden = !helpModal.hidden;
});

