import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dictionary = () => {
    const [word, setWord] = useState('hello');
    const [definition, setDefinition] = useState(null);

    const fetchDefinition = async () => {
        const app_id = '1e07b935';
        const app_key = 'a836455e0496b22a23de36c28538c78c';
        const language = 'en-gb'; // You can specify language here
        const url_1 = `https://thingproxy.freeboard.io/fetch/https://od-api-sandbox.oxforddictionaries.com/api/v2/entries/en-gb/ace`;
    
        try {
          const response = await axios.get(
            'https://thingproxy.freeboard.io/fetch/https://od-api-sandbox.oxforddictionaries.com/api/v2/domains/en-gb',
            {
                headers: {
                    app_id,
                    app_key,
                },
            }
          );
          setDefinition(response.data);
          console.log("RESPONSE: ", response.data);
        } catch (error) {
          console.error('Error fetching definition:', error);
        }
      };

    return (
        <div>
      <h1>Oxford Dictionary Lookup</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={fetchDefinition}>Search</button>
      
      {definition && (
        <div>
          <h2>Definition:</h2>
          <p>DEFINITION</p>
        </div>
      )}
    </div>
    );
};

export default Dictionary;