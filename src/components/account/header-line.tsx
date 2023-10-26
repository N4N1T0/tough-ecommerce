const HeaderLine = ({ text }: { text: string }) => {
  return (
    <div>
      <h2 className='font-bold mb-2 uppercase'>{text}</h2>
      <hr className='w-full h-[1px] border-none bg-border' />
    </div>
  )
}

export default HeaderLine
