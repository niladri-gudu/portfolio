export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export type BlogPostWithContent = BlogPost & {
  content: string;
};
