angular.module('alunos')
    .controller("atividadesCtrl", [
        'Atividades', '$scope', '$location', 
        function atividadesController(Atividades, $scope, $location) {
            let itemAdicional;
            Atividades.query().$promise
                .then(res => {
                    $scope.resumo = res.resumo;
                    $scope.atividades = res.atividades;
                    itemAdicional = $scope.atividades[0];
                })
                .catch(err => {
                    $scope.resumo = 'error';
                    $scope.atividades = 'error atividades';
                })

                $scope.setActive = function(atividade) {
                    $scope.activeMenu = atividade;
                }

                $scope.addMore = function() {
                    $scope.atividades.push(itemAdicional)
                }
        }
    ]);
