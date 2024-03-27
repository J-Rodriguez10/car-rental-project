function Step({ label, children, icon }) {
  return (
    <div className="step">
      <div className="icon-cont">{icon}</div>
      <div className="info-cont">
        <h4>{label}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Step;
