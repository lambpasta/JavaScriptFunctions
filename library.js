function listIncludes(list, value) {
  for (var i = 0; i<list.length; i++){
    if (value == list[i]) {
      return true;
    }
  }
  return false;
}



function mergeLists(list1, list2) {
  var tempList = [];
  for (var i = 0; i<list1.length; i++){
    appendItem(tempList, list1[i]);
  }
  for (var j = 0; j<list2.length; j++){
    appendItem(tempList, list2[j]);
  }
  return tempList;
}



function flipStringsInList(list){
  
  var flippedList = [];
  
  // Get each list item with index "i"
  for (var i = 0; i<list.length; i++){
    
    var currentStr = list[i];
    var flippedStr = "";
    // Get each character in the list item with index "j"
    for (var j = 0; j<currentStr.length; j++){
      
      var currentChar = currentStr[j];
      
      // Add the character to the front of the string
      flippedStr = currentChar + flippedStr;
    }
    
    appendItem(flippedList, flippedStr);
  }
  
  return flippedList;
}



/* Summary: increase the length of a string by adding spaces on the front. Doesn't change strings which are already long enough
   Params: string, the string to modify and length, the length to add until
   Return: a padded string with the at least the length specified */
function padStringLeftToLength(string, length){
  var paddedString = String(string);
  while (paddedString.length < length){
    paddedString = " " + paddedString;
  }
  return paddedString;
}



/* Summary: checks if an input element contains a number
   Params: id - the ID of the input element
   Return: true or false, whether or not the element is exactly a number */
function isNumber(id) {
  var inputValue = getText(id);
  var inputNumber = getNumber(id);
  if (inputValue == inputNumber) {
    return true;
  } else {
    return false;
  }
}



function getAverage(valuesList){
  var totalOfVals = 0;
  for(var i=0; i<valuesList.length; i++){
    totalOfVals += valuesList[i];
  }
  return totalOfVals/valuesList.length;
}



function getMinimum(valuesList){
  var tempMin = valuesList[0];
  for(var i=0; i<valuesList.length; i++){
    if(valuesList[i] < tempMin){
      tempMin = valuesList[i];
    }
  }
  return tempMin;
}



function getMaximum(valuesList){
  var tempMax = valuesList[0];
  for(var i=0; i<valuesList.length; i++){
    if(valuesList[i] > tempMax ){
      tempMax = valuesList[i];
    }
  }
  return tempMax;
}



function filterByFirstLetter(list, letter){
  var filteredVals = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i][0] == letter) {
      appendItem(filteredVals, list[i]);
    }
  }
  return filteredVals;
}



function rankAscending(valuesList){
  var tempList = [];
  for (var i = 0; i < valuesList.length; i++) {
    
    var j=0;
    while (valuesList[i]>tempList[j]){
      j++;
    }
    insertItem(tempList, j, valuesList[i]);
    
  }
  return tempList;
}



function getMedian(ascendingList){
  var middleIndex = Math.round(ascendingList.length/2-1);
  return ascendingList[middleIndex];
}


/*
PURPOSE: Round a floating point number off to a certain number of decimal places
PARAMETERS: the number to round, the amount of digits after the decimal point
RETURN: a number, rounded
*/
function roundToPlaces(number, decimals){
  var power = Math.pow(10, decimals);
  var tempNum = number*power;
  var roundedNum = Math.round(tempNum);
  return roundedNum/power;
}


/*
PURPOSE: Return the key of the highest value in a dictionary with only keys/numerical values
PARAMETERS: A dictionary with any amount of keys and all values being numbers
RETURN: The key which leads to the highest value. Ignores ties.
*/
function getHighestValue(dictionary){
  var temp=0;
  var largest = "N/A";
  for (var i = 0; i < Object.keys(dictionary).length; i++) {
    if (dictionary[Object.keys(dictionary)[i]]>temp){
      temp = dictionary[Object.keys(dictionary)[i]];
      largest = Object.keys(dictionary)[i];
    }
  }
  return largest;
}


// Randomly selects an item from the list provided and returns it
// list {list} - a list of items
// return {item} - a randomly chosen item from the list
function randomChoose(list){
  
    // Do it all in line by picking a random index
    return list[randomNumber(0, list.length-1)];
}
