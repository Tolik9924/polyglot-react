import axios from 'axios';
import React from 'react';

const Dictionary = () => {
    const app_id = '1e07b935'
    const app_key = 'a836455e0496b22a23de36c28538c78c';
    const wordId = "ace";
    const fields = "pronunciations";
    const strictMatch = "false";

    const word = 'example';
    const url = `https://od-api-sandbox.oxforddictionaries.com/api/v2/entries/en-gb/ace`;;

    /* axios.get({
        method: "GET",
        url: 'https://od-api-sandbox.oxforddictionaries.com/api/v2/entries/en-gb/ace',
        headers: {
            'app_id': app_id,
            'app_key': app_key,
        }
    })
        .then((response) => {
            console.log("RESPONSE: ", response.data);
        })
        .catch(error => { console.log("Error: ", error) }); */


    axios.get(url, {
        mode: "cors",
        headers: {
            'content-type': 'application/json',
            'app_id': app_id,
            'app_key': app_key
        }
    })
        .then((response) => {
            console.log("RESPONSE: ", response.data);
        })
        .catch(error => {
            console.log("Error: ", error);
        });

    return (
        <div>Dictionary</div>
    );
};

export default Dictionary;