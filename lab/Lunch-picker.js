// Create empty lunches array
let lunches = [];

// Add lunch to end
function addLunchToEnd(arr, lunchItem) {
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr;
}

// Add lunch to start
function addLunchToStart(arr, lunchItem) {
  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return arr;
}

// Remove last lunch
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  return arr;
}

// Remove first lunch
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }
  return arr;
}

// Get random lunch
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
  }
}

// Show lunch menu
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}


// Example usage
addLunchToEnd(lunches, "Pizza");
addLunchToStart(lunches, "Burger");
addLunchToEnd(lunches, "Pasta");

showLunchMenu(lunches);

getRandomLunch(lunches);

removeLastLunch(lunches);
removeFirstLunch(lunches);

showLunchMenu(lunches);