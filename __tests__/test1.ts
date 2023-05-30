import {Pood} from "../pood";


let poeObj:Pood=null;

beforeEach(() => {
    poeObj=new Pood();
});

test('kasAvatud', () => {
    expect(poeObj.KasAvatud(17.30)).toBe(true);
});

