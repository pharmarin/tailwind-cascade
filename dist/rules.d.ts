export declare function createClassifier(prefix?: string): (className: string) => {
    variant: string;
    group: string;
    overrides: string[];
} | undefined;
