console.log("Fellowship loaded.");

var makeMiddleEarth = function() {
  // 1.  Create a section tag with an id of "middle-earth".
  var $middleEarth = jQuery('<section>');
  $middleEarth.attr("id", "middle-earth");

  // 2.  Create an article tag for each land in the lands array.
  lands.forEach(function(land) {
    var $land = jQuery('<article>');

  // 3.  Give each article tag a class of "land".
    $land.addClass('land');

  // 4.  Inside each article tag include an h1 tag with the name
  //     of the land as content.
    var $title = jQuery('<h1>');
    $title.text(land);
    $land.append($title);

  // 5.  Append each article.land to section#middle-earth.
    $land.appendTo($middleEarth);
  });
  // 6.  Append section#middle-earth to the document body.
jQuery('body').append($middleEarth);
}
makeMiddleEarth();

var makeHobbits = function() {
  // 1.  Create a ul tag with an id of "hobbits".
  var $hobbits = jQuery("<ul>");
  $hobbits.attr("id", "hobbits");
  // 2.  Create li tags for each Hobbit in the hobbits array.
  hobbits.forEach(function(hobbit){
    var $hobbit = jQuery('<li>');
  // 3.  Give each li tag a class of "hobbit".
  // 4.  Set the text of each li.hobbit to one of the Hobbits
  //     in the array.
    $hobbit.attr("class", "hobbit");
    $hobbit.text(hobbit);
    $hobbits.append($hobbit);
  })
  // 5.  Append the ul#hobbits to the article.land representing
  //     "The Shire" (the first article tag on the page).
  jQuery('.land').first().append($hobbits);
}
makeHobbits();

var keepItSecretKeepItSafe = function() {
  // 1.  Create a div with an id of "the-ring".
  var $ring = $('<div>');
  $ring.attr('id', 'the-ring').addClass('magic-imbued-jewelry');
  // 2.  Give div#the-ring a class of "magic-imbued-jewelry".
  // 3.  Add div#the-ring as a child element of the li.hobbit
  //     representing "Frodo."
  var $hobbits = $('.hobbit');
  var $frodo = $hobbits.first();
  $frodo.append($ring);
}
keepItSecretKeepItSafe();

var makeBuddies = function() {
  // 1.  Create an aside tag.
  var $aside = $('<aside>');
  // 2.  Create a ul tag with an id of "buddies" and append it to
  //     the aside tag.
  var $buddies = $('<ul>').attr('id', 'buddies').appendTo($aside);
  // 3.  Create li tags for each buddy in the buddies array in
  //     data.js.
  buddies.forEach(function(buddy) {
    var $buddy = $('<li>').addClass('buddy').appendTo($buddies);
  // 4   Give each li tag a class of "buddy" and append them to
  //       "ul#buddies".
    $buddy.text(buddy);
    // console.log($buddy);
  })

  // 5.  Insert the aside tag as a child element of the section.land
  //     representing "Rivendell."
  // console.log(lands[1]);
  var $rivendell = $('.land:eq(1)');
  // console.log($rivendell);
  jQuery($rivendell).append($aside);
};
makeBuddies();

var beautifulStranger = function() {
  // 1.  Find the li.buddy representing "Strider".
  // console.log($('.buddy:eq(2)'));
  var $strider = $('.buddy:eq(2)');
  // 2.  Change the "Strider" text to "Aragorn" and make its
  //     color green.
  $strider.css({"color": "green"});
}
beautifulStranger();

var leaveTheShire = function() {
  // 1.  "Assemble the Hobbits" and move them (as a list) to Rivendell.
  var $hobbit = $('.hobbit');
  // console.log($hobbit);
  var $rivendell = $('.land:eq(1)');
  $($rivendell).append($hobbit);
}
leaveTheShire();

