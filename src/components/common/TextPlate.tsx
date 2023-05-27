import React from 'react'

interface Props{
  icon?:string,
  title : string
  content:string
  content2?:string
}

const TextPlate:React.FC<Props> = ({icon,title="text-2xl", content, content2}) => {
  return (
    <div>
      <div className="text-4xl font-bold mb-10">{title}</div>
      <p className="text-base text-paragraph leading-loose">{content}</p><br />
      <p className="text-base text-paragraph leading-loose">{content2}</p>
    </div>
  )
}

export default TextPlate