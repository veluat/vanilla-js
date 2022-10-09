import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMassege, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {buildetAt: 2012, repaired: false, address: {number: 100, street: {title: 'White street'}}},
            {buildetAt: 2008, repaired: false, address: {number: 100, street: {title: 'Happy street'}}},
            {buildetAt: 2020, repaired: false, address: {number: 101, street: {title: 'Happy street'}}},
        ],
        governmentBuildings: [
            {type: 'HOSPITAL', budget: 200000, staffCount: 200, address: {number: 101, street: {title: 'Central Str'}}},
            {type: 'FIRE-STATION', budget: 500000, staffCount: 1000, address: {number: 101, street: {title: 'South Str'}}}
        ],
        citizensNumber: 1e6
    }
})

test('Budget should changed for hospital', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);

})

test('Budget should changed for fire-station', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000);

})

test('Houses should be repaired', ()=>{
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})

test('staff should be increased', ()=>{
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be repaired', ()=>{
    toHireStaff(city.governmentBuildings[0], 20);
    toHireStaff(city.governmentBuildings[1], 100);

    expect(city.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[1].staffCount).toBe(1100)
})

test('greeting should be correct for city', ()=>{
    const message = createMassege(city);

    expect(message).toBe('Hello New York citizens. All 1000000 people')

})