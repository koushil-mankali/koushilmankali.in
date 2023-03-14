import css from "./DetailComponent.module.css";

const RightDetailComponent = ({ txt, ttl, dur }) => {
  return (
    <div className={css.outerDiv}>
      <div className={css.box2}>
        <div className={css.content}>
          <span className={css.ttl}>{ttl}</span>
          <span className={css.dur}>{dur}</span>
          <span className={css.txt}>{txt}</span>
        </div>
      </div>
      <div className={css.box1}></div>
    </div>
  );
};

export default RightDetailComponent;
