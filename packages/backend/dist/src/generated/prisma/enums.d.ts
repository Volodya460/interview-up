export declare const QuestionCategory: {
    readonly JS: "JS";
    readonly HTML_CSS: "HTML_CSS";
    readonly React: "React";
    readonly Node: "Node";
};
export type QuestionCategory = (typeof QuestionCategory)[keyof typeof QuestionCategory];
export declare const QuestionDifficulty: {
    readonly junior: "junior";
    readonly middle: "middle";
    readonly senior: "senior";
};
export type QuestionDifficulty = (typeof QuestionDifficulty)[keyof typeof QuestionDifficulty];
