pipeline {
    agent any

    tools {nodejs "node"}

    parameters {
      choice(name: 'ENVIRONMENT', choices: ['qa', 'dev'], description: 'Choose required environment')
      choice(name: 'SUITE', choices: ['smoke', 'regression'], description: 'Choose required test suite')
    }

    environment {
        TEST_CREDENTIALS = credentials('id_1')
        TEST_USER_EMAIL = "$TEST_CREDENTIALS_USR"
        TEST_USER_PASSWORD = "$TEST_CREDENTIALS_PSW"
    }

    stages{
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Installing packages') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps{
                script{
                    bat("npm run test-${params.SUITE}-${params.ENVIRONMENT}")
                }
            }
        }
    }

    post {
        always {
            publishHTML target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'mochawesome-report',
                reportFiles: 'mochawesome.html',
                reportName: 'TestReport'
            ]
        }
    }
}
