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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTestDto = exports.CreateTestDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../../generated/prisma/enums");
class CreateTestOptionDto {
    text;
    isCorrect;
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreateTestOptionDto.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateTestOptionDto.prototype, "isCorrect", void 0);
class CreateTestDto {
    question;
    description;
    category;
    difficulty;
    options;
}
exports.CreateTestDto = CreateTestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], CreateTestDto.prototype, "question", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTestDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.QuestionCategory),
    __metadata("design:type", String)
], CreateTestDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.QuestionDifficulty),
    __metadata("design:type", String)
], CreateTestDto.prototype, "difficulty", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(2),
    (0, class_validator_1.ArrayMaxSize)(4),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateTestOptionDto),
    __metadata("design:type", Array)
], CreateTestDto.prototype, "options", void 0);
class UpdateTestDto extends CreateTestDto {
}
exports.UpdateTestDto = UpdateTestDto;
//# sourceMappingURL=create-test.dto.js.map