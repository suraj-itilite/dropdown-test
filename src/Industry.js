export default function Industry({ industry }) {
  return (
    <div>
      {industry ? (
        <div>
          <p>
            {" "}
            <strong>ID: </strong> {industry.id}{" "}
          </p>
          <p>
            {" "}
            <strong>Name: </strong> {industry.name}{" "}
          </p>
        </div>
      ) : null}
    </div>
  );
}
