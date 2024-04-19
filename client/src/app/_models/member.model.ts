import { Photo } from "./photo.model";

export interface Member {
    id: number,
    userName: string,
    photoUrl: string,
    age: number,
    knownAs: string,
    created: Date,
    lastActive: Date,
    gender: string,
    introduction: string,
    lookingfor: string,
    city: string,
    interests: string,
    country: string,
    photos: Photo[]
}