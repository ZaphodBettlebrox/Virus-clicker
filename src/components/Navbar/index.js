import React from "react";
import "./style.css";


function Navbar(){

    return (
        
        <div>
            <div class="tabbar tabbar--material">
  <label class="tabbar__item tabbar--material__item">
    <input type="radio" name="tabbar-material-c" checked="checked"/>
    <button class="tabbar__button tabbar--material__button">
      <i class="tabbar__icon tabbar--material__icon zmdi zmdi-phone"></i>
      <div class="tabbar__label tabbar--material__label">Call</div>
    </button>
  </label>

  <label class="tabbar__item tabbar--material__item">
    <input type="radio" name="tabbar-material-c"/>
    <button class="tabbar__button tabbar--material__button">
      <i class="tabbar__icon tabbar--material__icon zmdi zmdi-favorite"></i>
      <div class="tabbar__label tabbar--material__label">Favorites</div>
    </button>
  </label>

  <label class="tabbar__item tabbar--material__item">
    <input type="radio" name="tabbar-material-c"/>
    <button class="tabbar__button tabbar--material__button">
      <i class="tabbar__icon tabbar--material__icon zmdi zmdi-delete"></i>
      <div class="tabbar__label tabbar--material__label">Delete</div>
    </button>
  </label>
</div>    

    </div>
    );
    
};

export default Navbar;