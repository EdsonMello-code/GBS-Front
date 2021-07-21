import React, {useEffect, useState} from "react";
import Popup from "reactjs-popup";
import storage from "../../../models/Storage"
import "reactjs-popup/dist/index.css";
import "./AddItem.css";
import add from "../../../Assets/add_circle_outline_white_24dp.svg";
import api from "Server/api"

export default function AddStorage(props:any) {

  const [itemName, setItemName] = useState<String>('');
  const [itemStorage, setItemStorage] = useState<String>('');
  const [storages, setStorages] = useState<Array<storage>>([]);
  const [itemUrl, setItemUrl] = useState<String>('');

  useEffect(() => getStorages(), []);

  function addStorage(e: any){
    e.preventDefault();
    
    api.post(`/users/1/storages/1/items`, {
      name: itemName,
      url: itemUrl,
      description: itemStorage,
      material: "",
      weight: "",
      classification: "",
      category: "",
      price:0
    }).then(response => {
      console.log("Success");
      props.setItems([...props.items, response.data]);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
    })
  }

  function getStorages(){
    api.get(`/users/1/storages`).then(response => {
      setStorages(response.data.storages)
    })
  }

  return (
    <Popup
      trigger={
        <div className="add-button">
          <button className="default-button">
            <img src={add} alt="Add Storage"></img>
            <span>Add Item</span>
          </button>
        </div>
      }
      
      position="right center"
      modal
      nested
    >
      {(close:any) => (
        <div className="default-popup">
          <div className="popup-title">Add Item</div>
          <form onSubmit={addStorage}>
              <div className="form-group">
                  <label htmlFor="storage-name">Name</label>
                  <input type="string" required className="form-control" id="storage-name" onChange={e => setItemName(e.target.value)} aria-describedby="storageName" placeholder="Storage Name"/>
              </div>

              <div className="form-group">
                  <label htmlFor="storage-name">Storage</label>
                  <select required className="form-control" id="storage-name" onChange={e => setItemStorage(e.target.value)} aria-describedby="storageName" placeholder="Storage Name">
                    {storages.map((storage => {
                      return <option value={storage.name}>{storage.name}</option>
                    }))}
                  </select>
              </div>
              
              <div className="form-group">
                  <label htmlFor="image-url">Image Url</label>
                  <input type="string" required className="form-control" id="image-url" onChange={e => setItemUrl(e.target.value)} aria-describedby="imageUrl" placeholder="Image Url"/>
              </div>
              
              <div className="popup-options">
                  <button type="submit" className="default-button">Save</button>
              </div>

          </form>
        </div>
      )
    }
      
    </Popup>
  );
}
