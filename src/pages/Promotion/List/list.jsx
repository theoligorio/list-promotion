import React from 'react';
import PromotionCard from '../../../components/promotion/card/Card'

const PagesPromotionList = () =>{

    const promotion = {
        "id": 1,
        "title": "Kit Notebook Acer Aspire 3 + Mochila Green, A315-41-R790, AMD Ryzen 3 2200U Dual Core",
        "price": 1799,
        "imageUrl": "https://m.media-amazon.com/images/I/61o0lt6Sh6L._AC_SL1000_.jpg",
        "url": "https://www.amazon.com.br/Notebook-Acer-Mochila-A315-41-R790-Mem%C3%B3ria/dp/B07YDWLV7S",
        "comments": [
          {
            "id": 1,
            "comment": "TELA HD",
            "promotionId": 1
          },
        ]
      };

    return (
        <div>
              <PromotionCard promotion={promotion}/>
        </div>
    )
}

export default PagesPromotionList;