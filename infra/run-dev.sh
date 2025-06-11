#!/bin/bash
# PT-BR: Executa ambiente de desenvolvimento
# EN: Run development environment

concurrently "npm --prefix backend run dev" "npm --prefix frontend-web run dev" "npm --prefix frontend-mobile start"
