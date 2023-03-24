pipeline {
    agent any
    
    environment {
        LOGIN = 'skachan'
        PASSWORD = '123456789ASD'
        PROJECT = 'frontend_jenkins'
        VERSION = 'latest'
        DOCKERHUB_CREDENTIALS = credentials('skachan-dockerhub')
    }
    stages {

        stage('Dependencies, Test, Lint and Build') { 
            agent {
                docker {
                    image 'node:lts-bullseye-slim' 
                    args '-p 3000:3000'
                }
            }
            stages {
                stage('Install dependences')
                {
                    steps {
                    sh 'npm install'
                    }
                }

                stage('Lint')
                {
                    steps {
                    sh 'npm run lint'
                    }
                }

                stage('Tests')
                {
                    steps {
                    sh 'echo "tests"'
                    }
                }  
                
                stage('Build')
                {
                    steps {
                    sh 'npm run build'
                    }
                }     
                
                         
            }
        
        }

        stage('Deliver') { 
            agent none
                steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin' 
                sh 'echo "Login completed"'

                sh 'docker build -t $DOCKERHUB_CREDENTIALS_USR/$PROJECT:$VERSION .'
                sh 'echo "Build completed"'

                sh 'docker push $DOCKERHUB_CREDENTIALS_USR/$PROJECT:$VERSION'
                sh 'echo "Push completed"'

                sh 'docker image rm $DOCKERHUB_CREDENTIALS_USR/$PROJECT:$VERSION'
                }
        
        }
    }

}