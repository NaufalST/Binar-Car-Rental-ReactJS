import { useState, useEffect } from "react";

import axios from "axios";

function App() {

  const [items, setItems] = useState([]);

  const getItems = async () => {
    const response = await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
    setItems(response.data.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      {items.map((item) => {
        return(
          <div className="item-list">
            <img src={item.image} alt=""/>
            <h6>{item.manufacture}/{item.type}</h6>
            <h3>Rp {item.rentPerDay} / hari</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, omnis neque earum et quaerat facilis ducimus accusamus repudiandae recusandae ad?</p>
            <p><img src="/public/images/fi_users.png" class="img-item-list" alt=""/>{item.capacity} orang</p>
            <p><img src="/public/images/fi_settings.png" class="img-item-list" alt=""/>{item.transmission}</p>
            <p><img src="/public/images/fi_calendar.png" class="img-item-list" alt=""/>Tahun {item.year}</p>
          <button class="btn-choice">Pilih Mobil</button>            
      </div>
        )
        
      })};
    </div>
    
  );
}

export default App;
