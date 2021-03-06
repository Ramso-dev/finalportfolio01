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
var core_1 = require("@angular/core");
var project_service_1 = require("../../services/project.service");
var TasksComponent = (function () {
    function TasksComponent(ProjectService) {
        var _this = this;
        this.ProjectService = ProjectService;
        this.ProjectService.getProjects()
            .subscribe(function (projects) {
            _this.projects = projects;
            //console.log(projects);
            _this.category = "java";
        });
    }
    TasksComponent.prototype.getCategory = function (category) {
        // console.log("getCategory");console.log(category);
        this.category = category;
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tasks',
        templateUrl: "tasks.component.html",
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map