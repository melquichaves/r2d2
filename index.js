import { MessageEmbed } from 'discord.js';
import { findBestMatch } from 'string-similarity';
import { Client, Intents } from 'discord.js';

const token = process.env.BOT_TOKEN;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('messageCreate', (msg)=>{
    if(/^!sw[^ ]*/.test(msg.content)){
        var matches = findBestMatch(
            msg.content, 
            [
                '!sw especies',
                '!sw especies cereano',
                '!sw especies kel-dor',
                '!sw especies mirialano',
                '!sw especies nautolano',
                '!sw especies togruta',
                '!sw especies zabrak',
                '!sw especies humano',
                '!sw especies clone',
                '!sw especies geonosiano',
                '!sw especies kaminoano',
                '!sw especies umbarano',
                '!sw carreiras',
                '!sw carreiras consul',
                '!sw carreiras guardiao',
                '!sw carreiras mistico',
                '!sw carreiras seeker',
                '!sw carreiras sentinela',
                '!sw carreiras guerreiro',
                '!sw carreiras clone',
                '!sw carreiras jedi',
                '!sw especializacoes',
                '!sw especializacoes sensitivo-exilado',
                '!sw especializacoes oficial-da-republica',
                '!sw especializacoes representante-da-republica',
                '!sw especializacoes catador',
                '!sw especializacoes consul-curandeiro',
                '!sw especializacoes consul-niman',
                '!sw especializacoes consul-sabio',
                '!sw especializacoes guardiao-mantenedor',
                '!sw especializacoes guardiao-protetor',
                '!sw especializacoes guardiao-soresu',
                '!sw especializacoes mistico-conselheiro',
                '!sw especializacoes mistico-makashi',
                '!sw especializacoes mistico-vidente',
                '!sw especializacoes seeker-ataru',
                '!sw especializacoes seeker-cacador',
                '!sw especializacoes seeker-pathfinder',
                '!sw especializacoes sentinela-artesao',
                '!sw especializacoes sentinela-shadow',
                '!sw especializacoes sentinela-shien',
                '!sw especializacoes guerreiro-agressor',
                '!sw especializacoes guerreiro-shii-sho',
                '!sw especializacoes guerreiro-starfighter',
                '!sw pericias',
                '!sw tips',
                '!sw tips gastar-vantagem-triunfo-combate',
                '!sw tips dados',
                '!sw tips simbolos-dados',
                '!sw tips modificadores-combate-distancia',
                '!sw tips propriedades-armas',
                '!sw loja',
                '!sw loja armas',
                '!sw loja armas Rifle Blaster DC-15',
                '!sw loja armas Carabina Blaster DC-15A',
                '!sw loja armas Blaster de mão DC-17',
                '!sw loja armas Canhão blaster Z-6 Rotary',
                '!sw loja armas Granada perfurante AP-M1',
                '!sw loja armas Lança Chamas Pesado BT x-42',
                '!sw loja armas Granada EMP MKII',
                '!sw loja armas Sistema de Morteiros Modelo 201',
                '!sw loja armas Lança Foguetes RPS-6',
                '!sw poderes',
                '!sw poderes Aumentar',
                '!sw poderes Curar/Ferir',
                '!sw poderes Iludir',
                '!sw poderes Influenciar',
                '!sw poderes Meditação de Batalha',
                '!sw poderes Mover',
                '!sw poderes Prever',
                '!sw poderes Restringir',
                '!sw poderes Procurar',
                '!sw poderes Proteger/Unleash',
                '!sw poderes Sentir'
            ]
        );

        if (matches.bestMatch.target === '!sw especies'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .addField('Lista de todas as espécies disponíveis', 'cereano \n clone \n genosiano \n humano \n kaminoano \n kel-dor \n mirialano \n nautolano \n togruta \n umbarano \n zabrak', true)
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especies cereano'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Cereano')
            .setURL('https://starwars.fandom.com/pt/wiki/Legends:Cereano')
            .addField('Características', 'Força Física: 2 \n Agilidade: 2 \n Intelecto: 2 \n Astúcia: 2 \n Força de Vontade: 2 \n Porte: 2', true)
            .addField('Características secundárias', 'Limite de ferimentos: 10 + Força Física \n Limite de Fadiga: 10 + Força de Vontade \n Experiência inicial: 100 XP', true)
            .addField('Habilidade Especial', 'Cereanos começam o jogo com um Grau gratuíto em Percepção OU Vigilância.', true)
            .addField('Cérebro binário', 'Cereanos recebem um dado de bonus para qualquer teste de Sangue Frio ou Vigilância nas iniciativas.', true)
            .setImage('https://vignette.wikia.nocookie.net/pt.starwars/images/a/ae/Cerean_NEGAS.jpg/revision/latest?cb=20170218182135')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especies kel-dor'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Kel Dor')
            .setURL('https://starwars.fandom.com/pt/wiki/Legends:Kel_Dor')
            .addField('Características', 'Força Física: 1 \n Agilidade: 2 \n Intelecto: 2 \n Astúcia: 2 \n Força de Vontade: 3 \n Porte: 2', true)
            .addField('Características secundárias', 'Limite de ferimentos: 10 + Força Física \n Limite de Fadiga: 10 + Força de Vontade \n Experiência inicial: 100 XP', true)
            .addField('Habilidade Especial', 'Kel Dors começam o jogo com um Grau gratuíto em Conhecimento(Educação).', true)
            .addField('Visão noturna', 'Ao fazer testes de qualquer natureza no escuro, Kel Dors podem remover até dois dados de contratempo', true)
            .addField('Requerimento atmosférico', 'Kel Dors PRECISAM vestir uma máscara especializada para respirar e ver fora de sua atmosfera nativa. Um Kel Dor inicia o jogo com uma máscara de respiração e trata oxigênio como uma atmosfera perigosa de categoria 8. Contudo, Kel Dors podem sobreviver até 5 minutos no vácuo antes de sofrer os efeitos do oxigênio.', true)
            .setImage('https://vignette.wikia.nocookie.net/pt.starwars/images/2/24/Kel_Dor_NEGAS.jpg/revision/latest/scale-to-width-down/328?cb=20101017013735')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especies mirialano'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Mirialano')
            .setURL('https://starwars.fandom.com/pt/wiki/Legends:Mirialano')
            .addField('Características', 'Força Física: 2 \n Agilidade: 3 \n Intelecto: 2 \n Astúcia: 1 \n Força de Vontade: 2 \n Porte: 2', true)
            .addField('Características secundárias', 'Limite de ferimentos: 11 + Força Física \n Limite de Fadiga: 10 + Força de Vontade \n Experiência inicial: 100 XP', true)
            .addField('Habilidade Especial', 'Mirialanos começam o jogo com um Grau gratuíto em Disciplina e um Grau gratuito em Sangue Frio.', true)
            .setImage('https://vignette.wikia.nocookie.net/pt.starwars/images/2/22/Barriss.jpg/revision/latest/scale-to-width-down/350?cb=20170218181807')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especies nautolano'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Nautolano')
            .setURL('https://starwars.fandom.com/pt/wiki/Legends:Nautolano')
            .addField('Características', 'Força Física: 3 \n Agilidade: 2 \n Intelecto: 2 \n Astúcia: 2 \n Força de Vontade: 1 \n Porte: 2', true)
            .addField('Características secundárias', 'Limite de ferimentos: 11 + Força Física \n Limite de Fadiga: 9 + Força de Vontade \n Experiência inicial: 100 XP', true)
            .addField('Habilidade Especial', 'Mirialanos começam o jogo com um Grau gratuíto em Atletismo.', true)
            .addField('Anfibio', 'Nautolanos podem respirar e se movimentar em baixo da água sem penalidades.', true)
            .setImage('https://vignette.wikia.nocookie.net/pt.starwars/images/7/79/355px-Nautolan_Fem_Sith_SWGTCG.jpg/revision/latest?cb=20101016033846')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especies togruta'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Togruta')
            .setURL('https://starwars.fandom.com/pt/wiki/Legends:Togruta')
            .addField('Características', 'Força Física: 1 \n Agilidade: 2 \n Intelecto: 2 \n Astúcia: 3 \n Força de Vontade: 2 \n Porte: 2', true)
            .addField('Características secundárias', 'Limite de ferimentos: 10 + Força Física \n Limite de Fadiga: 10 + Força de Vontade \n Experiência inicial: 100 XP', true)
            .addField('Habilidade Especial', 'Togrutas começam o jogo com um Grau gratuíto em Percepção.', true)
            .addField('Instinto', 'Ao dar suporte(assist manuever), Togrutas fornecem 2 dados de bonus ao inves de 1.', true)
            .setImage('https://vignette.wikia.nocookie.net/pt.starwars/images/b/b2/Togruta_NEGAS.jpg/revision/latest/scale-to-width-down/267?cb=20120320235640')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especies zabrak'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Togruta')
            .setURL('https://starwars.fandom.com/pt/wiki/Legends:Zabrak')
            .addField('Características', 'Força Física: 2 \n Agilidade: 2 \n Intelecto: 2 \n Astúcia: 2 \n Força de Vontade: 3 \n Porte: 1', true)
            .addField('Características secundárias', 'Limite de ferimentos: 10 + Força Física \n Limite de Fadiga: 10 + Força de Vontade \n Experiência inicial: 100 XP', true)
            .addField('Habilidade Especial', 'Togrutas começam o jogo com um Grau gratuíto em Sobrevivência.', true)
            .addField('Semblante Temível', 'Zabraks recebem vantagem automática em qualquer teste de coersão.', true)
            .setImage('https://vignette.wikia.nocookie.net/pt.starwars/images/e/ee/ZabrakNEGAS.jpg/revision/latest/scale-to-width-down/328?cb=20100627143534')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especies humano'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Humano')
            .setURL('https://star-wars-fringe.obsidianportal.com/wikis/humans')
            .addField('Características', 'Força Física: 2 \n Agilidade: 2 \n Intelecto: 2 \n Astúcia: 2 \n Força de Vontade: 2 \n Porte: 2', true)
            .addField('Características secundárias', 'Limite de ferimentos: 10 + Força Física \n Limite de Fadiga: 10 + Força de Vontade \n Experiência inicial: 110 XP', true)
            .addField('Habilidade Especial', 'Humanos começam o jogo com um grau em duas pericias diferentes que não sejam de sua carreira.', true)
            .setImage('https://db4sgowjqfwig.cloudfront.net/campaigns/99595/assets/374072/older_han_solo_photomaniupulation_by_rabittooth-d4jl2fq.jpg?1411572217')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especies clone'){
            const embed = new MessageEmbed()
            .setColor('#1217b3')
            .setTitle('Clone')
            .setURL('https://starwars.fandom.com/pt/wiki/Soldado_clone')
            .addField('Características', 'Força Física: 2 \n Agilidade: 2 \n Intelecto: 2 \n Astúcia: 2 \n Força de Vontade: 2 \n Porte: 2', true)
            .addField('Características secundárias', 'Limite de ferimentos: 11 + Força Física \n Limite de Fadiga: 11 + Força de Vontade \n Experiência inicial: 100 XP', true)
            .addField('Habilidade Especial', 'Humanos começam o jogo com um grau em conhecimento(Campo de Guerra) e um grau em Resiliência.', true)
            .addField('Treinamento em Kamino', 'Clones começam com um grau no talento Treinamento Físico.', true)
            .setImage('https://vignette.wikia.nocookie.net/pt.starwars/images/7/71/PhaseICloneTrooper2-Fathead.png/revision/latest/scale-to-width-down/266?cb=20170928010359')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especies geonosiano'){
            const embed = new MessageEmbed()
            .setColor('#1217b3')
            .setTitle('Geonosiano')
            .setURL('https://starwars.fandom.com/pt/wiki/Geonosiano')
            .addField('Características', 'Força Física: 2 \n Agilidade: 2 \n Intelecto: 2 \n Astúcia: 1 \n Força de Vontade: 1 \n Porte: 1', true)
            .addField('Características secundárias', 'Limite de ferimentos: 9 + Força Física \n Limite de Fadiga: 9 + Força de Vontade \n Experiência inicial: 140 XP', true)
            .addField('Habilidade Especial', 'Genosianos começam o jogo com um grau na pericia que você escolher.', true)
            .addField('Trabalhador', 'Genosianos adicionam um dado de bonus em assistências. Em adição aos beneficios normais da assistência, genosianos recuperam 1 de fadiga .', true)
            .setImage('https://vignette.wikia.nocookie.net/pt.starwars/images/5/50/Geonosian_Warrior.png/revision/latest/scale-to-width-down/350?cb=20171216152716')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especies kaminoano'){
            const embed = new MessageEmbed()
            .setColor('#1217b3')
            .setTitle('Kaminoano')
            .setURL('https://starwars.fandom.com/pt/wiki/Legends:Kaminoano')
            .addField('Características', 'Força Física: 1 \n Agilidade: 2 \n Intelecto: 3 \n Astúcia: 2 \n Força de Vontade: 2 \n Porte: 2', true)
            .addField('Características secundárias', 'Limite de ferimentos: 9 + Força Física \n Limite de Fadiga: 10 + Força de Vontade \n Experiência inicial: 100 XP', true)
            .addField('Habilidade Especial', 'Kaminoanos começam o jogo com um grau em Medicina. Eles também começam o jogo com um grau no talento Pesquisador(Researcher).', true)
            .addField('Pokerface', 'Kaminoanos adicionam um dado de contratempo em todos os testes de Charme que fizerem. Outros personagens também adicionam um dado de contratempo em todos os testes sociais que forem feitos cujo Kaminoanos sejam alvo.', true)
            .setImage('https://vignette.wikia.nocookie.net/pt.starwars/images/0/03/KaminoanNEGAS.jpg/revision/latest/scale-to-width-down/209?cb=20120623111449')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especies umbarano'){
            const embed = new MessageEmbed()
            .setColor('#1217b3')
            .setTitle('Umbarano')
            .setURL('https://starwars.fandom.com/pt/wiki/Legends:Umbarano')
            .addField('Características', 'Força Física: 2 \n Agilidade: 2 \n Intelecto: 2 \n Astúcia: 2 \n Força de Vontade: 2 \n Porte: 2', true)
            .addField('Características secundárias', 'Limite de ferimentos: 10 + Força Física \n Limite de Fadiga: 10 + Força de Vontade \n Experiência inicial: 100 XP', true)
            .addField('Habilidade Especial', 'Umbaranos começam o jogo com um grau gratuito em Falsidade(deception).', true)
            .addField('Morador das Sombras', 'Ao fazer testes de qualquer natureza na escuridão, Umbaranos podem remover até dois dados de contratempo. Também adicionam um dado de contratempo em qualquer teste feito sob luz direta natural, como a luz do sol.', true)
            .setImage('https://vignette.wikia.nocookie.net/pt.starwars/images/4/45/UmbaranNEGAS.jpg/revision/latest/scale-to-width-down/253?cb=20120704134139')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw carreiras'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .addField('Lista de todas as carreiras disponíveis', 'consul \n gardiao \n mistico \n Seeker \n sentinela \n guerreiro \n clone \n jedi', true)
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw carreiras consul'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('O Consul')
            .setDescription('O Consul se concentra no objetivo de alcançar a paz e a harmonia através do discurso positivo. Seguidores desta carreira tentam evitar conflitos físicos sempre que possível. Em vez disso, eles têm fé na Força para alimentar a compaixão básica em todos os seres sencientes. Eles acreditam que é sempre mais eficaz ter uma discussão inteligente sobre um problema e depois resolvê-lo através de negociações e outros meios pacíficos do que se envolver em conflito para resolvê-lo.')
            .addField('Graus', 'Escolha entre QUATRO das pericias de carreira para ganhar um grau em cada uma.', true)
            .addField('Pericias', 'Sangue Frio, Disciplina, Conhecimento(Educação), Conhecimento(Saber), Liderança e Negiciação.', true)
            .addField('Outros', 'O Consul começao o jogo com o nível de força igual a 1.', true)
            .addField('Especializações', 'Curandeiro, Discipulo de Niman, Sábio', true)
            .addField('Histórias', 'Dever, Compaixão, Sabedoria, Esperança', true)
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw carreiras guardiao'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('O Guardião')
            .setDescription('Os adeptos da carreira do Guardião são movidos por um forte senso de responsabilidade e compaixão. Eles reconhecem sua afinidade pela Força que lhes dá poder - e responsabilidade - para ajudar os desamparados e os oprimidos. Os guardiões tendem a ser contundentes e francos, usando suas proezas de combate prodigiosas e habilidades de liderança natural para interceder diretamente onde são mais necessários.')
            .addField('Graus', 'Escolha entre QUATRO das pericias de carreira para ganhar um grau em cada uma.', true)
            .addField('Pericias', 'Briga, Sangue Frio, Disciplina, Combate Próximo, Resiliência e Vigilância.', true)
            .addField('Outros', 'O Guardião começa o o jogo com o nível de força igual a 1.', true)
            .addField('Especializações', 'Mantenedor da paz, Protetor, Defensor de Soresu', true)
            .addField('Histórias', 'Justiça, Autruísmo, Zêlo, Desejo de viajar', true)
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw carreiras mistico'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('O Mistico')
            .setDescription('Personagens que seguem a carreira mística normalmente nascem para aceitar esse manto. A partir do momento em que eles abrem os olhos pela primeira vez, uma forte conexão com a Força colore sua percepção do mundo que os cerca. Eles constantemente percebem o fluxo e refluxo de suas energias entre todas as coisas vivas. Para muitos místicos, a Força é um guia e mentor tão importante quanto sua família e amigos de confiança. Ensina-os a confiar mais em seus instintos do que em qualquer treinamento ou instrução, pois esses instintos vêm da Força.')
            .addField('Graus', 'Escolha entre QUATRO das pericias de carreira para ganhar um grau em cada uma.', true)
            .addField('Pericias', 'Charme, Coersão, Conhecimento(Sabedoria), Conhecimento(Orla Exterior), Percepção e Vigilancia.', true)
            .addField('Outros', 'O Mistico começa o o jogo com o nível de força igual a 1.', true)
            .addField('Especializações', 'Conselheiro, Duelista de Makashi, Vidente', true)
            .addField('Histórias', 'Hereditáriedade, Segredos, Previsões', true)
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw carreiras seeker'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Seeker')
            .setDescription('Não é incomum que alguns adeptos da Força se sintam compelidos a viajar por toda a galáxia para ajudar os necessitados e opor-se àqueles que usam o lado sombrio. Alguns podem concentrar suas atenções em cidades e centros urbanos, a pobreza também pode ser grande no a do coração da civilização galáctica. Um adepto da Força disposto e apto a viajar e trabalhar nesses ambientes pode ajudar a aliviar a pobreza esmagadora ou as pragas incapacitantes da fome e das doenças. Ele também pode descobrir novas técnicas da Força, encontrar sensitivos que precisem de treinamento e, às vezes, enfrentar ameaças perigosas que poderiam, crescerem isoladas. Um Seeker deve ser capaz de fazer todas essas coisas, enquanto viaja longe de qualquer rede de suporte significativa.')
            .addField('Graus', 'Escolha entre QUATRO das pericias de carreira para ganhar um grau em cada uma.', true)
            .addField('Pericias', 'Conhecimento(xenologia), Pilotagem(planetária), Pilotagem(espacial), Com. a Dist.(Pesado), Sobrevivência e Vigilancia.', true)
            .addField('Outros', 'O Seeker começa o o jogo com o nível de força igual a 1.', true)
            .addField('Especializações', 'Batedor de Ataru, Caçador, Pathfinder', true)
            .addField('Histórias', 'Exploração, Lobo Solitário, Mundo Natural, Fuga', true)
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw carreiras sentinela'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('O Sentinela')
            .setDescription('Cada cidade tem seus segredos, e cada centro maravilhoso da civilização tem seu submundo decadente. Dentro dessas profundezas sombrias, os malfeitores e os miseráveis atacam os desamparados, cometendo crimes hediondos e deixando a fome e o caos em seu rastro.')
            .addField('Graus', 'Escolha entre QUATRO das pericias de carreira para ganhar um grau em cada uma.', true)
            .addField('Pericias', 'Computadores, Falsidade, Conhecimento(Mundos do núcleo), Percepção, Artimanha e Furtividade.', true)
            .addField('Outros', 'O Sentinela começa o o jogo com o nível de força igual a 1.', true)
            .addField('Especializações', 'Artesão, Shadow, Expert de Shien', true)
            .addField('Histórias', 'Deninquente, Prodigio, Vítima', true)
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw carreiras guerreiro'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('O Guerreiro')
            .setDescription('Embora o sabre de luz seja uma arma icônica para muitos usuários da Força, alguns se dedicam inteiramente a se tornarem especialistas em conflitos. Esses indivíduos perigosos são conhecidos como guerreiros. Em sua forma mais básica, os Guerreiros são combatentes focados que usam a Força para aumentar suas proezas marciais prodigiosas. Seja voando no assento do piloto de um caça estelar, empunhando um sabre de luz no campo de batalha ou atirando com uma pistola blaster, os Guerreiros se destacam em combate de todos os tipos.')
            .addField('Graus', 'Escolha entre QUATRO das pericias de carreira para ganhar um grau em cada uma.', true)
            .addField('Pericias', 'Atletismo, Briga, Sangue Frio, Combate próximo, Percepção e Sobrevivência.', true)
            .addField('Outros', 'O Guerreiro começa o o jogo com o nível de força igual a 1.', true)
            .addField('Especializações', 'Agressor, Cavaleiro do Chii-cho, Às Estelar', true)
            .addField('Histórias', 'Disciplina, Vingança, Sobrevivência', true)
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw carreiras clone'){
            const embed = new MessageEmbed()
            .setColor('#1217b3')
            .setTitle('Soldado Clone')
            .setDescription('Soldados clones formam a espinha dorsal do Grande Exército da República. Eles atuam em praticamente todos os papéis no campo de batalha, lutando como infantaria, liderando como oficiais e voando como pilotos, além de cumprir responsabilidades tanto mundanas como esotéricas. Esses soldados compartilham sua identidade genética, suas origens e seu treinamento básico. No entanto, todos eles têm experiências distintas e responsabilidades pessoais. Essas pequenas variações são suficientes para torná-las indivíduos reconhecíveis que conseguem assegurar seus próprios nichos dentro do vasto exército. As características compartilhadas dos clones são um poderoso trunfo para os soldados individuais e para o exército como um todo. Eles são universalmente competentes nas áreas necessárias para serem soldados eficazes. Eles têm um nível básico de treinamento que é extremamente consistente, de modo que os comandantes dos clones - incluindo o Jedi, Oficiais militares de carreira e outros clones - podem esperar, com confiança, que tenham desempenho conforme planejado no campo. Além disso, a flexibilidade inerente à sua composição orgânica concede uma vantagem significativa contra seus oponentes mais comuns: os dróides do exército separatista.')
            .addField('Graus', 'Escolha entre QUATRO das pericias de carreira para ganhar um grau em cada uma.', true)
            .addField('Pericias', 'Atletismo, Briga, Sangue Frio, Disciplina, Medicina, Com. a dis.(pesado), Com. a dis.(leve) e vigilância.', true)
            .addField('Especializações', 'Oficial Clone, Piloto Clone, Clone Trooper', true)
            .addField('Histórias', 'Individualidade, Dedicação, Sacrificio', true)
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw carreiras jedi'){
            const embed = new MessageEmbed()
            .setColor('#1217b3')
            .setTitle('O Jedi')
            .setDescription('Os Jedi de hoje têm papéis diferentes daqueles descritos em mitos, lendas e contos populares. Essas histórias descrevem místicos estranhos, heróis que derrubam tiranos e figuras sombrias que manipulam mentes. Embora tais contos tenham alguma base de fato, os Jedi agora servem como generais, soldados, especialistas em resposta a emergências e - em alguns casos - executores da vontade da República Galáctica, o que acontece desde o início das Guerras Clônicas. Os Jedi viram-se explorando os aspectos mais esotéricos da Força apenas raramente. Em vez de filosofar, eles "gastam muito do seu tempo envolvidos em atividades como lutar contra dróides de batalha, descobrindo agentes separatistas e ajudando civis a sobreviver aos efeitos da guerra com apenas um apoio limitado do governo da República. Os Jedi começam como Iniciados ou jovens, tornam-se Padawans para treinamento individual, progridem para os Cavaleiros quando estão prontos para a responsabilidade e após isso finalmente se tornarem Mestres que podem adotar uma vida monástica, acadêmica ou administrativa. A urgência das Guerras Clônicas favorece essa abordagem estruturada, pois esses títulos também ajudam a ditar as responsabilidades do tempo de guerra. Mestres aconselham a Ordem Jedi e a República de Coruscant. Os cavaleiros assumem o campo de batalha como comandantes, e os padawans ficam ao lado de seus mestres como subcomandantes e ajudantes.')
            .addField('Graus', 'Escolha entre TRÊS das pericias de carreira para ganhar um grau em cada uma.', true)
            .addField('Pericias', 'Atletismo, Sangue Frio, Disciplina, Conhecimento(Sabedoria), Sabre de Luz e Pilotagem(espacial).', true)
            .addField('Outros', 'O Jedi começa o o jogo com o nível de força igual a 1.', true)
            .addField('Especializações', 'Cavaleiro, Padawan, Clone Trooper', true)
            msg.channel.send({ embeds: [embed] });
        }


        if (matches.bestMatch.target === '!sw especializacoes'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .addField('Lista de todas as especializações disponíveis', 'consul-curandeiro \n consul-niman \n consul-sabio \n guardiao-protetor \n guardiao-mantenedor \n guardiao-soresu \n mistico-conselheiro \n mistico-makashi \n mistico-vidente \n seeker-ataru \n seeker-cacador \n seeker-pathfinder \n sentinela-artesao \n sentinela-shadow \n sentinela-shien \n guerreiro-agressor \n guerreiro-shii-sho \n guerreiro-starfighter', true)
            .addField('Lista de todas as especializações universais disponíveis', 'sensitivo-exilado \n oficial-da-republica \n representante-da-republica \n catador', true)
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes sensitivo-exilado'){
            const embed = new MessageEmbed()
            .setColor('#1217b3')
            .setTitle('Sensitivo a Força - Exilado')
            .setDescription('Os Jedi e os Sith não são os únicos mestres da Força. A Força desperta em todos os tipos de seres de todas as esferas da vida, e enquanto muitos Sensitivos da Força são descobertos pelos Jedi - ou, em raras ocasiões, pelos Sith - ninguém pode dizer quantos existem sem registro. Alguns sensitivos da Força recebem treinamento nos caminhos dos Jedi ou Sith apenas para sair em busca de suas próprias agendas, seja por escolha ou por serem expulsos. Estes são os Exilados Sensíveis à Força, os usuários independentes que ficam nos arredores da galáxia e rejeitam o dogma dos Jedi e dos Sith. Com um sabre de luz ao seu lado e o poder da Força na ponta dos dedos, dono de seu próprio destino.')
            .addField('Outros', 'O Exilado começa o o jogo com o nível de força igual a 1.', true)
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes oficial-da-republica'){
            const embed = new MessageEmbed()
            .setColor('#1217b3')
            .setTitle('Oficial da República')
            .setDescription('Lutar contra a Confederação dos Sistemas Independentes requer a coordenação das mentes militares mais brilhantes dentro da República. O exército de clones é uma força de combate efetiva no solo, mas é tão eficaz quanto a liderança tática que comanda e apóia a órbita. Atraídos dos comandantes mais experientes das várias frotas de defesa do sistema da República, os Oficiais da República servem como líderes estratégicos da linha de frente do Grande Exército em meio ao conflito violento. Até mesmo os Jedi confiam no julgamento dos oficiais que lutam ao lado, pois não têm a experiência necessária para conduzir ações navais em larga escala ou organizar desdobramentos de tropas.')
            .addField('Pericias', 'Astronavegação, Disciplina, Conhecimento(campo de batalha) e Liderança.', true)
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes representante-da-republica'){
            const embed = new MessageEmbed()
            .setColor('#1217b3')
            .setTitle('Representante da República')
            .setDescription('Resolver os conflitos de milhares de civilizações através da galáxia é um empreendimento colossal, mas o Senado Galáctico assume isso como sua função. Os senadores que debatem e negociam dentro da cúpula do Senado representam planetas inteiros ou organizações corporativas; cada senador tem uma voz única falando por milhões. Mesmo assim, representar tal eleitorado maciço é quase impossível para uma pessoa só equilibrar as necessidades de todos. Por esse motivo, muitos mundos têm um ou mais representantes do Senado da República. As vezes conhecidos como representantes júnior, membros não votantes do Senado que representam um partido político ou uma espécie minoritária. Representantes trabalham em estreita colaboração com os senadores como uma delegação, para melhor representar os interesses da população inteira de um planeta. Os Representantes da República são políticos especializados, trabalhando uns com os outros e com o senador mundial para determinar quais problemas - ou soluções - devem coletivamente levar ao Senado Galáctico.')
            .addField('Pericias', 'Charme, Sangue Frio, Conhecimento(escolha qualquer um) e Negociação.', true)
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes catador'){
            const embed = new MessageEmbed()
            .setColor('#1217b3')
            .setTitle('Catador')
            .setDescription('Conforme as Guerras Clônicas surgem na galáxia, existem muitos seres que não têm interesse em qual lado ganha ou perde. Os Catadores sempre existiram na Orla Exterior. mas, durante a guerra, qualquer indivíduo poderia se encontrar entre os destroços de dróides e veículos, resgatando objetos de valor. Por esta razão, os sencientes de todas as esferas da vida podem se tornar Scavengers e aprender a transformar a tecnologia danificada ou esquecida em lucro no mercado negro, seja lidando com scanners e blasters individuais ou salvando naves inteiras.')
            .addField('Pericias', 'Mecanica, Percepção, Manha e Sobrevivência.', true)
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw especializacoes consul-curandeiro'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Curandeiro')
            .setDescription('Os Consulares são frequentemente atraídos para a carreira por um forte sentimento de compaixão. Em muitos, isso é expresso pelo desejo de mitigar os danos corporais e curar os doentes. Um curandeiro treina para fazê-lo, reconhecendo que ajudar o indivíduo pode ser tão importante quanto ajudar toda a civilização galáctica. \n \n Para alguns médicos, a cura é focada inteiramente nos problemas do corpo. Eles tratam lesões com uma abordagem clínica destacada. Um curandeiro, no entanto, é movido pela compaixão e afinidade com a Força. Por causa disso, um curandeiro adota uma abordagem holística em relação à medicina. \n Muitos curandeiros aprendem técnicas que usam a Força para alimentar as habilidades de recuperação natural do corpo - às vezes transformando uma lesão potencialmente letal em uma que é passível de sobrevivência. Eles também procuram acalmar e curar o espírito ferido tão completamente quanto curar a forma física ferida. Muitos curandeiros têm fortes compulsões filosóficas contra a violência física. Como eles passam a maior parte de suas vidas tentando curar ferimentos, eles podem ser extremamente relutantes em infligir-lhes. Consequentemente, aqueles que estudam esta especialização exclusivamente são menos propensos a ganhar habilidades que são dedicadas ao combate. Alguns curandeiros, no entanto, podem dedicar tempo para desenvolver técnicas defensivas, acreditando que situações perigosas são muitas vezes aquelas em que serão mais necessários.')
            .addField('Pericias', 'Disciplina, Conhecimento (Educação), Conhecimento (Xenologia), Medicina.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/consul-curandeiro.png'])
            .setImage('attachment://consul-curandeiro.png')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw especializacoes consul-niman'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Discipulo de Niman')
            .setDescription('Mesmo os mais bem sucedidos dos negociadores podem ver as negociações falharem e acabarem em violência. No tempo da República, muitos pacificadores Jedi treinaram com o sabre de luz para se prepararem para essa eventualidade. Hoje, os consulares que desejam fazer o mesmo podem se concentrar em autodefesa e obter um conhecimento prático do combate ao sabre de luz, seguindo o caminho do Discípulo de Niman. \n \n Devido à natureza naturalmente compassiva dos consulares, esse caminho se concentra no desenvolvimento de medidas defensivas em conjunto com técnicas de negociação. Em geral, as técnicas de combate associadas são focadas em sobrevivência e defesa, em vez de ataque. Além disso, devido à ênfase do Consular na disciplina mental e autocontrole, o Discípulo de Niman coloca mais ênfase na integração de suas habilidades de Força e em seu estilo de luta, usando a Força como seu aliado para derrotar inimigos perigosos.')
            .addField('Pericias', 'Disciplina, Liderança, Sabre de Luz, Negociação.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/consul-niman.png'])
            .setImage('attachment://consul-niman.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes consul-sabio'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Sábio')
            .setDescription('Muitos Consulares conhecem a verdade universal: conhecimento é poder, e entender uma situação pode dar uma vantagem decisiva. Isso é tão verdadeiro tanto ao resolver disputas ou negociações quanto no campo de batalha. Um sábio se concentra em estudar o mundo ao seu redor, reconhecendo que a informação oferece tremendas vantagens para ele e seus aliados. Ele então usa esse poder para ajudar a mudar os corações e mentes dos outros para alcançar seus objetivos. \n \n Alguns pesquisadores podem se perder em suas atividades acadêmicas, obcecados com os fatos secos, enquanto cegos para o sofrimento dos fracos e desamparados. A Força fornece um meio de fundamentar os estudos dos Sábios para que eles mantenham o que aprendem em perspectiva, sempre conscientes de como podem usar seu conhecimento para ajudar os outros.')
            .addField('Pericias', 'Astronavegação, Charme, Sangue Frio, Conhecimento (Sabedoria).', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/consul-sabio.png'])
            .setImage('attachment://consul-sabio.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes guardiao-mantenedor'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Mantenedor da Paz (pacificador)')
            .setDescription('Do outro lado da galáxia, sempre há tiranos e aqueles azarados o suficiente para sofrer sob seu domínio. Alguns Guardiões agem diretamente através da força militar para tentar derrubar esses déspotas. Outros Guardiões veem guerras devastando planetas e prejudicando os fracos e indefesos. Eles intervêm para defender os inocentes e reforçar a paz na ponta de um sabre de luz. Esses Guardiões são conhecidos como Mantenedores da Paz ou Pacificadores. \n \n Muitos Pacificadores apenas assumem essa especialização depois de terem sido empurrados para uma posição de autoridade - às vezes repetidamente. Por causa de suas personalidades naturalmente protetoras, esses Guardiões querem fazer tudo ao seu alcance para proteger seus amigos. Muitas vezes, eles decidem que a melhor escolha é se tornar o melhor líder possível, por um senso de responsabilidade e não por um desejo de poder. \n \n Personagens que buscam o caminho do Pacificador raramente limitam suas atividades a uma única região. Muitas vezes, uma vez que uma região foi pacificada ou um tirano é derrubado, um pacificador vê seu próximo desafio e leva seus amigos e companheiros combatentes da liberdade a superá-lo. Sob a sombra do Império, os Pacificadores são sempre necessários.')
            .addField('Pericias', 'Disciplina, Liderança, Percepção, Pilotagem (planetária).', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/guardiao-mantenedor.png'])
            .setImage('attachment://guardiao-mantenedor.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes guardiao-protetor'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Protetor')
            .setDescription('Os guardiões geralmente são movidos por sua compaixão pelas dificuldades daqueles que não podem se proteger. Os protetores garantem que esses inocentes nunca sejam prejudicados. Poucos são mais duros que um Protetor, e menos ainda conseguem passar pela guarda para atacar aqueles que ele defende. Mesmo que suas atividades lhe provoquem danos, o Protetor possui conhecimentos médicos básicos para curar suas feridas. \n \n Os protetores podem ser considerados guarda-costas, mas seus esforços raramente se limitam a proteger um único indivíduo. Em vez disso, os protetores são mais propensos a defender os necessitados em maior escala. Muitas vezes, eles funcionam como equipes de resgate, usando seus conhecimentos médicos para estabilizar lesões no campo e, em seguida, fornecer proteção adicional. Em outros casos, os Protetores podem abrigar refugiados ou outras vítimas fugindo de situações terríveis, mantendo a linha até que os inocentes possam escapar em segurança. Quando um Protetor defende um único indivíduo, é provável que uma grande ameaça - até mesmo outro usuário da Força - persiga a pessoa. \n \n Alguns Protetores podem dominar suas habilidades enquanto trabalham em um papel militar ou de aplicação da lei. Algumas técnicas da Força podem se manifestar espontaneamente enquanto agem instintivamente para manter os companheiros seguros. Isso pode ser particularmente relevante para indivíduos que não reconheceram sua conexão com a Força. Sua presença pode permitir que eles salvem um aliado do perigo de uma forma aparentemente inexplicável. No entanto, uma vez que esses indivíduos percebam o poder que têm, eles devem decidir se querem continuar sua carreira e manter isso em segredo, ou deixar a vida que conheceram e explorar suas novas habilidades.')
            .addField('Pericias', 'Disciplina, Liderança, Percepção, Pilotagem (planetária).', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/guardiao-protetor.png'])
            .setImage('attachment://guardiao-protetor.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes guardiao-soresu'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Defensor de Soresu')
            .setDescription('Guardiões freqüentemente e deliberadamente se colocam em perigo para ajudar os outros. No entanto, assim como o Protector é incomparável em manter os outros seguros, o Defensor Soresu dominou a arte da defesa pessoal. Com o sabre de luz na mão, os Defensores Soresu podem afastar hordas de inimigos ou ficar firmes em meio ao fogo, sobrevivendo ao pior que o inimigo pode lançar contra eles. \n \n Os Defensores Soresu dependem da Força para guiá-los pelos perigos. Suas técnicas repousam quase que inteiramente na melhor maneira de usar suas armas para propósitos defensivos. De muitas maneiras, esse estilo se aproxima do nível de precognição, à medida que a Força guia seus praticantes a usar suas armas para desviar um ataque que chega ou sair do caminho de um ataque. Indivíduos que não têm consciência do potencial da Força podem se tornar artistas marciais usando essas técnicas, mas verdadeiros defensores do Soresu devem ser sensíveis à Força.')
            .addField('Pericias', 'Disciplina, Conhecimento (Sabedoria), Sabre de Luz, Vigilância.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/guardiao-defensor.png'])
            .setImage('attachment://guardiao-defensor.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes mistico-conselheiro'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Conselheiro')
            .setDescription('Nem todo mundo que é habilidoso nos caminhos da Força procura manter uma posição de tremenda autoridade. De fato, alguns acreditam que achariam muito fácil abusar de suas habilidades únicas se se colocassem em uma posição de liderança. Em vez disso, eles escolhem aceitar o papel do Conselheiro para garantir que não possam ser corrompidos pela atração do poder. Outros acham seus conselhos valiosos demais para se limitar a um planeta ou região e vagam pelas estrelas, semeando a orientação da Força onde quer que eles possam ir. Personagens socialmente adeptos e sensíveis à Força, com qualquer uma dessas filosofias, podem ser excelentes para a especialização Conselheiro. \n \n Alguns Orientadores se ligam a um governo planetário, ajudando a moldar o estado de direito e garantindo justiça para todos. Muitos governantes populares têm Conselheiros sábios à mão, ajudando a garantir que suas políticas façam o melhor para o maior número possível de pessoas. Outros Conselheiros optam por trabalhar em papéis menos glamourosos - geralmente entre os pobres e os desesperados. Lá, eles tentam aconselhar e guiar as pessoas em situações difíceis, às vezes proporcionando salvação àqueles que perderam toda a esperança.')
            .addField('Pericias', 'Charme, Falsidade, Negociação, Manha.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/mistico-conselheiro.png'])
            .setImage('attachment://mistico-conselheiro.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes mistico-makashi'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Duelista Makashi')
            .setDescription('A presença e carisma que podem vir naturalmente a todos os místicos se refletem no caminho de um duelista. Para os praticantes de Makashi, dominar um combate através da presença de alguém é tão importante quanto dominá-lo através de proezas marciais, e o Duelista Makashi é a expressão máxima dessa arte. \n \n Embora alguns detratores possam rejeitar esse estilo de luta como excessivamente ingênuo e vão, um Duelista Makashi continua sendo um combatente excepcionalmente poderoso. Esses detratores esquecem que a forma Makashi foi desenvolvida para lutar contra outros oponentes armados com sabres de luz. Em seu coração o Makashi se concentra em um objetivo: encontrar um inimigo com uma espada ou sabre de luz e matá-lo. Um verdadeiro Duelista Makashi nunca perde de vista este objetivo, e todos os seus floreios e fintas são apenas meios para um fim. Movimentos que funcionam para desviar e exaurir um oponente - particularmente se o inimigo não estiver preparado para uma batalha com um sensitivo à Força - podem em rapidamente deixar o inimigo frustrado com o combate. À medida que o oponente fica cada vez mais desgastado, o Duelista Makashi logo encontra uma oportunidade para explorar a exaustão do inimigo. \n \n A força de personalidade de um Makashi Duelista, em vez de um atletismo natural, muitas vezes impulsiona sua técnica de combate. Elementos de talento pessoal tornam-se um meio eficaz de desorientar e distrair um oponente durante uma batalha. Às vezes, uma má orientação verbal pode ser tão eficaz quanto a física, deixando um oponente aberto a um único golpe mestre.')
            .addField('Pericias', 'Charme, Sangue Frio, Coordenação, Sabre de luz.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/mistico-makashi.png'])
            .setImage('attachment://mistico-makashi.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes mistico-vidente'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Vidente')
            .setDescription('Alguns indivíduos são capazes de permanecer constantemente conscientes da presença da Força, mesmo quando vivem seu cotidiano. Eles reconhecem sua influência no mais sutil dos caminhos. Para eles, pequenas ondulações na Força revelam significados profundos e previnem eventos críticos no futuro. No entanto, essa quantidade de informação - particularmente em ambientes preenchidos com outros sencientes - pode se tornar esmagadora. Por causa disso, muitos que seguem o caminho do Vidente escolhem viver vidas de relativo isolamento, longe de cidades e cidades lotadas. \n \n Entre os indivíduos sensíveis à força, os videntes são indiscutivelmente os que sentem o mais forte senso de orientação da Força. Habitando dentro da Força em todos os momentos, eles podem reconhecer até mesmo pequenas ondas e segui-las até a sua origem para impedir que um pequeno problema se transforme em uma grande crise. Da mesma forma, eles podem reconhecer um evento que ocorre longe e aconselhar as pessoas próximas a tomarem medidas para que possam se preparar bem antes de uma crise futura. As habilidades dos videntes muitas vezes lhes dão insights sobre o futuro, orientando-os para lugares e pessoas que mais precisam de sua sabedoria e conselhos. Isso às vezes permite que os videntes estejam no lugar certo, na hora certa, para tomar medidas que se revelem cruciais. \n \n O desafio para muitos videntes é conhecer a melhor época para se mudar para uma área civilizada. Como sua sensibilidade pode se tornar confusa, eles podem perder um sinal de grande importância. Consequentemente, alguns preferem permanecer separados da sociedade pelo maior tempo possível, dependendo dos aliados para levar suas cartas. Raramente, no entanto, existem outros que são capazes de comunicar um aviso com a mesma eficácia do Vidente que inicialmente sentiu o perigo.')
            .addField('Pericias','Disciplina, Conhecimento(Sabedoria), Sobrevivência, Vigilância.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/mistico-vidente.png'])
            .setImage('attachment://mistico-vidente.png')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw especializacoes seeker-ataru'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Batedor Ataru')
            .setDescription('Ao trabalhar sozinho em um ambiente hostil, todo conflito físico deve ser resolvido de forma rápida e decisiva. Freqüentemente, um planeta incivilizado carece de qualquer tipo de instalações médicas. Na verdade, às vezes, um explorador isolado poderia ser o único ser senciente em um lugar. Em tal situação, uma pequena lesão pode ser fatal. Se um conflito é necessário, é melhor resolvê-lo rapidamente, assumindo quaisquer riscos, do que lutar de forma mais conservadora e prolongar o risco de lesão. O Batedor Ataru abraça esta abordagem, jogando-se em combate com cada fibra do seu ser. \n \n Os praticantes do estilo de luta de Ataru devem ser extremamente confiantes em suas habilidades. Eles também devem ser excepcionalmente atléticos e capazes de usar toda a sua energia em um conflito muito breve. Quando envolvidos em um conflito físico, os Batedores Ataru lutam sem remorso, mas também com pouca preocupação com sua própria segurança. Cada movimento é projetado para infligir uma enxurrada de ataques rápidos e avassaladores contra seus oponentes de uma miríade de ângulos. Sua ofensa viciosa e inflexível é a sua melhor (e às vezes única) defesa - a maioria dos oponentes está tão ocupada se defendendo que não tem tempo para atacar. \n \n No entanto, esse estilo de ataque implacável pode ter suas desvantagens. Um Batedor Ataru precisa ver seu oponente ser derrotado rapidamente, antes de se exaurir. Um indivíduo que pode sobreviver a um Batedor Ataru pode provar ser seu inimigo mais mortal.')
            .addField('Pericias', 'Atletismo, Coordenação, Sabre de luz, Percepção.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/seeker-ataru.png'])
            .setImage('attachment://seeker-ataru.png')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw especializacoes seeker-cacador'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Caçador')
            .setDescription('Longe das partes civilizadas da galáxia, existem muitos predadores que podem pôr em risco a vida senciente. Alguns destes são animais que atacam qualquer coisa digerível. Outros são indivíduos maliciosos e retorcidos que desfrutam de uma existência selvagem e sanguinária. Os caçadores são adeptos da Força que são capazes de rastrear, confrontar e matar essas criaturas, especialmente aquelas que se escondem nas selvas, longe da civilização. \n \n A maioria dos caçadores inicialmente inicia suas carreiras com foco em presas de animais. Poucos, no entanto, se envolvem nessa prática com o desejo de provar sua coragem ou sede de sangue. Em vez disso, sua conexão com a Força muitas vezes permite que eles diferenciem predadores que caçam por necessidade daqueles que são ativamente mal intencionados. Um Caçador normalmente não interfere no ciclo natural da vida, mas está mais do que disposto a restaurar o equilíbrio eliminando um predador que mata desnecessariamente e destrói os habitats naturais. Infelizmente, essas inteligências animalistas sujas e distorcidas também têm seus paralelos dentro dos seres sencientes. Com muita frequência, um caçador se ver caçando um ser inteligente; Esso pode ser o jogo mais perigoso de todos.')
            .addField('Pericias', 'Coordenação, Comb. a Dis.(pesado), Furtividade, Vigilância.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/seeker-cacador.png'])
            .setImage('attachment://seeker-cacador.png')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw especializacoes seeker-pathfinder'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Pathfinder')
            .setDescription('Poucos são tão capazes de explorar um planeta e descobrir seus segredos como um Pathfinder. A combinação dos talentos da Força dos Desbravadores e seu treinamento permite que eles concluam uma busca com rapidez e precisão, mesmo sob as condições mais adversas. Um Pathfinder pode sobreviver em um deserto hostil por semanas ou meses, vivendo da terra com suprimentos mínimos e, possivelmente, um fiel animal de companhia. Na verdade, alguns Pathfinders são capazes de se unir a seus companheiros através da Força, comunicando-se com eles mentalmente, vendo através de seus sentidos e até mesmo dirigindo suas ações. \n \n Alguns Pathfinders seguem essa carreira porque descobrem que têm um talento especial para a sobrevivência. Isso é mais comum em indivíduos sensíveis à Força que amadureceram em planetas primitivos e não-civilizados. Se sua pequena comunidade estava cercada por uma selva hostil, o personagem certamente passou sua juventude explorando esse ambiente - provavelmente fazendo amizade com muitos dos animais selvagens. As habilidades naturais dos desbravadores provavelmente os levaram a uma posição de responsabilidade dentro de sua tribo. Seus papéis podem ter incluído a garantia da segurança do deserto ao redor e a manutenção de quaisquer trilhas que levem a recursos agrícolas ou outras necessidades necessárias aos moradores da comunidade. \n \n Outros que seguem a carreira de Pathfinder o fazem por preferirem pela companhia dos animais em detrimento da dos seres sencientes. Através de suas habilidades de Força, alguns aprendem a estabelecer comunicações efetivas com mentes relativamente primitivas. Nessas interações, eles descobrem que apreciam a sinceridade e a natureza direta das criaturas selvagens.')
            .addField('Pericias', 'Medicina, Comb. a Dis.(leve), Resiliência, Sobrevivência.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/seeker-pathfinder.png'])
            .setImage('attachment://seeker-pathfinder.png')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw especializacoes sentinela-artesao'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Artesão')
            .setDescription('Alguns usuários da Força possuem uma habilidade inata com ferramentas e máquinas. Esses artífices podem usar sua habilidade com a Força para melhorar suas habilidades e até mesmo entender intuitivamente a forma e a função de uma máquina. Afinal, enquanto ferramentas e máquinas podem não estar vivas, a Força envolve tudo na galáxia. Os artesãos sentem a Força que cerca suas ferramentas e os itens em que trabalham, usando essa conexão para construir criações de beleza e precisão maravilhosas. Um Artesão não cria mais do mesmo item para venda ou distribuição. Em vez disso, cada uma de suas criações é individual e icônica, uma verdadeira obra de arte. \n \n Dentro de ambientes urbanos, indivíduos que nunca aprenderam a reconhecer a Força podem seguir o caminho do Artesão. Isso ocorre porque eles são cercados por tecnologia, e se esses indivíduos se interessam em como as coisas funcionam e como consertá-las, suas habilidades de Força podem naturalmente se desenvolver... Quando se deparam com uma máquina quebrada, eles podem identificar o problema de maneira intuitiva - alguns até afirmam que as máquinas “falam” com eles. Alguns artesãos vivem de acordo com o estereótipo do inventor confuso, enquanto outros permanecem meticulosamente limpos ou até mesmo se esforçam para disfarçar seu trabalho artesanal de observadores casuais.')
            .addField('Pericias', 'Astronavegação, Comutadores, Conhecimento(Educação), Mecânica.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/sentinela-artesao.png'])
            .setImage('attachment://sentinela-artesao.png')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw especializacoes sentinela-shadow'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Shadow')
            .setDescription('Nos dias da Ordem Jedi, os sentinelas trabalhavam incansavelmente para policiar os criminosos da galáxia. Na verdade, um pequeno subconjunto desses policiais concentrou suas atenções em uma ameaça muito maior e mais perigosa. Eles treinaram incansavelmente para encontrar e eliminar aqueles que haviam caído para o lado sombrio da Força e de bom grado abraçaram a corrupção. Essas Sentinelas eram chamadas Shadown e caçavam os Sith. \n \n Por muitos anos, os Sith foram considerados destruídos, e os Jedi Shadows desistiram de seu chamado ou perseguiram outros usuários do lado negro da Força. Eles nunca perceberam que os Sith não haviam sido eliminados e estavam se escondendo bem debaixo de seus narizes. \n \n Agora, com a Ordem Jedi destruída e um Lorde das Trevas dos Sith governando o Império Galáctico, aqueles que seguem o caminho do Shadow encontram seus papéis invertidos. Não mais os investigadores secretos de uma ordem estabelecida que procuraram as sombras da civilização, eles são agora aqueles que devem permanecer escondidos. No entanto, dentro desses cantos escuros, os Shadows ainda trabalham incansavelmente para levar justiça a criminosos intocáveis e a usuários do lado negro da Força. \n \n Naturalmente, um iniciado que tenha se voltado para o lado negro pode se mostrar um poderoso oponente para um Shadow. Trabalhar contra tal adversário pode exigir todos os talentos mundanos e da Força de um adepto. A disposição de um Shadow de examinar e utilizar todas as ferramentas e ativos pode ser um fator importante na superação de tais inimigos capazes.')
            .addField('Pericias', 'Conhecimento(Submundo), Artimanha, Furtividade, Manha.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/sentinela-shadow.png'])
            .setImage('attachment://sentinela-shadow.png')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw especializacoes sentinela-shien'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Expert em Shien')
            .setDescription('Um sabre de luz é uma arma potente. Quando empunhada com o uso da força, pode até vencer um oponente que tem uma arma capaz de pará-lo. Além disso, a sua capacidade de desviar os disparos blaster pode também torná-lo uma arma eficaz de longo alcance. Aqueles que se consideram Experts em Shien - mestres da forma Shien de sabre de luz - abraçam a aparente contradição entre esses dois usos. Eles sabem que os verdadeiros mestres de sabres de luz devem possuir a astúcia para usar tais armas em todo o seu potencial. É preciso precisão para refletir um ataque à distância de volta para um adversário, mas inteligência e astúcia para reconhecer o momento certo de dominar os adversários por meio da força bruta. \n \n Sempre que possível, um Especialista Shien prepara o campo de batalha bem antes de um conflito. Muitas vezes, esses indivíduos reservam um tempo para estudar vários locais diferentes logo após chegarem a uma cidade. Uma vez que o combate começa, eles podem explorar cuidadosamente o ambiente e acionar qualquer armadilha que eles possam ter preparado para atacar seus oponentes. \n \n Durante o combate, os Especialistas Shien continuam a analisar constantemente a situação. Enquanto eles aproveitam o terreno durante uma batalha, eles também são seletivos em escolher a melhor maneira de usar seu treinamento, bem como seu sabre de luz. Isso pode mudar a cada instante, em reação ao armamento, posição e postura de seus inimigos. Para esses indivíduos, um conflito prolongado é um caminho seguro para a vitória, uma vez que eles reagem a cada movimento que seus oponentes fazem com um ataque inteligente ou ataque poderoso.')
            .addField('Pericias', 'Atletismo, Sabre de Luz, Resiliencia, Artimanha.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/sentinela-shen.png'])
            .setImage('attachment://sentinela-shen.png')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw especializacoes guerreiro-agressor'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Agressor')
            .setDescription('O Agressor depende do medo para intimidar seus inimigos à rendição ou retirada. Os agressores tendem a ser combatentes resistentes e perigosos, capazes de causar danos brutais a qualquer um que os combata, enquanto sobrevivem ao mesmo. Eles usam suas atitudes confiantes e terríveis para transmitir isso aos seus oponentes. Alguns Agressores esperam que seus inimigos recuem sem lutar, mas outros caem na armadilha de saborear o medo que eles inspiram. \n \n Temperado pela Força, alguns personagens que realizam essa especialização preferem usar suas habilidades para intimidar os inimigos a se renderem para que não precisem matar desnecessariamente. Enquanto eles são extremamente capazes com relação a isso, eles freqüentemente aprendem as técnicas necessárias para causar o mínimo de dano necessário. A precisão é importante, pois toda vida ainda tem valor na Força. \n \n Quando confrontados por um inimigo que parece irredimível, no entanto, a atitude do Agressor muda adequadamente. Todos os elementos de auto-contenção são descartados, e o agressor é capaz de simplesmente punir seus inimigos, infligindo um golpe devastador após um golpe devastador. Freqüentemente, os oponentes simplesmente fogem em vez de contratar um agressor. Histórias contadas por sobreviventes - e às vezes aliados - aumentam a reputação do personagem, tornando ainda mais fácil intimidar futuros inimigos.')
            .addField('Pericias', 'Coerção, Conhecimento(Submundo), Comb. a Dis.(Leve), Manha.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/guerreiro-agressor.png'])
            .setImage('attachment://guerreiro-agressor.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes guerreiro-shii-sho'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Cavaleiro Shii-Sho')
            .setDescription('O antigo estilo de luta de sabre de luz de Shii-Cho é dito ser a primeira forma de sabre de luz ensinada aos Jedi e seus predecessores. Ele se concentra nos fundamentos da luta de sabres e emprega pesadamente de outras técnicas de luta com espadas. Apropriadamente, os praticantes modernos desta forma se concentram em aperfeiçoar os principais ensinamentos da luta com espadas, reconhecendo a força da simplicidade. Cavaleiros Shii-Cho evitam manobras extravagantes, preferindo se concentrar nos fundamentos de bloquear, impedir e golpear. \n \n Os seguidores deste caminho raramente estão preocupados com aparências pessoais ou com o estilo que exibem em um conflito. Em vez disso, eles estão focados em precisão e em alcançar seu objetivo final de vitória. Para eles, uma base sólida é algo em que eles podem confiar em qualquer situação. Quando vidas estão em jogo, elas dedicam sua atenção a executar suas manobras de maneira tradicional, usando-as para contra-atacar um oponente e, ao mesmo tempo, restringindo suas opções.')
            .addField('Pericias', 'Atletismo, Sabre de Luz, Resiliencia, Artimanha.', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/guerreiro-shi-sho.png'])
            .setImage('attachment://guerreiro-shi-sho.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw especializacoes guerreiro-starfighter'){
            const embed = new MessageEmbed()
            .setColor('#c41028')
            .setTitle('Às Starfighter')
            .setDescription('Os pilotos de Starfighter se engajam entusiasticamente em uma das formas mais perigosas de batalha imagináveis. Seus escudos e armaduras - para os caças-estelares - não oferecem praticamente nenhuma resistência às armas das naves capitais a que se opõem. Em vez disso, eles devem confiar na Força para protegê-los enquanto lançam seus assaltos ousados. Aqueles que abraçam os riscos do combate espacial podem buscar a especialização Às Starfighter. \n \n Embora esse estilo de combate dependa de um veículo, ele ainda é fisicamente desgastante. Mesmo com uma gama completa de aprimoramentos tecnológicos, pilotos eficientes devem ser capazes de suportar mudanças rápidas e extremas na velocidade e direção. Eles também devem permanecer prontos para dar um golpe mortal contra um oponente no instante certo, mesmo enquanto lutam para suportar condições fisiológicas extremas.')
            .addField('Pericias', 'Astronavegação, Artilharia, Mecânica, Pilotagem(espacial).', true)
            .addField('Outros','Jogador ganha um grau em duas das perícias da especialização')
            .attachFiles(['trees/guerreiro-starfighter.png'])
            .setImage('attachment://guerreiro-starfighter.png')
            msg.channel.send({ embeds: [embed] });
        }

        
        
        if (matches.bestMatch.target === '!sw pericias'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Perícias')
            .setDescription('astronavegacao \n artilharia \n artimanha \n atletismo \n briga \n charme \n coercao \n combate a distancia - leve \n combate a distancia - pesado \n combate proximo (corpo a corpo) \n computadores \n coordenacao \n disciplina \n educacao \n falsidade \n furtividade \n lideranca \n manha \n mecanica \n medicina \n mundos centrais \n negociacao \n orla exterior \n percepcao \n pilotar - espacial \n pilotar - planetario \n resiliencia \n saber \n sabre de luz \n sangue frio \n sobrevivencia \n submundo \n vigilancia \n xenologia')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw tips'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Dicas rápidas')
            .setDescription('gastar-vantagem-triunfo-combate \n dados \n simbolos-dados \n modificadores-combate-distancia \n propriedades-armas')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw tips gastar-vantagem-triunfo-combate'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Gastar Vantagem e Triunfo em Combate')
            .attachFiles(['tips/gastando-vantagem-triunfo-combate.jpg'])
            .setImage('attachment://gastando-vantagem-triunfo-combate.jpg')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw tips dados'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Dados')
            .setDescription('Você tem dado em casa?')
            .attachFiles(['tips/dados.jpg'])
            .setImage('attachment://dados.jpg')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw tips simbolos-dados'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Simbolos dos Dados')
            .attachFiles(['tips/simbolos-dados.jpg'])
            .setImage('attachment://simbolos-dados.jpg')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw tips modificadores-combate-distancia'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Modificadores de Combate a Distância')
            .attachFiles(['tips/modificadores-combate-distancia.jpg'])
            .setImage('attachment://modificadores-combate-distancia.jpg')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw tips propriedades-armas'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Propriedades das armas')
            .attachFiles(['tips/propriedades-armas.jpg'])
            .setImage('attachment://propriedades-armas.jpg')
            msg.channel.send({ embeds: [embed] });
        }


        if (matches.bestMatch.target === '!sw loja'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Dicas rápidas')
            .setDescription('armas \n sabres-de-luz \n armaduras \n equipamento \n veiculos')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw loja armas'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Armas')
            .setDescription('Todo tipo de armas a sua disposição!')
            .addField('A distância','Blaster DC-15 \n Carabina Blaster DC-15A \n Blaster de mão DC-17 \n Canhão blaster Z-6 Rotary \n Granada perfurante AP-M1 \n Granada EMP MKII \n Sistema de Morteiros Modelo 201 \n Lança Foguetes RPS-6')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw loja armas Rifle Blaster DC-15'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Blaster DC-15')
            .setDescription('Essas armas são pesadas, mal equilibradas e extremamente difíceis de usar em qualquer lugar, exceto em um campo de batalha aberto. Elas tendem a sofrer problemas de coesão de vigas após o fogo contínuo, o que afeta negativamente sua precisão de curto a médio alcance, e geralmente são armas desagradáveis para se lidar diariamente. Apesar dessas falhas gritantes, o DC-15 permanece surpreendentemente popular entre os clones por uma simples razão: a energia bruta. \n \n O DC-15 é um dos rifles blaster mais poderosos em uso atual. Ele pode perfurar a armadura laminada a 1.000 metros e em alvos mais próximos pode destruir veículos levemente blindados. Ele raramente superaquece ou precisa ser recarregado, é extremamente confiável e pode ser reparado com o mínimo de ferramentas. Muitos atiradores de clones adotaram-na como sua arma primária, ajustando-a com sistemas óticos de longo alcance e unidades de giro-estabilização para aumentar a eficácia do combate.')
            .addField('Dano', '10', true)
            .addField('Crítico', '<:advantage:607023617447821323> <:advantage:607023617447821323> <:advantage:607023617447821323>', true)
            .addField('Alcance', 'Longo', true)
            .addField('Carga', '6', true)
            .addField('Pontos de Customização', '4', true)
            .addField('Raridade', '6', true)
            .addField('Pericia', 'Combate a Distância - Pesado', true)
            .addField('Especial', 'Desajeitada 3, Perfurante 1, Dano atordoante(modo atordoar)', true)
            .addField('Preço', '(R) 2.200', true)
            .setImage('https://vignette.wikia.nocookie.net/starwars/images/7/7a/DC-15_blaster_rifle_-_SW_Card_Trader.png/revision/latest?cb=20160710012158')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw loja armas Carabina Blaster DC-15A'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Carabina Blaster DC-15A')
            .setDescription('placeholder')
            .addField('Dano', '9', true)
            .addField('Crítico', '<:advantage:607023617447821323> <:advantage:607023617447821323> <:advantage:607023617447821323>', true)
            .addField('Alcance', 'Médio', true)
            .addField('Carga', '3', true)
            .addField('Pontos de Customização', '4', true)
            .addField('Raridade', '5', true)
            .addField('Pericia', 'Combate a Distância - Pesado', true)
            .addField('Especial', 'Automática, Perfurante 1, Dano atordoante(modo atordoar)', true)
            .addField('Preço', '(R) 1.500', true)
            .setImage('https://vignette.wikia.nocookie.net/starwars/images/3/33/DC-15A_blaster_-_SW_Card_Trader.png/revision/latest?cb=20160710015218')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw loja armas Blaster de mão DC-17'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Blaster de mão DC-17')
            .setDescription('placeholder')
            .addField('Dano', '7', true)
            .addField('Crítico', '<:advantage:607023617447821323> <:advantage:607023617447821323> <:advantage:607023617447821323>', true)
            .addField('Alcance', 'Médio', true)
            .addField('Carga', '2', true)
            .addField('Pontos de Customização', '3', true)
            .addField('Raridade', '6', true)
            .addField('Pericia', 'Combate a Distância - Leve', true)
            .addField('Especial', 'Certeira 1, Dano atordoante(modo atordoar)', true)
            .addField('Preço', '(R) 1.000', true)
            .setImage('https://vignette.wikia.nocookie.net/starwars/images/9/92/DC-17_pistol.jpg/revision/latest/scale-to-width-down/250?cb=20180131182409')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw loja armas Canhão blaster Z-6 Rotary'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Canhão blaster Z-6 Rotary')
            .setDescription('placeholder')
            .addField('Dano', '12', true)
            .addField('Crítico', '<:advantage:607023617447821323> <:advantage:607023617447821323> <:advantage:607023617447821323> <:advantage:607023617447821323>', true)
            .addField('Alcance', 'Longo', true)
            .addField('Carga', '6', true)
            .addField('Pontos de Customização', '3', true)
            .addField('Raridade', '7', true)
            .addField('Pericia', 'Combate a Distância - Pesado', true)
            .addField('Especial', 'Automática(SOMENTE), Desajeitada 3, Preparar 1', true)
            .addField('Preço', '(R) 3.000', true)
            .setImage('https://vignette.wikia.nocookie.net/starwars/images/d/d5/Z-6_rotary_cannon_FiB.png/revision/latest?cb=20190214072219')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw loja armas Granada perfurante AP-M1'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Granada perfurante AP-M1')
            .setDescription('placeholder')
            .addField('Dano', '13', true)
            .addField('Crítico', '<:advantage:607023617447821323> <:advantage:607023617447821323> <:advantage:607023617447821323>', true)
            .addField('Alcance', 'Curto', true)
            .addField('Carga', '1', true)
            .addField('Pontos de Customização', '0', true)
            .addField('Raridade', '6', true)
            .addField('Pericia', 'Combate a Distância - Leve', true)
            .addField('Especial', 'Explosiva 4, Munição limitada 1, Perfurante 4', true)
            .addField('Preço', '(R) 200', true)
            .setImage('https://vignette.wikia.nocookie.net/starwars/images/8/8e/Impact_Grenade.png/revision/latest?cb=20151115002258')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw loja armas Lança Chamas Pesado BT x-42'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Lança Chamas Pesado BT x-42')
            .setDescription('placeholder')
            .addField('Dano', '10', true)
            .addField('Crítico', '<:advantage:607023617447821323> <:advantage:607023617447821323>', true)
            .addField('Alcance', 'Médio', true)
            .addField('Carga', '6', true)
            .addField('Pontos de Customização', '2', true)
            .addField('Raridade', '7', true)
            .addField('Pericia', 'Artilharia', true)
            .addField('Especial', 'Explosiva 6, Flamejante 4, Voraz 1', true)
            .addField('Preço', '(R) 2.000', true)
            .setImage('http://www.empireinflames.com/wp-content/uploads/2015/05/Flamethrower-SWG.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw loja armas Granada EMP MKII'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Granada EMP MKII')
            .setDescription('placeholder')
            .addField('Dano', '8', true)
            .addField('Crítico', '<:advantage:607023617447821323> <:advantage:607023617447821323> <:advantage:607023617447821323> <:advantage:607023617447821323>', true)
            .addField('Alcance', 'Curto', true)
            .addField('Carga', '1', true)
            .addField('Pontos de Customização', '0', true)
            .addField('Raridade', '5', true)
            .addField('Pericia', 'Combate a Distância (leve)', true)
            .addField('Especial', 'Explosiva 6, Desorientar 3, Iônica, Munição Limitada 1', true)
            .addField('Preço', '150', true)
            .setImage('https://vignette.wikia.nocookie.net/ironsightgame/images/7/76/WeaponEMPGrenade.png/revision/latest?cb=20180315145216')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw loja armas Sistema de Morteiros Modelo 201'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Sistema de Morteiros Modelo 201')
            .setDescription('placeholder')
            .addField('Dano', '15', true)
            .addField('Crítico', '<:advantage:607023617447821323> <:advantage:607023617447821323> <:advantage:607023617447821323>', true)
            .addField('Alcance', 'Extremo', true)
            .addField('Carga', '10', true)
            .addField('Pontos de Customização', '1', true)
            .addField('Raridade', '7', true)
            .addField('Pericia', 'Artilharia', true)
            .addField('Especial', 'Explosiva 12, Penetrante 1, Munição Limitada 5, Preparar 2, Lenta 1', true)
            .addField('Preço', '(R) 5.400', true)
            .setImage('https://vignette.wikia.nocookie.net/starwars/images/d/d5/MortarLauncher-CoK.jpg/revision/latest?cb=20111119044309')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw loja armas Lança Foguetes RPS-6'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Lança Foguetes RPS-6')
            .setDescription('placeholder')
            .addField('Dano', '22', true)
            .addField('Crítico', '<:advantage:607023617447821323> <:advantage:607023617447821323> <:advantage:607023617447821323>', true)
            .addField('Alcance', 'Extremo', true)
            .addField('Carga', '8', true)
            .addField('Pontos de Customização', '4', true)
            .addField('Raridade', '8', true)
            .addField('Pericia', 'Artilharia', true)
            .addField('Especial', 'Explosiva 14, Penetrante 1, Desajeitada 4, Guiada 2, Munição Limitada 7', true)
            .addField('Preço', '(R) 8.200', true)
            .setImage('https://static.wixstatic.com/media/c041a7_fd571416b2d74240b0e60c7a399b5a16~mv2.jpg/v1/fit/w_498,h_364,q_90/file.jpg')
            msg.channel.send({ embeds: [embed] });
        }

        if (matches.bestMatch.target === '!sw poderes'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Poderes Disponíveis')
            .setDescription('Aumentar (1+) \n Curar/Ferir (1+) \n Influenciar (1+) \n Iludir (1+) \n Mover (1+) \n Prever (1+) \n Procurar (1+) \n Sentir (1+)  \n Meditação de batalha (2+) \n Restringir (2+) \n Proteger/Unleash (3+)')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw poderes Aumentar'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Aumentar')
            .setDescription('Poder do livro Force and Destiny')
            .addField('Nível de Força','+1',true)
            .attachFiles(['trees/powers/aumentar.png'])
            .setImage('attachment://aumentar.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw poderes Curar/Ferir'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Curar/Ferir')
            .setDescription('Poder do livro Force and Destiny')
            .addField('Nível de Força','+1',true)
            .attachFiles(['trees/powers/curar_ferir.png'])
            .setImage('attachment://curar_ferir.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw poderes Iludir'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Iludir')
            .setDescription('Poder do livro Force and Destiny')
            .addField('Nível de Força','+1',true)
            .attachFiles(['trees/powers/iludir.png'])
            .setImage('attachment://iludir.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw poderes Influenciar'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Influenciar')
            .setDescription('Poder do livro Force and Destiny')
            .addField('Nível de Força','+1',true)
            .attachFiles(['trees/powers/influenciar.png'])
            .setImage('attachment://influenciar.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw poderes Meditação de Batalha'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Influenciar')
            .setDescription('Poder do livro Force and Destiny')
            .addField('Nível de Força','+2',true)
            .attachFiles(['trees/powers/meditacao.png'])
            .setImage('attachment://meditacao.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw poderes Mover'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Mover')
            .setDescription('Poder do livro Force and Destiny')
            .addField('Nível de Força','+1',true)
            .attachFiles(['trees/powers/mover.png'])
            .setImage('attachment://mover.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw poderes Prever'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Prever')
            .setDescription('Poder do livro Force and Destiny')
            .addField('Nível de Força','+1',true)
            .attachFiles(['trees/powers/prever.png'])
            .setImage('attachment://prever.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw poderes Restringir'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Restringir')
            .setDescription('Poder do livro Force and Destiny')
            .addField('Nível de Força','+2',true)
            .attachFiles(['trees/powers/restringir.png'])
            .setImage('attachment://restringir.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw poderes Procurar'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Procurar')
            .setDescription('Poder do livro Force and Destiny')
            .addField('Nível de Força','+1',true)
            .attachFiles(['trees/powers/procurar.png'])
            .setImage('attachment://procurar.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw poderes Proteger/Unleash'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Proteger/Unleash')
            .setDescription('Poder do livro Force and Destiny')
            .addField('Nível de Força','+3',true)
            .attachFiles(['trees/powers/proteger_unleash.png'])
            .setImage('attachment://proteger_unleash.png')
            msg.channel.send({ embeds: [embed] });
        }
        if (matches.bestMatch.target === '!sw poderes Sentir'){
            const embed = new MessageEmbed()
            .setColor('#15940c')
            .setTitle('Sentir')
            .setDescription('Poder do livro Force and Destiny')
            .addField('Nível de Força','+1',true)
            .attachFiles(['trees/powers/sentir.png'])
            .setImage('attachment://sentir.png')
            msg.channel.send({ embeds: [embed] });
        }
    }
});


client.on('ready', () => {
    console.log('conectado');
});

client.login(token);