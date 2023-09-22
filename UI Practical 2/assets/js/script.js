const canvas = document.getElementById("the_canvas");
const context = canvas.getContext("2d");

context.fillStyle = "blue";
context.fillRect(0, 0, 100, 100);
context.fillRect(1000, 0, 100, 100);
context.fillRect(0, 400, 100, 100);
context.fillRect(1000, 400, 100, 100);

context.arc( 550, 250, 50, 0, 2 * Math.PI, false);
context.fillStyle = "red";
context.fill();
context.stroke();

context.beginPath();
context.moveTo( 200, 225);
context.lineTo( 250, 225);
context.lineTo( 250, 275);
context.fillStyle = "green";
context.fill();
context.stroke();
context.closePath();

context.moveTo( 500, 50)
context.arc( 550, 50, 50, 0, Math.PI, false);
context.fillStyle = "purple";
context.fill();
context.stroke();

context.beginPath();
context.moveTo( 750, 250);
context.lineTO( 760, 240);
context.lineTo( 770, 250);
context.lineTo( 760, 260);
context.lineTo( 750, 250);
context.fillStyle = "pink";
context.fill();
context.stroke();
context.closePath();
