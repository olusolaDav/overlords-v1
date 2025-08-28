pipeline {
    agent any

    tools {
        nodejs "NodeJS"  // Make sure "NodeJS" is configured in Jenkins Global Tool Configuration
    }

    environment {
        NODE_ENV = "production"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'   // Use npm install if no package-lock.json
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Start') {
            when {
                branch 'main'
            }
            steps {
                sh 'npm run start &'
            }
        }

        /*
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploy step goes here (e.g., Vercel CLI, Docker build & push, or SSH to server)'
                // Example for Vercel: sh 'npx vercel --prod --token=$VERCEL_TOKEN'
            }
        }
        */
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
        failure {
            echo 'Pipeline failed ❌'
        }
        success {
            echo 'Pipeline succeeded ✅'
        }
    }
}
