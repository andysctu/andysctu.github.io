function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function getID(){
    var name = httpGet('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/ihatedisgame?api_key=a6e94ee5-fa0b-41e1-9cac-271e7212b875');
    alert(name);
    return name;
}
