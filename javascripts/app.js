// Rover Object Goes Here
var rover = {
	direction : "N",
	x : 0,
	y : 0,
	travelLog : []
};
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
  	case "N":
  		rover.direction = "W";
  		break;
  	case "W":
  		rover.direction = "S";
  		break;
  	case "S":
  		rover.direction = "E";
  		break;
  	case "E":
  		rover.direction = "N";
  		break;
  }
  console.log("The rover direction is now: " + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
  	case "N":
  		rover.direction = "E";
  		break;
  	case "E":
  		rover.direction = "S";
  		break;
  	case "S":
  		rover.direction = "W";
  		break;
  	case "W":
  		rover.direction = "N";
  		break;
  }
  console.log("The rover direction is now: " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  
/*  switch (rover.direction) {
  	case "N":
  		rover.y = rover.y - 1;
  		break;
  	case "W":
  		rover.x = rover.x - 1;
  		break;
  	case "S":
  		rover.y = rover.y + 1;
  		break;
  	case "E":
  		rover.x = rover.x + 1;
  		break;
  }*/
  
  if (rover.direction === "N" && rover.y > 0) {
  	rover.travelLog.push([rover.x, rover.y]);
    rover.y = rover.y - 1;
  } else if (rover.direction === "W" && rover.x > 0) {
  	rover.travelLog.push([rover.x, rover.y]);
    rover.x = rover.x - 1;
  } else if (rover.direction === "S" && rover.y < 9) {
  	rover.travelLog.push([rover.x, rover.y]);
    rover.y = rover.y + 1;
  } else if (rover.direction === "E" && rover.x < 9) {
  	rover.travelLog.push([rover.x, rover.y]);
    rover.x = rover.x + 1;
  }
  console.log ( rover.travelLog);
  console.log("The rover position is now: x-" + rover.x + ", y-" + rover.y);
}
function moveBackward (rover){
console.log("moveBackward was called");
  if (rover.direction === "N" && rover.y <9) {
    rover.travelLog.push([rover.x, rover.y]);
    rover.y = rover.y + 1;
  } else if (rover.direction === "W" && rover.x < 9) {
    rover.travelLog.push([rover.x, rover.y]);
    rover.x = rover.x + 1;
  } else if (rover.direction === "S" && rover.y > 0) {
    rover.travelLog.push([rover.x, rover.y]);
    rover.y = rover.y - 1;
  } else if (rover.direction === "E" && rover.x > 0) {
    rover.travelLog.push([rover.x, rover.y]);
    rover.x = rover.x - 1;
  }
  console.log ( rover.travelLog);
  console.log("The rover position is now: x-" + rover.x + ", y-" + rover.y);  
}
function moveByCommands(rover, commands) {
  var i=0; 

  while (i < commands.length){
    if (commands.charAt(i) != "f" && commands.charAt(i) !="r" && commands.charAt(i) !="l"  && commands.charAt(i) !="b"){
      console.log(" El carácter " + commands.charAt(i) + " No es valido ");
    }
  i++;
  }

	for (var i = 0; i < commands.length; i++) {
 

		if (commands.charAt(i) === "f") {

			moveForward(rover);

		} else if (commands.charAt(i) === "r") {

			turnRight(rover);

		} else if (commands.charAt(i) === "l") {

			turnLeft(rover);
    
		}else if (commands.charAt(i) ==="b"){

      moveBackward(rover);
    }
    
    
	}
}
