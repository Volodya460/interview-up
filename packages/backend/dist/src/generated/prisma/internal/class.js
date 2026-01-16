"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.1.0",
    "engineVersion": "ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nenum QuestionCategory {\n  JS\n  HTML_CSS\n  React\n  Node\n}\n\nenum QuestionDifficulty {\n  junior\n  middle\n  senior\n}\n\nenum Role {\n  ADMIN\n  USER\n}\n\nmodel User {\n  id       String @id @default(uuid()) @db.Uuid\n  username String @unique\n  email    String @unique\n  password String\n  country  String\n\n  hashed_rt        String? @default(\"\")\n  verify           Boolean @default(false)\n  verificationCode String? @unique\n\n  role      Role     @default(USER)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  progress UserTestProgress[]\n}\n\nmodel Flashcard {\n  id         Int                 @id @default(autoincrement())\n  question   String\n  answer     String\n  category   QuestionCategory?\n  difficulty QuestionDifficulty?\n  createdAt  DateTime            @default(now())\n  updatedAt  DateTime            @updatedAt\n}\n\nmodel Test {\n  id          Int                 @id @default(autoincrement())\n  question    String\n  description String?\n  category    QuestionCategory?\n  difficulty  QuestionDifficulty?\n  options     TestOption[]        @relation(\"TestOptions\")\n  progress    UserTestProgress[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel TestOption {\n  id        Int     @id @default(autoincrement())\n  text      String\n  isCorrect Boolean @default(false)\n\n  test     Test               @relation(\"TestOptions\", fields: [testId], references: [id], onDelete: Cascade)\n  testId   Int\n  progress UserTestProgress[]\n}\n\nmodel UserTestProgress {\n  id Int @id @default(autoincrement())\n\n  userId           String   @db.Uuid\n  testId           Int\n  selectedOptionId Int\n  isCorrect        Boolean\n  answeredAt       DateTime @default(now())\n\n  user           User       @relation(fields: [userId], references: [id], onDelete: Cascade)\n  test           Test       @relation(fields: [testId], references: [id], onDelete: Cascade)\n  selectedOption TestOption @relation(fields: [selectedOptionId], references: [id], onDelete: Cascade)\n\n  @@unique([userId, testId])\n  @@index([userId])\n  @@index([testId])\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"country\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hashed_rt\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"verify\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"progress\",\"kind\":\"object\",\"type\":\"UserTestProgress\",\"relationName\":\"UserToUserTestProgress\"}],\"dbName\":null},\"Flashcard\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"question\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"answer\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"category\",\"kind\":\"enum\",\"type\":\"QuestionCategory\"},{\"name\":\"difficulty\",\"kind\":\"enum\",\"type\":\"QuestionDifficulty\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Test\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"question\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"category\",\"kind\":\"enum\",\"type\":\"QuestionCategory\"},{\"name\":\"difficulty\",\"kind\":\"enum\",\"type\":\"QuestionDifficulty\"},{\"name\":\"options\",\"kind\":\"object\",\"type\":\"TestOption\",\"relationName\":\"TestOptions\"},{\"name\":\"progress\",\"kind\":\"object\",\"type\":\"UserTestProgress\",\"relationName\":\"TestToUserTestProgress\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"TestOption\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"text\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isCorrect\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"test\",\"kind\":\"object\",\"type\":\"Test\",\"relationName\":\"TestOptions\"},{\"name\":\"testId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"progress\",\"kind\":\"object\",\"type\":\"UserTestProgress\",\"relationName\":\"TestOptionToUserTestProgress\"}],\"dbName\":null},\"UserTestProgress\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"testId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"selectedOptionId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"isCorrect\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"answeredAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToUserTestProgress\"},{\"name\":\"test\",\"kind\":\"object\",\"type\":\"Test\",\"relationName\":\"TestToUserTestProgress\"},{\"name\":\"selectedOption\",\"kind\":\"object\",\"type\":\"TestOption\",\"relationName\":\"TestOptionToUserTestProgress\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map