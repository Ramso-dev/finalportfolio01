"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProjectFilter = (function () {
    function ProjectFilter() {
    }
    ProjectFilter.prototype.transform = function (projects, arg1) {
        if (projects != undefined) {
            //arg1 -> category of project
            //arg2 -> index of project
            //filter projects by chosen category(arg1) and then order them in descending index order 
            return projects.filter(function (project) { return project.category == arg1; }).sort(function (project1, project2) { return Number(project2.index) - Number(project1.index); });
        }
    };
    return ProjectFilter;
}());
ProjectFilter = __decorate([
    core_1.Pipe({
        name: 'projectfilter',
    })
], ProjectFilter);
exports.ProjectFilter = ProjectFilter;
//# sourceMappingURL=projectfilter.js.map