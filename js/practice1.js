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
    square2 = {x:75, y:25, fill:'black', stroke:'black'};
    square3 = {x:150, y:25, fill:'blue', stroke:'black'};
    square4 = {x:201, y:25, fill:'yellow', stroke:'black'};
    sqaure5 = {x:275, y:25, fill:'limegreen', stroke:'black'};
    square6 = {x:326, y:25, fill:'orange', stroke:'black'};

    drawSquare(square1);
    drawSquare(square2);
    drawSquare(square3);
    drawSquare(square4);
    //drawSquare(sqaure5);
    //drawSquare(square6);

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




function mousePressed() {

var d = dist(mouseX, mouseY, square1.x, square1.y);
    if(d > 25 && d < 150){
        sqColor = color('black');
        cirColor = color('red');
    }

    //======
    d = dist(mouseX, mouseY, square3.x, square3.y);
    if(d > 150 && d < 200){
        sqColor = color('yellow');
        cirColor = color('blue');
    }



    drawPattern();

}
