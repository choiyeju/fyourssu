import React, { Component } from 'react';
import search from '../search.png';

import axios from 'axios';
import $ from 'jquery';
window.$ = $;

export class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ""
        }
        this.searchQueryChanged = this.searchQueryChanged.bind(this); 
        this.sendSearchQuery = this.sendSearchQuery.bind(this); 
    }
    sendSearchQuery() {
        this.props.searchQueryChanged(this.state.searchQuery); 
    }
    searchHandler = this.debounce(() => {
        console.log('Child:', this.state.searchQuery); 
        this.sendSearchQuery(); 
    }, 300)
    searchQueryChanged(e) {
        const qry = e.target.value;
        this.setState({searchQuery: qry});
        console.log(qry); 
        this.searchHandler(); 
    }
    debounce(fn, interval) {
        let debounceTimer
        return _ => {
            clearTimeout(debounceTimer)
            debounceTimer = setTimeout(_ => {
                debounceTimer = null
                fn.apply(this, arguments)
            }, interval)
        };
    }
    render() {
        return (
            <div style={{ display: 'flex', }}>
                <img src={search} style={{width: '30px', }} onClick={() => {
                                        if (!$('#search').is(':visible'))
                                        $('#search').css('display', 'block')
                                    else
                                        $('#search').css('display', 'none')
                }}/>
                <input id='search' style={{ display: 'none', }}
                    type="search" placeholder="" aria-describedby="btnSearch"
                    value={this.state.searchQuery}
                    onChange={this.searchQueryChanged}
                />
                <span style={{ color: 'gray', margin: '3px 5px 0px 5px', fontWeight: '700' }} onClick={this.sendSearchQuery}>검색</span>
            </div>
        );
    }
}