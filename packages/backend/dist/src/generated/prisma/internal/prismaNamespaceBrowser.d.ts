import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Flashcard: "Flashcard";
    readonly Test: "Test";
    readonly TestOption: "TestOption";
    readonly UserTestProgress: "UserTestProgress";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly email: "email";
    readonly password: "password";
    readonly country: "country";
    readonly hashed_rt: "hashed_rt";
    readonly verify: "verify";
    readonly verificationCode: "verificationCode";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const FlashcardScalarFieldEnum: {
    readonly id: "id";
    readonly question: "question";
    readonly answer: "answer";
    readonly category: "category";
    readonly difficulty: "difficulty";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FlashcardScalarFieldEnum = (typeof FlashcardScalarFieldEnum)[keyof typeof FlashcardScalarFieldEnum];
export declare const TestScalarFieldEnum: {
    readonly id: "id";
    readonly question: "question";
    readonly description: "description";
    readonly category: "category";
    readonly difficulty: "difficulty";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum];
export declare const TestOptionScalarFieldEnum: {
    readonly id: "id";
    readonly text: "text";
    readonly isCorrect: "isCorrect";
    readonly testId: "testId";
};
export type TestOptionScalarFieldEnum = (typeof TestOptionScalarFieldEnum)[keyof typeof TestOptionScalarFieldEnum];
export declare const UserTestProgressScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly testId: "testId";
    readonly selectedOptionId: "selectedOptionId";
    readonly isCorrect: "isCorrect";
    readonly answeredAt: "answeredAt";
};
export type UserTestProgressScalarFieldEnum = (typeof UserTestProgressScalarFieldEnum)[keyof typeof UserTestProgressScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
