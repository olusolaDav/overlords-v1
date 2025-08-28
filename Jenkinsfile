pipeline {
    agent any

    environment {
        NODE_ENV = "production"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Node.js') {
            steps {
                sh '''
                  # Install Node.js if not available
                  if ! command -v node > /dev/null; then
                    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
                    sudo apt-get install -y nodejs
                  fi
                  node -v
                  npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci || npm install'
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
