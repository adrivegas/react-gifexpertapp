import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); // finge la llamada a useFetchGifs y controla la información que responda

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Batman';
    
    test('se debe mostrar el componente correctamente', () => {

        // falsear la data
        // cuando se llame useFetchGifs dentro del componente, va a retornar el valor inicial de useFetchGifs
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
       
        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de mostrar items cuando se cargan imágenes con custom hook useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            title: 'Primer elemento',
            url: 'https://localhost/primer.jpg'
        },
        {
            id: 'DEF',
            title: 'Segundo elemento',
            url: 'https://localhost/segundo.jpg'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })
    
    
})
