const url = 'https://api.unsplash.com';

const fetchImages = async (page) => {
    const config = {
        method: "GET",
        mode: "cors",
        headers: { "Accept-Version": "v1" }
    };

    const response = await fetch(`${url}/photos/?client_id=${process.env.REACT_APP_API_ACCESS_KEY}&per_page=12&page=${page}`, config);
    const data = await response.json();
    if (response.ok) {
        return data;
    } else {
        throw new Error(data.errors);
    }
}

export { fetchImages };