#!/usr/bin/env bash
docker-compose up --exit-code-from test
docker-compose rm -f
