const authGetWithBearer = async (url) => {
    try {
        const response = await fetch(url, {
            headers: { Authorization: `Bearer ${sessionStorage.token}` },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        const errorMessage = `Fel vid förfrågan. Felmedelande: ${error}`;
        console.error(errorMessage);
        return null;
    }
};

const authPostWithBearer = async (url, body) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.token}`,
            },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorMessage = `Fel vid förfrågan. Statuskod: ${response.status}`;
            console.error(errorMessage);
            return errorMessage;
        }
    } catch (error) {
        const errorMessage = `Fel vid förfrågan. Felmedelande: ${error}`;
        console.error(errorMessage);
        return errorMessage;
    }
};

export { authGetWithBearer, authPostWithBearer };
