function Section(props) {
  return (
    <section style={{ backgroundImage: `url(${props.bgImage})` }}>
      <div className="top">
        <h1 className="text-5xl text-center font-bold">{props.heading}</h1>
        <p className="mt-5">{props.tagline}</p>
      </div>
      <div className="bottom">
        <div className="btns text-xl text-center flex gap-5">
          <button className="btnLeft border-1 ">{props.leftBtn}</button>
          {props.rightBtn && <button className="btnRight border-1 ">{props.rightBtn}</button>}
        </div>

        {props.downArrow && (
          <div className="downArrowIcon">
            <img src={props.downArrow} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;
