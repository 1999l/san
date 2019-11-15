(() => {
    const num: number = 1;
    const bool: boolean = true;
    const str: string = "qwq";
    const arr: number[] = [1, 2, 1];
    const arr1: string[] = ['1', '2', '3'];
    const arr2: [string, number, boolean | null | undefined] = ['1', 1, true];
    const fn = (num1: number, num2: number): string => {
        return num1 + num2 + '123'
    }
    fn(1, 2)
})();