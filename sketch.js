var bird;
var pipes=[];
function setup() {
createCanvas(400,600);
bird=new Bird();
pipes.push(new Pipes());
}
function draw() {
  background(0);
  for(var i=0;i<pipes.length;i++)
  {
    pipes[i].show();
    pipes[i].update();
    if(pipes[i].hits(bird))
    {
      console.log("Hit");
    }
  }

  bird.update()
  bird.show();
  if(frameCount%50==0)
  {
    pipes.push(new Pipes());
  }


}
function keyPressed()
{

  if (key==' '){
    bird.up();
  }
}
