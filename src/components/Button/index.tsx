import { Container } from "./styles";

export function Button({ label, icon, ...props }) {
  return (
    <Container {...props}>
      <div>{icon}</div>
      <text>{label}</text>
    </Container>
  );
}
