const client = {
    fetchQuotesData: async () => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type':'application/json'}
        };

        const response = await fetch('https://api.quotable.io/quotes/random',requestOptions);
        return response.json();

    }
}

export default client;