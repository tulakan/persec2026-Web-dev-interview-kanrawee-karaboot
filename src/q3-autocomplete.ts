export function autocomplete(search: string, items: string[], maxResult: number): string[] {
    let results: string[] = [];
    const searchText = search.toLowerCase();

    /* empty input handle */
    if (maxResult <= 0 || search.length === 0 || items.length === 0) {
        return results;
    }

    /* filter item by search text */
    const searchResults = items.filter(item => item.toLowerCase().includes(searchText));


    /* sort result by founded position (start,middle, end) */
    searchResults.sort((a, b) => {
        const indexA = getMatchPosition(a, searchText);
        const indexB = getMatchPosition(b, searchText);
        return indexA - indexB;
    });

    // searchResults.sort((a, b) => {
    //     const indexA = a.toLowerCase().indexOf(searchText);
    //     const indexB = b.toLowerCase().indexOf(searchText);
    //     return indexA - indexB;
    // });

    /* limit result by maxResult */
    results = searchResults.slice(0, maxResult)

    return results;
}

function getMatchPosition(item: string, searchText: string): number {
    const text = item.toLowerCase();
    if (text.startsWith(searchText)) return 0;
    if (text.endsWith(searchText)) return 2;
    return 1;
};