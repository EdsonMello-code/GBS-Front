import Item from "./Item";
import Storage from "./Storage";

export default class User {
  id?: number;
  name?: string;
  storages?: Storage[];
  items?: Item[];
}