import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { PhoneListContainer } from '../../src/components/PhoneListContainer';
import { Image, Segment, Header } from 'semantic-ui-react';

describe('PhoneListContainer', () => {
    // Wrapper that contains an instance of the component that is being tested.
    let wrapper;
    // Mock functions and data to simulate the store.
    const mockGetPhones = jest.fn();
    const mockPhones = [
        {
            "id": 1,
            "name": "Xiaomi Redmi 5 Plus",
            "description": "No hay año en que Xiaomi domine con contundencia la lista de mejores teléfonos de menos de 200 euros si lo que buscamos es lo máximo por nuestro dinero. El Xiaomi Redmi 5 Plus es una garantía de éxito que nos da potencia, batería y mucha memoria interna contando además con una gran pantalla.",
            "screen": "6'",
            "ram": "4 GB",
            "internalMemory": "64 GB",
            "camera": "12 MP",
            "microSD": true,
            "battery": "4000 mAh",
            "color": "blue",
            "price": 181,
            "rating": 5,
            "featured": true,
            "image": "https://cdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-5-plus-1.jpg"
        },
        {
            "id": 1,
            "name": "Xiaomi Redmi 5 Plus",
            "description": "No hay año en que Xiaomi domine con contundencia la lista de mejores teléfonos de menos de 200 euros si lo que buscamos es lo máximo por nuestro dinero. El Xiaomi Redmi 5 Plus es una garantía de éxito que nos da potencia, batería y mucha memoria interna contando además con una gran pantalla.",
            "screen": "6'",
            "ram": "4 GB",
            "internalMemory": "64 GB",
            "camera": "12 MP",
            "microSD": true,
            "battery": "4000 mAh",
            "color": "blue",
            "price": 181,
            "rating": 5,
            "featured": true,
            "image": "https://cdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-5-plus-1.jpg"
        }
    ];
    
    beforeEach(() => {
        wrapper = shallow(<PhoneListContainer getPhones={mockGetPhones} phones={mockPhones} isFetching={false}/>)
    });

    it('renders the component', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('gets phones on componentDidMount', () => {
        expect(mockGetPhones.mock.calls.length).toBe(1);
    });

    it('renders a card for each phone', () => {
        expect(wrapper.find(Segment).length).toEqual(mockPhones.length);
    });

    it('shows the image, name and price of the phone on each card', () => {
        expect(wrapper.find(Image).at(0).props().src).toEqual(mockPhones[0].image);
        expect(wrapper.find(Header).at(0).props().children).toEqual(mockPhones[0].name);
        expect(wrapper.find('p').at(0).props().children[0]).toEqual(mockPhones[0].price);
    });
})