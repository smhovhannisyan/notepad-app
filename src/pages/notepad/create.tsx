import dynamic from 'next/dynamic';

const Create = dynamic(() => import('templates/Create'));

function Notepad() {
  return (
    <Create />
  );
}

export default Notepad;
