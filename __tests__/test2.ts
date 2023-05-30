import {Pood} from "../pood";


let poeObj:Pood=null;

beforeEach(() => {
    poeObj=new Pood();
});

test('kasAvatudEsmas', () => {
    expect(poeObj.KasAvatudPaev(17.30,'Esmaspaev')).toBe(true);
});
test('kasAvatudLaup', () => {
    expect(poeObj.KasAvatudPaev(21,'Laupaev')).toBe(true);
});
test('kasAvatudPuha', () => {
    expect(poeObj.KasAvatudPaev(9,'Puhapaev')).toBe(false);
});

