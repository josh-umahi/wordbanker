import { User } from "../../types/User";

export const getLocalStorageProfile = ():User| null => {
    const profile = localStorage.getItem('profile');
    if (profile) {
        return JSON.parse(profile);
    }
    return null;
    }
export const setLocalStorageProfile = (profile: User) => {
    localStorage.setItem('profile', JSON.stringify(profile));
}
