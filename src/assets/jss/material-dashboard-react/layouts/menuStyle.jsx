

const appStyle = theme => ({
  menu: {
    backgroundColor: "#fff",
    position: "relative",
    zIndex: "100",
    animation: "none"
  },
  siteLogo: {},
  container: {
    maxWidth: "none",
    width: "1220px",
    margin: "0 auto",
    lineHeight: "100px",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "3fr 8fr 1fr",
    alignItems: "center"
  },
  nav: {
    float: "right",
    position: "static !important"
  },
  ul: {
    margin: "0",
    padding: "0",
    listStyle: "none"
  }
});

export default appStyle;
