import { Urls } from './urls';

export const getData = async (uri, options) => {
    const response = await fetch(Urls.rootUrl + uri, {
        method: "GET",
        headers: Urls.defaultHeaders,
    });

    const data = await response.json();
    console.log(data)

    return data;
}

export const postData = async(uri, body) => {
    const response = await fetch(Urls.rootUrl + uri, {
        method: "POST",
        headers: Urls.defaultHeaders,
        body: JSON.stringify(body)
    });

    return response.json();
}
