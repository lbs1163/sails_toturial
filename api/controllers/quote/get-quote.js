module.exports = {


    friendlyName: 'Get quote',
  
  
    description: 'Get a random quote.',
  
  
    exits: {
  
      success: {
      }
  
    },
  
  
    fn: async function () {
        var quote = await sails.helpers.getRandomOne();
        return { quote: quote };
    }
  
  
  };
  