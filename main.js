var HttpClient = org.apache.commons.httpclient.HttpClient
var GetMethod = org.apache.commons.httpclient.methods.GetMethod

if(arguments.length < 1) {
    print("Use: You must provide a yql query.\nExample ./app 'select * from weather.forecast where location=90210'")
    exit()
} else {
    var yqlQuery = arguments[0]
}

let baseUrl = "http://query.yahooapis.com/v1/public/yql"
let yqlQueryUrl = baseUrl + "?q=" + encodeURI(yqlQuery) + "&format=json"
let httpClient = new HttpClient()
let getMethod = new GetMethod(yqlQueryUrl)

httpClient.executeMethod(getMethod)

print(getMethod.getResponseBodyAsString())
