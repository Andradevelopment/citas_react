

const Error = ({mensaje}) => {
    return (
        <div className='flex-row text-center bg-red-200 border-b-2 rounded border-red-300 my-5 mb-4'>
            <p>{mensaje}</p>
        </div>
    )
};

export default Error
