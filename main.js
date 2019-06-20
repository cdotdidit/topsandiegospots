$(document).ready(function($) {
    // write your code here
    $.getJSON( "data.json", function(data) {
        var item = []
        $.each(data, function (_key, val ) {
            item.push("<tr> <td>" + val.name + "</td>" + "<td>" + val.description + "</td>" + 
            "<td> <button id= 'buttons'><a href='https://www.google.com/maps?q=" + val.location + "'>Find Me Here!</a></button> </td> </tr>");
        })
        $('#table').append(item);
    })
    })