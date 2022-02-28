# docker-trivy

### Team:
Digital Devops

### Application Name:
docker-trivy

### Description:
This pipeline builds a secure and tested docker image for use as a pipeline test image.

The image is re-built on a weekly cron job that updates and installs the latest dependencies. (Sunday at 0200hrs).

**Renovate** manages the automation of dockerfile updates and installing the latest version of software.

### Available applications:
1. Docker in docker
2. trivy binary

### Location:
aws_ecr: ***************.dkr.ecr.eu-west-1.amazonaws.com/digital/devops/docker-trivy:latest

### Example’s:

**GitLab Pipeline:**

Trivy Config scan for IAC files such as Terraform and dockerfiles ect...
``` yaml
test-dockerfile:
  image: ***************.dkr.ecr.eu-west-1.amazonaws.com/digital/devops/docker-trivy:latest
# <-- we strongly recommend using the latest version number available in the ecr. for example 1.0.0
  stage: test
  cache: {}
  script:
    - trivy config .
```
Trivy Container scan...
``` yaml
trivy-pipeline-base-image-container-analysis:
    image: ***************.dkr.ecr.eu-west-1.amazonaws.com/digital/devops/docker-trivy:latest
    # <-- we strongly recommend using the latest version number available in the ecr. for example 1.0.0
    stage: container-analysis
    cache: {}
    artifacts:
      paths:
        - artifacts
    script:
      - docker load --input artifacts/$CI_COMMIT_SHORT_SHA.tar
      - docker image ls
      - trivy $APPLICATION_NAME:$CI_COMMIT_SHORT_SHA
```
