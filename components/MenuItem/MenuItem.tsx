import { MenuItemType } from './';

const MenuItem = ({ label, name, value, onChange }: MenuItemType) => {
  return (
    <label className='flex justify-between items-center px-3 py-2 border-b border-solid border-x-slate-500 bg-white'>
      {label}
      <input
        type='radio'
        onChange={onChange}
        name={name}
        value={value}
        className='checked:bg-purple-700 '
      />
    </label>
  );
};

export default MenuItem;
