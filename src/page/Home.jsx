
import Card from "../component/Card";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Student Dashboard</h1>
      <h3>Student Details</h3>

      <div className="card-container">

        <Card
          name="sara"
          department="Information Technology"
          year="3rd Year"
        />

        <Card
          name="reena sri"
          department="Computer Science"
          year="2nd Year"
        />

        <Card
          name="ramya"
          department="Artificial Intelligence"
          year="1st Year"
        />

      </div>
    </div>
  );
}

export default Home;
