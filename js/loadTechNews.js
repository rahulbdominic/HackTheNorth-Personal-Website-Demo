function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function shuffle(titles, content) {
    var random = getRandomInt(titles.length);
    $("#rss-title").html(titles[random]);
    $("#rss-content").html(content[random]);

    setTimeout(function(){ shuffle(titles, content) }, 3000);    
}

var readyFn = function() {
	//feed to parse
	var feed = "https://feeds.feedburner.com/TheHackersNews?format=xml";
	
    var url = 'https://www.yahoo.com/news/rss/world';
    $.ajax({
        type: 'GET',
        url: "https://api.rss2json.com/v1/api.json?rss_url=" + feed,
        dataType: 'jsonp',
        success: function(data) {
            titles = []
            content = []
            data.items.forEach(function (el) { // or "item" or whatever suits your feed
                titles.push(el.title);
                content.push(el.description);
            });
                
            shuffle(titles, content);
        }
    });
};

document.addEventListener("DOMContentLoaded", readyFn)
