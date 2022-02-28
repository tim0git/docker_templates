# docker-go

### Team:
Digital Devops

### Application Name:
docker-go

### Description:
This pipeline builds a secure and tested docker image for use a pipeline build image.

If your application requires docker and the go binary this image would be suitable as an application base.

If you require the go binary **only**, this image would expose docker ports and services. Therefore, please build/select a secure image that does not contain docker. 

The image is re-built on a weekly cron job that updates and installs the latest dependencies. (Sunday at 0200hrs).

**Renovate** manages the automation of dockerfile updates and installing the latest version of software.

### Available applications:
1. Docker in docker
2. Go binary

### Location:
aws_ecr: ***************.dkr.ecr.eu-west-1.amazonaws.com/digital/devops/docker-go:latest

### Example’s:

GitLab Pipeline:
``` yaml
test-dockerfile:
  image: ***************.dkr.ecr.eu-west-1.amazonaws.com/digital/devops/docker-go:latest
# <-- we strongly recommend using the latest version number available in the ecr. for example 1.0.0
  stage: test
  cache: {}
  script:
    - cd tests
    - go get all
    - go test -run TestBuildsWithoutErrors
    - go test -run TestStartsWithoutErrors
```

Application base dockerfile:
``` dockerfile
FROM ***************.dkr.ecr.eu-west-1.amazonaws.com/digital/devops/docker-go:latest
# <-- we strongly recommend using the latest version number available in the ecr. for example 1.0.0

#Install binarys ect...
```

