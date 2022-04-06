import React, { Component } from 'react';
import { SearchBox } from './Shared/SearchBox';

export class SearchBoxTest extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            searchQuery: '' 
        };
        this.searchQueryChanged = this.searchQueryChanged.bind(this); 
    }
    searchQueryChanged(searchQuery) {
        this.setState({searchQuery: searchQuery});
        console.log("Parent:", searchQuery);
    }
    render() {
        return (
            <>
                <SearchBox searchQueryChanged={(searchQuery) => this.searchQueryChanged(searchQuery)}>
                </SearchBox>
            </>
        );
    }
}