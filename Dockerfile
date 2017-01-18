FROM java:latest

RUN wget https://services.gradle.org/distributions/gradle-3.3-all.zip
RUN unzip gradle-3.3-all.zip
RUN mkdir -p /app/gradle
RUN mv gradle-3.3/ /opt/gradle

ENV GRADLE_HOME=/opt/gradle
ENV PATH=$PATH:$GRADLE_HOME/bin
