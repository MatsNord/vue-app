pipeline {
  agent any
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

    stage('Deliver') {
      steps {
        input ' Finished using the web site? (Click "Proceed" to continue)'
      }
    }

  }
}