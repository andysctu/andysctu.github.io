function getID(){
    var name = httpGet('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/ihatedisgame?api_key=a6e94ee5-fa0b-41e1-9cac-271e7212b875');
    alert(name.ihatedisgame.id);
    return name;
}

function getRunes(){
    aClient = new HttpClient();
    aClient.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/48357/runes?api_key=a6e94ee5-fa0b-41e1-9cac-271e7212b875', function(response) {
        // do something with response
        alert(response)
    });
    
}

function httpGet(theUrl) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}


