import { Container } from "./styles";

export function SearchInput({ label, icon, ...props }) {
  return (
    <>
      <Container>
        <div>
          <label>{label}</label>

          <input {...props} />
          <div className="icon">{icon}</div>
        </div>
      </Container>
    </>
  );
}
