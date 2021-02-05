import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {

    test('se debe mostrar el componente correctamente ', () => {

        const wrapper = shallow( <GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('debe de mostrar una lista de categorías', () => {
        
        const categories = ['Gamora', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    })
    
    
    
})
