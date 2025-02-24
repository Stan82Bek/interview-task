pipeline {
    agent { docker { image 'mcr.microsoft.com/playwright:v1.49.1-jammy' } }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx cucumber-js --tags @SMOKE'
            }
        }
    }
}
