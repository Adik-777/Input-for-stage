
function Title(props) {
    const {title, subTitle} = props;
  return (
    <div>
        <h1 className="text-denim text-[32px] font-bold font-sans not-italic mt-[40px] mb-[11px]">
          {title}
        </h1>
        <p className="text-grey text-[16px] font-normal font-sans leading-[25px] mb-[35px]">
          {subTitle}
        </p>
      </div>
  )
}

export default Title