
$(document).ready(function(){
    $.get('https://www.reddit.com/r/aww/.json', function(responseBody){

        responseBody.data.children.forEach(function(item, index){
            var tag ='<img src = "'+item.data.thumbnail+'" height = "200px" width = "290px" />'+
            'Author: '+item.data.author+
            '<legend>'+"Title: "+item.data.title+'</legend>';
            $('#fs'+index).html(tag);

        });

 });


});
