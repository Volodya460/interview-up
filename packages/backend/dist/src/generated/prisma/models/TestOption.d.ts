import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TestOptionModel = runtime.Types.Result.DefaultSelection<Prisma.$TestOptionPayload>;
export type AggregateTestOption = {
    _count: TestOptionCountAggregateOutputType | null;
    _avg: TestOptionAvgAggregateOutputType | null;
    _sum: TestOptionSumAggregateOutputType | null;
    _min: TestOptionMinAggregateOutputType | null;
    _max: TestOptionMaxAggregateOutputType | null;
};
export type TestOptionAvgAggregateOutputType = {
    id: number | null;
    testId: number | null;
};
export type TestOptionSumAggregateOutputType = {
    id: number | null;
    testId: number | null;
};
export type TestOptionMinAggregateOutputType = {
    id: number | null;
    text: string | null;
    isCorrect: boolean | null;
    testId: number | null;
};
export type TestOptionMaxAggregateOutputType = {
    id: number | null;
    text: string | null;
    isCorrect: boolean | null;
    testId: number | null;
};
export type TestOptionCountAggregateOutputType = {
    id: number;
    text: number;
    isCorrect: number;
    testId: number;
    _all: number;
};
export type TestOptionAvgAggregateInputType = {
    id?: true;
    testId?: true;
};
export type TestOptionSumAggregateInputType = {
    id?: true;
    testId?: true;
};
export type TestOptionMinAggregateInputType = {
    id?: true;
    text?: true;
    isCorrect?: true;
    testId?: true;
};
export type TestOptionMaxAggregateInputType = {
    id?: true;
    text?: true;
    isCorrect?: true;
    testId?: true;
};
export type TestOptionCountAggregateInputType = {
    id?: true;
    text?: true;
    isCorrect?: true;
    testId?: true;
    _all?: true;
};
export type TestOptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestOptionWhereInput;
    orderBy?: Prisma.TestOptionOrderByWithRelationInput | Prisma.TestOptionOrderByWithRelationInput[];
    cursor?: Prisma.TestOptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TestOptionCountAggregateInputType;
    _avg?: TestOptionAvgAggregateInputType;
    _sum?: TestOptionSumAggregateInputType;
    _min?: TestOptionMinAggregateInputType;
    _max?: TestOptionMaxAggregateInputType;
};
export type GetTestOptionAggregateType<T extends TestOptionAggregateArgs> = {
    [P in keyof T & keyof AggregateTestOption]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTestOption[P]> : Prisma.GetScalarType<T[P], AggregateTestOption[P]>;
};
export type TestOptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestOptionWhereInput;
    orderBy?: Prisma.TestOptionOrderByWithAggregationInput | Prisma.TestOptionOrderByWithAggregationInput[];
    by: Prisma.TestOptionScalarFieldEnum[] | Prisma.TestOptionScalarFieldEnum;
    having?: Prisma.TestOptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestOptionCountAggregateInputType | true;
    _avg?: TestOptionAvgAggregateInputType;
    _sum?: TestOptionSumAggregateInputType;
    _min?: TestOptionMinAggregateInputType;
    _max?: TestOptionMaxAggregateInputType;
};
export type TestOptionGroupByOutputType = {
    id: number;
    text: string;
    isCorrect: boolean;
    testId: number;
    _count: TestOptionCountAggregateOutputType | null;
    _avg: TestOptionAvgAggregateOutputType | null;
    _sum: TestOptionSumAggregateOutputType | null;
    _min: TestOptionMinAggregateOutputType | null;
    _max: TestOptionMaxAggregateOutputType | null;
};
type GetTestOptionGroupByPayload<T extends TestOptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TestOptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TestOptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TestOptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TestOptionGroupByOutputType[P]>;
}>>;
export type TestOptionWhereInput = {
    AND?: Prisma.TestOptionWhereInput | Prisma.TestOptionWhereInput[];
    OR?: Prisma.TestOptionWhereInput[];
    NOT?: Prisma.TestOptionWhereInput | Prisma.TestOptionWhereInput[];
    id?: Prisma.IntFilter<"TestOption"> | number;
    text?: Prisma.StringFilter<"TestOption"> | string;
    isCorrect?: Prisma.BoolFilter<"TestOption"> | boolean;
    testId?: Prisma.IntFilter<"TestOption"> | number;
    test?: Prisma.XOR<Prisma.TestScalarRelationFilter, Prisma.TestWhereInput>;
    progress?: Prisma.UserTestProgressListRelationFilter;
};
export type TestOptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
    test?: Prisma.TestOrderByWithRelationInput;
    progress?: Prisma.UserTestProgressOrderByRelationAggregateInput;
};
export type TestOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TestOptionWhereInput | Prisma.TestOptionWhereInput[];
    OR?: Prisma.TestOptionWhereInput[];
    NOT?: Prisma.TestOptionWhereInput | Prisma.TestOptionWhereInput[];
    text?: Prisma.StringFilter<"TestOption"> | string;
    isCorrect?: Prisma.BoolFilter<"TestOption"> | boolean;
    testId?: Prisma.IntFilter<"TestOption"> | number;
    test?: Prisma.XOR<Prisma.TestScalarRelationFilter, Prisma.TestWhereInput>;
    progress?: Prisma.UserTestProgressListRelationFilter;
}, "id">;
export type TestOptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
    _count?: Prisma.TestOptionCountOrderByAggregateInput;
    _avg?: Prisma.TestOptionAvgOrderByAggregateInput;
    _max?: Prisma.TestOptionMaxOrderByAggregateInput;
    _min?: Prisma.TestOptionMinOrderByAggregateInput;
    _sum?: Prisma.TestOptionSumOrderByAggregateInput;
};
export type TestOptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.TestOptionScalarWhereWithAggregatesInput | Prisma.TestOptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.TestOptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TestOptionScalarWhereWithAggregatesInput | Prisma.TestOptionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TestOption"> | number;
    text?: Prisma.StringWithAggregatesFilter<"TestOption"> | string;
    isCorrect?: Prisma.BoolWithAggregatesFilter<"TestOption"> | boolean;
    testId?: Prisma.IntWithAggregatesFilter<"TestOption"> | number;
};
export type TestOptionCreateInput = {
    text: string;
    isCorrect?: boolean;
    test: Prisma.TestCreateNestedOneWithoutOptionsInput;
    progress?: Prisma.UserTestProgressCreateNestedManyWithoutSelectedOptionInput;
};
export type TestOptionUncheckedCreateInput = {
    id?: number;
    text: string;
    isCorrect?: boolean;
    testId: number;
    progress?: Prisma.UserTestProgressUncheckedCreateNestedManyWithoutSelectedOptionInput;
};
export type TestOptionUpdateInput = {
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    test?: Prisma.TestUpdateOneRequiredWithoutOptionsNestedInput;
    progress?: Prisma.UserTestProgressUpdateManyWithoutSelectedOptionNestedInput;
};
export type TestOptionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    testId?: Prisma.IntFieldUpdateOperationsInput | number;
    progress?: Prisma.UserTestProgressUncheckedUpdateManyWithoutSelectedOptionNestedInput;
};
export type TestOptionCreateManyInput = {
    id?: number;
    text: string;
    isCorrect?: boolean;
    testId: number;
};
export type TestOptionUpdateManyMutationInput = {
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TestOptionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    testId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TestOptionListRelationFilter = {
    every?: Prisma.TestOptionWhereInput;
    some?: Prisma.TestOptionWhereInput;
    none?: Prisma.TestOptionWhereInput;
};
export type TestOptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TestOptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
};
export type TestOptionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
};
export type TestOptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
};
export type TestOptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
};
export type TestOptionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    testId?: Prisma.SortOrder;
};
export type TestOptionScalarRelationFilter = {
    is?: Prisma.TestOptionWhereInput;
    isNot?: Prisma.TestOptionWhereInput;
};
export type TestOptionCreateNestedManyWithoutTestInput = {
    create?: Prisma.XOR<Prisma.TestOptionCreateWithoutTestInput, Prisma.TestOptionUncheckedCreateWithoutTestInput> | Prisma.TestOptionCreateWithoutTestInput[] | Prisma.TestOptionUncheckedCreateWithoutTestInput[];
    connectOrCreate?: Prisma.TestOptionCreateOrConnectWithoutTestInput | Prisma.TestOptionCreateOrConnectWithoutTestInput[];
    createMany?: Prisma.TestOptionCreateManyTestInputEnvelope;
    connect?: Prisma.TestOptionWhereUniqueInput | Prisma.TestOptionWhereUniqueInput[];
};
export type TestOptionUncheckedCreateNestedManyWithoutTestInput = {
    create?: Prisma.XOR<Prisma.TestOptionCreateWithoutTestInput, Prisma.TestOptionUncheckedCreateWithoutTestInput> | Prisma.TestOptionCreateWithoutTestInput[] | Prisma.TestOptionUncheckedCreateWithoutTestInput[];
    connectOrCreate?: Prisma.TestOptionCreateOrConnectWithoutTestInput | Prisma.TestOptionCreateOrConnectWithoutTestInput[];
    createMany?: Prisma.TestOptionCreateManyTestInputEnvelope;
    connect?: Prisma.TestOptionWhereUniqueInput | Prisma.TestOptionWhereUniqueInput[];
};
export type TestOptionUpdateManyWithoutTestNestedInput = {
    create?: Prisma.XOR<Prisma.TestOptionCreateWithoutTestInput, Prisma.TestOptionUncheckedCreateWithoutTestInput> | Prisma.TestOptionCreateWithoutTestInput[] | Prisma.TestOptionUncheckedCreateWithoutTestInput[];
    connectOrCreate?: Prisma.TestOptionCreateOrConnectWithoutTestInput | Prisma.TestOptionCreateOrConnectWithoutTestInput[];
    upsert?: Prisma.TestOptionUpsertWithWhereUniqueWithoutTestInput | Prisma.TestOptionUpsertWithWhereUniqueWithoutTestInput[];
    createMany?: Prisma.TestOptionCreateManyTestInputEnvelope;
    set?: Prisma.TestOptionWhereUniqueInput | Prisma.TestOptionWhereUniqueInput[];
    disconnect?: Prisma.TestOptionWhereUniqueInput | Prisma.TestOptionWhereUniqueInput[];
    delete?: Prisma.TestOptionWhereUniqueInput | Prisma.TestOptionWhereUniqueInput[];
    connect?: Prisma.TestOptionWhereUniqueInput | Prisma.TestOptionWhereUniqueInput[];
    update?: Prisma.TestOptionUpdateWithWhereUniqueWithoutTestInput | Prisma.TestOptionUpdateWithWhereUniqueWithoutTestInput[];
    updateMany?: Prisma.TestOptionUpdateManyWithWhereWithoutTestInput | Prisma.TestOptionUpdateManyWithWhereWithoutTestInput[];
    deleteMany?: Prisma.TestOptionScalarWhereInput | Prisma.TestOptionScalarWhereInput[];
};
export type TestOptionUncheckedUpdateManyWithoutTestNestedInput = {
    create?: Prisma.XOR<Prisma.TestOptionCreateWithoutTestInput, Prisma.TestOptionUncheckedCreateWithoutTestInput> | Prisma.TestOptionCreateWithoutTestInput[] | Prisma.TestOptionUncheckedCreateWithoutTestInput[];
    connectOrCreate?: Prisma.TestOptionCreateOrConnectWithoutTestInput | Prisma.TestOptionCreateOrConnectWithoutTestInput[];
    upsert?: Prisma.TestOptionUpsertWithWhereUniqueWithoutTestInput | Prisma.TestOptionUpsertWithWhereUniqueWithoutTestInput[];
    createMany?: Prisma.TestOptionCreateManyTestInputEnvelope;
    set?: Prisma.TestOptionWhereUniqueInput | Prisma.TestOptionWhereUniqueInput[];
    disconnect?: Prisma.TestOptionWhereUniqueInput | Prisma.TestOptionWhereUniqueInput[];
    delete?: Prisma.TestOptionWhereUniqueInput | Prisma.TestOptionWhereUniqueInput[];
    connect?: Prisma.TestOptionWhereUniqueInput | Prisma.TestOptionWhereUniqueInput[];
    update?: Prisma.TestOptionUpdateWithWhereUniqueWithoutTestInput | Prisma.TestOptionUpdateWithWhereUniqueWithoutTestInput[];
    updateMany?: Prisma.TestOptionUpdateManyWithWhereWithoutTestInput | Prisma.TestOptionUpdateManyWithWhereWithoutTestInput[];
    deleteMany?: Prisma.TestOptionScalarWhereInput | Prisma.TestOptionScalarWhereInput[];
};
export type TestOptionCreateNestedOneWithoutProgressInput = {
    create?: Prisma.XOR<Prisma.TestOptionCreateWithoutProgressInput, Prisma.TestOptionUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: Prisma.TestOptionCreateOrConnectWithoutProgressInput;
    connect?: Prisma.TestOptionWhereUniqueInput;
};
export type TestOptionUpdateOneRequiredWithoutProgressNestedInput = {
    create?: Prisma.XOR<Prisma.TestOptionCreateWithoutProgressInput, Prisma.TestOptionUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: Prisma.TestOptionCreateOrConnectWithoutProgressInput;
    upsert?: Prisma.TestOptionUpsertWithoutProgressInput;
    connect?: Prisma.TestOptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TestOptionUpdateToOneWithWhereWithoutProgressInput, Prisma.TestOptionUpdateWithoutProgressInput>, Prisma.TestOptionUncheckedUpdateWithoutProgressInput>;
};
export type TestOptionCreateWithoutTestInput = {
    text: string;
    isCorrect?: boolean;
    progress?: Prisma.UserTestProgressCreateNestedManyWithoutSelectedOptionInput;
};
export type TestOptionUncheckedCreateWithoutTestInput = {
    id?: number;
    text: string;
    isCorrect?: boolean;
    progress?: Prisma.UserTestProgressUncheckedCreateNestedManyWithoutSelectedOptionInput;
};
export type TestOptionCreateOrConnectWithoutTestInput = {
    where: Prisma.TestOptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestOptionCreateWithoutTestInput, Prisma.TestOptionUncheckedCreateWithoutTestInput>;
};
export type TestOptionCreateManyTestInputEnvelope = {
    data: Prisma.TestOptionCreateManyTestInput | Prisma.TestOptionCreateManyTestInput[];
    skipDuplicates?: boolean;
};
export type TestOptionUpsertWithWhereUniqueWithoutTestInput = {
    where: Prisma.TestOptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestOptionUpdateWithoutTestInput, Prisma.TestOptionUncheckedUpdateWithoutTestInput>;
    create: Prisma.XOR<Prisma.TestOptionCreateWithoutTestInput, Prisma.TestOptionUncheckedCreateWithoutTestInput>;
};
export type TestOptionUpdateWithWhereUniqueWithoutTestInput = {
    where: Prisma.TestOptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestOptionUpdateWithoutTestInput, Prisma.TestOptionUncheckedUpdateWithoutTestInput>;
};
export type TestOptionUpdateManyWithWhereWithoutTestInput = {
    where: Prisma.TestOptionScalarWhereInput;
    data: Prisma.XOR<Prisma.TestOptionUpdateManyMutationInput, Prisma.TestOptionUncheckedUpdateManyWithoutTestInput>;
};
export type TestOptionScalarWhereInput = {
    AND?: Prisma.TestOptionScalarWhereInput | Prisma.TestOptionScalarWhereInput[];
    OR?: Prisma.TestOptionScalarWhereInput[];
    NOT?: Prisma.TestOptionScalarWhereInput | Prisma.TestOptionScalarWhereInput[];
    id?: Prisma.IntFilter<"TestOption"> | number;
    text?: Prisma.StringFilter<"TestOption"> | string;
    isCorrect?: Prisma.BoolFilter<"TestOption"> | boolean;
    testId?: Prisma.IntFilter<"TestOption"> | number;
};
export type TestOptionCreateWithoutProgressInput = {
    text: string;
    isCorrect?: boolean;
    test: Prisma.TestCreateNestedOneWithoutOptionsInput;
};
export type TestOptionUncheckedCreateWithoutProgressInput = {
    id?: number;
    text: string;
    isCorrect?: boolean;
    testId: number;
};
export type TestOptionCreateOrConnectWithoutProgressInput = {
    where: Prisma.TestOptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestOptionCreateWithoutProgressInput, Prisma.TestOptionUncheckedCreateWithoutProgressInput>;
};
export type TestOptionUpsertWithoutProgressInput = {
    update: Prisma.XOR<Prisma.TestOptionUpdateWithoutProgressInput, Prisma.TestOptionUncheckedUpdateWithoutProgressInput>;
    create: Prisma.XOR<Prisma.TestOptionCreateWithoutProgressInput, Prisma.TestOptionUncheckedCreateWithoutProgressInput>;
    where?: Prisma.TestOptionWhereInput;
};
export type TestOptionUpdateToOneWithWhereWithoutProgressInput = {
    where?: Prisma.TestOptionWhereInput;
    data: Prisma.XOR<Prisma.TestOptionUpdateWithoutProgressInput, Prisma.TestOptionUncheckedUpdateWithoutProgressInput>;
};
export type TestOptionUpdateWithoutProgressInput = {
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    test?: Prisma.TestUpdateOneRequiredWithoutOptionsNestedInput;
};
export type TestOptionUncheckedUpdateWithoutProgressInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    testId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TestOptionCreateManyTestInput = {
    id?: number;
    text: string;
    isCorrect?: boolean;
};
export type TestOptionUpdateWithoutTestInput = {
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    progress?: Prisma.UserTestProgressUpdateManyWithoutSelectedOptionNestedInput;
};
export type TestOptionUncheckedUpdateWithoutTestInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    progress?: Prisma.UserTestProgressUncheckedUpdateManyWithoutSelectedOptionNestedInput;
};
export type TestOptionUncheckedUpdateManyWithoutTestInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TestOptionCountOutputType = {
    progress: number;
};
export type TestOptionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    progress?: boolean | TestOptionCountOutputTypeCountProgressArgs;
};
export type TestOptionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionCountOutputTypeSelect<ExtArgs> | null;
};
export type TestOptionCountOutputTypeCountProgressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserTestProgressWhereInput;
};
export type TestOptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    text?: boolean;
    isCorrect?: boolean;
    testId?: boolean;
    test?: boolean | Prisma.TestDefaultArgs<ExtArgs>;
    progress?: boolean | Prisma.TestOption$progressArgs<ExtArgs>;
    _count?: boolean | Prisma.TestOptionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testOption"]>;
