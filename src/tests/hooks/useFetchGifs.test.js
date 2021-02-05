import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Gamora' ) );
        const { data, loading } = result.current;
        await waitForNextUpdate();      

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
        
    })

    test('debe de retornar un arreglo de imágenes y el loading en false', async() => {

        // waitForNextUpdate indica cuando sucedió un cambio en el estado de nuestro customHook         
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Gamora' ) );
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
        
    })
    
    
})
