export default {
  state: {
    // модальное окно форм создания и редактирования события
    eventEditModal: {
      enable: false,
      viewType: '',
      editEnable: false
    },

    lastAdId: 50,

    adOnEdit: '',
    // title: '',
    // annotation: '',
    // date: '',
    // time: '',
    // price: '',
    // ticketsCount: '',
    // eventType: '',
    // img: {
    //   enable: false,
    //   src: ''
    // },

    eventTypes: [
      {
        id: 0,
        name: 'Концерты',
        icon: 'mdi-microphone-variant',
        color: 'blue'
      },
      {
        id: 1,
        name: 'Театры',
        icon: 'mdi-drama-masks',
        color: 'orange'
      },
      {
        id: 2,
        name: 'Волонтерство',
        icon: 'mdi-hand-heart',
        color: 'red'
      },
      {
        id: 3,
        name: 'Выход за город',
        icon: 'mdi-tent',
        color: 'green'
      },
      {
        id: 4,
        name: 'Экскупсии',
        icon: 'mdi-bus-double-decker',
        color: 'blue'
      },
    ],
    ads: [
      {
        id: 0,
        title: 'Руки Вверх! Стадионный тур. 25 лет. Лучшее',
        annotation: 'Лучшие песни легендарной группы за 20 лет',
        date: '24.10.2020',
        time: '19:40',
        price: 1200,
        ticketsCount: 10,
        eventType: {
          id: 0,
          name: 'Концерты',
          icon: 'mdi-microphone-variant',
          color: 'green'
        },
        img: {
          enable: false,
          src: ''
        },
      },
      {
        id: 1,
        title: 'Анна Каренина',
        annotation: 'Классика вечна',
        date: '25.10.2020',
        time: '20:40',
        price: 2000,
        ticketsCount: 7,
        eventType: {
          id: 1,
          name: 'Театры',
          icon: 'mdi-drama-masks',
          color: 'orange'
        },
        img: {
          enable: false,
          src: ''
        },
      },
      {
        id: 2,
        title: 'Поездка в приют',
        annotation: 'Навестим детоук, устроим им праздник',
        date: '25.10.2020',
        time: '20:00',
        price: 0,
        ticketsCount: 1000,
        eventType: {
          id: 2,
          name: 'Волонтерство',
          icon: 'mdi-hand-heart',
          color: 'red'
        },
        img: {
          enable: false,
          src: ''
        },
      },
      {
        id: 3,
        title: 'Загородный поход на 2 дня',
        annotation: 'поход на выходные, "шашлычки-машлычки" в комплекте',
        date: '25.10.2020',
        time: '',
        price: 1000,
        ticketsCount: 30,
        eventType: {
          id: 3,
          name: 'Выход за город',
          icon: 'mdi-tent',
          color: 'yellow'
        },
        img: {
          enable: false,
          src: ''
        },
      },
      {
        id: 4,
        title: 'Экскурсия в Санк-Питер',
        annotation: 'Предагаем посетить славный город и его достопремичательности.' +
          ' Ночной питер Вас не оставит равнодушным!',
        date: '28.11.2020',
        time: '',
        price: 2000,
        ticketsCount: 3,
        eventType: {
          id: 4,
          name: 'Экскупсии',
          icon: 'mdi-bus-double-decker',
          color: 'blue'
        },
        img: {
          enable: true,
          src: 'road.jpg'
        },
      },
      {
        id: 5,
        title: 'Metallica',
        annotation: 'Прощание легенды',
        date: '10.10.2020',
        time: '19:40',
        price: 999,
        ticketsCount: 3,
        eventType: {
          id: 0,
          name: 'Концерты',
          icon: 'mdi-microphone-variant',
          color: 'green'
        },
        img: {
          enable: false,
          src: ''
        },
      },
      {
        id: 6,
        title: 'Киркоров',
        annotation: 'Новая программа',
        date: '5.10.2020',
        time: '19:40',
        price: 5000,
        ticketsCount: 3,
        eventType: {
          id: 0,
          name: 'Концерты',
          icon: 'mdi-microphone-variant',
          color: 'green'
        },
        img: {
          enable: false,
          src: ''
        },
      },
      {
        id: 7,
        title: 'КВН',
        annotation: 'Полуфинал сезона 2020',
        date: '07.11.2020',
        time: '19:00',
        price: 500,
        ticketsCount: 25,
        eventType: {
          id: 1,
          name: 'Театры',
          icon: 'mdi-drama-masks',
          color: 'orange'
        },
        img: {
          enable: false,
          src: ''
        },
      },
    ],

    users: [
      {
        id: 1,
        username: 'Виктор',
        email: 'victor@ya.ru',
        groupId: 223,
        admin: true
      },
      {
        id: 2,
        username: 'serj',
        email: 'serj@ya.ru',
        groupId: 223,
        admin: false
      },
      {
        id: 3,
        username: 'Васек',
        email: 'vasa@ya.ru',
        groupId: 223,
        admin: false
      },
      {
        id: 4,
        username: 'Lera',
        email: 'Lera@ya.ru',
        groupId: 223,
        admin: false
      },
      {
        id: 5,
        username: 'Alex777',
        email: 'Alex777@ya.ru',
        groupId: 223,
        admin: false
      },
      {
        id: 6,
        username: 'Mila',
        email: 'Mila@ya.ru',
        groupId: 223,
        admin: false
      },
      {
        id: 7,
        username: 'IvanIvanovich',
        email: 'vano@ya.ru',
        groupId: 223,
        admin: false
      },
    ]
  },
  mutations: {
    SET_ADS (state, ads) {
      state.ads = ads
    },
    SET_EDIT_AD(state, ad) {
      state.adOnEdit = ad
    },
    INCREASE_AD_ID(state) {
      state.lastAdId = state.lastAdId + 1
    }
  },
  actions: {
    createAd(context, ad) {
      let ads = context.state.ads
      ad.id = context.state.lastAdId
      ads.push(ad)
      context.commit('SET_ADS', ads)
      context.commit('INCREASE_AD_ID')
    },
    addAdToEdit(context, ad) {
      let selectAd = context.state.adOnEdit
      selectAd = ad
      context.commit('SET_EDIT_AD', selectAd)
    },
    modifyAd(context, modifyAd) {
      let ads = context.state.ads
      ads = ads.map(ad => {
        return ad.id === modifyAd.id ? modifyAd : ad
      })
      context.commit('SET_ADS', ads)
    },
    getAd(context, id) {
      const ads = context.state.ads
      // console.log('lalala',id)
      const item = ads.find(ad => ad.id === id)
      // console.log(item)
      return item
    },
    getUser(context, id) {
      const users = context.state.users
      return users.find(user => user.id === id)
    }
    // clearEventOnEdit(context) {
    //
    // }
  }
}