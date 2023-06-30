import i18n from "i18next";
import { initReactI18next } from "react-i18next";

function test() {
  return false
};

export default test

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          menu: {
            about: 'ABOUT',
            portfolio: 'PORTFOLIO',
            contact: 'CONTACT'
          },
          home: {
            about: {
              title: 'About',
              about: "My name is Leonardo. I'm a front-end developer who loves technology and art in general. Looking to contribute professionally as a Front-end developer, I have been honing my skills by working on some personal projects. One of the things I love about front-end development is how it allows me to combine my interests in art and technology. I see web development as a way to have a better understanding of how the digital world will start to look in the future, as digital art can be used to create engaging and immersive experiences for users. I strive to create tools that are not only visually appealing but also functional and easy to use. When I'm not coding, I'm usually exploring outside, playing video games, or attending local art shows. I think these hobbies inspire me to think creatively and approach my work from different angles. Thank you for taking the time to check out my portfolio and I hope you enjoy exploring my designs as much as I've enjoyed creating them."
            },
            profile: {
              title: 'Hi, and welcome to my portfolio',
              info: {
                role: {
                  title: 'Role',
                  info: 'Front-end Developer',
                },
                location: {
                  title: 'Location',
                  info: 'Lisbon - Portugal',
                },
                age: {
                  title: 'Age',
                  info: '31',
                },
                languages: {
                  title: 'Languages',
                  info: 'Portuguese / English'
                },
              },
              certificates: 'Certificates'
            },
            skills: {
              needs: ''
            },
          },
          portfolio: {
            filter: 'All',
            description: {
              title: '{{title}}',
              description: '{{text}}',
              technology: {
                title: 'Technology',
              },
              buttonRepo: 'Repository',
              buttonLink: 'Live'
            }
          },
          contact: {
            title: 'Contact Me,',
            subTitle: 'and send me offers, questions or anything',
            label: {
              name: 'Name',
              email: 'Email',
              message: 'Message'
            },
            button: 'Send me!'
          },
          descrption: {
            title: 'Description',
            site: 'Visite the site',
            technology: 'Contact'
          },
        },
      },
      pt: {
        translation: {
          menu: {
            about: 'SOBRE',
            portfolio: 'PORTFÓLIO',
            contact: 'CONTATO'
          },
          home: {
            about: {
              title: 'Sobre',
              about: 'Meu nome é Leonardo. Sou um desenvolvedor front-end que adora tecnologia e arte em geral. A procura de contribuir profissionalmente como desenvolvedor Front-end, tenho aprimorado minhas habilidades trabalhando em alguns projetos pessoais. Uma das coisas que adoro no desenvolvimento front-end é como ele me permite combinar meus interesses em arte e tecnologia. Vejo o desenvolvimento web como uma forma de entender melhor como o mundo digital começará a ser no futuro, pois a arte digital pode ser usada para criar experiências envolventes e imersivas para os usuários. Eu me esforço para criar ferramentas que não sejam apenas visualmente atraentes, mas também funcionais e fáceis de usar. Quando não estou codificando, geralmente estou explorando o exterior, jogando videogame ou participando de exposições de arte locais. Acho que esses hobbies me inspiram a pensar criativamente e abordar meu trabalho de diferentes ângulos. Obrigado por reservar um tempo para conferir meu portfólio e espero que goste de explorar meus designs tanto quanto eu gostei de criá-los.'
            },
            profile: {
              title: 'Óla, e bem vindo ao meu portfólio',
              info: {
                role: {
                  title: 'Função',
                  info: 'Desenvolvedor Front-end',
                },
                location: {
                  title: 'Localização',
                  info: 'Lisboa - Portugal',
                },
                age: {
                  title: 'Idade',
                  info: '31',
                },
                languages: {
                  title: 'Linguagens',
                  info: 'Portugues / Inglês'
                },
              },
              certificates: 'Certificados'
            },
            skills: {
              needs: ''
            },
          },
          portfolio: {
            filter: 'Todos',
            description: {
              title: '{{title}}',
              description: '{{text}}',
              technology: {
                title: 'Tecnologias',
              },
              buttonRepo: 'Repositorio',
              buttonLink: 'Live'
            }
          },
          contact: {
            title: 'Me contate,',
            subTitle: 'e me envie ofertas, perguntas ou qualquer coisa',
            label: {
              name: 'Nome',
              email: 'Email',
              message: 'Mensagem'
            },
            button: 'Me envie!'
          },
          descrption: {
            title: 'Descrição',
            site: 'Visite o site',
            technology: 'Contact'
          },
        },
      }
    },

  });
