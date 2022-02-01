import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {

    const history = useHistory();

    const [countryName, setCountryName] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountryName(event.target.value);
    }

    const getCountry = () => {
        history.push('/country', countryName)
    }
    return (
        <div data-testid="home">
            <h2>This is homeis</h2>
            <div>
                <TextField
                    data-testid="input"
                    value={countryName}
                    onChange={handleInputChange}
                    placeholder="Enter Country"
                    variant="outlined"
                    sx={{width: "25%" , mb: 3}}
                />
            </div>
            <Button
                data-testid="button"
            disabled={!countryName} variant="contained" sx={{width: "25%"}} size="large" onClick={getCountry}>Submit</Button>
        </div>
    );
};

export default Home;