# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.155.1/containers/javascript-node/.devcontainer/base.Dockerfile

ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN su node -c "npm install -g npm-check-updates"
