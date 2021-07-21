import Storage from "./Storage";
import User from "./User";

export default class Item {
  id?: number;
  name?: string;
  material?: string;
  weight?: string;
  classification?: string;
  description?: string;
  url?: string;

  // possivel problema snackcase
  storagesId?: number;
  userId?: number;
  category?: string;
  price?: string;
  storages?: Storage;
  user?: User;
}