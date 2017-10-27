'use strict';

angular.module('alunos')
    .component("alunosComponent", {
        templateUrl: 'modules/alunos/alunos.template.html',
        controllerAs: 'alunosController',
        controller: ['Alunos', '$scope', '$location',
            function alunosController(Alunos, $scope, $location) {
                Alunos.query().$promise.then(res => {
                    $scope.alunos = res;
                });

                $scope.setActive = function(aluno) {
                    $scope.activeMenu = aluno
                }
            }
        ],
    });