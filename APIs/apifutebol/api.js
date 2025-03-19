const express = require('express')
const app = express()
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + "/public"); // ⬅️ Monitora a pasta de arquivos estáticos

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

app.use(connectLivereload()); // 🔗 Middleware para LiveReload

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use('/img', express.static('/home/sergio/Github/bandeiras'));
app.use('/img', express.static('/home/sergio/Github/APIs/apifutebol/public/fotos'))

const paises = {
    Brasil: {
        bandeira: "/bandeiras/Brasil.png",
        seleçao:"Brasileira",
        pais: "Brasil",
        jogadores: {
            Neymar: { 
                jogador: "Neymar",  
                foto:'/fotos/neymar.png', 
                gols: 77, 
                altura: "1.75m", 
                descriçao: "Neymar é um dos maiores talentos do futebol brasileiro, conhecido por sua habilidade, dribles e gols decisivos. Atuou pelo Santos, Barcelona e PSG, e tem sido peça-chave da Seleção Brasileira." 
            },
            ViniciusJunior: { 
                jogador: "Vinícius Júnior", 
                foto:'/fotos/vini.png', 
                gols: 15, 
                altura: "1.76m", 
                descriçao: "Vinícius Júnior é um dos grandes talentos do futebol mundial. Revelado pelo Flamengo, destacou-se no Real Madrid, onde se tornou um dos principais atacantes do time." 
            },
            Richarlison: { 
                jogador: "Richarlison", 
                foto:'/fotos/richarlison.png', 
                gols: 25, 
                altura: "1.84m", 
                descriçao: "Conhecido como 'Pombo', Richarlison se destacou na Premier League e na Seleção Brasileira, sendo peça importante na Copa do Mundo de 2022." 
            }
        }
    },

    Argentina: {
        bandeira: "/bandeiras/Argentina.png",
        seleçao:"Argentina",
        pais: "Argentina",
        jogadores: {
            Messi: { 
                jogador: "Lionel Messi", 
                foto:'/fotos/messi.png', 
                gols: 103, 
                altura: "1.70m", 
                descriçao: "Messi é amplamente considerado um dos maiores jogadores de futebol da história. Conquistou múltiplos títulos pelo Barcelona e liderou a Argentina ao título da Copa do Mundo de 2022." 
            },
            DiMaria: { 
                jogador: "Ángel Di María", 
                foto:'/fotos/dimaria.png', 
                gols: 29, 
                altura: "1.80m", 
                descriçao: "Di María é conhecido por sua velocidade, dribles e gols decisivos. Marcou o gol do título da Argentina na Copa América de 2021 contra o Brasil." 
            },
            Lautaro: { 
                jogador: "Lautaro Martínez", 
                foto:'/fotos/lautaro.png', 
                gols: 21, 
                altura: "1.74m", 
                descriçao: "Lautaro Martínez é um atacante argentino que brilhou na Inter de Milão e tem sido peça-chave da Seleção Argentina nos últimos anos." 
            }
        }
    },

    França: {
        bandeira: "/bandeiras/França.png",
        seleçao:"Francesa",
        pais: "França",
        jogadores: {
            Mbappe: { 
                jogador: "Kylian Mbappé", 
                foto:'/fotos/mbappe.png', 
                gols: 46, 
                altura: "1.78m", 
                descriçao: "Mbappé é um dos jogadores mais rápidos e habilidosos do futebol moderno. Foi campeão mundial com a França em 2018 e brilhou na final da Copa de 2022." 
            },
            Griezmann: { 
                jogador: "Antoine Griezmann", 
                foto:'/fotos/griezmann.png', 
                gols: 44, 
                altura: "1.76m", 
                descriçao: "Griezmann é um atacante versátil que ajudou a França a conquistar a Copa do Mundo de 2018. É conhecido por sua inteligência tática e finalização precisa." 
            },
            Giroud: { 
                jogador: "Olivier Giroud", 
                foto:'/fotos/giroud.png', 
                gols: 53, 
                altura: "1.93m", 
                descriçao: "Giroud é o maior artilheiro da história da Seleção Francesa. Seu jogo aéreo e habilidade de pivô foram fundamentais nas conquistas da equipe." 
            }
        }
    },

    Alemanha: {
        bandeira: "/bandeiras/Alemanha.png",
        seleçao:"Alemã",
        pais: "Alemanha",
        jogadores: {
            Muller: { 
                jogador: "Thomas Müller", 
                foto:'/fotos/muller.png', 
                gols: 44, 
                altura: "1.85m", 
                descriçao: "Müller é conhecido por sua inteligência tática e capacidade de marcar gols decisivos. Foi peça-chave no título da Copa do Mundo de 2014 pela Alemanha." 
            },
            Havertz: { 
                jogador: "Kai Havertz", 
                foto:'/fotos/havertz.png', 
                gols: 13, 
                altura: "1.88m", 
                descriçao: "Havertz é um meio-campista ofensivo talentoso, conhecido por sua técnica refinada e visão de jogo. Marcou o gol do título do Chelsea na Champions League de 2021." 
            },
            Gnabry: { 
                jogador: "Serge Gnabry", 
                foto:'/fotos/gnabry.png', 
                gols: 22, 
                altura: "1.75m", 
                descriçao: "Gnabry é um atacante rápido e habilidoso, que brilhou pelo Bayern de Munique e pela Seleção Alemã com seu faro de gol." 
            }
        }
    },

    Espanha: {
        bandeira: "/bandeiras/Espanha.png",
        seleçao:"Espanhola",
        pais: "Espanha",
        jogadores: {
            Morata: { 
                jogador: "Álvaro Morata", 
                foto:'/fotos/morata.png', 
                gols: 30, 
                altura: "1.90m", 
                descriçao: "Morata é um atacante forte e oportunista, que teve passagens por grandes clubes como Real Madrid, Chelsea e Juventus." 
            },
            Pedri: { 
                jogador: "Pedri", 
                foto:'/fotos/pedri.png', 
                gols: 5, 
                altura: "1.74m", 
                descriçao: "Pedri é uma das maiores promessas do futebol espanhol. Com visão de jogo e técnica refinada, tem sido comparado a lendas como Iniesta." 
            },
            Gavi: { 
                jogador: "Gavi", 
                foto:'/fotos/gavi.png', 
                gols: 3, 
                altura: "1.73m", 
                descriçao: "Gavi é um meio-campista agressivo e habilidoso, que se destacou precocemente no Barcelona e na Seleção Espanhola." 
            }
        }
    },

    Portugal: {
        bandeira: "/bandeiras/Portugal.png",
        seleçao:"Portuguesa",
        pais: "Portugal",
        jogadores: {
            CR7: { 
                jogador: "Cristiano Ronaldo", 
                foto:'/fotos/cr7.png', 
                gols: 128, 
                altura: "1.87m", 
                descriçao: "Cristiano Ronaldo é um dos maiores jogadores de todos os tempos. Recordista de gols por seleções, campeão de tudo e sinônimo de profissionalismo e excelência." 
            },
            BrunoFernandes: { 
                jogador: "Bruno Fernandes",  
                foto:'/fotos/bruno.png', 
                gols: 17, 
                altura: "1.79m", 
                descriçao: "Bruno Fernandes é um meio-campista criativo e goleador, que brilha no Manchester United e na Seleção Portuguesa com sua visão de jogo e finalização precisa." 
            },
            BernardoSilva: { 
                jogador: "Bernardo Silva", 
                foto:'/fotos/bernardo.png', 
                gols: 10, 
                altura: "1.73m", 
                descriçao: "Bernardo Silva é um dos meio-campistas mais técnicos do mundo, sendo peça-chave no Manchester City e na Seleção Portuguesa." 
            }
        }
    }
};


 

app.get('/', (req, res) => { 
    res.render('home', { paises: Object.keys(paises), bandeiras: paises });
});


app.get('/:pais', (req, res)=>{
    const pais = req.params.pais
    const jogadorespais = paises[pais].jogadores
    res.render('jogadores', {jogadoresnomes: Object.keys(jogadorespais), pais ,seleçao: paises[pais].seleçao
        ,jogadores: paises[pais].jogadores, seleçao: paises[pais].seleçao
    })
})


app.listen(3000, () => {console.log('bola rolando')})