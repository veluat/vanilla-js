import {CityType} from "./../02/02_02";
import {getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {id: 1, buildetAt: 2012, repaired: false, address: {number: 100, street: {title: 'White street'}}},
            {id: 2, buildetAt: 2008, repaired: false, address: {number: 100, street: {title: 'Happy street'}}},
            {id: 3, buildetAt: 2020, repaired: false, address: {number: 101, street: {title: 'Happy street'}}},
        ],
        governmentBuildings: [
            {type: 'HOSPITAL', budget: 2e5, staffCount: 200, address: {number: 101, street: {title: 'Central Str'}}},
            {type: 'FIRE-STATION', budget: 5e5, staffCount: 1000, address: {number: 101, street: {title: 'South Str'}}}
        ],
        citizensNumber: 1e6
    }
})

test('list of streets titles of governments buildings', () => {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('Central Str');
    expect(streetsNames[1]).toBe('South Str');
})


test('list of streets titles', () => {
    let streets = getStreetsTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0].title).toBe('White street');
    expect(streets[1].title).toBe('Happy street');
    expect(streets[1].title).toBe('Happy street');
})