import Step from './Step';

function Steps(props) {
  const { stepClicked, isClicked } = props;
  return (
    <div className="bg-oval w-[274px] h-[568px] rounded-[10px] py-[40px] px-[32px]">
      <Step
        isClicked={isClicked}
        stepClicked={stepClicked}
        num="1"
        step="step 1"
        page="YOUR INFO"
      />
      <Step
        isClicked={isClicked}
        stepClicked={stepClicked}
        num="2"
        step="step 2"
        page="SELECT PLAN"
      />
      <Step
        isClicked={isClicked}
        stepClicked={stepClicked}
        num="3"
        step="step 3"
        page="ADD-ONS"
      />
      <Step
        isClicked={isClicked}
        stepClicked={stepClicked}
        num="4"
        step="step 4"
        page="SUMMARY"
      />
    </div>
  );
}

export default Steps;
