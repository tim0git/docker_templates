FROM <read through cache>/aquasec/trivy:0.23.0 as TRIVY

FROM <read through cache>/docker:20.10.12-alpine3.14

COPY --from=TRIVY /usr/local/bin/trivy ./usr/local/bin/trivy

LABEL digital-devops-docker-trivy="v1.0.1"

RUN apk -U upgrade

RUN apk --no-cache add ca-certificates

#RUN addgroup -S docker && adduser -S appuser -G docker
#
#USER appuser
