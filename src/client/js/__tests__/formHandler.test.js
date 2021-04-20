const formHandler= require('../formHandler');
const { distributer} = formHandler;
jest.mock('../fetcher.js')
describe('handleSubmit', ()=>{
    console.log = jest.fn();
    console.log('NVM');
    expect(console.log).toHaveBeenCalledWith('NVM');
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    test('passing URL to return error', ()=>{
        // jest.spyOn(fetcher, 'fetcher').mockImplementation(() => {});
        expect(distributer('https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/examples')).toBe('url is not allowed');
    })
})