import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }    

    const renderTwoHeroes = ( hero1, hero2 ) => {
        element.innerHTML = `
            <h3>${ hero1.name }</h3>
            <h3>${ hero2.name }</h3>
        `;
    }

    const renderError = ( error ) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h3>${error}</h3>
        `;
    }


    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f233c9f2425f16916';

    //! Ejemplo de un Promise
    // findHero( id1 )
    //     // .then( hero  => renderHero(hero) )
    //     .then( renderHero )
    //     // .catch( error => renderError(error) );
    //     .catch( renderError );



    //! Forma 1: Ejemplo para un Promise Hell, o una función donde se requieren dos héroes a la vez. Sigue siendo un callback.
    // findHero( id1 )
    //     .then( (hero1)  => {

    //         findHero( id2 )
    //             .then( (hero2) => {
    //                 renderTwoHeroes( hero1, hero2 );
    //             })
    //             .catch( renderError );
    //         })
    // .catch( renderError );
    


    //! Forma 2: Refactorizando el código del Promise Hell. Se pueden anidar los .then y mantener un solo .catch
    // let hero1;
    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then( hero2 => {
    //         renderTwoHeroes( hero1, hero2 );
    //     })
    //     .catch( renderError );



    //! Forma 3: Promise.all(); requiere que las promesas no dependan entre sí, es decir, que cada una sea independiente del resultado de las demás. Caso contrario, usar Forma 2
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
        .then( ([hero1, hero2]) => renderTwoHeroes(hero1, hero2) )
        .catch( renderError );


}

    

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {
    // Código refactorizado (optimizado)
    return new Promise( ( resolve, reject ) => {
        
        const hero = heroes.find( hero => hero.id === id );

        if ( hero ) {
            resolve( hero );
            return;
        }

        reject(`Hero with id ${ id } not found`);

    });

    // Código inicial
    // const promise = new Promise( ( resolve, reject ) => {
        
    //     const hero = heroes.find( hero => hero.id === id );

    //     if (hero) {
    //         resolve( hero );
    //         return;
    //     }

    //     reject(`Hero with id ${ id } not found`);

    // });

    // return promise;

}