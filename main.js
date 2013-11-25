// mock Ajax (mockjax)
$.mockjax({
  url: '/api/country',
  contentType: 'application/json; charset=utf-8',
  responseText: JSON.stringify([
    {
      label: 'United States',
      value: 'us'
    },
    {
      label: 'Canada',
      value: 'ca'
    }
  ])
});

$.mockjax({
  url: '/api/industry',
  contentType: 'application/json; charset=utf-8',
  responseText: JSON.stringify([
    {
      label: 'Transportation',
      sectorId: 'trans'
    },
    {
      label: 'Web Development',
      sectorId: 'web'
    },
    {
      label: 'Food Services',
      sectorId: 'food'
    }
  ])
});

$.mockjax({
  url: '/api/offices',
  contentType: 'application/json; charset=utf-8',
  response: function(settings){
    var data = settings.data;
    var response = [];

    if(data.cId == 'us'){
      switch(data.iID){
        case 'trans':
        case 'web':
          response = [
            {
              label: 'New York City',
              value: 'New York City'
            },
            {
              label: 'San Francisco',
              value: 'San Francisco'
            }
          ];
          break;
        case 'food':
          response = [
            {
              label: 'Kansas City',
              value: 'Kansas City'
            }
          ];
          break;
      }
    }
    else if(data.cId == 'ca'){
      switch(data.iID){
        case 'trans':
        case 'web':
          response = [
            {
              label: 'Toronto',
              value: 'Toronto'
            },
            {
              label: 'Montreal',
              value: 'Montreal'
            }
          ];
          break;
        case 'food':
          response = [
            {
              label: 'Vancouver',
              value: 'Vancouver'
            }
          ];
          break;
      }
    }

    this.responseText = JSON.stringify(response);
  }
});

$(function() {
  $("#city").hide();
  $(".inputs").change(function() {
    $("#city").hide();
  });
  $('#dropper').cascadingDropdown({
    selectBoxes: [
      {
        selector: '.country',
        paramName: 'cId'
      },
      {
        selector: '.industry',
        paramName: 'iID'
      },
      {
        selector: '.city',
        requires: ['.country', '.industry'],
        requireAll: true,
        url: '/api/offices',
        textKey: 'label',
        valueKey: 'value',
        onChange: function(value){
          $("#city").show();
          $("#city").html(value);
        }
      }
    ]
  });
});
