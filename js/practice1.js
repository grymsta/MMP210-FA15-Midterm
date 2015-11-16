//Global Variables

    var color1, color2;
    var sqColor;
    var cirColor;
    var outColor;

    var square1;

function setup () {
    createCanvas(1300, 700);

    //setup square1
    square1 = {x:25, y:25, fill:'red', stroke:'black'};
    square2 = {x:75, y:25, fill:'black', stroke:'red'};
    square3 = {x:150, y:25, fill:'blue', stroke:'black'};
    drawSquare(square1);
    drawSquare(square2);
    drawSquare(square3);

//    drawSquare1(25, 25);
//    drawSquare2(76, 25);
//
//    drawSquare3(150, 25);
//    drawSquare4(201,25);
//
//    drawSquare5(275, 25);
//    drawSquare6(326,25);

    sqColor = color('white');
    cirColor = color('white');
    outColor = color('black');

    drawPattern();



}

//draws the pattern in grid format, circles inside of squares
function drawPattern() {

    var x1 = 40;
    var x2 = 70;
    var y = 150;

    for(var i = 0; i < 1000; i++){
        fill(sqColor);
        stroke(outColor);

        rect(x1, y, 60, 60);

        fill(cirColor);
        stroke(outColor);

        ellipse(x2, y + 30, 50, 50);

        x1 += 70;
        x2 += 70;

        if(x1 > width - 100){

            y+= 70;

            x1 = 40;
            x2 = 70;
        }
    }
}

function drawSquare(sq){

    fill(sq.fill);
    stroke(sq.stroke);
    rect(sq.x, sq.y, 50, 50);
}

//Place where the user will chose the colors for the pattern
function drawSquare1(startX, startY){

    color1 = fill('red');
    color2 = stroke('black');
    rect(startX, startY, 50, 50);
}

function drawSquare2(startX, startY){

    color1 = fill('black');
    color2 = stroke('black');
    rect(startX, startY, 50, 50);
}

function drawSquare3(startX, startY){

    color1 = fill('blue');
    color2 = stroke('black');
    rect(startX, startY, 50, 50);
}

function drawSquare4(startX, startY){

    color1 = fill('yellow');
    color2 = stroke('black');
    rect(startX, startY, 50, 50);
}

function drawSquare5(startX, startY){

    color1 = fill('limegreen');
    color2 = stroke('black');
    rect(startX, startY, 50, 50);
}

function drawSquare6(startX, startY){

    color1 = fill('orange');
    color2 = stroke('black');
    rect(startX, startY, 50, 50);
}



function mousePressed() {
//
var d = dist(mouseX, mouseY, square1.x+25, square1.y+25);
    if(d > 25){
        sqColor = color('black');
        cirColor = color('red');
    }

    var d = dist(mouseX, mouseY, square2.x+25, square2.y+25);
    if(d > 25){
       sqColor = color('black');
        cirColor = color('red');
    }

    ////======
    d = dist(mouseX, mouseY, square1.x+25, square1.y+25);
    if(d > 25){
        sqColor = color('black');
        cirColor = color('red');
    }

    var d = dist(mouseX, mouseY, square2.x+25, square2.y+25);
    if(d > 25){
       sqColor = color('black');
        cirColor = color('red');
    }



    drawPattern();

}
