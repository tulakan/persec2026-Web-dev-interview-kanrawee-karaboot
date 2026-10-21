export function customSort(name: string[]) {
    const sorted = [...name].sort((a, b) => {
        /* 
            undefined -> use machine locale 
            parms - numeric ->  true: sort number from lower to higher
            parms - sensitivity ->  base: ignore case
        */
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
    return sorted;
}

