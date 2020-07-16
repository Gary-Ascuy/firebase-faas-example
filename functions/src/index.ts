import * as functions from 'firebase-functions';

const members = [
    "Gary Core",
    "Gory Ascuy",
    "Yrag Ascuy",
]

export const RandomGenerator = functions.https.onRequest((request, response) => {
    const random = Math.random();
    const position = Math.floor(random * members.length);
    const speaker = members[position];
    const date = new Date();
  
    functions.logger.info(`Speaker: ${speaker}`, { structuredData: true });
    response.send({ speaker, date, position, random, members });
});
