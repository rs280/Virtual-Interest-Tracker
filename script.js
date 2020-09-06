
let mySound;

// The video
let video;
// For displaying the label
let label = "waiting...";
 
// The classifier
let classifier;
 
let modelURL = 'https://teachablemachine.withgoogle.com/models/pImviEfAI/';
// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
  soundFormats('mp3')
  mySound = loadSound('Censor Beep Sound Effect');
  
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
 
  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  // Draw the video
  image(video, windowWidth/2 - 325 , 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height/2);

  
  
  if (label == "Student Paying Attention") {
    stuff2()
  } else if (label == "Student Not Paying Attention") {
      stuff()
  } 

  
  
  
}
function stuff(){
  mySound.play();
}
// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}
function stuff(){
  mySound.play()
}
function stuff2() {
  mySound.pause()
}
