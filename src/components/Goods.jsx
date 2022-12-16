import React, { PureComponent, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetcher } from "../store/reducer";
import "../styles.css";

import GoodsItem from './GoodsItem';

function Goods() {
  const dispatch = useDispatch()
  const goods = useSelector(state => state.goods)
  const films = useSelector(state => state.films)
  let [val, setVal] = useState('')
  const add = (id) => {
    dispatch({ type: 'ADD', payload: id })
  }
  const addFilm = (name) => {
    dispatch({type: 'ADD_FILM_LIST', payload: name})
  }
  function change(ev) {
    setVal(ev.target.value)
  }
  return (
    <div className="goods">
      <input type="text" onChange={change} />
      <button onClick={() => dispatch(fetcher(val))}>Search</button>
      {films.map(item => (
        <div>
          <span key={item.Title}>{item.Title}</span>
          <button onClick={() => addFilm(item.Title)}>Add</button>
        </div>
      ))}
      <h2 className="goods__title">Video Games</h2>

      {goods.map(item => (
        <ul className="goods__list" key={item.id}>
          <li className="goods__list-item">
            <GoodsItem add={add} {...item} />
          </li>
        </ul>
      ))}
    </div>
  );
}


export default Goods;