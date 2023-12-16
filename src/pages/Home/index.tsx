import React, { ReactElement, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/rootSlice'
import { ICount } from '../../redux/rootSlice';
import * as S from "./styled"
import axios from "axios";
import Search from '../../components/Search';


// <button onClick={() => dispatch(increment())}>Increment</button>
// <button onClick={() => dispatch(decrement())}>Decrement</button>
const Home = (): ReactElement => {
  const [searchValue, setSeacrhValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeacrhValue(e.target.value)
  }
  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperHeader />

        <S.WrapperBody>
          <Search value={searchValue} onChange={handleChange} />
        </S.WrapperBody>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
