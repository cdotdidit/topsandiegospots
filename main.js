$(document).ready(function() {
    $.getJSON("data.json", function(data){ 
    var array = []
    $.each(data, function(_key, val ){
        array.push("<tr><td>" + val.name + "</td><td>" + val.description + "</td><td><a href =www.google.com/maps?q=" + val.location +"> Get there. </a></td></tr>");
        console.log(array);
    })
    $('table').append(array);
    
    }
    
    )
    })