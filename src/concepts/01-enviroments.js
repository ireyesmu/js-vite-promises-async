

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentsComponent = ( element ) => {

        // console.log( process.env );
        console.log( import.meta.env ); // Forma de acceder al .env desde VITE

        const html = `
            Dev: ${ import.meta.env.DEV } <br/>
            Prod: ${ import.meta.env.PROD } <br/>
            KEY: ${ import.meta.env.VITE_API_KEY } <br/>
            URL: ${ import.meta.env.VITE_BASE_URL } <br/>
        `;

        element.innerHTML = html;
}