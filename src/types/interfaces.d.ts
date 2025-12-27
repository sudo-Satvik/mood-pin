interface ISearchInitialState {
    query: string,
    activeTab: string,
    results: string[],
    loading: boolean,
    error: string | null
}