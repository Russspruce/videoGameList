//business
function Games(title, game1, game2, game3, game4, game5, game6) {
  this.titleList = title;
  this.gameList1 = game1;
  this.gameList2 = game2;
  this.gameList3 = game3;
  this.gameList4 = game4;
  this.gameList5 = game5;
  this.gameList6 = game6;
}

//user interface

$(document).ready(function(){
  $("form#newGameList").submit(function(event) {
    event.preventDefault();

    var inputTitle = $("input#titleList").val();
    var inputGame1 = $("input#gameOne").val();
    var inputGame2 = $("input#gameTwo").val();
    var inputGame3 = $("input#gameThree").val();
    var inputGame4 = $("input#gameFour").val();
    var inputGame5 = $("input#gameFive").val();
    var inputGame6 = $("input#gameSix").val();

    var listOfGames = new Games(inputGame1, inputGame2, inputGame3, inputGame4, inputGame5, inputGame6);

    $("ul#gameList").append("<li><span class='gameReveal'>"+listOfGames.listTitle+"</span></li>");

    $(".gameReveal").last().click(function() {
      $("#showGames").show();
      $("#showGames h2").text(listOfGames.listTitle);
      $(".gameOne").text(listOfGames.game1);
      $(".gameTwo").text(listOfGames.game2);
      $(".gameThree").text(listOfGames.game3);
      $(".gameFour").text(listOfGames.game4);
      $(".gameFive").text(listOfGames.game5);
      $(".gameSix").text(listOfGames.game6);

    });

    $("input#titleList").val("");
    $("input#gameOne").val("");
    $("input#gameTwo").val("");
    $("input#gameThree").val("");
    $("input#gameFour").val("");
    $("input#gameFive").val("");
    $("input#gameSix").val("");
  });
});
