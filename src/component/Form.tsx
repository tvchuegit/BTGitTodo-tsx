import { useState } from 'react' 
function Form({onSubmit}) {
    const [count, setCount] = useState('') // '' la rong
    function onvalue(e) {
        setCount(e.target.value)
        // e la event
        // console.log('count', count);
    }
    function handleClick() {
        // console.log('count', count);
        onSubmit(count)
        setCount('')
    }
    return (
        <section className='flex max-w-[1440px] h-auto'>
            <input
                value={count}
                type='text'
                placeholder='Add a new task'
                onChange={(e) => onvalue(e)}
                // onKeyDown={e => e.key === 'Enter' ?  : ''}
                className='h-10 border border-solid rounded-md px-2 pb-1 mr-5'
            />
            <div className='flex border border-solid rounded-md'>
                <button className='h-10 mr-1' onClick={handleClick}>Creat</button>
            </div>
        </section>
    )
}
export default Form