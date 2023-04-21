import * as toursAPI from './tours-api';

export async function getAllTours() {
    const tours = await toursAPI.getTours();
    return tours
};

export async function getTour(id) {
    const tour = await toursAPI.getTour(id);
    return tour;
};

export async function createTour(tourData) {
    const tour = await toursAPI.createTourRequest(tourData);
    return tour;
};

export async function deleteTour(id) {
    const tour = await toursAPI.deleteTourRequest(id); 
};

export async function updateTour(id, tourData) {
    const tour = await toursAPI.editTourRequest(id, tourData);
    return tour;
};
   