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
exports.FlashcardsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FlashcardsService = class FlashcardsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.flashcard.create({
            data: dto,
        });
    }
    findAll(category, difficulty) {
        return this.prisma.flashcard.findMany({
            where: {
                ...(category ? { category } : {}),
                ...(difficulty ? { difficulty } : {}),
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const flashcard = await this.prisma.flashcard.findUnique({
            where: { id },
        });
        if (!flashcard) {
            throw new common_1.NotFoundException(`Flashcard with id ${id} not found`);
        }
        return flashcard;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.flashcard.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.flashcard.delete({
            where: { id },
        });
        return { message: `Flashcard with id ${id} deleted` };
    }
};
exports.FlashcardsService = FlashcardsService;
exports.FlashcardsService = FlashcardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FlashcardsService);
//# sourceMappingURL=flashcards.service.js.map