export interface IUser {
    name: string;
    avatar?: string;
    status: string;
}

export interface IAccount {
  id: number;
  name: string;
  balance: number;
}

export interface ICounter {
   count: number
   handleCount: () => void
}

export interface ITodo {
    id: number
    title: string
    completed: boolean
}
