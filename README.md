# Yahoo! Weather JS

An experiment using Oracle Nashorn and Gradle as dependencies provider as well as Yahoo's Weather Service
and YQL(Yahoo! Query Language) to obtain the weather information.

## Requirement 

* Java 1.8+
* Gradle

## Getting Started

To download repo and get the dependencies

```bash
git clone https://github.com/psanders/yweatherjs.git
cd yweatherjs
gradle getDeps
```

## Run the App

Just run the `./app` with any yql as parameter. For example

```bash
./app 'select * from weather.forecast where location=90210'
```

For more yql examples go to https://developer.yahoo.com/weather/
