import {CityType} from "./../02/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_2";

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


test('test city should contains 3 houses', () => {

    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildetAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White street');

    expect(city.houses[1].buildetAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe('Happy street');

    expect(city.houses[2].buildetAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe('Happy street');
})

test('test city should contains hospital and station 3 houses', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL');
    expect(city.governmentBuildings[0].budget).toBe(2e5);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str');

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION');
    expect(city.governmentBuildings[1].budget).toBe(5e5);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe('South Str');
})

test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy Street');

    expect(city.houses.length).toBe(3);
    expect(city.houses[0].id).toBe(1);
})

test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");
})