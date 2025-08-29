pipeline {
  agent any

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
          echo "📦 Installing dependencies (with dev)..."
          npm install --legacy-peer-deps --include=dev
        '''
      }
    }

    stage('Lint') {
      steps {
        sh '''
          echo "🔍 Running lint..."
          npm run lint
        '''
      }
    }

    stage('Build') {
      steps {
        sh '''
          echo "🏗️ Building project..."
          npm run build
        '''
      }
    }

    stage('Start') {
      when {
        branch 'main'
      }
      steps {
        sh '''
          echo "🚀 Starting app..."
          npm run start &
        '''
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
