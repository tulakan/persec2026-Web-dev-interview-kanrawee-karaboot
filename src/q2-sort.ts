export function customSort(name: string[]) {
    const sorted = [...name].sort((a, b) => {
        /* 
            undefined -> use machine locale 
            params - numeric ->  true: sort number from lower to higher
            params - sensitivity ->  base: ignore case
        */
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
    return sorted;
}

