import React, { useMemo } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';

import { AllMarqueeEquityTaskContextState } from '../context/MarqueeEquityTaskStateProvider';





// =========================search box style================================

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  height: "70px",
  maxWidth: "500px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "center",

  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  fontSize: "40px",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// =========================search box style================================




const SearchComp = () => {

  const {
    setSearchValue,

  } = AllMarqueeEquityTaskContextState()


  // ---------------------------------------------------------------------

  // debouncing effect to remove unwanted api Call..........

  const debounceFun = (cb, timeout) => {

    // console.log("debounceFunCalled")

    let timer;
    return function (...args) {

      if (timer) clearTimeout(timer)

      timer = setTimeout(() => {
        cb.apply(this, args)
      }, timeout);
    }
  }



  // -----------------------------------

  function updateSearch(e) {
    // console.log("updateSearchCalled")
    setSearchValue(e?.target?.value?.toLowerCase())
  }


  const debounceUpdateFun = useMemo(() => debounceFun(updateSearch, 500), [])


  // -----------------------------------


  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon className='searchIcon' />
      </SearchIconWrapper>
      <StyledInputBase
        className='searchInput'
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={debounceUpdateFun}
        sx={{ fontSize: 30 }}
      />
    </Search>
  )
}

export default SearchComp



// ==============================================================================




/*

        // value={searchValue}
        // onChange={(e) => setSearchValue(e.target.value.toLowerCase())}

*/