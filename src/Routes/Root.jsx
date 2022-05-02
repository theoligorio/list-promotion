import React from 'react';
import { BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import PagesPromotionForm from '../pages/Promotion/Form/form';
// import PagesPromotionList from '../pages/Promotion/List/list';
import PagesPromotionSearch from '../pages/Promotion/Search/Search';

  const Root = () =>{
    return(
        <Router>
            <Routes>
                {/* <Route path="/" element={<PagesPromotionList/>} /> */}
                <Route path="/" element={<PagesPromotionSearch/>} />
                <Route path="/create" element={<PagesPromotionForm/>} />
                <Route path="/edit/:id" element={<PagesPromotionForm/>} />
            </Routes>
        </Router>
    );
  }

  export default Root;
  