import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b;
}


export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
   return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    return building.budget += budget;
}

/*export const demolishHousesOnTheStreet = (city: CityType, happyStreet: string) => {

}*/

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (buildings: GovernmentBuildingsType, staffCountToFire: number) => {
    buildings.staffCount -= staffCountToFire;
}

export const toHireStaff = (buildings: GovernmentBuildingsType, staffCountToFire: number) => {
    buildings.staffCount += staffCountToFire;
}

export function createMassege(city: CityType) {
    return `Hello ${city.title} citizens. All ${city.citizensNumber} people`;
}