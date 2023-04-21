import sendRequest from "./send-request";
const BASE_URL = '/api/tours';

export async function getTours() {
  return sendRequest(BASE_URL);
}

export async function createTourRequest(tourData) {
    console.log("aiya")
    return sendRequest(BASE_URL, 'POST', tourData)
}

export async function editTourRequest(id, tourData) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', tourData)
}

export async function deleteTourRequest(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export async function getTour(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}