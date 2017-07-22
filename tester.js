
$.get('https://www.reddit.com/r/aww/.json', function(responseBody){


    console.log(responseBody.data.children[0].data.author);
    var listItem = {};
    $('responseBody.data.children[0].data.author').forEach(function() {
    listItem.push[$(this)];
});
  });
