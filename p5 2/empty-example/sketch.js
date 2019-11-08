var position = 0;

function setup() {
  createCanvas(1150,500);
}

function draw() {
  // put drawing code here
    background("#C9FFFF");
    
    fill("#E1BA25");
    noStroke();
    rect(position, 250, 250, 100);
    fill("#000000");
    ellipse(position+50, 350, 75, 75);
    ellipse(position+200, 350, 75);
    
    
}

function mousePressed() {
    
    if (position >= 1000)
        {
            position = 0;
        }else{
            position = position + 100;
        }
    
}