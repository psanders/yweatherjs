#!/usr/bin/jjs -cp ./lib/httpcore-4.4.4.jar:./lib/commons-logging-1.2.jar:./lib/commons-codec-1.9.jar:./lib/commons-httpclient-3.1.jar

var HttpClient = Java.type('org.apache.commons.httpclient.HttpClient');
var GetMethod = Java.type('org.apache.commons.httpclient.methods.GetMethod');

if(arguments.length < 1) {
    print("Use: You must provide a yql query.\nExample ./app.js -- 'select * from weather.forecast where location=90210'");
} else {
    var yqlQuery = arguments[0];
    load('main.js');
}
