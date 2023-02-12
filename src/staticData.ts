const data = {
    header: [
        { name: 'Resume', route: '/resume' },
        { name: 'Project', route: '/project' }
    ],
    resume: {
        skill: [
          'Basics：HTML5, CSS3, RWD, JavaScript, jQuery',
          'Styling： Sass, Bootstrap',
          'Frontend Frameworks： Vue.js',
          'Building tools： Npm & Yarn, Eslint',
          'Dev skills： Git Version Control',
          'Language： English'
        ],
        experience: [
          {
            title: 'Front-end Developer',
            establishmentName: 'Flowring Technology Corp.',
            workTime: 'Sep. 2021~Present',
            duty: [
              'Front-end development and maintenance of company products and customized projects',
              'Modularize management, Front-end framework application'
            ]
          },
          {
            title: 'PHP Developer',
            establishmentName: 'National TSING HUA University',
            workTime: 'Mar. 2020~SEP. 2021',
            duty: [
              'Back-End development/debugging',
              'Front-End basic development/debugging',
              'Customized report by requirement',
              'Troubleshooting & fixing'
            ]
          },
          {
            title: 'Assistant Manager',
            establishmentName: 'HIWIN MIKROSYSTEM CORP.',
            workTime: 'Jun 2012~Oct 2019',
            duty: [
              'Program proposal for ERP system',
              'ERP system abnormal feedback'
            ]
          }
        ],
        education: [
          {
            title: 'Bachelor\'s Degree',
            establishmentName: 'Chaoyang University of Science and Technology | Computer Science & Information Engineering',
            workTime: 'Sep. 2008~Jun. 2012'
          }
        ]
    },
    project: [
        {
          name: 'Lale mini service-嘉藥志工服務團',
          desc: 'Provide volunteer to sign up, punch, inquiry of records',
          charge: 'Full-stack development',
          environment: ['Vue.js 2', 'Bootstrap', 'Vuex', 'Vue Router', 'Google Sheet', 'Google App Script'],
          feature: ['Sign-up', 'Punch', ' Hours records', 'User manual'],
          image: [
            require('./assets/images/cnu/cover.png'),
            require('./assets/images/cnu/home.png'),
            require('./assets/images/cnu/sign-up.png'),
            require('./assets/images/cnu/punch.png'),
            require('./assets/images/cnu/record.png'),
            require('./assets/images/cnu/point.png')
          ]
        },
        {
          name: 'Lale mini service-佛光育成',
          desc: 'Provide to sign up travel itinerary and hire tutor',
          charge: 'Development of new requirements',
          environment: ['Vue.js 2', 'Quasar', 'Vuex', 'Vue Router'],
          feature: ['Account management', 'Forgot password', 'Data management'],
          image: [
            require('./assets/images/fgu/cover.png'),
            require('./assets/images/fgu/accout-page.png'),
            require('./assets/images/fgu/forget-password.png'),
            require('./assets/images/fgu/setting.png'),
            require('./assets/images/fgu/sign-up-data.png'),
            require('./assets/images/fgu/progress-group.png'),
            require('./assets/images/fgu/hire-tutor.png')
          ]
        },
        {
          name: 'Lale-友聚',
          desc: 'Provide to create and sign-up event, lottory, punch',
          charge: 'Maintain and development of new requirements',
          environment: ['Vue.js 2', 'Element UI', 'Vuex', 'Vue Router'],
          feature: ['QRcode sign-in', 'Lottery bug repairing', 'Members auto sign-up'],
          image: [
            require('./assets/images/event/cover.png'),
            require('./assets/images/event/qrcode.png'),
            require('./assets/images/event/button-ui.png'),
            require('./assets/images/event/member-modal.png')
          ]
        }
    ]
}

export default data