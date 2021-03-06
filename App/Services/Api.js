// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://www.healthylife.pk/wp-json') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getUser = (username) => api.get('search/users', {q: username})
  
  const searchProducts = (consumer_key,consumer_secret,searchValue) => api.get(`/wc/v2/products?search=${searchValue}`,{consumer_key,consumer_secret})
  const featuredproducts = (consumer_key,consumer_secret) => api.get('/wc/v2/products/?featured=true',{consumer_key,consumer_secret})
  const newArrivals = (consumer_key, consumer_secret) =>  api.get('/wc/v2/products', {consumer_key ,consumer_secret})
  const salesProducts = (consumer_key,consumer_secret) => api.get('/wc/v2/products/?on_sale=true',{consumer_key,consumer_secret})
  // const preWorkouts = (consumer_key,consumer_secret) => api.get(`/wc/v2/products/cate`)
  const getAllcategories = (consumer_key,consumer_secret) => api.get('/wc/v2/products/categories', {consumer_key,consumer_secret})
  const productSpecifiCategories = (consumer_key,consumer_secret,categoryId) => api.get(`/wc/v2/products?category=${categoryId}`,{consumer_key,consumer_secret})
  const getCategorieDetail = (consumer_key,consumer_secret,categoryId) => api.get(`/wc/v2/products/categories/${categoryId}`,{consumer_key,consumer_secret}) 
  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getRoot,
    getRate,
    getUser,
    searchProducts,
    featuredproducts,
    salesProducts,
    newArrivals,
    getAllcategories,
    productSpecifiCategories,
    getCategorieDetail
  }
}

// let's return back our create method as the default.
export default {
  create
}
