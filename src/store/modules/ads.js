export default {
  state: {
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
    events: [
      {
        id: 0,
        title: 'Руки Вверх! Стадионный тур. 25 лет. Лучшее',
        annotation: 'Лучшие песни легендарной группы за 20 лет',
        date: '24.10.2020',
        time: '19:40',
        price: 1200,
        ticketsCount: 10,
        eventType: {
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
          name: 'Спектакли',
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
        date: '28.11.2020 - 30.11.2020',
        time: '',
        price: 2000,
        ticketsCount: 3,
        eventType: {
          name: 'Экскупсии',
          icon: 'mdi-bus-double-decker',
          color: 'blue'
        },
        img: {
          enable: true,
          src: 'road.jpg'
        },
      },
    ]
  },
  mutations: {
    ADD_EVENT (state, events) {
      state.events = events
    }
  },
  actions: {
    createEvent(context, event) {
      let events = context.state.events
      events.push(event)
      context.commit('ADD_EVENT', events)
    },
  }
}