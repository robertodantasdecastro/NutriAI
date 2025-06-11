#!/bin/bash
# Initializes git repo and pushes to remote

git init
branch=$(git symbolic-ref --short HEAD 2>/dev/null || echo main)

git add .
git commit -m "Initial commit"
git branch -M $branch
git remote add origin "$1"
git push -u origin $branch
