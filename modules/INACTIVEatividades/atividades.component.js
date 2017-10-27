'use strict';

angular.module("atividades")
    .component("atividades", {
        templateUrl: "modules/atividades/atividades.template.html",
        controller: function atividadesController(Atividades, $scope, $location) {
            Atividades.query().$promise
                .then(res => {
                    $scope.resumo = res.resumo;
                    $scope.atividades = res.atividades;
                    // $scope.acontecimentos = res.atividades.acontecimentos;
                    console.log($scope.atividades);
                    console.log($scope.resumo);
                })
                .catch(err => {
                    $scope.resumo = 'error';
                    $scope.atividades = 'error atividades';
                })

            $scope.isActive = function(viewLocation) {
                var active = (viewLocation === $location.path());
                return active;
            }
        },
        controllerAs: 'atividade'
    });