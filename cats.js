console.log("ready")
$(document).ready( function () {

  $(".summon-cats").click(function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'get',
      data: {},
      datatype: 'json',
    }).done( function (responseData){
      console.log("request finished");
      counter = 0
      var kitties = responseData['cats'];
      while (counter < kitties.length) {
        console.log(counter);
        catUrl = kitties[counter]['photo'];
        $('#cat'+(counter+1)).html('<img src='+catUrl+'>')
        counter ++;
      }
    }

  );


});

});
