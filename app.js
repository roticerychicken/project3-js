  

 

$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
});


 var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2016-11-20&end_date=2016-11-27&api_key=8JKWyLMEukb15NV4yy658pIo59dMOpePKRcNywOx";
  $(document).ready(function() {
    console.log("on clicked");
    $.getJSON(url,function(json){
      console.log("got json");

      var strObj = "";

      //near eath objects is a dictionary   and it also has a function containing a date and an objecy
      $.each(json.near_earth_objects, function(date, objs){
        
        strObj += "<li class=date><b>"+date+"</b></li>";
          //.each is a loop
          $.each(objs, function(i, obj) {
            //string append all that text in the parentheses to the string and then at the end of the loop we will put the enire string in a div problem solved biatch
            strObj += "<li> Astroid Name: " + obj.name + "</li>";
          });  
          $("#main").append("<div class=post>" + strObj + "</div>");
          strObj = "";
      });
   });
});
