import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserTestProgressModel = runtime.Types.Result.DefaultSelection<Prisma.$UserTestProgressPayload>;
export type AggregateUserTestProgress = {
    _count: UserTestProgressCountAggregateOutputType | null;
    _avg: UserTestProgressAvgAggregateOutputType | null;
    _sum: UserTestProgressSumAggregateOutputType | null;
    _min: UserTestProgressMinAggregateOutputType | null;
    _max: UserTestProgressMaxAggregateOutputType | null;
};
export type UserTestProgressAvgAggregateOutputType = {
    id: number | null;
    testId: number | null;
    selectedOptionId: number | null;
};
export type UserTestProgressSumAggregateOutputType = {
    id: number | null;
    testId: number | null;
    selectedOptionId: number | null;
};
export type UserTestProgressMinAggregateOutputType = {
    id: number | null;
    userId: string | null;
    testId: number | null;
    selectedOptionId: number | null;
    isCorrect: boolean | null;
    answeredAt: Date | null;
};
export type UserTestProgressMaxAggregateOutputType = {
    id: number | null;
    userId: string | null;
    testId: number | null;
    selectedOptionId: number | null;
    isCorrect: boolean | null;
    answeredAt: Date | null;
};
export type UserTestProgressCountAggregateOutputType = {
    id: number;
    userId: number;
    testId: number;
    selectedOptionId: number;
    isCorrect: number;
    answeredAt: number;
    _all: number;
};
export type UserTestProgressAvgAggregateInputType = {
    id?: true;
    testId?: true;
    selectedOptionId?: true;
};
export type UserTestProgressSumAggregateInputType = {
    id?: true;
    testId?: true;
    selectedOptionId?: true;
};
export type UserTestProgressMinAggregateInputType = {
    id?: true;
    userId?: true;
    testId?: true;
    selectedOptionId?: true;
    isCorrect?: true;
    answeredAt?: true;
};
export type UserTestProgressMaxAggregateInputType = {
    id?: true;
    userId?: true;
    testId?: true;
    selectedOptionId?: true;
    isCorrect?: true;
    answeredAt?: true;
};
export type UserTestProgressCountAggregateInputType = {
    id?: true;
    userId?: true;
    testId?: true;
    selectedOptionId?: true;
    isCorrect?: true;
    answeredAt?: true;
    _all?: true;
};
export type UserTestProgressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserTestProgressWhereInput;
    orderBy?: Prisma.UserTestProgressOrderByWithRelationInput | Prisma.UserTestProgressOrderByWithRelationInput[];
    cursor?: Prisma.UserTestProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserTestProgressCountAggregateInputType;
    _avg?: UserTestProgressAvgAggregateInputType;
    _sum?: UserTestProgressSumAggregateInputType;
    _min?: UserTestProgressMinAggregateInputType;
    _max?: UserTestProgressMaxAggregateInputType;
};
export type GetUserTestProgressAggregateType<T extends UserTestProgressAggregateArgs> = {
    [P in keyof T & keyof AggregateUserTestProgress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserTestProgress[P]> : Prisma.GetScalarType<T[P], AggregateUserTestProgress[P]>;
};
export type UserTestProgressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserTestProgressWhereInput;
    orderBy?: Prisma.UserTestProgressOrderByWithAggregationInput | Prisma.UserTestProgressOrderByWithAggregationInput[];
    by: Prisma.UserTestProgressScalarFieldEnum[] | Prisma.UserTestProgressScalarFieldEnum;
    having?: Prisma.UserTestProgressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserTestProgressCountAggregateInputType | true;
    _avg?: UserTestProgressAvgAggregateInputType;
    _sum?: UserTestProgressSumAggregateInputType;
    _min?: UserTestProgressMinAggregateInputType;
    _max?: UserTestProgressMaxAggregateInputType;
};
export type UserTestProgressGroupByOutputType = {
    id: number;
    userId: string;
    testId: number;
    selectedOptionId: number;
    isCorrect: boolean;
    answeredAt: Date;
    _count: UserTestProgressCountAggregateOutputType | null;
    _avg: UserTestProgressAvgAggregateOutputType | null;
    _sum: UserTestProgressSumAggregateOutputType | null;
    _min: UserTestProgressMinAggregateOutputType | null;
    _max: UserTestProgressMaxAggregateOutputType | null;
};
type GetUserTestProgressGroupByPayload<T extends UserTestProgressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserTestProgressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserTestProgressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserTestProgressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserTestProgressGroupByOutputType[P]>;
}>>;
export type UserTestProgressWhereInput = {
    AND?: Prisma.UserTestProgressWhereInput | Prisma.UserTestProgressWhereInput[];
    OR?: Prisma.UserTestProgressWhereInput[];
    NOT?: Prisma.UserTestProgressWhereInput | Prisma.UserTestProgressWhereInput[];
    id?: Prisma.IntFilter<"UserTestProgress"> | number;
    userId?: Prisma.UuidFilter<"UserTestProgress"> | string;
    testId?: Prisma.IntFilter<"UserTestProgress"> | number;
    selectedOptionId?: Prisma.IntFilter<"UserTestProgress"> | number;
    isCorrect?: Prisma.BoolFilter<"UserTestProgress"> | boolean;
    answeredAt?: Prisma.DateTimeFilter<"UserTestProgress"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    test?: Prisma.XOR<Prisma.TestScalarRelationFilter, Prisma.TestWhereInput>;
    selectedOption?: Prisma.XOR<Prisma.TestOptionScalarRelationFilter, Prisma.TestOptionWhereInput>;
};
export type UserTestProgressOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
    selectedOptionId?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    test?: Prisma.TestOrderByWithRelationInput;
    selectedOption?: Prisma.TestOptionOrderByWithRelationInput;
};
export type UserTestProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId_testId?: Prisma.UserTestProgressUserIdTestIdCompoundUniqueInput;
    AND?: Prisma.UserTestProgressWhereInput | Prisma.UserTestProgressWhereInput[];
    OR?: Prisma.UserTestProgressWhereInput[];
    NOT?: Prisma.UserTestProgressWhereInput | Prisma.UserTestProgressWhereInput[];
    userId?: Prisma.UuidFilter<"UserTestProgress"> | string;
    testId?: Prisma.IntFilter<"UserTestProgress"> | number;
    selectedOptionId?: Prisma.IntFilter<"UserTestProgress"> | number;
    isCorrect?: Prisma.BoolFilter<"UserTestProgress"> | boolean;
    answeredAt?: Prisma.DateTimeFilter<"UserTestProgress"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    test?: Prisma.XOR<Prisma.TestScalarRelationFilter, Prisma.TestWhereInput>;
    selectedOption?: Prisma.XOR<Prisma.TestOptionScalarRelationFilter, Prisma.TestOptionWhereInput>;
}, "id" | "userId_testId">;
export type UserTestProgressOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
    selectedOptionId?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
    _count?: Prisma.UserTestProgressCountOrderByAggregateInput;
    _avg?: Prisma.UserTestProgressAvgOrderByAggregateInput;
    _max?: Prisma.UserTestProgressMaxOrderByAggregateInput;
    _min?: Prisma.UserTestProgressMinOrderByAggregateInput;
    _sum?: Prisma.UserTestProgressSumOrderByAggregateInput;
};
export type UserTestProgressScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserTestProgressScalarWhereWithAggregatesInput | Prisma.UserTestProgressScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserTestProgressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserTestProgressScalarWhereWithAggregatesInput | Prisma.UserTestProgressScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"UserTestProgress"> | number;
    userId?: Prisma.UuidWithAggregatesFilter<"UserTestProgress"> | string;
    testId?: Prisma.IntWithAggregatesFilter<"UserTestProgress"> | number;
    selectedOptionId?: Prisma.IntWithAggregatesFilter<"UserTestProgress"> | number;
    isCorrect?: Prisma.BoolWithAggregatesFilter<"UserTestProgress"> | boolean;
    answeredAt?: Prisma.DateTimeWithAggregatesFilter<"UserTestProgress"> | Date | string;
};
export type UserTestProgressCreateInput = {
    isCorrect: boolean;
    answeredAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProgressInput;
    test: Prisma.TestCreateNestedOneWithoutProgressInput;
    selectedOption: Prisma.TestOptionCreateNestedOneWithoutProgressInput;
};
export type UserTestProgressUncheckedCreateInput = {
    id?: number;
    userId: string;
    testId: number;
    selectedOptionId: number;
    isCorrect: boolean;
    answeredAt?: Date | string;
};
export type UserTestProgressUpdateInput = {
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProgressNestedInput;
    test?: Prisma.TestUpdateOneRequiredWithoutProgressNestedInput;
    selectedOption?: Prisma.TestOptionUpdateOneRequiredWithoutProgressNestedInput;
};
export type UserTestProgressUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    testId?: Prisma.IntFieldUpdateOperationsInput | number;
    selectedOptionId?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserTestProgressCreateManyInput = {
    id?: number;
    userId: string;
    testId: number;
    selectedOptionId: number;
    isCorrect: boolean;
    answeredAt?: Date | string;
};
export type UserTestProgressUpdateManyMutationInput = {
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserTestProgressUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    testId?: Prisma.IntFieldUpdateOperationsInput | number;
    selectedOptionId?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserTestProgressListRelationFilter = {
    every?: Prisma.UserTestProgressWhereInput;
    some?: Prisma.UserTestProgressWhereInput;
    none?: Prisma.UserTestProgressWhereInput;
};
export type UserTestProgressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserTestProgressUserIdTestIdCompoundUniqueInput = {
    userId: string;
    testId: number;
};
export type UserTestProgressCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
    selectedOptionId?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
};
export type UserTestProgressAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
    selectedOptionId?: Prisma.SortOrder;
};
export type UserTestProgressMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
    selectedOptionId?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
};
export type UserTestProgressMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
    selectedOptionId?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    answeredAt?: Prisma.SortOrder;
};
export type UserTestProgressSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
    selectedOptionId?: Prisma.SortOrder;
};
export type UserTestProgressCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserTestProgressCreateWithoutUserInput, Prisma.UserTestProgressUncheckedCreateWithoutUserInput> | Prisma.UserTestProgressCreateWithoutUserInput[] | Prisma.UserTestProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserTestProgressCreateOrConnectWithoutUserInput | Prisma.UserTestProgressCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserTestProgressCreateManyUserInputEnvelope;
    connect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
};
export type UserTestProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserTestProgressCreateWithoutUserInput, Prisma.UserTestProgressUncheckedCreateWithoutUserInput> | Prisma.UserTestProgressCreateWithoutUserInput[] | Prisma.UserTestProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserTestProgressCreateOrConnectWithoutUserInput | Prisma.UserTestProgressCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserTestProgressCreateManyUserInputEnvelope;
    connect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
};
export type UserTestProgressUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserTestProgressCreateWithoutUserInput, Prisma.UserTestProgressUncheckedCreateWithoutUserInput> | Prisma.UserTestProgressCreateWithoutUserInput[] | Prisma.UserTestProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserTestProgressCreateOrConnectWithoutUserInput | Prisma.UserTestProgressCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserTestProgressUpsertWithWhereUniqueWithoutUserInput | Prisma.UserTestProgressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserTestProgressCreateManyUserInputEnvelope;
    set?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    disconnect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    delete?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    connect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    update?: Prisma.UserTestProgressUpdateWithWhereUniqueWithoutUserInput | Prisma.UserTestProgressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserTestProgressUpdateManyWithWhereWithoutUserInput | Prisma.UserTestProgressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserTestProgressScalarWhereInput | Prisma.UserTestProgressScalarWhereInput[];
};
export type UserTestProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserTestProgressCreateWithoutUserInput, Prisma.UserTestProgressUncheckedCreateWithoutUserInput> | Prisma.UserTestProgressCreateWithoutUserInput[] | Prisma.UserTestProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserTestProgressCreateOrConnectWithoutUserInput | Prisma.UserTestProgressCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserTestProgressUpsertWithWhereUniqueWithoutUserInput | Prisma.UserTestProgressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserTestProgressCreateManyUserInputEnvelope;
    set?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    disconnect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    delete?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    connect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    update?: Prisma.UserTestProgressUpdateWithWhereUniqueWithoutUserInput | Prisma.UserTestProgressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserTestProgressUpdateManyWithWhereWithoutUserInput | Prisma.UserTestProgressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserTestProgressScalarWhereInput | Prisma.UserTestProgressScalarWhereInput[];
};
export type UserTestProgressCreateNestedManyWithoutTestInput = {
    create?: Prisma.XOR<Prisma.UserTestProgressCreateWithoutTestInput, Prisma.UserTestProgressUncheckedCreateWithoutTestInput> | Prisma.UserTestProgressCreateWithoutTestInput[] | Prisma.UserTestProgressUncheckedCreateWithoutTestInput[];
    connectOrCreate?: Prisma.UserTestProgressCreateOrConnectWithoutTestInput | Prisma.UserTestProgressCreateOrConnectWithoutTestInput[];
    createMany?: Prisma.UserTestProgressCreateManyTestInputEnvelope;
    connect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
};
export type UserTestProgressUncheckedCreateNestedManyWithoutTestInput = {
    create?: Prisma.XOR<Prisma.UserTestProgressCreateWithoutTestInput, Prisma.UserTestProgressUncheckedCreateWithoutTestInput> | Prisma.UserTestProgressCreateWithoutTestInput[] | Prisma.UserTestProgressUncheckedCreateWithoutTestInput[];
    connectOrCreate?: Prisma.UserTestProgressCreateOrConnectWithoutTestInput | Prisma.UserTestProgressCreateOrConnectWithoutTestInput[];
    createMany?: Prisma.UserTestProgressCreateManyTestInputEnvelope;
    connect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
};
export type UserTestProgressUpdateManyWithoutTestNestedInput = {
    create?: Prisma.XOR<Prisma.UserTestProgressCreateWithoutTestInput, Prisma.UserTestProgressUncheckedCreateWithoutTestInput> | Prisma.UserTestProgressCreateWithoutTestInput[] | Prisma.UserTestProgressUncheckedCreateWithoutTestInput[];
    connectOrCreate?: Prisma.UserTestProgressCreateOrConnectWithoutTestInput | Prisma.UserTestProgressCreateOrConnectWithoutTestInput[];
    upsert?: Prisma.UserTestProgressUpsertWithWhereUniqueWithoutTestInput | Prisma.UserTestProgressUpsertWithWhereUniqueWithoutTestInput[];
    createMany?: Prisma.UserTestProgressCreateManyTestInputEnvelope;
    set?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    disconnect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    delete?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    connect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    update?: Prisma.UserTestProgressUpdateWithWhereUniqueWithoutTestInput | Prisma.UserTestProgressUpdateWithWhereUniqueWithoutTestInput[];
    updateMany?: Prisma.UserTestProgressUpdateManyWithWhereWithoutTestInput | Prisma.UserTestProgressUpdateManyWithWhereWithoutTestInput[];
    deleteMany?: Prisma.UserTestProgressScalarWhereInput | Prisma.UserTestProgressScalarWhereInput[];
};
export type UserTestProgressUncheckedUpdateManyWithoutTestNestedInput = {
    create?: Prisma.XOR<Prisma.UserTestProgressCreateWithoutTestInput, Prisma.UserTestProgressUncheckedCreateWithoutTestInput> | Prisma.UserTestProgressCreateWithoutTestInput[] | Prisma.UserTestProgressUncheckedCreateWithoutTestInput[];
    connectOrCreate?: Prisma.UserTestProgressCreateOrConnectWithoutTestInput | Prisma.UserTestProgressCreateOrConnectWithoutTestInput[];
    upsert?: Prisma.UserTestProgressUpsertWithWhereUniqueWithoutTestInput | Prisma.UserTestProgressUpsertWithWhereUniqueWithoutTestInput[];
    createMany?: Prisma.UserTestProgressCreateManyTestInputEnvelope;
    set?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    disconnect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    delete?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    connect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    update?: Prisma.UserTestProgressUpdateWithWhereUniqueWithoutTestInput | Prisma.UserTestProgressUpdateWithWhereUniqueWithoutTestInput[];
    updateMany?: Prisma.UserTestProgressUpdateManyWithWhereWithoutTestInput | Prisma.UserTestProgressUpdateManyWithWhereWithoutTestInput[];
    deleteMany?: Prisma.UserTestProgressScalarWhereInput | Prisma.UserTestProgressScalarWhereInput[];
};
export type UserTestProgressCreateNestedManyWithoutSelectedOptionInput = {
    create?: Prisma.XOR<Prisma.UserTestProgressCreateWithoutSelectedOptionInput, Prisma.UserTestProgressUncheckedCreateWithoutSelectedOptionInput> | Prisma.UserTestProgressCreateWithoutSelectedOptionInput[] | Prisma.UserTestProgressUncheckedCreateWithoutSelectedOptionInput[];
    connectOrCreate?: Prisma.UserTestProgressCreateOrConnectWithoutSelectedOptionInput | Prisma.UserTestProgressCreateOrConnectWithoutSelectedOptionInput[];
    createMany?: Prisma.UserTestProgressCreateManySelectedOptionInputEnvelope;
    connect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
};
export type UserTestProgressUncheckedCreateNestedManyWithoutSelectedOptionInput = {
    create?: Prisma.XOR<Prisma.UserTestProgressCreateWithoutSelectedOptionInput, Prisma.UserTestProgressUncheckedCreateWithoutSelectedOptionInput> | Prisma.UserTestProgressCreateWithoutSelectedOptionInput[] | Prisma.UserTestProgressUncheckedCreateWithoutSelectedOptionInput[];
    connectOrCreate?: Prisma.UserTestProgressCreateOrConnectWithoutSelectedOptionInput | Prisma.UserTestProgressCreateOrConnectWithoutSelectedOptionInput[];
    createMany?: Prisma.UserTestProgressCreateManySelectedOptionInputEnvelope;
    connect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
};
export type UserTestProgressUpdateManyWithoutSelectedOptionNestedInput = {
    create?: Prisma.XOR<Prisma.UserTestProgressCreateWithoutSelectedOptionInput, Prisma.UserTestProgressUncheckedCreateWithoutSelectedOptionInput> | Prisma.UserTestProgressCreateWithoutSelectedOptionInput[] | Prisma.UserTestProgressUncheckedCreateWithoutSelectedOptionInput[];
    connectOrCreate?: Prisma.UserTestProgressCreateOrConnectWithoutSelectedOptionInput | Prisma.UserTestProgressCreateOrConnectWithoutSelectedOptionInput[];
    upsert?: Prisma.UserTestProgressUpsertWithWhereUniqueWithoutSelectedOptionInput | Prisma.UserTestProgressUpsertWithWhereUniqueWithoutSelectedOptionInput[];
    createMany?: Prisma.UserTestProgressCreateManySelectedOptionInputEnvelope;
    set?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    disconnect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    delete?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    connect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    update?: Prisma.UserTestProgressUpdateWithWhereUniqueWithoutSelectedOptionInput | Prisma.UserTestProgressUpdateWithWhereUniqueWithoutSelectedOptionInput[];
    updateMany?: Prisma.UserTestProgressUpdateManyWithWhereWithoutSelectedOptionInput | Prisma.UserTestProgressUpdateManyWithWhereWithoutSelectedOptionInput[];
    deleteMany?: Prisma.UserTestProgressScalarWhereInput | Prisma.UserTestProgressScalarWhereInput[];
};
export type UserTestProgressUncheckedUpdateManyWithoutSelectedOptionNestedInput = {
    create?: Prisma.XOR<Prisma.UserTestProgressCreateWithoutSelectedOptionInput, Prisma.UserTestProgressUncheckedCreateWithoutSelectedOptionInput> | Prisma.UserTestProgressCreateWithoutSelectedOptionInput[] | Prisma.UserTestProgressUncheckedCreateWithoutSelectedOptionInput[];
    connectOrCreate?: Prisma.UserTestProgressCreateOrConnectWithoutSelectedOptionInput | Prisma.UserTestProgressCreateOrConnectWithoutSelectedOptionInput[];
    upsert?: Prisma.UserTestProgressUpsertWithWhereUniqueWithoutSelectedOptionInput | Prisma.UserTestProgressUpsertWithWhereUniqueWithoutSelectedOptionInput[];
    createMany?: Prisma.UserTestProgressCreateManySelectedOptionInputEnvelope;
    set?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    disconnect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    delete?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    connect?: Prisma.UserTestProgressWhereUniqueInput | Prisma.UserTestProgressWhereUniqueInput[];
    update?: Prisma.UserTestProgressUpdateWithWhereUniqueWithoutSelectedOptionInput | Prisma.UserTestProgressUpdateWithWhereUniqueWithoutSelectedOptionInput[];
    updateMany?: Prisma.UserTestProgressUpdateManyWithWhereWithoutSelectedOptionInput | Prisma.UserTestProgressUpdateManyWithWhereWithoutSelectedOptionInput[];
    deleteMany?: Prisma.UserTestProgressScalarWhereInput | Prisma.UserTestProgressScalarWhereInput[];
};
export type UserTestProgressCreateWithoutUserInput = {
    isCorrect: boolean;
    answeredAt?: Date | string;
    test: Prisma.TestCreateNestedOneWithoutProgressInput;
    selectedOption: Prisma.TestOptionCreateNestedOneWithoutProgressInput;
};
export type UserTestProgressUncheckedCreateWithoutUserInput = {
    id?: number;
    testId: number;
    selectedOptionId: number;
    isCorrect: boolean;
    answeredAt?: Date | string;
};
export type UserTestProgressCreateOrConnectWithoutUserInput = {
    where: Prisma.UserTestProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserTestProgressCreateWithoutUserInput, Prisma.UserTestProgressUncheckedCreateWithoutUserInput>;
};
export type UserTestProgressCreateManyUserInputEnvelope = {
    data: Prisma.UserTestProgressCreateManyUserInput | Prisma.UserTestProgressCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserTestProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserTestProgressWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserTestProgressUpdateWithoutUserInput, Prisma.UserTestProgressUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserTestProgressCreateWithoutUserInput, Prisma.UserTestProgressUncheckedCreateWithoutUserInput>;
};
export type UserTestProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserTestProgressWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserTestProgressUpdateWithoutUserInput, Prisma.UserTestProgressUncheckedUpdateWithoutUserInput>;
};
export type UserTestProgressUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserTestProgressScalarWhereInput;
    data: Prisma.XOR<Prisma.UserTestProgressUpdateManyMutationInput, Prisma.UserTestProgressUncheckedUpdateManyWithoutUserInput>;
};
export type UserTestProgressScalarWhereInput = {
    AND?: Prisma.UserTestProgressScalarWhereInput | Prisma.UserTestProgressScalarWhereInput[];
    OR?: Prisma.UserTestProgressScalarWhereInput[];
    NOT?: Prisma.UserTestProgressScalarWhereInput | Prisma.UserTestProgressScalarWhereInput[];
    id?: Prisma.IntFilter<"UserTestProgress"> | number;
    userId?: Prisma.UuidFilter<"UserTestProgress"> | string;
    testId?: Prisma.IntFilter<"UserTestProgress"> | number;
    selectedOptionId?: Prisma.IntFilter<"UserTestProgress"> | number;
    isCorrect?: Prisma.BoolFilter<"UserTestProgress"> | boolean;
    answeredAt?: Prisma.DateTimeFilter<"UserTestProgress"> | Date | string;
};
export type UserTestProgressCreateWithoutTestInput = {
    isCorrect: boolean;
    answeredAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProgressInput;
    selectedOption: Prisma.TestOptionCreateNestedOneWithoutProgressInput;
};
export type UserTestProgressUncheckedCreateWithoutTestInput = {
    id?: number;
    userId: string;
    selectedOptionId: number;
    isCorrect: boolean;
    answeredAt?: Date | string;
};
export type UserTestProgressCreateOrConnectWithoutTestInput = {
    where: Prisma.UserTestProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserTestProgressCreateWithoutTestInput, Prisma.UserTestProgressUncheckedCreateWithoutTestInput>;
};
export type UserTestProgressCreateManyTestInputEnvelope = {
    data: Prisma.UserTestProgressCreateManyTestInput | Prisma.UserTestProgressCreateManyTestInput[];
    skipDuplicates?: boolean;
};
export type UserTestProgressUpsertWithWhereUniqueWithoutTestInput = {
    where: Prisma.UserTestProgressWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserTestProgressUpdateWithoutTestInput, Prisma.UserTestProgressUncheckedUpdateWithoutTestInput>;
    create: Prisma.XOR<Prisma.UserTestProgressCreateWithoutTestInput, Prisma.UserTestProgressUncheckedCreateWithoutTestInput>;
};
export type UserTestProgressUpdateWithWhereUniqueWithoutTestInput = {
    where: Prisma.UserTestProgressWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserTestProgressUpdateWithoutTestInput, Prisma.UserTestProgressUncheckedUpdateWithoutTestInput>;
};
export type UserTestProgressUpdateManyWithWhereWithoutTestInput = {
    where: Prisma.UserTestProgressScalarWhereInput;
    data: Prisma.XOR<Prisma.UserTestProgressUpdateManyMutationInput, Prisma.UserTestProgressUncheckedUpdateManyWithoutTestInput>;
};
export type UserTestProgressCreateWithoutSelectedOptionInput = {
    isCorrect: boolean;
    answeredAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProgressInput;
    test: Prisma.TestCreateNestedOneWithoutProgressInput;
};
export type UserTestProgressUncheckedCreateWithoutSelectedOptionInput = {
    id?: number;
    userId: string;
    testId: number;
    isCorrect: boolean;
    answeredAt?: Date | string;
};
export type UserTestProgressCreateOrConnectWithoutSelectedOptionInput = {
    where: Prisma.UserTestProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserTestProgressCreateWithoutSelectedOptionInput, Prisma.UserTestProgressUncheckedCreateWithoutSelectedOptionInput>;
};
export type UserTestProgressCreateManySelectedOptionInputEnvelope = {
    data: Prisma.UserTestProgressCreateManySelectedOptionInput | Prisma.UserTestProgressCreateManySelectedOptionInput[];
    skipDuplicates?: boolean;
};
export type UserTestProgressUpsertWithWhereUniqueWithoutSelectedOptionInput = {
    where: Prisma.UserTestProgressWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserTestProgressUpdateWithoutSelectedOptionInput, Prisma.UserTestProgressUncheckedUpdateWithoutSelectedOptionInput>;
    create: Prisma.XOR<Prisma.UserTestProgressCreateWithoutSelectedOptionInput, Prisma.UserTestProgressUncheckedCreateWithoutSelectedOptionInput>;
};
export type UserTestProgressUpdateWithWhereUniqueWithoutSelectedOptionInput = {
    where: Prisma.UserTestProgressWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserTestProgressUpdateWithoutSelectedOptionInput, Prisma.UserTestProgressUncheckedUpdateWithoutSelectedOptionInput>;
};
export type UserTestProgressUpdateManyWithWhereWithoutSelectedOptionInput = {
    where: Prisma.UserTestProgressScalarWhereInput;
    data: Prisma.XOR<Prisma.UserTestProgressUpdateManyMutationInput, Prisma.UserTestProgressUncheckedUpdateManyWithoutSelectedOptionInput>;
};
export type UserTestProgressCreateManyUserInput = {
    id?: number;
    testId: number;
    selectedOptionId: number;
    isCorrect: boolean;
    answeredAt?: Date | string;
};
export type UserTestProgressUpdateWithoutUserInput = {
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    test?: Prisma.TestUpdateOneRequiredWithoutProgressNestedInput;
    selectedOption?: Prisma.TestOptionUpdateOneRequiredWithoutProgressNestedInput;
};
export type UserTestProgressUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    testId?: Prisma.IntFieldUpdateOperationsInput | number;
    selectedOptionId?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserTestProgressUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    testId?: Prisma.IntFieldUpdateOperationsInput | number;
    selectedOptionId?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserTestProgressCreateManyTestInput = {
    id?: number;
    userId: string;
    selectedOptionId: number;
    isCorrect: boolean;
    answeredAt?: Date | string;
};
export type UserTestProgressUpdateWithoutTestInput = {
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProgressNestedInput;
    selectedOption?: Prisma.TestOptionUpdateOneRequiredWithoutProgressNestedInput;
};
export type UserTestProgressUncheckedUpdateWithoutTestInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOptionId?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserTestProgressUncheckedUpdateManyWithoutTestInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOptionId?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserTestProgressCreateManySelectedOptionInput = {
    id?: number;
    userId: string;
    testId: number;
    isCorrect: boolean;
    answeredAt?: Date | string;
};
export type UserTestProgressUpdateWithoutSelectedOptionInput = {
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProgressNestedInput;
    test?: Prisma.TestUpdateOneRequiredWithoutProgressNestedInput;
};
export type UserTestProgressUncheckedUpdateWithoutSelectedOptionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    testId?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserTestProgressUncheckedUpdateManyWithoutSelectedOptionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    testId?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    answeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserTestProgressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    testId?: boolean;
    selectedOptionId?: boolean;
    isCorrect?: boolean;
    answeredAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    test?: boolean | Prisma.TestDefaultArgs<ExtArgs>;
    selectedOption?: boolean | Prisma.TestOptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userTestProgress"]>;
