import {Pood} from "../pood";


let poeObj:Pood=null;

beforeEach(() => {
    poeObj=new Pood();
});

test('FastForward', () => {
    expect(poeObj.FastForward('paev')).toBe('endiselt lahti');
});
