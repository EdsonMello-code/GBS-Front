import React, { useState, useEffect } from "react";
import api from "Server/api"
import "./Storages.css";
import AddStorage from "../AddStorage/AddStorage";  
import storage_img from "../../../Assets/storage.jpg"
import Star from "../../../Assets/star_white_24dp.svg"
import Storage from '../../../models/Storage'
// import map from "../../../Assets/map.png"

export default function Storages() {
  useEffect(() => {
    getStorages()
  }, [])

  const [storages, setStorage] = useState<Array<Storage>>([]);
  const [stars] = useState<Array<number>>([1,2,3]);

  function getStorages(){
    api.get("/users/1/storages/").then(resp => {
      console.log('storage:')
      console.log(resp.data.storages);
      if(resp.data.storages){
        setStorage(resp.data.storages);
      }
      
    });
  }

  return (
      <div className="storage-index">
        <div className="storage-listing">
          {storages.map((storage) => {
            return <div key={storage.id} className="storage-announcement">
              <div className="storage-image-container">
                <img src={storage.url?.includes("http")? storage.url : storage_img} alt="storage"></img>
              </div>
              <div className="storage-announcement-info"> 
                <div>{storage.name}</div>
                <div>{storage.address}</div>
                <div>Rating:
                  {stars.map((star) => {
                    return <img key={star} src={Star} alt={"star"}></img>
                  })}
                </div>
              </div>
              
            </div>
          })}
          <AddStorage storages={storages} setStorage={setStorage}></AddStorage>
        </div>
      </div>
  );
}
