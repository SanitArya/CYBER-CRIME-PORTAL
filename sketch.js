var bg;
var report,reportI;
var complain,complainI;
var screenState = "homeSc";
var backBt,backBtI;
var bt1I,bt2I,bt3I,bt4I,bt5I,bt6I;
var rate = 0;
var info,infoI;
var cs,csi;
var Input,button1;
var state;


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
  infoI = loadImage("Images/Info.PNG");
  csi = loadImage("Images/comming soon.png")
}

function setup() {
  
  createCanvas(displayWidth,displayHeight);

  bg = createSprite(displayWidth/2,displayHeight/2);
  bg.addImage("bgI",bgI);
  bg.scale=1.2;
  bg.visible = false;

  report = createSprite(displayWidth/2,displayHeight/2+100);
  report.addImage("reportI",reportI);
  report.scale = 0.8;
  report.visible = false;

  complain = createSprite(displayWidth/2,displayHeight/2-100);
  complain.addImage("complainI",complainI);
  complain.scale = 0.8;
  complain.visible = false;

  info = createSprite(displayWidth/2,displayHeight/2);
  info.addImage("infoI",infoI);
  info.scale = 1.1;
  info.visible = false;

  Input = createInput("Enter the Name of State in Capital Letters without space...Use '&' instead of 'and'");
  Input.position(displayWidth/2-260,displayHeight/2-300);
  Input.size(500,20);
  Input.hide();

  button = createButton("Search");
  button.position(displayWidth/2+250,displayHeight/2-300);
  button.size(60,25)
  button.hide();

  cs = createSprite(displayWidth/2,displayHeight/2-50);
  cs.addImage("csi",csi);
  cs.scale=  2;
  cs.visible = false;

  backBt = createSprite(displayWidth/2-650,displayHeight/2-350);
  backBt.addImage("backBtI",backBtI);
  backBt.scale = 0.1;
  backBt.visible = false;

  
}

function draw() {
  background("red");  

  rate = rate+Math.round(World.frameRate/60);

  console.log(state)
  console.log(screenState)

  drawSprites();

  Texts();
  Screens();
  HomeScreen();
  ReportScreen();
  ComplainScreen();
  CCPage();
  SearchBar();
  
}

