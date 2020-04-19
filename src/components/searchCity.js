import React from 'react';

const SearchCity = (props) => (
    <div className='row mb-4'>
        <div className='col-md-12'>
            <label for="">Seacrh City</label>
        </div>
        <div className='col-8' style={{ paddingRight: 0 }}>
            <input
                class="form-control"
                type='text'
                placeholder='Type keyword or city name'
                value={props.value}
                onChange={props.onChange}
            />
        </div>
        <div className='col-4'>
            <button type="submit" class="btn btn-info btn-block">Search</button>
        </div>
    </div>
)

export default SearchCity;