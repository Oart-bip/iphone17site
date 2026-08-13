// label: texto;
// mb: margens de todos os lados;
// md: redimensionamento para telas maiores;
// px, py..: padding de tal lado;
// text-lg: aumenta a fonte em 18px;
// mx: controla a margem horizontal;
// flex col: transforma os elementos em containers flexiveis 
// md:flex-row: se a tela for maior, coloca os containers em linha
// rounded-full: função de arredondar as bordas
// transition all: animacao do hover mais fluida
// hover:scale: aumenta de tamanho

function Intro() {

    const specs = [
        { value: '6.3"', label: 'Display Super Retina XDR', color: 'text-blue-600' },
        { value: 'A18 Pro', label: 'Chip mais rápido', color: 'text-orange-500' },
        { value: '48MP', label: 'Sistema de câmera', color: 'text-blue-600' },
        { value: '29h', label: 'Bateria', color: 'text-orange-500' }
    ];

    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">

                <h1 className=" text-6xl md:text-8xl font-bold mb-6"> Iphone 17 PRO </h1>

                <p className="text-2xl md:text-4xl mb-4 text-gradient font-bold"> Titânio. Tão forte. Tão leve. Tão Pro. </p>

                <p className=" text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"> Design mais refinado que já criamos. Titânio de grau aeroespacial. Chip A18 Pro. Sistema de câmera Pro revolucionário. </p>

            </div>

            <div className=" flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
                <button className=" bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-blue-500/50"> Compre Agora </button>
                <button> Saiba mais </button>
            </div>

        </section>
    )
}

export default Intro