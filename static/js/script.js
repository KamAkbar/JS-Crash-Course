

// Age in Days
function ageInDays() {
    let birthYear = Number(prompt("What year were you born?"));
    let inAge = (new Date().getFullYear() - birthYear) * 365;
    //DOM
    let h4 = document.createElement('h4');
    let textAnswer = document.createTextNode(`You are ${inAge} days old`);
    h4.setAttribute('id', 'ageInDays');
    h4.appendChild(textAnswer);
    document.getElementById('result-1').appendChild(h4);
}
function resetAgeInDays() {
    document.getElementById('ageInDays').remove();
}

//Arabic Name
function arabicName() {
    let userName = prompt("What is your name?");

    let arabicUserDadName = `Your Father — Abu ${userName}`;
    let arabicUserMomName = `Your Mother — Ummu ${userName}`;

    //DOM
    let h3Dad = document.createElement('h3');
    let textSheetToDad = document.createTextNode(arabicUserDadName);
    h3Dad.setAttribute('id', 'arabicUserDadName');
    h3Dad.appendChild(textSheetToDad);
    document.getElementById('result-dad').appendChild(h3Dad);

    let h3Mom = document.createElement('h3');
    let textSheetToMom = document.createTextNode(arabicUserMomName);
    h3Mom.setAttribute('id', 'arabicUserMomName');
    h3Mom.appendChild(textSheetToMom);
    document.getElementById('result-mom').appendChild(h3Mom);
}
function resetArabicName() {
    document.getElementById('result-dad').remove();
    document.getElementById('result-mom').remove();
}
