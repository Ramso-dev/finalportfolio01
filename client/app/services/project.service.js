"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core"); //to Inject service as dependency
var http_1 = require("@angular/http"); //to use http
require("rxjs/add/operator/map"); //to listen requests and send data as observable
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        console.log('Projects service initialized...');
    }
    ProjectService.prototype.getProjects = function () {
        // return this.http.get('http://localhost:3000/api/projects')
        return this.http.get('/api/projects')
            .map(function (res) { return res.json(); }); //return as observable
    };
    return ProjectService;
}());
ProjectService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map