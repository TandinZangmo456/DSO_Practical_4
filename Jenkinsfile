pipeline {
  agent any
  tools {
    nodejs 'NodeJS-24.0.2'  // Use exact tool name from Jenkins config
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
      post {
        always {
          junit 'junit.xml'  // Path from jest-junit
        }
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo "Deploying to staging..."'
        // add your deploy steps (e.g., Docker, SSH)
      }
    }
  }
}
