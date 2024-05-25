import React, { Fragment, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { Container, TextField, Button, Snackbar, CircularProgress, Box, Typography } from '@mui/material';
import { Alert } from '@mui/material';

const markers = [
    { id: 1, name: "Ha Noi", position: { lat: 21.03333, lng: 105.85000 } },
    { id: 2, name: "Long Xuyen", position: { lat: 10.37528, lng: 105.41833 } },
    { id: 3, name: "Long An", position: { lat: 10.53111, lng: 106.41250 } }
];

const GGMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
        libraries: ["places"], // Optional: if you need additional libraries
        loadingElement: <CircularProgress />, // Display loading spinner while script is loading
        id: 'google-map-script', // Unique id for the script to avoid multiple loadings
    });

    const [activeMarker, setActiveMarker] = useState(null);
    const [mapCenter, setMapCenter] = useState({ lat: 10.83333, lng: 106.63278 });
    const [searchTerm, setSearchTerm] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json
            ?address=${searchTerm}&key=${import.meta.env.VITE_GOOGLE_MAP_API_KEY}`);
            const data = await response.json();
            console.log(data)
            if (data.results.length > 0) {
                const location = data.results[0].geometry.location;
                setMapCenter(location);
            } else {
                setSnackbarMessage('Location not found');
                setSnackbarOpen(true);
            }
        } catch (error) {
            console.error('Error fetching geocoding data:', error);
            setSnackbarMessage('Error fetching geocoding data');
            setSnackbarOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Fragment>
            <Container maxWidth="md">
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                    RentMapAPI
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" mb={4} mt={4}>
                    <TextField
                        variant="outlined"
                        placeholder="Search for a location"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSearch}
                        disabled={loading}
                        style={{ marginLeft: '10px', height: '56px' }}
                    >
                        {loading ? <CircularProgress size={24} /> : 'Search'}
                    </Button>
                </Box>
                <Box style={{ width: "100%", height: "90vh", position: 'relative' }}>
                    {isLoaded ? (
                        <GoogleMap
                            center={mapCenter}
                            zoom={12}
                            onClick={() => setActiveMarker(null)}
                            mapContainerStyle={{ width: "100%", height: "100%" }}
                        >
                            {markers.map(({ id, name, position }) => (
                                <MarkerF key={id} position={position} onClick={() => handleActiveMarker(id)}>
                                    <div>{name}</div>
                                </MarkerF>
                            ))}
                        </GoogleMap>
                    ) : (
                        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                            <CircularProgress />
                        </Box>
                    )}
                </Box>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert onClose={handleSnackbarClose} severity="error">
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Container>
        </Fragment>
    );
};

export default GGMap;
