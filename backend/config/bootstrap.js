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
    { username: 'Test', password: 'test123', email: 'shashan@gmail.com'}
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
      url: 'http://lifestylelabels.com/lsl-women-ballerina-silver.html',
      title: 'elegant red pump', images: ['http://lifestylelabels.com/pub/media/catalog/product/cache/1/image/700x560/e9c3970ab036de70892d86c6d221abfe/w/s/wsh022.jpg'], 
      price: 299, msrp: 0, available: true, description: 'Nothing will turn his head faster than you wearing the sexy Pryme pump from Steven by Steve Madden. This daring pump has a pretty patent leather upper with light shirring, a double stitch detail surrounding the collar, and a vampy almond shaped toe.',
      category: 3, merchant: 1},

     { id: 108,
      url: 'http://lifestylelabels.com/lsl-women-high-heel-leopard.html',
      title: 'glittering red pump', images: ['http://lifestylelabels.com/pub/media/catalog/product/w/h/whh008_1.jpg'], 
      price: 289.99, msrp: 0, available: true, description: 'The Lucero pump from Nine West may just leave him at a loss for words. This flirty pump has a leather upper, a pretty almond-shaped toe with a slight V-cut vamp, leather linings, and a cushioned insole for long-wearing comfort.',
      category: 3, merchant: 1},

     { id: 112,
      url: 'http://lifestylelabels.com/lsl-women-high-heels-classic-black-patent-leather.html',
      title: 'womens golf shoes', images: ['http://lifestylelabels.com/pub/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/w/h/whh009.jpg'], 
      price: 159, msrp: 0, available: false, description: 'Sporting with style, this is a durable and super-comfortable golf shoe built for performance.',
      category: 4, merchant: 2}
    // etc.
  ]);

};
