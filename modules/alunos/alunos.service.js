'use strict';

angular.module("alunos")
    .factory("Alunos", ['$resource',
        function($resource) {
            return $resource(apiUrl + "/alunos", {}, {
                query: {
                    method: "GET",
                    params: {},
                    isArray: true
                }
            });
        }
    ])
    .factory("Atividades", ['$resource',
    function ($resource) {
        return $resource(apiUrl + "/alunos/id/atividades?page", {}, {
            query: {
                method: "GET"
            }
        });
    }
]);