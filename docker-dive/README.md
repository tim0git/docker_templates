# docker-dive

### Team:
Digital Devops

### Application Name:
docker-dive

### Description:
This pipeline builds a secure and tested docker image for use a pipeline build image.

The image is re-built on a weekly cron job that updates and installs the latest dependencies. (Sunday at 0200hrs).

**Renovate** manages the automation of dockerfile updates and installing the latest version of software.

### Available applications:
1. Docker in docker
2. dive binary

### Location:
aws_ecr: ***************.dkr.ecr.eu-west-1.amazonaws.com/digital/devops/docker-dive:latest

### Example’s:

GitLab Pipeline:
``` yaml
dive-pipeline-base-image-container-analysis:
    image: ***************.dkr.ecr.eu-west-1.amazonaws.com/digital/devops/docker-dive:latest
    # <-- we strongly recommend using the latest version number available in the ecr. for example 1.0.0
    stage: container-analysis
    cache: {}
    artifacts:
      paths:
        - artifacts
    script:
      - export CI=true
      - docker load --input artifacts/$CI_COMMIT_SHORT_SHA.tar
      - docker image ls
      - dive $APPLICATION_NAME:$CI_COMMIT_SHORT_SHA
```


