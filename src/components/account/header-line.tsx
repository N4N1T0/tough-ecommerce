const HeaderLine = ({ text, children }: { text: string, children?: React.ReactNode }) => {
  return (
    <div>
      <div className='w-full justify-between flex'>
        <h2 className='font-bold mb-2 uppercase'>{text}</h2>
        {children}
      </div>
      <hr className='w-full h-[1px] border-none bg-border' />
    </div>
  )
}

export default HeaderLine
