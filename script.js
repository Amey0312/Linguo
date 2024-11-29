function textToAudio(){
   let msg = document.querySelector('.text').textContent;
   let voice = new SpeechSynthesisUtterance()
   voice.lang = "en-US"
   voice.text = msg
   voice.volume = 1
   voice.rate = 0.5
   voice.pitch = 1

   speechSynthesis.speak(voice)
 


}