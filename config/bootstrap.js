/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if (await User.count() > 0) {
    return;
  }
  
  await User.createEach([
    { username: 'Shashan', password: 'test123', email: 'shashan@gmail.com'}
    // etc.
  ]);

  if (await Category.count() > 0) {
    return;
  }
  
  await Category.createEach([
    { id:1, title: 'For Women', parentId: []},
    { id:2, title: 'Shoes', parentId: [1] },
    { id:3, title: 'Pump', parentId: [2] },
    { id:4, title: 'Golf', parentId: [3] },
    // etc.
  ]);
  if (await Merchant.count() > 0) {
    return;
  }
  await Merchant.createEach([
    {  id:1, title: 'Reebok' },
    {  id:2, title: 'Ecco' },
    // etc.
  ]);
  if (await Product.count() > 0) {
    return;
  }


  await Product.createEach([
    { id: 103, 
      url: 'http://www.lifestylelabels.com/steven-by-steve-madden-pryme-pump.html',
      title: 'elegant red pump', images: ['http://www.lifestylelabels.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/s/t/steven-by-steve-madden-pryme-pump.jpg'], 
      price: 299, msrp: 0, available: true, description: 'Nothing will turn his head faster than you wearing the sexy Pryme pump from Steven by Steve Madden. This daring pump has a pretty patent leather upper with light shirring, a double stitch detail surrounding the collar, and a vampy almond shaped toe.',
      category: 3, merchant: 1},

     { id: 108,
      url: 'http://www.lifestylelabels.com/nine-west-women-s-lucero-pump.html',
      title: 'glittering red pump', images: ['http://www.lifestylelabels.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/n/i/nine-west-women-s-lucero-pump.jpg'], 
      price: 289.99, msrp: 0, available: true, description: 'The Lucero pump from Nine West may just leave him at a loss for words. This flirty pump has a leather upper, a pretty almond-shaped toe with a slight V-cut vamp, leather linings, and a cushioned insole for long-wearing comfort.',
      category: 3, merchant: 1},

     { id: 112,
      url: 'http://www.lifestylelabels.com/womens-golf-shoes.html',
      title: 'womens golf shoes', images: ['http://www.lifestylelabels.com/media/catalog/product/e/c/ecco-womens-golf-flexor-golf-shoe.jpg'], 
      price: 159, msrp: 0, available: false, description: 'Sporting with style, this is a durable and super-comfortable golf shoe built for performance.',
      category: 4, merchant: 2}
    // etc.
  ]);

};
