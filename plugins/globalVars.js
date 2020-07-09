
export default ({ app }, inject) => {
  inject('globalVars', () => {
    return {
      facebookPage: 'https://www.facebook.com/StudioBMgraphic/',
      instagramPage: 'https://www.instagram.com/p/CCawPZwlLJk/',
      phone: '0542 13 04 36',
      email: 'studiobmgraphic@gmail.com',
      address: 'Cité Benyoucef Benkhedda AADL OULED YAICH BT29 C2S2',
      hours: 'de 8h à 17h du samedi au jeudi'
    }
  })
}
