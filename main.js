var baseUrl = "http://query.yahooapis.com/v1/public/yql";
var yqlQueryUrl = baseUrl + "?q=" + encodeURI(yqlQuery) + "&format=json";
var httpClient = new HttpClient();
var getMethod = new GetMethod(yqlQueryUrl);

httpClient.executeMethod(getMethod);

print("" + getMethod.getResponseBodyAsString())