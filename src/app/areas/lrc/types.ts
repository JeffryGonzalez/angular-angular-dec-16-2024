export type PostApiResponseItem = {
  id: string;
  name: string;
  description: string;
  link: string;
  datePosted: string;
  postedBy: string;
};

export type PostApiResponse = PostApiResponseItem[];
