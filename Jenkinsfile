pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:lts-alpine'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      environment {
        CI = 'true'
      }
      steps {
        sh 'npm test'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deliver') {
      steps {
        input ' Finished using the web site? (Click "Proceed" to continue)'
      }
    }

  }
}