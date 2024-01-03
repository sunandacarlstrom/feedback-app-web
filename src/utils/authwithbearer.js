const authWithBearer = async (url) => {
    try {
        const response = await fetch(url, {
            headers: { Authorization: `Bearer ${sessionStorage.token}` },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }

    return undefined;
};

export default authWithBearer ;
