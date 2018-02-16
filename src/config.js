/**
 * config.jsx
 *
 * @dateCreated 11/02/2018
 * @author Dean Heffernan
 */

module.exports = {
  // server config
  host: 'localhost',
  port: 3030,
  app: {
    // SEO metadata
    helmet: {
      titleTemplate: 'Gumtree React Panel',
      meta: [
        {name: 'description', content: 'Complete a test for Gumtree using ReactJS'},
        {name: 'keywords', content: 'Free, local, classifieds, classified Ads, Gumtree, Gumtree.com.au, classes, real estate, babysitter, dog, cat, shared rooms, pets, rental, apartments, apartment for rent, jobs, resume, cars, housing, furniture, personals, services, events, appliances marketplace, private, for free, search, find'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Gumtree Test'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Gumtree React Panel'},
        {property: 'og:description', content: 'Complete a test for Gumtree using ReactJS'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: 'Gummtree'},
        {property: 'og:creator', content: 'Dean Heffernan'},
        {property: 'og:country-name', content: 'Australia'},
        {property: 'og:url', content: 'https://www.gumtree.com.au'},
        {property: 'og:image', content: 'https://ssl-gumtree.classistatic.com/master-fbfa99fbb49f37bd2996aa6465ba59d3186f3925/img/au/share_logo.png'},
        {property: 'og:type', content: 'website'}
      ]
    }
  }
};