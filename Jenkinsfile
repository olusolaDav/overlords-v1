pipeline {
  agent any

  tools {
    nodejs "Node20"   // 👈 must match the name you set in Manage Jenkins → Tools
  }

  environment {
    NODE_ENV = 'production'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh '''
          if [ -f package-lock.json ]; then
            npm ci || npm install --legacy-peer-deps
          else
            npm install --legacy-peer-deps
          fi
        '''
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
