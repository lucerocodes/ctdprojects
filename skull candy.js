background(167, 56, 189); // sky
stroke(204, 184, 57); // crown
fill(242, 218, 63);
var x = -228;
while (x < 699) {
    line(x, 0, 200, 220);
    x += 66;
}
 
noStroke(); // skull 
fill(240, 240, 240);
ellipse(200, 235, 103, 84);
ellipse(200, 271, 66, 48);
 
var x = 200;
var y = 250;
noStroke(); // skull eyes
fill(138, 135, 138);
rect(x -32, y - 28, 21, 20);
rect(x + 14, y - 28, 21, 20);
 
var x = 218;
var y = 280;
fill(148, 129, 148); // skull teeth
ellipse(x -1, y -0, 11, 18);
ellipse(x + -21, y -0, 8, 18);
ellipse(x + -11, y -0, 8, 18);
ellipse(x -33, y -0, 11, 18);
 
// nose
fill(138, 121, 121);
triangle (193, 250, 201, 237, 207, 250);
 
// flower 01 and petals middle
fill(255, 131, 36);
ellipse(200, 177, 25, 25);
ellipse(200, 210, 25, 25);
ellipse(220, 192, 25, 25);
ellipse(180, 192, 25, 25);
 
// flower 01 and middle middle
fill(252, 238, 41);
ellipse(200, 194, 30, 30);
 
// flower 02 and petals middle
fill(209, 20, 105);
ellipse(259, 179, 25, 25);
ellipse(249, 215, 25, 25);
ellipse(270, 201, 25, 25);
ellipse(239, 192, 25, 25);
 
// flower 02 and middle middle
fill(252, 238, 41);
ellipse(255, 196, 30, 30);
 
// flower 03 and petals middle
fill(209, 20, 105);
ellipse(146, 180, 25, 25);
ellipse(154, 215, 25, 25);
ellipse(164, 195, 25, 25);
ellipse(133, 201, 25, 25);
 
// flower 03 and middle middle
fill(252, 238, 41);
ellipse(151, 195, 30, 30);
