export const FilterByCategory = (category: string, items: any) => {
    return items.filter((item: any) => item.postedIn.Category === category);
}