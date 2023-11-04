import { useState, ChangeEvent, FocusEvent } from 'react';
import {
  BiSearch as SearchIcon,
  BiRightArrowAlt as ArrowIcon,
} from 'react-icons/bi';
import { AiOutlineCloseCircle as CloseIcon } from 'react-icons/ai';

import { SearchInputType } from './';

const SearchInput = ({
  onChange,
  onFocus,
  onClear,
  isClear,
}: SearchInputType) => {
  const [isFocus, setIsFocus] = useState(false);

  const updateFocus = () => {
    setIsFocus((prev) => !prev);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    updateFocus();
    if (onFocus) onFocus(e);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };
const handleBack = () => {
  if (onClear) {
    onClear();
    updateFocus();
  }
}
  return (
    <div className='fixed top-0 w-full bg-white p-1 mb-2 h-12 shadow-md '>
      <input
        type='text'
        placeholder='جستجو'
        className='text-gray-600  w-full h-full  outline-none bg-gray-100 placeholder:text-gray-600 pr-6 rounded-lg'
        onFocus={handleFocus}
        onChange={handleChange}
      />
      {isFocus && (
        <ArrowIcon
          onClick={handleBack}
          className='absolute text-lg top-1/2 -translate-y-1/2 right-2 mt-[1px] fill-gray-500'
        />
      )}
      {!isFocus && (
        <SearchIcon className='absolute top-1/2 -translate-y-1/2 right-2 mt-[1px] fill-gray-500' />
      )}
      {!isFocus && (
        <div className='absolute top-1/2 -translate-y-1/2 right-[76px] mt-[1px]'>
          <span className='text-gray-600 mx-1 '>در</span>
          <span className='text-purple-600'>شهرتهران</span>
        </div>
      )}
      {isClear && (
        <CloseIcon
          onClick={handleBack}
          className='absolute top-1/2 -translate-y-1/2 left-2 fill-gray-500 text-lg'
        />
      )}
    </div>
  );
};

export default SearchInput;
