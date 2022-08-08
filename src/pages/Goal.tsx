import goalCss from "./pages.module.css";

const Goal = () => {
  return (
    <div>
      <div className={goalCss.goalCircleBg}>
        <span className="text-5xl">달성!</span>
      </div>
    </div>
  );
};

export default Goal;
