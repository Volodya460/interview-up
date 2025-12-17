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
exports.TestsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TestsService = class TestsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureExactlyOneCorrect(options) {
        const correctCount = options.filter((o) => o.isCorrect).length;
        if (correctCount === 0) {
            throw new common_1.BadRequestException('At least one option must be correct');
        }
        if (correctCount > 1) {
            throw new common_1.BadRequestException('Only one option can be correct');
        }
    }
    create(dto) {
        this.ensureExactlyOneCorrect(dto.options);
        return this.prisma.test.create({
            data: {
                question: dto.question,
                description: dto.description,
                category: dto.category,
                difficulty: dto.difficulty,
                options: {
                    create: dto.options.map((o) => ({
                        text: o.text,
                        isCorrect: o.isCorrect,
                    })),
                },
            },
            include: { options: true },
        });
    }
    findAll() {
        return this.prisma.test.findMany({
            include: { options: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const test = await this.prisma.test.findUnique({
            where: { id },
            include: { options: true },
        });
        if (!test) {
            throw new common_1.NotFoundException(`Test with id ${id} not found`);
        }
        return test;
    }
    async update(id, dto) {
        await this.findOne(id);
        this.ensureExactlyOneCorrect(dto.options);
        return this.prisma.test.update({
            where: { id },
            data: {
                question: dto.question,
                description: dto.description,
                category: dto.category,
                difficulty: dto.difficulty,
                options: {
                    deleteMany: {},
                    create: dto.options.map((o) => ({
                        text: o.text,
                        isCorrect: o.isCorrect,
                    })),
                },
            },
            include: { options: true },
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.test.delete({ where: { id } });
        return { message: `Test with id ${id} deleted` };
    }
};
exports.TestsService = TestsService;
exports.TestsService = TestsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TestsService);
//# sourceMappingURL=tests.service.js.map