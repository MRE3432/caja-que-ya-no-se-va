var caja;
var pared1,pared2,pared3,pared4;
function setup() 
{
  createCanvas(400, 400);
 caja = new Box(120,200,75,50,5,1);
 

}

function draw() 
{
 
  background("pink");
   if (caja.x > 400){
   caja.x = 100;

   }
   if (caja.y > 400){
    caja.y = 100;
 
    }
 caja.show();
 caja.move();
 
 
}

