'use strict';

angular.module("atividades")
    .factory("Atividades", ['$resource',
        function ($resource) {
            return $resource(apiUrl + "/alunos/id/atividades?page", {}, {
                query: {
                    method: "GET"
                }
            });
        }
    ]);