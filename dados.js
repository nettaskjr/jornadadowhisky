/* Relação dos Wiskeys cadastrados
nome: "Buffalo Trace",
nome: "Glenfiddich 12 anos",
nome: "Jameson",
nome: "Pappy Van Winkle's Family Reserve 23 anos",
nome: "Jack Daniel's Old No. 7",
nome: "Johnnie Walker Black Label",
nome: "Old Parr 12 Anos",
nome: "Woodford Reserve",
nome: "Gentleman Jack",
nome: "Buchanan's 12 Anos",
nome: "Hakushu Distiller's Reserve",
nome: "Yamazaki 12 Anos",
nome: "Maker's Mark",
nome: "Chivas Regal 12 Anos",
nome: "Dewar's 12 Anos",
nome: "Wild Turkey 101",
nome: "Royal Salute 21 Anos",
nome: "Talisker 10 Anos", 
nome: "White Horse",
*/

let dados = [
    {
        nome: "Buffalo Trace",
        descricao: "Um dos bourbons mais populares e acessíveis do mercado...",
        classificacao: "Bourbon",
        regiao: "Kentucky",
        idade: "6 anos",
        prova: "46%",
        finish: "Nenhum",
        notasDeDegustacao: "Notas de baunilha, caramelo, especiarias e um toque de madeira.",
        preco: "Médio",
        disponibilidade: "Fácil de encontrar",
        link: "https://www.buffalotracedistillery.com/",
        degustacao: "https://www.instagram.com/reel/Cz4Qg27psPO/ ",
        tags: "bourbon kentucky milho caramelo especiarias"
    },
    {
        nome: "Glenfiddich 12 anos",
        descricao: "Um single malt escocês clássico, conhecido por sua suavidade e notas frutadas.",
        classificacao: "Single Malt Escocês",
        regiao: "Speyside",
        idade: "12 anos",
        prova: "40%",
        finish: "Nenhum",
        notasDeDegustacao: "Maçã verde, pêra, mel e um toque de baunilha.",
        preco: "Médio",
        disponibilidade: "Fácil de encontrar",
        link: "https://www.glenfiddich.com/",
        degustacao: "https://www.instagram.com/reel/C4yh5kMPp-4/",
        tags: "singlemalt escoces speyside fruta mel"
    },
    {
        nome: "Jameson",
        descricao: "Um dos Irish Whiskies mais populares do mundo, conhecido por sua suavidade e caráter triplo destilado.",
        classificacao: "Irish Whiskey",
        regiao: "Irlanda",
        idade: "Mistura de whiskies",
        prova: "40%",
        finish: "Nenhum",
        notasDeDegustacao: "Notas suaves de cereal, mel e um toque de especiarias.",
        preco: "Baixo",
        disponibilidade: "Fácil de encontrar",
        link: "https://www.jamesonwhiskey.com/",
        degustacao: "https://www.instagram.com/reel/C_OiDHhyV14/",
        tags: "irishwhiskey irlanda suave cereal mel"
    },
    {
        nome: "Pappy Van Winkle's Family Reserve 23 anos",
        descricao: "Um dos bourbons mais raros e cobiçados do mundo, conhecido por sua complexidade e sabor excepcional.",
        classificacao: "Bourbon",
        regiao: "Kentucky",
        idade: "23 anos",
        prova: "45.2%",
        finish: "Nenhum",
        notasDeDegustacao: "Notas de caramelo, chocolate amargo, couro e especiarias.",
        preco: "Muito alto",
        disponibilidade: "Muito difícil de encontrar",
        link: "https://www.vanwinklefamilyreserve.com/",
        degustacao: "https://www.instagram.com/pappyandco/",
        tags: "bourbon kentucky raro colecionavel caramelo chocolate"
    },
    {
        nome: "Jack Daniel's Old No. 7",
        descricao: "Um Tennessee Whiskey conhecido mundialmente por seu sabor suave e processo de filtragem através de carvão de bordo.",
        classificacao: "Tennessee Whiskey",
        regiao: "Tennessee",
        idade: "Indefinido (mistura de whiskies)",
        prova: "40%",
        finish: "Nenhum",
        notasDeDegustacao: "Caramelo, baunilha, leve toque de fumaça e um final longo e suave.",
        preco: "Médio",
        disponibilidade: "Fácil de encontrar",
        link: "https://pt.wikipedia.org/wiki/Jack_Daniel's",
        degustacao: "https://www.instagram.com/reel/CxBq0ZOPQJl/",
        tags: "tennessee whiskey bourbon milho carvao suave tenesse"
    },
    {
        nome: "Johnnie Walker Black Label",
        descricao: "Um blended scotch whisky escocês, conhecido por seu sabor robusto e complexo, resultado da mistura de mais de 40 maltes e grãos.",
        classificacao: "Blended Scotch Whisky",
        regiao: "Escócia",
        idade: "12 anos (em média)",
        prova: "40%",
        finish: "Nenhum",
        notasDeDegustacao: "Frutas secas, especiarias, turfa leve e um final longo e persistente.",
        preco: "Médio-alto",
        disponibilidade: "Fácil de encontrar",
        link: "https://www.johnniewalker.com/pt-br/nossa-familia/black-label/",
        degustacao: "https://www.instagram.com/reel/CxTg4xdvvYW/",
        tags: "blended scotch whisky escocia robusto frutas secas especiarias"
    },
    {
        nome: "Old Parr 12 Anos",
        descricao: "Um blended scotch whisky escocês, conhecido por sua tradição e sabor aveludado, resultado da combinação de maltes envelhecidos por pelo menos 12 anos.",
        classificacao: "Blended Scotch Whisky",
        regiao: "Escócia",
        idade: "12 anos (mínimo)",
        prova: "40%",
        finish: "Nenhum",
        notasDeDegustacao: "Frutas secas, mel, especiarias e um toque de baunilha.",
        preco: "Médio",
        disponibilidade: "Fácil de encontrar",
        link: "https://www.casadabebida.com.br/whisky/whisky-old-parr-12-anos/",
        degustacao: "https://www.tiktok.com/@jornadadowhisky/video/7184174615420308742", 
        tags: "blended scotch whisky escoces tradicional frutas secas mel"
    },
    {
        nome: "Woodford Reserve",
        descricao: "Um bourbon americano de luxo, destilado em pequenos lotes e envelhecido em barris de carvalho branco americano, conhecido por seu sabor complexo e notas de especiarias.",
        classificacao: "Bourbon",
        regiao: "Kentucky",
        idade: "Indefinido (mistura de whiskies)",
        prova: "43,2%",
        finish: "Nenhum",
        notasDeDegustacao: "Especiarias, caramelo, baunilha, frutas secas e um toque de noz.",
        preco: "Alto",
        disponibilidade: "Moderada",
        link: "https://www.woodfordreserve.com/",
        degustacao: "https://www.instagram.com/reel/Cxd91gAP-0u/",
        tags: "bourbon kentucky complexo especiarias caramelo"
    },
    {
        nome: "Gentleman Jack",
        descricao: "Um Tennessee Whiskey premium da família Jack Daniel's, conhecido por sua suavidade excepcional devido à dupla filtragem em carvão de bordo artesanal.",
        classificacao: "Tennessee Whiskey",
        regiao: "Tennessee",
        idade: "Indefinido (mistura de whiskies)",
        prova: "40%",
        finish: "Nenhum",
        notasDeDegustacao: "Caramelo, baunilha, leve toque de fumaça e um final longo e suave.",
        preco: "Alto",
        disponibilidade: "Moderada",
        link: "https://www.jackdaniels.com/pt-br/whiskey/gentleman-jack",
        degustacao: "https://www.instagram.com/reel/CyGSOoVsZKO/",
        tags: "tennessee whiskey bourbon suave dupla filtragem premium"
    },
    {
        nome: "Buchanan's 12 Anos",
        descricao: "Um blended scotch whisky escocês, conhecido por seu sabor suave e aveludado, resultado da combinação de diferentes whiskies de malte e grãos.",
        classificacao: "Blended Scotch Whisky",
        regiao: "Escócia",
        idade: "12 anos (mínimo)",
        prova: "40%",
        finish: "Nenhum",
        notasDeDegustacao: "Frutas secas, mel, especiarias e um toque de baunilha.",
        preco: "Médio",
        disponibilidade: "Fácil de encontrar",
        link: "https://www.casadabebida.com.br/buchanans/",
        degustacao: "https://www.tiktok.com/@jornadadowhisky/video/7211275882621635846 ", 
        tags: "blended scotch whisky escoces suave frutas secas mel"
    },
    {
        nome: "Hakushu Distiller's Reserve",
        descricao: "Um single malt japonês de alta qualidade, conhecido por seu perfil floral e fresco, produzido pela Suntory.",
        classificacao: "Single Malt Japonês",
        regiao: "Japão",
        idade: "Não especificado (mistura de whiskies)",
        prova: "43%",
        finish: "Nenhum",
        notasDeDegustacao: "Frutas cítricas, menta, leve fumaça, floral",
        preco: "Alto",
        disponibilidade: "Moderada",
        link: "https://www.suntory.com/whisky/hakushu/",
        degustacao: "https://www.tiktok.com/@jornadadowhisky/video/7199347438115769605", 
        tags: "single malt japones floral fresco suntory"
    },
    {
        nome: "Yamazaki 12 Anos",
        descricao: "Um single malt japonês de renome mundial, conhecido por seu perfil complexo e saboroso, produzido pela Suntory.",
        classificacao: "Single Malt Japonês",
        regiao: "Japão",
        idade: "12 anos",
        prova: "43%",
        finish: "Nenhum",
        notasDeDegustacao: "Frutas, especiarias, madeira, leve fumaça",
        preco: "Alto",
        disponibilidade: "Moderada",
        link: "https://www.suntory.com/whisky/yamazaki/",
        degustacao: "https://www.tiktok.com/@jornadadowhisky/video/7234641607767674117", 
        tags: "single malt japones complexo suntory yamazaki"
    },
    {
        nome: "Maker's Mark",
        descricao: "Um bourbon americano de alta qualidade, conhecido por seu sabor suave e distinto, produzido pela Maker's Mark Distillery.",
        classificacao: "Bourbon",
        regiao: "Kentucky",
        idade: "Indefinido (mistura de whiskies)",
        prova: "45%",
        finish: "Nenhum",
        notasDeDegustacao: "Caramelo, baunilha, leve toque de especiarias",
        preco: "Médio-Alto",
        disponibilidade: "Moderada",
        link: "https://www.makersmark.com/",
        degustacao: "https://www.instagram.com/reel/CuPVPpuLtfg/",
        tags: "bourbon kentucky suave caramelo baunilha"
    },
    {
        nome: "Chivas Regal 12 Anos",
        descricao: "Um blended scotch whisky escocês, conhecido por sua suavidade e elegância, resultado da combinação de diferentes whiskies de malte e grãos.",
        classificacao: "Blended Scotch Whisky",
        regiao: "Escócia",
        idade: "12 anos (mínimo)",
        prova: "40%",
        finish: "Nenhum",
        notasDeDegustacao: "Mel, frutas secas, baunilha, especiarias",
        preco: "Médio-Alto",
        disponibilidade: "Fácil de encontrar",
        link: "https://www.instagram.com/reel/CwPxtzqM_rG/",
        degustacao: "https://www.tiktok.com/@jornadadowhisky/video/7296209618684988677",
        tags: "blended scotch whisky escoces suave elegante chivas"
    },
    {
        nome: "Dewar's 12 Anos",
        descricao: "Um blended scotch whisky escocês, conhecido por seu sabor suave e aveludado, resultado da combinação de diferentes whiskies de malte e grãos.",
        classificacao: "Blended Scotch Whisky",
        regiao: "Escócia",
        idade: "12 anos (mínimo)",
        prova: "40%",
        finish: "Nenhum",
        notasDeDegustacao: "Frutas secas, mel, especiarias",
        preco: "Médio",
        disponibilidade: "Fácil de encontrar",
        link: "https://www.dewarssonline.com/",
        degustacao: "https://www.instagram.com/reel/CtAD7XvOoZ7/",
        tags: "blended scotch whisky escoces suave frutas secas mel"
    },
    {
        nome: "Wild Turkey 101",
        descricao: "Um bourbon americano potente, conhecido por seu sabor intenso e aromático, produzido pela Austin Nichols Distillation Co.",
        classificacao: "Bourbon",
        regiao: "Kentucky",
        idade: "Indefinido (mistura de whiskies)",
        prova: "50,5%",
        finish: "Nenhum",
        notasDeDegustacao: "Caramelo, baunilha, especiarias, leve fumaça",
        preco: "Médio-Alto",
        disponibilidade: "Moderada",
        link: "https://www.wildturkey.com/",
        degustacao: "https://www.instagram.com/reel/CsUUw_ou5Fl/",
        tags: "bourbon kentucky potente caramelo baunilha"
    },
    {
        nome: "Royal Salute 21 Anos",
        descricao: "Um blended scotch whisky escocês de luxo, conhecido por seu sabor elegante e design sofisticado.",
        classificacao: "Blended Scotch Whisky",
        regiao: "Escócia",
        idade: "21 anos (mínimo)",
        prova: "40%",
        finish: "Nenhum",
        notasDeDegustacao: "Frutas secas, mel, especiarias, leve fumaça",
        preco: "Muito Alto",
        disponibilidade: "Limitada",
        link: "https://www.chivas.com/pt-br/nossa-familia/royal-salute/",
        degustacao: "https://www.instagram.com/reel/Cw0wOOPvkoT/",
        tags: "blended scotch whisky escoces luxo elegante royal salute"
    },
    {
        nome: "Talisker 10 Anos",
        descricao: "Um single malt escocês conhecido por seu sabor intenso e picante, com notas de turfa e fumaça.",
        classificacao: "Single Malt Escocês",
        regiao: "Ilha de Skye, Escócia",
        idade: "10 anos",
        prova: "45,8%",
        finish: "Nenhum",
        notasDeDegustacao: "Turfa, fumaça, especiarias, final persistente",
        preco: "Médio-Alto",
        disponibilidade: "Moderada",
        link: "https://www.talisker.com/",
        degustacao: "https://www.instagram.com/reel/Cw7tZgzs4mN/", 
        tags: "single malt escoces torfado fumaça especiarias"
    },
    {
        nome: "White Horse",
        descricao: "Um blended scotch whisky conhecido por sua suavidade e equilíbrio, com uma mistura de mais de 35 maltes.",
        classificacao: "Blended Scotch Whisky",
        regiao: "Escócia",
        idade: "Variação", // A idade não é especificada para blends
        prova: "40%",
        finish: "Nenhum",
        notasDeDegustacao: "Frutas cítricas, mel, especiarias, final suave",
        preco: "Médio",
        disponibilidade: "Alta",
        link: "https://www.whitehorse.com/",
        degustacao: "https://www.youtube.com/watch/v=... ", // Substitua por um link de degustação
        tags: "blended scotch whisky suave equilibrado frutas cítricas mel especiarias"
    }
];





