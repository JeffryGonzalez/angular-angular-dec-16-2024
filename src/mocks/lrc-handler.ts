import { http, delay, HttpResponse } from 'msw';

const fakeLinks = [
  {
    id: '1',
    name: 'TypeScript Handbook',
    description: 'The TypeScript Language Handbook',
    link: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    datePosted: '2024-12-18',
    postedBy: 'Jeff',
  },
];

export const lrcHandlers = [
  http.get('/api/posts', async () => {
    await delay();
    return HttpResponse.json(fakeLinks);
  }),
];
