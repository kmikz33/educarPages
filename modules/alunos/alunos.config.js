angular.module('alunos')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
        .state('alunos', {
            url: '/alunos/:id',
            views: {
                'atividades': {
                    templateUrl: 'modules/alunos/atividades.template.html',
                    controller: 'atividadesCtrl'
                }
            }
        })
        .state('alunos.atividades', {
            url: '/atividades/:atividadeId'
        })
    }])