import { faker } from '@faker-js/faker';

export const firebaseConfig = {
  apiKey: faker.datatype.string(15),
  authDomain: 'chiper-faker.firebaseapp.fake',
  databaseURL: faker.datatype.string(15),
  projectId: 'chiper-faker',
  storageBucket: faker.internet.url(),
  messagingSenderId: faker.datatype.string(5),
  credentials: faker.datatype.string(10),
};
export const verifyIdToken = {
  token:
    'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwNTU5YzU5MDgzZDc3YWI2NDUxOThiNTIxZmM4ZmVmZmVlZmJkNjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2hpcGVyLWRldmVsb3BtZW50IiwiYXVkIjoiY2hpcGVyLWRldmVsb3BtZW50IiwiYXV0aF90aW1lIjoxNjc0MTIwOTI5LCJ1c2VyX2lkIjoidlBJU0ZSYXQ5TFBkUVpYMzRpQzRYV1k5eFZFMyIsInN1YiI6InZQSVNGUmF0OUxQZFFaWDM0aUM0WFdZOXhWRTMiLCJpYXQiOjE2NzQ1MzAxNDUsImV4cCI6MTY3NDUzMzc0NSwiZW1haWwiOiJqZXN1cy5udW5lekBjaGlwZXIuY28iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJqZXN1cy5udW5lekBjaGlwZXIuY28iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJjdXN0b20ifX0.b-0YNrbhVyq3ypTh9Y8lArSafnqJK1kfJooOomXPvF7WMfQq2-ae0xOkgFJcnBfeG0EHnfzw1FUBknR16IjaT3ObRiDeyUAilfCY7so6ops-bIxv0YmpaYHyd87Rly1oAkldjVj_6-wpqU_1ff9FCo5wqv4tHXLRWtElvOvpzYdd6ylEDCAGO3YuVQIb1lJMQ3w-BGIkk553hDHw44nsjBVuZpk8jLd70j6A2KBdbWW0K-XHxW3NeCrJwlpdZbnuga_XaNWLOLDuWjEcHH0iIee_Mj2ehvl8Ud7lLrPArjvp_3w-QQtRz8w0zqxWsF2ck0l7HVpe3t9hNR6ZGRcqfQ',
  infoToken: { uid: 'vPISFRat9LPdQZX34iC4XWY9xVE3' },
};
