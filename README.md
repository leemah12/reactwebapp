# Leemah Store

Leemah Store is an e-commerce web application built to provide a seamless online shopping experience. This project utilizes modern containerization and CI/CD practices, including Docker and GitHub Actions, with deployment on Kubernetes via Argo CD.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [CI/CD Pipeline](#cicd-pipeline)
  - [Docker Setup](#docker-setup)
  - [GitHub Actions Workflow](#github-actions-workflow)
- [Kubernetes Deployment](#kubernetes-deployment)
- [Argo CD Configuration](#argo-cd-configuration)
- [Contributing](#contributing)
- [License](#license)

## Overview

Leemah Store is a containerized application designed for scalability, maintainability, and ease of deployment. The application is pushed to GitHub, where it is tested, built, and automatically deployed to Docker Hub. It is then deployed on a Kubernetes cluster with continuous deployment managed by Argo CD.

## Features

- **User-Friendly Interface:** Easy navigation and intuitive design.
- **Containerization:** Dockerized for quick and isolated deployment.
- **CI/CD Integration:** Automated workflows using GitHub Actions.
- **Kubernetes Deployment:** Managed by Argo CD for seamless updates.
- **Scalability:** Deployable on cloud or on-premise Kubernetes clusters.

## Project Structure

```plaintext
leemah-store/
├── src/                # Application source code
├── Dockerfile          # Docker image configuration
├── .github/
│   └── workflows/      # CI/CD workflows with GitHub Actions
├── k8s/                # Kubernetes manifest files
└── README.md           # Project documentation
