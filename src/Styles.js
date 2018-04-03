import "typeface-roboto";

export const textStyles = theme => ({
  container: {
    fontFamily: "roboto",
    paddingBottom: "7%",
    paddingLeft: "6%",
    paddingRight: "6%"
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
  }
});
