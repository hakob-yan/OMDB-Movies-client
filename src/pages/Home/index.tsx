import React, { ReactElement, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/rootSlice'
import { ICount } from '../../redux/rootSlice';
import * as S from "./styled"
import axios from "axios";


// <button onClick={() => dispatch(increment())}>Increment</button>
// <button onClick={() => dispatch(decrement())}>Decrement</button>
const Home = (): ReactElement => {

  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperHeader>
          d
        </S.WrapperHeader>
        <S.WrapperBody>
          g
        </S.WrapperBody>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
