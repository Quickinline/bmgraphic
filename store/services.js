export const state = () => ({
  list: [
    {
      name: 'communication-visuelle',
      images: [
        'https://picsum.photos/id/237/1280/720/',
        'https://picsum.photos/id/238/1280/720/',
        'https://picsum.photos/id/239/1280/720/',
        'https://picsum.photos/id/240/1280/720/',
        'https://picsum.photos/id/241/1280/720/',
        'https://picsum.photos/id/242/1280/720/'
      ],
      details: [
        { name: 'this is a detail', description: 'this is description' }
      ]
    },
    {
      name: 'impression-petit-format',
      images: []
    },
    {
      name: 'impression-grand-format',
      images: []
    },
    {
      name: 'Développement',
      images: [],
      custom: true
    },
    {
      name: 'enseignes-&-signalétique',
      images: []
    },
    {
      name: 'Marquage-véhicules',
      images: []
    },
    {
      name: 'PLV-&-stand',
      images: []
    },
    {
      name: 'marquage-textile',
      images: []
      // details: [
      //   {
      //     name: 'test Détail',
      //     description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore libero ratione quae, quaerat ducimus inventore nobis perspiciatis molestias, sequi totam ea numquam omnis error mollitia adipisci, suscipit consectetur sunt fugit.'
      //   }
      // ]
    },
    {
      name: 'Décoration',
      images: []
    }

  ]
})
export const getters = {

  formattedName: state => (name) => {
    const service = state.list.find(service => service.name === name)
    const string = service.name.replace(/-/g, ' ')
    return string.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
  },
  link: state => (name) => {
    return '/services/' + name
  }
}
