const {checkForName} = require('../nameChecker')
describe('nameChecker', ()=>{
    console.log = jest.fn();
    console.log('NVM');
  expect(console.log).toHaveBeenCalledWith('NVM');
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    test('passing Picard to return true', ()=>{
        expect(checkForName('Picard')).toBeTruthy();
    })
    test('passing text from MeaningCloud to return false', ()=>{
        expect(checkForName("Main dishes were quite good, but desserts were too sweet for me."
        )).toBeFalsy();
    })
})