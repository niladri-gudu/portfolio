export type GuestbookEntry = {
  id: string;
  name: string;
  message: string;
  reply: string | null;
  createdAt: Date;
};