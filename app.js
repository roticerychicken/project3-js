  var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2016-11-20&end_date=2016-11-27&api_key=8JKWyLMEukb15NV4yy658pIo59dMOpePKRcNywOx";
         $(document).ready(function() {
            console.log("on clicked");
            $.getJSON(url,function(json){
               console.log("got json");
            //near eath objects is a dictionary   and it also has a function containing a date and an objecy
            $.each(json.near_earth_objects, function(date, objs){
               $("#main").append("<li class=date><b>"+date+"</b></li>");
               //.each is a loop
            $.each(objs, function(i, obj) {
                $("#main").append("<div class=asteroid-name><li> astroid name: "+obj.name+"</li></div>");
         });
      });
   });
});