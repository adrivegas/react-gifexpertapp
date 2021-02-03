import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'Probando GifGridItem';
    const url = 'https://localhost/gif';
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/> );

    test('Debe de mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe tener el title dentro de un párrafo ', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })
    
    test('Debe tener una imágen con el title y la url de los props', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title )

    })
    
    test('Debe tener la clase animate__fadeIn dentro del div', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );

    })
    
    
})
