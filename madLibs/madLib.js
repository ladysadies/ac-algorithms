$(document).ready(function(){

    function makeMadLib (e) {
           
               e.preventDefault()
               var userInputNoun = $("#noun").val();
               var userInputAdj = $("#adjective").val();
               var userInputPerson = $("#person").val();
   
               $("div.story").append("<p> Once upon a time, there was a " + userInputNoun + " that went to vote. The " + userInputNoun + " was very " + userInputAdj + ". However, when the " + userInputAdj + " " + userInputNoun + " arrived at the polling station, the poll volunteer informed them that this was a private polling station reserved only for " + userInputPerson + ". The " + userInputAdj + " " + userInputNoun + " promptly claimed to be " + userInputPerson + ", voted, and proudly donned the 'I Voted.' sticker. </p>")
   
           }
   $("#lib-button").on( "click", function(e){
   makeMadLib(e)
   });
   });