var forgeTheFellowShip = function() {
  // 1.  Create a div with an id of "the-fellowship" within the
  //     section.land for "Rivendell". Append a list to it.
  var $rivendell = $('.land:eq(1)');
  var $fellowship = $('<div>').attr('id', 'the-fellowship').appendTo($rivendell);
  var $fellows = $('<ul>').addClass('fellows').appendTo($fellowship);

  // 2.  Add each hobbit and buddy one at a time to
  //     'div#the-fellowship' list.
  var $hobbits = $('.hobbit');
  var moveHobbits = function(hobbit) {
    for (var i = 0; i < $hobbits.length; i++) {
      $hobbits.appendTo($fellows);
      console.log($hobbits[i].textContent + ' has joined the fellowship');
    }
  }
  moveHobbits();

  var $buddies = $('.buddy');
  var moveBuddies = function(buddy) {
    for (var i = 0; i < $buddies.length; i++) {
      $buddies.appendTo($fellows);
  // 3.  After each character is added make an alert that they
  //     have joined your party.
      // alert($buddies[i].textContent + ' has joined the fellowship');
      console.log($buddies[i].textContent + ' has joined the fellowship');
  }
  }
  moveBuddies();
}
forgeTheFellowShip();

var theBalrog = function() {
  // 1.  Select the "li.buddy" for "Gandalf"...
  // var $buddies = $('.buddy');
  var $gandalf = $('.buddy:eq(0)');
  // console.log($gandalf);

  // 2.  And change its text to "Gandalf the White", and give it
  //     the class "the-white".
  $gandalf.text('Gandalf the White').addClass('the-white');
  // 3.  Apply style to the element, adding a "3px solid white"
  //     border to it, giving it a border radius of "10px," and
  //     making it's color white.
  $gandalf.css({'border':'3px solid white','border-radius':'10px','color':'white'});
}
theBalrog();

var hornOfGondor = function() {
  // 1.  Pop up an alert that the Horn of Gondor has been blown.
  // alert("THE HORN OF GONDOR HAS BEEN BLOWN");
  console.log("THE HORN OF GONDOR HAS BEEN BLOWN");
  // 2.  Put a line-through on Boromir's name.
  var $boromir = $('.buddy:eq(3)');
  // 3.  Fade Boromir's opacity to 0.3 (he lives on in spirit).
  // 4.  Make Boromir's text color black.
  $boromir.css({'text-decoration': 'line-through','opacity': '0.3', 'color': 'black'});
}
hornOfGondor();

var itsDangerousToGoAlone = function() {
  // 1.  Create a list with class "soulmates" in Mordor.
  var $soulmates = $('<ul>').addClass('soulmates');
  var $mordor = $('.land:eq(2)');
  $($mordor).append($soulmates);

  // 2.  Take Frodo and Sam out of The Fellowship and move them
  //     to ul.soulmates in Mordor.
  var $hobbits = $('.hobbit');
  var $frodo = $hobbits.first();
  var $sam = $('.hobbit:eq(1)');
  // console.log($frodo.text());
  // console.log($sam.text());

  // var $fellows = $('.fellows');
  $frodo.remove();
  $sam.remove();

  $soulmates.append($frodo);
  $soulmates.append($sam);
  // 3.  Add a div with an id of "mount-doom" to Mordor
  var $mountDoom = $('<div>').attr('id', 'mount-doom');
  $($mordor).append($mountDoom);
}
itsDangerousToGoAlone();

function weWantsIt() {
  // 1.  Create a div with an id of "gollum" and add it to Mordor.
  var $mordor = $('.land:eq(2)');
  var $gollum = $('<div>').attr('id', 'gollum');
  $($mordor).append($gollum);
  // 2.  Remove The Ring from Frodo and give it to Gollum.
  var $hobbits = $('.hobbit');
  var $frodo = $hobbits.first();
  $frodo.empty();
  var $ring = $('#the-ring');
  $gollum.append($ring);
  // 3.  Move Gollum into Mount Doom.
  var $mountDoom = $('#mount-doom');
  $($mountDoom).append($gollum);
}
weWantsIt();

function thereAndBackAgain() {
  // 1.  Remove Gollum and the Ring from the document.
  // 2.  Add a list to the shire, and move all the hobbits in to it.
  // 3.  Add the class "collapse" to Mordor.
}
