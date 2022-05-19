function setup() {
    initializeFields();
    createCanvas(300, 300);
    fill(color(0x86, 0x00, 0xAF));
    textSize(50);
    textAlign(CENTER, CENTER);
}

var choice;

function draw() {
    background(color(0xF4, 0xFA, 0xAC));
    text("Dinner1", 150, 50);
    text("Dinner2", 150, 150);
    text("Dinner3", 150, 250);
    if (choice == 0)
        ellipse(30, 50, 50, 50);
    if (choice == 1)
        ellipse(30, 150, 50, 50);
    if (choice == 2)
        ellipse(30, 250, 50, 50);
}

function mousePressed() {
    choice = int(random(3)) % 3;
}

function initializeFields() {
    choice = -1;
}
