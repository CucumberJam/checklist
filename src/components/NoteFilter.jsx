import React, {useId} from 'react';
import InputApp from "./UI/input/InputApp";
import SelectApp from "./UI/select/SelectApp";
import '../styles/App.css';
const NoteFilter = ({filter, setFilter}) => {
    return (
        <div className="filter">
            <InputApp
                value={filter.query}
                onChange={e=>setFilter({...filter, query: e.target.value})}
                placeholder="Search..."/>
            <SelectApp
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort by: "
                options={[
                    {id: useId(), value: 'date', name: 'date of note'},
                    {id: useId(), value: 'text', name: 'content of note'}
                ]}>
            </SelectApp>
        </div>
    );
};

export default NoteFilter;