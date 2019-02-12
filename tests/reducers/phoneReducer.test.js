import phoneReducer from '../../src/reducers/phoneReducer';

describe('PhoneReducer', () => {
    it('has a default state', () => {
        expect(phoneReducer(undefined, { type: 'UNEXPECTED_ACTION'})).toEqual({
            phones: [],
            phone: {},
            isFetching: false
        });
    });

    it('can handle GET_PHONES_REQUEST', () => {
        expect(phoneReducer(undefined, {
            type: 'GET_PHONES_REQUEST',
            payload: null
        })).toEqual({
            phones: [],
            phone: {},
            isFetching: true
        });
    });

    it('can handle GET_PHONES_SUCCESS', () => {
        expect(phoneReducer(undefined, {
            type: 'GET_PHONES_SUCCESS',
            payload: [{id: 1, name: 'Test object for GET_PHONES_SUCCESS'}]
        })).toEqual({
            phones: [{id: 1, name: 'Test object for GET_PHONES_SUCCESS'}],
            phone: {},
            isFetching: false
        });
    });

    it('can handle GET_PHONES_ERROR', () => {
        expect(phoneReducer(undefined, {
            type: 'GET_PHONES_ERROR',
            payload: null
        })).toEqual({
            phones: [],
            phone: {},
            isFetching: false
        });
    });

    it('can handle GET_PHONE', () => {
        expect(phoneReducer(undefined, {
            type: 'GET_PHONE',
            payload: {id: 1, name: 'Test object for GET_PHONE'}
        })).toEqual({
            phones: [],
            phone: {id: 1, name: 'Test object for GET_PHONE'},
            isFetching: false
        });
    });
})