function Texts(){

  if(screenState=="homeSc"){

    fill("black");
    textSize(65);
    textFont(BOLD)
    text("Cyber Crime Portal",displayWidth/2-280,displayHeight/8-30);
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
    
    screenState = "homeSc";

    button.visible = true;
    Input.vsible = true;

    cs.visible = false;

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




}

function HomeScreen(){

  if(screenState=="homeSc"){

    bg.visible = true;
    complain.visible = true;
    report.visible = true;

    backBt.visible = false;

    info.visible = false;

    cs.visible = false;

    button.hide();
    Input.hide();
  }
}

function ComplainScreen(){

  if(screenState=="complainSc"){

    bg.visible = true;
    complain.visible = false;
    report.visible = false;

    backBt.visible = true;

    info.visible = false;

    cs.visible = false;
    
    Input.show();
    button.show()
  }
}

function ReportScreen(){

  if(screenState=="reportSc"){

    bg.visible = false;
    complain.visible = false;
    report.visible = false;

    backBt.visible = true;

    info.visible = false;

    cs.visible = true;

    button.hide();
    Input.hide();
  }
}

function SearchBar(){

  if(screenState=="complainSc"){

    button.visible=true;

    button.mousePressed(()=>{

      button.hide();
      Input.hide();
  
      state = Input.value();
  
      rate = 0;
  
      if(state=="ANDAMAN&NICOBAR"){
  
        screenState="CCInfo1"

      
      }
  
      if(state=="ANDHRAPRADESH"){
  
        screenState="CCInfo2"
      }
  
      if(state=="ARUNACHALPRADESH"){
  
        screenState="CCInfo3"
      }
  
      if(state=="ASSAM"){
  
        screenState="CCInfo4"
      }
  
      if(state=="BIHAR"){
  
        screenState="CCInfo5"
      }
  
      if(state=="CHANDIGARH"){
  
        screenState="CCInfo6"
      }
  
      if(state=="CHHATTISGARH"){
  
        screenState="CCInfo7"
      }
  
      if(state=="DADRA&NAGARHAVELI"){
  
        screenState="CCInfo8"
      }
  
      if(state=="DAMAN&DIU"){
  
        screenState="CCInfo9"
      }
  
      if(state=="DELHI"){
  
        screenState="CCInfo10"
      }
  
      if(state=="GOA"){
  
        screenState="CCInfo11"
      }
  
      if(state=="GUJARAT"){
  
        screenState="CCInfo12"
      }
  
      if(state=="HARYANA"){
  
        screenState="CCInfo13"
      }
  
      if(state=="HIMACHALPRADESH"){
  
        screenState="CCInfo14"
      }
  
      if(state=="JAMMU&KASHMIR"){
  
        screenState="CCInfo15"
      }
  
      if(state=="JHARKHAND"){
  
        screenState="CCInfo16"
      }
  
      if(state=="KARNATAKA"){
  
        screenState="CCInfo17"
      }
  
      if(state=="KERALA"){
  
        screenState="CCInfo18"
      }
  
      if(state=="LAKSHADWEEP"){
  
        screenState="CCInfo19"
      }
  
      if(state=="MADHYAPRADESH"){
  
        screenState="CCInfo20"
      }
  
      if(state=="MAHARASHTRA"){
  
        screenState="CCInfo21"
      }
  
      if(state=="MANIPUR"){
  
        screenState="CCInfo22"
      }
  
      if(state=="MEGHALAYA"){
  
        screenState="CCInfo23"
      }
  
      if(state=="MIZORAM"){
  
        screenState="CCInfo24"
      } 
      
      if(state=="NAGALAND"){
  
        screenState="CCInfo25"
      }
  
      if(state=="ODISHA"){
  
        screenState="CCInfo26"
      }
  
      if(state=="PUDUCHERRY"){
  
        screenState="CCInfo27"
      }
  
      if(state=="PUNJAB"){
  
        screenState="CCInfo28"
      }
  
      if(state=="RAJASTHAN"){
  
        screenState="CCInfo29"
      }
  
      if(state=="SIKKIM"){
  
        screenState="CCInfo30"
      }
  
      if(state=="TAMILNADU"){
  
        screenState="CCInfo31"
      }
  
      if(state=="TELANGANA"){
  
        screenState="CCInfo32"
      }
  
      if(state=="TRIPURA"){
  
        screenState="CCInfo33"
      }
      if(state=="UTTARAKHAND"){
  
        screenState="CCInfo34"
      }
  
      if(state=="UTTARPRADESH"){
  
        screenState="CCInfo35"
      }
  
      if(state=="WESTBENGAL"){
  
        screenState="CCInfo36"
      }
    })
  }

  info.visible = false;

  cs.visible = false;

}

function CCPage(){

  if(screenState=="CCInfo1"||screenState=="CCInfo2"||screenState=="CCInfo3"||screenState=="CCInfo4"||screenState=="CCInfo5"||screenState=="CCInfo6"||screenState=="CCInfo36"||
  screenState=="CCInfo7"||screenState=="CCInfo8"||screenState=="CCInfo9"||screenState=="CCInfo10"||screenState=="CCInfo11"||screenState=="CCInfo12"||
  screenState=="CCInfo13"||screenState=="CCInfo14"||screenState=="CCInfo15"||screenState=="CCInfo16"||screenState=="CCInfo17"||screenState=="CCInfo18"||
  screenState=="CCInfo19"||screenState=="CCInfo20"||screenState=="CCInfo21"||screenState=="CCInfo22"||screenState=="CCInfo23"||screenState=="CCInfo24"||
  screenState=="CCInfo25"||screenState=="CCInfo26"||screenState=="CCInfo27"||screenState=="CCInfo28"||screenState=="CCInfo29"||
  screenState=="CCInfo30"||screenState=="CCInfo31"||screenState=="CCInfo32"||screenState=="CCInfo33"||screenState=="CCInfo34"||
  screenState=="CCInfo35"){

  info.visible = true;

  cs.visible = false;
  }

  if(screenState=="CCInfo1"){

  fill("black");
  textFont(BOLD)
  textSize(60);
  stroke(50)
  text("ANDAMAN & NICOBAR",displayWidth/2-320,displayHeight/2-300);

  textSize(20);
  text("1.",info.x-660,info.y+30)

  text("ANDAMAN",info.x-620,info.y+20)
  text("& NICOBAR",info.x-620,info.y+40)

  text("Sh. Madhup",info.x-460,info.y+20);
  text("Tiwari",info.x-460,info.y+40)

  text("IGP",info.x-305,info.y+30)

  text("igpint.and@nic.in",info.x-220,info.y+30)

  text("Sh.Deependra",info.x+100,info.y+20);
  text("Pathak",info.x+100,info.y+40)

  text("DGP",info.x+238,info.y+30)

  text("03192-",info.x+360,info.y+20);
  text("230216",info.x+360,info.y+40);

  text("dgp.and@nic.in",info.x+460,info.y+30);

  
  }

  if(screenState=="CCInfo2"){

    fill("black");
    textFont(BOLD)
    textSize(60);
    text("ANDHRA PRADESH",displayWidth/2-320,displayHeight/2-300);
  
    textSize(20);
    text("2.",info.x-660,info.y+30)

    text("ANDHRA",info.x-620,info.y+20)
    text("PRADESH",info.x-620,info.y+40)

    text("Ms. G.",info.x-460,info.y+20);
    text("Radhika",info.x-460,info.y+40)

    text("SP",info.x-305,info.y+30)

    text("cybercrimes-cid@ap.gov.in",info.x-220,info.y+30)

    text("Shri M.Sunil",info.x+100,info.y+20);
    text("Kumar Naik",info.x+100,info.y+40)

    text("DIGP",info.x+238,info.y+30)

    text("0863-",info.x+360,info.y+20);
    text("2340183",info.x+360,info.y+40);

    text("cybercrimes-cid@ap.gov.in",info.x+460,info.y+30);
    }

  if(screenState=="CCInfo3"){

    fill("black");
    textFont(BOLD)
    textSize(60);
    text("ARUNACHAL PRADESH",displayWidth/2-320,displayHeight/2-300);
  
    textSize(20);
    text("3.",info.x-660,info.y+30)
  
    text("ARUNACHAL",info.x-620,info.y+20)
    text("PRADESH",info.x-620,info.y+40)
  
    text("Sh. Navdeep",info.x-460,info.y+20);
    text("Singh Brar",info.x-460,info.y+40)
  
    text("SP",info.x-305,info.y+30)
  
    text("spcr@arunpol.nic.in",info.x-220,info.y+30)
  
    text("Sh. Take",info.x+100,info.y+20);
    text("Ringu",info.x+100,info.y+40)
  
    text("DIGP",info.x+238,info.y+30)
  
    text("0360-",info.x+360,info.y+20);
    text("2215518",info.x+360,info.y+40);
  
    text("sit@aurnpol.nic.in",info.x+460,info.y+30);
    
    } 

  if(screenState=="CCInfo4"){

    fill("black");
    textFont(BOLD)
    textSize(60);
    text("ASSAM",displayWidth/2-100,displayHeight/2-300);
    
    textSize(20);
    text("4.",info.x-660,info.y+30)
    
    text("ASSAM",info.x-620,info.y+30)
   
    text("Shri Lachit",info.x-460,info.y+20);
    text("BAruah",info.x-460,info.y+40)
    
    text("DIGP",info.x-305,info.y+30)
    
    text("digp-cid@assampolice.gov.in",info.x-220,info.y+30)
    
    text("Sh. Surendra",info.x+100,info.y+20);
    text("Kumar",info.x+100,info.y+40)
    
    text("IGP",info.x+238,info.y+30)
    
    text("0361-",info.x+360,info.y+20);
    text("2524494",info.x+360,info.y+40);
    
    text("igp-cid@assampolice.gov.in",info.x+450,info.y+30);
      
   }    
   
   if(screenState=="CCInfo5"){

    fill("black");
    textFont(BOLD)
    textSize(60);
    text("BIHAR",displayWidth/2-100,displayHeight/2-300);
  
    textSize(20);
    text("5.",info.x-660,info.y+30)
  
    text("BIHAR",info.x-620,info.y+30)

    text("Sh. D",info.x-460,info.y+20);
    text("Amarcase",info.x-460,info.y+40)
  
    text("ASP",info.x-305,info.y+30)
  
    text("cybercell-bih@nic.in",info.x-220,info.y+30)
  
    text("Sh. Shiv",info.x+100,info.y+20);
    text("Kumar Jha",info.x+100,info.y+40)
  
    text("DIGP",info.x+238,info.y+30)
  
    text("0612-",info.x+360,info.y+20);
    text("2238098",info.x+360,info.y+40);
  
    text("dgp-bih@nic.in",info.x+460,info.y+30);
    
    }     

    if(screenState=="CCInfo6"){

      fill("black");
      textFont(BOLD)
      textSize(60);
      text("CHANDIGARH",displayWidth/2-200,displayHeight/2-300);
    
      textSize(20);
      text("6.",info.x-660,info.y+30)
    
      text("CHANDIGARH",info.x-620,info.y+30)
  
      text("Sh. Omvir",info.x-460,info.y+20);
      text("Singh Bishnoi",info.x-460,info.y+40)
    
      text("DIG",info.x-305,info.y+30)
    
      text("dig-chd@nic.in",info.x-220,info.y+30)
    
      text("Ms.Nilambari",info.x+100,info.y+20);
      text("Jagadale",info.x+100,info.y+40)
    
      text("SSP",info.x+238,info.y+30)
    
      text("0172-",info.x+360,info.y+20);
      text("2760001",info.x+360,info.y+40);
    
      text("pssput-chd@nic.in",info.x+460,info.y+30);
      
      }       

      if(screenState=="CCInfo7"){

        fill("black");
        textFont(BOLD)
        textSize(60);
        text("CHHATTISGARH",displayWidth/2-200,displayHeight/2-300);
      
        textSize(20);
        text("7.",info.x-660,info.y+30)
      
        text("CHHATTISGARH",info.x-625,info.y+30)
    
        text("Ms. Manisha",info.x-460,info.y+20);
        text("Thakur Rawte",info.x-460,info.y+40)
      
        text("AIGP",info.x-305,info.y+30)
      
        text("aigtech-phq.cg@gov.in",info.x-220,info.y+30)
      
        text("Sh. R K",info.x+100,info.y+20);
        text("Vij",info.x+100,info.y+40)
      
        text("SPL DGP",info.x+238,info.y+30)
      
        text("0771-",info.x+360,info.y+20);
        text("2511623",info.x+360,info.y+40);
      
        text("vijrk@gov.in",info.x+460,info.y+30);
        
        }             
  
  if(screenState=="CCInfo8"){

    fill("black");
    textFont(BOLD)
    textSize(60);
    text("DADRA & NAGAR HAVELI",displayWidth/2-350,displayHeight/2-300);
  
    textSize(20);
    text("8.",info.x-660,info.y+30)
  
    text("DADRA &",info.x-620,info.y+20)
    text("NAGAR HAVELI",info.x-620,info.y+40)
  
    text("Ms. Manasvi",info.x-460,info.y+20);
    text("Jain",info.x-460,info.y+40)
  
    text("Dy. SP",info.x-305,info.y+30)
  
    text("itcell-dnhp@mha.gov.in",info.x-220,info.y+30)
  
    text("Sh. Sharad",info.x+100,info.y+20);
    text("Bhaskar",info.x+100,info.y+40)
  
    text("SP",info.x+238,info.y+30)
  
    text("0260-",info.x+360,info.y+20);
    text("2643022",info.x+360,info.y+40);
  
    text("sp-sil-dnh@nic.in",info.x+460,info.y+30);
    
    }    
    
    if(screenState=="CCInfo9"){

      fill("black");
      textFont(BOLD)
      textSize(60);
      text("DAMAN & DIU",displayWidth/2-180,displayHeight/2-300);
    
      textSize(20);
      text("9.",info.x-660,info.y+30)
    
      text("DAMAN &",info.x-620,info.y+20)
      text("DIU",info.x-620,info.y+40)
    
      text("Sh. Hareshwar",info.x-460,info.y+20);
      text("V.Swami",info.x-460,info.y+40)
    
      text("SP",info.x-305,info.y+30)
    
      text("sp-diu-dd@nic.in",info.x-220,info.y+30)
    
      text("Sh. Vikramjit",info.x+100,info.y+20);
      text("Singh",info.x+100,info.y+40)
    
      text("SP",info.x+238,info.y+30)
    
      text("0260-",info.x+360,info.y+20);
      text("2250942",info.x+360,info.y+40);
    
      text("sp-dmn-dd@nic.in",info.x+460,info.y+30);
      
      }       

      if(screenState=="CCInfo10"){

        fill("black");
        textFont(BOLD)
        textSize(60);
        text("DELHI",displayWidth/2-100,displayHeight/2-300);
      
        textSize(20);
        text("10.",info.x-660,info.y+30)
      
        text("DELHI",info.x-620,info.y+30)
        
        text("Sh. Anyesh",info.x-460,info.y+20);
        text("Roy",info.x-460,info.y+40)
      
        text("DCP",info.x-305,info.y+30)
      
        text("ncrp.delhi@delhipolice.gov.in",info.x-220,info.y+30)
      
        text("Mr. Prem",info.x+100,info.y+20);
        text("Nath",info.x+100,info.y+40)
      
        text("Addl.CP",info.x+238,info.y+30)
      
        text("01120-",info.x+360,info.y+20);
        text("892633",info.x+360,info.y+40);
      
        text("addlcp.cybertech@-",info.x+460,info.y+20);
        text("delhipolice.gov.in",info.x+460,info.y+40);
        
        }  
        
        if(screenState=="CCInfo11"){

          fill("black");
          textFont(BOLD)
          textSize(60);
          text("GOA",displayWidth/2-70,displayHeight/2-300);
        
          textSize(20);
          text("11.",info.x-660,info.y+30)
        
          text("GOA",info.x-620,info.y+30)
          
          text("Sh Pankaj",info.x-460,info.y+20);
          text("Kumar Singh",info.x-460,info.y+40)
        
          text("DIGP",info.x-305,info.y+30)
        
          text("picyber@goapolice.gov.in",info.x-220,info.y+30)
        
          text("Sh.",info.x+100,info.y+20);
          text("Paramaditya",info.x+100,info.y+40)
        
          text("DIGP",info.x+238,info.y+30)
        
          text("0832-",info.x+360,info.y+20);
          text("2420883",info.x+360,info.y+40);
        
          text("digpgoa@goapolice.gov.in",info.x+460,info.y+20);
          
        }   
        
        if(screenState=="CCInfo12"){

          fill("black");
          textFont(BOLD)
          textSize(60);
          text("GUJARAT",displayWidth/2-130,displayHeight/2-300);
        
          textSize(20);
          text("12.",info.x-660,info.y+30)
        
          text("GUJARAT",info.x-620,info.y+30)
          
          text("Sh. Saurabh",info.x-460,info.y+20);
          text("Tolumbia",info.x-460,info.y+40)
        
          text("SP",info.x-305,info.y+30)
        
          text("cc-cid@gujarat.gov.in",info.x-220,info.y+30)
        
          text("Sh Subhash",info.x+100,info.y+20);
          text("Trivedi",info.x+100,info.y+40)
        
          text("IGP",info.x+238,info.y+30)
        
          text("0792-",info.x+360,info.y+20);
          text("3250798",info.x+360,info.y+40);
        
          text("cc-cid@gujarat.gov.in",info.x+460,info.y+20);
          
          }   
          
          if(screenState=="CCInfo13"){

            fill("black");
            textFont(BOLD)
            textSize(60);
            text("HARYANA",displayWidth/2-130,displayHeight/2-300);
          
            textSize(20);
            text("13.",info.x-660,info.y+30)
          
            text("HARYANA",info.x-620,info.y+30)
            
            text("Shri Pankaj",info.x-460,info.y+20);
            text("Nain",info.x-460,info.y+40)
          
            text("SP/Cyber",info.x-315,info.y+20)
            text("Crime",info.x-315,info.y+40)
          
            text("shocyberpkl.pol-hry@gov.in",info.x-220,info.y+30)
          
            text("Shri Desh",info.x+100,info.y+20);
            text("Raj Singh",info.x+100,info.y+40)
          
            text("ADGP",info.x+238,info.y+20)
            text("(Crime)",info.x+238,info.y+40)
          
            text("01733-",info.x+360,info.y+20);
            text("253230",info.x+360,info.y+40);
          
            text("adgp.crime@hry.nic.in",info.x+460,info.y+20);
            
            }    
            
            if(screenState=="CCInfo14"){

              fill("black");
              textFont(BOLD)
              textSize(60);
              text("HIMACHAL PRADESH",displayWidth/2-250,displayHeight/2-300);
            
              textSize(20);
              text("14.",info.x-660,info.y+30)
            
              text("HIMACHAL",info.x-620,info.y+20)
              text("PRADESH",info.x-620,info.y+40)
              
              text("Sh Narveer",info.x-460,info.y+20);
              text("Rathore",info.x-460,info.y+40)
            
              text("DSP",info.x-315,info.y+30)

              text("polcyberps-shi-hp@nic.in",info.x-220,info.y+30)
            
              text("Sh. Sandeep",info.x+100,info.y+20);
              text("Dhawal",info.x+100,info.y+40)
            
              text("SP",info.x+238,info.y+30)
            
              text("0177-",info.x+360,info.y+20);
              text("2627955",info.x+360,info.y+40);
            
              text("sp-cyber-hp@nic.in",info.x+460,info.y+20);
              
              }   
              
              if(screenState=="CCInfo15"){

                fill("black");
                textFont(BOLD)
                textSize(60);
                text("JAMMU & KASHMIR",displayWidth/2-250,displayHeight/2-300);
              
                textSize(20);
                text("15.",info.x-660,info.y+30)
              
                text("JAMMU &",info.x-620,info.y+20)
                text("KASHMIR",info.x-620,info.y+40)
                
                text("Sh Mukesh",info.x-460,info.y+20);
                text("Singh",info.x-460,info.y+40)
              
                text("IGP",info.x-315,info.y+30)
  
                text("igcrime-jk@nic.in",info.x-220,info.y+30)
              
                text("Sh. B ",info.x+100,info.y+20);
                text("Srinivas",info.x+100,info.y+40)
              
                text("ADGP",info.x+238,info.y+30)
              
                text("0191-",info.x+360,info.y+20);
                text("2582996",info.x+360,info.y+40);
              
                text("adgpcidjk@jkpolice.gov.in",info.x+460,info.y+20);
                
                }  
                
                if(screenState=="CCInfo16"){

                  fill("black");
                  textFont(BOLD)
                  textSize(60);
                  text("JHARKHAND",displayWidth/2-200,displayHeight/2-300);
                
                  textSize(20);
                  text("16.",info.x-660,info.y+30)
                
                  text("JHARKHAND",info.x-620,info.y+30)
                                  
                  text("Ms. Vijaya",info.x-460,info.y+20);
                  text("Laxmi",info.x-460,info.y+40)
                
                  text("SP",info.x-315,info.y+30)
    
                  text("cyberps@jhpolice.gov.in",info.x-220,info.y+30)
                
                  text("Sh. Ranjit ",info.x+100,info.y+20);
                  text("Prasad",info.x+100,info.y+40)
                
                  text("IGP",info.x+238,info.y+30)
                
                  text("0651-",info.x+360,info.y+20);
                  text("2490046",info.x+360,info.y+40);
                
                  text("ig-orgcid@jhpolice.gov.in",info.x+460,info.y+30);
                  
                  }   
                  
                  if(screenState=="CCInfo17"){

                    fill("black");
                    textFont(BOLD)
                    textSize(60);
                    text("KARNATAKA",displayWidth/2-200,displayHeight/2-300);
                  
                    textSize(20);
                    text("17.",info.x-660,info.y+30)
                  
                    text("KARNATAKA",info.x-620,info.y+30)
                                    
                    text("Sh M D",info.x-460,info.y+20);
                    text("SHARATH",info.x-460,info.y+40)
                  
                    text("SP (Cyber",info.x-315,info.y+20)
                    text("Crime",info.x-315,info.y+40)
                    text("Division)",info.x-315,info.y+60)
      
                    text("dspccd1.adm-kar@gov.in",info.x-220,info.y+30)
                  
                    text("Sh. T D ",info.x+100,info.y+20);
                    text("Pawar",info.x+100,info.y+40)
                  
                    text("DIGP",info.x+238,info.y+30)
                  
                    text("0802-",info.x+360,info.y+20);
                    text("2251817",info.x+360,info.y+40);
                  
                    text("digadmincod@ksp.gov.in",info.x+460,info.y+20);
                    
                    }     
                    
                    if(screenState=="CCInfo18"){

                      fill("black");
                      textFont(BOLD)
                      textSize(60);
                      text("KERALA",displayWidth/2-150,displayHeight/2-300);
                    
                      textSize(20);
                      text("18.",info.x-660,info.y+30)
                    
                      text("KERALA",info.x-620,info.y+30)
                                      
                      text("Sh",info.x-460,info.y+20);
                      text("Sreejith",info.x-460,info.y+40)
                    
                      text("IGP",info.x-315,info.y+30)
        
                      text("igpcrimes.pol@kerala.gov.in",info.x-220,info.y+30)
                    
                      text("Sh. Dr. Shaik",info.x+100,info.y+20);
                      text("Darvesh",info.x+100,info.y+40)
                    
                      text("ADGP",info.x+238,info.y+30)
                    
                      text("0471-",info.x+360,info.y+20);
                      text("2722215",info.x+360,info.y+40);
                    
                      text("adgpcrimes.pol@-",info.x+460,info.y+20);
                      text("kerala.gov.in",info.x+460,info.y+40);
                      
                      }    
                    
                      if(screenState=="CCInfo19"){

                        fill("black");
                        textFont(BOLD)
                        textSize(60);
                        text("LAKSHADWEEP",displayWidth/2-200,displayHeight/2-300);
                      
                        textSize(20);
                        text("19.",info.x-660,info.y+30)
                      
                        text("LAKSHADWEEP",info.x-620,info.y+30)
                                        
                        text("Sh Ramdulesh",info.x-460,info.y+20);
                        text("Meena",info.x-460,info.y+40)
                      
                        text("DSP",info.x-315,info.y+30)
          
                        text("lak-sop@nic.in	",info.x-220,info.y+30)
                      
                        text("Sh. Shibesh",info.x+100,info.y+20);
                        text("Singh",info.x+100,info.y+40)
                      
                        text("SSP",info.x+238,info.y+30)
                      
                        text("04896-",info.x+360,info.y+20);
                        text("262258",info.x+360,info.y+40);
                      
                        text("lak-sop@nic.in",info.x+460,info.y+20);
                        
                        } 

                        if(screenState=="CCInfo20"){

                          fill("black");
                          textFont(BOLD)
                          textSize(60);
                          text("MADHYA PRADESH",displayWidth/2-200,displayHeight/2-300);
                        
                          textSize(20);
                          text("20.",info.x-660,info.y+30)
                        
                          text("MADHYA",info.x-620,info.y+20);
                          text("PRADESH",info.x-620,info.y+40)
                                          
                          text("Sh Niranjan B",info.x-460,info.y+20);
                          text("Vayangankar",info.x-460,info.y+40)
                        
                          text("DIGP",info.x-315,info.y+30)
            
                          text("mpcyberpolice@mppolice.gov.in",info.x-220,info.y+30)
                        
                          text("Smt. Aruna",info.x+100,info.y+20);
                          text("Mohan Rao",info.x+100,info.y+40)
                        
                          text("SPL",info.x+238,info.y+20)
                          text("DGP",info.x+238,info.y+40)
                        
                          text("0755-",info.x+360,info.y+20);
                          text("2770248",info.x+360,info.y+40);
                        
                          text("spl.dgp-cybercell@-",info.x+460,info.y+20);
                          text("mppolice.gov.in",info.x+460,info.y+40);
                          
                          }   
                          
                          if(screenState=="CCInfo21"){

                            fill("black");
                            textFont(BOLD)
                            textSize(60);
                            text("MAHARASHTRA",displayWidth/2-200,displayHeight/2-300);
                          
                            textSize(20);
                            text("21.",info.x-660,info.y+30)
                          
                            text("MAHARASHTRA	",info.x-620,info.y+30);
                                            
                            text("Sh Balsing",info.x-460,info.y+20);
                            text("Rajput",info.x-460,info.y+40)
                          
                            text("SP",info.x-315,info.y+30)
              
                            text("sp.cbr-mah@gov.in",info.x-220,info.y+30)
                          
                            text("Sh. Brijesh",info.x+100,info.y+20);
                            text("Singh",info.x+100,info.y+40)
                          
                            text("SPL",info.x+238,info.y+20)
                            text("IGP/",info.x+238,info.y+40)
                            text("DGP",info.x+238,info.y+60)
                          
                            text("0222-",info.x+360,info.y+20);
                            text("2160080",info.x+360,info.y+40);
                          
                            text("ig.cbr-mah@gov.in",info.x+460,info.y+30);
                            
                            }   
                            
                            if(screenState=="CCInfo22"){

                              fill("black");
                              textFont(BOLD)
                              textSize(60);
                              text("MANIPUR",displayWidth/2-150,displayHeight/2-300);
                            
                              textSize(20);
                              text("22.",info.x-660,info.y+30)
                            
                              text("MANIPUR	",info.x-620,info.y+30);
                                              
                              text("Ms. Joyce",info.x-460,info.y+20);
                              text("Lalremmawi",info.x-460,info.y+40)
                            
                              text("SP",info.x-315,info.y+30)
                
                              text("cidcb-mn@nic.in",info.x-220,info.y+30)
                            
                              text("Sh. Themthing",info.x+100,info.y+20);
                              text("Ngashangva",info.x+100,info.y+40)
                            
                              text("DIGP",info.x+238,info.y+20)
                            
                              text("0385-",info.x+360,info.y+20);
                              text("2450573",info.x+360,info.y+40);
                            
                              text("themthing.ng@gov.in",info.x+460,info.y+30);
                              
                              }  
                              
                              if(screenState=="CCInfo23"){

                                fill("black");
                                textFont(BOLD)
                                textSize(60);
                                text("MEGHALAYA",displayWidth/2-150,displayHeight/2-300);
                              
                                textSize(20);
                                text("23.",info.x-660,info.y+30)
                              
                                text("MEGHALAYA	",info.x-620,info.y+30);
                                                
                                text("Sh M.G.T",info.x-460,info.y+20);
                                text("Sangma",info.x-460,info.y+40)
                              
                                text("SP",info.x-315,info.y+30)
                  
                                text("sspcid-meg@gov.in",info.x-220,info.y+30)
                              
                                text("Sh. F G",info.x+100,info.y+20);
                                text("Kharshiing",info.x+100,info.y+40)
                              
                                text("DIGP",info.x+238,info.y+20)
                              
                                text("0364-",info.x+360,info.y+20);
                                text("2550141",info.x+360,info.y+40);
                              
                                text("fg.kharshiing@ips.gov.in",info.x+460,info.y+30);
                                
                                }  
                                
                                if(screenState=="CCInfo24"){

                                  fill("black");
                                  textFont(BOLD)
                                  textSize(60);
                                  text("MIZORAM",displayWidth/2-150,displayHeight/2-300);
                                
                                  textSize(20);
                                  text("24.",info.x-660,info.y+30)
                                
                                  text("MIZORAM	",info.x-620,info.y+30);
                                                  
                                  text("Sh Lalhuliana.",info.x-460,info.y+20);
                                  text("Sanai",info.x-460,info.y+40)
                                
                                  text("SP",info.x-315,info.y+30)
                    
                                  text("cidcrime-mz@nic.in",info.x-220,info.y+30)
                                
                                  text("Sh.Balaji",info.x+100,info.y+20);
                                  text("Srivastava",info.x+100,info.y+40)
                                
                                  text("DGP",info.x+238,info.y+20)
                                
                                  text("0389-",info.x+360,info.y+20);
                                  text("2334682",info.x+360,info.y+40);
                                
                                  text("polmizo@rediffmail.com",info.x+460,info.y+30);
                                  
                                  }    
                                  
                                  if(screenState=="CCInfo25"){

                                    fill("black");
                                    textFont(BOLD)
                                    textSize(60);
                                    text("NAGALAND",displayWidth/2-150,displayHeight/2-300);
                                  
                                    textSize(20);
                                    text("25.",info.x-660,info.y+30)
                                  
                                    text("NAGALAND",info.x-620,info.y+30);
                                                    
                                    text("Sh Zekotso",info.x-460,info.y+20);
                                    text("Mero",info.x-460,info.y+40)
                                  
                                    text("IGP",info.x-315,info.y+30)
                      
                                    text("cybercrimeps-ngl@gov.in",info.x-220,info.y+30)
                                  
                                    text("Sh. Renchamo",info.x+100,info.y+20);
                                    text("P. Kikon",info.x+100,info.y+40)
                                  
                                    text("ADGP",info.x+238,info.y+20)
                                  
                                    text("0370-",info.x+360,info.y+20);
                                    text("2223897",info.x+360,info.y+40);
                                  
                                    text("renchamo.p@gov.in",info.x+460,info.y+30);
                                    
                                    }  
                                    
                                    if(screenState=="CCInfo26"){

                                      fill("black");
                                      textFont(BOLD)
                                      textSize(60);
                                      text("ODISHA",displayWidth/2-150,displayHeight/2-300);
                                    
                                      textSize(20);
                                      text("26.",info.x-660,info.y+30)
                                    
                                      text("ODISHA",info.x-620,info.y+30);
                                                      
                                      text("Sh Bijay",info.x-460,info.y+20);
                                      text("Kr Mallick",info.x-460,info.y+40)
                                    
                                      text("DSP",info.x-315,info.y+30)
                        
                                      text("dirscrb.odpol@nic.in",info.x-220,info.y+30)
                                    
                                      text("Sh. Madkar",info.x+100,info.y+20);
                                      text("Sandeep Sampat",info.x+100,info.y+40)
                                    
                                      text("SP",info.x+238,info.y+20)
                                    
                                      text("0671-",info.x+360,info.y+20);
                                      text("2306071",info.x+360,info.y+40);
                                    
                                      text("sp1cidcb.orpol@nic.in",info.x+460,info.y+30);
                                      
                                      }   
                                      
                                      if(screenState=="CCInfo27"){

                                        fill("black");
                                        textFont(BOLD)
                                        textSize(60);
                                        text("PUDUCHERRY",displayWidth/2-150,displayHeight/2-300);
                                      
                                        textSize(20);
                                        text("27.",info.x-660,info.y+30)
                                      
                                        text("PUDUCHERRY",info.x-620,info.y+30);
                                                        
                                        text("Sh Mahesh",info.x-460,info.y+20);
                                        text("kumar Barnwal",info.x-460,info.y+40)
                                      
                                        text("SSP",info.x-315,info.y+30)
                          
                                        text("cybercell-police.py@gov.in",info.x-220,info.y+30)
                                      
                                        text("Sh. Dr. VJ",info.x+100,info.y+20);
                                        text("Chandran",info.x+100,info.y+40)
                                      
                                        text("DIGP",info.x+238,info.y+20)
                                      
                                        text("0413-",info.x+360,info.y+20);
                                        text("2231386",info.x+360,info.y+40);
                                      
                                        text("dig.pon@nic.in",info.x+460,info.y+30);
                                        
                                        }   
                                        
                                        if(screenState=="CCInfo28"){

                                          fill("black");
                                          textFont(BOLD)
                                          textSize(60);
                                          text("PUNJAB",displayWidth/2-150,displayHeight/2-300);
                                        
                                          textSize(20);
                                          text("28.",info.x-660,info.y+30)
                                        
                                          text("PUNJAB",info.x-620,info.y+30);
                                                          
                                          text("Sh Inderbir",info.x-460,info.y+20);
                                          text("Singh",info.x-460,info.y+40)
                                        
                                          text("AIG",info.x-315,info.y+30)
                            
                                          text("aigcc@punjabpolice.gov.in",info.x-220,info.y+30)
                                        
                                          text("Sh. Hardial",info.x+100,info.y+20);
                                          text("Singh Mann",info.x+100,info.y+40)
                                        
                                          text("DIGP",info.x+238,info.y+20)
                                        
                                          text("0172-",info.x+360,info.y+20);
                                          text("2226258",info.x+360,info.y+40);
                                        
                                          text("aigcc@punjabpolice.gov.in",info.x+460,info.y+20);
                                          text("shocc@punjabpolice.gov.in",info.x+460,info.y+40);

                                          
                                          } 
                                          
                                          if(screenState=="CCInfo29"){

                                            fill("black");
                                            textFont(BOLD)
                                            textSize(60);
                                            text("RAJASTHAN",displayWidth/2-150,displayHeight/2-300);
                                          
                                            textSize(20);
                                            text("29.",info.x-660,info.y+30)
                                          
                                            text("RAJASTHAN",info.x-620,info.y+30);
                                                            
                                            text("Sh Umesh",info.x-460,info.y+20);
                                            text("Nitharwal",info.x-460,info.y+40)
                                          
                                            text("Dy. SP",info.x-315,info.y+20)
                                            text("CCPS",info.x-315,info.y+40)
                              
                                            text("ccps-raj@nic.in",info.x-220,info.y+30)
                                          
                                            text("Sh. Abhijeet",info.x+100,info.y+20);
                                            text("Singh",info.x+100,info.y+40)
                                          
                                            text("SP SOG",info.x+238,info.y+20)
                                          
                                            text("0141-",info.x+360,info.y+20);
                                            text("2309547",info.x+360,info.y+40);
                                          
                                            text("singh.kadian@ips.gov.in",info.x+460,info.y+30);

                                            }  
                                            
                                            if(screenState=="CCInfo30"){

                                              fill("black");
                                              textFont(BOLD)
                                              textSize(60);
                                              text("SIKKIM",displayWidth/2-150,displayHeight/2-300);
                                            
                                              textSize(20);
                                              text("30.",info.x-660,info.y+30)
                                            
                                              text("SIKKIM",info.x-620,info.y+30);
                                                              
                                              text("Sh Manish",info.x-460,info.y+20);
                                              text("Kumar Verma",info.x-460,info.y+40)
                                            
                                              text("SP",info.x-315,info.y+30);
                                
                                              text("spcid@sikkimpolice.nic.in",info.x-220,info.y+30)
                                            
                                              text("Sh. Sonam",info.x+100,info.y+20);
                                              text("Detchu Bhutia",info.x+100,info.y+40)
                                            
                                              text("DySP",info.x+238,info.y+20)
                                            
                                              text("03592-",info.x+360,info.y+20);
                                              text("204297",info.x+360,info.y+40);
                                            
                                              text("spcid@sikkimpolice.nic.in",info.x+460,info.y+30);
  
                                              }  

                                            if(screenState=="CCInfo31"){

                                              fill("black");
                                              textFont(BOLD)
                                              textSize(60);
                                              text("TAMIL NADU",displayWidth/2-200,displayHeight/2-300);
                                            
                                              textSize(20);
                                              text("31.",info.x-660,info.y+30)
                                            
                                              text("TAMIL NADU",info.x-620,info.y+30);
                                                              
                                              text("Tmt. N.S.",info.x-460,info.y+20);
                                              text("Nisha",info.x-460,info.y+40)
                                            
                                              text("SP",info.x-315,info.y+30);
                                
                                              text("sp1-ccdtnpolice@gov.in",info.x-220,info.y+30)
                                            
                                              text("Shri Shankar",info.x+100,info.y+20);
                                              text("K.",info.x+100,info.y+40)
                                            
                                              text("IGP",info.x+238,info.y+20)
                                            
                                              text("0442-",info.x+360,info.y+20);
                                              text("8447712",info.x+360,info.y+40);
                                            
                                              text("sp1-ccdtnpolice@gov.in",info.x+460,info.y+30);
  
                                              }                                                                                           

                                              if(screenState=="CCInfo32"){

                                                fill("black");
                                                textFont(BOLD)
                                                textSize(60);
                                                text("TELANGANA",displayWidth/2-200,displayHeight/2-300);
                                              
                                                textSize(20);
                                                text("32.",info.x-660,info.y+30)
                                              
                                                text("TELANGANA",info.x-620,info.y+30);
                                                                
                                                text("Sh B. Ravi",info.x-460,info.y+20);
                                                text("Kumar Reddy",info.x-460,info.y+40)
                                              
                                                text("DySP",info.x-315,info.y+30);
                                  
                                                text("ccps.cid@tspolice.gov.in",info.x-220,info.y+30)
                                              
                                                text("Smt. Swathi",info.x+100,info.y+20);
                                                text("Lakra",info.x+100,info.y+40)
                                              
                                                text("IGP",info.x+238,info.y+20)
                                              
                                                text("04023-",info.x+360,info.y+20);
                                                text("147604",info.x+360,info.y+40);
                                              
                                                text("igp_wpc@-",info.x+460,info.y+20);
                                                text("cid.tspolice.gov.in",info.x+460,info.y+40);
    
                                                }   
                                                
                                                if(screenState=="CCInfo33"){

                                                  fill("black");
                                                  textFont(BOLD)
                                                  textSize(60);
                                                  text("TRIPURA",displayWidth/2-150,displayHeight/2-300);
                                                
                                                  textSize(20);
                                                  text("33.",info.x-660,info.y+30)
                                                
                                                  text("TRIPURA",info.x-620,info.y+30);
                                                                  
                                                  text("Sh. Ajit",info.x-460,info.y+20);
                                                  text("Pratap Singh",info.x-460,info.y+40)
                                                
                                                  text("SP",info.x-315,info.y+30);
                                    
                                                  text("spcybercrime@tripurapolice.nic.in",info.x-220,info.y+30)
                                                
                                                  text("Shri Subrata",info.x+100,info.y+20);
                                                  text("Chakraborty",info.x+100,info.y+40)
                                                
                                                  text("AIGP",info.x+238,info.y+20)
                                                  text("Crime",info.x+238,info.y+40)
                                                
                                                  text("0381-",info.x+360,info.y+20);
                                                  text("2321741",info.x+360,info.y+40);
                                                
                                                  text("aigcrime@-",info.x+460,info.y+20);
                                                  text("tripurapolice.nic.in",info.x+460,info.y+40);
      
                                                  }  

                                                  if(screenState=="CCInfo34"){

                                                    fill("black");
                                                    textFont(BOLD)
                                                    textSize(60);
                                                    text("UTTARAKHAND",displayWidth/2-200,displayHeight/2-300);
                                                  
                                                    textSize(20);
                                                    text("34.",info.x-660,info.y+30)
                                                  
                                                    text("UTTARAKHAND",info.x-620,info.y+30);
                                                                    
                                                    text("Ms. Riddhima",info.x-460,info.y+20);
                                                    text("Aggarwal",info.x-460,info.y+40)
                                                  
                                                    text("DIG",info.x-315,info.y+30);
                                      
                                                    text("ccps.deh@uttarakhandpolice.uk.gov.in",info.x-220,info.y+30)
                                                  
                                                    text("Sh. Deepam",info.x+100,info.y+20);
                                                    text("Seth",info.x+100,info.y+40)
                                                  
                                                    text("IGP",info.x+238,info.y+20)
                                                  
                                                    text("0135-",info.x+360,info.y+20);
                                                    text("2712563",info.x+360,info.y+40);
                                                  
                                                    text("dgc-police-ua@nic.in",info.x+460,info.y+20);
                                                    
        
                                                    }  

                                                    if(screenState=="CCInfo35"){

                                                      fill("black");
                                                      textFont(BOLD)
                                                      textSize(60);
                                                      text("UTTAR PRADESH",displayWidth/2-200,displayHeight/2-300);
                                                    
                                                      textSize(20);
                                                      text("35.",info.x-660,info.y+30)
                                                    
                                                      text("UTTAR",info.x-620,info.y+20);
                                                      text("PRADESH",info.x-620,info.y+40);
                                                                      
                                                      text("Prof. Triveni",info.x-460,info.y+20);
                                                      text("Singh",info.x-460,info.y+40)
                                                    
                                                      text("SP",info.x-315,info.y+30);
                                        
                                                      text("sp-cyber.lu@up.gov.in",info.x-220,info.y+30)
                                                    
                                                      text("Dr. Kalluri",info.x+100,info.y+20);
                                                      text("SP Kumar",info.x+100,info.y+40)
                                                    
                                                      text("ADG",info.x+238,info.y+20)
                                                    
                                                      text("0522-",info.x+360,info.y+20);
                                                      text("2208598",info.x+360,info.y+40);
                                                    
                                                      text("ccpsstf.gb-up@gov.in",info.x+460,info.y+20);
                                                      
          
                                                      }  
  
                                                      if(screenState=="CCInfo36"){

                                                        fill("black");
                                                        textFont(BOLD)
                                                        textSize(60);
                                                        text("WEST BENGAL",displayWidth/2-200,displayHeight/2-300);
                                                      
                                                        textSize(20);
                                                        text("36.",info.x-660,info.y+30)
                                                      
                                                        text("WEST",info.x-620,info.y+20);
                                                        text("BENGAL",info.x-620,info.y+40);
                                                                        
                                                        text("Sh Dhruba",info.x-460,info.y+20);
                                                        text("Das",info.x-460,info.y+40)
                                                      
                                                        text("Addl. SP",info.x-315,info.y+30);
                                          
                                                        text("ccpwb@cidwestbengal.gov.in",info.x-220,info.y+30)
                                                      
                                                        text("Sh. Ashok",info.x+100,info.y+20);
                                                        text("Kumar Prasad",info.x+100,info.y+40)
                                                      
                                                        text("IGP",info.x+238,info.y+20)
                                                      
                                                        text("03324-",info.x+360,info.y+20);
                                                        text("791830",info.x+360,info.y+40);
                                                      
                                                        text("ig2@cidwestbengal.gov.in",info.x+460,info.y+20);
      
                                                        } 
                                      
  }