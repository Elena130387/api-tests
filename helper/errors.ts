// expect text
export const defaultText = (name: string, expectData: string | number, respData: string | number) =>
    `Expected API to return ${name}: ${expectData}, but got error ${respData}`