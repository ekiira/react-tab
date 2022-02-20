import { StyledTabs, StyledTabsWrapper } from "../styles/global";
export default function Basic() {
  return (
    <div>
      <StyledTabsWrapper>
        <StyledTabs>One</StyledTabs>
        <StyledTabs>Two</StyledTabs> <StyledTabs>Three</StyledTabs>{" "}
        <StyledTabs>Four</StyledTabs>
      </StyledTabsWrapper>
    </div>
  );
}
