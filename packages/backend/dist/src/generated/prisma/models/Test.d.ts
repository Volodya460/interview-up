import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TestModel = runtime.Types.Result.DefaultSelection<Prisma.$TestPayload>;
export type AggregateTest = {
    _count: TestCountAggregateOutputType | null;
    _avg: TestAvgAggregateOutputType | null;
    _sum: TestSumAggregateOutputType | null;
    _min: TestMinAggregateOutputType | null;
    _max: TestMaxAggregateOutputType | null;
};
export type TestAvgAggregateOutputType = {
    id: number | null;
};
export type TestSumAggregateOutputType = {
    id: number | null;
};
export type TestMinAggregateOutputType = {
    id: number | null;
    question: string | null;
    description: string | null;
    category: $Enums.QuestionCategory | null;
    difficulty: $Enums.QuestionDifficulty | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TestMaxAggregateOutputType = {
    id: number | null;
    question: string | null;
    description: string | null;
    category: $Enums.QuestionCategory | null;
    difficulty: $Enums.QuestionDifficulty | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TestCountAggregateOutputType = {
    id: number;
    question: number;
    description: number;
    category: number;
    difficulty: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TestAvgAggregateInputType = {
    id?: true;
};
export type TestSumAggregateInputType = {
    id?: true;
};
export type TestMinAggregateInputType = {
    id?: true;
    question?: true;
    description?: true;
    category?: true;
    difficulty?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TestMaxAggregateInputType = {
    id?: true;
    question?: true;
    description?: true;
    category?: true;
    difficulty?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TestCountAggregateInputType = {
    id?: true;
    question?: true;
    description?: true;
    category?: true;
    difficulty?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestWhereInput;
    orderBy?: Prisma.TestOrderByWithRelationInput | Prisma.TestOrderByWithRelationInput[];
    cursor?: Prisma.TestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TestCountAggregateInputType;
    _avg?: TestAvgAggregateInputType;
    _sum?: TestSumAggregateInputType;
    _min?: TestMinAggregateInputType;
    _max?: TestMaxAggregateInputType;
};
export type GetTestAggregateType<T extends TestAggregateArgs> = {
    [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTest[P]> : Prisma.GetScalarType<T[P], AggregateTest[P]>;
};
export type TestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestWhereInput;
    orderBy?: Prisma.TestOrderByWithAggregationInput | Prisma.TestOrderByWithAggregationInput[];
    by: Prisma.TestScalarFieldEnum[] | Prisma.TestScalarFieldEnum;
    having?: Prisma.TestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestCountAggregateInputType | true;
    _avg?: TestAvgAggregateInputType;
    _sum?: TestSumAggregateInputType;
    _min?: TestMinAggregateInputType;
    _max?: TestMaxAggregateInputType;
};
export type TestGroupByOutputType = {
    id: number;
    question: string;
    description: string | null;
    category: $Enums.QuestionCategory | null;
    difficulty: $Enums.QuestionDifficulty | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TestCountAggregateOutputType | null;
    _avg: TestAvgAggregateOutputType | null;
    _sum: TestSumAggregateOutputType | null;
    _min: TestMinAggregateOutputType | null;
    _max: TestMaxAggregateOutputType | null;
};
type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TestGroupByOutputType[P]>;
}>>;
export type TestWhereInput = {
    AND?: Prisma.TestWhereInput | Prisma.TestWhereInput[];
    OR?: Prisma.TestWhereInput[];
    NOT?: Prisma.TestWhereInput | Prisma.TestWhereInput[];
    id?: Prisma.IntFilter<"Test"> | number;
    question?: Prisma.StringFilter<"Test"> | string;
    description?: Prisma.StringNullableFilter<"Test"> | string | null;
    category?: Prisma.EnumQuestionCategoryNullableFilter<"Test"> | $Enums.QuestionCategory | null;
    difficulty?: Prisma.EnumQuestionDifficultyNullableFilter<"Test"> | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFilter<"Test"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Test"> | Date | string;
    options?: Prisma.TestOptionListRelationFilter;
};
export type TestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    difficulty?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    options?: Prisma.TestOptionOrderByRelationAggregateInput;
};
export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TestWhereInput | Prisma.TestWhereInput[];
    OR?: Prisma.TestWhereInput[];
    NOT?: Prisma.TestWhereInput | Prisma.TestWhereInput[];
    question?: Prisma.StringFilter<"Test"> | string;
    description?: Prisma.StringNullableFilter<"Test"> | string | null;
    category?: Prisma.EnumQuestionCategoryNullableFilter<"Test"> | $Enums.QuestionCategory | null;
    difficulty?: Prisma.EnumQuestionDifficultyNullableFilter<"Test"> | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFilter<"Test"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Test"> | Date | string;
    options?: Prisma.TestOptionListRelationFilter;
}, "id">;
export type TestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    difficulty?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TestCountOrderByAggregateInput;
    _avg?: Prisma.TestAvgOrderByAggregateInput;
    _max?: Prisma.TestMaxOrderByAggregateInput;
    _min?: Prisma.TestMinOrderByAggregateInput;
    _sum?: Prisma.TestSumOrderByAggregateInput;
};
export type TestScalarWhereWithAggregatesInput = {
    AND?: Prisma.TestScalarWhereWithAggregatesInput | Prisma.TestScalarWhereWithAggregatesInput[];
    OR?: Prisma.TestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TestScalarWhereWithAggregatesInput | Prisma.TestScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Test"> | number;
    question?: Prisma.StringWithAggregatesFilter<"Test"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Test"> | string | null;
    category?: Prisma.EnumQuestionCategoryNullableWithAggregatesFilter<"Test"> | $Enums.QuestionCategory | null;
    difficulty?: Prisma.EnumQuestionDifficultyNullableWithAggregatesFilter<"Test"> | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Test"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Test"> | Date | string;
};
export type TestCreateInput = {
    question: string;
    description?: string | null;
    category?: $Enums.QuestionCategory | null;
    difficulty?: $Enums.QuestionDifficulty | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    options?: Prisma.TestOptionCreateNestedManyWithoutTestInput;
};
export type TestUncheckedCreateInput = {
    id?: number;
    question: string;
    description?: string | null;
    category?: $Enums.QuestionCategory | null;
    difficulty?: $Enums.QuestionDifficulty | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    options?: Prisma.TestOptionUncheckedCreateNestedManyWithoutTestInput;
};
export type TestUpdateInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableEnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory | null;
    difficulty?: Prisma.NullableEnumQuestionDifficultyFieldUpdateOperationsInput | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    options?: Prisma.TestOptionUpdateManyWithoutTestNestedInput;
};
export type TestUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableEnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory | null;
    difficulty?: Prisma.NullableEnumQuestionDifficultyFieldUpdateOperationsInput | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    options?: Prisma.TestOptionUncheckedUpdateManyWithoutTestNestedInput;
};
export type TestCreateManyInput = {
    id?: number;
    question: string;
    description?: string | null;
    category?: $Enums.QuestionCategory | null;
    difficulty?: $Enums.QuestionDifficulty | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TestUpdateManyMutationInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableEnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory | null;
    difficulty?: Prisma.NullableEnumQuestionDifficultyFieldUpdateOperationsInput | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableEnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory | null;
    difficulty?: Prisma.NullableEnumQuestionDifficultyFieldUpdateOperationsInput | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TestAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TestSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TestScalarRelationFilter = {
    is?: Prisma.TestWhereInput;
    isNot?: Prisma.TestWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type TestCreateNestedOneWithoutOptionsInput = {
    create?: Prisma.XOR<Prisma.TestCreateWithoutOptionsInput, Prisma.TestUncheckedCreateWithoutOptionsInput>;
    connectOrCreate?: Prisma.TestCreateOrConnectWithoutOptionsInput;
    connect?: Prisma.TestWhereUniqueInput;
};
export type TestUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: Prisma.XOR<Prisma.TestCreateWithoutOptionsInput, Prisma.TestUncheckedCreateWithoutOptionsInput>;
    connectOrCreate?: Prisma.TestCreateOrConnectWithoutOptionsInput;
    upsert?: Prisma.TestUpsertWithoutOptionsInput;
    connect?: Prisma.TestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TestUpdateToOneWithWhereWithoutOptionsInput, Prisma.TestUpdateWithoutOptionsInput>, Prisma.TestUncheckedUpdateWithoutOptionsInput>;
};
export type TestCreateWithoutOptionsInput = {
    question: string;
    description?: string | null;
    category?: $Enums.QuestionCategory | null;
    difficulty?: $Enums.QuestionDifficulty | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TestUncheckedCreateWithoutOptionsInput = {
    id?: number;
    question: string;
    description?: string | null;
    category?: $Enums.QuestionCategory | null;
    difficulty?: $Enums.QuestionDifficulty | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TestCreateOrConnectWithoutOptionsInput = {
    where: Prisma.TestWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestCreateWithoutOptionsInput, Prisma.TestUncheckedCreateWithoutOptionsInput>;
};
export type TestUpsertWithoutOptionsInput = {
    update: Prisma.XOR<Prisma.TestUpdateWithoutOptionsInput, Prisma.TestUncheckedUpdateWithoutOptionsInput>;
    create: Prisma.XOR<Prisma.TestCreateWithoutOptionsInput, Prisma.TestUncheckedCreateWithoutOptionsInput>;
    where?: Prisma.TestWhereInput;
};
export type TestUpdateToOneWithWhereWithoutOptionsInput = {
    where?: Prisma.TestWhereInput;
    data: Prisma.XOR<Prisma.TestUpdateWithoutOptionsInput, Prisma.TestUncheckedUpdateWithoutOptionsInput>;
};
export type TestUpdateWithoutOptionsInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableEnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory | null;
    difficulty?: Prisma.NullableEnumQuestionDifficultyFieldUpdateOperationsInput | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestUncheckedUpdateWithoutOptionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableEnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory | null;
    difficulty?: Prisma.NullableEnumQuestionDifficultyFieldUpdateOperationsInput | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestCountOutputType = {
    options: number;
};
export type TestCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    options?: boolean | TestCountOutputTypeCountOptionsArgs;
};
export type TestCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestCountOutputTypeSelect<ExtArgs> | null;
};
export type TestCountOutputTypeCountOptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestOptionWhereInput;
};
export type TestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    question?: boolean;
    description?: boolean;
    category?: boolean;
    difficulty?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    options?: boolean | Prisma.Test$optionsArgs<ExtArgs>;
    _count?: boolean | Prisma.TestCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["test"]>;
