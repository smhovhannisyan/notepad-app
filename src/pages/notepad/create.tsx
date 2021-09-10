import dynamic from 'next/dynamic';

const Create = dynamic(() => import('templates/Create'));

function Notepad() {
  return (
    <Create notes={[{
      noteTitle: 'Hello',
      noteContent: 'Test Content',
    }]}
    />
  );
}

export default Notepad;
