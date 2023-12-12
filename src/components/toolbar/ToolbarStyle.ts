import styled from "@emotion/styled";

export const ToolbarWrapper = styled.div({
  position: "absolute",
  zIndex: "100",
  bottom: "0",
  left: "0.75rem",
  right: "0.75rem",
},
({opacity}: {opacity:boolean}) => ({ opacity: opacity ? 0 : 1 }));

export const SettingRightSection = styled.div({
  display: "flex",
  gap: "10px",
  fontSize: "25px",
});

export const SettingLeftSection = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const SettingItemWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  gap: "30px",
  alignItems: "center",
});

export const TimeCounter = styled.span({
  fontSize: "15px",
  color: "#ddd",
});

export const VolumeWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  cursor: "pointer",
  color: "#ffffff"
});
