function GlobalStyle (){
    return (
        <style global jsx>{`
        
        *{
            // background-color: black;
            margin:0;
            padding:0;
            box-sizing:border-box;
            list-style:none;
        }

        body {
            font-family: 'Open Sans', sans-serif;
        }

        /* App fit height */
        html, body, #__next{
            min-height:100vh;
            display:flex;
            flex:1;
        }
        #__next{
            flex:1;
        }
        #__next > *{
            flex:1;
        }
        /* App fit height */
        `}</style>
    );
}



export default function MyApp ({ Component, pageProps }){

    console.log('roda em tdas as paginas');
    return (

        <>
        <GlobalStyle />
         <Component {...pageProps} />

         </>
    );
}