import dotenv from 'dotenv';
import http from "https";

dotenv.config()

const getFromOxfordDictionary = async (word) => {
    const app_id = process.env.OXFORD_APP_ID;
    const app_key = process.env.OXFORD_API_KEY_1;
    const fields = "pronunciations";
    const strictMatch = "false";

    const options = {
        host: 'od-api.oxforddictionaries.com',
        port: '443',
        path: '/api/v2/entries/en-gb/' + word + '?fields=' + fields + '&strictMatch=' + strictMatch,
        method: "GET",
        headers: {
            'app_id': app_id,
            'app_key': app_key
        }
    };

    return new Promise((resolve, reject) => {
        let body = '';
        let req = http.get(options);

        req.on('response', res => {
            res.on('data', d => {
                body += d;
            });

            res.on('end', () => {
                resolve(body)
            });
        });

        req.on('error', err => {
            reject(err);
        });
    });
}

const getPronunciation = async (word) => {
    try {
        const response = await getFromOxfordDictionary(word)
        const wordObject = JSON.parse(response)

        // The logical OR assignment (x ||= y) operator only assigns if x is falsy.
        const pronunciation = wordObject.results?.[0].lexicalEntries?.[0].entries?.[0].pronunciations?.[0].audioFile

        if (typeof pronunciation === 'undefined') {
            return ""
        }

        return pronunciation
    } catch (error) {
        console.log(error);
        return ""
    }
}

export default getPronunciation