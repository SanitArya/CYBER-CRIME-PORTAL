var bg;
var report,reportI;
var complain,complainI;
var screenState = "homeSc";
var backBt,backBtI;
var bt1I,bt2I,bt3I,bt4I,bt5I,bt6I;
var rate = 0;


function preload(){

  bgI = loadImage("Images/BG.png");
  reportI = loadImage("Images/report.png");
  complainI = loadImage("Images/complain.jpg");
  backBtI = loadImage("Images/backBt.png");
  bt1I = loadImage("Images/Bt0.png");
  bt2I = loadImage("Images/Bt1.png");
  bt3I = loadImage("Images/Bt2.png");
  bt4I = loadImage("Images/Bt3.png");
  bt5I = loadImage("Images/Bt4.png");
  bt6I = loadImage("Images/Bt5.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  bg = createSprite(displayWidth/2,displayHeight/2);
  bg.addImage("bgI",bgI);
  bg.scale=1.2;
  bg.visible = false;

  report = createSprite(displayWidth/2,displayHeight/2+100);
  report.addImage("reportI",reportI);
  report.scale = 0.7;
  report.visible = false;

  complain = createSprite(displayWidth/2,displayHeight/2-100);
  complain.addImage("complainI",complainI);
  complain.scale = 0.75;
  complain.visible = false;

  backBt = createSprite(displayWidth/2-650,displayHeight/2-350);
  backBt.addImage("backBtI",backBtI);
  backBt.scale = 0.1;
  backBt.visible = false;

  bt1 = createSprite(displayWidth/2-550,displayHeight/2-230);
  bt1.addImage("bt1I",bt1I);
  bt1.scale = 0.7;
  bt1.visible = false;

  bt2 = createSprite(displayWidth/2-275,displayHeight/2-230);
  bt2.addImage("bt2I",bt2I);
  bt2.scale = 0.7;
  bt2.visible = false;

  bt3 = createSprite(displayWidth/2,displayHeight/2-230);
  bt3.addImage("bt3I",bt3I);
  bt3.scale = 0.7;
  bt3.visible = false;

  bt4 = createSprite(displayWidth/2+275,displayHeight/2-230);
  bt4.addImage("bt4I",bt4I);
  bt4.scale = 0.7;
  bt4.visible = false;

  bt5 = createSprite(displayWidth/2+550,displayHeight/2-230);
  bt5.addImage("bt5I",bt5I);
  bt5.scale = 0.7;
  bt5.visible = false;

  bt6 = createSprite(displayWidth/2-550,displayHeight/2-150);
  bt6.addImage("bt6I",bt6I);
  bt6.scale = 0.7;
  bt6.visible = false;

  bt7 = createSprite(displayWidth/2-275,displayHeight/2-150);
  bt7.addImage("bt1I",bt1I);
  bt7.scale = 0.7;
  bt7.visible = false;

  bt8 = createSprite(displayWidth/2,displayHeight/2-150);
  bt8.addImage("bt2I",bt2I);
  bt8.scale = 0.7;
  bt8.visible = false;

  bt9 = createSprite(displayWidth/2+275,displayHeight/2-150);
  bt9.addImage("bt3I",bt3I);
  bt9.scale = 0.7;
  bt9.visible = false;

  bt10 = createSprite(displayWidth/2+550,displayHeight/2-150);
  bt10.addImage("bt4I",bt4I);
  bt10.scale = 0.7;
  bt10.visible = false;

  bt11 = createSprite(displayWidth/2-550,displayHeight/2-70);
  bt11.addImage("bt5I",bt5I);
  bt11.scale = 0.7;
  bt11.visible = false;

  bt12 = createSprite(displayWidth/2-275,displayHeight/2-70);
  bt12.addImage("bt6I",bt6I);
  bt12.scale = 0.7;
  bt12.visible = false;

  bt13 = createSprite(displayWidth/2,displayHeight/2-70);
  bt13.addImage("bt1I",bt1I);
  bt13.scale = 0.7;
  bt13.visible = false;

  bt14 = createSprite(displayWidth/2+275,displayHeight/2-70);
  bt14.addImage("bt2I",bt2I);
  bt14.scale = 0.7;
  bt14.visible = false;

  bt15 = createSprite(displayWidth/2+550,displayHeight/2-70);
  bt15.addImage("bt3I",bt3I);
  bt15.scale = 0.7;
  bt15.visible = false;

  bt16 = createSprite(displayWidth/2-550,displayHeight/2+10);
  bt16.addImage("bt4I",bt4I);
  bt16.scale = 0.7;
  bt16.visible = false;

  bt17 = createSprite(displayWidth/2-275,displayHeight/2+10);
  bt17.addImage("bt5I",bt5I);
  bt17.scale = 0.7;
  bt17.visible = false;

  bt18 = createSprite(displayWidth/2,displayHeight/2+10);
  bt18.addImage("bt6I",bt6I);
  bt18.scale = 0.7;
  bt18.visible = false;

  bt19 = createSprite(displayWidth/2+275,displayHeight/2+10);
  bt19.addImage("bt1I",bt1I);
  bt19.scale = 0.7;
  bt19.visible = false;

  bt20 = createSprite(displayWidth/2+550,displayHeight/2+10);
  bt20.addImage("bt2I",bt2I);
  bt20.scale = 0.7;
  bt20.visible = false;

  bt21 = createSprite(displayWidth/2-550,displayHeight/2+90);
  bt21.addImage("bt3I",bt3I);
  bt21.scale = 0.7;
  bt21.visible = false;

  bt22 = createSprite(displayWidth/2-275,displayHeight/2+90);
  bt22.addImage("bt4I",bt4I);
  bt22.scale = 0.7;
  bt22.visible = false;

  bt23 = createSprite(displayWidth/2,displayHeight/2+90);
  bt23.addImage("bt5I",bt5I);
  bt23.scale = 0.7;
  bt23.visible = false;

  bt24 = createSprite(displayWidth/2+275,displayHeight/2+90);
  bt24.addImage("bt6I",bt6I);
  bt24.scale = 0.7;
  bt24.visible = false;

  bt25 = createSprite(displayWidth/2+550,displayHeight/2+90);
  bt25.addImage("bt1I",bt1I);
  bt25.scale = 0.7;
  bt25.visible = false;

  bt26 = createSprite(displayWidth/2-550,displayHeight/2+170);
  bt26.addImage("bt2I",bt2I);
  bt26.scale = 0.7;
  bt26.visible = false;

  bt27 = createSprite(displayWidth/2-275,displayHeight/2+170);
  bt27.addImage("bt3I",bt3I);
  bt27.scale = 0.7;
  bt27.visible = false;

  bt28 = createSprite(displayWidth/2,displayHeight/2+170);
  bt28.addImage("bt4I",bt4I);
  bt28.scale = 0.7;
  bt28.visible = false;

  bt29 = createSprite(displayWidth/2+275,displayHeight/2+170);
  bt29.addImage("bt5I",bt5I);
  bt29.scale = 0.7;
  bt29.visible = false;

  bt30 = createSprite(displayWidth/2+550,displayHeight/2+170);
  bt30.addImage("bt6I",bt6I);
  bt30.scale = 0.7;
  bt30.visible = false;

  bt31 = createSprite(displayWidth/2-550,displayHeight/2+250);
  bt31.addImage("bt1I",bt1I);
  bt31.scale = 0.7;
  bt31.visible = false;

  bt32 = createSprite(displayWidth/2-275,displayHeight/2+250);
  bt32.addImage("bt2I",bt2I);
  bt32.scale = 0.7;
  bt32.visible = false;

  bt33 = createSprite(displayWidth/2,displayHeight/2+250);
  bt33.addImage("bt3I",bt3I);
  bt33.scale = 0.7;
  bt33.visible = false;

  bt34 = createSprite(displayWidth/2+275,displayHeight/2+250);
  bt34.addImage("bt4I",bt4I);
  bt34.scale = 0.7;
  bt34.visible = false;

  bt35 = createSprite(displayWidth/2+550,displayHeight/2+250);
  bt35.addImage("bt5I",bt5I);
  bt35.scale = 0.7;
  bt35.visible = false;

  bt36 = createSprite(displayWidth/2-550,displayHeight/2+330);
  bt36.addImage("bt6I",bt6I);
  bt36.scale = 0.7;
  bt36.visible = false;

  
}

function draw() {
  background("red");  

  rate = rate+Math.round(World.frameRate/60);;

  console.log(screenState)
  console.log(rate)

  drawSprites();

  Texts();
  Screens();
  HomeScreen();
  ReportScreen();
  ComplainScreen();
  CCInfo();
  
}

function Texts(){

  if(screenState=="homeSc"){

    fill("black");
    textSize(65);
    textFont(BOLD)
    text("Emergency",displayWidth/2-160,displayHeight/8-30);
  }

  if(screenState=="complainSc"){


   fill("black");
   textSize(65);
   textFont(BOLD)
   text("Select State",displayWidth/2-160,displayHeight/8-30);

   textSize(25)

   text("ANDAMAN ",bt1.x-70,bt1.y)
   text("& NICOBAR ",bt1.x-70,bt1.y+20)

   text("ANDHRA",bt2.x-56,bt2.y)
   text("PRADESH",bt2.x-60,bt2.y+20)

   text("ARUNACHAL",bt3.x-78,bt3.y)
   text("PRADESH",bt3.x-60,bt3.y+20)

   text("ASSAM",bt4.x-50,bt4.y+10);

   text("BIHAR",bt5.x-40,bt5.y+10);

   text("CHANDIGARH",bt6.x-85,bt6.y+10);
 
   text("CHHATTISGARH",bt7.x-95,bt7.y+10);

   text("DADRA &",bt8.x-56,bt8.y);
   text("NAGAR HAVELI",bt8.x-95,bt8.y+20);

   text("DAMAN & DIU",bt9.x-87,bt9.y+10);

   text("DELHI",bt10.x-45,bt10.y+10);

   text("GOA",bt11.x-35,bt11.y+10);

   text("GUJARAT",bt12.x-55,bt12.y+10);

   text("HARYANA",bt13.x-60,bt13.y+10);

   text("HIMACHAL",bt14.x-65,bt14.y);
   text("PRADESH",bt14.x-60,bt14.y+20);

   text("JAMMU &",bt15.x-55,bt15.y);
   text("KASHMIR",bt15.x-55,bt15.y+20);

   text("JHARKHAND",bt16.x-75,bt16.y+10);

   text("KARNATAKA",bt17.x-75,bt17.y+10);

   text("KERALA",bt18.x-55,bt18.y+10);

   text("LAKSHADWEEP",bt19.x-95,bt19.y+10);

   text("MADHYA",bt20.x-55,bt20.y);
   text("PRADESH",bt20.x-58,bt20.y+20);

   text("MAHARASHTRA",bt21.x-98,bt21.y+10);

   text("MANIPUR",bt22.x-60,bt22.y+10);

   text("MEGHALAYA",bt23.x-80,bt23.y+10);

   text("MIZORAM",bt24.x-62,bt24.y+10);

   text("NAGALAND",bt25.x-70,bt25.y+10);

   text("ODISHA",bt26.x-50,bt26.y+10);

   text("PUDUCHERRY",bt27.x-85,bt27.y+10);

   text("PUNJAB",bt28.x-55,bt28.y+10);

   text("RAJASTHAN",bt29.x-75,bt29.y+10);

   text("SIKKIM",bt30.x-45,bt30.y+10);

   text("TAMIL NADU	",bt31.x-80,bt31.y+10);

   text("TELANGANA",bt32.x-75,bt32.y+10);

   text("TRIPURA",bt33.x-55,bt33.y+10);

   text("UTTARAKHAND",bt34.x-95,bt34.y+10);

   text("UTTAR",bt35.x-40,bt35.y);
   text("PRADESH",bt35.x-60,bt35.y+20);

   text("WEST BENGAL",bt36.x-90,bt36.y+10);
  }

}

function Screens(){

  if(mousePressedOver(report)&&report.visible==true){
    
    screenState = "reportSc"

    rate =  0
    
  }

  if(mousePressedOver(complain)&&complain.visible==true){
    
    screenState = "complainSc"

    rate = 0;
    
  }

  if(mousePressedOver(backBt)&&(screenState=="complainSc"||screenState=="reportSc")&&rate>9){
    
    screenState = "homeSc"

    bt1.visible = false;
    bt2.visible = false;
    bt3.visible = false;
    bt4.visible = false;
    bt5.visible = false;
    bt6.visible = false;
    bt7.visible = false;
    bt8.visible = false;
    bt9.visible = false;
    bt10.visible = false;
    bt11.visible = false;
    bt12.visible = false;
    bt13.visible = false;
    bt14.visible = false;
    bt15.visible = false;
    bt16.visible = false;
    bt17.visible = false;
    bt18.visible = false;
    bt19.visible = false;
    bt20.visible = false;
    bt21.visible = false;
    bt22.visible = false;
    bt23.visible = false;
    bt24.visible = false;
    bt25.visible = false;
    bt26.visible = false;
    bt27.visible = false;
    bt28.visible = false;
    bt29.visible = false;
    bt30.visible = false;
    bt31.visible = false;
    bt32.visible = false;
    bt33.visible = false;
    bt34.visible = false;
    bt35.visible = false;
    bt36.visible = false;

    rate = 0;
  }
  
  if(mousePressedOver(backBt)&&(screenState=="CCInfo1"||screenState=="CCInfo2"||screenState=="CCInfo3"||screenState=="CCInfo4"||screenState=="CCInfo5"||screenState=="CCInfo6"||screenState=="CCInfo36"||
  screenState=="CCInfo7"||screenState=="CCInfo8"||screenState=="CCInfo9"||screenState=="CCInfo10"||screenState=="CCInfo11"||screenState=="CCInfo12"||
  screenState=="CCInfo13"||screenState=="CCInfo14"||screenState=="CCInfo15"||screenState=="CCInfo16"||screenState=="CCInfo17"||screenState=="CCInfo18"||
  screenState=="CCInfo19"||screenState=="CCInfo20"||screenState=="CCInfo21"||screenState=="CCInfo22"||screenState=="CCInfo23"||screenState=="CCInfo24"||
  screenState=="CCInfo25"||screenState=="CCInfo26"||screenState=="CCInfo27"||screenState=="CCInfo28"||screenState=="CCInfo29"||
  screenState=="CCInfo30"||screenState=="CCInfo31"||screenState=="CCInfo32"||screenState=="CCInfo33"||screenState=="CCInfo34"||
  screenState=="CCInfo35")&&rate>9){
    
    screenState = "complainSc"

    rate = 0;
  }


  if(mousePressedOver(bt1)&&bt1.visible==true&&rate>9){

    screenState = "CCInfo1"

    rate = 0;
  }

  if(mousePressedOver(bt2)&&bt2.visible==true&&rate>9){

    screenState = "CCInfo2"

    rate = 0;
  }

  if(mousePressedOver(bt3)&&bt3.visible==true&&rate>9){

    screenState = "CCInfo3"

    rate = 0;
  }

  if(mousePressedOver(bt4)&&bt4.visible==true&&rate>9){

    screenState = "CCInfo4"

    rate = 0;
  }

  if(mousePressedOver(bt5)&&bt5.visible==true&&rate>9){

    screenState = "CCInfo4"

    rate = 0;
  }

  if(mousePressedOver(bt6)&&bt6.visible==true&&rate>9){

    screenState = "CCInfo6"
  
    rate = 0;
  }

  if(mousePressedOver(bt7)&&bt7.visible==true&&rate>9){

    screenState = "CCInfo7"

    rate = 0;
  }

  if(mousePressedOver(bt8)&&bt8.visible==true&&rate>9){

    screenState = "CCInfo8"

    rate = 0;
  }

  if(mousePressedOver(bt9)&&bt9.visible==true&&rate>9){

    screenState = "CCInfo9"

    rate = 0;
  }

  if(mousePressedOver(bt10)&&bt10.visible==true&&rate>9){

    screenState = "CCInfo10"

    rate = 0;
  }

  if(mousePressedOver(bt11)&&bt11.visible==true&&rate>9){

    screenState = "CCInfo11"

    rate = 0;
  }

  if(mousePressedOver(bt12)&&bt12.visible==true&&rate>9){

    screenState = "CCInfo12"

    rate = 0;
  }

  if(mousePressedOver(bt13)&&bt13.visible==true&&rate>9){

    screenState = "CCInfo13"

    rate = 0;
  }

  if(mousePressedOver(bt14)&&bt14.visible==true&&rate>9){

    screenState = "CCInfo14"

    rate = 0;
  }

  if(mousePressedOver(bt15)&&bt15.visible==true&&rate>9){

    screenState = "CCInfo15"

    rate = 0;
  }

  if(mousePressedOver(bt16)&&bt16.visible==true&&rate>9){

    screenState = "CCInfo16"

    rate = 0;
  }

  if(mousePressedOver(bt17)&&bt17.visible==true&&rate>9){

    screenState = "CCInfo17"

    rate = 0;
  }

  if(mousePressedOver(bt18)&&bt18.visible==true&&rate>9){

    screenState = "CCInfo18"

    rate = 0;
  }

  if(mousePressedOver(bt19)&&bt19.visible==true&&rate>9){

    screenState = "CCInfo19"

    rate = 0;
  }

  if(mousePressedOver(bt20)&&bt20.visible==true&&rate>9){

    screenState = "CCInfo20"

    rate = 0;
  }

  if(mousePressedOver(bt21)&&bt21.visible==true&&rate>9){

    screenState = "CCInfo21"

    rate = 0;
  }

  if(mousePressedOver(bt22)&&bt22.visible==true&&rate>9){

    screenState = "CCInfo22"

    rate = 0;
  }

  if(mousePressedOver(bt23)&&bt23.visible==true&&rate>9){

    screenState = "CCInfo23"

    rate = 0;
  }

  if(mousePressedOver(bt24)&&bt24.visible==true&&rate>9){

    screenState = "CCInfo24"

    rate = 0;
  }

  if(mousePressedOver(bt5)&&bt25.visible==true&&rate>9){

    screenState = "CCInfo25"

    rate = 0;
  }

  if(mousePressedOver(bt26)&&bt26.visible==true&&rate>9){

    screenState = "CCInfo26"

    rate = 0;
  }

  if(mousePressedOver(bt27)&&bt27.visible==true&&rate>9){

    screenState = "CCInfo27"

    rate = 0;
  }

  if(mousePressedOver(bt28)&&bt28.visible==true&&rate>9){

    screenState = "CCInfo28"

    rate = 0;
  }

  if(mousePressedOver(bt29)&&bt29.visible==true&&rate>9){

    screenState = "CCInfo29"

    rate = 0;
  }

  if(mousePressedOver(bt30)&&bt30.visible==true&&rate>9){

    screenState = "CCInfo30"

    rate = 0;
  }

  if(mousePressedOver(bt31)&&bt31.visible==true&&rate>9){

    screenState = "CCInfo31"

    rate = 0;
  }

  if(mousePressedOver(bt32)&&bt32.visible==true&&rate>9){

    screenState = "CCInfo32"

    rate = 0;
  }

  if(mousePressedOver(bt33)&&bt33.visible==true&&rate>9){

    screenState = "CCInfo33"

    rate = 0;
  }

  if(mousePressedOver(bt34)&&bt34.visible==true&&rate>9){

    screenState = "CCInfo34"

    rate = 0;
  }

  if(mousePressedOver(bt35)&&bt35.visible==true&&rate>9){

    screenState = "CCInfo35"

    rate = 0;
  }

  if(mousePressedOver(bt36)&&bt36.visible==true&&rate>9){

    screenState = "CCInfo36"

    rate = 0;
  }
}

function HomeScreen(){

  if(screenState=="homeSc"){

    bg.visible = true;
    complain.visible = true;
    report.visible = true;

    backBt.visible = false;
  }
}

function ComplainScreen(){

  if(screenState=="complainSc"){

    bg.visible = true;
    complain.visible = false;
    report.visible = false;

    backBt.visible = true;

    BTVIST();
  
  }
}

function ReportScreen(){

  if(screenState=="reportSc"){

    bg.visible = false;
    complain.visible = false;
    report.visible = false;

    backBt.visible = true;
  }
}

function CCInfo(){

  if(screenState=="CCInfo1"||screenState=="CCInfo2"||screenState=="CCInfo3"||screenState=="CCInfo4"||screenState=="CCInfo5"||screenState=="CCInfo6"||screenState=="CCInfo36"||
  screenState=="CCInfo7"||screenState=="CCInfo8"||screenState=="CCInfo9"||screenState=="CCInfo10"||screenState=="CCInfo11"||screenState=="CCInfo12"||
  screenState=="CCInfo13"||screenState=="CCInfo14"||screenState=="CCInfo15"||screenState=="CCInfo16"||screenState=="CCInfo17"||screenState=="CCInfo18"||
  screenState=="CCInfo19"||screenState=="CCInfo20"||screenState=="CCInfo21"||screenState=="CCInfo22"||screenState=="CCInfo23"||screenState=="CCInfo24"||
  screenState=="CCInfo25"||screenState=="CCInfo26"||screenState=="CCInfo27"||screenState=="CCInfo28"||screenState=="CCInfo29"||
  screenState=="CCInfo30"||screenState=="CCInfo31"||screenState=="CCInfo32"||screenState=="CCInfo33"||screenState=="CCInfo34"||
  screenState=="CCInfo35"){

    BTVISF();
  }
}

function BTVIST(){

  bt1.visible = true;
  bt2.visible = true;
  bt3.visible = true;
  bt4.visible = true;
  bt5.visible = true;
  bt6.visible = true;
  bt7.visible = true;
  bt8.visible = true;
  bt9.visible = true;
  bt10.visible = true;
  bt11.visible = true;
  bt12.visible = true;
  bt13.visible = true;
  bt14.visible = true;
  bt15.visible = true;
  bt16.visible = true;
  bt17.visible = true;
  bt18.visible = true;
  bt19.visible = true;
  bt20.visible = true;
  bt21.visible = true;
  bt22.visible = true;
  bt23.visible = true;
  bt24.visible = true;
  bt25.visible = true;
  bt26.visible = true;
  bt27.visible = true;
  bt28.visible = true;
  bt29.visible = true;
  bt30.visible = true;
  bt31.visible = true;
  bt32.visible = true;
  bt33.visible = true;
  bt34.visible = true;
  bt35.visible = true;
  bt36.visible = true;

}

function BTVISF(){

  bt1.visible = false;
  bt2.visible = false;
  bt3.visible = false;
  bt4.visible = false;
  bt5.visible = false;
  bt6.visible = false;
  bt7.visible = false;
  bt8.visible = false;
  bt9.visible = false;
  bt10.visible = false;
  bt11.visible = false;
  bt12.visible = false;
  bt13.visible = false;
  bt14.visible = false;
  bt15.visible = false;
  bt16.visible = false;
  bt17.visible = false;
  bt18.visible = false;
  bt19.visible = false;
  bt20.visible = false;
  bt21.visible = false;
  bt22.visible = false;
  bt23.visible = false;
  bt24.visible = false;
  bt25.visible = false;
  bt26.visible = false;
  bt27.visible = false;
  bt28.visible = false;
  bt29.visible = false;
  bt30.visible = false;
  bt31.visible = false;
  bt32.visible = false;
  bt33.visible = false;
  bt34.visible = false;
  bt35.visible = false;
  bt36.visible = false;

}
