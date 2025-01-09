export function classes(...values: (string | null | undefined)[]): string {
    return values.reduce((acc, cur) => cur ? (acc ? acc + ' ' : '') + cur : acc, null) || '';
}