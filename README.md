# CI/CD With GitHub Actions, Google Artifact Registry (GAR), and Google Cloud Run (GCR)

This project automates the deployment process using **GitHub Actions** for continuous integration and continuous deployment (CI/CD). The Docker image is built and pushed to **Google Artifact Registry (GAR)**, from where it is deployed to **Google Cloud Run**.

This diagram visually explains the flow from GitHub to Cloud Run using Docker containers stored in Google Artifact Registry.

<img width="1152" alt="gcp_bann" src="https://github.com/user-attachments/assets/5b2879e5-8f6c-4770-8e9c-592b6d59c1ce">

## 📊 Architecture Overview

The architecture follows a streamlined CI/CD pipeline:

1. **GitHub**: Hosts the source code.
2. **GitHub Actions**: Automates the building and pushing of Docker images.
3. **Google Artifact Registry (GAR)**: Stores the Docker images.
4. **Cloud Run**: Pulls the images from GAR and deploys them.

### Architecture Flow:
- **Code Push** ➡️ GitHub triggers GitHub Actions.
- **Build & Push Docker Image** ➡️ Docker image is built and pushed to GAR.
- **Deploy** ➡️ Cloud Run pulls the latest image from GAR and deploys it.

### CI/CD Workflow Steps:

| Step                       | Description                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| **1. Code Push**            | Code pushed to the `master` branch triggers the CI/CD workflow in GitHub Actions. |
| **2. Build Docker Image**   | GitHub Actions builds a Docker image from the codebase.                     |
| **3. Push to GAR**          | The built image is pushed to **Google Artifact Registry** for storage.      |
| **4. Deploy to Cloud Run**  | Cloud Run pulls the image from GAR and redeploys the app.                   |
| **5. Build Summary**        | GitHub Actions generates a summary for the completed build and deployment.  |

### 🔗 Component Overview

| Component                    | Description                                                                                          |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| **GitHub**                    | The source control platform where code is stored and updated.                                        |
| **GitHub Actions**            | The CI/CD pipeline that automates building, pushing, and deploying the Docker image.                 |
| **Docker**                    | A platform used to build the application into a containerized image.                                 |
| **Google Artifact Registry**  | Stores the Docker image for future deployments.                                                      |
| **Cloud Run**                 | A fully managed service that hosts and scales containerized applications automatically.              |

## ⚙️ Deployment Workflow

1. **Code Push**: When you push code to the `master` branch, the CI/CD workflow is triggered.
2. **GitHub Actions**: Automatically builds the Docker image and pushes it to GAR.
3. **Cloud Run**: Fetches the latest image from GAR and deploys it.

### 🚀 Key Benefits of this CI/CD Setup:

- **Automated Deployment**: Every push to `master` triggers an automated build and deployment process.
- **Scalability**: Cloud Run auto-scales based on traffic, ensuring smooth performance without modifying the pipeline.
- **Versioned Docker Images**: Each build is tagged with a unique Git commit SHA to maintain versioning.
- **Containerized Workflow**: Leveraging Docker ensures consistency between development and production environments.

## 👨‍💻 How to Use

1. **Clone the repository** and push your code changes to the `master` branch.
2. The GitHub Actions pipeline will automatically build and push the Docker image to GAR.
3. Cloud Run will pull the latest image and redeploy the app.
4. You can view the build summary in the GitHub Actions page for every commit.
