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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashcardsController = void 0;
const common_1 = require("@nestjs/common");
const flashcards_service_1 = require("./flashcards.service");
const flashcards_dto_1 = require("./dto/flashcards.dto");
const enums_1 = require("../generated/prisma/enums");
let FlashcardsController = class FlashcardsController {
    flashcardsService;
    constructor(flashcardsService) {
        this.flashcardsService = flashcardsService;
    }
    create(dto) {
        return this.flashcardsService.create(dto);
    }
    findAll(category, difficulty) {
        return this.flashcardsService.findAll(category, difficulty);
    }
    findOne(id) {
        return this.flashcardsService.findOne(id);
    }
    update(id, dto) {
        return this.flashcardsService.update(id, dto);
    }
    remove(id) {
        return this.flashcardsService.remove(id);
    }
};
exports.FlashcardsController = FlashcardsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [flashcards_dto_1.CreateFlashcardDto]),
    __metadata("design:returntype", void 0)
], FlashcardsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('category')),
    __param(1, (0, common_1.Query)('difficulty')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FlashcardsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FlashcardsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, flashcards_dto_1.UpdateFlashcardDto]),
    __metadata("design:returntype", void 0)
], FlashcardsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FlashcardsController.prototype, "remove", null);
exports.FlashcardsController = FlashcardsController = __decorate([
    (0, common_1.Controller)('flashcards'),
    __metadata("design:paramtypes", [flashcards_service_1.FlashcardsService])
], FlashcardsController);
//# sourceMappingURL=flashcards.controller.js.map