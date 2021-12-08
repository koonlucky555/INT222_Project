pipeline {
    agent any
    
    stages {

        stage('stop then remove container and image') {
            steps {
                script {
                    def imageExists = sh(script: 'docker images -q frontend', returnStdout: true) == ""
                    println imageExists

                    if( !imageExists ){
                           sh 'docker stop frontend'
                           sh 'docker rm frontend'
                           sh 'docker image rm frontend'
                    }else {
                        echo 'skip to next stage'
                    }
                }
            }
        }

        stage('remove all data') {
            steps {
                sh 'rm -rf *'
            }
        }

        stage('git clone') {
            steps {
                git branch: 'master',
                    credentialsId: 'INT222jenkins',
                    url: 'https://github.com/INT222IntegratedProject/FrontEnd.git'
            }
        }

        stage('start the contianer') {
            steps {
                sh 'docker-compose up -d'
            }
        }

    }
}
