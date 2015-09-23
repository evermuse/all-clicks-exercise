//define the object to store the info

var clickObjectCount = {};
var theObjectClicked;

//set the click event

document.addEventListener('click', countThoseClicks);

//create the function

function countThoseClicks(e) {

  console.log(e.target);

  //make the element a string

  theObjectClicked = e.target.toString();

  //grab the array of stringed keys from the object

  var keys = Object.keys(clickObjectCount);

  console.log(keys);

  //if the key exists iterate the count; if not push the string into the object

  if (keys.indexOf(theObjectClicked) > -1) {

    clickObjectCount[theObjectClicked]++;
    console.log('click heard and count iterated', clickObjectCount[theObjectClicked]);

  } else {

    clickObjectCount[theObjectClicked] = theObjectClicked;
    clickObjectCount[theObjectClicked] = 1;

    console.log('not in the object, but pushing now', theObjectClicked + ' ' + clickObjectCount[theObjectClicked]);

  }

}