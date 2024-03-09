function Step(props) {
  const { num, step, page, isClicked, stepClicked } = props;
  return (
    <div className="flex items-center gap-[16px] pb-[32px]">
      <span
        className={(isClicked + 1) === +num ? stepClicked : 'flex justify-center items-center text-[14px] text-white font-bold w-[33px] h-[33px] rounded-[50%] border-[1px] border-white'}
         
      >
        {num}
      </span>
      <div>
        <span className="text-[12px] font-normal text-[#ABBCFF] mb-[4px]">
          {step}
        </span>
        <h3 className="text-[14px] text-white font-bold leading-normal tracking-[1px]">
          {page}
        </h3>
      </div>
    </div>
  );
}

export default Step;
