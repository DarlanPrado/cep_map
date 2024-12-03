interface Coordinates {
    longitude: string,
    latitude: string,
}

interface Location {
    type: string,
    coordinates: Coordinates,
}

export interface DataCep {
    cep: string,
    state: string,
    city: string,
    neighborhood: string,
    street: string,
    service: string,

}