# Static Website Deployment with AWS

## Overview

This repository contains the files for a static website deployed on AWS. The website is hosted using Amazon S3, distributed via CloudFront, and secured with an SSL/TLS certificate from AWS Certificate Manager. The domain `my-devops-lab.online` is managed through AWS Route 53, and updates are automatically pushed to S3 from this GitHub repository.

## Setup and Configuration

### 1. Static Website on Amazon S3

- **Bucket Name**: `resume.my-devops-lab.online`
- **Bucket Configuration**: 
  - Configured for static website hosting.
  - The `index.html` file serves as the main entry point of the website.

### 2. Domain Configuration

- **Domain Provider**: GoDaddy
- **Domain**: `my-devops-lab.online`
- **DNS Management**: 
  - The domain is configured to use AWS Route 53 for DNS management.
  - Route 53 handles DNS routing to the CloudFront distribution.

### 3. CloudFront Distribution

- **Distribution Configuration**:
  - Points to the S3 bucket as the origin.
  - Configured for HTTP/HTTPS traffic.
  - Uses a custom SSL/TLS certificate from AWS Certificate Manager.

### 4. SSL/TLS Certificate

- **Certificate Provider**: AWS Certificate Manager
- **Certificate**: Issued for `my-devops-lab.online`

### 5. Continuous Deployment

- **GitHub Integration**:
  - Files in this repository are automatically pushed to the S3 bucket on commits to the `main` branch.
  - This is managed using GitHub Actions.

### 6. Workflow Automation

- **GitHub Actions Workflow**:
  - Defined in `.github/workflows/deploy-to-s3.yml`
  - Automates deployment by syncing changes to the S3 bucket whenever changes are pushed to the `main` branch.

### Example Workflow YAML

Here is a sample GitHub Actions workflow file that handles deployment:

```yaml
name: Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    # Checkout the code from the repository
    - name: Checkout code
      uses: actions/checkout@v3

    # Configure AWS credentials
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: eu-central-1

    # Sync files to S3
    - name: Sync files to S3
      run: |
        aws s3 sync . s3://${{ secrets.S3_BUCKET_NAME }} --exclude ".git/*" --delete
# Static-web
