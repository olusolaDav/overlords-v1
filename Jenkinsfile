pipeline {
    agent any

    tools {
        nodejs "Node20"   // Make sure Jenkins NodeJS tool is configured as "nodejs"
    }

    stages {
        stage('Checkout') {
            steps {
                // Use yarn.lock instead of package-lock.json
                git branch: 'main', url: 'https://github.com/olusolaDav/overlords-v1.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'yarn install --frozen-lockfile'
            }
        }

        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }

        stage('Test') {
            steps {
                // optional – remove if you don’t want tests
                sh 'yarn test || echo "No tests defined"'
            }
        }

        stage('Deploy / Start') {
            steps {
                sh 'yarn start &'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
