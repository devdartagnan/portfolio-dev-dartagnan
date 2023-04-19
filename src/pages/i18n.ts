import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
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
            about: "My name is Leonardo and I'm a passionate front-end developer with a keen eye for design. Although I don't have any work experience yet, I have been honing my skills by working on various personal projects. One of the things that I love about front-end development is how it allows me to blend my interests in art and games. I see web development as a form of digital art that can be used to create engaging and immersive experiences for users. I strive to create designs that are not only visually appealing but also functional and easy to use. When I'm not coding, I can usually be found exploring the latest video games or attending local art exhibitions. I find that both of these hobbies inspire me to think creatively and approach my work from different angles. Thank you for taking the time to check out my portfolio, and I hope you enjoy exploring my projects as much as I enjoyed creating them"
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
              text: '{{text}}',
            },
            button: 'Project'
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
            about: 'Meu nome é Leonardo e sou um desenvolvedor front-end apaixonado com um olhar apurado para design. Embora ainda não tenha nenhuma experiência de trabalho, tenho aprimorado minhas habilidades trabalhando em vários projetos pessoais. Uma das coisas que adoro no desenvolvimento de front-end é como ele me permite combinar meus interesses em arte e jogos. Vejo o desenvolvimento web como uma forma de arte digital que pode ser usada para criar experiências envolventes e imersivas para os usuários. Eu me esforço para criar designs que não sejam apenas visualmente atraentes, mas também funcionais e fáceis de usar. Quando não estou programando, geralmente posso ser encontrado explorando os videogames mais recentes ou participando de exposições de arte locais. Acho que esses dois hobbies me inspiram a pensar criativamente e abordar meu trabalho de diferentes ângulos. Obrigado por reservar um tempo para conferir meu portfólio e espero que goste de explorar meus projetos tanto quanto eu gostei de criá-los'
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
              text: '{{text}}',
            },
            button: 'Projeto'
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

export default i18n;
