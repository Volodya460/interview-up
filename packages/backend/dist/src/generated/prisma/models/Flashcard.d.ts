import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FlashcardModel = runtime.Types.Result.DefaultSelection<Prisma.$FlashcardPayload>;
export type AggregateFlashcard = {
    _count: FlashcardCountAggregateOutputType | null;
    _avg: FlashcardAvgAggregateOutputType | null;
    _sum: FlashcardSumAggregateOutputType | null;
    _min: FlashcardMinAggregateOutputType | null;
    _max: FlashcardMaxAggregateOutputType | null;
};
export type FlashcardAvgAggregateOutputType = {
    id: number | null;
};
export type FlashcardSumAggregateOutputType = {
    id: number | null;
};
export type FlashcardMinAggregateOutputType = {
    id: number | null;
    question: string | null;
    answer: string | null;
    category: $Enums.QuestionCategory | null;
    difficulty: $Enums.QuestionDifficulty | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FlashcardMaxAggregateOutputType = {
    id: number | null;
    question: string | null;
    answer: string | null;
    category: $Enums.QuestionCategory | null;
    difficulty: $Enums.QuestionDifficulty | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FlashcardCountAggregateOutputType = {
    id: number;
    question: number;
    answer: number;
    category: number;
    difficulty: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FlashcardAvgAggregateInputType = {
    id?: true;
};
export type FlashcardSumAggregateInputType = {
    id?: true;
};
export type FlashcardMinAggregateInputType = {
    id?: true;
    question?: true;
    answer?: true;
    category?: true;
    difficulty?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FlashcardMaxAggregateInputType = {
    id?: true;
    question?: true;
    answer?: true;
    category?: true;
    difficulty?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FlashcardCountAggregateInputType = {
    id?: true;
    question?: true;
    answer?: true;
    category?: true;
    difficulty?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FlashcardAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FlashcardWhereInput;
    orderBy?: Prisma.FlashcardOrderByWithRelationInput | Prisma.FlashcardOrderByWithRelationInput[];
    cursor?: Prisma.FlashcardWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FlashcardCountAggregateInputType;
    _avg?: FlashcardAvgAggregateInputType;
    _sum?: FlashcardSumAggregateInputType;
    _min?: FlashcardMinAggregateInputType;
    _max?: FlashcardMaxAggregateInputType;
};
export type GetFlashcardAggregateType<T extends FlashcardAggregateArgs> = {
    [P in keyof T & keyof AggregateFlashcard]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFlashcard[P]> : Prisma.GetScalarType<T[P], AggregateFlashcard[P]>;
};
export type FlashcardGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FlashcardWhereInput;
    orderBy?: Prisma.FlashcardOrderByWithAggregationInput | Prisma.FlashcardOrderByWithAggregationInput[];
    by: Prisma.FlashcardScalarFieldEnum[] | Prisma.FlashcardScalarFieldEnum;
    having?: Prisma.FlashcardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FlashcardCountAggregateInputType | true;
    _avg?: FlashcardAvgAggregateInputType;
    _sum?: FlashcardSumAggregateInputType;
    _min?: FlashcardMinAggregateInputType;
    _max?: FlashcardMaxAggregateInputType;
};
export type FlashcardGroupByOutputType = {
    id: number;
    question: string;
    answer: string;
    category: $Enums.QuestionCategory | null;
    difficulty: $Enums.QuestionDifficulty | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FlashcardCountAggregateOutputType | null;
    _avg: FlashcardAvgAggregateOutputType | null;
    _sum: FlashcardSumAggregateOutputType | null;
    _min: FlashcardMinAggregateOutputType | null;
    _max: FlashcardMaxAggregateOutputType | null;
};
type GetFlashcardGroupByPayload<T extends FlashcardGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FlashcardGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FlashcardGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FlashcardGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FlashcardGroupByOutputType[P]>;
}>>;
export type FlashcardWhereInput = {
    AND?: Prisma.FlashcardWhereInput | Prisma.FlashcardWhereInput[];
    OR?: Prisma.FlashcardWhereInput[];
    NOT?: Prisma.FlashcardWhereInput | Prisma.FlashcardWhereInput[];
    id?: Prisma.IntFilter<"Flashcard"> | number;
    question?: Prisma.StringFilter<"Flashcard"> | string;
    answer?: Prisma.StringFilter<"Flashcard"> | string;
    category?: Prisma.EnumQuestionCategoryNullableFilter<"Flashcard"> | $Enums.QuestionCategory | null;
    difficulty?: Prisma.EnumQuestionDifficultyNullableFilter<"Flashcard"> | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFilter<"Flashcard"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Flashcard"> | Date | string;
};
export type FlashcardOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    difficulty?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FlashcardWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.FlashcardWhereInput | Prisma.FlashcardWhereInput[];
    OR?: Prisma.FlashcardWhereInput[];
    NOT?: Prisma.FlashcardWhereInput | Prisma.FlashcardWhereInput[];
    question?: Prisma.StringFilter<"Flashcard"> | string;
    answer?: Prisma.StringFilter<"Flashcard"> | string;
    category?: Prisma.EnumQuestionCategoryNullableFilter<"Flashcard"> | $Enums.QuestionCategory | null;
    difficulty?: Prisma.EnumQuestionDifficultyNullableFilter<"Flashcard"> | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFilter<"Flashcard"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Flashcard"> | Date | string;
}, "id">;
export type FlashcardOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    difficulty?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FlashcardCountOrderByAggregateInput;
    _avg?: Prisma.FlashcardAvgOrderByAggregateInput;
    _max?: Prisma.FlashcardMaxOrderByAggregateInput;
    _min?: Prisma.FlashcardMinOrderByAggregateInput;
    _sum?: Prisma.FlashcardSumOrderByAggregateInput;
};
export type FlashcardScalarWhereWithAggregatesInput = {
    AND?: Prisma.FlashcardScalarWhereWithAggregatesInput | Prisma.FlashcardScalarWhereWithAggregatesInput[];
    OR?: Prisma.FlashcardScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FlashcardScalarWhereWithAggregatesInput | Prisma.FlashcardScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Flashcard"> | number;
    question?: Prisma.StringWithAggregatesFilter<"Flashcard"> | string;
    answer?: Prisma.StringWithAggregatesFilter<"Flashcard"> | string;
    category?: Prisma.EnumQuestionCategoryNullableWithAggregatesFilter<"Flashcard"> | $Enums.QuestionCategory | null;
    difficulty?: Prisma.EnumQuestionDifficultyNullableWithAggregatesFilter<"Flashcard"> | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Flashcard"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Flashcard"> | Date | string;
};
export type FlashcardCreateInput = {
    question: string;
    answer: string;
    category?: $Enums.QuestionCategory | null;
    difficulty?: $Enums.QuestionDifficulty | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FlashcardUncheckedCreateInput = {
    id?: number;
    question: string;
    answer: string;
    category?: $Enums.QuestionCategory | null;
    difficulty?: $Enums.QuestionDifficulty | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FlashcardUpdateInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableEnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory | null;
    difficulty?: Prisma.NullableEnumQuestionDifficultyFieldUpdateOperationsInput | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FlashcardUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableEnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory | null;
    difficulty?: Prisma.NullableEnumQuestionDifficultyFieldUpdateOperationsInput | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FlashcardCreateManyInput = {
    id?: number;
    question: string;
    answer: string;
    category?: $Enums.QuestionCategory | null;
    difficulty?: $Enums.QuestionDifficulty | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FlashcardUpdateManyMutationInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableEnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory | null;
    difficulty?: Prisma.NullableEnumQuestionDifficultyFieldUpdateOperationsInput | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FlashcardUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableEnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory | null;
    difficulty?: Prisma.NullableEnumQuestionDifficultyFieldUpdateOperationsInput | $Enums.QuestionDifficulty | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FlashcardCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FlashcardAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type FlashcardMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FlashcardMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FlashcardSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableEnumQuestionCategoryFieldUpdateOperationsInput = {
    set?: $Enums.QuestionCategory | null;
};
export type NullableEnumQuestionDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.QuestionDifficulty | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type FlashcardSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    question?: boolean;
    answer?: boolean;
    category?: boolean;
    difficulty?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["flashcard"]>;
export type FlashcardSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    question?: boolean;
    answer?: boolean;
    category?: boolean;
    difficulty?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["flashcard"]>;
export type FlashcardSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    question?: boolean;
    answer?: boolean;
    category?: boolean;
    difficulty?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["flashcard"]>;
export type FlashcardSelectScalar = {
    id?: boolean;
    question?: boolean;
    answer?: boolean;
    category?: boolean;
    difficulty?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FlashcardOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "question" | "answer" | "category" | "difficulty" | "createdAt" | "updatedAt", ExtArgs["result"]["flashcard"]>;
export type $FlashcardPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Flashcard";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        question: string;
        answer: string;
        category: $Enums.QuestionCategory | null;
        difficulty: $Enums.QuestionDifficulty | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["flashcard"]>;
    composites: {};
};
export type FlashcardGetPayload<S extends boolean | null | undefined | FlashcardDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FlashcardPayload, S>;
export type FlashcardCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FlashcardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FlashcardCountAggregateInputType | true;
};
export interface FlashcardDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Flashcard'];
        meta: {
            name: 'Flashcard';
        };
    };
    findUnique<T extends FlashcardFindUniqueArgs>(args: Prisma.SelectSubset<T, FlashcardFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FlashcardClient<runtime.Types.Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FlashcardFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FlashcardFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FlashcardClient<runtime.Types.Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FlashcardFindFirstArgs>(args?: Prisma.SelectSubset<T, FlashcardFindFirstArgs<ExtArgs>>): Prisma.Prisma__FlashcardClient<runtime.Types.Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FlashcardFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FlashcardFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FlashcardClient<runtime.Types.Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FlashcardFindManyArgs>(args?: Prisma.SelectSubset<T, FlashcardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FlashcardCreateArgs>(args: Prisma.SelectSubset<T, FlashcardCreateArgs<ExtArgs>>): Prisma.Prisma__FlashcardClient<runtime.Types.Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FlashcardCreateManyArgs>(args?: Prisma.SelectSubset<T, FlashcardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FlashcardCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FlashcardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FlashcardDeleteArgs>(args: Prisma.SelectSubset<T, FlashcardDeleteArgs<ExtArgs>>): Prisma.Prisma__FlashcardClient<runtime.Types.Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FlashcardUpdateArgs>(args: Prisma.SelectSubset<T, FlashcardUpdateArgs<ExtArgs>>): Prisma.Prisma__FlashcardClient<runtime.Types.Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FlashcardDeleteManyArgs>(args?: Prisma.SelectSubset<T, FlashcardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FlashcardUpdateManyArgs>(args: Prisma.SelectSubset<T, FlashcardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FlashcardUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FlashcardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FlashcardUpsertArgs>(args: Prisma.SelectSubset<T, FlashcardUpsertArgs<ExtArgs>>): Prisma.Prisma__FlashcardClient<runtime.Types.Result.GetResult<Prisma.$FlashcardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FlashcardCountArgs>(args?: Prisma.Subset<T, FlashcardCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FlashcardCountAggregateOutputType> : number>;
    aggregate<T extends FlashcardAggregateArgs>(args: Prisma.Subset<T, FlashcardAggregateArgs>): Prisma.PrismaPromise<GetFlashcardAggregateType<T>>;
    groupBy<T extends FlashcardGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FlashcardGroupByArgs['orderBy'];
    } : {
        orderBy?: FlashcardGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FlashcardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashcardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FlashcardFieldRefs;
}
export interface Prisma__FlashcardClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FlashcardFieldRefs {
    readonly id: Prisma.FieldRef<"Flashcard", 'Int'>;
    readonly question: Prisma.FieldRef<"Flashcard", 'String'>;
    readonly answer: Prisma.FieldRef<"Flashcard", 'String'>;
    readonly category: Prisma.FieldRef<"Flashcard", 'QuestionCategory'>;
    readonly difficulty: Prisma.FieldRef<"Flashcard", 'QuestionDifficulty'>;
    readonly createdAt: Prisma.FieldRef<"Flashcard", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Flashcard", 'DateTime'>;
}
export type FlashcardFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlashcardSelect<ExtArgs> | null;
    omit?: Prisma.FlashcardOmit<ExtArgs> | null;
    where: Prisma.FlashcardWhereUniqueInput;
};
export type FlashcardFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlashcardSelect<ExtArgs> | null;
    omit?: Prisma.FlashcardOmit<ExtArgs> | null;
    where: Prisma.FlashcardWhereUniqueInput;
};
export type FlashcardFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlashcardSelect<ExtArgs> | null;
    omit?: Prisma.FlashcardOmit<ExtArgs> | null;
    where?: Prisma.FlashcardWhereInput;
    orderBy?: Prisma.FlashcardOrderByWithRelationInput | Prisma.FlashcardOrderByWithRelationInput[];
    cursor?: Prisma.FlashcardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FlashcardScalarFieldEnum | Prisma.FlashcardScalarFieldEnum[];
};
export type FlashcardFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlashcardSelect<ExtArgs> | null;
    omit?: Prisma.FlashcardOmit<ExtArgs> | null;
    where?: Prisma.FlashcardWhereInput;
    orderBy?: Prisma.FlashcardOrderByWithRelationInput | Prisma.FlashcardOrderByWithRelationInput[];
    cursor?: Prisma.FlashcardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FlashcardScalarFieldEnum | Prisma.FlashcardScalarFieldEnum[];
};
export type FlashcardFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlashcardSelect<ExtArgs> | null;
    omit?: Prisma.FlashcardOmit<ExtArgs> | null;
    where?: Prisma.FlashcardWhereInput;
    orderBy?: Prisma.FlashcardOrderByWithRelationInput | Prisma.FlashcardOrderByWithRelationInput[];
    cursor?: Prisma.FlashcardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FlashcardScalarFieldEnum | Prisma.FlashcardScalarFieldEnum[];
};
export type FlashcardCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlashcardSelect<ExtArgs> | null;
    omit?: Prisma.FlashcardOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FlashcardCreateInput, Prisma.FlashcardUncheckedCreateInput>;
};
export type FlashcardCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FlashcardCreateManyInput | Prisma.FlashcardCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FlashcardCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlashcardSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FlashcardOmit<ExtArgs> | null;
    data: Prisma.FlashcardCreateManyInput | Prisma.FlashcardCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FlashcardUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlashcardSelect<ExtArgs> | null;
    omit?: Prisma.FlashcardOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FlashcardUpdateInput, Prisma.FlashcardUncheckedUpdateInput>;
    where: Prisma.FlashcardWhereUniqueInput;
};
export type FlashcardUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FlashcardUpdateManyMutationInput, Prisma.FlashcardUncheckedUpdateManyInput>;
    where?: Prisma.FlashcardWhereInput;
    limit?: number;
};
export type FlashcardUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlashcardSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FlashcardOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FlashcardUpdateManyMutationInput, Prisma.FlashcardUncheckedUpdateManyInput>;
    where?: Prisma.FlashcardWhereInput;
    limit?: number;
};
export type FlashcardUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlashcardSelect<ExtArgs> | null;
    omit?: Prisma.FlashcardOmit<ExtArgs> | null;
    where: Prisma.FlashcardWhereUniqueInput;
    create: Prisma.XOR<Prisma.FlashcardCreateInput, Prisma.FlashcardUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FlashcardUpdateInput, Prisma.FlashcardUncheckedUpdateInput>;
};
export type FlashcardDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlashcardSelect<ExtArgs> | null;
    omit?: Prisma.FlashcardOmit<ExtArgs> | null;
    where: Prisma.FlashcardWhereUniqueInput;
};
export type FlashcardDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FlashcardWhereInput;
    limit?: number;
};
export type FlashcardDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlashcardSelect<ExtArgs> | null;
    omit?: Prisma.FlashcardOmit<ExtArgs> | null;
};
export {};
