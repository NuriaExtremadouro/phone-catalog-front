import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { PhoneDetailComponent } from '../../src/components/PhoneDetailComponent';
import { Image, Header } from 'semantic-ui-react';

describe('PhoneDetailComponent', () => {
    // Wrapper that contains an instance of the component that is being tested.
    let wrapper;
    // Mock functions and data to simulate the store.
    const mockGetPhone = jest.fn(Number);
    const mockPhone = {
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
    };
    
    beforeEach(() => {
        wrapper = shallow(<PhoneDetailComponent getPhone={mockGetPhone} phone={mockPhone} isFetching={false} match={{params: {id: 1}, isExact: true, path: "", url: ""}}/>)
    });

    it('renders the component', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('gets the phone data on componentDidMount', () => {
        expect(mockGetPhone.mock.calls.length).toBe(1);
    });

    it('shows the data of the phone', () => {
        expect(wrapper.find(Image).props().src).toEqual(mockPhone.image);
        expect(wrapper.find(Header).props().children).toEqual(mockPhone.name);
        expect(wrapper.find('p').at(0).props().children).toEqual(mockPhone.screen);
        expect(wrapper.find('p').at(1).props().children).toEqual(mockPhone.ram);
        expect(wrapper.find('p').at(2).props().children).toEqual(mockPhone.internalMemory);
        expect(wrapper.find('p').at(3).props().children).toEqual(mockPhone.camera);
        expect(wrapper.find('p').at(4).props().children).toEqual(mockPhone.microSD ? "Yes" : "No");
        expect(wrapper.find('p').at(5).props().children).toEqual(mockPhone.battery);
        expect(wrapper.find('p').at(6).props().children).toEqual(mockPhone.color);
        expect(wrapper.find('p').at(7).props().children[0]).toEqual(mockPhone.price);
        expect(wrapper.find('p').at(8).props().children).toEqual(mockPhone.description);
    });
})