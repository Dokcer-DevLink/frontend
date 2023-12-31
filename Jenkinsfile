pipeline {
    agent any

    tools {
        nodejs 'nodejs-18.18.2'
    }

    environment {
        dockerHubRegistry = 'lordofkangs'
        DOCKERHUB_CREDENTIALS = 'dockerhub' // Replace with your Jenkins credentials ID for DockerHub..
        IMAGE_NAME = 'nextJs' // Your DockerHub repository name
        IMAGE_TAG = 'tagname' // Replace with your desired tag name, or use dynamic values like ${BUILD_NUMBER}
        REGISTRY = 'docker.io' // DockerHub registry
        githubCredential = 'github_cred'
        gitEmail = 'moonsung0331@gmail.com'
        gitName = 'moonstar0331'
    }

    stages {
        stage('Checkout') {
            steps {
                // Git 저장소 체크아웃
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // sh 'npm install'
                sh 'yarn install'
            }
        }

        stage('Build') {
            steps {
                sh 'yarn run build' // 또는 'yarn build' (yarn 사용시)
            }
        }

        stage('Docker Image Build') {
            steps {
                // Build Docker image with tag
                //sh "docker build -t $REGISTRY/$IMAGE_NAME:$IMAGE_TAG ."
                sh "docker build -t ${dockerHubRegistry}/${IMAGE_NAME}:${currentBuild.number} ."
                sh "docker build -t ${dockerHubRegistry}/${IMAGE_NAME}:latest ."
            }
        }

        stage('Docker Image Push') {
            steps {
                //script {
                    // Login to DockerHub
                    withDockerRegistry([ credentialsId: DOCKERHUB_CREDENTIALS, url: "" ]){
                    sh "docker push ${dockerHubRegistry}/${IMAGE_NAME}:${currentBuild.number}"
                    sh "docker push ${dockerHubRegistry}/${IMAGE_NAME}:latest"

                    sleep 10 /* Wait uploading */                    
                }
            }
            post {
                failure {
                  echo 'Docker Image Push failure !'
                  // sh "docker rmi ${dockerHubRegistry}/${IMAGE_NAME}:${currentBuild.number}"
                  // sh "docker rmi ${dockerHubRegistry}/${IMAGE_NAME}:latest"
                  sh "docker image prune -f"
                }
                success {
                    echo 'Docker image push success !'
                    // sh "docker rmi ${dockerHubRegistry}/${IMAGE_NAME}:${currentBuild.number}"
                    // sh "docker rmi ${dockerHubRegistry}/${IMAGE_NAME}:latest"
                    sh "docker image prune -f"

                }
            }
        }

        stage('K8S Manifest Update') {
            steps {
                sh "ls"
                sh 'mkdir -p gitOpsRepo'
                dir('gitOpsRepo') {
                    git branch: 'main',
                        credentialsId: 'githubCredential',
                        url: 'https://github.com/Dokcer-DevLink/DevOps.git'

                    sh "git config --global user.email ${gitEmail}"
                    sh "git config --global user.name ${gitName}"
                    
                    sh "sed -i 's/nextJs:.*\$/nextJs:${currentBuild.number}/' ./eks/frontend-service.yaml"
                    sh "git add ."
                    sh "git commit -m '[UPDATE] Auth-Service K8S ${currentBuild.number} image versioning'"
                    withCredentials([gitUsernamePassword(credentialsId: githubCredential, gitToolName: 'git-tool')]) {
                        sh "git remote set-url origin https://github.com/Dokcer-DevLink/DevOps"
                        sh "git push -u origin main"
                    }
                }
            }
            post {
                failure {
                    echo 'K8S Manifest Update failure '
                }
                success {
                    echo 'K8S Manifest Update success !'
                }
            }
        }
    }
    post {
        always {
            // DockerHub 로그아웃
            sh "docker logout"
        }
    }
}    
