import "typeface-roboto";

export const textStyles = theme => ({
  container: {
    fontFamily: "roboto",
    paddingTop: "2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem"
  },
  header: {
    position: "relative"
  },
  text: {
    position: "absolute",
    top: "30%",
    textAlign: "left",
    color: "white",
    backgroundColor: "rgba(0,0,0, 0.3)",
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "2%",
    paddingRight: "2%"
  },
  title: {
    fontSize: "4rem",
    paddingLeft: "3px",
    fontFamily: "roboto",
    fontWeight: "lighter"
  },
  subtitle: {
    fontSize: "2rem",
    fontWeight: "lighter"
  },
  info: {
    fontSize: 18,
    fontWeight: "lighter"
  },
  image: {
    paddingTop: "1%",
    width: "100%"
  },
  table: {
    borderCollapse: "collapse",
    margin: "0 auto"
  },
  tabletd: {
    padding: "1rem",
    border: "1px solid black",
    textAlign: "center",
    borderLeft: "0",
    borderRight: "0",
    borderTop: "0"
  },
  tableheader: {
    padding: "1rem",
    border: "1px solid white",
    backgroundColor: "#0b3861",
    color: "white",
    textAlign: "center"
  },
  tablesubtitle: {
    fontSize: "0.7rem",
    paddingTop: "0.4rem"
  }
});
