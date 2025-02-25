pipeline {
    agent any

    stages {
        stage('Install Node.js and Dependencies') {
            steps {
                script {
                    sh '''#!/bin/bash
                    # Ensure you have root access
                    echo "Installing Node.js and npm..."

                    # Install Node.js 20.x
                    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
                    apt-get update
                    apt-get install -y nodejs

                    # Verify installation
                    node -v
                    npm -v

                    # Now, install your project dependencies
                    npm ci
                    '''
                }
            }
        }
    }
}