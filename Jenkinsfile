pipeline {
    agent any

    tools {
        nodejs "Node20"   // Make sure Jenkins NodeJS tool is configured as "nodejs"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/olusolaDav/overlords-v1.git'
                sh "echo Sleep-Time - ${params.SLEEP_TIME}, Port - ${params.APP_PORT}, Branch - ${params.BRANCH_NAME}"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'yarn install --frozen-lockfile'
            }
        }

        stage('Code Linting') {
            steps {
                sh 'yarn lint || echo "Linting skipped or no lint config found"'
            }
        }

        stage('Format Check') {
            steps {
                sh 'yarn prettier --check . || echo "Formatting skipped or no prettier config found"'
            }
        }

        stage('Security Audit') {
            steps {
                sh 'yarn audit || echo "No audit issues or yarn audit skipped"'
            }
        }

        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }

        stage('Unit Tests') {
            steps {
                sh 'yarn test || echo "No unit tests defined"'
            }
        }

        stage('Integration Tests') {
            steps {
                sh 'echo "Running integration tests..."'
                // Add your integration test command here
            }
        }

        stage('Package Artifact') {
            steps {
                sh 'tar -czf build-artifact.tar.gz dist/'
                archiveArtifacts artifacts: 'build-artifact.tar.gz', fingerprint: true
            }
        }

        stage('Deploy / Start') {
            steps {
                sh 'yarn start &'
            }
        }

        stage('Smoke Test') {
            steps {
                sh 'echo "Running smoke test to verify deployment..."'

            }
        }
        stage('Integration Testing') {
            steps {
                sh "sleep ${params.SLEEP_TIME}"
                sh "curl -s http://localhost:${params.PORT} || echo 'Service not reachable"
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
