$(function() {
  $(".stateDropDown").change(function(){
    var state=$(this).val();
    function fillCityDropDown(stateCityOption){
    $.each(stateCityOption, function(val, text){
      $('.cityDropDown').append(
      $('<option></option>').val(val).html(text));
    });
    }
    function clearStateDropDown(){
      $('.cityDropDown option:gt(0)').remove();
    }
    if(state=='NEWYORK'){
      clearStateDropDown();
      var newyorkCityOption={
        NEWYORKCITY:'New York City',
        Buffalo:'Buffalo',
        Albany:'Albany'
      };
      fillCityDropDown(newyorkCityOption);
    } else if(state=='COLORADO') {
      clearStateDropDown();
      var coloradoCityOption={
        DENVER:'Denver',
        BOULDER:'Boulder',
        FORTCOLLINS:'Fort Collins'
      };
      fillCityDropDown(coloradoCityOption);
    } else if(state=='CALIFORNIA') {
      clearStateDropDown();
      var californiaStateOption={
        SANFRANCISCO:'San Francisco',
        SANDIEGO:'San Diego',
        LOSANGELES:'Los Angeles'
      };
      fillCityDropDown(californiaStateOption);
    }
    var stateOptions = {
      val1 : 'text1',
      val2 : 'text2'
    };
  });
});
