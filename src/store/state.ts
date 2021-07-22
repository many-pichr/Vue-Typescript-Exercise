export type User = {
  id: number;
  login: string;
  followers_url: string;
  following_url: string;
  avatar_url:string;
  html_url:string;
  follower:number;
  following:number;
}

export type State = {
  loading: boolean;
  users: User[];
  user: any;
}

export const state: State = {
  loading: false,
  users: [],
  user: {}
}
