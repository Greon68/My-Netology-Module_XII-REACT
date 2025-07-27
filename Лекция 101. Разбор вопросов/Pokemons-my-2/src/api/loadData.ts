import { BASE_URL } from "../config/api";

export const loadData = (path='/')=> fetch(`${BASE_URL}${path}`).then( r => r.json())