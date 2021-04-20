const formHandler= require('../formHandler');
const { distributer} = formHandler;
const fetcher = require('../fetcher');
describe('handleSubmit', ()=>{
    console.log = jest.fn();
    console.log('NVM');
    expect(console.log).toHaveBeenCalledWith('NVM');
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    jest.mock(fetcher);

    test('passing URL to return error', ()=>{
        formHandler.fetcher = jest.fn();
        expect(distributer('https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/examples')).toBe('url is not allowed');
    })
})