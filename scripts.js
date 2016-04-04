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
// debugger;
    var inputTitle = $("input#listTitleID").val();
    var inputGame1 = $("input#gameOneID").val();
    var inputGame2 = $("input#gameTwoID").val();
    var inputGame3 = $("input#gameThreeID").val();
    var inputGame4 = $("input#gameFourID").val();
    var inputGame5 = $("input#gameFiveID").val();
    var inputGame6 = $("input#gameSixID").val();

    var listOfGames = new Games(inputTitle, inputGame1, inputGame2, inputGame3, inputGame4, inputGame5, inputGame6);

    $("ul#gameList").append("<li><span class='gameReveal'>" + listOfGames.titleList + "</span></li>");

    $(".gameReveal").last().click(function() {
      $("#showGames").show();
      $("#showGames h2").text(listOfGames.titleList);
      $(".gameOne").text(listOfGames.gameList1);
      $(".gameTwo").text(listOfGames.gameList2);
      $(".gameThree").text(listOfGames.gameList3);
      $(".gameFour").text(listOfGames.gameList4);
      $(".gameFive").text(listOfGames.gameList5);
      $(".gameSix").text(listOfGames.gameList6);
    });

    $(".gameOne").dblclick(function(){
      $(".gameOne").addClass("strikethrough");
    });

    $(".gameOne").click(function(){
      $(".gameOne").removeClass("strikethrough");
    });

    $(".gameTwo").dblclick(function(){
      $(".gameTwo").addClass("strikethrough");
    });

    $(".gameTwo").click(function(){
      $(".gameTwo").removeClass("strikethrough");
    });

    $(".gameThree").dblclick(function(){
      $(".gameThree").addClass("strikethrough");
    });

    $(".gameThree").click(function(){
      $(".gameThree").removeClass("strikethrough");
    });

    $(".gameFour").dblclick(function(){
      $(".gameFour").addClass("strikethrough");
    });

    $(".gameFour").click(function(){
      $(".gameFour").removeClass("strikethrough");
    });

    $(".gameFive").dblclick(function(){
      $(".gameFive").addClass("strikethrough");
    });

    $(".gameFive").click(function(){
      $(".gameFive").removeClass("strikethrough");
    });

    $(".gameSix").dblclick(function(){
      $(".gameSix").addClass("strikethrough");
    });

    $(".gameSix").click(function(){
      $(".gameSix").removeClass("strikethrough");
    });

    $("input#listTitleID").val("");
    $("input#gameOneID").val("");
    $("input#gameTwoID").val("");
    $("input#gameThreeID").val("");
    $("input#gameFourID").val("");
    $("input#gameFiveID").val("");
    $("input#gameSixID").val("");
  });
});
