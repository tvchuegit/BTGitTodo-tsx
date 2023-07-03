import { useState } from 'react'
function List({ onData, handleDelete, onChangeEdit}) {
    const [editing, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit(true);
    };
    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }
    const listItems = onData.map((item) =>
        <li key={item.id}>
            <span style={viewMode}>{item.name}</span>
            <input className="border border-r-0" type="text" style={editMode} value={item.name} onChange={(e) => onChangeEdit(item.id, e.target.value) } />
            <button className="ml-28" onClick={() => handleEdit(item)}>i</button>
            <button className="ml-10" onClick={() => handleDelete(item.id)}>x</button>
        </li>
    )
    return (
        <section className='flex max-w-[1440px] h-auto'>
            <ul>
                {listItems}
            </ul>
        </section>
    )
}
export default List