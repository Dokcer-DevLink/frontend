pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub' 
        IMAGE_NAME = 'lordofkangs/frontend' // Your DockerHub repository name
        IMAGE_TAG = 'tagname' // Replace with your desired tag name, or use dynamic values like ${BUILD_NUMBER}
        REGISTRY = 'docker.io' // DockerHub registry
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the Git repository
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build' // or 'yarn build' if you use yarn
            }
        }
        stage('Docker Build and Push') {
            steps {
                // Docker 이미지 빌드
                sh "docker build -t $IMAGE_NAME:$IMAGE_TAG ."
        
            steps {
                withDockerRegistry([ credentialsId: DOCKERHUB_CREDENTIALS, url: "" ]){
                    sh "docker push $IMAGE_NAME:$IMAGE_TAG"                
                }
            }
        }
    }

    
    post {
        always {
            sh "docker logout $REGISTRY"
        }
    }
}
