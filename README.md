# Yahoo Weather JS

A quick experiment using Oracle Nashorn and Gradle as dependencies provider.

# Requirement 

* Java 1.8+

## Getting Started

To download and get the dependencies 

```bash
git clone https://github.com/psanders/yweatherjs.git
cd yweatherjs
gradlew getDeps
```

## Run the app

Just run the `./app.js` with any yql as parameter. For example

```bash
./app.js -- 'select * from weather.forecast where location=90210'
```

