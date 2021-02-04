import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn(); // Utilizo jest.fn() para obtener más datos de la función: si fue llamada, cuántas veces se llamó, ...
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks(); // limpia simulaciones de funciones y otros mocks que se hicieron en jest
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    });    

    test('debe mostrarse correctamente', () => {        
        expect( wrapper ).toMatchSnapshot();        
    })

    test('debe cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value }});

        expect( wrapper.find('p').text().trim() ).toBe( value );
        
    })

    test('No debe llamarse setCategories y setInputValue al hacer submit sin haber cambiado la caja de texto', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} }); // simulación del submit del formulario
        expect( setCategories ).not.toHaveBeenCalled();
    })       
    
})
