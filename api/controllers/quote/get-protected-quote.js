module.exports = {


    friendlyName: 'Get protected quote',
  
  
    description: 'Get a random quote. (Can be accessed by users only)',
  
  
    exits: {
  
      success: {
      }
  
    },
  
  
    fn: async function () {
        var quote = await sails.helpers.getRandomOne();
        return { quote: quote };
    }
  
  
  };
  