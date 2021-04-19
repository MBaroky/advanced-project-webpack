const {handleSubmit} = require('../formHandler')
describe('handleSubmit', ()=>{
    console.log = jest.fn();
    console.log('NVM');
    expect(console.log).toHaveBeenCalledWith('NVM');
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    test('passing URL to return error', ()=>{
        expect(handleSubmit('https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/examples')).toBe('url is not allowed');
    })
})