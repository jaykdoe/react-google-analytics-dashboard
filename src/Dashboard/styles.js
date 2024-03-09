import styled from "styled-components";

export const ChartWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const PieChartWrapper = styled.div`
  width: 48vw;
  margin: 0 auto;
`;

export const StyledTable = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background: black;
    color: white;
  }

  .left-align {
    text-align: left;
  }
`;

export const colors = [
  "#fcba03",
  "#fa8c5c",
  "#9fc934",
  "#60d17e",
  "#45afed",
  "#7c5cdb",
  "#ce5cdb",
  "#db5c97",
];

export const ChartTitle = styled.h2`
  color: #4b2f57;
  font-size: 2rem;
`;

export const Subtitle = styled.h3`
  color: #35213d;
  padding-bottom: 20px;
`;

export const ReportWrapper = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid #f0eee9;
`;

export const LastRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
`;

export const DatepickerRow = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
`;

export const DatepickerWrapper = styled.div`
  color: #35213d;
  font-weight: 500;
  .picker {
    width: fit-content;
    border-color: #a2c1f2;
    border-radius: 10px;
    background-color: #d3dded;
    text-align: center;
    line-height: 20px;
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

export const DatepickerLabel = styled.label`
  padding-right: 5px;
`;

export const AccountSelectorWrapper = styled.div`
position: relative;
display: inline-block;
`;

export const AccountSelectorButton = styled.div`
background-color: #4CAF50;
color: white;
padding: 16px;
font-size: 16px;
border: none;
cursor: pointer;
div.hover {background-color: #3e8e41}
`;

export const AccountSelectorItems = styled.div`
display: none;
position: absolute;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
.div:hover {display: block}
`;

export const AccountSelectorLinks = styled.a`
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
a:hover {background-color: #f1f1f1}
`;