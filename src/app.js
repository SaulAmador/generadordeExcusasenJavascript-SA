window.onload = function() {
  let first = "A ";
  let who = [
    "the dog",
    "my grandma",
    "the mailman",
    "my bird",
    "my mom",
    "my bro"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "stole",
    "lost",
    "destroyed",
    "ruined",
    "swore",
    "i transcribed it into aramic"
  ];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let what = [
    "my homework",
    "my phone",
    "the car",
    "my keys",
    "my wallet",
    "my laptop",
    "my lunch",
    "my love"
  ];
  let where = [
    "in the park",
    "at the beach",
    "in the office",
    "at the mall",
    "in the bathroom"
  ];
  let how = [
    "quickly",
    "slowly",
    "unexpectedly",
    "deliberately",
    "accidentally"
  ];
  let reaction = [
    "i screamed",
    "i laughed",
    "i cried",
    "i ran away",
    "i called for help"
  ];

  function generateExcuse() {
    let rdm1 = Math.floor(Math.random() * who.length);
    let rdm2 = Math.floor(Math.random() * action.length);
    let rdm3 = Math.floor(Math.random() * when.length);
    let rdm4 = Math.floor(Math.random() * what.length);
    let rdm5 = Math.floor(Math.random() * where.length);
    let rdm6 = Math.floor(Math.random() * how.length);
    let rdm7 = Math.floor(Math.random() * reaction.length);

    document.querySelector("#excuse").innerHTML =
      first +
      who[rdm1] +
      action[rdm2] +
      when[rdm3] +
      what[rdm4] +
      where[rdm5] +
      how[rdm6] +
      reaction[rdm7];
  }

  generateExcuse();

  document
    .querySelector("#generateExcuse")
    .addEventListener("click", generateExcuse);
};
