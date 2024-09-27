'use client'

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

interface SearchProductsProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchProducts: React.FC<SearchProductsProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearchChange = (event:any) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
        onSearch(searchTerm);
    };

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(); }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Products"
                inputProps={{ 'aria-label': 'search products' }}
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearchSubmit}>
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <DirectionsIcon />
            </IconButton>
        </Paper>
    );
};
