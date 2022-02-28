package test

import (
	"github.com/gruntwork-io/terratest/modules/docker"
	"github.com/stretchr/testify/assert"
	"testing"
)

const tag = "digital-devops-docker-go"

func TestBuildsWithoutErrors(t *testing.T) {
	buildOptions := &docker.BuildOptions{
		Tags: []string{tag},
	}

	err := docker.BuildE(t, "..", buildOptions)

	if err != nil {
		errorString := err.Error()
		t.Logf("Expected no errors but got %s", errorString)
		t.Fail()
	}

	assert.Equal(t, nil, err)
}
