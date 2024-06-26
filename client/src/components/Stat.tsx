import Wrapper from "../assets/wrappers/StatItem";

export default function Stat({ count, title, icon, color, bcg }: any) {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
}
