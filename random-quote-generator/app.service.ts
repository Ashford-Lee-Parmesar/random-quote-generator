const API_URL = 'https://type.fit/api/quotes';

export const fetchData = async () => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(!response.ok){
            throw new Error('Failed to fetch data');
        }
    
        const data = await response.json();
        return data;
    }

    catch (error) {
        console.error('Error fetching data:', error)
        throw error;
    }
}