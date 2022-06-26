var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
recognition.onresult=function(event){
    console.log(event);
    Content=event.results[0][0].transcript.toLowerCase();
    if(Content=="selfie")
    {
        speak();
    }
}

Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach("#camera");

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
    setTimeout(function()
    {
        img_id="selfie1";
        takeSnapshot();
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }    ,5000);

    setTimeout(function()
    {
        img_id="selfie2";
        takeSnapshot();
        speak_data = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }    ,10000);

    setTimeout(function()
    {
        img_id="selfie3";
        takeSnapshot();
    }    ,15000);

}

function takeSnapshot()
{
    Webcam.snap(function(data_uri){
   if(img_id=="selfie1")
   { 
   document.getElementById("result1").innerHTML = "<img id='selfie1' src='"+data_uri+"'>";
   } 
   
   if(img_id=="selfie2")
   { 
   document.getElementById("result2").innerHTML = "<img id='selfie2' src='"+data_uri+"'>";
   } 

   if(img_id=="selfie3")
   { 
   document.getElementById("result3").innerHTML = "<img id='selfie3' src='"+data_uri+"'>";
   } 
    });

}
