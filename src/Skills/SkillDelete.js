import React from 'react';

function SkillDelete() {
  const [list1, setList1] = React.useState([
    { id: 1, name: 'abcd' },
    { id: 2, name: 'xyz' },
  ]);

  function DeleteFromList(id) {
    const newList = list1.filter((y) => y.id !== id);
    setList1(newList);
  }

  return (
    <div>
      <ul>
        {list1.map((x) => {
          console.log('Item ID:', x.id);
          console.log('Item name:', x.name);

          return (
            <li key={x.id}>{x.name}
            <span onClick={() => DeleteFromList(x.id)} style={{
                  marginLeft: '10px',
                  color: 'red',
                  cursor: 'pointer',
                }}
              >x
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SkillDelete;
