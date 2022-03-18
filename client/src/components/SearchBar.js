

function SearchBar({ handleSearch, handleChange, searchValue }) {


    function handleSubmit(e){
        e.preventDefault();
        handleSearch(searchValue)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={searchValue}
                placeholder='Search...'
                onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;