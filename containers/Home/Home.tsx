import { useState, useMemo, useCallback, useRef } from 'react';
import debounce from 'lodash.debounce';

// import { useCities } from './';
import { SearchInput, MenuItem } from 'components';
import { fakeData } from './fakeData';

const SEARCH_DELAY = 800;
const CITY_NAME = 'tehran';

const Home = () => {
  const [cities, setCities] = useState(fakeData);
  const [isClear, setIsClear] = useState(false);

  const FormElementRef = useRef<any>();

  const isCurrentCity = useCallback(
    (city: any, keyword: string) => city.label.indexOf(keyword) > -1,
    []
  );

  const checkCities = (keyword: string) => {
    setCities((prev) =>
      prev.filter((city) => {
        if (isCurrentCity(city, keyword)) return city;
      })
    );
  };

  const performSearch = debounce((keyword: string) => {
    if (keyword === '') {
      setCities(fakeData);
    }
    checkCities(keyword);
  }, SEARCH_DELAY);

  const onClear = () => {
    FormElementRef.current?.reset();
    setCities(fakeData);
    setIsClear(false);
  };

  const handleSearch = (e: any) => {
    performSearch(e.target.value);
    if (e.target.value.length && !isClear) {
      setIsClear(Boolean(e.target.value));
    }
  };

  const renderCities = useMemo(
    () =>
      cities.map((city) => (
        <MenuItem
          label={city.label}
          name={CITY_NAME}
          value={city.label}
          key={city.id}
        />
      )),
    [cities]
  );

  return (
    <form className='bg-gray-100 min-h-screen pt-[54px]' ref={FormElementRef}>
      <SearchInput
        onChange={handleSearch}
        onClear={onClear}
        isClear={isClear}
      />
      <>{renderCities}</>
    </form>
  );
};

export default Home;
