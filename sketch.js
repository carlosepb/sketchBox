u=0;e=10,ang=1;
let sig = [1,1,-1,-1,1,-1,-1,1,1,0,0,1,-1,0,0,-1];
function setup(){
  createCanvas(400,400,WEBGL);
  noStroke();
  colorMode(HSB);
  (D=drawingContext).shadowBlur=30;
  for(x=0;x<880;x+=6){D.shadowColor=color(x/3,255,60)}
}
function draw() {
  background(0);  
  for(i=0;i<sig.length;i+=2){
    push();
    while(u<25){
      fill(255,e*u,e*u);
      rotateZ(radians(ang));
      translate(15*sig[i]*u+sig[i]*e,15*sig[i+1]*u+sig[i+1]*e,0);
      box(10);
      u++;
    }
    pop();
    u=0;
  }
  (ang<360)?ang+=0.5:ang=0;
}