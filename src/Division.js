export default function Division({ dividend, divider }) {
  return (
    <div className="division-container">
      <div className="division-container_main-line">
        <div className="dividend-container number-size">{dividend}</div>
        <div className="divider-container number-size">{divider}</div>
      </div>
      <div className="division-container_operation line-line">
        <div className=""></div>
      </div>
    </div>
  );
}
