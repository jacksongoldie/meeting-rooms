import { FormControl, TextField, Button } from '@mui/material';

function SearchBar({ handleSearch, handleChange, searchValue }) {


    function handleSubmit(e){
        e.preventDefault();
        handleSearch(searchValue)
    }

    return (
        <div>
            <FormControl onSubmit={handleSubmit}>
                <TextField
                margin='normal'
                type="text" 
                value={searchValue}
                placeholder='Search...'
                onChange={handleChange}
                />
                <Button variant='contained' type="submit">Search</Button>
            </FormControl>
        </div>
    )
}

export default SearchBar;