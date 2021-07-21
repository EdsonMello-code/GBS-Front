import React, {useState} from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./AddStorage.css";
import add from "../../../Assets/add_circle_outline_white_24dp.svg";
import api from "Server/api"

export default function AddStorage(props:any) {

  const [storageName, setStorageName] = useState<String>('');
  const [storageAddress, setStorageAddress] = useState<String>('');
  const [storageUrl, setStorageUrl] = useState<String>('');

  function addStorage(e: any){
    e.preventDefault();
    console.log('entrou');
    
    api.post(`/users/1/storages`, {
      name: storageName,
      address: storageAddress,
      url: storageUrl,
      latitude: 1,
      longitude: 1
    }).then(response => {
      console.log("Success");
      console.log(props.storages);
      console.log(response.data);
      props.setStorage([...props.storages, response.data]);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      console.log('djasias')
    })
  }

  return (
    <Popup
      trigger={
        <div className="add-button">
          <button className="default-button">
            <img src={add} alt="Add Storage"></img>
            <span>Announce Storage</span>
          </button>
        </div>
      }
      
      position="right center"
      modal
      nested
    >
      {(close:any) => (
        <div className="default-popup">
          <div className="popup-title">Announce Storage</div>
          <form onSubmit={addStorage}>
              <div className="form-group">
                  <label htmlFor="storage-name">Name</label>
                  <input type="string" required className="form-control" id="storage-name" onChange={e => setStorageName(e.target.value)} aria-describedby="storageName" placeholder="Storage Name"/>
              </div>
              
              <div className="form-group">
                  <label htmlFor="storage-address">Address</label>
                  <input type="string" required className="form-control" id="storage-address" onChange={e => setStorageAddress(e.target.value)} aria-describedby="storageAddress" placeholder="Storage Address"/>
              </div>

              <div className="form-group">
                  <label htmlFor="image-url">Image Url</label>
                  <input type="string" required className="form-control" id="image-url" onChange={e => setStorageUrl(e.target.value)} aria-describedby="imageUrl" placeholder="Image Url"/>
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
