import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: GovernmentBuildingsType[]) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(b => b.address.street)
}

export function createMessages(houses: HouseType[]) {

    let callbackfn = (h: HouseType) => `Hello guys from ${h.address.street.title}`;

    return houses.map(callbackfn);
}