pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        tool(name: 'NodeJS14', type: 'nodejs')
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