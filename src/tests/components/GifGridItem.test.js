import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'Probando GifGridItem';
    const url = 'https://localhost/gif';

    test('Debe de mostrar el componente correctamente', () => {
        const wrapper = shallow( <GifGridItem title={ title } url={ url }/> )
        expect( wrapper ).toMatchSnapshot();
    })
    
})
