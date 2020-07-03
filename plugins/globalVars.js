
export default ({ app }, inject) => {
  inject('globalVars', () => {
    return {
      facebookPage: 'https://www.facebook.com/StudioBMgraphic/',
      instagramPage: '#',
      phone: '0555 55 55 55',
      email: 'studiobmgraphic@gmail.com',
      address: 'Cité Benyoucef Benkhedda AADL OULED YAICH BT29 C2S2',
      hours: 'de 8h à 17h samedi-jeudi'
    }
  })
}