export type TestOptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    text?: boolean;
    isCorrect?: boolean;
    testId?: boolean;
    test?: boolean | Prisma.TestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testOption"]>;
export type TestOptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    text?: boolean;
    isCorrect?: boolean;
    testId?: boolean;
    test?: boolean | Prisma.TestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testOption"]>;
export type TestOptionSelectScalar = {
    id?: boolean;
    text?: boolean;
    isCorrect?: boolean;
    testId?: boolean;
};
export type TestOptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "text" | "isCorrect" | "testId", ExtArgs["result"]["testOption"]>;
export type TestOptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    test?: boolean | Prisma.TestDefaultArgs<ExtArgs>;
    progress?: boolean | Prisma.TestOption$progressArgs<ExtArgs>;
    _count?: boolean | Prisma.TestOptionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TestOptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    test?: boolean | Prisma.TestDefaultArgs<ExtArgs>;
};
export type TestOptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    test?: boolean | Prisma.TestDefaultArgs<ExtArgs>;
};
export type $TestOptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TestOption";
    objects: {
        test: Prisma.$TestPayload<ExtArgs>;
        progress: Prisma.$UserTestProgressPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        text: string;
        isCorrect: boolean;
        testId: number;
    }, ExtArgs["result"]["testOption"]>;
    composites: {};
};
export type TestOptionGetPayload<S extends boolean | null | undefined | TestOptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TestOptionPayload, S>;
export type TestOptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TestOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TestOptionCountAggregateInputType | true;
};
export interface TestOptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TestOption'];
        meta: {
            name: 'TestOption';
        };
    };
    findUnique<T extends TestOptionFindUniqueArgs>(args: Prisma.SelectSubset<T, TestOptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TestOptionClient<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TestOptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TestOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestOptionClient<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TestOptionFindFirstArgs>(args?: Prisma.SelectSubset<T, TestOptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TestOptionClient<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TestOptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TestOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestOptionClient<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TestOptionFindManyArgs>(args?: Prisma.SelectSubset<T, TestOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TestOptionCreateArgs>(args: Prisma.SelectSubset<T, TestOptionCreateArgs<ExtArgs>>): Prisma.Prisma__TestOptionClient<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TestOptionCreateManyArgs>(args?: Prisma.SelectSubset<T, TestOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TestOptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TestOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TestOptionDeleteArgs>(args: Prisma.SelectSubset<T, TestOptionDeleteArgs<ExtArgs>>): Prisma.Prisma__TestOptionClient<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TestOptionUpdateArgs>(args: Prisma.SelectSubset<T, TestOptionUpdateArgs<ExtArgs>>): Prisma.Prisma__TestOptionClient<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TestOptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TestOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TestOptionUpdateManyArgs>(args: Prisma.SelectSubset<T, TestOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TestOptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TestOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TestOptionUpsertArgs>(args: Prisma.SelectSubset<T, TestOptionUpsertArgs<ExtArgs>>): Prisma.Prisma__TestOptionClient<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TestOptionCountArgs>(args?: Prisma.Subset<T, TestOptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TestOptionCountAggregateOutputType> : number>;
    aggregate<T extends TestOptionAggregateArgs>(args: Prisma.Subset<T, TestOptionAggregateArgs>): Prisma.PrismaPromise<GetTestOptionAggregateType<T>>;
    groupBy<T extends TestOptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TestOptionGroupByArgs['orderBy'];
    } : {
        orderBy?: TestOptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TestOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TestOptionFieldRefs;
}
export interface Prisma__TestOptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    test<T extends Prisma.TestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TestDefaultArgs<ExtArgs>>): Prisma.Prisma__TestClient<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    progress<T extends Prisma.TestOption$progressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TestOption$progressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserTestProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TestOptionFieldRefs {
    readonly id: Prisma.FieldRef<"TestOption", 'Int'>;
    readonly text: Prisma.FieldRef<"TestOption", 'String'>;
    readonly isCorrect: Prisma.FieldRef<"TestOption", 'Boolean'>;
    readonly testId: Prisma.FieldRef<"TestOption", 'Int'>;
}
export type TestOptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionSelect<ExtArgs> | null;
    omit?: Prisma.TestOptionOmit<ExtArgs> | null;
    include?: Prisma.TestOptionInclude<ExtArgs> | null;
    where: Prisma.TestOptionWhereUniqueInput;
};
export type TestOptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionSelect<ExtArgs> | null;
    omit?: Prisma.TestOptionOmit<ExtArgs> | null;
    include?: Prisma.TestOptionInclude<ExtArgs> | null;
    where: Prisma.TestOptionWhereUniqueInput;
};
export type TestOptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionSelect<ExtArgs> | null;
    omit?: Prisma.TestOptionOmit<ExtArgs> | null;
    include?: Prisma.TestOptionInclude<ExtArgs> | null;
    where?: Prisma.TestOptionWhereInput;
    orderBy?: Prisma.TestOptionOrderByWithRelationInput | Prisma.TestOptionOrderByWithRelationInput[];
    cursor?: Prisma.TestOptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestOptionScalarFieldEnum | Prisma.TestOptionScalarFieldEnum[];
};
export type TestOptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionSelect<ExtArgs> | null;
    omit?: Prisma.TestOptionOmit<ExtArgs> | null;
    include?: Prisma.TestOptionInclude<ExtArgs> | null;
    where?: Prisma.TestOptionWhereInput;
    orderBy?: Prisma.TestOptionOrderByWithRelationInput | Prisma.TestOptionOrderByWithRelationInput[];
    cursor?: Prisma.TestOptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestOptionScalarFieldEnum | Prisma.TestOptionScalarFieldEnum[];
};
export type TestOptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionSelect<ExtArgs> | null;
    omit?: Prisma.TestOptionOmit<ExtArgs> | null;
    include?: Prisma.TestOptionInclude<ExtArgs> | null;
    where?: Prisma.TestOptionWhereInput;
    orderBy?: Prisma.TestOptionOrderByWithRelationInput | Prisma.TestOptionOrderByWithRelationInput[];
    cursor?: Prisma.TestOptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestOptionScalarFieldEnum | Prisma.TestOptionScalarFieldEnum[];
};
export type TestOptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionSelect<ExtArgs> | null;
    omit?: Prisma.TestOptionOmit<ExtArgs> | null;
    include?: Prisma.TestOptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestOptionCreateInput, Prisma.TestOptionUncheckedCreateInput>;
};
export type TestOptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TestOptionCreateManyInput | Prisma.TestOptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TestOptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestOptionOmit<ExtArgs> | null;
    data: Prisma.TestOptionCreateManyInput | Prisma.TestOptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TestOptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TestOptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionSelect<ExtArgs> | null;
    omit?: Prisma.TestOptionOmit<ExtArgs> | null;
    include?: Prisma.TestOptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestOptionUpdateInput, Prisma.TestOptionUncheckedUpdateInput>;
    where: Prisma.TestOptionWhereUniqueInput;
};
export type TestOptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TestOptionUpdateManyMutationInput, Prisma.TestOptionUncheckedUpdateManyInput>;
    where?: Prisma.TestOptionWhereInput;
    limit?: number;
};
export type TestOptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestOptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestOptionUpdateManyMutationInput, Prisma.TestOptionUncheckedUpdateManyInput>;
    where?: Prisma.TestOptionWhereInput;
    limit?: number;
    include?: Prisma.TestOptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TestOptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionSelect<ExtArgs> | null;
    omit?: Prisma.TestOptionOmit<ExtArgs> | null;
    include?: Prisma.TestOptionInclude<ExtArgs> | null;
    where: Prisma.TestOptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestOptionCreateInput, Prisma.TestOptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TestOptionUpdateInput, Prisma.TestOptionUncheckedUpdateInput>;
};
export type TestOptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionSelect<ExtArgs> | null;
    omit?: Prisma.TestOptionOmit<ExtArgs> | null;
    include?: Prisma.TestOptionInclude<ExtArgs> | null;
    where: Prisma.TestOptionWhereUniqueInput;
};
export type TestOptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestOptionWhereInput;
    limit?: number;
};
export type TestOption$progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestOptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestOptionSelect<ExtArgs> | null;
    omit?: Prisma.TestOptionOmit<ExtArgs> | null;
    include?: Prisma.TestOptionInclude<ExtArgs> | null;
};
export {};
