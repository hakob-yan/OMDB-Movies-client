import React from 'react'
import * as S from "./styles"
import { ISearch } from './types'

function Search({ onChange, value }: ISearch) {
    return (
        <S.Input onChange={onChange} value={value} placeholder='Search movies' />
    )
}

export default Search