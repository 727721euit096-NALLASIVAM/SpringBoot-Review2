import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/students');
}

const create = data => {
    return httpClient.post("/students", data);
}

const get = id => {
    return httpClient.get(`/students/${id}`);
}

const update = data => {
    return httpClient.put('/students', data);
}

const remove = id => {
    return httpClient.delete(`/students/${id}`);
}

export default { getAll, create, get, update, remove };