export type UserTestProgressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    testId?: boolean;
    selectedOptionId?: boolean;
    isCorrect?: boolean;
    answeredAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    test?: boolean | Prisma.TestDefaultArgs<ExtArgs>;
    selectedOption?: boolean | Prisma.TestOptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userTestProgress"]>;
export type UserTestProgressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    testId?: boolean;
    selectedOptionId?: boolean;
    isCorrect?: boolean;
    answeredAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    test?: boolean | Prisma.TestDefaultArgs<ExtArgs>;
    selectedOption?: boolean | Prisma.TestOptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userTestProgress"]>;
export type UserTestProgressSelectScalar = {
    id?: boolean;
    userId?: boolean;
    testId?: boolean;
    selectedOptionId?: boolean;
    isCorrect?: boolean;
    answeredAt?: boolean;
};
export type UserTestProgressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "testId" | "selectedOptionId" | "isCorrect" | "answeredAt", ExtArgs["result"]["userTestProgress"]>;
export type UserTestProgressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    test?: boolean | Prisma.TestDefaultArgs<ExtArgs>;
    selectedOption?: boolean | Prisma.TestOptionDefaultArgs<ExtArgs>;
};
export type UserTestProgressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    test?: boolean | Prisma.TestDefaultArgs<ExtArgs>;
    selectedOption?: boolean | Prisma.TestOptionDefaultArgs<ExtArgs>;
};
export type UserTestProgressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    test?: boolean | Prisma.TestDefaultArgs<ExtArgs>;
    selectedOption?: boolean | Prisma.TestOptionDefaultArgs<ExtArgs>;
};
export type $UserTestProgressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserTestProgress";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        test: Prisma.$TestPayload<ExtArgs>;
        selectedOption: Prisma.$TestOptionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: string;
        testId: number;
        selectedOptionId: number;
        isCorrect: boolean;
        answeredAt: Date;
    }, ExtArgs["result"]["userTestProgress"]>;
    composites: {};
};
export type UserTestProgressGetPayload<S extends boolean | null | undefined | UserTestProgressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload, S>;
export type UserTestProgressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserTestProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserTestProgressCountAggregateInputType | true;
};
export interface UserTestProgressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserTestProgress'];
        meta: {
            name: 'UserTestProgress';
        };
    };
    findUnique<T extends UserTestProgressFindUniqueArgs>(args: Prisma.SelectSubset<T, UserTestProgressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserTestProgressClient<runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserTestProgressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserTestProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserTestProgressClient<runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserTestProgressFindFirstArgs>(args?: Prisma.SelectSubset<T, UserTestProgressFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserTestProgressClient<runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserTestProgressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserTestProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserTestProgressClient<runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserTestProgressFindManyArgs>(args?: Prisma.SelectSubset<T, UserTestProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserTestProgressCreateArgs>(args: Prisma.SelectSubset<T, UserTestProgressCreateArgs<ExtArgs>>): Prisma.Prisma__UserTestProgressClient<runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserTestProgressCreateManyArgs>(args?: Prisma.SelectSubset<T, UserTestProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserTestProgressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserTestProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserTestProgressDeleteArgs>(args: Prisma.SelectSubset<T, UserTestProgressDeleteArgs<ExtArgs>>): Prisma.Prisma__UserTestProgressClient<runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserTestProgressUpdateArgs>(args: Prisma.SelectSubset<T, UserTestProgressUpdateArgs<ExtArgs>>): Prisma.Prisma__UserTestProgressClient<runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserTestProgressDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserTestProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserTestProgressUpdateManyArgs>(args: Prisma.SelectSubset<T, UserTestProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserTestProgressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserTestProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserTestProgressUpsertArgs>(args: Prisma.SelectSubset<T, UserTestProgressUpsertArgs<ExtArgs>>): Prisma.Prisma__UserTestProgressClient<runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserTestProgressCountArgs>(args?: Prisma.Subset<T, UserTestProgressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserTestProgressCountAggregateOutputType> : number>;
    aggregate<T extends UserTestProgressAggregateArgs>(args: Prisma.Subset<T, UserTestProgressAggregateArgs>): Prisma.PrismaPromise<GetUserTestProgressAggregateType<T>>;
    groupBy<T extends UserTestProgressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserTestProgressGroupByArgs['orderBy'];
    } : {
        orderBy?: UserTestProgressGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserTestProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTestProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserTestProgressFieldRefs;
}
export interface Prisma__UserTestProgressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    test<T extends Prisma.TestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TestDefaultArgs<ExtArgs>>): Prisma.Prisma__TestClient<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    selectedOption<T extends Prisma.TestOptionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TestOptionDefaultArgs<ExtArgs>>): Prisma.Prisma__TestOptionClient<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserTestProgressFieldRefs {
    readonly id: Prisma.FieldRef<"UserTestProgress", 'Int'>;
    readonly userId: Prisma.FieldRef<"UserTestProgress", 'String'>;
    readonly testId: Prisma.FieldRef<"UserTestProgress", 'Int'>;
    readonly selectedOptionId: Prisma.FieldRef<"UserTestProgress", 'Int'>;
    readonly isCorrect: Prisma.FieldRef<"UserTestProgress", 'Boolean'>;
    readonly answeredAt: Prisma.FieldRef<"UserTestProgress", 'DateTime'>;
}
export type UserTestProgressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTestProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserTestProgressOmit<ExtArgs> | null;
    include?: Prisma.UserTestProgressInclude<ExtArgs> | null;
    where: Prisma.UserTestProgressWhereUniqueInput;
};
export type UserTestProgressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTestProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserTestProgressOmit<ExtArgs> | null;
    include?: Prisma.UserTestProgressInclude<ExtArgs> | null;
    where: Prisma.UserTestProgressWhereUniqueInput;
};
export type UserTestProgressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTestProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserTestProgressOmit<ExtArgs> | null;
    include?: Prisma.UserTestProgressInclude<ExtArgs> | null;
    where?: Prisma.UserTestProgressWhereInput;
    orderBy?: Prisma.UserTestProgressOrderByWithRelationInput | Prisma.UserTestProgressOrderByWithRelationInput[];
    cursor?: Prisma.UserTestProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserTestProgressScalarFieldEnum | Prisma.UserTestProgressScalarFieldEnum[];
};
export type UserTestProgressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTestProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserTestProgressOmit<ExtArgs> | null;
    include?: Prisma.UserTestProgressInclude<ExtArgs> | null;
    where?: Prisma.UserTestProgressWhereInput;
    orderBy?: Prisma.UserTestProgressOrderByWithRelationInput | Prisma.UserTestProgressOrderByWithRelationInput[];
    cursor?: Prisma.UserTestProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserTestProgressScalarFieldEnum | Prisma.UserTestProgressScalarFieldEnum[];
};
export type UserTestProgressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTestProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserTestProgressOmit<ExtArgs> | null;
    include?: Prisma.UserTestProgressInclude<ExtArgs> | null;
    where?: Prisma.UserTestProgressWhereInput;
    orderBy?: Prisma.UserTestProgressOrderByWithRelationInput | Prisma.UserTestProgressOrderByWithRelationInput[];
    cursor?: Prisma.UserTestProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserTestProgressScalarFieldEnum | Prisma.UserTestProgressScalarFieldEnum[];
};
export type UserTestProgressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTestProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserTestProgressOmit<ExtArgs> | null;
    include?: Prisma.UserTestProgressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserTestProgressCreateInput, Prisma.UserTestProgressUncheckedCreateInput>;
};
export type UserTestProgressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserTestProgressCreateManyInput | Prisma.UserTestProgressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserTestProgressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTestProgressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserTestProgressOmit<ExtArgs> | null;
    data: Prisma.UserTestProgressCreateManyInput | Prisma.UserTestProgressCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserTestProgressIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserTestProgressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTestProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserTestProgressOmit<ExtArgs> | null;
    include?: Prisma.UserTestProgressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserTestProgressUpdateInput, Prisma.UserTestProgressUncheckedUpdateInput>;
    where: Prisma.UserTestProgressWhereUniqueInput;
};
export type UserTestProgressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserTestProgressUpdateManyMutationInput, Prisma.UserTestProgressUncheckedUpdateManyInput>;
    where?: Prisma.UserTestProgressWhereInput;
    limit?: number;
};
export type UserTestProgressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTestProgressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserTestProgressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserTestProgressUpdateManyMutationInput, Prisma.UserTestProgressUncheckedUpdateManyInput>;
    where?: Prisma.UserTestProgressWhereInput;
    limit?: number;
    include?: Prisma.UserTestProgressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserTestProgressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTestProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserTestProgressOmit<ExtArgs> | null;
    include?: Prisma.UserTestProgressInclude<ExtArgs> | null;
    where: Prisma.UserTestProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserTestProgressCreateInput, Prisma.UserTestProgressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserTestProgressUpdateInput, Prisma.UserTestProgressUncheckedUpdateInput>;
};
export type UserTestProgressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTestProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserTestProgressOmit<ExtArgs> | null;
    include?: Prisma.UserTestProgressInclude<ExtArgs> | null;
    where: Prisma.UserTestProgressWhereUniqueInput;
};
export type UserTestProgressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserTestProgressWhereInput;
    limit?: number;
};
export type UserTestProgressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserTestProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserTestProgressOmit<ExtArgs> | null;
    include?: Prisma.UserTestProgressInclude<ExtArgs> | null;
};
export {};