export type TestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    question?: boolean;
    description?: boolean;
    category?: boolean;
    difficulty?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["test"]>;
export type TestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    question?: boolean;
    description?: boolean;
    category?: boolean;
    difficulty?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["test"]>;
export type TestSelectScalar = {
    id?: boolean;
    question?: boolean;
    description?: boolean;
    category?: boolean;
    difficulty?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "question" | "description" | "category" | "difficulty" | "createdAt" | "updatedAt", ExtArgs["result"]["test"]>;
export type TestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    options?: boolean | Prisma.Test$optionsArgs<ExtArgs>;
    _count?: boolean | Prisma.TestCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Test";
    objects: {
        options: Prisma.$TestOptionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        question: string;
        description: string | null;
        category: $Enums.QuestionCategory | null;
        difficulty: $Enums.QuestionDifficulty | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["test"]>;
    composites: {};
};
export type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TestPayload, S>;
export type TestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TestCountAggregateInputType | true;
};
export interface TestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Test'];
        meta: {
            name: 'Test';
        };
    };
    findUnique<T extends TestFindUniqueArgs>(args: Prisma.SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TestClient<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestClient<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TestFindFirstArgs>(args?: Prisma.SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma.Prisma__TestClient<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestClient<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TestFindManyArgs>(args?: Prisma.SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TestCreateArgs>(args: Prisma.SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma.Prisma__TestClient<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TestCreateManyArgs>(args?: Prisma.SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TestDeleteArgs>(args: Prisma.SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma.Prisma__TestClient<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TestUpdateArgs>(args: Prisma.SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma.Prisma__TestClient<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TestDeleteManyArgs>(args?: Prisma.SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TestUpdateManyArgs>(args: Prisma.SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TestUpsertArgs>(args: Prisma.SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma.Prisma__TestClient<runtime.Types.Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TestCountArgs>(args?: Prisma.Subset<T, TestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TestCountAggregateOutputType> : number>;
    aggregate<T extends TestAggregateArgs>(args: Prisma.Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>;
    groupBy<T extends TestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TestGroupByArgs['orderBy'];
    } : {
        orderBy?: TestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TestFieldRefs;
}
export interface Prisma__TestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    options<T extends Prisma.Test$optionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Test$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TestFieldRefs {
    readonly id: Prisma.FieldRef<"Test", 'Int'>;
    readonly question: Prisma.FieldRef<"Test", 'String'>;
    readonly description: Prisma.FieldRef<"Test", 'String'>;
    readonly category: Prisma.FieldRef<"Test", 'QuestionCategory'>;
    readonly difficulty: Prisma.FieldRef<"Test", 'QuestionDifficulty'>;
    readonly createdAt: Prisma.FieldRef<"Test", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Test", 'DateTime'>;
}
export type TestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestSelect<ExtArgs> | null;
    omit?: Prisma.TestOmit<ExtArgs> | null;
    include?: Prisma.TestInclude<ExtArgs> | null;
    where: Prisma.TestWhereUniqueInput;
};
export type TestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestSelect<ExtArgs> | null;
    omit?: Prisma.TestOmit<ExtArgs> | null;
    include?: Prisma.TestInclude<ExtArgs> | null;
    where: Prisma.TestWhereUniqueInput;
};
export type TestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestSelect<ExtArgs> | null;
    omit?: Prisma.TestOmit<ExtArgs> | null;
    include?: Prisma.TestInclude<ExtArgs> | null;
    where?: Prisma.TestWhereInput;
    orderBy?: Prisma.TestOrderByWithRelationInput | Prisma.TestOrderByWithRelationInput[];
    cursor?: Prisma.TestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestScalarFieldEnum | Prisma.TestScalarFieldEnum[];
};
export type TestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestSelect<ExtArgs> | null;
    omit?: Prisma.TestOmit<ExtArgs> | null;
    include?: Prisma.TestInclude<ExtArgs> | null;
    where?: Prisma.TestWhereInput;
    orderBy?: Prisma.TestOrderByWithRelationInput | Prisma.TestOrderByWithRelationInput[];
    cursor?: Prisma.TestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestScalarFieldEnum | Prisma.TestScalarFieldEnum[];
};
export type TestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestSelect<ExtArgs> | null;
    omit?: Prisma.TestOmit<ExtArgs> | null;
    include?: Prisma.TestInclude<ExtArgs> | null;
    where?: Prisma.TestWhereInput;
    orderBy?: Prisma.TestOrderByWithRelationInput | Prisma.TestOrderByWithRelationInput[];
    cursor?: Prisma.TestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestScalarFieldEnum | Prisma.TestScalarFieldEnum[];
};
export type TestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestSelect<ExtArgs> | null;
    omit?: Prisma.TestOmit<ExtArgs> | null;
    include?: Prisma.TestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestCreateInput, Prisma.TestUncheckedCreateInput>;
};
export type TestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TestCreateManyInput | Prisma.TestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestOmit<ExtArgs> | null;
    data: Prisma.TestCreateManyInput | Prisma.TestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestSelect<ExtArgs> | null;
    omit?: Prisma.TestOmit<ExtArgs> | null;
    include?: Prisma.TestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestUpdateInput, Prisma.TestUncheckedUpdateInput>;
    where: Prisma.TestWhereUniqueInput;
};
export type TestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TestUpdateManyMutationInput, Prisma.TestUncheckedUpdateManyInput>;
    where?: Prisma.TestWhereInput;
    limit?: number;
};
export type TestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestUpdateManyMutationInput, Prisma.TestUncheckedUpdateManyInput>;
    where?: Prisma.TestWhereInput;
    limit?: number;
};
export type TestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestSelect<ExtArgs> | null;
    omit?: Prisma.TestOmit<ExtArgs> | null;
    include?: Prisma.TestInclude<ExtArgs> | null;
    where: Prisma.TestWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestCreateInput, Prisma.TestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TestUpdateInput, Prisma.TestUncheckedUpdateInput>;
};
export type TestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestSelect<ExtArgs> | null;
    omit?: Prisma.TestOmit<ExtArgs> | null;
    include?: Prisma.TestInclude<ExtArgs> | null;
    where: Prisma.TestWhereUniqueInput;
};
export type TestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestWhereInput;
    limit?: number;
};
export type Test$optionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestSelect<ExtArgs> | null;
    omit?: Prisma.TestOmit<ExtArgs> | null;
    include?: Prisma.TestInclude<ExtArgs> | null;
};
export {};
