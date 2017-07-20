$.get('https://www.reddit.com/r/aww/.json', function(responseBody){
    console.log(responseBody.data.children);
  });
