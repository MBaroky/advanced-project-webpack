const formHandler= require('../formHandler');
const { distributer} = formHandler;
jest.mock('../fetcher.js')
describe('handleSubmit', ()=>{
    console.log = jest.fn();
    console.log('NVM');
    expect(console.log).toHaveBeenCalledWith('NVM');
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    test('passing URL to return error', ()=>{
        distributer('google.com').then(({pass, data})=>{
            expect(pass).toBe('error');
        })
    })
    test('passing text to return data', ()=>{
        distributer('Picard').then(({pass, data})=>{
            expect(pass).toBe('passed');
        })
    })
})