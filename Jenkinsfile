pipeline {
    agent any

    tools {
        nodejs 'Node 22.13.1'
    }

    environment {
        CYPRESS_BASE_URL = 'https://opensource-demo.orangehrmlive.com'
    }

    stages {
        stage('Clonar projeto') {
            steps {
                git branch: 'main', url: 'https://github.com/kfdev1996/automation_SampleApp_Jenkins.git'
            }
        }

        stage('Instalar dependências') {
            steps {
                sh 'rm -rf node_modules'
                sh 'npm install'
                 sh 'npm install cypress --save-dev'
            }
        }

        stage('Preparar Cypress') {
            steps {
                // Garante permissão de execução ao binário do Cypress e trata erro de permissão
                sh '''
                    chmod +x ./node_modules/.bin/cypress || true
                    npx cypress install || npx cypress verify
                '''
            }
        }

        stage('Executar testes com Cypress (Electron)') {
            steps {
                sh '''
                    echo "Verificando navegadores disponíveis:"
                    npx cypress info

                    echo "Executando testes com Cypress + Electron..."
                    npx cypress run --browser electron --config video=true,chromeWebSecurity=false,viewportWidth=1280,viewportHeight=720 --env allure=true
                '''
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizado.'
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.png, cypress/videos/**/*.mp4, cypress/results/**/*.xml', allowEmptyArchive: true
        }
        failure {
            echo 'O pipeline falhou. Verifique os arquivos de vídeo/screenshot.'
        }
    }
}
