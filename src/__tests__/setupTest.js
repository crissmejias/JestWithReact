import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
test('Test de prueba', ()=>{
    expect(1).toBeTruthy()
})