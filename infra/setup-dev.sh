#!/bin/bash
# PT-BR: Instala dependências para todos os serviços
# EN: Install dependencies for all services

pushd backend && npm install && popd
pushd frontend-web && npm install && popd
pushd frontend-mobile && npm install && popd
