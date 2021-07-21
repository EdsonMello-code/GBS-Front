import Item from "./Item";
import User from "./User";

export default class Storage {
  id?: number;
  name?: string;
  url?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  userId?: number;

  items?: Item[];
  user?: User;

}
