# docker-go

### Team:
Digital Devops

### Application Name:
tomcat9-jdk8-corretto

### Description:
This pipeline builds a secure and tested docker image for use a application base image.

If your application requires tomcat9.x.x and jdk8-coretto this image would be suitable as an application base.

If you require jdk8-coretto, this image would expose tomcat ports and services. Therefore, please build/select a secure image that does not contain tomcat. 

The image is re-built on a monthly cron job that updates and installs the latest dependencies. (28th at 0200hrs).

**Renovate** manages the automation of dockerfile updates and installing the latest version of software.

### Available applications:
1. jdk8-coretto
2. Apache tomcat 9.x.x

### Location:

aws_ecr: ***************.dkr.ecr.eu-west-1.amazonaws.com/digital/devops/tomcat9-jdk8-corretto:latest

### Example:

Application base dockerfile:
``` dockerfile
FROM ***************.dkr.ecr.eu-west-1.amazonaws.com/digital/devops/tomcat9-jdk8-corretto:latest
# <-- we strongly recommend using the latest version number available in the ecr. for example 1.0.0

#Install binarys ect...
```