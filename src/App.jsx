import "./App.css";
import Widget from "remoteApp/Widget";

function App() {
  return (
    <>
      <div id="head">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgb(235, 225, 0)",
            width: "100vw",
            height: "40px",
          }}
        >
          <img
            style={{ position: "absolute", top: "5px", left: "30px" }}
            src="/src/assets/head1.png"
            height="30px"
          />
          <img
            style={{ position: "absolute", top: "5px", right: "30px" }}
            src="/src/assets/head2.png"
            height="30px"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: 0,
            backgroundColor: "rgb(254, 242, 0)",
            width: "100vw",
            height: "120px",
          }}
        >
          <img
            style={{ position: "absolute", top: "15px", left: "30px" }}
            src="/src/assets/logo.svg"
            height="86px"
          />
          <img
            style={{ position: "absolute", top: "35px", left: "420px" }}
            src="/src/assets/search.png"
            height="57px"
          />
          <img
            style={{ position: "absolute", top: "35px", right: "30px" }}
            src="/src/assets/logo2.png"
            height="57px"
          />
        </div>
      </div>

      <div id="content" style={{ padding: "200px 0 180px 0 !important" }}>
        <center>
          <Widget propositionId={4}/>
        </center>
      </div>

      <div id="foot">
        <div
          style={{
            position: "absolute",
            bottom: "160px",
            left: 0,
            width: "100vw",
            height: "80px",
          }}
        >
          <center>
            <img src="/src/assets/animal1.png" height="80px" />
          </center>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "78px",
            left: 0,
            backgroundColor: "rgb(0, 158, 224)",
            width: "100vw",
            height: "83px",
          }}
        >
          <center>
            <img src="/src/assets/animal2.png" height="83px" />
          </center>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(254, 242, 0, 0.15)",
            borderTop: "1px solid #ccc",
            width: "100vw",
            height: "40px",
          }}
        >
          <img
            style={{ position: "absolute", bottom: "5px", left: "30px" }}
            src="/src/assets/footer1.png"
            height="30px"
          />
          <img
            style={{ position: "absolute", bottom: "5px", right: "30px" }}
            src="/src/assets/footer2.png"
            height="30px"
          />
        </div>
      </div>
    </>
  );
}

export default App;
