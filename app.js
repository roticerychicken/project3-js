/*
 $( function() {
    var dateFormat = "yy/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
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
*/
  $(document).ready(function () { 


    var strObj = "";


      $("#loadData").click(function() {


       $("#main li").remove();
        


        
        if(document.getElementById("from").value != "" && document.getElementById("to").value != "") { 

          var date1 = document.getElementById("from").value;
          var date2 = document.getElementById("to").value;

          var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date="+date1+"&end_date="+date2+"&api_key=8JKWyLMEukb15NV4yy658pIo59dMOpePKRcNywOx";
          
        } 

      $.getJSON(url,function(json){
        console.log("got json");

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
  });
