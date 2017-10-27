// angular.module('alunos')
//     .controller("alunosController", ['Alunos', '$scope', '$location',
//         function alunosController(Alunos, $scope, $location) {
//             Alunos.query().$promise.then(res => {
//                 $scope.alunos = res;
//             });

//             $scope.isActive = function (viewLocation) {
//                 var active = (viewLocation === $location.path());
//                 return active;
//             }
//         }
//     ]);